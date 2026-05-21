(function () {
  const header = document.querySelector('[data-silver-header]');
  if (!header) return;

  const openBtn = header.querySelector('[data-silver-menu-open]');
  const closeEls = header.querySelectorAll('[data-silver-menu-close]');
  const drawer = header.querySelector('.silver-header__drawer');
  if (!openBtn || !drawer) return;

  const OPEN_CLASS = 'silver-header--menu-open';
  const BODY_LOCK_CLASS = 'silver-body--menu-open';

  function openMenu() {
    header.classList.add(OPEN_CLASS);
    document.body.classList.add(BODY_LOCK_CLASS);
    openBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    const firstLink = drawer.querySelector('a, button');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    header.classList.remove(OPEN_CLASS);
    document.body.classList.remove(BODY_LOCK_CLASS);
    openBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    openBtn.focus();
  }

  openBtn.addEventListener('click', openMenu);
  closeEls.forEach((el) => el.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains(OPEN_CLASS)) closeMenu();
  });
})();
