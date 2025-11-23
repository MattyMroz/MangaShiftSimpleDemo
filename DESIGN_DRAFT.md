# 🎨 MangaShift - Design Draft (One-Page)

> **Status:** Draft v0.1 - Burza mózgów  
> **Data:** 23.11.2025  
> **Uwaga:** Dokument roboczy - szczegóły techniczne (kolory, wielkości, etc.) będą dopracowane później

---

## 📋 Informacje ogólne

### Nazwa projektu
**MangaShift** - Automatyczny Generator Audiowizualnych Adaptacji Mangi

### Logo/Ikona
🎌 (tymczasowo, brak logo na tę chwilę)

### Charakter strony
- **One-page** - jedna strona z sekcjami
- **Nowoczesna** - liquid glass effects, neonowe obramowania
- **Minimalistyczna** - z umiarem, lekka, z gradientami, ale z animacjami
- **Responsywna** - mobile, tablet, desktop

### Tryby kolorystyczne
- ✅ **Light mode**
- ✅ **Dark mode**
- 🎨 Globalne CSS variables dla łatwej podmiany kolorystyki

---

## 🗂️ Struktura nawigacji

### Header (Sticky)
- Logo: 🎌 MangaShift
- Nawigacja:
  - Home
  - Demo
  - Updates
  - About Us
  - Contact Us
  - FAQ
- **Specjalny hamburger menu** (kod dostarczony później)
- Toggle: Light/Dark mode

### Sekcje (One-page scroll)
1. **Home** (Hero)
2. **Demo** (showcase + link do /chainsawman)
3. **Updates** (aktualności, progress)
4. **About Us** (o projekcie)
5. **Contact Us** (linki do ankiety, youtube, discorda, buycoffe)
6. **FAQ** (najczęstsze pytania)

### Footer
- Linki społecznościowe
- Copyright
- Dodatkowe linki

---

## 📐 Sekcje - Zawartość

### 1️⃣ HOME (Hero Section)

**Co się znajduje:**
- Główny nagłówek: "MangaShift"
- Podtytuł/Opis: Krótki opis projektu (1-2 zdania)
- CTA Button: "Zobacz Demo" → scroll do sekcji Demo
- Tło: Efekt liquid glass, subtelne animacje (particles/gradient)
- Dodatkowe elementy wizualne: Może jakieś ilustracje związane z mangą

**Cel:**
Przyciągnąć uwagę, przedstawić główną wartość projektu

---

### 2️⃣ DEMO (Showcase)

**Co się znajduje:**
- Tytuł: "Zobacz jak to działa"
- Krótki opis technologii/procesu
- **Miniaturka/Preview demo** (Chainsawman)
- CTA Button: "Przejdź do interaktywnego demo" → `/chainsawman`
- Opcjonalnie: krótkie wideo/gif pokazujący działanie

**Cel:**
Zachęcić do wypróbowania demo, pokazać konkretny przykład

---

### 3️⃣ UPDATES (Aktualności)

**Co się znajduje:**
- Tytuł: "Co nowego?"
- Timeline/Cards z aktualnościami projektu:
  - Kamienie milowe (KM1, KM2, KM3, KM4)
  - Progress bar projektu (np. "3/12 miesięcy")
  - Najnowsze osiągnięcia
  - Planowane funkcje

**Cel:**
Informować o postępach, budować zaufanie, pokazać żywy projekt

---

### 4️⃣ ABOUT US (O projekcie)

**Co się znajduje:**
- Tytuł: "O projekcie MangaShift"
- **Problem:** Czym jest problem dostępności mangi?
  - Dane statystyczne (GUS: 165.7k osób z problemami wzrokowymi, 1.39M z dysfunkcjami ruchu)
  - Ograniczenia obecnych rozwiązań
- **Rozwiązanie:** Jak MangaShift to rozwiązuje?
  - Automatyzacja (80-90% przyspieszenie)
  - Obniżenie kosztów (60-70%)
  - Zwiększenie dostępności
- **Innowacyjność:**
  - Integracja najnowszych technologii AI
  - Algorytmy dostosowane do mangi
  - Pełna automatyzacja pipeline'u
- **Grupa docelowa:**
  - Główni beneficjenci (osoby z dysfunkcjami)
  - Kluczowi użytkownicy (wydawnictwa, NGO, twórcy)
  - Potencjał rynkowy

**Cel:**
Wyjaśnić misję, wartość, innowacyjność projektu

---

### 5️⃣ CONTACT US (Kontakt)

**Co się znajduje:**
- Tytuł: "Skontaktuj się z nami"
- Formularz kontaktowy:
  - Imię/Nazwa
  - Email
  - Wiadomość
  - Przycisk "Wyślij"
- Alternatywnie/Dodatkowo:
  - Email: kontakt@mangashift.pl (przykładowy)
  - Social media links
- Informacje o zespole:
  - **Student:** Mateusz Mróz
  - **Opiekun:** dr hab. inż. Ewa Korzeniewska
  - **Uczelnia:** Politechnika Łódzka

**Cel:**
Umożliwić kontakt, współpracę, feedback

---

### 6️⃣ FAQ (Pytania i odpowiedzi)

**Co się znajduje:**
- Tytuł: "Najczęściej zadawane pytania"
- Accordion/Expandable lista pytań:
  
  **Przykładowe pytania:**
  1. **Czym jest MangaShift?**
     - Odpowiedź: System automatycznie przekształcający statyczne strony mangi w dynamiczne audio-wideo
  
  2. **Dla kogo jest MangaShift?**
     - Odpowiedź: Głównie dla osób z dysfunkcjami wzroku/ruchu, wydawnictw, twórców
  
  3. **Jak działa automatyzacja?**
     - Odpowiedź: Pipeline AI - analiza graficzna → OCR → tłumaczenie → synteza mowy → montaż wideo
  
  4. **Czy mogę wypróbować demo?**
     - Odpowiedź: Tak! Przejdź do sekcji Demo i kliknij "Zobacz demo Chainsawman"
  
  5. **Kiedy projekt będzie ukończony?**
     - Odpowiedź: Realizacja 12 miesięcy (10.2025 - 09.2026), aktualnie w fazie [X]
  
  6. **Jak mogę współpracować?**
     - Odpowiedź: Skontaktuj się przez formularz w sekcji Contact Us
  
  7. **Jakie technologie wykorzystujecie?**
     - Odpowiedź: Modele AI (detekcja obiektów, OCR, LLM, TTS), upscaling, automatyczny montaż
  
  8. **Czy projekt jest open-source?**
     - Odpowiedź: [Do ustalenia - zależy od decyzji zespołu]

**Cel:**
Odpowiedzieć na najczęstsze pytania, zmniejszyć barierę wejścia

---

## 🎨 Design System (Ogólne wytyczne)

### Style wizualne
- **Liquid Glass Header:** Efekt szkła z blur/transparency
- **Neonowe obramowania:** Subtelne świecące bordusy (accent color)
- **Animacje:** Smooth, z umiarem (scroll animations, hover effects, micro-interactions)
- **Minimalizm:** Przestrzeń, czytelność, focus na contencie

### Typografia
- Nowoczesne fonty (do ustalenia później)
- Czytelne, dobrze skalowalne

### Kolorystyka
- **Globalne CSS Variables** (łatwa podmiana)
- Light mode + Dark mode
- Szczegóły kolorów do dopracowania

### Responsywność
- Mobile first approach
- Breakpoints: Mobile, Tablet, Desktop
- Hamburger menu na mobile

### Komponenty specjalne
- **Hamburger menu:** Specjalny kod (dostarczony później)
- **Liquid glass effect:** Header
- **Neonowe obramowania:** Buttons, cards, sekcje

---

## 🚀 Funkcjonalności

### Nawigacja
- Smooth scroll między sekcjami
- Sticky header
- Active section indicator
- Hamburger menu (mobile)

### Interakcje
- Light/Dark mode toggle (localStorage)
- Scroll animations (reveal on scroll)
- Hover effects na buttonach/linkach
- Formularz kontaktowy (email integration - do ustalenia)

### CTA (Call to Action)
- "Zobacz Demo" (Home → Demo section)
- "Przejdź do interaktywnego demo" (Demo → /chainsawman page)
- "Wyślij" (formularz kontaktowy)

---

## 📝 Notatki do implementacji

### Priorytet
1. Struktura HTML sekcji
2. Podstawowe style (layout, grid/flex)
3. Globalne CSS variables (light/dark mode)
4. Responsywność
5. Animacje i efekty specjalne
6. Formularz kontaktowy (backend/integration)

### Do dopracowania później
- ❌ Konkretne wartości kolorów (hex/rgb)
- ❌ Dokładne wielkości fontów
- ❌ Szczegółowe spacing/padding
- ❌ Dokładny wygląd każdej sekcji (mockupy)
- ❌ Konkretne obrazy/ilustracje
- ❌ Szczegóły animacji (duration, easing)
- ❌ Backend formularza

### Technologie (sugestie)
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4 (utility classes + CSS variables)
- Framer Motion (animacje)
- React Hook Form (formularz)

---

## 📊 Informacje z projektu IPI

### Podstawowe dane
- **Tytuł:** MangaShift - Automatyczny Generator Audiowizualnych Adaptacji Mangi
- **Numer:** 251190
- **Uczelnia:** Politechnika Łódzka
- **Okres:** 12 miesięcy (10.2025 - 09.2026)
- **Budżet:** 20 000 zł

### Zespół
- **Student:** Mateusz Mróz
- **Opiekun:** dr hab. inż. Ewa Korzeniewska

### Cel projektu
Automatycznie przekształcić statyczne strony mangi w dynamiczne adaptacje audio-wideo, zwiększając dostępność dla osób z niepełnosprawnościami i oferując nową formę odbioru.

### Grupa docelowa
- **Główni beneficjenci:** Osoby z dysfunkcjami wzroku i ruchu
- **Kluczowi użytkownicy:** Wydawnictwa mangi (np. Waneko), NGO, instytucje publiczne, twórcy

### Kamienie milowe
1. **KM1 (M3):** Moduł ekstrakcji i strukturyzacji treści
2. **KM2 (M6):** Moduł tłumaczenia i generowania narracji
3. **KM3 (M10):** Pipeline automatycznego montażu wideo
4. **KM4 (M12):** Finalizacja projektu

---

## ✅ Checklist do przejrzenia

- [ ] Czy wszystkie sekcje są jasne i zrozumiałe?
- [ ] Czy struktura nawigacji ma sens?
- [ ] Czy brakuje jakichś kluczowych informacji?
- [ ] Czy design system jest spójny z wizją?
- [ ] Czy funkcjonalności są realistyczne?
- [ ] Czy priorytet implementacji jest logiczny?

---

**Następne kroki:**
1. Review i feedback na drafcie
2. Doprecyzowanie contentu każdej sekcji
3. Mockupy/Wireframes (opcjonalnie)
4. Ustalenie kolorystyki i typografii
5. Implementacja (HTML/CSS/JS)

---

**Uwagi:**
- Dokument będzie ewoluował w trakcie prac
- Wszystko "wyjdzie w praniu" - nie narzucamy sztywnych ram
- Focus na strukturze i contencie, detale później
