(this.webpackJsonppokeviewer=this.webpackJsonppokeviewer||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),s=a(19),o=a.n(s),i=a(2),l=a(20),d=a(3),b=a.n(d),u=a(6),j=a(4),m=a.n(j);function p(e){var t=e.pokemonName,a=e.handleSubmit,r=e.setPokemonName,s=e.setHidden,o=Object(c.useContext)(H);return Object(n.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark fixed-top py-1",children:[Object(n.jsxs)("a",{className:"navbar-brand",href:"#",onClick:function(){o("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"),s(!0)},children:[Object(n.jsx)("img",{src:"/PokeViewer/favicon-32x32.png",width:"30",height:"30",className:"d-inline-block align-top",alt:""})," ","PokeViewer"]}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsxs)("div",{className:"collapse navbar-collapse nav-item",id:"navbarSupportedContent",children:[Object(n.jsxs)("div",{className:"btn-group",role:"group",children:[Object(n.jsx)("button",{id:"btnGroupDrop1",type:"button",className:"btn btn-secondary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Generations"}),Object(n.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"btnGroupDrop1",children:[[0,151,251,386,493,649,721,809].map((function(e,t){return Object(n.jsxs)("a",{className:"dropdown-item",href:"#",onClick:function(){return o("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=".concat(e))},children:["Gen ",t+1]},t+1)})),Object(n.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return o("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=898")},children:"And more!"})]})]}),Object(n.jsxs)("form",{style:{marginLeft:"auto",marginRight:0},onSubmit:a,className:"form-inline my-2 my-md-0",children:[Object(n.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search Pokemon ","aria-label":"Search",value:t,onChange:function(e){r(e.target.value)}}),Object(n.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})]})]})}var h=r.a.memo(p),x=function(e){var t="black",a="white";switch(e){case"bug":t="#729f3f";break;case"dragon":t="#fccbad",a="black";break;case"fairy":t="#fdb9e9",a="black";break;case"fire":t="#fd7d24";break;case"ghost":t="#7b62a3";break;case"ground":t="#774629";break;case"normal":t="#a4acaf",a="black";break;case"psychic":t="#f366b9";break;case"steel":t="#9eb7b8",a="black";break;case"dark":t="#707070";break;case"electric":t="#eed535",a="black";break;case"fighting":t="#d56723";break;case"flying":t="#3dc7ef",a="black";break;case"grass":t="#9bcc50",a="black";break;case"ice":t="#51c4e7",a="black";break;case"poison":t="#b97fc9";break;case"rock":t="#a38c21";break;case"water":t="#4592c4";break;case"none":t="white",a="black"}return{backgroundColor:"".concat(t),color:"".concat(a),display:"inline-block",height:"17px",width:"73px",fontSize:"11px",borderRadius:"3px",margin:"1px"}};function f(e){var t=e.type;return Object(n.jsx)("div",{className:"col",style:x(t),children:"".concat(t).toUpperCase()})}var O=r.a.memo(f);function v(e){var t=e.typeData;return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("div",{className:"row",children:t.map((function(e,a){return Object(n.jsx)("div",{className:"col",children:Object(n.jsx)(O,{type:t[a].type})},a)}))}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("div",{className:"row",children:t.map((function(e,a){return Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("div",{className:"font-weight-bold",children:"Double damage to: "}),!t[a].double_damage_to.length&&Object(n.jsx)(O,{type:"none"})||t[a].double_damage_to.map((function(e){return Object(n.jsx)(O,{type:e},e)}))]},a)}))}),Object(n.jsx)("div",{className:"row",children:t.map((function(e,a){return Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("div",{className:"font-weight-bold",children:"Half damage from: "}),!t[a].half_damage_from.length&&Object(n.jsx)(O,{type:"none"})||t[a].half_damage_from.map((function(e){return Object(n.jsx)(O,{type:e},e)}))]},a)}))}),Object(n.jsx)("div",{className:"row",children:t.map((function(e,a){return Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("div",{className:"font-weight-bold",children:"No damage from: "}),!t[a].no_damage_from.length&&Object(n.jsx)(O,{type:"none"})||t[a].no_damage_from.map((function(e){return Object(n.jsx)(O,{type:e},e)}))]},a)}))}),Object(n.jsx)("hr",{className:"rounded"}),Object(n.jsx)("div",{className:"row",children:t.map((function(e,a){return Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("div",{className:"font-weight-bold",children:"Double damage from: "}),!t[a].double_damage_from.length&&Object(n.jsx)(O,{type:"none"})||t[a].double_damage_from.map((function(e){return Object(n.jsx)(O,{type:e},e)}))]},a)}))}),Object(n.jsx)("div",{className:"row",children:t.map((function(e,a){return Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("div",{className:"font-weight-bold",children:"Half damage to: "}),!t[a].half_damage_to.length&&Object(n.jsx)(O,{type:"none"})||t[a].half_damage_to.map((function(e){return Object(n.jsx)(O,{type:e},e)}))]},a)}))}),Object(n.jsx)("div",{className:"row",children:t.map((function(e,a){return Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("div",{className:"font-weight-bold",children:"No damage to: "}),!t[a].no_damage_to.length&&Object(n.jsx)(O,{type:"none"})||t[a].no_damage_to.map((function(e){return Object(n.jsx)(O,{type:e},e)}))]},a)}))})]})})]})})})}var g=r.a.memo(v),k=a(21),y=a.n(k);function w(e){var t=e.pokemonID,a=e.imageLoaded,r=e.setImageLoaded,s=e.fromList,o=Object(c.useContext)(U),l=s?["200px","240px"]:["250px","300px"],d=Object(i.a)(l,2),b=d[0],u=d[1];return Object(n.jsxs)("div",{style:{backgroundColor:"#f2f2f2",border:"1px solid black"},children:[Object(n.jsx)("img",{alt:"pokemon",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(o?"/shiny/":"").concat(t,".png"),width:b,height:u,style:a?{}:{display:"none"},onLoad:function(){return r(!0)},onError:function(e){e.target.onerror=null,e.target.src="/PokeViewer/image-not-found.png"}}),!a&&Object(n.jsx)("div",{className:"d-inline-flex align-items-center justify-content-center",style:{width:"".concat(b),height:"".concat(u)},children:Object(n.jsx)("div",{children:Object(n.jsx)(y.a,{loading:!a,size:150})})})]})}var N=r.a.memo(w);function S(e){var t=e.pokemonData,a=e.pokemonTypes,r=e.typeData,s=e.imageLoaded,o=e.setImageLoaded,l=e.fromList,d=e.setHidden,b=Object(c.useState)(!1),u=Object(i.a)(b,2),j=u[0],m=u[1],p=Object(c.useState)(!1),h=Object(i.a)(p,2),x=h[0],f=h[1],v=Object(c.useContext)(A),k=Object(c.useContext)(V),y=Object(c.useContext)(U),w=Object(c.useContext)(z),S=Object(i.a)(w,2)[1],C=Object(c.useContext)(G);return Object(c.useEffect)((function(){m(!1)}),[y]),Object(n.jsx)("div",{className:"container mt-5 ",children:t&&Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-auto mx-auto jumbotron p-3 mb-15",style:x&&l?{border:"1px solid black",borderRadius:"20px",cursor:"pointer",boxShadow:"inset 0 0 0 10px rgba(255,255,255, .4)"}:{border:"1px solid black",borderRadius:"20px"},onClick:function(){l&&(C!==t.name?(v(t.name),k(!1)):(k(!0),S(!1)),window.scroll({top:0,left:0,behavior:"smooth"}))},onMouseOver:function(){return f(!0)},onMouseLeave:function(){return f(!1)},children:[!l&&Object(n.jsx)("button",{onClick:function(){return d(!0)},type:"button",className:"close","aria-label":"Close",style:{position:"absolute",top:"5%",left:"85%",cursor:"pointer",borderRadius:"50%"},children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),Object(n.jsx)(N,{pokemonID:t.id,imageLoaded:l?j:s,setImageLoaded:l?m:o,fromList:l}),Object(n.jsxs)("div",{className:"text-uppercase font-weight-bold",children:["#",t.id," ",t.name]}),Object(n.jsx)("div",{className:"m-1",children:a.map((function(e){return Object(n.jsx)(O,{type:e},e)}))}),!l&&Object(n.jsx)("button",{className:"btn btn-secondary btn-sm",type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",children:"Damage Relations"})]})}),!l&&Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"collapse jumbotron p-2",id:"collapseExample",style:{border:"1.5px solid black"},children:Object(n.jsx)(g,{typeData:r})}),Object(n.jsx)("hr",{className:"rounded",style:{width:"80%"}})]})]})})}var C=r.a.memo(S),L=a(22),_=a.n(L);function P(e){var t=e.searchCardLoaded,a=e.setSearchCardLoaded,r=e.latestSubmittedString,s=e.setLatestSubmittedString,o=e.hidden,d=e.setHidden,j=e.setLastViewedPokemon,p=Object(c.useState)(""),x=Object(i.a)(p,2),f=x[0],O=x[1],v=Object(c.useState)(null),g=Object(i.a)(v,2),k=g[0],y=g[1],w=Object(c.useState)([]),N=Object(i.a)(w,2),S=N[0],L=N[1],P=Object(c.useState)([]),D=Object(i.a)(P,2),T=D[0],E=D[1],R=Object(c.useState)(!1),I=Object(i.a)(R,2),H=I[0],A=I[1],V=Object(c.useState)(!1),U=Object(i.a)(V,2),z=U[0],G=U[1],M=Object(c.useRef)(!1);Object(c.useEffect)((function(){var e=m.a.CancelToken.source();return a(!1),d(!1),function(){var t=Object(u.a)(b.a.mark((function t(){var n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!M.current){t.next=13;break}return t.prev=1,n=k?k.name:null,j(n),t.next=6,m.a.get("https://pokeapi.co/api/v2/pokemon/".concat(r.toLowerCase(),"/"),{cancelToken:e.token});case 6:(c=t.sent).data.name!==n&&(y(c.data),A(!1),a(!1)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),m.a.isCancel(t.t0)||G(!0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}()(),function(){return e.cancel()}}),[r,k]),Object(c.useEffect)((function(){var e=m.a.CancelToken.source();return d(!1),function(){var t=Object(u.a)(b.a.mark((function t(){var n,c,r,s,o,d,u,j;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!M.current){t.next=32;break}n=[],c=[],r=Object(l.a)(k.types),t.prev=4,r.s();case 6:if((s=r.n()).done){t.next=19;break}return o=s.value,d=o.type.name,c.push(d),t.next=12,m.a.get("https://pokeapi.co/api/v2/type/".concat(d,"/"),{cancelToken:e.token});case 12:u=t.sent,j=u.data.damage_relations,(j=Object.fromEntries(Object.entries(j).map((function(e){var t=Object(i.a)(e,2);return[t[0],t[1].map((function(e){return e.name}))]})))).type=d,n.push(j);case 17:t.next=6;break;case 19:t.next=24;break;case 21:t.prev=21,t.t0=t.catch(4),r.e(t.t0);case 24:return t.prev=24,r.f(),t.finish(24);case 27:E(n),L(c),a(!0),t.next=33;break;case 32:M.current=!0;case 33:case"end":return t.stop()}}),t,null,[[4,21,24,27]])})));return function(){return t.apply(this,arguments)}}()(),function(){return e.cancel()}}),[k]);var J=function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),G(!1),s(f),d(!1),window.scroll({top:0,left:0,behavior:"smooth"});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{style:{margin:"auto"},children:[Object(n.jsx)(h,{pokemonName:f,handleSubmit:J,setPokemonName:O,setHidden:d}),z&&Object(n.jsx)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:Object(n.jsx)("strong",{children:"Who's that Pokemon? Please enter valid Pokemon name."})}),k&&!t&&Object(n.jsx)("div",{className:"d-inline-flex align-items-center justify-content-center",style:{height:"423px"},children:Object(n.jsx)(_.a,{loading:!t,size:15})}),t&&!o&&Object(n.jsx)("div",{children:Object(n.jsx)(C,{pokemonData:k,pokemonTypes:S,typeData:T,imageLoaded:H,setImageLoaded:A,fromList:!1,setHidden:d})})]})}var D=r.a.memo(P),T=a(23),E=a.n(T);function R(e){var t=e.curURL,a=e.setCurURL,r=e.shiny,s=e.setShiny,o=Object(c.useState)([]),l=Object(i.a)(o,2),d=l[0],j=l[1],p=Object(c.useState)(null),h=Object(i.a)(p,2),x=h[0],f=h[1],O=Object(c.useState)(null),v=Object(i.a)(O,2),g=v[0],k=v[1],y=Object(c.useState)(!0),w=Object(i.a)(y,2),N=w[0],S=w[1],L=Object(c.useState)(!1),_=Object(i.a)(L,2),P=_[0],D=_[1];Object(c.useEffect)((function(){var e=m.a.CancelToken.source();return D(!1),function(){var t=Object(u.a)(b.a.mark((function t(a){var n,c,r,s,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return S(!0),t.prev=1,t.next=4,m.a.get(a,{cancelToken:e.token});case 4:for(n=t.sent,c=n.data,f(c.previous),k(c.next),r=new Array(20),s=new Array(20),t.prev=10,o=0;o<c.results.length;o++)r[o]=m.a.get(c.results[o].url,{cancelToken:e.token});return t.next=14,m.a.all(r).then(m.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];for(var n=0;n<c.results.length;n++)s[n]=t[n].data})));case 14:j(s),S(!1),t.next=23;break;case 18:if(t.prev=18,t.t0=t.catch(10),m.a.isCancel(t.t0)){t.next=23;break}throw D(!0),t.t0;case 23:t.next=30;break;case 25:if(t.prev=25,t.t1=t.catch(1),m.a.isCancel(t.t1)){t.next=30;break}throw D(!0),t.t1;case 30:case"end":return t.stop()}}),t,null,[[1,25],[10,18]])})));return function(e){return t.apply(this,arguments)}}()(t),function(){e.cancel()}}),[t]);var T=function(){var e=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(x),window.scroll({top:0,left:0,behavior:"smooth"});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(g),window.scroll({top:0,left:0,behavior:"smooth"});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"container",children:[N&&!P&&Object(n.jsx)("div",{className:"d-flex justify-content-center",children:Object(n.jsx)(E.a,{loading:N,size:40})}),P&&Object(n.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(n.jsx)("img",{src:"/PokeViewer/surprised-pikachu.jpg",alt:"Surprised pikachu - error",width:"50",height:"60"}),Object(n.jsxs)("strong",{children:[" ","Error at PokeAPI end! Try going to the next or previous page."]}),Object(n.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),!N&&Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"row",children:d.map((function(e){return Object(n.jsx)("div",{className:"col-auto m-auto",children:Object(n.jsx)(C,{pokemonData:e,pokemonTypes:e.types.map((function(e){return e.type.name})),fromList:!0})},e.name)}))})}),Object(n.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-bottom py-1",children:[Object(n.jsxs)("div",{className:"m-auto",children:[x&&Object(n.jsx)("button",{className:"btn btn-md btn-light my-2 my-sm-0 mr-2",onClick:T,children:"Previous"}),g&&Object(n.jsx)("button",{className:"btn btn-md btn-light my-2 my-sm-0",onClick:R,children:"Next"})]}),Object(n.jsx)("button",{className:"btn  btn-md btn".concat(r?"":"-outline","-warning my-2 my-sm-0 mr-2"),onClick:function(){return s(!r)},style:{width:"88px"},children:r?"Shinified":"Shinify"})]})]})}var I=r.a.memo(R),H=(a(52),r.a.createContext()),A=r.a.createContext(),V=r.a.createContext(),U=r.a.createContext(),z=r.a.createContext(),G=r.a.createContext();var M=function(){var e=Object(c.useState)("https://pokeapi.co/api/v2/pokemon"),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),l=o[0],d=o[1],b=Object(c.useState)(!1),u=Object(i.a)(b,2),j=u[0],m=u[1],p=Object(c.useState)(!1),h=Object(i.a)(p,2),x=h[0],f=h[1],O=Object(c.useState)(!1),v=Object(i.a)(O,2),g=v[0],k=v[1],y=Object(c.useState)(null),w=Object(i.a)(y,2),N=w[0],S=w[1];return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(G.Provider,{value:N,children:Object(n.jsx)(z.Provider,{value:[g,k],children:Object(n.jsxs)(U.Provider,{value:x,children:[Object(n.jsx)(H.Provider,{value:r,children:Object(n.jsx)(D,{searchCardLoaded:j,setSearchCardLoaded:m,latestSubmittedString:l,setLatestSubmittedString:d,hidden:g,setHidden:k,setLastViewedPokemon:S})}),Object(n.jsx)(A.Provider,{value:d,children:Object(n.jsx)(V.Provider,{value:m,children:Object(n.jsx)(I,{curURL:a,setCurURL:r,shiny:x,setShiny:f})})})]})})})})};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.bf0a9bf3.chunk.js.map