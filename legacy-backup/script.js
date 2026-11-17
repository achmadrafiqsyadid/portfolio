/* Interaksi kecil untuk portfolio Rafiq. Konten tetap terbaca tanpa JavaScript. */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js-ready');

  var menuButton = document.querySelector('.menu-toggle');
  var navPanel = document.querySelector('#site-nav');

  if (menuButton && navPanel) {
    var setMenu = function (open) {
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Tutup navigasi' : 'Buka navigasi');
      navPanel.classList.toggle('is-open', open);
    };

    menuButton.addEventListener('click', function () {
      setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    navPanel.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuButton.focus();
      }
    });

    document.addEventListener('click', function (event) {
      if (!event.target.closest('.nav') && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 700) setMenu(false);
    });
  }

  /* Tautan aktif mengikuti bagian yang sedang dibaca. */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-panel a[href^="#"]'));
  var observedSections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && observedSections.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          if (link.getAttribute('href') === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-35% 0px -58% 0px', threshold: 0 });

    observedSections.forEach(function (section) { sectionObserver.observe(section); });
  }

  /* Tahun footer otomatis mengikuti tahun saat halaman dibuka. */
  var yearNode = document.querySelector('[data-year]');
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  /* Salin email dengan fallback untuk browser yang tidak menyediakan Clipboard API. */
  var copyButton = document.querySelector('[data-copy-email]');
  var copyStatus = document.querySelector('[data-copy-status]');
  if (copyButton) {
    var label = copyButton.querySelector('[data-copy-label]');
    var initialLabel = label ? label.textContent : 'Salin alamat email';
    var resetHandle;

    function legacyCopy(text) {
      var input = document.createElement('textarea');
      input.value = text;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      var succeeded = false;
      try { succeeded = document.execCommand('copy'); } catch (error) { succeeded = false; }
      input.remove();
      return succeeded;
    }

    function showCopyResult(succeeded, email) {
      copyButton.classList.toggle('is-copied', succeeded);
      if (label) label.textContent = succeeded ? 'Email berhasil disalin' : initialLabel;
      if (copyStatus) copyStatus.textContent = succeeded ? 'Alamat email sudah disalin.' : 'Tidak dapat menyalin otomatis. Email: ' + email;
      window.clearTimeout(resetHandle);
      resetHandle = window.setTimeout(function () {
        copyButton.classList.remove('is-copied');
        if (label) label.textContent = initialLabel;
      }, 2400);
    }

    copyButton.addEventListener('click', function () {
      var email = copyButton.getAttribute('data-copy-email');
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(
          function () { showCopyResult(true, email); },
          function () { showCopyResult(legacyCopy(email), email); }
        );
      } else {
        showCopyResult(legacyCopy(email), email);
      }
    });
  }
})();
