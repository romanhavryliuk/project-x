import axios from 'axios';
import { renderArtistsSection } from './artists.js';

const mainToggleBtn = document.querySelector('.search-and-filters-toggle');
const filtersContent = document.querySelector('.filters-content');

const genreMenu = document.querySelector('.dropdown-menu-genres');
const genreToggle = document.querySelector('.dropdown-toggle-genres');
const genreLabel = genreToggle.querySelector('.dropdown-label');

const sortMenu = document.querySelector('.dropdown-menu-sort');
const sortToggle = document.querySelector('.dropdown-toggle-sort');
const sortLabel = sortToggle.querySelector('.dropdown-label');

const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.artists-search-wrapper'); // Кліком може бути весь враппер або іконка
const resetBtn = document.querySelector('.filters-reset-btn');

const api = axios.create({
  baseURL: 'https://sound-wave.b.goit.study/api',
});

mainToggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  mainToggleBtn.classList.toggle('open');
  filtersContent.classList.toggle('open');
});

filtersContent.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener('click', () => {
  closeAllDropdowns(); // Закриває жанри/сортування (твоя поточна функція)
  
  // Закриває головне мобільне меню
  mainToggleBtn.classList.remove('open');
  filtersContent.classList.remove('open');
});

let activeFilters = {
  genre: null,
  search: '',
  sort: null, 
};

document.addEventListener('DOMContentLoaded', () => {
  loadGenres();
});

async function loadGenres() {
  try {
    const response = await api.get('/genres');
    renderGenres(response.data);
  } catch (error) {
    console.error('Помилка при завантаженні жанрів:', error);
  }
}

function renderGenres(genres) {
  // Додаємо пункт "All Genres" з порожнім value на початок
  const allGenresHtml = `<li data-value="">All Genres</li>`;
  const genresHtml = genres.map(item => `<li data-value="${item.genre}">${item.genre}</li>`).join('');
  genreMenu.innerHTML = allGenresHtml + genresHtml;
}

function closeAllDropdowns() {
  genreMenu.classList.remove('open');
  genreToggle.classList.remove('open');
  sortMenu.classList.remove('open');
  sortToggle.classList.remove('open');
}

genreToggle.addEventListener('click', e => {
  e.stopPropagation();
  const isOpen = genreMenu.classList.contains('open');
  closeAllDropdowns();
  if (!isOpen) {
    genreMenu.classList.add('open');
    genreToggle.classList.add('open');
  }
});

sortToggle.addEventListener('click', e => {
  e.stopPropagation();
  const isOpen = sortMenu.classList.contains('open');
  closeAllDropdowns();
  if (!isOpen) {
    sortMenu.classList.add('open');
    sortToggle.classList.add('open');
  }
});

document.addEventListener('click', () => closeAllDropdowns());

// Вибір жанру
genreMenu.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    const value = e.target.dataset.value;
    activeFilters.genre = value === "" ? null : value;
    genreLabel.textContent = e.target.textContent; // "All Genres" або назва
    applyFilters();
  }
});

// Вибір сортування
sortMenu.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    const value = e.target.dataset.value;
    activeFilters.sort = value === "" ? null : value;
    sortLabel.textContent = e.target.textContent;
    applyFilters();
  }
});

// Пошук
function handleSearch() {
  activeFilters.search = searchInput.value.trim();
  applyFilters();
}

searchInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') handleSearch();
});
// Якщо хочеш щоб клік по іконці теж шукав:
document.querySelector('.search-icon').addEventListener('click', handleSearch);

// Скидання всіх фільтрів (Reset)
resetBtn.addEventListener('click', () => {
  activeFilters = { genre: null, search: '', sort: null };
  
  searchInput.value = '';
  genreLabel.textContent = 'Genre';
  sortLabel.textContent = 'Sorting';
  
  applyFilters();
});

function applyFilters() {
  closeAllDropdowns();
  renderArtistsSection(1, activeFilters);
}