# YANNI WORKOUT
## PHASE 03 — Business & ROI Blueprint

**Status:** COMPLETED / pripravené na schválenie Phase 03  
**Projekt:** YANNI WORKOUT — prémiová fitness creator platforma  
**Dátum modelu:** 8. august 2026  
**Jazyk platformy:** slovenský  
**Produkčný stav:** demo / concept; finančný model nie je forecast ani prísľub výsledkov  
**Nadväzuje na:** Phase 01 — Master Product & Creative Brief; Phase 02 — Design Constitution

---

# 0. Executive verdict

YANNI WORKOUT má ekonomický zmysel iba vtedy, ak sa nebude posudzovať ako „nový web“, ale ako **vlastnená monetizačná a distribučná vrstva nad Yanniho publikom**.

Web samotný negeneruje hodnotu. Hodnotu vytvára päť mechanizmov:

1. presunie fanúšika z pozornosti na konkrétnu ponuku,
2. zníži počet krokov medzi obsahom a nákupom / prihláškou,
3. spojí oddelené revenue streamy do jedného funnelu,
4. umožní merať, čo reálne zarába,
5. vytvorí infraštruktúru pre produkty, ktoré dnes ešte nemusia existovať.

Phase 03 preto odporúča, aby sa produkčná verzia nepredávala ako „redizajn Linktree“, ale ako **YANNI WORKOUT Revenue Platform**.

---

# 1. Čo vieme a čo nebudeme predstierať

## Overené z aktuálnych podkladov

K 8. augustu 2026 Yanniho Linktree verejne obsahuje:

- prihlášku na Fitness Challenge Trenčín,
- tréningový plán,
- Yanni LETO / call flow,
- YanniCast,
- odkazy na sociálne siete a podcast distribúciu.

To potvrdzuje, že platforma nezačína od nuly. Už dnes existuje viacero samostatných „produktových vstupov“, ktoré môžeme spojiť do jedného funnelu.

Z používateľom dodaného Instagram screenshotu pracujeme s orientačným publikom **88,5 tis. followerov**. Toto číslo používame iba ako veľkostný kontext; finančný model sa neopiera o predpoklad, že všetci followeri navštívia platformu.

## Neoverené / zatiaľ neznáme

Nasledujúce údaje nesmieme prezentovať ako fakty, kým ich nepotvrdí Yanni:

- aktuálny počet platiacich YWC členov,
- reálna mesačná cena jeho YWC,
- reálna cena coachingu,
- close rate coachingu,
- affiliate provízia GymBeam,
- počet použití kódu YANNI5,
- priemerná objednávka cez affiliate,
- počet účastníkov a ekonomika Challenge eventov,
- náklady na eventy,
- merch marža,
- aktuálne sponzorské ceny,
- churn členstva,
- návštevnosť Linktree a conversion rate jednotlivých linkov.

**Pravidlo Phase 03:** kým tieto čísla nepoznáme, používame scenáre a premenné, nie tvrdenia.

---

# 2. Business model map

```text
INSTAGRAM / TIKTOK / YOUTUBE / EVENT QR
                  │
                  ▼
          YANNI WORKOUT
                  │
      ┌───────────┼───────────┐
      │           │           │
      ▼           ▼           ▼
    FREE       HIGH INTENT   PREMIUM
   CONTENT       ACTION      RELATIONSHIP
      │           │           │
      │        ┌──┴──┐        │
      │        │     │        │
      ▼        ▼     ▼        ▼
  WATCH /   COACH  PROGRAM   YWC
 YANNICAST   ING      S
      │        │      │        │
      └────┬───┴──┬───┴────────┘
           │      │
           ▼      ▼
         GEAR   CHALLENGES
       AFFILIATE / EVENTS
           │      │
           └──┬───┘
              ▼
       REPEAT VISIT / DATA
              │
              ▼
      PARTNERS / MERCH / UPSELL
```

Kľúčová zmena oproti Linktree je, že používateľ nevidí iba zoznam odkazov. Platforma mu podľa intentu ponúkne ďalší logický krok.

---

# 3. Revenue architecture

## 3.1 YWC — recurring revenue

### Úloha
Vytvoriť najstabilnejšiu recurring vrstvu značky.

### Potenciálna hodnota pre člena
- exkluzívne videá,
- early access,
- tréningové programy,
- zákulisie,
- members-only Q&A,
- prednostná registrácia na event,
- členské zľavy,
- neskôr progres / challenge profil.

### Demo
Demo nebude migrovať billing. CTA môže smerovať na existujúce riešenie.

### Production decision
Owned Stripe billing má zmysel až vtedy, keď:
- existuje dostatok platiacich členov,
- Yanni chce vlastniť customer journey a dáta,
- produkt potrebuje viac rolí/tierov alebo hlbšiu integráciu,
- prevádzkové náklady vlastného systému sú nižšie než jeho pridaná hodnota.

---

## 3.2 Online coaching — high-ticket conversion engine

Coaching je pravdepodobne najhodnotnejší revenue stream na jednu konverziu, preto musí dostať **samostatný conversion flow**, nie jednu položku medzi desiatimi linkami.

### Funnel

```text
Obsah / výsledky / story
        ↓
COACHED BY YANNI
        ↓
Pre koho je coaching
        ↓
Čo dostane klient
        ↓
Kvalifikačný formulár
        ↓
Call / posúdenie
        ↓
Klient
```

### Primárne metriky
- návšteva coaching stránky,
- CTA click,
- začatie formulára,
- dokončenie formulára,
- booked call,
- accepted client,
- booked revenue.

### Business rule
Web nesmie optimalizovať iba „počet leadov“. Cieľom je **počet kvalifikovaných leadov a accepted clients**.

---

## 3.3 Digitálne tréningové programy — scalable one-time revenue

Toto je najčistejší produkt na monetizáciu publika, ktoré:
- nechce coaching,
- nechce mesačné členstvo,
- ale chce konkrétny výsledok.

### Potenciálne formáty
- Bigger Arms / Biceps Protocol,
- Beginner Gym Plan,
- Strength Block,
- Summer Program,
- špecializované 4–8 týždňové programy.

### Odporúčaná obchodná logika
Namiesto 15 lacných PDF vytvoriť **málo, ale výrazných flagship programov**.

Každý program musí mať:
- jasný výsledok,
- jasnú cieľovú skupinu,
- časový rámec,
- obsah,
- ukážku,
- FAQ,
- Stripe Checkout,
- okamžitý prístup po platbe.

### Pricing hypothesis pre testovanie
Nie je to Yanniho aktuálny cenník.

- entry digital product: **19–29 €**
- flagship program: **29–49 €**
- premium program / bundle: **49–79 €**

Cena sa má validovať podľa kvality produktu, publika a conversion dát, nie podľa tohto dokumentu.

---

# 3.4 Affiliate / GEAR — monetizácia nákupného intentu

Namiesto jedného promo kódu v bio vytvoríme kurátorovanú sekciu:

**YANNIHO VÝBAVA / ČO REÁLNE POUŽÍVAM**

Každý produkt môže obsahovať:
- dôvod použitia,
- kategóriu,
- kód `YANNI5`,
- trackovaný outbound link,
- UTM / affiliate parametre.

### Cieľ
Zvýšiť:
- počet kvalitných outbound klikov,
- použitie kódu,
- affiliate conversion,
- atribúciu medzi konkrétnym obsahom a nákupom.

### Zásadné pravidlo
Nezobrazovať produkty, ktoré Yanni reálne neodporúča alebo nepoužíva, iba kvôli provízii.

---

# 3.5 Challenges — event revenue + retention

Challenge nie je iba event page. Je to potenciálny **opakovaný produktový formát**.

### Revenue možnosti
- entry fee,
- premium / priority registration,
- YWC member presale,
- sponsor naming / presenting partner,
- merchandise na evente,
- partner products,
- follow-up digital program,
- ďalší event.

### Retention mechanizmus
Po evente sa stránka nezmaže. Zostane:
- výsledkovka,
- fotky/video,
- leaderboard,
- víťazi,
- ďalší event CTA.

Tak sa jednorazová akcia mení na permanentný marketingový asset.

---

# 3.6 Sponsorships / brand partnerships — B2B revenue

Samostatný fan funnel nesmie suplovať B2B stránku.

### Partner surface môže predávať
- sponsored challenge,
- Reel / content integration,
- YanniCast sponsorship,
- product placement,
- event activation,
- ambassador partnership,
- branded training series.

### V produkcii
Namiesto generického „spolupráce: email“ vytvoriť:
- jasné formáty spolupráce,
- audience/brand fit,
- event možnosti,
- kontakt / inquiry,
- neskôr media kit.

**Bez súhlasu Yanniho nepoužívať verejne citlivé analytické údaje, ceny alebo brand claims.**

---

# 3.7 Merch — drop model, nie generický e-shop

Odporúčaný model:

`YWC DROP 001`

- limitovaný produkt,
- countdown,
- early access pre YWC,
- nízky počet SKU,
- výrazný vizuálny príbeh.

Cieľom nie je vybudovať veľký skladový e-shop v prvej verzii.

---

# 4. Offer ladder

Platforma potrebuje cenovú a záväzkovú hierarchiu.

| Úroveň | Ponuka | Záväzok používateľa | Business úloha |
|---|---|---:|---|
| 0 | Reels / YanniCast / free obsah | 0 € | získanie pozornosti |
| 1 | Email / event registrácia / free plan | nízky | identifikácia návštevníka |
| 2 | Affiliate nákup | nízky | monetizácia product intentu |
| 3 | Challenge entry / digitálny program | nízky až stredný | prvá priama transakcia |
| 4 | YWC | mesačný recurring | LTV / retencia |
| 5 | Coaching | vysoký | high-ticket revenue |
| 6 | Partnerstvo | B2B | high-value deal |

### Strategická výhoda
Fanúšik nemusí byť pripravený kúpiť coaching. Platforma mu stále ponúkne nižší krok, ktorý ho môže v budúcnosti posunúť vyššie.

---

# 5. Revenue funnel

## Fáza A — Attention

Zdroje:
- Instagram bio,
- Story link,
- pinned Reel,
- YouTube,
- TikTok,
- event QR,
- podcast description.

### KPI
- unique visitors,
- source / medium,
- returning visitor rate.

## Fáza B — Intent

Signály:
- otvoril program,
- otvoril coaching,
- zobrazil challenge,
- skopíroval kód,
- otvoril YWC.

### KPI
- product page view rate,
- CTA click-through rate,
- scroll depth nie ako vanity metriku, ale ako diagnostiku.

## Fáza C — Conversion

Akcie:
- prihláška,
- purchase,
- subscription,
- affiliate click,
- event registration.

### KPI
- conversion rate podľa ponuky,
- revenue per visitor,
- revenue per source,
- cost / effort per conversion.

## Fáza D — Retention

Akcie:
- ďalšia návšteva,
- opakovaný event,
- YWC retention,
- ďalší program,
- member engagement.

### KPI
- monthly active members,
- churn,
- repeat purchase,
- event repeat rate.

---

# 6. Phase 03 ROI model — metodika

Tento model nie je predikcia. Je to **citlivostný model**, ktorý ukazuje, aký rád ekonomickej hodnoty môže platforma vytvárať pri rôznych conversion assumptions.

Model zámerne:

- nepoužíva 88,5k followerov ako návštevnosť,
- nepočíta sponsorov,
- nepočíta merch,
- nepočíta existujúce YWC tržby,
- nepočíta existujúcich coaching klientov,
- nepočíta LTV coachingu nad prvý započítaný príspevok,
- nepočíta organický rast followerov.

Tým sa vyhýbame tomu, aby ROI stálo na najviac špekulatívnych zdrojoch.

---

# 7. Scenárové vstupy

## 7.1 Konzervatívny scenár

- 2 500 unique návštev / mesiac,
- YWC conversion: 0,50 % nových členov / mesiac,
- modelová YWC cena: 5 €,
- mesačný churn: 14 %,
- program conversion: 0,25 % pri 29 €,
- coaching qualified application: 0,15 % návštev,
- close rate: 15 %,
- modelový prvý mesačný revenue contribution nového coaching klienta: 120 €,
- affiliate outbound CTR: 6 %,
- affiliate purchase conversion: 4 %,
- modelový creator revenue / affiliate order: 2 €,
- 4 platené eventy / rok,
- 25 platených vstupov / event pri 8 €.

## 7.2 Základný scenár

- 5 000 unique návštev / mesiac,
- YWC conversion: 0,90 %,
- YWC cena: 6 €,
- churn: 10 %,
- program conversion: 0,60 % pri 35 €,
- coaching application: 0,30 %,
- close rate: 20 %,
- coaching contribution: 180 €,
- affiliate outbound CTR: 9 %,
- affiliate purchase conversion: 6 %,
- creator revenue / order: 3,50 €,
- 4 eventy / rok,
- 60 vstupov / event pri 10 €.

## 7.3 Rastový scenár

- 9 000 unique návštev / mesiac,
- YWC conversion: 1,50 %,
- YWC cena: 7 €,
- churn: 8 %,
- program conversion: 1,00 % pri 39 €,
- coaching application: 0,50 %,
- close rate: 25 %,
- coaching contribution: 250 €,
- affiliate outbound CTR: 12 %,
- affiliate purchase conversion: 8 %,
- creator revenue / order: 5 €,
- 4 eventy / rok,
- 120 vstupov / event pri 12 €.

**Všetky ceny a conversion assumptions vyššie sú modelové premenné. Nie sú tvrdením o Yanniho aktuálnom biznise.**

---

# 8. Výsledok 12-mesačného modelu

| Revenue stream | Konzervatívny | Základný | Rastový |
|---|---:|---:|---:|
| YWC recurring revenue | 3 064 € | 14 963 € | 55 851 € |
| Digitálne programy | 2 175 € | 12 600 € | 42 120 € |
| Coaching contribution | 810 € | 6 480 € | 33 750 € |
| Affiliate | 144 € | 1 134 € | 5 184 € |
| Paid challenge entries | 800 € | 2 400 € | 5 760 € |
| **Modelovaný hrubý ročný revenue** | **6 993 €** | **37 577 €** | **142 665 €** |
| Priemer / mesiac | 583 € | 3 131 € | 11 889 € |

### Membership cohort detail

| Metrika | Konzervatívny | Základný | Rastový |
|---|---:|---:|---:|
| Noví YWC členovia / mesiac | 12,5 | 45,0 | 135,0 |
| Modelovaní aktívni členovia v mesiaci 12 | 75 | 323 | 1067 |

### Interpretácia

- **Konzervatívny:** web je dobrý acquisition a routing layer, ale sám o sebe ešte neodôvodňuje extrémne veľký produkčný budget.
- **Základný:** platforma už môže mať jasný ekonomický zmysel, ak dokáže pravidelne privádzať kvalifikovaný traffic a Yanni má produkty pripravené na konverziu.
- **Rastový:** hodnota už nevychádza z „webdesignu“, ale z toho, že YANNI WORKOUT funguje ako samostatný creator-commerce produkt.

---

# 9. Risk-adjusted planning value

Pre investičnú diskusiu používame ešte druhú vrstvu opatrnosti.

Z modelovaného hrubého revenue berieme iba **70 % ako plánovaciu hodnotu**. Zvyšných 30 % je bezpečnostný haircut na:

- platobné / platformové poplatky,
- refundy,
- fulfillment,
- tooling,
- zľavy,
- nepresnosť assumptions,
- prevádzkové náklady, ktoré dnes nepoznáme.

Týchto 70 % **nie je čistý zisk**. Je to konzervatívnejšia hodnota na sensitivity analysis.

| Scenár | Hrubý model | 70 % risk-adjusted planning value |
|---|---:|---:|
| Konzervatívny | 6 993 € | 4 895 € |
| Základný | 37 577 € | 26 304 € |
| Rastový | 142 665 € | 99 866 € |

---

# 10. Investičná citlivosť / payback

Neuzamykáme týmto dokumentom cenu projektu. Namiesto toho ukazujeme, ako by sa rôzne úrovne investície správali pri 70 % risk-adjusted planning value.

Payback nižšie je počítaný z **mesačného cash-flow modelu s postupným nábehom YWC cohortov**, nie jednoduchým vydelením ročného revenue dvanástimi. Event revenue je v modeli rozložené do štyroch eventových mesiacov. Výsledok je preto prísnejší a realistickejší než annualized-average payback.

| Investícia do platformy | Konzervatívny payback | Základný payback | Rastový payback |
|---:|---:|---:|---:|
| 3 000 € | ~8,2 mes. | ~2,0 mes. | <1 mes. |
| 5 000 € | >12 mes. | ~3,0 mes. | <1 mes. |
| 8 000 € | >12 mes. | ~4,6 mes. | ~1,4 mes. |
| 12 000 € | >12 mes. | ~6,3 mes. | ~2,1 mes. |

### Čo táto tabuľka znamená

- Pri slabom trafficu a nízkych konverziách môže byť drahá platforma návratná pomaly.
- Pri základnom scenári začína byť **investícia v ráde niekoľkých tisíc eur** ekonomicky obhájiteľná v jednotkách mesiacov.
- Rastový scenár nesmie byť použitý ako sales promise. Slúži iba na ukázanie leverage pri fungujúcom creator funnel.

### Čo v paybacku stále nie je

- dane,
- mzda / čas Yanniho,
- produkcia videí,
- náklady eventov,
- reklamný spend,
- support,
- účtovníctvo,
- sklad/merch,
- vývoj ďalších verzií.

Preto tento dokument nesmie hovoriť „web sa ti vráti za X mesiacov“. Správna formulácia je:

> „Pri týchto konkrétnych assumptions vychádza modelovaný payback približne na X mesiacov; po získaní reálnych dát model prerátame.“

---

# 11. YWC: Herohero vs. owned Stripe — ekonomická logika

## Aktuálny externý benchmark

Herohero vo svojej aktuálnej dokumentácii uvádza:
- typické creator subscription pricing približne **4–7 € mesačne**,
- platformový poplatok **10 % + DPH**,
- jeden subscription tier na jeden účet.

Ich publikovaný príklad pri web/Android predplatnom 10 € ukazuje creator payout približne 8,79 €, teda približne 12,1 % rozdiel medzi customer price a creator payout v danom príklade.

## Stripe benchmark pre Slovensko

Stripe pre Slovensko aktuálne uvádza pri štandardných EEA kartách:
- **1,5 % + 0,25 €** za úspešnú card transaction,
- Stripe Billing pay-as-you-go: **0,7 % Billing volume**.

### Zjednodušený príklad pri 6 € subscription

**Herohero published fee model — orientačne**
- fee približne 0,73 € pri 12,1 %,
- zostáva približne 5,27 € pred ďalšími povinnosťami.

**Owned Stripe — orientačne**
- Payments: 1,5 % × 6 € + 0,25 € = 0,34 €,
- Billing: 0,7 % × 6 € = 0,04 €,
- spolu približne 0,38 €,
- zostáva približne 5,62 € pred ďalšími povinnosťami.

**Teoretický rozdiel:** približne 0,34 € / subscriber / mesiac.

| Aktívni členovia | Teoretický mesačný fee rozdiel |
|---:|---:|
| 100 | ~34 € |
| 500 | ~172 € |
| 1 000 | ~344 € |
| 2 000 | ~688 € |

### Prečo to NIE JE automatický argument na migráciu

Herohero za vyšší platform fee poskytuje hotový creator produkt, billing flow, content access a prevádzkovú infraštruktúru.

Owned Stripe prináša:
- vývoj,
- autentifikáciu,
- access control,
- support,
- privacy/GDPR,
- content hosting,
- tax/accounting workflows,
- refund/dispute handling,
- monitoring.

**Rozhodnutie musí byť založené na total cost of ownership, nie iba na percentuálnom fee.**

Pre demo je správne YWC nenahrádzať. Platforma ho iba prezentuje prémiovejšie.

---

# 12. Najhodnotnejšie MVP revenue features

Ak produkčná verzia dostane obmedzený budget, implementovať v tomto poradí:

## P0 — musí existovať

1. **Trackovaný routing ku všetkým súčasným ponukám**
2. **Coaching conversion page**
3. **YWC sales surface**
4. **Challenge landing + registration**
5. **Gear / YANNI5 attribution**
6. **Analytics event taxonomy**

## P1 — prvé owned monetization

7. **Stripe Checkout pre jeden flagship digital program**
8. **email / owned lead capture**
9. **event results / leaderboard**
10. **partner inquiry**

## P2 — až po validácii

11. owned YWC Billing,
12. member dashboard,
13. progress tracking,
14. merch drops,
15. event payment system,
16. full community layer.

---

# 13. Analytics — bez toho ROI nevieme dokázať

Produkčná platforma musí merať minimálne:

## Acquisition

- `page_view`
- `source`
- `campaign`
- `landing_page`

## Product intent

- `view_ywc`
- `view_coaching`
- `view_program`
- `view_challenge`
- `view_gear`
- `view_partner`

## Conversion events

- `click_join_ywc`
- `start_coaching_application`
- `complete_coaching_application`
- `click_program_checkout`
- `program_purchase`
- `challenge_registration`
- `affiliate_outbound`
- `copy_discount_code`
- `partner_inquiry`

## Revenue attributes

Každá paid conversion má mať:
- source,
- campaign,
- product,
- value,
- currency,
- timestamp,
- anonymous/session attribution where legally appropriate.

## Dashboard KPI

Yanni nepotrebuje 40 metrík.

Produkčný dashboard by mal primárne ukazovať:

1. **Revenue attributed to platform**
2. **Revenue / visitor**
3. **YWC new members**
4. **Coaching qualified applications**
5. **Program sales**
6. **Challenge registrations**
7. **Affiliate outbound conversions**
8. **Top acquisition source**

---

# 14. What the platform should optimize

## Primary north-star metric

### **Monetized fan actions / 1 000 qualified visitors**

Prečo nie pageviews:
- pageview nezarába,
- follower count nezarába,
- scroll depth nezarába.

Monetized fan action znamená napríklad:
- paid membership,
- paid program,
- accepted coaching client,
- paid event entry,
- attributable affiliate conversion.

## Secondary north-star

### **Owned audience rate**

Percento návštevníkov, ktorých dokážeme znovu kontaktovať alebo rozpoznať v rámci legálnych a consent-based mechanizmov:
- member account,
- email opt-in,
- event registration,
- customer.

Cieľ je postupne znižovať závislosť od algoritmu sociálnej siete.

---

# 15. Conversion architecture homepage

Homepage nesmie mať všetky CTA rovnako silné.

## Priorita CTA

### Primárny dynamický CTA
**Najbližšia výzva** alebo aktuálna najdôležitejšia kampaň.

### Primárny evergreen CTA
**Vstúp do YWC**

### High-intent secondary
**Coaching**

### Commerce secondary
**Tréningové programy**

### Utility / monetization
**Gear / YANNI5**

### Content
**Pozri YanniCast / obsah**

Tak sa web prispôsobí aktuálnej kampani bez toho, aby sa menila celá navigácia.

---

# 16. Monetization flywheel

```text
REEL / VIDEO
    ↓
YANNI WORKOUT
    ↓
FREE VALUE / EVENT / STORY
    ↓
FIRST ACTION
    ↓
PROGRAM / AFFILIATE / EVENT
    ↓
YWC / COACHING
    ↓
MEMBER / CUSTOMER DATA
    ↓
RETENTION + NEXT EVENT
    ↓
MORE CONTENT / TRANSFORMATIONS
    ↓
NEW SOCIAL PROOF
    ↓
REEL / VIDEO
```

Toto je silnejší model než jednorazový „klikni na môj link“.

---

# 17. Čo môže Yanni monetizovať bez vytvorenia nového produktu

Ešte pred vlastným billingom môže nový web zlepšiť ekonomiku cez:

1. lepšiu viditeľnosť existujúceho coachingu,
2. lepšiu viditeľnosť YWC,
3. viac registrácií na challenge,
4. viac použitia affiliate code,
5. väčšiu spotrebu YanniCast/content,
6. profesionálnejší partner inquiry funnel,
7. cross-sell medzi existujúcimi ponukami.

To je dôležité pre pitch: **prvá verzia nemusí vyžadovať, aby Yanni zmenil svoj business stack.**

---

# 18. Revenue experiments po launchi

Namiesto veľkého redesignu každé dva mesiace spúšťať malé experimenty.

## Experiment A
Homepage CTA:
- `Vstúp do YWC`
vs.
- benefit-oriented CTA.

## Experiment B
Program:
- 29 €
vs.
- 39 € s vyššou perceived value.

## Experiment C
Challenge:
- public registration
vs.
- YWC early access 24 h.

## Experiment D
Gear:
- jednoduchý code banner
vs.
- kurátorovaný „Yanniho stack“.

## Experiment E
Coaching:
- krátky form
vs.
- qualification page + form.

### Experiment rule
Testovať vždy jednu významnú premennú a merať reálnu conversion, nie subjektívny „vyzerá to lepšie“.

---

# 19. Business risks

## Risk 1 — traffic sa nepresunie z Instagramu

### Mitigácia
- jasný reason-to-click,
- event-specific link,
- pinned content,
- QR na eventoch,
- exclusive landing content.

## Risk 2 — krásny web, slabá ponuka

### Mitigácia
Najprv jasný product promise. Dizajn nesmie maskovať nejasný produkt.

## Risk 3 — veľa produktov, žiadna priorita

### Mitigácia
Offer ladder + jeden primárny CTA per context.

## Risk 4 — YWC migrácia príliš skoro

### Mitigácia
Herohero zostáva backendom, kým data neukážu dôvod na migráciu.

## Risk 5 — vlastná community je prázdna

### Mitigácia
Nevyvíjať social feed v prvom production release.

## Risk 6 — event monetizácia znižuje účasť

### Mitigácia
Test free vs. paid event types; YWC/member benefit nemusí znamenať povinný entry fee pre každú akciu.

## Risk 7 — affiliate page zníži dôveryhodnosť

### Mitigácia
Iba reálne používané/odporúčané produkty a transparentná spolupráca.

## Risk 8 — príliš vysoký technický TCO

### Mitigácia
Najprv orchestration layer. Owned infrastructure iba tam, kde má dokázateľný business case.

---

# 20. Production discovery data, ktoré si máme vypýtať od Yanniho

Toto **neblokuje demo**. Toto sú otázky po prejavenom záujme.

## Revenue
1. Koľko stojí YWC?
2. Koľko má aktívnych členov?
3. Aký je mesačný churn?
4. Koľko stojí coaching?
5. Koľko coaching klientov vie kapacitne obslúžiť?
6. Koľko aplikácií / callov dostáva mesačne?
7. Koľko z nich sa stane klientmi?

## Traffic
8. Koľko klikov mesačne dostáva Linktree?
9. Ktoré linky majú najviac klikov?
10. Ktoré sociálne platformy generujú najviac intentu?

## Affiliate
11. Aká je provízia / attribution model GymBeam?
12. Koľko použití YANNI5 má mesačne?
13. Ktoré produkty sa predávajú najviac?

## Events
14. Koľko ľudí chodí na challenge?
15. Sú eventy platené alebo free?
16. Aké sú náklady na jeden event?
17. Aký sponsor inventory dnes predáva?

## Products
18. Chce predávať tréningové programy jednorazovo?
19. Má už hotové video/program assets?
20. Chce vlastniť zákaznícke dáta a billing, alebo preferuje external tools?

---

# 21. Pitch translation — ako ROI vysvetliť Yannimu

Neukazovať mu najskôr tabuľku so 140k scenárom.

Najprv:

> „Nechcel som ti robiť iba krajšiu verziu Linktree. Pozrel som sa na to ako na systém, ktorý spája tvoje challenge, coaching, tréningový plán, YWC, YanniCast a spolupráce na jednom mieste.“

Potom ukázať platformu.

Až keď sa opýta na business value:

> „Najzaujímavejšie je, že to vieme merať. Budeme vedieť, koľko ľudí prišlo z Reelu, koľko otvorilo coaching, koľko išlo do YWC a čo reálne prinieslo revenue. Pri produkčnej verzii by som preto neriešil iba dizajn, ale celý conversion a attribution systém.“

ROI model slúži na discovery call, nie ako prvých 30 sekúnd pitchu.

---

# 22. Čo NESMIEME povedať

Zakázané sales claims:

- „Tento web ti zarobí 37 577 €.“
- „Investícia sa ti vráti za 2 mesiace.“
- „Získame ti 300 nových členov.“
- „Stripe je lacnejší, takže musíš odísť z Herohero.“
- „Tvoja konverzia bude 1 %.“

Správne:

- „Model ukazuje, čo by sa stalo pri konkrétnych conversion assumptions.“
- „Po launchi model nahradíme reálnymi dátami.“
- „Migráciu má zmysel riešiť až pri dostatočnom scale.“

---

# 23. Phase 03 acceptance criteria

Phase 03 je úspešná, ak:

- [x] vieme pomenovať všetky hlavné revenue streams,
- [x] existuje offer ladder,
- [x] vieme, ktoré monetizačné prvky patria do demo vs. produkcie,
- [x] ROI používa explicitné assumptions,
- [x] revenue model neprezentuje assumptions ako fakty,
- [x] existuje conservative/base/upside sensitivity,
- [x] vieme vysvetliť economic logic YWC / coaching / programs / affiliate / events,
- [x] vieme, čo treba merať po launchi,
- [x] vieme, ktoré údaje sa neskôr vypýtajú od Yanniho,
- [x] neblokujeme Phase 04 neznámymi business údajmi.

---

# 24. Phase 03 verdict

# **GO → PHASE 04**

Phase 03 nenachádza business blocker pre pokračovanie.

Naopak, ekonomický model podporuje pôvodnú produktovú tézu:

**Najväčšia hodnota YANNI WORKOUT nie je v nahradení Linktree. Hodnota je v tom, že Yanni dostane jedno miesto, ktoré vie premeniť pozornosť na merateľné členstvo, coaching, programy, eventy, affiliate revenue a B2B príležitosti.**

Phase 04 má teraz túto business logiku premeniť na konkrétnu technickú architektúru.

---

# 25. Verejné referenčné body použité v Phase 03

Overené 8. augusta 2026:

- Yanni Linktree: https://linktr.ee/yanni_workout
- Herohero — subscription pricing: https://help.herohero.co/en/articles/9745378-subscription-pricing
- Herohero — platform fee / why Herohero: https://help.herohero.co/cs/articles/10742359-proc-zvolit-herohero
- Herohero — creator earning example: https://help.herohero.co/en/articles/12400285-understanding-ios-payments-and-creator-earnings
- Stripe Slovakia pricing: https://stripe.com/en-sk/pricing
- Stripe Billing Slovakia: https://stripe.com/en-sk/billing/pricing

**Poznámka:** externé cenníky a platformové pravidlá sa môžu meniť. Pred produkčnou migráciou alebo finančným rozhodnutím ich znovu overiť.
