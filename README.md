# Hästbaletten – Lena Lilja | webbplats

En statisk webbplats (HTML/CSS/JS) för Lena Lilja / Hästbaletten – sadelutprovning,
försäljning av nya och begagnade sadlar samt dressyrträning. Ingen build-process, inga
ramverk: öppna filerna direkt eller lägg dem på valfritt webbhotell.

## Innehåll i mappen

```
hastbaletten-site/
├── index.html          ← Startsidan (KLAR – används också som mall för övriga sidor)
├── sadlar.html         ← Sadlar till salu        (byggs enligt KRAVSPEC.md)
├── sadelprovning.html  ← Sadelprovning + bokning  (byggs enligt KRAVSPEC.md)
├── kurser.html         ← Kurser & träning         (byggs enligt KRAVSPEC.md)
├── om.html             ← Om Lena                  (byggs enligt KRAVSPEC.md)
├── kontakt.html        ← Kontakt + formulär       (byggs enligt KRAVSPEC.md)
├── css/styles.css      ← All design (KLAR): palett, typsnitt, komponenter, responsivt
├── js/main.js          ← Mobilmeny + aktiv sida (KLAR)
├── assets/             ← Lägg bilder här (se assets/README.txt)
├── KRAVSPEC.md         ← Sidspecifikationer + färdig säljande text för alla sidor
└── README.md           ← Den här filen
```

## Så bygger du klart i Claude Code

1. Öppna mappen `hastbaletten-site/` i Claude Code.
2. Be Claude Code bygga de återstående sidorna, t.ex.:
   > "Bygg sadlar.html, sadelprovning.html, kurser.html, om.html och kontakt.html
   > enligt KRAVSPEC.md. Återanvänd exakt samma header och footer som i index.html och
   > använd komponenterna/klasserna som redan finns i css/styles.css. Ändra inte designen."
3. Granska i webbläsaren (se nedan) och justera texten där det behövs.

Startsidan (`index.html`) är avsiktligt komplett – den visar alla byggstenar
(hero, tjänstekort, split-sektion, sadelkort, omdömen, CTA-band, footer). Kopiera mönstren
därifrån så blir alla sidor enhetliga.

## Förhandsgranska lokalt

Dubbelklicka på `index.html`, eller kör en enkel lokal server för att alla länkar ska fungera:

```bash
cd hastbaletten-site
python3 -m http.server 8000
# öppna http://localhost:8000
```

## Designsystem (kortfattat)

Färger (finns som CSS-variabler i `css/styles.css`):

| Roll             | Variabel        | Hex       |
|------------------|-----------------|-----------|
| Mörk skogsgrön   | `--ink`         | `#22302A` |
| Grön (ljusare)   | `--ink-2`       | `#2E4237` |
| Sadelläder-guld  | `--leather`     | `#B4884D` |
| Guld (mörkare)   | `--leather-dk`  | `#8A6636` |
| Creme (bakgrund) | `--cream`       | `#F5F1E9` |
| Sekundär grön    | `--sage`        | `#6E8B74` |

Typsnitt: **Playfair Display** (rubriker) + **Inter** (brödtext), via Google Fonts.

Återanvändbara klasser: `.btn` (`--primary`/`--outline`/`--light`), `.card`, `.service`,
`.saddle`, `.badge` (`--ny`/`--beg`/`--reserv`/`--sold`), `.step`, `.price-card`, `.quote`,
`.cta-band`, `.form`, `.ph` (bildplatshållare), `.split`, `.page-hero`.

## Att göra innan lansering (för Lena)

- Byt ut alla bildplatshållare (`.ph`) mot riktiga foton – se `assets/README.txt`.
- Uppdatera sadlarna i `sadlar.html` med aktuellt utbud, skick och pris.
- Kontrollera att priserna för sadelprovning stämmer (angivna priser är riktmärken).
- Koppla formulären till e-post eller ett bokningsverktyg (idag öppnar de e-postklienten).
- Byt ut platshållar-omdömena mot riktiga kundcitat.
- Behåll domänen **lenalilja.se** och peka den mot den nya sajten.
