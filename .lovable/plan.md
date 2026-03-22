

# Mobile Size Reduction: Hero & First Page Sections

## Changes

### 1. `src/components/FullBleedHero.tsx` (used on all service pages)
- Reduce mobile min-height: `min-h-[60vh]` → `min-h-[40vh]` (mobile), keep `sm:min-h-[55vh] md:min-h-[65vh] lg:min-h-[75vh]`
- Reduce mobile padding: `py-16` → `py-10`, keep `sm:py-16 md:py-24 lg:py-28`

### 2. `src/pages/Index.tsx` - Hero Section (lines 132-217)
- Reduce hero container padding: `p-6 sm:p-8 md:p-12` → `p-4 sm:p-6 md:p-10`
- Reduce hero `pt-12 md:pt-20` → `pt-8 md:pt-16`
- Reduce h1: `text-3xl sm:text-4xl md:text-5xl` → `text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl`
- Reduce subtitle: `text-base sm:text-lg` → `text-sm sm:text-base md:text-lg`
- Reduce CTA button padding on mobile: `py-6 md:py-7` → `py-4 md:py-6`
- Reduce social proof strip spacing: `pt-8 mt-8` → `pt-5 mt-5 sm:pt-8 sm:mt-8`
- Reduce urgency badge `mb-6` → `mb-4`

### 3. `src/pages/Index.tsx` - Key Results Strip (lines 220-249)
- Already compact. Minor tweak: `py-6` → `py-4 md:py-6`

### 4. `src/pages/Index.tsx` - Core Services Section (lines 252-299)
- Reduce `mb-8 md:mb-16` → `mb-6 md:mb-12`
- Already has responsive text sizes — no changes needed

### 5. `src/pages/Index.tsx` - Property Services Section (lines 305-346)
- Image height on mobile: `h-48 md:h-56` → `h-36 md:h-48` (smaller cards on mobile)

---

## Summary
Focused on shrinking the hero height, padding, and text sizes on mobile, plus reducing image card heights. This ensures the first screenful of the homepage and all FullBleedHero service pages feel compact and proportional on a phone.

