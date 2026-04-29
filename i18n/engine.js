// ─────────────────────────────────────────────────────────────
//  Lettiq i18n Engine
//
//  Language files populate window.TRANSLATIONS before this runs.
//  Each page calls I18n.initI18n(renderFn) with its own renderer.
//
//  localStorage key: 'lettiq-lang'
// ─────────────────────────────────────────────────────────────

(function () {
  const STORAGE_KEY = 'lettiq-lang';
  const DEFAULT_LANG = 'en';

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored && window.TRANSLATIONS[stored]) ? stored : DEFAULT_LANG;
  }

  function buildSwitcher(currentLang, renderFn) {
    const container = document.getElementById('lang-switcher');
    if (!container) return;
    container.innerHTML = '';
    Object.keys(window.TRANSLATIONS).forEach(code => {
      const t = window.TRANSLATIONS[code];
      const btn = document.createElement('button');
      btn.className = 'lang-btn' + (code === currentLang ? ' active' : '');
      btn.textContent = t.meta.langLabel;
      btn.setAttribute('aria-label', 'Switch to ' + t.meta.langLabel);
      btn.addEventListener('click', () => setLang(code, renderFn));
      container.appendChild(btn);
    });
  }

  function applyDataI18n(t) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t.ui[key] !== undefined) {
        el.innerHTML = t.ui[key].replace(/\n/g, '<br>');
      }
    });
  }

  function setLang(lang, renderFn) {
    localStorage.setItem(STORAGE_KEY, lang);
    buildSwitcher(lang, renderFn);
    renderFn(lang);
  }

  function initI18n(renderFn) {
    const lang = getLang();
    buildSwitcher(lang, renderFn);
    renderFn(lang);
  }

  window.I18n = { initI18n, setLang, getLang, applyDataI18n };
})();
