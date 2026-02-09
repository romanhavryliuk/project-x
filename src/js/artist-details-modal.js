import axios from 'axios';

const artistFormUpper = document.querySelector('.artist_form_upper');
const modalAlbumsContainer = document.querySelector('.artist_form_albums');

const api = axios.create({
  baseURL: 'https://sound-wave.b.goit.study/api',
});

function renderArtistProfile({
  strArtist,
  strArtistThumb,
  intFormedYear,
  intDiedYear,
  strGender,
  intMembers,
  strCountry,
  strBiographyEN,
  genres,
}) {

  let yearsInfo;

  // Перевірка: чи рік існує І чи це не слово "null"
  const isBorn = intFormedYear && intFormedYear !== 'null';
  const isDead = intDiedYear && intDiedYear !== 'null';

  if (!isBorn) {
    // Якщо немає року заснування - інформація відсутня
    yearsInfo = 'Information missing';
  } else if (isDead) {
    // Є і початок, і кінець
    yearsInfo = `${intFormedYear}–${intDiedYear}`;
  } else {
    // Є початок, але немає кінця (або там написано "null")
    yearsInfo = `${intFormedYear}–present`;
  }


  const markup = ` 
    <div class="artist-modal-header">
   
      <h2 class="artist-title">${strArtist}</h2>
    </div>
    <div class="artist_form_upper_container">
      <!-- img -->
      <div class="artist-modal-img">
        <img class="artist_form_upper_img" src="${strArtistThumb}" alt="" />
      </div>
<div class="artist_form_upper_info_container">
  
        <div class="artist_form_upper_info">
          <ul class="stats-list parent-upper">
            <li class="stats-item upper-grid-one">
              <span class="stats-label">Years active</span>
              <span class="stats-value">${yearsInfo}</span>
            </li>
            <li class="stats-item upper-grid-two">
              <span class="stats-label">Sex</span>
              <span class="stats-value">${strGender}</span>
            </li>
            <li class="stats-item upper-grid-three">
              <span class="stats-label">Members</span>
              <span class="stats-value">${intMembers}</span>
            </li>
            <li class="stats-item upper-grid-four">
              <span class="stats-label">Country</span>
              <span class="stats-value">${strCountry}</span>
            </li>
          </ul>
        </div>
        <div class="artist-modal-biography">
          <h3 class="bio-title">Biography</h3>
          <p class="bio-text">
            ${strBiographyEN}
          </p>
        </div>
        <ul class="genre-list">
        ${genres.map(genre => `<li class="genre-item"><p class="genre-name">${genre}</p></li>`).join('')}
        </ul>
</div>
    </div>
  `;

  artistFormUpper.insertAdjacentHTML('beforeend', markup);
}

// потрібно ще додади функцію яка буде видаляти весь вміст
// також потрібно додати лоадер до загального контейнера
//Додати кнопку закриття і зробити робочою

export function loadArtistData(id) {
  // Очищуємо попередній вміст
  if (artistFormUpper) artistFormUpper.innerHTML = '';
  if (modalAlbumsContainer) modalAlbumsContainer.innerHTML = '';

  fetch(`https://sound-wave.b.goit.study/api/artists/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => renderArtistProfile(data))
    .catch(error => console.log('Error fetching artist data:', error));

  renderArtistAlbums(id);
}

/* ======= Modal albums ======= */


export async function fetchArtistAlbums(artistId) {
  try {
    const response = await api.get(`/artists/${artistId}/albums`);
    return response.data;
  } catch (error) {
    console.error('Error fetching artist albums:', error);
    throw error;
  }
}

export async function renderArtistAlbums(id) {
  try {
    const data = await fetchArtistAlbums(id); // Отримую об'єкт з даними

    // Перевіряю наявність масиву альбомів
    if (!data.albumsList || data.albumsList.length === 0) {
      if (modalAlbumsContainer) modalAlbumsContainer.innerHTML = '<p>Альбомів не знайдено</p>';
      return;
    }

    // Допоміжна функція для конвертації часу
    const formatTime = ms => {
      const totalSeconds = Math.floor(Number(ms) / 1000);
      const min = Math.floor(totalSeconds / 60);
      const sec = totalSeconds % 60;
      return `${min}:${sec.toString().padStart(2, '0')}`;
    };

    // Розмітка для кожного альбому та його треків
    const markup = `
  <h2 class="albums-title">Albums</h2> 
  <div class="albums-list"> 
    ${data.albumsList
      .map(
        album => `
      <div class="album-container">
        <h3 class="album-name">${album.strAlbum}</h3>
        <div class="tracks-list">
          <div class="tracks-header">
            <span class="track-span">Track</span>
            <span class="time-span">Time</span>
            <span class="link-span">Link</span>
          </div>

          ${album.tracks
            .map(
              track => `
            <ul class="track-row">
              <li class="track-title">${track.strTrack}</li> 
              <li class="track-duration">${formatTime(track.intDuration)}</li> 
              <li class="track-link">
                ${
                  track.movie
                    ? `<a href="${track.movie}" target="_blank">
                    <svg class="youtube-icon" width="24" height="24" aria-hidden="true">
                      <use href="https://romanhavryliuk.github.io/project-x/assets/sprite-CNuXn03P.svg#youtube"></use>
                    </svg>
                    <span class="sr-only">Watch video on YouTube</span>
                   </a>`
                    : ''
                } 
              </li>
            </ul>
          `
            )
            .join('')}
        </div>
      </div>
    `
      )
      .join('')}
  </div> 
`;

    if (modalAlbumsContainer) modalAlbumsContainer.innerHTML = markup;
  } catch (error) {
    console.error('Error rendering artist albums:', error);
  }
}
