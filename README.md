# ACM SRM Student Chapter Website

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: 
  - Lenis for smooth scrolling 
  - Custom animations using CSS
- **Fonts**: 
  - Mango Grotesque
  - Poly Sans
- **Dev Tools**: TypeScript, ESLint

## Setup

1. Clone the repo and install dependencies:
```bash
git clone https://github.com/ashibad/acm-srm-website.git
cd acm-srm-website
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open http://localhost:3000 to view it in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page
│   ├── teams/             # Teams page
│   ├── events/            # Events page
│   ├── gallery/           # Gallery page
│   └── contact/           # Contact page
│
├── components/
│   ├── global/           # Shared components (Navigation)
│   ├── home/             # Homepage components (Hero, Domains, etc.)
│   └── ui/               # Reusable UI components
│
└── styles/
    ├── globals.css       # Global styles & Tailwind imports
    └── fonts.ts          # Font configurations
```

## Adding New Pages

Create a new page by adding a `page.tsx` file in the corresponding directory:

```tsx
// app/your-page/page.tsx
export default function YourPage() {
  return (
    <main className="pt-24 px-4 md:px-32">
      <div className="max-w-[1920px] mx-auto">
        <h1 className="text-5xl md:text-[100px] font-title font-bold mb-24">
          Your Page Title
        </h1>
        {/* Your content */}
      </div>
    </main>
  )
}
```

## Working with Images

Put all images in `public/images/` and reference them like:
```tsx
<Image 
  src="/images/example.svg"
  alt="description"
  width={400} 
  height={300}
/>
```

## Styles

- Add custom styles in globals.css
- Follow existing component styles for consistency

## Branch Workflow

1. Create a branch for your work
```bash
git checkout -b page/feature-name
```

2. Make your changes

3. Push your changes
```bash
git add .
git commit -m "describe your changes"
git push origin page/feature-name
```