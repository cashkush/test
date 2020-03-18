webpackJsonp([6],{254:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=(0,s.createStore)(),n=(0,l.createRouter)(),r=(0,d.createI18n)(e.lang);return(0,f.sync)(t,n),{app:new i.default({router:n,store:t,i18n:r,ssrContext:e,render:function(e){return e(c.default)}}),router:n,store:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.createApp=o,n(305);var a=n(70),i=r(a),u=n(538),c=r(u),s=n(316),l=n(311),f=n(685),d=n(314),h=n(677),p=r(h),m=n(307),v=r(m),g=n(308),w=r(g),_=n(306),y=r(_);i.default.use(y.default),i.default.use(w.default),i.default.use(v.default),i.default.use(p.default)},255:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(318),u=function(e){return e&&e.__esModule?e:{default:e}}(i),c=n(71),s=n(115),l=function(){function e(t,n){o(this,e),this.connection=t,this.store=n,(0,c.observe)(u.default.listeners,function(e){"add"===e.type?t.on(e.name,function(t){u.default.emit(e.name,t)}):"delete"==e.type&&t.off(e.name)})}return a(e,[{key:"install",value:function(e){var t=this;if(!this.connection)throw new Error("[Vue-Socket.io] cannot locate connection");e.prototype.$authToken=c.observable.box({_id:!1}),e.prototype.$connState=c.observable.box(""),e.prototype.$socket=this.connection,this.connection.on("authenticate",function(n){e.prototype.$authToken.set(t.connection.authToken)}),(0,c.observe)(e.prototype.$authToken,function(e){if(e.oldValue&&e.oldValue._id&&e.newValue&&e.newValue._id&&e.newValue._id!=e.oldValue._id){var n={};u.default.channels.forEach(function(e,r){n[r]={},(0,s.forEach)(e,function(e,o){n[r][o]=t.connection.subscribe("priv/"+t.connection.authToken._id+"/"+o),n[r][o].watch(e.watchers()[0]),e.unsubscribe(),e.unwatch()})}),u.default.channels.clear(),Object.keys(n).forEach(function(e){return u.default.channels.set(e,n[e])})}}),this.connection.on("disconnect",function(){e.prototype.$authToken.set({})}),this.store&&(Object.keys(this.store._mutations).forEach(function(e){e.startsWith("SOCKET_")&&u.default.addListener(e.replace("SOCKET_",""),function(n){t.store.commit(e.toUpperCase(),n)},{_uid:"store"})}),["connect","error","disconnect","connecting","reconnect"].forEach(function(n){t.connection.on(n,function(r){e.prototype.$connState.set(n),t.store.commit("SET_CONNECTION_STATE",n)})})),e.mixin({created:function(){var e=this,t=this.$options.sockets;t&&Object.keys(t).forEach(function(){var n=r(regeneratorRuntime.mark(function n(r){var o,a,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.startsWith("channel_")){n.next=11;break}return n.next=3,(0,c.when)(function(){return e.$authToken.get()._id&&"connect"==e.$connState.get()});case 3:o=e.$authToken.get()._id,a=r.replace("channel_",""),u.default.channels.has(e._uid)||u.default.channels.set(e._uid,{}),i=u.default.channels.get(e._uid),i[a]=e.$socket.subscribe("priv/"+o+"/"+a),i[a].watch(function(n){return t[r].call(e,n)}),n.next=12;break;case 11:u.default.addListener(r,t[r],e);case 12:case"end":return n.stop()}},n,e)}));return function(e){return n.apply(this,arguments)}}())},beforeDestroy:function(){var e=this.$options.sockets;if(e){u.default.removeListeners(this);var t=u.default.channels.get(this._uid);if(!t)return;Object.keys(t).forEach(function(n){t[n].unwatch(e[n]),t[n].watchers().length<1&&t[n].unsubscribe()})}}})}}]),e}();t.default=l},263:function(e,t,n){function r(e){var t=o[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var o={"./empty.vue":[690,4],"./home.vue":[691,1],"./mysavedvideos.vue":[692,3],"./search.vue":[693,2],"./video.vue":[694,0]};r.keys=function(){return Object.keys(o)},e.exports=r,r.id=263},310:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}var a=n(70),i=o(a);n(256);var u=n(254),c=(n(71),n(255)),s=o(c),l=n(257),f=o(l),d=n(258),h=o(d),p=n(259),m=o(p),v=n(252),g=r(v),w=n(253),_=r(w),y=n(260),b=o(y);i.default.use(b.default),i.default.use(h.default),m.default.color="rgba(255, 255, 255, 0.35)",i.default.directive("ripple",m.default);try{var k=(0,u.createApp)({lang:(navigator.language||navigator.userLanguage||"en").substr(0,2).toLowerCase()}),O=k.app,$=k.router,T=k.store;i.default.use(new s.default(f.default.connect({hostname:"idkdev.beapoker.pro",port:443,secure:!0,ackTimeout:1e4,query:{},autoReconnectOptions:{initialDelay:1e3,randomness:2e3,multiplier:1.5,maxDelay:4e3}}),T)),g.init({dsn:"https://efc237c408b44f3a9be8d0c875fc5be6@sentry.io/3978337",integrations:[new _.Vue({Vue:i.default,attachProps:!0})]}),window.__INITIAL_STATE__&&T.replaceState(window.__INITIAL_STATE__),$.onReady(function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:O.$store.commit("setPath",window.location.hash),t=localStorage.getItem(O.$socket.authTokenName),O.$socket.emit("login",t,function(e,t){T.usr=t}),n=localStorage.getItem("usr"),n&&(T.usr=n),window["ó"]=O.$socket,O.$mount("#app");case 7:case"end":return e.stop()}},e,void 0)})))}catch(e){alert(e)}},311:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){return n(263)("./"+e+".vue")}}function a(){return new s.default({mode:"hash",scrollBehavior:function(){return{y:0}},routes:[{name:"home",path:"/",component:o("home")},{name:"search",path:"/search/:search*",component:o("home")},{name:"video",path:"/v/:id/*",component:o("video")},{name:"404",path:"*",component:o("home")}]})}Object.defineProperty(t,"__esModule",{value:!0}),t.createRouter=a;var i=n(70),u=r(i),c=n(678),s=r(c);u.default.use(s.default)},312:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={isTouch:function(){var e=" -webkit- -moz- -o- -ms- ".split(" ");if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)return!0;var t=["(",e.join("touch-enabled),("),"heartz",")"].join("");return function(e){return window.matchMedia(e).matches}(t)}}},313:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={isConnected:function(e){return console.log("getter isConn",e.connState),["connect","connected","reconnect"].includes(e.connState)},screenSize:function(e){switch(!0){case e.screen.w<520:return"m";case e.screen.w<950:return"t";default:return"d"}}}},314:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={};return Object.keys(f.default).map(function(n){t[n]=f.default[n][e]}),t}function a(e){var t=Object.keys(d).indexOf(e)>-1?e:"en";return new s.default({locale:t,messages:d})}Object.defineProperty(t,"__esModule",{value:!0}),t.createI18n=a;var i=n(70),u=r(i),c=n(676),s=r(c),l=n(315),f=r(l);u.default.use(s.default);var d={en:o("en"),it:o("it")}},315:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},316:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return new c.default.Store({state:{publicPath:"https://idkdev.beapoker.pro/public/",connState:"",locale:"it",screen:{w:m.innerHeight,h:m.innerWidth},usr:{token:!1},path:[],siteOptions:{thumbSize:3},videos:{},metas:{script:[],link:[{rel:"stylesheet",href:"https://unpkg.com/@videojs/themes@1/dist/fantasy/index.css"}]}},actions:l.default,mutations:d.default,getters:p.default})}Object.defineProperty(t,"__esModule",{value:!0}),t.createStore=o;var a=n(70),i=r(a),u=n(169),c=r(u),s=n(312),l=r(s),f=n(317),d=r(f),h=n(313),p=r(h);i.default.use(c.default);var m={innerHeight:0,innerWidth:0}},317:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(115);t.default={SET_CONNECTION_STATE:function(e,t){e.connState=t},SOCKET_LOGIN:function(e,t){Object.assign(e.usr,t),localStorage.setItem("usr",e.usr)},LOGOUT:function(e){e.usr={}},setScreen:function(e,t){t.w&&(e.screen.w=t.w),t.h&&(e.screen.h=t.h)},setPath:function(e,t){e.path=t.split("/").slice(1)},SET_SITE_OPTION:function(e,t){Object.assign(e.siteOptions,t)},SOCKET_ADD_META:function(e,t){var n=t.key,r=t.val;e.metas[n].push(r)}}},318:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(71);t.default=new(function(){function e(){r(this,e),this.listeners=a.observable.map(null,{deep:!1,name:"listeners"}),this.channels=a.observable.map(null,{deep:!1,name:"channels"})}return o(e,[{key:"addListener",value:function(e,t,n){this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push({callback:t,vm:n})}},{key:"removeListeners",value:function(e){var t=this;this.listeners.toJS().forEach(function(e,n){e.length||t.listeners.delete(n)})}},{key:"emit",value:function(e,t){var n=this.listeners.get(e);return!(!n||!n.length)&&(n.forEach(function(e){e.callback.call(e.vm,t)}),!0)}}]),e}())},319:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(169),u=n(115),c=n(539),s=r(c),l=n(540),f=r(l),d=n(71),h=n(261),p=n(262);t.default={data:function(){return{searchOpened:!1,menuOpened:!1,search:"",logo:"/public/img/www.ufap.it.png"}},components:{myfooter:s.default,mymenu:f.default},mounted:function(){var e=this;return o(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("nodeenv","production"),e.$root.gtag=d.observable.box(!1),e.logo="/public/img/"+window.location.host+".png",e.$store.commit("setScreen",{w:window.innerWidth,h:window.innerHeight}),window.addEventListener("resize",(0,u.debounce)(function(t){e.$store.commit("setScreen",{w:window.innerWidth,h:window.innerHeight})},300)),n=localStorage.getItem("locale"),n&&(e.$i18n.locale=n),e.$watch("$route.path",function(){var t=o(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n&&e.$store.commit("setPath",n),e.menuOpened&&(e.menuOpened=!1),t.prev=2,t.next=5,(0,d.when)(function(){return e.$root.gtag.get()});case 5:gtag("config",e.$store.state.gtagId,{page_path:n,uid:e.$authToken.get()._id}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.log("err meta",t.t0);case 11:case"end":return t.stop()}},t,e,[[2,8]])}));return function(e){return t.apply(this,arguments)}}(),{immediate:!0}),e.$store.state.gtagId&&(e.$store.commit("SOCKET_ADD_META",{key:"script",val:{src:"https://www.googletagmanager.com/gtag/js?id="+e.$store.state.gtagId,async:!0,vmid:"gtag"}}),e.$store.commit("SOCKET_ADD_META",{key:"script",val:{innerHTML:"window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', "+JSON.stringify(e.$store.state.gtagId)+");",vmid:"analytics"}}),e.$root.changeLocale=function(t){e.$i18n.locale=t,e.$root.$emit("localeChange",t),e.$forceUpdate(),localStorage.setItem("locale",t)},(0,h.interval)(500).pipe((0,p.takeWhile)(function(){return"undefined"==typeof gtag})).toPromise().then(o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$root.gtag.set(!0),t.next=3,(0,d.when)(function(){return e.$authToken.get()._id});case 3:gtag("set",{user_id:e.$authToken.get()._id}),gtag("event","login",{uid:e.$authToken.get()._id,event_label:e.$authToken.get()._id}),gtag("event","timing_complete",{name:"login",value:~~performance.now()});case 6:case"end":return t.stop()}},t,e)}))),e.$root.$once("hover",function(){var t=o(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.when)(function(){return e.$root.gtag.get()});case 2:gtag("event","hover",{_id:n});case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()));case 9:case"end":return t.stop()}},t,e)}))()},methods:{startSearch:function(){if(this.searchOpened=!1,!(this.search.length<3))return this.$router.push({name:"search",params:{search:this.search}}),!1}},computed:a({},(0,i.mapState)(["connState","screen","path"]),(0,i.mapGetters)(["isConnected"])),beforeDestroy:function(){gtag&&gtag("event","exit",{}),this.$socket.disconnect()},sockets:{error:function(e){gtag&&gtag("event","exception",{description:e.message,fatal:!0})}},metaInfo:function(){return a({},this.metas,this.$store.state.metas)},watch:{}}},320:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"empty",data:function(){return{disclaimerOpened:!1,host:""}},mounted:function(){this.host=window.location.hostname}}},321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"empty",data:function(){return{isMounted:!1}},mounted:function(){var e=this;setTimeout(function(){e.isMounted=!0},100)},methods:{close:function(){var e=this;this.isMounted=!1,setTimeout(function(){e.$emit("close")},500)}},computed:{}}},525:function(e,t){},526:function(e,t){},527:function(e,t){},538:function(e,t,n){function r(e){n(527)}var o=n(114)(n(319),n(543),r,null,null);e.exports=o.exports},539:function(e,t,n){function r(e){n(526)}var o=n(114)(n(320),n(542),r,"data-v-225644a3",null);e.exports=o.exports},540:function(e,t,n){function r(e){n(525)}var o=n(114)(n(321),n(541),r,"data-v-06264332",null);e.exports=o.exports},541:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"my-menu"}},[n("div",{class:{opened:e.isMounted},attrs:{id:"close-menu"},on:{click:function(t){return e.close()}}}),n("div",{staticClass:"f fc ja",class:{opened:e.isMounted},attrs:{id:"menu-content"}},[n("router-link",{staticClass:"f",attrs:{to:"/"}},[n("i",{staticClass:"mdi mdi-home",staticStyle:{"font-size":"24px",padding:"10px"}}),n("span",[e._v("HOME")])]),n("div",[e._v(" nothing here yet , check later ")])],1)])},staticRenderFns:[]}},542:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ff"},[n("div",{staticClass:"footer f"},[n("a",{on:{click:function(t){e.disclaimerOpened=!0}}},[e._v("DISCALIMER")])]),n("b-modal",{attrs:{active:e.disclaimerOpened},on:{"update:active":function(t){e.disclaimerOpened=t}}},[n("div",{staticClass:"content"},[e._v("\n        All videos, images and all other multimedia parts are not property or made by the website as no one of them is hosted, controlled or reviewed , any legal action regarding the content, copyright is not blameable to this website."),n("br"),e._v("\n        The use of this website declares that your age satisfies your country laws."),n("br"),e._v("\n        Any content remove request could be sent to "),n("p",[e._v(" abuse @ "+e._s(e.host))])])])],1)},staticRenderFns:[]}},543:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.$ssrContext?e._e():[n("div",{attrs:{id:"top"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"fullw header-wrap",class:{opened:e.searchOpened}},[n("div",{staticClass:"f"},[n("i",{staticClass:"mdi mdi-menu",on:{click:function(t){e.menuOpened=!0}}}),n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:e.logo,id:"logo"}})]),n("i",{staticClass:"mdi mdi-magnify",on:{click:function(t){e.searchOpened=!0}}})],1),n("div",{staticClass:"f searchbar",staticStyle:{left:"100%"}},[n("form",{on:{submit:function(t){return e.startSearch()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),n("i",{staticClass:"mdi mdi-magnify",on:{click:function(t){return e.startSearch()}}})])])])]),n("transition",{attrs:{name:"fade",delay:1500,mode:"out-in"}},[n("router-view",{staticClass:"router-view"})],1),n("myfooter"),e.menuOpened?n("mymenu",{on:{close:function(t){e.menuOpened=!1}}}):e._e()]],2)},staticRenderFns:[]}},687:function(e,t){}},[310]);