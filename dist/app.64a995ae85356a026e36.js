webpackJsonp([4],{146:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=(0,s.createStore)(),n=(0,l.createRouter)(),r=(0,d.createI18n)(e.lang);return(0,f.sync)(t,n),{app:new i.default({router:n,store:t,i18n:r,ssrContext:e,render:function(e){return e(c.default)}}),router:n,store:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.createApp=o,n(156);var a=n(48),i=r(a),u=n(385),c=r(u),s=n(165),l=n(160),f=n(413),d=n(163),h=n(405),p=r(h),v=n(157),m=r(v);i.default.use(m.default),i.default.use(p.default)},147:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(167),c=r(u),s=n(70),l=n(99),f=n(391),d=r(f),h=function(){function t(e,n){a(this,t),this.connection=e,this.store=n,(0,s.observe)(c.default.listeners,function(t){"add"===t.type?e.on(t.name,function(e){c.default.emit(t.name,e)}):"delete"==t.type&&e.off(t.name)})}return i(t,[{key:"install",value:function(t){var n=this;if(!this.connection)throw new Error("[Vue-Socket.io] cannot locate connection");t.prototype.$authToken=s.observable.box({_id:!1}),t.prototype.$connState=s.observable.box(""),t.prototype.$socket=this.connection,this.connection.on("authenticate",function(r){t.prototype.$authToken.set(n.connection.authToken),d.default.set("signedToken",r,{domain:e.env.DOMAIN})}),(0,s.observe)(t.prototype.$authToken,function(e){if(e.oldValue&&e.oldValue._id&&e.newValue&&e.newValue._id&&e.newValue._id!=e.oldValue._id){var t={};c.default.channels.forEach(function(e,r){t[r]={},(0,l.forEach)(e,function(e,o){t[r][o]=n.connection.subscribe("priv/"+n.connection.authToken._id+"/"+o),t[r][o].watch(e.watchers()[0]),e.unsubscribe(),e.unwatch()})}),c.default.channels.clear(),Object.keys(t).forEach(function(e){return c.default.channels.set(e,t[e])})}}),this.connection.on("disconnect",function(){t.prototype.$authToken.set({})}),this.store&&(Object.keys(this.store._mutations).forEach(function(e){e.startsWith("SOCKET_")&&c.default.addListener(e.replace("SOCKET_",""),function(t){n.store.commit(e.toUpperCase(),t)},{_uid:"store"})}),["connect","error","disconnect","connecting","reconnect"].forEach(function(e){n.connection.on(e,function(r){t.prototype.$connState.set(e),n.store.commit("SET_CONNECTION_STATE",e)})})),t.mixin({created:function(){var e=this,t=this.$options.sockets;t&&Object.keys(t).forEach(function(){var n=o(regeneratorRuntime.mark(function n(r){var o,a,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.startsWith("channel_")){n.next=11;break}return n.next=3,(0,s.when)(function(){return e.$authToken.get()._id&&"connect"==e.$connState.get()});case 3:o=e.$authToken.get()._id,a=r.replace("channel_",""),c.default.channels.has(e._uid)||c.default.channels.set(e._uid,{}),i=c.default.channels.get(e._uid),i[a]=e.$socket.subscribe("priv/"+o+"/"+a),i[a].watch(function(n){return t[r].call(e,n)}),n.next=12;break;case 11:c.default.addListener(r,t[r],e);case 12:case"end":return n.stop()}},n,e)}));return function(e){return n.apply(this,arguments)}}())},beforeDestroy:function(){var e=this.$options.sockets;if(e){c.default.removeListeners(this);var t=c.default.channels.get(this._uid);if(!t)return;Object.keys(t).forEach(function(n){t[n].unwatch(e[n]),t[n].watchers().length<1&&t[n].unsubscribe()})}}})}}]),t}();t.default=h}).call(t,n(100))},155:function(e,t,n){function r(e){var t=o[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var o={"./empty.vue":[418,2],"./home.vue":[419,0],"./video.vue":[420,1]};r.keys=function(){return Object.keys(o)},e.exports=r,r.id=155},159:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(48),a=r(o);n(148);var i=n(146),u=(n(70),n(147)),c=r(u),s=n(149),l=r(s),f=n(151),d=r(f),h=n(152),p=r(h),v=n(150),m=r(v),g=n(153),w=r(g);a.default.use(w.default),a.default.use(d.default),p.default.color="rgba(255, 255, 255, 0.35)",a.default.directive("ripple",p.default);try{var _=(0,i.createApp)({lang:(navigator.language||navigator.userLanguage||"en").substr(0,2).toLowerCase()}),y=_.app,b=_.router,k=_.store;a.default.use(new c.default(l.default.connect({hostname:"192.168.43.187:8000",port:443,secure:!0,ackTimeout:1e4,query:{},autoReconnectOptions:{initialDelay:1e3,randomness:2e3,multiplier:1.5,maxDelay:4e3}}),k)),window.__INITIAL_STATE__&&k.replaceState(window.__INITIAL_STATE__),b.onReady(function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return window.videojs=m.default,e.next=3,new Promise(function(e){var t=localStorage.getItem(y.$socket.authTokenName);y.$socket.emit("login",t,function(t,n){y.$store.commit("SOCKET_LOGIN",n),e()})});case 3:y.$mount("#app"),window.socket=y.$socket;case 5:case"end":return e.stop()}},e,void 0)}))),"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js")}catch(e){alert(e)}},160:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){return n(155)("./"+e+".vue")}}function a(){return new s.default({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{name:"home",path:"/",component:o("home")},{name:"search",path:"/search/:search*",component:o("home")},{name:"video",path:"/v/:id",component:o("video")},{name:"404",path:"*",component:o("home")}]})}Object.defineProperty(t,"__esModule",{value:!0}),t.createRouter=a;var i=n(48),u=r(i),c=n(406),s=r(c);u.default.use(s.default)},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={isTouch:function(){var e=" -webkit- -moz- -o- -ms- ".split(" ");if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)return!0;var t=["(",e.join("touch-enabled),("),"heartz",")"].join("");return function(e){return window.matchMedia(e).matches}(t)}}},162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={isConnected:function(e){return console.log("getter isConn",e.connState),["connect","connected","reconnect"].includes(e.connState)},screenSize:function(e){switch(!0){case e.screen.w<520:return"m";case e.screen.w<950:return"t";default:return"d"}}}},163:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={};return Object.keys(f.default).map(function(n){t[n]=f.default[n][e]}),t}function a(e){var t=Object.keys(d).indexOf(e)>-1?e:"en";return new s.default({locale:t,messages:d})}Object.defineProperty(t,"__esModule",{value:!0}),t.createI18n=a;var i=n(48),u=r(i),c=n(404),s=r(c),l=n(164),f=r(l);u.default.use(s.default);var d={en:o("en"),it:o("it")}},164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},165:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return new c.default.Store({state:{publicPath:"https://192.168.43.187:8000/public/",connState:"",locale:"it",screen:{w:v.innerHeight,h:v.innerWidth},usr:{token:!1},path:[],siteOptions:{},siteSettings:{cookiesEnabled:!0,analyticsEnabled:!0},videos:{}},actions:l.default,mutations:d.default,getters:p.default})}Object.defineProperty(t,"__esModule",{value:!0}),t.createStore=o;var a=n(48),i=r(a),u=n(102),c=r(u),s=n(161),l=r(s),f=n(166),d=r(f),h=n(162),p=r(h);i.default.use(c.default);var v={innerHeight:0,innerWidth:0}},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(99);t.default={SET_CONNECTION_STATE:function(e,t){e.connState=t},SOCKET_LOGIN:function(e,t){e.usr=t},ASSIGN_USR:function(e,t){Object.assign(e.usr,t)},LOGOUT:function(e){e.usr={}},setScreen:function(e,t){t.w&&(e.screen.w=t.w),t.h&&(e.screen.h=t.h)},setPath:function(e,t){e.path=t.split("/").slice(1)},SET_SITE_SETTING:function(e,t){var n=t.path,o=t.v;(0,r.set)(e.siteSettings,n,o)}}},167:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(70);t.default=new(function(){function e(){r(this,e),this.listeners=a.observable.map(null,{deep:!1,name:"listeners"}),this.channels=a.observable.map(null,{deep:!1,name:"channels"})}return o(e,[{key:"addListener",value:function(e,t,n){this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push({callback:t,vm:n})}},{key:"removeListeners",value:function(e){var t=this;this.listeners.toJS().forEach(function(e,n){e.length||t.listeners.delete(n)})}},{key:"emit",value:function(e,t){var n=this.listeners.get(e);return!(!n||!n.length)&&(n.forEach(function(e){e.callback.call(e.vm,t)}),!0)}}]),e}())},168:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(102),i=n(99),u=n(386),c=function(e){return e&&e.__esModule?e:{default:e}}(u);t.default={data:function(){return{scripts:[]}},components:{myfooter:c.default},created:function(){},mounted:function(){var e=this;return r(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$store.commit("setScreen",{w:window.innerWidth,h:window.innerHeight}),window.addEventListener("resize",(0,i.debounce)(function(t){e.$store.commit("setScreen",{w:window.innerWidth,h:window.innerHeight})},300)),n=localStorage.getItem("locale"),n&&(e.$i18n.locale=n),!e.$store.state.gtagId){t.next=8;break}return e.scripts.push({src:"https://www.googletagmanager.com/gtag/js?id="+e.$store.state.gtagId,async:!0},{innerHTML:"window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', "+JSON.stringify(e.$store.state.gtagId)+");",vmid:"analytics"}),t.next=8,interval(500).pipe(takeWhile(function(){return"undefined"==typeof gtag})).toPromise().then(function(){e.$authToken.observe(function(e){var t=e.newValue;e.oldValue;t&&t._id&&(gtag("set",{user_id:t._id}),gtag("event","login",{uid:t._id,event_label:t._id}))},1)});case 8:e.$watch("$route.path",function(){var t=r(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n&&e.$store.commit("setPath",n),e.showDock=!(n.length>1);try{"undefined"!=typeof gtag&&gtag("config",e.$store.state.gtagId,{page_path:n,uid:e.$authToken.get()._id})}catch(e){console.log("err meta",e)}case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),{immediate:!0}),e.$root.changeLocale=function(t){e.$i18n.locale=t,e.$root.$emit("localeChange",t),e.$forceUpdate(),localStorage.setItem("locale",t)};case 10:case"end":return t.stop()}},t,e)}))()},methods:{},computed:o({},(0,a.mapState)(["connState","screen","path"]),(0,a.mapGetters)(["isConnected"])),beforeDestroy:function(){this.$socket.disconnect()},metaInfo:function(){return{title:"",meta:[{description:""}],script:this.scripts,link:[{rel:"stylesheet",href:"https://unpkg.com/@videojs/themes@1/dist/fantasy/index.css"}]}},watch:{}}},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"empty",data:function(){return{disclaimerOpened:!1,host:""}},mounted:function(){this.host=window.location.hostname}}},373:function(e,t){},374:function(e,t){},385:function(e,t,n){function r(e){n(374)}var o=n(101)(n(168),n(388),r,null,null);e.exports=o.exports},386:function(e,t,n){function r(e){n(373)}var o=n(101)(n(169),n(387),r,"data-v-225644a3",null);e.exports=o.exports},387:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ff"},[n("div",{staticClass:"footer f"},[n("a",{on:{click:function(t){e.disclaimerOpened=!0}}},[e._v("DISCALIMER")])]),n("b-modal",{attrs:{active:e.disclaimerOpened},on:{"update:active":function(t){e.disclaimerOpened=t}}},[n("div",{staticClass:"content"},[e._v("\n        All videos, images and all other multimedia parts are not property or made by the website as no one of them is hosted, controlled or reviewed , any legal action regarding the content, copyright is not blameable to this website."),n("br"),e._v("\n        The use of this website declares that your age satisfies your country laws."),n("br"),e._v("\n        Any content remove request could be sent to "),n("p",[e._v(" abuse @ "+e._s(e.host))])])])],1)},staticRenderFns:[]}},388:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.$ssrContext?e._e():[n("transition",{attrs:{name:"fade",delay:1500,mode:"out-in"}},[n("router-view",{staticClass:"router-view"})],1)],n("myfooter")],2)},staticRenderFns:[]}},415:function(e,t){}},[159]);