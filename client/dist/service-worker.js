if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let d={};const o=e=>c(e,n),t={module:{uri:n},exports:d,require:o};s[n]=Promise.all(i.map((e=>t[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/bundle.js",revision:"8d4a87cc416dc25f6ce6075949a21954"},{url:"/bundle.js.LICENSE.txt",revision:"c1bdf306936ddd82567a345834b1f9d5"},{url:"/css/App.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/css/index.css",revision:"6c2104b8d219ed99234ae2d6329f4357"},{url:"/index.html",revision:"3f2ca0ca3f1d860364154828c706cf7e"},{url:"/main.css",revision:"8a5cb2a87cba69bd196445cc322cd400"}],{})}));