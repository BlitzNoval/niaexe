# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Development**: `npm run dev` (uses Turbopack for faster builds)
- **Build**: `npm run build`
- **Production**: `npm start`
- **Lint**: `npm run lint`

## Architecture

This is a Next.js 15 modern minimal portfolio template built with:

- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS with custom CSS variables
- **Animations**: Framer Motion for smooth transitions
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **TypeScript**: Full TypeScript support with strict configuration

## Project Structure

```
app/
├── components/          # Reusable React components
│   ├── HeroSection.tsx     # Main landing section with gradient animations
│   ├── ProjectsSection.tsx # Project showcase section
│   ├── SkillsSection.tsx   # Skills display section
│   └── ContactSection.tsx  # Contact information section
├── globals.css         # Global styles and CSS variables
├── layout.tsx         # Root layout with metadata and fonts
└── page.tsx          # Main page composition
```

## Key Architecture Notes

- **Component Structure**: Single-page application with section-based components
- **Styling**: Uses CSS-in-JS approach with TailwindCSS classes and custom gradients
- **Animations**: Each section uses Framer Motion with staggered entrance animations
- **Metadata**: Comprehensive SEO and social media metadata configured in `layout.tsx`
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## Customization Points

- **Personal Info**: Update metadata and content in `app/layout.tsx` and component files
- **Styling**: Modify colors in `tailwind.config.ts` and theme variables in `globals.css`
- **Content**: Replace placeholder content in component files (currently shows "John Doe" as example)
- **Assets**: Replace images in `public/` directory

## Development Notes

- Uses ESLint with Next.js recommended config
- Turbopack enabled for faster development builds
- All components are client-side rendered ('use client' directive)
- Gradient backgrounds and smooth animations are core design elements