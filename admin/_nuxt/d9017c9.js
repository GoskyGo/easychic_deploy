(window.webpackJsonp=window.webpackJsonp||[]).push([[0,34,50,51,57],{474:function(t,e,r){"use strict";r.r(e);r(32),r(20),r(21),r(25),r(26),r(17),r(7),r(14);var n=r(1),o=r(4),l=(r(22),r(37),r(676)),c=r(86),d=r(10),h=r(760),f=r(707);r(197);function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v={data:function(){return{listParams:{type:"",orderby:"",page:0,q:null}}},methods:{settingRouteParam:function(){this.listParams=m(m({},this.listParams),{type:this.$route.query.orderbyType||"desc",orderby:this.$route.query.orderby||"created_at",page:Number(this.$route.query.page)||1,q:this.$route.query.q||null})}}},O=r(49);function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={name:"ListPage",props:{addButton:{type:Boolean,default:!0},name:{type:String,default:""},gate:{type:String,default:null},listApi:{type:String,default:""},deleteApi:{type:String,default:""},routeName:{type:String,default:""},emptyStoreVariable:{type:String,default:null},orderOptions:{type:Object,default:function(){return{created_at:{title:this.$t("category.date")},title:{title:this.$t("index.title")},status:{title:this.$t("category.status")}}}}},data:function(){return{deleting:!1,loading:!0,result:null}},components:{Spinner:O.default,Pagination:h.default,TableTop:f.default,Shimmer:l.default},mixins:[c.a,v],computed:w({resultText:function(){var t,e,r,n;return this.result?(null===(t=this.result)||void 0===t?void 0:t.total)>0?this.$t("list.show",{from:null===(e=this.result)||void 0===e?void 0:e.from,to:null===(r=this.result)||void 0===r?void 0:r.to,total:null===(n=this.result)||void 0===n?void 0:n.total}):this.$t("list.noData",{data:this.name}):this.$t("list.loadn")+"..."},list:function(){var t;return null===(t=this.result)||void 0===t?void 0:t.data},totalPage:function(){var t;return null===(t=this.result)||void 0===t?void 0:t.last_page}},Object(d.c)("language",["currentLanguage"])),methods:w({deleteBulk:function(){this.$emit("delete-bulk")},fetchingData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.settingRouteParam(),t.loading=!0,e.next=5,t.getRequest({params:w(w(w({},t.$route.query),t.listParams),{time_zone:t.timeZone}),api:t.listApi});case 5:t.result=e.sent,t.$emit("list",t.list),t.loading=!1,e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",t.$nuxt.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},editItem:function(t){return this.$router.push("/".concat(this.routeName,"/").concat(t))},deleteItem:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!confirm(e.$t("admin.dltMsg"))){r.next=15;break}return r.prev=1,e.deleting=!0,r.next=5,e.deleteData({params:t,api:e.deleteApi});case 5:return e.emptyAllList(e.emptyStoreVariable),e.$emit("deleted"),e.deleting=!1,r.next=10,e.fetchingData();case 10:r.next=15;break;case 12:return r.prev=12,r.t0=r.catch(1),r.abrupt("return",e.$nuxt.error(r.t0));case 15:case"end":return r.stop()}}),r,null,[[1,12]])})))()}},Object(d.b)("common",["deleteData","getRequest","emptyAllList"])),mounted:function(){this.gate&&!this.$can(this.gate,"view")||this.fetchingData()}},j=r(15),component=Object(j.a)(_,(function(){var t=this,e=t._self._c;return e("div",{class:{loading:t.loading}},[t.deleting?e("div",{staticClass:"spinner-wrapper"},[e("spinner",{staticClass:"mr-15",attrs:{radius:60,color:"primary"}})],1):t._e(),t._v(" "),t._t("table-top",(function(){return[e("table-top",{attrs:{title:t.name,gate:t.gate,"add-button":t.addButton,"order-by-options":t.orderOptions},on:{"delete-bulk":t.deleteBulk}},[t._t("add-button")],2)]}),{orderOptions:t.orderOptions}),t._v(" "),!t.gate||t.$can(t.gate,"view")?e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.loading?e("shimmer"):e("div",[e("h5",{staticClass:"mt-20 mt-sm-15"},[t._v(t._s(t.resultText))]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"mn-w-600x"},[t._t("table",null,{list:t.list})],2)])]),t._v(" "),e("pagination",{attrs:{"total-page":t.totalPage}})],1)],1):t._e()],2)}),[],!1,null,"00e1e1f8",null);e.default=component.exports;installComponents(component,{Spinner:r(49).default,Shimmer:r(676).default})},506:function(t,e,r){var content=r(681);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("03f92262",content,!0,{sourceMap:!1})},644:function(t,e,r){"use strict";r.r(e);var n=r(645),o=r(157),l={name:"TableTop",data:function(){return{orderTypeObj:{asc:{title:this.$t("dataPage.asc")},desc:{title:this.$t("dataPage.desc")}}}},props:{orderByOptions:{type:Object,default:function(){return null}}},mixins:[n.a],components:{Dropdown:o.default},computed:{},methods:{},beforeCreate:function(){},destroyed:function(){},created:function(){}},c=r(15),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("ul",{staticClass:"table-heading"},[e("li",{staticClass:"lite-bold mr-0 hide-xxs"},[t._v(t._s(t.$t("list.ob")))]),t._v(" "),e("li",{staticClass:"dply-felx gap-0"},[e("div",[e("dropdown",{attrs:{selectedKey:t.sortBy,options:t.orderByOptions},on:{clicked:function(e){return t.dropdownSelected(!1,e)}}})],1),t._v(" "),e("dropdown",{attrs:{selectedKey:t.sortByType,options:t.orderTypeObj},on:{clicked:function(e){return t.dropdownSelected(!0,e)}}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Dropdown:r(157).default})},645:function(t,e,r){"use strict";var n=r(4);r(197),r(20),r(21),r(25),r(26),r(17),r(7),r(28),r(64),r(158),r(14),r(101);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a={data:function(){return{sortByType:this.$route.query.orderbyType||"desc",sortBy:this.$route.query.orderby||"created_at",page:Number(this.$route.query.page)||1,search:this.$route.query.q||null}},methods:{resettingPage:function(){1!==this.page&&(this.clearQuery(),this.settingRoute()),this.$emit("fetching-data")},makeSearch:function(){this.$route.query.q!==this.search&&(this.page=1,this.getDataWithRoute())},clearQuery:function(){this.sortByType="desc",this.sortBy="created_at",this.page=1},isDefaultPage:function(){return"desc"===this.sortByType&&"created_at"===this.sortBy&&1===this.page},settingRoute:function(){var t;if(this.isDefaultPage()&&!this.search&&this.resetRoute)null===(t=this.$router.replace({query:{}}))||void 0===t||t.catch((function(){}));else if(this.isDefaultPage()&&this.resetRoute){var e;null===(e=this.$router.replace({query:{q:this.search}}))||void 0===e||e.catch((function(){}))}else{var r;null===(r=this.$router.push({query:l(l({},this.$route.query),{},{orderby:this.sortBy,orderbyType:this.sortByType,page:this.page,q:this.search})}))||void 0===r||r.catch((function(){}))}},dropdownSelected:function(t,data){this.page=1,t?this.sortByType=data.key:this.sortBy=data.key,this.getDataWithRoute()},getDataWithRoute:function(){var t=this;this.settingRoute(),setTimeout((function(){t.$emit("fetching-data")}),10)},navigate:function(param){param>0&&this.page>=this.pagination.lastPage||param<0&&this.page<=1||(this.page+=param,this.getDataWithRoute())},paginate:function(t){this.page!==t&&(this.page=t,this.getDataWithRoute())}}}},676:function(t,e,r){"use strict";r.r(e);var n={name:"TileShimmer",data:function(){return{}},watch:{},props:{},components:{},computed:{},mixins:[],methods:{},created:function(){},mounted:function(){}},o=(r(680),r(15)),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"shimmer-wrapper mt-30"},[e("div",{staticClass:"shimmer mtb-10"}),t._v(" "),e("div",{staticClass:"shimmer mtb-10"}),t._v(" "),e("div",{staticClass:"shimmer mtb-10"}),t._v(" "),e("div",{staticClass:"shimmer mtb-10"}),t._v(" "),e("div",{staticClass:"shimmer"})])}],!1,null,null,null);e.default=component.exports},680:function(t,e,r){"use strict";r(506)},681:function(t,e,r){var n=r(62)((function(i){return i[1]}));n.push([t.i,'.shimmer-wrapper .shimmer{background-color:#d2d8e0;border-radius:4px;height:65px;overflow:hidden;position:relative}.shimmer-wrapper .shimmer:after{animation:shimmer 1.4s infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.15) 20%,hsla(0,0%,100%,.3) 60%,hsla(0,0%,100%,0));bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:translateX(-100%)}@keyframes shimmer{to{transform:translateX(100%)}}',""]),n.locals={},t.exports=n},682:function(t,e,r){var content=r(695);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("55d9957c",content,!0,{sourceMap:!1})},694:function(t,e,r){"use strict";r(682)},695:function(t,e,r){var n=r(62)((function(i){return i[1]}));n.push([t.i,".pagination{background:#fff;border:1px solid #eee;border-radius:5px;display:flex;margin-top:15px}.pagination li{align-items:center;border-right:1px solid #eee;cursor:pointer;display:flex;flex-grow:1;height:40px;justify-content:center;min-width:45px;transition:all .1s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.pagination li:hover{background:#e8f0fe}.pagination li:last-child{border-right:0}.pagination li .icon{height:18px;min-width:18px;opacity:.6;width:18px}.pagination .disabled{cursor:not-allowed;opacity:.8}.pagination .disabled:hover{background:#fff}.pagination .page.disabled{background:#4285f4;color:#fff;font-weight:700;opacity:1}",""]),n.locals={},t.exports=n},707:function(t,e,r){"use strict";r.r(e);r(28),r(158),r(64);var n=r(645),o=r(157),l=r(644),c=r(102),d={name:"TableTop",data:function(){return{}},props:{addButton:{type:Boolean,default:!0},enableSearch:{type:Boolean,default:!0},resetRoute:{type:Boolean,default:!0},title:{type:String,default:null},gate:{type:String,default:null},orderByOptions:{type:Object,default:function(){return null}}},mixins:[n.a],components:{InlinePopOver:c.default,Dropdown:o.default,TableSort:l.default},computed:{addRoute:function(){return"".concat(this.$route.path.replace(/\/$/,""),"/add")}},methods:{deleteBulk:function(){this.$refs.bulkDelete.closePop(),this.$emit("delete-bulk")}},beforeCreate:function(){},destroyed:function(){},created:function(){}},h=r(15),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"align-start dply-felx reverse block-md gap-10"},[t.enableSearch?e("div",{staticClass:"grow dply-felx block-xs"},[e("form",{staticClass:"search-input",on:{submit:function(e){return e.preventDefault(),t.makeSearch.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:t.$t("list.sh")},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),e("button",{staticClass:"primary-btn"},[t._v(t._s(t.$t("list.srch")))])]),t._v(" "),t._t("add-button",(function(){return[t.title&&t.addButton&&t.gate&&t.$can(t.gate,"create")?e("nuxt-link",{staticClass:"button primary-btn",attrs:{to:t.addRoute}},[e("span",{domProps:{innerHTML:t._s(t.$t("profile.add",{title:t.title}))}})]):t._e()]}))],2):t._e(),t._v(" "),e("div",{staticClass:"dply-felx gap-10 j-left f-wrap mt-md-15"},[e("table-sort",{staticClass:"mt-0",attrs:{"order-by-options":t.orderByOptions}}),t._v(" "),e("inline-pop-over",{ref:"bulkDelete",staticClass:"bulk-action",attrs:{arrow:!0},scopedSlots:t._u([{key:"button",fn:function(){return[t._v("\n        "+t._s(t.$t("title.act"))+"\n      ")]},proxy:!0},{key:"content",fn:function(){return[e("button",{staticClass:"outline-btn",on:{click:function(e){return e.preventDefault(),t.deleteBulk.apply(null,arguments)}}},[t._v("\n          "+t._s(t.$t("category.delete"))+"\n        ")])]},proxy:!0}])})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InlinePopOver:r(102).default})},760:function(t,e,r){"use strict";r.r(e);r(44),r(20),r(21),r(25),r(26),r(17),r(7),r(14);var n=r(4);r(197),r(28),r(158);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c={name:"Pagination",data:function(){return{sortByType:this.$route.query.orderByType||"desc",sortBy:this.$route.query.orderBy||"created_at",currentPage:Number(this.$route.query.page)||this.page,search:this.$route.query.q||null}},props:{changingRoute:{type:Boolean,default:!0},page:{type:Number,default:1},totalPage:{type:Number},pagePer:{type:Number,default:5}},watch:{},directives:{},components:{},mixins:[],computed:{getActivePages:function(){var t=this.getPage+(this.pagePer-1);t%this.pagePer!=0&&(t=parseInt(t/this.pagePer)*this.pagePer);var e=t-(this.pagePer-1);return t>=this.totalPage&&(t=this.totalPage),[e-1,t]},getPage:function(){return this.currentPage},allPages:function(){for(var t=[],i=1;i<=this.totalPage;i++)t.push(i);return t}},methods:{routeParam:function(){this.isDefaultPage()?this.resettingRoute():(this.clearQuery(),this.$emit("fetching-data")),this.scrollToTop()},resettingRoute:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.clearQuery(),this.$router.push({query:l(l({},t),{orderBy:this.orderBy,orderByType:this.orderByType,page:this.currentPage,q:this.search})}),this.$emit("fetching-data")},clearQuery:function(){this.orderByType="desc",this.orderBy="created_at",this.currentPage=1},isDefaultPage:function(){return"desc"===this.orderByType&&"created_at"===this.orderBy&&1===this.currentPage},settingRoute:function(){this.$router.push({query:l(l({},this.$route.query),{orderBy:this.orderBy,orderByType:this.orderByType,page:this.currentPage,q:this.search})})},dropdownSelected:function(t,data){this.currentPage=1,t?this.orderByType=data.key:this.orderBy=data.key,this.getDataWithRoute()},scrollToTop:function(){window.scrollTo(0,0)},getDataFromRoute:function(){this.sortByType=this.$route.query.orderByType||"desc",this.sortBy=this.$route.query.orderBy||"created_at",this.currentPage=Number(this.$route.query.page)||1,this.search=this.$route.query.q||null,this.$emit("fetching-data")},getDataWithRoute:function(){this.changingRoute&&(this.settingRoute(),this.scrollToTop()),this.$emit("fetching-data",{orderBy:this.orderBy,orderByType:this.orderByType,page:this.currentPage,q:this.q})},navigate:function(param){param>0&&this.currentPage>=this.totalPage||param<0&&this.currentPage<=1||(this.currentPage+=param,this.getDataWithRoute())},paginate:function(t){this.currentPage!==t&&(this.currentPage=t,this.getDataWithRoute())},loadData:function(){this.getDataFromRoute()}},destroyed:function(){window.removeEventListener("popstate",this.loadData)},mounted:function(){window.addEventListener("popstate",this.loadData)}},d=c,h=(r(694),r(15)),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dply-felx j-right"},[t.totalPage>1?e("ul",{staticClass:"pagination"},[e("li",{class:{disabled:1===t.currentPage},on:{click:function(e){return e.preventDefault(),t.navigate(-1)}}},[e("i",{staticClass:"icon arrow-left black"})]),t._v(" "),t._l(t.allPages.slice(t.getActivePages[0],t.getActivePages[1]),(function(r,n){return e("li",{key:n,staticClass:"page",class:{disabled:t.currentPage===r},on:{click:function(e){return e.preventDefault(),t.paginate(r)}}},[e("span",[t._v(t._s(r))])])})),t._v(" "),e("li",{class:{disabled:t.currentPage===t.totalPage},on:{click:function(e){return e.preventDefault(),t.navigate(1)}}},[e("i",{staticClass:"icon arrow-right black"},[t._v(" ")])])],2):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);