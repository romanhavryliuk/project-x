import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { mountLoader, showLoader, hideLoader } from './loader.js';
import spriteUrl from '/sprite.svg';

const API_BASE = 'https://sound-wave.b.goit.study/api';
const artistsSection = document.querySelector('#artists');
mountLoader('#artists');

const limit = 8;
let page = 1;
let pagination = null;

let selectedGenre = '';
let selectedSort = '';
let searchQuery = '';

function ensureLayout() {
  if (artistsSection.querySelector('.artists-container')) return;

  artistsSection.insertAdjacentHTML(
    'beforeend',
    `
    <div class="artists-filters-section">
  <div class="artists-filters-head">
    <p class="artists-filters-label">Filters</p>
    <button class="artists-reset-btn" type="button">Reset</button>
  </div>

  <div class="artists-filters-control">
    <button
      class="artists-filters-toggle"
      type="button"
      aria-expanded="false"
      aria-controls="artists-filters-panel"
    >
      Search and Filters
      <svg class="artists-filters-chevron" width="16" height="16">
        <use href="${spriteUrl}#chevron-down"></use>
      </svg>
    </button>

    <div class="artists-filters" id="artists-filters-panel">
      <div class="artists-search-wrapper">
        <input
          type="text"
          class="artists-search-input"
          placeholder="Search"
          aria-label="Search artists"
        />
        <button class="artists-search-btn" type="button" aria-label="Search">
          <svg width="20" height="20">
            <use href="${spriteUrl}#search"></use>
          </svg>
        </button>
      </div>

      <div class="artists-dropdown" data-dropdown="sort">
        <button class="artists-dropdown-btn" type="button" aria-haspopup="listbox" aria-expanded="false">
          <span class="artists-dropdown-label">Sorting</span>
          <svg class="artists-dropdown-chevron" width="16" height="16">
            <use href="${spriteUrl}#chevron-down"></use>
          </svg>
        </button>
        <ul class="artists-dropdown-list" role="listbox" hidden>
          <li class="artists-dropdown-item" data-value="" role="option">Default</li>
          <li class="artists-dropdown-item" data-value="name_asc" role="option">A-Z</li>
          <li class="artists-dropdown-item" data-value="name_desc" role="option">Z-A</li>
        </ul>
      </div>

      <div class="artists-dropdown" data-dropdown="genre">
        <button class="artists-dropdown-btn" type="button" aria-haspopup="listbox" aria-expanded="false">
          <span class="artists-dropdown-label">Genre</span>
          <svg class="artists-dropdown-chevron" width="16" height="16">
            <use href="${spriteUrl}#chevron-down"></use>
          </svg>
        </button>
        <ul class="artists-dropdown-list" role="listbox" hidden></ul>
      </div>
    </div>
  </div>
</div>
    `
  );
  initFilterEvents();
}

async function fetchGenres() {
  try {
    const { data } = await axios.get(`${API_BASE}/genres`);
    const genres = Array.isArray(data) ? data : (data.genres ?? []);
    const genreList = artistsSection.querySelector(
      '[data-dropdown="genre"] .artists-dropdown-list'
    );
    if (!genreList) return;
    genreList.innerHTML =
      `<li class="artists-dropdown-item" data-value="" role="option">All Genres</li>` +
      genres
        .map(
          g =>
            `<li class="artists-dropdown-item" data-value="${g.genre}" role="option">${g.genre}</li>`
        )
        .join('');
  } catch (err) {
    console.error('Failed to fetch genres:', err);
  }
}

function closeAllDropdowns() {
  artistsSection.querySelectorAll('.artists-dropdown').forEach(dd => {
    dd.querySelector('.artists-dropdown-list').hidden = true;
    dd.querySelector('.artists-dropdown-btn').setAttribute(
      'aria-expanded',
      'false'
    );
  });
}

// Reset
function resetArtistsFilters() {
  const searchInput = artistsSection.querySelector('.artists-search-input');

  selectedGenre = '';
  selectedSort = '';
  searchQuery = '';

  if (searchInput) {
    searchInput.value = '';
  }

  artistsSection.querySelectorAll('.artists-dropdown').forEach(dropdown => {
    const type = dropdown.dataset.dropdown;
    const label = dropdown.querySelector('.artists-dropdown-label');

    if (label) {
      label.textContent = type === 'genre' ? 'Genre' : 'Sorting';
    }

    dropdown.querySelectorAll('.artists-dropdown-item').forEach(item => {
      item.classList.remove('is-selected');
    });
  });

  closeAllDropdowns();

  page = 1;
  resetPagination();
  renderArtistsSection(1);
}

function initFilterEvents() {
  // Mobile filter panel toggle
  const filtersToggleBtn = artistsSection.querySelector(
    '.artists-filters-toggle'
  );
  const filtersPanel = artistsSection.querySelector('.artists-filters');
  filtersToggleBtn.addEventListener('click', () => {
    const isOpen = filtersToggleBtn.getAttribute('aria-expanded') === 'true';
    filtersToggleBtn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    filtersPanel.classList.toggle('is-open', !isOpen);
  });

  // Dropdown toggle – one open at a time
  artistsSection.addEventListener('click', e => {
    const btn = e.target.closest('.artists-dropdown-btn');
    if (btn) {
      const dropdown = btn.closest('.artists-dropdown');
      const list = dropdown.querySelector('.artists-dropdown-list');
      const isOpen = !list.hidden;

      closeAllDropdowns();

      if (!isOpen) {
        list.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
      }
      return;
    }

    // Dropdown item selection
    const item = e.target.closest('.artists-dropdown-item');
    if (item) {
      const dropdown = item.closest('.artists-dropdown');
      const type = dropdown.dataset.dropdown;
      const value = item.dataset.value;
      const label = dropdown.querySelector('.artists-dropdown-label');

      // Mark selected
      dropdown
        .querySelectorAll('.artists-dropdown-item')
        .forEach(i => i.classList.toggle('is-selected', i === item));

      if (type === 'genre') {
        selectedGenre = value;
        label.textContent = value || 'Genre';
      } else if (type === 'sort') {
        selectedSort = value;
        label.textContent = value ? item.textContent : 'Sorting';
      }

      closeAllDropdowns();
      page = 1;
      resetPagination();
      renderArtistsSection(1);
      return;
    }

    // Close dropdowns when clicking outside
    if (!e.target.closest('.artists-dropdown')) {
      closeAllDropdowns();
    }
  });

  // Search - button click or Enter
  const searchInput = artistsSection.querySelector('.artists-search-input');
  const searchBtn = artistsSection.querySelector('.artists-search-btn');

  function triggerSearch() {
    searchQuery = searchInput.value.trim();
    page = 1;
    resetPagination();
    renderArtistsSection(1);
  }

  searchBtn.addEventListener('click', triggerSearch);
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') triggerSearch();
  });

  // Reset
  const resetBtn = artistsSection.querySelector('.artists-reset-btn');

resetBtn.addEventListener('click', resetArtistsFilters);
}

function resetPagination() {
  pagination = null;
  const paginationEl = artistsSection.querySelector('#artists-pagination');
  if (paginationEl) paginationEl.innerHTML = '';
}

function renderArtistsList(artists) {
  const listEl = artistsSection.querySelector('.artists-list');
  artistsSection
    .querySelector('.artists-container')
    .classList.remove('has-empty-state');

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
            <use href="${spriteUrl}#learn-more"></use>
          </svg>
        </button>
      </li>
    `
    )
    .join('');
}

function renderEmptyState() {
  const listEl = artistsSection.querySelector('.artists-list');
  listEl.innerHTML = `
    <li class="artists-empty">
      <div class="artists-empty-icon" aria-hidden="true">!</div>
      <h3 class="artists-empty-title">Silence on the stage...</h3>
       <p class="artists-empty-text">
        Looks like no artists match your filters.
        Try changing them or hit “Reset Filters” to bring back the beat.
      </p>
      <button class="artists-empty-reset" type="button">Reset filters</button>
    </li>
  `;
  artistsSection
    .querySelector('.artists-container')
    .classList.add('has-empty-state');
  listEl
  .querySelector('.artists-empty-reset')
  .addEventListener('click', resetArtistsFilters);
}

export async function renderArtistsSection(pageToRender = 1) {
  ensureLayout();
  showLoader('#artists');

  try {
    const params = { limit, page: pageToRender };
    if (selectedGenre) params.genre = selectedGenre;
    if (searchQuery) params.name = searchQuery;

    const response = await axios.get(`${API_BASE}/artists`, { params });
    let { artists, totalArtists } = response.data;

    if (selectedSort === 'name_asc') {
      artists = [...artists].sort((a, b) =>
        a.strArtist.localeCompare(b.strArtist)
      );
    } else if (selectedSort === 'name_desc') {
      artists = [...artists].sort((a, b) =>
        b.strArtist.localeCompare(a.strArtist)
      );
    }

    const paginationEl = artistsSection.querySelector('#artists-pagination');
    const totalPages = Math.ceil(totalArtists / limit);

    if (!artists.length) {
      renderEmptyState();
      paginationEl.style.display = 'none';
      return;
    }

    renderArtistsList(artists);

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
    } else {
      pagination.reset(totalArtists);
    }

    // const totalPages = Math.ceil(totalArtists / limit);
    paginationEl.style.display = totalPages <= 1 ? 'none' : '';
  } catch (error) {
    console.error('Помилка завантаження артистів:', error);
  } finally {
    hideLoader('#artists');
  }
}

renderArtistsSection(page);
fetchGenres();
