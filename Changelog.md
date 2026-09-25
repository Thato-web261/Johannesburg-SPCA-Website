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





