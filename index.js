import{a as m,S as b,N as g,P as f}from"./assets/vendor-CmQb9d2s.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const h=document.querySelector(".artist_form_upper"),v="https://sound-wave.b.goit.study/api/artists/65ada227af9f6d155db46908";function y({strArtist:e,strArtistThumb:t,intFormedYear:r,strGender:i,intMembers:s,strCountry:a,strBiographyEN:n,genres:o}){const d=` 
    <div class="artist-modal-header">
      <h2 class="artist-title">${e}</h2>
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
            <span class="stats-value">${r}-present</span>
          </li>
          <li class="stats-item upper-grid-two">
            <span class="stats-label">Sex</span>
            <span class="stats-value">${i}</span>
          </li>
          <li class="stats-item upper-grid-three">
            <span class="stats-label">Members</span>
            <span class="stats-value">${s}</span>
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
      ${o.map(p=>`<li class="genre-item"><p class="genre-name">${p}</p></li>`).join("")}
      </ul>
    </div>
  `;h.insertAdjacentHTML("beforeend",d)}fetch(v).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>y(e)).catch(e=>console.log("Error fetching artist data:",e));const c=document.querySelector(".artist_form_albums"),w="65ada227af9f6d155db46908",x=m.create({baseURL:"https://sound-wave.b.goit.study/api"});async function L(e){try{return(await x.get(`/artists/${e}/albums`)).data}catch(t){throw console.error("Error fetching artist albums:",t),t}}async function k(e){try{const t=await L(e);if(!t.albumsList||t.albumsList.length===0){c.innerHTML="<p>Альбомів не знайдено</p>";return}const r=s=>{const a=Math.floor(Number(s)/1e3),n=Math.floor(a/60),o=a%60;return`${n}:${o.toString().padStart(2,"0")}`},i=`
  <h2 class="albums-title">Albums</h2> 
  <div class="albums-list"> 
    ${t.albumsList.map(s=>`
      <div class="album-container">
        <h3 class="album-name">${s.strAlbum}</h3>
        <div class="tracks-list">
          <div class="tracks-header">
            <span class="track-span">Track</span>
            <span class="time-span">Time</span>
            <span class="link-span">Link</span>
          </div>

          ${s.tracks.map(a=>`
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
`;c.innerHTML=i}catch(t){console.error("Error rendering artist albums:",t)}}k(w);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".about-section");e.innerHTML=`
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
    `});const $="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function A(){try{const t=await(await fetch($)).json();return(Array.isArray(t.data)?t.data:[]).slice(0,10)}catch(e){return console.error("Error fetching feedbacks:",e),[]}}function _(e){const t=document.createElement("div");t.classList.add("swiper-slide","feedback-content");const r=document.createElement("div");r.classList.add("star-rating");const i=document.createElement("div");i.classList.add("feedback-text"),i.textContent=e.descr||"";const s=document.createElement("div");return s.classList.add("feedback-author"),s.textContent=e.name||"",t.appendChild(r),t.appendChild(i),t.appendChild(s),t}async function E(){const e=window.jQuery,t=document.getElementById("feedbacks-container"),r=await A();r.forEach(i=>{const s=_(i);t.appendChild(s);const a=s.querySelector(".star-rating");typeof e(a).raty=="function"&&e(a).raty({readOnly:!0,score:Math.round(Number(i.rating)),starType:"i",hints:[]})}),new b(".feedbacks-swiper",{modules:[g,f],slidesPerView:1,loop:!1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(i,s){return i<3?`<span class="${s} custom-bullet-${i}"></span>`:""}},on:{init:function(){u(this,r),l(this)},slideChange:function(){u(this,r),l(this)}}})}function l(e){const t=e.pagination.bullets;if(!t||t.length===0)return;t.forEach(i=>i.classList.remove("swiper-pagination-bullet-active"));const r=e.activeIndex;r<=2?t[0].classList.add("swiper-pagination-bullet-active"):r>=3&&r<=6?t[1].classList.add("swiper-pagination-bullet-active"):t[2].classList.add("swiper-pagination-bullet-active")}function u(e,t){const r=document.querySelector(".swiper-button-prev"),i=document.querySelector(".swiper-button-next");r.classList.toggle("disabled",e.activeIndex===0),i.classList.toggle("disabled",e.activeIndex===t.length-1)}E();
//# sourceMappingURL=index.js.map
