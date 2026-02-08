const section = document.querySelector('.header-container');

section.innerHTML = `
    <div class="header-logo">
      <a class="header-logo-link" href="../index.html">
        <svg class="header-icon-logo" aria-label="Logo">
          <use href="../img/main-logo.svg#icon-logo"></use>
        </svg>
      </a>
    </div>
    <nav class="header-nav">
      <ul class="header-list">
        <li class="nav-menu">
          <a href="#artists" class="nav-menu-link">Artists</a>
        </li>
        <li class="nav-menu">
          <a href="#about" class="nav-menu-link">About Us</a>
        </li>
        <li class="nav-menu">
          <a href="#reviews" class="nav-menu-link">Reviews</a>
        </li>
      </ul>
    </nav>
    <button class="burger" type="button" data-mobile-open>
      <svg class="burger-icon" width="16" height="12">
        <use href="../img/sprite.svg#burger"></use>
      </svg>
    </button>


    <div class="mobile-menu" data-mobile>
    <div class="container mobile-menu-container">
      <div>
        <div class="header-menu-mobile">
          <a class="menu-header-logo" href="/index.html">
            <svg class="header-icon-logo" aria-label="Logo">
              <use href="../img/main-logo.svg#icon-logo"></use>
            </svg>
          </a>
        </div>
        <div class="container-mobile-menu-close" data-mobile-close>
          <svg class="mobile-menu-close" width="11.31" height="11.31">
            <use href="../img/sprite.svg#close-x"></use>
          </svg>
        </div>
      </div>
      <nav class="mobile-menu-nav">
        <ul class="mobile-nav-ul">
          <li class="mobile-nav-li">
            <a href="#artists" class="mobile-menu-link">Artists</a>
          </li>
          <li class="mobile-nav-li">
            <a href="#about" class="mobile-menu-link">About Us</a>
          </li>
          <li class="mobile-nav-li">
            <a href="#reviews" class="mobile-menu-link">Reviews</a>
          </li>
        </ul>
      </nav>
    </div>
    </div>
`;

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-open]'),
    closeModalBtn: document.querySelector('[data-mobile-close]'),
    modal: document.querySelector('[data-mobile]'),
    body: document.body,
  };

  if (!refs.modal) return;

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    const isOpen = refs.modal.classList.contains('is-open');
    refs.body.classList.toggle('no-scroll', isOpen);
  }
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && refs.modal.classList.contains('is-open')) {
      toggleModal();
    }
  });

  refs.modal.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;

    if (link.getAttribute('href')?.startsWith('#')) {
      toggleModal();
    }
  });
})();
