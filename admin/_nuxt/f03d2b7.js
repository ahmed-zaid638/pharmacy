(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{894:function(e,t,r){"use strict";r.r(t);r(37),r(44),r(18),r(23),r(24),r(16);var n=r(4),l=(r(21),r(124),r(32),r(7),r(13),r(87),r(86)),o=r(475),c=r(642),d=r(10),v=r(473),f=r(102),h=r(655),_=r(866),y=r(159),k=r(158),m=r(698);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w={name:"orders",middleware:["common-middleware","auth"],data:function(){return{pdfList:[],selectedOrderType:"website",loaded:!1,orderByOrders:{order_method:{title:this.$t("fSale.pMethod")},status:{title:this.$t("category.status")},total_amount:{title:this.$t("brand.price")},user_id:{title:this.$t("fSale.user")},created_at:{title:this.$t("category.date")}},checkedFilter:[],filterOptions:[{key:"cancelled",title:this.$t("index.orderCan")},{key:"cash_on_delivery",title:this.$t("fSale.cod")},{key:"card_payment",title:this.$t("fSale.card")},{key:"paypal",title:this.$t("fSale.paypal")},{key:"paid",title:this.$t("fSale.paid")},{key:"unpaid",title:this.$t("fSale.unpaid")}]}},mixins:[l.a,v.a],components:{DateFilter:m.default,AjaxButton:k.default,Dropdown:y.default,OrderList:_.default,Invoice:h.default,InlinePopOver:f.default,ListPage:o.default,TableSort:c.default},computed:O(O({currencyIcon:function(){var e;return(null===(e=this.setting)||void 0===e?void 0:e.currency_icon)||"$"}},Object(d.c)("admin",["posSetting"])),Object(d.c)("setting",["setting"])),methods:O({selectedOption:function(e){var t=e.key;this.selectedOrderType=t,this.$router.push({query:O(O({},this.$route.query),{order_type:t})})},downloadPdf:function(){var e,t=this;if(this.pdfList=[],null!==(e=this.cbList)&&void 0!==e&&e.length){var r=[];this.itemList.forEach((function(i){r[i.id]=i})),this.cbList.forEach((function(i){r[i]&&t.pdfList.push(r[i])}))}this.$refs.bulkDelete.closePop();var i=0,n=this,l=setInterval((function(){if(n.cbList.length>i){var e,t="invoice".concat(n.cbList[i]);if(n.$refs[t].length>0)null===(e=n.$refs[t][0])||void 0===e||e.generatingPdf()}else clearInterval(l);i++}),200)},deleteAll:function(){this.$refs.bulkDelete.closePop(),this.deleteBulk()},deletedOrder:function(){this.emptyDashboard()},filterChanged:function(){var filter=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$router.push({query:O(O(O({},this.$route.query),filter),{page:1,orderBy:"created_at",orderByType:"desc",filter:this.checkedFilter.join(",")})})},userStr:function(e){var t,r,n;return null!==(t=null==e||null===(r=e.address)||void 0===r?void 0:r.name)&&void 0!==t?t:null==e||null===(n=e.address)||void 0===n?void 0:n.email},voucherStr:function(e){return e.voucher?"".concat(e.offered," (").concat(e.voucher,")"):this.$t("prod.na")}},Object(d.b)("dashboard",["emptyDashboard"])),mounted:function(){var e,t,r;null!==(e=this.$route)&&void 0!==e&&null!==(e=e.query)&&void 0!==e&&e.order_type&&(this.selectedOrderType=null===(r=this.$route)||void 0===r||null===(r=r.query)||void 0===r?void 0:r.order_type);this.checkedFilter=(null===(t=this.$route)||void 0===t||null===(t=t.query)||void 0===t||null===(t=t.filter)||void 0===t?void 0:t.split(","))||[]}},S=w,C=r(15),component=Object(C.a)(S,(function(){var e=this,t=e._self._c;return t("div",[e.posSetting?t("div",{staticClass:"mb-15 dply-felx sided"},[t("h4",[e._v("\n      "+e._s(e.$t("error.orders"))+"\n    ")]),e._v(" "),t("dropdown",{staticClass:"right-dropdown",attrs:{"selected-key":e.selectedOrderType,options:e.orderTypes},on:{clicked:e.selectedOption}})],1):e._e(),e._v(" "),e.$store.state.admin.isVendor?t("order-list"):t("div",[t("div",{staticStyle:{height:"0",overflow:"hidden"}},e._l(e.pdfList,(function(data,e){return t("div",{key:e},[t("invoice",{ref:"invoice".concat(data.id),refInFor:!0,attrs:{order:data}})],1)})),0),e._v(" "),t("list-page",{ref:"listPage",attrs:{"list-api":"getOrders","delete-api":"deleteOrder","route-name":"orders",name:e.$t("fSale.orderD"),"order-options":e.orderByOrders,gate:"order"},on:{deleted:e.deletedOrder,list:function(t){e.itemList=t}},scopedSlots:e._u([{key:"table-top",fn:function(r){var n=r.orderOptions;return[t("div",{staticClass:"dply-felx gap-10 f-wrap mb-15"},[t("div",{staticClass:"dply-felx gap-10 f-wrap"},[t("table-sort",{attrs:{"order-by-options":n}}),e._v(" "),t("inline-pop-over",{ref:"bulkDelete",staticClass:"bulk-action mt-md-10",attrs:{arrow:!0},scopedSlots:e._u([{key:"button",fn:function(){return[e._v("\n                "+e._s(e.$t("title.act"))+"\n              ")]},proxy:!0},{key:"content",fn:function(){return[t("button",{staticClass:"outline-btn",on:{click:function(t){return t.preventDefault(),e.deleteAll.apply(null,arguments)}}},[e._v("\n                  "+e._s(e.$t("category.delete"))+"\n                ")]),e._v(" "),t("button",{staticClass:"outline-btn",on:{click:function(t){return t.preventDefault(),e.downloadPdf.apply(null,arguments)}}},[e._v("\n                  "+e._s(e.$t("setting.pi"))+"\n                ")])]},proxy:!0}],null,!0)})],1),e._v(" "),t("date-filter",{on:{"date-changed":e.filterChanged}})],1),e._v(" "),t("ul",{staticClass:"order-cb"},e._l(e.filterOptions,(function(r){return t("li",{key:r.key},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedFilter,expression:"checkedFilter"}],staticClass:"styled-checkbox",attrs:{id:"checkbox-".concat(r.key),type:"checkbox"},domProps:{value:r.key,checked:Array.isArray(e.checkedFilter)?e._i(e.checkedFilter,r.key)>-1:e.checkedFilter},on:{change:[function(t){var n=e.checkedFilter,l=t.target,o=!!l.checked;if(Array.isArray(n)){var c=r.key,d=e._i(n,c);l.checked?d<0&&(e.checkedFilter=n.concat([c])):d>-1&&(e.checkedFilter=n.slice(0,d).concat(n.slice(d+1)))}else e.checkedFilter=o},e.filterChanged]}}),e._v(" "),t("label",{attrs:{for:"checkbox-".concat(r.key)}},[e._v("\n              "+e._s(r.title)+"\n            ")])])})),0)]}},{key:"table",fn:function(r){var n=r.list;return[t("tr",{staticClass:"lite-bold"},[t("th",[t("input",{attrs:{type:"checkbox"},on:{change:e.checkAll}})]),e._v(" "),t("th",[e._v(e._s(e.$t("fSale.orderUp")))]),e._v(" "),t("th",[e._v(e._s(e.$t("category.status")))]),e._v(" "),t("th",[e._v(e._s(e.$t("fSale.pMethod")))]),e._v(" "),t("th",[e._v(e._s(e.$t("fSale.pStatus")))]),e._v(" "),t("th",[e._v(e._s(e.$t("fSale.voucher")))]),e._v(" "),t("th",[e._v(e._s(e.$t("fSale.user")))]),e._v(" "),t("th",[e._v(e._s(e.$t("fSale.amount"))+"("+e._s(e.currencyIcon)+")")]),e._v(" "),t("th",[e._v(e._s(e.$t("category.created")))]),e._v(" "),t("th")]),e._v(" "),e._l(n,(function(r,n){return t("tr",{key:n,class:{"new-data":!parseInt(r.viewed)}},[t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.cbList,expression:"cbList"}],attrs:{type:"checkbox"},domProps:{value:r.id,checked:Array.isArray(e.cbList)?e._i(e.cbList,r.id)>-1:e.cbList},on:{change:function(t){var n=e.cbList,l=t.target,o=!!l.checked;if(Array.isArray(n)){var c=r.id,d=e._i(n,c);l.checked?d<0&&(e.cbList=n.concat([c])):d>-1&&(e.cbList=n.slice(0,d).concat(n.slice(d+1)))}else e.cbList=o}}})]),e._v(" "),t("td",[t("nuxt-link",{staticClass:"dply-felx j-left link",attrs:{to:"/orders/".concat(r.id)}},[e._v("\n              #"+e._s(r.order)+"\n            ")])],1),e._v(" "),t("td",[e._v(e._s(e.orderStatus[r.status].title))]),e._v(" "),t("td",{staticClass:"mn-w-80x"},[e._v(e._s(e.paymentTypes[r.order_method]))]),e._v(" "),t("td",{class:{"color-success":parseInt(r.payment_done)===e.status.PUBLIC}},[e._v("\n            "+e._s(parseInt(r.payment_done)===e.status.PUBLIC?e.$t("fSale.paid"):e.$t("fSale.unpaid"))+"\n          ")]),e._v(" "),t("td",[e._v(e._s(e.voucherStr(r)))]),e._v(" "),t("td",[t("span",{staticClass:"ellipsis mx-w-150x"},[e._v(e._s(e.userStr(r)))])]),e._v(" "),t("td",{staticClass:"mn-w-90x"},[e._v(e._s(r.total_amount))]),e._v(" "),t("td",{staticClass:"mn-w-90x"},[e._v(e._s(r.created))]),e._v(" "),t("td",{staticClass:"ptb-10"},[e.$can("order","view")?t("button",{staticClass:"lite-btn",on:{click:function(t){return t.preventDefault(),e.$refs.listPage.editItem(r.id)}}},[e._v("\n              "+e._s(e.$t("fSale.view")))]):e._e(),e._v(" "),e.$can("order","delete")?t("button",{staticClass:"delete-btn lite-btn",on:{click:function(t){return t.preventDefault(),e.$refs.listPage.deleteItem(r.id)}}},[e._v("\n              "+e._s(e.$t("category.delete")))]):e._e()])])}))]}}])})],1)],1)}),[],!1,null,"74ff8b9d",null);t.default=component.exports;installComponents(component,{Dropdown:r(159).default,InlinePopOver:r(102).default,DateFilter:r(698).default})}}]);