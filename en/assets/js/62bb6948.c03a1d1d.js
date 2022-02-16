"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[53235],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=u(n),k=a,g=d["".concat(c,".").concat(k)]||d[k]||s[k]||i;return n?r.createElement(g,l(l({ref:e},p),{},{components:n})):r.createElement(g,l({ref:e},p))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98382:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],o={title:"Taro.setNavigationBarTitle(option)",sidebar_label:"setNavigationBarTitle"},c=void 0,u={unversionedId:"apis/ui/navigation-bar/setNavigationBarTitle",id:"version-3.x/apis/ui/navigation-bar/setNavigationBarTitle",title:"Taro.setNavigationBarTitle(option)",description:"Dynamically sets the title of the current page.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/ui/navigation-bar/setNavigationBarTitle.md",sourceDirName:"apis/ui/navigation-bar",slug:"/apis/ui/navigation-bar/setNavigationBarTitle",permalink:"/taro/en/docs/apis/ui/navigation-bar/setNavigationBarTitle",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/ui/navigation-bar/setNavigationBarTitle.md",tags:[],version:"3.x",frontMatter:{title:"Taro.setNavigationBarTitle(option)",sidebar_label:"setNavigationBarTitle"},sidebar:"version-3.x/API",previous:{title:"showNavigationBarLoading",permalink:"/taro/en/docs/apis/ui/navigation-bar/showNavigationBarLoading"},next:{title:"setNavigationBarColor",permalink:"/taro/en/docs/apis/ui/navigation-bar/setNavigationBarColor"}},p=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],s={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dynamically sets the title of the current page."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html"},"Reference"))),(0,i.kt)("h2",{id:"type"},"Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<CallbackResult>\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("h3",{id:"option"},"Option"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Property"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",{style:{textAlign:"center"}},"Required"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"title"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,i.kt)("td",null,"The title of the page")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"complete"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: CallbackResult) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"fail"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: CallbackResult) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The callback function for a failed API call")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"success"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: CallbackResult) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The callback function for a successful API call")))),(0,i.kt)("h2",{id:"sample-code"},"Sample Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.setNavigationBarTitle({\n  title: 'Current Page'\n})\n")),(0,i.kt)("h2",{id:"api-support"},"API Support"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Taro.setNavigationBarTitle"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);