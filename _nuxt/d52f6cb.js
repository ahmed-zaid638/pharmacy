(window.webpackJsonp=window.webpackJsonp||[]).push([[78,43,61],{467:function(t,e,n){"use strict";n.r(e);n(202),n(81);var r=n(484),o={name:"ImageSlider",data:function(){return{glide:null}},watch:{},props:{activeSlide:{type:Number,default:0},imageCount:{type:Number,default:0},perView:{type:Number,default:1},responsive:{type:Array,default:function(){return[1,1,1,1,1]}},gap:{type:Number,default:1},loop:{type:Boolean,default:!1},bullets:{type:Boolean,default:!1},autoplay:{type:Number,default:0},lazyImage:{type:Boolean,default:!1}},components:{},computed:{currentPerView:function(){var t,e;return null===(t=this.glide)||void 0===t||null===(e=t.settings)||void 0===e?void 0:e.perView}},mixins:[],methods:{changeSlide:function(t){this.glide.go("=".concat(t))},sliderInit:function(){var t=this;this.glide=new r.a(this.$refs.glide,{startAt:this.activeSlide,perView:this.perView,autoplay:this.autoplay,gap:this.gap,perTouch:3,bound:!0,rewind:this.loop,breakpoints:{1200:{perView:this.responsive[0]},992:{perView:this.responsive[1]},768:{perView:this.responsive[2]},576:{perView:this.responsive[3],gap:10},360:{perView:this.responsive[4],gap:10}}}),this.bullets||this.$nextTick((function(){var e=t.currentPerView;t.glide.on("run.before",(function(t){t.steps=">"===t.direction?-e:e}))})),this.lazyImage&&this.$nextTick((function(){t.glide.on("run.before",(function(e){t.imageCount-1>=t.glide.index&&("="===e.direction?t.$emit("change",{index:e.steps-1,direction:1}):t.$emit("change",{index:t.glide.index,direction:">"===e.direction?1:-1}))}))})),this.glide.on("mount.after",(function(){setTimeout((function(){t.$emit("loaded",t.glide.index)}),50)})),this.$emit("glide",this.glide),this.glide.mount()}},created:function(){},mounted:function(){var t=this;this.$nextTick((function(){t.sliderInit()}))}},l=n(11),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{ref:"glide",staticClass:"glide"},[t._t("bullet-area",(function(){return[t.bullets?e("ul",{staticClass:"glide-bullets",attrs:{"data-glide-el":"controls[nav]"}},t._l(t.imageCount,(function(t){return e("li",{key:t,attrs:{"data-glide-dir":"=".concat(t-1)}})})),0):t._e()]})),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[e("ul",{staticClass:"glide__slides"},[t._t("content")],2)])],2)}),[function(){var t=this._self._c;return t("div",{staticClass:"glide-nav",attrs:{"data-glide-el":"controls"}},[t("button",{staticClass:"prev-btn",attrs:{"aria-label":"prev","data-glide-dir":"<"}},[t("i",{staticClass:"m-0 icon arrow-left"})]),this._v(" "),t("button",{staticClass:"next-btn",attrs:{"aria-label":"next","data-glide-dir":">"}},[t("i",{staticClass:"m-0 icon arrow-right"})])])}],!1,null,null,null);e.default=component.exports},507:function(t,e,n){"use strict";n.r(e);n(202);var r=n(24),o=n(467),l=n(475),d=n(471),c={name:"ProductsSlider",data:function(){return{}},watch:{},props:{collection:{type:Object},perView:{type:Number,default:6},perViewResponsive:{type:Array,default:function(){return[5,4,3,2,2]}}},components:{ImageSlider:o.default,ProductTile:l.default,TileShimmer:d.default},computed:{itemList:function(){return this.collection},title:function(){var t;return null===(t=this.collection)||void 0===t?void 0:t.title},slug:function(){var t;return null===(t=this.collection)||void 0===t?void 0:t.slug},linkObj:function(){var t;return{slug:this.slug,title:this.title,id:null===(t=this.collection)||void 0===t?void 0:t.id}}},mixins:[r.a],methods:{},created:function(){},mounted:function(){}},h=n(11),component=Object(h.a)(c,(function(){var t=this,e=t._self._c;return t.itemList.collection_products.length?e("div",{staticClass:"area home-section"},[e("div",{staticClass:"flex sided title"},[e("h4",[t._v(t._s(t.title))]),t._v(" "),e("nuxt-link",{staticClass:"link",attrs:{to:t.collectionLink(t.linkObj)}},[t._v("\n      "+t._s(t.$t("featured.showAll"))+"\n    ")])],1),t._v(" "),e("div",{staticClass:"area-content shimmer-wrapper"},[e("image-slider",{attrs:{"per-view":t.perView,gap:20,responsive:t.perViewResponsive},scopedSlots:t._u([{key:"content",fn:function(){return t._l(t.itemList.collection_products,(function(t,n){return e("li",{key:n},[e("product-tile",{attrs:{product:t.item}})],1)}))},proxy:!0}],null,!1,3292174229)})],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductTile:n(475).default,ImageSlider:n(467).default})},517:function(t,e,n){"use strict";n.r(e);n(202);var r=n(24),o=n(518),l=n(523),d={name:"ProductsDynamic",data:function(){return{currentPage:1,draggedWidth:0,pagination:[6,4,3,2,2]}},watch:{},props:{itemList:{type:Array,default:function(){return[]}},title:{type:String,default:""},totalItem:{type:Number},perPage:{type:Number}},directives:{Draggable:l.Draggable},components:{SuggestedAjaxSlider:o.default},computed:{loadedPage:function(){var t=this.itemList.length;return(t-t%this.itemPerPage)/this.itemPerPage},totalPage:function(){if(this.currentPagination<this.totalItem){var t=this.totalItem%parseInt(this.currentPagination);return(this.totalItem-t)/parseInt(this.currentPagination)+(t>0?1:0)}return 1},itemPerPage:function(){return window.innerWidth>1200?this.pagination[0]:window.innerWidth>992?this.pagination[1]:window.innerWidth>=768?this.pagination[2]:window.innerWidth>576?this.pagination[3]:this.pagination[4]},currentPagination:function(){return this.itemPerPage<this.perPage?this.itemPerPage:this.perPage}},mixins:[r.a],methods:{onDragged:function(t){Math.abs(t.offsetY)>=Math.abs(t.offsetX)||(t.last?this.draggedWidth>0?this.change(1):this.draggedWidth<0&&this.change(-1):this.draggedWidth=-1*t.offsetX)},change:function(data){this.currentPage+=data,this.currentPage<1?this.currentPage=this.totalPage:this.currentPage>this.totalPage&&(this.currentPage=1),this.draggedWidth=0,this.loadedPage<this.currentPage&&this.$emit("change",data)}},created:function(){},mounted:function(){}},c=n(11),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex sided align-start"},[e("h4",{staticClass:"bold"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"mn-w-90x right-text"},[t._v("\n      "+t._s(t.$t("productDynamic.pageOf",{current:t.currentPage,total:t.totalPage}))+"\n    ")])]),t._v(" "),e("div",{staticClass:"c_slider__wrapper"},[e("div",{staticClass:"c_slider__nav"},[e("button",{staticClass:"prev-btn clear-height",attrs:{"aria-label":"submit"},on:{click:function(e){return e.preventDefault(),t.change(-1)}}},[e("i",{staticClass:"icon arrow-left black m-0"})]),t._v(" "),e("button",{staticClass:"next-btn clear-height",attrs:{"aria-label":"submit"},on:{click:function(e){return e.preventDefault(),t.change(1)}}},[e("i",{staticClass:"icon arrow-right black m-0"})])]),t._v(" "),t.isMobile()?e("suggested-ajax-slider",{directives:[{name:"dragged",rawName:"v-dragged.stop",value:t.onDragged,expression:"onDragged",modifiers:{stop:!0}}],attrs:{"item-list":t.itemList,"current-pagination":t.currentPagination,"total-page":t.totalPage,"current-page":t.currentPage,"dragged-width":t.draggedWidth}}):e("suggested-ajax-slider",{directives:[{name:"dragged",rawName:"v-dragged.prevent",value:t.onDragged,expression:"onDragged",modifiers:{prevent:!0}}],attrs:{"item-list":t.itemList,"current-pagination":t.currentPagination,"total-page":t.totalPage,"current-page":t.currentPage,"dragged-width":t.draggedWidth}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SuggestedAjaxSlider:n(518).default})},548:function(t,e,n){"use strict";n.r(e);n(19),n(17),n(22),n(6),n(26),n(18),n(27);var r=n(0),o=n(9),l=(n(12),n(42),n(105),n(7)),d=n(24),c=n(507),h=n(80),f=n(517);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P={name:"SuggestedProducts",data:function(){return{fetchingSuggested:!0,lastPage:1,currentPage:1,totalSuggested1:0,totalSuggested2:0,perPageSuggested1:0,perPageSuggested2:0,suggested1:[],suggested2:[],loaded:[]}},watch:{},props:{productId:{type:String,default:""}},components:{ProductsDynamic:f.default,Spinner:h.default,ProductsSlider:c.default},computed:m(m({},Object(l.c)("language",["langCode"])),Object(l.c)("detail",["suggested"])),mixins:[d.a],methods:{fetchSuggested:function(t){var e=arguments,n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,l,d,c,h,f,v,m,P,_,w,y,x,S,C,O,j,k,D,V,$,I,W,N,T,L,R,A,B;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return 1===(h=e.length>1&&void 0!==e[1]?e[1]:0)?n.suggested1=n.suggested1.concat(["","","","",""]):(2===h||(n.suggested1=n.suggested1.concat(["","","","",""])),n.suggested2=n.suggested2.concat(["","","","",""])),r.prev=2,n.loaded.push(t),r.t0=n.$store,r.t1=n.productId,r.t2=t,r.next=9,n.$store.dispatch("user/getUserToken");case 9:return r.t3=r.sent,r.t4={page:r.t2,user_token:r.t3},r.t5=n.langCode,r.t6={id:r.t1,params:r.t4,lang:r.t5},r.next=15,r.t0.dispatch.call(r.t0,"detail/fetchSuggestedProducts",r.t6);case 15:n.fetchingSuggested=!1,r.next=21;break;case 18:return r.prev=18,r.t7=r.catch(2),r.abrupt("return",n.$nuxt.error(r.t7));case 21:1===h?n.suggested1.splice(n.suggested1.length-5,5):(2===h||n.suggested1.splice(n.suggested1.length-5,5),n.suggested2.splice(n.suggested2.length-5,5)),null!==(o=n.suggested)&&void 0!==o&&null!==(l=o.suggestion_1)&&void 0!==l&&l.data&&(n.suggested1=n.suggested1.concat(null===(f=n.suggested)||void 0===f||null===(v=f.suggestion_1)||void 0===v?void 0:v.data)),null!==(d=n.suggested)&&void 0!==d&&null!==(c=d.suggestion_2)&&void 0!==c&&c.data&&(n.suggested2=n.suggested2.concat(null===(m=n.suggested)||void 0===m||null===(P=m.suggestion_2)||void 0===P?void 0:P.data)),1===t&&(I=null===(_=n.suggested)||void 0===_||null===(w=_.suggestion_1)||void 0===w?void 0:w.total,W=null===(y=n.suggested)||void 0===y||null===(x=y.suggestion_1)||void 0===x?void 0:x.per_page,N=null===(S=n.suggested)||void 0===S||null===(C=S.suggestion_1)||void 0===C?void 0:C.last_page,n.totalSuggested1=I<W?N*W:I,T=null===(O=n.suggested)||void 0===O||null===(j=O.suggestion_2)||void 0===j?void 0:j.total,L=null===(k=n.suggested)||void 0===k||null===(D=k.suggestion_2)||void 0===D?void 0:D.per_page,R=null===(V=n.suggested)||void 0===V||null===($=V.suggestion_2)||void 0===$?void 0:$.last_page,n.totalSuggested2=T,n.perPageSuggested1=W,n.perPageSuggested2=L,A=null!=N?N:0,B=null!=R?R:0,n.lastPage=B>A?B:A);case 25:case"end":return r.stop()}}),r,null,[[2,18]])})))()},change:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.currentPage+=e,n.currentPage<1?n.currentPage=n.lastPage:n.currentPage>n.lastPage&&(n.currentPage=1),-1!==n.loaded.indexOf(n.currentPage)){r.next=5;break}return r.next=5,n.fetchSuggested(n.currentPage,t);case 5:case"end":return r.stop()}}),r)})))()}},created:function(){},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchSuggested(t.currentPage);case 2:case"end":return e.stop()}}),e)})))()}},_=P,w=n(11),component=Object(w.a)(_,(function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.fetchingSuggested?e("div",{staticClass:"spinner-wrapper flex"},[e("spinner",{attrs:{radius:100}})],1):e("div",[t.suggested1.length?e("products-dynamic",{staticClass:"b-t pt-20 pt-sm-15 npb-5",attrs:{title:t.$t("suggestedProducts.recommendedForYou"),"item-list":t.suggested1,"per-page":t.perPageSuggested1,"total-item":t.totalSuggested1},on:{change:function(e){return t.change(1,e)}}}):t._e(),t._v(" "),t.suggested2.length?e("products-dynamic",{staticClass:"b-t pt-20 pt-sm-15 pb-15 pb-sm-5",attrs:{title:t.$t("suggestedProducts.alsoViewed"),"item-list":t.suggested2,"total-item":t.totalSuggested2,"per-page":t.perPageSuggested2},on:{change:function(e){return t.change(2,e)}}}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductsDynamic:n(517).default,Spinner:n(80).default})}}]);