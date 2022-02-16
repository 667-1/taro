"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[38713],{3905:function(e,t,r){r.d(t,{Zo:function(){return g},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(d,i(i({ref:t},g),{},{components:r})):n.createElement(d,i({ref:t},g))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},545:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return g},default:function(){return u}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={title:"Taro.getRealtimeLogManager()",sidebar_label:"getRealtimeLogManager"},c=void 0,p={unversionedId:"apis/base/debug/getRealtimeLogManager",id:"version-3.x/apis/base/debug/getRealtimeLogManager",title:"Taro.getRealtimeLogManager()",description:"Obtains the real-time log manager object.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/base/debug/getRealtimeLogManager.md",sourceDirName:"apis/base/debug",slug:"/apis/base/debug/getRealtimeLogManager",permalink:"/taro/en/docs/apis/base/debug/getRealtimeLogManager",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/base/debug/getRealtimeLogManager.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getRealtimeLogManager()",sidebar_label:"getRealtimeLogManager"},sidebar:"version-3.x/API",previous:{title:"setEnableDebug",permalink:"/taro/en/docs/apis/base/debug/setEnableDebug"},next:{title:"getLogManager",permalink:"/taro/en/docs/apis/base/debug/getLogManager"}},g=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],s={toc:g};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Obtains the real-time log manager object."),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"() => RealtimeLogManager\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const logger = Taro.getRealtimeLogManager()\nlogger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])\nlogger.error({str: 'hello world'}, 'error log', 100, [1, 2, 3])\nlogger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])\n")),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.getRealtimeLogManager"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);