(window.webpackJsonp=window.webpackJsonp||[]).push([[10,62,67],{500:function(e,t,r){"use strict";r.r(t);var n=r(1),l=r(4),o=(r(22),r(18),r(21),r(199),r(23),r(24),r(16),r(7),r(13),r(67)),c=r(478),d=r(49),f=r(10);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var v={name:"TagSearch",data:function(){return{setApi:"setTags",searchedString:"",tagList:null,loading:!1,autoSuggestionOpen:!1,deleteWarning:!1}},props:{tags:{type:String,default:""}},directives:{outsideClick:o.a},components:{Spinner:d.default},watch:{searchedString:Object(c.debounce)((function(){this.fetchingData()}),700)},computed:{tagExists:function(){var e=this;return this.tagList.findIndex((function(t){return t.title===e.searchedString}))>-1},selectedTags:function(){return this.tags?this.tags.split(",").filter((function(e){return e})):[]}},methods:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({deleteKeyPress:function(){this.searchedString||(this.deleteWarning&&this.deleteTag(this.selectedTags[this.selectedTags.length-1]),this.deleteWarning=!this.deleteWarning)},deleteTag:function(e){this.$emit("delete",e)},openResult:function(){this.autoSuggestionOpen=!this.autoSuggestionOpen,this.fetchingData()},saveTag:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.setRequest({params:{title:e.searchedString},api:"setTags"});case 4:t.next=9;break;case 6:return t.prev=6,t.t0=t.catch(1),t.abrupt("return",e.$nuxt.error(t.t0));case 9:e.loading=!1;case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))()},fetchingData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.getRequest({params:{q:e.searchedString},api:"getTags"});case 4:r=t.sent,(data=r.data)&&(e.tagList=data),t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",e.$nuxt.error(t.t0));case 12:e.loading=!1;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},autoSuggestionClose:function(){this.autoSuggestionOpen=this.deleteWarning=!1,this.searchedString=""},emitAddingTag:function(e){-1===this.selectedTags.findIndex((function(t){return t===e}))&&this.$emit("add",e)},clickedItem:function(data){data||(this.saveTag(),data=this.searchedString),this.emitAddingTag(data),this.autoSuggestionClose(),this.$refs.tagSearchInput.focus()}},Object(f.b)("common",["setRequest","getRequest"]))},h=v,y=r(15),component=Object(y.a)(h,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"outside-click",rawName:"v-outside-click",value:e.autoSuggestionClose,expression:"autoSuggestionClose"}],staticClass:"tag-wrapper"},[t("ul",{staticClass:"tags"},[e._l(e.selectedTags,(function(r,n){return t("li",{key:n,class:{warning:e.deleteWarning&&n===e.selectedTags.length-1}},[t("span",{staticClass:"tag"},[e._v("\n        "+e._s(r)+"\n        "),t("span",{staticClass:"close-btn",on:{click:function(t){return e.deleteTag(r)}}},[t("i",{staticClass:"icon close-icon"})])])])})),e._v(" "),t("li",{staticClass:"tag-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchedString,expression:"searchedString"}],ref:"tagSearchInput",attrs:{type:"text",placeholder:"Write here"},domProps:{value:e.searchedString},on:{focus:e.openResult,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.clickedItem({title:e.searchedString}))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteKeyPress()}],input:function(t){t.target.composing||(e.searchedString=t.target.value)}}})])],2),e._v(" "),e.autoSuggestionOpen?t("div",{staticClass:"tag-dropdown"},[e.loading?t("div",{staticClass:"spinner-wrapper"},[t("spinner",{attrs:{radius:40,color:"primary"}})],1):e.tagList?t("ul",[e._l(e.tagList,(function(r,n){return t("li",{key:n},[t("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.clickedItem(r.title)}}},[e._v("\n          "+e._s(r.title)+"\n        ")])])})),e._v(" "),e.searchedString&&!e.tagExists?t("li",[t("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.clickedItem(null)}}},[e._v("\n          "+e._s(e.searchedString)+" ("+e._s(e.$t("error.new"))+")\n        ")])]):e._e()],2):e.searchedString?e._e():t("p",[e._v("\n      "+e._s(e.$t("index.nf"))+"\n    ")])]):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:r(49).default})},639:function(e,t,r){"use strict";var n=r(3),l=r(640);n({target:"String",proto:!0,forced:r(641)("link")},{link:function(e){return l(this,"a","href",e)}})},640:function(e,t,r){"use strict";var n=r(5),l=r(46),o=r(25),c=/"/g,d=n("".replace);e.exports=function(e,t,r,n){var f=o(l(e)),m="<"+t;return""!==r&&(m+=" "+r+'="'+d(o(n),c,"&quot;")+'"'),m+">"+f+"</"+t+">"}},641:function(e,t,r){"use strict";var n=r(6);e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},676:function(e,t,r){"use strict";r.r(t);r(32),r(16),r(639),r(18),r(21),r(23),r(24),r(7),r(13);var n=r(4),l=r(159);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={name:"SliderFormTab",data:function(){return{selectedIdsData:null}},props:{title:{type:String,default:""},selectedIds:{type:Object,default:function(){return null}},options:{type:Object,default:function(){return null}},route:{type:Object,default:function(){return null}}},mixins:[],components:{Dropdown:l.default},computed:{},methods:{toggle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?(this.selectedIdsData=c(c({},this.selectedIdsData),Object(n.a)({},e,void 0)),delete this.selectedIdsData[e]):this.selectedIdsData=c(c({},this.selectedIdsData),Object(n.a)({},Object.keys(this.selectedIdsData).length,Object.keys(this.options)[0])),this.$emit("selected-ids",this.selectedIdsData)},selected:function(data){this.selectedIdsData[data.index]=data.evt.key,this.$emit("selected-ids",this.selectedIdsData)}},created:function(){},mounted:function(){this.selectedIdsData=this.selectedIds}},f=d,m=r(15),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"dply-felx mb-5"},[e.options&&Object.keys(e.options).length?t("div",{staticClass:"w-100"},[t("div",{staticClass:"sided mb-15"},[t("span",{staticClass:"lite-bold"},[e._v("\n        "+e._s(e.title)+"\n      ")]),e._v(" "),t("button",{staticClass:"primary-btn mn-w-200x",on:{click:function(t){return t.preventDefault(),e.toggle(null)}}},[e._v("\n        "+e._s(e.$t("list.an"))+"\n      ")])]),e._v(" "),t("div",{staticClass:"dply-felx f-wrap start"},e._l(e.selectedIds,(function(r,n){return t("div",{key:n,staticClass:"dply-felx mr-15 mb-10"},[t("dropdown",{attrs:{options:e.options,selectedKey:r},on:{clicked:function(t){return e.selected({evt:t,index:n})}}}),e._v(" "),t("button",{staticClass:"ml-5 close-btn",on:{click:function(t){return t.preventDefault(),e.toggle(n)}}},[t("i",{staticClass:"icon close-icon"})])],1)})),0)]):t("a",{staticClass:"link",attrs:{href:"/".concat(e.route.link),title:e.$t("list.add",{title:e.title})},on:{click:function(t){return t.preventDefault(),e.$router.push({name:e.route.name})}}},[e._v("\n    "+e._s(e.$t("list.add",{title:e.title}))+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Dropdown:r(159).default})},677:function(e,t,r){"use strict";r.r(t);var n=r(1),l=(r(22),r(159)),o={name:"ProductSource",data:function(){return{}},props:{title:{type:String,default:""},type:{type:String,default:""},allData:{type:Object,default:null},items:{type:Array,default:[]}},mixins:[],components:{Dropdown:l.default},computed:{},methods:{itemSelected:function(e,t){this.$emit("itemSelected",{index:e,value:t.key})},removeItem:function(e){var t,r=!0;null!==(t=this.items[e])&&void 0!==t&&t.deleted&&(r=!1),this.$emit("removeItem",{index:e,deleted:r})},addItem:function(){this.$emit("addItem")}},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},c=r(15),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mb-20 mb-sm-15"},[t("div",{staticClass:"dply-felx"},[t("h5",{staticClass:"mb-10 capitalize"},[e._v(e._s(e.title))]),e._v(" "),t("button",{staticClass:"outline-btn mb-10",on:{click:function(t){return t.preventDefault(),e.addItem.apply(null,arguments)}}},[e._v("\n      "+e._s(e.$t("list.add",{title:e.title}))+"\n    ")])]),e._v(" "),t("div",{staticClass:"dply-felx j-left f-wrap mlr--7-5"},e._l(e.items,(function(r,n){return t("div",{key:n,staticClass:"mlr-7-5 dply-felx mt-10"},[t("dropdown",{attrs:{disabled:r.deleted,"selected-key":r[e.type].id,options:e.allData},on:{clicked:function(t){return e.itemSelected(n,t)}}}),e._v(" "),t("button",{staticClass:"ml-5 close-btn",on:{click:function(t){return t.preventDefault(),e.removeItem(n)}}},[t("i",{staticClass:"icon",class:r.deleted?"undo-icon":"close-icon"})])],1)})),0)])}),[],!1,null,"4a450aa6",null);t.default=component.exports;installComponents(component,{Dropdown:r(159).default})},802:function(e,t,r){"use strict";r.r(t);r(18),r(21),r(23),r(24),r(7),r(13);var n=r(1),l=r(4),o=(r(22),r(37),r(199),r(126),r(16),r(28),r(64),r(480)),c=r(86),d=r(159),f=r(676),m=r(500),v=r(10),h=r(49),y=r(677),_=r(723);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w={name:"SliderDetail",data:function(){var e;return{loading:!1,result:{id:"",source_brands:[],source_categories:[],source_sub_categories:[],source_products:[],image:this.defaultImage,source_type:1,slider_type:this.sliderType,tags:"",url:"",slug:"",title:"",status:2,type:parseInt(null===(e=this.$route)||void 0===e||null===(e=e.query)||void 0===e?void 0:e.type)||1}}},props:{gate:{type:String,default:"home_slider"},routeName:{type:String,default:"home-slider"},sliderType:{type:String,default:""}},mixins:[c.a],components:{SourceTypeProducts:_.default,ProductSource:y.default,Spinner:h.default,TagSearch:m.default,SliderFormTab:f.default,Dropdown:d.default,DataPage:o.default},computed:S(S({sourceProducts:function(){var e;return(null===(e=this.result)||void 0===e?void 0:e.source_products)||[]}},Object(v.c)("language",["currentLanguage"])),Object(v.c)("common",["allCategories","allBrands"])),methods:S({dropdownStatusSelected:function(data){this.result.status=data.key},undoDelete:function(e){var t=S(S({},this.result.source_products[e]),{deleted:!1});this.result.source_products.splice(e,1),this.result.source_products.splice(e,0,t)},deleteProduct:function(e){var t=S(S({},this.result.source_products[e]),{deleted:!0});this.result.source_products.splice(e,1),this.result.source_products.splice(e,0,t)},addProduct:function(e){var t,r;null!==(t=this.result)&&void 0!==t&&null!==(t=t.source_products)&&void 0!==t&&t.findIndex((function(t){return t.product.id===e.id})),null===(r=this.result)||void 0===r||null===(r=r.source_products)||void 0===r||r.push({product:{id:e.id,title:e.title,image:e.image,offered:e.offered,selling:e.selling}}),this.$refs.sourceTypeProducts.autoSuggestionClose()},onSuccess:function(e){this.result=Object.assign({},e)},itemSelected:function(source,e,t){var r,n=t.index,o=t.value;null!==(r=this.result[source][n])&&void 0!==r&&r.id&&(this.result[source][n]=S(S({},this.result[source][n]),{updated:!0}));var c=S(S({},this.result[source][n]),Object(l.a)({},e,{id:o}));this.result[source].splice(n,1),this.result[source].splice(n,0,c)},removeItem:function(source,e){var t=e.index,r=e.deleted,n=S(S({},this.result[source][t]),{deleted:r});this.result[source].splice(t,1),this.result[source].splice(t,0,n)},addItem:function(source,e,t){this.result[source].push(Object(l.a)({},e,{id:Object.keys(t)[0]}))},addTag:function(e){this.result.tags||(this.result.tags=","),this.result.tags="".concat(this.result.tags).concat(e,",")},deleteTag:function(e){this.result.tags=this.result.tags.replace("".concat(e,","),"")},dropdownSelected:function(data){this.result.source_type=data.key}},Object(v.b)("common",["getDropdownList"])),mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading=!0,t.prev=1,e.allCategories&&e.allBrands){t.next=5;break}return t.next=5,e.getDropdownList();case 5:t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",e.$nuxt.error(t.t0));case 10:e.loading=!1;case 11:case"end":return t.stop()}}),t,null,[[1,7]])})))()}},j=r(15),component=Object(j.a)(w,(function(){var e=this,t=e._self._c;return t("data-page",{ref:"dataPage",attrs:{"set-api":"setSliderImage","get-api":"getSliderImage","set-image-api":"uploadSliderImage","route-name":e.routeName,name:e.$t("profile.hSlid"),"validation-keys":["title"],"file-keys":["id","type","source_type","slider_type"],result:e.result,gate:e.gate},on:{result:e.onSuccess},scopedSlots:e._u([{key:"form",fn:function(r){var n=r.hasError;return[t("div",{staticClass:"input-wrapper"},[t("label",[e._v(e._s(e.$t("index.title")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.title,expression:"result.title"}],class:{invalid:!e.result.title&&n},attrs:{type:"text",placeholder:e.$t("index.title"),name:"title"},domProps:{value:e.result.title},on:{change:e.slugChange,input:function(t){t.target.composing||e.$set(e.result,"title",t.target.value)}}}),e._v(" "),!e.result.title&&n?t("span",{staticClass:"error"},[e._v("\n        "+e._s(e.$t("category.req",{type:e.$t("index.title")}))+"\n      ")]):e._e()]),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("label",[e._v(e._s(e.$t("category.slug")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.slug,expression:"result.slug"}],ref:"slug",class:{invalid:!e.result.slug&&n},attrs:{type:"text",placeholder:e.$t("category.slug"),name:"slug"},domProps:{value:e.result.slug},on:{input:function(t){t.target.composing||e.$set(e.result,"slug",t.target.value)}}}),e._v(" "),!e.result.slug&&n?t("span",{staticClass:"error"},[e._v("\n        "+e._s(e.$t("category.req",{type:e.$t("category.slug")}))+"\n      ")]):e._e()]),e._v(" "),t("div",{staticClass:"input-wrapper single-line"},[t("label",[e._v(e._s(e.$t("admin.sType")))]),e._v(" "),t("dropdown",{attrs:{selectedKey:e.result.source_type,options:e.productSourceObj},on:{clicked:e.dropdownSelected}})],1),e._v(" "),e.allCategories&&parseInt(e.result.source_type)===e.productSources.category?t("product-source",{attrs:{title:e.$t("category.cat"),type:"category",items:e.result.source_categories,"all-data":e.allCategories},on:{itemSelected:function(t){return e.itemSelected("source_categories","category",t)},removeItem:function(t){return e.removeItem("source_categories",t)},addItem:function(t){return e.addItem("source_categories","category",e.allCategories)}}}):e._e(),e._v(" "),e.allBrands&&parseInt(e.result.source_type)===e.productSources.brand?t("product-source",{attrs:{title:e.$t("brand.brand"),type:"brand",items:e.result.source_brands,"all-data":e.allBrands},on:{itemSelected:function(t){return e.itemSelected("source_brands","brand",t)},removeItem:function(t){return e.removeItem("source_brands",t)},addItem:function(t){return e.addItem("source_brands","brand",e.allBrands)}}}):e._e(),e._v(" "),parseInt(e.result.source_type)===e.productSources.tag?t("div",{staticClass:"input-wrapper mb-20 mb-sm-15"},[t("label",[e._v(e._s(e.$t("admin.tags")))]),e._v(" "),t("tag-search",{attrs:{tags:e.result.tags},on:{add:e.addTag,delete:e.deleteTag}})],1):e._e(),e._v(" "),parseInt(e.result.source_type)===e.productSources.product?t("source-type-products",{ref:"sourceTypeProducts",attrs:{"source-products":e.sourceProducts},on:{"product-clicked":e.addProduct,"delete-product":e.deleteProduct,"undo-delete":e.undoDelete}}):e._e(),e._v(" "),parseInt(e.result.source_type)===e.productSources.url?t("div",{staticClass:"input-wrapper mb-20 mb-sm-15"},[t("p",{staticClass:"info-msg mb-20 mb-sm-15"},[e._v(e._s(e.$t("admin.srcUrl"))+" jet-set-hydratiream/product/88630128")]),e._v(" "),t("label",[e._v(e._s(e.$t("admin.url")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.url,expression:"result.url"}],attrs:{placeholder:e.$t("admin.url")},domProps:{value:e.result.url},on:{input:function(t){t.target.composing||e.$set(e.result,"url",t.target.value)}}})]):e._e(),e._v(" "),t("div",{staticClass:"input-wrapper mlr-7-5"},[t("label",{staticClass:"block"},[e._v("\n        "+e._s(e.$t("category.status"))+"\n      ")]),e._v(" "),t("dropdown",{attrs:{selectedKey:"".concat(e.result.status),options:e.statusObj},on:{clicked:e.dropdownStatusSelected}})],1)]}}])})}),[],!1,null,"48f9bb86",null);t.default=component.exports;installComponents(component,{Dropdown:r(159).default,TagSearch:r(500).default})}}]);