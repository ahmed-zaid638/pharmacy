(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{497:function(t,e,r){"use strict";r.r(e);r(18),r(21),r(23),r(24),r(16),r(7),r(13);var n=r(4),c=(r(198),r(10)),o=r(86);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var O={name:"PriceFormat",data:function(){return{}},props:{price:{type:Number,default:0,required:!0}},mixins:[o.a],components:{},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({formattedPrice:function(){return parseInt(this.setting.currency_position)===this.currencyPositionsIn.PRE?this.setting.currency_icon+this.price:this.price+this.setting.currency_icon}},Object(c.c)("setting",["setting"])),methods:{},mounted:function(){}},l=O,y=r(15),component=Object(y.a)(l,(function(){var t=this;return(0,t._self._c)("span",[t._v(t._s(t.formattedPrice))])}),[],!1,null,null,null);e.default=component.exports}}]);