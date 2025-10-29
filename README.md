# Alexandra Plazas Rocha — Portfolio (local)

This repository contains a small, static portfolio site built with HTML, CSS, and vanilla JavaScript.

Quick notes
- Fonts: Playfair Display (headings) and Inter (body) are loaded from Google Fonts in `index.html`.
- Theme: "Deep Night" page background with a light lavender header/footer and accessible color tokens.
- Interactivity: `script.js` implements the nav toggle, smooth scrolling, project filter, a lightbox modal (with focus trap), and client-side form validation.
- Contrast helper: `scripts/contrast_check.py` parses CSS variables and reports WCAG contrast ratios for key color pairs.

How to preview locally
1. From the project root, run a simple static server (Python 3):

```bash
python3 -m http.server 8000
```

2. Open http://localhost:8000 in your browser.

Developer notes
- I removed an inline nav-toggle script and centralized nav handling into `script.js` to avoid duplicate event bindings.
- The lightbox modal includes a small focus-trap so keyboard users remain inside the modal while it is open; Escape closes it.
- To re-run the contrast checker:

```bash
python3 scripts/contrast_check.py
```

If you'd like, I can add linting (ESLint/Stylelint) and a tiny npm-based dev script for live reload.
