(window.webpackJsonp=window.webpackJsonp||[]).push([[166,23,60,78],{468:function(t,e,r){"use strict";r.r(e);r(18),r(21),r(23),r(24),r(16),r(7),r(13);var n=r(4),o=r(10);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var c={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(o.c)("ui",["errors"]))},d=c,m=r(15),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return t.errorData?e("ul",{staticClass:"error-list mb-15"},[e("li",{staticClass:"mb-10"},[t._v(t._s(t.$t("error.feo")))]),t._v(" "),t._l(t.errorData,(function(r,n){return e("li",{key:n},[t._v("\n    "+t._s(r)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},471:function(t,e,r){"use strict";r(32),r(28);e.a={data:function(){return{allowedImageExtensions:/(\.jpg|\.jpeg|\.png|\.svg|\.webp|\.gif)$/i,allowedVideoExtensions:/(\.mp4)$/i,allowedExcelExtensions:/(\.xlsx)$/i,allowedZipExtensions:/(\.zip)$/i,passwordLength:6,maxImageSize:this.$store.state.media.image,maxExcelSize:this.$store.state.media.file,maxVideoSize:this.$store.state.media.video,reg:/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{isValidExcel:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return t.size>1024*e?this.$t("util.fSize",{size:e}):this.allowedExcelExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidZip:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return t.size>1024*e?this.$t("util.fSize",{size:e}):this.allowedZipExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidImage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxImageSize,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.size>1024*e?this.$t("util.fSize",{size:e}):r&&!this.allowedImageExtensions.exec(t.name)?this.$t("util.invFile"):r||this.allowedVideoExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidEmail:function(t){return this.reg.test(t)},isValidLength:function(t){return t&&t.length>=this.passwordLength||!1}}}},493:function(t,e,r){"use strict";r.r(e);r(125);var n={name:"PasswordField",data:function(){return{password:"",passwordFieldType:"password"}},props:{isInvalid:{type:Boolean,default:!1},value:{type:String}},watch:{value:function(t){this.password=t}},mixins:[],components:{},computed:{isPasswordTypePassword:function(){return"password"===this.passwordFieldType}},methods:{passwordFieldToggle:function(){this.isPasswordTypePassword?this.passwordFieldType="text":this.passwordFieldType="password"}},mounted:function(){this.password=this.value}},o=r(15),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"icon-input right-icon"},[e("i",{staticClass:"icon password-icon"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}}],class:{invalid:!t.password||t.isInvalid},attrs:{type:t.passwordFieldType,placeholder:t.$t("user.pass")},domProps:{value:t.password},on:{change:function(e){return t.$emit("change",t.password)},input:function(e){e.target.composing||(t.password=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("i",{staticClass:"icon",class:t.isPasswordTypePassword?"eye-close-icon":"eye-icon",on:{click:t.passwordFieldToggle}})])}),[],!1,null,null,null);e.default=component.exports},911:function(t,e,r){"use strict";r.r(e);r(125),r(18),r(21),r(23),r(24),r(16),r(7),r(13);var n=r(1),o=r(4),l=(r(22),r(10)),c=r(471),d=r(158),m=r(468),f=r(493);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var w={name:"login",layout:"login-layout",middleware:["common-middleware","non-logged-in"],data:function(){return{password:"",code:"",confirmPassword:"",hasError:!1,formSubmitting:!1}},mixins:[c.a],components:{AjaxButton:d.default,ErrorFormatter:m.default,PasswordField:f.default},watch:{},computed:{email:function(){var t;return null===(t=this.$route)||void 0===t||null===(t=t.query)||void 0===t?void 0:t.email},isInvalidEmail:function(){return this.email&&!this.isValidEmail(this.email)},isLengthInvalid:function(){return this.password&&!this.isValidLength(this.password)},invalidPassword:function(){return!this.isValidLength(this.password)},passwordValid:function(){return this.password&&!this.invalidPassword}},methods:h(h({checkForm:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hasError=!1,t.email&&!t.isInvalidEmail&&t.code&&t.password&&t.password===t.confirmPassword){e.next=4;break}return t.hasError=!0,e.abrupt("return",!1);case 4:return t.formSubmitting=!0,e.prev=5,e.next=8,t.setRequest({params:{password:t.password,email:t.email,code:t.code},api:"verifyCode"});case 8:e.sent&&t.$router.push("/login"),e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(5),e.abrupt("return",t.$nuxt.error(e.t0));case 15:t.formSubmitting=!1;case 16:case"end":return e.stop()}}),e,null,[[5,12]])})))()}},Object(l.b)("ui",["setErrors"])),Object(l.b)("common",["setRequest"])),mounted:function(){this.setErrors()}},y=r(15),component=Object(y.a)(w,(function(){var t=this,e=t._self._c;return e("form",{staticClass:"login-form",class:{"has-error":t.hasError},on:{submit:function(e){return e.preventDefault(),t.checkForm()}}},[e("h4",{staticClass:"mb-30 mb-sm-15"},[t._v("\n    "+t._s(t.$t("profile.putCode"))+"\n  ")]),t._v(" "),e("error-formatter"),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("div",{staticClass:"icon-input"},[e("i",{staticClass:"icon email-icon"},[t._v(" ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],class:{invalid:!t.email||t.isInvalidEmail},attrs:{disabled:"",type:"text",placeholder:t.$t("fSale.email")},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),!t.email&&t.hasError?e("span",{staticClass:"error"},[t._v("\n      "+t._s(t.$t("category.req",{type:t.$t("fSale.email")}))+"\n    ")]):t.isInvalidEmail&&t.hasError?e("span",{staticClass:"error"},[t._v("\n      "+t._s(t.$t("user.isValid",{type:t.$t("fSale.email")}))+"\n    ")]):t._e()]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("div",{staticClass:"icon-input"},[e("i",{staticClass:"icon code-icon"},[t._v(" ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.code,expression:"code",modifiers:{trim:!0}}],class:{invalid:!t.code},attrs:{type:"text",placeholder:t.$t("profile.cfe")},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),!t.code&&t.hasError?e("span",{staticClass:"error"},[t._v("\n      "+t._s(t.$t("category.req",{type:t.$t("setting.code")}))+"\n    ")]):t._e()]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("password-field",{attrs:{value:t.password,"is-invalid":t.isLengthInvalid},on:{change:function(e){t.password=e}}}),t._v(" "),!t.password&&t.hasError?e("span",{staticClass:"error"},[t._v("\n      "+t._s(t.$t("category.req",{type:t.$t("user.pass")}))+"\n    ")]):t.invalidPassword&&t.hasError?e("span",{staticClass:"error"},[t._v("\n     "+t._s(t.$t("user.inPass"))+"\n    ")]):t._e()],1),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("password-field",{attrs:{value:t.confirmPassword},on:{change:function(e){t.confirmPassword=e}}}),t._v(" "),!t.confirmPassword&&t.hasError?e("span",{staticClass:"error"},[t._v("\n      "+t._s(t.$t("category.req",{type:t.$t("user.pass")}))+"\n    ")]):t.confirmPassword!==t.password&&t.hasError?e("span",{staticClass:"error"},[t._v("\n      "+t._s(t.$t("user.nMatch"))+"\n    ")]):t._e()],1),t._v(" "),e("div",{staticClass:"dply-felx j-right mt-15"},[e("nuxt-link",{staticClass:"link",attrs:{to:"/login"}},[t._v("\n      "+t._s(t.$t("profile.ltya"))+"\n    ")])],1),t._v(" "),e("ajax-button",{staticClass:"mt-20 primary-btn",attrs:{"fetching-data":t.formSubmitting,"loading-text":t.$t("dataPage.verify"),text:t.$t("dataPage.up"),"activate-btn":!0}})],1)}),[],!1,null,"8720639e",null);e.default=component.exports;installComponents(component,{ErrorFormatter:r(468).default,PasswordField:r(493).default,AjaxButton:r(158).default})}}]);