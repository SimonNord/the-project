(this["webpackJsonpproject-template"]=this["webpackJsonpproject-template"]||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/avatar-image.b15acc02.png"},24:function(e,t,n){e.exports=n.p+"static/media/no_content_placeholder_image.86a96933.png"},25:function(e){e.exports=JSON.parse('{"name":"project-template","homepage":"","version":"0.1.0","private":true,"author":"Mo Sattler","contributors":["Mo Sattler","Simon Nordstr\xf6m","Liam","Ruaridh","Kate Hansen","mchiesa"],"dependencies":{"@testing-library/react":"10.0.5","@testing-library/user-event":"10.4.0","@types/jest":"25.2.3","@types/node":"14.0.9","@types/react":"16.9.35","@types/react-dom":"16.9.8","@types/react-router-dom":"5.1.5","@types/styled-components":"5.1.0","react":"16.13.1","react-dom":"16.13.1","react-router":"5.2.0","react-router-dom":"5.2.0","react-scripts":"3.4.1","styled-components":"5.1.1","typescript":"3.9.3"},"scripts":{"check-node-version":"npx check-node-version --node $(cat .nvmrc)","preinstall":"npm run check-node-version","prestart":"npm run check-node-version","start":"react-scripts start","prebuild":"npm run check-node-version","build":"react-scripts build","pretest":"npm run check-node-version","test":"react-scripts test","lint":"eslint --ext .js --ext .tsx --max-warnings 0 src/","storybook":"start-storybook -p 9009 -s public","build-storybook":"build-storybook -s public","typecheck":"tsc --noEmit -p tsconfig.json","test:coverage":"npm t -- --coverage"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"@storybook/addon-actions":"5.3.19","@storybook/addon-backgrounds":"5.3.19","@storybook/addon-links":"5.3.19","@storybook/addons":"5.3.19","@storybook/preset-create-react-app":"3.0.0","@storybook/react":"5.3.19","@testing-library/jest-dom":"5.9.0","@testing-library/user-event":"10.4.0","husky":"4.2.5","lint-staged":"10.2.7","prettier":"2.0.5"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"*.{ts,tsx,js,json,css,md}":"prettier --write"},"jest":{"collectCoverageFrom":["src/**/*.{js,jsx,ts,tsx}","!src/**/*.stories.{js,jsx,ts,tsx}"]}}')},26:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var r,o,a=n(0),i=n.n(a),l=n(19),c=n.n(l),s=n(1),d=n(13),m=n(7);!function(e){e.Black="rgb(0,0,0)",e.Cinder="rgb(36, 47, 60)",e.LimedSpruce="rgb(57, 67, 78)",e.White="rgb(255,255,255)",e.CodGray="rgb(18, 18, 18)",e.DodgerBlue="rgb(67, 124, 255)",e.GreySeeThru="hsla(0,0%,100%,.3)"}(r||(r={})),function(e){e.Home="/",e.Settings="/settings"}(o||(o={}));var p=Object(s.b)("div").withConfig({displayName:"Spacer___StyledDiv",componentId:"qyot97-0"})((function(e){return{padding:e._css}})),u=function(e){var t=e.children,n=e.top,r=void 0===n?0:n,o=e.right,a=void 0===o?0:o,l=e.bottom,c=void 0===l?0:l,s=e.left,d=8*r,m=8*a,u=8*c,f=8*(void 0===s?0:s);return i.a.createElement(p,{_css:"".concat(d,"px ").concat(m,"px ").concat(u,"px ").concat(f,"px")},t)},f=n(23),g=n.n(f),h=s.b.div.attrs({role:"menu"}).withConfig({displayName:"ExpandedList__StyledExpandedList",componentId:"y4be7e-0"})(["position:absolute;left:0;right:0;margin:3px 10px;padding:4px 0;border-radius:3px;background-color:",";text-align:left;z-index:999;"],r.White),b=Object(s.b)(h).withConfig({displayName:"ExpandedList__StyledExpandedListUp",componentId:"y4be7e-1"})(["bottom:43px;"]),y=(s.b.span.attrs({role:"menuitem"}).withConfig({displayName:"ExpandedList__ExpandedListItem",componentId:"y4be7e-2"})(["display:block;font-size:15px;font-weight:500;"]),function(e){var t=e.children;return e.direction?i.a.createElement(b,null,t):i.a.createElement(h,null,t)}),v=n(10),x=s.b.span.withConfig({displayName:"FormattedText",componentId:"sc-1ai0skl-0"})(["font-size:",";font-weight:",";color:",";"],(function(e){return w[e.size]}),(function(e){return E[e.weight]}),(function(e){return e.color}));x.defaultProps={color:r.Black,weight:"medium",size:"0"};var E={regular:400,medium:600,bold:700},w={"-2":"12px","-1":"14px",0:"16px",1:"18px",2:"20px",3:"24px",4:"30px",5:"36px",6:"48px",7:"60px",8:"72px"},_=x,k=Object(s.b)(v.b).withConfig({displayName:"AnchorLink___StyledLink",componentId:"sc-1cirq1q-0"})(["text-decoration:none;"]),C=Object(s.b)("div").withConfig({displayName:"AnchorLink___StyledDiv",componentId:"sc-1cirq1q-1"})(["display:flex;align-items:center;transition:color 0.2s ease-in-out,background-color 0.2s ease-in-out;&:hover{background-color:",";","{color:",";}}"],(function(e){return e._css}),_,(function(e){return e._css2})),j=function(e){var t=e.to,n=e.linkColor,o=e.children;return i.a.createElement(k,{to:t},i.a.createElement(C,{role:"menuitem",_css:r.DodgerBlue,_css2:r.White},i.a.createElement(u,{top:1,bottom:1,left:2},i.a.createElement(_,{size:"0",weight:"regular",color:n},o))))};j.defaultProps={linkColor:r.Black};var O=j,N=function(e){var t=e.children;return i.a.createElement("span",null,t)};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var H=i.a.createElement("path",{fillRule:"evenodd",d:"M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z"}),z=function(e){var t=e.svgRef,n=e.title,r=I(e,["svgRef","title"]);return i.a.createElement("svg",S({viewBox:"0 0 10 16",width:10,height:16,ref:t},r),n?i.a.createElement("title",null,n):null,H)},L=i.a.forwardRef((function(e,t){return i.a.createElement(z,S({svgRef:t},e))})),P=(n.p,s.b.div.withConfig({displayName:"styles__Background",componentId:"m1ywl5-0"})(["display:flex;background-color:",";padding:15px;align-items:center;justify-content:space-between;border-radius:3px;margin:0px 10px;"],r.LimedSpruce)),W=s.b.div.withConfig({displayName:"styles__LeftContent",componentId:"m1ywl5-1"})(["display:flex;overflow:hidden;"]),B=s.b.p.withConfig({displayName:"styles__Username",componentId:"m1ywl5-2"})(["color:",";margin:0px;font-size:15px;line-height:18px;font-weight:600;"],r.White),A=s.b.div.withConfig({displayName:"styles__Email",componentId:"m1ywl5-3"})(["font-size:13px;line-height:18px;font-weight:500;color:hsla(0,0%,100%,0.5);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;"]),R=s.b.div.withConfig({displayName:"styles__TextContainer",componentId:"m1ywl5-4"})(["display:flex;flex-direction:column;justify-content:space-between;margin-left:15px;overflow:hidden;"]),D=s.b.img.withConfig({displayName:"styles__Image",componentId:"m1ywl5-5"})(["width:42px;height:42px;border-radius:3px;"]),q=Object(s.b)(L).withConfig({displayName:"styles__ArrowDown",componentId:"m1ywl5-6"})(["margin:0 10px 0 15px;fill:",";"],r.White),M=Object(s.b)("div").withConfig({displayName:"UserCard___StyledDiv",componentId:"sc-147b49p-0"})({position:"relative"}),T=function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),r=n[0],l=n[1];return i.a.createElement(M,null,i.a.createElement(P,{onClick:function(){return l(!r)}},i.a.createElement(W,null,i.a.createElement(D,{src:g.a,alt:""}),i.a.createElement(R,null,i.a.createElement(B,null,e.user.firstName),i.a.createElement(A,{title:e.user.email},e.user.email))),i.a.createElement(q,null)),r&&i.a.createElement(y,null,i.a.createElement(O,{to:o.Settings},i.a.createElement(N,null,"Profile & Settings"))))},F=function(e){var t=e.children;return i.a.createElement("nav",{role:"navigation"},i.a.createElement("ul",null,t))};function J(){var e=Object(m.a)(["\n  list-style-type: none;\n  margin-bottom: 8px;\n"]);return J=function(){return e},e}var G=s.b.li(J()),U=function(e){var t=e.children;return i.a.createElement(G,null,t)},V=Object(s.b)("button").withConfig({displayName:"Button___StyledButton",componentId:"sc-1ne2d-0"})(["background-color:",";border-radius:3px;padding:12px 15px 12px 15px;border:0px;color:#fff;font-size:15px;display:flex;align-items:center;cursor:pointer;:focus{outline-color:#c7dff3;}"],(function(e){return e._css})),$=function(e){var t="primary"===e.type?r.DodgerBlue:r.LimedSpruce;return i.a.createElement(V,{onClick:e.onClick,_css:t},e.children)};function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Q=i.a.createElement("path",{fillRule:"evenodd",d:"M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"}),X=function(e){var t=e.svgRef,n=e.title,r=Y(e,["svgRef","title"]);return i.a.createElement("svg",K({viewBox:"0 0 12 16",width:12,height:16,ref:t},r),n?i.a.createElement("title",null,n):null,Q)},Z=i.a.forwardRef((function(e,t){return i.a.createElement(X,K({svgRef:t},e))}));n.p;function ee(){var e=Object(m.a)(["\n  fill: ",";\n  margin-right: 5px;\n"]);return ee=function(){return e},e}function te(){var e=Object(m.a)(["\n  position: absolute;\n  bottom: 16px;\n  left: 8px;\n"]);return te=function(){return e},e}function ne(){var e=Object(m.a)(["\n  background-color: ",";\n"]);return ne=function(){return e},e}var re=s.b.div(ne(),r.Cinder),oe=s.b.div(te()),ae=Object(s.b)(Z)(ee(),r.White),ie=Object(s.b)("span").withConfig({displayName:"Sidebar___StyledSpan",componentId:"ylwqnq-0"})((function(e){return{color:e._css}})),le=Object(s.b)("div").withConfig({displayName:"Sidebar___StyledDiv",componentId:"ylwqnq-1"})({position:"relative",width:"160%",left:"-9px"}),ce=function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),l=n[0],c=n[1];return i.a.createElement(re,{className:e.className},i.a.createElement(u,{top:2}),i.a.createElement(T,{user:e.user}),i.a.createElement(u,{top:2}),i.a.createElement(F,null,i.a.createElement(U,null,i.a.createElement(O,{to:o.Home,linkColor:r.White},i.a.createElement(N,null,"Afternoon"))),i.a.createElement(U,null,i.a.createElement(O,{to:o.Home,linkColor:r.White},i.a.createElement(N,null,"All Habits"))),i.a.createElement(U,null,i.a.createElement(O,{to:o.Home,linkColor:r.White},i.a.createElement(N,null,"Progress"))),i.a.createElement(U,null,i.a.createElement(O,{to:o.Home,linkColor:r.White},i.a.createElement(N,null,"Manage Habits"))),i.a.createElement(U,null,i.a.createElement(O,{to:o.Home,linkColor:r.White},i.a.createElement(N,null,"Resources")))),i.a.createElement(oe,null,i.a.createElement($,{onClick:function(){return c(!l)}},i.a.createElement(ae,null),i.a.createElement(ie,{_css:r.White},"Add New...")),l&&i.a.createElement(le,null,i.a.createElement(y,{direction:!0},i.a.createElement(F,null,i.a.createElement(U,null,i.a.createElement(O,{to:o.Home},i.a.createElement(N,null,"Add Area"))),i.a.createElement(U,null,i.a.createElement(O,{to:o.Home},i.a.createElement(N,null,"New Habits"))))))))},se=n(24),de=n.n(se),me=s.b.div.withConfig({displayName:"NoContentPlaceholder__Container",componentId:"sc-174d2ot-0"})(["display:flex;flex-direction:column;align-items:center;"]),pe=s.b.img.withConfig({displayName:"NoContentPlaceholder__Image",componentId:"sc-174d2ot-1"})(["width:250px;"]),ue=s.b.p.withConfig({displayName:"NoContentPlaceholder__Title",componentId:"sc-174d2ot-2"})(["font-size:22px;font-weight:600;line-height:29px;color:rgb(18,18,18);"]),fe=s.b.p.withConfig({displayName:"NoContentPlaceholder__Subtitle",componentId:"sc-174d2ot-3"})(["font-size:17px;font-weight:400;line-height:24px;color:",";"],r.CodGray),ge=function(){return i.a.createElement(me,null,i.a.createElement(pe,{src:de.a,alt:"No content placeholder image"}),i.a.createElement(ue,null,"The Start of a Better You!"),i.a.createElement(fe,null,"Habits are like dominos. As one is formed, all others will follow!"))};function he(){var e=Object(m.a)(["\n  text-align: center;\n"]);return he=function(){return e},e}var be=s.b.div(he()),ye=function(){return i.a.createElement(be,null,"Profile And Settings")},ve=n(2),xe=s.b.div.withConfig({displayName:"Content__FullHeightAndWidth",componentId:"sc-1aulmyu-0"})(["width:100%;height:100%;margin:auto;"]),Ee=function(e){return i.a.createElement(xe,{className:e.className},i.a.createElement(ve.c,null,i.a.createElement(ve.a,{path:o.Settings},i.a.createElement(ye,null)),i.a.createElement(ve.a,{path:o.Home},i.a.createElement(ge,null))))};function we(){var e=Object(m.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Open Sans',sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"]);return we=function(){return e},e}var _e=Object(s.a)(we()),ke=n(25),Ce=s.b.div.withConfig({displayName:"App__Container",componentId:"sc-1rrwzfs-0"})(["display:flex;flex-direction:row;"]),je={firstName:"John",lastName:"Doe",email:"john@doe.com"},Oe=Object(s.b)(ce).withConfig({displayName:"App___StyledSidebar",componentId:"sc-1rrwzfs-1"})(["flex:0 0 270px;height:100vh;min-width:0;"]);var Ne=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(v.a,{basename:ke.homepage},i.a.createElement(Ce,null,i.a.createElement(Oe,{user:je}),i.a.createElement(Ee,null))),i.a.createElement(_e,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.c357582e.chunk.js.map