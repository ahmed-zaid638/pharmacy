/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[113,31,83],{470:function(e,t,r){e.exports=function(){"use strict";var g="undefined"!=typeof document&&document.documentMode,e={rootMargin:"0px",threshold:0,load:function(e){if("picture"===e.nodeName.toLowerCase()){var t=e.querySelector("img"),r=!1;null===t&&(t=document.createElement("img"),r=!0),g&&e.getAttribute("data-iesrc")&&(t.src=e.getAttribute("data-iesrc")),e.getAttribute("data-alt")&&(t.alt=e.getAttribute("data-alt")),r&&e.append(t)}if("video"===e.nodeName.toLowerCase()&&!e.getAttribute("data-src")&&e.children){for(var a=e.children,n=void 0,i=0;i<=a.length-1;i++)(n=a[i].getAttribute("data-src"))&&(a[i].src=n);e.load()}e.getAttribute("data-poster")&&(e.poster=e.getAttribute("data-poster")),e.getAttribute("data-src")&&(e.src=e.getAttribute("data-src")),e.getAttribute("data-srcset")&&e.setAttribute("srcset",e.getAttribute("data-srcset"));var o=",";if(e.getAttribute("data-background-delimiter")&&(o=e.getAttribute("data-background-delimiter")),e.getAttribute("data-background-image"))e.style.backgroundImage="url('"+e.getAttribute("data-background-image").split(o).join("'),url('")+"')";else if(e.getAttribute("data-background-image-set")){var l=e.getAttribute("data-background-image-set").split(o),u=l[0].substr(0,l[0].indexOf(" "))||l[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===l.length?e.style.backgroundImage=u:e.setAttribute("style",(e.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+l+"); background-image: image-set("+l+")")}e.getAttribute("data-toggle-class")&&e.classList.toggle(e.getAttribute("data-toggle-class"))},loaded:function(){}};function t(e){e.setAttribute("data-loaded",!0)}var r=function(e){return"true"===e.getAttribute("data-loaded")},n=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return e instanceof Element?[e]:e instanceof NodeList?e:t.querySelectorAll(e)};return function(){var o,a,l=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=Object.assign({},e,c),i=d.root,m=d.rootMargin,f=d.threshold,u=d.load,g=d.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((o=u,a=g,function(e,n){e.forEach((function(e){(0<e.intersectionRatio||e.isIntersecting)&&(n.unobserve(e.target),r(e.target)||(o(e.target),t(e.target),a(e.target)))}))}),{root:i,rootMargin:m,threshold:f}));for(var v,_=n(l,i),b=0;b<_.length;b++)(v=_[b]).getAttribute("data-placeholder-background")&&(v.style.background=v.getAttribute("data-placeholder-background"));return{observe:function(){for(var e=n(l,i),o=0;o<e.length;o++)r(e[o])||(s?s.observe(e[o]):(u(e[o]),t(e[o]),g(e[o])))},triggerLoad:function(e){r(e)||(u(e),t(e),g(e))},observer:s}}}()},496:function(e,t,r){var content=r(676);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("3145ed91",content,!0,{sourceMap:!1})},506:function(e,t,r){"use strict";r.r(t);r(18),r(51),r(198);var n=r(699),o=r(86),l=r(296),c=r.n(l),d={name:"WYSIWYGEditor",data:function(){return{acceptedTags:["iframe"],productDescription:"",editAsHtml:!1,fullScreen:!1,focused:!1}},props:{title:{type:String,default:function(){return this.$t("prod.desc")}},type:{type:Number,required:!1},description:{type:String,default:""}},mixins:[o.a],components:{VueEditor:n.a},watch:{description:function(e){this.productDescription=c.a.sanitize(e,{ADD_TAGS:this.acceptedTags})}},computed:{},methods:{descriptionChange:function(){this.$emit("change",c.a.sanitize(this.productDescription,{ADD_TAGS:this.acceptedTags}))},fullScreenToggle:function(){this.fullScreen=!this.fullScreen},handleImageRemoved:function(e,t,r,n){this.handleDescriptionImage(!0,e,t,r,n)},handleImageAdded:function(e,t,r,n){this.handleDescriptionImage(!1,e,t,r,n)},handleDescriptionImage:function(e,t,r,n,o){this.$emit("file",{deleted:e,file:t,Editor:r,cursorLocation:n,resetUploader:o})}},beforeCreate:function(){},destroyed:function(){},created:function(){},mounted:function(){this.productDescription=c.a.sanitize(this.description)}},m=(r(675),r(15)),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"wysiwyg-wrapper",class:[{"full-screen":e.fullScreen},{focused:e.focused}]},[t("div",{staticClass:"dply-felx mb-15"},[t("label",{staticClass:"mb-0"},[e._v(e._s(e.title))]),e._v(" "),t("div",{staticClass:"custom-toolbar"},[t("button",{staticClass:"outline-btn",on:{click:function(t){t.preventDefault(),e.editAsHtml=!e.editAsHtml}}},[e._v("\n        "+e._s(e.$t("error.ea",{type:e.editAsHtml?e.$t("profile.wysi"):e.$t("profile.html")}))+"\n      ")]),e._v(" "),t("button",{staticClass:"outline-btn",on:{click:function(t){return t.preventDefault(),e.fullScreenToggle.apply(null,arguments)}}},[e._v("\n        "+e._s(e.$t("error.scrn",{type:e.fullScreen?e.$t("error.nrm"):e.$t("error.full")}))+"\n      ")]),e._v(" "),e.fullScreen?t("button",{staticClass:"ml-10 close-btn",on:{click:function(t){return t.preventDefault(),e.fullScreenToggle.apply(null,arguments)}}},[t("i",{staticClass:"icon close-icon"})]):e._e()])]),e._v(" "),e.editAsHtml?t("p",{staticClass:"info-msg mb-20 mb-sm-15"},[e._v("\n    "+e._s(e.$t("error.st"))+": h1, h2...h6, p, strong, em, u, s, blockquote, pre, ul, li, ol, br, a, img, video.\n    "+e._s(e.$t("error.mkSr"))+"\n  ")]):e._e(),e._v(" "),e.editAsHtml?t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.productDescription,expression:"productDescription"}],domProps:{value:e.productDescription},on:{change:e.descriptionChange,input:function(t){t.target.composing||(e.productDescription=t.target.value)}}}):t("vue-editor",{attrs:{useCustomImageHandler:""},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},"text-change":e.descriptionChange,"image-added":e.handleImageAdded,"image-removed":e.handleImageRemoved},model:{value:e.productDescription,callback:function(t){e.productDescription=t},expression:"productDescription"}})],1)}),[],!1,null,null,null);t.default=component.exports},675:function(e,t,r){"use strict";r(496)},676:function(e,t,r){var n=r(62)((function(i){return i[1]}));n.push([e.i,".ql-snow .ql-editor img{width:auto}.custom-toolbar{align-items:center;display:flex;gap:15px}.ql-editor{max-height:400px}.ql-editor li{display:block;line-height:1.9}.focused .ql-container{border-color:#444!important}.focused .ql-toolbar.ql-snow{border-color:#444!important;border-bottom:1px solid #ccc}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-radius:0 0 5px 5px}.ql-toolbar.ql-snow{border-radius:5px 5px 0 0}.has-error .whysigwyg-error .ql-container,.has-error .whysigwyg-error .ql-toolbar.ql-snow{border-color:red!important}.full-screen{background:#fff;bottom:0;display:flex;flex-direction:column;left:0;padding:30px;position:fixed;right:0;top:0;z-index:10}.full-screen .ql-editor{max-height:4000px}.full-screen .quillWrapper{display:flex;flex-direction:column;flex-grow:1}.full-screen .quillWrapper .ql-container,.full-screen textarea{flex-grow:1}@media only screen and (max-width:768px){.wysiwyg-wrapper .dply-felx{display:block;margin:10px 0}.wysiwyg-wrapper .dply-felx .custom-toolbar button{margin-top:10px}}",""]),n.locals={},e.exports=n},940:function(e,t,r){"use strict";r.r(t);r(18),r(51),r(21),r(23),r(24),r(7),r(13);var n=r(1),o=r(4),l=(r(22),r(16),r(10)),c=r(483),d=r(86),m=r(506),f=r(49),v=r(159);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={name:"brands",middleware:["common-middleware","auth"],data:function(){return{loading:!1,oldPageDescription:"",result:{id:"",title:"",slug:"",meta_title:"",description:"",meta_description:"",meta_keywords:"",page_from_component:""}}},mixins:[d.a],components:{Dropdown:v.default,Spinner:f.default,DataPage:c.default,WYSIWYGEditor:m.default},computed:h({isPageFromComponent:function(){return parseInt(this.result.page_from_component)!==this.status.PRIVATE}},Object(l.c)("language",["currentLanguage"])),methods:h({pageFromComponentSelected:function(data){this.result.page_from_component=data.key,this.isPageFromComponent?(this.oldPageDescription=this.result.description,this.result.description=Object.keys(this.pageComponent)[0]):this.oldPageDescription&&(this.result.description=this.oldPageDescription)},editorDescriptionFile:function(e){var t=e.deleted,r=e.file,n=e.Editor,o=e.cursorLocation,l=e.resetUploader;this.editorFile({deleted:t,file:r,Editor:n,cursorLocation:o,resetUploader:l})},editorFile:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,l,c,d,m,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.deleted,o=e.file,l=e.Editor,c=e.cursorLocation,d=e.resetUploader,n){r.next=26;break}return t.loading=!0,r.prev=3,m=new FormData,t.result.id?(m.append("description",t.result.description),m.append("page_id",t.result.id)):m.append("page",JSON.stringify(t.result)),m.append("photo",o),r.next=9,t.setRequest({params:m,api:"setPageWysiwygImage"});case 9:if(!(data=r.sent)){r.next=18;break}if(t.result.id){r.next=16;break}return r.next=14,t.$router.push({path:"/pages/".concat(data.page_id)});case 14:r.next=18;break;case 16:l.insertEmbed(c,"image",data.url),d();case 18:r.next=23;break;case 20:return r.prev=20,r.t0=r.catch(3),r.abrupt("return",t.$nuxt.error(r.t0));case 23:t.loading=!1,r.next=36;break;case 26:return t.loading=!0,r.prev=27,r.next=30,t.deleteData({params:t.getImageName(o),api:"deletePageWysiwygImage"});case 30:r.next=35;break;case 32:return r.prev=32,r.t1=r.catch(27),r.abrupt("return",t.$nuxt.error(r.t1));case 35:t.loading=!1;case 36:case"end":return r.stop()}}),r,null,[[3,20],[27,32]])})))()}},Object(l.b)("common",["setRequest","deleteData"])),mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},w=r(15),component=Object(w.a)(y,(function(){var e=this,t=e._self._c;return t("data-page",{ref:"dataPage",attrs:{"set-api":"setPage","get-api":"getPage","route-name":"pages",gate:"page","empty-store-variable":"allPages",name:e.$t("dataPage.page"),"validation-keys":["title","slug","meta_title","meta_description"],result:e.result},on:{result:function(t){e.result=t}},scopedSlots:e._u([{key:"form",fn:function(r){var n=r.hasError;return[e.loading?t("div",{staticClass:"spinner-wrapper"},[t("spinner",{attrs:{radius:70,color:"primary"}})],1):e._e(),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("label",[e._v(e._s(e.$t("index.title")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.title,expression:"result.title"}],class:{invalid:!e.result.title&&n},attrs:{type:"text",placeholder:e.$t("index.title")},domProps:{value:e.result.title},on:{change:e.slugChange,input:function(t){t.target.composing||e.$set(e.result,"title",t.target.value)}}}),e._v(" "),!e.result.title&&n?t("span",{staticClass:"error"},[e._v("\n        "+e._s(e.$t("category.req",{type:e.$t("index.title")}))+"\n      ")]):e._e()]),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("label",[e._v(e._s(e.$t("category.slug")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.slug,expression:"result.slug"}],class:{invalid:!e.result.slug&&n},attrs:{type:"text",placeholder:e.$t("category.slug")},domProps:{value:e.result.slug},on:{input:function(t){t.target.composing||e.$set(e.result,"slug",t.target.value)}}}),e._v(" "),!e.result.slug&&n?t("span",{staticClass:"error"},[e._v("\n        "+e._s(e.$t("category.req",{type:e.$t("category.slug")}))+"\n      ")]):e._e()]),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("div",{staticClass:"flex-v-centered mb j-left"},[t("span",{staticClass:"mr-15"},[e._v(e._s(e.$t("admin.pageComp")))]),e._v(" "),t("dropdown",{attrs:{selectedKey:e.result.page_from_component,options:e.featuredObj},on:{clicked:e.pageFromComponentSelected}})],1)]),e._v(" "),e.isPageFromComponent?t("div",{staticClass:"input-wrapper"},[t("div",{staticClass:"flex-v-centered mb j-left"},[t("span",{staticClass:"mr-15"},[e._v(e._s(e.$t("admin.comp")))]),e._v(" "),t("dropdown",{attrs:{selectedKey:e.result.description,options:e.pageComponent},on:{clicked:function(t){e.result.description=t.key}}})],1)]):t("WYSIWYGEditor",{attrs:{title:e.$t("prod.desc"),description:e.result.description},on:{change:function(t){e.result.description=t},file:e.editorDescriptionFile}}),e._v(" "),t("div",{staticClass:"input-wrapper mt-15"},[t("label",[e._v(e._s(e.$t("category.mTitle")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.meta_title,expression:"result.meta_title"}],class:{invalid:!e.result.meta_title&&n},attrs:{type:"text",placeholder:e.$t("category.mTitle")},domProps:{value:e.result.meta_title},on:{input:function(t){t.target.composing||e.$set(e.result,"meta_title",t.target.value)}}}),e._v(" "),!e.result.meta_title&&n?t("span",{staticClass:"error"},[e._v("\n        "+e._s(e.$t("category.req",{type:e.$t("category.mTitle")}))+"\n      ")]):e._e()]),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("label",[e._v(e._s(e.$t("category.mDesc")))]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.result.meta_description,expression:"result.meta_description"}],class:{invalid:!e.result.meta_description&&n},attrs:{placeholder:e.$t("category.mDesc")},domProps:{value:e.result.meta_description},on:{input:function(t){t.target.composing||e.$set(e.result,"meta_description",t.target.value)}}}),e._v(" "),!e.result.meta_description&&n?t("span",{staticClass:"error"},[e._v("\n        "+e._s(e.$t("category.req",{type:e.$t("category.mDesc")}))+"\n      ")]):e._e()]),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("label",[e._v(e._s(e.$t("ship.mk"))+" ("+e._s(e.$t("ship.csk"))+")")]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.result.meta_keywords,expression:"result.meta_keywords"}],class:{invalid:!e.result.meta_keywords&&n},attrs:{placeholder:e.$t("ship.mk")},domProps:{value:e.result.meta_keywords},on:{input:function(t){t.target.composing||e.$set(e.result,"meta_keywords",t.target.value)}}}),e._v(" "),!e.result.meta_keywords&&n?t("span",{staticClass:"error"},[e._v("\n              "+e._s(e.$t("category.req",{type:e.$t("ship.mk")}))+"\n            ")]):e._e()])]}}])})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:r(49).default,Dropdown:r(159).default,WYSIWYGEditor:r(506).default})}}]);