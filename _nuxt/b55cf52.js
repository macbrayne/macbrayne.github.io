(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{382:function(t,e,n){var content=n(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("f4031ef2",content,!0,{sourceMap:!1})},383:function(t,e,n){"use strict";n(382)},384:function(t,e,n){var r=n(32)(!1);r.push([t.i,".card{padding:1em}",""]),t.exports=r},385:function(t,e,n){"use strict";n.r(e);var r=n(429),l=n(171),d={props:{heading:{type:String,default:""}}},o=(n(383),n(48)),component=Object(o.a)(d,(function(){var t=this,e=t._self._c;return e(l.a,{attrs:{"max-width":"20rem"}},[e(r.a,{staticClass:"card",attrs:{outlined:""}},[t.heading?e("h3",[t._v(t._s(t.heading))]):t._e(),t._v(" "),t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,n){"use strict";n.r(e);var r=n(249),l=(n(255),{props:{heading:{type:String,default:""},link:{type:String,default:""},description:{type:String,default:""},imagePath:{type:String,default:""}},methods:{getAlt:function(){return this.heading+" image"}}}),d=n(48),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("base-card",{attrs:{heading:t.heading}},[e("a",{attrs:{href:t.link}},[t.imagePath?e(r.a,{attrs:{src:t.imagePath,alt:t.getAlt()}}):t._e(),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseCard:n(385).default})}}]);