# 🎌 MangaShift Simple Demo

Demo projektu MangaShift - interaktywna prezentacja koncepcji wyników projektu.

_Wszystko może i na pewno ulegnie zmianie w przyszłości!_

[https://mattymroz.github.io/MangaShiftSimpleDemo/](https://mattymroz.github.io/MangaShiftSimpleDemo/)

---

## 🎬 PLAN IMPLEMENTACJI VIDEO PLAYERA W SEKCJI DEMO

### 📋 Podsumowanie zadania

**Cel:** Zintegrować odtwarzacz video (plyr-react) w sekcji Demo zamiast osobnej podstrony chainsawman.

### ✅ Wymagania

1. **Usunięcie podstrony `/chainsawman`** - Projekt staje się w pełni one-page
2. **Modyfikacja sekcji Demo:**
   - Usunięcie przycisku "Watch Demo"
   - Wyśrodkowanie tekstu
   - Dodanie playera na dole sekcji
3. **Video Player (plyr-react):**
   - Czarno-biała kolorystyka
   - Interfejs po angielsku
   - Głośność po lewej stronie
   - Kontrolki: play, rewind, fast-forward, progress, time, mute, volume, captions, settings, pip, download, fullscreen
   - Obsługa napisów (ASS via subtitles-octopus)
   - Obsługa ścieżek audio
4. **Canvas z efektem kolorów:**
   - Wyświetla kolorki z wideo w tle
   - Blur + brightness
   - Gradient opacity (zanika na górze i dole)
   - Przezroczystość
5. **Responsywność:**
   - Mobile-friendly
   - iOS compatible (fullscreen native)
6. **Plik testowy:** 4K 60FPS demo video

### 🏗️ Architektura

```
src/
├── features/
│   └── VideoPlayer/
│       ├── ui/
│       │   ├── VideoPlayer.tsx      # Główny komponent playera
│       │   ├── VideoCanvas.tsx      # Canvas z efektem kolorów
│       │   ├── VideoLoader.tsx      # Loader podczas ładowania
│       │   └── index.ts
│       ├── lib/
│       │   ├── plyrConfig.ts        # Konfiguracja Plyr (options, i18n)
│       │   └── useVideoCanvas.ts    # Hook do obsługi canvas
│       └── index.ts
├── widgets/
│   └── DemoSection/
│       └── ui/
│           └── DemoSection.tsx      # Zmodyfikowana sekcja Demo
└── app/
    └── globals.css                  # Style dla playera (CSS vars)
```

### 📦 Zależności do instalacji

```bash
pnpm add plyr-react plyr
```

### 🎨 Styl playera (CSS Variables)

```css
:root {
  /* Plyr - czarno-biała kolorystyka */
  --plyr-color-main: rgb(255, 255, 255);
  --plyr-video-background: rgb(15, 15, 15);
  --plyr-badge-background: rgba(255, 255, 255, 0.9);
  --plyr-badge-text-color: #000000;
  --plyr-menu-background: rgba(0, 0, 0, 0.7);
  --plyr-menu-color: #ffffff;
  --plyr-range-thumb-background: #ffffff;
  --plyr-video-control-color: rgb(255, 255, 255, 0.9);
  --plyr-video-control-background-hover: rgba(0, 0, 0, .6);
}
```

### 🎯 Konfiguracja Plyr (English i18n)

```typescript
const plyrOptions = {
  fullscreen: { iosNative: true },
  tooltips: { controls: true },
  hideControls: true,
  keyboard: { focused: false, global: true },
  seekTime: 5,
  controls: [
    'play-large', 'restart', 'rewind', 'play', 'fast-forward',
    'progress', 'current-time', 'duration',
    'mute', 'volume', // Volume na lewej stronie (po mute)
    'captions', 'settings', 'pip', 'airplay', 'download', 'fullscreen'
  ],
  i18n: {
    restart: 'Restart',
    rewind: 'Rewind {seektime}s',
    play: 'Play',
    pause: 'Pause',
    // ... reszta po angielsku
  }
};
```

### 🖼️ Canvas z gradient opacity

```tsx
// VideoCanvas.tsx - efekt z gradient mask
const canvasStyle = {
  filter: 'blur(50px) brightness(1.2)',
  maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
  opacity: 0.5,
};
```

### 📱 Mobile/iOS Compatibility

1. `playsinline` attribute na video
2. `fullscreen: { iosNative: true }` w Plyr config
3. Responsive container z `aspect-ratio: 16/9`
4. Touch-friendly controls

### 🔄 Kolejność implementacji

1. ✅ Instalacja zależności (`pnpm add plyr-react plyr`)
2. ✅ Usunięcie folderu `src/app/chainsawman`
3. ✅ Utworzenie struktury `src/features/VideoPlayer/`
4. ✅ Implementacja `VideoCanvas.tsx` - efekt kolorów
5. ✅ Implementacja `VideoPlayer.tsx` - główny player
6. ✅ Konfiguracja Plyr (czarno-biały, angielski)
7. ✅ Aktualizacja `DemoSection.tsx` - usunięcie przycisku, dodanie playera
8. ✅ Style CSS dla playera w `globals.css`
9. ✅ Testowanie na mobile/iOS
10. ✅ Walidacja TypeScript i ESLint

### 📁 Assets (testowy plik)

- **Video:** `https://huggingface.co/MattyMroz/ANIME/resolve/main/Spare%20Me%2C%20Great%20Lord!%20-%20Opening%204K%2060FPS.mkv?raw=true`
- **Poster:** `/assets/demo/spare-me-great-lord.gif`

---

## 📋 Opis Projektu

Projekt składa się z:
- **Landing Page (One-Page)** - Nowoczesna strona główna prezentująca projekt MangaShift z zintegrowanym demo playerem

## 🚀 Technologie

- **Next.js 16+** - Framework React z App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **ESLint** - Code quality
- **GitHub Pages** - Hosting

## 📁 Struktura Projektu

```
MangaShiftSimpleDemo/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Strona główna (landing page)
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   └── chainsawman/         # Demo Chainsawman
│       └── page.tsx         # Player demo
├── components/              # Komponenty React
├── lib/                     # Utilities, helpers
│   └── config.ts           # Konfiguracja (ASSETS_BASE_URL)
├── public/
│   ├── fonts/              # Custom fonts (local development)
│   ├── images/             # Placeholder images (małe)
│   ├── data/               # JSON files (demo data)
│   └── .nojekyll           # GitHub Pages config
├── .github/
│   └── workflows/
│       └── deploy.yml      # Auto-deploy workflow
├── next.config.ts          # Next.js config (static export)
├── tailwind.config.ts      # Tailwind config
└── package.json
```

## 📦 Hosting Assetów (Duże Pliki)

### Struktura na Hugging Face Dataset

**Repozytorium:** `https://huggingface.co/datasets/MattyMroz/MangaShiftSimpleDemo`

```
MangaShiftSimpleDemo/
├── images/
│   └── chainsawman/
│       ├── 001.png
│       ├── {n}.png
│       └── 105.png
├── audio/
│   ├── lektor/
│   └── dubbing/
└── data/
    └── chainsawman-metadata.json  # Metadata
```

> **Info:** Metadane będą również zawarte w głównym repozytorium dla szybkości. Folder `data` na Hugging Face jest dodatkowy.

## 🔧 Instalacja i Uruchomienie Lokalne

### Wymagania
- Node.js 20+ 
- npm/pnpm/yarn

### Krok po kroku

1. **Klonowanie repozytorium**
```bash
git clone https://github.com/MattyMroz/MangaShiftSimpleDemo.git
cd MangaShiftSimpleDemo
```

2. **Instalacja zależności**
```bash
npm install
# lub
pnpm install
# lub
yarn install
```

3. **Uruchomienie dev server**
```bash
npm run dev
# lub
pnpm dev
# lub
yarn dev
```

4. **Otwórz w przeglądarce**
```
http://localhost:3000
```

## 📦 Build i Export

### Lokalne budowanie
```bash
npm run build
```
Wygeneruje folder `out/` ze statycznymi plikami HTML/CSS/JS.

### Preview lokalnie
```bash
npm run build
npx serve out
```

## 🌐 Deployment na GitHub Pages

### Automatyczny Deploy

1. **Aktywuj GitHub Pages**
   - Idź do: Settings → Pages
   - Source: **GitHub Actions**

2. **Push na main branch**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **GitHub Actions automatycznie zbuduje i wdroży**
   - Zobacz zakładkę **Actions** w GitHub
   - Po zakończeniu: `https://MattyMroz.github.io/MangaShiftSimpleDemo/`

### Workflow
- `.github/workflows/deploy.yml` automatycznie:
  1. Buduje projekt (`npm run build`)
  2. Uploaduje do GitHub Pages
  3. Deploy na `gh-pages`

## 🎯 Plan Rozwoju

### Faza 1: Setup ✅
- [x] Inicjalizacja Next.js projektu
- [x] Konfiguracja Tailwind CSS
- [x] Struktura folderów
- [x] GitHub Pages setup
- [x] GitHub Actions workflow

### Faza 2: Landing Page (One-Page) 🚧
- [ ] Hero section z animacjami
- [ ] Sekcja "Jak to działa?" (3 kroki)
- [ ] Sekcja funkcji (panel detection, OCR, TTS, upscaling)
- [ ] Sekcja demo showcase
- [ ] Footer z linkami

### Faza 3: Chainsawman Demo Player 🚧
- [ ] Image viewer component (panele manga)
- [ ] Audio player integration
- [ ] Synchronizacja obrazu z audio
- [ ] Kontrolki (play, pause, next, previous)
- [ ] Progress bar
- [ ] Panel highlighting podczas odczytu

### Faza 4: Assets & Content 🚧
- [ ] Dodanie fontów (Noto Sans JP, Inter)
- [ ] Przygotowanie demo images (Chainsawman panels)
- [ ] JSON z danymi demo (timings, tekst, panele)
- [ ] Nagranie demo audio (TTS lub sample)

### Faza 5: Polish & Deploy 🚧
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Accessibility (ARIA, keyboard navigation)
- [ ] Performance optimization (lazy loading, code splitting)
- [ ] SEO meta tags
- [ ] Final testing
- [ ] Production deployment

## 🎨 Design Guidelines

### Kolory
- Primary: #FF6B6B (czerwony akcent - manga vibe)
- Secondary: #4ECDC4 (cyjan)
- Background: #1A1A2E (ciemny)
- Text: #EAEAEA (jasny)

### Typografia
- Headings: `font-bold` (Tailwind default)
- Body: `font-normal`
- Code/Tech: `font-mono`

### Spacing
- Sekcje: `py-16 md:py-24`
- Komponenty: `p-6 md:p-8`
- Gap: `gap-4 md:gap-6`

## 🛠️ Komendy NPM

| Komenda | Opis |
|---------|------|
| `npm run dev` | Dev server (localhost:3000) |
| `npm run build` | Production build (output: `out/`) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript type checking |

## 📝 Notatki

### GitHub Pages Configuration
- **Base Path**: `/MangaShiftSimpleDemo` (automatyczny w `next.config.ts`)
- **Static Export**: `output: 'export'` w konfiguracji
- **Images**: `unoptimized: true` (wymagane dla static export)

### Ważne
- Wszystkie linki wewnętrzne muszą uwzględniać base path (Next.js robi to automatycznie)
- Obrazy w `public/` są dostępne jako `/images/file.png`
- JSON dane w `public/data/` dostępne jako `/data/file.json`

## 🤝 Kontakt

**Autor**: MattyMroz  
**Repo**: [MangaShiftSimpleDemo](https://github.com/MattyMroz/MangaShiftSimpleDemo)  
**Demo**: [https://MattyMroz.github.io/MangaShiftSimpleDemo/](https://MattyMroz.github.io/MangaShiftSimpleDemo/)

---

**Status**: 🚧 W trakcie rozwoju  
**Wersja**: 0.1.0  
**Ostatnia aktualizacja**: 2025-11-23
 



