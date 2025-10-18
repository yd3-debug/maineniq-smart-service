# SEO Optimization Guide for Mainteniq

## 🎯 Current Status

✅ **Completed:**
- Sitemap with all pages indexed
- Image sitemap for visual content
- News sitemap for blog posts
- Robots.txt configured for all major crawlers (including AI)
- Structured data (Schema.org) implemented
- Core Web Vitals monitoring
- Page speed optimizations
- Mobile-first responsive design
- Internal linking components
- Review schema for trust signals
- Voice search optimization

## 🚀 Quick Setup Checklist

### Phase 1: Critical Setup (Do This First!)

#### 1. Google Analytics 4 Setup
**File:** `src/components/GoogleAnalytics.tsx`

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a GA4 property (if you don't have one)
3. Get your Measurement ID (starts with `G-`)
4. Replace `G-XXXXXXXXXX` in the file with your actual ID

**Expected Result:** Track all page views, user behavior, and conversions

#### 2. Google Search Console Verification
**File:** `src/components/GoogleAnalytics.tsx` (line 47)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property `https://www.mainteniq.co.uk`
3. Choose "HTML tag" verification method
4. Copy the verification code (the `content` value from the meta tag)
5. Replace `your-search-console-verification-code` with your actual code

**Expected Result:** Access to search performance data, indexing status, and crawl errors

#### 3. Submit Sitemaps to Google
After setting up Search Console:

1. Go to Search Console → Sitemaps
2. Submit these URLs:
   - `https://www.mainteniq.co.uk/sitemap.xml`
   - `https://www.mainteniq.co.uk/image-sitemap.xml`
   - `https://www.mainteniq.co.uk/news-sitemap.xml`

**Expected Result:** Google will crawl and index all your pages

### Phase 2: Content Enhancement

#### 4. Add Real Customer Reviews
**File:** `src/components/ReviewSchema.tsx`

Update with actual customer reviews to boost trust and local SEO:
```tsx
<ReviewSchema 
  reviews={[
    {
      author: "Customer Name",
      rating: 5,
      text: "Review text here",
      date: "2025-10-01",
      title: "Great Service"
    }
  ]}
  aggregateRating={{
    ratingValue: 4.9,
    reviewCount: 847
  }}
/>
```

#### 5. Implement Related Services Links
**File:** Example usage in any service page

```tsx
import RelatedServices from '@/components/RelatedServices';

// At the bottom of your service page
<RelatedServices 
  services={[
    {
      title: "FCU Maintenance",
      description: "Professional FCU cleaning and servicing",
      link: "/fcu-maintenance"
    },
    // Add 2-5 related services
  ]}
/>
```

**Why:** Internal linking boosts SEO and helps users discover more services

#### 6. Add Trust Badges to Homepage
**File:** `src/pages/Index.tsx`

```tsx
import TrustBadges from '@/components/TrustBadges';

// Add near the top of your homepage
<TrustBadges />
```

### Phase 3: Advanced Optimization

#### 7. Create Blog Section
Create a blog for content marketing and link building:

**Benefits:**
- Ranks for long-tail keywords
- Builds domain authority
- Generates backlinks
- Educates customers

**Suggested Topics:**
- "How Often Should You Service Your HVAC System?"
- "Signs Your FCU Needs Professional Maintenance"
- "Energy Saving Tips for London Homeowners"
- "Understanding HIU Systems: A Complete Guide"
- "MVHR vs Traditional Ventilation: Which is Better?"

#### 8. Local SEO Enhancement

**Google Business Profile:**
1. Claim your business on Google Maps
2. Add all services
3. Upload photos (use images from `/public` folder)
4. Respond to reviews
5. Post regular updates

**Local Citations:**
- Yelp UK
- Yell.com
- Checkatrade
- TrustATrader
- MyBuilder
- Bark.com

#### 9. Image Optimization

All images should have:
- Descriptive file names (e.g., `hvac-maintenance-london.jpg`)
- Alt text with keywords
- WebP format where possible
- Lazy loading (already implemented)

**Check:** Run Lighthouse audit in Chrome DevTools

### Phase 4: Monitoring & Improvement

#### 10. Track Key Metrics

**In Google Analytics, monitor:**
- Organic search traffic
- Top landing pages
- Conversion rate (quote requests, WhatsApp clicks)
- Bounce rate by page
- User flow

**In Google Search Console, monitor:**
- Search queries ranking
- Click-through rate (CTR)
- Average position
- Indexing coverage
- Core Web Vitals

#### 11. Monthly SEO Tasks

**Week 1:**
- Review Search Console for errors
- Check Core Web Vitals scores
- Update any outdated content

**Week 2:**
- Publish 1-2 new blog posts
- Update news-sitemap.xml with new posts
- Share content on social media

**Week 3:**
- Analyze competitor rankings
- Research new keywords
- Update meta descriptions for underperforming pages

**Week 4:**
- Build 5-10 local citations
- Reach out for guest post opportunities
- Respond to all reviews (Google, Trustpilot)

## 📊 Expected Results Timeline

### Month 1
- All pages indexed by Google
- Analytics tracking active
- Baseline metrics established

### Month 2
- 20-30% increase in organic traffic
- Improved rankings for brand keywords
- More quote requests from organic search

### Month 3
- Top 10 rankings for local service keywords
- 50-100% increase in organic traffic
- Multiple featured snippets

### Month 6
- Top 3 rankings for primary keywords
- 200%+ increase in organic traffic
- Consistent lead generation from SEO

## 🔍 Quick SEO Health Checks

### Weekly Checks (5 minutes)
```bash
✓ Google "site:mainteniq.co.uk" - Check indexed pages
✓ Test mobile responsiveness on real device
✓ Check page load speed with PageSpeed Insights
✓ Verify WhatsApp and phone links work
```

### Monthly Checks (30 minutes)
```bash
✓ Run full Lighthouse audit
✓ Check all internal links work
✓ Verify structured data with Google Rich Results Test
✓ Review Search Console performance report
✓ Update sitemap lastmod dates for changed pages
```

## 🆘 Troubleshooting

### Pages Not Indexed?
1. Check robots.txt doesn't block them
2. Verify pages exist in sitemap.xml
3. Submit sitemap in Search Console
4. Check for crawl errors in Search Console

### Rankings Not Improving?
1. Verify GA4 and Search Console are set up
2. Check competitors' content quality
3. Build more local citations
4. Add more original content (blog posts)
5. Get more customer reviews

### Poor Page Speed?
1. Check image sizes (should be < 500KB each)
2. Review Lighthouse report in Chrome DevTools
3. Verify lazy loading is working
4. Check Core Web Vitals in real user data

## 📚 Useful Tools

**Free SEO Tools:**
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

**Keyword Research:**
- Google Autocomplete (free)
- AnswerThePublic (free tier)
- Google Trends (free)

**Backlink Building:**
- Yell.com
- Checkatrade
- Local business directories
- Industry associations

## 🎓 SEO Best Practices

1. **Content is King:** Write for humans first, search engines second
2. **Be Patient:** SEO takes 3-6 months to show results
3. **Stay Consistent:** Regular content updates beat occasional large changes
4. **Focus Local:** "HVAC maintenance London" > "HVAC maintenance"
5. **Build Trust:** Reviews and certifications matter more than ever
6. **Mobile First:** 70%+ of searches are mobile
7. **Fast is Better:** Every 100ms of delay = 1% drop in conversions

## 📞 Need Help?

If rankings aren't improving after 3 months:
1. Review this checklist again
2. Verify all setup steps completed
3. Consider hiring an SEO consultant
4. Focus on getting more genuine customer reviews

---

**Last Updated:** October 2025  
**Next Review:** Monthly  
**Owner:** Marketing Team
