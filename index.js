import{a as M,P as j,j as q,S as P,N,b as C}from"./assets/vendor-BJGcNjwn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const h=document.querySelector(".header");h.innerHTML=`
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

      </div>`;const I=document.querySelector(".burger-icon-btn"),O=document.querySelector(".close-icon-btn"),A=document.querySelector(".menu-modal"),D=document.querySelectorAll(".mobile-section-link");I.addEventListener("click",()=>{h.classList.add("menu-open"),A.classList.add("is-open"),document.body.style.overflow="hidden"});O.addEventListener("click",()=>{h.classList.remove("menu-open"),A.classList.remove("is-open"),document.body.style.overflow="auto"});D.forEach(t=>{t.addEventListener("click",()=>{h.classList.remove("menu-open"),A.classList.remove("is-open"),document.body.style.overflow="auto"})});const R=document.querySelector("#hero");R.innerHTML=`
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
`;document.getElementById("hero_explore").addEventListener("click",function(){const t=document.getElementById("artists");t&&t.scrollIntoView({behavior:"smooth",block:"start"})});const F=`<div class="loader-backdrop is-hidden" data-loader>
  <div class="flower-spinner">
    <div class="dots-container">
      <div class="bigger-dot">
        <div class="smaller-dot"></div>
      </div>
    </div>
  </div>
</div>
`,m=new Map;function x(t){const e=document.querySelector(t);e&&(e.querySelector("[data-loader]")||e.insertAdjacentHTML("afterbegin",F))}function T(t){return document.querySelector(`${t} [data-loader]`)}function E(t){var s;const e=(m.get(t)??0)+1;m.set(t,e),(s=T(t))==null||s.classList.remove("is-hidden")}function $(t){var s;const e=(m.get(t)??0)-1;e<=0?(m.set(t,0),(s=T(t))==null||s.classList.add("is-hidden")):m.set(t,e)}const v=document.querySelector("#artists");x("#artists");const w=8;let L=1,k=null;function U(){v.querySelector(".artists-container")||v.insertAdjacentHTML("beforeend",`
    <div class="container artists-container">
      <div class="artists-header-wrapper">  
        <h2 class="artists-title">Artist</h2>
        <h3 class="artists-subtitle">Explore Your New Favorite Artists</h3>
      </div>

      <div class="artists-list-wrapper">
        <ul class="artists-list"></ul>
        <div id="artists-pagination" class="tui-pagination"></div>
      </div>
    </div>
    `)}function W(t){const e=v.querySelector(".artists-list");e.innerHTML=t.map(s=>`
      <li class="artist-card" data-id="${s._id}">
        <div class="artist-image-wrapper">
          <img class="artist-image"
            src="${s.strArtistThumb}"
            alt="${s.strArtist}"
            loading="lazy"
            width="343" height="432"
          />
        </div>  

        <div class="artist-content-wrapper">
          <ul class="genres-list">
            ${(s.genres??[]).map(o=>`<li class="genres-item">${o}</li>`).join("")}
          </ul>

          <div class="artist-title-wrapper">
            <h4 class="artist-name">${s.strArtist}</h4>
            <p class="artist-description">${s.strBiographyEN}</p>
          </div>
        </div>

        <button class="artist-button js-open-modal-artist" type="button" data-id="${s._id}">
          Learn More 
          <svg class="learn-more-icon" width="8" height="14">
            <use href="sprite.svg#learn-more"></use>
          </svg>
        </button>
      </li>
    `).join("")}async function B(t=1){U(),E("#artists");try{const e=await M.get("https://sound-wave.b.goit.study/api/artists",{params:{limit:w,page:t}}),{artists:s,totalArtists:o}=e.data;W(s);const i=v.querySelector("#artists-pagination");k||(k=new j(i,{totalItems:o,itemsPerPage:w,visiblePages:5,page:t,centerAlign:!0}),k.on("afterMove",r=>{L=r.page,B(L),v.scrollIntoView({behavior:"smooth",block:"start"})}));const a=Math.ceil(o/w);i.style.display=a<=1?"none":""}catch(e){console.error("Помилка завантаження артистів:",e)}finally{$("#artists")}}B(L);const _=document.querySelector(".artist_form_upper"),p=document.querySelector(".artist_form_albums");x("#artist-modal");const G=M.create({baseURL:"https://sound-wave.b.goit.study/api"});function V({strArtist:t,strArtistThumb:e,intFormedYear:s,intDiedYear:o,strGender:i,intMembers:a,strCountry:r,strBiographyEN:c,genres:l}){let n;s&&s!=="null"?o&&o!=="null"?n=`${s}–${o}`:n=`${s}–present`:n="Information missing";const y=` 
    <div class="artist-modal-header">
   
      <h2 class="artist-title">${t}</h2>
    </div>
    <div class="artist_form_upper_container">
      <!-- img -->
      <div class="artist-modal-img">
        <img class="artist_form_upper_img" src="${e}" alt="" width="654" height="402" />
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
              <span class="stats-value">${i}</span>
            </li>
            <li class="stats-item upper-grid-three">
              <span class="stats-label">Members</span>
              <span class="stats-value">${a}</span>
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
  `;_.insertAdjacentHTML("beforeend",y)}function z(t){_&&(_.innerHTML=""),p&&(p.innerHTML=""),E("#artist-modal"),fetch(`https://sound-wave.b.goit.study/api/artists/${t}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>V(e)).catch(e=>console.log("Error fetching artist data:",e)),K(t)}async function Q(t){try{return(await G.get(`/artists/${t}/albums`)).data}catch(e){throw console.error("Error fetching artist albums:",e),e}}async function K(t){try{const e=await Q(t);if(!e.albumsList||e.albumsList.length===0){p&&(p.innerHTML="<p>Альбомів не знайдено</p>");return}const s=i=>{const a=Math.floor(Number(i)/1e3),r=Math.floor(a/60),c=a%60;return`${r}:${c.toString().padStart(2,"0")}`},o=`
  <h2 class="albums-title">Albums</h2> 
  <div class="albums-list"> 
    ${e.albumsList.map(i=>`
      <div class="album-container">
        <h3 class="album-name">${i.strAlbum}</h3>
        <div class="tracks-list">
          <div class="tracks-header">
            <span class="track-span">Track</span>
            <span class="time-span">Time</span>
            <span class="link-span">Link</span>
          </div>

          ${i.tracks.map(a=>`
            <ul class="track-row">
              <li class="track-title">${a.strTrack}</li> 
              <li class="track-duration">${s(a.intDuration)}</li> 
              <li class="track-link">
                ${a.movie?`<a href="${a.movie}" target="_blank">
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
`;p&&(p.innerHTML=o)}catch(e){console.error("Error rendering artist albums:",e)}finally{$("#artist-modal")}}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".about-section");t.innerHTML=`
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

                <img src="about/team-desktop-1x.webp" alt="Team photo"
                    class="team-photo" loading="lazy" width="640" height="665">
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
    `});const X="/project-x/sprite.svg";window.jQuery=q;window.$=q;x(".feedback-section");const Y="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function J(){E(".feedback-section");try{const e=await(await fetch(Y)).json();return(Array.isArray(e.data)?e.data:[]).slice(0,10)}catch(t){return console.error("Error fetching feedbacks:",t),[]}finally{$(".feedback-section")}}const Z=document.querySelector(".feedback-root-container"),ee=`<h2 class="feedback-title-hidden">Feedbacks our visitors</h2>

  <div class="swiper feedbacks-swiper">
    <div class="swiper-wrapper" id="feedbacks-container">
    
    </div>
          <div class="swiper-button-prev" id="feedbacks-button-p">
       <svg class="icons-arrow">
        <use href="sprite.svg#arrow-left"></use>
        </svg>
      </div>

      <div class="swiper-button-next" id="feedbacks-button-n">
       <svg class="icons-arrow">
        <use href="sprite.svg#arrow-right"></use>
        </svg>
      </div>
 <div class="swiper-pagination"></div>
 </div>
 <button type="button" class="feedback-button" id="Leave-feedback">
          Leave feedback
         </button>

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
  `;Z.insertAdjacentHTML("afterbegin",ee);function te(t){const e=document.createElement("div");e.classList.add("swiper-slide","feedback-content");const s=Number(t.rating)||0,o=Math.round(s);let i="";for(let a=1;a<=5;a++){const r=a<=o?"star-filled":"star-empty";i+=`
<svg class="star-icon ${r}" width="18" height="18">
 <use href="sprite.svg#star"></use>
</svg>`}return e.innerHTML=`
<div class="star-rating">${i}</div>
<div class="feedback-text">${t.descr||""}</div>
<div class="feedback-author">${t.name||""}</div>
`,e}async function se(){const t=document.getElementById("feedbacks-container");(await J()).forEach(s=>{t.appendChild(te(s))}),new P(".feedbacks-swiper",{modules:[N,C],slidesPerView:1,spaceBetween:20,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},on:{init:function(){S(this)},slideChange:function(){S(this)}}})}function S(t){const e=document.querySelector(".swiper-button-prev"),s=document.querySelector(".swiper-button-next");e&&s&&(e.classList.toggle("disabled",t.isBeginning),s.classList.toggle("disabled",t.isEnd))}se();(()=>{const t=document.querySelector("#Leave-feedback"),e=document.querySelector(".feedback-modal-close"),s=document.querySelector(".feedback-modal-backdrop"),o=document.body;if(!t||!e||!s){console.log("not found");return}t.addEventListener("click",()=>{s.removeAttribute("hidden"),o.classList.add("no-scroll"),i()}),e.addEventListener("click",()=>{s.setAttribute("hidden",""),o.classList.remove("no-scroll")}),window.addEventListener("keydown",l=>{l.key==="Escape"&&!s.hasAttribute("hidden")&&(s.setAttribute("hidden",""),o.classList.remove("no-scroll"))}),s.addEventListener("click",l=>{l.target===s&&(s.setAttribute("hidden",""),o.classList.remove("no-scroll"))});function i(l=0){const n=document.querySelector(".feedback-modal-stars");if(!n)return;n.innerHTML="";for(let u=1;u<=5;u++)n.insertAdjacentHTML("beforeend",`<svg class="star-icon ${u<=l?"selected":""}" width="18" height="18">
         <use href="${X}#star"></use>
       </svg>`);const d=n.querySelectorAll(".star-icon");d.forEach((u,y)=>{u.addEventListener("click",()=>{d.forEach((b,H)=>{H<=y?b.classList.add("selected"):b.classList.remove("selected")})})})}const a=document.querySelector(".feedback-modal-form"),r=a.querySelector(".feedback-modal-input"),c=a.querySelector(".feedback-modal-textarea");a.addEventListener("submit",l=>{l.preventDefault();let n=!1;r.value.trim()?r.classList.remove("error"):(r.classList.add("error"),n=!0),c.value.trim()?c.classList.remove("error"):(c.classList.add("error"),n=!0),[r,c].forEach(d=>{d&&d.addEventListener("input",()=>{d.classList.remove("error")})}),n||a.submit()})})();const ae=document.querySelector(".footer__container");ae.innerHTML=`
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
`;const f=document.querySelector("#artist-modal"),g=document.body;document.addEventListener("click",t=>{const e=t.target.closest(".js-open-modal-artist");if(e){const s=e.dataset.id;z(s);const o=window.innerWidth-document.documentElement.clientWidth;o>0&&(g.style.paddingRight=`${o}px`),g.classList.add("no-scroll"),f.showModal();return}(t.target.closest("#close-modal-artist")||t.target===f)&&f.close()});f.addEventListener("close",()=>{g.classList.remove("no-scroll"),g.style.paddingRight=""});
//# sourceMappingURL=index.js.map
