# Next.js Starter Template

A modern, production-ready template built with **Next.js**, **Tailwind CSS v4**, and **Lucide React**, configured specifically for **Yarn**.

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?logo=tailwind-css&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_React-F56565?logo=lucide)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=white)

---

## ✨ Features

- ⚡ **Next.js (App Router)** with Turbopack for ultra-fast builds and refreshes.
- 🎨 **Tailwind CSS v4** with CSS variables, pure utility classes, and modern theming.
- 🧩 **Custom React UI Components** styled cleanly with pure Tailwind CSS.
- 🌟 **Lucide React** modern icons library.
- 🌓 **Dark & Light Mode** with `next-themes` and a ready-to-use `ThemeToggle` component.
- 🧶 **Yarn Berry** setup with standard `node-modules` linker for compatibility.
- 🛡️ **TypeScript** & **ESLint** pre-configured.

---

## 📁 Project Structure

```
├── .yarnrc.yml             # Yarn configuration (nodeLinker: node-modules)
├── package.json
├── tsconfig.json
├── src/
│   ├── app/
│   │   ├── globals.css     # Tailwind CSS & theme tokens
│   │   ├── layout.tsx      # Root layout with ThemeProvider & TooltipProvider
│   │   └── page.tsx        # Interactive template showcase page
│   ├── components/
│   │   ├── theme-provider.tsx # next-themes provider wrapper
│   │   ├── theme-toggle.tsx   # Light / Dark / System mode toggle
│   │   └── ui/             # Pure Tailwind CSS components
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── separator.tsx
│   │       └── tooltip.tsx
│   └── lib/
│       └── utils.ts        # cn helper utility
```

---

## 🚀 Getting Started

### 1. Install Dependencies

Using Yarn:

```bash
yarn install
```

### 2. Run the Development Server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
yarn build
yarn start
```

### 4. Run Linting

```bash
yarn lint
```

---

## 🎨 Tailwind CSS Components

All UI components in `src/components/ui` (`Button`, `Card`, `Dialog`, `DropdownMenu`, `Input`, `Badge`, `Avatar`, `Tooltip`, `Separator`) are built with pure React and Tailwind CSS v4, with zero external UI component dependencies.

---

## 🎨 Using Lucide Icons

Import any icon directly from `lucide-react`:

```tsx
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Example() {
  return (
    <Button className="gap-2">
      <Sparkles className="h-4 w-4" />
      <span>Get Started</span>
      <ArrowRight className="h-4 w-4" />
    </Button>
  );
}
```

---

## 📄 License

MIT
