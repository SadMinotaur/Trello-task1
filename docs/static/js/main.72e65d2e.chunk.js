(this["webpackJsonptrello-task1"]=this["webpackJsonptrello-task1"]||[]).push([[0],{31:function(n,t,e){},37:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e(1),c=e.n(i),a=e(19),u=e.n(a),o=(e(31),e(2)),d=e(3);function s(){var n=Object(o.a)(["\n    top:0;\n    position: fixed;\n    width: 100%;\n    text-align: center;\n    font-size: 2rem;\n    color: white;\n    line-height: 20px;\n    background-color: grey;\n    z-index: -1;\n"]);return s=function(){return n},n}var l=d.a.div(s()),f=function(){return Object(r.jsx)(l,{children:Object(r.jsx)("h6",{children:"Trello"})})},j=e(5);function b(){var n=Object(o.a)(["\n    padding: 10px 0 10px 0;\n    display: flex;\n    width: 100%;\n    justify-content: space-evenly;\n    background-color: #adadbd;\n    @media (max-width: 1100px) {\n      justify-content: start;\n    }\n"]);return b=function(){return n},n}var p=d.a.div(b());function x(){var n=Object(o.a)(["\n        display: flex;\n        width: 200px;\n        justify-content: space-around;\n"]);return x=function(){return n},n}function h(){var n=Object(o.a)(["\n        text-align: start;\n        text-indent: 10px;\n        width: 230px;\n        height: 18px;\n        font-size: 10px;\n        line-height: 20px;\n        background: white;\n        border-radius: 2px;\n        margin: 3px 0 0 0;\n        &:hover {\n           background: #dedede;\n        }\n"]);return h=function(){return n},n}function O(){var n=Object(o.a)(["\n        padding: 10px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        border-radius: 5px;\n        width: 230px;\n        height: fit-content;\n        background-color: #e6e6e6;\n        margin: 10px;    \n"]);return O=function(){return n},n}function m(){var n=Object(o.a)(["\n        margin: 0 0 5px 0;\n        text-align: start;\n        text-indent: 10px;\n        width: 230px;\n        height: 25px;\n        line-height: 25px;\n        background: #8d8d8d;\n        color: white;\n        border-radius: 2px;\n"]);return m=function(){return n},n}function v(){var n=Object(o.a)(["\n        width: 220px;\n        margin: 0 0 5px 0;\n"]);return v=function(){return n},n}var g=d.a.input(v()),C=d.a.div(m()),w=d.a.div(O()),y=d.a.div(h()),k=d.a.div(x()),E=e(7),A=e.n(E);function N(){var n=Object(o.a)(["\n    width: 170px;\n    margin: 3px 0 0 0;\n"]);return N=function(){return n},n}function D(){var n=Object(o.a)(["\n    margin: ",";\n"]);return D=function(){return n},n}function S(){var n=Object(o.a)(["\n    text-indent: 10px;\n    padding: ",";\n    font-size: 15px;\n    line-height: 15px;\n"]);return S=function(){return n},n}function _(){var n=Object(o.a)(["\n    margin: 0 0 0 2px;\n    font-size: 7px;\n"]);return _=function(){return n},n}function M(){var n=Object(o.a)(["\n    border-radius: 5px;\n    background: white;\n    text-align: start;\n    width: 100%;\n    margin: 5px 0 5px 0;\n    text-indent: 10px;\n    line-height: 25px;\n"]);return M=function(){return n},n}function I(){var n=Object(o.a)(["\n    width: 100%;\n    height: 100%;\n"]);return I=function(){return n},n}var P=d.a.div(I()),H=d.a.div(M()),G=d.a.div(_()),z=A()(d.a.div)(S(),(function(n){return n.empty?"7px 0 7px 0":"7px 0 0 0"})),R=A()(d.a.div)(D(),(function(n){return n.empty?"-28px  0 0 200px":"-20px  0 0 200px"})),T=d.a.input(N()),L=e(11),B=e(24),U=e(23),J=e(25),K=c.a.createContext(null),W=function(n){var t=n.initialState,e=n.reducer,c=n.children,a=Object(i.useReducer)(e,t),u=Object(j.a)(a,2),o=u[0],d=u[1];return Object(i.useEffect)((function(){localStorage.setItem("state",JSON.stringify(o))})),Object(r.jsx)(K.Provider,{value:{state:o,reducer:d},children:c})},q=function(){return Object(i.useContext)(K)},F=function(n){var t=n.id,e=q(),c=e.state,a=e.reducer,u=Object(i.useState)(!1),o=Object(j.a)(u,2),d=o[0],s=o[1],l=Object(i.useState)(!1),f=Object(j.a)(l,2),b=f[0],p=f[1],x=c.cards.find((function(n){return t===n.id}));if(!x)return null;var h=x,O=c.comments.filter((function(n){return t===n.idCard}));return Object(r.jsx)(P,{children:Object(r.jsxs)(H,{onContextMenu:function(n){n.preventDefault(),p((function(n){return!n}))},children:[!d&&Object(r.jsx)(z,{onClick:function(n){a({type:"CHANGE_POPUP",payload:{idCard:t,state:!0}})},empty:0===O.length,children:h.name}),d&&Object(r.jsx)(T,{type:"text",value:h.name,onChange:function(n){var e=n.target.value;""!==e.trim()&&a({type:"CHANGE_CARD",payload:{id:t,name:e,desc:h.desc,author:h.author,columnId:h.idColumn}})},onBlur:function(n){s((function(n){return!n}))}}),Object(r.jsx)(R,{onClick:function(){return s((function(n){return!n}))},empty:0===O.length,children:Object(r.jsx)(L.a,{icon:U.faEdit})}),0!==O.length&&Object(r.jsxs)(G,{children:[Object(r.jsx)(L.a,{icon:B.faComment})," : ",O.length]}),b&&Object(r.jsx)(G,{onClick:function(n){a({type:"DEL_CARD",payload:{id:t,name:h.name,desc:h.desc,author:h.author,columnId:h.idColumn}})},children:Object(r.jsx)(L.a,{icon:J.a})})]})})},Q=function(n){var t=n.id,e=n.initName,c=q(),a=c.state,u=c.reducer,o=Object(i.useState)(e),d=Object(j.a)(o,2),s=d[0],l=d[1],f=Object(i.useState)(""),b=Object(j.a)(f,2),p=b[0],x=b[1],h=Object(i.useState)(!1),O=Object(j.a)(h,2),m=O[0],v=O[1],E=Object(i.useState)(!1),A=Object(j.a)(E,2),N=A[0],D=A[1],S=Object(i.useCallback)((function(){""!==p.trim()&&(x(""),u({type:"ADD_CARD",payload:{id:a.cards.length,name:p,author:a.user,desc:"",columnId:t}}),D((function(n){return!n})))}),[p,t,u,a.cards.length,a.user]);return Object(r.jsxs)(w,{children:[!m&&Object(r.jsx)(C,{onClick:function(){return v((function(n){return!n}))},children:s}),m&&Object(r.jsx)(g,{value:s,type:"text",onMouseOver:function(n){return n.currentTarget.focus()},onChange:function(n){var t=n.target.value;""!==t.trim()&&l(t)},onBlur:function(){u({type:"CHANGE_COL_NAME",payload:{id:t,name:s}}),v((function(n){return!n}))}}),a.cards.map((function(n){return n.idColumn===t&&Object(r.jsx)(F,{id:n.id},n.id)})),!N&&Object(r.jsx)(y,{onClick:function(){return D((function(n){return!n}))},children:"Add new card"}),N&&Object(r.jsx)(g,{onMouseOver:function(n){return n.currentTarget.focus()},value:p,onChange:function(n){return x(n.target.value)},placeholder:"Add new card"}),N&&Object(r.jsxs)(k,{children:[Object(r.jsx)("button",{className:"btn primary",onClick:S,children:"Add card"}),Object(r.jsx)("button",{className:"btn",onClick:function(){return D((function(n){return!n}))},children:"Cancel"})]})]})},V=function(){var n=q();return Object(r.jsx)(p,{children:n.state.columns.map((function(n){var t=n.id,e=n.name;return Object(r.jsx)(Q,{initName:e,id:t},t)}))})};function X(){var n=Object(o.a)(["\n  margin: 40px 0 0 0;\n"]);return X=function(){return n},n}var Y=d.a.div(X());function Z(){var n=Object(o.a)(["\n  position: absolute;\n  margin: -10px 0 0 ","px;\n  border-radius: 50%;\n  background: #ffffff;\n  border: #767676 1px solid;\n  height: 20px;\n  width: 20px;\n  color: #999999;\n  @media (max-width: ","px) {\n    position: fixed;\n    top: 20px;\n    right 5px;\n  }\n"]);return Z=function(){return n},n}function $(){var n=Object(o.a)(["\n  position: absolute;\n  margin: 0 auto 100px auto; \n  left: 0; \n  right: 0;\n  top: 35px;\n  height: ",";\n  width: ",";\n  background: white;\n  border-radius: 3px;\n  @media (max-width: ",") {\n    width : 90%\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(o.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  height:  100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  overflow-x: hidden;\n"]);return nn=function(){return n},n}var tn=d.a.div(nn()),en=A()(d.a.div)($(),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width})),rn=A()(d.a.button)(Z(),(function(n){return n.width}),(function(n){return n.width+20})),cn=function(n){var t=n.width,e=n.height,i=n.setPopupState,c=n.children,a=Number(t.slice(0,t.length-2))-10;return Object(r.jsx)(tn,{children:Object(r.jsxs)(en,{height:e,width:t,children:[void 0!==i&&Object(r.jsx)(rn,{width:a,onClick:function(){return null===i||void 0===i?void 0:i(!1)},children:"x"}),c]})})};function an(){var n=Object(o.a)(["\n        width: 100%;\n        height: 100%;\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n    "]);return an=function(){return n},n}var un=d.a.div(an()),on=function(n){var t=n.togglePopup,e=Object(i.useState)(""),c=Object(j.a)(e,2),a=c[0],u=c[1],o=q();function d(){""!==a.trim()&&(t(!1),o.reducer({type:"CHANGE_USER",payload:{name:a}}))}return Object(r.jsx)(cn,{height:"180px",width:"350px",children:Object(r.jsxs)(un,{onKeyDown:function(n){"Enter"===n.key&&d()},children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Hi!"}),Object(r.jsx)("p",{children:"Enter your name"})]}),Object(r.jsx)("div",{className:"modal-body",children:Object(r.jsx)("input",{type:"text",placeholder:"Name",value:a,onChange:function(n){return u(n.target.value)}})}),Object(r.jsx)("div",{className:"modal-footer",children:Object(r.jsx)("button",{onClick:d,className:"btn primary",children:"Done"})})]})})};function dn(){var n=Object(o.a)(["\n    margin: 10px 0 0 0;\n    width: 100%;\n    font-weight: bold;\n"]);return dn=function(){return n},n}function sn(){var n=Object(o.a)(["\n    height: 30px;\n    color: grey;\n    background-color: white;\n    border-radius: 2px;\n    width: 100px;\n    border: 0;\n"]);return sn=function(){return n},n}function ln(){var n=Object(o.a)(["\n    width: 95%;\n    margin: 5px;\n    border-radius: 2px;\n    border: 0;\n    overflow-wrap: break-word;\n    resize: none;\n"]);return ln=function(){return n},n}function fn(){var n=Object(o.a)(["\n    width: 100%;\n    border: 0.2px grey solid;\n    border-radius: 2px\n"]);return fn=function(){return n},n}function jn(){var n=Object(o.a)(["\n    width: 190px;\n    margin: -25px 0 5px 0;\n"]);return jn=function(){return n},n}function bn(){var n=Object(o.a)(["\n    margin: 0 0 10px 0;\n    font-size: 22px;\n    line-height: 15px;\n"]);return bn=function(){return n},n}function pn(){var n=Object(o.a)(["\n    border-radius: 5px;\n    background: white;\n    text-align: start;\n    width: 100%;\n    margin: 5px 0 5px 0;\n    text-indent: 10px;\n    line-height: 25px;\n"]);return pn=function(){return n},n}function xn(){var n=Object(o.a)(["\n    min-height: 60px;\n    width: 100%;\n    margin: 10px 0 10px 0px;\n    border-radius: 2px;\n    border: 0.2px solid grey;\n    overflow-wrap: break-word;\n"]);return xn=function(){return n},n}function hn(){var n=Object(o.a)(["\n    height: 60px;\n    width: 100%;\n    margin: 10px 0 10px 0px;\n    border-radius: 2px;\n    border: 0.2px solid grey;\n    overflow-wrap: break-word;\n    resize: none;\n"]);return hn=function(){return n},n}function On(){var n=Object(o.a)(["\n    margin: 5px 0 0 0;\n    font-weight: bold;\n    line-height: 20px;\n"]);return On=function(){return n},n}function mn(){var n=Object(o.a)(["\n    width: 100%;\n    height: 100%; \n    padding: 30px;\n    box-sizing: border-box;\n"]);return mn=function(){return n},n}var vn=d.a.div(mn()),gn=d.a.div(On()),Cn=d.a.textarea(hn()),wn=d.a.div(xn()),yn=(d.a.div(pn()),d.a.div(bn())),kn=d.a.input(jn()),En=d.a.div(fn()),An=d.a.textarea(ln()),Nn=d.a.button(sn()),Dn=d.a.div(dn());function Sn(){var n=Object(o.a)(["\n  text-indent: 5px;\n  margin: 5px;\n"]);return Sn=function(){return n},n}function _n(){var n=Object(o.a)(["\n  display: flex;\n  font-size: 10px;\n"]);return _n=function(){return n},n}function Mn(){var n=Object(o.a)(["\n  margin: 3px 0 0 3px ;\n  border: 0;\n  line-height: 30px;\n  width: 95%;\n  resize: none;\n"]);return Mn=function(){return n},n}function In(){var n=Object(o.a)(["\n  border: grey 1px solid;\n  border-radius: 2px;\n"]);return In=function(){return n},n}function Pn(){var n=Object(o.a)(["\n  box-sizing: border-box;\n  word-wrap: break-word;\n  line-height: 30px;\n  padding: 5px;\n  margin: 3px 0 0 0;\n  width: 100%;\n  border: grey 1px solid;\n  border-radius: 2px;\n"]);return Pn=function(){return n},n}var Hn=d.a.div(Pn()),Gn=d.a.div(In()),zn=d.a.textarea(Mn()),Rn=d.a.div(_n()),Tn=d.a.div(Sn()),Ln=function(n){var t=n.id,e=q(),c=e.state,a=e.reducer,u=Object(i.useState)(!1),o=Object(j.a)(u,2),d=o[0],s=o[1],l=c.comments.find((function(n){return n.id===t}));if(!l)return null;var f=l;return Object(r.jsxs)("div",{children:[!d&&Object(r.jsxs)(Tn,{children:[f.author,Object(r.jsx)(Hn,{children:f.content}),Object(r.jsxs)(Rn,{children:[Object(r.jsx)("div",{onClick:function(n){var t=f.id,e=f.author,r=f.content,i=f.idCard;a({type:"DEL_COMM",payload:{id:t,author:e,content:r,cardId:i}})},children:"Delete"}),Object(r.jsx)("div",{onClick:function(){return s((function(n){return!n}))},children:"Change"})]})]}),d&&Object(r.jsx)(Gn,{children:Object(r.jsx)(zn,{value:f.content,onChange:function(n){var t=f.id,e=f.author,r=f.idCard,i=n.target.value;""!==i&&a({type:"CHANGE_COMM_CONTENT",payload:{id:t,author:e,content:i,cardId:r}})},onBlur:function(){return s((function(n){return!n}))}})})]})},Bn=function(){var n,t=q(),e=t.state,c=t.reducer,a=Object(i.useState)(""),u=Object(j.a)(a,2),o=u[0],d=u[1],s=Object(i.useState)(!1),l=Object(j.a)(s,2),f=l[0],b=l[1],p=Object(i.useState)(!1),x=Object(j.a)(p,2),h=x[0],O=x[1],m=Object(i.useState)(!1),v=Object(j.a)(m,2),g=v[0],C=v[1];Object(i.useEffect)((function(){return window.addEventListener("keydown",E),function(){window.removeEventListener("keydown",E)}}));var w=e.cards.find((function(n){return n.id===e.popup.idCard}));if(!w)return null;var y=w;function k(n){c({type:"CHANGE_POPUP",payload:{state:n,idCard:-1}})}function E(n){27===n.keyCode&&k(!1)}return Object(r.jsx)(cn,{height:"fit-content",width:"768px",setPopupState:k,children:Object(r.jsxs)(vn,{children:[!f&&Object(r.jsx)(yn,{onClick:function(){return b((function(n){return!n}))},children:y.name}),f&&Object(r.jsx)(kn,{onMouseOver:function(n){return n.currentTarget.focus()},value:y.name,onChange:function(n){var t=y.id,e=y.author,r=y.desc,i=y.idColumn;""!==n.target.value.trim()&&c({type:"CHANGE_CARD",payload:{id:t,name:n.target.value,author:e,columnId:i,desc:r}})},onBlur:function(n){b((function(n){return!n}))}}),Object(r.jsxs)(gn,{children:["In column: ",null===(n=e.columns.find((function(n){return n.id===y.idColumn})))||void 0===n?void 0:n.name]}),Object(r.jsxs)(gn,{children:["Created by: ",y.author]}),Object(r.jsx)(gn,{children:"Description"}),!g&&Object(r.jsx)(wn,{onClick:function(){return C((function(n){return!n}))},children:y.desc}),g&&Object(r.jsx)(Cn,{value:y.desc,onMouseOver:function(n){return n.currentTarget.focus()},onBlur:function(){return C((function(n){return!n}))},onChange:function(n){var t=y.id,e=y.name,r=y.author,i=y.idColumn;""!==n.target.value.trim()&&c({type:"CHANGE_CARD",payload:{id:t,name:e,author:r,columnId:i,desc:n.target.value}})}}),Object(r.jsx)(gn,{children:"Comments"}),Object(r.jsxs)(En,{children:[Object(r.jsx)(An,{onClick:function(){return O(!0)},placeholder:"Write new comment",value:o,onChange:function(n){return d(n.target.value)}}),h&&Object(r.jsx)(Nn,{onClick:function(){""!==o.trim()&&(d(""),c({type:"ADD_COMM",payload:{id:e.comments.length,author:e.user,content:o,cardId:y.id}}))},children:"Save"})]}),Object(r.jsx)(Dn,{children:e.comments.map((function(n){return n.idCard===y.id&&Object(r.jsx)(Ln,{id:n.id},n.id)}))})]})})},Un=function(){var n=q().state,t=Object(i.useState)(""===n.user),e=Object(j.a)(t,2),c=e[0],a=e[1];return Object(r.jsxs)(Y,{children:[Object(r.jsx)(V,{}),c&&Object(r.jsx)(on,{togglePopup:a}),n.popup.state&&Object(r.jsx)(Bn,{})]})},Jn=e(16),Kn=e(6),Wn={CHANGE_USER:function(n,t){return Object(Kn.a)(Object(Kn.a)({},n),{},{user:t.payload.name})},CHANGE_COL_NAME:function(n,t){var e=t.payload,r=e.id,i=e.name;return Object(Kn.a)(Object(Kn.a)({},n),{},{columns:n.columns.map((function(n){return n.id===r?{id:r,name:i}:n}))})},ADD_CARD:function(n,t){var e=t.payload,r=e.id,i=e.name,c=e.desc,a=e.columnId,u=e.author;return Object(Kn.a)(Object(Kn.a)({},n),{},{cards:[].concat(Object(Jn.a)(n.cards),[{id:r,name:i,desc:c,author:u,idColumn:a}])})},CHANGE_CARD:function(n,t){var e=t.payload,r=e.id,i=e.name,c=e.desc;return Object(Kn.a)(Object(Kn.a)({},n),{},{cards:n.cards.map((function(n){return n.id===r?{id:r,name:i,desc:c,author:n.author,idColumn:n.idColumn}:n}))})},DEL_CARD:function(n,t){var e=t.payload.id;return Object(Kn.a)(Object(Kn.a)({},n),{},{cards:n.cards.filter((function(n){return n.id!==e})),comments:n.comments.filter((function(n){return n.idCard!==e}))})},ADD_COMM:function(n,t){var e=t.payload,r=e.id,i=e.author,c=e.content,a=e.cardId;return Object(Kn.a)(Object(Kn.a)({},n),{},{comments:[].concat(Object(Jn.a)(n.comments),[{id:r,author:i,content:c,idCard:a}])})},CHANGE_COMM_CONTENT:function(n,t){var e=t.payload,r=e.id,i=e.content;return Object(Kn.a)(Object(Kn.a)({},n),{},{comments:n.comments.map((function(n){return n.id===r?{id:r,content:i,author:n.author,idCard:n.idCard}:n}))})},DEL_COMM:function(n,t){var e=t.payload.id;return Object(Kn.a)(Object(Kn.a)({},n),{},{comments:n.comments.filter((function(n){return n.id!==e}))})},CHANGE_POPUP:function(n,t){var e=t.payload,r=e.state,i=e.idCard;return Object(Kn.a)(Object(Kn.a)({},n),{},{popup:{state:r,idCard:i}})}};u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsxs)(W,{initialState:null===localStorage.getItem("state")?{user:"",columns:[{id:0,name:"TODO"},{id:1,name:"In Progress"},{id:2,name:"Testing"},{id:3,name:"Done"}],cards:[],comments:[],popup:{idCard:-1,state:!1}}:JSON.parse(localStorage.getItem("state")),reducer:function(n,t){var e=Wn[t.type];return e?e(n,t):n},children:[Object(r.jsx)(f,{}),Object(r.jsx)(Un,{})]})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.72e65d2e.chunk.js.map