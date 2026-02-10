import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import $ from 'jquery';
import 'raty-js';
window.jQuery = $;
window.$ = $;
import { mountLoader, showLoader, hideLoader } from './loader.js';
mountLoader('.feedback-section');


const API_URL = 'https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1';

async function fetchFeedbacks() {
  showLoader('.feedback-section');
  try {
    const response = await fetch(API_URL);
    const result = await response.json();

    const feedbackArray = Array.isArray(result.data) ? result.data : [];
    return feedbackArray.slice(0, 10);
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    return [];
  } finally {
    hideLoader('.feedback-section');
  }
}

const root = document.querySelector('.feedback-root-container');

const markup = `<h2 class="feedback-title-hidden">Feedbacks our visitors</h2>

  <div class="swiper feedbacks-swiper">
    <div class="swiper-wrapper" id="feedbacks-container">
    
    </div>
          <div class="swiper-button-prev" id="feedbacks-button-p">
       <svg class="icons-arrow">
        <use href="sprite.svg#arrow-left"></use>
        </svg>
        <span class="sr-only">Swipe to previous slide</span>
      </div>

      <div class="swiper-button-next" id="feedbacks-button-n">
       <svg class="icons-arrow">
        <use href="sprite.svg#arrow-right"></use>
        </svg>
        <span class="sr-only">Swipe to next slide</span>
      </div>
 <div class="swiper-pagination"></div>
<button type="button" class="feedback-button" id="Leave-feedback">
         Leave feedback
        </button>
    </div>

    <div class="feedback-modal-backdrop" hidden>
  <div class="feedback-modal">

    <button class="feedback-modal-close"></button>

    <h2 class="feedback-modal-title">Submit feedback</h2>

    <form class="feedback-modal-form">
      <label>
        Name
        <input type="text" class="feedback-modal-input" placeholder="Emily">
      </label>

      <label>
        Message
        <textarea class="feedback-modal-textarea" placeholder="Type your message..."></textarea>
      </label>
<div class="feedback-modal-stars"></div>

      <button type="submit" class="feedback-modal-button" id="submit-button">Submit</button>
    </form>
  </div>
</div>
  `;

root.innerHTML = markup;



  function createFeedbackSlide(feedback) {
const slide = document.createElement('div');
slide.classList.add('swiper-slide', 'feedback-content');
const rewRating = Number(feedback.rating) || 0;
const rating = Math.round(rewRating);

  let starsMarkup = '';

  for (let i = 1; i <= 5; i++) {
    const starClass = i <= rating ? 'star-filled' : 'star-empty';
    starsMarkup += `
<svg class="star-icon ${starClass}" width="18" height="18">
 <use href="sprite.svg#star"></use>
</svg>`;
  }

  slide.innerHTML = `
<div class="star-rating">${starsMarkup}</div>
<div class="feedback-text">${feedback.descr || ''}</div>
<div class="feedback-author">${feedback.name || ''}</div>
`;

  return slide;
}

async function initSwiper() {
  const container = document.getElementById('feedbacks-container');
  const feedbacks = await fetchFeedbacks();

  feedbacks.forEach(feedback => {
    container.appendChild(createFeedbackSlide(feedback));
  });

  const swiper = new Swiper('.feedbacks-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true, 
    },

    on: {
    init: function () {
    updateNavButtons(this, feedbacks); 
     
    },
  });
}




function updateNavButtons(swiperInstance) {
  const prevButton = document.querySelector('.swiper-button-prev');
  const nextButton = document.querySelector('.swiper-button-next');

  if (prevButton && nextButton) {
    // isBeginning і isEnd — це вбудовані стани Swiper
    prevButton.classList.toggle('disabled', swiperInstance.isBeginning);
    nextButton.classList.toggle('disabled', swiperInstance.isEnd);
  }
}

initSwiper();

(() => {
  const openBtn = document.querySelector("#Leave-feedback");
  const closeBtn = document.querySelector(".feedback-modal-close");
  const modal = document.querySelector(".feedback-modal-backdrop");
  const body = document.body;
   

  if (!openBtn || !closeBtn || !modal) {
    console.log("not found");
    return;
  }

  
  openBtn.addEventListener("click", () => {
    modal.removeAttribute("hidden");
    body.classList.add("no-scroll");
    createModalStars();
  });

  closeBtn.addEventListener("click", () => {
    modal.setAttribute("hidden", "");
    body.classList.remove("no-scroll");
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hasAttribute("hidden")) {
      modal.setAttribute("hidden", "");
      body.classList.remove("no-scroll");
    }
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.setAttribute("hidden", "");
      body.classList.remove("no-scroll");
    }
  });


 function createModalStars(rating = 0) {
  const starsContainer = document.querySelector(".feedback-modal-stars");
  if (!starsContainer) return;

  starsContainer.innerHTML = "";

   for (let i = 1; i <= 5; i++) {
    starsContainer.insertAdjacentHTML(
      "beforeend",
      `<svg class="star-icon ${i <= rating ? "selected" : ""}" width="18" height="18">
         <use href="${spriteUrl}#star"></use>
       </svg>`
    );
  }

  const stars = starsContainer.querySelectorAll(".star-icon");
  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      stars.forEach((s, i) => {
        if (i <= index) s.classList.add("selected");
        else s.classList.remove("selected");
      });
    });
  });
}
const form = document.querySelector(".feedback-modal-form");
const input = form.querySelector(".feedback-modal-input");
const textarea = form.querySelector(".feedback-modal-textarea");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  let hasError = false;

  if (!input.value.trim()) {
    input.classList.add("error");
    hasError = true;
  } else {
    input.classList.remove("error");
  }

  if (!textarea.value.trim()) {
    textarea.classList.add("error");
    hasError = true;
  } else {
    textarea.classList.remove("error");
  }

  [input, textarea].forEach((el) => {
  if (!el) return;

  el.addEventListener("input", () => {
    el.classList.remove("error");
  });
});
  
  if (!hasError) {
    form.submit(); 
  }
});

})();