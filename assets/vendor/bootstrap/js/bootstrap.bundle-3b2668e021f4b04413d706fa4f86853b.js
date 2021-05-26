/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e((t=t||self).bootstrap={},t.jQuery)})(this,(function(t,e){"use strict"
function n(t,e){for(var n=0;n<e.length;n++){var i=e[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t)
e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{}
e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e=e&&e.hasOwnProperty("default")?e.default:e
var a="transitionend"
function l(t){var n=this,i=!1
return e(this).one(c.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||c.triggerTransitionEnd(n)}),t),this}var c={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t))
return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target")
if(!e||"#"===e){var n=t.getAttribute("href")
e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(i){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0
var n=e(t).css("transition-duration"),i=e(t).css("transition-delay"),o=parseFloat(n),r=parseFloat(i)
return o||r?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger(a)},supportsTransitionEnd:function(){return Boolean(a)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&c.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase())
if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null
if("function"==typeof t.getRootNode){var e=t.getRootNode()
return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if(void 0===e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.")
var t=e.fn.jquery.split(" ")[0].split(".")
if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}}
c.jQueryDetection(),e.fn.emulateTransitionEnd=l,e.event.special[c.TRANSITION_END]={bindType:a,delegateType:a,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}
var u="bs.alert",h=e.fn.alert,f={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},d="alert",p="fade",m="show",g=function(){function t(t){this._element=t}var n=t.prototype
return n.close=function(t){var e=this._element
t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,u),this._element=null},n._getRootElement=function(t){var n=c.getSelectorFromElement(t),i=!1
return n&&(i=document.querySelector(n)),i||(i=e(t).closest("."+d)[0]),i},n._triggerCloseEvent=function(t){var n=e.Event(f.CLOSE)
return e(t).trigger(n),n},n._removeElement=function(t){var n=this
if(e(t).removeClass(m),e(t).hasClass(p)){var i=c.getTransitionDurationFromElement(t)
e(t).one(c.TRANSITION_END,(function(e){return n._destroyElement(t,e)})).emulateTransitionEnd(i)}else this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger(f.CLOSED).remove()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data(u)
o||(o=new t(this),i.data(u,o)),"close"===n&&o[n](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),t}()
e(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),e.fn.alert=g._jQueryInterface,e.fn.alert.Constructor=g,e.fn.alert.noConflict=function(){return e.fn.alert=h,g._jQueryInterface}
var _="bs.button",v=e.fn.button,b="active",y="btn",E="focus",w='[data-toggle^="button"]',T='[data-toggle="buttons"]',C='[data-toggle="button"]',S='[data-toggle="buttons"] .btn',D='input:not([type="hidden"])',I=".active",A=".btn",O={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api",LOAD_DATA_API:"load.bs.button.data-api"},N=function(){function t(t){this._element=t}var n=t.prototype
return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest(T)[0]
if(i){var o=this._element.querySelector(D)
if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains(b))t=!1
else{var r=i.querySelector(I)
r&&e(r).removeClass(b)}else"checkbox"===o.type?"LABEL"===this._element.tagName&&o.checked===this._element.classList.contains(b)&&(t=!1):t=!1
t&&(o.checked=!this._element.classList.contains(b),e(o).trigger("change")),o.focus(),n=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(b)),t&&e(this._element).toggleClass(b))},n.dispose=function(){e.removeData(this._element,_),this._element=null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data(_)
i||(i=new t(this),e(this).data(_,i)),"toggle"===n&&i[n]()}))},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),t}()
e(document).on(O.CLICK_DATA_API,w,(function(t){var n=t.target
if(e(n).hasClass(y)||(n=e(n).closest(A)[0]),!n||n.hasAttribute("disabled")||n.classList.contains("disabled"))t.preventDefault()
else{var i=n.querySelector(D)
if(i&&(i.hasAttribute("disabled")||i.classList.contains("disabled")))return void t.preventDefault()
N._jQueryInterface.call(e(n),"toggle")}})).on(O.FOCUS_BLUR_DATA_API,w,(function(t){var n=e(t.target).closest(A)[0]
e(n).toggleClass(E,/^focus(in)?$/.test(t.type))})),e(window).on(O.LOAD_DATA_API,(function(){for(var t=[].slice.call(document.querySelectorAll(S)),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(D)
o.checked||o.hasAttribute("checked")?i.classList.add(b):i.classList.remove(b)}for(var r=0,s=(t=[].slice.call(document.querySelectorAll(C))).length;r<s;r++){var a=t[r]
"true"===a.getAttribute("aria-pressed")?a.classList.add(b):a.classList.remove(b)}})),e.fn.button=N._jQueryInterface,e.fn.button.Constructor=N,e.fn.button.noConflict=function(){return e.fn.button=v,N._jQueryInterface}
var k="carousel",L="bs.carousel",P=".bs.carousel",x=e.fn[k],j={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},H={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},R="next",F="prev",M="left",W="right",U={SLIDE:"slide.bs.carousel",SLID:"slid.bs.carousel",KEYDOWN:"keydown.bs.carousel",MOUSEENTER:"mouseenter.bs.carousel",MOUSELEAVE:"mouseleave.bs.carousel",TOUCHSTART:"touchstart.bs.carousel",TOUCHMOVE:"touchmove.bs.carousel",TOUCHEND:"touchend.bs.carousel",POINTERDOWN:"pointerdown.bs.carousel",POINTERUP:"pointerup.bs.carousel",DRAG_START:"dragstart.bs.carousel",LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},B="carousel",q="active",K="slide",Q="carousel-item-right",V="carousel-item-left",Y="carousel-item-next",z="carousel-item-prev",X="pointer-event",G=".active",$=".active.carousel-item",J=".carousel-item",Z=".carousel-item img",tt=".carousel-item-next, .carousel-item-prev",et=".carousel-indicators",nt="[data-slide], [data-slide-to]",it='[data-ride="carousel"]',ot={TOUCH:"touch",PEN:"pen"},rt=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(et),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=t.prototype
return n.next=function(){this._isSliding||this._slide(R)},n.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide(F)},n.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(tt)&&(c.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(t){var n=this
this._activeElement=this._element.querySelector($)
var i=this._getItemIndex(this._activeElement)
if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(U.SLID,(function(){return n.to(t)}))
else{if(i===t)return this.pause(),void this.cycle()
var o=t>i?R:F
this._slide(o,this._items[t])}},n.dispose=function(){e(this._element).off(P),e.removeData(this._element,L),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(t){return t=s({},j,{},t),c.typeCheckConfig(k,t,H),t},n._handleSwipe=function(){var t=Math.abs(this.touchDeltaX)
if(!(t<=40)){var e=t/this.touchDeltaX
this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},n._addEventListeners=function(){var t=this
this._config.keyboard&&e(this._element).on(U.KEYDOWN,(function(e){return t._keydown(e)})),"hover"===this._config.pause&&e(this._element).on(U.MOUSEENTER,(function(e){return t.pause(e)})).on(U.MOUSELEAVE,(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var t=this
if(this._touchSupported){var n=function(e){t._pointerEvent&&ot[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&ot[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))}
e(this._element.querySelectorAll(Z)).on(U.DRAG_START,(function(t){return t.preventDefault()})),this._pointerEvent?(e(this._element).on(U.POINTERDOWN,(function(t){return n(t)})),e(this._element).on(U.POINTERUP,(function(t){return i(t)})),this._element.classList.add(X)):(e(this._element).on(U.TOUCHSTART,(function(t){return n(t)})),e(this._element).on(U.TOUCHMOVE,(function(e){return function(e){e.originalEvent.touches&&e.originalEvent.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),e(this._element).on(U.TOUCHEND,(function(t){return i(t)})))}},n._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev()
break
case 39:t.preventDefault(),this.next()}},n._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(J)):[],this._items.indexOf(t)},n._getItemByDirection=function(t,e){var n=t===R,i=t===F,o=this._getItemIndex(e),r=this._items.length-1
if((i&&0===o||n&&o===r)&&!this._config.wrap)return e
var s=(o+(t===F?-1:1))%this._items.length
return-1===s?this._items[this._items.length-1]:this._items[s]},n._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector($)),r=e.Event(U.SLIDE,{relatedTarget:t,direction:n,from:o,to:i})
return e(this._element).trigger(r),r},n._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(G))
e(n).removeClass(q)
var i=this._indicatorsElement.children[this._getItemIndex(t)]
i&&e(i).addClass(q)}},n._slide=function(t,n){var i,o,r,s=this,a=this._element.querySelector($),l=this._getItemIndex(a),u=n||a&&this._getItemByDirection(t,a),h=this._getItemIndex(u),f=Boolean(this._interval)
if(t===R?(i=V,o=Y,r=M):(i=Q,o=z,r=W),u&&e(u).hasClass(q))this._isSliding=!1
else if(!this._triggerSlideEvent(u,r).isDefaultPrevented()&&a&&u){this._isSliding=!0,f&&this.pause(),this._setActiveIndicatorElement(u)
var d=e.Event(U.SLID,{relatedTarget:u,direction:r,from:l,to:h})
if(e(this._element).hasClass(K)){e(u).addClass(o),c.reflow(u),e(a).addClass(i),e(u).addClass(i)
var p=parseInt(u.getAttribute("data-interval"),10)
p?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=p):this._config.interval=this._config.defaultInterval||this._config.interval
var m=c.getTransitionDurationFromElement(a)
e(a).one(c.TRANSITION_END,(function(){e(u).removeClass(i+" "+o).addClass(q),e(a).removeClass(q+" "+o+" "+i),s._isSliding=!1,setTimeout((function(){return e(s._element).trigger(d)}),0)})).emulateTransitionEnd(m)}else e(a).removeClass(q),e(u).addClass(q),this._isSliding=!1,e(this._element).trigger(d)
f&&this.cycle()}},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data(L),o=s({},j,{},e(this).data())
"object"==typeof n&&(o=s({},o,{},n))
var r="string"==typeof n?n:o.slide
if(i||(i=new t(this,o),e(this).data(L,i)),"number"==typeof n)i.to(n)
else if("string"==typeof r){if(void 0===i[r])throw new TypeError('No method named "'+r+'"')
i[r]()}else o.interval&&o.ride&&(i.pause(),i.cycle())}))},t._dataApiClickHandler=function(n){var i=c.getSelectorFromElement(this)
if(i){var o=e(i)[0]
if(o&&e(o).hasClass(B)){var r=s({},e(o).data(),{},e(this).data()),a=this.getAttribute("data-slide-to")
a&&(r.interval=!1),t._jQueryInterface.call(e(o),r),a&&e(o).data(L).to(a),n.preventDefault()}}},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return j}}]),t}()
e(document).on(U.CLICK_DATA_API,nt,rt._dataApiClickHandler),e(window).on(U.LOAD_DATA_API,(function(){for(var t=[].slice.call(document.querySelectorAll(it)),n=0,i=t.length;n<i;n++){var o=e(t[n])
rt._jQueryInterface.call(o,o.data())}})),e.fn[k]=rt._jQueryInterface,e.fn[k].Constructor=rt,e.fn[k].noConflict=function(){return e.fn[k]=x,rt._jQueryInterface}
var st="collapse",at="bs.collapse",lt=e.fn[st],ct={toggle:!0,parent:""},ut={toggle:"boolean",parent:"(string|element)"},ht={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},ft="show",dt="collapse",pt="collapsing",mt="collapsed",gt="width",_t="height",vt=".show, .collapsing",bt='[data-toggle="collapse"]',yt=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'))
for(var n=[].slice.call(document.querySelectorAll(bt)),i=0,o=n.length;i<o;i++){var r=n[i],s=c.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter((function(e){return e===t}))
null!==s&&a.length>0&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=t.prototype
return n.toggle=function(){e(this._element).hasClass(ft)?this.hide():this.show()},n.show=function(){var n,i,o=this
if(!this._isTransitioning&&!e(this._element).hasClass(ft)&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(vt)).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains(dt)}))).length&&(n=null),!(n&&(i=e(n).not(this._selector).data(at))&&i._isTransitioning))){var r=e.Event(ht.SHOW)
if(e(this._element).trigger(r),!r.isDefaultPrevented()){n&&(t._jQueryInterface.call(e(n).not(this._selector),"hide"),i||e(n).data(at,null))
var s=this._getDimension()
e(this._element).removeClass(dt).addClass(pt),this._element.style[s]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(mt).attr("aria-expanded",!0),this.setTransitioning(!0)
var a="scroll"+(s[0].toUpperCase()+s.slice(1)),l=c.getTransitionDurationFromElement(this._element)
e(this._element).one(c.TRANSITION_END,(function(){e(o._element).removeClass(pt).addClass(dt).addClass(ft),o._element.style[s]="",o.setTransitioning(!1),e(o._element).trigger(ht.SHOWN)})).emulateTransitionEnd(l),this._element.style[s]=this._element[a]+"px"}}},n.hide=function(){var t=this
if(!this._isTransitioning&&e(this._element).hasClass(ft)){var n=e.Event(ht.HIDE)
if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension()
this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",c.reflow(this._element),e(this._element).addClass(pt).removeClass(dt).removeClass(ft)
var o=this._triggerArray.length
if(o>0)for(var r=0;r<o;r++){var s=this._triggerArray[r],a=c.getSelectorFromElement(s)
if(null!==a)e([].slice.call(document.querySelectorAll(a))).hasClass(ft)||e(s).addClass(mt).attr("aria-expanded",!1)}this.setTransitioning(!0)
this._element.style[i]=""
var l=c.getTransitionDurationFromElement(this._element)
e(this._element).one(c.TRANSITION_END,(function(){t.setTransitioning(!1),e(t._element).removeClass(pt).addClass(dt).trigger(ht.HIDDEN)})).emulateTransitionEnd(l)}}},n.setTransitioning=function(t){this._isTransitioning=t},n.dispose=function(){e.removeData(this._element,at),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(t){return(t=s({},ct,{},t)).toggle=Boolean(t.toggle),c.typeCheckConfig(st,t,ut),t},n._getDimension=function(){return e(this._element).hasClass(gt)?gt:_t},n._getParent=function(){var n,i=this
c.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent)
var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',r=[].slice.call(n.querySelectorAll(o))
return e(r).each((function(e,n){i._addAriaAndCollapsedClass(t._getTargetFromElement(n),[n])})),n},n._addAriaAndCollapsedClass=function(t,n){var i=e(t).hasClass(ft)
n.length&&e(n).toggleClass(mt,!i).attr("aria-expanded",i)},t._getTargetFromElement=function(t){var e=c.getSelectorFromElement(t)
return e?document.querySelector(e):null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data(at),r=s({},ct,{},i.data(),{},"object"==typeof n&&n?n:{})
if(!o&&r.toggle&&/show|hide/.test(n)&&(r.toggle=!1),o||(o=new t(this,r),i.data(at,o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"')
o[n]()}}))},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return ct}}]),t}()
e(document).on(ht.CLICK_DATA_API,bt,(function(t){"A"===t.currentTarget.tagName&&t.preventDefault()
var n=e(this),i=c.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i))
e(o).each((function(){var t=e(this),i=t.data(at)?"toggle":n.data()
yt._jQueryInterface.call(t,i)}))})),e.fn[st]=yt._jQueryInterface,e.fn[st].Constructor=yt,e.fn[st].noConflict=function(){return e.fn[st]=lt,yt._jQueryInterface}

;/**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.16.0
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
var Et="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,wt=function(){for(var t=["Edge","Trident","Firefox"],e=0;e<t.length;e+=1)if(Et&&navigator.userAgent.indexOf(t[e])>=0)return 1
return 0}()
var Tt=Et&&window.Promise?function(t){var e=!1
return function(){e||(e=!0,window.Promise.resolve().then((function(){e=!1,t()})))}}:function(t){var e=!1
return function(){e||(e=!0,setTimeout((function(){e=!1,t()}),wt))}}
function Ct(t){return t&&"[object Function]"==={}.toString.call(t)}function St(t,e){if(1!==t.nodeType)return[]
var n=t.ownerDocument.defaultView.getComputedStyle(t,null)
return e?n[e]:n}function Dt(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function It(t){if(!t)return document.body
switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body
case"#document":return t.body}var e=St(t),n=e.overflow,i=e.overflowX,o=e.overflowY
return/(auto|scroll|overlay)/.test(n+o+i)?t:It(Dt(t))}function At(t){return t&&t.referenceNode?t.referenceNode:t}var Ot=Et&&!(!window.MSInputMethodContext||!document.documentMode),Nt=Et&&/MSIE 10/.test(navigator.userAgent)
function kt(t){return 11===t?Ot:10===t?Nt:Ot||Nt}function Lt(t){if(!t)return document.documentElement
for(var e=kt(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent
var i=n&&n.nodeName
return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===St(n,"position")?Lt(n):n:t?t.ownerDocument.documentElement:document.documentElement}function Pt(t){return null!==t.parentNode?Pt(t.parentNode):t}function xt(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement
var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,o=n?e:t,r=document.createRange()
r.setStart(i,0),r.setEnd(o,0)
var s,a,l=r.commonAncestorContainer
if(t!==l&&e!==l||i.contains(o))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&Lt(s.firstElementChild)!==s?Lt(l):l
var c=Pt(t)
return c.host?xt(c.host,e):xt(t,Pt(e).host)}function jt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===e?"scrollTop":"scrollLeft",i=t.nodeName
if("BODY"===i||"HTML"===i){var o=t.ownerDocument.documentElement,r=t.ownerDocument.scrollingElement||o
return r[n]}return t[n]}function Ht(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=jt(e,"top"),o=jt(e,"left"),r=n?-1:1
return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}function Rt(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom"
return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+i+"Width"],10)}function Ft(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],kt(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function Mt(t){var e=t.body,n=t.documentElement,i=kt(10)&&getComputedStyle(n)
return{height:Ft("Height",e,n,i),width:Ft("Width",e,n,i)}}var Wt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Ut=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Bt=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},qt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}
function Kt(t){return qt({},t,{right:t.left+t.width,bottom:t.top+t.height})}function Qt(t){var e={}
try{if(kt(10)){e=t.getBoundingClientRect()
var n=jt(t,"top"),i=jt(t,"left")
e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(h){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r="HTML"===t.nodeName?Mt(t.ownerDocument):{},s=r.width||t.clientWidth||o.width,a=r.height||t.clientHeight||o.height,l=t.offsetWidth-s,c=t.offsetHeight-a
if(l||c){var u=St(t)
l-=Rt(u,"x"),c-=Rt(u,"y"),o.width-=l,o.height-=c}return Kt(o)}function Vt(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=kt(10),o="HTML"===e.nodeName,r=Qt(t),s=Qt(e),a=It(t),l=St(e),c=parseFloat(l.borderTopWidth,10),u=parseFloat(l.borderLeftWidth,10)
n&&o&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0))
var h=Kt({top:r.top-s.top-c,left:r.left-s.left-u,width:r.width,height:r.height})
if(h.marginTop=0,h.marginLeft=0,!i&&o){var f=parseFloat(l.marginTop,10),d=parseFloat(l.marginLeft,10)
h.top-=c-f,h.bottom-=c-f,h.left-=u-d,h.right-=u-d,h.marginTop=f,h.marginLeft=d}return(i&&!n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(h=Ht(h,e)),h}function Yt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=Vt(t,n),o=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),s=e?0:jt(n),a=e?0:jt(n,"left"),l={top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:o,height:r}
return Kt(l)}function zt(t){var e=t.nodeName
if("BODY"===e||"HTML"===e)return!1
if("fixed"===St(t,"position"))return!0
var n=Dt(t)
return!!n&&zt(n)}function Xt(t){if(!t||!t.parentElement||kt())return document.documentElement
for(var e=t.parentElement;e&&"none"===St(e,"transform");)e=e.parentElement
return e||document.documentElement}function Gt(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},s=o?Xt(t):xt(t,At(e))
if("viewport"===i)r=Yt(s,o)
else{var a=void 0
"scrollParent"===i?"BODY"===(a=It(Dt(e))).nodeName&&(a=t.ownerDocument.documentElement):a="window"===i?t.ownerDocument.documentElement:i
var l=Vt(a,s,o)
if("HTML"!==a.nodeName||zt(s))r=l
else{var c=Mt(t.ownerDocument),u=c.height,h=c.width
r.top+=l.top-l.marginTop,r.bottom=u+l.top,r.left+=l.left-l.marginLeft,r.right=h+l.left}}var f="number"==typeof(n=n||0)
return r.left+=f?n:n.left||0,r.top+=f?n:n.top||0,r.right-=f?n:n.right||0,r.bottom-=f?n:n.bottom||0,r}function $t(t){return t.width*t.height}function Jt(t,e,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0
if(-1===t.indexOf("auto"))return t
var s=Gt(n,i,r,o),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map((function(t){return qt({key:t},a[t],{area:$t(a[t])})})).sort((function(t,e){return e.area-t.area})),c=l.filter((function(t){var e=t.width,i=t.height
return e>=n.clientWidth&&i>=n.clientHeight})),u=c.length>0?c[0].key:l[0].key,h=t.split("-")[1]
return u+(h?"-"+h:"")}function Zt(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=i?Xt(e):xt(e,At(n))
return Vt(n,o,i)}function te(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),i=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0)
return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function ee(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"}
return t.replace(/left|right|bottom|top/g,(function(t){return e[t]}))}function ne(t,e,n){n=n.split("-")[0]
var i=te(t),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",l=r?"height":"width",c=r?"width":"height"
return o[s]=e[s]+e[l]/2-i[l]/2,o[a]=n===a?e[a]-i[c]:e[ee(a)],o}function ie(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function oe(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex((function(t){return t[e]===n}))
var i=ie(t,(function(t){return t[e]===n}))
return t.indexOf(i)}(t,"name",n))).forEach((function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!")
var n=t.function||t.fn
t.enabled&&Ct(n)&&(e.offsets.popper=Kt(e.offsets.popper),e.offsets.reference=Kt(e.offsets.reference),e=n(e,t))})),e}function re(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}}
t.offsets.reference=Zt(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=Jt(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=ne(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=oe(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function se(t,e){return t.some((function(t){var n=t.name
return t.enabled&&n===e}))}function ae(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var o=e[i],r=o?""+o+n:t
if(void 0!==document.body.style[r])return r}return null}function le(){return this.state.isDestroyed=!0,se(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[ae("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function ce(t){var e=t.ownerDocument
return e?e.defaultView:window}function ue(t,e,n,i){var o="BODY"===t.nodeName,r=o?t.ownerDocument.defaultView:t
r.addEventListener(e,n,{passive:!0}),o||ue(It(r.parentNode),e,n,i),i.push(r)}function he(t,e,n,i){n.updateBound=i,ce(t).addEventListener("resize",n.updateBound,{passive:!0})
var o=It(t)
return ue(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function fe(){this.state.eventsEnabled||(this.state=he(this.reference,this.options,this.state,this.scheduleUpdate))}function de(){var t,e
this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,ce(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function pe(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function me(t,e){Object.keys(e).forEach((function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&pe(e[n])&&(i="px"),t.style[n]=e[n]+i}))}var ge=Et&&/Firefox/i.test(navigator.userAgent)
function _e(t,e,n){var i=ie(t,(function(t){return t.name===e})),o=!!i&&t.some((function(t){return t.name===n&&t.enabled&&t.order<i.order}))
if(!o){var r="`"+e+"`",s="`"+n+"`"
console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var ve=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],be=ve.slice(3)
function ye(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=be.indexOf(t),i=be.slice(n+1).concat(be.slice(0,n))
return e?i.reverse():i}var Ee="flip",we="clockwise",Te="counterclockwise"
function Ce(t,e,n,i){var o=[0,0],r=-1!==["right","left"].indexOf(i),s=t.split(/(\+|\-)/).map((function(t){return t.trim()})),a=s.indexOf(ie(s,(function(t){return-1!==t.search(/,|\s/)})))
s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.")
var l=/\s*,\s*|\s+/,c=-1!==a?[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))]:[s]
return(c=c.map((function(t,i){var o=(1===i?!r:r)?"height":"width",s=!1
return t.reduce((function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,s=!0,t):s?(t[t.length-1]+=e,s=!1,t):t.concat(e)}),[]).map((function(t){return function(t,e,n,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],s=o[2]
if(!r)return t
if(0===s.indexOf("%")){var a=void 0
switch(s){case"%p":a=n
break
case"%":case"%r":default:a=i}return Kt(a)[e]/100*r}if("vh"===s||"vw"===s)return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r
return r}(t,o,e,n)}))}))).forEach((function(t,e){t.forEach((function(n,i){pe(n)&&(o[e]+=n*("-"===t[i-1]?-1:1))}))})),o}var Se={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1]
if(i){var o=t.offsets,r=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",u={start:Bt({},l,r[l]),end:Bt({},l,r[l]+r[c]-s[c])}
t.offsets.popper=qt({},s,u[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,o=t.offsets,r=o.popper,s=o.reference,a=i.split("-")[0],l=void 0
return l=pe(+n)?[+n,0]:Ce(n,r,s,a),"left"===a?(r.top+=l[0],r.left-=l[1]):"right"===a?(r.top+=l[0],r.left+=l[1]):"top"===a?(r.left+=l[0],r.top-=l[1]):"bottom"===a&&(r.left+=l[0],r.top+=l[1]),t.popper=r,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||Lt(t.instance.popper)
t.instance.reference===n&&(n=Lt(n))
var i=ae("transform"),o=t.instance.popper.style,r=o.top,s=o.left,a=o[i]
o.top="",o.left="",o[i]=""
var l=Gt(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed)
o.top=r,o.left=s,o[i]=a,e.boundaries=l
var c=e.priority,u=t.offsets.popper,h={primary:function(t){var n=u[t]
return u[t]<l[t]&&!e.escapeWithReference&&(n=Math.max(u[t],l[t])),Bt({},t,n)},secondary:function(t){var n="right"===t?"left":"top",i=u[n]
return u[t]>l[t]&&!e.escapeWithReference&&(i=Math.min(u[n],l[t]-("right"===t?u.width:u.height))),Bt({},n,i)}}
return c.forEach((function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary"
u=qt({},u,h[e](t))})),t.offsets.popper=u,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,o=t.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height"
return n[a]<r(i[l])&&(t.offsets.popper[l]=r(i[l])-n[c]),n[l]>r(i[a])&&(t.offsets.popper[l]=r(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n
if(!_e(t.instance.modifiers,"arrow","keepTogether"))return t
var i=e.element
if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t
var o=t.placement.split("-")[0],r=t.offsets,s=r.popper,a=r.reference,l=-1!==["left","right"].indexOf(o),c=l?"height":"width",u=l?"Top":"Left",h=u.toLowerCase(),f=l?"left":"top",d=l?"bottom":"right",p=te(i)[c]
a[d]-p<s[h]&&(t.offsets.popper[h]-=s[h]-(a[d]-p)),a[h]+p>s[d]&&(t.offsets.popper[h]+=a[h]+p-s[d]),t.offsets.popper=Kt(t.offsets.popper)
var m=a[h]+a[c]/2-p/2,g=St(t.instance.popper),_=parseFloat(g["margin"+u],10),v=parseFloat(g["border"+u+"Width"],10),b=m-t.offsets.popper[h]-_-v
return b=Math.max(Math.min(s[c]-p,b),0),t.arrowElement=i,t.offsets.arrow=(Bt(n={},h,Math.round(b)),Bt(n,f,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(se(t.instance.modifiers,"inner"))return t
if(t.flipped&&t.placement===t.originalPlacement)return t
var n=Gt(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split("-")[0],o=ee(i),r=t.placement.split("-")[1]||"",s=[]
switch(e.behavior){case Ee:s=[i,o]
break
case we:s=ye(i)
break
case Te:s=ye(i,!0)
break
default:s=e.behavior}return s.forEach((function(a,l){if(i!==a||s.length===l+1)return t
i=t.placement.split("-")[0],o=ee(i)
var c=t.offsets.popper,u=t.offsets.reference,h=Math.floor,f="left"===i&&h(c.right)>h(u.left)||"right"===i&&h(c.left)<h(u.right)||"top"===i&&h(c.bottom)>h(u.top)||"bottom"===i&&h(c.top)<h(u.bottom),d=h(c.left)<h(n.left),p=h(c.right)>h(n.right),m=h(c.top)<h(n.top),g=h(c.bottom)>h(n.bottom),_="left"===i&&d||"right"===i&&p||"top"===i&&m||"bottom"===i&&g,v=-1!==["top","bottom"].indexOf(i),b=!!e.flipVariations&&(v&&"start"===r&&d||v&&"end"===r&&p||!v&&"start"===r&&m||!v&&"end"===r&&g),y=!!e.flipVariationsByContent&&(v&&"start"===r&&p||v&&"end"===r&&d||!v&&"start"===r&&g||!v&&"end"===r&&m),E=b||y;(f||_||E)&&(t.flipped=!0,(f||_)&&(i=s[l+1]),E&&(r=function(t){return"end"===t?"start":"start"===t?"end":t}(r)),t.placement=i+(r?"-"+r:""),t.offsets.popper=qt({},t.offsets.popper,ne(t.instance.popper,t.offsets.reference,t.placement)),t=oe(t.instance.modifiers,t,"flip"))})),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,o=i.popper,r=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n)
return o[s?"left":"top"]=r[n]-(a?o[s?"width":"height"]:0),t.placement=ee(e),t.offsets.popper=Kt(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!_e(t.instance.modifiers,"hide","preventOverflow"))return t
var e=t.offsets.reference,n=ie(t.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries
if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t
t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t
t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,o=t.offsets.popper,r=ie(t.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration
void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!")
var s=void 0!==r?r:e.gpuAcceleration,a=Lt(t.instance.popper),l=Qt(a),c={position:o.position},u=function(t,e){var n=t.offsets,i=n.popper,o=n.reference,r=Math.round,s=Math.floor,a=function(t){return t},l=r(o.width),c=r(i.width),u=-1!==["left","right"].indexOf(t.placement),h=-1!==t.placement.indexOf("-"),f=e?u||h||l%2==c%2?r:s:a,d=e?r:a
return{left:f(l%2==1&&c%2==1&&!h&&e?i.left-1:i.left),top:d(i.top),bottom:d(i.bottom),right:f(i.right)}}(t,window.devicePixelRatio<2||!ge),h="bottom"===n?"top":"bottom",f="right"===i?"left":"right",d=ae("transform"),p=void 0,m=void 0
if(m="bottom"===h?"HTML"===a.nodeName?-a.clientHeight+u.bottom:-l.height+u.bottom:u.top,p="right"===f?"HTML"===a.nodeName?-a.clientWidth+u.right:-l.width+u.right:u.left,s&&d)c[d]="translate3d("+p+"px, "+m+"px, 0)",c[h]=0,c[f]=0,c.willChange="transform"
else{var g="bottom"===h?-1:1,_="right"===f?-1:1
c[h]=m*g,c[f]=p*_,c.willChange=h+", "+f}var v={"x-placement":t.placement}
return t.attributes=qt({},v,t.attributes),t.styles=qt({},c,t.styles),t.arrowStyles=qt({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n
return me(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach((function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)})),t.arrowElement&&Object.keys(t.arrowStyles).length&&me(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,o){var r=Zt(o,e,t,n.positionFixed),s=Jt(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding)
return e.setAttribute("x-placement",s),me(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},De=function(){function t(e,n){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
Wt(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=Tt(this.update.bind(this)),this.options=qt({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(qt({},t.Defaults.modifiers,o.modifiers)).forEach((function(e){i.options.modifiers[e]=qt({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(t){return qt({name:t},i.options.modifiers[t])})).sort((function(t,e){return t.order-e.order})),this.modifiers.forEach((function(t){t.enabled&&Ct(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)})),this.update()
var r=this.options.eventsEnabled
r&&this.enableEventListeners(),this.state.eventsEnabled=r}return Ut(t,[{key:"update",value:function(){return re.call(this)}},{key:"destroy",value:function(){return le.call(this)}},{key:"enableEventListeners",value:function(){return fe.call(this)}},{key:"disableEventListeners",value:function(){return de.call(this)}}]),t}()
De.Utils=("undefined"!=typeof window?window:global).PopperUtils,De.placements=ve,De.Defaults=Se
var Ie="dropdown",Ae="bs.dropdown",Oe=".bs.dropdown",Ne=e.fn[Ie],ke=new RegExp("38|40|27"),Le={HIDE:"hide.bs.dropdown",HIDDEN:"hidden.bs.dropdown",SHOW:"show.bs.dropdown",SHOWN:"shown.bs.dropdown",CLICK:"click.bs.dropdown",CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},Pe="disabled",xe="show",je="dropup",He="dropright",Re="dropleft",Fe="dropdown-menu-right",Me="position-static",We='[data-toggle="dropdown"]',Ue=".dropdown form",Be=".dropdown-menu",qe=".navbar-nav",Ke=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qe="top-start",Ve="top-end",Ye="bottom-start",ze="bottom-end",Xe="right-start",Ge="left-start",$e={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},Je={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},Ze=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var n=t.prototype
return n.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(Pe)){var n=e(this._menu).hasClass(xe)
t._clearMenus(),n||this.show(!0)}},n.show=function(n){if(void 0===n&&(n=!1),!(this._element.disabled||e(this._element).hasClass(Pe)||e(this._menu).hasClass(xe))){var i={relatedTarget:this._element},o=e.Event(Le.SHOW,i),r=t._getParentFromElement(this._element)
if(e(r).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar&&n){if(void 0===De)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)")
var s=this._element
"parent"===this._config.reference?s=r:c.isElement(this._config.reference)&&(s=this._config.reference,void 0!==this._config.reference.jquery&&(s=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(r).addClass(Me),this._popper=new De(s,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(r).closest(qe).length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(xe),e(r).toggleClass(xe).trigger(e.Event(Le.SHOWN,i))}}},n.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass(Pe)&&e(this._menu).hasClass(xe)){var n={relatedTarget:this._element},i=e.Event(Le.HIDE,n),o=t._getParentFromElement(this._element)
e(o).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),e(this._menu).toggleClass(xe),e(o).toggleClass(xe).trigger(e.Event(Le.HIDDEN,n)))}},n.dispose=function(){e.removeData(this._element,Ae),e(this._element).off(Oe),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},n.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},n._addEventListeners=function(){var t=this
e(this._element).on(Le.CLICK,(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},n._getConfig=function(t){return t=s({},this.constructor.Default,{},e(this._element).data(),{},t),c.typeCheckConfig(Ie,t,this.constructor.DefaultType),t},n._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element)
e&&(this._menu=e.querySelector(Be))}return this._menu},n._getPlacement=function(){var t=e(this._element.parentNode),n=Ye
return t.hasClass(je)?(n=Qe,e(this._menu).hasClass(Fe)&&(n=Ve)):t.hasClass(He)?n=Xe:t.hasClass(Re)?n=Ge:e(this._menu).hasClass(Fe)&&(n=ze),n},n._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},n._getOffset=function(){var t=this,e={}
return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=s({},e.offsets,{},t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},n._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}
return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),s({},t,{},this._config.popperConfig)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data(Ae)
if(i||(i=new t(this,"object"==typeof n?n:null),e(this).data(Ae,i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"')
i[n]()}}))},t._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll(We)),o=0,r=i.length;o<r;o++){var s=t._getParentFromElement(i[o]),a=e(i[o]).data(Ae),l={relatedTarget:i[o]}
if(n&&"click"===n.type&&(l.clickEvent=n),a){var c=a._menu
if(e(s).hasClass(xe)&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&e.contains(s,n.target))){var u=e.Event(Le.HIDE,l)
e(s).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),i[o].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),e(c).removeClass(xe),e(s).removeClass(xe).trigger(e.Event(Le.HIDDEN,l)))}}}},t._getParentFromElement=function(t){var e,n=c.getSelectorFromElement(t)
return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(n){if(!(/input|textarea/i.test(n.target.tagName)?32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||e(n.target).closest(Be).length):!ke.test(n.which))&&(n.preventDefault(),n.stopPropagation(),!this.disabled&&!e(this).hasClass(Pe))){var i=t._getParentFromElement(this),o=e(i).hasClass(xe)
if(o||27!==n.which)if(o&&(!o||27!==n.which&&32!==n.which)){var r=[].slice.call(i.querySelectorAll(Ke)).filter((function(t){return e(t).is(":visible")}))
if(0!==r.length){var s=r.indexOf(n.target)
38===n.which&&s>0&&s--,40===n.which&&s<r.length-1&&s++,s<0&&(s=0),r[s].focus()}}else{if(27===n.which){var a=i.querySelector(We)
e(a).trigger("focus")}e(this).trigger("click")}}},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return $e}},{key:"DefaultType",get:function(){return Je}}]),t}()
e(document).on(Le.KEYDOWN_DATA_API,We,Ze._dataApiKeydownHandler).on(Le.KEYDOWN_DATA_API,Be,Ze._dataApiKeydownHandler).on(Le.CLICK_DATA_API+" "+Le.KEYUP_DATA_API,Ze._clearMenus).on(Le.CLICK_DATA_API,We,(function(t){t.preventDefault(),t.stopPropagation(),Ze._jQueryInterface.call(e(this),"toggle")})).on(Le.CLICK_DATA_API,Ue,(function(t){t.stopPropagation()})),e.fn[Ie]=Ze._jQueryInterface,e.fn[Ie].Constructor=Ze,e.fn[Ie].noConflict=function(){return e.fn[Ie]=Ne,Ze._jQueryInterface}
var tn="modal",en="bs.modal",nn=".bs.modal",on=e.fn.modal,rn={backdrop:!0,keyboard:!0,focus:!0,show:!0},sn={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},an={HIDE:"hide.bs.modal",HIDE_PREVENTED:"hidePrevented.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},ln="modal-dialog-scrollable",cn="modal-scrollbar-measure",un="modal-backdrop",hn="modal-open",fn="fade",dn="show",pn="modal-static",mn=".modal-dialog",gn=".modal-body",_n='[data-toggle="modal"]',vn='[data-dismiss="modal"]',bn=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",yn=".sticky-top",En=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(mn),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=t.prototype
return n.toggle=function(t){return this._isShown?this.hide():this.show(t)},n.show=function(t){var n=this
if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass(fn)&&(this._isTransitioning=!0)
var i=e.Event(an.SHOW,{relatedTarget:t})
e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(an.CLICK_DISMISS,vn,(function(t){return n.hide(t)})),e(this._dialog).on(an.MOUSEDOWN_DISMISS,(function(){e(n._element).one(an.MOUSEUP_DISMISS,(function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return n._showElement(t)})))}},n.hide=function(t){var n=this
if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=e.Event(an.HIDE)
if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1
var o=e(this._element).hasClass(fn)
if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(an.FOCUSIN),e(this._element).removeClass(dn),e(this._element).off(an.CLICK_DISMISS),e(this._dialog).off(an.MOUSEDOWN_DISMISS),o){var r=c.getTransitionDurationFromElement(this._element)
e(this._element).one(c.TRANSITION_END,(function(t){return n._hideModal(t)})).emulateTransitionEnd(r)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return e(t).off(nn)})),e(document).off(an.FOCUSIN),e.removeData(this._element,en),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(t){return t=s({},rn,{},t),c.typeCheckConfig(tn,t,sn),t},n._triggerBackdropTransition=function(){var t=this
if("static"===this._config.backdrop){var n=e.Event(an.HIDE_PREVENTED)
if(e(this._element).trigger(n),n.defaultPrevented)return
this._element.classList.add(pn)
var i=c.getTransitionDurationFromElement(this._element)
e(this._element).one(c.TRANSITION_END,(function(){t._element.classList.remove(pn)})).emulateTransitionEnd(i),this._element.focus()}else this.hide()},n._showElement=function(t){var n=this,i=e(this._element).hasClass(fn),o=this._dialog?this._dialog.querySelector(gn):null
this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),e(this._dialog).hasClass(ln)&&o?o.scrollTop=0:this._element.scrollTop=0,i&&c.reflow(this._element),e(this._element).addClass(dn),this._config.focus&&this._enforceFocus()
var r=e.Event(an.SHOWN,{relatedTarget:t}),s=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(r)}
if(i){var a=c.getTransitionDurationFromElement(this._dialog)
e(this._dialog).one(c.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},n._enforceFocus=function(){var t=this
e(document).off(an.FOCUSIN).on(an.FOCUSIN,(function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()}))},n._setEscapeEvent=function(){var t=this
this._isShown&&this._config.keyboard?e(this._element).on(an.KEYDOWN_DISMISS,(function(e){27===e.which&&t._triggerBackdropTransition()})):this._isShown||e(this._element).off(an.KEYDOWN_DISMISS)},n._setResizeEvent=function(){var t=this
this._isShown?e(window).on(an.RESIZE,(function(e){return t.handleUpdate(e)})):e(window).off(an.RESIZE)},n._hideModal=function(){var t=this
this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop((function(){e(document.body).removeClass(hn),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(an.HIDDEN)}))},n._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(t){var n=this,i=e(this._element).hasClass(fn)?fn:""
if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=un,i&&this._backdrop.classList.add(i),e(this._backdrop).appendTo(document.body),e(this._element).on(an.CLICK_DISMISS,(function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&n._triggerBackdropTransition()})),i&&c.reflow(this._backdrop),e(this._backdrop).addClass(dn),!t)return
if(!i)return void t()
var o=c.getTransitionDurationFromElement(this._backdrop)
e(this._backdrop).one(c.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(dn)
var r=function(){n._removeBackdrop(),t&&t()}
if(e(this._element).hasClass(fn)){var s=c.getTransitionDurationFromElement(this._backdrop)
e(this._backdrop).one(c.TRANSITION_END,r).emulateTransitionEnd(s)}else r()}else t&&t()},n._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight
!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var t=document.body.getBoundingClientRect()
this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var t=this
if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(bn)),i=[].slice.call(document.querySelectorAll(yn))
e(n).each((function(n,i){var o=i.style.paddingRight,r=e(i).css("padding-right")
e(i).data("padding-right",o).css("padding-right",parseFloat(r)+t._scrollbarWidth+"px")})),e(i).each((function(n,i){var o=i.style.marginRight,r=e(i).css("margin-right")
e(i).data("margin-right",o).css("margin-right",parseFloat(r)-t._scrollbarWidth+"px")}))
var o=document.body.style.paddingRight,r=e(document.body).css("padding-right")
e(document.body).data("padding-right",o).css("padding-right",parseFloat(r)+this._scrollbarWidth+"px")}e(document.body).addClass(hn)},n._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(bn))
e(t).each((function(t,n){var i=e(n).data("padding-right")
e(n).removeData("padding-right"),n.style.paddingRight=i||""}))
var n=[].slice.call(document.querySelectorAll(""+yn))
e(n).each((function(t,n){var i=e(n).data("margin-right")
void 0!==i&&e(n).css("margin-right",i).removeData("margin-right")}))
var i=e(document.body).data("padding-right")
e(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var t=document.createElement("div")
t.className=cn,document.body.appendChild(t)
var e=t.getBoundingClientRect().width-t.clientWidth
return document.body.removeChild(t),e},t._jQueryInterface=function(n,i){return this.each((function(){var o=e(this).data(en),r=s({},rn,{},e(this).data(),{},"object"==typeof n&&n?n:{})
if(o||(o=new t(this,r),e(this).data(en,o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"')
o[n](i)}else r.show&&o.show(i)}))},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return rn}}]),t}()
e(document).on(an.CLICK_DATA_API,_n,(function(t){var n,i=this,o=c.getSelectorFromElement(this)
o&&(n=document.querySelector(o))
var r=e(n).data(en)?"toggle":s({},e(n).data(),{},e(this).data())
"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault()
var a=e(n).one(an.SHOW,(function(t){t.isDefaultPrevented()||a.one(an.HIDDEN,(function(){e(i).is(":visible")&&i.focus()}))}))
En._jQueryInterface.call(e(n),r,this)})),e.fn.modal=En._jQueryInterface,e.fn.modal.Constructor=En,e.fn.modal.noConflict=function(){return e.fn.modal=on,En._jQueryInterface}
var wn=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Tn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Cn=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Sn=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i
function Dn(t,e,n){if(0===t.length)return t
if(n&&"function"==typeof n)return n(t)
for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),r=[].slice.call(i.body.querySelectorAll("*")),s=function(t,n){var i=r[t],s=i.nodeName.toLowerCase()
if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue"
var a=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[s]||[])
a.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase()
if(-1!==e.indexOf(n))return-1===wn.indexOf(n)||Boolean(t.nodeValue.match(Cn)||t.nodeValue.match(Sn))
for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0
return!1})(t,l)||i.removeAttribute(t.nodeName)}))},a=0,l=r.length;a<l;a++)s(a)
return i.body.innerHTML}var In="tooltip",An="bs.tooltip",On=".bs.tooltip",Nn=e.fn.tooltip,kn=new RegExp("(^|\\s)bs-tooltip\\S+","g"),Ln=["sanitize","whiteList","sanitizeFn"],Pn={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},xn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},jn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Tn,popperConfig:null},Hn="show",Rn="out",Fn={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},Mn="fade",Wn="show",Un=".tooltip-inner",Bn=".arrow",qn="hover",Kn="focus",Qn="click",Vn="manual",Yn=function(){function t(t,e){if(void 0===De)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)")
this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var n=t.prototype
return n.enable=function(){this._isEnabled=!0},n.disable=function(){this._isEnabled=!1},n.toggleEnabled=function(){this._isEnabled=!this._isEnabled},n.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n)
i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass(Wn))return void this._leave(null,this)
this._enter(null,this)}},n.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},n.show=function(){var t=this
if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements")
var n=e.Event(this.constructor.Event.SHOW)
if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(n)
var i=c.findShadowRoot(this.element),o=e.contains(null!==i?i:this.element.ownerDocument.documentElement,this.element)
if(n.isDefaultPrevented()||!o)return
var r=this.getTipElement(),s=c.getUID(this.constructor.NAME)
r.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&e(r).addClass(Mn)
var a="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,l=this._getAttachment(a)
this.addAttachmentClass(l)
var u=this._getContainer()
e(r).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(r).appendTo(u),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new De(this.element,r,this._getPopperConfig(l)),e(r).addClass(Wn),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop)
var h=function(){t.config.animation&&t._fixTransition()
var n=t._hoverState
t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),n===Rn&&t._leave(null,t)}
if(e(this.tip).hasClass(Mn)){var f=c.getTransitionDurationFromElement(this.tip)
e(this.tip).one(c.TRANSITION_END,h).emulateTransitionEnd(f)}else h()}},n.hide=function(t){var n=this,i=this.getTipElement(),o=e.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==Hn&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}
if(e(this.element).trigger(o),!o.isDefaultPrevented()){if(e(i).removeClass(Wn),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger[Qn]=!1,this._activeTrigger[Kn]=!1,this._activeTrigger[qn]=!1,e(this.tip).hasClass(Mn)){var s=c.getTransitionDurationFromElement(i)
e(i).one(c.TRANSITION_END,r).emulateTransitionEnd(s)}else r()
this._hoverState=""}},n.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},n.isWithContent=function(){return Boolean(this.getTitle())},n.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},n.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},n.setContent=function(){var t=this.getTipElement()
this.setElementContent(e(t.querySelectorAll(Un)),this.getTitle()),e(t).removeClass(Mn+" "+Wn)},n.setElementContent=function(t,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=Dn(n,this.config.whiteList,this.config.sanitizeFn)),t.html(n)):t.text(n):this.config.html?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text())},n.getTitle=function(){var t=this.element.getAttribute("data-original-title")
return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},n._getPopperConfig=function(t){var e=this
return s({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Bn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},{},this.config.popperConfig)},n._getOffset=function(){var t=this,e={}
return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=s({},e.offsets,{},t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},n._getContainer=function(){return!1===this.config.container?document.body:c.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},n._getAttachment=function(t){return xn[t.toUpperCase()]},n._setListeners=function(){var t=this
this.config.trigger.split(" ").forEach((function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}))
else if(n!==Vn){var i=n===qn?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o=n===qn?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT
e(t.element).on(i,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},e(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=s({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},n._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},n._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?Kn:qn]=!0),e(n.getTipElement()).hasClass(Wn)||n._hoverState===Hn?n._hoverState=Hn:(clearTimeout(n._timeout),n._hoverState=Hn,n.config.delay&&n.config.delay.show?n._timeout=setTimeout((function(){n._hoverState===Hn&&n.show()}),n.config.delay.show):n.show())},n._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?Kn:qn]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=Rn,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout((function(){n._hoverState===Rn&&n.hide()}),n.config.delay.hide):n.hide())},n._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0
return!1},n._getConfig=function(t){var n=e(this.element).data()
return Object.keys(n).forEach((function(t){-1!==Ln.indexOf(t)&&delete n[t]})),"number"==typeof(t=s({},this.constructor.Default,{},n,{},"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),c.typeCheckConfig(In,t,this.constructor.DefaultType),t.sanitize&&(t.template=Dn(t.template,t.whiteList,t.sanitizeFn)),t},n._getDelegateConfig=function(){var t={}
if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e])
return t},n._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(kn)
null!==n&&n.length&&t.removeClass(n.join(""))},n._handlePopperPlacementChange=function(t){var e=t.instance
this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},n._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation
null===t.getAttribute("x-placement")&&(e(t).removeClass(Mn),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data(An),o="object"==typeof n&&n
if((i||!/dispose|hide/.test(n))&&(i||(i=new t(this,o),e(this).data(An,i)),"string"==typeof n)){if(void 0===i[n])throw new TypeError('No method named "'+n+'"')
i[n]()}}))},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return jn}},{key:"NAME",get:function(){return In}},{key:"DATA_KEY",get:function(){return An}},{key:"Event",get:function(){return Fn}},{key:"EVENT_KEY",get:function(){return On}},{key:"DefaultType",get:function(){return Pn}}]),t}()
e.fn.tooltip=Yn._jQueryInterface,e.fn.tooltip.Constructor=Yn,e.fn.tooltip.noConflict=function(){return e.fn.tooltip=Nn,Yn._jQueryInterface}
var zn="popover",Xn="bs.popover",Gn=".bs.popover",$n=e.fn.popover,Jn=new RegExp("(^|\\s)bs-popover\\S+","g"),Zn=s({},Yn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),ti=s({},Yn.DefaultType,{content:"(string|element|function)"}),ei="fade",ni="show",ii=".popover-header",oi=".popover-body",ri={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},si=function(t){var n,o
function r(){return t.apply(this,arguments)||this}o=t,(n=r).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o
var s=r.prototype
return s.isWithContent=function(){return this.getTitle()||this._getContent()},s.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},s.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},s.setContent=function(){var t=e(this.getTipElement())
this.setElementContent(t.find(ii),this.getTitle())
var n=this._getContent()
"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(oi),n),t.removeClass(ei+" "+ni)},s._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},s._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(Jn)
null!==n&&n.length>0&&t.removeClass(n.join(""))},r._jQueryInterface=function(t){return this.each((function(){var n=e(this).data(Xn),i="object"==typeof t?t:null
if((n||!/dispose|hide/.test(t))&&(n||(n=new r(this,i),e(this).data(Xn,n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"')
n[t]()}}))},i(r,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Zn}},{key:"NAME",get:function(){return zn}},{key:"DATA_KEY",get:function(){return Xn}},{key:"Event",get:function(){return ri}},{key:"EVENT_KEY",get:function(){return Gn}},{key:"DefaultType",get:function(){return ti}}]),r}(Yn)
e.fn.popover=si._jQueryInterface,e.fn.popover.Constructor=si,e.fn.popover.noConflict=function(){return e.fn.popover=$n,si._jQueryInterface}
var ai="scrollspy",li="bs.scrollspy",ci="."+li,ui=e.fn[ai],hi={offset:10,method:"auto",target:""},fi={offset:"number",method:"string",target:"(string|element)"},di={ACTIVATE:"activate"+ci,SCROLL:"scroll"+ci,LOAD_DATA_API:"load.bs.scrollspy.data-api"},pi="dropdown-item",mi="active",gi='[data-spy="scroll"]',_i=".nav, .list-group",vi=".nav-link",bi=".nav-item",yi=".list-group-item",Ei=".dropdown",wi=".dropdown-item",Ti=".dropdown-toggle",Ci="offset",Si="position",Di=function(){function t(t,n){var i=this
this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+vi+","+this._config.target+" "+yi+","+this._config.target+" "+wi,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(di.SCROLL,(function(t){return i._process(t)})),this.refresh(),this._process()}var n=t.prototype
return n.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?Ci:Si,i="auto"===this._config.method?n:this._config.method,o=i===Si?this._getScrollTop():0
this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var n,r=c.getSelectorFromElement(t)
if(r&&(n=document.querySelector(r)),n){var s=n.getBoundingClientRect()
if(s.width||s.height)return[e(n)[i]().top+o,r]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},n.dispose=function(){e.removeData(this._element,li),e(this._scrollElement).off(ci),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(t){if("string"!=typeof(t=s({},hi,{},"object"==typeof t&&t?t:{})).target){var n=e(t.target).attr("id")
n||(n=c.getUID(ai),e(t.target).attr("id",n)),t.target="#"+n}return c.typeCheckConfig(ai,t,fi),t},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight()
if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1]
this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear()
for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},n._activate=function(t){this._activeTarget=t,this._clear()
var n=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),i=e([].slice.call(document.querySelectorAll(n.join(","))))
i.hasClass(pi)?(i.closest(Ei).find(Ti).addClass(mi),i.addClass(mi)):(i.addClass(mi),i.parents(_i).prev(vi+", "+yi).addClass(mi),i.parents(_i).prev(bi).children(vi).addClass(mi)),e(this._scrollElement).trigger(di.ACTIVATE,{relatedTarget:t})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains(mi)})).forEach((function(t){return t.classList.remove(mi)}))},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data(li)
if(i||(i=new t(this,"object"==typeof n&&n),e(this).data(li,i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"')
i[n]()}}))},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return hi}}]),t}()
e(window).on(di.LOAD_DATA_API,(function(){for(var t=[].slice.call(document.querySelectorAll(gi)),n=t.length;n--;){var i=e(t[n])
Di._jQueryInterface.call(i,i.data())}})),e.fn[ai]=Di._jQueryInterface,e.fn[ai].Constructor=Di,e.fn[ai].noConflict=function(){return e.fn[ai]=ui,Di._jQueryInterface}
var Ii="bs.tab",Ai=e.fn.tab,Oi={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},Ni="dropdown-menu",ki="active",Li="disabled",Pi="fade",xi="show",ji=".dropdown",Hi=".nav, .list-group",Ri=".active",Fi="> li > .active",Mi='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Wi=".dropdown-toggle",Ui="> .dropdown-menu .active",Bi=function(){function t(t){this._element=t}var n=t.prototype
return n.show=function(){var t=this
if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(ki)||e(this._element).hasClass(Li))){var n,i,o=e(this._element).closest(Hi)[0],r=c.getSelectorFromElement(this._element)
if(o){var s="UL"===o.nodeName||"OL"===o.nodeName?Fi:Ri
i=(i=e.makeArray(e(o).find(s)))[i.length-1]}var a=e.Event(Oi.HIDE,{relatedTarget:this._element}),l=e.Event(Oi.SHOW,{relatedTarget:i})
if(i&&e(i).trigger(a),e(this._element).trigger(l),!l.isDefaultPrevented()&&!a.isDefaultPrevented()){r&&(n=document.querySelector(r)),this._activate(this._element,o)
var u=function(){var n=e.Event(Oi.HIDDEN,{relatedTarget:t._element}),o=e.Event(Oi.SHOWN,{relatedTarget:i})
e(i).trigger(n),e(t._element).trigger(o)}
n?this._activate(n,n.parentNode,u):u()}}},n.dispose=function(){e.removeData(this._element,Ii),this._element=null},n._activate=function(t,n,i){var o=this,r=(!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?e(n).children(Ri):e(n).find(Fi))[0],s=i&&r&&e(r).hasClass(Pi),a=function(){return o._transitionComplete(t,r,i)}
if(r&&s){var l=c.getTransitionDurationFromElement(r)
e(r).removeClass(xi).one(c.TRANSITION_END,a).emulateTransitionEnd(l)}else a()},n._transitionComplete=function(t,n,i){if(n){e(n).removeClass(ki)
var o=e(n.parentNode).find(Ui)[0]
o&&e(o).removeClass(ki),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(ki),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),c.reflow(t),t.classList.contains(Pi)&&t.classList.add(xi),t.parentNode&&e(t.parentNode).hasClass(Ni)){var r=e(t).closest(ji)[0]
if(r){var s=[].slice.call(r.querySelectorAll(Wi))
e(s).addClass(ki)}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data(Ii)
if(o||(o=new t(this),i.data(Ii,o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"')
o[n]()}}))},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),t}()
e(document).on(Oi.CLICK_DATA_API,Mi,(function(t){t.preventDefault(),Bi._jQueryInterface.call(e(this),"show")})),e.fn.tab=Bi._jQueryInterface,e.fn.tab.Constructor=Bi,e.fn.tab.noConflict=function(){return e.fn.tab=Ai,Bi._jQueryInterface}
var qi="toast",Ki="bs.toast",Qi=e.fn.toast,Vi={CLICK_DISMISS:"click.dismiss.bs.toast",HIDE:"hide.bs.toast",HIDDEN:"hidden.bs.toast",SHOW:"show.bs.toast",SHOWN:"shown.bs.toast"},Yi="fade",zi="hide",Xi="show",Gi="showing",$i={animation:"boolean",autohide:"boolean",delay:"number"},Ji={animation:!0,autohide:!0,delay:500},Zi='[data-dismiss="toast"]',to=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var n=t.prototype
return n.show=function(){var t=this,n=e.Event(Vi.SHOW)
if(e(this._element).trigger(n),!n.isDefaultPrevented()){this._config.animation&&this._element.classList.add(Yi)
var i=function(){t._element.classList.remove(Gi),t._element.classList.add(Xi),e(t._element).trigger(Vi.SHOWN),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))}
if(this._element.classList.remove(zi),c.reflow(this._element),this._element.classList.add(Gi),this._config.animation){var o=c.getTransitionDurationFromElement(this._element)
e(this._element).one(c.TRANSITION_END,i).emulateTransitionEnd(o)}else i()}},n.hide=function(){if(this._element.classList.contains(Xi)){var t=e.Event(Vi.HIDE)
e(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},n.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Xi)&&this._element.classList.remove(Xi),e(this._element).off(Vi.CLICK_DISMISS),e.removeData(this._element,Ki),this._element=null,this._config=null},n._getConfig=function(t){return t=s({},Ji,{},e(this._element).data(),{},"object"==typeof t&&t?t:{}),c.typeCheckConfig(qi,t,this.constructor.DefaultType),t},n._setListeners=function(){var t=this
e(this._element).on(Vi.CLICK_DISMISS,Zi,(function(){return t.hide()}))},n._close=function(){var t=this,n=function(){t._element.classList.add(zi),e(t._element).trigger(Vi.HIDDEN)}
if(this._element.classList.remove(Xi),this._config.animation){var i=c.getTransitionDurationFromElement(this._element)
e(this._element).one(c.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data(Ki)
if(o||(o=new t(this,"object"==typeof n&&n),i.data(Ki,o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"')
o[n](this)}}))},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return $i}},{key:"Default",get:function(){return Ji}}]),t}()
e.fn.toast=to._jQueryInterface,e.fn.toast.Constructor=to,e.fn.toast.noConflict=function(){return e.fn.toast=Qi,to._jQueryInterface},t.Alert=g,t.Button=N,t.Carousel=rt,t.Collapse=yt,t.Dropdown=Ze,t.Modal=En,t.Popover=si,t.Scrollspy=Di,t.Tab=Bi,t.Toast=to,t.Tooltip=Yn,t.Util=c,Object.defineProperty(t,"__esModule",{value:!0})}))
