"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[673],{4673:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r,a,c,i,o,s,u,d,l,h=t(2791),p=t(9434),x=t(4270),f=t(9327),m=t(168),j=t(6444),b=j.ZP.div(r||(r=(0,m.Z)(["\n    margin-left: 0;\n"]))),Z=t(1413),v=t(5705),g=(0,j.ZP)(v.l0)(a||(a=(0,m.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 300px;\n"]))),C=j.ZP.label(c||(c=(0,m.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n"]))),y=(0,j.ZP)(v.gN)(i||(i=(0,m.Z)(["\n    padding: 10px 8px;\n    &:hover, &:focus {\n        border-color: #C2C4FF;\n    }\n"]))),F=j.ZP.button(o||(o=(0,m.Z)(["\n    width: 100px;\n    height: 30px;\n    cursor: pointer;\n    &:hover, &:focus {\n        background-color: #C2C4FF;\n    }\n"]))),P=t(5984),k=t(184),w=function(){var n=(0,p.v9)((function(n){return n.contacts.items})),e=(0,p.I0)();return(0,k.jsx)(v.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){t.id=(0,P.x0)(),function(t,r,a){n.find((function(n){return t.name===n.name}))?alert("".concat(t.name," is alredy in contacts")):e((0,f.uK)(t))}((0,Z.Z)({},t)),r.resetForm()},children:(0,k.jsxs)(g,{children:[(0,k.jsxs)(C,{children:["Name",(0,k.jsx)(y,{name:"name",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",placeholder:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)(C,{children:["Number",(0,k.jsx)(y,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,k.jsx)(F,{type:"submit",children:"Submit"})]})})},A=j.ZP.input(s||(s=(0,m.Z)(["\n    padding: 10px 8px;\n    &:hover, &:focus {\n        border-color: #C2C4FF;\n    }\n"]))),z=t(1634),I=function(){var n=(0,p.I0)();return(0,k.jsxs)("div",{children:[(0,k.jsx)("h3",{children:"Find contacts by name"}),(0,k.jsx)(A,{type:"text",placeholder:"Write name",onChange:function(e){var t;t=e.target.value,n((0,z.r)(t.toLowerCase()))}})]})},L=j.ZP.li(u||(u=(0,m.Z)(["\n    display: flex;\n    gap: 20px;\n    align-items: center;\n"]))),N=j.ZP.button(d||(d=(0,m.Z)(["\n    width: 100px;\n    height: 30px;\n    cursor: pointer;\n    &:hover, &:focus {\n        background-color: #C2C4FF;\n    }\n    \n    \n"]))),_=function(n){var e=n.contact,t=(0,p.I0)();return(0,k.jsxs)(L,{id:e.id,children:[(0,k.jsx)("p",{children:e.name}),(0,k.jsx)("p",{children:e.number}),(0,k.jsx)(N,{type:"button",onClick:function(n){var r;r=e.id,t((0,f.GK)(r))},children:"Delete"})]})},q=j.ZP.ul(l||(l=(0,m.Z)(["\n    padding-inline-start: 0px;\n"]))),J=function(n){var e=n.contacts,t=(0,p.v9)((function(n){return n.contacts.isLoading})),r=(0,p.v9)((function(n){return n.contacts.error}));return!0===t?(0,k.jsx)("p",{children:"Loading..."}):!0!==t&&null===r&&e?(0,k.jsx)(q,{children:e.map((function(n){return(0,k.jsx)(_,{contact:n},n.id)}))}):void 0};function K(){var n=(0,p.I0)(),e=(0,p.v9)((function(n){return n.filter.searchValue})),t=(0,p.v9)((function(n){return n.contacts.items}));return(0,h.useEffect)((function(){n((0,f.yF)())}),[n]),(0,k.jsxs)(b,{children:[(0,k.jsx)(x.q,{children:(0,k.jsx)("title",{children:"Your contacts"})}),(0,k.jsx)("h1",{children:"Phonebook"}),(0,k.jsx)(w,{}),(0,k.jsx)("h2",{children:"Contacts"}),(0,k.jsx)(I,{}),(0,k.jsx)(J,{contacts:t.filter((function(n){return n.name.toLowerCase().includes(e)}))})]})}}}]);
//# sourceMappingURL=673.c8d2638b.chunk.js.map