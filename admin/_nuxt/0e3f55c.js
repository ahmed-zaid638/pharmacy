(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{493:function(o,e,t){"use strict";t.r(e);t(125);var r={name:"PasswordField",data:function(){return{password:"",passwordFieldType:"password"}},props:{isInvalid:{type:Boolean,default:!1},value:{type:String}},watch:{value:function(o){this.password=o}},mixins:[],components:{},computed:{isPasswordTypePassword:function(){return"password"===this.passwordFieldType}},methods:{passwordFieldToggle:function(){this.isPasswordTypePassword?this.passwordFieldType="text":this.passwordFieldType="password"}},mounted:function(){this.password=this.value}},n=t(15),component=Object(n.a)(r,(function(){var o=this,e=o._self._c;return e("div",{staticClass:"icon-input right-icon"},[e("i",{staticClass:"icon password-icon"}),o._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:o.password,expression:"password",modifiers:{trim:!0}}],class:{invalid:!o.password||o.isInvalid},attrs:{type:o.passwordFieldType,placeholder:o.$t("user.pass")},domProps:{value:o.password},on:{change:function(e){return o.$emit("change",o.password)},input:function(e){e.target.composing||(o.password=e.target.value.trim())},blur:function(e){return o.$forceUpdate()}}}),o._v(" "),e("i",{staticClass:"icon",class:o.isPasswordTypePassword?"eye-close-icon":"eye-icon",on:{click:o.passwordFieldToggle}})])}),[],!1,null,null,null);e.default=component.exports}}]);