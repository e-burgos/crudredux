(this.webpackJsonpcrudredux=this.webpackJsonpcrudredux||[]).push([[0],{41:function(e,t,a){e.exports=a(70)},46:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),u=(a(46),a(13)),l=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary justify-content-between"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,r.a.createElement(u.b,{to:"/",className:"text-light"},"CRUD - React, Redux, REST API & Axios"))),r.a.createElement(u.b,{to:"/productos/nuevo",className:"btn btn-danger nuevo-post d-block d-md-inline-block"},"Agregar Producto +"))},s=a(3),i=a(11),p=a.n(i),m=a(4),d=a(10),b=a.n(d),O=a(15),E=a(38),f=a.n(E).a.create({baseURL:"https://crud-reduxserver.herokuapp.com/"});var R=function(){return{type:"AGREGAR_PRODUCTO",payload:!0}},v=function(e){return{type:"AGREGAR_PRODUCTO_EXITO",payload:e}},g=function(e){return{type:"AGREGAR_PRODUCTO_ERROR",payload:e}};var y=function(){return{type:"COMENZAR_DESCARGA_PRODUCTOS",payload:!0}},h=function(e){return{type:"DESCARGA_PRODUCTOS_EXITO",payload:e}},_=function(){return{type:"DESCARGA_PRODUCTOS_ERROR",payload:!0}};var N=function(e){return{type:"OBTENER_PRODUCTO_ELIMINAR",payload:e}},A=function(){return{type:"PRODUCTO_ELIMINADO_EXITO",payload:null}},T=function(){return{type:"PRODUCTO_ELIMINADO_ERROR",payload:!0}};var j=function(e){return{type:"OBTENER_PRODUCTO_EDITAR",payload:e}};var D=function(){return{type:"COMENZAR_EDICION_PRODUCTO"}},C=function(e){return{type:"PRODUCTO_EDITADO_EXITO",payload:e}},x=function(){return{type:"PRODUCTO_EDITADO_ERROR",payload:!0}},w=function(e){var t=e.producto,a=t.nombre,n=t.precio,c=t.id,o=Object(m.b)(),u=Object(s.f)(),l=function(e){var t=p.a.mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1});t.fire({title:"\xbfEstas Seguro?",text:"Luego de eliminar este producto no podr\xe1s revertir esta acci\xf3n",icon:"warning",showCancelButton:!0,confirmButtonText:"Si, eliminarlo",cancelButtonText:"Cancelar",reverseButtons:!0}).then((function(a){a.isConfirmed?o(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(N(e)),t.prev=1,t.next=4,f.delete("/productos/".concat(e));case 4:a(A()),p.a.fire("Eliminado!","Este producto fue eliminado.","success"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),a(T());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(e)):a.dismiss===p.a.DismissReason.cancel&&t.fire("Cancelado","Tu producto esta a salvo","error")}))},i=function(e){o(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(j(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),u.push("/productos/editar/".concat(e.id))};return r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,r.a.createElement("span",{className:"font-weight-bold"},"$ ",n)),r.a.createElement("td",{className:"acciones"},r.a.createElement("button",{type:"button",className:"btn btn-primary mr-2",onClick:function(){return i(t)}},"Editar"),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return l(c)}},"Eliminar")))},P=function(){var e=Object(m.b)();Object(n.useEffect)((function(){e(function(){var e=Object(O.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(y()),e.prev=1,e.next=4,f.get("/productos");case 4:a=e.sent,t(h(a.data)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(_());case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(m.c)((function(e){return e.productos.productos})),a=Object(m.c)((function(e){return e.productos.error})),c=Object(m.c)((function(e){return e.productos.loading}));return r.a.createElement(n.Fragment,null,r.a.createElement("h2",{className:"text-center my-5"},"Listado de Productos"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",{className:"bg-primary table-black text-light"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Nombre"),r.a.createElement("th",{scope:"col"},"Precio"),r.a.createElement("th",{scope:"col"},"Acciones"))),r.a.createElement("tbody",null,0===t.length?null:t.map((function(e){return r.a.createElement(w,{key:e.id,producto:e})})))),0===t.length?r.a.createElement("p",{className:"alert alert-light w-100 p2 mt-4 text-center"},"No hay Productos"):null,c?r.a.createElement("p",{className:"alert alert-success p2 mt-4 text-center"},"Cargando..."):null,a?r.a.createElement("p",{className:"alert alert-danger p2 mt-4 text-center"},"Hubo un error al obtener los productos, por favor actualice su navegador."):null)},I=a(18);var U=function(e){return{type:"MOSTRAR_ALERTA",payload:e}};var S=function(){return{type:"OCULTAR_ALERTA"}},k=function(e){var t=e.history,a=Object(n.useState)(""),c=Object(I.a)(a,2),o=c[0],u=c[1],l=Object(n.useState)(0),s=Object(I.a)(l,2),i=s[0],d=s[1],E=Object(m.b)(),y=Object(m.c)((function(e){return e.productos.loading})),h=Object(m.c)((function(e){return e.productos.error})),_=Object(m.c)((function(e){return e.alerta.alerta})),N=function(e){return E(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(R()),t.prev=1,t.next=4,f.post("/productos",e);case 4:a(v(e)),p.a.fire("Agregado","Se agrego un nuevo producto","success"),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),a(g(!0)),p.a.fire({icon:"error",title:"Hubo un error",text:"Por favor intenta de nuevo."});case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(e))};return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"text-center mb-4 font-weight-bold"},"Agregar Nuevo Producto"),_?r.a.createElement("p",{className:_.classes},_.msg):null,r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""===o.trim()||i<=0){E(function(e){return function(t){t(U(e))}}({msg:"Ambos compos son obligatorios",classes:"alert alert-danger text-center text-uppercase p3"}))}else E((function(e){e(S())})),N({nombre:o,precio:i}),t.push("/")}},r.a.createElement("div",{className:"from-group mb-4"},r.a.createElement("label",null,"Nombre Producto"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Ingrese un nombre",name:"nombre",value:o,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",{className:"from-group mb-4"},r.a.createElement("label",null,"Precio Producto"),r.a.createElement("input",{type:"number",className:"form-control",placeholder:"Ingrese su precio",name:"precio",value:i,onChange:function(e){return d(Number(e.target.value))}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary font-weight-bold text-uppercase d-block w-100"},"Agregar")),y?r.a.createElement("p",null,"'Cargando...'"):null,h?r.a.createElement("p",{className:"alert alert-danger p2 mt-4 text-center"},"Hubo un error"):null))))},G=a(22),L=a(2),B=function(){var e=Object(s.f)(),t=Object(m.b)(),a=Object(n.useState)({nombre:"",precio:""}),c=Object(I.a)(a,2),o=c[0],u=c[1],l=Object(m.c)((function(e){return e.productos.productoeditar}));Object(n.useEffect)((function(){u(l)}),[l]);var i=function(e){u(Object(L.a)(Object(L.a)({},o),{},Object(G.a)({},e.target.name,e.target.value)))},p=o.nombre,d=o.precio;return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"text-center mb-4 font-weight-bold"},"Editar Producto"),r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),t(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(D()),t.prev=1,t.next=4,f.put("/productos/".concat(e.id),e);case 4:a(C(e)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0),a(x());case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}(o)),e.push("/")}},r.a.createElement("div",{className:"from-group mb-4"},r.a.createElement("label",null,"Nombre Producto"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Ingrese un nombre",name:"nombre",value:p,onChange:i})),r.a.createElement("div",{className:"from-group mb-4"},r.a.createElement("label",null,"Precio Producto"),r.a.createElement("input",{type:"number",className:"form-control",placeholder:"Ingrese su precio",name:"precio",value:d,onChange:i})),r.a.createElement("button",{type:"submit",className:"btn btn-primary font-weight-bold text-uppercase d-block w-100"},"Actualizar"))))))},M=a(12),X=a(39),H=a(40),Z={productos:[],error:null,loading:!1,productoeliminar:null,productoeditar:null},J={alerta:null},V=Object(M.c)({productos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COMENZAR_DESCARGA_PRODUCTOS":case"AGREGAR_PRODUCTO":return Object(L.a)(Object(L.a)({},e),{},{loading:t.payload});case"AGREGAR_PRODUCTO_EXITO":return Object(L.a)(Object(L.a)({},e),{},{loading:!1,productos:[].concat(Object(H.a)(e.productos),[t.payload])});case"AGREGAR_PRODUCTO_ERROR":case"DESCARGA_PRODUCTOS_ERROR":case"PRODUCTO_ELIMINADO_ERROR":case"PRODUCTO_EDITADO_ERROR":return Object(L.a)(Object(L.a)({},e),{},{loading:!1,error:t.payload});case"DESCARGA_PRODUCTOS_EXITO":return Object(L.a)(Object(L.a)({},e),{},{loading:!1,error:null,productos:t.payload});case"OBTENER_PRODUCTO_ELIMINAR":return Object(L.a)(Object(L.a)({},e),{},{productoeliminar:t.payload});case"PRODUCTO_ELIMINADO_EXITO":return Object(L.a)(Object(L.a)({},e),{},{productos:e.productos.filter((function(t){return t.id!==e.productoeliminar})),productoeliminar:null});case"OBTENER_PRODUCTO_EDITAR":return Object(L.a)(Object(L.a)({},e),{},{productoeditar:t.payload});case"PRODUCTO_EDITADO_EXITO":return Object(L.a)(Object(L.a)({},e),{},{productoeditar:null,productos:e.productos.map((function(e){return e.id===e.payload.id?t.payload:e}))});default:return e}},alerta:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOSTRAR_ALERTA":return Object(L.a)(Object(L.a)({},e),{},{alerta:t.payload});case"OCULTAR_ALERTA":return Object(L.a)(Object(L.a)({},e),{},{alerta:null});default:return e}}}),W=Object(M.e)(V,Object(M.d)(Object(M.a)(X.a),"object"===typeof window&&"undefined"!==typeof window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));var $=function(){return r.a.createElement(u.a,null,r.a.createElement(m.a,{store:W},r.a.createElement(l,null),r.a.createElement("div",{className:"container mt-5"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:P}),r.a.createElement(s.a,{exact:!0,path:"/productos/nuevo",component:k}),r.a.createElement(s.a,{exact:!0,path:"/productos/editar/:id",component:B})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.8b5d8f04.chunk.js.map