(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,n,t){},31:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var r,a,i,c,o,s=t(1),l=t.n(s),j=t(19),d=t.n(j),b=(t(30),t(25)),u=t(4),h=(t(31),t(8)),x=t(5),p=t(2),g=t(3),O=g.a.button(r||(r=Object(p.a)(["\n  background: linear-gradient(to right, #F7F3E3 0%, #6F1A07 95%);\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n  width: 65%;\n  height: 3rem;\n  border: none;\n  color: white;\n  border-radius: 2rem;\n  cursor: pointer;\n  margin-top: 25px;\n"]))),f=g.a.input(a||(a=Object(p.a)(["\n  background: rgba(255, 255, 255, 0.15);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  border-radius: 2rem;\n  width: 80%;\n  height: 3rem;\n  padding: 1rem;\n  border: none;\n  outline: none;\n  color: #ECF0F1;\n  font-size: 1rem;\n  font-weight: bold;\n  text-align: center:\n  margin: center;\n  &:focus {\n    display: inline-block;\n    box-shadow: 0 0 0 0.2rem #b9abe0;\n    backdrop-filter: blur(12rem);\n    border-radius: 2rem;\n  }\n  &::placeholder {\n    color: #6F1A07;\n    font-weight: 100;\n    font-size: 1rem;\n  }\n"]))),m=t(0);function v(e){var n=e.setCurrentUser,t=Object(s.useState)(""),r=Object(u.a)(t,2),a=r[0],i=r[1],c=Object(s.useState)(""),o=Object(u.a)(c,2),l=o[0],j=o[1];return Object(m.jsx)(A,{children:Object(m.jsxs)(F,{onSubmit:function(e){e.preventDefault(),e.target.reset();var t={email:a,password:l};fetch("".concat("https://boiling-waters-59018.herokuapp.com/","/login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({user:t})}).then((function(e){return e.json()})).then((function(e){localStorage.token=e.jwt,n(e.user)}))},children:[Object(m.jsx)(C,{children:"Email"}),Object(m.jsx)(f,{type:"text",name:"email",placeholder:"Email",onChange:function(e){return i(e.target.value)}}),Object(m.jsx)(C,{children:"Password"}),Object(m.jsx)(f,{type:"password",name:"password",placeholder:"Password",onChange:function(e){return j(e.target.value)}}),Object(m.jsx)(O,{type:"submit",children:"Submit"})]})})}var y,w,S,k,F=g.a.form(i||(i=Object(p.a)(["\n  display: inline-block;\n  text-align: center;\n  align-items: center;\n  flex-direction: column;\n  height: 64vh;\n  width: 80vw;\n  margin-left: auto;\n  background: #A8763E;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(8.5px);\n  -webkit-backdrop-filter: blur(8.5px);\n  border-radius: 10px;\n  color: #ECF0F1;\n  text-transform: uppercase;\n  letter-spacing: 0.4rem;\n  font-family: 'Andada Pro', serif;\n"]))),A=g.a.div(c||(c=Object(p.a)(["\ntext-align: center;\n"]))),C=g.a.h2(o||(o=Object(p.a)(["\n  margin: 3rem 0 2rem 0;\n  text-align: center;\n  color: #ECF0F1;\n  font-family: 'Andada Pro', serif;\n"])));function P(e){var n=e.listing,t=e.handleSave,r=n.id,a=n.address,i=n.description,c=n.bedrooms,o=n.bathrooms,s=n.parking,l=n.ac,j=n.washer_dryer,d=n.lease,b=n.img_url;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"listing",children:[Object(m.jsx)(T,{src:b,alt:b}),Object(m.jsxs)(L,{children:[" ",a," "]}),Object(m.jsxs)("p",{children:[" ",i," "]}),Object(m.jsxs)("span",{children:[Object(m.jsxs)("p",{children:[" ","Bedrooms: ",c," Bathrooms: ",o," "]}),Object(m.jsxs)("p",{children:[" Parking Spaces: ",s," "]}),Object(m.jsxs)("p",{children:[" ","Air Conditioning: ",l.toString()," Washer/Dryer:"," ",j.toString()]}),Object(m.jsxs)("p",{children:[" Lease Length: ",d," "]})]}),Object(m.jsx)(_,{children:Object(m.jsx)(N,{onClick:function(){t(n)},children:"save"})})]},r)})}var E,B,L=g.a.h2(y||(y=Object(p.a)(['\n  margin: 3rem 0 2rem 0;\n  text-align: center;\n  color: #6f1a07;\n  font-family: "Andada Pro", serif;\n']))),N=g.a.button(w||(w=Object(p.a)(["\n  background: #F7F3E3;\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n  width: 20%;\n  height: 2rem;\n  border: none;\n  color: #A8763E;\n  border-radius: 2rem;\n  cursor: pointer;\n  margin-top: 25px;\n  margin-bottom: 25px;\n"]))),_=g.a.div(S||(S=Object(p.a)(["\n  text-align: right;\n"]))),T=g.a.img(k||(k=Object(p.a)(["\n  text-algin: center;\n  width: 100%;\n"])));function z(e){var n=e.filterBy,t=e.setFilterBy,r=e.filterBath,a=e.setFilterBath;return Object(m.jsx)(W,{children:Object(m.jsxs)(I,{children:[Object(m.jsx)("h3",{children:Object(m.jsx)("strong",{children:"Filter by:"})}),Object(m.jsx)("div",{children:Object(m.jsxs)("p",{children:["Bedrooms:",Object(m.jsxs)("select",{onChange:function(e){t(e.target.value)},value:n,children:[Object(m.jsx)("option",{value:"",children:"Any"}),Object(m.jsx)("option",{value:"1",children:"1"}),Object(m.jsx)("option",{value:"2",children:"2"}),Object(m.jsx)("option",{value:"3",children:"3"}),Object(m.jsx)("option",{value:"4",children:"4"})]})]})}),Object(m.jsx)("div",{children:Object(m.jsxs)("p",{children:["Bathrooms:",Object(m.jsxs)("select",{onChange:function(e){a(e.target.value)},value:r,children:[Object(m.jsx)("option",{value:"",children:"Any"}),Object(m.jsx)("option",{value:"1",children:"1"}),Object(m.jsx)("option",{value:"2",children:"2"}),Object(m.jsx)("option",{value:"3",children:"3"}),Object(m.jsx)("option",{value:"4",children:"4"})]})]})})]})})}var D,J,U,M,W=g.a.div(E||(E=Object(p.a)(['\n  text-align: left;\n  font-family: "Andada Pro", serif;\n']))),I=g.a.div(B||(B=Object(p.a)(["\n  text-align: left;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n"])));function H(e){var n=e.listings,t=e.handleSave,r=Object(s.useState)(""),a=Object(u.a)(r,2),i=a[0],c=a[1],o=Object(s.useState)(""),l=Object(u.a)(o,2),j=l[0],d=l[1],b=Object(s.useState)(""),h=Object(u.a)(b,2),x=h[0],p=h[1],g=n.filter((function(e){return e.address.toLowerCase().includes(i.toLowerCase())})).filter((function(e){return e.bedrooms.toString().includes(j)})).filter((function(e){return e.bathrooms.toString().includes(x)})).map((function(e){return Object(m.jsx)(P,{listing:e,handleSave:t},e.id)}));return Object(m.jsxs)(Q,{children:[Object(m.jsxs)("div",{className:"search-bar",children:[Object(m.jsx)(V,{children:"H\u2661me is Where the Heart is"}),Object(m.jsx)(X,{type:"text",placeholder:"Enter city, state, or zipcode...",value:i,onChange:function(e){c(e.target.value)}}),Object(m.jsx)(Z,{children:"Search"})]}),Object(m.jsx)("br",{}),Object(m.jsx)(V,{children:"Listings"}),Object(m.jsx)(z,{filterBy:j,setFilterBy:d,filterBath:x,setFilterBath:p}),g]})}var R,Y,q,K,G,Q=g.a.div(D||(D=Object(p.a)(["\n  text-align: center;\n"]))),V=g.a.h2(J||(J=Object(p.a)(["\n  margin: 3rem 0 2rem 0;\n  text-align: center;\n  color: #6F1A07;\n  font-family: 'Andada Pro', serif;\n  font-variant: small-caps;\n"]))),X=g.a.input(U||(U=Object(p.a)(["\n  background: rgba(255, 255, 255, 0.15);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  border-radius: 2rem;\n  width: 70%;\n  height: 2rem;\n  padding: 1rem;\n  border: none;\n  outline: none;\n  color: #6F1A07;\n  font-size: 1rem;\n  font-weight: bold;\n  text-align: center:\n  margin: center;\n  &:focus {\n    display: inline-block;\n    box-shadow: 0 0 0 0.2rem #b9abe0;\n    backdrop-filter: blur(12rem);\n    border-radius: 2rem;\n  }\n  &::placeholder {\n    color: #6F1A07;\n    font-weight: 100;\n    font-size: 1rem;\n  }\n  font-family: 'Andada Pro', serif;\n"]))),Z=g.a.button(M||(M=Object(p.a)(["\n  background: #6F1A07;\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n  width: 10%;\n  height: 2rem;\n  border: none;\n  color: #F7F3E3;\n  border-radius: 2rem;\n  cursor: pointer;\n  font-family: 'Andada Pro', serif;\n"])));function $(e){var n=e.postListing,t=Object(s.useState)(""),r=Object(u.a)(t,2),a=r[0],i=r[1],c=Object(s.useState)(""),o=Object(u.a)(c,2),l=o[0],j=o[1],d=Object(s.useState)(""),b=Object(u.a)(d,2),h=b[0],x=b[1],p=Object(s.useState)(""),g=Object(u.a)(p,2),f=g[0],v=g[1],y=Object(s.useState)(""),w=Object(u.a)(y,2),S=w[0],k=w[1],F=Object(s.useState)(""),A=Object(u.a)(F,2),C=A[0],P=A[1],E=Object(s.useState)(""),B=Object(u.a)(E,2),L=B[0],N=B[1],_=Object(s.useState)(""),T=Object(u.a)(_,2),z=T[0],D=T[1],J=Object(s.useState)(""),U=Object(u.a)(J,2),M=U[0],W=U[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(ae,{children:"Add Listing"}),Object(m.jsx)(oe,{children:Object(m.jsxs)(re,{children:[Object(m.jsx)(ie,{children:"Image"}),Object(m.jsx)(ce,{type:"text",id:"img_url",value:a,onChange:function(e){return i(e.target.value)}}),Object(m.jsx)(ie,{children:"Address"}),Object(m.jsx)(ce,{type:"text",id:"address",value:l,onChange:function(e){return j(e.target.value)}}),Object(m.jsx)(ie,{children:"Description"}),Object(m.jsx)(ce,{type:"text",id:"description",value:h,onChange:function(e){return x(e.target.value)}}),Object(m.jsx)(ie,{children:"Bedrooms"}),Object(m.jsx)(ce,{type:"text",id:"bedrooms",value:f,onChange:function(e){return v(e.target.value)}}),Object(m.jsx)(ie,{children:"Bathrooms"}),Object(m.jsx)(ce,{type:"text",id:"bathrooms",value:S,onChange:function(e){return k(e.target.value)}}),Object(m.jsx)(ie,{children:"Parking Spaces"}),Object(m.jsx)(ce,{type:"text",id:"parking-spaces",value:C,onChange:function(e){return P(e.target.value)}}),Object(m.jsx)(ie,{children:"Air Conditioning (true/false)"}),Object(m.jsx)(ce,{type:"text",id:"ac",value:L,onChange:function(e){return N(e.target.value)}}),Object(m.jsx)(ie,{children:"Washer/Dryer (true/false)"}),Object(m.jsx)(ce,{type:"text",id:"washer/dryer",value:z,onChange:function(e){return D(e.target.value)}}),Object(m.jsx)(ie,{children:"Lease Length"}),Object(m.jsx)(ce,{type:"text",id:"lease",value:M,onChange:function(e){return W(e.target.value)}}),Object(m.jsx)(O,{type:"submit",onClick:function(e){e.preventDefault(),n({img_url:a,address:l,description:h,bedrooms:f,bathrooms:S,parking:C,ac:L,washer_dryer:z,lease:M}),i(""),j(""),x(""),v(""),k(""),P(""),N(""),D(""),W("")},children:"Submit"})]})})]})}var ee,ne,te,re=g.a.div(R||(R=Object(p.a)(["\n  display: inline-block;\n  text-align: center;\n  align-items: center;\n  flex-direction: column;\n  height: 242vh;\n  width: 80vw;\n  margin-left: auto;\n  background: #A8763E;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(8.5px);\n  -webkit-backdrop-filter: blur(8.5px);\n  border-radius: 10px;\n  color: #ECF0F1;\n  text-transform: uppercase;\n  letter-spacing: 0.4rem;\n  font-family: 'Andada Pro', serif;\n"]))),ae=g.a.h1(Y||(Y=Object(p.a)(["\n  margin: 3rem 0 2rem 0;\n  text-align: center;\n  color: #6F1A07;\n  font-family: 'Andada Pro', serif;\n  font-variant: small-caps;\n"]))),ie=g.a.h2(q||(q=Object(p.a)(["\n  margin: 3rem 0 2rem 0;\n  text-align: center;\n  color: #ECF0F1;\n  font-family: 'Andada Pro', serif;\n  font-variant: small-caps;\n"]))),ce=g.a.input(K||(K=Object(p.a)(["\n  background: rgba(255, 255, 255, 0.15);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  border-radius: 2rem;\n  width: 80%;\n  height: 3rem;\n  padding: 1rem;\n  border: none;\n  outline: none;\n  color: #ECF0F1;\n  font-size: 1rem;\n  font-weight: bold;\n  text-align: center:\n  margin: center;\n  &:focus {\n    display: inline-block;\n    box-shadow: 0 0 0 0.2rem #b9abe0;\n    backdrop-filter: blur(12rem);\n    border-radius: 2rem;\n  }\n  &::placeholder {\n    color: #6F1A07;\n    font-weight: 100;\n    font-size: 1rem;\n  }\n"]))),oe=g.a.div(G||(G=Object(p.a)(["\ntext-align: center;\n"])));function se(){var e=Object(s.useState)(""),n=Object(u.a)(e,2),t=n[0],r=n[1],a=Object(s.useState)(""),i=Object(u.a)(a,2),c=i[0],o=i[1],l=Object(s.useState)(""),j=Object(u.a)(l,2),d=j[0],b=j[1],h=Object(s.useState)(""),p=Object(u.a)(h,2),g=p[0],v=p[1],y=Object(s.useState)(""),w=Object(u.a)(y,2),S=w[0],k=w[1],F=Object(s.useState)(""),A=Object(u.a)(F,2),C=A[0],P=A[1],E=Object(s.useState)(""),B=Object(u.a)(E,2),L=B[0],N=B[1],_=Object(s.useState)(!1),T=Object(u.a)(_,2),z=T[0],D=T[1],J=Object(s.useState)(""),U=Object(u.a)(J,2),M=U[0],W=U[1];return Object(m.jsx)(fe,{children:z?Object(m.jsx)(x.a,{to:"/login"}):Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"please-log-in",children:Object(m.jsx)("p",{children:M})}),Object(m.jsx)("br",{}),Object(m.jsxs)(ge,{className:"signup",children:[Object(m.jsx)(Oe,{htmlFor:"email",children:"Email"}),Object(m.jsx)(f,{type:"text",id:"email",value:t,onChange:function(e){return r(e.target.value)}}),Object(m.jsx)(Oe,{htmlFor:"password",children:"Password"}),Object(m.jsx)(f,{type:"text",id:"password",value:c,onChange:function(e){return o(e.target.value)}}),Object(m.jsx)(Oe,{htmlFor:"password",children:"Confirm Password"}),Object(m.jsx)(f,{type:"text",id:"password_confirmation",value:L,onChange:function(e){return N(e.target.value)}}),Object(m.jsx)(Oe,{children:"First Name"}),Object(m.jsx)(f,{type:"text",id:"first name",value:d,onChange:function(e){return b(e.target.value)}}),Object(m.jsx)(Oe,{children:"Last Name"}),Object(m.jsx)(f,{type:"text",id:"last name",value:g,onChange:function(e){return v(e.target.value)}}),Object(m.jsx)(Oe,{children:"Birthdate (yyyy/mm/dd)"}),Object(m.jsx)(f,{type:"text",id:"birthdate",value:S,onChange:function(e){return k(e.target.value)}}),Object(m.jsx)("h2",{children:"Phone Number"}),Object(m.jsx)(f,{type:"text",id:"phone",value:C,onChange:function(e){return P(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)(O,{type:"submit",onClick:function(e){e.preventDefault();var n={email:t,password:c,password_confirmation:L,first_name:d,last_name:g,birthdate:S,phone:C};fetch("".concat("https://boiling-waters-59018.herokuapp.com/","/signup"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:n})}).then((function(e){return console.log(e)})).then((function(e){"created"===e.status&&(D(!0),W(""))})).catch((function(e){return W("Uh-oh! It didn't work...Make sure your server is running!")}))},children:"Sign Up"})]})]})})}var le,je,de,be,ue,he,xe,pe,ge=g.a.div(ee||(ee=Object(p.a)(["\n  display: inline-block;\n  text-align: center;\n  align-items: center;\n  flex-direction: column;\n  height: 193vh;\n  width: 80vw;\n  margin-left: auto;\n  background: #A8763E;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(8.5px);\n  -webkit-backdrop-filter: blur(8.5px);\n  border-radius: 10px;\n  color: #ECF0F1;\n  text-transform: uppercase;\n  letter-spacing: 0.4rem;\n  font-family: 'Andada Pro', serif;\n"]))),Oe=g.a.h2(ne||(ne=Object(p.a)(["\n  margin: 3rem 0 2rem 0;\n  text-align: center;\n  color: #ECF0F1;\n  font-family: 'Andada Pro', serif;\n"]))),fe=g.a.div(te||(te=Object(p.a)(["\ntext-align: center;\n"]))),me=t(24),ve=g.a.nav(le||(le=Object(p.a)(["\n  background: #F7F3E3;\n  height: 85px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.2rem calc((100vw - 2000px) / 2);\n  z-index: 12;\n  width: 100%;\n  /* Third Nav */\n  /* justify-content: flex-start; */\n  font-family: 'Andada Pro', serif;\n"]))),ye=Object(g.a)(h.b)(je||(je=Object(p.a)(["\n  color: #A8763E;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #6F1A07;\n  }\n  font-family: 'Andada Pro', serif;\n  \n"]))),we=Object(g.a)(me.a)(de||(de=Object(p.a)(["\n  display: none;\n  color: #F7F3E3;\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]))),Se=g.a.div(be||(be=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n  /* Second Nav */\n  /* margin-right: 24px; */\n  /* Third Nav */\n  /* width: 100vw;\n  white-space: nowrap; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n  font-family: 'Andada Pro', serif;\n"]))),ke=g.a.button(ue||(ue=Object(p.a)(["\nbackground: #6F1A07;\ntext-transform: uppercase;\nletter-spacing: 0.2rem;\nwidth: 63%;\nheight: 2rem;\nborder: none;\ncolor: #F7F3E3;\nborder-radius: 2rem;\ncursor: pointer;\nfont-family: 'Andada Pro', serif;\n// margin-right: auto !important;\ntext-align: center;\n"]))),Fe=g.a.div(he||(he=Object(p.a)(["\ntext-align: right;\n\n"])));function Ae(e){var n=e.logOut;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(ve,{children:[Object(m.jsx)(we,{}),Object(m.jsx)(ye,{to:"/",children:Object(m.jsx)("strong",{children:"Meadow \ud83c\udfe0"})}),Object(m.jsxs)(Se,{children:[Object(m.jsx)(ye,{to:"/about",children:"About Us"}),Object(m.jsx)(ye,{className:"navlink",to:"/profile",children:"Profile"}),Object(m.jsx)(ye,{to:"/add-listing",children:"Add Listing"}),Object(m.jsx)(Fe,{children:Object(m.jsx)(ke,{onClick:n,children:"Log Out"})})]})]})})}function Ce(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(ve,{children:[Object(m.jsx)(we,{}),Object(m.jsx)(ye,{to:"/",children:Object(m.jsx)("strong",{children:"Meadow \ud83c\udfe0"})}),Object(m.jsxs)(Se,{children:[Object(m.jsx)(ye,{to:"/about",children:"About Us"}),Object(m.jsx)(ye,{to:"/login",children:"Login"}),Object(m.jsx)(ye,{to:"/signup",children:"SignUp"})]})]})})}function Pe(e){var n=e.listings,t=e.handleSave,r=n.map((function(e){return Object(m.jsx)(P,{listing:e,handleSave:t},e.id)}));return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(_e,{children:Object(m.jsxs)(Te,{children:[Object(m.jsx)("br",{}),r]})})})}var Ee,Be,Le,Ne,_e=g.a.div(xe||(xe=Object(p.a)(["\n    flex-direction: column;\n  //   justify-space: space evenly;\n  text-align: left;\n  width: 100%;\n  margin-left: -1020px;\n  margin-top: 10px;\n"]))),Te=g.a.div(pe||(pe=Object(p.a)(["\n  // flex-direction: column;\n  //   justify-space: space evenly;\n  text-align: left;\n  width: 90vw;\n  display: flex-inline;\n  border: solid;\n"])));function ze(e){var n=e.listing,t=n.id,r=n.address,a=n.description,i=n.bedrooms,c=n.bathrooms,o=n.parking,s=n.ac,l=n.washer_dryer,j=n.lease,d=n.img_url;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(Ie,{children:Object(m.jsxs)(He,{children:[Object(m.jsx)("br",{}),Object(m.jsx)(Ye,{src:d,alt:d}),Object(m.jsxs)(Re,{children:[" ",r," "]}),Object(m.jsxs)("p",{children:[" ",a," "]}),Object(m.jsxs)("span",{children:[Object(m.jsxs)("p",{children:[" ","Bedrooms: ",i," Bathrooms: ",c," "]}),Object(m.jsxs)("p",{children:[" Parking Spaces: ",o," "]}),Object(m.jsxs)("p",{children:[" ","Air Conditioning: ",s.toString()," Washer/Dryer:"," ",l.toString()]}),Object(m.jsxs)("p",{children:[" Lease Length: ",j," "]})]})]},t)})})}var De,Je,Ue,Me,We,Ie=g.a.div(Ee||(Ee=Object(p.a)(["\n    flex-direction: column;\n  //   justify-space: space evenly;\n  text-align: left;\n  width: 100%;\n  margin-left: -580px;\n  margin-top: 10px;\n"]))),He=g.a.div(Be||(Be=Object(p.a)(["\n  // flex-direction: column;\n  //   justify-space: space evenly;\n  text-align: left;\n  width: 90vw;\n  display: flex-inline;\n  border: solid;\n"]))),Re=g.a.h2(Le||(Le=Object(p.a)(['\n  margin: 3rem 0 2rem 0;\n  text-align: center;\n  color: #6f1a07;\n  font-family: "Andada Pro", serif;\n  font-variant: small-caps;\n']))),Ye=g.a.img(Ne||(Ne=Object(p.a)(["\n  text-align: center;\n  width: 100%;\n"])));function qe(e){var n=e.user,t=e.personalListings,r=e.listings,a=e.unsave,i=Object(s.useState)(!1),c=Object(u.a)(i,2),o=c[0],l=c[1],j=Object(s.useState)(!1),d=Object(u.a)(j,2),b=d[0],h=d[1],x=Object(s.useState)(!1),p=Object(u.a)(x,2),g=p[0],O=p[1],f=n.email,v=n.first_name,y=n.last_name,w=n.birthdate,S=n.phone;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(nn,{children:"Profile"}),Object(m.jsxs)(Ze,{children:[Object(m.jsx)(Xe,{onClick:function(){l((function(e){return!e}))},children:"Account Details"}),Object(m.jsxs)(Xe,{onClick:function(){O((function(e){return!e}))},children:["Your Listings",g?t.map((function(e){return Object(m.jsx)(ze,{listing:e},e.id)})):null]}),Object(m.jsxs)(Xe,{onClick:function(){h((function(e){return!e}))},children:["Saved Listings",Object(m.jsx)("div",{children:b?Object(m.jsx)(Pe,{listings:r,handleSave:a}):null})]})]}),Object(m.jsx)($e,{children:Object(m.jsx)(en,{children:o?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Email: "}),f]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"First Name: "}),v]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Last Name: "}),y]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Birthdate: "}),w]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Phone Number: "}),S]})]}):null})})]})}var Ke,Ge,Qe,Ve,Xe=g.a.button(De||(De=Object(p.a)(['\n  background: #6f1a07;\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n  width: 15%;\n  height: 2rem;\n  border: none;\n  color: #f7f3e3;\n  border-radius: 2rem;\n  cursor: pointer;\n  font-family: "Andada Pro", serif;\n']))),Ze=g.a.div(Je||(Je=Object(p.a)(["\n  text-align: left;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n"]))),$e=g.a.div(Ue||(Ue=Object(p.a)(["\n  flex-direction: row;\n  //   margin-left: 140px;\n  //   width: 205px;\n  //   border: solid;\n//   justify-content: space evenly;\n  display: flex;\n  text-align: center;\n"]))),en=g.a.div(Me||(Me=Object(p.a)(["\n//   flex-direction: column;\n//   justify-space: space evenly;\n  text-align: left;\n  width: 100%;\n"]))),nn=g.a.h2(We||(We=Object(p.a)(['\n  margin: 3rem 0 2rem 0;\n  text-align: center;\n  color: #6f1a07;\n  font-family: "Andada Pro", serif;\n  font-variant: small-caps;\n'])));function tn(){return Object(m.jsxs)(rn,{children:[Object(m.jsx)(cn,{children:"About Us"}),Object(m.jsxs)(an,{children:[Object(m.jsx)(on,{children:"At Meadow, our goal is to help not only families and individuals, but also companies find temporary housing for their traveling employees. These homes are leased out for long and short stays based on how long you will be temporarily living in that area. We hope we can help you find the perfect home for you!"}),Object(m.jsx)("img",{src:"https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/share_link_image_large/public/blog/csm-blog/familywell-being-blog-03_0.jpg?itok=R9s7KRY1",alt:"family img"})]})]})}var rn=g.a.div(Ke||(Ke=Object(p.a)(["\n  display: block;\n  text-align: center;\n  align-items: center;\n  justify-content: space-between;\n  margin: auto;\n"]))),an=g.a.div(Ge||(Ge=Object(p.a)(["\ndisplay: inline-block;\nmargin-top: 10px;\nheight: 20vh;\nwidth: 75vw;\nbackground: #F7F3E3;\nbox-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\nbackdrop-filter: blur(8.5px);\n-webkit-backdrop-filter: blur(8.5px);\nborder-radius: 10px;\ncolor: #2B2118;\ntext-align: center;\nalign-items: center;\n"]))),cn=g.a.h1(Qe||(Qe=Object(p.a)(['\n  margin: 3rem 0 2rem 0;\n  text-align: center;\n  color: #6f1a07;\n  font-family: "Andada Pro", serif;\n  font-variant: small-caps;\n']))),on=g.a.p(Ve||(Ve=Object(p.a)(["\n  text-align: center;\n  align-items: center;\n  margin-top: 30px;\n  padding; 10px;\n"])));var sn=function(){var e=Object(s.useState)([]),n=Object(u.a)(e,2),t=(n[0],n[1]),r=Object(s.useState)([]),a=Object(u.a)(r,2),i=a[0],c=a[1],o=Object(s.useState)([]),l=Object(u.a)(o,2),j=l[0],d=l[1],p=Object(s.useState)([]),g=Object(u.a)(p,2),O=g[0],f=g[1],y=Object(s.useState)(!1),w=Object(u.a)(y,2),S=w[0],k=w[1],F=Object(s.useState)([]),A=Object(u.a)(F,2),C=A[0],P=A[1],E="https://boiling-waters-59018.herokuapp.com/";return Object(s.useEffect)((function(){fetch("".concat(E,"/listings/{id}"),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.token)},body:JSON.stringify()}).then((function(e){return e.json()})).then((function(e){return f(e)}))}),[]),Object(s.useEffect)((function(){fetch("".concat(E,"/listings")).then((function(e){return e.json()})).then((function(e){return d(e)}))}),[]),Object(s.useEffect)((function(){fetch("".concat(E,"/me"),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.token)},body:JSON.stringify()}).then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),Object(s.useEffect)((function(){var e=localStorage.token;"undefined"!==typeof e&&e.length>1&&"undefined"!==e?fetch("".concat(E,"/auto_login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({token:e})}).then((function(e){return e.json()})).then((function(e){return t(e)}),k(!0)):console.log("No token found, try logging in!")}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"main-div",children:Object(m.jsxs)(h.a,{children:[S?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(Ae,{logOut:function(){t({}),k(!1),localStorage.token=""}})}):Object(m.jsx)(Ce,{}),Object(m.jsxs)(x.d,{children:[Object(m.jsx)(x.b,{exact:!0,path:"/",children:Object(m.jsx)(H,{listings:j,handleSave:function(e){C.find((function(n){return n.id===e.id}))||P([].concat(Object(b.a)(C),[e]))}})}),Object(m.jsx)(x.b,{exact:!0,path:"/login",children:S?Object(m.jsx)(x.a,{to:"/"}):Object(m.jsx)(v,{setCurrentUser:function(e){t(e),k(!0)}})}),Object(m.jsx)(x.b,{exact:!0,path:"/signup",children:S?Object(m.jsx)(x.a,{to:"/"}):Object(m.jsx)(se,{})}),Object(m.jsx)(x.b,{exact:!0,path:"/add-listing",children:Object(m.jsx)($,{postListing:function(e){fetch("".concat(E,"/listings"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.token)},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){d(j.concat(e))}))}})}),Object(m.jsx)(x.b,{exact:!0,path:"/profile",children:Object(m.jsx)(qe,{user:i,personalListings:O,listings:C,unsave:function(e){P((function(n){return n.filter((function(n){return n.id!==e}))}))}})}),Object(m.jsx)(x.b,{exact:!0,path:"/about",children:Object(m.jsx)(tn,{})})]})]})})})},ln=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),i(e),c(e)}))};d.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(h.a,{basename:"/meadow-app-js",children:Object(m.jsx)(sn,{})})}),document.getElementById("root")),ln()}},[[43,1,2]]]);
//# sourceMappingURL=main.71261e83.chunk.js.map