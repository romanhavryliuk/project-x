const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-CRHjQmv7.js","assets/vendor-D-uazN9P.css"])))=>i.map(i=>d[i]);
import{a as T,P as B}from"./assets/vendor-CRHjQmv7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const g=document.querySelector(".header");g.innerHTML=`
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

      </div>`;const j=document.querySelector(".burger-icon-btn"),O=document.querySelector(".close-icon-btn"),A=document.querySelector(".menu-modal"),R=document.querySelectorAll(".mobile-section-link");j.addEventListener("click",()=>{g.classList.add("menu-open"),A.classList.add("is-open"),document.body.style.overflow="hidden"});O.addEventListener("click",()=>{g.classList.remove("menu-open"),A.classList.remove("is-open"),document.body.style.overflow="auto"});R.forEach(t=>{t.addEventListener("click",()=>{g.classList.remove("menu-open"),A.classList.remove("is-open"),document.body.style.overflow="auto"})});const C=document.querySelector("#hero");C.innerHTML=`
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
`;document.getElementById("hero_explore").addEventListener("click",function(){const t=document.getElementById("artists");t&&t.scrollIntoView({behavior:"smooth",block:"start"})});const D=`<div class="loader-backdrop is-hidden" data-loader>
  <div class="flower-spinner">
    <div class="dots-container">
      <div class="bigger-dot">
        <div class="smaller-dot"></div>
      </div>
    </div>
  </div>
</div>
`,m=new Map;function E(t){const e=document.querySelector(t);e&&(e.querySelector("[data-loader]")||e.insertAdjacentHTML("afterbegin",D))}function q(t){return document.querySelector(`${t} [data-loader]`)}function x(t){var s;const e=(m.get(t)??0)+1;m.set(t,e),(s=q(t))==null||s.classList.remove("is-hidden")}function $(t){var s;const e=(m.get(t)??0)-1;e<=0?(m.set(t,0),(s=q(t))==null||s.classList.add("is-hidden")):m.set(t,e)}const v=document.querySelector("#artists");E("#artists");const y=8;let k=1,_=null;function N(){v.querySelector(".artists-container")||v.insertAdjacentHTML("beforeend",`
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
    `)}function U(t){const e=v.querySelector(".artists-list");e.innerHTML=t.map(s=>`
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
            ${(s.genres??[]).map(n=>`<li class="genres-item">${n}</li>`).join("")}
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
    `).join("")}async function H(t=1){N(),x("#artists");try{const e=await T.get("https://sound-wave.b.goit.study/api/artists",{params:{limit:y,page:t}}),{artists:s,totalArtists:n}=e.data;U(s);const i=v.querySelector("#artists-pagination");_||(_=new B(i,{totalItems:n,itemsPerPage:y,visiblePages:5,page:t,centerAlign:!0}),_.on("afterMove",o=>{k=o.page,H(k),v.scrollIntoView({behavior:"smooth",block:"start"})}));const a=Math.ceil(n/y);i.style.display=a<=1?"none":""}catch(e){console.error("Помилка завантаження артистів:",e)}finally{$("#artists")}}H(k);const L=document.querySelector(".artist_form_upper"),u=document.querySelector(".artist_form_albums");E("#artist-modal");const V=T.create({baseURL:"https://sound-wave.b.goit.study/api"});function F({strArtist:t,strArtistThumb:e,intFormedYear:s,intDiedYear:n,strGender:i,intMembers:a,strCountry:o,strBiographyEN:r,genres:l}){let c;s&&s!=="null"?n&&n!=="null"?c=`${s}–${n}`:c=`${s}–present`:c="Information missing";const b=` 
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
              <span class="stats-value">${c}</span>
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
              <span class="stats-value">${o}</span>
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
        ${l.map(w=>`<li class="genre-item"><p class="genre-name">${w}</p></li>`).join("")}
        </ul>
</div>
    </div>
  `;L.insertAdjacentHTML("beforeend",b)}function W(t){L&&(L.innerHTML=""),u&&(u.innerHTML=""),x("#artist-modal"),fetch(`https://sound-wave.b.goit.study/api/artists/${t}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>F(e)).catch(e=>console.log("Error fetching artist data:",e)),z(t)}async function G(t){try{return(await V.get(`/artists/${t}/albums`)).data}catch(e){throw console.error("Error fetching artist albums:",e),e}}async function z(t){try{const e=await G(t);if(!e.albumsList||e.albumsList.length===0){u&&(u.innerHTML="<p>Альбомів не знайдено</p>");return}const s=i=>{const a=Math.floor(Number(i)/1e3),o=Math.floor(a/60),r=a%60;return`${o}:${r.toString().padStart(2,"0")}`},n=`
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
`;u&&(u.innerHTML=n)}catch(e){console.error("Error rendering artist albums:",e)}finally{$("#artist-modal")}}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".about-section");t.innerHTML=`
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
    `});const K="modulepreload",X=function(t){return"/project-x/"+t},M={},p=function(e,s,n){let i=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),r=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(s.map(l=>{if(l=X(l),l in M)return;M[l]=!0;const c=l.endsWith(".css"),S=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${S}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":K,c||(d.as="script"),d.crossOrigin="",d.href=l,r&&d.setAttribute("nonce",r),document.head.appendChild(d),c)return new Promise((b,w)=>{d.addEventListener("load",b),d.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(o){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o}return i.then(o=>{for(const r of o||[])r.status==="rejected"&&a(r.reason);return e().catch(a)})};E(".feedback-section");const Y="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function J(){x(".feedback-section");try{const e=await(await fetch(Y)).json();return(Array.isArray(e.data)?e.data:[]).slice(0,10)}catch(t){return console.error("Error fetching feedbacks:",t),[]}finally{$(".feedback-section")}}const Q=document.querySelector(".feedback-root-container"),Z=`<h2 class="feedback-title-hidden">Feedbacks our visitors</h2>

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
  `;Q.innerHTML=Z;function ee(t){const e=document.createElement("div");e.classList.add("swiper-slide","feedback-content");const s=Number(t.rating)||0,n=Math.round(s);let i="";for(let a=1;a<=5;a++){const o=a<=n?"star-filled":"star-empty";i+=`
<svg class="star-icon ${o}" width="18" height="18">
 <use href="sprite.svg#star"></use>
</svg>`}return e.innerHTML=`
<div class="star-rating">${i}</div>
<div class="feedback-text">${t.descr||""}</div>
<div class="feedback-author">${t.name||""}</div>
`,e}async function I(){const t=document.getElementById("feedbacks-container"),e=await J(),s=document.createDocumentFragment();e.forEach(r=>{s.appendChild(ee(r))}),t.appendChild(s);const[{default:n},i]=await Promise.all([p(()=>import("./assets/vendor-CRHjQmv7.js").then(r=>r.s),__vite__mapDeps([0,1])),p(()=>import("./assets/vendor-CRHjQmv7.js").then(r=>r.i),__vite__mapDeps([0,1]))]);await Promise.all([p(()=>import("./assets/vendor-CRHjQmv7.js").then(r=>r.b),__vite__mapDeps([0,1])),p(()=>import("./assets/vendor-CRHjQmv7.js").then(r=>r.n),__vite__mapDeps([0,1])),p(()=>import("./assets/vendor-CRHjQmv7.js").then(r=>r.p),__vite__mapDeps([0,1]))]);const{Navigation:a,Pagination:o}=i;new n(".feedbacks-swiper",{modules:[a,o],slidesPerView:1,spaceBetween:20,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0}})}const te={root:null,rootMargin:"0px",threshold:.1},se=new IntersectionObserver((t,e)=>{t.forEach(s=>{s.isIntersecting&&(I(),e.unobserve(s.target))})},te),P=document.querySelector(".feedback-section");P?se.observe(P):I();const ie=document.querySelector(".footer__container");ie.innerHTML=`
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
`;const h=document.querySelector("#artist-modal"),f=document.body;document.addEventListener("click",t=>{const e=t.target.closest(".js-open-modal-artist");if(e){const s=e.dataset.id;W(s);const n=window.innerWidth-document.documentElement.clientWidth;n>0&&(f.style.paddingRight=`${n}px`),f.classList.add("no-scroll"),h.showModal();return}(t.target.closest("#close-modal-artist")||t.target===h)&&h.close()});h.addEventListener("close",()=>{f.classList.remove("no-scroll"),f.style.paddingRight=""});
//# sourceMappingURL=index.js.map
