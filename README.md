# Consilium Website

A modern, responsive website for Consilium - Architecture and Interior Design services. Built with React, TypeScript, Vite, and Framer Motion.

## Features

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌐 RTL (Right-to-Left) support for Hebrew content
- 🎨 CSS Modules for scoped styling
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- ♿ Accessibility considerations

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Intersection Observer** - Scroll animations
- **CSS Modules** - Scoped styling

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   │   ├── Button/
│   │   ├── Card/
│   │   └── Loader/
│   └── sections/        # Page sections
│       ├── Hero/
│       ├── Introduction/
│       ├── About/
│       ├── WhyChooseUs/
│       ├── Projects/
│       ├── Process/
│       ├── FAQ/
│       └── Footer/
├── hooks/               # Custom React hooks
│   ├── useScrollAnimation.ts
│   └── useCounter.ts
├── styles/              # Global styles
│   ├── globals.css
│   └── variables.css
└── assets/             # Images, fonts, etc.
    └── images/
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create the following image directories and add your images:
   - `public/images/roi-shmuel.png` - Profile image
   - `public/images/projects/` - Project images
   - `public/images/testimonials/` - Testimonial images (testimonial-1.png through testimonial-17.png)
   - `public/images/process-image.png` - Process illustration

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Image Requirements

### Profile Image
- **Path**: `public/images/roi-shmuel.png`
- **Recommended size**: 600x800px or similar aspect ratio

### Project Images
- **Path**: `public/images/projects/`
- **Files needed**:
  - `earth-fusion-1.png`
  - `16th-floor-1.png`
  - `penthouse-1.png`
  - `soft-geometry-1.png`
  - `earthy-embrace-1.png`
  - `earth-haven-1.png`
- **Recommended size**: 1200x900px (4:3 aspect ratio)

### Testimonial Images
- **Path**: `public/images/testimonials/`
- **Files needed**: `testimonial-1.png` through `testimonial-17.png`
- **Recommended size**: 400x400px (square)

### Process Image
- **Path**: `public/images/process-image.png`
- **Recommended size**: 1200x600px or similar

## Customization

### Colors
Edit `src/styles/variables.css` to customize the color scheme:

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  /* ... */
}
```

### Typography
Fonts are loaded from Google Fonts in `index.html`. To change fonts, update the font imports and CSS variables.

### Content
All content is in the component files. Edit the text directly in the respective component files in `src/components/sections/`.

## Sections Overview

1. **Hero** - Main landing section with CTA buttons
2. **Introduction** - Welcome message and problem statements
3. **About** - Profile section with animated statistics
4. **Why Choose Us** - Benefits and value propositions
5. **Projects** - Project gallery with detail modals
6. **Process** - 7-step work process
7. **FAQ** - Accordion-style frequently asked questions
8. **Footer** - Footer with credits and links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Credits

Built by Daniel Rosenblat
