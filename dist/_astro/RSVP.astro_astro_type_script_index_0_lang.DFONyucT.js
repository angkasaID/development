import{d as f}from"./firebase.Cce6toix.js";window.getGuestNameFromUrl=function(){let e=new URLSearchParams(window.location.search).get("to");return!e||e===null||e.trim()===""||(e=String(e).trim().replace(/\+/g," ").replace(/-/g," "),!e||e.trim()==="")?"Tamu Undangan":e};window.showSuccessToast=function(){const t=document.getElementById("success-toast");t&&(t.classList.remove("hidden"),requestAnimationFrame(()=>{t.classList.remove("translate-x-full")}),setTimeout(()=>{t.classList.add("translate-x-full"),setTimeout(()=>t.classList.add("hidden"),300)},3e3))};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("status-dropdown"),e=document.getElementById("status-options"),i=document.getElementById("status-text"),c=document.getElementById("rsvp-status-modal"),o=t.querySelector(".arrow-icon");t.addEventListener("click",()=>{e.classList.toggle("hidden"),o.style.transform=e.classList.contains("hidden")?"rotate(0deg)":"rotate(180deg)"}),document.querySelectorAll(".option-item").forEach(a=>{a.addEventListener("click",()=>{const d=a.dataset.value;c.value=d,i.textContent=d,e.classList.add("hidden"),o.style.transform="rotate(0deg)"})}),document.addEventListener("click",a=>{!t.contains(a.target)&&!e.contains(a.target)&&(e.classList.add("hidden"),o.style.transform="rotate(0deg)")})});let h=[],y=6;document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("send-rsvp-btn-modal"),e=document.getElementById("rsvp-messages"),i=document.getElementById("rsvp-name-modal"),c=document.getElementById("load-more-btn"),o=document.getElementById("rsvp-greeting-name"),a=document.getElementById("rsvp-status-modal"),d=document.getElementById("rsvp-message-modal"),u=window.getGuestNameFromUrl();o.textContent=u,i.value=u,t.addEventListener("click",()=>{f.ref("rsvp").push({name:i.value.trim()||"Tamu Undangan",status:a.value,message:d.value,count:1,timestamp:Date.now()}),window.showSuccessToast(),d.value=""});function g(){if(!e)return;e.innerHTML="",h.slice().reverse().slice(0,y).forEach(n=>{const r=n.status==="Hadir",s=document.createElement("div");s.className=`
          flex items-end mb-3 
          ${r?"justify-start":"justify-end"}
          opacity-0 translate-y-3
        `;const l=document.createElement("div");l.innerText=n.name.charAt(0).toUpperCase(),l.className=`
          w-8 h-8 rounded-full flex items-center justify-center
          text-white font-semibold shadow 
          bg-gray-400 flex-shrink-0
        `;const v=new Date(n.timestamp),w=v.getHours().toString().padStart(2,"0"),E=v.getMinutes().toString().padStart(2,"0"),m=document.createElement("div");m.className=`
          relative px-4 py-2 rounded-lg shadow max-w-[75%] w-fit break-words
          ${r?"bg-lime-100 text-left rounded-bl-none":"bg-red-100 text-right rounded-br-none"}
        `,m.innerHTML=`
          <div class="text-xs text-gray-500 font-semibold mb-1">
            ${n.name} • ${w}:${E}
          </div>
          <div class="text-sm mb-1">${n.message||"<i>Tidak ada pesan</i>"}</div>
          <div class="text-xs text-gray-600">Status: ${n.status}</div>
        `,r?(s.appendChild(l),s.appendChild(m)):(s.appendChild(m),s.appendChild(l)),e.appendChild(s),requestAnimationFrame(()=>{s.style.transition="all 0.25s ease",s.style.opacity=1,s.style.transform="translateY(0)"})}),e.scrollTop=e.scrollHeight}e&&f.ref("rsvp").orderByChild("timestamp").on("value",p=>{const n=p.val()||{};h=Object.values(n).sort((r,s)=>r.timestamp-s.timestamp),g()}),c.addEventListener("click",()=>{y+=6,g()})});
