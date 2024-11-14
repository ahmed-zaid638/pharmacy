/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[125,31],{470:function(t,e,r){t.exports=function(){"use strict";var g="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,n=void 0,i=0;i<=a.length-1;i++)(n=a[i].getAttribute("data-src"))&&(a[i].src=n);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var o=",";if(t.getAttribute("data-background-delimiter")&&(o=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(o).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var c=t.getAttribute("data-background-image-set").split(o),u=c[0].substr(0,c[0].indexOf(" "))||c[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===c.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var r=function(t){return"true"===t.getAttribute("data-loaded")},n=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var o,a,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=Object.assign({},t,l),i=d.root,f=d.rootMargin,m=d.threshold,u=d.load,g=d.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((o=u,a=g,function(t,n){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(n.unobserve(t.target),r(t.target)||(o(t.target),e(t.target),a(t.target)))}))}),{root:i,rootMargin:f,threshold:m}));for(var v,h=n(c,i),b=0;b<h.length;b++)(v=h[b]).getAttribute("data-placeholder-background")&&(v.style.background=v.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=n(c,i),o=0;o<t.length;o++)r(t[o])||(s?s.observe(t[o]):(u(t[o]),e(t[o]),g(t[o])))},triggerLoad:function(t){r(t)||(u(t),e(t),g(t))},observer:s}}}()},471:function(t,e,r){"use strict";var n=r(473).has;t.exports=function(t){return n(t),t}},473:function(t,e,r){"use strict";var n=r(5),o=Set.prototype;t.exports={Set:Set,add:n(o.add),has:n(o.has),remove:n(o.delete),proto:o}},474:function(t,e,r){"use strict";var n=r(5),o=r(293),c=r(473),l=c.Set,d=c.proto,f=n(d.forEach),m=n(d.keys),v=m(new l).next;t.exports=function(t,e,r){return r?o({iterator:m(t),next:v},e):f(t,e)}},477:function(t,e,r){"use strict";var n=r(55),o=r(12),c=r(653),l=r(30),d=n("Set");t.exports=function(t){return function(t){return l(t)&&"number"==typeof t.size&&o(t.has)&&o(t.keys)}(t)?t:c(t)?new d(t):t}},478:function(t,e,r){"use strict";var n=r(52),o=r(27),c=r(19),l=r(77),d=r(655),f="Invalid size",m=RangeError,v=TypeError,h=Math.max,y=function(t,e){this.set=t,this.size=h(e,0),this.has=n(t.has),this.keys=n(t.keys)};y.prototype={getIterator:function(){return d(o(c(this.keys,this.set)))},includes:function(t){return c(this.has,this.set,t)}},t.exports=function(t){o(t);var e=+t.size;if(e!=e)throw new v(f);var r=l(e);if(r<0)throw new m(f);return new y(t,r)}},485:function(t,e,r){"use strict";var n=r(297),o=r(473);t.exports=n(o.proto,"size","get")||function(t){return t.size}},490:function(t,e,r){"use strict";var n=r(473),o=r(474),c=n.Set,l=n.add;t.exports=function(t){var e=new c;return o(t,(function(t){l(e,t)})),e}},648:function(t,e,r){"use strict";r(649)},649:function(t,e,r){"use strict";r(298)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(299))},650:function(t,e,r){"use strict";var n=r(3),o=r(471),c=r(473).add;n({target:"Set",proto:!0,real:!0,forced:!0},{addAll:function(){for(var t=o(this),e=0,r=arguments.length;e<r;e++)c(t,arguments[e]);return t}})},651:function(t,e,r){"use strict";var n=r(3),o=r(471),c=r(473).remove;n({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var t,e=o(this),r=!0,n=0,l=arguments.length;n<l;n++)t=c(e,arguments[n]),r=r&&t;return!!r}})},652:function(t,e,r){"use strict";var n=r(3),o=r(19),c=r(477),l=r(654);n({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){return o(l,this,c(t))}})},653:function(t,e,r){"use strict";var n=r(103),o=r(26),c=r(58),l=r(14),d=r(104),f=l("iterator"),m=Object;t.exports=function(t){if(c(t))return!1;var e=m(t);return void 0!==e[f]||"@@iterator"in e||o(d,n(e))}},654:function(t,e,r){"use strict";var n=r(471),o=r(473),c=r(490),l=r(485),d=r(478),f=r(474),m=r(293),v=o.has,h=o.remove;t.exports=function(t){var e=n(this),r=d(t),o=c(e);return l(e)<=r.size?f(e,(function(t){r.includes(t)&&h(o,t)})):m(r.getIterator(),(function(t){v(e,t)&&h(o,t)})),o}},655:function(t,e,r){"use strict";t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},656:function(t,e,r){"use strict";var n=r(3),o=r(34),c=r(471),l=r(474);n({target:"Set",proto:!0,real:!0,forced:!0},{every:function(t){var e=c(this),r=o(t,arguments.length>1?arguments[1]:void 0);return!1!==l(e,(function(t){if(!r(t,t,e))return!1}),!0)}})},657:function(t,e,r){"use strict";var n=r(3),o=r(34),c=r(471),l=r(473),d=r(474),f=l.Set,m=l.add;n({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var e=c(this),r=o(t,arguments.length>1?arguments[1]:void 0),n=new f;return d(e,(function(t){r(t,t,e)&&m(n,t)})),n}})},658:function(t,e,r){"use strict";var n=r(3),o=r(34),c=r(471),l=r(474);n({target:"Set",proto:!0,real:!0,forced:!0},{find:function(t){var e=c(this),r=o(t,arguments.length>1?arguments[1]:void 0),n=l(e,(function(t){if(r(t,t,e))return{value:t}}),!0);return n&&n.value}})},659:function(t,e,r){"use strict";var n=r(3),o=r(19),c=r(477),l=r(660);n({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){return o(l,this,c(t))}})},660:function(t,e,r){"use strict";var n=r(471),o=r(473),c=r(485),l=r(478),d=r(474),f=r(293),m=o.Set,v=o.add,h=o.has;t.exports=function(t){var e=n(this),r=l(t),o=new m;return c(e)>r.size?f(r.getIterator(),(function(t){h(e,t)&&v(o,t)})):d(e,(function(t){r.includes(t)&&v(o,t)})),o}},661:function(t,e,r){"use strict";var n=r(3),o=r(19),c=r(477),l=r(662);n({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){return o(l,this,c(t))}})},662:function(t,e,r){"use strict";var n=r(471),o=r(473).has,c=r(485),l=r(478),d=r(474),f=r(293),m=r(200);t.exports=function(t){var e=n(this),r=l(t);if(c(e)<=r.size)return!1!==d(e,(function(t){if(r.includes(t))return!1}),!0);var v=r.getIterator();return!1!==f(v,(function(t){if(o(e,t))return m(v,"normal",!1)}))}},663:function(t,e,r){"use strict";var n=r(3),o=r(19),c=r(477),l=r(664);n({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){return o(l,this,c(t))}})},664:function(t,e,r){"use strict";var n=r(471),o=r(485),c=r(474),l=r(478);t.exports=function(t){var e=n(this),r=l(t);return!(o(e)>r.size)&&!1!==c(e,(function(t){if(!r.includes(t))return!1}),!0)}},665:function(t,e,r){"use strict";var n=r(3),o=r(19),c=r(477),l=r(666);n({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){return o(l,this,c(t))}})},666:function(t,e,r){"use strict";var n=r(471),o=r(473).has,c=r(485),l=r(478),d=r(293),f=r(200);t.exports=function(t){var e=n(this),r=l(t);if(c(e)<r.size)return!1;var m=r.getIterator();return!1!==d(m,(function(t){if(!o(e,t))return f(m,"normal",!1)}))}},667:function(t,e,r){"use strict";var n=r(3),o=r(5),c=r(471),l=r(474),d=r(25),f=o([].join),m=o([].push);n({target:"Set",proto:!0,real:!0,forced:!0},{join:function(t){var e=c(this),r=void 0===t?",":d(t),n=[];return l(e,(function(t){m(n,t)})),f(n,r)}})},668:function(t,e,r){"use strict";var n=r(3),o=r(34),c=r(471),l=r(473),d=r(474),f=l.Set,m=l.add;n({target:"Set",proto:!0,real:!0,forced:!0},{map:function(t){var e=c(this),r=o(t,arguments.length>1?arguments[1]:void 0),n=new f;return d(e,(function(t){m(n,r(t,t,e))})),n}})},669:function(t,e,r){"use strict";var n=r(3),o=r(52),c=r(471),l=r(474),d=TypeError;n({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(t){var e=c(this),r=arguments.length<2,n=r?void 0:arguments[1];if(o(t),l(e,(function(o){r?(r=!1,n=o):n=t(n,o,o,e)})),r)throw new d("Reduce of empty set with no initial value");return n}})},670:function(t,e,r){"use strict";var n=r(3),o=r(34),c=r(471),l=r(474);n({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var e=c(this),r=o(t,arguments.length>1?arguments[1]:void 0);return!0===l(e,(function(t){if(r(t,t,e))return!0}),!0)}})},671:function(t,e,r){"use strict";var n=r(3),o=r(19),c=r(477),l=r(672);n({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){return o(l,this,c(t))}})},672:function(t,e,r){"use strict";var n=r(471),o=r(473),c=r(490),l=r(478),d=r(293),f=o.add,m=o.has,v=o.remove;t.exports=function(t){var e=n(this),r=l(t).getIterator(),o=c(e);return d(r,(function(t){m(e,t)?v(o,t):f(o,t)})),o}},673:function(t,e,r){"use strict";var n=r(3),o=r(19),c=r(477),l=r(674);n({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){return o(l,this,c(t))}})},674:function(t,e,r){"use strict";var n=r(471),o=r(473).add,c=r(490),l=r(478),d=r(293);t.exports=function(t){var e=n(this),r=l(t).getIterator(),f=c(e);return d(r,(function(t){o(f,t)})),f}},943:function(t,e,r){"use strict";r.r(e);r(37),r(44),r(32),r(18),r(23),r(24),r(16),r(13);var n=r(1),o=r(111),c=r(4),l=(r(22),r(21),r(50),r(7),r(28),r(648),r(36),r(64),r(650),r(651),r(652),r(656),r(657),r(658),r(659),r(661),r(663),r(665),r(667),r(668),r(669),r(670),r(671),r(673),r(35),r(483)),d=r(86),f=r(159),m=r(10);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(c.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y={name:"roles-permissions",middleware:["common-middleware","auth"],data:function(){return{allSelected:!1,groupPermissions:[],selectedPermissions:[],result:{id:"",name:"",updated_permissions:[],permissions:[]}}},mixins:[d.a],components:{DataPage:l.default,Dropdown:f.default},watch:{resultPermissions:function(t){this.selectedPermissions=null==t?void 0:t.map((function(i){return i.id}))}},computed:h({resultPermissions:function(){var t;return null===(t=this.result)||void 0===t?void 0:t.permissions}},Object(m.c)("common",["allPermissions"])),methods:h({groupBy:function(t,e){return t.reduce((function(t,r){var n=r[e];return t[n]||(t[n]=[]),t[n].push(r),t}),{})},formatPermissionName:function(t){return this.capitalizeFirstLetter(null==t?void 0:t.replace("_"," ").split(".")[1])},formatGroupName:function(t){return this.capitalizeFirstLetter(null==t?void 0:t.replace(/\.|_/g," "))},capitalizeFirstLetter:function(t){return(null==t?void 0:t.charAt(0).toUpperCase())+(null==t?void 0:t.slice(1))},selectAll:function(){if(this.groupPermissions=[],this.selectedPermissions=[],this.allSelected)for(var i in this.allPermissions)this.selectedPermissions.push(this.allPermissions[i].id),this.groupPermissions.push(this.allPermissions[i].group_name);this.groupPermissions=Object(o.a)(new Set(this.groupPermissions)),this.result.updated_permissions=this.selectedPermissions},selectGroup:function(data,t){var e=this.allPermissions.filter((function(i){return i.group_name===data})).map((function(i){return i.id}));t.target.checked?this.selectedPermissions=Object(o.a)(new Set([].concat(Object(o.a)(this.selectedPermissions),Object(o.a)(e)))):this.selectedPermissions=this.selectedPermissions.filter((function(i){return-1===e.indexOf(i)})),this.result.updated_permissions=this.selectedPermissions},permissionChanged:function(){this.groupPermissions=[],this.allSelected=!1,this.result.updated_permissions=this.selectedPermissions}},Object(m.b)("common",["getAllList"])),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.allPermissions){e.next=9;break}return e.prev=1,e.next=4,t.getAllList({api:"allPermissions",mutation:"SET_ALL_PERMISSIONS"});case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return",t.$nuxt.error(e.t0));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))()}},P=r(15),component=Object(P.a)(y,(function(){var t=this,e=t._self._c;return t.allPermissions?e("data-page",{ref:"dataPage",attrs:{"set-api":"setRole","get-api":"getRole","route-name":"roles-permissions","empty-store-variable":"allRoles",name:t.$t("dataPage.rPer"),"validation-keys":["name"],result:t.result,gate:"role"},on:{result:function(e){t.result=e}},scopedSlots:t._u([{key:"form",fn:function(r){var n=r.hasError;return[e("div",{staticClass:"input-wrapper"},[e("label",[t._v(t._s(t.$t("user.name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.result.name,expression:"result.name"}],ref:"title",class:{invalid:!t.result.name&&n},attrs:{type:"text",placeholder:t.$t("user.name"),name:"title"},domProps:{value:t.result.name},on:{input:function(e){e.target.composing||t.$set(t.result,"name",e.target.value)}}}),t._v(" "),!t.result.name&&n?e("span",{staticClass:"error"},[t._v("\n          "+t._s(t.$t("category.req",{type:t.$t("user.name")}))+"\n        ")]):t._e()]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("label",[t._v(t._s(t.$t("user.per")))]),t._v(" "),e("div",{staticClass:"b-b mb-10 mb-md-15 pb-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.allSelected,expression:"allSelected"}],staticClass:"styled-checkbox",attrs:{id:"styled-checkbox-all",type:"checkbox"},domProps:{checked:Array.isArray(t.allSelected)?t._i(t.allSelected,null)>-1:t.allSelected},on:{change:[function(e){var r=t.allSelected,n=e.target,o=!!n.checked;if(Array.isArray(r)){var c=t._i(r,null);n.checked?c<0&&(t.allSelected=r.concat([null])):c>-1&&(t.allSelected=r.slice(0,c).concat(r.slice(c+1)))}else t.allSelected=o},t.selectAll]}}),t._v(" "),e("label",{staticClass:"mtb-5",attrs:{for:"styled-checkbox-all"}},[t._v("\n            "+t._s(t.$t("index.all"))+"\n          ")])]),t._v(" "),t._l(t.groupBy(t.allPermissions,"group_name"),(function(r,n,o){return e("div",{key:o,staticClass:"permission-group"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.groupPermissions,expression:"groupPermissions"}],staticClass:"styled-checkbox",attrs:{id:"styled-checkbox-".concat(n),type:"checkbox"},domProps:{value:n,checked:Array.isArray(t.groupPermissions)?t._i(t.groupPermissions,n)>-1:t.groupPermissions},on:{change:[function(e){var r=t.groupPermissions,o=e.target,c=!!o.checked;if(Array.isArray(r)){var l=n,d=t._i(r,l);o.checked?d<0&&(t.groupPermissions=r.concat([l])):d>-1&&(t.groupPermissions=r.slice(0,d).concat(r.slice(d+1)))}else t.groupPermissions=c},function(e){return t.selectGroup(n,e)}]}}),t._v(" "),e("label",{staticClass:"mtb-5 mt-md-15",attrs:{for:"styled-checkbox-".concat(n)}},[t._v("\n              "+t._s(t.formatGroupName(n))+"\n            ")])]),t._v(" "),e("div",{staticClass:"permission-item"},t._l(r,(function(i,r){return e("span",{key:"".concat(o,"-").concat(r),staticClass:"mr-15"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedPermissions,expression:"selectedPermissions"}],staticClass:"styled-checkbox",attrs:{id:"checkbox-".concat(o,"-").concat(r),type:"checkbox"},domProps:{value:i.id,checked:Array.isArray(t.selectedPermissions)?t._i(t.selectedPermissions,i.id)>-1:t.selectedPermissions},on:{change:[function(e){var r=t.selectedPermissions,n=e.target,o=!!n.checked;if(Array.isArray(r)){var c=i.id,l=t._i(r,c);n.checked?l<0&&(t.selectedPermissions=r.concat([c])):l>-1&&(t.selectedPermissions=r.slice(0,l).concat(r.slice(l+1)))}else t.selectedPermissions=o},t.permissionChanged]}}),t._v(" "),e("label",{staticClass:"mtb-7-5",attrs:{for:"checkbox-".concat(o,"-").concat(r)}},[t._v("\n                "+t._s(t.formatPermissionName(i.name))+"\n              ")])])})),0)])}))],2)]}}],null,!1,4127812052)}):t._e()}),[],!1,null,"dc672ecc",null);e.default=component.exports}}]);