import { loadArtistData } from './artist-details-modal.js';

const modal = document.querySelector('#artist-modal');
const body = document.body;

document.addEventListener('click', e => {
  const openBtn = e.target.closest('.js-open-modal-artist');

  if (openBtn) {
    const artistId = openBtn.dataset.id;
    loadArtistData(artistId); // 1. Вантажимо дані

    // Компенсуємо ширину скролбару та блокуємо прокрутку
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }
    body.classList.add('no-scroll');

    modal.showModal(); // 2. Показуємо вікно
    return; // 3. СТОП! Виходимо з функції. Далі код не виконується.
  }

  if (e.target.closest('#close-modal-artist') || e.target === modal) {
    modal.close();
  }
});

// Слухач події 'close' спрацьовує при будь-якому закритті (кнопка, клік по фону, Escape)
modal.addEventListener('close', () => {
  body.classList.remove('no-scroll');
  body.style.paddingRight = '';
});
