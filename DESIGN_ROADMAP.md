# Consilium Website - Design Roadmap

## Overview
This is a comprehensive design roadmap for recreating the Consilium architecture and interior design website. The site is built with React, uses CSS Modules, and features RTL (Right-to-Left) layout for Hebrew content.

## Styling Libraries & Technologies Identified

### Core Technologies
- **React** - Component-based framework
- **CSS Modules** - Scoped styling (evident from class names like `ThirdScreen_section__Nf9H9`)
- **Vite** - Build tool (to be implemented)

### Typography
- **Google Fonts:**
  - Poppins (600 weight) - For headings
  - Heebo (300, 400, 500, 600, 700) - Primary Hebrew font
  - Assistant (300, 400, 500, 600, 700) - Secondary Hebrew font
- **Custom Font:**
  - Amsterdam Four (400 weight) - Custom decorative font

### Additional Libraries (Recommended)
- **Framer Motion** - For smooth animations and transitions
- **React Intersection Observer** - For scroll-triggered animations
- **React Hook Form** - For form handling
- **React Router** - For navigation (if needed)

### Accessibility
- **Enable.co.il** - Accessibility toolbar (Israeli accessibility compliance)

---

## Site Structure & Features

### 1. Hero Section (First Screen)
**Location:** Top of page
**Features:**
- Large hero title: "Consillium"
- Subtitle: "החלום שלכם הוא המומחיות שלנו"
- Description text
- Two CTA buttons:
  - "צרו קשר" (Contact Us) - Primary button
  - "פרוייקטים" (Projects) - Secondary button
- Dropdown selector for contact reason:
  - "בחרו סיבת פנייה" (Select reason for contact)
  - Options: "שיפוץ" (Renovation), "קניתי דירה מקבלן" (Bought apartment from contractor), "אחר" (Other)

**Animations:**
- Fade-in on page load
- Staggered text animation
- Button hover effects

**Styling:**
- Full-width hero section
- Centered content
- Large typography
- RTL text alignment

---

### 2. Introduction Section
**Features:**
- Welcome text: "אם הגעתם לכאן"
- Multiple paragraphs explaining the service
- Three problem cards with icons:
  1. Contractor pressure icon + text
  2. Too many examples/confusion icon + text
  3. Jumping between stores icon + text
- Transition text: "ובנקודה הזו"
- Closing statement

**Animations:**
- Scroll-triggered fade-in
- Card hover effects
- Icon animations

---

### 3. About Section (Second Screen)
**Features:**
- Profile image of "רועי שמואל" (Roi Shmuel)
- Statistics display (animated counters):
  - Years of experience (18+)
  - Projects completed (300+)
  - Satisfied clients (62+)
- Personal quote
- Detailed biography paragraphs
- Testimonial gallery (17+ testimonial images)
- CTA button: "רועי, בוא נדבר!" (Roi, let's talk!)

**Animations:**
- Number counter animation on scroll
- Image fade-in
- Testimonial gallery scroll/carousel
- Text reveal animations

**Styling:**
- Two-column layout (image left, content right in RTL)
- Large profile image
- Statistics in cards/boxes
- Testimonial grid layout

---

### 4. Why Choose Us Section (Third Screen)
**Features:**
- Section title: "אז רועי, למה בכלל לקחת אדריכל ומעצב פנים?"
- Five benefit cards, each with:
  - Icon/image
  - Title
  - Two paragraphs of description
  1. "חסכון בטעויות יקרות" (Saving on expensive mistakes)
  2. "לא תרגישו לבד לרגע" (You won't feel alone for a moment)
  3. "אפס הפתעות - אתם רואים הכול מראש" (Zero surprises - you see everything in advance)
  4. "שולטים בתקציב" (Control the budget)
  5. "יש לכם גב" (You have support)
- Closing statement
- CTA button

**Animations:**
- Staggered card animations on scroll
- Icon hover effects
- Text reveal

---

### 5. Projects Gallery Section
**Features:**
- Section title: "מקבץ קטן מהפרוייקטים שלי"
- Subtitle: "לחצו על כל תמונה כדי להגיע לפרוייקט"
- Grid of 6 project cards:
  1. Earth Fusion (אדריכלות)
  2. 16th floor sea view (עיצוב פנים)
  3. The penthouse (עיצוב פנים)
  4. Soft Geometry (אדריכלות)
  5. Earthy Embrace (עיצוב פנים)
  6. Earth Haven (אדריכלות)
- Each card shows:
  - Project image
  - Project title
  - Category badge (אדריכלות/עיצוב פנים)

**Project Detail Sections:**
- When clicked, shows full project details:
  - Large hero image
  - Category badge
  - Project title
  - Description paragraph
  - Project details (שטח/מיקום/שנה):
    - Area (שטח) in מ״ר
    - Location (מיקום)
    - Year (שנה)
  - CTA: "צפה בגלריה המלאה" (View full gallery)

**Animations:**
- Grid masonry/scroll reveal
- Card hover effects (scale, overlay)
- Smooth transitions between grid and detail view
- Image lazy loading

**Styling:**
- Responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- Image overlay on hover
- Category badges

---

### 6. Work Process Section
**Features:**
- Intro text: "אם הגעתם עד לכאן"
- Process image/illustration
- Section title: "תהליך העבודה שלנו"
- 7-step process:
  1. "מגלים מי אתם - ומה באמת חשוב לכם"
  2. "מתכננים הכול על הנייר - כדי שלא תהיו מופתעים אחר כך"
  3. "רואים את החלום - עוד לפני שהוא קורה"
  4. "בוחרים חומרים - בראש שקט וביד בטוחה"
  5. "העבודה יוצאת לדרך - ואתם לא לבד"
  6. "מוסיפים את הטאץ' - שהופך בית לבית"
  7. "גם אחרי שהמפתח בידיים - אני כאן"
- Each step shows:
  - Step number
  - Title
  - Description paragraph
- CTA button at the end

**Animations:**
- Numbered steps animate in sequence on scroll
- Step-by-step reveal
- Progress indicator (optional)

**Styling:**
- Vertical timeline layout
- Step numbers in circles/badges
- Alternating left/right layout (or vertical stack)

---

### 7. FAQ Section
**Features:**
- Intro: "ורגע לפני שנדבר.."
- Subtitle: "ריכזתי עבורכם את כל השאלות..."
- Accordion-style FAQ with 6 questions:
  1. "איך אני יכול לדעת שתהיה התאמה בינינו מבחינת הטעם?"
  2. "כבר עבדנו עם אדריכל ומעצב בעבר והחוויה לא הייתה טובה..."
  3. "מה באמת החיסכון פה? זה נשמע כמו עוד הוצאה..."
  4. "האם אתה עובד רק עם הספקים שלך?"
  5. "מה קורה אם הקבלן לוחץ עליי לסגור תכניות ואין לי זמן?"
  6. Additional questions (if any)
- Each FAQ item:
  - Question button (clickable)
  - Expandable answer paragraph
  - Icon/arrow indicator

**Animations:**
- Smooth accordion expand/collapse
- Icon rotation on expand
- Fade-in for answers

**Styling:**
- Clean accordion design
- Hover effects on questions
- Clear visual hierarchy

---

### 8. Footer
**Features:**
- Additional CTA: "רועי, יש לי עוד שאלה"
- Terms and Privacy link: "תקנון ומדיניות פרטיות"
- Credit: "נבנה על ידי דניאל רוזנבלט" with link

**Styling:**
- Minimal footer
- Centered content
- Small text

---

## Global Features

### Loader/Preloader
**Features:**
- Initial page load animation
- Logo animation
- Progress indicator (optional)
- Smooth fade-out transition

**Implementation:**
- Show on initial load
- Hide when page is ready
- Smooth transition to main content

---

### Navigation/Header
**Features:**
- Sticky header (if implemented)
- Logo
- Navigation menu (if needed)
- CTA buttons

---

### Animations & Interactions

#### Scroll Animations
- Fade-in on scroll (Intersection Observer)
- Staggered animations for lists/grids
- Parallax effects (subtle)
- Number counting animations

#### Hover Effects
- Button hover states
- Card hover effects (scale, shadow, overlay)
- Image hover effects
- Link hover effects

#### Transitions
- Smooth page transitions
- Modal/overlay transitions
- Accordion expand/collapse
- Image gallery transitions

---

### Responsive Design

#### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

#### Responsive Features
- Flexible grid layouts
- Stacked content on mobile
- Touch-friendly buttons
- Optimized images
- RTL support across all breakpoints

---

### Color Scheme (To be extracted from CSS)
- Primary colors (from site analysis)
- Secondary colors
- Text colors
- Background colors
- Accent colors

---

### RTL (Right-to-Left) Support
- All text aligned right
- Layout mirrored
- Icons and images positioned correctly
- Form inputs RTL
- Navigation RTL

---

## Implementation Steps

### Phase 1: Project Setup
1. Initialize Vite + React project
2. Install dependencies
3. Set up folder structure
4. Configure RTL support
5. Set up routing (if needed)

### Phase 2: Core Components
1. Create layout components
2. Create reusable UI components (Button, Card, etc.)
3. Set up typography system
4. Create loader component

### Phase 3: Sections Implementation
1. Hero section
2. Introduction section
3. About section
4. Why Choose Us section
5. Projects gallery
6. Work process section
7. FAQ section
8. Footer

### Phase 4: Animations
1. Implement scroll animations
2. Add hover effects
3. Create transitions
4. Number counter animations
5. Image lazy loading

### Phase 5: Forms & Interactions
1. Contact form
2. Dropdown selectors
3. Accordion functionality
4. Project detail modals/views

### Phase 6: Polish & Optimization
1. Performance optimization
2. Image optimization
3. Accessibility improvements
4. Cross-browser testing
5. Mobile responsiveness testing

---

## File Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Loader/
│   │   └── Accordion/
│   ├── sections/
│   │   ├── Hero/
│   │   ├── Introduction/
│   │   ├── About/
│   │   ├── WhyChooseUs/
│   │   ├── Projects/
│   │   ├── Process/
│   │   ├── FAQ/
│   │   └── Footer/
│   └── layout/
│       ├── Header/
│       └── Layout/
├── assets/
│   ├── images/
│   ├── fonts/
│   └── icons/
├── styles/
│   ├── globals.css
│   ├── variables.css
│   └── mixins.css
├── hooks/
│   ├── useScrollAnimation.ts
│   ├── useCounter.ts
│   └── useIntersectionObserver.ts
├── utils/
│   └── animations.ts
└── App.tsx
```

---

## Notes
- All content is in Hebrew (RTL)
- Site uses CSS Modules for styling
- Focus on smooth animations and professional appearance
- Accessibility is important (Enable toolbar integration)
- Performance optimization is crucial for image-heavy site
