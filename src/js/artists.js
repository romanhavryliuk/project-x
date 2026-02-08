import axios from 'axios';

const artistsSection = document.querySelector('#artists');

let page = 1; // стартова сторінка
const limit = 8; // кількість карток на сторінку
let allArtists = []; // масив всіх артистів

// Функція для отримання артистів
export async function renderArtistsSection() {
  try {
    const response = await axios.get('https://sound-wave.b.goit.study/api/artists', {
      params: { limit, page },
    });

    const { artists, totalPages } = response.data;
    
    // Додаю нових артистів до загального списку
    allArtists = [...allArtists, ...artists];

    // Визначаю, чи потрібно показувати кнопку "Load More"
    const isHidden = (page >= totalPages || artists.length < limit) ? 'is-hidden' : '';

    // Формую повну розмітку секції
    const markup = `
      <div class="container artists-container">
        <h2 class="artists-title">Artist</h2>
        <h3 class="artists-subtitle">Explore Your New Favorite Artists</h3>
        
        <ul class="artists-list">
          ${allArtists.map(artist => `
            <li class="artist-card" data-id="${artist._id}">
              <img class="artist-image" src="${artist.strArtistThumb}" alt="${artist.strArtist}" />
              <div class="artist-content-wrapper">
                <ul class="genres-list">
                  ${artist.genres.map(genre => `<li class="genres-item">${genre}</li>`).join('')}
                </ul>
                <div class="artist-title-wrapper">
                  <h4 class="artist-name">${artist.strArtist}</h4>
                  <p class="artist-description">${artist.strBiographyEN}</p>
                </div>
                <button class="artist-button js-open-modal-artist" type="button" data-id="${artist._id}">
                  Learn More 
                  <svg class="learn-more-icon" width="8" height="14">
                    <use href="./img/sprite.svg#learn-more"></use>
                  </svg>
                </button>
              </div>
            </li>
          `).join('')}
        </ul>

        <button type="button"  class="load-more ${isHidden}">Load More
          <svg class="load-more-icon" width="14" height="14">
            <use href="./img/sprite.svg#arrow-down"></use>
          </svg></button>
      </div>
    `;

    // Оновлюю вміст секції
    artistsSection.innerHTML = markup;

    // Після рендерингу потрібно заново повісити слухачі, 
    initEventListeners();

  } catch (error) {
    console.error('Помилка завантаження артистів:', error);
  }
}

function initEventListeners() {
  const loadMoreBtn = document.querySelector('.load-more');
  const artistsList = document.querySelector('.artists-list');

                                            // Слухач для "Load More"
  if (loadMoreBtn) {
    loadMoreBtn.onclick = () => {
      page += 1;
      renderArtistsSection();
    };
  }

}


renderArtistsSection();

// sadasdadasd

// (() => {
//   const refs = {
//     // Додати атрибут data-modal-open на кнопку відкриття
//     openModalBtn: document.querySelector("[data-mobile-open]"),
//     // Додати атрибут data-modal-close на кнопку закриття
//     closeModalBtn: document.querySelector("[data-mobile-close]"),
//     // Додати атрибут data-modal на бекдроп модалки
//     modal: document.querySelector("[data-mobile]"),
//     // Додаємо body для керування скролом
//     body: document.body,
//   };

//   if (!refs.modal) return;

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//     refs.modal.classList.toggle("is-open");
//     // Перевіряємо чи є клас is-open на бекдропі
//     const isOpen = refs.modal.classList.contains("is-open");
//     // Забираємо скрол коли модалка відкрита
//     refs.body.classList.toggle('no-scroll', isOpen);
//   }
//   // Закриваємо модалку при натисканні на Escape
//   window.addEventListener("keydown", (event) => {
//     if (event.key === "Escape" && refs.modal.classList.contains("is-open")) {
//       toggleModal();
//     }
//   });

//   refs.modal.addEventListener("click", (e) => {
//     const link = e.target.closest("a[href]");
//     if (!link) return;

//     //Закриває модалку та переносить до відпопідної секції при натискані на лінк
//     if (link.getAttribute("href")?.startsWith("#")) {
//   toggleModal();
// }
//   });
// })();
