const header = document.querySelector(".header")

// markup
header.innerHTML = `
<div class="container">

<nav class="page-nav">
      <a href="./" class="logo"
        ><svg class="icon logo">
          <use href="./img/main-logo.svg#icon-logo"></use>
        </svg>
      </a>
      <button type="button" class="burger-icon-btn" id="burger-icon-btn">
        <svg class="icon burger-icon">
          <use href="./img/sprite.svg#burger"></use>
        </svg>
      </button>
      <button type="button" class="close-icon-btn" id="close-icon-btn">
          <svg class="icon close-icon">
            <use href="./img/sprite.svg#close-x"></use>
          </svg>
        </button>

      <ul class="section-nav">
        <li class="section-name">
          <a href="#artists" class="section-link">Artists</a>
        </li>
        <li class="section-name">
          <a href="#about" class="section-link">About Us</a>
        </li>
        <li class="section-name">
          <a href="#reviews" class="section-link">Reviews</a>
        </li>
      </ul>
    </nav>
    </div>

    <div class="menu-modal">
    <div class="container mobile-menu">
      <ul class="mobile-section-nav">
        <li class="mobile-section-name">
          <a href="#artists" class="mobile-section-link">Artists</a>
        </li>
        <li class="section-name">
          <a href="#about" class="mobile-section-link">About Us</a>
        </li>
        <li class="section-name">
          <a href="#reviews" class="mobile-section-link">Reviews</a>
        </li>
      </ul>
      </div>

      </div>`;


const openMenuBtn = document.querySelector(".burger-icon-btn")
const closeMenuBtn = document.querySelector(".close-icon-btn")
const menuModal = document.querySelector(".menu-modal")
const mobileNav = document.querySelectorAll(".mobile-section-link")


// open Menu
openMenuBtn.addEventListener("click", () => {
  header.classList.add("menu-open")
  menuModal.classList.add("is-open")
  document.body.style.overflow = "hidden";
})

// close Menu
closeMenuBtn.addEventListener("click", () => {
  header.classList.remove("menu-open")
  menuModal.classList.remove("is-open")
  document.body.style.overflow = "auto";
})

// close Menu when clicking on internal links
mobileNav.forEach(link => {
    link.addEventListener("click", () => {
      header.classList.remove("menu-open")
      menuModal.classList.remove("is-open")
      document.body.style.overflow = "auto";
    })
})
