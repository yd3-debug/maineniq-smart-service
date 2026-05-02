# CLAUDE.md — Mainteniq Project Brief

> This file is the single source of truth for the Mainteniq codebase. Claude Code must read this file at the start of every session and treat it as authoritative. If anything in a user prompt contradicts this file, ask for clarification rather than guess.

---

## 1. What this project is

**Mainteniq** is a UK London-based property maintenance company. Live site: https://www.mainteniq.co.uk.

- **Legal entity:** MAINTENIQ LTD
- **Companies House number:** 14774362
- **Registered in:** England and Wales
- **Owns two domains:** mainteniq.co.uk (primary) and mainteniq.com (redirect target — see Section 12)
- **Market:** United Kingdom only (London + 120 miles radius covering most of the Home Counties)
- **Target customers:** Landlords, Airbnb hosts, serviced accommodation operators, property managers, block management companies, Build-to-Rent operators
- **Certifications:** Gas Safe registered, NICEIC Approved Contractor, F-Gas certified

**Services:** Planned preventative maintenance (PPM) contracts, HVAC maintenance (air conditioning, boilers, FCU, HIU, MVHR, CIU, VRV/VRF), plumbing, electrical (including EICR and Gas Safety Certificates/CP12), Building Management Systems (BMS), smart home automation, end-of-tenancy cleaning, property renovation.

---

## 2. Current technical state

- **Framework:** React + Vite SPA (originally scaffolded on Lovable.dev)
- **Styling:** Tailwind CSS + shadcn/ui components
- **Hosting:** (check deployment config in the repo — likely Vercel, Netlify, or Lovable's own hosting)
- **Meta management:** Check the repo — likely react-helmet-async or similar
- **State of SEO:** Poor. See Section 4.

> **IMPORTANT:** The site is currently a client-rendered SPA. Raw HTML served from the origin contains almost no content — just the title tag and a mount point. This is the biggest structural SEO problem on the project. Phase 4 below addresses it (migration to Next.js).

---

## 3. Project goals (in priority order)

1. **Stop bleeding US organic traffic.** The business serves UK only; currently ~significant portion of traffic is US-based due to brand confusion, US-flavoured keywords, and missing geo-signals.
2. **Rank in Google UK for commercial UK landlord/property maintenance queries** (air conditioning service London, EICR London, CP12 landlord London, HIU servicing London, Airbnb property maintenance London, etc.).
3. **Appear as a cited source in AI search engines** (Google AI Overviews, ChatGPT search, Perplexity, Claude, Gemini, Copilot). This is "GEO" — Generative Engine Optimisation.
4. **Build topical authority in UK landlord compliance** (Gas Safety Certificate, EICR, PAT testing, Legionella, MEES, EPC, HHSRS).
5. **Preserve the current visual design.** No design regressions. If in doubt, ask.

---

## 4. Known problems (from audit on 2026-04-24)

### Critical bugs (fix first, Phase 1)
- **Brand name misspelled "Maineniq" in title tags** on /about, /plumber-electrician, /maintenance-contracts, and /buildingmanagementsystem. Visible in Google's live index.
- **Every page shares the same two meta descriptions.** Zero differentiation.
- **Every title tag leads with "HVAC"** — a US-flavoured keyword. UK searchers use "air conditioning", "boiler", "heating engineer".

### Structural SEO problems (Phase 2 & 3)
- No canonical tags confirmed per page
- No hreflang tags (no `en-GB` signal)
- No LocalBusiness / Organization JSON-LD schema
- No Service schema on service pages
- No FAQPage schema anywhere
- No `robots.txt`, no `sitemap.xml`, no `llms.txt`
- URL `/buildingmanagementsystem` has no hyphens (bad)
- URL `/renovation-composer` is a template leftover
- Footer does not surface trust signals (Companies House number, Gas Safe, NICEIC)

### Fundamental rendering problem (Phase 4)
- Client-rendered SPA. AI crawlers (ChatGPT-User, PerplexityBot, ClaudeBot, Perplexity-User) cannot read content. This destroys GEO.

### Content gaps (Phase 5)
- No blog / content pages
- No location pages (borough-specific)
- No compliance hub page
- No FAQ sections
- Only ~10 thin pages total

---

## 5. Scope boundaries

### In scope (Claude Code may change):
- SEO metadata (titles, descriptions, canonical, hreflang, OG tags)
- JSON-LD structured data
- Page copy (following UK vocabulary rules in Section 7)
- URL structure and redirects
- `robots.txt`, `sitemap.xml`, `llms.txt`
- Footer (to add trust signals)
- FAQ components (new)
- Eventually: full Next.js migration (Phase 4, must be confirmed first)
- Creating new service, location, and blog pages (Phase 5)

### Out of scope (do not touch without explicit permission):
- Visual design / Tailwind classes beyond what's needed for new components
- Contact form logic / email sending
- Any payment or auth flows
- `package.json` dependencies unless strictly needed for SEO/schema
- Anything in the admin / dashboard areas if any exist
- Production environment variables

### Claude Code cannot do (user handles these manually):
- Claim or configure Google Business Profile
- Submit sitemaps to Search Console / Bing Webmaster Tools
- Create Wikidata entry
- Submit to UK directories (Yell, Checkatrade, TrustMark, Trustpilot, etc.)
- Collect Google reviews
- Make PR outreach / guest posts
- Buy a phone number / update the Gas Safe & NICEIC registration public records
- Any work that requires the user's email inbox, phone, or external accounts

---

## 6. Exact content library (use these verbatim)

### 6.1 Titles, meta descriptions, H1s (page by page)

> **Rule:** Every title must be unique, under 65 characters, lead with a UK-friendly keyword, and include "Mainteniq". Every meta description must be unique, 140–158 characters, include one primary keyword and one audience keyword. Every H1 must be unique and differ from the title.

**Homepage `/`**
- Title: `Property Maintenance London for Landlords & Airbnb Hosts | Mainteniq`
- H1: `London Property Maintenance for Landlords, Airbnb Hosts & Property Managers`
- Meta: `Planned maintenance contracts, emergency call-outs, Gas Safe & NICEIC certified. Protecting rental investments across London & the Home Counties. Get a quote.`

**`/about`**
- Title: `About Mainteniq | London Property Maintenance Team`
- H1: `The London property maintenance team landlords actually trust`
- Meta: `Mainteniq is a London-based property maintenance company (Companies House 14774362) serving landlords, Airbnb hosts and property managers across London & the Home Counties.`

**`/contact`**
- Title: `Contact Mainteniq | 24/7 Property Emergency Line London`
- H1: `Get hold of us — 24/7 for emergencies`
- Meta: `24/7 emergency line for landlords & property managers. London & 120-mile radius. Gas Safe & NICEIC certified. Call us or request a quote online.`

**`/hvac-maintenance`**
- Title: `Air Conditioning & Heating Maintenance London | Mainteniq`
- H1: `London Air Conditioning & Heating Maintenance Contracts`
- Meta: `Planned HVAC maintenance contracts for landlords & property managers. FCU, HIU, MVHR, CIU, VRV/VRF. F-Gas certified. London + 120 miles. Book a site survey.`

**`/plumber-electrician`** *(consider splitting into `/plumbing-london` and `/electrical-services-london` in Phase 5)*
- Title: `Plumber & Electrician Services London | Mainteniq`
- H1: `Plumbing & Electrical Services for London Landlords`
- Meta: `Gas Safe plumbers and NICEIC electricians. EICR, gas safety certificates, emergency call-outs. For London landlords, Airbnb hosts and property managers.`

**`/maintenance-contracts`**
- Title: `Planned Maintenance Contracts London | Landlord & Property Manager Plans`
- H1: `Planned Maintenance Contracts for London Landlords & Property Managers`
- Meta: `Planned preventative maintenance covering HVAC, plumbing, electrical and compliance certificates. Cut reactive costs and protect your rental investment.`

**`/smart-home`**
- Title: `Smart Home Installation London | Airbnb, Landlord, Private | Mainteniq`
- H1: `Smart Home Automation for London Properties`
- Meta: `Nest, Hive, Tado, Hue, keyless entry, noise sensors. Full smart home installations for Airbnb hosts, serviced accommodation operators and London homeowners.`

**`/building-management-systems-london`** *(renamed from `/buildingmanagementsystem`, redirect required)*
- Title: `Building Management Systems (BMS) London | Mainteniq`
- H1: `Building Management System Installation & Service in London`
- Meta: `BMS installation, commissioning and servicing for commercial buildings and residential blocks. Trend, Siemens, Honeywell. Integration with smart home systems.`

**`/property-renovation-london`** *(renamed from `/renovation-composer`, redirect required)*
- Title: `Property Renovation & Refurbishment London | Mainteniq`
- H1: `Full-Service Property Renovation for Landlords & Homeowners`
- Meta: `Full-service property renovation and refurbishment in London. Design, project management and trades under one roof. For landlords, investors and homeowners.`

**`/services`** *(if this route exists)*
- Title: `Property Maintenance Services London | Mainteniq`
- H1: `Our Services`
- Meta: `Full-service property maintenance for London landlords and property managers. HVAC, plumbing, electrical, BMS, smart home, cleaning, renovation.`

### 6.2 URL redirects (must be 301, permanent)

| From | To |
|---|---|
| `/buildingmanagementsystem` | `/building-management-systems-london` |
| `/renovation-composer` | `/property-renovation-london` |

If deploying on Vercel, put in `vercel.json`. If Netlify, `netlify.toml`. If Lovable's own hosting, use their redirect mechanism (ask user if unclear).

### 6.3 Organization JSON-LD (site-wide, render on every page)

Values in `{PLACEHOLDER_...}` must be left as literal placeholders; the user will fill them in.

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HVACBusiness", "Plumber", "Electrician"],
  "@id": "https://www.mainteniq.co.uk/#organization",
  "name": "Mainteniq",
  "legalName": "MAINTENIQ LTD",
  "url": "https://www.mainteniq.co.uk",
  "logo": "https://www.mainteniq.co.uk/logo.png",
  "image": "https://www.mainteniq.co.uk/og-image.jpg",
  "telephone": "{PLACEHOLDER_PHONE}",
  "email": "{PLACEHOLDER_EMAIL}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{PLACEHOLDER_STREET}",
    "addressLocality": "London",
    "postalCode": "{PLACEHOLDER_POSTCODE}",
    "addressRegion": "Greater London",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.5074,
    "longitude": -0.1278
  },
  "areaServed": [
    {"@type": "AdministrativeArea", "name": "Greater London"},
    {
      "@type": "GeoCircle",
      "geoMidpoint": {"@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278},
      "geoRadius": "193121"
    }
  ],
  "priceRange": "££",
  "currenciesAccepted": "GBP",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "openingHoursSpecification": [
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00"},
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "09:00", "closes": "16:00"}
  ],
  "hasCredential": [
    {"@type": "EducationalOccupationalCredential", "credentialCategory": "Gas Safe Register", "recognizedBy": {"@type": "Organization", "name": "Gas Safe Register"}, "identifier": "{PLACEHOLDER_GAS_SAFE_NUMBER}"},
    {"@type": "EducationalOccupationalCredential", "credentialCategory": "NICEIC Approved Contractor", "recognizedBy": {"@type": "Organization", "name": "NICEIC"}, "identifier": "{PLACEHOLDER_NICEIC_NUMBER}"}
  ],
  "identifier": [
    {"@type": "PropertyValue", "propertyID": "UK Companies House", "value": "14774362"}
  ],
  "sameAs": [
    "https://find-and-update.company-information.service.gov.uk/company/14774362"
  ]
}
```

### 6.4 Service schema (per service page)

Template:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "{SERVICE_TYPE}",
  "provider": {"@id": "https://www.mainteniq.co.uk/#organization"},
  "areaServed": {"@type": "AdministrativeArea", "name": "Greater London"},
  "description": "{SERVICE_DESCRIPTION}"
}
```

Values per page:
- `/hvac-maintenance`: serviceType=`HVAC Maintenance Contract`; description=`Planned HVAC maintenance for residential and commercial properties in London. FCU, HIU, MVHR, CIU, VRV/VRF. F-Gas certified engineers.`
- `/plumber-electrician`: serviceType=`Plumbing and Electrical Services`; description=`Gas Safe plumbing and NICEIC electrical services for London properties. Emergency call-outs, EICR, gas safety certificates.`
- `/maintenance-contracts`: serviceType=`Planned Preventative Maintenance Contract`; description=`Planned preventative maintenance contracts covering HVAC, plumbing, electrical and compliance certification for London landlords and property managers.`
- `/smart-home`: serviceType=`Smart Home Installation`; description=`Smart home automation installation and configuration for London properties. Nest, Hive, Tado, Hue, and keyless entry systems.`
- `/building-management-systems-london`: serviceType=`Building Management System Installation and Service`; description=`BMS installation, commissioning and servicing for commercial buildings and residential blocks in London.`
- `/property-renovation-london`: serviceType=`Property Renovation and Refurbishment`; description=`Full-service property renovation and refurbishment in London. Project management, design and trades under one roof.`

### 6.5 FAQ content (with FAQPage schema)

Add FAQ sections to these three pages. Each FAQ must appear both as visible accordion content AND inside FAQPage JSON-LD. Text must be **identical** in both places (required by Google).

**Homepage `/` FAQs:**

1. **Q:** What areas does Mainteniq cover?
   **A:** Mainteniq covers all 32 London boroughs plus a 120-mile radius extending across the Home Counties — Surrey, Kent, Essex, Hertfordshire, Buckinghamshire, Berkshire, Oxfordshire, Sussex and Bedfordshire.

2. **Q:** Do you work with Airbnb hosts and short-let operators?
   **A:** Yes. We support Airbnb hosts, serviced accommodation operators and short-let property managers with planned maintenance, emergency cover, and 24/7 response — essential for short-let guests who expect hotel-grade reliability.

3. **Q:** Are you Gas Safe and NICEIC certified?
   **A:** Yes. Mainteniq is Gas Safe registered (for gas work) and NICEIC Approved Contractor (for electrical work). Certificate and registration numbers are available on request.

4. **Q:** Do you offer emergency call-outs?
   **A:** Yes, we operate a 24/7 emergency line for contracted clients and arrange same-day response across London for urgent issues like no heating, no hot water, or water leaks.

**`/hvac-maintenance` FAQs:**

1. **Q:** How often should I service my HVAC system?
   **A:** Residential air conditioning should be serviced annually. Commercial AC systems with an output above 12kW legally require an energy inspection every 5 years under the Energy Performance of Buildings Regulations. Heat interface units (HIUs) and mechanical ventilation with heat recovery (MVHR) should also be serviced annually.

2. **Q:** What is an HIU and does it need servicing?
   **A:** An HIU (Heat Interface Unit) is the device in each flat in a communal heating system that controls heating and hot water for that individual flat. HIUs should be serviced annually. Common issues include intermittent hot water, loud noises and reduced flow — all fixable with proper maintenance.

3. **Q:** What is MVHR and why does it need servicing?
   **A:** MVHR (Mechanical Ventilation with Heat Recovery) is a ventilation system common in new-build flats and airtight modern homes. It recovers heat from outgoing air to warm incoming fresh air. Filters should be changed and the unit checked annually to maintain efficiency and indoor air quality.

4. **Q:** Are you F-Gas certified for air conditioning work?
   **A:** Yes. All our air conditioning engineers are F-Gas certified under UK Fluorinated Greenhouse Gas Regulations — a legal requirement for any engineer handling refrigerants.

**`/maintenance-contracts` FAQs:**

1. **Q:** What does a planned maintenance contract include?
   **A:** A typical contract includes scheduled servicing of HVAC (AC, boilers, HIUs, MVHR), annual Gas Safety Certificate (CP12), EICR scheduling, routine plumbing and electrical checks, and priority response for emergencies. We tailor scope and frequency to each property.

2. **Q:** How much does a planned maintenance contract cost?
   **A:** Contract cost depends on property type, number of units and services included. A single flat with basic HVAC and compliance typically starts from a low monthly fee; multi-unit blocks are priced per unit. Request a quote for a tailored price.

3. **Q:** Can I get a contract for multiple properties?
   **A:** Yes. We work with portfolio landlords, Build-to-Rent operators, block management companies and property managers covering dozens or hundreds of units under a single contract.

4. **Q:** What compliance certificates do you provide under a contract?
   **A:** Annual Gas Safety Certificate (CP12), 5-yearly Electrical Installation Condition Report (EICR), PAT testing, legionella risk assessment, and EPC renewal scheduling — all under one contract.

FAQPage JSON-LD template (repeat for each page):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "{QUESTION}", "acceptedAnswer": {"@type": "Answer", "text": "{ANSWER}"}},
    ...
  ]
}
```

### 6.6 `public/robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://www.mainteniq.co.uk/sitemap.xml

# Explicit allow for AI answer engines (GEO — Generative Engine Optimisation)
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Claude-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /
```

### 6.7 `public/sitemap.xml`

Include every live page using today's ISO date for `<lastmod>`. Homepage priority 1.0, service pages 0.8, legal/about 0.5. Do NOT include the pre-rename URLs (`/buildingmanagementsystem`, `/renovation-composer`).

### 6.8 `public/llms.txt`

```markdown
# Mainteniq

> Mainteniq is a London-based property maintenance company serving landlords, Airbnb hosts, property managers, and block management companies across London and a 120-mile radius covering most of the Home Counties. Gas Safe and NICEIC certified. Specialises in planned maintenance contracts for residential blocks with fan coil units (FCU), heat interface units (HIU), mechanical ventilation with heat recovery (MVHR), and communal heating systems (CIU).

## Services

- [Planned Maintenance Contracts](https://www.mainteniq.co.uk/maintenance-contracts): Planned preventative maintenance for HVAC, plumbing, electrical and compliance.
- [Air Conditioning and Heating](https://www.mainteniq.co.uk/hvac-maintenance): F-Gas certified AC servicing, boiler servicing, FCU, HIU and MVHR.
- [Plumbing and Electrical](https://www.mainteniq.co.uk/plumber-electrician): Gas Safe plumbers and NICEIC electricians.
- [Building Management Systems](https://www.mainteniq.co.uk/building-management-systems-london): BMS installation and servicing.
- [Smart Home](https://www.mainteniq.co.uk/smart-home): Smart home automation for Airbnb and private clients.
- [Property Renovation](https://www.mainteniq.co.uk/property-renovation-london): Full-service refurbishment in London.

## Company
- Legal name: MAINTENIQ LTD
- Companies House: 14774362
- Registered in England and Wales
- Service area: London plus 120 miles
- Emergency line: 24/7 for contracted clients

## Contact
- Website: https://www.mainteniq.co.uk
- Contact page: https://www.mainteniq.co.uk/contact
```

### 6.9 Canonical + hreflang (every page)

```html
<link rel="canonical" href="https://www.mainteniq.co.uk{PATH}" />
<link rel="alternate" hreflang="en-GB" href="https://www.mainteniq.co.uk{PATH}" />
<link rel="alternate" hreflang="x-default" href="https://www.mainteniq.co.uk{PATH}" />
```

Homepage `{PATH}` = `/` (with trailing slash). Always use `www.` version.

### 6.10 Footer trust signals

Add to footer on every page, above the copyright line:

- Gas Safe Register: `{PLACEHOLDER_GAS_SAFE_NUMBER}` (with Gas Safe logo if asset exists, else placeholder `<img>` with alt text)
- NICEIC Approved Contractor: `{PLACEHOLDER_NICEIC_NUMBER}` (with NICEIC logo if asset exists)
- Companies House: 14774362 — hyperlinked to https://find-and-update.company-information.service.gov.uk/company/14774362
- Registered in England and Wales
- VAT number: `{PLACEHOLDER_VAT}` (if supplied — leave placeholder otherwise)

Plus in the address block:
- Full address: `{PLACEHOLDER_ADDRESS}`
- Phone: `{PLACEHOLDER_PHONE}` with `tel:` link
- Email: `{PLACEHOLDER_EMAIL}` with `mailto:` link

These values must match exactly what's in the Organization JSON-LD schema.

---

## 7. Vocabulary rules (UK-first copy)

### Lead with UK terms, not American:

| Avoid leading with | Prefer leading with |
|---|---|
| HVAC | air conditioning and heating (keep "HVAC" as secondary) |
| Smart Home | Smart home automation / Home automation |
| Property Solutions | Property maintenance / Property services |
| AC (first mention) | air conditioning (then AC is fine) |

"HVAC" is not banned — commercial / M&E audiences do use it. Just never lead with it.

### Always use British spellings:
- organisation (not organization)
- optimise (not optimize)
- colour (not color)
- licence (noun) / license (verb)
- programme (not program, unless referring to software)
- centre (not center)
- defence (not defense)

### UK regulatory terms to name explicitly (this is SEO gold):
Whenever relevant, use the actual UK regulatory/industry terms:
- Gas Safety Certificate / **CP12** (for gas)
- **EICR** / Electrical Installation Condition Report (for electrical)
- **PAT testing** (Portable Appliance Testing)
- **Legionella risk assessment**
- **EPC** / Energy Performance Certificate + **MEES** (Minimum Energy Efficiency Standards)
- **HHSRS** (Housing Health and Safety Rating System)
- **F-Gas** (for air conditioning)
- **Building Regulations Part L / F / P**
- **BS 7671** (electrical wiring regs)

### Use these, not American equivalents:
- flat (not apartment), but "flat" and "apartment" can both appear for new-build/luxury context
- tenant (not renter)
- landlord
- letting agent (not rental agent)
- estate agent (not realtor)
- boiler (not water heater for central heating contexts)
- heating engineer (not HVAC technician for residential context)

---

## 8. Execution plan (phases)

Claude Code must execute phases in order. Do not start a later phase until the user confirms the earlier phase is shipped and verified.

### Phase 0 — Codebase reconnaissance
Before changing anything, report:
1. Framework and version (confirm React + Vite or whatever it actually is)
2. Routing system (React Router? version?)
3. How meta tags are currently managed (react-helmet-async? custom component? inline in index.html?)
4. Deployment target (check for vercel.json, netlify.toml, lovable config)
5. Full list of every page file and its route
6. Location of the footer component and header/navbar component
7. Any existing SEO-related components or utilities

Produce a single report and pause. Wait for user to say "proceed to Phase 1".

### Phase 1 — Bug fixes (1 commit)
- Grep entire codebase for "Maineniq" (and other plausible misspellings). Fix all to "Mainteniq".
- Audit all current titles/descriptions/H1s. Produce table in report.
- Apply the titles, meta descriptions, and H1s from Section 6.1 of this document.
- Verify no duplicates after rewrite.
- Commit with message: `fix(seo): rewrite titles, meta descriptions, H1s; fix Maineniq typos`
- Report: files touched, old values → new values table.

### Phase 2 — Technical SEO foundation (1-2 commits)
- Add canonical tags to every page per Section 6.9.
- Add hreflang tags to every page per Section 6.9.
- Rename URLs per Section 6.2. Add 301 redirects in the correct deployment config file.
- Update every internal link in the codebase that referenced the old URLs.
- Update Navbar / Footer / any hardcoded navigation.
- Commit with message: `feat(seo): add canonical + hreflang, fix URL structure, add redirects`
- Report: every file touched, redirect config added, internal links updated.

### Phase 3 — Structured data + site files (2-3 commits)

Commit 3a: Organization schema
- Create reusable `OrganizationSchema` component rendering the JSON-LD from Section 6.3.
- Mount it in the root layout / App.tsx so it renders on every page.
- Use `{PLACEHOLDER_...}` strings literally; list all placeholders in the report.
- Commit: `feat(seo): add Organization JSON-LD site-wide`

Commit 3b: Service schema + FAQ + footer trust signals
- Create `ServiceSchema` component per Section 6.4. Add to each service page.
- Create `FAQSection` component (using shadcn/ui Accordion) + embedded FAQPage JSON-LD per Section 6.5. Add to /, /hvac-maintenance, /maintenance-contracts.
- Update Footer to include trust signals per Section 6.10.
- Commit: `feat(seo): add Service and FAQPage schema; add trust signals to footer`

Commit 3c: Static files
- Create `public/robots.txt` per Section 6.6.
- Create `public/sitemap.xml` per Section 6.7.
- Create `public/llms.txt` per Section 6.8.
- Verify build pipeline copies these to deployed site root (not a nested folder).
- Commit: `feat(seo): add robots.txt, sitemap.xml, llms.txt`

### Phase 4 — UK vocabulary sweep (1 commit)
- Grep codebase for user-visible copy (JSX text nodes, title=, alt=, aria-label=).
- Produce list of US-flavoured phrases per Section 7.
- Rewrite copy so pages lead with UK vocabulary. Keep "HVAC" as secondary mention, don't remove entirely.
- Apply British spellings sweep.
- Add UK regulatory terms (CP12, EICR, Gas Safe, NICEIC, F-Gas) where naturally relevant.
- Commit: `fix(copy): UK-first vocabulary sweep`
- Report: before/after table of significant rewrites. Pause for user review.

### Phase 5 — Next.js migration (the weekend job)

> This phase is a major structural change. Do not start without the user's explicit "go ahead to Phase 5" confirmation.

**Goal:** Migrate from Vite + React SPA to Next.js 14 App Router, hosted on Vercel.

**Why:** Current SPA serves an empty HTML shell to AI crawlers. Most AI crawlers don't execute JavaScript. This is the root cause of zero AI search visibility.

**Constraints:**
- Preserve design exactly (Tailwind + shadcn/ui). No visual regressions.
- Preserve every route (post-rename) from Phase 2.
- Preserve all SEO work from Phases 1–4: titles, metas, canonicals, hreflang, all schemas, robots.txt, sitemap, llms.txt.
- Move meta management from react-helmet-async to Next.js built-in Metadata API.
- Every page must be server-rendered or statically generated. The raw HTML response must contain the full page content.

**Approach:**
Before writing code:
1. Propose the full new project structure (folder tree) in the report.
2. Explain how each current page maps to the new App Router pages.
3. Identify any Vite-specific or shadcn integration points that need adjustment for Next.js.
4. Wait for user approval.

Then:
- Phase 5a: Scaffold Next.js 14 project in a `/next-app` sibling folder. Get homepage + one service page working perfectly. Verify raw HTML contains content using `curl -A "PerplexityBot" https://localhost:3000/`.
- Phase 5b: Port remaining pages, one per commit.
- Phase 5c: User swaps DNS / deployment once verified. Keep old build as fallback for one week.

### Phase 6 — Content expansion (ongoing, driven by user prompts)

Once Phases 1–5 are complete, create new pages and blog posts. Separate brief to follow. Do not start until user prompts "begin Phase 6".

Planned pages in priority order:
1. `/landlord-gas-safety-certificate-london` (CP12)
2. `/eicr-london`
3. `/pat-testing-london`
4. `/legionella-risk-assessment-london`
5. `/hiu-servicing-london`
6. `/mvhr-servicing-london`
7. `/fcu-servicing-london`
8. `/airbnb-property-management-maintenance-london`
9. `/serviced-accommodation-maintenance-london`
10. `/hmo-maintenance-london`
11. `/end-of-tenancy-cleaning-london`
12. `/emergency-plumber-london`
13. `/landlord-compliance-hub` (pillar page)
14. Borough pages: Westminster, Kensington & Chelsea, Camden, Islington, Hackney, Tower Hamlets, Southwark, Lambeth, Wandsworth, City of London
15. Blog posts (20+ planned)

---

## 9. Quality standards

### Before every commit:
- Visually scan the diff. Confirm no unrelated changes leaked in.
- Confirm the commit is scoped to a single logical change.
- Use Conventional Commits format: `feat(seo):`, `fix(seo):`, `fix(copy):`, `refactor():`, etc.

### After every phase:
- Produce a brief report: files changed, key decisions, anything blocked on user input.
- List every `{PLACEHOLDER_...}` that still needs a real value.
- Flag anything that the user should verify manually.

### Testing after Phase 5 (Next.js migration):
- `curl -A "Mozilla/5.0 (compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)" {url}` must return full HTML content for every page.
- Every page returns 200 OK (or 301 for the renamed routes).
- Every page has a unique `<title>`, unique `<meta name="description">`, a `<link rel="canonical">`, `<link rel="alternate" hreflang="en-GB">`, and at least one `<script type="application/ld+json">`.
- No grep matches for "Maineniq" anywhere.
- `/robots.txt`, `/sitemap.xml`, `/llms.txt` all return 200 with correct content type.

### Safety rules:
- Never commit `{PLACEHOLDER_...}` replacements with fake/invented data. Leave placeholders literal.
- Never invent a Gas Safe number, NICEIC number, phone number, or address. If it's not supplied, use the placeholder.
- Never remove or modify contact form handlers, auth, or payment logic.
- If a change would affect >10 files or require more than one commit, describe the plan first and wait for approval.
- If a change involves `package.json` dependencies, justify and ask before installing.

---

## 10. Pronunciation and disambiguation (anti-US-traffic measure)

There is a separate US-based company called **MaintainIQ** (restaurant CMMS / food-safety SaaS, unrelated). Phonetically and visually similar to Mainteniq, which is causing US users to accidentally land here.

When writing copy:
- Consider including a disambiguation note in the footer or about page: "Mainteniq (pronounced main-ten-iq) is a UK-only property maintenance company based in London. Not affiliated with any US software company of similar name."
- Lead with "London" and UK signals heavily on every page.
- In alt text and image descriptions, use "Mainteniq London" rather than just "Mainteniq".

---

## 12. Domain canonicalisation

The business owns two domains:
- https://www.mainteniq.co.uk (primary, canonical)
- https://mainteniq.com (alias, must 301 redirect to the .co.uk equivalent path)

All canonical tags must point to mainteniq.co.uk. All marketing material, schemas, llms.txt, and copy use mainteniq.co.uk. The .com domain exists only as a defensive registration and must always 301 redirect everything to the matching .co.uk URL preserving the path (e.g. mainteniq.com/hvac-maintenance → mainteniq.co.uk/hvac-maintenance, and mainteniq.com/ → mainteniq.co.uk/).

The redirect must be enforced at hosting/DNS level. Lovable's hosting (Cloudflare-fronted) does not currently honour the public/_redirects file, so the redirect is unimplemented as of this commit. In Phase 5 (Next.js + Vercel), the redirect is configured via Vercel domains: both domains added to the project, mainteniq.co.uk set as primary, all .com traffic auto-301'd to the matching .co.uk path by Vercel.

Until Phase 5 lands, both domains serve identical content with no redirect. This is a known interim issue accepted by the user.

---

## 13. Legacy URL redirects

These are URLs from the previous Wix-era version of the site that Google still has cached. All must be configured as 301 permanent redirects in `next.config.js` during Phase 5 (Next.js + Vercel). Do not implement them on the current Lovable/Cloudflare stack — Lovable's hosting does not reliably honour `public/_redirects`.

| Old URL | Redirects to | Notes |
|---|---|---|
| `/heatingventilationairconditioning` | `/hvac-maintenance` | Wix-era slug |
| `/allservices` | `/services` | Wix-era slug |
| `/plumber-and-electrician` | `/plumber-electrician` | Wix-era slug |
| `/copy-of-plumber-and-electrician` | `/plumber-electrician` | Wix duplicate page |
| `/heatinterfaceunit` | `/hiu-maintenance` | Wix-era slug — target page is a Phase 6 page; redirect to `/services` until it exists |
| `/end-of-tenancy-cleaning` | `/services` | Phase 6 page not yet created; update to `/end-of-tenancy-cleaning-london` once live |
| `/buildingmanagementsystem` | `/building-management-systems-london` | Already in §6.2 — confirmed here |
| `/renovation-composer` | `/property-renovation-london` | Already in §6.2 — confirmed here |

When Phase 6 creates `/hiu-maintenance` and `/end-of-tenancy-cleaning-london`, update the two interim redirects in `next.config.js` to point to the final destination.

---

## 11. How to read this file

- **User:** "Begin Phase 1" → Claude Code reads Section 8 Phase 1, uses content from Section 6.1, reports back.
- **User:** "Do the schema" → Claude Code reads Sections 6.3, 6.4, 8 Phase 3, executes.
- **User:** "Fix the typos" → Claude Code reads Section 4 "Critical bugs" + Section 8 Phase 1 grep instruction.

If a user request is ambiguous, ask which phase and which section applies. Never guess.

---

*This file was generated on 2026-04-24. Update it as the project evolves. Treat it as the project's living constitution.*
