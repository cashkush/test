webpackJsonp([5],{145:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=(0,u.createStore)(),n=(0,l.createRouter)(),r=(0,f.createI18n)(e.lang);return(0,d.sync)(t,n),{app:new i.default({router:n,store:t,i18n:r,ssrContext:e,render:function(e){return e(s.default)}}),router:n,store:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.createApp=o,n(153);var a=n(48),i=r(a),c=n(384),s=r(c),u=n(162),l=n(157),d=n(415),f=n(160),h=n(407),p=r(h),m=n(154),v=r(m);i.default.use(v.default),i.default.use(p.default)},146:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),c=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}return r("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(164),c=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(69),u=n(99),l=function(){function e(t,n){o(this,e),this.connection=t,this.store=n,(0,s.observe)(c.default.listeners,function(e){"add"===e.type?t.on(e.name,function(t){c.default.emit(e.name,t)}):"delete"==e.type&&t.off(e.name)})}return a(e,[{key:"install",value:function(e){var t=this;if(!this.connection)throw new Error("[Vue-Socket.io] cannot locate connection");e.prototype.$authToken=s.observable.box({_id:!1}),e.prototype.$connState=s.observable.box(""),e.prototype.$socket=this.connection,this.connection.on("authenticate",function(n){e.prototype.$authToken.set(t.connection.authToken)}),(0,s.observe)(e.prototype.$authToken,function(e){if(e.oldValue&&e.oldValue._id&&e.newValue&&e.newValue._id&&e.newValue._id!=e.oldValue._id){var n={};c.default.channels.forEach(function(e,r){n[r]={},(0,u.forEach)(e,function(e,o){n[r][o]=t.connection.subscribe("priv/"+t.connection.authToken._id+"/"+o),n[r][o].watch(e.watchers()[0]),e.unsubscribe(),e.unwatch()})}),c.default.channels.clear(),Object.keys(n).forEach(function(e){return c.default.channels.set(e,n[e])})}}),this.connection.on("disconnect",function(){e.prototype.$authToken.set({})}),this.store&&(Object.keys(this.store._mutations).forEach(function(e){e.startsWith("SOCKET_")&&c.default.addListener(e.replace("SOCKET_",""),function(n){t.store.commit(e.toUpperCase(),n)},{_uid:"store"})}),["connect","error","disconnect","connecting","reconnect"].forEach(function(n){t.connection.on(n,function(r){e.prototype.$connState.set(n),t.store.commit("SET_CONNECTION_STATE",n)})})),e.mixin({created:function(){var e=this,t=this.$options.sockets;t&&Object.keys(t).forEach(function(){var n=r(regeneratorRuntime.mark(function n(r){var o,a,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.startsWith("channel_")){n.next=11;break}return n.next=3,(0,s.when)(function(){return e.$authToken.get()._id&&"connect"==e.$connState.get()});case 3:o=e.$authToken.get()._id,a=r.replace("channel_",""),c.default.channels.has(e._uid)||c.default.channels.set(e._uid,{}),i=c.default.channels.get(e._uid),i[a]=e.$socket.subscribe("priv/"+o+"/"+a),i[a].watch(function(n){return t[r].call(e,n)}),n.next=12;break;case 11:c.default.addListener(r,t[r],e);case 12:case"end":return n.stop()}},n,e)}));return function(e){return n.apply(this,arguments)}}())},beforeDestroy:function(){var e=this.$options.sockets;if(e){c.default.removeListeners(this);var t=c.default.channels.get(this._uid);if(!t)return;Object.keys(t).forEach(function(n){t[n].unwatch(e[n]),t[n].watchers().length<1&&t[n].unsubscribe()})}}})}}]),e}();t.default=l},152:function(e,t,n){function r(e){var t=o[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var o={"./empty.vue":[420,3],"./home.vue":[421,1],"./mysavedvideos.vue":[422,2],"./video.vue":[423,0]};r.keys=function(){return Object.keys(o)},e.exports=r,r.id=152},156:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(48),a=r(o);n(147);var i=n(145),c=(n(69),n(146)),s=r(c),u=n(148),l=r(u),d=n(149),f=r(d),h=n(150),p=r(h),m=n(151),v=r(m);a.default.use(v.default),a.default.use(f.default),p.default.color="rgba(255, 255, 255, 0.35)",a.default.directive("ripple",p.default);try{var g=(0,i.createApp)({lang:(navigator.language||navigator.userLanguage||"en").substr(0,2).toLowerCase()}),w=g.app,_=g.router,y=g.store;a.default.use(new s.default(l.default.connect({hostname:"s2.beapoker.pro",port:443,secure:!0,ackTimeout:1e4,query:{},autoReconnectOptions:{initialDelay:1e3,randomness:2e3,multiplier:1.5,maxDelay:4e3}}),y)),window.__INITIAL_STATE__&&y.replaceState(window.__INITIAL_STATE__),_.onReady(function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),c=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}return r("next")})}}(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=localStorage.getItem(w.$socket.authTokenName),w.$socket.emit("login",t,function(e,t){y.usr=t}),w.$mount("#app");case 3:case"end":return e.stop()}},e,void 0)}))),"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js")}catch(e){alert(e)}},157:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){return n(152)("./"+e+".vue")}}function a(){return new u.default({mode:"hash",scrollBehavior:function(){return{y:0}},routes:[{name:"home",path:"/",component:o("home")},{name:"search",path:"/search/:search*",component:o("home")},{name:"video",path:"/v/:id",component:o("video")},{name:"404",path:"*",component:o("home")}]})}Object.defineProperty(t,"__esModule",{value:!0}),t.createRouter=a;var i=n(48),c=r(i),s=n(408),u=r(s);c.default.use(u.default)},158:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={isTouch:function(){var e=" -webkit- -moz- -o- -ms- ".split(" ");if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)return!0;var t=["(",e.join("touch-enabled),("),"heartz",")"].join("");return function(e){return window.matchMedia(e).matches}(t)}}},159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={isConnected:function(e){return console.log("getter isConn",e.connState),["connect","connected","reconnect"].includes(e.connState)},screenSize:function(e){switch(!0){case e.screen.w<520:return"m";case e.screen.w<950:return"t";default:return"d"}}}},160:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={};return Object.keys(d.default).map(function(n){t[n]=d.default[n][e]}),t}function a(e){var t=Object.keys(f).indexOf(e)>-1?e:"en";return new u.default({locale:t,messages:f})}Object.defineProperty(t,"__esModule",{value:!0}),t.createI18n=a;var i=n(48),c=r(i),s=n(406),u=r(s),l=n(161),d=r(l);c.default.use(u.default);var f={en:o("en"),it:o("it")}},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},162:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return new s.default.Store({state:{publicPath:"https://s2.beapoker.pro/public/",connState:"",locale:"it",screen:{w:m.innerHeight,h:m.innerWidth},usr:{token:!1},path:[],siteOptions:{},siteSettings:{cookiesEnabled:!0,analyticsEnabled:!0},videos:{}},actions:l.default,mutations:f.default,getters:p.default})}Object.defineProperty(t,"__esModule",{value:!0}),t.createStore=o;var a=n(48),i=r(a),c=n(101),s=r(c),u=n(158),l=r(u),d=n(163),f=r(d),h=n(159),p=r(h);i.default.use(s.default);var m={innerHeight:0,innerWidth:0}},163:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(99);t.default={SET_CONNECTION_STATE:function(e,t){e.connState=t},SOCKET_LOGIN:function(e,t){Object.assign(e.usr,t)},LOGOUT:function(e){e.usr={}},setScreen:function(e,t){t.w&&(e.screen.w=t.w),t.h&&(e.screen.h=t.h)},setPath:function(e,t){e.path=t.split("/").slice(1)},SET_SITE_SETTING:function(e,t){var n=t.path,o=t.v;(0,r.set)(e.siteSettings,n,o)}}},164:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(69);t.default=new(function(){function e(){r(this,e),this.listeners=a.observable.map(null,{deep:!1,name:"listeners"}),this.channels=a.observable.map(null,{deep:!1,name:"channels"})}return o(e,[{key:"addListener",value:function(e,t,n){this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push({callback:t,vm:n})}},{key:"removeListeners",value:function(e){var t=this;this.listeners.toJS().forEach(function(e,n){e.length||t.listeners.delete(n)})}},{key:"emit",value:function(e,t){var n=this.listeners.get(e);return!(!n||!n.length)&&(n.forEach(function(e){e.callback.call(e.vm,t)}),!0)}}]),e}())},165:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),c=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(101),c=n(99),s=n(385),u=r(s),l=n(386),d=r(l);t.default={data:function(){return{scripts:[],searchOpened:!1,menuOpened:!1,search:"",logo:"/public/img/www.ufap.it.png"}},components:{myfooter:u.default,mymenu:d.default},mounted:function(){var e=this;return o(regeneratorRuntime.mark(function t(){var n,r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("nodeenv","production"),e.logo="/public/img/"+window.location.host+".png",e.$store.commit("setScreen",{w:window.innerWidth,h:window.innerHeight}),window.addEventListener("resize",(0,c.debounce)(function(t){e.$store.commit("setScreen",{w:window.innerWidth,h:window.innerHeight})},300)),n=localStorage.getItem("locale"),n&&(e.$i18n.locale=n),e.$watch("$route.path",function(){var t=o(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n&&e.$store.commit("setPath",n),e.menuOpened&&(e.menuOpened=!1);try{"undefined"!=typeof gtag&&gtag("config",e.$store.state.gtagId,{page_path:n,uid:e.$authToken.get()._id})}catch(e){console.log("err meta",e)}case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),{immediate:!0}),!e.$store.state.gtagId){t.next=16;break}return r=document.createElement("div"),a=setInterval(function(){console.log(r),console.clear()},1e3),Object.defineProperty(r,"id",{get:function(){clearInterval(a),e.$socket.disconnect(),document.querySelector("html").innerHTML=""}}),e.scripts.push({src:"https://www.googletagmanager.com/gtag/js?id="+e.$store.state.gtagId,async:!0},{innerHTML:"window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', "+JSON.stringify(e.$store.state.gtagId)+");",vmid:"analytics"}),e.$root.changeLocale=function(t){e.$i18n.locale=t,e.$root.$emit("localeChange",t),e.$forceUpdate(),localStorage.setItem("locale",t)},"search"==e.path[1]&&console.log("sei su search"),t.next=16,interval(500).pipe(takeWhile(function(){return"undefined"==typeof gtag})).toPromise().then(function(){e.$authToken.observe(function(e){var t=e.newValue;e.oldValue;t&&t._id&&(gtag("set",{user_id:t._id}),gtag("event","login",{uid:t._id,event_label:t._id}))},1)});case 16:case"end":return t.stop()}},t,e)}))()},methods:{startSearch:function(){this.searchOpened=!1,this.search.length<3||this.$router.push({name:"search",params:{search:this.search}})}},computed:a({},(0,i.mapState)(["connState","screen","path"]),(0,i.mapGetters)(["isConnected"])),beforeDestroy:function(){this.$socket.disconnect()},metaInfo:function(){return{title:"",meta:[{description:""}],script:this.scripts,link:[{rel:"stylesheet",href:"https://unpkg.com/@videojs/themes@1/dist/fantasy/index.css"}]}},watch:{}}},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"empty",data:function(){return{disclaimerOpened:!1,host:""}},mounted:function(){this.host=window.location.hostname}}},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"empty",data:function(){return{isMounted:!1}},mounted:function(){var e=this;setTimeout(function(){e.isMounted=!0},100)},methods:{close:function(){var e=this;this.isMounted=!1,setTimeout(function(){e.$emit("close")},500)}},computed:{}}},371:function(e,t){},372:function(e,t){},373:function(e,t){},384:function(e,t,n){function r(e){n(373)}var o=n(71)(n(165),n(389),r,null,null);e.exports=o.exports},385:function(e,t,n){function r(e){n(372)}var o=n(71)(n(166),n(388),r,"data-v-225644a3",null);e.exports=o.exports},386:function(e,t,n){function r(e){n(371)}var o=n(71)(n(167),n(387),r,"data-v-06264332",null);e.exports=o.exports},387:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"my-menu"}},[n("div",{class:{opened:e.isMounted},attrs:{id:"close-menu"},on:{click:function(t){return e.close()}}}),n("div",{staticClass:"f fc",class:{opened:e.isMounted},attrs:{id:"menu-content"}},[n("p",[e._v("123")]),n("router-link",{attrs:{to:"/saved"}},[e._v("My saved")])],1)])},staticRenderFns:[]}},388:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ff"},[n("div",{staticClass:"footer f"},[n("a",{on:{click:function(t){e.disclaimerOpened=!0}}},[e._v("DISCALIMER")])]),n("b-modal",{attrs:{active:e.disclaimerOpened},on:{"update:active":function(t){e.disclaimerOpened=t}}},[n("div",{staticClass:"content"},[e._v("\n        All videos, images and all other multimedia parts are not property or made by the website as no one of them is hosted, controlled or reviewed , any legal action regarding the content, copyright is not blameable to this website."),n("br"),e._v("\n        The use of this website declares that your age satisfies your country laws."),n("br"),e._v("\n        Any content remove request could be sent to "),n("p",[e._v(" abuse @ "+e._s(e.host))])])])],1)},staticRenderFns:[]}},389:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.$ssrContext?e._e():[n("div",{attrs:{id:"top"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"fullw header-wrap",class:{opened:e.searchOpened}},[n("div",{staticClass:"f"},[n("i",{staticClass:"mdi mdi-menu",on:{click:function(t){e.menuOpened=!0}}}),n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:e.logo,id:"logo"}})]),n("i",{staticClass:"mdi mdi-magnify",on:{click:function(t){e.searchOpened=!0}}})],1),n("div",{staticClass:"f searchbar",staticStyle:{left:"100%"}},[n("form",{on:{submit:function(t){return e.startSearch()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),n("i",{staticClass:"mdi mdi-magnify",on:{click:function(t){return e.startSearch()}}})])])])]),n("transition",{attrs:{name:"fade",delay:1500,mode:"out-in"}},[n("router-view",{staticClass:"router-view"})],1),n("myfooter"),e.menuOpened?n("mymenu",{on:{close:function(t){e.menuOpened=!1}}}):e._e()]],2)},staticRenderFns:[]}},417:function(e,t){}},[156]);