"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[361],{7361:function(n,e,r){r.r(e),r.d(e,{default:function(){return $}});r(2791);var s=r(5861),i=r(7757),t=r.n(i),a=r(9434),c=r(5822),o=r(5705),d=r(1999),l=r(8129),h=r(218),m=r(1243),u=r(3238),x=r(2797),w=r(1980),p=r(184),j={email:"",password:"",showPassword:!1},f=x.Ry({email:x.Z_().matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,"Invalid email format"),password:x.Z_().min(7,"should be 7 chars minimum").max(32,"should be 32 chars maximum").matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/,"letters, numbers, symbols")});function Z(){var n=(0,a.I0)(),e=(0,w.a)(),r=e.isError,i=e.isLoggedIn,x=function(){var e=(0,s.Z)(t().mark((function e(s,a){var o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.setSubmitting,e.prev=1,e.next=4,n(c.Z.login(s));case 4:if(!i){e.next=7;break}return e.next=7,n(c.Z.fetchCurrentUser());case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message),console.log("catch");case 13:return e.prev=13,console.log(r,i),o(!1),e.finish(13);case 17:case"end":return e.stop()}}),e,null,[[1,9,13,17]])})));return function(n,r){return e.apply(this,arguments)}}();return(0,p.jsx)(o.J9,{initialValues:j,onSubmit:x,validationSchema:f,children:function(e){var s=e.isSubmitting,i=e.errors,t=e.touched;return(0,p.jsxs)(d.tN,{noValidate:!0,children:[(0,p.jsx)(d.h4,{children:"Login"}),(0,p.jsxs)(u.Z,{children:[(0,p.jsx)(m.Z,{name:"email",text:"Email",children:t.email&&i.email&&(0,p.jsx)(d.jj,{children:i.email})}),(0,p.jsx)(m.Z,{name:"password",password:!0,text:"Password",children:t.password&&i.password&&(0,p.jsx)(d.jj,{children:i.password})})]}),(0,p.jsx)("div",{children:(0,p.jsxs)(l.Z,{type:"submit",disabled:s,children:[r&&(0,p.jsx)(d.jj,{children:r}),s?(0,p.jsx)(h.Z,{}):(0,p.jsx)("span",{children:"Login"})]})}),(0,p.jsxs)("span",{children:[(0,p.jsx)(d.il,{children:"Don't have an account? \xa0"}),(0,p.jsx)(d.w2,{to:"/register",onClick:function(){n(c.Z.eraseErrors())},end:!0,children:"Register"},"home")]})]})}})}var g,v,b,k,y=r(168),P=r(8293),_=r(9866),C=r(9922),I=r(6444),S=I.ZP.div(g||(g=(0,y.Z)(["\n  width: 100%;\n  z-index: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  @media (min-width: 768px) {\n    align-items: center;\n  }\n"]))),z="position: absolute;\nbottom: 0px;\nwidth: 100%;\nzIndex: 0;",E=(0,I.ZP)(P.r)(v||(v=(0,y.Z)(["\n  ","\n"])),z),L=(0,I.ZP)(_.r)(b||(b=(0,y.Z)(["\n  ","\n"])),z),M=(0,I.ZP)(C.r)(k||(k=(0,y.Z)(["\n  ","\n"])),z);function $(){var n=window.matchMedia("only screen and (max-width: 767px)"),e=window.matchMedia("only screen and (max-width: 1279px) and (min-width: 768px)"),r=window.matchMedia("only screen and (min-width: 1280px)");return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(S,{onClick:function(n){return n.stopPropagation()},children:(0,p.jsx)(Z,{})}),n.matches&&(0,p.jsx)(E,{}),e.matches&&(0,p.jsx)(L,{}),r.matches&&(0,p.jsx)(M,{})]})}}}]);
//# sourceMappingURL=361.3e3fac2e.chunk.js.map