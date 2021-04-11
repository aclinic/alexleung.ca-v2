(this["webpackJsonpreact-alex-leung"]=this["webpackJsonpreact-alex-leung"]||[]).push([[0],{16:function(n,e,t){n.exports=t(24)},23:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),i=t(11),l=t.n(i),o=t(6),c=t(2),u=t(3);function m(){var n=Object(u.a)(["\n  body {\n    background: ",";\n    color: ",";\n    transition: all 0.50s linear;\n    font-family: var(--ff-primary);\n    line-height: 1.5;\n    position:relative;\n  }\n  "]);return m=function(){return n},n}var s=Object(c.b)(m(),(function(n){return n.theme.body}),(function(n){return n.theme.text})),f={body:"var(--clr-white)",text:"var(--clr-black)",toggleBorder:"none",background:"var(--clr-hover)",transform:"translateX(30px)"},d={body:"var(--clr-black)",text:"var(--clr-white)",toggleBorder:"none",background:"var(--clr-highlight)",transform:"translateX(0)"},p=function(){var n=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",e=Object(r.useState)(n),t=Object(o.a)(e,2),a=t[0],i=t[1],l=function(n){window.localStorage.setItem("theme",n),i(n)};return Object(r.useEffect)((function(){var n=window.localStorage.getItem("theme");n&&i(n)}),[]),[a,function(){l("light"===a?"dark":"light")}]},g=t(15);function h(){var n=Object(u.a)(["\n  animation: showTopText 1s;\n  animation-delay: ",";\n  animation-fill-mode: forwards;\n  opacity:0;\n  transform: translate(0, 100%);\n\n  @keyframes showTopText {\n    0% { \n      transform: translate(0, 100%); \n      opacity: 0 \n    }\n    100% { \n      transform: translate(0, 0);\n      opacity:1\n    }\n  }\n"]);return h=function(){return n},n}function b(){var n=Object(u.a)(["\n  h1{\n    display:inline-block;\n    font-weight: 900;\n    text-transform: uppercase;\n    font-size: 4rem; \n    letter-spacing: 0.2rem; \n    line-height: 0.9;\n    margin-bottom:1rem;\n  }\n\n  h3 {\n    font-size:1.2rem;\n  }\n\n  p{\n    font-size: 1.1rem;\n    margin:0 0 1rem;\n    color: var(--clr-hover);\n    letter-spacing: 0.08rem;\n  }\n\n  span {\n    display:inline-block;\n  }\n\n  .cashapp-icon{\n    color:var(--clr-highlight);\n    vertical-align: middle;\n    margin-left:0.3rem;\n    margin-bottom:0.2rem;\n  }\n\n  @media (min-width: 768px) {\n    h1 {\n      font-size: 8rem;\n      padding-bottom:1rem;\n    }\n\n    h3 {\n      font-size: 2rem;\n    }\n\n    p{\n    font-size: 1.5rem;\n    }\n  }\n"]);return b=function(){return n},n}function v(){var n=Object(u.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n"]);return v=function(){return n},n}function w(){var n=Object(u.a)(["\n  height: 100vh;\n  position: relative; \n"]);return w=function(){return n},n}var y=c.c.section(w()),E=c.c.div(v()),x=c.c.div(b()),k=c.c.div(h(),(function(n){return n.bottom?"0.8s":"0.5s"})),j=function(){return a.a.createElement(y,null,a.a.createElement(E,{className:"section-center"},a.a.createElement(x,null,a.a.createElement(k,null,a.a.createElement("p",null,"Hi, my name is"),a.a.createElement("h1",null,"alex leung")),a.a.createElement(k,{bottom:!0},a.a.createElement("h3",null,"A software engineer with ",a.a.createElement("span",null,"Cash App ",a.a.createElement(g.a,{className:"cashapp-icon"})))))))};function O(){var n=Object(u.a)(["\n  font-size: 1.1rem;\n  display:flex;\n  justify-content:center;\n  margin: 0 auto 3rem;\n \n  &::after, &::before{\n    content:'';\n    display:block;\n    height: 1px;\n    width: 90%;\n    background-color: lightgrey;\n    position:relative;\n    top:20px;\n  }\n\n  h2 {\n    display:block;\n    width: 100%;\n    text-align:center;\n  }\n\n  @media(max-width: 500px) {\n    &:after, &:before{\n      width: 40%;\n    }\n  }\n\n  @media (min-width: 1100px) {\n    font-size: 2rem;\n    display:flex;\n\n    &::after, &::before{\n      top:35px;\n      width: 90%;\n    }\n  }\n"]);return O=function(){return n},n}var z=c.c.div(O()),S=function(n){var e=n.title;return a.a.createElement(z,null,a.a.createElement("h2",null,e))},T=[{skill:"C++ 14"},{skill:"Java 11"},{skill:"Javascript"},{skill:"HTML / CSS"},{skill:"SQL"},{skill:"Agile Scrum"},{skill:"Embedded Systems"},{skill:"Distributed Systems"},{skill:"Electric Power Systems"}];function I(){var n=Object(u.a)(["\n  display:grid;\n  grid-template-columns: repeat(2, minmax(130px, 200px));\n  grid-column-gap:0.3rem;\n  list-style:none;\n  margin-top: 1rem;\n  padding: 0;\n\n  li {\n    position:relative;\n    padding-left: 1.5rem;\n    margin-bottom:0.8rem;\n    line-height: 1rem;\n  }\n\n  li:before {\n    content: '\u25a0';\n    position:absolute;\n    left: 0;\n    font-size: 1rem;\n    top:-0.1rem;\n  }\n"]);return I=function(){return n},n}var A=c.c.ul(I()),C=function(){return a.a.createElement(a.a.Fragment,null,"Here are a few things that I like:",a.a.createElement(A,null,T.map((function(n){var e=n.skill;return a.a.createElement("li",{key:e},e)}))))};function N(){var n=Object(u.a)(["\n  text-align: left;\n  line-height:1.8;\n  font-weight: 1.2rem;\n  margin-bottom:2rem;\n\n  @media (min-width: 992px) {\n    width: 90%;\n  }\n"]);return N=function(){return n},n}function B(){var n=Object(u.a)(["\n @media (min-width: 992px) {\n    display: grid;\n    grid-template-columns: 3fr 2fr;\n    column-gap: 4rem;\n    padding-top: 2rem;\n  }\n"]);return B=function(){return n},n}function J(){var n=Object(u.a)(["\n  padding:5rem 0 0;\n"]);return J=function(){return n},n}var M=c.c.section(J()),F=c.c.div(B()),H=c.c.div(N()),L=function(){return a.a.createElement(M,{className:"section-center"},a.a.createElement(S,{title:"About Me"}),a.a.createElement(F,null,a.a.createElement(H,null,"Trained in electrical engineering, but I actually love writing software. My current interests are in applying software design techniques to craft beautiful, compelling, and intuitive solutions for everyday engineering problems. Beyond keeping up with my craft, in my spare time I enjoy reading, playing chess & go, and spending time with doges.",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(C,null)),a.a.createElement("img",{src:"assets/about.jpg",alt:"Alex with his dog"})))},D=t(4),X=[{id:1,icon:a.a.createElement(D.c,null),url:"https://www.linkedin.com/in/aclinal"},{id:2,icon:a.a.createElement(D.d,null),url:"https://www.twitter.com/acl1n4l"},{id:3,icon:a.a.createElement(D.b,null),url:"https://www.instagram.com/rootpanda"},{id:4,icon:a.a.createElement(D.a,null),url:"https://www.github.com/aclinal"}];function Y(){var n=Object(u.a)(["\n  list-style-type: none;\n  margin: 0.5rem 0;\n\n  a{\n    font-size: 1.4rem;\n    color: var(--clr-hover);\n  }\n"]);return Y=function(){return n},n}function q(){var n=Object(u.a)(["\n  display:none;\n\n  @media(min-width: 1100px) {\n    display:block;\n    position: fixed;\n    bottom: 12%;\n    transform: translateY(50%);\n    left: 3rem;\n    z-index:99;\n\n    &::after{\n      content:'';\n      display:block;\n      height: 150px;\n      width: 1px;\n      background-color: lightgrey;\n      position:relative;\n      top:10px;\n      margin-left: 10px;\n    }\n  }\n"]);return q=function(){return n},n}var G=c.c.aside(q()),P=c.c.li(Y()),Q=function(){return a.a.createElement(G,null,X.map((function(n){return a.a.createElement(P,{key:n.id},a.a.createElement("a",{href:n.url},n.icon))})))};function K(){var n=Object(u.a)(["\n  list-style-type: none;\n  display:inline-block;\n  margin: 0 0.5rem 1rem;\n\n  a{\n    font-size: 1.4rem;\n    color: ",";\n  }\n\n  @media(min-width: 1100px) {\n    display:none;\n  }\n"]);return K=function(){return n},n}function R(){var n=Object(u.a)(["\n  padding:5rem 0 1rem;\n  text-align:center;\n"]);return R=function(){return n},n}var U=c.c.section(R()),V=c.c.li(K(),(function(n){return n.theme.text})),W=function(){return a.a.createElement(U,{className:"section-center"},X.map((function(n){return a.a.createElement(V,{key:n.id},a.a.createElement("a",{href:n.url},n.icon))})),a.a.createElement("p",null,"Copyright \xa9 ",(new Date).getFullYear()," Alex Leung"))};function Z(){var n=Object(u.a)(["\n  padding:5rem 0;\n  text-align:center;\n"]);return Z=function(){return n},n}var $=c.c.section(Z()),_=function(){return a.a.createElement($,{className:"section-center"},a.a.createElement(S,{title:"Get In Touch"}),a.a.createElement("p",null,"If you want to get in touch with me, send an email to ",a.a.createElement("strong",null,"mail [at] alexleung.ca")," or reach out on social media."))},nn=t(8);function en(){var n=Object(u.a)(["\n  height: 0;\n  width: 0;\n  visibility: hidden;\n"]);return en=function(){return n},n}function tn(){var n=Object(u.a)(["\n  cursor: pointer;\n  width: 60px;\n  height: 28px;\n  background: ",";\n  display: block;\n  border-radius: 40px;\n  position: relative;\n  \n  &:after {\n    content: '';\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    width: 24px;\n    height: 24px;\n    background: #fff;\n    border-radius: 40px;\n    transition: 0.3s;\n    transform: ",";\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(u.a)(["\n  margin: 0 0.5rem;\n  font-size: 1.1rem;\n"]);return rn=function(){return n},n}function an(){var n=Object(u.a)(["\n  position:absolute;\n  top:1%;\n  right:1%;\n  background: transparent;\n  border: none;\n  color: ",";\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-around;\n  max-width: 140px;\n  z-index: 100;\n\n  &:focus {\n    outline: none;\n  }\n"]);return an=function(){return n},n}var ln=c.c.button(an(),(function(n){return n.theme.text})),on=c.c.span(rn()),cn=c.c.div(tn(),(function(n){return n.theme.background}),(function(n){return n.theme.transform})),un=c.c.div(en()),mn=function(n){var e=n.toggleTheme;return a.a.createElement(ln,{onClick:e},a.a.createElement(on,null,a.a.createElement(nn.a,null)),a.a.createElement(un,{as:"input",type:"checkbox"}),a.a.createElement(cn,{htmlFor:"toggle-switch"}),a.a.createElement(on,null,a.a.createElement(nn.b,null)))},sn=(t(23),function(){var n=p(),e=Object(o.a)(n,2),t=e[0],r=e[1],i="light"===t?f:d;return a.a.createElement(c.a,{theme:i},a.a.createElement(s,null),a.a.createElement(mn,{theme:t,toggleTheme:r}),a.a.createElement(Q,null),a.a.createElement(j,null),a.a.createElement(L,null),a.a.createElement(_,null),a.a.createElement(W,null))});l.a.render(a.a.createElement(sn,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f58e3c4e.chunk.js.map