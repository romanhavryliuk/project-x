const artistFormUpper = document.querySelector('.arist_form_upper');

const ARTIST_FORM_URL = 'https://sound-wave.b.goit.study/api/artists/65ada227af9f6d155db46908';


function renderArtistProfile({strArtist, strArtistThumb, intFormedYear, strGender, intMembers, strCountry, strBiographyEN, genres}) {
    const markup = ` 
    <div class="artist-modal-header">
      <h2 class="artist-title">${strArtist}</h2>
      <button class="close-btn" type="button" aria-label="Close modal">X</button>
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
//Додати кнопку закриття і зробити робочою

fetch(ARTIST_FORM_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => renderArtistProfile(data))
  .catch(error => console.log('Error fetching artist data:', error));

 