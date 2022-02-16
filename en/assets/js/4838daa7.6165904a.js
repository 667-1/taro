"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[72],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return d}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),l=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(f,o(o({ref:e},p),{},{components:r})):a.createElement(f,o({ref:e},p))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},36596:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=r(83117),n=r(80102),i=(r(67294),r(3905)),o=["components"],s={title:"Access to Statistical Platforms"},c=void 0,l={unversionedId:"report",id:"report",title:"Access to Statistical Platforms",description:"Access to Baidu statistics platform",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/report.md",sourceDirName:".",slug:"/report",permalink:"/taro/en/docs/next/report",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/report.md",tags:[],version:"current",frontMatter:{title:"Access to Statistical Platforms"},sidebar:"docs",previous:{title:"Tencent Youshu seamless burial point",permalink:"/taro/en/docs/next/youshu"},next:{title:"SeoWhy Tangram Create Mini Program",permalink:"/taro/en/docs/next/seowhy"}},p=[{value:"Access to Baidu statistics platform",id:"access-to-baidu-statistics-platform",children:[{value:"WeChat mini program access to Baidu statistics",id:"wechat-mini-program-access-to-baidu-statistics",children:[],level:3}],level:2},{value:"Access to Aladdin Statistics Platform",id:"access-to-aladdin-statistics-platform",children:[],level:2}],m={toc:p};function u(t){var e=t.components,r=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"access-to-baidu-statistics-platform"},"Access to Baidu statistics platform"),(0,i.kt)("h3",{id:"wechat-mini-program-access-to-baidu-statistics"},"WeChat mini program access to Baidu statistics"),(0,i.kt)("p",null,'1\u3001Download "WeChat  mini program statistics SDK" in thie ',(0,i.kt)("a",{parentName:"p",href:"https://mtj.baidu.com/web/sdk/index"},"Baidu Statistics Platform"),", and copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"mtj-wx-sdk.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mtj-wx-sdk.config.js")," obtained by unzipping them to the ",(0,i.kt)("inlineCode",{parentName:"p"}," src/utils")," folder of the  mini program project."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Edit ",(0,i.kt)("inlineCode",{parentName:"li"},"mtj-wx-sdk.config.js")," and fill in the appKey field:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"   appKey: 'Mini program AppKey',\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Edit src/app.tsx of the mini program project and add at the top of the file.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    import './utils/mtj-wx-sdk';\n")),(0,i.kt)("p",null,"4\u3001Login to ",(0,i.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/"},"WeChat Public Platform"),", go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Development Settings")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Server Domain")," of the  mini program, add ",(0,i.kt)("inlineCode",{parentName:"p"},"https://hmma.baidu.com")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"request legal domain"),"."),(0,i.kt)("p",null,"Detailed documentation is available at ",(0,i.kt)("a",{parentName:"p",href:"https://mtj.baidu.com/static/userguide/book/chapter0/wechat.html#33-mpvue"},"https://mtj.baidu.com/static/userguide/book/chapter0/wechat.html#34-taro")),(0,i.kt)("h2",{id:"access-to-aladdin-statistics-platform"},"Access to Aladdin Statistics Platform"),(0,i.kt)("p",null,"For details, see the Aladdin Statistics Platform documentation ",(0,i.kt)("a",{parentName:"p",href:"https://doc.aldwx.com/aldwx/frame/taro-jie-ru.html"},'"How to integrate the SDK into a mini program  built with the Taro framework"')))}u.isMDXComponent=!0}}]);