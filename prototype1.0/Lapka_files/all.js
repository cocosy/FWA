function configScienceMagicDrops() { if (magicDrop) { scienceMagicDropsDataSource = lapka_bubble_text["science-magic-drops"], scienceMagicDropsCurrentTextIndex = 0; var e = scienceMagicDropsDataSource[scienceMagicDropsCurrentTextIndex];
        updateScienceMagicDropsStatusWithText(e), setupScienceMagicDropsStatusBlinkingInterval() } }

function updateScienceMagicDropsStatusWithText(e) { magicDrop.innerHTML = e }

function clearScienceMagicDropsStatusBlinkingInterval() { clearInterval(scienceMagicDropsBlinkingInterval) }

function setupScienceMagicDropsStatusBlinkingInterval() { scienceMagicDropsDataSource.length > 1 && (clearScienceMagicDropsStatusBlinkingInterval(), scienceMagicDropsBlinkingInterval = setInterval(function() { fade(magicDrop, .5, 0, function() { scienceMagicDropsCurrentTextIndex++, scienceMagicDropsCurrentTextIndex == scienceMagicDropsDataSource.length && (scienceMagicDropsCurrentTextIndex = 0); var e = scienceMagicDropsDataSource[scienceMagicDropsCurrentTextIndex];
            updateScienceMagicDropsStatusWithText(e), fade(magicDrop, 0, .5, function() {}) }) }, 5e3)) }

function fade(e, t, i, n) { var s = t,
        a = setInterval(function() { s -= .1 * (t - i), e.style.opacity = s, .01 > s - i && s - i > -.01 && (clearInterval(a), n()) }, 20) }

function playVideo(e) { var t = event.target.parentNode.getElementsByTagName("video")[0];
    t && t.pause(); var i = document.createElement("div");
    i.id = "video-popup"; var n = document.createElement("div");
    n.className = "centered-container"; var s = document.createElement("div");
    s.className = "embed-container"; var a = document.createElement("iframe");
    a.setAttribute("width", "853"), a.setAttribute("height", "480"), a.setAttribute("src", e), a.setAttribute("frameborder", "0"), a.setAttribute("allowfullscreen", "1"), s.appendChild(a), n.appendChild(s), i.appendChild(n), document.body.appendChild(i), i.onclick = function() { if (i.removeChild(n), i.style.transition = "background 0.5s linear 0s", i.style.background = "rgba(0,0,0,0)", t) { var e = window.getComputedStyle(t); "none" != e.display && t.play() } setTimeout(function() { document.body.removeChild(i) }, 500) } }

function updateMenuColor(e) { var t = Math.max(window.scrollY, 0) + 50,
        i = t - y;
    setScrollUp(0 >= i), y = t; for (var n = document.getElementsByTagName("section"), s = document.body.getBoundingClientRect(), a = 0; a < n.length; a++) { var r = n[a],
            o = r.getBoundingClientRect(),
            c = o.top - s.top,
            l = o.bottom - s.top; if (y > c && l > y) { var h = r.classList.contains("white");
            h && !$menuIsWhite ? (switchMenuToWhite(), $menuIsWhite = !0) : !h && $menuIsWhite && (switchMenuToBlack(), $menuIsWhite = !1); var d = r.classList.contains("text");
            d && !$menuIsFaded ? (fadeMenuIn(), $menuIsFaded = !0) : !d && $menuIsFaded && (fadeMenuOut(), $menuIsFaded = !1); var g = r.classList.contains("no-menu");
            g && !$menuIsHidden ? (hideMenu(), $menuIsHidden = !0) : !g && $menuIsHidden && (showMenu(), $menuIsHidden = !1) } } }

function switchMenuToWhite() { document.body.classList.add("white") }

function switchMenuToBlack() { document.body.classList.remove("white") }

function fadeMenuIn() { document.body.classList.add("fade") }

function fadeMenuOut() { document.body.classList.remove("fade") }

function hideMenu() { document.body.classList.add("no-menu") }

function showMenu() { document.body.classList.remove("no-menu") }

function setScrollUp(e) { $scrolledUp || 1 != e || (document.body.classList.add("scroll-up"), $scrolledUp = !0), $scrolledUp && 0 == e && (document.body.classList.remove("scroll-up"), $scrolledUp = !1) }
var getJSONP = function(e, t, i) { var n = "jsonCallback" + random();
        window[n] = function(e) { delete window[n], document.body.removeChild(s), t(e) }, "undefined" == typeof i && (i = "callback"); var s = document.createElement("script");
        s.src = e + (e.indexOf("?") >= 0 ? "&" : "?") + i + "=" + n, document.body.appendChild(s) },
    makeQS = function(e) { var t = []; for (var i in e) e.hasOwnProperty(i) && e[i] && t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i])); return t.join("&") },
    random = function() { return Math.round(1e5 * Math.random()) };
! function(e) { "use strict";

    function t(e) {
        function t() {}

        function s(e, t) { var i, n; for (i in t)
                if (t.hasOwnProperty(i)) { switch (n = t[i], i) {
                        case "height":
                        case "width":
                        case "marginLeft":
                        case "marginTop":
                            n += "px" } e.style[i] = n } return e }

        function a(e, t) { var i; for (i in t) e[i] = t[i]; return e }

        function r(e, t) { return function() { return e.apply(t, Array.prototype.slice.call(arguments)) } }

        function o(t, i) { var n; return n = e ? e(i).find("." + t) : Array.prototype.slice.call(i.getElementsByClassName(t)) }

        function c(t, i, n, a, r) { var o = {};
            o[i] = n, e ? e(t).animate(o, a, r) : s(t, o) }

        function l(e) { var t = e.touches,
                i = t && t.length ? t : e.changedTouches; return { x: v ? i[0].pageX : e.pageX, y: v ? i[0].pageY : e.pageY } }

        function h(e, t) { var n = a({}, f);
            this.settings = a(n, t), this.container = e, this.pageContainer = i.createElement("div"), this.scrollBorder = { x: 0, y: 0 }, this.page = 0, this.preventScroll = !1, this.pageCssProperties = { margin: 0 }, this._onStart = r(this._onStart, this), this._onMove = r(this._onMove, this), this._onEnd = r(this._onEnd, this), this._onKeydown = r(this._onKeydown, this), this._sizePages = r(this._sizePages, this), this._afterScrollTransform = r(this._afterScrollTransform, this), this.pageContainer.innerHTML = e.cloneNode(!0).innerHTML, e.innerHTML = "", e.appendChild(this.pageContainer), this._scroll = M ? this._scrollWithTransform : this._scrollWithoutTransform, this._animateScroll = M ? this._animateScrollWithTransform : this._animateScrollWithoutTransform, s(e, x), setTimeout(r(function() { this.updateInstance(t), this.settings.preventDrag || this._observe(), this.settings.afterInitialize.call(this) }, this), 10) }

        function d(t, i, n) { e ? e(t).on(i, n) : t.addEventListener(i, n, !1) }

        function g(t, i, n) { e ? e(t).off(i, n) : t.removeEventListener(i, n, !1) } var u, p, m, f = { pageClass: "dragend-page", direction: "horizontal", minDragDistance: "40", onSwipeStart: t, onSwipeEnd: t, onDragStart: t, onDrag: t, onDragEnd: t, afterInitialize: t, keyboardNavigation: !1, stopPropagation: !1, itemsInPage: 1, scribe: 0, borderBetweenPages: 0, duration: 300, preventDrag: !1 },
            v = "ontouchstart" in n,
            y = "touchstart",
            b = "touchmove",
            _ = "touchend",
            w = { 37: "left", 38: "up", 39: "right", 40: "down" },
            C = { pages: "No pages found" },
            x = { overflow: "hidden", padding: 0 },
            T = function() { var e = i.createElement("div"),
                    t = "Khtml Ms O Moz Webkit".split(" "),
                    n = t.length; return function(i) { if (i in e.style) return !0; for (i = i.replace(/^[a-z]/, function(e) { return e.toUpperCase() }); n--;)
                        if (t[n] + i in e.style) return !0; return !1 } }(),
            M = T("transform"); return a(h.prototype, { _checkOverscroll: function(e, t, i) { var n = { x: t, y: i, overscroll: !0 }; switch (e) {
                    case "right":
                        if (!this.scrollBorder.x) return n.x = Math.round((t - this.scrollBorder.x) / 5), n; break;
                    case "left":
                        if ((this.pagesCount - 1) * this.pageDimentions.width <= this.scrollBorder.x) return n.x = Math.round(-((Math.ceil(this.pagesCount) - 1) * (this.pageDimentions.width + this.settings.borderBetweenPages)) + t / 5), n; break;
                    case "down":
                        if (!this.scrollBorder.y) return n.y = Math.round((i - this.scrollBorder.y) / 5), n; break;
                    case "up":
                        if ((this.pagesCount - 1) * this.pageDimentions.height <= this.scrollBorder.y) return n.y = Math.round(-((Math.ceil(this.pagesCount) - 1) * (this.pageDimentions.height + this.settings.borderBetweenPages)) + i / 5), n } return { x: t - this.scrollBorder.x, y: i - this.scrollBorder.y, overscroll: !1 } }, _observe: function() { d(this.container, y, this._onStart), this.settings.keyboardNavigation && d(i.body, "keydown", this._onKeydown), d(n, "resize", this._sizePages) }, _onStart: function(e) { e = e.originalEvent || e, this.settings.stopPropagation && e.stopPropagation(); var t = e.touches[0];
                p = { x: t.pageX, y: t.pageY }, d(i.body, b, this._onMove), d(i.body, _, this._onEnd), this.startCoords = l(e), this.settings.onDragStart.call(this, e) }, _onMove: function(e) { if (e = e.originalEvent || e, !(e.touches && e.touches.length > 1 || e.scale && 1 !== e.scale)) { var t = e.touches[0]; if (m = { x: t.pageX - p.x, y: t.pageY - p.y }, "undefined" == typeof u && (u = !!(u || Math.abs(m.x) < Math.abs(m.y))), !u) { e.preventDefault(), this.settings.stopPropagation && e.stopPropagation(); var i = this._parseEvent(e),
                            n = this._checkOverscroll(i.direction, -i.distanceX, -i.distanceY);
                        this.settings.onDrag.call(this, this.activeElement, i, n.overscroll, e), this.preventScroll || this._scroll(n) } } }, _onEnd: function(e) { e = e.originalEvent || e, this.settings.stopPropagation && e.stopPropagation(); var t = this._parseEvent(e);
                this.startCoords = { x: 0, y: 0 }, Math.abs(t.distanceX) > this.settings.minDragDistance || Math.abs(t.distanceY) > this.settings.minDragDistance ? this.swipe(t.direction) : (Math.abs(t.distanceX) > 0 || Math.abs(t.distanceY) > 0) && this._scrollToPage(), this.settings.onDragEnd.call(this, this.container, this.activeElement, this.page + 1, e), g(i.body, b, this._onMove), g(i.body, _, this._onEnd) }, _parseEvent: function(e) { var t = l(e),
                    i = this.startCoords.x - t.x,
                    n = this.startCoords.y - t.y; return this._addDistanceValues(i, n) }, _addDistanceValues: function(e, t) { var i = { distanceX: 0, distanceY: 0 }; return "horizontal" === this.settings.direction ? (i.distanceX = e, i.direction = e > 0 ? "left" : "right") : (i.distanceY = t, i.direction = t > 0 ? "up" : "down"), i }, _onKeydown: function(e) { var t = w[e.keyCode];
                t && this._scrollToPage(t) }, _setHorizontalContainerCssValues: function() { a(this.pageCssProperties, { cssFloat: "left", overflowY: "auto", overflowX: "hidden", padding: 0, display: "block" }), s(this.pageContainer, { overflow: "hidden", width: (this.pageDimentions.width + this.settings.borderBetweenPages) * this.pagesCount, boxSizing: "content-box", "-webkit-backface-visibility": "hidden", "-webkit-perspective": 1e3, margin: 0, padding: 0 }) }, _setVerticalContainerCssValues: function() { a(this.pageCssProperties, { overflow: "hidden", padding: 0, display: "block" }), s(this.pageContainer, { "padding-bottom": this.settings.scribe, boxSizing: "content-box", "-webkit-backface-visibility": "hidden", "-webkit-perspective": 1e3, margin: 0 }) }, setContainerCssValues: function() { "horizontal" === this.settings.direction ? this._setHorizontalContainerCssValues() : this._setVerticalContainerCssValues() }, _setPageDimentions: function() { var e = this.container.offsetWidth,
                    t = this.container.offsetHeight; "horizontal" === this.settings.direction ? e -= parseInt(this.settings.scribe, 10) : t -= parseInt(this.settings.scribe, 10), this.pageDimentions = { width: e, height: t } }, _sizePages: function() { var e = this.pages.length;
                this._setPageDimentions(), this.setContainerCssValues(), "horizontal" === this.settings.direction ? a(this.pageCssProperties, { height: this.pageDimentions.height, width: this.pageDimentions.width / this.settings.itemsInPage }) : a(this.pageCssProperties, { height: this.pageDimentions.height / this.settings.itemsInPage, width: this.pageDimentions.width }); for (var t = 0; e > t; t++) s(this.pages[t], this.pageCssProperties);
                this._jumpToPage("page", this.page) }, _calcNewPage: function(e, t) { var i = this.settings.borderBetweenPages,
                    n = this.pageDimentions.height,
                    s = this.pageDimentions.width,
                    a = this.page; switch (e) {
                    case "up":
                        a < this.pagesCount - 1 && (this.scrollBorder.y = this.scrollBorder.y + n + i, this.page++); break;
                    case "down":
                        a > 0 && (this.scrollBorder.y = this.scrollBorder.y - n - i, this.page--); break;
                    case "left":
                        a < this.pagesCount - 1 && (this.scrollBorder.x = this.scrollBorder.x + s + i, this.page++); break;
                    case "right":
                        a > 0 && (this.scrollBorder.x = this.scrollBorder.x - s - i, this.page--); break;
                    case "page":
                        switch (this.settings.direction) {
                            case "horizontal":
                                this.scrollBorder.x = (s + i) * t; break;
                            case "vertical":
                                this.scrollBorder.y = (n + i) * t } this.page = t; break;
                    default:
                        this.scrollBorder.y = 0, this.scrollBorder.x = 0, this.page = 0 } }, _onSwipeEnd: function() { this.preventScroll = !1, this.activeElement = this.pages[this.page * this.settings.itemsInPage], this.settings.onSwipeEnd.call(this, this.container, this.activeElement, this.page + 1) }, _jumpToPage: function(e, t) { e && this._calcNewPage(e, t), this._scroll({ x: -this.scrollBorder.x, y: -this.scrollBorder.y }) }, _scrollToPage: function(e, t) { this.preventScroll = !0, e && this._calcNewPage(e, t), this._animateScroll() }, _scrollWithTransform: function(e) { var t = "horizontal" === this.settings.direction ? "translateX(" + e.x + "px)" : "translateY(" + e.y + "px)";
                s(this.pageContainer, { "-webkit-transform": t, "-moz-transform": t, "-ms-transform": t, "-o-transform": t, transform: t }) }, _animateScrollWithTransform: function() { var e = "transform " + this.settings.duration + "ms ease-out",
                    t = (this.container, this._afterScrollTransform);
                s(this.pageContainer, { "-webkit-transition": "-webkit-" + e, "-moz-transition": "-moz-" + e, "-ms-transition": "-ms-" + e, "-o-transition": "-o-" + e, transition: e }), this._scroll({ x: -this.scrollBorder.x, y: -this.scrollBorder.y }), d(this.container, "webkitTransitionEnd", t), d(this.container, "oTransitionEnd", t), d(this.container, "transitionend", t), d(this.container, "transitionEnd", t) }, _afterScrollTransform: function() { var e = this.container,
                    t = this._afterScrollTransform;
                this._onSwipeEnd(), g(e, "webkitTransitionEnd", t), g(e, "oTransitionEnd", t), g(e, "transitionend", t), g(e, "transitionEnd", t), s(this.pageContainer, { "-webkit-transition": "", "-moz-transition": "", "-ms-transition": "", "-o-transition": "", transition: "" }) }, _scrollWithoutTransform: function(e) { var t = "horizontal" === this.settings.direction ? { marginLeft: e.x } : { marginTop: e.y };
                s(this.pageContainer, t) }, _animateScrollWithoutTransform: function() { var e = "horizontal" === this.settings.direction ? "marginLeft" : "marginTop",
                    t = "horizontal" === this.settings.direction ? -this.scrollBorder.x : -this.scrollBorder.y;
                c(this.pageContainer, e, t, this.settings.duration, r(this._onSwipeEnd, this)) }, swipe: function(e) { this.settings.onSwipeStart.call(this, this.container, this.activeElement, this.page + 1), this._scrollToPage(e) }, updateInstance: function(e) { if (e = e || {}, "object" == typeof e && a(this.settings, e), this.pages = o(this.settings.pageClass, this.pageContainer), !this.pages.length) throw new Error(C.pages);
                this.pagesCount = this.pages.length / this.settings.itemsInPage, this.activeElement = this.pages[this.page * this.settings.itemsInPage], this._sizePages(), this.settings.jumpToPage && (this.jumpToPage(e.jumpToPage), delete this.settings.jumpToPage), this.settings.scrollToPage && (this.scrollToPage(this.settings.scrollToPage), delete this.settings.scrollToPage), this.settings.destroy && (this.destroy(), delete this.settings.destroy) }, destroy: function() { var e = this.container;
                g(e, y), g(e, b), g(e, _), g(i.body, "keydown", this._onKeydown), g(n, "resize", this._sizePages), e.removeAttribute("style"); for (var t = 0; t < this.pages.length; t++) this.pages[t].removeAttribute("style");
                e.innerHTML = this.pageContainer.innerHTML }, scrollToPage: function(e) { this._scrollToPage("page", e - 1) }, jumpToPage: function(e) { this._jumpToPage("page", e - 1) } }), e && (e.fn.dragend = function(t) { return t = t || {}, this.each(function() { var i = e(this).data("dragend");
                i ? i.updateInstance(t) : (i = new h(this, t), e(this).data("dragend", i)), "string" == typeof t && i.swipe(t) }), this }), h } var i = document,
        n = e; "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() { return t(n.jQuery || n.Zepto) }) : n.Dragend = t(n.jQuery || n.Zepto) }(window),
/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
function() {
    function e() {}

    function t(e) { return a.retinaImageSuffix + e }

    function i(e, i) { if (this.path = e || "", "undefined" != typeof i && null !== i) this.at_2x_path = i, this.perform_check = !1;
        else { if (void 0 !== document.createElement) { var n = document.createElement("a");
                n.href = this.path, n.pathname = n.pathname.replace(r, t), this.at_2x_path = n.href } else { var s = this.path.split("?");
                s[0] = s[0].replace(r, t), this.at_2x_path = s.join("?") } this.perform_check = !0 } }

    function n(e) { this.el = e, this.path = new i(this.el.getAttribute("src"), this.el.getAttribute("data-at2x")); var t = this;
        this.path.check_2x_variant(function(e) { e && t.swap() }) } var s = "undefined" == typeof exports ? window : exports,
        a = { retinaImageSuffix: "@2x", check_mime_type: !0, force_original_dimensions: !0 };
    s.Retina = e, e.configure = function(e) { null === e && (e = {}); for (var t in e) e.hasOwnProperty(t) && (a[t] = e[t]) }, e.init = function(e) { null === e && (e = s); var t = e.onload || function() {};
        e.onload = function() { var e, i, s = document.getElementsByTagName("img"),
                a = []; for (e = 0; e < s.length; e += 1) i = s[e], i.getAttributeNode("data-no-retina") || a.push(new n(i));
            t() } }, e.isRetina = function() { var e = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)"; return s.devicePixelRatio > 1 ? !0 : s.matchMedia && s.matchMedia(e).matches ? !0 : !1 }; var r = /\.\w+$/;
    s.RetinaImagePath = i, i.confirmed_paths = [], i.prototype.is_external = function() { return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain)) }, i.prototype.check_2x_variant = function(e) { var t, n = this; return this.is_external() ? e(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in i.confirmed_paths ? e(!0) : (t = new XMLHttpRequest, t.open("HEAD", this.at_2x_path), t.onreadystatechange = function() { if (4 !== t.readyState) return e(!1); if (t.status >= 200 && t.status <= 399) { if (a.check_mime_type) { var s = t.getResponseHeader("Content-Type"); if (null === s || !s.match(/^image/i)) return e(!1) } return i.confirmed_paths.push(n.at_2x_path), e(!0) } return e(!1) }, t.send(), void 0) : e(!0) }, s.RetinaImage = n, n.prototype.swap = function(e) {
        function t() { i.el.complete ? (a.force_original_dimensions && (i.el.setAttribute("width", i.el.offsetWidth), i.el.setAttribute("height", i.el.offsetHeight)), i.el.setAttribute("src", e)) : setTimeout(t, 5) } "undefined" == typeof e && (e = this.path.at_2x_path); var i = this;
        t() }, e.isRetina() && e.init(s) }();
for (var pathname = window.location.pathname, menuItems = document.getElementById("menu").getElementsByTagName("li"), i = 0; i < menuItems.length; i++) { var menuItem = menuItems[i],
        link = menuItem.getElementsByTagName("a")[0];
    link.pathname == pathname && menuItem.classList.add("active"); for (var submenuItems = menuItem.getElementsByTagName("li"), j = 0; j < submenuItems.length; j++) { var submenuItem = submenuItems[j],
            link = submenuItem.getElementsByTagName("a")[0];
        link.pathname == pathname && "goto" != link.className && menuItem.classList.add("active") } } setTimeout(function() { var e = document.getElementById("menu");
    e.classList.remove("hidden") }, 2500), setTimeout(function() { var e = document.getElementById("bag");
    e.classList.remove("hidden") }, 3e3), setTimeout(function() { var e = document.getElementById("airbnb-logo");
    e && e.classList.remove("hidden") }, 500);
for (var $addToCart = document.getElementsByClassName("add-to-cart"), i = $addToCart.length - 1; i >= 0; i--) { var button = $addToCart[i].getElementsByClassName("button")[0];
    button && "disabled" !== button.className && (button.onclick = function(e) { e.preventDefault(), e.target.innerHTML = "Out of stock" }) }
var scienceMagicDropsDataSource, scienceMagicDropsBlinkingInterval, scienceMagicDropsCurrentTextIndex, magicDrop = document.getElementById("magic-drop"),
    lapka_bubble_text = { "science-magic-drops": ["Celery.", "Melon.", "Cauliflower.", "Broccoli.", "Onion.", "Lettuce.", "Sweet pepper.", "Potato.", "Banana.", "Corn.", "Tomato.", "Watermelon.", "Cucumber.", "Pumpkin.", "Unicorns.", "Eggplant.", "Strawberry.", "Apple.", "Beet.", "Teenagers.", "Carrot.", "Radish.", "Asparagus."] };
configScienceMagicDrops();
for (var updateGalleryHeight = function() { if (this.container.hasAttribute("flexible")) { for (var e = 0, t = this.pages.length - 1; t >= 0; t--) { var i = this.pages[t],
                    n = i.getElementsByTagName("div")[0];
                n.offsetHeight > e && (e = n.offsetHeight) } this.container.style.height = e + "px" } }, updateGalleryControls = function() { for (var e = this, t = this.container.parentNode, i = t.getElementsByClassName("gallery-prev"), n = t.getElementsByClassName("gallery-next"), s = this.page, a = this.pages[s + 1], r = this.pages[s - 1], o = t.getElementsByClassName("gallery-screen-description"), c = t.getElementsByClassName("gallery-screen-description-" + s)[0], l = 0; l < n.length; l++) { var h = n[l]; if (h.onclick = function(t) { t.preventDefault(), e.swipe("left") }, a) { var d = a.getAttribute("name");
                h.innerHTML = d ? d : "Next", h.removeAttribute("hidden") } else h.setAttribute("hidden", !0) } for (var l = 0; l < i.length; l++) { var g = i[l]; if (g.onclick = function(t) { t.preventDefault(), e.swipe("right") }, r) { var u = r.getAttribute("name");
                g.innerHTML = u ? u : "Previous", g.removeAttribute("hidden") } else g.setAttribute("hidden", !0) } for (var l = o.length - 1; l >= 0; l--) o[l].setAttribute("hidden", !0);
        c && c.removeAttribute("hidden") }, galleries = document.getElementsByClassName("gallery"), dragends = [], i = galleries.length - 1; i >= 0; i--) { var gallery = galleries[i],
        slider = gallery.getElementsByClassName("gallery-wrap")[0];
    dragends[i] = new Dragend(slider, { pageClass: "gallery-screen", onSwipeEnd: function() { updateGalleryControls.bind(this)(); for (var e = document.getElementsByClassName("video-container"), t = 0; t < e.length; t++) { var i = e[t],
                    n = i.getElementsByTagName("video")[0];
                t == this.page ? n.play() : n.pause() } }, afterInitialize: function() { updateGalleryControls.bind(this)(), updateGalleryHeight.bind(this)() } }) }
var $menuIsWhite = !1,
    $menuIsFaded = !1,
    $menuIsHidden = !1,
    $scrolledUp = !1,
    y = 51;
if (window.addEventListener("scroll", updateMenuColor), updateMenuColor(), document.body.classList.contains("index")) { var rand_id = Math.floor(1 * Math.random()),
        image = document.createElement("img"),
        imageNames = ["/images/bam/lapka_bam_new_transparent.jpg"];
    image.setAttribute("src", imageNames[rand_id]); var bam = document.getElementById("bam");
    bam.appendChild(image); var rand_id = Math.floor(4 * Math.random()),
        image = document.createElement("img"),
        imageNames = ["/images/pem/hands/lapka-humidity.jpg", "/images/pem/hands/lapka-organic-probe.jpg", "/images/pem/hands/lapka-plug.jpg", "/images/pem/hands/lapka-wearable.jpg"];
    image.setAttribute("src", imageNames[rand_id]); var pem = document.getElementById("pem");
    pem.appendChild(image); var rand_id = Math.floor(3 * Math.random()),
        image = document.createElement("img"),
        imageNames = ["/images/bam/hands/lapka-bam-ceramic-front.jpg", "/images/bam/hands/lapka-bam-ceramic-magic.jpg", "/images/bam/hands/lapka-bam-ceramic-profile.jpg"];
    image.setAttribute("src", imageNames[rand_id]); var bam = document.getElementById("bam-ceramic");
    bam.appendChild(image) }