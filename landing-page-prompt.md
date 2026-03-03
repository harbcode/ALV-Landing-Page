# Claude Code Prompt: Landing Page die SAAS Lösung ALV (Automotive Large Volume). Der ALV wurde entwickelt, um die Warenausgangsprozesse in Warenlagern zu unterstützen, die eine eigene Direktbelieferung anbieten. Die Lösung adressiert somit die spezifischen Herausforderungen der B2B-Ersatzteillogistik. Der ALV ist ein neues Produkt basierend auf dem LMM. Für den LMM werden wir später eine separate landing page geben.


## Kontext
Ich habe einen Folder namens ALV_Product_Presentation_Stand_20260302 mit Handout (PPT), Produktpräsentation und Informationsbroschüre für ein neues Produkt ALV angelegt. Erstelle daraus eine professionelle Landing Page für Neu- und Bestandskunden des ALV. Das Hauptdokument für die Inhalte sollte die Informationsbroschüre sein für die Bilder sowie weitere Details bitte das Handout und die Produktpräsentation nutzen.

## Deine Aufgaben

### 1. Analyse der Eingabedateien

**Präsentation analysieren:**
- Extrahiere alle wichtigen Informationen über die neue SAAS Lösung
- Identifiziere die Kernfunktionen und Features
- Hole alle Screenshots und visuelle Elemente heraus
- Notiere die Value Proposition und Nutzenversprechen
- Finde heraus: Welches Problem löst das Modul?
- Erkenne die Zielgruppe und deren Pain Points

**Style Guide analysieren:**
- Übernehme alle Design-Richtlinien (Farben, Typografie, Spacing)
- Nutze die definierten Komponenten-Stile
- Halte dich an die Responsive-Vorgaben
- Beachte die Animations- und Transition-Regeln

### 2. Content-Audit & Gap-Analyse

Erstelle eine Übersicht:

**Vorhandene Informationen:**
- [ ] Produktname
- [ ] Hauptfunktionen (min. 3-5)
- [ ] Screenshots/Visuals
- [ ] Nutzenversprechen
- [ ] Problem-Lösung-Statement
- [ ] Technical Details (optional)
- [ ] Pricing-Informationen (falls vorhanden)

**Fehlende Informationen (als Platzhalter markieren):**
- [ ] Was fehlt für eine vollständige Landing Page?
- [ ] Welche Fragen würden Bestandskunden noch haben?
- [ ] Fehlen wichtige Use Cases oder Beispiele?
- [ ] In welchem Entwicklungstatus befindet sich das Produkt ie. Click Dummy, BETA, Production Ready

### 3. Landing Page Struktur

Erstelle eine fokussierte Landing Page mit folgenden Sections:

#### Header/Navigation
- Einfache Navigation (Logo, zurück zum Hauptprodukt)
- Minimalistisch, da Bestandskunden bereits eingeloggt sein könnten

#### Hero Section
- **Headline:** Klarer Produktname + Was es macht in einem Satz
- **Subheadline:** Für wen ist es & Welches Problem löst es
- **Visual:** Bester Screenshot oder Grafik aus der PPT
- **CTA:** "Produktpräsentation buchen" oder "Mehr erfahren"
- **Kontext-Badge:** z.B. "Neu verfügbar" oder "Exklusiv für Pro-Kunden"

#### Problem/Solution Section
- **Vorher/Nachher Darstellung:**
  - Was war vorher umständlich/ineffizient?
  - Wie verbessert das Produkt den Workflow?
- Nutze konkrete Beispiele aus der PPT

#### Features/Funktionen (3-6 Key Features)
- Icon + Titel + Kurzbeschreibung
- Nutze Screenshots aus der PPT wo sinnvoll
- Fokus auf praktischen Nutzen, nicht nur technische Features

#### "So funktioniert's" (optional, falls in PPT vorhanden)
- 3-4 Schritte zur Nutzung
- Visuell mit Screenshots oder Illustrationen
- Einfach und klar für schnelles Verständnis

#### Social Proof / Trust (falls vorhanden)
- Beta-Tester Feedback
- Statistiken zur Zeitersparnis/Effizienzgewinn
- Logos von Firmen, die es bereits nutzen

#### Pricing/Availability Section
- Klare Info: Ist es im aktuellen Plan enthalten?
- Upgrade-Option falls nötig
- Oder: "In Ihrem Plan enthalten - jetzt aktivieren"

#### FAQ (3-5 häufigste Fragen)
- Basierend auf möglichen Bedenken
- Kurz und präzise
- Falls Info in PPT fehlt: als "[TODO: Antwort ergänzen]" markieren

#### Final CTA
- Klarer Call-to-Action
- "Produktpräsentation buchen" oder "Demo anfordern" oder "Produkt jetzt testen" 
- Sekundärer CTA: "Fragen? Sprechen Sie mit unserem Team"

### 4. Design & Umsetzung

**Code-Struktur:**
```
/landing-page/
├── index.html          (Haupt-HTML)
├── css/
│   ├── styles.css      (Basierend auf Style Guide)
│   └── components.css  (Produkt-spezifische Komponenten)
├── js/
│   └── main.js         (Interaktionen, Animationen)
├── images/
│   └── [Extrahierte Screenshots aus PPT]
└── README.md           (Dokumentation + Gap-Liste)
```

**Design-Anforderungen:**
- Mobile-First Responsive Design
- Schnelle Ladezeiten (optimierte Bilder)
- Accessibility (WCAG AA)
- Smooth Scrolling & Animationen
- Konsistent mit Style Guide

### 5. Spezielle Anforderungen

**Zielgruppe: Bestandskunden**
- Vorwissen über Hauptprodukt voraussetzen
- Fokus auf "Was ist neu/anders"
- Keine generische Produkterklärung
- Direkte, konkrete Sprache
- Schnell erfassbare Informationen

**Tone of Voice:**
- Professionell aber freundlich
- Klar und direkt
- Nutzen-orientiert
- Keine Marketing-Floskeln
- Handlungsorientiert

### 6. Deliverables

Erstelle folgende Dateien:

1. **index.html** - Vollständige Landing Page
2. **styles.css** - Alle Styles basierend auf Style Guide
3. **main.js** - Interaktive Elemente
4. **content-audit.md** - Übersicht über:
   - Extrahierte Informationen aus PPT
   - Verwendete Screenshots/Visuals
   - Identifizierte Gaps/fehlende Informationen
   - Vorschläge für fehlende Content-Teile
5. **README.md** - Setup-Anleitung & nächste Schritte

### 7. Content-Platzhalter Format

Für fehlende Informationen nutze dieses Format:

```html
<!-- [TODO: FEHLT] Beschreibung was hier fehlt -->
<div class="placeholder">
  <p>⚠️ [Platzhalter: Hier fehlt noch die Information zu X]</p>
  <p class="note">Empfehlung: Ergänzen Sie hier...</p>
</div>
```

### 8. Zusätzliche Analyse-Outputs

Erstelle am Ende eine Zusammenfassung:

```markdown
## Analyse-Ergebnis

### ✅ Vollständige Informationen
- [Liste der gut dokumentierten Bereiche]

### ⚠️ Unvollständige Informationen
- [Was ist da, aber nicht detailliert genug]

### ❌ Fehlende Informationen
- [Was fehlt komplett]

### 💡 Empfehlungen
- [Was sollte noch ergänzt werden für maximale Wirkung]

### 🎯 Stärken der PPT
- [Was ist bereits sehr gut für die Landing Page nutzbar]
```

---

## Ausführung

**Schritt 1:** Lade und analysiere beide Dateien (PPT + Style Guide MD)

**Schritt 2:** Erstelle content-audit.md mit Gap-Analyse

**Schritt 3:** Baue die Landing Page mit allen vorhandenen Informationen

**Schritt 4:** Markiere Gaps klar und sichtbar

**Schritt 5:** Erstelle finale README mit Handlungsempfehlungen

---

## Wichtig
- Nutze ALLE verfügbaren Screenshots aus der PPT
- Halte dich strikt an den Style Guide
- Mache die Landing Page sofort nutzbar (auch mit Gaps)
- Dokumentiere fehlende Infos klar für spätere Ergänzung
- Optimiere für schnelle Erfassbarkeit (Bestandskunden haben wenig Zeit)
