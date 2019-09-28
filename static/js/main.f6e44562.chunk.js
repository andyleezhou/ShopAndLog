(window["webpackJsonpshopping-cart-project"]=window["webpackJsonpshopping-cart-project"]||[]).push([[0],{15:function(e,t,r){},28:function(e,t,r){e.exports=r(42)},33:function(e,t,r){},39:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(17),o=r.n(c),s=(r(33),r(11)),i=r(2),l=r(12),m=r(5),u="USER_REGISTER_REQUEST",p="USER_REGISTER_SUCCESS",E="USER_REGISTER_FAILURE",d="USERS_DELETE REQUEST",f="USERS_DELETE_SUCCESS",b="USERS_DELETE_FAILURE",O="USERS_GETALL_REQUEST",g="USERS_GETALL_SUCCESS",v="USERS_GETALL_FAILURE",h=r(4);r(15);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){var t={firstName:"",lastName:"",username:"",password:"",isLoggedIn:!1},r=Object(m.c)((function(e){return e.registration})),c=Object(m.b)(),o=Object(a.useState)(t),s=Object(l.a)(o,2),u=s[0],p=s[1],E=function(e){p(j({},u,Object(i.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"login-page"},n.a.createElement("div",{className:"form"},n.a.createElement("h1",null,"Login Page"),n.a.createElement("form",{className:"login-form",name:"form",onSubmit:function(a){a.preventDefault();var n=j({},u,{username:u.username,password:u.password,isLoggedIn:!0});u.username==r.username&&u.password==r.password&&""!=u.username&&""!=u.password&&(c(function(e){return{type:"USER_LOGIN_SUCCESS",user:e}}(n)),e.history.push("/home"),p(t))}},n.a.createElement("label",{htmlFor:"username"},"Username"),n.a.createElement("input",{placeholder:"username",onChange:E,value:u.username,name:"username",type:"text"}),n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{placeholder:"password",onChange:E,value:u.password,name:"password",type:"password"}),n.a.createElement("button",{className:"btn btn-primary"},"Submit ",n.a.createElement(h.b,{to:"/home"})),n.a.createElement("p",{className:"message"},"Not registered? ",n.a.createElement(h.b,{to:"/register"},"Create an account")))))};function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e){var t={firstName:"",lastName:"",username:"",password:"",submitted:!1},r=Object(m.b)(),c=Object(a.useState)(t),o=Object(l.a)(c,2),s=o[0],u=o[1],E=function(e){u(S({},s,Object(i.a)({},e.target.name,e.target.value)))},d=s.submitted;return n.a.createElement("div",{className:"login-page"},n.a.createElement("div",{className:"form"},n.a.createElement("h2",null,"Registration Page"),n.a.createElement("form",{className:"login-form",name:"form",onSubmit:function(a){a.preventDefault();var n=S({},s,{submitted:!0});s.firstName&&s.lastName&&s.username&&s.password&&(r(function(e){return{type:p,user:e}}(n)),u(t),e.history.push("/"))}},n.a.createElement("div",{className:"form-group"+(d&&!s.firstName?"has-error":"")},n.a.createElement("label",{htmlFor:"firstName"},"First Name"),n.a.createElement("input",{placeholder:"John",type:"text",className:"form-control",name:"firstName",value:s.firstName,onChange:E}),d&&!s.firstName&&n.a.createElement("div",{className:"help-block"},"First Name is required")),n.a.createElement("div",{className:"form-group"+(d&&!s.lastName?"has-error":"")},n.a.createElement("label",{htmlFor:"lastName"},"Last Name"),n.a.createElement("input",{placeholder:"Doe",type:"text",className:"form-control",name:"lastName",value:s.lastName,onChange:E}),d&&!s.lastName&&n.a.createElement("div",{className:"help-block"},"Last Name is required")),n.a.createElement("div",{className:"form-group"+(d&&!s.username?"has-error":"")},n.a.createElement("label",{htmlFor:"username"},"Username"),n.a.createElement("input",{placeholder:"John_Doe",type:"text",className:"form-control",name:"username",value:s.username,onChange:E}),d&&!s.username&&n.a.createElement("div",{className:"help-block"},"Username is required")),n.a.createElement("div",{className:"form-group"+(d&&!s.password?"has-error":"")},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{placeholder:"doe123",type:"password",className:"form-control",name:"password",value:s.password,onChange:E}),d&&!s.password&&n.a.createElement("div",{className:"help-block"},"Password is required")),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Register"),n.a.createElement(h.b,{to:"/login",className:"btn btn-link"},"Cancel")))))},_=function(){var e=Object(m.c)((function(e){return e.registration})),t=Object(m.b)();Object(a.useEffect)((function(){t({type:g,users:e}),console.log(e)}),[e]);return n.a.createElement(a.Fragment,null,n.a.createElement("h1",null,"Hi ",e.firstName," !"),n.a.createElement("p",null,"Welcome to the Good Place"),n.a.createElement("table",{class:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"First"),n.a.createElement("th",{scope:"col"},"Last"),n.a.createElement("th",{scope:"col"},"Username"))),n.a.createElement("tbody",null,e.users.map((function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("th",{scope:"row"},"1"),n.a.createElement("td",null,e.firstName),n.a.createElement("td",null,e.lastName),n.a.createElement("td",null,e.username))})))),n.a.createElement("p",null,n.a.createElement(h.b,{to:"/login"},n.a.createElement("button",{className:"btn btn-warning"},"Logout")),"   ",n.a.createElement(h.b,{to:"/shop"},n.a.createElement("button",{className:"btn btn-primary"},"Shop Here"))))},L=r(14),I=function(e){var t=e.activeTab,r=e.onTabChange;return n.a.createElement("div",{className:"navbar"},n.a.createElement("nav",{className:"App-nav"},n.a.createElement("ul",null,n.a.createElement("li",{className:"App-nav-item ".concat(0===t&&"selected")},n.a.createElement("a",{onClick:function(){return r(0)}},"Items")),n.a.createElement("li",{className:"App-nav-item ".concat(1===t&&"selected")},n.a.createElement("a",{onClick:function(){return r(1)}},"Cart")))),n.a.createElement("p",null,n.a.createElement(h.b,{to:"/",className:"brand-logo"},n.a.createElement("button",{className:"btn btn-danger"},"Logout"))))},R=(r(39),r(40),function(e){var t=e.item,r=e.children;return n.a.createElement("div",{className:"Item"},n.a.createElement("div",{className:"Item-left"},n.a.createElement("div",{className:"Item-image"}),n.a.createElement("div",{className:"Item-title"}," ",t.name),n.a.createElement("div",{className:"Item-description"}," ",t.description)),n.a.createElement("div",{className:"Item-right"},n.a.createElement("div",{className:"Item-price"}," $",t.price),r))});var D=function(e){var t=e.items,r=e.onAddToCart;return n.a.createElement("ul",{className:"ItemPage-items"},t.map((function(e){return n.a.createElement("li",{key:e.id,className:"ItemPage-item"},n.a.createElement(R,{item:e},n.a.createElement("button",{className:"Item-addToCart",onClick:function(){return r(e)}},"Add to Cart")))})))},C=[{id:0,name:"Apple iPad Mini 2 16GB",description:"An iPad like no other. 16GB, WiFi, 4G.",price:229},{id:1,name:"Apple iPad Mini 2 32GB",description:"Even larger than the 16GB.",price:279},{id:2,name:"Canon T7i",description:"DSLR camera with lots of megapixels.",price:749.99},{id:3,name:"Apple Watch Sport",description:"A watch",price:249.99},{id:4,name:"Apple Watch Silver",description:"A more expensive watch",price:599.99}],T=(r(41),"ADD_TO_CART"),U="REMOVE_FROM_CART",A="UPDATE_CART",k="INCREMENT",G="DECREMENT";var F=function(e){return{type:k,count:e}},x=function(e){return{type:G,count:e}};var M=function(e){var t=e.items,r=Object(m.c)((function(e){return e.count})),a=Object(m.b)(),c=function(e){e.preventDefault(),a(F(r))},o=function(e){e.preventDefault(),a(x(r))};return n.a.createElement("ul",{className:"CartPage-items"},t.map((function(e){return n.a.createElement("li",{key:e.id,className:"CartPage-item"},n.a.createElement(R,{item:e},n.a.createElement("div",{className:"CartItem-controls"},n.a.createElement("button",{className:"CartItem-removeOne",onClick:o},"-")," ",n.a.createElement("span",{className:"CartItem-count"},r.count),n.a.createElement("button",{className:"CartItem-addOne",onClick:c},"+")," ")))})))};function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var q=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),r=t[0],c=t[1],o=Object(a.useState)([]),s=Object(l.a)(o,2),m=s[0],u=s[1],p=function(e){u([].concat(Object(L.a)(m),[e.id]))},E=function(){var e=m.reduce((function(e,t){return e[t]=e[t]||0,e[t]++,e}),{}),t=Object.keys(e).map((function(t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},C.find((function(e){return e.id===parseInt(t,10)})),{count:e[t]})}));return n.a.createElement(M,{items:t})};return n.a.createElement("div",{className:"App"},n.a.createElement(I,{activeTab:r,onTabChange:function(e){c(e)}}),n.a.createElement("main",{className:"App-content"},function(){switch(r){case 0:return n.a.createElement(D,{items:C,onAddToCart:p});case 1:return E();default:return null}}()))},J=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement(s.d,null,n.a.createElement(s.b,{exact:!0,path:"/",render:function(){return n.a.createElement(s.a,{to:"/login"})}}),n.a.createElement(s.b,{path:"/login",component:N}),n.a.createElement(s.b,{path:"/register",component:P}),n.a.createElement(s.b,{path:"/home",component:_}),n.a.createElement(s.b,{path:"/shop",component:q}),n.a.createElement(s.b,{path:"/cart",component:M}))))},Q=r(13);function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V={firstName:"TESTER",lastName:"",username:"",password:"",isLoggedIn:!1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN_REQUEST":return X({},e);case"USER_LOGIN_SUCCESS":return console.log("GETTING CALLED"),X({},t.user,{isLoggedIn:!0});case"USER_LOGIN_FAILURE":case"USER_LOGOUT":default:return e}};function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K={items:[]};var Y="ALERT_SUCESS",Z="ALERT_ERROR",ee="ALERT_CLEAR";function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ae={itemList:{cart:[{_id:"00",name:"TEST ITEM"}]},newItem:{item:null},activeItem:{item:null},deletedItem:{item:null},updatedItem:{item:null}};var ne=r(27);function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var se={firstName:"",lastName:"",username:"",password:"",registration:!1,error:!1,users:[]};var ie={count:1};var le=Object(Q.b)({authentication:H,users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return z({},e,{loading:!0});case g:return z({},e,{users:t.users});case v:return z({},e,{error:t.error});default:return e}},shopping:function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case T:return e=r.itemsList.cart.findIndex((function(e){return e._id===a._id})),console.log(r.itemsList.cart[e]),(t=Object(L.a)(r))[e].cart.push(a.item),t;case U:e=r.itemsList.cart.findIndex((function(e){return e._id===a._id}));var n=r.itemsList.cart.slice(),c=n.splice(e,1)[0];return re({},r,{itemsList:re({},r.itemsList,{cart:n}),deletedItem:re({},r.deletedItem,{item:c})});case A:e=r.itemsList.cart.findIndex((function(e){return e._id===a._id}));var o=r.itemsList.cart.slice(),s=o.concat(r.itemList.cart);return re({},r,{itemsList:re({},r.itemList,{cart:o}),updatedItem:re({},r.updatedItem,{item:s})});default:return r}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return{messsage:t.messsage};case Z:case ee:return{message:t.message};default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return oe({},t.user,{registration:!0});case p:return oe({},t.user,{registration:!0,users:[].concat(Object(L.a)(e.users),[t.user])});case E:default:return e;case d:return oe({},e,{items:e.items.map((function(e){return e.id===t.id?oe({},e,{deleting:!0}):e}))});case f:return console.log(e.users),oe({},e,{users:e.users.filter((function(e){return e.id!==t.id}))});case b:return oe({},e,{items:e.items.map((function(e){if(e.id===t.id){e.deleting;return oe({},Object(ne.a)(e,["deleting"]),{deleteError:t.error})}return e}))})}},count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie;switch((arguments.length>1?arguments[1]:void 0).type){case k:return{count:e.count+1};case G:return{count:e.count-1};default:return e}}}),me=Object(Q.c)(le,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(n.a.createElement(m.a,{store:me},n.a.createElement(h.a,{basename:"/ShopAndLog"},n.a.createElement(J,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.f6e44562.chunk.js.map