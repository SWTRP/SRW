(function(t){function e(e){for(var n,s,i=e[0],p=e[1],l=e[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(t[n]=p[n]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var p=a[i];0!==r[p]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/SRW/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],p=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=p;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("GDOT")]),a("span",{staticClass:"font-weight-light"},[t._v(" Statewide Transit Plan Documents")])]),a("v-spacer"),a("v-btn",{attrs:{text:"",href:"http://www.dot.ga.gov/InvestSmart/Transit/Pages/TransitPlan.aspx",target:"_blank"}},[a("span",{staticClass:"mr-2"},[t._v("Main site")])])],1),a("v-content",[a("HelloWorld")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{staticClass:"my-3",attrs:{src:a("f631"),contain:"",height:"200"}})],1),n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 mb-3"},[t._v("\n        Welcome to the Meeting Documents Site for "),n("br"),t._v(" GDOT's 2019 Subrecipient Workshop\n      ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For more information about the SWTRP\n        "),n("br"),t._v("please visit\n        "),n("a",{attrs:{href:"http://www.dot.ga.gov/InvestSmart/Transit/Pages/TransitPlan.aspx",target:"_blank"}},[t._v("SWTRP's page on GDOT's website")])])]),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Documents")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.documents,function(e,a){return n("a",{key:a,staticClass:"subheading mx-3 font-weight-bold",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1)],1)],1)},i=[],p={data:()=>({documents:[{text:"Campus Map",href:"https://firebasestorage.googleapis.com/v0/b/swtrp-9fda0.appspot.com/o/SOSTC%20Campus%20Map%20-%20GDOT%20Subrecipient%20Workshop.pdf?alt=media&token=80f30382-1cbf-4371-96ff-46a7055145db"},{text:"Agenda",href:"https://firebasestorage.googleapis.com/v0/b/swtrp-9fda0.appspot.com/o/Transit%20Subrecipient%20Workshop%20Agenda_August%2027-28_withQRcode.pdf?alt=media&token=b022d969-9d22-449d-bf1e-e627c712c95b"},{text:"SWTRP Fact Sheet",href:"https://firebasestorage.googleapis.com/v0/b/swtrp-9fda0.appspot.com/o/SWTRP_FACT_2019-06-13_FactSheet.pdf?alt=media&token=73b68fe4-79d6-42d7-8257-953c422dd07f"}]})},l=p,c=a("2877"),u=a("6544"),f=a.n(u),d=a("a523"),b=a("0e8f"),v=a("adda"),h=a("a722"),g=Object(c["a"])(l,s,i,!1,null,null,null),m=g.exports;f()(g,{VContainer:d["a"],VFlex:b["a"],VImg:v["a"],VLayout:h["a"]});var _={name:"App",components:{HelloWorld:m},data:()=>({})},w=_,x=a("7496"),y=a("40dc"),S=a("8336"),T=a("a75b"),O=a("2fa4"),P=a("2a7f"),C=Object(c["a"])(w,r,o,!1,null,null,null),k=C.exports;f()(C,{VApp:x["a"],VAppBar:y["a"],VBtn:S["a"],VContent:T["a"],VSpacer:O["a"],VToolbarTitle:P["a"]});var j=a("f309");n["a"].use(j["a"]);var W=new j["a"]({icons:{iconfont:"mdi"}});n["a"].config.productionTip=!1,new n["a"]({vuetify:W,render:t=>t(k)}).$mount("#app")},f631:function(t,e,a){t.exports=a.p+"img/GDOT_logo.94217b93.png"}});
//# sourceMappingURL=app.daa38b07.js.map