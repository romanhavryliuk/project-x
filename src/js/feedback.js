import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { mountLoader, showLoader, hideLoader } from './loader.js';
import spriteUrl from '/sprite.svg';

const API_URL = 'https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1';
const root = document.querySelector('.feedback-root-container');

const initLayout = () => {
  if (!root) return;
  root.innerHTML = `
    <h2 class="feedback-title-hidden">Feedbacks our visitors</h2>
    <div class="swiper feedbacks-swiper">
      <div class="swiper-wrapper" id="feedbacks-container"></div>
      
      <div class="swiper-button-prev" id="feedbacks-button-p">
        <svg class="icons-arrow"><use href="${spriteUrl}#arrow-left"></use></svg>
      </div>

      <div class="swiper-button-next" id="feedbacks-button-n">
        <svg class="icons-arrow"><use href="${spriteUrl}#arrow-right"></use></svg>
      </div>
      
      <div class="swiper-pagination"></div>
    </div>

    <button type="button" class="feedback-button" id="Leave-feedback">Leave feedback</button>

    <div class="feedback-modal-backdrop" hidden>
      <div class="feedback-modal">
        <button class="feedback-modal-close"></button>
        <h2 class="feedback-modal-title">Submit feedback</h2>
        <form class="feedback-modal-form">
          <label>Name
            <input type="text" class="feedback-modal-input" placeholder="Emily">
          </label>
          <label>Message
            <textarea name="message" class="feedback-modal-textarea" placeholder="Type your message..."></textarea>
          </label>
          <div class="feedback-modal-stars"></div>
          <button type="submit" class="feedback-modal-button" id="submit-button">Submit</button>
        </form>
      </div>
    </div>
  `;
};

// Отримання даних
async function fetchFeedbacks() {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    return Array.isArray(result.data) ? result.data.slice(0, 10) : [];
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    return [];
  }
}

// Створення слайдів
function createStarsMarkup(rating) {
  const roundedRating = Math.round(Number(rating) || 0);
  return Array.from({ length: 5 }, (_, i) => `
    <svg class="star-icon ${i < roundedRating ? 'star-filled' : 'star-empty'}" width="18" height="18">
      <use href="${spriteUrl}#star"></use>
    </svg>
  `).join('');
}

// Ініціалізація
async function initFeedbacks() {
  // Спочатку створюємо HTML структуру
  initLayout();

  // Встановлюємо лоадер у створений контейнер
  mountLoader('.feedback-root-container'); 

  const container = document.getElementById('feedbacks-container');

  try {
    // Показуємо лоадер перед запитом
    showLoader('.feedback-root-container');

    // Чекаємо на дані
    const feedbacks = await fetchFeedbacks();

    if (!feedbacks.length) {
      container.innerHTML = '<div class="swiper-slide">No feedbacks yet.</div>';
      return;
    }

    // Рендеримо слайди
    container.innerHTML = feedbacks.map(f => `
      <div class="swiper-slide feedback-content">
        <div class="star-rating">${createStarsMarkup(f.rating)}</div>
        <div class="feedback-text">${f.descr || ''}</div>
        <div class="feedback-author">${f.name || ''}</div>
      </div>
    `).join('');

    // Ініціалізуємо Swiper
    new Swiper('.feedbacks-swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 20,

      observer: true,
      observeParents: true,
      resizeObserver: true,

      navigation: {
        nextEl: '#feedbacks-button-n',
        prevEl: '#feedbacks-button-p',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        768: { slidesPerView: 1 },
        1440: { slidesPerView: 1 }
      },
      on: {
        init: function() { updateNavButtons(this); },
        slideChange: function() { updateNavButtons(this); }
      }
    });

  } catch (err) {
    console.error("Critical error in feedback module:", err);
    container.innerHTML = '<div class="error-message">Something went wrong.</div>';
  } finally {
    // 7. Ховаємо лоадер ЗАВЖДИ (успіх чи помилка)
    hideLoader('.feedback-root-container');
  }
}

function updateNavButtons(swiperInstance) {
  const prevBtn = document.querySelector('#feedbacks-button-p');
  const nextBtn = document.querySelector('#feedbacks-button-n');
  if (prevBtn && nextBtn) {
    prevBtn.classList.toggle('disabled', swiperInstance.isBeginning);
    nextBtn.classList.toggle('disabled', swiperInstance.isEnd);
  }
}

// Модалка та Валідація
(() => {
  document.addEventListener('click', (e) => {
    const modal = document.querySelector(".feedback-modal-backdrop");
    if (!modal) return;

    if (e.target.closest("#Leave-feedback")) {
      modal.removeAttribute("hidden");
      document.body.classList.add("no-scroll");
      createModalStars();
    }

    if (e.target.closest(".feedback-modal-close") || e.target === modal) {
      modal.setAttribute("hidden", "");
      document.body.classList.remove("no-scroll");
    }
  });

  function createModalStars(rating = 0) {
    const starsContainer = document.querySelector(".feedback-modal-stars");
    if (!starsContainer) return;

    starsContainer.innerHTML = Array.from({ length: 5 }, (_, i) => `
      <svg class="star-icon ${i < rating ? "selected" : ""}" width="18" height="18" data-index="${i + 1}">
        <use href="${spriteUrl}#star"></use>
      </svg>
    `).join('');

    starsContainer.addEventListener('click', (e) => {
      const star = e.target.closest('.star-icon');
      if (!star) return;
      const index = parseInt(star.dataset.index);
      starsContainer.querySelectorAll('.star-icon').forEach((s, i) => {
        s.classList.toggle('selected', i < index);
      });
    });
  }

  // Делегування для форми
  document.addEventListener('submit', (e) => {
    if (e.target.classList.contains('feedback-modal-form')) {
      e.preventDefault();
      const form = e.target;
      const input = form.querySelector(".feedback-modal-input");
      const textarea = form.querySelector(".feedback-modal-textarea");
      let hasError = false;

      [input, textarea].forEach(el => {
        if (!el.value.trim()) {
          el.classList.add("error");
          hasError = true;
        } else {
          el.classList.remove("error");
        }
        
        // Очищення помилки при вводі
        el.oninput = () => el.classList.remove("error");
      });

      if (!hasError) {
        console.log("Form submitted!");
        form.reset();
        document.querySelector(".feedback-modal-backdrop").setAttribute("hidden", "");
      }
    }
  });
})();

initFeedbacks();