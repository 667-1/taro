"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[94290],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(n),k=o,m=d["".concat(c,".").concat(k)]||d[k]||s[k]||a;return n?r.createElement(m,l(l({ref:e},u),{},{components:n})):r.createElement(m,l({ref:e},u))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61928:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=["components"],i={title:"Taro.showLoading(option)",sidebar_label:"showLoading"},c=void 0,p={unversionedId:"apis/ui/interaction/showLoading",id:"version-3.x/apis/ui/interaction/showLoading",title:"Taro.showLoading(option)",description:"Displays the loading prompt box. Taro.hideLoading must be called to close the prompt box.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/ui/interaction/showLoading.md",sourceDirName:"apis/ui/interaction",slug:"/apis/ui/interaction/showLoading",permalink:"/taro/en/docs/apis/ui/interaction/showLoading",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/ui/interaction/showLoading.md",tags:[],version:"3.x",frontMatter:{title:"Taro.showLoading(option)",sidebar_label:"showLoading"},sidebar:"version-3.x/API",previous:{title:"showModal",permalink:"/taro/en/docs/apis/ui/interaction/showModal"},next:{title:"showActionSheet",permalink:"/taro/en/docs/apis/ui/interaction/showActionSheet"}},u=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],s={toc:u};function d(t){var e=t.components,n=(0,o.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Displays the loading prompt box. ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.hideLoading")," must be called to close the prompt box."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Either ",(0,a.kt)("inlineCode",{parentName:"li"},"Taro.showLoading")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Taro.showToast")," can be displayed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Taro.showLoading")," should be paired with ",(0,a.kt)("inlineCode",{parentName:"li"},"Taro.hideLoading"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ui/interaction/wx.showLoading.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<CallbackResult>\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"title"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"Prompt content")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"mask"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Indicates whether to display a transparent mask to prevent touch penetration")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a failed API call")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a successful API call")))),(0,a.kt)("h2",{id:"sample-code"},"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.showLoading({\n  title: 'loading',\n})\nsetTimeout(function () {\n  Taro.hideLoading()\n}, 2000)\n")),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.showLoading"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);