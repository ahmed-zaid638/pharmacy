(window.webpackJsonp=window.webpackJsonp||[]).push([[107,23,59],{468:function(t,e,r){"use strict";r.r(e);r(18),r(21),r(23),r(24),r(16),r(7),r(13);var n=r(4),o=r(10);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var c={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(o.c)("ui",["errors"]))},m=c,f=r(15),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return t.errorData?e("ul",{staticClass:"error-list mb-15"},[e("li",{staticClass:"mb-10"},[t._v(t._s(t.$t("error.feo")))]),t._v(" "),t._l(t.errorData,(function(r,n){return e("li",{key:n},[t._v("\n    "+t._s(r)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},471:function(t,e,r){"use strict";r(32),r(28);e.a={data:function(){return{allowedImageExtensions:/(\.jpg|\.jpeg|\.png|\.svg|\.webp|\.gif)$/i,allowedVideoExtensions:/(\.mp4)$/i,allowedExcelExtensions:/(\.xlsx)$/i,allowedZipExtensions:/(\.zip)$/i,passwordLength:6,maxImageSize:this.$store.state.media.image,maxExcelSize:this.$store.state.media.file,maxVideoSize:this.$store.state.media.video,reg:/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{isValidExcel:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return t.size>1024*e?this.$t("util.fSize",{size:e}):this.allowedExcelExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidZip:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return t.size>1024*e?this.$t("util.fSize",{size:e}):this.allowedZipExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidImage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxImageSize,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.size>1024*e?this.$t("util.fSize",{size:e}):r&&!this.allowedImageExtensions.exec(t.name)?this.$t("util.invFile"):r||this.allowedVideoExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidEmail:function(t){return this.reg.test(t)},isValidLength:function(t){return t&&t.length>=this.passwordLength||!1}}}},884:function(t,e,r){"use strict";r.r(e);r(125),r(18),r(21),r(23),r(24),r(16),r(7),r(13);var n=r(1),o=r(4),l=(r(22),r(10)),c=r(471),m=r(158),f=r(468);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v={name:"login",layout:"login-layout",middleware:["common-middleware","non-logged-in"],data:function(){return{email:"",hasError:!1,formSubmitting:!1}},mixins:[c.a],components:{AjaxButton:m.default,ErrorFormatter:f.default},watch:{},computed:{isInvalidEmail:function(){return this.email&&!this.isValidEmail(this.email)},isLengthInvalid:function(){return this.password&&!this.isValidLength(this.password)}},methods:h(h({checkForm:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hasError=!1,t.email&&!t.isInvalidEmail){e.next=4;break}return t.hasError=!0,e.abrupt("return",!1);case 4:return t.formSubmitting=!0,e.prev=5,e.next=8,t.setRequest({params:{email:t.email},api:"forgotPassword"});case 8:e.sent&&t.$router.push("/verify-code?email=".concat(t.email)),e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(5),e.abrupt("return",t.$nuxt.error(e.t0));case 15:t.formSubmitting=!1;case 16:case"end":return e.stop()}}),e,null,[[5,12]])})))()}},Object(l.b)("ui",["setErrors"])),Object(l.b)("common",["setRequest"])),mounted:function(){this.setErrors()}},x=r(15),component=Object(x.a)(v,(function(){var t=this,e=t._self._c;return e("form",{staticClass:"login-form",class:{"has-error":t.hasError},on:{submit:function(e){return e.preventDefault(),t.checkForm()}}},[e("h4",{staticClass:"mb-30 mb-sm-15"},[t._v("\n    "+t._s(t.$t("profile.sendCode"))+"\n  ")]),t._v(" "),e("error-formatter"),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("div",{staticClass:"icon-input"},[e("i",{staticClass:"icon email-icon"},[t._v(" ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],class:{invalid:!t.email||t.isInvalidEmail},attrs:{type:"text",placeholder:t.$t("fSale.email")},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),!t.email&&t.hasError?e("span",{staticClass:"error"},[t._v("\n      "+t._s(t.$t("category.req",{type:t.$t("fSale.email")}))+"\n    ")]):t.isInvalidEmail&&t.hasError?e("span",{staticClass:"error"},[t._v("\n      "+t._s(t.$t("user.isValid",{type:t.$t("fSale.email")}))+"\n    ")]):t._e()]),t._v(" "),e("div",{staticClass:"dply-felx j-right mt-15"},[e("nuxt-link",{staticClass:"link",attrs:{to:"/login"}},[t._v("\n      "+t._s(t.$t("profile.ltya"))+"\n    ")])],1),t._v(" "),e("ajax-button",{staticClass:"mt-20 primary-btn",attrs:{"fetching-data":t.formSubmitting,"loading-text":t.$t("profile.se"),text:t.$t("profile.svc"),"activate-btn":!0}})],1)}),[],!1,null,"672f2cd9",null);e.default=component.exports;installComponents(component,{ErrorFormatter:r(468).default,AjaxButton:r(158).default})}}]);