import { loadArtistData } from './artist-details-modal.js';

// Цей слухач вішаємо на body або на секцію анатолія (якщо у неї є ID)
document.addEventListener('click', (e) => {
  
  // 1. Відкриття
  const openBtn = e.target.closest('#openModalArtist');
  if (openBtn) {
    const modal = document.querySelector('#artistModal'); // Шукаємо модалку ТІЛЬКИ коли клікнули
    if (modal) {
      modal.showModal();
      loadArtistData();
    }
  }

  // 2. Закриття
  const closeBtn = e.target.closest('#closeModalArtist');
  const modal = document.querySelector('#artistModal'); // Отримуємо доступ до модалки
  
  // Перевіряємо, чи модалка взагалі існує і чи вона відкрита
  if (modal && modal.open) {
    // Якщо клікнули на кнопку закриття АБО на фон (dialog)
    if (closeBtn || e.target === modal) {
      modal.close();
    }
  }
});