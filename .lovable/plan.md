

# Full Mobile Optimization — Remaining Pages & Components

## Scope
After auditing every page and component, the following files still have hardcoded large values (`p-8`, `text-3xl`, `text-4xl`, `text-lg`, `mb-8`, `mb-12`, `space-y-16`, `space-y-20`, `py-16`, `gap-8`, `p-12`, `w-16 h-16`) without mobile breakpoints.

---

## Files & Changes

### 1. `src/pages/BMS.tsx`
- **Main container** `py-16 space-y-20` → `py-8 sm:py-12 md:py-16 space-y-10 sm:space-y-14 md:space-y-20`
- **All `text-3xl` headings** (lines 71, 121, 160) → `text-2xl sm:text-3xl`
- **All `text-lg` body** → `text-sm sm:text-base md:text-lg`
- **All `p-8` sections** (lines 96, 119) → `p-4 sm:p-6 md:p-8`
- **`text-4xl` emoji** (line 97) → `text-2xl sm:text-3xl md:text-4xl`
- **`mb-8`** → `mb-6 md:mb-8`
- **Final CTA `p-12`** (line 158) → `p-6 sm:p-8 md:p-12`
- **`w-16 h-16`** icons → `w-12 h-12 sm:w-16 sm:h-16`

### 2. `src/pages/Handyman.tsx`
- **Main container** `py-12 space-y-16` → `py-8 sm:py-12 space-y-8 sm:space-y-12 md:space-y-16`
- **All `text-3xl` headings** (lines 170, 198, 232, 325, 386) → `text-2xl sm:text-3xl`
- **`text-lg` body** (line 171) → `text-sm sm:text-base md:text-lg`
- **All `p-8` sections** (lines 196, 323, 410) → `p-4 sm:p-6 md:p-8`
- **`mb-8`** sections → `mb-6 md:mb-8`

### 3. `src/pages/PlumberElectrician.tsx`
- **Main container** `py-12 space-y-16` → `py-8 sm:py-12 space-y-8 sm:space-y-12 md:space-y-16`
- **All `text-3xl` headings** (lines 150, 242, 307, 452) → `text-2xl sm:text-3xl`
- **`text-lg` body** (line 151) → `text-sm sm:text-base md:text-lg`
- **`p-8` sections** (line 241) → `p-4 sm:p-6 md:p-8`
- **`mb-8`** → `mb-6 md:mb-8`

### 4. `src/pages/SmartHome.tsx`
- **All `p-8` sections** (lines 281, 405, 450) → `p-4 sm:p-6 md:p-8`
- **`text-lg` body text** → `text-sm sm:text-base md:text-lg`
- **`mb-8`** → `mb-6 md:mb-8`

### 5. `src/pages/RenovationComposer.tsx`
- **`text-3xl md:text-4xl`** (lines 355, 455) → `text-2xl sm:text-3xl md:text-4xl`
- **`text-xl` body** (lines 358, 458) → `text-sm sm:text-base md:text-xl`
- **All `p-8` sections** (lines 428, 450) → `p-4 sm:p-6 md:p-8`
- **`gap-8`** grids (lines 363, 436, 463) → `gap-4 sm:gap-6 md:gap-8`
- **`w-16 h-16`** icons → `w-12 h-12 sm:w-16 sm:h-16`

### 6. `src/pages/MVHRMaintenance.tsx`
- **CardContent `p-8`** (line 490) → `p-4 sm:p-6 md:p-8`
- **`text-3xl` heading** (line 492) → `text-2xl sm:text-3xl`
- **`text-lg` body** (line 493) → `text-sm sm:text-base md:text-lg`
- **`mb-8`** → `mb-6 md:mb-8`
- **`mb-12` and `mb-16`** (lines 338, 466, 535, 620) → `mb-8 md:mb-12` / `mb-8 sm:mb-12 md:mb-16`
- **`w-16 h-16`** icons (lines 457, 621) → `w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16`

### 7. `src/pages/FCUMaintenance.tsx`
- **`p-8`** card content (lines 547, 565) → `p-4 sm:p-6 md:p-8`
- **`text-2xl`** headings inside cards → `text-xl sm:text-2xl`
- **`w-16 h-16`** icons → `w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16`

### 8. `src/pages/HIUMaintenance.tsx`
- **`p-8`** card content (lines 634, 692, 710) → `p-4 sm:p-6 md:p-8`
- **`w-12 h-12`** icons inside comparison cards already okay
- **`text-xl`** headings → `text-lg sm:text-xl`

### 9. `src/pages/BoilerServices.tsx`
- **`p-8`** (line 462) → `p-4 sm:p-6 md:p-8`
- **`gap-8`** (line 463) → `gap-4 sm:gap-6 md:gap-8`

### 10. `src/pages/CaseStudies.tsx`
- **`mb-16`** (lines 345, 351) → `mb-8 md:mb-16`
- **`md:text-4xl`** stat text (line 356) → already has `text-2xl md:text-4xl`, OK
- **`md:p-10`** stat cards (line 354) → `p-4 sm:p-6 md:p-10`

### 11. `src/pages/Contact.tsx`
- **Hero `min-h-[70vh]`** → `min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]`
- **`gap-12`** grids (lines 103, 230, 258) → `gap-6 md:gap-12`
- **`space-y-20`** (line 228) → `space-y-10 md:space-y-20`
- **`mb-16`** (line 219) → `mb-8 md:mb-16`

### 12. `src/pages/Index.tsx` — Final CTA Section
- **CTA buttons `text-lg px-8 py-4`** (lines 620, 630) → `text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 md:py-4`

---

## Summary

12 files with the same consistent pattern: replace hardcoded `p-8`, `p-12`, `text-3xl`, `text-lg`, `space-y-16/20`, `gap-8/12`, `mb-8/12/16`, `w-16 h-16` with mobile-first responsive breakpoints. This completes the full-site mobile optimization.

