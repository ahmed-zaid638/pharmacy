(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{795:function(t,e,n){"use strict";n.r(e);n(37),n(44);var r=n(159),o=n(86),l={name:"Flutterwave",components:{Dropdown:r.default},data:function(){return{showForm:!1}},props:{paymentData:{type:Object,required:!0}},mixins:[o.a],methods:{dropdownSelected:function(data){this.paymentData.fw_environment=data.key,this.emitData()},cbChanged:function(t){this.showForm=t.target.checked,this.emitData()},emitData:function(){this.$emit("change",this.paymentData)}}},c=n(15),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"input-wrapper dply-felx start"},[e("label",{staticClass:"mb-0",attrs:{for:"flutterwave"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentData.flutterwave,expression:"paymentData.flutterwave"}],attrs:{type:"checkbox",id:"flutterwave"},domProps:{checked:Array.isArray(t.paymentData.flutterwave)?t._i(t.paymentData.flutterwave,null)>-1:t.paymentData.flutterwave},on:{change:[function(e){var n=t.paymentData.flutterwave,r=e.target,o=!!r.checked;if(Array.isArray(n)){var l=t._i(n,null);r.checked?l<0&&t.$set(t.paymentData,"flutterwave",n.concat([null])):l>-1&&t.$set(t.paymentData,"flutterwave",n.slice(0,l).concat(n.slice(l+1)))}else t.$set(t.paymentData,"flutterwave",o)},t.cbChanged]}}),t._v("\n      "+t._s(t.$t("dataPage.fw"))+"\n    ")]),t._v(" "),e("button",{staticClass:"toggle-arrow",attrs:{type:"button"},on:{click:function(e){t.showForm=!t.showForm}}},[e("i",{staticClass:"icon black arrow-down"})])]),t._v(" "),t.showForm?e("div",{staticClass:"payment-form-wrap"},[e("div",{staticClass:"input-wrapper"},[e("label",[t._v("\n        "+t._s(t.$t("dataPage.fwpk"))+"\n      ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentData.fw_public_key,expression:"paymentData.fw_public_key"}],attrs:{type:"text",placeholder:t.$t("dataPage.fwpk")},domProps:{value:t.paymentData.fw_public_key},on:{input:[function(e){e.target.composing||t.$set(t.paymentData,"fw_public_key",e.target.value)},t.emitData]}})]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("label",[t._v("\n        "+t._s(t.$t("dataPage.fwsk"))+"\n      ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentData.fw_secret_key,expression:"paymentData.fw_secret_key"}],attrs:{type:"text",placeholder:t.$t("dataPage.fwsk")},domProps:{value:t.paymentData.fw_secret_key},on:{input:[function(e){e.target.composing||t.$set(t.paymentData,"fw_secret_key",e.target.value)},t.emitData]}})]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("label",[t._v("\n        "+t._s(t.$t("dataPage.fwek"))+"\n      ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentData.fw_encryption_key,expression:"paymentData.fw_encryption_key"}],attrs:{type:"text",placeholder:t.$t("dataPage.fwek")},domProps:{value:t.paymentData.fw_encryption_key},on:{input:[function(e){e.target.composing||t.$set(t.paymentData,"fw_encryption_key",e.target.value)},t.emitData]}})]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("label",{staticClass:"block"},[t._v("\n        "+t._s(t.$t("dataPage.env"))+"\n      ")]),t._v(" "),e("dropdown",{attrs:{selectedKey:"".concat(t.paymentData.fw_environment),options:t.environmentObj},on:{clicked:t.dropdownSelected}})],1)]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Dropdown:n(159).default})}}]);