import axios from 'axios';

const artistsSection = document.querySelector('#artists');

let page = 1; // стартова сторінка
const limit = 8; // кількість карток на сторінку
let allArtists = []; // масив всіх артистів

// Функція для отримання артистів
export async function renderArtistsSection() {
  try {
    const response = await axios.get(
      'https://sound-wave.b.goit.study/api/artists',
      {
        params: { limit, page },
      }
    );

    const { artists, totalPages } = response.data;

    // Додаю нових артистів до загального списку
    allArtists = [...allArtists, ...artists];

    // Визначаю, чи потрібно показувати кнопку "Load More"
    const isHidden =
      page >= totalPages || artists.length < limit ? 'is-hidden' : '';

    // Формую повну розмітку секції
    const markup = `
      <div class="container artists-container">
        <div class="artists-header-wrapper">  
          <h2 class="artists-title">Artist</h2>
          <h3 class="artists-subtitle">Explore Your New Favorite Artists</h3>
        </div>
        <ul class="artists-list">
          ${allArtists
            .map(
              artist => `
            <li class="artist-card" data-id="${artist._id}">
            <div class="artist-image-wrapper">
            <img class="artist-image" src="${artist.strArtistThumb}" alt="${artist.strArtist}" />
            </div>  
              <div class="artist-content-wrapper">
                <ul class="genres-list">
                  ${artist.genres.map(genre => `<li class="genres-item">${genre}</li>`).join('')}
                </ul>
                <div class="artist-title-wrapper">
                  <h4 class="artist-name">${artist.strArtist}</h4>
                  <p class="artist-description">${artist.strBiographyEN}</p>
                </div>
                </div>
                <button class="artist-button js-open-modal-artist" type="button" data-id="${artist._id}">
                  Learn More 
                  <svg class="learn-more-icon" width="8" height="14">
                    <use href="/project-x/assets/sprite-CNuXn03P.svg#learn-more"></use>
                  </svg>
                </button>
            </li>
          `
            )
            .join('')}
        </ul>

        <button type="button"  class="load-more ${isHidden}">Load More
          <svg class="load-more-icon" width="14" height="14">
            <use href="/project-x/assets/sprite-CNuXn03P.svg#arrow-down"></use>
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
