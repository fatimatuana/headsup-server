(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},o=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0132":function(t,e,a){"use strict";a("5536")},"034f":function(t,e,a){"use strict";a("85ec")},"070b":function(t,e,a){"use strict";a("d7eb")},"2c77":function(t,e,a){t.exports=a.p+"media/win.ecab699a.mp3"},"4b08":function(t,e,a){"use strict";a("aa2b")},5536:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1)],1)},o=[],s={name:"App"},r=s,c=(a("034f"),a("2877")),l=a("6544"),d=a.n(l),u=a("7496"),h=a("f6c4"),v=Object(c["a"])(r,n,o,!1,null,null,null),f=v.exports;d()(v,{VApp:u["a"],VMain:h["a"]});var g=a("9483");Object(g["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var p=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("Appbar",{attrs:{text:"heads up"}}),a("v-alert",{attrs:{value:t.offline,type:"error"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"grow"},[t._v(" Oh noo! "),a("br"),t._v("Keine Internetverbindung :( ")])],1)],1),a("v-container",[a("v-row",t._l(t.categories,(function(e){return a("Category",{key:e.id,attrs:{category:e}},[t._v(" "+t._s(e)+" ")])})),1)],1),a("div",{staticClass:"mt-3",staticStyle:{display:"flex","justify-content":"center"}},[a("span",[a("v-img",{staticStyle:{width:"40vw"},attrs:{src:"/img/heads-up-title-ic.png"}})],1)])],1)},w=[],b=a("bc3a"),y=a.n(b),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{staticClass:"px-2 py-2 col-12 col-sm-4",staticStyle:{"object-fit":"cover"}},[a("div",{staticClass:"category-div mx-1 my-0",style:"background-image: url('/img/categories/"+t.category.pic+"');",on:{click:function(e){return t.switchtoG(t.category.id)}}},[a("p",{staticClass:"category--title"},[t._v(t._s(t.category.name.toUpperCase()))])]),t.dialog?a("Game",{attrs:{words:t.category.words},on:{closed:function(e){t.dialog=!1}}}):t._e()],1)},C=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"landscapemode",attrs:{justify:"center",align:"center"}},[a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"white--text",staticStyle:{"background-color":"tranparent"}},[a("div",{staticStyle:{position:"absolute",right:"0px"}},[a("Progress",{directives:[{name:"show",rawName:"v-show",value:"true"==t.showing,expression:"showing == 'true'"}],staticClass:"landscapemode",on:{"time-up":function(e){return t.goToResult()}},model:{value:t.showing,callback:function(e){t.showing=e},expression:"showing"}})],1),"G"==t.duringStatus?a("div",{staticClass:" game text-center centercenter fullheight-vh"},[a("h1",{staticClass:"landscapemode"},[t._v(" "+t._s(t.activeWord)+" ")])]):t._e(),"W"==t.duringStatus?a("div",{staticClass:"win text-center centercenter fullheight-vh"},[a("v-icon",{staticClass:"iconStyling landscapemode",attrs:{size:"350",color:"white"}},[t._v("mdi-check")])],1):t._e(),"L"==t.duringStatus?a("div",{staticClass:"lose text-center centercenter fullheight-vh"},[a("v-icon",{staticClass:"iconStyling",attrs:{size:"350",color:"white"}},[t._v("mdi-close")])],1):t._e()]),a("button",{on:{click:function(e){return t.playSound("win.mp3")}}},[t._v("Play Sound")])],1)],1)},x=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-progress-circular",{attrs:{rotate:90,size:60,width:5,value:t.value,color:"lightgrey"}},[t._v(" "+t._s((t.value/5*3).toFixed(0))+" ")])},k=[],W={data(){return{i:0,interval:{},value:100}},beforeDestroy(){clearInterval(this.interval)},mounted(){setTimeout(()=>{this.value=0,this.interval=setInterval(()=>{if(100===Math.round(this.value,0))return this.$emit("time-up"),this.value=0;this.value+=10/6},1e3)},3e3)}},j=W,V=(a("fe55"),a("490a")),I=Object(c["a"])(j,O,k,!1,null,"3c94f5f0",null),P=I.exports;d()(I,{VProgressCircular:V["a"]});var A={data(){return{dialog:!0,duringStatus:"G",activeWord:"",game:{losesWords:[],winsWords:[]},before:"G",showProgressCircular:!1,showing:!1,countWinsOff:0}},components:{Progress:P},props:{words:{type:Array}},methods:{getRandomInt(t){return Math.floor(Math.random()*Math.floor(t))},newWord(){this.activeWord=this.wordsArray[this.getRandomInt(this.wordsArray.length)]},handleOrientation(t){let e=t.gamma;e<=60&&e>=0?(this.duringStatus="W","W"!=this.before&&(this.playSound("win.mp3"),this.game.winsWords.push(this.activeWord),this.countWinsOff++),this.before="W"):e>=-60&&e<=0?(this.duringStatus="L","L"!=this.before&&(this.playSound("lose.mp3"),this.game.losesWords.push(this.activeWord)),this.before="L"):("G"!=this.duringStatus&&this.newWord(),this.before=this.duringStatus,this.duringStatus="G")},async goToResult(){this.game.words=this.$props.words,navigator.onLine?(await y.a.post("/game",this.game),this.$router.push({name:"Results",params:{words:this.wordsArray}})):this.$router.push({name:"Results",params:{wins:this.countWinsOff}}),window.removeEventListener("deviceorientation",this.handleOrientation,!0),this.$emit("gameIsFinished"),this.dialog=!1},startGame(){this.showProgressCircular=window.localStorage.getItem("showProgressCircular"),this.newWord(),window.addEventListener("deviceorientation",this.handleOrientation,!0)},async playSound(t){let e=new Audio(a("bbf3")("./"+t));e.play()}},async created(){this.game.losesWords=[],this.game.winsWords=[],this.dialog=!0,this.countWinsOff=0,this.wordsArray=this.$props.words,this.game.words=this.wordsArray,window.DeviceOrientationEvent&&setTimeout(()=>this.startGame(),3e3),this.showing=window.localStorage.getItem("showProgressCircular"),this.showProgressCircular=window.localStorage.getItem("showProgressCircular")},mounted(){this.activeWord="Sei bereit!"}},T=A,E=(a("0132"),a("b0af")),G=a("169a"),D=a("132d"),N=a("0fd9"),$=Object(c["a"])(T,S,x,!1,null,"5f6a1692",null),L=$.exports;d()($,{VCard:E["a"],VDialog:G["a"],VIcon:D["a"],VRow:N["a"]});var R={data:()=>({dialog:!1}),components:{Game:L},props:{category:{type:Object}},methods:{switchtoG(){this.dialog=!0}}},M=R,F=(a("070b"),a("62ad")),z=Object(c["a"])(M,_,C,!1,null,"4d9d9c5a",null),q=z.exports;d()(z,{VCol:F["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{staticStyle:{"background-color":"transparent"},attrs:{elevation:0,app:"",dark:""}},[t.text?t._e():a("v-btn",{attrs:{to:"/",medium:"",icon:""}},[a("v-icon",[t._v("mdi-arrow-left-thick")])],1),a("v-spacer"),a("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-icon",t._g(t._b({staticClass:"mr-2",attrs:{color:"grey"}},"v-icon",n,!1),i),[t._v("mdi-information-outline")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"nav-dialog"},[a("v-card-title",{staticClass:"headline content-centered"},[t._v("IMPRINT")]),a("v-card-text",{staticClass:"content-centered mt-5"},[t._v("Tuana Sirinyurt"),a("br"),t._v("© 2024 ")]),a("v-card-actions",{staticClass:"content-centered"},[a("v-btn",{attrs:{color:"white darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("CLOSE")])],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-icon",t._g(t._b({staticClass:"mr-2",attrs:{color:"grey"}},"v-icon",n,!1),i),[t._v("mdi-cog-outline")])]}}]),model:{value:t.dialogSettings,callback:function(e){t.dialogSettings=e},expression:"dialogSettings"}},[a("v-card",{staticClass:"nav-dialog"},[a("v-card-title",{staticClass:"headline content-centered"},[t._v("SETTINGS")]),a("v-card-text",{staticClass:"content-centered mt-5"},[a("v-switch",{attrs:{inset:"",color:"white",label:"Time display"},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}})],1),a("v-card-actions",{staticClass:"content-centered"},[a("v-btn",{attrs:{color:"white darken-1",text:""},on:{click:function(e){return t.chgItem()}}},[t._v("CLOSE")])],1)],1)],1)],1)},U=[],Y={props:{text:{type:String}},data(){return{dialog:!1,dialogSettings:!1,switch1:!0}},methods:{chgItem(){window.localStorage.setItem("showProgressCircular",this.switch1),this.dialogSettings=!1}},created(){this.switch1="true"==window.localStorage.getItem("showProgressCircular")}},J=Y,K=(a("4b08"),a("40dc")),H=a("8336"),Q=a("99d9"),X=a("2fa4"),Z=a("b73d"),tt=Object(c["a"])(J,B,U,!1,null,"13451dc9",null),et=tt.exports;d()(tt,{VAppBar:K["a"],VBtn:H["a"],VCard:E["a"],VCardActions:Q["a"],VCardText:Q["b"],VCardTitle:Q["c"],VDialog:G["a"],VIcon:D["a"],VSpacer:X["a"],VSwitch:Z["a"]});var at={data(){return{categories:[],offline:!1}},components:{Category:q,Appbar:et},async created(){this.checkConnection(),await this.getData(),history.pushState({},"","/results"),history.pushState({},"","/")},methods:{async getData(){let t=await y.a.get("/categories");this.categories=await t.data},checkConnection(){setTimeout(()=>{navigator.onLine?this.offline=!1:this.offline=!0,this.checkConnection()},1e3)}},async mounted(){await this.getData()}},it=at,nt=a("0798"),ot=a("a523"),st=a("adda"),rt=Object(c["a"])(it,m,w,!1,null,null,null),ct=rt.exports;d()(rt,{VAlert:nt["a"],VCol:F["a"],VContainer:ot["a"],VImg:st["a"],VRow:N["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fullheight-p"},[t.dialog?a("Game",{attrs:{words:t.words},on:{closed:function(e){t.dialog=!1},gameIsFinished:function(e){return t.re()}}}):t._e(),a("div",{attrs:{align:"center",id:"results--container"}},[a("span",{staticClass:"font-weight-bold",staticStyle:{"font-size":"250px",color:"white"}},[t._v(t._s(t.winsWordscount))]),a("br"),a("v-container",[a("span",{staticClass:"col-prim"},[t._v(t._s(t.winsWords))]),a("p",{staticClass:"col-sec"},[t._v(t._s(t.losesWords))])]),a("v-card"),a("div",{staticStyle:{"margin-bottom":"5vh"}},[a("div",{attrs:{id:"actions-div"}},[t.offline?t._e():a("button",{staticClass:"button ",staticStyle:{"font-size":"1.5em",width:"-webkit-fill-available","margin-bottom":"10px"},on:{click:function(e){t.dialog=!t.dialog}}},[a("p",{staticClass:"bold funny-font",staticStyle:{"margin-bottom":"0px"}},[t._v("TRY AGAIN")])]),a("router-link",{attrs:{to:"/overview"}},[a("button",{staticClass:"button",staticStyle:{width:"-webkit-fill-available"},on:{click:function(e){return t.getGameData()}}},[a("p",{staticClass:"bold funny-font",staticStyle:{"margin-bottom":"0px"}},[a("v-icon",{staticStyle:{"font-size":"1.5em"}},[t._v("mdi-sync ")])],1)])])],1),a("br")])],1)],1)},dt=[],ut={data(){return{game:{},words:[],winsWordscount:"",winsWords:["heyy","ajf","jfoef"],losesWords:["hey","hallo","hi"],dialog:!1,offline:!1}},props:{wins:{type:Number}},components:{Game:L},methods:{async getGameData(){if(navigator.onLine){let t=await y.a.get("/game");this.game=await t.data,this.words=this.$router.history.current.params.words,this.winsWordscount=this.game.winsWords.length,this.winsWords=this.game.winsWords.join(" - "),this.losesWords=this.game.losesWords.join(" - ")}else this.winsWordscount=this.$router.history.current.params.wins,this.winsWords="",this.losesWords="",this.offline=!0},async re(){await this.getGameData()}},async created(){await this.re()}},ht=ut,vt=(a("59c5"),Object(c["a"])(ht,lt,dt,!1,null,null,null)),ft=vt.exports;d()(vt,{VCard:E["a"],VContainer:ot["a"],VIcon:D["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"ff"}),a("div",{staticClass:"centered-content "},[a("router-link",{staticClass:"centered-content",attrs:{to:"/overview"}},[a("button",{staticClass:"start-button funny-font",on:{click:function(e){return t.call()}}},[t._v("START")])])],1)])},pt=[],mt={methods:{async call(){if(!window.DeviceOrientationEvent||!window.DeviceOrientationEvent.requestPermission)return alert("Your current device does not have access to the DeviceOrientation event");let t=await window.DeviceOrientationEvent.requestPermission();if("granted"!==t)return alert("You must grant access to the device's sensor for this demo");let e=await Notification.requestPermission();if("granted"===Notification.permission){const t=new Notification("NOTIFICATION - granted v1");console.log("notification",t)}return"granted"!==e?alert("No grant for notifications"):alert("GRANTED for notifications")}}},wt=mt,bt=(a("daef"),Object(c["a"])(wt,gt,pt,!1,null,"170203ca",null)),yt=bt.exports;i["a"].use(p["a"]);const _t=[{path:"/",name:"LandingPage",component:yt},{path:"/overview",name:"Overview",component:ct},{path:"/results",name:"Results",component:ft}],Ct=new p["a"]({mode:"history",base:"/",routes:_t});var St=Ct,xt=a("f309");i["a"].use(xt["a"]);var Ot=new xt["a"]({});i["a"].config.productionTip=!1,new i["a"]({router:St,vuetify:Ot,render:t=>t(f)}).$mount("#app")},"59c5":function(t,e,a){"use strict";a("9029")},7478:function(t,e,a){},"85ec":function(t,e,a){},9029:function(t,e,a){},"960e":function(t,e,a){t.exports=a.p+"media/lose.11208495.mp3"},aa2b:function(t,e,a){},ba74:function(t,e,a){},bbf3:function(t,e,a){var i={"./lose.mp3":"960e","./win.mp3":"2c77"};function n(t){var e=o(t);return a(e)}function o(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=o,t.exports=n,n.id="bbf3"},d7eb:function(t,e,a){},daef:function(t,e,a){"use strict";a("ba74")},fe55:function(t,e,a){"use strict";a("7478")}});