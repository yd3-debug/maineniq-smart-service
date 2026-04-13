import{r as i,R as S,a as Bt,b as Ht,c as He}from"./react-vendor-BuzZ45xS.js";var $e={exports:{}},re={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $t=i,Ut=Symbol.for("react.element"),Zt=Symbol.for("react.fragment"),Kt=Object.prototype.hasOwnProperty,Gt=$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xt={key:!0,ref:!0,__self:!0,__source:!0};function Ue(e,t,n){var r,a={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Kt.call(t,r)&&!Xt.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Ut,type:e,key:o,ref:s,props:a,_owner:Gt.current}}re.Fragment=Zt;re.jsx=Ue;re.jsxs=Ue;$e.exports=re;var y=$e.exports;function I(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function De(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Ze(...e){return t=>{let n=!1;const r=e.map(a=>{const o=De(a,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let a=0;a<r.length;a++){const o=r[a];typeof o=="function"?o():De(e[a],null)}}}}function N(...e){return i.useCallback(Ze(...e),e)}function Yt(e,t){const n=i.createContext(t),r=o=>{const{children:s,...c}=o,f=i.useMemo(()=>c,Object.values(c));return y.jsx(n.Provider,{value:f,children:s})};r.displayName=e+"Provider";function a(o){const s=i.useContext(n);if(s)return s;if(t!==void 0)return t;throw new Error(`\`${o}\` must be used within \`${e}\``)}return[r,a]}function ae(e,t=[]){let n=[];function r(o,s){const c=i.createContext(s),f=n.length;n=[...n,s];const l=p=>{var C;const{scope:v,children:k,...w}=p,u=((C=v==null?void 0:v[e])==null?void 0:C[f])||c,m=i.useMemo(()=>w,Object.values(w));return y.jsx(u.Provider,{value:m,children:k})};l.displayName=o+"Provider";function h(p,v){var u;const k=((u=v==null?void 0:v[e])==null?void 0:u[f])||c,w=i.useContext(k);if(w)return w;if(s!==void 0)return s;throw new Error(`\`${p}\` must be used within \`${o}\``)}return[l,h]}const a=()=>{const o=n.map(s=>i.createContext(s));return function(c){const f=(c==null?void 0:c[e])||o;return i.useMemo(()=>({[`__scope${e}`]:{...c,[e]:f}}),[c,f])}};return a.scopeName=e,[r,Qt(a,...t)]}function Qt(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(o){const s=r.reduce((c,{useScope:f,scopeName:l})=>{const p=f(o)[`__scope${l}`];return{...c,...p}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function $(e){const t=Jt(e),n=i.forwardRef((r,a)=>{const{children:o,...s}=r,c=i.Children.toArray(o),f=c.find(en);if(f){const l=f.props.children,h=c.map(p=>p===f?i.Children.count(l)>1?i.Children.only(null):i.isValidElement(l)?l.props.children:null:p);return y.jsx(t,{...s,ref:a,children:i.isValidElement(l)?i.cloneElement(l,void 0,h):null})}return y.jsx(t,{...s,ref:a,children:o})});return n.displayName=`${e}.Slot`,n}var Zr=$("Slot");function Jt(e){const t=i.forwardRef((n,r)=>{const{children:a,...o}=n;if(i.isValidElement(a)){const s=nn(a),c=tn(o,a.props);return a.type!==i.Fragment&&(c.ref=r?Ze(r,s):s),i.cloneElement(a,c)}return i.Children.count(a)>1?i.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Ke=Symbol("radix.slottable");function Kr(e){const t=({children:n})=>y.jsx(y.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=Ke,t}function en(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Ke}function tn(e,t){const n={...t};for(const r in t){const a=e[r],o=t[r];/^on[A-Z]/.test(r)?a&&o?n[r]=(...c)=>{const f=o(...c);return a(...c),f}:a&&(n[r]=a):r==="style"?n[r]={...a,...o}:r==="className"&&(n[r]=[a,o].filter(Boolean).join(" "))}return{...e,...n}}function nn(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function rn(e){const t=e+"CollectionProvider",[n,r]=ae(t),[a,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=u=>{const{scope:m,children:C}=u,g=S.useRef(null),b=S.useRef(new Map).current;return y.jsx(a,{scope:m,itemMap:b,collectionRef:g,children:C})};s.displayName=t;const c=e+"CollectionSlot",f=$(c),l=S.forwardRef((u,m)=>{const{scope:C,children:g}=u,b=o(c,C),x=N(m,b.collectionRef);return y.jsx(f,{ref:x,children:g})});l.displayName=c;const h=e+"CollectionItemSlot",p="data-radix-collection-item",v=$(h),k=S.forwardRef((u,m)=>{const{scope:C,children:g,...b}=u,x=S.useRef(null),E=N(m,x),A=o(h,C);return S.useEffect(()=>(A.itemMap.set(x,{ref:x,...b}),()=>void A.itemMap.delete(x))),y.jsx(v,{[p]:"",ref:E,children:g})});k.displayName=h;function w(u){const m=o(e+"CollectionConsumer",u);return S.useCallback(()=>{const g=m.collectionRef.current;if(!g)return[];const b=Array.from(g.querySelectorAll(`[${p}]`));return Array.from(m.itemMap.values()).sort((A,M)=>b.indexOf(A.ref.current)-b.indexOf(M.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:s,Slot:l,ItemSlot:k},w,r]}var an=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],R=an.reduce((e,t)=>{const n=$(`Primitive.${t}`),r=i.forwardRef((a,o)=>{const{asChild:s,...c}=a,f=s?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),y.jsx(f,{...c,ref:o})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function on(e,t){e&&Bt.flushSync(()=>e.dispatchEvent(t))}function U(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function cn(e,t=globalThis==null?void 0:globalThis.document){const n=U(e);i.useEffect(()=>{const r=a=>{a.key==="Escape"&&n(a)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var sn="DismissableLayer",ge="dismissableLayer.update",ln="dismissableLayer.pointerDownOutside",un="dismissableLayer.focusOutside",Oe,Ge=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),be=i.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:o,onInteractOutside:s,onDismiss:c,...f}=e,l=i.useContext(Ge),[h,p]=i.useState(null),v=(h==null?void 0:h.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,k]=i.useState({}),w=N(t,M=>p(M)),u=Array.from(l.layers),[m]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),C=u.indexOf(m),g=h?u.indexOf(h):-1,b=l.layersWithOutsidePointerEventsDisabled.size>0,x=g>=C,E=fn(M=>{const P=M.target,_=[...l.branches].some(F=>F.contains(P));!x||_||(a==null||a(M),s==null||s(M),M.defaultPrevented||c==null||c())},v),A=hn(M=>{const P=M.target;[...l.branches].some(F=>F.contains(P))||(o==null||o(M),s==null||s(M),M.defaultPrevented||c==null||c())},v);return cn(M=>{g===l.layers.size-1&&(r==null||r(M),!M.defaultPrevented&&c&&(M.preventDefault(),c()))},v),i.useEffect(()=>{if(h)return n&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(Oe=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(h)),l.layers.add(h),Te(),()=>{n&&l.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=Oe)}},[h,v,n,l]),i.useEffect(()=>()=>{h&&(l.layers.delete(h),l.layersWithOutsidePointerEventsDisabled.delete(h),Te())},[h,l]),i.useEffect(()=>{const M=()=>k({});return document.addEventListener(ge,M),()=>document.removeEventListener(ge,M)},[]),y.jsx(R.div,{...f,ref:w,style:{pointerEvents:b?x?"auto":"none":void 0,...e.style},onFocusCapture:I(e.onFocusCapture,A.onFocusCapture),onBlurCapture:I(e.onBlurCapture,A.onBlurCapture),onPointerDownCapture:I(e.onPointerDownCapture,E.onPointerDownCapture)})});be.displayName=sn;var dn="DismissableLayerBranch",Xe=i.forwardRef((e,t)=>{const n=i.useContext(Ge),r=i.useRef(null),a=N(t,r);return i.useEffect(()=>{const o=r.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),y.jsx(R.div,{...e,ref:a})});Xe.displayName=dn;function fn(e,t=globalThis==null?void 0:globalThis.document){const n=U(e),r=i.useRef(!1),a=i.useRef(()=>{});return i.useEffect(()=>{const o=c=>{if(c.target&&!r.current){let f=function(){Ye(ln,n,l,{discrete:!0})};const l={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=f,t.addEventListener("click",a.current,{once:!0})):f()}else t.removeEventListener("click",a.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",o),t.removeEventListener("click",a.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function hn(e,t=globalThis==null?void 0:globalThis.document){const n=U(e),r=i.useRef(!1);return i.useEffect(()=>{const a=o=>{o.target&&!r.current&&Ye(un,n,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Te(){const e=new CustomEvent(ge);document.dispatchEvent(e)}function Ye(e,t,n,{discrete:r}){const a=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),r?on(a,o):a.dispatchEvent(o)}var Gr=be,Xr=Xe,B=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},pn="Portal",Qe=i.forwardRef((e,t)=>{var c;const{container:n,...r}=e,[a,o]=i.useState(!1);B(()=>o(!0),[]);const s=n||a&&((c=globalThis==null?void 0:globalThis.document)==null?void 0:c.body);return s?Ht.createPortal(y.jsx(R.div,{...r,ref:t}),s):null});Qe.displayName=pn;function yn(e,t){return i.useReducer((n,r)=>t[n][r]??n,e)}var Z=e=>{const{present:t,children:n}=e,r=vn(t),a=typeof n=="function"?n({present:r.isPresent}):i.Children.only(n),o=N(r.ref,mn(a));return typeof n=="function"||r.isPresent?i.cloneElement(a,{ref:o}):null};Z.displayName="Presence";function vn(e){const[t,n]=i.useState(),r=i.useRef(null),a=i.useRef(e),o=i.useRef("none"),s=e?"mounted":"unmounted",[c,f]=yn(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const l=K(r.current);o.current=c==="mounted"?l:"none"},[c]),B(()=>{const l=r.current,h=a.current;if(h!==e){const v=o.current,k=K(l);e?f("MOUNT"):k==="none"||(l==null?void 0:l.display)==="none"?f("UNMOUNT"):f(h&&v!==k?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,f]),B(()=>{if(t){let l;const h=t.ownerDocument.defaultView??window,p=k=>{const u=K(r.current).includes(k.animationName);if(k.target===t&&u&&(f("ANIMATION_END"),!a.current)){const m=t.style.animationFillMode;t.style.animationFillMode="forwards",l=h.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=m)})}},v=k=>{k.target===t&&(o.current=K(r.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{h.clearTimeout(l),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:i.useCallback(l=>{r.current=l?getComputedStyle(l):null,n(l)},[])}}function K(e){return(e==null?void 0:e.animationName)||"none"}function mn(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var gn=He[" useInsertionEffect ".trim().toString()]||B;function oe({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[a,o,s]=kn({defaultProp:t,onChange:n}),c=e!==void 0,f=c?e:a;{const h=i.useRef(e!==void 0);i.useEffect(()=>{const p=h.current;p!==c&&console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),h.current=c},[c,r])}const l=i.useCallback(h=>{var p;if(c){const v=Cn(h)?h(e):h;v!==e&&((p=s.current)==null||p.call(s,v))}else o(h)},[c,e,o,s]);return[f,l]}function kn({defaultProp:e,onChange:t}){const[n,r]=i.useState(e),a=i.useRef(n),o=i.useRef(t);return gn(()=>{o.current=t},[t]),i.useEffect(()=>{var s;a.current!==n&&((s=o.current)==null||s.call(o,n),a.current=n)},[n,a]),[n,r,o]}function Cn(e){return typeof e=="function"}/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Je=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:o,iconNode:s,...c},f)=>i.createElement("svg",{ref:f,...xn,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Je("lucide",a),...c},[...s.map(([l,h])=>i.createElement(l,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(e,t)=>{const n=i.forwardRef(({className:r,...a},o)=>i.createElement(Mn,{ref:o,iconNode:t,className:Je(`lucide-${bn(e)}`,r),...a}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=d("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=d("AppWindow",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=d("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=d("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=d("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=d("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=d("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=d("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=d("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=d("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=d("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=d("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=d("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=d("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=d("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=d("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=d("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=d("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=d("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=d("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=d("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=d("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=d("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=d("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=d("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=d("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=d("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=d("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=d("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=d("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=d("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=d("Fan",[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=d("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=d("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=d("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=d("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=d("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=d("Hammer",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=d("HardHat",[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=d("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=d("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=d("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=d("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=d("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=d("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=d("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=d("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=d("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=d("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=d("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=d("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=d("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=d("PaintBucket",[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=d("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=d("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=d("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=d("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=d("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=d("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=d("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=d("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=d("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=d("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=d("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=d("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=d("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=d("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=d("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=d("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=d("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=d("ThermometerSun",[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=d("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=d("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=d("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=d("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=d("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=d("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=d("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=d("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=d("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=d("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=d("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=d("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=d("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=d("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=d("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=d("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);var wn=He[" useId ".trim().toString()]||(()=>{}),En=0;function H(e){const[t,n]=i.useState(wn());return B(()=>{e||n(r=>r??String(En++))},[e]),e||(t?`radix-${t}`:"")}var de=0;function Sn(){i.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Ie()),document.body.insertAdjacentElement("beforeend",e[1]??Ie()),de++,()=>{de===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),de--}},[])}function Ie(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var fe="focusScope.autoFocusOnMount",he="focusScope.autoFocusOnUnmount",_e={bubbles:!1,cancelable:!0},An="FocusScope",et=i.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:o,...s}=e,[c,f]=i.useState(null),l=U(a),h=U(o),p=i.useRef(null),v=N(t,u=>f(u)),k=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let u=function(b){if(k.paused||!c)return;const x=b.target;c.contains(x)?p.current=x:L(p.current,{select:!0})},m=function(b){if(k.paused||!c)return;const x=b.relatedTarget;x!==null&&(c.contains(x)||L(p.current,{select:!0}))},C=function(b){if(document.activeElement===document.body)for(const E of b)E.removedNodes.length>0&&L(c)};document.addEventListener("focusin",u),document.addEventListener("focusout",m);const g=new MutationObserver(C);return c&&g.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",m),g.disconnect()}}},[r,c,k.paused]),i.useEffect(()=>{if(c){je.add(k);const u=document.activeElement;if(!c.contains(u)){const C=new CustomEvent(fe,_e);c.addEventListener(fe,l),c.dispatchEvent(C),C.defaultPrevented||(Rn(Tn(tt(c)),{select:!0}),document.activeElement===u&&L(c))}return()=>{c.removeEventListener(fe,l),setTimeout(()=>{const C=new CustomEvent(he,_e);c.addEventListener(he,h),c.dispatchEvent(C),C.defaultPrevented||L(u??document.body,{select:!0}),c.removeEventListener(he,h),je.remove(k)},0)}}},[c,l,h,k]);const w=i.useCallback(u=>{if(!n&&!r||k.paused)return;const m=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,C=document.activeElement;if(m&&C){const g=u.currentTarget,[b,x]=Pn(g);b&&x?!u.shiftKey&&C===x?(u.preventDefault(),n&&L(b,{select:!0})):u.shiftKey&&C===b&&(u.preventDefault(),n&&L(x,{select:!0})):C===g&&u.preventDefault()}},[n,r,k.paused]);return y.jsx(R.div,{tabIndex:-1,...s,ref:v,onKeyDown:w})});et.displayName=An;function Rn(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(L(r,{select:t}),document.activeElement!==n)return}function Pn(e){const t=tt(e),n=Le(t,e),r=Le(t.reverse(),e);return[n,r]}function tt(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Le(e,t){for(const n of e)if(!Nn(n,{upTo:t}))return n}function Nn(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Dn(e){return e instanceof HTMLInputElement&&"select"in e}function L(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Dn(e)&&t&&e.select()}}var je=On();function On(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Fe(e,t),e.unshift(t)},remove(t){var n;e=Fe(e,t),(n=e[0])==null||n.resume()}}}function Fe(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Tn(e){return e.filter(t=>t.tagName!=="A")}var In=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},z=new WeakMap,G=new WeakMap,X={},pe=0,nt=function(e){return e&&(e.host||nt(e.parentNode))},_n=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=nt(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Ln=function(e,t,n,r){var a=_n(t,Array.isArray(e)?e:[e]);X[n]||(X[n]=new WeakMap);var o=X[n],s=[],c=new Set,f=new Set(a),l=function(p){!p||c.has(p)||(c.add(p),l(p.parentNode))};a.forEach(l);var h=function(p){!p||f.has(p)||Array.prototype.forEach.call(p.children,function(v){if(c.has(v))h(v);else try{var k=v.getAttribute(r),w=k!==null&&k!=="false",u=(z.get(v)||0)+1,m=(o.get(v)||0)+1;z.set(v,u),o.set(v,m),s.push(v),u===1&&w&&G.set(v,!0),m===1&&v.setAttribute(n,"true"),w||v.setAttribute(r,"true")}catch(C){console.error("aria-hidden: cannot operate on ",v,C)}})};return h(t),c.clear(),pe++,function(){s.forEach(function(p){var v=z.get(p)-1,k=o.get(p)-1;z.set(p,v),o.set(p,k),v||(G.has(p)||p.removeAttribute(r),G.delete(p)),k||p.removeAttribute(n)}),pe--,pe||(z=new WeakMap,z=new WeakMap,G=new WeakMap,X={})}},jn=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=In(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),Ln(r,a,n,"aria-hidden")):function(){return null}},T=function(){return T=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},T.apply(this,arguments)};function rt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function Fn(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,o;r<a;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var J="right-scroll-bar-position",ee="width-before-scroll-bar",zn="with-scroll-bars-hidden",Wn="--removed-body-scroll-bar-size";function ye(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function qn(e,t){var n=i.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var Vn=typeof window<"u"?i.useLayoutEffect:i.useEffect,ze=new WeakMap;function Bn(e,t){var n=qn(null,function(r){return e.forEach(function(a){return ye(a,r)})});return Vn(function(){var r=ze.get(n);if(r){var a=new Set(r),o=new Set(e),s=n.current;a.forEach(function(c){o.has(c)||ye(c,null)}),o.forEach(function(c){a.has(c)||ye(c,s)})}ze.set(n,e)},[e]),n}function Hn(e){return e}function $n(e,t){t===void 0&&(t=Hn);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(o){var s=t(o,r);return n.push(s),function(){n=n.filter(function(c){return c!==s})}},assignSyncMedium:function(o){for(r=!0;n.length;){var s=n;n=[],s.forEach(o)}n={push:function(c){return o(c)},filter:function(){return n}}},assignMedium:function(o){r=!0;var s=[];if(n.length){var c=n;n=[],c.forEach(o),s=n}var f=function(){var h=s;s=[],h.forEach(o)},l=function(){return Promise.resolve().then(f)};l(),n={push:function(h){s.push(h),l()},filter:function(h){return s=s.filter(h),n}}}};return a}function Un(e){e===void 0&&(e={});var t=$n(null);return t.options=T({async:!0,ssr:!1},e),t}var at=function(e){var t=e.sideCar,n=rt(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return i.createElement(r,T({},n))};at.isSideCarExport=!0;function Zn(e,t){return e.useMedium(t),at}var ot=Un(),ve=function(){},ce=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:ve,onWheelCapture:ve,onTouchMoveCapture:ve}),a=r[0],o=r[1],s=e.forwardProps,c=e.children,f=e.className,l=e.removeScrollBar,h=e.enabled,p=e.shards,v=e.sideCar,k=e.noRelative,w=e.noIsolation,u=e.inert,m=e.allowPinchZoom,C=e.as,g=C===void 0?"div":C,b=e.gapMode,x=rt(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),E=v,A=Bn([n,t]),M=T(T({},x),a);return i.createElement(i.Fragment,null,h&&i.createElement(E,{sideCar:ot,removeScrollBar:l,shards:p,noRelative:k,noIsolation:w,inert:u,setCallbacks:o,allowPinchZoom:!!m,lockRef:n,gapMode:b}),s?i.cloneElement(i.Children.only(c),T(T({},M),{ref:A})):i.createElement(g,T({},M,{className:f,ref:A}),c))});ce.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ce.classNames={fullWidth:ee,zeroRight:J};var Kn=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Gn(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Kn();return t&&e.setAttribute("nonce",t),e}function Xn(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Yn(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Qn=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Gn())&&(Xn(t,n),Yn(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Jn=function(){var e=Qn();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},ct=function(){var e=Jn(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},er={left:0,top:0,right:0,gap:0},me=function(e){return parseInt(e||"",10)||0},tr=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[me(n),me(r),me(a)]},nr=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return er;var t=tr(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},rr=ct(),V="data-scroll-locked",ar=function(e,t,n,r){var a=e.left,o=e.top,s=e.right,c=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(zn,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(c,"px ").concat(r,`;
  }
  body[`).concat(V,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(J,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(ee,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(J," .").concat(J,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(ee," .").concat(ee,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(V,`] {
    `).concat(Wn,": ").concat(c,`px;
  }
`)},We=function(){var e=parseInt(document.body.getAttribute(V)||"0",10);return isFinite(e)?e:0},or=function(){i.useEffect(function(){return document.body.setAttribute(V,(We()+1).toString()),function(){var e=We()-1;e<=0?document.body.removeAttribute(V):document.body.setAttribute(V,e.toString())}},[])},cr=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;or();var o=i.useMemo(function(){return nr(a)},[a]);return i.createElement(rr,{styles:ar(o,!t,a,n?"":"!important")})},ke=!1;if(typeof window<"u")try{var Y=Object.defineProperty({},"passive",{get:function(){return ke=!0,!0}});window.addEventListener("test",Y,Y),window.removeEventListener("test",Y,Y)}catch{ke=!1}var W=ke?{passive:!1}:!1,ir=function(e){return e.tagName==="TEXTAREA"},it=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!ir(e)&&n[t]==="visible")},sr=function(e){return it(e,"overflowY")},lr=function(e){return it(e,"overflowX")},qe=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=st(e,r);if(a){var o=lt(e,r),s=o[1],c=o[2];if(s>c)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},ur=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},dr=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},st=function(e,t){return e==="v"?sr(t):lr(t)},lt=function(e,t){return e==="v"?ur(t):dr(t)},fr=function(e,t){return e==="h"&&t==="rtl"?-1:1},hr=function(e,t,n,r,a){var o=fr(e,window.getComputedStyle(t).direction),s=o*r,c=n.target,f=t.contains(c),l=!1,h=s>0,p=0,v=0;do{if(!c)break;var k=lt(e,c),w=k[0],u=k[1],m=k[2],C=u-m-o*w;(w||C)&&st(e,c)&&(p+=C,v+=w);var g=c.parentNode;c=g&&g.nodeType===Node.DOCUMENT_FRAGMENT_NODE?g.host:g}while(!f&&c!==document.body||f&&(t.contains(c)||t===c));return(h&&(Math.abs(p)<1||!a)||!h&&(Math.abs(v)<1||!a))&&(l=!0),l},Q=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Ve=function(e){return[e.deltaX,e.deltaY]},Be=function(e){return e&&"current"in e?e.current:e},pr=function(e,t){return e[0]===t[0]&&e[1]===t[1]},yr=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},vr=0,q=[];function mr(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),a=i.useState(vr++)[0],o=i.useState(ct)[0],s=i.useRef(e);i.useEffect(function(){s.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var u=Fn([e.lockRef.current],(e.shards||[]).map(Be),!0).filter(Boolean);return u.forEach(function(m){return m.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),u.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var c=i.useCallback(function(u,m){if("touches"in u&&u.touches.length===2||u.type==="wheel"&&u.ctrlKey)return!s.current.allowPinchZoom;var C=Q(u),g=n.current,b="deltaX"in u?u.deltaX:g[0]-C[0],x="deltaY"in u?u.deltaY:g[1]-C[1],E,A=u.target,M=Math.abs(b)>Math.abs(x)?"h":"v";if("touches"in u&&M==="h"&&A.type==="range")return!1;var P=qe(M,A);if(!P)return!0;if(P?E=M:(E=M==="v"?"h":"v",P=qe(M,A)),!P)return!1;if(!r.current&&"changedTouches"in u&&(b||x)&&(r.current=E),!E)return!0;var _=r.current||E;return hr(_,m,u,_==="h"?b:x,!0)},[]),f=i.useCallback(function(u){var m=u;if(!(!q.length||q[q.length-1]!==o)){var C="deltaY"in m?Ve(m):Q(m),g=t.current.filter(function(E){return E.name===m.type&&(E.target===m.target||m.target===E.shadowParent)&&pr(E.delta,C)})[0];if(g&&g.should){m.cancelable&&m.preventDefault();return}if(!g){var b=(s.current.shards||[]).map(Be).filter(Boolean).filter(function(E){return E.contains(m.target)}),x=b.length>0?c(m,b[0]):!s.current.noIsolation;x&&m.cancelable&&m.preventDefault()}}},[]),l=i.useCallback(function(u,m,C,g){var b={name:u,delta:m,target:C,should:g,shadowParent:gr(C)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(x){return x!==b})},1)},[]),h=i.useCallback(function(u){n.current=Q(u),r.current=void 0},[]),p=i.useCallback(function(u){l(u.type,Ve(u),u.target,c(u,e.lockRef.current))},[]),v=i.useCallback(function(u){l(u.type,Q(u),u.target,c(u,e.lockRef.current))},[]);i.useEffect(function(){return q.push(o),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:v}),document.addEventListener("wheel",f,W),document.addEventListener("touchmove",f,W),document.addEventListener("touchstart",h,W),function(){q=q.filter(function(u){return u!==o}),document.removeEventListener("wheel",f,W),document.removeEventListener("touchmove",f,W),document.removeEventListener("touchstart",h,W)}},[]);var k=e.removeScrollBar,w=e.inert;return i.createElement(i.Fragment,null,w?i.createElement(o,{styles:yr(a)}):null,k?i.createElement(cr,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function gr(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const kr=Zn(ot,mr);var ut=i.forwardRef(function(e,t){return i.createElement(ce,T({},e,{ref:t,sideCar:kr}))});ut.classNames=ce.classNames;var ie="Collapsible",[Cr,dt]=ae(ie),[br,xe]=Cr(ie),ft=i.forwardRef((e,t)=>{const{__scopeCollapsible:n,open:r,defaultOpen:a,disabled:o,onOpenChange:s,...c}=e,[f,l]=oe({prop:r,defaultProp:a??!1,onChange:s,caller:ie});return y.jsx(br,{scope:n,disabled:o,contentId:H(),open:f,onOpenToggle:i.useCallback(()=>l(h=>!h),[l]),children:y.jsx(R.div,{"data-state":we(f),"data-disabled":o?"":void 0,...c,ref:t})})});ft.displayName=ie;var ht="CollapsibleTrigger",pt=i.forwardRef((e,t)=>{const{__scopeCollapsible:n,...r}=e,a=xe(ht,n);return y.jsx(R.button,{type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":we(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled,...r,ref:t,onClick:I(e.onClick,a.onOpenToggle)})});pt.displayName=ht;var Me="CollapsibleContent",yt=i.forwardRef((e,t)=>{const{forceMount:n,...r}=e,a=xe(Me,e.__scopeCollapsible);return y.jsx(Z,{present:n||a.open,children:({present:o})=>y.jsx(xr,{...r,ref:t,present:o})})});yt.displayName=Me;var xr=i.forwardRef((e,t)=>{const{__scopeCollapsible:n,present:r,children:a,...o}=e,s=xe(Me,n),[c,f]=i.useState(r),l=i.useRef(null),h=N(t,l),p=i.useRef(0),v=p.current,k=i.useRef(0),w=k.current,u=s.open||c,m=i.useRef(u),C=i.useRef(void 0);return i.useEffect(()=>{const g=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(g)},[]),B(()=>{const g=l.current;if(g){C.current=C.current||{transitionDuration:g.style.transitionDuration,animationName:g.style.animationName},g.style.transitionDuration="0s",g.style.animationName="none";const b=g.getBoundingClientRect();p.current=b.height,k.current=b.width,m.current||(g.style.transitionDuration=C.current.transitionDuration,g.style.animationName=C.current.animationName),f(r)}},[s.open,r]),y.jsx(R.div,{"data-state":we(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!u,...o,ref:h,style:{"--radix-collapsible-content-height":v?`${v}px`:void 0,"--radix-collapsible-content-width":w?`${w}px`:void 0,...e.style},children:u&&a})});function we(e){return e?"open":"closed"}var Mr=ft,wr=pt,Er=yt,se="Dialog",[vt,Do]=ae(se),[Sr,D]=vt(se),mt=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:o,modal:s=!0}=e,c=i.useRef(null),f=i.useRef(null),[l,h]=oe({prop:r,defaultProp:a??!1,onChange:o,caller:se});return y.jsx(Sr,{scope:t,triggerRef:c,contentRef:f,contentId:H(),titleId:H(),descriptionId:H(),open:l,onOpenChange:h,onOpenToggle:i.useCallback(()=>h(p=>!p),[h]),modal:s,children:n})};mt.displayName=se;var gt="DialogTrigger",kt=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=D(gt,n),o=N(t,a.triggerRef);return y.jsx(R.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":Ae(a.open),...r,ref:o,onClick:I(e.onClick,a.onOpenToggle)})});kt.displayName=gt;var Ee="DialogPortal",[Ar,Ct]=vt(Ee,{forceMount:void 0}),bt=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:a}=e,o=D(Ee,t);return y.jsx(Ar,{scope:t,forceMount:n,children:i.Children.map(r,s=>y.jsx(Z,{present:n||o.open,children:y.jsx(Qe,{asChild:!0,container:a,children:s})}))})};bt.displayName=Ee;var te="DialogOverlay",xt=i.forwardRef((e,t)=>{const n=Ct(te,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,o=D(te,e.__scopeDialog);return o.modal?y.jsx(Z,{present:r||o.open,children:y.jsx(Pr,{...a,ref:t})}):null});xt.displayName=te;var Rr=$("DialogOverlay.RemoveScroll"),Pr=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=D(te,n);return y.jsx(ut,{as:Rr,allowPinchZoom:!0,shards:[a.contentRef],children:y.jsx(R.div,{"data-state":Ae(a.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),j="DialogContent",Mt=i.forwardRef((e,t)=>{const n=Ct(j,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,o=D(j,e.__scopeDialog);return y.jsx(Z,{present:r||o.open,children:o.modal?y.jsx(Nr,{...a,ref:t}):y.jsx(Dr,{...a,ref:t})})});Mt.displayName=j;var Nr=i.forwardRef((e,t)=>{const n=D(j,e.__scopeDialog),r=i.useRef(null),a=N(t,n.contentRef,r);return i.useEffect(()=>{const o=r.current;if(o)return jn(o)},[]),y.jsx(wt,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:I(e.onCloseAutoFocus,o=>{var s;o.preventDefault(),(s=n.triggerRef.current)==null||s.focus()}),onPointerDownOutside:I(e.onPointerDownOutside,o=>{const s=o.detail.originalEvent,c=s.button===0&&s.ctrlKey===!0;(s.button===2||c)&&o.preventDefault()}),onFocusOutside:I(e.onFocusOutside,o=>o.preventDefault())})}),Dr=i.forwardRef((e,t)=>{const n=D(j,e.__scopeDialog),r=i.useRef(!1),a=i.useRef(!1);return y.jsx(wt,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var s,c;(s=e.onCloseAutoFocus)==null||s.call(e,o),o.defaultPrevented||(r.current||(c=n.triggerRef.current)==null||c.focus(),o.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:o=>{var f,l;(f=e.onInteractOutside)==null||f.call(e,o),o.defaultPrevented||(r.current=!0,o.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const s=o.target;((l=n.triggerRef.current)==null?void 0:l.contains(s))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&a.current&&o.preventDefault()}})}),wt=i.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:o,...s}=e,c=D(j,n),f=i.useRef(null),l=N(t,f);return Sn(),y.jsxs(y.Fragment,{children:[y.jsx(et,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:o,children:y.jsx(be,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":Ae(c.open),...s,ref:l,onDismiss:()=>c.onOpenChange(!1)})}),y.jsxs(y.Fragment,{children:[y.jsx(Or,{titleId:c.titleId}),y.jsx(Ir,{contentRef:f,descriptionId:c.descriptionId})]})]})}),Se="DialogTitle",Et=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=D(Se,n);return y.jsx(R.h2,{id:a.titleId,...r,ref:t})});Et.displayName=Se;var St="DialogDescription",At=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=D(St,n);return y.jsx(R.p,{id:a.descriptionId,...r,ref:t})});At.displayName=St;var Rt="DialogClose",Pt=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=D(Rt,n);return y.jsx(R.button,{type:"button",...r,ref:t,onClick:I(e.onClick,()=>a.onOpenChange(!1))})});Pt.displayName=Rt;function Ae(e){return e?"open":"closed"}var Nt="DialogTitleWarning",[Oo,Dt]=Yt(Nt,{contentName:j,titleName:Se,docsSlug:"dialog"}),Or=({titleId:e})=>{const t=Dt(Nt),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},Tr="DialogDescriptionWarning",Ir=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Dt(Tr).contentName}}.`;return i.useEffect(()=>{var o;const a=(o=e.current)==null?void 0:o.getAttribute("aria-describedby");t&&a&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},To=mt,Io=kt,_o=bt,Lo=xt,jo=Mt,Fo=Et,zo=At,Wo=Pt,_r=i.createContext(void 0);function Lr(e){const t=i.useContext(_r);return e||t||"ltr"}var O="Accordion",jr=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Re,Fr,zr]=rn(O),[le,qo]=ae(O,[zr,dt]),Pe=dt(),Ot=S.forwardRef((e,t)=>{const{type:n,...r}=e,a=r,o=r;return y.jsx(Re.Provider,{scope:e.__scopeAccordion,children:n==="multiple"?y.jsx(Br,{...o,ref:t}):y.jsx(Vr,{...a,ref:t})})});Ot.displayName=O;var[Tt,Wr]=le(O),[It,qr]=le(O,{collapsible:!1}),Vr=S.forwardRef((e,t)=>{const{value:n,defaultValue:r,onValueChange:a=()=>{},collapsible:o=!1,...s}=e,[c,f]=oe({prop:n,defaultProp:r??"",onChange:a,caller:O});return y.jsx(Tt,{scope:e.__scopeAccordion,value:S.useMemo(()=>c?[c]:[],[c]),onItemOpen:f,onItemClose:S.useCallback(()=>o&&f(""),[o,f]),children:y.jsx(It,{scope:e.__scopeAccordion,collapsible:o,children:y.jsx(_t,{...s,ref:t})})})}),Br=S.forwardRef((e,t)=>{const{value:n,defaultValue:r,onValueChange:a=()=>{},...o}=e,[s,c]=oe({prop:n,defaultProp:r??[],onChange:a,caller:O}),f=S.useCallback(h=>c((p=[])=>[...p,h]),[c]),l=S.useCallback(h=>c((p=[])=>p.filter(v=>v!==h)),[c]);return y.jsx(Tt,{scope:e.__scopeAccordion,value:s,onItemOpen:f,onItemClose:l,children:y.jsx(It,{scope:e.__scopeAccordion,collapsible:!0,children:y.jsx(_t,{...o,ref:t})})})}),[Hr,ue]=le(O),_t=S.forwardRef((e,t)=>{const{__scopeAccordion:n,disabled:r,dir:a,orientation:o="vertical",...s}=e,c=S.useRef(null),f=N(c,t),l=Fr(n),p=Lr(a)==="ltr",v=I(e.onKeyDown,k=>{var P;if(!jr.includes(k.key))return;const w=k.target,u=l().filter(_=>{var F;return!((F=_.ref.current)!=null&&F.disabled)}),m=u.findIndex(_=>_.ref.current===w),C=u.length;if(m===-1)return;k.preventDefault();let g=m;const b=0,x=C-1,E=()=>{g=m+1,g>x&&(g=b)},A=()=>{g=m-1,g<b&&(g=x)};switch(k.key){case"Home":g=b;break;case"End":g=x;break;case"ArrowRight":o==="horizontal"&&(p?E():A());break;case"ArrowDown":o==="vertical"&&E();break;case"ArrowLeft":o==="horizontal"&&(p?A():E());break;case"ArrowUp":o==="vertical"&&A();break}const M=g%C;(P=u[M].ref.current)==null||P.focus()});return y.jsx(Hr,{scope:n,disabled:r,direction:a,orientation:o,children:y.jsx(Re.Slot,{scope:n,children:y.jsx(R.div,{...s,"data-orientation":o,ref:f,onKeyDown:r?void 0:v})})})}),ne="AccordionItem",[$r,Ne]=le(ne),Lt=S.forwardRef((e,t)=>{const{__scopeAccordion:n,value:r,...a}=e,o=ue(ne,n),s=Wr(ne,n),c=Pe(n),f=H(),l=r&&s.value.includes(r)||!1,h=o.disabled||e.disabled;return y.jsx($r,{scope:n,open:l,disabled:h,triggerId:f,children:y.jsx(Mr,{"data-orientation":o.orientation,"data-state":Vt(l),...c,...a,ref:t,disabled:h,open:l,onOpenChange:p=>{p?s.onItemOpen(r):s.onItemClose(r)}})})});Lt.displayName=ne;var jt="AccordionHeader",Ft=S.forwardRef((e,t)=>{const{__scopeAccordion:n,...r}=e,a=ue(O,n),o=Ne(jt,n);return y.jsx(R.h3,{"data-orientation":a.orientation,"data-state":Vt(o.open),"data-disabled":o.disabled?"":void 0,...r,ref:t})});Ft.displayName=jt;var Ce="AccordionTrigger",zt=S.forwardRef((e,t)=>{const{__scopeAccordion:n,...r}=e,a=ue(O,n),o=Ne(Ce,n),s=qr(Ce,n),c=Pe(n);return y.jsx(Re.ItemSlot,{scope:n,children:y.jsx(wr,{"aria-disabled":o.open&&!s.collapsible||void 0,"data-orientation":a.orientation,id:o.triggerId,...c,...r,ref:t})})});zt.displayName=Ce;var Wt="AccordionContent",qt=S.forwardRef((e,t)=>{const{__scopeAccordion:n,...r}=e,a=ue(O,n),o=Ne(Wt,n),s=Pe(n);return y.jsx(Er,{role:"region","aria-labelledby":o.triggerId,"data-orientation":a.orientation,...s,...r,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});qt.displayName=Wt;function Vt(e){return e?"open":"closed"}var Vo=Ot,Bo=Lt,Ho=Ft,$o=zt,Uo=qt;export{Yr as $,Jr as A,Xr as B,sa as C,be as D,da as E,et as F,Ma as G,La as H,ea as I,ma as J,io as K,Wa as L,Za as M,Ao as N,oo as O,R as P,oa as Q,Gr as R,Zr as S,Co as T,Mo as U,ba as V,Ro as W,Po as X,ja as Y,No as Z,ia as _,ae as a,pt as a$,ho as a0,vo as a1,go as a2,ca as a3,ua as a4,lo as a5,pa as a6,Na as a7,no as a8,Da as a9,Lo as aA,jo as aB,Wo as aC,Fo as aD,zo as aE,To as aF,Io as aG,_o as aH,Ka as aI,qa as aJ,So as aK,so as aL,ao as aM,xa as aN,ga as aO,na as aP,bo as aQ,Qr as aR,Eo as aS,Ea as aT,po as aU,Oa as aV,ta as aW,ya as aX,Ia as aY,co as aZ,Mr as a_,wo as aa,ro as ab,Pa as ac,Ra as ad,eo as ae,ra as af,wa as ag,Ta as ah,Lr as ai,la as aj,Va as ak,Aa as al,Sa as am,Ua as an,Ya as ao,xo as ap,Fa as aq,Ja as ar,to as as,uo as at,mo as au,fa as av,ha as aw,Xa as ax,za as ay,Ga as az,oe as b,yt as b0,va as b1,_a as b2,ka as b3,Vo as b4,Bo as b5,Ho as b6,$o as b7,Uo as b8,rn as c,Z as d,U as e,I as f,Qe as g,B as h,on as i,y as j,Kr as k,H as l,Qa as m,$a as n,fo as o,Ha as p,Ba as q,jn as r,ut as s,Sn as t,N as u,$ as v,Ca as w,ko as x,yo as y,aa as z};
