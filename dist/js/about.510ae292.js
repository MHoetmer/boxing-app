(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0494":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app",[t._l(this.$store.state.options,(function(e){return r("span",{key:e.name},[r("div",[r("v-btn",{staticClass:"button",attrs:{color:"primary"},on:{click:function(r){return t.addExercise(r,e)}}},[t._v(t._s(e.name))])],1)])})),t._l(this.$store.state.combos,(function(e){return r("span",{key:e.name},[r("div",[r("v-btn",{staticClass:"button",attrs:{color:"secondary"},on:{click:function(r){return t.addExercise(r,e)}}},[t._v(t._s(e.name))])],1)])})),r("v-row",[r("v-item-group",{staticClass:"e-container",staticStyle:{"margin-left":"20px"},attrs:{multiple:""}},[r("v-subheader",[t._v("Training")]),t._l(this.$store.state.training,(function(e){return r("v-item",{key:e.name,scopedSlots:t._u([{key:"default",fn:function(i){var n=i.active;return[r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(i){var s=i.on;return[r("v-chip",t._g({class:t.getClass(e),attrs:{"text-color":t.getClass(e),"input-value":n,close:"",outlined:""},on:{"click:close":function(r){return t.removeExercise(r,e)}}},s),[r("v-avatar",{class:t.getClass(e),attrs:{left:""}},[r("v-select",{key:e.time,staticClass:"time",attrs:{items:t.$store.state.times,chips:"",label:e.time},on:{input:function(r){return t.addTime(r,e)}}})],1),t._v(" "+t._s(e.name)+" ")],1)]}}],null,!0)},[r("span",[t._v("Pick interval")])])]}}],null,!0)})}))],2)],1),r("v-row",[r("v-container",{staticClass:"e-container"},[r("router-link",{staticClass:"button start",attrs:{to:t.getUrl()}},[r("v-btn",{attrs:{color:"orange"},on:{click:t.startExercise}},[t._v("Start")])],1)],1)],1)],2)],1)},n=[],s=(r("c975"),r("a15b"),r("a434"),r("b0c0"),r("d3b7"),r("ac1f"),r("25f0"),r("1276"),{data:function(){return{}},created:function(){this.$store.state.training=[];for(var t=this.$route.params.id.split("-"),e=0;e<t.length;e++){var r=Math.floor(t[e]/100),i=t[e]%100,n=this.$store.state.options[r].name;this.$store.state.training.push({name:n,time:i})}this.convertToUrl(this.$store.state.training)},methods:{addExercise:function(t,e){this.$store.state.training.push({name:e.name,time:30}),this.$router.push("/select/"+this.$route.params.id+"-"+e.id+30)},startExercise:function(){this.$store.commit("setTraining",this.$store.state.training)},addTime:function(t,e){var r=this.$route.params.id.split("-"),i=this.$store.state.training.indexOf(e),n=Math.floor(r[i]/100);r[i]=n.toString()+t;var s=r.join("-");this.$store.state.training[this.$store.state.training.indexOf(e)].time=t,this.$router.push("/select/"+s)},removeExercise:function(t,e){var r=this.$route.params.id.split("-"),i=this.$store.state.training.indexOf(e);r.splice(i,1);var n=r.join("-");this.$store.state.training.splice(this.$store.state.training.indexOf(e),1),this.$router.push("/select/"+n)},getClass:function(t){return"Break"==t.name?"grey e-item":"blue e-item"},convertToUrl:function(t){for(var e=[],r=0;r<t.length;r++){var i=r.toString()+t[r].time;r>0&&(e+="-"),e+=i}return e},convertFromUrl:function(){for(var t=[],e=this.$route.params.id.split("-"),r=0;r<e.length;r++){var i=Math.floor(e[r]/100),n=e[r]%100,s=this.$store.state.options[i].name;t.push({name:s,time:n})}return t},getUrl:function(){var t=this.convertToUrl(this.$store.state.training);return"/training/"+t}}}),a=s,o=(r("66f0"),r("2877")),c=r("6544"),u=r.n(c),l=r("7496"),v=r("8212"),f=r("8336"),h=r("cc20"),m=r("a523"),p=r("d903"),d=r("604c"),g=r("0fd9"),$=r("b974"),b=r("e0c7"),_=r("3a2f"),k=Object(o["a"])(a,i,n,!1,null,"000189fb",null);e["default"]=k.exports;u()(k,{VApp:l["a"],VAvatar:v["a"],VBtn:f["a"],VChip:h["a"],VContainer:m["a"],VItem:p["a"],VItemGroup:d["b"],VRow:g["a"],VSelect:$["a"],VSubheader:b["a"],VTooltip:_["a"]})},"2dbb":function(t,e,r){},"66f0":function(t,e,r){"use strict";var i=r("2dbb"),n=r.n(i);n.a}}]);
//# sourceMappingURL=about.510ae292.js.map