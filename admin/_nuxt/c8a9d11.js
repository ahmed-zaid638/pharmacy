(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{482:function(e,t){function n(e,t,n){var r,c,l,o,d;function h(){var f=Date.now()-o;f<t&&f>=0?r=setTimeout(h,t-f):(r=null,n||(d=e.apply(l,c),l=c=null))}null==t&&(t=100);var f=function(){l=this,c=arguments,o=Date.now();var f=n&&!r;return r||(r=setTimeout(h,t)),f&&(d=e.apply(l,c),l=c=null),d};return f.clear=function(){r&&(clearTimeout(r),r=null)},f.flush=function(){r&&(d=e.apply(l,c),l=c=null,clearTimeout(r),r=null)},f}n.debounce=n,e.exports=n},679:function(e,t,n){"use strict";n.r(t);n(28),n(160);var r=n(1),c=n(4),l=(n(22),n(18),n(21),n(23),n(24),n(16),n(7),n(13),n(67)),o=n(49),d=n(159),h=n(10),f=n(482);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var v={name:"SearchDropdown",components:{Dropdown:d.default,Spinner:o.default},data:function(){return{selected:"",searched:"",search:"",result:null,open:!1,loading:!1}},props:{currentId:{type:String,default:"title"},titleKey:{type:String,default:"title"},placeholder:{type:String,default:""},preItem:{type:Object,default:null},listApi:{type:String,default:""},selectedText:{type:String,default:""}},directives:{outsideClick:l.a},computed:{showClose:function(){return!!this.search||!!this.selected}},watch:{},methods:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({clearData:function(){this.selected="",this.search="",this.searched="",this.open=!1},clear:function(){this.clearData(),this.fetchingData(!0),this.$emit("clicked",null)},itemClicked:function(e){this.selected=e[this.titleKey],this.open=!1,this.search=e[this.titleKey],this.$emit("clicked",e)},searchData:Object(f.debounce)((function(e){this.searched=this.search,this.fetchingData(!0)}),700),onBlur:function(){this.search=this.selected,this.search||(this.search=this.selectedText)},outsideClickFn:function(){this.open=!1},onFocus:function(){this.search=this.searched,this.fetchingData()},fetchingData:function(){var e=arguments,t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=e.length>0&&void 0!==e[0]&&e[0],t.open=!0,null!==(r=t.result)&&void 0!==r&&r.length&&!c){n.next=16;break}return n.prev=3,t.loading=!0,n.next=7,t.getRequest({params:{q:t.search,per_page:10},api:t.listApi});case 7:l=n.sent,t.result=(null==l?void 0:l.data)||[],t.preItem&&t.result.unshift(t.preItem),t.loading=!1,n.next=16;break;case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",t.$nuxt.error(n.t0));case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))()}},Object(h.b)("common",["getRequest"])),mounted:function(){this.search=this.selectedText}},y=v,w=n(15),component=Object(w.a)(y,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"custom-dropdown"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:e.placeholder,"data-ignore":e.currentId},domProps:{value:e.search},on:{input:[function(t){t.target.composing||(e.search=t.target.value)},e.searchData],blur:e.onBlur,focus:e.onFocus}}),e._v(" "),e.showClose?t("button",{staticClass:"ml-5 close-btn z-10",attrs:{"data-ignore":e.currentId},on:{click:function(t){return t.preventDefault(),e.clear.apply(null,arguments)}}},[t("i",{staticClass:"icon close-icon"})]):e._e(),e._v(" "),e.open?t("div",{directives:[{name:"outside-click",rawName:"v-outside-click",value:e.outsideClickFn,expression:"outsideClickFn"}],staticClass:"dropdown-inner mn-h-200x",attrs:{id:e.currentId}},[e.loading?t("div",{staticClass:"spinner-wrapper"},[t("spinner",{staticClass:"mr-15",attrs:{radius:60,color:"primary"}})],1):e._e(),e._v(" "),t("ul",e._l(e.result,(function(data,n){return t("li",{key:n,on:{click:function(t){return t.preventDefault(),e.itemClicked(data)}}},[e._v("\n        "+e._s(data[e.titleKey])+"\n      ")])})),0)]):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:n(49).default})}}]);