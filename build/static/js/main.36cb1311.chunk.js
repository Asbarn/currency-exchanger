(this.webpackJsonpexchanger=this.webpackJsonpexchanger||[]).push([[0],{15:function(e,t,n){e.exports={container:"styles_container__gW8ij",identification:"styles_identification__39OnG",MuiInputLabel:"styles_MuiInputLabel__2JlaN",Muifocused:"styles_Muifocused__YIVog",textFieldContainer:"styles_textFieldContainer__1j1ZI",dropdownContainer:"styles_dropdownContainer__h4XKv",selectContainer:"styles_selectContainer__2syly",buttonContainer:"styles_buttonContainer__3CAGJ",buttonContainerInner:"styles_buttonContainerInner__286ON",button:"styles_button__1_H_s","buttonContainer-inner":"styles_buttonContainer-inner__1kv2O"}},19:function(e,t,n){e.exports={container:"styles_container__2dvXb",identification:"styles_identification__EzX_t",MuiInputLabel:"styles_MuiInputLabel__BOe4p",Muifocused:"styles_Muifocused__3L780",textFieldContainer:"styles_textFieldContainer__32aDS",textField:"styles_textField__2F-cj",buttonContainer:"styles_buttonContainer__2R_ke",saveButton:"styles_saveButton__3ieVX"}},22:function(e,t,n){e.exports={container:"styles_container__1I-s3",dropdownContainer:"styles_dropdownContainer__2nf-m",select:"styles_select__Z1aeG",screen:"styles_screen__3tdmI"}},53:function(e,t,n){e.exports={container:"styles_container__23PXI",identification:"styles_identification__3n-pF",MuiInputLabel:"styles_MuiInputLabel__2oA0F",Muifocused:"styles_Muifocused__1Q7L6",textFieldContainer:"styles_textFieldContainer__1KnII",textField:"styles_textField__rqbvz",buttonContainer:"styles_buttonContainer__phWs-",saveButton:"styles_saveButton__E-Mhu"}},54:function(e,t,n){e.exports={container:"styles_container__2Zykn",identification:"styles_identification__2dnpL",MuiInputLabel:"styles_MuiInputLabel__E7deG",Muifocused:"styles_Muifocused__3cX99",textFieldContainer:"styles_textFieldContainer__2Dxec",textField:"styles_textField__ckaWb",buttonContainer:"styles_buttonContainer__18ZQB"}},77:function(e,t,n){},78:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),s=n(10),o=n.n(s),i=(n(77),n(7)),l=(n.p,n(78),n(127)),u=n(116),d=n(124),b=n(19),j=n.n(b),p=n(112),m=n(125),y=n(8);function O(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var h=Object(p.a)((function(e){return{paper:{position:"absolute",width:700,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),f=Object(p.a)({root:{position:"relative",color:"black!important",fontSize:"20px",transform:"none"}});function g(){var e=Object(y.b)(),t=h(),n=f(),s=r.a.useState(O),o=Object(i.a)(s,1)[0],b=r.a.useState(!0),p=Object(i.a)(b,2),g=p[0],x=p[1],C=function(){x(!1)},v=Object(c.useState)(0),_=Object(i.a)(v,2),N=(_[0],_[1]),S=Object(c.useRef)(null);Object(c.useEffect)((function(){N(S.current)}),[S.current]);var I=Object(c.useState)(0),k=Object(i.a)(I,2),E=(k[0],k[1]),F=Object(c.useRef)(null);Object(c.useEffect)((function(){E(F.current)}),[F.current]);var R=Object(a.jsxs)("div",{style:o,className:t.paper,children:[Object(a.jsx)("form",{ref:S,id:"my-form-id",action:"/",method:"POST",className:j.a.modal,onSubmit:function(t){void 0!=t&&t.preventDefault(),e({type:"FETCH",query:"AUD"}),e({type:"INIT",name:"".concat(F.current.childNodes[1].childNodes[1].childNodes[0].value),surname:"".concat(F.current.childNodes[0].childNodes[1].childNodes[0].value),patronymic:"".concat(F.current.childNodes[2].childNodes[1].childNodes[0].value)}),e({type:"FETCH_INIT",name:"".concat(F.current.childNodes[1].childNodes[1].childNodes[0].value),surname:"".concat(F.current.childNodes[0].childNodes[1].childNodes[0].value),patronymic:"".concat(F.current.childNodes[2].childNodes[1].childNodes[0].value)}),C()},children:Object(a.jsxs)("div",{ref:F,className:j.a.textFieldContainer,children:[Object(a.jsxs)("div",{className:j.a.MuiInputLabel,children:[Object(a.jsx)(l.a,{classes:n,required:!0,shrink:!1,htmlFor:"my-input-1",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e:"}),Object(a.jsx)(u.a,{name:"my-input-1",className:j.a.textField,required:!0,id:"my-input-1"})]}),Object(a.jsxs)("div",{className:j.a.MuiInputLabel,children:[Object(a.jsx)(l.a,{classes:n,required:!0,shrink:!1,htmlFor:"my-input-2",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f:"}),Object(a.jsx)(u.a,{name:"my-input-2",className:j.a.textField,required:!0,id:"my-input-2"})]}),Object(a.jsxs)("div",{className:j.a.MuiInputLabel,children:[Object(a.jsx)(l.a,{classes:n,required:!0,shrink:!1,htmlFor:"my-input-3",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e:"}),Object(a.jsx)(u.a,{name:"my-input-3",className:j.a.textField,required:!0,id:"my-input-3"})]})]})}),Object(a.jsx)("div",{className:j.a.buttonContainer,children:Object(a.jsx)(d.a,{className:j.a.saveButton,type:"submit",form:"my-form-id",children:"Enter"})})]});return Object(a.jsx)("div",{children:Object(a.jsx)(m.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:g,onClose:C,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:R})})}var x=n(123),C=n(126),v=n(22),_=n.n(v),N=n(118),S=n(119),I=Object(p.a)((function(e){return{formControl:{margin:"auto",minWidth:"400px",maxWidth:"500px"},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:20},noLabel:{marginTop:e.spacing(30)},button:{margin:e.spacing(1)}}})),k=("".concat(67),"".concat(67),"".concat(67),["CAD","HKD","ISK","PHP","DKK","HUF","CZK","GBP","RON","SEK","IDR","INR","BRL","RUB","HRK","JPY","THB","CHF","EUR","MYR","BGN","TRY","CNY","NOK","NZD","ZAR","USD","MXN","SGD","AUD","ILS","KRW","PLN"].sort());function E(e){e.openHistory;var t=e.setOpenHistory,n=(e.openCheckout,e.setOpenCheckout),r=Object(y.c)((function(e){return e.rates})),s=Object(y.c)((function(e){return e.maxValue})),o=(Object(y.c)((function(e){return e.today})),Object(y.c)((function(e){return e.systemRates}))),u=Object(y.c)((function(e){return e.name})),b=Object(y.c)((function(e){return e.surname})),j=Object(y.c)((function(e){return e.patronymic})),p=Object(y.b)(),m=I(),O=Object(c.useState)(k[0]),h=Object(i.a)(O,2),f=h[0],g=h[1],v=Object(c.useState)(k[0]),E=Object(i.a)(v,2),F=E[0],R=E[1],w=Object(c.useState)(1),H=Object(i.a)(w,2),D=H[0],A=H[1],T=Object(c.useState)(0),L=Object(i.a)(T,2),V=L[0],M=L[1],B=Object(c.useState)(0),U=Object(i.a)(B,2),P=(U[0],U[1]),G=Object(c.useRef)(null);Object(c.useEffect)((function(){P(G.current)}),[G.current]),Object(c.useEffect)((function(){A(G.current.childNodes[0].value)}));return Object(a.jsxs)("div",{className:_.a.container,children:[Object(a.jsxs)("form",{className:m.formControl,children:[Object(a.jsxs)("div",{className:_.a.dropdownContainer,children:[Object(a.jsx)(l.a,{shrink:!0,htmlFor:"select-selling",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u043e\u0434\u0430\u0432\u0430\u0435\u043c\u0443\u044e \u0432\u0430\u043b\u044e\u0442\u0443:"}),Object(a.jsx)(x.a,{inputProps:{id:"select-selling",className:_.a.select},native:!0,value:f,defaultValue:k[0],onChange:function(e){g(e.target.value),p({type:"FETCH",query:e.target.value})},children:k.map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)}))})]}),Object(a.jsxs)("div",{className:_.a.dropdownContainer,children:[Object(a.jsx)(l.a,{shrink:!0,htmlFor:"select-buying",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043a\u0443\u043f\u0430\u0435\u043c\u0443\u044e \u0432\u0430\u043b\u044e\u0442\u0443:"}),Object(a.jsx)(x.a,{inputProps:{id:"select-buying",className:_.a.select},native:!0,value:F,defaultValue:k[0],onChange:function(e){R(e.target.value)},children:k.map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)}))})]}),Object(a.jsxs)("div",{className:_.a.dropdownContainer,children:[Object(a.jsx)(l.a,{shrink:!0,htmlFor:"select-currency",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0443\u0440\u0441:"}),Object(a.jsxs)(x.a,{inputProps:{id:"select-currency",className:_.a.select},native:!0,value:D,defaultValue:r[F],ref:G,onChange:function(e){e.preventDefault(),A(e.target.value)},children:[Object(a.jsxs)("option",{checked:!0,value:r[F],children:[r[F]," (\u043a\u0443\u0440\u0441 \u0431\u0430\u043d\u043a\u0430)"]}),Object(a.jsxs)("option",{value:o[F],children:[o[F]," (\u043a\u0443\u0440\u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u044b)"]})]})]}),Object(a.jsx)("div",{className:_.a.dropdownContainer,children:Object(a.jsx)(C.a,{id:"standard-number",label:"How much do you want to trade?",type:"number",min:"0",onChange:function(e){e.target.value<0?M(0):e.target.value>s?M(s):M(e.target.value)},InputLabelProps:{shrink:!0},variant:"outlined",value:V})})]}),Object(a.jsxs)("div",{className:_.a.screen,children:[Object(a.jsxs)("p",{children:["You are selling ",f," currency"]}),Object(a.jsxs)("p",{children:["You are buying ",F," currency"]}),Object(a.jsxs)("p",{children:["Currently, you are selling to bank ",V," ",f," "]}),Object(a.jsxs)("p",{children:["You will receive ",(V*D).toFixed(2)," ",F," "]}),Object(a.jsx)(d.a,{variant:"contained",size:"large",className:m.button,startIcon:Object(a.jsx)(N.a,{}),style:{backgroundColor:"rgb(44, 76, 255)",color:"white"},onClick:function(e){p({type:"FETCH_MORE",buyingCurrency:F,sellingCurrency:f,value:V,buyingValue:(V*D).toFixed(2),currency:D,name:u,surname:b,patronymic:j}),n(!0)},children:"Exchange"}),Object(a.jsx)(d.a,{variant:"contained",size:"large",className:m.button,startIcon:Object(a.jsx)(S.a,{}),style:{backgroundColor:"rgb(44, 76, 255)",color:"white"},onClick:function(){t(!0)},children:"Show history"})]})]})}var F=n(53),R=n.n(F);function w(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var H=Object(p.a)((function(e){return{paper:{position:"absolute",maxWidth:1100,height:800,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),D=Object(p.a)({root:{position:"relative",color:"black!important",fontSize:"20px",transform:"none"}});function A(e){var t=e.openCheckout,n=e.setOpenCheckout,s=Object(y.c)((function(e){return e.history[e.history.length-1]})),o=Object(y.c)((function(e){return e.name})),l=Object(y.c)((function(e){return e.surname})),u=Object(y.c)((function(e){return e.patronymic})),b=(Object(y.b)(),H()),j=(D(),r.a.useState(w)),p=Object(i.a)(j,1)[0],O=r.a.useState(t),h=Object(i.a)(O,2),f=(h[0],h[1],function(){n(!1)}),g=Object(c.useState)(0),x=Object(i.a)(g,2),C=(x[0],x[1]),v=Object(c.useRef)(null);Object(c.useEffect)((function(){C(v.current)}),[v.current]);var _=Object(c.useState)(0),N=Object(i.a)(_,2),S=(N[0],N[1]),I=Object(c.useRef)(null);Object(c.useEffect)((function(){S(I.current)}),[I.current]);var k=Object(a.jsxs)("div",{style:p,className:b.paper,children:[Object(a.jsxs)("div",{ref:I,className:R.a.textFieldContainer,children:[Object(a.jsx)("p",{children:"Check"}),Object(a.jsxs)("p",{children:["Date: ",s?s.date:"".concat((new Date).toISOString().slice(0,10))]}),Object(a.jsxs)("p",{children:["Client: ",o&&u&&l?l+" "+o+" "+u:"User"]}),Object(a.jsxs)("p",{children:["Bank bought: ",s?s.buyingValue+" "+s.buyingCurrency:"100 RUB"]}),Object(a.jsxs)("p",{children:["Bank sold: ",s?s.value+" "+s.sellingCurrency:"100 USD"]})]}),Object(a.jsx)("div",{className:R.a.buttonContainer,children:Object(a.jsx)(d.a,{className:R.a.saveButton,onClick:function(){var e=document.createElement("a"),t=new Blob([" Check\n"+" Date:".concat((new Date).toISOString().slice(0,10),"\n")+" Client: ".concat(l," ").concat(o," ").concat(u,"\n")+" Bank bought:: ".concat(s.buyingValue," ").concat(s.buyingCurrency,"\n")+" Bank sold: ".concat(s.value," ").concat(s.sellingCurrency,"\n")],{type:"text/plain"});e.href=URL.createObjectURL(t),e.download="myFile.txt",document.body.appendChild(e),e.click(),f(),document.location.reload()},children:"Save"})})]});return Object(a.jsx)("div",{children:Object(a.jsx)(m.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:t,onClose:f,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:k})})}var T=n(54),L=n.n(T);function V(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}function M(e,t,n){var a=JSON.parse(localStorage.getItem("history"));a||(a=[]);var c=a.findIndex((function(a){return a.name===e&&a.surname===t&&a.patronymic===n}));if("admin"===e.trim().toLowerCase()&&"admin"===t.trim().toLowerCase()&&"admin"===n.trim().toLowerCase()){var r=[];return a.forEach((function(e){return r.push({name:e.name,surname:e.surname,patronymic:e.patronymic,history:e.history})})),console.log(r),r}return-1===c?[{name:e,surname:t,patronymic:n,history:[]}]:[{name:e,surname:t,patronymic:n,history:a[c].history}]}var B=Object(p.a)((function(e){return{paper:{position:"absolute",maxWidth:1100,height:800,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),U=Object(p.a)({root:{position:"relative",color:"black!important",fontSize:"20px",transform:"none"}});function P(e){var t=e.openHistory,n=e.setOpenHistory,s=Object(y.c)((function(e){return e.name})),o=Object(y.c)((function(e){return e.surname})),l=Object(y.c)((function(e){return e.patronymic})),u=B(),d=(U(),r.a.useState(V)),b=Object(i.a)(d,1)[0],j=r.a.useState(t),p=Object(i.a)(j,2),O=(p[0],p[1],Object(c.useState)(0)),h=Object(i.a)(O,2),f=(h[0],h[1]),g=Object(c.useRef)(null);Object(c.useEffect)((function(){f(g.current)}),[g.current]);var x=Object(c.useState)(0),C=Object(i.a)(x,2),v=(C[0],C[1]),_=Object(c.useRef)(null);Object(c.useEffect)((function(){v(_.current)}),[_.current]);var N=Object(a.jsxs)("div",{style:b,className:u.paper,children:[Object(a.jsx)("div",{className:L.a.buttonContainer,children:"History of changes"}),Object(a.jsx)("div",{ref:_,className:L.a.textFieldContainer,children:M(s,o,l).map((function(e){return e.history.map((function(t){return Object(a.jsxs)("div",{className:L.a.textField,children:[Object(a.jsxs)("p",{children:["Client: ",e.name&&e.patronymic&&e.surname?e.surname+" "+e.name+" "+e.patronymic:"User"]}),Object(a.jsxs)("p",{children:["Date: ",t.date?t.date:"".concat((new Date).toISOString().slice(0,10))]}),Object(a.jsxs)("p",{children:["Bank sold: ",t.buyingValue?t.buyingValue+" "+t.buyingCurrency:"100 RUB"]}),Object(a.jsxs)("p",{children:["Bank bought: ",t.value?t.value+" "+t.sellingCurrency:"100 USD"]})]})}))}))})]});return Object(a.jsx)("div",{children:Object(a.jsx)(m.a,{open:t,onClose:function(){n(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:N})})}var G=n(15),K=n.n(G),J=n(120),z=n(121);function Y(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var X=Object(p.a)((function(e){return{paper:{position:"absolute",maxWidth:1100,height:800,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function W(e){e.openHistory;var t=e.setOpenHistory,n=Object(y.c)((function(e){return e.maxValue})),r=Object(y.c)((function(e){return e.today})),s=Object(y.c)((function(e){return e.systemRates})),o=Object.getOwnPropertyNames(s),l=Object(y.b)(),u=Object(c.useState)(Y),b=Object(i.a)(u,1)[0],j=X(),p=Object(c.useState)(!1),O=Object(i.a)(p,2),h=O[0],f=O[1],g=function(){f(!1)},v=Object(c.useState)(n),_=Object(i.a)(v,2),I=_[0],k=_[1],E=Object(c.useState)(!1),F=Object(i.a)(E,2),R=F[0],w=F[1],H=function(){w(!1)},D=Object(c.useState)(r),A=Object(i.a)(D,2),T=A[0],L=A[1],V=Object(c.useState)(!1),M=Object(i.a)(V,2),B=M[0],U=M[1],P=function(){U(!1)},G=Object(c.useState)(o[0]),W=Object(i.a)(G,2),q=W[0],Z=W[1],Q=Object(c.useState)(s[o[0]]),$=Object(i.a)(Q,2),ee=$[0],te=$[1];Object(c.useEffect)((function(){te(s[q])}),[q]);var ne=Object(a.jsx)("div",{style:b,className:j.paper,children:Object(a.jsxs)("div",{className:K.a.dropdownContainer,children:[Object(a.jsx)(C.a,{id:"outlined-number",label:"Max value",type:"number",min:"0",onChange:function(e){e.target.value<0?k(0):k(e.target.value)},InputLabelProps:{shrink:!0},variant:"outlined",value:I}),Object(a.jsx)(d.a,{variant:"contained",size:"large",className:K.a.button,startIcon:Object(a.jsx)(N.a,{}),style:{backgroundColor:"rgb(44, 76, 255)",color:"white",marginTop:"50px"},onClick:function(){console.log(parseInt(I)),l({type:"CHANGE_MAX",maxValue:parseInt(I)}),g()},children:"Change max value"})]})}),ae=Object(a.jsx)("div",{style:b,className:j.paper,children:Object(a.jsxs)("div",{className:K.a.dropdownContainer,children:[Object(a.jsx)("form",{className:j.container,noValidate:!0,children:Object(a.jsx)(C.a,{id:"date",label:"Pick a date",type:"date",value:T,className:j.textField,InputLabelProps:{shrink:!0},onChange:function(e){L(e.target.value)}})}),Object(a.jsx)(d.a,{variant:"contained",size:"large",className:K.a.button,startIcon:Object(a.jsx)(N.a,{}),style:{backgroundColor:"rgb(44, 76, 255)",color:"white",marginTop:"50px"},onClick:function(){console.log(T),l({type:"CHANGE_DATE",today:T}),H()},children:"Change today's date"})]})}),ce=Object(a.jsx)("div",{style:b,className:j.paper,children:Object(a.jsxs)("div",{className:K.a.dropdownContainer,children:[Object(a.jsx)("form",{className:j.container,noValidate:!0,children:Object(a.jsxs)("div",{className:K.a.selectContainer,children:[Object(a.jsx)(x.a,{inputProps:{id:"select-buying",className:K.a.select},native:!0,value:q,defaultValue:o[0],onChange:function(e){Z(e.target.value)},children:o.map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)}))}),Object(a.jsx)(C.a,{id:"outlined-number",label:"Currency rate",type:"number",min:"0",onChange:function(e){te(e.target.value)},InputLabelProps:{shrink:!0},variant:"outlined",value:ee})]})}),Object(a.jsx)(d.a,{variant:"contained",size:"large",className:K.a.button,startIcon:Object(a.jsx)(J.a,{}),style:{backgroundColor:"rgb(44, 76, 255)",color:"white",marginTop:"50px"},onClick:function(){s[q]=parseFloat(ee),console.log(s),l({type:"CHANGE_RATES",systemRates:s}),P()},children:"Change system rates"})]})});return Object(a.jsxs)("div",{className:K.a.buttonContainer,children:[Object(a.jsxs)("div",{className:K.a.buttonContainerInner,children:[Object(a.jsx)(d.a,{variant:"contained",size:"large",className:K.a.button,startIcon:Object(a.jsx)(S.a,{}),style:{backgroundColor:"rgb(44, 76, 255)",color:"white"},onClick:function(){t(!0)},children:"Show history"}),Object(a.jsx)(d.a,{variant:"contained",size:"large",className:K.a.button,startIcon:Object(a.jsx)(N.a,{}),style:{backgroundColor:"rgb(44, 76, 255)",color:"white"},onClick:function(){f(!0)},children:"Change max value"}),Object(a.jsx)(d.a,{variant:"contained",size:"large",className:K.a.button,startIcon:Object(a.jsx)(z.a,{}),style:{backgroundColor:"rgb(44, 76, 255)",color:"white"},onClick:function(){w(!0)},children:"Change today's date"}),Object(a.jsx)(d.a,{variant:"contained",size:"large",className:K.a.button,startIcon:Object(a.jsx)(J.a,{}),style:{backgroundColor:"rgb(44, 76, 255)",color:"white"},onClick:function(){U(!0)},children:"Change system rates"})]}),Object(a.jsx)(m.a,{open:h,onClose:g,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:ne}),Object(a.jsx)(m.a,{open:R,onClose:H,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:ae}),Object(a.jsx)(m.a,{open:B,onClose:P,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:ce})]})}var q=n(122);var Z=function(){var e=Object(c.useState)({}),t=Object(i.a)(e,2),n=(t[0],t[1],Object(c.useState)(!1)),r=Object(i.a)(n,2),s=r[0],o=r[1],l=Object(c.useState)(!1),u=Object(i.a)(l,2),d=u[0],b=u[1],j=Object(y.c)((function(e){return e.isAdmin}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"container",children:[" ",Object(a.jsxs)("h2",{children:["Currency exchanger   ",Object(a.jsx)(q.a,{style:{color:"white",fontSize:"40",marginTop:"10px",marginLeft:"10px"}})]})]})}),Object(a.jsx)(g,{}),j?Object(a.jsx)(W,{openHistory:d,setOpenHistory:b}):Object(a.jsx)(E,{openHistory:d,setOpenHistory:b,openCheckout:s,setOpenCheckout:o}),Object(a.jsx)(A,{openCheckout:s,setOpenCheckout:o}),Object(a.jsx)(P,{openHistory:d,setOpenHistory:b}),Object(a.jsxs)("footer",{children:[" ",Object(a.jsxs)("h4",{children:["Currency exchanger project of Yaroslav Kobernyk-Berezovsky , BSU Faculty of Radiphysics and Computer Technology, 2020",Object(a.jsx)("span",{children:"\xae"})]})]})]})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},$=n(58),ee=n(16),te=n(35);function ne(e,t){var n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),a=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return Math.floor((a-n)/864e5)}var ae="SUCCESS",ce="FAILURE",re="ADD_DATA",se="INIT",oe="FETCH_CHANGE_MAX",ie="FETCH_CHANGE_DATE",le="FETCH_CHANGE_RATES",ue=JSON.parse(localStorage.getItem("maxValue"))?JSON.parse(localStorage.getItem("maxValue")):1e3,de=JSON.parse(sessionStorage.getItem("today"))?JSON.parse(sessionStorage.getItem("today")):function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1;return e.getFullYear()+"-"+n+"-"+t}(),be={AUD:1.2345645648,BGN:1.1954037039,BRL:3.8528818532,CAD:.9591100788,CHF:.6620011002,CNY:4.8632112952,CZK:16.1481572031,DKK:4.5497830206,EUR:.6112095838,GBP:.5522767557,HKD:5.7568608276,HRK:4.6127987287,HUF:218.5868834423,IDR:10501.5035755761,ILS:2.4289468859,INR:54.8310005501,ISK:93.5150663162,JPY:77.3119002506,KRW:810.4088992115,MXN:14.7536214168,MYR:3.0226147546,NOK:6.5442210134,NZD:1.0497524601,PHP:35.632907524,PLN:2.7341238311,RON:2.9784243017,RUB:55.5247845486,SEK:6.2969867368,SGD:.9918709125,THB:22.4069433409,TRY:5.8077745859,USD:.7426807652,ZAR:11.3364097549};JSON.parse(localStorage.getItem("systemRates"))&&Object.assign(be,JSON.parse(localStorage.getItem("systemRates")));var je={today:de,history:[],sellCurrency:"",buyCurrency:"",rates:[],systemRates:be,maxValue:ue,name:"",surname:"",patronymic:"",isAdmin:!1};var pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.c,me=Object(te.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return Object(ee.a)(Object(ee.a)({},e),{},{rates:t.rates,sellCurrency:t.sellCurrency,buyCurrency:t.buyCurrency});case ce:return alert("ERROR IN FETCHING"),Object(ee.a)({},e);case se:return Object(ee.a)(Object(ee.a)({},e),{},{name:t.name,surname:t.surname,patronymic:t.patronymic,maxValue:t.maxValue,isAdmin:t.isAdmin});case re:return Object(ee.a)(Object(ee.a)({},e),{},{history:[].concat(Object($.a)(e.history),Object($.a)(t.history))});case oe:return Object(ee.a)(Object(ee.a)({},e),{},{maxValue:t.maxValue});case ie:return Object(ee.a)(Object(ee.a)({},e),{},{today:t.today});case le:return Object(ee.a)(Object(ee.a)({},e),{},{systemRates:t.systemRates});default:return e}}),pe(Object(te.a)((function(e){return function(t){return function(n){try{"FETCH"==n.type&&fetch("https://api.exchangeratesapi.io/latest?base=".concat(n.query)).then((function(e){return e.json()})).then((function(e){return e})).then((function(t){e.dispatch({type:"SUCCESS",rates:t.rates,sellCurrency:t.base})}))}catch(a){e.dispatch({type:"FAILURE"})}t(n)}}}),(function(e){return function(t){return function(n){if("FETCH_MORE"==n.type){e.dispatch({type:"ADD_DATA",history:[{sellingCurrency:n.sellingCurrency,buyingCurrency:n.buyingCurrency,value:n.value,buyingValue:n.buyingValue,currency:n.currency}]});var a=JSON.parse(localStorage.getItem("history"));a||(a=[]);var c=a.findIndex((function(e){return e.name===n.name&&e.surname===n.surname&&e.patronymic===n.patronymic}));-1===c?a.push({name:n.name,surname:n.surname,patronymic:n.patronymic,history:[{date:e.getState().today,sellingCurrency:n.sellingCurrency,buyingCurrency:n.buyingCurrency,value:n.value,buyingValue:n.buyingValue,currency:n.currency}]}):a[c].history.push({date:e.getState().today,sellingCurrency:n.sellingCurrency,buyingCurrency:n.buyingCurrency,value:n.value,buyingValue:n.buyingValue,currency:n.currency}),localStorage.setItem("history",JSON.stringify(a))}t(n)}}}),(function(e){return function(t){return function(n){if("FETCH_INIT"==n.type){var a,c=0,r=!1,s=void 0==JSON.parse(localStorage.getItem("maxValue"))||null==JSON.parse(localStorage.getItem("maxValue"))?1e3:JSON.parse(localStorage.getItem("maxValue")),o=JSON.parse(localStorage.getItem("history"));o||(o=[]);for(var i=o.findIndex((function(e){return e.name===n.name&&e.surname===n.surname&&e.patronymic===n.patronymic})),l=(a=-1===i?[]:o[i].history).length-1;l>=0;l--)ne(new Date(a[l].date),new Date(e.getState().today))<=1&&(c+=Number.parseInt(a[l].value));"admin"===n.name.trim().toLowerCase()&&"admin"===n.surname.trim().toLowerCase()&&"admin"===n.patronymic.trim().toLowerCase()&&(r=!0),e.dispatch({type:"INIT",name:n.name,surname:n.surname,patronymic:n.patronymic,maxValue:s-c,isAdmin:r}),console.log(e.getState())}t(n)}}}),(function(e){return function(t){return function(n){"CHANGE_MAX"==n.type&&(localStorage.setItem("maxValue",JSON.stringify(n.maxValue)),e.dispatch({type:"FETCH_CHANGE_MAX",maxValue:n.maxValue}),console.log(e.getState())),t(n)}}}),(function(e){return function(t){return function(n){console.log(n.today),"CHANGE_DATE"==n.type&&(console.log(n.today),sessionStorage.setItem("today",JSON.stringify(n.today)),e.dispatch({type:"FETCH_CHANGE_DATE",maxValue:n.today}),console.log(e.getState())),t(n)}}}),(function(e){return function(t){return function(n){console.log(n.today),"CHANGE_RATES"==n.type&&(localStorage.setItem("systemRates",JSON.stringify(n.systemRates)),e.dispatch({type:"FETCH_CHANGE_RATES",systemRates:n.systemRates}),console.log(e.getState())),t(n)}}}))));o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y.a,{store:me,children:Object(a.jsx)(Z,{})})}),document.getElementById("root")),Q()}},[[84,1,2]]]);
//# sourceMappingURL=main.36cb1311.chunk.js.map