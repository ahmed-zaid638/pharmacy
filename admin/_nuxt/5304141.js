(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{894:function(t,e,n){"use strict";n.r(e);var l=n(475),r=n(86),o={name:"brands",middleware:["common-middleware","auth"],data:function(){return{orderOptions:{created_at:{title:this.$t("category.date")},title:{title:this.$t("index.title")},slug:{title:this.$t("category.slug")}}}},components:{ListPage:l.default},mixins:[r.a],computed:{},methods:{},mounted:function(){}},d=n(15),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("list-page",{ref:"listPage",attrs:{"list-api":"getPages","delete-api":"deletePage","empty-store-variable":"allPages","route-name":"pages",name:t.$t("admin.page"),"order-options":t.orderOptions,gate:"page"},scopedSlots:t._u([{key:"table",fn:function(n){var l=n.list;return[e("tr",{staticClass:"lite-bold"},[e("th",[t._v(t._s(t.$t("index.title")))]),t._v(" "),e("th",[t._v(t._s(t.$t("category.slug")))]),t._v(" "),e("th",[t._v(t._s(t.$t("category.created")))]),t._v(" "),e("th",[t._v(" ")])]),t._v(" "),t._l(l,(function(n,l){return e("tr",{key:l},[e("td",[e("nuxt-link",{staticClass:"link",attrs:{to:"/pages/".concat(n.id)}},[e("h5",{staticClass:"mx-w-300x"},[t._v(t._s(n.title))])])],1),t._v(" "),e("td",[t._v(t._s(n.slug))]),t._v(" "),e("td",[t._v(t._s(n.created))]),t._v(" "),e("td",[t.$can("page","edit")?e("button",{staticClass:"lite-btn",on:{click:function(e){return e.preventDefault(),t.$refs.listPage.editItem(n.id)}}},[t._v(t._s(t.$t("category.edit")))]):t._e(),t._v(" "),t.$can("page","delete")?e("button",{staticClass:"delete-btn lite-btn",on:{click:function(e){return e.preventDefault(),t.$refs.listPage.deleteItem(n.id)}}},[t._v(t._s(t.$t("category.delete")))]):t._e()])])}))]}}])})}),[],!1,null,"19d9e23a",null);e.default=component.exports}}]);