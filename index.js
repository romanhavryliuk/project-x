import{a as T,P as D,S as O,N as G,b as U}from"./assets/vendor-C0vgnQQC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const E=document.querySelector(".header");E.innerHTML=`
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

      </div>`;const W=document.querySelector(".burger-icon-btn"),V=document.querySelector(".close-icon-btn"),B=document.querySelector(".menu-modal"),z=document.querySelectorAll(".mobile-section-link");W.addEventListener("click",()=>{E.classList.add("menu-open"),B.classList.add("is-open"),document.body.style.overflow="hidden"});V.addEventListener("click",()=>{E.classList.remove("menu-open"),B.classList.remove("is-open"),document.body.style.overflow="auto"});z.forEach(e=>{e.addEventListener("click",()=>{E.classList.remove("menu-open"),B.classList.remove("is-open"),document.body.style.overflow="auto"})});const Z=document.querySelector("#hero");Z.innerHTML=`
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
`;document.getElementById("hero_explore").addEventListener("click",function(){const e=document.getElementById("artists");e&&e.scrollIntoView({behavior:"smooth",block:"start"})});const K=`<div class="loader-backdrop is-hidden" data-loader>
  <div class="flower-spinner">
    <div class="dots-container">
      <div class="bigger-dot">
        <div class="smaller-dot"></div>
      </div>
    </div>
  </div>
</div>
`,y=new Map;function H(e){const t=document.querySelector(e);t&&(t.querySelector("[data-loader]")||t.insertAdjacentHTML("afterbegin",K))}function N(e){return document.querySelector(`${e} [data-loader]`)}function P(e){var s;const t=(y.get(e)??0)+1;y.set(e,t),(s=N(e))==null||s.classList.remove("is-hidden")}function j(e){var s;const t=(y.get(e)??0)-1;t<=0?(y.set(e,0),(s=N(e))==null||s.classList.add("is-hidden")):y.set(e,t)}const h="/project-x/sprite.svg",I="https://sound-wave.b.goit.study/api",l=document.querySelector("#artists");H("#artists");const q=8;let f=1,g=null,_="",S="",A="";function Q(){l.querySelector(".artists-container")||(l.insertAdjacentHTML("beforeend",`
  <div class="container artists-container">
    <div class="artists-header-wrapper">
      <h2 class="artists-title">Artists</h2>
      <h3 class="artists-subtitle">Explore Your New Favorite Artists</h3>
    </div>

    <div class="artists-filters-section">
      <div class="artists-filters-head">
        <p class="artists-filters-label">Filters</p>
        <button class="artists-reset-btn" type="button">Reset</button>
      </div>

      <div class="artists-filters-control">
        <button
          class="artists-filters-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="artists-filters-panel"
        >
          Search and Filters
          <svg class="artists-filters-chevron" width="16" height="16">
            <use href="${h}#chevron-down"></use>
          </svg>
        </button>

        <div class="artists-filters" id="artists-filters-panel">
          <div class="artists-search-wrapper">
            <input
              type="text"
              class="artists-search-input"
              placeholder="Search"
              aria-label="Search artists"
            />
            <button class="artists-search-btn" type="button" aria-label="Search">
              <svg width="20" height="20">
                <use href="${h}#search"></use>
              </svg>
            </button>
          </div>

          <div class="artists-dropdown" data-dropdown="sort">
            <button
              class="artists-dropdown-btn"
              type="button"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <span class="artists-dropdown-label">Sorting</span>
              <svg class="artists-dropdown-chevron" width="16" height="16">
                <use href="${h}#chevron-down"></use>
              </svg>
            </button>
            <ul class="artists-dropdown-list" role="listbox" hidden>
              <li class="artists-dropdown-item" data-value="" role="option">Default</li>
              <li class="artists-dropdown-item" data-value="name_asc" role="option">A-Z</li>
              <li class="artists-dropdown-item" data-value="name_desc" role="option">Z-A</li>
            </ul>
          </div>

          <div class="artists-dropdown" data-dropdown="genre">
            <button
              class="artists-dropdown-btn"
              type="button"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <span class="artists-dropdown-label">Genre</span>
              <svg class="artists-dropdown-chevron" width="16" height="16">
                <use href="${h}#chevron-down"></use>
              </svg>
            </button>
            <ul class="artists-dropdown-list" role="listbox" hidden></ul>
          </div>
        </div>
      </div>
    </div>

    <div class="artists-list-wrapper">
      <ul class="artists-list"></ul>
      <div id="artists-pagination" class="tui-pagination"></div>
    </div>
  </div>
  `),Y())}async function X(){try{const{data:e}=await T.get(`${I}/genres`),t=Array.isArray(e)?e:e.genres??[],s=l.querySelector('[data-dropdown="genre"] .artists-dropdown-list');if(!s)return;s.innerHTML='<li class="artists-dropdown-item" data-value="" role="option">All Genres</li>'+t.map(r=>`<li class="artists-dropdown-item" data-value="${r.genre}" role="option">${r.genre}</li>`).join("")}catch(e){console.error("Failed to fetch genres:",e)}}function k(){l.querySelectorAll(".artists-dropdown").forEach(e=>{e.querySelector(".artists-dropdown-list").hidden=!0,e.querySelector(".artists-dropdown-btn").setAttribute("aria-expanded","false")})}function F(){const e=l.querySelector(".artists-search-input");_="",S="",A="",e&&(e.value=""),l.querySelectorAll(".artists-dropdown").forEach(t=>{const s=t.dataset.dropdown,r=t.querySelector(".artists-dropdown-label");r&&(r.textContent=s==="genre"?"Genre":"Sorting"),t.querySelectorAll(".artists-dropdown-item").forEach(a=>{a.classList.remove("is-selected")})}),k(),f=1,$(),w(1)}function Y(){const e=l.querySelector(".artists-filters-toggle"),t=l.querySelector(".artists-filters");e&&t&&e.addEventListener("click",()=>{const o=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",o?"false":"true"),t.classList.toggle("is-open",!o)}),l.addEventListener("click",o=>{const n=o.target.closest(".artists-dropdown-btn");if(n){const p=n.closest(".artists-dropdown").querySelector(".artists-dropdown-list"),u=!p.hidden;k(),u||(p.hidden=!1,n.setAttribute("aria-expanded","true"));return}const c=o.target.closest(".artists-dropdown-item");if(c){const d=c.closest(".artists-dropdown"),p=d.dataset.dropdown,u=c.dataset.value,v=d.querySelector(".artists-dropdown-label");d.querySelectorAll(".artists-dropdown-item").forEach(b=>b.classList.toggle("is-selected",b===c)),p==="genre"?(_=u,v.textContent=u||"Genre"):p==="sort"&&(S=u,v.textContent=u?c.textContent:"Sorting"),k(),f=1,$(),w(1);return}o.target.closest(".artists-dropdown")||k()});const s=l.querySelector(".artists-search-input"),r=l.querySelector(".artists-search-btn");function a(){A=s.value.trim(),f=1,$(),w(1)}r.addEventListener("click",a),s.addEventListener("keydown",o=>{o.key==="Enter"&&a()});const i=l.querySelector(".artists-reset-btn");i&&i.addEventListener("click",F)}function $(){g=null;const e=l.querySelector("#artists-pagination");e&&(e.innerHTML="")}function J(e){const t=l.querySelector(".artists-list");if(l.querySelector(".artists-container").classList.remove("has-empty-state"),!e||e.length===0){t.innerHTML='<li class="no-artists-message"><p>No artists found.</p></li>';return}t.innerHTML=e.map(s=>`
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
            ${(s.genres??[]).map(r=>`<li class="genres-item">${r}</li>`).join("")}
          </ul>

          <div class="artist-title-wrapper">
            <h4 class="artist-name">${s.strArtist}</h4>
            <p class="artist-description">${s.strBiographyEN}</p>
          </div>
        </div>

        <button class="artist-button js-open-modal-artist" type="button" data-id="${s._id}">
          Learn More
          <svg class="learn-more-icon" width="8" height="14">
            <use href="${h}#learn-more"></use>
          </svg>
        </button>
      </li>
    `).join("")}function ee(){const e=l.querySelector(".artists-list");e.innerHTML=`
    <li class="artists-empty">
      <div class="artists-empty-icon" aria-hidden="true">!</div>
      <h3 class="artists-empty-title">Silence on the stage...</h3>
       <p class="artists-empty-text">
        Looks like no artists match your filters.
Try changing them or hit "Reset Filters" to bring back the beat.
      </p>
      <button class="artists-empty-reset" type="button">Reset filters</button>
    </li>
  `,l.querySelector(".artists-container").classList.add("has-empty-state"),e.querySelector(".artists-empty-reset").addEventListener("click",F)}async function w(e=1){Q(),P("#artists");try{const t={limit:q,page:e};_&&(t.genre=_),A&&(t.name=A);const s=await T.get(`${I}/artists`,{params:t});let{artists:r,totalArtists:a}=s.data;S==="name_asc"?r=[...r].sort((n,c)=>n.strArtist.localeCompare(c.strArtist)):S==="name_desc"&&(r=[...r].sort((n,c)=>c.strArtist.localeCompare(n.strArtist)));const i=l.querySelector("#artists-pagination"),o=Math.ceil(a/q);if(!r.length){ee(),i.style.display="none";return}J(r),g?g.reset(a):(g=new D(i,{totalItems:a,itemsPerPage:q,visiblePages:5,page:e,centerAlign:!0}),g.on("afterMove",n=>{f=n.page,w(f),l.scrollIntoView({behavior:"smooth",block:"start"})})),i.style.display=o<=1?"none":""}catch(t){console.error("Помилка завантаження артистів:",t)}finally{j("#artists")}}w(f);X();const M=document.querySelector(".artist_form_upper"),m=document.querySelector(".artist_form_albums");H("#artist-modal");const te=T.create({baseURL:"https://sound-wave.b.goit.study/api"});function se({strArtist:e,strArtistThumb:t,intFormedYear:s,intDiedYear:r,strGender:a,intMembers:i,strCountry:o,strBiographyEN:n,genres:c}){let d;s&&s!=="null"?r&&r!=="null"?d=`${s}–${r}`:d=`${s}–present`:d="Information missing";const v=` 
    <div class="artist-modal-header">
   
      <h2 class="artist-title">${e}</h2>
    </div>
    <div class="artist_form_upper_container">
      <!-- img -->
      <div class="artist-modal-img">
        <img class="artist_form_upper_img" src="${t}" alt="" width="654" height="402" />
      </div>
<div class="artist_form_upper_info_container">
  
        <div class="artist_form_upper_info">
          <ul class="stats-list parent-upper">
            <li class="stats-item upper-grid-one">
              <span class="stats-label">Years active</span>
              <span class="stats-value">${d}</span>
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
              <span class="stats-value">${o}</span>
            </li>
          </ul>
        </div>
        <div class="artist-modal-biography">
          <h3 class="bio-title">Biography</h3>
          <p class="bio-text">
            ${n}
          </p>
        </div>
        <ul class="genre-list">
        ${c.map(b=>`<li class="genre-item"><p class="genre-name">${b}</p></li>`).join("")}
        </ul>
</div>
    </div>
  `;M.insertAdjacentHTML("beforeend",v)}function ae(e){M&&(M.innerHTML=""),m&&(m.innerHTML=""),P("#artist-modal"),fetch(`https://sound-wave.b.goit.study/api/artists/${e}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>se(t)).catch(t=>console.log("Error fetching artist data:",t)),ie(e)}async function re(e){try{return(await te.get(`/artists/${e}/albums`)).data}catch(t){throw console.error("Error fetching artist albums:",t),t}}async function ie(e){try{const t=await re(e);if(!t.albumsList||t.albumsList.length===0){m&&(m.innerHTML="<p>Альбомів не знайдено</p>");return}const s=a=>{const i=Math.floor(Number(a)/1e3),o=Math.floor(i/60),n=i%60;return`${o}:${n.toString().padStart(2,"0")}`},r=`
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
`;m&&(m.innerHTML=r)}catch(t){console.error("Error rendering artist albums:",t)}finally{j("#artist-modal")}}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".about-section");e.innerHTML=`
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
    `});H(".feedback-section");const oe="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function ne(){P(".feedback-section");try{const t=await(await fetch(oe)).json();return(Array.isArray(t.data)?t.data:[]).slice(0,10)}catch(e){return console.error("Error fetching feedbacks:",e),[]}finally{j(".feedback-section")}}const le=document.querySelector(".feedback-root-container"),ce=`<h2 class="feedback-title-hidden">Feedbacks our visitors</h2>

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
  `;le.innerHTML=ce;function de(e){const t=document.createElement("div");t.classList.add("swiper-slide","feedback-content");const s=Number(e.rating)||0,r=Math.round(s);let a="";for(let i=1;i<=5;i++){const o=i<=r?"star-filled":"star-empty";a+=`
<svg class="star-icon ${o}" width="18" height="18">
 <use href="sprite.svg#star"></use>
</svg>`}return t.innerHTML=`
<div class="star-rating">${a}</div>
<div class="feedback-text">${e.descr||""}</div>
<div class="feedback-author">${e.name||""}</div>
`,t}async function ue(){const e=document.getElementById("feedbacks-container");(await ne()).forEach(s=>{e.appendChild(de(s))}),new O(".feedbacks-swiper",{modules:[G,U],slidesPerView:1,spaceBetween:20,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},on:{init:function(){pe(this)}}})}function pe(e){const t=document.querySelector(".swiper-button-prev"),s=document.querySelector(".swiper-button-next");t&&s&&(t.classList.toggle("disabled",e.isBeginning),s.classList.toggle("disabled",e.isEnd))}ue();(()=>{const e=document.querySelector("#Leave-feedback"),t=document.querySelector(".feedback-modal-close"),s=document.querySelector(".feedback-modal-backdrop"),r=document.body;if(!e||!t||!s){console.log("not found");return}e.addEventListener("click",()=>{s.removeAttribute("hidden"),r.classList.add("no-scroll"),i()}),t.addEventListener("click",()=>{s.setAttribute("hidden",""),r.classList.remove("no-scroll")}),window.addEventListener("keydown",d=>{d.key==="Escape"&&!s.hasAttribute("hidden")&&(s.setAttribute("hidden",""),r.classList.remove("no-scroll"))}),s.addEventListener("click",d=>{d.target===s&&(s.setAttribute("hidden",""),r.classList.remove("no-scroll"))});let a=0;function i(d=0){const p=document.querySelector(".feedback-modal-stars");if(!p)return;p.innerHTML="";for(let v=1;v<=5;v++)p.insertAdjacentHTML("beforeend",`<svg class="star-icon ${v<=d?"selected":""}" width="18" height="18">
         <use href="sprite.svg#star"></use>
       </svg>`);const u=p.querySelectorAll(".star-icon");u.forEach((v,b)=>{v.addEventListener("click",()=>{a=b+1,u.forEach((C,R)=>{R<=b?C.classList.add("selected"):C.classList.remove("selected")})})})}const o=document.querySelector(".feedback-modal-form"),n=o.querySelector(".feedback-modal-input"),c=o.querySelector(".feedback-modal-textarea");o.addEventListener("submit",async d=>{d.preventDefault();let p=!1;if(n.value.trim()?n.classList.remove("error"):(n.classList.add("error"),p=!0),c.value.trim()?c.classList.remove("error"):(c.classList.add("error"),p=!0),[n,c].forEach(u=>{u&&u.addEventListener("input",()=>{u.classList.remove("error")})}),!p){const u={name:n.value.trim(),descr:c.value.trim(),rating:a};console.log("Form submitted with data:",u)}})})();const ve=document.querySelector(".footer__container");ve.innerHTML=`
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
`;const L=document.querySelector("#artist-modal"),x=document.body;document.addEventListener("click",e=>{const t=e.target.closest(".js-open-modal-artist");if(t){const s=t.dataset.id;ae(s);const r=window.innerWidth-document.documentElement.clientWidth;r>0&&(x.style.paddingRight=`${r}px`),x.classList.add("no-scroll"),L.showModal();return}(e.target.closest("#close-modal-artist")||e.target===L)&&L.close()});L.addEventListener("close",()=>{x.classList.remove("no-scroll"),x.style.paddingRight=""});
//# sourceMappingURL=index.js.map
