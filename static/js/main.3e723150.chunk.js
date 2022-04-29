(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(15),o=a.n(s),l=(a(22),a(7)),i=(a(23),a(10)),r=a(0);function d(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," shadow bg-").concat(e.mode),style:{fontFamily:"sans-serif"},children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand fw-bold fs-3 text-".concat("light"===e.mode?"dark":"light"),href:"https://www.title.com",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0 ",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link active fw-normal","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link fw-normal",to:"/about",children:"About"})}),Object(r.jsxs)("li",{className:"nav-item dropdown",children:[Object(r.jsx)("a",{className:"nav-link dropdown-toggle fw-normal",id:"navbarDropdown",href:"https://www.more.com",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"MORE"}),Object(r.jsxs)("ul",{className:"dropdown-menu bg-primary","aria-labelledby":"navbarDropdown",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"dropdown-item text-warning",href:"https://www.learn.com",children:"Learn"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"dropdown-item text-warning",href:"https://www.youtube.com/",children:"Youtube"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"dropdown-item text-warning",href:"https://www.google.com/search",children:"Google"})})]})]})]}),Object(r.jsxs)("form",{className:"d-flex",action:"https://www.google.co.in/search",autocomplete:"off",target:"_blank",children:[Object(r.jsx)("input",{className:"form-control  bg-".concat("light"===e.mode?"light ":"secondary text-light"),type:"search",placeholder:"Find Article","aria-label":"Search",name:"q"}),Object(r.jsx)("button",{className:"btn btn-outline-danger ms-2 bg-light",type:"submit",children:"Search"})]}),Object(r.jsxs)("div",{className:"form-check form-switch ms-3",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggle,id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:e.switch1})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],o=a[1],i=n.a.useState(!1),d=Object(l.a)(i,2),b=d[0],h=d[1],m=n.a.useState(!1),j=Object(l.a)(m,2),u=j[0],p=j[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"mb-3 ms-5 me-5",children:[Object(r.jsx)("label",{htmlFor:"box",className:"form-label text-".concat("light"===e.mode?"dark":"light"," fw-bold fs-5"),children:e.heading}),Object(r.jsx)("textarea",{style:{fontWeight:b?"bold":"normal",fontFamily:u?"sans-serif":"normal"},placeholder:"Write in Here",value:s,onChange:function(e){o(e.target.value)},className:"form-control bg-".concat("light"===e.mode?"light":"secondary text-light"),id:"box",rows:"8"})]}),Object(r.jsx)("button",{className:"mb-3 ms-5 me-3 btn btn-primary mx-1 my-1",onClick:function(){var e=s.toUpperCase();o(e)},children:"Convert to UpperCase"}),Object(r.jsx)("button",{className:"mb-3 ms-5 me-3 btn btn-primary mx-1 my-1",onClick:function(){var e=s.toLowerCase();o(e)},children:"Convert to lowerCase"}),Object(r.jsx)("button",{className:"mb-3 ms-5 me-3 btn btn-primary mx-1 my-1",onClick:function(){var e=function(e){e=e.toLowerCase().split(" ");for(var t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join(" ")}(s);o(e)},children:"Convert to TitleCase"}),Object(r.jsx)("button",{className:"mb-3 ms-5 me-3 btn btn-success mx-1 my-1",onClick:function(){o("")},children:"Clear"}),Object(r.jsxs)("div",{className:"dropdown mb-3 ms-5 me-3",children:[Object(r.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true",children:"Styles"}),Object(r.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(r.jsx)("button",{className:"dropdown-item",onClick:function(){return h(!b)},children:"Bold"}),Object(r.jsx)("button",{className:"dropdown-item",onClick:function(){return p(!u)},children:"Sans Serif"})]})]})]}),Object(r.jsx)("div",{className:"container-hover",children:Object(r.jsxs)("div",{className:"mb-3 ms-5 me-5  text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("h2",{className:"text-danger",children:"Summary"}),Object(r.jsxs)("p",{children:["words :",s.split(" ").filter((function(e){return 0!==e.length})).length," and characters :",s.length]}),Object(r.jsx)("h3",{className:"text-danger",children:"Estimated time to Read"}),Object(r.jsxs)("p",{children:[.008*s.split(" ").length," min"]})]})})]})}function h(){var e=Object(c.useState)({backgroundColor:"white",color:"black"}),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("Enable Dark Mode"),o=Object(l.a)(s,2),i=o[0],d=o[1];return Object(r.jsxs)("div",{className:"container my-5",style:a,children:[Object(r.jsx)("h2",{className:"fw-bold",children:"About Us"}),Object(r.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(r.jsxs)("div",{className:"accordion-item",style:a,children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:a,children:"Accordion Item #1"})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",children:[Object(r.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",style:a,children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:a,children:"Accordion Item #2"})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",children:[Object(r.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item ",style:a,children:[Object(r.jsx)("h2",{className:"accordion-header ",id:"headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:a,children:"Accordion Item #3"})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",children:[Object(r.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(r.jsx)("button",{className:"btn btn-primary mb-3 my-2",onClick:function(){"white"===a.backgroundColor?(n({backgroundColor:"black",color:"white"}),d("Enable White Mode")):(n({backgroundColor:"white",color:"black"}),d("Enable Dark Mode"))},children:i})]})}d.defaultProps={title:"JOSE:)"};var m=a(2);var j=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("Enable Dark Theme"),o=Object(l.a)(s,2),j=o[0],u=o[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(d,{title:"TextChanger",mode:a,toggle:function(){"light"===a?(n("dark"),u("Enable Light Theme"),document.body.style.backgroundColor="black"):(n("light"),u("Enable Dark Theme"),document.body.style.backgroundColor="white")},switch1:j}),Object(r.jsx)("div",{className:"container my-4",children:Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{path:"/about",children:Object(r.jsx)(h,{})}),Object(r.jsx)(m.a,{path:"/",children:Object(r.jsx)(b,{heading:"Enter Text To Analyze",mode:a})})]})})]})})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),s(e),o(e)}))};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),u()}},[[30,1,2]]]);
//# sourceMappingURL=main.3e723150.chunk.js.map