// Generated by js_of_ocaml 2.4.1
(function(b){"use strict";var
b5=125,cC=254,ac=255,ct=224,ay='"',z=16777215,b4="\\\\",cs=250,ae=1024,ce="jsError",a2=2147483,b3="input",a8=115,cB=512,au="formatblock",e="",d=128,cr="^",cq=100,y="0",cA="</a>",cy="p",cz="fd ",aB="inserthtml",cp="[[",co=1e3,aA="src/core/lwt.ml",a4="main.ml",az=".",a3="+",ad=65535,b2="\n\n",af=105,cd="%d",cx=-88,a7=110,cc=57343,cn=785140586,b1=252,ax="'",cm=127,aw="int_of_string",cl=-32,cb=982028505,b0="cols",G=" ",a6="e",ck="I",cw="h1",ca="h3",cv="]]",T="-",av=-48,cj="nan",b$='<a href="',b9=240,b_=2048,ch="%.12g",ci=56320,a5=" : file already exists",b8="rows",cg="/",bZ="5px",cf=114,b7="h2",cu="index out of bounds",b6="B";function
bi(a,b,c){var
e=new
Array(c);for(var
d=0;d<c;d++)e[d]=a[b+d];return e}function
bh(a,b,c){var
d=String.fromCharCode;if(b==0&&c<=4096&&c==a.length)return d.apply(null,a);var
f=e;for(;0<c;b+=ae,c-=ae)f+=d.apply(null,bi(a,b,Math.min(c,ae)));return f}function
aC(a){var
c=new
Array(a.l),e=a.c,d=e.length,b=0;for(;b<d;b++)c[b]=e.charCodeAt(b);for(d=a.l;b<d;b++)c[b]=0;a.c=c;a.t=4;return c}function
A(a,b,c,d,e){if(e==0)return 0;if(d==0&&(e>=c.l||c.t==2&&e>=c.c.length)){c.c=a.t==4?bh(a.c,b,e):b==0&&a.c.length==e?a.c:a.c.substr(b,e);c.t=c.c.length==c.l?0:2}else
if(c.t==2&&d==c.c.length){c.c+=a.t==4?bh(a.c,b,e):b==0&&a.c.length==e?a.c:a.c.substr(b,e);c.t=c.c.length==c.l?0:2}else{if(c.t!=4)aC(c);var
g=a.c,h=c.c;if(a.t==4)for(var
f=0;f<e;f++)h[d+f]=g[b+f];else{var
i=Math.min(e,g.length-b);for(var
f=0;f<i;f++)h[d+f]=g.charCodeAt(b+f);for(;f<e;f++)h[d+f]=0}}return 0}function
f$(a,b){var
e=a.length,d=new
Array(e+1),c=0;for(;c<e;c++)d[c]=a[c];d[c]=b;return d}function
D(c,b){if(c.fun)return D(c.fun,b);var
a=c.length,d=b.length,e=a-d;if(e==0)return c.apply(null,b);else
if(e<0)return D(c.apply(null,bi(b,0,a)),bi(b,a,d-a));else
return function(a){return D(c,f$(b,a))}}function
fV(a,b){throw[0,a,b]}function
aJ(a,b){if(b.repeat)return b.repeat(a);var
c=e,d=0;if(a==0)return c;for(;;){if(a&1)c+=b;a>>=1;if(a==0)return c;b+=b;d++;if(d==9)b.slice(0,1)}}function
U(a){if(a.t==2)a.c+=aJ(a.l-a.c.length,"\0");else
a.c=bh(a.c,0,a.c.length);a.t=0}function
cG(a){if(a.length<24){for(var
b=0;b<a.length;b++)if(a.charCodeAt(b)>cm)return false;return true}else
return!/[^\x00-\x7f]/.test(a)}function
f7(a){for(var
l=e,f=e,i,h,j,b,c=0,k=a.length;c<k;c++){h=a.charCodeAt(c);if(h<d){for(var
g=c+1;g<k&&(h=a.charCodeAt(g))<d;g++);if(g-c>cB){f.substr(0,1);l+=f;f=e;l+=a.slice(c,g)}else
f+=a.slice(c,g);if(g==k)break;c=g}b=1;if(++c<k&&((j=a.charCodeAt(c))&-64)==d){i=j+(h<<6);if(h<ct){b=i-12416;if(b<d)b=1}else{b=2;if(++c<k&&((j=a.charCodeAt(c))&-64)==d){i=j+(i<<6);if(h<b9){b=i-925824;if(b<b_||b>=55295&&b<57344)b=2}else{b=3;if(++c<k&&((j=a.charCodeAt(c))&-64)==d&&h<245){b=j-63447168+(i<<6);if(b<65536||b>1114111)b=3}}}}}if(b<4){c-=b;f+="\ufffd"}else
if(b>ad)f+=String.fromCharCode(55232+(b>>10),ci+(b&1023));else
f+=String.fromCharCode(b);if(f.length>ae){f.substr(0,1);l+=f;f=e}}return l+f}function
f5(a){switch(a.t){case
9:return a.c;default:U(a);case
0:if(cG(a.c)){a.t=9;return a.c}a.t=8;case
8:return f7(a.c)}}function
p(a,b,c){this.t=a;this.c=b;this.l=c}p.prototype={toString:function(){return f5(this)}};function
c(a){return new
p(0,a,a.length)}function
bf(a,b){fV(a,c(b))}var
f=[0];function
P(a){bf(f[4],a)}function
fu(){P(cu)}function
j(a,b){if(b>>>0>=a.length-1)fu();return a}function
fv(a){if(isFinite(a)){if(Math.abs(a)>=2.22507385850720138e-308)return 0;if(a!=0)return 1;return 2}return isNaN(a)?4:3}function
fw(){return 0}function
o(a){if(a<0)P("String.create");return new
p(a?2:9,e,a)}function
fy(a,b,c,d){if(c>0)if(b==0&&(c>=a.l||a.t==2&&c>=a.c.length))if(d==0){a.c=e;a.t=2}else{a.c=aJ(c,String.fromCharCode(d));a.t=c==a.l?0:2}else{if(a.t!=4)aC(a);for(c+=b;b<c;b++)a.c[b]=d}return 0}function
a9(a){if((a.t&6)!=0)U(a);return a.c}function
be(a){a=a9(a);var
e=a.length;if(e>31)P("format_int: format too long");var
b={justify:a3,signstyle:T,filler:G,alternate:false,base:0,signedconv:false,width:0,uppercase:false,sign:1,prec:-1,conv:"f"};for(var
d=0;d<e;d++){var
c=a.charAt(d);switch(c){case"-":b.justify=T;break;case"+":case" ":b.signstyle=c;break;case"0":b.filler=y;break;case"#":b.alternate=true;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":b.width=0;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.width=b.width*10+c;d++}d--;break;case".":b.prec=0;d++;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.prec=b.prec*10+c;d++}d--;case"d":case"i":b.signedconv=true;case"u":b.base=10;break;case"x":b.base=16;break;case"X":b.base=16;b.uppercase=true;break;case"o":b.base=8;break;case"e":case"f":case"g":b.signedconv=true;b.conv=c;break;case"E":case"F":case"G":b.signedconv=true;b.uppercase=true;b.conv=c.toLowerCase();break}}return b}function
a_(a,b){if(a.uppercase)b=b.toUpperCase();var
g=b.length;if(a.signedconv&&(a.sign<0||a.signstyle!=T))g++;if(a.alternate){if(a.base==8)g+=1;if(a.base==16)g+=2}var
d=e;if(a.justify==a3&&a.filler==G)for(var
f=g;f<a.width;f++)d+=G;if(a.signedconv)if(a.sign<0)d+=T;else
if(a.signstyle!=T)d+=a.signstyle;if(a.alternate&&a.base==8)d+=y;if(a.alternate&&a.base==16)d+="0x";if(a.justify==a3&&a.filler==y)for(var
f=g;f<a.width;f++)d+=y;d+=b;if(a.justify==T)for(var
f=g;f<a.width;f++)d+=G;return c(d)}function
a$(a,b){var
c,f=be(a),e=f.prec<0?6:f.prec;if(b<0){f.sign=-1;b=-b}if(isNaN(b)){c=cj;f.filler=G}else
if(!isFinite(b)){c="inf";f.filler=G}else
switch(f.conv){case"e":var
c=b.toExponential(e),d=c.length;if(c.charAt(d-3)==a6)c=c.slice(0,d-1)+y+c.slice(d-1);break;case"f":c=b.toFixed(e);break;case"g":e=e?e:1;c=b.toExponential(e-1);var
i=c.indexOf(a6),h=+c.slice(i+1);if(h<-4||b.toFixed(0).length>e){var
d=i-1;while(c.charAt(d)==y)d--;if(c.charAt(d)==az)d--;c=c.slice(0,d+1)+c.slice(i);d=c.length;if(c.charAt(d-3)==a6)c=c.slice(0,d-1)+y+c.slice(d-1);break}else{var
g=e;if(h<0){g-=h+1;c=b.toFixed(g)}else
while(c=b.toFixed(g),c.length>e+1)g--;if(g){var
d=c.length-1;while(c.charAt(d)==y)d--;if(c.charAt(d)==az)d--;c=c.slice(0,d+1)}}break}return a_(f,c)}function
aE(a,b){if(a9(a)==cd)return c(e+b);var
d=be(a);if(b<0)if(d.signedconv){d.sign=-1;b=-b}else
b>>>=0;var
f=b.toString(d.base);if(d.prec>=0){d.filler=G;var
g=d.prec-f.length;if(g>0)f=aJ(g,y)+f}return a_(d,f)}function
fA(){return 0}function
fC(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
fM(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
fY(a,b){a.t&6&&U(a);b.t&6&&U(b);return a.c<b.c?-1:a.c>b.c?1:0}function
cD(a,b,c){var
e=[];for(;;){if(!(c&&a===b))if(a
instanceof
p)if(b
instanceof
p){if(a!==b){var
d=fY(a,b);if(d!=0)return d}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
f=a[0];if(f===cC)f=0;if(f===cs){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
g=b[0];if(g===cC)g=0;if(g===cs){b=b[1];continue}else
if(f!=g)return f<g?-1:1;else
switch(f){case
248:var
d=fM(a[2],b[2]);if(d!=0)return d;break;case
251:P("equal: abstract value");case
255:var
d=fC(a,b);if(d!=0)return d;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)e.push(a,b,1)}}else
return 1}else
if(b
instanceof
p||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!="number"&&a&&a.compare)return a.compare(b,c);else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!c)return NaN;if(a==a)return 1;if(b==b)return-1}}if(e.length==0)return 0;var
h=e.pop();b=e.pop();a=e.pop();if(h+1<a.length)e.push(a,b,h+1);a=a[h];b=b[h]}}function
fB(a,b){return+(cD(a,b,false)>=0)}function
fF(a){return(a[3]|a[2]|a[1])==0}function
fI(a){return[ac,a&z,a>>24&z,a>>31&ad]}function
cN(a){var
d=a.length,c=new
Array(d);for(var
b=0;b<d;b++)c[b]=a[b];return c}function
fJ(a,b){var
c=a[1]-b[1],d=a[2]-b[2]+(c>>24),e=a[3]-b[3]+(d>>24);return[ac,c&z,d&z,e&ad]}function
cF(a,b){if(a[3]>b[3])return 1;if(a[3]<b[3])return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
cE(a){a[3]=a[3]<<1|a[2]>>23;a[2]=(a[2]<<1|a[1]>>23)&z;a[1]=a[1]<<1&z}function
fG(a){a[1]=(a[1]>>>1|a[2]<<23)&z;a[2]=(a[2]>>>1|a[3]<<23)&z;a[3]=a[3]>>>1}function
fL(a,b){var
e=0,d=cN(a),c=cN(b),f=[ac,0,0,0];while(cF(d,c)>0){e++;cE(c)}while(e>=0){e--;cE(f);if(cF(d,c)>=0){f[1]++;d=fJ(d,c)}fG(c)}return[0,f,d]}function
fK(a){return a[1]|a[2]<<24}function
fE(a){return a[3]<<16<0}function
fH(a){var
b=-a[1],c=-a[2]+(b>>24),d=-a[3]+(c>>24);return[ac,b&z,c&z,d&ad]}function
fD(a,b){var
c=be(a);if(c.signedconv&&fE(b)){c.sign=-1;b=fH(b)}var
d=e,i=fI(c.base),h="0123456789abcdef";do{var
g=fL(b,i);b=g[1];d=h.charAt(fK(g[2]))+d}while(!fF(b));if(c.prec>=0){c.filler=G;var
f=c.prec-d.length;if(f>0)d=aJ(f,y)+d}return a_(c,d)}function
m(a,b){switch(a.t&6){default:if(b>=a.c.length)return 0;case
0:return a.c.charCodeAt(b);case
4:return a.c[b]}}function
h(a){return a.l}function
fU(a){var
b=0,d=h(a),c=10,e=d>0&&m(a,0)==45?(b++,-1):1;if(b+1<d&&m(a,b)==48)switch(m(a,b+1)){case
120:case
88:c=16;b+=2;break;case
111:case
79:c=8;b+=2;break;case
98:case
66:c=2;b+=2;break}return[b,e,c]}function
cP(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=122)return a-87;return-1}function
aD(a){bf(f[3],a)}function
fN(a){var
i=fU(a),d=i[0],j=i[1],e=i[2],g=h(a),k=-1>>>0,f=d<g?m(a,d):0,c=cP(f);if(c<0||c>=e)aD(aw);var
b=c;for(d++;d<g;d++){f=m(a,d);if(f==95)continue;c=cP(f);if(c<0||c>=e)break;b=e*b+c;if(b>k)aD(aw)}if(d!=g)aD(aw);b=j*b;if(e==10&&(b|0)!=b)aD(aw);return b|0}function
bb(a){return+(a>31&&a<cm)}function
fO(){var
c=b.console?b.console:{},d=["log","debug","info","warn","error","assert","dir","dirxml","trace","group","groupCollapsed","groupEnd","time","timeEnd"];function
e(){}for(var
a=0;a<d.length;a++)if(!c[d[a]])c[d[a]]=e;return c}var
aF={amp:/&/g,lt:/</g,quot:/\"/g,all:/[&<\"]/};function
cH(a){if(!aF.all.test(a))return a;return a.replace(aF.amp,"&amp;").replace(aF.lt,"&lt;").replace(aF.quot,"&quot;")}function
f8(a){for(var
h=e,c=h,b,j,f=0,i=a.length;f<i;f++){b=a.charCodeAt(f);if(b<d){for(var
g=f+1;g<i&&(b=a.charCodeAt(g))<d;g++);if(g-f>cB){c.substr(0,1);h+=c;c=e;h+=a.slice(f,g)}else
c+=a.slice(f,g);if(g==i)break;f=g}if(b<b_){c+=String.fromCharCode(192|b>>6);c+=String.fromCharCode(d|b&63)}else
if(b<55296||b>=cc)c+=String.fromCharCode(ct|b>>12,d|b>>6&63,d|b&63);else
if(b>=56319||f+1==i||(j=a.charCodeAt(f+1))<ci||j>cc)c+="\xef\xbf\xbd";else{f++;b=(b<<10)+j-56613888;c+=String.fromCharCode(b9|b>>18,d|b>>12&63,d|b>>6&63,d|b&63)}if(c.length>ae){c.substr(0,1);h+=c;c=e}}return h+c}function
E(a){var
b=9;if(!cG(a))b=8,a=f8(a);return new
p(b,a,a.length)}function
ga(a){var
d=a.length,c=new
Array(d);for(var
b=0;b<d;b++)c[b]=a[b];return c}function
bc(a){return function(){return arguments.length>0?D(a,ga(arguments)):D(a,[undefined])}}function
Q(a,b){var
a=a+1|0,c=new
Array(a);c[0]=0;for(var
d=1;d<a;d++)c[d]=b;return c}function
r(a){bf(f[2],a)}function
bd(a){if(!a.opened)r("Cannot flush a closed channel");if(a.buffer==e)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=e;return 0}function
H(a){this.data=a}H.prototype={truncate:function(){this.data=o(0)}};function
cQ(a){a=a
instanceof
p?a.toString():a;r(a+": No such file or directory")}var
fx=cg;function
aG(a){a=a
instanceof
p?a.toString():a;if(a.charCodeAt(0)!=47)a=fx+a;var
d=a.split(cg),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case".":break;case"":if(b.length==0)b.push(e);break;default:b.push(d[c]);break}b.orig=a;return b}function
O(){this.content={}}O.prototype={exists:function(a){return this.content[a]?1:0},mk:function(a,b){this.content[a]=b},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
aI=new
O();aI.mk(e,new
O());function
ba(a){var
b=aI;for(var
c=0;c<a.length;c++){if(!(b.exists&&b.exists(a[c])))cQ(a.orig);b=b.get(a[c])}return b}function
f4(a){var
c=aG(a),b=ba(c);return b
instanceof
O?1:0}function
f0(a){return new
p(4,a,a.length)}function
gd(a){if(a.t!=4)aC(a);return a.c}function
fz(a,b){var
f=aG(a),d=aI;for(var
g=0;g<f.length-1;g++){var
e=f[g];if(!d.exists(e))d.mk(e,new
O());d=d.get(e);if(!(d
instanceof
O))r(f.orig+a5)}var
e=f[f.length-1];if(d.exists(e))r(f.orig+a5);if(b
instanceof
O)d.mk(e,b);else
if(b
instanceof
H)d.mk(e,b);else
if(b
instanceof
p)d.mk(e,new
H(b));else
if(b
instanceof
Array)d.mk(e,new
H(f0(b)));else
if(b.toString)d.mk(e,new
H(c(b.toString())));else
P("caml_fs_register");return 0}function
f3(a){var
b=aI,d=aG(a),e,f;for(var
c=0;c<d.length;c++){if(b.auto){e=b.auto;f=c}if(!(b.exists&&b.exists(d[c])))return e?e(d,f):0;b=b.get(d[c])}return 1}function
ag(a,b,c){if(f.fds===undefined)f.fds=new
Array();c=c?c:{};var
d={};d.file=b;d.offset=c.append?h(b.data):0;d.flags=c;f.fds[a]=d;f.fd_last_idx=a;return a}function
ge(a,b,c){var
d={};while(b){switch(b[1]){case
0:d.rdonly=1;break;case
1:d.wronly=1;break;case
2:d.append=1;break;case
3:d.create=1;break;case
4:d.truncate=1;break;case
5:d.excl=1;break;case
6:d.binary=1;break;case
7:d.text=1;break;case
8:d.nonblock=1;break}b=b[2]}var
g=a.toString(),i=aG(a);if(d.rdonly&&d.wronly)r(g+" : flags Open_rdonly and Open_wronly are not compatible");if(d.text&&d.binary)r(g+" : flags Open_text and Open_binary are not compatible");if(f3(a)){if(f4(a))r(g+" : is a directory");if(d.create&&d.excl)r(g+a5);var
h=f.fd_last_idx?f.fd_last_idx:0,e=ba(i);if(d.truncate)e.truncate();return ag(h+1,e,d)}else
if(d.create){var
h=f.fd_last_idx?f.fd_last_idx:0;fz(a,o(0));var
e=ba(i);return ag(h+1,e,d)}else
cQ(a)}ag(0,new
H(o(0)));ag(1,new
H(o(0)));ag(2,new
H(o(0)));function
fP(a){var
b=f.fds[a];if(b.flags.wronly)r(cz+a+" is writeonly");return{file:b.file,offset:b.offset,fd:a,opened:true}}function
f9(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.error&&c.error(a)}function
f_(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.log&&c.log(a)}var
aH=new
Array();function
fX(a,b){var
i=c(b),d=h(i),g=h(a.file.data),f=a.offset;if(f+d>=g){var
e=o(f+d);A(a.file.data,0,e,0,g);A(i,0,e,f,d);a.file.data=e}a.offset+=d;return 0}function
cI(a){var
b;switch(a){case
1:b=f_;break;case
2:b=f9;break;default:b=fX}var
d=f.fds[a];if(d.flags.rdonly)r(cz+a+" is readonly");var
c={file:d.file,offset:d.offset,fd:a,opened:true,buffer:e,output:b};aH[c.fd]=c;return c}function
fQ(){var
a=0;for(var
b
in
aH)if(aH[b].opened)a=[0,aH[b],a];return a}function
cJ(a,b,c,d){if(!a.opened)r("Cannot output to a closed channel");var
f;if(c==0&&h(b)==d)f=b;else{f=o(d);A(b,c,f,0,d)}var
e=f.toString(),g=e.lastIndexOf("\n");if(g<0)a.buffer+=e;else{a.buffer+=e.substr(0,g+1);bd(a);a.buffer+=e.substr(g+1)}return 0}function
cK(a,b){var
d=c(String.fromCharCode(b));cJ(a,d,0,1);return 0}if(!Math.imul)Math.imul=function(a,b){return((a>>16)*b<<16)+(a&ad)*b|0};var
cL=Math.imul;function
fS(a,b){return+(cD(a,b,false)!=0)}function
fT(a){return+(a
instanceof
Array)}function
cO(a){return a
instanceof
Array?a[0]:a
instanceof
p?b1:co}function
a(a,b){f[a+1]=b}var
cM={};function
fW(a,b){cM[a9(a)]=b;return 0}function
cR(){P(cu)}function
w(a,b){if(b>>>0>=a.l)cR();return m(a,b)}function
fZ(a,b){a.t&6&&U(a);b.t&6&&U(b);return a.c==b.c?1:0}function
g(a,b){return 1-fZ(a,b)}function
l(a,b,c){c&=ac;if(a.t!=4){if(b==a.c.length){a.c+=String.fromCharCode(c);if(b+1==a.l)a.t=0;return 0}aC(a)}a.c[b]=c;return 0}function
bg(a,b,c){if(b>>>0>=a.l)cR();return l(a,b,c)}function
f1(){return 32}function
f2(a){var
c=b;if(c.quit)c.quit(a);if(c.process&&c.process.exit)c.process.exit(a);P("Function 'exit' not implemented")}function
aK(a){var
b=1;while(a&&a.joo_tramp){a=a.joo_tramp.apply(null,a.joo_args);b++}return a}function
F(a,b){return{joo_tramp:a,joo_args:b}}function
f6(a,b){if(typeof
b==="function"){a.fun=b;return 0}if(b.fun){a.fun=b.fun;return 0}var
c=b.length;while(c--)a[c]=b[c];return 0}function
fR(a){return cM[a]}function
aL(a){if(a
instanceof
Array)return a;if(b.RangeError&&a
instanceof
b.RangeError&&a.message&&a.message.match(/maximum call stack/i))return[0,f[9]];if(b.InternalError&&a
instanceof
b.InternalError&&a.message&&a.message.match(/too much recursion/i))return[0,f[9]];if(a
instanceof
b.Error)return[0,fR(ce),a];return[0,f[3],E(String(a))]}function
i(a,b){return a.length==1?a(b):D(a,[b])}function
s(a,b,c){return a.length==2?a(b,c):D(a,[b,c])}function
n(a,b,c,d){return a.length==3?a(b,c,d):D(a,[b,c,d])}function
at(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):D(a,[b,c,d,e,f])}var
bE=[0,c("Out_of_memory")],aN=[0,c("Failure")],bj=[0,c("Invalid_argument")],bG=[0,c("Match_failure")],bF=[0,c("Stack_overflow")],u=[0,c("Assert_failure")],bH=[0,c("Undefined_recursive_module")],aS=c('File "%s", line %d, characters %d-%d: %s');a(11,bH);a(10,u);a(9,[0,c("Sys_blocked_io")]);a(8,bF);a(7,bG);a(6,[0,c("Not_found")]);a(5,[0,c("Division_by_zero")]);a(4,[0,c("End_of_file")]);a(3,bj);a(2,aN);a(1,[0,c("Sys_error")]);a(0,bE);var
cW=c(ch),cV=c(az),cT=c("true"),cU=c("false"),c0=c("\\b"),c1=c("\\t"),c2=c("\\n"),c3=c("\\r"),cZ=c(b4),cY=c("\\'"),c6=c(e),c5=c("String.blit"),c4=c("String.sub"),c7=c("Queue.Empty"),c9=c("Buffer.add: cannot grow buffer"),dp=c(e),dq=c(e),dt=c(ch),du=c(ay),dv=c(ay),dr=c(ax),ds=c(ax),dn=c(cj),dl=c("neg_infinity"),dm=c("infinity"),dk=c(az),dj=c("printf: bad positional specification (0)."),di=c("%_"),dh=[0,c("printf.ml"),143,8],de=c(ax),df=c("Printf: premature end of format string '"),da=c(ax),db=c(" in format string '"),dc=c(", at char number "),dd=c("Printf: bad conversion %"),c_=c("Sformat.index_of_int: negative argument "),dA=c(e),dB=c(", %s%s"),dS=[1,1],dT=c("%s\n"),dU=c("(Program not linked with -g, cannot print stack backtrace)\n"),dM=c("Raised at"),dP=c("Re-raised at"),dQ=c("Raised by primitive operation at"),dR=c("Called from"),dN=c('%s file "%s", line %d, characters %d-%d'),dO=c("%s unknown location"),dH=c("Out of memory"),dI=c("Stack overflow"),dJ=c("Pattern matching failed"),dK=c("Assertion failed"),dL=c("Undefined recursive module"),dD=c("(%s%s)"),dE=c(e),dF=c(e),dG=c("(%s)"),dz=c(cd),dx=c("%S"),dy=c("_"),d6=[0,c(aA),648,20],d7=[0,c(aA),651,8],d3=[0,c(aA),498,8],d1=[0,c(aA),487,9],dZ=c("Lwt.wakeup_result"),dW=c("Fatal error: exception "),dV=c("Lwt.Canceled"),ea=c("Js.Error"),ee=c("iframe"),ed=c("br"),ec=c("textarea"),eb=c(b3),ei=c("Exception during Lwt.async: "),eR=c("^error_in_anchor^"),eG=[0,c(a4),72,76],eH=c("global"),eI=c("wiki"),eJ=c("^error2_in_anchor^"),eK=[0,c(cv),0],eL=c(cp),eM=c(e),eN=[0,c(cv),0],eO=c("|"),eP=c(cp),eQ=c(e),eF=[0,c(a4),67,35],em=c("#text"),en=c("A"),eo=c(b6),ep=c("BR"),eq=c("DIV"),er=c("H1"),es=c("H2"),et=c("H3"),eu=c("HR"),ev=c(ck),ew=c("P"),ex=c(cr),ey=c(cr),ez=c(b2),eA=[0,c("//")],eB=c("----"),eD=c(b4),eE=[0,c("**")],eC=c(b2),el=c(e),fl=c("lololo"),fm=c("Enter a wikipage"),fn=c(e),fo=[0,c(cA),0],fp=c('" wysitype="wiki">'),fq=c(b$),fb=c("http://google.ru"),fc=c("Enter a link"),fd=c("desc"),fe=c("Enter description"),ff=[0,c(cA),0],fg=c('" wysitype="global">'),fh=c(b$),fi=c(e),eT=c("inserthorizontalrule"),eU=c("hr"),eV=c("removeformat"),eW=c("remove format"),eX=c("bold"),eY=c(b6),eZ=c("italic"),e0=c(ck),e1=c(au),e2=c(cy),e3=[0,[0,c(cy)]],e4=c(au),e5=c(cw),e6=[0,[0,c(cw)]],e7=c(au),e8=c(b7),e9=[0,[0,c(b7)]],e_=c(au),e$=c(ca),fa=[0,[0,c(ca)]],fj=c(aB),fk=c("link"),fr=c(aB),fs=c("link2wiki"),ft=c(e),eS=[0,c(a4),96,17],ej=c("Main.Break");function
aM(a){throw[0,aN,a]}function
V(a){throw[0,bj,a]}function
cS(a,b){return fB(a,b)?a:b}function
k(a,b){var
c=h(a),e=h(b),d=o(c+e|0);A(a,0,d,0,c);A(b,0,d,c,e);return d}function
aO(a){return c(e+a)}fP(0);cI(1);var
W=cI(2);function
bk(a,b){return cJ(a,b,0,h(b))}function
bl(a){return bk(W,a)}function
bm(a){function
b(a){var
b=a;for(;;){if(b){var
c=b[2],d=b[1];try{bd(d)}catch(f){}var
b=c;continue}return 0}}return b(fQ(0))}function
cX(a,b){return cK(a,b)}function
bn(a){return bd(a)}function
bo(a,b){var
c=b;for(;;){if(c){var
d=c[2];i(a,c[1]);var
c=d;continue}return 0}}function
X(a,b){var
c=o(a);fy(c,0,a,b);return c}function
ah(a,b,c){if(0<=b)if(0<=c)if(!((h(a)-c|0)<b)){var
d=o(c);A(a,b,d,0,c);return d}return V(c4)}function
ai(a,b,c,d,e){if(0<=e)if(0<=b)if(!((h(a)-e|0)<b))if(0<=d)if(!((h(c)-e|0)<d))return A(a,b,c,d,e);return V(c5)}function
aj(d,b){if(b){var
a=b[1],g=[0,0],f=[0,0],i=b[2];bo(function(a){g[1]++;f[1]=f[1]+h(a)|0;return 0},b);var
e=o(f[1]+cL(h(d),g[1]-1|0)|0);A(a,0,e,0,h(a));var
c=[0,h(a)];bo(function(a){A(d,0,e,c[1],h(d));c[1]=c[1]+h(d)|0;A(a,0,e,c[1],h(a));c[1]=c[1]+h(a)|0;return 0},i);return e}return c6}var
aP=f1(0),Y=cL(aP/8|0,(1<<(aP-10|0))-1|0)-1|0,c8=[0,c7];function
ak(a){var
b=1<=a?a:1,c=Y<b?Y:b,d=o(c);return[0,d,0,c,d]}function
al(a){return ah(a[1],0,a[2])}function
bp(a,b){var
c=[0,a[3]];for(;;){if(c[1]<(a[2]+b|0)){c[1]=2*c[1]|0;continue}if(Y<c[1])if((a[2]+b|0)<=Y)c[1]=Y;else
aM(c9);var
d=o(c[1]);ai(a[1],0,d,0,a[2]);a[1]=d;a[3]=c[1];return 0}}function
Z(a,b){var
c=a[2];if(a[3]<=c)bp(a,1);bg(a[1],c,b);a[2]=c+1|0;return 0}function
q(a,b){var
c=h(b),d=a[2]+c|0;if(a[3]<d)bp(a,c);ai(b,0,a[1],a[2],c);a[2]=d;return 0}function
aQ(a){return 0<=a?a:aM(k(c_,aO(a)))}function
bq(a,b){return aQ(a+b|0)}var
c$=1;function
br(a){return bq(c$,a)}function
bs(a){return ah(a,0,h(a))}function
bt(a,b,c){var
d=k(db,k(a,da)),e=k(dc,k(aO(b),d));return V(k(dd,k(X(1,c),e)))}function
_(a,b,c){return bt(bs(a),b,c)}function
am(a){return V(k(df,k(bs(a),de)))}function
dg(d){function
a(a,b){var
e=a,c=b;for(;;){if(h(d)<=c)return[0,0,e];var
f=m(d,c);if(49<=f){if(!(58<=f))return[0,fN(ah(d,c,(h(d)-c|0)-1|0)),e]}else
if(45===f){var
e=1,c=c+1|0;continue}var
c=c+1|0;continue}}try{var
b=a(0,1)}catch(f){f=aL(f);if(f[1]===aN)return bt(d,0,a8);throw f}return b}function
I(i,b,c,d){function
j(a){if(9<(m(i,a)+av|0)>>>0)return a;var
b=a+1|0;for(;;){var
c=m(i,b);if(48<=c){if(!(58<=c)){var
b=b+1|0;continue}}else
if(36===c)return b+1|0;return a}}var
k=j(b+1|0),f=ak((c-k|0)+10|0);Z(f,37);var
e=d,h=0;for(;;){if(e){var
n=[0,e[1],h],e=e[2],h=n;continue}var
a=k,g=h;for(;;){if(a<=c){var
l=m(i,a);if(42===l){if(g){var
o=g[2];q(f,aO(g[1]));var
a=j(a+1|0),g=o;continue}throw[0,u,dh]}Z(f,l);var
a=a+1|0;continue}return al(f)}}}function
bu(a,b,c,d,e){var
f=I(b,c,d,e);if(78!==a)if(a7!==a)return f;bg(f,h(f)-1|0,117);return f}function
bv(a){return function(d,b){var
j=h(d);function
k(a,b){var
m=40===a?41:b5,c=b;for(;;){if(j<=c)return am(d);if(37===w(d,c)){var
e=c+1|0;if(j<=e)return am(d);var
f=w(d,e),h=f-40|0;if(1<h>>>0){var
l=h-83|0;if(2<l>>>0)var
g=1;else
switch(l){case
0:var
i=0,g=0;break;case
1:var
g=1;break;default:var
i=1,g=0}if(g){var
c=e+1|0;continue}}else
var
i=0===h?0:1;if(i)return f===m?e+1|0:_(d,b,f);var
c=k(f,e+1|0)+1|0;continue}var
c=c+1|0;continue}}return k(a,b)}}function
bw(i,b,c){var
l=h(i)-1|0;function
r(a){var
k=a;a:for(;;){if(k<l){if(37===w(i,k)){var
f=0,h=k+1|0;for(;;){if(l<h)var
e=am(i);else{var
o=m(i,h);if(58<=o){if(95===o){var
f=1,h=h+1|0;continue}}else
if(32<=o)switch(o+cl|0){case
10:var
h=n(b,f,h,af);continue;case
0:case
3:case
11:case
13:var
h=h+1|0;continue;case
1:case
2:case
4:case
5:case
6:case
7:case
8:case
9:case
12:case
15:break;default:var
h=h+1|0;continue}var
d=h;b:for(;;){if(l<d)var
e=am(i);else{var
j=m(i,d);if(126<=j)var
g=0;else
switch(j){case
40:var
e=r(n(b,f,d,j)),g=1;break;case
123:var
v=n(b,f,d,j),x=s(bv(j),i,v),p=v;for(;;){if(p<(x-2|0)){var
p=s(c,p,w(i,p));continue}var
d=x-1|0;continue b}case
67:case
99:var
e=n(b,f,d,99),g=1;break;case
66:case
98:var
e=n(b,f,d,66),g=1;break;case
41:case
125:var
e=n(b,f,d,j),g=1;break;case
83:case
91:case
115:var
e=n(b,f,d,a8),g=1;break;case
97:case
114:case
116:var
e=n(b,f,d,j),g=1;break;case
76:case
108:case
110:var
t=d+1|0;if(l<t)var
e=n(b,f,d,af),g=1;else{var
u=w(i,t)+cx|0;if(32<u>>>0)var
q=1;else
switch(u){case
0:case
12:case
17:case
23:case
29:case
32:var
e=s(c,n(b,f,d,j),af),g=1,q=0;break;default:var
q=1}if(q)var
e=n(b,f,d,af),g=1}break;case
33:case
37:case
44:case
64:var
e=d+1|0,g=1;break;case
69:case
70:case
71:case
101:case
102:case
103:var
e=n(b,f,d,102),g=1;break;case
78:case
88:case
100:case
105:case
111:case
117:case
120:var
e=n(b,f,d,af),g=1;break;default:var
g=0}if(!g)var
e=_(i,d,j)}break}}var
k=e;continue a}}var
k=k+1|0;continue}return k}}r(0);return 0}function
bx(a){var
d=[0,0,0,0];function
b(a,b,c){var
f=41!==c?1:0,g=f?b5!==c?1:0:f;if(g){var
e=97===c?2:1;if(cf===c)d[3]=d[3]+1|0;if(a)d[2]=d[2]+e|0;else
d[1]=d[1]+e|0}return b+1|0}bw(a,b,function(a,b){return a+1|0});return d[1]}function
by(a,b,c){var
g=m(a,c);if(9<(g+av|0)>>>0)return s(b,0,c);var
e=g+av|0,d=c+1|0;for(;;){var
f=m(a,d);if(48<=f){if(!(58<=f)){var
e=(10*e|0)+(f+av|0)|0,d=d+1|0;continue}}else
if(36===f)return 0===e?aM(dj):s(b,[0,aQ(e-1|0)],d+1|0);return s(b,0,c)}}function
t(a,b){return a?b:br(b)}function
bz(a,b){return a?a[1]:b}function
bA(aI,b,c,d,e,f,g){var
E=i(b,g);function
ac(a){return s(d,E,a)}function
aJ(a,b,n,aK){var
u=h(n);function
F(x,b){var
r=b;for(;;){if(u<=r)return i(a,E);var
d=m(n,r);if(37===d){var
p=function(a,b){var
c=bz(a,b);return j(aK,c)[c+1]},ar=function(g,f,c,d){var
a=d;for(;;){var
as=m(n,a)+cl|0;if(!(25<as>>>0))switch(as){case
10:return by(n,function(a,b){var
d=[0,p(a,f),c];return ar(g,t(a,f),d,b)},a+1|0);case
1:case
2:case
4:case
5:case
6:case
7:case
8:case
9:case
12:case
15:break;default:var
a=a+1|0;continue}var
u=m(n,a);if(!(124<=u))switch(u){case
33:i(e,E);return F(f,a+1|0);case
41:return v(f,dp,a+1|0);case
44:return v(f,dq,a+1|0);case
70:var
aa=p(g,f);if(0===c)var
aw=dt;else{var
Y=I(n,r,a,c);if(70===u)bg(Y,h(Y)-1|0,103);var
aw=Y}var
aq=fv(aa);if(3===aq)var
ab=aa<0?dl:dm;else
if(4<=aq)var
ab=dn;else{var
R=a$(aw,aa),Q=0,aT=h(R);for(;;){if(aT<=Q)var
ap=k(R,dk);else{var
$=w(R,Q)-46|0,bc=23<$>>>0?55===$?1:0:21<($-1|0)>>>0?1:0;if(!bc){var
Q=Q+1|0;continue}var
ap=R}var
ab=ap;break}}return v(t(g,f),ab,a+1|0);case
91:return _(n,a,u);case
97:var
aD=p(g,f),aF=br(bz(g,f)),aG=p(0,aF),a5=a+1|0,a6=t(g,aF);if(aI)ac(s(aD,0,aG));else
s(aD,E,aG);return F(a6,a5);case
114:return _(n,a,u);case
116:var
aH=p(g,f),a9=a+1|0,a_=t(g,f);if(aI)ac(i(aH,0));else
i(aH,E);return F(a_,a9);case
37:case
64:return v(f,X(1,u),a+1|0);case
83:case
115:var
B=p(g,f);if(a8===u)var
C=B;else{var
b=[0,0],aj=h(B)-1|0,aL=0;if(!(aj<0)){var
M=aL;for(;;){var
A=m(B,M),bd=14<=A?34===A?1:92===A?1:0:11<=A?13<=A?1:0:8<=A?1:0,aO=bd?2:bb(A)?1:4;b[1]=b[1]+aO|0;var
aP=M+1|0;if(aj!==M){var
M=aP;continue}break}}if(b[1]===h(B))var
aC=B;else{var
j=o(b[1]);b[1]=0;var
am=h(B)-1|0,aM=0;if(!(am<0)){var
K=aM;for(;;){var
z=m(B,K),L=z-34|0;if(58<L>>>0)if(-20<=L)var
U=1;else{switch(L+34|0){case
8:l(j,b[1],92);b[1]++;l(j,b[1],98);var
J=1;break;case
9:l(j,b[1],92);b[1]++;l(j,b[1],116);var
J=1;break;case
10:l(j,b[1],92);b[1]++;l(j,b[1],a7);var
J=1;break;case
13:l(j,b[1],92);b[1]++;l(j,b[1],cf);var
J=1;break;default:var
U=1,J=0}if(J)var
U=0}else
var
U=56<(L-1|0)>>>0?(l(j,b[1],92),b[1]++,l(j,b[1],z),0):1;if(U)if(bb(z))l(j,b[1],z);else{l(j,b[1],92);b[1]++;l(j,b[1],48+(z/cq|0)|0);b[1]++;l(j,b[1],48+((z/10|0)%10|0)|0);b[1]++;l(j,b[1],48+(z%10|0)|0)}b[1]++;var
aN=K+1|0;if(am!==K){var
K=aN;continue}break}}var
aC=j}var
C=k(dv,k(aC,du))}if(a===(r+1|0))var
aB=C;else{var
an=dg(I(n,r,a,c)),N=an[1],D=h(C),aQ=an[2],O=0,aR=32;if(N===D)if(0===O)var
W=C,ad=1;else
var
ad=0;else
var
ad=0;if(!ad)if(N<=D)var
W=ah(C,O,D);else{var
V=X(N,aR);if(aQ)ai(C,O,V,0,D);else
ai(C,O,V,N-D|0,D);var
W=V}var
aB=W}return v(t(g,f),aB,a+1|0);case
67:case
99:var
x=p(g,f);if(99===u)var
av=X(1,x);else{if(39===x)var
y=cY;else
if(92===x)var
y=cZ;else{if(14<=x)var
G=0;else
switch(x){case
8:var
y=c0,G=1;break;case
9:var
y=c1,G=1;break;case
10:var
y=c2,G=1;break;case
13:var
y=c3,G=1;break;default:var
G=0}if(!G)if(bb(x)){var
ag=o(1);l(ag,0,x);var
y=ag}else{var
H=o(4);l(H,0,92);l(H,1,48+(x/cq|0)|0);l(H,2,48+((x/10|0)%10|0)|0);l(H,3,48+(x%10|0)|0);var
y=H}}var
av=k(ds,k(y,dr))}return v(t(g,f),av,a+1|0);case
66:case
98:var
aU=a+1|0,aV=p(g,f)?cT:cU;return v(t(g,f),aV,aU);case
40:case
123:var
S=p(g,f),at=s(bv(u),n,a+1|0);if(123===u){var
P=ak(h(S)),ao=function(a,b){Z(P,b);return a+1|0};bw(S,function(a,b,c){if(a)q(P,di);else
Z(P,37);return ao(b,c)},ao);var
aS=al(P);return v(t(g,f),aS,at)}var
au=t(g,f),ba=bq(bx(S),au);return aJ(function(a){return F(ba,at)},au,S,aK);case
76:case
108:case
110:var
ax=m(n,a+1|0)+cx|0;if(!(32<ax>>>0))switch(ax){case
0:case
12:case
17:case
23:case
29:case
32:var
T=a+1|0,ay=u-108|0;if(2<ay>>>0)var
ae=0;else{switch(ay){case
0:var
a1=p(g,f),aA=aE(I(n,r,T,c),a1),af=1;break;case
1:var
ae=0,af=0;break;default:var
a2=p(g,f),aA=aE(I(n,r,T,c),a2),af=1}if(af)var
az=aA,ae=1}if(!ae)var
a0=p(g,f),az=fD(I(n,r,T,c),a0);return v(t(g,f),az,T+1|0)}var
aY=p(g,f),aZ=aE(bu(a7,n,r,a,c),aY);return v(t(g,f),aZ,a+1|0);case
69:case
71:case
101:case
102:case
103:var
aW=p(g,f),aX=a$(I(n,r,a,c),aW);return v(t(g,f),aX,a+1|0);case
78:case
88:case
100:case
105:case
111:case
117:case
120:var
a3=p(g,f),a4=aE(bu(u,n,r,a,c),a3);return v(t(g,f),a4,a+1|0)}return _(n,a,u)}},f=r+1|0,g=0;return by(n,function(a,b){return ar(a,x,g,b)},f)}s(c,E,d);var
r=r+1|0;continue}}function
v(a,b,c){ac(b);return F(a,c)}return F(b,0)}var
u=aQ(0);function
n(a,b){return aJ(f,u,a,b)}var
p=bx(g);if(6<p>>>0){var
r=function(f,b){if(p<=f){var
h=Q(p,0),i=function(a,b){var
c=(p-a|0)-1|0;return j(h,c)[c+1]=b},c=0,a=b;for(;;){if(a){var
d=a[2],e=a[1];if(d){i(c,e);var
c=c+1|0,a=d;continue}i(c,e)}return n(g,h)}}return function(a){return r(f+1|0,[0,a,b])}};return r(0,0)}switch(p){case
0:return n(g,[0]);case
1:return function(a){var
b=Q(1,0);j(b,0)[0+1]=a;return n(g,b)};case
2:return function(a,b){var
c=Q(2,0);j(c,0)[0+1]=a;j(c,1)[1+1]=b;return n(g,c)};case
3:return function(a,b,c){var
d=Q(3,0);j(d,0)[0+1]=a;j(d,1)[1+1]=b;j(d,2)[2+1]=c;return n(g,d)};case
4:return function(a,b,c,d){var
e=Q(4,0);j(e,0)[0+1]=a;j(e,1)[1+1]=b;j(e,2)[2+1]=c;j(e,3)[3+1]=d;return n(g,e)};case
5:return function(a,b,c,d,e){var
f=Q(5,0);j(f,0)[0+1]=a;j(f,1)[1+1]=b;j(f,2)[2+1]=c;j(f,3)[3+1]=d;j(f,4)[4+1]=e;return n(g,f)};default:return function(a,b,c,d,e,f){var
h=Q(6,0);j(h,0)[0+1]=a;j(h,1)[1+1]=b;j(h,2)[2+1]=c;j(h,3)[3+1]=d;j(h,4)[4+1]=e;j(h,5)[5+1]=f;return n(g,h)}}}function
bB(d){function
e(a){return 0}function
b(a){return d}var
c=0;return function(a){return bA(c,b,cX,bk,bn,e,a)}}function
dw(a){return ak(2*h(a)|0)}function
v(a){function
b(a){var
b=al(a);a[2]=0;return b}return bA(1,dw,Z,q,function(a){return 0},b,a)}var
aR=[0,0];function
aT(a,b){var
c=a[b+1];if(fT(c)){if(cO(c)===b1)return i(v(dx),c);if(cO(c)===253){var
e=a$(cW,c),d=0,g=h(e);for(;;){if(g<=d)return k(e,cV);var
f=w(e,d),j=48<=f?58<=f?0:1:45===f?1:0;if(j){var
d=d+1|0;continue}return e}}return dy}return i(v(dz),c)}function
bC(a,b){if(a.length-1<=b)return dA;var
c=bC(a,b+1|0),d=aT(a,b);return s(v(dB),d,c)}function
dC(a){var
b=a.length-1;if(2<b>>>0){var
c=bC(a,2),d=aT(a,1);return s(v(dD),d,c)}switch(b){case
0:return dE;case
1:return dF;default:var
e=aT(a,1);return i(v(dG),e)}}function
bD(b){function
a(a){var
c=a;for(;;){if(c){var
m=c[2],n=c[1];try{var
o=i(n,b),d=o}catch(f){var
d=0}if(d)return d[1];var
c=m;continue}if(b[1]===bE)return dH;if(b[1]===bF)return dI;if(b[1]===bG){var
e=b[2],h=e[3],p=e[2],q=e[1];return at(v(aS),q,p,h,h+5|0,dJ)}if(b[1]===u){var
f=b[2],j=f[3],r=f[2],s=f[1];return at(v(aS),s,r,j,j+6|0,dK)}if(b[1]===bH){var
g=b[2],l=g[3],t=g[2],w=g[1];return at(v(aS),w,t,l,l+6|0,dL)}var
x=b[0+1][0+1];return k(x,dC(b))}}return a(aR[1])}function
bI(a){var
h=fw(fA(0));if(h){var
d=h[1],f=d.length-1-1|0,p=0;if(!(f<0)){var
b=p;for(;;){if(fS(j(d,b)[b+1],dS)){var
c=j(d,b)[b+1],k=0===c[0]?c[1]:c[1],e=k?0===b?dM:dP:0===b?dQ:dR;if(0===c[0])var
l=c[5],m=c[4],n=c[3],o=c[2],g=at(v(dN),e,o,n,m,l);else
var
g=i(v(dO),e);s(bB(a),dT,g)}var
q=b+1|0;if(f!==b){var
b=q;continue}break}}return 0}return i(bB(a),dU)}function
bJ(a){aR[1]=[0,a,aR[1]];return 0}32===aP;function
bK(a){var
b=[];f6(b,[0,b,b]);return b}var
aU=[0,dV],J=[0,0];function
aV(a){var
c=a[1];if(3===c[0]){var
d=c[1],b=aV(d);if(b!==d)a[1]=[3,b];return b}return a}function
$(a){return aV(a)}var
bL=[0,function(a){bl(dW);bl(bD(a));cK(W,10);bI(W);bn(W);bm(0);return f2(2)}];function
bM(a,b){try{var
c=i(a,b)}catch(f){f=aL(f);return i(bL[1],f)}return c}function
a0(a,b,c,d){var
f=c,e=d;for(;;)if(typeof
f==="number")return a<50?C(1+a,b,e):F(C,[0,b,e]);else
switch(f[0]){case
0:var
g=f[1][1];if(g){i(g[1],b);return a<50?C(1+a,b,e):F(C,[0,b,e])}else
return a<50?C(1+a,b,e):F(C,[0,b,e]);case
1:i(f[1],b);return a<50?C(1+a,b,e):F(C,[0,b,e]);default:var
h=[0,f[2],e],f=f[1],e=h;continue}}function
C(a,b,c){return c?a<50?a0(1+a,b,c[1],c[2]):F(a0,[0,b,c[1],c[2]]):0}function
dX(b,c,d){return aK(a0(0,b,c,d))}function
gb(b,c){return aK(C(0,b,c))}function
a1(a,b,c){var
e=b,d=c;for(;;)if(typeof
e==="number")return a<50?N(1+a,d):F(N,[0,d]);else
switch(e[0]){case
0:var
g=e[2];J[1]=e[1];bM(g,0);return a<50?N(1+a,d):F(N,[0,d]);case
1:var
f=e[1];if(f[4]){f[4]=0;f[1][2]=f[2];f[2][1]=f[1]}return a<50?N(1+a,d):F(N,[0,d]);default:var
h=[0,e[2],d],e=e[1],d=h;continue}}function
N(a,b){return b?a<50?a1(1+a,b[1],b[2]):F(a1,[0,b[1],b[2]]):0}function
dY(b,c){return aK(a1(0,b,c))}function
gc(b){return aK(N(0,b))}function
an(a,b){var
c=1===b[0]?b[1][1]===aU?(dY(a[4],0),1):0:0;return dX(b,a[2],0)}var
aW=[0,0],R=[0,0,0];function
bN(a,b){var
h=[0,b],i=aV(a),e=i[1];switch(e[0]){case
1:if(e[1][1]===aU)return 0;break;case
2:var
k=e[1];i[1]=h;var
g=J[1],j=aW[1]?1:(aW[1]=1,0);an(k,h);if(j){J[1]=g;return 0}for(;;){if(0===R[1]){aW[1]=0;J[1]=g;return 0}if(0===R[1])throw[0,c8];R[1]=R[1]-1|0;var
c=R[2],d=c[2];if(d===c)R[2]=0;else
c[2]=d[2];var
f=d[1];an(f[1],f[2]);continue}}return V(dZ)}function
bO(a,b){return typeof
a==="number"?b:typeof
b==="number"?a:[2,a,b]}function
aX(a){if(typeof
a!=="number")switch(a[0]){case
0:if(!a[1][1])return 0;break;case
2:var
b=a[1],c=aX(a[2]);return bO(aX(b),c)}return a}function
d0(a,b){var
d=$(a),g=$(b),j=d[1];if(2===j[0]){var
c=j[1];if(d===g)return 0;var
e=g[1];if(2===e[0]){var
f=e[1];g[1]=[3,d];c[1]=f[1];var
k=bO(c[2],f[2]),l=c[3]+f[3]|0;if(42<l){c[3]=0;c[2]=aX(k)}else{c[3]=l;c[2]=k}var
h=f[4],i=c[4],m=typeof
i==="number"?h:typeof
h==="number"?i:[2,i,h];c[4]=m;return 0}d[1]=e;return an(c,e)}throw[0,u,d1]}function
d2(a,b){var
c=$(a),d=c[1];if(2===d[0]){var
e=d[1];c[1]=b;return an(e,b)}throw[0,u,d3]}function
d4(a){return[0,[1,a]]}function
d5(a,b){var
g=$(a),c=g[1];switch(c[0]){case
0:return i(b,c[1]);case
1:return[0,c];case
2:var
h=c[1],d=[0,[2,[0,[0,[0,g]],0,0,0]]],k=J[1],f=[1,function(a){switch(a[0]){case
0:var
e=a[1];J[1]=k;try{var
f=i(b,e),c=f}catch(f){f=aL(f);var
c=d4(f)}return d0(d,c);case
1:return d2(d,a);default:throw[0,u,d6]}}],e=h[2],j=typeof
e==="number"?f:[2,f,e];h[2]=j;return d;default:throw[0,u,d7]}}var
d8=[0,function(a){return 0}],x=bK(0),d9=[0,0],K=b,aa=null;function
d_(a){var
e=1-(x[2]===x?1:0);if(e){var
b=bK(0);b[1][2]=x[2];x[2][1]=b[1];b[1]=x[1];x[1][2]=b;x[1]=x;x[2]=x;d9[1]=0;var
c=b[2];for(;;){var
d=c!==b?1:0;if(d){if(c[4])bN(c[3],0);var
c=c[2];continue}return d}}return e}var
d$=undefined;function
bP(a,b){return a==aa?0:i(b,a)}function
bQ(a,b,c){return a==aa?i(b,0):i(c,a)}function
ao(a,b){return a==aa?i(b,0):a}var
ab=true,ap=false,bR=K.Array,bS=[0,ea];fW(c(ce),[0,bS,{}][0+1]);bJ(function(a){return a[1]===bS?[0,E(a[2].toString())]:0});bJ(function(a){return a
instanceof
bR?0:[0,E(a.toString())]});function
S(a){return a}function
L(a,b){a.appendChild(b);return 0}function
aq(d){return S(bc(function(a){if(1-(S(a)==aa?1:0)){var
e=i(d,a);if(!(e|0))a.preventDefault();return e}var
c=event,b=i(d,c);if(!(b|0))c.returnValue=b;return b}))}var
B=K.document;function
ar(a,b){return a?i(b,a[1]):0}function
aY(a,b){return a.createElement(b.toString())}function
bT(a,b){return aY(a,b)}var
bU=[0,cn];function
bV(a,b,c,d){for(;;){if(0===a)if(0===b)return aY(c,d);var
h=bU[1];if(cn===h){try{var
j=B.createElement('<input name="x">'),k=j.tagName.toLowerCase()===b3?1:0,m=k?j.name==="x"?1:0:k,i=m}catch(f){var
i=0}var
l=i?cb:-1003883683;bU[1]=l;continue}if(cb<=h){var
f=new
bR();f.push("<",d.toString());ar(a,function(a){f.push(' type="',cH(a),ay);return 0});ar(b,function(a){f.push(' name="',cH(a),ay);return 0});f.push(">");return c.createElement(f.join(e))}var
g=aY(c,d);ar(a,function(a){return g.type=a});ar(b,function(a){return g.name=a});return g}}function
bW(a,b,c){return bV(a,b,c,ec)}function
aZ(a){return bT(a,ed)}K.HTMLElement===d$;var
ef=fO(0),eg=a2;function
eh(a){var
c=[0,[2,[0,1,0,0,0]]],g=[0,0];function
h(a,b){var
d=a2<a?[0,eg,a-a2]:[0,a,0],e=d[2],f=d[1],i=e==0?function(a){return bN(c,a)}:function(a){return h(e,a)};g[1]=[0,K.setTimeout(bc(i),f*co)];return 0}h(a,0);function
i(a){var
b=g[1];return b?K.clearTimeout(b[1]):0}var
b=$(c)[1];switch(b[0]){case
1:var
j=b[1][1]===aU?(bM(i,0),1):0;break;case
2:var
d=b[1],e=[0,J[1],i],f=d[4],k=typeof
f==="number"?e:[2,e,f];d[4]=k;var
j=1;break;default:var
j=0}return c}d8[1]=function(a){return 1===a?(K.setTimeout(bc(d_),0),0):0};function
bX(a){return ef.log(a.toString())}bL[1]=function(a){bX(ei);bX(bD(a));return bI(W)};function
as(a,b){return i(b,a)}var
bY=[0,ej];function
ek(c){var
d=h(c);function
a(a){var
b=a;for(;;){if(d<=b)return 0;if(92===w(c,b))if(b<(d-1|0))if(92===w(c,b+1|0)){var
b=b+2|0;continue}if(10===w(c,b)){var
b=b+1|0;continue}throw[0,bY,1]}}try{a(0);var
b=0}catch(f){f=aL(f);if(f[1]===bY)return f[2];throw f}return b}function
M(a,b){var
c=ak(10);function
e(a,b){var
d=a?a[1]:el;return ek(b)?q(c,k(d,k(b,d))):0}var
f=b.childNodes,h=f.length-1|0,i=0;if(!(h<0)){var
d=i;for(;;){var
j=function(b){var
a=E(b.nodeName);if(g(a,em)){if(g(a,en)){if(g(a,eo)){if(g(a,ep)){if(g(a,eq)){if(g(a,er))if(g(a,es))if(g(a,et))return g(a,eu)?g(a,ev)?g(a,ew)?q(c,k(ey,k(a,ex))):e(0,k(M(0,b),ez)):e(eA,M(0,b)):q(c,eB);var
i=X((w(a,1)-48|0)+1|0,61);return q(c,k(i,k(M(0,b),eC)))}return q(c,M(0,b))}return q(c,eD)}return e(eE,M(0,b))}var
j=S(b),f=ao(j,function(a){throw[0,u,eF]}),l=function(a){function
h(a){return E(a)}function
i(a){throw[0,u,eG]}var
d=as(ao(f.getAttribute("href"),i),h),e=E(a);if(g(e,eH)){if(g(e,eI))return q(c,eJ);var
j=function(a){return q(c,a)};return as(aj(eM,[0,eL,[0,d,eK]]),j)}return q(c,aj(eQ,[0,eP,[0,d,[0,eO,[0,M(0,b),eN]]]]))},m=function(a){return q(c,eR)};return bQ(f.getAttribute("wysitype"),m,l)}var
n=b.nodeValue;function
h(a){return[0,a]}var
d=bQ(n,function(a){return 0},h);return d?q(c,E(d[1])):0};bP(f.item(d),j);var
l=d+1|0;if(h!==d){var
d=l;continue}break}}return al(c)}K.onload=aq(function(a){function
d(a){throw[0,u,eS]}var
f=ao(B.getElementById("wiki_demo"),d),b=bT(B,ee);b.style.border="2px green solid";b.src="#";b.id="wysiFrame";L(f,b);function
e(e){e.open();e.write("<html><body><p><b>Camelus</b><i>bactrianus</i></p></body></html>");e.close();e.designMode="On";var
i=b.contentWindow;L(f,aZ(B));function
a(a,b,c,d){var
j=a?a[1]:ap,h=b?b[1]:0,g=bV([0,"submit"],0,B,eb);g.value=c.toString();g.onclick=aq(function(a){i.focus();var
b=h?S(h[1].toString()):aa;e.execCommand(d.toString(),j,b);return ab});L(f,g);return g}a(0,0,eU,eT);a(0,0,eW,eV);a(0,0,eY,eX);a(0,0,e0,eZ);L(f,aZ(B));a(0,e3,e2,e1);a(0,e6,e5,e4);a(0,e9,e8,e7);a(0,fa,e$,e_);function
j(a,b){function
c(a){return E(a)}function
d(a){return b.toString()}return as(ao(i.prompt(a.toString(),b.toString()),d),c)}var
l=aq(function(a){var
c=j(fc,fb),b=aj(fi,[0,fh,[0,c,[0,fg,[0,j(fe,fd),ff]]]]);i.alert(b.toString());e.execCommand(aB,ap,S(b.toString()));return ab});a(0,0,fk,fj).onclick=l;var
m=aq(function(a){var
b=j(fm,fl),c=as([0,fq,[0,b,[0,fp,[0,b,fo]]]],function(a){return aj(fn,a)});i.alert(c.toString());e.execCommand(aB,ap,S(c.toString()));return ab});a(0,0,fs,fr).onclick=m;L(f,aZ(B));var
d=bW(0,0,B);d.readOnly=ab;d[c(b0)]=34;d[c(b8)]=10;d.style.border="1px black solid";d.style.padding=bZ;L(f,d);var
h=bW(0,0,B);h.id="wikiFrame";h.readOnly=ab;h[c(b0)]=34;h[c(b8)]=10;d.style.border="2px blue solid";d.style.padding=bZ;L(f,h);function
k(a,b){var
c=E(e.body.innerHTML);if(g(c,a)){try{d.value=c.toString();h.value=M(0,e.body).toString()}catch(f){}var
f=20}else
var
f=cS(0,b-1|0);function
i(a){return k(c,f)}var
j=0===f?0.5:0.1;return d5(eh(j),i)}k(ft,0);return 0}bP(b.contentDocument,e);return ap});bm(0);return}(function(){return this}()));
