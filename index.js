import{a as m,S as b,N as f,P as h}from"./assets/vendor-CmQb9d2s.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const g=document.querySelector(".arist_form_upper"),v="https://sound-wave.b.goit.study/api/artists/65ada227af9f6d155db46908";function y({strArtist:s,strArtistThumb:t,intFormedYear:r,strGender:i,intMembers:e,strCountry:a,strBiographyEN:n,genres:o}){const d=` 
    <div class="artist-modal-header">
      <h2 class="artist-title">${s}</h2>
      <button class="close-btn" type="button" aria-label="Close modal"></button>
    </div>
    <div class="arist_form_upper_container">
      <!-- img -->
      <div class="artist-modal-img">
        <img class="arist_form_upper_img" src="${t}" alt="" />
      </div>

      <div class="arist_form_upper_info">
        <ul class="stats-list">
          <li class="stats-item">
            <span class="stats-label">Years active</span>
            <span class="stats-value">${r}-present</span>
          </li>
          <li class="stats-item">
            <span class="stats-label">Sex</span>
            <span class="stats-value">${i}</span>
          </li>
          <li class="stats-item">
            <span class="stats-label">Members</span>
            <span class="stats-value">${e}</span>
          </li>
          <li class="stats-item">
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
      ${o.map(p=>`<li class="genre-item">${p}</li>`).join("")}
      </ul>
    </div>
  `;g.insertAdjacentHTML("beforeend",d)}fetch(v).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>y(s)).catch(s=>console.log("Error fetching artist data:",s));const c=document.querySelector(".artist_form_albums"),w="65ada227af9f6d155db46908",x=m.create({baseURL:"https://sound-wave.b.goit.study/api"});async function L(s){try{return(await x.get(`/artists/${s}/albums`)).data}catch(t){throw console.error("Error fetching artist albums:",t),t}}async function k(s){try{const t=await L(s);if(!t.albumsList||t.albumsList.length===0){c.innerHTML="<p>Альбомів не знайдено</p>";return}const r=e=>{const a=Math.floor(Number(e)/1e3),n=Math.floor(a/60),o=a%60;return`${n}:${o.toString().padStart(2,"0")}`},i=`
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
              <li class="track-duration">${r(a.intDuration)}</li> 
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
`;c.innerHTML=i}catch(t){console.error("Error rendering artist albums:",t)}}k(w);document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".about-section");s.innerHTML=`
        <div class="about-container">
            <div class="about-team-photo">
                <picture>
          <source
            media="(min-width: 1440px)"
            srcset="
              /img/about-us/team-desktop-1x.webp 1x,
              /img/about-us/team-desktop-2x.webp 2x
            "
          />
          <source
            media="(min-width: 768px)"
            srcset="
              /img/about-us/team-tablet-1x.webp 1x,
              /img/about-us/team-tablet-2x.webp 2x
            "
          />
          <source
            media="(max-width: 767px)"
            srcset="
              /img/about-us/team-1x.webp 1x,
              /img/about-us/team-2x.webp 2x
            "
          />
          <img
            src="/img/about-us/team-desktop-1x.webp"
            alt="ArtistsHub team"
          />
        </picture>
            </div>

            <div class="about_logo">
                <div class="about-logo-wrapper">
                    <svg class="icon-logo-icon" width="64" height="64">
                        <use href="./img/sprite.svg#logo"></use>
                    </svg>
                </div>
                <h2 class="about-section-title">About ArtistsHub</h2>
                <p class="about-artist-text">
                    At ArtistsHub, our mission is to connect music lovers with the artists they adore.
                    We strive to create a vibrant community where discovering new music is as
                    enjoyable as listening to it.
                </p>
            </div>
        </div>
    `});const $="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function A(){try{const t=await(await fetch($)).json();return(Array.isArray(t.data)?t.data:[]).slice(0,10)}catch(s){return console.error("Error fetching feedbacks:",s),[]}}function _(s){const t=document.createElement("div");t.classList.add("swiper-slide","feedback-content");const r=document.createElement("div");r.classList.add("star-rating");const i=document.createElement("div");i.classList.add("feedback-text"),i.textContent=s.descr||"";const e=document.createElement("div");return e.classList.add("feedback-author"),e.textContent=s.name||"",t.appendChild(r),t.appendChild(i),t.appendChild(e),t}async function E(){const s=window.jQuery,t=document.getElementById("feedbacks-container"),r=await A();r.forEach(i=>{const e=_(i);t.appendChild(e);const a=e.querySelector(".star-rating");typeof s(a).raty=="function"&&s(a).raty({readOnly:!0,score:Math.round(Number(i.rating)),starType:"i",hints:[]})}),new b(".feedbacks-swiper",{modules:[f,h],slidesPerView:1,loop:!1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(i,e){return i<3?`<span class="${e} custom-bullet-${i}"></span>`:""}},on:{init:function(){u(this,r),l(this)},slideChange:function(){u(this,r),l(this)}}})}function l(s){const t=s.pagination.bullets;if(!t||t.length===0)return;t.forEach(i=>i.classList.remove("swiper-pagination-bullet-active"));const r=s.activeIndex;r<=2?t[0].classList.add("swiper-pagination-bullet-active"):r>=3&&r<=6?t[1].classList.add("swiper-pagination-bullet-active"):t[2].classList.add("swiper-pagination-bullet-active")}function u(s,t){const r=document.querySelector(".swiper-button-prev"),i=document.querySelector(".swiper-button-next");r.classList.toggle("disabled",s.activeIndex===0),i.classList.toggle("disabled",s.activeIndex===t.length-1)}E();
//# sourceMappingURL=index.js.map
