const modal = document.querySelector('#artistModal'); // вішаємо на посилання в секції анатолія
const openBtn = document.querySelector('#openModalArtist');
const closeBtn = document.querySelector('#closeModalArtist');

// Відкриття
openBtn.addEventListener('click', () => {
  modal.showModal(); 
});

// Закриття через кнопку
closeBtn.addEventListener('click', () => {
  modal.close();
});

// Закриття кліком по фону (опціонально)
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.close();
  }
});