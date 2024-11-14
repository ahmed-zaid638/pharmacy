(window.webpackJsonp=window.webpackJsonp||[]).push([[142,23,41,65],{468:function(t,e,n){"use strict";n.r(e);n(18),n(21),n(23),n(24),n(16),n(7),n(13);var r=n(4),l=n(10);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var c={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(l.c)("ui",["errors"]))},d=c,f=n(15),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return t.errorData?e("ul",{staticClass:"error-list mb-15"},[e("li",{staticClass:"mb-10"},[t._v(t._s(t.$t("error.feo")))]),t._v(" "),t._l(t.errorData,(function(n,r){return e("li",{key:r},[t._v("\n    "+t._s(n)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},485:function(t,e,n){"use strict";n.r(e);var r=n(1),l=(n(22),n(468)),o={name:"SettingLayout",middleware:["common-middleware","auth"],data:function(){return{tabs:[{title:this.$t("setting.cur"),tabId:"currency"},{title:this.$t("list.addr"),tabId:"address"},{title:this.$t("list.lang"),tabId:"languages"},{title:this.$t("list.sl"),tabId:"social-login"},{title:this.$t("list.smtp"),tabId:"smtp"},{title:this.$t("title.ana"),tabId:"analytics"},{title:this.$t("list.payment"),tabId:"payment"},{title:this.$t("list.ms"),tabId:"media-storage"},{title:this.$t("dataPage.mis"),tabId:"miscellaneous"},{title:this.$t("ship.pl"),tabId:"plugins"},{title:this.$t("setting.cClear"),tabId:"clear-cache"}]}},props:{activeRoute:{type:String}},mixins:[],components:{ErrorFormatter:l.default},computed:{},methods:{},created:function(){},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},c=n(15),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab-sidebar pos-rel"},[e("h5",{staticClass:"title bold"},[t._v("\n    "+t._s(t.$t("list.set"))+"\n  ")]),t._v(" "),e("div",{staticClass:"dply-felx"},[e("ul",{staticClass:"left-area"},t._l(t.tabs,(function(n,r){return e("li",{key:r,class:{active:n.tabId===t.activeRoute}},[e("nuxt-link",{attrs:{to:"/setting/".concat(n.tabId)}},[t._v("\n          "+t._s(n.title)+"\n        ")])],1)})),0),t._v(" "),e("div",{staticClass:"right-area"},[e("error-formatter"),t._v(" "),t._t("rightArea")],2)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ErrorFormatter:n(468).default})},789:function(t,e,n){"use strict";n.r(e);n(32);var r=n(1),l=(n(22),n(86)),o=n(475),c={name:"LanguageSetting",data:function(){return{orderOptions:{created_at:{title:this.$t("category.date")},name:{title:this.$t("user.name")},code:{title:this.$t("setting.code")},direction:{title:this.$t("setting.dir")},default:{title:this.$t("admin.default")},status:{title:this.$t("category.status")}}}},props:{},mixins:[l.a],components:{ListPage:o.default},computed:{},methods:{},created:function(){},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},d=n(15),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return t.$can("language","view")?e("list-page",{ref:"listPage",attrs:{"list-api":"getLanguages","delete-api":"deleteLanguage","route-name":"setting/languages",name:t.$t("profile.langLower"),gate:"language","order-options":t.orderOptions},scopedSlots:t._u([{key:"table",fn:function(n){var r=n.list;return[e("tr",{staticClass:"lite-bold"},[e("th",[t._v(t._s(t.$t("user.name")))]),t._v(" "),e("th",[t._v(t._s(t.$t("setting.code")))]),t._v(" "),e("th",[t._v(t._s(t.$t("setting.dir")))]),t._v(" "),e("th",[t._v(t._s(t.$t("admin.default")))]),t._v(" "),e("th",[t._v(t._s(t.$t("category.status")))]),t._v(" "),e("th",[t._v(" ")])]),t._v(" "),t._l(r,(function(n,r){return e("tr",{key:r},[e("td",[e("nuxt-link",{staticClass:"link",attrs:{to:"/setting/languages/".concat(n.id)}},[e("h5",{staticClass:"mx-w-300x"},[t._v(t._s(n.name))])])],1),t._v(" "),e("td",[t._v(t._s(n.code))]),t._v(" "),e("td",[t._v(t._s(n.direction))]),t._v(" "),e("td",{staticClass:"status",class:{active:1==n.default}},[e("span",[t._v(t._s(t.getBoolean(n.default)))])]),t._v(" "),e("td",{staticClass:"status",class:{active:1==n.status}},[e("span",[t._v(t._s(t.getStatus(n.status)))])]),t._v(" "),e("td",[t.$can("language","edit")?e("button",{staticClass:"lite-btn",on:{click:function(e){return e.preventDefault(),t.$refs.listPage.editItem(n.id)}}},[t._v("Edit\n        ")]):t._e(),t._v(" "),t.$can("language","delete")?e("button",{staticClass:"delete-btn lite-btn",on:{click:function(e){return e.preventDefault(),t.$refs.listPage.deleteItem(n.id)}}},[t._v("\n          "+t._s(t.$t("category.delete"))+"\n        ")]):t._e()])])}))]}}],null,!1,3928362485)}):t._e()}),[],!1,null,null,null);e.default=component.exports},921:function(t,e,n){"use strict";n.r(e);var r=n(1),l=(n(22),n(485)),o={middleware:["common-middleware","auth"],data:function(){return{}},props:{},mixins:[],components:{LanguageSetting:n(789).default,SettingLayout:l.default},computed:{},methods:{},created:function(){},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},c=n(15),component=Object(c.a)(o,(function(){var t=this._self._c;return t("setting-layout",{staticClass:"mb-5",attrs:{"active-route":"languages"},scopedSlots:this._u([{key:"rightArea",fn:function(){return[t("language-setting")]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports}}]);