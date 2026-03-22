

# Full Mobile Optimization - All Pages & Components

## Problem Summary
Multiple pages and components have hardcoded large Tailwind classes without mobile breakpoints, causing oversized text, padding, and spacing on 390px viewports.

---

## Files & Changes

### 1. `src/pages/Services.tsx` (3 sections need fixing)

**"Why Proactive Maintenance Matters" (~line 547-633)**:
- `py-20` → `py-10 sm:py-14 md:py-20`
- `mb-16` → `mb-8 md:mb-16` (heading wrapper)
- `text-3xl md:text-4xl` → `text-2xl sm:text-3xl md:text-4xl`
- `text-xl` subtitle → `text-sm sm:text-base md:text-xl`
- `mb-12` → `mb-6 md:mb-12`
- `mb-16` → `mb-8 md:mb-16` (cards grid)
- `p-8` CTA box → `p-4 sm:p-6 md:p-8`
- `text-2xl` CTA heading → `text-xl sm:text-2xl`

**"Why Choose Our Services" (~line 635-687)**:
- `py-20` → `py-10 sm:py-14 md:py-20`
- `gap-12` → `gap-6 md:gap-12`
- `text-4xl` → `text-2xl sm:text-3xl md:text-4xl`
- `text-lg` body → `text-sm sm:text-base md:text-lg`
- `mb-8` → `mb-6 md:mb-8`
- `mb-6` → `mb-4 md:mb-6`
- Floating badge `absolute -bottom-6 -right-6 p-6` → `static sm:absolute sm:-bottom-4 sm:-right-4 p-4 sm:p-6 mt-4 sm:mt-0`
- `text-2xl` in badge → `text-xl sm:text-2xl`

**"Ready to Get Started" CTA (~line 689-714)**:
- `py-20` → `py-10 sm:py-14 md:py-20`
- `text-4xl` → `text-2xl sm:text-3xl md:text-4xl`
- `text-xl` → `text-sm sm:text-base md:text-xl`
- `mb-8` → `mb-6 md:mb-8`
- Second button `text-lg px-8` → `text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8`

### 2. `src/pages/WhyProfessionalHVAC.tsx` (3 sections)

**Professional HVAC Benefits (~line 471)**:
- `py-20` → `py-10 sm:py-14 md:py-20`

**Why Choose Mainteniq (~line 955)**:
- `py-20` → `py-10 sm:py-14 md:py-20`
- Trust metrics `gap-6` → `gap-3 sm:gap-6`, `text-3xl` → `text-xl sm:text-2xl md:text-3xl`
- `w-10 h-10` icons → `w-8 h-8 sm:w-10 sm:h-10`

**Testimonial card (~line 1032)**:
- `p-8` → `p-4 sm:p-6 md:p-8`
- `text-xl` blockquote → `text-sm sm:text-base md:text-xl`

**ROI savings (~line 943)**:
- `text-5xl` → `text-3xl sm:text-4xl md:text-5xl`

### 3. `src/pages/MaintenanceContracts.tsx` (8 sections)

**Track Record (~line 163)**:
- `text-3xl` heading → `text-2xl sm:text-3xl`
- Stats `text-3xl` → `text-xl sm:text-2xl md:text-3xl`
- `p-6` stat cards → `p-3 sm:p-4 md:p-6`

**Contract vs Reactive (~line 193)**:
- `py-16` → `py-8 sm:py-12 md:py-16`
- `mb-12` → `mb-8 md:mb-12`
- `text-3xl` → `text-2xl sm:text-3xl`
- `text-lg` → `text-sm sm:text-base md:text-lg`
- `gap-8` → `gap-4 sm:gap-6 md:gap-8`

**What Makes Us Different (~line 261)**:
- `py-16` → `py-8 sm:py-12 md:py-16`
- `mb-12` → `mb-8 md:mb-12`
- `text-3xl` → `text-2xl sm:text-3xl`
- `text-lg` → `text-sm sm:text-base md:text-lg`
- `gap-8 mb-16` → `gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-16`

**Contract Benefits (~line 373)**:
- `py-16` → `py-8 sm:py-12 md:py-16`
- `mb-12` → `mb-8 md:mb-12`
- `text-3xl` → `text-2xl sm:text-3xl`
- `text-lg` → `text-sm sm:text-base md:text-lg`

**Stakeholders (~line 401)**:
- `py-16` → `py-8 sm:py-12 md:py-16`
- `mb-12` → `mb-8 md:mb-12`
- `text-3xl` → `text-2xl sm:text-3xl`
- `text-lg` → `text-sm sm:text-base md:text-lg`
- `gap-8` → `gap-4 sm:gap-6 md:gap-8`

**Assessment Process (~line 439)**:
- `py-16` → `py-8 sm:py-12 md:py-16`
- `mb-12` → `mb-8 md:mb-12`
- `text-3xl` → `text-2xl sm:text-3xl`
- `text-lg` → `text-sm sm:text-base md:text-lg`

**Case Studies / Service Coverage / Commitments (~lines 465, 567, 611)**:
- All: `py-16` → `py-8 sm:py-12 md:py-16`
- All: `mb-12` → `mb-8 md:mb-12`
- All: `text-3xl` → `text-2xl sm:text-3xl`
- All: `text-lg` → `text-sm sm:text-base md:text-lg`
- Service commitments: `text-xl` subtitle → `text-base sm:text-lg md:text-xl`
- `gap-8` → `gap-4 sm:gap-6 md:gap-8`

**Final CTA (~line 666)**:
- `py-16` → `py-8 sm:py-12 md:py-16`
- `text-3xl sm:text-4xl` already good
- `text-lg sm:text-xl` already good

### 4. `src/pages/FAQ.tsx`

- `py-20` → `py-10 sm:py-14 md:py-20`
- `mb-12` → `mb-8 md:mb-12`
- `text-4xl` → `text-2xl sm:text-3xl md:text-4xl`
- `text-xl` subtitle → `text-sm sm:text-base md:text-xl`
- Bottom CTA `mt-12` → `mt-8 md:mt-12`
- `text-2xl` → `text-xl sm:text-2xl`

### 5. `src/pages/Blog.tsx`

**Hero (~line 84)**:
- `py-20` → `py-10 sm:py-14 md:py-20`
- `text-4xl md:text-5xl` → `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
- `text-xl` → `text-sm sm:text-base md:text-xl`
- `mb-6` → `mb-4 md:mb-6`
- `mb-8` → `mb-6 md:mb-8`

**Blog grid (~line 98)**:
- `py-16` → `py-8 sm:py-12 md:py-16`
- `gap-8` → `gap-4 sm:gap-6 md:gap-8`

**Newsletter (~line 155)**:
- `py-16` → `py-8 sm:py-12 md:py-16`
- `text-3xl` → `text-2xl sm:text-3xl`
- `text-lg` → `text-sm sm:text-base md:text-lg`
- `mb-8` → `mb-6 md:mb-8`

### 6. `src/pages/EndOfTenancyCleaning.tsx`

**Hero H1 (~line 332)**:
- `text-3xl sm:text-4xl md:text-5xl lg:text-7xl` → `text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl`

**Sections within main container (~line 380+)**:
- `space-y-16` → `space-y-8 sm:space-y-12 md:space-y-16`
- "Who We Help" `text-3xl` → `text-2xl sm:text-3xl`
- `text-lg` subtitles → `text-sm sm:text-base md:text-lg`
- `p-8` sections → `p-4 sm:p-6 md:p-8`
- "What We Clean" `text-3xl` → `text-2xl sm:text-3xl`

### 7. `src/components/RelatedServices.tsx`

- `py-16` → `py-8 sm:py-12 md:py-16`
- `text-3xl` → `text-2xl sm:text-3xl`
- `mb-12` → `mb-8 md:mb-12`

### 8. `src/components/TrustBadges.tsx`

- `py-12` → `py-8 md:py-12`

### 9. `src/pages/Services.tsx` - "90%" stat card (~line 381)

- `text-5xl` → `text-3xl sm:text-4xl md:text-5xl`
- `p-6 md:p-8` scheduling box already decent; `text-2xl` heading → `text-xl sm:text-2xl`

---

## Summary

~9 files with consistent pattern: replace hardcoded `py-16/py-20`, `text-3xl/text-4xl`, `gap-8/gap-12`, `mb-12/mb-16`, `p-8` with mobile-first breakpoints. About, Contact, Homepage, Footer, FullBleedHero, ProblemSolutionSection were already fixed in previous rounds. This covers the remaining pages and shared components.

