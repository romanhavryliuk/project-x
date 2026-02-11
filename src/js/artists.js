import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { mountLoader, showLoader, hideLoader } from './loader.js';

const artistsSection = document.querySelector('#artists');
mountLoader('#artists');

const limit = 8;
let page = 1;
let pagination = null;

function ensureLayout() {
  if (artistsSection.querySelector('.artists-container')) return;

  artistsSection.insertAdjacentHTML(
    'beforeend',
    `
    <div class="container artists-container">
      <div class="artists-header-wrapper">  
        <h2 class="artists-title">Artist</h2>
        <h3 class="artists-subtitle">Explore Your New Favorite Artists</h3>
      </div>

      <div class="artists-list-wrapper">
        <ul class="artists-list"></ul>
        <div id="artists-pagination" class="tui-pagination"></div>
      </div>
    </div>
    `
  );
}

if ('scrollRestoration' in history) {
  // 'auto' - стандартна поведінка (браузер намагається повернути на місце)
  // 'manual' - якщо ти хочеш повністю керувати скролом сам
  history.scrollRestoration = 'manual'; 
}

function renderArtistsList(artists) {
  const listEl = artistsSection.querySelector('.artists-list');
  listEl.innerHTML = artists
    .map(
      artist => `
      <li class="artist-card" data-id="${artist._id}">
        <div class="artist-image-wrapper">
          <img class="artist-image"
            src="${artist.strArtistThumb}"
            alt="${artist.strArtist}"
            loading="lazy"
            width="343" height="432"
          />
        </div>  

        <div class="artist-content-wrapper">
          <ul class="genres-list">
            ${(artist.genres ?? []).map(g => `<li class="genres-item">${g}</li>`).join('')}
          </ul>

          <div class="artist-title-wrapper">
            <h4 class="artist-name">${artist.strArtist}</h4>
            <p class="artist-description">${artist.strBiographyEN}</p>
          </div>
        </div>

        <button class="artist-button js-open-modal-artist" type="button" data-id="${artist._id}">
          Learn More 
          <svg class="learn-more-icon" width="8" height="14">
            <use href="sprite.svg#learn-more"></use>
          </svg>
        </button>
      </li>
    `
    )
    .join('');
}

export async function renderArtistsSection(pageToRender = 1) {
  ensureLayout();
  showLoader('#artists');

  try {
    const response = await axios.get(
      'https://sound-wave.b.goit.study/api/artists',
      {
        params: { limit, page: pageToRender },
      }
    );

    const { artists, totalArtists } = response.data;

    renderArtistsList(artists);

    const paginationEl = artistsSection.querySelector('#artists-pagination');

    if (!pagination) {
      pagination = new Pagination(paginationEl, {
        totalItems: totalArtists,
        itemsPerPage: limit,
        visiblePages: 5,
        page: pageToRender,
        centerAlign: true,
      });

      pagination.on('afterMove', evt => {
        page = evt.page;
        renderArtistsSection(page);
        artistsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    const totalPages = Math.ceil(totalArtists / limit);
    paginationEl.style.display = totalPages <= 1 ? 'none' : '';
  } catch (error) {
    console.error('Помилка завантаження артистів:', error);
  } finally {
    hideLoader('#artists');
  }
}

renderArtistsSection(page);
