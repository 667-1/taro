"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[99051],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return s}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),d=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=d(t.components);return l.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,k=c(t,["components","mdxType","originalType","parentName"]),p=d(n),s=r,m=p["".concat(o,".").concat(s)]||p[s]||u[s]||a;return n?l.createElement(m,i(i({ref:e},k),{},{components:n})):l.createElement(m,i({ref:e},k))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(t,e,n){var l=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return k}});var l=n(83117),r=n(67294),a=n(72389),i=n(24726),c=n(86010),o="tabItem_LplD";function d(t){var e,n,a,d=t.lazy,k=t.block,u=t.defaultValue,p=t.values,s=t.groupId,m=t.className,h=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:h.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),y=(0,i.lx)(g,(function(t,e){return t.value===e.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(e=null!=u?u:null==(n=h.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=h[0])?void 0:a.props.value;if(null!==v&&!g.some((function(t){return t.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),b=N.tabGroupChoices,f=N.setTabGroupChoices,P=(0,r.useState)(v),x=P[0],C=P[1],w=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var A=b[s];null!=A&&A!==x&&g.some((function(t){return t.value===A}))&&C(A)}var D=function(t){var e=t.currentTarget,n=w.indexOf(e),l=g[n].value;l!==x&&(T(e),C(l),null!=s&&f(s,l))},S=function(t){var e,n=null;switch(t.key){case"ArrowRight":var l=w.indexOf(t.currentTarget)+1;n=w[l]||w[0];break;case"ArrowLeft":var r=w.indexOf(t.currentTarget)-1;n=w[r]||w[w.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":k},m)},g.map((function(t){var e=t.value,n=t.label,a=t.attributes;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(t){return w.push(t)},onKeyDown:S,onFocus:D,onClick:D},a,{className:(0,c.Z)("tabs__item",o,null==a?void 0:a.className,{"tabs__item--active":x===e})}),null!=n?n:e)}))),d?(0,r.cloneElement)(h.filter((function(t){return t.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==x})}))))}function k(t){var e=(0,a.Z)();return r.createElement(d,(0,l.Z)({key:String(e)},t))}},75302:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return k},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var l=n(83117),r=n(80102),a=(n(67294),n(3905)),i=n(9877),c=n(58215),o=["components"],d={title:"Picker",sidebar_label:"Picker"},k=void 0,u={unversionedId:"components/forms/picker",id:"version-3.x/components/forms/picker",title:"Picker",description:"The scroll picker that pops up from the lower part.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/forms/picker.md",sourceDirName:"components/forms",slug:"/components/forms/picker",permalink:"/taro/en/docs/components/forms/picker",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/forms/picker.md",tags:[],version:"3.x",frontMatter:{title:"Picker",sidebar_label:"Picker"},sidebar:"version-3.x/components",previous:{title:"Label",permalink:"/taro/en/docs/components/forms/label"},next:{title:"PickerView",permalink:"/taro/en/docs/components/forms/picker-view"}},p=[{value:"Type",id:"type",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"PickerStandardProps",id:"pickerstandardprops",children:[{value:"Property Support",id:"property-support",children:[],level:3},{value:"mode",id:"mode",children:[],level:3}],level:2},{value:"PickerSelectorProps",id:"pickerselectorprops",children:[{value:"Property Support",id:"property-support-1",children:[],level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail",children:[],level:3}],level:2},{value:"PickerMultiSelectorProps",id:"pickermultiselectorprops",children:[{value:"Property Support",id:"property-support-2",children:[],level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail-1",children:[],level:3},{value:"onColumnChangeEvnetDetail",id:"oncolumnchangeevnetdetail",children:[],level:3}],level:2},{value:"PickerTimeProps",id:"pickertimeprops",children:[{value:"Property Support",id:"property-support-3",children:[],level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail-2",children:[],level:3}],level:2},{value:"PickerDateProps",id:"pickerdateprops",children:[{value:"Property Support",id:"property-support-4",children:[],level:3},{value:"fields",id:"fields",children:[],level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail-3",children:[],level:3}],level:2},{value:"PickerRegionProps",id:"pickerregionprops",children:[{value:"Property Support",id:"property-support-5",children:[],level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail-4",children:[],level:3}],level:2},{value:"API Support",id:"api-support",children:[],level:2}],s={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The scroll picker that pops up from the lower part."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/picker.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<PickerSelectorProps | PickerMultiSelectorProps | PickerTimeProps | PickerDateProps | PickerRegionProps>\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(i.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export default class PagePicker extends Component {\n  state = {\n    selector: ['United States', 'China', 'Brazil', 'Japan'],\n    selectorChecked: 'United States',\n    timeSel: '12:01',\n    dateSel: '2018-04-22'\n  }\n\n  onChange = e => {\n    this.setState({\n      selectorChecked: this.state.selector[e.detail.value]\n    })\n  }\n\n  onTimeChange = e => {\n    this.setState({\n      timeSel: e.detail.value\n    })\n  }\n  onDateChange = e => {\n    this.setState({\n      dateSel: e.detail.value\n    })\n  }\n\n  render () {\n    return (\n      <View className='container'>\n        <View className='page-body'>\n          <View className='page-section'>\n            <Text>Province, city, and district picker</Text>\n            <View>\n              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>\n                <View className='picker'>\n                  Currently selected: {this.state.selectorChecked}\n                </View>\n              </Picker>\n            </View>\n          </View>\n          <View className='page-section'>\n            <Text>Time picker</Text>\n            <View>\n              <Picker mode='time' onChange={this.onTimeChange}>\n                <View className='picker'>\n                  Currently selected: {this.state.timeSel}\n                </View>\n              </Picker>\n            </View>\n          </View>\n          <View className='page-section'>\n            <Text>Date picker</Text>\n            <View>\n              <Picker mode='date' onChange={this.onDateChange}>\n                <View className='picker'>\n                  Currently selected: {this.state.dateSel}\n                </View>\n              </Picker>\n            </View>\n          </View>\n        </View>\n      </View>\n    )\n  }\n}\n"))),(0,a.kt)(c.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="page-body">\n    <view class="page-section">\n      <text>Province, city, and district picker</text>\n      <view>\n        <picker mode="selector" :range="selector" @change="onChange">\n          <view class="picker">\n            Currently selected: {{selectorChecked}}\n          </view>\n        </picker>\n      </view>\n    </view>\n    <view class="page-section">\n      <text>Time picker</text>\n      <view>\n        <picker mode="time" @change="onTimeChange">\n          <view class="picker">\n            Currently selected: {{timeSel}}\n          </view>\n        </picker>\n      </view>\n    </view>\n    <view class="page-section">\n      <text>Date picker</text>\n      <view>\n        <picker mode="date" @change="onDateChange">\n          <view class="picker">\n            Currently selected: {{dateSel}}\n          </view>\n        </picker>\n      </view>\n    </view>\n  </view>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        selector: [\'United States\', \'China\', \'Brazil\', \'Japan\'],\n        selectorChecked: \'United States\',\n        timeSel: \'12:01\',\n        dateSel: \'2018-04-22\'\n      }\n    },\n    methods: {\n      onChange: function(e) {\n        this.selectorChecked = this.selector[e.detail.value]\n      },\n\n      onTimeChange: function(e) {\n        this.timeSel = e.detail.value\n      },\n\n      onDateChange: function(e) {\n        this.dateSel = e.detail.value\n      }\n    }\n  }\n<\/script>\n\n')))),(0,a.kt)("h2",{id:"pickerstandardprops"},"PickerStandardProps"),(0,a.kt)("p",null,"Selector General Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Default"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"selector" | "multiSelector" | "time" | "date" | "region"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"selector"')),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The type of the picker")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"disabled"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to disable the component.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onCancel"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered when selection is canceled")))),(0,a.kt)("h3",{id:"property-support"},"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerStandardProps.mode"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerStandardProps.disabled"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerStandardProps.onCancel"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,a.kt)("h3",{id:"mode"},"mode"),(0,a.kt)("p",null,"Valid values of mode"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"selector"),(0,a.kt)("td",null,"Common picker")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"multiSelector"),(0,a.kt)("td",null,"Multi-column picker")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"time"),(0,a.kt)("td",null,"Time picker")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"date"),(0,a.kt)("td",null,"Date picker")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"region"),(0,a.kt)("td",null,"Province, city, and district picker")))),(0,a.kt)("h2",{id:"pickerselectorprops"},"PickerSelectorProps"),(0,a.kt)("p",null,"Common picker: mode = selector"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Default"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"selector"')),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The type of the picker")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"range"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string[] | number[] | Object[]")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"[]")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"Valid when the mode is selector or multiSelector.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"rangeKey"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies the key value of the object as the content to be displayed on the picker when range is an object array.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"Indicates the sequence number (starting from 0 in the subscript) of the item selected in range.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"A change event is triggered when value is changed. event.detail = ","{value}")))),(0,a.kt)("h3",{id:"property-support-1"},"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerSelectorProps.range"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerSelectorProps.rangeKey"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerSelectorProps.value"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerSelectorProps.onChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,a.kt)("h3",{id:"onchangeeventdetail"},"onChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string | number")),(0,a.kt)("td",null,"Indicates the subscript of the changed value")))),(0,a.kt)("h2",{id:"pickermultiselectorprops"},"PickerMultiSelectorProps"),(0,a.kt)("p",null,"Multi-column picker: mode = multiSelector"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Default"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"multiSelector"')),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The type of the picker")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"range"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string[][] | number[][] | Object[][]")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"[]")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"Valid when the mode is selector or multiSelector.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"rangeKey"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies the key value of the object as the content to be displayed on the picker when range is an object array.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string[] | number[] | Object[]")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"[]")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"Indicates the sequence number (starting from 0 in the subscript) of the item selected in range.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"A change event is triggered when value is changed. event.detail = ","{value}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onColumnChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onColumnChangeEvnetDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered when the column changes.")))),(0,a.kt)("h3",{id:"property-support-2"},"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerMultiSelectorProps.range"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerMultiSelectorProps.rangeKey"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerMultiSelectorProps.value"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerMultiSelectorProps.onChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerMultiSelectorProps.onColumnChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,a.kt)("h3",{id:"onchangeeventdetail-1"},"onChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number[]")),(0,a.kt)("td",null,"Indicates the subscript of the changed value")))),(0,a.kt)("h3",{id:"oncolumnchangeevnetdetail"},"onColumnChangeEvnetDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"column"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Indicates which column was changed (subscripts start from 0)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Indicates the subscript of the changed value")))),(0,a.kt)("h2",{id:"pickertimeprops"},"PickerTimeProps"),(0,a.kt)("p",null,"Time picker: mode = time"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"time"')),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The type of the picker")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,'The selected time, in the form of "hh:mm".')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"start"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,'The start of the valid time range, in the form of "hh:mm".')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"end"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,'The end of the valid time range, in the form of "hh:mm".')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"A change event triggered when the value is changed. event.detail = ","{value}")))),(0,a.kt)("h3",{id:"property-support-3"},"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerTimeProps.value"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerTimeProps.start"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerTimeProps.end"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerTimeProps.onChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,a.kt)("h3",{id:"onchangeeventdetail-2"},"onChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Indicates the selected time")))),(0,a.kt)("h2",{id:"pickerdateprops"},"PickerDateProps"),(0,a.kt)("p",null,"Date picker: mode = date"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Default"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"date"')),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The type of the picker")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,'The selected date, in the form of "YYYY-MM-DD". ')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"start"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,'The start of the valid date range, in the form of "YYYY-MM-DD".')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"end"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,'The end of the valid date range, in the form of "YYYY-MM-DD".')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fields"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"year" | "month" | "day"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"day"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,'The granularity of the picker. Valid values include "year", "month", and "day".')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"vA change event triggered when the value is changed. event.detail = ","{value}")))),(0,a.kt)("h3",{id:"property-support-4"},"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerDateProps.value"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerDateProps.start"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerDateProps.end"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerDateProps.fields"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerDateProps.onChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,a.kt)("h3",{id:"fields"},"fields"),(0,a.kt)("p",null,"Valid values of fields"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"year"),(0,a.kt)("td",null,"The granularity of the picker is year.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"month"),(0,a.kt)("td",null,"The granularity of the picker is month.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"day"),(0,a.kt)("td",null,"The granularity of the picker is day.")))),(0,a.kt)("h3",{id:"onchangeeventdetail-3"},"onChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Indicates the selected date")))),(0,a.kt)("h2",{id:"pickerregionprops"},"PickerRegionProps"),(0,a.kt)("p",null,"Province, city, and district picker: mode = region"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Default"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"region"')),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The type of the picker")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string[]")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"[]")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The selected province, city, and district. The first value in each column is selected by default.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"customItem"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies a custom item to be added to the top of each column.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"A change event triggered when the value is changed, event.detail = ","{value, code, postcode}",". The code field refers to the statistical zoning code, and the postcode field refers to the post code.")))),(0,a.kt)("h3",{id:"property-support-5"},"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerRegionProps.value"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerRegionProps.customItem"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PickerRegionProps.onChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,a.kt)("h3",{id:"onchangeeventdetail-4"},"onChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string[]")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"Indicates the selected province and city")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"code"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string[]")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"Zone Codes for Statistics")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"postcode"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Postal Code")))),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ByteDance Micro-App"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Picker"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}m.isMDXComponent=!0}}]);