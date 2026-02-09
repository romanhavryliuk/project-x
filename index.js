import{a as f,j as w,S as x,N as $,P as A}from"./assets/vendor-Dz2QzdCe.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(i){if(i.ep)return;i.ep=!0;const t=a(i);fetch(i.href,t)}})();const c=document.querySelector(".header");c.innerHTML=`
<div class="container">

<nav class="page-nav">
      <a href="./" class="logo"
        ><svg class="icon logo">
          <use href="/img/main-logo.svg#icon-logo"></use>
        </svg>
      </a>
      <button type="button" class="burger-icon-btn" id="burger-icon-btn">
        <svg class="icon burger-icon">
          <use href="/img/sprite.svg#burger"></use>
        </svg>
      </button>
      <button type="button" class="close-icon-btn" id="close-icon-btn">
          <svg class="icon close-icon">
            <use href="/img/sprite.svg#close-x"></use>
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

      </div>`;const S=document.querySelector(".burger-icon-btn"),M=document.querySelector(".close-icon-btn"),v=document.querySelector(".menu-modal"),E=document.querySelectorAll(".mobile-section-link");S.addEventListener("click",()=>{c.classList.add("menu-open"),v.classList.add("is-open"),document.body.style.overflow="hidden"});M.addEventListener("click",()=>{c.classList.remove("menu-open"),v.classList.remove("is-open"),document.body.style.overflow="auto"});E.forEach(e=>{e.addEventListener("click",()=>{c.classList.remove("menu-open"),v.classList.remove("is-open"),document.body.style.overflow="auto"})});const T=document.querySelector("#hero");T.innerHTML=`
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
        <svg class="icon_hero" width="24" height="24">
          <use href="/img/sprite.svg#explore"></use>
        </svg>
      </button>
    </div>
    <div class="hero_image"></div>
  </div>
`;const q=document.querySelector("#artists");let p=1;const g=8;let u=[];async function y(){try{const e=await f.get("https://sound-wave.b.goit.study/api/artists",{params:{limit:g,page:p}}),{artists:s,totalPages:a}=e.data;u=[...u,...s];const o=p>=a||s.length<g?"is-hidden":"",i=`
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
    `;q.innerHTML=i,j()}catch(e){console.error("Помилка завантаження артистів:",e)}}function j(){const e=document.querySelector(".load-more");document.querySelector(".artists-list"),e&&(e.onclick=()=>{p+=1,y()})}y();const m=document.querySelector(".artist_form_upper"),n=document.querySelector(".artist_form_albums"),H=f.create({baseURL:"https://sound-wave.b.goit.study/api"});function B({strArtist:e,strArtistThumb:s,intFormedYear:a,intDiedYear:o,strGender:i,intMembers:t,strCountry:r,strBiographyEN:l,genres:_}){const k=` 
    <div class="artist-modal-header">
   
      <h2 class="artist-title">${e}</h2>
    </div>
    <div class="artist_form_upper_container">
      <!-- img -->
      <div class="artist-modal-img">
        <img class="artist_form_upper_img" src="${s}" alt="" />
      </div>
<div class="artist_form_upper_info_container">
  
        <div class="artist_form_upper_info">
          <ul class="stats-list parent-upper">
            <li class="stats-item upper-grid-one">
              <span class="stats-label">Years active</span>
              <span class="stats-value">${a}-present</span>
            </li>
            <li class="stats-item upper-grid-two">
              <span class="stats-label">Sex</span>
              <span class="stats-value">${i}</span>
            </li>
            <li class="stats-item upper-grid-three">
              <span class="stats-label">Members</span>
              <span class="stats-value">${t}</span>
            </li>
            <li class="stats-item upper-grid-four">
              <span class="stats-label">Country</span>
              <span class="stats-value">${r}</span>
            </li>
          </ul>
        </div>
        <div class="artist-modal-biography">
          <h3 class="bio-title">Biography</h3>
          <p class="bio-text">
            ${l}
          </p>
        </div>
        <ul class="genre-list">
        ${_.map(L=>`<li class="genre-item"><p class="genre-name">${L}</p></li>`).join("")}
        </ul>
</div>
    </div>
  `;m.insertAdjacentHTML("beforeend",k)}function N(e){m&&(m.innerHTML=""),n&&(n.innerHTML=""),fetch(`https://sound-wave.b.goit.study/api/artists/${e}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>B(s)).catch(s=>console.log("Error fetching artist data:",s)),C(e)}async function P(e){try{return(await H.get(`/artists/${e}/albums`)).data}catch(s){throw console.error("Error fetching artist albums:",s),s}}async function C(e){try{const s=await P(e);if(!s.albumsList||s.albumsList.length===0){n&&(n.innerHTML="<p>Альбомів не знайдено</p>");return}const a=i=>{const t=Math.floor(Number(i)/1e3),r=Math.floor(t/60),l=t%60;return`${r}:${l.toString().padStart(2,"0")}`},o=`
  <h2 class="albums-title">Albums</h2> 
  <div class="albums-list"> 
    ${s.albumsList.map(i=>`
      <div class="album-container">
        <h3 class="album-name">${i.strAlbum}</h3>
        <div class="tracks-list">
          <div class="tracks-header">
            <span class="track-span">Track</span>
            <span class="time-span">Time</span>
            <span class="link-span">Link</span>
          </div>

          ${i.tracks.map(t=>`
            <ul class="track-row">
              <li class="track-title">${t.strTrack}</li> 
              <li class="track-duration">${a(t.intDuration)}</li> 
              <li class="track-link">
                ${t.movie?`<a href="${t.movie}" target="_blank">
                    <svg class="youtube-icon" width="24" height="24" aria-hidden="true">
                      <use href="https://romanhavryliuk.github.io/project-x/assets/sprite-CNuXn03P.svg#youtube"></use>
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
                /img/about/team-desktop-1x.webp 1x, 
                /img/about/team-desktop-2x.webp 2x" 
                type="image/webp">
        
                <source media="(min-width: 768px)" 
                srcset="
                /img/about/team-tablet-1x.webp 1x, 
                /img/about/team-tablet-2x.webp 2x"
                type="image/webp">
        
                <source media="(max-width: 767px)" 
                srcset="
                /img/about/team-1x.webp 1x, 
                /img/about/team-2x.webp 2x" 
                type="image/webp">

                <img src="/img/about/team-desktop-1x.webp"  alt="Team photo"
                    class="team-photo"  loading="lazy">
            </picture>
            </div>

            <div class="about_logo">
                <div class="about-logo-wrapper">
                    <svg class="icon-logo-icon" width="64" height="64">
                        <use href="/img/sprite.svg#logo"></use>
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
    `});window.jQuery=w;window.$=w;const F="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function D(){try{const s=await(await fetch(F)).json();return(Array.isArray(s.data)?s.data:[]).slice(0,10)}catch(e){return console.error("Error fetching feedbacks:",e),[]}}const O=document.querySelector(".feedback-root-container"),R=`<h2 class="feedback-title-hidden">Feedbacks our visitors</h2>

  <div class="swiper feedbacks-swiper">
    <div class="swiper-wrapper" id="feedbacks-container">
    
    </div>
          <div class="swiper-button-prev" id="feedbacks-button-p">
       <svg class="icons-arrow">
        <use href="./img/sprite.svg#arrow-left"></use>
       </svg>
      </div>

      <div class="swiper-button-next" id="feedbacks-button-n">
       <svg class="icons-arrow">
        <use href="./img/sprite.svg#arrow-right"></use>
       </svg>
      </div>
 <div class="swiper-pagination"></div>
    </div>
  `;O.innerHTML=R;function Y(e){const s=document.createElement("div");s.classList.add("swiper-slide","feedback-content");const a=Number(e.rating)||0,o=Math.round(a);let i="";for(let t=1;t<=5;t++){const r=t<=o?"star-filled":"star-empty";i+=`
<svg class="star-icon ${r}" width="18" height="18">
<use href="./img/sprite.svg#star"></use>
</svg>`}return s.innerHTML=`
<div class="star-rating">${i}</div>
<div class="feedback-text">${e.descr||""}</div>
<div class="feedback-author">${e.name||""}</div>
`,s}async function I(){const e=document.getElementById("feedbacks-container"),s=await D();s.forEach(a=>{const o=Y(a);e.appendChild(o)}),new x(".feedbacks-swiper",{modules:[$,A],slidesPerView:1,loop:!1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(a,o){return a<3?`<span class="${o} custom-bullet-${a}"></span>`:""}},on:{init:function(){b(this,s),h(this)},slideChange:function(){b(this,s),h(this)}}})}function h(e){const s=e.pagination.bullets;if(!s||s.length===0)return;s.forEach(o=>o.classList.remove("swiper-pagination-bullet-active"));const a=e.activeIndex;a<=2?s[0].classList.add("swiper-pagination-bullet-active"):a>=3&&a<=6?s[1].classList.add("swiper-pagination-bullet-active"):s[2].classList.add("swiper-pagination-bullet-active")}function b(e,s){const a=document.querySelector(".swiper-button-prev"),o=document.querySelector(".swiper-button-next");a.classList.toggle("disabled",e.activeIndex===0),o.classList.toggle("disabled",e.activeIndex===s.length-1)}I();const U=document.querySelector(".footer__container");U.innerHTML=`
  <div class="footer__content">
    <div class="footer__logo">
     <a href="index.html" class="footer__logo-link">
    <svg class="footer__logo-icon"> 
    <use href="img/main-logo.svg#icon-logo"></use> 
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
`;const d=document.querySelector("#artist-modal");document.addEventListener("click",e=>{const s=e.target.closest(".js-open-modal-artist");if(s){const a=s.dataset.id;N(a),d.showModal();return}(e.target.closest("#close-modal-artist")||e.target===d)&&d.close()});
//# sourceMappingURL=index.js.map
