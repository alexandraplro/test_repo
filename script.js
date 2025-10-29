// script.js — site interactivity: menu toggle, smooth scroll, project filter, lightbox/modal, form validation
(function () {
  'use strict';

  // Helper: select, on
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  // Menu toggle
  window.toggleMenu = function toggleMenu() {
    var btn = document.getElementById('nav-toggle');
    var nav = document.getElementById('primary-nav');
    if (!btn || !nav) return;
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  };

  // Wire the hamburger button
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('nav-toggle');
    if (btn) btn.addEventListener('click', toggleMenu);

    // Smooth scrolling for internal links
    $$("a[href^='#']").forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || href === '#') return;
      a.addEventListener('click', function (e) {
        // allow external anchors to proceed if they include domain
        if (href.indexOf('#') !== 0) return;
        e.preventDefault();
        var id = href.slice(1);
        var el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // close mobile nav after click
          var nav = document.getElementById('primary-nav');
          var toggle = document.getElementById('nav-toggle');
          if (nav && toggle && nav.classList.contains('open')) {
            nav.classList.remove('open');
            toggle.setAttribute('aria-expanded','false');
          }
        }
      });
    });

    // Projects filter: expose filterProjects globally
    window.filterProjects = function filterProjects(category) {
      var projects = $$('.project-item');
      if (!category || category === 'all') {
        projects.forEach(function (p) { p.style.display = ''; });
        return;
      }
      projects.forEach(function (p) {
        var cat = p.getAttribute('data-category') || '';
        p.style.display = (cat === category) ? '' : 'none';
      });
    };

    // Lightbox / Modal for project images
    var modal = null;
    var modalImg = null;
    var modalCaption = null;
    var modalClose = null;

    function createModal() {
      if (modal) return;
      modal = document.createElement('div');
      modal.className = 'lightbox-modal';
      modal.setAttribute('role','dialog');
      modal.setAttribute('aria-modal','true');
      modal.innerHTML = "<div class=\"lightbox-inner\">"+
        "<button class=\"lightbox-close\" aria-label=\"Close\">&times;</button>"+
        "<img class=\"lightbox-image\" alt=\"\">"+
        "<div class=\"lightbox-caption\"></div>"+
        "</div>";
      document.body.appendChild(modal);
      modalImg = modal.querySelector('.lightbox-image');
      modalCaption = modal.querySelector('.lightbox-caption');
      modalClose = modal.querySelector('.lightbox-close');
      modal.addEventListener('click', function (e) {
        if (e.target === modal || e.target === modalClose) closeModal();
      });
      document.addEventListener('keydown', function (e) {
        if (!modal || modal.style.display !== 'block') return;
        if (e.key === 'Escape') closeModal();
      });
    }

    function openModal(src, caption) {
      createModal();
      modalImg.src = src;
      modalImg.alt = caption || '';
      modalCaption.textContent = caption || '';
      modal.style.display = 'block';
      document.body.classList.add('no-scroll');
    }

    function closeModal() {
      if (!modal) return;
      modal.style.display = 'none';
      document.body.classList.remove('no-scroll');
      modalImg.src = '';
      modalCaption.textContent = '';
    }

    // Attach lightbox to project images
    $$('.project-image').forEach(function (img) {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function (e) {
        var src = img.src;
        var fig = img.closest('figure');
        var cap = fig && fig.querySelector('figcaption') ? fig.querySelector('figcaption').textContent : img.alt || '';
        openModal(src, cap);
      });
    });

    // Project click opens a popup window (small) with a focused view
    $$('.project-item').forEach(function (p) {
      p.addEventListener('click', function (e) {
        // if click is on a link/button inside, ignore
        var tag = (e.target.tagName || '').toLowerCase();
        if (tag === 'a' || e.target.closest('.overlay-btn')) return;
        var title = p.querySelector('h3') ? p.querySelector('h3').textContent.trim() : 'Project';
        var content = p.querySelector('p') ? p.querySelector('p').outerHTML : '';
        var w = 600, h = 520;
        var left = (screen.width/2)-(w/2);
        var top = (screen.height/2)-(h/2);
        var win = window.open('', '_blank', 'toolbar=0,location=0,menubar=0,width='+w+',height='+h+',top='+top+',left='+left);
        if (!win) {
          // fallback to modal if popup blocked
          openModal(p.querySelector('.project-image') ? p.querySelector('.project-image').src : '', title + '\n' + (p.querySelector('p') ? p.querySelector('p').textContent : ''));
          return;
        }
        win.document.title = title;
        win.document.body.style.fontFamily = "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial";
        win.document.body.innerHTML = '<div style="padding:20px"><h2>'+title+'</h2>' + content + '<p><a href="#" onclick="window.close();return false;">Close</a></p></div>';
      });
    });

    // Form validation and real-time feedback
    (function setupFormValidation() {
      var form = document.getElementById('contact-form');
      if (!form) return;
      var name = document.getElementById('contact-name');
      var email = document.getElementById('contact-email');
      var message = document.getElementById('contact-message');

      function createErrorEl(input) {
        var id = input.id + '-error';
        var el = document.getElementById(id);
        if (!el) {
          el = document.createElement('div');
          el.className = 'field-error';
          el.id = id;
          el.setAttribute('aria-live','polite');
          input.parentNode.appendChild(el);
        }
        return el;
      }

      function validateField(input) {
        var el = createErrorEl(input);
        if (!input) return true;
        if (input.validity) {
          if (input.validity.valueMissing) {
            el.textContent = 'This field is required.'; return false;
          }
          if (input.type === 'email' && input.validity.typeMismatch) {
            el.textContent = 'Please enter a valid email address.'; return false;
          }
          if (input.minLength && input.value.length < input.minLength) {
            el.textContent = 'Please enter at least ' + input.minLength + ' characters.'; return false;
          }
        }
        el.textContent = '';
        return true;
      }

      [name,email,message].forEach(function (field) {
        if (!field) return;
        field.addEventListener('input', function () { validateField(field); });
        field.addEventListener('blur', function () { validateField(field); });
      });

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var ok = true;
        [name,email,message].forEach(function (f) { if (f) ok = validateField(f) && ok; });
        var status = document.getElementById('contact-status');
        if (!ok) {
          status.className = 'contact-status error';
          status.textContent = 'Please correct the errors in the form and try again.';
          return;
        }
        // Simulate successful submit
        status.className = 'contact-status success';
        status.textContent = 'Thanks — your message has been sent. I will reply shortly.';
        form.reset();
      });
    })();

  }); // DOMContentLoaded

})();
