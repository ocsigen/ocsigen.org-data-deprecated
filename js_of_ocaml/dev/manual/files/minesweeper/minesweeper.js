// Generated by js_of_ocaml 2.4.1
(function(c){"use strict";var
aY=254,aL="x",aT=224,aR=65535,aN='"',L=1073741823,aS=250,M=1024,aK="sprites/normal.png",aM="jsError",aX="sprites/flag.png",ac="input",aJ=57343,aQ=785140586,K="int_of_string",ae="sprites/bomb.png",aW=512,aI=982028505,aF=0.001,f="",l=128,aG=240,aH=2048,aP=56320,ad=" : file already exists",aO="/",aV="fd ",aU="index out of bounds";function
aj(a,b,c){var
d=String.fromCharCode;if(b==0&&c<=4096&&c==a.length)return d.apply(null,a);var
e=f;for(c+=b;b<c;b+=M)e+=d.apply(null,a.slice(b,Math.min(c,b+M)));return e}function
aZ(a){var
c=new
Array(a.l),e=a.c,d=e.length,b=0;for(;b<d;b++)c[b]=e.charCodeAt(b);for(d=a.l;b<d;b++)c[b]=0;a.c=c;a.t=4;return c}function
af(a,b,c,d,e){if(e==0)return 0;if(d==0&&(e>=c.l||c.t==2&&e>=c.c.length)){c.c=a.t==4?aj(a.c,b,e):a.c.substr(b,e);c.t=c.c.length==c.l?0:2}else
if(c.t==2&&d==c.c.length){c.c+=a.t==4?aj(a.c,b,e):a.c.substr(b,e);c.t=c.c.length==c.l?0:2}else{if(c.t!=4)aZ(c);var
g=a.c,h=c.c;if(a.t==4)for(var
f=0;f<e;f++)h[d+f]=g[b+f];else{var
i=Math.min(e,g.length-b);for(var
f=0;f<i;f++)h[d+f]=g.charCodeAt(b+f);for(;f<e;f++)h[d+f]=0}}return 0}function
y(c,b){if(c.fun)return y(c.fun,b);var
a=c.length,d=a-b.length;if(d==0)return c.apply(null,b);else
if(d<0)return y(c.apply(null,b.slice(0,a)),b.slice(a));else
return function(a){return y(c,b.concat([a]))}}function
b6(a,b){throw[0,a,b]}function
b_(a,b){if(b.repeat)return b.repeat(a);var
c=f,d=0;if(a==0)return c;for(;;){if(a&1)c+=b;a>>=1;if(a==0)return c;b+=b;d++;if(d==9)b.slice(0,1)}}function
z(a){if(a.t==2)a.c+=b_(a.l-a.c.length,"\0");else
a.c=aj(a.c,0,a.c.length);a.t=0}function
a0(a){if(a.length<24){for(var
b=0;b<a.length;b++)if(a.charCodeAt(b)>127)return false;return true}else
return!/[^\x00-\x7f]/.test(a)}function
ch(a){for(var
k=f,d=f,h,g,i,b,c=0,j=a.length;c<j;c++){g=a.charCodeAt(c);if(g<l){for(var
e=c+1;e<j&&(g=a.charCodeAt(e))<l;e++);if(e-c>aW){d.substr(0,1);k+=d;d=f;k+=a.slice(c,e)}else
d+=a.slice(c,e);if(e==j)break;c=e}b=1;if(++c<j&&((i=a.charCodeAt(c))&-64)==l){h=i+(g<<6);if(g<aT){b=h-12416;if(b<l)b=1}else{b=2;if(++c<j&&((i=a.charCodeAt(c))&-64)==l){h=i+(h<<6);if(g<aG){b=h-925824;if(b<aH||b>=55295&&b<57344)b=2}else{b=3;if(++c<j&&((i=a.charCodeAt(c))&-64)==l&&g<245){b=i-63447168+(h<<6);if(b<65536||b>1114111)b=3}}}}}if(b<4){c-=b;d+="\ufffd"}else
if(b>aR)d+=String.fromCharCode(55232+(b>>10),aP+(b&1023));else
d+=String.fromCharCode(b);if(d.length>M){d.substr(0,1);k+=d;d=f}}return k+d}function
cg(a){switch(a.t){case
9:return a.c;default:z(a);case
0:if(a0(a.c)){a.t=9;return a.c}a.t=8;case
8:return ch(a.c)}}function
h(a,b,c){this.t=a;this.c=b;this.l=c}h.prototype={toString:function(){return cg(this)}};function
R(a){return new
h(0,a,a.length)}function
ai(a,b){b6(a,R(b))}var
e=[0];function
A(a){ai(e[4],a)}function
bG(){A(aU)}function
bI(a,b){if(b>>>0>=a.length-1)bG();return a}function
bP(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
bQ(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
ca(a,b){a.t&6&&z(a);b.t&6&&z(b);return a.c<b.c?-1:a.c>b.c?1:0}function
ag(a,b,c){var
e=[];for(;;){if(!(c&&a===b))if(a
instanceof
h)if(b
instanceof
h){if(a!==b){var
d=ca(a,b);if(d!=0)return d}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
f=a[0];if(f===aY)f=0;if(f===aS){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
g=b[0];if(g===aY)g=0;if(g===aS){b=b[1];continue}else
if(f!=g)return f<g?-1:1;else
switch(f){case
248:var
d=bQ(a[2],b[2]);if(d!=0)return d;break;case
251:A("equal: abstract value");case
255:var
d=bP(a,b);if(d!=0)return d;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)e.push(a,b,1)}}else
return 1}else
if(b
instanceof
h||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!="number"&&a&&a.compare)return a.compare(b,c);else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!c)return NaN;if(a==a)return 1;if(b==b)return-1}}if(e.length==0)return 0;var
i=e.pop();b=e.pop();a=e.pop();if(i+1<a.length)e.push(a,b,i+1);a=a[i];b=b[i]}}function
bJ(a,b){return ag(a,b,true)}function
r(a){if(a<0)A("String.create");return new
h(a?2:9,f,a)}function
b5(a){throw[0,a]}function
a5(){b5(e[6])}function
bL(a,b){if(b==0)a5();return a/b|0}function
bN(a,b){return+(ag(a,b,false)>=0)}function
v(a,b){switch(a.t&6){default:if(b>=a.c.length)return 0;case
0:return a.c.charCodeAt(b);case
4:return a.c[b]}}function
b4(a){var
b=0,c=10,d=v(a,0)==45?(b++,-1):1;if(v(a,b)==48)switch(v(a,b+1)){case
120:case
88:c=16;b+=2;break;case
111:case
79:c=8;b+=2;break;case
98:case
66:c=2;b+=2;break}return[b,d,c]}function
a3(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=122)return a-87;return-1}function
N(a){ai(e[3],a)}function
B(a){return a.l}function
bR(a){var
g=b4(a),f=g[0],h=g[1],d=g[2],i=-1>>>0,e=v(a,f),c=a3(e);if(c<0||c>=d)N(K);var
b=c;for(;;){f++;e=v(a,f);if(e==95)continue;c=a3(e);if(c<0||c>=d)break;b=d*b+c;if(b>i)N(K)}if(f!=B(a))N(K);b=h*b;if(d==10&&(b|0)!=b)N(K);return b|0}var
O={amp:/&/g,lt:/</g,quot:/\"/g,all:/[&<\"]/};function
bS(a){if(!O.all.test(a))return a;return a.replace(O.amp,"&amp;").replace(O.lt,"&lt;").replace(O.quot,"&quot;")}function
ci(a){for(var
g=f,c=g,b,i,d=0,h=a.length;d<h;d++){b=a.charCodeAt(d);if(b<l){for(var
e=d+1;e<h&&(b=a.charCodeAt(e))<l;e++);if(e-d>aW){c.substr(0,1);g+=c;c=f;g+=a.slice(d,e)}else
c+=a.slice(d,e);if(e==h)break;d=e}if(b<aH){c+=String.fromCharCode(192|b>>6);c+=String.fromCharCode(l|b&63)}else
if(b<55296||b>=aJ)c+=String.fromCharCode(aT|b>>12,l|b>>6&63,l|b&63);else
if(b>=56319||d+1==h||(i=a.charCodeAt(d+1))<aP||i>aJ)c+="\xef\xbf\xbd";else{d++;b=(b<<10)+i-56613888;c+=String.fromCharCode(aG|b>>18,l|b>>12&63,l|b>>6&63,l|b&63)}if(c.length>M){c.substr(0,1);g+=c;c=f}}return g+c}function
a1(a){var
b=9;if(!a0(a))b=8,a=ci(a);return new
h(b,a,a.length)}function
bT(a){var
c=Array.prototype.slice;return function(){var
b=arguments.length>0?c.call(arguments):[undefined];return y(a,b)}}function
bU(a,b){return+(ag(a,b,false)<=0)}function
bV(a,b){var
a=a+1|0,c=new
Array(a);c[0]=0;for(var
d=1;d<a;d++)c[d]=b;return c}function
a6(a){return new
h(4,a,a.length)}var
bW=function(){function
n(a,b){return a+b|0}function
m(a,b,c,d,e,f){b=n(n(b,a),n(d,f));return n(b<<e|b>>>32-e,c)}function
h(a,b,c,d,e,f,g){return m(b&c|~b&d,a,b,e,f,g)}function
i(a,b,c,d,e,f,g){return m(b&d|c&~d,a,b,e,f,g)}function
j(a,b,c,d,e,f,g){return m(b^c^d,a,b,e,f,g)}function
k(a,b,c,d,e,f,g){return m(c^(b|~d),a,b,e,f,g)}function
o(a,b){var
g=b;a[g>>2]|=l<<8*(g&3);for(g=(g&~3)+8;(g&63)<60;g+=4)a[(g>>2)-1]=0;a[(g>>2)-1]=b<<3;a[g>>2]=b>>29&536870911;var
m=[1732584193,4023233417,2562383102,271733878];for(g=0;g<a.length;g+=16){var
c=m[0],d=m[1],e=m[2],f=m[3];c=h(c,d,e,f,a[g+0],7,3614090360);f=h(f,c,d,e,a[g+1],12,3905402710);e=h(e,f,c,d,a[g+2],17,606105819);d=h(d,e,f,c,a[g+3],22,3250441966);c=h(c,d,e,f,a[g+4],7,4118548399);f=h(f,c,d,e,a[g+5],12,1200080426);e=h(e,f,c,d,a[g+6],17,2821735955);d=h(d,e,f,c,a[g+7],22,4249261313);c=h(c,d,e,f,a[g+8],7,1770035416);f=h(f,c,d,e,a[g+9],12,2336552879);e=h(e,f,c,d,a[g+10],17,4294925233);d=h(d,e,f,c,a[g+11],22,2304563134);c=h(c,d,e,f,a[g+12],7,1804603682);f=h(f,c,d,e,a[g+13],12,4254626195);e=h(e,f,c,d,a[g+14],17,2792965006);d=h(d,e,f,c,a[g+15],22,1236535329);c=i(c,d,e,f,a[g+1],5,4129170786);f=i(f,c,d,e,a[g+6],9,3225465664);e=i(e,f,c,d,a[g+11],14,643717713);d=i(d,e,f,c,a[g+0],20,3921069994);c=i(c,d,e,f,a[g+5],5,3593408605);f=i(f,c,d,e,a[g+10],9,38016083);e=i(e,f,c,d,a[g+15],14,3634488961);d=i(d,e,f,c,a[g+4],20,3889429448);c=i(c,d,e,f,a[g+9],5,568446438);f=i(f,c,d,e,a[g+14],9,3275163606);e=i(e,f,c,d,a[g+3],14,4107603335);d=i(d,e,f,c,a[g+8],20,1163531501);c=i(c,d,e,f,a[g+13],5,2850285829);f=i(f,c,d,e,a[g+2],9,4243563512);e=i(e,f,c,d,a[g+7],14,1735328473);d=i(d,e,f,c,a[g+12],20,2368359562);c=j(c,d,e,f,a[g+5],4,4294588738);f=j(f,c,d,e,a[g+8],11,2272392833);e=j(e,f,c,d,a[g+11],16,1839030562);d=j(d,e,f,c,a[g+14],23,4259657740);c=j(c,d,e,f,a[g+1],4,2763975236);f=j(f,c,d,e,a[g+4],11,1272893353);e=j(e,f,c,d,a[g+7],16,4139469664);d=j(d,e,f,c,a[g+10],23,3200236656);c=j(c,d,e,f,a[g+13],4,681279174);f=j(f,c,d,e,a[g+0],11,3936430074);e=j(e,f,c,d,a[g+3],16,3572445317);d=j(d,e,f,c,a[g+6],23,76029189);c=j(c,d,e,f,a[g+9],4,3654602809);f=j(f,c,d,e,a[g+12],11,3873151461);e=j(e,f,c,d,a[g+15],16,530742520);d=j(d,e,f,c,a[g+2],23,3299628645);c=k(c,d,e,f,a[g+0],6,4096336452);f=k(f,c,d,e,a[g+7],10,1126891415);e=k(e,f,c,d,a[g+14],15,2878612391);d=k(d,e,f,c,a[g+5],21,4237533241);c=k(c,d,e,f,a[g+12],6,1700485571);f=k(f,c,d,e,a[g+3],10,2399980690);e=k(e,f,c,d,a[g+10],15,4293915773);d=k(d,e,f,c,a[g+1],21,2240044497);c=k(c,d,e,f,a[g+8],6,1873313359);f=k(f,c,d,e,a[g+15],10,4264355552);e=k(e,f,c,d,a[g+6],15,2734768916);d=k(d,e,f,c,a[g+13],21,1309151649);c=k(c,d,e,f,a[g+4],6,4149444226);f=k(f,c,d,e,a[g+11],10,3174756917);e=k(e,f,c,d,a[g+2],15,718787259);d=k(d,e,f,c,a[g+9],21,3951481745);m[0]=n(c,m[0]);m[1]=n(d,m[1]);m[2]=n(e,m[2]);m[3]=n(f,m[3])}var
p=[];for(var
g=0;g<4;g++)for(var
o=0;o<4;o++)p[g*4+o]=m[g]>>8*o&255;return p}return function(a,b,c){var
h=[];switch(a.t&6){default:z(a);case
0:var
g=a.c;for(var
d=0;d<c;d+=4){var
e=d+b;h[d>>2]=g.charCodeAt(e)|g.charCodeAt(e+1)<<8|g.charCodeAt(e+2)<<16|g.charCodeAt(e+3)<<24}for(;d<c;d++)h[d>>2]|=g.charCodeAt(d+b)<<8*(d&3);break;case
4:var
f=a.c;for(var
d=0;d<c;d+=4){var
e=d+b;h[d>>2]=f[e]|f[e+1]<<8|f[e+2]<<16|f[e+3]<<24}for(;d<c;d++)h[d>>2]|=f[d+b]<<8*(d&3)}return a6(o(h,c))}}();function
m(a){ai(e[2],a)}function
bX(a){if(!a.opened)m("Cannot flush a closed channel");if(a.buffer==f)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=f;return 0}function
o(a){this.data=a}o.prototype={truncate:function(){this.data=r(0)}};function
a4(a){a=a
instanceof
h?a.toString():a;m(a+": No such file or directory")}var
bK=aO;function
P(a){a=a
instanceof
h?a.toString():a;if(a.charCodeAt(0)!=47)a=bK+a;var
d=a.split(aO),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case".":break;case"":if(b.length==0)b.push(f);break;default:b.push(d[c]);break}b.orig=a;return b}function
q(){this.content={}}q.prototype={exists:function(a){return this.content[a]?1:0},mk:function(a,b){this.content[a]=b},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
S=new
q();S.mk(f,new
q());function
ah(a){var
b=S;for(var
c=0;c<a.length;c++){if(!(b.exists&&b.exists(a[c])))a4(a.orig);b=b.get(a[c])}return b}function
ce(a){var
c=P(a),b=ah(c);return b
instanceof
q?1:0}function
cm(a){if(a.t!=4)aZ(a);return a.c}function
bM(a,b){var
e=P(a),c=S;for(var
f=0;f<e.length-1;f++){var
d=e[f];if(!c.exists(d))c.mk(d,new
q());c=c.get(d);if(!(c
instanceof
q))m(e.orig+ad)}var
d=e[e.length-1];if(c.exists(d))m(e.orig+ad);if(b
instanceof
q)c.mk(d,b);else
if(b
instanceof
o)c.mk(d,b);else
if(b
instanceof
h)c.mk(d,new
o(b));else
if(b
instanceof
Array)c.mk(d,new
o(a6(b)));else
if(b.toString)c.mk(d,new
o(R(b.toString())));else
A("caml_fs_register");return 0}function
cd(a){var
b=S,d=P(a),e,f;for(var
c=0;c<d.length;c++){if(b.auto){e=b.auto;f=c}if(!(b.exists&&b.exists(d[c])))return e?e(d,f):0;b=b.get(d[c])}return 1}function
C(a,b,c){if(e.fds===undefined)e.fds=new
Array();c=c?c:{};var
d={};d.file=b;d.offset=c.append?B(b.data):0;d.flags=c;e.fds[a]=d;e.fd_last_idx=a;return a}function
cn(a,b,c){var
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
g=a.toString(),i=P(a);if(d.rdonly&&d.wronly)m(g+" : flags Open_rdonly and Open_wronly are not compatible");if(d.text&&d.binary)m(g+" : flags Open_text and Open_binary are not compatible");if(cd(a)){if(ce(a))m(g+" : is a directory");if(d.create&&d.excl)m(g+ad);var
h=e.fd_last_idx?e.fd_last_idx:0,f=ah(i);if(d.truncate)f.truncate();return C(h+1,f,d)}else
if(d.create){var
h=e.fd_last_idx?e.fd_last_idx:0;bM(a,r(0));var
f=ah(i);return C(h+1,f,d)}else
a4(a)}C(0,new
o(r(0)));C(1,new
o(r(0)));C(2,new
o(r(0)));function
bY(a){var
b=e.fds[a];if(b.flags.wronly)m(aV+a+" is writeonly");return{file:b.file,offset:b.offset,fd:a,opened:true}}function
ck(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=c.console;b&&b.error&&b.error(a)}function
cl(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=c.console;b&&b.log&&b.log(a)}var
Q=new
Array();function
b9(a,b){var
g=R(b),c=B(g),f=B(a.file.data),e=a.offset;if(e+c>=f){var
d=r(e+c);af(a.file.data,0,d,0,f);af(g,0,d,e,c);a.file.data=d}a.offset+=c;return 0}function
bZ(a){var
b;switch(a){case
1:b=cl;break;case
2:b=ck;break;default:b=b9}var
d=e.fds[a];if(d.flags.rdonly)m(aV+a+" is readonly");var
c={file:d.file,offset:d.offset,fd:a,opened:true,buffer:f,output:b};Q[c.fd]=c;return c}function
b0(){var
a=0;for(var
b
in
Q)if(Q[b].opened)a=[0,Q[b],a];return a}function
b1(a,b){if(b==0)a5();return a%b}if(!Math.imul)Math.imul=function(a,b){return((a>>16)*b<<16)+(a&aR)*b|0};var
b2=Math.imul;function
b7(a,b){e[a+1]=b}var
a2={};function
bH(a){if((a.t&6)!=0)z(a);return a.c}function
b8(a,b){a2[bH(a)]=b;return 0}function
b$(){A(aU)}function
cb(a,b){if(b>>>0>=a.l)b$();return v(a,b)}function
cc(){return 32}var
bO=new
Date()*aF;function
cf(){return new
Date()*aF-bO}function
b3(a){return a2[a]}function
cj(a){if(a
instanceof
Array)return a;if(c.RangeError&&a
instanceof
c.RangeError&&a.message&&a.message.match(/maximum call stack/i))return[0,e[9]];if(c.InternalError&&a
instanceof
c.InternalError&&a.message&&a.message.match(/too much recursion/i))return[0,e[9]];if(a
instanceof
c.Error)return[0,b3(aM),a];return[0,e[3],a1(String(a))]}var
aC=af,d=bI,aE=bS,$=a1,I=bV,aD=bZ,_=B,ab=b1,aa=b2,b=R,a=b7,J=cb,bF=cj;function
x(a,b){return a.length==1?a(b):y(a,[b])}var
T=[0,b("Invalid_argument")],al=[0,b("Assert_failure")],av=b(ac),ax=[0,10,10,15];a(11,[0,b("Undefined_recursive_module")]);a(10,al);a(9,[0,b("Sys_blocked_io")]);a(8,[0,b("Stack_overflow")]);a(7,[0,b("Match_failure")]);a(6,[0,b("Not_found")]);a(5,[0,b("Division_by_zero")]);a(4,[0,b("End_of_file")]);a(3,T);a(2,[0,b("Failure")]);a(1,[0,b("Sys_error")]);a(0,[0,b("Out_of_memory")]);var
a$=b("Random.int"),a_=b(aL),ba=[0,987910699,495797812,364182224,414272206,318284740,990407751,383018966,270373319,840823159,24560019,536292337,512266505,189156120,730249596,143776328,51606627,140166561,366354223,1003410265,700563762,981890670,913149062,526082594,1021425055,784300257,667753350,630144451,949649812,48546892,415514493,258888527,511570777,89983870,283659902,308386020,242688715,482270760,865188196,1027664170,207196989,193777847,619708188,671350186,149669678,257044018,87658204,558145612,183450813,28133145,901332182,710253903,510646120,652377910,409934019,801085050],bc=b("Js.Error"),bg=b("img"),bf=b("br"),be=b("div"),bw=b("YOU LOSE"),bt=b(ae),bs=b(aX),bq=b("Mode : "),br=b(ae),bv=b(aK),bu=b("0"),bp=b("YOU WIN"),bo=b("GAME OVER"),bi=b(aX),bj=b(ae),bk=b("sprites/empty.png"),bl=b(".png"),bm=b("sprites/"),bn=b(aK),bh=[0,0,0],bz=[0,b("main.ml"),42,17],bA=b("main"),bB=b("Number of columns"),bC=b("Number of rows"),bD=b("Number of mines"),bE=b("nouvelle partie"),by=b("submit"),bx=b("text");function
D(a,b){return bN(a,b)?a:b}function
U(a,b){var
c=_(a),e=_(b),d=r(c+e|0);aC(a,0,d,0,c);aC(b,0,d,c,e);return d}function
E(a){return b(f+a)}function
V(a,b){if(a){var
c=a[1];return[0,c,V(a[2],b)]}return b}bY(0);aD(1);aD(2);function
ak(a,b,c){var
e=I(a,[0]),f=a-1|0,g=0;if(!(f<0)){var
d=g;for(;;){e[d+1]=I(b,c);var
h=d+1|0;if(f!==d){var
d=h;continue}break}}return e}function
am(a){var
b=a,c=0;for(;;){if(b){var
d=[0,b[1],c],b=b[2],c=d;continue}return c}}function
W(a,b){var
c=b;for(;;){if(c){var
d=c[2];x(a,c[1]);var
c=d;continue}return 0}}var
an=[0,0],a9=cc(0);function
ao(a){an[1]=[0,a,an[1]];return 0}32===a9;var
i=[0,ba.slice(),0],n=c,ap=null,s=false,aq=n.Array,ar=[0,bc];b8(b(aM),[0,ar,{}][0+1]);var
bb=undefined;ao(function(a){return a[1]===ar?[0,$(a[2].toString())]:0});ao(function(a){return a
instanceof
aq?0:[0,$(a.toString())]});function
as(a){return a}function
g(a,b){a.appendChild(b);return 0}function
t(d){return as(bT(function(a){if(1-(as(a)==ap?1:0)){var
e=x(d,a);if(!(e|0))a.preventDefault();return e}var
c=event,b=x(d,c);if(!(b|0))c.returnValue=b;return b}))}var
bd=n.document;function
G(a,b){return a?x(b,a[1]):0}function
X(a,b){return a.createElement(b.toString())}function
Y(a,b){return X(a,b)}var
at=[0,aQ];function
au(a,b,c){for(;;){if(0===a)if(0===b)return X(c,av);var
g=at[1];if(aQ===g){try{var
i=bd.createElement('<input name="x">'),j=i.tagName.toLowerCase()===ac?1:0,l=j?i.name===aL?1:0:j,h=l}catch(f){var
h=0}var
k=h?aI:-1003883683;at[1]=k;continue}if(aI<=g){var
d=new
aq();d.push("<",ac);G(a,function(a){d.push(' type="',aE(a),aN);return 0});G(b,function(a){d.push(' name="',aE(a),aN);return 0});d.push(">");return c.createElement(d.join(f))}var
e=X(c,av);G(a,function(a){return e.type=a});G(b,function(a){return e.name=a});return e}}function
w(a){return Y(a,bf)}function
aw(a){return Y(a,bg)}n.HTMLElement===bb;function
j(a){return a.toString()}var
u=n.document;function
ay(a,b){var
e=a[1]-1|0,g=0;if(!(e<0)){var
c=g;for(;;){var
f=a[2]-1|0,h=0;if(!(f<0)){var
d=h;for(;;){x(b,[0,c,d]);var
j=d+1|0;if(f!==d){var
d=j;continue}break}}var
i=c+1|0;if(e!==c){var
c=i;continue}break}}return 0}function
az(a,b){var
c=b[2],d=b[1],f=0,e=[0,[0,d-1|0,c-1|0],[0,[0,d-1|0,c],[0,[0,d-1|0,c+1|0],[0,[0,d,c-1|0],[0,[0,d,c+1|0],[0,[0,d+1|0,c-1|0],[0,[0,d+1|0,c],[0,[0,d+1|0,c+1|0],0]]]]]]]];for(;;){if(e){var
i=e[2],g=e[1],j=g[2],k=g[1],l=0<=k?1:0;if(l){var
m=k<a[1]?1:0;if(m)var
n=0<=j?1:0,h=n?j<a[2]?1:0:n;else
var
h=m}else
var
h=l;if(h){var
f=[0,g,f],e=i;continue}var
e=i;continue}return am(f)}}function
H(a,b){var
c=b[3]?bi:b[1]?bj:b[2]?0===b[4]?bk:U(bm,U(E(b[4]),bl)):bn;return a.src=j(c)}function
aA(a){var
e=a[3][2]-1|0,g=0;if(!(e<0)){var
b=g;for(;;){var
f=a[3][1]-1|0,h=0;if(!(f<0)){var
c=h;for(;;){var
j=d(d(a[1],c)[c+1],b)[b+1];H(d(d(a[2],b)[b+1],c)[c+1],j);var
k=c+1|0;if(f!==c){var
c=k;continue}break}}var
i=b+1|0;if(e!==b){var
b=i;continue}break}}return 0}function
aB(a){var
e=a[3][2]-1|0,g=0;if(!(e<0)){var
b=g;for(;;){var
f=a[3][1]-1|0,h=0;if(!(f<0)){var
c=h;for(;;){var
k=t(function(a){n.alert(j(bo));return s});d(d(a[2],b)[b+1],c)[c+1].onclick=k;var
l=c+1|0;if(f!==c){var
c=l;continue}break}}var
i=b+1|0;if(e!==b){var
b=i;continue}break}}return 0}function
p(a){return a.toString()}var
k=n.document;function
Z(a,b){var
d=k.createDocumentFragment();g(d,k.createTextNode(p(a)));var
c=au([0,p(bx)],0,k);c.value=p(E(b[1]));c.onchange=t(function(a){try{b[1]=bR($(c.value))}catch(f){f=bF(f);if(f[1]!==T)throw f}c.value=p(E(b[1]));return s});g(d,c);return d}n.onload=t(function(a){var
l=k.getElementById(p(bA));if(l==ap)throw[0,al,bz];var
aD=[0,15],aE=[0,12],aF=[0,10];g(l,Z(bB,aF));g(l,w(k));g(l,Z(bC,aE));g(l,w(k));g(l,Z(bD,aD));g(l,w(k));function
e(a){var
S=Y(k,be);g(l,S);var
a5=aD[1],a6=aF[1],ar=D(ax[1],aE[1]),X=D(ax[2],a6),as=D(1,a5),at=aa(ar,X),aV=bU(at,as)?at:as,h=[0,ar,X,aV],ao=[0,(cf(0)*1e3|0)%1e5|0],ae=0===ao.length-1?[0,0]:ao,af=ae.length-1,aL=0;if(!0){var
m=aL;for(;;){d(i[1],m)[m+1]=m;var
aR=m+1|0;if(54!==m){var
m=aR;continue}break}}var
P=[0,a_],ag=54+D(55,af)|0,aM=0;if(!(ag<0)){var
q=aM;for(;;){var
z=q%55|0,ah=ab(q,af),aN=d(ae,ah)[ah+1],aO=P[1],ad=U(aO,E(aN));P[1]=bW(ad,0,_(ad));var
A=P[1],aK=((J(A,0)+(J(A,1)<<8)|0)+(J(A,2)<<16)|0)+(J(A,3)<<24)|0,aP=(d(i[1],z)[z+1]^aK)&L;d(i[1],z)[z+1]=aP;var
aQ=q+1|0;if(ag!==q){var
q=aQ;continue}break}}i[2]=0;var
aW=0,aX=aa(h[2],h[1])-h[3]|0,aY=0,aZ=I(X,[0]);function
aq(a){return[0,0,0,0,0]}var
B=aa(h[1],h[2]),r=[0,0],aT=h[3];a:for(;;){var
O=0,N=r[1];for(;;){if(N){var
O=O+1|0,N=N[2];continue}if(O<aT){if(!(L<B))if(0<B)for(;;){i[2]=(i[2]+1|0)%55|0;var
ai=i[2],aj=d(i[1],ai)[ai+1],al=(i[2]+24|0)%55|0,Q=(d(i[1],al)[al+1]+(aj^(aj>>>25|0)&31)|0)&L,an=i[2];d(i[1],an)[an+1]=Q;var
R=ab(Q,B);if(((L-B|0)+1|0)<(Q-R|0))continue;var
y=r[1];for(;;){if(y){var
aJ=y[2],ac=0===bJ(y[1],R)?1:0;if(!ac){var
y=aJ;continue}var
ap=ac}else
var
ap=0;if(!ap)r[1]=[0,R,r[1]];continue a}}throw[0,T,a$]}var
aS=r[1],aU=aq(0),o=ak(h[1],h[2],aU);ay(h,function(a){var
b=a[2],c=a[1],e=aq(0);return d(d(o,c)[c+1],b)[b+1]=e});W(function(a){var
b=ab(a,h[2]),c=bL(a,h[2]);d(d(o,c)[c+1],b)[b+1][1]=1;return 0},aS);ay(h,function(a){var
b=a[2],c=a[1];if(d(d(o,c)[c+1],b)[b+1][1])return 0;var
e=[0,0];function
f(a){var
b=a[2],c=a[1];return d(d(o,c)[c+1],b)[b+1][1]?(e[1]++,0):0}W(f,az(h,[0,c,b]));var
g=e[1];d(d(o,c)[c+1],b)[b+1][4]=g;return 0});var
f=[0,o,aZ,h,aY,aX,aW],C=[0,0],p=u.createDocumentFragment();g(p,u.createTextNode(j(bq)));var
v=aw(u);g(p,v);v.src=j(br);v.onclick=t(function(a){if(0===C[1]){C[1]=1;v.src=j(bs)}else{C[1]=0;v.src=j(bt)}return s});g(p,w(u));var
au=f[3][2]-1|0,a0=0;if(!(au<0)){var
e=a0;for(;;){var
Z=[0,0],av=f[3][1]-1|0,a2=0;if(!(av<0)){var
b=a2;for(;;){var
c=aw(u);Z[1]=[0,c,Z[1]];c.src=j(bv);c.onclick=t(function(e,b,c){return function(a){if(0===C[1]){if(!d(d(f[1],b)[b+1],e)[e+1][2])if(f[6]){if(d(d(f[1],b)[b+1],e)[e+1][3]){f[4]=f[4]-1|0;d(d(f[1],b)[b+1],e)[e+1][3]=0}else{f[4]=f[4]+1|0;d(d(f[1],b)[b+1],e)[e+1][3]=1}var
l=d(d(f[1],b)[b+1],e)[e+1];H(d(d(f[2],e)[e+1],b)[b+1],l)}else
if(!d(d(f[1],b)[b+1],e)[e+1][3])if(d(d(f[1],b)[b+1],e)[e+1][1]){aA(f);aB(f);n.alert(j(bw))}else{var
m=function(a){var
b=a[2],c=a[1];d(d(f[1],c)[c+1],b)[b+1][2]=1;var
e=d(d(f[1],c)[c+1],b)[b+1];H(d(d(f[2],b)[b+1],c)[c+1],e);f[5]=f[5]-1|0;return 0},i=f[3],o=f[1],h=ak(i[1],i[2],0),k=function(a){var
e=a;for(;;){if(e){var
i=e[2],f=e[1],b=f[2],c=f[1],g=d(d(o,c)[c+1],b)[b+1];if(!g[1])if(!g[3])if(!g[2])if(!d(d(h,c)[c+1],b)[b+1]){var
j=k(i),l=j[2],m=j[1];d(d(h,c)[c+1],b)[b+1]=1;return 0===g[4]?[0,m,[0,f,l]]:[0,[0,f,m],l]}var
e=i;continue}return bh}},g=function(a){if(a){var
c=a[2],b=a[1],e=b[2],f=b[1];if(0===d(d(o,f)[f+1],e)[e+1][4]){var
h=k(az(i,b)),j=h[1];return V([0,b,j],g(V(h[2],c)))}return[0,b,g(c)]}return 0};d(d(h,b)[b+1],e)[e+1]=1;W(m,g([0,[0,b,e],0]));if(0===f[5]){aA(f);aB(f);n.alert(j(bp))}}}else{var
p=1-d(d(f[1],b)[b+1],e)[e+1][3];d(d(f[1],b)[b+1],e)[e+1][3]=p;H(c,d(d(f[1],b)[b+1],e)[e+1])}return s}}(e,b,c));g(p,c);var
a4=b+1|0;if(av!==b){var
b=a4;continue}break}}g(p,w(u));var
F=am(Z[1]);if(F){var
K=0,G=F,aG=F[2],aH=F[1];for(;;){if(G){var
K=K+1|0,G=G[2];continue}var
$=I(K,aH),M=1,x=aG;for(;;){if(x){var
aI=x[2];$[M+1]=x[1];var
M=M+1|0,x=aI;continue}var
aC=$;break}break}}else
var
aC=[0];d(f[2],e)[e+1]=aC;var
a3=e+1|0;if(au!==e){var
e=a3;continue}break}}var
a1=j(bu);S.style.lineHeight=a1;g(S,p);return s}}}var
c=k.createDocumentFragment(),b=au([0,p(by)],0,k);b.value=p(bE);b.onclick=t(e);g(c,b);g(l,c);return s});var
F=b0(0);for(;;){if(F){var
a7=F[2],a8=F[1];try{bX(a8)}catch(f){}var
F=a7;continue}return}}(function(){return this}()));
