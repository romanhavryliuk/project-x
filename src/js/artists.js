import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { mountLoader, showLoader, hideLoader } from './loader.js';

const artistsSection = document.querySelector('#artists');
mountLoader('#artists');

const limit = 8;
let page = 1;
let pagination = null;

// Змінні для стану фільтрів
let currentSort = 'default';
let currentSearch = '';

export function setFilters(searchQuery, sortOrder) {
  let changed = false;
  if (searchQuery !== currentSearch) {
    currentSearch = searchQuery;
    changed = true;
  }
  if (sortOrder !== currentSort) {
    currentSort = sortOrder;
    changed = true;
  }

  if (changed) {
    page = 1;
    if (pagination) {
      const paginationEl = artistsSection.querySelector('#artists-pagination');
      if (paginationEl) paginationEl.innerHTML = '';
      pagination = null;
    }
    renderArtistsSection(page);
  }
}

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

// if ('scrollRestoration' in history) {
//   // 'auto' - стандартна поведінка (браузер намагається повернути на місце)
//   // 'manual' - якщо ти хочеш повністю керувати скролом сам
//   history.scrollRestoration = 'manual';
// }

function renderArtistsList(artists) {
  const listEl = artistsSection.querySelector('.artists-list');

  if (!artists || artists.length === 0) {
    listEl.innerHTML =
      '<li class="no-artists-message"><p>No artists found.</p></li>';
    return;
  }

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
    const params = { limit, page: pageToRender };

    if (currentSearch) {
      // Найімовірніше API очікує 'name' для пошуку по імені артиста
      params.name = currentSearch;
    }
    if (currentSort !== 'default') {
      // Вказуємо конкретне поле для сортування та напрямок.
      // Якщо не спрацює 'name', спробуй замінити на 'strArtist'
      params.sortBy = 'name';
      params.order = currentSort; // Має бути 'asc' або 'desc'
    }

    const response = await axios.get(
      'https://sound-wave.b.goit.study/api/artists',
      { params }
    );

    const { artists, totalArtists } = response.data;

    renderArtistsList(artists);

    const paginationEl = artistsSection.querySelector('#artists-pagination');
    const totalPages = Math.ceil(totalArtists / limit);

    if (totalArtists > 0) {
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
      paginationEl.style.display = totalPages <= 1 ? 'none' : '';
    } else {
      paginationEl.style.display = 'none';
    }
  } catch (error) {
    console.error('Помилка завантаження артистів:', error);
  } finally {
    hideLoader('#artists');
  }
}

renderArtistsSection(page);
