(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{490:function(t,e,r){"use strict";r.r(e);r(19),r(17),r(22),r(26),r(18),r(27);var n=r(9),c=(r(6),r(54),r(24)),o=r(61),l=r(7),d=r(204),f=r(206),m=r(156);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"FlashProductTile",data:function(){return{}},watch:{},props:{product:{type:Object,default:function(){return null}}},components:{PriceFormat:m.default,LazyImage:o.default},mixins:[c.a,d.a,f.a],computed:y({reducedPrice:function(){var t;return null===(t=this.product)||void 0===t?void 0:t.price},quantity:function(){var t;return(null===(t=this.product)||void 0===t?void 0:t.quantity)||0},reducedPercent:function(){return 100-parseInt((this.reducedPrice/this.prevPrice*100).toString())},sold:function(){var t;return(null===(t=this.product)||void 0===t?void 0:t.sold)||0},remainingQtyStyle:function(){return{width:"".concat(this.sold/this.quantity*100,"%")}}},Object(l.c)("common",["currencyIcon","setting"])),methods:y({},Object(l.b)("common",["postRequest","setToastMessage","setToastError"])),created:function(){},mounted:function(){}},O=r(11),component=Object(O.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-tile"},[e("nuxt-link",{staticClass:"block page-link",attrs:{to:t.productLink(t.product),title:t.product.title}},[e("div",{staticClass:"img-wrapper"},[t.product.badge?e("span",{staticClass:"badge"},[t._v("\n        "+t._s(t.product.badge)+"\n      ")]):t._e(),t._v(" "),e("button",{staticClass:"compare-btn",attrs:{"aria-label":"submit",title:t.$t("product.compare")},on:{click:function(e){return e.preventDefault(),t.addToCompare.apply(null,arguments)}}},[e("i",{staticClass:"icon reload-icon"})]),t._v(" "),e("lazy-image",{attrs:{"data-src":t.imageURL(t.product),title:t.product.title,alt:t.product.title}})],1),t._v(" "),e("div",{staticClass:"flex wrap sided align-end item-title mt-0"},[e("h4",{staticClass:"price-wrapper"},[e("span",{staticClass:"price"},[e("price-format",{attrs:{price:t.reducedPrice}})],1),t._v(" "),e("span",{staticClass:"strike-through"},[e("price-format",{attrs:{price:t.prevPrice}})],1)]),t._v(" "),e("h5",{staticClass:"color-primary"},[e("span",{staticClass:"discount"},[t._v("\n          "+t._s(t.$t("home.off",{percent:t.reducedPercent}))+"\n        ")])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LazyImage:r(61).default,PriceFormat:r(156).default})}}]);