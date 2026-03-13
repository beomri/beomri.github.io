/**
 * theme.js — minimal dark/light toggle
 * Sets data-theme on <html>, persists preference in localStorage.
 * Default is dark (set in <html data-theme="dark"> before this runs).
 */
(function () {
  var STORAGE_KEY = 'color-theme';
  var DARK = 'dark';
  var LIGHT = 'light';

  function getPreference() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === LIGHT || stored === DARK) return stored;
    // Respect OS preference if no stored value
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return LIGHT;
    }
    return DARK;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.textContent = theme === DARK ? '☀ light' : '☾ dark';
      btn.setAttribute('aria-label', theme === DARK ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  function toggle() {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === DARK ? LIGHT : DARK;
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  // Apply on load (before paint where possible)
  applyTheme(getPreference());

  // Wire up button once DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggle);
    // Re-apply in case the attribute was overwritten
    applyTheme(getPreference());
  });
})();
