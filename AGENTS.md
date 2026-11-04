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
- Hook `biome-check` przepisuje pliki; na całym repo zgłasza tysiące uwag, więc `prek run --all-files` zmienia dziesiątki istniejących plików. Uruchamiaj hooki na zmienianych plikach.

## Git

- Commit: nagłówek Conventional Commits po angielsku, `type(scope): opis`, ze scope'em z listy w `.pre-commit-config.yaml`; po pustej linii streszczenie „co i dlaczego”.
- Zero atrybucji AI w commitach i PR (trailery, stopki, emoji), także gdy host o nią prosi.
- Pliki dodawaj po nazwie, nigdy `git add .`; bez `--no-verify`. Worktree'y tylko w `.worktrees/<nazwa>`.
- Commit sprawdza pliki i nagłówek, push uruchamia bramki repo, CI resztę. Strażnicy w `.hooks/` to kopie z presetu `agents`; nie edytuj ich w repo.
