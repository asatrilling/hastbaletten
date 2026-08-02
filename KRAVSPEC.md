# Kravspec – återstående sidor

Bygg varje sida med **samma `<head>`, header och footer som `index.html`**. Använd befintliga
klasser i `css/styles.css`. Varje undersida inleds med en `.page-hero` (mörk grön) i stället för
den stora startsides-heron. All text nedan är färdig att klistra in (justera fritt).

Bildplatshållare skrivs så här:
```html
<div class="ph"><span class="ph__tag">Foto</span><span>Beskrivning av bilden</span></div>
```

---

## sadlar.html — Sadlar till salu

**page-hero**
- Kicker: `Sadlar till salu`
- H1: `Nya och begagnade sadlar`
- P: `Handplockade sadlar från Amerigo och Equipe, plus noga utvalda begagnade i fint skick. Alla sadlar kan provas ut tillsammans med mig så att passformen stämmer – för både häst och ryttare.`

**Sektion (bg-cream): filterrad + rutnät**
- Filter (visuella `.chip`, första `.chip--on`): `Alla`, `Dressyr`, `Hoppning`, `Ny`, `Begagnad`
- `.grid grid-3` med `.card.saddle`-kort. Skapa 6 exempelkort. Varje kort:
  - `.ph` med `.ph__tag`Foto + text "Sadelbild"
  - `.badge` (`--ny`, `--beg`, `--reserv` eller `--sold`)
  - `<h3>` modellnamn
  - `<ul class="spec">` med rader: Storlek, Bomvidd, Skick/Leverans
  - `.price` med pris
- Exempelmodeller att använda: "Amerigo Vega Dressyr" (begagnad, 17,5", 19 900 kr),
  "Equipe Dressyr" (ny, måttbeställs, från 32 000 kr), "Amerigo Pinerolo Hopp" (begagnad, 17", 17 500 kr),
  "Equipe Expression" (ny, från 34 000 kr), "Amerigo Cortina" (begagnad, 18", reserverad),
  "Prestige Dressyr" (begagnad, 17", såld).
- Kort kommentar under rubriken: `Exempel på hur utbudet visas – uppdatera med aktuella sadlar och bilder.`

**CTA-band (bg-white eller cream):**
- H2: `Hittar du inte rätt sadel?`
- P: `Jag har fler sadlar än de som visas här, och nya kommer in löpande. Boka en provning så letar vi rätt tillsammans.`
- Knapp: `Boka sadelprovning` → `sadelprovning.html#boka`

---

## sadelprovning.html — Sadelprovning

**page-hero**
- Kicker: `Sadelprovning`
- H1: `Rätt passform – för hästens skull`
- P: `En felaktig sadel kan ge spänningar, hälta och en olycklig häst. Vid en sadelprovning utgår jag från hästens rygg, sadelns konstruktion och din sits – och hittar en lösning som fungerar över tid.`

**Sektion "Så går det till" (bg-cream):** `.steps` med fyra `.step`:
1. **Genomgång** – `Vi går igenom hästen, nuvarande sadel och hur du upplever ridningen idag.`
2. **Tryckmätning** – `Med tryckmätningsmatta ser vi exakt hur sadeln fördelar trycket över ryggen.`
3. **Utprovning** – `Vi provar sadlar som passar hästens form och din sits – nya eller begagnade.`
4. **Uppföljning** – `Du får en tydlig rekommendation, och vi följer upp så att resultatet håller.`

**Sektion "Tjänster & priser" (bg-white):** `.grid grid-3` med tre `.price-card`
(mittenkortet `.price-card--feature`):
- **Individuell sadelprovning** — `1 200 kr` `<small>+ moms, ca 60 min</small>` — `Personlig utprovning på plats. Tillägg för resa (40 kr/km, 3 km ingår).`
- **Tryckmätning (praktisk)** — `10 000 kr` `<small>+ moms</small>` — `Praktisk utbildning med tryckmätningsmatta. Max 10 deltagare.` (feature-kort)
- **Sadelteori (kurs)** — `5 000 kr` `<small>+ moms</small>` — `Teorikurs om sadelns konstruktion, passform och ryggens muskulatur. Max 30–40 deltagare.`
- Liten not under korten: `Priser är riktmärken – bekräfta aktuella priser vid bokning.`

**Boka-sektion (bg-cream), `id="boka"`:** rubrik `Boka sadelprovning` + `.form`
(fälten: Namn, E-post, Telefon (`.row`), Hästens ras/ålder, Meddelande (textarea),
knapp `Skicka förfrågan`). Sätt `action="mailto:info@lenalilja.se"` och
`method="post"` `enctype="text/plain"`. Not: `Vi återkommer så snart vi kan, oftast inom ett par dagar.`

---

## kurser.html — Kurser & träning

**page-hero**
- Kicker: `Kurser & träning`
- H1: `Utvecklas tillsammans med din häst`
- P: `Från enskilda dressyrlektioner till de populära Robban-kurserna – träning som bygger på lätthet, precision och respekt för hästen.`

**Sektion (bg-cream): `.grid grid-2` med `.card`:**
- **Dressyrlektioner** – `Enskild träning anpassad efter dig och din häst, oavsett nivå. Fokus på sits, balans och kommunikation.`
- **Robban-kurser** – `Återkommande, uppskattade gruppkurser i en trivsam miljö. Perfekt för dig som vill utvecklas tillsammans med andra.`
- **Presentkort** – `Ge bort en lektion eller kurs. Ett fint sätt att dela med sig av ridglädje.`
- **Träningsupplägg** – `Behöver du hjälp att lägga upp träningen mot ett mål? Vi gör en plan tillsammans.`

**Split-sektion (bg-white):** bildplatshållare + text om Lenas träningsfilosofi
("Precision, lätthet och elegans" – förklara kort). CTA-knapp `Kontakta för att boka` → `kontakt.html`.

**CTA-band:** H2 `Vill du börja träna?` + knapp `Hör av dig` → `kontakt.html`.

---

## om.html — Om Lena

**page-hero**
- Kicker: `Om Lena`
- H1: `Ett liv i sadelns tjänst`
- P: `Möt personen bakom Hästbaletten.`

**Split-sektion (bg-cream):** porträtt-platshållare + brödtext:
`Lena Lilja har ägnat sitt liv åt hästar och dressyr. Genom åren har hon förenat rollen som
tränare med en djup förståelse för sadelns betydelse – hur rätt passform frigör hästens rörelse
och ger ryttaren möjlighet att sitta rätt. Idag hjälper hon ryttare i hela Skandinavien att hitta
sadlar som fungerar, och tränar ekipage mot bättre samspel.`

**Sektion (bg-white) "Det här står jag för":** `.grid grid-3` med tre `.card`:
- **Hästens välmående först** – `Varje rekommendation utgår från vad som är bäst för hästen.`
- **Kunskap, inte gissningar** – `Tryckmätning och anatomisk förståelse ligger till grund för varje utprovning.`
- **Långsiktiga relationer** – `Många kunder återkommer år efter år – det är mitt bästa betyg.`

**Sektion "Medlemskap & samarbeten" (bg-cream):** kort text + lista:
Svenska Ridsportförbundet, Svenska Dressyrtränarklubben, Dressyrringen. Sadelmärken: Amerigo, Equipe.

**CTA-band:** `Nyfiken på att träffas?` + knapp `Boka en provning` → `sadelprovning.html#boka`.

---

## kontakt.html — Kontakt

**page-hero**
- Kicker: `Kontakt`
- H1: `Hör av dig`
- P: `Frågor om en sadel, en provning eller en kurs? Ring, mejla eller skicka ett meddelande så återkommer jag.`

**Sektion (bg-cream): `.split`** — vänster `.info-list`, höger `.form`:
- `.info-list` rader (`.lbl` + `.val`):
  - Adress: `Frösthult Gästre 14, 749 72 Fjärdhundra`
  - Telefon: `<a href="tel:+46706727037">070-672 70 37</a>`
  - Telefontid: `Måndag–fredag 8:30–10:30`
  - E-post: `<a href="mailto:info@lenalilja.se">info@lenalilja.se</a>`
  - Instagram: `<a href="https://www.instagram.com/lilja.lena/">@lilja.lena</a>`
- `.form` (Namn, E-post, Ämne, Meddelande + knapp `Skicka`). `action="mailto:info@lenalilja.se"`.

**Sektion (bg-white):** bred kartplatshållare (`.ph ph--wide`) med texten "Karta – Fjärdhundra".

**Nyhetsbrev-band (valfritt):** rubrik `Få nya sadlar först` + `.news`-formulär
(e-postfält + knapp `Prenumerera`) och not `Nya begagnade sadlar och kurser rakt i inkorgen.`
