import{a as m,S as f,N as b,P as h}from"./assets/vendor-CmQb9d2s.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();const g=document.querySelector(".arist_form_upper"),v="https://sound-wave.b.goit.study/api/artists/65ada227af9f6d155db46908";function y({strArtist:e,strArtistThumb:t,intFormedYear:i,strGender:n,intMembers:s,strCountry:a,strBiographyEN:r,genres:o}){const u=` 
    <div class="artist-modal-header">
      <h2 class="artist-title">${e}</h2>
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
            <span class="stats-value">${i}-present</span>
          </li>
          <li class="stats-item">
            <span class="stats-label">Sex</span>
            <span class="stats-value">${n}</span>
          </li>
          <li class="stats-item">
            <span class="stats-label">Members</span>
            <span class="stats-value">${s}</span>
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
          ${r}
        </p>
      </div>
      <ul class="genre-list">
      ${o.map(p=>`<li class="genre-item">${p}</li>`).join("")}
      </ul>
    </div>
  `;g.insertAdjacentHTML("beforeend",u)}fetch(v).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>y(e)).catch(e=>console.log("Error fetching artist data:",e));const c=document.querySelector(".artist_form_albums"),w="65ada227af9f6d155db46908",L=m.create({baseURL:"https://sound-wave.b.goit.study/api"});async function $(e){try{return(await L.get(`/artists/${e}/albums`)).data}catch(t){throw console.error("Error fetching artist albums:",t),t}}async function k(e){try{const t=await $(e);if(!t.albumsList||t.albumsList.length===0){c.innerHTML="<p>Альбомів не знайдено</p>";return}const i=s=>{const a=Math.floor(Number(s)/1e3),r=Math.floor(a/60),o=a%60;return`${r}:${o.toString().padStart(2,"0")}`},n=`
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
            <div class="track-row">
              <span class="track-title">${a.strTrack}</span> 
              <span class="track-duration">${i(a.intDuration)}</span> 
              <span class="track-link">
                ${a.movie?`<a href="${a.movie}" target="_blank">
                    <svg class="youtube-icon" width="24" height="24" aria-hidden="true">
                      <use href="/img/sprite.svg#youtube"></use>
                    </svg>
                    <span class="sr-only">Watch video on YouTube</span>
                   </a>`:""} 
              </span>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("")}
  </div> 
`;c.innerHTML=n}catch(t){console.error("Error rendering artist albums:",t)}}k(w);const _="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function A(){try{const t=await(await fetch(_)).json();return(Array.isArray(t.data)?t.data:[]).slice(0,10)}catch(e){return console.error("Error fetching feedbacks:",e),[]}}function E(e){const t=document.createElement("div");t.classList.add("swiper-slide","feedback-content");const i=document.createElement("div");i.classList.add("star-rating");const n=document.createElement("div");n.classList.add("feedback-text"),n.textContent=e.descr||"";const s=document.createElement("div");return s.classList.add("feedback-author"),s.textContent=e.name||"",t.appendChild(i),t.appendChild(n),t.appendChild(s),t}async function S(){const e=window.jQuery,t=document.getElementById("feedbacks-container"),i=await A();i.forEach(n=>{const s=E(n);t.appendChild(s);const a=s.querySelector(".star-rating");typeof e(a).raty=="function"&&e(a).raty({readOnly:!0,score:Math.round(Number(n.rating)),starType:"i",hints:[]})}),new f(".feedbacks-swiper",{modules:[b,h],slidesPerView:1,loop:!1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(n,s){return n<3?`<span class="${s} custom-bullet-${n}"></span>`:""}},on:{init:function(){d(this,i),l(this)},slideChange:function(){d(this,i),l(this)}}})}function l(e){const t=e.pagination.bullets;if(!t||t.length===0)return;t.forEach(n=>n.classList.remove("swiper-pagination-bullet-active"));const i=e.activeIndex;i<=2?t[0].classList.add("swiper-pagination-bullet-active"):i>=3&&i<=6?t[1].classList.add("swiper-pagination-bullet-active"):t[2].classList.add("swiper-pagination-bullet-active")}function d(e,t){const i=document.querySelector(".swiper-button-prev"),n=document.querySelector(".swiper-button-next");i.classList.toggle("disabled",e.activeIndex===0),n.classList.toggle("disabled",e.activeIndex===t.length-1)}S();
//# sourceMappingURL=index.js.map
