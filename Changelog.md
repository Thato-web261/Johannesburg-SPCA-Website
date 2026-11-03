# Changelog

All notable changes to the Johannesburg Website project are documented in this file.

# Fixed
updated website of the original website.
Updated all sitemap lastmod dates to current (September 2024)

### Part 2 — CSS Styling & Responsive Design

- **Structure fix:** Removed the duplicate site architecture from Part 1. There
  were previously two versions of the homepage — a full single-page site in
  `index.html` (with every section as an anchor-linked `#id`) *and* a separate
  set of multi-page files (`home.html`, `about.html`, etc.) with the same
  content repeated. `index.html` is now the single homepage matching the
  sitemap; `home.html` was removed and all navigation across every page now
  points to `index.html`.
- **Image path fix:** The `JOHANNESBURG SPCA/` image folder referenced in the
  HTML now actually exists in the project with the correct gallery photos in
  it (this folder was missing from the submitted files previously, so the
  images were broken).
- **Content added from research:** Pulled additional researched content into
  the live pages that was in the research document but missing from the
  Part 1 build:
  - Adopt page: adoption fees (R1 000 dog / R750 cat), R500 deposit, and the
    full 7-step adoption process.
  - Contact page: landline (011 681 3600), after-hours emergency line
    (083 604 1172), full physical address, email, and opening hours.
  - Donate page: sponsor-a-kennel rate (R400/month), legacy gifts, birthday
    fundraisers, membership, loyalty cards, goods donations, and the two
    current campaigns (Sterilisation Drive, Project Cool).
  - Cruelty banner and Report Cruelty page now include the after-hours line
    in addition to the main hotline.
- **External stylesheet:** `style.css` stays at the project root, as in
  Part 1, and is linked consistently on all 10 pages.
- **Typography and base styles:** Retained and confirmed the base
  font-family, font-size, colour variables, and CSS reset from Part 1
  (Poppins for headings, Open Sans for body text, `:root` colour tokens).
- **Layout structure:** Added `.stats-row` (CSS Grid) for the homepage impact
  stats shown in the low-fidelity wireframe, which existed in the wireframe
  but had not yet been built. Kept the existing Flexbox nav and CSS Grid
  adopt/gallery card layouts.
- **Decoration and colour / pseudo-classes:** Added explicit `:active` states
  (previously only `:hover` and `:focus-visible` were defined) to all
  buttons, nav links, and the floating donate button, plus a small press
  animation (`transform: scale(0.97)`) for tactile feedback.
- **Media queries / breakpoints:** Added an explicit tablet breakpoint
  (`641px`–`1023px`) so the adopt/gallery/stats grids step from 1 → 2 → 3
  columns across mobile → tablet → desktop, instead of jumping straight from
  a single column to a 3-column desktop layout.
- **Responsive images:** Added `<picture>` elements with a `source`/`srcset`
  pair on the Home, Adopt, and Gallery page images, per the Part 2 brief.
- **New components:** Added `.fee-table`, `.process-steps`, `.help-list`, and
  `.contact-details` CSS components to support the new researched content
  above.
## The updated file is named Masemola_ST10527628-JohannesburgSPCA_part1_part2_. It shows what has been said above.

Changelog — Part 3

All changes below were made for Part 3 (3 November 2026). Each commit on GitHub carries a matching descriptive message.

A. Feedback from Part 2
Feedback	What was changed
GitHub had no README	README.md is in the repository root and documents the project, structure, Part 3 features, this changelog, testing evidence and references. The separate Changelog.md was merged into it and deleted so there is one source of truth.
No detailed commits	Work is committed in small steps with descriptive messages (for example "Add Leaflet map to contact page").
Check that the correct file is submitted	Removed home.html and the old single-page copy of the homepage. index.html is now the only homepage and every navigation link points to it. Removed the nested archive Masemola_ST10527628-JohannesburgSPCA_part1_part2_ from the submission. Confirmed the repository contains only the current pages.
B. Corrections to Part 2 content that was claimed but missing
Responsive images: gallery and adopt images now use <picture> with WebP srcset (400w and 720w) and a JPG fallback, with sizes for mobile, tablet and desktop.
Adopt page: added the adoption fee table (dog R1 000, cat R750, R500 deposit) and a 7-step adoption process using the existing .fee-table and .process-steps styles.
Contact page: added the landline (011 681 3600) and after-hours emergency line (083 604 1172) using .contact-details.
Donate page: added an "Other ways to help" list (sponsor-a-kennel R400 per month, legacy gifts, goods donations, current campaigns) using .help-list.
Cruelty banner: added the after-hours number on every page.
Navigation: removed #anchor suffixes from links, repointed home.html links to index.html, and added an Enquiry link to every menu.
Broken images: adopt cards previously referenced image files that did not exist; they now use real images.
C. New functionality (JavaScript, script.js)
Dynamic content: the adopt page builds its cards from animals.json using fetch (AJAX), with a loading message and an error message if loading fails.
Search, filter and sort: live search by name, filter by animal type, and sort by name or age, with a results counter that announces changes to screen readers.
Accordion: accessible FAQ accordion on education.html (aria-expanded and aria-controls).
Gallery lightbox: clicking or pressing Enter on a gallery photo opens a larger view with caption; closes with the close button, Esc, or a click outside the image.
Interactive map: Leaflet 1.9.4 with OpenStreetMap tiles and a marker popup on contact.html, replacing the Google Maps iframe.
Animations: fade-in for result boxes and the lightbox, hover zoom on gallery images, all disabled under prefers-reduced-motion.
DOM manipulation: cards, lightbox, error messages and result boxes are created and updated dynamically with createElement and textContent.
D. Forms and validation
enquiry.html (new): enquire about adopting a dog or cat, sponsoring a kennel, or volunteering. Fields: name, email, phone, topic, preferred visit date, optional message. After validation it shows the relevant cost and availability (for example the adoption fee, deposit and number of animals available). The "Enquire about" buttons on the adopt page pre-select the topic.
contact.html: new contact form with name, email, optional phone, message type and a 10 to 500 character message. After validation it compiles the details into an email addressed to info@jhbspca.co.za that the visitor sends with one click.
cruelty.html and volunteer.html: added validation (required fields, South African phone format, minimum and maximum lengths). Valid submissions produce a ready-to-send email; the cruelty form reminds the visitor of the 24-hour hotline.
Validation rules: HTML5 attributes (required, minlength, maxlength, pattern, type) plus JavaScript checks, inline error messages, aria-invalid, focus moved to the first invalid field, and a check that the visit date is not in the past.
E. Search engine optimisation
Unique <title> and meta description on all 11 pages, with keywords such as Johannesburg SPCA, adopt a pet Johannesburg and report animal cruelty.
One <h1> per page with a logical H2/H3 structure.
Canonical link and Open Graph tags on every page.
Descriptive image file names (for example stray-dogs-jspca-kennel.jpg) and descriptive alt text.
Clean file-based URLs and internal links between related pages.
Added robots.txt and sitemap.xml for all pages using the live Netlify address.
F. Security
Content-Security-Policy meta tag limiting scripts, styles, fonts, images and connections to trusted sources.
Referrer-policy meta tag.
No inline scripts; user input is inserted with textContent, and a script typed into the enquiry form was confirmed not to run.
Input length limits on form fields; rel="noopener" on external links.
Removed the frame-ancestors directive after testing showed browsers ignore it in a meta tag.
G. Performance
Images moved to images/, renamed, recompressed, and offered as responsive WebP.
loading="lazy" and explicit width and height on images to prevent layout shift.
Leaflet is loaded only on the contact page.
H. Testing and bugs fixed

Tested in Chromium at 1366×768, 768×1024 and 375×667: all 11 pages for titles, headings, meta tags, alt text, broken images, dead links and sideways scrolling, plus search, filter, sort, lightbox, accordion and every form with valid and invalid input (606 checks passed). Bugs found and fixed:

After an error message appeared, the first click on a submit button was lost because the layout shifted. Error space is now reserved beneath each field.
The homepage buttons "Start an Adoption Enquiry", "View Gallery" and "Donate Now" pointed to on-page sections that no longer exist. They now link to enquiry.html, gallery.html and donate.html.
Both "Read More" buttons on news.html were dead links. One now links to the source article and the other to adopt.html.
The hidden lightbox image had an empty source and alt text; it now has a placeholder.
I. Files
Added: enquiry.html, script.js, animals.json, robots.txt, sitemap.xml, images/, screenshots/.
Changed: all other pages, style.css (Part 3 styles appended), README.md.
Removed: home.html, Changelog.md, JOHANNESBURG SPCA/ folder and the nested archive.
Responsive testing evidence

Tested in Chromium at three sizes (desktop 1366×768, tablet 768×1024, mobile 375×667).

Page	Desktop	Tablet	Mobile
Home	screenshots/index-desktop.png	screenshots/index-tablet.png	screenshots/index-mobile.png
Adopt	screenshots/adopt-desktop.png	screenshots/adopt-tablet.png	screenshots/adopt-mobile.png
Off-page SEO plan
Backlinks: request links from the organisation's existing partners, local news pages and the references listed below.
Social media: share adoption stories and the website link on Facebook and Instagram.
Local SEO: keywords such as "Johannesburg", "Reuven" and "Booysens" are used in titles and copy; a Google Business Profile listing with the same address and phone number is recommended.
References (additions)

Leaflet. 2023. Leaflet 1.9.4. Available at: https://leafletjs.com/ [Accessed 3 November 2026]. OpenStreetMap contributors. 2026. OpenStreetMap. Available at: https://www.openstreetmap.org/ [Accessed 3 November 2026]. Google. 2026. SEO Starter Guide. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 3 November 2026].




