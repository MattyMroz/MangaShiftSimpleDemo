# 📋 CURRENT ISSUES ANALYSIS

> **GENERATED:** Auto-analiza obecnego stanu projektu
> **PURPOSE:** Identyfikacja wszystkich problemów wymagających naprawy

---

## 🔴 CRITICAL ISSUES (Must Fix Before Production)

### 1. Brak `tailwind.config.js`
**SEVERITY:** 🔴 Critical
**IMPACT:** Używamy domyślnych Tailwind breakpointów, które nie pasują do naszego Design System

**PROBLEM:**
- Breakpointy: `sm:640px, md:768px, lg:1024px, xl:1280px, 2xl:1536px`
- Wzorzec SoloLeveling: `460px, 576px, 768px, 992px, 1200px`
- **KONFLIKT:** Kod używa `xl:grid-cols-2`, co aktywuje się przy 1280px zamiast 992px

**SOLUTION:** Stworzyć `tailwind.config.js` z custom screens

---

### 2. Horizontal Scroll na Mobile (<400px)
**SEVERITY:** 🔴 Critical
**IMPACT:** UX catastrophe - użytkownik musi scrollować w prawo

**DIAGNOSED IN:**
- `AboutSection.tsx`: `CardSwap` z `width={400}` overflow na 375px
- `DemoSection.tsx`: `TiltedCard` z `containerWidth="400px"` overflow
- `Hero.tsx`: Buttony w `flex-row` na małych ekranach

**ROOT CAUSE:**
- Fixed pixel widths zamiast responsive (`min()`, `max-w-[]`)
- Brak `overflow-x-hidden` w layout

**SOLUTION:** 
1. Zmień fixed widths → `min(XXXpx, 85vw)`
2. Dodaj `overflow-x-hidden` do `<html>` i `<body>`

---

### 3. Niespójne Font Scaling
**SEVERITY:** 🔴 Critical
**IMPACT:** Tekst nieczytelny na małych ekranach, za mały na dużych

**EXAMPLES:**
```tsx
// Hero.tsx - H1
text-[clamp(5rem,14vw,15rem)]  // Za duże na mobile

// AboutSection.tsx - H3
text-[3rem]  // Fixed - nie skaluje się

// Button.tsx
text-[2.2rem]  // Za duże na mobile (<460px)
```

**ROOT CAUSE:** Używanie `clamp()` i fixed values zamiast CSS Variables z Media Queries

**SOLUTION:** Zastąpić wszystkie `text-[clamp(...)]` → `text-[length:var(--XXX-font-size)]`

---

### 4. CSS Variables Nie Są Wykorzystywane
**SEVERITY:** 🟠 High
**IMPACT:** Każdy komponent definiuje własne wartości = chaos

**CURRENT STATE:**
- `globals.css` ma CSS Variables, ale są używane tylko przez kilka komponentów
- Większość używa hardcoded Tailwind values

**MISSING VARIABLES:**
```css
/* Potrzebne, ale brakujące: */
--title-font-size
--subtitle-font-size
--section-title-font-size
--section-subtitle-font-size
--container-width: 120rem
--container-padding: 1.5rem
--section-padding-top: 10rem
```

**SOLUTION:** Rozbudować `globals.css` + dodać Media Queries

---

## 🟠 HIGH PRIORITY ISSUES

### 5. Section Component - Niespójny Padding
**SEVERITY:** 🟠 High
**IMPACT:** Sekcje wyglądają chaotycznie, różne odstępy

**CURRENT CODE:**
```tsx
// Section.tsx
className="px-6 pt-[14rem] md:pt-[18rem] pb-16"
```

**PROBLEMS:**
- `px-6` = tylko 6px padding (za mało)
- `pt-[14rem]` vs `pt-[18rem]` - arbitralne wartości
- Brak adaptacji do wzorca SoloLeveling

**WZORZEC SOLOLEVELING:**
```css
.section {
  margin-bottom: 10rem;  /* Odległość między sekcjami */
}

.container {
  max-width: 120rem;
  padding: 0 1.5rem;
}
```

**SOLUTION:** Refactor do responsive pattern z CSS Variables

---

### 6. Grid Breakpoints - Złe Wartości
**SEVERITY:** 🟠 High
**IMPACT:** Layout przełącza się na 1 kolumnę za późno (1280px zamiast 992px)

**FOUND IN:**
- `AboutSection.tsx`: `grid-cols-1 xl:grid-cols-2`
- `DemoSection.tsx`: `grid-cols-1 xl:grid-cols-2`

**SHOULD BE:** `grid-cols-1 xl:grid-cols-2` (gdzie xl = 992px po fixie tailwind.config)

---

### 7. CardSwap - Fixed Dimensions
**SEVERITY:** 🟠 High
**IMPACT:** Overflow na mobile, nie skaluje się

**CURRENT:**
```tsx
<CardSwap
  width={400}
  height={260}
/>
```

**SOLUTION:** Zmienić typ prop na `number | string` i użyć `"min(400px, 85vw)"`

---

### 8. TiltedCard - Fixed Dimensions
**SEVERITY:** 🟠 High
**IMPACT:** To samo co CardSwap

**CURRENT:**
```tsx
<TiltedCard
  containerWidth="400px"
  containerHeight="500px"
/>
```

**SOLUTION:** `containerWidth="min(400px, 85vw)"`

---

## 🟡 MEDIUM PRIORITY ISSUES

### 9. Brak Overflow Control w Layout
**SEVERITY:** 🟡 Medium
**IMPACT:** Animacje mogą wykraczać poza ekran

**CURRENT:** `layout.tsx` nie ma `overflow-x-hidden`

**SOLUTION:**
```tsx
<html className="overflow-x-hidden">
<body className="overflow-x-hidden">
```

---

### 10. Button - Responsive Padding
**SEVERITY:** 🟡 Medium
**IMPACT:** Buttony za duże na mobile

**CURRENT:**
```tsx
className="px-12 py-5"  // Fixed
```

**SOLUTION:**
```tsx
className="px-8 py-4 lg:px-12 lg:py-5"
```

---

### 11. Hero - Button Layout Mobile
**SEVERITY:** 🟡 Medium
**IMPACT:** Buttony w rzędzie na małych ekranach = złe UX

**CURRENT:**
```tsx
<div className="flex flex-col sm:flex-row">
```

**PROBLEM:** `sm:` to 640px (po fixie 460px), ale lepiej `md:` (576px)

---

### 12. Brak `loading="lazy"` na Obrazach
**SEVERITY:** 🟡 Medium
**IMPACT:** Performance - ładowanie obrazów poniżej fold spowalnia LCP

**FOUND:** Sprawdzić wszystkie użycia `next/image` i dodać `loading="lazy"` (poza Hero)

---

## 🟢 LOW PRIORITY (Nice-to-Have)

### 13. Brak `COMPONENT_GUIDELINES.md`
**SEVERITY:** 🟢 Low
**IMPACT:** Developer onboarding - nowi devs nie wiedzą jak pisać komponenty

**SOLUTION:** Stworzony w tym taskiem ✅

---

### 14. README.md - Brak Sekcji o Design System
**SEVERITY:** 🟢 Low
**IMPACT:** Dokumentacja niepełna

**SOLUTION:** Dodać sekcję "Responsive Design System"

---

### 15. Brak Unit Tests dla Komponentów
**SEVERITY:** 🟢 Low
**IMPACT:** Ryzyko regresji podczas refactorów

**FUTURE WORK:** Dodać Vitest + tests dla `Section.tsx`, `Button.tsx`

---

## 📊 PODSUMOWANIE STATYSTYK

| Kategoria | Count | % Total |
|-----------|-------|---------|
| 🔴 Critical | 4 | 27% |
| 🟠 High | 4 | 27% |
| 🟡 Medium | 4 | 27% |
| 🟢 Low | 3 | 20% |
| **TOTAL** | **15** | **100%** |

---

## 🎯 RECOMMENDED FIX ORDER

1. **Zadanie 1.1:** `tailwind.config.js` (Odblokuje poprawne breakpointy)
2. **Zadanie 1.2:** Rozbuduj `globals.css` (CSS Variables + Media Queries)
3. **Zadanie 1.3:** Fix `layout.tsx` overflow
4. **Zadanie 2.3:** Fix `Hero.tsx` (biggest visual impact)
5. **Zadanie 2.4 + 2.5:** Fix `TiltedCard` + `CardSwap` (eliminuje horizontal scroll)
6. **Zadanie 2.1:** Refactor `Section.tsx`
7. **Zadanie 2.2:** Fix `Button.tsx`
8. **Zadanie 2.6:** Fix grid breakpoints w sekcjach
9. **Zadanie 3.1-3.3:** Testing & Validation

---

**NEXT ACTION:** Start z `TODO.md` → Zadanie 1.1
