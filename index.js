import{a as v,j as f,S as y,N as _,P as k}from"./assets/vendor-Bwpow0wG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(a){if(a.ep)return;a.ep=!0;const e=r(a);fetch(a.href,e)}})();const $=document.querySelector("#artists");let l=1;const u=8;let c=[];async function h(){try{const t=await v.get("https://sound-wave.b.goit.study/api/artists",{params:{limit:u,page:l}}),{artists:s,totalPages:r}=t.data;c=[...c,...s];const i=l>=r||s.length<u?"is-hidden":"",a=`
      <div class="container artists-container">
        <h2 class="artists-title">Artist</h2>
        <h3 class="artists-subtitle">Explore Your New Favorite Artists</h3>
        
        <ul class="artists-list">
          ${c.map(e=>`
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
                <button class="artist-button" type="button" data-id="${e._id}">
                  Learn More 
                  <svg class="learn-more-icon" width="8" height="14">
                    <use href="./img/sprite.svg#learn-more"></use>
                  </svg>
                </button>
              </div>
            </li>
          `).join("")}
        </ul>

        <button type="button" class="load-more ${i}">Load More
          <svg class="load-more-icon" width="14" height="14">
            <use href="./img/sprite.svg#arrow-down"></use>
          </svg></button>
      </div>
    `;$.innerHTML=a,x()}catch(t){console.error("Помилка завантаження артистів:",t)}}function x(){const t=document.querySelector(".load-more"),s=document.querySelector(".artists-list");t&&(t.onclick=()=>{l+=1,h()}),s&&(s.onclick=r=>{const i=r.target.closest(".artist-button");i&&alert(i.dataset.bio)})}h();const L=document.querySelector(".artist_form_upper"),A="https://sound-wave.b.goit.study/api/artists/65ada227af9f6d155db46908";function M({strArtist:t,strArtistThumb:s,intFormedYear:r,strGender:i,intMembers:a,strCountry:e,strBiographyEN:o,genres:n}){const b=` 
    <div class="artist-modal-header">
    <button class="close-btn" id="closeModalArtist" type="button" aria-label="Close-modal">
      <svg class="close-artist">
        <use href="./img/sprite.svg#close-x"></use>
      </svg>
    </button>
      <h2 class="artist-title">${t}</h2>
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
            <span class="stats-value">${r}-present</span>
          </li>
          <li class="stats-item upper-grid-two">
            <span class="stats-label">Sex</span>
            <span class="stats-value">${i}</span>
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
      ${n.map(w=>`<li class="genre-item"><p class="genre-name">${w}</p></li>`).join("")}
      </ul>
    </div>
  `;L.insertAdjacentHTML("beforeend",b)}let d=!1;function S(){d||(d=!0,fetch(A).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>M(t)).catch(t=>console.log("Error fetching artist data:",t)),j(E))}const p=document.querySelector(".artist_form_albums"),E="65ada227af9f6d155db46908",T=v.create({baseURL:"https://sound-wave.b.goit.study/api"});async function B(t){try{return(await T.get(`/artists/${t}/albums`)).data}catch(s){throw console.error("Error fetching artist albums:",s),s}}async function j(t){try{const s=await B(t);if(!s.albumsList||s.albumsList.length===0){p.innerHTML="<p>Альбомів не знайдено</p>";return}const r=a=>{const e=Math.floor(Number(a)/1e3),o=Math.floor(e/60),n=e%60;return`${o}:${n.toString().padStart(2,"0")}`},i=`
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

          ${a.tracks.map(e=>`
            <ul class="track-row">
              <li class="track-title">${e.strTrack}</li> 
              <li class="track-duration">${r(e.intDuration)}</li> 
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
`;p.innerHTML=i}catch(s){console.error("Error rendering artist albums:",s)}}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".about-section");t.innerHTML=`
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
    `});window.jQuery=f;window.$=f;const q="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function P(){try{const s=await(await fetch(q)).json();return(Array.isArray(s.data)?s.data:[]).slice(0,10)}catch(t){return console.error("Error fetching feedbacks:",t),[]}}const H=document.querySelector(".feedback-root-container"),N=`<h2 class="feedback-title-hidden">Feedbacks our visitors</h2>

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
  `;H.innerHTML=N;function C(t){const s=document.createElement("div");s.classList.add("swiper-slide","feedback-content");const r=Number(t.rating)||0,i=Math.round(r);let a="";for(let e=1;e<=5;e++){const o=e<=i?"star-filled":"star-empty";a+=`
<svg class="star-icon ${o}" width="18" height="18">
<use href="./img/sprite.svg#star"></use>
</svg>`}return s.innerHTML=`
<div class="star-rating">${a}</div>
<div class="feedback-text">${t.descr||""}</div>
<div class="feedback-author">${t.name||""}</div>
`,s}async function F(){const t=document.getElementById("feedbacks-container"),s=await P();s.forEach(r=>{const i=C(r);t.appendChild(i)}),new y(".feedbacks-swiper",{modules:[_,k],slidesPerView:1,loop:!1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(r,i){return r<3?`<span class="${i} custom-bullet-${r}"></span>`:""}},on:{init:function(){m(this,s),g(this)},slideChange:function(){m(this,s),g(this)}}})}function g(t){const s=t.pagination.bullets;if(!s||s.length===0)return;s.forEach(i=>i.classList.remove("swiper-pagination-bullet-active"));const r=t.activeIndex;r<=2?s[0].classList.add("swiper-pagination-bullet-active"):r>=3&&r<=6?s[1].classList.add("swiper-pagination-bullet-active"):s[2].classList.add("swiper-pagination-bullet-active")}function m(t,s){const r=document.querySelector(".swiper-button-prev"),i=document.querySelector(".swiper-button-next");r.classList.toggle("disabled",t.activeIndex===0),i.classList.toggle("disabled",t.activeIndex===s.length-1)}F();const O=document.querySelector(".footer__container");O.innerHTML=`
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
`;document.addEventListener("click",t=>{if(t.target.closest("#openModalArtist")){const a=document.querySelector("#artistModal");a&&(a.showModal(),S())}const r=t.target.closest("#closeModalArtist"),i=document.querySelector("#artistModal");i&&i.open&&(r||t.target===i)&&i.close()});
//# sourceMappingURL=index.js.map
