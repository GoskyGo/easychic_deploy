(window.webpackJsonp=window.webpackJsonp||[]).push([[68,63],{507:function(t,e,n){"use strict";n.r(e);var r=n(0),o=(n(12),n(24)),c=n(61),l={name:"SiteFeature",data:function(){return{}},watch:{},props:{siteFeature:{type:Object,default:function(){return null}}},components:{LazyImage:c.default},computed:{image:function(){var t;return null===(t=this.siteFeature)||void 0===t?void 0:t.image},detail:function(){var t;return null===(t=this.siteFeature)||void 0===t?void 0:t.detail}},mixins:[o.a],methods:{},created:function(){},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},d=n(11),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"static-area"},[e("div",{staticClass:"img-wrap"},[e("lazy-image",{attrs:{"data-src":t.getImageURL(t.image),title:t.$t("date.fi"),alt:t.$t("date.fi")}})],1),t._v(" "),e("div",{staticClass:"detail",domProps:{innerHTML:t._s(t.detail)}})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LazyImage:n(61).default})},527:function(t,e,n){"use strict";n.r(e);var r=n(0),o=(n(12),n(507)),c={name:"StaticSection",data:function(){return{}},watch:{},props:{siteFeatures:{type:Array,default:[]}},components:{SiteFeature:o.default},computed:{},mixins:[],methods:{},created:function(){},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},l=n(11),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex wrap static-container"},t._l(t.siteFeatures,(function(t,i){return e("site-feature",{key:i,attrs:{"site-feature":t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SiteFeature:n(507).default})}}]);