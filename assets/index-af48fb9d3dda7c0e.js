(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{45301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(30441)}])},66955:function(e,n,t){"use strict";t.d(n,{ZP:function(){return b}});var r=t(97997),a=t(11720),o=t(86010),i=t(24928),c=t(70564),s=t(63538),l=t(97660),p=t(97862),u=t.n(p),d=t(51663);function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(s){c=!0,a=s}finally{try{i||null==t.return||t.return()}finally{if(c)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g={src:"/assets/icons/arrow-right-double.svg",height:8,width:10,alt:"arrow",isAriaHidden:!0},b=function(e){var n=e.cookieName,t=void 0===n?"cuPageBanner":n,p=e.cookieExpiry,h=void 0===p?365:p,b=e.icon,f=e.text,k=e.link,y=e.isHidden,C=e.otherClasses,_=e.isDarkMode,v=void 0!==_&&_,P=(0,a.useState)(!!y),B=P[0],Z=P[1];(0,a.useEffect)((function(){"localhost:6006"!==window.location.host?!1!==(0,l.ej)(t)&&Z(!0):console.log("\ud83d\udea8 In Storybook, this component will not check for the existence of the cuPageBanner cookie; otherwise the component may not appear on load")}),[t]);var x=w((0,d.Bu)(),2),A=x[0],E=x[1],I=(0,a.useCallback)((function(){(0,l.d8)(t,"hidden",h),Z(!0),A("click web",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){m(e,n,t[n])}))}return e}({},E,{sectionModelName:"CuPageBanner",sectionTitle:"Close banner",buttonClicked:"Close banner button"}))}),[t,h,Z,A,E]),S=(0,o.Z)(u().wrapper,v&&u().isDarkMode,C);return(0,r.BX)("aside",{className:(0,o.Z)(S,B&&"hidden"),"data-testid":"cu-page-banner",children:[(0,r.BX)("div",{className:u().pageBannerContent,children:[(0,r.BX)("div",{className:u().iconAndTextWrapper,children:[b&&(0,r.tZ)(c.Z,{media:b,otherClasses:u().bannerIcon}),(0,r.tZ)(s.a,{otherClasses:u().bannerText,description:f})]}),(0,r.BX)("div",{className:u().linkWrapper,children:[(0,r.tZ)(i.Z,{href:k.href,underline:!1,otherClasses:u().bannerLinkText,sectionModelName:"CuPageBanner",buttonClicked:k.children,children:(0,r.tZ)("span",{dangerouslySetInnerHTML:{__html:String(k.children)}})}),(0,r.tZ)(c.Z,{lazyload:!1,media:g,otherClasses:u().linkIcon})]})]}),(0,r.BX)("button",{className:(0,o.Z)(u().btnWrapper,"cuCenter"),onClick:I,children:[(0,r.tZ)(c.Z,{lazyload:!1,media:{src:v?"/assets/icons/banner-close-white.svg":"/assets/icons/modal-close.png",height:38,width:38,alt:"close button",isAriaHidden:!0},otherClasses:u().btn}),(0,r.tZ)("span",{className:"visuallyHidden",children:"Close banner"})]})]})}},30441:function(e,n,t){"use strict";t.r(n);var r=t(97997),a=(t(11720),t(86010)),o=t(18629),i=t(22252),c=t(36051),s=t(90528),l=t(81361),p=t(66955),u=t(11163),d=t(18959);n.default=function(e){var n=e.isBannerLive,t=e.hasBannerEnabled,h=(0,u.useRouter)();return(0,l.cC)("home-redirect-feb-2023-boolean")&&h.push("/home-1"),(0,r.tZ)("div",{className:(0,a.Z)(n&&t&&"hasBanner","isHomePage","isStaticHomePage"),id:"gb-wrapper-home",children:(0,r.BX)(c.H,{children:[(0,r.tZ)(p.ZP,{cookieName:"chat-banner",text:"<b>NEW:</b> Chat and work in one place, with AI superpowers.",link:{children:"Discover ClickUp Chat",href:"/features/chat"},isDarkMode:!0,otherClasses:"chat-banner"}),(0,r.tZ)(s.Jx,{seoTitle:d.aU,seoDescription:d.HF,seoCanonical:d.Lv,pageSections:s.Qc}),(0,r.tZ)(i.Z,{}),(0,r.tZ)(o.ZP,{}),(0,r.tZ)("script",{type:"application/ld+json",id:"schema-org",dangerouslySetInnerHTML:{__html:'{\n                "@context": "https://schema.org",\n                "@type": "Organization",\n                "description": "ClickUp is a project management software designed to revolutionize the way people work with features including tasks, whiteboards, spreadsheets, and document collaboration on a unified platform. It was founded by Zeb Evans and Alex Yurkowski in 2017 with the mission of saving people time by making the world more productive.",\n                "logo": "https://clickup.com/assets/brand/clickup-logo-text.png",\n                "url": "https://clickup.com/",\n                "address": {\n                "@type": "PostalAddress",\n                "addressCountry": "US",\n                "addressLocality": "San Diego",\n                "addressRegion": "CA",\n                "postalCode": "92101",\n                "streetAddress": "350 Tenth Ave 5th Floor"\n                },\n                "mainEntityOfPage": "https://clickup.com/",\n                "name": "ClickUp",\n                "brand": "ClickUp",\n                "location": "San Diego, CA",\n                "sameAs": [\n                  "https://en.wikipedia.org/wiki/ClickUp",\n                  "https://www.facebook.com/clickupprojectmanagement/",\n                  "https://www.instagram.com/clickup/",\n                  "https://www.linkedin.com/company/12949663",\n                  "https://www.youtube.com/clickupproductivity",\n                  "https://github.com/clickup",\n                  "https://twitter.com/clickup",\n                  "https://www.pinterest.com/clickup_app/",\n                  "https://www.crunchbase.com/organization/clickup",\n                  "https://www.g2.com/products/clickup/reviews",\n                  "https://www.trustpilot.com/review/clickup.com",\n                  "https://www.glassdoor.com/Overview/Working-at-ClickUp-EI_IE2037206.11,18.htm",\n                  "https://www.getapp.com/project-management-planning-software/a/clickup/"\n                ],\n                "contactPoint": [\n                  { "@type": "ContactPoint",\n                  "contactType": "help center",\n                  "url": "https://help.clickup.com/hc/en-us",\n                  "productSupported": "ClickUp",\n                  "availableLanguage": ["English","Deutsch","Espa\xf1ol","Fran\xe7ais (France)","Italiano","Portugu\xeas do Brasil"]\n                  }\n                ],\n                "founder": "Zeb Evans",\n                "foundingDate": "2017-03",\n                "slogan": "Save people time by making the world more productive",\n                "award": "https://www.fastcompany.com/90849201/most-innovative-companies-workplace-2023#:~:text=4.%20CLICKUP,helping%20workers%20focus",\n                "numberOfEmployees": 900,\n                "parentOrganization": "Mango Technologies, Inc",\n                "owns": "https://slapdash.com/"\n              }'}})]})})}},97862:function(e){e.exports={wrapper:"CuPageBanner_wrapper__vrAUD",pageBannerContent:"CuPageBanner_pageBannerContent__Y6RGP",iconAndTextWrapper:"CuPageBanner_iconAndTextWrapper__Rut3X",bannerIcon:"CuPageBanner_bannerIcon__p4qfP",bannerText:"CuPageBanner_bannerText__xf1gM",linkWrapper:"CuPageBanner_linkWrapper__yX4I1",bannerLinkText:"CuPageBanner_bannerLinkText__3G_Gy",linkIcon:"CuPageBanner_linkIcon__RQFas",btnWrapper:"CuPageBanner_btnWrapper__XVONE",btn:"CuPageBanner_btn__J9SYN"}}},function(e){e.O(0,[8195,5140,8085,8629,8012,2810,3341,2128,4301,1270,1670,5829,3960,9854,528,2888,179],(function(){return n=45301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);