(window.webpackJsonp=window.webpackJsonp||[]).push([[111,15,44],{466:function(t,e,r){"use strict";r.r(e);r(20),r(21),r(25),r(26),r(17),r(7),r(14);var n=r(4),o=r(10);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var c={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(o.c)("ui",["errors"]))},d=c,f=r(15),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return t.errorData?e("ul",{staticClass:"error-list mb-15"},[e("li",{staticClass:"mb-10"},[t._v(t._s(t.$t("error.feo")))]),t._v(" "),t._l(t.errorData,(function(r,n){return e("li",{key:n},[t._v("\n    "+t._s(r)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},481:function(t,e,r){"use strict";r.r(e);var n=r(1),o=(r(22),r(466)),l={name:"SettingLayout",middleware:["common-middleware","auth"],data:function(){return{tabs:[{title:this.$t("setting.cur"),tabId:"currency"},{title:this.$t("list.addr"),tabId:"address"},{title:this.$t("list.lang"),tabId:"languages"},{title:this.$t("list.sl"),tabId:"social-login"},{title:this.$t("list.smtp"),tabId:"smtp"},{title:this.$t("title.ana"),tabId:"analytics"},{title:this.$t("list.payment"),tabId:"payment"},{title:this.$t("list.ms"),tabId:"media-storage"},{title:this.$t("dataPage.mis"),tabId:"miscellaneous"},{title:this.$t("setting.cClear"),tabId:"clear-cache"}]}},props:{activeRoute:{type:String}},mixins:[],components:{ErrorFormatter:o.default},computed:{},methods:{},created:function(){},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},c=r(15),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab-sidebar pos-rel"},[e("h5",{staticClass:"title bold"},[t._v("\n    "+t._s(t.$t("list.set"))+"\n  ")]),t._v(" "),e("div",{staticClass:"dply-felx"},[e("ul",{staticClass:"left-area"},t._l(t.tabs,(function(r,n){return e("li",{key:n,class:{active:r.tabId===t.activeRoute}},[e("nuxt-link",{attrs:{to:"/setting/".concat(r.tabId)}},[t._v("\n          "+t._s(r.title)+"\n        ")])],1)})),0),t._v(" "),e("div",{staticClass:"right-area"},[e("error-formatter"),t._v(" "),t._t("rightArea")],2)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ErrorFormatter:r(466).default})},896:function(t,e,r){"use strict";r.r(e);var n=r(1),o=(r(22),r(481)),l={middleware:["common-middleware","auth"],data:function(){return{}},props:{},mixins:[],components:{PaymentSetting:r(848).default,SettingLayout:o.default},computed:{},methods:{},created:function(){},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},c=r(15),component=Object(c.a)(l,(function(){var t=this._self._c;return t("setting-layout",{staticClass:"mb-5",attrs:{"active-route":"payment"},scopedSlots:this._u([{key:"rightArea",fn:function(){return[t("payment-setting")]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports}}]);