(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{909:function(e,t,n){"use strict";n.r(t);n(32);var l=n(476),r=n(86),d={name:"brands",middleware:["common-middleware","auth"],data:function(){return{orderOptions:{created_at:{title:this.$t("category.date")},name:{title:this.$t("user.name")},email:{title:this.$t("fSale.email")},replied:{title:this.$t("setting.replied")},viewed:{title:this.$t("setting.viewed")}}}},components:{ListPage:l.default},mixins:[r.a],computed:{},methods:{},mounted:function(){}},o=n(15),component=Object(o.a)(d,(function(){var e=this,t=e._self._c;return t("list-page",{ref:"listPage",attrs:{"list-api":"getUserMessages","delete-api":"deleteUserMessage","route-name":"user-messages",name:e.$t("profile.umLower"),gate:"message","add-button":!1,"order-options":e.orderOptions},scopedSlots:e._u([{key:"table",fn:function(n){var l=n.list;return[t("tr",{staticClass:"lite-bold"},[t("th",[e._v(e._s(e.$t("user.name")))]),e._v(" "),t("th",[e._v(e._s(e.$t("fSale.email")))]),e._v(" "),t("th",[e._v(e._s(e.$t("setting.replied")))]),e._v(" "),t("th",[e._v(e._s(e.$t("category.created")))]),e._v(" "),t("th",[e._v(" ")])]),e._v(" "),e._l(l,(function(n,l){return t("tr",{key:l},[t("td",[t("span",{staticClass:"mx-w-300x"},[e._v(e._s(n.name))])]),e._v(" "),t("td",[t("span",{staticClass:"mx-w-300x"},[e._v(e._s(n.email))])]),e._v(" "),t("td",{staticClass:"status",class:{active:1===parseInt(n.replied)}},[t("span",[e._v(e._s(e.getFeatured(n.replied)))])]),e._v(" "),t("td",[e._v(e._s(n.created))]),e._v(" "),t("td",[e.$can("message","view")?t("button",{staticClass:"lite-btn",on:{click:function(t){return t.preventDefault(),e.$refs.listPage.editItem(n.id)}}},[e._v("\n          "+e._s(e.$t("fSale.view"))+"\n        ")]):e._e(),e._v(" "),e.$can("message","delete")?t("button",{staticClass:"delete-btn lite-btn",on:{click:function(t){return t.preventDefault(),e.$refs.listPage.deleteItem(n.id)}}},[e._v("\n          "+e._s(e.$t("category.delete"))+"\n        ")]):e._e()])])}))]}}])})}),[],!1,null,"cdb780d2",null);t.default=component.exports}}]);