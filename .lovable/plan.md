

# Compact Problem-Solution Cards for Mobile

## Problem
The cards have `p-6` padding, `w-12 h-12` icons, `text-lg` headings, and `gap-4` spacing — all too generous for a 390px viewport. Each card takes up too much vertical space.

## Changes — `src/components/ProblemSolutionSection.tsx`

**Card padding**: `p-6` → `p-3 sm:p-4 md:p-6`

**Icon container**: `w-12 h-12` → `w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12`, icon `w-6 h-6` → `w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6`

**Icon-to-text gap**: `gap-4` → `gap-3 sm:gap-4`

**Heading**: `text-lg` → `text-base sm:text-lg`

**Body text**: add `text-sm sm:text-base`

**Grid gap**: `gap-6` → `gap-3 sm:gap-4 md:gap-6`

This will make each card noticeably more compact on mobile while preserving the desktop layout.

