(this.webpackJsonptema03=this.webpackJsonptema03||[]).push([[0],{22:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s(16),n=s.n(i),r=(s(22),s(14)),a=s(2),l=s(7),u=s(1),o=function(e){return Object(u.jsx)("li",{className:"classlist",children:Object(u.jsxs)(l.b,{to:"/character/".concat(e.user.id),children:[Object(u.jsx)("img",{className:"card__img",src:e.user.image,alt:"Foto de: ".concat(e.user.name),title:"Foto de: ".concat(e.user.name)}),Object(u.jsx)("h2",{className:"filter__title",children:e.user.name}),Object(u.jsx)("h3",{className:"filter__description",children:e.user.species})]})})},j=function(e){if(0===e.users.length)return Object(u.jsxs)("div",{className:"problem_image",children:[Object(u.jsx)("img",{src:"https://media.giphy.com/media/YO45ydzTCoHdoR074O/giphy.gif",alt:"gif rick y morty",title:"rick y morty"}),"B\xfasqueda undefined!!!!!"]});var t=e.users.map((function(e){return Object(u.jsx)(o,{user:e},e.id)}));return Object(u.jsx)("section",{className:"filter__home",children:Object(u.jsx)("ul",{className:"class__list_ul",children:t})})},d=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{name:e.name,id:e.id,species:e.species,status:e.status,origin:e.origin.name,episode:e.episode,image:e.image}}))}))},m=function(e){return Object(u.jsx)("section",{children:Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(u.jsx)("input",{className:"form__input-text",type:"text",name:"name",placeholder:"Ric",id:"name",onChange:function(t){e.handleFilter({value:t.target.value,key:"name"})}})})})},h=function(e){return Object(u.jsxs)("section",{className:"class__card",children:[Object(u.jsx)("img",{className:"card__img",src:e.user.image,alt:"Foto de: ".concat(e.user.name),title:"Foto de: ".concat(e.user.name)}),Object(u.jsxs)("ul",{className:"card__ul",children:[Object(u.jsx)("li",{className:"card__name",children:e.user.name}),Object(u.jsxs)("li",{children:["Especie: ",e.user.species]}),Object(u.jsxs)("li",{children:["Status: ","Alive"===e.user.status?Object(u.jsxs)("li",{className:"list-detail",children:["Status: ",e.user.status," \ud83d\udc4d"]}):"Dead"===e.user.status?Object(u.jsxs)("li",{className:"list-detail",children:["Status: ",e.user.status," \ud83d\udc4e"]}):void 0]}),Object(u.jsxs)("li",{children:["Origin: ",e.user.origin]}),Object(u.jsxs)("li",{children:["Episodes: ",e.user.episode.length]})]}),Object(u.jsx)(l.b,{to:"/",children:Object(u.jsx)("span",{className:"link__volver",children:"\ud83d\udef5...Volver"})})]})},b=(s(29),s.p+"static/media/logo.96b24c02.png"),O={get:function(e){var t=localStorage.getItem(e);if(null!==t)return JSON.parse(t)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},f=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),s=t[0],i=t[1],n=Object(c.useState)(""),l=Object(r.a)(n,2),o=l[0],f=l[1];Object(c.useEffect)((function(){d().then((function(e){return i(e)}))}),[]),Object(c.useEffect)((function(){O.set("users",s)}),[s]);var p=s.filter((function(e){return e.name.toUpperCase().includes(o.toUpperCase())}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:Object(u.jsx)("a",{href:"http://localhost:3000/",children:Object(u.jsx)("img",{className:"logo__img",src:b,alt:"Ricky and Morty",title:"Ricky and Morty"})})}),Object(u.jsxs)(a.c,{children:[Object(u.jsxs)(a.a,{exact:!0,path:"/",children:[Object(u.jsx)(m,{handleFilter:function(e){"name"===e.key&&f(e.value)}}),Object(u.jsx)(j,{users:p})]}),Object(u.jsx)(a.a,{path:"/character/:id",render:function(e){var t=e.match.params.id,c=s.find((function(e){return e.id==t}));return void 0!==c?Object(u.jsx)(h,{user:c}):Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"problem_image",children:[Object(u.jsx)("img",{src:"https://media.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif",alt:"gif rick y morty",title:"rick y morty"}),"El personaje que buscas no existe!!!!"]})})}})]})]})},p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,31)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),i(e),n(e),r(e)}))};n.a.render(Object(u.jsx)(l.a,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.37ed7db1.chunk.js.map