const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-CRHjQmv7.js","assets/vendor-D-uazN9P.css"])))=>i.map(i=>d[i]);
import{a as P,P as O}from"./assets/vendor-CRHjQmv7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const w=document.querySelector(".header");w.innerHTML=`
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

      </div>`;const R=document.querySelector(".burger-icon-btn"),C=document.querySelector(".close-icon-btn"),A=document.querySelector(".menu-modal"),D=document.querySelectorAll(".mobile-section-link");R.addEventListener("click",()=>{w.classList.add("menu-open"),A.classList.add("is-open"),document.body.style.overflow="hidden"});C.addEventListener("click",()=>{w.classList.remove("menu-open"),A.classList.remove("is-open"),document.body.style.overflow="auto"});D.forEach(t=>{t.addEventListener("click",()=>{w.classList.remove("menu-open"),A.classList.remove("is-open"),document.body.style.overflow="auto"})});const N=document.querySelector("#hero");N.innerHTML=`
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
`;document.getElementById("hero_explore").addEventListener("click",function(){const t=document.getElementById("artists");t&&t.scrollIntoView({behavior:"smooth",block:"start"})});const U=`<div class="loader-backdrop is-hidden" data-loader>
  <div class="flower-spinner">
    <div class="dots-container">
      <div class="bigger-dot">
        <div class="smaller-dot"></div>
      </div>
    </div>
  </div>
</div>
`,b=new Map;function x(t){const e=document.querySelector(t);e&&(e.querySelector("[data-loader]")||e.insertAdjacentHTML("afterbegin",U))}function H(t){return document.querySelector(`${t} [data-loader]`)}function S(t){var s;const e=(b.get(t)??0)+1;b.set(t,e),(s=H(t))==null||s.classList.remove("is-hidden")}function $(t){var s;const e=(b.get(t)??0)-1;e<=0?(b.set(t,0),(s=H(t))==null||s.classList.add("is-hidden")):b.set(t,e)}const h=document.querySelector("#artists");x("#artists");const k=8;let L=1,_=null;function V(){h.querySelector(".artists-container")||h.insertAdjacentHTML("beforeend",`
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
    `)}function W(t){const e=h.querySelector(".artists-list");e.innerHTML=t.map(s=>`
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
    `).join("")}async function B(t=1){V(),S("#artists");try{const e=await P.get("https://sound-wave.b.goit.study/api/artists",{params:{limit:k,page:t}}),{artists:s,totalArtists:n}=e.data;W(s);const a=h.querySelector("#artists-pagination");_||(_=new O(a,{totalItems:n,itemsPerPage:k,visiblePages:5,page:t,centerAlign:!0}),_.on("afterMove",i=>{L=i.page,B(L),h.scrollIntoView({behavior:"smooth",block:"start"})}));const o=Math.ceil(n/k);a.style.display=o<=1?"none":""}catch(e){console.error("Помилка завантаження артистів:",e)}finally{$("#artists")}}B(L);const E=document.querySelector(".artist_form_upper"),v=document.querySelector(".artist_form_albums");x("#artist-modal");const F=P.create({baseURL:"https://sound-wave.b.goit.study/api"});function G({strArtist:t,strArtistThumb:e,intFormedYear:s,intDiedYear:n,strGender:a,intMembers:o,strCountry:i,strBiographyEN:r,genres:d}){let l;s&&s!=="null"?n&&n!=="null"?l=`${s}–${n}`:l=`${s}–present`:l="Information missing";const p=` 
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
              <span class="stats-value">${l}</span>
            </li>
            <li class="stats-item upper-grid-two">
              <span class="stats-label">Sex</span>
              <span class="stats-value">${a}</span>
            </li>
            <li class="stats-item upper-grid-three">
              <span class="stats-label">Members</span>
              <span class="stats-value">${o}</span>
            </li>
            <li class="stats-item upper-grid-four">
              <span class="stats-label">Country</span>
              <span class="stats-value">${i}</span>
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
        ${d.map(m=>`<li class="genre-item"><p class="genre-name">${m}</p></li>`).join("")}
        </ul>
</div>
    </div>
  `;E.insertAdjacentHTML("beforeend",p)}function z(t){E&&(E.innerHTML=""),v&&(v.innerHTML=""),S("#artist-modal"),fetch(`https://sound-wave.b.goit.study/api/artists/${t}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>G(e)).catch(e=>console.log("Error fetching artist data:",e)),X(t)}async function K(t){try{return(await F.get(`/artists/${t}/albums`)).data}catch(e){throw console.error("Error fetching artist albums:",e),e}}async function X(t){try{const e=await K(t);if(!e.albumsList||e.albumsList.length===0){v&&(v.innerHTML="<p>Альбомів не знайдено</p>");return}const s=a=>{const o=Math.floor(Number(a)/1e3),i=Math.floor(o/60),r=o%60;return`${i}:${r.toString().padStart(2,"0")}`},n=`
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

          ${a.tracks.map(o=>`
            <ul class="track-row">
              <li class="track-title">${o.strTrack}</li> 
              <li class="track-duration">${s(o.intDuration)}</li> 
              <li class="track-link">
                ${o.movie?`<a href="${o.movie}" target="_blank">
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
`;v&&(v.innerHTML=n)}catch(e){console.error("Error rendering artist albums:",e)}finally{$("#artist-modal")}}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".about-section");t.innerHTML=`
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
    `});const Y="modulepreload",J=function(t){return"/project-x/"+t},q={},f=function(e,s,n){let a=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),r=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.allSettled(s.map(d=>{if(d=J(d),d in q)return;q[d]=!0;const l=d.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${u}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Y,l||(c.as="script"),c.crossOrigin="",c.href=d,r&&c.setAttribute("nonce",r),document.head.appendChild(c),l)return new Promise((p,m)=>{c.addEventListener("load",p),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(i){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i}return a.then(i=>{for(const r of i||[])r.status==="rejected"&&o(r.reason);return e().catch(o)})};x(".feedback-section");const Q="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function Z(){S(".feedback-section");try{const e=await(await fetch(Q)).json();return(Array.isArray(e.data)?e.data:[]).slice(0,10)}catch(t){return console.error("Error fetching feedbacks:",t),[]}finally{$(".feedback-section")}}const ee=document.querySelector(".feedback-root-container"),te=`<h2 class="feedback-title-hidden">Feedbacks our visitors</h2>

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
  `;ee.innerHTML=te;function se(t){const e=document.createElement("div");e.classList.add("swiper-slide","feedback-content");const s=Number(t.rating)||0,n=Math.round(s);let a="";for(let o=1;o<=5;o++){const i=o<=n?"star-filled":"star-empty";a+=`
<svg class="star-icon ${i}" width="18" height="18">
 <use href="sprite.svg#star"></use>
</svg>`}return e.innerHTML=`
<div class="star-rating">${a}</div>
<div class="feedback-text">${t.descr||""}</div>
<div class="feedback-author">${t.name||""}</div>
`,e}async function I(){const t=document.getElementById("feedbacks-container"),e=await Z(),s=document.createDocumentFragment();e.forEach(r=>{s.appendChild(se(r))}),t.appendChild(s);const[{default:n},a]=await Promise.all([f(()=>import("./assets/vendor-CRHjQmv7.js").then(r=>r.s),__vite__mapDeps([0,1])),f(()=>import("./assets/vendor-CRHjQmv7.js").then(r=>r.i),__vite__mapDeps([0,1]))]);await Promise.all([f(()=>import("./assets/vendor-CRHjQmv7.js").then(r=>r.b),__vite__mapDeps([0,1])),f(()=>import("./assets/vendor-CRHjQmv7.js").then(r=>r.n),__vite__mapDeps([0,1])),f(()=>import("./assets/vendor-CRHjQmv7.js").then(r=>r.p),__vite__mapDeps([0,1]))]);const{Navigation:o,Pagination:i}=a;new n(".feedbacks-swiper",{modules:[o,i],slidesPerView:1,spaceBetween:20,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0}})}const ae={root:null,rootMargin:"0px",threshold:.1},oe=new IntersectionObserver((t,e)=>{t.forEach(s=>{s.isIntersecting&&(I(),e.unobserve(s.target))})},ae),T=document.querySelector(".feedback-section");T?oe.observe(T):I();(()=>{const t=document.querySelector("#Leave-feedback"),e=document.querySelector(".feedback-modal-close"),s=document.querySelector(".feedback-modal-backdrop"),n=document.body;if(!t||!e||!s){console.log("not found");return}t.addEventListener("click",()=>{s.removeAttribute("hidden");const l=window.innerWidth-document.documentElement.clientWidth;l>0&&(n.style.paddingRight=`${l}px`),n.classList.add("no-scroll"),o()});const a=()=>{s.setAttribute("hidden",""),n.classList.remove("no-scroll"),n.style.paddingRight=""};e.addEventListener("click",a),window.addEventListener("keydown",l=>{l.key==="Escape"&&!s.hasAttribute("hidden")&&a()}),s.addEventListener("click",l=>{l.target===s&&a()});function o(l=0){const u=document.querySelector(".feedback-modal-stars");if(!u)return;u.innerHTML="";for(let p=1;p<=5;p++){const m=p<=l?"star-filled":"star-empty";u.insertAdjacentHTML("beforeend",`<svg class="star-icon ${m}" width="18" height="18">
 <use href="sprite.svg#star"></use>
</svg>`)}const c=u.querySelectorAll(".star-icon");c.forEach((p,m)=>{p.addEventListener("click",()=>{c.forEach((M,j)=>{j<=m?M.classList.add("selected"):M.classList.remove("selected")})})})}const i=document.querySelector(".feedback-modal-form"),r=i.querySelector(".feedback-modal-input"),d=i.querySelector(".feedback-modal-textarea");i.addEventListener("submit",l=>{l.preventDefault();let u=!1;r.value.trim()?r.classList.remove("error"):(r.classList.add("error"),u=!0),d.value.trim()?d.classList.remove("error"):(d.classList.add("error"),u=!0),[r,d].forEach(c=>{c&&c.addEventListener("input",()=>{c.classList.remove("error")})}),u||i.submit()})})();const ie=document.querySelector(".footer__container");ie.innerHTML=`
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
`;const g=document.querySelector("#artist-modal"),y=document.body;document.addEventListener("click",t=>{const e=t.target.closest(".js-open-modal-artist");if(e){const s=e.dataset.id;z(s);const n=window.innerWidth-document.documentElement.clientWidth;n>0&&(y.style.paddingRight=`${n}px`),y.classList.add("no-scroll"),g.showModal();return}(t.target.closest("#close-modal-artist")||t.target===g)&&g.close()});g.addEventListener("close",()=>{y.classList.remove("no-scroll"),y.style.paddingRight=""});
//# sourceMappingURL=index.js.map
