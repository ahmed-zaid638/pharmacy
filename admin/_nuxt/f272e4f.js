(window.webpackJsonp=window.webpackJsonp||[]).push([[9,23,59],{468:function(t,e,r){"use strict";r.r(e);r(18),r(21),r(23),r(24),r(16),r(7),r(13);var n=r(4),d=r(10);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var l={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(d.c)("ui",["errors"]))},c=l,v=r(15),component=Object(v.a)(c,(function(){var t=this,e=t._self._c;return t.errorData?e("ul",{staticClass:"error-list mb-15"},[e("li",{staticClass:"mb-10"},[t._v(t._s(t.$t("error.feo")))]),t._v(" "),t._l(t.errorData,(function(r,n){return e("li",{key:n},[t._v("\n    "+t._s(r)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},471:function(t,e,r){"use strict";r(32),r(28);e.a={data:function(){return{allowedImageExtensions:/(\.jpg|\.jpeg|\.png|\.svg|\.webp|\.gif)$/i,allowedVideoExtensions:/(\.mp4)$/i,allowedExcelExtensions:/(\.xlsx)$/i,allowedZipExtensions:/(\.zip)$/i,passwordLength:6,maxImageSize:this.$store.state.media.image,maxExcelSize:this.$store.state.media.file,maxVideoSize:this.$store.state.media.video,reg:/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{isValidExcel:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return t.size>1024*e?this.$t("util.fSize",{size:e}):this.allowedExcelExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidZip:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return t.size>1024*e?this.$t("util.fSize",{size:e}):this.allowedZipExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidImage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxImageSize,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.size>1024*e?this.$t("util.fSize",{size:e}):r&&!this.allowedImageExtensions.exec(t.name)?this.$t("util.invFile"):r||this.allowedVideoExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidEmail:function(t){return this.reg.test(t)},isValidLength:function(t){return t&&t.length>=this.passwordLength||!1}}}},486:function(t,e,r){"use strict";var n=r(3),d=r(294).values;n({target:"Object",stat:!0},{values:function(t){return d(t)}})},703:function(t,e,r){"use strict";r(21),r(124),r(32),r(7);e.a={data:function(){return{}},methods:{formatAddress:function(t){var e=[];if(e.push(t.address_1),t.address_2&&e.push(t.address_2),e.push(t.city+"-"+t.zip),this.countryList[t.country]){var r=this.countryList[t.country];r.states[t.state]&&e.push(r.states[t.state].name),e.push(r.name)}return e.filter((function(t){return null!=t})).join(", ")}}}},784:function(t,e,r){"use strict";r.r(e);r(32),r(16),r(125),r(18),r(21),r(23),r(24),r(7),r(13);var n=r(1),d=r(4),o=(r(486),r(22),r(86)),l=r(471),c=r(482),v=r(159),h=r(10),m=r(703),f=r(158),y=r(49),_=r(468);function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){Object(d.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var w={name:"AddressPopup",data:function(){return{states:{},addressData:null,loading:!1,hasAddressErrors:!1,dropdownOpen:!1,submittingAddressData:!1}},watch:{location:function(){this.settingCountry()}},props:{selectedUser:{type:Object,required:!0},address:{type:Object,default:function(){return null}}},components:{ErrorFormatter:_.default,Spinner:y.default,AjaxButton:f.default,PopOver:c.default,Dropdown:v.default},computed:x(x(x({location:function(){var t,e;return{countryCode:null===(t=this.setting)||void 0===t?void 0:t.default_country,region:null==this||null===(e=this.setting)||void 0===e?void 0:e.default_state}},invalidEmail:function(){var t;return!this.isValidEmail(null===(t=this.addressData)||void 0===t?void 0:t.email)},emailValid:function(){return this.addressData.email&&!this.invalidEmail},phoneCode:function(){var t;return this.phoneList[null===(t=this.addressData)||void 0===t?void 0:t.country]},editing:function(){return this.addressData&&this.addressData.id}},Object(h.c)("language",["langCode"])),Object(h.c)("resource",["countryList","phoneList"])),Object(h.c)("setting",["setting"])),mixins:[o.a,l.a,m.a],methods:x(x({savingAddressData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.submittingAddressData=!0,e.next=4,t.setRequest({params:x(x({},t.addressData),{user_id:t.selectedUser.id}),api:"setUserAddress"});case 4:data=e.sent,t.submittingAddressData=!1,201!==data.status&&t.$emit("close",t.addressData?data:null),e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",t.$nuxt.error(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},settingCountry:function(){var t,e,r;this.addressData.country=""!==this.addressData.country.trim()?this.addressData.country.trim():this.location.countryCode,this.states=null!==(t=this.addressData)&&void 0!==t&&t.country?this.countryList[this.addressData.country].states:"",this.addressData.state=""!==(null===(e=this.addressData)||void 0===e||null===(e=e.state)||void 0===e?void 0:e.trim())?null===(r=this.addressData)||void 0===r||null===(r=r.state)||void 0===r?void 0:r.trim():this.location.region},selectedCountry:function(t){var e;this.addressData=x(x({},this.addressData),{country:t.value.code2}),this.states=t.value.states,this.addressData.state=Object.keys(t.value.states).length?null===(e=Object.values(t.value.states)[0])||void 0===e?void 0:e.code:""},selectedState:function(t){this.addressData.state=t.value.code}},Object(h.b)("resource",["setCountryList","setPhoneList"])),Object(h.b)("common",["setToastMessage","setToastError","getRequest","setRequest"])),created:function(){},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data,n,d,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.countryList&&t.phoneList){e.next=9;break}return t.loading=!0,e.next=4,t.getRequest({params:null,lang:t.langCode,api:"countriesPhones"});case 4:r=e.sent,data=r.data,t.setCountryList(null==data?void 0:data.countries),t.setPhoneList(null==data?void 0:data.phones),t.loading=!1;case 9:t.address?t.addressData=x(x({},t.addressData),t.address):(t.addressData={id:"",city:"",email:"",name:"",phone:"",country:"",state:"",zip:"",address_1:"",address_2:""},t.$nextTick((function(){t.selectedUser&&(t.addressData.name=t.selectedUser.name,t.addressData.email=t.selectedUser.email)}))),t.addressData.country?(t.states=null!==(n=t.addressData)&&void 0!==n&&n.country?t.countryList[t.addressData.country].states:"",t.addressData.state=""!==(null===(d=t.addressData)||void 0===d||null===(d=d.state)||void 0===d?void 0:d.trim())?null===(o=t.addressData)||void 0===o||null===(o=o.state)||void 0===o?void 0:o.trim():t.location.region):t.settingCountry();case 11:case"end":return e.stop()}}),e)})))()}},C=r(15),component=Object(C.a)(w,(function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.savingAddressData.apply(null,arguments)}}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.loading?e("div",{staticClass:"spinner-wrapper flex layer-white"},[e("spinner",{attrs:{radius:100}})],1):t._e()]),t._v(" "),t.addressData?e("pop-over",{staticClass:"address-popup popup-top-auto",attrs:{title:t.$t("ship.ua"),"elem-id":"user-address-pop-over",layer:!0},on:{close:function(e){return t.$emit("close")}},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"sb"},[e("error-formatter"),t._v(" "),e("div",{staticClass:"dply-felx gap-10 start"},[t.countryList?e("div",{staticClass:"input-wrap"},[e("label",[t._v("\n              "+t._s(t.$t("brand.country"))+"\n            ")]),t._v(" "),e("dropdown",{attrs:{"selected-key":t.addressData.country,options:t.countryList,"key-name":"name","position-fixed":!1,searching:!0},on:{clicked:t.selectedCountry}})],1):t._e(),t._v(" "),Object.keys(t.states).length?e("div",{staticClass:"input-wrap"},[e("label",[t._v("\n              "+t._s(t.$t("setting.state"))+"\n            ")]),t._v(" "),e("dropdown",{attrs:{"selected-key":t.addressData.state,options:t.states,"key-name":"name","position-fixed":!1},on:{clicked:t.selectedState}})],1):t._e()]),t._v(" "),e("div",{staticClass:"input-wrap",class:{invalid:!t.emailValid&&t.hasAddressErrors}},[e("label",[t._v("\n            "+t._s(t.$t("fSale.email"))+"\n          ")]),t._v(" "),e("div",{staticClass:"icon-input"},[e("i",{staticClass:"icon email-icon"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.addressData.email,expression:"addressData.email",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:t.$t("ship.your",{type:t.$t("ship.email")})},domProps:{value:t.addressData.email},on:{input:function(e){e.target.composing||t.$set(t.addressData,"email",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),!t.addressData.email&&t.hasAddressErrors?e("span",{staticClass:"error"},[t._v("\n             "+t._s(t.$t("category.req",{type:t.$t("fSale.email")}))+"\n          ")]):t.invalidEmail&&t.hasAddressErrors?e("span",{staticClass:"error"},[t._v("\n              "+t._s(t.$t("ship.ie"))+"\n            ")]):t._e()]),t._v(" "),e("div",{staticClass:"dply-felx gap-10 start"},[e("div",{staticClass:"input-wrap",class:{invalid:!t.addressData.name&&t.hasAddressErrors}},[e("label",[t._v("\n              "+t._s(t.$t("user.name"))+"\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addressData.name,expression:"addressData.name"}],attrs:{type:"text"},domProps:{value:t.addressData.name},on:{input:function(e){e.target.composing||t.$set(t.addressData,"name",e.target.value)}}}),t._v(" "),!t.addressData.name&&t.hasAddressErrors?e("span",{staticClass:"error"},[t._v("\n              "+t._s(t.$t("category.req",{type:t.$t("user.name")}))+"\n            ")]):t._e()]),t._v(" "),e("div",{staticClass:"input-wrap",class:{invalid:!t.addressData.phone&&t.hasAddressErrors}},[e("label",[t._v("\n              "+t._s(t.$t("fSale.phone"))+"\n            ")]),t._v(" "),e("div",{staticClass:"input-text"},[e("span",[t._v("\n                "+t._s(t.phoneCode)+"\n              ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addressData.phone,expression:"addressData.phone"}],attrs:{type:"text"},domProps:{value:t.addressData.phone},on:{input:function(e){e.target.composing||t.$set(t.addressData,"phone",e.target.value)}}})]),t._v(" "),!t.addressData.phone&&t.hasAddressErrors?e("span",{staticClass:"error"},[t._v("\n              "+t._s(t.$t("category.req",{type:t.$t("fSale.phone")}))+"\n            ")]):t._e()])]),t._v(" "),e("div",{staticClass:"input-wrap",class:{invalid:!t.addressData.address_1&&t.hasAddressErrors}},[e("label",[t._v("\n            "+t._s(t.$t("list.addr"))+"\n          ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addressData.address_1,expression:"addressData.address_1"}],staticClass:"mb-10",attrs:{type:"text",placeholder:t.$t("ship.sap")},domProps:{value:t.addressData.address_1},on:{input:function(e){e.target.composing||t.$set(t.addressData,"address_1",e.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addressData.address_2,expression:"addressData.address_2"}],attrs:{type:"text",placeholder:t.$t("ship.sap")},domProps:{value:t.addressData.address_2},on:{input:function(e){e.target.composing||t.$set(t.addressData,"address_2",e.target.value)}}}),t._v(" "),!t.addressData.address_1&&t.hasAddressErrors?e("span",{staticClass:"error"},[t._v("\n            "+t._s(t.$t("category.req",{type:t.$t("list.addr")}))+"\n          ")]):t._e()]),t._v(" "),e("div",{staticClass:"dply-felx gap-10 start"},[e("div",{staticClass:"input-wrap",class:{invalid:!t.addressData.city&&t.hasAddressErrors}},[e("label",[t._v("\n              "+t._s(t.$t("setting.city"))+"\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addressData.city,expression:"addressData.city"}],attrs:{type:"text"},domProps:{value:t.addressData.city},on:{input:function(e){e.target.composing||t.$set(t.addressData,"city",e.target.value)}}}),t._v(" "),!t.addressData.city&&t.hasAddressErrors?e("span",{staticClass:"error"},[t._v("\n              "+t._s(t.$t("category.req",{type:t.$t("setting.city")}))+"\n            ")]):t._e()]),t._v(" "),e("div",{staticClass:"input-wrap",class:{invalid:!t.addressData.zip&&t.hasAddressErrors}},[e("label",[t._v("\n              "+t._s(t.$t("setting.zip"))+"\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addressData.zip,expression:"addressData.zip"}],attrs:{type:"text"},domProps:{value:t.addressData.zip},on:{input:function(e){e.target.composing||t.$set(t.addressData,"zip",e.target.value)}}}),t._v(" "),!t.addressData.zip&&t.hasAddressErrors?e("span",{staticClass:"error"},[t._v("\n              "+t._s(t.$t("category.req",{type:t.$t("setting.zip")}))+"\n            ")]):t._e()])])],1)]},proxy:!0},{key:"pop-footer",fn:function(){return[e("div",{staticClass:"dply-felx j-end gap-10"},[e("button",{staticClass:"outline-btn plr-30 plr-sm-15",on:{click:function(e){return e.preventDefault(),t.$emit("close")}}},[t._v("\n          "+t._s(t.$t("title.cancel"))+"\n        ")]),t._v(" "),e("ajax-button",{staticClass:"primary-btn plr-30 plr-sm-15",attrs:{"fetching-data":t.submittingAddressData,"loading-text":t.$t("ship.saving"),text:t.$t("ship.ta",{type:t.editing>0?t.$t("ship.up"):t.$t("setting.sv")})}})],1)]},proxy:!0}],null,!1,1428354889)}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:r(49).default,ErrorFormatter:r(468).default,Dropdown:r(159).default,AjaxButton:r(158).default,PopOver:r(482).default})},868:function(t,e,r){"use strict";r.r(e);r(37),r(44),r(32),r(18),r(21),r(23),r(24),r(16),r(7),r(13);var n=r(1),d=r(4),o=(r(22),r(10)),l=r(784),c=r(158),v=r(703);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(d.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={name:"PosShipping",middleware:["common-middleware","auth"],data:function(){return{error:null,posShippingCb:[],selectedAddress:0,editableAddress:null,showAddressPopup:!1,ajaxDeleting:!1,showForm:!1}},components:{AjaxButton:c.default,AddressPopup:l.default},props:{selectedUser:{type:Object},addressList:{type:Array}},mixins:[v.a],computed:m(m({currentAddresses:function(){return this.addressList}},Object(o.c)("language",["langCode"])),Object(o.c)("resource",["countryList","phoneList"])),methods:m(m({addressChanged:function(){this.emitSelected()},deleteAddress:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!confirm(e.$t("admin.dltMsg"))){r.next=12;break}return r.prev=1,e.ajaxDeleting=!0,r.next=5,e.deleteData({params:t.id,api:"deleteUserAddress"});case 5:e.ajaxDeleting=!1,e.$emit("address-removed",t),r.next=12;break;case 9:return r.prev=9,r.t0=r.catch(1),r.abrupt("return",e.$nuxt.error(r.t0));case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()},closeAddressPopup:function(t){this.editableAddress=null,this.showAddressPopup=!1,t&&(this.$emit("address-added",t),this.emitSelected())},emitSelected:function(){var t,e=null!==(t=this.addressList[this.selectedAddress])&&void 0!==t?t:null;if(e){var r,n,d=null===(r=this.countryList[e.country])||void 0===r?void 0:r.name,o=e.state?null===(n=this.countryList[e.country].states[e.state])||void 0===n?void 0:n.name:"";this.$emit("selected-address",m(m({},e),{countryTitle:d,stateTitle:o}))}},userChanged:function(){this.emptyError(),this.posShippingCb=[],this.showForm=!1},emptyError:function(){this.error=null},editAddress:function(t){this.editableAddress=t,this.addAddress()},addAddress:function(){var t;this.emptyError(),this.selectedUser&&-1!==(null===(t=this.selectedUser)||void 0===t?void 0:t.id)?this.showAddressPopup=!this.showAddressPopup:this.error=this.$t("ship.sa")},cbChanged:function(t){var e;t.target.checked?-1===(null===(e=this.selectedUser)||void 0===e?void 0:e.id)?(this.$emit("has-address",!1),this.$emit("selected-address",null)):this.addressList.length?(this.$emit("has-address",!0),this.emitSelected()):(this.$emit("has-address",!1),this.$emit("selected-address",null)):(this.$emit("has-address",!1),this.$emit("selected-address",null)),this.showForm=t.target.checked}},Object(o.b)("common",["getRequest","deleteData"])),Object(o.b)("resource",["setCountryList","setPhoneList"])),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.countryList&&t.phoneList){e.next=8;break}return t.loading=!0,e.next=4,t.getRequest({params:null,lang:t.langCode,api:"countriesPhones"});case 4:data=e.sent,t.setCountryList(null==data?void 0:data.countries),t.setPhoneList(null==data?void 0:data.phones),t.loading=!1;case 8:t.addressChanged();case 9:case"end":return e.stop()}}),e)})))()}},y=r(15),component=Object(y.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"b-t mt-15 pt-15"},[t.showAddressPopup?e("address-popup",{attrs:{selectedUser:t.selectedUser,address:t.editableAddress},on:{close:t.closeAddressPopup}}):t._e(),t._v(" "),e("div",{staticClass:"dply-felx start"},[e("label",{staticClass:"mb-0",attrs:{for:"pos-shipping"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.posShippingCb,expression:"posShippingCb"}],attrs:{type:"checkbox",id:"pos-shipping",value:"1"},domProps:{checked:Array.isArray(t.posShippingCb)?t._i(t.posShippingCb,"1")>-1:t.posShippingCb},on:{change:[function(e){var r=t.posShippingCb,n=e.target,d=!!n.checked;if(Array.isArray(r)){var o=t._i(r,"1");n.checked?o<0&&(t.posShippingCb=r.concat(["1"])):o>-1&&(t.posShippingCb=r.slice(0,o).concat(r.slice(o+1)))}else t.posShippingCb=d},t.cbChanged]}}),t._v("\n      "+t._s(t.$t("fSale.dFee"))+"\n    ")]),t._v(" "),e("button",{staticClass:"toggle-arrow",attrs:{type:"button"},on:{click:function(e){t.showForm=!t.showForm}}},[e("i",{staticClass:"icon black arrow-down"})])]),t._v(" "),t.showForm?e("div",{staticClass:"p-15"},[t.error?e("h4",{staticClass:"error mt-15"},[t._v(t._s(t.error))]):t._e(),t._v(" "),t._l(t.currentAddresses,(function(r,n){return e("label",{key:n,staticClass:"card mtb-15 address-card",class:{active:t.selectedAddress===n}},[e("span",{staticClass:"flex gap-10 mb-10 sided address-title"},[e("span",{staticClass:"dply-felx gap-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedAddress,expression:"selectedAddress"}],attrs:{type:"radio",name:"user_address"},domProps:{value:n,checked:t._q(t.selectedAddress,n)},on:{change:[function(e){t.selectedAddress=n},t.addressChanged]}}),t._v(" "),e("span",{staticClass:"block bold"},[t._v(t._s(r.name))])]),t._v(" "),e("span",{staticClass:"dply-felx gap-10"},[e("ajax-button",{staticClass:"edit-btn plr-10 xs",attrs:{type:"button",text:t.$t("category.edit"),color:"primary"},on:{clicked:function(e){return t.editAddress(r)}}}),t._v(" "),e("ajax-button",{staticClass:"delete-btn plr-10 xs",attrs:{type:"button","fetching-data":t.ajaxDeleting===r.id,"loading-text":t.$t("ship.dtn"),text:t.$t("category.delete"),color:"primary"},on:{clicked:function(e){return t.deleteAddress(r)}}})],1)]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.formatAddress(r))}}),t._v(" "),e("span",{staticClass:"block mt-5"},[t._v("tel: "+t._s(r.phone))])])})),t._v(" "),e("button",{staticClass:"w-100 mt-15 outline-btn",attrs:{type:"button"},on:{click:t.addAddress}},[t._v("\n      "+t._s(t.$t("ship.ana"))+"\n    ")])],2):t._e()],1)}),[],!1,null,"8f2270ba",null);e.default=component.exports;installComponents(component,{AjaxButton:r(158).default})}}]);