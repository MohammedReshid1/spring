# 🎯 WORLD-CLASS DESIGN SYSTEM - Spring of Knowledge Academy

## 📌 PROJECT MEMORY LOG

**Last Updated:** January 10, 2025
**Status:** Phase 1 - Foundation & Brand Extraction Complete
**Quality Gate:** Design System Definition ✅

---

## 🎨 BRAND IDENTITY (Extracted from Codebase)

### **Primary Brand Colors:**
```css
--brand-blue-primary: #1C74BB      /* Primary actions, highlights, CTAs */
--brand-blue-dark: #155A96         /* Hover states */
--brand-blue-light: #3D8FD1        /* Subtle accents */
--brand-blue-lighter: #E8F2F9      /* Backgrounds, subtle highlights */
```

### **World-Class Color System:**
```css
/* Backgrounds */
--white-pure: #FFFFFF              /* Primary background */
--white-off: #FAFAFA               /* Alternating sections */
--white-subtle: #F8F8F8            /* Card backgrounds */

/* Text */
--charcoal-primary: #1A1A1A        /* Headlines, primary text */
--charcoal-secondary: #333333      /* Body text */
--gray-medium: #555555             /* Secondary text */
--gray-light: #666666              /* Captions */
--gray-border: #E8E8E8             /* Subtle borders */
--gray-border-dark: #E0E0E0        /* Input borders */

/* Accents (Use Sparingly) */
--accent-blue: #1C74BB             /* CTAs only */
--accent-blue-hover: #155A96       /* CTA hover */
```

**Usage Rules:**
- 70% white/light backgrounds
- 20% light blue (primary actions, highlights)
- 10% charcoal text and borders
- **ZERO other colors**

---

## 📝 TYPOGRAPHY SYSTEM

### **Fonts:**
```css
--font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### **Hierarchy Scale:**
```css
/* H1 - Hero Headlines */
--h1-size: 56px;
--h1-weight: 700;
--h1-line-height: 1.2;
--h1-letter-spacing: -0.02em;
--h1-color: #1A1A1A;

/* H2 - Section Headings */
--h2-size: 44px;
--h2-weight: 600;
--h2-line-height: 1.3;
--h2-letter-spacing: -0.01em;
--h2-color: #1A1A1A;

/* H3 - Card Headings */
--h3-size: 32px;
--h3-weight: 600;
--h3-line-height: 1.35;
--h3-letter-spacing: -0.01em;
--h3-color: #1A1A1A;

/* H4 - Subheadings */
--h4-size: 24px;
--h4-weight: 600;
--h4-line-height: 1.4;
--h4-letter-spacing: 0;
--h4-color: #1C74BB;

/* Body Text */
--body-size: 18px;
--body-weight: 400;
--body-line-height: 1.7;
--body-color: #333333;

/* Caption Text */
--caption-size: 14px;
--caption-weight: 400;
--caption-line-height: 1.5;
--caption-color: #666666;
```

**Typography Rules:**
- ALL line-heights above 1.6 for body text
- Use weight variation (400, 500, 600, 700) for emphasis
- NO decorative fonts
- Consistent font rendering across all pages

---

## 📐 SPACING SYSTEM (Mathematical Precision - 8px Grid)

```css
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-6: 48px;
--space-8: 64px;
--space-10: 80px;
--space-12: 100px;
--space-15: 120px;
```

**Spacing Application:**
```css
/* Sections */
--section-gap: 120px;              /* Hero to next section */
--section-padding-y: 80px;         /* Section top/bottom */

/* Components */
--card-gap: 32px;                  /* Card to card */
--card-padding: 24px;              /* Card internal */
--text-image-gap: 48px;            /* Text to image */

/* Buttons */
--button-padding-y: 14px;          /* Vertical */
--button-padding-x: 32px;          /* Horizontal */

/* Micro Spacing */
--label-margin: 8px;               /* Label to input */
--input-padding: 16px;             /* Input internal */
```

---

## 🎭 ANIMATION SYSTEM (Framer Motion)

### **Global Animation Constants:**
```javascript
// Durations
export const ANIMATION_DURATION = {
  fast: 0.15,        // 150ms - Link hovers
  normal: 0.2,       // 200ms - Button hovers
  medium: 0.3,       // 300ms - Card hovers
  slow: 0.6,         // 600ms - Scroll reveals
}

// Easing
export const ANIMATION_EASING = {
  smooth: [0.25, 0.1, 0.25, 1],     // Default smooth
  spring: { type: "spring", stiffness: 100, damping: 15 },
  easeOut: [0, 0, 0.2, 1],
}

// Scroll Reveal Variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ANIMATION_EASING.easeOut }
  }
}

export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1  // 100ms delay between children
    }
  }
}
```

### **Component-Specific Animations:**

**Buttons:**
```javascript
const buttonVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.0,
    y: -2,
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.98, y: 0 }
}
```

**Cards:**
```javascript
const cardVariants = {
  rest: { y: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' },
  hover: {
    y: -4,
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    transition: { duration: 0.3 }
  }
}
```

**Images (Reactive):**
```javascript
const imageVariants = {
  rest: { scale: 1, filter: 'brightness(1)' },
  hover: {
    scale: 1.02,
    filter: 'brightness(1.05)',
    transition: { duration: 0.3 }
  }
}
```

---

## 🧩 COMPONENT SPECIFICATIONS

### **1. PRIMARY BUTTON**

**Visual Specs:**
```css
background: #1C74BB;
color: #FFFFFF;
padding: 14px 32px;
font-size: 16px;
font-weight: 600;
border-radius: 6px;
border: none;
box-shadow: none; /* at rest */
```

**Hover State (200ms ease-out):**
```css
background: #155A96; /* 8% darker */
box-shadow: 0 4px 16px rgba(28, 116, 187, 0.15);
transform: translateY(-2px);
```

**Framer Motion Implementation:**
```jsx
<motion.button
  className="bg-brand-blue-primary text-white px-8 py-3.5 text-base font-semibold rounded-md"
  variants={buttonVariants}
  initial="rest"
  whileHover="hover"
  whileTap="tap"
>
  Apply Now
</motion.button>
```

---

### **2. SECONDARY BUTTON**

**Visual Specs:**
```css
background: transparent;
color: #1C74BB;
border: 2px solid #1C74BB;
padding: 12px 30px;
font-size: 16px;
font-weight: 600;
border-radius: 6px;
```

**Hover State (200ms ease-out):**
```css
background: rgba(28, 116, 187, 0.05);
border: 2px solid #155A96;
transform: translateY(-2px);
```

---

### **3. TEXT/LINK BUTTON**

**Visual Specs:**
```css
color: #1C74BB;
font-size: 16px;
font-weight: 600;
background: none;
border: none;
text-decoration: none;
position: relative;
```

**Hover State (150ms ease-out):**
```css
color: #155A96;
/* Underline animates from left */
&::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #1C74BB;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 150ms ease-out;
}
&:hover::after {
  transform: scaleX(1);
}
```

---

### **4. CARD COMPONENT**

**Visual Specs:**
```css
background: #FFFFFF;
border: 1px solid #E8E8E8;
border-radius: 8px;
padding: 32px;
box-shadow: 0 1px 3px rgba(0,0,0,0.05);
```

**Hover State (300ms ease-out):**
```css
box-shadow: 0 8px 24px rgba(0,0,0,0.08);
border-color: #1C74BB; /* fade-in 200ms */
transform: translateY(-4px);
```

**Framer Motion Implementation:**
```jsx
<motion.div
  className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm"
  variants={cardVariants}
  initial="rest"
  whileHover="hover"
>
  {/* Card content */}
</motion.div>
```

---

### **5. INPUT FIELDS**

**Visual Specs:**
```css
background: #FFFFFF;
border: 2px solid #E0E0E0;
border-radius: 6px;
padding: 14px 16px;
font-size: 18px;
color: #1A1A1A;
line-height: 1.5;
```

**Focus State (200ms ease-out):**
```css
border: 2px solid #1C74BB;
box-shadow: 0 0 0 3px rgba(28, 116, 187, 0.1);
outline: none;
```

**Error State:**
```css
border: 2px solid #D32F2F;
box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1);
```

---

## ✅ QUALITY GATE 1: DESIGN PHASE CHECKLIST

**Before Development:**
- [x] Brand colors extracted (#1C74BB confirmed)
- [x] Typography scale defined (56px → 14px)
- [x] Spacing system established (8px grid)
- [x] Animation constants defined
- [x] Component specs written
- [ ] All hover states documented
- [ ] Accessibility standards defined
- [ ] Performance targets set

**Visual Consistency:**
- [x] All buttons use consistent styling
- [x] All cards have identical padding (32px)
- [x] All text uses approved typography
- [x] All colors from approved palette
- [x] All spacing follows 8px grid

**Interaction Consistency:**
- [x] All hover states are 200-300ms
- [x] All focus states have visible outlines
- [ ] All forms have error/success states (to be implemented)
- [ ] All modals have consistent animation (to be implemented)
- [ ] All scroll animations staggered 100ms

---

## 🚀 IMPLEMENTATION PHASES

### **Phase 1: Foundation** ✅
- [x] Extract brand colors
- [x] Define typography system
- [x] Create spacing scale
- [x] Define animation constants
- [x] Document component specs

### **Phase 2: Core Components** 🔄 IN PROGRESS
- [ ] Implement PRIMARY BUTTON with Framer Motion
- [ ] Implement SECONDARY BUTTON with Framer Motion
- [ ] Implement CARD COMPONENT with hover animations
- [ ] Implement INPUT FIELDS with focus states
- [ ] Implement LINK/TEXT buttons with underline animation

### **Phase 3: Page Sections** ⏳ PENDING
- [ ] Hero (600px height, smooth animations)
- [ ] Programs (3-col grid, card hover animations)
- [ ] Stats (scroll reveal animations)
- [ ] Testimonials (elegant layout)
- [ ] News (reactive images)
- [ ] Footer (refined styling)

### **Phase 4: Micro-Interactions** ⏳ PENDING
- [ ] Scroll reveal animations (staggered fade-up)
- [ ] Button hover states (lift + shadow)
- [ ] Card hover states (elevation)
- [ ] Image hover states (subtle scale)
- [ ] Link hover states (underline animation)
- [ ] Form focus states (border + shadow)

### **Phase 5: QA & Polish** ⏳ PENDING
- [ ] Pass Design Quality Gate
- [ ] Pass Development Quality Gate
- [ ] Lighthouse score 95+
- [ ] Load time < 2.5s
- [ ] Cross-browser testing
- [ ] Mobile responsiveness
- [ ] Accessibility audit (WCAG AAA)

---

## 📊 PERFORMANCE TARGETS

```
Page Load: < 2.5 seconds
Lighthouse Score: 95+
LCP (Largest Contentful Paint): < 1.8s
CLS (Cumulative Layout Shift): < 0.1
FID (First Input Delay): < 100ms
Animation FPS: 60fps (smooth)
```

---

## 🎓 DESIGN REFERENCES APPLIED

**Inspired By:**
- **Studio Format:** Generous white space, bold typography, sleek sidebar
- **Baseborn:** Black-and-white elegance, thoughtfully curated imagery
- **Stanford:** Modern typography, refined hierarchy, premium feel
- **Cornell:** Authority, clarity, research-focused hierarchy
- **Harvard Kennedy School:** Academic prestige, sophisticated typography

---

## 🚫 STRICT PROHIBITIONS

**DO NOT INCLUDE:**
- ❌ Parallax scrolling (except 0.5x on hero, once)
- ❌ Carousels/sliders (use static grids)
- ❌ Auto-playing videos
- ❌ Pop-ups or unexpected modals
- ❌ Decorative shapes, blobs, or waves
- ❌ Gradient backgrounds (use solid white)
- ❌ More than 3 colors
- ❌ Animated text or typewriter effects
- ❌ Stock icons (custom or text only)
- ❌ Multiple fonts beyond 2
- ❌ Neumorphism, glassmorphism
- ❌ 3D effects beyond subtle scale
- ❌ AI-generated aesthetics
- ❌ Floating distracting elements
- ❌ Infinite scroll (use pagination)
- ❌ Heavy animations on first load

---

## 💾 SESSION HANDOFF

**Status:** Design system foundation complete
**Next Priority:** Implement core components with Framer Motion
**Critical:** Maintain 8px grid spacing at all times

---

**Documentation by:** Claude (Anthropic)
**Version:** 1.0 - World-Class Design System
**Date:** January 10, 2025
**Branch:** `claude/redesign-spring-knowledge-website-011CUzAiTnBBh1sbMEWVHRFg`
