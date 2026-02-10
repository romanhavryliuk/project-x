import{a as E,j as S,S as B,N as H,P as j}from"./assets/vendor-Dz2QzdCe.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=a(o);fetch(o.href,t)}})();const f=document.querySelector(".header");f.innerHTML=`
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

      </div>`;const N=document.querySelector(".burger-icon-btn"),C=document.querySelector(".close-icon-btn"),k=document.querySelector(".menu-modal"),P=document.querySelectorAll(".mobile-section-link");N.addEventListener("click",()=>{f.classList.add("menu-open"),k.classList.add("is-open"),document.body.style.overflow="hidden"});C.addEventListener("click",()=>{f.classList.remove("menu-open"),k.classList.remove("is-open"),document.body.style.overflow="auto"});P.forEach(e=>{e.addEventListener("click",()=>{f.classList.remove("menu-open"),k.classList.remove("is-open"),document.body.style.overflow="auto"})});const I=document.querySelector("#hero");I.innerHTML=`
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
`;document.getElementById("hero_explore").addEventListener("click",function(){const e=document.getElementById("artists");e&&e.scrollIntoView({behavior:"smooth",block:"start"})});const O=`<div class="loader-backdrop is-hidden" data-loader>
  <div class="flower-spinner">
    <div class="dots-container">
      <div class="bigger-dot">
        <div class="smaller-dot"></div>
      </div>
    </div>
  </div>
</div>
`,v=new Map;function L(e){const s=document.querySelector(e);s&&(s.querySelector("[data-loader]")||s.insertAdjacentHTML("afterbegin",O))}function M(e){return document.querySelector(`${e} [data-loader]`)}function _(e){var a;const s=(v.get(e)??0)+1;v.set(e,s),(a=M(e))==null||a.classList.remove("is-hidden")}function A(e){var a;const s=(v.get(e)??0)-1;s<=0?(v.set(e,0),(a=M(e))==null||a.classList.add("is-hidden")):v.set(e,s)}const D=document.querySelector("#artists");L("#artists");let w=1;const x=8;let h=[];async function q(){_("#artists");try{const e=await E.get("https://sound-wave.b.goit.study/api/artists",{params:{limit:x,page:w}}),{artists:s,totalPages:a}=e.data;h=[...h,...s];const i=w>=a||s.length<x?"is-hidden":"",o=`
      <div class="container artists-container">
        <div class="artists-header-wrapper">  
          <h2 class="artists-title">Artist</h2>
          <h3 class="artists-subtitle">Explore Your New Favorite Artists</h3>
        </div>
        <div class="artists-list-wrapper">
        <ul class="artists-list">
          ${h.map(t=>`
            <li class="artist-card" data-id="${t._id}">
            <div class="artist-image-wrapper">
            <img class="artist-image" src="${t.strArtistThumb}" alt="${t.strArtist}" loading="lazy" width="343" height="432"/>
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
        <button type="button"  class="load-more ${i}">Load More
        <svg class="load-more-icon" width="14" height="14">
        <use href="sprite.svg#arrow-down"></use>
        </svg></button>
        </div>
      </div>
    `;D.innerHTML=o,F()}catch(e){console.error("Помилка завантаження артистів:",e)}finally{A("#artists")}}function F(){const e=document.querySelector(".load-more");document.querySelector(".artists-list"),e&&(e.onclick=()=>{w+=1,q()})}q();const y=document.querySelector(".artist_form_upper"),p=document.querySelector(".artist_form_albums");L("#artist-modal");const R=E.create({baseURL:"https://sound-wave.b.goit.study/api"});function U({strArtist:e,strArtistThumb:s,intFormedYear:a,intDiedYear:i,strGender:o,intMembers:t,strCountry:r,strBiographyEN:c,genres:l}){let n;a&&a!=="null"?i&&i!=="null"?n=`${a}–${i}`:n=`${a}–present`:n="Information missing";const m=` 
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
              <span class="stats-value">${n}</span>
            </li>
            <li class="stats-item upper-grid-two">
              <span class="stats-label">Sex</span>
              <span class="stats-value">${o}</span>
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
            ${c}
          </p>
        </div>
        <ul class="genre-list">
        ${l.map(b=>`<li class="genre-item"><p class="genre-name">${b}</p></li>`).join("")}
        </ul>
</div>
    </div>
  `;y.insertAdjacentHTML("beforeend",m)}function G(e){y&&(y.innerHTML=""),p&&(p.innerHTML=""),_("#artist-modal"),fetch(`https://sound-wave.b.goit.study/api/artists/${e}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>U(s)).catch(s=>console.log("Error fetching artist data:",s)),Q(e)}async function z(e){try{return(await R.get(`/artists/${e}/albums`)).data}catch(s){throw console.error("Error fetching artist albums:",s),s}}async function Q(e){try{const s=await z(e);if(!s.albumsList||s.albumsList.length===0){p&&(p.innerHTML="<p>Альбомів не знайдено</p>");return}const a=o=>{const t=Math.floor(Number(o)/1e3),r=Math.floor(t/60),c=t%60;return`${r}:${c.toString().padStart(2,"0")}`},i=`
  <h2 class="albums-title">Albums</h2> 
  <div class="albums-list"> 
    ${s.albumsList.map(o=>`
      <div class="album-container">
        <h3 class="album-name">${o.strAlbum}</h3>
        <div class="tracks-list">
          <div class="tracks-header">
            <span class="track-span">Track</span>
            <span class="time-span">Time</span>
            <span class="link-span">Link</span>
          </div>

          ${o.tracks.map(t=>`
            <ul class="track-row">
              <li class="track-title">${t.strTrack}</li> 
              <li class="track-duration">${a(t.intDuration)}</li> 
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
`;p&&(p.innerHTML=i)}catch(s){console.error("Error rendering artist albums:",s)}finally{A("#artist-modal")}}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".about-section");e.innerHTML=`
        <div class="about-container container">
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
    `});window.jQuery=S;window.$=S;L(".feedback-section");const V="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function W(){_(".feedback-section");try{const s=await(await fetch(V)).json();return(Array.isArray(s.data)?s.data:[]).slice(0,10)}catch(e){return console.error("Error fetching feedbacks:",e),[]}finally{A(".feedback-section")}}const K=document.querySelector(".feedback-root-container"),X=`<h2 class="feedback-title-hidden">Feedbacks our visitors</h2>

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
<button type="button" class="feedback-button" id="Leave-feedback">
         Leave feedback
        </button>
    </div>

    <div class="feedback-modal-backdrop" hidden>
  <div class="feedback-modal">

    <button class="feedback-modal-close"></button>

    <h2 class="feedback-modal-title">Submit feedback</h2>

    <form class="feedback-modal-form">
      <label>
        Name
        <input type="text" class="feedback-modal-input" placeholder="Emily">
      </label>

      <label>
        Message
        <textarea class="feedback-modal-textarea" placeholder="Type your message..."></textarea>
      </label>
<div class="feedback-modal-stars"></div>

      <button type="submit" class="feedback-modal-button" id="submit-button">Submit</button>
    </form>
  </div>
</div>
  `;K.innerHTML=X;function Y(e){const s=document.createElement("div");s.classList.add("swiper-slide","feedback-content");const a=Number(e.rating)||0,i=Math.round(a);let o="";for(let t=1;t<=5;t++){const r=t<=i?"star-filled":"star-empty";o+=`
<svg class="star-icon ${r}" width="18" height="18">
 <use href="sprite.svg#star"></use>
</svg>`}return s.innerHTML=`
<div class="star-rating">${o}</div>
<div class="feedback-text">${e.descr||""}</div>
<div class="feedback-author">${e.name||""}</div>
`,s}async function J(){const e=document.getElementById("feedbacks-container");(await W()).forEach(a=>{e.appendChild(Y(a))}),new B(".feedbacks-swiper",{modules:[H,j],slidesPerView:1,spaceBetween:20,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},on:{init:function(){$(this)},slideChange:function(){$(this)}}})}function $(e){const s=document.querySelector(".swiper-button-prev"),a=document.querySelector(".swiper-button-next");s&&a&&(s.classList.toggle("disabled",e.isBeginning),a.classList.toggle("disabled",e.isEnd))}J();(()=>{const e=document.querySelector("#Leave-feedback"),s=document.querySelector(".feedback-modal-close"),a=document.querySelector(".feedback-modal-backdrop"),i=document.body;if(!e||!s||!a){console.log("not found");return}e.addEventListener("click",()=>{a.removeAttribute("hidden"),i.classList.add("no-scroll"),o()}),s.addEventListener("click",()=>{a.setAttribute("hidden",""),i.classList.remove("no-scroll")}),window.addEventListener("keydown",l=>{l.key==="Escape"&&!a.hasAttribute("hidden")&&(a.setAttribute("hidden",""),i.classList.remove("no-scroll"))}),a.addEventListener("click",l=>{l.target===a&&(a.setAttribute("hidden",""),i.classList.remove("no-scroll"))});function o(l=0){const n=document.querySelector(".feedback-modal-stars");if(!n)return;n.innerHTML="";for(let u=1;u<=5;u++){const m=u<=l?"star-filled":"star-empty";n.insertAdjacentHTML("beforeend",`<svg class="star-icon ${m}" width="18" height="18">
 <use href="sprite.svg#star"></use>
</svg>`)}const d=n.querySelectorAll(".star-icon");d.forEach((u,m)=>{u.addEventListener("click",()=>{d.forEach((b,T)=>{T<=m?b.classList.add("selected"):b.classList.remove("selected")})})})}const t=document.querySelector(".feedback-modal-form"),r=t.querySelector(".feedback-modal-input"),c=t.querySelector(".feedback-modal-textarea");t.addEventListener("submit",l=>{l.preventDefault();let n=!1;r.value.trim()?r.classList.remove("error"):(r.classList.add("error"),n=!0),c.value.trim()?c.classList.remove("error"):(c.classList.add("error"),n=!0),[r,c].forEach(d=>{d&&d.addEventListener("input",()=>{d.classList.remove("error")})}),n||t.submit()})})();const Z=document.querySelector(".footer__container");Z.innerHTML=`
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
`;const g=document.querySelector("#artist-modal");document.addEventListener("click",e=>{const s=e.target.closest(".js-open-modal-artist");if(s){const a=s.dataset.id;G(a),g.showModal();return}(e.target.closest("#close-modal-artist")||e.target===g)&&g.close()});
//# sourceMappingURL=index.js.map
