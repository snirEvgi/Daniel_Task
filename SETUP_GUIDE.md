# Quick Setup Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Add Your Images
Create the following directory structure and add your images:

```
public/
└── images/
    ├── roi-shmuel.png
    ├── process-image.png
    ├── projects/
    │   ├── earth-fusion-1.png
    │   ├── 16th-floor-1.png
    │   ├── penthouse-1.png
    │   ├── soft-geometry-1.png
    │   ├── earthy-embrace-1.png
    │   └── earth-haven-1.png
    └── testimonials/
        ├── testimonial-1.png
        ├── testimonial-2.png
        ├── ... (through testimonial-17.png)
```

### Step 3: Run Development Server
```bash
npm run dev
```

Open `http://localhost:5173` in your browser!

## 📋 What's Included

✅ Complete website structure
✅ All sections implemented
✅ Animations and interactions
✅ Responsive design
✅ RTL support for Hebrew
✅ TypeScript for type safety

## 🎨 Customization

### Change Colors
Edit `src/styles/variables.css` and update the CSS variables.

### Update Content
Edit the component files in `src/components/sections/` to change text content.

### Add More Projects
Edit `src/components/sections/Projects/Projects.tsx` and add to the `projects` array.

## 📦 Build for Production

```bash
npm run build
```

The production files will be in the `dist` folder.

## 📚 Documentation

- See `DESIGN_ROADMAP.md` for detailed design specifications
- See `PROJECT_SUMMARY.md` for implementation details
- See `README.md` for full documentation

## 🐛 Troubleshooting

**Images not showing?**
- Make sure images are in `public/images/` (not `src/assets/`)
- Check that file names match exactly (case-sensitive)

**Styles not working?**
- Make sure CSS Modules are being used correctly
- Check browser console for errors

**Animations not working?**
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser console for errors

## ✨ Features

- ⚡ Fast development with Vite
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive
- 🌐 RTL support
- 🎨 Modern design
- ♿ Accessibility ready

Enjoy building! 🎉
