# 🎯 RESPONSIVE DESIGN SYSTEM - DOKUMENTACJA FAKTYCZNEGO STANU

> **STATUS:** Dokumentacja rzeczywistego systemu design zaimplementowanego w projekcie MangaShift
> **OSTATNIA AKTUALIZACJA:** 29 listopada 2025

---

## 📐 OBECNY STAN SYSTEMU

### Zaimplementowane Rozwiązania

1. **CSS VARIABLES SYSTEM (`globals.css`)**
   - ✅ Pełny zestaw zmiennych dla kolorów, typografii, layoutu
   - ✅ Responsive font scaling przez media queries
   - ✅ Dark mode support przez `[data-theme="dark"]`
   - ✅ Overflow protection na `html` i `body`

2. **COMPONENT ARCHITECTURE**
   - ✅ `Section.tsx`: Uniwersalny komponent sekcji z CSS Variables
   - ✅ `Button.tsx`: 2 warianty z GlassSurface integration
   - ✅ `SmartText.tsx`: Typografia bez "orphans"
   - ✅ Smooth scroll system dla nawigacji

3. **RESPONSYWNOŚĆ**
   - ✅ Mobile-first approach
   - ✅ Tailwind domyślne breakpointy: `sm:640px, md:768px, lg:1024px, xl:1280px`
   - ✅ CSS Variables media queries: `992px, 768px, 576px, 460px, 390px, 320px`

---

## 🏗️ CSS VARIABLES - FUNDAMENT SYSTEMU

### Typografia (Zaimplementowane w `globals.css`)

```css
:root {
  /* Hero & Sekcje */
  --title-font-size: 16rem;              /* Hero H1 - desktop max */
  --subtitle-font-size: 3rem;             /* Hero subtitle */
  --section-title-font-size: 5rem;       /* Tytuły sekcji (Demo, About, etc.) */
  --section-subtitle-font-size: 2.2rem;
  
  /* Nagłówki */
  --h1-font-size: 3.2rem;                /* Duże nagłówki w sekcjach */
  --h2-font-size: 2.4rem;                /* Przyciski, medium headings */
  --h3-font-size: 1.872rem;              /* Paragrafy, opisy */
  
  /* Body text */
  --normal-font-size: 1.6rem;            /* Podstawowy tekst (16px) */
  --small-font-size: 1.328rem;
  --tiny-font-size: 1.072rem;
  
  /* Specjalne */
  --japanese-text-font-size: 1.4rem;     /* Japońskie tło */
}
```

**UŻYCIE:** `text-[length:var(--h1-font-size)]` w Tailwind

### Layout & Spacing

```css
:root {
  /* Container */
  --container-width: 120rem;              /* Max szerokość contentu (1200px) */
  --container-padding: 1.5rem;            /* Boczne paddingi (15px) */
  
  /* Sekcje */
  --section-padding-top: 10rem;           /* Odstęp górny */
  --section-padding-bottom: 10rem;        /* Odstęp dolny */
  --section-margin-bottom: 10rem;
  
  /* Spacing scale */
  --spacing-xs: 0.4rem;
  --spacing-sm: 0.8rem;
  --spacing-md: 1.6rem;
  --spacing-lg: 2.4rem;
  --spacing-xl: 3.2rem;
  --spacing-2xl: 4.8rem;
}
```

### Kolory (Light/Dark Mode)

```css
:root {
  --bg-primary: #fcfcfc;        /* Główne tło */
  --bg-secondary: #f5f5f5;      /* Sekundarne powierzchnie */
  --bg-tertiary: #e5e5e5;
  
  --text-primary: #1a1a1a;      /* Główny tekst */
  --text-secondary: #525252;    /* Przyciemniony tekst */
  --text-tertiary: #a3a3a3;     /* Subtelny tekst */
}

[data-theme="dark"] {
  --bg-primary: #0a0a0a;
  --bg-secondary: #171717;
  --text-primary: #fafafa;
  --text-secondary: #a3a3a3;
}
```

---

## 📱 RESPONSIVE FONT SCALING

### System Media Queries (Zaimplementowany)

```css
/* Base: 62.5% = 10px (1rem = 10px) */
html { font-size: 62.5%; }

/* @992px - Large Tablets / Small Desktops */
@media screen and (max-width: 992px) {
  html { font-size: 55%; }  /* Wszystko zmniejsza się o 10% */
}

/* @768px - Tablets */
@media screen and (max-width: 768px) {
  :root {
    --title-font-size: 11.5rem;
    --subtitle-font-size: 2.3rem;
  }
}

/* @576px - Large Phones */
@media screen and (max-width: 576px) {
  :root {
    --title-font-size: 8rem;
    --subtitle-font-size: 1.75rem;
  }
}

/* @460px - Standard Phones */
@media screen and (max-width: 460px) {
  :root {
    --title-font-size: 7rem;
    --h1-font-size: 2.4rem;
    --h2-font-size: 1.8rem;
  }
}

/* @320px - Small Phones */
@media screen and (max-width: 320px) {
  :root {
    --title-font-size: 5.5rem;
  }
}
```

**MECHANIZM:** Zmiana `html font-size` skaluje WSZYSTKIE wartości `rem` automatycznie.

---

## 🎨 KOMPONENTY - WZORCE IMPLEMENTACJI

### Section Component (Universal Pattern)

**Plik:** `src/shared/ui/Section/Section.tsx`

```tsx
<section
  id={id}
  className="
    w-full overflow-x-hidden
    pt-[var(--section-padding-top)]
    pb-[var(--section-padding-bottom)]
    px-[var(--container-padding)]
  "
>
  <div className="max-w-[var(--container-width)] mx-auto w-full">
    {title && (
      <h2 className="text-[length:var(--section-title-font-size)]">
        {title}
      </h2>
    )}
    {/* Grid lub single column content */}
  </div>
</section>
```

**KLUCZOWE ELEMENTY:**
- `overflow-x-hidden` - zapobiega horizontal scroll
- CSS Variables dla wszystkich wartości
- `max-w-[var(--container-width)]` - max 1200px z auto-margin
- Grid z breakpointem `lg:` (1024px w Tailwind)

### Button Component

**Plik:** `src/shared/ui/Button/Button.tsx`

**2 WARIANTY:**
1. **Primary** - `backdrop-invert`, `backgroundOpacity={0.75}`
2. **Ghost** - standardowy, `backgroundOpacity={0.05}`

```tsx
<span className="text-[length:var(--h2-font-size)]">
  {children}
</span>
```

**RESPONSYWNOŚĆ:** Font size skaluje się przez CSS Variables media queries.

### Typography Pattern (SmartText)

**Użycie w sekcjach:**
```tsx
<SmartText>
  <p className="text-[length:var(--h3-font-size)]">
    Tekst bez orphans...
  </p>
</SmartText>
```

**FUNKCJA:** Zamienia spacje przed krótkimi słowami (1-3 litery) na `&nbsp;`.

---

## 📐 WZORZEC SEKCJI (ANALIZA RZECZYWISTYCH)

### Hero Section

**SPECYFIKA:**
- Full viewport height (`h-screen`)
- Używa `clamp()` dla głównego tytułu (WYJĄTEK od CSS Variables)
- Flex column z vertical centering
- 2 przyciski: "Watch Demo" (primary) + "Learn More" (ghost)

**STRUKTURA:**
```tsx
<section id="home" className="h-screen flex flex-col">
  {/* Spacer góra */}
  <div className="flex-1" />
  
  {/* Tytuł wyśrodkowany */}
  <div className="flex flex-col items-center text-center">
    <h1 className="text-[clamp(5.5rem,15vw,16rem)]">MangaShift</h1>
  </div>
  
  {/* Subtitle + Przyciski */}
  <div className="flex-1 flex flex-col items-center justify-start pt-8">
    <SmartText>
      <p className="text-[clamp(1.75rem,5vw,3rem)]">...</p>
    </SmartText>
    <div className="flex gap-6 md:gap-12">
      <Button variant="primary">Watch Demo</Button>
      <Button variant="ghost">Learn More</Button>
    </div>
  </div>
</section>
```

### Demo & About Sections

**WSPÓLNY PATTERN:**
- `Section` wrapper z `gridCols={1}` (custom grid wewnątrz)
- 2-kolumnowy layout: Content (text) + Visual (image/cards)
- Breakpoint: `lg:grid-cols-2` (1024px)
- Reverse order na mobile: `order-1 lg:order-2`

**STRUKTURA:**
```tsx
<Section id="demo" title="Demo" gridCols={1}>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
    {/* Kolumna 1: Tekst */}
    <div className="order-1 lg:order-2 px-12 lg:pl-12 lg:pr-24">
      <h3 className="text-[length:var(--h1-font-size)]">...</h3>
      <SmartText>
        <p className="text-[length:var(--h3-font-size)]">...</p>
      </SmartText>
      <Button variant="ghost">Watch Demo</Button>
    </div>
    
    {/* Kolumna 2: Visual */}
    <div className="order-2 lg:order-1 px-12 lg:pl-24 lg:pr-12">
      <TiltedCard ... />
    </div>
  </div>
</Section>
```

**PADDING PATTERN:**
- Mobile: `px-12` (uniform)
- Desktop Left column: `lg:pl-24 lg:pr-12`
- Desktop Right column: `lg:pl-12 lg:pr-24`

### FAQ Section (Placeholder)

**OBECNY STAN:**
```tsx
<Section id="faq" title="FAQ Section">
  <div className="text-center">
    <SmartText>
      <p className="text-[2rem]">Frequently asked questions</p>
    </SmartText>
  </div>
</Section>
```

**DO ROZBUDOWY:** Accordion/lista pytań.

---

## 🚨 ZNANE PROBLEMY I NIESPÓJNOŚCI

### ❌ Błędy do Naprawy

1. **Hero używa `clamp()` zamiast CSS Variables:**
   ```tsx
   // ❌ OBECNE
   <h1 className="text-[clamp(5.5rem,15vw,16rem)]">
   
   // ✅ POWINNO BYĆ
   <h1 className="text-[length:var(--title-font-size)]">
   ```

2. **Brak `--accent-primary` w `globals.css`:**
   - `AboutSection` używa `text-[var(--accent-primary)]`
   - Zmienna nie istnieje → fallback do default

3. **Mieszane padding wartości:**
   - `CardSwap` cards: hardcoded `p-5 md:p-8`
   - Reszta używa CSS Variables
   - **SUGESTIA:** Dodać `--card-padding` variable

---

## 📊 TAILWIND BREAKPOINTS (OBECNE)

**DOMYŚLNE TAILWIND (W UŻYCIU):**
```javascript
{
  'sm': '640px',   // Small devices
  'md': '768px',   // Medium devices
  'lg': '1024px',  // Large devices (GŁÓWNY BREAKPOINT dla 2-col layout)
  'xl': '1280px',  // Extra large
  '2xl': '1536px'  // 2X Extra large
}
```

**UWAGA:** CSS Variables media queries używają INNYCH wartości (992px, 576px, etc.) - to jest CELOWE:
- **Tailwind breakpoints** = Layout changes (grid columns)
- **CSS Variables breakpoints** = Font size scaling

---

## 🎯 WZORZEC DLA NOWYCH SEKCJI

### Template (Based on Demo/About)

```tsx
export const NewSection = () => {
  return (
    <Section id="section-id" title="Section Title" gridCols={1}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center w-full">
        
        {/* Text Column */}
        <div className="order-1 lg:order-2 w-full flex flex-col items-center lg:items-start gap-8 text-center lg:text-left px-12 lg:pl-12 lg:pr-24">
          <h3 className="text-[length:var(--h1-font-size)] font-bold text-[var(--text-primary)] leading-tight">
            Heading
          </h3>
          <SmartText>
            <p className="text-[length:var(--h3-font-size)] leading-relaxed text-[var(--text-primary)] opacity-90 max-w-2xl">
              Description text...
            </p>
          </SmartText>
          <Link href="/link">
            <Button variant="ghost">
              <span className="flex items-center gap-3">
                <svg>...</svg>
                Button Text
              </span>
            </Button>
          </Link>
        </div>
        
        {/* Visual Column */}
        <div className="order-2 lg:order-1 w-full flex justify-center py-32 lg:py-16 px-12 lg:pl-24 lg:pr-12">
          <div className="relative w-full max-w-[40rem]">
            {/* Image / Card / Custom Visual */}
          </div>
        </div>
        
      </div>
    </Section>
  );
};
```

### Kluczowe Zasady

1. **Zawsze używaj CSS Variables dla typografii:**
   ```tsx
   text-[length:var(--h1-font-size)]
   text-[length:var(--h3-font-size)]
   ```

2. **Padding pattern:**
   - Mobile: uniform `px-12`
   - Desktop: asymmetric `lg:pl-24 lg:pr-12` / `lg:pl-12 lg:pr-24`

3. **Order reversal:**
   - Mobile: Text first (`order-1`), Visual second (`order-2`)
   - Desktop: Swap with `lg:order-1` / `lg:order-2`

4. **Max-width dla visual:**
   - `max-w-[40rem]` (400px) - prevent overflow
   - Responsive width: `w-full` → constrained by max-width

5. **Gap zero w głównym gridzie:**
   - `gap-0` w outer grid
   - Custom padding w child divs

---

## 🔧 NARZĘDZIA I UTILITIY

### Smooth Scroll System

**Plik:** `src/shared/lib/utils/smoothScroll.ts`

```typescript
export const smoothScrollTo = (href: string, offset: number = 100): boolean => {
  // Obsługuje: "/about", "/MangaShiftSimpleDemo/about", "/#about"
  // Wyciąga ID, znajduje element, scrolluje z offsetem
}
```

**UŻYCIE w komponentach:**
```tsx
const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const href = e.currentTarget.getAttribute('href');
  if (href && smoothScrollTo(href)) {
    e.preventDefault(); // Tylko jeśli scroll się udał
  }
};
```

### GlassSurface Integration

**UŻYCIE:**
- Buttons (primary/ghost variants)
- Navbar background
- Przyszłe: Cards, modals

**PARAMETRY:**
```tsx
<GlassSurface
  borderRadius={50}
  blur={11}
  backgroundOpacity={0.75}  // Primary: 0.75, Ghost: 0.05
  // ... inne props
>
  {children}
</GlassSurface>
```

---

## 📝 CHECKLIST DLA NOWYCH KOMPONENTÓW

### Przed implementacją:

- [ ] Sprawdź czy istnieją odpowiednie CSS Variables
- [ ] Zdefiniuj breakpointy (użyj `lg:` dla 2-col layout)
- [ ] Zaplanuj mobile-first structure
- [ ] Określ padding pattern (uniform mobile, asymmetric desktop)

### Podczas implementacji:

- [ ] Użyj `text-[length:var(--variable-name)]` dla font sizes
- [ ] Dodaj `overflow-x-hidden` jeśli potrzebne
- [ ] Wrap text w `<SmartText>` dla lepszej typografii
- [ ] Użyj `Link` z `smoothScrollTo` dla internal links
- [ ] Responsive images: `max-w-[40rem]` + `w-full`

### Po implementacji:

- [ ] Test na mobile (320px, 460px, 768px)
- [ ] Test na tablet (992px)
- [ ] Test na desktop (1200px+)
- [ ] Sprawdź dark mode
- [ ] Validate overflow-x na wszystkich breakpointach

---

## 🎯 PODSUMOWANIE

### ✅ CO DZIAŁA DOBRZE:

- Kompletny system CSS Variables
- Responsive font scaling przez media queries
- Overflow protection
- Spójny pattern Section component
- Dark mode support
- Smooth scroll navigation

### ⚠️ DO POPRAWY:

- Hero: zmienić `clamp()` na CSS Variables
- Dodać brakujące zmienne (`--accent-primary`)
- Ujednolicić padding w cards (CSS Variable)

### 🚀 GOTOWE DO UŻYCIA:

System jest w pełni funkcjonalny i gotowy do tworzenia nowych sekcji według wzorca Demo/About.

---

**NASTĘPNY KROK:** Implementacja Contact Section według powyższego wzorca.

### 1. CSS VARIABLES - FUNDAMENT

```css
:root {
  /* ========== FONTS SIZES ========== */
  --title-font-size: 16rem;           /* Hero Title - max desktop */
  --subtitle-font-size: 3rem;          /* Hero Subtitle */
  --section-title-font-size: 5rem;    /* Section Headings */
  --section-subtitle-font-size: 2.2rem;
  --h1-font-size: 3.2rem;
  --h2-font-size: 2.4rem;
  --h3-font-size: 1.872rem;
  --normal-font-size: 1.6rem;
  --small-font-size: 1.328rem;
  --tiny-font-size: 1.072rem;

  /* ========== LAYOUT ========== */
  --container-width: 120rem;          /* Max content width */
  --container-padding: 1.5rem;        /* Horizontal padding */

  /* ========== Z-INDEXES ========== */
  --z-1: -1;
  --z1: 1;
  --z10: 10;
  --z100: 100;
  --z1000: 1000;
}
```

### 2. RESPONSIVE FONT SCALING (BREAKPOINTS)

```css
/* Base: 62.5% = 10px (1rem = 10px) */
html { font-size: 62.5%; }

/* @992px (Large Tablets / Small Desktops) */
@media screen and (max-width: 992px) {
  html { font-size: 55%; }  /* 1rem = 8.8px */
}

/* @768px (Tablets) */
@media screen and (max-width: 768px) {
  :root {
    --title-font-size: 11.5rem;
    --subtitle-font-size: 2.3rem;
  }
}

/* @576px (Large Phones) */
@media screen and (max-width: 576px) {
  :root {
    --title-font-size: 8rem;
    --subtitle-font-size: 1.75rem;
  }
}

/* @460px (Standard Phones) */
@media screen and (max-width: 460px) {
  :root { --title-font-size: 7rem; }
}

/* @320px (Small Phones) */
@media screen and (max-width: 320px) {
  :root { --title-font-size: 6rem; }
}
```

**KLUCZ:** Zamiast `clamp()` w każdym komponencie → Używamy CSS Variables + Media Queries w `globals.css`

### 3. STRUKTURA SEKCJI (WZORZEC)

```css
.section {
  font-size: var(--normal-font-size);
  margin-bottom: 10rem;  /* Odległość między sekcjami */
}

.container {
  width: 100%;
  max-width: var(--container-width);  /* 120rem = 1200px */
  margin: 0 auto;
  padding: 0 var(--container-padding); /* 1.5rem boczne paddingi */
}

.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

/* Mobile: 1 kolumna */
@media screen and (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
  }
}
```

### 4. OVERFLOW CONTROL (ULTRA-WAŻNE)

```css
html {
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

body {
  overflow: hidden;  /* Zapobiega horizontal scroll */
  -webkit-overflow-scrolling: touch;
}
```

**W Next.js:** Dodać `overflow-x-hidden` do `<html>` i `<body>` w `layout.tsx`

---

## 🎨 MAPOWANIE WARTOŚCI: SOLOELVELING → NEXT.JS

### Typografia (CSS Variables → Tailwind Config)

| SoloLeveling              | CSS Var Value | Next.js (Tailwind) | Użycie                  |
|---------------------------|---------------|--------------------|-------------------------|
| `--title-font-size`       | 16rem         | `text-title`       | Hero H1                 |
| `--subtitle-font-size`    | 3rem          | `text-subtitle`    | Hero Subtitle           |
| `--section-title-font-size` | 5rem        | `text-section-title` | Section Headings      |
| `--h1-font-size`          | 3.2rem        | `text-h1`          | Duże nagłówki           |
| `--h2-font-size`          | 2.4rem        | `text-h2`          | Średnie nagłówki        |
| `--h3-font-size`          | 1.872rem      | `text-h3`          | Małe nagłówki           |
| `--normal-font-size`      | 1.6rem        | `text-base`        | Podstawowy tekst (16px) |

### Breakpoints (Tailwind Config Custom)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'xs': '320px',   // Extra small phones
      'sm': '460px',   // Small phones
      'md': '576px',   // Medium phones
      'lg': '768px',   // Tablets
      'xl': '992px',   // Small desktops
      '2xl': '1200px', // Large desktops
    }
  }
}
```

**UWAGA:** To NADPISUJE domyślne Tailwind breakpointy aby dopasować się do wzorca SoloLeveling.

### Spacing (Container)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      maxWidth: {
        'container': '120rem', // 1200px
      },
      padding: {
        'container': '1.5rem', // 15px
      }
    }
  }
}
```

---

## 🔧 UNIWERSALNY KOMPONENT SEKCJI (DO ZBUDOWANIA)

### Wymagania Funkcjonalne

✅ **Responsywny Grid:**
- Desktop (>992px): 2 kolumny
- Tablet (768-992px): 2 kolumny (mniejsze gap)
- Mobile (<768px): 1 kolumna

✅ **Marginesy i Paddingi:**
- Boczne: `var(--container-padding)` (1.5rem)
- Górny: Dynamiczny (pierwsza sekcja Hero = 0, reszta = 10rem)
- Dolny: 10rem między sekcjami

✅ **Overflow Protection:**
- `overflow-x: hidden` na sekcji
- `max-w-full` na wszystkich dzieciach

✅ **Centrowanie Contentu:**
- Container max-width: 120rem (1200px)
- Auto-margin dla wyśrodkowania

### Przykład Implementacji (TypeScript)

```tsx
interface ResponsiveSectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  gridCols?: 1 | 2; // Domyślnie 2
  isHero?: boolean; // Jeśli true, usuwa top padding
}

export const ResponsiveSection = ({
  id,
  title,
  children,
  gridCols = 2,
  isHero = false
}: ResponsiveSectionProps) => {
  return (
    <section
      id={id}
      className={`
        w-full overflow-x-hidden
        ${isHero ? 'pt-0' : 'pt-[10rem]'}
        pb-[10rem]
        px-[var(--container-padding)]
      `}
    >
      <div className="max-w-[120rem] mx-auto w-full">
        {title && (
          <h2 className="
            font-bold text-center mb-12
            text-[length:var(--section-title-font-size)]
          ">
            {title}
          </h2>
        )}
        <div className={`
          grid gap-4
          ${gridCols === 2 
            ? 'grid-cols-1 xl:grid-cols-2' 
            : 'grid-cols-1'
          }
        `}>
          {children}
        </div>
      </div>
    </section>
  );
};
```

---

## 📱 MOBILE-FIRST STRATEGIE

### 1. Obrazy i Media

**Problem:** `TiltedCard` używa fixed `width="400px"`

**Rozwiązanie:**
```tsx
// Zamiast:
<TiltedCard containerWidth="400px" />

// Użyj:
<TiltedCard 
  containerWidth="min(400px, 90vw)" 
  containerHeight="auto"
/>
```

**Lub w CSS:**
```css
.tilted-card-wrapper {
  width: min(40rem, 90vw); /* Max 400px, ale nie większe niż 90% viewport */
  height: auto;
}
```

### 2. Przyciski

**Problem:** Fixed `text-[2.2rem]` za duże na mobile

**Rozwiązanie:**
```tsx
// Użyj CSS Variable zamiast fixed value
<span className="text-[length:var(--h2-font-size)]">
  {children}
</span>
```

W `globals.css`:
```css
@media screen and (max-width: 576px) {
  :root {
    --h2-font-size: 1.8rem; /* Zmniejsz na mobile */
  }
}
```

### 3. Grid Gaps

**SoloLeveling Wzorzec:**
```css
.content {
  gap: 1rem; /* Desktop */
}

@media screen and (max-width: 768px) {
  .content {
    gap: 2rem; /* Mobile - większy gap bo 1 kolumna */
  }
}
```

---

## 🚨 CZERWONE FLAGI (DO NAPRAWY)

### ❌ NIEPRAWIDŁOWE PRAKTYKI W OBECNYM KODZIE

1. **Hardcoded `clamp()` w JSX:**
   ```tsx
   // ❌ ŹLE
   <h1 className="text-[clamp(5rem,14vw,15rem)]">
   
   // ✅ DOBRZE
   <h1 className="text-[length:var(--title-font-size)]">
   ```

2. **Breakpointy XL zamiast LG:**
   ```tsx
   // ❌ ŹLE (xl = 1280px to za dużo)
   <div className="grid-cols-1 xl:grid-cols-2">
   
   // ✅ DOBRZE (lg = 992px jak SoloLeveling)
   <div className="grid-cols-1 lg:grid-cols-2">
   ```

3. **Fixed Widths w Komponentach:**
   ```tsx
   // ❌ ŹLE
   <CardSwap width={400} height={260} />
   
   // ✅ DOBRZE
   <CardSwap 
     width="min(400px, 85vw)" 
     height="auto"
   />
   ```

4. **Brak overflow-x-hidden:**
   ```tsx
   // ❌ ŹLE
   <section className="relative h-screen">
   
   // ✅ DOBRZE
   <section className="relative h-screen overflow-x-hidden">
   ```

---

## 📊 BREAKPOINT STRATEGIE (FINALNE WYTYCZNE)

### Mobile-First Approach (Tailwind)

```css
/* Base (Mobile): 320px+ */
.element {
  font-size: var(--small-font-size);
  padding: 1rem;
}

/* Small Phones: 460px+ */
@media (min-width: 460px) {
  .element {
    font-size: var(--normal-font-size);
  }
}

/* Phones: 576px+ */
@media (min-width: 576px) {
  .element {
    padding: 1.5rem;
  }
}

/* Tablets: 768px+ */
@media (min-width: 768px) {
  .element {
    padding: 2rem;
  }
}

/* Desktop: 992px+ */
@media (min-width: 992px) {
  .element {
    font-size: var(--h2-font-size);
  }
}
```

---

## 🎯 PODSUMOWANIE AKCJI

### DO WDROŻENIA (PRIORYTET 1)

1. **Zaktualizuj `globals.css`:**
   - Dodaj wszystkie CSS Variables z SoloLeveling
   - Dodaj Media Queries dla responsive font scaling
   - Dodaj `overflow-x: hidden` do `html` i `body`

2. **Stwórz `tailwind.config.js`:**
   - Custom breakpoints (460px, 576px, 768px, 992px)
   - Theme extension z CSS Variables
   - Max-width i padding utilities

3. **Refactor `Section.tsx`:**
   - Implementuj `ResponsiveSection` wzorzec
   - Używaj CSS Variables zamiast hardcoded wartości
   - Dodaj overflow protection

4. **Fix komponentów:**
   - `Button.tsx`: Dynamiczne font sizes
   - `TiltedCard.tsx`: Responsive widths (`min()`)
   - `CardSwap.tsx`: Viewport-relative sizing
   - `Hero.tsx`: Zmień breakpointy z `xl:` na `lg:`

5. **Layout overflow:**
   - Dodaj `overflow-x-hidden` do `<html>` w `layout.tsx`
   - Dodaj `-webkit-overflow-scrolling: touch` dla iOS

---

**NASTĘPNY KROK:** Przeczytaj `TODO.md` dla listy zadań do wykonania.
