(window.webpackJsonp=window.webpackJsonp||[]).push([[81,46],{466:function(t,e,r){"use strict";r(19),r(17),r(22),r(26),r(27);var n=r(9),o=(r(6),r(18),r(203),r(23),r(54),r(7));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)("common",["customScripts"])),mounted:function(){var t=this;this.customScripts.forEach((function(i){var e=new RegExp(null==i?void 0:i.route_pattern),r=t.$route.path;if(e.test(r)){if(null!=i&&i.header_script){var script=document.createElement("script");script.textContent=null==i?void 0:i.header_script_code,document.head.appendChild(script)}if(null!=i&&i.body_script){var n=document.createElement("script");n.textContent=null==i?void 0:i.body_script_code,document.body.appendChild(n)}}}))}}},492:function(t,e,r){"use strict";r.r(e);r(19),r(17),r(22),r(6),r(26),r(18),r(27);var n=r(0),o=r(9),c=(r(12),r(81),r(497)),l=r(7),d=r(487);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={name:"ListingLayout",data:function(){return{sourceTitle:"",products:null,fetchingProductData:!1}},mixins:[c.a],watch:{},props:{productParams:{type:Object,default:function(){return{}}},resultTitle:{type:String,default:""}},components:{ProductList:d.default},computed:m(m({},Object(l.c)("language",["langCode"])),Object(l.c)("listing",["brands","shippingRules","collections","allCategories"])),methods:m(m({clearQuery:function(){this.$refs.productList.clearQuery()},fetchingData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.fetchingProductData=!0,setTimeout(Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getRequest({params:m(m({},t.productParams),{sortby:t.sortByData,shipping:t.shippingFromRoute,brand:t.brandFromRoute,collection:t.collectionFromRoute,rating:t.ratingFromRoute,max:t.maxPriceFromRoute,min:t.minPriceFromRoute,q:t.searchedKeyword,page:t.pageData,all_categories:!t.allCategories,sidebar_data:!t.brands||!t.shippingRules||!t.collections}),lang:t.langCode,api:"products"});case 3:data=e.sent,t.sourceTitle=null===(r=data.data)||void 0===r||null===(n=r.source)||void 0===n?void 0:n.title,t.setProducts(data),t.products=data.data.result,t.fetchingProductData=!1,e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",t.$nuxt.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),100);case 2:case"end":return e.stop()}}),e)})))()}},Object(l.b)("listing",["setProducts","emptyProducts"])),Object(l.b)("common",["getRequest"])),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.emptyProducts(),e.next=3,t.fetchingData();case 3:case"end":return e.stop()}}),e)})))()}},h=r(11),component=Object(h.a)(O,(function(){var t=this;return(0,t._self._c)("product-list",{ref:"productList",attrs:{categories:t.allCategories,"result-title":t.sourceTitle||t.resultTitle,"product-params":t.productParams,"back-btn":!1,"fetching-product-data":t.fetchingProductData},on:{"fetch-data":t.fetchingData}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductList:r(487).default})},590:function(t,e,r){"use strict";r.r(e);var n=r(492),o=r(24),c=r(126),l=r(466),d={middleware:["common-middleware"],mixins:[o.a,c.a,l.a],components:{ListingLayout:n.default},computed:{productParams:function(){var t,e;return{brand:null===(t=this.$route)||void 0===t||null===(e=t.params)||void 0===e?void 0:e.id}}},mounted:function(){}},f=r(11),component=Object(f.a)(d,(function(){return(0,this._self._c)("listing-layout",{attrs:{"product-params":this.productParams}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListingLayout:r(492).default})}}]);