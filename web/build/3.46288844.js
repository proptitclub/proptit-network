(window.webpackJsonp=window.webpackJsonp||[]).push([[3,18],{858:function(e,r){},859:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var n=t(0),o=t.n(n);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t.reduce((function(t,n){return Object.assign(t,u({},n,e&&e[n]&&r?r[n]:""))}),{})},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(r){return function(t){var n=i(t.touched,t.errors,e);return o.a.createElement(r,a({},t,{errors:n}))}}}},863:function(e,r,t){"use strict";t.r(r),t.d(r,"Login",(function(){return y}));var n=t(0),o=t.n(n),a=t(829),u=t(67),i=t(2),c=t(885),l=t(879),s=t.p+"static/media/ProPTIT.a5ae8609.png",f=t(118);function d(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return h(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var m="Login to your Account",p="Login",b="Username",v="Enter username",g="Password",w="Password",y=Object(c.withTouchedErrors)(["username","password"])((function(e){var r=Object(u.useDispatch)(),t=Object(u.useSelector)((function(e){return e.homeReducer})).isLogged,c=e.onBlur,h=e.strings,y=void 0===h?{}:h,O=d(Object(n.useState)(null),2),j=O[0],E=O[1],S=d(Object(n.useState)(null),2),T=S[0],P=S[1],L=d(Object(n.useState)(null),2),A=L[0],I=L[1],x=function(){r(f.a({username:j,password:T})).then((function(e){401===e&&I("Wrong username or password")}))};return t?o.a.createElement(a.Redirect,{to:"/"}):o.a.createElement(i.StandaloneFormPage,{imageURL:s},o.a.createElement(l.b,{buttonText:y.buttonText||p,title:y.title||m,onSubmit:x,method:"POST"},o.a.createElement(i.FormTextInput,{name:"username",label:y.usernameLabel||b,placeholder:y.usernamePlaceholder||v,onChange:function(e){E(e.target.value)},onBlur:c,value:j,error:A}),o.a.createElement(i.FormTextInput,{name:"password",type:"password",label:y.passwordLabel||g,placeholder:y.passwordPlaceholder||w,onChange:function(e){P(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&x()},onBlur:c,value:T,error:A})))}))},875:function(e,r,t){"use strict";t.r(r);var n=t(863);t.d(r,"default",(function(){return n.Login}))},885:function(e,r,t){"use strict";var n=t(858);t.o(n,"withTouchedErrors")&&t.d(r,"withTouchedErrors",(function(){return n.withTouchedErrors}));var o=t(859);t.d(r,"withTouchedErrors",(function(){return o.a}))}}]);