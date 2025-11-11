# Spring of Knowledge Academy - Design System Documentation

## 🎨 Overview

This document outlines the comprehensive design system for the Spring of Knowledge Academy website redesign. The design follows world-class educational institution standards while maintaining the brand's core identity.

---

## 📐 Design Principles

1. **Excellence First** - Every element reflects premium quality and academic distinction
2. **User-Centric** - Designed for students, parents, and educators
3. **Accessible** - WCAG 2.1 AA compliant throughout
4. **Performance** - Optimized for fast loading and smooth interactions
5. **Responsive** - Mobile-first design that works beautifully on all devices

---

## 🎨 Color Palette

### Brand Colors (Maintained from Original)
```css
Primary Blue: #1C74BB
- Used for: Primary CTAs, links, accents
- Shades:
  - Dark: #155A96
  - Light: #3D8FD1
  - Lighter: #E8F2F9
```

### Secondary Colors (New - Complementary)
```css
Academic Navy: #0A2540
- Used for: Headers, footers, dark sections
- Purpose: Conveys prestige and trust

Academic Gold: #D4AF37
- Used for: Highlights, achievements, premium elements
- Purpose: Excellence and distinction

Accent Orange: #F7931E
- Used for: Secondary CTAs, highlights
- Shades:
  - Dark: #D97B0F
  - Light: #FFB55F
```

### Functional Colors
```css
Success: #10B981 (Emerald-500)
Warning: #F59E0B (Amber-500)
Error: #EF4444 (Red-500)
Info: #3B82F6 (Blue-500)
```

---

## 🔤 Typography

### Font Family
- **Primary**: Montserrat (via Google Fonts)
- **Fallback**: system-ui, -apple-system, sans-serif

### Type Scale
```css
Display 1: 4.5rem / 72px  (Hero headlines)
Display 2: 3.75rem / 60px (Major section titles)
Display 3: 3rem / 48px    (Large headings)
H1: 2.5rem / 40px         (Page titles)
H2: 2rem / 32px           (Section headings)
H3: 1.5rem / 24px         (Subsection titles)
Body Large: 1.25rem / 20px
Body: 1rem / 16px
Body Small: 0.875rem / 14px
```

### Font Weights
- **Bold (700)**: Headlines, CTAs, emphasis
- **Semibold (600)**: Subheadings, labels
- **Medium (500)**: Body text emphasis
- **Regular (400)**: Body text
- **Light (300)**: Subtle text, captions

### Letter Spacing
- **Headlines**: -0.02em to -0.01em (tighter)
- **Body**: Default (0)
- **All Caps**: 0.05em (looser)

---

## 📦 Spacing System

Based on 4px baseline grid:

```css
xs:  0.25rem / 4px
sm:  0.5rem / 8px
md:  1rem / 16px
lg:  1.5rem / 24px
xl:  2rem / 32px
2xl: 3rem / 48px
3xl: 4rem / 64px
4xl: 6rem / 96px
5xl: 8rem / 128px

Section Padding: py-20 md:py-28 lg:py-32
Container Max Width: 1280px (7xl)
Container Padding: px-6 md:px-8 lg:px-12
```

---

## 🎭 Components

### Buttons

#### Primary Button
```jsx
className="bg-brand-primary hover:bg-brand-primary-dark text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:shadow-glow transition-all duration-300"
```

#### Secondary Button
```jsx
className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white hover:text-brand-primary text-white px-8 py-4 rounded-xl transition-all duration-300"
```

#### Ghost Button
```jsx
className="text-white hover:text-academic-gold px-8 py-4 rounded-xl transition-all duration-300"
```

### Cards

#### Standard Card
- Border Radius: 1.5rem (24px)
- Padding: 2rem (32px)
- Shadow: shadow-premium
- Hover: shadow-premium-lg + scale-105
- Border: 2px transparent → brand-primary on hover

#### Stats Card
- Gradient icon backgrounds
- Animated number counters
- Hover: rotate icon, reveal description
- Background: Pastel color matching icon gradient

### Forms

#### Input Fields
```jsx
className="px-6 py-4 text-gray-900 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-academic-gold shadow-lg"
```

#### Form Labels
```jsx
className="text-sm font-semibold text-gray-700 mb-2"
```

---

## 🎬 Animations & Transitions

### Standard Transitions
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Hover Effects
- **Buttons**: Scale 1.05, shadow increase
- **Cards**: Scale 1.05, shadow elevation
- **Images**: Scale 1.1 (within container)
- **Icons**: Rotate 12deg, scale 1.1

### Scroll Animations (Framer Motion)
```jsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

### Page Load Sequence
1. Hero: Badge → Title → Subtitle → CTAs → Stats (staggered)
2. Sections: Trigger on scroll (Intersection Observer at 20% threshold)
3. Cards: Stagger delay of 0.1-0.2s per item

---

## 🖼️ Shadows

```css
shadow-sm:       0 1px 2px rgba(0, 0, 0, 0.05)
shadow-md:       0 4px 6px rgba(0, 0, 0, 0.1)
shadow-lg:       0 10px 15px rgba(0, 0, 0, 0.1)
shadow-premium:  0 20px 60px rgba(0, 0, 0, 0.15)  ← Custom
shadow-premium-lg: 0 30px 80px rgba(0, 0, 0, 0.2) ← Custom
shadow-glow:     0 0 20px rgba(28, 116, 187, 0.3) ← Brand
shadow-glow-lg:  0 0 40px rgba(28, 116, 187, 0.4) ← Brand
```

---

## 🌐 Responsive Breakpoints

```css
sm:  640px  (Mobile landscape)
md:  768px  (Tablet portrait)
lg:  1024px (Tablet landscape / Small desktop)
xl:  1280px (Desktop)
2xl: 1536px (Large desktop)
```

### Mobile-First Approach
- Base styles: Mobile (< 640px)
- Progressive enhancement for larger screens
- Touch-friendly targets (min 44x44px)
- Hamburger menu < 1024px

---

## 📱 Key Page Sections

### 1. Hero
- **Purpose**: First impression, value proposition
- **Elements**:
  - Full-screen parallax background
  - Gradient overlay with pattern
  - Premium badge
  - Animated headline with gradient text
  - Typing animation for tagline
  - 3 CTA buttons
  - Trust indicators (4 stats)
  - Scroll indicator
- **Colors**: Navy gradient + Gold accents

### 2. Header
- **Sticky**: Yes (shrinks on scroll)
- **Top Bar**: Contact info (desktop only)
- **Navigation**: Horizontal with dropdown
- **Logo**: Scales down on scroll (150px → 120px)
- **Mobile**: Slide-out sheet menu

### 3. Driven by Excellence
- **Layout**: Split (Image left, Content right)
- **Animation**: Word rotation
- **Features**: 4 cards in 2x2 grid
- **CTA**: "Discover Our Story"

### 4. What Makes Us Different
- **Cards**: 4 principle cards with gradients
- **Icons**: Heart, Users, Lightbulb, Handshake
- **Stats**: Bottom row (4 metrics)
- **Image**: Floating badge overlay

### 5. Programs
- **Cards**: 3 program cards (KG, Primary, HS)
- **Modals**: Enhanced program details
- **Icons**: Rocket, BookOpen, GraduationCap
- **Gradients**: Pink, Blue, Purple

### 6. Testimonials
- **Background**: Dark navy gradient
- **Layout**: Infinite carousel
- **Cards**: White with 5-star ratings
- **Stats**: Bottom row (4 metrics)

### 7. Campus
- **Gallery**: 3 feature cards
- **Stats**: Blue CTA section
- **CTAs**: "Schedule Tour", "View Gallery"

### 8. Stats
- **Cards**: 8 stat cards with icons
- **Animation**: Number counters
- **CTA**: Bottom section with dual buttons

### 9. Footer
- **Newsletter**: Large signup section
- **Columns**: Brand, Quick Links, Programs, Resources
- **Stats**: 4 mini stat cards
- **Social**: Icon links
- **Bottom**: Copyright + legal links

---

## ♿ Accessibility

### Standards
- WCAG 2.1 Level AA compliant
- Semantic HTML5 throughout
- ARIA labels on interactive elements
- Keyboard navigation support

### Color Contrast
- Text on light backgrounds: 4.5:1 minimum
- Text on dark backgrounds: 4.5:1 minimum
- Large text: 3:1 minimum

### Focus States
```css
focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2
```

### Screen Readers
- Alt text on all images
- Aria-labels on icon buttons
- Skip to main content link
- Landmark regions (header, main, footer, nav)

---

## 🚀 Performance

### Optimization Strategies
1. **Images**: Next.js Image optimization
2. **Fonts**: Google Fonts with display=swap
3. **Code Splitting**: Component-level
4. **Lazy Loading**: Below-the-fold content
5. **Animations**: CSS/GPU-accelerated when possible

### Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

---

## 🔍 SEO

### Meta Tags
- Comprehensive title templates
- Unique descriptions per page
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### Structured Data
- Organization schema
- Breadcrumb schema
- Educational course schema (programs)

### Best Practices
- Semantic HTML5
- Descriptive headings hierarchy
- Clean URL structure
- XML sitemap
- Robots.txt

---

## 🛠️ Technical Stack

- **Framework**: Next.js 15.1.3
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11.11.9
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Montserrat)
- **Language**: TypeScript/JavaScript

---

## 📝 Content Guidelines

### Voice & Tone
- **Professional** yet **approachable**
- **Confident** without being arrogant
- **Inspiring** and **motivational**
- **Clear** and **concise**

### Writing Style
- Active voice preferred
- Short paragraphs (2-3 sentences)
- Scannable headings
- Bullet points for lists
- Action-oriented CTAs

### Image Guidelines
- High resolution (2x for retina)
- Authentic photography (no stock)
- Students and campus life
- Proper attribution
- Alt text required

---

## 🎯 Brand Guidelines

### Logo Usage
- Minimum size: 120px width
- Clear space: Equal to logo height
- Dark background: Use white version
- Light background: Use color version

### Tone & Messaging
- **Tagline**: "Where Excellence Is A Habit, Not A Goal"
- **Value Props**:
  - Academic Excellence
  - Student-Centered Learning
  - Experienced Educators
  - Proven Results

### Photography Style
- Natural lighting
- Candid moments
- Diverse representation
- Campus environments
- Academic activities

---

## 📚 Component Library

All components are documented in:
- `/app/components/` - Main components
- `/components/ui/` - Reusable UI primitives

### Naming Conventions
- **Components**: PascalCase (e.g., `Hero.js`)
- **Utilities**: camelCase (e.g., `utils.js`)
- **CSS Classes**: kebab-case with BEM where applicable

---

## 🔄 Future Enhancements

### Phase 2 (Planned)
- [ ] Dark mode toggle
- [ ] Multi-language support (Amharic)
- [ ] Student portal integration
- [ ] Parent dashboard
- [ ] Online payment system
- [ ] Virtual tour (360°)
- [ ] Live chat support
- [ ] Blog/News CMS

### Phase 3 (Proposed)
- [ ] Mobile app
- [ ] Alumni network
- [ ] Event booking system
- [ ] Resource library
- [ ] Performance analytics
- [ ] A/B testing framework

---

## 📞 Support & Maintenance

For design system questions or updates:
- **Documentation**: This file
- **Component Stories**: Review component files
- **Design Tokens**: See `tailwind.config.js`
- **Global Styles**: See `styles/globals.css`

---

## 📄 License

© 2025 Spring of Knowledge Academy. All rights reserved.

---

**Version**: 1.0.0
**Last Updated**: January 2025
**Maintained by**: Spring of Knowledge Academy Web Team
