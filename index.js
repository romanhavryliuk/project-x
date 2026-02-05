import{S as u,N as p,P as f}from"./assets/vendor-DPAKR3EG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const m=document.querySelector(".arist_form_upper"),b="https://sound-wave.b.goit.study/api/artists/65ada227af9f6d155db46908";function h({strArtist:e,strArtistThumb:s,intFormedYear:n,strGender:a,intMembers:t,strCountry:r,strBiographyEN:i,genres:l}){const c=` 
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
            <span class="stats-value">${a}</span>
          </li>
          <li class="stats-item">
            <span class="stats-label">Members</span>
            <span class="stats-value">${t}</span>
          </li>
          <li class="stats-item">
            <span class="stats-label">Country</span>
            <span class="stats-value">${r}</span>
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
      ${l.map(d=>`<li class="genre-item">${d}</li>`).join("")}
      </ul>
    </div>
  `;m.insertAdjacentHTML("beforeend",c)}fetch(b).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>h(e)).catch(e=>console.log("Error fetching artist data:",e));window.jQuery=$;window.$=$;const g="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1";async function y(){try{const s=await(await fetch(g)).json();return(Array.isArray(s.data)?s.data:[]).slice(0,10)}catch(e){return console.error("Error fetching feedbacks:",e),[]}}function v(e){const s=document.createElement("div");s.classList.add("swiper-slide");const n=document.createElement("div");n.classList.add("star-rating");const a=document.createElement("div");a.classList.add("feedback-text"),a.textContent=e.descr||"";const t=document.createElement("div");return t.classList.add("feedback-author"),t.textContent=e.name||"",s.appendChild(n),s.appendChild(a),s.appendChild(t),s}async function w(){const e=window.jQuery,s=document.getElementById("feedbacks-container"),n=await y();n.forEach(a=>{const t=v(a);s.appendChild(t);const r=t.querySelector(".star-rating");typeof e(r).raty=="function"?e(r).raty({readOnly:!0,score:Math.round(Number(a.rating)),starType:"i",hints:[]}):console.error("Raty plugin is not available.")}),new u(".feedbacks-swiper",{modules:[p,f],slidesPerView:1,loop:!1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(a,t){return a===0?`<span class="${t} bullet-first"></span>`:a===n.length-1?`<span class="${t} bullet-last"></span>`:a===1?`<span class="${t} bullet-middle"></span>`:""}},on:{init:function(){o(this,n)},slideChange:function(){o(this,n)}}})}function o(e,s){const n=document.querySelector(".swiper-button-prev"),a=document.querySelector(".swiper-button-next");n.classList.toggle("disabled",e.activeIndex===0),a.classList.toggle("disabled",e.activeIndex===s.length-1)}w();
//# sourceMappingURL=index.js.map
