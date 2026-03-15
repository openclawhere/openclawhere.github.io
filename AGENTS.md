# AGENTS.md - Development Guidelines for OpenClaw

## Project Overview

This is a React 19 + TypeScript + Vite project with shadcn/ui components. It serves as an AI model comparison website featuring product guides, model listings, and resource sections.

## Tech Stack

- **Framework**: React 19 + React Router DOM 7
- **Language**: TypeScript 5.9 (strict mode)
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3 + tailwind-merge + clsx
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

---

## Build / Lint / Test Commands

### Development

```bash
npm run dev          # Start Vite dev server
npm run preview      # Preview production build locally
```

### Building

```bash
npm run build        # Run typecheck then build for production
npm run typecheck    # Run TypeScript type checking only (tsc -b)
```

### Linting

```bash
npm run lint         # Run ESLint on all files
npm run lint -- --fix  # Auto-fix ESLint issues
```

Note: ESLint is configured with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`. The `lint-staged` config automatically runs `--fix` on staged `.ts`/`.tsx` files via Husky.

### No Test Framework Currently Configured

This project does not have a test framework (Vitest/Jest) set up. Do not write tests unless explicitly requested.

---

## Code Style Guidelines

### TypeScript Configuration

- **Strict mode enabled** - all strict compiler options are on
- **Path alias**: Use `@/` prefix for absolute imports from `src/` directory
  - Good: `import { Button } from '@/components/ui/button'`
  - Avoid: `import { Button } from '../components/ui/button'`
- **Type-only imports**: Use `import { type Foo }` or `import type { Foo }` for types only

### Component Patterns

1. **Export style**: Use named exports for components
   ```tsx
   export function Button({ ... }: ButtonProps) { ... }
   export { Button };
   ```

2. **Props interfaces**: Define props interfaces in same file when simple, or separate file for complex types
   ```tsx
   interface ModelCardProps {
     model: ModelProps;
   }
   ```

3. **Variant props**: Use `cva` (class-variance-authority) for component variants
   ```tsx
   const buttonVariants = cva("...", {
     variants: { variant: { default: "...", destructive: "..." } },
     defaultVariants: { variant: "default" }
   });
   ```

### Naming Conventions

- **Files**: PascalCase for components (`ModelCard.tsx`), camelCase for utilities (`utils.ts`)
- **Components**: PascalCase (`Button`, `ModelCard`)
- **Functions**: camelCase (`getDomain`, `cn`)
- **Constants**: camelCase for runtime constants, UPPER_SNAKE for config values
- **Interfaces**: PascalCase with `Props` suffix for prop types (`ModelCardProps`)

### Import Order

1. External libraries (React, Radix UI, etc.)
2. Internal absolute imports (`@/components/`, `@/lib/`, `@/hooks/`)
3. Relative imports (last resort)

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
```

### Tailwind CSS

- Use Tailwind utility classes for all styling
- Use `cn()` utility from `@/lib/utils` to merge Tailwind classes
- Follow shadcn/ui patterns for component styling (see `src/components/ui/*.tsx`)
- Custom colors and design tokens defined in `tailwind.config.js`

### Error Handling

- Use try/catch for async operations with proper error states
- For external resources (images, URLs), provide fallback/error handling
- Use `aria-invalid` patterns for form validation states

### JSX/TSX Conventions

- Use self-closing tags for elements with no children: `<Component />`
- Prefer arrow functions for simple functional components
- Destructure props in function signature when straightforward
- Use explicit return types for complex component functions

### shadcn/ui Components

- All UI components are in `src/components/ui/` and follow Radix UI patterns
- Do NOT modify UI components directly - copy and customize if needed
- UI components export both the component and variant config (e.g., `export { Button, buttonVariants }`)

---

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components (Button, Card, Dialog, etc.)
│   ├── ModelCard.tsx
│   ├── ProductCard.tsx
│   └── WebsiteCard.tsx
├── data/             # Static data (models.ts, products.ts)
├── hooks/            # Custom React hooks
├── lib/              # Utilities (utils.ts, score.ts)
├── sections/         # Page sections (Hero, Navigation, Footer, etc.)
├── App.tsx           # Main app with routing
└── main.tsx          # Entry point
```

---

## Important Notes

1. **No comments** - Do not add comments unless explicitly requested
2. **Chinese content** - This site contains Chinese language content; preserve it
3. **CSS-in-JS** - Avoid; use Tailwind utilities only
4. **CSS modules** - Avoid; use Tailwind with `cn()` utility
5. **Styled components** - Avoid; use Tailwind only

---

## Editor Setup Recommendations

- VS Code with ESLint and TypeScript extensions
- Enable "Format on Save" for automatic lint fixes
- Use absolute imports (`@/`) - already configured in tsconfig
