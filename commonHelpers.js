import{i as a,S as d}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="44093100-ac5392341c86f6f111ffa7b1f",p="https://pixabay.com/api/";async function y(s,r=1,o=12){const i=`${p}?key=${m}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${o}`,e=await fetch(i);if(!e.ok)throw new Error("Failed to fetch images");return e.json()}function g(s){const r=document.querySelector(".gallery"),o=s.map(({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:l,comments:u,downloads:f})=>`
      <div class="photo-card">
        <a href="${e}">
          <img src="${i}" alt="${t}" loading="lazy">
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${n}</p>
          <p class="info-item"><b>Views</b> ${l}</p>
          <p class="info-item"><b>Comments</b> ${u}</p>
          <p class="info-item"><b>Downloads</b> ${f}</p>
        </div>
      </div>
    `).join("");r.innerHTML=o}function h(){const s=document.querySelector(".gallery");s.innerHTML=""}const b=document.querySelector("form");document.querySelector(".gallery");const c=document.querySelector(".loader");b.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements.searchQuery.value.trim();if(!r){a.error({title:"Error",message:"Please enter a search query"});return}h(),c.classList.add("visible");try{const o=await y(r);if(o.hits.length===0){a.warning({title:"No Results",message:"No images found. Try a different query."});return}g(o.hits),new d(".gallery a",{captionsData:"alt",captionDelay:250})}catch(o){a.error({title:"Error",message:o.message})}finally{c.classList.remove("visible")}});
//# sourceMappingURL=commonHelpers.js.map
