var ResponsiveAriaProperties;(function(){function u(){for(var s,e,l,h,o,a,c=_w.innerWidth,u=0;u<3;u++)if(c>=n[u]&&c<=t[u])break;if(u<3)for(s="",e=0;e<3;e++)for(s=e==u?"false":"true",l=r+i[e],h=_d.getElementsByClassName(l),o=0;o<h.length;o++)a=h[o],f(a,"aria-hidden",s)}function f(n,t,i){n.getAttribute(t)!=i&&n.setAttribute(t,i)}var n=[0,1194,1282],t=[1193,1281,1e6],i=["256","344","432"],r="tp";sj_be(_w,"resize",u)})(ResponsiveAriaProperties||(ResponsiveAriaProperties={}))