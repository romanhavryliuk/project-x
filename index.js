import{a as b,j as d,S as g,N as v,P as f}from"./assets/vendor-Bwpow0wG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const h=document.querySelector(".artist_form_upper"),w="https://sound-wave.b.goit.study/api/artists/65ada227af9f6d155db46908";function y({strArtist:s,strArtistThumb:t,intFormedYear:i,strGender:r,intMembers:e,strCountry:a,strBiographyEN:n,genres:o}){const p=` 
    <div class="artist-modal-header">
      <h2 class="artist-title">${s}</h2>
      <button class="close-btn" type="button" aria-label="Close modal">X</button>
    </div>
    <div class="artist_form_upper_container">
      <!-- img -->
      <div class="artist-modal-img">
        <img class="artist_form_upper_img" src="${t}" alt="" />
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
            <span class="stats-value">${e}</span>
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
          ${n}
        </p>
      </div>
      <ul class="genre-list">
      ${o.map(m=>`<li class="genre-item"><p class="genre-name">${m}</p></li>`).join("")}
      </ul>
    </div>
  `;h.insertAdjacentHTML("beforeend",p)}fetch(w).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>y(s)).catch(s=>console.log("Error fetching artist data:",s));const c=document.querySelector(".artist_form_albums"),k="65ada227af9f6d155db46908",x=b.create({baseURL:"https://sound-wave.b.goit.study/api"});async function L(s){try{return(await x.get(`/artists/${s}/albums`)).data}catch(t){throw console.error("Error fetching artist albums:",t),t}}async function $(s){try{const t=await L(s);if(!t.albumsList||t.albumsList.length===0){c.innerHTML="<p>Альбомів не знайдено</p>";return}const i=e=>{const a=Math.floor(Number(e)/1e3),n=Math.floor(a/60),o=a%60;return`${n}:${o.toString().padStart(2,"0")}`},r=`
  <h2 class="albums-title">Albums</h2> 
  <div class="albums-list"> 
    ${t.albumsList.map(e=>`
      <div class="album-container">
        <h3 class="album-name">${e.strAlbum}</h3>
        <div class="tracks-list">
          <div class="tracks-header">
            <span class="track-span">Track</span>
            <span class="time-span">Time</span>
            <span class="link-span">Link</span>
          </div>

          ${e.tracks.map(a=>`
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
`;c.innerHTML=r}catch(t){console.error("Error rendering artist albums:",t)}}$(k);document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".about-section");s.innerHTML=`
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
    `});window.jQuery=d;window.$=d;const A="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function _(){try{const t=await(await fetch(A)).json();return(Array.isArray(t.data)?t.data:[]).slice(0,10)}catch(s){return console.error("Error fetching feedbacks:",s),[]}}const S=document.querySelector(".feedback-root-container"),M=`<h2 class="feedback-title-hidden">Feedbacks our visitors</h2>

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
  `;S.innerHTML=M;function T(s){const t=document.createElement("div");t.classList.add("swiper-slide","feedback-content");const i=Math.round(Number(s.rating))||0;let r="";for(let e=1;e<=5;e++){const a=e<=i?"star-filled":"star-empty";r+=`
<svg class="star-icon ${a}" width="18" height="18">
<use href="./img/sprite.svg#star"></use>
</svg>`}return t.innerHTML=`
<div class="star-rating">${r}</div>
<div class="feedback-text">${s.descr||""}</div>
<div class="feedback-author">${s.name||""}</div>
`,t}async function E(){const s=document.getElementById("feedbacks-container"),t=await _();t.forEach(i=>{const r=T(i);s.appendChild(r)}),new g(".feedbacks-swiper",{modules:[v,f],slidesPerView:1,loop:!1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(i,r){return i<3?`<span class="${r} custom-bullet-${i}"></span>`:""}},on:{init:function(){u(this,t),l(this)},slideChange:function(){u(this,t),l(this)}}})}function l(s){const t=s.pagination.bullets;if(!t||t.length===0)return;t.forEach(r=>r.classList.remove("swiper-pagination-bullet-active"));const i=s.activeIndex;i<=2?t[0].classList.add("swiper-pagination-bullet-active"):i>=3&&i<=6?t[1].classList.add("swiper-pagination-bullet-active"):t[2].classList.add("swiper-pagination-bullet-active")}function u(s,t){const i=document.querySelector(".swiper-button-prev"),r=document.querySelector(".swiper-button-next");i.classList.toggle("disabled",s.activeIndex===0),r.classList.toggle("disabled",s.activeIndex===t.length-1)}E();
//# sourceMappingURL=index.js.map
