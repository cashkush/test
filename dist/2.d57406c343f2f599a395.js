webpackJsonp([2],{659:function(e,t,a){function n(e){a(703)}var i=a(83)(a(697),a(719),n,"data-v-62d3d2ca",null);e.exports=i.exports},662:function(e,t,a){function n(e){a(666)}var i=a(83)(a(665),a(667),n,"data-v-b5e8ab26",null);e.exports=i.exports},663:function(e,t,a){t=e.exports=a(654)(!1),t.push([e.i,"@keyframes spinAround-data-v-b5e8ab26{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.vid-thumb[data-v-b5e8ab26]{margin:2px}.thumb[data-v-b5e8ab26]{width:100%;min-width:180px;max-width:360px;border-radius:8px;margin:15px 5px;box-shadow:0 0 6px 2px #320763;overflow:hidden;background:#000;position:relative;height:0;padding-bottom:58%}.thumb h2[data-v-b5e8ab26]{width:100%}.thumb .topp[data-v-b5e8ab26]{background:#333;color:#ccc;-ms-flex-pack:justify;justify-content:space-between;z-index:2}.thumb .topp p[data-v-b5e8ab26]{padding:0 5px;white-space:nowrap}.thumb .topp .p[data-v-b5e8ab26]{background:#320763;padding:5px 35px 5px 25px;border-top-right-radius:15px;border-bottom-right-radius:15px}.thumb .dur[data-v-b5e8ab26]{position:absolute;padding:1px 3px;font-size:13px;top:3%;right:2%;border-radius:4px;background-color:#000000aa;z-index:9}.thumb .bg[data-v-b5e8ab26]{width:100%;z-index:1;min-height:150px;position:absolute;top:50%;left:0;transform:translateY(-50%)}.thumb .bg.d[data-v-b5e8ab26]{margin:-9px 0}.thumb .title[data-v-b5e8ab26]{background:#320763;padding:4px;color:#fff;font-size:13px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;bottom:0;position:absolute;left:0;z-index:3;width:100%}.thumb video[data-v-b5e8ab26]{width:100%;z-index:9}",""])},664:function(e,t,a){"use strict";e.exports={friendlyUrl:function(e){if(!e||!e.toString())return console.log("friendly url missing"),"";var t="àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;",a=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(a,function(e){return"aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------".charAt(t.indexOf(e))}).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"").split("-").join("_")},aClick:function(e){var t=e.target;if(t&&t.matches("a:not([href*='://'])")&&t.href){var a=e.altKey,n=e.ctrlKey,i=e.metaKey,s=e.shiftKey,r=e.button,o=e.defaultPrevented;if(i||a||n||s)return;if(o)return;if(void 0!==r&&0!==r)return;if(t&&t.getAttribute){if(/\b_blank\b/i.test(t.getAttribute("target")))return}var l=new URL(t.href),d=l.pathname;window.location.pathname!==d&&e.preventDefault&&(e.preventDefault(),this.$router.push(d))}}}},665:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(664);a(84);t.default={name:"empty",props:{v:{},isHover:{default:!1}},computed:{vUrl:function(){return(0,n.friendlyUrl)(this.v.title)||"_"}},methods:{enter:function(e){this.isHover||(this.$emit("play",this.v.id),this.$root.$emit("hover",this.v.id))},leave:function(){this.$emit("play",null)}}}},666:function(e,t,a){var n=a(663);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(655)("2afb7a98",n,!0,{})},667:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vid-thumb f fw"},[e.v&&e.v.id?a("div",{staticClass:"thumb",on:{mouseenter:function(t){return e.enter()},mouseleave:function(t){return e.leave()},"&touchstart":function(t){return e.enter(t)}}},[a("router-link",{staticClass:"f fc",attrs:{to:"/v/"+e.v.id+"/"+e.vUrl}},[a("div",{staticClass:"bg"},[a("img",{class:e.v.p,attrs:{src:e.v.img},on:{error:function(t){e.v.img=e.v.img2}}})]),a("div",{staticClass:"dur"},[e._v(e._s(e.v.duration||e.v.dur))]),e.isHover?a("video",{staticClass:"bg",attrs:{width:"100%",autoplay:"",src:e.v.preview,playsinline:""},on:{ended:function(t){return e.leave()}}}):e._e()]),a("h2",{staticClass:"f title"},[e._v(e._s(e.v.title))])],1):e._e()])},staticRenderFns:[]}},668:function(e,t,a){t=e.exports=a(654)(!1),t.push([e.i,"a[data-v-9e4c94c2]{cursor:pointer}",""])},669:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var a=0;a<this.pageCount;a++){var n={index:a,content:a+1,selected:a===this.selected-1};t[a]=n}else{for(var i=Math.floor(this.pageRange/2),s=function(a){var n={index:a,content:a+1,selected:a===e.selected-1};t[a]=n},r=function(e){var a={disabled:!0,breakView:!0};t[e]=a},o=0;o<this.marginPages;o++)s(o);var l=0;this.selected-i>0&&(l=this.selected-1-i);var d=l+this.pageRange-1;d>=this.pageCount&&(d=this.pageCount-1,l=d-this.pageRange+1);for(var c=l;c<=d&&c<=this.pageCount-1;c++)s(c);l>this.marginPages&&r(l-1),d+1<this.pageCount-this.marginPages&&r(d+1);for(var u=this.pageCount-1;u>=this.pageCount-this.marginPages;u--)s(u)}return t}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.innerValue=e,this.$emit("input",e),this.clickHandler(e))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return 1===this.selected},lastPageSelected:function(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}}},670:function(e,t,a){var n=a(668);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(655)("7fdedac4",n,!0,{})},671:function(e,t,a){function n(e){a(670)}var i=a(83)(a(669),a(672),n,"data-v-9e4c94c2",null);e.exports=i.exports},672:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.noLiSurround?a("div",{class:e.containerClass},[e.firstLastButton?a("a",{class:[e.pageLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){return e.selectFirstPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectFirstPage()}}}):e._e(),e.firstPageSelected()&&e.hidePrevNext?e._e():a("a",{class:[e.prevLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){return e.prevPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.prevPage()}}}),e._l(e.pages,function(t){return[t.breakView?a("a",{class:[e.pageLinkClass,e.breakViewLinkClass,t.disabled?e.disabledClass:""],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?a("a",{class:[e.pageLinkClass,t.selected?e.activeClass:"",e.disabledClass],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):a("a",{class:[e.pageLinkClass,t.selected?e.activeClass:""],attrs:{tabindex:"0"},on:{click:function(a){return e.handlePageSelected(t.index+1)},keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.handlePageSelected(t.index+1)}}},[e._v(e._s(t.content))])]}),e.lastPageSelected()&&e.hidePrevNext?e._e():a("a",{class:[e.nextLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){return e.nextPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextPage()}}}),e.firstLastButton?a("a",{class:[e.pageLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){return e.selectLastPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectLastPage()}}}):e._e()],2):a("ul",{class:e.containerClass},[e.firstLastButton?a("li",{class:[e.pageClass,e.firstPageSelected()?e.disabledClass:""]},[a("a",{class:e.pageLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){return e.selectFirstPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectFirstPage()}}})]):e._e(),e.firstPageSelected()&&e.hidePrevNext?e._e():a("li",{class:[e.prevClass,e.firstPageSelected()?e.disabledClass:""]},[a("a",{class:e.prevLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){return e.prevPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.prevPage()}}})]),e._l(e.pages,function(t){return a("li",{class:[e.pageClass,t.selected?e.activeClass:"",t.disabled?e.disabledClass:"",t.breakView?e.breakViewClass:""]},[t.breakView?a("a",{class:[e.pageLinkClass,e.breakViewLinkClass],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?a("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):a("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(a){return e.handlePageSelected(t.index+1)},keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.handlePageSelected(t.index+1)}}},[e._v(e._s(t.content))])])}),e.lastPageSelected()&&e.hidePrevNext?e._e():a("li",{class:[e.nextClass,e.lastPageSelected()?e.disabledClass:""]},[a("a",{class:e.nextLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){return e.nextPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextPage()}}})]),e.firstLastButton?a("li",{class:[e.pageClass,e.lastPageSelected()?e.disabledClass:""]},[a("a",{class:e.pageLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){return e.selectLastPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectLastPage()}}})]):e._e()],2)},staticRenderFns:[]}},683:function(e,t,a){t=e.exports=a(654)(!1),t.push([e.i,"@keyframes spinAround-data-v-62d3d2ca{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@media (max-width:529px){#home[data-v-62d3d2ca]{padding:100px 0}}.thumb-size[data-v-62d3d2ca]{max-width:500px;width:100%;margin-top:15px}.thumb-size i[data-v-62d3d2ca]{font-size:22px;color:#999;width:100%;border-right:1px solid #999;text-align:center;cursor:pointer}.thumb-size i[data-v-62d3d2ca]:hover{background-color:#555}.thumb-size i[data-v-62d3d2ca]:last-child{border:none}.thumb-size i.selected[data-v-62d3d2ca]{background-color:#333}.thumb-size .random[data-v-62d3d2ca]{position:relative}.thumb-size .random h6[data-v-62d3d2ca]{position:absolute;bottom:-8px;font-size:11px}.err[data-v-62d3d2ca]{background-color:#ff3860;border-radius:10px;padding:12px;color:#fff}.vlist[data-v-62d3d2ca]{-ms-flex-wrap:wrap;flex-wrap:wrap;margin:10px 0 25px;-ms-flex-pack:center;justify-content:center;margin-top:-5px;padding-bottom:30px}",""])},697:function(t,a,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(i,s){try{var r=t[i](s),o=r.value}catch(e){return void a(e)}if(!r.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}return n("next")})}}Object.defineProperty(a,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=n(158),l=n(671),d=i(l),c=n(247),u=i(c),p=n(662),f=i(p);a.default={name:"home",data:function(){return{isHover:null,search:"",thumbSize:3,err:"",page:1}},methods:{play:function(e){if(this.isHover==e)return this.isHover="";this.isHover=e},pageChange:function(e){this.page=e;var t="";this.path[0]&&(t+="/"+this.path[0]),this.$router.push(t+"/?page="+e)},goRandom:function(){this.$router.push("/random/"+~~(1e3*Math.random()))},rangeChange:function(e,t){console.log(e,t)}},watch:{"$route.fullPath":{handler:function(t,a){var n=this;this.$ssrContext||(this.$store.state.videos={},this.$forceUpdate(),this.$socket.emit("page",{url:String(window.location.href)},function(t,a){t&&(n.err=t,"undefined"!=typeof gtag&&gtag("event","exception",{description:e.message,fatal:!0})),n.$store.state.videos=a.videos,a.page&&(n.page=a.page),n.$forceUpdate()}))},immediate:!0}},sockets:{},mounted:function(){var e=this;return s(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.screen.w<459&&(e.thumbSize=1);case 1:case"end":return t.stop()}},t,e)}))()},computed:r({thumbWidth:function(){switch(!0){case 1==this.thumbSize:return"100%";case 3==this.thumbSize:return"calc(33% - 8px)";default:return"calc(50% - 20px)"}}},(0,o.mapState)(["videos","path","screen"]),(0,o.mapGetters)(["isConnected"])),components:{loading:u.default,Paginate:d.default,vidThumb:f.default}}},703:function(e,t,a){var n=a(683);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(655)("829ba364",n,!0,{})},719:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"f fc",attrs:{id:"home"}},[e.err?a("div",{staticClass:"err f"},[e._v(e._s(e.err)+" "),a("i",{staticClass:"mdi mdi-close",on:{click:function(t){e.err=""}}})]):e._e(),e.page>1?a("paginate",{staticStyle:{margin:"30px auto"},attrs:{value:e.page,"page-count":150,"page-range":e.screen.w<429?4:6,"margin-pages":2,"range-change":e.rangeChange,"click-handler":e.pageChange,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item"}}):e._e(),Object.keys(this.$store.state.videos||{}).length?a("div",{staticClass:"home f fc"},[e.screen.w<1110?a("div",{staticClass:"f  thumb-size ja"},[e.$store.state.screen.w<755?a("i",{staticClass:"mdi mdi-tab",class:{selected:1==e.thumbSize},on:{click:function(t){e.thumbSize=1}}}):e._e(),a("i",{staticClass:"mdi mdi-table",class:{selected:2==e.thumbSize},on:{click:function(t){e.thumbSize=2}}}),e.$store.state.screen.w>500?a("i",{staticClass:"mdi mdi-grid",class:{selected:3==e.thumbSize},on:{click:function(t){e.thumbSize=3}}}):e._e(),a("i",{staticClass:"f fc random",on:{click:function(t){return e.goRandom()}}},[a("i",{staticClass:"mdi mdi-shuffle",staticStyle:{color:"#fff"}}),a("h6",[e._v("RANDOM")])])]):e._e(),a("div",{staticClass:"f vlist"},e._l(e.$store.state.videos,function(t){return a("vid-thumb",{key:t._id,attrs:{v:t,thumbWidth:e.thumbWidth,isHover:e.isHover==t._id},on:{play:function(t){return e.play(t)}}})}),1)]):a("div",{staticClass:"f fw",staticStyle:{padding:"100px 0"}},[a("loading",{attrs:{width:"100",height:"100"}})],1),a("paginate",{attrs:{value:e.page,"page-count":150,"page-range":e.screen.w<429?4:6,"margin-pages":2,"range-change":e.rangeChange,"click-handler":e.pageChange,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item"}})],1)},staticRenderFns:[]}}});