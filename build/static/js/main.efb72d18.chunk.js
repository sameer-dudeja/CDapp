(this.webpackJsonpcdapp=this.webpackJsonpcdapp||[]).push([[0],{32:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(23),r=c.n(a),l=(c(32),c(8)),j=c(1),o=n.a.createContext(),i=function(e){var t=e.children,c=Object(s.useState)(!1),n=Object(l.a)(c,2),a=n[0],r=n[1],i=Object(s.useState)("working"),b=Object(l.a)(i,2),d=b[0],h=b[1];return Object(j.jsx)(o.Provider,{value:{isModalOpen:a,openModal:function(){r(!0)},closeModal:function(){console.log(),r(!1)},status:d,stopTimers:function(){h("paused")},resume:function(){h("working")}},children:t})},b=function(){return Object(s.useContext)(o)},d=c(12),h=c(21),O=(c(34),function(){var e=b(),t=e.isModalOpen,c=e.closeModal,n=Object(s.useState)(!1),a=Object(l.a)(n,2),r=a[0],o=a[1],i=b(),O=i.stopTimers,x=i.resume,u=Object(s.useState)(!1),m=Object(l.a)(u,2),p=m[0],f=m[1];return Object(j.jsx)("div",{className:"".concat(t?"modal-overlay show-modal":"modal-overlay"),children:Object(j.jsx)("div",{className:"modal-container",children:Object(j.jsxs)(d.a,{className:"form",children:[Object(j.jsx)(d.a.Check,{className:"checkbox",type:"checkbox",name:"classCompleted",id:"classCompleted",label:"Class Completed"}),Object(j.jsx)(d.a.Check,{className:"checkbox",type:"checkbox",name:"classInterrupted",id:"classInterrupted",label:"Class Interrupted",checked:r,onChange:function(e){o(!r)}}),r&&Object(j.jsxs)("div",{className:"secOptions",children:[Object(j.jsx)(d.a.Check,{className:"checkbox",type:"checkbox",id:"Absent",name:"Absent",label:"Student didnt show up for class"}),Object(j.jsx)(d.a.Check,{className:"checkbox",type:"checkbox",id:"Interest",name:"Interest",label:"Student didnt show any interest"}),Object(j.jsx)(d.a.Check,{className:"checkbox",type:"checkbox",id:"Disconnect",name:"Disconnect",label:"Student got disconnected"}),Object(j.jsx)(d.a.Check,{className:"checkbox",type:"checkbox",id:"Disconnect2",name:"Disconnect2",label:"I got disconnected"}),Object(j.jsx)(d.a.Check,{className:"checkbox",type:"checkbox",id:"Other",name:"Other",label:"Other Reason",onChange:function(){f(!p)}}),p&&Object(j.jsx)("div",{children:Object(j.jsx)(d.a.Control,{as:"textarea",placeholder:"Other Reasons",rows:3})})]}),Object(j.jsx)(h.a,{style:{backgroundColor:"#ff5a43",color:"white",borderColor:"#ff5a43"},onClick:function(){c(),O()},children:"End Class"}),Object(j.jsx)(h.a,{style:{color:"#ff5a43",borderColor:"#ff5a43",backgroundColor:"white"},onClick:function(){c(),x()},children:"Cancel"})]})})})});function x(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(10),r=Object(l.a)(a,2),o=r[0],i=r[1],d=b().status;return Object(s.useEffect)((function(){var e;return"working"===d&&(e=setTimeout((function(){c>0&&n(c-1),0===c&&o>0&&(i(o-1),n(59))}),1e3)),function(){clearTimeout(e)}}),[c,d,o]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{children:Object(j.jsxs)("h3",{children:[o,":",c]})})})}var u=function(){var e=b(),t=e.openModal,c=e.stopTimers;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"classBar",children:[Object(j.jsx)("div",{className:"classbar-name",children:Object(j.jsx)("h3",{children:"Trial Lesson [Grade 1-3] "})}),Object(j.jsx)("div",{className:"classbar-time",children:Object(j.jsx)(x,{})}),Object(j.jsx)("div",{className:"classbar-btn-div",children:Object(j.jsx)("button",{onClick:function(){t(),c()},className:"btn1",children:"End Class"})})]})})},m=c(13),p=[{id:1,url:"/",text:"home",icon:Object(j.jsx)(m.d,{})},{id:2,url:"/team",text:"team",icon:Object(j.jsx)(m.e,{})},{id:3,url:"/projects",text:"projects",icon:Object(j.jsx)(m.c,{})},{id:4,url:"/calendar",text:"calendar",icon:Object(j.jsx)(m.b,{})},{id:5,url:"/posts",text:"posts",icon:Object(j.jsx)(m.f,{})}],f=c.p+"static/media/logo.b492dcc3.svg",v=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(s.useRef)(null),r=Object(s.useRef)(null);return Object(s.useEffect)((function(){var e=r.current.getBoundingClientRect().height;a.current.style.height=c?"".concat(e,"px"):"0px"}),[c]),Object(j.jsx)("nav",{children:Object(j.jsxs)("div",{className:"nav-center",children:[Object(j.jsxs)("div",{className:"nav-header",children:[Object(j.jsx)("img",{src:f,className:"logo",alt:"logo"}),Object(j.jsx)("button",{className:"nav-toggle",onClick:function(){n(!c)},children:Object(j.jsx)(m.a,{})})]}),Object(j.jsx)("div",{className:"links-container",ref:a,children:Object(j.jsx)("ul",{className:"links",ref:r,children:p.map((function(e){var t=e.id,c=e.url,s=e.text;return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:c,children:s})},t)}))})})]})})},k=c(24),g=c.n(k),C=c(25),N=c(18),y=c.n(N),w=c(26),S=function(){var e=function(e){var t=Object(s.useState)(!0),c=Object(l.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)([]),j=Object(l.a)(r,2),o=j[0],i=j[1];return Object(s.useEffect)((function(){!function(){var t=Object(w.a)(y.a.mark((function t(){var c,s;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return c=t.sent,t.next=5,c.json();case 5:s=t.sent,i(s),a(!1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),{loading:n,posts:o}}("http://jsonplaceholder.typicode.com/posts/?_limit=10").posts;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("article",{className:"posts",children:[Object(j.jsx)("h2",{children:"Posts"}),Object(j.jsx)("br",{}),Object(j.jsx)(C.a,{dataLength:e.length,hasMore:!0,loader:Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)(g.a,{type:"Oval",color:"#FF5A43",height:80,width:80,timeout:3e3})}),endMessage:Object(j.jsx)("p",{style:{textAlign:"center"},children:Object(j.jsx)("b",{children:"Yay! You have seen it all"})}),children:Object(j.jsx)("ul",{children:e.map((function(e){var t=e.id,c=e.title,s=e.body;return Object(j.jsx)("li",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:c}),Object(j.jsx)("p",{children:s})]})},t)}))})})]})})},M=c(14),I=function(){return Object(j.jsxs)("div",{className:"error",children:[Object(j.jsx)("br",{}),Object(j.jsx)("h1",{children:"404"}),Object(j.jsx)("h2",{children:"Page Not Found"}),Object(j.jsx)("br",{}),Object(j.jsx)(M.b,{to:"/",className:"btn1",children:"Back Home"})]})},E=c(7);var F=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(M.a,{children:[Object(j.jsx)(v,{}),Object(j.jsxs)(E.c,{children:[Object(j.jsxs)(E.a,{exact:!0,path:"/",children:[Object(j.jsx)(u,{}),Object(j.jsx)(O,{})]}),Object(j.jsx)(E.a,{path:"/posts",children:Object(j.jsx)(S,{})}),Object(j.jsx)(E.a,{path:"*",children:Object(j.jsx)(I,{})})]})]})})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(i,{children:Object(j.jsx)(F,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.efb72d18.chunk.js.map