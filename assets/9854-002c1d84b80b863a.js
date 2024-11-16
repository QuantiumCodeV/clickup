(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9854],
  {
    8997: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return _;
        },
      });
      var r = a(97997),
        o = a(35773),
        n = a(63538),
        i = (a(11720), a(86010)),
        l = a(44751),
        s = a.n(l),
        c = a(57757),
        m = a(39329),
        d = a(94202);
      function u(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(a);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(a).filter(function (e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              u(e, t, a[t]);
            });
        }
        return e;
      }
      function p(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      var _ = function (e) {
        var t,
          a = e.sectionTitle,
          l = e.sectionEyebrow,
          u = e.sectionSubtext,
          _ = e.title,
          h =
            void 0 === _
              ? '<span style="color: rgba(250, 18, 227, 1)">One AI</span> for\nall your work'
              : _,
          b = e.description,
          g =
            void 0 === b
              ? "**Instantly power up company-wide AI** that connects every aspect of your work, across all your apps."
              : b,
          T = e.primaryCta,
          v = void 0 === T ? "Try for free" : T,
          f = e.secondaryCta,
          L = void 0 === f ? "Learn more" : f,
          Z = (e.lang, e.otherClasses),
          y = p(e, [
            "sectionTitle",
            "sectionEyebrow",
            "sectionSubtext",
            "title",
            "description",
            "primaryCta",
            "secondaryCta",
            "lang",
            "otherClasses",
          ]),
          H = (0, i.Z)(s().wrapper, "v3", Z),
          k = C({}, y, {
            buttonClicked: "try for free",
            sectionModelName: "CuAiModule",
          }),
          w = C({}, y, {
            buttonClicked: "learn more",
            sectionModelName: "CuAiModule",
          });
        return (0, r.BX)("div", {
          id:
            null === y ||
            void 0 === y ||
            null === (t = y.__metadata) ||
            void 0 === t
              ? void 0
              : t.id,
          className: H,
          "data-testid": "cu-ai-module",
          "data-segment-view": !0,
          "data-segment-props": JSON.stringify({
            internalName: "CuAiModule",
            sectionTitle: h,
          }),
          children: [
            a &&
              (0, r.BX)("div", {
                className: (0, i.Z)("v3-title-wrapper", s().titleWrapper),
                children: [
                  (0, r.tZ)(o.Z, {
                    label: l,
                    title: a,
                    alignment: "center",
                    version: "v3",
                  }),
                  u &&
                    (0, r.tZ)(n.Z, {
                      version: "v3",
                      paragraphSize: "paragraph-md",
                      description: u,
                      otherClasses: (0, i.Z)(
                        "v3-title-subtext",
                        s().titleSubtext
                      ),
                    }),
                ],
              }),
            (0, r.tZ)("div", {
              className: s().contentWrapper,
              children: (0, r.BX)("div", {
                className: s().contentWrapperInner,
                children: [
                  (0, r.tZ)(c.Z, {
                    logo: "clickup-brain-light-v2",
                    override: { width: 159, alt: "ClickUp AI Logo" },
                    otherClasses: s().brainLogo,
                  }),
                  (0, r.tZ)(o.Z, {
                    title: h,
                    alignment: "start",
                    version: "v3",
                    HeadingTag: "h3",
                    otherClasses: s().contentTitle,
                  }),
                  (0, r.tZ)(n.Z, {
                    description: g,
                    paragraphSize: "paragraph",
                    otherClasses: s().contentDescription,
                  }),
                  (0, r.BX)("div", {
                    className: s().ctaContainer,
                    children: [
                      (0, r.tZ)(
                        d.Z,
                        C(
                          {
                            action: "open signup form",
                            version: "v3",
                            buttonStyle: "ai-pink",
                            iconEndV3: "icon-v3-arrow-right",
                            otherClasses: s().ctaButton,
                            redirectParams: { ai: "true", product: "ai" },
                          },
                          k,
                          { children: v }
                        )
                      ),
                      (0, r.tZ)(
                        m.ZP,
                        C(
                          {
                            href: "/ai",
                            version: "v3",
                            buttonStyle: "standard",
                            otherClasses: s().ctaButton,
                          },
                          w,
                          { children: L }
                        )
                      ),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    95807: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return v;
        },
      });
      var r = a(97997),
        o = a(11720),
        n = a(86010),
        i = a(28675),
        l = a.n(i),
        s = a(70564),
        c = a(51663),
        m = a(66284),
        d = a(62885),
        u = a(91486),
        C = a(35773),
        p = a(94202),
        _ = a(24928);
      function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      function b(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(a);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(a).filter(function (e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              b(e, t, a[t]);
            });
        }
        return e;
      }
      function T(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var a =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != a) {
              var r,
                o,
                n = [],
                i = !0,
                l = !1;
              try {
                for (
                  a = a.call(e);
                  !(i = (r = a.next()).done) &&
                  (n.push(r.value), !t || n.length !== t);
                  i = !0
                );
              } catch (s) {
                (l = !0), (o = s);
              } finally {
                try {
                  i || null == a.return || a.return();
                } finally {
                  if (l) throw o;
                }
              }
              return n;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return h(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === a && e.constructor && (a = e.constructor.name);
            if ("Map" === a || "Set" === a) return Array.from(a);
            if (
              "Arguments" === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            )
              return h(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var v = function (e) {
        var t = e.title,
          a = e.subtext,
          i = e.data,
          h = e.otherClasses,
          b = (0, o.useState)(0),
          v = b[0],
          f = b[1],
          L = T((0, c.Bu)(), 2),
          Z = L[0],
          y = L[1],
          H = (0, n.Z)(l().wrapper, h);
        return (0, r.BX)("div", {
          className: H,
          "data-testid": "cu-home-collapse",
          "data-segment-view": !0,
          "data-segment-props": JSON.stringify((0, u.Vz)(g({}, d.Rt))),
          children: [
            (0, r.tZ)(C.Z, {
              version: "v3",
              HeadingTag: "h2",
              alignment: "center",
              title: t,
              otherClasses: (0, n.Z)(l().title, "h2"),
            }),
            (0, r.tZ)(m.ZP, {
              otherClasses: l().subText,
              markdown: a,
              paragraphSize: "paragraph-lg",
            }),
            (0, r.BX)("div", {
              className: (0, n.Z)(l().collapseParent, "hidden-900"),
              children: [
                (0, r.tZ)("div", {
                  className: l().collapseNavigation,
                  children: i.map(function (e, t) {
                    return (0, r.BX)(
                      "div",
                      {
                        onClick: function () {
                          var a;
                          f(t),
                            (a = e.title),
                            Z(
                              "click web",
                              g({}, y, {
                                sectionModelName: "CuHomeCollapse",
                                sectionTitle: "Save time and get more done",
                                buttonClicked: a,
                              })
                            );
                        },
                        className: (0, n.Z)(
                          l().collapseItem,
                          t === v && l().collapseItemActive
                        ),
                        children: [
                          (0, r.tZ)("h3", {
                            className: (0, n.Z)(l().collapseTitle, "h3"),
                            children: e.title,
                          }),
                          (0, r.BX)("div", {
                            className: (0, n.Z)(
                              l().collapseAccordion,
                              v !== t && l().collapseAccordionClosed
                            ),
                            style: { maxHeight: v === t ? "100vh" : "0" },
                            children: [
                              (0, r.tZ)(m.ZP, {
                                otherClasses: l().collapseText,
                                markdown: e.text,
                                paragraphSize: "paragraph-md",
                              }),
                              (0, r.tZ)("ul", {
                                className: l().collapseList,
                                children: e.label.map(function (t, a) {
                                  return (0,
                                  r.tZ)("li", { children: (0, r.tZ)(_.Z, g({ href: t.link, targetBlank: !0, underline: !1, otherClasses: l().collapseLink, buttonClicked: "".concat(e.title, " - ").concat(t.title) }, d.Rt, { children: t.title })) }, "label-".concat(t.title, "-").concat(a));
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      "tab-nav-".concat(e.title, "-").concat(t)
                    );
                  }),
                }),
                i.map(function (e, t) {
                  return (0,
                  r.BX)("div", { className: (0, n.Z)(l().collapseContent, v !== t && l().collapseContentHidden), children: [(0, r.tZ)("div", { className: l().collapseContentGradient }), (0, r.tZ)("div", { className: (0, n.Z)(l().collapseContentElement, l().collapseContentElementComment) }), (0, r.tZ)("div", { className: (0, n.Z)(l().collapseContentElement, l().collapseContentElementTask) }), (0, r.tZ)("div", { className: l().collapseContentBadgeElement }), (0, r.tZ)("div", { className: (0, n.Z)(l().collapseContentImageBox, "collaborate" === e.class && l().collaborate, "enhance" === e.class && l().enhance, "streamline" === e.class && l().streamline) }), (0, r.tZ)(s._, { media: e.media, otherClasses: (0, n.Z)(l().image, t === v ? l().imageVisible : l().imageHidden), lazyload: !1 })] }, "tab-".concat(e.title, "-").concat(t));
                }),
              ],
            }),
            (0, r.tZ)("div", {
              className: l().mobileCardParent,
              children: i.map(function (e, t) {
                return (0, r.tZ)(
                  "div",
                  {
                    className: l().mobileCardWrapper,
                    children: (0, r.tZ)(p.Z, {
                      action: "open signup form",
                      otherClasses: l().actionButton,
                      buttonClicked: "tile ".concat(t + 1, " get started"),
                      children: (0, r.BX)("div", {
                        className: l().mobileCard,
                        children: [
                          (0, r.tZ)("h3", {
                            className: l().mobileCardTitle,
                            children: e.title,
                          }),
                          (0, r.tZ)(m.ZP, {
                            otherClasses: l().mobileCardText,
                            markdown: e.text,
                          }),
                          (0, r.tZ)("ul", {
                            className: l().mobileCardList,
                            children: e.label.map(function (e, t) {
                              return (0,
                              r.tZ)("li", { className: l().mobileCardListItem, children: e.title }, "".concat(e.title, "-").concat(t));
                            }),
                          }),
                        ],
                      }),
                    }),
                  },
                  "".concat(e.title, "-").concat(t)
                );
              }),
            }),
          ],
        });
      };
    },
    94644: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return f;
        },
      });
      var r = a(97997),
        o = a(11720),
        n = a(86010),
        i = a(54669),
        l = a.n(i),
        s = a(39329),
        c = a(24928),
        m = a(66284),
        d = a(51663),
        u = a(62885),
        C = a(91486),
        p = a(35773),
        _ = a(93650),
        h = a(18959);
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      function g(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(a);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(a).filter(function (e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              g(e, t, a[t]);
            });
        }
        return e;
      }
      function v(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var a =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != a) {
              var r,
                o,
                n = [],
                i = !0,
                l = !1;
              try {
                for (
                  a = a.call(e);
                  !(i = (r = a.next()).done) &&
                  (n.push(r.value), !t || n.length !== t);
                  i = !0
                );
              } catch (s) {
                (l = !0), (o = s);
              } finally {
                try {
                  i || null == a.return || a.return();
                } finally {
                  if (l) throw o;
                }
              }
              return n;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return b(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === a && e.constructor && (a = e.constructor.name);
            if ("Map" === a || "Set" === a) return Array.from(a);
            if (
              "Arguments" === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            )
              return b(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var f = function (e) {
        var t = e.title,
          a = e.subtext,
          i = e.navCta,
          b = e.cardCta,
          g = e.tabData,
          f = e.otherClasses,
          L = (0, n.Z)(l().wrapper, f, "hidden-900"),
          Z = (0, o.useState)(0),
          y = Z[0],
          H = Z[1],
          k = v((0, d.Bu)(), 2),
          w = k[0],
          I = k[1],
          N = (0, o.useState)(""),
          E = N[0],
          B = N[1];
        (0, o.useEffect)(function () {
          B(window.location.pathname);
        }, []);
        var F = ["/fr-FR", "/es-ES", "/pt-BR", "/de", "/it"].some(function (e) {
          return E.includes(e);
        });
        return (0, r.BX)("div", {
          className: L,
          "data-testid": "cu-home-teams-tab",
          "data-segment-view": !0,
          "data-segment-props": JSON.stringify((0, C.Vz)(T({}, u.th))),
          children: [
            (0, r.tZ)(p.Z, {
              version: "v3",
              HeadingTag: "h2",
              alignment: "center",
              title: t,
              otherClasses: (0, n.Z)(l().headline, "h2"),
            }),
            (0, r.tZ)(m.ZP, {
              otherClasses: l().subText,
              markdown: a,
              paragraphSize: "paragraph-lg",
            }),
            (0, r.tZ)("div", {
              "data-segment-view": !0,
              "data-segment-props": JSON.stringify({
                internalName: "GrowthBook Video Slider",
                sectionTitle: "Perfect fit for every team",
              }),
              children:
                !F &&
                (0, r.tZ)(_.default, {
                  cards: h.qP,
                  layout: "click-to-scroll",
                  carouselFade: !1,
                  otherClasses: l().videoCardGrid,
                }),
            }),
            (0, r.BX)("div", {
              className: (0, n.Z)(l().containerParentWrapper),
              children: [
                (0, r.BX)("div", {
                  className: l().tabNavigationWrapper,
                  children: [
                    g.map(function (e, t) {
                      return (0, r.tZ)(
                        "button",
                        {
                          className: (0, n.Z)(
                            l().tabNavigationButton,
                            y === t && l().tabNavigationButtonActive
                          ),
                          onClick: function () {
                            H(t),
                              w(
                                "click web",
                                T({}, I, {
                                  sectionModelName: "CuHomeTeamsTab",
                                  sectionTitle: "Perfect fit for every team",
                                  buttonClicked: e.buttonTitle,
                                })
                              );
                          },
                          children: (0, r.BX)("div", {
                            className: l().tabButtonContent,
                            children: [
                              (0, r.tZ)("div", {
                                className: l().tabButtonIcon,
                                children: e.buttonIcon,
                              }),
                              (0, r.tZ)("div", {
                                className: l().tabButtonTitle,
                                children: e.buttonTitle,
                              }),
                            ],
                          }),
                        },
                        "tab-nav-".concat(e.cardTitle, "-").concat(t)
                      );
                    }),
                    (0, r.tZ)(c.Z, {
                      otherClasses: (0, n.Z)(l().tabNavigationButton),
                      href: "/teams",
                      underline: !1,
                      sectionModelName: "CuHomeTeamsTab",
                      sectionTitle: "Perfect fit for every team",
                      buttonClicked: "See all teams",
                      children: (0, r.tZ)(r.HY, { children: i }),
                    }),
                  ],
                }),
                (0, r.tZ)("div", {
                  className: l().tabContentWrapper,
                  children: g.map(function (e, t) {
                    return (0, r.BX)(
                      "div",
                      {
                        className: (0, n.Z)(
                          l().tabContent,
                          y === t && l().tabContentActive
                        ),
                        children: [
                          (0, r.BX)("div", {
                            className: l().tabContentLeft,
                            children: [
                              (0, r.BX)("div", {
                                className: l().tabContentOverview,
                                children: [
                                  (0, r.tZ)("h3", {
                                    className: l().tabContentTitle,
                                    children: e.cardTitle,
                                  }),
                                  (0, r.tZ)("p", {
                                    className: l().tabDescription,
                                    children: e.cardDescription,
                                  }),
                                  (0, r.tZ)("ul", {
                                    className: l().tabContentList,
                                    children: e.list.map(function (t, a) {
                                      return (0,
                                      r.tZ)("li", { className: l().tabContentListElement, children: t }, "tab-content-item-".concat(e.cardTitle, "-").concat(a));
                                    }),
                                  }),
                                ],
                              }),
                              (0, r.BX)("div", {
                                className: l().tabTestimonial,
                                children: [
                                  (0, r.tZ)("img", {
                                    src: e.testimonialImage.src,
                                    alt: e.testimonialImage.alt,
                                    width: e.testimonialImage.width,
                                    height: e.testimonialImage.height,
                                    className: l().tabTestimonialImage,
                                  }),
                                  (0, r.BX)("div", {
                                    className: l().tabTestimonialContent,
                                    children: [
                                      (0, r.BX)("div", {
                                        className: l().tabTestimonialSvgWrapper,
                                        children: [
                                          (0, r.BX)("svg", {
                                            width: "96",
                                            height: "16",
                                            viewBox: "0 0 96 16",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                              (0, r.tZ)("path", {
                                                d: "M15.9545 6.41069C16.0812 6.28499 16.2078 6.12061 16.2078 5.94657C16.2078 5.65649 15.8961 5.54046 15.6623 5.50178L10.7727 4.79593L8.58117 0.396438C8.49351 0.212723 8.32792 0 8.1039 0C7.87987 0 7.71429 0.212723 7.62662 0.396438L5.43506 4.79593L0.545455 5.50178C0.301948 5.54046 0 5.65649 0 5.94657C0 6.12061 0.126623 6.28499 0.243506 6.41069L3.78896 9.83359L2.9513 14.6682C2.9502 14.6758 2.94911 14.6833 2.94802 14.6907C2.93949 14.7491 2.93182 14.8015 2.93182 14.8616C2.93182 15.113 3.05844 15.345 3.34091 15.345C3.47727 15.345 3.6039 15.2967 3.73052 15.229L8.1039 12.9471L12.4773 15.229C12.5942 15.2967 12.7305 15.345 12.8669 15.345C13.1493 15.345 13.2662 15.113 13.2662 14.8616C13.2662 14.7939 13.2662 14.7359 13.2565 14.6682L12.4188 9.83359L15.9545 6.41069Z",
                                                fill: "#FFC800",
                                              }),
                                              (0, r.tZ)("path", {
                                                d: "M35.9026 6.41069C36.0292 6.28499 36.1558 6.12061 36.1558 5.94657C36.1558 5.65649 35.8442 5.54046 35.6104 5.50178L30.7208 4.79593L28.5292 0.396438C28.4416 0.212723 28.276 0 28.0519 0C27.8279 0 27.6623 0.212723 27.5747 0.396438L25.3831 4.79593L20.4935 5.50178C20.25 5.54046 19.9481 5.65649 19.9481 5.94657C19.9481 6.12061 20.0747 6.28499 20.1916 6.41069L23.737 9.83359L22.8993 14.6682C22.8983 14.6758 22.8972 14.6833 22.8961 14.6907C22.8875 14.7491 22.8799 14.8015 22.8799 14.8616C22.8799 15.113 23.0065 15.345 23.289 15.345C23.4253 15.345 23.5519 15.2967 23.6786 15.229L28.0519 12.9471L32.4253 15.229C32.5422 15.2967 32.6786 15.345 32.8149 15.345C33.0974 15.345 33.2143 15.113 33.2143 14.8616C33.2143 14.7939 33.2143 14.7359 33.2045 14.6682L32.3669 9.83359L35.9026 6.41069Z",
                                                fill: "#FFC800",
                                              }),
                                              (0, r.tZ)("path", {
                                                d: "M55.8506 6.41069C55.9773 6.28499 56.1039 6.12061 56.1039 5.94657C56.1039 5.65649 55.7922 5.54046 55.5584 5.50178L50.6688 4.79593L48.4773 0.396438C48.3896 0.212723 48.224 0 48 0C47.776 0 47.6104 0.212723 47.5227 0.396438L45.3312 4.79593L40.4416 5.50178C40.1981 5.54046 39.8961 5.65649 39.8961 5.94657C39.8961 6.12061 40.0227 6.28499 40.1396 6.41069L43.6851 9.83359L42.8474 14.6682C42.8463 14.6758 42.8452 14.6833 42.8441 14.6907C42.8356 14.7491 42.8279 14.8015 42.8279 14.8616C42.8279 15.113 42.9545 15.345 43.237 15.345C43.3734 15.345 43.5 15.2967 43.6266 15.229L48 12.9471L52.3734 15.229C52.4903 15.2967 52.6266 15.345 52.763 15.345C53.0455 15.345 53.1623 15.113 53.1623 14.8616C53.1623 14.7939 53.1623 14.7359 53.1526 14.6682L52.3149 9.83359L55.8506 6.41069Z",
                                                fill: "#FFC800",
                                              }),
                                              (0, r.tZ)("path", {
                                                d: "M75.7987 6.41069C75.9253 6.28499 76.0519 6.12061 76.0519 5.94657C76.0519 5.65649 75.7403 5.54046 75.5065 5.50178L70.6169 4.79593L68.4253 0.396438C68.3377 0.212723 68.1721 0 67.9481 0C67.724 0 67.5584 0.212723 67.4708 0.396438L65.2792 4.79593L60.3896 5.50178C60.1461 5.54046 59.8442 5.65649 59.8442 5.94657C59.8442 6.12061 59.9708 6.28499 60.0877 6.41069L63.6331 9.83359L62.7955 14.6682C62.7944 14.6758 62.7933 14.6833 62.7922 14.6907C62.7836 14.7491 62.776 14.8015 62.776 14.8616C62.776 15.113 62.9026 15.345 63.1851 15.345C63.3214 15.345 63.4481 15.2967 63.5747 15.229L67.9481 12.9471L72.3214 15.229C72.4383 15.2967 72.5747 15.345 72.711 15.345C72.9935 15.345 73.1104 15.113 73.1104 14.8616C73.1104 14.7939 73.1104 14.7359 73.1006 14.6682L72.263 9.83359L75.7987 6.41069Z",
                                                fill: "#FFC800",
                                              }),
                                              (0, r.tZ)("path", {
                                                d: "M95.7467 6.41069C95.8734 6.28499 96 6.12061 96 5.94657C96 5.65649 95.6883 5.54046 95.4545 5.50178L90.5649 4.79593L88.3734 0.396438C88.2857 0.212723 88.1201 0 87.8961 0C87.6721 0 87.5065 0.212723 87.4188 0.396438L85.2273 4.79593L80.3377 5.50178C80.0942 5.54046 79.7922 5.65649 79.7922 5.94657C79.7922 6.12061 79.9188 6.28499 80.0357 6.41069L83.5812 9.83359L82.7435 14.6682C82.7424 14.6758 82.7413 14.6833 82.7402 14.6907C82.7317 14.7491 82.724 14.8015 82.724 14.8616C82.724 15.113 82.8506 15.345 83.1331 15.345C83.2695 15.345 83.3961 15.2967 83.5227 15.229L87.8961 12.9471L92.2695 15.229C92.3864 15.2967 92.5227 15.345 92.6591 15.345C92.9416 15.345 93.0584 15.113 93.0584 14.8616C93.0584 14.7939 93.0584 14.7359 93.0487 14.6682L92.211 9.83359L95.7467 6.41069Z",
                                                fill: "#FFC800",
                                              }),
                                            ],
                                          }),
                                          (0, r.tZ)("div", {
                                            className: l().tabTestimonialLogo,
                                            children: e.testimonialLogo,
                                          }),
                                        ],
                                      }),
                                      (0, r.tZ)(m.ZP, {
                                        otherClasses: l().tabTestimonialQuote,
                                        markdown: e.testimonialText,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.tZ)("div", {
                            className: l().tabCardWrapper,
                            children: (0, r.BX)("div", {
                              className: l().tabCard,
                              children: [
                                (0, r.tZ)(s.ZP, {
                                  className: (0, n.Z)(
                                    l().tabCardButton,
                                    l().tabCardButtonPrevious
                                  ),
                                  onClick: function () {
                                    var e = 0 === y ? g.length - 1 : y - 1;
                                    H(e);
                                  },
                                  sectionModelName: "CuHomeTeamsTab",
                                  sectionTitle: e.cardTitle,
                                  buttonClicked: "previous",
                                  children: (0, r.BX)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "40",
                                    height: "40",
                                    viewBox: "0 0 40 40",
                                    fill: "none",
                                    children: [
                                      (0, r.tZ)("rect", {
                                        x: "39.5",
                                        y: "39.5",
                                        width: "39",
                                        height: "39",
                                        rx: "19.5",
                                        transform: "rotate(-180 39.5 39.5)",
                                        fill: "white",
                                        stroke: "#CECEEA",
                                      }),
                                      (0, r.tZ)("path", {
                                        d: "M21 26L16 20.5L21 15",
                                        stroke: "#7F76B3",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.tZ)(s.ZP, {
                                  className: (0, n.Z)(
                                    l().tabCardButton,
                                    l().tabCardButttonNext
                                  ),
                                  onClick: function () {
                                    var e = (y + 1) % g.length;
                                    H(e);
                                  },
                                  sectionModelName: "CuHomeTeamsTab",
                                  sectionTitle: e.cardTitle,
                                  buttonClicked: "next",
                                  children: (0, r.BX)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "40",
                                    height: "40",
                                    viewBox: "0 0 40 40",
                                    fill: "none",
                                    children: [
                                      (0, r.tZ)("rect", {
                                        x: "0.5",
                                        y: "0.5",
                                        width: "39",
                                        height: "39",
                                        rx: "19.5",
                                        fill: "white",
                                        stroke: "#CECEEA",
                                      }),
                                      (0, r.tZ)("path", {
                                        d: "M19 14L24 19.5L19 25",
                                        stroke: "#7F76B3",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.tZ)("ul", {
                                  className: l().tabCardList,
                                  children: e.cardItems.map(function (t, a) {
                                    return (0,
                                    r.BX)("li", { className: l().tabCardListElement, children: [(0, r.tZ)("div", { className: l().tabCardFeatureIconWrapper, children: t.featureIcon }), (0, r.tZ)("div", { className: l().tabCardItemText, children: t.feature })] }, "tab-card-item-".concat(e.cardTitle, "-").concat(a));
                                  }),
                                }),
                                (0, r.tZ)(c.Z, {
                                  otherClasses: l().tabCardCtaButton,
                                  href: e.ctaLink,
                                  underline: !1,
                                  sectionModelName: "CuHomeTeamsTab",
                                  sectionTitle: e.cardTitle,
                                  buttonClicked: "Use this Solution",
                                  children: (0, r.BX)(r.HY, {
                                    children: [
                                      b,
                                      (0, r.tZ)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "15",
                                        height: "11",
                                        viewBox: "0 0 15 11",
                                        fill: "none",
                                        children: (0, r.tZ)("path", {
                                          d: "M14 5.5L0.999999 5.5M14 5.5L9.16279 1M14 5.5L9.16279 10",
                                          stroke: "white",
                                          strokeWidth: "2",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      },
                      "tab-content-".concat(e.cardTitle, "-").concat(t)
                    );
                  }),
                }),
              ],
            }),
            (0, r.tZ)("div", {
              className: l().mobileWrapper,
              children: (0, r.tZ)("div", {
                className: l().mobileWrapperWidthControl,
                children: g.map(function (e, t) {
                  return (0, r.BX)(
                    "div",
                    {
                      className: l().mobileCardWrapper,
                      children: [
                        (0, r.BX)("div", {
                          className: l().mobileCardTitleWrapper,
                          children: [
                            e.buttonIcon,
                            (0, r.tZ)("h3", { children: e.buttonTitle }),
                          ],
                        }),
                        (0, r.tZ)("p", {
                          className: l().mobileCardDescription,
                          children: e.cardTitle,
                        }),
                        (0, r.tZ)("ul", {
                          className: l().tabContentList,
                          children: e.list.map(function (t, a) {
                            return (0,
                            r.tZ)("li", { className: l().tabContentListElement, children: t }, "tab-content-item-".concat(e.cardTitle, "-").concat(a));
                          }),
                        }),
                        (0, r.tZ)(c.Z, {
                          otherClasses: l().tabCardCtaButton,
                          href: e.ctaLink,
                          underline: !1,
                          sectionModelName: "CuHomeTeamsTab",
                          sectionTitle: e.cardTitle,
                          buttonClicked: "Use this Solution",
                          children: (0, r.BX)(r.HY, {
                            children: [
                              b,
                              (0, r.tZ)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "15",
                                height: "11",
                                viewBox: "0 0 15 11",
                                fill: "none",
                                children: (0, r.tZ)("path", {
                                  d: "M14 5.5L0.999999 5.5M14 5.5L9.16279 1M14 5.5L9.16279 10",
                                  stroke: "white",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    },
                    "".concat(e.buttonTitle, "-").concat(t)
                  );
                }),
              }),
            }),
          ],
        });
      };
    },
    13391: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return v;
        },
      });
      var r = a(97997),
        o = a(11720),
        n = a(86010),
        i = a(91486),
        l = a(11163),
        s = a(81361),
        c = a(52e3),
        m = a(97701),
        d = a(94202),
        u = a(66284),
        C = a(24928),
        p = a(35773),
        _ = a(51986),
        h = a.n(_),
        b = a(62885);
      function g(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(a);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(a).filter(function (e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              g(e, t, a[t]);
            });
        }
        return e;
      }
      var v = function (e) {
        var t = e.title,
          a = e.subText,
          _ = e.cards,
          g = e.otherClasses,
          v = (0, l.useRouter)(),
          f = (0, o.useState)(!1),
          L = f[0],
          Z = f[1];
        (0, o.useEffect)(
          function () {
            v && v.pathname && Z(v.pathname.includes("/lp"));
          },
          [v]
        );
        var y = (0, n.Z)(h().wrapper, L ? null : "hidden-900", g),
          H = (0, o.useRef)([]),
          k = (0, o.useState)([]),
          w = k[0],
          I = k[1];
        (0, o.useEffect)(function () {
          var e = function () {
            var e = H.current
              .filter(function (e) {
                return null !== e;
              })
              .filter(function (e) {
                if (e) {
                  var t = e.getBoundingClientRect();
                  return t.top < 0.8 * window.innerHeight && t.bottom > 0;
                }
                return !1;
              });
            I(e);
          };
          return (
            window.addEventListener("scroll", e),
            e(),
            function () {
              window.removeEventListener("scroll", e);
            }
          );
        }, []),
          (0, o.useEffect)(
            function () {
              w.forEach(function (e, t) {
                null === e ||
                  void 0 === e ||
                  e.classList.remove(h().cardHidden),
                  null === e ||
                    void 0 === e ||
                    e.classList.add(h().cardVisible),
                  setTimeout(function () {
                    null === e ||
                      void 0 === e ||
                      e.classList.remove(h().cardHidden),
                      null === e ||
                        void 0 === e ||
                        e.classList.add(h().cardVisible);
                  }, 100 * t);
              });
            },
            [w]
          );
        var N = (0, s.cC)("clickable-bento-boxes"),
          E = (0, s.aS)("clickable-bento-boxes", 0),
          B = N && 1 === E;
        return (0, r.BX)("div", {
          className: y,
          "data-testid": "cu-home-test-everything-your-team-is-looking-for",
          "data-segment-view": !0,
          "data-segment-props": JSON.stringify((0, i.Vz)(T({}, b.mt))),
          children: [
            (0, r.tZ)(p.Z, {
              version: "v3",
              HeadingTag: "h2",
              alignment: "center",
              title: t,
              otherClasses: (0, n.Z)(h().headline, "h2"),
            }),
            (0, r.tZ)(u.ZP, {
              markdown: a,
              otherClasses: h().subText,
              paragraphSize: "paragraph-lg",
            }),
            (0, r.tZ)("div", {
              className: (0, n.Z)(h().containerParentWrapper),
              children: (0, r.tZ)(m.Z, {
                columnNumber: 3,
                otherClasses: (0, n.Z)(h().cardWrapper, h().gridParent),
                vAlign: "stretch",
                hAlign: "start",
                children: (0, r.tZ)(r.HY, {
                  children: _.map(function (e, a) {
                    return (0, r.BX)(
                      "div",
                      {
                        ref: function (e) {
                          e && (H.current[a] = e);
                        },
                        className: (0, n.Z)(
                          h().card,
                          h().cardHidden,
                          "Sm" === e.cardSize && h().cardSm,
                          "Lg" === e.cardSize && h().cardLg,
                          e.cardClass && h()[e.cardClass],
                          B && h().hasLink
                        ),
                        style: { "--gradient-bg": e.gradientBG },
                        children: [
                          B &&
                            (0, r.tZ)(C.Z, {
                              href: e.cardLink,
                              isReset: !0,
                              underline: !1,
                              otherClasses: h().cardLink,
                              sectionModelName: "clickable bento box",
                              clickedType: "bento ".concat(e.cardClass),
                              children: (0, r.BX)(r.HY, {
                                children: [
                                  (0, r.tZ)("div", {
                                    className: h().linkOverlay,
                                  }),
                                  (0, r.BX)("div", {
                                    className: h().learnMoreCta,
                                    children: [
                                      (0, r.tZ)("span", {
                                        className: "paragraph-xs",
                                        children: "Learn more",
                                      }),
                                      (0, r.BX)("span", {
                                        className: "visuallyHidden",
                                        children: [" ", "about: ", e.cardTitle],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          (0, r.BX)("div", {
                            className: h().cardTextWrapper,
                            children: [
                              (0, r.tZ)("h3", {
                                className: h().cardTitle,
                                children: e.cardTitle,
                              }),
                              (0, r.tZ)("p", {
                                className: h().cardText,
                                children: e.cardText,
                              }),
                            ],
                          }),
                          e.inlineCards &&
                            (0, r.tZ)("div", {
                              className: h().cardComparisonWrapper,
                              children: e.inlineCards.map(function (e, t) {
                                return (0,
                                r.BX)("div", { className: h().cardComparisonItem, children: [(0, r.tZ)("h3", { className: h().cardComparisonTitle, children: e.title }), (0, r.tZ)("p", { className: h().cardComparisonText, children: e.text }), (0, r.tZ)(c.Z, { imageProps: e.image, lazyload: !0, otherClasses: (0, n.Z)(h().cardImage) })] }, "card-item-".concat(t));
                              }),
                            }),
                          e.list &&
                            (0, r.tZ)("ul", {
                              className: h().cardList,
                              children: e.list.map(function (e, t) {
                                return (0,
                                r.BX)("li", { className: h().cardListItem, children: [(0, r.tZ)("h4", { className: h().cardListTitle, children: e.title }), (0, r.tZ)("span", { className: h().cardListSubTitle, children: e.subtitle })] }, "card-list-item-".concat(t));
                              }),
                            }),
                          e.cardItems &&
                            (0, r.tZ)("ul", {
                              className: h().cardFeatureList,
                              children: e.cardItems.map(function (e, t) {
                                return (0,
                                r.BX)("li", { className: h().cardFeatureListElement, children: [(0, r.tZ)("div", { className: h().cardFeatureListIconWrapper, children: e.featureIcon }), (0, r.tZ)("div", { className: h().cardFeatureListText, children: e.feature }), (0, r.tZ)("div", { className: h().cardFeatureListSwitchWrapper, children: e.featureIconSwitch })] }, "card-feature-item-".concat(t));
                              }),
                            }),
                          e.image &&
                            (0, r.tZ)(c.Z, {
                              imageProps: e.image,
                              lazyload: !0,
                              otherClasses: (0, n.Z)(
                                h().cardImage,
                                "start" === e.imageDirection &&
                                  h().cardImageLeft,
                                "end" === e.imageDirection &&
                                  h().cardImageRight,
                                "center" === e.imageDirection &&
                                  h().cardImageCenter
                              ),
                            }),
                          !B &&
                            e.cta &&
                            (0, r.tZ)(d.Z, {
                              otherClasses: h().cardCta,
                              action: "open signup form",
                              source:
                                "work space signup Everything your team is looking for section",
                              sectionModelName:
                                "CuHomeTestEverythingYourTeamIsLookingFor",
                              sectionTitle: t,
                              buttonClicked: e.cta,
                              children: (0, r.BX)(r.HY, {
                                children: [
                                  (0, r.tZ)("span", { children: e.cta }),
                                  (0, r.tZ)("svg", {
                                    width: "16",
                                    height: "12",
                                    viewBox: "0 0 16 12",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, r.tZ)("path", {
                                      d: "M14.0957 6L1.0957 6M14.0957 6L9.25849 1.5M14.0957 6L9.25849 10.5",
                                      stroke: "white",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                        ],
                      },
                      a
                    );
                  }),
                }),
              }),
            }),
          ],
        });
      };
    },
    44751: function (e) {
      e.exports = {
        wrapper: "CuAiModule_wrapper__DNZOb",
        contentWrapper: "CuAiModule_contentWrapper__jvpPO",
        contentWrapperInner: "CuAiModule_contentWrapperInner__3fiPt",
        brainLogo: "CuAiModule_brainLogo__m1J1R",
        contentTitle: "CuAiModule_contentTitle__4T6oJ",
        contentDescription: "CuAiModule_contentDescription__qFWFR",
        ctaContainer: "CuAiModule_ctaContainer__gFJDv",
        ctaButton: "CuAiModule_ctaButton__2RXgH",
      };
    },
    10782: function (e) {
      e.exports = {
        mainWrapper: "CuHome_mainWrapper__Tks_r",
        mainContent: "CuHome_mainContent__mwec7",
      };
    },
    28675: function (e) {
      e.exports = {
        wrapper: "CuHomeCollapse_wrapper__CdXKT",
        title: "CuHomeCollapse_title__oBb7M",
        subText: "CuHomeCollapse_subText__dYvT7",
        collapseParent: "CuHomeCollapse_collapseParent____F_1",
        collapseNavigation: "CuHomeCollapse_collapseNavigation__nhtzy",
        collapseItem: "CuHomeCollapse_collapseItem__Z2h47",
        collapseText: "CuHomeCollapse_collapseText__FUy_n",
        collapseList: "CuHomeCollapse_collapseList__Fn05H",
        collapseTitle: "CuHomeCollapse_collapseTitle__vhS7a",
        collapseLink: "CuHomeCollapse_collapseLink__7v3og",
        collapseItemActive: "CuHomeCollapse_collapseItemActive__1tpZN",
        collapseContent: "CuHomeCollapse_collapseContent__D7mqU",
        collapseContentGradient:
          "CuHomeCollapse_collapseContentGradient__ziQTS",
        collapseContentElement: "CuHomeCollapse_collapseContentElement__Ocbn7",
        collapseContentElementText:
          "CuHomeCollapse_collapseContentElementText__5pov1",
        collapseContentElementIcon:
          "CuHomeCollapse_collapseContentElementIcon__llf_F",
        collapseContentElementComment:
          "CuHomeCollapse_collapseContentElementComment__DhISK",
        collapseContentElementTask:
          "CuHomeCollapse_collapseContentElementTask___iO3f",
        collapseContentImageBox:
          "CuHomeCollapse_collapseContentImageBox__BkamD",
        fadeInAndUp: "CuHomeCollapse_fadeInAndUp__UjRyO",
        collaborate: "CuHomeCollapse_collaborate__1_3Ky",
        enhance: "CuHomeCollapse_enhance__nNqEU",
        streamline: "CuHomeCollapse_streamline__0Jxw9",
        collapseContentHidden: "CuHomeCollapse_collapseContentHidden__7kQVc",
        image: "CuHomeCollapse_image__k_fOF",
        imageVisible: "CuHomeCollapse_imageVisible__vI9rS",
        fadeIn: "CuHomeCollapse_fadeIn__55vfQ",
        collapseAccordion: "CuHomeCollapse_collapseAccordion__l9zLQ",
        mobileCardParent: "CuHomeCollapse_mobileCardParent__Z9Tfc",
        mobileCardWrapper: "CuHomeCollapse_mobileCardWrapper__5ee9Z",
        actionButton: "CuHomeCollapse_actionButton__Ah5Ir",
        mobileCard: "CuHomeCollapse_mobileCard__exGn5",
        mobileCardTitle: "CuHomeCollapse_mobileCardTitle__Ia6vM",
        mobileCardText: "CuHomeCollapse_mobileCardText__kgZfJ",
        mobileCardList: "CuHomeCollapse_mobileCardList__eDQ_k",
        mobileCardListItem: "CuHomeCollapse_mobileCardListItem__N91nt",
      };
    },
    54669: function (e) {
      e.exports = {
        wrapper: "CuHomeTeamsTab_wrapper__ZgZf4",
        tabContentWrapper: "CuHomeTeamsTab_tabContentWrapper__L3h7T",
        headline: "CuHomeTeamsTab_headline__7wNLG",
        subText: "CuHomeTeamsTab_subText__cAhEX",
        videoCardGrid: "CuHomeTeamsTab_videoCardGrid__TgmYK",
        containerParentWrapper: "CuHomeTeamsTab_containerParentWrapper__rDfh_",
        tabNavigationWrapper: "CuHomeTeamsTab_tabNavigationWrapper__vrooW",
        tabNavigationButton: "CuHomeTeamsTab_tabNavigationButton__qoVp3",
        tabNavigationButtonActive:
          "CuHomeTeamsTab_tabNavigationButtonActive__frz3D",
        tabContent: "CuHomeTeamsTab_tabContent__dZsEB",
        tabContentActive: "CuHomeTeamsTab_tabContentActive__L1MSX",
        tabContentOverview: "CuHomeTeamsTab_tabContentOverview__VPaiI",
        tabContentTitle: "CuHomeTeamsTab_tabContentTitle___Z1zL",
        tabDescription: "CuHomeTeamsTab_tabDescription__n1fxF",
        tabContentList: "CuHomeTeamsTab_tabContentList__5fFXg",
        tabContentListElement: "CuHomeTeamsTab_tabContentListElement__rDV9R",
        tabTestimonial: "CuHomeTeamsTab_tabTestimonial__KlP5_",
        tabTestimonialContent: "CuHomeTeamsTab_tabTestimonialContent__VnWhW",
        tabTestimonialImage: "CuHomeTeamsTab_tabTestimonialImage__Nfz87",
        tabTestimonialSvgWrapper:
          "CuHomeTeamsTab_tabTestimonialSvgWrapper__hZDTo",
        tabTestimonialLogo: "CuHomeTeamsTab_tabTestimonialLogo__dYGgD",
        tabTestimonialQuote: "CuHomeTeamsTab_tabTestimonialQuote__lP_hQ",
        tabCardWrapper: "CuHomeTeamsTab_tabCardWrapper__o5jlP",
        curvedEdge: "CuHomeTeamsTab_curvedEdge__4EDJc",
        tabCard: "CuHomeTeamsTab_tabCard__4bp28",
        tabCardButton: "CuHomeTeamsTab_tabCardButton__4Rob2",
        tabCardButtonPrevious: "CuHomeTeamsTab_tabCardButtonPrevious__QATg0",
        tabCardButttonNext: "CuHomeTeamsTab_tabCardButttonNext__aYuoz",
        tabCardList: "CuHomeTeamsTab_tabCardList__CfiZC",
        tabCardListElement: "CuHomeTeamsTab_tabCardListElement__68oil",
        tabCardFeatureIconWrapper:
          "CuHomeTeamsTab_tabCardFeatureIconWrapper__LWdha",
        tabCardCtaButton: "CuHomeTeamsTab_tabCardCtaButton__PeAV_",
        mobileWrapper: "CuHomeTeamsTab_mobileWrapper__m_eEj",
        mobileWrapperWidthControl:
          "CuHomeTeamsTab_mobileWrapperWidthControl__LhfH1",
        mobileCardWrapper: "CuHomeTeamsTab_mobileCardWrapper__EWFMj",
        mobileCardTitleWrapper: "CuHomeTeamsTab_mobileCardTitleWrapper__hDiKq",
        mobileCardDescription: "CuHomeTeamsTab_mobileCardDescription__8P8vO",
      };
    },
    51986: function (e) {
      e.exports = {
        wrapper: "CuHomeTestEverythingYourTeamIsLookingFor_wrapper__Z7iOi",
        headline: "CuHomeTestEverythingYourTeamIsLookingFor_headline__YxBc_",
        subText: "CuHomeTestEverythingYourTeamIsLookingFor_subText__Sz65N",
        containerParentWrapper:
          "CuHomeTestEverythingYourTeamIsLookingFor_containerParentWrapper__Idn04",
        cardTextWrapper:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardTextWrapper__6Gs2Y",
        cardSm: "CuHomeTestEverythingYourTeamIsLookingFor_cardSm__9fPmu",
        cardLg: "CuHomeTestEverythingYourTeamIsLookingFor_cardLg__PwBC_",
        card: "CuHomeTestEverythingYourTeamIsLookingFor_card__8glTg",
        cardVisible:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardVisible__fYiGg",
        cardWorldwide:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardWorldwide__LaTbo",
        cardComparison:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardComparison__38Goa",
        cardAi: "CuHomeTestEverythingYourTeamIsLookingFor_cardAi__QmekB",
        cardImage: "CuHomeTestEverythingYourTeamIsLookingFor_cardImage__tgvVM",
        cardViewWork:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardViewWork__mHdcM",
        cardCustomize:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardCustomize__2M_b1",
        cardSearch:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardSearch__7CQ5W",
        cardStayAhead:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardStayAhead__p4t9s",
        cardLink: "CuHomeTestEverythingYourTeamIsLookingFor_cardLink__rzBav",
        arrow: "CuHomeTestEverythingYourTeamIsLookingFor_arrow__33eLg",
        learnMoreCta:
          "CuHomeTestEverythingYourTeamIsLookingFor_learnMoreCta__0nmpP",
        linkOverlay:
          "CuHomeTestEverythingYourTeamIsLookingFor_linkOverlay__qee7g",
        hasLink: "CuHomeTestEverythingYourTeamIsLookingFor_hasLink__WYYxV",
        cardImageLeft:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardImageLeft__lARU9",
        cardImageCenter:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardImageCenter__Hic40",
        cardImageRight:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardImageRight__u9rFc",
        cardTitle: "CuHomeTestEverythingYourTeamIsLookingFor_cardTitle__BDBds",
        cardText: "CuHomeTestEverythingYourTeamIsLookingFor_cardText__iOVCz",
        cardCta: "CuHomeTestEverythingYourTeamIsLookingFor_cardCta__vOjWg",
        cardList: "CuHomeTestEverythingYourTeamIsLookingFor_cardList__0S3pq",
        cardListItem:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardListItem__psT8W",
        cardListTitle:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardListTitle__jYnlz",
        cardListSubTitle:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardListSubTitle__JKVnr",
        cardComparisonWrapper:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardComparisonWrapper__8M537",
        cardComparisonItem:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardComparisonItem__ZQstI",
        cardComparisonTitle:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardComparisonTitle__3voOZ",
        cardComparisonText:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardComparisonText__Z96US",
        cardFeatureList:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardFeatureList__FoYRC",
        cardFeatureListElement:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardFeatureListElement__QhCFr",
        cardFeatureListText:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardFeatureListText__rbhty",
        cardFeatureListIconWrapper:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardFeatureListIconWrapper__rwiKz",
        cardFeatureListSwitchWrapper:
          "CuHomeTestEverythingYourTeamIsLookingFor_cardFeatureListSwitchWrapper__kyJMO",
        fadeInAndUp:
          "CuHomeTestEverythingYourTeamIsLookingFor_fadeInAndUp__hy22d",
      };
    },
    89720: function (e) {
      e.exports = {
        wrapper: "CuHomeTestParent_wrapper__b7YT0",
        roiCalculator: "CuHomeTestParent_roiCalculator__EepXU",
        cuAiModule: "CuHomeTestParent_cuAiModule__C4XJ9",
        paidHomeParent: "CuHomeTestParent_paidHomeParent__v_HGi",
        paidJoinTeams: "CuHomeTestParent_paidJoinTeams__kQGOg",
        logoSalad: "CuHomeTestParent_logoSalad__PlWos",
        logoSaladLocalization: "CuHomeTestParent_logoSaladLocalization__5skrS",
      };
    },
  },
]);
