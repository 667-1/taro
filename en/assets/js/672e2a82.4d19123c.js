"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[59360],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),s=u(n),k=r,m=s["".concat(i,".").concat(k)]||s[k]||p[k]||l;return n?a.createElement(m,o(o({ref:e},d),{},{components:n})):a.createElement(m,o({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},36931:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=["components"],c={title:"Taro.onLocationChange(callback)",sidebar_label:"onLocationChange"},i=void 0,u={unversionedId:"apis/location/onLocationChange",id:"apis/location/onLocationChange",title:"Taro.onLocationChange(callback)",description:"Listens for real-time geolocation change events, to be used in conjunction with Taro.startLocationUpdateBackground\u3001Taro.startLocationUpdate.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/location/onLocationChange.md",sourceDirName:"apis/location",slug:"/apis/location/onLocationChange",permalink:"/taro/en/docs/next/apis/location/onLocationChange",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/location/onLocationChange.md",tags:[],version:"current",frontMatter:{title:"Taro.onLocationChange(callback)",sidebar_label:"onLocationChange"},sidebar:"API",previous:{title:"onLocationChangeError",permalink:"/taro/en/docs/next/apis/location/onLocationChangeError"},next:{title:"offLocationChangeError",permalink:"/taro/en/docs/next/apis/location/offLocationChangeError"}},d=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Callback",id:"callback",children:[],level:3},{value:"CallbackResult",id:"callbackresult",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],p={toc:d};function s(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Listens for real-time geolocation change events, to be used in conjunction with ",(0,l.kt)("inlineCode",{parentName:"p"},"Taro.startLocationUpdateBackground"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Taro.startLocationUpdate"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html"},"Reference"))),(0,l.kt)("h2",{id:"type"},"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("h3",{id:"callback"},"Callback"),(0,l.kt)("p",null,"Callback function for real-time geolocation change events."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CallbackResult"))))),(0,l.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"accuracy"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Location accuracy")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"altitude"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Altitude (in m)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"horizontalAccuracy"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Horizontal accuracy (in m)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"latitude"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Latitude. The value ranges from -90 to +90, and the negative number means south latitude.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"longitude"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Longitude. The value ranges from -180 to +180, and the negative number means west longitude.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"speed"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Speed (in m/s)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"verticalAccuracy"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Vertical accuracy (in m) (Not available for Android, and 0 will be returned)")))),(0,l.kt)("h2",{id:"sample-code"},"Sample Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const _locationChangeFn = function (res) {\n console.log('location change', res)\n}\nTaro.onLocationChange(_locationChangeFn)\nTaro.offLocationChange(_locationChangeFn)\n")),(0,l.kt)("h2",{id:"api-support"},"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.onLocationChange"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);