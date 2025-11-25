# 🎯 RESPONSIVE DESIGN SYSTEM - DOKUMENTACJA WDROŻENIA

> **ŹRÓDŁO:** Reverse engineering z `external/SoloLeveling/assets/css/styles.css`
> **CEL:** Stworzenie spójnego, skalowalnego systemu responsywnego dla Next.js

---

## 📐 ANALIZA OBECNEGO PROBLEMU

### Zdiagnozowane Błędy Krytyczne

1. **BRAK SZTYWNEJ STRUKTURY SEKCJI**
   - Obecny `Section.tsx`: Niespójne paddingi (`px-6`, `pt-[14rem]`)
   - Brak unifikacji w gridzie (czasem `grid-cols-1 xl:grid-cols-2`, czasem brak)
   - Overflow mobilny przez fixed `clamp()` wartości

2. **BŁĘDNE SKALOWANIE TYPOGRAFII**
   - Hero: `text-[clamp(5rem,14vw,15rem)]` - zbyt agresywne na mobile
   - AboutSection: Fixed `text-[3rem]` - nie skaluje się
   - Button: Fixed `text-[2.2rem]` - za duży na małych ekranach

3. **OVERFLOW PROBLEMÓW**
   - `CardSwap`: Fixed `width={400}` powoduje horizontal scroll na <420px
   - `TiltedCard`: `containerWidth="400px"` nie adaptuje się
   - Brak `overflow-x-hidden` w layoutach

4. **CHAOTYCZNE BREAKPOINTY**
   - Tailwind defaults: `sm:640px, md:768px, lg:1024px, xl:1280px`
   - SoloLeveling używa: `992px, 768px, 576px, 460px, 390px, 320px`
   - **KONFLIKT:** Kod używa `xl:` (1280px) gdzie powinno być `lg:` (~992px)

5. **BRAK DESIGN TOKENS**
   - Każdy komponent definiuje własne wartości
   - `globals.css` ma CSS Variables, ale nie są używane konsekwentnie
   - Brak centralizacji odstępów, promieni, cieni

---

## 🏗️ WZORZEC Z SOLOLVELING (DO WDROŻENIA)

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
