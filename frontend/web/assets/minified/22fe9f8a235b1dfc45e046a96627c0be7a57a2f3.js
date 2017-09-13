/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery')}
+function($){'use strict';var version=$.fn.jquery.split(' ')[0].split('.')
if((version[0]<2&&version[1]<9)||(version[0]==1&&version[1]==9&&version[2]<1)||(version[0]>3)){throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')}}(jQuery);+function($){'use strict';function transitionEnd(){var el=document.createElement('bootstrap')
var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false}
$.fn.emulateTransitionEnd=function(duration){var called=false
var $el=this
$(this).one('bsTransitionEnd',function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()
if(!$.support.transition)return
$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);+function($){'use strict';var dismiss='[data-dismiss="alert"]'
var Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.VERSION='3.3.7'
Alert.TRANSITION_DURATION=150
Alert.prototype.close=function(e){var $this=$(this)
var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=$(selector==='#'?[]:selector)
if(e)e.preventDefault()
if(!$parent.length){$parent=$this.closest('.alert')}
$parent.trigger(e=$.Event('close.bs.alert'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.detach().trigger('closed.bs.alert').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.alert')
if(!data)$this.data('bs.alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.alert
$.fn.alert=Plugin
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function(){$.fn.alert=old
return this}
$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);+function($){'use strict';var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},Button.DEFAULTS,options)
this.isLoading=false}
Button.VERSION='3.3.7'
Button.DEFAULTS={loadingText:'loading...'}
Button.prototype.setState=function(state){var d='disabled'
var $el=this.$element
var val=$el.is('input')?'val':'html'
var data=$el.data()
state+='Text'
if(data.resetText==null)$el.data('resetText',$el[val]())
setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state])
if(state=='loadingText'){this.isLoading=true
$el.addClass(d).attr(d,d).prop(d,true)}else if(this.isLoading){this.isLoading=false
$el.removeClass(d).removeAttr(d).prop(d,false)}},this),0)}
Button.prototype.toggle=function(){var changed=true
var $parent=this.$element.closest('[data-toggle="buttons"]')
if($parent.length){var $input=this.$element.find('input')
if($input.prop('type')=='radio'){if($input.prop('checked'))changed=false
$parent.find('.active').removeClass('active')
this.$element.addClass('active')}else if($input.prop('type')=='checkbox'){if(($input.prop('checked'))!==this.$element.hasClass('active'))changed=false
this.$element.toggleClass('active')}
$input.prop('checked',this.$element.hasClass('active'))
if(changed)$input.trigger('change')}else{this.$element.attr('aria-pressed',!this.$element.hasClass('active'))
this.$element.toggleClass('active')}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.button')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
var old=$.fn.button
$.fn.button=Plugin
$.fn.button.Constructor=Button
$.fn.button.noConflict=function(){$.fn.button=old
return this}
$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target).closest('.btn')
Plugin.call($btn,'toggle')
if(!($(e.target).is('input[type="radio"], input[type="checkbox"]'))){e.preventDefault()
if($btn.is('input,button'))$btn.trigger('focus')
else $btn.find('input:visible,button:visible').first().trigger('focus')}}).on('focus.bs.button.data-api blur.bs.button.data-api','[data-toggle^="button"]',function(e){$(e.target).closest('.btn').toggleClass('focus',/^focus(in)?$/.test(e.type))})}(jQuery);+function($){'use strict';var Carousel=function(element,options){this.$element=$(element)
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.paused=null
this.sliding=null
this.interval=null
this.$active=null
this.$items=null
this.options.keyboard&&this.$element.on('keydown.bs.carousel',$.proxy(this.keydown,this))
this.options.pause=='hover'&&!('ontouchstart'in document.documentElement)&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this))}
Carousel.VERSION='3.3.7'
Carousel.TRANSITION_DURATION=600
Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true,keyboard:true}
Carousel.prototype.keydown=function(e){if(/input|textarea/i.test(e.target.tagName))return
switch(e.which){case 37:this.prev();break
case 39:this.next();break
default:return}
e.preventDefault()}
Carousel.prototype.cycle=function(e){e||(this.paused=false)
this.interval&&clearInterval(this.interval)
this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this}
Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item')
return this.$items.index(item||this.$active)}
Carousel.prototype.getItemForDirection=function(direction,active){var activeIndex=this.getItemIndex(active)
var willWrap=(direction=='prev'&&activeIndex===0)||(direction=='next'&&activeIndex==(this.$items.length-1))
if(willWrap&&!this.options.wrap)return active
var delta=direction=='prev'?-1:1
var itemIndex=(activeIndex+delta)%this.$items.length
return this.$items.eq(itemIndex)}
Carousel.prototype.to=function(pos){var that=this
var activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'))
if(pos>(this.$items.length-1)||pos<0)return
if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)})
if(activeIndex==pos)return this.pause().cycle()
return this.slide(pos>activeIndex?'next':'prev',this.$items.eq(pos))}
Carousel.prototype.pause=function(e){e||(this.paused=true)
if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end)
this.cycle(true)}
this.interval=clearInterval(this.interval)
return this}
Carousel.prototype.next=function(){if(this.sliding)return
return this.slide('next')}
Carousel.prototype.prev=function(){if(this.sliding)return
return this.slide('prev')}
Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active')
var $next=next||this.getItemForDirection(type,$active)
var isCycling=this.interval
var direction=type=='next'?'left':'right'
var that=this
if($next.hasClass('active'))return(this.sliding=false)
var relatedTarget=$next[0]
var slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
this.$element.trigger(slideEvent)
if(slideEvent.isDefaultPrevented())return
this.sliding=true
isCycling&&this.pause()
if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)])
$nextIndicator&&$nextIndicator.addClass('active')}
var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
$active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd(Carousel.TRANSITION_DURATION)}else{$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger(slidEvent)}
isCycling&&this.cycle()
return this}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.carousel')
var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option)
var action=typeof option=='string'?option:options.slide
if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.pause().cycle()})}
var old=$.fn.carousel
$.fn.carousel=Plugin
$.fn.carousel.Constructor=Carousel
$.fn.carousel.noConflict=function(){$.fn.carousel=old
return this}
var clickHandler=function(e){var href
var $this=$(this)
var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))
if(!$target.hasClass('carousel'))return
var options=$.extend({},$target.data(),$this.data())
var slideIndex=$this.attr('data-slide-to')
if(slideIndex)options.interval=false
Plugin.call($target,options)
if(slideIndex){$target.data('bs.carousel').to(slideIndex)}
e.preventDefault()}
$(document).on('click.bs.carousel.data-api','[data-slide]',clickHandler).on('click.bs.carousel.data-api','[data-slide-to]',clickHandler)
$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this)
Plugin.call($carousel,$carousel.data())})})}(jQuery);+function($){'use strict';var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},Collapse.DEFAULTS,options)
this.$trigger=$('[data-toggle="collapse"][href="#'+element.id+'"],'+'[data-toggle="collapse"][data-target="#'+element.id+'"]')
this.transitioning=null
if(this.options.parent){this.$parent=this.getParent()}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)}
if(this.options.toggle)this.toggle()}
Collapse.VERSION='3.3.7'
Collapse.TRANSITION_DURATION=350
Collapse.DEFAULTS={toggle:true}
Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'}
Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return
var activesData
var actives=this.$parent&&this.$parent.children('.panel').children('.in, .collapsing')
if(actives&&actives.length){activesData=actives.data('bs.collapse')
if(activesData&&activesData.transitioning)return}
var startEvent=$.Event('show.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
if(actives&&actives.length){Plugin.call(actives,'hide')
activesData||actives.data('bs.collapse',null)}
var dimension=this.dimension()
this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded',true)
this.$trigger.removeClass('collapsed').attr('aria-expanded',true)
this.transitioning=1
var complete=function(){this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
this.transitioning=0
this.$element.trigger('shown.bs.collapse')}
if(!$.support.transition)return complete.call(this)
var scrollSize=$.camelCase(['scroll',dimension].join('-'))
this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])}
Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return
var startEvent=$.Event('hide.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var dimension=this.dimension()
this.$element[dimension](this.$element[dimension]())[0].offsetHeight
this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded',false)
this.$trigger.addClass('collapsed').attr('aria-expanded',false)
this.transitioning=1
var complete=function(){this.transitioning=0
this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')}
if(!$.support.transition)return complete.call(this)
this.$element
[dimension](0).one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)}
Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']()}
Collapse.prototype.getParent=function(){return $(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(i,element){var $element=$(element)
this.addAriaAndCollapsedClass(getTargetFromTrigger($element),$element)},this)).end()}
Collapse.prototype.addAriaAndCollapsedClass=function($element,$trigger){var isOpen=$element.hasClass('in')
$element.attr('aria-expanded',isOpen)
$trigger.toggleClass('collapsed',!isOpen).attr('aria-expanded',isOpen)}
function getTargetFromTrigger($trigger){var href
var target=$trigger.attr('data-target')||(href=$trigger.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')
return $(target)}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.collapse')
var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data&&options.toggle&&/show|hide/.test(option))options.toggle=false
if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.collapse
$.fn.collapse=Plugin
$.fn.collapse.Constructor=Collapse
$.fn.collapse.noConflict=function(){$.fn.collapse=old
return this}
$(document).on('click.bs.collapse.data-api','[data-toggle="collapse"]',function(e){var $this=$(this)
if(!$this.attr('data-target'))e.preventDefault()
var $target=getTargetFromTrigger($this)
var data=$target.data('bs.collapse')
var option=data?'toggle':$this.data()
Plugin.call($target,option)})}(jQuery);+function($){'use strict';var backdrop='.dropdown-backdrop'
var toggle='[data-toggle="dropdown"]'
var Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)}
Dropdown.VERSION='3.3.7'
function getParent($this){var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=selector&&$(selector)
return $parent&&$parent.length?$parent:$this.parent()}
function clearMenus(e){if(e&&e.which===3)return
$(backdrop).remove()
$(toggle).each(function(){var $this=$(this)
var $parent=getParent($this)
var relatedTarget={relatedTarget:this}
if(!$parent.hasClass('open'))return
if(e&&e.type=='click'&&/input|textarea/i.test(e.target.tagName)&&$.contains($parent[0],e.target))return
$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.attr('aria-expanded','false')
$parent.removeClass('open').trigger($.Event('hidden.bs.dropdown',relatedTarget))})}
Dropdown.prototype.toggle=function(e){var $this=$(this)
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){$(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click',clearMenus)}
var relatedTarget={relatedTarget:this}
$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.trigger('focus').attr('aria-expanded','true')
$parent.toggleClass('open').trigger($.Event('shown.bs.dropdown',relatedTarget))}
return false}
Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return
var $this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
if(!isActive&&e.which!=27||isActive&&e.which==27){if(e.which==27)$parent.find(toggle).trigger('focus')
return $this.trigger('click')}
var desc=' li:not(.disabled):visible a'
var $items=$parent.find('.dropdown-menu'+desc)
if(!$items.length)return
var index=$items.index(e.target)
if(e.which==38&&index>0)index--
if(e.which==40&&index<$items.length-1)index++
if(!~index)index=0
$items.eq(index).trigger('focus')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.dropdown')
if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.dropdown
$.fn.dropdown=Plugin
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}
$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle,Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','.dropdown-menu',Dropdown.prototype.keydown)}(jQuery);+function($){'use strict';var Modal=function(element,options){this.options=options
this.$body=$(document.body)
this.$element=$(element)
this.$dialog=this.$element.find('.modal-dialog')
this.$backdrop=null
this.isShown=null
this.originalBodyPad=null
this.scrollbarWidth=0
this.ignoreBackdropClick=false
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.VERSION='3.3.7'
Modal.TRANSITION_DURATION=300
Modal.BACKDROP_TRANSITION_DURATION=150
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.checkScrollbar()
this.setScrollbar()
this.$body.addClass('modal-open')
this.escape()
this.resize()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.$dialog.on('mousedown.dismiss.bs.modal',function(){that.$element.one('mouseup.dismiss.bs.modal',function(e){if($(e.target).is(that.$element))that.ignoreBackdropClick=true})})
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(that.$body)}
that.$element.show().scrollTop(0)
that.adjustDialog()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in')
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$dialog.one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
this.resize()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal')
this.$dialog.off('mousedown.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(document!==e.target&&this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus')}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keydown.dismiss.bs.modal')}}
Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this))}else{$(window).off('resize.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.$body.removeClass('modal-open')
that.resetAdjustments()
that.resetScrollbar()
that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var that=this
var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$(document.createElement('div')).addClass('modal-backdrop '+animate).appendTo(this.$body)
this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false
return}
if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus():this.hide()},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
var callbackRemove=function(){that.removeBackdrop()
callback&&callback()}
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else if(callback){callback()}}
Modal.prototype.handleUpdate=function(){this.adjustDialog()}
Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''})}
Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''})}
Modal.prototype.checkScrollbar=function(){var fullWindowWidth=window.innerWidth
if(!fullWindowWidth){var documentElementRect=document.documentElement.getBoundingClientRect()
fullWindowWidth=documentElementRect.right-Math.abs(documentElementRect.left)}
this.bodyIsOverflowing=document.body.clientWidth<fullWindowWidth
this.scrollbarWidth=this.measureScrollbar()}
Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10)
this.originalBodyPad=document.body.style.paddingRight||''
if(this.bodyIsOverflowing)this.$body.css('padding-right',bodyPad+this.scrollbarWidth)}
Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right',this.originalBodyPad)}
Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div')
scrollDiv.className='modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth}
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
var old=$.fn.modal
$.fn.modal=Plugin
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return
$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})})
Plugin.call($target,option,this)})}(jQuery);+function($){'use strict';var Tooltip=function(element,options){this.type=null
this.options=null
this.enabled=null
this.timeout=null
this.hoverState=null
this.$element=null
this.inState=null
this.init('tooltip',element,options)}
Tooltip.VERSION='3.3.7'
Tooltip.TRANSITION_DURATION=150
Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0}}
Tooltip.prototype.init=function(type,element,options){this.enabled=true
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.$viewport=this.options.viewport&&$($.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):(this.options.viewport.selector||this.options.viewport))
this.inState={click:false,hover:false,focus:false}
if(this.$element[0]instanceof document.constructor&&!this.options.selector){throw new Error('`selector` option must be specified when initializing '+this.type+' on the window.document object!')}
var triggers=this.options.trigger.split(' ')
for(var i=triggers.length;i--;){var trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin'
var eventOut=trigger=='hover'?'mouseleave':'focusout'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()}
Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS}
Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options}
Tooltip.prototype.getDelegateOptions=function(){var options={}
var defaults=this.getDefaults()
this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value})
return options}
Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
if(obj instanceof $.Event){self.inState[obj.type=='focusin'?'focus':'hover']=true}
if(self.tip().hasClass('in')||self.hoverState=='in'){self.hoverState='in'
return}
clearTimeout(self.timeout)
self.hoverState='in'
if(!self.options.delay||!self.options.delay.show)return self.show()
self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)}
Tooltip.prototype.isInStateTrue=function(){for(var key in this.inState){if(this.inState[key])return true}
return false}
Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
if(obj instanceof $.Event){self.inState[obj.type=='focusout'?'focus':'hover']=false}
if(self.isInStateTrue())return
clearTimeout(self.timeout)
self.hoverState='out'
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)}
Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var inDom=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!inDom)return
var that=this
var $tip=this.tip()
var tipId=this.getUID(this.type)
this.setContent()
$tip.attr('id',tipId)
this.$element.attr('aria-describedby',tipId)
if(this.options.animation)$tip.addClass('fade')
var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
var autoToken=/\s?auto?\s?/i
var autoPlace=autoToken.test(placement)
if(autoPlace)placement=placement.replace(autoToken,'')||'top'
$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this)
this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
this.$element.trigger('inserted.bs.'+this.type)
var pos=this.getPosition()
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(autoPlace){var orgPlacement=placement
var viewportDim=this.getPosition(this.$viewport)
placement=placement=='bottom'&&pos.bottom+actualHeight>viewportDim.bottom?'top':placement=='top'&&pos.top-actualHeight<viewportDim.top?'bottom':placement=='right'&&pos.right+actualWidth>viewportDim.width?'left':placement=='left'&&pos.left-actualWidth<viewportDim.left?'right':placement
$tip.removeClass(orgPlacement).addClass(placement)}
var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
this.applyPlacement(calculatedOffset,placement)
var complete=function(){var prevHoverState=that.hoverState
that.$element.trigger('shown.bs.'+that.type)
that.hoverState=null
if(prevHoverState=='out')that.leave(that)}
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()}}
Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip()
var width=$tip[0].offsetWidth
var height=$tip[0].offsetHeight
var marginTop=parseInt($tip.css('margin-top'),10)
var marginLeft=parseInt($tip.css('margin-left'),10)
if(isNaN(marginTop))marginTop=0
if(isNaN(marginLeft))marginLeft=0
offset.top+=marginTop
offset.left+=marginLeft
$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0)
$tip.addClass('in')
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight}
var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight)
if(delta.left)offset.left+=delta.left
else offset.top+=delta.top
var isVertical=/top|bottom/.test(placement)
var arrowDelta=isVertical?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight
var arrowOffsetPosition=isVertical?'offsetWidth':'offsetHeight'
$tip.offset(offset)
this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],isVertical)}
Tooltip.prototype.replaceArrow=function(delta,dimension,isVertical){this.arrow().css(isVertical?'left':'top',50*(1-delta/dimension)+'%').css(isVertical?'top':'left','')}
Tooltip.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')}
Tooltip.prototype.hide=function(callback){var that=this
var $tip=$(this.$tip)
var e=$.Event('hide.bs.'+this.type)
function complete(){if(that.hoverState!='in')$tip.detach()
if(that.$element){that.$element.removeAttr('aria-describedby').trigger('hidden.bs.'+that.type)}
callback&&callback()}
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
$.support.transition&&$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()
this.hoverState=null
return this}
Tooltip.prototype.fixTitle=function(){var $e=this.$element
if($e.attr('title')||typeof $e.attr('data-original-title')!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}}
Tooltip.prototype.hasContent=function(){return this.getTitle()}
Tooltip.prototype.getPosition=function($element){$element=$element||this.$element
var el=$element[0]
var isBody=el.tagName=='BODY'
var elRect=el.getBoundingClientRect()
if(elRect.width==null){elRect=$.extend({},elRect,{width:elRect.right-elRect.left,height:elRect.bottom-elRect.top})}
var isSvg=window.SVGElement&&el instanceof window.SVGElement
var elOffset=isBody?{top:0,left:0}:(isSvg?null:$element.offset())
var scroll={scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop()}
var outerDims=isBody?{width:$(window).width(),height:$(window).height()}:null
return $.extend({},elRect,scroll,outerDims,elOffset)}
Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}}
Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0}
if(!this.$viewport)return delta
var viewportPadding=this.options.viewport&&this.options.viewport.padding||0
var viewportDimensions=this.getPosition(this.$viewport)
if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll
var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight
if(topEdgeOffset<viewportDimensions.top){delta.top=viewportDimensions.top-topEdgeOffset}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset}}else{var leftEdgeOffset=pos.left-viewportPadding
var rightEdgeOffset=pos.left+viewportPadding+actualWidth
if(leftEdgeOffset<viewportDimensions.left){delta.left=viewportDimensions.left-leftEdgeOffset}else if(rightEdgeOffset>viewportDimensions.right){delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset}}
return delta}
Tooltip.prototype.getTitle=function(){var title
var $e=this.$element
var o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title}
Tooltip.prototype.getUID=function(prefix){do prefix+=~~(Math.random()*1000000)
while(document.getElementById(prefix))
return prefix}
Tooltip.prototype.tip=function(){if(!this.$tip){this.$tip=$(this.options.template)
if(this.$tip.length!=1){throw new Error(this.type+' `template` option must consist of exactly 1 top-level element!')}}
return this.$tip}
Tooltip.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow'))}
Tooltip.prototype.enable=function(){this.enabled=true}
Tooltip.prototype.disable=function(){this.enabled=false}
Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
Tooltip.prototype.toggle=function(e){var self=this
if(e){self=$(e.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions())
$(e.currentTarget).data('bs.'+this.type,self)}}
if(e){self.inState.click=!self.inState.click
if(self.isInStateTrue())self.enter(self)
else self.leave(self)}else{self.tip().hasClass('in')?self.leave(self):self.enter(self)}}
Tooltip.prototype.destroy=function(){var that=this
clearTimeout(this.timeout)
this.hide(function(){that.$element.off('.'+that.type).removeData('bs.'+that.type)
if(that.$tip){that.$tip.detach()}
that.$tip=null
that.$arrow=null
that.$viewport=null
that.$element=null})}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tooltip')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tooltip
$.fn.tooltip=Plugin
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(jQuery);+function($){'use strict';var Popover=function(element,options){this.init('popover',element,options)}
if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
Popover.VERSION='3.3.7'
Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor=Popover
Popover.prototype.getDefaults=function(){return Popover.DEFAULTS}
Popover.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
var content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content').children().detach().end()[this.options.html?(typeof content=='string'?'html':'append'):'text'](content)
$tip.removeClass('fade top bottom left right in')
if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()}
Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
Popover.prototype.getContent=function(){var $e=this.$element
var o=this.options
return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)}
Popover.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.arrow'))}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.popover')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.popover
$.fn.popover=Plugin
$.fn.popover.Constructor=Popover
$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(jQuery);+function($){'use strict';function ScrollSpy(element,options){this.$body=$(document.body)
this.$scrollElement=$(element).is(document.body)?$(window):$(element)
this.options=$.extend({},ScrollSpy.DEFAULTS,options)
this.selector=(this.options.target||'')+' .nav li > a'
this.offsets=[]
this.targets=[]
this.activeTarget=null
this.scrollHeight=0
this.$scrollElement.on('scroll.bs.scrollspy',$.proxy(this.process,this))
this.refresh()
this.process()}
ScrollSpy.VERSION='3.3.7'
ScrollSpy.DEFAULTS={offset:10}
ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)}
ScrollSpy.prototype.refresh=function(){var that=this
var offsetMethod='offset'
var offsetBase=0
this.offsets=[]
this.targets=[]
this.scrollHeight=this.getScrollHeight()
if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position'
offsetBase=this.$scrollElement.scrollTop()}
this.$body.find(this.selector).map(function(){var $el=$(this)
var href=$el.data('target')||$el.attr('href')
var $href=/^#./.test(href)&&$(href)
return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){that.offsets.push(this[0])
that.targets.push(this[1])})}
ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset
var scrollHeight=this.getScrollHeight()
var maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height()
var offsets=this.offsets
var targets=this.targets
var activeTarget=this.activeTarget
var i
if(this.scrollHeight!=scrollHeight){this.refresh()}
if(scrollTop>=maxScroll){return activeTarget!=(i=targets[targets.length-1])&&this.activate(i)}
if(activeTarget&&scrollTop<offsets[0]){this.activeTarget=null
return this.clear()}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(offsets[i+1]===undefined||scrollTop<offsets[i+1])&&this.activate(targets[i])}}
ScrollSpy.prototype.activate=function(target){this.activeTarget=target
this.clear()
var selector=this.selector+'[data-target="'+target+'"],'+
this.selector+'[href="'+target+'"]'
var active=$(selector).parents('li').addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate.bs.scrollspy')}
ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.scrollspy')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.scrollspy
$.fn.scrollspy=Plugin
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
return this}
$(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
Plugin.call($spy,$spy.data())})})}(jQuery);+function($){'use strict';var Tab=function(element){this.element=$(element)}
Tab.VERSION='3.3.7'
Tab.TRANSITION_DURATION=150
Tab.prototype.show=function(){var $this=this.element
var $ul=$this.closest('ul:not(.dropdown-menu)')
var selector=$this.data('target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
var $previous=$ul.find('.active:last a')
var hideEvent=$.Event('hide.bs.tab',{relatedTarget:$this[0]})
var showEvent=$.Event('show.bs.tab',{relatedTarget:$previous[0]})
$previous.trigger(hideEvent)
$this.trigger(showEvent)
if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented())return
var $target=$(selector)
this.activate($this.closest('li'),$ul)
this.activate($target,$target.parent(),function(){$previous.trigger({type:'hidden.bs.tab',relatedTarget:$this[0]})
$this.trigger({type:'shown.bs.tab',relatedTarget:$previous[0]})})}
Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active')
var transition=callback&&$.support.transition&&($active.length&&$active.hasClass('fade')||!!container.find('> .fade').length)
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',false)
element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded',true)
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu').length){element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',true)}
callback&&callback()}
$active.length&&transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(Tab.TRANSITION_DURATION):next()
$active.removeClass('in')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tab')
if(!data)$this.data('bs.tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tab
$.fn.tab=Plugin
$.fn.tab.Constructor=Tab
$.fn.tab.noConflict=function(){$.fn.tab=old
return this}
var clickHandler=function(e){e.preventDefault()
Plugin.call($(this),'show')}
$(document).on('click.bs.tab.data-api','[data-toggle="tab"]',clickHandler).on('click.bs.tab.data-api','[data-toggle="pill"]',clickHandler)}(jQuery);+function($){'use strict';var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options)
this.$target=$(this.options.target).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this))
this.$element=$(element)
this.affixed=null
this.unpin=null
this.pinnedOffset=null
this.checkPosition()}
Affix.VERSION='3.3.7'
Affix.RESET='affix affix-top affix-bottom'
Affix.DEFAULTS={offset:0,target:window}
Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
var targetHeight=this.$target.height()
if(offsetTop!=null&&this.affixed=='top')return scrollTop<offsetTop?'top':false
if(this.affixed=='bottom'){if(offsetTop!=null)return(scrollTop+this.unpin<=position.top)?false:'bottom'
return(scrollTop+targetHeight<=scrollHeight-offsetBottom)?false:'bottom'}
var initializing=this.affixed==null
var colliderTop=initializing?scrollTop:position.top
var colliderHeight=initializing?targetHeight:height
if(offsetTop!=null&&scrollTop<=offsetTop)return'top'
if(offsetBottom!=null&&(colliderTop+colliderHeight>=scrollHeight-offsetBottom))return'bottom'
return false}
Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(Affix.RESET).addClass('affix')
var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
return(this.pinnedOffset=position.top-scrollTop)}
Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var height=this.$element.height()
var offset=this.options.offset
var offsetTop=offset.top
var offsetBottom=offset.bottom
var scrollHeight=Math.max($(document).height(),$(document.body).height())
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top(this.$element)
if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element)
var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom)
if(this.affixed!=affix){if(this.unpin!=null)this.$element.css('top','')
var affixType='affix'+(affix?'-'+affix:'')
var e=$.Event(affixType+'.bs.affix')
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.affixed=affix
this.unpin=affix=='bottom'?this.getPinnedOffset():null
this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix','affixed')+'.bs.affix')}
if(affix=='bottom'){this.$element.offset({top:scrollHeight-height-offsetBottom})}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.affix')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.affix
$.fn.affix=Plugin
$.fn.affix.Constructor=Affix
$.fn.affix.noConflict=function(){$.fn.affix=old
return this}
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this)
var data=$spy.data()
data.offset=data.offset||{}
if(data.offsetBottom!=null)data.offset.bottom=data.offsetBottom
if(data.offsetTop!=null)data.offset.top=data.offsetTop
Plugin.call($spy,data)})})}(jQuery);;window.yii=(function($){var pub={reloadableScripts:[],clickableSelector:'a, button, input[type="submit"], input[type="button"], input[type="reset"], '+'input[type="image"]',changeableSelector:'select, input, textarea',getCsrfParam:function(){return $('meta[name=csrf-param]').attr('content');},getCsrfToken:function(){return $('meta[name=csrf-token]').attr('content');},setCsrfToken:function(name,value){$('meta[name=csrf-param]').attr('content',name);$('meta[name=csrf-token]').attr('content',value);},refreshCsrfToken:function(){var token=pub.getCsrfToken();if(token){$('form input[name="'+pub.getCsrfParam()+'"]').val(token);}},confirm:function(message,ok,cancel){if(window.confirm(message)){!ok||ok();}else{!cancel||cancel();}},handleAction:function($e,event){var $form=$e.attr('data-form')?$('#'+$e.attr('data-form')):$e.closest('form'),method=!$e.data('method')&&$form?$form.attr('method'):$e.data('method'),action=$e.attr('href'),isValidAction=action&&action!=='#',params=$e.data('params'),areValidParams=params&&$.isPlainObject(params),pjax=$e.data('pjax'),usePjax=pjax!==undefined&&pjax!==0&&$.support.pjax,pjaxContainer,pjaxOptions={};if(usePjax){pjaxContainer=$e.data('pjax-container')||$e.closest('[data-pjax-container]');if(!pjaxContainer.length){pjaxContainer=$('body');}
pjaxOptions={container:pjaxContainer,push:!!$e.data('pjax-push-state'),replace:!!$e.data('pjax-replace-state'),scrollTo:$e.data('pjax-scrollto'),pushRedirect:$e.data('pjax-push-redirect'),replaceRedirect:$e.data('pjax-replace-redirect'),skipOuterContainers:$e.data('pjax-skip-outer-containers'),timeout:$e.data('pjax-timeout'),originalEvent:event,originalTarget:$e};}
if(method===undefined){if(isValidAction){usePjax?$.pjax.click(event,pjaxOptions):window.location.assign(action);}else if($e.is(':submit')&&$form.length){if(usePjax){$form.on('submit',function(e){$.pjax.submit(e,pjaxOptions);});}
$form.trigger('submit');}
return;}
var oldMethod,oldAction,newForm=!$form.length;if(!newForm){oldMethod=$form.attr('method');$form.attr('method',method);if(isValidAction){oldAction=$form.attr('action');$form.attr('action',action);}}else{if(!isValidAction){action=pub.getCurrentUrl();}
$form=$('<form/>',{method:method,action:action});var target=$e.attr('target');if(target){$form.attr('target',target);}
if(!/(get|post)/i.test(method)){$form.append($('<input/>',{name:'_method',value:method,type:'hidden'}));method='post';$form.attr('method',method);}
if(/post/i.test(method)){var csrfParam=pub.getCsrfParam();if(csrfParam){$form.append($('<input/>',{name:csrfParam,value:pub.getCsrfToken(),type:'hidden'}));}}
$form.hide().appendTo('body');}
var activeFormData=$form.data('yiiActiveForm');if(activeFormData){activeFormData.submitObject=$e;}
if(areValidParams){$.each(params,function(name,value){$form.append($('<input/>').attr({name:name,value:value,type:'hidden'}));});}
if(usePjax){$form.on('submit',function(e){$.pjax.submit(e,pjaxOptions);});}
$form.trigger('submit');$.when($form.data('yiiSubmitFinalizePromise')).then(function(){if(newForm){$form.remove();return;}
if(oldAction!==undefined){$form.attr('action',oldAction);}
$form.attr('method',oldMethod);if(areValidParams){$.each(params,function(name){$('input[name="'+name+'"]',$form).remove();});}});},getQueryParams:function(url){var pos=url.indexOf('?');if(pos<0){return{};}
var pairs=url.substring(pos+1).split('#')[0].split('&'),params={};for(var i=0,len=pairs.length;i<len;i++){var pair=pairs[i].split('=');var name=decodeURIComponent(pair[0].replace(/\+/g,'%20'));var value=decodeURIComponent(pair[1].replace(/\+/g,'%20'));if(!name.length){continue;}
if(params[name]===undefined){params[name]=value||'';}else{if(!$.isArray(params[name])){params[name]=[params[name]];}
params[name].push(value||'');}}
return params;},initModule:function(module){if(module.isActive!==undefined&&!module.isActive){return;}
if($.isFunction(module.init)){module.init();}
$.each(module,function(){if($.isPlainObject(this)){pub.initModule(this);}});},init:function(){initCsrfHandler();initRedirectHandler();initAssetFilters();initDataMethods();},getBaseCurrentUrl:function(){return window.location.protocol+'//'+window.location.host;},getCurrentUrl:function(){return window.location.href;}};function initCsrfHandler(){$.ajaxPrefilter(function(options,originalOptions,xhr){if(!options.crossDomain&&pub.getCsrfParam()){xhr.setRequestHeader('X-CSRF-Token',pub.getCsrfToken());}});pub.refreshCsrfToken();}
function initRedirectHandler(){$(document).ajaxComplete(function(event,xhr){var url=xhr&&xhr.getResponseHeader('X-Redirect');if(url){window.location.assign(url);}});}
function initAssetFilters(){var loadedScripts={};$('script[src]').each(function(){var url=getAbsoluteUrl(this.src);loadedScripts[url]=true;});$.ajaxPrefilter('script',function(options,originalOptions,xhr){if(options.dataType=='jsonp'){return;}
var url=getAbsoluteUrl(options.url),forbiddenRepeatedLoad=loadedScripts[url]===true&&!isReloadableAsset(url),cleanupRunning=loadedScripts[url]!==undefined&&loadedScripts[url]['xhrDone']===true;if(forbiddenRepeatedLoad||cleanupRunning){xhr.abort();return;}
if(loadedScripts[url]===undefined||loadedScripts[url]===true){loadedScripts[url]={xhrList:[],xhrDone:false};}
xhr.done(function(data,textStatus,jqXHR){if(loadedScripts[jqXHR.yiiUrl]['xhrDone']===true){return;}
loadedScripts[jqXHR.yiiUrl]['xhrDone']=true;for(var i=0,len=loadedScripts[jqXHR.yiiUrl]['xhrList'].length;i<len;i++){var singleXhr=loadedScripts[jqXHR.yiiUrl]['xhrList'][i];if(singleXhr&&singleXhr.readyState!==XMLHttpRequest.DONE){singleXhr.abort();}}
loadedScripts[jqXHR.yiiUrl]=true;}).fail(function(jqXHR,textStatus){if(textStatus==='abort'){return;}
delete loadedScripts[jqXHR.yiiUrl]['xhrList'][jqXHR.yiiIndex];var allFailed=true;for(var i=0,len=loadedScripts[jqXHR.yiiUrl]['xhrList'].length;i<len;i++){if(loadedScripts[jqXHR.yiiUrl]['xhrList'][i]){allFailed=false;}}
if(allFailed){delete loadedScripts[jqXHR.yiiUrl];}});xhr.yiiIndex=loadedScripts[url]['xhrList'].length;xhr.yiiUrl=url;loadedScripts[url]['xhrList'][xhr.yiiIndex]=xhr;});$(document).ajaxComplete(function(){var styleSheets=[];$('link[rel=stylesheet]').each(function(){var url=getAbsoluteUrl(this.href);if(isReloadableAsset(url)){return;}
$.inArray(url,styleSheets)===-1?styleSheets.push(url):$(this).remove();});});}
function initDataMethods(){var handler=function(event){var $this=$(this),method=$this.data('method'),message=$this.data('confirm'),form=$this.data('form');if(method===undefined&&message===undefined&&form===undefined){return true;}
if(message!==undefined){$.proxy(pub.confirm,this)(message,function(){pub.handleAction($this,event);});}else{pub.handleAction($this,event);}
event.stopImmediatePropagation();return false;};$(document).on('click.yii',pub.clickableSelector,handler).on('change.yii',pub.changeableSelector,handler);}
function isReloadableAsset(url){for(var i=0;i<pub.reloadableScripts.length;i++){var rule=getAbsoluteUrl(pub.reloadableScripts[i]);var match=new RegExp("^"+escapeRegExp(rule).split('\\*').join('.*')+"$").test(url);if(match===true){return true;}}
return false;}
function escapeRegExp(str){return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");}
function getAbsoluteUrl(url){return url.charAt(0)==='/'?pub.getBaseCurrentUrl()+url:url;}
return pub;})(window.jQuery);window.jQuery(function(){window.yii.initModule(window.yii);});;yii.validation=(function($){var pub={isEmpty:function(value){return value===null||value===undefined||($.isArray(value)&&value.length===0)||value==='';},addMessage:function(messages,message,value){messages.push(message.replace(/\{value\}/g,value));},required:function(value,messages,options){var valid=false;if(options.requiredValue===undefined){var isString=typeof value=='string'||value instanceof String;if(options.strict&&value!==undefined||!options.strict&&!pub.isEmpty(isString?$.trim(value):value)){valid=true;}}else if(!options.strict&&value==options.requiredValue||options.strict&&value===options.requiredValue){valid=true;}
if(!valid){pub.addMessage(messages,options.message,value);}},'boolean':function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
var valid=!options.strict&&(value==options.trueValue||value==options.falseValue)||options.strict&&(value===options.trueValue||value===options.falseValue);if(!valid){pub.addMessage(messages,options.message,value);}},string:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
if(typeof value!=='string'){pub.addMessage(messages,options.message,value);return;}
if(options.is!==undefined&&value.length!=options.is){pub.addMessage(messages,options.notEqual,value);return;}
if(options.min!==undefined&&value.length<options.min){pub.addMessage(messages,options.tooShort,value);}
if(options.max!==undefined&&value.length>options.max){pub.addMessage(messages,options.tooLong,value);}},file:function(attribute,messages,options){var files=getUploadedFiles(attribute,messages,options);$.each(files,function(i,file){validateFile(file,messages,options);});},image:function(attribute,messages,options,deferredList){var files=getUploadedFiles(attribute,messages,options);$.each(files,function(i,file){validateFile(file,messages,options);if(typeof FileReader==="undefined"){return;}
var deferred=$.Deferred();pub.validateImage(file,messages,options,deferred,new FileReader(),new Image());deferredList.push(deferred);});},validateImage:function(file,messages,options,deferred,fileReader,image){image.onload=function(){validateImageSize(file,image,messages,options);deferred.resolve();};image.onerror=function(){messages.push(options.notImage.replace(/\{file\}/g,file.name));deferred.resolve();};fileReader.onload=function(){image.src=this.result;};fileReader.onerror=function(){deferred.resolve();};fileReader.readAsDataURL(file);},number:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
if(typeof value==='string'&&!options.pattern.test(value)){pub.addMessage(messages,options.message,value);return;}
if(options.min!==undefined&&value<options.min){pub.addMessage(messages,options.tooSmall,value);}
if(options.max!==undefined&&value>options.max){pub.addMessage(messages,options.tooBig,value);}},range:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
if(!options.allowArray&&$.isArray(value)){pub.addMessage(messages,options.message,value);return;}
var inArray=true;$.each($.isArray(value)?value:[value],function(i,v){if($.inArray(v,options.range)==-1){inArray=false;return false;}else{return true;}});if(options.not===undefined){options.not=false;}
if(options.not===inArray){pub.addMessage(messages,options.message,value);}},regularExpression:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
if(!options.not&&!options.pattern.test(value)||options.not&&options.pattern.test(value)){pub.addMessage(messages,options.message,value);}},email:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
var valid=true,regexp=/^((?:"?([^"]*)"?\s)?)(?:\s+)?(?:(<?)((.+)@([^>]+))(>?))$/,matches=regexp.exec(value);if(matches===null){valid=false;}else{var localPart=matches[5],domain=matches[6];if(options.enableIDN){localPart=punycode.toASCII(localPart);domain=punycode.toASCII(domain);value=matches[1]+matches[3]+localPart+'@'+domain+matches[7];}
if(localPart.length>64){valid=false;}else if((localPart+'@'+domain).length>254){valid=false;}else{valid=options.pattern.test(value)||(options.allowName&&options.fullPattern.test(value));}}
if(!valid){pub.addMessage(messages,options.message,value);}},url:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
if(options.defaultScheme&&!/:\/\//.test(value)){value=options.defaultScheme+'://'+value;}
var valid=true;if(options.enableIDN){var matches=/^([^:]+):\/\/([^\/]+)(.*)$/.exec(value);if(matches===null){valid=false;}else{value=matches[1]+'://'+punycode.toASCII(matches[2])+matches[3];}}
if(!valid||!options.pattern.test(value)){pub.addMessage(messages,options.message,value);}},trim:function($form,attribute,options){var $input=$form.find(attribute.input);var value=$input.val();if(!options.skipOnEmpty||!pub.isEmpty(value)){value=$.trim(value);$input.val(value);}
return value;},captcha:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
var hash=$('body').data(options.hashKey);hash=hash==null?options.hash:hash[options.caseSensitive?0:1];var v=options.caseSensitive?value:value.toLowerCase();for(var i=v.length-1,h=0;i>=0;--i){h+=v.charCodeAt(i);}
if(h!=hash){pub.addMessage(messages,options.message,value);}},compare:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
var compareValue,valid=true;if(options.compareAttribute===undefined){compareValue=options.compareValue;}else{compareValue=$('#'+options.compareAttribute).val();}
if(options.type==='number'){value=parseFloat(value);compareValue=parseFloat(compareValue);}
switch(options.operator){case'==':valid=value==compareValue;break;case'===':valid=value===compareValue;break;case'!=':valid=value!=compareValue;break;case'!==':valid=value!==compareValue;break;case'>':valid=value>compareValue;break;case'>=':valid=value>=compareValue;break;case'<':valid=value<compareValue;break;case'<=':valid=value<=compareValue;break;default:valid=false;break;}
if(!valid){pub.addMessage(messages,options.message,value);}},ip:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
var negation=null,cidr=null,matches=new RegExp(options.ipParsePattern).exec(value);if(matches){negation=matches[1]||null;value=matches[2];cidr=matches[4]||null;}
if(options.subnet===true&&cidr===null){pub.addMessage(messages,options.messages.noSubnet,value);return;}
if(options.subnet===false&&cidr!==null){pub.addMessage(messages,options.messages.hasSubnet,value);return;}
if(options.negation===false&&negation!==null){pub.addMessage(messages,options.messages.message,value);return;}
var ipVersion=value.indexOf(':')===-1?4:6;if(ipVersion==6){if(!(new RegExp(options.ipv6Pattern)).test(value)){pub.addMessage(messages,options.messages.message,value);}
if(!options.ipv6){pub.addMessage(messages,options.messages.ipv6NotAllowed,value);}}else{if(!(new RegExp(options.ipv4Pattern)).test(value)){pub.addMessage(messages,options.messages.message,value);}
if(!options.ipv4){pub.addMessage(messages,options.messages.ipv4NotAllowed,value);}}}};function getUploadedFiles(attribute,messages,options){if(typeof File==="undefined"){return[];}
var files=$(attribute.input,attribute.$form).get(0).files;if(!files){messages.push(options.message);return[];}
if(files.length===0){if(!options.skipOnEmpty){messages.push(options.uploadRequired);}
return[];}
if(options.maxFiles&&options.maxFiles<files.length){messages.push(options.tooMany);return[];}
return files;}
function validateFile(file,messages,options){if(options.extensions&&options.extensions.length>0){var index=file.name.lastIndexOf('.');var ext=!~index?'':file.name.substr(index+1,file.name.length).toLowerCase();if(!~options.extensions.indexOf(ext)){messages.push(options.wrongExtension.replace(/\{file\}/g,file.name));}}
if(options.mimeTypes&&options.mimeTypes.length>0){if(!validateMimeType(options.mimeTypes,file.type)){messages.push(options.wrongMimeType.replace(/\{file\}/g,file.name));}}
if(options.maxSize&&options.maxSize<file.size){messages.push(options.tooBig.replace(/\{file\}/g,file.name));}
if(options.minSize&&options.minSize>file.size){messages.push(options.tooSmall.replace(/\{file\}/g,file.name));}}
function validateMimeType(mimeTypes,fileType){for(var i=0,len=mimeTypes.length;i<len;i++){if(new RegExp(mimeTypes[i]).test(fileType)){return true;}}
return false;}
function validateImageSize(file,image,messages,options){if(options.minWidth&&image.width<options.minWidth){messages.push(options.underWidth.replace(/\{file\}/g,file.name));}
if(options.maxWidth&&image.width>options.maxWidth){messages.push(options.overWidth.replace(/\{file\}/g,file.name));}
if(options.minHeight&&image.height<options.minHeight){messages.push(options.underHeight.replace(/\{file\}/g,file.name));}
if(options.maxHeight&&image.height>options.maxHeight){messages.push(options.overHeight.replace(/\{file\}/g,file.name));}}
return pub;})(jQuery);;
/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.5
*/
!function(factory){window.Inputmask=function($,window,document,undefined){function Inputmask(alias,options,internal){if(!(this instanceof Inputmask))return new Inputmask(alias,options,internal);this.el=undefined,this.events={},this.maskset=undefined,this.refreshValue=!1,!0!==internal&&($.isPlainObject(alias)?options=alias:(options=options||{},options.alias=alias),this.opts=$.extend(!0,{},this.defaults,options),this.noMasksCache=options&&options.definitions!==undefined,this.userOptions=options||{},this.isRTL=this.opts.numericInput,resolveAlias(this.opts.alias,options,this.opts));}
function resolveAlias(aliasStr,options,opts){var aliasDefinition=Inputmask.prototype.aliases[aliasStr];return aliasDefinition?(aliasDefinition.alias&&resolveAlias(aliasDefinition.alias,undefined,opts),$.extend(!0,opts,aliasDefinition),$.extend(!0,opts,options),!0):(null===opts.mask&&(opts.mask=aliasStr),!1);}
function generateMaskSet(opts,nocache){function generateMask(mask,metadata,opts){var regexMask=!1;if(null!==mask&&""!==mask||(regexMask=null!==opts.regex,regexMask?(mask=opts.regex,mask=mask.replace(/^(\^)(.*)(\$)$/,"$2")):mask="*{*}"),1===mask.length&&!1===opts.greedy&&0!==opts.repeat&&(opts.placeholder=""),opts.repeat>0||"*"===opts.repeat||"+"===opts.repeat){var repeatStart="*"===opts.repeat?0:"+"===opts.repeat?1:opts.repeat;mask=opts.groupmarker.start+mask+opts.groupmarker.end+opts.quantifiermarker.start+repeatStart+","+opts.repeat+opts.quantifiermarker.end;}
var masksetDefinition;return Inputmask.prototype.masksCache[mask]===undefined||!0===nocache?(masksetDefinition={mask:mask,maskToken:Inputmask.prototype.analyseMask(mask,regexMask,opts),validPositions:{},_buffer:undefined,buffer:undefined,tests:{},metadata:metadata,maskLength:undefined},!0!==nocache&&(Inputmask.prototype.masksCache[opts.numericInput?mask.split("").reverse().join(""):mask]=masksetDefinition,masksetDefinition=$.extend(!0,{},Inputmask.prototype.masksCache[opts.numericInput?mask.split("").reverse().join(""):mask]))):masksetDefinition=$.extend(!0,{},Inputmask.prototype.masksCache[opts.numericInput?mask.split("").reverse().join(""):mask]),masksetDefinition;}
if($.isFunction(opts.mask)&&(opts.mask=opts.mask(opts)),$.isArray(opts.mask)){if(opts.mask.length>1){opts.keepStatic=null===opts.keepStatic||opts.keepStatic;var altMask=opts.groupmarker.start;return $.each(opts.numericInput?opts.mask.reverse():opts.mask,function(ndx,msk){altMask.length>1&&(altMask+=opts.groupmarker.end+opts.alternatormarker+opts.groupmarker.start),msk.mask===undefined||$.isFunction(msk.mask)?altMask+=msk:altMask+=msk.mask;}),altMask+=opts.groupmarker.end,generateMask(altMask,opts.mask,opts);}
opts.mask=opts.mask.pop();}
return opts.mask&&opts.mask.mask!==undefined&&!$.isFunction(opts.mask.mask)?generateMask(opts.mask.mask,opts.mask,opts):generateMask(opts.mask,opts.mask,opts);}
function maskScope(actionObj,maskset,opts){function getMaskTemplate(baseOnInput,minimalPos,includeMode){minimalPos=minimalPos||0;var ndxIntlzr,test,testPos,maskTemplate=[],pos=0,lvp=getLastValidPosition();-1===(maxLength=el!==undefined?el.maxLength:undefined)&&(maxLength=undefined);do{!0===baseOnInput&&getMaskSet().validPositions[pos]?(testPos=getMaskSet().validPositions[pos],test=testPos.match,ndxIntlzr=testPos.locator.slice(),maskTemplate.push(!0===includeMode?testPos.input:!1===includeMode?test.nativeDef:getPlaceholder(pos,test))):(testPos=getTestTemplate(pos,ndxIntlzr,pos-1),test=testPos.match,ndxIntlzr=testPos.locator.slice(),(!1===opts.jitMasking||pos<lvp||"number"==typeof opts.jitMasking&&isFinite(opts.jitMasking)&&opts.jitMasking>pos)&&maskTemplate.push(!1===includeMode?test.nativeDef:getPlaceholder(pos,test))),pos++;}while((maxLength===undefined||pos<maxLength)&&(null!==test.fn||""!==test.def)||minimalPos>pos);return""===maskTemplate[maskTemplate.length-1]&&maskTemplate.pop(),getMaskSet().maskLength=pos+1,maskTemplate;}
function getMaskSet(){return maskset;}
function resetMaskSet(soft){var maskset=getMaskSet();maskset.buffer=undefined,!0!==soft&&(maskset.validPositions={},maskset.p=0);}
function getLastValidPosition(closestTo,strict,validPositions){var before=-1,after=-1,valids=validPositions||getMaskSet().validPositions;closestTo===undefined&&(closestTo=-1);for(var posNdx in valids){var psNdx=parseInt(posNdx);valids[psNdx]&&(strict||!0!==valids[psNdx].generatedInput)&&(psNdx<=closestTo&&(before=psNdx),psNdx>=closestTo&&(after=psNdx));}
return-1!==before&&closestTo-before>1||after<closestTo?before:after;}
function stripValidPositions(start,end,nocheck,strict){var i,startPos=start,positionsClone=$.extend(!0,{},getMaskSet().validPositions),needsValidation=!1;for(getMaskSet().p=start,i=end-1;i>=startPos;i--)getMaskSet().validPositions[i]!==undefined&&(!0!==nocheck&&(!getMaskSet().validPositions[i].match.optionality&&function(pos){var posMatch=getMaskSet().validPositions[pos];if(posMatch!==undefined&&null===posMatch.match.fn){var prevMatch=getMaskSet().validPositions[pos-1],nextMatch=getMaskSet().validPositions[pos+1];return prevMatch!==undefined&&nextMatch!==undefined;}
return!1;}(i)||!1===opts.canClearPosition(getMaskSet(),i,getLastValidPosition(),strict,opts))||delete getMaskSet().validPositions[i]);for(resetMaskSet(!0),i=startPos+1;i<=getLastValidPosition();){for(;getMaskSet().validPositions[startPos]!==undefined;)startPos++;if(i<startPos&&(i=startPos+1),getMaskSet().validPositions[i]===undefined&&isMask(i))i++;else{var t=getTestTemplate(i);!1===needsValidation&&positionsClone[startPos]&&positionsClone[startPos].match.def===t.match.def?(getMaskSet().validPositions[startPos]=$.extend(!0,{},positionsClone[startPos]),getMaskSet().validPositions[startPos].input=t.input,delete getMaskSet().validPositions[i],i++):positionCanMatchDefinition(startPos,t.match.def)?!1!==isValid(startPos,t.input||getPlaceholder(i),!0)&&(delete getMaskSet().validPositions[i],i++,needsValidation=!0):isMask(i)||(i++,startPos--),startPos++;}}
resetMaskSet(!0);}
function determineTestTemplate(tests,guessNextBest){for(var testPos,testPositions=tests,lvp=getLastValidPosition(),lvTest=getMaskSet().validPositions[lvp]||getTests(0)[0],lvTestAltArr=lvTest.alternation!==undefined?lvTest.locator[lvTest.alternation].toString().split(","):[],ndx=0;ndx<testPositions.length&&(testPos=testPositions[ndx],!(testPos.match&&(opts.greedy&&!0!==testPos.match.optionalQuantifier||(!1===testPos.match.optionality||!1===testPos.match.newBlockMarker)&&!0!==testPos.match.optionalQuantifier)&&(lvTest.alternation===undefined||lvTest.alternation!==testPos.alternation||testPos.locator[lvTest.alternation]!==undefined&&checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","),lvTestAltArr)))||!0===guessNextBest&&(null!==testPos.match.fn||/[0-9a-bA-Z]/.test(testPos.match.def)));ndx++);return testPos;}
function getTestTemplate(pos,ndxIntlzr,tstPs){return getMaskSet().validPositions[pos]||determineTestTemplate(getTests(pos,ndxIntlzr?ndxIntlzr.slice():ndxIntlzr,tstPs));}
function getTest(pos){return getMaskSet().validPositions[pos]?getMaskSet().validPositions[pos]:getTests(pos)[0];}
function positionCanMatchDefinition(pos,def){for(var valid=!1,tests=getTests(pos),tndx=0;tndx<tests.length;tndx++)if(tests[tndx].match&&tests[tndx].match.def===def){valid=!0;break;}
return valid;}
function getTests(pos,ndxIntlzr,tstPs){function resolveTestFromToken(maskToken,ndxInitializer,loopNdx,quantifierRecurse){function handleMatch(match,loopNdx,quantifierRecurse){function isFirstMatch(latestMatch,tokenGroup){var firstMatch=0===$.inArray(latestMatch,tokenGroup.matches);return firstMatch||$.each(tokenGroup.matches,function(ndx,match){if(!0===match.isQuantifier&&(firstMatch=isFirstMatch(latestMatch,tokenGroup.matches[ndx-1])))return!1;}),firstMatch;}
function resolveNdxInitializer(pos,alternateNdx,targetAlternation){var bestMatch,indexPos;return(getMaskSet().tests[pos]||getMaskSet().validPositions[pos])&&$.each(getMaskSet().tests[pos]||[getMaskSet().validPositions[pos]],function(ndx,lmnt){var alternation=targetAlternation!==undefined?targetAlternation:lmnt.alternation,ndxPos=lmnt.locator[alternation]!==undefined?lmnt.locator[alternation].toString().indexOf(alternateNdx):-1;(indexPos===undefined||ndxPos<indexPos)&&-1!==ndxPos&&(bestMatch=lmnt,indexPos=ndxPos);}),bestMatch?bestMatch.locator.slice((targetAlternation!==undefined?targetAlternation:bestMatch.alternation)+1):targetAlternation!==undefined?resolveNdxInitializer(pos,alternateNdx):undefined;}
if(testPos>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+getMaskSet().mask;if(testPos===pos&&match.matches===undefined)return matches.push({match:match,locator:loopNdx.reverse(),cd:cacheDependency}),!0;if(match.matches!==undefined){if(match.isGroup&&quantifierRecurse!==match){if(match=handleMatch(maskToken.matches[$.inArray(match,maskToken.matches)+1],loopNdx))return!0;}else if(match.isOptional){var optionalToken=match;if(match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse)){if(latestMatch=matches[matches.length-1].match,!isFirstMatch(latestMatch,optionalToken))return!0;insertStop=!0,testPos=pos;}}else if(match.isAlternator){var maltMatches,alternateToken=match,malternateMatches=[],currentMatches=matches.slice(),loopNdxCnt=loopNdx.length,altIndex=ndxInitializer.length>0?ndxInitializer.shift():-1;if(-1===altIndex||"string"==typeof altIndex){var amndx,currentPos=testPos,ndxInitializerClone=ndxInitializer.slice(),altIndexArr=[];if("string"==typeof altIndex)altIndexArr=altIndex.split(",");else for(amndx=0;amndx<alternateToken.matches.length;amndx++)altIndexArr.push(amndx);for(var ndx=0;ndx<altIndexArr.length;ndx++){if(amndx=parseInt(altIndexArr[ndx]),matches=[],ndxInitializer=resolveNdxInitializer(testPos,amndx,loopNdxCnt)||ndxInitializerClone.slice(),!0!==(match=handleMatch(alternateToken.matches[amndx]||maskToken.matches[amndx],[amndx].concat(loopNdx),quantifierRecurse)||match)&&match!==undefined&&altIndexArr[altIndexArr.length-1]<alternateToken.matches.length){var ntndx=$.inArray(match,maskToken.matches)+1;maskToken.matches.length>ntndx&&(match=handleMatch(maskToken.matches[ntndx],[ntndx].concat(loopNdx.slice(1,loopNdx.length)),quantifierRecurse))&&(altIndexArr.push(ntndx.toString()),$.each(matches,function(ndx,lmnt){lmnt.alternation=loopNdx.length-1;}));}
maltMatches=matches.slice(),testPos=currentPos,matches=[];for(var ndx1=0;ndx1<maltMatches.length;ndx1++){var altMatch=maltMatches[ndx1],dropMatch=!1;altMatch.alternation=altMatch.alternation||loopNdxCnt;for(var ndx2=0;ndx2<malternateMatches.length;ndx2++){var altMatch2=malternateMatches[ndx2];if("string"!=typeof altIndex||-1!==$.inArray(altMatch.locator[altMatch.alternation].toString(),altIndexArr)){if(altMatch.match.nativeDef===altMatch2.match.nativeDef||altMatch.match.def===altMatch2.match.nativeDef||altMatch.match.nativeDef===altMatch2.match.def){dropMatch=!0,altMatch.alternation==altMatch2.alternation&&-1===altMatch2.locator[altMatch2.alternation].toString().indexOf(altMatch.locator[altMatch.alternation])&&(altMatch2.locator[altMatch2.alternation]=altMatch2.locator[altMatch2.alternation]+","+altMatch.locator[altMatch.alternation],altMatch2.alternation=altMatch.alternation),altMatch.match.nativeDef===altMatch2.match.def&&(altMatch.locator[altMatch.alternation]=altMatch2.locator[altMatch2.alternation],malternateMatches.splice(malternateMatches.indexOf(altMatch2),1,altMatch));break;}
if(altMatch.match.def===altMatch2.match.def){dropMatch=!1;break;}
if(function(source,target){return null===source.match.fn&&null!==target.match.fn&&target.match.fn.test(source.match.def,getMaskSet(),pos,!1,opts,!1);}(altMatch,altMatch2)){altMatch.alternation==altMatch2.alternation&&-1===altMatch.locator[altMatch.alternation].toString().indexOf(altMatch2.locator[altMatch2.alternation].toString().split("")[0])&&(altMatch.na=altMatch.na||altMatch.locator[altMatch.alternation].toString(),-1===altMatch.na.indexOf(altMatch.locator[altMatch.alternation].toString().split("")[0])&&(altMatch.na=altMatch.na+","+altMatch.locator[altMatch2.alternation].toString().split("")[0]),dropMatch=!0,altMatch.locator[altMatch.alternation]=altMatch2.locator[altMatch2.alternation].toString().split("")[0]+","+altMatch.locator[altMatch.alternation],malternateMatches.splice(malternateMatches.indexOf(altMatch2),0,altMatch));break;}}}
dropMatch||malternateMatches.push(altMatch);}}"string"==typeof altIndex&&(malternateMatches=$.map(malternateMatches,function(lmnt,ndx){if(isFinite(ndx)){var alternation=lmnt.alternation,altLocArr=lmnt.locator[alternation].toString().split(",");lmnt.locator[alternation]=undefined,lmnt.alternation=undefined;for(var alndx=0;alndx<altLocArr.length;alndx++)-1!==$.inArray(altLocArr[alndx],altIndexArr)&&(lmnt.locator[alternation]!==undefined?(lmnt.locator[alternation]+=",",lmnt.locator[alternation]+=altLocArr[alndx]):lmnt.locator[alternation]=parseInt(altLocArr[alndx]),lmnt.alternation=alternation);if(lmnt.locator[alternation]!==undefined)return lmnt;}})),matches=currentMatches.concat(malternateMatches),testPos=pos,insertStop=matches.length>0,ndxInitializer=ndxInitializerClone.slice();}else match=handleMatch(alternateToken.matches[altIndex]||maskToken.matches[altIndex],[altIndex].concat(loopNdx),quantifierRecurse);if(match)return!0;}else if(match.isQuantifier&&quantifierRecurse!==maskToken.matches[$.inArray(match,maskToken.matches)-1])for(var qt=match,qndx=ndxInitializer.length>0?ndxInitializer.shift():0;qndx<(isNaN(qt.quantifier.max)?qndx+1:qt.quantifier.max)&&testPos<=pos;qndx++){var tokenGroup=maskToken.matches[$.inArray(qt,maskToken.matches)-1];if(match=handleMatch(tokenGroup,[qndx].concat(loopNdx),tokenGroup)){if(latestMatch=matches[matches.length-1].match,latestMatch.optionalQuantifier=qndx>qt.quantifier.min-1,isFirstMatch(latestMatch,tokenGroup)){if(qndx>qt.quantifier.min-1){insertStop=!0,testPos=pos;break;}
return!0;}
return!0;}}else if(match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse))return!0;}else testPos++;}
for(var tndx=ndxInitializer.length>0?ndxInitializer.shift():0;tndx<maskToken.matches.length;tndx++)if(!0!==maskToken.matches[tndx].isQuantifier){var match=handleMatch(maskToken.matches[tndx],[tndx].concat(loopNdx),quantifierRecurse);if(match&&testPos===pos)return match;if(testPos>pos)break;}}
function filterTests(tests){return opts.keepStatic&&pos>0&&tests.length>1+(""===tests[tests.length-1].match.def?1:0)&&!0!==tests[0].match.optionality&&!0!==tests[0].match.optionalQuantifier&&null===tests[0].match.fn&&!/[0-9a-bA-Z]/.test(tests[0].match.def)?[determineTestTemplate(tests)]:tests;}
var latestMatch,maskTokens=getMaskSet().maskToken,testPos=ndxIntlzr?tstPs:0,ndxInitializer=ndxIntlzr?ndxIntlzr.slice():[0],matches=[],insertStop=!1,cacheDependency=ndxIntlzr?ndxIntlzr.join(""):"";if(pos>-1){if(ndxIntlzr===undefined){for(var test,previousPos=pos-1;(test=getMaskSet().validPositions[previousPos]||getMaskSet().tests[previousPos])===undefined&&previousPos>-1;)previousPos--;test!==undefined&&previousPos>-1&&(ndxInitializer=function(tests){var locator=[];return $.isArray(tests)||(tests=[tests]),tests.length>0&&(tests[0].alternation===undefined?(locator=determineTestTemplate(tests.slice()).locator.slice(),0===locator.length&&(locator=tests[0].locator.slice())):$.each(tests,function(ndx,tst){if(""!==tst.def)if(0===locator.length)locator=tst.locator.slice();else for(var i=0;i<locator.length;i++)tst.locator[i]&&-1===locator[i].toString().indexOf(tst.locator[i])&&(locator[i]+=","+tst.locator[i]);})),locator;}(test),cacheDependency=ndxInitializer.join(""),testPos=previousPos);}
if(getMaskSet().tests[pos]&&getMaskSet().tests[pos][0].cd===cacheDependency)return filterTests(getMaskSet().tests[pos]);for(var mtndx=ndxInitializer.shift();mtndx<maskTokens.length;mtndx++){if(resolveTestFromToken(maskTokens[mtndx],ndxInitializer,[mtndx])&&testPos===pos||testPos>pos)break;}}
return(0===matches.length||insertStop)&&matches.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:"",placeholder:""},locator:[],cd:cacheDependency}),ndxIntlzr!==undefined&&getMaskSet().tests[pos]?filterTests($.extend(!0,[],matches)):(getMaskSet().tests[pos]=$.extend(!0,[],matches),filterTests(getMaskSet().tests[pos]));}
function getBufferTemplate(){return getMaskSet()._buffer===undefined&&(getMaskSet()._buffer=getMaskTemplate(!1,1),getMaskSet().buffer===undefined&&(getMaskSet().buffer=getMaskSet()._buffer.slice())),getMaskSet()._buffer;}
function getBuffer(noCache){return getMaskSet().buffer!==undefined&&!0!==noCache||(getMaskSet().buffer=getMaskTemplate(!0,getLastValidPosition(),!0)),getMaskSet().buffer;}
function refreshFromBuffer(start,end,buffer){var i,p;if(!0===start)resetMaskSet(),start=0,end=buffer.length;else for(i=start;i<end;i++)delete getMaskSet().validPositions[i];for(p=start,i=start;i<end;i++)if(resetMaskSet(!0),buffer[i]!==opts.skipOptionalPartCharacter){var valResult=isValid(p,buffer[i],!0,!0);!1!==valResult&&(resetMaskSet(!0),p=valResult.caret!==undefined?valResult.caret:valResult.pos+1);}}
function casing(elem,test,pos){switch(opts.casing||test.casing){case"upper":elem=elem.toUpperCase();break;case"lower":elem=elem.toLowerCase();break;case"title":var posBefore=getMaskSet().validPositions[pos-1];elem=0===pos||posBefore&&posBefore.input===String.fromCharCode(Inputmask.keyCode.SPACE)?elem.toUpperCase():elem.toLowerCase();}
return elem;}
function checkAlternationMatch(altArr1,altArr2,na){for(var naNdx,altArrC=opts.greedy?altArr2:altArr2.slice(0,1),isMatch=!1,naArr=na!==undefined?na.split(","):[],i=0;i<naArr.length;i++)-1!==(naNdx=altArr1.indexOf(naArr[i]))&&altArr1.splice(naNdx,1);for(var alndx=0;alndx<altArr1.length;alndx++)if(-1!==$.inArray(altArr1[alndx],altArrC)){isMatch=!0;break;}
return isMatch;}
function isValid(pos,c,strict,fromSetValid,fromAlternate){function isSelection(posObj){var selection=isRTL?posObj.begin-posObj.end>1||posObj.begin-posObj.end==1:posObj.end-posObj.begin>1||posObj.end-posObj.begin==1;return selection&&0===posObj.begin&&posObj.end===getMaskSet().maskLength?"full":selection;}
function _isValid(position,c,strict){var rslt=!1;return $.each(getTests(position),function(ndx,tst){for(var test=tst.match,loopend=c?1:0,chrs="",i=test.cardinality;i>loopend;i--)chrs+=getBufferElement(position-(i-1));if(c&&(chrs+=c),getBuffer(!0),!1!==(rslt=null!=test.fn?test.fn.test(chrs,getMaskSet(),position,strict,opts,isSelection(pos)):(c===test.def||c===opts.skipOptionalPartCharacter)&&""!==test.def&&{c:getPlaceholder(position,test,!0)||test.def,pos:position})){var elem=rslt.c!==undefined?rslt.c:c;elem=elem===opts.skipOptionalPartCharacter&&null===test.fn?getPlaceholder(position,test,!0)||test.def:elem;var validatedPos=position,possibleModifiedBuffer=getBuffer();if(rslt.remove!==undefined&&($.isArray(rslt.remove)||(rslt.remove=[rslt.remove]),$.each(rslt.remove.sort(function(a,b){return b-a;}),function(ndx,lmnt){stripValidPositions(lmnt,lmnt+1,!0);})),rslt.insert!==undefined&&($.isArray(rslt.insert)||(rslt.insert=[rslt.insert]),$.each(rslt.insert.sort(function(a,b){return a-b;}),function(ndx,lmnt){isValid(lmnt.pos,lmnt.c,!0,fromSetValid);})),rslt.refreshFromBuffer){var refresh=rslt.refreshFromBuffer;if(refreshFromBuffer(!0===refresh?refresh:refresh.start,refresh.end,possibleModifiedBuffer),rslt.pos===undefined&&rslt.c===undefined)return rslt.pos=getLastValidPosition(),!1;if((validatedPos=rslt.pos!==undefined?rslt.pos:position)!==position)return rslt=$.extend(rslt,isValid(validatedPos,elem,!0,fromSetValid)),!1;}else if(!0!==rslt&&rslt.pos!==undefined&&rslt.pos!==position&&(validatedPos=rslt.pos,refreshFromBuffer(position,validatedPos,getBuffer().slice()),validatedPos!==position))return rslt=$.extend(rslt,isValid(validatedPos,elem,!0)),!1;return(!0===rslt||rslt.pos!==undefined||rslt.c!==undefined)&&(ndx>0&&resetMaskSet(!0),setValidPosition(validatedPos,$.extend({},tst,{input:casing(elem,test,validatedPos)}),fromSetValid,isSelection(pos))||(rslt=!1),!1);}}),rslt;}
function setValidPosition(pos,validTest,fromSetValid,isSelection){if(isSelection||opts.insertMode&&getMaskSet().validPositions[pos]!==undefined&&fromSetValid===undefined){var i,positionsClone=$.extend(!0,{},getMaskSet().validPositions),lvp=getLastValidPosition(undefined,!0);for(i=pos;i<=lvp;i++)delete getMaskSet().validPositions[i];getMaskSet().validPositions[pos]=$.extend(!0,{},validTest);var j,valid=!0,vps=getMaskSet().validPositions,needsValidation=!1,initialLength=getMaskSet().maskLength;for(i=j=pos;i<=lvp;i++){var t=positionsClone[i];if(t!==undefined)for(var posMatch=j;posMatch<getMaskSet().maskLength&&(null===t.match.fn&&vps[i]&&(!0===vps[i].match.optionalQuantifier||!0===vps[i].match.optionality)||null!=t.match.fn);){if(posMatch++,!1===needsValidation&&positionsClone[posMatch]&&positionsClone[posMatch].match.def===t.match.def)getMaskSet().validPositions[posMatch]=$.extend(!0,{},positionsClone[posMatch]),getMaskSet().validPositions[posMatch].input=t.input,fillMissingNonMask(posMatch),j=posMatch,valid=!0;else if(positionCanMatchDefinition(posMatch,t.match.def)){var result=isValid(posMatch,t.input,!0,!0);valid=!1!==result,j=result.caret||result.insert?getLastValidPosition():posMatch,needsValidation=!0;}else if(!(valid=!0===t.generatedInput)&&posMatch>=getMaskSet().maskLength-1)break;if(getMaskSet().maskLength<initialLength&&(getMaskSet().maskLength=initialLength),valid)break;}
if(!valid)break;}
if(!valid)return getMaskSet().validPositions=$.extend(!0,{},positionsClone),resetMaskSet(!0),!1;}else getMaskSet().validPositions[pos]=$.extend(!0,{},validTest);return resetMaskSet(!0),!0;}
function fillMissingNonMask(maskPos){for(var pndx=maskPos-1;pndx>-1&&!getMaskSet().validPositions[pndx];pndx--);var testTemplate,testsFromPos;for(pndx++;pndx<maskPos;pndx++)getMaskSet().validPositions[pndx]===undefined&&(!1===opts.jitMasking||opts.jitMasking>pndx)&&(testsFromPos=getTests(pndx,getTestTemplate(pndx-1).locator,pndx-1).slice(),""===testsFromPos[testsFromPos.length-1].match.def&&testsFromPos.pop(),(testTemplate=determineTestTemplate(testsFromPos))&&(testTemplate.match.def===opts.radixPointDefinitionSymbol||!isMask(pndx,!0)||$.inArray(opts.radixPoint,getBuffer())<pndx&&testTemplate.match.fn&&testTemplate.match.fn.test(getPlaceholder(pndx),getMaskSet(),pndx,!1,opts))&&!1!==(result=_isValid(pndx,getPlaceholder(pndx,testTemplate.match,!0)||(null==testTemplate.match.fn?testTemplate.match.def:""!==getPlaceholder(pndx)?getPlaceholder(pndx):getBuffer()[pndx]),!0))&&(getMaskSet().validPositions[result.pos||pndx].generatedInput=!0));}
strict=!0===strict;var maskPos=pos;pos.begin!==undefined&&(maskPos=isRTL&&!isSelection(pos)?pos.end:pos.begin);var result=!0,positionsClone=$.extend(!0,{},getMaskSet().validPositions);if($.isFunction(opts.preValidation)&&!strict&&!0!==fromSetValid&&(result=opts.preValidation(getBuffer(),maskPos,c,isSelection(pos),opts)),!0===result){if(fillMissingNonMask(maskPos),isSelection(pos)&&(handleRemove(undefined,Inputmask.keyCode.DELETE,pos),maskPos=getMaskSet().p),maskPos<getMaskSet().maskLength&&(result=_isValid(maskPos,c,strict),(!strict||!0===fromSetValid)&&!1===result)){var currentPosValid=getMaskSet().validPositions[maskPos];if(!currentPosValid||null!==currentPosValid.match.fn||currentPosValid.match.def!==c&&c!==opts.skipOptionalPartCharacter){if((opts.insertMode||getMaskSet().validPositions[seekNext(maskPos)]===undefined)&&!isMask(maskPos,!0))for(var nPos=maskPos+1,snPos=seekNext(maskPos);nPos<=snPos;nPos++)if(!1!==(result=_isValid(nPos,c,strict))){!function(originalPos,newPos){var vp=getMaskSet().validPositions[newPos];if(vp)for(var targetLocator=vp.locator,tll=targetLocator.length,ps=originalPos;ps<newPos;ps++)if(getMaskSet().validPositions[ps]===undefined&&!isMask(ps,!0)){var tests=getTests(ps).slice(),bestMatch=determineTestTemplate(tests,!0),equality=-1;""===tests[tests.length-1].match.def&&tests.pop(),$.each(tests,function(ndx,tst){for(var i=0;i<tll;i++){if(tst.locator[i]===undefined||!checkAlternationMatch(tst.locator[i].toString().split(","),targetLocator[i].toString().split(","),tst.na)){var targetAI=targetLocator[i],bestMatchAI=bestMatch.locator[i],tstAI=tst.locator[i];targetAI-bestMatchAI>Math.abs(targetAI-tstAI)&&(bestMatch=tst);break;}
equality<i&&(equality=i,bestMatch=tst);}}),bestMatch=$.extend({},bestMatch,{input:getPlaceholder(ps,bestMatch.match,!0)||bestMatch.match.def}),bestMatch.generatedInput=!0,setValidPosition(ps,bestMatch,!0),getMaskSet().validPositions[newPos]=undefined,_isValid(newPos,vp.input,!0);}}(maskPos,result.pos!==undefined?result.pos:nPos),maskPos=nPos;break;}}else result={caret:seekNext(maskPos)};}
!1===result&&opts.keepStatic&&!strict&&!0!==fromAlternate&&(result=function(pos,c,strict){var lastAlt,alternation,altPos,prevAltPos,i,validPos,altNdxs,decisionPos,validPsClone=$.extend(!0,{},getMaskSet().validPositions),isValidRslt=!1,lAltPos=getLastValidPosition();for(prevAltPos=getMaskSet().validPositions[lAltPos];lAltPos>=0;lAltPos--)if((altPos=getMaskSet().validPositions[lAltPos])&&altPos.alternation!==undefined){if(lastAlt=lAltPos,alternation=getMaskSet().validPositions[lastAlt].alternation,prevAltPos.locator[altPos.alternation]!==altPos.locator[altPos.alternation])break;prevAltPos=altPos;}
if(alternation!==undefined){decisionPos=parseInt(lastAlt);var decisionTaker=prevAltPos.locator[prevAltPos.alternation||alternation]!==undefined?prevAltPos.locator[prevAltPos.alternation||alternation]:altNdxs[0];decisionTaker.length>0&&(decisionTaker=decisionTaker.split(",")[0]);var possibilityPos=getMaskSet().validPositions[decisionPos],prevPos=getMaskSet().validPositions[decisionPos-1];$.each(getTests(decisionPos,prevPos?prevPos.locator:undefined,decisionPos-1),function(ndx,test){altNdxs=test.locator[alternation]?test.locator[alternation].toString().split(","):[];for(var mndx=0;mndx<altNdxs.length;mndx++){var validInputs=[],staticInputsBeforePos=0,staticInputsBeforePosAlternate=0,verifyValidInput=!1;if(decisionTaker<altNdxs[mndx]&&(test.na===undefined||-1===$.inArray(altNdxs[mndx],test.na.split(","))||-1===$.inArray(decisionTaker.toString(),altNdxs))){getMaskSet().validPositions[decisionPos]=$.extend(!0,{},test);var possibilities=getMaskSet().validPositions[decisionPos].locator;for(getMaskSet().validPositions[decisionPos].locator[alternation]=parseInt(altNdxs[mndx]),null==test.match.fn?(possibilityPos.input!==test.match.def&&(verifyValidInput=!0,!0!==possibilityPos.generatedInput&&validInputs.push(possibilityPos.input)),staticInputsBeforePosAlternate++,getMaskSet().validPositions[decisionPos].generatedInput=!/[0-9a-bA-Z]/.test(test.match.def),getMaskSet().validPositions[decisionPos].input=test.match.def):getMaskSet().validPositions[decisionPos].input=possibilityPos.input,i=decisionPos+1;i<getLastValidPosition(undefined,!0)+1;i++)validPos=getMaskSet().validPositions[i],validPos&&!0!==validPos.generatedInput&&/[0-9a-bA-Z]/.test(validPos.input)?validInputs.push(validPos.input):i<pos&&staticInputsBeforePos++,delete getMaskSet().validPositions[i];for(verifyValidInput&&validInputs[0]===test.match.def&&validInputs.shift(),resetMaskSet(!0),isValidRslt=!0;validInputs.length>0;){var input=validInputs.shift();if(input!==opts.skipOptionalPartCharacter&&!(isValidRslt=isValid(getLastValidPosition(undefined,!0)+1,input,!1,fromSetValid,!0)))break;}
if(isValidRslt){getMaskSet().validPositions[decisionPos].locator=possibilities;var targetLvp=getLastValidPosition(pos)+1;for(i=decisionPos+1;i<getLastValidPosition()+1;i++)((validPos=getMaskSet().validPositions[i])===undefined||null==validPos.match.fn)&&i<pos+(staticInputsBeforePosAlternate-staticInputsBeforePos)&&staticInputsBeforePosAlternate++;pos+=staticInputsBeforePosAlternate-staticInputsBeforePos,isValidRslt=isValid(pos>targetLvp?targetLvp:pos,c,strict,fromSetValid,!0);}
if(isValidRslt)return!1;resetMaskSet(),getMaskSet().validPositions=$.extend(!0,{},validPsClone);}}});}
return isValidRslt;}(maskPos,c,strict)),!0===result&&(result={pos:maskPos});}
if($.isFunction(opts.postValidation)&&!1!==result&&!strict&&!0!==fromSetValid){var postResult=opts.postValidation(getBuffer(!0),result,opts);if(postResult.refreshFromBuffer&&postResult.buffer){var refresh=postResult.refreshFromBuffer;refreshFromBuffer(!0===refresh?refresh:refresh.start,refresh.end,postResult.buffer);}
result=!0===postResult?result:postResult;}
return result.pos===undefined&&(result.pos=maskPos),!1===result&&(resetMaskSet(!0),getMaskSet().validPositions=$.extend(!0,{},positionsClone)),result;}
function isMask(pos,strict){var test=getTestTemplate(pos).match;if(""===test.def&&(test=getTest(pos).match),null!=test.fn)return test.fn;if(!0!==strict&&pos>-1){var tests=getTests(pos);return tests.length>1+(""===tests[tests.length-1].match.def?1:0);}
return!1;}
function seekNext(pos,newBlock){var maskL=getMaskSet().maskLength;if(pos>=maskL)return maskL;for(var position=pos;++position<maskL&&(!0===newBlock&&(!0!==getTest(position).match.newBlockMarker||!isMask(position))||!0!==newBlock&&!isMask(position)););return position;}
function seekPrevious(pos,newBlock){var tests,position=pos;if(position<=0)return 0;for(;--position>0&&(!0===newBlock&&!0!==getTest(position).match.newBlockMarker||!0!==newBlock&&!isMask(position)&&(tests=getTests(position),tests.length<2||2===tests.length&&""===tests[1].match.def)););return position;}
function getBufferElement(position){return getMaskSet().validPositions[position]===undefined?getPlaceholder(position):getMaskSet().validPositions[position].input;}
function writeBuffer(input,buffer,caretPos,event,triggerInputEvent){if(event&&$.isFunction(opts.onBeforeWrite)){var result=opts.onBeforeWrite(event,buffer,caretPos,opts);if(result){if(result.refreshFromBuffer){var refresh=result.refreshFromBuffer;refreshFromBuffer(!0===refresh?refresh:refresh.start,refresh.end,result.buffer||buffer),buffer=getBuffer(!0);}
caretPos!==undefined&&(caretPos=result.caret!==undefined?result.caret:caretPos);}}
input!==undefined&&(input.inputmask._valueSet(buffer.join("")),caretPos===undefined||event!==undefined&&"blur"===event.type?renderColorMask(input,buffer,caretPos):android&&"input"===event.type?setTimeout(function(){caret(input,caretPos);},0):caret(input,caretPos),!0===triggerInputEvent&&(skipInputEvent=!0,$(input).trigger("input")));}
function getPlaceholder(pos,test,returnPL){if(test=test||getTest(pos).match,test.placeholder!==undefined||!0===returnPL)return $.isFunction(test.placeholder)?test.placeholder(opts):test.placeholder;if(null===test.fn){if(pos>-1&&getMaskSet().validPositions[pos]===undefined){var prevTest,tests=getTests(pos),staticAlternations=[];if(tests.length>1+(""===tests[tests.length-1].match.def?1:0))for(var i=0;i<tests.length;i++)if(!0!==tests[i].match.optionality&&!0!==tests[i].match.optionalQuantifier&&(null===tests[i].match.fn||prevTest===undefined||!1!==tests[i].match.fn.test(prevTest.match.def,getMaskSet(),pos,!0,opts))&&(staticAlternations.push(tests[i]),null===tests[i].match.fn&&(prevTest=tests[i]),staticAlternations.length>1&&/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)))return opts.placeholder.charAt(pos%opts.placeholder.length);}
return test.def;}
return opts.placeholder.charAt(pos%opts.placeholder.length);}
function checkVal(input,writeOut,strict,nptvl,initiatingEvent){function isTemplateMatch(ndx,charCodes){return-1!==getBufferTemplate().slice(ndx,seekNext(ndx)).join("").indexOf(charCodes)&&!isMask(ndx)&&getTest(ndx).match.nativeDef===charCodes.charAt(charCodes.length-1);}
var inputValue=nptvl.slice(),charCodes="",initialNdx=0,result=undefined;if(resetMaskSet(),getMaskSet().p=seekNext(-1),!strict)if(!0!==opts.autoUnmask){var staticInput=getBufferTemplate().slice(0,seekNext(-1)).join(""),matches=inputValue.join("").match(new RegExp("^"+Inputmask.escapeRegex(staticInput),"g"));matches&&matches.length>0&&(inputValue.splice(0,matches.length*staticInput.length),initialNdx=seekNext(initialNdx));}else initialNdx=seekNext(initialNdx);if($.each(inputValue,function(ndx,charCode){if(charCode!==undefined){var keypress=new $.Event("_checkval");keypress.which=charCode.charCodeAt(0),charCodes+=charCode;var lvp=getLastValidPosition(undefined,!0),lvTest=getMaskSet().validPositions[lvp],nextTest=getTestTemplate(lvp+1,lvTest?lvTest.locator.slice():undefined,lvp);if(!isTemplateMatch(initialNdx,charCodes)||strict||opts.autoUnmask){var pos=strict?ndx:null==nextTest.match.fn&&nextTest.match.optionality&&lvp+1<getMaskSet().p?lvp+1:getMaskSet().p;result=EventHandlers.keypressEvent.call(input,keypress,!0,!1,strict,pos),initialNdx=pos+1,charCodes="";}else result=EventHandlers.keypressEvent.call(input,keypress,!0,!1,!0,lvp+1);if(!strict&&$.isFunction(opts.onBeforeWrite)){var fp=result.forwardPosition;if(result=opts.onBeforeWrite(keypress,getBuffer(),result.forwardPosition,opts),result.forwardPosition=fp,result&&result.refreshFromBuffer){var refresh=result.refreshFromBuffer;refreshFromBuffer(!0===refresh?refresh:refresh.start,refresh.end,result.buffer),resetMaskSet(!0),result.caret&&(getMaskSet().p=result.caret,result.forwardPosition=result.caret);}}}}),writeOut){var caretPos=undefined;document.activeElement===input&&result&&(caretPos=opts.numericInput?seekPrevious(result.forwardPosition):result.forwardPosition),writeBuffer(input,getBuffer(),caretPos,initiatingEvent||new $.Event("checkval"),initiatingEvent&&"input"===initiatingEvent.type);}}
function unmaskedvalue(input){if(input){if(input.inputmask===undefined)return input.value;input.inputmask&&input.inputmask.refreshValue&&EventHandlers.setValueEvent.call(input);}
var umValue=[],vps=getMaskSet().validPositions;for(var pndx in vps)vps[pndx].match&&null!=vps[pndx].match.fn&&umValue.push(vps[pndx].input);var unmaskedValue=0===umValue.length?"":(isRTL?umValue.reverse():umValue).join("");if($.isFunction(opts.onUnMask)){var bufferValue=(isRTL?getBuffer().slice().reverse():getBuffer()).join("");unmaskedValue=opts.onUnMask(bufferValue,unmaskedValue,opts);}
return unmaskedValue;}
function caret(input,begin,end,notranslate){function translatePosition(pos){if(!0!==notranslate&&isRTL&&"number"==typeof pos&&(!opts.greedy||""!==opts.placeholder)){pos=getBuffer().join("").length-pos;}
return pos;}
var range;if("number"!=typeof begin)return input.setSelectionRange?(begin=input.selectionStart,end=input.selectionEnd):window.getSelection?(range=window.getSelection().getRangeAt(0),range.commonAncestorContainer.parentNode!==input&&range.commonAncestorContainer!==input||(begin=range.startOffset,end=range.endOffset)):document.selection&&document.selection.createRange&&(range=document.selection.createRange(),begin=0-range.duplicate().moveStart("character",-input.inputmask._valueGet().length),end=begin+range.text.length),{begin:translatePosition(begin),end:translatePosition(end)};begin=translatePosition(begin),end=translatePosition(end),end="number"==typeof end?end:begin;var scrollCalc=parseInt(((input.ownerDocument.defaultView||window).getComputedStyle?(input.ownerDocument.defaultView||window).getComputedStyle(input,null):input.currentStyle).fontSize)*end;if(input.scrollLeft=scrollCalc>input.scrollWidth?scrollCalc:0,mobile||!1!==opts.insertMode||begin!==end||end++,input.setSelectionRange)input.selectionStart=begin,input.selectionEnd=end;else if(window.getSelection){if(range=document.createRange(),input.firstChild===undefined||null===input.firstChild){var textNode=document.createTextNode("");input.appendChild(textNode);}
range.setStart(input.firstChild,begin<input.inputmask._valueGet().length?begin:input.inputmask._valueGet().length),range.setEnd(input.firstChild,end<input.inputmask._valueGet().length?end:input.inputmask._valueGet().length),range.collapse(!0);var sel=window.getSelection();sel.removeAllRanges(),sel.addRange(range);}else input.createTextRange&&(range=input.createTextRange(),range.collapse(!0),range.moveEnd("character",end),range.moveStart("character",begin),range.select());renderColorMask(input,undefined,{begin:begin,end:end});}
function determineLastRequiredPosition(returnDefinition){var pos,testPos,buffer=getBuffer(),bl=buffer.length,lvp=getLastValidPosition(),positions={},lvTest=getMaskSet().validPositions[lvp],ndxIntlzr=lvTest!==undefined?lvTest.locator.slice():undefined;for(pos=lvp+1;pos<buffer.length;pos++)testPos=getTestTemplate(pos,ndxIntlzr,pos-1),ndxIntlzr=testPos.locator.slice(),positions[pos]=$.extend(!0,{},testPos);var lvTestAlt=lvTest&&lvTest.alternation!==undefined?lvTest.locator[lvTest.alternation]:undefined;for(pos=bl-1;pos>lvp&&(testPos=positions[pos],(testPos.match.optionality||testPos.match.optionalQuantifier||lvTestAlt&&(lvTestAlt!==positions[pos].locator[lvTest.alternation]&&null!=testPos.match.fn||null===testPos.match.fn&&testPos.locator[lvTest.alternation]&&checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","),lvTestAlt.toString().split(","))&&""!==getTests(pos)[0].def))&&buffer[pos]===getPlaceholder(pos,testPos.match));pos--)bl--;return returnDefinition?{l:bl,def:positions[bl]?positions[bl].match:undefined}:bl;}
function clearOptionalTail(buffer){for(var validPos,rl=determineLastRequiredPosition(),bl=buffer.length;rl<bl&&!isMask(rl+1)&&(validPos=getTest(rl+1))&&!0!==validPos.match.optionality&&!0!==validPos.match.optionalQuantifier;)rl++;for(;(validPos=getTest(rl-1))&&validPos.match.optionality&&validPos.input===opts.skipOptionalPartCharacter;)rl--;return buffer.splice(rl),buffer;}
function isComplete(buffer){if($.isFunction(opts.isComplete))return opts.isComplete(buffer,opts);if("*"===opts.repeat)return undefined;var complete=!1,lrp=determineLastRequiredPosition(!0),aml=seekPrevious(lrp.l);if(lrp.def===undefined||lrp.def.newBlockMarker||lrp.def.optionality||lrp.def.optionalQuantifier){complete=!0;for(var i=0;i<=aml;i++){var test=getTestTemplate(i).match;if(null!==test.fn&&getMaskSet().validPositions[i]===undefined&&!0!==test.optionality&&!0!==test.optionalQuantifier||null===test.fn&&buffer[i]!==getPlaceholder(i,test)){complete=!1;break;}}}
return complete;}
function handleRemove(input,k,pos,strict){if((opts.numericInput||isRTL)&&(k===Inputmask.keyCode.BACKSPACE?k=Inputmask.keyCode.DELETE:k===Inputmask.keyCode.DELETE&&(k=Inputmask.keyCode.BACKSPACE),isRTL)){var pend=pos.end;pos.end=pos.begin,pos.begin=pend;}
k===Inputmask.keyCode.BACKSPACE&&(pos.end-pos.begin<1||!1===opts.insertMode)?(pos.begin=seekPrevious(pos.begin),getMaskSet().validPositions[pos.begin]===undefined||getMaskSet().validPositions[pos.begin].input!==opts.groupSeparator&&getMaskSet().validPositions[pos.begin].input!==opts.radixPoint||pos.begin--):k===Inputmask.keyCode.DELETE&&pos.begin===pos.end&&(pos.end=isMask(pos.end,!0)?pos.end+1:seekNext(pos.end)+1,getMaskSet().validPositions[pos.begin]===undefined||getMaskSet().validPositions[pos.begin].input!==opts.groupSeparator&&getMaskSet().validPositions[pos.begin].input!==opts.radixPoint||pos.end++),stripValidPositions(pos.begin,pos.end,!1,strict),!0!==strict&&function(){if(opts.keepStatic){for(var validInputs=[],lastAlt=getLastValidPosition(-1,!0),positionsClone=$.extend(!0,{},getMaskSet().validPositions),prevAltPos=getMaskSet().validPositions[lastAlt];lastAlt>=0;lastAlt--){var altPos=getMaskSet().validPositions[lastAlt];if(altPos){if(!0!==altPos.generatedInput&&/[0-9a-bA-Z]/.test(altPos.input)&&validInputs.push(altPos.input),delete getMaskSet().validPositions[lastAlt],altPos.alternation!==undefined&&altPos.locator[altPos.alternation]!==prevAltPos.locator[altPos.alternation])break;prevAltPos=altPos;}}
if(lastAlt>-1)for(getMaskSet().p=seekNext(getLastValidPosition(-1,!0));validInputs.length>0;){var keypress=new $.Event("keypress");keypress.which=validInputs.pop().charCodeAt(0),EventHandlers.keypressEvent.call(input,keypress,!0,!1,!1,getMaskSet().p);}else getMaskSet().validPositions=$.extend(!0,{},positionsClone);}}();var lvp=getLastValidPosition(pos.begin,!0);lvp<pos.begin?getMaskSet().p=seekNext(lvp):!0!==strict&&(getMaskSet().p=pos.begin);}
function initializeColorMask(input){function findCaretPos(clientx){var caretPos,e=document.createElement("span");for(var style in computedStyle)isNaN(style)&&-1!==style.indexOf("font")&&(e.style[style]=computedStyle[style]);e.style.textTransform=computedStyle.textTransform,e.style.letterSpacing=computedStyle.letterSpacing,e.style.position="absolute",e.style.height="auto",e.style.width="auto",e.style.visibility="hidden",e.style.whiteSpace="nowrap",document.body.appendChild(e);var itl,inputText=input.inputmask._valueGet(),previousWidth=0;for(caretPos=0,itl=inputText.length;caretPos<=itl;caretPos++){if(e.innerHTML+=inputText.charAt(caretPos)||"_",e.offsetWidth>=clientx){var offset1=clientx-previousWidth,offset2=e.offsetWidth-clientx;e.innerHTML=inputText.charAt(caretPos),offset1-=e.offsetWidth/3,caretPos=offset1<offset2?caretPos-1:caretPos;break;}
previousWidth=e.offsetWidth;}
return document.body.removeChild(e),caretPos;}
function position(){colorMask.style.position="absolute",colorMask.style.top=offset.top+"px",colorMask.style.left=offset.left+"px",colorMask.style.width=parseInt(input.offsetWidth)-parseInt(computedStyle.paddingLeft)-parseInt(computedStyle.paddingRight)-parseInt(computedStyle.borderLeftWidth)-parseInt(computedStyle.borderRightWidth)+"px",colorMask.style.height=parseInt(input.offsetHeight)-parseInt(computedStyle.paddingTop)-parseInt(computedStyle.paddingBottom)-parseInt(computedStyle.borderTopWidth)-parseInt(computedStyle.borderBottomWidth)+"px",colorMask.style.lineHeight=colorMask.style.height,colorMask.style.zIndex=isNaN(computedStyle.zIndex)?-1:computedStyle.zIndex-1,colorMask.style.webkitAppearance="textfield",colorMask.style.mozAppearance="textfield",colorMask.style.Appearance="textfield";}
var offset=$(input).position(),computedStyle=(input.ownerDocument.defaultView||window).getComputedStyle(input,null);input.parentNode;colorMask=document.createElement("div"),document.body.appendChild(colorMask);for(var style in computedStyle)computedStyle.hasOwnProperty(style)&&isNaN(style)&&"cssText"!==style&&-1==style.indexOf("webkit")&&(colorMask.style[style]=computedStyle[style]);input.style.backgroundColor="transparent",input.style.color="transparent",input.style.webkitAppearance="caret",input.style.mozAppearance="caret",input.style.Appearance="caret",position(),$(window).on("resize",function(e){offset=$(input).position(),computedStyle=(input.ownerDocument.defaultView||window).getComputedStyle(input,null),position();}),$(input).on("click",function(e){return caret(input,findCaretPos(e.clientX)),EventHandlers.clickEvent.call(this,[e]);}),$(input).on("keydown",function(e){e.shiftKey||!1===opts.insertMode||setTimeout(function(){renderColorMask(input);},0);});}
function renderColorMask(input,buffer,caretPos){function handleStatic(){isStatic||null!==test.fn&&testPos.input!==undefined?isStatic&&null!==test.fn&&testPos.input!==undefined&&(isStatic=!1,maskTemplate+="</span>"):(isStatic=!0,maskTemplate+="<span class='im-static''>");}
if(colorMask!==undefined){buffer=buffer||getBuffer(),caretPos===undefined?caretPos=caret(input):caretPos.begin===undefined&&(caretPos={begin:caretPos,end:caretPos});var maskTemplate="",isStatic=!1;if(""!=buffer){var ndxIntlzr,test,testPos,pos=0,lvp=getLastValidPosition();do{pos===caretPos.begin&&document.activeElement===input&&(maskTemplate+="<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"),getMaskSet().validPositions[pos]?(testPos=getMaskSet().validPositions[pos],test=testPos.match,ndxIntlzr=testPos.locator.slice(),handleStatic(),maskTemplate+=testPos.input):(testPos=getTestTemplate(pos,ndxIntlzr,pos-1),test=testPos.match,ndxIntlzr=testPos.locator.slice(),(!1===opts.jitMasking||pos<lvp||"number"==typeof opts.jitMasking&&isFinite(opts.jitMasking)&&opts.jitMasking>pos)&&(handleStatic(),maskTemplate+=getPlaceholder(pos,test))),pos++;}while((maxLength===undefined||pos<maxLength)&&(null!==test.fn||""!==test.def)||lvp>pos);}
colorMask.innerHTML=maskTemplate;}}
maskset=maskset||this.maskset,opts=opts||this.opts;var undoValue,$el,maxLength,colorMask,valueBuffer,el=this.el,isRTL=this.isRTL,skipKeyPressEvent=!1,skipInputEvent=!1,ignorable=!1,mouseEnter=!1,EventRuler={on:function(input,eventName,eventHandler){var ev=function(e){if(this.inputmask===undefined&&"FORM"!==this.nodeName){var imOpts=$.data(this,"_inputmask_opts");imOpts?new Inputmask(imOpts).mask(this):EventRuler.off(this);}else{if("setvalue"===e.type||"FORM"===this.nodeName||!(this.disabled||this.readOnly&&!("keydown"===e.type&&e.ctrlKey&&67===e.keyCode||!1===opts.tabThrough&&e.keyCode===Inputmask.keyCode.TAB))){switch(e.type){case"input":if(!0===skipInputEvent)return skipInputEvent=!1,e.preventDefault();break;case"keydown":skipKeyPressEvent=!1,skipInputEvent=!1;break;case"keypress":if(!0===skipKeyPressEvent)return e.preventDefault();skipKeyPressEvent=!0;break;case"click":var that=this,args=arguments;return setTimeout(function(){eventHandler.apply(that,args);},0),!1;}
var returnVal=eventHandler.apply(this,arguments);return!1===returnVal&&(e.preventDefault(),e.stopPropagation()),returnVal;}
e.preventDefault();}};input.inputmask.events[eventName]=input.inputmask.events[eventName]||[],input.inputmask.events[eventName].push(ev),-1!==$.inArray(eventName,["submit","reset"])?null!=input.form&&$(input.form).on(eventName,ev):$(input).on(eventName,ev);},off:function(input,event){if(input.inputmask&&input.inputmask.events){var events;event?(events=[],events[event]=input.inputmask.events[event]):events=input.inputmask.events,$.each(events,function(eventName,evArr){for(;evArr.length>0;){var ev=evArr.pop();-1!==$.inArray(eventName,["submit","reset"])?null!=input.form&&$(input.form).off(eventName,ev):$(input).off(eventName,ev);}
delete input.inputmask.events[eventName];});}}},EventHandlers={keydownEvent:function(e){var input=this,$input=$(input),k=e.keyCode,pos=caret(input);if(k===Inputmask.keyCode.BACKSPACE||k===Inputmask.keyCode.DELETE||iphone&&k===Inputmask.keyCode.BACKSPACE_SAFARI||e.ctrlKey&&k===Inputmask.keyCode.X&&!function(eventName){var el=document.createElement("input"),evName="on"+eventName,isSupported=evName in el;return isSupported||(el.setAttribute(evName,"return;"),isSupported="function"==typeof el[evName]),el=null,isSupported;}("cut"))e.preventDefault(),handleRemove(input,k,pos),writeBuffer(input,getBuffer(!0),getMaskSet().p,e,input.inputmask._valueGet()!==getBuffer().join("")),input.inputmask._valueGet()===getBufferTemplate().join("")?$input.trigger("cleared"):!0===isComplete(getBuffer())&&$input.trigger("complete");else if(k===Inputmask.keyCode.END||k===Inputmask.keyCode.PAGE_DOWN){e.preventDefault();var caretPos=seekNext(getLastValidPosition());opts.insertMode||caretPos!==getMaskSet().maskLength||e.shiftKey||caretPos--,caret(input,e.shiftKey?pos.begin:caretPos,caretPos,!0);}else k===Inputmask.keyCode.HOME&&!e.shiftKey||k===Inputmask.keyCode.PAGE_UP?(e.preventDefault(),caret(input,0,e.shiftKey?pos.begin:0,!0)):(opts.undoOnEscape&&k===Inputmask.keyCode.ESCAPE||90===k&&e.ctrlKey)&&!0!==e.altKey?(checkVal(input,!0,!1,undoValue.split("")),$input.trigger("click")):k!==Inputmask.keyCode.INSERT||e.shiftKey||e.ctrlKey?!0===opts.tabThrough&&k===Inputmask.keyCode.TAB?(!0===e.shiftKey?(null===getTest(pos.begin).match.fn&&(pos.begin=seekNext(pos.begin)),pos.end=seekPrevious(pos.begin,!0),pos.begin=seekPrevious(pos.end,!0)):(pos.begin=seekNext(pos.begin,!0),pos.end=seekNext(pos.begin,!0),pos.end<getMaskSet().maskLength&&pos.end--),pos.begin<getMaskSet().maskLength&&(e.preventDefault(),caret(input,pos.begin,pos.end))):e.shiftKey||!1===opts.insertMode&&(k===Inputmask.keyCode.RIGHT?setTimeout(function(){var caretPos=caret(input);caret(input,caretPos.begin);},0):k===Inputmask.keyCode.LEFT&&setTimeout(function(){var caretPos=caret(input);caret(input,isRTL?caretPos.begin+1:caretPos.begin-1);},0)):(opts.insertMode=!opts.insertMode,caret(input,opts.insertMode||pos.begin!==getMaskSet().maskLength?pos.begin:pos.begin-1));opts.onKeyDown.call(this,e,getBuffer(),caret(input).begin,opts),ignorable=-1!==$.inArray(k,opts.ignorables);},keypressEvent:function(e,checkval,writeOut,strict,ndx){var input=this,$input=$(input),k=e.which||e.charCode||e.keyCode;if(!(!0===checkval||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||ignorable))return k===Inputmask.keyCode.ENTER&&undoValue!==getBuffer().join("")&&(undoValue=getBuffer().join(""),setTimeout(function(){$input.trigger("change");},0)),!0;if(k){46===k&&!1===e.shiftKey&&""!==opts.radixPoint&&(k=opts.radixPoint.charCodeAt(0));var forwardPosition,pos=checkval?{begin:ndx,end:ndx}:caret(input),c=String.fromCharCode(k);getMaskSet().writeOutBuffer=!0;var valResult=isValid(pos,c,strict);if(!1!==valResult&&(resetMaskSet(!0),forwardPosition=valResult.caret!==undefined?valResult.caret:checkval?valResult.pos+1:seekNext(valResult.pos),getMaskSet().p=forwardPosition),!1!==writeOut){var self=this;if(setTimeout(function(){opts.onKeyValidation.call(self,k,valResult,opts);},0),getMaskSet().writeOutBuffer&&!1!==valResult){var buffer=getBuffer();writeBuffer(input,buffer,opts.numericInput&&valResult.caret===undefined?seekPrevious(forwardPosition):forwardPosition,e,!0!==checkval),!0!==checkval&&setTimeout(function(){!0===isComplete(buffer)&&$input.trigger("complete");},0);}}
if(e.preventDefault(),checkval)return valResult.forwardPosition=forwardPosition,valResult;}},pasteEvent:function(e){var tempValue,input=this,ev=e.originalEvent||e,$input=$(input),inputValue=input.inputmask._valueGet(!0),caretPos=caret(input);isRTL&&(tempValue=caretPos.end,caretPos.end=caretPos.begin,caretPos.begin=tempValue);var valueBeforeCaret=inputValue.substr(0,caretPos.begin),valueAfterCaret=inputValue.substr(caretPos.end,inputValue.length);if(valueBeforeCaret===(isRTL?getBufferTemplate().reverse():getBufferTemplate()).slice(0,caretPos.begin).join("")&&(valueBeforeCaret=""),valueAfterCaret===(isRTL?getBufferTemplate().reverse():getBufferTemplate()).slice(caretPos.end).join("")&&(valueAfterCaret=""),isRTL&&(tempValue=valueBeforeCaret,valueBeforeCaret=valueAfterCaret,valueAfterCaret=tempValue),window.clipboardData&&window.clipboardData.getData)inputValue=valueBeforeCaret+window.clipboardData.getData("Text")+valueAfterCaret;else{if(!ev.clipboardData||!ev.clipboardData.getData)return!0;inputValue=valueBeforeCaret+ev.clipboardData.getData("text/plain")+valueAfterCaret;}
var pasteValue=inputValue;if($.isFunction(opts.onBeforePaste)){if(!1===(pasteValue=opts.onBeforePaste(inputValue,opts)))return e.preventDefault();pasteValue||(pasteValue=inputValue);}
return checkVal(input,!1,!1,isRTL?pasteValue.split("").reverse():pasteValue.toString().split("")),writeBuffer(input,getBuffer(),seekNext(getLastValidPosition()),e,undoValue!==getBuffer().join("")),!0===isComplete(getBuffer())&&$input.trigger("complete"),e.preventDefault();},inputFallBackEvent:function(e){var input=this,inputValue=input.inputmask._valueGet();if(getBuffer().join("")!==inputValue){var caretPos=caret(input);if("."===inputValue.charAt(caretPos.begin-1)&&""!==opts.radixPoint&&(inputValue=inputValue.split(""),inputValue[caretPos.begin-1]=opts.radixPoint.charAt(0),inputValue=inputValue.join("")),inputValue.charAt(caretPos.begin-1)===opts.radixPoint&&inputValue.length>getBuffer().length){var keypress=new $.Event("keypress");return keypress.which=opts.radixPoint.charCodeAt(0),EventHandlers.keypressEvent.call(input,keypress,!0,!0,!1,caretPos.begin),!1;}
if(inputValue=inputValue.replace(new RegExp("("+Inputmask.escapeRegex(getBufferTemplate().join(""))+")*"),""),iemobile){var inputChar=inputValue.replace(getBuffer().join(""),"");if(1===inputChar.length){var keypress=new $.Event("keypress");return keypress.which=inputChar.charCodeAt(0),EventHandlers.keypressEvent.call(input,keypress,!0,!0,!1,getMaskSet().validPositions[caretPos.begin-1]?caretPos.begin:caretPos.begin-1),!1;}}
if(caretPos.begin>inputValue.length&&(caret(input,inputValue.length),caretPos=caret(input)),getBuffer().length-inputValue.length!=1||inputValue.charAt(caretPos.begin)===getBuffer()[caretPos.begin]||inputValue.charAt(caretPos.begin+1)===getBuffer()[caretPos.begin]||isMask(caretPos.begin)){var stickyParts=[],bufferTemplate=getMaskTemplate(!0,1).join("");for(stickyParts.push(inputValue.substr(0,caretPos.begin)),stickyParts.push(inputValue.substr(caretPos.begin));null===inputValue.match(Inputmask.escapeRegex(bufferTemplate)+"$");)bufferTemplate=bufferTemplate.slice(1);inputValue=inputValue.replace(bufferTemplate,""),$.isFunction(opts.onBeforeMask)&&(inputValue=opts.onBeforeMask(inputValue,opts)||inputValue),checkVal(input,!0,!1,inputValue.split(""),e);var currentPos=caret(input).begin,currentValue=input.inputmask._valueGet(),pos1=currentValue.indexOf(stickyParts[0]);if(0===pos1&&currentPos!==stickyParts[0].length)caret(input,stickyParts[0].length),android&&setTimeout(function(){caret(input,stickyParts[0].length);},0);else{for(;null===currentValue.match(Inputmask.escapeRegex(stickyParts[1])+"$");)stickyParts[1]=stickyParts[1].substr(1);var pos2=currentValue.indexOf(stickyParts[1]);-1!==pos2&&""!==stickyParts[1]&&currentPos>pos2&&pos2>pos1&&(caret(input,pos2),android&&setTimeout(function(){caret(input,pos2);},0));}
!0===isComplete(getBuffer())&&$(input).trigger("complete");}else e.keyCode=Inputmask.keyCode.BACKSPACE,EventHandlers.keydownEvent.call(input,e);e.preventDefault();}},setValueEvent:function(e){this.inputmask.refreshValue=!1;var input=this,value=input.inputmask._valueGet(!0);$.isFunction(opts.onBeforeMask)&&(value=opts.onBeforeMask(value,opts)||value),value=value.split(""),checkVal(input,!0,!1,isRTL?value.reverse():value),undoValue=getBuffer().join(""),(opts.clearMaskOnLostFocus||opts.clearIncomplete)&&input.inputmask._valueGet()===getBufferTemplate().join("")&&input.inputmask._valueSet("");},focusEvent:function(e){var input=this,nptValue=input.inputmask._valueGet();opts.showMaskOnFocus&&(!opts.showMaskOnHover||opts.showMaskOnHover&&""===nptValue)&&(input.inputmask._valueGet()!==getBuffer().join("")?writeBuffer(input,getBuffer(),seekNext(getLastValidPosition())):!1===mouseEnter&&caret(input,seekNext(getLastValidPosition()))),!0===opts.positionCaretOnTab&&!1===mouseEnter&&EventHandlers.clickEvent.apply(input,[e,!0]),undoValue=getBuffer().join("");},mouseleaveEvent:function(e){var input=this;if(mouseEnter=!1,opts.clearMaskOnLostFocus&&document.activeElement!==input){var buffer=getBuffer().slice(),nptValue=input.inputmask._valueGet();nptValue!==input.getAttribute("placeholder")&&""!==nptValue&&(-1===getLastValidPosition()&&nptValue===getBufferTemplate().join("")?buffer=[]:clearOptionalTail(buffer),writeBuffer(input,buffer));}},clickEvent:function(e,tabbed){var input=this;if(document.activeElement===input){var selectedCaret=caret(input);if(tabbed&&(isRTL?selectedCaret.end=selectedCaret.begin:selectedCaret.begin=selectedCaret.end),selectedCaret.begin===selectedCaret.end)switch(opts.positionCaretOnClick){case"none":break;case"radixFocus":if(function(clickPos){if(""!==opts.radixPoint){var vps=getMaskSet().validPositions;if(vps[clickPos]===undefined||vps[clickPos].input===getPlaceholder(clickPos)){if(clickPos<seekNext(-1))return!0;var radixPos=$.inArray(opts.radixPoint,getBuffer());if(-1!==radixPos){for(var vp in vps)if(radixPos<vp&&vps[vp].input!==getPlaceholder(vp))return!1;return!0;}}}
return!1;}(selectedCaret.begin)){var radixPos=getBuffer().join("").indexOf(opts.radixPoint);caret(input,opts.numericInput?seekNext(radixPos):radixPos);break;}
default:var clickPosition=selectedCaret.begin,lvclickPosition=getLastValidPosition(clickPosition,!0),lastPosition=seekNext(lvclickPosition);if(clickPosition<lastPosition)caret(input,isMask(clickPosition)||isMask(clickPosition-1)?clickPosition:seekNext(clickPosition));else{var placeholder=getPlaceholder(lastPosition);(""!==placeholder&&getBuffer()[lastPosition]!==placeholder&&!0!==getTest(lastPosition).match.optionalQuantifier||!isMask(lastPosition)&&getTest(lastPosition).match.def===placeholder)&&(lastPosition=seekNext(lastPosition)),caret(input,lastPosition);}}}},dblclickEvent:function(e){var input=this;setTimeout(function(){caret(input,0,seekNext(getLastValidPosition()));},0);},cutEvent:function(e){var input=this,$input=$(input),pos=caret(input),ev=e.originalEvent||e,clipboardData=window.clipboardData||ev.clipboardData,clipData=isRTL?getBuffer().slice(pos.end,pos.begin):getBuffer().slice(pos.begin,pos.end);clipboardData.setData("text",isRTL?clipData.reverse().join(""):clipData.join("")),document.execCommand&&document.execCommand("copy"),handleRemove(input,Inputmask.keyCode.DELETE,pos),writeBuffer(input,getBuffer(),getMaskSet().p,e,undoValue!==getBuffer().join("")),input.inputmask._valueGet()===getBufferTemplate().join("")&&$input.trigger("cleared");},blurEvent:function(e){var $input=$(this),input=this;if(input.inputmask){var nptValue=input.inputmask._valueGet(),buffer=getBuffer().slice();undoValue!==buffer.join("")&&setTimeout(function(){$input.trigger("change"),undoValue=buffer.join("");},0),""!==nptValue&&(opts.clearMaskOnLostFocus&&(-1===getLastValidPosition()&&nptValue===getBufferTemplate().join("")?buffer=[]:clearOptionalTail(buffer)),!1===isComplete(buffer)&&(setTimeout(function(){$input.trigger("incomplete");},0),opts.clearIncomplete&&(resetMaskSet(),buffer=opts.clearMaskOnLostFocus?[]:getBufferTemplate().slice())),writeBuffer(input,buffer,undefined,e));}},mouseenterEvent:function(e){var input=this;mouseEnter=!0,document.activeElement!==input&&opts.showMaskOnHover&&input.inputmask._valueGet()!==getBuffer().join("")&&writeBuffer(input,getBuffer());},submitEvent:function(e){undoValue!==getBuffer().join("")&&$el.trigger("change"),opts.clearMaskOnLostFocus&&-1===getLastValidPosition()&&el.inputmask._valueGet&&el.inputmask._valueGet()===getBufferTemplate().join("")&&el.inputmask._valueSet(""),opts.removeMaskOnSubmit&&(el.inputmask._valueSet(el.inputmask.unmaskedvalue(),!0),setTimeout(function(){writeBuffer(el,getBuffer());},0));},resetEvent:function(e){el.inputmask.refreshValue=!0,setTimeout(function(){$el.trigger("setvalue");},0);}};if(actionObj!==undefined)switch(actionObj.action){case"isComplete":return el=actionObj.el,isComplete(getBuffer());case"unmaskedvalue":return el!==undefined&&actionObj.value===undefined||(valueBuffer=actionObj.value,valueBuffer=($.isFunction(opts.onBeforeMask)?opts.onBeforeMask(valueBuffer,opts)||valueBuffer:valueBuffer).split(""),checkVal(undefined,!1,!1,isRTL?valueBuffer.reverse():valueBuffer),$.isFunction(opts.onBeforeWrite)&&opts.onBeforeWrite(undefined,getBuffer(),0,opts)),unmaskedvalue(el);case"mask":!function(elem){EventRuler.off(elem);var isSupported=function(input,opts){var elementType=input.getAttribute("type"),isSupported="INPUT"===input.tagName&&-1!==$.inArray(elementType,opts.supportsInputType)||input.isContentEditable||"TEXTAREA"===input.tagName;if(!isSupported)if("INPUT"===input.tagName){var el=document.createElement("input");el.setAttribute("type",elementType),isSupported="text"===el.type,el=null;}else isSupported="partial";return!1!==isSupported&&function(npt){function getter(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==getLastValidPosition()||!0!==opts.nullable?document.activeElement===this&&opts.clearMaskOnLostFocus?(isRTL?clearOptionalTail(getBuffer().slice()).reverse():clearOptionalTail(getBuffer().slice())).join(""):valueGet.call(this):"":valueGet.call(this);}
function setter(value){valueSet.call(this,value),this.inputmask&&$(this).trigger("setvalue");}
var valueGet,valueSet;if(!npt.inputmask.__valueGet){if(!0!==opts.noValuePatching){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"==typeof"test".__proto__?function(object){return object.__proto__;}:function(object){return object.constructor.prototype;});var valueProperty=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt),"value"):undefined;valueProperty&&valueProperty.get&&valueProperty.set?(valueGet=valueProperty.get,valueSet=valueProperty.set,Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:!0})):"INPUT"!==npt.tagName&&(valueGet=function(){return this.textContent;},valueSet=function(value){this.textContent=value;},Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:!0}));}else document.__lookupGetter__&&npt.__lookupGetter__("value")&&(valueGet=npt.__lookupGetter__("value"),valueSet=npt.__lookupSetter__("value"),npt.__defineGetter__("value",getter),npt.__defineSetter__("value",setter));npt.inputmask.__valueGet=valueGet,npt.inputmask.__valueSet=valueSet;}
npt.inputmask._valueGet=function(overruleRTL){return isRTL&&!0!==overruleRTL?valueGet.call(this.el).split("").reverse().join(""):valueGet.call(this.el);},npt.inputmask._valueSet=function(value,overruleRTL){valueSet.call(this.el,null===value||value===undefined?"":!0!==overruleRTL&&isRTL?value.split("").reverse().join(""):value);},valueGet===undefined&&(valueGet=function(){return this.value;},valueSet=function(value){this.value=value;},function(type){if($.valHooks&&($.valHooks[type]===undefined||!0!==$.valHooks[type].inputmaskpatch)){var valhookGet=$.valHooks[type]&&$.valHooks[type].get?$.valHooks[type].get:function(elem){return elem.value;},valhookSet=$.valHooks[type]&&$.valHooks[type].set?$.valHooks[type].set:function(elem,value){return elem.value=value,elem;};$.valHooks[type]={get:function(elem){if(elem.inputmask){if(elem.inputmask.opts.autoUnmask)return elem.inputmask.unmaskedvalue();var result=valhookGet(elem);return-1!==getLastValidPosition(undefined,undefined,elem.inputmask.maskset.validPositions)||!0!==opts.nullable?result:"";}
return valhookGet(elem);},set:function(elem,value){var result,$elem=$(elem);return result=valhookSet(elem,value),elem.inputmask&&$elem.trigger("setvalue"),result;},inputmaskpatch:!0};}}(npt.type),function(npt){EventRuler.on(npt,"mouseenter",function(event){var $input=$(this);this.inputmask._valueGet()!==getBuffer().join("")&&$input.trigger("setvalue");});}(npt));}}(input),isSupported;}(elem,opts);if(!1!==isSupported&&(el=elem,$el=$(el),("rtl"===el.dir||opts.rightAlign)&&(el.style.textAlign="right"),("rtl"===el.dir||opts.numericInput)&&(el.dir="ltr",el.removeAttribute("dir"),el.inputmask.isRTL=!0,isRTL=!0),!0===opts.colorMask&&initializeColorMask(el),android&&(el.hasOwnProperty("inputmode")&&(el.inputmode=opts.inputmode,el.setAttribute("inputmode",opts.inputmode)),"rtfm"===opts.androidHack&&(!0!==opts.colorMask&&initializeColorMask(el),el.type="password")),!0===isSupported&&(EventRuler.on(el,"submit",EventHandlers.submitEvent),EventRuler.on(el,"reset",EventHandlers.resetEvent),EventRuler.on(el,"mouseenter",EventHandlers.mouseenterEvent),EventRuler.on(el,"blur",EventHandlers.blurEvent),EventRuler.on(el,"focus",EventHandlers.focusEvent),EventRuler.on(el,"mouseleave",EventHandlers.mouseleaveEvent),!0!==opts.colorMask&&EventRuler.on(el,"click",EventHandlers.clickEvent),EventRuler.on(el,"dblclick",EventHandlers.dblclickEvent),EventRuler.on(el,"paste",EventHandlers.pasteEvent),EventRuler.on(el,"dragdrop",EventHandlers.pasteEvent),EventRuler.on(el,"drop",EventHandlers.pasteEvent),EventRuler.on(el,"cut",EventHandlers.cutEvent),EventRuler.on(el,"complete",opts.oncomplete),EventRuler.on(el,"incomplete",opts.onincomplete),EventRuler.on(el,"cleared",opts.oncleared),android||!0===opts.inputEventOnly||(EventRuler.on(el,"keydown",EventHandlers.keydownEvent),EventRuler.on(el,"keypress",EventHandlers.keypressEvent)),EventRuler.on(el,"compositionstart",$.noop),EventRuler.on(el,"compositionupdate",$.noop),EventRuler.on(el,"compositionend",$.noop),EventRuler.on(el,"keyup",$.noop),EventRuler.on(el,"input",EventHandlers.inputFallBackEvent),EventRuler.on(el,"beforeinput",$.noop)),EventRuler.on(el,"setvalue",EventHandlers.setValueEvent),getBufferTemplate(),""!==el.inputmask._valueGet(!0)||!1===opts.clearMaskOnLostFocus||document.activeElement===el)){var initialValue=$.isFunction(opts.onBeforeMask)?opts.onBeforeMask(el.inputmask._valueGet(!0),opts)||el.inputmask._valueGet(!0):el.inputmask._valueGet(!0);""!==initialValue&&checkVal(el,!0,!1,isRTL?initialValue.split("").reverse():initialValue.split(""));var buffer=getBuffer().slice();undoValue=buffer.join(""),!1===isComplete(buffer)&&opts.clearIncomplete&&resetMaskSet(),opts.clearMaskOnLostFocus&&document.activeElement!==el&&(-1===getLastValidPosition()?buffer=[]:clearOptionalTail(buffer)),writeBuffer(el,buffer),document.activeElement===el&&caret(el,seekNext(getLastValidPosition()));}}(el);break;case"format":return valueBuffer=($.isFunction(opts.onBeforeMask)?opts.onBeforeMask(actionObj.value,opts)||actionObj.value:actionObj.value).split(""),checkVal(undefined,!0,!1,isRTL?valueBuffer.reverse():valueBuffer),actionObj.metadata?{value:isRTL?getBuffer().slice().reverse().join(""):getBuffer().join(""),metadata:maskScope.call(this,{action:"getmetadata"},maskset,opts)}:isRTL?getBuffer().slice().reverse().join(""):getBuffer().join("");case"isValid":actionObj.value?(valueBuffer=actionObj.value.split(""),checkVal(undefined,!0,!0,isRTL?valueBuffer.reverse():valueBuffer)):actionObj.value=getBuffer().join("");for(var buffer=getBuffer(),rl=determineLastRequiredPosition(),lmib=buffer.length-1;lmib>rl&&!isMask(lmib);lmib--);return buffer.splice(rl,lmib+1-rl),isComplete(buffer)&&actionObj.value===getBuffer().join("");case"getemptymask":return getBufferTemplate().join("");case"remove":if(el&&el.inputmask){$el=$(el),el.inputmask._valueSet(opts.autoUnmask?unmaskedvalue(el):el.inputmask._valueGet(!0)),EventRuler.off(el);Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el),"value")&&el.inputmask.__valueGet&&Object.defineProperty(el,"value",{get:el.inputmask.__valueGet,set:el.inputmask.__valueSet,configurable:!0}):document.__lookupGetter__&&el.__lookupGetter__("value")&&el.inputmask.__valueGet&&(el.__defineGetter__("value",el.inputmask.__valueGet),el.__defineSetter__("value",el.inputmask.__valueSet)),el.inputmask=undefined;}
return el;case"getmetadata":if($.isArray(maskset.metadata)){var maskTarget=getMaskTemplate(!0,0,!1).join("");return $.each(maskset.metadata,function(ndx,mtdt){if(mtdt.mask===maskTarget)return maskTarget=mtdt,!1;}),maskTarget;}
return maskset.metadata;}}
var ua=navigator.userAgent,mobile=/mobile/i.test(ua),iemobile=/iemobile/i.test(ua),iphone=/iphone/i.test(ua)&&!iemobile,android=/android/i.test(ua)&&!iemobile;return Inputmask.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:$.noop,onincomplete:$.noop,oncleared:$.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,alias:null,onKeyDown:$.noop,onBeforeMask:null,onBeforePaste:function(pastedValue,opts){return $.isFunction(opts.onBeforeMask)?opts.onBeforeMask(pastedValue,opts):pastedValue;},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:$.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:undefined,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,canClearPosition:$.noop,preValidation:null,postValidation:null,staticDefinitionSymbol:undefined,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,androidHack:!1},definitions:{"9":{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:function(){return!0;},cardinality:1}},aliases:{},masksCache:{},mask:function(elems){function importAttributeOptions(npt,opts,userOptions,dataAttribute){function importOption(option,optionData){null!==(optionData=optionData!==undefined?optionData:npt.getAttribute(dataAttribute+"-"+option))&&("string"==typeof optionData&&(0===option.indexOf("on")?optionData=window[optionData]:"false"===optionData?optionData=!1:"true"===optionData&&(optionData=!0)),userOptions[option]=optionData);}
var option,dataoptions,optionData,p,attrOptions=npt.getAttribute(dataAttribute);if(attrOptions&&""!==attrOptions&&(attrOptions=attrOptions.replace(new RegExp("'","g"),'"'),dataoptions=JSON.parse("{"+attrOptions+"}")),dataoptions){optionData=undefined;for(p in dataoptions)if("alias"===p.toLowerCase()){optionData=dataoptions[p];break;}}
importOption("alias",optionData),userOptions.alias&&resolveAlias(userOptions.alias,userOptions,opts);for(option in opts){if(dataoptions){optionData=undefined;for(p in dataoptions)if(p.toLowerCase()===option.toLowerCase()){optionData=dataoptions[p];break;}}
importOption(option,optionData);}
return $.extend(!0,opts,userOptions),opts;}
var that=this;return"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,$.each(elems,function(ndx,el){var scopedOpts=$.extend(!0,{},that.opts);importAttributeOptions(el,scopedOpts,$.extend(!0,{},that.userOptions),that.dataAttribute);var maskset=generateMaskSet(scopedOpts,that.noMasksCache);maskset!==undefined&&(el.inputmask!==undefined&&el.inputmask.remove(),el.inputmask=new Inputmask(undefined,undefined,!0),el.inputmask.opts=scopedOpts,el.inputmask.noMasksCache=that.noMasksCache,el.inputmask.userOptions=$.extend(!0,{},that.userOptions),el.inputmask.isRTL=that.isRTL,el.inputmask.el=el,el.inputmask.maskset=maskset,$.data(el,"_inputmask_opts",scopedOpts),maskScope.call(el.inputmask,{action:"mask"}));}),elems&&elems[0]?elems[0].inputmask||this:this;},option:function(options,noremask){return"string"==typeof options?this.opts[options]:"object"==typeof options?($.extend(this.userOptions,options),this.el&&!0!==noremask&&this.mask(this.el),this):void 0;},unmaskedvalue:function(value){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"unmaskedvalue",value:value});},remove:function(){return maskScope.call(this,{action:"remove"});},getemptymask:function(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"getemptymask"});},hasMaskedValue:function(){return!this.opts.autoUnmask;},isComplete:function(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"isComplete"});},getmetadata:function(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"getmetadata"});},isValid:function(value){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"isValid",value:value});},format:function(value,metadata){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"format",value:value,metadata:metadata});},analyseMask:function(mask,regexMask,opts){function MaskToken(isGroup,isOptional,isQuantifier,isAlternator){this.matches=[],this.openGroup=isGroup||!1,this.isGroup=isGroup||!1,this.isOptional=isOptional||!1,this.isQuantifier=isQuantifier||!1,this.isAlternator=isAlternator||!1,this.quantifier={min:1,max:1};}
function insertTestDefinition(mtoken,element,position){if(position=position!==undefined?position:mtoken.matches.length,regexMask)0===element.indexOf("[")||escaped?mtoken.matches.splice(position++,0,{fn:new RegExp(element,opts.casing?"i":""),cardinality:0,optionality:mtoken.isOptional,newBlockMarker:prevMatch===undefined||prevMatch.def!==element,casing:null,def:opts.staticDefinitionSymbol||element,placeholder:opts.staticDefinitionSymbol!==undefined?element:undefined,nativeDef:element}):mtoken.matches.splice(position++,0,{fn:null,cardinality:0,optionality:mtoken.isOptional,newBlockMarker:prevMatch===undefined||prevMatch.def!==element,casing:null,def:opts.staticDefinitionSymbol||element,placeholder:opts.staticDefinitionSymbol!==undefined?element:undefined,nativeDef:element}),escaped=!1;else{var maskdef=(opts.definitions?opts.definitions[element]:undefined)||Inputmask.prototype.definitions[element],prevMatch=mtoken.matches[position-1];if(maskdef&&!escaped){for(var prevalidators=maskdef.prevalidator,prevalidatorsL=prevalidators?prevalidators.length:0,i=1;i<maskdef.cardinality;i++){var prevalidator=prevalidatorsL>=i?prevalidators[i-1]:[],validator=prevalidator.validator,cardinality=prevalidator.cardinality;mtoken.matches.splice(position++,0,{fn:validator?"string"==typeof validator?new RegExp(validator,opts.casing?"i":""):new function(){this.test=validator;}():new RegExp("."),cardinality:cardinality||1,optionality:mtoken.isOptional,newBlockMarker:prevMatch===undefined||prevMatch.def!==(maskdef.definitionSymbol||element),casing:maskdef.casing,def:maskdef.definitionSymbol||element,placeholder:maskdef.placeholder,nativeDef:element}),prevMatch=mtoken.matches[position-1];}
mtoken.matches.splice(position++,0,{fn:maskdef.validator?"string"==typeof maskdef.validator?new RegExp(maskdef.validator,opts.casing?"i":""):new function(){this.test=maskdef.validator;}():new RegExp("."),cardinality:maskdef.cardinality,optionality:mtoken.isOptional,newBlockMarker:prevMatch===undefined||prevMatch.def!==(maskdef.definitionSymbol||element),casing:maskdef.casing,def:maskdef.definitionSymbol||element,placeholder:maskdef.placeholder,nativeDef:element});}else mtoken.matches.splice(position++,0,{fn:null,cardinality:0,optionality:mtoken.isOptional,newBlockMarker:prevMatch===undefined||prevMatch.def!==element,casing:null,def:opts.staticDefinitionSymbol||element,placeholder:opts.staticDefinitionSymbol!==undefined?element:undefined,nativeDef:element}),escaped=!1;}}
function verifyGroupMarker(maskToken){maskToken&&maskToken.matches&&$.each(maskToken.matches,function(ndx,token){var nextToken=maskToken.matches[ndx+1];(nextToken===undefined||nextToken.matches===undefined||!1===nextToken.isQuantifier)&&token&&token.isGroup&&(token.isGroup=!1,regexMask||(insertTestDefinition(token,opts.groupmarker.start,0),!0!==token.openGroup&&insertTestDefinition(token,opts.groupmarker.end))),verifyGroupMarker(token);});}
function defaultCase(){if(openenings.length>0){if(currentOpeningToken=openenings[openenings.length-1],insertTestDefinition(currentOpeningToken,m),currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++)alternator.matches[mndx].isGroup=!1;openenings.length>0?(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(alternator)):currentToken.matches.push(alternator);}}else insertTestDefinition(currentToken,m);}
function reverseTokens(maskToken){maskToken.matches=maskToken.matches.reverse();for(var match in maskToken.matches)if(maskToken.matches.hasOwnProperty(match)){var intMatch=parseInt(match);if(maskToken.matches[match].isQuantifier&&maskToken.matches[intMatch+1]&&maskToken.matches[intMatch+1].isGroup){var qt=maskToken.matches[match];maskToken.matches.splice(match,1),maskToken.matches.splice(intMatch+1,0,qt);}
maskToken.matches[match].matches!==undefined?maskToken.matches[match]=reverseTokens(maskToken.matches[match]):maskToken.matches[match]=function(st){return st===opts.optionalmarker.start?st=opts.optionalmarker.end:st===opts.optionalmarker.end?st=opts.optionalmarker.start:st===opts.groupmarker.start?st=opts.groupmarker.end:st===opts.groupmarker.end&&(st=opts.groupmarker.start),st;}(maskToken.matches[match]);}
return maskToken;}
var match,m,openingToken,currentOpeningToken,alternator,lastMatch,groupToken,tokenizer=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,regexTokenizer=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,escaped=!1,currentToken=new MaskToken(),openenings=[],maskTokens=[];for(regexMask&&(opts.optionalmarker.start=undefined,opts.optionalmarker.end=undefined);match=regexMask?regexTokenizer.exec(mask):tokenizer.exec(mask);){if(m=match[0],regexMask)switch(m.charAt(0)){case"?":m="{+}";break;case"+":case"*":m="{"+m+"}";}
if(escaped)defaultCase();else switch(m.charAt(0)){case opts.escapeChar:escaped=!0,regexMask&&defaultCase();break;case opts.optionalmarker.end:case opts.groupmarker.end:if(openingToken=openenings.pop(),openingToken.openGroup=!1,openingToken!==undefined)if(openenings.length>0){if(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(openingToken),currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++)alternator.matches[mndx].isGroup=!1;openenings.length>0?(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(alternator)):currentToken.matches.push(alternator);}}else currentToken.matches.push(openingToken);else defaultCase();break;case opts.optionalmarker.start:openenings.push(new MaskToken(!1,!0));break;case opts.groupmarker.start:openenings.push(new MaskToken(!0));break;case opts.quantifiermarker.start:var quantifier=new MaskToken(!1,!1,!0);m=m.replace(/[{}]/g,"");var mq=m.split(","),mq0=isNaN(mq[0])?mq[0]:parseInt(mq[0]),mq1=1===mq.length?mq0:isNaN(mq[1])?mq[1]:parseInt(mq[1]);if("*"!==mq1&&"+"!==mq1||(mq0="*"===mq1?0:1),quantifier.quantifier={min:mq0,max:mq1},openenings.length>0){var matches=openenings[openenings.length-1].matches;match=matches.pop(),match.isGroup||(groupToken=new MaskToken(!0),groupToken.matches.push(match),match=groupToken),matches.push(match),matches.push(quantifier);}else match=currentToken.matches.pop(),match.isGroup||(groupToken=new MaskToken(!0),groupToken.matches.push(match),match=groupToken),currentToken.matches.push(match),currentToken.matches.push(quantifier);break;case opts.alternatormarker:openenings.length>0?(currentOpeningToken=openenings[openenings.length-1],lastMatch=currentOpeningToken.matches.pop()):lastMatch=currentToken.matches.pop(),lastMatch.isAlternator?openenings.push(lastMatch):(alternator=new MaskToken(!1,!1,!1,!0),alternator.matches.push(lastMatch),openenings.push(alternator));break;default:defaultCase();}}
for(;openenings.length>0;)openingToken=openenings.pop(),currentToken.matches.push(openingToken);return currentToken.matches.length>0&&(verifyGroupMarker(currentToken),maskTokens.push(currentToken)),opts.numericInput&&reverseTokens(maskTokens[0]),maskTokens;}},Inputmask.extendDefaults=function(options){$.extend(!0,Inputmask.prototype.defaults,options);},Inputmask.extendDefinitions=function(definition){$.extend(!0,Inputmask.prototype.definitions,definition);},Inputmask.extendAliases=function(alias){$.extend(!0,Inputmask.prototype.aliases,alias);},Inputmask.format=function(value,options,metadata){return Inputmask(options).format(value,metadata);},Inputmask.unmask=function(value,options){return Inputmask(options).unmaskedvalue(value);},Inputmask.isValid=function(value,options){return Inputmask(options).isValid(value);},Inputmask.remove=function(elems){$.each(elems,function(ndx,el){el.inputmask&&el.inputmask.remove();});},Inputmask.escapeRegex=function(str){var specials=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return str.replace(new RegExp("(\\"+specials.join("|\\")+")","gim"),"\\$1");},Inputmask.keyCode={ALT:18,BACKSPACE:8,BACKSPACE_SAFARI:127,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91,X:88},Inputmask;}(window.dependencyLib||jQuery,window,document);}(),function(factory){!function($,Inputmask){void 0===$.fn.inputmask&&($.fn.inputmask=function(fn,options){var nptmask,input=this[0];if(void 0===options&&(options={}),"string"==typeof fn)switch(fn){case"unmaskedvalue":return input&&input.inputmask?input.inputmask.unmaskedvalue():$(input).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove();});case"getemptymask":return input&&input.inputmask?input.inputmask.getemptymask():"";case"hasMaskedValue":return!(!input||!input.inputmask)&&input.inputmask.hasMaskedValue();case"isComplete":return!input||!input.inputmask||input.inputmask.isComplete();case"getmetadata":return input&&input.inputmask?input.inputmask.getmetadata():void 0;case"setvalue":$(input).val(options),input&&void 0===input.inputmask&&$(input).triggerHandler("setvalue");break;case"option":if("string"!=typeof options)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(options);});if(input&&void 0!==input.inputmask)return input.inputmask.option(options);break;default:return options.alias=fn,nptmask=new Inputmask(options),this.each(function(){nptmask.mask(this);});}else{if("object"==typeof fn)return nptmask=new Inputmask(fn),void 0===fn.mask&&void 0===fn.alias?this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(fn);nptmask.mask(this);}):this.each(function(){nptmask.mask(this);});if(void 0===fn)return this.each(function(){nptmask=new Inputmask(options),nptmask.mask(this);});}}),$.fn.inputmask;}(jQuery,window.Inputmask);}(),function(factory){!function($,Inputmask){function isLeapYear(year){return isNaN(year)||29===new Date(year,2,0).getDate();}
Inputmask.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+escapedSeparator+"[01])");},val2:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[1-9]|[12][0-9])"+escapedSeparator+"(0[1-9]|1[012]))|(30"+escapedSeparator+"(0[13-9]|1[012]))|(31"+escapedSeparator+"(0[13578]|1[02]))");}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(chrs,minyear,maxyear){if(isNaN(chrs))return!1;var enteredyear=parseInt(chrs.concat(minyear.toString().slice(chrs.length))),enteredyear2=parseInt(chrs.concat(maxyear.toString().slice(chrs.length)));return!isNaN(enteredyear)&&(minyear<=enteredyear&&enteredyear<=maxyear)||!isNaN(enteredyear2)&&(minyear<=enteredyear2&&enteredyear2<=maxyear);},determinebaseyear:function(minyear,maxyear,hint){var currentyear=new Date().getFullYear();if(minyear>currentyear)return minyear;if(maxyear<currentyear){for(var maxYearPrefix=maxyear.toString().slice(0,2),maxYearPostfix=maxyear.toString().slice(2,4);maxyear<maxYearPrefix+hint;)maxYearPrefix--;var maxxYear=maxYearPrefix+maxYearPostfix;return minyear>maxxYear?minyear:maxxYear;}
if(minyear<=currentyear&&currentyear<=maxyear){for(var currentYearPrefix=currentyear.toString().slice(0,2);maxyear<currentYearPrefix+hint;)currentYearPrefix--;var currentYearAndHint=currentYearPrefix+hint;return currentYearAndHint<minyear?minyear:currentYearAndHint;}
return currentyear;},onKeyDown:function(e,buffer,caretPos,opts){var $input=$(this);if(e.ctrlKey&&e.keyCode===Inputmask.keyCode.RIGHT){var today=new Date();$input.val(today.getDate().toString()+(today.getMonth()+1).toString()+today.getFullYear().toString()),$input.trigger("setvalue");}},getFrontValue:function(mask,buffer,opts){for(var start=0,length=0,i=0;i<mask.length&&"2"!==mask.charAt(i);i++){var definition=opts.definitions[mask.charAt(i)];definition?(start+=length,length=definition.cardinality):length++;}
return buffer.join("").substr(start,length);},postValidation:function(buffer,currentResult,opts){var dayMonthValue,year,bufferStr=buffer.join("");return 0===opts.mask.indexOf("y")?(year=bufferStr.substr(0,4),dayMonthValue=bufferStr.substr(4,11)):(year=bufferStr.substr(6,11),dayMonthValue=bufferStr.substr(0,6)),currentResult&&(dayMonthValue!==opts.leapday||isLeapYear(year));},definitions:{"1":{validator:function(chrs,maskset,pos,strict,opts){var isValid=opts.regex.val1.test(chrs);return strict||isValid||chrs.charAt(1)!==opts.separator&&-1==="-./".indexOf(chrs.charAt(1))||!(isValid=opts.regex.val1.test("0"+chrs.charAt(0)))?isValid:(maskset.buffer[pos-1]="0",{refreshFromBuffer:{start:pos-1,end:pos},pos:pos,c:chrs.charAt(0)});},cardinality:2,prevalidator:[{validator:function(chrs,maskset,pos,strict,opts){var pchrs=chrs;isNaN(maskset.buffer[pos+1])||(pchrs+=maskset.buffer[pos+1]);var isValid=1===pchrs.length?opts.regex.val1pre.test(pchrs):opts.regex.val1.test(pchrs);if(!strict&&!isValid){if(isValid=opts.regex.val1.test(chrs+"0"))return maskset.buffer[pos]=chrs,maskset.buffer[++pos]="0",{pos:pos,c:"0"};if(isValid=opts.regex.val1.test("0"+chrs))return maskset.buffer[pos]="0",pos++,{pos:pos};}
return isValid;},cardinality:1}]},"2":{validator:function(chrs,maskset,pos,strict,opts){var frontValue=opts.getFrontValue(maskset.mask,maskset.buffer,opts);-1!==frontValue.indexOf(opts.placeholder[0])&&(frontValue="01"+opts.separator);var isValid=opts.regex.val2(opts.separator).test(frontValue+chrs);return strict||isValid||chrs.charAt(1)!==opts.separator&&-1==="-./".indexOf(chrs.charAt(1))||!(isValid=opts.regex.val2(opts.separator).test(frontValue+"0"+chrs.charAt(0)))?isValid:(maskset.buffer[pos-1]="0",{refreshFromBuffer:{start:pos-1,end:pos},pos:pos,c:chrs.charAt(0)});},cardinality:2,prevalidator:[{validator:function(chrs,maskset,pos,strict,opts){isNaN(maskset.buffer[pos+1])||(chrs+=maskset.buffer[pos+1]);var frontValue=opts.getFrontValue(maskset.mask,maskset.buffer,opts);-1!==frontValue.indexOf(opts.placeholder[0])&&(frontValue="01"+opts.separator);var isValid=1===chrs.length?opts.regex.val2pre(opts.separator).test(frontValue+chrs):opts.regex.val2(opts.separator).test(frontValue+chrs);return strict||isValid||!(isValid=opts.regex.val2(opts.separator).test(frontValue+"0"+chrs))?isValid:(maskset.buffer[pos]="0",pos++,{pos:pos});},cardinality:1}]},y:{validator:function(chrs,maskset,pos,strict,opts){return opts.isInYearRange(chrs,opts.yearrange.minyear,opts.yearrange.maxyear);},cardinality:4,prevalidator:[{validator:function(chrs,maskset,pos,strict,opts){var isValid=opts.isInYearRange(chrs,opts.yearrange.minyear,opts.yearrange.maxyear);if(!strict&&!isValid){var yearPrefix=opts.determinebaseyear(opts.yearrange.minyear,opts.yearrange.maxyear,chrs+"0").toString().slice(0,1);if(isValid=opts.isInYearRange(yearPrefix+chrs,opts.yearrange.minyear,opts.yearrange.maxyear))return maskset.buffer[pos++]=yearPrefix.charAt(0),{pos:pos};if(yearPrefix=opts.determinebaseyear(opts.yearrange.minyear,opts.yearrange.maxyear,chrs+"0").toString().slice(0,2),isValid=opts.isInYearRange(yearPrefix+chrs,opts.yearrange.minyear,opts.yearrange.maxyear))return maskset.buffer[pos++]=yearPrefix.charAt(0),maskset.buffer[pos++]=yearPrefix.charAt(1),{pos:pos};}
return isValid;},cardinality:1},{validator:function(chrs,maskset,pos,strict,opts){var isValid=opts.isInYearRange(chrs,opts.yearrange.minyear,opts.yearrange.maxyear);if(!strict&&!isValid){var yearPrefix=opts.determinebaseyear(opts.yearrange.minyear,opts.yearrange.maxyear,chrs).toString().slice(0,2);if(isValid=opts.isInYearRange(chrs[0]+yearPrefix[1]+chrs[1],opts.yearrange.minyear,opts.yearrange.maxyear))return maskset.buffer[pos++]=yearPrefix.charAt(1),{pos:pos};if(yearPrefix=opts.determinebaseyear(opts.yearrange.minyear,opts.yearrange.maxyear,chrs).toString().slice(0,2),isValid=opts.isInYearRange(yearPrefix+chrs,opts.yearrange.minyear,opts.yearrange.maxyear))return maskset.buffer[pos-1]=yearPrefix.charAt(0),maskset.buffer[pos++]=yearPrefix.charAt(1),maskset.buffer[pos++]=chrs.charAt(0),{refreshFromBuffer:{start:pos-3,end:pos},pos:pos};}
return isValid;},cardinality:2},{validator:function(chrs,maskset,pos,strict,opts){return opts.isInYearRange(chrs,opts.yearrange.minyear,opts.yearrange.maxyear);},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[13-9]|1[012])"+escapedSeparator+"[0-3])|(02"+escapedSeparator+"[0-2])");},val2:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[1-9]|1[012])"+escapedSeparator+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+escapedSeparator+"30)|((0[13578]|1[02])"+escapedSeparator+"31)");},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(e,buffer,caretPos,opts){var $input=$(this);if(e.ctrlKey&&e.keyCode===Inputmask.keyCode.RIGHT){var today=new Date();$input.val((today.getMonth()+1).toString()+today.getDate().toString()+today.getFullYear().toString()),$input.trigger("setvalue");}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(e,buffer,caretPos,opts){var $input=$(this);if(e.ctrlKey&&e.keyCode===Inputmask.keyCode.RIGHT){var today=new Date();$input.val(today.getFullYear().toString()+(today.getMonth()+1).toString()+today.getDate().toString()),$input.trigger("setvalue");}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(chrs,maskset,pos,strict,opts){if("24"===opts.hourFormat&&24===parseInt(chrs,10))return maskset.buffer[pos-1]="0",maskset.buffer[pos]="0",{refreshFromBuffer:{start:pos-1,end:pos},c:"0"};var isValid=opts.regex.hrs.test(chrs);if(!strict&&!isValid&&(chrs.charAt(1)===opts.timeseparator||-1!=="-.:".indexOf(chrs.charAt(1)))&&(isValid=opts.regex.hrs.test("0"+chrs.charAt(0))))return maskset.buffer[pos-1]="0",maskset.buffer[pos]=chrs.charAt(0),pos++,{refreshFromBuffer:{start:pos-2,end:pos},pos:pos,c:opts.timeseparator};if(isValid&&"24"!==opts.hourFormat&&opts.regex.hrs24.test(chrs)){var tmp=parseInt(chrs,10);return 24===tmp?(maskset.buffer[pos+5]="a",maskset.buffer[pos+6]="m"):(maskset.buffer[pos+5]="p",maskset.buffer[pos+6]="m"),tmp-=12,tmp<10?(maskset.buffer[pos]=tmp.toString(),maskset.buffer[pos-1]="0"):(maskset.buffer[pos]=tmp.toString().charAt(1),maskset.buffer[pos-1]=tmp.toString().charAt(0)),{refreshFromBuffer:{start:pos-1,end:pos+6},c:maskset.buffer[pos]};}
return isValid;},cardinality:2,prevalidator:[{validator:function(chrs,maskset,pos,strict,opts){var isValid=opts.regex.hrspre.test(chrs);return strict||isValid||!(isValid=opts.regex.hrs.test("0"+chrs))?isValid:(maskset.buffer[pos]="0",pos++,{pos:pos});},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(chrs,maskset,pos,strict,opts){var isValid=opts.regex.mspre.test(chrs);return strict||isValid||!(isValid=opts.regex.ms.test("0"+chrs))?isValid:(maskset.buffer[pos]="0",pos++,{pos:pos});},cardinality:1}]},t:{validator:function(chrs,maskset,pos,strict,opts){return opts.regex.ampm.test(chrs+"m");},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"mm/dd/yyyy hh:mm xm":{mask:"1/2/y h:s t\\m",placeholder:"mm/dd/yyyy hh:mm xm",alias:"datetime12",regex:{val2pre:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[13-9]|1[012])"+escapedSeparator+"[0-3])|(02"+escapedSeparator+"[0-2])");},val2:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[1-9]|1[012])"+escapedSeparator+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+escapedSeparator+"30)|((0[13578]|1[02])"+escapedSeparator+"31)");},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(e,buffer,caretPos,opts){var $input=$(this);if(e.ctrlKey&&e.keyCode===Inputmask.keyCode.RIGHT){var today=new Date();$input.val((today.getMonth()+1).toString()+today.getDate().toString()+today.getFullYear().toString()),$input.trigger("setvalue");}}},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"},shamsi:{regex:{val2pre:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[1-9]|1[012])"+escapedSeparator+"[0-3])");},val2:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[1-9]|1[012])"+escapedSeparator+"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])"+escapedSeparator+"30)|((0[1-6])"+escapedSeparator+"31)");},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},yearrange:{minyear:1300,maxyear:1499},mask:"y/1/2",leapday:"/12/30",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",clearIncomplete:!0},"yyyy-mm-dd hh:mm:ss":{mask:"y-1-2 h:s:s",placeholder:"yyyy-mm-dd hh:mm:ss",alias:"datetime",separator:"-",leapday:"-02-29",regex:{val2pre:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[13-9]|1[012])"+escapedSeparator+"[0-3])|(02"+escapedSeparator+"[0-2])");},val2:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[1-9]|1[012])"+escapedSeparator+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+escapedSeparator+"30)|((0[13578]|1[02])"+escapedSeparator+"31)");},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},onKeyDown:function(e,buffer,caretPos,opts){}}});}(window.dependencyLib||jQuery,window.Inputmask);}(),function(factory){!function($,Inputmask){Inputmask.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Fa-f]",cardinality:1,casing:"upper"}}),Inputmask.extendAliases({url:{definitions:{i:{validator:".",cardinality:1}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(chrs,maskset,pos,strict,opts){return pos-1>-1&&"."!==maskset.buffer[pos-1]?(chrs=maskset.buffer[pos-1]+chrs,chrs=pos-2>-1&&"."!==maskset.buffer[pos-2]?maskset.buffer[pos-2]+chrs:"0"+chrs):chrs="00"+chrs,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);},cardinality:1}},onUnMask:function(maskedValue,unmaskedValue,opts){return maskedValue;},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(pastedValue,opts){return pastedValue=pastedValue.toLowerCase(),pastedValue.replace("mailto:","");},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"},"-":{validator:"[0-9A-Za-z-]",cardinality:1,casing:"lower"}},onUnMask:function(maskedValue,unmaskedValue,opts){return maskedValue;},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",cardinality:1,casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}});}(window.dependencyLib||jQuery,window.Inputmask);}(),function(factory){!function($,Inputmask,undefined){function autoEscape(txt,opts){for(var escapedTxt="",i=0;i<txt.length;i++)opts.definitions[txt.charAt(i)]||opts.optionalmarker.start===txt.charAt(i)||opts.optionalmarker.end===txt.charAt(i)||opts.quantifiermarker.start===txt.charAt(i)||opts.quantifiermarker.end===txt.charAt(i)||opts.groupmarker.start===txt.charAt(i)||opts.groupmarker.end===txt.charAt(i)||opts.alternatormarker===txt.charAt(i)?escapedTxt+="\\"+txt.charAt(i):escapedTxt+=txt.charAt(i);return escapedTxt;}
Inputmask.extendAliases({numeric:{mask:function(opts){if(0!==opts.repeat&&isNaN(opts.integerDigits)&&(opts.integerDigits=opts.repeat),opts.repeat=0,opts.groupSeparator===opts.radixPoint&&("."===opts.radixPoint?opts.groupSeparator=",":","===opts.radixPoint?opts.groupSeparator=".":opts.groupSeparator="")," "===opts.groupSeparator&&(opts.skipOptionalPartCharacter=undefined),opts.autoGroup=opts.autoGroup&&""!==opts.groupSeparator,opts.autoGroup&&("string"==typeof opts.groupSize&&isFinite(opts.groupSize)&&(opts.groupSize=parseInt(opts.groupSize)),isFinite(opts.integerDigits))){var seps=Math.floor(opts.integerDigits/opts.groupSize),mod=opts.integerDigits%opts.groupSize;opts.integerDigits=parseInt(opts.integerDigits)+(0===mod?seps-1:seps),opts.integerDigits<1&&(opts.integerDigits="*");}
opts.placeholder.length>1&&(opts.placeholder=opts.placeholder.charAt(0)),"radixFocus"===opts.positionCaretOnClick&&""===opts.placeholder&&!1===opts.integerOptional&&(opts.positionCaretOnClick="lvp"),opts.definitions[";"]=opts.definitions["~"],opts.definitions[";"].definitionSymbol="~",!0===opts.numericInput&&(opts.positionCaretOnClick="radixFocus"===opts.positionCaretOnClick?"lvp":opts.positionCaretOnClick,opts.digitsOptional=!1,isNaN(opts.digits)&&(opts.digits=2),opts.decimalProtect=!1);var mask="[+]";if(mask+=autoEscape(opts.prefix,opts),!0===opts.integerOptional?mask+="~{1,"+opts.integerDigits+"}":mask+="~{"+opts.integerDigits+"}",opts.digits!==undefined){opts.radixPointDefinitionSymbol=opts.decimalProtect?":":opts.radixPoint;var dq=opts.digits.toString().split(",");isFinite(dq[0]&&dq[1]&&isFinite(dq[1]))?mask+=opts.radixPointDefinitionSymbol+";{"+opts.digits+"}":(isNaN(opts.digits)||parseInt(opts.digits)>0)&&(opts.digitsOptional?mask+="["+opts.radixPointDefinitionSymbol+";{1,"+opts.digits+"}]":mask+=opts.radixPointDefinitionSymbol+";{"+opts.digits+"}");}
return mask+=autoEscape(opts.suffix,opts),mask+="[-]",opts.greedy=!1,mask;},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",preValidation:function(buffer,pos,c,isSelection,opts){if("-"===c||c==opts.negationSymbol.front)return!0===opts.allowMinus&&(opts.isNegative=opts.isNegative===undefined||!opts.isNegative,""===buffer.join("")||{caret:pos,dopost:!0});if(!1===isSelection&&c===opts.radixPoint&&opts.digits!==undefined&&(isNaN(opts.digits)||parseInt(opts.digits)>0)){var radixPos=$.inArray(opts.radixPoint,buffer);if(-1!==radixPos)return!0===opts.numericInput?pos===radixPos:{caret:radixPos+1};}
return!0;},postValidation:function(buffer,currentResult,opts){var suffix=opts.suffix.split(""),prefix=opts.prefix.split("");if(currentResult.pos==undefined&&currentResult.caret!==undefined&&!0!==currentResult.dopost)return currentResult;var caretPos=currentResult.caret!=undefined?currentResult.caret:currentResult.pos,maskedValue=buffer.slice();opts.numericInput&&(caretPos=maskedValue.length-caretPos-1,maskedValue=maskedValue.reverse());var charAtPos=maskedValue[caretPos];if(charAtPos===opts.groupSeparator&&(caretPos+=1,charAtPos=maskedValue[caretPos]),caretPos==maskedValue.length-opts.suffix.length-1&&charAtPos===opts.radixPoint)return currentResult;charAtPos!==undefined&&charAtPos!==opts.radixPoint&&charAtPos!==opts.negationSymbol.front&&charAtPos!==opts.negationSymbol.back&&(maskedValue[caretPos]="?",opts.prefix.length>0&&caretPos>=(!1===opts.isNegative?1:0)&&caretPos<opts.prefix.length-1+(!1===opts.isNegative?1:0)?prefix[caretPos-(!1===opts.isNegative?1:0)]="?":opts.suffix.length>0&&caretPos>=maskedValue.length-opts.suffix.length-(!1===opts.isNegative?1:0)&&(suffix[caretPos-(maskedValue.length-opts.suffix.length-(!1===opts.isNegative?1:0))]="?")),prefix=prefix.join(""),suffix=suffix.join("");var processValue=maskedValue.join("").replace(prefix,"");if(processValue=processValue.replace(suffix,""),processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"),""),processValue=processValue.replace(new RegExp("[-"+Inputmask.escapeRegex(opts.negationSymbol.front)+"]","g"),""),processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back)+"$"),""),isNaN(opts.placeholder)&&(processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder),"g"),"")),processValue.length>1&&1!==processValue.indexOf(opts.radixPoint)&&("0"==charAtPos&&(processValue=processValue.replace(/^\?/g,"")),processValue=processValue.replace(/^0/g,"")),processValue.charAt(0)===opts.radixPoint&&!0!==opts.numericInput&&(processValue="0"+processValue),""!==processValue){if(processValue=processValue.split(""),!opts.digitsOptional&&isFinite(opts.digits)){var radixPosition=$.inArray(opts.radixPoint,processValue),rpb=$.inArray(opts.radixPoint,maskedValue);-1===radixPosition&&(processValue.push(opts.radixPoint),radixPosition=processValue.length-1);for(var i=1;i<=opts.digits;i++)opts.digitsOptional||processValue[radixPosition+i]!==undefined&&processValue[radixPosition+i]!==opts.placeholder.charAt(0)?-1!==rpb&&maskedValue[rpb+i]!==undefined&&(processValue[radixPosition+i]=processValue[radixPosition+i]||maskedValue[rpb+i]):processValue[radixPosition+i]=currentResult.placeholder||opts.placeholder.charAt(0);}
!0!==opts.autoGroup||""===opts.groupSeparator||charAtPos===opts.radixPoint&&currentResult.pos===undefined&&!currentResult.dopost?processValue=processValue.join(""):(processValue=Inputmask(function(buffer,opts){var postMask="";if(postMask+="("+opts.groupSeparator+"*{"+opts.groupSize+"}){*}",""!==opts.radixPoint){var radixSplit=buffer.join("").split(opts.radixPoint);radixSplit[1]&&(postMask+=opts.radixPoint+"*{"+radixSplit[1].match(/^\d*\??\d*/)[0].length+"}");}
return postMask;}(processValue,opts),{numericInput:!0,jitMasking:!0,definitions:{"*":{validator:"[0-9?]",cardinality:1}}}).format(processValue.join("")),processValue.charAt(0)===opts.groupSeparator&&processValue.substr(1));}
if(opts.isNegative&&"blur"===currentResult.event&&(opts.isNegative="0"!==processValue),processValue=prefix+processValue,processValue+=suffix,opts.isNegative&&(processValue=opts.negationSymbol.front+processValue,processValue+=opts.negationSymbol.back),processValue=processValue.split(""),charAtPos!==undefined)if(charAtPos!==opts.radixPoint&&charAtPos!==opts.negationSymbol.front&&charAtPos!==opts.negationSymbol.back)caretPos=$.inArray("?",processValue),caretPos>-1?processValue[caretPos]=charAtPos:caretPos=currentResult.caret||0;else if(charAtPos===opts.radixPoint||charAtPos===opts.negationSymbol.front||charAtPos===opts.negationSymbol.back){var newCaretPos=$.inArray(charAtPos,processValue);-1!==newCaretPos&&(caretPos=newCaretPos);}
opts.numericInput&&(caretPos=processValue.length-caretPos-1,processValue=processValue.reverse());var rslt={caret:charAtPos===undefined||currentResult.pos!==undefined?caretPos+(opts.numericInput?-1:1):caretPos,buffer:processValue,refreshFromBuffer:currentResult.dopost||buffer.join("")!==processValue.join("")};return rslt.refreshFromBuffer?rslt:currentResult;},onBeforeWrite:function(e,buffer,caretPos,opts){if(e)switch(e.type){case"keydown":return opts.postValidation(buffer,{caret:caretPos,dopost:!0},opts);case"blur":case"checkval":var unmasked;if(function(opts){opts.parseMinMaxOptions===undefined&&(null!==opts.min&&(opts.min=opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(opts.min=opts.min.replace(opts.radixPoint,".")),opts.min=isFinite(opts.min)?parseFloat(opts.min):NaN,isNaN(opts.min)&&(opts.min=Number.MIN_VALUE)),null!==opts.max&&(opts.max=opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(opts.max=opts.max.replace(opts.radixPoint,".")),opts.max=isFinite(opts.max)?parseFloat(opts.max):NaN,isNaN(opts.max)&&(opts.max=Number.MAX_VALUE)),opts.parseMinMaxOptions="done");}(opts),null!==opts.min||null!==opts.max){if(unmasked=opts.onUnMask(buffer.join(""),undefined,$.extend({},opts,{unmaskAsNumber:!0})),null!==opts.min&&unmasked<opts.min)return opts.isNegative=opts.min<0,opts.postValidation(opts.min.toString().replace(".",opts.radixPoint).split(""),{caret:caretPos,dopost:!0,placeholder:"0"},opts);if(null!==opts.max&&unmasked>opts.max)return opts.isNegative=opts.max<0,opts.postValidation(opts.max.toString().replace(".",opts.radixPoint).split(""),{caret:caretPos,dopost:!0,placeholder:"0"},opts);}
return opts.postValidation(buffer,{caret:caretPos,dopost:!0,placeholder:"0",event:"blur"},opts);case"_checkval":return{caret:caretPos};}},regex:{integerPart:function(opts,emptyCheck){return emptyCheck?new RegExp("["+Inputmask.escapeRegex(opts.negationSymbol.front)+"+]?"):new RegExp("["+Inputmask.escapeRegex(opts.negationSymbol.front)+"+]?\\d+");},integerNPart:function(opts){return new RegExp("[\\d"+Inputmask.escapeRegex(opts.groupSeparator)+Inputmask.escapeRegex(opts.placeholder.charAt(0))+"]+");}},definitions:{"~":{validator:function(chrs,maskset,pos,strict,opts,isSelection){var isValid=strict?new RegExp("[0-9"+Inputmask.escapeRegex(opts.groupSeparator)+"]").test(chrs):new RegExp("[0-9]").test(chrs);if(!0===isValid){if(!0!==opts.numericInput&&maskset.validPositions[pos]!==undefined&&"~"===maskset.validPositions[pos].match.def&&!isSelection){var processValue=maskset.buffer.join("");processValue=processValue.replace(new RegExp("[-"+Inputmask.escapeRegex(opts.negationSymbol.front)+"]","g"),""),processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back)+"$"),""),processValue=processValue.replace(/0/g,opts.placeholder.charAt(0));var bufferTemplate=maskset._buffer.join("");for(processValue===opts.radixPoint&&(processValue=bufferTemplate);null===processValue.match(Inputmask.escapeRegex(bufferTemplate)+"$");)bufferTemplate=bufferTemplate.slice(1);processValue=processValue.replace(bufferTemplate,""),processValue=processValue.split(""),isValid=processValue[pos]===undefined?{pos:pos,remove:pos}:{pos:pos};}}else strict||chrs!==opts.radixPoint||maskset.validPositions[pos-1]!==undefined||(maskset.buffer[pos]="0",isValid={pos:pos+1});return isValid;},cardinality:1},"+":{validator:function(chrs,maskset,pos,strict,opts){return opts.allowMinus&&("-"===chrs||chrs===opts.negationSymbol.front);},cardinality:1,placeholder:""},"-":{validator:function(chrs,maskset,pos,strict,opts){return opts.allowMinus&&chrs===opts.negationSymbol.back;},cardinality:1,placeholder:""},":":{validator:function(chrs,maskset,pos,strict,opts){var radix="["+Inputmask.escapeRegex(opts.radixPoint)+"]",isValid=new RegExp(radix).test(chrs);return isValid&&maskset.validPositions[pos]&&maskset.validPositions[pos].match.placeholder===opts.radixPoint&&(isValid={caret:pos+1}),isValid;},cardinality:1,placeholder:function(opts){return opts.radixPoint;}}},onUnMask:function(maskedValue,unmaskedValue,opts){if(""===unmaskedValue&&!0===opts.nullable)return unmaskedValue;var processValue=maskedValue.replace(opts.prefix,"");return processValue=processValue.replace(opts.suffix,""),processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"),""),""!==opts.placeholder.charAt(0)&&(processValue=processValue.replace(new RegExp(opts.placeholder.charAt(0),"g"),"0")),opts.unmaskAsNumber?(""!==opts.radixPoint&&-1!==processValue.indexOf(opts.radixPoint)&&(processValue=processValue.replace(Inputmask.escapeRegex.call(this,opts.radixPoint),".")),Number(processValue)):processValue;},isComplete:function(buffer,opts){var maskedValue=buffer.join("");if(buffer.slice().join("")!==maskedValue)return!1;var processValue=maskedValue.replace(opts.prefix,"");return processValue=processValue.replace(opts.suffix,""),processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(processValue=processValue.replace(Inputmask.escapeRegex(opts.radixPoint),".")),isFinite(processValue);},onBeforeMask:function(initialValue,opts){if(opts.isNegative=undefined,initialValue=initialValue.toString().charAt(initialValue.length-1)===opts.radixPoint?initialValue.toString().substr(0,initialValue.length-1):initialValue.toString(),""!==opts.radixPoint&&isFinite(initialValue)){var vs=initialValue.split("."),groupSize=""!==opts.groupSeparator?parseInt(opts.groupSize):0;2===vs.length&&(vs[0].length>groupSize||vs[1].length>groupSize||vs[0].length<=groupSize&&vs[1].length<groupSize)&&(initialValue=initialValue.replace(".",opts.radixPoint));}
var kommaMatches=initialValue.match(/,/g),dotMatches=initialValue.match(/\./g);if(dotMatches&&kommaMatches?dotMatches.length>kommaMatches.length?(initialValue=initialValue.replace(/\./g,""),initialValue=initialValue.replace(",",opts.radixPoint)):kommaMatches.length>dotMatches.length?(initialValue=initialValue.replace(/,/g,""),initialValue=initialValue.replace(".",opts.radixPoint)):initialValue=initialValue.indexOf(".")<initialValue.indexOf(",")?initialValue.replace(/\./g,""):initialValue=initialValue.replace(/,/g,""):initialValue=initialValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"),""),0===opts.digits&&(-1!==initialValue.indexOf(".")?initialValue=initialValue.substring(0,initialValue.indexOf(".")):-1!==initialValue.indexOf(",")&&(initialValue=initialValue.substring(0,initialValue.indexOf(",")))),""!==opts.radixPoint&&isFinite(opts.digits)&&-1!==initialValue.indexOf(opts.radixPoint)){var valueParts=initialValue.split(opts.radixPoint),decPart=valueParts[1].match(new RegExp("\\d*"))[0];if(parseInt(opts.digits)<decPart.toString().length){var digitsFactor=Math.pow(10,parseInt(opts.digits));initialValue=initialValue.replace(Inputmask.escapeRegex(opts.radixPoint),"."),initialValue=Math.round(parseFloat(initialValue)*digitsFactor)/digitsFactor,initialValue=initialValue.toString().replace(".",opts.radixPoint);}}
return initialValue;},canClearPosition:function(maskset,position,lvp,strict,opts){var vp=maskset.validPositions[position],canClear=vp.input!==opts.radixPoint||null!==maskset.validPositions[position].match.fn&&!1===opts.decimalProtect||vp.input===opts.radixPoint&&maskset.validPositions[position+1]&&null===maskset.validPositions[position+1].match.fn||isFinite(vp.input)||position===lvp||vp.input===opts.groupSeparator||vp.input===opts.negationSymbol.front||vp.input===opts.negationSymbol.back;return!canClear||"+"!=vp.match.nativeDef&&"-"!=vp.match.nativeDef||(opts.isNegative=!1),canClear;},onKeyDown:function(e,buffer,caretPos,opts){var $input=$(this);if(e.ctrlKey)switch(e.keyCode){case Inputmask.keyCode.UP:$input.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(opts.step)),$input.trigger("setvalue");break;case Inputmask.keyCode.DOWN:$input.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(opts.step)),$input.trigger("setvalue");}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,digitsOptional:!0,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowMinus:!1}});}(window.dependencyLib||jQuery,window.Inputmask);}(),function(factory){!function($,Inputmask){function maskSort(a,b){var maska=(a.mask||a).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),maskb=(b.mask||b).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),maskas=(a.mask||a).split("#")[0],maskbs=(b.mask||b).split("#")[0];return 0===maskbs.indexOf(maskas)?-1:0===maskas.indexOf(maskbs)?1:maska.localeCompare(maskb);}
var analyseMaskBase=Inputmask.prototype.analyseMask;Inputmask.prototype.analyseMask=function(mask,regexMask,opts){function reduceVariations(masks,previousVariation,previousmaskGroup){previousVariation=previousVariation||"",previousmaskGroup=previousmaskGroup||maskGroups,""!==previousVariation&&(previousmaskGroup[previousVariation]={});for(var variation="",maskGroup=previousmaskGroup[previousVariation]||previousmaskGroup,i=masks.length-1;i>=0;i--)mask=masks[i].mask||masks[i],variation=mask.substr(0,1),maskGroup[variation]=maskGroup[variation]||[],maskGroup[variation].unshift(mask.substr(1)),masks.splice(i,1);for(var ndx in maskGroup)maskGroup[ndx].length>500&&reduceVariations(maskGroup[ndx].slice(),ndx,maskGroup);}
function rebuild(maskGroup){var mask="",submasks=[];for(var ndx in maskGroup)$.isArray(maskGroup[ndx])?1===maskGroup[ndx].length?submasks.push(ndx+maskGroup[ndx]):submasks.push(ndx+opts.groupmarker.start+maskGroup[ndx].join(opts.groupmarker.end+opts.alternatormarker+opts.groupmarker.start)+opts.groupmarker.end):submasks.push(ndx+rebuild(maskGroup[ndx]));return 1===submasks.length?mask+=submasks[0]:mask+=opts.groupmarker.start+submasks.join(opts.groupmarker.end+opts.alternatormarker+opts.groupmarker.start)+opts.groupmarker.end,mask;}
var maskGroups={};return opts.phoneCodes&&(opts.phoneCodes&&opts.phoneCodes.length>1e3&&(mask=mask.substr(1,mask.length-2),reduceVariations(mask.split(opts.groupmarker.end+opts.alternatormarker+opts.groupmarker.start)),mask=rebuild(maskGroups)),mask=mask.replace(/9/g,"\\9")),analyseMaskBase.call(this,mask,regexMask,opts);},Inputmask.extendAliases({abstractphone:{groupmarker:{start:"<",end:">"},countrycode:"",phoneCodes:[],mask:function(opts){return opts.definitions={"#":Inputmask.prototype.definitions[9]},opts.phoneCodes.sort(maskSort);},keepStatic:!0,onBeforeMask:function(value,opts){var processedValue=value.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(processedValue.indexOf(opts.countrycode)>1||-1===processedValue.indexOf(opts.countrycode))&&(processedValue="+"+opts.countrycode+processedValue),processedValue;},onUnMask:function(maskedValue,unmaskedValue,opts){return unmaskedValue;},inputmode:"tel"}});}(window.dependencyLib||jQuery,window.Inputmask);}(),function(factory){!function($,Inputmask){Inputmask.extendAliases({Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(buffer,opts){return new RegExp(opts.regex,opts.casing?"i":"").test(buffer.join(""));},definitions:{r:{validator:function(chrs,maskset,pos,strict,opts){function RegexToken(isGroup,isQuantifier){this.matches=[],this.isGroup=isGroup||!1,this.isQuantifier=isQuantifier||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0;}
function validateRegexToken(token,fromGroup){var isvalid=!1;fromGroup&&(regexPart+="(",openGroupCount++);for(var mndx=0;mndx<token.matches.length;mndx++){var matchToken=token.matches[mndx];if(!0===matchToken.isGroup)isvalid=validateRegexToken(matchToken,!0);else if(!0===matchToken.isQuantifier){var crrntndx=$.inArray(matchToken,token.matches),matchGroup=token.matches[crrntndx-1],regexPartBak=regexPart;if(isNaN(matchToken.quantifier.max)){for(;matchToken.repeaterPart&&matchToken.repeaterPart!==regexPart&&matchToken.repeaterPart.length>regexPart.length&&!(isvalid=validateRegexToken(matchGroup,!0)););isvalid=isvalid||validateRegexToken(matchGroup,!0),isvalid&&(matchToken.repeaterPart=regexPart),regexPart=regexPartBak+matchToken.quantifier.max;}else{for(var i=0,qm=matchToken.quantifier.max-1;i<qm&&!(isvalid=validateRegexToken(matchGroup,!0));i++);regexPart=regexPartBak+"{"+matchToken.quantifier.min+","+matchToken.quantifier.max+"}";}}else if(void 0!==matchToken.matches)for(var k=0;k<matchToken.length&&!(isvalid=validateRegexToken(matchToken[k],fromGroup));k++);else{var testExp;if("["==matchToken.charAt(0)){testExp=regexPart,testExp+=matchToken;for(var j=0;j<openGroupCount;j++)testExp+=")";var exp=new RegExp("^("+testExp+")$",opts.casing?"i":"");isvalid=exp.test(bufferStr);}else for(var l=0,tl=matchToken.length;l<tl;l++)if("\\"!==matchToken.charAt(l)){testExp=regexPart,testExp+=matchToken.substr(0,l+1),testExp=testExp.replace(/\|$/,"");for(var j=0;j<openGroupCount;j++)testExp+=")";var exp=new RegExp("^("+testExp+")$",opts.casing?"i":"");if(isvalid=exp.test(bufferStr))break;}
regexPart+=matchToken;}
if(isvalid)break;}
return fromGroup&&(regexPart+=")",openGroupCount--),isvalid;}
var bufferStr,groupToken,cbuffer=maskset.buffer.slice(),regexPart="",isValid=!1,openGroupCount=0;null===opts.regexTokens&&function(){var match,m,currentToken=new RegexToken(),opengroups=[];for(opts.regexTokens=[];match=opts.tokenizer.exec(opts.regex);)switch(m=match[0],m.charAt(0)){case"(":opengroups.push(new RegexToken(!0));break;case")":groupToken=opengroups.pop(),opengroups.length>0?opengroups[opengroups.length-1].matches.push(groupToken):currentToken.matches.push(groupToken);break;case"{":case"+":case"*":var quantifierToken=new RegexToken(!1,!0);m=m.replace(/[{}]/g,"");var mq=m.split(","),mq0=isNaN(mq[0])?mq[0]:parseInt(mq[0]),mq1=1===mq.length?mq0:isNaN(mq[1])?mq[1]:parseInt(mq[1]);if(quantifierToken.quantifier={min:mq0,max:mq1},opengroups.length>0){var matches=opengroups[opengroups.length-1].matches;match=matches.pop(),match.isGroup||(groupToken=new RegexToken(!0),groupToken.matches.push(match),match=groupToken),matches.push(match),matches.push(quantifierToken);}else match=currentToken.matches.pop(),match.isGroup||(groupToken=new RegexToken(!0),groupToken.matches.push(match),match=groupToken),currentToken.matches.push(match),currentToken.matches.push(quantifierToken);break;default:opengroups.length>0?opengroups[opengroups.length-1].matches.push(m):currentToken.matches.push(m);}
currentToken.matches.length>0&&opts.regexTokens.push(currentToken);}(),cbuffer.splice(pos,0,chrs),bufferStr=cbuffer.join("");for(var i=0;i<opts.regexTokens.length;i++){var regexToken=opts.regexTokens[i];if(isValid=validateRegexToken(regexToken,regexToken.isGroup))break;}
return isValid;},cardinality:1}}}});}(window.dependencyLib||jQuery,window.Inputmask);}();;(function($){$.fn.yiiActiveForm=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}else{$.error('Method '+method+' does not exist on jQuery.yiiActiveForm');return false;}};var events={beforeValidate:'beforeValidate',afterValidate:'afterValidate',beforeValidateAttribute:'beforeValidateAttribute',afterValidateAttribute:'afterValidateAttribute',beforeSubmit:'beforeSubmit',ajaxBeforeSend:'ajaxBeforeSend',ajaxComplete:'ajaxComplete',afterInit:'afterInit'};var defaults={encodeErrorSummary:true,errorSummary:'.error-summary',validateOnSubmit:true,errorCssClass:'has-error',successCssClass:'has-success',validatingCssClass:'validating',ajaxParam:'ajax',ajaxDataType:'json',validationUrl:undefined,scrollToError:true,scrollToErrorOffset:0};var attributeDefaults={id:undefined,name:undefined,container:undefined,input:undefined,error:'.help-block',encodeError:true,validateOnChange:true,validateOnBlur:true,validateOnType:false,validationDelay:500,enableAjaxValidation:false,validate:undefined,status:0,cancelled:false,value:undefined,updateAriaInvalid:true};var submitDefer;var setSubmitFinalizeDefer=function($form){submitDefer=$.Deferred();$form.data('yiiSubmitFinalizePromise',submitDefer.promise());};var submitFinalize=function($form){if(submitDefer){submitDefer.resolve();submitDefer=undefined;$form.removeData('yiiSubmitFinalizePromise');}};var methods={init:function(attributes,options){return this.each(function(){var $form=$(this);if($form.data('yiiActiveForm')){return;}
var settings=$.extend({},defaults,options||{});if(settings.validationUrl===undefined){settings.validationUrl=$form.attr('action');}
$.each(attributes,function(i){attributes[i]=$.extend({value:getValue($form,this)},attributeDefaults,this);watchAttribute($form,attributes[i]);});$form.data('yiiActiveForm',{settings:settings,attributes:attributes,submitting:false,validated:false,options:getFormOptions($form)});$form.bind('reset.yiiActiveForm',methods.resetForm);if(settings.validateOnSubmit){$form.on('mouseup.yiiActiveForm keyup.yiiActiveForm',':submit',function(){$form.data('yiiActiveForm').submitObject=$(this);});$form.on('submit.yiiActiveForm',methods.submitForm);}
var event=$.Event(events.afterInit);$form.trigger(event);});},add:function(attribute){var $form=$(this);attribute=$.extend({value:getValue($form,attribute)},attributeDefaults,attribute);$form.data('yiiActiveForm').attributes.push(attribute);watchAttribute($form,attribute);},remove:function(id){var $form=$(this),attributes=$form.data('yiiActiveForm').attributes,index=-1,attribute=undefined;$.each(attributes,function(i){if(attributes[i]['id']==id){index=i;attribute=attributes[i];return false;}});if(index>=0){attributes.splice(index,1);unwatchAttribute($form,attribute);}
return attribute;},validateAttribute:function(id){var attribute=methods.find.call(this,id);if(attribute!=undefined){validateAttribute($(this),attribute,true);}},find:function(id){var attributes=$(this).data('yiiActiveForm').attributes,result=undefined;$.each(attributes,function(i){if(attributes[i]['id']==id){result=attributes[i];return false;}});return result;},destroy:function(){return this.each(function(){$(this).unbind('.yiiActiveForm');$(this).removeData('yiiActiveForm');});},data:function(){return this.data('yiiActiveForm');},validate:function(forceValidate){if(forceValidate){$(this).data('yiiActiveForm').submitting=true;}
var $form=$(this),data=$form.data('yiiActiveForm'),needAjaxValidation=false,messages={},deferreds=deferredArray(),submitting=data.submitting&&!forceValidate;if(data.submitting){var event=$.Event(events.beforeValidate);$form.trigger(event,[messages,deferreds]);if(event.result===false){data.submitting=false;submitFinalize($form);return;}}
$.each(data.attributes,function(){this.$form=$form;if(!$(this.input).is(":disabled")){this.cancelled=false;if(data.submitting||this.status===2||this.status===3){var msg=messages[this.id];if(msg===undefined){msg=[];messages[this.id]=msg;}
var event=$.Event(events.beforeValidateAttribute);$form.trigger(event,[this,msg,deferreds]);if(event.result!==false){if(this.validate){this.validate(this,getValue($form,this),msg,deferreds,$form);}
if(this.enableAjaxValidation){needAjaxValidation=true;}}else{this.cancelled=true;}}}});$.when.apply(this,deferreds).always(function(){for(var i in messages){if(0===messages[i].length){delete messages[i];}}
if(needAjaxValidation&&($.isEmptyObject(messages)||data.submitting)){var $button=data.submitObject,extData='&'+data.settings.ajaxParam+'='+$form.attr('id');if($button&&$button.length&&$button.attr('name')){extData+='&'+$button.attr('name')+'='+$button.attr('value');}
$.ajax({url:data.settings.validationUrl,type:$form.attr('method'),data:$form.serialize()+extData,dataType:data.settings.ajaxDataType,complete:function(jqXHR,textStatus){$form.trigger(events.ajaxComplete,[jqXHR,textStatus]);},beforeSend:function(jqXHR,settings){$form.trigger(events.ajaxBeforeSend,[jqXHR,settings]);},success:function(msgs){if(msgs!==null&&typeof msgs==='object'){$.each(data.attributes,function(){if(!this.enableAjaxValidation||this.cancelled){delete msgs[this.id];}});updateInputs($form,$.extend(messages,msgs),submitting);}else{updateInputs($form,messages,submitting);}},error:function(){data.submitting=false;submitFinalize($form);}});}else if(data.submitting){setTimeout(function(){updateInputs($form,messages,submitting);},200);}else{updateInputs($form,messages,submitting);}});},submitForm:function(){var $form=$(this),data=$form.data('yiiActiveForm');if(data.validated){data.submitting=false;var event=$.Event(events.beforeSubmit);$form.trigger(event);if(event.result===false){data.validated=false;submitFinalize($form);return false;}
updateHiddenButton($form);return true;}else{setSubmitFinalizeDefer($form);if(data.settings.timer!==undefined){clearTimeout(data.settings.timer);}
data.submitting=true;methods.validate.call($form);return false;}},resetForm:function(){var $form=$(this);var data=$form.data('yiiActiveForm');setTimeout(function(){$.each(data.attributes,function(){this.value=getValue($form,this);this.status=0;var $container=$form.find(this.container);$container.removeClass(data.settings.validatingCssClass+' '+
data.settings.errorCssClass+' '+
data.settings.successCssClass);$container.find(this.error).html('');});$form.find(data.settings.errorSummary).hide().find('ul').html('');},1);},updateMessages:function(messages,summary){var $form=$(this);var data=$form.data('yiiActiveForm');$.each(data.attributes,function(){updateInput($form,this,messages);});if(summary){updateSummary($form,messages);}},updateAttribute:function(id,messages){var attribute=methods.find.call(this,id);if(attribute!=undefined){var msg={};msg[id]=messages;updateInput($(this),attribute,msg);}}};var watchAttribute=function($form,attribute){var $input=findInput($form,attribute);if(attribute.validateOnChange){$input.on('change.yiiActiveForm',function(){validateAttribute($form,attribute,false);});}
if(attribute.validateOnBlur){$input.on('blur.yiiActiveForm',function(){if(attribute.status==0||attribute.status==1){validateAttribute($form,attribute,true);}});}
if(attribute.validateOnType){$input.on('keyup.yiiActiveForm',function(e){if($.inArray(e.which,[16,17,18,37,38,39,40])!==-1){return;}
if(attribute.value!==getValue($form,attribute)){validateAttribute($form,attribute,false,attribute.validationDelay);}});}};var unwatchAttribute=function($form,attribute){findInput($form,attribute).off('.yiiActiveForm');};var validateAttribute=function($form,attribute,forceValidate,validationDelay){var data=$form.data('yiiActiveForm');if(forceValidate){attribute.status=2;}
$.each(data.attributes,function(){if(this.value!==getValue($form,this)){this.status=2;forceValidate=true;}});if(!forceValidate){return;}
if(data.settings.timer!==undefined){clearTimeout(data.settings.timer);}
data.settings.timer=setTimeout(function(){if(data.submitting||$form.is(':hidden')){return;}
$.each(data.attributes,function(){if(this.status===2){this.status=3;$form.find(this.container).addClass(data.settings.validatingCssClass);}});methods.validate.call($form);},validationDelay?validationDelay:200);};var deferredArray=function(){var array=[];array.add=function(callback){this.push(new $.Deferred(callback));};return array;};var buttonOptions=['action','target','method','enctype'];var getFormOptions=function($form){var attributes={};for(var i=0;i<buttonOptions.length;i++){attributes[buttonOptions[i]]=$form.attr(buttonOptions[i]);}
return attributes;};var applyButtonOptions=function($form,$button){for(var i=0;i<buttonOptions.length;i++){var value=$button.attr('form'+buttonOptions[i]);if(value){$form.attr(buttonOptions[i],value);}}};var restoreButtonOptions=function($form){var data=$form.data('yiiActiveForm');for(var i=0;i<buttonOptions.length;i++){$form.attr(buttonOptions[i],data.options[buttonOptions[i]]||null);}};var updateInputs=function($form,messages,submitting){var data=$form.data('yiiActiveForm');if(data===undefined){return false;}
if(submitting){var errorAttributes=[];$.each(data.attributes,function(){if(!$(this.input).is(":disabled")&&!this.cancelled&&updateInput($form,this,messages)){errorAttributes.push(this);}});$form.trigger(events.afterValidate,[messages,errorAttributes]);updateSummary($form,messages);if(errorAttributes.length){if(data.settings.scrollToError){var top=$form.find($.map(errorAttributes,function(attribute){return attribute.input;}).join(',')).first().closest(':visible').offset().top-data.settings.scrollToErrorOffset;if(top<0){top=0;}else if(top>$(document).height()){top=$(document).height();}
var wtop=$(window).scrollTop();if(top<wtop||top>wtop+$(window).height()){$(window).scrollTop(top);}}
data.submitting=false;}else{data.validated=true;if(data.submitObject){applyButtonOptions($form,data.submitObject);}
$form.submit();if(data.submitObject){restoreButtonOptions($form);}}}else{$.each(data.attributes,function(){if(!this.cancelled&&(this.status===2||this.status===3)){updateInput($form,this,messages);}});}
submitFinalize($form);};var updateHiddenButton=function($form){var data=$form.data('yiiActiveForm');var $button=data.submitObject||$form.find(':submit:first');if($button.length&&$button.attr('type')=='submit'&&$button.attr('name')){var $hiddenButton=$('input[type="hidden"][name="'+$button.attr('name')+'"]',$form);if(!$hiddenButton.length){$('<input>').attr({type:'hidden',name:$button.attr('name'),value:$button.attr('value')}).appendTo($form);}else{$hiddenButton.attr('value',$button.attr('value'));}}};var updateInput=function($form,attribute,messages){var data=$form.data('yiiActiveForm'),$input=findInput($form,attribute),hasError=false;if(!$.isArray(messages[attribute.id])){messages[attribute.id]=[];}
$form.trigger(events.afterValidateAttribute,[attribute,messages[attribute.id]]);attribute.status=1;if($input.length){hasError=messages[attribute.id].length>0;var $container=$form.find(attribute.container);var $error=$container.find(attribute.error);updateAriaInvalid($form,attribute,hasError);if(hasError){if(attribute.encodeError){$error.text(messages[attribute.id][0]);}else{$error.html(messages[attribute.id][0]);}
$container.removeClass(data.settings.validatingCssClass+' '+data.settings.successCssClass).addClass(data.settings.errorCssClass);}else{$error.empty();$container.removeClass(data.settings.validatingCssClass+' '+data.settings.errorCssClass+' ').addClass(data.settings.successCssClass);}
attribute.value=getValue($form,attribute);}
return hasError;};var updateSummary=function($form,messages){var data=$form.data('yiiActiveForm'),$summary=$form.find(data.settings.errorSummary),$ul=$summary.find('ul').empty();if($summary.length&&messages){$.each(data.attributes,function(){if($.isArray(messages[this.id])&&messages[this.id].length){var error=$('<li/>');if(data.settings.encodeErrorSummary){error.text(messages[this.id][0]);}else{error.html(messages[this.id][0]);}
$ul.append(error);}});$summary.toggle($ul.find('li').length>0);}};var getValue=function($form,attribute){var $input=findInput($form,attribute);var type=$input.attr('type');if(type==='checkbox'||type==='radio'){var $realInput=$input.filter(':checked');if(!$realInput.length){$realInput=$form.find('input[type=hidden][name="'+$input.attr('name')+'"]');}
return $realInput.val();}else{return $input.val();}};var findInput=function($form,attribute){var $input=$form.find(attribute.input);if($input.length&&$input[0].tagName.toLowerCase()==='div'){return $input.find('input');}else{return $input;}};var updateAriaInvalid=function($form,attribute,hasError){if(attribute.updateAriaInvalid){$form.find(attribute.input).attr('aria-invalid',hasError?'true':'false');}}})(window.jQuery);;