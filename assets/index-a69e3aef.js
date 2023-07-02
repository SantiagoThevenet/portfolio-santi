(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();document.addEventListener("DOMContentLoaded",function(){var n=document.getElementById("ball"),e=.09,t={x:0,y:0},i={x:0,y:0},r=function(){var o=i.x-t.x,a=i.y-t.y;t.x+=o*e,t.y+=a*e,n.style.left=t.x+"px",n.style.top=t.y+"px",requestAnimationFrame(r)};document.addEventListener("mousemove",function(o){i.x=o.clientX,i.y=o.clientY,s||(s=requestAnimationFrame(r))});var s});function Rc(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const rt={},Zr=[],Pn=()=>{},jm=()=>!1,Km=/^on[^a-z]/,Ma=n=>Km.test(n),Cc=n=>n.startsWith("onUpdate:"),Tt=Object.assign,Pc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Jm=Object.prototype.hasOwnProperty,Ke=(n,e)=>Jm.call(n,e),Be=Array.isArray,Bs=n=>Sa(n)==="[object Map]",Zm=n=>Sa(n)==="[object Set]",Ve=n=>typeof n=="function",Rt=n=>typeof n=="string",Lc=n=>typeof n=="symbol",pt=n=>n!==null&&typeof n=="object",rd=n=>pt(n)&&Ve(n.then)&&Ve(n.catch),$m=Object.prototype.toString,Sa=n=>$m.call(n),Qm=n=>Sa(n).slice(8,-1),e_=n=>Sa(n)==="[object Object]",Dc=n=>Rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ko=Rc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},t_=/-(\w)/g,Xn=Ea(n=>n.replace(t_,(e,t)=>t?t.toUpperCase():"")),n_=/\B([A-Z])/g,xs=Ea(n=>n.replace(n_,"-$1").toLowerCase()),ya=Ea(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ga=Ea(n=>n?`on${ya(n)}`:""),js=(n,e)=>!Object.is(n,e),Va=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},sa=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},i_=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ru;const kl=()=>Ru||(Ru=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Uc(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Rt(i)?a_(i):Uc(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Rt(n))return n;if(pt(n))return n}}const r_=/;(?![^(]*\))/g,s_=/:([^]+)/,o_=/\/\*[^]*?\*\//g;function a_(n){const e={};return n.replace(o_,"").split(r_).forEach(t=>{if(t){const i=t.split(s_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ic(n){let e="";if(Rt(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=Ic(n[t]);i&&(e+=i+" ")}else if(pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const l_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",c_=Rc(l_);function sd(n){return!!n||n===""}let yn;class u_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=yn,!e&&yn&&(this.index=(yn.scopes||(yn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=yn;try{return yn=this,e()}finally{yn=t}}}on(){yn=this}off(){yn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function f_(n,e=yn){e&&e.active&&e.effects.push(n)}function h_(){return yn}const Oc=n=>{const e=new Set(n);return e.w=0,e.n=0,e},od=n=>(n.w&Ni)>0,ad=n=>(n.n&Ni)>0,d_=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Ni},p_=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];od(r)&&!ad(r)?r.delete(n):e[t++]=r,r.w&=~Ni,r.n&=~Ni}e.length=t}},Hl=new WeakMap;let Us=0,Ni=1;const Gl=30;let bn;const ar=Symbol(""),Vl=Symbol("");class Nc{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,f_(this,i)}run(){if(!this.active)return this.fn();let e=bn,t=Pi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=bn,bn=this,Pi=!0,Ni=1<<++Us,Us<=Gl?d_(this):Cu(this),this.fn()}finally{Us<=Gl&&p_(this),Ni=1<<--Us,bn=this.parent,Pi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){bn===this?this.deferStop=!0:this.active&&(Cu(this),this.onStop&&this.onStop(),this.active=!1)}}function Cu(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Pi=!0;const ld=[];function Ms(){ld.push(Pi),Pi=!1}function Ss(){const n=ld.pop();Pi=n===void 0?!0:n}function $t(n,e,t){if(Pi&&bn){let i=Hl.get(n);i||Hl.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Oc()),cd(r)}}function cd(n,e){let t=!1;Us<=Gl?ad(n)||(n.n|=Ni,t=!od(n)):t=!n.has(bn),t&&(n.add(bn),bn.deps.push(n))}function fi(n,e,t,i,r,s){const o=Hl.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Be(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Be(n)?Dc(t)&&a.push(o.get("length")):(a.push(o.get(ar)),Bs(n)&&a.push(o.get(Vl)));break;case"delete":Be(n)||(a.push(o.get(ar)),Bs(n)&&a.push(o.get(Vl)));break;case"set":Bs(n)&&a.push(o.get(ar));break}if(a.length===1)a[0]&&Wl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Wl(Oc(l))}}function Wl(n,e){const t=Be(n)?n:[...n];for(const i of t)i.computed&&Pu(i);for(const i of t)i.computed||Pu(i)}function Pu(n,e){(n!==bn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const m_=Rc("__proto__,__v_isRef,__isVue"),ud=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Lc)),__=Fc(),g_=Fc(!1,!0),v_=Fc(!0),Lu=x_();function x_(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ze(this);for(let s=0,o=this.length;s<o;s++)$t(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ze)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ms();const i=Ze(this)[e].apply(this,t);return Ss(),i}}),n}function M_(n){const e=Ze(this);return $t(e,"has",n),e.hasOwnProperty(n)}function Fc(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?N_:md:e?pd:dd).get(i))return i;const o=Be(i);if(!n){if(o&&Ke(Lu,r))return Reflect.get(Lu,r,s);if(r==="hasOwnProperty")return M_}const a=Reflect.get(i,r,s);return(Lc(r)?ud.has(r):m_(r))||(n||$t(i,"get",r),e)?a:Ut(a)?o&&Dc(r)?a:a.value:pt(a)?n?_d(a):fo(a):a}}const S_=fd(),E_=fd(!0);function fd(n=!1){return function(t,i,r,s){let o=t[i];if(ss(o)&&Ut(o)&&!Ut(r))return!1;if(!n&&(!oa(r)&&!ss(r)&&(o=Ze(o),r=Ze(r)),!Be(t)&&Ut(o)&&!Ut(r)))return o.value=r,!0;const a=Be(t)&&Dc(i)?Number(i)<t.length:Ke(t,i),l=Reflect.set(t,i,r,s);return t===Ze(s)&&(a?js(r,o)&&fi(t,"set",i,r):fi(t,"add",i,r)),l}}function y_(n,e){const t=Ke(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&fi(n,"delete",e,void 0),i}function T_(n,e){const t=Reflect.has(n,e);return(!Lc(e)||!ud.has(e))&&$t(n,"has",e),t}function b_(n){return $t(n,"iterate",Be(n)?"length":ar),Reflect.ownKeys(n)}const hd={get:__,set:S_,deleteProperty:y_,has:T_,ownKeys:b_},A_={get:v_,set(n,e){return!0},deleteProperty(n,e){return!0}},w_=Tt({},hd,{get:g_,set:E_}),Bc=n=>n,Ta=n=>Reflect.getPrototypeOf(n);function Mo(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ze(n),s=Ze(e);t||(e!==s&&$t(r,"get",e),$t(r,"get",s));const{has:o}=Ta(r),a=i?Bc:t?Hc:Ks;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function So(n,e=!1){const t=this.__v_raw,i=Ze(t),r=Ze(n);return e||(n!==r&&$t(i,"has",n),$t(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Eo(n,e=!1){return n=n.__v_raw,!e&&$t(Ze(n),"iterate",ar),Reflect.get(n,"size",n)}function Du(n){n=Ze(n);const e=Ze(this);return Ta(e).has.call(e,n)||(e.add(n),fi(e,"add",n,n)),this}function Uu(n,e){e=Ze(e);const t=Ze(this),{has:i,get:r}=Ta(t);let s=i.call(t,n);s||(n=Ze(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?js(e,o)&&fi(t,"set",n,e):fi(t,"add",n,e),this}function Iu(n){const e=Ze(this),{has:t,get:i}=Ta(e);let r=t.call(e,n);r||(n=Ze(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&fi(e,"delete",n,void 0),s}function Ou(){const n=Ze(this),e=n.size!==0,t=n.clear();return e&&fi(n,"clear",void 0,void 0),t}function yo(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Ze(o),l=e?Bc:n?Hc:Ks;return!n&&$t(a,"iterate",ar),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function To(n,e,t){return function(...i){const r=this.__v_raw,s=Ze(r),o=Bs(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Bc:e?Hc:Ks;return!e&&$t(s,"iterate",l?Vl:ar),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function _i(n){return function(...e){return n==="delete"?!1:this}}function R_(){const n={get(s){return Mo(this,s)},get size(){return Eo(this)},has:So,add:Du,set:Uu,delete:Iu,clear:Ou,forEach:yo(!1,!1)},e={get(s){return Mo(this,s,!1,!0)},get size(){return Eo(this)},has:So,add:Du,set:Uu,delete:Iu,clear:Ou,forEach:yo(!1,!0)},t={get(s){return Mo(this,s,!0)},get size(){return Eo(this,!0)},has(s){return So.call(this,s,!0)},add:_i("add"),set:_i("set"),delete:_i("delete"),clear:_i("clear"),forEach:yo(!0,!1)},i={get(s){return Mo(this,s,!0,!0)},get size(){return Eo(this,!0)},has(s){return So.call(this,s,!0)},add:_i("add"),set:_i("set"),delete:_i("delete"),clear:_i("clear"),forEach:yo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=To(s,!1,!1),t[s]=To(s,!0,!1),e[s]=To(s,!1,!0),i[s]=To(s,!0,!0)}),[n,t,e,i]}const[C_,P_,L_,D_]=R_();function zc(n,e){const t=e?n?D_:L_:n?P_:C_;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ke(t,r)&&r in i?t:i,r,s)}const U_={get:zc(!1,!1)},I_={get:zc(!1,!0)},O_={get:zc(!0,!1)},dd=new WeakMap,pd=new WeakMap,md=new WeakMap,N_=new WeakMap;function F_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function B_(n){return n.__v_skip||!Object.isExtensible(n)?0:F_(Qm(n))}function fo(n){return ss(n)?n:kc(n,!1,hd,U_,dd)}function z_(n){return kc(n,!1,w_,I_,pd)}function _d(n){return kc(n,!0,A_,O_,md)}function kc(n,e,t,i,r){if(!pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=B_(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function $r(n){return ss(n)?$r(n.__v_raw):!!(n&&n.__v_isReactive)}function ss(n){return!!(n&&n.__v_isReadonly)}function oa(n){return!!(n&&n.__v_isShallow)}function gd(n){return $r(n)||ss(n)}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function vd(n){return sa(n,"__v_skip",!0),n}const Ks=n=>pt(n)?fo(n):n,Hc=n=>pt(n)?_d(n):n;function xd(n){Pi&&bn&&(n=Ze(n),cd(n.dep||(n.dep=Oc())))}function Md(n,e){n=Ze(n);const t=n.dep;t&&Wl(t)}function Ut(n){return!!(n&&n.__v_isRef===!0)}function k_(n){return Sd(n,!1)}function H_(n){return Sd(n,!0)}function Sd(n,e){return Ut(n)?n:new G_(n,e)}class G_{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ze(e),this._value=t?e:Ks(e)}get value(){return xd(this),this._value}set value(e){const t=this.__v_isShallow||oa(e)||ss(e);e=t?e:Ze(e),js(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ks(e),Md(this))}}function zs(n){return Ut(n)?n.value:n}const V_={get:(n,e,t)=>zs(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ut(r)&&!Ut(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ed(n){return $r(n)?n:new Proxy(n,V_)}class W_{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Nc(e,()=>{this._dirty||(this._dirty=!0,Md(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ze(this);return xd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function X_(n,e,t=!1){let i,r;const s=Ve(n);return s?(i=n,r=Pn):(i=n.get,r=n.set),new W_(i,r,s||!r,t)}function Li(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){ba(s,e,t)}return r}function Ln(n,e,t,i){if(Ve(n)){const s=Li(n,e,t,i);return s&&rd(s)&&s.catch(o=>{ba(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Ln(n[s],e,t,i));return r}function ba(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Li(l,null,10,[n,o,a]);return}}q_(n,t,r,i)}function q_(n,e,t,i=!0){console.error(n)}let Js=!1,Xl=!1;const Lt=[];let Bn=0;const Qr=[];let ii=null,ir=0;const yd=Promise.resolve();let Gc=null;function Td(n){const e=Gc||yd;return n?e.then(this?n.bind(this):n):e}function Y_(n){let e=Bn+1,t=Lt.length;for(;e<t;){const i=e+t>>>1;Zs(Lt[i])<n?e=i+1:t=i}return e}function Vc(n){(!Lt.length||!Lt.includes(n,Js&&n.allowRecurse?Bn+1:Bn))&&(n.id==null?Lt.push(n):Lt.splice(Y_(n.id),0,n),bd())}function bd(){!Js&&!Xl&&(Xl=!0,Gc=yd.then(wd))}function j_(n){const e=Lt.indexOf(n);e>Bn&&Lt.splice(e,1)}function K_(n){Be(n)?Qr.push(...n):(!ii||!ii.includes(n,n.allowRecurse?ir+1:ir))&&Qr.push(n),bd()}function Nu(n,e=Js?Bn+1:0){for(;e<Lt.length;e++){const t=Lt[e];t&&t.pre&&(Lt.splice(e,1),e--,t())}}function Ad(n){if(Qr.length){const e=[...new Set(Qr)];if(Qr.length=0,ii){ii.push(...e);return}for(ii=e,ii.sort((t,i)=>Zs(t)-Zs(i)),ir=0;ir<ii.length;ir++)ii[ir]();ii=null,ir=0}}const Zs=n=>n.id==null?1/0:n.id,J_=(n,e)=>{const t=Zs(n)-Zs(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function wd(n){Xl=!1,Js=!0,Lt.sort(J_);const e=Pn;try{for(Bn=0;Bn<Lt.length;Bn++){const t=Lt[Bn];t&&t.active!==!1&&Li(t,null,14)}}finally{Bn=0,Lt.length=0,Ad(),Js=!1,Gc=null,(Lt.length||Qr.length)&&wd()}}function Z_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||rt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||rt;h&&(r=t.map(p=>Rt(p)?p.trim():p)),f&&(r=t.map(i_))}let a,l=i[a=Ga(e)]||i[a=Ga(Xn(e))];!l&&s&&(l=i[a=Ga(xs(e))]),l&&Ln(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ln(c,n,6,r)}}function Rd(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ve(n)){const l=c=>{const u=Rd(c,e,!0);u&&(a=!0,Tt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(pt(n)&&i.set(n,null),null):(Be(s)?s.forEach(l=>o[l]=null):Tt(o,s),pt(n)&&i.set(n,o),o)}function Aa(n,e){return!n||!Ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(n,e[0].toLowerCase()+e.slice(1))||Ke(n,xs(e))||Ke(n,e))}let Rn=null,Cd=null;function aa(n){const e=Rn;return Rn=n,Cd=n&&n.type.__scopeId||null,e}function ql(n,e=Rn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Yu(-1);const s=aa(e);let o;try{o=n(...r)}finally{aa(s),i._d&&Yu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Wa(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:_}=n;let m,d;const E=aa(n);try{if(t.shapeFlag&4){const S=r||i;m=Nn(u.call(S,S,f,s,p,h,g)),d=l}else{const S=e;m=Nn(S.length>1?S(s,{attrs:l,slots:a,emit:c}):S(s,null)),d=e.props?l:$_(l)}}catch(S){Hs.length=0,ba(S,n,1),m=$e(gr)}let x=m;if(d&&_!==!1){const S=Object.keys(d),{shapeFlag:T}=x;S.length&&T&7&&(o&&S.some(Cc)&&(d=Q_(d,o)),x=os(x,d))}return t.dirs&&(x=os(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,aa(E),m}const $_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ma(t))&&((e||(e={}))[t]=n[t]);return e},Q_=(n,e)=>{const t={};for(const i in n)(!Cc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function eg(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Fu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Aa(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Fu(i,o,c):!0:!!o;return!1}function Fu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Aa(t,s))return!0}return!1}function tg({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const ng=n=>n.__isSuspense;function ig(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):K_(n)}const bo={};function Jo(n,e,t){return Pd(n,e,t)}function Pd(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=rt){var a;const l=h_()===((a=wt)==null?void 0:a.scope)?wt:null;let c,u=!1,f=!1;if(Ut(n)?(c=()=>n.value,u=oa(n)):$r(n)?(c=()=>n,i=!0):Be(n)?(f=!0,u=n.some(S=>$r(S)||oa(S)),c=()=>n.map(S=>{if(Ut(S))return S.value;if($r(S))return Yr(S);if(Ve(S))return Li(S,l,2)})):Ve(n)?e?c=()=>Li(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Ln(n,l,3,[p])}:c=Pn,e&&i){const S=c;c=()=>Yr(S())}let h,p=S=>{h=E.onStop=()=>{Li(S,l,4)}},g;if(Qs)if(p=Pn,e?t&&Ln(e,l,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const S=Zg();g=S.__watcherHandles||(S.__watcherHandles=[])}else return Pn;let _=f?new Array(n.length).fill(bo):bo;const m=()=>{if(E.active)if(e){const S=E.run();(i||u||(f?S.some((T,w)=>js(T,_[w])):js(S,_)))&&(h&&h(),Ln(e,l,3,[S,_===bo?void 0:f&&_[0]===bo?[]:_,p]),_=S)}else E.run()};m.allowRecurse=!!e;let d;r==="sync"?d=m:r==="post"?d=()=>Vt(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),d=()=>Vc(m));const E=new Nc(c,d);e?t?m():_=E.run():r==="post"?Vt(E.run.bind(E),l&&l.suspense):E.run();const x=()=>{E.stop(),l&&l.scope&&Pc(l.scope.effects,E)};return g&&g.push(x),x}function rg(n,e,t){const i=this.proxy,r=Rt(n)?n.includes(".")?Ld(i,n):()=>i[n]:n.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,t=e);const o=wt;as(this);const a=Pd(r,s.bind(i),t);return o?as(o):lr(),a}function Ld(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Yr(n,e){if(!pt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Ut(n))Yr(n.value,e);else if(Be(n))for(let t=0;t<n.length;t++)Yr(n[t],e);else if(Zm(n)||Bs(n))n.forEach(t=>{Yr(t,e)});else if(e_(n))for(const t in n)Yr(n[t],e);return n}function qi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ms(),Ln(l,t,8,[n.el,a,n,e]),Ss())}}function Dd(n,e){return Ve(n)?(()=>Tt({name:n.name},e,{setup:n}))():n}const Zo=n=>!!n.type.__asyncLoader,Ud=n=>n.type.__isKeepAlive;function sg(n,e){Id(n,"a",e)}function og(n,e){Id(n,"da",e)}function Id(n,e,t=wt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(wa(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ud(r.parent.vnode)&&ag(i,e,t,r),r=r.parent}}function ag(n,e,t,i){const r=wa(e,n,i,!0);Od(()=>{Pc(i[e],r)},t)}function wa(n,e,t=wt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ms(),as(t);const a=Ln(e,t,n,o);return lr(),Ss(),a});return i?r.unshift(s):r.push(s),s}}const pi=n=>(e,t=wt)=>(!Qs||n==="sp")&&wa(n,(...i)=>e(...i),t),lg=pi("bm"),cg=pi("m"),ug=pi("bu"),fg=pi("u"),hg=pi("bum"),Od=pi("um"),dg=pi("sp"),pg=pi("rtg"),mg=pi("rtc");function _g(n,e=wt){wa("ec",n,e)}const Nd="components";function Xt(n,e){return vg(Nd,n,!0,e)||n}const gg=Symbol.for("v-ndc");function vg(n,e,t=!0,i=!1){const r=Rn||wt;if(r){const s=r.type;if(n===Nd){const a=jg(s,!1);if(a&&(a===e||a===Xn(e)||a===ya(Xn(e))))return s}const o=Bu(r[n]||s[n],e)||Bu(r.appContext[n],e);return!o&&i?s:o}}function Bu(n,e){return n&&(n[e]||n[Xn(e)]||n[ya(Xn(e))])}const Yl=n=>n?jd(n)?jc(n)||n.proxy:Yl(n.parent):null,ks=Tt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Yl(n.parent),$root:n=>Yl(n.root),$emit:n=>n.emit,$options:n=>Wc(n),$forceUpdate:n=>n.f||(n.f=()=>Vc(n.update)),$nextTick:n=>n.n||(n.n=Td.bind(n.proxy)),$watch:n=>rg.bind(n)}),Xa=(n,e)=>n!==rt&&!n.__isScriptSetup&&Ke(n,e),xg={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Xa(i,e))return o[e]=1,i[e];if(r!==rt&&Ke(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ke(c,e))return o[e]=3,s[e];if(t!==rt&&Ke(t,e))return o[e]=4,t[e];jl&&(o[e]=0)}}const u=ks[e];let f,h;if(u)return e==="$attrs"&&$t(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==rt&&Ke(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ke(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Xa(r,e)?(r[e]=t,!0):i!==rt&&Ke(i,e)?(i[e]=t,!0):Ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==rt&&Ke(n,o)||Xa(e,o)||(a=s[0])&&Ke(a,o)||Ke(i,o)||Ke(ks,o)||Ke(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function zu(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let jl=!0;function Mg(n){const e=Wc(n),t=n.proxy,i=n.ctx;jl=!1,e.beforeCreate&&ku(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:E,destroyed:x,unmounted:S,render:T,renderTracked:w,renderTriggered:P,errorCaptured:D,serverPrefetch:M,expose:R,inheritAttrs:j,components:re,directives:N,filters:V}=e;if(c&&Sg(c,i,null),o)for(const z in o){const X=o[z];Ve(X)&&(i[z]=X.bind(t))}if(r){const z=r.call(t,t);pt(z)&&(n.data=fo(z))}if(jl=!0,s)for(const z in s){const X=s[z],ue=Ve(X)?X.bind(t,t):Ve(X.get)?X.get.bind(t,t):Pn,oe=!Ve(X)&&Ve(X.set)?X.set.bind(t):Pn,Ee=zn({get:ue,set:oe});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:F=>Ee.value=F})}if(a)for(const z in a)Fd(a[z],i,t,z);if(l){const z=Ve(l)?l.call(t):l;Reflect.ownKeys(z).forEach(X=>{$o(X,z[X])})}u&&ku(u,n,"c");function Z(z,X){Be(X)?X.forEach(ue=>z(ue.bind(t))):X&&z(X.bind(t))}if(Z(lg,f),Z(cg,h),Z(ug,p),Z(fg,g),Z(sg,_),Z(og,m),Z(_g,D),Z(mg,w),Z(pg,P),Z(hg,E),Z(Od,S),Z(dg,M),Be(R))if(R.length){const z=n.exposed||(n.exposed={});R.forEach(X=>{Object.defineProperty(z,X,{get:()=>t[X],set:ue=>t[X]=ue})})}else n.exposed||(n.exposed={});T&&n.render===Pn&&(n.render=T),j!=null&&(n.inheritAttrs=j),re&&(n.components=re),N&&(n.directives=N)}function Sg(n,e,t=Pn){Be(n)&&(n=Kl(n));for(const i in n){const r=n[i];let s;pt(r)?"default"in r?s=ci(r.from||i,r.default,!0):s=ci(r.from||i):s=ci(r),Ut(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function ku(n,e,t){Ln(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Fd(n,e,t,i){const r=i.includes(".")?Ld(t,i):()=>t[i];if(Rt(n)){const s=e[n];Ve(s)&&Jo(r,s)}else if(Ve(n))Jo(r,n.bind(t));else if(pt(n))if(Be(n))n.forEach(s=>Fd(s,e,t,i));else{const s=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(s)&&Jo(r,s,n)}}function Wc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>la(l,c,o,!0)),la(l,e,o)),pt(e)&&s.set(e,l),l}function la(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&la(n,s,t,!0),r&&r.forEach(o=>la(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Eg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Eg={data:Hu,props:Gu,emits:Gu,methods:Is,computed:Is,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:Is,directives:Is,watch:Tg,provide:Hu,inject:yg};function Hu(n,e){return e?n?function(){return Tt(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function yg(n,e){return Is(Kl(n),Kl(e))}function Kl(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Bt(n,e){return n?[...new Set([].concat(n,e))]:e}function Is(n,e){return n?Tt(Object.create(null),n,e):e}function Gu(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:Tt(Object.create(null),zu(n),zu(e??{})):e}function Tg(n,e){if(!n)return e;if(!e)return n;const t=Tt(Object.create(null),n);for(const i in e)t[i]=Bt(n[i],e[i]);return t}function Bd(){return{app:null,config:{isNativeTag:jm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bg=0;function Ag(n,e){return function(i,r=null){Ve(i)||(i=Tt({},i)),r!=null&&!pt(r)&&(r=null);const s=Bd(),o=new Set;let a=!1;const l=s.app={_uid:bg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:$g,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ve(c.install)?(o.add(c),c.install(l,...u)):Ve(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=$e(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,jc(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){ca=l;try{return c()}finally{ca=null}}};return l}}let ca=null;function $o(n,e){if(wt){let t=wt.provides;const i=wt.parent&&wt.parent.provides;i===t&&(t=wt.provides=Object.create(i)),t[n]=e}}function ci(n,e,t=!1){const i=wt||Rn;if(i||ca){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ca._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}function wg(n,e,t,i=!1){const r={},s={};sa(s,Ca,1),n.propsDefaults=Object.create(null),zd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:z_(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Rg(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ze(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Aa(n.emitsOptions,h))continue;const p=e[h];if(l)if(Ke(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=Xn(h);r[g]=Jl(l,a,g,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{zd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ke(e,f)&&((u=xs(f))===f||!Ke(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Jl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],c=!0)}c&&fi(n,"set","$attrs")}function zd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ko(l))continue;const c=e[l];let u;r&&Ke(r,u=Xn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Aa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ze(t),c=a||rt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Jl(r,l,f,c[f],n,!Ke(c,f))}}return o}function Jl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ke(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(as(r),i=c[t]=l.call(null,e),lr())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===xs(t))&&(i=!0))}return i}function kd(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ve(n)){const u=f=>{l=!0;const[h,p]=kd(f,e,!0);Tt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return pt(n)&&i.set(n,Zr),Zr;if(Be(s))for(let u=0;u<s.length;u++){const f=Xn(s[u]);Vu(f)&&(o[f]=rt)}else if(s)for(const u in s){const f=Xn(u);if(Vu(f)){const h=s[u],p=o[f]=Be(h)||Ve(h)?{type:h}:Tt({},h);if(p){const g=qu(Boolean,p.type),_=qu(String,p.type);p[0]=g>-1,p[1]=_<0||g<_,(g>-1||Ke(p,"default"))&&a.push(f)}}}const c=[o,a];return pt(n)&&i.set(n,c),c}function Vu(n){return n[0]!=="$"}function Wu(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Xu(n,e){return Wu(n)===Wu(e)}function qu(n,e){return Be(e)?e.findIndex(t=>Xu(t,n)):Ve(e)&&Xu(e,n)?0:-1}const Hd=n=>n[0]==="_"||n==="$stable",Xc=n=>Be(n)?n.map(Nn):[Nn(n)],Cg=(n,e,t)=>{if(e._n)return e;const i=ql((...r)=>Xc(e(...r)),t);return i._c=!1,i},Gd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Hd(r))continue;const s=n[r];if(Ve(s))e[r]=Cg(r,s,i);else if(s!=null){const o=Xc(s);e[r]=()=>o}}},Vd=(n,e)=>{const t=Xc(e);n.slots.default=()=>t},Pg=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ze(e),sa(e,"_",t)):Gd(e,n.slots={})}else n.slots={},e&&Vd(n,e);sa(n.slots,Ca,1)},Lg=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=rt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Tt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Gd(e,r)),o=e}else e&&(Vd(n,e),o={default:1});if(s)for(const a in r)!Hd(a)&&!(a in o)&&delete r[a]};function Zl(n,e,t,i,r=!1){if(Be(n)){n.forEach((h,p)=>Zl(h,e&&(Be(e)?e[p]:e),t,i,r));return}if(Zo(i)&&!r)return;const s=i.shapeFlag&4?jc(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===rt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Rt(c)?(u[c]=null,Ke(f,c)&&(f[c]=null)):Ut(c)&&(c.value=null)),Ve(l))Li(l,a,12,[o,u]);else{const h=Rt(l),p=Ut(l);if(h||p){const g=()=>{if(n.f){const _=h?Ke(f,l)?f[l]:u[l]:l.value;r?Be(_)&&Pc(_,s):Be(_)?_.includes(s)||_.push(s):h?(u[l]=[s],Ke(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,Ke(f,l)&&(f[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Vt(g,t)):g()}}}const Vt=ig;function Dg(n){return Ug(n)}function Ug(n,e){const t=kl();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Pn,insertStaticContent:g}=n,_=(v,L,O,G=null,q=null,ce=null,fe=!1,Q=null,he=!!L.dynamicChildren)=>{if(v===L)return;v&&!bs(v,L)&&(G=ee(v),F(v,q,ce,!0),v=null),L.patchFlag===-2&&(he=!1,L.dynamicChildren=null);const{type:le,ref:be,shapeFlag:b}=L;switch(le){case Ra:m(v,L,O,G);break;case gr:d(v,L,O,G);break;case Qo:v==null&&E(L,O,G,fe);break;case Wt:re(v,L,O,G,q,ce,fe,Q,he);break;default:b&1?T(v,L,O,G,q,ce,fe,Q,he):b&6?N(v,L,O,G,q,ce,fe,Q,he):(b&64||b&128)&&le.process(v,L,O,G,q,ce,fe,Q,he,ge)}be!=null&&q&&Zl(be,v&&v.ref,ce,L||v,!L)},m=(v,L,O,G)=>{if(v==null)i(L.el=a(L.children),O,G);else{const q=L.el=v.el;L.children!==v.children&&c(q,L.children)}},d=(v,L,O,G)=>{v==null?i(L.el=l(L.children||""),O,G):L.el=v.el},E=(v,L,O,G)=>{[v.el,v.anchor]=g(v.children,L,O,G,v.el,v.anchor)},x=({el:v,anchor:L},O,G)=>{let q;for(;v&&v!==L;)q=h(v),i(v,O,G),v=q;i(L,O,G)},S=({el:v,anchor:L})=>{let O;for(;v&&v!==L;)O=h(v),r(v),v=O;r(L)},T=(v,L,O,G,q,ce,fe,Q,he)=>{fe=fe||L.type==="svg",v==null?w(L,O,G,q,ce,fe,Q,he):M(v,L,q,ce,fe,Q,he)},w=(v,L,O,G,q,ce,fe,Q)=>{let he,le;const{type:be,props:b,shapeFlag:y,transition:B,dirs:te}=v;if(he=v.el=o(v.type,ce,b&&b.is,b),y&8?u(he,v.children):y&16&&D(v.children,he,null,G,q,ce&&be!=="foreignObject",fe,Q),te&&qi(v,null,G,"created"),P(he,v,v.scopeId,fe,G),b){for(const C in b)C!=="value"&&!Ko(C)&&s(he,C,null,b[C],ce,v.children,G,q,$);"value"in b&&s(he,"value",null,b.value),(le=b.onVnodeBeforeMount)&&On(le,G,v)}te&&qi(v,null,G,"beforeMount");const ae=(!q||q&&!q.pendingBranch)&&B&&!B.persisted;ae&&B.beforeEnter(he),i(he,L,O),((le=b&&b.onVnodeMounted)||ae||te)&&Vt(()=>{le&&On(le,G,v),ae&&B.enter(he),te&&qi(v,null,G,"mounted")},q)},P=(v,L,O,G,q)=>{if(O&&p(v,O),G)for(let ce=0;ce<G.length;ce++)p(v,G[ce]);if(q){let ce=q.subTree;if(L===ce){const fe=q.vnode;P(v,fe,fe.scopeId,fe.slotScopeIds,q.parent)}}},D=(v,L,O,G,q,ce,fe,Q,he=0)=>{for(let le=he;le<v.length;le++){const be=v[le]=Q?yi(v[le]):Nn(v[le]);_(null,be,L,O,G,q,ce,fe,Q)}},M=(v,L,O,G,q,ce,fe)=>{const Q=L.el=v.el;let{patchFlag:he,dynamicChildren:le,dirs:be}=L;he|=v.patchFlag&16;const b=v.props||rt,y=L.props||rt;let B;O&&Yi(O,!1),(B=y.onVnodeBeforeUpdate)&&On(B,O,L,v),be&&qi(L,v,O,"beforeUpdate"),O&&Yi(O,!0);const te=q&&L.type!=="foreignObject";if(le?R(v.dynamicChildren,le,Q,O,G,te,ce):fe||X(v,L,Q,null,O,G,te,ce,!1),he>0){if(he&16)j(Q,L,b,y,O,G,q);else if(he&2&&b.class!==y.class&&s(Q,"class",null,y.class,q),he&4&&s(Q,"style",b.style,y.style,q),he&8){const ae=L.dynamicProps;for(let C=0;C<ae.length;C++){const ne=ae[C],me=b[ne],K=y[ne];(K!==me||ne==="value")&&s(Q,ne,me,K,q,v.children,O,G,$)}}he&1&&v.children!==L.children&&u(Q,L.children)}else!fe&&le==null&&j(Q,L,b,y,O,G,q);((B=y.onVnodeUpdated)||be)&&Vt(()=>{B&&On(B,O,L,v),be&&qi(L,v,O,"updated")},G)},R=(v,L,O,G,q,ce,fe)=>{for(let Q=0;Q<L.length;Q++){const he=v[Q],le=L[Q],be=he.el&&(he.type===Wt||!bs(he,le)||he.shapeFlag&70)?f(he.el):O;_(he,le,be,null,G,q,ce,fe,!0)}},j=(v,L,O,G,q,ce,fe)=>{if(O!==G){if(O!==rt)for(const Q in O)!Ko(Q)&&!(Q in G)&&s(v,Q,O[Q],null,fe,L.children,q,ce,$);for(const Q in G){if(Ko(Q))continue;const he=G[Q],le=O[Q];he!==le&&Q!=="value"&&s(v,Q,le,he,fe,L.children,q,ce,$)}"value"in G&&s(v,"value",O.value,G.value)}},re=(v,L,O,G,q,ce,fe,Q,he)=>{const le=L.el=v?v.el:a(""),be=L.anchor=v?v.anchor:a("");let{patchFlag:b,dynamicChildren:y,slotScopeIds:B}=L;B&&(Q=Q?Q.concat(B):B),v==null?(i(le,O,G),i(be,O,G),D(L.children,O,be,q,ce,fe,Q,he)):b>0&&b&64&&y&&v.dynamicChildren?(R(v.dynamicChildren,y,O,q,ce,fe,Q),(L.key!=null||q&&L===q.subTree)&&Wd(v,L,!0)):X(v,L,O,be,q,ce,fe,Q,he)},N=(v,L,O,G,q,ce,fe,Q,he)=>{L.slotScopeIds=Q,v==null?L.shapeFlag&512?q.ctx.activate(L,O,G,fe,he):V(L,O,G,q,ce,fe,he):W(v,L,he)},V=(v,L,O,G,q,ce,fe)=>{const Q=v.component=Vg(v,G,q);if(Ud(v)&&(Q.ctx.renderer=ge),Wg(Q),Q.asyncDep){if(q&&q.registerDep(Q,Z),!v.el){const he=Q.subTree=$e(gr);d(null,he,L,O)}return}Z(Q,v,L,O,q,ce,fe)},W=(v,L,O)=>{const G=L.component=v.component;if(eg(v,L,O))if(G.asyncDep&&!G.asyncResolved){z(G,L,O);return}else G.next=L,j_(G.update),G.update();else L.el=v.el,G.vnode=L},Z=(v,L,O,G,q,ce,fe)=>{const Q=()=>{if(v.isMounted){let{next:be,bu:b,u:y,parent:B,vnode:te}=v,ae=be,C;Yi(v,!1),be?(be.el=te.el,z(v,be,fe)):be=te,b&&Va(b),(C=be.props&&be.props.onVnodeBeforeUpdate)&&On(C,B,be,te),Yi(v,!0);const ne=Wa(v),me=v.subTree;v.subTree=ne,_(me,ne,f(me.el),ee(me),v,q,ce),be.el=ne.el,ae===null&&tg(v,ne.el),y&&Vt(y,q),(C=be.props&&be.props.onVnodeUpdated)&&Vt(()=>On(C,B,be,te),q)}else{let be;const{el:b,props:y}=L,{bm:B,m:te,parent:ae}=v,C=Zo(L);if(Yi(v,!1),B&&Va(B),!C&&(be=y&&y.onVnodeBeforeMount)&&On(be,ae,L),Yi(v,!0),b&&Me){const ne=()=>{v.subTree=Wa(v),Me(b,v.subTree,v,q,null)};C?L.type.__asyncLoader().then(()=>!v.isUnmounted&&ne()):ne()}else{const ne=v.subTree=Wa(v);_(null,ne,O,G,v,q,ce),L.el=ne.el}if(te&&Vt(te,q),!C&&(be=y&&y.onVnodeMounted)){const ne=L;Vt(()=>On(be,ae,ne),q)}(L.shapeFlag&256||ae&&Zo(ae.vnode)&&ae.vnode.shapeFlag&256)&&v.a&&Vt(v.a,q),v.isMounted=!0,L=O=G=null}},he=v.effect=new Nc(Q,()=>Vc(le),v.scope),le=v.update=()=>he.run();le.id=v.uid,Yi(v,!0),le()},z=(v,L,O)=>{L.component=v;const G=v.vnode.props;v.vnode=L,v.next=null,Rg(v,L.props,G,O),Lg(v,L.children,O),Ms(),Nu(),Ss()},X=(v,L,O,G,q,ce,fe,Q,he=!1)=>{const le=v&&v.children,be=v?v.shapeFlag:0,b=L.children,{patchFlag:y,shapeFlag:B}=L;if(y>0){if(y&128){oe(le,b,O,G,q,ce,fe,Q,he);return}else if(y&256){ue(le,b,O,G,q,ce,fe,Q,he);return}}B&8?(be&16&&$(le,q,ce),b!==le&&u(O,b)):be&16?B&16?oe(le,b,O,G,q,ce,fe,Q,he):$(le,q,ce,!0):(be&8&&u(O,""),B&16&&D(b,O,G,q,ce,fe,Q,he))},ue=(v,L,O,G,q,ce,fe,Q,he)=>{v=v||Zr,L=L||Zr;const le=v.length,be=L.length,b=Math.min(le,be);let y;for(y=0;y<b;y++){const B=L[y]=he?yi(L[y]):Nn(L[y]);_(v[y],B,O,null,q,ce,fe,Q,he)}le>be?$(v,q,ce,!0,!1,b):D(L,O,G,q,ce,fe,Q,he,b)},oe=(v,L,O,G,q,ce,fe,Q,he)=>{let le=0;const be=L.length;let b=v.length-1,y=be-1;for(;le<=b&&le<=y;){const B=v[le],te=L[le]=he?yi(L[le]):Nn(L[le]);if(bs(B,te))_(B,te,O,null,q,ce,fe,Q,he);else break;le++}for(;le<=b&&le<=y;){const B=v[b],te=L[y]=he?yi(L[y]):Nn(L[y]);if(bs(B,te))_(B,te,O,null,q,ce,fe,Q,he);else break;b--,y--}if(le>b){if(le<=y){const B=y+1,te=B<be?L[B].el:G;for(;le<=y;)_(null,L[le]=he?yi(L[le]):Nn(L[le]),O,te,q,ce,fe,Q,he),le++}}else if(le>y)for(;le<=b;)F(v[le],q,ce,!0),le++;else{const B=le,te=le,ae=new Map;for(le=te;le<=y;le++){const Se=L[le]=he?yi(L[le]):Nn(L[le]);Se.key!=null&&ae.set(Se.key,le)}let C,ne=0;const me=y-te+1;let K=!1,we=0;const Ce=new Array(me);for(le=0;le<me;le++)Ce[le]=0;for(le=B;le<=b;le++){const Se=v[le];if(ne>=me){F(Se,q,ce,!0);continue}let ye;if(Se.key!=null)ye=ae.get(Se.key);else for(C=te;C<=y;C++)if(Ce[C-te]===0&&bs(Se,L[C])){ye=C;break}ye===void 0?F(Se,q,ce,!0):(Ce[ye-te]=le+1,ye>=we?we=ye:K=!0,_(Se,L[ye],O,null,q,ce,fe,Q,he),ne++)}const Pe=K?Ig(Ce):Zr;for(C=Pe.length-1,le=me-1;le>=0;le--){const Se=te+le,ye=L[Se],Le=Se+1<be?L[Se+1].el:G;Ce[le]===0?_(null,ye,O,Le,q,ce,fe,Q,he):K&&(C<0||le!==Pe[C]?Ee(ye,O,Le,2):C--)}}},Ee=(v,L,O,G,q=null)=>{const{el:ce,type:fe,transition:Q,children:he,shapeFlag:le}=v;if(le&6){Ee(v.component.subTree,L,O,G);return}if(le&128){v.suspense.move(L,O,G);return}if(le&64){fe.move(v,L,O,ge);return}if(fe===Wt){i(ce,L,O);for(let b=0;b<he.length;b++)Ee(he[b],L,O,G);i(v.anchor,L,O);return}if(fe===Qo){x(v,L,O);return}if(G!==2&&le&1&&Q)if(G===0)Q.beforeEnter(ce),i(ce,L,O),Vt(()=>Q.enter(ce),q);else{const{leave:b,delayLeave:y,afterLeave:B}=Q,te=()=>i(ce,L,O),ae=()=>{b(ce,()=>{te(),B&&B()})};y?y(ce,te,ae):ae()}else i(ce,L,O)},F=(v,L,O,G=!1,q=!1)=>{const{type:ce,props:fe,ref:Q,children:he,dynamicChildren:le,shapeFlag:be,patchFlag:b,dirs:y}=v;if(Q!=null&&Zl(Q,null,O,v,!0),be&256){L.ctx.deactivate(v);return}const B=be&1&&y,te=!Zo(v);let ae;if(te&&(ae=fe&&fe.onVnodeBeforeUnmount)&&On(ae,L,v),be&6)I(v.component,O,G);else{if(be&128){v.suspense.unmount(O,G);return}B&&qi(v,null,L,"beforeUnmount"),be&64?v.type.remove(v,L,O,q,ge,G):le&&(ce!==Wt||b>0&&b&64)?$(le,L,O,!1,!0):(ce===Wt&&b&384||!q&&be&16)&&$(he,L,O),G&&pe(v)}(te&&(ae=fe&&fe.onVnodeUnmounted)||B)&&Vt(()=>{ae&&On(ae,L,v),B&&qi(v,null,L,"unmounted")},O)},pe=v=>{const{type:L,el:O,anchor:G,transition:q}=v;if(L===Wt){de(O,G);return}if(L===Qo){S(v);return}const ce=()=>{r(O),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(v.shapeFlag&1&&q&&!q.persisted){const{leave:fe,delayLeave:Q}=q,he=()=>fe(O,ce);Q?Q(v.el,ce,he):he()}else ce()},de=(v,L)=>{let O;for(;v!==L;)O=h(v),r(v),v=O;r(L)},I=(v,L,O)=>{const{bum:G,scope:q,update:ce,subTree:fe,um:Q}=v;G&&Va(G),q.stop(),ce&&(ce.active=!1,F(fe,v,L,O)),Q&&Vt(Q,L),Vt(()=>{v.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},$=(v,L,O,G=!1,q=!1,ce=0)=>{for(let fe=ce;fe<v.length;fe++)F(v[fe],L,O,G,q)},ee=v=>v.shapeFlag&6?ee(v.component.subTree):v.shapeFlag&128?v.suspense.next():h(v.anchor||v.el),_e=(v,L,O)=>{v==null?L._vnode&&F(L._vnode,null,null,!0):_(L._vnode||null,v,L,null,null,null,O),Nu(),Ad(),L._vnode=v},ge={p:_,um:F,m:Ee,r:pe,mt:V,mc:D,pc:X,pbc:R,n:ee,o:n};let Ue,Me;return e&&([Ue,Me]=e(ge)),{render:_e,hydrate:Ue,createApp:Ag(_e,Ue)}}function Yi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Wd(n,e,t=!1){const i=n.children,r=e.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=yi(r[s]),a.el=o.el),t||Wd(o,a)),a.type===Ra&&(a.el=o.el)}}function Ig(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Og=n=>n.__isTeleport,Wt=Symbol.for("v-fgt"),Ra=Symbol.for("v-txt"),gr=Symbol.for("v-cmt"),Qo=Symbol.for("v-stc"),Hs=[];let Cn=null;function Un(n=!1){Hs.push(Cn=n?null:[])}function Ng(){Hs.pop(),Cn=Hs[Hs.length-1]||null}let $s=1;function Yu(n){$s+=n}function Xd(n){return n.dynamicChildren=$s>0?Cn||Zr:null,Ng(),$s>0&&Cn&&Cn.push(n),n}function qn(n,e,t,i,r,s){return Xd(Oe(n,e,t,i,r,s,!0))}function Fg(n,e,t,i,r){return Xd($e(n,e,t,i,r,!0))}function $l(n){return n?n.__v_isVNode===!0:!1}function bs(n,e){return n.type===e.type&&n.key===e.key}const Ca="__vInternal",qd=({key:n})=>n??null,ea=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Rt(n)||Ut(n)||Ve(n)?{i:Rn,r:n,k:e,f:!!t}:n:null);function Oe(n,e=null,t=null,i=0,r=null,s=n===Wt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&qd(e),ref:e&&ea(e),scopeId:Cd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Rn};return a?(qc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),$s>0&&!o&&Cn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Cn.push(l),l}const $e=Bg;function Bg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===gg)&&(n=gr),$l(n)){const a=os(n,e,!0);return t&&qc(a,t),$s>0&&!s&&Cn&&(a.shapeFlag&6?Cn[Cn.indexOf(n)]=a:Cn.push(a)),a.patchFlag|=-2,a}if(Kg(n)&&(n=n.__vccOpts),e){e=zg(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=Ic(a)),pt(l)&&(gd(l)&&!Be(l)&&(l=Tt({},l)),e.style=Uc(l))}const o=Rt(n)?1:ng(n)?128:Og(n)?64:pt(n)?4:Ve(n)?2:0;return Oe(n,e,t,i,r,o,s,!0)}function zg(n){return n?gd(n)||Ca in n?Tt({},n):n:null}function os(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?kg(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&qd(a),ref:e&&e.ref?t&&r?Be(r)?r.concat(ea(e)):[r,ea(e)]:ea(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Wt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&os(n.ssContent),ssFallback:n.ssFallback&&os(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Ql(n=" ",e=0){return $e(Ra,null,n,e)}function mi(n,e){const t=$e(Qo,null,n);return t.staticCount=e,t}function Yd(n="",e=!1){return e?(Un(),Fg(gr,null,n)):$e(gr,null,n)}function Nn(n){return n==null||typeof n=="boolean"?$e(gr):Be(n)?$e(Wt,null,n.slice()):typeof n=="object"?yi(n):$e(Ra,null,String(n))}function yi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:os(n)}function qc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),qc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ca in e)?e._ctx=Rn:r===3&&Rn&&(Rn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:Rn},t=32):(e=String(e),i&64?(t=16,e=[Ql(e)]):t=8);n.children=e,n.shapeFlag|=t}function kg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ic([e.class,i.class]));else if(r==="style")e.style=Uc([e.style,i.style]);else if(Ma(r)){const s=e[r],o=i[r];o&&s!==o&&!(Be(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function On(n,e,t,i=null){Ln(n,e,7,[t,i])}const Hg=Bd();let Gg=0;function Vg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Hg,s={uid:Gg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new u_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kd(i,r),emitsOptions:Rd(i,r),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:i.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Z_.bind(null,s),n.ce&&n.ce(s),s}let wt=null,Yc,Tr,ju="__VUE_INSTANCE_SETTERS__";(Tr=kl()[ju])||(Tr=kl()[ju]=[]),Tr.push(n=>wt=n),Yc=n=>{Tr.length>1?Tr.forEach(e=>e(n)):Tr[0](n)};const as=n=>{Yc(n),n.scope.on()},lr=()=>{wt&&wt.scope.off(),Yc(null)};function jd(n){return n.vnode.shapeFlag&4}let Qs=!1;function Wg(n,e=!1){Qs=e;const{props:t,children:i}=n.vnode,r=jd(n);wg(n,t,r,e),Pg(n,i);const s=r?Xg(n,e):void 0;return Qs=!1,s}function Xg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=vd(new Proxy(n.ctx,xg));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Yg(n):null;as(n),Ms();const s=Li(i,n,0,[n.props,r]);if(Ss(),lr(),rd(s)){if(s.then(lr,lr),e)return s.then(o=>{Ku(n,o,e)}).catch(o=>{ba(o,n,0)});n.asyncDep=s}else Ku(n,s,e)}else Kd(n,e)}function Ku(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pt(e)&&(n.setupState=Ed(e)),Kd(n,t)}let Ju;function Kd(n,e,t){const i=n.type;if(!n.render){if(!e&&Ju&&!i.render){const r=i.template||Wc(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Tt(Tt({isCustomElement:s,delimiters:a},o),l);i.render=Ju(r,c)}}n.render=i.render||Pn}as(n),Ms(),Mg(n),Ss(),lr()}function qg(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return $t(n,"get","$attrs"),e[t]}}))}function Yg(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return qg(n)},slots:n.slots,emit:n.emit,expose:e}}function jc(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Ed(vd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ks)return ks[t](n)},has(e,t){return t in e||t in ks}}))}function jg(n,e=!0){return Ve(n)?n.displayName||n.name:n.name||e&&n.__name}function Kg(n){return Ve(n)&&"__vccOpts"in n}const zn=(n,e)=>X_(n,e,Qs);function Jd(n,e,t){const i=arguments.length;return i===2?pt(e)&&!Be(e)?$l(e)?$e(n,null,[e]):$e(n,e):$e(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&$l(t)&&(t=[t]),$e(n,e,t))}const Jg=Symbol.for("v-scx"),Zg=()=>ci(Jg),$g="3.3.4",Qg="http://www.w3.org/2000/svg",rr=typeof document<"u"?document:null,Zu=rr&&rr.createElement("template"),e0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?rr.createElementNS(Qg,n):rr.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>rr.createTextNode(n),createComment:n=>rr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>rr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Zu.innerHTML=i?`<svg>${n}</svg>`:n;const a=Zu.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function t0(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function n0(n,e,t){const i=n.style,r=Rt(t);if(t&&!r){if(e&&!Rt(e))for(const s in e)t[s]==null&&ec(i,s,"");for(const s in t)ec(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const $u=/\s*!important$/;function ec(n,e,t){if(Be(t))t.forEach(i=>ec(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=i0(n,e);$u.test(t)?n.setProperty(xs(i),t.replace($u,""),"important"):n[i]=t}}const Qu=["Webkit","Moz","ms"],qa={};function i0(n,e){const t=qa[e];if(t)return t;let i=Xn(e);if(i!=="filter"&&i in n)return qa[e]=i;i=ya(i);for(let r=0;r<Qu.length;r++){const s=Qu[r]+i;if(s in n)return qa[e]=s}return e}const ef="http://www.w3.org/1999/xlink";function r0(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(ef,e.slice(6,e.length)):n.setAttributeNS(ef,e,t);else{const s=c_(e);t==null||s&&!sd(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function s0(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=sd(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function o0(n,e,t,i){n.addEventListener(e,t,i)}function a0(n,e,t,i){n.removeEventListener(e,t,i)}function l0(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=c0(e);if(i){const c=s[e]=h0(i,r);o0(n,a,c,l)}else o&&(a0(n,a,o,l),s[e]=void 0)}}const tf=/(?:Once|Passive|Capture)$/;function c0(n){let e;if(tf.test(n)){e={};let i;for(;i=n.match(tf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):xs(n.slice(2)),e]}let Ya=0;const u0=Promise.resolve(),f0=()=>Ya||(u0.then(()=>Ya=0),Ya=Date.now());function h0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Ln(d0(i,t.value),e,5,[i])};return t.value=n,t.attached=f0(),t}function d0(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const nf=/^on[a-z]/,p0=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?t0(n,i,r):e==="style"?n0(n,t,i):Ma(e)?Cc(e)||l0(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):m0(n,e,i,r))?s0(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),r0(n,e,i,r))};function m0(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&nf.test(e)&&Ve(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||nf.test(e)&&Rt(t)?!1:e in n}const _0=Tt({patchProp:p0},e0);let rf;function g0(){return rf||(rf=Dg(_0))}const v0=(...n)=>{const e=g0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=x0(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function x0(n){return Rt(n)?document.querySelector(n):n}const ki=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},M0={},S0=Oe("div",{id:"ball"},null,-1);function E0(n,e){const t=Xt("router-view");return Un(),qn(Wt,null,[$e(t),S0],64)}const y0=ki(M0,[["render",E0]]);/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Zd=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Es=n=>Zd?Symbol(n):"_vr_"+n,T0=Es("rvlm"),sf=Es("rvd"),Kc=Es("r"),$d=Es("rl"),tc=Es("rvl"),Xr=typeof window<"u";function b0(n){return n.__esModule||Zd&&n[Symbol.toStringTag]==="Module"}const tt=Object.assign;function ja(n,e){const t={};for(const i in e){const r=e[i];t[i]=Array.isArray(r)?r.map(n):n(r)}return t}const Gs=()=>{},A0=/\/$/,w0=n=>n.replace(A0,"");function Ka(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(i=e.slice(0,a),s=e.slice(a+1,l>-1?l:e.length),r=n(s)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=L0(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function R0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function of(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function C0(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&ls(e.matched[i],t.matched[r])&&Qd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ls(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Qd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!P0(n[t],e[t]))return!1;return!0}function P0(n,e){return Array.isArray(n)?af(n,e):Array.isArray(e)?af(e,n):n===e}function af(n,e){return Array.isArray(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function L0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],!(r===1||o==="."))if(o==="..")r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var eo;(function(n){n.pop="pop",n.push="push"})(eo||(eo={}));var Vs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Vs||(Vs={}));function D0(n){if(!n)if(Xr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),w0(n)}const U0=/^[^#]+#/;function I0(n,e){return n.replace(U0,"#")+e}function O0(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Pa=()=>({left:window.pageXOffset,top:window.pageYOffset});function N0(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=O0(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function lf(n,e){return(history.state?history.state.position-e:-1)+n}const nc=new Map;function F0(n,e){nc.set(n,e)}function B0(n){const e=nc.get(n);return nc.delete(n),e}let z0=()=>location.protocol+"//"+location.host;function ep(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),of(l,"")}return of(t,n)+i+r}function k0(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=ep(n,location),g=t.value,_=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else i(p);r.forEach(d=>{d(t.value,g,{delta:m,type:eo.pop,direction:m?m>0?Vs.forward:Vs.back:Vs.unknown})})};function l(){o=t.value}function c(h){r.push(h);const p=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(tt({},h.state,{scroll:Pa()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function cf(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Pa():null}}function H0(n){const{history:e,location:t}=window,i={value:ep(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:z0()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){const u=tt({},e.state,cf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=tt({},r.value,e.state,{forward:l,scroll:Pa()});s(u.current,u,!0);const f=tt({},cf(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function G0(n){n=D0(n);const e=H0(n),t=k0(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=tt({location:"",base:n,go:i,createHref:I0.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function V0(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),G0(n)}function W0(n){return typeof n=="string"||n&&typeof n=="object"}function tp(n){return typeof n=="string"||typeof n=="symbol"}const gi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},np=Es("nf");var uf;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(uf||(uf={}));function cs(n,e){return tt(new Error,{type:n,[np]:!0},e)}function vi(n,e){return n instanceof Error&&np in n&&(e==null||!!(n.type&e))}const ff="[^/]+?",X0={sensitive:!1,strict:!1,start:!0,end:!0},q0=/[.+*?^${}()[\]/\\]/g;function Y0(n,e){const t=tt({},X0,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(q0,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:_,optional:m,regexp:d}=h;s.push({name:g,repeatable:_,optional:m});const E=d||ff;if(E!==ff){p+=10;try{new RegExp(`(${E})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+S.message)}}let x=_?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),r+=x,p+=20,m&&(p+=-8),_&&(p+=-20),E===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=s[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:_,optional:m}=p,d=g in c?c[g]:"";if(Array.isArray(d)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=Array.isArray(d)?d.join("/"):d;if(!E)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u}return{re:o,score:i,keys:s,parse:a,stringify:l}}function j0(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function K0(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=j0(i[t],r[t]);if(s)return s;t++}return r.length-i.length}const J0={type:0,value:""},Z0=/[a-zA-Z0-9_]/;function $0(n){if(!n)return[[]];if(n==="/")return[[J0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:Z0.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function Q0(n,e,t){const i=Y0($0(n.path),t),r=tt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ev(n,e){const t=[],i=new Map;e=df({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const p=!h,g=nv(u);g.aliasOf=h&&h.record;const _=df(e,u),m=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of x)m.push(tt({},g,{components:h?h.record.components:g.components,path:S,aliasOf:h?h.record:g}))}let d,E;for(const x of m){const{path:S}=x;if(f&&S[0]!=="/"){const T=f.record.path,w=T[T.length-1]==="/"?"":"/";x.path=f.record.path+(S&&w+S)}if(d=Q0(x,f,_),h?h.alias.push(d):(E=E||d,E!==d&&E.alias.push(d),p&&u.name&&!hf(d)&&o(u.name)),"children"in g){const T=g.children;for(let w=0;w<T.length;w++)s(T[w],d,h&&h.children[w])}h=h||d,l(d)}return E?()=>{o(E)}:Gs}function o(u){if(tp(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&K0(u,t[f])>=0&&(u.record.path!==t[f].record.path||!ip(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!hf(u)&&i.set(u.record.name,u)}function c(u,f){let h,p={},g,_;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw cs(1,{location:u});_=h.record.name,p=tt(tv(f.params,h.keys.filter(E=>!E.optional).map(E=>E.name)),u.params),g=h.stringify(p)}else if("path"in u)g=u.path,h=t.find(E=>E.re.test(g)),h&&(p=h.parse(g),_=h.record.name);else{if(h=f.name?i.get(f.name):t.find(E=>E.re.test(f.path)),!h)throw cs(1,{location:u,currentLocation:f});_=h.record.name,p=tt({},f.params,u.params),g=h.stringify(p)}const m=[];let d=h;for(;d;)m.unshift(d.record),d=d.parent;return{name:_,path:g,params:p,matched:m,meta:rv(m)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function tv(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function nv(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:iv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||{}:{default:n.component}}}function iv(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function hf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function rv(n){return n.reduce((e,t)=>tt(e,t.meta),{})}function df(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function ip(n,e){return e.children.some(t=>t===n||ip(n,t))}const rp=/#/g,sv=/&/g,ov=/\//g,av=/=/g,lv=/\?/g,sp=/\+/g,cv=/%5B/g,uv=/%5D/g,op=/%5E/g,fv=/%60/g,ap=/%7B/g,hv=/%7C/g,lp=/%7D/g,dv=/%20/g;function Jc(n){return encodeURI(""+n).replace(hv,"|").replace(cv,"[").replace(uv,"]")}function pv(n){return Jc(n).replace(ap,"{").replace(lp,"}").replace(op,"^")}function ic(n){return Jc(n).replace(sp,"%2B").replace(dv,"+").replace(rp,"%23").replace(sv,"%26").replace(fv,"`").replace(ap,"{").replace(lp,"}").replace(op,"^")}function mv(n){return ic(n).replace(av,"%3D")}function _v(n){return Jc(n).replace(rp,"%23").replace(lv,"%3F")}function gv(n){return n==null?"":_v(n).replace(ov,"%2F")}function ua(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function vv(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(sp," "),o=s.indexOf("="),a=ua(o<0?s:s.slice(0,o)),l=o<0?null:ua(s.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function pf(n){let e="";for(let t in n){const i=n[t];if(t=mv(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Array.isArray(i)?i.map(s=>s&&ic(s)):[i&&ic(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function xv(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Array.isArray(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}function As(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function Ti(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(cs(4,{from:t,to:e})):f instanceof Error?a(f):W0(f)?a(cs(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Ja(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Mv(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Ti(c,t,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=b0(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Ti(h,t,i,s,o)()}))}}return r}function Mv(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function mf(n){const e=ci(Kc),t=ci($d),i=zn(()=>e.resolve(zs(n.to))),r=zn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(ls.bind(null,u));if(h>-1)return h;const p=_f(l[c-2]);return c>1&&_f(u)===p&&f[f.length-1].path!==p?f.findIndex(ls.bind(null,l[c-2])):h}),s=zn(()=>r.value>-1&&Tv(t.params,i.value.params)),o=zn(()=>r.value>-1&&r.value===t.matched.length-1&&Qd(t.params,i.value.params));function a(l={}){return yv(l)?e[zs(n.replace)?"replace":"push"](zs(n.to)).catch(Gs):Promise.resolve()}return{route:i,href:zn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const Sv=Dd({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mf,setup(n,{slots:e}){const t=fo(mf(n)),{options:i}=ci(Kc),r=zn(()=>({[gf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[gf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Jd("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Ev=Sv;function yv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Tv(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function _f(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const gf=(n,e,t)=>n??e??t,bv=Dd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(n,{attrs:e,slots:t}){const i=ci(tc),r=zn(()=>n.route||i.value),s=ci(sf,0),o=zn(()=>r.value.matched[s]);$o(sf,s+1),$o(T0,o),$o(tc,r);const a=k_();return Jo(()=>[a.value,o.value,n.name],([l,c,u],[f,h,p])=>{c&&(c.instances[u]=l,h&&h!==c&&l&&l===f&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),l&&c&&(!h||!ls(c,h)||!f)&&(c.enterCallbacks[u]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=r.value,c=o.value,u=c&&c.components[n.name],f=n.name;if(!u)return vf(t.default,{Component:u,route:l});const h=c.props[n.name],p=h?h===!0?l.params:typeof h=="function"?h(l):h:null,_=Jd(u,tt({},p,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(c.instances[f]=null)},ref:a}));return vf(t.default,{Component:_,route:l})||_}}});function vf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Av=bv;function wv(n){const e=ev(n.routes,n),t=n.parseQuery||vv,i=n.stringifyQuery||pf,r=n.history,s=As(),o=As(),a=As(),l=H_(gi);let c=gi;Xr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ja.bind(null,I=>""+I),f=ja.bind(null,gv),h=ja.bind(null,ua);function p(I,$){let ee,_e;return tp(I)?(ee=e.getRecordMatcher(I),_e=$):_e=I,e.addRoute(_e,ee)}function g(I){const $=e.getRecordMatcher(I);$&&e.removeRoute($)}function _(){return e.getRoutes().map(I=>I.record)}function m(I){return!!e.getRecordMatcher(I)}function d(I,$){if($=tt({},$||l.value),typeof I=="string"){const v=Ka(t,I,$.path),L=e.resolve({path:v.path},$),O=r.createHref(v.fullPath);return tt(v,L,{params:h(L.params),hash:ua(v.hash),redirectedFrom:void 0,href:O})}let ee;if("path"in I)ee=tt({},I,{path:Ka(t,I.path,$.path).path});else{const v=tt({},I.params);for(const L in v)v[L]==null&&delete v[L];ee=tt({},I,{params:f(I.params)}),$.params=f($.params)}const _e=e.resolve(ee,$),ge=I.hash||"";_e.params=u(h(_e.params));const Ue=R0(i,tt({},I,{hash:pv(ge),path:_e.path})),Me=r.createHref(Ue);return tt({fullPath:Ue,hash:ge,query:i===pf?xv(I.query):I.query||{}},_e,{redirectedFrom:void 0,href:Me})}function E(I){return typeof I=="string"?Ka(t,I,l.value.path):tt({},I)}function x(I,$){if(c!==I)return cs(8,{from:$,to:I})}function S(I){return P(I)}function T(I){return S(tt(E(I),{replace:!0}))}function w(I){const $=I.matched[I.matched.length-1];if($&&$.redirect){const{redirect:ee}=$;let _e=typeof ee=="function"?ee(I):ee;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=E(_e):{path:_e},_e.params={}),tt({query:I.query,hash:I.hash,params:I.params},_e)}}function P(I,$){const ee=c=d(I),_e=l.value,ge=I.state,Ue=I.force,Me=I.replace===!0,v=w(ee);if(v)return P(tt(E(v),{state:ge,force:Ue,replace:Me}),$||ee);const L=ee;L.redirectedFrom=$;let O;return!Ue&&C0(i,_e,ee)&&(O=cs(16,{to:L,from:_e}),oe(_e,_e,!0,!1)),(O?Promise.resolve(O):M(L,_e)).catch(G=>vi(G)?vi(G,2)?G:ue(G):z(G,L,_e)).then(G=>{if(G){if(vi(G,2))return P(tt(E(G.to),{state:ge,force:Ue,replace:Me}),$||L)}else G=j(L,_e,!0,Me,ge);return R(L,_e,G),G})}function D(I,$){const ee=x(I,$);return ee?Promise.reject(ee):Promise.resolve()}function M(I,$){let ee;const[_e,ge,Ue]=Rv(I,$);ee=Ja(_e.reverse(),"beforeRouteLeave",I,$);for(const v of _e)v.leaveGuards.forEach(L=>{ee.push(Ti(L,I,$))});const Me=D.bind(null,I,$);return ee.push(Me),br(ee).then(()=>{ee=[];for(const v of s.list())ee.push(Ti(v,I,$));return ee.push(Me),br(ee)}).then(()=>{ee=Ja(ge,"beforeRouteUpdate",I,$);for(const v of ge)v.updateGuards.forEach(L=>{ee.push(Ti(L,I,$))});return ee.push(Me),br(ee)}).then(()=>{ee=[];for(const v of I.matched)if(v.beforeEnter&&!$.matched.includes(v))if(Array.isArray(v.beforeEnter))for(const L of v.beforeEnter)ee.push(Ti(L,I,$));else ee.push(Ti(v.beforeEnter,I,$));return ee.push(Me),br(ee)}).then(()=>(I.matched.forEach(v=>v.enterCallbacks={}),ee=Ja(Ue,"beforeRouteEnter",I,$),ee.push(Me),br(ee))).then(()=>{ee=[];for(const v of o.list())ee.push(Ti(v,I,$));return ee.push(Me),br(ee)}).catch(v=>vi(v,8)?v:Promise.reject(v))}function R(I,$,ee){for(const _e of a.list())_e(I,$,ee)}function j(I,$,ee,_e,ge){const Ue=x(I,$);if(Ue)return Ue;const Me=$===gi,v=Xr?history.state:{};ee&&(_e||Me?r.replace(I.fullPath,tt({scroll:Me&&v&&v.scroll},ge)):r.push(I.fullPath,ge)),l.value=I,oe(I,$,ee,Me),ue()}let re;function N(){re=r.listen((I,$,ee)=>{const _e=d(I),ge=w(_e);if(ge){P(tt(ge,{replace:!0}),_e).catch(Gs);return}c=_e;const Ue=l.value;Xr&&F0(lf(Ue.fullPath,ee.delta),Pa()),M(_e,Ue).catch(Me=>vi(Me,12)?Me:vi(Me,2)?(P(Me.to,_e).then(v=>{vi(v,20)&&!ee.delta&&ee.type===eo.pop&&r.go(-1,!1)}).catch(Gs),Promise.reject()):(ee.delta&&r.go(-ee.delta,!1),z(Me,_e,Ue))).then(Me=>{Me=Me||j(_e,Ue,!1),Me&&(ee.delta?r.go(-ee.delta,!1):ee.type===eo.pop&&vi(Me,20)&&r.go(-1,!1)),R(_e,Ue,Me)}).catch(Gs)})}let V=As(),W=As(),Z;function z(I,$,ee){ue(I);const _e=W.list();return _e.length?_e.forEach(ge=>ge(I,$,ee)):console.error(I),Promise.reject(I)}function X(){return Z&&l.value!==gi?Promise.resolve():new Promise((I,$)=>{V.add([I,$])})}function ue(I){return Z||(Z=!I,N(),V.list().forEach(([$,ee])=>I?ee(I):$()),V.reset()),I}function oe(I,$,ee,_e){const{scrollBehavior:ge}=n;if(!Xr||!ge)return Promise.resolve();const Ue=!ee&&B0(lf(I.fullPath,0))||(_e||!ee)&&history.state&&history.state.scroll||null;return Td().then(()=>ge(I,$,Ue)).then(Me=>Me&&N0(Me)).catch(Me=>z(Me,I,$))}const Ee=I=>r.go(I);let F;const pe=new Set;return{currentRoute:l,addRoute:p,removeRoute:g,hasRoute:m,getRoutes:_,resolve:d,options:n,push:S,replace:T,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:X,install(I){const $=this;I.component("RouterLink",Ev),I.component("RouterView",Av),I.config.globalProperties.$router=$,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>zs(l)}),Xr&&!F&&l.value===gi&&(F=!0,S(r.location).catch(ge=>{}));const ee={};for(const ge in gi)ee[ge]=zn(()=>l.value[ge]);I.provide(Kc,$),I.provide($d,fo(ee)),I.provide(tc,l);const _e=I.unmount;pe.add(I),I.unmount=function(){pe.delete(I),pe.size<1&&(c=gi,re&&re(),l.value=gi,F=!1,Z=!1),_e()}}}}function br(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function Rv(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>ls(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>ls(c,l))||r.push(l))}return[t,i,r]}const Cv={data(){return{menuOpen:!1}},methods:{toggle(){const n=document.querySelectorAll(".menu_toggle"),e=document.getElementById("mobile_menu");n.forEach(t=>{t.classList.toggle("active"),e.classList.toggle("active")}),this.menuOpen=!this.menuOpen}}},Pv={class:"header"},Lv={class:"headerdiv"},Dv=Oe("h1",null,[Oe("a",{title:"Home - Portfolio Santiago Thevenet",href:"/portfolio-santi/#/"},"S.T")],-1),Uv=Oe("hr",{class:"hr"},null,-1),Iv=Oe("i",{class:"fas fa-bars"},null,-1),Ov=[Iv],Nv={class:"nav",id:"mobile_menu"},Fv={class:"ul"},Bv=Oe("a",{title:"Home - Portfolio Santiago Thevenet",href:"/portfolio-santi/#/"},"Home",-1),zv=[Bv],kv=Oe("a",{title:"Works - Portfolio Santiago Thevenet",href:"/portfolio-santi/#/#works"},"Works",-1),Hv=[kv],Gv=Oe("a",{title:"About me - Portfolio Santiago Thevenet",href:"/portfolio-santi/#/#about"},"About Me",-1),Vv=[Gv],Wv=Oe("a",{title:"Resume - Portfolio Santiago Thevenet",href:"/portfolio-santi/#/resume"},"Resume",-1),Xv=[Wv];function qv(n,e,t,i,r,s){return Un(),qn("header",Pv,[Oe("div",Lv,[Dv,Uv,Oe("div",{onClick:e[0]||(e[0]=o=>s.toggle()),class:"menu_icon menu_toggle"},Ov),Oe("nav",Nv,[Oe("ul",Fv,[r.menuOpen?(Un(),qn("i",{key:0,onClick:e[1]||(e[1]=o=>s.toggle()),class:"fas fa-x"})):Yd("",!0),Oe("li",{onClick:e[2]||(e[2]=o=>s.toggle()),class:"li menu-toggle"},zv),Oe("li",{onClick:e[3]||(e[3]=o=>s.toggle()),class:"li menu-toggle"},Hv),Oe("li",{onClick:e[4]||(e[4]=o=>s.toggle()),class:"li menu-toggle"},Vv),Oe("li",{onClick:e[5]||(e[5]=o=>s.toggle()),class:"li menu-toggle"},Xv)])])])])}const Yv=ki(Cv,[["render",qv]]),jv={name:"FooterVue"},Kv={class:"footer"},Jv=mi('<div class="section_footer"><span class="span">© 2023 SANTIAGO THEVENET</span><div class="footerrss"><a class="a_footer" title="This is a link to my Instagram" target="_blank" href="https://www.instagram.com/santiii22/"><i class="fa-brands fa-instagram"></i></a><a class="a_footer" title="This is a link to my Linkedin" target="_blank" href="https://www.linkedin.com/in/santiagothevenetvalles/"><i class="fa-brands fa-linkedin"></i></a><a class="a_footer" title="This is a link to Github" target="_blank" href="https://github.com/SantiagoThevenet"><i class="fa-brands fa-github"></i></a></div></div>',1),Zv=[Jv];function $v(n,e,t,i,r,s){return Un(),qn("footer",Kv,Zv)}const La=ki(jv,[["render",$v]]),Qv="/portfolio-santi/assets/balubackground-dcb8ebcd.png",ex="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABGtJREFUeJzt3UFuFEcYhuEP2GYXHCmcxsoJIuUMOQMLklASF+vkOMCSpcFZdEwMuAfPTPVUddfzSLX2P+V6ZcvqLicAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAx3nWegAe9CLJD0k+tB4EelOSfPpv/dF2FOjLmyS3X63SciDoxUNxiARyOA6RMLTHxCEShnRMHCJhKKfEIRKGcE4cImHXasQhEnapZhwiYVfWiEMk7MKacYiETbtEHCJhky4Zh0jYlBZxiIRNaBmHSOhaD3GIhC71FIdI6EqPcYiELvQch0hoagtxiIQmthTH3Xq1yk7AV7YYx22Sj0muVtgP+GyrcdwmuUnyvP6WwGzLcdwmeVl/S2C29ThcRMdqxAELxAELxAELth7Hn/W3BGbigAXigAXigAXigAVbj+Ov+lsCM3HAAnHAAnHAgq3H8br+lsBMHLBAHLBAHBzlaesBLuhNtv9k65PWA7BPW//JcX+VulvD6PYUh0ioqqT9YRYJXXqR5FPaH2SR0KWfs/9ARLKyZ60HWNGHzLcI/tJ6kJVdZ/7r1tR2jH3acyBJ8k/mw3PdeI61XUckq9h7IMl8aETCSUYIJBEJJxolkKTfSEqSv1NvruuIhDOUtP/L0916veJc5cx9YmAlfcWx1lzl5B1ieCV9xbHWXOWEvYEkbSJ5zGuytecqR+0K3FPSVxxrzVWO+NrwhZK+4lhrrnLCDJBk3UjOuX2k9lzljFkYXEn9OGpcB1p7rlJhJgZV0lcca8wlEs5S0lccNecSCVWU9BVHjblEQlUlfcVxzlwiYRUljz9ol7xW6Ji5RMKqSvqK45i5RMJFlPQVx52yMJNIuLiSvuK4UyISOvEq82UQN0leNp7lvhKR0ImrJM9bD/GAEpHAQSUiqWakd9JHMaXuu/fXGfgdd4Hs0xSRVCGQ/ZoikrMJZN+miOQsAtm/KSI5mUDGMEUkJxHIOKaI5GgCGcsUkRxFIOOZIpJHE8iYpojkUQQyriki+S6BjG2KSA4SCFNEskggJCJZJBDuTBHJNwTCfVNE8gWB8LUpIvlMIDxkikiSCIRlU0SySb8leZ+67133sN4l+bXiPtVS4h33TdljHHfrbcV9qqlEJJvR+hCvvXpVIpJNaH2ARw0kEckmtD7AIweS1I/k1UWnH0DrAzx6IEndSD5mvqmSSlofYIHMSup83pv0eY3rZrU+wAL5X8n5n7enC8B3ofUBFsiXSk7/rD3864jdaX2ABfKtEnF0o/UBFsjDSsTRhdYHWCDLSsTRXOsDLJDDSsTRVOsDLJDvKxHH6vb61O6xq9enfL+n1//leJQnrQc44H2SH1sP0Yl3SX5qPcQJrjJH/r71IKfqOZC9/LpRS8/fq9162noA6JlA4ACBwAECgQMEAgcIBA4QCBwgEDhAIHBAz4Fs9vGEFfR6odzu9RzI75mfQRrd28x7AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAG/AuKtvtypmtZGgAAAABJRU5ErkJggg==",tx="/portfolio-santi/assets/minesweeper-eb833138.png",nx="/portfolio-santi/assets/marketplace-48858f31.png",ix="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAACrq6uEhITf39+4uLj7+/tGRkbs7OyNjY2YmJhycnI+Pj5hYWH39/dPT08kJCTo6OgSEhI0NDQbGxvMzMwqKiry8vLT09MLCwuioqK+vr7c3NweHh4uLi56enpYWFhqampKSko4ODiJiYm7u7uenp6xsbF2dnZdXV2I6DiNAAAGaUlEQVR4nO3d6ZaqOhAGUCJOIOCACCoi9mT7/i940T4qKiQVhJtUVn0/z5JD7WULCRmwGCfrxWK3W61WWRiGnueNpkVy/5LJLfZfHPchPz3JbB6Pd+177ue6nPpUVDEqyvGKqrLVarZbLhYchFX1j/kmSdL+eBzHgYUgQRyP5/00cnKYMN/GqktunPHAEwr3fdVVvpno+Yt8FOZz1QW2kCisFS4HqotrJ8N9jTAbqy6ttRwrhaeh6rpaTFQhnKguqt0kL0JfdUltJ3kSfqguqP1ED8Id3pt8fXplYaS6mk6yvwsd1bV0kyC7CVWX0lWiq/CoupLOkv8JV6rr6C7Rn9BVXUeH8S5CE/oTdRmchca1ZsqJ14XwW3UVncZn1trE5sw9G2YdVNfQbRJm9VTX0G3mxgvjtenCYGG6cLgzXWjNjBeuSIg+IQnRxyMh+oyMF05JiD6NhPPo+zgYbKM+hs7zSV4Y+fdB43yj/aiqLyscfLLHOJp/kZLC8S97SbbtqrhWIieMsleg7gM7BxlhVOkrYndX4NuZSAhrgVp/ixLC/rJeqPHwlYTQ5wDZTtvBDxss7PGAjGn7YBksjNd8IUu6LbRxwEJHANR2xhFUGKxEwrWm7TeokHOnuEbTyylUKLjOnKPpbd8BCn/EwqmecxtdoNAVCzM9Z71DhcJLqbZz41oULvVs1rQp1PN2ARUCrjTIf4cbsfAD97X0KBbuOy61YaDCRCzUtE0DFQbVT2jK0fNCY21a61vo2kHsQYVzkVDXqeJgoeh+oe0MR7gweF3ZV8o67bTMNwIXWglvKepPl0W+FQnheb5tXXS9zFhywvpusLY/QktSaG2rHwrberbX/iIntNLTq2+n98pTSWHxY3xu3NiatmWukRZawXF654WOnt3eUuSFRdKjs59M9vYm0rNL+JBGQlQhIf6QEH9IiD8kxB8S/s+Jk+3Gte39Obbj9rZJ+m7DXidhMPB3r52zpff71mM8CeGYm6o2eMw94unDqV3/kCR7YxorXNivL+Ccqm4wp+ai4/XoO/D/e7Zv2k1TJ/RKHxzveZ/8y8Jt1lXTQnjkPae8Z9Zo1bkGwnHFs5+aNHnkpV4YzcBAxqbyVxzlQsDgcjkz6QmCqoVfcsDigiM7QKJYyP1EdZaSGzuqFTYAFn+ocndGpULJ3+A1UzTCbTOg5JZB6oSjGHafr4rMBVXhdzhpDGQjiTu/OuFbkZi7g1QYwlvhSIUM3m/HKvTAXyJWYeX5zBKCZ3+gFYJnJKMVgm8YeIW58UIGXPyAWAjsCusjXHz6/tQTrXIsZYNJGDq3eSvpYCr+/CXABY86CKdP4xLJAXTYJ6xZo4Gw4jnvN+hA2B1RuTCvvCTOxUsDoJca1cK6xtf8eYORisB6+oqF9VNvU7EQNqyoVshbDCZelwvbU0WtkPtLEg7YwIailAr5a6OFy8dhbW+lQsENjbsRBwqhaHm76IkxcJ29QqFoiGXIXaWDQCh+8YtgqZX2wt93TwnrXCgUisdXBCsCtReKT4xdKG6SYBeKm5UCIWxFoEKhuGuAXSju3pGQhKqF4nkxAiFsK0MSkpCEJDRZuBZPwCMhCRULAVMNsAvFo9TmC8ckJCEJSUhCvnAmnkqBXLgiIQlNEMbmC/mrakhIQhKSUCQMKw4gYRMhdC9oEpKwkTDgvUPLDCF/QwkSkpCEJBQJvYoDSNhE+GW8EP7+QxJ2IBzyX9hngNAKSUjCIr/GC+FvyyWhrFC8oKQdIfy93FiF8Herk1BWOAKck7/euW3h/GPEyWfV6okfj3MEZMMAn3dKD7aiBC60htzIH9LNKV8yhQuRhoT4MzJe6JEQfT6NF4bGCzPjhSsSos/OdGGwMF0YGy+cM+tLdQ3dJmXWTHUN3WbALKntv/HltxCKtvpBnWFYCJcIXibaOAkrhDIbnKPL4SKEPF9HmvP6vkII3J4PY77+CTPVhXSVy3KGs1Bil3pc8W9CwCorjDmym5CdVBfTRf6NtFgyoxyoEq8fhMDNQBEluO5JeBWaRgxum2bfhMANT5EkGLFXITOopzgvzRcrCVn+7ntbdcm2vHl9WcgWwL3qNc/j6PqDsGjAoW+jDp/f+fkkZCzcYG7gjN2XVSgvQsbWfk/2NYpaZJj2qnbIrhCeMwu96ck/TCbnl0e7Pz0947quY+8nE9/PP7ysZoXNf+vWdpuwk77oAAAAAElFTkSuQmCC",rx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAADHhJREFUeF7tXQmsXVUVXUuRIlTAgsxqq4AyKDLEiYAoigQHiIIQBDTgBDIYUUscMCoGa0CCIxopCghShkiiIogjCpqoiChoAakCiiiIQqtoZZn1Oe/z3vvvvjvt+8bu5Ocn/9+zzz5n3TPtvc6+xBoZqR7gSFmTYYykxwLYBMDOALYFsEP6/QQAj08/Lv2v9PMAgOUAfpN+Xw/gHpL/G/X2jhwgkmzTkwG8BsDhqfPnBXXkQwmk8wBcBuAOkgrSHaJmJABJI+ClAN4P4AUAPCIGIR4x1wE4BcDVozCChgqIpGcBOBPAXgCGagsAj5TvAziB5I2DeBt61THwTkhT0hEAPgXAa8Aoiteg4wCcO+gpbWCAJCDeBeCjAB43iij0sOm/AN4H4LRBATMQQCQdDOBLANYZEyC6zfw3gDeSvKhp+xsFRNJTAFwLYMumGzIg/XcBeCHJPzZVXyOApOnpLABvacrwIev9AoC3NTGNhQMiyaPhVwAWDLnTmq7+PgDPJulREyahgEg6Nu2ewgwcA0XHkfx0lJ0hgKQp6pJ0uo6ybZz0+NR/YMQUVhsQSWsD+C2ARePUgw3Y+nsA25H8Tx3dtQCRtB6AOwFsWMeICSr7d/vhSK6s2qbKgEjyom0w7G1dI4/2wCoAW5E0OKWlEiCS5gP46xgf9Ep3VMkCDgNsQvLBkuXKO/TSmnEPgA3KVjZlz/8jgVJqTSk1QtJu6o4JOnk3/Y74jOI1pXDMpSwgVwLYp+lWTJj+q0i+vGibCgMi6QMAPlxU8ZrnOnrgZJIfKdInhQCRtB2Am4oo7HrGQ9WL/2MAPHGAkcAKpvYtYje81821AGxaUfn2JG/OK5sLSAqv/hPAunnKevy/482QZKLCuwEcDcBnmFGWewH4rT67fbck6XN2LFYw3Nvh9fPCxEUA+QaA/SoY4CIbkvRuY45Iej6ApT7dVtTdVDHH2I8kae9DL7s3A/DnipV/k+Qr+pXtC4ikXQD8vGLlD5LMDdFKehIA+8H2rFhPVLEfAjigyIFOkgNWVZkwu5L8RZbRmYCkLa7f7txOzVB+GcnXFu0tSVsB+BGAp2aU8Xpke+wdsN/InCu/qfenv7uYz0Z242ye6ENP86k5/T2rrQ427UXy9hK2fhuAWTJVxPH6DbK2wv0AORnAh6rUmMocQdL8p1Ii6a0APps62tPl2QBMdHugzH6+vdL0cvnFMtHuKACeNgzc20k6kFZKJB0D4DOlCnU+/EGSPXesPQFJp3Ef/707qipbk7ytSmFvJPIWvyp6u0CqXIckMyd/XcOGh+0D7OUZzgLkHAf1a1ToohuT9E5l4kSSt75312zYUpIerR0yBxBJZoZ4dNSVzB1WXcXDLp883REvm0eJNwiz0gsQMwmPD2j0RiQdd544kbRxOvDWbdsZJN+ZCYgkrxn2TkZwa3cgWeV0X7eRjZeXtCOACLqpucVrk/SaMiMdI0SS2ebnBrXoGJI+1U6cSLKnwTvBCDmM5FeyAPlT2sNHVPQTkmayT5xI8mnenoYIuYukz0qdIyRwXmzp9jBcq+rZIaKlTehIZ5rVNY8E3abN7khnpyxJHwOwOLAR3qn5RGpP6cSIJBPF7TGI5BKcSvK97qR2QP4GYKOgnrObw4F+T4ETJ4md6chprnO2YOPvJemd2yMKE52ndEC+T2VvImmXx8SKpDcDMMc3SuabPtQC5HUAoqj2t5HcOsrKUdYjya4hOzAj5GCSy1qAfAtA4bhvTu0LSf4hwsJR1yHJbE17niPkSpL7tgDxdBURwVtO8hkR1o2LDkm/S1e065q8kuR8Js+urwtHyJ4kr4lQNC46JO0BwMGtCJlnQBwQWhGgzTsrnztm3QABOkdeRXI3+VwSseNaaEB8/++rAS2/iaTjBFMnkhy93D6g4YcYEG9PjwxQlhkFC9A90iok1Y2uttq31ID82BcZA1q8O0lf8Jw6keT+cz/WlWsNiE+cs86tGhrN9jYpbuokKILofrvTgERtedcjaTLY1IkkkwgrX9Jp67CVBqQOx6i989chGbV9HitQJZmj1RGKrdiAhwyIvbHmrNaVdUlGxOLr2jHw8pLs+Y2YHVYbEIcR69B9Wh2wZsqq/yo8bEB8kIs41GxK0gzxqZNEh41ouyKnrF1ImmE4dSLJjMhMvm6JDpmZsqIWdV+cv7RE5RPzqCRzmE0Yryszi7q3a1XufnRXfhZJszGmTiSZgRLR9lUGxOzxiBu1U+d6b715knyXJCLscL8BucFZbQJe69UkxyVTXEBzH1UhyeTCiLbfYECWATgoyMLNSP4lSNdYqAncYbm9ywzIewAsCWr9SSSjdAWZ1KwaSebmnh5Uy2ID4qtkPwhSeB/JKCpRkEnNqpHk84ev5UXIiwyIbxb5lm2UbEGy6qXIKBsGoid4urLN67dIDlH+LCu9gmTVW7sD6cioSiRdDuDVQfpmNkUtQHzhcWGQYqsxhTRy1AWaFqOqgZllBclFLUCieb3XkBz2NeeYns/QIum7AF4cWMkSkie1APHoKHwtuKAR+5G8ouCzY/WYJJMKTS6MlEUkV7STrSPXERtqt/7mkxbWTeFap12KuGXWAnT2UN0OSOQllFZFDtr4sOjL8mMvkpxAx4z+6JTp15GcIZq0AxJ5HmnvfId1tyFpMsXYiiQTyH1nMsJF0t0Pe5B0FosOQAyOfTIR4dxeHX8USSebGTuR9A4AZzRkuFmPvvg5k3Wu+9LnhQAOaahiqzVT3HlFxmK0SPL3rr4HYIsG++QCkq9v6e8GxPysIp1lNH3lwKQGG1vWfW9C3aGjem1Bkl3pptc+p0EgWqq3bL9p1itxgLOePTPHkJ1J/rL1TDoknepkLiUb4AXS9xovHjaFKHGrDkvfo4ryTeV1x80kOzjBvQDZCcBsZ2dovIWkh3OHpJQTP6uYdtypKnzYOh+ArzQ4+4/n13CR5HXSo9oHO4PgDY13UIOWnUj6SxKzkpV8xs5BZ07rJ85k8LxeXCxJVwF4WUDrvEO7iOQbAnT5LuXFyffkfPXDlrtJOq9Xh2QBsisAv+l54rXkoF7kBklG3l9hqyO3ktymjoLuspKcsMzfSRy27EZyTra+fgnMTGsxvaWIdKSHcIHE5jNvuA4JLzwCmRJxDjuqeT1Jp0+cI/0A8cJWhvw144tpr0GS5+fSWeWSDn/oMWLam9NoSVcD2LvIm9bQM5k3BfoyFiU5/Z1T7hURfw3AKZk60mrXuH+yI0nfTAqXgIxwdWz6PMnMNLN5gPj/znlV9Psgc25RpTt4t5bceTWaJ6WhfCVFQDLlakG//C+5nN7kw7mlSG0A3JHzurerCRTvvIpOEz13IAVtKPSYJKfoq5qlulAdPR6yT88vZ6bkApIW6NMAnFjQihNJfqLXs+nql90z/r5htxhMHxT9SdYzmz4oSvopgOcWbFPEY6eT9JdO+0ohQBIoRbexq0j2TUKQLrj4nGM3tndiTrrcMwN2XgOq/j+Yj5Znxo0kC5ERywBit7PnwCI8YGeINgFgZCXw9nFeGx0TckLQQmmqCgOSRolzezjhSl45V24jIm4V5TW40v8lfTElVa5UvmAh7zifXiZrdl7HzqlX0ksAfKeAQb6R60Q0IwnKgADZm6T9c4WlNCBppBQ98Hmk7FvWqMLW13hwAIAcTtKO0lJSCZAEShlOsGMsJyQSXe5tVZ8Tms7V2DAgi0l+vBQS6eHKgCRQqqRLNRvFviS7WexV9tTma8WmtDo24C3xhSQb/dJ0g4AcXSXBfwu8WoAkUA50gKnK29CnzDkkI/KvZFbRECC1r/XVBiSBsnvKGVXHs9veeV8mWfdjAH3fkWBAPOqdK6x2rpcQQBIojrgt91cRAkbL+SSdZbsxCQTEU+62JH1Gqy1hgCRQrM8+q6pfn2k1yGvIobVb10dBECB24+8TuQEJBaTVfkmvBPC1GnRLh22bpCM5gFbnYOgpan+S/gJQqDQCSBot9lP5UFQl//ulJL1ZaExqAOK8WD7wNZJopzFA2kaLQ5Vmipeh1lxO8oDG0HgkxFx2hHit8PSUx8ipZXbjgLQBY3aeO6EIUfnrJF9Vq2U5hUsA4oOsabAXNGlPS/fAAGlb9PdPX15b0KeBl5CMuqrdsxpJeV8ScqTUH5gcqNd6oIC094yk3QB8Mn2Ho9uOWTZ4U29lxldy7J31tYzje1F0mrKlXe/QAGmbyswi9JnD971NYDulyvcPq3RWSpHr7wma9e8o53lNsSWL2jd0QIoaOi3P/R9jVTQZLtZJsgAAAABJRU5ErkJggg==",sx={components:{HeaderVue:Yv,FooterVue:La}},ox={class:"main"},ax=mi('<div class="seccion" id="inicio"><section class="section"><h2 class="h2"><span class="upanimation">Santiago </span><span class="upanimation">Thevenet</span><br><span class="span-animation upanimation">Full-Stack </span><span class="upanimation">Developer</span></h2><div class="visitar"><a title="Linkedin - Visit my Linkedin" target="_blank" href="https://www.linkedin.com/in/santiagothevenetvalles/"><span class="span_visit">VISIT MY LINKEDIN</span></a><a title="Github - Visit my Github" target="_blank" href="https://github.com/SantiagoThevenet"><span class="span_visit">VISIT MY GITHUB</span></a></div><canvas class="webgl"></canvas></section></div>',1),lx={class:"seccion",id:"works"},cx=Oe("h2",{class:"h2"},"Works",-1),ux={class:"main_grid"},fx={class:"grid_full hidden"},hx=mi('<img src="'+Qv+'" class="img_half" alt=""><div class="trabajo-titulo"><figure><img class="auctions" src="'+ex+'" alt="This is an image of an aution icon"></figure><h3 class="h3_trabajo">Balú Auctions</h3></div><span>2023</span><hr class="hr_grid"><p class="p_grid"> &quot;Balú Auctions&quot; is my final project for my DAW (Development of Web Applications) course. It is a modern online auction platform that aims to make online bidding more popular and excitingthat uses Vue.js, ExpressJS, MySQL, and SASS. </p>',5),dx={class:"grid_buttons"},px=Oe("a",{title:"View Balu Auctions on github",class:"a_full fullhover",target:"_blank",href:"https://github.com/SantiagoThevenet/proyecto-tfg/tree/main/proyecto-tfg-completo"},"View on Github",-1),mx={class:"grid_half hidden"},_x=mi('<img src="'+tx+'" class="img_half" alt=""><div class="trabajo-titulo"><i class="fa-solid fa-bomb"></i><h3 class="h3_trabajo">Minesweeper</h3></div><span>2023</span><hr class="hr_grid"><p class="p_grid"> I have created my own Python version of the classic Minesweeper game, which was originally developed in 1989. </p>',5),gx={class:"grid_buttons"},vx=Oe("a",{title:"View Minesweeper on github ",class:"a_half",target:"_blank",href:"https://github.com/SantiagoThevenet/buscaminaSanti/tree/main"},"View on Github",-1),xx=mi('<div class="grid_half hidden"><img src="'+nx+'" class="img_half" alt=""><div class="trabajo-titulo"><i class="fa-solid fa-store"></i><h3 class="h3_trabajo">Marketplace</h3></div><span>2023</span><hr class="hr_grid"><p class="p_grid"> I am currently building a marketplace. Stay tuned for its upcoming launch. </p><div class="grid_buttons"><span class="a_half a_half2">Currently Working</span></div></div>',1),Mx=mi('<section class="seccion about" id="about"><h2 class="h2">About me</h2><p class="p"> I am a web developer with a passion for creating websites and applications that are not only functional but also provide exceptional experiences. </p><p class="p"> When I&#39;m not writing code, you&#39;ll find me enjoying my favorite sport, watching movies, or immersed in a good book. </p><p class="p"> My focus in web development is simple: to work with enthusiasm, constantly learn, and contribute with ideas. </p><p class="p"> I am excited to be part of a team where I can contribute my creativity and technical knowledge. If you are looking for a programmer who is committed to excellence and eager to grow, I am the right person to join your team! </p><ul class="rrss"><li class="li"><a target="_blank" href="https://www.linkedin.com/in/santiagothevenetvalles/" class="a" title="This is a link to my Linkedin"><img class="img" src="'+ix+'" alt="This is a link to Linkedin"></a></li><li class="li"><a target="_blank" href="https://github.com/SantiagoThevenet" class="a" title="This is a link to my Github"><img class="img" src="'+rx+'" alt="This is a link to Github"></a></li></ul></section>',1);function Sx(n,e,t,i,r,s){const o=Xt("HeaderVue"),a=Xt("router-link"),l=Xt("FooterVue"),c=Xt("router-view");return Un(),qn(Wt,null,[$e(o),Oe("main",ox,[ax,Oe("section",lx,[cx,Oe("div",ux,[Oe("div",fx,[hx,Oe("div",dx,[px,$e(a,{title:"View Balu Auctions",class:"a_full",to:"/baluAuctions"},{default:ql(()=>[Ql("View Project ")]),_:1})])]),Oe("div",mx,[_x,Oe("div",gx,[vx,$e(a,{title:"View Minesweeper",class:"a_half",to:"/minesweeper"},{default:ql(()=>[Ql("View Project ")]),_:1})])]),xx])]),Mx]),$e(l),$e(c)],64)}const Ex=ki(sx,[["render",Sx]]),yx={data(){return{menuOpen:!1}},methods:{toggle(){const n=document.querySelectorAll(".menu_toggle"),e=document.getElementById("mobile_menu");n.forEach(t=>{t.classList.toggle("active"),e.classList.toggle("active")}),this.menuOpen=!this.menuOpen}}},Tx={class:"header"},bx={class:"headerdiv"},Ax=Oe("h1",null,[Oe("a",{title:"Home - Portfolio Santiago Thevenet",href:"/portfolio-santi/#/"},"S.T")],-1),wx=Oe("hr",{class:"hr"},null,-1),Rx=Oe("i",{class:"fas fa-bars"},null,-1),Cx=[Rx],Px={class:"nav",id:"mobile_menu"},Lx={class:"ul"},Dx=Oe("a",{title:"Home - Portfolio Santiago Thevenet",href:"/portfolio-santi/#/"},"Home",-1),Ux=[Dx],Ix=Oe("a",{title:"Works - Portfolio Santiago Thevenet",href:"/portfolio-santi/#/#works"},"Works",-1),Ox=[Ix],Nx=Oe("a",{title:"About me - Portfolio Santiago Thevenet",href:"/portfolio-santi/#/#about"},"About Me",-1),Fx=[Nx],Bx=Oe("a",{title:"Resume - Portfolio Santiago Thevenet",href:"/portfolio-santi/#/resume"},"Resume",-1),zx=[Bx];function kx(n,e,t,i,r,s){return Un(),qn("header",Tx,[Oe("div",bx,[Ax,wx,Oe("div",{onClick:e[0]||(e[0]=o=>s.toggle()),class:"menu_icon menu_toggle"},Cx),Oe("nav",Px,[Oe("ul",Lx,[r.menuOpen?(Un(),qn("i",{key:0,onClick:e[1]||(e[1]=o=>s.toggle()),class:"fas fa-x"})):Yd("",!0),Oe("li",{onClick:e[2]||(e[2]=o=>s.toggle()),class:"li menu-toggle"},Ux),Oe("li",{onClick:e[3]||(e[3]=o=>s.toggle()),class:"li menu-toggle"},Ox),Oe("li",{onClick:e[4]||(e[4]=o=>s.toggle()),class:"li menu-toggle"},Fx),Oe("li",{onClick:e[5]||(e[5]=o=>s.toggle()),class:"li menu-toggle"},zx)])])])])}const Zc=ki(yx,[["render",kx]]),Hx="/portfolio-santi/assets/buscaminas-20ad51bb.mp4";const Gx={components:{HeaderVueExterno:Zc,FooterVue:La},mounted(){window.scrollTo({top:0})}},Vx=mi('<main class="main" data-v-4d2e5814><section class="project" data-v-4d2e5814><div class="project_information" data-v-4d2e5814><div class="balu_autions_titles" data-v-4d2e5814><h2 data-v-4d2e5814>Minesweeper</h2></div><div class="overview" data-v-4d2e5814><h4 data-v-4d2e5814>Overview</h4><p data-v-4d2e5814> I have created my own Python version of the classic Minesweeper game, which was originally developed in 1989. It captures the essence of the original game while offering a user-friendly interface and various difficulty levels. Players can strategically uncover tiles, avoid mines, and mark potential hazards. </p></div><div class="technologies" data-v-4d2e5814><h4 data-v-4d2e5814>Main technologies</h4><ul class="ul" data-v-4d2e5814><li class="li" data-v-4d2e5814>Python</li></ul></div></div><div class="balu_auction_video" data-v-4d2e5814><video autoplay loop muted preload="auto" data-v-4d2e5814><source src="'+Hx+'" data-v-4d2e5814></video></div></section></main>',1);function Wx(n,e,t,i,r,s){const o=Xt("HeaderVueExterno"),a=Xt("FooterVue"),l=Xt("router-view");return Un(),qn(Wt,null,[$e(o),Vx,$e(a),$e(l)],64)}const Xx=ki(Gx,[["render",Wx],["__scopeId","data-v-4d2e5814"]]),qx="/portfolio-santi/assets/Balu_Auction-1ac500df.mp4";const Yx={name:"BaluAuctions",components:{HeaderVueExterno:Zc,FooterVue:La},mounted(){window.scrollTo({top:0})}},jx=mi('<main class="main" data-v-b0a1fb8a><section class="project" data-v-b0a1fb8a><div class="project_information" data-v-b0a1fb8a><div class="balu_autions_titles" data-v-b0a1fb8a><h2 data-v-b0a1fb8a>Balú Auctions</h2><h3 data-v-b0a1fb8a>DAW Final Project</h3></div><div class="overview" data-v-b0a1fb8a><h4 data-v-b0a1fb8a>Overview</h4><p data-v-b0a1fb8a> &quot;Balú Auctions&quot; is a modern online auction platform that aims to make online bidding more popular and exciting. Our goal is to provide users with a simple and easy-to-use experience, where they can enjoy the fun of bidding on unique items and getting them at great prices. With a user-friendly interface, we want to create a special and enjoyable buying and selling experience. </p></div><div class="technologies" data-v-b0a1fb8a><h4 data-v-b0a1fb8a>Main technologies</h4><ul class="ul" data-v-b0a1fb8a><li class="li" data-v-b0a1fb8a>Vue.js</li><li class="li" data-v-b0a1fb8a>ExpressJS</li><li class="li" data-v-b0a1fb8a>Mysql</li><li class="li" data-v-b0a1fb8a>SASS</li><li class="li" data-v-b0a1fb8a>Vuex</li><li class="li" data-v-b0a1fb8a>Socket.IO</li><li class="li" data-v-b0a1fb8a>Axios</li><li class="li" data-v-b0a1fb8a>Stripe</li></ul></div></div><div class="balu_auction_video" data-v-b0a1fb8a><video autoplay loop muted preload="auto" data-v-b0a1fb8a><source src="'+qx+'" data-v-b0a1fb8a></video></div></section></main>',1);function Kx(n,e,t,i,r,s){const o=Xt("HeaderVueExterno"),a=Xt("FooterVue"),l=Xt("router-view");return Un(),qn(Wt,null,[$e(o),jx,$e(a),$e(l)],64)}const Jx=ki(Yx,[["render",Kx],["__scopeId","data-v-b0a1fb8a"]]),Zx={components:{HeaderVueExterno:Zc,FooterVue:La}},$x=mi('<main class="main"><section id="resume" class="seccionResume resume"><div class="resume_skills"><h2 class="h2">Santiago Thevenet</h2><h3 class="h3">SKILLS</h3><hr class="hr_resume"><div class="resume_content"><div class="skills backend"><h4 class="h4">Backend</h4><ul class="resumeul"><li class="li">Python</li><li class="li">Node.js</li><li class="li">Django</li><li class="li">Django REST</li><li class="li">Express JS</li><li class="li">Mysql</li><li class="li">PostgresDB</li></ul></div><div class="skills frontend"><h4 class="h4">Frontend</h4><ul class="resumeul"><li class="li">HTML5 &amp; CSS3</li><li class="li">JavaScript</li><li class="li">Vue 2/3</li><li class="li">Nuxt 2</li><li class="li">SASS &amp; SCSS</li><li class="li">Tailwind</li><li class="li">Boostrap</li></ul></div><div class="skills otools"><h4 class="h4">Other tools</h4><ul class="resumeul"><li class="li">Git</li><li class="li">Dockers</li><li class="li">Nginx</li><li class="li">Apache</li><li class="li">Squid</li><li class="li">Bash Scripting</li><li class="li">Figma</li><li class="li">Stratos</li><li class="li">Stripe</li></ul></div></div><h3 class="h3 h3_education">EDUCATION</h3><hr class="hr_resume"><div class="education"><div class="place"><h2 class="h2_formacion">Grupo Studio Formacion</h2><span>2021-2023</span></div><div class="degree"><h3 class="h3_degree"> Grado Superior: Desarrollo de Aplicaciones Web </h3></div></div></div></section></main>',1);function Qx(n,e,t,i,r,s){const o=Xt("HeaderVueExterno"),a=Xt("FooterVue"),l=Xt("router-view");return Un(),qn(Wt,null,[$e(o),$x,$e(a),$e(l)],64)}const eM=ki(Zx,[["render",Qx]]),tM=[{path:"/",name:"HomePortfolio",component:Ex},{path:"/minesweeper",name:"Minesweeper",component:Xx},{path:"/baluAuctions",name:"BaluAuctions",component:Jx},{path:"/resume",name:"ResumeProtfolio",component:eM}],cp=wv({history:V0(),scrollBehavior(n,e,t){if(n.hash)return{el:n.hash}},routes:tM});let Za=!0;cp.beforeEach((n,e,t)=>{n.path==="/"&&Za?(Za=!1,t()):n.path==="/"&&!Za?location.reload():t()});v0(y0).use(cp).mount("#app");/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $c="153",Ar={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nM=0,xf=1,iM=2,up=1,rM=2,ni=3,Fi=0,qt=1,oi=2,Di=0,es=1,Mf=2,Sf=3,Ef=4,sM=5,qr=100,oM=101,aM=102,yf=103,Tf=104,lM=200,cM=201,uM=202,fM=203,fp=204,hp=205,hM=206,dM=207,pM=208,mM=209,_M=210,gM=0,vM=1,xM=2,rc=3,MM=4,SM=5,EM=6,yM=7,dp=0,TM=1,bM=2,ui=0,AM=1,wM=2,RM=3,CM=4,PM=5,pp=300,us=301,fs=302,sc=303,oc=304,Da=306,ac=1e3,An=1001,lc=1002,kt=1003,bf=1004,$a=1005,dn=1006,LM=1007,to=1008,Ui=1009,DM=1010,UM=1011,Qc=1012,mp=1013,bi=1014,Ai=1015,no=1016,_p=1017,gp=1018,cr=1020,IM=1021,wn=1023,OM=1024,NM=1025,ur=1026,hs=1027,FM=1028,vp=1029,BM=1030,xp=1031,Mp=1033,Qa=33776,el=33777,tl=33778,nl=33779,Af=35840,wf=35841,Rf=35842,Cf=35843,zM=36196,Pf=37492,Lf=37496,Df=37808,Uf=37809,If=37810,Of=37811,Nf=37812,Ff=37813,Bf=37814,zf=37815,kf=37816,Hf=37817,Gf=37818,Vf=37819,Wf=37820,Xf=37821,il=36492,kM=36283,qf=36284,Yf=36285,jf=36286,Sp=3e3,fr=3001,HM=3200,GM=3201,Ep=0,VM=1,hr="",He="srgb",Yn="srgb-linear",yp="display-p3",rl=7680,WM=519,XM=512,qM=513,YM=514,jM=515,KM=516,JM=517,ZM=518,$M=519,Kf=35044,Jf="300 es",cc=1035,ai=2e3,fa=2001;class Er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sl=Math.PI/180,uc=180/Math.PI;function ho(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function QM(n,e){return(n%e+e)%e}function ol(n,e,t){return(1-t)*n+t*e}function Zf(n){return(n&n-1)===0&&n!==0}function fc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ao(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],E=r[1],x=r[4],S=r[7],T=r[2],w=r[5],P=r[8];return s[0]=o*_+a*E+l*T,s[3]=o*m+a*x+l*w,s[6]=o*d+a*S+l*P,s[1]=c*_+u*E+f*T,s[4]=c*m+u*x+f*w,s[7]=c*d+u*S+f*P,s[2]=h*_+p*E+g*T,s[5]=h*m+p*x+g*w,s[8]=h*d+p*S+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(al.makeScale(e,t)),this}rotate(e){return this.premultiply(al.makeRotation(-e)),this}translate(e,t){return this.premultiply(al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const al=new We;function Tp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const $f={};function Ws(n){n in $f||($f[n]=!0,console.warn(n))}function ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ll(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const eS=new We().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),tS=new We().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function nS(n){return n.convertSRGBToLinear().applyMatrix3(tS)}function iS(n){return n.applyMatrix3(eS).convertLinearToSRGB()}const rS={[Yn]:n=>n,[He]:n=>n.convertSRGBToLinear(),[yp]:nS},sS={[Yn]:n=>n,[He]:n=>n.convertLinearToSRGB(),[yp]:iS},xn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Yn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=rS[e],r=sS[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Rr;class bp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rr===void 0&&(Rr=io("canvas")),Rr.width=e.width,Rr.height=e.height;const i=Rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=io("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ts(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ts(t[i]/255)*255):t[i]=ts(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oS=0;class Ap{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=ho(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cl(r[o].image)):s.push(cl(r[o]))}else s=cl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aS=0;class Yt extends Er{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=An,r=An,s=dn,o=to,a=wn,l=Ui,c=Yt.DEFAULT_ANISOTROPY,u=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=ho(),this.name="",this.source=new Ap(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===fr?He:hr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ac:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ac:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===He?fr:Sp}set encoding(e){Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fr?He:hr}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=pp;Yt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(p+1)/2,T=(d+1)/2,w=(u+h)/4,P=(f+_)/4,D=(g+m)/4;return x>S&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=P/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=D/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=P/s,r=D/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-_)/E,this.z=(h-u)/E,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vr extends Er{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===fr?He:hr),this.texture=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:dn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ap(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wp extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lS extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*_,E=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const T=Math.sqrt(x),w=Math.atan2(T,d*E);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const S=a*E;if(l=l*m+h*S,c=c*m+p*S,u=u*m+g*S,f=f*m+_*S,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ul.copy(this).projectOnVector(e),this.sub(ul)}reflect(e){return this.sub(ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ul=new k,Qf=new xr;class po{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox),Cr.applyMatrix4(e.matrixWorld),this.union(Cr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Zn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Zn)}else r.boundingBox===null&&r.computeBoundingBox(),Cr.copy(r.boundingBox),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),wo.subVectors(this.max,ws),Pr.subVectors(e.a,ws),Lr.subVectors(e.b,ws),Dr.subVectors(e.c,ws),xi.subVectors(Lr,Pr),Mi.subVectors(Dr,Lr),ji.subVectors(Pr,Dr);let t=[0,-xi.z,xi.y,0,-Mi.z,Mi.y,0,-ji.z,ji.y,xi.z,0,-xi.x,Mi.z,0,-Mi.x,ji.z,0,-ji.x,-xi.y,xi.x,0,-Mi.y,Mi.x,0,-ji.y,ji.x,0];return!fl(t,Pr,Lr,Dr,wo)||(t=[1,0,0,0,1,0,0,0,1],!fl(t,Pr,Lr,Dr,wo))?!1:(Ro.crossVectors(xi,Mi),t=[Ro.x,Ro.y,Ro.z],fl(t,Pr,Lr,Dr,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new k,new k,new k,new k,new k,new k,new k,new k],Zn=new k,Cr=new po,Pr=new k,Lr=new k,Dr=new k,xi=new k,Mi=new k,ji=new k,ws=new k,wo=new k,Ro=new k,Ki=new k;function fl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ki.fromArray(n,s);const a=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const cS=new po,Rs=new k,hl=new k;class eu{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Rs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(hl)),this.expandByPoint(Rs.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new k,dl=new k,Co=new k,Si=new k,pl=new k,Po=new k,ml=new k;class uS{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){dl.copy(e).add(t).multiplyScalar(.5),Co.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(dl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Co),a=Si.dot(this.direction),l=-Si.dot(Co),c=Si.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(dl).addScaledVector(Co,h),p}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),r=$n.dot($n)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,r,s){pl.subVectors(t,e),Po.subVectors(i,e),ml.crossVectors(pl,Po);let o=this.direction.dot(ml),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);const l=a*this.direction.dot(Po.crossVectors(Si,Po));if(l<0)return null;const c=a*this.direction.dot(pl.cross(Si));if(c<0||l+c>o)return null;const u=-a*Si.dot(ml);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,g,_,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),o=1/Ur.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fS,e,hS)}lookAt(e,t,i){const r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Ei.crossVectors(i,nn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Ei.crossVectors(i,nn)),Ei.normalize(),Lo.crossVectors(nn,Ei),r[0]=Ei.x,r[4]=Lo.x,r[8]=nn.x,r[1]=Ei.y,r[5]=Lo.y,r[9]=nn.y,r[2]=Ei.z,r[6]=Lo.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],E=i[3],x=i[7],S=i[11],T=i[15],w=r[0],P=r[4],D=r[8],M=r[12],R=r[1],j=r[5],re=r[9],N=r[13],V=r[2],W=r[6],Z=r[10],z=r[14],X=r[3],ue=r[7],oe=r[11],Ee=r[15];return s[0]=o*w+a*R+l*V+c*X,s[4]=o*P+a*j+l*W+c*ue,s[8]=o*D+a*re+l*Z+c*oe,s[12]=o*M+a*N+l*z+c*Ee,s[1]=u*w+f*R+h*V+p*X,s[5]=u*P+f*j+h*W+p*ue,s[9]=u*D+f*re+h*Z+p*oe,s[13]=u*M+f*N+h*z+p*Ee,s[2]=g*w+_*R+m*V+d*X,s[6]=g*P+_*j+m*W+d*ue,s[10]=g*D+_*re+m*Z+d*oe,s[14]=g*M+_*N+m*z+d*Ee,s[3]=E*w+x*R+S*V+T*X,s[7]=E*P+x*j+S*W+T*ue,s[11]=E*D+x*re+S*Z+T*oe,s[15]=E*M+x*N+S*z+T*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+_*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],E=f*m*c-_*h*c+_*l*p-a*m*p-f*l*d+a*h*d,x=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,S=u*_*c-g*f*c+g*a*p-o*_*p-u*a*d+o*f*d,T=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,w=t*E+i*x+r*S+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return e[0]=E*P,e[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*P,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*d+i*l*d)*P,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*P,e[4]=x*P,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*d+t*h*d)*P,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*P,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*P,e[8]=S*P,e[9]=(g*f*s-u*_*s-g*i*p+t*_*p+u*i*d-t*f*d)*P,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*d+t*a*d)*P,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*P,e[12]=T*P,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*P,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,_=o*u,m=o*f,d=a*f,E=l*c,x=l*u,S=l*f,T=i.x,w=i.y,P=i.z;return r[0]=(1-(_+d))*T,r[1]=(p+S)*T,r[2]=(g-x)*T,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(h+d))*w,r[6]=(m+E)*w,r[7]=0,r[8]=(g+x)*P,r[9]=(m-E)*P,r[10]=(1-(h+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ur.set(r[0],r[1],r[2]).length();const o=Ur.set(r[4],r[5],r[6]).length(),a=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/s,u=1/o,f=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,t.setFromRotationMatrix(Mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ai){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===ai)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===fa)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ai){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,p=(i+r)*u;let g,_;if(a===ai)g=(o+s)*f,_=-2*f;else if(a===fa)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ur=new k,Mn=new xt,fS=new k(0,0,0),hS=new k(1,1,1),Ei=new k,Lo=new k,nn=new k,eh=new xt,th=new xr;class Ua{constructor(e=0,t=0,i=0,r=Ua.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return th.setFromEuler(this),this.setFromQuaternion(th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ua.DEFAULT_ORDER="XYZ";class Rp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dS=0;const nh=new k,Ir=new xr,Qn=new xt,Do=new k,Cs=new k,pS=new k,mS=new xr,ih=new k(1,0,0),rh=new k(0,1,0),sh=new k(0,0,1),_S={type:"added"},oh={type:"removed"};class jt extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new k,t=new Ua,i=new xr,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new We}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Rp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(ih,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(sh,e)}translateOnAxis(e,t){return nh.copy(e).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ih,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Do.copy(e):Do.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Cs,Do,this.up):Qn.lookAt(Do,Cs,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(Qn),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_S)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(oh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,pS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,mS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new k(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new k,ei=new k,_l=new k,ti=new k,Or=new k,Nr=new k,ah=new k,gl=new k,vl=new k,xl=new k;let Uo=!1;class Tn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Sn.subVectors(e,t),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Sn.subVectors(r,t),ei.subVectors(i,t),_l.subVectors(e,t);const o=Sn.dot(Sn),a=Sn.dot(ei),l=Sn.dot(_l),c=ei.dot(ei),u=ei.dot(_l),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,i,r,s,o,a,l){return Uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Uo=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ti),l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l}static isFrontFacing(e,t,i,r){return Sn.subVectors(i,t),ei.subVectors(e,t),Sn.cross(ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Sn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Uo=!0),Tn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Or.subVectors(r,i),Nr.subVectors(s,i),gl.subVectors(e,i);const l=Or.dot(gl),c=Nr.dot(gl);if(l<=0&&c<=0)return t.copy(i);vl.subVectors(e,r);const u=Or.dot(vl),f=Nr.dot(vl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Or,o);xl.subVectors(e,s);const p=Or.dot(xl),g=Nr.dot(xl);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Nr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return ah.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(ah,a);const d=1/(m+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(Or,o).addScaledVector(Nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let gS=0;class mo extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=es,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fp,this.blendDst=hp,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=rc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=WM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rl,this.stencilZFail=rl,this.stencilZPass=rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},Io={h:0,s:0,l:0};function Ml(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=xn.workingColorSpace){return this.r=e,this.g=t,this.b=i,xn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=xn.workingColorSpace){if(e=QM(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ml(o,s,e+1/3),this.g=Ml(o,s,e),this.b=Ml(o,s,e-1/3)}return xn.toWorkingColorSpace(this,r),this}setStyle(e,t=He){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){const i=Cp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=ll(e.r),this.g=ll(e.g),this.b=ll(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return xn.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Ht(Pt.r*255,0,255))*65536+Math.round(Ht(Pt.g*255,0,255))*256+Math.round(Ht(Pt.b*255,0,255))}getHexString(e=He){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xn.workingColorSpace){xn.fromWorkingColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,s=Pt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xn.workingColorSpace){return xn.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=He){xn.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==He?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(En),En.h+=e,En.s+=t,En.l+=i,this.setHSL(En.h,En.s,En.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(Io);const i=ol(En.h,Io.h,t),r=ol(En.s,Io.s,t),s=ol(En.l,Io.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Qe;Qe.NAMES=Cp;class Pp extends mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new k,Oo=new ze;class Gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kf,this.updateRange={offset:0,count:-1},this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ao(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ao(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ao(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ao(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Lp extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Dp extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vn extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let vS=0;const un=new xt,Sl=new jt,Fr=new k,rn=new po,Ps=new po,yt=new k;class Hi extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tp(e)?Dp:Lp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Vn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(rn.min,Ps.min),rn.expandByPoint(yt),yt.addVectors(rn.max,Ps.max),rn.expandByPoint(yt)):(rn.expandByPoint(Ps.min),rn.expandByPoint(Ps.max))}rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(e,c),yt.add(Fr)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new k,u[R]=new k;const f=new k,h=new k,p=new k,g=new ze,_=new ze,m=new ze,d=new k,E=new k;function x(R,j,re){f.fromArray(r,R*3),h.fromArray(r,j*3),p.fromArray(r,re*3),g.fromArray(o,R*2),_.fromArray(o,j*2),m.fromArray(o,re*2),h.sub(f),p.sub(f),_.sub(g),m.sub(g);const N=1/(_.x*m.y-m.x*_.y);isFinite(N)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(N),E.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(N),c[R].add(d),c[j].add(d),c[re].add(d),u[R].add(E),u[j].add(E),u[re].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let R=0,j=S.length;R<j;++R){const re=S[R],N=re.start,V=re.count;for(let W=N,Z=N+V;W<Z;W+=3)x(i[W+0],i[W+1],i[W+2])}const T=new k,w=new k,P=new k,D=new k;function M(R){P.fromArray(s,R*3),D.copy(P);const j=c[R];T.copy(j),T.sub(P.multiplyScalar(P.dot(j))).normalize(),w.crossVectors(D,j);const N=w.dot(u[R])<0?-1:1;l[R*4]=T.x,l[R*4+1]=T.y,l[R*4+2]=T.z,l[R*4+3]=N}for(let R=0,j=S.length;R<j;++R){const re=S[R],N=re.start,V=re.count;for(let W=N,Z=N+V;W<Z;W+=3)M(i[W+0]),M(i[W+1]),M(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new Gn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lh=new xt,Ji=new uS,No=new eu,ch=new k,Br=new k,zr=new k,kr=new k,El=new k,Fo=new k,Bo=new ze,zo=new ze,ko=new ze,uh=new k,fh=new k,hh=new k,Ho=new k,Go=new k;class li extends jt{constructor(e=new Hi,t=new Pp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(El.fromBufferAttribute(f,e),o?Fo.addScaledVector(El,u):Fo.addScaledVector(El.sub(t),u))}t.add(Fo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),!(No.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(No,ch)===null||Ji.origin.distanceToSquared(ch)>(e.far-e.near)**2))&&(lh.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(lh),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,T=x;S<T;S+=3){const w=a.getX(S),P=a.getX(S+1),D=a.getX(S+2);r=Vo(this,d,e,i,c,u,f,w,P,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=Vo(this,o,e,i,c,u,f,E,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,T=x;S<T;S+=3){const w=S,P=S+1,D=S+2;r=Vo(this,d,e,i,c,u,f,w,P,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=m,x=m+1,S=m+2;r=Vo(this,o,e,i,c,u,f,E,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function xS(n,e,t,i,r,s,o,a){let l;if(e.side===qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Fi,a),l===null)return null;Go.copy(a),Go.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Go);return c<t.near||c>t.far?null:{distance:c,point:Go.clone(),object:n}}function Vo(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Br),n.getVertexPosition(l,zr),n.getVertexPosition(c,kr);const u=xS(n,e,t,i,Br,zr,kr,Ho);if(u){r&&(Bo.fromBufferAttribute(r,a),zo.fromBufferAttribute(r,l),ko.fromBufferAttribute(r,c),u.uv=Tn.getInterpolation(Ho,Br,zr,kr,Bo,zo,ko,new ze)),s&&(Bo.fromBufferAttribute(s,a),zo.fromBufferAttribute(s,l),ko.fromBufferAttribute(s,c),u.uv1=Tn.getInterpolation(Ho,Br,zr,kr,Bo,zo,ko,new ze),u.uv2=u.uv1),o&&(uh.fromBufferAttribute(o,a),fh.fromBufferAttribute(o,l),hh.fromBufferAttribute(o,c),u.normal=Tn.getInterpolation(Ho,Br,zr,kr,uh,fh,hh,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};Tn.getNormal(Br,zr,kr,f.normal),u.face=f}return u}class _o extends Hi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vn(c,3)),this.setAttribute("normal",new Vn(u,3)),this.setAttribute("uv",new Vn(f,2));function g(_,m,d,E,x,S,T,w,P,D,M){const R=S/P,j=T/D,re=S/2,N=T/2,V=w/2,W=P+1,Z=D+1;let z=0,X=0;const ue=new k;for(let oe=0;oe<Z;oe++){const Ee=oe*j-N;for(let F=0;F<W;F++){const pe=F*R-re;ue[_]=pe*E,ue[m]=Ee*x,ue[d]=V,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[d]=w>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(F/P),f.push(1-oe/D),z+=1}}for(let oe=0;oe<D;oe++)for(let Ee=0;Ee<P;Ee++){const F=h+Ee+W*oe,pe=h+Ee+W*(oe+1),de=h+(Ee+1)+W*(oe+1),I=h+(Ee+1)+W*oe;l.push(F,pe,I),l.push(pe,de,I),X+=6}a.addGroup(p,X,M),p+=X,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ds(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=ds(n[t]);for(const r in i)e[r]=i[r]}return e}function MS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Up(n){return n.getRenderTarget()===null?n.outputColorSpace:Yn}const SS={clone:ds,merge:zt};var ES=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ES,this.fragmentShader=yS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=MS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ip extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends Ip{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uc*2*Math.atan(Math.tan(sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hr=-90,Gr=1;class TS extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new on(Hr,Gr,e,t);r.layers=this.layers,this.add(r);const s=new on(Hr,Gr,e,t);s.layers=this.layers,this.add(s);const o=new on(Hr,Gr,e,t);o.layers=this.layers,this.add(o);const a=new on(Hr,Gr,e,t);a.layers=this.layers,this.add(a);const l=new on(Hr,Gr,e,t);l.layers=this.layers,this.add(l);const c=new on(Hr,Gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=ui,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Op extends Yt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:us,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bS extends vr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===fr?He:hr),this.texture=new Op(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _o(5,5,5),s=new Mr({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:Di});s.uniforms.tEquirect.value=t;const o=new li(r,s),a=t.minFilter;return t.minFilter===to&&(t.minFilter=dn),new TS(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const yl=new k,AS=new k,wS=new We;class er{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=yl.subVectors(i,t).cross(AS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(yl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wS.getNormalMatrix(e),r=this.coplanarPoint(yl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new eu,Wo=new k;class tu{constructor(e=new er,t=new er,i=new er,r=new er,s=new er,o=new er){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],E=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-p,S-d).normalize(),i[1].setComponents(l+s,h+c,m+p,S+d).normalize(),i[2].setComponents(l+o,h+u,m+g,S+E).normalize(),i[3].setComponents(l-o,h-u,m-g,S-E).normalize(),i[4].setComponents(l-a,h-f,m-_,S-x).normalize(),t===ai)i[5].setComponents(l+a,h+f,m+_,S+x).normalize();else if(t===fa)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Wo.x=r.normal.x>0?e.max.x:e.min.x,Wo.y=r.normal.y>0?e.max.y:e.min.y,Wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Np(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function RS(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;n.bindBuffer(f,c),p.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class nu extends Hi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const E=d*h-o;for(let x=0;x<c;x++){const S=x*f-s;g.push(S,-E,0),_.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const x=E+c*d,S=E+c*(d+1),T=E+1+c*(d+1),w=E+1+c*d;p.push(x,S,w),p.push(S,T,w)}this.setIndex(p),this.setAttribute("position",new Vn(g,3)),this.setAttribute("normal",new Vn(_,3)),this.setAttribute("uv",new Vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.width,e.height,e.widthSegments,e.heightSegments)}}var CS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,DS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,US=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OS="vec3 transformed = vec3( position );",NS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,KS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$S=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ME=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,TE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bE=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,RE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,LE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,DE=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,UE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,HE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,GE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,VE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,KE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$E=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ry=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ay=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ly=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,my=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,My=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sy=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ey=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ty=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,by=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Py=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ly=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Dy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Uy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ny=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,By=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ky=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ge={alphamap_fragment:CS,alphamap_pars_fragment:PS,alphatest_fragment:LS,alphatest_pars_fragment:DS,aomap_fragment:US,aomap_pars_fragment:IS,begin_vertex:OS,beginnormal_vertex:NS,bsdfs:FS,iridescence_fragment:BS,bumpmap_pars_fragment:zS,clipping_planes_fragment:kS,clipping_planes_pars_fragment:HS,clipping_planes_pars_vertex:GS,clipping_planes_vertex:VS,color_fragment:WS,color_pars_fragment:XS,color_pars_vertex:qS,color_vertex:YS,common:jS,cube_uv_reflection_fragment:KS,defaultnormal_vertex:JS,displacementmap_pars_vertex:ZS,displacementmap_vertex:$S,emissivemap_fragment:QS,emissivemap_pars_fragment:eE,encodings_fragment:tE,encodings_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:rE,envmap_pars_fragment:sE,envmap_pars_vertex:oE,envmap_physical_pars_fragment:vE,envmap_vertex:aE,fog_vertex:lE,fog_pars_vertex:cE,fog_fragment:uE,fog_pars_fragment:fE,gradientmap_pars_fragment:hE,lightmap_fragment:dE,lightmap_pars_fragment:pE,lights_lambert_fragment:mE,lights_lambert_pars_fragment:_E,lights_pars_begin:gE,lights_toon_fragment:xE,lights_toon_pars_fragment:ME,lights_phong_fragment:SE,lights_phong_pars_fragment:EE,lights_physical_fragment:yE,lights_physical_pars_fragment:TE,lights_fragment_begin:bE,lights_fragment_maps:AE,lights_fragment_end:wE,logdepthbuf_fragment:RE,logdepthbuf_pars_fragment:CE,logdepthbuf_pars_vertex:PE,logdepthbuf_vertex:LE,map_fragment:DE,map_pars_fragment:UE,map_particle_fragment:IE,map_particle_pars_fragment:OE,metalnessmap_fragment:NE,metalnessmap_pars_fragment:FE,morphcolor_vertex:BE,morphnormal_vertex:zE,morphtarget_pars_vertex:kE,morphtarget_vertex:HE,normal_fragment_begin:GE,normal_fragment_maps:VE,normal_pars_fragment:WE,normal_pars_vertex:XE,normal_vertex:qE,normalmap_pars_fragment:YE,clearcoat_normal_fragment_begin:jE,clearcoat_normal_fragment_maps:KE,clearcoat_pars_fragment:JE,iridescence_pars_fragment:ZE,output_fragment:$E,packing:QE,premultiplied_alpha_fragment:ey,project_vertex:ty,dithering_fragment:ny,dithering_pars_fragment:iy,roughnessmap_fragment:ry,roughnessmap_pars_fragment:sy,shadowmap_pars_fragment:oy,shadowmap_pars_vertex:ay,shadowmap_vertex:ly,shadowmask_pars_fragment:cy,skinbase_vertex:uy,skinning_pars_vertex:fy,skinning_vertex:hy,skinnormal_vertex:dy,specularmap_fragment:py,specularmap_pars_fragment:my,tonemapping_fragment:_y,tonemapping_pars_fragment:gy,transmission_fragment:vy,transmission_pars_fragment:xy,uv_pars_fragment:My,uv_pars_vertex:Sy,uv_vertex:Ey,worldpos_vertex:yy,background_vert:Ty,background_frag:by,backgroundCube_vert:Ay,backgroundCube_frag:wy,cube_vert:Ry,cube_frag:Cy,depth_vert:Py,depth_frag:Ly,distanceRGBA_vert:Dy,distanceRGBA_frag:Uy,equirect_vert:Iy,equirect_frag:Oy,linedashed_vert:Ny,linedashed_frag:Fy,meshbasic_vert:By,meshbasic_frag:zy,meshlambert_vert:ky,meshlambert_frag:Hy,meshmatcap_vert:Gy,meshmatcap_frag:Vy,meshnormal_vert:Wy,meshnormal_frag:Xy,meshphong_vert:qy,meshphong_frag:Yy,meshphysical_vert:jy,meshphysical_frag:Ky,meshtoon_vert:Jy,meshtoon_frag:Zy,points_vert:$y,points_frag:Qy,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},xe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Fn={basic:{uniforms:zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:zt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:zt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:zt([xe.points,xe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:zt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:zt([xe.common,xe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:zt([xe.sprite,xe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:zt([xe.common,xe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:zt([xe.lights,xe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Fn.physical={uniforms:zt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Xo={r:0,b:0,g:0};function rT(n,e,t,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(m,d){let E=!1,x=d.isScene===!0?d.background:null;switch(x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),E=!0),n.xr.getEnvironmentBlendMode()){case"opaque":E=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),E=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),E=!0;break}(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Da)?(u===void 0&&(u=new li(new _o(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:ds(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=x.colorSpace!==He,(f!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new li(new nu(2,2),new Mr({name:"BackgroundMaterial",uniforms:ds(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=x.colorSpace!==He,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(Xo,Up(n)),i.buffers.color.setClear(Xo.r,Xo.g,Xo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function sT(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(V,W,Z,z,X){let ue=!1;if(o){const oe=_(z,Z,W);c!==oe&&(c=oe,p(c.object)),ue=d(V,z,Z,X),ue&&E(V,z,Z,X)}else{const oe=W.wireframe===!0;(c.geometry!==z.id||c.program!==Z.id||c.wireframe!==oe)&&(c.geometry=z.id,c.program=Z.id,c.wireframe=oe,ue=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,D(V,W,Z,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(V){return i.isWebGL2?n.bindVertexArray(V):s.bindVertexArrayOES(V)}function g(V){return i.isWebGL2?n.deleteVertexArray(V):s.deleteVertexArrayOES(V)}function _(V,W,Z){const z=Z.wireframe===!0;let X=a[V.id];X===void 0&&(X={},a[V.id]=X);let ue=X[W.id];ue===void 0&&(ue={},X[W.id]=ue);let oe=ue[z];return oe===void 0&&(oe=m(h()),ue[z]=oe),oe}function m(V){const W=[],Z=[],z=[];for(let X=0;X<r;X++)W[X]=0,Z[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:z,object:V,attributes:{},index:null}}function d(V,W,Z,z){const X=c.attributes,ue=W.attributes;let oe=0;const Ee=Z.getAttributes();for(const F in Ee)if(Ee[F].location>=0){const de=X[F];let I=ue[F];if(I===void 0&&(F==="instanceMatrix"&&V.instanceMatrix&&(I=V.instanceMatrix),F==="instanceColor"&&V.instanceColor&&(I=V.instanceColor)),de===void 0||de.attribute!==I||I&&de.data!==I.data)return!0;oe++}return c.attributesNum!==oe||c.index!==z}function E(V,W,Z,z){const X={},ue=W.attributes;let oe=0;const Ee=Z.getAttributes();for(const F in Ee)if(Ee[F].location>=0){let de=ue[F];de===void 0&&(F==="instanceMatrix"&&V.instanceMatrix&&(de=V.instanceMatrix),F==="instanceColor"&&V.instanceColor&&(de=V.instanceColor));const I={};I.attribute=de,de&&de.data&&(I.data=de.data),X[F]=I,oe++}c.attributes=X,c.attributesNum=oe,c.index=z}function x(){const V=c.newAttributes;for(let W=0,Z=V.length;W<Z;W++)V[W]=0}function S(V){T(V,0)}function T(V,W){const Z=c.newAttributes,z=c.enabledAttributes,X=c.attributeDivisors;Z[V]=1,z[V]===0&&(n.enableVertexAttribArray(V),z[V]=1),X[V]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,W),X[V]=W)}function w(){const V=c.newAttributes,W=c.enabledAttributes;for(let Z=0,z=W.length;Z<z;Z++)W[Z]!==V[Z]&&(n.disableVertexAttribArray(Z),W[Z]=0)}function P(V,W,Z,z,X,ue,oe){oe===!0?n.vertexAttribIPointer(V,W,Z,X,ue):n.vertexAttribPointer(V,W,Z,z,X,ue)}function D(V,W,Z,z){if(i.isWebGL2===!1&&(V.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=z.attributes,ue=Z.getAttributes(),oe=W.defaultAttributeValues;for(const Ee in ue){const F=ue[Ee];if(F.location>=0){let pe=X[Ee];if(pe===void 0&&(Ee==="instanceMatrix"&&V.instanceMatrix&&(pe=V.instanceMatrix),Ee==="instanceColor"&&V.instanceColor&&(pe=V.instanceColor)),pe!==void 0){const de=pe.normalized,I=pe.itemSize,$=t.get(pe);if($===void 0)continue;const ee=$.buffer,_e=$.type,ge=$.bytesPerElement,Ue=i.isWebGL2===!0&&(_e===n.INT||_e===n.UNSIGNED_INT||pe.gpuType===mp);if(pe.isInterleavedBufferAttribute){const Me=pe.data,v=Me.stride,L=pe.offset;if(Me.isInstancedInterleavedBuffer){for(let O=0;O<F.locationSize;O++)T(F.location+O,Me.meshPerAttribute);V.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let O=0;O<F.locationSize;O++)S(F.location+O);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let O=0;O<F.locationSize;O++)P(F.location+O,I/F.locationSize,_e,de,v*ge,(L+I/F.locationSize*O)*ge,Ue)}else{if(pe.isInstancedBufferAttribute){for(let Me=0;Me<F.locationSize;Me++)T(F.location+Me,pe.meshPerAttribute);V.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Me=0;Me<F.locationSize;Me++)S(F.location+Me);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let Me=0;Me<F.locationSize;Me++)P(F.location+Me,I/F.locationSize,_e,de,I*ge,I/F.locationSize*Me*ge,Ue)}}else if(oe!==void 0){const de=oe[Ee];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(F.location,de);break;case 3:n.vertexAttrib3fv(F.location,de);break;case 4:n.vertexAttrib4fv(F.location,de);break;default:n.vertexAttrib1fv(F.location,de)}}}}w()}function M(){re();for(const V in a){const W=a[V];for(const Z in W){const z=W[Z];for(const X in z)g(z[X].object),delete z[X];delete W[Z]}delete a[V]}}function R(V){if(a[V.id]===void 0)return;const W=a[V.id];for(const Z in W){const z=W[Z];for(const X in z)g(z[X].object),delete z[X];delete W[Z]}delete a[V.id]}function j(V){for(const W in a){const Z=a[W];if(Z[V.id]===void 0)continue;const z=Z[V.id];for(const X in z)g(z[X].object),delete z[X];delete Z[V.id]}}function re(){N(),u=!0,c!==l&&(c=l,p(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:re,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfProgram:j,initAttributes:x,enableAttribute:S,disableUnusedAttributes:w}}function oT(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function aT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,S=o||e.has("OES_texture_float"),T=x&&S,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:w}}function lT(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new er,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,x=E*4;let S=d.clippingState||null;l.value=S,S=u(g,h,x,p);for(let T=0;T!==x;++T)S[T]=t[T];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,S=p;x!==_;++x,S+=4)o.copy(f[x]).applyMatrix4(E,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function cT(n){let e=new WeakMap;function t(o,a){return a===sc?o.mapping=us:a===oc&&(o.mapping=fs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===sc||a===oc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bS(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class uT extends Ip{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const jr=4,dh=[.125,.215,.35,.446,.526,.582],sr=20,Tl=new uT,ph=new Qe;let bl=null;const tr=(1+Math.sqrt(5))/2,Vr=1/tr,mh=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,tr,Vr),new k(0,tr,-Vr),new k(Vr,0,tr),new k(-Vr,0,tr),new k(tr,Vr,0),new k(-tr,Vr,0)];class _h{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){bl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl),e.scissorTest=!1,qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:no,format:wn,colorSpace:Yn,depthBuffer:!1},r=gh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fT(s)),this._blurMaterial=hT(s,e,t)}return r}_compileMaterial(e){const t=new li(this._lodPlanes[0],e);this._renderer.compile(t,Tl)}_sceneToCubeUV(e,t,i,r){const a=new on(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(ph),u.toneMapping=ui,u.autoClear=!1;const p=new Pp({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new li(new _o,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(ph),_=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;qo(r,E*x,d>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===us||e.mapping===fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new li(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;qo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Tl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mh[(r-1)%mh.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new li(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*sr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):sr;m>sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sr}`);const d=[];let E=0;for(let P=0;P<sr;++P){const D=P/_,M=Math.exp(-D*D/2);d.push(M),P===0?E+=M:P<m&&(E+=2*M)}for(let P=0;P<d.length;P++)d[P]=d[P]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const S=this._sizeLods[r],T=3*S*(r>x-jr?r-x+jr:0),w=4*(this._cubeSize-S);qo(t,T,w,3*S,2*S),l.setRenderTarget(t),l.render(f,Tl)}}function fT(n){const e=[],t=[],i=[];let r=n;const s=n-jr+1+dh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-jr?l=dh[o-n+jr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,E=new Float32Array(_*g*p),x=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let w=0;w<p;w++){const P=w%3*2/3-1,D=w>2?0:-1,M=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];E.set(M,_*g*w),x.set(h,m*g*w);const R=[w,w,w,w,w,w];S.set(R,d*g*w)}const T=new Hi;T.setAttribute("position",new Gn(E,_)),T.setAttribute("uv",new Gn(x,m)),T.setAttribute("faceIndex",new Gn(S,d)),e.push(T),r>jr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gh(n,e,t){const i=new vr(n,e,t);return i.texture.mapping=Da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function hT(n,e,t){const i=new Float32Array(sr),r=new k(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function vh(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function xh(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===sc||l===oc,u=l===us||l===fs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new _h(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new _h(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function pT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mT(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let x=0,S=E.length;x<S;x+=3){const T=E[x+0],w=E[x+1],P=E[x+2];h.push(T,w,w,P,P,T)}}else{const E=g.array;_=g.version;for(let x=0,S=E.length/3-1;x<S;x+=3){const T=x+0,w=x+1,P=x+2;h.push(T,w,w,P,P,T)}}const m=new(Tp(h)?Dp:Lp)(h,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function _T(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){n.drawElements(s,p,a,h*l),t.update(p,s,1)}function f(h,p,g){if(g===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,a,h*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function gT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vT(n,e){return n[0]-e[0]}function xT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function MT(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new st,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let W=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var p=W;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let M=0;x===!0&&(M=1),S===!0&&(M=2),T===!0&&(M=3);let R=u.attributes.position.count*M,j=1;R>e.maxTextureSize&&(j=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const re=new Float32Array(R*j*4*_),N=new wp(re,R,j,_);N.type=Ai,N.needsUpdate=!0;const V=M*4;for(let Z=0;Z<_;Z++){const z=w[Z],X=P[Z],ue=D[Z],oe=R*j*4*Z;for(let Ee=0;Ee<z.count;Ee++){const F=Ee*V;x===!0&&(o.fromBufferAttribute(z,Ee),re[oe+F+0]=o.x,re[oe+F+1]=o.y,re[oe+F+2]=o.z,re[oe+F+3]=0),S===!0&&(o.fromBufferAttribute(X,Ee),re[oe+F+4]=o.x,re[oe+F+5]=o.y,re[oe+F+6]=o.z,re[oe+F+7]=0),T===!0&&(o.fromBufferAttribute(ue,Ee),re[oe+F+8]=o.x,re[oe+F+9]=o.y,re[oe+F+10]=o.z,re[oe+F+11]=ue.itemSize===4?o.w:1)}}m={count:_,texture:N,size:new ze(R,j)},s.set(u,m),u.addEventListener("dispose",W)}let d=0;for(let x=0;x<h.length;x++)d+=h[x];const E=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];i[u.id]=_}for(let S=0;S<g;S++){const T=_[S];T[0]=S,T[1]=h[S]}_.sort(xT);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(vT);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const T=a[S],w=T[0],P=T[1];w!==Number.MAX_SAFE_INTEGER&&P?(m&&u.getAttribute("morphTarget"+S)!==m[w]&&u.setAttribute("morphTarget"+S,m[w]),d&&u.getAttribute("morphNormal"+S)!==d[w]&&u.setAttribute("morphNormal"+S,d[w]),r[S]=P,E+=P):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),d&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const x=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function ST(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Fp=new Yt,Bp=new wp,zp=new lS,kp=new Op,Mh=[],Sh=[],Eh=new Float32Array(16),yh=new Float32Array(9),Th=new Float32Array(4);function ys(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Mh[r];if(s===void 0&&(s=new Float32Array(r),Mh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ia(n,e){let t=Sh[e];t===void 0&&(t=new Int32Array(e),Sh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ET(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function TT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function bT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function AT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Th.set(i),n.uniformMatrix2fv(this.addr,!1,Th),St(t,i)}}function wT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;yh.set(i),n.uniformMatrix3fv(this.addr,!1,yh),St(t,i)}}function RT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Eh.set(i),n.uniformMatrix4fv(this.addr,!1,Eh),St(t,i)}}function CT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function PT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function LT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function DT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function UT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function IT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function OT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function NT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function FT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Fp,r)}function BT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zp,r)}function zT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||kp,r)}function kT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Bp,r)}function HT(n){switch(n){case 5126:return ET;case 35664:return yT;case 35665:return TT;case 35666:return bT;case 35674:return AT;case 35675:return wT;case 35676:return RT;case 5124:case 35670:return CT;case 35667:case 35671:return PT;case 35668:case 35672:return LT;case 35669:case 35673:return DT;case 5125:return UT;case 36294:return IT;case 36295:return OT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return kT}}function GT(n,e){n.uniform1fv(this.addr,e)}function VT(n,e){const t=ys(e,this.size,2);n.uniform2fv(this.addr,t)}function WT(n,e){const t=ys(e,this.size,3);n.uniform3fv(this.addr,t)}function XT(n,e){const t=ys(e,this.size,4);n.uniform4fv(this.addr,t)}function qT(n,e){const t=ys(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function YT(n,e){const t=ys(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jT(n,e){const t=ys(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KT(n,e){n.uniform1iv(this.addr,e)}function JT(n,e){n.uniform2iv(this.addr,e)}function ZT(n,e){n.uniform3iv(this.addr,e)}function $T(n,e){n.uniform4iv(this.addr,e)}function QT(n,e){n.uniform1uiv(this.addr,e)}function eb(n,e){n.uniform2uiv(this.addr,e)}function tb(n,e){n.uniform3uiv(this.addr,e)}function nb(n,e){n.uniform4uiv(this.addr,e)}function ib(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Fp,s[o])}function rb(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zp,s[o])}function sb(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||kp,s[o])}function ob(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Bp,s[o])}function ab(n){switch(n){case 5126:return GT;case 35664:return VT;case 35665:return WT;case 35666:return XT;case 35674:return qT;case 35675:return YT;case 35676:return jT;case 5124:case 35670:return KT;case 35667:case 35671:return JT;case 35668:case 35672:return ZT;case 35669:case 35673:return $T;case 5125:return QT;case 36294:return eb;case 36295:return tb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return ob}}class lb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=HT(t.type)}}class cb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=ab(t.type)}}class ub{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Al=/(\w+)(\])?(\[|\.)?/g;function bh(n,e){n.seq.push(e),n.map[e.id]=e}function fb(n,e,t){const i=n.name,r=i.length;for(Al.lastIndex=0;;){const s=Al.exec(i),o=Al.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){bh(t,c===void 0?new lb(a,n,e):new cb(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ub(a),bh(t,f)),t=f}}}class ta{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);fb(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ah(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let hb=0;function db(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function pb(n){switch(n){case Yn:return["Linear","( value )"];case He:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function wh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+db(n.getShaderSource(e),o)}else return r}function mb(n,e){const t=pb(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function _b(n,e){let t;switch(e){case AM:t="Linear";break;case wM:t="Reinhard";break;case RM:t="OptimizedCineon";break;case CM:t="ACESFilmic";break;case PM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gb(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Os).join(`
`)}function vb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Os(n){return n!==""}function Rh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ch(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(n){return n.replace(Mb,Sb)}function Sb(n,e){const t=Ge[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return hc(t)}const Eb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(n){return n.replace(Eb,yb)}function yb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===up?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function bb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case fs:e="ENVMAP_TYPE_CUBE";break;case Da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ab(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function wb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dp:e="ENVMAP_BLENDING_MULTIPLY";break;case TM:e="ENVMAP_BLENDING_MIX";break;case bM:e="ENVMAP_BLENDING_ADD";break}return e}function Rb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Cb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Tb(t),c=bb(t),u=Ab(t),f=wb(t),h=Rb(t),p=t.isWebGL2?"":gb(t),g=vb(s),_=r.createProgram();let m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),d.length>0&&(d+=`
`)):(m=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),d=[p,Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ui?_b("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.encodings_pars_fragment,mb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Os).join(`
`)),o=hc(o),o=Rh(o,t),o=Ch(o,t),a=hc(a),a=Rh(a,t),a=Ch(a,t),o=Ph(o),a=Ph(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=E+m+o,S=E+d+a,T=Ah(r,r.VERTEX_SHADER,x),w=Ah(r,r.FRAGMENT_SHADER,S);if(r.attachShader(_,T),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(_).trim(),R=r.getShaderInfoLog(T).trim(),j=r.getShaderInfoLog(w).trim();let re=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,T,w);else{const V=wh(r,T,"vertex"),W=wh(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+V+`
`+W)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(R===""||j==="")&&(N=!1);N&&(this.diagnostics={runnable:re,programLog:M,vertexShader:{log:R,prefix:m},fragmentShader:{log:j,prefix:d}})}r.deleteShader(T),r.deleteShader(w);let P;this.getUniforms=function(){return P===void 0&&(P=new ta(r,_)),P};let D;return this.getAttributes=function(){return D===void 0&&(D=xb(r,_)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let Pb=0;class Lb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Db(e),t.set(e,i)),i}}class Db{constructor(e){this.id=Pb++,this.code=e,this.usedTimes=0}}function Ub(n,e,t,i,r,s,o){const a=new Rp,l=new Lb,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,R,j,re,N){const V=re.fog,W=N.geometry,Z=M.isMeshStandardMaterial?re.environment:null,z=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),X=z&&z.mapping===Da?z.image.height:null,ue=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const oe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ee=oe!==void 0?oe.length:0;let F=0;W.morphAttributes.position!==void 0&&(F=1),W.morphAttributes.normal!==void 0&&(F=2),W.morphAttributes.color!==void 0&&(F=3);let pe,de,I,$;if(ue){const mt=Fn[ue];pe=mt.vertexShader,de=mt.fragmentShader}else pe=M.vertexShader,de=M.fragmentShader,l.update(M),I=l.getVertexShaderID(M),$=l.getFragmentShaderID(M);const ee=n.getRenderTarget(),_e=N.isInstancedMesh===!0,ge=!!M.map,Ue=!!M.matcap,Me=!!z,v=!!M.aoMap,L=!!M.lightMap,O=!!M.bumpMap,G=!!M.normalMap,q=!!M.displacementMap,ce=!!M.emissiveMap,fe=!!M.metalnessMap,Q=!!M.roughnessMap,he=M.anisotropy>0,le=M.clearcoat>0,be=M.iridescence>0,b=M.sheen>0,y=M.transmission>0,B=he&&!!M.anisotropyMap,te=le&&!!M.clearcoatMap,ae=le&&!!M.clearcoatNormalMap,C=le&&!!M.clearcoatRoughnessMap,ne=be&&!!M.iridescenceMap,me=be&&!!M.iridescenceThicknessMap,K=b&&!!M.sheenColorMap,we=b&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,Pe=!!M.specularColorMap,Se=!!M.specularIntensityMap,ye=y&&!!M.transmissionMap,Le=y&&!!M.thicknessMap,qe=!!M.gradientMap,U=!!M.alphaMap,Te=M.alphaTest>0,J=!!M.extensions,ve=!!W.attributes.uv1,Ae=!!W.attributes.uv2,Je=!!W.attributes.uv3;return{isWebGL2:u,shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:pe,fragmentShader:de,defines:M.defines,customVertexShaderID:I,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:_e,instancingColor:_e&&N.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Yn,map:ge,matcap:Ue,envMap:Me,envMapMode:Me&&z.mapping,envMapCubeUVHeight:X,aoMap:v,lightMap:L,bumpMap:O,normalMap:G,displacementMap:h&&q,emissiveMap:ce,normalMapObjectSpace:G&&M.normalMapType===VM,normalMapTangentSpace:G&&M.normalMapType===Ep,metalnessMap:fe,roughnessMap:Q,anisotropy:he,anisotropyMap:B,clearcoat:le,clearcoatMap:te,clearcoatNormalMap:ae,clearcoatRoughnessMap:C,iridescence:be,iridescenceMap:ne,iridescenceThicknessMap:me,sheen:b,sheenColorMap:K,sheenRoughnessMap:we,specularMap:Ce,specularColorMap:Pe,specularIntensityMap:Se,transmission:y,transmissionMap:ye,thicknessMap:Le,gradientMap:qe,opaque:M.transparent===!1&&M.blending===es,alphaMap:U,alphaTest:Te,combine:M.combine,mapUv:ge&&_(M.map.channel),aoMapUv:v&&_(M.aoMap.channel),lightMapUv:L&&_(M.lightMap.channel),bumpMapUv:O&&_(M.bumpMap.channel),normalMapUv:G&&_(M.normalMap.channel),displacementMapUv:q&&_(M.displacementMap.channel),emissiveMapUv:ce&&_(M.emissiveMap.channel),metalnessMapUv:fe&&_(M.metalnessMap.channel),roughnessMapUv:Q&&_(M.roughnessMap.channel),anisotropyMapUv:B&&_(M.anisotropyMap.channel),clearcoatMapUv:te&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:K&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(M.sheenRoughnessMap.channel),specularMapUv:Ce&&_(M.specularMap.channel),specularColorMapUv:Pe&&_(M.specularColorMap.channel),specularIntensityMapUv:Se&&_(M.specularIntensityMap.channel),transmissionMapUv:ye&&_(M.transmissionMap.channel),thicknessMapUv:Le&&_(M.thicknessMap.channel),alphaMapUv:U&&_(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(G||he),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:ve,vertexUv2s:Ae,vertexUv3s:Je,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(ge||U),fog:!!V,useFog:M.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:F,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:ui,useLegacyLights:n.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===oi,flipSided:M.side===qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:J&&M.extensions.derivatives===!0,extensionFragDepth:J&&M.extensions.fragDepth===!0,extensionDrawBuffers:J&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:J&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const j in M.defines)R.push(j),R.push(M.defines[j]);return M.isRawShaderMaterial===!1&&(E(R,M),x(R,M),R.push(n.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function E(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function x(M,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),M.push(a.mask)}function S(M){const R=g[M.type];let j;if(R){const re=Fn[R];j=SS.clone(re.uniforms)}else j=M.uniforms;return j}function T(M,R){let j;for(let re=0,N=c.length;re<N;re++){const V=c[re];if(V.cacheKey===R){j=V,++j.usedTimes;break}}return j===void 0&&(j=new Cb(n,R,M,s),c.push(j)),j}function w(M){if(--M.usedTimes===0){const R=c.indexOf(M);c[R]=c[c.length-1],c.pop(),M.destroy()}}function P(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:T,releaseProgram:w,releaseShaderCache:P,programs:c,dispose:D}}function Ib(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Ob(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||Ob),i.length>1&&i.sort(h||Dh),r.length>1&&r.sort(h||Dh)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Nb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Uh,n.set(i,[o])):r>=s.length?(o=new Uh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Fb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Qe};break;case"SpotLight":t={position:new k,direction:new k,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function Bb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let zb=0;function kb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Hb(n,e){const t=new Fb,i=Bb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new k);const s=new k,o=new xt,a=new xt;function l(u,f){let h=0,p=0,g=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let _=0,m=0,d=0,E=0,x=0,S=0,T=0,w=0,P=0,D=0;u.sort(kb);const M=f===!0?Math.PI:1;for(let j=0,re=u.length;j<re;j++){const N=u[j],V=N.color,W=N.intensity,Z=N.distance,z=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=V.r*W*M,p+=V.g*W*M,g+=V.b*W*M;else if(N.isLightProbe)for(let X=0;X<9;X++)r.probe[X].addScaledVector(N.sh.coefficients[X],W);else if(N.isDirectionalLight){const X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const ue=N.shadow,oe=i.get(N);oe.shadowBias=ue.bias,oe.shadowNormalBias=ue.normalBias,oe.shadowRadius=ue.radius,oe.shadowMapSize=ue.mapSize,r.directionalShadow[_]=oe,r.directionalShadowMap[_]=z,r.directionalShadowMatrix[_]=N.shadow.matrix,S++}r.directional[_]=X,_++}else if(N.isSpotLight){const X=t.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(V).multiplyScalar(W*M),X.distance=Z,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,r.spot[d]=X;const ue=N.shadow;if(N.map&&(r.spotLightMap[P]=N.map,P++,ue.updateMatrices(N),N.castShadow&&D++),r.spotLightMatrix[d]=ue.matrix,N.castShadow){const oe=i.get(N);oe.shadowBias=ue.bias,oe.shadowNormalBias=ue.normalBias,oe.shadowRadius=ue.radius,oe.shadowMapSize=ue.mapSize,r.spotShadow[d]=oe,r.spotShadowMap[d]=z,w++}d++}else if(N.isRectAreaLight){const X=t.get(N);X.color.copy(V).multiplyScalar(W),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),r.rectArea[E]=X,E++}else if(N.isPointLight){const X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity*M),X.distance=N.distance,X.decay=N.decay,N.castShadow){const ue=N.shadow,oe=i.get(N);oe.shadowBias=ue.bias,oe.shadowNormalBias=ue.normalBias,oe.shadowRadius=ue.radius,oe.shadowMapSize=ue.mapSize,oe.shadowCameraNear=ue.camera.near,oe.shadowCameraFar=ue.camera.far,r.pointShadow[m]=oe,r.pointShadowMap[m]=z,r.pointShadowMatrix[m]=N.shadow.matrix,T++}r.point[m]=X,m++}else if(N.isHemisphereLight){const X=t.get(N);X.skyColor.copy(N.color).multiplyScalar(W*M),X.groundColor.copy(N.groundColor).multiplyScalar(W*M),r.hemi[x]=X,x++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==_||R.pointLength!==m||R.spotLength!==d||R.rectAreaLength!==E||R.hemiLength!==x||R.numDirectionalShadows!==S||R.numPointShadows!==T||R.numSpotShadows!==w||R.numSpotMaps!==P)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=E,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=w+P-D,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=D,R.directionalLength=_,R.pointLength=m,R.spotLength=d,R.rectAreaLength=E,R.hemiLength=x,R.numDirectionalShadows=S,R.numPointShadows=T,R.numSpotShadows=w,R.numSpotMaps=P,r.version=zb++)}function c(u,f){let h=0,p=0,g=0,_=0,m=0;const d=f.matrixWorldInverse;for(let E=0,x=u.length;E<x;E++){const S=u[E];if(S.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),h++}else if(S.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),g++}else if(S.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function Ih(n,e){const t=new Hb(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Gb(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Ih(n,e),t.set(s,[l])):o>=a.length?(l=new Ih(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Vb extends mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wb extends mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yb(n,e,t){let i=new tu;const r=new ze,s=new ze,o=new st,a=new Vb({depthPacking:GM}),l=new Wb,c={},u=t.maxTextureSize,f={[Fi]:qt,[qt]:Fi,[oi]:oi},h=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Xb,fragmentShader:qb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Hi;g.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new li(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=up;let d=this.type;this.render=function(T,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const D=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Di),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const re=d!==ni&&this.type===ni,N=d===ni&&this.type!==ni;for(let V=0,W=T.length;V<W;V++){const Z=T[V],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const X=z.getFrameExtents();if(r.multiply(X),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,z.mapSize.y=s.y)),z.map===null||re===!0||N===!0){const oe=this.type!==ni?{minFilter:kt,magFilter:kt}:{};z.map!==null&&z.map.dispose(),z.map=new vr(r.x,r.y,oe),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ue=z.getViewportCount();for(let oe=0;oe<ue;oe++){const Ee=z.getViewport(oe);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),j.viewport(o),z.updateMatrices(Z,oe),i=z.getFrustum(),S(w,P,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===ni&&E(z,P),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(D,M,R)};function E(T,w){const P=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,P,h,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,P,p,_,null)}function x(T,w,P,D){let M=null;const R=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const j=M.uuid,re=w.uuid;let N=c[j];N===void 0&&(N={},c[j]=N);let V=N[re];V===void 0&&(V=M.clone(),N[re]=V),M=V}if(M.visible=w.visible,M.wireframe=w.wireframe,D===ni?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const j=n.properties.get(M);j.light=P}return M}function S(T,w,P,D,M){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ni)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const re=e.update(T),N=T.material;if(Array.isArray(N)){const V=re.groups;for(let W=0,Z=V.length;W<Z;W++){const z=V[W],X=N[z.materialIndex];if(X&&X.visible){const ue=x(T,X,D,M);n.renderBufferDirect(P,null,re,ue,T,z)}}}else if(N.visible){const V=x(T,N,D,M);n.renderBufferDirect(P,null,re,V,T,null)}}const j=T.children;for(let re=0,N=j.length;re<N;re++)S(j[re],w,P,D,M)}}function jb(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const Te=new st;let J=null;const ve=new st(0,0,0,0);return{setMask:function(Ae){J!==Ae&&!U&&(n.colorMask(Ae,Ae,Ae,Ae),J=Ae)},setLocked:function(Ae){U=Ae},setClear:function(Ae,Je,lt,mt,Vi){Vi===!0&&(Ae*=mt,Je*=mt,lt*=mt),Te.set(Ae,Je,lt,mt),ve.equals(Te)===!1&&(n.clearColor(Ae,Je,lt,mt),ve.copy(Te))},reset:function(){U=!1,J=null,ve.set(-1,0,0,0)}}}function s(){let U=!1,Te=null,J=null,ve=null;return{setTest:function(Ae){Ae?ee(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(Ae){Te!==Ae&&!U&&(n.depthMask(Ae),Te=Ae)},setFunc:function(Ae){if(J!==Ae){switch(Ae){case gM:n.depthFunc(n.NEVER);break;case vM:n.depthFunc(n.ALWAYS);break;case xM:n.depthFunc(n.LESS);break;case rc:n.depthFunc(n.LEQUAL);break;case MM:n.depthFunc(n.EQUAL);break;case SM:n.depthFunc(n.GEQUAL);break;case EM:n.depthFunc(n.GREATER);break;case yM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=Ae}},setLocked:function(Ae){U=Ae},setClear:function(Ae){ve!==Ae&&(n.clearDepth(Ae),ve=Ae)},reset:function(){U=!1,Te=null,J=null,ve=null}}}function o(){let U=!1,Te=null,J=null,ve=null,Ae=null,Je=null,lt=null,mt=null,Vi=null;return{setTest:function(ct){U||(ct?ee(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(ct){Te!==ct&&!U&&(n.stencilMask(ct),Te=ct)},setFunc:function(ct,In,Nt){(J!==ct||ve!==In||Ae!==Nt)&&(n.stencilFunc(ct,In,Nt),J=ct,ve=In,Ae=Nt)},setOp:function(ct,In,Nt){(Je!==ct||lt!==In||mt!==Nt)&&(n.stencilOp(ct,In,Nt),Je=ct,lt=In,mt=Nt)},setLocked:function(ct){U=ct},setClear:function(ct){Vi!==ct&&(n.clearStencil(ct),Vi=ct)},reset:function(){U=!1,Te=null,J=null,ve=null,Ae=null,Je=null,lt=null,mt=null,Vi=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,_=[],m=null,d=!1,E=null,x=null,S=null,T=null,w=null,P=null,D=null,M=!1,R=null,j=null,re=null,N=null,V=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,z=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=z>=2);let ue=null,oe={};const Ee=n.getParameter(n.SCISSOR_BOX),F=n.getParameter(n.VIEWPORT),pe=new st().fromArray(Ee),de=new st().fromArray(F);function I(U,Te,J,ve){const Ae=new Uint8Array(4),Je=n.createTexture();n.bindTexture(U,Je),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let lt=0;lt<J;lt++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(Te,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(Te+lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Je}const $={};$[n.TEXTURE_2D]=I(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=I(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&($[n.TEXTURE_2D_ARRAY]=I(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=I(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ee(n.DEPTH_TEST),l.setFunc(rc),q(!1),ce(xf),ee(n.CULL_FACE),O(Di);function ee(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function _e(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function ge(U,Te){return p[U]!==Te?(n.bindFramebuffer(U,Te),p[U]=Te,i&&(U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Te),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Te)),!0):!1}function Ue(U,Te){let J=_,ve=!1;if(U)if(J=g.get(Te),J===void 0&&(J=[],g.set(Te,J)),U.isWebGLMultipleRenderTargets){const Ae=U.texture;if(J.length!==Ae.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Je=0,lt=Ae.length;Je<lt;Je++)J[Je]=n.COLOR_ATTACHMENT0+Je;J.length=Ae.length,ve=!0}}else J[0]!==n.COLOR_ATTACHMENT0&&(J[0]=n.COLOR_ATTACHMENT0,ve=!0);else J[0]!==n.BACK&&(J[0]=n.BACK,ve=!0);ve&&(t.isWebGL2?n.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Me(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const v={[qr]:n.FUNC_ADD,[oM]:n.FUNC_SUBTRACT,[aM]:n.FUNC_REVERSE_SUBTRACT};if(i)v[yf]=n.MIN,v[Tf]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(v[yf]=U.MIN_EXT,v[Tf]=U.MAX_EXT)}const L={[lM]:n.ZERO,[cM]:n.ONE,[uM]:n.SRC_COLOR,[fp]:n.SRC_ALPHA,[_M]:n.SRC_ALPHA_SATURATE,[pM]:n.DST_COLOR,[hM]:n.DST_ALPHA,[fM]:n.ONE_MINUS_SRC_COLOR,[hp]:n.ONE_MINUS_SRC_ALPHA,[mM]:n.ONE_MINUS_DST_COLOR,[dM]:n.ONE_MINUS_DST_ALPHA};function O(U,Te,J,ve,Ae,Je,lt,mt){if(U===Di){d===!0&&(_e(n.BLEND),d=!1);return}if(d===!1&&(ee(n.BLEND),d=!0),U!==sM){if(U!==E||mt!==M){if((x!==qr||w!==qr)&&(n.blendEquation(n.FUNC_ADD),x=qr,w=qr),mt)switch(U){case es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mf:n.blendFunc(n.ONE,n.ONE);break;case Sf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ef:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Sf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ef:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,T=null,P=null,D=null,E=U,M=mt}return}Ae=Ae||Te,Je=Je||J,lt=lt||ve,(Te!==x||Ae!==w)&&(n.blendEquationSeparate(v[Te],v[Ae]),x=Te,w=Ae),(J!==S||ve!==T||Je!==P||lt!==D)&&(n.blendFuncSeparate(L[J],L[ve],L[Je],L[lt]),S=J,T=ve,P=Je,D=lt),E=U,M=!1}function G(U,Te){U.side===oi?_e(n.CULL_FACE):ee(n.CULL_FACE);let J=U.side===qt;Te&&(J=!J),q(J),U.blending===es&&U.transparent===!1?O(Di):O(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const ve=U.stencilWrite;c.setTest(ve),ve&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Q(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(U){R!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),R=U)}function ce(U){U!==nM?(ee(n.CULL_FACE),U!==j&&(U===xf?n.cullFace(n.BACK):U===iM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),j=U}function fe(U){U!==re&&(Z&&n.lineWidth(U),re=U)}function Q(U,Te,J){U?(ee(n.POLYGON_OFFSET_FILL),(N!==Te||V!==J)&&(n.polygonOffset(Te,J),N=Te,V=J)):_e(n.POLYGON_OFFSET_FILL)}function he(U){U?ee(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function le(U){U===void 0&&(U=n.TEXTURE0+W-1),ue!==U&&(n.activeTexture(U),ue=U)}function be(U,Te,J){J===void 0&&(ue===null?J=n.TEXTURE0+W-1:J=ue);let ve=oe[J];ve===void 0&&(ve={type:void 0,texture:void 0},oe[J]=ve),(ve.type!==U||ve.texture!==Te)&&(ue!==J&&(n.activeTexture(J),ue=J),n.bindTexture(U,Te||$[U]),ve.type=U,ve.texture=Te)}function b(){const U=oe[ue];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function C(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(U){pe.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),pe.copy(U))}function Se(U){de.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),de.copy(U))}function ye(U,Te){let J=f.get(Te);J===void 0&&(J=new WeakMap,f.set(Te,J));let ve=J.get(U);ve===void 0&&(ve=n.getUniformBlockIndex(Te,U.name),J.set(U,ve))}function Le(U,Te){const ve=f.get(Te).get(U);u.get(Te)!==ve&&(n.uniformBlockBinding(Te,ve,U.__bindingPointIndex),u.set(Te,ve))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ue=null,oe={},p={},g=new WeakMap,_=[],m=null,d=!1,E=null,x=null,S=null,T=null,w=null,P=null,D=null,M=!1,R=null,j=null,re=null,N=null,V=null,pe.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ee,disable:_e,bindFramebuffer:ge,drawBuffers:Ue,useProgram:Me,setBlending:O,setMaterial:G,setFlipSided:q,setCullFace:ce,setLineWidth:fe,setPolygonOffset:Q,setScissorTest:he,activeTexture:le,bindTexture:be,unbindTexture:b,compressedTexImage2D:y,compressedTexImage3D:B,texImage2D:we,texImage3D:Ce,updateUBOMapping:ye,uniformBlockBinding:Le,texStorage2D:me,texStorage3D:K,texSubImage2D:te,texSubImage3D:ae,compressedTexSubImage2D:C,compressedTexSubImage3D:ne,scissor:Pe,viewport:Se,reset:qe}}function Kb(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,y){return d?new OffscreenCanvas(b,y):io("canvas")}function x(b,y,B,te){let ae=1;if((b.width>te||b.height>te)&&(ae=te/Math.max(b.width,b.height)),ae<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const C=y?fc:Math.floor,ne=C(ae*b.width),me=C(ae*b.height);_===void 0&&(_=E(ne,me));const K=B?E(ne,me):_;return K.width=ne,K.height=me,K.getContext("2d").drawImage(b,0,0,ne,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ne+"x"+me+")."),K}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function S(b){return Zf(b.width)&&Zf(b.height)}function T(b){return a?!1:b.wrapS!==An||b.wrapT!==An||b.minFilter!==kt&&b.minFilter!==dn}function w(b,y){return b.generateMipmaps&&y&&b.minFilter!==kt&&b.minFilter!==dn}function P(b){n.generateMipmap(b)}function D(b,y,B,te,ae=!1){if(a===!1)return y;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let C=y;return y===n.RED&&(B===n.FLOAT&&(C=n.R32F),B===n.HALF_FLOAT&&(C=n.R16F),B===n.UNSIGNED_BYTE&&(C=n.R8)),y===n.RG&&(B===n.FLOAT&&(C=n.RG32F),B===n.HALF_FLOAT&&(C=n.RG16F),B===n.UNSIGNED_BYTE&&(C=n.RG8)),y===n.RGBA&&(B===n.FLOAT&&(C=n.RGBA32F),B===n.HALF_FLOAT&&(C=n.RGBA16F),B===n.UNSIGNED_BYTE&&(C=te===He&&ae===!1?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(C=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(C=n.RGB5_A1)),(C===n.R16F||C===n.R32F||C===n.RG16F||C===n.RG32F||C===n.RGBA16F||C===n.RGBA32F)&&e.get("EXT_color_buffer_float"),C}function M(b,y,B){return w(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==kt&&b.minFilter!==dn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function R(b){return b===kt||b===bf||b===$a?n.NEAREST:n.LINEAR}function j(b){const y=b.target;y.removeEventListener("dispose",j),N(y),y.isVideoTexture&&g.delete(y)}function re(b){const y=b.target;y.removeEventListener("dispose",re),W(y)}function N(b){const y=i.get(b);if(y.__webglInit===void 0)return;const B=b.source,te=m.get(B);if(te){const ae=te[y.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&V(b),Object.keys(te).length===0&&m.delete(B)}i.remove(b)}function V(b){const y=i.get(b);n.deleteTexture(y.__webglTexture);const B=b.source,te=m.get(B);delete te[y.__cacheKey],o.memory.textures--}function W(b){const y=b.texture,B=i.get(b),te=i.get(y);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)n.deleteFramebuffer(B.__webglFramebuffer[ae]),B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[ae]);else{if(n.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ae=0;ae<B.__webglColorRenderbuffer.length;ae++)B.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[ae]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ae=0,C=y.length;ae<C;ae++){const ne=i.get(y[ae]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(y[ae])}i.remove(y),i.remove(b)}let Z=0;function z(){Z=0}function X(){const b=Z;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),Z+=1,b}function ue(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function oe(b,y){const B=i.get(b);if(b.isVideoTexture&&le(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const te=b.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(B,b,y);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+y)}function Ee(b,y){const B=i.get(b);if(b.version>0&&B.__version!==b.version){ge(B,b,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+y)}function F(b,y){const B=i.get(b);if(b.version>0&&B.__version!==b.version){ge(B,b,y);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+y)}function pe(b,y){const B=i.get(b);if(b.version>0&&B.__version!==b.version){Ue(B,b,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+y)}const de={[ac]:n.REPEAT,[An]:n.CLAMP_TO_EDGE,[lc]:n.MIRRORED_REPEAT},I={[kt]:n.NEAREST,[bf]:n.NEAREST_MIPMAP_NEAREST,[$a]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[LM]:n.LINEAR_MIPMAP_NEAREST,[to]:n.LINEAR_MIPMAP_LINEAR},$={[XM]:n.NEVER,[$M]:n.ALWAYS,[qM]:n.LESS,[jM]:n.LEQUAL,[YM]:n.EQUAL,[ZM]:n.GEQUAL,[KM]:n.GREATER,[JM]:n.NOTEQUAL};function ee(b,y,B){if(B?(n.texParameteri(b,n.TEXTURE_WRAP_S,de[y.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,de[y.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,de[y.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,I[y.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,I[y.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==An||y.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,R(y.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,R(y.minFilter)),y.minFilter!==kt&&y.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,$[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===kt||y.minFilter!==$a&&y.minFilter!==to||y.type===Ai&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===no&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(b,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function _e(b,y){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",j));const te=y.source;let ae=m.get(te);ae===void 0&&(ae={},m.set(te,ae));const C=ue(y);if(C!==b.__cacheKey){ae[C]===void 0&&(ae[C]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ae[C].usedTimes++;const ne=ae[b.__cacheKey];ne!==void 0&&(ae[b.__cacheKey].usedTimes--,ne.usedTimes===0&&V(y)),b.__cacheKey=C,b.__webglTexture=ae[C].texture}return B}function ge(b,y,B){let te=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(te=n.TEXTURE_3D);const ae=_e(b,y),C=y.source;t.bindTexture(te,b.__webglTexture,n.TEXTURE0+B);const ne=i.get(C);if(C.version!==ne.__version||ae===!0){t.activeTexture(n.TEXTURE0+B),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const me=T(y)&&S(y.image)===!1;let K=x(y.image,me,!1,u);K=be(y,K);const we=S(K)||a,Ce=s.convert(y.format,y.colorSpace);let Pe=s.convert(y.type),Se=D(y.internalFormat,Ce,Pe,y.colorSpace);ee(te,y,we);let ye;const Le=y.mipmaps,qe=a&&y.isVideoTexture!==!0,U=ne.__version===void 0||ae===!0,Te=M(y,K,we);if(y.isDepthTexture)Se=n.DEPTH_COMPONENT,a?y.type===Ai?Se=n.DEPTH_COMPONENT32F:y.type===bi?Se=n.DEPTH_COMPONENT24:y.type===cr?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:y.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ur&&Se===n.DEPTH_COMPONENT&&y.type!==Qc&&y.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=bi,Pe=s.convert(y.type)),y.format===hs&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,y.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=cr,Pe=s.convert(y.type))),U&&(qe?t.texStorage2D(n.TEXTURE_2D,1,Se,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,Se,K.width,K.height,0,Ce,Pe,null));else if(y.isDataTexture)if(Le.length>0&&we){qe&&U&&t.texStorage2D(n.TEXTURE_2D,Te,Se,Le[0].width,Le[0].height);for(let J=0,ve=Le.length;J<ve;J++)ye=Le[J],qe?t.texSubImage2D(n.TEXTURE_2D,J,0,0,ye.width,ye.height,Ce,Pe,ye.data):t.texImage2D(n.TEXTURE_2D,J,Se,ye.width,ye.height,0,Ce,Pe,ye.data);y.generateMipmaps=!1}else qe?(U&&t.texStorage2D(n.TEXTURE_2D,Te,Se,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,Ce,Pe,K.data)):t.texImage2D(n.TEXTURE_2D,0,Se,K.width,K.height,0,Ce,Pe,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qe&&U&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Se,Le[0].width,Le[0].height,K.depth);for(let J=0,ve=Le.length;J<ve;J++)ye=Le[J],y.format!==wn?Ce!==null?qe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ye.width,ye.height,K.depth,Ce,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Se,ye.width,ye.height,K.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ye.width,ye.height,K.depth,Ce,Pe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Se,ye.width,ye.height,K.depth,0,Ce,Pe,ye.data)}else{qe&&U&&t.texStorage2D(n.TEXTURE_2D,Te,Se,Le[0].width,Le[0].height);for(let J=0,ve=Le.length;J<ve;J++)ye=Le[J],y.format!==wn?Ce!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ye.width,ye.height,Ce,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Se,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(n.TEXTURE_2D,J,0,0,ye.width,ye.height,Ce,Pe,ye.data):t.texImage2D(n.TEXTURE_2D,J,Se,ye.width,ye.height,0,Ce,Pe,ye.data)}else if(y.isDataArrayTexture)qe?(U&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Se,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Ce,Pe,K.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,K.width,K.height,K.depth,0,Ce,Pe,K.data);else if(y.isData3DTexture)qe?(U&&t.texStorage3D(n.TEXTURE_3D,Te,Se,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Ce,Pe,K.data)):t.texImage3D(n.TEXTURE_3D,0,Se,K.width,K.height,K.depth,0,Ce,Pe,K.data);else if(y.isFramebufferTexture){if(U)if(qe)t.texStorage2D(n.TEXTURE_2D,Te,Se,K.width,K.height);else{let J=K.width,ve=K.height;for(let Ae=0;Ae<Te;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Se,J,ve,0,Ce,Pe,null),J>>=1,ve>>=1}}else if(Le.length>0&&we){qe&&U&&t.texStorage2D(n.TEXTURE_2D,Te,Se,Le[0].width,Le[0].height);for(let J=0,ve=Le.length;J<ve;J++)ye=Le[J],qe?t.texSubImage2D(n.TEXTURE_2D,J,0,0,Ce,Pe,ye):t.texImage2D(n.TEXTURE_2D,J,Se,Ce,Pe,ye);y.generateMipmaps=!1}else qe?(U&&t.texStorage2D(n.TEXTURE_2D,Te,Se,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Pe,K)):t.texImage2D(n.TEXTURE_2D,0,Se,Ce,Pe,K);w(y,we)&&P(te),ne.__version=C.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Ue(b,y,B){if(y.image.length!==6)return;const te=_e(b,y),ae=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+B);const C=i.get(ae);if(ae.version!==C.__version||te===!0){t.activeTexture(n.TEXTURE0+B),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ne=y.isCompressedTexture||y.image[0].isCompressedTexture,me=y.image[0]&&y.image[0].isDataTexture,K=[];for(let J=0;J<6;J++)!ne&&!me?K[J]=x(y.image[J],!1,!0,c):K[J]=me?y.image[J].image:y.image[J],K[J]=be(y,K[J]);const we=K[0],Ce=S(we)||a,Pe=s.convert(y.format,y.colorSpace),Se=s.convert(y.type),ye=D(y.internalFormat,Pe,Se,y.colorSpace),Le=a&&y.isVideoTexture!==!0,qe=C.__version===void 0||te===!0;let U=M(y,we,Ce);ee(n.TEXTURE_CUBE_MAP,y,Ce);let Te;if(ne){Le&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,U,ye,we.width,we.height);for(let J=0;J<6;J++){Te=K[J].mipmaps;for(let ve=0;ve<Te.length;ve++){const Ae=Te[ve];y.format!==wn?Pe!==null?Le?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,Ae.width,Ae.height,Pe,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,ye,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,Ae.width,Ae.height,Pe,Se,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,ye,Ae.width,Ae.height,0,Pe,Se,Ae.data)}}}else{Te=y.mipmaps,Le&&qe&&(Te.length>0&&U++,t.texStorage2D(n.TEXTURE_CUBE_MAP,U,ye,K[0].width,K[0].height));for(let J=0;J<6;J++)if(me){Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,K[J].width,K[J].height,Pe,Se,K[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ye,K[J].width,K[J].height,0,Pe,Se,K[J].data);for(let ve=0;ve<Te.length;ve++){const Je=Te[ve].image[J].image;Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,Je.width,Je.height,Pe,Se,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,ye,Je.width,Je.height,0,Pe,Se,Je.data)}}else{Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pe,Se,K[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ye,Pe,Se,K[J]);for(let ve=0;ve<Te.length;ve++){const Ae=Te[ve];Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,Pe,Se,Ae.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,ye,Pe,Se,Ae.image[J])}}}w(y,Ce)&&P(n.TEXTURE_CUBE_MAP),C.__version=ae.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Me(b,y,B,te,ae){const C=s.convert(B.format,B.colorSpace),ne=s.convert(B.type),me=D(B.internalFormat,C,ne,B.colorSpace);i.get(y).__hasExternalTextures||(ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,me,y.width,y.height,y.depth,0,C,ne,null):t.texImage2D(ae,0,me,y.width,y.height,0,C,ne,null)),t.bindFramebuffer(n.FRAMEBUFFER,b),he(y)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ae,i.get(B).__webglTexture,0,Q(y)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ae,i.get(B).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function v(b,y,B){if(n.bindRenderbuffer(n.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let te=n.DEPTH_COMPONENT16;if(B||he(y)){const ae=y.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Ai?te=n.DEPTH_COMPONENT32F:ae.type===bi&&(te=n.DEPTH_COMPONENT24));const C=Q(y);he(y)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C,te,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,C,te,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,te,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){const te=Q(y);B&&he(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,y.width,y.height):he(y)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const te=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ae=0;ae<te.length;ae++){const C=te[ae],ne=s.convert(C.format,C.colorSpace),me=s.convert(C.type),K=D(C.internalFormat,ne,me,C.colorSpace),we=Q(y);B&&he(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,K,y.width,y.height):he(y)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,K,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,K,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function L(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),oe(y.depthTexture,0);const te=i.get(y.depthTexture).__webglTexture,ae=Q(y);if(y.depthTexture.format===ur)he(y)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(y.depthTexture.format===hs)he(y)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function O(b){const y=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");L(y.__webglFramebuffer,b)}else if(B){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]=n.createRenderbuffer(),v(y.__webglDepthbuffer[te],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),v(y.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function G(b,y,B){const te=i.get(b);y!==void 0&&Me(te.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),B!==void 0&&O(b)}function q(b){const y=b.texture,B=i.get(b),te=i.get(y);b.addEventListener("dispose",re),b.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=y.version,o.memory.textures++);const ae=b.isWebGLCubeRenderTarget===!0,C=b.isWebGLMultipleRenderTargets===!0,ne=S(b)||a;if(ae){B.__webglFramebuffer=[];for(let me=0;me<6;me++)B.__webglFramebuffer[me]=n.createFramebuffer()}else{if(B.__webglFramebuffer=n.createFramebuffer(),C)if(r.drawBuffers){const me=b.texture;for(let K=0,we=me.length;K<we;K++){const Ce=i.get(me[K]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&he(b)===!1){const me=C?y:[y];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<me.length;K++){const we=me[K];B.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[K]);const Ce=s.convert(we.format,we.colorSpace),Pe=s.convert(we.type),Se=D(we.internalFormat,Ce,Pe,we.colorSpace,b.isXRRenderTarget===!0),ye=Q(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,Se,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,B.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),v(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ee(n.TEXTURE_CUBE_MAP,y,ne);for(let me=0;me<6;me++)Me(B.__webglFramebuffer[me],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me);w(y,ne)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(C){const me=b.texture;for(let K=0,we=me.length;K<we;K++){const Ce=me[K],Pe=i.get(Ce);t.bindTexture(n.TEXTURE_2D,Pe.__webglTexture),ee(n.TEXTURE_2D,Ce,ne),Me(B.__webglFramebuffer,b,Ce,n.COLOR_ATTACHMENT0+K,n.TEXTURE_2D),w(Ce,ne)&&P(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?me=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,te.__webglTexture),ee(me,y,ne),Me(B.__webglFramebuffer,b,y,n.COLOR_ATTACHMENT0,me),w(y,ne)&&P(me),t.unbindTexture()}b.depthBuffer&&O(b)}function ce(b){const y=S(b)||a,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0,ae=B.length;te<ae;te++){const C=B[te];if(w(C,y)){const ne=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,me=i.get(C).__webglTexture;t.bindTexture(ne,me),P(ne),t.unbindTexture()}}}function fe(b){if(a&&b.samples>0&&he(b)===!1){const y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,te=b.height;let ae=n.COLOR_BUFFER_BIT;const C=[],ne=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(b),K=b.isWebGLMultipleRenderTargets===!0;if(K)for(let we=0;we<y.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let we=0;we<y.length;we++){C.push(n.COLOR_ATTACHMENT0+we),b.depthBuffer&&C.push(ne);const Ce=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Ce===!1&&(b.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),K&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[we]),Ce===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ne]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ne])),K){const Pe=i.get(y[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,B,te,0,0,B,te,ae,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let we=0;we<y.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,me.__webglColorRenderbuffer[we]);const Ce=i.get(y[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function Q(b){return Math.min(f,b.samples)}function he(b){const y=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function le(b){const y=o.render.frame;g.get(b)!==y&&(g.set(b,y),b.update())}function be(b,y){const B=b.colorSpace,te=b.format,ae=b.type;return b.isCompressedTexture===!0||b.format===cc||B!==Yn&&B!==hr&&(B===He?a===!1?e.has("EXT_sRGB")===!0&&te===wn?(b.format=cc,b.minFilter=dn,b.generateMipmaps=!1):y=bp.sRGBToLinear(y):(te!==wn||ae!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}this.allocateTextureUnit=X,this.resetTextureUnits=z,this.setTexture2D=oe,this.setTexture2DArray=Ee,this.setTexture3D=F,this.setTextureCube=pe,this.rebindTextures=G,this.setupRenderTarget=q,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=he}function Jb(n,e,t){const i=t.isWebGL2;function r(s,o=hr){let a;if(s===Ui)return n.UNSIGNED_BYTE;if(s===_p)return n.UNSIGNED_SHORT_4_4_4_4;if(s===gp)return n.UNSIGNED_SHORT_5_5_5_1;if(s===DM)return n.BYTE;if(s===UM)return n.SHORT;if(s===Qc)return n.UNSIGNED_SHORT;if(s===mp)return n.INT;if(s===bi)return n.UNSIGNED_INT;if(s===Ai)return n.FLOAT;if(s===no)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===IM)return n.ALPHA;if(s===wn)return n.RGBA;if(s===OM)return n.LUMINANCE;if(s===NM)return n.LUMINANCE_ALPHA;if(s===ur)return n.DEPTH_COMPONENT;if(s===hs)return n.DEPTH_STENCIL;if(s===cc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===FM)return n.RED;if(s===vp)return n.RED_INTEGER;if(s===BM)return n.RG;if(s===xp)return n.RG_INTEGER;if(s===Mp)return n.RGBA_INTEGER;if(s===Qa||s===el||s===tl||s===nl)if(o===He)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Qa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===el)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===el)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Af||s===wf||s===Rf||s===Cf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Af)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Cf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Pf||s===Lf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Pf)return o===He?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Lf)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Df||s===Uf||s===If||s===Of||s===Nf||s===Ff||s===Bf||s===zf||s===kf||s===Hf||s===Gf||s===Vf||s===Wf||s===Xf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Df)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Uf)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===If)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Of)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nf)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ff)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bf)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zf)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===kf)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hf)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gf)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vf)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wf)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xf)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===il)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===il)return o===He?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===kM||s===qf||s===Yf||s===jf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===il)return a.COMPRESSED_RED_RGTC1_EXT;if(s===qf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Zb extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yo extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $b={type:"move"};class wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($b)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Qb extends Yt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:ur,u!==ur&&u!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ur&&(i=bi),i===void 0&&u===hs&&(i=cr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class eA extends Er{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const E=[],x=[];let S=null;const T=new on;T.layers.enable(1),T.viewport=new st;const w=new on;w.layers.enable(2),w.viewport=new st;const P=[T,w],D=new Zb;D.layers.enable(1),D.layers.enable(2);let M=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(F){S=F},this.getController=function(F){let pe=E[F];return pe===void 0&&(pe=new wl,E[F]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(F){let pe=E[F];return pe===void 0&&(pe=new wl,E[F]=pe),pe.getGripSpace()},this.getHand=function(F){let pe=E[F];return pe===void 0&&(pe=new wl,E[F]=pe),pe.getHandSpace()};function j(F){const pe=x.indexOf(F.inputSource);if(pe===-1)return;const de=E[pe];de!==void 0&&(de.update(F.inputSource,F.frame,c||o),de.dispatchEvent({type:F.type,data:F.inputSource}))}function re(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",N);for(let F=0;F<E.length;F++){const pe=x[F];pe!==null&&(x[F]=null,E[F].disconnect(pe))}M=null,R=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,Ee.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",re),r.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const pe={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:p}),d=new vr(p.framebufferWidth,p.framebufferHeight,{format:wn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let pe=null,de=null,I=null;_.depth&&(I=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=_.stencil?hs:ur,de=_.stencil?cr:bi);const $={colorFormat:t.RGBA8,depthFormat:I,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer($),r.updateRenderState({layers:[h]}),d=new vr(h.textureWidth,h.textureHeight,{format:wn,type:Ui,depthTexture:new Qb(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ee=e.properties.get(d);ee.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ee.setContext(r),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(F){for(let pe=0;pe<F.removed.length;pe++){const de=F.removed[pe],I=x.indexOf(de);I>=0&&(x[I]=null,E[I].disconnect(de))}for(let pe=0;pe<F.added.length;pe++){const de=F.added[pe];let I=x.indexOf(de);if(I===-1){for(let ee=0;ee<E.length;ee++)if(ee>=x.length){x.push(de),I=ee;break}else if(x[ee]===null){x[ee]=de,I=ee;break}if(I===-1)break}const $=E[I];$&&$.connect(de)}}const V=new k,W=new k;function Z(F,pe,de){V.setFromMatrixPosition(pe.matrixWorld),W.setFromMatrixPosition(de.matrixWorld);const I=V.distanceTo(W),$=pe.projectionMatrix.elements,ee=de.projectionMatrix.elements,_e=$[14]/($[10]-1),ge=$[14]/($[10]+1),Ue=($[9]+1)/$[5],Me=($[9]-1)/$[5],v=($[8]-1)/$[0],L=(ee[8]+1)/ee[0],O=_e*v,G=_e*L,q=I/(-v+L),ce=q*-v;pe.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(ce),F.translateZ(q),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const fe=_e+q,Q=ge+q,he=O-ce,le=G+(I-ce),be=Ue*ge/Q*fe,b=Me*ge/Q*fe;F.projectionMatrix.makePerspective(he,le,be,b,fe,Q),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function z(F,pe){pe===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(pe.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCameraXR=function(F){if(r===null)return F;S&&(F=S),D.near=w.near=T.near=F.near,D.far=w.far=T.far=F.far,(M!==D.near||R!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),M=D.near,R=D.far);const pe=F.parent,de=D.cameras;z(D,pe);for(let I=0;I<de.length;I++)z(de[I],pe);return de.length===2?Z(D,T,w):D.projectionMatrix.copy(T.projectionMatrix),S&&X(D,pe),D};function X(F,pe){const de=S;pe===null?de.matrix.copy(F.matrixWorld):(de.matrix.copy(pe.matrixWorld),de.matrix.invert(),de.matrix.multiply(F.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0);const I=de.children;for(let $=0,ee=I.length;$<ee;$++)I[$].updateMatrixWorld(!0);de.projectionMatrix.copy(F.projectionMatrix),de.projectionMatrixInverse.copy(F.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=uc*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(F){l=F,h!==null&&(h.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)};let ue=null;function oe(F,pe){if(u=pe.getViewerPose(c||o),g=pe,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let I=!1;de.length!==D.cameras.length&&(D.cameras.length=0,I=!0);for(let $=0;$<de.length;$++){const ee=de[$];let _e=null;if(p!==null)_e=p.getViewport(ee);else{const Ue=f.getViewSubImage(h,ee);_e=Ue.viewport,$===0&&(e.setRenderTargetTextures(d,Ue.colorTexture,h.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(d))}let ge=P[$];ge===void 0&&(ge=new on,ge.layers.enable($),ge.viewport=new st,P[$]=ge),ge.matrix.fromArray(ee.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(ee.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(_e.x,_e.y,_e.width,_e.height),$===0&&(D.matrix.copy(ge.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),I===!0&&D.cameras.push(ge)}}for(let de=0;de<E.length;de++){const I=x[de],$=E[de];I!==null&&$!==void 0&&$.update(I,pe,c||o)}ue&&ue(F,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),g=null}const Ee=new Np;Ee.setAnimationLoop(oe),this.setAnimationLoop=function(F){ue=F},this.dispose=function(){}}}function tA(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Up(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,E,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===qt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===qt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=e.get(d).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nA(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,x){const S=x.program;i.uniformBlockBinding(E,S)}function c(E,x){let S=r[E.id];S===void 0&&(g(E),S=u(E),r[E.id]=S,E.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(E,T);const w=e.render.frame;s[E.id]!==w&&(h(E),s[E.id]=w)}function u(E){const x=f();E.__bindingPointIndex=x;const S=n.createBuffer(),T=E.__size,w=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const x=r[E.id],S=E.uniforms,T=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,P=S.length;w<P;w++){const D=S[w];if(p(D,w,T)===!0){const M=D.__offset,R=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let re=0;re<R.length;re++){const N=R[re],V=_(N);typeof N=="number"?(D.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,M+j,D.__data)):N.isMatrix3?(D.__data[0]=N.elements[0],D.__data[1]=N.elements[1],D.__data[2]=N.elements[2],D.__data[3]=N.elements[0],D.__data[4]=N.elements[3],D.__data[5]=N.elements[4],D.__data[6]=N.elements[5],D.__data[7]=N.elements[0],D.__data[8]=N.elements[6],D.__data[9]=N.elements[7],D.__data[10]=N.elements[8],D.__data[11]=N.elements[0]):(N.toArray(D.__data,j),j+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,D.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,x,S){const T=E.value;if(S[x]===void 0){if(typeof T=="number")S[x]=T;else{const w=Array.isArray(T)?T:[T],P=[];for(let D=0;D<w.length;D++)P.push(w[D].clone());S[x]=P}return!0}else if(typeof T=="number"){if(S[x]!==T)return S[x]=T,!0}else{const w=Array.isArray(S[x])?S[x]:[S[x]],P=Array.isArray(T)?T:[T];for(let D=0;D<w.length;D++){const M=w[D];if(M.equals(P[D])===!1)return M.copy(P[D]),!0}}return!1}function g(E){const x=E.uniforms;let S=0;const T=16;let w=0;for(let P=0,D=x.length;P<D;P++){const M=x[P],R={boundary:0,storage:0},j=Array.isArray(M.value)?M.value:[M.value];for(let re=0,N=j.length;re<N;re++){const V=j[re],W=_(V);R.boundary+=W.boundary,R.storage+=W.storage}if(M.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,P>0){w=S%T;const re=T-w;w!==0&&re-R.boundary<0&&(S+=T-w,M.__offset=S)}S+=R.storage}return w=S%T,w>0&&(S+=T-w),E.__size=S,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){const x=E.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}function iA(){const n=io("canvas");return n.style.display="block",n}class Hp{constructor(e={}){const{canvas:t=iA(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=He,this.useLegacyLights=!0,this.toneMapping=ui,this.toneMappingExposure=1;const x=this;let S=!1,T=0,w=0,P=null,D=-1,M=null;const R=new st,j=new st;let re=null;const N=new Qe(0);let V=0,W=t.width,Z=t.height,z=1,X=null,ue=null;const oe=new st(0,0,W,Z),Ee=new st(0,0,W,Z);let F=!1;const pe=new tu;let de=!1,I=!1,$=null;const ee=new xt,_e=new ze,ge=new k,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return P===null?z:1}let v=i;function L(A,Y){for(let ie=0;ie<A.length;ie++){const H=A[ie],se=t.getContext(H,Y);if(se!==null)return se}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$c}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",ve,!1),v===null){const Y=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&Y.shift(),v=L(Y,A),v===null)throw L(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}v instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),v.getShaderPrecisionFormat===void 0&&(v.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let O,G,q,ce,fe,Q,he,le,be,b,y,B,te,ae,C,ne,me,K,we,Ce,Pe,Se,ye,Le;function qe(){O=new pT(v),G=new aT(v,O,e),O.init(G),Se=new Jb(v,O,G),q=new jb(v,O,G),ce=new gT(v),fe=new Ib,Q=new Kb(v,O,q,fe,G,Se,ce),he=new cT(x),le=new dT(x),be=new RS(v,G),ye=new sT(v,O,be,G),b=new mT(v,be,ce,ye),y=new ST(v,b,be,ce),we=new MT(v,G,Q),ne=new lT(fe),B=new Ub(x,he,le,O,G,ye,ne),te=new tA(x,fe),ae=new Nb,C=new Gb(O,G),K=new rT(x,he,le,q,y,h,l),me=new Yb(x,y,G),Le=new nA(v,ce,G,q),Ce=new oT(v,O,ce,G),Pe=new _T(v,O,ce,G),ce.programs=B.programs,x.capabilities=G,x.extensions=O,x.properties=fe,x.renderLists=ae,x.shadowMap=me,x.state=q,x.info=ce}qe();const U=new eA(x,v);this.xr=U,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const A=O.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=O.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(W,Z,!1))},this.getSize=function(A){return A.set(W,Z)},this.setSize=function(A,Y,ie=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,Z=Y,t.width=Math.floor(A*z),t.height=Math.floor(Y*z),ie===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(W*z,Z*z).floor()},this.setDrawingBufferSize=function(A,Y,ie){W=A,Z=Y,z=ie,t.width=Math.floor(A*ie),t.height=Math.floor(Y*ie),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,Y,ie,H){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,Y,ie,H),q.viewport(R.copy(oe).multiplyScalar(z).floor())},this.getScissor=function(A){return A.copy(Ee)},this.setScissor=function(A,Y,ie,H){A.isVector4?Ee.set(A.x,A.y,A.z,A.w):Ee.set(A,Y,ie,H),q.scissor(j.copy(Ee).multiplyScalar(z).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(A){q.setScissorTest(F=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){ue=A},this.getClearColor=function(A){return A.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(A=!0,Y=!0,ie=!0){let H=0;if(A){let se=!1;if(P!==null){const Re=P.texture.format;se=Re===Mp||Re===xp||Re===vp}if(se){const Re=P.texture.type,De=Re===Ui||Re===bi||Re===Qc||Re===cr||Re===_p||Re===gp,Ie=K.getClearColor(),Ne=K.getClearAlpha(),Xe=Ie.r,Fe=Ie.g,ke=Ie.b,it=fe.get(P).__webglFramebuffer;De?(p[0]=Xe,p[1]=Fe,p[2]=ke,p[3]=Ne,v.clearBufferuiv(v.COLOR,it,p)):(g[0]=Xe,g[1]=Fe,g[2]=ke,g[3]=Ne,v.clearBufferiv(v.COLOR,it,g))}else H|=v.COLOR_BUFFER_BIT}Y&&(H|=v.DEPTH_BUFFER_BIT),ie&&(H|=v.STENCIL_BUFFER_BIT),v.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ae.dispose(),C.dispose(),fe.dispose(),he.dispose(),le.dispose(),y.dispose(),ye.dispose(),Le.dispose(),B.dispose(),U.dispose(),U.removeEventListener("sessionstart",ct),U.removeEventListener("sessionend",In),$&&($.dispose(),$=null),Nt.stop()};function Te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=ce.autoReset,Y=me.enabled,ie=me.autoUpdate,H=me.needsUpdate,se=me.type;qe(),ce.autoReset=A,me.enabled=Y,me.autoUpdate=ie,me.needsUpdate=H,me.type=se}function ve(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ae(A){const Y=A.target;Y.removeEventListener("dispose",Ae),Je(Y)}function Je(A){lt(A),fe.remove(A)}function lt(A){const Y=fe.get(A).programs;Y!==void 0&&(Y.forEach(function(ie){B.releaseProgram(ie)}),A.isShaderMaterial&&B.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ie,H,se,Re){Y===null&&(Y=Ue);const De=se.isMesh&&se.matrixWorld.determinant()<0,Ie=Wm(A,Y,ie,H,se);q.setMaterial(H,De);let Ne=ie.index,Xe=1;H.wireframe===!0&&(Ne=b.getWireframeAttribute(ie),Xe=2);const Fe=ie.drawRange,ke=ie.attributes.position;let it=Fe.start*Xe,ht=(Fe.start+Fe.count)*Xe;Re!==null&&(it=Math.max(it,Re.start*Xe),ht=Math.min(ht,(Re.start+Re.count)*Xe)),Ne!==null?(it=Math.max(it,0),ht=Math.min(ht,Ne.count)):ke!=null&&(it=Math.max(it,0),ht=Math.min(ht,ke.count));const vn=ht-it;if(vn<0||vn===1/0)return;ye.setup(se,H,Ie,ie,Ne);let Kn,_t=Ce;if(Ne!==null&&(Kn=be.get(Ne),_t=Pe,_t.setIndex(Kn)),se.isMesh)H.wireframe===!0?(q.setLineWidth(H.wireframeLinewidth*Me()),_t.setMode(v.LINES)):_t.setMode(v.TRIANGLES);else if(se.isLine){let je=H.linewidth;je===void 0&&(je=1),q.setLineWidth(je*Me()),se.isLineSegments?_t.setMode(v.LINES):se.isLineLoop?_t.setMode(v.LINE_LOOP):_t.setMode(v.LINE_STRIP)}else se.isPoints?_t.setMode(v.POINTS):se.isSprite&&_t.setMode(v.TRIANGLES);if(se.isInstancedMesh)_t.renderInstances(it,vn,se.count);else if(ie.isInstancedBufferGeometry){const je=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Ba=Math.min(ie.instanceCount,je);_t.renderInstances(it,vn,Ba)}else _t.render(it,vn)},this.compile=function(A,Y){function ie(H,se,Re){H.transparent===!0&&H.side===oi&&H.forceSinglePass===!1?(H.side=qt,H.needsUpdate=!0,xo(H,se,Re),H.side=Fi,H.needsUpdate=!0,xo(H,se,Re),H.side=oi):xo(H,se,Re)}m=C.get(A),m.init(),E.push(m),A.traverseVisible(function(H){H.isLight&&H.layers.test(Y.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(x.useLegacyLights),A.traverse(function(H){const se=H.material;if(se)if(Array.isArray(se))for(let Re=0;Re<se.length;Re++){const De=se[Re];ie(De,A,H)}else ie(se,A,H)}),E.pop(),m=null};let mt=null;function Vi(A){mt&&mt(A)}function ct(){Nt.stop()}function In(){Nt.start()}const Nt=new Np;Nt.setAnimationLoop(Vi),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(A){mt=A,U.setAnimationLoop(A),A===null?Nt.stop():Nt.start()},U.addEventListener("sessionstart",ct),U.addEventListener("sessionend",In),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(Y=U.updateCameraXR(Y)),A.isScene===!0&&A.onBeforeRender(x,A,Y,P),m=C.get(A,E.length),m.init(),E.push(m),ee.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),pe.setFromProjectionMatrix(ee),I=this.localClippingEnabled,de=ne.init(this.clippingPlanes,I),_=ae.get(A,d.length),_.init(),d.push(_),Eu(A,Y,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,ue),de===!0&&ne.beginShadows();const ie=m.state.shadowsArray;if(me.render(ie,A,Y),de===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,K.render(_,A),m.setupLights(x.useLegacyLights),Y.isArrayCamera){const H=Y.cameras;for(let se=0,Re=H.length;se<Re;se++){const De=H[se];yu(_,A,De,De.viewport)}}else yu(_,A,Y);P!==null&&(Q.updateMultisampleRenderTarget(P),Q.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(x,A,Y),ye.resetDefaultState(),D=-1,M=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Eu(A,Y,ie,H){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||pe.intersectsSprite(A)){H&&ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);const De=y.update(A),Ie=A.material;Ie.visible&&_.push(A,De,Ie,ie,ge.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||pe.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==ce.render.frame&&(A.skeleton.update(),A.skeleton.frame=ce.render.frame);const De=y.update(A),Ie=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ge.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ge.copy(De.boundingSphere.center)),ge.applyMatrix4(A.matrixWorld).applyMatrix4(ee)),Array.isArray(Ie)){const Ne=De.groups;for(let Xe=0,Fe=Ne.length;Xe<Fe;Xe++){const ke=Ne[Xe],it=Ie[ke.materialIndex];it&&it.visible&&_.push(A,De,it,ie,ge.z,ke)}}else Ie.visible&&_.push(A,De,Ie,ie,ge.z,null)}}const Re=A.children;for(let De=0,Ie=Re.length;De<Ie;De++)Eu(Re[De],Y,ie,H)}function yu(A,Y,ie,H){const se=A.opaque,Re=A.transmissive,De=A.transparent;m.setupLightsView(ie),de===!0&&ne.setGlobalState(x.clippingPlanes,ie),Re.length>0&&Vm(se,Re,Y,ie),H&&q.viewport(R.copy(H)),se.length>0&&vo(se,Y,ie),Re.length>0&&vo(Re,Y,ie),De.length>0&&vo(De,Y,ie),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Vm(A,Y,ie,H){const se=G.isWebGL2;$===null&&($=new vr(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")?no:Ui,minFilter:to,samples:se&&a===!0?4:0})),x.getDrawingBufferSize(_e),se?$.setSize(_e.x,_e.y):$.setSize(fc(_e.x),fc(_e.y));const Re=x.getRenderTarget();x.setRenderTarget($),x.getClearColor(N),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear();const De=x.toneMapping;x.toneMapping=ui,vo(A,ie,H),Q.updateMultisampleRenderTarget($),Q.updateRenderTargetMipmap($);let Ie=!1;for(let Ne=0,Xe=Y.length;Ne<Xe;Ne++){const Fe=Y[Ne],ke=Fe.object,it=Fe.geometry,ht=Fe.material,vn=Fe.group;if(ht.side===oi&&ke.layers.test(H.layers)){const Kn=ht.side;ht.side=qt,ht.needsUpdate=!0,Tu(ke,ie,H,it,ht,vn),ht.side=Kn,ht.needsUpdate=!0,Ie=!0}}Ie===!0&&(Q.updateMultisampleRenderTarget($),Q.updateRenderTargetMipmap($)),x.setRenderTarget(Re),x.setClearColor(N,V),x.toneMapping=De}function vo(A,Y,ie){const H=Y.isScene===!0?Y.overrideMaterial:null;for(let se=0,Re=A.length;se<Re;se++){const De=A[se],Ie=De.object,Ne=De.geometry,Xe=H===null?De.material:H,Fe=De.group;Ie.layers.test(ie.layers)&&Tu(Ie,Y,ie,Ne,Xe,Fe)}}function Tu(A,Y,ie,H,se,Re){A.onBeforeRender(x,Y,ie,H,se,Re),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),se.onBeforeRender(x,Y,ie,H,A,Re),se.transparent===!0&&se.side===oi&&se.forceSinglePass===!1?(se.side=qt,se.needsUpdate=!0,x.renderBufferDirect(ie,Y,H,se,A,Re),se.side=Fi,se.needsUpdate=!0,x.renderBufferDirect(ie,Y,H,se,A,Re),se.side=oi):x.renderBufferDirect(ie,Y,H,se,A,Re),A.onAfterRender(x,Y,ie,H,se,Re)}function xo(A,Y,ie){Y.isScene!==!0&&(Y=Ue);const H=fe.get(A),se=m.state.lights,Re=m.state.shadowsArray,De=se.state.version,Ie=B.getParameters(A,se.state,Re,Y,ie),Ne=B.getProgramCacheKey(Ie);let Xe=H.programs;H.environment=A.isMeshStandardMaterial?Y.environment:null,H.fog=Y.fog,H.envMap=(A.isMeshStandardMaterial?le:he).get(A.envMap||H.environment),Xe===void 0&&(A.addEventListener("dispose",Ae),Xe=new Map,H.programs=Xe);let Fe=Xe.get(Ne);if(Fe!==void 0){if(H.currentProgram===Fe&&H.lightsStateVersion===De)return bu(A,Ie),Fe}else Ie.uniforms=B.getUniforms(A),A.onBuild(ie,Ie,x),A.onBeforeCompile(Ie,x),Fe=B.acquireProgram(Ie,Ne),Xe.set(Ne,Fe),H.uniforms=Ie.uniforms;const ke=H.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=ne.uniform),bu(A,Ie),H.needsLights=qm(A),H.lightsStateVersion=De,H.needsLights&&(ke.ambientLightColor.value=se.state.ambient,ke.lightProbe.value=se.state.probe,ke.directionalLights.value=se.state.directional,ke.directionalLightShadows.value=se.state.directionalShadow,ke.spotLights.value=se.state.spot,ke.spotLightShadows.value=se.state.spotShadow,ke.rectAreaLights.value=se.state.rectArea,ke.ltc_1.value=se.state.rectAreaLTC1,ke.ltc_2.value=se.state.rectAreaLTC2,ke.pointLights.value=se.state.point,ke.pointLightShadows.value=se.state.pointShadow,ke.hemisphereLights.value=se.state.hemi,ke.directionalShadowMap.value=se.state.directionalShadowMap,ke.directionalShadowMatrix.value=se.state.directionalShadowMatrix,ke.spotShadowMap.value=se.state.spotShadowMap,ke.spotLightMatrix.value=se.state.spotLightMatrix,ke.spotLightMap.value=se.state.spotLightMap,ke.pointShadowMap.value=se.state.pointShadowMap,ke.pointShadowMatrix.value=se.state.pointShadowMatrix);const it=Fe.getUniforms(),ht=ta.seqWithValue(it.seq,ke);return H.currentProgram=Fe,H.uniformsList=ht,Fe}function bu(A,Y){const ie=fe.get(A);ie.outputColorSpace=Y.outputColorSpace,ie.instancing=Y.instancing,ie.skinning=Y.skinning,ie.morphTargets=Y.morphTargets,ie.morphNormals=Y.morphNormals,ie.morphColors=Y.morphColors,ie.morphTargetsCount=Y.morphTargetsCount,ie.numClippingPlanes=Y.numClippingPlanes,ie.numIntersection=Y.numClipIntersection,ie.vertexAlphas=Y.vertexAlphas,ie.vertexTangents=Y.vertexTangents,ie.toneMapping=Y.toneMapping}function Wm(A,Y,ie,H,se){Y.isScene!==!0&&(Y=Ue),Q.resetTextureUnits();const Re=Y.fog,De=H.isMeshStandardMaterial?Y.environment:null,Ie=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Yn,Ne=(H.isMeshStandardMaterial?le:he).get(H.envMap||De),Xe=H.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Fe=!!ie.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ke=!!ie.morphAttributes.position,it=!!ie.morphAttributes.normal,ht=!!ie.morphAttributes.color,vn=H.toneMapped?x.toneMapping:ui,Kn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,_t=Kn!==void 0?Kn.length:0,je=fe.get(H),Ba=m.state.lights;if(de===!0&&(I===!0||A!==M)){const en=A===M&&H.id===D;ne.setState(H,A,en)}let Et=!1;H.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ba.state.version||je.outputColorSpace!==Ie||se.isInstancedMesh&&je.instancing===!1||!se.isInstancedMesh&&je.instancing===!0||se.isSkinnedMesh&&je.skinning===!1||!se.isSkinnedMesh&&je.skinning===!0||je.envMap!==Ne||H.fog===!0&&je.fog!==Re||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ne.numPlanes||je.numIntersection!==ne.numIntersection)||je.vertexAlphas!==Xe||je.vertexTangents!==Fe||je.morphTargets!==ke||je.morphNormals!==it||je.morphColors!==ht||je.toneMapping!==vn||G.isWebGL2===!0&&je.morphTargetsCount!==_t)&&(Et=!0):(Et=!0,je.__version=H.version);let Wi=je.currentProgram;Et===!0&&(Wi=xo(H,Y,se));let Au=!1,Ts=!1,za=!1;const Ft=Wi.getUniforms(),Xi=je.uniforms;if(q.useProgram(Wi.program)&&(Au=!0,Ts=!0,za=!0),H.id!==D&&(D=H.id,Ts=!0),Au||M!==A){if(Ft.setValue(v,"projectionMatrix",A.projectionMatrix),G.logarithmicDepthBuffer&&Ft.setValue(v,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,Ts=!0,za=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const en=Ft.map.cameraPosition;en!==void 0&&en.setValue(v,ge.setFromMatrixPosition(A.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ft.setValue(v,"isOrthographic",A.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||se.isSkinnedMesh)&&Ft.setValue(v,"viewMatrix",A.matrixWorldInverse)}if(se.isSkinnedMesh){Ft.setOptional(v,se,"bindMatrix"),Ft.setOptional(v,se,"bindMatrixInverse");const en=se.skeleton;en&&(G.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Ft.setValue(v,"boneTexture",en.boneTexture,Q),Ft.setValue(v,"boneTextureSize",en.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ka=ie.morphAttributes;if((ka.position!==void 0||ka.normal!==void 0||ka.color!==void 0&&G.isWebGL2===!0)&&we.update(se,ie,Wi),(Ts||je.receiveShadow!==se.receiveShadow)&&(je.receiveShadow=se.receiveShadow,Ft.setValue(v,"receiveShadow",se.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Xi.envMap.value=Ne,Xi.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Ts&&(Ft.setValue(v,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&Xm(Xi,za),Re&&H.fog===!0&&te.refreshFogUniforms(Xi,Re),te.refreshMaterialUniforms(Xi,H,z,Z,$),ta.upload(v,je.uniformsList,Xi,Q)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ta.upload(v,je.uniformsList,Xi,Q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ft.setValue(v,"center",se.center),Ft.setValue(v,"modelViewMatrix",se.modelViewMatrix),Ft.setValue(v,"normalMatrix",se.normalMatrix),Ft.setValue(v,"modelMatrix",se.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const en=H.uniformsGroups;for(let Ha=0,Ym=en.length;Ha<Ym;Ha++)if(G.isWebGL2){const wu=en[Ha];Le.update(wu,Wi),Le.bind(wu,Wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wi}function Xm(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function qm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,Y,ie){fe.get(A.texture).__webglTexture=Y,fe.get(A.depthTexture).__webglTexture=ie;const H=fe.get(A);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=ie===void 0,H.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,Y){const ie=fe.get(A);ie.__webglFramebuffer=Y,ie.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,ie=0){P=A,T=Y,w=ie;let H=!0,se=null,Re=!1,De=!1;if(A){const Ne=fe.get(A);Ne.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(v.FRAMEBUFFER,null),H=!1):Ne.__webglFramebuffer===void 0?Q.setupRenderTarget(A):Ne.__hasExternalTextures&&Q.rebindTextures(A,fe.get(A.texture).__webglTexture,fe.get(A.depthTexture).__webglTexture);const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(De=!0);const Fe=fe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(se=Fe[Y],Re=!0):G.isWebGL2&&A.samples>0&&Q.useMultisampledRTT(A)===!1?se=fe.get(A).__webglMultisampledFramebuffer:se=Fe,R.copy(A.viewport),j.copy(A.scissor),re=A.scissorTest}else R.copy(oe).multiplyScalar(z).floor(),j.copy(Ee).multiplyScalar(z).floor(),re=F;if(q.bindFramebuffer(v.FRAMEBUFFER,se)&&G.drawBuffers&&H&&q.drawBuffers(A,se),q.viewport(R),q.scissor(j),q.setScissorTest(re),Re){const Ne=fe.get(A.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ne.__webglTexture,ie)}else if(De){const Ne=fe.get(A.texture),Xe=Y||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Ne.__webglTexture,ie||0,Xe)}D=-1},this.readRenderTargetPixels=function(A,Y,ie,H,se,Re,De){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=fe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De]),Ie){q.bindFramebuffer(v.FRAMEBUFFER,Ie);try{const Ne=A.texture,Xe=Ne.format,Fe=Ne.type;if(Xe!==wn&&Se.convert(Xe)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Fe===no&&(O.has("EXT_color_buffer_half_float")||G.isWebGL2&&O.has("EXT_color_buffer_float"));if(Fe!==Ui&&Se.convert(Fe)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Ai&&(G.isWebGL2||O.has("OES_texture_float")||O.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-H&&ie>=0&&ie<=A.height-se&&v.readPixels(Y,ie,H,se,Se.convert(Xe),Se.convert(Fe),Re)}finally{const Ne=P!==null?fe.get(P).__webglFramebuffer:null;q.bindFramebuffer(v.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(A,Y,ie=0){const H=Math.pow(2,-ie),se=Math.floor(Y.image.width*H),Re=Math.floor(Y.image.height*H);Q.setTexture2D(Y,0),v.copyTexSubImage2D(v.TEXTURE_2D,ie,0,0,A.x,A.y,se,Re),q.unbindTexture()},this.copyTextureToTexture=function(A,Y,ie,H=0){const se=Y.image.width,Re=Y.image.height,De=Se.convert(ie.format),Ie=Se.convert(ie.type);Q.setTexture2D(ie,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,ie.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,ie.unpackAlignment),Y.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,H,A.x,A.y,se,Re,De,Ie,Y.image.data):Y.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,H,A.x,A.y,Y.mipmaps[0].width,Y.mipmaps[0].height,De,Y.mipmaps[0].data):v.texSubImage2D(v.TEXTURE_2D,H,A.x,A.y,De,Ie,Y.image),H===0&&ie.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,ie,H,se=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=A.max.x-A.min.x+1,De=A.max.y-A.min.y+1,Ie=A.max.z-A.min.z+1,Ne=Se.convert(H.format),Xe=Se.convert(H.type);let Fe;if(H.isData3DTexture)Q.setTexture3D(H,0),Fe=v.TEXTURE_3D;else if(H.isDataArrayTexture)Q.setTexture2DArray(H,0),Fe=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,H.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,H.unpackAlignment);const ke=v.getParameter(v.UNPACK_ROW_LENGTH),it=v.getParameter(v.UNPACK_IMAGE_HEIGHT),ht=v.getParameter(v.UNPACK_SKIP_PIXELS),vn=v.getParameter(v.UNPACK_SKIP_ROWS),Kn=v.getParameter(v.UNPACK_SKIP_IMAGES),_t=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,_t.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,_t.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,A.min.x),v.pixelStorei(v.UNPACK_SKIP_ROWS,A.min.y),v.pixelStorei(v.UNPACK_SKIP_IMAGES,A.min.z),ie.isDataTexture||ie.isData3DTexture?v.texSubImage3D(Fe,se,Y.x,Y.y,Y.z,Re,De,Ie,Ne,Xe,_t.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),v.compressedTexSubImage3D(Fe,se,Y.x,Y.y,Y.z,Re,De,Ie,Ne,_t.data)):v.texSubImage3D(Fe,se,Y.x,Y.y,Y.z,Re,De,Ie,Ne,Xe,_t),v.pixelStorei(v.UNPACK_ROW_LENGTH,ke),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,it),v.pixelStorei(v.UNPACK_SKIP_PIXELS,ht),v.pixelStorei(v.UNPACK_SKIP_ROWS,vn),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Kn),se===0&&H.generateMipmaps&&v.generateMipmap(Fe),q.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Q.setTextureCube(A,0):A.isData3DTexture?Q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Q.setTexture2DArray(A,0):Q.setTexture2D(A,0),q.unbindTexture()},this.resetState=function(){T=0,w=0,P=null,q.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===He?fr:Sp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fr?He:Yn}}class rA extends Hp{}rA.prototype.isWebGL1Renderer=!0;class sA extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ru extends Hi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new k,h=new k,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const E=[],x=d/i;let S=0;d===0&&o===0?S=.5/t:d===i&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const w=T/t;f.x=-e*Math.cos(r+w*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+w*s)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(w+S,1-x),E.push(c++)}u.push(E)}for(let d=0;d<i;d++)for(let E=0;E<t;E++){const x=u[d][E+1],S=u[d][E],T=u[d+1][E],w=u[d+1][E+1];(d!==0||o>0)&&p.push(x,S,w),(d!==i-1||l<Math.PI)&&p.push(S,T,w)}this.setIndex(p),this.setAttribute("position",new Vn(g,3)),this.setAttribute("normal",new Vn(_,3)),this.setAttribute("uv",new Vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oA extends mo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Oh={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class aA{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const lA=new aA;class Gp{constructor(e){this.manager=e!==void 0?e:lA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class cA extends Gp{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Oh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=io("img");function l(){u(),Oh.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class uA extends Gp{constructor(e){super(e)}load(e,t,i,r){const s=new Yt,o=new cA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class fA extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Rl=new xt,Nh=new k,Fh=new k;class hA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tu,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nh),Fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fh),t.updateMatrixWorld(),Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Bh=new xt,Ls=new k,Cl=new k;class dA extends hA{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ls.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ls),Cl.copy(i.position),Cl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Cl),i.updateMatrixWorld(),r.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Bh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh)}}class pA extends fA{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new dA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);const kh={type:"change"},Pl={type:"start"},Hh={type:"end"};class mA extends Er{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ar.ROTATE,MIDDLE:Ar.DOLLY,RIGHT:Ar.PAN},this.touches={ONE:wr.ROTATE,TWO:wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",he),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",he),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(kh),i.update(),s=r.NONE},this.update=function(){const C=new k,ne=new xr().setFromUnitVectors(e.up,new k(0,1,0)),me=ne.clone().invert(),K=new k,we=new xr,Ce=new k,Pe=2*Math.PI;return function(){const ye=i.object.position;C.copy(ye).sub(i.target),C.applyQuaternion(ne),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&M(P()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Le=i.minAzimuthAngle,qe=i.maxAzimuthAngle;return isFinite(Le)&&isFinite(qe)&&(Le<-Math.PI?Le+=Pe:Le>Math.PI&&(Le-=Pe),qe<-Math.PI?qe+=Pe:qe>Math.PI&&(qe-=Pe),Le<=qe?a.theta=Math.max(Le,Math.min(qe,a.theta)):a.theta=a.theta>(Le+qe)/2?Math.max(Le,a.theta):Math.min(qe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),C.setFromSpherical(a),C.applyQuaternion(me),ye.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||K.distanceToSquared(i.object.position)>o||8*(1-we.dot(i.object.quaternion))>o||Ce.distanceToSquared(i.target)>0?(i.dispatchEvent(kh),K.copy(i.object.position),we.copy(i.object.quaternion),Ce.copy(i.target),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",b),i.domElement.removeEventListener("pointerdown",O),i.domElement.removeEventListener("pointercancel",q),i.domElement.removeEventListener("wheel",Q),i.domElement.removeEventListener("pointermove",G),i.domElement.removeEventListener("pointerup",q),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",he),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new zh,l=new zh;let c=1;const u=new k;let f=!1;const h=new ze,p=new ze,g=new ze,_=new ze,m=new ze,d=new ze,E=new ze,x=new ze,S=new ze,T=[],w={};function P(){return 2*Math.PI/60/60*i.autoRotateSpeed}function D(){return Math.pow(.95,i.zoomSpeed)}function M(C){l.theta-=C}function R(C){l.phi-=C}const j=function(){const C=new k;return function(me,K){C.setFromMatrixColumn(K,0),C.multiplyScalar(-me),u.add(C)}}(),re=function(){const C=new k;return function(me,K){i.screenSpacePanning===!0?C.setFromMatrixColumn(K,1):(C.setFromMatrixColumn(K,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(me),u.add(C)}}(),N=function(){const C=new k;return function(me,K){const we=i.domElement;if(i.object.isPerspectiveCamera){const Ce=i.object.position;C.copy(Ce).sub(i.target);let Pe=C.length();Pe*=Math.tan(i.object.fov/2*Math.PI/180),j(2*me*Pe/we.clientHeight,i.object.matrix),re(2*K*Pe/we.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(j(me*(i.object.right-i.object.left)/i.object.zoom/we.clientWidth,i.object.matrix),re(K*(i.object.top-i.object.bottom)/i.object.zoom/we.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function V(C){i.object.isPerspectiveCamera?c/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(C){i.object.isPerspectiveCamera?c*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(C){h.set(C.clientX,C.clientY)}function z(C){E.set(C.clientX,C.clientY)}function X(C){_.set(C.clientX,C.clientY)}function ue(C){p.set(C.clientX,C.clientY),g.subVectors(p,h).multiplyScalar(i.rotateSpeed);const ne=i.domElement;M(2*Math.PI*g.x/ne.clientHeight),R(2*Math.PI*g.y/ne.clientHeight),h.copy(p),i.update()}function oe(C){x.set(C.clientX,C.clientY),S.subVectors(x,E),S.y>0?V(D()):S.y<0&&W(D()),E.copy(x),i.update()}function Ee(C){m.set(C.clientX,C.clientY),d.subVectors(m,_).multiplyScalar(i.panSpeed),N(d.x,d.y),_.copy(m),i.update()}function F(C){C.deltaY<0?W(D()):C.deltaY>0&&V(D()),i.update()}function pe(C){let ne=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),ne=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),ne=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?M(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),ne=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?M(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),ne=!0;break}ne&&(C.preventDefault(),i.update())}function de(){if(T.length===1)h.set(T[0].pageX,T[0].pageY);else{const C=.5*(T[0].pageX+T[1].pageX),ne=.5*(T[0].pageY+T[1].pageY);h.set(C,ne)}}function I(){if(T.length===1)_.set(T[0].pageX,T[0].pageY);else{const C=.5*(T[0].pageX+T[1].pageX),ne=.5*(T[0].pageY+T[1].pageY);_.set(C,ne)}}function $(){const C=T[0].pageX-T[1].pageX,ne=T[0].pageY-T[1].pageY,me=Math.sqrt(C*C+ne*ne);E.set(0,me)}function ee(){i.enableZoom&&$(),i.enablePan&&I()}function _e(){i.enableZoom&&$(),i.enableRotate&&de()}function ge(C){if(T.length==1)p.set(C.pageX,C.pageY);else{const me=ae(C),K=.5*(C.pageX+me.x),we=.5*(C.pageY+me.y);p.set(K,we)}g.subVectors(p,h).multiplyScalar(i.rotateSpeed);const ne=i.domElement;M(2*Math.PI*g.x/ne.clientHeight),R(2*Math.PI*g.y/ne.clientHeight),h.copy(p)}function Ue(C){if(T.length===1)m.set(C.pageX,C.pageY);else{const ne=ae(C),me=.5*(C.pageX+ne.x),K=.5*(C.pageY+ne.y);m.set(me,K)}d.subVectors(m,_).multiplyScalar(i.panSpeed),N(d.x,d.y),_.copy(m)}function Me(C){const ne=ae(C),me=C.pageX-ne.x,K=C.pageY-ne.y,we=Math.sqrt(me*me+K*K);x.set(0,we),S.set(0,Math.pow(x.y/E.y,i.zoomSpeed)),V(S.y),E.copy(x)}function v(C){i.enableZoom&&Me(C),i.enablePan&&Ue(C)}function L(C){i.enableZoom&&Me(C),i.enableRotate&&ge(C)}function O(C){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",G),i.domElement.addEventListener("pointerup",q)),y(C),C.pointerType==="touch"?le(C):ce(C))}function G(C){i.enabled!==!1&&(C.pointerType==="touch"?be(C):fe(C))}function q(C){B(C),T.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",G),i.domElement.removeEventListener("pointerup",q)),i.dispatchEvent(Hh),s=r.NONE}function ce(C){let ne;switch(C.button){case 0:ne=i.mouseButtons.LEFT;break;case 1:ne=i.mouseButtons.MIDDLE;break;case 2:ne=i.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case Ar.DOLLY:if(i.enableZoom===!1)return;z(C),s=r.DOLLY;break;case Ar.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;X(C),s=r.PAN}else{if(i.enableRotate===!1)return;Z(C),s=r.ROTATE}break;case Ar.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;Z(C),s=r.ROTATE}else{if(i.enablePan===!1)return;X(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Pl)}function fe(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ue(C);break;case r.DOLLY:if(i.enableZoom===!1)return;oe(C);break;case r.PAN:if(i.enablePan===!1)return;Ee(C);break}}function Q(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Pl),F(C),i.dispatchEvent(Hh))}function he(C){i.enabled===!1||i.enablePan===!1||pe(C)}function le(C){switch(te(C),T.length){case 1:switch(i.touches.ONE){case wr.ROTATE:if(i.enableRotate===!1)return;de(),s=r.TOUCH_ROTATE;break;case wr.PAN:if(i.enablePan===!1)return;I(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case wr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ee(),s=r.TOUCH_DOLLY_PAN;break;case wr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;_e(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Pl)}function be(C){switch(te(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ge(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ue(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;v(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;L(C),i.update();break;default:s=r.NONE}}function b(C){i.enabled!==!1&&C.preventDefault()}function y(C){T.push(C)}function B(C){delete w[C.pointerId];for(let ne=0;ne<T.length;ne++)if(T[ne].pointerId==C.pointerId){T.splice(ne,1);return}}function te(C){let ne=w[C.pointerId];ne===void 0&&(ne=new ze,w[C.pointerId]=ne),ne.set(C.pageX,C.pageY)}function ae(C){const ne=C.pointerId===T[0].pointerId?T[1]:T[0];return w[ne.pointerId]}i.domElement.addEventListener("contextmenu",b),i.domElement.addEventListener("pointerdown",O),i.domElement.addEventListener("pointercancel",q),i.domElement.addEventListener("wheel",Q,{passive:!1}),this.update()}}function ri(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Vp(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ps={duration:.5,overwrite:!1,delay:0},su,It,ut,pn=1e8,nt=1/pn,dc=Math.PI*2,_A=dc/4,gA=0,Wp=Math.sqrt,vA=Math.cos,xA=Math.sin,bt=function(e){return typeof e=="string"},ft=function(e){return typeof e=="function"},hi=function(e){return typeof e=="number"},ou=function(e){return typeof e>"u"},jn=function(e){return typeof e=="object"},Kt=function(e){return e!==!1},au=function(){return typeof window<"u"},jo=function(e){return ft(e)||bt(e)},Xp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ot=Array.isArray,pc=/(?:-?\.?\d|\.)+/gi,qp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Kr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ll=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yp=/[+-]=-?[.\d]+/,jp=/[^,'"\[\]\s]+/gi,MA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot,hn,mc,lu,cn={},ha={},Kp,Jp=function(e){return(ha=Sr(e,cn))&&Qt},cu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},da=function(e,t){return!t&&console.warn(e)},Zp=function(e,t){return e&&(cn[e]=t)&&ha&&(ha[e]=t)||cn},ro=function(){return 0},SA={suppressEvents:!0,isStart:!0,kill:!1},na={suppressEvents:!0,kill:!1},EA={suppressEvents:!0},uu={},Ii=[],_c={},$p,sn={},Dl={},Gh=30,ia=[],fu="",hu=function(e){var t=e[0],i,r;if(jn(t)||ft(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=ia.length;r--&&!ia[r].targetTest(t););i=ia[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Em(e[r],i)))||e.splice(r,1);return e},dr=function(e){return e._gsap||hu(mn(e))[0]._gsap},Qp=function(e,t,i){return(i=e[t])&&ft(i)?e[t]():ou(i)&&e.getAttribute&&e.getAttribute(t)||i},Jt=function(e,t){return(e=e.split(",")).forEach(t)||e},dt=function(e){return Math.round(e*1e5)/1e5||0},At=function(e){return Math.round(e*1e7)/1e7||0},ns=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},yA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},pa=function(){var e=Ii.length,t=Ii.slice(0),i,r;for(_c={},Ii.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},em=function(e,t,i,r){Ii.length&&!It&&pa(),e.render(t,i,r||It&&t<0&&(e._initted||e._startAt)),Ii.length&&!It&&pa()},tm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(jp).length<2?t:bt(e)?e.trim():e},nm=function(e){return e},gn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},TA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Sr=function(e,t){for(var i in t)e[i]=t[i];return e},Vh=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=jn(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},ma=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Xs=function(e){var t=e.parent||ot,i=e.keyframes?TA(Ot(e.keyframes)):gn;if(Kt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},bA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},im=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Oa=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Bi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},pr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},AA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},gc=function(e,t,i,r){return e._startAt&&(It?e._startAt.revert(na):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},wA=function n(e){return!e||e._ts&&n(e.parent)},Wh=function(e){return e._repeat?ms(e._tTime,e=e.duration()+e._rDelay)*e:0},ms=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},_a=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Na=function(e){return e._end=At(e._start+(e._tDur/Math.abs(e._ts||e._rts||nt)||0))},Fa=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=At(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Na(e),i._dirty||pr(i,e)),e},rm=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=_a(e.rawTime(),t),(!t._dur||go(0,t.totalDuration(),i)-t._tTime>nt)&&t.render(i,!0)),pr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-nt}},kn=function(e,t,i,r){return t.parent&&Bi(t),t._start=At((hi(i)?i:i||e!==ot?fn(e,i,t):e._time)+t._delay),t._end=At(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),im(e,t,"_first","_last",e._sort?"_start":0),vc(t)||(e._recent=t),r||rm(e,t),e._ts<0&&Fa(e,e._tTime),e},sm=function(e,t){return(cn.ScrollTrigger||cu("scrollTrigger",t))&&cn.ScrollTrigger.create(t,e)},om=function(e,t,i,r,s){if(pu(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!It&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$p!==an.frame)return Ii.push(e),e._lazy=[s,r],1},RA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},vc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},CA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&RA(e)&&!(!e._initted&&vc(e))||(e._ts<0||e._dp._ts<0)&&!vc(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=go(0,e._tDur,t),u=ms(l,a),e._yoyo&&u&1&&(o=1-o),u!==ms(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||It||r||e._zTime===nt||!t&&e._zTime){if(!e._initted&&om(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?nt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&gc(e,t,i,!0),e._onUpdate&&!i&&_n(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&_n(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Bi(e,1),!i&&!It&&(_n(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},PA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},_s=function(e,t,i,r){var s=e._repeat,o=At(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:At(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Fa(e,e._tTime=e._tDur*a),e.parent&&Na(e),i||pr(e.parent,e),e},Xh=function(e){return e instanceof Gt?pr(e):_s(e,e._dur)},LA={_start:0,endTime:ro,totalDuration:ro},fn=function n(e,t,i){var r=e.labels,s=e._recent||LA,o=e.duration()>=pn?s.endTime(!1):e._dur,a,l,c;return bt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Ot(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},qs=function(e,t,i){var r=hi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Kt(l.vars.inherit)&&l.parent;o.immediateRender=Kt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new vt(t[0],o,t[s+1])},Gi=function(e,t){return e||e===0?t(e):t},go=function(e,t,i){return i<e?e:i>t?t:i},Dt=function(e,t){return!bt(e)||!(t=MA.exec(e))?"":t[1]},DA=function(e,t,i){return Gi(i,function(r){return go(e,t,r)})},xc=[].slice,am=function(e,t){return e&&jn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&jn(e[0]))&&!e.nodeType&&e!==hn},UA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return bt(r)&&!t||am(r,1)?(s=i).push.apply(s,mn(r)):i.push(r)})||i},mn=function(e,t,i){return ut&&!t&&ut.selector?ut.selector(e):bt(e)&&!i&&(mc||!gs())?xc.call((t||lu).querySelectorAll(e),0):Ot(e)?UA(e,i):am(e)?xc.call(e,0):e?[e]:[]},Mc=function(e){return e=mn(e)[0]||da("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return mn(t,i.querySelectorAll?i:i===e?da("Invalid scope")||lu.createElement("div"):e)}},lm=function(e){return e.sort(function(){return .5-Math.random()})},cm=function(e){if(ft(e))return e;var t=jn(e)?e:{each:e},i=mr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return bt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,p,g){var _=(g||t).length,m=o[_],d,E,x,S,T,w,P,D,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,pn])[1],!M){for(P=-pn;P<(P=g[M++].getBoundingClientRect().left)&&M<_;);M--}for(m=o[_]=[],d=l?Math.min(M,_)*u-.5:r%M,E=M===pn?0:l?_*f/M-.5:r/M|0,P=0,D=pn,w=0;w<_;w++)x=w%M-d,S=E-(w/M|0),m[w]=T=c?Math.abs(c==="y"?S:x):Wp(x*x+S*S),T>P&&(P=T),T<D&&(D=T);r==="random"&&lm(m),m.max=P-D,m.min=D,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Dt(t.amount||t.each)||0,i=i&&_<0?xm(i):i}return _=(m[h]-m.min)/m.max||0,At(m.b+(i?i(_):_)*m.v)+m.u}},Sc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=At(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(hi(i)?0:Dt(i))}},um=function(e,t){var i=Ot(e),r,s;return!i&&jn(e)&&(r=i=e.radius||pn,e.values?(e=mn(e.values),(s=!hi(e[0]))&&(r*=r)):e=Sc(e.increment)),Gi(t,i?ft(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=pn,u=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||hi(o)?u:u+Dt(o)}:Sc(e))},fm=function(e,t,i,r){return Gi(Ot(e)?!t:i===!0?!!(i=0):!r,function(){return Ot(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},IA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},OA=function(e,t){return function(i){return e(parseFloat(i))+(t||Dt(i))}},NA=function(e,t,i){return dm(e,t,0,1,i)},hm=function(e,t,i){return Gi(i,function(r){return e[~~t(r)]})},FA=function n(e,t,i){var r=t-e;return Ot(e)?hm(e,n(0,e.length),t):Gi(i,function(s){return(r+(s-e)%r)%r+e})},BA=function n(e,t,i){var r=t-e,s=r*2;return Ot(e)?hm(e,n(0,e.length-1),t):Gi(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},so=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?jp:pc),i+=e.substr(t,r-t)+fm(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},dm=function(e,t,i,r,s){var o=t-e,a=r-i;return Gi(s,function(l){return i+((l-e)/o*a||0)})},zA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=bt(e),a={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Ot(e)&&!Ot(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},i=t}else r||(e=Sr(Ot(e)?[]:{},e));if(!u){for(l in t)du.call(a,e,l,"get",t[l]);s=function(g){return gu(g,a)||(o?e.p:e)}}}return Gi(i,s)},qh=function(e,t,i){var r=e.labels,s=pn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},_n=function(e,t,i){var r=e.vars,s=r[t],o=ut,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Ii.length&&pa(),a&&(ut=a),u=l?s.apply(c,l):s.call(c),ut=o,u},Ns=function(e){return Bi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!It),e.progress()<1&&_n(e,"onInterrupt"),e},Jr,pm=[],mm=function(e){if(au()&&e){e=!e.name&&e.default||e;var t=e.name,i=ft(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:ro,render:gu,add:du,kill:tw,modifier:ew,rawVars:0},o={targetTest:0,get:0,getSetter:_u,aliases:{},register:0};if(gs(),e!==r){if(sn[t])return;gn(r,gn(ma(e,s),o)),Sr(r.prototype,Sr(s,ma(e,o))),sn[r.prop=t]=r,e.targetTest&&(ia.push(r),uu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zp(t,r),e.register&&e.register(Qt,r,Zt)}else e&&pm.push(e)},et=255,Fs={aqua:[0,et,et],lime:[0,et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,et],navy:[0,0,128],white:[et,et,et],olive:[128,128,0],yellow:[et,et,0],orange:[et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[et,0,0],pink:[et,192,203],cyan:[0,et,et],transparent:[et,et,et,0]},Ul=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*et+.5|0},_m=function(e,t,i){var r=e?hi(e)?[e>>16,e>>8&et,e&et]:0:Fs.black,s,o,a,l,c,u,f,h,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Fs[e])r=Fs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&et,r&et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&et,e&et]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(pc),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Ul(l+1/3,s,o),r[1]=Ul(l,s,o),r[2]=Ul(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(qp),i&&r.length<4&&(r[3]=1),r}else r=e.match(pc)||Fs.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/et,o=r[1]/et,a=r[2]/et,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},gm=function(e){var t=[],i=[],r=-1;return e.split(Oi).forEach(function(s){var o=s.match(Kr)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Yh=function(e,t,i){var r="",s=(e+r).match(Oi),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=_m(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=gm(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Oi,"1").split(Kr),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Oi),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Oi=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Fs)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),kA=/hsl[a]?\(/,vm=function(e){var t=e.join(" "),i;if(Oi.lastIndex=0,Oi.test(t))return i=kA.test(t),e[1]=Yh(e[1],i),e[0]=Yh(e[0],i,gm(e[1])),!0},oo,an=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,h,p,g=function _(m){var d=n()-r,E=m===!0,x,S,T,w;if(d>e&&(i+=d-t),r+=d,T=r-i,x=T-o,(x>0||E)&&(w=++f.frame,h=T-f.time*1e3,f.time=T=T/1e3,o+=x+(x>=s?4:s-x),S=1),E||(l=c(_)),S)for(p=0;p<a.length;p++)a[p](T,h,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Kp&&(!mc&&au()&&(hn=mc=window,lu=hn.document||{},cn.gsap=Qt,(hn.gsapVersions||(hn.gsapVersions=[])).push(Qt.version),Jp(ha||hn.GreenSockGlobals||!hn.gsap&&hn||{}),u=hn.requestAnimationFrame,pm.forEach(mm)),l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},oo=1,g(2))},sleep:function(){(u?hn.cancelAnimationFrame:clearTimeout)(l),oo=0,c=ro},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,d,E){var x=d?function(S,T,w,P){m(S,T,w,P),f.remove(x)}:m;return f.remove(m),a[E?"unshift":"push"](x),gs(),x},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},f}(),gs=function(){return!oo&&an.wake()},Ye={},HA=/^[\d.\-M][\d.\-,\s]/,GA=/["']/g,VA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(GA,"").trim():+c,r=l.substr(a+1).trim();return t},WA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},XA=function(e){var t=(e+"").split("("),i=Ye[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[VA(t[1])]:WA(e).split(",").map(tm)):Ye._CE&&HA.test(e)?Ye._CE("",e):i},xm=function(e){return function(t){return 1-e(1-t)}},Mm=function n(e,t){for(var i=e._first,r;i;)i instanceof Gt?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},mr=function(e,t){return e&&(ft(e)?e:Ye[e]||XA(e))||t},yr=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Jt(e,function(a){Ye[a]=cn[a]=s,Ye[o=a.toLowerCase()]=i;for(var l in s)Ye[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ye[a+"."+l]=s[l]}),s},Sm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Il=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/dc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*xA((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Sm(a);return s=dc/s,l.config=function(c,u){return n(e,c,u)},l},Ol=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Sm(i);return r.config=function(s){return n(e,s)},r};Jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;yr(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ye.Linear.easeNone=Ye.none=Ye.Linear.easeIn;yr("Elastic",Il("in"),Il("out"),Il());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};yr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);yr("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});yr("Circ",function(n){return-(Wp(1-n*n)-1)});yr("Sine",function(n){return n===1?1:-vA(n*_A)+1});yr("Back",Ol("in"),Ol("out"),Ol());Ye.SteppedEase=Ye.steps=cn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-nt;return function(a){return((r*go(0,o,a)|0)+s)*i}}};ps.ease=Ye["quad.out"];Jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return fu+=n+","+n+"Params,"});var Em=function(e,t){this.id=gA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Qp,this.set=t?t.getSetter:_u},ao=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,_s(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),oo||an.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,_s(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(gs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fa(this,i),!s._dp||s.parent||rm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&kn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===nt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),em(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Wh(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Wh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?ms(this._tTime,s)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-nt?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?_a(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-nt?0:this._rts,this.totalTime(go(-Math.abs(this._delay),this._tDur,r),!0),Na(this),AA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(gs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==nt&&(this._tTime-=nt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&kn(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Kt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_a(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=EA);var r=It;return It=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),It=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Xh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Xh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(fn(this,i),Kt(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Kt(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-nt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-nt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=ft(i)?i:nm,a=function(){var c=r.then;r.then=null,ft(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Ns(this)},n}();gn(ao.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-nt,_prom:0,_ps:!1,_rts:1});var Gt=function(n){Vp(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Kt(i.sortChildren),ot&&kn(i.parent||ot,ri(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&sm(ri(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return qs(0,arguments,this),this},t.from=function(r,s,o){return qs(1,arguments,this),this},t.fromTo=function(r,s,o,a){return qs(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Xs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new vt(r,s,fn(this,o),1),this},t.call=function(r,s,o){return kn(this,vt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new vt(r,o,fn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Xs(o).immediateRender=Kt(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,Xs(a).immediateRender=Kt(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:At(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,p,g,_,m,d,E,x,S,T,w,P;if(this!==ot&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,S=this._start,x=this._ts,d=!x,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=At(u%m),u===l?(_=this._repeat,h=c):(_=~~(u/m),_&&_===u/m&&(h=c,_--),h>c&&(h=c)),T=ms(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),w&&_&1&&(h=c-h,P=1),_!==T&&!this._lock){var D=w&&T&1,M=D===(w&&_&1);if(_<T&&(D=!D),a=D?0:c,this._lock=1,this.render(a||(P?0:At(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&_n(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Mm(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=PA(this,At(a),At(h)),E&&(u-=h-(h=E._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(_n(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&E!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!d){E=0,g&&(u+=this._zTime=-nt);break}}p=g}else{p=this._last;for(var R=r<0?r:h;p;){if(g=p._prev,(p._act||R<=p._end)&&p._ts&&E!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(R-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(R-p._start)*p._ts,s,o||It&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!d){E=0,g&&(u+=this._zTime=R?-nt:nt);break}}p=g}}if(E&&!s&&(this.pause(),E.render(h>=a?0:-nt)._zTime=h>=a?1:-1,this._ts))return this._start=S,Na(this),this.render(r,s,o);this._onUpdate&&!s&&_n(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Bi(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(_n(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(hi(s)||(s=fn(this,s,r)),!(r instanceof ao)){if(Ot(r))return r.forEach(function(a){return o.add(a,s)}),this;if(bt(r))return this.addLabel(r,s);if(ft(r))r=vt.delayedCall(0,r);else return this}return this!==r?kn(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-pn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof vt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return bt(r)?this.removeLabel(r):ft(r)?this.killTweensOf(r):(Oa(this,r),r===this._recent&&(this._recent=this._last),pr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=At(an.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=fn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=vt.delayedCall(0,s||ro,o);return a.data="isPause",this._hasPause=1,kn(this,a,fn(this,r))},t.removePause=function(r){var s=this._first;for(r=fn(this,r);s;)s._start===r&&s.data==="isPause"&&Bi(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)wi!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=mn(r),l=this._first,c=hi(s),u;l;)l instanceof vt?yA(l._targets,a)&&(c?(!wi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=fn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=vt.to(o,gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||nt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&_s(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,gn({startAt:{time:fn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),qh(this,fn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),qh(this,fn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+nt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return pr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),pr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=pn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,kn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;_s(o,o===ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(ot._ts&&(em(ot,_a(r,ot)),$p=an.frame),an.frame>=Gh){Gh+=ln.autoSleep||120;var s=ot._first;if((!s||!s._ts)&&ln.autoSleep&&an._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||an.sleep()}}},e}(ao);gn(Gt.prototype,{_lock:0,_hasPause:0,_forcing:0});var qA=function(e,t,i,r,s,o,a){var l=new Zt(this._pt,e,t,0,1,Rm,null,s),c=0,u=0,f,h,p,g,_,m,d,E;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=so(r)),o&&(E=[i,r],o(E,e,t),i=E[0],r=E[1]),h=i.match(Ll)||[];f=Ll.exec(r);)g=f[0],_=r.substring(c,f.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ns(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Ll.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Yp.test(r)||d)&&(l.e=0),this._pt=l,l},du=function(e,t,i,r,s,o,a,l,c,u){ft(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:ft(f)?c?e[t.indexOf("set")||!ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=ft(f)?c?ZA:Am:mu,g;if(bt(r)&&(~r.indexOf("random(")&&(r=so(r)),r.charAt(1)==="="&&(g=ns(h,r)+(Dt(h)||0),(g||g===0)&&(r=g))),!u||h!==r||Ec)return!isNaN(h*r)&&r!==""?(g=new Zt(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?QA:wm,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&cu(t,r),qA.call(this,e,t,h,r,p,l||ln.stringFilter,c))},YA=function(e,t,i,r,s){if(ft(e)&&(e=Ys(e,s,t,i,r)),!jn(e)||e.style&&e.nodeType||Ot(e)||Xp(e))return bt(e)?Ys(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Ys(e[a],s,t,i,r);return o},ym=function(e,t,i,r,s,o){var a,l,c,u;if(sn[e]&&(a=new sn[e]).init(s,a.rawVars?t[e]:YA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Zt(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Jr))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},wi,Ec,pu=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,f=r.callbackScope,h=r.runBackwards,p=r.yoyoEase,g=r.keyframes,_=r.autoRevert,m=e._dur,d=e._startAt,E=e._targets,x=e.parent,S=x&&x.data==="nested"?x.vars.targets:E,T=e._overwrite==="auto"&&!su,w=e.timeline,P,D,M,R,j,re,N,V,W,Z,z,X,ue;if(w&&(!g||!s)&&(s="none"),e._ease=mr(s,ps.ease),e._yEase=p?xm(mr(p===!0?s:p,ps.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!w&&!!r.runBackwards,!w||g&&!r.stagger){if(V=E[0]?dr(E[0]).harness:0,X=V&&r[V.prop],P=ma(r,uu),d&&(d._zTime<0&&d.progress(1),t<0&&h&&a&&!_?d.render(-1,!0):d.revert(h&&m?na:SA),d._lazy=0),o){if(Bi(e._startAt=vt.set(E,gn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!d&&Kt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It||!a&&!_)&&e._startAt.revert(na),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&m&&!d){if(t&&(a=!1),M=gn({overwrite:!1,data:"isFromStart",lazy:a&&!d&&Kt(l),immediateRender:a,stagger:0,parent:x},P),X&&(M[V.prop]=X),Bi(e._startAt=vt.set(E,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It?e._startAt.revert(na):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,nt,nt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Kt(l)||l&&!m,D=0;D<E.length;D++){if(j=E[D],N=j._gsap||hu(E)[D]._gsap,e._ptLookup[D]=Z={},_c[N.id]&&Ii.length&&pa(),z=S===E?D:S.indexOf(j),V&&(W=new V).init(j,X||P,e,z,S)!==!1&&(e._pt=R=new Zt(e._pt,j,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(oe){Z[oe]=R}),W.priority&&(re=1)),!V||X)for(M in P)sn[M]&&(W=ym(M,P,e,z,j,S))?W.priority&&(re=1):Z[M]=R=du.call(e,j,M,"get",P[M],z,S,0,r.stringFilter);e._op&&e._op[D]&&e.kill(j,e._op[D]),T&&e._pt&&(wi=e,ot.killTweensOf(j,Z,e.globalTime(t)),ue=!e.parent,wi=0),e._pt&&l&&(_c[N.id]=1)}re&&Cm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ue,g&&t<=0&&w.render(pn,!0,!0)},jA=function(e,t,i,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Ec=1,e.vars[t]="+=0",pu(e,a),Ec=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,u.e&&(u.e=dt(i)+Dt(u.e)),u.b&&(u.b=c.s+Dt(u.b))},KA=function(e,t){var i=e[0]?dr(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Sr({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},JA=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Ot(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ys=function(e,t,i,r,s){return ft(e)?e.call(t,i,r,s):bt(e)&&~e.indexOf("random(")?so(e):e},Tm=fu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",bm={};Jt(Tm+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return bm[n]=1});var vt=function(n){Vp(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Xs(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,E=r.parent||ot,x=(Ot(i)||Xp(i)?hi(i[0]):"length"in r)?[i]:mn(i),S,T,w,P,D,M,R,j;if(a._targets=x.length?hu(x):da("GSAP target "+i+" not found. https://greensock.com",!ln.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||h||jo(c)||jo(u)){if(r=a.vars,S=a.timeline=new Gt({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:x}),S.kill(),S.parent=S._dp=ri(a),S._start=0,h||jo(c)||jo(u)){if(P=x.length,R=h&&cm(h),jn(h))for(D in h)~Tm.indexOf(D)&&(j||(j={}),j[D]=h[D]);for(T=0;T<P;T++)w=ma(r,bm),w.stagger=0,d&&(w.yoyoEase=d),j&&Sr(w,j),M=x[T],w.duration=+Ys(c,ri(a),T,M,x),w.delay=(+Ys(u,ri(a),T,M,x)||0)-a._delay,!h&&P===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),S.to(M,w,R?R(T,M,x):0),S._ease=Ye.none;S.duration()?c=u=0:a.timeline=0}else if(g){Xs(gn(S.vars.defaults,{ease:"none"})),S._ease=mr(g.ease||r.ease||"none");var re=0,N,V,W;if(Ot(g))g.forEach(function(Z){return S.to(x,Z,">")}),S.duration();else{w={};for(D in g)D==="ease"||D==="easeEach"||JA(D,g[D],w,g.easeEach);for(D in w)for(N=w[D].sort(function(Z,z){return Z.t-z.t}),re=0,T=0;T<N.length;T++)V=N[T],W={ease:V.e,duration:(V.t-(T?N[T-1].t:0))/100*c},W[D]=V.v,S.to(x,W,re),re+=W.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return p===!0&&!su&&(wi=ri(a),ot.killTweensOf(x),wi=0),kn(E,ri(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===At(E._time)&&Kt(f)&&wA(ri(a))&&E.data!=="nested")&&(a._tTime=-nt,a.render(Math.max(0,-u)||0)),m&&sm(ri(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-nt&&!u?l:r<nt?0:r,h,p,g,_,m,d,E,x,S;if(!c)CA(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=At(f%_),f===l?(g=this._repeat,h=c):(g=~~(f/_),g&&g===f/_&&(h=c,g--),h>c&&(h=c)),d=this._yoyo&&g&1,d&&(S=this._yEase,h=c-h),m=ms(this._tTime,_),h===a&&!o&&this._initted)return this._tTime=f,this;g!==m&&(x&&this._yEase&&Mm(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=o=1,this.render(At(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(om(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(S||this._ease)(h/c),this._from&&(this.ratio=E=1-E),h&&!a&&!s&&!g&&(_n(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(E,p.d),p=p._next;x&&x.render(r<0?r:!h&&d?-nt:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&gc(this,r,s,o),_n(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&_n(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&gc(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Bi(this,1),!s&&!(u&&!a)&&(f||a||d)&&(_n(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){oo||an.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||pu(this,l),c=this._ease(l/this._dur),jA(this,r,s,o,a,c,l)?this.resetTo(r,s,o,a):(Fa(this,0),this.parent||im(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ns(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,wi&&wi.vars.overwrite!==!0)._first||Ns(this),this.parent&&o!==this.timeline.totalDuration()&&_s(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?mn(r):a,c=this._ptLookup,u=this._pt,f,h,p,g,_,m,d;if((!s||s==="all")&&bA(a,l))return s==="all"&&(this._pt=0),Ns(this);for(f=this._op=this._op||[],s!=="all"&&(bt(s)&&(_={},Jt(s,function(E){return _[E]=1}),s=_),s=KA(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=c[d],s==="all"?(f[d]=s,g=h,p={}):(p=f[d]=f[d]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Oa(this,m,"_pt"),delete h[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&Ns(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return qs(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return qs(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return ot.killTweensOf(r,s,o)},e}(ao);gn(vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jt("staggerTo,staggerFrom,staggerFromTo",function(n){vt[n]=function(){var e=new Gt,t=xc.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var mu=function(e,t,i){return e[t]=i},Am=function(e,t,i){return e[t](i)},ZA=function(e,t,i,r){return e[t](r.fp,i)},$A=function(e,t,i){return e.setAttribute(t,i)},_u=function(e,t){return ft(e[t])?Am:ou(e[t])&&e.setAttribute?$A:mu},wm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},QA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Rm=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},gu=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},ew=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},tw=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Oa(this,t,"_pt"):t.dep||(i=1),t=r;return!i},nw=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Cm=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Zt=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||wm,this.d=l||this,this.set=c||mu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=nw,this.m=i,this.mt=s,this.tween=r},n}();Jt(fu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return uu[n]=1});cn.TweenMax=cn.TweenLite=vt;cn.TimelineLite=cn.TimelineMax=Gt;ot=new Gt({sortChildren:!1,defaults:ps,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ln.stringFilter=vm;var _r=[],ra={},iw=[],jh=0,rw=0,Nl=function(e){return(ra[e]||iw).map(function(t){return t()})},yc=function(){var e=Date.now(),t=[];e-jh>2&&(Nl("matchMediaInit"),_r.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=hn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Nl("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),jh=e,Nl("matchMedia"))},Pm=function(){function n(t,i){this.selector=i&&Mc(i),this.data=[],this._r=[],this.isReverted=!1,this.id=rw++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){ft(i)&&(s=r,r=i,i=ft);var o=this,a=function(){var c=ut,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Mc(s)),ut=o,f=r.apply(o,arguments),ft(f)&&o._r.push(f),ut=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===ft?a(o):i?o[i]=a:a},e.ignore=function(i){var r=ut;ut=null,i(this),ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof vt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return l instanceof Gt?l.data!=="nested"&&l.kill():!(l instanceof vt)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r)for(var a=_r.length;a--;)_r[a].id===this.id&&_r.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),sw=function(){function n(t){this.contexts=[],this.scope=t}var e=n.prototype;return e.add=function(i,r,s){jn(i)||(i={matches:i});var o=new Pm(0,s||this.scope),a=o.conditions={},l,c,u;ut&&!o.selector&&(o.selector=ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=hn.matchMedia(i[c]),l&&(_r.indexOf(o)<0&&_r.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(yc):l.addEventListener("change",yc)));return u&&r(o),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),ga={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return mm(r)})},timeline:function(e){return new Gt(e)},getTweensOf:function(e,t){return ot.getTweensOf(e,t)},getProperty:function(e,t,i,r){bt(e)&&(e=mn(e)[0]);var s=dr(e||{}).get,o=i?nm:tm;return i==="native"&&(i=""),e&&(t?o((sn[t]&&sn[t].get||s)(e,t,i,r)):function(a,l,c){return o((sn[a]&&sn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=mn(e),e.length>1){var r=e.map(function(u){return Qt.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=sn[t],a=dr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Jr._pt=0,f.init(e,i?u+i:u,Jr,0,[e]),f.render(1,f),Jr._pt&&gu(1,Jr)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=Qt.to(e,Sr((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=mr(e.ease,ps.ease)),Vh(ps,e||{})},config:function(e){return Vh(ln,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!sn[a]&&!cn[a]&&da(t+" effect requires "+a+" plugin.")}),Dl[t]=function(a,l,c){return i(mn(a),gn(l||{},s),c)},o&&(Gt.prototype[t]=function(a,l,c){return this.add(Dl[t](a,jn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ye[e]=mr(t)},parseEase:function(e,t){return arguments.length?mr(e,t):Ye},getById:function(e){return ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Gt(e),r,s;for(i.smoothChildTiming=Kt(e.smoothChildTiming),ot.remove(i),i._dp=0,i._time=i._tTime=ot._time,r=ot._first;r;)s=r._next,(t||!(!r._dur&&r instanceof vt&&r.vars.onComplete===r._targets[0]))&&kn(i,r,r._start-r._delay),r=s;return kn(ot,i,0),i},context:function(e,t){return e?new Pm(e,t):ut},matchMedia:function(e){return new sw(e)},matchMediaRefresh:function(){return _r.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||yc()},addEventListener:function(e,t){var i=ra[e]||(ra[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=ra[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:FA,wrapYoyo:BA,distribute:cm,random:fm,snap:um,normalize:NA,getUnit:Dt,clamp:DA,splitColor:_m,toArray:mn,selector:Mc,mapRange:dm,pipe:IA,unitize:OA,interpolate:zA,shuffle:lm},install:Jp,effects:Dl,ticker:an,updateRoot:Gt.updateRoot,plugins:sn,globalTimeline:ot,core:{PropTween:Zt,globals:Zp,Tween:vt,Timeline:Gt,Animation:ao,getCache:dr,_removeLinkedListItem:Oa,reverting:function(){return It},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return su=e}}};Jt("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return ga[n]=vt[n]});an.add(Gt.updateRoot);Jr=ga.to({},{duration:0});var ow=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},aw=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=ow(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Fl=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(bt(s)&&(l={},Jt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}aw(a,s)}}}},Qt=ga.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)It?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Fl("roundProps",Sc),Fl("modifiers"),Fl("snap",um))||ga;vt.version=Gt.version=Qt.version="3.12.1";Kp=1;au()&&gs();Ye.Power0;Ye.Power1;Ye.Power2;Ye.Power3;Ye.Power4;Ye.Linear;Ye.Quad;Ye.Cubic;Ye.Quart;Ye.Quint;Ye.Strong;Ye.Elastic;Ye.Back;Ye.SteppedEase;Ye.Bounce;Ye.Sine;Ye.Expo;Ye.Circ;/*!
 * CSSPlugin 3.12.1
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Kh,Ri,is,vu,or,Jh,xu,lw=function(){return typeof window<"u"},di={},nr=180/Math.PI,rs=Math.PI/180,Wr=Math.atan2,Zh=1e8,Mu=/([A-Z])/g,cw=/(left|right|width|margin|padding|x)/i,uw=/[\s,\(]\S/,Hn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Tc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},dw=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Lm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Dm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},pw=function(e,t,i){return e.style[t]=i},mw=function(e,t,i){return e.style.setProperty(t,i)},_w=function(e,t,i){return e._gsap[t]=i},gw=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},vw=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},xw=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},at="transform",Dn=at+"Origin",Mw=function n(e,t){var i=this,r=this.target,s=r.style;if(e in di&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Hn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=si(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:si(r,e);else return Hn.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(at)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Dn,t,"")),e=at}(s||t)&&this.props.push(e,t,s[e])},Um=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Sw=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Mu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=xu(),(!s||!s.isStart)&&!i[at]&&(Um(i),r.uncache=1)}},Im=function(e,t){var i={target:e,props:[],revert:Sw,save:Mw};return e._gsap||Qt.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},Om,bc=function(e,t){var i=Ri.createElementNS?Ri.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ri.createElement(e);return i.style?i:Ri.createElement(e)},Wn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Mu,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,vs(t)||t,1)||""},$h="O,Moz,ms,Ms,Webkit".split(","),vs=function(e,t,i){var r=t||or,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!($h[o]+e in s););return o<0?null:(o===3?"ms":o>=0?$h[o]:"")+e},Ac=function(){lw()&&window.document&&(Kh=window,Ri=Kh.document,is=Ri.documentElement,or=bc("div")||{style:{}},bc("div"),at=vs(at),Dn=at+"Origin",or.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Om=!!vs("perspective"),xu=Qt.core.reverting,vu=1)},Bl=function n(e){var t=bc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(is.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),is.removeChild(t),this.style.cssText=s,o},Qh=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Nm=function(e){var t;try{t=e.getBBox()}catch{t=Bl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Bl||(t=Bl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Qh(e,["x","cx","x1"])||0,y:+Qh(e,["y","cy","y1"])||0,width:0,height:0}:t},Fm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Nm(e))},lo=function(e,t){if(t){var i=e.style;t in di&&t!==Dn&&(t=at),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(Mu,"-$1").toLowerCase())):i.removeAttribute(t)}},Ci=function(e,t,i,r,s,o){var a=new Zt(e._pt,t,i,0,1,o?Dm:Lm);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},ed={deg:1,rad:1,turn:1},Ew={grid:1,flex:1},zi=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=or.style,l=cw.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",g,_,m,d;return r===o||!s||ed[r]||ed[o]?s:(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&Fm(e),(p||o==="%")&&(di[t]||~t.indexOf("adius"))?(g=d?e.getBBox()[l?"width":"height"]:e[u],dt(p?s/g*f:s/100*g)):(a[l?"width":"height"]=f+(h?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ri||!_.appendChild)&&(_=Ri.body),m=_._gsap,m&&p&&m.width&&l&&m.time===an.time&&!m.uncache?dt(s/m.width*f):((p||o==="%")&&!Ew[Wn(_,"display")]&&(a.position=Wn(e,"position")),_===e&&(a.position="static"),_.appendChild(or),g=or[u],_.removeChild(or),a.position="absolute",l&&p&&(m=dr(_),m.time=an.time,m.width=_[u]),dt(h?g*s/f:g&&s?f/g*s:0))))},si=function(e,t,i,r){var s;return vu||Ac(),t in Hn&&t!=="transform"&&(t=Hn[t],~t.indexOf(",")&&(t=t.split(",")[0])),di[t]&&t!=="transform"?(s=uo(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:xa(Wn(e,Dn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=va[t]&&va[t](e,t,i)||Wn(e,t)||Qp(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?zi(e,t,s,i)+i:s},yw=function(e,t,i,r){if(!i||i==="none"){var s=vs(t,e,1),o=s&&Wn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Wn(e,"borderTopColor"))}var a=new Zt(this._pt,e.style,t,0,1,Rm),l=0,c=0,u,f,h,p,g,_,m,d,E,x,S,T;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(e.style[t]=r,r=Wn(e,t)||r,e.style[t]=i),u=[i,r],vm(u),i=u[0],r=u[1],h=i.match(Kr)||[],T=r.match(Kr)||[],T.length){for(;f=Kr.exec(r);)m=f[0],E=r.substring(l,f.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(p=parseFloat(_)||0,S=_.substr((p+"").length),m.charAt(1)==="="&&(m=ns(p,m)+S),d=parseFloat(m),x=m.substr((d+"").length),l=Kr.lastIndex-x.length,x||(x=x||ln.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(p=zi(e,t,_,x)||0),a._pt={_next:a._pt,p:E||c===1?E:",",s:p,c:d-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Dm:Lm;return Yp.test(r)&&(a.e=0),this._pt=a,a},td={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Tw=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=td[i]||i,t[1]=td[r]||r,t.join(" ")},bw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],di[a]&&(l=1,a=a==="transformOrigin"?Dn:at),lo(i,a);l&&(lo(i,at),o&&(o.svg&&i.removeAttribute("transform"),uo(i,1),o.uncache=1,Um(r)))}},va={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Zt(e._pt,t,i,0,0,bw);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},co=[1,0,0,1,0,0],Bm={},zm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},nd=function(e){var t=Wn(e,at);return zm(t)?co:t.substr(7).match(qp).map(dt)},Su=function(e,t){var i=e._gsap||dr(e),r=e.style,s=nd(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?co:s):(s===co&&!e.offsetParent&&e!==is&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,is.appendChild(e)),s=nd(e),l?r.display=l:lo(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):is.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},wc=function(e,t,i,r,s,o){var a=e._gsap,l=s||Su(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],E=l[5],x=t.split(" "),S=parseFloat(x[0])||0,T=parseFloat(x[1])||0,w,P,D,M;i?l!==co&&(P=p*m-g*_)&&(D=S*(m/P)+T*(-_/P)+(_*E-m*d)/P,M=S*(-g/P)+T*(p/P)-(p*E-g*d)/P,S=D,T=M):(w=Nm(e),S=w.x+(~x[0].indexOf("%")?S/100*w.width:S),T=w.y+(~(x[1]||x[0]).indexOf("%")?T/100*w.height:T)),r||r!==!1&&a.smooth?(d=S-c,E=T-u,a.xOffset=f+(d*p+E*_)-d,a.yOffset=h+(d*g+E*m)-E):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Dn]="0px 0px",o&&(Ci(o,a,"xOrigin",c,S),Ci(o,a,"yOrigin",u,T),Ci(o,a,"xOffset",f,a.xOffset),Ci(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},uo=function(e,t){var i=e._gsap||new Em(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Wn(e,Dn)||"0",u,f,h,p,g,_,m,d,E,x,S,T,w,P,D,M,R,j,re,N,V,W,Z,z,X,ue,oe,Ee,F,pe,de,I;return u=f=h=_=m=d=E=x=S=0,p=g=1,i.svg=!!(e.getCTM&&Fm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[at]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[at]!=="none"?l[at]:"")),r.scale=r.rotate=r.translate="none"),P=Su(e,i.svg),i.svg&&(i.uncache?(X=e.getBBox(),c=i.xOrigin-X.x+"px "+(i.yOrigin-X.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),wc(e,z||c,!!z||i.originIsAbsolute,i.smooth!==!1,P)),T=i.xOrigin||0,w=i.yOrigin||0,P!==co&&(j=P[0],re=P[1],N=P[2],V=P[3],u=W=P[4],f=Z=P[5],P.length===6?(p=Math.sqrt(j*j+re*re),g=Math.sqrt(V*V+N*N),_=j||re?Wr(re,j)*nr:0,E=N||V?Wr(N,V)*nr+_:0,E&&(g*=Math.abs(Math.cos(E*rs))),i.svg&&(u-=T-(T*j+w*N),f-=w-(T*re+w*V))):(I=P[6],pe=P[7],oe=P[8],Ee=P[9],F=P[10],de=P[11],u=P[12],f=P[13],h=P[14],D=Wr(I,F),m=D*nr,D&&(M=Math.cos(-D),R=Math.sin(-D),z=W*M+oe*R,X=Z*M+Ee*R,ue=I*M+F*R,oe=W*-R+oe*M,Ee=Z*-R+Ee*M,F=I*-R+F*M,de=pe*-R+de*M,W=z,Z=X,I=ue),D=Wr(-N,F),d=D*nr,D&&(M=Math.cos(-D),R=Math.sin(-D),z=j*M-oe*R,X=re*M-Ee*R,ue=N*M-F*R,de=V*R+de*M,j=z,re=X,N=ue),D=Wr(re,j),_=D*nr,D&&(M=Math.cos(D),R=Math.sin(D),z=j*M+re*R,X=W*M+Z*R,re=re*M-j*R,Z=Z*M-W*R,j=z,W=X),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=dt(Math.sqrt(j*j+re*re+N*N)),g=dt(Math.sqrt(Z*Z+I*I)),D=Wr(W,Z),E=Math.abs(D)>2e-4?D*nr:0,S=de?1/(de<0?-de:de):0),i.svg&&(z=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!zm(Wn(e,at)),z&&e.setAttribute("transform",z))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(p*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=dt(p),i.scaleY=dt(g),i.rotation=dt(_)+a,i.rotationX=dt(m)+a,i.rotationY=dt(d)+a,i.skewX=E+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[Dn]=xa(c)),i.xOffset=i.yOffset=0,i.force3D=ln.force3D,i.renderTransform=i.svg?ww:Om?km:Aw,i.uncache=0,i},xa=function(e){return(e=e.split(" "))[0]+" "+e[1]},zl=function(e,t,i){var r=Dt(t);return dt(parseFloat(t)+parseFloat(zi(e,"x",i+"px",r)))+r},Aw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,km(e,t)},$i="0deg",Ds="0px",Qi=") ",km=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,d=i.force3D,E=i.target,x=i.zOrigin,S="",T=d==="auto"&&e&&e!==1||d===!0;if(x&&(f!==$i||u!==$i)){var w=parseFloat(u)*rs,P=Math.sin(w),D=Math.cos(w),M;w=parseFloat(f)*rs,M=Math.cos(w),o=zl(E,o,P*M*-x),a=zl(E,a,-Math.sin(w)*-x),l=zl(E,l,D*M*-x+x)}m!==Ds&&(S+="perspective("+m+Qi),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(T||o!==Ds||a!==Ds||l!==Ds)&&(S+=l!==Ds||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Qi),c!==$i&&(S+="rotate("+c+Qi),u!==$i&&(S+="rotateY("+u+Qi),f!==$i&&(S+="rotateX("+f+Qi),(h!==$i||p!==$i)&&(S+="skew("+h+", "+p+Qi),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Qi),E.style[at]=S||"translate(0, 0)"},ww=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,d=i.yOffset,E=i.forceCSS,x=parseFloat(o),S=parseFloat(a),T,w,P,D,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=rs,c*=rs,T=Math.cos(l)*f,w=Math.sin(l)*f,P=Math.sin(l-c)*-h,D=Math.cos(l-c)*h,c&&(u*=rs,M=Math.tan(c-u),M=Math.sqrt(1+M*M),P*=M,D*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),T*=M,w*=M)),T=dt(T),w=dt(w),P=dt(P),D=dt(D)):(T=f,D=h,w=P=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=zi(p,"x",o,"px"),S=zi(p,"y",a,"px")),(g||_||m||d)&&(x=dt(x+g-(g*T+_*P)+m),S=dt(S+_-(g*w+_*D)+d)),(r||s)&&(M=p.getBBox(),x=dt(x+r/100*M.width),S=dt(S+s/100*M.height)),M="matrix("+T+","+w+","+P+","+D+","+x+","+S+")",p.setAttribute("transform",M),E&&(p.style[at]=M)},Rw=function(e,t,i,r,s){var o=360,a=bt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?nr:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Zh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Zh)%o-~~(c/o)*o)),e._pt=h=new Zt(e._pt,t,i,r,c,fw),h.e=u,h.u="deg",e._props.push(i),h},id=function(e,t){for(var i in t)e[i]=t[i];return e},Cw=function(e,t,i){var r=id({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,h,p,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[at]=t,a=uo(i,1),lo(i,at),i.setAttribute("transform",c)):(c=getComputedStyle(i)[at],o[at]=t,a=uo(i,1),o[at]=c);for(l in di)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=Dt(c),g=Dt(u),f=p!==g?zi(i,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Zt(e._pt,a,l,f,h-f,Tc),e._pt.u=g||0,e._props.push(l));id(a,r)};Jt("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});va[e>1?"border"+n:n]=function(a,l,c,u,f){var h,p;if(arguments.length<4)return h=o.map(function(g){return si(a,g,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},o.forEach(function(g,_){return p[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,p,f)}});var Hm={name:"css",register:Ac,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,h,p,g,_,m,d,E,x,S,T,w,P,D;vu||Ac(),this.styles=this.styles||Im(e),D=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(sn[_]&&ym(_,t,i,r,e,s)))){if(p=typeof u,g=va[_],p==="function"&&(u=u.call(i,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=so(u)),g)g(this,e,_,u,i)&&(P=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Oi.lastIndex=0,Oi.test(c)||(m=Dt(c),d=Dt(u)),d?m!==d&&(c=zi(e,_,c,d)+d):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),D.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],bt(c)&&~c.indexOf("random(")&&(c=so(c)),Dt(c+"")||(c+=ln.units[_]||Dt(si(e,_))||""),(c+"").charAt(1)==="="&&(c=si(e,_))):c=si(e,_),h=parseFloat(c),E=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),f=parseFloat(u),_ in Hn&&(_==="autoAlpha"&&(h===1&&si(e,"visibility")==="hidden"&&f&&(h=0),D.push("visibility",0,a.visibility),Ci(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Hn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in di,x){if(this.styles.save(_),S||(T=e._gsap,T.renderTransform&&!t.parseTransform||uo(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new Zt(this._pt,a,at,0,1,T.renderTransform,T,0,-1),S.dep=1),_==="scale")this._pt=new Zt(this._pt,T,"scaleY",T.scaleY,(E?ns(T.scaleY,E+f):f)-T.scaleY||0,Tc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(Dn,0,a[Dn]),u=Tw(u),T.svg?wc(e,u,0,w,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==T.zOrigin&&Ci(this,T,"zOrigin",T.zOrigin,d),Ci(this,a,_,xa(c),xa(u)));continue}else if(_==="svgOrigin"){wc(e,u,1,w,0,this);continue}else if(_ in Bm){Rw(this,T,_,h,E?ns(h,E+u):u);continue}else if(_==="smoothOrigin"){Ci(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){Cw(this,u,e);continue}}else _ in a||(_=vs(_)||_);if(x||(f||f===0)&&(h||h===0)&&!uw.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),d=Dt(u)||(_ in ln.units?ln.units[_]:m),m!==d&&(h=zi(e,_,c,d)),this._pt=new Zt(this._pt,x?T:a,_,h,(E?ns(h,E+f):f)-h,!x&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?dw:Tc),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=hw);else if(_ in a)yw.call(this,e,_,c,E?E+u:u);else if(_ in e)this.add(e,_,c||e[_],E?E+u:u,r,s);else if(_!=="parseTransform"){cu(_,u);continue}x||(_ in a?D.push(_,0,a[_]):D.push(_,1,c||e[_])),o.push(_)}}P&&Cm(this)},render:function(e,t){if(t.tween._time||!xu())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:si,aliases:Hn,getSetter:function(e,t,i){var r=Hn[t];return r&&r.indexOf(",")<0&&(t=r),t in di&&t!==Dn&&(e._gsap.x||si(e,"x"))?i&&Jh===i?t==="scale"?gw:_w:(Jh=i||{})&&(t==="scale"?vw:xw):e.style&&!ou(e.style[t])?pw:~t.indexOf("-")?mw:_u(e,t)},core:{_removeProperty:lo,_getMatrix:Su}};Qt.utils.checkPrefix=vs;Qt.core.getStyleSaver=Im;(function(n,e,t,i){var r=Jt(n+","+e+","+t,function(s){di[s]=1});Jt(e,function(s){ln.units[s]="deg",Bm[s]=1}),Hn[r[13]]=n+","+e,Jt(i,function(s){var o=s.split(":");Hn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){ln.units[n]="px"});Qt.registerPlugin(Hm);var Gm=Qt.registerPlugin(Hm)||Qt;Gm.core.Tween;document.addEventListener("DOMContentLoaded",function(){(()=>{const e=new sA,t=new uA().load("/portfolio-santi/src/assets/img/earth.jpg"),i=new ru(6,64,64),r=new oA({color:"#fff",roughness:.1,map:t}),s=new li(i,r);e.add(s);const o={width:window.innerWidth<650?350:600,height:window.innerWidth<650?350:600},a=()=>{window.innerWidth<650?s.scale.set(.5,.6,.6):s.scale.set(1,1,1)},l=()=>{o.width=window.innerWidth,o.height=window.innerHeight,u.aspect=o.width/o.height,u.updateProjectionMatrix(),h.setSize(o.width,o.height),a()};window.addEventListener("resize",l),a();const c=new pA(16777215,1);c.position.set(10,10,10),c.intensity=1,e.add(c);const u=new on(45,o.width/o.height,1,100);u.position.z=20,e.add(u);const f=document.querySelector(".webgl");document.querySelector(".upanimation"),f.style.backgroundColor="transparent";const h=new Hp({canvas:f,alpha:!0});h.setSize(o.width,o.height),h.render(e,u);const p=new mA(u,f);p.enableDamping=!0,p.enablePan=!1,p.enableZoom=!1;const g=()=>{p.update(),s.rotation.y-=.005,h.render(e,u),window.requestAnimationFrame(g)};g(),Gm.timeline({defaults:{duration:2}}).fromTo(s.scale,{z:0,x:0,y:0},{z:1,x:1,y:1})})()});
