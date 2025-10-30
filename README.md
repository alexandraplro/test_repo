# Alexandra Plazas Rocha — Portfolio

This repository contains a small, static portfolio site built with **HTML**, **CSS**, and **vanilla JavaScript**, designed to showcase responsive layout, accessible design, and interactive components.

## 🖋️ Quick Notes

- **Fonts**: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (headings) and [Inter](https://fonts.google.com/specimen/Inter) (body) are loaded via Google Fonts in `index.html`.
- **Theme**: “Deep Night” background with soft lavender header/footer and WCAG-compliant color tokens.
- **Interactivity**: `script.js` handles:
  - Responsive nav toggle with animated hamburger/X icon
  - Smooth scrolling
  - Project filtering
  - Lightbox modal with focus trap
  - Client-side form validation
- **Contrast helper**: `scripts/contrast_check.py` parses CSS variables and reports WCAG contrast ratios for key color pairs.

## 🧪 How to Preview Locally

From the project root, run a simple static server using Python 3:

```bash
python3 -m http.server 8000

Then open http://localhost:8000 in your browser.

Developer Notes
Refactored nav toggle logic into script.js to avoid duplicate event bindings and improve maintainability.

Lightbox modal includes a keyboard-accessible focus trap; Escape key closes the modal.

Responsive layout uses flexbox, rem units, and media queries for scalable typography and mobile-friendly behavior.

CSS variables are used for theme consistency and contrast validation.

To re-run the contrast checker:

python3 scripts/contrast_check.py

Optional Enhancements
Add linting with ESLint and Stylelint

Create a minimal npm-based dev script for live reload

Integrate GitHub Pages for public preview

Write release notes for tagged versions (e.g., v1.1)


---


