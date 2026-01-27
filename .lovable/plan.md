

# Comprehensive SEO, Open Graph & Site Indexing Optimization Plan

## Current State Analysis

Your site already has a solid foundation with:
- Multiple sitemap files (main, news, image)
- Comprehensive robots.txt with AI crawler support
- LocalBusinessSchema, ReviewSchema, EnhancedSEO, and VoiceSearchOptimizer components
- EnhancedFAQSchema for FAQ rich snippets

However, there are significant improvements needed for better Google indexing and search visibility.

---

## Phase 1: Critical Sitemap Updates

### Update sitemap.xml
**Issue**: All `lastmod` dates are 2025-01-02 (stale)

**Changes**:
- Update all `lastmod` dates to 2026-01-26 (current)
- Add missing pages if any were added recently
- Ensure proper XML encoding

### Update news-sitemap.xml
- Update publication dates to current
- Add any new blog posts or case studies

### Update robots.txt
- Update "Last updated" comment to 2026-01-26

---

## Phase 2: Enhanced index.html Meta Tags

### Add Missing Critical Meta Tags
```html
<!-- Preconnect for performance -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- DNS Prefetch for external resources -->
<link rel="dns-prefetch" href="https://www.google-analytics.com">

<!-- Theme color for mobile browsers -->
<meta name="theme-color" content="#1a1a2e">
<meta name="msapplication-TileColor" content="#1a1a2e">

<!-- Geographic targeting -->
<meta name="geo.region" content="GB-ENG">
<meta name="geo.placename" content="London">
<meta name="geo.position" content="51.5074;-0.1278">
<meta name="ICBM" content="51.5074, -0.1278">

<!-- Enhanced mobile -->
<meta name="format-detection" content="telephone=yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Mainteniq">

<!-- Content freshness signals -->
<meta name="revised" content="2026-01-26">
<meta name="date" content="2026-01-26">
```

### Fix Open Graph Tags
```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="Mainteniq - UK Property Services">
<meta property="og:locale" content="en_GB">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/png">
```

### Add Twitter Card Enhancements
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@mainteniq">
<meta name="twitter:creator" content="@mainteniq">
```

---

## Phase 3: New Global SEO Component

### Create src/components/GlobalSEO.tsx
A comprehensive component that handles:
- Dynamic canonical URLs
- Hreflang tags (en-GB primary, x-default)
- Preload critical resources
- Core Web Vitals optimization hints
- AI crawler meta tags with current dates

```text
Component Structure:
+---------------------------+
|     GlobalSEO.tsx         |
+---------------------------+
| - Canonical URL generator |
| - Hreflang injection      |
| - Page-specific OG tags   |
| - AI freshness signals    |
| - Preload hints           |
+---------------------------+
```

---

## Phase 4: Enhanced Structured Data

### Update src/utils/structuredData.ts

Add new schema generators:

**1. WebSite Schema with SearchAction** (enables site search in Google)
```json
{
  "@type": "WebSite",
  "url": "https://www.mainteniq.co.uk",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.mainteniq.co.uk/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

**2. Organization Schema Enhancement**
- Add `sameAs` for social profiles
- Add `contactPoint` for customer service
- Add `knowsAbout` for service expertise

**3. Service Schema for Each Service Page**
```json
{
  "@type": "Service",
  "serviceType": "HVAC Maintenance",
  "provider": { "@type": "LocalBusiness" },
  "areaServed": ["London", "Greater London"],
  "hasOfferCatalog": {...}
}
```

**4. HowTo Schema for Process Sections**
- Enables "How-To" rich snippets in Google

---

## Phase 5: Page-Level SEO Optimization

### Update All Service Pages with:

**1. Unique Title Tags** (60 characters max)
```
FCU Maintenance London | Same-Day Service | Mainteniq
HIU Service & Repair London | 24/7 Emergency | Mainteniq
MVHR Cleaning London | Professional Filter Service | Mainteniq
```

**2. Meta Descriptions** (155 characters max, include CTA)
```
Professional FCU maintenance in London. Same-day service, 24/7 emergency support. Gas Safe registered. Get a free quote today. Call +44 783 456 2366.
```

**3. Add FAQ Schema to All Service Pages**
- 3-5 FAQs per page
- Unique, service-specific questions
- Enables FAQ rich snippets in search results

**4. Add Breadcrumb Schema**
```
Home > Services > HVAC Maintenance > FCU Maintenance
```

---

## Phase 6: Image SEO Optimization

### Update public/image-sitemap.xml
- Add all service images with proper titles and captions
- Include geo location for local SEO
- Update lastmod dates

### Image Alt Text Audit
Add keyword-rich, descriptive alt text:
- Current: "FCU unit"
- Improved: "Professional FCU maintenance service in London apartment building"

### Add WebP Format Support
- Create WebP versions of key images
- Implement `<picture>` elements with fallbacks

---

## Phase 7: Technical SEO Improvements

### Core Web Vitals Optimization
- Add `loading="lazy"` to below-fold images
- Add `fetchpriority="high"` to hero images
- Preload critical CSS fonts

### Mobile-First Indexing
- Verify all content is visible on mobile
- Check tap targets are adequately sized (48x48px minimum)
- Ensure text is readable without zooming

### Security Headers (via Vite config)
```javascript
// Add to vite.config.ts for production
headers: {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin'
}
```

---

## Phase 8: Google Search Console Integration

### Add Verification File
- Create `public/google[verification-code].html`
- Or add meta tag to index.html

### Submit Sitemaps
After deployment, submit in Google Search Console:
1. https://www.mainteniq.co.uk/sitemap.xml
2. https://www.mainteniq.co.uk/news-sitemap.xml
3. https://www.mainteniq.co.uk/image-sitemap.xml

### Request Indexing
- Use URL Inspection tool for key pages
- Monitor Coverage report for issues

---

## Files to Create/Update

| File | Action | Purpose |
|------|--------|---------|
| `public/sitemap.xml` | Update | Refresh lastmod dates |
| `public/news-sitemap.xml` | Update | Current publication dates |
| `public/image-sitemap.xml` | Update | Add all service images |
| `public/robots.txt` | Update | Update last modified date |
| `index.html` | Update | Add missing meta tags, OG fixes |
| `src/components/GlobalSEO.tsx` | Create | Centralized SEO management |
| `src/utils/structuredData.ts` | Update | Add WebSite, Service, HowTo schemas |
| `src/components/SEOHead.tsx` | Update | Enhanced meta tag handling |
| All 11 service pages | Update | Add FAQ schema, unique meta tags |
| `vite.config.ts` | Update | Security headers |

---

## Expected SEO Improvements

| Metric | Current | Target |
|--------|---------|--------|
| Rich Snippets | Limited | FAQ, Review, HowTo, Breadcrumb |
| Local Pack Visibility | Moderate | High (enhanced LocalBusiness) |
| Mobile Usability | Good | Excellent |
| Core Web Vitals | Unknown | All Green |
| AI Search Visibility | Good | Excellent |
| Page Indexing | Partial | Complete |

---

## Implementation Priority

1. **Immediate** (Today): Sitemap updates, robots.txt date fix
2. **High Priority** (Week 1): index.html meta tags, GlobalSEO component
3. **Medium Priority** (Week 2): Structured data enhancements, service page updates
4. **Ongoing**: Image optimization, Core Web Vitals monitoring

---

## Technical Notes

- All canonical URLs must use `https://www.mainteniq.co.uk` (with www)
- Company name spelling: "Mainteniq" (consistent everywhere)
- Phone number format: +44 783 456 2366
- Geographic focus: London with 120-mile service radius
- Primary audience: Property managers, landlords, Airbnb hosts

