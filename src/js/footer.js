const footerContainer = document.querySelector(".footer__container");

footerContainer.innerHTML = `
  <div class="footer__content">
    <div class="footer__logo">
     <a href="index.html" class="footer__logo-link">
    <svg class="footer__logo-icon"> 
    <use href="img/main-logo.svg#icon-logo"></use> 
    </svg>
    </a>
    </div>
    <nav class="footer__nav">
      <a href="#artists" class="footer__nav-link">Artists</a>
      <a href="#about" class="footer__nav-link">About us</a>
      <a href="#reviews" class="footer__nav-link">Reviews</a>
    </nav>
  </div>

  <div class="footer__credits">
    <div class="footer__socials">
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="footer__social-link">
        <svg class="footer__social-icon" viewBox="0 0 32 32" width="40" height="40">
          <use href="img/sprite.svg#instagram"></use>
        </svg>
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="footer__social-link">
        <svg class="footer__social-icon" viewBox="0 0 32 32" width="40" height="40">
          <use href="img/sprite.svg#facebook"></use>
        </svg>
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" class="footer__social-link">
        <svg class="footer__social-icon" viewBox="0 0 32 32" width="40" height="40">
          <use href="img/sprite.svg#youtube"></use>
        </svg>
      </a>
    </div>
    <div class="footer__copyright">
      © ${new Date().getFullYear()} Project-X
    </div>
  </div>
`;

