# Stitch UI Prompts — Thiago Silva | Personal Trainer

**Paleta oficial confirmada:**
- Background: `#0D0D0D` (quase preto)
- Superfícies/cards: `#141414` / `#1A1A1A`
- Texto primário: `#F5F5F5` (branco quente)
- Texto secundário: `#9A9A9A`
- Acento principal: `#CC0000` (vermelho intenso — ref. logo)
- Acento hover: `#FF1A1A`
- Bordas sutis: `#2A2A2A`

---

## TELA 1 — Hero Section

```
Design a full-screen hero section for a Brazilian personal trainer's website. The overall aesthetic is dark, powerful, and premium — think high-end sports brand meets elite coaching studio.

BACKGROUND & ATMOSPHERE:
The background fills the entire viewport (100vh). Use a near-black color (#0D0D0D) as the base. Over it, place a dramatic full-bleed dark photograph of a gym environment — heavy iron plates, a barbell rack with dramatic side lighting, or a silhouette of an athlete mid-movement. Apply a deep dark overlay gradient on top of the photo: from rgba(0,0,0,0.75) on the left/center fading to rgba(0,0,0,0.45) on the right, creating a cinematic, editorial atmosphere. The image is moody, desaturated, high contrast — no bright or colorful gym stock photos.

NAVBAR (top of screen, sticky):
Fixed horizontal navbar, fully transparent over the hero. Height: 72px. Left side: the brand logo — text-based, "THIAGO SILVA" in ultra-bold condensed uppercase white letters with a subtle 1.5px red (#CC0000) underline accent below "SILVA". Below the name, "PERSONAL TRAINER" in a much smaller weight-500 uppercase tracked-out label in red (#CC0000). Right side: three navigation links — "Início", "Sobre", "Especialidades" — in uppercase, letter-spacing: 0.1em, font-weight 500, color #CCCCCC. On hover, the link turns white and a 2px red bottom border slides in. The navbar has no background; it blends into the hero photo.

HERO CONTENT (vertically centered, left-aligned, max-width container):
Stack of elements with generous vertical spacing:

1. EYEBROW TAG: A small pill-shaped label, background #CC0000, white uppercase text "PERSONAL TRAINER · FORTALEZA CE", font-size 11px, letter-spacing 0.15em, border-radius 2px, padding 6px 14px. Positioned above the headline.

2. HEADLINE: Two-line massive headline in ultra-bold condensed uppercase — "TRANSFORME SEU CORPO." on line one, "TRANSFORME SUA VIDA." on line two. Font: Bebas Neue or a heavy condensed black typeface. Size: ~96px on desktop. Color: pure white (#F5F5F5). No line gap between the two lines. The word "TRANSFORME" is slightly smaller than the rest to create rhythm. A thin red (#CC0000) vertical bar (4px wide, 80px tall) sits to the left of the headline block as a strong visual anchor.

3. SUBHEADLINE: Below the headline, a single paragraph in regular weight, size 18px, color #AAAAAA, max-width 520px, line-height 1.6. Text: "Acompanhamento personalizado com método, ciência e compromisso com o seu resultado. Presencial em Fortaleza e Caucaia · Consultoria Online."

4. CTA BUTTON: A bold rectangular button — NOT rounded pill — sharp corners (border-radius 0), background #CC0000, white uppercase text "QUERO COMEÇAR AGORA", font-weight 700, letter-spacing 0.08em, font-size 15px, padding 18px 42px. A small WhatsApp icon (white) sits to the left of the label. A subtle glow effect: box-shadow 0 0 32px rgba(204,0,0,0.4). Below the button, a secondary ghost-style text link "ou fale pelo Instagram @personaltrainerthiagosilva" in #777777, underline on hover.

BOTTOM DECORATION:
At the very bottom of the hero, a thin horizontal red line (1px, full width, #CC0000, opacity 0.4) separates it from the next section. Optionally, a subtle scroll indicator — a small white arrow or "scroll" label in #555555 centered at the bottom.

OVERALL FEEL: Like a high-end MMA fighter's official site or a premium CrossFit box — dark, dramatic, authoritative, no gradients in pastel or neon. Every element should feel intentional and heavy.
```

---

## TELA 2 — Sobre o Profissional

```
Design a full-width "About" section for a Brazilian personal trainer's premium dark website. This section comes directly below the hero. It must feel authoritative, human, and credible — like a premium sports magazine profile spread.

SECTION BACKGROUND:
Background color #111111 (slightly lighter than the hero's #0D0D0D to create depth distinction). Full width. Vertical padding: 120px top and bottom. A very subtle diagonal texture pattern (micro noise or fine crosshatch at 3% opacity in dark gray) adds tactile richness without visual clutter.

LAYOUT — TWO COLUMNS, 50/50 on desktop:
Left column: professional photo. Right column: text content.

LEFT COLUMN — PHOTO BLOCK:
A large, tall portrait photo of Thiago in a gym setting — ideally a 3/4 length shot, serious expression, athletic posture, wearing professional training attire. The photo has a slight desaturated edit (not black and white, but cooler tones, high contrast). The photo container has NO border-radius — sharp rectangular crop. 
Design detail: Behind the photo, offset slightly down-right, is a solid red (#CC0000) rectangle block (about 90% of the photo's dimensions) — this creates a bold "shadow" frame effect that anchors the photo visually. The photo overlaps this red block by about 20px on top and left. 
Below the photo, a small credibility badge: dark pill shape (#1A1A1A border #2A2A2A), text "CREF: 021579-G/CE" in #999999, monospace or semi-mono style — reinforcing official accreditation.

RIGHT COLUMN — TEXT CONTENT:
Stacked vertically with clear spacing:

1. SECTION LABEL: Small uppercase tag "SOBRE O PROFISSIONAL" in red (#CC0000), letter-spacing 0.2em, font-size 11px, font-weight 600. Sits above the section title.

2. SECTION TITLE: "Quem é Thiago Silva Rodrigues?" in bold white, font-size ~42px, font-weight 800, line-height 1.15. The word "Thiago Silva" could have a slight red underline accent or be split to a second line for visual emphasis.

3. BODY TEXT (two paragraphs): Font-size 16px, color #BBBBBB, line-height 1.8, max-width 520px.
Paragraph 1: "Sou Personal Trainer com Licenciatura Plena em Educação Física e Pós-graduação em Fisiologia do Exercício e Biomecânica. Minha missão vai além de montar treinos — trabalho com transformação física, mental e qualidade de vida através de um acompanhamento estratégico, individualizado e 100% focado no seu objetivo."
Paragraph 2: "Sou Faixa Preta de Jiu-Jitsu 1º Grau e carrego para cada treino a mesma disciplina que aprendi nas artes marciais. Com formação contínua e experiência em academias e projetos universitários, garanto que cada aluno receba o melhor da ciência aplicada ao treinamento."

4. FORMATION LIST (4 items): A vertical list with generous spacing between items. Each item has:
- A small red square bullet or checkmark icon on the left (16px, color #CC0000)
- Short text label in white (#F0F0F0), font-weight 600, font-size 15px
- Below the label, a smaller descriptor in #777777, font-size 13px
Items: "Licenciatura Plena em Educação Física", "Pós-graduando em Fisiologia do Exercício e Biomecânica", "Faixa Preta de Jiu-Jitsu 1º Grau", "CREF 021579-G/CE — Ativo".

5. LOCATION BADGES: Two horizontal inline chips/tags. Each chip: background #1A1A1A, border 1px solid #2A2A2A, border-radius 4px, padding 8px 16px. Icons: map pin in red for "Fortaleza & Caucaia", globe icon in red for "Consultoria Online". Text in #CCCCCC, font-size 13px.

6. SECONDARY CTA: A ghost (outline) button below — border 1.5px solid #CC0000, text "FALE COMIGO NO WHATSAPP" in #CC0000, font-weight 700, uppercase, letter-spacing 0.08em, padding 14px 32px, border-radius 0 (sharp). On hover state shown: background fills to #CC0000, text turns white.

DIVIDER ELEMENT:
A thin horizontal line (#2A2A2A, 1px) at the very bottom of the section spanning full width — separating this section from the next.

OVERALL FEEL: Like a fighter's official career profile page — intimate, powerful, credentialed. The photo/red-shadow combination is the hero of this section.
```

---

## TELA 3 — Institucional (Especialidades & Credenciais)

```
Design a full-width "Institutional" section for a Brazilian personal trainer's premium dark website. This is the final main section of the page. It must feel organized, authoritative, and close the experience with strong visual impact — like a premium sports franchise's "why us" page.

SECTION BACKGROUND:
Background #0D0D0D (back to the darkest tone, creating alternation with the previous #111111 section). Full width. Vertical padding: 120px top, 160px bottom (extra bottom for breathing room before the footer).

SECTION HEADER (centered):
1. LABEL: Small uppercase "ESPECIALIDADES & CREDENCIAIS" in red (#CC0000), letter-spacing 0.2em, font-size 11px, font-weight 600.
2. TITLE: "Método, Formação e Resultado." in white, font-weight 800, font-size ~52px, centered. A thin red horizontal line (60px wide, 3px tall, #CC0000) sits centered directly below the title as a divider accent.
3. SUBTITLE: A single line below: "Cada área trabalhada com ciência aplicada e acompanhamento real." in #888888, font-size 16px, centered.

SPECIALTIES GRID (below header):
A 4-column grid (desktop) of specialty cards. 7 cards total (last row has 3 centered). Each card:
- Background: #141414
- Border: 1px solid #222222
- Border-radius: 0 (sharp, angular — consistent with brand aesthetic)
- Padding: 32px 24px
- On top-left corner: a thin red L-shaped corner accent (2px lines, 16px each side, color #CC0000) — like a targeting reticle corner
- Icon: a stroke-style icon (white, 32px) centered or top-left representing the specialty
- Title: specialty name in white, font-weight 700, font-size 17px, margin-top 16px
- No additional description text — the card is intentionally minimal and clean

Cards (icon + title):
1. Dumbbell icon → "Hipertrofia"
2. Flame icon → "Emagrecimento"
3. Body posture/person icon → "Correção Postural"
4. Muscle/strength icon → "Treinamento de Força"
5. Medical cross/bandage icon → "Reabilitação e Prevenção"
6. Lightning bolt icon → "Condicionamento Físico"
7. Trophy/medal icon → "Performance e Qualidade de Vida"

Hover state (one card shown in hover): border color changes to #CC0000, card background lifts to #1A1A1A, icon turns red.

CREDENTIALS BLOCK (below specialties grid):
Full-width dark strip, background #111111, padding 64px. Two columns inside:

LEFT COLUMN — "Formação Acadêmica":
Column title in red uppercase "FORMAÇÃO", letter-spacing 0.15em. Below: a vertical list of 4 credentials. Each item has a thin red left border (3px, #CC0000) and padding-left 16px:
- "Licenciatura Plena em Educação Física" — white, font-weight 600
- "Pós-graduando em Fisiologia do Exercício e Biomecânica" — white, font-weight 600
- "Faixa Preta de Jiu-Jitsu 1º Grau" — white, font-weight 600
- "CREF: 021579-G/CE" — red (#CC0000), font-weight 700, monospace style

RIGHT COLUMN — "Experiência Profissional":
Column title in red uppercase "EXPERIÊNCIA". A timeline-style vertical list where each item shows:
- A small red dot (6px) on a vertical gray line (1px, #333333)
- Institution name in white, font-weight 600, font-size 15px
- Role in #888888, font-size 13px
Items: Academia Greenlife, Iron CT, Funcional Life, Academia Visual & Estilo, FATENE Jiu-Jitsu, Academia ZABAF.

FINAL CTA BLOCK (bottom of section, centered):
Dark background panel with subtle red glow: background #0D0D0D, box-shadow 0 0 80px rgba(204,0,0,0.12) inset. Padding 80px.
- Overline: "PRONTO PARA COMEÇAR?" in red, uppercase, letter-spacing 0.2em
- Headline: "Sua transformação começa com uma decisão." in white, font-weight 800, font-size 40px, centered.
- Subtext: "Presencial em Fortaleza e Caucaia ou online para todo o Brasil." in #888888.
- Primary CTA button: same style as Hero — solid red (#CC0000), sharp corners, white text "FALAR COM O THIAGO AGORA", WhatsApp icon left, full glow effect.
- Instagram secondary link: "@personaltrainerthiagosilva" in #666666 with Instagram icon.

FOOTER STRIP (below the CTA, minimal):
Thin full-width strip, background #0A0A0A, padding 24px. Centered text: "© 2025 Thiago Silva Rodrigues · Personal Trainer · CREF 021579-G/CE" in #444444, font-size 12px.

OVERALL FEEL: A premium sports institution's credential wall — rigorous, organized, confident. The red corner accents on cards and the timeline credentials list give it an editorial-sports feel, like Nike's athlete pages or a high-end MMA gym's website.
```
