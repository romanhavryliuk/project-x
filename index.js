import{a as k,j as L,S as E,N as T,P as q}from"./assets/vendor-Dz2QzdCe.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(a){if(a.ep)return;a.ep=!0;const t=i(a);fetch(a.href,t)}})();const d=document.querySelector(".header");d.innerHTML=`
<div class="container">

<nav class="page-nav">
      <a href="./" class="logo" aria-label="ArtistsHub - back to main page">
        <svg class="icon logo">
          <use href="main-logo.svg#icon-logo"></use>
        </svg>
      </a>
      <button type="button" class="burger-icon-btn" id="burger-icon-btn" aria-label="Open navigation menu">
        <svg class="icon burger-icon">
          <use href="sprite.svg#burger"></use>
        </svg>
      </button>
      <button type="button" class="close-icon-btn" id="close-icon-btn" aria-label="Close navigation menu">
          <svg class="icon close-icon">
            <use href="sprite.svg#close-x"></use>
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

      </div>`;const B=document.querySelector(".burger-icon-btn"),H=document.querySelector(".close-icon-btn"),g=document.querySelector(".menu-modal"),j=document.querySelectorAll(".mobile-section-link");B.addEventListener("click",()=>{d.classList.add("menu-open"),g.classList.add("is-open"),document.body.style.overflow="hidden"});H.addEventListener("click",()=>{d.classList.remove("menu-open"),g.classList.remove("is-open"),document.body.style.overflow="auto"});j.forEach(s=>{s.addEventListener("click",()=>{d.classList.remove("menu-open"),g.classList.remove("is-open"),document.body.style.overflow="auto"})});const N=document.querySelector("#hero");N.innerHTML=`
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
          <use href="sprite.svg#explore"></use>
        </svg>
      </button>
    </div>
    <div class="hero_image"></div>
  </div>
`;document.getElementById("hero_explore").addEventListener("click",function(){const s=document.getElementById("artists");s&&s.scrollIntoView({behavior:"smooth",block:"start"})});const P=`<div class="loader-backdrop is-hidden" data-loader>
  <div class="flower-spinner">
    <div class="dots-container">
      <div class="bigger-dot">
        <div class="smaller-dot"></div>
      </div>
    </div>
  </div>
</div>
`,l=new Map;function f(s){const e=document.querySelector(s);e&&(e.querySelector("[data-loader]")||e.insertAdjacentHTML("afterbegin",P))}function x(s){return document.querySelector(`${s} [data-loader]`)}function h(s){var i;const e=(l.get(s)??0)+1;l.set(s,e),(i=x(s))==null||i.classList.remove("is-hidden")}function w(s){var i;const e=(l.get(s)??0)-1;e<=0?(l.set(s,0),(i=x(s))==null||i.classList.add("is-hidden")):l.set(s,e)}const C=document.querySelector("#artists");f("#artists");let m=1;const y=8;let p=[];async function A(){h("#artists");try{const s=await k.get("https://sound-wave.b.goit.study/api/artists",{params:{limit:y,page:m}}),{artists:e,totalPages:i}=s.data;p=[...p,...e];const o=m>=i||e.length<y?"is-hidden":"",a=`
      <div class="container artists-container">
        <div class="artists-header-wrapper">  
          <h2 class="artists-title">Artist</h2>
          <h3 class="artists-subtitle">Explore Your New Favorite Artists</h3>
        </div>
        <ul class="artists-list">
          ${p.map(t=>`
            <li class="artist-card" data-id="${t._id}">
            <div class="artist-image-wrapper">
            <img class="artist-image" src="${t.strArtistThumb}" alt="${t.strArtist}" />
            </div>  
              <div class="artist-content-wrapper">
                <ul class="genres-list">
                  ${t.genres.map(r=>`<li class="genres-item">${r}</li>`).join("")}
                </ul>
                <div class="artist-title-wrapper">
                  <h4 class="artist-name">${t.strArtist}</h4>
                  <p class="artist-description">${t.strBiographyEN}</p>
                </div>
                </div>
                <button class="artist-button js-open-modal-artist" type="button" data-id="${t._id}">
                  Learn More 
                  <svg class="learn-more-icon" width="8" height="14">
                    <use href="sprite.svg#learn-more"></use>
                  </svg>
                </button>
            </li>
          `).join("")}
        </ul>

        <button type="button"  class="load-more ${o}">Load More
          <svg class="load-more-icon" width="14" height="14">
            <use href="sprite.svg#arrow-down"></use>
          </svg></button>
      </div>
    `;C.innerHTML=a,I()}catch(s){console.error("Помилка завантаження артистів:",s)}finally{w("#artists")}}function I(){const s=document.querySelector(".load-more");document.querySelector(".artists-list"),s&&(s.onclick=()=>{m+=1,A()})}A();const b=document.querySelector(".artist_form_upper"),n=document.querySelector(".artist_form_albums");f("#artist-modal");const O=k.create({baseURL:"https://sound-wave.b.goit.study/api"});function D({strArtist:s,strArtistThumb:e,intFormedYear:i,intDiedYear:o,strGender:a,intMembers:t,strCountry:r,strBiographyEN:u,genres:$}){let c;i&&i!=="null"?o&&o!=="null"?c=`${i}–${o}`:c=`${i}–present`:c="Information missing";const M=` 
    <div class="artist-modal-header">
   
      <h2 class="artist-title">${s}</h2>
    </div>
    <div class="artist_form_upper_container">
      <!-- img -->
      <div class="artist-modal-img">
        <img class="artist_form_upper_img" src="${e}" alt="" />
      </div>
<div class="artist_form_upper_info_container">
  
        <div class="artist_form_upper_info">
          <ul class="stats-list parent-upper">
            <li class="stats-item upper-grid-one">
              <span class="stats-label">Years active</span>
              <span class="stats-value">${c}</span>
            </li>
            <li class="stats-item upper-grid-two">
              <span class="stats-label">Sex</span>
              <span class="stats-value">${a}</span>
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
            ${u}
          </p>
        </div>
        <ul class="genre-list">
        ${$.map(S=>`<li class="genre-item"><p class="genre-name">${S}</p></li>`).join("")}
        </ul>
</div>
    </div>
  `;b.insertAdjacentHTML("beforeend",M)}function F(s){b&&(b.innerHTML=""),n&&(n.innerHTML=""),h("#artist-modal"),fetch(`https://sound-wave.b.goit.study/api/artists/${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>D(e)).catch(e=>console.log("Error fetching artist data:",e)),U(s)}async function R(s){try{return(await O.get(`/artists/${s}/albums`)).data}catch(e){throw console.error("Error fetching artist albums:",e),e}}async function U(s){try{const e=await R(s);if(!e.albumsList||e.albumsList.length===0){n&&(n.innerHTML="<p>Альбомів не знайдено</p>");return}const i=a=>{const t=Math.floor(Number(a)/1e3),r=Math.floor(t/60),u=t%60;return`${r}:${u.toString().padStart(2,"0")}`},o=`
  <h2 class="albums-title">Albums</h2> 
  <div class="albums-list"> 
    ${e.albumsList.map(a=>`
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
                      <use href="sprite.svg#youtube"></use>
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
`;n&&(n.innerHTML=o)}catch(e){console.error("Error rendering artist albums:",e)}finally{w("#artist-modal")}}document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".about-section");s.innerHTML=`
        <div class="about-container">
            <div class="about-team-photo">
            <picture>
                <source media="(min-width: 1440px)" 
                srcset="
                about/team-desktop-1x.webp 1x, 
                about/team-desktop-2x.webp 2x" 
                type="image/webp">
        
                <source media="(min-width: 768px)" 
                srcset="
                about/team-tablet-1x.webp 1x, 
                about/team-tablet-2x.webp 2x"
                type="image/webp">
        
                <source media="(max-width: 767px)" 
                srcset="
                about/team-1x.webp 1x, 
                about/team-2x.webp 2x" 
                type="image/webp">

                <img src="about/team-desktop-1x.webp"  alt="Team photo"
                    class="team-photo"  loading="lazy">
            </picture>
            </div>

            <div class="about_logo">
                <div class="about-logo-wrapper">
                    <svg class="icon-logo-icon" width="64" height="64">
                        <use href="sprite.svg#logo"></use>
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
    `});window.jQuery=L;window.$=L;f(".feedback-section");const G="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function Q(){h(".feedback-section");try{const e=await(await fetch(G)).json();return(Array.isArray(e.data)?e.data:[]).slice(0,10)}catch(s){return console.error("Error fetching feedbacks:",s),[]}finally{w(".feedback-section")}}const V=document.querySelector(".feedback-root-container"),W=`<h2 class="feedback-title-hidden">Feedbacks our visitors</h2>

  <div class="swiper feedbacks-swiper">
    <div class="swiper-wrapper" id="feedbacks-container">
    
    </div>
          <div class="swiper-button-prev" id="feedbacks-button-p">
       <svg class="icons-arrow">
        <use href="sprite.svg#arrow-left"></use>
        </svg>
        <span class="sr-only">Swipe to previous slide</span>
      </div>

      <div class="swiper-button-next" id="feedbacks-button-n">
       <svg class="icons-arrow">
        <use href="sprite.svg#arrow-right"></use>
        </svg>
        <span class="sr-only">Swipe to next slide</span>
      </div>
 <div class="swiper-pagination"></div>
    </div>
  `;V.innerHTML=W;function z(s){const e=document.createElement("div");e.classList.add("swiper-slide","feedback-content");const i=Number(s.rating)||0,o=Math.round(i);let a="";for(let t=1;t<=5;t++){const r=t<=o?"star-filled":"star-empty";a+=`
<svg class="star-icon ${r}" width="18" height="18">
 <use href="sprite.svg#star"></use>
</svg>`}return e.innerHTML=`
<div class="star-rating">${a}</div>
<div class="feedback-text">${s.descr||""}</div>
<div class="feedback-author">${s.name||""}</div>
`,e}async function K(){const s=document.getElementById("feedbacks-container");(await Q()).forEach(i=>{s.appendChild(z(i))}),new E(".feedbacks-swiper",{modules:[T,q],slidesPerView:1,spaceBetween:20,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},on:{init:function(){_(this)},slideChange:function(){_(this)}}})}function _(s){const e=document.querySelector(".swiper-button-prev"),i=document.querySelector(".swiper-button-next");e&&i&&(e.classList.toggle("disabled",s.isBeginning),i.classList.toggle("disabled",s.isEnd))}K();const X=document.querySelector(".footer__container");X.innerHTML=`
  <div class="footer__content">
    <div class="footer__logo">
     <a href="index.html" class="footer__logo-link" aria-label="ArtistsHub - back to main page">
    <svg class="footer__logo-icon"> 
    <use href="main-logo.svg#icon-logo"></use> 
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
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Go to Instagram">
        <svg class="footer__social-icon" viewBox="0 0 32 32" width="40" height="40">
          <use href="sprite.svg#instagram"></use>
        </svg>
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Go to Facebook">
        <svg class="footer__social-icon" viewBox="0 0 32 32" width="40" height="40">
          <use href="sprite.svg#facebook"></use>
        </svg>
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Go to YouTube">
        <svg class="footer__social-icon" viewBox="0 0 32 32" width="40" height="40">
          <use href="sprite.svg#youtube"></use>
        </svg>
      </a>
    </div>
    <div class="footer__copyright">
      © ${new Date().getFullYear()} Project-X
    </div>
  </div>
`;const v=document.querySelector("#artist-modal");document.addEventListener("click",s=>{const e=s.target.closest(".js-open-modal-artist");if(e){const i=e.dataset.id;F(i),v.showModal();return}(s.target.closest("#close-modal-artist")||s.target===v)&&v.close()});
//# sourceMappingURL=index.js.map
