import{a as $,P as H,S as B,N as j,b as P}from"./assets/vendor-C0vgnQQC.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const v=document.querySelector(".header");v.innerHTML=`
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

      </div>`;const N=document.querySelector(".burger-icon-btn"),I=document.querySelector(".close-icon-btn"),w=document.querySelector(".menu-modal"),C=document.querySelectorAll(".mobile-section-link");N.addEventListener("click",()=>{v.classList.add("menu-open"),w.classList.add("is-open"),document.body.style.overflow="hidden"});I.addEventListener("click",()=>{v.classList.remove("menu-open"),w.classList.remove("is-open"),document.body.style.overflow="auto"});C.forEach(t=>{t.addEventListener("click",()=>{v.classList.remove("menu-open"),w.classList.remove("is-open"),document.body.style.overflow="auto"})});const O=document.querySelector("#hero");O.innerHTML=`
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
`;document.getElementById("hero_explore").addEventListener("click",function(){const t=document.getElementById("artists");t&&t.scrollIntoView({behavior:"smooth",block:"start"})});const R=`<div class="loader-backdrop is-hidden" data-loader>
  <div class="flower-spinner">
    <div class="dots-container">
      <div class="bigger-dot">
        <div class="smaller-dot"></div>
      </div>
    </div>
  </div>
</div>
`,l=new Map;function k(t){const e=document.querySelector(t);e&&(e.querySelector("[data-loader]")||e.insertAdjacentHTML("afterbegin",R))}function S(t){return document.querySelector(`${t} [data-loader]`)}function _(t){var s;const e=(l.get(t)??0)+1;l.set(t,e),(s=S(t))==null||s.classList.remove("is-hidden")}function L(t){var s;const e=(l.get(t)??0)-1;e<=0?(l.set(t,0),(s=S(t))==null||s.classList.add("is-hidden")):l.set(t,e)}const d=document.querySelector("#artists");k("#artists");const f=8;let h=1,g=null;function D(){d.querySelector(".artists-container")||d.insertAdjacentHTML("beforeend",`
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
    `)}"scrollRestoration"in history&&(history.scrollRestoration="manual");function F(t){const e=d.querySelector(".artists-list");e.innerHTML=t.map(s=>`
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
    `).join("")}async function E(t=1){D(),_("#artists");try{const e=await $.get("https://sound-wave.b.goit.study/api/artists",{params:{limit:f,page:t}}),{artists:s,totalArtists:o}=e.data;F(s);const a=d.querySelector("#artists-pagination");g||(g=new H(a,{totalItems:o,itemsPerPage:f,visiblePages:5,page:t,centerAlign:!0}),g.on("afterMove",r=>{h=r.page,E(h),d.scrollIntoView({behavior:"smooth",block:"start"})}));const i=Math.ceil(o/f);a.style.display=i<=1?"none":""}catch(e){console.error("Помилка завантаження артистів:",e)}finally{L("#artists")}}E(h);const y=document.querySelector(".artist_form_upper"),n=document.querySelector(".artist_form_albums");k("#artist-modal");const U=$.create({baseURL:"https://sound-wave.b.goit.study/api"});function V({strArtist:t,strArtistThumb:e,intFormedYear:s,intDiedYear:o,strGender:a,intMembers:i,strCountry:r,strBiographyEN:c,genres:M}){let u;s&&s!=="null"?o&&o!=="null"?u=`${s}–${o}`:u=`${s}–present`:u="Information missing";const q=` 
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
              <span class="stats-value">${u}</span>
            </li>
            <li class="stats-item upper-grid-two">
              <span class="stats-label">Sex</span>
              <span class="stats-value">${a}</span>
            </li>
            <li class="stats-item upper-grid-three">
              <span class="stats-label">Members</span>
              <span class="stats-value">${i}</span>
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
        ${M.map(T=>`<li class="genre-item"><p class="genre-name">${T}</p></li>`).join("")}
        </ul>
</div>
    </div>
  `;y.insertAdjacentHTML("beforeend",q)}function W(t){y&&(y.innerHTML=""),n&&(n.innerHTML=""),_("#artist-modal"),fetch(`https://sound-wave.b.goit.study/api/artists/${t}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>V(e)).catch(e=>console.log("Error fetching artist data:",e)),G(t)}async function z(t){try{return(await U.get(`/artists/${t}/albums`)).data}catch(e){throw console.error("Error fetching artist albums:",e),e}}async function G(t){try{const e=await z(t);if(!e.albumsList||e.albumsList.length===0){n&&(n.innerHTML="<p>Альбомів не знайдено</p>");return}const s=a=>{const i=Math.floor(Number(a)/1e3),r=Math.floor(i/60),c=i%60;return`${r}:${c.toString().padStart(2,"0")}`},o=`
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

          ${a.tracks.map(i=>`
            <ul class="track-row">
              <li class="track-title">${i.strTrack}</li> 
              <li class="track-duration">${s(i.intDuration)}</li> 
              <li class="track-link">
                ${i.movie?`<a href="${i.movie}" target="_blank">
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
`;n&&(n.innerHTML=o)}catch(e){console.error("Error rendering artist albums:",e)}finally{L("#artist-modal")}}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".about-section");t.innerHTML=`
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
    `});const p="/project-x/sprite.svg",K="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1",x=document.querySelector(".feedback-root-container"),X=()=>{x&&(x.innerHTML=`
    <h2 class="feedback-title-hidden">Feedbacks our visitors</h2>
    <div class="swiper feedbacks-swiper">
      <div class="swiper-wrapper" id="feedbacks-container"></div>
      
      <div class="swiper-button-prev" id="feedbacks-button-p">
        <svg class="icons-arrow"><use href="${p}#arrow-left"></use></svg>
      </div>

      <div class="swiper-button-next" id="feedbacks-button-n">
        <svg class="icons-arrow"><use href="${p}#arrow-right"></use></svg>
      </div>
      
      <div class="swiper-pagination"></div>
    </div>

    <button type="button" class="feedback-button" id="Leave-feedback">Leave feedback</button>

    <div class="feedback-modal-backdrop" hidden>
      <div class="feedback-modal">
        <button class="feedback-modal-close"></button>
        <h2 class="feedback-modal-title">Submit feedback</h2>
        <form class="feedback-modal-form">
          <label>Name
            <input type="text" class="feedback-modal-input" placeholder="Emily">
          </label>
          <label>Message
            <textarea name="message" class="feedback-modal-textarea" placeholder="Type your message..."></textarea>
          </label>
          <div class="feedback-modal-stars"></div>
          <button type="submit" class="feedback-modal-button" id="submit-button">Submit</button>
        </form>
      </div>
    </div>
  `)};async function Y(){try{const e=await(await fetch(K)).json();return Array.isArray(e.data)?e.data.slice(0,10):[]}catch(t){return console.error("Error fetching feedbacks:",t),[]}}function J(t){const e=Math.round(Number(t)||0);return Array.from({length:5},(s,o)=>`
    <svg class="star-icon ${o<e?"star-filled":"star-empty"}" width="18" height="18">
      <use href="${p}#star"></use>
    </svg>
  `).join("")}async function Q(){X(),k(".feedback-root-container");const t=document.getElementById("feedbacks-container");try{_(".feedback-root-container");const e=await Y();if(!e.length){t.innerHTML='<div class="swiper-slide">No feedbacks yet.</div>';return}t.innerHTML=e.map(s=>`
      <div class="swiper-slide feedback-content">
        <div class="star-rating">${J(s.rating)}</div>
        <div class="feedback-text">${s.descr||""}</div>
        <div class="feedback-author">${s.name||""}</div>
      </div>
    `).join(""),new B(".feedbacks-swiper",{modules:[j,P],slidesPerView:1,spaceBetween:20,observer:!0,observeParents:!0,resizeObserver:!0,navigation:{nextEl:"#feedbacks-button-n",prevEl:"#feedbacks-button-p"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:1},1440:{slidesPerView:1}},on:{init:function(){A(this)},slideChange:function(){A(this)}}})}catch(e){console.error("Critical error in feedback module:",e),t.innerHTML='<div class="error-message">Something went wrong.</div>'}finally{L(".feedback-root-container")}}function A(t){const e=document.querySelector("#feedbacks-button-p"),s=document.querySelector("#feedbacks-button-n");e&&s&&(e.classList.toggle("disabled",t.isBeginning),s.classList.toggle("disabled",t.isEnd))}(()=>{document.addEventListener("click",e=>{const s=document.querySelector(".feedback-modal-backdrop");s&&(e.target.closest("#Leave-feedback")&&(s.removeAttribute("hidden"),document.body.classList.add("no-scroll"),t()),(e.target.closest(".feedback-modal-close")||e.target===s)&&(s.setAttribute("hidden",""),document.body.classList.remove("no-scroll")))});function t(e=0){const s=document.querySelector(".feedback-modal-stars");s&&(s.innerHTML=Array.from({length:5},(o,a)=>`
      <svg class="star-icon ${a<e?"selected":""}" width="18" height="18" data-index="${a+1}">
        <use href="${p}#star"></use>
      </svg>
    `).join(""),s.addEventListener("click",o=>{const a=o.target.closest(".star-icon");if(!a)return;const i=parseInt(a.dataset.index);s.querySelectorAll(".star-icon").forEach((r,c)=>{r.classList.toggle("selected",c<i)})}))}document.addEventListener("submit",e=>{if(e.target.classList.contains("feedback-modal-form")){e.preventDefault();const s=e.target,o=s.querySelector(".feedback-modal-input"),a=s.querySelector(".feedback-modal-textarea");let i=!1;[o,a].forEach(r=>{r.value.trim()?r.classList.remove("error"):(r.classList.add("error"),i=!0),r.oninput=()=>r.classList.remove("error")}),i||(console.log("Form submitted!"),s.reset(),document.querySelector(".feedback-modal-backdrop").setAttribute("hidden",""))}})})();Q();const Z=document.querySelector(".footer__container");Z.innerHTML=`
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
`;const m=document.querySelector("#artist-modal"),b=document.body;document.addEventListener("click",t=>{const e=t.target.closest(".js-open-modal-artist");if(e){const s=e.dataset.id;W(s);const o=window.innerWidth-document.documentElement.clientWidth;o>0&&(b.style.paddingRight=`${o}px`),b.classList.add("no-scroll"),m.showModal();return}(t.target.closest("#close-modal-artist")||t.target===m)&&m.close()});m.addEventListener("close",()=>{b.classList.remove("no-scroll"),b.style.paddingRight=""});
//# sourceMappingURL=index.js.map
