import axios from 'axios';

const artistsList = document.querySelector('.artists-list');
const loadMoreBtn = document.querySelector('.load-more');

let page = 1; // стартова сторінка
const limit = 8; // кількість карток на сторінку

// Функція для отримання артистів
async function fetchArtists() {
  try {
    const response = await axios.get(
      'https://sound-wave.b.goit.study/api/artists',
      {
        params: { limit, page },
      }
    );

    // Беремо реальний масив артистів
    const artists = response.data.artists;

    // Рендеримо отримані дані
    renderArtists(artists);

    // Кнопка Load More робиться неактивною, якщо більше артистів немає
    if (artists.length < limit) {
      loadMoreBtn.disabled = true;
      loadMoreBtn.textContent = 'No more artists';
    }
  } catch (error) {
    console.error('Помилка при завантаженні артистів:', error);
  }
}

// Функція для створення HTML карток
function renderArtists(artists) {
  const markup = artists
    .map(
      artist => `
    <li class="artist-card">
      <img
        class="artist-image"
        src="${artist.strArtistThumb}"
        alt="${artist.strArtist}"
      />

      <div class="artist-content-wrapper">
        <ul class="genres-list">
          ${artist.genres.map(genre => `<li class="genres-item">${genre}</li>`).join('')}
        </ul>

        <div class="artist-title-wrapper">
          <h4 class="artist-name">${artist.strArtist}</h4>
          <p class="artist-description">${artist.strBiographyEN}</p>
        </div>
      </div>

      <button class="artist-button" data-bio="${artist.strBiographyEN}">
        Learn More
      </button>
    </li>
  `
    )
    .join('');

  artistsList.insertAdjacentHTML('beforeend', markup);
}

// Подія для кнопки Learn More
artistsList.addEventListener('click', event => {
  if (event.target.classList.contains('artist-button')) {
    const bio = event.target.dataset.bio;
    alert(bio); // тимчасово показує біографію
  }
});

// Подія для кнопки Load More
loadMoreBtn.addEventListener('click', () => {
  page += 1;
  fetchArtists();
});

// Завантаження стартових 8 артистів
fetchArtists();
