# LegacyLuxe Properties

A premium, responsive real-estate website concept built with **HTML5, CSS3, and vanilla JavaScript**. LegacyLuxe Properties presents property discovery, buying and renting guidance, commercial spaces, residential projects, property details, and real-estate insights in a polished multi-page experience.

> **Project status:** Front-end demonstration. Property listings, prices, locations, images, and contact details are sample content and must be verified or replaced before a real business launch.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Pages](#pages)
- [Documentation and File Guide](#documentation-and-file-guide)
- [Technology Stack](#technology-stack)
- [Design System](#design-system)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Customization](#customization)
- [Accessibility and Responsive Design](#accessibility-and-responsive-design)
- [Testing Checklist](#testing-checklist)
- [Deployment](#deployment)
- [Known Limitations](#known-limitations)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Overview

LegacyLuxe Properties is designed around a clear, editorial-style real-estate browsing experience. It uses a navy-and-teal colour palette, property photography, responsive cards, a shared navigation system, dropdown menus, and a persistent light/dark theme toggle. The pages include educational content to help visitors understand the questions they may want to ask when buying, renting, or evaluating a property.

## Features

- **10 interconnected HTML pages** with shared branding, navigation, and footer.
- **Responsive layouts** for desktop, laptop, tablet, and mobile screens.
- **Dropdown navigation** for key website categories, with desktop hover/focus and mobile click/tap behaviour.
- **Light and dark modes** with the selected theme saved in browser `localStorage` when available.
- **Property discovery UI** with search entry points and sample listing cards.
- **Client-side property filters** for supported listing pages, including property type, location, and budget fields where provided.
- **Insights search** for finding article cards by topic or text.
- **Form validation** for front-end demonstration forms.
- **Image-led content sections** and editorial guidance cards.
- **Footer link hover effects**, responsive spacing, and a short brand tagline.
- **Accessibility basics**, including semantic HTML, form labels, keyboard focus styles, a skip link where provided, and reduced-motion considerations.
- **SEO basics**, including page titles, metadata, and a custom SVG favicon.

## Pages

| # | Page | File | Purpose |
|---:|---|---|---|
| 1 | Home | [`index.html`](index.html) | Brand introduction, property discovery, featured content, and guidance sections. |
| 2 | Buy Properties | [`buy-properties.html`](buy-properties.html) | Sample properties for buyers with discovery and filtering UI. |
| 3 | Rent Properties | [`rent-properties.html`](rent-properties.html) | Sample rental listings and rental guidance. |
| 4 | Commercial Properties | [`commercial-properties.html`](commercial-properties.html) | Commercial property categories and considerations for business spaces. |
| 5 | Residential Projects | [`residential-projects.html`](residential-projects.html) | Sample residential project concepts and project-related guidance. |
| 6 | Property Details | [`property-details.html`](property-details.html) | Detailed view of an illustrative sample property. |
| 7 | List Your Property | [`sell-property.html`](sell-property.html) | Front-end form concept for owners interested in listing a property. |
| 8 | About Us | [`about.html`](about.html) | Brand concept, approach, and service overview. |
| 9 | Contact Us | [`contact.html`](contact.html) | Contact information placeholders and enquiry form UI. |
| 10 | Real Estate Insights | [`blog.html`](blog.html) | Educational articles and property decision-making guidance. |

## Documentation and File Guide

| File or folder | Description |
|---|---|
| `index.html` | Main homepage and primary entry point. |
| `buy-properties.html` | Buying listings and relevant guidance. |
| `rent-properties.html` | Rental listings and renting guidance. |
| `commercial-properties.html` | Commercial spaces and business-property information. |
| `residential-projects.html` | Residential project discovery page. |
| `property-details.html` | Illustrative property detail page. |
| `sell-property.html` | Property submission form interface. |
| `about.html` | Brand and approach information. |
| `contact.html` | Contact and enquiry interface. |
| `blog.html` | Insights and article search interface. |
| `css/style.css` | Shared design system, layouts, responsive rules, themes, cards, navigation, and hover states. |
| `js/main.js` | Theme toggle, dropdown navigation, property search/filter behaviour, and front-end form interactions. |
| `images/legacy-luxe-logo.svg` | SVG brand mark used by the website. |
| `images/favicon.svg` | Browser tab favicon. |
| `README.md` | Project documentation, setup instructions, and known limitations. |

## Technology Stack

| Technology | Use |
|---|---|
| HTML5 | Semantic page structure and content. |
| CSS3 | Layout, responsive styling, visual design, hover effects, and light/dark themes. |
| Vanilla JavaScript | Navigation interactions, theme persistence, search/filter UI, and basic validation. |
| SVG | Scalable logo and favicon artwork. |
| Unsplash image URLs | Illustrative property photography loaded remotely. |

No framework, package manager, or build step is required for the current front-end version.

## Design System

The current visual direction uses a deep navy and teal palette inspired by the supplied colour reference.

| Colour | Hex | Intended use |
|---|---|---|
| Deep Navy | `#0E2954` | Primary dark surfaces and strong contrast areas. |
| Ocean Blue | `#1F6E8C` | Secondary brand colour and links. |
| Teal | `#2E8A99` | Accent colour, highlights, and interactive details. |
| Muted Teal | `#84A7A1` | Soft accent, borders, and supporting elements. |
| Light Surface | `#F1F6F6` | Light-mode backgrounds and panels. |

The website also includes a dark theme with darker surfaces and adjusted text/accent colours. Exact appearance may vary slightly by page component.

## Getting Started

### Requirements

- A modern web browser.
- A code editor such as Visual Studio Code (recommended).
- Internet access for remotely hosted Unsplash images.
- Optional: the VS Code **Live Server** extension for local preview.

### Run locally

1. Download or clone this repository.
2. Extract the ZIP if you downloaded an archive.
3. Open the project folder in Visual Studio Code.
4. Open `index.html` directly in a browser, or right-click it and select **Open with Live Server** if the extension is installed.
5. Use the navigation to visit the other pages and test the dropdowns, theme toggle, search, and filters.

There is no `npm install` or build command for this static version.

## How to Use

- Use the top navigation dropdowns to move between buying, renting, commercial properties, projects, insights, and company pages.
- Use the light/dark theme control in the navigation to switch appearance. The preference is stored locally in the browser when storage is available.
- Use the available search and filter controls on listing pages to explore the illustrative listings.
- Use the Insights page to search educational article cards.
- Submit forms only as a UI demonstration: current forms validate in the browser but do not send enquiries to a business.

## Customization

1. **Branding:** Update the brand text and SVG artwork in the HTML pages and `images/legacy-luxe-logo.svg`.
2. **Colours and styles:** Edit the CSS variables and related styles in `css/style.css`.
3. **Navigation and behaviour:** Update the shared navigation markup in the HTML pages and interaction logic in `js/main.js`.
4. **Listings:** Replace illustrative property titles, prices, locations, and attributes with verified data.
5. **Images:** Replace remote image URLs with appropriately licensed images. Update each image's `alt` text to describe the actual image.
6. **Contact information:** Replace placeholder email, telephone, and location text with approved business details.
7. **Forms:** Connect forms to a secure backend or trusted form-handling service before collecting real enquiries.

Keep links between pages consistent when changing filenames or page structure.

## Accessibility and Responsive Design

The project uses semantic HTML elements, descriptive image alternatives where supplied, labels for form fields, visible keyboard focus styling, and responsive CSS layouts. Dropdowns and theme controls include accessibility-oriented labels or state attributes where implemented. Reduced-motion preferences are considered in the stylesheet.

Before launch, test with keyboard-only navigation, browser zoom, a screen reader, and representative mobile/tablet viewport widths. Accessibility should be checked on the final content and deployment, not assumed from these features alone.

## Testing Checklist

- [ ] Open each of the 10 pages and verify there are no missing local files.
- [ ] Test all navigation and footer links.
- [ ] Open and close dropdown menus using mouse, keyboard, and touch.
- [ ] Switch light/dark mode and confirm the choice persists after navigating to another page or refreshing.
- [ ] Test property search and available filters with different inputs and reset them.
- [ ] Test the Insights search with matching and non-matching text.
- [ ] Submit forms with empty and valid-looking fields to review browser-side validation.
- [ ] Check layouts at mobile, tablet, laptop, and wide-desktop widths.
- [ ] Check image loading, alt text, text contrast, keyboard focus, and reduced-motion behaviour.
- [ ] Replace all placeholder data and contact information before public launch.

## Deployment

This is a static website and can be hosted on GitHub Pages, Netlify, or Vercel.

### General deployment steps

1. Create a GitHub repository and upload the project files, keeping the folder structure intact.
2. For GitHub Pages, open the repository's **Settings → Pages**, select the deployment source/branch according to GitHub's current options, and publish the repository root (or the selected folder containing `index.html`).
3. For Netlify or Vercel, import the repository and configure it as a static site with no build command. Set the output/publish directory to the folder containing `index.html`.
4. After deployment, open the live site and test navigation, images, forms, and theme switching.

No live deployment URL is included in this README because one has not been provided for this project.

## Known Limitations

- Property listings, asking prices, locations, project descriptions, and images are illustrative sample content, not verified offers or availability.
- Contact details and any location references may be placeholders; verify them before publishing.
- Forms perform browser-side validation only. They do not send, store, or manage enquiries.
- There is no backend, database, authentication, admin dashboard, real-time inventory, payment processing, or live map integration.
- Images are loaded from external Unsplash URLs and require an internet connection. Availability and licensing should be reviewed for production use.
- Search and filtering operate on the sample content present in the page; they are not connected to a live property database.
- Property title, ownership, approvals, RERA registration where applicable, taxes, fees, and legal terms must be independently checked by qualified professionals before a real transaction.

## Future Improvements

- Connect listings to a verified property database or CMS.
- Add a secure backend for contact and property-submission forms.
- Add listing detail routes generated from real property records.
- Integrate a map service after selecting an appropriate provider and reviewing its terms.
- Add automated accessibility, link, and responsive regression tests.
- Optimize and locally host approved images for performance and reliability.
- Add analytics and privacy-conscious consent controls if analytics are introduced.
- Add verified business information, testimonials, and service claims only when evidence is available.

## Contributing

Suggestions and improvements are welcome. Before submitting changes:

1. Keep the project dependency-light unless a new dependency is justified.
2. Test all affected pages and responsive layouts.
3. Preserve accessible labels, keyboard interactions, and clear focus states.
4. Do not add fabricated property data, credentials, reviews, or business claims.
5. Describe the changes and testing performed in the pull request.

## License

No license has been specified for this repository. Unless a license is added, reuse, redistribution, and modification permissions should not be assumed. Add a `LICENSE` file if you intend to publish the project under a particular open-source license. Check the licensing terms for third-party images and assets separately.

## Author

**Buildby Chandraveer**

> LegacyLuxe Properties is a front-end portfolio/demo project. Replace this author line if the repository uses a different preferred attribution.


## Office Location & Contact Shortcuts

- **Head office (provided):** Kargil, Sikandra, Agra, Uttar Pradesh, India.
- Footer address links open a Google Maps search for the stated area. The Contact page embeds a Google Map search and includes a directions link. Confirm the exact office pin/address before publishing.
- A floating WhatsApp shortcut is included on all pages. **Before launch, replace `91XXXXXXXXXX` in the `wa.me` links in all HTML files with the business WhatsApp number in international format (country code + number, digits only).** The WhatsApp shortcut will not open a real business chat until this is configured.
- The existing phone number and email are still sample placeholders and should be replaced with verified business contact details.
