/* @cc_on, jquery.herotabs, version 1.1.3, Requires jQuery 1.9.0 or higher, https://github.com/simonsmith/jquery.herotabs */ !function(global){'use strict';var instanceId=0;var defaults={delay:0,duration:0,startOn:0,reverse:false,interactEvent:'click',useTouch:true,css:{active:'is-active',current:'tab-current',navCurrent:'tab-nav-current',navId:'tabnav'},selectors:{tab:'.js-tab',nav:'.js-nav',navItem:'.js-nav-item'},zIndex:{bottom:1,top:2}};var wrap=function($){var Herotabs=function(container,options){this.container=container;this.options=options;this._currentTab=null;this._timer=null;this._instanceId=++instanceId;this._getDOMElements();if(this.nav.length>0){this._ariafy();this._setCurrentNav();this._attachNavEvents()}this._showInitialTab(options.startOn);this._attachKeyEvents();if(options.delay>0){this.start();this._attachHoverEvents()}container.addClass(options.css.active);container[0].style.position='relative'};Herotabs.prototype={constructor:Herotabs,showTab:function(tabToShow){tabToShow=this._getTab(tabToShow);var currentTab=this._currentTab;var opt=this.options;if(tabToShow.length==0||currentTab.is(tabToShow)){return this}this.tab.finish();tabToShow.show().css({'position':'absolute','opacity':1});var self=this;currentTab.animate({opacity:0},opt.duration,function(){self._setTabVisibilty(tabToShow,currentTab)});this.triggerEvent('herotabs.show',tabToShow);this._currentTab=tabToShow;return this},nextTab:function(){var currentIndex=this.tab.index(this._currentTab);var nextTab=this.tab.eq(currentIndex+1);nextTab=(nextTab.length>0?nextTab:this.tab.eq(0));this.showTab(nextTab);this.triggerEvent('herotabs.next',nextTab);return this},prevTab:function(){var currentIndex=this.tab.index(this._currentTab);var prevTab=this.tab.eq(currentIndex==0?-1:currentIndex-1);this.showTab(prevTab);this.triggerEvent('herotabs.prev',prevTab);return this},start:function(){var opt=this.options;if(!opt.delay){return this}var self=this;var reverse=opt.reverse;this._timer=setInterval(function(){if(self._navItemHasFocus()){return}if(!reverse){self.nextTab()}else{self.prevTab()}},opt.delay);this.triggerEvent('herotabs.start',this._currentTab);return this},stop:function(){clearInterval(this._timer);this.triggerEvent('herotabs.stop',this._currentTab);return this},triggerEvent:function(eventName,tabToShow){tabToShow=this._getTab(tabToShow);var index=this.tab.index(tabToShow);this.container.trigger(eventName,{currentTab:tabToShow,currentTabIndex:index,currentNavItem:this.navItem.eq(index)})},_getDOMElements:function(){var selectors=this.options.selectors;for(var element in selectors){this[element]=this.container.find(selectors[element])}},_getTab:function(tab){return(typeof tab!='number'?tab:this.tab.eq(tab))},_showInitialTab:function(startOn){var tabFromHash=location.hash&&this.tab.filter(location.hash);var initialTab=tabFromHash.length==0?this.tab.eq(startOn):tabFromHash;this.tab.css('top',0);this._setTabVisibilty(initialTab,this.tab.not(initialTab));this.triggerEvent('herotabs.show',initialTab);this._currentTab=initialTab},_setTabVisibilty:function(tabToShow,tabToHide){var opt=this.options;var css=opt.css;var zIndex=opt.zIndex;tabToShow.addClass(css.current).css({'z-index':zIndex.top,'position':'relative'}).attr('aria-hidden',false).find('a').addBack().attr('tabindex','0');tabToHide.removeClass(css.current).css({'opacity':0,'z-index':zIndex.bottom}).hide().attr('aria-hidden',true).find('a').addBack().attr('tabindex','-1')},_ariafy:function(){var navId=this.options.css.navId+this._instanceId+'-';this.nav[0].setAttribute('role','tablist');this.navItem.attr('role','presentation').find('a').each(function(index){this.id=navId+(index+1);this.setAttribute('role','tab')});this.tab.each(function(index){this.setAttribute('role','tabpanel');this.setAttribute('aria-labelledby',navId+(index+1))})},_attachHoverEvents:function(){var self=this;this.container.on('mouseenter',function(){self.stop();self.triggerEvent('herotabs.mouseenter',self._currentTab)});this.container.on('mouseleave',function(){self.start();self.triggerEvent('herotabs.mouseleave',self._currentTab)})},_attachKeyEvents:function(){var self=this;this.nav.on('keydown','a',function(event){switch(event.keyCode){case 37:case 38:self.prevTab();break;case 39:case 40:self.nextTab();break}})},_isTouchEnabled:function(){return('ontouchend'in document.documentElement)&&this.options.useTouch},_getEventType:function(){var eventMap={hover:'mouseenter',touch:'touchend',click:'click'};return(this._isTouchEnabled()?eventMap.touch:eventMap[this.options.interactEvent])},_attachNavEvents:function(){var nav=this.nav;var eventType=this._getEventType();var opt=this.options;var self=this;nav.on(eventType,'a',function(event){self.showTab($(this).parents(opt.selectors.navItem).index());if(self._checkUrlIsAnchor(this.href)){event.preventDefault()}})},_isAnchorRegex:/#[A-Za-z0-9-_]+$/,_checkUrlIsAnchor:function(url){return this._isAnchorRegex.test(url)},_navItemHasFocus:function(){return $(document.activeElement).closest(this.container).is(this.container)},_setCurrentNav:function(){var self=this;var opt=this.options;var current=opt.css.navCurrent;var navItem=this.navItem;self.container.on('herotabs.show',function(event,tab){navItem.removeClass(current).find('a').each(function(){this.setAttribute('aria-selected','false');this.setAttribute('tabindex','-1')});var navItemLink=navItem.eq(tab.currentTabIndex).addClass(current).find('a');navItemLink[0].setAttribute('aria-selected','true');navItemLink[0].setAttribute('tabindex','0');if(self._navItemHasFocus()){navItemLink.focus()}})}};$.fn.herotabs=function(options){options=$.extend(true,{},defaults,options);return this.each(function(){var $this=$(this);$this.data('herotabs',new Herotabs($this,options))})};$.fn.herotabs.defaults=defaults;$.fn.herotabs.Herotabs=Herotabs};if(typeof define=='function'&&define.amd){define(['jquery'],wrap)}else{wrap(global.jQuery)}}(this);