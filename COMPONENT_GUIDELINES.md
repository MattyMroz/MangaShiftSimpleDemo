# 🏗️ COMPONENT DEVELOPMENT GUIDELINES

> **AUDIENCE:** Frontend Developers pracujący w projekcie MangaShift
> **PURPOSE:** Zapewnienie spójności, accessibility i performance w każdym komponencie

______________________________________________________________________

## 📐 ZASADY FUNDAMENTALNE

### 1. CSS Variables > Hardcoded Values

**❌ NIE ROB TEGO:**

```tsx
<h1 className="text-[5rem] md:text-[8rem] xl:text-[12rem]">
```

**✅ ROB TO:**

```tsx
<h1 className="text-[length:var(--title-font-size)]">
```

**DLACZEGO:**

- Centralna kontrola w `globals.css`
- Automatyczne Media Queries
- Łatwiejsze utrzymanie

______________________________________________________________________

### 2. Mobile-First Breakpoints

**KOLEJNOŚĆ BREAKPOINTÓW:**

```tsx
// Base (320px+) - Mobile
className="px-4 py-2 text-base"

// sm: (460px+) - Large phones
className="px-4 py-2 sm:px-6 text-base"

// md: (576px+) - Small tablets
className="px-4 py-2 md:px-8 text-base"

// lg: (768px+) - Tablets
className="px-4 py-2 lg:px-12 lg:py-4 text-base lg:text-lg"

// xl: (992px+) - Desktop
className="px-4 py-2 xl:px-16 xl:py-6 text-base xl:text-xl"

// 2xl: (1200px+) - Large Desktop
className="px-4 py-2 2xl:px-20 text-base 2xl:text-2xl"
```

**KRYTYCZNE:** Najpierw definiuj style mobile, potem dodawaj modyfikatory dla większych ekranów.

______________________________________________________________________

### 3. Overflow Protection (ZAWSZE)

**KAŻDA SEKCJA MUSI MIEĆ:**

```tsx
<section className="w-full overflow-x-hidden">
  <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
    {children}
  </div>
</section>
```

**KAŻDY ELEMENT Z ANIMACJĄ:**

```tsx
// Jeśli element animuje się poza parent (transform, translateX, scale)
<div className="overflow-hidden">
  <AnimatedComponent />
</div>
```

______________________________________________________________________

### 4. Grid System (Standardowy Wzorzec)

**2-COLUMN LAYOUT:**

```tsx
<div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16">
  <div>{/* Lewa kolumna */}</div>
  <div>{/* Prawa kolumna */}</div>
</div>
```

**3-COLUMN LAYOUT:**

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
  <div>{/* Card 1 */}</div>
  <div>{/* Card 2 */}</div>
  <div>{/* Card 3 */}</div>
</div>
```

**CARDS GRID:**

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

______________________________________________________________________

## 🎨 TYPOGRAFIA

### Hierarchia Font Sizes (CSS Variables)

| Element          | CSS Variable                   | Desktop Size     | Mobile Size     | Użycie               |
| ---------------- | ------------------------------ | ---------------- | --------------- | -------------------- |
| Hero Title       | `--title-font-size`            | 16rem (160px)    | 6-11.5rem       | Główny H1 na stronie |
| Hero Subtitle    | `--subtitle-font-size`         | 3rem (30px)      | 1.75-2.3rem     | Podtytuł Hero        |
| Section Title    | `--section-title-font-size`    | 5rem (50px)      | Auto-scale      | H2 w sekcjach        |
| Section Subtitle | `--section-subtitle-font-size` | 2.2rem (22px)    | Auto-scale      | Podtytuły sekcji     |
| H1               | `--h1-font-size`               | 3.2rem (32px)    | 2.4rem (460px-) | Duże nagłówki        |
| H2               | `--h2-font-size`               | 2.4rem (24px)    | 1.8rem (460px-) | Średnie nagłówki     |
| H3               | `--h3-font-size`               | 1.872rem (~19px) | Auto-scale      | Małe nagłówki        |
| Body             | `--normal-font-size`           | 1.6rem (16px)    | Auto-scale      | Paragrafy            |
| Small            | `--small-font-size`            | 1.328rem (~13px) | Auto-scale      | Drobny tekst         |
| Tiny             | `--tiny-font-size`             | 1.072rem (~11px) | Auto-scale      | Captions, labels     |

### Jak Używać

```tsx
// Hero Title
<h1 className="text-[length:var(--title-font-size)]">
  MangaShift
</h1>

// Section Heading
<h2 className="text-[length:var(--section-title-font-size)] font-bold">
  About
</h2>

// Standard Heading
<h3 className="text-[length:var(--h1-font-size)] font-semibold">
  Feature Title
</h3>

// Paragraph
<p className="text-[length:var(--normal-font-size)] leading-relaxed">
  Description text...
</p>

// Small text
<span className="text-[length:var(--small-font-size)] opacity-80">
  Caption
</span>
```

______________________________________________________________________

## 🔲 SPACING SYSTEM

### Container Spacing

```tsx
// Max Width Container (1200px)
<div className="max-w-[var(--container-width)] mx-auto">

// Horizontal Padding (15px)
<div className="px-[var(--container-padding)]">

// Section Spacing
<section className="
  pt-[var(--section-padding-top)]    // 10rem górny
  pb-[var(--section-padding-bottom)] // 10rem dolny
  mb-[var(--section-margin-bottom)]  // 10rem margines między sekcjami
">
```

### Internal Spacing (Tailwind Utilities)

```tsx
// Gap w Grid
className="gap-4 lg:gap-8 xl:gap-16"

// Padding w Card
className="p-6 lg:p-8 xl:p-12"

// Margin Bottom dla elementów
className="mb-4 lg:mb-6"  // Mały odstęp
className="mb-8 lg:mb-12" // Średni odstęp
className="mb-12 lg:mb-16" // Duży odstęp
```

______________________________________________________________________

## 🎯 KOMPONENTY - TEMPLATE

### Podstawowy Komponent UI

```tsx
'use client'; // Tylko jeśli używasz hooks lub browser APIs

import { ReactNode } from 'react';

interface MyComponentProps {
  /** Wymagany prop z opisem */
  children: ReactNode;
  /** Opcjonalny prop z defaultem */
  variant?: 'primary' | 'secondary';
  /** Custom className dla override */
  className?: string;
}

/**
 * MyComponent - Krótki opis co robi
 *
 * @example
 * <MyComponent variant="primary">
 *   <p>Content</p>
 * </MyComponent>
 */
export const MyComponent = ({
  children,
  variant = 'primary',
  className = ''
}: MyComponentProps) => {
  // Logika komponentu

  return (
    <div
      className={`
        w-full overflow-x-hidden
        ${variant === 'primary' ? 'bg-primary' : 'bg-secondary'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
```

### Komponent z Responsywną Logiką

```tsx
'use client';

import { useState, useEffect } from 'react';

export const ResponsiveComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="p-4 lg:p-8">
      {isMobile ? (
        <MobileVersion />
      ) : (
        <DesktopVersion />
      )}
    </div>
  );
};
```

______________________________________________________________________

## ♿ ACCESSIBILITY (A11y) CHECKLIST

### Przed Commitem Każdego Komponentu

- [ ] **Semantic HTML:** Używam `<button>`, `<nav>`, `<section>`, `<article>` zamiast `<div>`
- [ ] **Keyboard Navigation:** Interaktywne elementy mają focus-visible states
- [ ] **ARIA Labels:** Ikony i obrazy mają `aria-label` lub `alt`
- [ ] **Color Contrast:** Tekst ma kontrast ≥ 4.5:1 (sprawdź w DevTools)
- [ ] **Focus Indicators:** Buttony mają `focus-visible:ring-2 focus-visible:ring-primary`
- [ ] **Touch Targets:** Klikalne elementy mają min. 44x44px (mobile)

### Przykład Accessible Button

```tsx
<button
  className="
    px-8 py-4
    text-[length:var(--h2-font-size)]
    bg-primary text-white
    rounded-full

    // Focus state
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-offset-2
    focus-visible:ring-primary

    // Hover state
    hover:bg-primary-hover

    // Active state
    active:scale-95

    // Disabled state
    disabled:opacity-50
    disabled:cursor-not-allowed

    // Touch target
    min-w-[44px] min-h-[44px]
  "
  aria-label="Watch demo video"
  disabled={isLoading}
>
  {isLoading ? 'Loading...' : 'Watch Demo'}
</button>
```

______________________________________________________________________

## 🚀 PERFORMANCE BEST PRACTICES

### 1. Obrazy (ZAWSZE `next/image`)

```tsx
import Image from 'next/image';

// ❌ NIE
<img src="/image.jpg" />

// ✅ TAK
<Image
  src="/image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority={false} // true tylko dla LCP image (zwykle Hero)
  loading="lazy"   // Domyślnie lazy, ale możesz wymusić
  quality={85}     // Default 75, podnieś dla ważnych obrazów
/>
```

### 2. Lazy Loading Komponentów

```tsx
import dynamic from 'next/dynamic';

// Dla ciężkich komponentów poniżej fold
const HeavyComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  {
    loading: () => <div>Loading...</div>,
    ssr: false // Jeśli wymaga window/document
  }
);
```

### 3. Memoization (Tylko Gdy Potrzeba)

```tsx
import { useMemo, useCallback } from 'react';

// useMemo - dla ciężkich obliczeń
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// useCallback - dla funkcji przekazywanych jako props
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
```

**UWAGA:** Nie optymalizuj przedwcześnie. Użyj tylko gdy profile pokazuje problem.

______________________________________________________________________

## 🧪 TESTOWANIE KOMPONENTU

### Manual Testing Checklist

Przed PR każdy komponent testuj na:

1. **Rozdzielczościach:**

   - [ ] 320px (iPhone SE)
   - [ ] 375px (iPhone X)
   - [ ] 768px (iPad Portrait)
   - [ ] 992px (iPad Landscape)
   - [ ] 1920px (Desktop)

2. **Interakcje:**

   - [ ] Click/Tap (palcem w DevTools)
   - [ ] Tab navigation (klawiatura)
   - [ ] Hover states (na desktop)
   - [ ] Scroll behavior

3. **Edge Cases:**

   - [ ] Bardzo długi tekst (overflow handling)
   - [ ] Brak danych (empty state)
   - [ ] Loading state
   - [ ] Error state

______________________________________________________________________

## 🎨 STYLING CONVENTIONS

### Tailwind Class Order (Standardowa Kolejność)

```tsx
className="
  // Layout
  flex flex-col items-center justify-between

  // Sizing
  w-full h-screen max-w-[120rem]

  // Spacing
  p-6 lg:p-12 m-4 gap-8

  // Typography
  text-[length:var(--h1-font-size)] font-bold leading-tight

  // Visual
  bg-primary text-white rounded-lg shadow-lg

  // Borders
  border border-gray-200

  // Effects
  overflow-hidden opacity-90

  // Transitions
  transition-all duration-300

  // States
  hover:bg-primary-hover
  focus-visible:ring-2
  active:scale-95
  disabled:opacity-50

  // Responsive
  md:flex-row lg:p-16 xl:gap-16
"
```

### CSS Variables w Tailwind

```tsx
// Background colors
className="bg-[var(--bg-primary)]"

// Text colors
className="text-[var(--text-primary)]"

// Custom lengths
className="text-[length:var(--h1-font-size)]"
className="max-w-[var(--container-width)]"
className="px-[var(--container-padding)]"
```

______________________________________________________________________

## 📦 FILE STRUCTURE

### Lokalizacja Komponentów

```
src/
├── shared/ui/           # Reusable UI components
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.test.tsx
│   ├── Section/
│   └── Card/
│
├── widgets/             # Composite components (sekcje)
│   ├── Hero/
│   │   └── ui/
│   │       └── Hero.tsx
│   ├── AboutSection/
│   └── DemoSection/
│
└── features/            # Business logic components
    └── [feature-name]/
```

### Naming Conventions

- **Components:** PascalCase (`Button.tsx`, `CardSwap.tsx`)
- **Utilities:** camelCase (`formatDate.ts`, `useMediaQuery.ts`)
- **Constants:** UPPER_SNAKE_CASE (`API_URL`, `MAX_ITEMS`)
- **Types:** PascalCase + suffix (`ButtonProps`, `User`, `ApiResponse`)

______________________________________________________________________

## 🔍 CODE REVIEW CHECKLIST

Przed wysłaniem PR sprawdź:

### Funkcjonalność

- [ ] Komponent działa zgodnie z wymaganiami
- [ ] Brak console.log / debugger
- [ ] Brak hardcoded wartości (używam CSS Variables)

### Responsive

- [ ] Testowane na 5 breakpointach (320, 768, 992, 1200, 1920)
- [ ] Brak horizontal scroll na mobile
- [ ] Grid/Flex układa się poprawnie

### Accessibility

- [ ] Semantic HTML
- [ ] Keyboard navigation działa
- [ ] Focus states widoczne
- [ ] ARIA labels gdzie potrzeba

### Performance

- [ ] Używam `next/image` dla obrazów
- [ ] Lazy loading dla komponentów poniżej fold
- [ ] Brak niepotrzebnych re-renderów

### Code Quality

- [ ] TypeScript strict mode (brak `any`)
- [ ] Props mają interfejsy z JSDoc
- [ ] Kod jest czytelny (max 100 linii na komponent)

______________________________________________________________________

## 🚨 ANTI-PATTERNS (NIE RÓB TEGO)

### ❌ Hardcoded Breakpoints w JS

```tsx
// ❌ ŹLE
const isMobile = window.innerWidth < 768;

// ✅ DOBRZE - Użyj Media Query w CSS lub useMediaQuery hook
```

### ❌ Inline Styles

```tsx
// ❌ ŹLE
<div style={{ fontSize: '24px', padding: '20px' }}>

// ✅ DOBRZE
<div className="text-[length:var(--h2-font-size)] p-8">
```

### ❌ Fixed Widths na Mobile

```tsx
// ❌ ŹLE
<div className="w-[400px]">

// ✅ DOBRZE
<div className="w-full max-w-[40rem]">
```

### ❌ `useEffect` do Fetch Danych

```tsx
// ❌ ŹLE
useEffect(() => {
  fetch('/api/data').then(setData);
}, []);

// ✅ DOBRZE - Użyj React Query lub Server Component
```

______________________________________________________________________

## 📚 DALSZE ZASOBY

- [RESPONSIVE_DESIGN_SYSTEM.md](./RESPONSIVE_DESIGN_SYSTEM.md) - Pełna dokumentacja systemu
- [TODO.md](./TODO.md) - Lista zadań do wykonania
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

______________________________________________________________________

**PAMIĘTAJ:** Każdy komponent to kamień w fundamencie aplikacji. Jakość kodu dziś = brak bugów jutro.
