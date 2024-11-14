/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[57,23,26,33,70],{468:function(t,e,r){"use strict";r.r(e);r(18),r(21),r(23),r(24),r(16),r(7),r(13);var n=r(4),o=r(10);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var l={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(o.c)("ui",["errors"]))},d=l,m=r(15),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return t.errorData?e("ul",{staticClass:"error-list mb-15"},[e("li",{staticClass:"mb-10"},[t._v(t._s(t.$t("error.feo")))]),t._v(" "),t._l(t.errorData,(function(r,n){return e("li",{key:n},[t._v("\n    "+t._s(r)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},469:function(t,e,r){"use strict";r.r(e);var n=r(470),o=r.n(n),c=r(86),l={name:"LazyImage",props:{alt:{type:String,default:null},title:{type:String,default:null},backgroundColor:{type:String,default:"#d9f4eb"},lazySrc:{type:String,default:null},lazySrcset:{type:String,default:null}},data:function(){return{loading:!0}},mixins:[c.a],computed:{aspectRatio:function(){return this.width&&this.height?this.height/this.width*100:null},style:function(){var style={};return this.width&&(style.width="".concat(this.width,"px"),this.height||(style.height="".concat(.66*this.width,"px"))),this.loading&&this.aspectRatio&&(style.height=this.height?"".concat(this.height,"px"):"".concat(this.applyAspectRatio,"px")),style}},mounted:function(){var t=this,e=function(){t.loading=!1,t.$el.style.opacity=1};this.$el.addEventListener("load",e),this.$once("hook:destroyed",(function(){t.$el.removeEventListener("load",e)})),o()(this.$el,{load:function(t){t.src=t.getAttribute("data-src")}}).observe()},methods:{onError:function(t){t.target.src=this.getImageURL()}}},d=r(15),component=Object(d.a)(l,(function(){var t=this;return(0,t._self._c)("img",{staticClass:"lazy-img",style:t.style,attrs:{"data-src":t.lazySrc,alt:t.alt,title:t.title,height:"50",width:"50"},on:{error:t.onError}})}),[],!1,null,null,null);e.default=component.exports},470:function(t,e,r){t.exports=function(){"use strict";var g="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,n=void 0,i=0;i<=a.length-1;i++)(n=a[i].getAttribute("data-src"))&&(a[i].src=n);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var o=",";if(t.getAttribute("data-background-delimiter")&&(o=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(o).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var c=t.getAttribute("data-background-image-set").split(o),u=c[0].substr(0,c[0].indexOf(" "))||c[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===c.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var r=function(t){return"true"===t.getAttribute("data-loaded")},n=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var o,a,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=Object.assign({},t,l),i=d.root,m=d.rootMargin,f=d.threshold,u=d.load,g=d.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((o=u,a=g,function(t,n){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(n.unobserve(t.target),r(t.target)||(o(t.target),e(t.target),a(t.target)))}))}),{root:i,rootMargin:m,threshold:f}));for(var h,v=n(c,i),b=0;b<v.length;b++)(h=v[b]).getAttribute("data-placeholder-background")&&(h.style.background=h.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=n(c,i),o=0;o<t.length;o++)r(t[o])||(s?s.observe(t[o]):(u(t[o]),e(t[o]),g(t[o])))},triggerLoad:function(t){r(t)||(u(t),e(t),g(t))},observer:s}}}()},712:function(t,e,r){"use strict";r.r(e);r(37),r(44),r(18),r(21),r(23),r(24),r(16),r(7),r(13);var n=r(1),o=r(4),c=(r(50),r(22),r(10)),l=r(86),d=r(469),m=r(67),f=r(158),h=r(468);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var w={name:"ProductImage",data:function(){return{hasError:!1,attributes:[],imageData:"",formSubmitting:!1,uploading:!1,showAttributes:!1,deleting:!1,errors:null}},props:{productImage:{type:Object,default:function(){return{id:"",image:""}}}},directives:{outsideClick:m.a},mixins:[l.a],components:{ErrorFormatter:h.default,AjaxButton:f.default,LazyImage:d.default},computed:y({},Object(c.c)("common",["allAttributeValues"])),methods:y({closeAttrDrop:function(){this.showAttributes=!1},updateAttributes:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.hasError=!1,e.prev=1,t.formSubmitting=!0,e.next=5,t.setRequest({params:{product_image_id:t.productImage.id,product_id:null===(r=t.$route)||void 0===r||null===(r=r.params)||void 0===r?void 0:r.id,values:t.attributes},api:"setProductImageAttributes"});case 5:e.sent||(t.hasError=!0),t.formSubmitting=!1,e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",t.$nuxt.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},imageDelete:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!confirm(e.$t("admin.dltMsg"))){r.next=13;break}return r.prev=1,e.deleting=!0,r.next=5,e.deleteData({params:t,api:"deleteProductImage"});case 5:(data=r.sent)&&e.$emit("image-deleted",data),e.deleting=!1,r.next=13;break;case 10:return r.prev=10,r.t0=r.catch(1),r.abrupt("return",e.$nuxt.error(r.t0));case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()}},Object(c.b)("common",["deleteData","setRequest"])),mounted:function(){var t;this.attributes=(null===(t=this.productImage)||void 0===t?void 0:t.attributes.map((function(i){return i.attribute_value_id})))||[]}},A=r(15),component=Object(A.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-100"},[t.hasError?e("error-formatter",{attrs:{type:"images_attribute"}}):t._e(),t._v(" "),e("div",{staticClass:"img-wrapper"},[e("lazy-image",{attrs:{"data-src":t.getThumbImageURL(t.productImage.image)}}),t._v(" "),t.$can("product","edit")||t.$can("product","create")?e("button",{on:{click:function(e){return e.preventDefault(),t.imageDelete(t.productImage.id)}}},[t._v("✖\n    ")]):t._e()],1),t._v(" "),e("div",{staticClass:"input-wrapper img-attr-wrap mt-15 dply-felx gap-10"},[e("div",{staticClass:"custom-dropdown cp",attrs:{"data-ignore":"image-attr-".concat(t.productImage.id)},on:{click:function(e){e.preventDefault(),t.showAttributes=!t.showAttributes}}},[e("span",{staticClass:"ignore-click"},[t._v(t._s(t.$t("list.attr"))+" ("+t._s(t.attributes.length)+")\n        "),e("i",{staticClass:"icon black ignore-click",class:[{"arrow-up":t.showAttributes},{"arrow-down":!t.showAttributes}]})])]),t._v(" "),t.showAttributes?e("ul",{directives:[{name:"outside-click",rawName:"v-outside-click",value:t.closeAttrDrop,expression:"closeAttrDrop"}],staticClass:"multiple-wrap to-bottom",attrs:{id:"image-attr-".concat(t.productImage.id)}},t._l(t.allAttributeValues,(function(r,n){return e("label",{key:n,attrs:{"label-for":"product-img-".concat(r.id)}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes,expression:"attributes"}],attrs:{id:"product-img-".concat(r.id),type:"checkbox"},domProps:{value:r.id,checked:Array.isArray(t.attributes)?t._i(t.attributes,r.id)>-1:t.attributes},on:{change:function(e){var n=t.attributes,o=e.target,c=!!o.checked;if(Array.isArray(n)){var l=r.id,d=t._i(n,l);o.checked?d<0&&(t.attributes=n.concat([l])):d>-1&&(t.attributes=n.slice(0,d).concat(n.slice(d+1)))}else t.attributes=c}}}),t._v("\n        "+t._s(r.title)+"\n      ")])})),0):t._e(),t._v(" "),e("ajax-button",{staticClass:"primary-btn",attrs:{type:"button",name:"save",text:t.$t("setting.sv"),"loading-text":"","fetching-data":t.formSubmitting},on:{clicked:t.updateAttributes}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ErrorFormatter:r(468).default,LazyImage:r(469).default,AjaxButton:r(158).default})}}]);