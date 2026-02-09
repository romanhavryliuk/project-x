import { loadArtistData } from './artist-details-modal.js';

const modal = document.querySelector('#artist-modal');

document.addEventListener('click', (e) => {
  
  const openBtn = e.target.closest('.js-open-modal-artist');

  if (openBtn) {
    const artistId = openBtn.dataset.id;
    loadArtistData(artistId); // 1. Вантажимо дані
    modal.showModal();        // 2. Показуємо вікно
    return;                   // 3. СТОП! Виходимо з функції. Далі код не виконується.
  }

  if (e.target.closest('#close-modal-artist') || e.target === modal) {
    modal.close();
  }
});