# MangaShift Simple Demo

Jednostronicowa prezentacja koncepcji MangaShift (Next.js, statyczny eksport) publikowana na GitHub Pages.

## Komendy

```bash
npm ci
npm run dev          # next dev --turbopack
npm run lint         # eslint
npm run type-check   # tsc --noEmit
npm run build        # next build, wynik w out/
```

Repo nie ma testów.

## Mapa kodu

- `src/app/`: App Router (`layout.tsx`, `page.tsx`, `globals.css`)
- `src/widgets/`: sekcje strony (Hero, AboutSection, DemoSection, FAQSection, ContactSection, Header, Footer)
- `src/features/VideoPlayer/`: odtwarzacz plyr-react z canvasem kolorów w tle
- `src/shared/ui/`, `src/shared/lib/utils/`: wspólne komponenty i narzędzia
- `public/`: obrazy, fonty i dane demo
- `suminagashi-fjdbyyqi-demo/`: osobne statyczne demo (`index.html`, `js/three.min.js`)

## Pułapki

- `next.config.ts` ustawia `output: 'export'` i w produkcji `basePath: '/MangaShiftSimpleDemo'`; ścieżki do zasobów muszą to uwzględniać.
- Push na `main` uruchamia `.github/workflows/deploy.yml` (build i publikacja `out/` na GitHub Pages).
- Pliki w `.github/agents/` opisują inny stos (Next.js 14, Tailwind 3.4); obowiązuje `package.json`.

## Git

- Commit: wiadomość po angielsku według standardu commita, `type(scope): summary` ze scope'em z `--scopes=` w `.pre-commit-config.yaml` albo `repo`, potem sekcje `Problem:`, `Change:` i `Verification:`; sprawdza ją hook `commit-message`.
- Zero atrybucji AI w commitach i PR (trailery, stopki, emoji), także gdy host o nią prosi.
- Pliki dodawaj po nazwie, nigdy `git add .`; bez `--no-verify`. Worktree'y tylko w `.worktrees/<nazwa>`.
- Commit sprawdza pliki i nagłówek, push sprawdza gałąź, wiadomości i sekrety, a bramki projektu (typy, testy, build) biegną w CI i lokalnie przez `prek run --hook-stage manual --all-files`. Strażnicy w `.hooks/` to kopie z `agents`; nie edytuj ich w repo.
