const artistFormUpper = document.querySelector('.arist_form_upper');

const ARTIST_FORM_URL = 'https://sound-wave.b.goit.study/api/artists/65ada227af9f6d155db46908';


function renderArtistProfile({strArtist, strArtistThumb, intFormedYear, strGender, intMembers, strCountry, strBiographyEN, genres}) {
    const markup = ` 
    <div class="artist-modal-header">
      <h2 class="artist-title">${strArtist}</h2>
      <button class="close-btn" type="button" aria-label="Close modal"></button>
    </div>
    <div class="arist_form_upper_container">
      <!-- img -->
      <div class="artist-modal-img">
        <img class="arist_form_upper_img" src="${strArtistThumb}" alt="" />
      </div>

      <div class="arist_form_upper_info">
        <ul class="stats-list">
          <li class="stats-item">
            <span class="stats-label">Years active</span>
            <span class="stats-value">${intFormedYear}-present</span>
          </li>
          <li class="stats-item">
            <span class="stats-label">Sex</span>
            <span class="stats-value">${strGender}</span>
          </li>
          <li class="stats-item">
            <span class="stats-label">Members</span>
            <span class="stats-value">${intMembers}</span>
          </li>
          <li class="stats-item">
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
      ${genres.map(genre => `<li class="genre-item">${genre}</li>`).join('')}
      </ul>
    </div>
  `

  artistFormUpper.insertAdjacentHTML('beforeend', markup);
};

// потрібно ще додади функцію яка буде видаляти весь вміст 
// також потрібно додати лоадер до загального контейнера 

fetch(ARTIST_FORM_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => renderArtistProfile(data))
  .catch(error => console.log('Error fetching artist data:', error));

 

/* ======= Modal albums ======= */
      
const modalAlbumsContainer = document.querySelector('.artist_form_albums');

import axios from 'axios';

const artistId = '65ada227af9f6d155db46908';


const api = axios.create({
  baseURL: 'https://sound-wave.b.goit.study/api',
});

export async function fetchArtistAlbums(artistId) {
  try {
    const response = await api.get(`/artists/${artistId}/albums`);
    return response.data;
  } catch (error) {
    console.error('Error fetching artist albums:', error);
    throw error;
  }
}

export async function renderArtistAlbums(artistId) {
  try {
    const data = await fetchArtistAlbums(artistId); // Отримую об'єкт з даними
    
                                               // Перевіряю наявність масиву альбомів
    if (!data.albumsList || data.albumsList.length === 0) {
      modalAlbumsContainer.innerHTML = '<p>Альбомів не знайдено</p>';
      return;
    }

                                               // Допоміжна функція для конвертації часу
    const formatTime = (ms) => {
      const totalSeconds = Math.floor(Number(ms) / 1000);
      const min = Math.floor(totalSeconds / 60);
      const sec = totalSeconds % 60;
      return `${min}:${sec.toString().padStart(2, '0')}`;
    };

                                               // Розмітка для кожного альбому та його треків
    const markup = `
  <h2 class="albums-title">Albums</h2> 
  <div class="albums-list"> 
    ${data.albumsList.map(album => `
      <div class="album-container">
        <h3 class="album-name">${album.strAlbum}</h3>
        <div class="tracks-list">
          <div class="tracks-header">
            <span class="track-span">Track</span>
            <span class="time-span">Time</span>
            <span class="link-span">Link</span>
          </div>

          ${album.tracks.map(track => `
            <ul class="track-row">
              <li class="track-title">${track.strTrack}</li> 
              <li class="track-duration">${formatTime(track.intDuration)}</li> 
              <li class="track-link">
                ${track.movie ? 
                  `<a href="${track.movie}" target="_blank">
                    <svg class="youtube-icon" width="24" height="24" aria-hidden="true">
                      <use href="/img/sprite.svg#youtube"></use>
                    </svg>
                    <span class="sr-only">Watch video on YouTube</span>
                   </a>` : ''} 
              </li>
            </ul>
          `).join('')}
        </div>
      </div>
    `).join('')}
  </div> 
`;

modalAlbumsContainer.innerHTML = markup;
  } catch (error) {
    console.error('Error rendering artist albums:', error);
  }
}
renderArtistAlbums(artistId);