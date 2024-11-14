/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[153,33],{470:function(t,e,r){t.exports=function(){"use strict";var g="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute("data-src"))&&(a[i].src=o);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var l=",";if(t.getAttribute("data-background-delimiter")&&(l=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(l).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var n=t.getAttribute("data-background-image-set").split(l),u=n[0].substr(0,n[0].indexOf(" "))||n[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===n.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+n+"); background-image: image-set("+n+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var r=function(t){return"true"===t.getAttribute("data-loaded")},o=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var l,a,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=Object.assign({},t,d),i=c.root,m=c.rootMargin,v=c.threshold,u=c.load,g=c.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((l=u,a=g,function(t,o){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(o.unobserve(t.target),r(t.target)||(l(t.target),e(t.target),a(t.target)))}))}),{root:i,rootMargin:m,threshold:v}));for(var _,f=o(n,i),b=0;b<f.length;b++)(_=f[b]).getAttribute("data-placeholder-background")&&(_.style.background=_.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=o(n,i),l=0;l<t.length;l++)r(t[l])||(s?s.observe(t[l]):(u(t[l]),e(t[l]),g(t[l])))},triggerLoad:function(t){r(t)||(u(t),e(t),g(t))},observer:s}}}()},903:function(t,e,r){"use strict";r.r(e);r(18),r(21),r(23),r(24),r(16),r(7),r(13);var o=r(1),l=r(4),n=(r(22),r(480)),d=r(477),c=r(49),m=r(491),v=r(86),_=r(10);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(l.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={name:"setting",middleware:["common-middleware","auth"],data:function(){return{loading:!1,fileUploading:{header_logo:!1,footer_logo:!1,email_logo:!1},result:{id:"",site_name:"",site_url:"",meta_description:"",meta_keywords:"",meta_title:"",copyright_text:"",header_logo:"",footer_logo:"",email_logo:"",primary_color:"",primary_hover_color:"",styling:""}}},props:{},mixins:[v.a],components:{ImageInput:m.default,Spinner:c.default,FileUpload:d.default,DataPage:n.default},computed:y({},Object(_.c)(["mediaStorage"])),methods:y({fetchingData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.getRequest({api:"getSiteSetting"});case 4:(data=e.sent)&&(t.result=data),t.loading=!1,e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",t.$nuxt.error(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},uploadFile:function(t,e){var r=arguments,l=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var n,d,c,data;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=r.length>2&&void 0!==r[2]?r[2]:null,l.fileUploading[t]=!0,o.prev=2,d={},e?((c=new FormData).append("id",l.result.id),c.append("photo",e),c.append("type",t),d=c):(d.type=t,d.id=l.result.id,d.photo=n),o.next=7,l.setRequest({params:d,api:"siteSettingUpload"});case 7:(data=o.sent)&&(l.result=data),o.next=14;break;case 11:return o.prev=11,o.t0=o.catch(2),o.abrupt("return",l.$nuxt.error(o.t0));case 14:l.fileUploading[t]=!1;case 15:case"end":return o.stop()}}),o,null,[[2,11]])})))()}},Object(_.b)("common",["setRequest","getRequest"])),mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchingData();case 2:case"end":return e.stop()}}),e)})))()}},w=h,$=r(15),component=Object($.a)(w,(function(){var t=this,e=t._self._c;return e("data-page",{ref:"dataPage",attrs:{"set-api":"setSiteSetting","route-name":"site-setting",name:t.$t("title.site"),gate:"site_setting","validation-keys":["site_name","meta_title","meta_description","copyright_text"],result:t.result},on:{result:function(e){t.result=e}},scopedSlots:t._u([{key:"form",fn:function(r){var o=r.hasError;return[t.loading?e("div",{staticClass:"spinner-wrapper"},[e("spinner",{staticClass:"mr-15",attrs:{radius:60,color:"primary"}})],1):t._e(),t._v(" "),e("div",{staticClass:"dply-felx f-wrap gap-10"},[e("div",{staticClass:"input-wrapper b-b pb-15"},[e("label",{staticClass:"mb-15"},[t._v("\n          "+t._s(t.$t("admin.headLogo"))),e("span",{staticClass:"block"},[t._v(t._s(t.$t("admin.sug")))])]),t._v(" "),t.mediaStorageData.URL===t.mediaStorage?e("image-input",{attrs:{saving:t.fileUploading.header_logo,image:t.result.header_logo},on:{"image-change":function(e){return t.uploadFile("header_logo",null,e)}}}):e("file-upload",{staticClass:"logo-upload upload-block",attrs:{image:t.result.header_logo,"file-uploading":t.fileUploading.header_logo,"btn-text":t.$t("profile.cngLogo",{type:t.$t("title.headLogo")})},on:{"file-upload":function(e){return t.uploadFile("header_logo",e)}}})],1),t._v(" "),e("div",{staticClass:"input-wrapper b-b pb-15"},[e("label",{staticClass:"mb-15"},[t._v("\n          "+t._s(t.$t("admin.fLogo"))),e("span",{staticClass:"block"},[t._v(t._s(t.$t("admin.sug")))])]),t._v(" "),t.mediaStorageData.URL===t.mediaStorage?e("image-input",{attrs:{saving:t.fileUploading.footer_logo,image:t.result.footer_logo},on:{"image-change":function(e){return t.uploadFile("footer_logo",null,e)}}}):e("file-upload",{staticClass:"logo-upload upload-block",attrs:{image:t.result.footer_logo,"file-uploading":t.fileUploading.footer_logo,"btn-text":t.$t("profile.cngLogo",{type:t.$t("title.fLogo")})},on:{"file-upload":function(e){return t.uploadFile("footer_logo",e)}}})],1),t._v(" "),e("div",{staticClass:"input-wrapper b-b pb-15"},[e("label",{staticClass:"mb-15"},[t._v("\n          "+t._s(t.$t("admin.lEmail"))),e("span",{staticClass:"block"},[t._v(t._s(t.$t("admin.sug")))])]),t._v(" "),t.mediaStorageData.URL===t.mediaStorage?e("image-input",{attrs:{saving:t.fileUploading.email_logo,image:t.result.email_logo},on:{"image-change":function(e){return t.uploadFile("email_logo",null,e)}}}):e("file-upload",{staticClass:"logo-upload upload-block",attrs:{image:t.result.email_logo,"file-uploading":t.fileUploading.email_logo,"btn-text":t.$t("profile.cngLogo",{type:t.$t("profile.emailLogo")})},on:{"file-upload":function(e){return t.uploadFile("email_logo",e)}}})],1)]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("label",[t._v(t._s(t.$t("admin.sName")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.result.site_name,expression:"result.site_name"}],class:{invalid:!t.result.site_name&&o},attrs:{type:"text",placeholder:t.$t("admin.sName")},domProps:{value:t.result.site_name},on:{input:function(e){e.target.composing||t.$set(t.result,"site_name",e.target.value)}}}),t._v(" "),!t.result.site_name&&o?e("span",{staticClass:"error"},[t._v("\n        "+t._s(t.$t("category.req",{type:t.$t("admin.sName")}))+"\n      ")]):t._e()]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("label",[t._v(t._s(t.$t("admin.sUrl")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.result.site_url,expression:"result.site_url"}],class:{invalid:!t.result.site_url&&o},attrs:{type:"text",placeholder:t.$t("admin.sUrl")},domProps:{value:t.result.site_url},on:{input:function(e){e.target.composing||t.$set(t.result,"site_url",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("label",[t._v(t._s(t.$t("category.mTitle")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.result.meta_title,expression:"result.meta_title"}],class:{invalid:!t.result.meta_title&&o},attrs:{type:"text",placeholder:t.$t("category.mTitle")},domProps:{value:t.result.meta_title},on:{input:function(e){e.target.composing||t.$set(t.result,"meta_title",e.target.value)}}}),t._v(" "),!t.result.meta_title&&o?e("span",{staticClass:"error"},[t._v("\n        "+t._s(t.$t("category.req",{type:t.$t("category.mTitle")}))+"\n      ")]):t._e()]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("label",[t._v(t._s(t.$t("category.mDesc")))]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.result.meta_description,expression:"result.meta_description"}],class:{invalid:!t.result.meta_description&&o},attrs:{placeholder:t.$t("category.mDesc")},domProps:{value:t.result.meta_description},on:{input:function(e){e.target.composing||t.$set(t.result,"meta_description",e.target.value)}}}),t._v(" "),!t.result.meta_description&&o?e("span",{staticClass:"error"},[t._v("\n        "+t._s(t.$t("category.req",{type:t.$t("category.mDesc")}))+"\n      ")]):t._e()]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("label",[t._v(t._s(t.$t("ship.mk"))+" ("+t._s(t.$t("ship.csk"))+")")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.result.meta_keywords,expression:"result.meta_keywords"}],class:{invalid:!t.result.meta_keywords&&o},attrs:{placeholder:t.$t("ship.mk")},domProps:{value:t.result.meta_keywords},on:{input:function(e){e.target.composing||t.$set(t.result,"meta_keywords",e.target.value)}}}),t._v(" "),!t.result.meta_keywords&&o?e("span",{staticClass:"error"},[t._v("\n              "+t._s(t.$t("category.req",{type:t.$t("ship.mk")}))+"\n            ")]):t._e()]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("label",[t._v(t._s(t.$t("admin.cpyr")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.result.copyright_text,expression:"result.copyright_text"}],class:{invalid:!t.result.copyright_text&&o},attrs:{placeholder:t.$t("admin.cpyr")},domProps:{value:t.result.copyright_text},on:{input:function(e){e.target.composing||t.$set(t.result,"copyright_text",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"dply-felx f-wrap gap-10"},[e("div",{staticClass:"input-wrapper grow"},[e("label",[t._v(t._s(t.$t("admin.pColr")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.result.primary_color,expression:"result.primary_color"}],attrs:{type:"text",placeholder:t.$t("admin.pColr")},domProps:{value:t.result.primary_color},on:{input:function(e){e.target.composing||t.$set(t.result,"primary_color",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-wrapper grow"},[e("label",[t._v(t._s(t.$t("admin.pHvr")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.result.primary_hover_color,expression:"result.primary_hover_color"}],attrs:{type:"text",placeholder:t.$t("admin.pHvr")},domProps:{value:t.result.primary_hover_color},on:{input:function(e){e.target.composing||t.$set(t.result,"primary_hover_color",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("label",[t._v(t._s(t.$t("admin.styl")))]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.result.styling,expression:"result.styling"}],attrs:{placeholder:t.$t("admin.styl")},domProps:{value:t.result.styling},on:{input:function(e){e.target.composing||t.$set(t.result,"styling",e.target.value)}}})])]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:r(49).default,ImageInput:r(491).default,FileUpload:r(477).default})}}]);