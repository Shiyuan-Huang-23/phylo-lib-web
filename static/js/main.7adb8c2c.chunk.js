(this["webpackJsonpphylo-lib-web"]=this["webpackJsonpphylo-lib-web"]||[]).push([[0],{193:function(a,t,e){a.exports=e(281)},198:function(a,t,e){},281:function(a,t,e){"use strict";e.r(t);var c=e(0),n=e.n(c),g=e(33),r=e.n(g),o=(e(198),e(127)),i=e(58),A=e(25),l=(e(71),e(288)),u=e(290),s=e(284),G=e(285),T=e(286),C=s.a.Content;function f(){return console.log("/phylo-lib-web"),n.a.createElement("div",{className:"wrapper main"},n.a.createElement(C,{justify:"center"},n.a.createElement(G.a,{className:"intro",justify:"center"},n.a.createElement("div",null,n.a.createElement("h1",null,"Welcome to PhyloML"),n.a.createElement("h2",null,"A phylogenetic library written in OCaml."),n.a.createElement("h2",null,"Inferring Evolutionary History through modern genetic similarity."))),n.a.createElement(G.a,{justify:"center",gutter:[16,40]},n.a.createElement(T.a,{lg:7,md:10,sm:12},n.a.createElement(i.b,{className:"offset",to:"/generate"},"Generate Phylogenetic Trees")),n.a.createElement(T.a,{lg:7,md:10,sm:12},n.a.createElement(i.b,{className:"offset",to:"/visualize"},"Visualize Phylogenetic Trees")),n.a.createElement(T.a,{lg:7,md:10,sm:12},n.a.createElement(i.b,{className:"offset",to:"/pairwise"},"Visualize Pairwise DNA Alignments")))))}var m=e(133),d=e.n(m),h=e(160),v=e(24),p=e(287),E=e(283),b=e(137),y=e(96),w=e(282),N=e(289),S=e(291),x=e(19),I=e(41),O=e(20),_=e(22),j=e(13),k=e(7),P=e(26),R=e(3);P.b("Dna-PhyloLibWeb.Empty");function H(a){return">"===j.h(a,0,1)}function U(a,t){var e=j.i(a);return j.g((function(a){if(function(a){if(a>=72)return 84===a||95===a;if(45===a)return!0;if(a<65)return!1;switch(a-65|0){case 1:case 3:case 4:case 5:return!1;case 0:case 2:case 6:return!0}}(a)||function(a){var t=a-65|0;return t>13||t<0?!(t>25||t<15):9!==t}(a))return O.a(t,a)}),e)}var L=O.c;function F(a){var t;try{t=j.e(a,10)}catch(c){if(c!==R.f)throw c;t=0}var e=j.h(a,0,t);return""===e||H(e)?j.h(a,t+1|0,(a.length-t|0)-1|0):a}function V(a){var t=O.d(128);return U(F(a),t),t}var B=O.e;function D(a){var t=function(a,t){for(;;){var e=t,c=a;if(!H(c))return e;var n,g=F(c);try{n=j.e(g,62)}catch(A){if(A!==R.f)throw A;n=g.length-1|0}var r,o=j.h(g,0,n);try{r=j.h(g,n,g.length-n|0)}catch(l){r=""}var i=O.d(128);U(o,i),t=[i,e],a=r}}(a,0);return I.f(x.c((function(a,t){return[t,a]}),0,t))}function z(a,t){try{return O.f(a,t)}catch(e){return}}var M=O.f;function X(a,t,e){var c=e-t|0;return O.g(a,t,c)}var q=e(18),W=e(1),Y=e(11),J=e(14);P.b("Tree-PhyloLibWeb.UnknownClade");function K(a){return a.tag?0:[a[0],x.b(x.g(K,a[1]))]}function Q(a){return function(a){var t=K(a);return Y.a(x.l(J.f,t),x.k(J.f,t))}(a)?a:k.f("clade_ids not unique")}var $={contents:0},Z=($.contents=$.contents+1|0,$.contents),aa=W.a(0,[Z,0,void 0,void 0,void 0,void 0]);function ta(a){return!a.tag&&0===a[1]&&void 0===a[2]&&void 0===a[3]&&void 0===a[4]&&void 0===a[5]}function ea(a,t,e){return W.a(1,[a,t,e])}function ca(a){return W.a(1,[a,void 0,void 0])}function na(a){return aa.tag?k.f("Representation invariant broken"):Q(W.a(0,[($.contents=$.contents+1|0,$.contents),a,void 0,void 0,void 0,void 0]))}var ga={contents:!0},ra={contents:""};function oa(a){return ga.contents?k.p(a):void(ra.contents=ra.contents+q.b(a))}function ia(a){return ga.contents?k.s(a):void(ra.contents=ra.contents+a)}function Aa(a){return ga.contents?void console.log(a):ia(a+"\n")}function la(a){for(var t=1;t<=a;++t)oa(32)}function ua(a,t,e){for(;;){var c=t,n=a;if(!n)return;var g=n[1],r=n[0];la(r===c&&0!==r?1:((r-c|0)<<1)+(0===r||0===c?0:1)|0),0===g?ia(e):oa(124),t=r+1|0,a=g}}function sa(a){return ua(x.i(a),0,"|"),Aa("")}function Ga(a){return a?ua(x.i(a),0,"o-"):k.i("ds")}function Ta(a,t,e){for(;;){var c=a;if(!c)return;var n=c[1],g=c[0];if(g.tag){0!==e?sa(e):k.r(void 0),0!==e&&Ga(e);var r=g[2];void 0!==r&&"Unnamed"===g[0]?Aa(r):Aa(g[0]),a=n}else{var o=0!==n?[t,e]:e?[t,e[1]]:[t,0];0!==e&&sa(e),0!==e&&Ga(e),ia("C\n"),Ta(g[1],t+1|0,o),a=n}}}function Ca(a){return ra.contents="",ga.contents=!1,Ta([a,0],0,0),ra.contents}var fa=e(17),ma=e(4),da=e(15);function ha(a,t,e){var c=z(ma.c(e,a),t);return void 0!==c?c:k.f("Index out of bounds")}var va=e(23);function pa(a,t,e){return Y.c(Y.c(a,t),e)}function Ea(a,t,e,c,n,g,r,o){return[c.contents<1?-1e9:o+ma.c(ma.c(n,e.contents),c.contents-1|0)|0,e.contents<1?-1e9:o+ma.c(ma.c(n,e.contents-1|0),c.contents)|0,e.contents<1||c.contents<1?-1e9:ma.c(ma.c(n,e.contents-1|0),c.contents-1|0)+(Y.a(z(a,(0>e.contents?0:e.contents)-1|0),z(t,(0>c.contents?0:c.contents)-1|0))?g:r)|0]}function ba(a,t,e,c,n,g,r){for(var o=function(a,t,e,c,n){for(var g=I.d(c,n,-1e9),r=0;r<c;++r)ma.d(ma.c(g,r),0,va.b(r,e));for(var o=0;o<n;++o)ma.d(ma.c(g,0),o,va.b(o,e));return g}(0,0,n,g,r),i=1;i<g;++i)for(var A=1;A<r;++A){var l=Ea(a,t,{contents:i},{contents:A},o,e,c,n);ma.d(ma.c(o,i),A,pa(l[0],l[1],l[2]))}return o}function ya(a,t,e,c,n,g){for(var r={contents:B(a)},o={contents:B(t)},i="",A="";r.contents>0||o.contents>0;){var l=Ea(a,t,r,o,e,c,n,g),u=ma.c(ma.c(e,r.contents),o.contents);u===l[2]?(i=q.b(M(a,r.contents-1|0))+i,A=q.b(M(t,o.contents-1|0))+A,r.contents=r.contents-1|0,o.contents=o.contents-1|0):u===l[0]?(i="_"+i,A=q.b(M(t,o.contents-1|0))+A,o.contents=o.contents-1|0):u===l[1]?(A="_"+A,i=q.b(M(a,r.contents-1|0))+i,r.contents=r.contents-1|0):k.f("This should not happen")}return[V(i),V(A)]}function wa(a,t,e,c,n){for(var g=ya(a,t,ba(a,t,e,c,n,B(a)+1|0,B(t)+1|0),e,c,n),r=ma.c(g,0),o=ma.c(g,1),i=B(r),A=0,l=0;l<i;++l)Y.a(z(r,l),95)||Y.a(z(o,l),95)?A=A-n|0:Y.e(z(r,l),z(o,l))&&(A=A+1|0);return A}var Na={contents:!0},Sa={contents:""};function xa(a){return Na.contents?k.p(a):void(Sa.contents=Sa.contents+q.b(a))}function Ia(a){return Na.contents?void console.log(a):void(Sa.contents=Sa.contents+(a+"\n"))}function Oa(a,t){for(var e=B(a),c=0,n=(e-1|0)/80|0;c<=n;++c){Ia(X(a,va.b(80,c),J.h(e,va.b(80,c+1|0))));for(var g=va.b(80,c),r=J.h(e-1|0,va.b(80,c+1|0)-1|0);g<=r;++g)Y.a(z(a,g),z(t,g))?xa(42):Y.a(z(a,g),95)||Y.a(z(t,g),95)?xa(32):xa(124);Ia(""),Ia(X(t,va.b(80,c),J.h(e,va.b(80,c+1|0)))),Ia("")}}function _a(a,t,e,c){for(var n=a.length,g=fa.b(void 0,n),r=0;r<n;++r)for(var o=r+1|0;o<n;++o)fa.a(g,[r,o],wa(ma.c(a,r),ma.c(a,o),t,e,c));return g}function ja(a,t){var e=function(a){return a.length}(a);k.q(e);var c=function(a){return B(ma.c(a,0))}(a);k.q(c);for(var n=fa.b(void 0,e),g=0;g<e;++g)for(var r=0,o=g+1|0;o<e;++o){for(var i=0;i<c;++i)k.q(g),95===ha(g,i,a)||95===ha(o,i,a)?r=r+t|0:ha(g,i,a)!==ha(o,i,a)&&(r=r+1|0);fa.a(n,[g,o],r)}return n}function ka(a){if(0===fa.f(a))return[[0,0],0];var t=[[0,0],k.j];return fa.e((function(a,t,e){return t<e[1]?[a,t]:e}),a,t)}function Pa(a){return ka(a)[0]}function Ra(a,t,e){return fa.d(e,[Y.d(a,t),Y.c(a,t)])}function Ha(a,t,e){return a>=t?k.f("invalid input"):function(a,t,e){fa.c((function(t,c){return t[0]===a?(c+Ra(t[1],a,e))/2:t[1]!==a?c:(c+Ra(t[0],a,e))/2}),e)}(a,0,e),function(a,t){fa.c((function(t,e){return Y.a(t[0],a)||Y.a(t[1],a)?void 0:da.a(e)}),t)}(t,e),e}function Ua(a){return 0===fa.f(a)}function La(a,t,e,c){var n=ma.c(a,t),g=ma.c(a,e),r=x.a(t,c),o=x.a(e,c);if(void 0!==r){if(void 0!==o){var i=x.h(e,x.h(t,c));return[[t<e?t:e,na([r,[o,0]])],i]}var A=x.h(t,c);return[[t<e?t:e,na([ca(g),[r,0]])],A]}if(void 0===o)return[[t<e?t:e,na([ca(n),[ca(g),0]])],c];var l=x.h(e,c);return[[t<e?t:e,na([ca(n),[o,0]])],l]}function Fa(a,t){var e=t.length;if(0===e)return aa;if(1===e)return ca(ma.c(t,0));for(var c=a,n=0;;){var g=n,r=c;if(Ua(r)){var o=x.j((function(a){return a[1]}),g);return 1===x.f(o)?x.e(o):x.f(o)>1?na(o):k.f("Precondition violated in upgma_help")}var i=Pa(r),A=i[1],l=i[0];n=La(t,l,A,g),c=Ha(l,A,r)}}var Va=e(2),Ba=e(182),Da={contents:!0},za={contents:""},Ma={contents:k.v};function Xa(a){return Da.contents?Va.a(Ba.a(Ma.contents,[W.a(2,[0,0]),"%s"]),a):void(za.contents=za.contents+a)}function qa(a){for(var t=1;t<=a;++t)Xa("  ")}function Wa(a,t,e,c){return qa(e),Xa("<"+a),function(a){for(;;){var t=a;if(!t)return;var e=t[1],c=t[0],n=0!==e;Xa(c[0]+'="'+c[1]+'"'+(n?" ":"")),a=e}}(t),Xa(c?">\n":">")}function Ya(a,t){return qa(t),Xa("</"+a+">\n")}function Ja(a,t,e){return qa(t),Xa("<"+a+">"),Xa(e),Ya(a,0)}function Ka(a,t,e){if(void 0!==e)return Ja(a,t,e)}function Qa(a){return Wa("phyloxml",0,0,!0),Wa("phylogeny",0,1,!0),0!==a.name.length&&Ja("name",2,a.name),0!==a.description.length&&Ja("description",2,a.description),ta(a.tree)||function a(t,e){if(t.tag)return Wa("clade",0,e,!0),Ka("name",e+1|0,t[2]),""===t[0]&&void 0===t[1]||(Wa("taxonomy",0,e+1|0,!0),""!==t[0]&&Ja("scientific_name",e+2|0,t[0]),Ka("id",e+2|0,t[1]),Ya("taxonomy",e+1|0)),Ya("clade",e);Wa("clade",0,e,!0),Ka("name",e+1|0,t[5]);var c=t[2];return Ka("confidence",e+1|0,void 0!==c?k.x(c):void 0),void 0===t[3]&&void 0===t[4]||(Wa("taxonomy",0,e+1|0,!0),Ka("id",e+2|0,t[4]),Ka("rank",e+2|0,t[3]),Ya("taxonomy",e+1|0)),function(t,e){for(;;){var c=t;if(!c)return;a(c[0],e),t=c[1]}}(t[1],e+1|0),Ya("clade",e)}(a.tree,2),Ya("phylogeny",1),Ya("phyloxml",0)}var $a="\nC\n|\no-PEPPER VEINAL MOTTLE VIRUS\n|\no-C\n  |\n  o-C\n  | |\n  | o-BEAK AND FEATHER DISEASE\n  | |\n  | o-C\n  |   |\n  |   o-AVIAN NEPHRITIS VIRUS\n  |   |\n  |   o-C\n  |     |\n  |     o-C\n  |     | |\n  |     | o-C\n  |     | | |\n  |     | | o-DENGUE VIRUS\n  |     | | |\n  |     | | o-C\n  |     | |   |\n  |     | |   o-BOVINE VIRAL DIARRHEA VIRUS\n  |     | |   |\n  |     | |   o-HUMAN RHINOVIRUS\n  |     | |\n  |     | o-C\n  |     |   |\n  |     |   o-NOROVIRUS\n  |     |   |\n  |     |   o-C\n  |     |     |\n  |     |     o-FELINE IMMUNODEFICIENCY VIRUS\n  |     |     |\n  |     |     o-REDSPOTTED GROUPER NERVOUS NECROSIS VIRUS\n  |     |\n  |     o-C\n  |       |\n  |       o-HEPATITIS E\n  |       |\n  |       o-C\n  |         |\n  |         o-HEPATITIS C\n  |         |\n  |         o-NORWALK VIRUS\n  |\n  o-C\n    |\n    o-EASTERN EQUINE ENCEPHALITIS VIRUS\n    |\n    o-C\n      |\n      o-JAPANESE ENCEPHALITIS VIRUS\n      |\n      o-C\n        |\n        o-COXSACKIEVIRUS\n        |\n        o-SINDBIS VIRUS STRAIN\n",Za=(e(280),s.a.Content);function at(){var a=Object(c.useState)(""),t=Object(v.a)(a,2),e=t[0],g=t[1],r=Object(c.useState)(!1),o=Object(v.a)(r,2),i=o[0],A=o[1],s=Object(c.useState)(!0),T=Object(v.a)(s,2),C=T[0],f=T[1],m=Object(c.useState)([]),x=Object(v.a)(m,2),I=x[0],O=x[1],_=Object(c.useState)([]),j=Object(v.a)(_,2),k=j[0],P=j[1],R=Object(c.useState)(void 0),H=Object(v.a)(R,2),U=H[0],F=H[1],B=Object(c.useState)(!1),z=Object(v.a)(B,2),M=z[0],X=z[1],q=[">H1N1 PB-2 Genome\nATGGAGAGAATAAAAGAACTAAGAGATTTGATGTCGCAGTCTCGCACTCGCGAGATACTGACAAAAACCACTGTGGACCA\nTATGGCCATAATCAAGAAATATACGTCAGGAAGACAGGAGAAGAATCCTGCTCTTAGGATGAAATGGATGATGGCAATGA\nAATACCCGATTACAGCAGACAAAAGGATAATGGAGATGATCCCTGAGAGAAATGAGCAAGGTCAGACTCTTTGGAGCAAA\nACAAATGATGCTGGATCAGACAGAGTGATGGTATCACCTCTGGCTGTGACGTGGTGGAATAGAAATGGGCCTACGACAAG\nTACAGTCCATTATCCAAAGGTCTATAAAACCTACTTTGAAAAAGTCGAAAGGTTAAAACATGGAACCTTCGGTCCAGTTC\nACTTTCGAAATCAAGTTAAAATACGCCGCAGGGTTGACATAAACCCGGGCCATGCAGATCTCAGTGCTAAAGAAGCACAA\nGATGTCATCATGGAGGTCGTTTTCCCAAATGAGGTCGGAGCCAGGATATTGACATCAGAGTCACAGTTAACAATAACAAA\nGGAAAAGAAGGAGGAGCTTCAGGACTGTAAGATTGCTCCTTTAATGGTGGCATACATGTTGGAGAGAGAACTGGTTCGCA\nAAACCAGATTCCTACCAGTAGCTGGCGGGACAAGCAGCGTGTATATCGAGGTATTACACTTGACTCAAGGGACCTGCTGG\nGAACAAATGTACACACCGGGAGGGGAGGTGAGAAATGATGATGTTGATCAGAGTTTAATTATTGCTGCCAGAAATATTGT\nTAGGAGAGCGACAGTATCAGCAGACCCGTTGGCTTCGCTCTTGGAGATGTGCCATAGTACACAAATTGGCGGGATAAGAA\nTGGTAGACATCCTTAGACAAAACCCAACAGAAGAGCAAGCTGTGGATATATGCAAAGCAGCAATGGGTCTAAGGATCAGT\nTCATCCTTCAGTTTTGGAGGTTTCACTTTCAAAAGGACAAGTGGGTCATCTGTCAAAAGAGAAGAAGAAGTGCTCACAGG\nCAACCTCCAAACATTGAAAATAAGAGTGCATGAAGGATATGAGGAATTCACAATGGTTGGGCGAAGAGCGACAGCCATTC\nTAAGGAAAGCAACCAGAAGGCTGATCCAACTGATAGTGAGTGGGAGAGACGAGCAGTCAATCGCCGAAGCAATCATAGTG\nGCAATGGTGTTCTCACAAGAGGATTGTATGATAAAAGCAGTACGAGGTGATTTGAATTTTGTCAATAGGGCGAACCAGCG\nGCTAAACCCTATGCATCAACTCCTGAGACATTTCCAAAAGGATGCAAAGGTGCTGTTTCAAAACTGGGGGATTGAACCCA\nTTGACAATGTCATGGGGATGATCGGAATATTACCTGACATGACCCCCAGCACAGAGATGTCACTAAGAGGAGTGAGAGTC\nAGCAAAACGGGAGTGGATGAATATTCCAGCACTGAGAGAGTGGTCGTGAGCATTGATCGTTTCTTGAGGGTCCGAGACCA\nGAGGGGAAACGTGCTCTTGTCTCCTGAAGAAGTTAGTGAAACACAGGGAACAGAAAAGCTGACGATAACATATTCATCGT\nCCATGATGTGGGAAATCAATGGCCCGGAATCAGTGCTAGTTAACACATATCAATGGATCATTAGAAATTGGGAGACTGTG\nAAAATTCAGTGGTCCCAAGACCCTACAATGCTATACAATAAGATGGAATTTGAGCCCTTTCAATCCTTGGTGCCTAAGGC\nTGCCAGAGGTCAGTATAGTGGATTTGTGAGGACGCTATTCCAGCAGATGCGTGATGTGCTGGGGACATTTGACACTGTCC\nAGATAATAAAGCTACTACCATTTGCAGCAGCCCCACCGGAACAGAGTAGGATGCAGTTCTCTTCTCTAACTGTGAACGTA\nAGGGGTTCAGGAATGAGAATACTTGTGAGAGGCAACTCCCCTGTGTTCAACTATAACAAGGCAACCAAGAGGCTCACAGT\nCCTTGGAAAGGATGCAGGTGCATTGACAGAAGATCCAGATGAGGGAACAGCAGGAGTGGAATCCGCGGTATTAAGAGGAT\nTTCTAATTCTGGGCAAAGAAGACAAAAGATATGGACCAGCGTTGAGCATCAACGAATTGAGCAATCTTGCAAAAGGGGAG\nAAGGCTAACGTGTTGATAGGGCAAGGAGACGTGGTGTTGGTAATGAAACGGAAACGGGACTCTAGCATACTTACTGACAG\nCCAGACAGCGACCAAAAGAATTCGGATGGCCATCAATTAG ","\n>H3N2 PB-2 Genome\nagcgaaagcaggtcaaatatattcaatatggagagaataaaagaactaagagatttgatgtcgcagtctcgcactcgcga\ngatactgacaaaaaccactgtggaccatatggccataatcaagaaatatacgtcaggaagacaggagaagaaccctgctc\nttaggatgaagtggatgatggcaatgaaatatccgattacagcagacaggaggataatggagatgatccctgaaagaaat\ngagcaaggtcagactctttggagcaaaacgaatgatgctggatcagacagagtgatggtatcgcctctggctgtgacatg\ngtggaatagaaatggaccaacgacaagtacagtccattatccgaaggtctacaaaacctactttgagaaggtcgaaaggt\ntaaagcatggaacctttggtcccgttcactttcggaatcaagttaaaatacgccgcagggttgacataaacccgggccac\ngcagacctcagtgctaaagaagcacaagatgtcatcatggaggtcgttttcccaaacgaagtaggagccaggatattaac\natcagagtcacaattaacaataacaaaagaaaaaaaggaagagctccaagactgtaagattgctcctttgatggtggcat\nacatgttggaaagagaattagttcgcaaaaccagattcctaccggtagctggtgggacaagcagcgtgtatatcgaggtg\nttgcacttgacccaggggacctgccgggaacaaatgtatacaccgggaggagaggtgagaaatgatgatattgatcagag\ntttaattattgctgctagaaatattgtcagaagagcaacagtatcagcagatccattagcttcgctcttggaaatgtgcc\natagcacacaaattggtggaataaggatggtagatattcttaggcaaaatccaacagaagagcaagctgtggatatatgc\naaagcagcaatgggtctgaggatcagttcatccttcagctttggaggtttcactttcaaaaggacaagtggatcatctgt\ncaaaagagaagaagaagtactcacaggcaaccttcagacattgaaaataagagtgcacgaaggatatgaggaatttacaa\ntggtagggcgaagagcaacagccattttaaggaaagcaaccagaaggctgattcaattaatagtgagtggaagagacgag\ncaatcaattgccgaagcaatcatagtggcaatggtgttctcacaagaggattgcatgataaaggcagtccgaggcgattt\ngaattttgtcaacagagcgaaccagcggctgaatcctatgcatcaactcctgaggcacttccagaaggatgcaaaggtgc\ntatttcaaaactggggagttgaacccattgacaatgtcatggggatgatcggaatattacctgacatgacccccagcaca\ngaaatgtcactaaggggagtaagggtcagtaaaatgggagtggatgaatattccagtactgagagagtggtgtgagcat\ntgaccgtttcttgagggtccgagaccagaggggaaatgtgctcttgtctcctgaagaagttagtgaaacacagggaacag\naaaagctgacaataacatattcatcgtccatgatgtgggaaatcaatggcccggaatcagtgctggtcaacacatatcag\ntggatcattagaaactgggaaactgtgaagatccagtggtcccaagaccctacaatgctatacaataagatgaaatttga\ngccttttcaatctttagtgcctaaggctgccagaggccagtatagcggctttgtgaggacgctatttcagcaaatgcgtg\natgtgctgggaacatttgacactgtccagataataaagctactaccatttgcagcagccccgccagaacagagtagaatg\ncagttctcttctctaactgtgaacgtaaggggttcaggaatgagaatacttgtgagaggtaattctcctgtgttcaatta\ntaacaaggcaaccaagaggctcacaatccttggaaaggacgcaggtgcactgactgaagatccagatgaaggaacagcag\ngagtggagtctgcagtattaagaggatttctaattctgggcaaagaagacaaaagatatggaccagcattgagcatcaac\ngaattgagcaatcttgcgaaaggggagaaggctaatgtgttgatagggcaaggagacgtggtgttggtaatgaaacggaa\nacgggactctagcatacttactgacagccagacagcgaccaaaagaattcggatggccatcaattagtgtcgaattgttt\naaaaacgaccttgtttctact\n","\n>H5N1 PB-2 Genome\natggagagaataaaagaattacgagatctaatgtcacagtcccgcactcgcgagatactaacaaaaaccactgtggacca\ntatggccataatcaagaaatacacatcaggaagacaagagaagaaccctgctctcagaatgaaatggatgatggcaatga\naatatccaatcacagcggacaagagaataatagagatgattcctgaaaggaatgaacaagggcagacgctctggagcaag\nacaaatgatgctggatcggacagggtgatggtgtctcccctagctgtaacttggtggaacaggaatgggccggcgacaag\ntgcagttcattatccaaaggtttacaaaacatactttgagaaggttgaaaggttaaaacatggaacctttggtcccgttc\natttccgaaaccaagttaaaatacgccgccgagttgatataaatcctggccatgcagatctcagtgctaaagaagcacaa\ngatgtcatcatggaggtcgttttcccaaatgaagtgggagccagaatattgacatcagagtcgcaattgacaataacgaa\nagagaagaaagaagagctccaagattgtaagattgctcccttaatggttgcatacatgttggaaagggaactagtccgca\naaaccagattcctaccggtagcaggcggaacaagcagtgtgtacattgaggtattgcatttgactcaagggacctgctgg\ngaacagatgtacactccaggcggagaagtgagaaatgacgatgttgaccagagtttgatcatcgctgccagaaacattgt\ntaggagagcaacggtatcagcggatccactggcatcactgctggagatgtgtcacagcacacaaattggtgggataagga\ntggtggacatccttaggcaaaatccaactgaggaacaagctgtggatatatgcaaagcagcaataggtctgaggatcagt\ntcttcctttagctttggaggcttcactttcaaaagaacaagtggatcatccgtcaagaaggaagaggaagtgcttacagg\ncaacctccaaacattgaaaataagagtacatgaggggtatgaggaattcacaatggttgggcggagggcaacagctatcc\ntgaggaaagcaactagaaggctgattcagttgatagtaagtggaagagacgaacaatcaatcgctgaggcaatcattgta\ngcaatggtgttctcacaggaggattgcatgataaaggcagtccgaggcgatctgaatttcgtaaacagagcaaaccaaag\nattaaaccccatgcatcaactcctgagacattttcaaaaggatgcaaaagtgctatttcagaattggggaattgaaccca\nttgataatgtcatggggatgatcggaatattacctgacatgactcccagcacagaaatgtcactgagaggagtaagagtt\nagtaaaatgggagtggatgaatattccagcactgagagagtagttgtaagtattgaccgtttcttaagggttcgagatca\ngcgggggaacgtactcttgtctcccgaagaggtcagcgaaacccagggaacagagaaattgacaataacatattcatcat\ncaatgatgtgggaaatcaacggtcctgagtcagtgcttgttaacacttatcagtggatcatcagaaactgggagactgtg\naagattcaatggtctcaagaccccacgatgctgtacaataagatggagtttgaaccgttccaatccttggtacccaaggc\ntgccagaggtcaatacagtggatttgtgagaacattattccaacaaatgcgtgacgtactggggacatttgatactgtcc\nagataataaagctgctaccatttgcagcagccccaccgaagcagagcagaatgcagttttcttctttaactgtgaatgtg\nagaggctcaggaatgagaatactcgtaaggggcaattcccctgtattcaactataataaggcaaccaaaaggcttaccgt\ntcttggaaaggacgcaggtgcattaacagaggatccagatgaggggacagccggagtggaatctgcagtactgaggggat\ntcttaattctaggcaaggaggacaaaaggtatgggccagcattgagcatcaatgaactgagcaatcttgcgaagggggag\naaagctaatgtgctgatagggcaaggagacgtggtgttggtaatgaaacggaaacgggactctagcatacttactgacag\nccagacagcgaccaaaagaattcggatggccatcaattag "],W=["H1N1","H3N2","H5N1"],Y=[{uid:"1",name:"h1n1.fasta",status:"done",url:"/phylo-lib-web/examples/FASTA/h1n1.fasta"},{uid:"2",name:"h3n2.fasta",status:"done",url:"/phylo-lib-web/examples/FASTA/h3n2.fasta"},{uid:"3",name:"h5n1.fasta",status:"done",url:"/phylo-lib-web/examples/FASTA/h5n1.fasta"}],J=function(a,t){O((function(t){return t.concat(a)})),P((function(a){return a.concat(t)}))},K=function(){var a=Object(h.a)(d.a.mark((function a(t,e){var c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:try{(c=new FileReader).onload=function(){var a=V(c.result);J(a,e)},c.readAsText(t)}catch(n){console.log(n),console.log("File printing failed")}case 1:case"end":return a.stop()}}),a)})));return function(t,e){return a.apply(this,arguments)}}(),Q=function(a){return a.split(".").slice(0,-1).join(".").toUpperCase()},$={accept:".FASTA, .txt, .fasta",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",defaultFileList:Y,headers:{authorization:"authorization-text"},multiple:!0,transformFile:function(a){for(X(!0);Y.length>0;)Y.pop();var t=Q(a.name);K(a,t)},onRemove:function(a){var t=Q(a.name);console.log(t);var e=k.indexOf(t);console.log(e),I.splice(e,1),k.splice(e,1),O(I),P(k)}};return n.a.createElement("div",{className:"wrapper"},n.a.createElement(Za,{justify:"center"},n.a.createElement(G.a,{className:"page",justify:"center"},n.a.createElement("div",null,n.a.createElement("h1",null,"Generate a Phylogenetic Tree"),n.a.createElement("h2",null,"By computing similarity scores for DNA samples of species, we can infer their species' evolutionary history through time. Begin by uploading .FASTA files that contain DNA sequences, or use our example DNA sequences."))),n.a.createElement(G.a,{className:"horizontally-centered"},n.a.createElement(p.a,{checkedChildren:"Clustal",unCheckedChildren:"UPGMA",className:"generate-toggle",defaultChecked:!0,onChange:function(a,t){f(a)}}),n.a.createElement(E.a,$,n.a.createElement(b.a,null,n.a.createElement(N.a,null)," Upload .FASTA files")),n.a.createElement(b.a,{onClick:function(){var a=M?k:W;if(!C){var t=Ca(Fa(_a(M?I:q,1,-1,-1),a));return g(t),void A(!0)}var e="",c=new URLSearchParams;c.append("email","vg222@cornell.edu");for(var n="",r=0;r<I.length;r++)n+=">",n+=k[r].split(" ").join("_"),n+="\n",n+=L(I[r]),n+="\n";c.append("sequence",n),c.append("outfmt","fa"),fetch("https://www.ebi.ac.uk/Tools/services/rest/clustalo/run",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:c,redirect:"follow"}).then((function(a){return a.text()})).then((function(t){e=t,console.log(e),function t(c){fetch("https://www.ebi.ac.uk/Tools/services/rest/clustalo/status/"+e,{method:"GET",redirect:"follow"}).then((function(a){return a.text()})).then((function(n){if("FINISHED"!=n&&c<50)setTimeout(t(c+1),1e3);else{if("FINISHED"!=n)return;console.log(n),fetch("https://www.ebi.ac.uk/Tools/services/rest/clustalo/result/"+e+"/aln-fasta",{method:"GET",redirect:"follow"}).then((function(a){return a.text()})).then((function(t){var e=Ca(Fa(ja(D(t),1),a));g(e),A(!0)})).catch((function(a){return console.log("error",a)}))}})).catch((function(a){return console.log("error",a)}))}(0)})).catch((function(a){return console.log("error",a)}))}},"Generate tree"),n.a.createElement(l.a,{content:n.a.createElement("p",null,"Information on Clustal and UPGMA"),title:"Info",trigger:"click"},n.a.createElement("div",{className:"generate-info"},n.a.createElement(u.a,null)))),n.a.createElement(G.a,{className:"centered-content"},n.a.createElement(b.a,{onClick:function(){if(M&&I.length<1)alert("At least one FASTA file must be uploaded for tree generation.");else{var a=M?k:W,t=function(a){return Da.contents=!1,za.contents="",Qa({name:"",description:"",tree:a}),za.contents}(Fa(_a(M?I:q,1,-1,-1),a)),e=n.a.createElement("a",{href:"data:text/xml;charset=utf-8,"+encodeURIComponent(t),download:"tree.xml"},"Click to Download");F(e)}}},"Save tree as phyloXML")),void 0!==U?n.a.createElement(G.a,{className:"centered-content"},U,n.a.createElement(b.a,{onClick:function(){return F(void 0)},className:"hide-download"},n.a.createElement(y.a,{title:"Hide Download Link"},n.a.createElement(S.a,{style:{color:"firebrick"}})))):null),n.a.createElement(G.a,{className:"centered-content"},n.a.createElement("p",{className:"example-text"}," See our examples: ")),n.a.createElement(G.a,{className:"centered-content"},n.a.createElement(w.default.Group,{onChange:function(a){switch(a.target.value){case"Influenza A Viruses":A(!0),g("\n\nC\n|\no-SARS\n|\no-C\n  |\n  o-C\n  | |\n  | o-H6N1\n  | |\n  | o-C\n  |   |\n  |   o-H5N1\n  |   |\n  |   o-C\n  |     |\n  |     o-H3N2\n  |     |\n  |     o-C\n  |       |\n  |       o-H7N9\n  |       |\n  |       o-C\n  |         |\n  |         o-H1N1\n  |         |\n  |         o-H7N7\n  |\n  o-C\n    |\n    o-C\n    | |\n    | o-H2N3\n    | |\n    | o-H10N7\n    |\n    o-C\n      |\n      o-H3N1\n      |\n      o-H3N8\n\n");break;case"COXII":A(!0),g("\nC\n|\no-C\n| |\n| o-FOLSOMIA PENICULA\n| |\n| o-C\n|   |\n|   o-ANOPHELES GABONENSIS\n|   |\n|   o-C\n|     |\n|     o-BRACHYTELES HYPOXANTHUS\n|     |\n|     o-C\n|       |\n|       o-PARIDES ANCHISES\n|       |\n|       o-PARIDES NEOPHILUS\n|\no-C\n  |\n  o-C\n  | |\n  | o-CONOGETHES PUNCTIFERALIS\n  | |\n  | o-GRAPHOLITA MOLESTA\n  |\n  o-C\n    |\n    o-PARIDES PRONEUS\n    |\n    o-PYTHIUM INSIDIOSUM\n");break;case"Virus Capsid":A(!0),console.log($a),g($a)}}},n.a.createElement(w.default.Button,{value:"Virus Capsid"},"Virus Capsid Gene"),n.a.createElement(w.default.Button,{value:"COXII"},"Cytochrome C Oxidase Subunit II"),n.a.createElement(w.default.Button,{value:"Influenza A Viruses"},"Influenza A PB-2"))),i?n.a.createElement(G.a,{justify:"center"},n.a.createElement("div",{className:"ascii-phylo-container"},n.a.createElement("p",{className:"ascii-phylo"},e))):null)}var tt=e(16),et=e(27);function ct(a){return"number"!==typeof a||(a>=14?a<17:a<9)}function nt(a){if("number"!==typeof a)return a.tag?a[0]:String(a[0]);switch(a){case 0:return"phylogeny";case 1:return"name";case 2:return"description";case 3:return"clade";case 4:return"rank";case 5:return"confidence";case 6:return"taxonomy";case 7:return"scientific_name";case 8:return"id";case 9:return"<";case 10:return"</";case 11:return">";case 12:return"quote";case 13:return"=";case 14:return".";case 15:return"true";case 16:return"false";case 17:return"EOF";case 18:return"Unit"}}var gt=fa.b(void 0,16);function rt(a,t){var e;if(t){var c=k.k(a);e=_.b((function(a){try{return k.h(c)}catch(o){if(o===R.c)return;throw o}}))}else{var n=_.f(a);e=_.b((function(a){try{return function(a,t){for(;;){var e=t,c=_.g(a);if(void 0===c){if(""===e)throw R.c;return e}if(_.d(a),10===c)return e;if(13===c)return e;t=e+q.b(c)}}(n,"")}catch(o){if(o===R.c)return;throw o}}))}var g,r=_.g(e);if(void 0===r)return e;try{g=j.h(r,0,5)}catch(i){var o=et.a(i);if(o[0]===R.e)return e;throw o}return"<?xml"!==g||_.d(e),e}function ot(a,t){var e=_.g(a);if(void 0!==e){var c;try{c=e}catch(n){if(n===_.a)return it(t);throw n}return 32!==c?fa.g(gt,t)?fa.d(gt,t):function(a){return a>=60?a<63:34===a}(e)?W.a(1,[t]):(_.d(a),ot(a,t+q.b(e))):it(t)}return it(t)}function it(a){return fa.g(gt,a)?fa.d(gt,a):W.a(1,[a])}function At(a){return!(a>57||a<48)}function lt(a,t){for(;;){var e=t,c=_.g(a);if(void 0===c)return W.a(0,[tt.i(e)]);if(!At(c))return W.a(0,[tt.i(e)]);_.d(a),t=e+q.b(c)}}function ut(a){var t;try{t=function(a){var t;try{t=_.e(a)}catch(e){if(e===_.a)throw R.c;throw e}return _.f(t)}(a)}catch(i){if(i===R.c)return[17,0];throw i}for(var e=0;;){var c,n=e,g=0;try{c=_.e(t),g=1}catch(A){if(A===_.a)return x.i(n);if(A===R.c)return[17,0];throw A}if(1===g){var r=0;if(c>=32){if(46===c){e=[14,n];continue}if(c>=60)if(c>=63)r=2;else switch(c-60|0){case 0:var o=_.g(t);if(void 0===o)return x.i([9,n]);if(47===o){_.d(t),e=[10,n];continue}e=[9,n];continue;case 1:e=[13,n];continue;case 2:e=[11,n];continue}else if(c>=35)r=2;else switch(c-32|0){case 0:continue;case 1:r=2;break;case 2:e=[12,n];continue}}else if(c>=11){if(13===c)continue;r=2}else{if(c>=9)continue;r=2}if(2===r){if(At(c)){e=[lt(t,q.b(c)),n];continue}e=[ot(t,q.b(c)),n];continue}}}}fa.a(gt,"phylogeny",0),fa.a(gt,"name",1),fa.a(gt,"description",2),fa.a(gt,"clade",3),fa.a(gt,"rank",4),fa.a(gt,"confidence",5),fa.a(gt,"taxonomy",6),fa.a(gt,"scientific_name",7),fa.a(gt,"id",8),fa.a(gt,"true",15),fa.a(gt,"false",16);var st=P.b("Phylo_parser-PhyloLibWeb.SyntaxError"),Gt={name:"",description:"",tree:aa},Tt={name:void 0,rank:void 0,confidence:void 0,taxonomy:void 0};var Ct={contents:function(a){return 17}},ft={contents:function(a){return 17}};function mt(a){var t=Va.a(Ct.contents,void 0);if(!Y.a(t,a))throw nt(a),nt(t),st;Va.a(ft.contents,void 0)}function dt(a){for(;;){var t=a,e=Va.a(Ct.contents,void 0);if("number"===typeof e){switch(e){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 14:case 15:break;default:return t}mt(e),a=""===t?nt(e):t+" "+nt(e)}else{if(e.tag){var c=e[0];if(mt(W.a(1,[c])),""!==t){a=t+" "+c;continue}a=c;continue}var n=e[0];if(mt(W.a(0,[n])),""!==t){a=t+" "+String(n);continue}a=String(n)}}}function ht(a,t){return void 0!==a?[t,a]:[t,0]}function vt(a){return mt(10),mt(a),mt(11)}function pt(a,t){var e=Va.a(Ct.contents,void 0);if("number"===typeof e){if(12===e){mt(12);var c,n=Va.a(Ct.contents,void 0);if("number"===typeof n)if(15!==n){if(16!==n)throw st;mt(16),c={tag_name:a.tag_name,str_attr:a.str_attr,num_attr:a.num_attr,bool_attr:ht(a.bool_attr,[t,!1])}}else mt(15),c={tag_name:a.tag_name,str_attr:a.str_attr,num_attr:a.num_attr,bool_attr:ht(a.bool_attr,[t,!0])};else{var g=dt("");c={tag_name:a.tag_name,str_attr:ht(a.str_attr,[t,g]),num_attr:a.num_attr,bool_attr:a.bool_attr}}return mt(12),c}throw st}if(e.tag)throw st;var r=e[0];return mt(W.a(0,[r])),{tag_name:a.tag_name,str_attr:a.str_attr,num_attr:ht(a.num_attr,[t,r]),bool_attr:a.bool_attr}}function Et(a){mt(9);var t=Va.a(Ct.contents,void 0);if(!function(a){if("number"!==typeof a)return 1===a.tag;switch(a){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:return!0;default:return!1}}(t))throw st;mt(t);for(var e={tag_name:t,str_attr:void 0,num_attr:void 0,bool_attr:void 0};;){var c=e,n=Va.a(Ct.contents,void 0);if(!ct(n)){if("number"===typeof n){if(11!==n)throw st;return mt(11),c}throw st}mt(n),mt(13),e=pt(c,nt(n))}}function bt(a){for(;;){var t=Va.a(Ct.contents,void 0);if("number"!==typeof t)mt(t);else{if(9!==t){if(10===t)return vt(a);mt(t);continue}bt(Et().tag_name)}}}function yt(a){if("number"===typeof Va.a(Ct.contents,void 0))throw st;var t=dt("");return vt(1),t}function wt(a){if("number"===typeof Va.a(Ct.contents,void 0))throw st;var t=dt("");return vt(2),t}function Nt(a){mt(14);var t=Va.a(Ct.contents,void 0);if("number"===typeof t)return vt(5),0;if(t.tag)return vt(5),0;var e=t[0],c=tt.a(String(a)+"."+String(e));return mt(W.a(0,[e])),vt(5),c}function St(a){var t=Va.a(Ct.contents,void 0);if("number"===typeof t){if(14===t)return Nt(0);throw st}if(t.tag)throw st;var e=t[0];return mt(W.a(0,[e])),14===Va.a(Ct.contents,void 0)?Nt(e):(vt(5),e)}function xt(a){if("number"===typeof Va.a(Ct.contents,void 0))throw st;var t=dt("");return vt(8),t}function It(a){if("number"===typeof Va.a(Ct.contents,void 0))throw st;var t=dt("");return vt(7),t}function Ot(a){for(;;){var t=a,e=Va.a(Ct.contents,void 0);if("number"!==typeof e)throw st;if(9!==e){if(10!==e)throw st;return vt(6),t}var c=Et().tag_name;if("number"!==typeof c)bt(c);else{if(7!==c){if(8!==c){bt(c);continue}a={id:xt(),scientific_name:t.scientific_name};continue}a={id:t.id,scientific_name:It()}}}}function _t(a,t){var e=Va.a(Ct.contents,void 0);if("number"===typeof e){if(9!==e){if(10!==e)throw st;if(vt(3),ta(a)){var c=t.taxonomy;if(void 0!==c)return ea(c.scientific_name,c.id,t.name);var n=t.name;return void 0!==n?ea(n,void 0,n):ca("Unnamed")}if(a.tag)return a;var g=t.taxonomy,r=void 0!==g?g.id:void 0;return W.a(0,[a[0],a[1],t.confidence,t.rank,r,t.name])}var o=Et().tag_name;if("number"===typeof o)switch(o){case 1:return _t(a,{name:yt(),rank:t.rank,confidence:t.confidence,taxonomy:t.taxonomy});case 3:if(ta(a))return _t(_t(a,Tt),t);var i=_t(aa,Tt);return _t(na([a,[i,0]]),t);case 5:return _t(a,{name:t.name,rank:t.rank,confidence:St(),taxonomy:t.taxonomy});case 6:return _t(a,{name:t.name,rank:t.rank,confidence:t.confidence,taxonomy:Ot({id:void 0,scientific_name:"Unnamed"})})}return bt(o),_t(a,t)}throw st}function jt(a){var t=function(a){var t={contents:ut(a)},e={contents:function(a,t){return 17}};return e.contents=function(c){return c?function(c){var n=t.contents;return n?n[0]:(t.contents=ut(a),Va.b(e.contents,!0,void 0))}:function(e){var c=t.contents;return c?(t.contents=c[1],18):(t.contents=ut(a),18)}},e.contents}(a);Ct.contents=Va.a(t,!0),ft.contents=Va.a(t,!1);var e=Va.a(Ct.contents,void 0);if("number"===typeof e){if(9===e){var c=Et().tag_name;if("number"===typeof c)throw st;if(1===c.tag){if("phyloxml"===c[0]){var n=Et().tag_name;if("number"===typeof n){if(0!==n)throw st;var g=function(a){for(;;){var t=a,e=Va.a(Ct.contents,void 0);if("number"!==typeof e)throw st;if(9!==e){if(10!==e)throw st;return vt(0),t}var c=Et().tag_name;if("number"===typeof c)if(c>=4)bt(c);else switch(c){case 0:bt(c);continue;case 1:a={name:yt(),description:t.description,tree:t.tree};continue;case 2:a={name:t.name,description:wt(),tree:t.tree};continue;case 3:a={name:t.name,description:t.description,tree:_t(t.tree,Tt)};continue}else bt(c)}}(Gt);return vt(W.a(1,["phyloxml"])),g}throw st}throw st}throw st}if(17===e)return Gt;throw st}throw st}function kt(a){return jt(function(a){return rt(a,!1)}(a))}var Pt=s.a.Content;function Rt(){var a=Object(c.useState)([]),t=Object(v.a)(a,2),e=t[0],g=t[1],r=Object(c.useState)(void 0),o=Object(v.a)(r,2),i=o[0],A=o[1],s=Object(c.useState)(!1),T=Object(v.a)(s,2),C=T[0],f=T[1],m=Object(c.useState)(""),d=Object(v.a)(m,2),h=d[0],p=d[1],y=Object(c.useState)(""),S=Object(v.a)(y,2),x=S[0],I=S[1],O=new FileReader,_=function(a){try{O.onload=function(){var a=Ca(kt(O.result).tree);p(a),f(!0)},O.readAsText(a)}catch(t){console.log(t),console.log("File printing failed")}},j={accept:".xml",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",fileList:e,headers:{authorization:"authorization-text"},onChange:function(a){g(a.fileList)},transformFile:function(a){g([a]),A(a)}};return n.a.createElement("div",{className:"wrapper"},n.a.createElement(Pt,{justify:"center"},n.a.createElement(G.a,{className:"page",justify:"center",gutter:[16,16]},n.a.createElement("div",null,n.a.createElement("h1",null,"Visualize PhyloXML"),n.a.createElement("h2",null,"Visualize an existing phylogenetic tree. Begin by uploading a phyloXML file, or use our example files."))),n.a.createElement(G.a,{className:"horizontally-centered"},n.a.createElement(E.a,j,n.a.createElement(b.a,null,n.a.createElement(N.a,null),"Upload PhyloXML Files")),n.a.createElement(b.a,{onClick:function(){e.length<1?alert("At least one phyloXML file must be uploaded for tree visualization."):(I(""),_(i))}},"Visualize")),n.a.createElement(G.a,{className:"centered-content"},n.a.createElement("p",{className:"example-text"}," See our examples: ")),n.a.createElement(G.a,{className:"centered-content"},n.a.createElement(w.default.Group,{onChange:function(a){var t="/phylo-lib-web/examples/phyloXML/"+a.target.value+".xml";I(a.target.value),fetch(t).then((function(a){return a.blob()})).then((function(a){return _(a)}))},value:x},n.a.createElement(w.default.Button,{value:"amphi_frost"},"Amphibian Phylogeny"),n.a.createElement(w.default.Button,{value:"tol_156"},"The Tree of Life"),n.a.createElement(w.default.Button,{value:"apaf"},"Apaf-1 Gene Family Tree"),n.a.createElement(w.default.Button,{value:"adh"},"Alcohol Dehydrogenases")),n.a.createElement(l.a,{content:n.a.createElement("p",null,"Example files obtained from"," ",n.a.createElement("a",{href:"http://phyloxml.org/",target:"_blank",rel:"noopener noreferrer"},"phyloxml.org"),".",""!==x?n.a.createElement("p",null,"See the phyloXML source for the current tree"," ",n.a.createElement("a",{href:"adh"!==x?"http://phyloxml.org/archaeopteryx-js/phyloxml_trees/"+x+".xml":"http://www.phyloxml.org/examples/adh.xml",target:"_blank",rel:"noopener noreferrer"},"here"),"."):null),title:"Credits",trigger:"click"},n.a.createElement("div",{className:"example-credits"},n.a.createElement(u.a,null)))),C?n.a.createElement(G.a,{justify:"center"},n.a.createElement("div",{className:"ascii-phylo-container"},n.a.createElement("p",{className:"ascii-phylo"},h))):null))}var Ht=s.a.Content;function Ut(){var a=Object(c.useState)(!1),t=Object(v.a)(a,2),e=t[0],g=t[1],r=Object(c.useState)(""),o=Object(v.a)(r,2),i=o[0],A=o[1],s=Object(c.useState)([]),T=Object(v.a)(s,2),C=T[0],f=T[1],m=Object(c.useState)([]),d=Object(v.a)(m,2),h=d[0],p=d[1],y=Object(c.useState)([]),S=Object(v.a)(y,2),x=S[0],I=S[1],O=Object(c.useState)([]),_=Object(v.a)(O,2),j=_[0],k=_[1],P=function(a,t,e){try{var c=new FileReader;c.onload=function(){t.push(V(c.result)),j.length>2&&k(j.slice(-2)),2===t.length&&e&&R(t)},c.readAsText(a)}catch(n){console.log(n),console.log("File printing failed")}},R=function(a){if(a.length<2)alert("Not enough DNA sequences to perform pairwise alignment");else{var t=function(a,t,e,c,n){var g=B(a)+1|0,r=B(t)+1|0,o=ba(a,t,e,c,n,g,r),i=ma.c(ma.c(o,g-1|0),r-1|0);return[ya(a,t,o,e,c,n),i]}(a[0],a[1],1,-1,-1),e=Object(v.a)(t,1)[0],c=(n=e[0],r=e[1],Sa.contents="",Na.contents=!1,Oa(n,r),Sa.contents);A(c.trim()),g(!0)}var n,r},H={accept:".FASTA, .fasta, .txt",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",fileList:x,onChange:function(a){I(a.fileList)},headers:{authorization:"authorization-text"},multiple:!0,onRemove:function(a){j.splice(x.indexOf(a)),k(j)},transformFile:function(a){P(a,j,!1),x.push(a),I(x.slice(-2))}};return n.a.createElement("div",{className:"wrapper"},n.a.createElement(Ht,{justify:"center"},n.a.createElement(G.a,{className:"page",justify:"center",gutter:[16,16]},n.a.createElement("div",null,n.a.createElement("h1",null,"Visualize Pairwise DNA Alignments"),n.a.createElement("h2",null,"Visualize an alignment of two DNA sequences. Begin by uploading two .FASTA files, or use our example files."))),n.a.createElement(G.a,{className:"horizontally-centered"},n.a.createElement(E.a,H,n.a.createElement(b.a,null,n.a.createElement(N.a,null),"Upload .FASTA Files")),n.a.createElement(b.a,{onClick:function(){R(j),j.length>=2&&(f([]),p([]))}},"Display Alignment")),n.a.createElement(G.a,{className:"centered-content"},n.a.createElement("p",{className:"example-text"}," See our examples: ")),n.a.createElement(G.a,{className:"centered-content"},n.a.createElement(w.default.Group,{onChange:function(a){f([]);var t=a.target.value.split(",");p(t),t.map((function(a){fetch("/phylo-lib-web/examples/FASTA/"+a+".fasta").then((function(a){return a.blob()})).then((function(a){return P(a,C,!0)}))}))},value:h.join(",")},n.a.createElement(w.default.Button,{value:"h1n1,h3n2"},"H1N1 vs H3N2"),n.a.createElement(w.default.Button,{value:"h5n1,h7n7"},"H5N1 vs H7N7"),n.a.createElement(w.default.Button,{value:"mers,h7n9"},"MERS vs H7N9")),n.a.createElement(l.a,{content:n.a.createElement("div",null,n.a.createElement("p",null,"The pairwise alignment shown is a globally optimum alignment obtained via the Needleman-Wunch algorithm."),n.a.createElement("p",null,"Base pair matches, mismatches and gaps are visualized. A star indicates a pair match, a bar indicates a mismatch, and a blank space indicates a gap."),n.a.createElement("p",null,"Example files obtained from"," ",n.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/nuccore/",target:"_blank",rel:"noopener noreferrer"},"NCBI Nucleotide"),".",2===h.length?n.a.createElement("p",null,"See the sources for the current alignment:"," ",n.a.createElement("a",{href:"/phylo-lib-web/examples/FASTA/"+h[0]+".fasta",target:"_blank",rel:"noopener noreferrer"},h[0]+".fasta")," ","and"," ",n.a.createElement("a",{href:"/phylo-lib-web/examples/FASTA/"+h[1]+".fasta",target:"_blank",rel:"noopener noreferrer"},h[1]+".fasta"),"."):null)),title:"Information and Credits",trigger:"click"},n.a.createElement("div",{className:"example-credits"},n.a.createElement(u.a,null)))),e?n.a.createElement(G.a,{justify:"center"},n.a.createElement("div",{className:"ascii-phylo-container"},n.a.createElement("p",{className:"ascii-phylo"},i))):null))}var Lt=function(){var a,t=n.a.createElement("div",null,n.a.createElement("p",null,"A"," ",n.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Phylogenetic_tree"},"phylogenetic tree")," ","is a tree that shows the evolutionary relationships between species. The structure of these trees can be stored in"," ",n.a.createElement("a",{href:"http://www.phyloxml.org/"},"XML")," files. To see visualizations of such trees, you can click Visualize Phylogenetic Trees."),n.a.createElement("p",null," ","We can also try to predict the structure of phylogenetic trees by looking at the similarities in the DNAs of different species. To know more, you can click Generate Phylogenetic Trees."));return n.a.createElement("header",{className:"site-header"},n.a.createElement(i.b,{className:"site-title",to:"/"},"PhyloML"),n.a.createElement(l.a,(a={className:"clickable",content:t},Object(o.a)(a,"className","tooltip"),Object(o.a)(a,"trigger","click"),a),n.a.createElement("a",{className:"tooltip"}," ",n.a.createElement(u.a,{style:{paddingRight:"0.5em"}}),"Confused by all the terms?")))};function Ft(){return n.a.createElement(i.a,null,n.a.createElement("div",null,n.a.createElement(Lt,null),n.a.createElement(A.c,null,n.a.createElement(A.a,{path:"/generate",component:function(){return n.a.createElement(at,null)}}),n.a.createElement(A.a,{path:"/visualize",component:function(){return n.a.createElement(Rt,null)}}),n.a.createElement(A.a,{path:"/pairwise",component:function(){return n.a.createElement(Ut,null)}}),n.a.createElement(A.a,{path:"/",component:function(){return n.a.createElement(f,null)}}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Ft,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))},71:function(a,t,e){}},[[193,1,2]]]);
//# sourceMappingURL=main.7adb8c2c.chunk.js.map