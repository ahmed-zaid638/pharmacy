(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{480:function(t,e,n){"use strict";n.r(e);var l=n(61),o=n(24),r={name:"SubCategoryTile",props:{category:{type:Object,default:function(){return null}},subCategory:{type:Object,default:function(){return null}}},data:function(){return{}},components:{LazyImage:l.default},mixins:[o.a],computed:{},mounted:function(){},methods:{}},c=n(11),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("nuxt-link",{staticClass:"block page-link",attrs:{to:t.categoryLink(t.subCategory),title:t.subCategory.title}},[e("div",{staticClass:"img-wrapper"},[e("lazy-image",{attrs:{"data-src":t.thumbImageURL(t.subCategory),title:t.subCategory.title,alt:t.subCategory.title}})],1),t._v(" "),e("h5",{staticClass:"item-title ellipsis ellipsis-1"},[t._v("\n    "+t._s(t.subCategory.title)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LazyImage:n(61).default})}}]);