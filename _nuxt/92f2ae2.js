(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{517:function(t,e,n){"use strict";n.r(e);n(202);var r=n(24),d=n(518),o=n(523),c={name:"ProductsDynamic",data:function(){return{currentPage:1,draggedWidth:0,pagination:[6,4,3,2,2]}},watch:{},props:{itemList:{type:Array,default:function(){return[]}},title:{type:String,default:""},totalItem:{type:Number},perPage:{type:Number}},directives:{Draggable:o.Draggable},components:{SuggestedAjaxSlider:d.default},computed:{loadedPage:function(){var t=this.itemList.length;return(t-t%this.itemPerPage)/this.itemPerPage},totalPage:function(){if(this.currentPagination<this.totalItem){var t=this.totalItem%parseInt(this.currentPagination);return(this.totalItem-t)/parseInt(this.currentPagination)+(t>0?1:0)}return 1},itemPerPage:function(){return window.innerWidth>1200?this.pagination[0]:window.innerWidth>992?this.pagination[1]:window.innerWidth>=768?this.pagination[2]:window.innerWidth>576?this.pagination[3]:this.pagination[4]},currentPagination:function(){return this.itemPerPage<this.perPage?this.itemPerPage:this.perPage}},mixins:[r.a],methods:{onDragged:function(t){Math.abs(t.offsetY)>=Math.abs(t.offsetX)||(t.last?this.draggedWidth>0?this.change(1):this.draggedWidth<0&&this.change(-1):this.draggedWidth=-1*t.offsetX)},change:function(data){this.currentPage+=data,this.currentPage<1?this.currentPage=this.totalPage:this.currentPage>this.totalPage&&(this.currentPage=1),this.draggedWidth=0,this.loadedPage<this.currentPage&&this.$emit("change",data)}},created:function(){},mounted:function(){}},l=n(11),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex sided align-start"},[e("h4",{staticClass:"bold"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"mn-w-90x right-text"},[t._v("\n      "+t._s(t.$t("productDynamic.pageOf",{current:t.currentPage,total:t.totalPage}))+"\n    ")])]),t._v(" "),e("div",{staticClass:"c_slider__wrapper"},[e("div",{staticClass:"c_slider__nav"},[e("button",{staticClass:"prev-btn clear-height",attrs:{"aria-label":"submit"},on:{click:function(e){return e.preventDefault(),t.change(-1)}}},[e("i",{staticClass:"icon arrow-left black m-0"})]),t._v(" "),e("button",{staticClass:"next-btn clear-height",attrs:{"aria-label":"submit"},on:{click:function(e){return e.preventDefault(),t.change(1)}}},[e("i",{staticClass:"icon arrow-right black m-0"})])]),t._v(" "),t.isMobile()?e("suggested-ajax-slider",{directives:[{name:"dragged",rawName:"v-dragged.stop",value:t.onDragged,expression:"onDragged",modifiers:{stop:!0}}],attrs:{"item-list":t.itemList,"current-pagination":t.currentPagination,"total-page":t.totalPage,"current-page":t.currentPage,"dragged-width":t.draggedWidth}}):e("suggested-ajax-slider",{directives:[{name:"dragged",rawName:"v-dragged.prevent",value:t.onDragged,expression:"onDragged",modifiers:{prevent:!0}}],attrs:{"item-list":t.itemList,"current-pagination":t.currentPagination,"total-page":t.totalPage,"current-page":t.currentPage,"dragged-width":t.draggedWidth}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SuggestedAjaxSlider:n(518).default})}}]);