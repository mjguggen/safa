_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("/MKj"),i=n("ANjH"),c=n("5HXA");function s(e){return function(t){var n=t.dispatch,a=t.getState;return function(t){return function(r){return"function"===typeof r?r(n,a,e):t(r)}}}}var l=s();l.withExtraArgument=s;var u=l;function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={language:!0};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={isAuthorized:!1},N=Object(i.combineReducers)({language:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;switch(n){case"SET_LANGUAGE_E":return M(M({},e),{},{language:!0});case"SET_LANGUAGE_S":return M(M({},e),{},{language:!1});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;switch(n){case"AUTHORIZE":return w(w({},e),{},{isAuthorized:!0});default:return e}}}),m=[u],v=Object(i.createStore)(N,{},Object(c.composeWithDevTools)(i.applyMiddleware.apply(void 0,m))),L=n("YFqc"),b=n.n(L),h=n("nOHt"),j=r.a.createElement,D=Object(o.b)((function(e){return{language:e.language.language}}),{setLanguageE:function(){return function(e){e({type:"SET_LANGUAGE_E"})}},setLanguageS:function(){return function(e){e({type:"SET_LANGUAGE_S"})}}})((function(e){Object(h.useRouter)();var t=Object(a.useState)(!1),n=t[0],r=t[1],o=function(){r(!n)};return j("div",{className:"header"},j("div",{className:"header-title-container"},j("a",{className:"header-title",href:"/"},"SAFA"),j("div",{className:"header-description desktop"},"Somali American Farmer's Association")),j("div",{className:"header-elements"},j("div",{className:"lang-container"},j("button",{onClick:function(){return e.setLanguageE()},className:"lang-btn",style:{backgroundColor:e.language?"#20603D":"transparent",color:e.language?"white":"#20603D"}},"EN"),j("div",{style:{height:"70%",width:2,backgroundColor:"#20603D"}}),j("button",{onClick:function(){return e.setLanguageS()},className:"lang-btn",style:{backgroundColor:e.language?"transparent":"#20603D",color:e.language?"#20603D":"white"}},"SO")),j("div",{className:"link-container"},j(b.a,{href:"/"},j("div",{className:"header-link"}," Home ")),j(b.a,{href:"/about"},j("div",{className:"header-link"},"About")),j(b.a,{href:"/donate"},j("div",{className:"header-link"},"Donate")),j(b.a,{href:"/news"},j("div",{className:"header-link"},"News")),j(b.a,{href:"/contact"},j("div",{className:"header-link"},"Contact")))),j("button",{className:"mobile-nav-container",onClick:function(){return o()}},j("div",{className:"mobile-nav"},j("div",{className:"nav-el",style:{transform:n?"translate(10px, 0px)":"translate(0px, 0px)"}}),j("div",{className:"nav-el"}),j("div",{className:"nav-el",style:{transform:n?"translate(-10px, 0px)":"translate(0px, 0px)"}}))),j("div",{className:"mobile-nav-links",style:{pointerEvents:n?"all":"none",height:n?"fit-content":"0%"}},j("div",{className:"mobile-nav-box",style:{display:n?"flex":"none"}},j("div",{className:"lang-container"},j("button",{onClick:function(){return e.setLanguageE()},className:"lang-btn",style:{backgroundColor:e.language?"#20603D":"transparent",color:e.language?"white":"#20603D"}},"EN"),j("div",{style:{height:"70%",width:2,backgroundColor:"#20603D"}}),j("button",{onClick:function(){return e.setLanguageS()},className:"lang-btn",style:{backgroundColor:e.language?"transparent":"#20603D",color:e.language?"#20603D":"white"}},"SO"))),j("div",{className:"mobile-nav-box mobile-nav-link-box",style:{display:n?"flex":"none"}},j(b.a,{href:"/"},j("div",{className:"header-link",onClick:function(){return o()}},"Home")),j(b.a,{href:"/about"},j("div",{className:"header-link",onClick:function(){return o()}},"About")),j(b.a,{href:"/donate"},j("div",{className:"header-link",onClick:function(){return o()}},"Donate")),j(b.a,{href:"/news"},j("div",{className:"header-link",onClick:function(){return o()}},"News")),j(b.a,{href:"/contact"},j("div",{className:"header-link",onClick:function(){return o()}},"Contact")))))})),O=n("4RR0"),E=n.n(O),T=n("dIsS"),S=n.n(T),C=r.a.createElement,z=function(e){return C("div",{className:"footer"},C("div",{className:"left"},C("div",{className:"title"},"Stay Connected"),C("div",{className:"logo-container"},C("a",{href:"https://www.facebook.com/SAFAMinnesota",target:"_blank"},C("img",{src:E.a,className:"logo"})),C("a",{href:"https://www.instagram.com/naimasfarm/",target:"_blank"},C("img",{src:S.a,className:"logo"})))),C("div",{className:"right"},C("div",null,"\xa9 Somali American Farmer's Association")))},x=r.a.createElement,k=function(e){return x("div",null,x(D,null),x("div",{className:"screen"},e.children),x(z,null))},I=r.a.createElement,_=function(e){var t=Object(a.useState)(!1),n=t[0],r=t[1],o=function(){r(!0),setTimeout((function(){r(!1)}),3e3)};return I("div",{style:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}},I("div",{style:{textAlign:"center"}},I("div",null," Enter Password to access site"),I("form",{onSubmit:function(t){return function(t){if(t.preventDefault(),"safa2020"!==document.getElementById("password").value)return o();e.setIsAuthenticated(!0)}(t)}},I("input",{id:"password",type:"password",style:{width:150,height:30,margin:10,borderRadius:10,border:"1px solid #20603D",outline:"none",paddingLeft:10}}),I("input",{type:"submit",className:"btn",style:{height:30,margin:10,borderRadius:10,padding:0,fontSize:14,fontWeight:300,paddingLeft:20,paddingRight:20,background:"white",border:"1px solid #20603D",outline:"none"}})),I("div",null,n?"Incorrect Password":" ")))},A=(n("a6qw"),n("h3ov"),r.a.createElement);t.default=function(e){var t=e.Component,n=e.pageProps,r=Object(a.useState)(!1),i=r[0],c=r[1];return A(o.a,{store:v},i?A(k,null,A(t,n)):A(_,{setIsAuthenticated:c}))}},"4RR0":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz48IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMjQuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAtLT48c3ZnIHZlcnNpb249JzEuMScgaWQ9J0xheWVyXzEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHg9JzBweCcgeT0nMHB4JyB2aWV3Qm94PScwIDAgNTEyIDUxMicgc3R5bGU9J2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsnIHhtbDpzcGFjZT0ncHJlc2VydmUnPjxwYXRoIHN0eWxlPSdmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMwMTAxMDE7JyBkPSdNNDgwLDI1Ny4zNWMwLTEyMy43LTEwMC4zLTIyNC0yMjQtMjI0cy0yMjQsMTAwLjMtMjI0LDIyNCBjMCwxMTEuOCw4MS45LDIwNC40NywxODksMjIxLjI5VjMyMi4xMmgtNTYuODl2LTY0Ljc3SDIyMXYtNDkuMzZjMC01Ni4xMywzMy40NS04Ny4xNiw4NC42MS04Ny4xNmMyNC41MSwwLDUwLjE1LDQuMzgsNTAuMTUsNC4zOCB2NTUuMTNoLTI4LjI2Yy0yNy44MSwwLTM2LjUxLDE3LjI2LTM2LjUxLDM1djQyLjAyaDYyLjEybC05LjkyLDY0Ljc3aC01Mi4ydjE1Ni41M0MzOTguMSw0NjEuODUsNDgwLDM2OS4xOCw0ODAsMjU3LjM1TDQ4MCwyNTcuMzV6ICcvPjwvc3ZnPgo="},"5HXA":function(e,t,n){"use strict";var a=n("ANjH").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?a:a.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},a6qw:function(e,t,n){},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var o,i=r(n("q1tI")),c=n("elyg"),s=n("nOHt"),l=new Map,u=window.IntersectionObserver,d={};var f=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function M(e,t,n,a){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),d[t+"%"+n]=!0)}var y=function(e){var t=!1!==e.prefetch,n=i.default.useState(),r=a(n,2),o=r[0],l=r[1],y=(0,s.useRouter)(),g=y&&y.pathname||"/",w=i.default.useMemo((function(){var t=(0,c.resolveHref)(g,e.href);return{href:t,as:e.as?(0,c.resolveHref)(g,e.as):t}}),[g,e.href,e.as]),p=w.href,N=w.as;i.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,c.isLocalURL)(p)&&!d[p+"%"+N])return f(o,(function(){M(y,p,N)}))}),[t,o,p,N,y]);var m=e.children,v=e.replace,L=e.shallow,b=e.scroll;"string"===typeof m&&(m=i.default.createElement("a",null,m));var h=i.Children.only(m),j={ref:function(e){e&&l(e),h&&"object"===typeof h&&h.ref&&("function"===typeof h.ref?h.ref(e):"object"===typeof h.ref&&(h.ref.current=e))},onClick:function(e){h.props&&"function"===typeof h.props.onClick&&h.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,y,p,N,v,L,b)}};return t&&(j.onMouseEnter=function(e){(0,c.isLocalURL)(p)&&(h.props&&"function"===typeof h.props.onMouseEnter&&h.props.onMouseEnter(e),M(y,p,N,{priority:!0}))}),(e.passHref||"a"===h.type&&!("href"in h.props))&&(j.href=(0,c.addBasePath)(N)),i.default.cloneElement(h,j)};t.default=y},dIsS:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPmlvbmljb25zLXY1X2xvZ29zPC90aXRsZT48cGF0aCBkPSdNMzQ5LjMzLDY5LjMzYTkzLjYyLDkzLjYyLDAsMCwxLDkzLjM0LDkzLjM0VjM0OS4zM2E5My42Miw5My42MiwwLDAsMS05My4zNCw5My4zNEgxNjIuNjdhOTMuNjIsOTMuNjIsMCwwLDEtOTMuMzQtOTMuMzRWMTYyLjY3YTkzLjYyLDkzLjYyLDAsMCwxLDkzLjM0LTkzLjM0SDM0OS4zM20wLTM3LjMzSDE2Mi42N0M5MC44LDMyLDMyLDkwLjgsMzIsMTYyLjY3VjM0OS4zM0MzMiw0MjEuMiw5MC44LDQ4MCwxNjIuNjcsNDgwSDM0OS4zM0M0MjEuMiw0ODAsNDgwLDQyMS4yLDQ4MCwzNDkuMzNWMTYyLjY3QzQ4MCw5MC44LDQyMS4yLDMyLDM0OS4zMywzMlonLz48cGF0aCBkPSdNMzc3LjMzLDE2Mi42N2EyOCwyOCwwLDEsMSwyOC0yOEEyNy45NCwyNy45NCwwLDAsMSwzNzcuMzMsMTYyLjY3WicvPjxwYXRoIGQ9J00yNTYsMTgxLjMzQTc0LjY3LDc0LjY3LDAsMSwxLDE4MS4zMywyNTYsNzQuNzUsNzQuNzUsMCwwLDEsMjU2LDE4MS4zM00yNTYsMTQ0QTExMiwxMTIsMCwxLDAsMzY4LDI1NiwxMTIsMTEyLDAsMCwwLDI1NiwxNDRaJy8+PC9zdmc+"},h3ov:function(e,t,n){}},[[0,0,1,2,3]]]);