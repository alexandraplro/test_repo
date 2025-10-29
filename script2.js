{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red89\green138\blue67;\red24\green24\blue24;\red193\green193\blue193;
\red70\green137\blue204;\red194\green126\blue101;\red212\green214\blue154;\red140\green211\blue254;\red183\green111\blue179;
\red202\green202\blue202;\red67\green192\blue160;\red66\green179\blue255;\red167\green197\blue152;\red205\green173\blue106;
}
{\*\expandedcolortbl;;\cssrgb\c41569\c60000\c33333;\cssrgb\c12157\c12157\c12157;\cssrgb\c80000\c80000\c80000;
\cssrgb\c33725\c61176\c83922;\cssrgb\c80784\c56863\c47059;\cssrgb\c86275\c86275\c66667;\cssrgb\c61176\c86275\c99608;\cssrgb\c77255\c52549\c75294;
\cssrgb\c83137\c83137\c83137;\cssrgb\c30588\c78824\c69020;\cssrgb\c30980\c75686\c100000;\cssrgb\c70980\c80784\c65882;\cssrgb\c84314\c72941\c49020;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // script.js \'97 site interactivity: menu toggle, smooth scroll, project filter, lightbox/modal, form validation\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 (\cf5 \strokec5 function\cf4 \strokec4  () \{\cb1 \
\cb3   \cf6 \strokec6 'use strict'\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 // Helper: select, on\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 $\cf4 \strokec4 (\cf8 \strokec8 sel\cf4 \strokec4 , \cf8 \strokec8 ctx\cf4 \strokec4 ) \{ \cf9 \strokec9 return\cf4 \strokec4  (\cf8 \strokec8 ctx\cf4 \strokec4  \cf10 \strokec10 ||\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 ).\cf7 \strokec7 querySelector\cf4 \strokec4 (\cf8 \strokec8 sel\cf4 \strokec4 ); \}\cb1 \
\cb3   \cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 $$\cf4 \strokec4 (\cf8 \strokec8 sel\cf4 \strokec4 , \cf8 \strokec8 ctx\cf4 \strokec4 ) \{ \cf9 \strokec9 return\cf4 \strokec4  \cf11 \strokec11 Array\cf4 \strokec4 .\cf12 \strokec12 prototype\cf4 \strokec4 .\cf7 \strokec7 slice\cf4 \strokec4 .\cf7 \strokec7 call\cf4 \strokec4 ((\cf8 \strokec8 ctx\cf4 \strokec4  \cf10 \strokec10 ||\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 ).\cf7 \strokec7 querySelectorAll\cf4 \strokec4 (\cf8 \strokec8 sel\cf4 \strokec4 )); \}\cb1 \
\
\cb3   \cf2 \strokec2 // Menu toggle\cf4 \cb1 \strokec4 \
\cb3   \cf8 \strokec8 window\cf4 \strokec4 .\cf7 \strokec7 toggleMenu\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 toggleMenu\cf4 \strokec4 () \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 btn\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf6 \strokec6 'nav-toggle'\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 nav\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf6 \strokec6 'primary-nav'\cf4 \strokec4 );\cb1 \
\cb3     \cf9 \strokec9 if\cf4 \strokec4  (\cf10 \strokec10 !\cf8 \strokec8 btn\cf4 \strokec4  \cf10 \strokec10 ||\cf4 \strokec4  \cf10 \strokec10 !\cf8 \strokec8 nav\cf4 \strokec4 ) \cf9 \strokec9 return\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 expanded\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 btn\cf4 \strokec4 .\cf7 \strokec7 getAttribute\cf4 \strokec4 (\cf6 \strokec6 'aria-expanded'\cf4 \strokec4 ) \cf10 \strokec10 ===\cf4 \strokec4  \cf6 \strokec6 'true'\cf4 \strokec4 ;\cb1 \
\cb3     \cf8 \strokec8 btn\cf4 \strokec4 .\cf7 \strokec7 setAttribute\cf4 \strokec4 (\cf6 \strokec6 'aria-expanded'\cf4 \strokec4 , \cf11 \strokec11 String\cf4 \strokec4 (\cf10 \strokec10 !\cf8 \strokec8 expanded\cf4 \strokec4 ));\cb1 \
\cb3     \cf8 \strokec8 nav\cf4 \strokec4 .\cf8 \strokec8 classList\cf4 \strokec4 .\cf7 \strokec7 toggle\cf4 \strokec4 (\cf6 \strokec6 'open'\cf4 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 // Wire the hamburger button\cf4 \cb1 \strokec4 \
\cb3   \cf8 \strokec8 document\cf4 \strokec4 .\cf7 \strokec7 addEventListener\cf4 \strokec4 (\cf6 \strokec6 'DOMContentLoaded'\cf4 \strokec4 , \cf5 \strokec5 function\cf4 \strokec4  () \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 btn\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf6 \strokec6 'nav-toggle'\cf4 \strokec4 );\cb1 \
\cb3     \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 btn\cf4 \strokec4 ) \cf8 \strokec8 btn\cf4 \strokec4 .\cf7 \strokec7 addEventListener\cf4 \strokec4 (\cf6 \strokec6 'click'\cf4 \strokec4 , \cf8 \strokec8 toggleMenu\cf4 \strokec4 );\cb1 \
\
\cb3     \cf2 \strokec2 // Smooth scrolling for internal links\cf4 \cb1 \strokec4 \
\cb3     \cf7 \strokec7 $$\cf4 \strokec4 (\cf6 \strokec6 "a[href^='#']"\cf4 \strokec4 ).\cf7 \strokec7 forEach\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4  (\cf8 \strokec8 a\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 href\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 a\cf4 \strokec4 .\cf7 \strokec7 getAttribute\cf4 \strokec4 (\cf6 \strokec6 'href'\cf4 \strokec4 );\cb1 \
\cb3       \cf9 \strokec9 if\cf4 \strokec4  (\cf10 \strokec10 !\cf8 \strokec8 href\cf4 \strokec4  \cf10 \strokec10 ||\cf4 \strokec4  \cf8 \strokec8 href\cf4 \strokec4  \cf10 \strokec10 ===\cf4 \strokec4  \cf6 \strokec6 '#'\cf4 \strokec4 ) \cf9 \strokec9 return\cf4 \strokec4 ;\cb1 \
\cb3       \cf8 \strokec8 a\cf4 \strokec4 .\cf7 \strokec7 addEventListener\cf4 \strokec4 (\cf6 \strokec6 'click'\cf4 \strokec4 , \cf5 \strokec5 function\cf4 \strokec4  (\cf8 \strokec8 e\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf2 \strokec2 // allow external anchors to proceed if they include domain\cf4 \cb1 \strokec4 \
\cb3         \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 href\cf4 \strokec4 .\cf7 \strokec7 indexOf\cf4 \strokec4 (\cf6 \strokec6 '#'\cf4 \strokec4 ) \cf10 \strokec10 !==\cf4 \strokec4  \cf13 \strokec13 0\cf4 \strokec4 ) \cf9 \strokec9 return\cf4 \strokec4 ;\cb1 \
\cb3         \cf8 \strokec8 e\cf4 \strokec4 .\cf7 \strokec7 preventDefault\cf4 \strokec4 ();\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 id\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 href\cf4 \strokec4 .\cf7 \strokec7 slice\cf4 \strokec4 (\cf13 \strokec13 1\cf4 \strokec4 );\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 el\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf8 \strokec8 id\cf4 \strokec4 );\cb1 \
\cb3         \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 el\cf4 \strokec4 ) \{\cb1 \
\cb3           \cf8 \strokec8 el\cf4 \strokec4 .\cf7 \strokec7 scrollIntoView\cf4 \strokec4 (\{ \cf8 \strokec8 behavior:\cf4 \strokec4  \cf6 \strokec6 'smooth'\cf4 \strokec4 , \cf8 \strokec8 block:\cf4 \strokec4  \cf6 \strokec6 'start'\cf4 \strokec4  \});\cb1 \
\cb3           \cf2 \strokec2 // close mobile nav after click\cf4 \cb1 \strokec4 \
\cb3           \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 nav\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf6 \strokec6 'primary-nav'\cf4 \strokec4 );\cb1 \
\cb3           \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 toggle\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf6 \strokec6 'nav-toggle'\cf4 \strokec4 );\cb1 \
\cb3           \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 nav\cf4 \strokec4  \cf10 \strokec10 &&\cf4 \strokec4  \cf8 \strokec8 toggle\cf4 \strokec4  \cf10 \strokec10 &&\cf4 \strokec4  \cf8 \strokec8 nav\cf4 \strokec4 .\cf8 \strokec8 classList\cf4 \strokec4 .\cf7 \strokec7 contains\cf4 \strokec4 (\cf6 \strokec6 'open'\cf4 \strokec4 )) \{\cb1 \
\cb3             \cf8 \strokec8 nav\cf4 \strokec4 .\cf8 \strokec8 classList\cf4 \strokec4 .\cf7 \strokec7 remove\cf4 \strokec4 (\cf6 \strokec6 'open'\cf4 \strokec4 );\cb1 \
\cb3             \cf8 \strokec8 toggle\cf4 \strokec4 .\cf7 \strokec7 setAttribute\cf4 \strokec4 (\cf6 \strokec6 'aria-expanded'\cf4 \strokec4 ,\cf6 \strokec6 'false'\cf4 \strokec4 );\cb1 \
\cb3           \}\cb1 \
\cb3         \}\cb1 \
\cb3       \});\cb1 \
\cb3     \});\cb1 \
\
\cb3     \cf2 \strokec2 // Projects filter: expose filterProjects globally\cf4 \cb1 \strokec4 \
\cb3     \cf8 \strokec8 window\cf4 \strokec4 .\cf7 \strokec7 filterProjects\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 filterProjects\cf4 \strokec4 (\cf8 \strokec8 category\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 projects\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf7 \strokec7 $$\cf4 \strokec4 (\cf6 \strokec6 '.project-item'\cf4 \strokec4 );\cb1 \
\cb3       \cf9 \strokec9 if\cf4 \strokec4  (\cf10 \strokec10 !\cf8 \strokec8 category\cf4 \strokec4  \cf10 \strokec10 ||\cf4 \strokec4  \cf8 \strokec8 category\cf4 \strokec4  \cf10 \strokec10 ===\cf4 \strokec4  \cf6 \strokec6 'all'\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf8 \strokec8 projects\cf4 \strokec4 .\cf7 \strokec7 forEach\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4  (\cf8 \strokec8 p\cf4 \strokec4 ) \{ \cf8 \strokec8 p\cf4 \strokec4 .\cf8 \strokec8 style\cf4 \strokec4 .\cf8 \strokec8 display\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 ''\cf4 \strokec4 ; \});\cb1 \
\cb3         \cf9 \strokec9 return\cf4 \strokec4 ;\cb1 \
\cb3       \}\cb1 \
\cb3       \cf8 \strokec8 projects\cf4 \strokec4 .\cf7 \strokec7 forEach\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4  (\cf8 \strokec8 p\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 cat\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 p\cf4 \strokec4 .\cf7 \strokec7 getAttribute\cf4 \strokec4 (\cf6 \strokec6 'data-category'\cf4 \strokec4 ) \cf10 \strokec10 ||\cf4 \strokec4  \cf6 \strokec6 ''\cf4 \strokec4 ;\cb1 \
\cb3         \cf8 \strokec8 p\cf4 \strokec4 .\cf8 \strokec8 style\cf4 \strokec4 .\cf8 \strokec8 display\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  (\cf8 \strokec8 cat\cf4 \strokec4  \cf10 \strokec10 ===\cf4 \strokec4  \cf8 \strokec8 category\cf4 \strokec4 ) \cf10 \strokec10 ?\cf4 \strokec4  \cf6 \strokec6 ''\cf4 \strokec4  \cf10 \strokec10 :\cf4 \strokec4  \cf6 \strokec6 'none'\cf4 \strokec4 ;\cb1 \
\cb3       \});\cb1 \
\cb3     \};\cb1 \
\
\cb3     \cf2 \strokec2 // Lightbox / Modal for project images\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 modal\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf5 \strokec5 null\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 modalImg\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf5 \strokec5 null\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 modalCaption\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf5 \strokec5 null\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 modalClose\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf5 \strokec5 null\cf4 \strokec4 ;\cb1 \
\
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 _previousActive\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf5 \strokec5 null\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 createModal\cf4 \strokec4 () \{\cb1 \
\cb3       \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 modal\cf4 \strokec4 ) \cf9 \strokec9 return\cf4 \strokec4 ;\cb1 \
\cb3       \cf8 \strokec8 modal\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf7 \strokec7 createElement\cf4 \strokec4 (\cf6 \strokec6 'div'\cf4 \strokec4 );\cb1 \
\cb3       \cf8 \strokec8 modal\cf4 \strokec4 .\cf8 \strokec8 className\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 'lightbox-modal'\cf4 \strokec4 ;\cb1 \
\cb3       \cf8 \strokec8 modal\cf4 \strokec4 .\cf7 \strokec7 setAttribute\cf4 \strokec4 (\cf6 \strokec6 'role'\cf4 \strokec4 ,\cf6 \strokec6 'dialog'\cf4 \strokec4 );\cb1 \
\cb3       \cf8 \strokec8 modal\cf4 \strokec4 .\cf7 \strokec7 setAttribute\cf4 \strokec4 (\cf6 \strokec6 'aria-modal'\cf4 \strokec4 ,\cf6 \strokec6 'true'\cf4 \strokec4 );\cb1 \
\cb3       \cf8 \strokec8 modal\cf4 \strokec4 .\cf7 \strokec7 setAttribute\cf4 \strokec4 (\cf6 \strokec6 'tabindex'\cf4 \strokec4 ,\cf6 \strokec6 '-1'\cf4 \strokec4 );\cb1 \
\cb3       \cf8 \strokec8 modal\cf4 \strokec4 .\cf8 \strokec8 innerHTML\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 "<div class=\cf14 \strokec14 \\"\cf6 \strokec6 lightbox-inner\cf14 \strokec14 \\"\cf6 \strokec6 >"\cf10 \strokec10 +\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 "<button class=\cf14 \strokec14 \\"\cf6 \strokec6 lightbox-close\cf14 \strokec14 \\"\cf6 \strokec6  aria-label=\cf14 \strokec14 \\"\cf6 \strokec6 Close\cf14 \strokec14 \\"\cf6 \strokec6 >&times;</button>"\cf10 \strokec10 +\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 "<img class=\cf14 \strokec14 \\"\cf6 \strokec6 lightbox-image\cf14 \strokec14 \\"\cf6 \strokec6  alt=\cf14 \strokec14 \\"\\"\cf6 \strokec6 >"\cf10 \strokec10 +\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 "<div class=\cf14 \strokec14 \\"\cf6 \strokec6 lightbox-caption\cf14 \strokec14 \\"\cf6 \strokec6 ></div>"\cf10 \strokec10 +\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 "</div>"\cf4 \strokec4 ;\cb1 \
\cb3       \cf8 \strokec8 document\cf4 \strokec4 .\cf8 \strokec8 body\cf4 \strokec4 .\cf7 \strokec7 appendChild\cf4 \strokec4 (\cf8 \strokec8 modal\cf4 \strokec4 );\cb1 \
\cb3       \cf8 \strokec8 modalImg\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 modal\cf4 \strokec4 .\cf7 \strokec7 querySelector\cf4 \strokec4 (\cf6 \strokec6 '.lightbox-image'\cf4 \strokec4 );\cb1 \
\cb3       \cf8 \strokec8 modalCaption\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 modal\cf4 \strokec4 .\cf7 \strokec7 querySelector\cf4 \strokec4 (\cf6 \strokec6 '.lightbox-caption'\cf4 \strokec4 );\cb1 \
\cb3       \cf8 \strokec8 modalClose\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 modal\cf4 \strokec4 .\cf7 \strokec7 querySelector\cf4 \strokec4 (\cf6 \strokec6 '.lightbox-close'\cf4 \strokec4 );\cb1 \
\
\cb3       \cf2 \strokec2 // Click outside or on close button closes modal\cf4 \cb1 \strokec4 \
\cb3       \cf8 \strokec8 modal\cf4 \strokec4 .\cf7 \strokec7 addEventListener\cf4 \strokec4 (\cf6 \strokec6 'click'\cf4 \strokec4 , \cf5 \strokec5 function\cf4 \strokec4  (\cf8 \strokec8 e\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 e\cf4 \strokec4 .\cf8 \strokec8 target\cf4 \strokec4  \cf10 \strokec10 ===\cf4 \strokec4  \cf8 \strokec8 modal\cf4 \strokec4  \cf10 \strokec10 ||\cf4 \strokec4  \cf8 \strokec8 e\cf4 \strokec4 .\cf8 \strokec8 target\cf4 \strokec4  \cf10 \strokec10 ===\cf4 \strokec4  \cf8 \strokec8 modalClose\cf4 \strokec4 ) \cf7 \strokec7 closeModal\cf4 \strokec4 ();\cb1 \
\cb3       \});\cb1 \
\
\cb3       \cf2 \strokec2 // Focus-trap: handle Tab inside modal\cf4 \cb1 \strokec4 \
\cb3       \cf8 \strokec8 modal\cf4 \strokec4 .\cf7 \strokec7 _trap\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf5 \strokec5 function\cf4 \strokec4  (\cf8 \strokec8 e\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 e\cf4 \strokec4 .\cf8 \strokec8 key\cf4 \strokec4  \cf10 \strokec10 ===\cf4 \strokec4  \cf6 \strokec6 'Escape'\cf4 \strokec4 ) \{ \cf7 \strokec7 closeModal\cf4 \strokec4 (); \cf9 \strokec9 return\cf4 \strokec4 ; \}\cb1 \
\cb3         \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 e\cf4 \strokec4 .\cf8 \strokec8 key\cf4 \strokec4  \cf10 \strokec10 !==\cf4 \strokec4  \cf6 \strokec6 'Tab'\cf4 \strokec4 ) \cf9 \strokec9 return\cf4 \strokec4 ;\cb1 \
\cb3         \cf2 \strokec2 // focusable selector\cf4 \cb1 \strokec4 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 focusable\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 modal\cf4 \strokec4 .\cf7 \strokec7 querySelectorAll\cf4 \strokec4 (\cf6 \strokec6 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'\cf4 \strokec4 );\cb1 \
\cb3         \cf9 \strokec9 if\cf4 \strokec4  (\cf10 \strokec10 !\cf8 \strokec8 focusable\cf4 \strokec4  \cf10 \strokec10 ||\cf4 \strokec4  \cf8 \strokec8 focusable\cf4 \strokec4 .\cf8 \strokec8 length\cf4 \strokec4  \cf10 \strokec10 ===\cf4 \strokec4  \cf13 \strokec13 0\cf4 \strokec4 ) \{ \cf8 \strokec8 e\cf4 \strokec4 .\cf7 \strokec7 preventDefault\cf4 \strokec4 (); \cf9 \strokec9 return\cf4 \strokec4 ; \}\cb1 \
\cb3         \cf8 \strokec8 focusable\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf11 \strokec11 Array\cf4 \strokec4 .\cf8 \strokec8 prototype\cf4 \strokec4 .\cf8 \strokec8 slice\cf4 \strokec4 .\cf7 \strokec7 call\cf4 \strokec4 (\cf8 \strokec8 focusable\cf4 \strokec4 );\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 first\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 focusable\cf4 \strokec4 [\cf13 \strokec13 0\cf4 \strokec4 ], \cf8 \strokec8 last\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 focusable\cf4 \strokec4 [\cf8 \strokec8 focusable\cf4 \strokec4 .\cf8 \strokec8 length\cf4 \strokec4  \cf10 \strokec10 -\cf4 \strokec4  \cf13 \strokec13 1\cf4 \strokec4 ];\cb1 \
\cb3         \cf9 \strokec9 if\cf4 \strokec4  (\cf10 \strokec10 !\cf8 \strokec8 e\cf4 \strokec4 .\cf8 \strokec8 shiftKey\cf4 \strokec4  \cf10 \strokec10 &&\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf8 \strokec8 activeElement\cf4 \strokec4  \cf10 \strokec10 ===\cf4 \strokec4  \cf8 \strokec8 last\cf4 \strokec4 ) \{ \cf8 \strokec8 e\cf4 \strokec4 .\cf7 \strokec7 preventDefault\cf4 \strokec4 (); \cf8 \strokec8 first\cf4 \strokec4 .\cf7 \strokec7 focus\cf4 \strokec4 (); \}\cb1 \
\cb3         \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 e\cf4 \strokec4 .\cf8 \strokec8 shiftKey\cf4 \strokec4  \cf10 \strokec10 &&\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf8 \strokec8 activeElement\cf4 \strokec4  \cf10 \strokec10 ===\cf4 \strokec4  \cf8 \strokec8 first\cf4 \strokec4 ) \{ \cf8 \strokec8 e\cf4 \strokec4 .\cf7 \strokec7 preventDefault\cf4 \strokec4 (); \cf8 \strokec8 last\cf4 \strokec4 .\cf7 \strokec7 focus\cf4 \strokec4 (); \}\cb1 \
\cb3       \};\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 openModal\cf4 \strokec4 (\cf8 \strokec8 src\cf4 \strokec4 , \cf8 \strokec8 caption\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf7 \strokec7 createModal\cf4 \strokec4 ();\cb1 \
\cb3       \cf8 \strokec8 _previousActive\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf8 \strokec8 activeElement\cf4 \strokec4 ;\cb1 \
\cb3       \cf8 \strokec8 modalImg\cf4 \strokec4 .\cf8 \strokec8 src\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 src\cf4 \strokec4 ;\cb1 \
\cb3       \cf8 \strokec8 modalImg\cf4 \strokec4 .\cf8 \strokec8 alt\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 caption\cf4 \strokec4  \cf10 \strokec10 ||\cf4 \strokec4  \cf6 \strokec6 ''\cf4 \strokec4 ;\cb1 \
\cb3       \cf8 \strokec8 modalCaption\cf4 \strokec4 .\cf8 \strokec8 textContent\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 caption\cf4 \strokec4  \cf10 \strokec10 ||\cf4 \strokec4  \cf6 \strokec6 ''\cf4 \strokec4 ;\cb1 \
\cb3       \cf8 \strokec8 modal\cf4 \strokec4 .\cf8 \strokec8 style\cf4 \strokec4 .\cf8 \strokec8 display\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 'block'\cf4 \strokec4 ;\cb1 \
\cb3       \cf8 \strokec8 document\cf4 \strokec4 .\cf8 \strokec8 body\cf4 \strokec4 .\cf8 \strokec8 classList\cf4 \strokec4 .\cf7 \strokec7 add\cf4 \strokec4 (\cf6 \strokec6 'no-scroll'\cf4 \strokec4 );\cb1 \
\cb3       \cf2 \strokec2 // attach key handler to modal for trapping focus and escape\cf4 \cb1 \strokec4 \
\cb3       \cf8 \strokec8 modal\cf4 \strokec4 .\cf7 \strokec7 addEventListener\cf4 \strokec4 (\cf6 \strokec6 'keydown'\cf4 \strokec4 , \cf8 \strokec8 modal\cf4 \strokec4 .\cf8 \strokec8 _trap\cf4 \strokec4 );\cb1 \
\cb3       \cf2 \strokec2 // move focus to close button for accessibility\cf4 \cb1 \strokec4 \
\cb3       \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 modalClose\cf4 \strokec4 ) \cf8 \strokec8 modalClose\cf4 \strokec4 .\cf7 \strokec7 focus\cf4 \strokec4 ();\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 closeModal\cf4 \strokec4 () \{\cb1 \
\cb3       \cf9 \strokec9 if\cf4 \strokec4  (\cf10 \strokec10 !\cf8 \strokec8 modal\cf4 \strokec4 ) \cf9 \strokec9 return\cf4 \strokec4 ;\cb1 \
\cb3       \cf8 \strokec8 modal\cf4 \strokec4 .\cf8 \strokec8 style\cf4 \strokec4 .\cf8 \strokec8 display\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 'none'\cf4 \strokec4 ;\cb1 \
\cb3       \cf8 \strokec8 document\cf4 \strokec4 .\cf8 \strokec8 body\cf4 \strokec4 .\cf8 \strokec8 classList\cf4 \strokec4 .\cf7 \strokec7 remove\cf4 \strokec4 (\cf6 \strokec6 'no-scroll'\cf4 \strokec4 );\cb1 \
\cb3       \cf8 \strokec8 modalImg\cf4 \strokec4 .\cf8 \strokec8 src\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 ''\cf4 \strokec4 ;\cb1 \
\cb3       \cf8 \strokec8 modalCaption\cf4 \strokec4 .\cf8 \strokec8 textContent\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 ''\cf4 \strokec4 ;\cb1 \
\cb3       \cf2 \strokec2 // remove trap handler and restore focus\cf4 \cb1 \strokec4 \
\cb3       \cf8 \strokec8 modal\cf4 \strokec4 .\cf7 \strokec7 removeEventListener\cf4 \strokec4 (\cf6 \strokec6 'keydown'\cf4 \strokec4 , \cf8 \strokec8 modal\cf4 \strokec4 .\cf8 \strokec8 _trap\cf4 \strokec4 );\cb1 \
\cb3       \cf9 \strokec9 try\cf4 \strokec4  \{ \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 _previousActive\cf4 \strokec4  \cf10 \strokec10 &&\cf4 \strokec4  \cf5 \strokec5 typeof\cf4 \strokec4  \cf8 \strokec8 _previousActive\cf4 \strokec4 .\cf8 \strokec8 focus\cf4 \strokec4  \cf10 \strokec10 ===\cf4 \strokec4  \cf6 \strokec6 'function'\cf4 \strokec4 ) \cf8 \strokec8 _previousActive\cf4 \strokec4 .\cf7 \strokec7 focus\cf4 \strokec4 (); \} \cf9 \strokec9 catch\cf4 \strokec4  (\cf8 \strokec8 e\cf4 \strokec4 ) \{ \cf2 \strokec2 /* ignore */\cf4 \strokec4  \}\cb1 \
\cb3       \cf8 \strokec8 _previousActive\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf5 \strokec5 null\cf4 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf2 \strokec2 // Attach lightbox to project images\cf4 \cb1 \strokec4 \
\cb3     \cf7 \strokec7 $$\cf4 \strokec4 (\cf6 \strokec6 '.project-image'\cf4 \strokec4 ).\cf7 \strokec7 forEach\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4  (\cf8 \strokec8 img\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf8 \strokec8 img\cf4 \strokec4 .\cf8 \strokec8 style\cf4 \strokec4 .\cf8 \strokec8 cursor\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 'zoom-in'\cf4 \strokec4 ;\cb1 \
\cb3       \cf8 \strokec8 img\cf4 \strokec4 .\cf7 \strokec7 addEventListener\cf4 \strokec4 (\cf6 \strokec6 'click'\cf4 \strokec4 , \cf5 \strokec5 function\cf4 \strokec4  (\cf8 \strokec8 e\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 src\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 img\cf4 \strokec4 .\cf8 \strokec8 src\cf4 \strokec4 ;\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 fig\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 img\cf4 \strokec4 .\cf7 \strokec7 closest\cf4 \strokec4 (\cf6 \strokec6 'figure'\cf4 \strokec4 );\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 cap\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 fig\cf4 \strokec4  \cf10 \strokec10 &&\cf4 \strokec4  \cf8 \strokec8 fig\cf4 \strokec4 .\cf7 \strokec7 querySelector\cf4 \strokec4 (\cf6 \strokec6 'figcaption'\cf4 \strokec4 ) \cf10 \strokec10 ?\cf4 \strokec4  \cf8 \strokec8 fig\cf4 \strokec4 .\cf7 \strokec7 querySelector\cf4 \strokec4 (\cf6 \strokec6 'figcaption'\cf4 \strokec4 ).\cf8 \strokec8 textContent\cf4 \strokec4  \cf10 \strokec10 :\cf4 \strokec4  \cf8 \strokec8 img\cf4 \strokec4 .\cf8 \strokec8 alt\cf4 \strokec4  \cf10 \strokec10 ||\cf4 \strokec4  \cf6 \strokec6 ''\cf4 \strokec4 ;\cb1 \
\cb3         \cf7 \strokec7 openModal\cf4 \strokec4 (\cf8 \strokec8 src\cf4 \strokec4 , \cf8 \strokec8 cap\cf4 \strokec4 );\cb1 \
\cb3       \});\cb1 \
\cb3     \});\cb1 \
\
\cb3     \cf2 \strokec2 // Make overlay buttons behave like controls (prevent event propagation)\cf4 \cb1 \strokec4 \
\cb3     \cf7 \strokec7 $$\cf4 \strokec4 (\cf6 \strokec6 '.overlay-btn'\cf4 \strokec4 ).\cf7 \strokec7 forEach\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4  (\cf8 \strokec8 btn\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf8 \strokec8 btn\cf4 \strokec4 .\cf7 \strokec7 addEventListener\cf4 \strokec4 (\cf6 \strokec6 'click'\cf4 \strokec4 , \cf5 \strokec5 function\cf4 \strokec4  (\cf8 \strokec8 e\cf4 \strokec4 ) \{ \cf8 \strokec8 e\cf4 \strokec4 .\cf7 \strokec7 stopPropagation\cf4 \strokec4 (); \cf2 \strokec2 /* future: open details */\cf4 \strokec4  \});\cb1 \
\cb3     \});\cb1 \
\
\cb3     \cf2 \strokec2 // Project click opens a popup window (small) with a focused view\cf4 \cb1 \strokec4 \
\cb3     \cf7 \strokec7 $$\cf4 \strokec4 (\cf6 \strokec6 '.project-item'\cf4 \strokec4 ).\cf7 \strokec7 forEach\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4  (\cf8 \strokec8 p\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf8 \strokec8 p\cf4 \strokec4 .\cf7 \strokec7 addEventListener\cf4 \strokec4 (\cf6 \strokec6 'click'\cf4 \strokec4 , \cf5 \strokec5 function\cf4 \strokec4  (\cf8 \strokec8 e\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf2 \strokec2 // if click is on a link/button inside, ignore\cf4 \cb1 \strokec4 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 tag\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  (\cf8 \strokec8 e\cf4 \strokec4 .\cf8 \strokec8 target\cf4 \strokec4 .\cf8 \strokec8 tagName\cf4 \strokec4  \cf10 \strokec10 ||\cf4 \strokec4  \cf6 \strokec6 ''\cf4 \strokec4 ).\cf7 \strokec7 toLowerCase\cf4 \strokec4 ();\cb1 \
\cb3         \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 tag\cf4 \strokec4  \cf10 \strokec10 ===\cf4 \strokec4  \cf6 \strokec6 'a'\cf4 \strokec4  \cf10 \strokec10 ||\cf4 \strokec4  \cf8 \strokec8 e\cf4 \strokec4 .\cf8 \strokec8 target\cf4 \strokec4 .\cf7 \strokec7 closest\cf4 \strokec4 (\cf6 \strokec6 '.overlay-btn'\cf4 \strokec4 )) \cf9 \strokec9 return\cf4 \strokec4 ;\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 title\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 p\cf4 \strokec4 .\cf7 \strokec7 querySelector\cf4 \strokec4 (\cf6 \strokec6 'h3'\cf4 \strokec4 ) \cf10 \strokec10 ?\cf4 \strokec4  \cf8 \strokec8 p\cf4 \strokec4 .\cf7 \strokec7 querySelector\cf4 \strokec4 (\cf6 \strokec6 'h3'\cf4 \strokec4 ).\cf8 \strokec8 textContent\cf4 \strokec4 .\cf7 \strokec7 trim\cf4 \strokec4 () \cf10 \strokec10 :\cf4 \strokec4  \cf6 \strokec6 'Project'\cf4 \strokec4 ;\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 content\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 p\cf4 \strokec4 .\cf7 \strokec7 querySelector\cf4 \strokec4 (\cf6 \strokec6 'p'\cf4 \strokec4 ) \cf10 \strokec10 ?\cf4 \strokec4  \cf8 \strokec8 p\cf4 \strokec4 .\cf7 \strokec7 querySelector\cf4 \strokec4 (\cf6 \strokec6 'p'\cf4 \strokec4 ).\cf8 \strokec8 outerHTML\cf4 \strokec4  \cf10 \strokec10 :\cf4 \strokec4  \cf6 \strokec6 ''\cf4 \strokec4 ;\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 w\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf13 \strokec13 600\cf4 \strokec4 , \cf8 \strokec8 h\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf13 \strokec13 520\cf4 \strokec4 ;\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 left\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  (\cf8 \strokec8 screen\cf4 \strokec4 .\cf8 \strokec8 width\cf10 \strokec10 /\cf13 \strokec13 2\cf4 \strokec4 )\cf10 \strokec10 -\cf4 \strokec4 (\cf8 \strokec8 w\cf10 \strokec10 /\cf13 \strokec13 2\cf4 \strokec4 );\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 top\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  (\cf8 \strokec8 screen\cf4 \strokec4 .\cf8 \strokec8 height\cf10 \strokec10 /\cf13 \strokec13 2\cf4 \strokec4 )\cf10 \strokec10 -\cf4 \strokec4 (\cf8 \strokec8 h\cf10 \strokec10 /\cf13 \strokec13 2\cf4 \strokec4 );\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 win\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 window\cf4 \strokec4 .\cf7 \strokec7 open\cf4 \strokec4 (\cf6 \strokec6 ''\cf4 \strokec4 , \cf6 \strokec6 '_blank'\cf4 \strokec4 , \cf6 \strokec6 'toolbar=0,location=0,menubar=0,width='\cf10 \strokec10 +\cf8 \strokec8 w\cf10 \strokec10 +\cf6 \strokec6 ',height='\cf10 \strokec10 +\cf8 \strokec8 h\cf10 \strokec10 +\cf6 \strokec6 ',top='\cf10 \strokec10 +\cf8 \strokec8 top\cf10 \strokec10 +\cf6 \strokec6 ',left='\cf10 \strokec10 +\cf8 \strokec8 left\cf4 \strokec4 );\cb1 \
\cb3         \cf9 \strokec9 if\cf4 \strokec4  (\cf10 \strokec10 !\cf8 \strokec8 win\cf4 \strokec4 ) \{\cb1 \
\cb3           \cf2 \strokec2 // fallback to modal if popup blocked\cf4 \cb1 \strokec4 \
\cb3           \cf7 \strokec7 openModal\cf4 \strokec4 (\cf8 \strokec8 p\cf4 \strokec4 .\cf7 \strokec7 querySelector\cf4 \strokec4 (\cf6 \strokec6 '.project-image'\cf4 \strokec4 ) \cf10 \strokec10 ?\cf4 \strokec4  \cf8 \strokec8 p\cf4 \strokec4 .\cf7 \strokec7 querySelector\cf4 \strokec4 (\cf6 \strokec6 '.project-image'\cf4 \strokec4 ).\cf8 \strokec8 src\cf4 \strokec4  \cf10 \strokec10 :\cf4 \strokec4  \cf6 \strokec6 ''\cf4 \strokec4 , \cf8 \strokec8 title\cf4 \strokec4  \cf10 \strokec10 +\cf4 \strokec4  \cf6 \strokec6 '\cf14 \strokec14 \\n\cf6 \strokec6 '\cf4 \strokec4  \cf10 \strokec10 +\cf4 \strokec4  (\cf8 \strokec8 p\cf4 \strokec4 .\cf7 \strokec7 querySelector\cf4 \strokec4 (\cf6 \strokec6 'p'\cf4 \strokec4 ) \cf10 \strokec10 ?\cf4 \strokec4  \cf8 \strokec8 p\cf4 \strokec4 .\cf7 \strokec7 querySelector\cf4 \strokec4 (\cf6 \strokec6 'p'\cf4 \strokec4 ).\cf8 \strokec8 textContent\cf4 \strokec4  \cf10 \strokec10 :\cf4 \strokec4  \cf6 \strokec6 ''\cf4 \strokec4 ));\cb1 \
\cb3           \cf9 \strokec9 return\cf4 \strokec4 ;\cb1 \
\cb3         \}\cb1 \
\cb3         \cf8 \strokec8 win\cf4 \strokec4 .\cf8 \strokec8 document\cf4 \strokec4 .\cf8 \strokec8 title\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 title\cf4 \strokec4 ;\cb1 \
\cb3         \cf8 \strokec8 win\cf4 \strokec4 .\cf8 \strokec8 document\cf4 \strokec4 .\cf8 \strokec8 body\cf4 \strokec4 .\cf8 \strokec8 style\cf4 \strokec4 .\cf8 \strokec8 fontFamily\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"\cf4 \strokec4 ;\cb1 \
\cb3         \cf8 \strokec8 win\cf4 \strokec4 .\cf8 \strokec8 document\cf4 \strokec4 .\cf8 \strokec8 body\cf4 \strokec4 .\cf8 \strokec8 innerHTML\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 '<div style="padding:20px"><h2>'\cf10 \strokec10 +\cf8 \strokec8 title\cf10 \strokec10 +\cf6 \strokec6 '</h2>'\cf4 \strokec4  \cf10 \strokec10 +\cf4 \strokec4  \cf8 \strokec8 content\cf4 \strokec4  \cf10 \strokec10 +\cf4 \strokec4  \cf6 \strokec6 '<p><button onclick="window.close();return false;">Close</button></p></div>'\cf4 \strokec4 ;\cb1 \
\cb3       \});\cb1 \
\cb3     \});\cb1 \
\
\cb3     \cf2 \strokec2 // Form validation and real-time feedback\cf4 \cb1 \strokec4 \
\cb3     (\cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 setupFormValidation\cf4 \strokec4 () \{\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 form\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf6 \strokec6 'contact-form'\cf4 \strokec4 );\cb1 \
\cb3       \cf9 \strokec9 if\cf4 \strokec4  (\cf10 \strokec10 !\cf8 \strokec8 form\cf4 \strokec4 ) \cf9 \strokec9 return\cf4 \strokec4 ;\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 name\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf6 \strokec6 'contact-name'\cf4 \strokec4 );\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 email\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf6 \strokec6 'contact-email'\cf4 \strokec4 );\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 message\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf6 \strokec6 'contact-message'\cf4 \strokec4 );\cb1 \
\
\cb3       \cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 createErrorEl\cf4 \strokec4 (\cf8 \strokec8 input\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 id\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 input\cf4 \strokec4 .\cf8 \strokec8 id\cf4 \strokec4  \cf10 \strokec10 +\cf4 \strokec4  \cf6 \strokec6 '-error'\cf4 \strokec4 ;\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 el\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf8 \strokec8 id\cf4 \strokec4 );\cb1 \
\cb3         \cf9 \strokec9 if\cf4 \strokec4  (\cf10 \strokec10 !\cf8 \strokec8 el\cf4 \strokec4 ) \{\cb1 \
\cb3           \cf8 \strokec8 el\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf7 \strokec7 createElement\cf4 \strokec4 (\cf6 \strokec6 'div'\cf4 \strokec4 );\cb1 \
\cb3           \cf8 \strokec8 el\cf4 \strokec4 .\cf8 \strokec8 className\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 'field-error'\cf4 \strokec4 ;\cb1 \
\cb3           \cf8 \strokec8 el\cf4 \strokec4 .\cf8 \strokec8 id\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 id\cf4 \strokec4 ;\cb1 \
\cb3           \cf8 \strokec8 el\cf4 \strokec4 .\cf7 \strokec7 setAttribute\cf4 \strokec4 (\cf6 \strokec6 'aria-live'\cf4 \strokec4 ,\cf6 \strokec6 'polite'\cf4 \strokec4 );\cb1 \
\cb3           \cf8 \strokec8 input\cf4 \strokec4 .\cf8 \strokec8 parentNode\cf4 \strokec4 .\cf7 \strokec7 appendChild\cf4 \strokec4 (\cf8 \strokec8 el\cf4 \strokec4 );\cb1 \
\cb3         \}\cb1 \
\cb3         \cf9 \strokec9 return\cf4 \strokec4  \cf8 \strokec8 el\cf4 \strokec4 ;\cb1 \
\cb3       \}\cb1 \
\
\cb3       \cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 validateField\cf4 \strokec4 (\cf8 \strokec8 input\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 el\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf7 \strokec7 createErrorEl\cf4 \strokec4 (\cf8 \strokec8 input\cf4 \strokec4 );\cb1 \
\cb3         \cf9 \strokec9 if\cf4 \strokec4  (\cf10 \strokec10 !\cf8 \strokec8 input\cf4 \strokec4 ) \cf9 \strokec9 return\cf4 \strokec4  \cf5 \strokec5 true\cf4 \strokec4 ;\cb1 \
\cb3         \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 input\cf4 \strokec4 .\cf8 \strokec8 validity\cf4 \strokec4 ) \{\cb1 \
\cb3           \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 input\cf4 \strokec4 .\cf8 \strokec8 validity\cf4 \strokec4 .\cf8 \strokec8 valueMissing\cf4 \strokec4 ) \{\cb1 \
\cb3             \cf8 \strokec8 el\cf4 \strokec4 .\cf8 \strokec8 textContent\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 'This field is required.'\cf4 \strokec4 ; \cf9 \strokec9 return\cf4 \strokec4  \cf5 \strokec5 false\cf4 \strokec4 ;\cb1 \
\cb3           \}\cb1 \
\cb3           \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 input\cf4 \strokec4 .\cf8 \strokec8 type\cf4 \strokec4  \cf10 \strokec10 ===\cf4 \strokec4  \cf6 \strokec6 'email'\cf4 \strokec4  \cf10 \strokec10 &&\cf4 \strokec4  \cf8 \strokec8 input\cf4 \strokec4 .\cf8 \strokec8 validity\cf4 \strokec4 .\cf8 \strokec8 typeMismatch\cf4 \strokec4 ) \{\cb1 \
\cb3             \cf8 \strokec8 el\cf4 \strokec4 .\cf8 \strokec8 textContent\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 'Please enter a valid email address.'\cf4 \strokec4 ; \cf9 \strokec9 return\cf4 \strokec4  \cf5 \strokec5 false\cf4 \strokec4 ;\cb1 \
\cb3           \}\cb1 \
\cb3           \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 input\cf4 \strokec4 .\cf8 \strokec8 minLength\cf4 \strokec4  \cf10 \strokec10 &&\cf4 \strokec4  \cf8 \strokec8 input\cf4 \strokec4 .\cf8 \strokec8 value\cf4 \strokec4 .\cf8 \strokec8 length\cf4 \strokec4  \cf10 \strokec10 <\cf4 \strokec4  \cf8 \strokec8 input\cf4 \strokec4 .\cf8 \strokec8 minLength\cf4 \strokec4 ) \{\cb1 \
\cb3             \cf8 \strokec8 el\cf4 \strokec4 .\cf8 \strokec8 textContent\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 'Please enter at least '\cf4 \strokec4  \cf10 \strokec10 +\cf4 \strokec4  \cf8 \strokec8 input\cf4 \strokec4 .\cf8 \strokec8 minLength\cf4 \strokec4  \cf10 \strokec10 +\cf4 \strokec4  \cf6 \strokec6 ' characters.'\cf4 \strokec4 ; \cf9 \strokec9 return\cf4 \strokec4  \cf5 \strokec5 false\cf4 \strokec4 ;\cb1 \
\cb3           \}\cb1 \
\cb3         \}\cb1 \
\cb3         \cf8 \strokec8 el\cf4 \strokec4 .\cf8 \strokec8 textContent\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 ''\cf4 \strokec4 ;\cb1 \
\cb3         \cf9 \strokec9 return\cf4 \strokec4  \cf5 \strokec5 true\cf4 \strokec4 ;\cb1 \
\cb3       \}\cb1 \
\
\cb3       [\cf8 \strokec8 name\cf4 \strokec4 ,\cf8 \strokec8 email\cf4 \strokec4 ,\cf8 \strokec8 message\cf4 \strokec4 ].\cf7 \strokec7 forEach\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4  (\cf8 \strokec8 field\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf9 \strokec9 if\cf4 \strokec4  (\cf10 \strokec10 !\cf8 \strokec8 field\cf4 \strokec4 ) \cf9 \strokec9 return\cf4 \strokec4 ;\cb1 \
\cb3         \cf8 \strokec8 field\cf4 \strokec4 .\cf7 \strokec7 addEventListener\cf4 \strokec4 (\cf6 \strokec6 'input'\cf4 \strokec4 , \cf5 \strokec5 function\cf4 \strokec4  () \{ \cf7 \strokec7 validateField\cf4 \strokec4 (\cf8 \strokec8 field\cf4 \strokec4 ); \});\cb1 \
\cb3         \cf8 \strokec8 field\cf4 \strokec4 .\cf7 \strokec7 addEventListener\cf4 \strokec4 (\cf6 \strokec6 'blur'\cf4 \strokec4 , \cf5 \strokec5 function\cf4 \strokec4  () \{ \cf7 \strokec7 validateField\cf4 \strokec4 (\cf8 \strokec8 field\cf4 \strokec4 ); \});\cb1 \
\cb3       \});\cb1 \
\
\cb3       \cf8 \strokec8 form\cf4 \strokec4 .\cf7 \strokec7 addEventListener\cf4 \strokec4 (\cf6 \strokec6 'submit'\cf4 \strokec4 , \cf5 \strokec5 function\cf4 \strokec4  (\cf8 \strokec8 e\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf8 \strokec8 e\cf4 \strokec4 .\cf7 \strokec7 preventDefault\cf4 \strokec4 ();\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 ok\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf5 \strokec5 true\cf4 \strokec4 ;\cb1 \
\cb3         [\cf8 \strokec8 name\cf4 \strokec4 ,\cf8 \strokec8 email\cf4 \strokec4 ,\cf8 \strokec8 message\cf4 \strokec4 ].\cf7 \strokec7 forEach\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4  (\cf8 \strokec8 f\cf4 \strokec4 ) \{ \cf9 \strokec9 if\cf4 \strokec4  (\cf8 \strokec8 f\cf4 \strokec4 ) \cf8 \strokec8 ok\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf7 \strokec7 validateField\cf4 \strokec4 (\cf8 \strokec8 f\cf4 \strokec4 ) \cf10 \strokec10 &&\cf4 \strokec4  \cf8 \strokec8 ok\cf4 \strokec4 ; \});\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 status\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf8 \strokec8 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf6 \strokec6 'contact-status'\cf4 \strokec4 );\cb1 \
\cb3         \cf9 \strokec9 if\cf4 \strokec4  (\cf10 \strokec10 !\cf8 \strokec8 ok\cf4 \strokec4 ) \{\cb1 \
\cb3           \cf8 \strokec8 status\cf4 \strokec4 .\cf8 \strokec8 className\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 'contact-status error'\cf4 \strokec4 ;\cb1 \
\cb3           \cf8 \strokec8 status\cf4 \strokec4 .\cf8 \strokec8 textContent\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 'Please correct the errors in the form and try again.'\cf4 \strokec4 ;\cb1 \
\cb3           \cf9 \strokec9 return\cf4 \strokec4 ;\cb1 \
\cb3         \}\cb1 \
\cb3         \cf2 \strokec2 // Simulate successful submit\cf4 \cb1 \strokec4 \
\cb3         \cf8 \strokec8 status\cf4 \strokec4 .\cf8 \strokec8 className\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 'contact-status success'\cf4 \strokec4 ;\cb1 \
\cb3         \cf8 \strokec8 status\cf4 \strokec4 .\cf8 \strokec8 textContent\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf6 \strokec6 'Thanks \'97 your message has been sent. I will reply shortly.'\cf4 \strokec4 ;\cb1 \
\cb3         \cf8 \strokec8 form\cf4 \strokec4 .\cf7 \strokec7 reset\cf4 \strokec4 ();\cb1 \
\cb3       \});\cb1 \
\cb3     \})();\cb1 \
\
\cb3   \}); \cf2 \strokec2 // DOMContentLoaded\cf4 \cb1 \strokec4 \
\
\cb3 \})();\cb1 \
\
}