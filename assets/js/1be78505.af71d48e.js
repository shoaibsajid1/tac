"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[514,4],{6138:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var n=a(7294),l=a(3905),r=a(3610),o=a(9910),c=a(6010),i=a(6864),s=a(7213),d=a(974),m=a(3117);var u=function(e){return n.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},b=a(1614),p=a(102),h=a(8746),f=a(1699),v=a(4396),E="menuLinkText_OKON",g="hasHref_TwRn",k=a(5730),_=["items"],C=["item"],N=["item","onItemClick","activePath","level"],Z=["item","onItemClick","activePath","level"],S=(0,n.memo)((function(e){var t=e.items,a=(0,p.Z)(e,_);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(I,(0,m.Z)({key:t,item:e},a))})))}));function I(e){var t=e.item,a=(0,p.Z)(e,C);return"category"===t.type?0===t.items.length?null:n.createElement(T,(0,m.Z)({item:t},a)):n.createElement(M,(0,m.Z)({item:t},a))}function T(e){var t,a=e.item,l=e.onItemClick,r=e.activePath,o=e.level,s=(0,p.Z)(e,N),d=a.items,u=a.label,f=a.collapsible,v=a.className,_=a.href,C=function(e){var t=(0,k.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0}),[e,t])}(a),Z=(0,i._F)(a,r),I=(0,i.uR)({initialState:function(){return!!f&&(!Z&&a.collapsed)}}),T=I.collapsed,M=I.setCollapsed,y=I.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,l=e.setCollapsed,r=(0,i.D9)(t);(0,n.useEffect)((function(){t&&!r&&a&&l(!1)}),[t,r,a,l])}({isActive:Z,collapsed:T,setCollapsed:M}),n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":T},v)},n.createElement("div",{className:"menu__list-item-collapsible"},n.createElement(h.Z,(0,m.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":f&&!_,"menu__link--active":Z},t[E]=!f,t[g]=!!C,t)),onClick:f?function(e){null==l||l(a),_?M(!1):(e.preventDefault(),y())}:function(){null==l||l(a)},href:f?null!=C?C:"#":C},s),u),_&&f&&n.createElement("button",{"aria-label":(0,b.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:u}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),y()}})),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:T},n.createElement(S,{items:d,tabIndex:T?-1:0,onItemClick:l,activePath:r,level:o+1})))}function M(e){var t=e.item,a=e.onItemClick,l=e.activePath,r=e.level,o=(0,p.Z)(e,Z),s=t.href,d=t.label,u=t.className,b=(0,i._F)(t,l);return n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(r),"menu__list-item",u),key:d},n.createElement(h.Z,(0,m.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":b}),"aria-current":b?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:a?function(){return a(t)}:void 0},o),(0,f.Z)(s)?d:n.createElement("span",null,d,n.createElement(v.Z,null))))}var y="sidebar_a3j0",w="sidebarWithHideableNavbar_VlPv",A="sidebarHidden_OqfG",F="sidebarLogo_hmkv",L="menu_cyFh",B="menuWithAnnouncementBar_+O1J",P="collapseSidebarButton_eoK2",x="collapseSidebarButtonIcon_e+kA";function R(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,b.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",P),onClick:t},n.createElement(u,{className:x}))}function D(e){var t,a,l=e.path,r=e.sidebar,o=e.onCollapse,s=e.isHidden,m=function(){var e=(0,i.nT)().isActive,t=(0,n.useState)(e),a=t[0],l=t[1];return(0,i.RF)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}(),u=(0,i.LU)(),b=u.navbar.hideOnScroll,p=u.hideableSidebar;return n.createElement("div",{className:(0,c.Z)(y,(t={},t[w]=b,t[A]=s,t))},b&&n.createElement(d.Z,{tabIndex:-1,className:F}),n.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",L,(a={},a[B]=m,a))},n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(S,{items:r,activePath:l,level:1}))),p&&n.createElement(R,{onClick:o}))}var H=function(e){var t=e.toggleSidebar,a=e.sidebar,l=e.path;return n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(S,{items:a,activePath:l,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function W(e){return n.createElement(i.Cv,{component:H,props:e})}var O=n.memo(D),q=n.memo(W);function z(e){var t=(0,s.Z)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(O,e),l&&n.createElement(q,e))}var Y=a(7654),K=a(2004),U="backToTopButton_i9tI",V="backToTopButtonShow_wCmF";function j(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var G=function(){var e,t=(0,n.useState)(!1),a=t[0],l=t[1],r=(0,n.useRef)(!1),o=j(),s=o.smoothScrollTop,d=o.cancelScrollToTop;return(0,i.RF)((function(e,t){var a=e.scrollY,n=null==t?void 0:t.scrollY;if(n)if(r.current)r.current=!1;else{var o=a<n;if(o||d(),a<300)l(!1);else if(o){var c=document.documentElement.scrollHeight;a+window.innerHeight<c&&l(!0)}else l(!1)}})),(0,i.SL)((function(e){e.location.hash&&(r.current=!0,l(!1))})),n.createElement("button",{"aria-label":(0,b.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,U,(e={},e[V]=a,e)),type:"button",onClick:function(){return s()}})},J=a(6775),Q={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"},X=a(1300);function $(e){var t,a,r,s=e.currentDocRoute,d=e.versionMetadata,m=e.children,p=e.sidebarName,h=(0,i.Vq)(),f=d.pluginId,v=d.version,E=(0,n.useState)(!1),g=E[0],k=E[1],_=(0,n.useState)(!1),C=_[0],N=_[1],Z=(0,n.useCallback)((function(){C&&N(!1),k((function(e){return!e}))}),[C]);return n.createElement(o.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:v,tag:(0,i.os)(f,v)}},n.createElement("div",{className:Q.docPage},n.createElement(G,null),h&&n.createElement("aside",{className:(0,c.Z)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&g&&N(!0)}},n.createElement(z,{key:p,sidebar:h,path:s.path,onCollapse:Z,isHidden:C}),C&&n.createElement("div",{className:Q.collapsedDocSidebar,title:(0,b.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:Z,onClick:Z},n.createElement(u,{className:Q.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.Z)(Q.docMainContainer,(a={},a[Q.docMainContainerEnhanced]=g||!h,a))},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(r={},r[Q.docItemWrapperEnhanced]=g,r))},n.createElement(l.Zo,{components:Y.Z},m)))))}var ee=function(e){var t=e.route.routes,a=e.versionMetadata,l=e.location,o=t.find((function(e){return(0,J.LX)(l.pathname,e)}));if(!o)return n.createElement(K.default,null);var c=o.sidebar,s=c?a.docsSidebars[c]:null;return n.createElement(n.Fragment,null,n.createElement(X.Z,null,n.createElement("html",{className:a.className})),n.createElement(i.qu,{version:a},n.createElement(i.bT,{sidebar:s},n.createElement($,{currentDocRoute:o,versionMetadata:a,sidebarName:c},(0,r.Z)(t,{versionMetadata:a})))))}},2004:function(e,t,a){a.r(t);var n=a(7294),l=a(9910),r=a(1614);t.default=function(){return n.createElement(l.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);