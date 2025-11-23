# 🎌 MangaShift Simple Demo

Demo projektu MangaShift - interaktywna prezentacja koncepcji wyników projektu.

_Wszystko może i na pewno ulegnie zmianie w przyszłości!_

[https://mattymroz.github.io/MangaShiftSimpleDemo/](https://mattymroz.github.io/MangaShiftSimpleDemo/)


## 📋 Opis Projektu

Projekt składa się z:
- **Landing Page (One-Page)** - Nowoczesna strona główna prezentująca projekt MangaShift
- **Chainsawman Demo** - Interaktywny player demonstracyjny pokazujący działanie systemu odczytu paneli manga z narracją audio

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
 



