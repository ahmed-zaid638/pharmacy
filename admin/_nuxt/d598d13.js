(window.webpackJsonp=window.webpackJsonp||[]).push([[12,52],{479:function(e,t,r){"use strict";r.r(t);r(124);var n=r(158),o=r(86),l=r(472),c=r(469),d={name:"FileUpload",data:function(){return{uploadMessage:null}},mixins:[o.a,l.a],components:{LazyImage:c.default,AjaxButton:n.default},props:{btnType:{type:String,default:"outline"},fileUploading:{type:Boolean,default:!1},imageUrl:{type:String,default:""},image:{type:String,default:""},imageTitle:{type:String,default:""},onlyIcon:{type:String,default:null},btnText:{type:String,default:function(){return this.$t("profile.upload")}}},computed:{previewImageUrl:function(){return this.imageUrl||this.getImageURL(this.imageName)||""},imageName:function(){var e;return null!==(e=this.image)&&void 0!==e&&e.trim()?this.image:this.defaultImage}},methods:{fileChanged:function(e){var t=e.target.files[0];t&&(this.uploadMessage=this.isValidImage(t),this.uploadMessage||this.$emit("file-upload",t))}}},h=r(15),component=Object(h.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"file-wrapper",class:{"has-error":e.uploadMessage}},[t("div",[t("div",{staticClass:"file-input"},[t("input",{ref:"fileInput",attrs:{type:"file",accept:"image/*"},on:{change:e.fileChanged}}),e._v(" "),e.fileUploading?e._e():t("img",{attrs:{src:e.previewImageUrl,alt:e.imageTitle}})]),e._v(" "),e.uploadMessage?t("span",{staticClass:"error mb-10"},[e._v("\n      "+e._s(e.uploadMessage)+"\n    ")]):e._e()]),e._v(" "),t("ajax-button",{staticClass:"w-100",class:"".concat(e.btnType,"-btn"),attrs:{type:"button",color:"primary",text:e.btnText,"only-icon":e.onlyIcon,"fetching-data":e.fileUploading},on:{clicked:function(t){return e.$refs.fileInput.click()}}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AjaxButton:r(158).default})},786:function(e,t,r){"use strict";r.r(t);r(18),r(21),r(23),r(24),r(16),r(7),r(13);var n=r(1),o=r(4),l=(r(22),r(10));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={name:"PosVoucher",middleware:["common-middleware","auth"],data:function(){return{voucher:"",error:null,voucherResult:null,submitting:!1,showForm:!1}},components:{AjaxButton:r(158).default},props:{calculatedPrice:{type:Object},selectedUser:{type:Object}},watch:{voucher:function(){this.voucherResult=null,this.error=null}},mixins:[],computed:d({},Object(l.c)("language",["langCode"])),methods:d({checkVoucher:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.selectedUser&&-1!==(null===(r=e.selectedUser)||void 0===r?void 0:r.id)){t.next=3;break}return e.error=e.$t("ship.sa"),t.abrupt("return");case 3:return e.submitting=!0,t.next=6,e.setRequest({params:{voucher:e.voucher,user_id:null===(n=e.selectedUser)||void 0===n?void 0:n.id,price:null===(o=e.calculatedPrice)||void 0===o?void 0:o.totalPriceWithOffer},api:"voucherValidity",lang:e.langCode});case 6:l=t.sent,e.submitting=!1,201===(null==l?void 0:l.status)?e.error=l.data.form[0]:(e.voucherResult=l,e.$emit("voucher-result",l));case 9:case"end":return t.stop()}}),t)})))()},emptyError:function(){this.error=null},cbChanged:function(e){this.showForm=e.target.checked}},Object(l.b)("common",["getRequest","setRequest"])),mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},m=r(15),component=Object(m.a)(h,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"b-t mt-15 pt-15"},[t("div",{staticClass:"dply-felx start"},[t("label",{staticClass:"mb-0",attrs:{for:"pos-voucher"}},[t("input",{attrs:{type:"checkbox",id:"pos-voucher"},on:{change:e.cbChanged}}),e._v("\n      "+e._s(e.$t("fSale.voucher"))+"\n    ")]),e._v(" "),t("button",{staticClass:"toggle-arrow",attrs:{type:"button"},on:{click:function(t){e.showForm=!e.showForm}}},[t("i",{staticClass:"icon black arrow-down"})])]),e._v(" "),e.showForm?t("div",{staticClass:"p-15"},[e.error?t("h4",{staticClass:"error mtb-15"},[e._v(e._s(e.error))]):e._e(),e._v(" "),t("div",{staticClass:"pb-0",class:{invalid:!!e.error}},[t("form",{staticClass:"btn-input mt-15"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.voucher,expression:"voucher"}],staticClass:"pr-80",attrs:{placeholder:e.$t("prod.code"),type:"text"},domProps:{value:e.voucher},on:{input:function(t){t.target.composing||(e.voucher=t.target.value)}}}),e._v(" "),t("ajax-button",{staticClass:"primary-btn plr-15",attrs:{type:"button","fetching-data":e.submitting,"loading-text":"",disabled:!e.voucher||!!e.error||!!e.voucherResult,text:e.$t("ship.apply")},on:{clicked:e.checkVoucher}})],1)])]):e._e()])}),[],!1,null,"51141a5d",null);t.default=component.exports;installComponents(component,{AjaxButton:r(158).default})},787:function(e,t,r){"use strict";r.r(t);r(7),r(36),r(35),r(295),r(126);var n=r(158),o=r(159),l=r(86),c={name:"PosPayment",middleware:["common-middleware","auth"],data:function(){return{posPayment:{payment_method:"",offline_payment_method:"",offline_trans_id:"",offline_payment_proof:""},proofImageUrl:null,showForm:!1}},components:{FileUpload:r(479).default,Dropdown:o.default,AjaxButton:n.default},props:{},mixins:[l.a],computed:{},methods:{emitPosPayment:function(){this.$emit("pos-payment",this.posPayment)},uploadFile:function(e){e&&(this.posPayment.offline_payment_proof=e.files[0],this.proofImageUrl=URL.createObjectURL(e),this.emitPosPayment())},paymentChanged:function(e){this.posPayment.payment_method=e.key,this.emitPosPayment()}},mounted:function(){this.posPayment.payment_method=this.posPaymentIn.CASH}},d=r(15),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"b-t mt-15 pt-15"},[t("div",{staticClass:"dply-felx start gap-15"},[t("label",[e._v(e._s(e.$t("list.payment")))]),e._v(" "),t("dropdown",{staticClass:"payment-drop",attrs:{"selected-key":e.posPaymentIn.CASH,options:e.posPaymentDrop},on:{clicked:e.paymentChanged}})],1),e._v(" "),parseInt(e.posPayment.payment_method)===e.posPaymentIn.OFFLINE?t("form",{staticClass:"pl-50 pt-15"},[t("div",{staticClass:"input-wrapper"},[t("label",[e._v("\n        "+e._s(e.$t("fSale.pMethod"))+"\n      ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.posPayment.offline_payment_method,expression:"posPayment.offline_payment_method"}],attrs:{type:"text",placeholder:e.$t("fSale.pMethod")},domProps:{value:e.posPayment.offline_payment_method},on:{change:e.emitPosPayment,input:function(t){t.target.composing||e.$set(e.posPayment,"offline_payment_method",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("label",[e._v("\n        "+e._s(e.$t("title.ti"))+"\n      ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.posPayment.offline_trans_id,expression:"posPayment.offline_trans_id"}],attrs:{type:"text",placeholder:e.$t("title.ti")},domProps:{value:e.posPayment.offline_trans_id},on:{change:e.emitPosPayment,input:function(t){t.target.composing||e.$set(e.posPayment,"offline_trans_id",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("label",[e._v("\n        "+e._s(e.$t("ship.pp"))+"\n      ")]),e._v(" "),t("file-upload",{staticClass:"mb-20 mb-sm-15",attrs:{"image-url":e.proofImageUrl,"only-icon":"upload-icon"},on:{"file-upload":e.uploadFile}})],1)]):e._e()])}),[],!1,null,"6879a993",null);t.default=component.exports;installComponents(component,{Dropdown:r(159).default,FileUpload:r(479).default})},869:function(e,t,r){"use strict";r.r(t);r(18),r(21),r(23),r(24),r(16);var n=r(1),o=r(4),l=(r(22),r(199),r(50),r(7),r(487),r(13),r(86)),c=r(10),d=r(469),h=r(679),m=r(49),f=r(158),v=r(680),y=r(870),_=r(721),S=r(871),w=r(786),P=r(787),C=r(468);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j={name:"Cart",middleware:["common-middleware","auth"],data:function(){return{order:null,loading:!1,formSubmitting:!1,hasAddress:!1,preventGoing:!0,calculatedPrice:null,posPaymentData:null,selectedShipping:null,voucherResult:null,cart:null,user:null,cartWithShipping:{},singleShippings:{}}},components:{PosOrdered:r(788).default,ErrorFormatter:C.default,PosPayment:P.default,PosVoucher:w.default,PosShipping:S.default,CheckoutRight:_.default,CartItem:y.default,QuantityNav:v.default,AjaxButton:f.default,Spinner:m.default,SearchDropdown:h.default,LazyImage:d.default},watch:{},mixins:[l.a],computed:O(O({validShippingPlace:function(){return this.hasAddress&&!!this.selectedShipping&&-1===Object.values(this.cartWithShipping).findIndex((function(i){return null===(null==i?void 0:i.shipping_place)}))},addressList:function(){var e,t,r,n;null!==(e=this.userAddresses[null===(t=this.user)||void 0===t?void 0:t.id])&&void 0!==e&&e.length&&(this.selectedShipping=this.userAddresses[null===(n=this.user)||void 0===n?void 0:n.id][0]);return this.userAddresses[null===(r=this.user)||void 0===r?void 0:r.id]||[]}},Object(c.c)("user",["userAddresses"])),Object(c.c)("admin",["profile"])),methods:O(O(O({selectionChanged:function(e){this.hasAddress=e,this.hasAddress||(this.selectedShipping=null)},shippingChanged:function(e){this.cart=e,this.generatingSingleShipping()},currentShipRule:function(e){var t,r,n=this,o=null;(this.selectedShipping&&(null==e||e.forEach((function(e){if(e.country===n.selectedShipping.country){if(e.state===n.selectedShipping.state)return void(o=e);"ALL"===e.state&&(o=e)}else"ALL"===e.country&&(o||(o=e))}))),!o||null!==(t=o)&&void 0!==t&&t.shipping_rule)||(o=O(O({},o),{shipping_rule:null===(r=this.product)||void 0===r?void 0:r.shipping_rule}));return o},generatingSingleShipping:function(){var e=this;this.singleShippings={};var t=[];this.cart.forEach((function(i){var r=i.flash_product.shipping_rule,n=!0,l=null;e.selectedShipping&&(l=e.currentShipRule(r.shipping_places)),1===parseInt(r.single_price)&&(e.singleShippings[r.id]?n=!1:e.singleShippings[r.id]=1),e.cartWithShipping=O(O({},e.cartWithShipping),Object(o.a)({},i.id,O(O(O({},e.cartWithShipping[i.id]),{shipping_option:n}),{shipping_place:l}))),i=O(O({},i),{shipping_option:n}),t.push(i)})),this.cart=t},addressChanged:function(e){this.selectedShipping=e,this.generatingSingleShipping(),this.updateCartShipping()},goToNext:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,data,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.formSubmitting=!0,t.prev=1,t.next=4,e.setRequest({params:O(O({},{user_id:(null===(r=e.user)||void 0===r?void 0:r.id)||"",voucher:(null===(n=e.voucherResult)||void 0===n?void 0:n.voucher)||"",user_address_id:(null===(o=e.selectedShipping)||void 0===o?void 0:o.id)||""}),{},{time_zone:e.timeZone},e.posPaymentData),api:"setPosOrder"});case 4:if(data=t.sent,201!==parseInt(null==data?void 0:data.status)){t.next=9;break}null===(l=e.$refs.errorFormatter)||void 0===l||null===(l=l.$el)||void 0===l||l.scrollIntoView({behavior:"smooth"}),t.next=12;break;case 9:return t.next=11,e.fetchingCartData();case 11:e.order=data;case 12:t.next=17;break;case 14:return t.prev=14,t.t0=t.catch(1),t.abrupt("return",e.$nuxt.error(t.t0));case 17:e.formSubmitting=!1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},updateCartShipping:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setRequest({params:{cart:e.cartWithShipping,selected_address:null===(r=e.selectedShipping)||void 0===r?void 0:r.id},api:"updateShipping"});case 2:data=t.sent,e.shippingChanged(data);case 4:case"end":return t.stop()}}),t)})))()},quantityChanged:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchingCartData();case 2:e.$refs.posVoucher.checkVoucher();case 3:case"end":return t.stop()}}),t)})))()},dataDeleted:function(){this.fetchingCartData()},userClicked:function(e){this.user=e,this.fetchUserAddress(this.user),this.$refs.posShipping.userChanged(),this.$refs.posVoucher.emptyError(),this.hasAddress=!1,this.selectedShipping=null,this.generatingSingleShipping(),this.updateCartShipping()},addressRemoved:function(address){this.deleteUserAddress({user:this.user.id,addressId:address.id})},addressAdded:function(address){this.updateUserAddress({user:this.user.id,address:address})},fetchUserAddress:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,-1!==(null==e?void 0:e.id)&&null!=e&&e.id&&(null===(n=t.addressList)||void 0===n||!n.length)){r.next=3;break}return r.abrupt("return");case 3:return r.next=5,t.getRequest({params:{user_id:null==e?void 0:e.id},api:"getUserAddresses"});case 5:return data=r.sent,r.next=8,t.setUserAddresses({user:t.user.id,addresses:null==data?void 0:data.data});case 8:r.next=13;break;case 10:return r.prev=10,r.t0=r.catch(0),r.abrupt("return",t.$nuxt.error(r.t0));case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},fetchingCartData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.getRequest({params:{admin_id:e.profile.id},api:"getCart"});case 4:r=t.sent,e.cart=r.map((function(t){return e.cartWithShipping[t.id]={cart:t.id,shipping_rule:t.flash_product.shipping_rule.id,shipping_type:(null==t?void 0:t.shipping_type)||e.shippingTypeIn.location},t})),e.generatingSingleShipping(),e.loading=!1,t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",e.$nuxt.error(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},Object(c.b)("user",["setUserAddresses","deleteUserAddress","updateUserAddress"])),Object(c.b)("common",["getRequest","setRequest"])),Object(c.b)("ui",["setToastMessage"])),mounted:function(){this.posPaymentData={payment_method:this.posPaymentIn.CASH,offline_payment_method:"",offline_trans_id:"",offline_payment_proof:""},this.fetchingCartData()}},k=r(15),component=Object(k.a)(j,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"cart-wrap"},[t("error-formatter",{ref:"errorFormatter"}),e._v(" "),e.loading?t("div",{staticClass:"spinner-wrapper"},[t("spinner",{staticClass:"mr-15",attrs:{radius:60,color:"primary"}})],1):e._e(),e._v(" "),t("search-dropdown",{ref:"userSearch",attrs:{placeholder:e.$t("error.users"),"list-api":"getUsers",currentId:"userSearch","selected-text":e.$t("ship.wc"),"title-key":"name","pre-item":{name:e.$t("ship.wc"),id:-1}},on:{clicked:e.userClicked}}),e._v(" "),e.cart?t("div",{staticClass:"cart-tile-wrap mt-20"},e._l(e.cart,(function(data,r){return t("CartItem",{key:r,attrs:{"cart-item":data,hasAddress:e.hasAddress&&!!e.user,selectedShipping:e.selectedShipping,cartWithShipping:e.cartWithShipping,singleShippings:e.singleShippings},on:{"shipping-changed":e.shippingChanged,"quantity-changed":e.quantityChanged,deleted:e.dataDeleted}})})),1):e._e(),e._v(" "),t("pos-shipping",{ref:"posShipping",attrs:{"selected-user":e.user,"address-list":e.addressList},on:{"has-address":e.selectionChanged,"address-added":e.addressAdded,"selected-address":e.addressChanged,"address-removed":e.addressRemoved}}),e._v(" "),t("pos-voucher",{ref:"posVoucher",attrs:{"calculated-price":e.calculatedPrice,"selected-user":e.user},on:{"voucher-result":function(t){e.voucherResult=t}}}),e._v(" "),t("pos-payment",{on:{"pos-payment":function(t){e.posPaymentData=t}}}),e._v(" "),t("checkout-right",{attrs:{"checked-product":e.cart,hasShipping:e.validShippingPlace,"voucher-result":e.voucherResult},on:{"calculated-price":function(t){e.calculatedPrice=t}},scopedSlots:e._u([{key:"confirm",fn:function(){return[t("ajax-button",{staticClass:"primary-btn w-100",attrs:{type:"button","fetching-data":e.formSubmitting,"loading-text":"",text:e.$t("ship.con")},on:{clicked:e.goToNext}})]},proxy:!0}])}),e._v(" "),e.order?t("pos-ordered",{attrs:{order:e.order},on:{close:function(t){e.order=null}}}):e._e()],1)}),[],!1,null,"58658134",null);t.default=component.exports;installComponents(component,{ErrorFormatter:r(468).default,Spinner:r(49).default,SearchDropdown:r(679).default,AjaxButton:r(158).default})}}]);