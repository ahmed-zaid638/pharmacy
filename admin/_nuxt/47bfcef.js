(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{482:function(e,t){function n(e,t,n){var r,o,c,l,d;function h(){var f=Date.now()-l;f<t&&f>=0?r=setTimeout(h,t-f):(r=null,n||(d=e.apply(c,o),c=o=null))}null==t&&(t=100);var f=function(){c=this,o=arguments,l=Date.now();var f=n&&!r;return r||(r=setTimeout(h,t)),f&&(d=e.apply(c,o),c=o=null),d};return f.clear=function(){r&&(clearTimeout(r),r=null)},f.flush=function(){r&&(d=e.apply(c,o),c=o=null,clearTimeout(r),r=null)},f}n.debounce=n,e.exports=n},492:function(e,t,n){var content=n(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(63).default)("cd7d3818",content,!0,{sourceMap:!1})},498:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(4),c=(n(22),n(18),n(21),n(199),n(23),n(24),n(16),n(7),n(13),n(67)),l=n(482),d=n(49),h=n(10);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var x={name:"TagSearch",data:function(){return{setApi:"setTags",searchedString:"",tagList:null,loading:!1,autoSuggestionOpen:!1,deleteWarning:!1}},props:{tags:{type:String,default:""}},directives:{outsideClick:c.a},components:{Spinner:d.default},watch:{searchedString:Object(l.debounce)((function(){this.fetchingData()}),700)},computed:{tagExists:function(){var e=this;return this.tagList.findIndex((function(t){return t.title===e.searchedString}))>-1},selectedTags:function(){return this.tags?this.tags.split(",").filter((function(e){return e})):[]}},methods:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({deleteKeyPress:function(){this.searchedString||(this.deleteWarning&&this.deleteTag(this.selectedTags[this.selectedTags.length-1]),this.deleteWarning=!this.deleteWarning)},deleteTag:function(e){this.$emit("delete",e)},openResult:function(){this.autoSuggestionOpen=!this.autoSuggestionOpen,this.fetchingData()},saveTag:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.setRequest({params:{title:e.searchedString},api:"setTags"});case 4:t.next=9;break;case 6:return t.prev=6,t.t0=t.catch(1),t.abrupt("return",e.$nuxt.error(t.t0));case 9:e.loading=!1;case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))()},fetchingData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.getRequest({params:{q:e.searchedString},api:"getTags"});case 4:n=t.sent,(data=n.data)&&(e.tagList=data),t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",e.$nuxt.error(t.t0));case 12:e.loading=!1;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},autoSuggestionClose:function(){this.autoSuggestionOpen=this.deleteWarning=!1,this.searchedString=""},emitAddingTag:function(e){-1===this.selectedTags.findIndex((function(t){return t===e}))&&this.$emit("add",e)},clickedItem:function(data){data||(this.saveTag(),data=this.searchedString),this.emitAddingTag(data),this.autoSuggestionClose(),this.$refs.tagSearchInput.focus()}},Object(h.b)("common",["setRequest","getRequest"]))},v=x,w=(n(503),n(15)),component=Object(w.a)(v,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"outside-click",rawName:"v-outside-click",value:e.autoSuggestionClose,expression:"autoSuggestionClose"}],staticClass:"tag-wrapper"},[t("ul",{staticClass:"tags"},[e._l(e.selectedTags,(function(n,r){return t("li",{key:r,class:{warning:e.deleteWarning&&r===e.selectedTags.length-1}},[t("span",{staticClass:"tag"},[e._v("\n        "+e._s(n)+"\n        "),t("span",{staticClass:"close-btn",on:{click:function(t){return e.deleteTag(n)}}},[t("i",{staticClass:"icon close-icon"})])])])})),e._v(" "),t("li",{staticClass:"tag-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchedString,expression:"searchedString"}],ref:"tagSearchInput",attrs:{type:"text",placeholder:"Write here"},domProps:{value:e.searchedString},on:{focus:e.openResult,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.clickedItem({title:e.searchedString}))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteKeyPress()}],input:function(t){t.target.composing||(e.searchedString=t.target.value)}}})])],2),e._v(" "),e.autoSuggestionOpen?t("div",{staticClass:"tag-dropdown"},[e.loading?t("div",{staticClass:"spinner-wrapper"},[t("spinner",{attrs:{radius:40,color:"primary"}})],1):e.tagList?t("ul",[e._l(e.tagList,(function(n,r){return t("li",{key:r},[t("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.clickedItem(n.title)}}},[e._v("\n          "+e._s(n.title)+"\n        ")])])})),e._v(" "),e.searchedString&&!e.tagExists?t("li",[t("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.clickedItem(null)}}},[e._v("\n          "+e._s(e.searchedString)+" ("+e._s(e.$t("error.new"))+")\n        ")])]):e._e()],2):e.searchedString?e._e():t("p",[e._v("\n      "+e._s(e.$t("index.nf"))+"\n    ")])]):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:n(49).default})},503:function(e,t,n){"use strict";n(492)},504:function(e,t,n){var r=n(62)((function(i){return i[1]}));r.push([e.i,".tag-wrapper{border:1px solid #ddd;border-radius:4px;padding:10px 15px;position:relative}.tag-wrapper .tags{display:flex;flex-wrap:wrap}.tag-wrapper .tags .tag-input{flex-grow:1;padding-right:34px;position:relative}.tag-wrapper .tags .tag-input .spinner{position:absolute;right:5px;top:50%;transform:translateY(-50%)}.tag-wrapper .tags .tag-input input{background:none;border:none;box-shadow:none;height:30px;line-height:30px;margin:5px 10px 5px 0;padding:0}.tag-wrapper .tags .tag{align-items:center;background:#eee;border:1px solid #ddd;border-radius:50px;color:#333;display:flex;height:30px;line-height:25px;margin:5px 10px 5px 0;padding:0 30px 0 10px;position:relative}.tag-wrapper .tags .tag .close-btn{background:#ddd;border:1px solid #ddd;color:#333;cursor:pointer;height:20px;line-height:10px;margin-left:5px;margin-top:-10px;position:absolute;right:3px;top:50%;width:20px}.tag-wrapper .tags .tag .close-btn .close-icon{min-width:20px}.tag-wrapper .warning .tag{background:#a12321;border-color:#a12321;color:#fff}.tag-wrapper .tag-dropdown{background:#fff;border-radius:5px;box-shadow:0 3px 10px rgba(0,0,0,.1);left:0;max-height:300px;min-height:100px;overflow:auto;padding:15px 15px 5px;position:absolute;right:0;top:calc(100% + 1px);z-index:1}.tag-wrapper .tag-dropdown li a{border:1px solid #ddd;border-radius:50px;color:#333;height:32px;line-height:30px;margin:0 10px 10px 0;padding:0 20px}.tag-wrapper .tag-dropdown li a:hover{background:#eee}",""]),r.locals={},e.exports=r}}]);