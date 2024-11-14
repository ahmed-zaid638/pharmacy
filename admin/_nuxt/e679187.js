(window.webpackJsonp=window.webpackJsonp||[]).push([[34,21],{468:function(t,e,r){"use strict";r.r(e);r(18),r(21),r(23),r(24),r(16),r(7),r(13);var n=r(4),o=r(10);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var l={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(o.c)("ui",["errors"]))},d=l,f=r(15),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return t.errorData?e("ul",{staticClass:"error-list mb-15"},[e("li",{staticClass:"mb-10"},[t._v(t._s(t.$t("error.feo")))]),t._v(" "),t._l(t.errorData,(function(r,n){return e("li",{key:n},[t._v("\n    "+t._s(r)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},777:function(t,e,r){"use strict";r.r(e);r(18),r(21),r(23),r(24),r(16),r(7),r(13);var n=r(1),o=r(4),c=(r(22),r(10)),l=r(158),d=r(159),f=r(468);function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={name:"FooterLink",data:function(){return{formSubmitting:!1}},props:{result:{type:Object,default:function(){return{about_links:[],service_links:[]}}}},mixins:[],components:{ErrorFormatter:f.default,Dropdown:d.default,AjaxButton:l.default},computed:v({},Object(c.c)("common",["allPages"])),methods:v({saveFooterLinks:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.formSubmitting=!0,e.prev=1,e.next=4,t.setRequest({params:t.result,api:"setFooterLink"});case 4:(data=e.sent)&&t.$emit("result",data),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",t.$nuxt.error(e.t0));case 11:t.formSubmitting=!1;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()},removeItem:function(source,t){var e,r=t.index,n=!0;null!==(e=this.result[source][r])&&void 0!==e&&e.deleted&&(n=!1),this.$emit("remove-item",{source:source,index:r,deleted:n})},updateItem:function(source,t){var e=t.index,r=t.value;this.$emit("update-item",{source:source,index:e,value:r})},addItem:function(source){this.$emit("add-item",{source:source})}},Object(c.b)("common",["setRequest"])),mounted:function(){}},O=r(15),component=Object(O.a)(_,(function(){var t=this,e=t._self._c;return e("div",[e("error-formatter"),t._v(" "),e("p",{staticClass:"info-msg mb-15 mb-sm-15"},[t._v("\n    "+t._s(t.$t("setting.linkMsg"))+"\n  ")]),t._v(" "),e("div",{staticClass:"dply-felx align-start f-wrap"},[e("div",[e("h4",{staticClass:"mb-10"},[t._v("\n        "+t._s(t.$t("setting.servLink"))+"\n      ")]),t._v(" "),t.$can("footer_link","create")?e("button",{staticClass:"lite-btn mb-15",on:{click:function(e){return e.preventDefault(),t.addItem("service_links")}}},[t._v("\n        "+t._s(t.$t("setting.addLink"))+"\n      ")]):t._e(),t._v(" "),t._l(t.result.service_links,(function(r,n){return e("div",{key:n,staticClass:"input-wrapper dply-felx start mb-15 gap-15"},[e("dropdown",{attrs:{disabled:r.deleted,options:t.allPages,"selected-key":r.page_id},on:{clicked:function(e){return t.updateItem("service_links",{index:n,value:e})}}}),t._v(" "),t.$can("footer_link","delete")?e("button",{staticClass:"delete-btn dply-felx",on:{click:function(e){return e.preventDefault(),t.removeItem("service_links",{index:n})}}},[e("i",{staticClass:"icon",class:r.deleted?"undo-icon":"delete-icon"})]):t._e()],1)}))],2),t._v(" "),e("div",[e("h4",{staticClass:"mb-10"},[t._v("\n        "+t._s(t.$t("setting.al"))+"\n      ")]),t._v(" "),t.$can("footer_link","create")?e("button",{staticClass:"lite-btn mb-15",on:{click:function(e){return e.preventDefault(),t.addItem("about_links")}}},[t._v("\n        "+t._s(t.$t("setting.addLink"))+"\n      ")]):t._e(),t._v(" "),t._l(t.result.about_links,(function(r,n){return e("div",{key:n,staticClass:"input-wrapper dply-felx start mb-15"},[e("dropdown",{staticClass:"mr-10",attrs:{disabled:r.deleted,options:t.allPages,"selected-key":r.page_id},on:{clicked:function(e){return t.updateItem("about_links",{index:n,value:e})}}}),t._v(" "),t.$can("footer_link","delete")?e("button",{staticClass:"delete-btn dply-felx",on:{click:function(e){return e.preventDefault(),t.removeItem("about_links",{index:n})}}},[e("i",{staticClass:"icon",class:r.deleted?"undo-icon":"delete-icon"})]):t._e()],1)}))],2)]),t._v(" "),e("div",{staticClass:"dply-felx j-right"},[t.$can("footer_link","edit")?e("ajax-button",{staticClass:"primary-btn",attrs:{type:"button",name:"save",text:t.$t("setting.sv"),"fetching-data":t.formSubmitting},on:{clicked:t.saveFooterLinks}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ErrorFormatter:r(468).default,Dropdown:r(159).default,AjaxButton:r(158).default})}}]);