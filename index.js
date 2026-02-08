import{a as g,j as d,S as v,N as f,P as b}from"./assets/vendor-Bwpow0wG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();const h=document.querySelector(".artist_form_upper"),w="https://sound-wave.b.goit.study/api/artists/65ada227af9f6d155db46908";function _({strArtist:e,strArtistThumb:s,intFormedYear:i,strGender:r,intMembers:t,strCountry:a,strBiographyEN:o,genres:n}){const p=` 
    <div class="artist-modal-header">
      <h2 class="artist-title">${e}</h2>
      <button class="close-btn" type="button" aria-label="Close modal">X</button>
    </div>
    <div class="artist_form_upper_container">
      <!-- img -->
      <div class="artist-modal-img">
        <img class="artist_form_upper_img" src="${s}" alt="" />
      </div>

      <div class="artist_form_upper_info">
        <ul class="stats-list parent-upper">
          <li class="stats-item upper-grid-one">
            <span class="stats-label">Years active</span>
            <span class="stats-value">${i}-present</span>
          </li>
          <li class="stats-item upper-grid-two">
            <span class="stats-label">Sex</span>
            <span class="stats-value">${r}</span>
          </li>
          <li class="stats-item upper-grid-three">
            <span class="stats-label">Members</span>
            <span class="stats-value">${t}</span>
          </li>
          <li class="stats-item upper-grid-four">
            <span class="stats-label">Country</span>
            <span class="stats-value">${a}</span>
          </li>
        </ul>
      </div>
      <div class="artist-modal-biography">
        <h3 class="bio-title">Biography</h3>
        <p class="bio-text">
          ${o}
        </p>
      </div>
      <ul class="genre-list">
      ${n.map(m=>`<li class="genre-item"><p class="genre-name">${m}</p></li>`).join("")}
      </ul>
    </div>
  `;h.insertAdjacentHTML("beforeend",p)}fetch(w).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>_(e)).catch(e=>console.log("Error fetching artist data:",e));const c=document.querySelector(".artist_form_albums"),y="65ada227af9f6d155db46908",k=g.create({baseURL:"https://sound-wave.b.goit.study/api"});async function x(e){try{return(await k.get(`/artists/${e}/albums`)).data}catch(s){throw console.error("Error fetching artist albums:",s),s}}async function L(e){try{const s=await x(e);if(!s.albumsList||s.albumsList.length===0){c.innerHTML="<p>Альбомів не знайдено</p>";return}const i=t=>{const a=Math.floor(Number(t)/1e3),o=Math.floor(a/60),n=a%60;return`${o}:${n.toString().padStart(2,"0")}`},r=`
  <h2 class="albums-title">Albums</h2> 
  <div class="albums-list"> 
    ${s.albumsList.map(t=>`
      <div class="album-container">
        <h3 class="album-name">${t.strAlbum}</h3>
        <div class="tracks-list">
          <div class="tracks-header">
            <span class="track-span">Track</span>
            <span class="time-span">Time</span>
            <span class="link-span">Link</span>
          </div>

          ${t.tracks.map(a=>`
            <ul class="track-row">
              <li class="track-title">${a.strTrack}</li> 
              <li class="track-duration">${i(a.intDuration)}</li> 
              <li class="track-link">
                ${a.movie?`<a href="${a.movie}" target="_blank">
                    <svg class="youtube-icon" width="24" height="24" aria-hidden="true">
                      <use href="/img/sprite.svg#youtube"></use>
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
`;c.innerHTML=r}catch(s){console.error("Error rendering artist albums:",s)}}L(y);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".about-section");e.innerHTML=`
        <div class="about-container">
            <div class="about-team-photo">
            <picture>
                <source media="(min-width: 1440px)" 
                srcset="
                /img/about-us/team-desktop-1x.webp 1x, 
                /img/about-us/team-desktop-2x.webp 2x" 
                type="image/webp">
        
                <source media="(min-width: 768px)" 
                srcset="
                /img/about-us/team-tablet-1x.webp 1x, 
                /img/about-us/team-tablet-2x.webp 2x"
                type="image/webp">
        
                <source media="(max-width: 767px)" 
                srcset="
                /img/about-us/team-1x.webp 1x, 
                /img/about-us/team-2x.webp 2x" 
                type="image/webp">

                <img src="/img/about-us/team-desktop-1x.webp"  alt="Team photo"
                    class="team-photo"  loading="lazy">
            </picture>
            </div>

            <div class="about_logo">
                <div class="about-logo-wrapper">
                    <svg class="icon-logo-icon" width="64" height="64">
                        <use href="./img/sprite.svg#logo"></use>
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
    `});window.jQuery=d;window.$=d;const $="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function A(){try{const s=await(await fetch($)).json();return(Array.isArray(s.data)?s.data:[]).slice(0,10)}catch(e){return console.error("Error fetching feedbacks:",e),[]}}const S=document.querySelector(".feedback-root-container"),M=`<h2 class="feedback-title-hidden">Feedbacks our visitors</h2>

  <div class="swiper feedbacks-swiper">
    <div class="swiper-wrapper" id="feedbacks-container">
    </div>
      <div class="swiper-button-prev">
       <svg class="icons-arrow">
        <use href="./img/sprite.svg#arrow-left"></use>
       </svg>
      </div>

      <div class="swiper-button-next">
       <svg class="icons-arrow">
        <use href="./img/sprite.svg#arrow-right"></use>
       </svg>
      </div>
 <div class="swiper-pagination"></div>
    </div>
  `;S.innerHTML=M;function T(e){const s=document.createElement("div");s.classList.add("swiper-slide","feedback-content");const i=Number(e.rating)||0,r=Math.round(i);let t="";for(let a=1;a<=5;a++){const o=a<=r?"star-filled":"star-empty";t+=`
<svg class="star-icon ${o}" width="18" height="18">
<use href="./img/sprite.svg#star"></use>
</svg>`}return s.innerHTML=`
<div class="star-rating">${t}</div>
<div class="feedback-text">${e.descr||""}</div>
<div class="feedback-author">${e.name||""}</div>
`,s}async function E(){const e=document.getElementById("feedbacks-container"),s=await A();s.forEach(i=>{const r=T(i);e.appendChild(r)}),new v(".feedbacks-swiper",{modules:[f,b],slidesPerView:1,loop:!1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(i,r){return i<3?`<span class="${r} custom-bullet-${i}"></span>`:""}},on:{init:function(){u(this,s),l(this)},slideChange:function(){u(this,s),l(this)}}})}function l(e){const s=e.pagination.bullets;if(!s||s.length===0)return;s.forEach(r=>r.classList.remove("swiper-pagination-bullet-active"));const i=e.activeIndex;i<=2?s[0].classList.add("swiper-pagination-bullet-active"):i>=3&&i<=6?s[1].classList.add("swiper-pagination-bullet-active"):s[2].classList.add("swiper-pagination-bullet-active")}function u(e,s){const i=document.querySelector(".swiper-button-prev"),r=document.querySelector(".swiper-button-next");i.classList.toggle("disabled",e.activeIndex===0),r.classList.toggle("disabled",e.activeIndex===s.length-1)}E();const j=document.querySelector(".footer__container");j.innerHTML=`
  <div class="footer__content">
    <div class="footer__logo">
     <a href="index.html" class="footer__logo-link">
    <svg class="footer__logo-icon">
      <use href="img/sprite.svg#logo-2"></use>
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
`;
//# sourceMappingURL=index.js.map
