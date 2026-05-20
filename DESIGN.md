---
name: Ultra-High Performance Athletics
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e8bdb6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ae8882'
  outline-variant: '#5e3f3a'
  surface-tint: '#ffb4a8'
  primary: '#ffb4a8'
  on-primary: '#690000'
  primary-container: '#cc0000'
  on-primary-container: '#ffdad4'
  inverse-primary: '#c00000'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#b7c4ff'
  on-tertiary: '#002681'
  tertiary-container: '#0052f9'
  on-tertiary-container: '#dce1ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930000'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b7c4ff'
  on-tertiary-fixed: '#001551'
  on-tertiary-fixed-variant: '#0039b4'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Bebas Neue
    fontSize: 120px
    fontWeight: '700'
    lineHeight: 110px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 96px
    fontWeight: '700'
    lineHeight: 88px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Bebas Neue
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 60px
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 44px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.7'
  label-bold:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.1em
  stats-num:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.05em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 128px
---

## Brand & Style
This design system embodies the raw intensity and uncompromising discipline of elite personal training. Targeted at high-net-worth individuals and professional athletes, the aesthetic is **Cinematic Minimalism** mixed with **Editorial Brutalism**. 

The UI should evoke an emotional response of focus, power, and exclusivity. By utilizing a "Dark Mode First" approach, the interface fades into the background, allowing high-contrast typography and desaturated photography to create a premium, gallery-like experience. Visual cues are inspired by professional sports broadcasting and luxury fitness editorials: sharp edges, heavy weights, and aggressive use of negative space.

## Colors
The palette is rooted in deep blacks and strategic greys to create a sense of infinite depth. 
- **Primary Red (#CC0000):** Used sparingly as a "heartbeat" throughout the UI. It signifies action, intensity, and critical data points.
- **Backgrounds:** The foundation is absolute black (#0D0D0D) to ensure perfect contrast with the primary red and white typography.
- **Surfaces:** Subtle shifts to #111111 and #141414 provide necessary container separation without relying on shadows.
- **Typography:** Pure white is reserved for headlines to maximize impact, while silver and charcoal greys handle body text and metadata to reduce eye strain in high-contrast environments.

## Typography
Typography is the primary driver of the brand's hierarchy. 
- **Headlines:** Use **Bebas Neue**. It must always be uppercase. For hero sections, use `display-xl` to create a "wall of text" effect that feels architectural.
- **Body:** Use **Montserrat**. This provides a geometric, modern balance to the condensed headlines. High line-height (1.7+) is mandatory to ensure readability against the dark background and to maintain an editorial feel.
- **Speciality:** Labels and small identifiers should use wide-tracked, bold Montserrat to maintain a technical, "data-readout" aesthetic.

## Layout & Spacing
The layout follows a **Rigid Grid** philosophy. Content should feel locked into place, resembling a high-end magazine or a technical blueprint.

- **Grid:** A 12-column system for desktop with 24px gutters. Use heavy margins (64px+) to frame content and create a sense of luxury.
- **Rhythm:** Utilize an 8px base unit. Section vertical spacing should be aggressive (128px+) to allow the massive typography room to breathe.
- **Mobile:** Transition to a 4-column grid. Large headlines should be allowed to break slightly or use significant negative space to maintain the "cinematic" feel on smaller screens.

## Elevation & Depth
This design system eschews traditional shadows in favor of **Tonal Layering** and **High-Contrast Outlines**.

- **Stacked Surfaces:** Depth is achieved by placing #141414 cards over #0D0D0D backgrounds. 
- **The "Reticle" Effect:** Instead of shadows to highlight elements, use 1px solid borders in #777777 or Primary Red.
- **Glassmorphism (Limited):** Only use backdrop blurs (20px+) on navigation bars to maintain legibility when scrolling over desaturated, high-grain imagery.
- **Imagery:** Photos should be desaturated, high-contrast, and often utilize a dark gradient overlay (Bottom-to-Top) to ensure white text remains legible.

## Shapes
The shape language is **strictly orthogonal**. All buttons, cards, input fields, and image containers must have a border-radius of **0px**. 

Sharp corners convey precision, strength, and an uncompromising attitude. To prevent the UI from feeling "flat," use thin 1px accents (red underscores or L-shaped corner brackets) to frame important content.

## Components
- **Buttons:** Solid #CC0000 with white uppercase text for primary actions. Secondary buttons are ghost-style with a 1px #F5F5F5 border. No rounded corners. Hover states should involve a color inversion or a subtle inner glow.
- **Cards:** Background color #111111. No border by default, but use a 4px left-side accent bar in Primary Red to indicate "active" or "featured" cards.
- **Input Fields:** Bottom-border only (1px #777777). Focus state changes the border to #CC0000. Labels sit above in bold, uppercase Montserrat.
- **Chips/Tags:** Small, rectangular boxes with #141414 background and #AAAAAA text. Use for workout categories or muscle groups.
- **Data Visualization:** Use thin, sharp lines for charts. Progress bars should be thick, solid blocks of #CC0000 against a #141414 track.
- **Corner Reticles:** Use 8px L-shaped decorative lines in #CC0000 on the corners of hero images to evoke a "camera viewfinder" or "targeting" aesthetic.
