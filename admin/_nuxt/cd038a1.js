(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{473:function(t,e,n){"use strict";n(124),n(50);e.a={data:function(){return{itemList:[],cbList:[]}},methods:{checkAll:function(t){t.target.checked?this.cbList=this.itemList.map((function(i){return i.id})):this.cbList=[]},deleteBulk:function(){var t;null!==(t=this.cbList)&&void 0!==t&&t.length&&this.$refs.listPage.deleteItem(this.cbList.join(","))}}}},885:function(t,e,n){"use strict";n.r(e);n(37),n(44);var c=n(475),r=n(86),l=n(473),d={name:"rating-reviews",middleware:["common-middleware","auth"],data:function(){return{userObj:{created_at:{title:this.$t("category.date")},name:{title:this.$t("user.name")},email:{title:this.$t("fSale.email")}}}},components:{ListPage:c.default},mixins:[r.a,l.a],computed:{},methods:{},mounted:function(){}},o=n(15),component=Object(o.a)(d,(function(){var t=this,e=t._self._c;return e("list-page",{ref:"listPage",attrs:{"list-api":"getGuestUsers","delete-api":"deleteGuestUser","route-name":"guest-users",name:t.$t("user.users"),gate:"user","add-button":!1,"order-options":t.userObj},on:{"delete-bulk":t.deleteBulk,list:function(e){t.itemList=e}},scopedSlots:t._u([{key:"table",fn:function(n){var c=n.list;return[e("tr",{staticClass:"lite-bold"},[e("th",[e("input",{attrs:{type:"checkbox"},on:{change:t.checkAll}})]),t._v(" "),e("th",[t._v(t._s(t.$t("profile.id")))]),t._v(" "),e("th",[t._v(t._s(t.$t("user.name")))]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.email")))]),t._v(" "),e("th",[t._v(t._s(t.$t("category.created")))]),t._v(" "),e("th")]),t._v(" "),t._l(c,(function(n,c){return e("tr",{key:c,class:{"new-data":!parseInt(n.viewed)}},[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cbList,expression:"cbList"}],attrs:{type:"checkbox"},domProps:{value:n.id,checked:Array.isArray(t.cbList)?t._i(t.cbList,n.id)>-1:t.cbList},on:{change:function(e){var c=t.cbList,r=e.target,l=!!r.checked;if(Array.isArray(c)){var d=n.id,o=t._i(c,d);r.checked?o<0&&(t.cbList=c.concat([d])):o>-1&&(t.cbList=c.slice(0,o).concat(c.slice(o+1)))}else t.cbList=l}}})]),t._v(" "),e("td",[t._v(t._s(n.id))]),t._v(" "),e("td",[e("span",{staticClass:"mx-w-300x"},[t._v(t._s(t.getDataFromObject(n,"name","n/a")))])]),t._v(" "),e("td",[e("span",{staticClass:"mx-w-300x"},[t._v(t._s(t.getDataFromObject(n,"email","n/a")))])]),t._v(" "),e("td",[t._v(t._s(n.created))]),t._v(" "),e("td",[t.$can("user","delete")?e("button",{staticClass:"delete-btn lite-btn",on:{click:function(e){return e.preventDefault(),t.$refs.listPage.deleteItem(n.id)}}},[t._v(t._s(t.$t("category.delete")))]):t._e()])])}))]}}])})}),[],!1,null,"5a1413b5",null);e.default=component.exports}}]);