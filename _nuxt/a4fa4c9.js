(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{466:function(t,e,n){"use strict";n(19),n(17),n(22),n(26),n(27);var r=n(9),o=(n(6),n(18),n(203),n(23),n(54),n(7));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)("common",["customScripts"])),mounted:function(){var t=this;this.customScripts.forEach((function(i){var e=new RegExp(null==i?void 0:i.route_pattern),n=t.$route.path;if(e.test(n)){if(null!=i&&i.header_script){var script=document.createElement("script");script.textContent=null==i?void 0:i.header_script_code,document.head.appendChild(script)}if(null!=i&&i.body_script){var r=document.createElement("script");r.textContent=null==i?void 0:i.body_script_code,document.body.appendChild(r)}}}))}}},565:function(t,e,n){"use strict";n.r(e);var r={middleware:["common-middleware","auth"],data:function(){return{}},components:{},mixins:[n(466).a],computed:{},methods:{},mounted:function(){}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("client-only",[e("div",{staticClass:"container"},[e("section",{staticClass:"home-section"},[e("h3",[t._v(t._s(t.$t("razorpayCallback.wait"))+"...")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);