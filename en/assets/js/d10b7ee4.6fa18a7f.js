"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[7105],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=c(n),k=a,h=s["".concat(u,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(h,i(i({ref:e},p),{},{components:n})):r.createElement(h,i({ref:e},p))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},78101:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),i=["components"],o={title:"Taro.startSoterAuthentication(option)",sidebar_label:"startSoterAuthentication"},u=void 0,c={unversionedId:"apis/open-api/soter/startSoterAuthentication",id:"version-3.x/apis/open-api/soter/startSoterAuthentication",title:"Taro.startSoterAuthentication(option)",description:"Starts SOTER biometric authentication. For the verification procedure, see description.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/open-api/soter/startSoterAuthentication.md",sourceDirName:"apis/open-api/soter",slug:"/apis/open-api/soter/startSoterAuthentication",permalink:"/taro/en/docs/apis/open-api/soter/startSoterAuthentication",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/open-api/soter/startSoterAuthentication.md",tags:[],version:"3.x",frontMatter:{title:"Taro.startSoterAuthentication(option)",sidebar_label:"startSoterAuthentication"},sidebar:"version-3.x/API",previous:{title:"chooseInvoice",permalink:"/taro/en/docs/apis/open-api/invoice/chooseInvoice"},next:{title:"checkIsSupportSoterAuthentication",permalink:"/taro/en/docs/apis/open-api/soter/checkIsSupportSoterAuthentication"}},p=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3},{value:"requestAuthModes",id:"requestauthmodes",children:[{value:"API Support",id:"api-support",children:[],level:4}],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support-1",children:[],level:2}],d={toc:p};function s(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Starts SOTER biometric authentication. For the verification procedure, see ",(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/bio-auth.html"},"description"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"resultJSON description")),(0,l.kt)("p",null,"This data is the JSON data obtained in the device's TEE by combining the incoming challenge parameter and other security information in the TEE. The fields are described as follows."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"raw"),(0,l.kt)("td",{parentName:"tr",align:null},"The challenge factor passed in by the caller")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fid"),(0,l.kt)("td",{parentName:"tr",align:null},"(Supported only on Android) The ID of the biometric information for the current biometric recognition and authentication (for example, for fingerprint recognition, this field indicates the ID of fingerprint information in this device).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"counter"),(0,l.kt)("td",{parentName:"tr",align:null},"A parameter of the anti-replay feature")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tee_n"),(0,l.kt)("td",{parentName:"tr",align:null},"TEE name (for example, Qualcomm or trustonic)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tee_v"),(0,l.kt)("td",{parentName:"tr",align:null},"TEE version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fp_n"),(0,l.kt)("td",{parentName:"tr",align:null},"The provider of the fingerprints and related logic modules (such as the FPC)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fp_v"),(0,l.kt)("td",{parentName:"tr",align:null},"The version of the fingerprints and related modules")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cpu_id"),(0,l.kt)("td",{parentName:"tr",align:null},"The unique device ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uid"),(0,l.kt)("td",{parentName:"tr",align:null},"App ID, which is similar to the UID defined on Android.")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/open-api/soter/wx.startSoterAuthentication.html"},"Reference"))),(0,l.kt)("h2",{id:"type"},"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"challenge"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Challenge factor, which is the key recognition information of a string used for signing that is prepared by the caller for the current biometric authentication. It serves as a part of ",(0,l.kt)("code",null,"resultJSON")," to help the caller recognize this request. For example, if the user is requested to authorize and confirm an order, the order number can be entered in this parameter.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"requestAuthModes"),(0,l.kt)("td",null,(0,l.kt)("code",null,'("fingerPrint" | "facial" | "speech")[]')),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Accepted biometric authentication methods in the request")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"authContent"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Verification description, i.e. the hint in a dialog box displayed on the UI during recognition.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a failed API call")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: Result) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a successful API call")))),(0,l.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"authMode"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Biometric authentication method")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"resultJSON"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"The device security information (for example, the name and version of the Trusted Execution Environment (TEE), and anti-replay parameters) obtained in the TEE and information for this authentication (for example, the fingerprint ID. It is supported only on Android).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"resultJSONSignature"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"The signature (SHA-256 with RSA/PSS, saltlen=20) on ",(0,l.kt)("code",null,"resultJSON")," generated using the SOTER security key")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errCode"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Error code")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Error message")))),(0,l.kt)("h3",{id:"requestauthmodes"},"requestAuthModes"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"fingerPrint"),(0,l.kt)("td",null,"Fingerprint recognition")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"facial"),(0,l.kt)("td",null,"Face recognition")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"speech"),(0,l.kt)("td",null,"Voiceprint recognition (not supported)")))),(0,l.kt)("h4",{id:"api-support"},"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"requestAuthModes.speech"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h2",{id:"sample-code"},"Sample Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.startSoterAuthentication({\n   requestAuthModes: ['fingerPrint'],\n   challenge: '123456',\n   authContent: 'Unlock with your fingerprint',\n   success: function (res) { }\n})\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "raw":"msg",\n  "fid":"2",\n  "counter":123,\n  "tee_n":"TEE Name",\n  "tee_v":"TEE Version",\n  "fp_n":"Fingerprint Sensor Name",\n  "fp_v":"Fingerprint Sensor Version",\n  "cpu_id":"CPU Id",\n  "uid":"21"\n}\n')),(0,l.kt)("h2",{id:"api-support-1"},"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.startSoterAuthentication"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);