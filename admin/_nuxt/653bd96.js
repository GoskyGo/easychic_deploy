(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{686:function(t,e,r){var content=r(705);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("eaa4e63e",content,!0,{sourceMap:!1})},704:function(t,e,r){"use strict";r(686)},705:function(t,e,r){var n=r(62)((function(i){return i[1]}));n.push([t.i,".atr-wrapper{background:#f7f7f5;border:1px solid #ddd;border-radius:5px}.atr-wrapper .single-atr{align-items:center;border-bottom:1px solid #ddd;display:flex;flex-wrap:wrap}.atr-wrapper .single-atr label{padding:15px}.atr-wrapper .single-atr .atr-title{max-width:120px;width:120px}.atr-wrapper .single-atr:last-child{border-bottom:none}",""]),n.locals={},t.exports=n},708:function(t,e,r){"use strict";r.r(e);r(37),r(44),r(7),r(35),r(20),r(25),r(26),r(17);var n=r(110),c=r(1),o=r(4),l=(r(22),r(21),r(127),r(292),r(123),r(50),r(159),r(32),r(197),r(491),r(646),r(36),r(648),r(649),r(650),r(654),r(655),r(656),r(657),r(659),r(661),r(663),r(665),r(666),r(667),r(668),r(669),r(671),r(14),r(101),r(296),r(125),r(156)),d=r(466),v=r(10),f=r(86),m=r(472);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={name:"ProductInventory",data:function(){return{inventoryOpen:!1,result:[],selectedAttributes:[],selectedAttributeValues:[],selected:{},combinations:[],formSubmitting:!1,redirect:!1,existing:{}}},props:{attributes:{type:Array,default:[]},productPrice:{type:Number,default:0}},mixins:[f.a,m.a],components:{AjaxButton:l.default,ErrorFormatter:d.default},computed:y({currencyIcon:function(){var t;return(null===(t=this.setting)||void 0===t?void 0:t.currency_icon)||"$"},productId:function(){return this.$route.params.id}},Object(v.c)("setting",["setting"])),methods:y({imageDelete:function(t,e){var r=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var c,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(c=r.combinations[t]).images.splice(e,1),(o=r.combinations)[t]=y(y({},o[t]),c),r.combinations=[],setTimeout((function(){r.combinations=o}),10);case 6:case"end":return n.stop()}}),n)})))()},fileClicked:function(t){var e,r;this.$refs[t]&&null!==(e=this.$refs[t])&&void 0!==e&&e.length&&(null===(r=this.$refs[t][0])||void 0===r||r.click())},fileChanged:function(t,e){var r,n,c=this,o=this.combinations[t];null===(r=Object.values(null==e||null===(n=e.target)||void 0===n?void 0:n.files))||void 0===r||r.forEach((function(i,t){var r,n;c.isValidImage(i)||(null!==(r=o)&&void 0!==r&&r.images||(o=y(y({},o),{images:[]})),o.images.push({blob:URL.createObjectURL(i),file:null==e||null===(n=e.target)||void 0===n?void 0:n.files[t]}))}));var l=this.combinations;l[t]=y(y({},l[t]),o),this.combinations=[],setTimeout((function(){c.combinations=l}),20)},redirectingEnable:function(t){this.redirect="save"===t},fetchingData:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.getById({id:t.productId,params:{},api:"getInventory"});case 4:t.result=e.sent,t.loading=!1,e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",t.$nuxt.error(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},saveInventory:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.redirectingEnable(event.submitter.name),t.formSubmitting=!0,e.prev=2,r=new FormData,t.combinations.forEach((function(t,e){var n=function(n){var c;t.hasOwnProperty(n)&&("images"===n||"values"===n?t[n].forEach((function(t,c){for(var o in t){var l;if(t.hasOwnProperty(o))r.append("inventories[".concat(e,"][").concat(n,"][").concat(c,"][").concat(o,"]"),null!==(l=t[o])&&void 0!==l?l:"")}})):r.append("inventories[".concat(e,"][").concat(n,"]"),null!==(c=t[n])&&void 0!==c?c:""))};for(var c in t)n(c)})),e.next=7,t.setById({id:t.productId,params:r,api:"setInventory"});case 7:if(!(data=e.sent)){e.next=15;break}return t.result=data,e.next=12,t.mappingData();case 12:t.$router.push({path:"/products".concat(t.redirect?"":"/"+t.productId)}),e.next=16;break;case 15:t.$emit("has-error");case 16:e.next=21;break;case 18:return e.prev=18,e.t0=e.catch(2),e.abrupt("return",t.$nuxt.error(e.t0));case 21:t.formSubmitting=!1;case 22:case"end":return e.stop()}}),e,null,[[2,18]])})))()},renderLabel:function(t){return t.map((function(i){return i.title})).join(" + ")},combos:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(r===t.length){var l={id:"",sku:"",price:this.productPrice,quantity:0},d=o.map((function(t){return t.id})).join("-");void 0!==this.existing[d]&&(l={id:this.existing[d].id,sku:this.existing[d].sku,price:this.existing[d].price,quantity:this.existing[d].quantity}),c.push(y(y({},l),{values:o}))}else t[r].forEach((function(l){return e.combos(t,r+1,c,[].concat(Object(n.a)(o),[l]))}));return c},attributeValueChanged:function(t,e){var r,n,c;if(e.target.checked)-1===(null===(r=this.selectedAttributes)||void 0===r?void 0:r.findIndex((function(i){return i===(null==t?void 0:t.attribute_id)})))&&(this.selectedAttributes.push(t.attribute_id),this.selected=y(y({},this.selected),Object(o.a)({},t.attribute_id,[]))),-1===(null===(n=this.selected[t.attribute_id])||void 0===n?void 0:n.findIndex((function(i){return i===t.id})))&&this.selected[t.attribute_id].push(t);else if(this.selected[t.attribute_id]=this.selected[null==t?void 0:t.attribute_id].filter((function(i){return i.id!==t.id})),null===(c=this.selected[t.attribute_id])||void 0===c||!c.length){delete this.selected[t.attribute_id];var l=this.selectedAttributes.findIndex((function(i){return t.attribute_id===i}));this.selectedAttributes.splice(l,1)}this.combinations=this.combos(Object.values(this.selected))},attributeChanged:function(t,e){if(e.target.checked){var r,c=null===(r=this.attributes.find((function(i){return i.id===t.id})))||void 0===r?void 0:r.values;this.selected=y(y({},this.selected),Object(o.a)({},t.id,c));var l=null==c?void 0:c.map((function(i){return i.id}));this.selectedAttributeValues=Object(n.a)(new Set(this.selectedAttributeValues.concat(l)))}else{var d,v=null===(d=this.selected[t.id])||void 0===d?void 0:d.map((function(i){return i.id}));delete this.selected[t.id],this.selectedAttributeValues=this.selectedAttributeValues.filter((function(t){return-1===v.indexOf(t)}))}this.combinations=this.combos(Object.values(this.selected))},mappingData:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.result||null===(r=t.result)||void 0===r||!r.length){e.next=11;break}return t.selected={},t.combinations=[],l=[],d=[],e.next=7,null===(c=Object.values(t.result))||void 0===c?void 0:c.forEach((function(i){var e=[];i.inventory_attributes.forEach((function(r){l.push(r.attribute_value.attribute_id),d.push(r.attribute_value.id),e.push(r.attribute_value),void 0===t.selected[r.attribute_value.attribute_id]&&(t.selected=y(y({},t.selected),Object(o.a)({},r.attribute_value.attribute_id,[]))),-1===t.selected[r.attribute_value.attribute_id].findIndex((function(i){return r.attribute_value.id===i.id}))&&t.selected[r.attribute_value.attribute_id].push(r.attribute_value)})),t.existing[e.map((function(t){return t.id})).join("-")]={id:i.id,price:parseFloat(i.price)>0?i.price:t.productPrice,sku:i.sku,quantity:i.quantity},t.combinations.push({id:i.id,sku:i.sku,price:parseFloat(i.price)>0?i.price:t.productPrice,quantity:i.quantity,values:e})}));case 7:t.selectedAttributes=Object(n.a)(new Set(l)),t.selectedAttributeValues=Object(n.a)(new Set(d)),e.next=12;break;case 11:t.combinations=[{price:t.productPrice,quantity:0,sku:"",images:[],values:[]}];case 12:case"end":return e.stop()}}),e)})))()}},Object(v.b)("common",["getById","setById"])),beforeCreate:function(){},destroyed:function(){},created:function(){},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchingData();case 2:return e.next=4,t.mappingData();case 4:case"end":return e.stop()}}),e)})))()}},x=_,w=(r(704),r(15)),component=Object(w.a)(x,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"dply-felx gap-15 title ptb-5 b-0"},[e("h4",{},[t._v(t._s(t.$t("prod.pInv")))]),t._v(" "),e("button",{staticClass:"btn-clear dply-felx",on:{click:function(e){e.preventDefault(),t.inventoryOpen=!t.inventoryOpen}}},[e("i",{staticClass:"icon black ignore-click",class:[{"arrow-up":t.inventoryOpen},{"arrow-down":!t.inventoryOpen}]})])]),t._v(" "),t.inventoryOpen?e("div",{staticClass:"form-wrapper attr-inventory b-t"},[e("error-formatter",{attrs:{type:"inventory"}}),t._v(" "),e("form",{on:{submit:function(e){return e.preventDefault(),t.saveInventory.apply(null,arguments)}}},[t.attributes&&t.attributes.length?e("div",{staticClass:"mb-20 mb-sm-15 atr-wrapper"},t._l(t.attributes,(function(r,n){return e("div",{key:n,staticClass:"single-atr"},[r.values.length?[e("label",{staticClass:"cb atr-title f-1-2 bold"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedAttributes,expression:"selectedAttributes"}],attrs:{type:"checkbox"},domProps:{value:r.id,checked:Array.isArray(t.selectedAttributes)?t._i(t.selectedAttributes,r.id)>-1:t.selectedAttributes},on:{change:[function(e){var n=t.selectedAttributes,c=e.target,o=!!c.checked;if(Array.isArray(n)){var l=r.id,d=t._i(n,l);c.checked?d<0&&(t.selectedAttributes=n.concat([l])):d>-1&&(t.selectedAttributes=n.slice(0,d).concat(n.slice(d+1)))}else t.selectedAttributes=o},function(e){return t.attributeChanged(r,e)}]}}),t._v(" "),e("span",[t._v(t._s(r.title))])]),t._v(" "),t._l(r.values,(function(r,i){return e("label",{key:i,staticClass:"cb"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedAttributeValues,expression:"selectedAttributeValues"}],attrs:{type:"checkbox"},domProps:{value:r.id,checked:Array.isArray(t.selectedAttributeValues)?t._i(t.selectedAttributeValues,r.id)>-1:t.selectedAttributeValues},on:{change:[function(e){var n=t.selectedAttributeValues,c=e.target,o=!!c.checked;if(Array.isArray(n)){var l=r.id,d=t._i(n,l);c.checked?d<0&&(t.selectedAttributeValues=n.concat([l])):d>-1&&(t.selectedAttributeValues=n.slice(0,d).concat(n.slice(d+1)))}else t.selectedAttributeValues=o},function(e){return t.attributeValueChanged(r,e)}]}}),t._v(" "),e("span",[t._v(t._s(r.title))])])}))]:t._e()],2)})),0):t._e(),t._v(" "),e("div",{staticClass:"inventory-wrap mb-20 mb-sm-15"},[e("div",{staticClass:"dply-felx f-column gap-15"},[e("div",{staticClass:"f-wrap tr dply-felx gap-10"},[e("span",{staticClass:"title"},[t._v(t._s(t.$t("list.attr")))]),t._v(" "),e("div",{staticClass:"right dply-felx gap-10 f-wrap"},[e("div",{staticClass:"inputs dply-felx gap-10 f-wrap"},[e("span",{staticClass:"w-120x"},[t._v(t._s(t.$t("title.sku")))]),t._v(" "),e("span",{staticClass:"w-120x"},[t._v(t._s(t.$t("brand.price"))+"("+t._s(t.currencyIcon)+")")]),t._v(" "),e("span",{staticClass:"w-120x"},[t._v(t._s(t.$t("fSale.qty")))]),t._v(" "),e("span",{staticClass:"w-120x"})])])]),t._v(" "),t._l(t.combinations,(function(r,n){return e("div",{key:n,staticClass:"tr dply-felx gap-10"},[r.values.length?e("h5",{staticClass:"title"},[t._v(t._s(t.renderLabel(r.values)))]):e("h5",{staticClass:"title"},[t._v(t._s(t.$t("list.aq")))]),t._v(" "),e("div",{staticClass:"right dply-felx gap-10 f-wrap"},[e("div",{staticClass:"inputs dply-felx gap-10 f-wrap"},[e("div",{staticClass:"w-120x"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.sku,expression:"item.sku"}],attrs:{type:"text",placeholder:t.$t("title.sku")},domProps:{value:r.sku},on:{input:function(e){e.target.composing||t.$set(r,"sku",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"w-120x"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.price,expression:"item.price"}],attrs:{disabled:!r.values.length,type:"number",step:"any",placeholder:t.$t("brand.price")},domProps:{value:r.price},on:{input:function(e){e.target.composing||t.$set(r,"price",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"w-120x"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.quantity,expression:"item.quantity"}],attrs:{type:"number",step:"any",placeholder:t.$t("fSale.qty")},domProps:{value:r.quantity},on:{input:function(e){e.target.composing||t.$set(r,"quantity",e.target.value)}}})])])])])}))],2)]),t._v(" "),t.$can("product","edit")||t.$can("product","create")?e("div",{staticClass:"dply-felx j-right"},[e("ajax-button",{staticClass:"primary-btn mr-10",attrs:{name:"save-edit",text:t.$t("list.svn"),"fetching-data":t.formSubmitting&&!t.redirect}}),t._v(" "),e("ajax-button",{staticClass:"primary-btn",attrs:{name:"save",text:t.$t("setting.sv"),"fetching-data":t.formSubmitting&&t.redirect}})],1):t._e()])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ErrorFormatter:r(466).default,AjaxButton:r(156).default})}}]);