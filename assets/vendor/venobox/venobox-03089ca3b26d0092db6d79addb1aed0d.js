(function(e){"use strict"
var s,i,a,c,o,t,d,l,r,n,v,u,b,k,p,m,h,f,g,x,y,w,C,_,B,P,E,O,D,M,N,U,V,I,z,R,X,Y,j,W
e.fn.extend({venobox:function(q){var $=this,A=e.extend({arrowsColor:"#B6B6B6",autoplay:!1,bgcolor:"#fff",border:"0",closeBackground:"#161617",closeColor:"#d2d2d2",framewidth:"",frameheight:"",gallItems:!1,infinigall:!1,htmlClose:"&times;",htmlNext:"<span>Next</span>",htmlPrev:"<span>Prev</span>",numeratio:!1,numerationBackground:"#161617",numerationColor:"#d2d2d2",numerationPosition:"top",overlayClose:!0,overlayColor:"rgba(23,23,23,0.85)",spinner:"double-bounce",spinColor:"#d2d2d2",titleattr:"title",titleBackground:"#161617",titleColor:"#d2d2d2",titlePosition:"top",cb_pre_open:function(){return!0},cb_post_open:function(){},cb_pre_close:function(){return!0},cb_post_close:function(){},cb_post_resize:function(){},cb_after_nav:function(){},cb_content_loaded:function(){},cb_init:function(){}},q)
return A.cb_init($),this.each((function(){if((D=e(this)).data("venobox"))return!0
function q(){y=D.data("gall"),h=D.data("numeratio"),u=D.data("gallItems"),b=D.data("infinigall"),k=u||e('.vbox-item[data-gall="'+y+'"]'),w=k.eq(k.index(D)+1),C=k.eq(k.index(D)-1),w.length||!0!==b||(w=k.eq(0)),k.length>=1?(M=k.index(D)+1,a.html(M+" / "+k.length)):M=1,!0===h?a.show():a.hide(),""!==x?c.show():c.hide(),w.length||!0===b?(e(".vbox-next").css("display","block"),_=!0):(e(".vbox-next").css("display","none"),_=!1),k.index(D)>0||!0===b?(e(".vbox-prev").css("display","block"),B=!0):(e(".vbox-prev").css("display","none"),B=!1),!0!==B&&!0!==_||(d.on(J.DOWN,Z),d.on(J.MOVE,F),d.on(J.UP,G))}function H(e){return!(e.length<1)&&(!p&&(p=!0,f=e.data("overlay")||e.data("overlaycolor"),n=e.data("framewidth"),v=e.data("frameheight"),o=e.data("border"),i=e.data("bgcolor"),l=e.data("href")||e.attr("href"),s=e.data("autoplay"),x=e.data("titleattr")&&e.attr(e.data("titleattr"))||"",e===C&&d.addClass("vbox-animated").addClass("swipe-right"),e===w&&d.addClass("vbox-animated").addClass("swipe-left"),E.show(),void d.animate({opacity:0},500,(function(){g.css("background",f),d.removeClass("vbox-animated").removeClass("swipe-left").removeClass("swipe-right").css({"margin-left":0,"margin-right":0}),"iframe"==e.data("vbtype")?ie():"inline"==e.data("vbtype")?ce():"ajax"==e.data("vbtype")?se():"video"==e.data("vbtype")?ae(s):(d.html('<img src="'+l+'">'),oe()),D=e,q(),p=!1,A.cb_after_nav(D,M,w,C)}))))}function Q(e){27===e.keyCode&&S(),37==e.keyCode&&!0===B&&H(C),39==e.keyCode&&!0===_&&H(w)}function S(){if(!1===A.cb_pre_close(D,M,w,C))return!1
e("body").off("keydown",Q).removeClass("vbox-open"),D.focus(),g.animate({opacity:0},500,(function(){g.remove(),p=!1,A.cb_post_close()}))}$.VBclose=function(){S()},D.addClass("vbox-item"),D.data("framewidth",A.framewidth),D.data("frameheight",A.frameheight),D.data("border",A.border),D.data("bgcolor",A.bgcolor),D.data("numeratio",A.numeratio),D.data("gallItems",A.gallItems),D.data("infinigall",A.infinigall),D.data("overlaycolor",A.overlayColor),D.data("titleattr",A.titleattr),D.data("venobox",!0),D.on("click",(function(u){if(u.preventDefault(),D=e(this),!1===A.cb_pre_open(D))return!1
switch($.VBnext=function(){H(w)},$.VBprev=function(){H(C)},f=D.data("overlay")||D.data("overlaycolor"),n=D.data("framewidth"),v=D.data("frameheight"),s=D.data("autoplay")||A.autoplay,o=D.data("border"),i=D.data("bgcolor"),_=!1,B=!1,p=!1,l=D.data("href")||D.attr("href"),r=D.data("css")||"",x=D.attr(D.data("titleattr"))||"",P='<div class="vbox-preloader">',A.spinner){case"rotating-plane":P+='<div class="sk-rotating-plane"></div>'
break
case"double-bounce":P+='<div class="sk-double-bounce"><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div>'
break
case"wave":P+='<div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>'
break
case"wandering-cubes":P+='<div class="sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div>'
break
case"spinner-pulse":P+='<div class="sk-spinner sk-spinner-pulse"></div>'
break
case"chasing-dots":P+='<div class="sk-chasing-dots"><div class="sk-child sk-dot1"></div><div class="sk-child sk-dot2"></div></div>'
break
case"three-bounce":P+='<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>'
break
case"circle":P+='<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>'
break
case"cube-grid":P+='<div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>'
break
case"fading-circle":P+='<div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>'
break
case"folding-cube":P+='<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>'}return P+="</div>",O='<a class="vbox-next">'+A.htmlNext+'</a><a class="vbox-prev">'+A.htmlPrev+"</a>",U='<div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">'+A.htmlClose+"</div>",t='<div class="vbox-overlay '+r+'" style="background:'+f+'">'+P+'<div class="vbox-container"><div class="vbox-content"></div></div>'+U+O+"</div>",e("body").append(t).addClass("vbox-open"),e(".vbox-preloader div:not(.sk-circle) .sk-child, .vbox-preloader .sk-rotating-plane, .vbox-preloader .sk-rect, .vbox-preloader div:not(.sk-folding-cube) .sk-cube, .vbox-preloader .sk-spinner-pulse").css("background-color",A.spinColor),g=e(".vbox-overlay"),e(".vbox-container"),d=e(".vbox-content"),a=e(".vbox-num"),c=e(".vbox-title"),(E=e(".vbox-preloader")).show(),c.css(A.titlePosition,"-1px"),c.css({color:A.titleColor,"background-color":A.titleBackground}),e(".vbox-close").css({color:A.closeColor,"background-color":A.closeBackground}),e(".vbox-num").css(A.numerationPosition,"-1px"),e(".vbox-num").css({color:A.numerationColor,"background-color":A.numerationBackground}),e(".vbox-next span, .vbox-prev span").css({"border-top-color":A.arrowsColor,"border-right-color":A.arrowsColor}),d.html(""),d.css("opacity","0"),g.css("opacity","0"),q(),g.animate({opacity:1},250,(function(){"iframe"==D.data("vbtype")?ie():"inline"==D.data("vbtype")?ce():"ajax"==D.data("vbtype")?se():"video"==D.data("vbtype")?ae(s):(d.html('<img src="'+l+'">'),oe()),A.cb_post_open(D,M,w,C)})),e("body").keydown(Q),e(".vbox-prev").on("click",(function(){H(C)})),e(".vbox-next").on("click",(function(){H(w)})),!1}))
var T=".vbox-overlay"
function Z(e){d.addClass("vbox-animated"),I=R=e.pageY,z=X=e.pageX,N=!0}function F(e){if(!0===N){X=e.pageX,R=e.pageY,j=X-z,W=R-I
var s=Math.abs(j)
s>Math.abs(W)&&s<=100&&(e.preventDefault(),d.css("margin-left",j))}}function G(e){if(!0===N){N=!1
var s=D,i=!1;(Y=X-z)<0&&!0===_&&(s=w,i=!0),Y>0&&!0===B&&(s=C,i=!0),Math.abs(Y)>=50&&!0===i?H(s):d.css({"margin-left":0,"margin-right":0})}}A.overlayClose||(T=".vbox-close"),e("body").on("click touchstart",T,(function(s){(e(s.target).is(".vbox-overlay")||e(s.target).is(".vbox-content")||e(s.target).is(".vbox-close")||e(s.target).is(".vbox-preloader")||e(s.target).is(".vbox-container"))&&S()})),z=0,X=0,Y=0,50,N=!1
var J={DOWN:"touchmousedown",UP:"touchmouseup",MOVE:"touchmousemove"},K=function(s){var i
switch(s.type){case"mousedown":i=J.DOWN
break
case"mouseup":case"mouseout":i=J.UP
break
case"mousemove":i=J.MOVE
break
default:return}var a=ee(i,s,s.pageX,s.pageY)
e(s.target).trigger(a)},L=function(s){var i
switch(s.type){case"touchstart":i=J.DOWN
break
case"touchend":i=J.UP
break
case"touchmove":i=J.MOVE
break
default:return}var a,c=s.originalEvent.touches[0]
a=i==J.UP?ee(i,s,null,null):ee(i,s,c.pageX,c.pageY),e(s.target).trigger(a)},ee=function(s,i,a,c){return e.Event(s,{pageX:a,pageY:c,originalEvent:i})}
function se(){e.ajax({url:l,cache:!1}).done((function(e){d.html('<div class="vbox-inline">'+e+"</div>"),oe()})).fail((function(){d.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'),te()}))}function ie(){d.html('<iframe class="venoframe" src="'+l+'"></iframe>'),te()}function ae(e){var s,i=function(e){var s
e.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),RegExp.$3.indexOf("youtu")>-1?s="youtube":RegExp.$3.indexOf("vimeo")>-1&&(s="vimeo")
return{type:s,id:RegExp.$6}}(l),a=(e?"?rel=0&autoplay=1":"?rel=0")+function(e){var s="",i=decodeURIComponent(e).split("?")
if(void 0!==i[1]){var a,c,o=i[1].split("&")
for(c=0;c<o.length;c++)s=s+"&"+(a=o[c].split("="))[0]+"="+a[1]}return encodeURI(s)}(l)
"vimeo"==i.type?s="https://player.vimeo.com/video/":"youtube"==i.type&&(s="https://www.youtube.com/embed/"),d.html('<iframe class="venoframe vbvid" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay" frameborder="0" src="'+s+i.id+a+'"></iframe>'),te()}function ce(){d.html('<div class="vbox-inline">'+e(l).html()+"</div>"),te()}function oe(){(V=d.find("img")).length?V.each((function(){e(this).one("load",(function(){te()}))})):te()}function te(){c.html(x),d.find(">:first-child").addClass("vbox-figlio").css({width:n,height:v,padding:o,background:i}),e("img.vbox-figlio").on("dragstart",(function(e){e.preventDefault()})),de(),d.animate({opacity:"1"},"slow",(function(){E.hide()})),A.cb_content_loaded(D,M,w,C)}function de(){var s=d.outerHeight(),i=e(window).height()
m=s+60<i?(i-s)/2:"30px",d.css("margin-top",m),d.css("margin-bottom",m),A.cb_post_resize()}"ontouchstart"in window?(e(document).on("touchstart",L),e(document).on("touchmove",L),e(document).on("touchend",L)):(e(document).on("mousedown",K),e(document).on("mouseup",K),e(document).on("mouseout",K),e(document).on("mousemove",K)),e(window).resize((function(){e(".vbox-content").length&&setTimeout(de(),800)}))}))}})})(jQuery)
