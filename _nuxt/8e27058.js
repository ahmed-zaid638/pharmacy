(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{483:function(t,e,r){"use strict";r.r(e);r(19),r(17),r(22),r(6),r(26),r(18),r(27);var n=r(0),o=r(9),c=(r(12),r(7));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={name:"FollowBtn",data:function(){return{ajaxing:!1}},components:{AjaxButton:r(293).default},props:{color:{type:String,default:""},storeId:{required:!0},following:{type:Boolean,default:!1}},mixins:[],computed:{followingText:function(){return this.following?this.$t("store.following"):this.$t("store.follow")}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({followStore:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(r=t.$auth)&&void 0!==r&&r.loggedIn){e.next=3;break}return t.$auth.redirect("login"),e.abrupt("return");case 3:return e.prev=3,t.ajaxing=!0,e.next=7,t.postRequest({params:{store_id:t.storeId},api:"followStore",requiredToken:!0});case 7:data=e.sent,t.ajaxing=!1,200===data.status&&t.$emit("change-following"),e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(3),e.abrupt("return",t.$nuxt.error(e.t0));case 15:case"end":return e.stop()}}),e,null,[[3,12]])})))()}},Object(c.b)("common",["postRequest"])),mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},w=f,d=r(11),component=Object(d.a)(w,(function(){var t=this;return(0,t._self._c)("ajax-button",{class:{following:t.following},attrs:{type:"button",color:t.color,"loading-text":"","fetching-data":t.ajaxing,text:t.followingText},on:{clicked:t.followStore}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AjaxButton:r(293).default})}}]);