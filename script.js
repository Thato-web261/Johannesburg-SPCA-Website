/* Johannesburg SPCA - Part 3 interactivity (vanilla JS + Leaflet) */
(function () {
  'use strict';
  var ANIMALS = [];
  function loadAnimals() { return fetch('animals.json').then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }); }
  var FEES = { dog: 1000, cat: 750, deposit: 500, sponsor: 400 };
  var page = document.body.getAttribute('data-page');
  function $(s, r) { return (r || document).querySelector(s); }
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt) e.textContent = txt; return e; }

  /* ---- Dynamic adoption grid with search, filter and sort ---- */
  function initAdopt() {
    var grid = $('#adopt-grid'); if (!grid) return;
    var q = $('#search'), t = $('#type'), s = $('#sort'), count = $('#result-count');
    function render() {
      var list = ANIMALS.filter(function (a) {
        return a.name.toLowerCase().indexOf(q.value.trim().toLowerCase()) > -1 && (t.value === 'all' || a.type === t.value);
      }).sort(function (a, b) { return s.value === 'age' ? a.age - b.age : a.name.localeCompare(b.name); });
      grid.textContent = '';
      list.forEach(function (a) {
        var c = el('div', 'adopt-card'), i = el('div'), l = el('a', 'btn btn-small', 'Enquire about ' + a.name);
        var b = 'images/' + a.img; i.innerHTML = '<picture><source type="image/webp" srcset="' + b + '-400.webp 400w, ' + b + '-720.webp 720w" sizes="(max-width: 640px) 100vw, 33vw"><img src="' + b + '.jpg" width="720" height="720" loading="lazy" alt=""></picture>'; i.querySelector('img').alt = a.alt;
        l.href = 'enquiry.html?pet=' + encodeURIComponent(a.name);
        c.append(i, el('h4', '', a.name), el('p', '', a.type.charAt(0).toUpperCase() + a.type.slice(1) + ' · ' + a.age + (a.age === 1 ? ' year' : ' years')), l);
        grid.appendChild(c);
      });
      count.textContent = list.length ? list.length + ' animal(s) found.' : 'No animals match your search.';
    }
    [q, t, s].forEach(function (x) { x.addEventListener('input', render); });
    count.textContent = 'Loading animals…';
    loadAnimals().then(function (d) { ANIMALS = d; render(); }).catch(function () { count.textContent = 'Sorry, the animal list could not be loaded. Please try again later.'; });
  }

  /* ---- Gallery lightbox ---- */
  function initLightbox() {
    var grid = $('#gallery-grid'); if (!grid) return;
    var box = el('div', 'lightbox'), img = el('img'), cap = el('p'), close = el('button', 'lb-close', '×');
    box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.hidden = true;
    close.setAttribute('aria-label', 'Close image'); box.append(close, img, cap); document.body.appendChild(box);
    function hide() { box.hidden = true; }
    grid.querySelectorAll('img').forEach(function (im) {
      im.tabIndex = 0; im.style.cursor = 'zoom-in';
      function open() { img.src = im.src; img.alt = im.alt; cap.textContent = im.nextElementSibling ? im.nextElementSibling.textContent : im.alt; box.hidden = false; close.focus(); }
      im.addEventListener('click', open);
      im.addEventListener('keydown', function (e) { if (e.key === 'Enter') open(); });
    });
    box.addEventListener('click', function (e) { if (e.target !== img) hide(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
  }

  /* ---- Accordion ---- */
  function initAccordion() {
    document.querySelectorAll('.acc-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        var p = document.getElementById(b.getAttribute('aria-controls')), open = b.getAttribute('aria-expanded') === 'true';
        b.setAttribute('aria-expanded', String(!open)); p.hidden = open;
      });
    });
  }

  /* ---- Leaflet map (approximate shelter position) ---- */
  function initMap() {
    var m = $('#map'); if (!m || !window.L) return;
    var pos = [-26.2437, 28.0294];
    var map = L.map(m).setView(pos, 14);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
    L.marker(pos).addTo(map).bindPopup('<strong>Johannesburg SPCA</strong><br>Reuven, Johannesburg');
  }

  /* ---- Shared form validation helpers ---- */
  function setError(f, msg) {
    var old = f.nextElementSibling; var id = f.id + '-err', e = document.getElementById(id);
    if (!e) { e = el('span', 'field-error'); e.id = id; f.insertAdjacentElement('afterend', e); }
    e.textContent = msg; f.setAttribute('aria-invalid', msg ? 'true' : 'false');
  }
  function check(f) {
    var v = f.value.trim(), m = '';
    if (f.required && !v) m = 'This field is required.';
    else if (v && f.minLength > 0 && v.length < f.minLength) m = 'Please enter at least ' + f.minLength + ' characters.';
    else if (v && f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) m = 'Enter a valid email address.';
    else if (v && f.type === 'tel' && f.pattern && !new RegExp('^(?:' + f.pattern + ')$').test(v)) m = 'Enter a valid South African number, e.g. 011 386 3435.';
    else if (v && f.type === 'date' && v < new Date().toISOString().slice(0, 10)) m = 'Choose today or a future date.';
    setError(f, m); return !m;
  }
  function validate(form) {
    var ok = true;
    form.querySelectorAll('input:not([type=radio]), select, textarea').forEach(function (f) { if (!check(f)) ok = false; });
    return ok;
  }
  function liveCheck(form) { form.addEventListener('focusout', function (e) { if (e.target.matches('input, select, textarea')) check(e.target); }); }

  /* ---- Enquiry: validate, then show cost/availability (async, AJAX-style) ---- */
  function initEnquiry() {
    var form = $('#enquiry-form'); if (!form) return;
    var out = $('#enquiry-result'), d = $('#e-date'); d.min = new Date().toISOString().slice(0, 10);
    var pet = new URLSearchParams(location.search).get('pet');
    if (pet) loadAnimals().then(function (l) { var a = l.filter(function (x) { return x.name === pet; })[0]; if (a) $('#e-topic').value = 'adopt-' + a.type; }).catch(function () {});
    liveCheck(form);
    form.addEventListener('submit', function (e) {
      e.preventDefault(); out.hidden = true;
      if (!validate(form)) { var bad = $('[aria-invalid=true]', form); if (bad) bad.focus(); return; }
      var name = $('#e-name').value.trim(), topic = $('#e-topic').value, when = d.value, msg;
      loadAnimals().then(function (list) {
        var type = topic.split('-')[1], avail = list.filter(function (x) { return x.type === type; });
        if (topic.indexOf('adopt') === 0) msg = 'Thank you, ' + name + '. Adopting a ' + type + ' costs R' + FEES[type] + ' plus a refundable R' + FEES.deposit + ' deposit. ' + avail.length + ' ' + type + '(s) are currently available. We will confirm your visit on ' + when + '.';
        else if (topic === 'sponsor') msg = 'Thank you, ' + name + '. Sponsoring a kennel is R' + FEES.sponsor + ' per month. Kennels are available now; we will email payment details.';
        else msg = 'Thank you, ' + name + '. Volunteer places are open. Our coordinator will contact you about an orientation on ' + when + '.';
        out.textContent = msg; out.hidden = false; out.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); form.reset();
      }).catch(function () { out.textContent = 'Sorry, we could not load availability right now. Please call 011 681 3600.'; out.hidden = false; });
    });
  }

  /* ---- Contact: validate, compile email, let the visitor send it ---- */
  function initContact() {
    var form = $('#contact-form'); if (!form) return;
    var out = $('#contact-result'); liveCheck(form);
    form.addEventListener('submit', function (e) {
      e.preventDefault(); out.hidden = true;
      if (!validate(form)) { var bad = $('[aria-invalid=true]', form); if (bad) bad.focus(); return; }
      var body = 'Name: ' + $('#c-name').value.trim() + '\nEmail: ' + $('#c-email').value.trim() + '\nPhone: ' + ($('#c-phone').value.trim() || 'n/a') + '\nType: ' + $('#c-type').value + '\n\n' + $('#c-msg').value.trim();
      var href = 'mailto:info@jhbspca.co.za?subject=' + encodeURIComponent('Website message: ' + $('#c-type').value) + '&body=' + encodeURIComponent(body);
      out.textContent = 'Your email is ready. '; var a = el('a', 'btn btn-primary', 'Send email to info@jhbspca.co.za'); a.href = href; out.appendChild(a); out.hidden = false;
    });
  }

  /* ---- Generic validated forms that compile an email (cruelty report, volunteer sign-up) ---- */
  function initMailForms() {
    document.querySelectorAll('form[data-mail]').forEach(function (form) {
      var out = $('#mail-result'); liveCheck(form);
      form.addEventListener('submit', function (e) {
        e.preventDefault(); out.hidden = true;
        if (!validate(form)) { var bad = $('[aria-invalid=true]', form); if (bad) bad.focus(); return; }
        var body = '';
        form.querySelectorAll('input, textarea').forEach(function (f) { var l = form.querySelector('label[for=' + f.id + ']'); if (l) body += l.textContent + ': ' + (f.value.trim() || 'n/a') + '\n'; });
        var a = el('a', 'btn btn-primary', 'Send email to info@jhbspca.co.za');
        a.href = 'mailto:info@jhbspca.co.za?subject=' + encodeURIComponent(form.getAttribute('data-mail')) + '&body=' + encodeURIComponent(body);
        out.textContent = 'Your details are valid. '; out.appendChild(a);
        if (form.id === 'cruelty-form') out.appendChild(el('p', '', 'For an emergency please also call the 24-hour hotline: 011 386 3435.'));
        out.hidden = false;
      });
    });
  }

  initMailForms(); initAdopt(); initLightbox(); initAccordion(); initEnquiry(); initContact();
  if (page === 'contact') {
    var css = document.createElement('link'); css.rel = 'stylesheet'; css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'; document.head.appendChild(css);
    var js = document.createElement('script'); js.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'; js.onload = initMap; document.body.appendChild(js);
  }
})();
