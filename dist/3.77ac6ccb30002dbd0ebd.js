webpackJsonp([3],{624:function(e,t,a){function i(e){a(668)}var n=a(108)(a(663),a(682),i,"data-v-61dcfac1",null);e.exports=n.exports},627:function(e,t,a){function i(e){a(634)}var n=a(108)(a(632),a(636),i,"data-v-48749c38",null);e.exports=n.exports},628:function(e,t,a){function i(e){a(635)}var n=a(108)(a(633),a(637),i,"data-v-b5e8ab26",null);e.exports=n.exports},629:function(e,t,a){t=e.exports=a(620)(!1),t.push([e.i,'.loading-container.mini[data-v-48749c38]{padding:0;background:transparent}.loading-container.mini h2[data-v-48749c38]{font-size:13px}.loading-container[data-v-48749c38]{background:#000;border-radius:20px;padding:80px 120px}h2[data-v-48749c38]{color:#fff;margin:15px auto;text-align:center}.sk-fading-circle[data-v-48749c38]{width:40px;height:40px;margin:0 auto;position:relative}.sk-fading-circle .sk-circle[data-v-48749c38]{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle[data-v-48749c38]:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:#fff;border-radius:100%;animation:sk-circleFadeDelay-data-v-48749c38 1.2s infinite ease-in-out both}.sk-fading-circle .sk-circle2[data-v-48749c38]{transform:rotate(30deg)}.sk-fading-circle .sk-circle3[data-v-48749c38]{transform:rotate(60deg)}.sk-fading-circle .sk-circle4[data-v-48749c38]{transform:rotate(90deg)}.sk-fading-circle .sk-circle5[data-v-48749c38]{transform:rotate(120deg)}.sk-fading-circle .sk-circle6[data-v-48749c38]{transform:rotate(150deg)}.sk-fading-circle .sk-circle7[data-v-48749c38]{transform:rotate(180deg)}.sk-fading-circle .sk-circle8[data-v-48749c38]{transform:rotate(210deg)}.sk-fading-circle .sk-circle9[data-v-48749c38]{transform:rotate(240deg)}.sk-fading-circle .sk-circle10[data-v-48749c38]{transform:rotate(270deg)}.sk-fading-circle .sk-circle11[data-v-48749c38]{transform:rotate(300deg)}.sk-fading-circle .sk-circle12[data-v-48749c38]{transform:rotate(330deg)}.sk-fading-circle .sk-circle2[data-v-48749c38]:before{animation-delay:-1.1s}.sk-fading-circle .sk-circle3[data-v-48749c38]:before{animation-delay:-1s}.sk-fading-circle .sk-circle4[data-v-48749c38]:before{animation-delay:-.9s}.sk-fading-circle .sk-circle5[data-v-48749c38]:before{animation-delay:-.8s}.sk-fading-circle .sk-circle6[data-v-48749c38]:before{animation-delay:-.7s}.sk-fading-circle .sk-circle7[data-v-48749c38]:before{animation-delay:-.6s}.sk-fading-circle .sk-circle8[data-v-48749c38]:before{animation-delay:-.5s}.sk-fading-circle .sk-circle9[data-v-48749c38]:before{animation-delay:-.4s}.sk-fading-circle .sk-circle10[data-v-48749c38]:before{animation-delay:-.3s}.sk-fading-circle .sk-circle11[data-v-48749c38]:before{animation-delay:-.2s}.sk-fading-circle .sk-circle12[data-v-48749c38]:before{animation-delay:-.1s}@keyframes sk-circleFadeDelay-data-v-48749c38{0%,39%,to{opacity:0}40%{opacity:1}}',""])},630:function(e,t,a){t=e.exports=a(620)(!1),t.push([e.i,"@keyframes spinAround-data-v-b5e8ab26{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.vid-thumb[data-v-b5e8ab26]{margin:2px}.thumb[data-v-b5e8ab26]{width:100%;min-width:180px;max-width:360px;border-radius:8px;margin:15px 5px;box-shadow:0 0 6px 2px #320763;overflow:hidden;background:#000}.thumb h2[data-v-b5e8ab26]{width:100%}.thumb .topp[data-v-b5e8ab26]{background:#333;color:#ccc;-ms-flex-pack:justify;justify-content:space-between;z-index:2}.thumb .topp p[data-v-b5e8ab26]{padding:0 5px;white-space:nowrap}.thumb .topp .p[data-v-b5e8ab26]{background:#320763;padding:5px 35px 5px 25px;border-top-right-radius:15px;border-bottom-right-radius:15px}.thumb .title[data-v-b5e8ab26]{background:#320763;padding:4px;color:#fff;font-size:13px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.thumb .imgContainer[data-v-b5e8ab26]{position:relative;width:100%}.thumb .imgContainer .dur[data-v-b5e8ab26]{position:absolute;padding:1px 3px;font-size:13px;top:3%;right:2%;border-radius:4px;background-color:#000000aa}.thumb .bg[data-v-b5e8ab26]{width:100%;z-index:1;min-height:150px}.thumb .bg.d[data-v-b5e8ab26]{margin:-9px 0}.thumb video[data-v-b5e8ab26]{width:100%;min-height:150px}",""])},631:function(e,t,a){"use strict";e.exports={friendlyUrl:function(e){if(!e||!e.toString())return console.log("friendly url missing"),"";var t="àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;",a=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(a,function(e){return"aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------".charAt(t.indexOf(e))}).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"").split("-").join("_")},aClick:function(e){var t=e.target;if(t&&t.matches("a:not([href*='://'])")&&t.href){var a=e.altKey,i=e.ctrlKey,n=e.metaKey,s=e.shiftKey,r=e.button,c=e.defaultPrevented;if(n||a||i||s)return;if(c)return;if(void 0!==r&&0!==r)return;if(t&&t.getAttribute){if(/\b_blank\b/i.test(t.getAttribute("target")))return}var l=new URL(t.href),o=l.pathname;window.location.pathname!==o&&e.preventDefault&&(e.preventDefault(),this.$router.push(o))}}}},632:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{loading:{type:Boolean,default:!0},loadingClass:{type:String,default:""},color:{type:String,default:"#fff"},width:{type:String,default:"40"},height:{type:String,default:"40"},bgStyle:{default:function(){}},h2Style:{default:function(){}},h2Text:{default:"Loading"}},data:function(){return{isLoading:this.loading}},computed:{styles:function(){return{width:this.width+"px",height:this.height+"px"}}},name:"CircleSpinner"}},633:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(631);a(109);t.default={name:"empty",data:function(){return{loaded:0}},props:{v:{},isHover:{default:!1}},computed:{vUrl:function(){return(0,i.friendlyUrl)(this.v.title)||"_"}},methods:{enter:function(){var e=this;this.isHover||(this.$emit("play",this.v._id),this.$root.$emit("hover",this.v._id)),setTimeout(function(){e.loaded||e.leave()},2500)},leave:function(){this.$emit("play",null)}}}},634:function(e,t,a){var i=a(629);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(621)("7dbbf89b",i,!0,{})},635:function(e,t,a){var i=a(630);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(621)("2afb7a98",i,!0,{})},636:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loading-container",class:e.loadingClass,style:e.bgStyle},[a("div",{staticClass:"sk-fading-circle",style:e.styles},[a("div",{staticClass:"sk-circle1 sk-circle"}),a("div",{staticClass:"sk-circle2 sk-circle"}),a("div",{staticClass:"sk-circle3 sk-circle"}),a("div",{staticClass:"sk-circle4 sk-circle"}),a("div",{staticClass:"sk-circle5 sk-circle"}),a("div",{staticClass:"sk-circle6 sk-circle"}),a("div",{staticClass:"sk-circle7 sk-circle"}),a("div",{staticClass:"sk-circle8 sk-circle"}),a("div",{staticClass:"sk-circle9 sk-circle"}),a("div",{staticClass:"sk-circle10 sk-circle"}),a("div",{staticClass:"sk-circle11 sk-circle"}),a("div",{staticClass:"sk-circle12 sk-circle"})]),a("h2",{style:e.h2Style},[e._v(e._s(e.h2Text))])])},staticRenderFns:[]}},637:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vid-thumb f fw"},[e.v?[a("div",{staticClass:"thumb f fc",on:{mouseenter:function(t){return e.enter()},mouseleave:function(t){return e.leave()},touchstart:function(t){return e.enter()}}},[a("router-link",{attrs:{to:"/v/"+e.v.id+"/"+e.vUrl}},[e.isHover?a("video",{attrs:{width:"100%",autoplay:"",src:e.v.preview,playsinline:""},on:{error:function(t){return e.leave()},loadstart:function(t){e.loaded=!0}}}):a("div",{staticClass:"imgContainer"},[a("img",{staticClass:"bg",class:e.v.p,attrs:{src:e.v.img},on:{error:function(t){e.v.img=e.v.img2}}}),a("div",{staticClass:"dur"},[e._v(e._s(e.v.duration||e.v.dur))])])]),a("h2",{staticClass:"f title"},[e._v(e._s(e.v.title))])],1)]:e._e()],2)},staticRenderFns:[]}},638:function(e,t,a){t=e.exports=a(620)(!1),t.push([e.i,"a[data-v-9e4c94c2]{cursor:pointer}",""])},639:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var a=0;a<this.pageCount;a++){var i={index:a,content:a+1,selected:a===this.selected-1};t[a]=i}else{for(var n=Math.floor(this.pageRange/2),s=function(a){var i={index:a,content:a+1,selected:a===e.selected-1};t[a]=i},r=function(e){var a={disabled:!0,breakView:!0};t[e]=a},c=0;c<this.marginPages;c++)s(c);var l=0;this.selected-n>0&&(l=this.selected-1-n);var o=l+this.pageRange-1;o>=this.pageCount&&(o=this.pageCount-1,l=o-this.pageRange+1);for(var d=l;d<=o&&d<=this.pageCount-1;d++)s(d);l>this.marginPages&&r(l-1),o+1<this.pageCount-this.marginPages&&r(o+1);for(var u=this.pageCount-1;u>=this.pageCount-this.marginPages;u--)s(u)}return t}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.innerValue=e,this.$emit("input",e),this.clickHandler(e))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return 1===this.selected},lastPageSelected:function(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}}},640:function(e,t,a){var i=a(638);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(621)("7fdedac4",i,!0,{})},641:function(e,t,a){function i(e){a(640)}var n=a(108)(a(639),a(642),i,"data-v-9e4c94c2",null);e.exports=n.exports},642:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.noLiSurround?a("div",{class:e.containerClass},[e.firstLastButton?a("a",{class:[e.pageLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){return e.selectFirstPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectFirstPage()}}}):e._e(),e.firstPageSelected()&&e.hidePrevNext?e._e():a("a",{class:[e.prevLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){return e.prevPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.prevPage()}}}),e._l(e.pages,function(t){return[t.breakView?a("a",{class:[e.pageLinkClass,e.breakViewLinkClass,t.disabled?e.disabledClass:""],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?a("a",{class:[e.pageLinkClass,t.selected?e.activeClass:"",e.disabledClass],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):a("a",{class:[e.pageLinkClass,t.selected?e.activeClass:""],attrs:{tabindex:"0"},on:{click:function(a){return e.handlePageSelected(t.index+1)},keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.handlePageSelected(t.index+1)}}},[e._v(e._s(t.content))])]}),e.lastPageSelected()&&e.hidePrevNext?e._e():a("a",{class:[e.nextLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){return e.nextPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextPage()}}}),e.firstLastButton?a("a",{class:[e.pageLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){return e.selectLastPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectLastPage()}}}):e._e()],2):a("ul",{class:e.containerClass},[e.firstLastButton?a("li",{class:[e.pageClass,e.firstPageSelected()?e.disabledClass:""]},[a("a",{class:e.pageLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){return e.selectFirstPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectFirstPage()}}})]):e._e(),e.firstPageSelected()&&e.hidePrevNext?e._e():a("li",{class:[e.prevClass,e.firstPageSelected()?e.disabledClass:""]},[a("a",{class:e.prevLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){return e.prevPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.prevPage()}}})]),e._l(e.pages,function(t){return a("li",{class:[e.pageClass,t.selected?e.activeClass:"",t.disabled?e.disabledClass:"",t.breakView?e.breakViewClass:""]},[t.breakView?a("a",{class:[e.pageLinkClass,e.breakViewLinkClass],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?a("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):a("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(a){return e.handlePageSelected(t.index+1)},keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.handlePageSelected(t.index+1)}}},[e._v(e._s(t.content))])])}),e.lastPageSelected()&&e.hidePrevNext?e._e():a("li",{class:[e.nextClass,e.lastPageSelected()?e.disabledClass:""]},[a("a",{class:e.nextLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){return e.nextPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextPage()}}})]),e.firstLastButton?a("li",{class:[e.pageClass,e.lastPageSelected()?e.disabledClass:""]},[a("a",{class:e.pageLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){return e.selectLastPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectLastPage()}}})]):e._e()],2)},staticRenderFns:[]}},650:function(e,t,a){t=e.exports=a(620)(!1),t.push([e.i,"@keyframes spinAround-data-v-61dcfac1{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.thumb-size[data-v-61dcfac1]{max-width:500px;width:100%;margin-top:15px}.thumb-size i[data-v-61dcfac1]{font-size:22px;color:#999;width:100%;border-right:1px solid #999;text-align:center;cursor:pointer}.thumb-size i[data-v-61dcfac1]:hover{background-color:#555}.thumb-size i[data-v-61dcfac1]:last-child{border:none}.thumb-size i.selected[data-v-61dcfac1]{background-color:#333}.vlist[data-v-61dcfac1]{-ms-flex-wrap:wrap;flex-wrap:wrap;margin:10px 0 25px;-ms-flex-pack:center;justify-content:center;margin-top:-5px}.searchbar[data-v-61dcfac1]{border:1px solid #888;border-radius:15px;padding:2px}.searchbar i[data-v-61dcfac1]{font-size:28px;color:#aaa;text-shadow:0 0 3px #88888888}.searchbar input[data-v-61dcfac1]{padding:10px;font-size:16px;color:#fff}",""])},663:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function i(n,s){try{var r=t[n](s),c=r.value}catch(e){return void a(e)}if(!r.done)return Promise.resolve(c).then(function(e){i("next",e)},function(e){i("throw",e)});e(c)}return i("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},r=a(156),c=a(641),l=i(c),o=a(627),d=i(o),u=a(628),f=i(u);t.default={name:"home",data:function(){return{isHover:"",videos:{},loading:!1,thumbSize:3,page:1}},methods:{getSaved:function(){var e=this;this.$socket.emit("getSaved",null,function(t,a){t||(e.videos=a)})}},sockets:{},mounted:function(){var e=this;return n(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.screen.w<459&&(e.thumbSize=1),e.getSaved();case 2:case"end":return t.stop()}},t,e)}))()},computed:s({thumbWidth:function(){switch(!0){case 1==this.thumbSize:return"80%";case 3==this.thumbSize:return"calc(33% - 8px)";default:return"calc(50% - 20px)"}}},(0,r.mapState)(["path","screen"]),(0,r.mapGetters)(["isConnected"])),components:{loading:d.default,Paginate:l.default,vidThumb:f.default}}},668:function(e,t,a){var i=a(650);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(621)("712058b4",i,!0,{})},682:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"f fc",attrs:{id:"home"}},[Object.keys(this.videos||{}).length?a("div",{staticClass:"home f fc"},[e.screen.w<1110?a("div",{staticClass:"f  thumb-size ja"},[e.$store.state.screen.w<755?a("i",{staticClass:"mdi mdi-tab",class:{selected:1==e.thumbSize},on:{click:function(t){e.thumbSize=1}}}):e._e(),a("i",{staticClass:"mdi mdi-table",class:{selected:2==e.thumbSize},on:{click:function(t){e.thumbSize=2}}}),e.$store.state.screen.w>500?a("i",{staticClass:"mdi mdi-grid",class:{selected:3==e.thumbSize},on:{click:function(t){e.thumbSize=3}}}):e._e()]):e._e(),a("div",{staticClass:"f vlist"},e._l(e.videos,function(t){return a("vid-thumb",{key:t._id,attrs:{v:t,thumbWidth:e.thumbWidth,isHover:e.isHover==t._id},on:{play:function(t){return e.play(t)}}})}),1)]):a("div",{staticClass:"f fw",staticStyle:{padding:"200px 0"}},[a("loading",{attrs:{width:"100",height:"100"}})],1)])},staticRenderFns:[]}}});