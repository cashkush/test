webpackJsonp([0],{626:function(t,e,i){function n(t){i(671)}var a=i(108)(i(665),i(685),n,"data-v-81696c6e",null);t.exports=a.exports},627:function(t,e,i){function n(t){i(634)}var a=i(108)(i(632),i(636),n,"data-v-48749c38",null);t.exports=a.exports},628:function(t,e,i){function n(t){i(635)}var a=i(108)(i(633),i(637),n,"data-v-b5e8ab26",null);t.exports=a.exports},629:function(t,e,i){e=t.exports=i(620)(!1),e.push([t.i,'.loading-container.mini[data-v-48749c38]{padding:0;background:transparent}.loading-container.mini h2[data-v-48749c38]{font-size:13px}.loading-container[data-v-48749c38]{background:#000;border-radius:20px;padding:80px 120px}h2[data-v-48749c38]{color:#fff;margin:15px auto;text-align:center}.sk-fading-circle[data-v-48749c38]{width:40px;height:40px;margin:0 auto;position:relative}.sk-fading-circle .sk-circle[data-v-48749c38]{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle[data-v-48749c38]:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:#fff;border-radius:100%;animation:sk-circleFadeDelay-data-v-48749c38 1.2s infinite ease-in-out both}.sk-fading-circle .sk-circle2[data-v-48749c38]{transform:rotate(30deg)}.sk-fading-circle .sk-circle3[data-v-48749c38]{transform:rotate(60deg)}.sk-fading-circle .sk-circle4[data-v-48749c38]{transform:rotate(90deg)}.sk-fading-circle .sk-circle5[data-v-48749c38]{transform:rotate(120deg)}.sk-fading-circle .sk-circle6[data-v-48749c38]{transform:rotate(150deg)}.sk-fading-circle .sk-circle7[data-v-48749c38]{transform:rotate(180deg)}.sk-fading-circle .sk-circle8[data-v-48749c38]{transform:rotate(210deg)}.sk-fading-circle .sk-circle9[data-v-48749c38]{transform:rotate(240deg)}.sk-fading-circle .sk-circle10[data-v-48749c38]{transform:rotate(270deg)}.sk-fading-circle .sk-circle11[data-v-48749c38]{transform:rotate(300deg)}.sk-fading-circle .sk-circle12[data-v-48749c38]{transform:rotate(330deg)}.sk-fading-circle .sk-circle2[data-v-48749c38]:before{animation-delay:-1.1s}.sk-fading-circle .sk-circle3[data-v-48749c38]:before{animation-delay:-1s}.sk-fading-circle .sk-circle4[data-v-48749c38]:before{animation-delay:-.9s}.sk-fading-circle .sk-circle5[data-v-48749c38]:before{animation-delay:-.8s}.sk-fading-circle .sk-circle6[data-v-48749c38]:before{animation-delay:-.7s}.sk-fading-circle .sk-circle7[data-v-48749c38]:before{animation-delay:-.6s}.sk-fading-circle .sk-circle8[data-v-48749c38]:before{animation-delay:-.5s}.sk-fading-circle .sk-circle9[data-v-48749c38]:before{animation-delay:-.4s}.sk-fading-circle .sk-circle10[data-v-48749c38]:before{animation-delay:-.3s}.sk-fading-circle .sk-circle11[data-v-48749c38]:before{animation-delay:-.2s}.sk-fading-circle .sk-circle12[data-v-48749c38]:before{animation-delay:-.1s}@keyframes sk-circleFadeDelay-data-v-48749c38{0%,39%,to{opacity:0}40%{opacity:1}}',""])},630:function(t,e,i){e=t.exports=i(620)(!1),e.push([t.i,"@keyframes spinAround-data-v-b5e8ab26{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.vid-thumb[data-v-b5e8ab26]{margin:2px}.thumb[data-v-b5e8ab26]{width:100%;min-width:180px;max-width:360px;border-radius:8px;margin:15px 5px;box-shadow:0 0 6px 2px #320763;overflow:hidden;background:#000;position:relative;height:0;padding-bottom:58%}.thumb h2[data-v-b5e8ab26]{width:100%}.thumb .topp[data-v-b5e8ab26]{background:#333;color:#ccc;-ms-flex-pack:justify;justify-content:space-between;z-index:2}.thumb .topp p[data-v-b5e8ab26]{padding:0 5px;white-space:nowrap}.thumb .topp .p[data-v-b5e8ab26]{background:#320763;padding:5px 35px 5px 25px;border-top-right-radius:15px;border-bottom-right-radius:15px}.thumb .dur[data-v-b5e8ab26]{position:absolute;padding:1px 3px;font-size:13px;top:3%;right:2%;border-radius:4px;background-color:#000000aa}.thumb .bg[data-v-b5e8ab26]{width:100%;z-index:1;min-height:150px;position:absolute;top:50%;left:0;transform:translateY(-50%)}.thumb .bg.d[data-v-b5e8ab26]{margin:-9px 0}.thumb .title[data-v-b5e8ab26]{background:#320763;padding:4px;color:#fff;font-size:13px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;bottom:0;position:absolute;left:0;z-index:3;width:100%}.thumb video[data-v-b5e8ab26]{width:100%}",""])},631:function(t,e,i){"use strict";t.exports={friendlyUrl:function(t){if(!t||!t.toString())return console.log("friendly url missing"),"";var e="àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;",i=new RegExp(e.split("").join("|"),"g");return t.toString().toLowerCase().replace(/\s+/g,"-").replace(i,function(t){return"aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------".charAt(e.indexOf(t))}).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"").split("-").join("_")},aClick:function(t){var e=t.target;if(e&&e.matches("a:not([href*='://'])")&&e.href){var i=t.altKey,n=t.ctrlKey,a=t.metaKey,r=t.shiftKey,s=t.button,o=t.defaultPrevented;if(a||i||n||r)return;if(o)return;if(void 0!==s&&0!==s)return;if(e&&e.getAttribute){if(/\b_blank\b/i.test(e.getAttribute("target")))return}var c=new URL(e.href),d=c.pathname;window.location.pathname!==d&&t.preventDefault&&(t.preventDefault(),this.$router.push(d))}}}},632:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{loading:{type:Boolean,default:!0},loadingClass:{type:String,default:""},color:{type:String,default:"#fff"},width:{type:String,default:"40"},height:{type:String,default:"40"},bgStyle:{default:function(){}},h2Style:{default:function(){}},h2Text:{default:"Loading"}},data:function(){return{isLoading:this.loading}},computed:{styles:function(){return{width:this.width+"px",height:this.height+"px"}}},name:"CircleSpinner"}},633:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(631);i(109);e.default={name:"empty",data:function(){return{loaded:0}},props:{v:{},isHover:{default:!1}},computed:{vUrl:function(){return(0,n.friendlyUrl)(this.v.title)||"_"}},methods:{enter:function(){var t=this;this.isHover||(this.$emit("play",this.v._id),this.$root.$emit("hover",this.v._id)),setTimeout(function(){t.loaded||t.leave()},2500)},leave:function(){this.$emit("play",null)}}}},634:function(t,e,i){var n=i(629);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(621)("7dbbf89b",n,!0,{})},635:function(t,e,i){var n=i(630);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(621)("2afb7a98",n,!0,{})},636:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading-container",class:t.loadingClass,style:t.bgStyle},[i("div",{staticClass:"sk-fading-circle",style:t.styles},[i("div",{staticClass:"sk-circle1 sk-circle"}),i("div",{staticClass:"sk-circle2 sk-circle"}),i("div",{staticClass:"sk-circle3 sk-circle"}),i("div",{staticClass:"sk-circle4 sk-circle"}),i("div",{staticClass:"sk-circle5 sk-circle"}),i("div",{staticClass:"sk-circle6 sk-circle"}),i("div",{staticClass:"sk-circle7 sk-circle"}),i("div",{staticClass:"sk-circle8 sk-circle"}),i("div",{staticClass:"sk-circle9 sk-circle"}),i("div",{staticClass:"sk-circle10 sk-circle"}),i("div",{staticClass:"sk-circle11 sk-circle"}),i("div",{staticClass:"sk-circle12 sk-circle"})]),i("h2",{style:t.h2Style},[t._v(t._s(t.h2Text))])])},staticRenderFns:[]}},637:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vid-thumb f fw"},[t.v?[i("div",{staticClass:"thumb f fc",on:{mouseenter:function(e){return t.enter()},mouseleave:function(e){return t.leave()},touchstart:function(e){return t.enter()}}},[i("router-link",{attrs:{to:"/v/"+t.v.id+"/"+t.vUrl}},[t.isHover?i("video",{staticClass:"bg",attrs:{width:"100%",autoplay:"",src:t.v.preview,playsinline:""},on:{error:function(e){return t.leave()},loadstart:function(e){t.loaded=!0}}}):i("div",{staticClass:"bg"},[i("img",{class:t.v.p,attrs:{src:t.v.img},on:{error:function(e){t.v.img=t.v.img2}}}),i("div",{staticClass:"dur"},[t._v(t._s(t.v.duration||t.v.dur))])])]),i("h2",{staticClass:"f title"},[t._v(t._s(t.v.title))])],1)]:t._e()],2)},staticRenderFns:[]}},643:function(t,e,i){e=t.exports=i(620)(!1),e.push([t.i,".vid-list[data-v-0826e912]{-ms-flex-wrap:wrap;flex-wrap:wrap}",""])},644:function(t,e,i){"use strict";function n(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,i){function n(a,r){try{var s=e[a](r),o=s.value}catch(t){return void i(t)}if(!s.done)return Promise.resolve(o).then(function(t){n("next",t)},function(t){n("throw",t)});t(o)}return n("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(628),r=function(t){return t&&t.__esModule?t:{default:t}}(a),s=i(109);e.default={name:"vidlist",props:{vs:{}},data:function(){return{isHover:null,disposer:null,thumbSize:3}},methods:{play:function(t){if(this.isHover==t||!t)return this.isHover="";this.isHover=t},setThumbSize:function(t){this.$store.commit("SET_SITE_OPTION",{thumbSize:t})}},computed:{list:function(){var t=this.vs||this.$store.state.videos;return t=(0,s.chunk)(t,this.thumbSize),t.splice(1,0,{i:this.$store.state.ads.rel1||""}),t.splice(4,0,{i:this.$store.state.ads.rel2||""}),this.thumbSize<3&&t.splice(7,0,{i:this.$store.state.ads.rel3||""}),this.thumbSize<2&&t.splice(10,0,{i:this.$store.state.ads.rel4||""}),t}},mounted:function(){var t=this;return n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.disposer=t.$watch("$store.state.screen.w",n(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=Math.floor(parseInt(getComputedStyle(this.$el).width)/280),this.thumbSize=e;case 2:case"end":return t.stop()}},t,this)})),{immediate:!0});case 1:case"end":return e.stop()}},e,t)}))()},components:{vidThumb:r.default},beforeDestroy:function(){this.disposer&&this.disposer()}}},645:function(t,e,i){var n=i(643);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(621)("8c2a4c60",n,!0,{})},646:function(t,e,i){function n(t){i(645)}var a=i(108)(i(644),i(647),n,"data-v-0826e912",null);t.exports=a.exports},647:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fw f vid-list"},t._l(t.list,function(e,n){return i("div",{key:n,staticClass:"row fw f ja"},[e.i?[i("div",{domProps:{innerHTML:t._s(e.i)}})]:t._l(e,function(e){return i("vid-thumb",{key:e._id,attrs:{v:e,isHover:t.isHover==e._id},on:{play:function(e){return t.play(e)}}})})],2)}),0)},staticRenderFns:[]}},648:function(t,e,i){e=t.exports=i(620)(!1),e.push([t.i,".related[data-v-2bef5d53]{margin-top:20px;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center}",""])},649:function(t,e,i){e=t.exports=i(620)(!1),e.push([t.i,"#vast>video[data-v-4e8eae58]{width:480px;height:360px}",""])},653:function(t,e,i){e=t.exports=i(620)(!1),e.push([t.i,".vid[data-v-81696c6e]{min-height:400px;max-width:960px;margin:0 auto}.vid .vid-wrap[data-v-81696c6e]{width:100%;max-width:560px;margin:10px auto}.vid .res[data-v-81696c6e]{position:relative}.vid .res a[data-v-81696c6e]{text-align:center;padding:10px;-ms-flex-positive:1;flex-grow:1}.vid .res #selector[data-v-81696c6e]{background:hsla(0,0%,100%,.3);position:absolute;top:0;left:0;height:100%;transition:transform .3s ease-in}.vid h1[data-v-81696c6e]{padding:5px 10px;background-color:#639;font-size:16px;color:#fff;border-bottom-right-radius:10px;border-bottom-left-radius:10px}.vid .related[data-v-81696c6e]{-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:960px;-ms-flex-pack:center;justify-content:center;margin:15px auto}.vid .buttons[data-v-81696c6e]{width:100%;color:#fff}.vid .buttons i[data-v-81696c6e]{font-size:32px;padding:5px}.vid .buttons span[data-v-81696c6e]{font-size:13px}.vid .msg[data-v-81696c6e]{background:teal;padding:4px 10px;margin:6px 0 20px;color:#fff;border-radius:6px}.vid .msg.err[data-v-81696c6e]{background:red}",""])},654:function(t,e,i){e=t.exports=i(620)(!1),e.push([t.i,".download-modal{background:red}.download-modal .modal-content{margin:0 auto;background:#101c5c;border-radius:15px;min-height:400px;width:80%}",""])},655:function(t,e,i){e=t.exports=i(620)(!1),e.push([t.i,".mdownload[data-v-e4f745e0]{height:100%;padding:15px}.mdownload h4[data-v-e4f745e0]{background:transparent}.mdownload .res[data-v-e4f745e0]{border-radius:10px;width:80%;overflow:hidden;position:relative;margin:15px auto}.mdownload a[data-v-e4f745e0]{display:block;padding:10px 0;background:#333;-ms-flex-positive:1;flex-grow:1;text-align:center}.mdownload a[data-v-e4f745e0]:hover{color:#fff;background:#444}.mdownload .indicator[data-v-e4f745e0]{height:100%;background:hsla(0,0%,100%,.3);position:absolute;left:0;top:0;transition:transform .3s ease-in}.mdownload .btn[data-v-e4f745e0]{margin:auto 0 0}",""])},656:function(t,e,i){e=t.exports=i(620)(!1),e.push([t.i,".save-icon[data-v-f68bd6a4]{display:block;font-size:35px;cursor:pointer;color:#fff;transition:transform .3s ease-in;background-color:rgba(0,0,0,.3);border-radius:10px}.save-icon i[data-v-f68bd6a4]{padding:10px 20px}.save-icon[data-v-f68bd6a4]:hover{transform:scale(1.2)}.save-icon p[data-v-f68bd6a4]{font-size:13px;text-align:center}",""])},657:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,i){function n(a,r){try{var s=e[a](r),o=s.value}catch(t){return void i(t)}if(!s.done)return Promise.resolve(o).then(function(t){n("next",t)},function(t){n("throw",t)});t(o)}return n("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(688),s=n(r),o=i(627),c=n(o);e.default={name:"download",components:{vrecap:s.default,loading:c.default},props:{v:{}},data:function(){return{showDownload:!1,res:null,captchaLoaded:!1,captchaToken:null}},methods:{verified:function(t){this.captchaToken=t},setRes:function(t){var e=this;this.res=!1,this.captchaLoaded=!1,setTimeout(function(){e.res=t},100)},errorCaptcha:function(t){console.log("errorCaptcha",t)},download:function(){var t=this;return a(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$socket.emit("requestDownload",{id:t.$route.params.id,t:t.captchaToken,res:t.res},function(e,i){"undefined"!=typeof gtag&&gtag("event","download",{uid:t.$authToken.get()._id,id:t.$route.params.id}),i&&window.open(i)});case 1:case"end":return e.stop()}},e,t)}))()}},mounted:function(){this.res=Object.keys(this.v.links)[0]},computed:{indicatorStyle:function(){var t=Object.keys(this.v.links).indexOf(this.res);return{width:Math.floor(100/Object.keys(this.v.links).length)+"%",transform:"translate3d("+100*t+"%,0,0)"}}}}},658:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},a=i(156),r=i(627),s=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={name:"save-btn",data:function(){return{isLoading:!1}},props:{vid:{}},methods:{save:function(){var t=this;this.isLoading||(this.isLoading=!0,this.$socket.emit("saveVideo",{_id:this.vid,isSaved:this.isSaved},function(e,i){if(t.isLoading=!1,e)return void console.error(e);t.$store.commit("SOCKET_LOGIN",{saved:i.value.saved})}))}},mounted:function(){},computed:n({},(0,a.mapState)({isSaved:function(t){return t.usr.saved&&t.usr.saved.includes(this.vid)}})),components:{loading:s.default}}},659:function(t,e,i){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(628),r=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={name:"related",components:{vidThumb:r.default},props:{v:{}},data:function(){return{list:[],hover:""}},mounted:function(){var t=this;this.$socket.emit("getRelated",this.v._id,function(e,i){e||(t.list=i)})},computed:{vs:function(){return[].concat(n(this.$store.state.videos&&Object.keys(this.$store.state.videos||{}).length&&Object.values(this.$store.state.videos)||[]),n(this.list))}}}},660:function(t,e,i){"use strict";function n(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,i){function n(a,r){try{var s=e[a](r),o=s.value}catch(t){return void i(t)}if(!s.done)return Promise.resolve(o).then(function(t){n("next",t)},function(t){n("throw",t)});t(o)}return n("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var a=(i(109),i(627)),r=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={name:"vast",data:function(){return{p:null,id:null}},computed:{novast:function(){return this.$store.state.novast}},mounted:function(){var t=this;return n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$once("endvast",function(e){console.log("end VAST",e);try{clearInterval(t.p.timer),t.p&&t.p.destroy()}catch(t){}t.$store.commit("SET_SITE_OPTION",{novast:!0})}),t.novast?t.$emit("novast",0):t.p=fluidPlayer("vast",{layoutControls:{primaryColor:!1,playButtonShowing:!1,playPauseAnimation:!1,fillToContainer:!0,autoPlay:!0,preload:!0,mute:!1,doubleclickFullscreen:!1,subtitlesEnabled:!1,keyboardControl:!1,layout:"default",allowDownload:!1,playbackRateEnabled:!1,allowTheatre:!1,title:!1,logo:{imageUrl:null,position:"top left",clickUrl:null,opacity:1},controlBar:{autoHide:!1,autoHideTimeout:3,animated:!1},timelinePreview:{},htmlOnPauseBlock:{html:null,height:null,width:null},playerInitCallback:function(){document.querySelector("#vast_fluid_controls_container").style.opacity="0"}},vastOptions:{showPlayButton:!1,adList:[{roll:"preRoll",vastTag:t.$store.state.siteOptions.vastUrl},{roll:"midRoll",vastTag:t.$store.state.siteOptions.vastUrl,timer:8},{roll:"midRoll",vastTag:t.$store.state.siteOptions.vastUrl,timer:10},{roll:"postRoll",vastTag:t.$store.state.siteOptions.vastUrl}],vastAdvanced:{vastLoadedCallback:function(){},noVastVideoCallback:function(){t.$emit("endvast",1)},vastVideoSkippedCallback:function(){t.$emit("endvast",2)},vastVideoEndedCallback:function(){t.$emit("endvast",3)}}}});case 2:case"end":return e.stop()}},e,t)}))()},beforeDestroy:function(){this.p&&this.p.destroy(),this.$store.state.novast=!0},methods:{},components:{loading:r.default}}},665:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,i){function n(a,r){try{var s=e[a](r),o=s.value}catch(t){return void i(t)}if(!s.done)return Promise.resolve(o).then(function(t){n("next",t)},function(t){n("throw",t)});t(o)}return n("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},s=i(156),o=i(678),c=n(o),d=i(627),l=n(d),u=i(676),f=n(u),v=i(677),p=n(v),h=i(675),m=n(h),g=i(646),b=n(g),y=i(109),w=i(235),x=i(67);e.default={name:"video",components:{loading:l.default,related:p.default,vidList:b.default,likeBtn:f.default,download:m.default,vast:c.default},data:function(){return{vidChannel:null,currentRes:null,relatedHover:"",v:{},showVast:!1,isLoadingVid:!1,msg:{class:"",txt:""},player:null,newid:null,options:{controls:!0,autoplay:!0,preload:"auto",fluid:!0},disposer:null}},beforeMount:function(){this.newid=x.observable.box(0),this.disposer=new w.Subject},mounted:function(){var t=this;return a(regeneratorRuntime.mark(function e(){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.when)(function(){return t.$authToken.get()._id});case 2:i=t.$watch("$route.params.id",function(e,i){t.newid.set(Date.now()),t.v={},t.currentRes=null,t.showVast=!1,t.getv(),t.$once("didPlay",function(){(0,x.when)(function(){return t.$root.gtag.get()}).then(function(){gtag("event","videoPlay",{id:t.$route.params.id,value:Date.now()-t.mounted}),gtag("event","timing_complete",{name:"videoPlay",value:Date.now()-t.newid.get(),event_label:"vplay"})})}),t.unsubVidChannel(),t.vidChannel=t.$socket.subscribe("v/"+t.$route.params.id),t.vidChannel.on("subscribe",function(){t.$socket.emit("getRelated",t.$route.params.id)}),t.vidChannel.watch(function(e){if(t.msg.txt=e.msg||"",e.err)return t.msg.class="err",void(t.msg.txt=e.err);e.v&&t.gotv(e.v),e.related&&(t.v.related=e.related,t.v.links&&t.unsubVidChannel()),t.$forceUpdate()}),setTimeout(function(){t.v.links||(t.isLoadingVid=!0)},800)},{immediate:!0}),t.disposer.subscribe(function(){i(),t.unsubVidChannel()});case 4:case"end":return e.stop()}},e,t)}))()},sockets:{getv:function(){function t(t){return e.apply(this,arguments)}var e=a(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.gotv(e);case 1:case"end":return t.stop()}},t,this)}));return t}()},computed:r({},(0,s.mapState)(["path","usr"]),{vStyle:function(){return{width:16*parseInt(this.currentRes)/9+"px"}}}),methods:{getv:function(t){var e=this;return a(regeneratorRuntime.mark(function i(){var n;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:n=e.$route.params.id,e.$socket.emit("getv",{id:n,force:t},function(t,i){if(t)return void(e.err="Something went wrong , try refreshing")}),setTimeout(function(){e.v.links||(e.showVast=!0)},500);case 3:case"end":return i.stop()}},i,e)}))()},gotv:function(t){var e=this;return a(regeneratorRuntime.mark(function i(){return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:Object.assign(e.v,t),e.$forceUpdate(),t.v&&t.v.links&&Object.keys(t.v.links).length&&setTimeout(function(){e.setCurrentRes()},50);case 3:case"end":return i.stop()}},i,e)}))()},setCurrentRes:function(t){var e=this,i=t||this.usr.currentRes,n=Object.keys(this.v.links);if(i&&this.v.links[i]||(i=n[n.length-1]),i!==this.usr.currentRes&&this.$socket.emit("setUsr",{currentRes:i}),this.$refs.videoPlayer.player){var a=this.$refs.videoPlayer.player.currentTime();this.$refs.videoPlayer.player.src([{src:this.v.links[i],type:"video/mp4"}]),setTimeout(function(){e.$refs.videoPlayer.player.currentTime(a),e.$refs.videoPlayer.player.play()},400);var r=document.querySelector(".res");if(!r)return;var s=n.indexOf(i),o=parseInt(getComputedStyle(r).width)/n.length;Object.assign(r.querySelector("#selector").style,{transform:"translateX("+o*s+"px)",width:o+"px"}),void 0!==this.$store.state.usr.vol&&this.$refs.videoPlayer.player.volume(this.$store.state.usr.vol)}},unsubVidChannel:function(){this.vidChannel&&this.vidChannel.off("subscribe")&&this.vidChannel.unsubscribe()&&this.vidChannel.unwatch()},playerReadied:function(){var t=this;this.setCurrentRes(this.currentRes);var e=this.$refs.videoPlayer.player;e.on("play",function(){t.$emit("didPlay")}),e.on("error",function(e){var i={id:t.$route.params.id,text:e.target.innerText};t.$socket.emit("vidError",i),(0,x.when)(function(){return t.$root.gtag.get()}).then(function(){gtag("event","videoError",{event_label:t.$route.params.id})}),setTimeout(function(){t.getv(!0)},2e3)}),e.on("volumechange",(0,y.debounce)(function(){var e=document.querySelector(".vjs-volume-level");e&&(e=parseInt(e.style.width)/100,t.$socket.emit("setUsr",{vol:e}))}.bind(this),500))},copy:function(){var t=this;return a(regeneratorRuntime.mark(function e(){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(window.location.href);case 2:i=e.sent,t.msg.txt="Link copied!",setTimeout(function(){t.msg.txt=""},2e3);case 5:case"end":return e.stop()}},e,t)}))()}},beforeDestroy:function(){this.disposer.next(),this.$refs.videoPlayer&&this.$refs.videoPlayer.dispose()},metaInfo:function(){return{title:this.v.title}}}},666:function(t,e,i){var n=i(648);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(621)("2d78c00b",n,!0,{})},667:function(t,e,i){var n=i(649);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(621)("143d49be",n,!0,{})},671:function(t,e,i){var n=i(653);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(621)("7c356ddb",n,!0,{})},672:function(t,e,i){var n=i(654);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(621)("bccee0c6",n,!0,{})},673:function(t,e,i){var n=i(655);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(621)("5462b742",n,!0,{})},674:function(t,e,i){var n=i(656);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(621)("02b74fb8",n,!0,{})},675:function(t,e,i){function n(t){i(673),i(672)}var a=i(108)(i(657),i(686),n,"data-v-e4f745e0",null);t.exports=a.exports},676:function(t,e,i){function n(t){i(674)}var a=i(108)(i(658),i(687),n,"data-v-f68bd6a4",null);t.exports=a.exports},677:function(t,e,i){function n(t){i(666)}var a=i(108)(i(659),i(680),n,"data-v-2bef5d53",null);t.exports=a.exports},678:function(t,e,i){function n(t){i(667)}var a=i(108)(i(660),i(681),n,"data-v-4e8eae58",null);t.exports=a.exports},680:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"related fullw f"},t._l(t.list,function(e){return i("vid-thumb",{key:e._id,attrs:{isHover:t.hover==e._id,v:e},on:{play:function(i){t.hover=e._id}}})}),1)},staticRenderFns:[]}},681:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"f fw",attrs:{id:"myv"}},[t.novast?i("div",[i("loading",{attrs:{h2Text:"Loading video"}}),i("div",{staticClass:"f",attrs:{id:"novast"}})],1):i("div",[t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("video",{attrs:{id:"vast"}},[i("source",{attrs:{src:"/public/1.mp4",type:"video/mp4"}})])}]}},685:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vid f fc"},[t.v&&t.v._id?[t.v.links?i("div",{staticClass:"vid-wrap",style:t.vStyle},[i("video-player",{ref:"videoPlayer",staticClass:"video-player-box vjs-theme-fantasy",attrs:{id:"v",options:t.options,playsinline:!0,customEventName:"customstatechangedeventname"},on:{ready:t.playerReadied}})],1):t._e(),i("div",{staticClass:"f fc",staticStyle:{"max-width":"800px",width:"100%",margin:"0 auto"}},[i("div",{staticClass:"res f fw"},[i("div",{attrs:{id:"selector"}}),t._l(t.v.links,function(e,n){return i("a",{key:n,on:{click:function(e){return t.setCurrentRes(n)}}},[t._v(t._s(n))])})],2),i("h1",{staticClass:"fw"},[t._v(t._s(t.v.title))]),i("transition",{attrs:{name:"fade"}},[t.msg.txt?i("div",{staticClass:"msg",class:t.msg.class},[i("h6",[t._v(t._s(t.msg.txt))])]):t._e()]),i("div",{staticClass:"buttons f wrap ja"},[i("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"f fc"},[i("i",{staticClass:"mdi mdi-clipboard-text-multiple-outline",on:{click:function(e){return t.copy()}}}),i("span",[t._v("Copy link")])]),i("like-btn",{attrs:{vid:t.v._id}}),i("download",{attrs:{v:t.v}})],1)],1)]:i("div",{staticClass:"f fc",staticStyle:{"min-height":"400px","justify-content":"center","min-width":"480px"}},[i("transition",{attrs:{name:"fade"}},[t.msg.txt?i("div",{staticClass:"msg",class:t.msg.class},[i("transition-group",{attrs:{mode:"out-in",name:"ffade"}},[i("h6",{key:t.msg.txt[0]},[t._v(t._s(t.msg.txt))])])],1):t._e()]),t.showVast?[i("vast")]:t._e()],2),i("div",{staticClass:"related f fw"},[i("vid-list",{attrs:{vs:t.v.related}})],1)],2)},staticRenderFns:[]}},686:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"f fc",on:{click:function(e){t.showDownload=!0}}},[i("i",{staticClass:"mdi mdi-download"}),i("span",[t._v("Download")])]),i("div",{staticClass:"download-modal"},[i("b-modal",{attrs:{active:t.showDownload},on:{"update:active":function(e){t.showDownload=e}}},[i("div",{staticClass:"fw f fc mdownload"},[i("h4",[t._v("Select the resolution")]),i("div",{staticClass:"res f"},[t._l(t.v.links,function(e,n){return i("a",{key:n,on:{click:function(e){return t.setRes(n)}}},[t._v(t._s(n))])}),i("div",{staticClass:"indicator",style:t.indicatorStyle})],2),t.res?i("vrecap",{attrs:{sitekey:t.$store.state.captchaKey,loadRecaptchaScript:!0},on:{verify:function(e){return t.verified(e)},error:function(e){return t.errorCaptcha()},render:function(e){t.captchaLoaded=!0}}}):t._e(),t.captchaLoaded?i("div",{staticClass:"fw btn f"},[i("b-button",{attrs:{disabled:!t.captchaToken},on:{click:function(e){return t.download()}}},[t._v("DOWNLOAD")])],1):i("loading",{attrs:{loadingClass:"mini"}})],1)])],1)])},staticRenderFns:[]}},687:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"save-icon f fc",on:{click:function(e){return t.save()}}},[t.isLoading?i("loading",{attrs:{loadingClass:"mini"}}):i("i",{staticClass:"mdi ",class:[t.isSaved?"mdi-heart":"mdi-heart-outline"]}),i("p",[t._v(t._s(t.isSaved?"video saved!":"save video"))])],1)},staticRenderFns:[]}},688:function(t,e,i){"use strict";function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},n.apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=!1,e=[],i=function(i){if(!t){t=!0;for(var n=0,a=e.length;n<a;n++)e[n](i)}},n=function(i){if(!t)return void e.push(i);i()};return{resolved:function(){return t},resolve:i,promise:{then:n}}},r=Object.prototype.hasOwnProperty,s=function(){var t=a();return{notify:function(){t.resolve()},wait:function(){return t.promise},render:function(t,e,i){this.wait().then(function(){i(window.grecaptcha.render(t,e))})},reset:function(t){void 0!==t&&(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.reset(t)}))},execute:function(t){void 0!==t&&(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.execute(t)}))},checkRecaptchaLoad:function(){r.call(window,"grecaptcha")&&r.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!t.resolved())throw new Error("ReCAPTCHA has not been loaded")}}}();"undefined"!=typeof window&&(window.vueRecaptchaApiLoaded=s.notify);var o={name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!1},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},beforeMount:function(){if(this.loadRecaptchaScript&&!document.getElementById(this.recaptchaScriptId)){var t=document.createElement("script");t.id=this.recaptchaScriptId,t.src="https://"+this.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+this.language,t.async=!0,t.defer=!0,document.head.appendChild(t)}},mounted:function(){var t=this;s.checkRecaptchaLoad();var e=n({},this.$props,{callback:this.emitVerify,"expired-callback":this.emitExpired,"error-callback":this.emitError}),i=this.$slots.default?this.$el.children[0]:this.$el;s.render(i,e,function(e){t.$widgetId=e,t.$emit("render",e)})},methods:{reset:function(){s.reset(this.$widgetId)},execute:function(){s.execute(this.$widgetId)},emitVerify:function(t){this.$emit("verify",t)},emitExpired:function(){this.$emit("expired")},emitError:function(){this.$emit("error")}},render:function(t){return t("div",{},this.$slots.default)}};e.default=o}});