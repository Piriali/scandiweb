(function(e){function t(t){for(var r,o,c=t[0],u=t[1],i=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-6b93912e":"9f7f0205"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-6b93912e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-6b93912e":"35c59126"}[e]+".css",a=u.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var i=s[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],l=i.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],f.parentNode.removeChild(f),n(s)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/scandiweb/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"4c82":function(e,t,n){"use strict";n("cbbf")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("div",{staticClass:"container"},[n("div",{staticClass:"footer-inner"},[n("p",[e._v("Scandiweb Test assignment")])])])])}],s=(n("034f"),n("2877")),c={},u=Object(s["a"])(c,o,a,!1,null,null,null),i=u.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"container"},[n("div",{staticClass:"menu"},[n("h1",{staticClass:"bold f-55"},[e._v("Product List")]),n("div",{staticClass:"buttons-wrap"},[n("router-link",{attrs:{to:{name:"AddProduct"}}},[n("el-button",[e._v("Add")])],1),n("el-button",{attrs:{id:"delete-product-btn"},on:{click:function(t){return t.preventDefault(),e.deleteProducts.apply(null,arguments)}}},[e._v(" Mass Delete ")])],1)]),e.products?n("div",{staticClass:"list"},e._l(e.products,(function(t,r){return n("div",{key:r,staticClass:"product"},[n("el-checkbox",{attrs:{"true-label":t.sku},model:{value:e.checkbox[r],callback:function(t){e.$set(e.checkbox,r,t)},expression:"checkbox[index]"}}),n("div",{staticClass:"id"},[e._v(e._s(t.sku))]),n("h2",{staticClass:"name"},[e._v(e._s(t.name))]),n("span",{staticClass:"price"},[e._v(e._s(t.price)+" $")]),n("div",{staticClass:"attributes"},[t.weigth?n("span",[e._v("Weight: "+e._s(t.weigth))]):e._e(),t.size?n("span",[e._v("Size: "+e._s(t.size))]):e._e(),"furniture"===t.type?n("span",[e._v(" Dimension: "+e._s(t.height)+"x"+e._s(t.width)+"x"+e._s(t.length)+" ")]):e._e()])],1)})),0):e._e()])])},f=[],p={name:"HomePage",data:function(){return{checkbox:[]}},computed:{products:function(){return this.$store.state.products}},methods:{deleteProducts:function(){this.$store.commit("deleteProduct",this.checkbox)}}},h=p,v=(n("4c82"),Object(s["a"])(h,d,f,!1,null,"29d8dd9a",null)),m=v.exports;r["default"].use(l["a"]);var b=[{path:"/scandiweb",name:"Home",component:m},{path:"scandiweb/addproduct",name:"AddProduct",component:function(){return n.e("chunk-6b93912e").then(n.bind(null,"d0ec"))}}],g=new l["a"]({mode:"history",routes:b}),_=g,y=(n("4de4"),n("caad"),n("2532"),n("2f62"));r["default"].use(y["a"]);var w=new y["a"].Store({state:{products:[]},mutations:{addProduct:function(e,t){e.products.push(t)},deleteProduct:function(e,t){e.products=e.products.filter((function(e){return!t.includes(e.sku)}))}}}),k=n("5c96"),C=n.n(k),x=(n("0fae"),n("b2d6")),P=n.n(x);r["default"].use(C.a,{locale:P.a}),r["default"].config.productionTip=!1,new r["default"]({router:_,store:w,render:function(e){return e(i)}}).$mount("#app")},"85ec":function(e,t,n){},cbbf:function(e,t,n){}});
//# sourceMappingURL=app.06edd11b.js.map