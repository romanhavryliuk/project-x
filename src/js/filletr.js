import { setFilters } from './artists.js';

// Дебаунс функція, щоб не відправляти запит на кожну введену літеру в інпуті
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

let currentSort = 'default';
let currentSearch = '';

const sortRadios = document.querySelectorAll('input[name="sort-order"]');
const searchInput = document.getElementById('filter-search');

if (sortRadios.length > 0) {
  sortRadios.forEach(radio => {
    radio.addEventListener('change', event => {
      currentSort = event.target.value;
      console.log('Активне сортування змінено на:', currentSort);

      setFilters(currentSearch, currentSort);
    });
  });
}

if (searchInput) {
  const handleSearch = debounce(event => {
    currentSearch = event.target.value.trim().toLowerCase();
    console.log('Користувач шукає:', currentSearch);

    setFilters(currentSearch, currentSort);
  }, 400); // 400 мс затримки, щоб не перевантажувати бекенд під час швидкого введення

  searchInput.addEventListener('input', handleSearch);

  // Запобігаємо стандартній відправці форми, якщо інпут розміщений у <form>
  const filterForm = searchInput.closest('form');
  if (filterForm) {
    filterForm.addEventListener('submit', event => {
      event.preventDefault();
    });
  }
}
