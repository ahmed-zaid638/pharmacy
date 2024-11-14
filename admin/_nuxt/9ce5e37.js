/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[147,23,24,26,33,50,51,60,66,71],{468:function(t,e,n){"use strict";n.r(e);n(18),n(21),n(23),n(24),n(16),n(7),n(13);var r=n(4),o=n(10);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var c={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(o.c)("ui",["errors"]))},d=c,f=n(15),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return t.errorData?e("ul",{staticClass:"error-list mb-15"},[e("li",{staticClass:"mb-10"},[t._v(t._s(t.$t("error.feo")))]),t._v(" "),t._l(t.errorData,(function(n,r){return e("li",{key:r},[t._v("\n    "+t._s(n)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},469:function(t,e,n){"use strict";n.r(e);var r=n(470),o=n.n(r),l=n(86),c={name:"LazyImage",props:{alt:{type:String,default:null},title:{type:String,default:null},backgroundColor:{type:String,default:"#d9f4eb"},lazySrc:{type:String,default:null},lazySrcset:{type:String,default:null}},data:function(){return{loading:!0}},mixins:[l.a],computed:{aspectRatio:function(){return this.width&&this.height?this.height/this.width*100:null},style:function(){var style={};return this.width&&(style.width="".concat(this.width,"px"),this.height||(style.height="".concat(.66*this.width,"px"))),this.loading&&this.aspectRatio&&(style.height=this.height?"".concat(this.height,"px"):"".concat(this.applyAspectRatio,"px")),style}},mounted:function(){var t=this,e=function(){t.loading=!1,t.$el.style.opacity=1};this.$el.addEventListener("load",e),this.$once("hook:destroyed",(function(){t.$el.removeEventListener("load",e)})),o()(this.$el,{load:function(t){t.src=t.getAttribute("data-src")}}).observe()},methods:{onError:function(t){t.target.src=this.getImageURL()}}},d=n(15),component=Object(d.a)(c,(function(){var t=this;return(0,t._self._c)("img",{staticClass:"lazy-img",style:t.style,attrs:{"data-src":t.lazySrc,alt:t.alt,title:t.title,height:"50",width:"50"},on:{error:t.onError}})}),[],!1,null,null,null);e.default=component.exports},470:function(t,e,n){t.exports=function(){"use strict";var g="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),n=!1;null===e&&(e=document.createElement("img"),n=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),n&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,r=void 0,i=0;i<=a.length-1;i++)(r=a[i].getAttribute("data-src"))&&(a[i].src=r);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var o=",";if(t.getAttribute("data-background-delimiter")&&(o=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(o).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var l=t.getAttribute("data-background-image-set").split(o),u=l[0].substr(0,l[0].indexOf(" "))||l[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===l.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+l+"); background-image: image-set("+l+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var n=function(t){return"true"===t.getAttribute("data-loaded")},r=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var o,a,l=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=Object.assign({},t,c),i=d.root,f=d.rootMargin,m=d.threshold,u=d.load,g=d.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((o=u,a=g,function(t,r){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(r.unobserve(t.target),n(t.target)||(o(t.target),e(t.target),a(t.target)))}))}),{root:i,rootMargin:f,threshold:m}));for(var h,v=r(l,i),b=0;b<v.length;b++)(h=v[b]).getAttribute("data-placeholder-background")&&(h.style.background=h.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=r(l,i),o=0;o<t.length;o++)n(t[o])||(s?s.observe(t[o]):(u(t[o]),e(t[o]),g(t[o])))},triggerLoad:function(t){n(t)||(u(t),e(t),g(t))},observer:s}}}()},471:function(t,e,n){"use strict";n(32),n(28);e.a={data:function(){return{allowedImageExtensions:/(\.jpg|\.jpeg|\.png|\.svg|\.webp|\.gif)$/i,allowedVideoExtensions:/(\.mp4)$/i,allowedExcelExtensions:/(\.xlsx)$/i,allowedZipExtensions:/(\.zip)$/i,passwordLength:6,maxImageSize:this.$store.state.media.image,maxExcelSize:this.$store.state.media.file,maxVideoSize:this.$store.state.media.video,reg:/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{isValidExcel:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return t.size>1024*e?this.$t("util.fSize",{size:e}):this.allowedExcelExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidZip:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return t.size>1024*e?this.$t("util.fSize",{size:e}):this.allowedZipExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidImage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxImageSize,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.size>1024*e?this.$t("util.fSize",{size:e}):n&&!this.allowedImageExtensions.exec(t.name)?this.$t("util.invFile"):n||this.allowedVideoExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidEmail:function(t){return this.reg.test(t)},isValidLength:function(t){return t&&t.length>=this.passwordLength||!1}}}},477:function(t,e,n){"use strict";n.r(e);n(125);var r=n(158),o=n(86),l=n(471),c=n(469),d={name:"FileUpload",data:function(){return{uploadMessage:null}},mixins:[o.a,l.a],components:{LazyImage:c.default,AjaxButton:r.default},props:{btnType:{type:String,default:"outline"},fileUploading:{type:Boolean,default:!1},imageUrl:{type:String,default:""},image:{type:String,default:""},imageTitle:{type:String,default:""},onlyIcon:{type:String,default:null},btnText:{type:String,default:function(){return this.$t("profile.upload")}}},computed:{previewImageUrl:function(){return this.imageUrl||this.getImageURL(this.imageName)||""},imageName:function(){var t;return null!==(t=this.image)&&void 0!==t&&t.trim()?this.image:this.defaultImage}},methods:{fileChanged:function(t){var e=t.target.files[0];e&&(this.uploadMessage=this.isValidImage(e),this.uploadMessage||this.$emit("file-upload",e))}}},f=n(15),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"file-wrapper",class:{"has-error":t.uploadMessage}},[e("div",[e("div",{staticClass:"file-input"},[e("input",{ref:"fileInput",attrs:{type:"file",accept:"image/*"},on:{change:t.fileChanged}}),t._v(" "),t.fileUploading?t._e():e("img",{attrs:{src:t.previewImageUrl,alt:t.imageTitle}})]),t._v(" "),t.uploadMessage?e("span",{staticClass:"error mb-10"},[t._v("\n      "+t._s(t.uploadMessage)+"\n    ")]):t._e()]),t._v(" "),e("ajax-button",{staticClass:"w-100",class:"".concat(t.btnType,"-btn"),attrs:{type:"button",color:"primary",text:t.btnText,"only-icon":t.onlyIcon,"fetching-data":t.fileUploading},on:{clicked:function(e){return t.$refs.fileInput.click()}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AjaxButton:n(158).default})},485:function(t,e,n){"use strict";n.r(e);var r=n(1),o=(n(22),n(468)),l={name:"SettingLayout",middleware:["common-middleware","auth"],data:function(){return{tabs:[{title:this.$t("setting.cur"),tabId:"currency"},{title:this.$t("list.addr"),tabId:"address"},{title:this.$t("list.lang"),tabId:"languages"},{title:this.$t("list.sl"),tabId:"social-login"},{title:this.$t("list.smtp"),tabId:"smtp"},{title:this.$t("title.ana"),tabId:"analytics"},{title:this.$t("list.payment"),tabId:"payment"},{title:this.$t("list.ms"),tabId:"media-storage"},{title:this.$t("dataPage.mis"),tabId:"miscellaneous"},{title:this.$t("ship.pl"),tabId:"plugins"},{title:this.$t("setting.cClear"),tabId:"clear-cache"}]}},props:{activeRoute:{type:String}},mixins:[],components:{ErrorFormatter:o.default},computed:{},methods:{},created:function(){},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},c=n(15),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab-sidebar pos-rel"},[e("h5",{staticClass:"title bold"},[t._v("\n    "+t._s(t.$t("list.set"))+"\n  ")]),t._v(" "),e("div",{staticClass:"dply-felx"},[e("ul",{staticClass:"left-area"},t._l(t.tabs,(function(n,r){return e("li",{key:r,class:{active:n.tabId===t.activeRoute}},[e("nuxt-link",{attrs:{to:"/setting/".concat(n.tabId)}},[t._v("\n          "+t._s(n.title)+"\n        ")])],1)})),0),t._v(" "),e("div",{staticClass:"right-area"},[e("error-formatter"),t._v(" "),t._t("rightArea")],2)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ErrorFormatter:n(468).default})},710:function(t,e,n){"use strict";n.r(e);n(32),n(18),n(21),n(23),n(24),n(16),n(7),n(13);var r=n(1),o=n(4),l=(n(22),n(10));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var d={name:"PluginItem",middleware:["common-middleware","auth"],data:function(){return{purchaseCode:null,deleting:!1,activated:!1,activating:!1}},components:{AjaxButton:n(158).default},props:{plugin:{type:Object}},watch:{},mixins:[],computed:{},methods:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({deletePlugin:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.deleting=!0,e.next=3,t.deleteData({params:t.plugin.id,api:"deletePlugin"});case 3:t.deleting=!1,t.$emit("fetching-data");case 5:case"end":return e.stop()}}),e)})))()},activatePlugin:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.activating=!0,(r=new FormData).append("name",null===(n=t.plugin)||void 0===n?void 0:n.name),r.append("code",t.purchaseCode),e.next=6,t.setRequest({params:r,api:"activatePlugin"});case 6:o=e.sent,t.activating=!1,null!=o&&o.status&&201===(null==o?void 0:o.status)||t.$emit("fetching-data",o);case 9:case"end":return e.stop()}}),e)})))()}},Object(l.b)("common",["setRequest","deleteData"])),mounted:function(){}},f=d,m=n(15),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"file-wrapper"},[e("div",{class:"file-input has-file"},[t._m(0),t._v(" "),e("h6",[t._v(t._s(t.plugin.name))])]),t._v(" "),t.plugin.active?t._e():[e("input",{directives:[{name:"model",rawName:"v-model",value:t.purchaseCode,expression:"purchaseCode"}],attrs:{type:"text",placeholder:t.$t("dataPage.pkey")},domProps:{value:t.purchaseCode},on:{input:function(e){e.target.composing||(t.purchaseCode=e.target.value)}}}),t._v(" "),e("ajax-button",{staticClass:"outline-btn",attrs:{type:"button",disabled:t.activated,color:"primary",text:t.$t("dataPage.act"),"fetching-data":t.activating},on:{clicked:t.activatePlugin}})],t._v(" "),e("ajax-button",{staticClass:"outline-btn",attrs:{type:"button",color:"primary",text:t.$t("category.delete"),"fetching-data":t.deleting},on:{clicked:t.deletePlugin}})],2)}),[function(){var t=this._self._c;return t("div",{staticClass:"plus-wrap tick-wrap"},[t("i",{staticClass:"icon tick-icon no-click"})])}],!1,null,"71219e55",null);e.default=component.exports;installComponents(component,{AjaxButton:n(158).default})},799:function(t,e,n){"use strict";n.r(e);n(32),n(18),n(21),n(23),n(24),n(16),n(7),n(13);var r=n(1),o=n(4),l=(n(22),n(87),n(86)),c=n(477),d=n(158),f=n(471),m=n(10),h=n(710);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var y={name:"PluginsSetting",data:function(){return{result:null,file:null,loading:!1,fileUploading:!1,hasError:!1,fileAdded:!1}},props:{},mixins:[l.a,f.a],components:{PluginItem:h.default,AjaxButton:d.default,FileUpload:c.default},computed:{},methods:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({activated:function(){setTimeout((function(){window.location.reload(!0)}),200)},fetchAllPlugins:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.getRequest({params:{},api:"allPlugins"});case 4:data=e.sent,t.result=Object.assign({},data),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",t.$nuxt.error(e.t0));case 11:t.loading=!1;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()},fileChanged:function(t){var e=t.target.files[0];e&&(this.uploadMessage=this.isValidZip(e),this.uploadMessage||(this.file=e))},uploadPlugin:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.fileUploading=!0,(n=new FormData).append("file",t.file),e.next=5,t.setRequest({params:n,api:"uploadPlugin"});case 5:r=e.sent,t.fileUploading=!1,r&&(t.fileAdded=!0,t.file=null,t.activated());case 8:case"end":return e.stop()}}),e)})))()}},Object(m.b)("common",["setRequest","getRequest"])),created:function(){},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchAllPlugins();case 2:case"end":return e.stop()}}),e)})))()}},w=y,x=n(15),component=Object(x.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"plugins-wrap"},[e("div",{staticClass:"dply-felx gap-15 f-wrap j-left align-start"},[t._l(t.result,(function(n,r){return e("plugin-item",{key:r,attrs:{plugin:n},on:{"fetching-data":t.activated}})})),t._v(" "),e("div",{staticClass:"file-wrapper",class:{"has-error":t.hasError}},[e("div",{class:"file-input ".concat(t.file&&"has-file")},[e("input",{ref:"pluginInput",attrs:{type:"file",accept:"zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed"},on:{change:t.fileChanged}}),t._v(" "),t.file?e("div",{staticClass:"plus-wrap tick-wrap"},[e("i",{staticClass:"icon tick-icon no-click"})]):e("div",{staticClass:"plus-wrap"},[e("i",{staticClass:"icon plus no-click"})]),t._v(" "),t.file?e("h6",[t._v(t._s(t.file.name))]):t._e()]),t._v(" "),e("ajax-button",{staticClass:"outline-btn mb-10",attrs:{type:"button",disabled:t.fileAdded,color:"primary",text:t.$t("ship.ap"),"fetching-data":t.fileUploading},on:{clicked:t.uploadPlugin}})],1)],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AjaxButton:n(158).default})},925:function(t,e,n){"use strict";n.r(e);var r=n(1),o=(n(22),n(485)),l={middleware:["common-middleware","auth"],data:function(){return{}},props:{},mixins:[],components:{PluginsSetting:n(799).default,SettingLayout:o.default},computed:{},methods:{},created:function(){},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},c=n(15),component=Object(c.a)(l,(function(){var t=this._self._c;return t("setting-layout",{staticClass:"mb-5",attrs:{"active-route":"plugins"},scopedSlots:this._u([{key:"rightArea",fn:function(){return[t("plugins-setting")]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports}}]);