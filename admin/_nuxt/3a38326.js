(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{473:function(t,e,n){"use strict";n(124),n(50);e.a={data:function(){return{itemList:[],cbList:[]}},methods:{checkAll:function(t){t.target.checked?this.cbList=this.itemList.map((function(i){return i.id})):this.cbList=[]},deleteBulk:function(){var t;null!==(t=this.cbList)&&void 0!==t&&t.length&&this.$refs.listPage.deleteItem(this.cbList.join(","))}}}},907:function(t,e,n){"use strict";n.r(e);n(37),n(44),n(28),n(64);var r=n(475),c=n(86),l=n(721),o=n(473),d={name:"rating-reviews",middleware:["common-middleware","auth"],data:function(){return{userObj:{created_at:{title:this.$t("category.date")},email:{title:this.$t("fSale.email")}}}},components:{TableTop:l.default,ListPage:r.default},mixins:[c.a,o.a],computed:{sendEmailRoute:function(){return"".concat(this.$route.path.replace(/\/$/,""),"/send-email")}},methods:{},mounted:function(){}},m=n(15),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("list-page",{ref:"listPage",attrs:{"list-api":"getSubscribers","delete-api":"deleteSubscriber","route-name":"subscribers",name:t.$t("user.subs"),gate:"subscriber","add-button":!1,"order-options":t.userObj},on:{list:function(e){t.itemList=e}},scopedSlots:t._u([{key:"table-top",fn:function(n){var r=n.orderOptions;return[e("table-top",{staticClass:"mb-20 mb-sm-15",attrs:{"order-by-options":r},on:{"delete-bulk":t.deleteBulk},scopedSlots:t._u([{key:"add-button",fn:function(){return[e("nuxt-link",{staticClass:"button primary-btn",attrs:{to:t.sendEmailRoute}},[t._v("\n          "+t._s(t.$t("user.sEmail"))+"\n        ")])]},proxy:!0}],null,!0)})]}},{key:"table",fn:function(n){var r=n.list;return[e("tr",{staticClass:"lite-bold"},[e("th",[e("input",{attrs:{type:"checkbox"},on:{change:t.checkAll}})]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.email")))]),t._v(" "),e("th",[t._v(t._s(t.$t("category.created")))]),t._v(" "),e("th")]),t._v(" "),t._l(r,(function(n,r){return e("tr",{key:r},[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cbList,expression:"cbList"}],attrs:{type:"checkbox"},domProps:{value:n.id,checked:Array.isArray(t.cbList)?t._i(t.cbList,n.id)>-1:t.cbList},on:{change:function(e){var r=t.cbList,c=e.target,l=!!c.checked;if(Array.isArray(r)){var o=n.id,d=t._i(r,o);c.checked?d<0&&(t.cbList=r.concat([o])):d>-1&&(t.cbList=r.slice(0,d).concat(r.slice(d+1)))}else t.cbList=l}}})]),t._v(" "),e("td",[e("span",{staticClass:"mx-w-300x"},[t._v(t._s(n.email))])]),t._v(" "),e("td",[t._v(t._s(n.created))]),t._v(" "),e("td",[t.$can("subscriber","delete")?e("button",{staticClass:"delete-btn lite-btn",on:{click:function(e){return e.preventDefault(),t.$refs.listPage.deleteItem(n.id)}}},[t._v(t._s(t.$t("category.delete")))]):t._e()])])}))]}}])})}),[],!1,null,"c2e72764",null);e.default=component.exports}}]);