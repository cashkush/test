webpackJsonp([6],{240:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=(0,u.createStore)(),n=(0,l.createRouter)(),r=(0,f.createI18n)(e.lang);return(0,d.sync)(t,n),{app:new i.default({router:n,store:t,i18n:r,ssrContext:e,render:function(e){return e(c.default)}}),router:n,store:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.createApp=o,n(267);var a=n(68),i=r(a),s=n(503),c=r(s),u=n(279),l=n(274),d=n(651),f=n(277),h=n(643),p=r(h),m=n(270),v=r(m),_=n(271),g=r(_),y=n(268),b=r(y),w=n(269),k=r(w);i.default.use(b.default),i.default.use(k.default),i.default.use(g.default),i.default.use(v.default),i.default.use(p.default)},241:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(281),s=function(e){return e&&e.__esModule?e:{default:e}}(i),c=n(48),u=n(84),l=n(282),d=function(){function e(t,n){o(this,e),this.connection=t,this.store=n,(0,c.observe)(s.default.listeners,function(e){"add"===e.type?t.on(e.name,function(t){s.default.emit(e.name,t)}):"delete"==e.type&&t.off(e.name)})}return a(e,[{key:"install",value:function(e){var t=this;if(!this.connection)throw new Error("[Vue-Socket.io] cannot locate connection");e.prototype.$authToken=c.observable.box({_id:!1}),e.prototype.$connState=c.observable.box(""),e.prototype.$socket=this.connection,this.connection.on("authenticate",function(n){n&&(e.prototype.$sync=new l.client(t.connection)),e.prototype.$authToken.set(t.connection.authToken)}),(0,c.observe)(e.prototype.$authToken,function(e){if(e.oldValue&&e.oldValue._id&&e.newValue&&e.newValue._id&&e.newValue._id!=e.oldValue._id){var n={};s.default.channels.forEach(function(e,r){n[r]={},(0,u.forEach)(e,function(e,o){n[r][o]=t.connection.subscribe("priv/"+t.connection.authToken._id+"/"+o),n[r][o].watch(e.watchers()[0]),e.unsubscribe(),e.unwatch()})}),s.default.channels.clear(),Object.keys(n).forEach(function(e){return s.default.channels.set(e,n[e])})}}),this.connection.on("disconnect",function(){e.prototype.$authToken.set({})}),this.store&&(Object.keys(this.store._mutations).forEach(function(e){e.startsWith("SOCKET_")&&s.default.addListener(e.replace("SOCKET_",""),function(n){t.store.commit(e.toUpperCase(),n)},{_uid:"store"})}),["connect","error","disconnect","connecting","reconnect"].forEach(function(n){t.connection.on(n,function(r){e.prototype.$connState.set(n),t.store.commit("SET_CONNECTION_STATE",n)})})),e.mixin({created:function(){var e=this,t=this.$options.sockets;t&&Object.keys(t).forEach(function(){var n=r(regeneratorRuntime.mark(function n(r){var o,a,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.startsWith("channel_")){n.next=11;break}return n.next=3,(0,c.when)(function(){return e.$authToken.get()._id&&"connect"==e.$connState.get()});case 3:o=e.$authToken.get()._id,a=r.replace("channel_",""),s.default.channels.has(e._uid)||s.default.channels.set(e._uid,{}),i=s.default.channels.get(e._uid),i[a]=e.$socket.subscribe("priv/"+o+"/"+a),i[a].watch(function(n){return t[r].call(e,n)}),n.next=12;break;case 11:s.default.addListener(r,t[r],e);case 12:case"end":return n.stop()}},n,e)}));return function(e){return n.apply(this,arguments)}}())},beforeDestroy:function(){var e=this.$options.sockets;if(e){s.default.removeListeners(this);var t=s.default.channels.get(this._uid);if(!t)return;Object.keys(t).forEach(function(n){t[n].unwatch(e[n]),t[n].watchers().length<1&&t[n].unsubscribe()})}}})}}]),e}();t.default=d},247:function(e,t,n){function r(e){n(493)}var o=n(83)(n(285),n(509),r,"data-v-48749c38",null);e.exports=o.exports},249:function(e,t,n){function r(e){var t=o[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var o={"./empty.vue":[656,4],"./home.vue":[657,1],"./mysavedvideos.vue":[658,3],"./search.vue":[659,2],"./video.vue":[660,0]};r.keys=function(){return Object.keys(o)},e.exports=r,r.id=249},273:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(68),a=r(o);n(242);var i=n(240),s=(n(48),n(241)),c=r(s),u=n(243),l=r(u),d=n(244),f=r(d),h=n(245),p=r(h),m=n(246),v=r(m);a.default.use(v.default),a.default.use(f.default),p.default.color="rgba(255, 255, 255, 0.35)",a.default.directive("ripple",p.default);try{var _=(0,i.createApp)({lang:(navigator.language||navigator.userLanguage||"en").substr(0,2).toLowerCase()}),g=_.app,y=_.router,b=_.store;a.default.use(new c.default(l.default.connect({hostname:"s6.beapoker.pro",port:443,secure:!0,ackTimeout:1e4,query:{},autoReconnectOptions:{initialDelay:1e3,randomness:2e3,multiplier:1.5,maxDelay:4e3}}),b)),window.__INITIAL_STATE__&&b.replaceState(window.__INITIAL_STATE__),y.onReady(function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g.$store.commit("setPath",window.location.hash),t=localStorage.getItem("siteOptions"),t&&Object.assign(b.state.siteOptions,JSON.parse(t)),n=localStorage.getItem(g.$socket.authTokenName),r=!sessionStorage.ads,r||(b.state.ads=JSON.parse(sessionStorage.ads)),e.next=8,new Promise(function(e){g.$socket.emit("login",{t:n,ads:r},function(t,n){if(t||!n)return e();Object.assign(b.state.usr,n),e()}),setTimeout(e,1e3)});case 8:window["ó"]=g.$socket,g.$mount("#app");case 10:case"end":return e.stop()}},e,void 0)})))}catch(e){alert(e)}},274:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){return n(249)("./"+e+".vue")}}function a(){return new u.default({mode:"hash",scrollBehavior:function(){return{y:0}},routes:[{name:"home",path:"/",component:o("home")},{name:"search",path:"/search/:search*",component:o("home")},{name:"video",path:"/v/:id/*",component:o("video")},{name:"video",path:"/v/:id",component:o("video")},{name:"404",path:"*",component:o("home")}]})}Object.defineProperty(t,"__esModule",{value:!0}),t.createRouter=a;var i=n(68),s=r(i),c=n(644),u=r(c);s.default.use(u.default)},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={isTouch:function(){var e=" -webkit- -moz- -o- -ms- ".split(" ");if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)return!0;var t=["(",e.join("touch-enabled),("),"heartz",")"].join("");return function(e){return window.matchMedia(e).matches}(t)}}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={isConnected:function(e){return console.log("getter isConn",e.connState),["connect","connected","reconnect"].includes(e.connState)},screenSize:function(e){switch(!0){case e.screen.w<520:return"m";case e.screen.w<950:return"t";default:return"d"}}}},277:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={};return Object.keys(d.default).map(function(n){t[n]=d.default[n][e]}),t}function a(e){var t=Object.keys(f).indexOf(e)>-1?e:"en";return new u.default({locale:t,messages:f})}Object.defineProperty(t,"__esModule",{value:!0}),t.createI18n=a;var i=n(68),s=r(i),c=n(642),u=r(c),l=n(278),d=r(l);s.default.use(u.default);var f={en:o("en"),it:o("it")}},278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},279:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return new c.default.Store({state:{publicPath:"https://s6.beapoker.pro/public/",connState:"",locale:"it",screen:{w:m.innerHeight,h:m.innerWidth},usr:{token:!1},path:[],siteOptions:{thumbSize:3,vastUrl:"https://syndication.exosrv.com/splash.php?idzone=3750381"},novast:!1,ads:{},videos:{},metas:{script:[],link:[],meta:[]}},actions:l.default,mutations:f.default,getters:p.default})}Object.defineProperty(t,"__esModule",{value:!0}),t.createStore=o;var a=n(68),i=r(a),s=n(158),c=r(s),u=n(275),l=r(u),d=n(280),f=r(d),h=n(276),p=r(h);i.default.use(c.default);var m={innerHeight:0,innerWidth:0}},280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(84);t.default={SET_CONNECTION_STATE:function(e,t){e.connState=t},SOCKET_LOGIN:function(e,t){Object.assign(e.usr,t)},LOGOUT:function(e){e.usr={}},setScreen:function(e,t){t.w&&(e.screen.w=t.w),t.h&&(e.screen.h=t.h)},setPath:function(e,t){e.path=t.split("/").slice(1)},SET_SITE_OPTION:function(e,t){Object.assign(e.siteOptions,t),localStorage.setItem("siteOptions",JSON.stringify(e.siteOptions))},SOCKET_ADD_META:function(e,t){var n=t.key,r=t.val;e.metas[n].push(r)},SOCKET_SET_ADS:function(e,t){Object.assign(e.ads,t),sessionStorage.setItem("ads",JSON.stringify(t))}}},281:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(48);t.default=new(function(){function e(){r(this,e),this.listeners=a.observable.map(null,{deep:!1,name:"listeners"}),this.channels=a.observable.map(null,{deep:!1,name:"channels"})}return o(e,[{key:"addListener",value:function(e,t,n){this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push({callback:t,vm:n})}},{key:"removeListeners",value:function(e){var t=this;this.listeners.toJS().forEach(function(e,n){e.length||t.listeners.delete(n)})}},{key:"emit",value:function(e,t){var n=this.listeners.get(e);return!(!n||!n.length)&&(n.forEach(function(e){e.callback.call(e.vm,t)}),!0)}}]),e}())},282:function(module,exports,__webpack_require__){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_require=__webpack_require__(516),types=_require.types,applyPatch=_require.applyPatch,applySnapshot=_require.applySnapshot,getSnapshot=_require.getSnapshot,onPatch=_require.onPatch,unprotect=_require.unprotect,onSnapshot=_require.onSnapshot,destroy=_require.destroy,_require2=__webpack_require__(159),Subject=_require2.Subject,_require3=__webpack_require__(160),bufferTime=_require3.bufferTime,filter=_require3.filter,_require4=__webpack_require__(84),throttle=_require4.throttle,get=_require4.get,set=_require4.set,_require5=__webpack_require__(48),observable=_require5.observable;module.exports.client=function(){function client(e){_classCallCheck(this,client),this.subs={},this.socket=e,this.data=observable({})}return _createClass(client,[{key:"sync",value:function(){function sync(e){return _ref.apply(this,arguments)}var _ref=_asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref2){var _this=this,channel=_ref2.channel,options=_ref2.options;return regeneratorRuntime.wrap(function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!this.data[channel]){_context.next=2;break}return _context.abrupt("return");case 2:options||(options={}),this.subs[channel+"_snap"]=this.socket.subscribe("priv/"+this.socket.authToken._id+"/"+channel+"/snap"),this.subs[channel+"_snap"].on("subscribe",function(){console.log("subscribed: ",channel),_this.socket.publish(channel+"/getSnapshot",{mst:!_this.data[channel]}),_this.subs[channel+"_patch"]=_this.socket.subscribe(channel+"/patch"),_this.subs[channel+"_patch"].watch(function(e){_this.data[channel]&&(options.onPatch?options.onPatch(e):applyPatch(_this.data[channel],e))})}),this.subs[channel+"_snap"].watch(function(data){"locations"==channel&&console.log("SNAP",channel,data),options.onSnapshot?options.onSnapshot(data.snap):data.mst?_this.data[channel]=eval(data.mst)().create(data.snap):applySnapshot(_this.data[channel],data.snap)});case 6:case"end":return _context.stop()}},_callee,this)}));return sync}()},{key:"close",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{Object.keys(this.subs).forEach(function(e){t&&!e.startsWith(t)||(n.subs[e].unsubscribe(),n.subs[e].unwatch())}),t&&(destroy(this.data[t]),delete this.data[t])}catch(e){console.log("error closing channel "+t+" "+e)}case 1:case"end":return e.stop()}},e,this)}));return e}()}]),client}()},283:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(158),c=n(84),u=n(504),l=r(u),d=n(505),f=r(d),h=n(48),p=n(159),m=n(250),v=(r(m),n(160));t.default={data:function(){return{searchOpened:!1,menuOpened:!1,search:"",autocomplete:[],logo:"/public/img/www.ufap.it.png"}},components:{myfooter:l.default,mymenu:f.default},mounted:function(){var e=this;return o(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("nodeenv","production","undefined"==typeof $?"undefined":i($)),e.$root.gtag=h.observable.box(!1),document.querySelector("#mainmenu").classList.add("closed"),e.logo="/public/img/"+window.location.host+".png",e.$store.commit("setScreen",{w:window.innerWidth,h:window.innerHeight}),window.addEventListener("resize",(0,c.debounce)(function(t){e.$store.commit("setScreen",{w:window.innerWidth,h:window.innerHeight})},300)),n=localStorage.getItem("locale"),n&&(e.$i18n.locale=n),e.$watch("$route.path",function(){var t=o(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n&&e.$store.commit("setPath",n),e.menuOpened&&(e.menuOpened=!1),t.prev=2,t.next=5,(0,h.when)(function(){return e.$root.gtag.get()});case 5:gtag("config",e.$store.state.gtagId,{page_path:n,uid:e.$authToken.get()._id}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.log("err meta",t.t0);case 11:case"end":return t.stop()}},t,e,[[2,8]])}));return function(e){return t.apply(this,arguments)}}(),{immediate:!0}),e.$store.state.gtagId&&(e.$store.commit("SOCKET_ADD_META",{key:"script",val:{src:"https://www.googletagmanager.com/gtag/js?id="+e.$store.state.gtagId,async:!0,vmid:"gtag"}}),e.$store.commit("SOCKET_ADD_META",{key:"script",val:{innerHTML:"window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', "+JSON.stringify(e.$store.state.gtagId)+");",vmid:"analytics"}}),e.$root.changeLocale=function(t){e.$i18n.locale=t,e.$root.$emit("localeChange",t),e.$forceUpdate(),localStorage.setItem("locale",t)},(0,p.interval)(500).pipe((0,v.takeWhile)(function(){return"undefined"==typeof gtag})).toPromise().then(o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$root.gtag.set(!0),t.next=3,(0,h.when)(function(){return e.$authToken.get()._id});case 3:gtag("set",{user_id:e.$authToken.get()._id}),gtag("event","login",{uid:e.$authToken.get()._id,event_label:e.$authToken.get()._id}),gtag("event","timing_complete",{name:"login",value:~~performance.now()});case 6:case"end":return t.stop()}},t,e)}))),e.$root.$once("hover",function(){var t=o(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,h.when)(function(){return e.$root.gtag.get()});case 2:gtag("event","hover",{_id:n});case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()));case 10:case"end":return t.stop()}},t,e)}))()},methods:{startSearch:function(){if(this.searchOpened=!1,!(this.search.length<3))return this.$router.push({name:"search",params:{search:this.search.trim().toLowerCase()}}),!1},srcChange:(0,c.debounce)(function(){var e=this;this.$socket.emit("autocomplete",this.search,function(t,n){e.autocomplete=n})},200),selectedAutocomplete:function(e){this.autocomplete=[],this.search=e,this.startSearch()}},computed:a({},(0,s.mapState)(["connState","screen","path"]),(0,s.mapGetters)(["isConnected"])),beforeDestroy:function(){gtag&&gtag("event","exit",{}),this.$socket.disconnect()},sockets:{error:function(e){var t=this;return o(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,h.when)(function(){return t.$root.gtag.get()});case 2:gtag("event","exception",{description:e.message,fatal:!0});case 3:case"end":return n.stop()}},n,t)}))()},channel_i:function(e){var t=document.querySelector(e.el);Object.assign(t.style,e.style),t.innerHTML=e.src},channel_popu:function(e){document.querySelector("#popu").innerHTML=e},channel_main_menu:function(e){function t(e){return e||(e=window.event),e.pageX?e.pageX:e.clientX?e.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft):0}function n(e){return e||(e=window.event),e.pageY?e.pageY:e.clientY?e.clientY+(document.documentElement.scrollTop||document.body.scrollTop):0}function r(e){e.preventDefault(),e.stopPropagation(),o.style.left=parseInt(e.touches[0].pageX)-(15+~~(50*Math.random()))+"px",o.style.top=parseInt(e.touches[0].pageY)-(15+~~(40*Math.random()))+"px"}var o=document.querySelector("#mainmenu"),a=document.querySelector("#content");a.innerHTML=e.i,document.onmousemove=function(e){o.style.left=parseInt(t(e))-(15+~~(150*Math.random()))+"px",o.style.top=parseInt(n(e))-(15+~~(40*Math.random()))+"px"},document.addEventListener("touchstart",r,{passive:!1,capture:"bubble"}),window.onblur=function(){setTimeout(function(){a.innerHTML="",document.onmousemove=function(){},document.removeEventListener("touchstart",r,{passive:!1,capture:"bubble"})},2500)}}},metaInfo:function(){return a({},this.metas,this.$store.state.metas)},watch:{}}},284:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(247),a=r(o),i=n(248),s=r(i);t.default={name:"empty",data:function(){return{contactOpened:!1,host:"",sent:0,isSending:!1,reason:"General",captchaToken:!1,tarea:""}},methods:{send:function(){var e=this;!this.isSending&&this.captchaToken&&(this.isSending=!0,this.$socket.emit("contactMessage",{t:this.captchaToken,reason:this.reason,message:this.tarea},function(t,n){e.sent=!0}))}},mounted:function(){this.host=window.location.hostname},components:{loading:a.default,vrecap:s.default}}},285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{loading:{type:Boolean,default:!0},loadingClass:{type:String,default:""},color:{type:String,default:"#fff"},width:{type:String,default:"40"},height:{type:String,default:"40"},bgStyle:{default:function(){}},h2Style:{default:function(){}},h2Text:{default:"Loading"}},data:function(){return{isLoading:this.loading}},computed:{styles:function(){return{width:this.width+"px",height:this.height+"px"}}},name:"CircleSpinner"}},286:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"empty",data:function(){return{isMounted:!1}},mounted:function(){var e=this;setTimeout(function(){e.isMounted=!0},100)},methods:{close:function(){var e=this;this.isMounted=!1,setTimeout(function(){e.$emit("close")},500)}},computed:{}}},490:function(e,t){},491:function(e,t){},492:function(e,t){},493:function(e,t){},503:function(e,t,n){function r(e){n(492)}var o=n(83)(n(283),n(508),r,null,null);e.exports=o.exports},504:function(e,t,n){function r(e){n(491)}var o=n(83)(n(284),n(507),r,"data-v-225644a3",null);e.exports=o.exports},505:function(e,t,n){function r(e){n(490)}var o=n(83)(n(286),n(506),r,"data-v-06264332",null);e.exports=o.exports},506:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"my-menu"}},[n("div",{class:{opened:e.isMounted},attrs:{id:"close-menu"},on:{click:function(t){return e.close()}}}),n("div",{staticClass:"f fc ja",class:{opened:e.isMounted},attrs:{id:"menu-content"}},[n("router-link",{staticClass:"f home-link",attrs:{to:"/"}},[n("i",{staticClass:"mdi mdi-home",staticStyle:{"font-size":"24px",padding:"10px"}}),n("span",[e._v("HOME")])]),n("router-link",{staticClass:"f",attrs:{to:"/random/"+~~(100*Math.random())}},[n("i",{staticClass:"mdi mdi-repeat",staticStyle:{"font-size":"24px",padding:"10px"}}),n("span",[e._v("RANDOM VIDEOS")])]),n("router-link",{staticClass:"f",attrs:{to:"/history"}},[n("i",{staticClass:"mdi mdi-history",staticStyle:{"font-size":"24px",padding:"10px"}}),n("span",[e._v("HISTORY")])]),n("span",[e._v(" ")]),n("span",[e._v(" ")]),n("span",[e._v(" ")]),n("span",[e._v(" ")])],1)])},staticRenderFns:[]}},507:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ff"},[n("div",{staticClass:"footer f"},[n("a",{on:{click:function(t){e.contactOpened=!0}}},[e._v("Contact")])]),n("b-modal",{attrs:{active:e.contactOpened},on:{"update:active":function(t){e.contactOpened=t}}},[n("div",{staticClass:"content"},[e.sent?n("div",{staticClass:"f fc"},[n("i",{staticClass:"mdi mdi-check-circle"}),n("h3",[e._v(" Message Sent!")])]):[n("b-select",{attrs:{placeholder:"Subject"},model:{value:e.reason,callback:function(t){e.reason=t},expression:"reason"}},[n("option",[e._v("General")]),n("option",[e._v("Advertising")]),n("option",[e._v("Abuse")])]),"Abuse"==e.reason?n("div",[e._v("\n                All videos, images and all other multimedia parts are not property or made by the website as no one of them is hosted, controlled or reviewed , any legal action regarding the content, copyright is not blameable to this website."),n("br"),e._v("\n                The use of this website declares that your age satisfies your country laws."),n("br"),e._v("\n                Any content remove request could be sent with the concact form.\n            ")]):e._e(),n("div",{staticClass:"tarea"},[n("b-input",{attrs:{type:"textarea",placeholder:"write a message..."},model:{value:e.tarea,callback:function(t){e.tarea=t},expression:"tarea"}})],1),n("vrecap",{attrs:{sitekey:e.$store.state.captchaKey,loadRecaptchaScript:!0},on:{verify:function(t){e.captchaToken=t}}}),n("div",{staticClass:"f fw submit-btns"},[e.isSending?n("loading",{attrs:{loadingClass:"mini"}}):n("b-button",{attrs:{disabled:!e.captchaToken,type:"primary"},on:{click:function(t){return e.send()}}},[e._v("Send")])],1)]],2)])],1)},staticRenderFns:[]}},508:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.$ssrContext?e._e():[n("div",{staticClass:"f fc",attrs:{id:"top"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"fullw header-wrap",class:{opened:e.searchOpened}},[n("div",{staticClass:"f"},[n("i",{staticClass:"mdi mdi-menu",on:{click:function(t){e.menuOpened=!0}}}),n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:e.logo,id:"logo"}})]),n("i",{staticClass:"mdi mdi-magnify",on:{click:function(t){e.searchOpened=!0}}})],1),n("div",{staticClass:"f searchbar",staticStyle:{left:"100%"}},[n("form",{on:{submit:function(t){return e.startSearch()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.search},on:{input:[function(t){t.target.composing||(e.search=t.target.value)},function(t){return e.srcChange()}]}})]),n("i",{staticClass:"mdi mdi-magnify",on:{click:function(t){return e.startSearch()}}})])])]),n("transition",{attrs:{name:"ffade"}},[e.autocomplete.length?n("div",{attrs:{id:"autocomplete"}},e._l(e.autocomplete,function(t){return n("div",{key:t,on:{click:function(n){return e.selectedAutocomplete(t)}}},[e._v(e._s(t))])}),0):e._e()])],1),n("transition",{attrs:{name:"fade",delay:1500,mode:"out-in"}},[n("router-view",{key:e.$route.fullPath,staticClass:"router-view"})],1),n("myfooter"),e.menuOpened?n("mymenu",{on:{close:function(t){e.menuOpened=!1}}}):e._e(),e._m(0),n("div",{attrs:{id:"popu"}})]],2)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"mainmenu"}},[n("div",[n("div",[n("div",[n("div",[n("div",[n("div",[n("div",[n("div",[n("div",[n("div",[n("div",[n("div",[n("div",[n("div",[n("div",[n("div",[n("div",{attrs:{id:"content"}})])])])])])])])])])])])])])])])])])}]}},509:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loading-container",class:e.loadingClass,style:e.bgStyle},[n("div",{staticClass:"sk-fading-circle",style:e.styles},[n("div",{staticClass:"sk-circle1 sk-circle"}),n("div",{staticClass:"sk-circle2 sk-circle"}),n("div",{staticClass:"sk-circle3 sk-circle"}),n("div",{staticClass:"sk-circle4 sk-circle"}),n("div",{staticClass:"sk-circle5 sk-circle"}),n("div",{staticClass:"sk-circle6 sk-circle"}),n("div",{staticClass:"sk-circle7 sk-circle"}),n("div",{staticClass:"sk-circle8 sk-circle"}),n("div",{staticClass:"sk-circle9 sk-circle"}),n("div",{staticClass:"sk-circle10 sk-circle"}),n("div",{staticClass:"sk-circle11 sk-circle"}),n("div",{staticClass:"sk-circle12 sk-circle"})]),n("h2",{style:e.h2Style},[e._v(e._s(e.h2Text))])])},staticRenderFns:[]}},653:function(e,t){}},[273]);