if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/BlobDetailPage-BK410UJF.js",revision:null},{url:"assets/BlobDetailPage-legacy-DFfvX1Nr.js",revision:null},{url:"assets/BlobPage-CMxHGgvb.js",revision:null},{url:"assets/BlobPage-legacy-CUrfl0d0.js",revision:null},{url:"assets/focus-visible-legacy-CdO5cX4I.js",revision:null},{url:"assets/focus-visible-supuXXMI.js",revision:null},{url:"assets/index-9ypjsNm3.css",revision:null},{url:"assets/index-BGTkU9_T.js",revision:null},{url:"assets/index-legacy-Ceg_2l1Z.js",revision:null},{url:"assets/index.esm-BA1fDT99.js",revision:null},{url:"assets/index.esm-legacy-Bt7SmBdK.js",revision:null},{url:"assets/index9-Dz1NayNB.js",revision:null},{url:"assets/index9-legacy-DAkklWha.js",revision:null},{url:"assets/InfoDetailPage-legacy-THMmaV0g.js",revision:null},{url:"assets/InfoDetailPage-xfeOVF6h.js",revision:null},{url:"assets/InfoPage-BPuV-r3g.js",revision:null},{url:"assets/InfoPage-legacy-8dEtOKTA.js",revision:null},{url:"assets/input-shims-B_iWBVbU.js",revision:null},{url:"assets/input-shims-legacy-D1CTcaHR.js",revision:null},{url:"assets/ios.transition-CbiQnIFu.js",revision:null},{url:"assets/ios.transition-legacy-B-X4MQNL.js",revision:null},{url:"assets/keyboard2-legacy-TtbwYwtl.js",revision:null},{url:"assets/keyboard2-ouHskq-t.js",revision:null},{url:"assets/md.transition-BosfGkDf.js",revision:null},{url:"assets/md.transition-legacy-D6-yucJn.js",revision:null},{url:"assets/MePage-0_5jpMFz.js",revision:null},{url:"assets/MePage-C6MqLmwz.css",revision:null},{url:"assets/MePage-legacy-k-f8u7Dq.js",revision:null},{url:"assets/polyfills-legacy-Dpi67whP.js",revision:null},{url:"assets/status-tap-DbcGJLXZ.js",revision:null},{url:"assets/status-tap-legacy-DvBE1Qcs.js",revision:null},{url:"assets/swipe-back-DtrSmr8n.js",revision:null},{url:"assets/swipe-back-legacy-DvUwDJbh.js",revision:null},{url:"index.html",revision:"4f9da7dc4811ade2c9cb38a30e8c1c7e"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"./icon.png",revision:"c46091255bd5d359d0bee80c425cef2e"},{url:"manifest.webmanifest",revision:"5afa7c58a3eab4626d917fbec56c2be4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
