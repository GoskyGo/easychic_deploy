(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{466:function(e,t,r){"use strict";r(19),r(17),r(22),r(26),r(27);var n=r(9),o=(r(6),r(18),r(203),r(23),r(54),r(7));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a={computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)("common",["customScripts"])),mounted:function(){var e=this;this.customScripts.forEach((function(i){var t=new RegExp(null==i?void 0:i.route_pattern),r=e.$route.path;if(t.test(r)){if(null!=i&&i.header_script){var script=document.createElement("script");script.textContent=null==i?void 0:i.header_script_code,document.head.appendChild(script)}if(null!=i&&i.body_script){var n=document.createElement("script");n.textContent=null==i?void 0:i.body_script_code,document.body.appendChild(n)}}}))}}},569:function(e,t,r){"use strict";r.r(t);var n=r(0),o=(r(12),r(33),{middleware:["common-middleware","non-logged-in"],layout:"social-login",data:function(){return{}},components:{},mixins:[r(466).a],computed:{error:function(){return this.$route.query.error||null},id:function(){return this.$route.query.id||null},name:function(){return this.$route.query.name||null},email:function(){return this.$route.query.email||null},token:function(){return this.$route.query.token||null}},methods:{},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.error){t.next=4;break}return t.abrupt("return",e.$nuxt.error({statusCode:400,message:e.error}));case 4:return e.$auth.setUser({email:e.email}),t.next=7,e.$auth.setUserToken("Bearer "+e.token,null);case 7:case"end":return t.stop()}}),t)})))()}}),c=r(11),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("client-only",[t("div",{staticClass:"container"},[t("section",{staticClass:"home-section"},[t("h3",[e._v(e._s(e.$t("razorpayCallback.wait"))+"...")])])])])}),[],!1,null,null,null);t.default=component.exports}}]);