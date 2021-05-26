/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)})(this,(function(t,e,n){"use strict"
function i(t,e){for(var n=0;n<e.length;n++){var i=e[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t)
e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{}
e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n
var l="transitionend"
function c(t){var n=this,i=!1
return e(this).one(h.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||h.triggerTransitionEnd(n)}),t),this}var h={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t))
return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target")
if(!e||"#"===e){var n=t.getAttribute("href")
e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(i){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0
var n=e(t).css("transition-duration"),i=e(t).css("transition-delay"),o=parseFloat(n),s=parseFloat(i)
return o||s?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger(l)},supportsTransitionEnd:function(){return Boolean(l)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],s=e[i],r=s&&h.isElement(s)?"element":(a=s,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase())
if(!new RegExp(o).test(r))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+r+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null
if("function"==typeof t.getRootNode){var e=t.getRootNode()
return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?h.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if(void 0===e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.")
var t=e.fn.jquery.split(" ")[0].split(".")
if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}}
h.jQueryDetection(),e.fn.emulateTransitionEnd=c,e.event.special[h.TRANSITION_END]={bindType:l,delegateType:l,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}
var u="bs.alert",f=e.fn.alert,d={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},g="alert",_="fade",m="show",p=function(){function t(t){this._element=t}var n=t.prototype
return n.close=function(t){var e=this._element
t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,u),this._element=null},n._getRootElement=function(t){var n=h.getSelectorFromElement(t),i=!1
return n&&(i=document.querySelector(n)),i||(i=e(t).closest("."+g)[0]),i},n._triggerCloseEvent=function(t){var n=e.Event(d.CLOSE)
return e(t).trigger(n),n},n._removeElement=function(t){var n=this
if(e(t).removeClass(m),e(t).hasClass(_)){var i=h.getTransitionDurationFromElement(t)
e(t).one(h.TRANSITION_END,(function(e){return n._destroyElement(t,e)})).emulateTransitionEnd(i)}else this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger(d.CLOSED).remove()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data(u)
o||(o=new t(this),i.data(u,o)),"close"===n&&o[n](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(t,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),t}()
e(document).on(d.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),e.fn.alert=p._jQueryInterface,e.fn.alert.Constructor=p,e.fn.alert.noConflict=function(){return e.fn.alert=f,p._jQueryInterface}
var v="bs.button",E=e.fn.button,b="active",y="btn",C="focus",T='[data-toggle^="button"]',S='[data-toggle="buttons"]',D='[data-toggle="button"]',w='[data-toggle="buttons"] .btn',I='input:not([type="hidden"])',A=".active",N=".btn",O={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api",LOAD_DATA_API:"load.bs.button.data-api"},k=function(){function t(t){this._element=t}var n=t.prototype
return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest(S)[0]
if(i){var o=this._element.querySelector(I)
if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains(b))t=!1
else{var s=i.querySelector(A)
s&&e(s).removeClass(b)}else"checkbox"===o.type?"LABEL"===this._element.tagName&&o.checked===this._element.classList.contains(b)&&(t=!1):t=!1
t&&(o.checked=!this._element.classList.contains(b),e(o).trigger("change")),o.focus(),n=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(b)),t&&e(this._element).toggleClass(b))},n.dispose=function(){e.removeData(this._element,v),this._element=null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data(v)
i||(i=new t(this),e(this).data(v,i)),"toggle"===n&&i[n]()}))},o(t,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),t}()
e(document).on(O.CLICK_DATA_API,T,(function(t){var n=t.target
if(e(n).hasClass(y)||(n=e(n).closest(N)[0]),!n||n.hasAttribute("disabled")||n.classList.contains("disabled"))t.preventDefault()
else{var i=n.querySelector(I)
if(i&&(i.hasAttribute("disabled")||i.classList.contains("disabled")))return void t.preventDefault()
k._jQueryInterface.call(e(n),"toggle")}})).on(O.FOCUS_BLUR_DATA_API,T,(function(t){var n=e(t.target).closest(N)[0]
e(n).toggleClass(C,/^focus(in)?$/.test(t.type))})),e(window).on(O.LOAD_DATA_API,(function(){for(var t=[].slice.call(document.querySelectorAll(w)),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(I)
o.checked||o.hasAttribute("checked")?i.classList.add(b):i.classList.remove(b)}for(var s=0,r=(t=[].slice.call(document.querySelectorAll(D))).length;s<r;s++){var a=t[s]
"true"===a.getAttribute("aria-pressed")?a.classList.add(b):a.classList.remove(b)}})),e.fn.button=k._jQueryInterface,e.fn.button.Constructor=k,e.fn.button.noConflict=function(){return e.fn.button=E,k._jQueryInterface}
var P="carousel",L="bs.carousel",j=".bs.carousel",H=e.fn[P],R={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},x={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},F="next",U="prev",W="left",q="right",M={SLIDE:"slide.bs.carousel",SLID:"slid.bs.carousel",KEYDOWN:"keydown.bs.carousel",MOUSEENTER:"mouseenter.bs.carousel",MOUSELEAVE:"mouseleave.bs.carousel",TOUCHSTART:"touchstart.bs.carousel",TOUCHMOVE:"touchmove.bs.carousel",TOUCHEND:"touchend.bs.carousel",POINTERDOWN:"pointerdown.bs.carousel",POINTERUP:"pointerup.bs.carousel",DRAG_START:"dragstart.bs.carousel",LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},K="carousel",Q="active",B="slide",V="carousel-item-right",Y="carousel-item-left",z="carousel-item-next",X="carousel-item-prev",$="pointer-event",G=".active",J=".active.carousel-item",Z=".carousel-item",tt=".carousel-item img",et=".carousel-item-next, .carousel-item-prev",nt=".carousel-indicators",it="[data-slide], [data-slide-to]",ot='[data-ride="carousel"]',st={TOUCH:"touch",PEN:"pen"},rt=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(nt),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=t.prototype
return n.next=function(){this._isSliding||this._slide(F)},n.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide(U)},n.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(et)&&(h.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(t){var n=this
this._activeElement=this._element.querySelector(J)
var i=this._getItemIndex(this._activeElement)
if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(M.SLID,(function(){return n.to(t)}))
else{if(i===t)return this.pause(),void this.cycle()
var o=t>i?F:U
this._slide(o,this._items[t])}},n.dispose=function(){e(this._element).off(j),e.removeData(this._element,L),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(t){return t=a({},R,{},t),h.typeCheckConfig(P,t,x),t},n._handleSwipe=function(){var t=Math.abs(this.touchDeltaX)
if(!(t<=40)){var e=t/this.touchDeltaX
this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},n._addEventListeners=function(){var t=this
this._config.keyboard&&e(this._element).on(M.KEYDOWN,(function(e){return t._keydown(e)})),"hover"===this._config.pause&&e(this._element).on(M.MOUSEENTER,(function(e){return t.pause(e)})).on(M.MOUSELEAVE,(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var t=this
if(this._touchSupported){var n=function(e){t._pointerEvent&&st[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&st[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))}
e(this._element.querySelectorAll(tt)).on(M.DRAG_START,(function(t){return t.preventDefault()})),this._pointerEvent?(e(this._element).on(M.POINTERDOWN,(function(t){return n(t)})),e(this._element).on(M.POINTERUP,(function(t){return i(t)})),this._element.classList.add($)):(e(this._element).on(M.TOUCHSTART,(function(t){return n(t)})),e(this._element).on(M.TOUCHMOVE,(function(e){return function(e){e.originalEvent.touches&&e.originalEvent.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),e(this._element).on(M.TOUCHEND,(function(t){return i(t)})))}},n._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev()
break
case 39:t.preventDefault(),this.next()}},n._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(Z)):[],this._items.indexOf(t)},n._getItemByDirection=function(t,e){var n=t===F,i=t===U,o=this._getItemIndex(e),s=this._items.length-1
if((i&&0===o||n&&o===s)&&!this._config.wrap)return e
var r=(o+(t===U?-1:1))%this._items.length
return-1===r?this._items[this._items.length-1]:this._items[r]},n._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(J)),s=e.Event(M.SLIDE,{relatedTarget:t,direction:n,from:o,to:i})
return e(this._element).trigger(s),s},n._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(G))
e(n).removeClass(Q)
var i=this._indicatorsElement.children[this._getItemIndex(t)]
i&&e(i).addClass(Q)}},n._slide=function(t,n){var i,o,s,r=this,a=this._element.querySelector(J),l=this._getItemIndex(a),c=n||a&&this._getItemByDirection(t,a),u=this._getItemIndex(c),f=Boolean(this._interval)
if(t===F?(i=Y,o=z,s=W):(i=V,o=X,s=q),c&&e(c).hasClass(Q))this._isSliding=!1
else if(!this._triggerSlideEvent(c,s).isDefaultPrevented()&&a&&c){this._isSliding=!0,f&&this.pause(),this._setActiveIndicatorElement(c)
var d=e.Event(M.SLID,{relatedTarget:c,direction:s,from:l,to:u})
if(e(this._element).hasClass(B)){e(c).addClass(o),h.reflow(c),e(a).addClass(i),e(c).addClass(i)
var g=parseInt(c.getAttribute("data-interval"),10)
g?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=g):this._config.interval=this._config.defaultInterval||this._config.interval
var _=h.getTransitionDurationFromElement(a)
e(a).one(h.TRANSITION_END,(function(){e(c).removeClass(i+" "+o).addClass(Q),e(a).removeClass(Q+" "+o+" "+i),r._isSliding=!1,setTimeout((function(){return e(r._element).trigger(d)}),0)})).emulateTransitionEnd(_)}else e(a).removeClass(Q),e(c).addClass(Q),this._isSliding=!1,e(this._element).trigger(d)
f&&this.cycle()}},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data(L),o=a({},R,{},e(this).data())
"object"==typeof n&&(o=a({},o,{},n))
var s="string"==typeof n?n:o.slide
if(i||(i=new t(this,o),e(this).data(L,i)),"number"==typeof n)i.to(n)
else if("string"==typeof s){if(void 0===i[s])throw new TypeError('No method named "'+s+'"')
i[s]()}else o.interval&&o.ride&&(i.pause(),i.cycle())}))},t._dataApiClickHandler=function(n){var i=h.getSelectorFromElement(this)
if(i){var o=e(i)[0]
if(o&&e(o).hasClass(K)){var s=a({},e(o).data(),{},e(this).data()),r=this.getAttribute("data-slide-to")
r&&(s.interval=!1),t._jQueryInterface.call(e(o),s),r&&e(o).data(L).to(r),n.preventDefault()}}},o(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return R}}]),t}()
e(document).on(M.CLICK_DATA_API,it,rt._dataApiClickHandler),e(window).on(M.LOAD_DATA_API,(function(){for(var t=[].slice.call(document.querySelectorAll(ot)),n=0,i=t.length;n<i;n++){var o=e(t[n])
rt._jQueryInterface.call(o,o.data())}})),e.fn[P]=rt._jQueryInterface,e.fn[P].Constructor=rt,e.fn[P].noConflict=function(){return e.fn[P]=H,rt._jQueryInterface}
var at="collapse",lt="bs.collapse",ct=e.fn[at],ht={toggle:!0,parent:""},ut={toggle:"boolean",parent:"(string|element)"},ft={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},dt="show",gt="collapse",_t="collapsing",mt="collapsed",pt="width",vt="height",Et=".show, .collapsing",bt='[data-toggle="collapse"]',yt=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'))
for(var n=[].slice.call(document.querySelectorAll(bt)),i=0,o=n.length;i<o;i++){var s=n[i],r=h.getSelectorFromElement(s),a=[].slice.call(document.querySelectorAll(r)).filter((function(e){return e===t}))
null!==r&&a.length>0&&(this._selector=r,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=t.prototype
return n.toggle=function(){e(this._element).hasClass(dt)?this.hide():this.show()},n.show=function(){var n,i,o=this
if(!this._isTransitioning&&!e(this._element).hasClass(dt)&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(Et)).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains(gt)}))).length&&(n=null),!(n&&(i=e(n).not(this._selector).data(lt))&&i._isTransitioning))){var s=e.Event(ft.SHOW)
if(e(this._element).trigger(s),!s.isDefaultPrevented()){n&&(t._jQueryInterface.call(e(n).not(this._selector),"hide"),i||e(n).data(lt,null))
var r=this._getDimension()
e(this._element).removeClass(gt).addClass(_t),this._element.style[r]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(mt).attr("aria-expanded",!0),this.setTransitioning(!0)
var a="scroll"+(r[0].toUpperCase()+r.slice(1)),l=h.getTransitionDurationFromElement(this._element)
e(this._element).one(h.TRANSITION_END,(function(){e(o._element).removeClass(_t).addClass(gt).addClass(dt),o._element.style[r]="",o.setTransitioning(!1),e(o._element).trigger(ft.SHOWN)})).emulateTransitionEnd(l),this._element.style[r]=this._element[a]+"px"}}},n.hide=function(){var t=this
if(!this._isTransitioning&&e(this._element).hasClass(dt)){var n=e.Event(ft.HIDE)
if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension()
this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",h.reflow(this._element),e(this._element).addClass(_t).removeClass(gt).removeClass(dt)
var o=this._triggerArray.length
if(o>0)for(var s=0;s<o;s++){var r=this._triggerArray[s],a=h.getSelectorFromElement(r)
if(null!==a)e([].slice.call(document.querySelectorAll(a))).hasClass(dt)||e(r).addClass(mt).attr("aria-expanded",!1)}this.setTransitioning(!0)
this._element.style[i]=""
var l=h.getTransitionDurationFromElement(this._element)
e(this._element).one(h.TRANSITION_END,(function(){t.setTransitioning(!1),e(t._element).removeClass(_t).addClass(gt).trigger(ft.HIDDEN)})).emulateTransitionEnd(l)}}},n.setTransitioning=function(t){this._isTransitioning=t},n.dispose=function(){e.removeData(this._element,lt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(t){return(t=a({},ht,{},t)).toggle=Boolean(t.toggle),h.typeCheckConfig(at,t,ut),t},n._getDimension=function(){return e(this._element).hasClass(pt)?pt:vt},n._getParent=function(){var n,i=this
h.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent)
var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',s=[].slice.call(n.querySelectorAll(o))
return e(s).each((function(e,n){i._addAriaAndCollapsedClass(t._getTargetFromElement(n),[n])})),n},n._addAriaAndCollapsedClass=function(t,n){var i=e(t).hasClass(dt)
n.length&&e(n).toggleClass(mt,!i).attr("aria-expanded",i)},t._getTargetFromElement=function(t){var e=h.getSelectorFromElement(t)
return e?document.querySelector(e):null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data(lt),s=a({},ht,{},i.data(),{},"object"==typeof n&&n?n:{})
if(!o&&s.toggle&&/show|hide/.test(n)&&(s.toggle=!1),o||(o=new t(this,s),i.data(lt,o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"')
o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return ht}}]),t}()
e(document).on(ft.CLICK_DATA_API,bt,(function(t){"A"===t.currentTarget.tagName&&t.preventDefault()
var n=e(this),i=h.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i))
e(o).each((function(){var t=e(this),i=t.data(lt)?"toggle":n.data()
yt._jQueryInterface.call(t,i)}))})),e.fn[at]=yt._jQueryInterface,e.fn[at].Constructor=yt,e.fn[at].noConflict=function(){return e.fn[at]=ct,yt._jQueryInterface}
var Ct="dropdown",Tt="bs.dropdown",St=".bs.dropdown",Dt=e.fn[Ct],wt=new RegExp("38|40|27"),It={HIDE:"hide.bs.dropdown",HIDDEN:"hidden.bs.dropdown",SHOW:"show.bs.dropdown",SHOWN:"shown.bs.dropdown",CLICK:"click.bs.dropdown",CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},At="disabled",Nt="show",Ot="dropup",kt="dropright",Pt="dropleft",Lt="dropdown-menu-right",jt="position-static",Ht='[data-toggle="dropdown"]',Rt=".dropdown form",xt=".dropdown-menu",Ft=".navbar-nav",Ut=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Wt="top-start",qt="top-end",Mt="bottom-start",Kt="bottom-end",Qt="right-start",Bt="left-start",Vt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},Yt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},zt=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var i=t.prototype
return i.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(At)){var n=e(this._menu).hasClass(Nt)
t._clearMenus(),n||this.show(!0)}},i.show=function(i){if(void 0===i&&(i=!1),!(this._element.disabled||e(this._element).hasClass(At)||e(this._menu).hasClass(Nt))){var o={relatedTarget:this._element},s=e.Event(It.SHOW,o),r=t._getParentFromElement(this._element)
if(e(r).trigger(s),!s.isDefaultPrevented()){if(!this._inNavbar&&i){if(void 0===n)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)")
var a=this._element
"parent"===this._config.reference?a=r:h.isElement(this._config.reference)&&(a=this._config.reference,void 0!==this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(r).addClass(jt),this._popper=new n(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(r).closest(Ft).length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(Nt),e(r).toggleClass(Nt).trigger(e.Event(It.SHOWN,o))}}},i.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass(At)&&e(this._menu).hasClass(Nt)){var n={relatedTarget:this._element},i=e.Event(It.HIDE,n),o=t._getParentFromElement(this._element)
e(o).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),e(this._menu).toggleClass(Nt),e(o).toggleClass(Nt).trigger(e.Event(It.HIDDEN,n)))}},i.dispose=function(){e.removeData(this._element,Tt),e(this._element).off(St),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},i.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},i._addEventListeners=function(){var t=this
e(this._element).on(It.CLICK,(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},i._getConfig=function(t){return t=a({},this.constructor.Default,{},e(this._element).data(),{},t),h.typeCheckConfig(Ct,t,this.constructor.DefaultType),t},i._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element)
e&&(this._menu=e.querySelector(xt))}return this._menu},i._getPlacement=function(){var t=e(this._element.parentNode),n=Mt
return t.hasClass(Ot)?(n=Wt,e(this._menu).hasClass(Lt)&&(n=qt)):t.hasClass(kt)?n=Qt:t.hasClass(Pt)?n=Bt:e(this._menu).hasClass(Lt)&&(n=Kt),n},i._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},i._getOffset=function(){var t=this,e={}
return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=a({},e.offsets,{},t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},i._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}
return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),a({},t,{},this._config.popperConfig)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data(Tt)
if(i||(i=new t(this,"object"==typeof n?n:null),e(this).data(Tt,i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"')
i[n]()}}))},t._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll(Ht)),o=0,s=i.length;o<s;o++){var r=t._getParentFromElement(i[o]),a=e(i[o]).data(Tt),l={relatedTarget:i[o]}
if(n&&"click"===n.type&&(l.clickEvent=n),a){var c=a._menu
if(e(r).hasClass(Nt)&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&e.contains(r,n.target))){var h=e.Event(It.HIDE,l)
e(r).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),i[o].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),e(c).removeClass(Nt),e(r).removeClass(Nt).trigger(e.Event(It.HIDDEN,l)))}}}},t._getParentFromElement=function(t){var e,n=h.getSelectorFromElement(t)
return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(n){if(!(/input|textarea/i.test(n.target.tagName)?32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||e(n.target).closest(xt).length):!wt.test(n.which))&&(n.preventDefault(),n.stopPropagation(),!this.disabled&&!e(this).hasClass(At))){var i=t._getParentFromElement(this),o=e(i).hasClass(Nt)
if(o||27!==n.which)if(o&&(!o||27!==n.which&&32!==n.which)){var s=[].slice.call(i.querySelectorAll(Ut)).filter((function(t){return e(t).is(":visible")}))
if(0!==s.length){var r=s.indexOf(n.target)
38===n.which&&r>0&&r--,40===n.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===n.which){var a=i.querySelector(Ht)
e(a).trigger("focus")}e(this).trigger("click")}}},o(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Vt}},{key:"DefaultType",get:function(){return Yt}}]),t}()
e(document).on(It.KEYDOWN_DATA_API,Ht,zt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API,xt,zt._dataApiKeydownHandler).on(It.CLICK_DATA_API+" "+It.KEYUP_DATA_API,zt._clearMenus).on(It.CLICK_DATA_API,Ht,(function(t){t.preventDefault(),t.stopPropagation(),zt._jQueryInterface.call(e(this),"toggle")})).on(It.CLICK_DATA_API,Rt,(function(t){t.stopPropagation()})),e.fn[Ct]=zt._jQueryInterface,e.fn[Ct].Constructor=zt,e.fn[Ct].noConflict=function(){return e.fn[Ct]=Dt,zt._jQueryInterface}
var Xt="modal",$t="bs.modal",Gt=".bs.modal",Jt=e.fn.modal,Zt={backdrop:!0,keyboard:!0,focus:!0,show:!0},te={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},ee={HIDE:"hide.bs.modal",HIDE_PREVENTED:"hidePrevented.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},ne="modal-dialog-scrollable",ie="modal-scrollbar-measure",oe="modal-backdrop",se="modal-open",re="fade",ae="show",le="modal-static",ce=".modal-dialog",he=".modal-body",ue='[data-toggle="modal"]',fe='[data-dismiss="modal"]',de=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ge=".sticky-top",_e=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(ce),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=t.prototype
return n.toggle=function(t){return this._isShown?this.hide():this.show(t)},n.show=function(t){var n=this
if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass(re)&&(this._isTransitioning=!0)
var i=e.Event(ee.SHOW,{relatedTarget:t})
e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(ee.CLICK_DISMISS,fe,(function(t){return n.hide(t)})),e(this._dialog).on(ee.MOUSEDOWN_DISMISS,(function(){e(n._element).one(ee.MOUSEUP_DISMISS,(function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return n._showElement(t)})))}},n.hide=function(t){var n=this
if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=e.Event(ee.HIDE)
if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1
var o=e(this._element).hasClass(re)
if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(ee.FOCUSIN),e(this._element).removeClass(ae),e(this._element).off(ee.CLICK_DISMISS),e(this._dialog).off(ee.MOUSEDOWN_DISMISS),o){var s=h.getTransitionDurationFromElement(this._element)
e(this._element).one(h.TRANSITION_END,(function(t){return n._hideModal(t)})).emulateTransitionEnd(s)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return e(t).off(Gt)})),e(document).off(ee.FOCUSIN),e.removeData(this._element,$t),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(t){return t=a({},Zt,{},t),h.typeCheckConfig(Xt,t,te),t},n._triggerBackdropTransition=function(){var t=this
if("static"===this._config.backdrop){var n=e.Event(ee.HIDE_PREVENTED)
if(e(this._element).trigger(n),n.defaultPrevented)return
this._element.classList.add(le)
var i=h.getTransitionDurationFromElement(this._element)
e(this._element).one(h.TRANSITION_END,(function(){t._element.classList.remove(le)})).emulateTransitionEnd(i),this._element.focus()}else this.hide()},n._showElement=function(t){var n=this,i=e(this._element).hasClass(re),o=this._dialog?this._dialog.querySelector(he):null
this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),e(this._dialog).hasClass(ne)&&o?o.scrollTop=0:this._element.scrollTop=0,i&&h.reflow(this._element),e(this._element).addClass(ae),this._config.focus&&this._enforceFocus()
var s=e.Event(ee.SHOWN,{relatedTarget:t}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(s)}
if(i){var a=h.getTransitionDurationFromElement(this._dialog)
e(this._dialog).one(h.TRANSITION_END,r).emulateTransitionEnd(a)}else r()},n._enforceFocus=function(){var t=this
e(document).off(ee.FOCUSIN).on(ee.FOCUSIN,(function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()}))},n._setEscapeEvent=function(){var t=this
this._isShown&&this._config.keyboard?e(this._element).on(ee.KEYDOWN_DISMISS,(function(e){27===e.which&&t._triggerBackdropTransition()})):this._isShown||e(this._element).off(ee.KEYDOWN_DISMISS)},n._setResizeEvent=function(){var t=this
this._isShown?e(window).on(ee.RESIZE,(function(e){return t.handleUpdate(e)})):e(window).off(ee.RESIZE)},n._hideModal=function(){var t=this
this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop((function(){e(document.body).removeClass(se),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(ee.HIDDEN)}))},n._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(t){var n=this,i=e(this._element).hasClass(re)?re:""
if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=oe,i&&this._backdrop.classList.add(i),e(this._backdrop).appendTo(document.body),e(this._element).on(ee.CLICK_DISMISS,(function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&n._triggerBackdropTransition()})),i&&h.reflow(this._backdrop),e(this._backdrop).addClass(ae),!t)return
if(!i)return void t()
var o=h.getTransitionDurationFromElement(this._backdrop)
e(this._backdrop).one(h.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(ae)
var s=function(){n._removeBackdrop(),t&&t()}
if(e(this._element).hasClass(re)){var r=h.getTransitionDurationFromElement(this._backdrop)
e(this._backdrop).one(h.TRANSITION_END,s).emulateTransitionEnd(r)}else s()}else t&&t()},n._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight
!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var t=document.body.getBoundingClientRect()
this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var t=this
if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(de)),i=[].slice.call(document.querySelectorAll(ge))
e(n).each((function(n,i){var o=i.style.paddingRight,s=e(i).css("padding-right")
e(i).data("padding-right",o).css("padding-right",parseFloat(s)+t._scrollbarWidth+"px")})),e(i).each((function(n,i){var o=i.style.marginRight,s=e(i).css("margin-right")
e(i).data("margin-right",o).css("margin-right",parseFloat(s)-t._scrollbarWidth+"px")}))
var o=document.body.style.paddingRight,s=e(document.body).css("padding-right")
e(document.body).data("padding-right",o).css("padding-right",parseFloat(s)+this._scrollbarWidth+"px")}e(document.body).addClass(se)},n._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(de))
e(t).each((function(t,n){var i=e(n).data("padding-right")
e(n).removeData("padding-right"),n.style.paddingRight=i||""}))
var n=[].slice.call(document.querySelectorAll(""+ge))
e(n).each((function(t,n){var i=e(n).data("margin-right")
void 0!==i&&e(n).css("margin-right",i).removeData("margin-right")}))
var i=e(document.body).data("padding-right")
e(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var t=document.createElement("div")
t.className=ie,document.body.appendChild(t)
var e=t.getBoundingClientRect().width-t.clientWidth
return document.body.removeChild(t),e},t._jQueryInterface=function(n,i){return this.each((function(){var o=e(this).data($t),s=a({},Zt,{},e(this).data(),{},"object"==typeof n&&n?n:{})
if(o||(o=new t(this,s),e(this).data($t,o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"')
o[n](i)}else s.show&&o.show(i)}))},o(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Zt}}]),t}()
e(document).on(ee.CLICK_DATA_API,ue,(function(t){var n,i=this,o=h.getSelectorFromElement(this)
o&&(n=document.querySelector(o))
var s=e(n).data($t)?"toggle":a({},e(n).data(),{},e(this).data())
"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault()
var r=e(n).one(ee.SHOW,(function(t){t.isDefaultPrevented()||r.one(ee.HIDDEN,(function(){e(i).is(":visible")&&i.focus()}))}))
_e._jQueryInterface.call(e(n),s,this)})),e.fn.modal=_e._jQueryInterface,e.fn.modal.Constructor=_e,e.fn.modal.noConflict=function(){return e.fn.modal=Jt,_e._jQueryInterface}
var me=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],pe={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},ve=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Ee=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i
function be(t,e,n){if(0===t.length)return t
if(n&&"function"==typeof n)return n(t)
for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),s=[].slice.call(i.body.querySelectorAll("*")),r=function(t,n){var i=s[t],r=i.nodeName.toLowerCase()
if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue"
var a=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[r]||[])
a.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase()
if(-1!==e.indexOf(n))return-1===me.indexOf(n)||Boolean(t.nodeValue.match(ve)||t.nodeValue.match(Ee))
for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,s=i.length;o<s;o++)if(n.match(i[o]))return!0
return!1})(t,l)||i.removeAttribute(t.nodeName)}))},a=0,l=s.length;a<l;a++)r(a)
return i.body.innerHTML}var ye="tooltip",Ce="bs.tooltip",Te=".bs.tooltip",Se=e.fn.tooltip,De=new RegExp("(^|\\s)bs-tooltip\\S+","g"),we=["sanitize","whiteList","sanitizeFn"],Ie={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Ae={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Ne={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:pe,popperConfig:null},Oe="show",ke="out",Pe={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},Le="fade",je="show",He=".tooltip-inner",Re=".arrow",xe="hover",Fe="focus",Ue="click",We="manual",qe=function(){function t(t,e){if(void 0===n)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)")
this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var i=t.prototype
return i.enable=function(){this._isEnabled=!0},i.disable=function(){this._isEnabled=!1},i.toggleEnabled=function(){this._isEnabled=!this._isEnabled},i.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n)
i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass(je))return void this._leave(null,this)
this._enter(null,this)}},i.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},i.show=function(){var t=this
if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements")
var i=e.Event(this.constructor.Event.SHOW)
if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i)
var o=h.findShadowRoot(this.element),s=e.contains(null!==o?o:this.element.ownerDocument.documentElement,this.element)
if(i.isDefaultPrevented()||!s)return
var r=this.getTipElement(),a=h.getUID(this.constructor.NAME)
r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&e(r).addClass(Le)
var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,c=this._getAttachment(l)
this.addAttachmentClass(c)
var u=this._getContainer()
e(r).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(r).appendTo(u),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,this._getPopperConfig(c)),e(r).addClass(je),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop)
var f=function(){t.config.animation&&t._fixTransition()
var n=t._hoverState
t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),n===ke&&t._leave(null,t)}
if(e(this.tip).hasClass(Le)){var d=h.getTransitionDurationFromElement(this.tip)
e(this.tip).one(h.TRANSITION_END,f).emulateTransitionEnd(d)}else f()}},i.hide=function(t){var n=this,i=this.getTipElement(),o=e.Event(this.constructor.Event.HIDE),s=function(){n._hoverState!==Oe&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}
if(e(this.element).trigger(o),!o.isDefaultPrevented()){if(e(i).removeClass(je),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger[Ue]=!1,this._activeTrigger[Fe]=!1,this._activeTrigger[xe]=!1,e(this.tip).hasClass(Le)){var r=h.getTransitionDurationFromElement(i)
e(i).one(h.TRANSITION_END,s).emulateTransitionEnd(r)}else s()
this._hoverState=""}},i.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},i.isWithContent=function(){return Boolean(this.getTitle())},i.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},i.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},i.setContent=function(){var t=this.getTipElement()
this.setElementContent(e(t.querySelectorAll(He)),this.getTitle()),e(t).removeClass(Le+" "+je)},i.setElementContent=function(t,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=be(n,this.config.whiteList,this.config.sanitizeFn)),t.html(n)):t.text(n):this.config.html?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text())},i.getTitle=function(){var t=this.element.getAttribute("data-original-title")
return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},i._getPopperConfig=function(t){var e=this
return a({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Re},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},{},this.config.popperConfig)},i._getOffset=function(){var t=this,e={}
return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=a({},e.offsets,{},t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},i._getContainer=function(){return!1===this.config.container?document.body:h.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},i._getAttachment=function(t){return Ae[t.toUpperCase()]},i._setListeners=function(){var t=this
this.config.trigger.split(" ").forEach((function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}))
else if(n!==We){var i=n===xe?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o=n===xe?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT
e(t.element).on(i,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},e(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=a({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},i._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},i._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?Fe:xe]=!0),e(n.getTipElement()).hasClass(je)||n._hoverState===Oe?n._hoverState=Oe:(clearTimeout(n._timeout),n._hoverState=Oe,n.config.delay&&n.config.delay.show?n._timeout=setTimeout((function(){n._hoverState===Oe&&n.show()}),n.config.delay.show):n.show())},i._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?Fe:xe]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=ke,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout((function(){n._hoverState===ke&&n.hide()}),n.config.delay.hide):n.hide())},i._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0
return!1},i._getConfig=function(t){var n=e(this.element).data()
return Object.keys(n).forEach((function(t){-1!==we.indexOf(t)&&delete n[t]})),"number"==typeof(t=a({},this.constructor.Default,{},n,{},"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),h.typeCheckConfig(ye,t,this.constructor.DefaultType),t.sanitize&&(t.template=be(t.template,t.whiteList,t.sanitizeFn)),t},i._getDelegateConfig=function(){var t={}
if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e])
return t},i._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(De)
null!==n&&n.length&&t.removeClass(n.join(""))},i._handlePopperPlacementChange=function(t){var e=t.instance
this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},i._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation
null===t.getAttribute("x-placement")&&(e(t).removeClass(Le),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data(Ce),o="object"==typeof n&&n
if((i||!/dispose|hide/.test(n))&&(i||(i=new t(this,o),e(this).data(Ce,i)),"string"==typeof n)){if(void 0===i[n])throw new TypeError('No method named "'+n+'"')
i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Ne}},{key:"NAME",get:function(){return ye}},{key:"DATA_KEY",get:function(){return Ce}},{key:"Event",get:function(){return Pe}},{key:"EVENT_KEY",get:function(){return Te}},{key:"DefaultType",get:function(){return Ie}}]),t}()
e.fn.tooltip=qe._jQueryInterface,e.fn.tooltip.Constructor=qe,e.fn.tooltip.noConflict=function(){return e.fn.tooltip=Se,qe._jQueryInterface}
var Me="popover",Ke="bs.popover",Qe=".bs.popover",Be=e.fn.popover,Ve=new RegExp("(^|\\s)bs-popover\\S+","g"),Ye=a({},qe.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),ze=a({},qe.DefaultType,{content:"(string|element|function)"}),Xe="fade",$e="show",Ge=".popover-header",Je=".popover-body",Ze={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},tn=function(t){var n,i
function s(){return t.apply(this,arguments)||this}i=t,(n=s).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i
var r=s.prototype
return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},r.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},r.setContent=function(){var t=e(this.getTipElement())
this.setElementContent(t.find(Ge),this.getTitle())
var n=this._getContent()
"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(Je),n),t.removeClass(Xe+" "+$e)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(Ve)
null!==n&&n.length>0&&t.removeClass(n.join(""))},s._jQueryInterface=function(t){return this.each((function(){var n=e(this).data(Ke),i="object"==typeof t?t:null
if((n||!/dispose|hide/.test(t))&&(n||(n=new s(this,i),e(this).data(Ke,n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"')
n[t]()}}))},o(s,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Ye}},{key:"NAME",get:function(){return Me}},{key:"DATA_KEY",get:function(){return Ke}},{key:"Event",get:function(){return Ze}},{key:"EVENT_KEY",get:function(){return Qe}},{key:"DefaultType",get:function(){return ze}}]),s}(qe)
e.fn.popover=tn._jQueryInterface,e.fn.popover.Constructor=tn,e.fn.popover.noConflict=function(){return e.fn.popover=Be,tn._jQueryInterface}
var en="scrollspy",nn="bs.scrollspy",on="."+nn,sn=e.fn[en],rn={offset:10,method:"auto",target:""},an={offset:"number",method:"string",target:"(string|element)"},ln={ACTIVATE:"activate"+on,SCROLL:"scroll"+on,LOAD_DATA_API:"load.bs.scrollspy.data-api"},cn="dropdown-item",hn="active",un='[data-spy="scroll"]',fn=".nav, .list-group",dn=".nav-link",gn=".nav-item",_n=".list-group-item",mn=".dropdown",pn=".dropdown-item",vn=".dropdown-toggle",En="offset",bn="position",yn=function(){function t(t,n){var i=this
this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+dn+","+this._config.target+" "+_n+","+this._config.target+" "+pn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(ln.SCROLL,(function(t){return i._process(t)})),this.refresh(),this._process()}var n=t.prototype
return n.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?En:bn,i="auto"===this._config.method?n:this._config.method,o=i===bn?this._getScrollTop():0
this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var n,s=h.getSelectorFromElement(t)
if(s&&(n=document.querySelector(s)),n){var r=n.getBoundingClientRect()
if(r.width||r.height)return[e(n)[i]().top+o,s]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},n.dispose=function(){e.removeData(this._element,nn),e(this._scrollElement).off(on),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(t){if("string"!=typeof(t=a({},rn,{},"object"==typeof t&&t?t:{})).target){var n=e(t.target).attr("id")
n||(n=h.getUID(en),e(t.target).attr("id",n)),t.target="#"+n}return h.typeCheckConfig(en,t,an),t},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight()
if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1]
this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear()
for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},n._activate=function(t){this._activeTarget=t,this._clear()
var n=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),i=e([].slice.call(document.querySelectorAll(n.join(","))))
i.hasClass(cn)?(i.closest(mn).find(vn).addClass(hn),i.addClass(hn)):(i.addClass(hn),i.parents(fn).prev(dn+", "+_n).addClass(hn),i.parents(fn).prev(gn).children(dn).addClass(hn)),e(this._scrollElement).trigger(ln.ACTIVATE,{relatedTarget:t})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains(hn)})).forEach((function(t){return t.classList.remove(hn)}))},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data(nn)
if(i||(i=new t(this,"object"==typeof n&&n),e(this).data(nn,i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"')
i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return rn}}]),t}()
e(window).on(ln.LOAD_DATA_API,(function(){for(var t=[].slice.call(document.querySelectorAll(un)),n=t.length;n--;){var i=e(t[n])
yn._jQueryInterface.call(i,i.data())}})),e.fn[en]=yn._jQueryInterface,e.fn[en].Constructor=yn,e.fn[en].noConflict=function(){return e.fn[en]=sn,yn._jQueryInterface}
var Cn="bs.tab",Tn=e.fn.tab,Sn={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},Dn="dropdown-menu",wn="active",In="disabled",An="fade",Nn="show",On=".dropdown",kn=".nav, .list-group",Pn=".active",Ln="> li > .active",jn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Hn=".dropdown-toggle",Rn="> .dropdown-menu .active",xn=function(){function t(t){this._element=t}var n=t.prototype
return n.show=function(){var t=this
if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(wn)||e(this._element).hasClass(In))){var n,i,o=e(this._element).closest(kn)[0],s=h.getSelectorFromElement(this._element)
if(o){var r="UL"===o.nodeName||"OL"===o.nodeName?Ln:Pn
i=(i=e.makeArray(e(o).find(r)))[i.length-1]}var a=e.Event(Sn.HIDE,{relatedTarget:this._element}),l=e.Event(Sn.SHOW,{relatedTarget:i})
if(i&&e(i).trigger(a),e(this._element).trigger(l),!l.isDefaultPrevented()&&!a.isDefaultPrevented()){s&&(n=document.querySelector(s)),this._activate(this._element,o)
var c=function(){var n=e.Event(Sn.HIDDEN,{relatedTarget:t._element}),o=e.Event(Sn.SHOWN,{relatedTarget:i})
e(i).trigger(n),e(t._element).trigger(o)}
n?this._activate(n,n.parentNode,c):c()}}},n.dispose=function(){e.removeData(this._element,Cn),this._element=null},n._activate=function(t,n,i){var o=this,s=(!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?e(n).children(Pn):e(n).find(Ln))[0],r=i&&s&&e(s).hasClass(An),a=function(){return o._transitionComplete(t,s,i)}
if(s&&r){var l=h.getTransitionDurationFromElement(s)
e(s).removeClass(Nn).one(h.TRANSITION_END,a).emulateTransitionEnd(l)}else a()},n._transitionComplete=function(t,n,i){if(n){e(n).removeClass(wn)
var o=e(n.parentNode).find(Rn)[0]
o&&e(o).removeClass(wn),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(wn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),h.reflow(t),t.classList.contains(An)&&t.classList.add(Nn),t.parentNode&&e(t.parentNode).hasClass(Dn)){var s=e(t).closest(On)[0]
if(s){var r=[].slice.call(s.querySelectorAll(Hn))
e(r).addClass(wn)}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data(Cn)
if(o||(o=new t(this),i.data(Cn,o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"')
o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),t}()
e(document).on(Sn.CLICK_DATA_API,jn,(function(t){t.preventDefault(),xn._jQueryInterface.call(e(this),"show")})),e.fn.tab=xn._jQueryInterface,e.fn.tab.Constructor=xn,e.fn.tab.noConflict=function(){return e.fn.tab=Tn,xn._jQueryInterface}
var Fn="toast",Un="bs.toast",Wn=e.fn.toast,qn={CLICK_DISMISS:"click.dismiss.bs.toast",HIDE:"hide.bs.toast",HIDDEN:"hidden.bs.toast",SHOW:"show.bs.toast",SHOWN:"shown.bs.toast"},Mn="fade",Kn="hide",Qn="show",Bn="showing",Vn={animation:"boolean",autohide:"boolean",delay:"number"},Yn={animation:!0,autohide:!0,delay:500},zn='[data-dismiss="toast"]',Xn=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var n=t.prototype
return n.show=function(){var t=this,n=e.Event(qn.SHOW)
if(e(this._element).trigger(n),!n.isDefaultPrevented()){this._config.animation&&this._element.classList.add(Mn)
var i=function(){t._element.classList.remove(Bn),t._element.classList.add(Qn),e(t._element).trigger(qn.SHOWN),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))}
if(this._element.classList.remove(Kn),h.reflow(this._element),this._element.classList.add(Bn),this._config.animation){var o=h.getTransitionDurationFromElement(this._element)
e(this._element).one(h.TRANSITION_END,i).emulateTransitionEnd(o)}else i()}},n.hide=function(){if(this._element.classList.contains(Qn)){var t=e.Event(qn.HIDE)
e(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},n.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Qn)&&this._element.classList.remove(Qn),e(this._element).off(qn.CLICK_DISMISS),e.removeData(this._element,Un),this._element=null,this._config=null},n._getConfig=function(t){return t=a({},Yn,{},e(this._element).data(),{},"object"==typeof t&&t?t:{}),h.typeCheckConfig(Fn,t,this.constructor.DefaultType),t},n._setListeners=function(){var t=this
e(this._element).on(qn.CLICK_DISMISS,zn,(function(){return t.hide()}))},n._close=function(){var t=this,n=function(){t._element.classList.add(Kn),e(t._element).trigger(qn.HIDDEN)}
if(this._element.classList.remove(Qn),this._config.animation){var i=h.getTransitionDurationFromElement(this._element)
e(this._element).one(h.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data(Un)
if(o||(o=new t(this,"object"==typeof n&&n),i.data(Un,o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"')
o[n](this)}}))},o(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return Vn}},{key:"Default",get:function(){return Yn}}]),t}()
e.fn.toast=Xn._jQueryInterface,e.fn.toast.Constructor=Xn,e.fn.toast.noConflict=function(){return e.fn.toast=Wn,Xn._jQueryInterface},t.Alert=p,t.Button=k,t.Carousel=rt,t.Collapse=yt,t.Dropdown=zt,t.Modal=_e,t.Popover=tn,t.Scrollspy=yn,t.Tab=xn,t.Toast=Xn,t.Tooltip=qe,t.Util=h,Object.defineProperty(t,"__esModule",{value:!0})}))
