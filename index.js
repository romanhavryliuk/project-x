import{a as p,S as m,N as f,P as b}from"./assets/vendor-CmQb9d2s.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const h=document.querySelector(".arist_form_upper"),g="https://sound-wave.b.goit.study/api/artists/65ada227af9f6d155db46908";function v({strArtist:e,strArtistThumb:s,intFormedYear:n,strGender:r,intMembers:t,strCountry:a,strBiographyEN:i,genres:o}){const d=` 
    <div class="artist-modal-header">
      <h2 class="artist-title">${e}</h2>
      <button class="close-btn" type="button" aria-label="Close modal"></button>
    </div>
    <div class="arist_form_upper_container">
      <!-- img -->
      <div class="artist-modal-img">
        <img class="arist_form_upper_img" src="${s}" alt="" />
      </div>

      <div class="arist_form_upper_info">
        <ul class="stats-list">
          <li class="stats-item">
            <span class="stats-label">Years active</span>
            <span class="stats-value">${n}-present</span>
          </li>
          <li class="stats-item">
            <span class="stats-label">Sex</span>
            <span class="stats-value">${r}</span>
          </li>
          <li class="stats-item">
            <span class="stats-label">Members</span>
            <span class="stats-value">${t}</span>
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
          ${i}
        </p>
      </div>
      <ul class="genre-list">
      ${o.map(u=>`<li class="genre-item">${u}</li>`).join("")}
      </ul>
    </div>
  `;h.insertAdjacentHTML("beforeend",d)}fetch(g).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>v(e)).catch(e=>console.log("Error fetching artist data:",e));const l=document.querySelector(".artist_form_albums"),y="65ada227af9f6d155db46908",w=p.create({baseURL:"https://sound-wave.b.goit.study/api"});async function L(e){try{return(await w.get(`/artists/${e}/albums`)).data}catch(s){throw console.error("Error fetching artist albums:",s),s}}async function k(e){try{const s=await L(e);if(!s.albumsList||s.albumsList.length===0){l.innerHTML="<p>Альбомів не знайдено</p>";return}const n=t=>{const a=Math.floor(Number(t)/1e3),i=Math.floor(a/60),o=a%60;return`${i}:${o.toString().padStart(2,"0")}`},r=`
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
            <div class="track-row">
              <span class="track-title">${a.strTrack}</span> 
              <span class="track-duration">${n(a.intDuration)}</span> 
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
`;l.innerHTML=r}catch(s){console.error("Error rendering artist albums:",s)}}k(y);window.jQuery=$;window.$=$;const _="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function A(){try{const s=await(await fetch(_)).json();return(Array.isArray(s.data)?s.data:[]).slice(0,10)}catch(e){return console.error("Error fetching feedbacks:",e),[]}}function E(e){const s=document.createElement("div");s.classList.add("swiper-slide");const n=document.createElement("div");n.classList.add("star-rating");const r=document.createElement("div");r.classList.add("feedback-text"),r.textContent=e.descr||"";const t=document.createElement("div");return t.classList.add("feedback-author"),t.textContent=e.name||"",s.appendChild(n),s.appendChild(r),s.appendChild(t),s}async function S(){const e=window.jQuery,s=document.getElementById("feedbacks-container"),n=await A();n.forEach(r=>{const t=E(r);s.appendChild(t);const a=t.querySelector(".star-rating");typeof e(a).raty=="function"?e(a).raty({readOnly:!0,score:Math.round(Number(r.rating)),starType:"i",hints:[]}):console.error("Raty plugin is not available.")}),new m(".feedbacks-swiper",{modules:[f,b],slidesPerView:1,loop:!1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(r,t){return r===0?`<span class="${t} bullet-first"></span>`:r===n.length-1?`<span class="${t} bullet-last"></span>`:r===1?`<span class="${t} bullet-middle"></span>`:""}},on:{init:function(){c(this,n)},slideChange:function(){c(this,n)}}})}function c(e,s){const n=document.querySelector(".swiper-button-prev"),r=document.querySelector(".swiper-button-next");n.classList.toggle("disabled",e.activeIndex===0),r.classList.toggle("disabled",e.activeIndex===s.length-1)}S();
//# sourceMappingURL=index.js.map
