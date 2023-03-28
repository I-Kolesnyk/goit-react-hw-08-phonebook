"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[426],{1426:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ae}});var o,r,a=n(9434),i=n(1273),s=function(e){return e.filter.value},c=n(168),u=n(6088),l=u.Z.label(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n"]))),d=u.Z.input(r||(r=(0,c.Z)(["\n  width: 300px;\n  height: 40px;\n  font-size: 16px;\n  border-radius: ",";\n  border: ",";\n"])),(function(e){return e.theme.inputBorderRadius}),(function(e){return e.theme.buttonBorder})),f=n(3329);var m,p,h=function(){var e=(0,a.I0)(),t=(0,a.v9)(s);return(0,f.jsxs)(l,{children:["Find contacts by name",(0,f.jsx)(d,{name:"filter",type:"text",onChange:function(t){return e((0,i.T)(t.currentTarget.value))},value:t})]})},v=n(5594),g=u.Z.li(m||(m=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 400px;\n  height: 40px;\n  padding: 5px;\n  font-size: 16px;\n  background-color: white;\n  border-radius: ",";\n  border: ",";\n"])),(function(e){return e.theme.inputBorderRadius}),(function(e){return e.theme.buttonBorder})),y=u.Z.button(p||(p=(0,c.Z)(["\n  width: 70px;\n  height: 40px;\n  transform: scale(1);\n  background-color: ",";\n  border-radius: ",";\n  border: ",";\n\n  font-size: 14px;\n  transition: transform 250ms ease-out, background-color 250ms ease-out;\n  &:hover,\n  &:focus-visible {\n    transform: scale(1.1);\n  }\n"])),(function(e){return e.theme.colors.buttonBackgroundColor}),(function(e){return e.theme.buttonBorderRadius}),(function(e){return e.theme.buttonBorder}));var b,x=function(e){var t=e.id,n=e.name,o=e.number,r=(0,a.I0)();return(0,f.jsxs)(g,{children:[(0,f.jsxs)("p",{children:[n,": ",o]}),(0,f.jsx)(y,{type:"button",onClick:function(){return function(e){r((0,v.GK)(e))}(t)},children:"Delete"})]})},T=n(873),E=function(e){return e.contacts.items},Z=(0,T.P1)([E,s],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),C=u.Z.ul(b||(b=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow: auto;\n"])));var I,_=function(){var e=(0,a.v9)(Z);return(0,f.jsx)(C,{children:e.map((function(e){var t=e.id,n=e.name,o=e.number;return(0,f.jsx)(x,{id:t,name:n,number:o},t)}))})},w=u.Z.p(I||(I=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  font-size: 24px;\n  width: 500px;\n  height: 70px;\n  background-color: white;\n  border-radius: ",";\n  border: ",";\n  text-align: center;\n"])),(function(e){return e.theme.inputBorderRadius}),(function(e){return e.theme.buttonBorder}));var L=function(e){var t=e.message;return(0,f.jsx)(f.Fragment,{children:t&&(0,f.jsx)(w,{children:t})})},O=n(1413),R=n(2791),k=n(1134),N=n(4695),B=n(6727),j=n(4942),z=n(9439),M=n(4925),P=n(3433);function A(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=A(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var D=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=A(e))&&(o&&(o+=" "),o+=t);return o},S=["theme","type"],F=["delay","staleId"],q=function(e){return"number"==typeof e&&!isNaN(e)},H=function(e){return"string"==typeof e},Q=function(e){return"function"==typeof e},V=function(e){return H(e)||Q(e)?e:null},G=function(e){return(0,R.isValidElement)(e)||H(e)||Q(e)||q(e)};function X(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var o=e.children,a=e.position,s=e.preventExitTransition,u=e.done,l=e.nodeRef,d=e.isIn,f=r?"".concat(t,"--").concat(a):t,m=r?"".concat(n,"--").concat(a):n,p=(0,R.useRef)(0);return(0,R.useLayoutEffect)((function(){var e,t=l.current,n=f.split(" "),o=function e(o){var r;o.target===l.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===p.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,P.Z)(n)))};(e=t.classList).add.apply(e,(0,P.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,R.useEffect)((function(){var e=l.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,u,c):u()};d||(s?t():(p.current=1,e.className+=" ".concat(m),e.addEventListener("animationend",t)))}),[d]),R.createElement(R.Fragment,null,o)}}function K(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var U={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,P.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},W=function(e){var t=e.theme,n=e.type,o=(0,M.Z)(e,S);return R.createElement("svg",(0,O.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},Y={info:function(e){return R.createElement(W,(0,O.Z)({},e),R.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return R.createElement(W,(0,O.Z)({},e),R.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return R.createElement(W,(0,O.Z)({},e),R.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return R.createElement(W,(0,O.Z)({},e),R.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return R.createElement("div",{className:"Toastify__spinner"})}};function J(e){var t=(0,R.useReducer)((function(e){return e+1}),0),n=(0,z.Z)(t,2)[1],o=(0,R.useState)([]),r=(0,z.Z)(o,2),a=r[0],i=r[1],s=(0,R.useRef)(null),c=(0,R.useRef)(new Map).current,u=function(e){return-1!==a.indexOf(e)},l=(0,R.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:u,getToast:function(e){return c.get(e)}}).current;function d(e){var t=e.containerId;!l.props.limit||t&&l.containerId!==t||(l.count-=l.queue.length,l.queue=[])}function f(e){i((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function m(){var e=l.queue.shift();h(e.toastContent,e.toastProps,e.staleId)}function p(e,t){var o=t.delay,r=t.staleId,a=(0,M.Z)(t,F);if(G(e)&&!function(e){return!s.current||l.props.enableMultiContainer&&e.containerId!==l.props.containerId||c.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,u=a.updateId,d=a.data,p=l.props,v=function(){return f(i)},g=null==u;g&&l.count++;var y,b,x=(0,O.Z)((0,O.Z)((0,O.Z)({},p),{},{style:p.toastStyle,key:l.toastKey++},Object.fromEntries(Object.entries(a).filter((function(e){var t=(0,z.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:i,updateId:u,data:d,closeToast:v,isIn:!1,className:V(a.className||p.toastClassName),bodyClassName:V(a.bodyClassName||p.bodyClassName),progressClassName:V(a.progressClassName||p.progressClassName),autoClose:!a.isLoading&&(y=a.autoClose,b=p.autoClose,!1===y||q(y)&&y>0?y:b),deleteToast:function(){var e=K(c.get(i),"removed");c.delete(i),U.emit(4,e);var t=l.queue.length;if(l.count=null==i?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),t>0){var o=null==i?l.props.limit:1;if(1===t||1===o)l.displayedToast++,m();else{var r=o>t?t:o;l.displayedToast=r;for(var a=0;a<r;a++)m()}}else n()}});x.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,i={theme:t,type:n};return!1===r||(Q(r)?a=r(i):(0,R.isValidElement)(r)?a=(0,R.cloneElement)(r,i):H(r)||q(r)?a=r:o?a=Y.spinner():function(e){return e in Y}(n)&&(a=Y[n](i))),a}(x),Q(a.onOpen)&&(x.onOpen=a.onOpen),Q(a.onClose)&&(x.onClose=a.onClose),x.closeButton=p.closeButton,!1===a.closeButton||G(a.closeButton)?x.closeButton=a.closeButton:!0===a.closeButton&&(x.closeButton=!G(p.closeButton)||p.closeButton);var T=e;(0,R.isValidElement)(e)&&!H(e.type)?T=(0,R.cloneElement)(e,{closeToast:v,toastProps:x,data:d}):Q(e)&&(T=e({closeToast:v,toastProps:x,data:d})),p.limit&&p.limit>0&&l.count>p.limit&&g?l.queue.push({toastContent:T,toastProps:x,staleId:r}):q(o)?setTimeout((function(){h(T,x,r)}),o):h(T,x,r)}}function h(e,t,n){var o=t.toastId;n&&c.delete(n);var r={content:e,props:t};c.set(o,r),i((function(e){return[].concat((0,P.Z)(e),[o]).filter((function(e){return e!==n}))})),U.emit(4,K(r,null==r.props.updateId?"added":"updated"))}return(0,R.useEffect)((function(){return l.containerId=e.containerId,U.cancelEmit(3).on(0,p).on(1,(function(e){return s.current&&f(e)})).on(5,d).emit(2,l),function(){c.clear(),U.emit(3,l)}}),[]),(0,R.useEffect)((function(){l.props=e,l.isToastActive=u,l.displayedToast=a.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(c.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:s,isToastActive:u}}function $(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function ee(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function te(e){var t=(0,R.useState)(!1),n=(0,z.Z)(t,2),o=n[0],r=n[1],a=(0,R.useState)(!1),i=(0,z.Z)(a,2),s=i[0],c=i[1],u=(0,R.useRef)(null),l=(0,R.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,d=(0,R.useRef)(e),f=e.autoClose,m=e.pauseOnHover,p=e.closeToast,h=e.onClick,v=e.closeOnClick;function g(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",T),document.addEventListener("mouseup",E),document.addEventListener("touchmove",T),document.addEventListener("touchend",E);var n=u.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=n.getBoundingClientRect(),n.style.transition="",l.x=$(t.nativeEvent),l.y=ee(t.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(t){if(l.boundingRect){var n=l.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&l.x>=a&&l.x<=i&&l.y>=o&&l.y<=r?x():b()}}function b(){r(!0)}function x(){r(!1)}function T(t){var n=u.current;l.canDrag&&n&&(l.didMove=!0,o&&x(),l.x=$(t),l.y=ee(t),l.delta="x"===e.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(l.delta,"px)"),n.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function E(){document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",E);var t=u.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return c(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,R.useEffect)((function(){d.current=e})),(0,R.useEffect)((function(){return u.current&&u.current.addEventListener("d",b,{once:!0}),Q(e.onOpen)&&e.onOpen((0,R.isValidElement)(e.children)&&e.children.props),function(){var e=d.current;Q(e.onClose)&&e.onClose((0,R.isValidElement)(e.children)&&e.children.props)}}),[]),(0,R.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",b),window.addEventListener("blur",x)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",x))}}),[e.pauseOnFocusLoss]);var Z={onMouseDown:g,onTouchStart:g,onMouseUp:y,onTouchEnd:y};return f&&m&&(Z.onMouseEnter=x,Z.onMouseLeave=b),v&&(Z.onClick=function(e){h&&h(e),l.canCloseOnClick&&p()}),{playToast:b,pauseToast:x,isRunning:o,preventExitTransition:s,toastRef:u,eventHandlers:Z}}function ne(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return R.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},R.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},R.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function oe(e){var t=e.delay,n=e.isRunning,o=e.closeToast,r=e.type,a=void 0===r?"default":r,i=e.hide,s=e.className,c=e.style,u=e.controlledProgress,l=e.progress,d=e.rtl,f=e.isIn,m=e.theme,p=i||u&&0===l,h=(0,O.Z)((0,O.Z)({},c),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:p?0:1});u&&(h.transform="scaleX(".concat(l,")"));var v=D("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(m),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":d}),g=Q(s)?s({rtl:d,type:a,defaultClassName:v}):D(v,s);return R.createElement("div",(0,j.Z)({role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:g,style:h},u&&l>=1?"onTransitionEnd":"onAnimationEnd",u&&l<1?null:function(){f&&o()}))}var re=function(e){var t=te(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,c=e.autoClose,u=e.onClick,l=e.type,d=e.hideProgressBar,f=e.closeToast,m=e.transition,p=e.position,h=e.className,v=e.style,g=e.bodyClassName,y=e.bodyStyle,b=e.progressClassName,x=e.progressStyle,T=e.updateId,E=e.role,Z=e.progress,C=e.rtl,I=e.toastId,_=e.deleteToast,w=e.isIn,L=e.isLoading,k=e.iconOut,N=e.closeOnClick,B=e.theme,j=D("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(l),{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":N}),z=Q(h)?h({rtl:C,position:p,type:l,defaultClassName:j}):D(j,h),M=!!Z||!c,P={closeToast:f,type:l,theme:B},A=null;return!1===i||(A=Q(i)?i(P):(0,R.isValidElement)(i)?(0,R.cloneElement)(i,P):ne(P)),R.createElement(m,{isIn:w,done:_,position:p,preventExitTransition:o,nodeRef:r},R.createElement("div",(0,O.Z)((0,O.Z)({id:I,onClick:u,className:z},a),{},{style:v,ref:r}),R.createElement("div",(0,O.Z)((0,O.Z)({},w&&{role:E}),{},{className:Q(g)?g({type:l}):D("Toastify__toast-body",g),style:y}),null!=k&&R.createElement("div",{className:D("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!L})},k),R.createElement("div",null,s)),A,R.createElement(oe,(0,O.Z)((0,O.Z)({},T&&!M?{key:"pb-".concat(T)}:{}),{},{rtl:C,theme:B,delay:c,isRunning:n,isIn:w,closeToast:f,hide:d,type:l,style:x,className:b,controlledProgress:M,progress:Z||0}))))},ae=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},ie=X(ae("bounce",!0)),se=(X(ae("slide",!0)),X(ae("zoom")),X(ae("flip")),(0,R.forwardRef)((function(e,t){var n=J(e),o=n.getToastToRender,r=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,c=e.rtl,u=e.containerId;function l(e){var t=D("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":c});return Q(i)?i({position:e,rtl:c,defaultClassName:t}):D(t,V(i))}return(0,R.useEffect)((function(){t&&(t.current=r.current)}),[]),R.createElement("div",{ref:r,className:"Toastify",id:u},o((function(e,t){var n=t.length?(0,O.Z)({},s):(0,O.Z)((0,O.Z)({},s),{},{pointerEvents:"none"});return R.createElement("div",{className:l(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,r=e.props;return R.createElement(re,(0,O.Z)((0,O.Z)({},r),{},{isIn:a(r.toastId),style:(0,O.Z)((0,O.Z)({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),o)})))})))})));se.displayName="ToastContainer",se.defaultProps={position:"top-right",transition:ie,autoClose:5e3,closeButton:ne,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var ce,ue,le,de,fe,me=new Map,pe=[],he=1;function ve(){return""+he++}function ge(e){return e&&(H(e.toastId)||q(e.toastId))?e.toastId:ve()}function ye(e,t){return me.size>0?U.emit(0,e,t):pe.push({content:e,options:t}),t.toastId}function be(e,t){return(0,O.Z)((0,O.Z)({},t),{},{type:t&&t.type||e,toastId:ge(t)})}function xe(e){return function(t,n){return ye(t,be(e,n))}}function Te(e,t){return ye(e,be("default",t))}Te.loading=function(e,t){return ye(e,be("default",(0,O.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Te.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=H(r)?Te.loading(r,n):Te.loading(r.render,(0,O.Z)((0,O.Z)({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,r){if(null!=t){var a=(0,O.Z)((0,O.Z)((0,O.Z)({type:e},s),n),{},{data:r}),i=H(t)?{render:t}:t;return o?Te.update(o,(0,O.Z)((0,O.Z)({},a),i)):Te(i.render,(0,O.Z)((0,O.Z)({},a),i)),r}Te.dismiss(o)},u=Q(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},Te.success=xe("success"),Te.info=xe("info"),Te.error=xe("error"),Te.warning=xe("warning"),Te.warn=Te.warning,Te.dark=function(e,t){return ye(e,be("default",(0,O.Z)({theme:"dark"},t)))},Te.dismiss=function(e){me.size>0?U.emit(1,e):pe=pe.filter((function(t){return null!=e&&t.options.toastId!==e}))},Te.clearWaitingQueue=function(e){return void 0===e&&(e={}),U.emit(5,e)},Te.isActive=function(e){var t=!1;return me.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Te.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=me.get(n||ce);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=(0,O.Z)((0,O.Z)((0,O.Z)({delay:100},o),t),{},{toastId:t.toastId||e,updateId:ve()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,ye(i,a)}}),0)},Te.done=function(e){Te.update(e,{progress:1})},Te.onChange=function(e){return U.on(4,e),function(){U.off(4,e)}},Te.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Te.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},U.on(2,(function(e){ce=e.containerId||e,me.set(ce,e),pe.forEach((function(e){U.emit(0,e.content,e.options)})),pe=[]})).on(3,(function(e){me.delete(e.containerId||e),0===me.size&&U.off(0).off(1).off(5)}));var Ee=u.Z.form(ue||(ue=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  gap: 30px;\n  width: 65%;\n"]))),Ze=u.Z.label(le||(le=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  div {\n    padding: 8px;\n    border: ",";\n    border-radius: ",";\n    background-color: #ffc4c4;\n    width: 288px;\n    font-size: 14px;\n    &::first-letter {\n      text-transform: uppercase;\n    }\n  }\n"])),(function(e){return e.theme.buttonBorder}),(function(e){return e.theme.inputBorderRadius})),Ce=u.Z.input(de||(de=(0,c.Z)(["\n  width: 300px;\n  height: 40px;\n  font-size: 16px;\n  border-radius: ",";\n  border: ",";\n  &::placeholder {\n    font-size: 16px;\n  }\n"])),(function(e){return e.theme.inputBorderRadius}),(function(e){return e.theme.buttonBorder})),Ie=u.Z.input(fe||(fe=(0,c.Z)(["\n  width: 150px;\n  height: 40px;\n  transform: scale(1);\n  background-color: ",";\n  border-radius: ",";\n  border: ",";\n\n  font-size: 16px;\n  transition: transform 250ms ease-out, background-color 250ms ease-out;\n  &:hover,\n  &:focus-visible {\n    transform: scale(1.1);\n  }\n"])),(function(e){return e.theme.colors.buttonBackgroundColor}),(function(e){return e.theme.buttonBorderRadius}),(function(e){return e.theme.buttonBorder})),_e=B.Ry().shape({name:B.Z_().trim().max(64).required("Name is required").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,{message:"Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."}),number:B.Z_().trim().required("Number is required").min(5).matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,{message:"Invalid number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +."})});var we,Le,Oe,Re,ke,Ne=function(){var e,t,n=(0,a.I0)(),o=(0,a.v9)(E),r=(0,k.cI)({defaultValues:{name:"",number:""},resolver:(0,N.X)(_e),mode:"onTouched"}),i=r.register,s=r.handleSubmit,c=r.formState.errors,u=r.reset,l=r.formState;return(0,R.useEffect)((function(){l.isSubmitSuccessful&&u()}),[l.isSubmitSuccessful,u]),(0,f.jsxs)(Ee,{onSubmit:s((function(e){var t=e.name.toLowerCase();if(o.find((function(e){return e.name.toLowerCase()===t})))return Te.info("".concat(e.name," is already in contacts!"));n((0,v.xf)(e))})),children:[(0,f.jsxs)(Ze,{children:["Name",(0,f.jsx)(Ce,(0,O.Z)({type:"text",placeholder:"Enter a contact name",autoComplete:"off"},i("name"))),c.name&&(0,f.jsx)("div",{children:null===(e=c.name)||void 0===e?void 0:e.message})]}),(0,f.jsxs)(Ze,{children:["Number",(0,f.jsx)(Ce,(0,O.Z)({type:"tel",placeholder:"Enter a contact number",autoComplete:"off"},i("number"))),c.number&&(0,f.jsx)("div",{children:null===(t=c.number)||void 0===t?void 0:t.message})]}),(0,f.jsx)(Ie,{type:"submit"})]})};function Be(){return(0,f.jsx)(se,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})}var je=u.Z.div(we||(we=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n  flex-grow: 1;\n"]))),ze=u.Z.div(Le||(Le=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  justify-content: center;\n  align-items: center;\n"]))),Me=u.Z.section(Oe||(Oe=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n  width: 500px;\n  height: 570px;\n  padding: 20px;\n  background-color: #d7fff1;\n  border-radius: 10px;\n  box-shadow: ",";\n"])),(function(e){return e.theme.boxShadow})),Pe=(u.Z.h1(Re||(Re=(0,c.Z)(["\n  margin-top: 0;\n  margin-bottom: 40px;\n  text-align: center;\n  font-size: 32px;\n  text-transform: uppercase;\n"]))),u.Z.h2(ke||(ke=(0,c.Z)(["\n  margin-top: 0;\n  text-align: center;\n  font-size: 28px;\n"]))));var Ae=function(){var e=(0,a.v9)(E);return(0,f.jsxs)(je,{children:[(0,f.jsxs)(ze,{children:[(0,f.jsxs)(Me,{children:[(0,f.jsx)(Pe,{children:"Add contact"}),(0,f.jsx)(Ne,{})]}),(0,f.jsxs)(Me,{children:[(0,f.jsx)(Pe,{children:"Contacts"})," ",0!==e.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h,{}),(0,f.jsx)(_,{})]}):(0,f.jsx)(L,{message:"There are no contacts in your Phonebook. Please add your first contact!"})]})]}),(0,f.jsx)(Be,{})]})}}}]);
//# sourceMappingURL=426.f963099b.chunk.js.map