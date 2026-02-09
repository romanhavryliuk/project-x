import{a as w,j as y,S as L,N as A,P as M}from"./assets/vendor-Dz2QzdCe.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(i){if(i.ep)return;i.ep=!0;const t=a(i);fetch(i.href,t)}})();const l=document.querySelector(".header");l.innerHTML=`
<div class="container">

<nav class="page-nav">
      <a href="./" class="logo"
        ><svg class="icon logo">
          <use href="main-logo.svg#icon-logo"></use>
        </svg>
      </a>
      <button type="button" class="burger-icon-btn" id="burger-icon-btn">
        <svg class="icon burger-icon">
          <use href="sprite.svg#burger"></use>
        </svg>
      </button>
      <button type="button" class="close-icon-btn" id="close-icon-btn">
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

      </div>`;const S=document.querySelector(".burger-icon-btn"),E=document.querySelector(".close-icon-btn"),g=document.querySelector(".menu-modal"),B=document.querySelectorAll(".mobile-section-link");S.addEventListener("click",()=>{l.classList.add("menu-open"),g.classList.add("is-open"),document.body.style.overflow="hidden"});E.addEventListener("click",()=>{l.classList.remove("menu-open"),g.classList.remove("is-open"),document.body.style.overflow="auto"});B.forEach(e=>{e.addEventListener("click",()=>{l.classList.remove("menu-open"),g.classList.remove("is-open"),document.body.style.overflow="auto"})});const T=document.querySelector("#hero");T.innerHTML=`
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
`;const j=document.querySelector("#artists");let m=1;const b=8;let u=[];async function _(){try{const e=await w.get("https://sound-wave.b.goit.study/api/artists",{params:{limit:b,page:m}}),{artists:s,totalPages:a}=e.data;u=[...u,...s];const o=m>=a||s.length<b?"is-hidden":"",i=`
      <div class="container artists-container">
        <div class="artists-header-wrapper">  
          <h2 class="artists-title">Artist</h2>
          <h3 class="artists-subtitle">Explore Your New Favorite Artists</h3>
        </div>
        <ul class="artists-list">
          ${u.map(t=>`
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
                    <use href="/project-x/assets/sprite-CNuXn03P.svg#learn-more"></use>
                  </svg>
                </button>
            </li>
          `).join("")}
        </ul>

        <button type="button"  class="load-more ${o}">Load More
          <svg class="load-more-icon" width="14" height="14">
            <use href="/project-x/assets/sprite-CNuXn03P.svg#arrow-down"></use>
          </svg></button>
      </div>
    `;j.innerHTML=i,q()}catch(e){console.error("Помилка завантаження артистів:",e)}}function q(){const e=document.querySelector(".load-more");document.querySelector(".artists-list"),e&&(e.onclick=()=>{m+=1,_()})}_();const v=document.querySelector(".artist_form_upper"),n=document.querySelector(".artist_form_albums"),H=w.create({baseURL:"https://sound-wave.b.goit.study/api"});function P({strArtist:e,strArtistThumb:s,intFormedYear:a,intDiedYear:o,strGender:i,intMembers:t,strCountry:r,strBiographyEN:d,genres:k}){let c;a&&a!=="null"?o&&o!=="null"?c=`${a}–${o}`:c=`${a}–present`:c="Information missing";const x=` 
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
              <span class="stats-value">${c}</span>
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
            ${d}
          </p>
        </div>
        <ul class="genre-list">
        ${k.map($=>`<li class="genre-item"><p class="genre-name">${$}</p></li>`).join("")}
        </ul>
</div>
    </div>
  `;v.insertAdjacentHTML("beforeend",x)}function N(e){v&&(v.innerHTML=""),n&&(n.innerHTML=""),fetch(`https://sound-wave.b.goit.study/api/artists/${e}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>P(s)).catch(s=>console.log("Error fetching artist data:",s)),I(e)}async function C(e){try{return(await H.get(`/artists/${e}/albums`)).data}catch(s){throw console.error("Error fetching artist albums:",s),s}}async function I(e){try{const s=await C(e);if(!s.albumsList||s.albumsList.length===0){n&&(n.innerHTML="<p>Альбомів не знайдено</p>");return}const a=i=>{const t=Math.floor(Number(i)/1e3),r=Math.floor(t/60),d=t%60;return`${r}:${d.toString().padStart(2,"0")}`},o=`
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
    `});const h="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='star'%20viewBox='0%200%2034%2032'%3e%3cpath%20d='M15.277%201.031c0.579-1.375%202.551-1.375%203.13%200l3.417%208.116c0.244%200.58%200.796%200.976%201.43%201.026l8.869%200.702c1.503%200.119%202.112%201.972%200.967%202.941l-6.757%205.718c-0.483%200.408-0.694%201.049-0.546%201.66l2.064%208.55c0.35%201.449-1.245%202.594-2.532%201.817l-7.593-4.582c-0.542-0.327-1.224-0.327-1.767%200l-7.593%204.582c-1.287%200.776-2.882-0.369-2.532-1.817l2.064-8.55c0.147-0.611-0.063-1.252-0.546-1.66l-6.757-5.718c-1.145-0.969-0.536-2.822%200.967-2.941l8.869-0.702c0.633-0.050%201.185-0.446%201.429-1.026l3.417-8.116z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='arrow-right'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M12.098%2027.429l3.232%203.232%2015.33-15.33-15.33-15.33-3.232%203.232%209.813%209.813h-21.911v4.571h21.911l-9.813%209.813z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='arrow-left'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M18.562%2027.429l-9.813-9.813h21.911v-4.571h-21.911l9.813-9.813-3.232-3.232-15.33%2015.33%2015.33%2015.33%203.232-3.232z'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e";window.jQuery=y;window.$=y;const O="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function D(){try{const s=await(await fetch(O)).json();return(Array.isArray(s.data)?s.data:[]).slice(0,10)}catch(e){return console.error("Error fetching feedbacks:",e),[]}}const R=document.querySelector(".feedback-root-container"),U=`
<h2 class="feedback-title-hidden">Feedbacks our visitors</h2>

  <div class="swiper feedbacks-swiper">
    <div class="swiper-wrapper" id="feedbacks-container">
    
    </div>
          <div class="swiper-button-prev" id="feedbacks-button-p">
       <svg class="icons-arrow">
        <use href="${h}#arrow-left"></use>
       </svg>
      </div>

      <div class="swiper-button-next" id="feedbacks-button-n">
       <svg class="icons-arrow">
        <use href="${h}#arrow-right"></use>
       </svg>
      </div>
 <div class="swiper-pagination"></div>
    </div>
  `;R.innerHTML=U;function F(e){const s=document.createElement("div");s.classList.add("swiper-slide","feedback-content");const a=Number(e.rating)||0,o=Math.round(a);let i="";for(let t=1;t<=5;t++){const r=t<=o?"star-filled":"star-empty";i+=`
<svg class="star-icon ${r}" width="18" height="18">
 <use href="${h}#star"></use>
</svg>`}return s.innerHTML=`
<div class="star-rating">${i}</div>
<div class="feedback-text">${e.descr||""}</div>
<div class="feedback-author">${e.name||""}</div>
`,s}async function z(){const e=document.getElementById("feedbacks-container"),s=await D();s.forEach(a=>{const o=F(a);e.appendChild(o)}),new L(".feedbacks-swiper",{modules:[A,M],slidesPerView:1,spaceBetween:20,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},on:{init:function(){f(this,s),updateCustomPagination(this)},slideChange:function(){f(this,s),updateCustomPagination(this)}}})}function f(e,s){const a=document.querySelector(".swiper-button-prev"),o=document.querySelector(".swiper-button-next");a.classList.toggle("disabled",e.activeIndex===0),o.classList.toggle("disabled",e.activeIndex===s.length-1)}z();const X=document.querySelector(".footer__container");X.innerHTML=`
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
`;const p=document.querySelector("#artist-modal");document.addEventListener("click",e=>{const s=e.target.closest(".js-open-modal-artist");if(s){const a=s.dataset.id;N(a),p.showModal();return}(e.target.closest("#close-modal-artist")||e.target===p)&&p.close()});
//# sourceMappingURL=index.js.map
