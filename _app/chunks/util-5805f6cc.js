var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,n=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&i(e,t,a[t]);if(r)for(var t of r(a))o.call(a,t)&&i(e,t,a[t]);return e},c=(e,r)=>a(e,t(r));import{a4 as l,a5 as d,C as p,a6 as u,$ as m,a8 as f,ac as y,S as g,i as h,s as b,e as v,c as O,a as S,d as E,b as w,P as D,f as T,H as L,I as j,J as _,z as x,aa as C,ab as P,L as I}from"./vendor-134b46ff.js";import{_ as J}from"./preload-helper-78524df4.js";let A;let N;const k=l(p({code:"graph TD\n    A[Christmas] --\x3e|Get money| B(Go shopping)\n    B --\x3e C{Let me think}\n    C --\x3e|One| D[Laptop]\n    C --\x3e|Two| E[iPhone]\n    C --\x3e|Three| F[fa:fa-car Car]\n  ",mermaid:JSON.stringify({theme:"default"},null,2),updateEditor:!1,autoSync:!0,updateDiagram:!0}),d(),"codeStore"),V=u([k],(([e],a)=>{a(m(JSON.stringify(e),!0))})),$=e=>{k.update((a=>n(n({},a),e)))};let R=!1;const z=(e,a,t=!1)=>{var r;r=e,A&&(clearTimeout(N),N=setTimeout((function(){const e=r.replace(/^\s*%%.*\n/g,"\n").trimStart().split(" ")[0];console.debug("ga:","send","event","render",e),A.track("render",{graphType:e})}),5e3));if((e.match(/\n/g)||"").length+1>50&&!R&&f(k).autoSync){const e=confirm("Long diagram deteced. Turn off Auto Sync? Click the sync logo to manually sync.");R=!0,e&&$({autoSync:!1})}k.update((r=>c(n({},r),{code:e,updateEditor:a,updateDiagram:t})))},B=(e,a)=>{k.update((t=>c(n({},t),{mermaid:e,updateEditor:a})))},G=()=>JSON.stringify(f(k)),H=p(void 0);function F(e){let a,t;return{c(){a=v("div"),t=v("div"),this.h()},l(e){a=O(e,"DIV",{id:!0,class:!0});var r=S(a);t=O(r,"DIV",{id:!0,class:!0}),S(t).forEach(E),r.forEach(E),this.h()},h(){w(t,"id","container"),w(t,"class","flex-1 overflow-auto"),w(a,"id","view"),w(a,"class","p-2 svelte-5ndy2s"),D(a,"error",e[1]),D(a,"outOfSync",e[2])},m(r,s){T(r,a,s),L(a,t),e[3](t)},p(e,[t]){2&t&&D(a,"error",e[1]),4&t&&D(a,"outOfSync",e[2])},i:j,o:j,d(t){t&&E(a),e[3](null)}}}function M(e,a,t){let r;_(e,k,(e=>t(7,r=e)));let s,o="",i="",n=!1,c=!1,l=!0;return x((()=>{k.subscribe((e=>{try{if(s&&e&&(e.updateDiagram||e.autoSync)){if(e.autoSync||C(k,r.updateDiagram=!1,r),t(2,c=!1),l=!0,o===e.code&&i===e.mermaid)return;o=e.code,i=e.mermaid;const a=s.parentElement.parentElement.parentElement.scrollTop;delete s.dataset.processed,P.exports.initialize(Object.assign({},JSON.parse(e.mermaid))),P.exports.render("graph-div",o,(e=>{t(0,s.innerHTML=e,s)})),t(0,s.parentElement.parentElement.parentElement.scrollTop=a,s),t(1,n=!1)}else l?l=!1:t(2,c=!0)}catch(a){console.log("view fail",a),t(1,n=!0)}})),H.subscribe((e=>{void 0===e?t(1,n=!1):(t(1,n=!0),console.log("Error: ",e))}))})),[s,n,c,function(e){I[e?"unshift":"push"]((()=>{s=e,t(0,s)}))}]}class U extends g{constructor(e){super(),h(this,e,M,F,b,{})}}const q=()=>{(e=>{let a;try{const t=y(e);console.log(`Tring to load state: ${t}`),a=JSON.parse(t);const r="string"==typeof a.mermaid?JSON.parse(a.mermaid):a.mermaid;r.securityLevel&&"strict"!==r.securityLevel&&confirm(`Removing "securityLevel":"${r.securityLevel}" from the config for safety.\nClick Cancel if you trust the source of this Diagram.`)&&delete r.securityLevel,a.mermaid=JSON.stringify(r,null,2)}catch(t){e&&console.error("Init error",t),a=f(k),console.log(a)}$(c(n({},a),{updateEditor:!0}))})(window.location.hash.slice(1))},K=()=>{$({updateDiagram:!0})},Q=async()=>{q(),K(),V.subscribe((e=>{history.replaceState(void 0,void 0,`#${e}`)})),await(async()=>{if(!A)try{const{Analytics:e}=await J((()=>import("./analytics.browser.es-de8d1c22.js")),[]),a=await J((()=>import("./analytics-plugin-ga.browser.es-1cdb0512.js")),[]);A=e({app:"mermaid-live-editor",plugins:[a.init({trackingId:"UA-153180559-1"})]})}catch{console.info("Analytics blocked ;)")}})(),null==A||A.page()};export{U as V,A as a,V as b,k as c,B as d,H as e,G as g,Q as i,K as s,z as u};
