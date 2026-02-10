const heroContainer = document.querySelector('#hero');

heroContainer.innerHTML = `
  <div class="container hero_container">
    <div class="hero_blok">
      <h1 class="title_hero">Discover Your Next Favorite Artist Today</h1>
      <p class="page_hero">
        Dive into a world of music discoveries with ArtistsHub – your personal
        guide to the boundless universe of sound. Explore, filter, and learn
        about your favorite artists all in one place.
      </p>
      <button type="button" class="hero_button" id="hero_explore">
        Explore Artists
        <svg class="icon_hero" width="15" height="240">
          <use href="sprite.svg#explore"></use>
        </svg>
      </button>
    </div>
    <div class="hero_image"></div>
  </div>
`;

//  скролл к секции артистов при клике на кнопку "Explore Artists"
document.getElementById('hero_explore').addEventListener('click', function () {
  const artistsSection = document.getElementById('artists');
  if (artistsSection) {
    artistsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
});
