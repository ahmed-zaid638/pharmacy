(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{478:function(e,t){function n(e,t,n){var r,c,o,l,d;function f(){var h=Date.now()-l;h<t&&h>=0?r=setTimeout(f,t-h):(r=null,n||(d=e.apply(o,c),o=c=null))}null==t&&(t=100);var h=function(){o=this,c=arguments,l=Date.now();var h=n&&!r;return r||(r=setTimeout(f,t)),h&&(d=e.apply(o,c),o=c=null),d};return h.clear=function(){r&&(clearTimeout(r),r=null)},h.flush=function(){r&&(d=e.apply(o,c),o=c=null,clearTimeout(r),r=null)},h}n.debounce=n,e.exports=n},500:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(4),o=(n(22),n(18),n(21),n(199),n(23),n(24),n(16),n(7),n(13),n(67)),l=n(478),d=n(49),f=n(10);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var v={name:"TagSearch",data:function(){return{setApi:"setTags",searchedString:"",tagList:null,loading:!1,autoSuggestionOpen:!1,deleteWarning:!1}},props:{tags:{type:String,default:""}},directives:{outsideClick:o.a},components:{Spinner:d.default},watch:{searchedString:Object(l.debounce)((function(){this.fetchingData()}),700)},computed:{tagExists:function(){var e=this;return this.tagList.findIndex((function(t){return t.title===e.searchedString}))>-1},selectedTags:function(){return this.tags?this.tags.split(",").filter((function(e){return e})):[]}},methods:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({deleteKeyPress:function(){this.searchedString||(this.deleteWarning&&this.deleteTag(this.selectedTags[this.selectedTags.length-1]),this.deleteWarning=!this.deleteWarning)},deleteTag:function(e){this.$emit("delete",e)},openResult:function(){this.autoSuggestionOpen=!this.autoSuggestionOpen,this.fetchingData()},saveTag:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.setRequest({params:{title:e.searchedString},api:"setTags"});case 4:t.next=9;break;case 6:return t.prev=6,t.t0=t.catch(1),t.abrupt("return",e.$nuxt.error(t.t0));case 9:e.loading=!1;case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))()},fetchingData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.getRequest({params:{q:e.searchedString},api:"getTags"});case 4:n=t.sent,(data=n.data)&&(e.tagList=data),t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",e.$nuxt.error(t.t0));case 12:e.loading=!1;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},autoSuggestionClose:function(){this.autoSuggestionOpen=this.deleteWarning=!1,this.searchedString=""},emitAddingTag:function(e){-1===this.selectedTags.findIndex((function(t){return t===e}))&&this.$emit("add",e)},clickedItem:function(data){data||(this.saveTag(),data=this.searchedString),this.emitAddingTag(data),this.autoSuggestionClose(),this.$refs.tagSearchInput.focus()}},Object(f.b)("common",["setRequest","getRequest"]))},m=v,S=n(15),component=Object(S.a)(m,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"outside-click",rawName:"v-outside-click",value:e.autoSuggestionClose,expression:"autoSuggestionClose"}],staticClass:"tag-wrapper"},[t("ul",{staticClass:"tags"},[e._l(e.selectedTags,(function(n,r){return t("li",{key:r,class:{warning:e.deleteWarning&&r===e.selectedTags.length-1}},[t("span",{staticClass:"tag"},[e._v("\n        "+e._s(n)+"\n        "),t("span",{staticClass:"close-btn",on:{click:function(t){return e.deleteTag(n)}}},[t("i",{staticClass:"icon close-icon"})])])])})),e._v(" "),t("li",{staticClass:"tag-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchedString,expression:"searchedString"}],ref:"tagSearchInput",attrs:{type:"text",placeholder:"Write here"},domProps:{value:e.searchedString},on:{focus:e.openResult,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.clickedItem({title:e.searchedString}))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteKeyPress()}],input:function(t){t.target.composing||(e.searchedString=t.target.value)}}})])],2),e._v(" "),e.autoSuggestionOpen?t("div",{staticClass:"tag-dropdown"},[e.loading?t("div",{staticClass:"spinner-wrapper"},[t("spinner",{attrs:{radius:40,color:"primary"}})],1):e.tagList?t("ul",[e._l(e.tagList,(function(n,r){return t("li",{key:r},[t("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.clickedItem(n.title)}}},[e._v("\n          "+e._s(n.title)+"\n        ")])])})),e._v(" "),e.searchedString&&!e.tagExists?t("li",[t("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.clickedItem(null)}}},[e._v("\n          "+e._s(e.searchedString)+" ("+e._s(e.$t("error.new"))+")\n        ")])]):e._e()],2):e.searchedString?e._e():t("p",[e._v("\n      "+e._s(e.$t("index.nf"))+"\n    ")])]):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:n(49).default})}}]);