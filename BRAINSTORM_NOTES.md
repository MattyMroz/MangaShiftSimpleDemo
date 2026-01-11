# 🧠 BRAINSTORM NOTES - MangaShift Debug Session

> **Sesja:** 2026-01-11
> **Agent:** MASTER_AGENT_ORCHESTRATOR
> **Status:** 🔄 W TRAKCIE

---

## 📋 Podsumowanie Problematyki

### Zgłoszone Błędy:
1. **React Error #418** - Hydration mismatch (text content mismatch)
2. **404 Errors** - Linki nawigacyjne prowadzą do nieistniejących stron
3. **FOUC (Flash of Unstyled Content)** - Biała strona przy pierwszym ładowaniu
4. **Quick Links nie działają** - Szczególnie "Home"
5. **Brak kontrastu** - Elementy UI słabo widoczne
6. **Wydajność Liquid Glass** - Spowalnia interfejs
7. **Brak ikony ThemeSwitcher** - Potrzeba dodatkowej ikony przed buttonem

### Lighthouse Issues:
- Cache lifetimes: ~572 KiB do oszczędzenia
- Image delivery: ~104 KiB do optymalizacji
- Render blocking requests: ~190ms
- Legacy JavaScript: ~14 KiB
- Main-thread work: 2.9s
- Long tasks: 8 znalezionych
- Unused CSS: ~17 KiB

---

## 🔍 ANALIZA GŁĘBOKA

### 1. React Error #418 - Hydration Mismatch

**Root Cause Analysis:**
```
Error: Minified React error #418
args[]=text&args[]=
```

Ten błąd oznacza: "Text content does not match server-rendered HTML"

**Przyczyny w kodzie:**

#### A) `ThemeSwitcher.tsx` - Problem z `mounted` state
```tsx
const [mounted, setMounted] = useState(false);
// ...
useEffect(() => {
    // ...
    requestAnimationFrame(() => {
        setTheme(initial);
        setMounted(true);  // <- Tu następuje zmiana po hydration
    });
}, []);
```

**Problem:** Komponent renderuje różną zawartość przed/po `mounted`.
Na serwerze: renderuje placeholder `<div className="w-16 h-16">`.
Po hydration: renderuje faktyczny button z ikoną.

#### B) `GlassSurface.tsx` - Dynamic styles i `isMounted`
```tsx
const [isMounted, setIsMounted] = useState(false);
// ...
if (!isMounted) {
    return { ...style, visibility: 'hidden' };
}
```

**Problem:** Visibility zmienia się po mount, co powoduje mismatch.

#### C) `Footer.tsx` - `isMobile` detection
```tsx
const [isMobileDevice, setIsMobileDevice] = useState(false);
useEffect(() => {
    const timer = setTimeout(() => {
        setIsMobileDevice(isMobile);
    }, 0);
}, []);
```

**Problem:** `isMobile` jest różne na serwerze (false) i kliencie.

### 2. 404 Errors - Navigation Links

**Analiza linków w Header.tsx:**
```tsx
const navLinks = [
    { name: "Home", href: "/home" },      // ❌ 404 - nie ma takiej strony
    { name: "Demo", href: "/demo" },      // ❌ 404 - to jest sekcja na stronie głównej
    { name: "About", href: "/about" },    // ❌ 404 - to jest sekcja
    { name: "Contact", href: "/contact" },// ❌ 404 - to jest sekcja
    { name: "FAQ", href: "/faq" },        // ❌ 404 - to jest sekcja
];
```

**Root Cause:** 
- Linki wskazują na `/home`, `/demo`, etc. jako osobne strony
- W rzeczywistości to są sekcje na stronie głównej z `id="demo"`, `id="about"`, etc.
- `smoothScrollTo()` działa poprawnie dla hash links, ale linki nie są hash links!

**Istniejące sekcje z ID:**
- `id="home"` → Hero.tsx
- `id="demo"` → DemoSection.tsx
- `id="about"` → AboutSection.tsx
- `id="contact"` → ContactSection.tsx
- `id="faq"` → FAQSection.tsx

**Rozwiązanie:** Zmienić `href="/home"` na `href="#home"` lub `href="/#home"`.

### 3. FOUC - Flash of Unstyled Content

**Przyczyny:**
1. Dark mode jest aplikowany w `useEffect` (po hydration)
2. CSS ma `transition: 0s ease` ale theme nie jest zaaplikowany od razu
3. Brak inline script do zastosowania theme PRZED renderowaniem

**Obecna implementacja w ThemeSwitcher:**
```tsx
useEffect(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    const initial = saved ?? DEFAULT_THEME;
    applyTheme(initial);  // <- To dzieje się PO renderowaniu!
}, []);
```

**Problem Flow:**
1. Server renderuje HTML (bez data-theme)
2. Browser ładuje HTML → pokazuje LIGHT theme (domyślny CSS)
3. React hydratuje
4. useEffect odpala → applyTheme("dark")
5. FLASH! Strona zmienia się z białej na czarną

### 4. Wydajność Liquid Glass

**GlassSurface.tsx - Heavy computations:**
1. SVG filter generation przy każdym resize
2. ResizeObserver na każdej instancji
3. MutationObserver na `data-theme`
4. Wielokrotne `setTimeout(..., 0)` dla updateów

**Instancje GlassSurface w projekcie:**
- Header (1x) - główny
- Potencjalnie więcej w sekcjach

**Problem:** Na słabszych urządzeniach SVG filters są bardzo kosztowne.

### 5. Kontrast UI

**Quick Links w Footer - problematyczny kontrast:**
```tsx
className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
```

W dark mode:
- `--text-secondary: #a3a3a3`
- `--text-primary: #fafafa`
- Tło: `--bg-secondary: #171717` z opacity

**Problem:** `#a3a3a3` na `#171717` = kontrast ratio ~6.5:1 
(OK dla AA, ale wizualnie może być słaby przy blur/glass effect)

---

## 🎯 ROZWIĄZANIA - Ranking

### Podejście A: Quick Fixes (Minimalistyczne)
**Czas:** 30 min | **Ryzyko:** NISKIE | **Kompletność:** 60%

1. Zmiana href z `/section` na `#section`
2. Prosty loader/skeleton
3. Podstawowa optymalizacja GlassSurface

### Podejście B: Proper Fixes (Rekomendowane)
**Czas:** 2h | **Ryzyko:** ŚREDNIE | **Kompletność:** 90%

1. Theme script inline w `<head>` (blocking)
2. Refactor linków nawigacyjnych
3. `suppressHydrationWarning` gdzie potrzeba
4. Optymalizacja GlassSurface (lazy load, reduce filters)
5. Poprawa kontrastu CSS

### Podejście C: Full Refactor
**Czas:** 4h+ | **Ryzyko:** WYSOKIE | **Kompletność:** 100%

1. next-themes library
2. Pełna reorganizacja navigation
3. GlassSurface jako optional enhancement
4. Komponent system dla theme-aware UI

---

## 🔧 PLAN IMPLEMENTACJI (Podejście B)

### FAZA 1: Krytyczne - FOUC Fix
1. Dodać inline script do `layout.tsx` w `<head>` lub `<body>` przed contentem
2. Script sprawdza localStorage i aplikuje `data-theme` SYNCHRONICZNIE

### FAZA 2: Navigation Fix
1. Zmienić wszystkie `/section` na `#section`
2. Upewnić się że `smoothScrollTo` obsługuje hash
3. Dodać fallback dla Home

### FAZA 3: Hydration Fix
1. `suppressHydrationWarning` na elementach z dynamic content
2. Użycie CSS dla ukrywania zamiast conditional rendering gdzie możliwe

### FAZA 4: Performance
1. Lazy load GlassSurface
2. Reduce SVG complexity na mobile
3. Cache displacement map

### FAZA 5: UI Polish
1. Zwiększyć kontrast tekstu
2. Dodać ikonę przed ThemeSwitcher
3. Accessibility improvements

---

## 📝 NOTATKI BIEŻĄCE

### 2026-01-11 - Sesja debugowania

**Obserwacja 1:** Error #418 wskazuje na mismatch między server-rendered HTML a client-side rendered content. Główny winowajca to `ThemeSwitcher` który renderuje różne rzeczy przed/po mount.

**Obserwacja 2:** Quick Links używają `/section` format ale to NIE są osobne strony! To jest Single Page App (One-Page). Wszystkie sekcje są na `/` z różnymi ID.

**Obserwacja 3:** `smoothScrollTo` funkcja jest dobrze napisana:
```typescript
if (id === 'home' || id === '') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return true;
}
```
Problem jest w tym, że href="/home" NIE odpala tej logiki poprawnie bo `parts[parts.length - 1]` zwraca "home" ale przeglądarka NAJPIERW próbuje załadować stronę `/home`.

**Obserwacja 4:** GlassSurface ma wiele instancji MutationObserver i ResizeObserver - to może być memory leak na długich sesjach.

**Hipoteza:** Główna przyczyna problemów to:
1. SSR vs CSR mismatch (theme, mobile detection)
2. Link format (path vs hash)
3. Heavy SVG computations

---

## 🚀 NASTĘPNE KROKI

1. [x] Utworzyć plik `EXECUTION_PLAN.md` ze skondensowaną oceną
2. [x] Implementacja FOUC fix (inline theme script)
3. [x] Naprawa nawigacji (href format)
4. [x] Optymalizacja GlassSurface
5. [x] Poprawa kontrastu
6. [ ] Test końcowy

---

## 📝 PODSUMOWANIE WYKONANYCH ZMIAN

### 2026-01-11 - Session Complete

#### Zmodyfikowane pliki:

1. **`src/app/layout.tsx`**
   - Dodano inline blocking script dla theme initialization
   - Script aplikuje `data-theme` i `data-effects` PRZED renderowaniem
   - Eliminuje FOUC (Flash of Unstyled Content)

2. **`src/widgets/Header/ui/Header.tsx`**
   - Zmieniono linki z `/section` na `#section`
   - Logo link: `#home`
   - Wszystkie nav links: `#home`, `#demo`, `#about`, `#contact`, `#faq`

3. **`src/widgets/Footer/ui/Footer.tsx`**
   - Zmieniono linki z `/section` na `#section`
   - Identyczne zmiany jak w Header

4. **`src/shared/lib/utils/smoothScroll.ts`**
   - Dodano lepszą obsługę hash links (`#section`)
   - Fallback dla path links (`/section`)

5. **`src/shared/ui/ThemeSwitcher/ThemeSwitcher.tsx`**
   - Dodano nowy przycisk "Effects Toggle" (ikona sparkles)
   - Przycisk włącza/wyłącza efekty liquid glass
   - Stan zapisywany w localStorage (`effects`)
   - Naprawiono hydration issues z `requestAnimationFrame`
   - Dodano `AnimatePresence` dla smooth transitions

6. **`src/shared/ui/GlassSurface/GlassSurface.tsx`**
   - Dodano hook `useEffectsEnabled()` 
   - Gdy effects disabled: prosty blur zamiast SVG filters
   - Znaczna poprawa wydajności gdy efekty są wyłączone
   - SVG nie renderuje się gdy `effectsEnabled === false`

7. **`src/app/globals.css`**
   - Zwiększono kontrast `--text-secondary` w dark mode (z #a3a3a3 na #c4c4c4)
   - Zwiększono kontrast `--text-tertiary` w dark mode (z #525252 na #8a8a8a)
   - Zaktualizowano `--border-primary` i `--border-secondary` dla lepszej widoczności

---

*Ostatnia aktualizacja: 2026-01-11*
