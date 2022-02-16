"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[12802],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=l,f=d["".concat(a,".").concat(k)]||d[k]||c[k]||o;return n?r.createElement(f,u(u({ref:t},p),{},{components:n})):r.createElement(f,u({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,u=new Array(o);u[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:l,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95199:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(83117),l=n(80102),o=(n(67294),n(3905)),u=["components"],i={title:"UserInfo",sidebar_label:"UserInfo"},a=void 0,s={unversionedId:"apis/open-api/user-info/UserInfo",id:"apis/open-api/user-info/UserInfo",title:"UserInfo",description:"The user information.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/open-api/user-info/UserInfo.md",sourceDirName:"apis/open-api/user-info",slug:"/apis/open-api/user-info/UserInfo",permalink:"/taro/en/docs/next/apis/open-api/user-info/UserInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/open-api/user-info/UserInfo.md",tags:[],version:"current",frontMatter:{title:"UserInfo",sidebar_label:"UserInfo"},sidebar:"API",previous:{title:"getUserInfo",permalink:"/taro/en/docs/next/apis/open-api/user-info/getUserInfo"},next:{title:"authorizeForMiniProgram",permalink:"/taro/en/docs/next/apis/open-api/authorize/authorizeForMiniProgram"}},p=[{value:"Methods",id:"methods",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"language",id:"language",children:[],level:3},{value:"gender",id:"gender",children:[],level:3}],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,l.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The user information."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/open-api/user-info/UserInfo.html"},"Reference"))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"avatarUrl"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The URL to the user's profile photo. The last numeric value represents the size of a square profile photo. (The value can be 0, 46, 64, 96, or 132. The value 0 represents a 640x640 square profile photo, the value 46 indicates a 46x46 square profile photo, and so on. The default value is 132.) This parameter is left blank if a user has no profile photo. If the user changes the profile photo, the URL of the original profile photo will expire.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"city"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The user's city.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"country"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The user's country.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"gender"),(0,o.kt)("td",null,(0,o.kt)("code",null,"0 | 1 | 2")),(0,o.kt)("td",null,"The user's gender.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"language"),(0,o.kt)("td",null,(0,o.kt)("code",null,'"en" | "zh_CN" | "zh_TW"')),(0,o.kt)("td",null,"The language used to display the country, province, and city")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"nickName"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The user's alias.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"province"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The user's province.")))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"language"},"language"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"en"),(0,o.kt)("td",null,(0,o.kt)("code",null,'"English"'))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"zh_CN"),(0,o.kt)("td",null,(0,o.kt)("code",null,'"Simplified Chinese"'))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"zh_TW"),(0,o.kt)("td",null,(0,o.kt)("code",null,'"Traditional Chinese"'))))),(0,o.kt)("h3",{id:"gender"},"gender"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"0"),(0,o.kt)("td",null,(0,o.kt)("code",null,'"Unknown"'))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"1"),(0,o.kt)("td",null,(0,o.kt)("code",null,'"Male"'))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"2"),(0,o.kt)("td",null,(0,o.kt)("code",null,'"Female"'))))))}d.isMDXComponent=!0}}]);