/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44,26,33,70],{469:function(t,e,r){"use strict";r.r(e);var n=r(470),o=r.n(n),c=r(86),d={name:"LazyImage",props:{alt:{type:String,default:null},title:{type:String,default:null},backgroundColor:{type:String,default:"#d9f4eb"},lazySrc:{type:String,default:null},lazySrcset:{type:String,default:null}},data:function(){return{loading:!0}},mixins:[c.a],computed:{aspectRatio:function(){return this.width&&this.height?this.height/this.width*100:null},style:function(){var style={};return this.width&&(style.width="".concat(this.width,"px"),this.height||(style.height="".concat(.66*this.width,"px"))),this.loading&&this.aspectRatio&&(style.height=this.height?"".concat(this.height,"px"):"".concat(this.applyAspectRatio,"px")),style}},mounted:function(){var t=this,e=function(){t.loading=!1,t.$el.style.opacity=1};this.$el.addEventListener("load",e),this.$once("hook:destroyed",(function(){t.$el.removeEventListener("load",e)})),o()(this.$el,{load:function(t){t.src=t.getAttribute("data-src")}}).observe()},methods:{onError:function(t){t.target.src=this.getImageURL()}}},l=r(15),component=Object(l.a)(d,(function(){var t=this;return(0,t._self._c)("img",{staticClass:"lazy-img",style:t.style,attrs:{"data-src":t.lazySrc,alt:t.alt,title:t.title,height:"50",width:"50"},on:{error:t.onError}})}),[],!1,null,null,null);e.default=component.exports},470:function(t,e,r){t.exports=function(){"use strict";var g="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,n=void 0,i=0;i<=a.length-1;i++)(n=a[i].getAttribute("data-src"))&&(a[i].src=n);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var o=",";if(t.getAttribute("data-background-delimiter")&&(o=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(o).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var c=t.getAttribute("data-background-image-set").split(o),u=c[0].substr(0,c[0].indexOf(" "))||c[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===c.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var r=function(t){return"true"===t.getAttribute("data-loaded")},n=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var o,a,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},l=Object.assign({},t,d),i=l.root,v=l.rootMargin,h=l.threshold,u=l.load,g=l.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((o=u,a=g,function(t,n){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(n.unobserve(t.target),r(t.target)||(o(t.target),e(t.target),a(t.target)))}))}),{root:i,rootMargin:v,threshold:h}));for(var _,f=n(c,i),b=0;b<f.length;b++)(_=f[b]).getAttribute("data-placeholder-background")&&(_.style.background=_.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=n(c,i),o=0;o<t.length;o++)r(t[o])||(s?s.observe(t[o]):(u(t[o]),e(t[o]),g(t[o])))},triggerLoad:function(t){r(t)||(u(t),e(t),g(t))},observer:s}}}()},775:function(t,e,r){"use strict";r.r(e);r(18),r(21),r(23),r(24),r(16);var n=r(1),o=r(4),c=(r(22),r(7),r(13),r(86)),d=r(159),l=r(10),v=r(49),h=r(469);function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m={name:"OrderStatistic",data:function(){return{orderStatistic:null,fetching:!0,time:null,selected:"9999",dashboardOptions:{9999:{title:this.$t("index.all")},1:{title:this.$t("index.today")},7:{title:this.$t("index.lw")},30:{title:this.$t("index.lm")},365:{title:this.$t("index.ly")}}}},watch:{orderType:function(){this.fetchingData()}},mixins:[c.a],components:{LazyImage:h.default,Dropdown:d.default,Spinner:v.default},props:{orderType:{type:String,default:""}},computed:f({currencyPosition:function(){var t;return null===(t=this.setting)||void 0===t?void 0:t.currency_position},currencyIcon:function(){var t;return(null===(t=this.setting)||void 0===t?void 0:t.currency_icon)||"$"},cancelled:function(){var t;return null===(t=this.orderStatistic)||void 0===t?void 0:t.cancelled},pending:function(){return this.statistics[this.orderStatusIn.PENDING]||0},confirmed:function(){return this.statistics[this.orderStatusIn.CONFIRMED]||0},pickedUp:function(){return this.statistics[this.orderStatusIn.PICKED_UP]||0},onTheWay:function(){return this.statistics[this.orderStatusIn.ON_THE_WAY]||0},delivered:function(){return this.statistics[this.orderStatusIn.DELIVERED]||0},statistics:function(){var t,e={};return null===(t=this.orderStatistic)||void 0===t||t.statistics.forEach((function(t){e[t.status]=t.total})),e},categories:function(){var t;return null===(t=this.orderStatistic)||void 0===t?void 0:t.categories},brands:function(){var t;return null===(t=this.orderStatistic)||void 0===t?void 0:t.brands},products:function(){var t;return null===(t=this.orderStatistic)||void 0===t?void 0:t.products}},Object(l.c)("setting",["setting"])),methods:f({calcDate:function(t){if(t<9999){var e=new Date((new Date).setHours(0,0,0,0));return new Date(e.getTime()-24*(t-1)*60*60*1e3)}return null},dropdownSelected:function(t){this.time=this.time=this.calcDate(parseInt(t.key)),this.fetchingData()},fetchingData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.fetching=!0,e.prev=1,e.next=4,t.getRequest({params:{order_type:t.orderType,time:t.time,time_zone:t.timeZone},api:"orderStatistic"});case 4:data=e.sent,t.orderStatistic=data,e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",t.$nuxt.error(e.t0));case 11:t.fetching=!1;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()}},Object(l.b)("common",["getRequest"])),destroyed:function(){},mounted:function(){this.fetchingData()}},y=r(15),component=Object(y.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pos-rel"},[t.fetching?e("div",{staticClass:"h-100 dply-felx j-center abs-centered"},[e("spinner",{staticClass:"mr-15",attrs:{radius:60,color:"primary"}})],1):t._e(),t._v(" "),e("div",{staticClass:"card p-15 p-xs-10 dply-felx mb-20 mb-sm-15 mb-xs-10"},[e("h5",[e("b",[t._v(t._s(t.$t("index.orderStat")))])]),t._v(" "),e("dropdown",{staticClass:"right-dropdown",attrs:{"selected-key":t.selected,options:t.dashboardOptions},on:{clicked:t.dropdownSelected}})],1),t._v(" "),e("div",{staticClass:"order-status-wrapper mb-20 mb-sm-15 mb-xs-10"},[e("div",{staticClass:"card p-20"},[e("p",[t._v("\n        "+t._s(t.$t("index.orderCan"))+"\n      ")]),t._v(" "),e("h3",[t._v(t._s(t.cancelled))])]),t._v(" "),e("div",{staticClass:"card p-20"},[e("p",[t._v("\n        "+t._s(t.$t("index.orderPend"))+"\n      ")]),t._v(" "),e("h3",[t._v(t._s(t.pending))])]),t._v(" "),e("div",{staticClass:"card p-20"},[e("p"),e("p",[t._v("\n        "+t._s(t.$t("index.orderConf"))+"\n      ")]),t._v(" "),e("h3",[t._v(t._s(t.confirmed))])]),t._v(" "),e("div",{staticClass:"card p-20"},[e("p",[t._v("\n        "+t._s(t.$t("index.packPick"))+"\n      ")]),t._v(" "),e("h3",[t._v(t._s(t.pickedUp))])]),t._v(" "),e("div",{staticClass:"card p-20"},[e("p",[t._v(t._s(t.$t("index.onWay")))]),t._v(" "),e("h3",[t._v(t._s(t.onTheWay))])]),t._v(" "),e("div",{staticClass:"card p-20"},[e("p",[t._v(t._s(t.$t("index.delivered")))]),t._v(" "),e("h3",[t._v(t._s(t.delivered))])])]),t._v(" "),e("div",{staticClass:"order-status-wrapper mb-20 mb-sm-15 mb-xs-10"},[e("div",{staticClass:"card p-20 p-sm-15"},[e("h5",{staticClass:"mb-15"},[e("b",[t._v(t._s(t.$t("index.topCat")))])]),t._v(" "),t.categories&&!t.categories.length?e("p",{staticClass:"mb-10"},[t._v("\n        "+t._s(t.$t("index.nf"))+"\n      ")]):e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"mn-w-400x mb-10 mt-0 tr-border"},[e("tr",{staticClass:"lite-bold"},[e("th",[t._v(t._s(t.$t("index.title")))]),t._v(" "),e("th",[t._v(t._s(t.$t("index.sold")))]),t._v(" "),e("th",[t._v(t._s(t.$t("index.amount")))])]),t._v(" "),t._l(t.categories,(function(r,n){return e("tr",{key:n},[e("td",{},[e("nuxt-link",{staticClass:"dply-felx j-left link",attrs:{to:"/categories/".concat(r.id)}},[e("lazy-image",{staticClass:"mr-20",attrs:{"data-src":t.getThumbImageURL(r.image),alt:r.title}}),t._v(" "),e("h5",{staticClass:"mx-w-300x"},[t._v(t._s(r.title))])],1)],1),e("td",[t._v("\n              "+t._s(r.total)+"\n            ")]),t._v(" "),e("td",[t._v("\n              "+t._s(t.priceFormatting(r.total_price))+"\n            ")])])}))],2)])]),t._v(" "),e("div",{staticClass:"card p-20 p-sm-15"},[e("h5",{staticClass:"mb-15"},[e("b",[t._v(t._s(t.$t("index.topBra")))])]),t._v(" "),t.brands&&!t.brands.length?e("p",{staticClass:"mb-10"},[t._v("\n        "+t._s(t.$t("index.nf"))+"\n      ")]):e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"mn-w-400x mb-10 mt-0 tr-border"},[e("tr",{staticClass:"lite-bold"},[e("th",[t._v(t._s(t.$t("index.title")))]),t._v(" "),e("th",[t._v(t._s(t.$t("index.sold")))]),t._v(" "),e("th",[t._v(t._s(t.$t("index.amount")))])]),t._v(" "),t._l(t.brands,(function(r,n){return e("tr",{key:n},[e("td",{},[e("nuxt-link",{staticClass:"dply-felx j-left link",attrs:{to:"/brands/".concat(r.id)}},[e("lazy-image",{staticClass:"mr-20",attrs:{"data-src":t.getThumbImageURL(r.image),alt:r.title}}),t._v(" "),e("h5",{staticClass:"mx-w-300x"},[t._v(t._s(r.title))])],1)],1),t._v(" "),e("td",[t._v("\n              "+t._s(r.total)+"\n            ")]),t._v(" "),e("td",[t._v("\n              "+t._s(t.priceFormatting(r.total_price))+"\n            ")])])}))],2)])])]),t._v(" "),e("div",{staticClass:"card p-20 p-sm-15"},[e("h5",{staticClass:"mb-10"},[e("b",[t._v(t._s(t.$t("index.topPro")))])]),t._v(" "),t.products&&!t.products.length?e("p",{staticClass:"mb-10"},[t._v("\n      "+t._s(t.$t("index.nf"))+"\n    ")]):e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"mn-w-800x mb-10 mt-0 tr-border"},[e("tr",{staticClass:"lite-bold"},[e("th",[t._v(t._s(t.$t("index.title")))]),t._v(" "),e("th",[t._v(t._s(t.$t("index.sold")))]),t._v(" "),e("th",[t._v(t._s(t.$t("index.amount")))])]),t._v(" "),t._l(t.products,(function(r,n){return e("tr",{key:n},[e("td",[e("nuxt-link",{staticClass:"dply-felx j-left link",attrs:{to:"/products/".concat(r.id)}},[e("lazy-image",{staticClass:"mr-20",attrs:{"data-src":t.getThumbImageURL(r.image),alt:r.title}}),t._v(" "),e("h5",{staticClass:"mx-w-800x"},[t._v(t._s(r.title))])],1)],1),t._v(" "),e("td",[t._v("\n            "+t._s(r.total)+"\n          ")]),t._v(" "),e("td",[t._v("\n            "+t._s(t.priceFormatting(r.total_price))+"\n          ")])])}))],2)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:r(49).default,Dropdown:r(159).default,LazyImage:r(469).default})}}]);