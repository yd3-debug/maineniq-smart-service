

# Mobile Optimization Plan - Full Website

## Problems Found

After reviewing the codebase at a 390px viewport, I found multiple sections across the site that lack mobile-responsive sizing. The issues fall into these categories:

1. **Oversized text on mobile** - Fixed `text-4xl`, `text-5xl` headings without `sm:` breakpoints
2. **Oversized padding/margins** - Fixed `py-20`, `mb-16`, `gap-16`, `gap-12` without mobile variants
3. **Oversized font sizes for body text** - Fixed `text-xl`, `text-lg` without responsive scaling
4. **Missing mobile breakpoints on key sections**

---

## Files & Changes

### 1. `src/pages/Index.tsx` - Homepage

**Contracts section (line ~349-433)**:
- `py-16` → `py-8 sm:py-12 md:py-16`
- `mb-12` → `mb-8 md:mb-12`
- `text-3xl` → `text-xl sm:text-2xl md:text-3xl`
- `text-lg` → `text-sm sm:text-base md:text-lg`
- `gap-8 mb-12` → `gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12`

**Why Choose Us section (line ~538-599)**:
- `py-20` → `py-8 sm:py-12 md:py-20`
- `text-4xl` → `text-2xl sm:text-3xl md:text-4xl`
- `text-lg` → `text-base md:text-lg`
- `gap-12` → `gap-6 md:gap-12`
- `mb-8` → `mb-6 md:mb-8`
- Stats cards `p-6` → `p-4 md:p-6`
- Stats `text-2xl` → `text-xl md:text-2xl`

**Final CTA section (line ~601-638)**:
- `py-20` → `py-10 sm:py-14 md:py-20`
- `text-4xl lg:text-5xl` → `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
- `text-xl` → `text-sm sm:text-base md:text-xl`

**Why Maintenance Matters (line ~439)**:
- `mb-16` → `mb-8 md:mb-16` (two instances)

### 2. `src/components/ProblemSolutionSection.tsx`

- `text-lg` description → `text-sm sm:text-base md:text-lg`
- CTA box `p-8` → `p-4 sm:p-6 md:p-8`
- `text-xl md:text-2xl` → `text-lg sm:text-xl md:text-2xl`

### 3. `src/pages/Contact.tsx`

- Professional Consultation: `py-20` → `py-10 sm:py-14 md:py-20`
- `gap-16` → `gap-8 md:gap-16`
- `text-4xl` → `text-2xl sm:text-3xl md:text-4xl`
- `text-xl` body → `text-base md:text-xl`
- `mb-20` → `mb-10 md:mb-20`
- Quick contact card `p-8` → `p-4 sm:p-6 md:p-8`
- `text-2xl` phone numbers → `text-lg sm:text-xl md:text-2xl`
- Check all remaining sections for oversized fixed values

### 4. `src/pages/About.tsx`

- Review all sections for fixed large sizes without mobile breakpoints

### 5. `src/components/Footer.tsx`

- Footer grid `py-12` → `py-8 md:py-12`
- Testimonial box and service coverage box spacing adjustments for mobile

### 6. All 11 Service Pages

Quick audit and fix pattern - most service pages (FCU, HIU, MVHR, etc.) share similar template patterns. FCU looks well-optimized already. Need to check the remaining 10 for any sections with fixed large values.

---

## Summary

The core issue is that several homepage sections and the Contact page have hardcoded large Tailwind classes (`text-4xl`, `py-20`, `gap-16`, `mb-16`) without mobile-first responsive breakpoints. The fix is adding `sm:` and `md:` prefixes consistently throughout. Service pages are mostly well-optimized already.

Estimated changes: ~6 files, focused on adding responsive breakpoints to existing classes.

