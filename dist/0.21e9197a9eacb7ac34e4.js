webpackJsonp([0],{623:function(t,e,i){function a(t){i(653)}var r=i(108)(i(649),i(661),a,"data-v-81696c6e",null);t.exports=r.exports},624:function(t,e,i){function a(t){i(630)}var r=i(108)(i(628),i(632),a,"data-v-48749c38",null);t.exports=r.exports},625:function(t,e,i){function a(t){i(631)}var r=i(108)(i(629),i(633),a,"data-v-b5e8ab26",null);t.exports=r.exports},626:function(t,e,i){e=t.exports=i(618)(!1),e.push([t.i,'.loading-container[data-v-48749c38]{background:rgba(0,0,0,30%);border-radius:20px;padding:80px 120px}h2[data-v-48749c38]{color:#fff;margin:15px auto;text-align:center}.sk-fading-circle[data-v-48749c38]{width:40px;height:40px;position:relative}.sk-fading-circle .sk-circle[data-v-48749c38]{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle[data-v-48749c38]:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:#fff;border-radius:100%;animation:sk-circleFadeDelay-data-v-48749c38 1.2s infinite ease-in-out both}.sk-fading-circle .sk-circle2[data-v-48749c38]{transform:rotate(30deg)}.sk-fading-circle .sk-circle3[data-v-48749c38]{transform:rotate(60deg)}.sk-fading-circle .sk-circle4[data-v-48749c38]{transform:rotate(90deg)}.sk-fading-circle .sk-circle5[data-v-48749c38]{transform:rotate(120deg)}.sk-fading-circle .sk-circle6[data-v-48749c38]{transform:rotate(150deg)}.sk-fading-circle .sk-circle7[data-v-48749c38]{transform:rotate(180deg)}.sk-fading-circle .sk-circle8[data-v-48749c38]{transform:rotate(210deg)}.sk-fading-circle .sk-circle9[data-v-48749c38]{transform:rotate(240deg)}.sk-fading-circle .sk-circle10[data-v-48749c38]{transform:rotate(270deg)}.sk-fading-circle .sk-circle11[data-v-48749c38]{transform:rotate(300deg)}.sk-fading-circle .sk-circle12[data-v-48749c38]{transform:rotate(330deg)}.sk-fading-circle .sk-circle2[data-v-48749c38]:before{animation-delay:-1.1s}.sk-fading-circle .sk-circle3[data-v-48749c38]:before{animation-delay:-1s}.sk-fading-circle .sk-circle4[data-v-48749c38]:before{animation-delay:-.9s}.sk-fading-circle .sk-circle5[data-v-48749c38]:before{animation-delay:-.8s}.sk-fading-circle .sk-circle6[data-v-48749c38]:before{animation-delay:-.7s}.sk-fading-circle .sk-circle7[data-v-48749c38]:before{animation-delay:-.6s}.sk-fading-circle .sk-circle8[data-v-48749c38]:before{animation-delay:-.5s}.sk-fading-circle .sk-circle9[data-v-48749c38]:before{animation-delay:-.4s}.sk-fading-circle .sk-circle10[data-v-48749c38]:before{animation-delay:-.3s}.sk-fading-circle .sk-circle11[data-v-48749c38]:before{animation-delay:-.2s}.sk-fading-circle .sk-circle12[data-v-48749c38]:before{animation-delay:-.1s}@keyframes sk-circleFadeDelay-data-v-48749c38{0%,39%,to{opacity:0}40%{opacity:1}}',""])},627:function(t,e,i){e=t.exports=i(618)(!1),e.push([t.i,"@keyframes spinAround-data-v-b5e8ab26{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.thumb[data-v-b5e8ab26]{width:calc(33% - 8px);min-width:180px;max-width:360px;border-radius:8px;margin:15px 5px;box-shadow:0 0 6px 2px #320763;overflow:hidden;background:#000}.thumb h2[data-v-b5e8ab26]{width:100%}.thumb .topp[data-v-b5e8ab26]{background:#333;color:#ccc;-ms-flex-pack:justify;justify-content:space-between}.thumb .topp p[data-v-b5e8ab26]{padding:0 5px;white-space:nowrap}.thumb .topp .p[data-v-b5e8ab26]{background:#320763;padding:5px 35px 5px 25px;border-top-right-radius:15px;border-bottom-right-radius:15px}.thumb .title[data-v-b5e8ab26]{background:#320763;padding:4px;color:#fff;font-size:13px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.thumb .bg[data-v-b5e8ab26]{width:100%;z-index:1;min-height:150px}.thumb .bg.d[data-v-b5e8ab26]{margin:-9px 0}.thumb video[data-v-b5e8ab26]{width:100%;min-height:150px}",""])},628:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#fff"},width:{type:String,default:"40"},height:{type:String,default:"40"},bgStyle:{default:function(){}},h2Style:{default:function(){}},h2Text:{default:"Loading"}},data:function(){return{isLoading:this.loading}},computed:{styles:function(){return{width:this.width+"px",height:this.height+"px"}}},name:"CircleSpinner"}},629:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"empty",data:function(){return{}},props:{v:{},thumbWidth:{default:"calc(33% - 8px)"},isHover:{default:!1}}}},630:function(t,e,i){var a=i(626);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(619)("d71c6e0a",a,!0,{})},631:function(t,e,i){var a=i(627);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(619)("2afb7a98",a,!0,{})},632:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading-container",style:t.bgStyle},[i("div",{staticClass:"sk-fading-circle",style:t.styles},[i("div",{staticClass:"sk-circle1 sk-circle"}),i("div",{staticClass:"sk-circle2 sk-circle"}),i("div",{staticClass:"sk-circle3 sk-circle"}),i("div",{staticClass:"sk-circle4 sk-circle"}),i("div",{staticClass:"sk-circle5 sk-circle"}),i("div",{staticClass:"sk-circle6 sk-circle"}),i("div",{staticClass:"sk-circle7 sk-circle"}),i("div",{staticClass:"sk-circle8 sk-circle"}),i("div",{staticClass:"sk-circle9 sk-circle"}),i("div",{staticClass:"sk-circle10 sk-circle"}),i("div",{staticClass:"sk-circle11 sk-circle"}),i("div",{staticClass:"sk-circle12 sk-circle"})]),i("h2",{style:t.h2Style},[t._v(t._s(t.h2Text))])])},staticRenderFns:[]}},633:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"thumb f fc",style:{width:t.thumbWidth}},[i("router-link",{attrs:{to:"/v/"+t.v._id}},[t.isHover?[i("video",{attrs:{width:"100%",autoplay:""}},[i("source",{attrs:{src:t.v.preview}})])]:i("img",{staticClass:"bg",class:t.v.p,attrs:{src:t.v.img}})],2),i("h2",{staticClass:"f title"},[t._v(t._s(t.v.title))])],1)},staticRenderFns:[]}},639:function(t,e,i){e=t.exports=i(618)(!1),e.push([t.i,".related[data-v-2bef5d53]{margin-top:20px;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center}",""])},642:function(t,e,i){e=t.exports=i(618)(!1),e.push([t.i,".vid[data-v-81696c6e]{min-height:400px;max-width:960px;margin:0 auto}.vid .vid-wrap[data-v-81696c6e]{min-width:360px;max-width:100%;margin:10px auto}.vid .res[data-v-81696c6e]{position:relative}.vid .res a[data-v-81696c6e]{text-align:center;padding:10px;-ms-flex-positive:1;flex-grow:1}.vid .res #selector[data-v-81696c6e]{background:hsla(0,0%,100%,.3);position:absolute;top:0;left:0;height:100%;transition:transform .3s ease-in}.vid h1[data-v-81696c6e]{padding:5px 10px;background-color:#639;font-size:16px;color:#fff;border-bottom-right-radius:10px;border-bottom-left-radius:10px}.vid .related[data-v-81696c6e]{-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:960px;-ms-flex-pack:center;justify-content:center;margin:15px auto}",""])},643:function(t,e,i){e=t.exports=i(618)(!1),e.push([t.i,".save-icon[data-v-f68bd6a4]{display:block;font-size:35px;cursor:pointer;color:#fff;transition:transform .3s ease-in;background-color:rgba(0,0,0,.3);border-radius:10px}.save-icon i[data-v-f68bd6a4]{padding:10px 20px}.save-icon[data-v-f68bd6a4]:hover{transform:scale(1.2)}.save-icon p[data-v-f68bd6a4]{font-size:13px;text-align:center}",""])},644:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},r=i(156),s=i(624),n=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={name:"save-btn",data:function(){return{isLoading:!1}},props:{vid:{}},methods:{save:function(){var t=this;this.isLoading||(this.isLoading=!0,this.$socket.emit("saveVideo",{_id:this.vid,isSaved:this.isSaved},function(e,i){if(t.isLoading=!1,e)return void console.error(e);t.$store.commit("SOCKET_LOGIN",{saved:i.value.saved})}))}},mounted:function(){},computed:a({},(0,r.mapState)({isSaved:function(t){return t.usr.saved&&t.usr.saved.includes(this.vid)}})),components:{loading:n.default}}},645:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(625),r=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={name:"related",components:{vidThumb:r.default},props:{v:{}},data:function(){return{list:[],hover:""}},mounted:function(){var t=this;this.$socket.emit("getRelated",this.v._id,function(e,i){e||(t.list=i)})}}},649:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,i){function a(r,s){try{var n=e[r](s),c=n.value}catch(t){return void i(t)}if(!n.done)return Promise.resolve(c).then(function(t){a("next",t)},function(t){a("throw",t)});t(c)}return a("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},n=i(156),c=(i(96),i(624)),o=a(c),d=i(655),l=a(d),u=i(656),f=a(u),v=i(625),p=a(v);e.default={name:"video",components:{loading:o.default,related:f.default,vidThumb:p.default,likeBtn:l.default},data:function(){return{relatedHover:"",v:null,player:null,options:{controls:!0,autoplay:!1,preload:"none",fluid:!0,plugins:{}}}},mounted:function(){var t=this;return r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$watch("$route.params.id",function(e){t.v=!1,t.getv()},{immediate:!0}),t.$once("didPlay",function(){gtag&&gtag("event","videoPlay",{id:t.$route.params.id})});case 2:case"end":return e.stop()}},e,t)}))()},sockets:{getv:function(){function t(t){return e.apply(this,arguments)}var e=r(regeneratorRuntime.mark(function t(e){var i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&e.links){t.next=5;break}return t.next=3,new Promise(function(t){i.$socket.emit("vidError",i.$route.params.id,function(e,i){t()})});case 3:return this.getv(),t.abrupt("return");case 5:this.v=e,this.$forceUpdate(),setTimeout(function(){i.setCurrentRes(i.currentRes)},50);case 8:case"end":return t.stop()}},t,this)}));return t}()},computed:s({},(0,n.mapState)(["path","usr"]),{vStyle:function(){var t=parseInt(this.currentRes);return{width:16*t/9+"px",height:t+"px"}},currentRes:function(){return this.usr.currentRes||Object.keys(this.v.links)[Object.keys(this.v.links).length-1]}}),methods:{getv:function(){var t=this;return r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$socket.emit("getv",t.$route.params.id);case 1:case"end":return e.stop()}},e,t)}))()},setCurrentRes:function(t){var e=this;if(t!=this.currentRes&&this.$socket.emit("setUsr",{currentRes:t}),this.$refs.videoPlayer.player){var i=this.$refs.videoPlayer.player.currentTime();this.$refs.videoPlayer.player.src([{src:this.v.links[this.currentRes],type:"video/mp4"}]),setTimeout(function(){e.$refs.videoPlayer.player.currentTime(i),e.$refs.videoPlayer.player.play()},400);var a=document.querySelector(".res");if(!a)return;var r=Object.keys(this.v.links).indexOf(this.currentRes),s=parseInt(getComputedStyle(a).width)/Object.keys(this.v.links).length;Object.assign(a.querySelector("#selector").style,{transform:"translateX("+s*r+"px)",width:s+"px"})}},playerReadied:function(){var t=this;this.setCurrentRes(this.currentRes),this.$refs.videoPlayer.player.on("play",function(){t.$emit("didPlay")}),this.$refs.videoPlayer.player.on("error",function(t){return})}},beforeDestroy:function(){this.$refs.videoPlayer.player&&this.$refs.videoPlayer.dispose()},metaInfo:function(){return{}}}},650:function(t,e,i){var a=i(639);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(619)("2d78c00b",a,!0,{})},653:function(t,e,i){var a=i(642);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(619)("7c356ddb",a,!0,{})},654:function(t,e,i){var a=i(643);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(619)("02b74fb8",a,!0,{})},655:function(t,e,i){function a(t){i(654)}var r=i(108)(i(644),i(662),a,"data-v-f68bd6a4",null);t.exports=r.exports},656:function(t,e,i){function a(t){i(650)}var r=i(108)(i(645),i(658),a,"data-v-2bef5d53",null);t.exports=r.exports},658:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"related fullw f"},t._l(t.list,function(e){return i("vid-thumb",{key:e._id,attrs:{isHover:t.hover==e._id,v:e},on:{play:function(i){t.hover=e._id}}})}),1)},staticRenderFns:[]}},661:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vid f fc"},[t.v&&t.v._id?[t.v.links?i("div",{staticClass:"vid-wrap",style:t.vStyle},[i("video-player",{ref:"videoPlayer",staticClass:"video-player-box vjs-theme-fantasy",attrs:{id:"v",options:t.options,playsinline:!0,customEventName:"customstatechangedeventname"},on:{ready:t.playerReadied}})],1):t._e(),i("div",{staticClass:"f fc",staticStyle:{"max-width":"800px",width:"100%",margin:"0 auto"}},[i("div",{staticClass:"res f fw"},[i("div",{attrs:{id:"selector"}}),t._l(t.v.links,function(e,a){return i("a",{key:a,on:{click:function(e){return t.setCurrentRes(a)}}},[t._v(t._s(a))])})],2),i("div",{staticClass:"buttons f wrap"},[i("like-btn",{attrs:{vid:t.v._id}})],1),i("h1",[t._v(t._s(t.v.title))])]),i("div",{staticClass:"related f"},t._l(t.v.related,function(e){return i("vid-thumb",{key:e._id,attrs:{isHover:t.relatedHover==e._id,v:e},on:{play:function(i){t.relatedHover=e._id}}})}),1)]:i("div",{staticClass:"f fc",staticStyle:{"min-height":"400px","justify-content":"center"}},[i("loading",{attrs:{width:"120",height:"120",h2Text:"Loading video"}})],1)],2)},staticRenderFns:[]}},662:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"save-icon f fc",on:{click:function(e){return t.save()}}},[t.isLoading?i("loading"):i("i",{staticClass:"mdi ",class:[t.isSaved?"mdi-heart":"mdi-heart-outline"]}),i("p",[t._v(t._s(t.isSaved?"video saved!":"save video"))])],1)},staticRenderFns:[]}}});