webpackJsonp([0],{694:function(t,e,a){function i(t){a(731)}var r=a(114)(a(726),a(743),i,"data-v-81696c6e",null);t.exports=r.exports},695:function(t,e,a){function i(t){a(702)}var r=a(114)(a(700),a(704),i,"data-v-48749c38",null);t.exports=r.exports},696:function(t,e,a){function i(t){a(703)}var r=a(114)(a(701),a(705),i,"data-v-b5e8ab26",null);t.exports=r.exports},697:function(t,e,a){e=t.exports=a(688)(!1),e.push([t.i,'.loading-container.mini[data-v-48749c38]{padding:0;background:transparent}.loading-container.mini h2[data-v-48749c38]{font-size:13px}.loading-container[data-v-48749c38]{background:#000;border-radius:20px;padding:80px 120px}h2[data-v-48749c38]{color:#fff;margin:15px auto;text-align:center}.sk-fading-circle[data-v-48749c38]{width:40px;height:40px;margin:0 auto;position:relative}.sk-fading-circle .sk-circle[data-v-48749c38]{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle[data-v-48749c38]:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:#fff;border-radius:100%;animation:sk-circleFadeDelay-data-v-48749c38 1.2s infinite ease-in-out both}.sk-fading-circle .sk-circle2[data-v-48749c38]{transform:rotate(30deg)}.sk-fading-circle .sk-circle3[data-v-48749c38]{transform:rotate(60deg)}.sk-fading-circle .sk-circle4[data-v-48749c38]{transform:rotate(90deg)}.sk-fading-circle .sk-circle5[data-v-48749c38]{transform:rotate(120deg)}.sk-fading-circle .sk-circle6[data-v-48749c38]{transform:rotate(150deg)}.sk-fading-circle .sk-circle7[data-v-48749c38]{transform:rotate(180deg)}.sk-fading-circle .sk-circle8[data-v-48749c38]{transform:rotate(210deg)}.sk-fading-circle .sk-circle9[data-v-48749c38]{transform:rotate(240deg)}.sk-fading-circle .sk-circle10[data-v-48749c38]{transform:rotate(270deg)}.sk-fading-circle .sk-circle11[data-v-48749c38]{transform:rotate(300deg)}.sk-fading-circle .sk-circle12[data-v-48749c38]{transform:rotate(330deg)}.sk-fading-circle .sk-circle2[data-v-48749c38]:before{animation-delay:-1.1s}.sk-fading-circle .sk-circle3[data-v-48749c38]:before{animation-delay:-1s}.sk-fading-circle .sk-circle4[data-v-48749c38]:before{animation-delay:-.9s}.sk-fading-circle .sk-circle5[data-v-48749c38]:before{animation-delay:-.8s}.sk-fading-circle .sk-circle6[data-v-48749c38]:before{animation-delay:-.7s}.sk-fading-circle .sk-circle7[data-v-48749c38]:before{animation-delay:-.6s}.sk-fading-circle .sk-circle8[data-v-48749c38]:before{animation-delay:-.5s}.sk-fading-circle .sk-circle9[data-v-48749c38]:before{animation-delay:-.4s}.sk-fading-circle .sk-circle10[data-v-48749c38]:before{animation-delay:-.3s}.sk-fading-circle .sk-circle11[data-v-48749c38]:before{animation-delay:-.2s}.sk-fading-circle .sk-circle12[data-v-48749c38]:before{animation-delay:-.1s}@keyframes sk-circleFadeDelay-data-v-48749c38{0%,39%,to{opacity:0}40%{opacity:1}}',""])},698:function(t,e,a){e=t.exports=a(688)(!1),e.push([t.i,"@keyframes spinAround-data-v-b5e8ab26{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.thumb[data-v-b5e8ab26]{width:calc(33% - 8px);min-width:180px;max-width:360px;border-radius:8px;margin:15px 5px;box-shadow:0 0 6px 2px #320763;overflow:hidden;background:#000}.thumb h2[data-v-b5e8ab26]{width:100%}.thumb .topp[data-v-b5e8ab26]{background:#333;color:#ccc;-ms-flex-pack:justify;justify-content:space-between;z-index:2}.thumb .topp p[data-v-b5e8ab26]{padding:0 5px;white-space:nowrap}.thumb .topp .p[data-v-b5e8ab26]{background:#320763;padding:5px 35px 5px 25px;border-top-right-radius:15px;border-bottom-right-radius:15px}.thumb .title[data-v-b5e8ab26]{background:#320763;padding:4px;color:#fff;font-size:13px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.thumb .bg[data-v-b5e8ab26]{width:100%;z-index:1;min-height:150px}.thumb .bg.d[data-v-b5e8ab26]{margin:-9px 0}.thumb video[data-v-b5e8ab26]{width:100%;min-height:150px}",""])},699:function(t,e,a){"use strict";t.exports={friendlyUrl:function(t){if(!t||!t.toString())return console.log("friendly url missing"),"";var e="àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;",a=new RegExp(e.split("").join("|"),"g");return t.toString().toLowerCase().replace(/\s+/g,"-").replace(a,function(t){return"aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------".charAt(e.indexOf(t))}).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"").split("-").join("_")},aClick:function(t){var e=t.target;if(e&&e.matches("a:not([href*='://'])")&&e.href){var a=t.altKey,i=t.ctrlKey,r=t.metaKey,n=t.shiftKey,s=t.button,o=t.defaultPrevented;if(r||a||i||n)return;if(o)return;if(void 0!==s&&0!==s)return;if(e&&e.getAttribute){if(/\b_blank\b/i.test(e.getAttribute("target")))return}var c=new URL(e.href),d=c.pathname;window.location.pathname!==d&&t.preventDefault&&(t.preventDefault(),this.$router.push(d))}}}},700:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{loading:{type:Boolean,default:!0},loadingClass:{type:String,default:""},color:{type:String,default:"#fff"},width:{type:String,default:"40"},height:{type:String,default:"40"},bgStyle:{default:function(){}},h2Style:{default:function(){}},h2Text:{default:"Loading"}},data:function(){return{isLoading:this.loading}},computed:{styles:function(){return{width:this.width+"px",height:this.height+"px"}}},name:"CircleSpinner"}},701:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(699);e.default={name:"empty",data:function(){return{}},props:{v:{},thumbWidth:{default:"calc(33% - 8px)"},isHover:{default:!1}},computed:{vUrl:function(){return(0,i.friendlyUrl)(this.v.title)||"_"}},methods:{enter:function(){this.isHover||this.$emit("play",this.v._id)}}}},702:function(t,e,a){var i=a(697);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(689)("7dbbf89b",i,!0,{})},703:function(t,e,a){var i=a(698);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(689)("2afb7a98",i,!0,{})},704:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loading-container",class:t.loadingClass,style:t.bgStyle},[a("div",{staticClass:"sk-fading-circle",style:t.styles},[a("div",{staticClass:"sk-circle1 sk-circle"}),a("div",{staticClass:"sk-circle2 sk-circle"}),a("div",{staticClass:"sk-circle3 sk-circle"}),a("div",{staticClass:"sk-circle4 sk-circle"}),a("div",{staticClass:"sk-circle5 sk-circle"}),a("div",{staticClass:"sk-circle6 sk-circle"}),a("div",{staticClass:"sk-circle7 sk-circle"}),a("div",{staticClass:"sk-circle8 sk-circle"}),a("div",{staticClass:"sk-circle9 sk-circle"}),a("div",{staticClass:"sk-circle10 sk-circle"}),a("div",{staticClass:"sk-circle11 sk-circle"}),a("div",{staticClass:"sk-circle12 sk-circle"})]),a("h2",{style:t.h2Style},[t._v(t._s(t.h2Text))])])},staticRenderFns:[]}},705:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"thumb f fc",style:{width:t.thumbWidth},on:{mouseenter:function(e){return t.enter()},touchstart:function(e){return t.enter()}}},[t.v?[a("router-link",{attrs:{to:"/v/"+t.v.id+"/"+t.vUrl}},[t.isHover?a("video",{attrs:{width:"100%",autoplay:"",src:t.v.preview,playsinline:""}}):a("img",{staticClass:"bg",class:t.v.p,attrs:{src:t.v.img},on:{error:function(e){t.v.img=t.v.img2}}})]),a("h2",{staticClass:"f title"},[t._v(t._s(t.v.title))])]:t._e()],2)},staticRenderFns:[]}},711:function(t,e,a){e=t.exports=a(688)(!1),e.push([t.i,".related[data-v-2bef5d53]{margin-top:20px;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center}",""])},715:function(t,e,a){e=t.exports=a(688)(!1),e.push([t.i,".vid[data-v-81696c6e]{min-height:400px;max-width:960px;margin:0 auto}.vid .vid-wrap[data-v-81696c6e]{min-width:360px;max-width:100%;margin:10px auto}.vid .res[data-v-81696c6e]{position:relative}.vid .res a[data-v-81696c6e]{text-align:center;padding:10px;-ms-flex-positive:1;flex-grow:1}.vid .res #selector[data-v-81696c6e]{background:hsla(0,0%,100%,.3);position:absolute;top:0;left:0;height:100%;transition:transform .3s ease-in}.vid h1[data-v-81696c6e]{padding:5px 10px;background-color:#639;font-size:16px;color:#fff;border-bottom-right-radius:10px;border-bottom-left-radius:10px}.vid .related[data-v-81696c6e]{-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:960px;-ms-flex-pack:center;justify-content:center;margin:15px auto}.vid .buttons[data-v-81696c6e]{width:100%;color:#fff}.vid .buttons i[data-v-81696c6e]{font-size:32px;padding:5px}.vid .buttons span[data-v-81696c6e]{font-size:13px}.vid .msg[data-v-81696c6e]{background:teal;padding:4px 10px;margin:6px 0 20px;color:#fff;border-radius:6px}.vid .msg.err[data-v-81696c6e]{background:red}",""])},716:function(t,e,a){e=t.exports=a(688)(!1),e.push([t.i,".download-modal{background:red}.download-modal .modal-content{margin:0 auto;background:#101c5c;border-radius:15px;min-height:400px;width:80%}",""])},717:function(t,e,a){e=t.exports=a(688)(!1),e.push([t.i,".mdownload[data-v-e4f745e0]{height:100%;padding:15px}.mdownload h4[data-v-e4f745e0]{background:transparent}.mdownload .res[data-v-e4f745e0]{border-radius:10px;width:80%;overflow:hidden;position:relative;margin:15px auto}.mdownload a[data-v-e4f745e0]{display:block;padding:10px 0;background:#333;-ms-flex-positive:1;flex-grow:1;text-align:center}.mdownload a[data-v-e4f745e0]:hover{color:#fff;background:#444}.mdownload .indicator[data-v-e4f745e0]{height:100%;background:hsla(0,0%,100%,.3);position:absolute;left:0;top:0;transition:transform .3s ease-in}.mdownload .btn[data-v-e4f745e0]{margin:auto 0 0}",""])},718:function(t,e,a){e=t.exports=a(688)(!1),e.push([t.i,".save-icon[data-v-f68bd6a4]{display:block;font-size:35px;cursor:pointer;color:#fff;transition:transform .3s ease-in;background-color:rgba(0,0,0,.3);border-radius:10px}.save-icon i[data-v-f68bd6a4]{padding:10px 20px}.save-icon[data-v-f68bd6a4]:hover{transform:scale(1.2)}.save-icon p[data-v-f68bd6a4]{font-size:13px;text-align:center}",""])},719:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function i(r,n){try{var s=e[r](n),o=s.value}catch(t){return void a(t)}if(!s.done)return Promise.resolve(o).then(function(t){i("next",t)},function(t){i("throw",t)});t(o)}return i("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(746),s=i(n),o=a(695),c=i(o);e.default={name:"download",components:{vrecap:s.default,loading:c.default},props:{v:{}},data:function(){return{showDownload:!1,res:null,captchaLoaded:!1,captchaToken:null}},methods:{verified:function(t){this.captchaToken=t},setRes:function(t){var e=this;this.res=!1,this.captchaLoaded=!1,setTimeout(function(){e.res=t},100)},errorCaptcha:function(t){console.log("errorCaptcha",t)},download:function(){var t=this;return r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$socket.emit("requestDownload",{id:t.$route.params.id,t:t.captchaToken,res:t.res},function(t,e){e&&window.open(e)});case 1:case"end":return e.stop()}},e,t)}))()}},mounted:function(){this.res=Object.keys(this.v.links)[0]},computed:{indicatorStyle:function(){var t=Object.keys(this.v.links).indexOf(this.res);return{width:Math.floor(100/Object.keys(this.v.links).length)+"%",transform:"translate3d("+100*t+"%,0,0)"}}}}},720:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},r=a(169),n=a(695),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={name:"save-btn",data:function(){return{isLoading:!1}},props:{vid:{}},methods:{save:function(){var t=this;this.isLoading||(this.isLoading=!0,this.$socket.emit("saveVideo",{_id:this.vid,isSaved:this.isSaved},function(e,a){if(t.isLoading=!1,e)return void console.error(e);t.$store.commit("SOCKET_LOGIN",{saved:a.value.saved})}))}},mounted:function(){},computed:i({},(0,r.mapState)({isSaved:function(t){return t.usr.saved&&t.usr.saved.includes(this.vid)}})),components:{loading:s.default}}},721:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(696),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={name:"related",components:{vidThumb:r.default},props:{v:{}},data:function(){return{list:[],hover:""}},mounted:function(){var t=this;this.$socket.emit("getRelated",this.v._id,function(e,a){e||(t.list=a)})}}},726:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function i(r,n){try{var s=e[r](n),o=s.value}catch(t){return void a(t)}if(!s.done)return Promise.resolve(o).then(function(t){i("next",t)},function(t){i("throw",t)});t(o)}return i("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},s=a(169),o=(a(102),a(695)),c=i(o),d=a(736),l=i(d),u=a(737),f=i(u),p=a(735),v=i(p),h=a(696),m=i(h),g=a(115);e.default={name:"video",components:{loading:c.default,related:f.default,vidThumb:m.default,likeBtn:l.default,download:v.default},data:function(){return{vidChannel:null,currentRes:null,relatedHover:"",v:{},msg:{class:"",txt:""},player:null,options:{controls:!0,autoplay:!1,preload:"none",fluid:!0,plugins:{}}}},mounted:function(){var t=this;return r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$watch("$route.params.id",function(e,a){t.v={},t.currentRes=null,t.getv(),t.$once("didPlay",function(){gtag&&gtag("event","videoPlay",{id:t.$route.params.id})}),t.vidChannel&&t.vidChannel.unsubscribe()&&t.vidChannel.unwatch(),t.vidChannel=t.$socket.subscribe("v/"+t.$route.params.id),t.vidChannel.watch(function(e){if(t.msg.txt=e.msg||"",e.err)return t.msg.class="err",void(t.msg.txt=e.err);e.v&&t.gotv(e.v)})},{immediate:!0});case 1:case"end":return e.stop()}},e,t)}))()},sockets:{getv:function(){function t(t){return e.apply(this,arguments)}var e=r(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.gotv(e);case 1:case"end":return t.stop()}},t,this)}));return t}()},computed:n({},(0,s.mapState)(["path","usr"]),{vStyle:function(){return{width:16*parseInt(this.currentRes)/9+"px"}}}),methods:{getv:function(){var t=this;return r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$socket.emit("getv",t.$route.params.id);case 1:case"end":return e.stop()}},e,t)}))()},gotv:function(t){var e=this;return r(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:Object.assign(e.v,t),e.$forceUpdate(),t.v&&t.v.links&&Object.keys(t.v.links).length&&setTimeout(function(){e.setCurrentRes()},50),t.related&&"string"!=typeof t.related[0]||e.$socket.emit("getRelated",e.$route.params.id);case 4:case"end":return a.stop()}},a,e)}))()},setCurrentRes:function(t){var e=this,a=t||this.usr.currentRes,i=Object.keys(this.v.links);if(a&&this.v.links[a]||(a=i[i.length-1]),a!==this.usr.currentRes&&this.$socket.emit("setUsr",{currentRes:a}),this.$refs.videoPlayer.player){var r=this.$refs.videoPlayer.player.currentTime();this.$refs.videoPlayer.player.src([{src:this.v.links[a],type:"video/mp4"}]),setTimeout(function(){e.$refs.videoPlayer.player.currentTime(r),e.$refs.videoPlayer.player.play()},400);var n=document.querySelector(".res");if(!n)return;var s=i.indexOf(a),o=parseInt(getComputedStyle(n).width)/i.length;Object.assign(n.querySelector("#selector").style,{transform:"translateX("+o*s+"px)",width:o+"px"}),void 0!==this.$store.state.usr.vol&&this.$refs.videoPlayer.player.volume(this.$store.state.usr.vol)}},playerReadied:function(){var t=this;this.setCurrentRes(this.currentRes);var e=this.$refs.videoPlayer.player;e.on("play",function(){t.$emit("didPlay")}),e.on("error",function(e){var a={id:t.$route.params.id,text:e.target.innerText};t.$socket.emit("vidError",a),t.$emit("vidError",a),gtag&&gtag("event","videoError",a),setTimeout(function(){t.getv()},2e3)}),e.on("volumechange",(0,g.debounce)(function(){var e=document.querySelector(".vjs-volume-level");e&&(e=parseInt(e.style.width)/100,t.$socket.emit("setUsr",{vol:e}))}.bind(this),500))},copy:function(){var t=this;return r(regeneratorRuntime.mark(function e(){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(window.location.href);case 2:a=e.sent,t.msg.txt="Link copied!",setTimeout(function(){t.msg.txt=""},2e3);case 5:case"end":return e.stop()}},e,t)}))()},download:function(){var t=this;return r(regeneratorRuntime.mark(function e(){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$recaptcha("download");case 2:a=e.sent,t.$socket.emit("requestDownload",{id:t.$route.params.id,token:a},function(t,e){e&&window.open(e)});case 4:case"end":return e.stop()}},e,t)}))()}},beforeDestroy:function(){this.$refs.videoPlayer.player&&this.$refs.videoPlayer.dispose(),this.vidChannel&&this.vidChannel.unsubscribe()&&this.vidChannel.unwatch(),this.vidChannel=null},metaInfo:function(){return{}}}},727:function(t,e,a){var i=a(711);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(689)("2d78c00b",i,!0,{})},731:function(t,e,a){var i=a(715);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(689)("7c356ddb",i,!0,{})},732:function(t,e,a){var i=a(716);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(689)("bccee0c6",i,!0,{})},733:function(t,e,a){var i=a(717);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(689)("5462b742",i,!0,{})},734:function(t,e,a){var i=a(718);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(689)("02b74fb8",i,!0,{})},735:function(t,e,a){function i(t){a(733),a(732)}var r=a(114)(a(719),a(744),i,"data-v-e4f745e0",null);t.exports=r.exports},736:function(t,e,a){function i(t){a(734)}var r=a(114)(a(720),a(745),i,"data-v-f68bd6a4",null);t.exports=r.exports},737:function(t,e,a){function i(t){a(727)}var r=a(114)(a(721),a(739),i,"data-v-2bef5d53",null);t.exports=r.exports},739:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"related fullw f"},t._l(t.list,function(e){return a("vid-thumb",{key:e._id,attrs:{isHover:t.hover==e._id,v:e},on:{play:function(a){t.hover=e._id}}})}),1)},staticRenderFns:[]}},743:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vid f fc"},[t.v&&t.v._id?[t.v.links?a("div",{staticClass:"vid-wrap",style:t.vStyle},[a("video-player",{ref:"videoPlayer",staticClass:"video-player-box vjs-theme-fantasy",attrs:{id:"v",options:t.options,playsinline:!0,customEventName:"customstatechangedeventname"},on:{ready:t.playerReadied}})],1):t._e(),a("div",{staticClass:"f fc",staticStyle:{"max-width":"800px",width:"100%",margin:"0 auto"}},[a("div",{staticClass:"res f fw"},[a("div",{attrs:{id:"selector"}}),t._l(t.v.links,function(e,i){return a("a",{key:i,on:{click:function(e){return t.setCurrentRes(i)}}},[t._v(t._s(i))])})],2),a("h1",{staticClass:"fw"},[t._v(t._s(t.v.title))]),a("transition",{attrs:{name:"fade"}},[t.msg.txt?a("div",{staticClass:"msg",class:t.msg.class},[a("h6",[t._v(t._s(t.msg.txt))])]):t._e()]),a("div",{staticClass:"buttons f wrap ja"},[a("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"f fc"},[a("i",{staticClass:"mdi mdi-clipboard-text-multiple-outline",on:{click:function(e){return t.copy()}}}),a("span",[t._v("Copy link")])]),a("like-btn",{attrs:{vid:t.v._id}}),a("download",{attrs:{v:t.v}})],1)],1),a("div",{staticClass:"related f"},t._l(t.v.related,function(e){return a("vid-thumb",{key:e._id,attrs:{isHover:t.relatedHover==e._id,v:e},on:{play:function(a){t.relatedHover=e._id}}})}),1)]:a("div",{staticClass:"f fc",staticStyle:{"min-height":"400px","justify-content":"center"}},[a("transition",{attrs:{name:"fade"}},[t.msg.txt?a("div",{staticClass:"msg",class:t.msg.class},[a("transition-group",{attrs:{mode:"out-in",name:"ffade"}},[a("h6",{key:t.msg.txt[0]},[t._v(t._s(t.msg.txt))])])],1):t._e()]),a("loading",{attrs:{width:"120",height:"120",h2Text:"Loading video"}})],1)],2)},staticRenderFns:[]}},744:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"f fc",on:{click:function(e){t.showDownload=!0}}},[a("i",{staticClass:"mdi mdi-download"}),a("span",[t._v("Download")])]),a("div",{staticClass:"download-modal"},[a("b-modal",{attrs:{active:t.showDownload},on:{"update:active":function(e){t.showDownload=e}}},[a("div",{staticClass:"fw f fc mdownload"},[a("h4",[t._v("Select the resolution")]),a("div",{staticClass:"res f"},[t._l(t.v.links,function(e,i){return a("a",{key:i,on:{click:function(e){return t.setRes(i)}}},[t._v(t._s(i))])}),a("div",{staticClass:"indicator",style:t.indicatorStyle})],2),t.res?a("vrecap",{attrs:{sitekey:t.$store.state.captchaKey,loadRecaptchaScript:!0},on:{verify:function(e){return t.verified(e)},error:function(e){return t.errorCaptcha()},render:function(e){t.captchaLoaded=!0}}}):t._e(),t.captchaLoaded?a("div",{staticClass:"fw btn f"},[a("b-button",{attrs:{disabled:!t.captchaToken},on:{click:function(e){return t.download()}}},[t._v("DOWNLOAD")])],1):a("loading",{attrs:{loadingClass:"mini"}})],1)])],1)])},staticRenderFns:[]}},745:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"save-icon f fc",on:{click:function(e){return t.save()}}},[t.isLoading?a("loading",{attrs:{loadingClass:"mini"}}):a("i",{staticClass:"mdi ",class:[t.isSaved?"mdi-heart":"mdi-heart-outline"]}),a("p",[t._v(t._s(t.isSaved?"video saved!":"save video"))])],1)},staticRenderFns:[]}},746:function(t,e,a){"use strict";function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},i.apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=!1,e=[],a=function(a){if(!t){t=!0;for(var i=0,r=e.length;i<r;i++)e[i](a)}},i=function(a){if(!t)return void e.push(a);a()};return{resolved:function(){return t},resolve:a,promise:{then:i}}},n=Object.prototype.hasOwnProperty,s=function(){var t=r();return{notify:function(){t.resolve()},wait:function(){return t.promise},render:function(t,e,a){this.wait().then(function(){a(window.grecaptcha.render(t,e))})},reset:function(t){void 0!==t&&(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.reset(t)}))},execute:function(t){void 0!==t&&(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.execute(t)}))},checkRecaptchaLoad:function(){n.call(window,"grecaptcha")&&n.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!t.resolved())throw new Error("ReCAPTCHA has not been loaded")}}}();"undefined"!=typeof window&&(window.vueRecaptchaApiLoaded=s.notify);var o={name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!1},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},beforeMount:function(){if(this.loadRecaptchaScript&&!document.getElementById(this.recaptchaScriptId)){var t=document.createElement("script");t.id=this.recaptchaScriptId,t.src="https://"+this.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+this.language,t.async=!0,t.defer=!0,document.head.appendChild(t)}},mounted:function(){var t=this;s.checkRecaptchaLoad();var e=i({},this.$props,{callback:this.emitVerify,"expired-callback":this.emitExpired,"error-callback":this.emitError}),a=this.$slots.default?this.$el.children[0]:this.$el;s.render(a,e,function(e){t.$widgetId=e,t.$emit("render",e)})},methods:{reset:function(){s.reset(this.$widgetId)},execute:function(){s.execute(this.$widgetId)},emitVerify:function(t){this.$emit("verify",t)},emitExpired:function(){this.$emit("expired")},emitError:function(){this.$emit("error")}},render:function(t){return t("div",{},this.$slots.default)}};e.default=o}});