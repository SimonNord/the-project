(this["webpackJsonpproject-template"]=this["webpackJsonpproject-template"]||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/avatar-image.b15acc02.png"},24:function(e,t,n){e.exports=n.p+"static/media/no_content_placeholder_image.86a96933.png"},25:function(e){e.exports=JSON.parse('{"name":"project-template","homepage":"","version":"0.1.0","private":true,"author":"Mo Sattler","contributors":["Mo Sattler","Simon Nordstr\xf6m","Liam","Ruaridh","Kate Hansen","mchiesa"],"dependencies":{"@testing-library/react":"10.2.1","@testing-library/user-event":"11.4.2","@types/jest":"26.0.0","@types/node":"14.0.13","@types/react":"16.9.36","@types/react-dom":"16.9.8","@types/react-router-dom":"5.1.5","@types/styled-components":"5.1.0","react":"16.13.1","react-dom":"16.13.1","react-router":"5.2.0","react-router-dom":"5.2.0","react-scripts":"3.4.1","styled-components":"5.1.1","typescript":"3.9.5"},"scripts":{"check-node-version":"npx check-node-version --node $(cat .nvmrc)","preinstall":"npm run check-node-version","prestart":"npm run check-node-version","start":"react-scripts start","prebuild":"npm run check-node-version","build":"react-scripts build","pretest":"npm run check-node-version","test":"react-scripts test","lint":"eslint --ext .js --ext .tsx --max-warnings 0 src/","storybook":"start-storybook -p 9009 -s public","build-storybook":"build-storybook -s public","typecheck":"tsc --noEmit -p tsconfig.json","test:coverage":"npm t -- --coverage"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"@storybook/addon-actions":"5.3.19","@storybook/addon-backgrounds":"5.3.19","@storybook/addon-links":"5.3.19","@storybook/addons":"5.3.19","@storybook/preset-create-react-app":"3.0.1","@storybook/react":"5.3.19","@testing-library/jest-dom":"5.10.1","@testing-library/user-event":"11.4.2","husky":"4.2.5","lint-staged":"10.2.10","prettier":"2.0.5"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"*.{ts,tsx,js,json,css,md}":"prettier --write"},"jest":{"collectCoverageFrom":["src/**/*.{js,jsx,ts,tsx}","!src/**/*.stories.{js,jsx,ts,tsx}"]}}')},26:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var r,a,o=n(0),l=n.n(o),i=n(19),c=n.n(i),s=n(1),m=n(13),d=n(7);!function(e){e.Black="rgb(0,0,0)",e.Cinder="rgb(36, 47, 60)",e.LimedSpruce="rgb(57, 67, 78)",e.White="rgb(255,255,255)",e.CodGray="rgb(18, 18, 18)",e.DodgerBlue="rgb(67, 124, 255)",e.GreySeeThru="hsla(0,0%,100%,.3)"}(r||(r={})),function(e){e.Home="/",e.Settings="/settings",e.SettingsGeneral="/settings/general",e.SettingsAppSettings="/settings/app-settings",e.SettingsPassword="/settings/password"}(a||(a={}));var p=Object(s.b)("div").withConfig({displayName:"Spacer___StyledDiv",componentId:"qyot97-0"})((function(e){return{padding:e._css}})),u=function(e){var t=e.children,n=e.top,r=void 0===n?0:n,a=e.right,o=void 0===a?0:a,i=e.bottom,c=void 0===i?0:i,s=e.left,m=8*r,d=8*o,u=8*c,f=8*(void 0===s?0:s);return l.a.createElement(p,{_css:"".concat(m,"px ").concat(d,"px ").concat(u,"px ").concat(f,"px")},t)},f=n(23),g=n.n(f),h=n(9),b=s.b.span.withConfig({displayName:"FormattedText",componentId:"sc-1ai0skl-0"})(["font-size:",";font-weight:",";color:",";"],(function(e){return E[e.size]}),(function(e){return y[e.weight]}),(function(e){return e.color}));b.defaultProps={color:r.Black,weight:"medium",size:"0"};var y={regular:400,medium:600,bold:700},E={"-2":"12px","-1":"14px",0:"16px",1:"18px",2:"20px",3:"24px",4:"30px",5:"36px",6:"48px",7:"60px",8:"72px"},x=b,v=Object(s.b)(h.b).withConfig({displayName:"AnchorLink___StyledLink",componentId:"sc-1cirq1q-0"})(["text-decoration:none;"]),w=Object(s.b)("div").withConfig({displayName:"AnchorLink___StyledDiv",componentId:"sc-1cirq1q-1"})(["display:flex;align-items:center;transition:color 0.2s ease-in-out,background-color 0.2s ease-in-out;&:hover{background-color:",";","{color:",";}}"],(function(e){return e._css}),x,(function(e){return e._css2})),_=function(e){var t=e.to,n=e.linkColor,a=e.children;return l.a.createElement(v,{to:t},l.a.createElement(w,{role:"menuitem",_css:r.DodgerBlue,_css2:r.White},l.a.createElement(u,{top:1,bottom:1,left:2},l.a.createElement(x,{size:"0",weight:"regular",color:n},a))))};_.defaultProps={linkColor:r.Black};var k=_,C=function(e){var t=e.children;return l.a.createElement("span",null,t)},S=s.b.div.attrs({role:"menu"}).withConfig({displayName:"ExpandedList__StyledExpandedList",componentId:"y4be7e-0"})(["position:absolute;left:0;right:0;margin:3px 10px;padding:4px 0;border-radius:3px;background-color:",";text-align:left;z-index:999;"],r.White),j=Object(s.b)(S).withConfig({displayName:"ExpandedList__StyledExpandedListUp",componentId:"y4be7e-1"})(["bottom:43px;"]),O=(s.b.span.attrs({role:"menuitem"}).withConfig({displayName:"ExpandedList__ExpandedListItem",componentId:"y4be7e-2"})(["display:block;font-size:15px;font-weight:500;"]),function(e){var t=e.children;return e.direction?l.a.createElement(j,null,t):l.a.createElement(S,null,t)});function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var P=l.a.createElement("path",{fillRule:"evenodd",d:"M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z"}),z=function(e){var t=e.svgRef,n=e.title,r=I(e,["svgRef","title"]);return l.a.createElement("svg",N({viewBox:"0 0 10 16",width:10,height:16,ref:t},r),n?l.a.createElement("title",null,n):null,P)},A=l.a.forwardRef((function(e,t){return l.a.createElement(z,N({svgRef:t},e))})),H=(n.p,s.b.div.withConfig({displayName:"styles__Background",componentId:"m1ywl5-0"})(["display:flex;background-color:",";padding:15px;align-items:center;justify-content:space-between;border-radius:3px;margin:0px 10px;"],r.LimedSpruce)),B=s.b.div.withConfig({displayName:"styles__LeftContent",componentId:"m1ywl5-1"})(["display:flex;overflow:hidden;"]),L=s.b.p.withConfig({displayName:"styles__Username",componentId:"m1ywl5-2"})(["color:",";margin:0px;font-size:15px;line-height:18px;font-weight:600;"],r.White),W=s.b.div.withConfig({displayName:"styles__Email",componentId:"m1ywl5-3"})(["font-size:13px;line-height:18px;font-weight:500;color:hsla(0,0%,100%,0.5);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;"]),R=s.b.div.withConfig({displayName:"styles__TextContainer",componentId:"m1ywl5-4"})(["display:flex;flex-direction:column;justify-content:space-between;margin-left:15px;overflow:hidden;"]),q=s.b.img.withConfig({displayName:"styles__Image",componentId:"m1ywl5-5"})(["width:42px;height:42px;border-radius:3px;"]),D=Object(s.b)(A).withConfig({displayName:"styles__ArrowDown",componentId:"m1ywl5-6"})(["margin:0 10px 0 15px;fill:",";"],r.White),M=Object(s.b)("div").withConfig({displayName:"UserCard___StyledDiv",componentId:"sc-147b49p-0"})({position:"relative"}),G=function(e){var t=Object(o.useState)(!1),n=Object(m.a)(t,2),r=n[0],i=n[1];return l.a.createElement(M,null,l.a.createElement(H,{onClick:function(){return i(!r)}},l.a.createElement(B,null,l.a.createElement(q,{src:g.a,alt:""}),l.a.createElement(R,null,l.a.createElement(L,null,e.user.firstName),l.a.createElement(W,{title:e.user.email},e.user.email))),l.a.createElement(D,null)),r&&l.a.createElement(O,null,l.a.createElement(k,{to:a.Settings},l.a.createElement(C,null,"Profile & Settings"))))},T=function(e){var t=e.children,n=e.className;return l.a.createElement("nav",{role:"navigation",className:n},l.a.createElement("ul",null,t))};function F(){var e=Object(d.a)(["\n  list-style-type: none;\n  margin-bottom: 8px;\n"]);return F=function(){return e},e}var J=s.b.li(F()),U=function(e){var t=e.children;return l.a.createElement(J,null,t)},V=Object(s.b)("button").withConfig({displayName:"Button___StyledButton",componentId:"sc-1ne2d-0"})(["background-color:",";border-radius:3px;padding:12px 15px 12px 15px;border:0px;color:#fff;font-size:15px;display:flex;align-items:center;cursor:pointer;:focus{outline-color:#c7dff3;}"],(function(e){return e._css})),$=function(e){var t="primary"===e.type?r.DodgerBlue:r.LimedSpruce;return l.a.createElement(V,{onClick:e.onClick,_css:t},e.children)};function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Q=l.a.createElement("path",{fillRule:"evenodd",d:"M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"}),X=function(e){var t=e.svgRef,n=e.title,r=Y(e,["svgRef","title"]);return l.a.createElement("svg",K({viewBox:"0 0 12 16",width:12,height:16,ref:t},r),n?l.a.createElement("title",null,n):null,Q)},Z=l.a.forwardRef((function(e,t){return l.a.createElement(X,K({svgRef:t},e))}));n.p;function ee(){var e=Object(d.a)(["\n  fill: ",";\n  margin-right: 5px;\n"]);return ee=function(){return e},e}function te(){var e=Object(d.a)(["\n  position: absolute;\n  bottom: 16px;\n  left: 8px;\n"]);return te=function(){return e},e}function ne(){var e=Object(d.a)(["\n  background-color: ",";\n"]);return ne=function(){return e},e}var re=s.b.div(ne(),r.Cinder),ae=s.b.div(te()),oe=Object(s.b)(Z)(ee(),r.White),le=Object(s.b)("span").withConfig({displayName:"Sidebar___StyledSpan",componentId:"ylwqnq-0"})((function(e){return{color:e._css}})),ie=Object(s.b)("div").withConfig({displayName:"Sidebar___StyledDiv",componentId:"ylwqnq-1"})({position:"relative",width:"160%",left:"-9px"}),ce=function(e){var t=Object(o.useState)(!1),n=Object(m.a)(t,2),i=n[0],c=n[1];return l.a.createElement(re,{className:e.className},l.a.createElement(u,{top:2}),l.a.createElement(G,{user:e.user}),l.a.createElement(u,{top:2}),l.a.createElement(T,null,l.a.createElement(U,null,l.a.createElement(k,{to:a.Home,linkColor:r.White},l.a.createElement(C,null,"Afternoon"))),l.a.createElement(U,null,l.a.createElement(k,{to:a.Home,linkColor:r.White},l.a.createElement(C,null,"All Habits"))),l.a.createElement(U,null,l.a.createElement(k,{to:a.Home,linkColor:r.White},l.a.createElement(C,null,"Progress"))),l.a.createElement(U,null,l.a.createElement(k,{to:a.Home,linkColor:r.White},l.a.createElement(C,null,"Manage Habits"))),l.a.createElement(U,null,l.a.createElement(k,{to:a.Home,linkColor:r.White},l.a.createElement(C,null,"Resources")))),l.a.createElement(ae,null,l.a.createElement($,{onClick:function(){return c(!i)}},l.a.createElement(oe,null),l.a.createElement(le,{_css:r.White},"Add New...")),i&&l.a.createElement(ie,null,l.a.createElement(O,{direction:!0},l.a.createElement(T,null,l.a.createElement(U,null,l.a.createElement(k,{to:a.Home},l.a.createElement(C,null,"Add Area"))),l.a.createElement(U,null,l.a.createElement(k,{to:a.Home},l.a.createElement(C,null,"New Habits"))))))))},se=n(2),me=n(24),de=n.n(me),pe=s.b.div.withConfig({displayName:"NoContentPlaceholder__Container",componentId:"sc-174d2ot-0"})(["display:flex;flex-direction:column;align-items:center;"]),ue=s.b.img.withConfig({displayName:"NoContentPlaceholder__Image",componentId:"sc-174d2ot-1"})(["width:250px;"]),fe=s.b.p.withConfig({displayName:"NoContentPlaceholder__Title",componentId:"sc-174d2ot-2"})(["font-size:22px;font-weight:600;line-height:29px;color:rgb(18,18,18);"]),ge=s.b.p.withConfig({displayName:"NoContentPlaceholder__Subtitle",componentId:"sc-174d2ot-3"})(["font-size:17px;font-weight:400;line-height:24px;color:",";"],r.CodGray),he=function(){return l.a.createElement(pe,null,l.a.createElement(ue,{src:de.a,alt:"No content placeholder image"}),l.a.createElement(fe,null,"The Start of a Better You!"),l.a.createElement(ge,null,"Habits are like dominos. As one is formed, all others will follow!"))},be=Object(s.b)(T).withConfig({displayName:"SettingsMenu__StyledSettingsMenu",componentId:"sc-5a9mfc-0"})(["width:300px;flex-shrink:0;border:1px solid #e5eafa;border-right:none;border-radius:5px 0 0 5px;"]),ye=Object(s.b)(J).withConfig({displayName:"SettingsMenu__MenuListItemP0",componentId:"sc-5a9mfc-1"})(["margin-bottom:0;"]),Ee=function(){return l.a.createElement(be,null,l.a.createElement(ye,null,l.a.createElement(k,{to:a.SettingsGeneral,linkColor:r.Black},l.a.createElement(C,null,"General"))),l.a.createElement(ye,null,l.a.createElement(k,{to:a.SettingsAppSettings,linkColor:r.Black},l.a.createElement(C,null,"App Settings"))),l.a.createElement(ye,null,l.a.createElement(k,{to:a.SettingsPassword,linkColor:r.Black},l.a.createElement(C,null,"Password"))))},xe=s.b.div.withConfig({displayName:"General__Gen",componentId:"sc-1qya71j-0"})(["text-align:center;width:100%;border:1px solid #e5eafa;"]),ve=function(){return l.a.createElement(xe,null,l.a.createElement(u,{top:3,right:3,bottom:3,left:3},"General Settings"))},we=s.b.div.withConfig({displayName:"AppSettings__AppS",componentId:"sc-1qaxt8z-0"})(["text-align:center;width:100%;border:1px solid #e5eafa;"]),_e=function(){return l.a.createElement(we,null,l.a.createElement(u,{top:3,right:3,bottom:3,left:3},"Application Settings"))},ke=s.b.div.withConfig({displayName:"Password__Pass",componentId:"e3s3xg-0"})(["text-align:center;width:100%;border:1px solid #e5eafa;"]),Ce=function(){return l.a.createElement(ke,null,l.a.createElement(u,{top:3,right:3,bottom:3,left:3},"Password Settings"))};function Se(){var e=Object(d.a)(["\n  font-size: 20px;\n  border: 1px solid #e5eafa;\n"]);return Se=function(){return e},e}function je(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return je=function(){return e},e}var Oe=s.b.div(je()),Ne=s.b.h1(Se()),Ie=function(){return l.a.createElement("div",null,l.a.createElement(Ne,null,l.a.createElement(u,{top:1,right:1,bottom:1,left:1},"Profile And Settings")),l.a.createElement(u,{top:2,right:2,bottom:2,left:2},l.a.createElement(Oe,null,l.a.createElement(Ee,null),l.a.createElement(se.c,null,l.a.createElement(se.a,{path:"/settings/general"},l.a.createElement(ve,null)),l.a.createElement(se.a,{path:"/settings/app-settings"},l.a.createElement(_e,null)),l.a.createElement(se.a,{path:"/settings/password"},l.a.createElement(Ce,null))))))},Pe=s.b.div.withConfig({displayName:"Content__FullHeightAndWidth",componentId:"sc-1aulmyu-0"})(["width:100%;height:100%;"]),ze=function(e){return l.a.createElement(Pe,{className:e.className},l.a.createElement(se.c,null,l.a.createElement(se.a,{path:a.Settings},l.a.createElement(Ie,null)),l.a.createElement(se.a,{path:a.Home},l.a.createElement(he,null))))};function Ae(){var e=Object(d.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Open Sans',sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"]);return Ae=function(){return e},e}var He=Object(s.a)(Ae()),Be=n(25),Le=s.b.div.withConfig({displayName:"App__Container",componentId:"sc-1rrwzfs-0"})(["display:flex;flex-direction:row;"]),We={firstName:"John",lastName:"Doe",email:"john@doe.com"},Re=Object(s.b)(ce).withConfig({displayName:"App___StyledSidebar",componentId:"sc-1rrwzfs-1"})(["flex:0 0 270px;height:100vh;min-width:0;"]);var qe=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{basename:Be.homepage},l.a.createElement(Le,null,l.a.createElement(Re,{user:We}),l.a.createElement(ze,null))),l.a.createElement(He,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.1d45bc4c.chunk.js.map