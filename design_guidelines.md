# Design Guidelines: Romantic Date Invitation for Liaaa

## Design Approach
**Reference Style:** Modern romantic web experiences inspired by premium dating apps (Hinge, Bumble aesthetics) combined with elegant wedding invitation websites. Emphasis on emotional impact through thoughtful animations and intimate presentation.

## Core Design Elements

### Typography
- **Primary Font:** Playfair Display or Cormorant Garamond (elegant serif via Google Fonts)
- **Secondary Font:** Poppins or Inter (clean sans-serif for details)
- **Hierarchy:**
  - Hero headline: 4xl-6xl, serif, light weight
  - Name "Liaaa": 5xl-7xl, serif, romantic styling
  - Date/location: lg-xl, sans-serif, medium weight
  - Body text: base-lg, sans-serif, regular weight

### Layout System
**Spacing:** Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm
- Mobile: py-12, px-6
- Desktop: py-20, px-8

### Page Structure

**1. Opening Animation Sequence (Full viewport)**
- Animated heart icon or romantic illustration that pulses/grows
- Fade-in reveal showing "For Liaaa" with staggered letter animation
- Gentle particle effects (floating hearts/petals) in background
- Duration: 3-4 seconds before main content reveals

**2. Hero Section (80vh)**
- Background: Romantic cafe/coffee-themed imagery (soft focus, warm tones)
- Central card with frosted glass/blur effect containing:
  - Personal message header
  - Date invitation text
  - "Liaaa" prominently displayed
  - Primary CTA button with blur background and glow effect

**3. Date Details Section (Natural height)**
- Two-column layout (desktop) / stacked (mobile)
- Left: Animated calendar icon with date details (Minggu, 16 November 2025)
- Right: Location details with map pin icon (Koala Cafe)
- Subtle hover animations on each card

**4. Romantic Message Section (Full-width)**
- Single column, max-w-2xl centered
- Heartfelt message space
- Decorative elements: illustrated florals, hearts as dividers

**5. Interactive Response Section**
- Large, prominent animated button (special click animation)
- Button states: Resting glow → Click triggers confetti/hearts burst → Success message
- Micro-interaction: Button slightly bounces on hover

## Component Library

### Buttons
- **Primary CTA:** Large rounded button (rounded-2xl), backdrop-blur, subtle shadow
- **Hover State:** Scale up slightly (scale-105), increased glow
- **Click Animation:** Confetti burst or heart explosion using canvas-confetti library

### Cards
- Frosted glass effect using backdrop-blur
- Subtle borders with low opacity
- Generous padding (p-8 to p-12)
- Soft shadows (shadow-xl with low opacity)

### Icons
- **Library:** Heroicons (via CDN)
- **Usage:** Heart, calendar, map pin, sparkles
- Sized at w-8 h-8 to w-12 h-12

### Animations
**Strategic Use Only:**
- Opening sequence: Fade-in with scale animation
- Button click: Confetti/heart particle burst (canvas-confetti)
- Scroll reveal: Gentle fade-up for sections (Intersection Observer)
- Background: Very subtle floating particle effect (hearts/sparkles)
- Avoid excessive motion - keep romantic, not distracting

## Images
**Hero Background:** 
- Soft-focus cafe interior or coffee/romantic table setting
- Warm, inviting atmosphere
- Overlay: gradient with 40-60% opacity for text readability

**Decorative Elements:**
- Illustrated hearts, flowers, or coffee-themed romantic graphics
- Placement: Section dividers, corners, subtle background elements

## Accessibility
- Animations respect prefers-reduced-motion
- Text contrast maintained with image overlays
- Touch targets minimum 44x44px
- Focus states visible on all interactive elements

## Responsive Behavior
- Mobile-first approach (WhatsApp sharing primary use case)
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Hero: 100vh mobile, 80vh desktop
- Stack columns on mobile, side-by-side on desktop
- Larger touch targets for mobile (min 48px)

## Special Features
- Opening animation cannot be skipped (creates anticipation)
- Button click triggers celebration animation
- Smooth scroll between sections
- Optimized for sharing: Open Graph meta tags with romantic preview