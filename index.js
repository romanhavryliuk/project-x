import{a as v,j as f,S as y,N as _,P as k}from"./assets/vendor-Bwpow0wG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(a){if(a.ep)return;a.ep=!0;const e=i(a);fetch(a.href,e)}})();const $=document.querySelector("#artists");let u=1;const p=8;let l=[];async function h(){try{const s=await v.get("https://sound-wave.b.goit.study/api/artists",{params:{limit:p,page:u}}),{artists:t,totalPages:i}=s.data;l=[...l,...t];const r=u>=i||t.length<p?"is-hidden":"",a=`
      <div class="container artists-container">
        <h2 class="artists-title">Artist</h2>
        <h3 class="artists-subtitle">Explore Your New Favorite Artists</h3>
        
        <ul class="artists-list">
          ${l.map(e=>`
            <li class="artist-card" data-id="${e._id}">
              <img class="artist-image" src="${e.strArtistThumb}" alt="${e.strArtist}" />
              <div class="artist-content-wrapper">
                <ul class="genres-list">
                  ${e.genres.map(o=>`<li class="genres-item">${o}</li>`).join("")}
                </ul>
                <div class="artist-title-wrapper">
                  <h4 class="artist-name">${e.strArtist}</h4>
                  <p class="artist-description">${e.strBiographyEN}</p>
                </div>
                <button class="artist-button js-open-modal-artist" type="button" data-id="${e._id}">
                  Learn More 
                  <svg class="learn-more-icon" width="8" height="14">
                    <use href="./img/sprite.svg#learn-more"></use>
                  </svg>
                </button>
              </div>
            </li>
          `).join("")}
        </ul>

        <button type="button"  class="load-more ${r}">Load More
          <svg class="load-more-icon" width="14" height="14">
            <use href="./img/sprite.svg#arrow-down"></use>
          </svg></button>
      </div>
    `;$.innerHTML=a,x()}catch(s){console.error("Помилка завантаження артистів:",s)}}function x(){const s=document.querySelector(".load-more");document.querySelector(".artists-list"),s&&(s.onclick=()=>{u+=1,h()})}h();const d=document.querySelector(".artist_form_upper"),n=document.querySelector(".artist_form_albums"),L=v.create({baseURL:"https://sound-wave.b.goit.study/api"});function A({strArtist:s,strArtistThumb:t,intFormedYear:i,strGender:r,intMembers:a,strCountry:e,strBiographyEN:o,genres:c}){const b=` 
    <div class="artist-modal-header">
    <button class="close-btn" id="close-modal-artist" type="button" aria-label="Close-modal">
      <svg class="close-artist">
        <use href="./img/sprite.svg#close-x"></use>
      </svg>
    </button>
      <h2 class="artist-title">${s}</h2>
    </div>
    <div class="artist_form_upper_container">
      <!-- img -->
      <div class="artist-modal-img">
        <img class="artist_form_upper_img" src="${t}" alt="" />
      </div>

      <div class="artist_form_upper_info">
        <ul class="stats-list parent-upper">
          <li class="stats-item upper-grid-one">
            <span class="stats-label">Years active</span>
            <span class="stats-value">${i}-present</span>
          </li>
          <li class="stats-item upper-grid-two">
            <span class="stats-label">Sex</span>
            <span class="stats-value">${r}</span>
          </li>
          <li class="stats-item upper-grid-three">
            <span class="stats-label">Members</span>
            <span class="stats-value">${a}</span>
          </li>
          <li class="stats-item upper-grid-four">
            <span class="stats-label">Country</span>
            <span class="stats-value">${e}</span>
          </li>
        </ul>
      </div>
      <div class="artist-modal-biography">
        <h3 class="bio-title">Biography</h3>
        <p class="bio-text">
          ${o}
        </p>
      </div>
      <ul class="genre-list">
      ${c.map(w=>`<li class="genre-item"><p class="genre-name">${w}</p></li>`).join("")}
      </ul>
    </div>
  `;d.insertAdjacentHTML("beforeend",b)}function S(s){d&&(d.innerHTML=""),n&&(n.innerHTML=""),fetch(`https://sound-wave.b.goit.study/api/artists/${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>A(t)).catch(t=>console.log("Error fetching artist data:",t)),E(s)}async function M(s){try{return(await L.get(`/artists/${s}/albums`)).data}catch(t){throw console.error("Error fetching artist albums:",t),t}}async function E(s){try{const t=await M(s);if(!t.albumsList||t.albumsList.length===0){n&&(n.innerHTML="<p>Альбомів не знайдено</p>");return}const i=a=>{const e=Math.floor(Number(a)/1e3),o=Math.floor(e/60),c=e%60;return`${o}:${c.toString().padStart(2,"0")}`},r=`
  <h2 class="albums-title">Albums</h2> 
  <div class="albums-list"> 
    ${t.albumsList.map(a=>`
      <div class="album-container">
        <h3 class="album-name">${a.strAlbum}</h3>
        <div class="tracks-list">
          <div class="tracks-header">
            <span class="track-span">Track</span>
            <span class="time-span">Time</span>
            <span class="link-span">Link</span>
          </div>

          ${a.tracks.map(e=>`
            <ul class="track-row">
              <li class="track-title">${e.strTrack}</li> 
              <li class="track-duration">${i(e.intDuration)}</li> 
              <li class="track-link">
                ${e.movie?`<a href="${e.movie}" target="_blank">
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
`;n&&(n.innerHTML=r)}catch(t){console.error("Error rendering artist albums:",t)}}document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".about-section");s.innerHTML=`
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
    `});window.jQuery=f;window.$=f;const T="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function j(){try{const t=await(await fetch(T)).json();return(Array.isArray(t.data)?t.data:[]).slice(0,10)}catch(s){return console.error("Error fetching feedbacks:",s),[]}}const B=document.querySelector(".feedback-root-container"),q=`<h2 class="feedback-title-hidden">Feedbacks our visitors</h2>

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
  `;B.innerHTML=q;function H(s){const t=document.createElement("div");t.classList.add("swiper-slide","feedback-content");const i=Number(s.rating)||0,r=Math.round(i);let a="";for(let e=1;e<=5;e++){const o=e<=r?"star-filled":"star-empty";a+=`
<svg class="star-icon ${o}" width="18" height="18">
<use href="./img/sprite.svg#star"></use>
</svg>`}return t.innerHTML=`
<div class="star-rating">${a}</div>
<div class="feedback-text">${s.descr||""}</div>
<div class="feedback-author">${s.name||""}</div>
`,t}async function P(){const s=document.getElementById("feedbacks-container"),t=await j();t.forEach(i=>{const r=H(i);s.appendChild(r)}),new y(".feedbacks-swiper",{modules:[_,k],slidesPerView:1,loop:!1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(i,r){return i<3?`<span class="${r} custom-bullet-${i}"></span>`:""}},on:{init:function(){g(this,t),m(this)},slideChange:function(){g(this,t),m(this)}}})}function m(s){const t=s.pagination.bullets;if(!t||t.length===0)return;t.forEach(r=>r.classList.remove("swiper-pagination-bullet-active"));const i=s.activeIndex;i<=2?t[0].classList.add("swiper-pagination-bullet-active"):i>=3&&i<=6?t[1].classList.add("swiper-pagination-bullet-active"):t[2].classList.add("swiper-pagination-bullet-active")}function g(s,t){const i=document.querySelector(".swiper-button-prev"),r=document.querySelector(".swiper-button-next");i.classList.toggle("disabled",s.activeIndex===0),r.classList.toggle("disabled",s.activeIndex===t.length-1)}P();const N=document.querySelector(".footer__container");N.innerHTML=`
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
`;document.addEventListener("click",s=>{const t=s.target.closest(".js-open-modal-artist");if(t){const a=document.querySelector("#artist-modal");if(a){const e=t.dataset.id;a.showModal(),S(e)}}const i=s.target.closest("#close-modal-artist"),r=document.querySelector("#artist-modal");r&&r.open&&(i||s.target===r)&&r.close()});
//# sourceMappingURL=index.js.map
