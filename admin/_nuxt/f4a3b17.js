(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{473:function(e,t,r){"use strict";r(124),r(50);t.a={data:function(){return{itemList:[],cbList:[]}},methods:{checkAll:function(e){e.target.checked?this.cbList=this.itemList.map((function(i){return i.id})):this.cbList=[]},deleteBulk:function(){var e;null!==(e=this.cbList)&&void 0!==e&&e.length&&this.$refs.listPage.deleteItem(this.cbList.join(","))}}}},917:function(e,t,r){"use strict";r.r(t);r(37),r(44),r(18),r(21),r(23),r(24),r(7),r(13);var n=r(1),o=r(4),l=(r(22),r(45),r(32),r(16),r(52),r(86)),c=r(10),d=r(49),v=r(700),f=r(102),_=r(475),h=r(473),m=r(642);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w={name:"posOrders",middleware:["common-middleware","auth"],data:function(){return{order:null,validLicence:!1,loading:!1,orderByOrders:{payment_method:{title:this.$t("fSale.pMethod")},admin_id:{title:this.$t("fSale.user")},created_at:{title:this.$t("category.date")}}}},components:{PosOrdered:r(788).default,ListPage:_.default,InlinePopOver:f.default,Spinner:d.default,TableSort:m.default},mixins:[l.a,v.a,h.a],computed:O(O({currencyIcon:function(){var e;return(null===(e=this.setting)||void 0===e?void 0:e.currency_icon)||"$"}},Object(c.c)("admin",["posPublicKey"])),Object(c.c)("setting",["setting"])),methods:O({userStr:function(e){var t,r,n,o;return null!==(t=null!==(r=null==e||null===(n=e.pos_order)||void 0===n||null===(n=n.admin)||void 0===n?void 0:n.name)&&void 0!==r?r:null==e||null===(o=e.pos_order)||void 0===o||null===(o=o.admin)||void 0===o?void 0:o.email)&&void 0!==t?t:"n/a"},customerStr:function(e){var t,r,n,o;return null!==(t=null!==(r=null==e||null===(n=e.user)||void 0===n?void 0:n.name)&&void 0!==r?r:null==e||null===(o=e.user)||void 0===o?void 0:o.email)&&void 0!==t?t:this.$t("ship.wc")},voucherStr:function(e){return e.voucher?"".concat(e.offered," (").concat(e.voucher,")"):this.$t("prod.na")},deleteAll:function(){this.$refs.bulkDelete.closePop(),this.deleteBulk()}},Object(c.b)("common",["getRequest"])),mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=window.location.hostname,e.posPublicKey?(n=e.phpDecryption(e.posPublicKey),o=JSON.parse(n),l=!(null!=o&&o.p)||(null==o?void 0:o.p)&&"pos-ishop"===(null==o?void 0:o.p),(r.includes("admin.ishop.cholobangla.com")||r.includes("localhost")||r.includes("127.0.0.1")||n.includes(r)&&l)&&(e.validLicence=!0)):(r.includes("admin.ishop.cholobangla.com")||r.includes("localhost")||r.includes("127.0.0.1"))&&(e.validLicence=!0);case 2:case"end":return t.stop()}}),t)})))()}},k=w,L=r(15),component=Object(L.a)(k,(function(){var e=this,t=e._self._c;return e.validLicence?t("div",[e.order?t("pos-ordered",{attrs:{order:e.order},on:{close:function(t){e.order=null}}}):e._e(),e._v(" "),t("list-page",{ref:"listPage",attrs:{"list-api":"getPosOrders","delete-api":"deletePosOrders","route-name":"pos",name:e.$t("fSale.orderD"),"order-options":e.orderByOrders,gate:"pos"},on:{list:function(t){e.itemList=t}},scopedSlots:e._u([{key:"table-top",fn:function(r){var n=r.orderOptions;return[t("div",{staticClass:"dply-felx gap-10 j-left f-wrap mb-15"},[t("table-sort",{attrs:{"order-by-options":n}}),e._v(" "),t("inline-pop-over",{ref:"bulkDelete",staticClass:"bulk-action mt-md-10",attrs:{arrow:!0},scopedSlots:e._u([{key:"button",fn:function(){return[e._v("\n            "+e._s(e.$t("title.act"))+"\n          ")]},proxy:!0},{key:"content",fn:function(){return[t("button",{staticClass:"outline-btn",on:{click:function(t){return t.preventDefault(),e.deleteAll.apply(null,arguments)}}},[e._v("\n              "+e._s(e.$t("category.delete"))+"\n            ")])]},proxy:!0}],null,!0)})],1)]}},{key:"table",fn:function(r){var n=r.list;return[t("tr",{staticClass:"lite-bold"},[t("th",[t("input",{attrs:{type:"checkbox"},on:{change:e.checkAll}})]),e._v(" "),t("th",[e._v(e._s(e.$t("fSale.orderUp")))]),e._v(" "),t("th",[e._v(e._s(e.$t("fSale.voucher")))]),e._v(" "),t("th",[e._v(e._s(e.$t("ship.cs")))]),e._v(" "),t("th",[e._v(e._s(e.$t("fSale.user")))]),e._v(" "),t("th",[e._v(e._s(e.$t("fSale.amount"))+"("+e._s(e.currencyIcon)+")")]),e._v(" "),t("th",[e._v(e._s(e.$t("category.created")))]),e._v(" "),t("th")]),e._v(" "),e._l(n,(function(r,n){return t("tr",{key:n},[t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.cbList,expression:"cbList"}],attrs:{type:"checkbox"},domProps:{value:r.order.id,checked:Array.isArray(e.cbList)?e._i(e.cbList,r.order.id)>-1:e.cbList},on:{change:function(t){var n=e.cbList,o=t.target,l=!!o.checked;if(Array.isArray(n)){var c=r.order.id,d=e._i(n,c);o.checked?d<0&&(e.cbList=n.concat([c])):d>-1&&(e.cbList=n.slice(0,d).concat(n.slice(d+1)))}else e.cbList=l}}})]),e._v(" "),t("td",[t("nuxt-link",{staticClass:"dply-felx j-left link",attrs:{to:"/orders/".concat(r.order.id)}},[e._v("\n            #"+e._s(r.order.order)+"\n          ")])],1),e._v(" "),t("td",[e._v(e._s(e.voucherStr(r.order)))]),e._v(" "),t("td",[t("span",{staticClass:"ellipsis mx-w-150x"},[e._v(e._s(e.customerStr(r.order)))])]),e._v(" "),t("td",[t("span",{staticClass:"ellipsis mx-w-150x"},[e._v(e._s(e.userStr(r.order)))])]),e._v(" "),t("td",{staticClass:"mn-w-90x"},[e._v(e._s(r.order.total_amount))]),e._v(" "),t("td",{staticClass:"mn-w-90x"},[e._v(e._s(r.order.created))]),e._v(" "),t("td",{staticClass:"ptb-10"},[e.$can("pos","view")?t("button",{staticClass:"lite-btn",on:{click:function(t){t.preventDefault(),e.order=r.order}}},[e._v("\n            "+e._s(e.$t("fSale.view")))]):e._e(),e._v(" "),e.$can("pos","delete")?t("button",{staticClass:"delete-btn lite-btn",on:{click:function(t){return t.preventDefault(),e.$refs.listPage.deleteItem(r.order.id)}}},[e._v("\n            "+e._s(e.$t("category.delete")))]):e._e()])])}))]}}],null,!1,393274974)})],1):e._e()}),[],!1,null,"04fa965b",null);t.default=component.exports;installComponents(component,{InlinePopOver:r(102).default})}}]);