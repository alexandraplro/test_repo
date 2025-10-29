{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Bold;\f1\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red70\green137\blue204;\red24\green24\blue24;\red193\green193\blue193;
\red85\green129\blue224;\red194\green126\blue101;\red212\green214\blue154;\red202\green202\blue202;\red167\green197\blue152;
}
{\*\expandedcolortbl;;\cssrgb\c33725\c61176\c83922;\cssrgb\c12157\c12157\c12157;\cssrgb\c80000\c80000\c80000;
\cssrgb\c40392\c58824\c90196;\cssrgb\c80784\c56863\c47059;\cssrgb\c86275\c86275\c66667;\cssrgb\c83137\c83137\c83137;\cssrgb\c70980\c80784\c65882;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\b\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 # Alexandra Plazas Rocha \'97 Portfolio (local)
\f1\b0 \cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 This repository contains a small, static portfolio site built with HTML, CSS, and vanilla JavaScript.\cb1 \
\
\cb3 Quick notes\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 -\cf4 \strokec4  Fonts: Playfair Display (headings) and Inter (body) are loaded from Google Fonts in \cf6 \strokec6 `index.html`\cf4 \strokec4 .\cb1 \
\cf5 \cb3 \strokec5 -\cf4 \strokec4  Theme: "Deep Night" page background with a light lavender header/footer and accessible color tokens.\cb1 \
\cf5 \cb3 \strokec5 -\cf4 \strokec4  Interactivity: \cf6 \strokec6 `script.js`\cf4 \strokec4  implements the nav toggle, smooth scrolling, project filter, a lightbox modal (with focus trap), and client-side form validation.\cb1 \
\cf5 \cb3 \strokec5 -\cf4 \strokec4  Contrast helper: \cf6 \strokec6 `scripts/contrast_check.py`\cf4 \strokec4  parses CSS variables and reports WCAG contrast ratios for key color pairs.\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 How to preview locally\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 1.\cf4 \strokec4  From the project root, run a simple static server (Python 3):\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 ```bash\cb1 \
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 python3\cf8 \strokec8  \cf2 \strokec2 -m\cf8 \strokec8  \cf6 \strokec6 http.server\cf8 \strokec8  \cf9 \strokec9 8000\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 ```\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 2.\cf4 \strokec4  Open http://localhost:8000 in your browser.\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 Developer notes\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 -\cf4 \strokec4  I removed an inline nav-toggle script and centralized nav handling into \cf6 \strokec6 `script.js`\cf4 \strokec4  to avoid duplicate event bindings.\cb1 \
\cf5 \cb3 \strokec5 -\cf4 \strokec4  The lightbox modal includes a small focus-trap so keyboard users remain inside the modal while it is open; Escape closes it.\cb1 \
\cf5 \cb3 \strokec5 -\cf4 \strokec4  To re-run the contrast checker:\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 ```bash\cb1 \
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 python3\cf8 \strokec8  \cf6 \strokec6 scripts/contrast_check.py\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 ```\cb1 \
\
\cb3 If you'd like, I can add linting (ESLint/Stylelint) and a tiny npm-based dev script for live reload.\cb1 \
\
}