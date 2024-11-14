/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[149,31],{470:function(t,e,r){t.exports=function(){"use strict";var g="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute("data-src"))&&(a[i].src=o);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var n=",";if(t.getAttribute("data-background-delimiter")&&(n=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(n).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var l=t.getAttribute("data-background-image-set").split(n),u=l[0].substr(0,l[0].indexOf(" "))||l[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===l.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+l+"); background-image: image-set("+l+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var r=function(t){return"true"===t.getAttribute("data-loaded")},o=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var n,a,l=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=Object.assign({},t,d),i=c.root,m=c.rootMargin,v=c.threshold,u=c.load,g=c.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((n=u,a=g,function(t,o){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(o.unobserve(t.target),r(t.target)||(n(t.target),e(t.target),a(t.target)))}))}),{root:i,rootMargin:m,threshold:v}));for(var f,h=o(l,i),b=0;b<h.length;b++)(f=h[b]).getAttribute("data-placeholder-background")&&(f.style.background=f.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=o(l,i),n=0;n<t.length;n++)r(t[n])||(s?s.observe(t[n]):(u(t[n]),e(t[n]),g(t[n])))},triggerLoad:function(t){r(t)||(u(t),e(t),g(t))},observer:s}}}()},947:function(t,e,r){"use strict";r.r(e);var o=r(1),n=(r(22),r(483)),l=r(86),d=r(296),c=r.n(d),m={name:"subscription-email-format",middleware:["common-middleware","auth"],data:function(){return{viewAsHtml:!0,loading:!1,result:{id:"",title:"",subject:"",body:""}}},mixins:[l.a],components:{DataPage:n.default},computed:{},methods:{submitForm:function(){this.result.body=c.a.sanitize(this.result.body),this.$refs.dataPage.checkForm()},viewHtml:function(){this.viewAsHtml=!this.viewAsHtml}},mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},v=r(15),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("data-page",{ref:"dataPage",attrs:{"set-api":"setSubscriptionEmailFormat","get-api":"getSubscriptionEmailFormat","route-name":"subscription-email-formats",name:t.$t("dataPage.sefUp"),"validation-keys":["title","subject","body"],result:t.result,"emit-before-submit":!0,gate:"subscription_email_format","empty-store-variable":"allSubscriptionEmailFormats"},on:{result:function(e){t.result=e},"before-submit":t.submitForm},scopedSlots:t._u([{key:"form",fn:function(r){var o=r.hasError;return[e("div",{staticClass:"input-wrapper"},[e("label",[t._v(t._s(t.$t("index.title")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.result.title,expression:"result.title"}],class:{invalid:!t.result.title&&o},attrs:{type:"text",placeholder:t.$t("index.title"),name:"title"},domProps:{value:t.result.title},on:{input:function(e){e.target.composing||t.$set(t.result,"title",e.target.value)}}}),t._v(" "),!t.result.title&&o?e("span",{staticClass:"error"},[t._v("\n        "+t._s(t.$t("category.req",{type:t.$t("index.title")}))+"\n      ")]):t._e()]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("label",[t._v(t._s(t.$t("util.sub")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.result.subject,expression:"result.subject"}],class:{invalid:!t.result.subject&&o},attrs:{type:"text",placeholder:t.$t("util.sub"),name:"subject"},domProps:{value:t.result.subject},on:{input:function(e){e.target.composing||t.$set(t.result,"subject",e.target.value)}}}),t._v(" "),!t.result.subject&&o?e("span",{staticClass:"error"},[t._v("\n        "+t._s(t.$t("category.req",{type:t.$t("util.sub")}))+"\n      ")]):t._e()]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("label",[e("span",{staticClass:"mr-10"},[t._v(t._s(t.$t("profile.body")))]),t._v(" "),e("button",{staticClass:"btn-clear",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.viewHtml.apply(null,arguments)}}},[t.viewAsHtml?e("b",[t._v(t._s(t.$t("profile.vrh")))]):e("b",[t._v(t._s(t.$t("profile.vah")))])])]),t._v(" "),t.viewAsHtml?e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.result.body,expression:"result.body"}],class:{invalid:!t.result.body&&o},attrs:{placeholder:t.$t("profile.ebah")},domProps:{value:t.result.body},on:{input:function(e){e.target.composing||t.$set(t.result,"body",e.target.value)}}}):e("div",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:t.result.body,expression:"result.body"}],staticClass:"textarea"}),t._v(" "),!t.result.body&&o?e("span",{staticClass:"error"},[t._v("\n        "+t._s(t.$t("category.req",{type:t.$t("profile.body")}))+"\n      ")]):t._e()])]}}])})}),[],!1,null,"8a5325c8",null);e.default=component.exports}}]);