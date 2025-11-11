# PHASE 2: INFORMATION ARCHITECTURE & SITEMAP

**Date:** January 2025
**Project:** Spring of Knowledge Academy Website Redesign
**Status:** Complete

---

## 1. SITE STRUCTURE OVERVIEW

### Design Principles
- **User-Centric:** Structure based on user goals, not internal organization
- **Maximum 3-Click Rule:** Any content accessible within 3 clicks
- **Clear Hierarchy:** Logical parent-child relationships
- **Mobile-First:** Navigation optimized for touch and small screens
- **Accessibility:** Keyboard navigable, screen reader friendly

---

## 2. PRIMARY NAVIGATION STRUCTURE

```
┌─────────────────────────────────────────────────────────────┐
│                  SPRING OF KNOWLEDGE ACADEMY                 │
│                                                               │
│  [LOGO]  HOME  ABOUT  PROGRAMS ▼  ADMISSIONS  CAMPUS  MORE ▼│
│                                                  [APPLY NOW] │
└─────────────────────────────────────────────────────────────┘
```

### Navigation Items Detailed

#### **1. HOME** (`/`)
- Single page
- Comprehensive overview
- Multiple CTAs throughout

#### **2. ABOUT** (`/about`)
**Main Page:** /about
**Sub-sections (anchor links):**
- #mission
- #values
- #heritage
- #leadership
- #accreditation

**Alternative Structure (for expansion):**
```
/about
  ├── /about/mission
  ├── /about/leadership
  ├── /about/heritage
  └── /about/accreditation
```

#### **3. PROGRAMS** ▼ **[DROPDOWN]**
**Main Landing:** /programs

**Sub-pages:**
```
/programs
  ├── /programs/kindergarten (Ages 3-5)
  ├── /programs/primary (Grades 1-8)
  ├── /programs/high-school (Grades 9-12)
  └── /programs/compare (Comparison tool - NEW)
```

**Dropdown Menu Structure:**
```
PROGRAMS ▼
├─ Overview
├─ Kindergarten (Ages 3-5)
│   └─ [Icon: Building blocks]
├─ Primary School (Grades 1-8)
│   └─ [Icon: Books]
├─ High School (Grades 9-12)
│   └─ [Icon: Graduation cap]
└─ Compare Programs
```

#### **4. ADMISSIONS** (NEW - consolidated entry point)
**Main Landing:** /admissions

**Sub-sections:**
```
/admissions
  ├── /admissions/how-to-apply
  ├── /admissions/tuition-fees
  ├── /admissions/scholarships
  ├── /admissions/visit-campus
  └── /admissions/faqs
```

**Current Mapping:**
- Contact page → Admission inquiries
- Apply buttons → Application form

#### **5. CAMPUS** **[DROPDOWN or Landing]**
**Main Landing:** /campus

**Sub-pages:**
```
/campus
  ├── /campus/branches
  │   ├── /campus/branches/mekanisa
  │   ├── /campus/branches/jemo
  │   └── /campus/branches/torhayloch
  ├── /campus/facilities
  ├── /campus/virtual-tour (NEW - priority)
  ├── /campus/gallery
  └── /campus/student-life
```

#### **6. MORE** ▼ **[DROPDOWN]**
```
MORE ▼
├─ Events
├─ Success Stories
├─ News & Updates
├─ Contact Us
└─ Careers (NEW)
```

**Dropdown Structure:**
```
/events
/success-stories
/news
/contact
/careers (NEW)
```

---

## 3. COMPLETE SITEMAP

```
SPRING OF KNOWLEDGE ACADEMY
│
├── 🏠 HOME (/)
│   ├── #hero
│   ├── #programs-preview
│   ├── #why-choose-us
│   ├── #statistics
│   ├── #testimonials
│   ├── #news
│   ├── #campus-life
│   └── #enrollment-cta
│
├── ℹ️ ABOUT (/about)
│   ├── #mission-vision
│   ├── #core-values
│   ├── #heritage
│   ├── #leadership-team
│   └── #accreditation
│
├── 📚 PROGRAMS (/programs)
│   ├── Overview (/programs)
│   ├── Kindergarten (/programs/kindergarten)
│   │   ├── #curriculum
│   │   ├── #daily-schedule
│   │   ├── #facilities
│   │   ├── #teachers
│   │   └── #apply
│   ├── Primary School (/programs/primary)
│   │   ├── #curriculum
│   │   ├── #grades-1-4
│   │   ├── #grades-5-8
│   │   ├── #extracurriculars
│   │   └── #apply
│   ├── High School (/programs/high-school)
│   │   ├── #curriculum
│   │   ├── #grades-9-10
│   │   ├── #grades-11-12
│   │   ├── #college-prep
│   │   └── #apply
│   └── Compare Programs (/programs/compare) [NEW]
│
├── 🎓 ADMISSIONS (/admissions) [NEW SECTION]
│   ├── How to Apply (/admissions/apply)
│   │   ├── Application Form (embedded)
│   │   ├── Required Documents
│   │   └── Important Dates
│   ├── Tuition & Fees (/admissions/tuition)
│   │   ├── Fee Structure
│   │   ├── Payment Plans
│   │   └── Payment Methods
│   ├── Scholarships (/admissions/scholarships)
│   │   ├── Merit Scholarships
│   │   ├── Need-Based Aid
│   │   └── Application Process
│   ├── Visit Campus (/admissions/visit)
│   │   ├── Schedule a Tour
│   │   ├── Virtual Tour [PRIORITY]
│   │   ├── Open House Events
│   │   └── Meet Our Team
│   └── FAQs (/admissions/faqs)
│       ├── By Category
│       └── Search FAQs
│
├── 🏫 CAMPUS (/campus)
│   ├── Branches (/campus/branches)
│   │   ├── Mekanisa (/campus/branches/mekanisa)
│   │   ├── Jemo (/campus/branches/jemo)
│   │   └── Torhayloch (/campus/branches/torhayloch)
│   ├── Facilities (/campus/facilities)
│   │   ├── #classrooms
│   │   ├── #libraries
│   │   ├── #labs
│   │   ├── #sports
│   │   └── #arts
│   ├── Virtual Tour (/campus/virtual-tour) [NEW - PRIORITY]
│   ├── Gallery (/campus/gallery)
│   │   ├── #academic
│   │   ├── #campus
│   │   ├── #events
│   │   └── #student-life
│   └── Student Life (/campus/student-life) [NEW]
│       ├── #clubs-organizations
│       ├── #sports-athletics
│       ├── #arts-culture
│       └── #community-service
│
├── 📰 EVENTS (/events)
│   ├── #upcoming
│   ├── #past
│   └── Event Detail (/events/[id])
│
├── 🌟 SUCCESS STORIES (/success-stories)
│   ├── #all-stories
│   ├── Filter by Program
│   └── Story Detail (/success-stories/[id])
│
├── 📢 NEWS (/news)
│   ├── #all-news
│   ├── Filter by Category
│   └── Article Detail (/news/[id])
│
├── 📞 CONTACT (/contact)
│   ├── #contact-form
│   ├── #locations (3 branches)
│   ├── #maps
│   └── #office-hours
│
└── 💼 CAREERS (/careers) [NEW]
    ├── #open-positions
    ├── #why-work-here
    └── #application-form
```

---

## 4. FOOTER NAVIGATION

```
┌─────────────────────────────────────────────────────────────┐
│               NEWSLETTER SIGNUP SECTION                      │
└─────────────────────────────────────────────────────────────┘
│                                                               │
│  ABOUT US        PROGRAMS         ADMISSIONS      RESOURCES  │
│  ├ Mission      ├ Kindergarten    ├ Apply Now    ├ Events   │
│  ├ Leadership   ├ Primary         ├ Tuition      ├ News     │
│  ├ Heritage     ├ High School     ├ Visit        ├ Gallery  │
│  └ Careers      └ Compare         └ FAQs         └ Contact  │
│                                                               │
│  QUICK LINKS     LEGAL            CONNECT         CONTACT    │
│  ├ Success       ├ Privacy        ├ Facebook     📍 Address  │
│  ├ Gallery       ├ Terms          ├ Instagram    📞 Phone    │
│  ├ Virtual Tour  ├ Cookies        ├ LinkedIn     📧 Email    │
│  └ Portal Login  └ Accessibility  └ YouTube      🕐 Hours    │
│                                                               │
│         © 2025 Spring of Knowledge Academy. All rights.      │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. USER JOURNEY MAPS

### JOURNEY 1: Parent Researching Schools

**Persona:** Sarah, 35, professional parent researching schools for 6-year-old
**Goal:** Find a quality primary school with strong academics and values
**Device:** Mobile phone (lunch break browsing)

```
JOURNEY MAP:
┌─────────────────────────────────────────────────────────────┐
│ STEP 1: DISCOVERY                                            │
├─────────────────────────────────────────────────────────────┤
│ Entry: Google Search "best primary schools Addis Ababa"     │
│ Landing: Homepage (/)                                        │
│                                                               │
│ Actions:                                                      │
│ ├─ Reads hero headline (Excellence in Education Since 2006) │
│ ├─ Sees trust badges (2000+ students, 98% success)          │
│ └─ Scrolls to see more                                       │
│                                                               │
│ Emotions: 😐 Neutral, cautiously interested                  │
│ Thoughts: "Is this a good fit? Are they legitimate?"        │
└─────────────────────────────────────────────────────────────┘
        ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 2: INVESTIGATION                                        │
├─────────────────────────────────────────────────────────────┤
│ Actions:                                                      │
│ ├─ Clicks "Primary School" in Programs section              │
│ ├─ Reads curriculum details                                  │
│ ├─ Views teacher credentials                                 │
│ └─ Checks success rate statistics                            │
│                                                               │
│ Emotions: 🙂 Warming up, cautiously optimistic               │
│ Thoughts: "Curriculum looks strong, teachers seem qualified" │
│ Pain Points: "But how much does it cost?"                    │
└─────────────────────────────────────────────────────────────┘
        ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 3: VALIDATION                                           │
├─────────────────────────────────────────────────────────────┤
│ Actions:                                                      │
│ ├─ Navigates to Success Stories                             │
│ ├─ Watches video testimonial from current parent            │
│ ├─ Reads 3 student success stories                           │
│ └─ Views gallery photos of campus                            │
│                                                               │
│ Emotions: 😊 Convinced, building trust                       │
│ Thoughts: "Real parents seem happy, kids look engaged"      │
└─────────────────────────────────────────────────────────────┘
        ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 4: COMPARISON                                           │
├─────────────────────────────────────────────────────────────┤
│ Actions:                                                      │
│ ├─ Clicks Admissions > Tuition & Fees                       │
│ ├─ Reviews fee structure                                     │
│ ├─ Checks scholarship availability                           │
│ └─ Compares with other schools (leaves site)                 │
│                                                               │
│ Emotions: 🤔 Evaluating, considering                         │
│ Thoughts: "Reasonable pricing, scholarships available"      │
│ Pain Points: "Need to see campus in person"                  │
└─────────────────────────────────────────────────────────────┘
        ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 5: DECISION & ACTION                                    │
├─────────────────────────────────────────────────────────────┤
│ Return Visit: Returns 2 days later (desktop at home)        │
│                                                               │
│ Actions:                                                      │
│ ├─ Takes Virtual Tour (immersive 360° experience)           │
│ ├─ Reads FAQs thoroughly                                     │
│ ├─ Shares with spouse                                        │
│ ├─ Clicks "Schedule a Campus Visit"                         │
│ └─ Fills contact form                                        │
│                                                               │
│ Emotions: 😃 Confident, ready to proceed                     │
│ Thoughts: "This is the school for my child"                 │
│ Conversion: ✅ CONTACT FORM SUBMITTED                        │
└─────────────────────────────────────────────────────────────┘

**Total Touchpoints:** 7 (across 2 visits)
**Time to Conversion:** 2 days
**Critical Features:** Virtual tour, testimonials, clear tuition info
```

---

### JOURNEY 2: High School Student Exploring Options

**Persona:** Dawit, 14, Grade 9 student, wants better school
**Goal:** Find a school with strong college prep and extracurriculars
**Device:** Smartphone

```
JOURNEY MAP:
┌─────────────────────────────────────────────────────────────┐
│ STEP 1: SOCIAL DISCOVERY                                     │
├─────────────────────────────────────────────────────────────┤
│ Entry: Instagram ad or friend's story                        │
│ Landing: Homepage (/)                                        │
│                                                               │
│ Actions:                                                      │
│ ├─ Watches hero video (if present)                          │
│ ├─ Swipes through student life photos                       │
│ └─ Checks if school "looks cool"                             │
│                                                               │
│ Emotions: 😏 Skeptical, judging aesthetics                   │
│ Thoughts: "Do they have football? Robotics club?"           │
│ Attention Span: 30-45 seconds before bounce                 │
└─────────────────────────────────────────────────────────────┘
        ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 2: EXPLORATION                                          │
├─────────────────────────────────────────────────────────────┤
│ Actions:                                                      │
│ ├─ Clicks High School program                                │
│ ├─ Scrolls quickly through curriculum (boring)              │
│ ├─ Clicks Gallery                                            │
│ └─ Looks for sports/clubs photos                             │
│                                                               │
│ Emotions: 🤨 Mildly interested if visuals are good           │
│ Thoughts: "Campus looks nice, but what about activities?"   │
└─────────────────────────────────────────────────────────────┘
        ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 3: PEER VALIDATION                                      │
├─────────────────────────────────────────────────────────────┤
│ Actions:                                                      │
│ ├─ Navigates to Success Stories                             │
│ ├─ Reads student testimonials (skims)                        │
│ ├─ Watches 1-minute "Day in the Life" video                 │
│ └─ Checks Events for upcoming open house                     │
│                                                               │
│ Emotions: 🙂 Interested if peers seem happy/successful       │
│ Thoughts: "Students seem happy, won awards, got into uni"   │
└─────────────────────────────────────────────────────────────┘
        ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 4: DECISION INFLUENCE                                   │
├─────────────────────────────────────────────────────────────┤
│ Actions:                                                      │
│ ├─ Takes screenshot of homepage                              │
│ ├─ Shows parents                                             │
│ ├─ Says "I want to check out this school"                   │
│ └─ Parents take over research                                │
│                                                               │
│ Emotions: 😊 Excited about possibility                       │
│ Conversion: ✅ INFLUENCED PARENT DECISION                    │
└─────────────────────────────────────────────────────────────┘

**Total Touchpoints:** 4 (single visit)
**Time to Influence:** 5-10 minutes
**Critical Features:** Visual content, student testimonials, activity showcase
```

---

### JOURNEY 3: Staff/Teacher Candidate

**Persona:** Alem, 28, experienced teacher looking for new opportunity
**Goal:** Find a school with professional development and good culture
**Device:** Desktop computer

```
JOURNEY MAP:
┌─────────────────────────────────────────────────────────────┐
│ STEP 1: DISCOVERY                                            │
├─────────────────────────────────────────────────────────────┤
│ Entry: LinkedIn job post or referral                         │
│ Landing: Careers page (/careers) [NEW]                      │
│                                                               │
│ Actions:                                                      │
│ ├─ Reviews open teaching positions                          │
│ ├─ Checks salary range (if displayed)                       │
│ └─ Clicks "Learn About Us" → About page                     │
│                                                               │
│ Emotions: 🤔 Evaluating opportunity                          │
│ Thoughts: "Is this a reputable institution?"                │
└─────────────────────────────────────────────────────────────┘
        ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 2: CULTURE ASSESSMENT                                   │
├─────────────────────────────────────────────────────────────┤
│ Actions:                                                      │
│ ├─ Reads Mission & Core Values                              │
│ ├─ Views Leadership Team bios                                │
│ ├─ Checks "Professional Development" section                 │
│ └─ Looks for teacher testimonials                            │
│                                                               │
│ Emotions: 🙂 Aligning values, feeling positive               │
│ Thoughts: "Values resonate, leadership seems strong"        │
└─────────────────────────────────────────────────────────────┘
        ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 3: FACILITIES REVIEW                                    │
├─────────────────────────────────────────────────────────────┤
│ Actions:                                                      │
│ ├─ Views Campus > Facilities                                 │
│ ├─ Takes Virtual Tour                                        │
│ ├─ Checks classroom equipment/tech                           │
│ └─ Views Gallery photos                                      │
│                                                               │
│ Emotions: 😊 Impressed by facilities                         │
│ Thoughts: "Modern facilities, good teaching environment"    │
└─────────────────────────────────────────────────────────────┘
        ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 4: APPLICATION                                          │
├─────────────────────────────────────────────────────────────┤
│ Actions:                                                      │
│ ├─ Returns to Careers page                                   │
│ ├─ Downloads job description                                 │
│ ├─ Fills application form                                    │
│ └─ Uploads CV and cover letter                              │
│                                                               │
│ Emotions: 😃 Excited to apply                                │
│ Conversion: ✅ APPLICATION SUBMITTED                         │
└─────────────────────────────────────────────────────────────┘

**Total Touchpoints:** 5 (single visit)
**Time to Conversion:** 20-30 minutes
**Critical Features:** Careers section, culture showcase, facilities tour
```

---

## 6. RESPONSIVE NAVIGATION PATTERNS

### Desktop Navigation (>1024px)
```
┌────────────────────────────────────────────────────────────┐
│ [TOP BAR]                                                   │
│ 📞 +251-11-618-0066  |  ✉️ info@springofknowledge.org     │
│                            📅 Admissions Open 2025 →       │
└────────────────────────────────────────────────────────────┘
│                                                              │
│ [LOGO]    HOME   ABOUT   PROGRAMS ▼   ADMISSIONS   CAMPUS ▼│
│                                          MORE ▼  [APPLY NOW]│
│                                                              │
└────────────────────────────────────────────────────────────┘

Hover States:
- Underline animation on hover
- Dropdown appears on hover (0.2s delay)
- Active page indicated with underline + color
```

### Tablet Navigation (768px - 1023px)
```
┌────────────────────────────────────────────────────────────┐
│ [LOGO]                                    [☰ MENU]         │
└────────────────────────────────────────────────────────────┘

Side Panel (slides from right):
┌────────────────────┐
│ [×] CLOSE          │
├────────────────────┤
│ 🏠 Home            │
│ ℹ️ About           │
│ 📚 Programs        │  → [Expands sub-menu]
│ 🎓 Admissions      │  → [Expands sub-menu]
│ 🏫 Campus          │  → [Expands sub-menu]
│ 📰 Events          │
│ 🌟 Success Stories │
│ 📞 Contact         │
├────────────────────┤
│ [APPLY NOW]        │
└────────────────────┘
```

### Mobile Navigation (<768px)
```
┌──────────────────────────────────┐
│ [☰]  [LOGO]         [🔍] [👤]   │
└──────────────────────────────────┘

Full-Screen Overlay Menu:
┌──────────────────────────────────┐
│              [× CLOSE]            │
├──────────────────────────────────┤
│                                   │
│  🏠 Home                          │
│  ℹ️ About                         │
│  📚 Programs              [+]     │  ← Tap to expand
│  🎓 Admissions            [+]     │
│  🏫 Campus                [+]     │
│  ───────────────────────         │
│  📰 Events                        │
│  🌟 Success Stories               │
│  📞 Contact Us                    │
│                                   │
│  ───────────────────────         │
│  [APPLY NOW]                      │
│  [SCHEDULE TOUR]                  │
│                                   │
└──────────────────────────────────┘
```

---

## 7. BREADCRUMB NAVIGATION

For deep pages, implement breadcrumb trails:

```
Example 1:
Home > Programs > Primary School > Curriculum

Example 2:
Home > Campus > Branches > Jemo Campus

Example 3:
Home > Admissions > Tuition & Fees

Styling:
- Light gray text with blue hover
- Current page in bold
- Separator: > or /
- Mobile: Last 2 levels only
```

---

## 8. SEARCH FUNCTIONALITY

### Global Search (Header)
```
[🔍 Search...]

Search Scope:
├─ Pages (titles, meta descriptions)
├─ News articles
├─ Events
├─ Success stories
├─ Programs
└─ FAQs

Results Display:
- Instant suggestions (autocomplete)
- Full results page with filters
- Relevance sorting
- Recent searches (logged-in users)
```

---

## 9. ACCESSIBILITY NAVIGATION

### Keyboard Navigation
- **Tab Order:** Logical, left-to-right, top-to-bottom
- **Skip Links:** "Skip to main content", "Skip to navigation"
- **Focus Indicators:** Visible 2px outline, high contrast
- **Escape Key:** Closes modals, dropdowns

### Screen Reader Support
- **Landmark Regions:** `<header>`, `<nav>`, `<main>`, `<footer>`
- **ARIA Labels:** All icons, buttons, links
- **Heading Hierarchy:** Proper H1-H6 structure
- **Alt Text:** Descriptive for all images

---

## 10. MOBILE APP-LIKE NAVIGATION (Future Enhancement)

### Bottom Tab Bar (Mobile Only - Optional)
```
┌──────────────────────────────────┐
│                                   │
│      [MAIN CONTENT AREA]         │
│                                   │
└──────────────────────────────────┘
│  🏠     📚      🔍      📞      ☰ │
│ Home Programs Search Contact More│
└──────────────────────────────────┘

Benefits:
- Thumb-friendly
- Instant access to key pages
- Native app feel
- Improved mobile engagement
```

---

## 11. CONTEXTUAL NAVIGATION

### Related Content Links
Each page ends with:
```
┌──────────────────────────────────┐
│   YOU MIGHT ALSO BE INTERESTED   │
├──────────────────────────────────┤
│ [CARD 1] [CARD 2] [CARD 3]      │
└──────────────────────────────────┘

Example (Programs > Primary):
- "Compare with High School"
- "View Primary School Gallery"
- "Read Success Stories from Primary"
```

### Smart CTAs (Context-Aware)
```
On Programs pages:
├─ Primary CTA: "Apply to [This Program]"
├─ Secondary: "Schedule a Visit"
└─ Tertiary: "Download Brochure"

On About page:
├─ Primary: "View Our Programs"
├─ Secondary: "Meet Our Team"
└─ Tertiary: "Take Virtual Tour"

On Success Stories:
├─ Primary: "Read Your Story Here"
├─ Secondary: "Explore Programs"
└─ Tertiary: "Contact Admissions"
```

---

## 12. URL STRUCTURE

### Principles
- **Semantic:** Describe content clearly
- **Short:** Max 3-4 levels deep
- **Lowercase:** All URLs lowercase
- **Hyphens:** Word separators, not underscores
- **No Special Chars:** Only letters, numbers, hyphens

### Examples
```
✅ GOOD:
/programs/kindergarten
/admissions/tuition
/campus/branches/jemo
/success-stories
/news/2025/spring-enrollment-open

❌ BAD:
/prog_Kinder.html
/page.php?id=123
/very/deep/nested/structure/page
```

---

## 13. MULTI-LANGUAGE SUPPORT (Future)

### Language Switcher
```
Position: Top-right header
Format: [🌐 EN ▼]
Options:
├─ English (EN)
├─ Amharic (አማ)
└─ Oromifa (Afaan Oromoo)

URL Structure:
/en/programs/kindergarten
/am/programs/kindergarten
/om/programs/kindergarten

Default: Browser language detection
Persistence: Cookie (30 days)
```

---

## 14. PHASE 2 SELF-CRITIQUE

### ✅ Strengths
- Clear, user-centric structure
- Maximum 3-click rule enforced
- Comprehensive user journey maps
- Mobile-first navigation patterns
- Accessibility considerations throughout

### ⚠️ Areas for Improvement
- Need to validate sitemap with real users (future)
- Search functionality needs technical spec
- Multi-language support is placeholder

### 🎯 Alignment with PRD
- ✅ Supports all user personas
- ✅ Enables all P0 features
- ✅ Mobile-first approach
- ✅ Accessibility-first
- ✅ Clear conversion paths

---

## 15. NEXT STEPS → PHASE 3

### Ready to Proceed:
✅ Sitemap finalized
✅ User journeys mapped
✅ Navigation patterns designed
✅ URL structure defined
✅ Accessibility framework established

### Phase 3 Objectives:
- Content audit and inventory
- Asset optimization plan
- Copywriting strategy
- Photography/video requirements

---

**Document Status:** ✅ Complete
**Approval:** Ready for Phase 3
**Last Updated:** January 2025
