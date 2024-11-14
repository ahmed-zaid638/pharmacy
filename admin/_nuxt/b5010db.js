(window.webpackJsonp=window.webpackJsonp||[]).push([[42,23,59],{468:function(e,t,r){"use strict";r.r(t);r(18),r(21),r(23),r(24),r(16),r(7),r(13);var n=r(4),o=r(10);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var c={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(o.c)("ui",["errors"]))},d=c,m=r(15),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return e.errorData?t("ul",{staticClass:"error-list mb-15"},[t("li",{staticClass:"mb-10"},[e._v(e._s(e.$t("error.feo")))]),e._v(" "),e._l(e.errorData,(function(r,n){return t("li",{key:n},[e._v("\n    "+e._s(r)+"\n  ")])}))],2):e._e()}),[],!1,null,null,null);t.default=component.exports},471:function(e,t,r){"use strict";r(32),r(28);t.a={data:function(){return{allowedImageExtensions:/(\.jpg|\.jpeg|\.png|\.svg|\.webp|\.gif)$/i,allowedVideoExtensions:/(\.mp4)$/i,allowedExcelExtensions:/(\.xlsx)$/i,allowedZipExtensions:/(\.zip)$/i,passwordLength:6,maxImageSize:this.$store.state.media.image,maxExcelSize:this.$store.state.media.file,maxVideoSize:this.$store.state.media.video,reg:/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{isValidExcel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return e.size>1024*t?this.$t("util.fSize",{size:t}):this.allowedExcelExtensions.exec(e.name)?null:this.$t("util.invFile")},isValidZip:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return e.size>1024*t?this.$t("util.fSize",{size:t}):this.allowedZipExtensions.exec(e.name)?null:this.$t("util.invFile")},isValidImage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxImageSize,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e.size>1024*t?this.$t("util.fSize",{size:t}):r&&!this.allowedImageExtensions.exec(e.name)?this.$t("util.invFile"):r||this.allowedVideoExtensions.exec(e.name)?null:this.$t("util.invFile")},isValidEmail:function(e){return this.reg.test(e)},isValidLength:function(e){return e&&e.length>=this.passwordLength||!1}}}},790:function(e,t,r){"use strict";r.r(t);r(18),r(21),r(23),r(24),r(16),r(7),r(13);var n=r(1),o=r(4),l=(r(87),r(22),r(158)),c=(r(471),r(49)),d=r(468),m=r(86),v=r(10),f=r(159);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var x={name:"MediaStorageSetting",data:function(){return{gettingData:!1,updating:!1,loading:!1,hasError:!1,result:{mediaStorage:null}}},props:{},mixins:[m.a],components:{Dropdown:f.default,AjaxButton:l.default,Spinner:c.default,ErrorFormatter:d.default},computed:{},methods:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({changeMediaStorage:function(data){this.result.mediaStorage=data.key},fetchingData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.getRequest({api:"mediaStorageFind"});case 4:(data=t.sent)&&(e.result=data),e.loading=!1,t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",e.$nuxt.error(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},updateData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.result.mediaStorage){t.next=15;break}return e.updating=!0,t.prev=2,t.next=5,e.setRequest({params:e.result,api:"mediaStorageAction"});case 5:(data=t.sent)&&(e.result=data,setTimeout((function(){window.location.reload()}),1e3)),t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",e.$nuxt.error(t.t0));case 12:e.updating=!1,t.next=16;break;case 15:e.hasError=!0;case 16:case"end":return t.stop()}}),t,null,[[2,9]])})))()}},Object(v.b)("common",["setRequest","getRequest"])),created:function(){},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchingData();case 2:case"end":return t.stop()}}),t)})))()}},w=x,_=r(15),component=Object(_.a)(w,(function(){var e=this,t=e._self._c;return t("form",{class:{"has-error":e.hasError},on:{submit:function(t){return t.preventDefault(),e.updateData.apply(null,arguments)}}},[e.loading?t("div",{staticClass:"spinner-wrapper"},[t("spinner",{staticClass:"mr-15",attrs:{radius:60,color:"primary"}})],1):e._e(),e._v(" "),t("div",{staticClass:""},[t("div",{staticClass:"input-wrapper single-line"},[t("label",[e._v("\n        "+e._s(e.$t("list.ms"))+"\n      ")]),e._v(" "),t("dropdown",{attrs:{options:e.mediaStorages,"selected-key":e.result.mediaStorage},on:{clicked:e.changeMediaStorage}})],1),e._v(" "),t("div",{staticClass:"input-wrapper single-line"},[t("label",[e._v("\n        "+e._s(e.$t("list.tp"))+"\n      ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.thumbPrefix,expression:"result.thumbPrefix"}],attrs:{type:"text",placeholder:"eg. thumb-"},domProps:{value:e.result.thumbPrefix},on:{input:function(t){t.target.composing||e.$set(e.result,"thumbPrefix",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"input-wrapper single-line"},[t("label",[e._v("\n        "+e._s(e.$t("list.di"))+"\n      ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.defaultImage,expression:"result.defaultImage"}],attrs:{type:"text",placeholder:"eg. default-image.webp"},domProps:{value:e.result.defaultImage},on:{input:function(t){t.target.composing||e.$set(e.result,"defaultImage",t.target.value)}}})]),e._v(" "),"URL"===e.result.mediaStorage?t("div",{staticClass:"input-wrapper single-line"},[t("label",[e._v("\n        "+e._s(e.$t("list.cu"))+"\n      ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.cdnUrl,expression:"result.cdnUrl"}],attrs:{type:"text",placeholder:e.$t("list.cu")},domProps:{value:e.result.cdnUrl},on:{input:function(t){t.target.composing||e.$set(e.result,"cdnUrl",t.target.value)}}})]):"GCS"===e.result.mediaStorage?[t("div",{staticClass:"input-wrapper single-line"},[t("label",[e._v("\n          "+e._s(e.$t("list.cu"))+"\n        ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.cdnUrl,expression:"result.cdnUrl"}],attrs:{type:"text",placeholder:e.$t("list.cu")},domProps:{value:e.result.cdnUrl},on:{input:function(t){t.target.composing||e.$set(e.result,"cdnUrl",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"input-wrapper single-line"},[t("label",[e._v("\n          "+e._s(e.$t("dataPage.gcpi"))+"\n        ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.gcProjectId,expression:"result.gcProjectId"}],attrs:{type:"password",placeholder:e.$t("dataPage.gcpi")},domProps:{value:e.result.gcProjectId},on:{input:function(t){t.target.composing||e.$set(e.result,"gcProjectId",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"input-wrapper single-line"},[t("label",[e._v("\n          "+e._s(e.$t("dataPage.gcsb"))+"\n        ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.gcStorageBucket,expression:"result.gcStorageBucket"}],attrs:{type:"password",placeholder:e.$t("dataPage.gcsb")},domProps:{value:e.result.gcStorageBucket},on:{input:function(t){t.target.composing||e.$set(e.result,"gcStorageBucket",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"input-wrapper single-line"},[t("label",[e._v("\n          "+e._s(e.$t("dataPage.gcspp"))+"\n        ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.gcStoragePathPrefix,expression:"result.gcStoragePathPrefix"}],attrs:{type:"password",placeholder:e.$t("dataPage.gcspp")},domProps:{value:e.result.gcStoragePathPrefix},on:{input:function(t){t.target.composing||e.$set(e.result,"gcStoragePathPrefix",t.target.value)}}})])]:e._e()],2),e._v(" "),t("div",{staticClass:"oflow-hidden"},[e.$can("setting","edit")?t("ajax-button",{staticClass:"primary-btn",attrs:{"fetching-data":e.updating}}):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:r(49).default,Dropdown:r(159).default,AjaxButton:r(158).default})}}]);