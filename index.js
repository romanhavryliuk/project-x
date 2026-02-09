import{a as f,j as h,S as k,N as L,P as $}from"./assets/vendor-DSl-E_ZZ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(a){if(a.ep)return;a.ep=!0;const t=i(a);fetch(a.href,t)}})();const c=document.querySelector(".header");c.innerHTML=`
<div class="container">

<nav class="page-nav">
      <a href="./" class="logo"
        ><svg class="icon logo">
          <use href="../img/sprite.svg#logo-2"></use>
        </svg>
      </a>
      <button type="button" class="burger-icon-btn" id="burger-icon-btn">
        <svg class="icon burger-icon">
          <use href="../img/sprite.svg#burger"></use>
        </svg>
      </button>
      <button type="button" class="close-icon-btn" id="close-icon-btn">
          <svg class="icon close-icon">
            <use href="../img/sprite.svg#close-x"></use>
          </svg>
        </button>

      <ul class="section-nav">
        <li class="section-name">
          <a href="#artists" class="section-link">Artists</a>
        </li>
        <li class="section-name">
          <a href="#about" class="section-link">About Us</a>
        </li>
        <li class="section-name">
          <a href="#reviews" class="section-link">Reviews</a>
        </li>
      </ul>
    </nav>
    </div>

    <div class="menu-modal">
    <div class="container mobile-menu">
      <ul class="mobile-section-nav">
        <li class="mobile-section-name">
          <a href="#artists" class="mobile-section-link">Artists</a>
        </li>
        <li class="section-name">
          <a href="#about" class="mobile-section-link">About Us</a>
        </li>
        <li class="section-name">
          <a href="#reviews" class="mobile-section-link">Reviews</a>
        </li>
      </ul>
      </div>

      </div>`;const x=document.querySelector(".burger-icon-btn"),A=document.querySelector(".close-icon-btn"),m=document.querySelector(".menu-modal"),S=document.querySelectorAll(".mobile-section-link");x.addEventListener("click",()=>{c.classList.add("menu-open"),m.classList.add("is-open"),document.body.style.overflow="hidden"});A.addEventListener("click",()=>{c.classList.remove("menu-open"),m.classList.remove("is-open"),document.body.style.overflow="auto"});S.forEach(e=>{e.addEventListener("click",()=>{c.classList.remove("menu-open"),m.classList.remove("is-open"),document.body.style.overflow="auto"})});const M=document.querySelector("#artists");let d=1;const v=8;let u=[];async function w(){try{const e=await f.get("https://sound-wave.b.goit.study/api/artists",{params:{limit:v,page:d}}),{artists:s,totalPages:i}=e.data;u=[...u,...s];const o=d>=i||s.length<v?"is-hidden":"",a=`
      <div class="container artists-container">
        <h2 class="artists-title">Artist</h2>
        <h3 class="artists-subtitle">Explore Your New Favorite Artists</h3>
        
        <ul class="artists-list">
          ${u.map(t=>`
            <li class="artist-card" data-id="${t._id}">
              <img class="artist-image" src="${t.strArtistThumb}" alt="${t.strArtist}" />
              <div class="artist-content-wrapper">
                <ul class="genres-list">
                  ${t.genres.map(r=>`<li class="genres-item">${r}</li>`).join("")}
                </ul>
                <div class="artist-title-wrapper">
                  <h4 class="artist-name">${t.strArtist}</h4>
                  <p class="artist-description">${t.strBiographyEN}</p>
                </div>
                <button class="artist-button js-open-modal-artist" type="button" data-id="${t._id}">
                  Learn More 
                  <svg class="learn-more-icon" width="8" height="14">
                    <use href="./img/sprite.svg#learn-more"></use>
                  </svg>
                </button>
              </div>
            </li>
          `).join("")}
        </ul>

        <button type="button"  class="load-more ${o}">Load More
          <svg class="load-more-icon" width="14" height="14">
            <use href="./img/sprite.svg#arrow-down"></use>
          </svg></button>
      </div>
    `;M.innerHTML=a,E()}catch(e){console.error("Помилка завантаження артистів:",e)}}function E(){const e=document.querySelector(".load-more");document.querySelector(".artists-list"),e&&(e.onclick=()=>{d+=1,w()})}w();const p=document.querySelector(".artist_form_upper"),n=document.querySelector(".artist_form_albums"),q=f.create({baseURL:"https://sound-wave.b.goit.study/api"});function T({strArtist:e,strArtistThumb:s,intFormedYear:i,strGender:o,intMembers:a,strCountry:t,strBiographyEN:r,genres:l}){const y=` 
    <div class="artist-modal-header">
    <button class="close-btn" id="close-modal-artist" type="button" aria-label="Close-modal">
      <svg class="close-artist">
        <use href="./img/sprite.svg#close-x"></use>
      </svg>
    </button>
      <h2 class="artist-title">${e}</h2>
    </div>
    <div class="artist_form_upper_container">
      <!-- img -->
      <div class="artist-modal-img">
        <img class="artist_form_upper_img" src="${s}" alt="" />
      </div>

      <div class="artist_form_upper_info">
        <ul class="stats-list parent-upper">
          <li class="stats-item upper-grid-one">
            <span class="stats-label">Years active</span>
            <span class="stats-value">${i}-present</span>
          </li>
          <li class="stats-item upper-grid-two">
            <span class="stats-label">Sex</span>
            <span class="stats-value">${o}</span>
          </li>
          <li class="stats-item upper-grid-three">
            <span class="stats-label">Members</span>
            <span class="stats-value">${a}</span>
          </li>
          <li class="stats-item upper-grid-four">
            <span class="stats-label">Country</span>
            <span class="stats-value">${t}</span>
          </li>
        </ul>
      </div>
      <div class="artist-modal-biography">
        <h3 class="bio-title">Biography</h3>
        <p class="bio-text">
          ${r}
        </p>
      </div>
      <ul class="genre-list">
      ${l.map(_=>`<li class="genre-item"><p class="genre-name">${_}</p></li>`).join("")}
      </ul>
    </div>
  `;p.insertAdjacentHTML("beforeend",y)}function B(e){p&&(p.innerHTML=""),n&&(n.innerHTML=""),fetch(`https://sound-wave.b.goit.study/api/artists/${e}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>T(s)).catch(s=>console.log("Error fetching artist data:",s)),H(e)}async function j(e){try{return(await q.get(`/artists/${e}/albums`)).data}catch(s){throw console.error("Error fetching artist albums:",s),s}}async function H(e){try{const s=await j(e);if(!s.albumsList||s.albumsList.length===0){n&&(n.innerHTML="<p>Альбомів не знайдено</p>");return}const i=a=>{const t=Math.floor(Number(a)/1e3),r=Math.floor(t/60),l=t%60;return`${r}:${l.toString().padStart(2,"0")}`},o=`
  <h2 class="albums-title">Albums</h2> 
  <div class="albums-list"> 
    ${s.albumsList.map(a=>`
      <div class="album-container">
        <h3 class="album-name">${a.strAlbum}</h3>
        <div class="tracks-list">
          <div class="tracks-header">
            <span class="track-span">Track</span>
            <span class="time-span">Time</span>
            <span class="link-span">Link</span>
          </div>

          ${a.tracks.map(t=>`
            <ul class="track-row">
              <li class="track-title">${t.strTrack}</li> 
              <li class="track-duration">${i(t.intDuration)}</li> 
              <li class="track-link">
                ${t.movie?`<a href="${t.movie}" target="_blank">
                    <svg class="youtube-icon" width="24" height="24" aria-hidden="true">
                      <use href="/img/sprite.svg#youtube"></use>
                    </svg>
                    <span class="sr-only">Watch video on YouTube</span>
                   </a>`:""} 
              </li>
            </ul>
          `).join("")}
        </div>
      </div>
    `).join("")}
  </div> 
`;n&&(n.innerHTML=o)}catch(s){console.error("Error rendering artist albums:",s)}}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".about-section");e.innerHTML=`
        <div class="about-container">
            <div class="about-team-photo">
            <picture>
                <source media="(min-width: 1440px)" 
                srcset="
                /img/about-us/team-desktop-1x.webp 1x, 
                /img/about-us/team-desktop-2x.webp 2x" 
                type="image/webp">
        
                <source media="(min-width: 768px)" 
                srcset="
                /img/about-us/team-tablet-1x.webp 1x, 
                /img/about-us/team-tablet-2x.webp 2x"
                type="image/webp">
        
                <source media="(max-width: 767px)" 
                srcset="
                /img/about-us/team-1x.webp 1x, 
                /img/about-us/team-2x.webp 2x" 
                type="image/webp">

                <img src="/img/about-us/team-desktop-1x.webp"  alt="Team photo"
                    class="team-photo"  loading="lazy">
            </picture>
            </div>

            <div class="about_logo">
                <div class="about-logo-wrapper">
                    <svg class="icon-logo-icon" width="64" height="64">
                        <use href="./img/sprite.svg#logo"></use>
                    </svg>
                </div>
                <h2 class="about-section-title">About ArtistsHub</h2>
                <p class="about-text">
                    At ArtistsHub, our mission is to connect music lovers with the artists they adore.
                    We strive to create a vibrant community where discovering new music is as
                    enjoyable as listening to it.
                </p>
            </div>
        </div>
    `});window.jQuery=h;window.$=h;const P="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function N(){try{const s=await(await fetch(P)).json();return(Array.isArray(s.data)?s.data:[]).slice(0,10)}catch(e){return console.error("Error fetching feedbacks:",e),[]}}const C=document.querySelector(".feedback-root-container"),F=`<h2 class="feedback-title-hidden">Feedbacks our visitors</h2>

  <div class="swiper feedbacks-swiper">
    <div class="swiper-wrapper" id="feedbacks-container">
    </div>
      <div class="swiper-button-prev">
       <svg class="icons-arrow">
        <use href="./img/sprite.svg#arrow-left"></use>
       </svg>
      </div>

      <div class="swiper-button-next">
       <svg class="icons-arrow">
        <use href="./img/sprite.svg#arrow-right"></use>
       </svg>
      </div>
 <div class="swiper-pagination"></div>
    </div>
  `;C.innerHTML=F;function O(e){const s=document.createElement("div");s.classList.add("swiper-slide","feedback-content");const i=Number(e.rating)||0,o=Math.round(i);let a="";for(let t=1;t<=5;t++){const r=t<=o?"star-filled":"star-empty";a+=`
<svg class="star-icon ${r}" width="18" height="18">
<use href="./img/sprite.svg#star"></use>
</svg>`}return s.innerHTML=`
<div class="star-rating">${a}</div>
<div class="feedback-text">${e.descr||""}</div>
<div class="feedback-author">${e.name||""}</div>
`,s}async function R(){const e=document.getElementById("feedbacks-container"),s=await N();s.forEach(i=>{const o=O(i);e.appendChild(o)}),new k(".feedbacks-swiper",{modules:[L,$],slidesPerView:1,loop:!1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(i,o){return i<3?`<span class="${o} custom-bullet-${i}"></span>`:""}},on:{init:function(){b(this,s),g(this)},slideChange:function(){b(this,s),g(this)}}})}function g(e){const s=e.pagination.bullets;if(!s||s.length===0)return;s.forEach(o=>o.classList.remove("swiper-pagination-bullet-active"));const i=e.activeIndex;i<=2?s[0].classList.add("swiper-pagination-bullet-active"):i>=3&&i<=6?s[1].classList.add("swiper-pagination-bullet-active"):s[2].classList.add("swiper-pagination-bullet-active")}function b(e,s){const i=document.querySelector(".swiper-button-prev"),o=document.querySelector(".swiper-button-next");i.classList.toggle("disabled",e.activeIndex===0),o.classList.toggle("disabled",e.activeIndex===s.length-1)}R();const I=document.querySelector(".footer__container");I.innerHTML=`
  <div class="footer__content">
    <div class="footer__logo">
     <a href="index.html" class="footer__logo-link">
    <svg class="footer__logo-icon">
      <use href="img/sprite.svg#logo-2"></use>
    </svg>
    </a>
    </div>
    <nav class="footer__nav">
      <a href="#artists" class="footer__nav-link">Artists</a>
      <a href="#about" class="footer__nav-link">About us</a>
      <a href="#reviews" class="footer__nav-link">Reviews</a>
    </nav>
  </div>

  <div class="footer__credits">
    <div class="footer__socials">
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="footer__social-link">
        <svg class="footer__social-icon" viewBox="0 0 32 32" width="40" height="40">
          <use href="img/sprite.svg#instagram"></use>
        </svg>
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="footer__social-link">
        <svg class="footer__social-icon" viewBox="0 0 32 32" width="40" height="40">
          <use href="img/sprite.svg#facebook"></use>
        </svg>
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" class="footer__social-link">
        <svg class="footer__social-icon" viewBox="0 0 32 32" width="40" height="40">
          <use href="img/sprite.svg#youtube"></use>
        </svg>
      </a>
    </div>
    <div class="footer__copyright">
      © ${new Date().getFullYear()} Project-X
    </div>
  </div>
`;document.addEventListener("click",e=>{const s=e.target.closest(".js-open-modal-artist");if(s){const a=document.querySelector("#artist-modal");if(a){const t=s.dataset.id;a.showModal(),B(t)}}const i=e.target.closest("#close-modal-artist"),o=document.querySelector("#artist-modal");o&&o.open&&(i||e.target===o)&&o.close()});
//# sourceMappingURL=index.js.map
