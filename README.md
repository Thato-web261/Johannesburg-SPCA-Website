# Johannesburg SPCA Website

# By ST10527628

## Project overview
•	Name: Johannesburg SPCA
•	History: Established 1902 and based in Reuven, Johannesburg, the JSPCA is one of South Arica’s oldest and largest animal welfare organizations. It receives no government funding and relies entirely on donations, sponsorships and volunteer support to run its shelter, clinic and 24-hour cruelty inspection service.
•	Mission and Vision: To publicly support the rights and welfare of animals, prevent and prosecute cruelty, provides subsidised veterinary care to under resourced pet owners, and cultivate community respect for animal life.
•	Target Audience: Pet adopters, animal cruelty witnesses, individual and corporate donors, monthly sponsors, volunteers, and local schools engaging with education programme.

## Website Goals and Objectives
•	Increase completed online adoption enquiries and reduced time-to-adoption.
•	Grow once-off and recurring monthly donations through a simplified, secure payment flow.
•	Provide a fast, always available channel for reporting animal cruelty.
•	KPIs: adoption-enquiry submissions per month, online donation conversion rate, average monthly donor sign-ups, cruelty report form completions and newsletter subscriptions.

## Proposed Website Features and Functionality
•	Home, About us, and education Programme pages.
•	Searchable, filterable Adopt-a-pet gallery with an online adoption enquiry form.
•	Report Cruelty page featuring the 24-hour inspector hotline and online report form.
•	Donate or Sponsor-a-kennel page with recurring or once-off payment options.
•	Volunteer sign-up, News or Blog, and Contact page with an embedded map.

## Design and User Experience
The design should feel warm, trustworthy and calm, reflecting the organisation’s caring, community driven identity.
•	Colour Scheme: Teal and turquoise as primary colours (health, calm, trust) with soft orange accent for urgent calls to action such as donate or report.
•	Typography: A friendly, rounded sans-serif (e.g. Poppins) for headings, paired with highly legible sans-serif (e.g. Opens Sans) for body text.
•	Layout and Design: A card based, mobile first grid for adoption gallery with sticky donate button and generous white space.
•	UX considerations: Large tap targets for older or rural areas, three click path to the adoption enquiry form, cruelty report call to action visible above fold.
•	Low-fidelity wireframes will be developed for homepage, adoption gallery and donation flow to visualise layout and information hierarchy before design begins.

## Technical Requirements
•	Hosting and Domain: Locally hosted for faster load times and POPIA compliance, existing domain jhbspca.co.za retained.
•	Language and Frameworks: WordPress CMS with Pay Fast payment plugin so non-technical staff can update content, paired custom HTML, CSS and Java for the adoption gallery and forms.

## Timeline and Milestones
•	Week 1-2: Discovery, research and wireframing.
•	Week 3-5: Visual design and content collection.
•	Week 6-9: Development and CMS integration.
•	Week 10: Testing and user-acceptance review.
•	Week 11: Launch.
•	Week 12: Post launch review, aligned with the subject’s series of assignments submission dates.
This timeline is from when the assignment was released until part 1 is due

## Sitemap

Home (index.html)
├── About Us (about.html)
├── Education Programme (education.html)
├── Adopt-a-Pet (adopt.html)
├── Report Cruelty (cruelty.html)
├── Gallery (gallery.html)
├── Volunteer (volunteer.html)
├── News / Blog (news.html)
├── Contact (contact.html)
└── Donate / Sponsor-a-Kennel (donate.html)

## File and Folder Structure

/ (root)
├── index.html, about.html, adopt.html, enquiry.html, contact.html, cruelty.html,
│   donate.html, education.html, gallery.html, news.html, volunteer.html
├── style.css
├── script.js
├── animals.json
├── robots.txt
├── sitemap.xml
├── images/ (compressed JPG plus 400w and 720w WebP versions)
└── screenshots/ (desktop, tablet and mobile evidence)

## References

Good Things Guy. 2023. *The Johannesburg SPCA celebrates 121 years of animal
protection.* Available at:
https://www.goodthingsguy.com/people/johannesburg-spca-121-birthday-animal-protection/
[Accessed 16 August 2026].

Johannesburg SPCA. 2026a. *Johannesburg SPCA – Animal Cruelty Must Stop. No
Animal Should Suffer.* Available at: https://jhbspca.co.za/
[Accessed 19 August 2026].

Johannesburg SPCA. 2026b. *About Us.* Available at:
https://jhbspca.co.za/about-us/ [Accessed 18 August 2026].

Johannesburg SPCA. 2026c. *Adopt.* Available at: https://jhbspca.co.za/adopt/
[Accessed 18 August 2026].

Johannesburg SPCA. 2026d. *How to Help.* Available at:
https://jhbspca.co.za/how-to-help/ [Accessed 19 August 2026].

Johannesburg Lists. 2026. *Johannesburg SPCA: Adoption, donations and contact
details.* Available at: https://johannesburglists.com/johannesburg-spca/
[Accessed 16 August 2026].




## Part 3 — Functionality, SEO and Forms

**Live site:** https://johannesburganimalrescue.netlify.app/
**Repository:** https://github.com/Thato-web261/Johannesburg-SPCA-Website

### Features added
- **Dynamic content + search:** `adopt.html` builds its animal cards with JavaScript (`script.js`) with live name search, type filter and sort.
- **Accordion:** FAQ accordion on `education.html` (accessible buttons with `aria-expanded`).
- **Gallery lightbox:** clicking a photo on `gallery.html` opens a larger view (Esc or click outside closes it).
- **Interactive map:** Leaflet + OpenStreetMap map with marker on `contact.html`.
- **Animations:** fade-in result boxes, lightbox fade, image hover zoom (disabled under `prefers-reduced-motion`).
- **Forms:** `enquiry.html` validates then shows the fee and availability for adoption, sponsorship or volunteering. `contact.html` validates, compiles an email and lets the visitor send it to info@jhbspca.co.za. Both use HTML5 attributes plus JavaScript validation with inline error messages.
- **SEO:** unique title and meta description per page, one H1 per page with H2/H3 structure, descriptive alt text, clean file URLs, internal links, canonical and Open Graph tags, `robots.txt`, `sitemap.xml`.
- **Security:** Content-Security-Policy and referrer meta tags, no inline scripts, text inserted with `textContent`, input length limits.

### Keywords targeted
Johannesburg SPCA, adopt a pet Johannesburg, report animal cruelty, animal shelter Johannesburg, donate SPCA, volunteer SPCA.

### Changelog — Part 3
- **Feedback: README missing / no detailed commits:** README.md is now at the repository root with project documentation, this changelog and references. All Part 3 work was committed in small, descriptive commits (see commit list).
- **Feedback: correct file:** Removed `home.html`; `index.html` is the single homepage and all navigation points to it. Removed the `Changelog.md` duplicate in favour of this README. Confirmed the submission contains the current pages only.
- Added `enquiry.html` and `script.js`; rewrote `contact.html` with form and Leaflet map; replaced the static adopt grid with JS rendering (the old cards pointed to image files that did not exist).
- Fixed navigation links (removed `#anchor` suffixes) and added Enquiry to the menu on every page.
- Added `robots.txt`, `sitemap.xml`, meta tags and CSP to every page.
- Appended Part 3 styles to `style.css` (accordion, lightbox, validation errors, result box).

- **Feedback (Part 2 content):** The Part 2 changelog entries for `<picture>`/`srcset` images, the adoption fee table and 7-step process, the expanded contact details (landline, after-hours line), the donate "other ways to help" list and the after-hours number in the cruelty banner were not actually present in the submitted files. They are now built into the pages.
- **Real AJAX:** adoption animals are loaded with `fetch('animals.json')` on `adopt.html` and `enquiry.html`; the enquiry answer uses the fetched availability, with an error message if loading fails.
- **Validation:** added JavaScript validation with inline errors to the cruelty report and volunteer forms (required fields, phone format, minimum lengths); valid forms produce a ready-to-send email.
- **Page speed:** images renamed descriptively (e.g. `stray-dogs-jspca-kennel.jpg`), moved to `images/`, recompressed, and served as responsive WebP via `<picture>`/`srcset`; `loading="lazy"` plus width/height attributes prevent layout shift. The old `JOHANNESBURG SPCA/` folder was removed.
- **CSP:** removed the `frame-ancestors` directive, which browsers ignore in a meta tag.

### Responsive testing evidence
Tested in Chromium at three sizes (desktop 1366×768, tablet 768×1024, mobile 375×667).

| Page | Desktop | Tablet | Mobile |
|---|---|---|---|
| Home | ![](screenshots/index-desktop.png) | ![](screenshots/index-tablet.png) | ![](screenshots/index-mobile.png) |
| Adopt | ![](screenshots/adopt-desktop.png) | ![](screenshots/adopt-tablet.png) | ![](screenshots/adopt-mobile.png) |

### Off-page SEO plan
- **Backlinks:** request links from the organisation's existing partners, local news pages and the references listed below.
- **Social media:** share adoption stories and the website link on Facebook and Instagram.
- **Local SEO:** keywords such as "Johannesburg", "Reuven" and "Booysens" are used in titles and copy; a Google Business Profile listing with the same address and phone number is recommended.

### References (additions)
Leaflet. 2023. *Leaflet 1.9.4*. Available at: https://leafletjs.com/ [Accessed 3 November 2026].
OpenStreetMap contributors. 2026. *OpenStreetMap*. Available at: https://www.openstreetmap.org/ [Accessed 3 November 2026].
Google. 2026. *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 3 November 2026].
