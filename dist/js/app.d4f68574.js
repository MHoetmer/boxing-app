(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function o(t){return c.p+"js/"+({about:"about",training:"training"}[t]||t)+"."+{about:"397031a8",training:"c7b6bbeb"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,training:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about",training:"training"}[t]||t)+"."+{about:"68ee8f8c",training:"198cceff"}[t]+".css",i=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var m=document.getElementsByTagName("style");for(o=0;o<m.length;o++){l=m[o],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],h.parentNode.removeChild(h),n(s)},h.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var m=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",m.name="ChunkLoadError",m.type=a,m.request=r,n[1](m)}i[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var h=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("8a23"),r=n.n(a);r.a},"1b88":function(t,e,n){t.exports=n.p+"img/best.9a1d0a6b.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("div",{attrs:{id:"app"}},[n("v-card",[n("v-tabs",{staticClass:"elevation-0",staticStyle:{"margin-bottom":"30px"},attrs:{"slider-color":"rgb(255, 152, 0)","text-color":"white","background-color":"white",centered:"",flat:""}},[n("v-tab",[n("router-link",{staticClass:"menu",attrs:{to:"/"}},[n("a",[t._v("Home")])])],1),t._v("\\ "),n("v-tab",[n("router-link",{key:this.$store.state.training[0],staticClass:"menu",attrs:{to:"/combo"}},[n("a",[t._v("Combo")])])],1),n("v-tab",[n("router-link",{staticClass:"menu",attrs:{to:"/random"}},[n("a",[t._v("Random")])])],1),n("v-tab",[n("router-link",{staticClass:"menu",attrs:{to:"/select/030"}},[n("a",[t._v("Select")])])],1)],1)],1),n("router-view"),n("v-footer",{attrs:{absolute:""}},[n("v-spacer"),n("a",[t._v(" © Boxing App Challenge Incorporation "+t._s((new Date).getFullYear())+" ")])],1)],1)])},i=[],s=(n("034f"),n("2877")),o=n("6544"),c=n.n(o),l=n("7496"),u=n("b0af"),m=n("553a"),h=n("2fa4"),f=n("71a3"),d=n("fe57"),p={},v=Object(s["a"])(p,r,i,!1,null,null,null),g=v.exports;c()(v,{VApp:l["a"],VCard:u["a"],VFooter:m["a"],VSpacer:h["a"],VTab:f["a"],VTabs:d["a"]});n("d3b7");var b=n("8c4f"),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",{staticStyle:{"font-family":"Bungee Shade"}},[t._v("Boxing App Challenge")]),a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-img",{attrs:{src:n("1b88"),"max-width":"60%",alt:"Het hoofd en de romp van een geslagen mannetje;\n        het vrouwtje heeft een groot hoofd en lange scherpe tanden"}})],1)],1)],1)},_=[],y=n("a523"),k=n("adda"),w=n("0fd9"),T={},S=Object(s["a"])(T,C,_,!1,null,null,null),x=S.exports;c()(S,{VContainer:y["a"],VImg:k["a"],VRow:w["a"]});var B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"random"},[n("v-container",{class:"d-flex justify-space-between"},[n("v-col",{staticClass:"options"},[n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-switch",t._g({attrs:{label:"Include combo"},model:{value:t.includeCombo,callback:function(e){t.includeCombo=e},expression:"includeCombo"}},a))]}}])},[n("span",[t._v("Create under tab 'Combo'")])]),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-switch",t._g({attrs:{label:"Include break"},model:{value:t.includeBreak,callback:function(e){t.includeBreak=e},expression:"includeBreak"}},a))]}}])},[t.includeBreak?n("span",[t._v("Pussy!")]):t._e(),t.includeBreak?t._e():n("span",[t._v("Coward!")])])],1),n("v-select",{staticStyle:{"max-width":"50px"},attrs:{placeholder:t.includeCount,items:t.counts,label:"Count"},on:{input:function(e){return t.setCount(e)}}})],1),n("v-btn",{staticClass:"b-container",on:{click:t.generateTraining}},[t._v("Generate random training")]),n("v-btn",{staticClass:"b-container",on:{click:t.removeTraining}},[t._v("Remove training")]),n("BaseTimer",{key:this.$store.state.training[0]})],1)},$=[],j=(n("b0c0"),n("b310")),V={name:"Random",components:{BaseTimer:j["a"]},data:function(){return{includeCombo:!1,includeBreak:!1,counts:[3,4,5,6,7,8,9,10],includeCount:3}},created:function(){this.$store.state.training=[]},methods:{setCount:function(t){this.includeCount=t},generateTraining:function(){var t=this.includeCount,e=[],n=[];if(this.includeCombo)for(var a in this.$store.state.combos)n.push(this.$store.state.combos[a].name);for(var r in this.$store.state.options)("Break"==this.$store.state.options[r].name&&this.includeBreak||"Break"!=this.$store.state.options[r].name)&&n.push(this.$store.state.options[r].name);for(var i=0;i<t;i++){var s=10*Math.floor(6*Math.random()+1),o=Math.floor(Math.random()*(n.length-1+1));e.push({time:s,name:n[o]})}for(var c in"Break"==e[0].name&&(e[0].name=e[1].name,e[1].name="Break","Break"==e[1].name&&(e[0].name="Jab")),"Break"==e[e.length-1].name&&(e[e.length-1].name=e[e.length-2].name,e[e.length-2].name="Break","Break"==e[e.length-2].name&&(e[e.length-1].name="Hook")),e)c>0&&c<e.length-1&&e[c].name==e[c-1].name&&"Break"==e[c].name&&(e[c].name="Uppercut");this.$store.commit("setTraining",e)},removeTraining:function(){this.$store.commit("setTraining",[])}}},P=V,I=(n("c718"),n("8336")),O=n("62ad"),E=n("b974"),L=n("b73d"),A=n("3a2f"),M=Object(s["a"])(P,B,$,!1,null,"c501c5f2",null),D=M.exports;c()(M,{VBtn:I["a"],VCol:O["a"],VContainer:y["a"],VSelect:E["a"],VSwitch:L["a"],VTooltip:A["a"]}),a["a"].use(b["a"]);var R=[{path:"/",name:"Home",component:x},{path:"/random",name:"Random",component:D},{path:"/select/:id",name:"Select",component:function(){return n.e("about").then(n.bind(null,"0494"))}},{path:"/training/:id",name:"Training",component:function(){return n.e("training").then(n.bind(null,"b707"))}},{path:"/combo/",name:"Combo",component:function(){return n.e("training").then(n.bind(null,"000c"))}}],F=new b["a"]({mode:"history",routes:R}),H=F,N=(n("a434"),n("2f62"));a["a"].use(N["a"]);var U=new N["a"].Store({state:{options:[{name:"Jab",id:0},{name:"Uppercut",id:1},{name:"Cross",id:2},{name:"Hook",id:3},{name:"Break",id:4}],times:[30,60,90],training:[],combos:[]},mutations:{addTraining:function(t,e){t.training.push(e)},removeTraining:function(t,e){for(var n=0;n<t.training.lenght;n++)t.training[n]==e&&t.training.splice(n,1)},setTraining:function(t,e){t.training=e}},actions:{},modules:{}}),J=n("f309");a["a"].use(J["a"]);var q=new J["a"]({});a["a"].config.productionTip=!1,a["a"].config.silent=!0,a["a"].config.devtools=!0,new a["a"]({router:H,store:U,vuetify:q,render:function(t){return t(g)}}).$mount("#app")},"8a23":function(t,e,n){},b310:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app",[n("v-item-group",{attrs:{multiple:""}},t._l(this.$store.state.training,(function(e){return n("v-item",{key:e.name,staticClass:"e-container",scopedSlots:t._u([{key:"default",fn:function(a){var r=a.active;return[n("v-chip",{class:{active:t.getCurrentClass(e)},attrs:{close:"",color:t.getTypedClass(e.name,0),"input-value":r,outlined:!t.getCurrentClass(e)},on:{"click:close":function(n){return t.removeExercise(n,e)}}},[n("v-avatar",{class:t.getTypedClass(e,1),attrs:{left:""}},[n("span",{class:t.getTypedClass(e,2)},[t._v(t._s(e.time))])]),t._v(" "+t._s(e.name)+" ")],1)]}}],null,!0)})})),1),n("div",{staticClass:"base-timer container"},[n("div",{class:t.classObject},[1==t.start?n("button",{on:{click:t.startTimer}},[n("v-icon",{attrs:{size:"200"}},[t._v("mdi-play")])],1):t._e(),2==t.start?n("button",{on:{click:t.pauseTimer}},[n("v-icon",{attrs:{size:"200"}},[t._v("mdi-pause")])],1):t._e()]),n("svg",{staticClass:"base-timer__svg",attrs:{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{staticClass:"base-timer__circle"},[n("circle",{staticClass:"base-timer__path-elapsed",attrs:{cx:"50",cy:"50",r:"45"}}),n("path",{staticClass:"base-timer__path-remaining",class:t.remainingPathColor,attrs:{"stroke-dasharray":t.circleDasharray,d:"\n          M 50, 50\n          m -45, 0\n          a 45,45 0 1,0 90,0\n          a 45,45 0 1,0 -90,0\n        "}})])]),n("span",{staticClass:"base-timer__label"},[t._v(t._s(t.formattedTimeLeft))]),n("p",[t._v(t._s(this.$store.state.training[this.currentSet].name))]),n("v-btn",{on:{click:t.restart}},[t._v("RESTART")])],1)],1)],1)},r=[],i=(n("99af"),n("caad"),n("c975"),n("a434"),n("b0c0"),n("b680"),n("2532"),283),s=10,o=5,c={info:{color:"green"},warning:{color:"orange",threshold:s},alert:{color:"red",threshold:o}},l={data:function(){return{timePassed:0,timerInterval:null,start:1,currentSet:0}},created:function(){},computed:{classObject:function(){return this.$route.path.includes("training"),{overlay:!0}},circleDasharray:function(){return"".concat((this.timeFraction*i).toFixed(0)," 283")},formattedTimeLeft:function(){var t=this.timeLeft,e=Math.floor(t/60),n=t%60;return n<10&&(n="0".concat(n)),n<2&&this.currentSet==this.$store.state.training.length-1?"0:00":"".concat(e,":").concat(n)},timeLeft:function(){return this.$store.state.training[this.currentSet].time-this.timePassed},timeFraction:function(){var t=this.timeLeft/this.$store.state.training[this.currentSet].time;return t-1/this.$store.state.training[this.currentSet].time*(1-t)},remainingPathColor:function(){var t=c.alert,e=c.warning,n=c.info;return this.timeLeft<=t.threshold?t.color:this.timeLeft<=e.threshold?e.color:n.color}},watch:{timeLeft:function(t){0===t&&this.onTimesUp()}},methods:{onTimesUp:function(){this.sleep(300),clearInterval(this.timerInterval),this.sleep(300),this.start=3,this.timePassed=0,this.time=this.$store.state.training[this.currentSet].time,this.currentSet<this.$store.state.training.length&&(this.currentSet+=1),this.startTimer()},sleep:function(t){for(var e=(new Date).getTime(),n=0;n<1e7;n++)if((new Date).getTime()-e>t)break},startTimer:function(){var t=this;this.start=2,this.timerInterval=setInterval((function(){return t.timePassed+=1}),1e3)},pauseTimer:function(){this.start=1,clearInterval(this.timerInterval)},resetTimer:function(){var t=this;this.start=2,this.timePassed=0,this.timerInterval=setInterval((function(){return t.timePassed+=1}),1e3)},getTypedClass:function(t,e){return 2==e?this.$store.state.training[this.currentSet]==t?"blue--text":"white--text":1==e?this.$store.state.training[this.currentSet]==t?"white":"Break"==t.name?"grey":"primary":0==e?"Break"==t?"grey":"primary":"white"},getCurrentClass:function(t){return this.$store.state.training[this.currentSet]==t},removeExercise:function(t,e){this.$store.state.training.splice(this.$store.state.training.indexOf(e),1)},restart:function(){this.currentSet=0,this.timePassed=0,this.start=1,clearInterval(this.timerInterval)}}},u=l,m=(n("bc3e"),n("2877")),h=n("6544"),f=n.n(h),d=n("7496"),p=n("8212"),v=n("8336"),g=n("cc20"),b=n("132d"),C=n("d903e"),_=n("604c"),y=Object(m["a"])(u,a,r,!1,null,"53c2cff6",null);e["a"]=y.exports;f()(y,{VApp:d["a"],VAvatar:p["a"],VBtn:v["a"],VChip:g["a"],VIcon:b["a"],VItem:C["a"],VItemGroup:_["b"]})},bc3e:function(t,e,n){"use strict";var a=n("d903"),r=n.n(a);r.a},c718:function(t,e,n){"use strict";var a=n("d1f6"),r=n.n(a);r.a},d1f6:function(t,e,n){},d903:function(t,e,n){}});
//# sourceMappingURL=app.d4f68574.js.map