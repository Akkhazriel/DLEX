(()=>{"use strict";const e=document.querySelector(".nav-menu"),t=document.querySelector(".nav"),c=document.body;alert(),e&&t&&e.addEventListener("click",(()=>{e.classList.toggle("active"),t.classList.toggle("active"),c.classList.toggle("no-scroll")}));const s=document.querySelector(".nav__dropmenu").addEventListener("click",(()=>{s.classList.toggle("active")})),o=document.querySelector(".header__buttons");e.addEventListener("click",(()=>{o.classList.toggle("active")}))})();