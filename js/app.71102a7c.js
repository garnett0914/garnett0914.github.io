(function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],h=0,d=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0cc617":"204590ee","chunk-346d965a":"d79b0395","chunk-07858de6":"9cedec8e","chunk-408f98b6":"808ca863","chunk-2012d8ee":"e8e4529f","chunk-9751df96":"b5347e7b","chunk-f88b53c8":"22103a46","chunk-09bbaf00":"83ee5b3e","chunk-7ffb93e4":"cafba67d","chunk-ec346acc":"2d175b5a","chunk-eb84b2bc":"13482c4c","chunk-74a61f8a":"1f8bd698","chunk-0907a806":"5face195"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-346d965a":1,"chunk-07858de6":1,"chunk-408f98b6":1,"chunk-2012d8ee":1,"chunk-9751df96":1,"chunk-f88b53c8":1,"chunk-09bbaf00":1,"chunk-7ffb93e4":1,"chunk-ec346acc":1,"chunk-eb84b2bc":1,"chunk-74a61f8a":1,"chunk-0907a806":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0cc617":"31d6cfe0","chunk-346d965a":"5801f85c","chunk-07858de6":"cce48b1d","chunk-408f98b6":"6ebc090f","chunk-2012d8ee":"1b1e39da","chunk-9751df96":"9c78568d","chunk-f88b53c8":"85e964b6","chunk-09bbaf00":"d3863514","chunk-7ffb93e4":"c3421f3f","chunk-ec346acc":"4d5a4d99","chunk-eb84b2bc":"6d1547d1","chunk-74a61f8a":"e182ce72","chunk-0907a806":"3347c730"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var s=u[o],h=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(h===r||h===c))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){s=d[o],h=s.getAttribute("data-href");if(h===r||h===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var s,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=o(e);var d=new Error;s=function(t){h.onerror=h.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:h})}),12e4);h.onerror=h.onload=s,document.head.appendChild(h)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],h=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=h;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("home-app-bar"),n("v-main",[n("router-view")],1),n("v-snackbar",{attrs:{"multi-line":!0,right:!0,top:!0,timeout:6e3,color:e.$store.state.snackbar.variant},model:{value:e.$store.state.snackbar.show,callback:function(t){e.$set(e.$store.state.snackbar,"show",t)},expression:"$store.state.snackbar.show"}},[e._v(" "+e._s(e.$store.state.snackbar.message)+" "),n("v-btn",{attrs:{dark:"",text:""},on:{click:function(t){return e.$store.commit("updateSnackbar",{show:!1})}}},[e._v(" Close ")])],1),n("home-footer")],1)},c=[],u=(n("d3b7"),{name:"App",components:{HomeAppBar:function(){return Promise.all([n.e("chunk-346d965a"),n.e("chunk-07858de6"),n.e("chunk-408f98b6"),n.e("chunk-2012d8ee")]).then(n.bind(null,"8c2b"))},HomeFooter:function(){return Promise.all([n.e("chunk-346d965a"),n.e("chunk-9751df96")]).then(n.bind(null,"5bcb"))}},data:function(){return{}}}),o=u,i=n("2877"),s=n("6544"),h=n.n(s),d=n("7496"),f=n("8336"),p=n("f6c4"),l=n("2db4"),b=Object(i["a"])(o,a,c,!1,null,null,null),m=b.exports;h()(b,{VApp:d["a"],VBtn:f["a"],VMain:p["a"],VSnackbar:l["a"]});var k=n("f309");r["a"].use(k["a"]);var g=new k["a"]({}),v=n("8c4f");r["a"].use(v["a"]);var y=new v["a"]({mode:"history",base:"/",routes:[{path:"/",component:function(){return n.e("chunk-2d0cc617").then(n.bind(null,"4e4d"))}},{path:"",name:"Home",component:function(){return Promise.all([n.e("chunk-346d965a"),n.e("chunk-f88b53c8"),n.e("chunk-408f98b6"),n.e("chunk-74a61f8a")]).then(n.bind(null,"9553"))}},{path:"/store",name:"Store",component:function(){return Promise.all([n.e("chunk-346d965a"),n.e("chunk-f88b53c8"),n.e("chunk-09bbaf00"),n.e("chunk-eb84b2bc")]).then(n.bind(null,"1d34"))}},{path:"/cart",name:"Cart",component:function(){return Promise.all([n.e("chunk-346d965a"),n.e("chunk-f88b53c8"),n.e("chunk-09bbaf00"),n.e("chunk-07858de6"),n.e("chunk-7ffb93e4")]).then(n.bind(null,"b789"))}},{path:"/checkout",name:"Checkout",component:function(){return Promise.all([n.e("chunk-346d965a"),n.e("chunk-f88b53c8"),n.e("chunk-09bbaf00"),n.e("chunk-07858de6"),n.e("chunk-ec346acc")]).then(n.bind(null,"7cb4"))}},{path:"/thank-you",name:"Thankyou",component:function(){return Promise.all([n.e("chunk-f88b53c8"),n.e("chunk-0907a806")]).then(n.bind(null,"2368"))}}]}),w=y,S=(n("c740"),n("4160"),n("a434"),n("159b"),n("5530")),P=n("2f62");r["a"].use(P["a"]);var j=new P["a"].Store({state:{products:[{itemId:1,image:"https://raw.githubusercontent.com/garnett0914/garnett0914.github.io/main/img/products/switch-mid.jpg",name:"Nintendo Switch",price:9780},{itemId:2,image:"https://raw.githubusercontent.com/garnett0914/garnett0914.github.io/main/img/products/ps5.jpg",name:"PS5",price:15980},{itemId:3,image:"https://raw.githubusercontent.com/garnett0914/garnett0914.github.io/main/img/products/xbox-series-x-mid.png",name:"XBOX SERIES X",price:15380},{itemId:4,image:"https://raw.githubusercontent.com/garnett0914/garnett0914.github.io/main/img/products/ps5-digital.jpg",name:"PS5 Digital Edition",price:12980},{itemId:5,image:"https://raw.githubusercontent.com/garnett0914/garnett0914.github.io/main/img/products/xbox-series-s.png",name:"XBOX SERIES S",price:9480},{itemId:6,image:"https://raw.githubusercontent.com/garnett0914/garnett0914.github.io/main/img/products/duelsense.jpg",name:"DuelSense Remote Controller",price:2180}],priceFilter:"Any",snackbar:{show:!1,variant:"success",message:"Success! Item added to the cart."},cart:[]},getters:{priceFilter:function(e){return e.priceFilter},cartItems:function(e){return e.cart},cartTotalPrice:function(e){var t=0;return e.cart.forEach((function(e){t+=e.item.price*e.quantity})),t}},mutations:{addItemToCart:function(e,t){var n=t.item,r=t.quantity,a=e.cart.findIndex((function(e){return e.item.itemId===n.itemId}));-1===a?e.cart.push({item:n,quantity:r}):e.cart[a].quantity+=1},updateSnackbar:function(e,t){e.snackbar=Object(S["a"])(Object(S["a"])({},e.snackbar),t)},updatepriceFilter:function(e,t){e.priceFilter=t},updateCart:function(e,t){var n=e.cart.findIndex((function(e){return e.item.itemId===t}));-1!==n&&e.cart.splice(n,1)},updateCartQuantity:function(e,t){var n=t.value,r=t.index;e.cart[r].quantity=n}},actions:{updatepriceFilter:function(e,t){var n=e.commit;n("updatepriceFilter",t)},updateCart:function(e,t){var n=e.commit;n("updateCart",t)},updateCartQuantity:function(e,t){var n=e.commit;n("updateCartQuantity",t)}}});r["a"].config.productionTip=!1,new r["a"]({vuetify:g,router:w,store:j,render:function(e){return e(m)}}).$mount("#app")}});
//# sourceMappingURL=app.71102a7c.js.map