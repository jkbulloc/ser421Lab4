function SerpMMRH(){function ui(n,t,i){function f(t){for(var r,f=n.getElementsByTagName(t),e=f.length,i=0;i<e;i++)r=f[i],u(r,p,null)!=null&&s(r,n)}function s(n,t){if(!n[w]){n[w]=!0;h.push(n);var i=ot(n,t);n[ut]=i;sj_be(n,"mouseover",e);sj_be(n,"mouseout",o);sj_be(n,"focusin",ht);sj_be(n,"focusout",ct)}}if(p=i,n!=null){t||(t=["img","span"]);for(var r=0;r<t.length;r++)f(t[r])}}function ot(n,t){for(;n&&n!==t;n=n.parentNode)if(u(n,kt,null)!=null||u(n,dt,null)!=null)return n;return null}function fi(){return h}function u(n,t,i){var r,f;if(n){if(r=!!n.hasAttribute,r?n.hasAttribute(t):n[t]!=null)return r?n.getAttribute(t):n[t];if(f=n[ut],f)return u(f,t,null)}return i}function k(n,t,i){var r=u(n,t,i),f=+r;return r==null||isNaN(f)?i:f}function f(){if(!t&&n.createEmptyHoverContent){t=sj_ce("div",n.hoverId,n.hoverClass);t.setAttribute("data-priority","2");(_w.location.href.indexOf("testhooks=1")>-1||_w.location.href.indexOf("testhooks=~1")>-1)&&t.setAttribute("data-tag","multimedia.mmRichHover");var i=sj_ce("span");n.createEmptyHoverContent(i);t.appendChild(i);sj_be(t,"mouseover",e);sj_be(t,"mouseout",o);tt(!1,!1)}return t}function ei(){return f().firstChild}function oi(n){n&&(y.push(n),sj_be(n,"mouseover",e),sj_be(n,"mouseout",o))}function si(){return i}function d(){var r,n,i;for(sj_ue(_w,"unload",d),sj_ue(_w,"scroll",st),t&&(sj_ue(t,"mouseover",e),sj_ue(t,"mouseout",o)),r=h.length,i=0;i<r;i++)n=h[i],n[w]=null,sj_ue(n,"mouseover",e),sj_ue(n,"mouseout",o),sj_ue(n,"focusin",ht),sj_ue(n,"focusout",ct);for(r=y.length,i=0;i<r;i++)n=y[i],sj_ue(n,"mouseover",e),sj_ue(n,"mouseout",o)}function st(){sb_ct(n.hoverEndTimer);n.hoverEndTimer=null;s(i,!1);i=null;g()}function e(n){lt(n,!0)}function o(n){at(n,!0)}function ht(n){lt(n,!1)}function ct(n){at(n,!1)}function lt(t,r){var u=yt(sj_et(t)),f=k(u,ft,0);if(u&&u!=i)if(s(i,!1),i=u,s(u,!0),r&&(it(t),f==0&&(a=!0,sj_be(_d,"mousemove",vt))),v&&n.enableH2H&&n.hoverEndTimer!=null)sb_ct(n.hoverEndTimer),n.hoverEndTimer=null,nt(u,null,!0,!r);else if(n.onHoverImmediate){sb_ct(n.hoverEndTimer);n.hoverEndTimer=null;n.onHoverImmediate(u,!r)}}function at(t,r){var f=sj_mo(t),u=yt(f);if(u!=i){if(s(i,!1),n.onHoverOut)n.onHoverOut(t);v&&u&&n.enableH2H?(i=u,s(u,!0),r&&it(t),nt(u,null,!0,!r)):(i=null,ot(f,document)?n.hoverEndTimer=sb_st(g,ri):g())}}function g(){n.onHideHoverContainer&&n.onHideHoverContainer();pt(!1);tt(!1,!1);a&&(a=!1,sj_ue(_d,"mousemove",vt))}function nt(t,i,r,u){if(n.createHoverContent(t,i,r,u),n.setCaptions&&n.setCaptions(t),pt(!0),tt(!0,!r),rt(t,u),n.onHoverDisplayed)n.onHoverDisplayed(t)}function s(n,t){if(n!=null){var i=n.className;t?(!i||i.indexOf(b)<0)&&(n.className=i+" "+b):n.className=i.replace(" "+b,"")}}function vt(n){it(n);rt(i,!1)}function yt(n){while(n!=null){if(u(n,p,null)!=null)return n;if(n==t)return i;if(n.getImage&&typeof(n.getImage=="function"))return n.getImage();n=n.parentNode&&n.parentNode!=n?n.parentNode:null}return null}function pt(n){var t=f();n&&!l?(_d.body.appendChild(t),l=!0):!n&&l&&(t.parentNode.removeChild(t),l=!1)}function tt(n,t){var i=f();i.style.visibility=n?"visible":"hidden";v=n;n&&t&&(sj_so(i,0),sj_fader().init(i,0,100,10,function(){_G.TestEnv&&sj_evt.fire("Vi.Hover.ContainerVisible")}))}function hi(n){var h=f(),o,t,s,i,c,e,l,a;if(h){for(o=!1,r=r||sj_ce("div",null,"irhcs");r.lastChild;)r.removeChild(r.lastChild);for(t=1;t<=ii;t++)if(s=u(n,"t"+t,null),s&&s.length>0){o=!0;i=null;try{c=u(n,"m",null);c&&(i=eval("("+c+")"))}catch(v){i=null}e=sj_ce("span");l=u(n,"c"+t,null)||"";l+=" irhcs"+t;e.className=l;i&&i.dirovr&&(a=i.dirovr,e.setAttribute("dir",a));e.appendChild(_d.createTextNode(s));r.appendChild(e)}o&&r.parentNode!=h?h.appendChild(r):o||r.parentNode==null||r.parentNode.removeChild(r)}}function it(n){n=sj_ev(n);c=n.pageX?{x:n.pageX,y:n.pageY}:{x:n.clientX+Math.max(sb_de.scrollLeft,_d.body.scrollLeft),y:n.clientY+Math.max(sb_de.scrollTop,_d.body.scrollTop)}}function rt(n,t){var e=t?2:k(n,ft,0),r=f(),i,u;switch(e){case 1:i=li(r,n);break;case 2:i=bt(n);break;default:i=ci(r)}i&&(u=r.style,u.left=i.l+"px",u.top=i.t+"px")}function ci(n){var t=wt(),a=c.x,e=c.y,i=a+gt,r=e+ni,u=n.clientWidth,f=n.clientHeight,o=i+u>t.r,s=r+f>t.b,h,l;return o&&s?(i=t.r-u,r=e-f-ti):o?i=t.r-u:s&&(r=t.b-f),h=i<t.l,l=r<t.t,h&&u<_w.innerWidth?i=t.l:l&&f<_w.innerHeight&&(r=t.t),{l:i,t:r}}function li(n,t){var u=wt(),f=n.offsetWidth,e=n.offsetHeight,o=bt(t),i=o.l-f/2,r=o.t-e/2;return i=Math.min(i,u.r-f-2),i=Math.max(i,u.l),r=Math.min(r,u.b-e-2),r=Math.max(r,u.t),{l:i,t:r}}function wt(){var n=_w.pageXOffset||sb_de.scrollLeft,t=_w.pageYOffset||sb_de.scrollTop,i=n+(_w.innerWidth||sb_de.clientWidth)-et,r=t+(_w.innerHeight||sb_de.clientHeight)-et;return{l:n,t:t,r:i,b:r}}function bt(n){var u=window.scrollX?window.scrollX:window.pageXOffset,f=window.scrollY?window.scrollY:window.pageYOffset,t=n.getBoundingClientRect(),i=t.left+u,r=t.top+f;return i+=n.offsetWidth/2,r+=n.offsetHeight/2,{l:i,t:r}}var n=this,h=[],t=null,i=null,c={x:0,y:0},a=!1,r=null,v=!1,l=!1,y=[],p=null,ut="hvpr",kt="ihp",dt="ihpa",w="irhatt",ft="hp",b="vt_onhv",gt=15,ni=25,ti=7,et=19,ii=4,ri=300;sj_be(_w,"unload",d);sj_be(_w,"scroll",st);n.hoverClass="irhc";n.hoverId="irhcid";n.hoverEndTimer=null;n.attach=ui;n.items=fi;n.hoverAttr=u;n.hoverAttrNum=k;n.getCont=f;n.addIntercept=oi;n.getHoverEl=si;n.dispHov=nt;n.getContContent=ei;n.setContPos=rt;n.detach=d;n.setCaptions=hi}