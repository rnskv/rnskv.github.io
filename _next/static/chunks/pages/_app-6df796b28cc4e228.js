(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2010:function(e,t,n){"use strict";n.d(t,{F:function(){return u},f:function(){return s}});var r=n(7294);let o=["light","dark"],a="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=(0,r.createContext)(void 0),c={setTheme:e=>{},themes:[]},u=()=>{var e;return null!==(e=(0,r.useContext)(i))&&void 0!==e?e:c},s=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(f,e),d=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:u=d,defaultTheme:s=n?"system":"light",attribute:f="data-theme",value:p,children:y,nonce:w})=>{let[b,_]=(0,r.useState)(()=>h(c,s)),[E,S]=(0,r.useState)(()=>h(c)),x=p?Object.values(p):u,C=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=g());let a=p?p[r]:r,i=t?v():null,c=document.documentElement;if("class"===f?(c.classList.remove(...x),a&&c.classList.add(a)):a?c.setAttribute(f,a):c.removeAttribute(f),l){let e=o.includes(s)?s:null,t=o.includes(r)?r:e;c.style.colorScheme=t}null==i||i()},[]),T=(0,r.useCallback)(e=>{_(e);try{localStorage.setItem(c,e)}catch(e){}},[e]),$=(0,r.useCallback)(t=>{S(g(t)),"system"===b&&n&&!e&&C("system")},[b,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener($),$(e),()=>e.removeListener($)},[$]),(0,r.useEffect)(()=>{let e=e=>{e.key===c&&T(e.newValue||s)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),(0,r.useEffect)(()=>{C(null!=e?e:b)},[e,b]);let k=(0,r.useMemo)(()=>({theme:b,setTheme:T,forcedTheme:e,resolvedTheme:"system"===b?E:b,themes:n?[...u,"system"]:u,systemTheme:n?E:void 0}),[b,T,e,E,n,u]);return r.createElement(i.Provider,{value:k},r.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:l,storageKey:c,themes:u,defaultTheme:s,attribute:f,value:p,children:y,attrs:x,nonce:w}),y)},m=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:l,enableColorScheme:i,defaultTheme:c,value:u,attrs:s,nonce:d})=>{let f="system"===c,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${s.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=i?o.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,r=!0)=>{let a=u?u[e]:e,l=t?e+"|| ''":`'${a}'`,c="";return i&&r&&!t&&o.includes(e)&&(c+=`d.style.colorScheme = '${e}';`),"class"===n?c+=t||a?`c.add(${l})`:"null":a&&(c+=`d[s](n,${l})`),c},g=e?`!function(){${m}${v(e)}}()`:l?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${v(u?"x[e]":"e",!0)}}${f?"":"else{"+v(c,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${v(u?"x[e]":"e",!0)}}else{${v(c,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:g}})},()=>!0),h=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},g=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4457)}])},4457:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F},fonts:function(){return H}});var r=n(5893),o=n(2031);let a=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),l=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function i(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),n="function"==typeof t.getTextInfo?t.getTextInfo():t.textInfo;if(n)return"rtl"===n.direction;if(t.script)return a.has(t.script)}let t=e.split("-")[0];return l.has(t)}var c=n(7294),u=n(7385);let s=Symbol.for("react-aria.i18n.locale");function d(){let e="undefined"!=typeof window&&window[s]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:i(e)?"rtl":"ltr"}}let f=d(),m=new Set;function h(){for(let e of(f=d(),m))e(f)}let v=c.createContext(null);function g(e){let{locale:t,children:n}=e,r=function(){let e=(0,u.Av)(),[t,n]=(0,c.useState)(f);return((0,c.useEffect)(()=>(0===m.size&&window.addEventListener("languagechange",h),m.add(n),()=>{m.delete(n),0===m.size&&window.removeEventListener("languagechange",h)}),[]),e)?{locale:"en-US",direction:"ltr"}:t}(),o=c.useMemo(()=>t?{locale:t,direction:i(t)?"rtl":"ltr"}:r,[r,t]);return c.createElement(v.Provider,{value:o},n)}let p=null;function y(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent))}function w(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function b(){return w(/^Mac/i)}let _=(0,c.createContext)({isNative:!0,open:function(e,t){x(e,e=>S(e,t))},useHref:e=>e});function E(e){let{children:t,navigate:n,useHref:r}=e,o=(0,c.useMemo)(()=>({isNative:!1,open:(e,t,r,o)=>{x(e,e=>{let a;(a=e.getAttribute("target"))&&"_self"!==a||e.origin!==location.origin||e.hasAttribute("download")||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey?S(e,t):n(r,o)})},useHref:r||(e=>e)}),[n,r]);return c.createElement(_.Provider,{value:o},t)}function S(e,t,n=!0){var r,o;let{metaKey:a,ctrlKey:l,altKey:i,shiftKey:c}=t;y(/Firefox/i)&&(null===(o=window.event)||void 0===o?void 0:null===(r=o.type)||void 0===r?void 0:r.startsWith("key"))&&"_blank"===e.target&&(b()?a=!0:l=!0);let u=y(/AppleWebKit/i)&&!y(/Chrome/i)&&b()&&!(w(/^iPad/i)||b()&&navigator.maxTouchPoints>1)?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:a,ctrlKey:l,altKey:i,shiftKey:c}):new MouseEvent("click",{metaKey:a,ctrlKey:l,altKey:i,shiftKey:c,bubbles:!0,cancelable:!0});S.isOpening=n,function(e){if(function(){if(null==p){p=!1;try{document.createElement("div").focus({get preventScroll(){return p=!0,!0}})}catch(e){}}return p}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}(e),e.dispatchEvent(u),S.isOpening=!1}function x(e,t){if(e instanceof HTMLAnchorElement)t(e);else if(e.hasAttribute("data-href")){let n=document.createElement("a");n.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(n.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(n.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(n.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(n.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(n.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(n),t(n),e.removeChild(n)}}S.isOpening=!1,n(3935);let C=c.createContext(null);function T(e){let{children:t}=e,n=(0,c.useContext)(C),[r,o]=(0,c.useState)(0),a=(0,c.useMemo)(()=>({parent:n,modalCount:r,addModal(){o(e=>e+1),n&&n.addModal()},removeModal(){o(e=>e-1),n&&n.removeModal()}}),[n,r]);return c.createElement(C.Provider,{value:a},t)}function $(e){let t;let{modalProviderProps:n}={modalProviderProps:{"aria-hidden":!!(t=(0,c.useContext)(C))&&t.modalCount>0||null}};return c.createElement("div",{"data-overlay-container":!0,...e,...n})}function k(e){return c.createElement(T,null,c.createElement($,e))}var A=n(2081),L=({children:e,navigate:t,useHref:n,disableAnimation:a=!1,disableRipple:l=!1,skipFramerMotionAnimations:i=a,validationBehavior:u="aria",locale:s="en-US",defaultDates:d,createCalendar:f,...m})=>{let h=e;t&&(h=(0,r.jsx)(E,{navigate:t,useHref:n,children:h}));let v=(0,c.useMemo)(()=>(a&&i&&(A.c.skipAnimations=!0),{createCalendar:f,defaultDates:d,disableAnimation:a,disableRipple:l,validationBehavior:u}),[f,null==d?void 0:d.maxDate,null==d?void 0:d.minDate,a,l,u]);return(0,r.jsx)(o.a,{value:v,children:(0,r.jsx)(g,{locale:s,children:(0,r.jsx)(k,{...m,children:h})})})},M=n(2010),K=n(1163),N=n(9556),I=n.n(N),P=n(6510),O=n.n(P);function F(e){let{Component:t,pageProps:n}=e,o=(0,K.useRouter)();return(0,r.jsx)(L,{navigate:o.push,children:(0,r.jsx)(M.f,{children:(0,r.jsx)(t,{...n})})})}n(9311);let H={sans:I().style.fontFamily,mono:O().style.fontFamily}},9311:function(){},6510:function(e){e.exports={style:{fontFamily:"'__Fira_Code_74c79e', '__Fira_Code_Fallback_74c79e'",fontStyle:"normal"},className:"__className_74c79e",variable:"__variable_74c79e"}},9556:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78",variable:"__variable_d65c78"}},1163:function(e,t,n){e.exports=n(9090)},2031:function(e,t,n){"use strict";n.d(t,{a:function(){return o},w:function(){return a}});var r=n(7294),[o,a]=function(e={}){let{strict:t=!0,errorMessage:n="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:o}=e,a=r.createContext(void 0);return a.displayName=o,[a.Provider,function e(){var o;let l=r.useContext(a);if(!l&&t){let t=Error(n);throw t.name="ContextError",null==(o=Error.captureStackTrace)||o.call(Error,t,e),t}return l},a]}({name:"ProviderContext",strict:!1})},7385:function(e,t,n){"use strict";n.d(t,{Av:function(){return m},gP:function(){return u}});var r=n(7294);let o={prefix:String(Math.round(1e10*Math.random())),current:0},a=r.createContext(o),l=r.createContext(!1),i=!!("undefined"!=typeof window&&window.document&&window.document.createElement),c=new WeakMap,u="function"==typeof r.useId?function(e){let t=r.useId(),[n]=(0,r.useState)(m()),a=n?"react-aria":`react-aria${o.prefix}`;return e||`${a}-${t}`}:function(e){let t=(0,r.useContext)(a);t!==o||i||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=function(e=!1){let t=(0,r.useContext)(a),n=(0,r.useRef)(null);if(null===n.current&&!e){var o,l;let e=null===(l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===l?void 0:null===(o=l.ReactCurrentOwner)||void 0===o?void 0:o.current;if(e){let n=c.get(e);null==n?c.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(t.current=n.id,c.delete(e))}n.current=++t.current}return n.current}(!!e),l=`react-aria${t.prefix}`;return e||`${l}-${n}`};function s(){return!1}function d(){return!0}function f(e){return()=>{}}function m(){return"function"==typeof r.useSyncExternalStore?r.useSyncExternalStore(f,s,d):(0,r.useContext)(l)}},2081:function(e,t,n){"use strict";n.d(t,{c:function(){return r}});let r={skipAnimations:!1,useManualTiming:!1}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(9090)}),_N_E=e.O()}]);