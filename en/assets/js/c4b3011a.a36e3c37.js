"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[19300],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=l.createContext({}),u=function(t){var e=l.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=u(t.components);return l.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=u(n),k=r,h=p["".concat(c,".").concat(k)]||p[k]||d[k]||o;return n?l.createElement(h,a(a({ref:e},s),{},{components:n})):l.createElement(h,a({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=p;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25581:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var l=n(83117),r=n(80102),o=(n(67294),n(3905)),a=["components"],i={title:"Taro.showModal(option)",sidebar_label:"showModal"},c=void 0,u={unversionedId:"apis/ui/interaction/showModal",id:"version-3.x/apis/ui/interaction/showModal",title:"Taro.showModal(option)",description:"Displays the modal dialog box.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/ui/interaction/showModal.md",sourceDirName:"apis/ui/interaction",slug:"/apis/ui/interaction/showModal",permalink:"/taro/en/docs/apis/ui/interaction/showModal",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/ui/interaction/showModal.md",tags:[],version:"3.x",frontMatter:{title:"Taro.showModal(option)",sidebar_label:"showModal"},sidebar:"version-3.x/API",previous:{title:"showToast",permalink:"/taro/en/docs/apis/ui/interaction/showToast"},next:{title:"showLoading",permalink:"/taro/en/docs/apis/ui/interaction/showLoading"}},s=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],d={toc:s};function p(t){var e=t.components,n=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Displays the modal dialog box."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Android 6.7.2 and below, when you tap ",(0,o.kt)("strong",{parentName:"li"},"Cancel")," or ",(0,o.kt)("strong",{parentName:"li"},"Mask"),', the callback will fail with the errMsg of "fail cancel".'),(0,o.kt)("li",{parentName:"ul"},"For Android 6.7.2 & above and iOS, tapping ",(0,o.kt)("strong",{parentName:"li"},"Mask"),' will not close the modal dialog box, so avoid using the "Cancel" branch to implement the business logic.')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ui/interaction/wx.showModal.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"title"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Prompt title")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"content"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Prompt content")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"cancelColor"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,'The text color of the "Cancel" button, which must be a color string in hexadecimal format')),(0,o.kt)("tr",null,(0,o.kt)("td",null,"cancelText"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,'The text of the "Cancel" button, not more than 4 characters')),(0,o.kt)("tr",null,(0,o.kt)("td",null,"confirmColor"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,'The text color of the "OK" button, which must be a color string in hexadecimal format')),(0,o.kt)("tr",null,(0,o.kt)("td",null,"confirmText"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,'The text of the "OK "button, not more than 4 characters')),(0,o.kt)("tr",null,(0,o.kt)("td",null,"showCancel"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,'Indicates whether to display the "Cancel" button')),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a successful API call")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a failed API call")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")))),(0,o.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"cancel"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,'When the value is "true", it indicates that the user tapped the "Cancel" button. (this is used for Android system to distinguish whether "Mask" or "Cancel" is tapped)')),(0,o.kt)("tr",null,(0,o.kt)("td",null,"confirm"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,'When the value is "true", it indicates that the user tapped the "OK" button.')),(0,o.kt)("tr",null,(0,o.kt)("td",null,"errMsg"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"call result")))),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.showModal({\n  title: 'Prompt',\n  content: 'This is a modal pop-up window',\n  success (res) {\n    if (res.confirm) {\n      console.log('\"OK\" is tapped')\n    } else if (res.cancel) {\n      console.log('\"Cancel\" is tapped')\n    }\n  }\n})\n")),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.showModal"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);