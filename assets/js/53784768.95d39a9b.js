"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"devops-guide-requirements",title:"Requirements"},d=void 0,c={unversionedId:"devops-guide/devops-guide-requirements",id:"devops-guide/devops-guide-requirements",title:"Requirements",description:"Jitsi Meet is a real-time system.",source:"@site/docs/devops-guide/requirements.md",sourceDirName:"devops-guide",slug:"/devops-guide/devops-guide-requirements",permalink:"/handbook/docs/devops-guide/devops-guide-requirements",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/devops-guide/requirements.md",tags:[],version:"current",lastUpdatedAt:1657523101,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"devops-guide-requirements",title:"Requirements"},sidebar:"docs",previous:{title:"Overview",permalink:"/handbook/docs/devops-guide/"},next:{title:"Debian/Ubuntu server",permalink:"/handbook/docs/devops-guide/devops-guide-quickstart"}},l={},u=[],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Jitsi Meet is a real-time system.\nRequirements are very different from a web server and depend on many factors.\nMiscalculations can very easily destroy basic functionality rather than cause slow performance.\nAvoid adding other functions to your Jitsi Meet setup as it can harm performance and complicate optimizations."),(0,i.kt)("p",{parentName:"div"},"Note that Jitsi Meet design priorizes scalability by adding servers on using a huge server. Check Jitsi-videobridge documentation on adding several bridges to a Jitsi Meet server, and OCTO to go even beyond that (federation of Jitsi Meet servers). If you feel that you are a network and server administration newbie, don't even think of going there."))),(0,i.kt)("h1",{id:"jitsi-meet-needs-by-order-of-importance"},"Jitsi Meet needs, by order of importance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Network link: basic speed and reliability are essential. Check speed against the provider claims using any download tool (or ftp), and\nverify latency using a tool such as iperf3.\nExact calculation is very complex and depend on many optimisations and tricks, but you should at least remember these numbers on resolution:\n180 = 200 kbits/s\n360 = 500 kbits/s\n720 (HD) = 2500 kbits/s\n4k = 10 Mbits/s\nSo don't expect to have 20 users using 4K on a server with 100Mbits/s upload and download.\nFor a friends/small organization server, 1 Gbits/s will often be enough but for a serious server 10 Gbits/s\nis advisable. Several (or many...) bridges having each a 10 Gbits/s link are used by big deployments.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"These requirements concern the videobridge. If there are only external videobridges (as can be the case on high end Jitsi Meet servers), network performance matters much less.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RAM:")," it's usually suggested to get 8 GB.\nFor small meetings you can get away with 4 GB, for test servers or very small meetings you can try to use 2 GB.\nFor big meetings it's suggested to go the scalable way over getting huge amounts of memory.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"CPU:")," very low processor performance can seriously harm a real time system, especially when using a shared server (where your CPU performance can be stolen by other customers of your hoster, check on 'dedicated CPU' if you are getting a VPS, rather than a physical server). However, a consideration is that a Jitsi Meet component, Prosody, can only use ONE (1) core. So getting a lot of cores, let's say more than 32, is not always useful. For a basic server, 4 dedicated cores can be enough.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Disk:")," unless you are doing heavy logging or have very specific needs, you can get away with 250 Gbytes of standard hard disk.\nSSD are more a nice to have than a necessity."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If you want additional services, requirements can go up.")),(0,i.kt)("h1",{id:"recording"},"Recording"),(0,i.kt)("p",null,"Jibri needs ONE system per recording.\nOne Jibri instance = one meeting. For 5 meetings recorded simultaneously, you need 5 Jibris.\nThere is no workaround to that.\nIf you are knowledgeable, you can setup Jibris in containers and use a big server to save a bit on resources but that's about it."),(0,i.kt)("p",null,"Jibri RAM and CPU needs are far higher than Jitsi Meet itself, as it does video encoding.\nFor ",(0,i.kt)("inlineCode",{parentName:"p"},"1080x720")," you currently need at least 8 GB RAM, for ",(0,i.kt)("inlineCode",{parentName:"p"},"1280x1024")," 12 GB (this is for recording a ",(0,i.kt)("strong",{parentName:"p"},"single"),"  meeting).\nIf memory is not sufficient or CPU can't encode fast enough, recordings will fail."),(0,i.kt)("p",null,"While Jibri and Jitsi Meet can technically be hosted in a single server, it's not recommended because Jibri is a resource drain and it can harm Jitsi Meet performance, and can exhaust disk space and stop Jitsi Meet function altogether."))}m.isMDXComponent=!0}}]);