# TradeMastery.io - Codebase Architecture & Developer Guide

Welcome to the **TradeMastery.io** frontend codebase. This repository was designed with a modular, maintainable CSS token design system and clean component hierarchy.

---

## 📁 Repository Structure

```
pivotcall-redesign/
├── index.html            # Main semantic HTML5 web app structure
├── styles.css            # Consolidated design system & responsive layout styles
├── script.js            # Modular interactive JavaScript handlers
├── mentor_cutout.png     # High-res Hero section mentor cutout PNG
├── about_mentor.jpg      # High-res About Me section mentor portrait JPG
└── README.md             # Developer architecture documentation
```

---

## 🎨 CSS Architecture (`styles.css`)

The stylesheet is structured into **5 distinct architectural layers**:

1. **Tokens & CSS Variables (`:root`)**:
   - Palette: `--bg-primary`, `--bg-secondary`, `--hero-card-bg`, `--badge-emerald` (`#6EE7B7`), `--accent-primary` (`#FF5722`).
   - Typography: `--heading-font` (`Montserrat`), `--body-font` (`Inter`).
   - Geometry: `--card-radius` (`24px`), `--btn-radius` (`9999px`), `--border-color`.

2. **Base & Resets**:
   - Universal resets (`*`), global smooth scrolling, viewport overflow lock.

3. **Reusable Utilities & Buttons**:
   - `.btn-pill`, `.btn-primary-cta`, `.btn-header`, `.btn-top-pill`.

4. **Desktop Section Layouts**:
   - Sections numbered 4.1 to 4.10 (Market Bias Ticker, Sticky Header, Hero Banner Card, Hero Stats Grid, About Mentor, Courses, Lead Banner, Books, Testimonials, Footer).

5. **Consolidated Media Queries**:
   - **`@media (max-width: 1080px)`**: Laptop & Tablet layout rules.
   - **`@media (max-width: 960px)`**: Navigation drawer & mobile bottom navigation bars.
   - **`@media (max-width: 640px)`**: Mobile layout rules (touch snap carousels, responsive mentor portrait framing, compact card grids).

---

## 📱 Mobile Layout Guidelines

- **Mobile Navigation Bars**:
  - `.mobile-app-bottom-bar`: Fixed native app bottom tab bar (`bottom: 0`, `height: 60px`).
  - `.mobile-sticky-enroll-bar`: Fixed sticky CTA bar (`bottom: 60px`, `height: 56px`).
- **Hero & About Photos**:
  - Hero cutout: `.mentor-cutout-photo` with `object-fit: contain`.
  - About mentor: `.about-photo-wrapper` with `object-fit: contain` and `#022C22` emerald background fill.

---

## 🚀 Local Development

To run the site locally:
```bash
python3 -m http.server 8080
```
Open [http://localhost:8080](http://localhost:8080) in Chrome or mobile device mode.
