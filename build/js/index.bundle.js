(()=>{var e={31:()=>{}},t={};function r(o){var c=t[o];if(void 0!==c)return c.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=document.querySelector(".nav-menu"),t=document.querySelector(".nav"),o=document.body;e&&t&&e.addEventListener("click",(()=>{e.classList.toggle("active"),t.classList.toggle("active"),o.classList.toggle("no-scroll")}));const c=document.querySelector(".nav__dropmenu").addEventListener("click",(()=>{c.classList.toggle("active")})),n=document.querySelector(".header__buttons");e.addEventListener("click",(()=>{n.classList.toggle("active")}));var s=r(31);r.n(s)()()})()})();