# ✅ LISTA ZADAŃ - NAPRAWA RESPONSYWNOŚCI I SPÓJNOŚCI

> **STATUS:** ✅ **ZAKOŃCZONE - MOBILE OPTIMIZATION**
> **DATA UKOŃCZENIA:** 2024-11-29
> **PRIORYTET:** Krytyczny
> **CZAS WYKONANIA:** ~2 godziny

---

## 🎉 UKOŃCZONE: MOBILE OPTIMIZATION

### ✅ Optymalizacja Mobilna (2024-11-29)

**WYKONANE ZADANIA:**

1. **✅ Instalacja react-device-detect**
   - Biblioteka do wykrywania urządzeń mobilnych vs desktop
   - Brak podziału na tablet/telefon (uproszczone podejście)

2. **✅ GlassSurface - Optymalizacja Mobile**
   - Desktop: Pełny efekt SVG z displacement map
   - Mobile: Prosty blur + obódka + cień
   - Naprawiono problem z białym tłem na iOS/Safari
   - Wyłączony SVG filter na mobile
   - **Plik:** `src/shared/ui/GlassSurface/GlassSurface.tsx`

3. **✅ SplashCursor - Redukcja Renderowania**
   - Zmniejszone ustawienia na mobile:
     - SIM_RESOLUTION: 128 → 64 (-50%)
     - DYE_RESOLUTION: 1440 → 512 (-64%)
     - CAPTURE_RESOLUTION: 512 → 256 (-50%)
     - PRESSURE_ITERATIONS: 20 → 10 (-50%)
     - SHADING: wyłączone
   - Naprawiono błąd przeskakiwania canvas przy resize
   - **Plik:** `src/shared/ui/SplashCursor/SplashCursor.tsx`

4. **✅ LightRays - Wyłączenie na Mobile**
   - Całkowicie wyłączony na urządzeniach mobilnych
   - `display: none` dla mobile
   - WebGL nie inicjalizuje się
   - **Plik:** `src/shared/ui/LightRays/LightRays.tsx`

5. **✅ LazySection - Intersection Observer**
   - Nowy komponent dla lazy loading
   - Komponenty ładują się tylko gdy są widoczne
   - Zapamiętywanie czy sekcja była widoczna
   - **Plik:** `src/shared/ui/LazySection/LazySection.tsx`

6. **✅ Zastosowanie LazySection**
   - AboutSection: CardSwap w LazySection
   - DemoSection: TiltedCard w LazySection
   - Komponenty poza viewport nie działają w tle

**KORZYŚCI:**
- 📱 GlassSurface: ~70% mniej obliczeń na mobile
- 🎨 SplashCursor: ~60% redukcja rozdzielczości
- ⚡ LightRays: 100% oszczędność (wyłączony)
- 🔋 LazySection: Komponenty ładują się na żądanie

**COMMIT:**
```
feat: Optimize mobile performance with react-device-detect
c644cb5
```

**DOKUMENTACJA:**
- `MOBILE_OPTIMIZATION.md` - Pełna dokumentacja zmian

---

## 🚀 POZOSTAŁE ZADANIA - RESPONSYWNOŚĆ

> **NOTATKA:** Optymalizacja mobilna została wykonana. Poniżej pozostałe zadania z oryginalnego TODO.

---

## 🚀 FAZA 1: FUNDAMENTY (PRIORYTET: ULTRA-HIGH)

### ✅ Zadanie 1.1: Stwórz `tailwind.config.js`

**OPIS:** Obecnie brak pliku konfiguracyjnego Tailwind. Musimy go stworzyć z custom breakpointami i theme extensions.

**AKCJA:**
1. Stwórz `tailwind.config.js` w root projektu
2. Zdefiniuj custom screens dopasowane do SoloLeveling:
   ```javascript
   screens: {
     'xs': '320px',
     'sm': '460px',
     'md': '576px',
     'lg': '768px',
     'xl': '992px',
     '2xl': '1200px',
   }
   ```
3. Dodaj theme extensions dla CSS Variables
4. Dodaj custom font sizes, spacing, shadows

**PLIKI DO UTWORZENIA:**
- `tailwind.config.js`

**WALIDACJA:**
- [ ] Plik istnieje w root
- [ ] Breakpointy odpowiadają SoloLeveling
- [ ] Build Next.js przechodzi bez błędów

---

### ✅ Zadanie 1.2: Rozbuduj `globals.css`

**OPIS:** Obecny `globals.css` ma podstawowe CSS Variables, ale brakuje responsive scaling i overflow control.

**AKCJA:**
1. **Dodaj brakujące CSS Variables:**
   ```css
   :root {
     /* Typography (z SoloLeveling) */
     --title-font-size: 16rem;
     --subtitle-font-size: 3rem;
     --section-title-font-size: 5rem;
     --section-subtitle-font-size: 2.2rem;
     --h1-font-size: 3.2rem;
     --h2-font-size: 2.4rem;
     --h3-font-size: 1.872rem;
     --normal-font-size: 1.6rem;
     --small-font-size: 1.328rem;
     --tiny-font-size: 1.072rem;
     
     /* Layout */
     --container-width: 120rem;
     --container-padding: 1.5rem;
     
     /* Spacing */
     --section-margin-bottom: 10rem;
     --section-padding-top: 10rem;
     --section-padding-bottom: 10rem;
   }
   ```

2. **Dodaj Media Queries dla responsive fonts:**
   ```css
   @media screen and (max-width: 992px) {
     html { font-size: 55%; }
   }
   
   @media screen and (max-width: 768px) {
     :root {
       --title-font-size: 11.5rem;
       --subtitle-font-size: 2.3rem;
     }
   }
   
   @media screen and (max-width: 576px) {
     :root {
       --title-font-size: 8rem;
       --subtitle-font-size: 1.75rem;
     }
   }
   
   @media screen and (max-width: 460px) {
     :root { 
       --title-font-size: 7rem;
       --h1-font-size: 2.4rem;
       --h2-font-size: 1.8rem;
     }
   }
   
   @media screen and (max-width: 320px) {
     :root { --title-font-size: 6rem; }
   }
   ```

3. **Dodaj overflow control:**
   ```css
   html {
     overflow-x: hidden;
     -webkit-overflow-scrolling: touch;
   }
   
   body {
     overflow-x: hidden;
     -webkit-overflow-scrolling: touch;
   }
   ```

4. **Dodaj dark mode adjustments dla nowych zmiennych**

**PLIKI DO MODYFIKACJI:**
- `src/app/globals.css`

**WALIDACJA:**
- [ ] CSS Variables dostępne w DevTools
- [ ] Font scaling działa na różnych rozdzielczościach
- [ ] Brak horizontal scroll na mobile (testuj na <400px)

---

### ✅ Zadanie 1.3: Fix `layout.tsx` - Overflow Control

**OPIS:** Root layout musi mieć overflow control na poziomie `<html>` i `<body>`.

**AKCJA:**
1. Otwórz `src/app/layout.tsx`
2. Dodaj klasę do `<html>`:
   ```tsx
   <html lang="pl" className="overflow-x-hidden">
   ```
3. Dodaj klasę do `<body>`:
   ```tsx
   <body className="overflow-x-hidden">
   ```

**PLIKI DO MODYFIKACJI:**
- `src/app/layout.tsx`

**WALIDACJA:**
- [ ] Brak horizontal scroll w DevTools na 375px width
- [ ] Animacje nie powodują overflow

---

## 🔨 FAZA 2: REFACTOR KOMPONENTÓW (PRIORYTET: HIGH)

### ✅ Zadanie 2.1: Refactor `Section.tsx` → `ResponsiveSection.tsx`

**OPIS:** Obecny `Section.tsx` ma niespójne paddingi i brak grid control. Trzeba go przebudować.

**AKCJA:**
1. **Backup obecnego pliku:** Skopiuj `Section.tsx` → `Section.old.tsx`
2. **Przepisz komponent według wzorca:**
   ```tsx
   interface ResponsiveSectionProps {
     id: string;
     title?: string;
     children: ReactNode;
     gridCols?: 1 | 2;
     isHero?: boolean;
     className?: string;
   }
   
   export const Section = ({
     id,
     title,
     children,
     gridCols = 2,
     isHero = false,
     className = ""
   }: ResponsiveSectionProps) => {
     return (
       <section
         id={id}
         className={`
           w-full overflow-x-hidden
           ${isHero ? 'pt-0' : 'pt-[var(--section-padding-top)]'}
           pb-[var(--section-padding-bottom)]
           px-[var(--container-padding)]
           ${className}
         `}
       >
         <div className="max-w-[var(--container-width)] mx-auto w-full">
           {title && (
             <h2 className="
               font-bold text-center 
               mb-12
               text-[length:var(--section-title-font-size)]
             ">
               {title}
             </h2>
           )}
           <div className={`
             grid gap-4 lg:gap-8
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

**PLIKI DO MODYFIKACJI:**
- `src/shared/ui/Section/Section.tsx`

**WALIDACJA:**
- [ ] Hero section ma `pt-0`
- [ ] Pozostałe sekcje mają spójny padding-top
- [ ] Grid zmienia się na 1 kolumnę poniżej 992px
- [ ] Brak overflow na mobile

---

### ✅ Zadanie 2.2: Fix `Button.tsx` - Responsive Font Size

**OPIS:** Button używa fixed `text-[2.2rem]`, co jest za duże na mobile.

**AKCJA:**
1. Zamień:
   ```tsx
   // ❌ PRZED
   <span className="text-[2.2rem] font-bold">
   
   // ✅ PO
   <span className="text-[length:var(--h2-font-size)] font-bold">
   ```
2. Zmień padding na responsive:
   ```tsx
   // ❌ PRZED
   className="px-12 py-5"
   
   // ✅ PO
   className="px-8 py-4 lg:px-12 lg:py-5"
   ```

**PLIKI DO MODYFIKACJI:**
- `src/shared/ui/Button/Button.tsx`

**WALIDACJA:**
- [ ] Button skaluje się na mobile (testuj <460px)
- [ ] Padding nie powoduje overflow
- [ ] Text pozostaje czytelny

---

### ✅ Zadanie 2.3: Fix `Hero.tsx` - Breakpoints i Typography

**OPIS:** Hero używa błędnych breakpointów (`xl:` zamiast `lg:`) i fixed clamp wartości.

NIEEEEE ma być fixed clamp dlatego że tak jest ładniej hero pahe jest specjalnie wiec nie trzeba tego zmienić 

**AKCJA:**
NIC!!!!!!

4. **Dodaj overflow control:**
   ```tsx
   <section className="relative h-screen flex flex-col items-center overflow-hidden">
   ```

**PLIKI DO MODYFIKACJI:**
- `src/widgets/Hero/ui/Hero.tsx`

**WALIDACJA:**

---

### ✅ Zadanie 2.4: Fix `TiltedCard.tsx` - Responsive Width

**OPIS:** TiltedCard używa fixed `containerWidth="400px"`, co powoduje overflow na małych ekranach.

**AKCJA:**
1. Znajdź wszystkie użycia `TiltedCard` (prawdopodobnie w `DemoSection.tsx`)
2. Zamień:
   ```tsx
   // ❌ PRZED
   <TiltedCard
     containerHeight="500px"
     containerWidth="400px"
   />
   
   // ✅ PO
   <TiltedCard
     containerHeight="min(500px, 80vh)"
     containerWidth="min(400px, 85vw)"
   />
   ```

3. **LUB** jeśli komponent nie akceptuje `min()` - dodaj wrapper:
   ```tsx
   <div className="w-full max-w-[40rem]">
     <TiltedCard ... />
   </div>
   ```

**PLIKI DO MODYFIKACJI:**
- `src/widgets/DemoSection/ui/DemoSection.tsx`
- Ewentualnie: `src/shared/ui/TiltedCard/TiltedCard.tsx`

**WALIDACJA:**
- [ ] Card mieści się na ekranie 375px width
- [ ] Card skaluje się proporcjonalnie
- [ ] Overlay content nie overflow

---

### ✅ Zadanie 2.5: Fix `CardSwap.tsx` - Responsive Sizing

**OPIS:** CardSwap używa fixed `width={400}`, co powoduje overflow.

**AKCJA:**
1. Znajdź użycie w `AboutSection.tsx`
2. Zmień:
   ```tsx
   // ❌ PRZED
   <CardSwap
     width={400}
     height={260}
   />
   
   // ✅ PO
   <CardSwap
     width="min(400px, 85vw)"
     height="auto"
   />
   ```

3. **JEŚLI** komponent wymaga number - zmień typ prop:
   ```tsx
   interface CardSwapProps {
     width?: number | string;  // Dodaj string
     height?: number | string;
   }
   ```

**PLIKI DO MODYFIKACJI:**
- `src/widgets/AboutSection/ui/AboutSection.tsx`
- Ewentualnie: `src/shared/ui/CardSwap/CardSwap.tsx`

**WALIDACJA:**
- [ ] Cards nie powodują horizontal scroll
- [ ] Animacja działa na mobile
- [ ] Text wewnątrz kart jest czytelny

---

### ✅ Zadanie 2.6: Fix `AboutSection.tsx` i `DemoSection.tsx` - Grid Breakpoints

**OPIS:** Obie sekcje używają `xl:grid-cols-2`, co aktywuje się dopiero przy 1280px. Powinno być `xl:grid-cols-2` (992px).

**AKCJA:**
1. **AboutSection.tsx:**
   ```tsx
   // ❌ PRZED
   <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-32">
   
   // ✅ PO
   <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16">
   ```

2. **DemoSection.tsx:**
   ```tsx
   // ❌ PRZED
   <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-32">
   
   // ✅ PO
   <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16">
   ```

3. **Responsive text sizes:**
   ```tsx
   // AboutSection h3
   // ❌ PRZED
   <h3 className="text-[3rem]">
   
   // ✅ PO
   <h3 className="text-[length:var(--h1-font-size)]">
   ```

   ```tsx
   // Paragraphs
   // ❌ PRZED
   <p className="text-[1.8rem]">
   
   // ✅ PO
   <p className="text-[length:var(--h3-font-size)]">
   ```

**PLIKI DO MODYFIKACJI:**
- `src/widgets/AboutSection/ui/AboutSection.tsx`
- `src/widgets/DemoSection/ui/DemoSection.tsx`

**WALIDACJA:**
- [ ] Grid przechodzi na 1 kolumnę przy <992px
- [ ] Fonty skalują się na mobile
- [ ] Gap między elementami jest spójny

---

## 🧪 FAZA 3: TESTOWANIE I WALIDACJA (PRIORYTET: MEDIUM)

### ✅ Zadanie 3.1: Responsive Testing Matrix

**OPIS:** Testuj aplikację na wszystkich breakpointach.

**AKCJA:**
1. Otwórz DevTools → Device Toolbar
2. Testuj na każdym breakpoincie:
   - **320px** (iPhone SE)
   - **375px** (iPhone X)
   - **390px** (iPhone 12/13)
   - **412px** (Pixel)
   - **460px** (Large phones)
   - **576px** (Small tablets)
   - **768px** (iPad Portrait)
   - **992px** (iPad Landscape)
   - **1200px** (Desktop)
   - **1920px** (Large Desktop)

3. **Sprawdź na każdej rozdzielczości:**
   - [ ] Brak horizontal scroll
   - [ ] Wszystkie elementy widoczne
   - [ ] Text czytelny (nie za mały, nie za duży)
   - [ ] Buttony klikaln (min 44x44px)
   - [ ] Grid przechodzi na 1/2 kolumny w odpowiednich miejscach

**NARZĘDZIA:**
- Chrome DevTools
- Responsively App (opcjonalnie)

---

### ✅ Zadanie 3.2: Accessibility (A11y) Validation

**OPIS:** Upewnij się, że zmiany nie złamały accessibility.

**AKCJA:**
1. Zainstaluj extension: axe DevTools
2. Uruchom audit na każdej sekcji
3. Sprawdź:
   - [ ] Kontrast tekstu ≥ 4.5:1 (WCAG AA)
   - [ ] Focus indicators widoczne (Tab navigation)
   - [ ] Semantic HTML (nie `<div>` zamiast `<button>`)
   - [ ] ARIA labels gdzie potrzebne

**FIX JEŚLI POTRZEBA:**
- Dodaj `aria-label` do ikon SVG
- Dodaj `focus-visible:ring-2` do buttonów

---

### ✅ Zadanie 3.3: Performance Check

**OPIS:** Sprawdź czy zmiany nie wpłynęły negatywnie na wydajność.

**AKCJA:**
1. Otwórz Lighthouse (Chrome DevTools)
2. Uruchom audit dla:
   - Mobile
   - Desktop
3. Sprawdź metryki:
   - [ ] LCP < 2.5s
   - [ ] CLS < 0.1
   - [ ] FID/INP < 100ms

**OPTYMALIZACJA JEŚLI POTRZEBA:**
- Dodaj `loading="lazy"` do obrazów poniżej fold
- Użyj `next/image` zamiast `<img>`

---

## 📄 FAZA 4: DOKUMENTACJA (PRIORYTET: LOW)

### ✅ Zadanie 4.1: Stwórz `COMPONENT_GUIDELINES.md`

**OPIS:** Dokument opisujący jak tworzyć nowe komponenty zgodne z Design System.

**AKCJA:**
1. Stwórz plik w root: `COMPONENT_GUIDELINES.md`
2. Zawartość:
   - Jak używać CSS Variables
   - Kiedy używać których breakpointów
   - Template dla nowego komponentu
   - Checklist przed commitem

**PLIKI DO UTWORZENIA:**
- `COMPONENT_GUIDELINES.md`

---

### ✅ Zadanie 4.2: Update `README.md`

**OPIS:** Zaktualizuj README o sekcję "Responsive Design System".

**AKCJA:**
1. Dodaj sekcję:
   ```markdown
   ## 📐 Responsive Design System
   
   Ten projekt używa custom Design System bazowanego na Next.js + Tailwind CSS.
   
   **Kluczowe założenia:**
   - Mobile-First approach
   - CSS Variables dla typografii i spacingu
   - Custom breakpoints: 320px, 460px, 576px, 768px, 992px, 1200px
   - Overflow protection na wszystkich sekcjach
   
   **Dokumentacja:**
   - [RESPONSIVE_DESIGN_SYSTEM.md](./RESPONSIVE_DESIGN_SYSTEM.md) - Pełna dokumentacja
   - [COMPONENT_GUIDELINES.md](./COMPONENT_GUIDELINES.md) - Wytyczne dla developerów
   ```

**PLIKI DO MODYFIKACJI:**
- `README.md`

---

## 🎯 PODSUMOWANIE CHECKLISTY

### Must-Have (Przed Deploymentem)

- [ ] `tailwind.config.js` istnieje z custom breakpoints
- [ ] `globals.css` ma wszystkie CSS Variables
- [ ] `globals.css` ma Media Queries dla responsive fonts
- [ ] `layout.tsx` ma `overflow-x-hidden`
- [ ] `Section.tsx` używa CSS Variables
- [ ] `Button.tsx` ma responsive font size
- [ ] `Hero.tsx` używa CSS Variables zamiast clamp
- [ ] `TiltedCard` nie powoduje overflow
- [ ] `CardSwap` nie powoduje overflow
- [ ] Wszystkie sekcje używają poprawnych breakpointów (xl: = 992px)
- [ ] Brak horizontal scroll na 320px width
- [ ] Grid responsive działa (2 cols → 1 col przy <992px)

### Nice-to-Have (Iteracyjne)

- [ ] Lighthouse Performance > 90
- [ ] Accessibility audit passed (axe DevTools)
- [ ] `COMPONENT_GUIDELINES.md` stworzony
- [ ] `README.md` zaktualizowany
- [ ] Unit testy dla `Section.tsx`

---

## 📊 TRACKING PROGRESS

**Start Date:** _[DO UZUPEŁNIENIA]_
**Target Completion:** _[DO UZUPEŁNIENIA]_

| Faza | Status | Czas | Notatki |
|------|--------|------|---------|
| FAZA 1: Fundamenty | ⏳ Pending | - | - |
| FAZA 2: Komponenty | ⏳ Pending | - | - |
| FAZA 3: Testowanie | ⏳ Pending | - | - |
| FAZA 4: Dokumentacja | ⏳ Pending | - | - |

**Legend:**
- ⏳ Pending
- 🔄 In Progress
- ✅ Done
- ❌ Blocked

---

**NEXT STEP:** Rozpocznij od **Zadanie 1.1** (tailwind.config.js)
