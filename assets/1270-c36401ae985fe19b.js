(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1270],{93650:function(t,e,r){"use strict";r.r(e),r.d(e,{CuContentCardGrid:function(){return E},cardCheck:function(){return B},default:function(){return j}});var n=r(97997),o=r(11720),i=r(86010),a=r(69142),c=r.n(a),l=r(82725),s=r(97701),u={cards:Array(3).fill({title:{markdown:"Add Cards..."},description:"Add Card Content...",ctaButton:{href:"https://clickup.com",children:"Optional CTA",otherClasses:"ctaButton"},colorGradient:"gradient-dark-purple-1"})},d=r(35773),C=r(63538),v=r(66343),h=r(70434),f=r.n(h),p=r(70564),_=r(24928),m=function(t){var e=t.icon,r=t.title,o=t.description,a=t.otherClasses,c=t.alignment,l=void 0===c?"vertical-center":c,s=t.cardIsIconColor,u=void 0!==s&&s,h=t.link,m=(0,i.Z)(f().wrapper,"v3",h&&f().hasLink,a),y={purple:"var(--color-v3-purple)",blue:"31, 124, 255",green:"33, 200, 40",yellow:"255, 215, 0",orange:"255, 98, 33"},g={"--icon-color":y[e.iconColor]||"purple","--max-card-width":"".concat(/horizontal/i.test(l)?"360px":"347px"),"--background-color":!0===u&&e.hasOwnProperty("iconV3")?{purple:"243, 233, 255",blue:"233, 242, 255",green:"237, 250, 235",yellow:"255, 251, 235",orange:"255, 240, 234"}[e.iconColor]:"var(--color-v3-white-0)","--text-color":!0===u&&e.hasOwnProperty("iconV3")?y[e.iconColor]:"var(--color-v3-grey)"},Z=(0,n.BX)(n.HY,{children:[(0,n.BX)("div",{className:(0,i.Z)(f().content,f()[l]),children:[(0,n.tZ)("div",{className:(0,i.Z)(f().iconContainer,e.hasOwnProperty("iconV3")&&f().iconContainerColor),children:e.hasOwnProperty("image")||e.hasOwnProperty("src")?(0,n.tZ)(p.Z,{media:e,lazyload:!0,otherClasses:f().iconThumbnailContainer}):(0,n.tZ)(v.ZP,{otherClasses:f().iconStyles,icon:e.iconV3,iconHeight:29,iconWidth:29})}),(0,n.BX)("div",{className:f().textContainer,children:[(0,n.tZ)(d.Z,{version:"v3",title:r,otherClasses:(0,i.Z)(f().title),HeadingTag:"h3",alignment:"vertical-center"===l?"center":"start"}),(0,n.tZ)(C.Z,{description:o,version:"v3",otherClasses:(0,i.Z)(f().description),paragraphSize:"paragraph"})]})]}),h&&(0,n.BX)(n.HY,{children:[(0,n.tZ)("div",{className:f().linkOverlay}),(0,n.BX)("div",{className:f().learnMoreCta,children:[(0,n.tZ)("span",{className:"paragraph-xs",children:"Learn more"}),(0,n.tZ)(v.ZP,{icon:"icon-v3-arrow-right-circular",width:14,height:14})]})]})]});return h?(0,n.tZ)("div",{className:m,"data-testid":"cu-card-with-icon-v3",style:g,children:(0,n.tZ)(_.Z,{href:h,isReset:!0,children:Z})}):(0,n.tZ)("div",{className:m,"data-testid":"cu-card-with-icon-v3",style:g,children:Z})},y=r(39329),g=r(23279),Z=r.n(g),b=r(14181),w=function(t,e){var r=(0,o.useState)(b.Qg?window.innerWidth:0),n=r[0],i=r[1];(0,o.useEffect)((function(){var t=Z()((function(){i(window.innerWidth)}),250);return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),(0,o.useEffect)((function(){if(b.Qg&&t&&t.current){var r=t.current;if(r.classList.contains("carousel")){var n=r.nextElementSibling,o=null===n||void 0===n?void 0:n.querySelector(".prev-button"),i=null===n||void 0===n?void 0:n.querySelector(".next-button"),a=r.querySelectorAll(".carousel-slide");if(o&&i&&a){var c,l,s=0,u=a.length,d=a[1].getBoundingClientRect().width;l=u%2===0?d/2+e/2:Math.floor(u/2)*d+d/(e/2);var C=d+l;null===r||void 0===r||r.style.setProperty("transform","translateX(-".concat(l,"px)"));var v=Z()((function(){r&&(c=s,s=(s-1+u)%u,r.style.transform="translateX(-".concat(C,"px)"),r.insertBefore(a[s],r.firstChild),setTimeout((function(){r.style.transform="translateX(-".concat(l,"px)"),r.classList.add("carousel-sliding-transition")}),10),setTimeout((function(){r.classList.remove("carousel-sliding-transition")}),190))}),100),h=Z()((function(){r&&(r.classList.add("carousel-sliding-transition"),c=s,s=(s+1)%u,r.style.transform="translateX(-".concat(d+d/2+(e+e/2/2),"px)"),setTimeout((function(){r.appendChild(a[c]),r.classList.remove("carousel-sliding-transition"),r.style.transform="translateX(-".concat(l,"px)")}),200))}),100);return null===o||void 0===o||o.addEventListener("click",v),null===i||void 0===i||i.addEventListener("click",h),function(){null===o||void 0===o||o.removeEventListener("click",v),null===i||void 0===i||i.removeEventListener("click",h)}}}}}),[t,n])},k=r(22666),x=r.n(k);function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function O(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function L(t){return function(t){if(Array.isArray(t))return S(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return S(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=function(t){var e,r=t.children,a=t.gap,c=void 0===a?20:a,l=t.carouselFade,s=void 0===l||l,u=t.otherClasses,d=O(t,["children","gap","carouselFade","otherClasses"]),C=(0,o.useRef)(null);return(0,o.useEffect)((function(){var t,e=null===(t=C.current)||void 0===t?void 0:t.childNodes;e&&e.forEach((function(t){var e,r;e=t,(null!=(r=HTMLElement)&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](e):e instanceof r)&&t.classList.add("carousel-slide")}))}),[C]),w(C,c),(0,n.tZ)("div",{className:(0,i.Z)(s&&"overflow-hidden"),children:(0,n.BX)("div",{className:(0,i.Z)(x().carouselWrapper,u),children:[(0,n.tZ)("div",{ref:C,id:null===d||void 0===d||null===(e=d.__metadata)||void 0===e?void 0:e.id,"data-testid":"cu-carousel",className:(0,i.Z)(x().carouselSlides,"v3","carousel"),style:{"--gap":"".concat(c,"px")},children:function(t){var e=L(t).concat(L(t)),r=Math.floor(e.length/2),n=e.slice(0,r);return e.slice(r).concat(n)}(o.default.Children.toArray(r))}),(0,n.BX)("div",{className:(0,i.Z)(x().carouselControls,s&&x().carouselControlsFade),children:[(0,n.tZ)(y.ZP,{className:(0,i.Z)(x().carouselButton,x()["carouselButton--prev"],"prev-button"),sectionModelName:"CuContentCardGrid",buttonClicked:"Click to Scroll - Previous",location:"body",children:(0,n.tZ)(v.ZP,{icon:"icon-v3-arrow-left"})}),(0,n.tZ)(y.ZP,{className:(0,i.Z)(x().carouselButton,x()["carouselButton--next"],"next-button"),sectionModelName:"CuContentCardGrid",buttonClicked:"Click to Scroll - Next",location:"body",children:(0,n.tZ)(v.ZP,{icon:"icon-v3-arrow-right"})})]})]})})},W=r(72265);function G(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function I(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){G(t,e,r[e])}))}return t}function V(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var B=function(t,e,r){return"title"in t&&"icon"in t?(0,n.tZ)(m,I({},t,{otherClasses:(0,i.Z)(c().card,c().clickToScrollCard)}),e):"iframe"in t?(0,n.tZ)(W.ZP,I({},t,{otherClasses:(0,i.Z)(c().card,c().clickToScrollCard)}),e):(0,n.tZ)(l.Z,I({},t,{otherClasses:(0,i.Z)(c().card,c().clickToScrollCard),version:r}),e)},P=function(t){var e=t.layout,r=t.columnNumber,a=t.cards,l=t.dividerLine,u=t.carouselFade,d=t.version;return"click-to-scroll"===e?(0,n.tZ)(N,{carouselFade:u,children:a.map((function(t,e){return(0,n.tZ)(o.default.Fragment,{children:B(t,e,d)},"cu-content-card-grid--card-".concat(e))}))}):(0,n.tZ)(s.Z,{columnNumber:r,otherClasses:(0,i.Z)(c().contentGrid,r&&c()["contentGrid--".concat(r)],l&&c()["dividerLine--".concat(l)]),children:(0,n.tZ)(n.HY,{children:a.map((function(t,e){return(0,n.tZ)(o.default.Fragment,{children:B(t,e,d)},"cu-content-card-grid--card-".concat(e))}))})})},E=function(t){var e,r=t.cards,o=void 0===r?u.cards:r,a=t.columnNumber,l=void 0===a?3:a,s=t.otherClasses,v=t.sectionEyebrow,h=t.sectionTitle,f=t.sectionSubtext,p=t.layout,_=void 0===p?"default":p,m=t.dividerLine,y=t.carouselFade,g=void 0===y||y,Z=t.version,b=void 0===Z?"v3":Z,w=V(t,["cards","columnNumber","otherClasses","sectionEyebrow","sectionTitle","sectionSubtext","layout","dividerLine","carouselFade","version"]),k=(0,i.Z)(c().wrapper,"".concat(b),o===u.cards&&"fallback","top"==m&&c()["dividerLine--".concat(m)],!g&&"click-to-scroll"===_&&c().fullViewPortWidth,s);return(0,n.BX)("div",{id:null===w||void 0===w||null===(e=w.__metadata)||void 0===e?void 0:e.id,className:k,"data-testid":"cu-content-card-grid",children:[h&&(0,n.BX)("div",{className:"v3-title-wrapper",children:[(0,n.tZ)(d.Z,{label:v,title:h,alignment:"center",version:b}),f&&(0,n.tZ)(C.Z,{version:b,paragraphSize:"paragraph-md",description:f,otherClasses:"v3-title-subtext"})]}),(0,n.tZ)(P,{layout:_,columnNumber:l,cards:o,carouselFade:g,version:b,dividerLine:"intersect"===m?m:void 0})]})},j=E},45752:function(t,e,r){"use strict";var n=r(97997),o=(r(11720),r(86010)),i=r(76697),a=r.n(i);e.Z=function(t){var e=t.children,r=t.columnNumber,i=t.hAlign,c=t.vAlign,l=t.gridBoxHeight,s=t.centerLastColumn,u=void 0!==s&&s,d=t.otherClasses,C=(0,o.Z)(a().wrapper,u&&a().centerLastColumn,d),v={"--cu-grid-columns":r,"--cu-gridbox-height":l||"auto","--cu-grid-h-align":i||"center","--cu-grid-v-align":c||"stretch"};return(0,n.tZ)("div",{className:C,"data-testid":"cu-grid",style:v,children:e})}},97701:function(t,e,r){"use strict";r.d(e,{Z:function(){return n.Z}});var n=r(45752)},44888:function(t,e,r){"use strict";r.d(e,{K:function(){return i},Z:function(){return a}});var n=r(97997),o=(r(11720),r(86010)),i=function(t){var e=t.children,r=t.spacing,i=t.otherClasses,a=-1!==["v3Layout","layout","content"].indexOf(r.toString()),c=/[px|em|rem]{1}$/.test(r.toString()),l="number"===typeof r,s=(0,o.Z)("stack",!!a&&"stack--".concat(r),i),u=c||l?{"--stack-spacing":"".concat(r).concat(l?"px":"")}:{};return(0,n.tZ)("div",{className:s,style:u,"data-testid":"cu-layout-stack",children:e})},a=i},65235:function(t,e,r){"use strict";r.d(e,{Z:function(){return n.Z}});var n=r(74301)},70434:function(t){t.exports={wrapper:"CuCardWithIconV3_wrapper__o2p47",content:"CuCardWithIconV3_content__8YnsD",textContainer:"CuCardWithIconV3_textContainer__8yMjL","vertical-start":"CuCardWithIconV3_vertical-start__Nf_p2","vertical-center":"CuCardWithIconV3_vertical-center__JL28_",description:"CuCardWithIconV3_description__EK8kO","horizontal-start":"CuCardWithIconV3_horizontal-start__3iapr","horizontal-center":"CuCardWithIconV3_horizontal-center__sm4ct",iconContainer:"CuCardWithIconV3_iconContainer__UkXyC",iconThumbnailContainer:"CuCardWithIconV3_iconThumbnailContainer__CXF99",iconContainerColor:"CuCardWithIconV3_iconContainerColor__M_xKl",iconStyles:"CuCardWithIconV3_iconStyles__XxyZW",title:"CuCardWithIconV3_title__REm0z",hasLink:"CuCardWithIconV3_hasLink__e_6De",learnMoreCta:"CuCardWithIconV3_learnMoreCta__xUiV5",linkOverlay:"CuCardWithIconV3_linkOverlay__r4Iwf"}},69142:function(t){t.exports={wrapper:"CuContentCardGrid_wrapper__HdXwA",fullViewPortWidth:"CuContentCardGrid_fullViewPortWidth__SSHy1","dividerLine--top":"CuContentCardGrid_dividerLine--top__Dtu0B","dividerLine--intersect":"CuContentCardGrid_dividerLine--intersect__lkUmY",contentGrid:"CuContentCardGrid_contentGrid__55v71",card:"CuContentCardGrid_card__DYys5","contentGrid--2":"CuContentCardGrid_contentGrid--2__okgm1","contentGrid--3":"CuContentCardGrid_contentGrid--3__AfW7J","contentGrid--4":"CuContentCardGrid_contentGrid--4__gpWq2",clickToScrollCard:"CuContentCardGrid_clickToScrollCard___Mbzz"}},76697:function(t){t.exports={wrapper:"CuGrid_wrapper__h3be_",centerLastColumn:"CuGrid_centerLastColumn__Vv_kj"}},22666:function(t){t.exports={carouselWrapper:"CuCarousel_carouselWrapper__ujt_V",carouselSlides:"CuCarousel_carouselSlides__NAZv1",carouselControls:"CuCarousel_carouselControls__7molU",carouselControlsFade:"CuCarousel_carouselControlsFade__9RL6d",carouselButton:"CuCarousel_carouselButton__xRZTT","carouselButton--prev":"CuCarousel_carouselButton--prev__KvzwM","carouselButton--next":"CuCarousel_carouselButton--next__sgDD1"}}}]);