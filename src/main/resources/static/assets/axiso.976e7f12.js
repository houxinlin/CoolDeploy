import{r as be}from"./index.d3670e35.js";var D={exports:{}},K=function(e,t){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(t,n)}},we=K,w=Object.prototype.toString;function q(r){return w.call(r)==="[object Array]"}function _(r){return typeof r=="undefined"}function Ee(r){return r!==null&&!_(r)&&r.constructor!==null&&!_(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function Se(r){return w.call(r)==="[object ArrayBuffer]"}function Ce(r){return typeof FormData!="undefined"&&r instanceof FormData}function Re(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r.buffer instanceof ArrayBuffer,e}function Oe(r){return typeof r=="string"}function xe(r){return typeof r=="number"}function G(r){return r!==null&&typeof r=="object"}function A(r){if(w.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function Ae(r){return w.call(r)==="[object Date]"}function Ne(r){return w.call(r)==="[object File]"}function $e(r){return w.call(r)==="[object Blob]"}function Y(r){return w.call(r)==="[object Function]"}function ge(r){return G(r)&&Y(r.pipe)}function Te(r){return typeof URLSearchParams!="undefined"&&r instanceof URLSearchParams}function Ue(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Pe(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function F(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),q(r))for(var t=0,a=r.length;t<a;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function k(){var r={};function e(n,s){A(r[s])&&A(n)?r[s]=k(r[s],n):A(n)?r[s]=k({},n):q(n)?r[s]=n.slice():r[s]=n}for(var t=0,a=arguments.length;t<a;t++)F(arguments[t],e);return r}function Le(r,e,t){return F(e,function(n,s){t&&typeof n=="function"?r[s]=we(n,t):r[s]=n}),r}function Be(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var h={isArray:q,isArrayBuffer:Se,isBuffer:Ee,isFormData:Ce,isArrayBufferView:Re,isString:Oe,isNumber:xe,isObject:G,isPlainObject:A,isUndefined:_,isDate:Ae,isFile:Ne,isBlob:$e,isFunction:Y,isStream:ge,isURLSearchParams:Te,isStandardBrowserEnv:Pe,forEach:F,merge:k,extend:Le,trim:Ue,stripBOM:Be},S=h;function Q(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Z=function(e,t,a){if(!t)return e;var n;if(a)n=a(t);else if(S.isURLSearchParams(t))n=t.toString();else{var s=[];S.forEach(t,function(f,v){f===null||typeof f=="undefined"||(S.isArray(f)?v=v+"[]":f=[f],S.forEach(f,function(l){S.isDate(l)?l=l.toISOString():S.isObject(l)&&(l=JSON.stringify(l)),s.push(Q(v)+"="+Q(l))}))}),n=s.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},je=h;function N(){this.handlers=[]}N.prototype.use=function(e,t,a){return this.handlers.push({fulfilled:e,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};N.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};N.prototype.forEach=function(e){je.forEach(this.handlers,function(a){a!==null&&e(a)})};var De=N,qe=h,_e=function(e,t){qe.forEach(e,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[s])})},ee=function(e,t,a,n,s){return e.config=t,a&&(e.code=a),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Fe=ee,re=function(e,t,a,n,s){var o=new Error(e);return Fe(o,t,a,n,s)},ke=re,He=function(e,t,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):t(ke("Request failed with status code "+a.status,a.config,null,a.request,a))},$=h,Ie=$.isStandardBrowserEnv()?function(){return{write:function(t,a,n,s,o,u){var f=[];f.push(t+"="+encodeURIComponent(a)),$.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),$.isString(s)&&f.push("path="+s),$.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var a=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Me=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},Je=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},ze=Me,Ve=Je,We=function(e,t){return e&&!ze(t)?Ve(e,t):t},H=h,Xe=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Ke=function(e){var t={},a,n,s;return e&&H.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),a=H.trim(u.substr(0,s)).toLowerCase(),n=H.trim(u.substr(s+1)),a){if(t[a]&&Xe.indexOf(a)>=0)return;a==="set-cookie"?t[a]=(t[a]?t[a]:[]).concat([n]):t[a]=t[a]?t[a]+", "+n:n}}),t},te=h,Ge=te.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),a;function n(s){var o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return a=n(window.location.href),function(o){var u=te.isString(o)?n(o):o;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}();function I(r){this.message=r}I.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};I.prototype.__CANCEL__=!0;var g=I,T=h,Ye=He,Qe=Ie,Ze=Z,er=We,rr=Ke,tr=Ge,M=re,nr=P,ar=g,ne=function(e){return new Promise(function(a,n){var s=e.data,o=e.headers,u=e.responseType,f;function v(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}T.isFormData(s)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(l+":"+d)}var O=er(e.baseURL,e.url);i.open(e.method.toUpperCase(),Ze(O,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function W(){if(!!i){var m="getAllResponseHeaders"in i?rr(i.getAllResponseHeaders()):null,E=!u||u==="text"||u==="json"?i.responseText:i.response,b={data:E,status:i.status,statusText:i.statusText,headers:m,config:e,request:i};Ye(function(j){a(j),v()},function(j){n(j),v()},b),i=null}}if("onloadend"in i?i.onloadend=W:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(W)},i.onabort=function(){!i||(n(M("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(M("Network Error",e,null,i)),i=null},i.ontimeout=function(){var E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",b=e.transitional||nr.transitional;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),n(M(E,e,b.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},T.isStandardBrowserEnv()){var X=(e.withCredentials||tr(O))&&e.xsrfCookieName?Qe.read(e.xsrfCookieName):void 0;X&&(o[e.xsrfHeaderName]=X)}"setRequestHeader"in i&&T.forEach(o,function(E,b){typeof s=="undefined"&&b.toLowerCase()==="content-type"?delete o[b]:i.setRequestHeader(b,E)}),T.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),u&&u!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(m){!i||(n(!m||m&&m.type?new ar("canceled"):m),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),s||(s=null),i.send(s)})},c=h,ae=_e,sr=ee,ir={"Content-Type":"application/x-www-form-urlencoded"};function se(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function or(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=ne),r}function ur(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(r)}var U={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:or(),transformRequest:[function(e,t){return ae(t,"Accept"),ae(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(se(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)||t&&t["Content-Type"]==="application/json"?(se(t,"application/json"),ur(e)):e}],transformResponse:[function(e){var t=this.transitional||U.transitional,a=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,s=!a&&this.responseType==="json";if(s||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?sr(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){U.headers[e]={}});c.forEach(["post","put","patch"],function(e){U.headers[e]=c.merge(ir)});var P=U,fr=h,lr=P,cr=function(e,t,a){var n=this||lr;return fr.forEach(a,function(o){e=o.call(n,e,t)}),e},ie=function(e){return!!(e&&e.__CANCEL__)},oe=h,J=cr,dr=ie,hr=P,pr=g;function z(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new pr("canceled")}var mr=function(e){z(e),e.headers=e.headers||{},e.data=J.call(e,e.data,e.headers,e.transformRequest),e.headers=oe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),oe.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||hr.adapter;return t(e).then(function(n){return z(e),n.data=J.call(e,n.data,n.headers,e.transformResponse),n},function(n){return dr(n)||(z(e),n&&n.response&&(n.response.data=J.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},p=h,ue=function(e,t){t=t||{};var a={};function n(i,l){return p.isPlainObject(i)&&p.isPlainObject(l)?p.merge(i,l):p.isPlainObject(l)?p.merge({},l):p.isArray(l)?l.slice():l}function s(i){if(p.isUndefined(t[i])){if(!p.isUndefined(e[i]))return n(void 0,e[i])}else return n(e[i],t[i])}function o(i){if(!p.isUndefined(t[i]))return n(void 0,t[i])}function u(i){if(p.isUndefined(t[i])){if(!p.isUndefined(e[i]))return n(void 0,e[i])}else return n(void 0,t[i])}function f(i){if(i in t)return n(e[i],t[i]);if(i in e)return n(void 0,e[i])}var v={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return p.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var d=v[l]||s,O=d(l);p.isUndefined(O)&&d!==f||(a[l]=O)}),a},fe={version:"0.24.0"},vr=fe.version,V={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){V[r]=function(a){return typeof a===r||"a"+(e<1?"n ":" ")+r}});var le={};V.transitional=function(e,t,a){function n(s,o){return"[Axios v"+vr+"] Transitional option '"+s+"'"+o+(a?". "+a:"")}return function(s,o,u){if(e===!1)throw new Error(n(o," has been removed"+(t?" in "+t:"")));return t&&!le[o]&&(le[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,u):!0}};function yr(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var a=Object.keys(r),n=a.length;n-- >0;){var s=a[n],o=e[s];if(o){var u=r[s],f=u===void 0||o(u,s,r);if(f!==!0)throw new TypeError("option "+s+" must be "+f);continue}if(t!==!0)throw Error("Unknown option "+s)}}var br={assertOptions:yr,validators:V},ce=h,wr=Z,de=De,he=mr,L=ue,pe=br,C=pe.validators;function x(r){this.defaults=r,this.interceptors={request:new de,response:new de}}x.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=L(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;t!==void 0&&pe.assertOptions(t,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1);var a=[],n=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(e)===!1||(n=n&&d.synchronous,a.unshift(d.fulfilled,d.rejected))});var s=[];this.interceptors.response.forEach(function(d){s.push(d.fulfilled,d.rejected)});var o;if(!n){var u=[he,void 0];for(Array.prototype.unshift.apply(u,a),u=u.concat(s),o=Promise.resolve(e);u.length;)o=o.then(u.shift(),u.shift());return o}for(var f=e;a.length;){var v=a.shift(),i=a.shift();try{f=v(f)}catch(l){i(l);break}}try{o=he(f)}catch(l){return Promise.reject(l)}for(;s.length;)o=o.then(s.shift(),s.shift());return o};x.prototype.getUri=function(e){return e=L(this.defaults,e),wr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};ce.forEach(["delete","get","head","options"],function(e){x.prototype[e]=function(t,a){return this.request(L(a||{},{method:e,url:t,data:(a||{}).data}))}});ce.forEach(["post","put","patch"],function(e){x.prototype[e]=function(t,a,n){return this.request(L(n||{},{method:e,url:t,data:a}))}});var Er=x,Sr=g;function R(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(a){if(!!t._listeners){var n,s=t._listeners.length;for(n=0;n<s;n++)t._listeners[n](a);t._listeners=null}}),this.promise.then=function(a){var n,s=new Promise(function(o){t.subscribe(o),n=o}).then(a);return s.cancel=function(){t.unsubscribe(n)},s},r(function(n){t.reason||(t.reason=new Sr(n),e(t.reason))})}R.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};R.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};R.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};R.source=function(){var e,t=new R(function(n){e=n});return{token:t,cancel:e}};var Cr=R,Rr=function(e){return function(a){return e.apply(null,a)}},Or=function(e){return typeof e=="object"&&e.isAxiosError===!0},me=h,xr=K,B=Er,Ar=ue,Nr=P;function ve(r){var e=new B(r),t=xr(B.prototype.request,e);return me.extend(t,B.prototype,e),me.extend(t,e),t.create=function(n){return ve(Ar(r,n))},t}var y=ve(Nr);y.Axios=B;y.Cancel=g;y.CancelToken=Cr;y.isCancel=ie;y.VERSION=fe.version;y.all=function(e){return Promise.all(e)};y.spread=Rr;y.isAxiosError=Or;D.exports=y;D.exports.default=y;var $r=D.exports;const gr=$r.create({baseURL:"http://www.houxinlin.com:5993/",withCredentials:!0});gr.interceptors.response.use(function(r){return r.data.code==302&&be.push({path:"/login"}),r},function(r){return r});export{gr as i};
