(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{510:function(e,n,r){"use strict";r.r(n);r(202),r(6),r(18);var t={name:"LazyArea",props:{rootMargin:{type:Number,default:function(){return 0}}},data:function(){return{renderArea:!1}},mixins:[],computed:{},mounted:function(){var e=this,n={rootMargin:"".concat(this.rootMargin,"px")},r=new IntersectionObserver((function(n){n.forEach((function(n){n.intersectionRatio>0&&(e.renderArea=!0,r.disconnect(n.target))}))}),n);r.observe(this.$el)},methods:{}},o=r(11),component=Object(o.a)(t,(function(){var e=this;return(0,e._self._c)("div",[e._t("default",null,{renderArea:e.renderArea})],2)}),[],!1,null,null,null);n.default=component.exports}}]);