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
<button type="button" class="feedback-button" id="Leave feedback">
         Leave feedback
        </button>
 
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
        updateNavButtons(this);
      },
      slideChange: function () {
        updateNavButtons(this);
      }
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
