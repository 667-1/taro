"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[75794],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return s}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=c(a),s=r,k=u["".concat(p,".").concat(s)]||u[s]||d[s]||i;return a?n.createElement(k,o(o({ref:e},m),{},{components:a})):n.createElement(k,o({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48217:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],l={title:"AudioContext",sidebar_label:"AudioContext"},p=void 0,c={unversionedId:"apis/media/audio/AudioContext",id:"version-3.x/apis/media/audio/AudioContext",title:"AudioContext",description:"AudioContext \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 Taro.createAudioContext \u83b7\u53d6\u3002",source:"@site/versioned_docs/version-3.x/apis/media/audio/AudioContext.md",sourceDirName:"apis/media/audio",slug:"/apis/media/audio/AudioContext",permalink:"/taro/docs/apis/media/audio/AudioContext",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/media/audio/AudioContext.md",tags:[],version:"3.x",frontMatter:{title:"AudioContext",sidebar_label:"AudioContext"},sidebar:"version-3.x/API",previous:{title:"AudioBuffer",permalink:"/taro/docs/apis/media/audio/AudioBuffer"},next:{title:"InnerAudioContext",permalink:"/taro/docs/apis/media/audio/InnerAudioContext"}},m=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"pause",id:"pause",children:[],level:3},{value:"play",id:"play",children:[],level:3},{value:"seek",id:"seek",children:[],level:3},{value:"setSrc",id:"setsrc",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],d={toc:m};function u(t){var e=t.components,l=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AudioContext")," \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Taro.createAudioContext")," \u83b7\u53d6\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AudioContext")," \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," \u8ddf\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"audio")," \u7ec4\u4ef6\u7ed1\u5b9a\uff0c\u64cd\u4f5c\u5bf9\u5e94\u7684 audio \u7ec4\u4ef6\u3002"),(0,i.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,i.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,i.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,i.kt)("h3",{id:"pause"},"pause"),(0,i.kt)("p",null,"\u6682\u505c\u97f3\u9891\u3002"),(0,i.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,i.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,i.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.pause.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,i.kt)("h3",{id:"play"},"play"),(0,i.kt)("p",null,"\u64ad\u653e\u97f3\u9891\u3002"),(0,i.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,i.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,i.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.play.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,i.kt)("h3",{id:"seek"},"seek"),(0,i.kt)("p",null,"\u8df3\u8f6c\u5230\u6307\u5b9a\u4f4d\u7f6e\u3002"),(0,i.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,i.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,i.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.seek.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(position: number) => void\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"position"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"\u8df3\u8f6c\u4f4d\u7f6e\uff0c\u5355\u4f4d s")))),(0,i.kt)("h3",{id:"setsrc"},"setSrc"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u97f3\u9891\u5730\u5740"),(0,i.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,i.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,i.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.setSrc.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(src: string) => void\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"src"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"\u97f3\u9891\u5730\u5740")))),(0,i.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"AudioContext"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"AudioContext.pause"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"AudioContext.play"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"AudioContext.seek"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"AudioContext.setSrc"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0},5030:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);