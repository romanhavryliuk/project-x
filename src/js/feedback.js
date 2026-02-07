import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* import $ from 'jquery';
window.jQuery = $;
window.$ = $;
 import 'jquery.raty'; */

const API_URL = 'https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1';

async function fetchFeedbacks() {
    try {
        const response = await fetch(API_URL);
        const result = await response.json();

        const feedbackArray = Array.isArray(result.data) ? result.data : [];
       
        return feedbackArray.slice(0, 10); 
    }   catch (error) {
        console.error('Error fetching feedbacks:', error);
        return [];
    }
}

const root = document.querySelector('.feedback-root-container');

const markup =`<h2 class="feedback-title-hidden">Feedbacks our visitors</h2>

  <div class="swiper feedbacks-swiper">
    <div class="swiper-wrapper" id="feedbacks-container"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-prev">
      <svg class="icons-arrow">
        <use href="./img/sprite.svg#arrow-left"></use>
      </svg>
    </div>

    <div class="swiper-button-next">
      <svg class="icons-arrow">
        <use href="./img/sprite.svg#arrow-right"></use>
      </svg>
    </div>
 <div class="swiper-pagination"></div>
    </div>
  `;

root.innerHTML = markup;


function createFeedbackSlide(feedback) {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide', 'feedback-content');

    const stars = document.createElement('div');
    stars.classList.add('star-rating');

    const text = document.createElement('div');
    text.classList.add('feedback-text');
    text.textContent = feedback.descr || '';

    const author = document.createElement('div');
    author.classList.add('feedback-author');
    author.textContent = feedback.name || '';
    
    slide.appendChild(stars);
    slide.appendChild(text);
    slide.appendChild(author);

    return slide;
}
   
// swiper
async function initSwiper() {
 const $ = window.jQuery;
    
    const container = document.getElementById('feedbacks-container');
    const feedbacks = await fetchFeedbacks();

    feedbacks.forEach(feedback => {
        const slide = createFeedbackSlide(feedback);
        container.appendChild(slide);

const startElement = slide.querySelector('.star-rating');
if (typeof $(startElement).raty === 'function') {
      $(startElement).raty({
            readOnly: true,
            score: Math.round(Number(feedback.rating)),
            starType: 'i',
        hints: []
        });
    } 
});

    const swiper = new Swiper('.feedbacks-swiper', {
       modules: [Navigation, Pagination],
        slidesPerView: 1,
      loop: false,
        spaceBetween: 20,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
   pagination: {
  el: '.swiper-pagination',
  clickable: true,
  renderBullet: function (index, className) {
    if (index < 3) {
    return `<span class="${className} custom-bullet-${index}"></span>`;
}
return '' ;
  }
},
 on: {
    init: function () {
    updateNavButtons(this, feedbacks); 
        updateCustomPagination(this);
    },
    slideChange: function () {
    updateNavButtons(this, feedbacks); 
        updateCustomPagination(this);
    },
 },
});

/* document.addEventListener('click', function(event) {
    if (event.target.classList.contains('swiper-button-prev')) {
        const bullet = event.target;
        
        if (bullet.classList.contains('custom-bullet-0')) swiper.slideTo(0);
if (bullet.classList.contains('custom-bullet-0')) swiper.slideTo(3);
if (bullet.classList.contains('custom-bullet-0')) swiper.slideTo(7);
}
}); */
}
function updateCustomPagination(swiperInstance) {
    const bullets = swiperInstance.pagination.bullets;
    if (!bullets || bullets.length === 0) return;

    bullets.forEach(b => b.classList.remove('swiper-pagination-bullet-active'));

    const index= swiperInstance.activeIndex;
    
    if (index <= 2) {
bullets[0].classList.add('swiper-pagination-bullet-active');
    } else if (index >= 3 && index <= 6) {
        bullets[1].classList.add('swiper-pagination-bullet-active');
    } else {
        bullets[2].classList.add('swiper-pagination-bullet-active');
    }
}

function updateNavButtons(swiperInstance, feedbacks) {
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

    prevButton.classList.toggle('disabled', swiperInstance.activeIndex === 0);
    nextButton.classList.toggle('disabled', swiperInstance.activeIndex === feedbacks.length - 1);
}


initSwiper();