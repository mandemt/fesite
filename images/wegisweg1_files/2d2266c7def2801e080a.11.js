(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{FkZz:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("ma9I"),n("TeQF"),n("+2oP"),n("zKZe");var r=n("q1tI"),i=n.n(r),o=n("gi7Z"),c=n("ok/0"),a=n("lN9A"),s=n("uVGu"),u=Object(r.createContext)([]),l="RecentlyViewed:Products";t.b={Provider:function(e){var t=e.children,n=e.currentlyViewedProduct,d=Object(a.a)().locale,m=Object(r.useRef)(Object(c.e)());m.current||Object(o.c)(l);var f=m.current?Object(o.a)(l)||[]:Object(o.b)(l)||[],p=Object(r.useState)(f),h=p[0],v=p[1];Object(s.a)((function(){n&&b(n)})),Object(r.useEffect)((function(){m?(Object(o.e)(l,h),Object(o.d)(l)):(Object(o.c)(l),Object(o.f)(l,h))}),[h]);var b=function(e){if(h[0]!==e){var t=[Object.assign({locale:d},e)].concat(h.filter((function(t){return t.id!==e.id}))).slice(0,10);v(t)}},g=h.filter((function(e){return e.locale===d}));return i.a.createElement(u.Provider,{value:g},t)},Consumer:u.Consumer}},gSCk:function(e,t,n){"use strict";(function(e){n("ma9I"),n("QWBl"),n("4mDm"),n("Tskq"),n("07d7"),n("PKPk"),n("FZtP"),n("3bBZ");var r=n("q1tI");var i=new Map,o=void 0!==e?new e((function(e){e.forEach((function(e){var t=i.get(e.target);void 0!==t&&t(e)}))}),{rootMargin:"0px",threshold:[0,.25,.5,.75,1]}):void 0,c=function(e,t){return void 0===o?function(){}:(o.observe(e),i.set(e,t),function(){o.unobserve(e),i.delete(e)})},a=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).isIntersecting=!1,t.intersectionRatio=null,t.unobserve=void 0,t.recsTest=null,t.onIntersection=function(e){var n=t.props.threshold,r=void 0===n?0:n,i=.25*Math.round(4*e.intersectionRatio),o=e.isIntersecting&&i>=r;o!==t.isIntersecting&&(t.isIntersecting=o,t.props.onIntersection(o)),i!==t.intersectionRatio&&void 0!==t.props.onUpdate?(t.intersectionRatio=i,t.props.onUpdate({isIntersecting:e.isIntersecting,intersectionRatio:i})):t.intersectionRatio=null},t.onRef=function(e){e&&(void 0!==t.unobserve&&t.unobserve(),t.unobserve=c(e,t.onIntersection))},t.observerProps={onRef:t.onRef},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.componentWillUnmount=function(){void 0!==this.unobserve&&this.unobserve()},i.render=function(){return(0,this.props.children)(this.observerProps)},r}(r.Component);t.a=a}).call(this,n("zH/6"))},qfJt:function(e,t,n){"use strict";n("TeQF"),n("zKZe");var r,i=n("q1tI"),o=n.n(i),c=n("qnxR"),a=n("uVGu"),s=n("ok/0"),u=n("gSCk"),l=(n("2B1R"),n("E9XD"),n("+2oP"),n("NFLX")),d=n("c/gA"),m=n("FkZz"),f=(null!=(r=l.a)&&null!=(r=r.recommendations)?r.maxItemsSent:r)||10,p=n("KKuh"),h=n("IGzl"),v=function(){var e=Object(p.a)(),t=Object(h.a)().pageType,n=Object(i.useState)(!1),r=n[0],o=n[1];return{reportRecsLoaded:function(n){n&&!r&&e&&(o(!0),e.logRecsLoaded({data:{page_type:t,recommendation_id:n}}))},handleInteraction:function(n,r){r&&e&&e.logRecsAdded({data:{page_type:t,recommendation_id:r,interaction_type:"click",product_id:n}})},handleIntersection:function(n,r,i){n&&r&&e&&i&&e.logRecsDisplayed({data:{page_type:t,recommendation_id:r,recs_displayed_fraction:i}})}}},b=n("loQ3"),g=n("5P45"),w=n("vFDw"),y=n("vOnD"),C=n("hpBK"),j=y.c.div.withConfig({displayName:"ProductRecommendationsstyles__Wrapper",componentId:"sc-1anuv2e-0"})(["\n  max-width: ",";\n  margin: 0 auto;\n  padding: ",";\n\n  ",";\n\n  ",";\n"],(function(e){return e.theme.contentMaxWidth()}),(function(e){return e.theme.sizing("ms")}),(function(e){return e.theme.media.min("small")(Object(y.b)(["\n      padding-top: ",";\n      padding-bottom: ",";\n    "],e.theme.sizing("lg"),e.theme.sizing("lg")))}),(function(e){return e.theme.media.min("medium")(Object(y.b)(["\n      padding-top: ",";\n      padding-bottom: ",";\n    "],e.theme.sizing("xl"),e.theme.sizing("xl")))})),O=Object(y.c)(C.b).attrs((function(){return{tag:"h2",weight:"semiBold"}})).withConfig({displayName:"ProductRecommendationsstyles__SectionTitle",componentId:"sc-1anuv2e-1"})(["\n  margin: 0;\n  font-weight: ",";\n  ",";\n\n  ",";\n\n  ",";\n"],(function(e){return e.theme.fontWeight("normal")}),(function(e){return e.theme.font("s3")}),(function(e){return e.theme.media.min("large")(Object(y.b)(["\n      ",";\n    "],e.theme.font("s4")))}),(function(e){return e.theme.media.max("small")(Object(y.b)(["\n      ",";\n    "],e.theme.font("s1")))})),E=function(e){var t,n,r,i,c=e.id,a=e.recommendations,s=e.onRef,u=e.titleData,l=e.onCart,d=e.visibilityTracking,m=v().handleInteraction;return o.a.createElement(j,{"data-test":"product-recommended",ref:s},(t=u.isCmsContent,n=void 0!==t&&t,r=u.title,i=u.showTitle,!n||void 0!==i&&i?n?o.a.createElement(O,null,r):o.a.createElement(O,null,o.a.createElement(b.a,{id:"recommended.title"})):null),o.a.createElement(w.a,{"data-test":"recommendations",products:a,visibilityTracking:d,renderProduct:function(e){return o.a.createElement(g.a,{recommendationId:c,componentType:"CarouselProductLeaf",product:e,onClickLink:function(){m(e.productCode,c)},onCart:l})}}))},I=function(e){var t=e.onRef;return o.a.createElement("div",{"data-test":"product-recommended",ref:t})},x=n("lTCR");function k(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  query ProductRecommendedQuery(\n    $siteArea: RecommendationSiteAreas!\n    $productCode: String\n    $cartItems: [String!]\n    $wishlistItems: [String!]\n    $recentlyViewed: [String!]\n    $sessionCookieId: String!\n    $crossSessionCookieId: String\n    $orderedItems: [String!]\n  ) {\n    recommender(\n      limit: 4\n      siteArea: $siteArea\n      productCode: $productCode\n      cartItems: $cartItems\n      wishlistItems: $wishlistItems\n      recentlyViewedItems: $recentlyViewed\n      orderedItems: $orderedItems\n      sessionCookieId: $sessionCookieId\n      crossSessionCookieId: $crossSessionCookieId\n    ) {\n      id\n      recommendations {\n        ...Product_ProductItem\n      }\n    }\n  }\n\n  ","\n"]);return k=function(){return e},e}var P=n.n(x)()(k(),g.b);t.a=function(e){var t,n=e.productCode,r=e.siteArea,l=e.isCmsContent,p=void 0!==l&&l,h=e.title,b=e.showTitle,g=void 0!==b&&b,w=e.onIntersection,y=e.orderedItems,C=function(e,t){var n,r,o,c=Object(i.useContext)(m.a),a=Object(d.a)();return{recommendationData:{recentlyViewed:c?c.reduce((function(t,n){return n.productCode&&e!==n.productCode&&t.push(n.productCode),t}),[]).slice(0,f):(console.warn("No recently viewed products available"),[]),cartItems:a.cart?((null!=(o=a)&&null!=(o=o.cart)?o.lineItems:o)||[]).map((function(e){return e&&e.product.productCode})):[],wishlistItems:(void 0===n&&(n=10),a.wishlist?((null!=(r=a)&&null!=(r=r.wishlist)?r.items:r)||[]).reduce((function(e,t){return t&&t.product&&t.product.productCode&&e.push(t.product.productCode),e}),[]).reverse().slice(0,n):[]),orderedItems:t?t.slice(0,f):[]},renderRecommendations:!!(a&&a.__typename&&!0===a.isOver18yo)}}(n,y),j=C.recommendationData,O=C.renderRecommendations,x=Object(c.a)(),k=v(),_=k.reportRecsLoaded,S=k.handleIntersection,z=Object(i.useState)(null),R=z[0],T=z[1],L=Object(i.useState)(!1),A=L[0],N=L[1],W=Object(i.useRef)(R),D=Object(i.useRef)(!0),M=Object(i.useState)(void 0),$=M[0],B=M[1],V=Object(i.useState)(null),F=V[0],q=V[1],X=Object(i.useState)(!1),Z=X[0],H=X[1],K=function(e){N(e),w&&w()},Q=function(){if(O){t&&(t.unsubscribe(),t=void 0);var i=Object(s.d)(),o=Object(s.b)();if(i&&e.siteArea){var c=x.watchQuery({query:P,fetchPolicy:"network-only",variables:Object.assign({siteArea:r,productCode:n,sessionCookieId:i,crossSessionCookieId:o},j)});t=c.subscribe((function(e){e.data&&!e.errors&&function(e){var t=e&&e.recommender;if(t){var n=t.recommendations,r=n&&n.length?n.filter((function(e){var t=function(e){var t,n;return"SingleVariantProduct"===e.__typename?null!=(t=e)?t.variant:t:"MultiVariantProduct"===e.__typename?null!=(n=e)&&null!=(n=n.variants)?n[0]:n:null}(e);return t&&t.attributes&&t.attributes.canAddToBag})):[];q(r),B(t.id)}}(e.data)}))}}};if(Object(a.a)((function(){H(!0),Q()})),Object(i.useEffect)((function(){return _($)}),[$,_]),Object(i.useEffect)((function(){return Q(),function(){t&&t.unsubscribe()}}),[n,r,O]),Object(i.useEffect)((function(){A&&R&&$&&(D.current||W.current&&W.current<R)&&(W.current=R,D.current=!1,S(A,$,R))}),[$,S,R,A,W]),!Z||!$||!F)return null;var G=$&&(!F||!F.length);return O?o.a.createElement(u.a,{onIntersection:function(e){return K(e)}},(function(e){var t=e.onRef;return G?o.a.createElement(I,{onRef:t}):o.a.createElement(E,{productCode:n,onRef:t,id:$,recommendations:F,titleData:{isCmsContent:p,showTitle:g,title:h},onCart:"SHOPPING_CART"===r,visibilityTracking:function(e){return function(e){T(e)}(e)}})})):null}},vFDw:function(e,t,n){"use strict";n("2B1R"),n("qePV"),n("toAj"),n("yWo2");var r=n("q1tI"),i=n.n(r),o=n("sEfC"),c=n.n(o),a=n("vOnD"),s=n("6ewN"),u=n("9iOM"),l=n("uVGu"),d=n("MW5B"),m=n("loQ3"),f=n("hvTC"),p=n("U5zi"),h=a.c.div.withConfig({displayName:"CarouselHeaderstyles__TopBar",componentId:"sc-1ev6icx-0"})(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]),v=a.c.h2.withConfig({displayName:"CarouselHeaderstyles__Title",componentId:"sc-1ev6icx-1"})(["\n  margin: 0;\n  font-weight: ",";\n  ",";\n\n  ",";\n\n  ",";\n"],(function(e){return e.theme.fontWeight("normal")}),(function(e){return e.theme.font("s3")}),(function(e){return e.theme.media.min("large")(Object(a.b)(["\n      ",";\n    "],e.theme.font("s4")))}),(function(e){return e.theme.media.max("small")(Object(a.b)(["\n      ",";\n    "],e.theme.font("s1")))})),b=a.c.div.withConfig({displayName:"CarouselHeaderstyles__TextWrapper",componentId:"sc-1ev6icx-2"})(["\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  flex-direction: row;\n  flex-basis: 100%;\n  ",";\n"],(function(e){return e.theme.media.min("medium")(Object(a.b)(["\n      flex-basis: 90%;\n      justify-content: flex-start;\n    "]))})),g=a.c.div.withConfig({displayName:"CarouselHeaderstyles__SeeAll",componentId:"sc-1ev6icx-3"})(["\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n"]),w=Object(a.c)(f.a).withConfig({displayName:"CarouselHeaderstyles__SeeAllLink",componentId:"sc-1ev6icx-4"})(["\n  text-decoration: underline;\n  ","\n  color: ",";\n  ",";\n"],(function(e){return e.theme.font("sm1")}),(function(e){return e.theme.color("black")}),(function(e){return e.theme.media.min("medium")(Object(a.b)(["\n      margin-left: ",";\n    "],e.theme.sizing(.5)))})),y=Object(a.c)(p.a).attrs((function(){return{height:12}})).withConfig({displayName:"CarouselHeaderstyles__SeeAllChevron",componentId:"sc-1ev6icx-5"})(["\n  margin-left: ",";\n"],(function(e){return e.theme.sizing("4xs")})),C=n("S21J"),j=function(e){var t=e.title,n=e.showTitle,r=e.seeAllLink;return i.a.createElement(h,{"data-test":"product-carousel-topbar"},i.a.createElement(b,null,n&&t?i.a.createElement(v,{"data-test":"product-carousel-title"},i.a.createElement(C.a,{markup:t})):null,!!t&&!n&&i.a.createElement(d.a,null,i.a.createElement("h2",null,i.a.createElement(C.a,{markup:t}))),r?i.a.createElement(g,null,i.a.createElement(w,{to:r,"data-test":"product-carousel-seeall-link"},i.a.createElement(m.a,{id:"contentPage.carousel.seeAll"})),i.a.createElement(y,null)):null))},O=n("m4Mt"),E=n("VhUD"),I=n.n(E),x=n("Zf+v"),k=n("fJOk"),P=n("HQ+s"),_=a.c.div.withConfig({displayName:"ProductCarouselstyles__CarouselWrapper",componentId:"sc-159nny3-0"})(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n  width: calc(100% + ",");\n  margin: ",";\n\n  "," {\n    padding-right: ",";\n    padding-left: ",";\n  }\n\n  ",";\n\n  ",";\n"],I()(35),(function(e){return e.theme.sizing("xxs")+" -"+I()(17.5)+" 0"}),P.d,I()(17.5),I()(17.5),(function(e){return e.theme.media.between("small","large")(Object(a.b)(["\n      width: calc(100% + ",");\n      margin-right: -",";\n      margin-left: -",";\n\n      "," {\n        padding-right: ",";\n        padding-left: ",";\n      }\n    "],I()(25),I()(12.5),I()(12.5),P.d,I()(12.5),I()(12.5)))}),(function(e){return e.theme.media.max("small")(Object(a.b)(["\n      width: calc(100% + ",");\n      margin-right: -",";\n      margin-left: -",";\n\n      "," {\n        padding-right: ",";\n        padding-left: ",";\n      }\n    "],I()(15),I()(7.5),I()(7.5),P.d,I()(7.5),I()(7.5)))})),S=a.c.li.withConfig({displayName:"ProductCarouselstyles__ProductWrapper",componentId:"sc-159nny3-1"})(["\n  flex-shrink: 0;\n  scroll-snap-align: start;\n\n  ",";\n"],(function(e){return e.theme.layout.item({width:{small:I()(277),medium:I()(387),large:"25%"}})})),z=a.c.div.withConfig({displayName:"CarouselControlsstyles__CarouselControlWrapper",componentId:"sc-12zx564-0"})(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"]),R=Object(a.c)(k.a).attrs({withBorder:!0,contrast:"Light",opacity:"0.8"}).withConfig({displayName:"CarouselControlsstyles__StyledChevron",componentId:"sc-12zx564-1"})(["\n  height: ",";\n  width: ",";\n  position: absolute;\n  top: ",";\n\n  ",";\n\n  ",";\n"],I()(40),I()(40),I()(187),(function(e){return e.theme.media.between("medium","large")(Object(a.b)(["\n      top: ",";\n    "],I()(211)))}),(function(e){return e.theme.media.between("small","medium")(Object(a.b)(["\n      top: ",";\n    "],I()(161)))})),T=Object(a.c)(x.b).attrs((function(){return{type:"ghost"}})).withConfig({displayName:"CarouselControlsstyles__ControlButton",componentId:"sc-12zx564-2"})(["\n  color: ",";\n  padding: ",";\n  position: absolute;\n  ",";\n  box-sizing: content-box;\n  height: 100%;\n  width: ",";\n  top: 0;\n\n  ","\n\n  &:first-child {\n    left: 0;\n    transform: translateX(-100%);\n    "," {\n      left: ",";\n    }\n  }\n\n  &:last-child {\n    right: 0;\n    transform: translateX(100%);\n    "," {\n      right: ",";\n    }\n  }\n\n  ",";\n"],(function(e){return e.theme.color("grey_dark")}),(function(e){return e.theme.sizing("xxs")+" "+e.theme.sizing("xs")}),(function(e){return e.theme.zIndex("low")}),(function(e){return e.theme.sizing("xl")}),(function(e){return e.isDisabled&&Object(a.b)(["\n      opacity: 0.1;\n      cursor: default;\n    "])}),R,(function(e){return e.theme.sizing("xs")}),R,(function(e){return e.theme.sizing("xs")}),(function(e){return e.theme.media.max(1400)(Object(a.b)(["\n      &:first-child {\n        padding-right: ",";\n        padding-left: ",";\n        transform: translateX(-",");\n        "," {\n          left: ",";\n        }\n      }\n\n      &:last-child {\n        padding-left: ",";\n        padding-right: ",";\n        transform: translateX(",");\n        "," {\n          right: ",";\n        }\n      }\n    "],e.theme.sizing("md"),e.theme.sizing("ms"),e.theme.sizing("ms"),R,e.theme.sizing("ms"),e.theme.sizing("md"),e.theme.sizing("ms"),e.theme.sizing("ms"),R,e.theme.sizing("ms")))})),L=function(e){var t=e.onNextClick,n=e.onPrevClick,r=e.displayControls,o=e.displayLeftControl,c=void 0===o||o,a=e.displayRightControl,s=void 0===a||a,u=e.children,l=Object(O.a)();return r?i.a.createElement(z,{"data-test":"product-carousel-controls"},i.a.createElement(T,{isDisabled:!c,"data-test":"previous-control",onClick:n,"aria-label":l("contentPage.carousel.previousProducts")},i.a.createElement(R,{rotate:-180})),u,i.a.createElement(T,{isDisabled:!s,"data-test":"next-control",onClick:t,"aria-label":l("contentPage.carousel.nextProducts")},i.a.createElement(R,null))):u},A=(n("zKZe"),a.c.ul.withConfig({displayName:"ScrollWrapperstyles__Wrapper",componentId:"sc-1jvq8ig-0"})(["\n  display: flex;\n  width: 100%;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n\n  ","\n\n  &::-webkit-scrollbar {\n    width: 0 !important;\n    height: 0 !important;\n    display: none !important;\n  }\n"],(function(e){e.snapScroll;return!1}))),N=function(e){e.preventDefault(),e.stopPropagation()},W=Object(r.forwardRef)((function(e,t){var n=e.children,o=e.onScroll,c=void 0===o?function(){return null}:o,a=e.snapScroll,s=void 0!==a&&a,u=Object(r.useState)({isFrozen:!1,isActive:!1,startScrollPosition:0,startMousePosition:0}),l=u[0],d=u[1],m=Object(r.useCallback)((function(e){var n=t&&t.current;n&&d((function(t){var r=t.startMousePosition,i=t.startScrollPosition,o=t.isFrozen,c=r-e;return n.scrollLeft=i+c,!o&&Math.abs(c)>10?(document.addEventListener("click",N,!0),Object.assign({},t,{isFrozen:!0})):t}))}),[t]),f=function(e){var t=e.pageX;return m(t)},p=function e(){document.removeEventListener("mousemove",f,{passive:!0}),document.removeEventListener("mouseup",e,{passive:!0}),d((function(e){return e.isFrozen&&setTimeout((function(){document.removeEventListener("click",N,!0)}),0),Object.assign({},e,{isFrozen:!1,isActive:!1})}))};return Object(r.useEffect)((function(){if(t&&t.current){var e=t.current;return e.addEventListener("scroll",c),function(){e.removeEventListener("scroll",c)}}}),[c,t]),i.a.createElement(A,{ref:t,onMouseDown:function(e){e.preventDefault(),e.stopPropagation();var n=e.pageX,r=t&&t.current;r&&(d((function(e){return Object.assign({},e,{isActive:!0,startMousePosition:n,startScrollPosition:r.scrollLeft})})),document.addEventListener("mousemove",f,{passive:!0}),document.addEventListener("mouseup",p,{passive:!0}))},snapScroll:!l.isActive&&s,"data-test":"product-carousel-scroll-wrapper"},n)})),D=n("mwIZ"),M=n.n(D),$=a.c.div.withConfig({displayName:"ScrollBarstyles__Track",componentId:"j3b8qj-0"})(["\n  align-self: center;\n  width: 100%;\n  max-width: ",";\n  background-color: ",";\n  margin-top: ",";\n\n  ",";\n"],"56.25rem",(function(e){return e.theme.color("grey_light")}),(function(e){return e.theme.sizing("xl")}),(function(e){return e.theme.media.max("small")(Object(a.b)(["\n      margin-top: ",";\n    "],e.theme.sizing("lg")))})),B=a.c.span.withConfig({displayName:"ScrollBarstyles__Thumb",componentId:"j3b8qj-1"})(["\n  display: block;\n  cursor: pointer;\n  height: ",";\n  background-color: ",";\n"],(function(e){return e.theme.sizing("4xs")}),(function(e){return e.theme.color("grey")})),V="undefined"!=typeof window&&"ontouchstart"in window,F=function(e){return V?M()(e,"touches[0].pageX",0):M()(e,"pageX",0)},q=function(e){var t=e.$wrapper,n=e.onScrollStart,o=void 0===n?function(){return null}:n,c=e.onScrollEnd,a=void 0===c?function(){return null}:c,s=Object(r.useState)({isActive:!1,scale:1,thumbWidth:0,startMousePosition:0,currentThumbPosition:0,startThumbPosition:0,maxThumbPosition:0}),u=s[0],l=s[1],d=Object(r.useRef)(t),m=Object(r.useRef)(),f=Object(r.useRef)(),p=Object(r.useCallback)((function(){d.current&&l((function(e){if(e.isActive)return e;var t=d.current.scrollLeft*e.scale;return Object.assign({},e,{currentThumbPosition:t,startThumbPosition:t})}))}),[d]),h=Object(r.useCallback)((function(){var e=m&&m.current;if(d.current&&e){var t=e.clientWidth/d.current.scrollWidth;l((function(e){return Object.assign({},e,{scale:t,thumbWidth:d.current.clientWidth*t})})),p()}}),[d,m,p]),v=function(){return p()},b=Object(r.useCallback)((function(e){l((function(t){var n=t.maxThumbPosition,r=t.startMousePosition,i=t.startThumbPosition,o=t.scale,c=i+e-r;if(c<0?c=0:c>n&&(c=n),d.current){var a=c/o;d.current.scrollLeft=a}return Object.assign({},t,{currentThumbPosition:c})}))}),[d]),g=function(e){return b(F(e))},w=function e(){document.removeEventListener(V?"touchmove":"mousemove",g,{passive:!0}),document.removeEventListener(V?"touchend":"mouseup",e,{passive:!0}),l((function(e){return Object.assign({},e,{isActive:!1})})),a()},y=Object(r.useCallback)((function(e,t){void 0===e&&(e="thumb"),t.stopPropagation();var n=m&&m.current;if(n){var r=F(t);l((function(t){var i=t.currentThumbPosition,o=t.thumbWidth,c="track"===e?r-n.getBoundingClientRect().left-o/2:i;return Object.assign({},t,{isActive:!0,startMousePosition:r,startThumbPosition:c,maxThumbPosition:n.clientWidth-o})})),document.addEventListener(V?"touchmove":"mousemove",g,{passive:!0}),document.addEventListener(V?"touchend":"mouseup",w,{passive:!0}),"track"===e&&b(r),o()}}),[m]),C=function(e){return void 0===e&&(e="thumb"),function(t){return y(e,t)}},j=function(){return h()};return Object(r.useEffect)((function(){return d.current=t,t&&(t.addEventListener("scroll",v,{passive:!0}),h()),window.addEventListener("resize",j,{passive:!0}),function(){t&&t.removeEventListener("scroll",v,{passive:!0}),window.removeEventListener("resize",j,{passive:!0})}}),[t]),i.a.createElement($,{ref:m,onMouseDown:V?void 0:C("track"),onTouchStart:V?C("track"):void 0,"data-test":"product-carousel-scrollbar"},i.a.createElement(B,{ref:f,onMouseDown:V?void 0:C("thumb"),onTouchStart:V?C("thumb"):void 0,style:{transform:"translateX("+u.currentThumbPosition+"px)",width:u.thumbWidth+"px"}}))},X=(n("ma9I"),n("pjDv"),n("E9XD"),n("PKPk"),function(e,t,n,r){e.scrollLeft=n*t+r}),Z=function(e,t){if(e){var n=Array.from(e.children),r=n.length,i=t>=r?r-1:t<0?0:t,o=n[0].offsetWidth;document.documentElement&&"scrollBehavior"in document.documentElement.style?e.scrollTo({left:i*o,behavior:"smooth"}):function(e,t,n){for(var r=e.scrollLeft,i=(n-r)/50,o=0,c=0;o<=t;)setTimeout(X,o,e,c,i,r),o+=t/50,c++}(e,200,i*o)}};t.a=Object(a.e)((function(e){var t=e.products,n=e.renderProduct,o=e.title,a=void 0===o?"":o,f=e.seeAllLink,p=e.showTitle,h=e.theme,v=e.visibilityTracking,b=h.media.breakpoints.small,g=Object(r.useState)({firstVisibleElementIndex:0,fittingElements:4}),w=g[0],y=w.firstVisibleElementIndex,C=w.fittingElements,O=g[1],E=Object(r.useRef)(y),I=Object(r.useRef)(!0),x=Object(r.useState)(!0),k=x[0],P=x[1],z=Object(s.a)("(max-width: "+b+"px)"),R=Object(r.useRef)(null),T=Object(r.useState)(null),A=T[0],N=T[1],D=Object(u.a)(),M=Object(r.useCallback)((function(){if(R.current){var e=function(e){if(e){var t=e.getBoundingClientRect(),n=Array.from(e.children);if(n&&n.length)return[].concat(n).reduce((function(e,n,r){var i=n.getBoundingClientRect();return i.left>=t.left-10&&i.right<=t.right+10&&e.push(r),e}),[])}return[]}(R.current);if(e.length){var n=(e[0]+e.length)/t.length,r=n%1!=0?Number(n.toFixed(2)):n;N(r),O({firstVisibleElementIndex:e[0],fittingElements:e.length})}}}),[R,t.length]);Object(l.a)((function(){return M(),window.addEventListener("resize",M,{passive:!0}),function(){window.removeEventListener("resize",M,{passive:!0})}})),Object(r.useEffect)((function(){A&&(I.current||E.current<y)&&(I.current=!1,v&&v(A))}),[y,E,A,v]);var $=C!==t.length&&t.length>C;return i.a.createElement(i.a.Fragment,null,i.a.createElement(L,{displayControls:$&&"boolean"==typeof z&&!z,displayLeftControl:0!==y,displayRightControl:y!==t.length-C,onPrevClick:function(){return Z(R.current,y-C)},onNextClick:function(){return Z(R.current,y+C)}},i.a.createElement(j,{showTitle:p,title:a,seeAllLink:f}),i.a.createElement(_,{"data-test":"product-carousel-wrapper"},i.a.createElement(W,{ref:R,onScroll:c()((function(){return M()}),100),snapScroll:k},t.map((function(e,t){var r=t>=y&&t<y+C?0:-1;return i.a.createElement(S,{key:t,tabIndex:r,"data-test":"product-wrapper",onClick:function(){return t=e.productCode,void D.productCarouselClickTrigger(a,t);var t}},n(e))})))),$&&i.a.createElement(q,{$wrapper:R.current,onScrollStart:function(){return P(!1)},onScrollEnd:function(){var e=R.current;if(e){var t=e.scrollLeft;P(!0),e.scrollLeft=t}}})),i.a.createElement(d.a,{"aria-live":"polite","aria-atomic":!0},i.a.createElement(m.a,{id:"contentPage.carousel.a11yMessage",values:{from:""+(y+1),to:""+(y+C),total:""+t.length}})))}))}}]);
//# sourceMappingURL=2d2266c7def2801e080a.11.js.map