(this["webpackJsonpphylo-lib-web"]=this["webpackJsonpphylo-lib-web"]||[]).push([[0],{168:function(e,t,n){e.exports=n(255)},173:function(e,t,n){},255:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),c=n.n(o),i=(n(173),n(52)),l=n(19),u=(n(64),n(261)),s=n(263),f=n(258),m=n(259),v=n(260),d=f.a.Content;function h(){return r.a.createElement("div",{className:"wrapper main"},r.a.createElement(d,{justify:"center"},r.a.createElement(m.a,{className:"intro",justify:"center",gutter:[16,16]},r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to PhyloML"),r.a.createElement("h2",null,"A phylogenetic library written in OCaml."),r.a.createElement("h2",null,"Inferring Evolutionary History through modern genetic similarity."))),r.a.createElement(m.a,{justify:"center",gutter:[16,40]},r.a.createElement(v.a,{lg:7,md:10,sm:12},r.a.createElement(i.b,{className:"offset",to:"/phylo-lib-web/generate"},"Generate Phylogenetic Trees")),r.a.createElement(v.a,{lg:7,md:10,sm:12},r.a.createElement(i.b,{className:"offset",to:"/phylo-lib-web/visualize"},"Visualize Phylogenetic Trees")),r.a.createElement(v.a,{lg:7,md:10,sm:12},r.a.createElement(i.b,{className:"offset",to:"/phylo-lib-web/pairwise"},"Visualize Pairwise DNA Alignments")))))}var p=n(26),b=n(120),y=n.n(b),g=n(144),E=n(257),w=n(123),_=n(256),x=n(262),N=n(39),j=n(17),A=n(34),S=n(9),O=n(25),k=n(1);O.b("Dna-PhyloLibWeb.Empty");function F(e,t){var n=A.e(e);return A.c((function(e){if(function(e){var t=e-84|0;if(!(t>11||t<0))return t>10||t<1;switch(t){case-18:case-16:case-15:case-14:return!1;case-19:case-17:case-13:return!0;default:return!1}}(e))return N.a(t,e)}),n)}function T(e){var t=N.c(128);return F(e,t),t}var C=N.d;function z(e,t){try{return N.e(e,t)}catch(n){return}}var B=N.e;function P(e,t,n){var a=n-t|0;return N.f(e,t,a)}N.b;var L=n(16),D=n(14),M=n(4),U=n(10),V=n(12);O.b("Tree-PhyloLibWeb.UnknownClade");function G(e){return e.tag?0:[e[0],D.b(D.g(G,e[1]))]}function R(e){return function(e){var t=G(e);return U.a(D.l(V.f,t),D.k(V.f,t))}(e)?e:S.c("clade_ids not unique")}var q={contents:0},W=(q.contents=q.contents+1|0,q.contents),X=M.a(0,[W,0,void 0,void 0,void 0,void 0]);function H(e){return!e.tag&&0===e[1]&&void 0===e[2]&&void 0===e[3]&&void 0===e[4]&&void 0===e[5]}function I(e,t,n){return M.a(1,[e,t,n])}function J(e){return M.a(1,[e,void 0,void 0])}function $(e){return X.tag?S.c("Representation invariant broken"):R(M.a(0,[(q.contents=q.contents+1|0,q.contents),e,void 0,void 0,void 0,void 0]))}var K={contents:!0},Q={contents:""};function Y(e){return K.contents?S.l(e):void(Q.contents=Q.contents+L.b(e))}function Z(e){return K.contents?S.o(e):void(Q.contents=Q.contents+e)}function ee(e){return K.contents?void console.log(e):Z(e+"\n")}function te(e){for(var t=1;t<=e;++t)Y(32)}function ne(e,t,n){for(;;){var a=t,r=e;if(!r)return;var o=r[1],c=r[0];te(c===a&&0!==c?1:((c-a|0)<<1)+(0===c||0===a?0:1)|0),0===o?Z(n):Y(124),t=c+1|0,e=o}}function ae(e){return ne(D.i(e),0,"|"),ee("")}function re(e){return e?ne(D.i(e),0,"o-"):S.f("ds")}function oe(e,t,n){for(;;){var a=e;if(!a)return;var r=a[1],o=a[0];if(o.tag){0!==n?ae(n):S.n(void 0),0!==n&&re(n);var c=o[2];void 0!==c&&"Unnamed"===o[0]?ee(c):ee(o[0]),e=r}else{var i=0!==r?[t,n]:n?[t,n[1]]:[t,0];0!==n&&ae(n),0!==n&&re(n),Z("C\n"),oe(o[1],t+1|0,i),e=r}}}function ce(e){return Q.contents="",K.contents=!1,oe([e,0],0,0),Q.contents}var ie=n(13),le=n(3),ue=n(11);var se=n(42),fe=n(21);function me(e,t,n){return U.c(U.c(e,t),n)}function ve(e,t,n,a,r,o,c,i){return[a.contents<1?-1e9:i+le.c(le.c(r,n.contents),a.contents-1|0)|0,n.contents<1?-1e9:i+le.c(le.c(r,n.contents-1|0),a.contents)|0,n.contents<1||a.contents<1?-1e9:le.c(le.c(r,n.contents-1|0),a.contents-1|0)+(U.a(z(e,(0>n.contents?0:n.contents)-1|0),z(t,(0>a.contents?0:a.contents)-1|0))?o:c)|0]}function de(e,t,n,a,r,o,c){for(var i=function(e,t,n,a,r){for(var o=se.d(a,r,-1e9),c=0;c<a;++c)le.d(le.c(o,c),0,fe.b(c,n));for(var i=0;i<r;++i)le.d(le.c(o,0),i,fe.b(i,n));return o}(0,0,r,o,c),l=1;l<o;++l)for(var u=1;u<c;++u){var s=ve(e,t,{contents:l},{contents:u},i,n,a,r);le.d(le.c(i,l),u,me(s[0],s[1],s[2]))}return i}function he(e,t,n,a,r,o){for(var c={contents:C(e)},i={contents:C(t)},l="",u="";c.contents>0||i.contents>0;){var s=ve(e,t,c,i,n,a,r,o),f=le.c(le.c(n,c.contents),i.contents);f===s[2]?(l=L.b(B(e,c.contents-1|0))+l,u=L.b(B(t,i.contents-1|0))+u,c.contents=c.contents-1|0,i.contents=i.contents-1|0):f===s[0]?(l="_"+l,u=L.b(B(t,i.contents-1|0))+u,i.contents=i.contents-1|0):f===s[1]?(u="_"+u,l=L.b(B(e,c.contents-1|0))+l,c.contents=c.contents-1|0):S.c("This should not happen")}return[T(l),T(u)]}function pe(e,t,n,a,r){for(var o=he(e,t,de(e,t,n,a,r,C(e)+1|0,C(t)+1|0),n,a,r),c=le.c(o,0),i=le.c(o,1),l=C(c),u=0,s=0;s<l;++s)U.a(z(c,s),95)||U.a(z(i,s),95)?u=u-r|0:U.e(z(c,s),z(i,s))&&(u=u+1|0);return u}var be={contents:!0},ye={contents:""};function ge(e){return be.contents?S.l(e):void(ye.contents=ye.contents+L.b(e))}function Ee(e){return be.contents?void console.log(e):void(ye.contents=ye.contents+(e+"\n"))}function we(e,t){for(var n=C(e),a=0,r=(n-1|0)/80|0;a<=r;++a){Ee(P(e,fe.b(80,a),V.h(n,fe.b(80,a+1|0))));for(var o=fe.b(80,a),c=V.h(n-1|0,fe.b(80,a+1|0)-1|0);o<=c;++o)U.a(z(e,o),z(t,o))?ge(42):U.a(z(e,o),95)||U.a(z(t,o),95)?ge(32):ge(124);Ee(""),Ee(P(t,fe.b(80,a),V.h(n,fe.b(80,a+1|0)))),Ee("")}}function _e(e){if(0===ie.f(e))return[[0,0],0];var t=[[0,0],S.g];return ie.e((function(e,t,n){return t<n[1]?[e,t]:n}),e,t)}function xe(e){return _e(e)[0]}function Ne(e,t,n){return ie.d(n,[U.d(e,t),U.c(e,t)])}function je(e,t,n){return e>=t?S.c("invalid input"):function(e,t,n){ie.c((function(t,a){return t[0]===e?(a+Ne(t[1],e,n))/2:t[1]!==e?a:(a+Ne(t[0],e,n))/2}),n)}(e,0,n),function(e,t){ie.c((function(t,n){return U.a(t[0],e)||U.a(t[1],e)?void 0:ue.a(n)}),t)}(t,n),n}function Ae(e){return 0===ie.f(e)}function Se(e,t,n,a){var r=le.c(e,t),o=le.c(e,n),c=D.a(t,a),i=D.a(n,a);if(void 0!==c){if(void 0!==i){var l=D.h(n,D.h(t,a));return[[t<n?t:n,$([c,[i,0]])],l]}var u=D.h(t,a);return[[t<n?t:n,$([J(o),[c,0]])],u]}if(void 0===i)return[[t<n?t:n,$([J(r),[J(o),0]])],a];var s=D.h(n,a);return[[t<n?t:n,$([J(r),[i,0]])],s]}var Oe=f.a.Content,ke=[],Fe=[],Te=function(){var e=Object(g.a)(y.a.mark((function e(t,n){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{(a=new FileReader).onload=function(){var e=T(a.result);ke.push(e),Fe.push(n)},a.readAsText(t)}catch(r){console.log(r),console.log("File printing failed")}case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ce=function(e){e.target.value};function ze(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=(t[0],t[1],Object(a.useState)(!1)),o=Object(p.a)(n,2),c=o[0],i=o[1],l=Object(a.useState)(""),u=Object(p.a)(l,2),s=u[0],f=u[1],v=Object(a.useState)(!1),d=Object(p.a)(v,2),h=d[0],b=d[1],y={accept:".FASTA, .txt, .fasta",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",disabled:c,headers:{authorization:"authorization-text"},multiple:!0,transformFile:function(e){var t=e.name.split(".").slice(0,-1).join(".").toUpperCase();Te(e,t)}};return r.a.createElement("div",{className:"wrapper"},r.a.createElement(Oe,{justify:"center"},r.a.createElement(m.a,{className:"page",justify:"center"},r.a.createElement("div",null,r.a.createElement("h1",null,"Generate a Phylogenetic Tree"),r.a.createElement("h2",null,"By computing similarity scores for DNA samples of species, we can infer their species' evolutionary history through time. Begin by uploading .FASTA files that contain DNA sequences, or use our example DNA sequences."))),r.a.createElement(m.a,{className:"centered-content"},r.a.createElement(E.a,y,r.a.createElement(w.a,null,r.a.createElement(x.a,null)," Upload .FASTA files")),r.a.createElement(w.a,{onClick:function(){i(!0);var e=function(e,t){var n=t.length;if(0===n)return X;if(1===n)return J(le.c(t,0));for(var a=e,r=0;;){var o=r,c=a;if(Ae(c)){var i=D.j((function(e){return e[1]}),o);return 1===D.f(i)?D.e(i):D.f(i)>1?$(i):S.c("Precondition violated in upgma_help")}var l=xe(c),u=l[1],s=l[0];r=Se(t,s,u,o),a=je(s,u,c)}}(function(e,t,n,a){for(var r=e.length,o=ie.b(void 0,r),c=0;c<r;++c)for(var i=c+1|0;i<r;++i)ie.a(o,[c,i],pe(le.c(e,c),le.c(e,i),t,n,a));return o}(ke,1,-1,-1),Fe);console.log(ce(e)),f(ce(e)),b(!0)}}," Generate tree "))),r.a.createElement(m.a,{className:"centered-content"},r.a.createElement("p",{className:"phylo-example-text"}," See our examples: ")),r.a.createElement(m.a,{className:"centered-content"},r.a.createElement(_.default.Group,{onChange:Ce,defaultValue:"phyloXML examples"},r.a.createElement(_.default.Button,{value:"Coronaviruses"},"Coronaviruses"),r.a.createElement(_.default.Button,{value:"Influenza A Viruses"},"Influenza A Viruses"),r.a.createElement(_.default.Button,{value:"Example 1"},"Apaf-1 Gene Family Tree"),r.a.createElement(_.default.Button,{value:"Example 2"},"Alcohol Dehydrogenases"))),h?r.a.createElement(m.a,{justify:"center"},r.a.createElement("div",{className:"ascii-phylo-container"},r.a.createElement("p",{className:"ascii-phylo"},s))):null)}var Be=n(2),Pe=n(20),Le=n(29);function De(e){return"number"!==typeof e||(e>=14?e<17:e<9)}function Me(e){if("number"!==typeof e)return e.tag?e[0]:String(e[0]);switch(e){case 0:return"phylogeny";case 1:return"name";case 2:return"description";case 3:return"clade";case 4:return"rank";case 5:return"confidence";case 6:return"taxonomy";case 7:return"scientific_name";case 8:return"id";case 9:return"<";case 10:return"</";case 11:return">";case 12:return"quote";case 13:return"=";case 14:return".";case 15:return"true";case 16:return"false";case 17:return"EOF";case 18:return"Unit"}}var Ue=ie.b(void 0,16);function Ve(e,t){var n;if(t){var a=S.h(e);n=j.b((function(e){try{return S.e(a)}catch(i){if(i===k.c)return;throw i}}))}else{var r=j.f(e);n=j.b((function(e){try{return function(e,t){for(;;){var n=t,a=j.g(e);if(void 0===a){if(""===n)throw k.c;return n}if(j.d(e),10===a)return n;if(13===a)return n;t=n+L.b(a)}}(r,"")}catch(i){if(i===k.c)return;throw i}}))}var o,c=j.g(n);if(void 0===c)return n;try{o=A.d(c,0,5)}catch(l){var i=Le.a(l);if(i[0]===k.e)return n;throw i}return"<?xml"!==o||j.d(n),n}function Ge(e,t){var n=j.g(e);if(void 0!==n){var a;try{a=n}catch(r){if(r===j.a)return Re(t);throw r}return 32!==a?ie.g(Ue,t)?ie.d(Ue,t):function(e){return e>=60?e<63:34===e}(n)?M.a(1,[t]):(j.d(e),Ge(e,t+L.b(n))):Re(t)}return Re(t)}function Re(e){return ie.g(Ue,e)?ie.d(Ue,e):M.a(1,[e])}function qe(e){return!(e>57||e<48)}function We(e,t){for(;;){var n=t,a=j.g(e);if(void 0===a)return M.a(0,[Pe.f(n)]);if(!qe(a))return M.a(0,[Pe.f(n)]);j.d(e),t=n+L.b(a)}}function Xe(e){var t;try{t=function(e){var t;try{t=j.e(e)}catch(n){if(n===j.a)throw k.c;throw n}return j.f(t)}(e)}catch(l){if(l===k.c)return[17,0];throw l}for(var n=0;;){var a,r=n,o=0;try{a=j.e(t),o=1}catch(u){if(u===j.a)return D.i(r);if(u===k.c)return[17,0];throw u}if(1===o){var c=0;if(a>=32){if(46===a){n=[14,r];continue}if(a>=60)if(a>=63)c=2;else switch(a-60|0){case 0:var i=j.g(t);if(void 0===i)return D.i([9,r]);if(47===i){j.d(t),n=[10,r];continue}n=[9,r];continue;case 1:n=[13,r];continue;case 2:n=[11,r];continue}else if(a>=35)c=2;else switch(a-32|0){case 0:continue;case 1:c=2;break;case 2:n=[12,r];continue}}else if(a>=11){if(13===a)continue;c=2}else{if(a>=9)continue;c=2}if(2===c){if(qe(a)){n=[We(t,L.b(a)),r];continue}n=[Ge(t,L.b(a)),r];continue}}}}ie.a(Ue,"phylogeny",0),ie.a(Ue,"name",1),ie.a(Ue,"description",2),ie.a(Ue,"clade",3),ie.a(Ue,"rank",4),ie.a(Ue,"confidence",5),ie.a(Ue,"taxonomy",6),ie.a(Ue,"scientific_name",7),ie.a(Ue,"id",8),ie.a(Ue,"true",15),ie.a(Ue,"false",16);var He=O.b("Phylo_parser-PhyloLibWeb.SyntaxError"),Ie={name:"",description:"",tree:X},Je={name:void 0,rank:void 0,confidence:void 0,taxonomy:void 0};var $e={contents:function(e){return 17}},Ke={contents:function(e){return 17}};function Qe(e){var t=Be.a($e.contents,void 0);if(!U.a(t,e))throw Me(e),Me(t),He;Be.a(Ke.contents,void 0)}function Ye(e){for(;;){var t=e,n=Be.a($e.contents,void 0);if("number"===typeof n){switch(n){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 14:case 15:break;default:return t}Qe(n),e=""===t?Me(n):t+" "+Me(n)}else{if(n.tag){var a=n[0];if(Qe(M.a(1,[a])),""!==t){e=t+" "+a;continue}e=a;continue}var r=n[0];if(Qe(M.a(0,[r])),""!==t){e=t+" "+String(r);continue}e=String(r)}}}function Ze(e,t){return void 0!==e?[t,e]:[t,0]}function et(e){return Qe(10),Qe(e),Qe(11)}function tt(e,t){var n=Be.a($e.contents,void 0);if("number"===typeof n){if(12===n){Qe(12);var a,r=Be.a($e.contents,void 0);if("number"===typeof r)if(15!==r){if(16!==r)throw He;Qe(16),a={tag_name:e.tag_name,str_attr:e.str_attr,num_attr:e.num_attr,bool_attr:Ze(e.bool_attr,[t,!1])}}else Qe(15),a={tag_name:e.tag_name,str_attr:e.str_attr,num_attr:e.num_attr,bool_attr:Ze(e.bool_attr,[t,!0])};else{var o=Ye("");a={tag_name:e.tag_name,str_attr:Ze(e.str_attr,[t,o]),num_attr:e.num_attr,bool_attr:e.bool_attr}}return Qe(12),a}throw He}if(n.tag)throw He;var c=n[0];return Qe(M.a(0,[c])),{tag_name:e.tag_name,str_attr:e.str_attr,num_attr:Ze(e.num_attr,[t,c]),bool_attr:e.bool_attr}}function nt(e){Qe(9);var t=Be.a($e.contents,void 0);if(!function(e){if("number"!==typeof e)return 1===e.tag;switch(e){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:return!0;default:return!1}}(t))throw He;Qe(t);for(var n={tag_name:t,str_attr:void 0,num_attr:void 0,bool_attr:void 0};;){var a=n,r=Be.a($e.contents,void 0);if(!De(r)){if("number"===typeof r){if(11!==r)throw He;return Qe(11),a}throw He}Qe(r),Qe(13),n=tt(a,Me(r))}}function at(e){for(;;){var t=Be.a($e.contents,void 0);if("number"!==typeof t)Qe(t);else{if(9!==t){if(10===t)return et(e);Qe(t);continue}at(nt().tag_name)}}}function rt(e){if("number"===typeof Be.a($e.contents,void 0))throw He;var t=Ye("");return et(1),t}function ot(e){if("number"===typeof Be.a($e.contents,void 0))throw He;var t=Ye("");return et(2),t}function ct(e){Qe(14);var t=Be.a($e.contents,void 0);if("number"===typeof t)return et(5),0;if(t.tag)return et(5),0;var n=t[0],a=Pe.a(String(e)+"."+String(n));return Qe(M.a(0,[n])),et(5),a}function it(e){var t=Be.a($e.contents,void 0);if("number"===typeof t){if(14===t)return ct(0);throw He}if(t.tag)throw He;var n=t[0];return Qe(M.a(0,[n])),14===Be.a($e.contents,void 0)?ct(n):(et(5),n)}function lt(e){if("number"===typeof Be.a($e.contents,void 0))throw He;var t=Ye("");return et(8),t}function ut(e){if("number"===typeof Be.a($e.contents,void 0))throw He;var t=Ye("");return et(7),t}function st(e){for(;;){var t=e,n=Be.a($e.contents,void 0);if("number"!==typeof n)throw He;if(9!==n){if(10!==n)throw He;return et(6),t}var a=nt().tag_name;if("number"!==typeof a)at(a);else{if(7!==a){if(8!==a){at(a);continue}e={id:lt(),scientific_name:t.scientific_name};continue}e={id:t.id,scientific_name:ut()}}}}function ft(e,t){var n=Be.a($e.contents,void 0);if("number"===typeof n){if(9!==n){if(10!==n)throw He;if(et(3),H(e)){var a=t.taxonomy;if(void 0!==a)return I(a.scientific_name,a.id,t.name);var r=t.name;return void 0!==r?I(r,void 0,r):J("Unnamed")}if(e.tag)return e;var o=t.taxonomy,c=void 0!==o?o.id:void 0;return M.a(0,[e[0],e[1],t.confidence,t.rank,c,t.name])}var i=nt().tag_name;if("number"===typeof i)switch(i){case 1:return ft(e,{name:rt(),rank:t.rank,confidence:t.confidence,taxonomy:t.taxonomy});case 3:if(H(e))return ft(ft(e,Je),t);var l=ft(X,Je);return ft($([e,[l,0]]),t);case 5:return ft(e,{name:t.name,rank:t.rank,confidence:it(),taxonomy:t.taxonomy});case 6:return ft(e,{name:t.name,rank:t.rank,confidence:t.confidence,taxonomy:st({id:void 0,scientific_name:"Unnamed"})})}return at(i),ft(e,t)}throw He}function mt(e){var t=function(e){var t={contents:Xe(e)},n={contents:function(e,t){return 17}};return n.contents=function(a){return a?function(a){var r=t.contents;return r?r[0]:(t.contents=Xe(e),Be.b(n.contents,!0,void 0))}:function(n){var a=t.contents;return a?(t.contents=a[1],18):(t.contents=Xe(e),18)}},n.contents}(e);$e.contents=Be.a(t,!0),Ke.contents=Be.a(t,!1);var n=Be.a($e.contents,void 0);if("number"===typeof n){if(9===n){var a=nt().tag_name;if("number"===typeof a)throw He;if(1===a.tag){if("phyloxml"===a[0]){var r=nt().tag_name;if("number"===typeof r){if(0!==r)throw He;var o=function(e){for(;;){var t=e,n=Be.a($e.contents,void 0);if("number"!==typeof n)throw He;if(9!==n){if(10!==n)throw He;return et(0),t}var a=nt().tag_name;if("number"===typeof a)if(a>=4)at(a);else switch(a){case 0:at(a);continue;case 1:e={name:rt(),description:t.description,tree:t.tree};continue;case 2:e={name:t.name,description:ot(),tree:t.tree};continue;case 3:e={name:t.name,description:t.description,tree:ft(t.tree,Je)};continue}else at(a)}}(Ie);return et(M.a(1,["phyloxml"])),o}throw He}throw He}throw He}if(17===n)return Ie;throw He}throw He}function vt(e){return mt(function(e){return Ve(e,!1)}(e))}var dt=f.a.Content;function ht(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(p.a)(c,2),l=i[0],f=i[1],v=Object(a.useState)(""),d=Object(p.a)(v,2),h=d[0],b=d[1],y=Object(a.useState)([]),g=Object(p.a)(y,2),N=g[0],j=g[1],A=new FileReader,S=function(e){try{A.onload=function(){var e=ce(vt(A.result).tree);f(e),o(!0)},A.readAsText(e)}catch(t){console.log(t),console.log("File printing failed")}},O={accept:".xml",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",fileList:N,headers:{authorization:"authorization-text"},transformFile:function(e){j([e]),S(e)}};return r.a.createElement("div",{className:"wrapper"},r.a.createElement(dt,{justify:"center"},r.a.createElement(m.a,{className:"page",justify:"center",gutter:[16,16]},r.a.createElement("div",null,r.a.createElement("h1",null,"Visualize PhyloXML"),r.a.createElement("h2",null,"Visualize an existing phylogenetic tree. Begin by uploading a phyloXML file, or use our example files."))),r.a.createElement(m.a,{className:"centered-content"},r.a.createElement(E.a,O,r.a.createElement(w.a,null,r.a.createElement(x.a,null),"Upload PhyloXML Files"))),r.a.createElement(m.a,{className:"centered-content"},r.a.createElement("p",{className:"phylo-example-text"}," See our examples: ")),r.a.createElement(m.a,{className:"centered-content"},r.a.createElement(_.default.Group,{onChange:function(e){var t="/phylo-lib-web/examples/phyloXML/"+e.target.value+".xml";b(e.target.value),fetch(t).then((function(e){return e.blob()})).then((function(e){return S(e)}))}},r.a.createElement(_.default.Button,{value:"amphi_frost"},"Amphibian Phylogeny"),r.a.createElement(_.default.Button,{value:"tol_156"},"The Tree of Life"),r.a.createElement(_.default.Button,{value:"apaf"},"Apaf-1 Gene Family Tree"),r.a.createElement(_.default.Button,{value:"adh"},"Alcohol Dehydrogenases")),r.a.createElement(u.a,{content:r.a.createElement("p",null,"Example files obtained from"," ",r.a.createElement("a",{href:"http://phyloxml.org/",target:"_blank",rel:"noopener noreferrer"},"phyloxml.org"),".",""!==h?r.a.createElement("p",null,"See the phyloXML source for the current tree"," ",r.a.createElement("a",{href:"adh"!==h?"http://phyloxml.org/archaeopteryx-js/phyloxml_trees/"+h+".xml":"http://www.phyloxml.org/examples/adh.xml",target:"_blank",rel:"noopener noreferrer"},"here"),"."):null),title:"Credits",trigger:"click"},r.a.createElement("div",{className:"phylo-example-credits"},r.a.createElement(s.a,null)))),n?r.a.createElement(m.a,{justify:"center"},r.a.createElement("div",{className:"ascii-phylo-container"},r.a.createElement("p",{className:"ascii-phylo"},l))):null))}var pt=f.a.Content;function bt(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(p.a)(c,2),l=i[0],u=i[1],s=Object(a.useState)([]),f=Object(p.a)(s,2),v=f[0],d=f[1],h=Object(a.useState)([]),b=Object(p.a)(h,2),y=b[0],g=b[1],N=Object(a.useState)([]),j=Object(p.a)(N,2),A=j[0],S=j[1],O=function(e,t,n){try{var a=new FileReader;a.onload=function(){t.push(T(a.result)),A.length>2&&S(A.slice(-2)),2===t.length&&n&&k(t)},a.readAsText(e)}catch(r){console.log(r),console.log("File printing failed")}},k=function(e){if(e.length<2)alert("Not enough DNA sequences to perform pairwise alignment");else{var t=function(e,t,n,a,r){var o=C(e)+1|0,c=C(t)+1|0,i=de(e,t,n,a,r,o,c),l=le.c(le.c(i,o-1|0),c-1|0);return[he(e,t,i,n,a,r),l]}(e[0],e[1],1,-1,-1),n=Object(p.a)(t,1)[0],a=(r=n[0],c=n[1],ye.contents="",be.contents=!1,we(r,c),ye.contents);u(a.trim()),o(!0)}var r,c},F={accept:".FASTA, .fasta, .txt",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",fileList:y,headers:{authorization:"authorization-text"},multiple:!0,transformFile:function(e){O(e,A,!1),y.push(e),g(y.slice(-2))}};return r.a.createElement("div",{className:"wrapper"},r.a.createElement(pt,{justify:"center"},r.a.createElement(m.a,{className:"page",justify:"center",gutter:[16,16]},r.a.createElement("div",null,r.a.createElement("h1",null,"Visualize Pairwise DNA Alignments"),r.a.createElement("h2",null,"Visualize an alignment of two DNA sequences. Begin by uploading two .FASTA files, or use our example files."))),r.a.createElement(m.a,{className:"horizontally-centered"},r.a.createElement(E.a,F,r.a.createElement(w.a,null,r.a.createElement(x.a,null),"Upload .FASTA Files")),r.a.createElement(w.a,{onClick:function(){return k(A)}},"Display Alignment")),r.a.createElement(m.a,{className:"centered-content"},r.a.createElement("p",{className:"phylo-example-text"}," See our examples: ")),r.a.createElement(m.a,{className:"centered-content"},r.a.createElement(_.default.Group,{onChange:function(e){d([]),e.target.value.split(",").map((function(e){fetch("/phylo-lib-web/examples/FASTA/"+e+".fasta").then((function(e){return e.blob()})).then((function(e){return O(e,v,!0)}))}))}},r.a.createElement(_.default.Button,{value:"h1n1,h3n2"},"H1N1 vs H3N2"),r.a.createElement(_.default.Button,{value:"h3n2,h5n1"},"H5N1 vs H7N7"),r.a.createElement(_.default.Button,{value:"mers,sars"},"SARS vs MERS"))),n?r.a.createElement(m.a,{justify:"center"},r.a.createElement("div",{className:"ascii-phylo-container"},r.a.createElement("p",{className:"ascii-phylo"},l))):null))}var yt=function(){var e=r.a.createElement("div",null,r.a.createElement("p",null,"Content"),r.a.createElement("p",null,"Content"));return r.a.createElement("header",{className:"site-header"},r.a.createElement(i.b,{className:"site-title",to:"/phylo-lib-web"},"PhyloML"),r.a.createElement(u.a,{content:e,className:"tooltip",title:"Title",trigger:"click"},r.a.createElement("a",{className:"tooltip"}," ",r.a.createElement(s.a,{style:{paddingRight:"0.5em"}}),"Confused by all the terms?")))};function gt(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(yt,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/phylo-lib-web/generate"},r.a.createElement(ze,null)),r.a.createElement(l.a,{path:"/phylo-lib-web/visualize"},r.a.createElement(ht,null)),r.a.createElement(l.a,{path:"/phylo-lib-web/pairwise"},r.a.createElement(bt,null)),r.a.createElement(l.a,{path:"/phylo-lib-web"},r.a.createElement(h,null)),r.a.createElement(l.a,{path:"/"},r.a.createElement(h,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(gt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,n){}},[[168,1,2]]]);
//# sourceMappingURL=main.3282f1e4.chunk.js.map