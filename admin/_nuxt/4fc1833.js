/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[35,26,33,71],{469:function(t,e,n){"use strict";n.r(e);var r=n(470),l=n.n(r),o=n(86),c={name:"LazyImage",props:{alt:{type:String,default:null},title:{type:String,default:null},backgroundColor:{type:String,default:"#d9f4eb"},lazySrc:{type:String,default:null},lazySrcset:{type:String,default:null}},data:function(){return{loading:!0}},mixins:[o.a],computed:{aspectRatio:function(){return this.width&&this.height?this.height/this.width*100:null},style:function(){var style={};return this.width&&(style.width="".concat(this.width,"px"),this.height||(style.height="".concat(.66*this.width,"px"))),this.loading&&this.aspectRatio&&(style.height=this.height?"".concat(this.height,"px"):"".concat(this.applyAspectRatio,"px")),style}},mounted:function(){var t=this,e=function(){t.loading=!1,t.$el.style.opacity=1};this.$el.addEventListener("load",e),this.$once("hook:destroyed",(function(){t.$el.removeEventListener("load",e)})),l()(this.$el,{load:function(t){t.src=t.getAttribute("data-src")}}).observe()},methods:{onError:function(t){t.target.src=this.getImageURL()}}},d=n(15),component=Object(d.a)(c,(function(){var t=this;return(0,t._self._c)("img",{staticClass:"lazy-img",style:t.style,attrs:{"data-src":t.lazySrc,alt:t.alt,title:t.title,height:"50",width:"50"},on:{error:t.onError}})}),[],!1,null,null,null);e.default=component.exports},470:function(t,e,n){t.exports=function(){"use strict";var g="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),n=!1;null===e&&(e=document.createElement("img"),n=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),n&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,r=void 0,i=0;i<=a.length-1;i++)(r=a[i].getAttribute("data-src"))&&(a[i].src=r);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var l=",";if(t.getAttribute("data-background-delimiter")&&(l=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(l).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var o=t.getAttribute("data-background-image-set").split(l),u=o[0].substr(0,o[0].indexOf(" "))||o[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===o.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+o+"); background-image: image-set("+o+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var n=function(t){return"true"===t.getAttribute("data-loaded")},r=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var l,a,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=Object.assign({},t,c),i=d.root,h=d.rootMargin,f=d.threshold,u=d.load,g=d.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((l=u,a=g,function(t,r){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(r.unobserve(t.target),n(t.target)||(l(t.target),e(t.target),a(t.target)))}))}),{root:i,rootMargin:h,threshold:f}));for(var v,_=r(o,i),b=0;b<_.length;b++)(v=_[b]).getAttribute("data-placeholder-background")&&(v.style.background=v.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=r(o,i),l=0;l<t.length;l++)n(t[l])||(s?s.observe(t[l]):(u(t[l]),e(t[l]),g(t[l])))},triggerLoad:function(t){n(t)||(u(t),e(t),g(t))},observer:s}}}()},778:function(t,e,n){"use strict";n.r(e);var r=n(86),l=n(469),o={name:"FooterImageLink",data:function(){return{deleting:!1}},props:{result:{type:Object,default:function(){return{payment_links:[],social_links:[]}}}},mixins:[r.a],components:{LazyImage:l.default},computed:{},methods:{},mounted:function(){}},c=n(15),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"dply-felx"},[e("h4",[t._v(t._s(t.$t("setting.pl")))]),t._v(" "),t.$can("footer_link","create")?e("nuxt-link",{staticClass:"lite-btn button",attrs:{to:"/footer-links/add?type=1"}},[t._v("\n      "+t._s(t.$t("setting.addLink"))+"\n    ")]):t._e()],1),t._v(" "),e("div",[e("div",{staticClass:"table-wrapper mt-0 mb-15"},[t.result.payment_links.length?e("table",{staticClass:"mtb-15"},[e("tr",{staticClass:"lite-bold"},[e("th",[t._v(t._s(t.$t("index.title")))]),t._v(" "),e("th",[t._v(t._s(t.$t("category.status")))]),t._v(" "),e("th")]),t._v(" "),t._l(t.result.payment_links,(function(n,r){return e("tr",{key:r},[e("td",[e("nuxt-link",{staticClass:"dply-felx j-left link",attrs:{to:"/footer-links/".concat(n.id,"?type=1/")}},[e("lazy-image",{staticClass:"mr-20 mn-w-30x w-30x",attrs:{"data-src":t.getThumbImageURL(n.image),alt:n.title}}),t._v(" "),e("h5",{staticClass:"mx-w-300x"},[t._v(t._s(n.title))])],1)],1),t._v(" "),e("td",{staticClass:"status",class:{active:1==n.status}},[e("span",[t._v(t._s(t.getStatus(n.status)))])]),t._v(" "),e("td",{staticClass:"right-text"},[t.$can("footer_link","edit")?e("nuxt-link",{staticClass:"edit-btn lite-btn button",attrs:{to:"/footer-links/".concat(n.id,"?type=1")}},[e("i",{staticClass:"edit-icon icon"})]):t._e(),t._v(" "),t.$can("footer_link","delete")?e("button",{staticClass:"delete-btn lite-btn",on:{click:function(e){return e.preventDefault(),t.$emit("delete-item",n.id)}}},[e("i",{staticClass:"delete-icon icon"})]):t._e()],1)])}))],2):e("p",[t._v("\n        "+t._s(t.$t("setting.noData"))+"\n      ")])])]),t._v(" "),e("div",{staticClass:"dply-felx"},[e("h4",[t._v(t._s(t.$t("setting.sl")))]),t._v(" "),t.$can("footer_link","create")?e("nuxt-link",{staticClass:"lite-btn button",attrs:{to:"/footer-links/add?type=2"}},[t._v("\n      "+t._s(t.$t("setting.addLink"))+"\n    ")]):t._e()],1),t._v(" "),e("div",{staticClass:"table-wrapper mt-0"},[t.result.social_links.length?e("table",{staticClass:"mtb-15"},[e("tr",{staticClass:"lite-bold"},[e("th",[t._v(t._s(t.$t("index.title")))]),t._v(" "),e("th",[t._v(t._s(t.$t("category.status")))]),t._v(" "),e("th")]),t._v(" "),t._l(t.result.social_links,(function(n,r){return e("tr",{key:r},[e("td",[e("nuxt-link",{staticClass:"dply-felx j-left link",attrs:{to:"/footer-links/".concat(n.id,"?type=2/")}},[e("lazy-image",{staticClass:"mr-20 mn-w-30x w-30x",attrs:{"data-src":t.getThumbImageURL(n.image),alt:n.title}}),t._v(" "),e("h5",{staticClass:"mx-w-300x"},[t._v(t._s(n.title))])],1)],1),t._v(" "),e("td",{staticClass:"status",class:{active:1==n.status}},[e("span",[t._v(t._s(t.getStatus(n.status)))])]),t._v(" "),e("td",{staticClass:"right-text"},[t.$can("footer_link","edit")?e("nuxt-link",{staticClass:"edit-btn lite-btn button",attrs:{to:"/footer-links/".concat(n.id,"?type=2")}},[e("i",{staticClass:"edit-icon icon"})]):t._e(),t._v(" "),t.$can("footer_link","delete")?e("button",{staticClass:"delete-btn lite-btn",on:{click:function(e){return e.preventDefault(),t.$emit("delete-item",n.id)}}},[e("i",{staticClass:"delete-icon icon"})]):t._e()],1)])}))],2):e("p",[t._v("\n      "+t._s(t.$t("setting.noData"))+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LazyImage:n(469).default})}}]);