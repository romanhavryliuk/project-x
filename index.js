import{a as M,P as H,S as P,N as j,b as N}from"./assets/vendor-C0vgnQQC.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const y=document.querySelector(".header");y.innerHTML=`
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

      </div>`;const I=document.querySelector(".burger-icon-btn"),C=document.querySelector(".close-icon-btn"),A=document.querySelector(".menu-modal"),D=document.querySelectorAll(".mobile-section-link");I.addEventListener("click",()=>{y.classList.add("menu-open"),A.classList.add("is-open"),document.body.style.overflow="hidden"});C.addEventListener("click",()=>{y.classList.remove("menu-open"),A.classList.remove("is-open"),document.body.style.overflow="auto"});D.forEach(t=>{t.addEventListener("click",()=>{y.classList.remove("menu-open"),A.classList.remove("is-open"),document.body.style.overflow="auto"})});const O=document.querySelector("#hero");O.innerHTML=`
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
`,v=new Map;function x(t){const e=document.querySelector(t);e&&(e.querySelector("[data-loader]")||e.insertAdjacentHTML("afterbegin",R))}function q(t){return document.querySelector(`${t} [data-loader]`)}function E(t){var s;const e=(v.get(t)??0)+1;v.set(t,e),(s=q(t))==null||s.classList.remove("is-hidden")}function $(t){var s;const e=(v.get(t)??0)-1;e<=0?(v.set(t,0),(s=q(t))==null||s.classList.add("is-hidden")):v.set(t,e)}const b=document.querySelector("#artists");x("#artists");const w=8;let L=1,k=null;function F(){b.querySelector(".artists-container")||b.insertAdjacentHTML("beforeend",`
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
    `)}function U(t){const e=b.querySelector(".artists-list");e.innerHTML=t.map(s=>`
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
    `).join("")}async function T(t=1){F(),E("#artists");try{const e=await M.get("https://sound-wave.b.goit.study/api/artists",{params:{limit:w,page:t}}),{artists:s,totalArtists:o}=e.data;U(s);const a=b.querySelector("#artists-pagination");k||(k=new H(a,{totalItems:o,itemsPerPage:w,visiblePages:5,page:t,centerAlign:!0}),k.on("afterMove",r=>{L=r.page,T(L),b.scrollIntoView({behavior:"smooth",block:"start"})}));const i=Math.ceil(o/w);a.style.display=i<=1?"none":""}catch(e){console.error("Помилка завантаження артистів:",e)}finally{$("#artists")}}T(L);const _=document.querySelector(".artist_form_upper"),m=document.querySelector(".artist_form_albums");x("#artist-modal");const W=M.create({baseURL:"https://sound-wave.b.goit.study/api"});function G({strArtist:t,strArtistThumb:e,intFormedYear:s,intDiedYear:o,strGender:a,intMembers:i,strCountry:r,strBiographyEN:l,genres:u}){let n;s&&s!=="null"?o&&o!=="null"?n=`${s}–${o}`:n=`${s}–present`:n="Information missing";const p=` 
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
            ${l}
          </p>
        </div>
        <ul class="genre-list">
        ${u.map(f=>`<li class="genre-item"><p class="genre-name">${f}</p></li>`).join("")}
        </ul>
</div>
    </div>
  `;_.insertAdjacentHTML("beforeend",p)}function V(t){_&&(_.innerHTML=""),m&&(m.innerHTML=""),E("#artist-modal"),fetch(`https://sound-wave.b.goit.study/api/artists/${t}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>G(e)).catch(e=>console.log("Error fetching artist data:",e)),K(t)}async function z(t){try{return(await W.get(`/artists/${t}/albums`)).data}catch(e){throw console.error("Error fetching artist albums:",e),e}}async function K(t){try{const e=await z(t);if(!e.albumsList||e.albumsList.length===0){m&&(m.innerHTML="<p>Альбомів не знайдено</p>");return}const s=a=>{const i=Math.floor(Number(a)/1e3),r=Math.floor(i/60),l=i%60;return`${r}:${l.toString().padStart(2,"0")}`},o=`
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
`;m&&(m.innerHTML=o)}catch(e){console.error("Error rendering artist albums:",e)}finally{$("#artist-modal")}}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".about-section");t.innerHTML=`
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
    `});x(".feedback-section");const X="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function Y(){E(".feedback-section");try{const e=await(await fetch(X)).json();return(Array.isArray(e.data)?e.data:[]).slice(0,10)}catch(t){return console.error("Error fetching feedbacks:",t),[]}finally{$(".feedback-section")}}const J=document.querySelector(".feedback-root-container"),Q=`<h2 class="feedback-title-hidden">Feedbacks our visitors</h2>

  <div class="swiper feedbacks-swiper">
    <div class="swiper-wrapper" id="feedbacks-container">
    
    </div>
          <div class="swiper-button-prev" id="feedbacks-button-p" aria-label="Previous feedback">
       <svg class="icons-arrow">
        <use href="sprite.svg#arrow-left"></use>
        </svg>
      </div>

      <div class="swiper-button-next" id="feedbacks-button-n" aria-label="Next feedback">
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
  `;J.innerHTML=Q;function Z(t){const e=document.createElement("div");e.classList.add("swiper-slide","feedback-content");const s=Number(t.rating)||0,o=Math.round(s);let a="";for(let i=1;i<=5;i++){const r=i<=o?"star-filled":"star-empty";a+=`
<svg class="star-icon ${r}" width="18" height="18">
 <use href="sprite.svg#star"></use>
</svg>`}return e.innerHTML=`
<div class="star-rating">${a}</div>
<div class="feedback-text">${t.descr||""}</div>
<div class="feedback-author">${t.name||""}</div>
`,e}async function ee(){const t=document.getElementById("feedbacks-container");(await Y()).forEach(s=>{t.appendChild(Z(s))}),new P(".feedbacks-swiper",{modules:[j,N],slidesPerView:1,spaceBetween:20,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},on:{init:function(){te(this)}}})}function te(t){const e=document.querySelector(".swiper-button-prev"),s=document.querySelector(".swiper-button-next");e&&s&&(e.classList.toggle("disabled",t.isBeginning),s.classList.toggle("disabled",t.isEnd))}ee();(()=>{const t=document.querySelector("#Leave-feedback"),e=document.querySelector(".feedback-modal-close"),s=document.querySelector(".feedback-modal-backdrop"),o=document.body;if(!t||!e||!s){console.log("not found");return}t.addEventListener("click",()=>{s.removeAttribute("hidden"),o.classList.add("no-scroll"),i()}),e.addEventListener("click",()=>{s.setAttribute("hidden",""),o.classList.remove("no-scroll")}),window.addEventListener("keydown",n=>{n.key==="Escape"&&!s.hasAttribute("hidden")&&(s.setAttribute("hidden",""),o.classList.remove("no-scroll"))}),s.addEventListener("click",n=>{n.target===s&&(s.setAttribute("hidden",""),o.classList.remove("no-scroll"))});let a=0;function i(n=0){const c=document.querySelector(".feedback-modal-stars");if(!c)return;c.innerHTML="";for(let p=1;p<=5;p++)c.insertAdjacentHTML("beforeend",`<svg class="star-icon ${p<=n?"selected":""}" width="18" height="18">
         <use href="sprite.svg#star"></use>
       </svg>`);const d=c.querySelectorAll(".star-icon");d.forEach((p,f)=>{p.addEventListener("click",()=>{a=f+1,d.forEach((S,B)=>{B<=f?S.classList.add("selected"):S.classList.remove("selected")})})})}const r=document.querySelector(".feedback-modal-form"),l=r.querySelector(".feedback-modal-input"),u=r.querySelector(".feedback-modal-textarea");r.addEventListener("submit",async n=>{n.preventDefault();let c=!1;if(l.value.trim()?l.classList.remove("error"):(l.classList.add("error"),c=!0),u.value.trim()?u.classList.remove("error"):(u.classList.add("error"),c=!0),[l,u].forEach(d=>{d&&d.addEventListener("input",()=>{d.classList.remove("error")})}),!c){const d={name:l.value.trim(),descr:u.value.trim(),rating:a};console.log("Form submitted with data:",d)}})})();const se=document.querySelector(".footer__container");se.innerHTML=`
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
`;const g=document.querySelector("#artist-modal"),h=document.body;document.addEventListener("click",t=>{const e=t.target.closest(".js-open-modal-artist");if(e){const s=e.dataset.id;V(s);const o=window.innerWidth-document.documentElement.clientWidth;o>0&&(h.style.paddingRight=`${o}px`),h.classList.add("no-scroll"),g.showModal();return}(t.target.closest("#close-modal-artist")||t.target===g)&&g.close()});g.addEventListener("close",()=>{h.classList.remove("no-scroll"),h.style.paddingRight=""});
//# sourceMappingURL=index.js.map
