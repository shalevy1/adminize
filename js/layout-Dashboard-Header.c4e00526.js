(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout-Dashboard-Header","layout-Dashboard-img-logo-png"],{"316b":function(t,e,n){t.exports=n.p+"img/logo.819e4ae6.png"},"875a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-header",{staticClass:"adminize__dashboard__header"},[r("i",{staticClass:"el-icon-menu header__icon",on:{click:t.toggleAside}}),r("div",{staticClass:"user"},[r("img",{staticClass:"user__avatar",attrs:{src:n("316b"),height:"34%",alt:"avatar"}}),r("span",{staticClass:"user__name",attrs:{title:t.username}},[t._v(t._s(t.username))]),r("el-dropdown",{staticClass:"lang",attrs:{trigger:"click"}},[r("el-button",{attrs:{type:"text"}},[t._v(t._s(t._f("formatLang")(t.lang)))]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",[r("span",{staticClass:"lang__item",on:{click:function(e){return t.setLocale("zh")}}},[t._v("中文")])]),r("el-dropdown-item",[r("span",{staticClass:"lang__item",on:{click:function(e){return t.setLocale("en")}}},[t._v("EN")])])],1)],1),r("el-button",{attrs:{type:"text",title:t.$t("logout")},on:{click:t.onLogout}},[r("i",{staticClass:"el-icon-switch-button"})])],1)])},a=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("a481"),n("96cf"),n("3b8d")),s=n("bd86"),i=n("2f62"),c=n("9923");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var d={name:"AdminizeHeader",data:function(){return{username:"default name"}},computed:{lang:function(){return c["default"].locale}},methods:u({onLogout:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$store.dispatch("login/userLogout");case 3:this.$router.replace("/login"),t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),this.$_plugins_message.error(this.$t("error"));case 10:case"end":return t.stop()}},t,this,[[0,6]])}));function e(){return t.apply(this,arguments)}return e}(),setLocale:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en";c["default"].locale=t}},Object(i["d"])({toggleAside:"SET_ASIDE_COLLAPSE"})),filters:{formatLang:function(t){var e={zh:"中文",en:"English"};return e[t]||"Unknown"}},i18n:{messages:{en:{logout:"Logout",error:"Logout failed, Please try again !"},zh:{logout:"登出",error:"登出失败，请重试！"}}}},p=d,g=(n("9f45"),n("9d7d"),n("2877")),f=Object(g["a"])(p,r,a,!1,null,"53397d68",null);e["default"]=f.exports},"9d7d":function(t,e,n){"use strict";var r=n("edc0"),a=n.n(r);a.a},"9f45":function(t,e,n){"use strict";var r=n("e667"),a=n.n(r);a.a},e667:function(t,e,n){},edc0:function(t,e,n){}}]);