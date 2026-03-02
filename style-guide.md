# Style Guide – tiramizoo LMM Modul Landing Pages

Wiederverwendbarer Style Guide für Landing Pages der Last Mile Master (LMM) Module. Basierend auf der tatsächlichen Umsetzung der Packstation-Landing-Page.

**Referenz-Vorlage:** [`Website_Sample.pdf`](./Website_Sample.pdf) – die visuelle Vorlage, auf der dieser Style Guide basiert. Bei Fragen zu Layout, Sektionsreihenfolge oder konkreten Designentscheidungen ist die Vorlage die primäre Referenz.

---

## Gesamteindruck

Minimalistisch, clean, vertrauensbildend. Viel Weißraum, reduzierte Farbpalette, klare Hierarchie. Der Stil vermittelt **Professionalität ohne Komplexität** – passend für ein B2B-SaaS-Produkt, das Einfachheit verspricht.

---

## Farbpalette

### CSS Custom Properties

```css
:root {
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #6B7280;
  --color-text-muted: #9CA3AF;
  --color-bg: #FFFFFF;
  --color-bg-alt: #F9FAFB;
  --color-border: #E5E7EB;
  --color-accent: #009FE3;        /* tiramizoo Cerulean – CTAs */
  --color-accent-hover: #0087c4;
  --color-success: #92BB44;       /* tiramizoo Grün – Checkmarks, Pill-Badge */
  --color-danger: #EF4444;
  --color-star: #F59E0B;
}
```

| Verwendung | Farbe | CSS Variable |
|---|---|---|
| **Primär-Text** | `#1A1A1A` (fast Schwarz) | `--color-text-primary` |
| **Sekundär-Text** | `#6B7280` (Mittelgrau) | `--color-text-secondary` |
| **Gedämpfter Text** | `#9CA3AF` (helles Grau) | `--color-text-muted` |
| **Hintergrund** | `#FFFFFF` (Weiß) | `--color-bg` |
| **Hintergrund alternierend** | `#F9FAFB` (sehr helles Grau) | `--color-bg-alt` |
| **Border / Divider** | `#E5E7EB` (helles Grau) | `--color-border` |
| **CTA / Akzent** | `#009FE3` (Cerulean) | `--color-accent` |
| **Erfolg / Grün** | `#92BB44` (tiramizoo Grün) | `--color-success` |
| **Fehler** | `#EF4444` (Rot) | `--color-danger` |

### Farbprinzipien
- Nahezu monochromatisch (Schwarz/Weiß/Grau) als Basis
- `#009FE3` für alle primären CTA-Buttons
- `#92BB44` sparsam für Checkmarks, Erfolgs-Badges und den Pill-Badge im Hero
- Zweite Zeile einer Headline in Grau (`<span class="muted">`) für Kontrast-Effekt

---

## Typografie

### Font
- **Familie:** Inter (Google Fonts)
- **Fallback:** -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Sprache:** Deutsch – echte Umlaute verwenden (ä, ö, ü, ß)

### Größen (responsive mit clamp)

| Element | CSS Variable | Wert |
|---|---|---|
| Hero Headline (H1) | `--fs-hero` | `clamp(2.5rem, 6vw, 4.5rem)` |
| Section Headline (H2) | `--fs-h2` | `clamp(2rem, 4vw, 3rem)` |
| Card Titel (H3) | `--fs-h3` | `clamp(1.25rem, 2vw, 1.5rem)` |
| Body Text | `--fs-body` | `1.0625rem` |
| Small Text | `--fs-small` | `0.875rem` |
| Label Text | `--fs-label` | `0.8125rem` |

### Gewichte

| Gewicht | CSS Variable | Verwendung |
|---|---|---|
| 400 | `--fw-regular` | Body Text, Beschreibungen |
| 500 | `--fw-medium` | Labels, Pill-Text |
| 600 | `--fw-semibold` | Card-Titel, Nav-Links |
| 700 | `--fw-bold` | Section Headlines |
| 800 | `--fw-extrabold` | Hero Headline |
| 900 | `--fw-black` | Große Zahlen (Stats, Pricing) |

### Zeilenabstand & Letter-Spacing

| Variable | Wert | Verwendung |
|---|---|---|
| `--lh-tight` | `1.08` | Headlines |
| `--lh-snug` | `1.25` | Card-Titel |
| `--lh-normal` | `1.6` | Body Text |
| `--ls-tight` | `-0.025em` | Headlines (engeres Tracking) |
| `--ls-wide` | `0.1em` | Uppercase Labels |

### Headline-Muster (Schwarz/Grau-Trick)
Erste Zeile schwarz, zweite Zeile in Grau – erzeugt visuellen Rhythmus:
```html
<h2 class="headline headline--section">
  Schwarzer Text.
  <span class="muted">Grauer Text.</span>
</h2>
```
Beispiel: „Schluss mit Abtippen." (schwarz) + „Daten fließen automatisch." (grau)

---

## Layout & Spacing

### Container
- **Max-Width:** 1200px (`--max-width`), zentriert
- **Padding:** `0 1.5rem` (mobil), Container zentriert mit `margin: 0 auto`

### Sektionen
- **Vertikaler Abstand:** `clamp(4rem, 10vw, 8rem)` (`--section-padding`)
- **Alternierende Hintergründe:** Weiß / `#F9FAFB` abwechselnd

### Grid
- Feature Cards: 3-Spalten Grid (`repeat(3, 1fr)`), Gap 1.5rem
- Vergleich (Vorher/Nachher): 2-Spalten Grid mit 3 Reihen
- Mobile: Alles einspaltig, Cards stacken vertikal

### Responsive Breakpoints
- **768px:** Mobile → Desktop Umbruch (Hauptbreakpoint)
- Mobile-First Ansatz: Basis-Styles für Mobile, Media Queries für Desktop

---

## Komponenten

### 1. Navigation (Sticky Header)
- Weißer Hintergrund mit Schatten bei Scroll
- Logo (tiramizoo SVG) links
- Nav-Links rechts: max 4-5 Items
- CTA-Button rechts: `btn btn--primary` in `#009FE3`
- Mobile: Hamburger-Menü mit Toggle

### 2. Hero Section
- **Pill-Badge:** `pill pill--filled` (grüner Hintergrund `#92BB44`, weißer Text)
- **Headline:** Groß, bold, Schwarz/Grau-Trick
- **Subheadline:** 1-2 Sätze in Grau
- **Badge-Liste:** Inline-Badges mit Checkmark-Icons
- **CTAs:** Primär (`btn--primary`, #009FE3) + Sekundär (`btn--outline`)
- **Visual:** App-Screenshot mit Toast-Overlay und optionalem Video-Badge
- **Mobile:** Visual erscheint nach den CTAs (`order: 0`)

### 3. Product Screenshot / App-Mockup
- Schwebende UI-Karte mit subtilen Schatten (`--shadow-lg`)
- Border-Radius: 12px (`--card-radius`)
- Toast-Overlays: Kleine schwebende Notifications über dem Screenshot
- Video-Badge: Play-Button-Overlay für Demo-Video

### 4. Vergleichssektion (Vorher/Nachher)
- **Pill-Label:** Über der Headline
- **Layout:** Flaches 2-Spalten CSS Grid mit 3 Reihen (Label, Bild, Punkte)
- **Mobile:** CSS `order` Properties für korrekte Gruppierung
- **Bilder:** `aspect-ratio: 10/8` für gleiche Höhen
- **Punkte:** Listen mit ✗ (rot, Vorher) und ✓ (grün, Nachher)

### 5. Feature Cards (3x2 Grid)
- Border: 1px solid `--color-border`
- Border-Radius: 12px
- Padding: 2rem
- Icon: Inline SVG, 40x40px, Outline-Stil, in rundem Container (`feature-card__icon`)
- Titel: Semibold, schwarz
- Beschreibung: Regular, grau
- Kein Hintergrund-Fill – nur Border

### 6. Prozess-Schritte (1-2-3-4-5)
- Nummerierte Schritte vertikal gestapelt
- Nummer in rundem Container (40x40px, `--color-bg-alt` Hintergrund)
- Titel bold, Beschreibung grau
- Screenshots bei ausgewählten Schritten (z.B. Schritt 3 und 4)
- Abschluss: Erfolgs-Badge mit Checkmark (`pill pill--success`)

### 7. Stats / Kennzahlen
- 4-Spalten Grid (Mobile: 2x2)
- Große Zahl: `--fw-black`, `--fs-hero` oder ähnlich groß
- Label darunter: Klein, grau
- Optional: Testimonial-Zitat mit Quelle

### 8. Pricing Section
- Pricing Card mit Border und leichtem Schatten
- Großer Preis: `--fw-black`, sehr groß
- Zeitraum/Einheit darunter
- Feature-Liste mit Checkmarks
- CTA-Button am Ende der Card

### 9. CTA-Sektion (Aktivierung/Vormerkung)
- **Pill-Label:** Über der Headline
- **Headline + Subtext:** Zentriert
- **Mailto-CTA:** `btn btn--primary` mit vorbefülltem Betreff und Body
- **Hinweistext:** Kleine Notiz unter dem Button
- **Trust-Badges:** 3 Items mit Checkmark-Icons

### 10. FAQ Section (Accordion)
- Einspaltig, max-width begrenzt, zentriert
- Klickbare Frage mit Plus/Minus-Icon rechts
- Antwort klappt auf mit `max-height` Transition
- Nur ein Item gleichzeitig geöffnet

### 11. Final CTA Section
- Dunkler Hintergrund (`#1A1A1A`, weißer Text)
- Zentriert: Headline, Subtext, Trust-Badges, 2 Buttons
- Primär-Button: `#009FE3`
- Sekundär-Button: Outline (weiß)

### 12. Footer
- Zentriert, einspaltig
- tiramizoo Logo + Kurzbeschreibung
- Copyright-Zeile
- Minimalistisch

### 13. Pill / Chip Badges

| Klasse | Stil | Verwendung |
|---|---|---|
| `.pill` | Border, kein Fill, grauer Text | Section-Labels |
| `.pill--filled` | `#92BB44` Hintergrund, weißer Text | Hero-Badge (Coming Soon) |
| `.pill--success` | `#92BB44` Border, grüner Text, leichter Fill | Erfolgs-Badges |

### 14. Toast / Notification Overlays
- Auf App-Screenshots zur Hervorhebung
- Weiße Karte mit Schatten, Icon links
- Border-Radius: 8-12px
- Position: absolute, über dem Screenshot schwebend

---

## Buttons

| Klasse | Stil | Verwendung |
|---|---|---|
| `.btn--primary` | `#009FE3` Hintergrund, weißer Text, Border-Radius 8px | Haupt-CTAs |
| `.btn--outline` | Transparenter Hintergrund, 1px Border, dunkler Text | Sekundäre CTAs |

- Padding: `0.875rem 1.75rem`
- Font-Weight: 600 (Semibold)
- Hover: Leicht abgedunkelt (`--color-accent-hover`)
- Outline Hover: Leichter Hintergrund-Fill

---

## Icons

- **Stil:** Outline / Stroke-basiert (nicht filled)
- **Strichstärke:** 2px (`stroke-width="2"`)
- **Größe:** 20-24px (inline), 32-40px (in Cards)
- **Quelle:** Inline SVGs im Lucide-Icons-Stil
- **Farbe:** Erbt von `currentColor`

---

## Schatten & Tiefe

| Variable | Wert | Verwendung |
|---|---|---|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.04)` | Cards |
| `--shadow-md` | `0 4px 24px rgba(0,0,0,0.06)` | Floating Elements |
| `--shadow-lg` | `0 8px 32px rgba(0,0,0,0.08)` | Hero-Mockups |

Generell: Sehr subtile Schatten, fast flaches Design. Keine harten Schatten.

---

## JavaScript-Verhalten

- **Smooth Scroll:** Für Anker-Links mit 80px Offset (Sticky Nav)
- **FAQ Accordion:** Klick öffnet/schließt, nur ein Item gleichzeitig offen
- **Scroll Reveal:** IntersectionObserver mit `.reveal` / `.is-visible` Klassen
- **Mobile Nav:** Toggle mit `.is-open` Klasse

---

## Animationen

- **Scroll Reveal:** `opacity: 0` → `1`, `translateY(24px)` → `0`
- **Transition:** `0.6s ease`
- **FAQ:** `max-height` Transition `0.3s ease`
- Generell minimal – dezente Einblend-Effekte

---

## Dateistruktur (Template)

```
/landing-page/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   ├── hero-[modulname].png
│   ├── [weitere Screenshots].png
│   └── tiramizoo-logo.svg
└── content-audit.md
```

---

## Technische Umsetzung

- **Reines HTML/CSS/JS** – kein Framework, keine Build-Tools
- **Font:** Inter (Google Fonts CDN)
- **Icons:** Inline SVGs im Lucide-Stil (kein CDN nötig)
- **CSS:** Custom Properties, Mobile-First, BEM-ähnliche Klassen
- **Hosting:** Vercel (Auto-Deploy via GitHub)

---

## Wiederkehrende Design-Patterns

1. **Schwarz/Grau-Headlines:** Erste Zeile schwarz, zweite Zeile grau (`<span class="muted">`)
2. **Pill-Labels über Sektionen:** Kleine abgerundete Badges als Kontext-Geber
3. **App-Mockups mit Overlays:** Screenshots mit schwebenden Toast-Elementen
4. **Inline Trust-Badges:** Checkmark + Text Kombinationen
5. **Nummerierte Prozesse:** 1-2-3 Schritte für einfache Erklärungen
6. **Großzügiger Weißraum:** Sektionen haben viel vertikalen Abstand
7. **Mailto-CTAs:** Vorbefüllte E-Mails statt Formular-Backend
8. **Alternierende Hintergründe:** Weiß / helles Grau im Wechsel
