document.addEventListener('DOMContentLoaded', () => {

  // Shared light/dark mode across every page, persisted between visits.
  const themeButtons = document.querySelectorAll('[data-theme-toggle]');
  const themeRoot = document.documentElement;
  const savedTheme = (() => { try { return localStorage.getItem('legacyluxe-theme'); } catch (_) { return null; } })();
  const preferredTheme = savedTheme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const applyTheme = theme => {
    themeRoot.setAttribute('data-theme', theme);
    themeButtons.forEach(button => {
      const dark = theme === 'dark';
      button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
      button.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
      const label = button.querySelector('.theme-toggle-label');
      if (label) label.textContent = dark ? 'Light' : 'Dark';
    });
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', theme === 'dark' ? '#17211f' : '#E7F3DF');
  };
  applyTheme(preferredTheme);
  themeButtons.forEach(button => button.addEventListener('click', () => {
    const nextTheme = themeRoot.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    try { localStorage.setItem('legacyluxe-theme', nextTheme); } catch (_) {}
  }));

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  // Accessible dropdown navigation: hover on desktop, tap/click on touch devices.
  document.querySelectorAll('.nav-dropdown > .nav-link').forEach(trigger => {
    trigger.addEventListener('click', event => {
      const wrapper = trigger.closest('.nav-dropdown');
      const isMobile = window.matchMedia('(max-width: 850px)').matches;
      if (!isMobile) return;
      if (!wrapper.classList.contains('menu-open')) {
        event.preventDefault();
        document.querySelectorAll('.nav-dropdown.menu-open').forEach(item => {
          item.classList.remove('menu-open');
          item.querySelector(':scope > .nav-link')?.setAttribute('aria-expanded', 'false');
        });
        wrapper.classList.add('menu-open');
        trigger.setAttribute('aria-expanded', 'true');
      } else {
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      nav.querySelectorAll('.nav-dropdown.menu-open').forEach(item => item.classList.remove('menu-open'));
      nav.querySelectorAll('.nav-dropdown > .nav-link').forEach(item => item.setAttribute('aria-expanded', 'false'));
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }

  const tabs = document.querySelectorAll('[data-search-kind]');
  const quickForm = document.querySelector('[data-quick-search]');
  let searchKind = 'buy';
  const destinations = { buy: 'buy-properties.html', rent: 'rent-properties.html', commercial: 'commercial-properties.html' };
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    searchKind = tab.dataset.searchKind;
    if (quickForm) quickForm.action = destinations[searchKind] || destinations.buy;
  }));
  if (quickForm) quickForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(quickForm);
    const params = new URLSearchParams();
    if (data.get('location')) params.set('location', data.get('location'));
    if (data.get('type')) params.set('type', data.get('type'));
    if (data.get('budget')) params.set('budget', data.get('budget'));
    const target = destinations[searchKind] || destinations.buy;
    window.location.href = target + (params.toString() ? '?' + params.toString() : '');
  });

  document.querySelectorAll('[data-property-filters]').forEach(form => {
    const grid = form.parentElement.querySelector('[data-listing-grid]');
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.property-card'));
    const count = form.parentElement.querySelector('[data-result-count]');
    const empty = form.parentElement.querySelector('[data-empty-state]');
    const fields = {
      location: form.elements.location,
      type: form.elements.type,
      budget: form.elements.budget
    };
    const applyFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      if (params.has('location')) fields.location.value = params.get('location');
      if (params.has('type')) fields.type.value = params.get('type');
      if (params.has('budget')) fields.budget.value = params.get('budget');
    };
    const filter = event => {
      if (event) event.preventDefault();
      const location = fields.location.value.trim().toLowerCase();
      const type = fields.type.value.trim().toLowerCase();
      const budget = Number(fields.budget.value || 0);
      let visible = 0;
      cards.forEach(card => {
        const matches = (!location || card.dataset.location.includes(location)) &&
          (!type || card.dataset.type === type) &&
          (!budget || Number(card.dataset.amount) <= budget);
        card.hidden = !matches;
        if (matches) visible++;
      });
      if (count) count.textContent = `Showing ${visible} of ${cards.length} sample ${cards.length === 1 ? 'property' : 'properties'}`;
      if (empty) empty.hidden = visible !== 0;
    };
    form.addEventListener('submit', filter);
    form.addEventListener('reset', () => setTimeout(filter, 0));
    const resetButton = form.parentElement.querySelector('[data-reset-filters]');
    if (resetButton) resetButton.addEventListener('click', () => {
      form.reset();
      filter();
    });
    applyFromUrl();
    filter();
  });

  document.querySelectorAll('[data-demo-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const feedback = form.querySelector('.form-feedback');
      if (!feedback) return;
      if (!form.checkValidity()) {
        form.reportValidity();
        feedback.textContent = 'Please check the required fields and try again.';
        feedback.classList.add('error');
        return;
      }
      feedback.classList.remove('error');
      feedback.textContent = 'Validation successful. Demo only: no data was sent or saved. Connect a secure backend or form service before launch.';
      form.reset();
    });
  });

  const blogSearch = document.querySelector('[data-blog-search]');
  const articles = document.querySelectorAll('[data-article-grid] [data-article-text]');
  if (blogSearch) {
    blogSearch.addEventListener('input', () => {
      const query = blogSearch.value.trim().toLowerCase();
      articles.forEach(article => {
        const text = (article.dataset.articleText + ' ' + article.textContent).toLowerCase();
        article.hidden = !text.includes(query);
      });
    });
  }
});
