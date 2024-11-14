(window.webpackJsonp=window.webpackJsonp||[]).push([[1,21,23,67],{468:function(t,e,r){"use strict";r.r(e);r(18),r(21),r(23),r(24),r(16),r(7),r(13);var n=r(4),l=r(10);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var c={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(l.c)("ui",["errors"]))},d=c,m=r(15),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return t.errorData?e("ul",{staticClass:"error-list mb-15"},[e("li",{staticClass:"mb-10"},[t._v(t._s(t.$t("error.feo")))]),t._v(" "),t._l(t.errorData,(function(r,n){return e("li",{key:n},[t._v("\n    "+t._s(r)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},469:function(t,e,r){"use strict";r.r(e);var n=r(470),l=r.n(n),o=r(86),c={name:"LazyImage",props:{alt:{type:String,default:null},title:{type:String,default:null},backgroundColor:{type:String,default:"#d9f4eb"},lazySrc:{type:String,default:null},lazySrcset:{type:String,default:null}},data:function(){return{loading:!0}},mixins:[o.a],computed:{aspectRatio:function(){return this.width&&this.height?this.height/this.width*100:null},style:function(){var style={};return this.width&&(style.width="".concat(this.width,"px"),this.height||(style.height="".concat(.66*this.width,"px"))),this.loading&&this.aspectRatio&&(style.height=this.height?"".concat(this.height,"px"):"".concat(this.applyAspectRatio,"px")),style}},mounted:function(){var t=this,e=function(){t.loading=!1,t.$el.style.opacity=1};this.$el.addEventListener("load",e),this.$once("hook:destroyed",(function(){t.$el.removeEventListener("load",e)})),l()(this.$el,{load:function(t){t.src=t.getAttribute("data-src")}}).observe()},methods:{onError:function(t){t.target.src=this.getImageURL()}}},d=r(15),component=Object(d.a)(c,(function(){var t=this;return(0,t._self._c)("img",{staticClass:"lazy-img",style:t.style,attrs:{"data-src":t.lazySrc,alt:t.alt,title:t.title,height:"50",width:"50"},on:{error:t.onError}})}),[],!1,null,null,null);e.default=component.exports},472:function(t,e,r){"use strict";r(32),r(28);e.a={data:function(){return{allowedImageExtensions:/(\.jpg|\.jpeg|\.png|\.svg|\.webp|\.gif)$/i,allowedVideoExtensions:/(\.mp4)$/i,allowedExcelExtensions:/(\.xlsx)$/i,allowedZipExtensions:/(\.zip)$/i,passwordLength:6,maxImageSize:this.$store.state.media.image,maxExcelSize:this.$store.state.media.file,maxVideoSize:this.$store.state.media.video,reg:/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{isValidExcel:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return t.size>1024*e?this.$t("util.fSize",{size:e}):this.allowedExcelExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidZip:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return t.size>1024*e?this.$t("util.fSize",{size:e}):this.allowedZipExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidImage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxImageSize,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.size>1024*e?this.$t("util.fSize",{size:e}):r&&!this.allowedImageExtensions.exec(t.name)?this.$t("util.invFile"):r||this.allowedVideoExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidEmail:function(t){return this.reg.test(t)},isValidLength:function(t){return t&&t.length>=this.passwordLength||!1}}}},479:function(t,e,r){"use strict";r.r(e);r(124);var n=r(158),l=r(86),o=r(472),c=r(469),d={name:"FileUpload",data:function(){return{uploadMessage:null}},mixins:[l.a,o.a],components:{LazyImage:c.default,AjaxButton:n.default},props:{btnType:{type:String,default:"outline"},fileUploading:{type:Boolean,default:!1},imageUrl:{type:String,default:""},image:{type:String,default:""},imageTitle:{type:String,default:""},onlyIcon:{type:String,default:null},btnText:{type:String,default:function(){return this.$t("profile.upload")}}},computed:{previewImageUrl:function(){return this.imageUrl||this.getImageURL(this.imageName)||""},imageName:function(){var t;return null!==(t=this.image)&&void 0!==t&&t.trim()?this.image:this.defaultImage}},methods:{fileChanged:function(t){var e=t.target.files[0];e&&(this.uploadMessage=this.isValidImage(e),this.uploadMessage||this.$emit("file-upload",e))}}},m=r(15),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"file-wrapper",class:{"has-error":t.uploadMessage}},[e("div",[e("div",{staticClass:"file-input"},[e("input",{ref:"fileInput",attrs:{type:"file",accept:"image/*"},on:{change:t.fileChanged}}),t._v(" "),t.fileUploading?t._e():e("img",{attrs:{src:t.previewImageUrl,alt:t.imageTitle}})]),t._v(" "),t.uploadMessage?e("span",{staticClass:"error mb-10"},[t._v("\n      "+t._s(t.uploadMessage)+"\n    ")]):t._e()]),t._v(" "),e("ajax-button",{staticClass:"w-100",class:"".concat(t.btnType,"-btn"),attrs:{type:"button",color:"primary",text:t.btnText,"only-icon":t.onlyIcon,"fetching-data":t.fileUploading},on:{clicked:function(e){return t.$refs.fileInput.click()}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AjaxButton:r(158).default})},483:function(t,e,r){"use strict";r.r(e);r(32),r(18),r(21),r(23),r(24),r(16);var n=r(1),l=r(4),o=(r(22),r(37),r(199),r(7),r(13),r(158)),c=r(86),d=r(479),m=r(49),f=r(159),h=r(468),v=r(10),y=r(493);function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){Object(l.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var j={name:"DataPage",middleware:["common-middleware","auth"],data:function(){return{loading:!1,redirect:!1,formSubmitting:!1,fileUploading:!1,hasError:!1}},props:{result:{type:Object,default:function(){return null}},emitBeforeSubmit:{type:Boolean,default:!1},name:{type:String,default:""},gate:{type:String,default:null},hash:{type:String,default:""},setApi:{type:String,default:""},setImageApi:{type:String,default:""},getApi:{type:String,default:""},emptyStoreVariable:{type:String,default:null},routeName:{type:String,default:""},validationKeys:{type:Array,default:[]},fileKeys:{type:Array,default:function(){return[]}}},mixins:[c.a],components:{ImageInput:y.default,Spinner:m.default,AjaxButton:o.default,ErrorFormatter:h.default,FileUpload:d.default,Dropdown:f.default},computed:w({id:function(){var t;return this.isAdding?"":null===(t=this.$route)||void 0===t||null===(t=t.params)||void 0===t?void 0:t.id},isAdding:function(){var t;return isNaN(null===(t=this.$route)||void 0===t||null===(t=t.params)||void 0===t?void 0:t.id)}},Object(v.c)(["mediaStorage"])),methods:w({uploadFile:function(t){var e=arguments,r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var l,o,c,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=e.length>1&&void 0!==e[1]?e[1]:null,n.prev=1,o={},t?(c=new FormData,r.fileKeys.forEach((function(i){c.append(i,r.result[i])})),c.append("photo",t),o=c):(r.fileKeys.forEach((function(i){o[i]=r.result[i]})),o.photo=l),r.fileUploading=!0,n.next=7,r.setImageById({id:r.id,params:o,api:r.setImageApi});case 7:if(!(data=n.sent)||r.gate&&!r.$can(r.gate,"view")){n.next=13;break}return n.next=11,r.$emit("result",Object.assign({},data));case 11:return n.next=13,r.$router.push({path:"/".concat(r.routeName,"/").concat(r.result.id)});case 13:r.fileUploading=!1,n.next=19;break;case 16:return n.prev=16,n.t0=n.catch(1),n.abrupt("return",r.$nuxt.error(n.t0));case 19:case"end":return n.stop()}}),n,null,[[1,16]])})))()},redirectingEnable:function(t){this.redirect="save"===t},formSubmit:function(){this.emitBeforeSubmit?this.$emit("before-submit"):this.checkForm()},checkForm:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.validationKeys.findIndex((function(i){return!t.result[i]}))>-1)){e.next=3;break}return t.hasError=!0,e.abrupt("return",!1);case 3:return t.redirectingEnable(event.submitter.name),t.formSubmitting=!0,e.prev=5,delete t.result.created_at,delete t.result.updated_at,e.next=10,t.setById({id:t.id,params:t.result,api:t.setApi});case 10:if(!(data=e.sent)){e.next=22;break}return t.emptyAllList(t.emptyStoreVariable),e.next=15,t.$emit("result",Object.assign({},data));case 15:if(!(!t.gate||t.$can(t.gate,"view")&&null!==(r=t.result)&&void 0!==r&&r.id)){e.next=18;break}return e.next=18,t.$router.push({path:"/".concat(t.routeName).concat(t.redirect?"":"/"+(null===(n=t.result)||void 0===n?void 0:n.id)),hash:t.hash});case 18:return e.next=20,t.$emit("on-success",Object.assign({},data));case 20:e.next=23;break;case 22:t.$refs.formWrapper.scrollIntoView({behavior:"smooth"});case 23:e.next=28;break;case 25:return e.prev=25,e.t0=e.catch(5),e.abrupt("return",t.$nuxt.error(e.t0));case 28:t.formSubmitting=!1;case 29:case"end":return e.stop()}}),e,null,[[5,25]])})))()},fetchingData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.t0=t,e.t1=Object,e.t2={},e.next=7,t.getById({id:t.id,params:{time_zone:t.timeZone},api:t.getApi});case 7:e.t3=e.sent,e.t4=e.t1.assign.call(e.t1,e.t2,e.t3),e.t0.$emit.call(e.t0,"result",e.t4),t.loading=!1,e.next=16;break;case 13:return e.prev=13,e.t5=e.catch(0),e.abrupt("return",t.$nuxt.error(e.t5));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},Object(v.b)("common",["getById","setById","setImageById","emptyAllList"])),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isAdding||t.$nextTick((function(){t.gate&&!t.$can(t.gate,"view")||t.fetchingData()}));case 1:case"end":return e.stop()}}),e)})))()}},O=j,S=r(15),component=Object(S.a)(O,(function(){var t=this,e=t._self._c;return e("div",{ref:"formWrapper",staticClass:"tab-sidebar"},[e("h4",{staticClass:"title"},[t._v(t._s(t.$t("profile.form",{name:t.name})))]),t._v(" "),e("div",{staticClass:"form-wrapper"},[e("error-formatter"),t._v(" "),e("error-formatter",{attrs:{type:"image"}}),t._v(" "),t.loading?e("div",{staticClass:"spinner-wrapper"},[e("spinner",{staticClass:"mr-15",attrs:{radius:60,color:"primary"}})],1):t._e(),t._v(" "),t.loading?t._e():e("div",[t.fileKeys.length&&(!t.gate||t.$can(t.gate,"edit")||t.$can(t.gate,"create"))?e("div",[t.mediaStorageData.URL===t.mediaStorage?e("image-input",{staticClass:"mb-20 mb-sm-15",attrs:{saving:t.fileUploading,image:t.result.image},on:{"image-change":function(e){return t.uploadFile(null,e)}}}):e("file-upload",{staticClass:"mb-20 mb-sm-15",attrs:{image:t.result.image,"file-uploading":t.fileUploading,"only-icon":"upload-icon"},on:{"file-upload":t.uploadFile}})],1):t.fileKeys.length&&t.$can(t.gate,"view")?e("img",{staticClass:"mx-w-300x",attrs:{src:t.getImageURL(t.result.image)}}):t._e()]),t._v(" "),e("form",{class:{"has-error":t.hasError},on:{submit:function(e){return e.preventDefault(),t.formSubmit.apply(null,arguments)}}},[t._t("form",null,{hasError:t.hasError}),t._v(" "),!t.gate||t.$can(t.gate,"edit")||t.$can(t.gate,"create")?e("div",{staticClass:"dply-felx j-right single-btn"},[e("ajax-button",{staticClass:"primary-btn",attrs:{name:"save-edit",text:t.$t("list.svn"),"fetching-data":t.formSubmitting&&!t.redirect}}),t._v(" "),e("ajax-button",{staticClass:"primary-btn",attrs:{name:"save",text:t.$t("setting.sv"),"fetching-data":t.formSubmitting&&t.redirect}})],1):t._e()],2)],1)])}),[],!1,null,"ff8edb5a",null);e.default=component.exports;installComponents(component,{ErrorFormatter:r(468).default,Spinner:r(49).default,ImageInput:r(493).default,FileUpload:r(479).default,AjaxButton:r(158).default})},493:function(t,e,r){"use strict";r.r(e);r(124);var n=r(158),l={name:"ImageInput",data:function(){return{imageData:null}},mixins:[r(86).a],components:{AjaxButton:n.default},props:{saving:{type:Boolean,default:!1},image:{type:String,default:""}},watch:{image:function(t){this.imageData=t}},computed:{imageName:function(){var t;return null!==(t=this.image)&&void 0!==t&&t.trim()?this.image:this.defaultImage}},methods:{},mounted:function(){this.imageData=this.image}},o=r(15),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"image-url-wrap file-wrapper"},[e("div",{staticClass:"file-input"},[e("img",{attrs:{src:t.getImageURL(t.imageName)}})]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("label",[t._v(t._s(t.$t("error.fn")))]),t._v(" "),e("div",{staticClass:"image-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.imageData,expression:"imageData"}],attrs:{type:"text",placeholder:t.$t("error.fn")},domProps:{value:t.imageData},on:{input:function(e){e.target.composing||(t.imageData=e.target.value)}}}),t._v(" "),e("ajax-button",{staticClass:"primary-btn",attrs:{type:"button",text:t.$t("setting.sv"),"loading-text":"","fetching-data":t.saving},on:{clicked:function(e){return t.$emit("image-change",t.imageData)}}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AjaxButton:r(158).default})}}]);