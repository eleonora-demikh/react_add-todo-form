(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),c=a(2),s=a(1),o=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),l=a(9),d=a.n(l),u=(a(15),a(16),a(0)),m=function(e){var t=e.user;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(null===t||void 0===t?void 0:t.email),children:null===t||void 0===t?void 0:t.name})},j=function(e){var t=e.todo;return Object(u.jsxs)("article",{"data-id":t.id,className:d()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(u.jsx)(m,{user:t.user})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=a(7),O=function(e){return o.find((function(t){return t.id===e}))},f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(h.a)(Object(h.a)({},e),{},{user:O(e.userId)})})),p=function(){var e=Object(s.useState)(0),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(!1),l=Object(c.a)(i,2),d=l[0],m=l[1],j=Object(s.useState)(""),h=Object(c.a)(j,2),p=h[0],x=h[1],v=Object(s.useState)(!1),y=Object(c.a)(v,2),S=y[0],N=y[1],I=Object(s.useState)(f),g=Object(c.a)(I,2),C=g[0],_=g[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){if(e.preventDefault(),N(!p),m(!a),p&&a){var t,i={id:(t=C,Math.max.apply(Math,Object(r.a)(t.map((function(e){return e.id}))))+1),title:p,completed:!1,userId:a,user:O(a)};_((function(e){return[].concat(Object(r.a)(e),[i])})),n(0),x(""),N(!1),m(!1)}},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(u.jsx)("input",{type:"text","data-cy":"titleInput",id:"title",placeholder:"Enter a title",value:p,onChange:function(e){var t=e.target.value.replace(/[^A-Za-z0-9\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404\s]/g,"");x(t),N(!1)}}),S&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"selectUser",children:"User: "}),Object(u.jsxs)("select",{id:"selectUser","data-cy":"userSelect",value:a,onChange:function(e){n(+e.target.value),m(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),o.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),d&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)(b,{todos:C})]})};i.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.67ea6b43.chunk.js.map