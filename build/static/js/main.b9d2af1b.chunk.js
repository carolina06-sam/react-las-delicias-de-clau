(this["webpackJsonplas delicias de clau"]=this["webpackJsonplas delicias de clau"]||[]).push([[0],{26:function(e,c,t){},28:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t.n(a),r=t(19),n=t.n(r),i=t(8),o=t(2),l=t.p+"static/media/logo2.4da86b06.png",d=(t(26),t(0));var u=function(e){return Object(d.jsxs)("section",{className:"layout",children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("img",{src:l,alt:"My logo"})}),e.children]})},j=t(11),b=t(12),m=t(9),h=t(20),g=t.p+"static/media/carne asada.fc58021e.png",p=t.p+"static/media/yogurt.lacteos.7939f7ca.png",O=t.p+"static/media/chorizofinal.bb12d33c.png",x=t.p+"static/media/galletas.902a99fc.png",f=t.p+"static/media/Bebidas.03daa0fe.png",v=t.p+"static/media/carne a la plancha.953ed612.jpeg",y=t.p+"static/media/calentado.e1e81d9e.png",N={general:[{id:"gen1",name:"lacteos",category:"lacteos",styles:{backgroundImage:"url('".concat(p,"')")}},{id:"gen2",name:"carnicos",category:"carnicos",styles:{backgroundImage:"url('".concat(O,"')")}},{id:"gen3",name:"otros",category:"almuerzos",styles:{backgroundImage:"url('".concat(x,"')")}}],lacteos:[{id:"lacteos1",name:"yogurt",description:"Yogurth diferentes sabores 2 LItros",cost:10500,styles:{backgroundImage:"url('".concat(g,"')")}},{id:"lacteos2",name:"Queso",description:"Queso semidescremado 1 libra",cost:9e3,styles:{backgroundImage:"url('".concat(g,"')")}},{id:"lacteos3",name:"kumis ",description:"2 litros Kumis ",cost:12e3,styles:{backgroundImage:"url('".concat(v,"')")}}],desayunos:[{id:"carnicos1",name:"Tocineta ahumada.",description:"250 gramos",cost:6e3,styles:{backgroundImage:"url('".concat(y,"')")}},{id:"carnicos2",name:"Jamon ahumado",description:" 500 gramos",cost:7e3,styles:{backgroundImage:"url('".concat(y,"')")}},{id:"carnicos3",name:"Chorizo parrillero mixto",description:"10 Unidades",cost:6e3,styles:{backgroundImage:"url('".concat(y,"')")}},{id:"carnicos4",name:"Chorizo parrillero de c\xf3ctel",description:"1500 gramos",cost:5500,styles:{backgroundImage:"url('".concat(y,"')")}},{id:"carnicos5",name:"Salchicha",description:" 500 gramos",cost:6500,styles:{backgroundImage:"url('".concat(y,"')")}}],almuerzos:[{id:"menu del dia",name:"menu del dia",description:"(divercidad de alimentos)",cost:12e3,styles:{backgroundImage:"url('".concat(x,"')")}}],bebidas:[{id:"jugo naturales",name:"jugos",description:"jugo naturales con leches o agua",cost:4e3,styles:{backgroundImage:"url('".concat(f,"')")}}]},k=Object(a.createContext)();function C(e){var c,t=N.lacteos.concat(N.desayunos).concat(N.almuerzos).concat(N.bebidas).map((function(e){return e.id})),a={},r=Object(h.a)(t);try{for(r.s();!(c=r.n()).done;){a[c.value]=0}}catch(u){r.e(u)}finally{r.f()}var n=s.a.useState(a),i=Object(m.a)(n,2),o=i[0],l=i[1];return Object(d.jsx)(k.Provider,{value:{PRODUCTS:N,cart:o,increase:function(e){l(Object(b.a)(Object(b.a)({},o),{},Object(j.a)({},e.target.dataset.product,o[e.target.dataset.product]+1)))},decrease:function(e){o[e.target.dataset.product]>0&&l(Object(b.a)(Object(b.a)({},o),{},Object(j.a)({},e.target.dataset.product,o[e.target.dataset.product]-1)))}},children:e.children})}t(28);var w=function(e){return Object(d.jsxs)("section",{className:"menu",children:[Object(d.jsx)("div",{className:"container-general-articles",children:Object(d.jsxs)("div",{className:"general-articles",children:[Object(d.jsx)("div",{className:"arrow",onClick:e.clickLeftArrow}),Object(d.jsx)("div",{className:"articles",children:e.categories.map((function(c){return Object(d.jsxs)("figure",{onClick:e.clickCategories,"data-category":c.category,children:[Object(d.jsx)("div",{style:c.styles,"data-category":c.category}),Object(d.jsx)("figcaption",{"data-category":c.category,children:c.name})]},c.id)}))}),Object(d.jsx)("div",{className:"arrow",onClick:e.clickRightArrow})]})}),Object(d.jsx)("div",{className:"list-of-items",children:e.list.map((function(c){return Object(d.jsxs)("article",{children:[Object(d.jsxs)("div",{className:"contents",children:[Object(d.jsx)("figure",{style:c.styles}),Object(d.jsx)("h4",{children:c.name}),Object(d.jsx)("p",{children:c.description}),Object(d.jsxs)("p",{children:["$ ",c.cost]}),Object(d.jsx)("p",{children:e.amount[c.id]})]}),Object(d.jsx)("div",{className:"button button-left",onClick:e.decrease,"data-product":c.id,children:Object(d.jsx)("div",{className:"circle","data-product":c.id,children:"-"})}),Object(d.jsx)("div",{className:"button button-right",onClick:e.increase,"data-product":c.id,children:Object(d.jsx)("div",{className:"circle","data-product":c.id,children:"+"})})]},c.id)}))}),Object(d.jsx)("div",{children:Object(d.jsxs)(i.b,{to:"/order",className:"to-shopping-cart",children:[Object(d.jsx)("i",{className:"fas fa-cart-arrow-down"}),Object(d.jsx)("p",{className:"quantity",children:e.totalAmount})]})}),Object(d.jsx)("footer",{children:Object(d.jsxs)("div",{className:"networks",children:[Object(d.jsx)("p",{children:"Servicio a domicilio "}),Object(d.jsx)("p",{children:"Telefonos: 00000000000 "})]})})]})};var I=function(){var e=Object(a.useContext)(k),c=e.PRODUCTS,t=e.cart,r=e.increase,n=e.decrease,i=s.a.useState([0,1,2]),o=Object(m.a)(i,2),l=o[0],u=o[1],j=s.a.useState(c.lacteos),b=Object(m.a)(j,2),h=b[0],g=b[1],p=s.a.useState(""),O=Object(m.a)(p,2),x=O[0],f=O[1],v=c.lacteos;s.a.useEffect((function(){var e=document.querySelectorAll(".menu .container-general-articles .general-articles .articles figure");e.forEach((function(e){e.classList.remove("visible")})),l.forEach((function(c){e[c].classList.add("visible")}));var c=document.querySelectorAll(".menu .general-articles .arrow");0===l[0]?(c[0].style.color="var(--color-gray)",c[1].style.color="var(--color-red)"):l[2]===e.length-1?(c[1].style.color="var(--color-gray)",c[0].style.color="var(--color-red)"):(c[0].style.color="var(--color-red)",c[1].style.color="var(--color-red)")})),v=x?h.filter((function(e){return"".concat(e.name," ").concat(e.description).toLowerCase().includes(x.toLowerCase())})):h;var y=Object.values(t).reduce((function(e,c){return e+c}));return Object(d.jsx)(w,{handleChange:function(e){g(c.lacteos.concat(c.carnicos).concat(c.almuerzos).concat(c.bebidas).concat(c.all)),f(e.target.value)},clickRightArrow:function(){var e=document.querySelectorAll(".menu .container-general-articles .general-articles .articles figure");l[2]<e.length-1&&u(l.map((function(e){return e+1})))},clickLeftArrow:function(){l[0]>0&&u(l.map((function(e){return e-1})))},categories:c.general,clickCategories:function(e){g(c[e.target.dataset.category])},list:v,increase:r,decrease:n,amount:t,totalAmount:y})};t(34);var S=function(e){return Object(d.jsxs)("section",{className:"order",children:[Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h1",{children:"Mi Orden"}),Object(d.jsx)("i",{className:"fas fa-cart-arrow-down"})]}),Object(d.jsx)("div",{className:"message-container",children:Object(d.jsxs)("div",{className:"message",children:[Object(d.jsx)("h1",{children:"Recuerda:"}),Object(d.jsx)("p",{children:"Tu orden ser\xe1 enviada a nuestro whatsapp en donde coordinaremos la entrega y el pago"})]})}),Object(d.jsx)("div",{className:"articles",children:e.shoppingList.map((function(c,t){return Object(d.jsx)("div",{className:"article-container",children:Object(d.jsxs)("article",{children:[Object(d.jsx)("figure",{style:c.styles}),Object(d.jsxs)("div",{className:"contents",children:[Object(d.jsx)("h4",{children:c.name}),Object(d.jsx)("p",{children:c.description}),Object(d.jsxs)("p",{children:["$ ",c.cost]}),Object(d.jsx)("p",{children:e.cartValues[t]})]}),Object(d.jsx)("div",{className:"button button-left",onClick:e.decrease,"data-product":c.id,children:Object(d.jsx)("div",{className:"circle","data-product":c.id,children:"-"})}),Object(d.jsx)("div",{className:"button button-right",onClick:e.increase,"data-product":c.id,children:Object(d.jsx)("div",{className:"circle","data-product":c.id,children:"+"})})]})},c.id)}))}),Object(d.jsxs)("div",{className:"resume",children:[Object(d.jsx)("div",{children:Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("p",{children:"Agregar m\xe1s productos"})})}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("p",{children:"Total"}),Object(d.jsxs)("p",{children:["$ ",e.total]})]})}),Object(d.jsx)("div",{children:Object(d.jsxs)("a",{href:"https://api.whatsapp.com/send?phone=".concat(e.phone,"&text=").concat(e.message),children:[Object(d.jsx)("p",{children:"Confirmar orden"}),Object(d.jsx)("i",{className:"fab fa-whatsapp"})]})})]})]})};var L=function(){var e=Object(a.useContext)(k),c=e.PRODUCTS,t=e.cart,s=e.increase,r=e.decrease,n=[],i=[];Object.values(t).forEach((function(e,c){e>0&&(n.push(Object.keys(t)[c]),i.push(e))}));var o=[];Object.keys(c).forEach((function(e){c[e].forEach((function(t,a){n.forEach((function(t){t===c[e][a].id&&o.push(c[e][a])}))}))}));var l=0;o.forEach((function(e,c){l+=e.cost*i[c]}));var u=[];o.forEach((function(e,c){u.push("Producto ".concat(c+1,"\n      ").concat(e.name,": ").concat(i[c],"\n      descripcion: ").concat(e.description,"//\n    "))}));var j="Nuevo pedido:\n  \n  ".concat(u.join(""),"\n  ");return Object(d.jsx)(S,{cartValues:i,shoppingList:o,increase:s,decrease:r,phone:573207501413,message:j,total:l})};var A=function(){return Object(d.jsx)(i.a,{children:Object(d.jsx)(o.c,{children:Object(d.jsx)(u,{children:Object(d.jsxs)(C,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:I}),Object(d.jsx)(o.a,{exact:!0,path:"/order",component:L})]})})})})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,r=c.getLCP,n=c.getTTFB;t(e),a(e),s(e),r(e),n(e)}))};t(35);n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),E()}},[[36,1,2]]]);
//# sourceMappingURL=main.b9d2af1b.chunk.js.map