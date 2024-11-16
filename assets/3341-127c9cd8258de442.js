(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3341],
  {
    34830: function (e, t, n) {
      "use strict";
      var i = n(97997),
        a = (n(11720), n(25296)),
        o = n(39329),
        r = n(30139),
        l = n(98498),
        c = n(86010);
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function d(e, t) {
        if (null == e) return {};
        var n,
          i,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              a = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (n = o[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (n = o[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      t.Z = function (e) {
        var t,
          n = e.buttonSize,
          u = e.children,
          p = void 0 === u ? "Get Started" : u,
          g = e.href,
          m = (e.color, e.action),
          h = (e.source, e.siteLocation),
          v = void 0 === h ? void 0 : h,
          f = e.redirectParams,
          b = e.isOutline,
          k = void 0 !== b && b,
          C = e.isReset,
          _ = e.otherClasses,
          Z = d(e, [
            "buttonSize",
            "children",
            "href",
            "color",
            "action",
            "source",
            "siteLocation",
            "redirectParams",
            "isOutline",
            "isReset",
            "otherClasses",
          ]),
          y = Z.buttonClicked,
          N = Z.linkTitle,
          w = Z.sectionId,
          M = Z.sectionModelName,
          T = Z.sectionInternalName,
          V = Z.sectionIndex,
          O = Z.sectionColor,
          I = Z.sectionLabel,
          B = Z.sectionTitle,
          x = Z.articleTitle,
          j = Z.articleLabel,
          S = Z.articleBlockId,
          P = Z.articleBlockIndex,
          L = Z.articleBlockModelName,
          X = Z.clickedType,
          A = void 0 === X ? "button" : X,
          z = "click web",
          H = JSON.stringify(f),
          E = (0, a.d)().actions,
          R = E.setIsSignUpOverlayOpen,
          D = E.setIsEnterpriseSalesModalOpen,
          W = E.setEnterpriseSalesModalLocation;
        if (!m && !g) return (0, i.tZ)(i.HY, {});
        m &&
          "open signup form" === m &&
          ((z = "trigger email capture overlay"),
          (t = function (e) {
            (0, l.uF)(e, "sessionStorage"), R(!0);
          })),
          m &&
            "open contact sales form" === m &&
            (t = function () {
              D(!0), W(v || "body");
            });
        var G = (0, c.Z)(_ && _);
        return (0, i.tZ)(
          "div",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" === typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                i.forEach(function (t) {
                  s(e, t, n[t]);
                });
            }
            return e;
          })({ "data-testid": "cu-action-button" }, (0, r.s)(Z), {
            children: (0, i.tZ)(o.ZP, {
              action: m,
              buttonSize: n,
              href: g,
              onClick: t,
              isOutline: k,
              isReset: C,
              otherClasses: G,
              redirectParams: H,
              redirectParamsProp: H,
              eventName: z,
              buttonClicked: y,
              linkTitle: N,
              sectionId: w,
              sectionModelName: M,
              sectionInternalName: T,
              sectionIndex: V,
              sectionColor: O,
              sectionLabel: I,
              sectionTitle: B,
              articleTitle: x,
              articleLabel: j,
              articleBlockId: S,
              articleBlockIndex: P,
              articleBlockModelName: L,
              clickedType: A,
              children: p,
            }),
          })
        );
      };
    },
    82725: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return y;
        },
      });
      var i = n(97997),
        a = (n(11720), n(86010)),
        o = n(35773),
        r = n(63538),
        l = n(70564),
        c = n(26493),
        s = n.n(c),
        d = n(94202),
        u = n(91486),
        p = n(24928),
        g = n(66343),
        m = n(41253),
        h = n.n(m);
      function v(e, t) {
        if (null == e) return {};
        var n,
          i,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              a = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (n = o[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (n = o[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var f = function (e, t) {
          if (e)
            return "markdown" in e
              ? (0, i.tZ)(o.Z, {
                  version: t,
                  title: e.markdown,
                  otherClasses: (0, a.Z)(h().titleWrapper),
                  overrideHeadingClass: (0, a.Z)("text-xl", h().title),
                  alignment: "start",
                  HeadingTag: "h3",
                })
              : (0, i.tZ)(l.Z, { media: e, otherClasses: h().logo });
        },
        b = function (e) {
          var t,
            n = e.title,
            o = e.description,
            c = e.media,
            s = e.otherClasses,
            d = v(e, ["title", "description", "media", "otherClasses"]),
            u = (0, a.Z)(h().wrapper, "v4", s, "radius-md", "shadow-sm");
          return (0, i.BX)("div", {
            id:
              null === d ||
              void 0 === d ||
              null === (t = d.__metadata) ||
              void 0 === t
                ? void 0
                : t.id,
            className: u,
            "data-testid": "cu-content-card-v4",
            children: [
              (0, i.tZ)(l.Z, { media: c, otherClasses: h().media }),
              (0, i.BX)("div", {
                className: h().textContent,
                children: [
                  f(n),
                  (0, i.tZ)(r.Z, {
                    description: o,
                    otherClasses: (0, a.Z)(h().description, "text-md"),
                    version: "v4",
                  }),
                ],
              }),
            ],
          });
        };
      function k(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              k(e, t, n[t]);
            });
        }
        return e;
      }
      function _(e, t) {
        if (null == e) return {};
        var n,
          i,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              a = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (n = o[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (n = o[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var Z = function (e) {
          if (e)
            return "markdown" in e
              ? (0, i.tZ)(o.Z, {
                  title: e.markdown,
                  otherClasses: "paragraph-lg",
                  overrideHeadingClass: s().title,
                  HeadingTag: "h3",
                })
              : (0, i.tZ)(l.Z, { media: e, otherClasses: s().logo });
        },
        y = function (e) {
          var t = e.title,
            n = e.description,
            o = e.media,
            c = e.ctaButton,
            m = e.colorGradient,
            h = void 0 === m ? "white" : m,
            v = e.otherClasses,
            f = e.isImageFirst,
            k = void 0 === f || f,
            y = e.textOverImage,
            N = e.cardAlignment,
            w = void 0 === N ? "vertical" : N,
            M = e.cardTextAlignment,
            T = e.cardIsLink,
            V = e.cardFlip,
            O = e.version,
            I = _(e, [
              "title",
              "description",
              "media",
              "ctaButton",
              "colorGradient",
              "otherClasses",
              "isImageFirst",
              "textOverImage",
              "cardAlignment",
              "cardTextAlignment",
              "cardIsLink",
              "cardFlip",
              "version",
            ]),
            B = (0, u.Vz)(C({}, I, { sectionModelName: "CuContentCard" }));
          "gradient-dark-purple-1" !== h && (h = "white");
          var x = { vertical: s().vertical, horizontal: s().horizontal },
            j = { start: s().start, center: s().center },
            S = (0, a.Z)(
              s().wrapper,
              "v3",
              o && s().hasMedia,
              "white" === h && s().whiteCard,
              !k && s().imageLast,
              w && x[w],
              T && s().hasLink,
              V && s().flipCard,
              v
            ),
            P = {
              "--color-gradient-token": "var(--color-".concat(h, ")"),
              "--color-gradient-shadow": "rgba(".concat(
                {
                  "gradient-dark-purple-1": "16, 31, 82, 0.2",
                  white: "0, 0, 0, 0.05",
                }[h],
                ")"
              ),
            };
          if ("v4" === O)
            return (0, i.tZ)(b, { title: t, description: n, media: o });
          var L = (0, i.BX)(i.HY, {
            children: [
              T && (0, i.tZ)(p.Z, { href: T, otherClasses: s().cardLink }),
              o &&
                (0, i.BX)("div", {
                  className: s().mediaWrapper,
                  children: [
                    (0, i.tZ)(l.Z, { media: o, otherClasses: s().media }),
                    y &&
                      (0, i.tZ)(r.Z, {
                        description: y,
                        version: "v3",
                        otherClasses: s().textOverImage,
                      }),
                    T &&
                      (0, i.BX)(i.HY, {
                        children: [
                          (0, i.tZ)("div", { className: s().linkOverlay }),
                          (0, i.BX)("div", {
                            className: s().learnMore,
                            children: [
                              (0, i.tZ)("span", { children: "Learn more" }),
                              (0, i.tZ)(g.ZP, {
                                icon: "icon-v3-arrow-right-circular",
                                otherClasses: s().arrowIcon,
                                width: 14,
                                height: 14,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              (0, i.BX)("div", {
                className: (0, a.Z)(s().content, M && j[M]),
                children: [
                  (0, i.tZ)("div", {
                    className: s().logoContainer,
                    children: Z(t),
                  }),
                  n &&
                    (0, i.tZ)(r.Z, {
                      description: n,
                      version: "v3",
                      otherClasses: (0, a.Z)(
                        s().description,
                        !!t &&
                          !("markdown" in t) &&
                          s().descriptionWithLogoTitle
                      ),
                      paragraphSize:
                        "white" === h ? "paragraph" : "paragraph-md",
                    }),
                  c &&
                    (0, i.tZ)(
                      d.Z,
                      C(
                        {},
                        c,
                        {
                          version: "v3",
                          buttonSize: "lg",
                          buttonStyle: "white" === h && "tertiary-sub",
                          otherClasses: (0, a.Z)(
                            s().button,
                            "white" === h && s().whiteCardButton
                          ),
                        },
                        B,
                        { buttonClicked: c.children, children: c.children }
                      )
                    ),
                ],
              }),
            ],
          });
          return (0, i.BX)("div", {
            className: S,
            "data-testid": "cu-content-card",
            style: P,
            children: [
              V &&
                (0, i.tZ)("div", {
                  className: s().frontFace,
                  children: (0, i.tZ)(l.Z, {
                    media: V,
                    otherClasses: s().flipImage,
                  }),
                }),
              V
                ? (0, i.tZ)("div", { className: s().backFace, children: L })
                : L,
            ],
          });
        };
    },
    73341: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Bt;
        },
      });
      var i = n(97997),
        a = n(11720),
        o = n(86010),
        r = function (e) {
          var t = {
            knowledgeHub: function () {
              return (0, i.tZ)("img", {
                alt: "",
                "aria-hidden": "true",
                id: "knowledgeHub-pattern",
                src: "/assets/blobs/knowledgeHubBackgroundPattern.svg",
                tabIndex: -1,
              });
            },
          };
          if (t.hasOwnProperty(e)) return t[e];
        },
        l = n(94909),
        c = n.n(l),
        s = function (e) {
          var t = e.image,
            n = void 0 === t ? "default" : t,
            a = e.otherClasses,
            l = (0, o.Z)(c().wrapper, n, a),
            s = (0, o.Z)(c().blob, c()[n]),
            d = r(n) || null;
          return (0, i.tZ)("div", {
            className: l,
            "data-testid": "cu-header-blob",
            children: (0, i.tZ)("div", {
              className: s,
              children: d && (0, i.tZ)(d, {}),
            }),
          });
        },
        d = n(11163),
        u = n(5678),
        p = n(94202),
        g = n(34830),
        m = n(39329),
        h = n(57757),
        v = (0, a.createContext)({ id: "", current: "" }),
        f = n(66343),
        b = n(43887),
        k = n.n(b),
        C = function (e) {
          var t = e.icon,
            n = e.label;
          return (0, i.BX)("span", {
            className: k().label,
            children: [
              (0, i.tZ)(f.bv, { icon: t, iconWidth: 16, iconHeight: 16 }),
              (0, i.tZ)("span", { children: n }),
            ],
          });
        },
        _ = (0, a.createContext)({ baseUrl: "" }),
        Z = function () {
          var e = (0, a.useContext)(_).baseUrl;
          return (0, i.BX)("div", {
            className: (0, o.Z)("row", k().footer),
            children: [
              (0, i.tZ)(g.Z, {
                isReset: !0,
                source: "work space contact sales navigation",
                action: "open contact sales form",
                siteLocation: "nav",
                otherClasses: [k().link, k().footerLink],
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Contact Sales",
                clickedType: "nav button",
                children: (0, i.tZ)(C, {
                  icon: "comment",
                  label: "Contact Sales",
                }),
              }),
              (0, i.tZ)(m.ZP, {
                href: e + "/on-demand-demo",
                isReset: !0,
                otherClasses: [k().link, k().footerLink, "navigation__link"],
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Watch demo",
                clickedType: "nav link",
                children: (0, i.tZ)(C, { icon: "play", label: "Watch demo" }),
              }),
              (0, i.tZ)(m.ZP, {
                href: e + "/download",
                isReset: !0,
                otherClasses: [k().link, k().footerLink, "navigation__link"],
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Download Apps",
                clickedType: "nav link",
                children: (0, i.tZ)(C, {
                  icon: "mobile",
                  label: "Download apps",
                }),
              }),
            ],
          });
        };
      function y(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function N(e, t) {
        if (null == e) return {};
        var n,
          i,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              a = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (n = o[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (n = o[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var w = n(16912),
        M = function (e) {
          var t = e.id,
            n = e.current,
            a = e.children,
            r = e.otherClasses,
            l = (0, w.Z)(t);
          return (0, i.tZ)(v.Provider, {
            value: { id: l, current: n },
            children: (0, i.tZ)("div", {
              id: "".concat(l, "-dropdown"),
              className: (0, o.Z)("dropdown", r),
              "data-testid": "cu-navigation-v3-dropdown",
              children: a,
            }),
          });
        };
      (M.Trigger = function (e) {
        var t = e.children,
          n = e.setCurrent,
          r = e.activeClasses,
          l = e.otherClasses,
          c = N(e, ["children", "setCurrent", "activeClasses", "otherClasses"]),
          s = (0, a.useContext)(v),
          d = s.id,
          u = s.current,
          p = d === u,
          g = (0, o.Z)(p && r, l);
        return (0, i.tZ)(
          m.ZP,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" === typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                i.forEach(function (t) {
                  y(e, t, n[t]);
                });
            }
            return e;
          })({}, c, {
            "data-testid": "cu-navigation-v3-dropdown-trigger",
            "data-reset": !0,
            "aria-haspopup": !0,
            "aria-expanded": !!p,
            "aria-controls": "#".concat(d),
            isReset: !0,
            onClick: function () {
              return n(p ? "" : d);
            },
            otherClasses: g,
            children: t,
          })
        );
      }),
        (M.Body = function (e) {
          var t = e.children,
            n = e.otherClasses,
            r = (0, a.useContext)(v),
            l = r.id;
          return l !== r.current
            ? (0, i.tZ)(i.HY, {})
            : (0, i.BX)("div", {
                id: l,
                "data-testid": "cu-navigation-v3-dropdown-body",
                className: (0, o.Z)("column", k().body, n),
                children: [t, (0, i.tZ)(Z, {})],
              });
        }),
        (M.BodyMobile = function (e) {
          var t = e.children,
            n = e.otherClasses,
            r = (0, a.useContext)(v),
            l = r.id;
          return l !== r.current
            ? (0, i.tZ)(i.HY, {})
            : (0, i.tZ)("div", {
                id: l,
                "data-testid": "cu-navigation-v3-dropdown-body",
                className: (0, o.Z)("column", k().mobileBody, n),
                children: t,
              });
        });
      var T = M,
        V = n(95140),
        O = n(12111),
        I = n.n(O);
      function B(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              B(e, t, n[t]);
            });
        }
        return e;
      }
      function j(e, t) {
        if (null == e) return {};
        var n,
          i,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              a = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (n = o[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (n = o[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var S = function (e) {
        var t = e.children,
          n = e.defaultTabId;
        return (0, i.tZ)(V.fC, {
          orientation: "vertical",
          defaultValue: n,
          className: I().root,
          children: t,
        });
      };
      (S.TriggerList = function (e) {
        var t = e.ariaLabel,
          n = e.children;
        return (0, i.tZ)(V.aV, {
          "aria-label": t,
          className: I().list,
          children: n,
        });
      }),
        (S.Trigger = function (e) {
          var t = e.id,
            n = e.icon,
            a = e.label,
            o = j(e, ["id", "icon", "label"]);
          return (0, i.tZ)(V.xz, {
            value: t,
            asChild: !0,
            children: (0, i.tZ)(
              m.ZP,
              x({ isReset: !0, className: I().trigger }, o, {
                children: (0, i.BX)(i.HY, {
                  children: [
                    (0, i.tZ)(f.bv, {
                      icon: n,
                      iconWidth: 16,
                      iconHeight: 16,
                      otherClasses: I().triggerIcon,
                    }),
                    (0, i.tZ)("span", {
                      className: I().triggerLabel,
                      children: a,
                    }),
                    (0, i.tZ)(f.bv, {
                      icon: "caret",
                      iconWidth: 12,
                      iconHeight: 8,
                      otherClasses: I().triggerCaret,
                    }),
                  ],
                }),
              })
            ),
          });
        }),
        (S.Content = function (e) {
          var t = e.id,
            n = e.children;
          return (0, i.tZ)(V.VY, { value: t, children: n });
        }),
        (S.Container = function (e) {
          var t = e.children;
          return (0, i.tZ)("div", { className: I().container, children: t });
        });
      var P = S,
        L = n(52e3),
        X = n(44884),
        A = n.n(X);
      function z(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function H(e, t) {
        if (null == e) return {};
        var n,
          i,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              a = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (n = o[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (n = o[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var E = function (e) {
          var t = e.href,
            n = e.label,
            r = e.otherClasses,
            l = H(e, ["href", "label", "otherClasses"]),
            c = (0, a.useContext)(_).baseUrl,
            s = t.startsWith("/") ? c + t : t;
          return (0, i.tZ)(
            m.ZP,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (i = i.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  i.forEach(function (t) {
                    z(e, t, n[t]);
                  });
              }
              return e;
            })({}, l, {
              href: s,
              isReset: !0,
              otherClasses: (0, o.Z)(A().button, r),
              children: n,
            })
          );
        },
        R = E,
        D = n(24928),
        W = n(32561),
        G = n.n(W);
      function U(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function F(e, t) {
        if (null == e) return {};
        var n,
          i,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              a = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (n = o[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (n = o[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var Y = function (e) {
          var t = e.href,
            n = e.icon,
            r = e.label,
            l = (e.key, e.otherClasses),
            c = F(e, ["href", "icon", "label", "key", "otherClasses"]),
            s = (0, a.useContext)(_).baseUrl,
            d = t.startsWith("/") ? s + t : t;
          return (0, i.tZ)(
            D.Z,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (i = i.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  i.forEach(function (t) {
                    U(e, t, n[t]);
                  });
              }
              return e;
            })({}, c, {
              href: d,
              isReset: !0,
              otherClasses: (0, o.Z)("row", G().link, l),
              children: (0, i.BX)(i.HY, {
                children: [
                  (0, i.tZ)(f.bv, {
                    icon: n,
                    iconWidth: 17,
                    iconHeight: 17,
                    otherClasses: G().icon,
                  }),
                  (0, i.tZ)("span", { className: G().label, children: r }),
                ],
              }),
            })
          );
        },
        K = n(90077),
        q = n.n(K),
        J = function (e) {
          var t = e.body,
            n = e.title,
            a = e.otherClasses;
          return (0, i.BX)("div", {
            className: (0, o.Z)("column", q().extra, a),
            children: [
              (0, i.tZ)("div", {
                className: (0, o.Z)("column", q().extraTitle, "extraTitle"),
                children: n,
              }),
              (0, i.tZ)("div", {
                className: (0, o.Z)("column", q().extraBody, "extraBody"),
                children: t,
              }),
            ],
          });
        },
        Q = n(66076),
        $ = n.n(Q);
      function ee(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function te(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              te(e, t, n[t]);
            });
        }
        return e;
      }
      function ie(e, t) {
        if (null == e) return {};
        var n,
          i,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              a = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (n = o[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (n = o[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function ae(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var i,
                a,
                o = [],
                r = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(r = (i = n.next()).done) &&
                  (o.push(i.value), !t || o.length !== t);
                  r = !0
                );
              } catch (c) {
                (l = !0), (a = c);
              } finally {
                try {
                  r || null == n.return || n.return();
                } finally {
                  if (l) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return ee(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ee(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var oe = function (e) {
        var t = e.columns,
          n = e.gaps,
          a = e.children,
          r = e.otherClasses,
          l = ie(e, ["columns", "gaps", "children", "otherClasses"]),
          c = (function (e) {
            var t = Object.entries(e);
            return t.length
              ? t.map(function (e) {
                  var t = ae(e, 2),
                    n = t[0],
                    i = t[1],
                    a = "number" === typeof i;
                  return "default" === n && a
                    ? ["--grid-custom", "repeat(".concat(i, ", 1fr)")]
                    : a
                    ? [
                        "--grid-custom-".concat(n),
                        "repeat(".concat(i, ", 1fr)"),
                      ]
                    : "default" === n
                    ? ["--grid-custom", "".concat(i)]
                    : ["--grid-custom-".concat(n), "".concat(i)];
                })
              : [];
          })(t),
          s = n
            ? (function (e) {
                var t = Object.entries(e);
                return t.length
                  ? t.map(function (e) {
                      var t = ae(e, 2),
                        n = t[0],
                        i = t[1];
                      return "default" === n
                        ? ["--gap", "".concat(i)]
                        : ["--gap-".concat(n), "".concat(i)];
                    })
                  : [];
              })(n)
            : [],
          d = c.length || s.length ? Object.fromEntries(c.concat(s)) : {};
        return (0, i.tZ)("div", {
          "data-testid": "layout-grid",
          className: $().container,
          children: (0, i.tZ)(
            "div",
            ne({}, l, {
              className: (0, o.Z)($().grid, r),
              style: d,
              children: a,
            })
          ),
        });
      };
      var re = oe,
        le = n(70019),
        ce = n.n(le),
        se = function () {
          return (0, i.tZ)("div", {
            "data-testid": "nav-product-capabilities",
            "data-segment-location": "capabilities",
            children: (0, i.tZ)(oe, {
              columns: { default: 4, sm: 2, xs: 1 },
              gaps: { default: 0 },
              children: (0, i.BX)(i.HY, {
                children: [
                  (0, i.tZ)("div", {
                    className: ce().main,
                    children: (0, i.tZ)(oe, {
                      columns: { default: 3 },
                      otherClasses: ce().subgrid,
                      children: (0, i.BX)(i.HY, {
                        children: [
                          (0, i.BX)("div", {
                            className: (0, o.Z)("column", ce().group),
                            children: [
                              (0, i.tZ)(de, { label: "Project Management" }),
                              (0, i.tZ)(ue, {
                                links: [
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/tasks",
                                      icon: "checkbox-multi",
                                      label: "Tasks",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Tasks",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "project-management-tasks"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/portfolios",
                                      icon: "folder",
                                      label: "Portfolios",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Portfolios",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "project-management-portfolios"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/kanban-board",
                                      icon: "board",
                                      label: "Board views",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Board views",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "project-management-board-views"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/gantt-chart-view",
                                      icon: "view-timeline",
                                      label: "Gantt charts",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Gantt charts",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "project-management-roadmapping"
                                  ),
                                ],
                              }),
                            ],
                          }),
                          (0, i.BX)("div", {
                            className: (0, o.Z)("column", ce().group),
                            children: [
                              (0, i.tZ)(de, { label: "Product Development" }),
                              (0, i.tZ)(ue, {
                                links: [
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/sprints",
                                      icon: "circular-arrow",
                                      label: "Sprints",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Sprints",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "product-development-sprints"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/dashboards",
                                      icon: "chart",
                                      label: "Sprint Reports",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Sprint Reports",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "product-development-sprint-reports"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/kanban-board",
                                      icon: "view-cards",
                                      label: "Kanban",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Kanban",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "product-development-kanban"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/teams/software",
                                      icon: "rebase",
                                      label: "Roadmap & Backlog",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Roadmap & Backlog",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "product-development-backlog-management"
                                  ),
                                ],
                              }),
                            ],
                          }),
                          (0, i.BX)("div", {
                            className: (0, o.Z)("column", ce().group),
                            children: [
                              (0, i.tZ)(de, { label: "Knowledge Management" }),
                              (0, i.tZ)(ue, {
                                links: [
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/docs",
                                      icon: "notes",
                                      label: "Docs",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Docs",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "knowledge-management-docs"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/docs",
                                      icon: "link",
                                      label: "Wikis",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Wikis",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "knowledge-management-wikis"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/ai",
                                      icon: "clickup-ai",
                                      label: "Ask AI",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Ask AI",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "knowledge-management-ask-ai"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/connected-search",
                                      icon: "magnifier",
                                      label: "Connected search",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Connected search",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "knowledge-management-universal-search"
                                  ),
                                ],
                              }),
                            ],
                          }),
                          (0, i.BX)("div", {
                            className: (0, o.Z)("column", ce().group),
                            children: [
                              (0, i.tZ)(de, { label: "Resource Management" }),
                              (0, i.tZ)(ue, {
                                links: [
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/project-time-tracking",
                                      icon: "timer",
                                      label: "Time tracking",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Time tracking",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "resource-management-time-tracking"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/views",
                                      icon: "view-editor-role",
                                      label: "Workload views",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Workload views",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "resource-management-workload-views"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/goals",
                                      icon: "flag",
                                      label: "Goals",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Goals",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "resource-management-goals"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/dashboards",
                                      icon: "dashboard",
                                      label: "Dashboards",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Dashboards",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "resource-management-dashboard"
                                  ),
                                ],
                              }),
                            ],
                          }),
                          (0, i.BX)("div", {
                            className: (0, o.Z)("column", ce().group),
                            children: [
                              (0, i.tZ)(de, { label: "Collaboration" }),
                              (0, i.tZ)(ue, {
                                links: [
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/docs",
                                      icon: "notes",
                                      label: "Docs",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Docs",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "collaboration-docs"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/whiteboards",
                                      icon: "canvas",
                                      label: "Whiteboards",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Whiteboards",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "collaboration-whiteboards"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/chat",
                                      icon: "hash-contained",
                                      label: "Chat",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Chat",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "collaboration-chat"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/inbox",
                                      icon: "inbox",
                                      label: "Inbox",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Inbox",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "collaboration-inbox"
                                  ),
                                ],
                              }),
                            ],
                          }),
                          (0, i.BX)("div", {
                            className: (0, o.Z)("column", ce().group),
                            children: [
                              (0, i.tZ)(de, { label: "Workflows" }),
                              (0, i.tZ)(ue, {
                                links: [
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/automations",
                                      icon: "wand",
                                      label: "Automations",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Automations",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "workflows-automations"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/form-view",
                                      icon: "form",
                                      label: "Forms",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Forms",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "workflows-forms"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/custom-fields",
                                      icon: "input",
                                      label: "Custom fields",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Custom fields",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "workflows-custom-fields"
                                  ),
                                  (0, i.tZ)(
                                    Y,
                                    {
                                      href: "/features/custom-task-statuses",
                                      icon: "dropdown",
                                      label: "Custom statuses",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Custom statuses",
                                      clickedType: "nav link",
                                      location: "nav > product > capabilities",
                                    },
                                    "workflows-custom-statuses"
                                  ),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, i.tZ)(J, {
                    title: (0, i.BX)("div", {
                      className: (0, o.Z)("column", ce().extraTitle),
                      children: [
                        (0, i.tZ)(de, { label: "Powered by" }),
                        (0, i.tZ)(h.Z, {
                          logo: "clickup-brain-light",
                          override: { width: 131, height: 41 },
                          overrideLazyload: !0,
                          otherClasses: ce().extraLogo,
                        }),
                      ],
                    }),
                    body: (0, i.BX)(i.HY, {
                      children: [
                        (0, i.BX)("ul", {
                          role: "list",
                          className: (0, o.Z)("column", ce().extraList),
                          children: [
                            (0, i.BX)("li", {
                              children: [
                                (0, i.tZ)(L.Z, {
                                  imageProps: {
                                    src: "data:image/svg+xml,%3csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.66726 9.84451C4.93398 11.3 6.216 13.0081 6.216 13.0081C6.216 13.0081 7.36794 10.6334 9.46732 7.9667C11.7286 5.0944 13.3463 3.96795 13.3463 3.96795' stroke='%23FA12E3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e",
                                    alt: "",
                                    width: 16,
                                    height: 17,
                                  },
                                  lazyload: !0,
                                }),
                                (0, i.tZ)("span", {
                                  children: "Generate standup",
                                }),
                              ],
                            }),
                            (0, i.BX)("li", {
                              children: [
                                (0, i.tZ)(L.Z, {
                                  imageProps: {
                                    src: "data:image/svg+xml,%3csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.66726 9.84451C4.93398 11.3 6.216 13.0081 6.216 13.0081C6.216 13.0081 7.36794 10.6334 9.46732 7.9667C11.7286 5.0944 13.3463 3.96795 13.3463 3.96795' stroke='%23FA12E3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e",
                                    alt: "",
                                    width: 16,
                                    height: 17,
                                  },
                                  lazyload: !0,
                                }),
                                (0, i.tZ)("span", {
                                  children: "Summarise tasks",
                                }),
                              ],
                            }),
                            (0, i.BX)("li", {
                              children: [
                                (0, i.tZ)(L.Z, {
                                  imageProps: {
                                    src: "data:image/svg+xml,%3csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.66726 9.84451C4.93398 11.3 6.216 13.0081 6.216 13.0081C6.216 13.0081 7.36794 10.6334 9.46732 7.9667C11.7286 5.0944 13.3463 3.96795 13.3463 3.96795' stroke='%23FA12E3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e",
                                    alt: "",
                                    width: 16,
                                    height: 17,
                                  },
                                  lazyload: !0,
                                }),
                                (0, i.tZ)("span", { children: "Spark ideas" }),
                              ],
                            }),
                            (0, i.BX)("li", {
                              children: [
                                (0, i.tZ)(L.Z, {
                                  imageProps: {
                                    src: "data:image/svg+xml,%3csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.66726 9.84451C4.93398 11.3 6.216 13.0081 6.216 13.0081C6.216 13.0081 7.36794 10.6334 9.46732 7.9667C11.7286 5.0944 13.3463 3.96795 13.3463 3.96795' stroke='%23FA12E3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e",
                                    alt: "",
                                    width: 16,
                                    height: 17,
                                  },
                                  lazyload: !0,
                                }),
                                (0, i.tZ)("span", {
                                  children: "Generate plans",
                                }),
                              ],
                            }),
                            (0, i.BX)("li", {
                              children: [
                                (0, i.tZ)(L.Z, {
                                  imageProps: {
                                    src: "data:image/svg+xml,%3csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.66726 9.84451C4.93398 11.3 6.216 13.0081 6.216 13.0081C6.216 13.0081 7.36794 10.6334 9.46732 7.9667C11.7286 5.0944 13.3463 3.96795 13.3463 3.96795' stroke='%23FA12E3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e",
                                    alt: "",
                                    width: 16,
                                    height: 17,
                                  },
                                  lazyload: !0,
                                }),
                                (0, i.tZ)("span", {
                                  children: "Enhance writing",
                                }),
                              ],
                            }),
                            (0, i.BX)("li", {
                              children: [
                                (0, i.tZ)(L.Z, {
                                  imageProps: {
                                    src: "data:image/svg+xml,%3csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.66726 9.84451C4.93398 11.3 6.216 13.0081 6.216 13.0081C6.216 13.0081 7.36794 10.6334 9.46732 7.9667C11.7286 5.0944 13.3463 3.96795 13.3463 3.96795' stroke='%23FA12E3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e",
                                    alt: "",
                                    width: 16,
                                    height: 17,
                                  },
                                  lazyload: !0,
                                }),
                                (0, i.tZ)("span", {
                                  children: "Create reports",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.tZ)(R, {
                          href: "/ai",
                          label: "Learn More",
                          otherClasses: ce().extraButton,
                          sectionModelName: "CuNavigationV3",
                          buttonClicked: "Learn More",
                          clickedType: "nav link",
                          location: "nav > product > capabilities",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        };
      function de(e) {
        var t = e.label;
        return (0, i.tZ)("p", { className: ce().title, children: t });
      }
      function ue(e) {
        var t = e.links;
        return (0, i.tZ)("ul", {
          role: "list",
          className: (0, o.Z)("column", ce().list),
          children: t.map(function (e, t) {
            return (0,
            i.tZ)("li", { children: e }, e && "object" === typeof e && "key" in e ? e.key : "capability-".concat(Math.random(), "-").concat(t));
          }),
        });
      }
      var pe = n(74925),
        ge = n.n(pe),
        me = n(97194),
        he = n.n(me);
      function ve(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function fe(e, t) {
        if (null == e) return {};
        var n,
          i,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              a = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (n = o[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (n = o[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function be(e) {
        var t = e.href,
          n = e.label,
          a = e.tag,
          r = e.otherClasses,
          l = fe(e, ["href", "label", "tag", "otherClasses"]);
        return (0, i.tZ)(
          m.ZP,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" === typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                i.forEach(function (t) {
                  ve(e, t, n[t]);
                });
            }
            return e;
          })({}, l, {
            href: t,
            isReset: !0,
            otherClasses: (0, o.Z)("row", he().extraLink, r),
            children: (0, i.BX)(i.HY, {
              children: [
                (0, i.tZ)("span", { className: he().extraTag, children: a }),
                (0, i.tZ)("span", { children: n }),
              ],
            }),
          })
        );
      }
      var ke = function () {
          return (0, i.tZ)("div", {
            "data-testid": "nav-product-all-features",
            "data-segment-location": "all-features",
            children: (0, i.tZ)(re, {
              columns: { default: 4, sm: 2, xs: 1 },
              gaps: { default: 0 },
              children: (0, i.BX)(i.HY, {
                children: [
                  (0, i.BX)("div", {
                    className: (0, o.Z)("column", he().main),
                    children: [
                      (0, i.BX)(re, {
                        columns: { default: 4 },
                        otherClasses: he().subgrid,
                        children: [
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/tasks",
                              icon: "checkbox-multi",
                              label: "Tasks",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Tasks",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-tasks"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/whiteboards",
                              icon: "canvas",
                              label: "Whiteboards",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Whiteboards",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-whiteboards"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/automations",
                              icon: "wand",
                              label: "Automations",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Automations",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-automations"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/form-view",
                              icon: "form",
                              label: "Forms",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Forms",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-form-view"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/docs",
                              icon: "notes",
                              label: "Docs",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Docs",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-docs"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/dashboards",
                              icon: "chart",
                              label: "Dashboards",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Dashboards",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-dashboard"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/calendar-view",
                              icon: "calendar",
                              label: "Calendar view",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Calendar view",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-calandar-view"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/kanban-board",
                              icon: "view-cards",
                              label: "Kanban view",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Kanban view",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-kanban-view"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/chat",
                              icon: "hash-contained",
                              label: "Chat",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Chat",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-chat-view"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/gantt-chart-view",
                              icon: "view-timeline",
                              label: "Gantt",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Gantt",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-gantt-chart-view"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/goals",
                              icon: "flag",
                              label: "Goals",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Goals",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-goals"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/sprints",
                              icon: "calendar-day",
                              label: "Sprints",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Sprints",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-sprints"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/ai",
                              icon: "clickup-ai",
                              label: "AI",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "AI",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-ai"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "https://help.clickup.com/hc/en-us/articles/6328033402007-How-to-Add-Proofing-to-Your-Workflow",
                              icon: "draft",
                              label: "Proofing",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Proofing",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-proofing"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/milestones",
                              icon: "calendar-upcoming",
                              label: "Milestones",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Milestones",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-milestones"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/clips",
                              icon: "play",
                              label: "Clips",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Clips",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-clip"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/mind-maps",
                              icon: "eye",
                              label: "Mind maps",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Mind maps",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-mind-maps"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/email-project-management",
                              icon: "envelope",
                              label: "Email",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Email",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-portfolios"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/project-time-tracking",
                              icon: "timer",
                              label: "Time tracking",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Time tracking",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-time-tracking"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/connected-search",
                              icon: "magnifier",
                              label: "Connected search",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Connected search",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-universal-search"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/custom-fields",
                              icon: "input",
                              label: "Custom fields",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Custom fields",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-custom-fields"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "https://help.clickup.com/hc/en-us/articles/6304488850967-Intro-to-Pulse",
                              icon: "heart",
                              label: "Pulse",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Pulse",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-pulse"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/time-estimates",
                              icon: "calculator",
                              label: "Time estimates",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Time estimates",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-time-estimates"
                          ),
                          (0, i.tZ)(
                            Y,
                            {
                              href: "/features/reminders",
                              icon: "bell",
                              label: "Reminders",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Reminders",
                              clickedType: "nav link",
                              location: "nav > product > all features",
                            },
                            "project-management-reminders"
                          ),
                        ],
                      }),
                      (0, i.tZ)(R, {
                        href: "/features",
                        label: "See all features",
                        sectionModelName: "CuNavigationV3",
                        buttonClicked: "See all features",
                        clickedType: "nav link",
                        location: "nav > product > all features",
                      }),
                    ],
                  }),
                  (0, i.tZ)(J, {
                    title: "Just released",
                    body: (0, i.BX)(i.HY, {
                      children: [
                        (0, i.BX)("ul", {
                          role: "list",
                          className: (0, o.Z)("column", he().extraList),
                          children: [
                            (0, i.tZ)("li", {
                              children: (0, i.tZ)(be, {
                                href: "/features/chat",
                                tag: "New",
                                label: "Chat",
                                sectionModelName: "CuNavigationV3",
                                buttonClicked: "Chat (new)",
                                clickedType: "nav link",
                                location: "nav > product > all features",
                              }),
                            }),
                            (0, i.tZ)("li", {
                              children: (0, i.tZ)(be, {
                                href: "/features/knowledge-management",
                                tag: "New",
                                label: "Knowledge management",
                                sectionModelName: "CuNavigationV3",
                                buttonClicked: "Knowledge management (new)",
                                clickedType: "nav link",
                                location: "nav > product > all features",
                              }),
                            }),
                            (0, i.tZ)("li", {
                              children: (0, i.tZ)(be, {
                                href: "/features/whiteboards",
                                tag: "New",
                                label: "Whiteboards 3.0",
                                sectionModelName: "CuNavigationV3",
                                buttonClicked: "Whiteboards 3.0 (new)",
                                clickedType: "nav link",
                                location: "nav > product > all features",
                              }),
                            }),
                            (0, i.tZ)("li", {
                              children: (0, i.tZ)(be, {
                                href: "/download",
                                tag: "New",
                                label: "Mobile 3.0",
                                sectionModelName: "CuNavigationV3",
                                buttonClicked: "Mobile 3.0 (new)",
                                clickedType: "nav link",
                                location: "nav > product > all features",
                              }),
                            }),
                          ],
                        }),
                        (0, i.tZ)(R, {
                          href: "https://dev-doc.clickup.com/333/d/ad-1002505/2024-release-notes/ad-3218801/2024-release-notes",
                          label: "See changelog",
                          sectionModelName: "CuNavigationV3",
                          buttonClicked: "See changelog",
                          clickedType: "nav link",
                          location: "nav > product > all features",
                        }),
                      ],
                    }),
                    otherClasses: he().extra,
                  }),
                ],
              }),
            }),
          });
        },
        Ce = n(82794),
        _e = n(15991),
        Ze = n.n(_e);
      function ye(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              ye(e, t, n[t]);
            });
        }
        return e;
      }
      function we(e, t) {
        if (null == e) return {};
        var n,
          i,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              a = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (n = o[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (n = o[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var Me = function (e) {
          var t = e.children,
            n = e.href,
            r = e.label,
            l = e.otherClasses,
            c = we(e, ["children", "href", "label", "otherClasses"]),
            s = (0, a.useContext)(_).baseUrl,
            d = n.startsWith("/") ? s + n : n;
          return (0, i.tZ)(
            D.Z,
            Ne({}, c, {
              href: d,
              isReset: !0,
              otherClasses: (0, o.Z)("row", Ze().link, l),
              children: (0, i.BX)(i.HY, {
                children: [
                  (0, i.tZ)("span", { className: Ze().icon, children: t }),
                  (0, i.tZ)("span", { className: Ze().label, children: r }),
                ],
              }),
            })
          );
        },
        Te = function (e) {
          var t = e.href,
            n = e.icon,
            r = e.label,
            l = (e.key, e.otherClasses),
            c = we(e, ["href", "icon", "label", "key", "otherClasses"]),
            s = (0, a.useContext)(_).baseUrl,
            d = t.startsWith("/") ? s + t : t;
          return (0, i.tZ)(
            D.Z,
            Ne({}, c, {
              href: d,
              isReset: !0,
              otherClasses: (0, o.Z)("row", Ze().link, l),
              children: (0, i.BX)(i.HY, {
                children: [
                  (0, i.tZ)(Ce.Z, {
                    icon: n,
                    size: 17,
                    otherClasses: Ze().icon,
                  }),
                  (0, i.tZ)("span", { className: Ze().label, children: r }),
                ],
              }),
            })
          );
        },
        Ve = Te,
        Oe = n(82155),
        Ie = n.n(Oe),
        Be = function () {
          return (0, i.tZ)("div", {
            "data-testid": "nav-product-integrations",
            "data-segment-location": "integrations",
            children: (0, i.tZ)(oe, {
              columns: { default: 4, sm: 2, xs: 1 },
              gaps: { default: 0 },
              children: (0, i.BX)(i.HY, {
                children: [
                  (0, i.BX)("div", {
                    className: (0, o.Z)("column", Ie().main),
                    children: [
                      (0, i.tZ)(oe, {
                        columns: { default: 3 },
                        otherClasses: Ie().subgrid,
                        children: (0, i.BX)(i.HY, {
                          children: [
                            (0, i.tZ)(Te, {
                              href: "https://clickup.com/api/",
                              icon: "clickup-lg",
                              label: "ClickUp API",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "ClickUp API",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Te, {
                              href: "/integrations/slack",
                              icon: "slack",
                              label: "Slack",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Slack",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Te, {
                              href: "https://help.clickup.com/hc/en-us/articles/6310954639255-Import-from-JIRA",
                              icon: "jira",
                              label: "Jira",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Jira",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Te, {
                              href: "/integrations/salesforce",
                              icon: "salesforce",
                              label: "Salesforce",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Salesforce",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Te, {
                              href: "https://clickup.com/integrations/cloud-storage-google-drive",
                              icon: "gsuite",
                              label: "Gsuite",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Gsuite",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Te, {
                              href: "https://help.clickup.com/hc/en-us/articles/6305793042455-Embed-content-in-ClickUp",
                              icon: "figma",
                              label: "Figma",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Figma",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Te, {
                              href: "/integrations/hubspot",
                              icon: "hubspot",
                              label: "Hubspot",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Hubspot",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Te, {
                              href: "/integrations/dropbox-cloud-storage",
                              icon: "dropbox",
                              label: "Dropbox",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Dropbox",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Te, {
                              href: "/integrations/github",
                              icon: "github-black",
                              label: "Github",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Github",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Te, {
                              href: "/integrations/zendesk",
                              icon: "zendesk",
                              label: "Zendesk",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Zendesk",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Te, {
                              href: "/integrations/zoom",
                              icon: "zoom",
                              label: "Zoom",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Zoom",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Te, {
                              href: "/integrations/gitlab",
                              icon: "gitlab",
                              label: "Gitlab",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Gitlab",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Te, {
                              href: "/zapier",
                              icon: "zapier",
                              label: "Zapier",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Zapier",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Te, {
                              href: "https://help.clickup.com/hc/en-us/articles/6305793042455-Embed-content-in-ClickUp",
                              icon: "loom",
                              label: "Loom",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Loom",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Te, {
                              href: "/integrations/bitbucket",
                              icon: "bitbucket",
                              label: "Bitbucket",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Bitbucket",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Me, {
                              href: "/integrations/make",
                              label: "Make",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Make",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                              children: (0, i.tZ)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "17",
                                height: "17",
                                viewBox: "0 0 512 512",
                                style: { transform: "translateY(3px)" },
                                children: (0, i.BX)("g", {
                                  id: "Make-App-Icon-Circle",
                                  transform: "translate(3757 -1767)",
                                  children: [
                                    (0, i.tZ)("circle", {
                                      id: "Ellipse_10",
                                      "data-name": "Ellipse 10",
                                      cx: "256",
                                      cy: "256",
                                      r: "256",
                                      transform: "translate(-3757 1767)",
                                      fill: "#6d00cc",
                                    }),
                                    (0, i.tZ)("path", {
                                      id: "Path_141560",
                                      "data-name": "Path 141560",
                                      d: "M244.78,14.544a7.187,7.187,0,0,0-7.186,7.192V213.927a7.19,7.19,0,0,0,7.186,7.192h52.063a7.187,7.187,0,0,0,7.186-7.192V21.736a7.183,7.183,0,0,0-7.186-7.192ZM92.066,17.083,5.77,188.795a7.191,7.191,0,0,0,3.192,9.654l46.514,23.379a7.184,7.184,0,0,0,9.654-3.2l86.3-171.711a7.184,7.184,0,0,0-3.2-9.654L101.719,13.886a7.2,7.2,0,0,0-9.654,3.2m72.592.614L127.731,204.876a7.189,7.189,0,0,0,5.632,8.442l51.028,10.306a7.2,7.2,0,0,0,8.481-5.665L229.8,30.786a7.19,7.19,0,0,0-5.637-8.442L173.133,12.038a7.391,7.391,0,0,0-1.427-.144,7.194,7.194,0,0,0-7.048,5.8",
                                      transform:
                                        "translate(-3676.356 1905.425)",
                                      fill: "#fff",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, i.tZ)(Te, {
                              href: "/integrations/microsoft-teams",
                              icon: "ms-teams",
                              label: "Microsoft Teams",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Microsoft Teams",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Te, {
                              href: "/integrations/sentry",
                              icon: "sentry",
                              label: "Sentry",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Sentry",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Te, {
                              href: "https://help.clickup.com/hc/en-us/articles/6311084821015-Importing-from-Trello",
                              icon: "trello",
                              label: "Trello",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Trello",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                            }),
                            (0, i.tZ)(Me, {
                              href: "https://clickup.com/integrations/calendly",
                              label: "Calendly",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Calendly",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                              children: (0, i.BX)("svg", {
                                width: 17,
                                height: 17,
                                viewBox: "0 0 525.8 535.73",
                                xmlns: "http://www.w3.org/2000/svg",
                                style: { transform: "translateY(3px)" },
                                children: [
                                  (0, i.tZ)("path", {
                                    d: "m443.74 337.62-27.16 47.05a139.52 139.52 0 0 1 -120.82 69.75h-54.33a139.52 139.52 0 0 1 -120.82-69.75l-27.16-47.05a139.52 139.52 0 0 1 0-139.51l27.16-47.05a139.53 139.53 0 0 1 120.82-69.76h54.33a139.53 139.53 0 0 1 120.82 69.76l27.16 47.05a139.23 139.23 0 0 1 8.55 17.55c0 .12.09.23.13.35a102.15 102.15 0 0 0 44.33-18.24c0-.14-.08-.28-.13-.43a237.8 237.8 0 0 0 -33.29-67.58 240.67 240.67 0 0 0 -52-53.48 239.3 239.3 0 0 0 -312.68 360.8 239.43 239.43 0 0 0 398-98.69c.05-.15.09-.29.13-.43a102.15 102.15 0 0 0 -44.33-18.24c0 .12-.09.23-.13.35a139.23 139.23 0 0 1 -8.58 17.55z",
                                    fill: "none",
                                  }),
                                  (0, i.BX)("g", {
                                    fill: "#006bff",
                                    children: [
                                      (0, i.tZ)("path", {
                                        d: "m360.4 347.4c-17 15.09-38.21 33.87-76.78 33.87h-23c-27.88 0-53.23-10.12-71.37-28.49-17.72-17.94-27.48-42.5-27.48-69.16v-31.51c0-26.66 9.76-51.22 27.48-69.16 18.14-18.37 43.49-28.49 71.37-28.49h23c38.57 0 59.76 18.78 76.78 33.87 17.65 15.65 32.9 29.16 73.52 29.16a116.05 116.05 0 0 0 18.5-1.48c0-.12-.08-.23-.13-.35a139.23 139.23 0 0 0 -8.55-17.55l-27.16-47.05a139.53 139.53 0 0 0 -120.82-69.76h-54.33a139.53 139.53 0 0 0 -120.82 69.76l-27.16 47.05a139.52 139.52 0 0 0 0 139.51l27.16 47.05a139.52 139.52 0 0 0 120.82 69.75h54.33a139.52 139.52 0 0 0 120.82-69.75l27.16-47.05a139.23 139.23 0 0 0 8.55-17.55c0-.12.09-.23.13-.35a116.05 116.05 0 0 0 -18.5-1.48c-40.62 0-55.87 13.51-73.52 29.16z",
                                      }),
                                      (0, i.tZ)("path", {
                                        d: "m283.62 183h-23c-42.42 0-70.3 30.3-70.3 69.09v31.51c0 38.79 27.88 69.09 70.3 69.09h23c61.82 0 57-63 150.3-63a144.19 144.19 0 0 1 26.37 2.41 139.36 139.36 0 0 0 0-48.46 143.32 143.32 0 0 1 -26.37 2.42c-93.33-.01-88.48-63.06-150.3-63.06z",
                                      }),
                                      (0, i.tZ)("path", {
                                        d: "m513.91 315.13a130.21 130.21 0 0 0 -53.62-23c0 .16-.05.32-.08.47a138.46 138.46 0 0 1 -7.79 27.16 102.15 102.15 0 0 1 44.33 18.24c0 .14-.08.28-.13.43a237.8 237.8 0 0 1 -33.29 67.57 240.67 240.67 0 0 1 -52 53.48 239.3 239.3 0 0 1 -312.68-360.83 239.43 239.43 0 0 1 398 98.69c.05.15.09.29.13.43a102.15 102.15 0 0 1 -44.36 18.23 139.36 139.36 0 0 1 7.8 27.18c0 .15 0 .3.07.44a129.94 129.94 0 0 0 53.62-23c15.29-11.31 12.33-24.09 10-31.65-33.69-109.45-135.58-188.97-256.05-188.97-147.93 0-267.86 119.93-267.86 267.86s119.93 267.87 267.86 267.87c120.47 0 222.36-79.52 256-188.94 2.38-7.56 5.34-20.34-9.95-31.66z",
                                      }),
                                    ],
                                  }),
                                  (0, i.tZ)("path", {
                                    d: "m452.42 216a116.05 116.05 0 0 1 -18.5 1.48c-40.62 0-55.87-13.51-73.52-29.16-17-15.09-38.21-33.87-76.78-33.87h-23c-27.88 0-53.23 10.12-71.37 28.49-17.72 17.94-27.48 42.5-27.48 69.16v31.51c0 26.66 9.76 51.22 27.48 69.16 18.14 18.37 43.49 28.49 71.37 28.49h23c38.57 0 59.76-18.78 76.78-33.87 17.65-15.65 32.9-29.16 73.52-29.16a116.05 116.05 0 0 1 18.5 1.48 138.46 138.46 0 0 0 7.79-27.16c0-.15.06-.31.08-.47a144.19 144.19 0 0 0 -26.37-2.41c-93.33 0-88.48 63-150.3 63h-23c-42.42 0-70.3-30.3-70.3-69.09v-31.47c0-38.79 27.88-69.09 70.3-69.09h23c61.82 0 57 63 150.3 63a143.32 143.32 0 0 0 26.37-2.42c0-.14 0-.29-.07-.44a139.36 139.36 0 0 0 -7.8-27.16z",
                                    fill: "#0ae9ef",
                                  }),
                                  (0, i.tZ)("path", {
                                    d: "m452.42 216a116.05 116.05 0 0 1 -18.5 1.48c-40.62 0-55.87-13.51-73.52-29.16-17-15.09-38.21-33.87-76.78-33.87h-23c-27.88 0-53.23 10.12-71.37 28.49-17.72 17.94-27.48 42.5-27.48 69.16v31.51c0 26.66 9.76 51.22 27.48 69.16 18.14 18.37 43.49 28.49 71.37 28.49h23c38.57 0 59.76-18.78 76.78-33.87 17.65-15.65 32.9-29.16 73.52-29.16a116.05 116.05 0 0 1 18.5 1.48 138.46 138.46 0 0 0 7.79-27.16c0-.15.06-.31.08-.47a144.19 144.19 0 0 0 -26.37-2.41c-93.33 0-88.48 63-150.3 63h-23c-42.42 0-70.3-30.3-70.3-69.09v-31.47c0-38.79 27.88-69.09 70.3-69.09h23c61.82 0 57 63 150.3 63a143.32 143.32 0 0 0 26.37-2.42c0-.14 0-.29-.07-.44a139.36 139.36 0 0 0 -7.8-27.16z",
                                    fill: "#0ae9ef",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.tZ)(Me, {
                              href: "/integrations/toggl",
                              label: "Toggl",
                              sectionModelName: "CuNavigationV3",
                              buttonClicked: "Toggl",
                              clickedType: "nav link",
                              location: "nav > product > integrations",
                              otherClasses: Ie().toggl,
                              children: (0, i.tZ)(L.Z, {
                                imageProps: {
                                  src: "https://images.ctfassets.net/w8fc6tgspyjz/2OKjZR78d3avP178XXLEnU/2507a838d5a76a918091391247e2df77/toggl.png?fm=webp&w=34&h=34",
                                  height: 17,
                                  width: 17,
                                  alt: "Toggl",
                                },
                                lazyload: !0,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, i.tZ)(E, {
                        href: "/integrations",
                        label: "See all integrations",
                        sectionModelName: "CuNavigationV3",
                        buttonClicked: "See all integrations",
                        clickedType: "nav link",
                        location: "nav > product > integrations",
                      }),
                    ],
                  }),
                  (0, i.tZ)(J, {
                    otherClasses: Ie().extra,
                    title: "Import",
                    body: (0, i.tZ)("div", {
                      className: (0, o.Z)("column", Ie().extraList),
                      children: (0, i.BX)(i.HY, {
                        children: [
                          (0, i.tZ)(Te, {
                            href: "/import",
                            icon: "excel",
                            label: "CSV/Excel",
                            sectionModelName: "CuNavigationV3",
                            buttonClicked: "CSV/Excel",
                            clickedType: "nav link",
                            location: "nav > product > integrations",
                          }),
                          (0, i.tZ)(Te, {
                            href: "https://help.clickup.com/hc/en-us/articles/6311084821015-Importing-from-Trello",
                            icon: "trello",
                            label: "Trello",
                            sectionModelName: "CuNavigationV3",
                            buttonClicked: "Trello",
                            clickedType: "nav link",
                            location: "nav > product > integrations",
                          }),
                          (0, i.tZ)(Te, {
                            href: "https://help.clickup.com/hc/en-us/articles/6310954639255-Import-from-JIRA",
                            icon: "jira",
                            label: "Jira",
                            sectionModelName: "CuNavigationV3",
                            buttonClicked: "Jira",
                            clickedType: "nav link",
                            location: "nav > product > integrations",
                          }),
                          (0, i.tZ)(Te, {
                            href: "https://help.clickup.com/hc/en-us/articles/6311064163479-Importing-from-Asana",
                            icon: "asana",
                            label: "Asana",
                            sectionModelName: "CuNavigationV3",
                            buttonClicked: "Asana",
                            clickedType: "nav link",
                            location: "nav > product > integrations",
                          }),
                          (0, i.tZ)(Te, {
                            href: "https://help.clickup.com/hc/en-us/articles/6311012229527-Import-from-Monday-com",
                            icon: "monday",
                            label: "Monday",
                            sectionModelName: "CuNavigationV3",
                            buttonClicked: "Monday",
                            clickedType: "nav link",
                            location: "nav > product > integrations",
                          }),
                          (0, i.tZ)(Te, {
                            href: "/import",
                            icon: "notion",
                            label: "Notion",
                            sectionModelName: "CuNavigationV3",
                            buttonClicked: "Notion",
                            clickedType: "nav link",
                            location: "nav > product > integrations",
                          }),
                          (0, i.tZ)(Te, {
                            href: "https://help.clickup.com/hc/en-us/articles/6311053435159-Import-from-Wrike",
                            icon: "wrike",
                            label: "Wrike",
                            sectionModelName: "CuNavigationV3",
                            buttonClicked: "Wrike",
                            clickedType: "nav link",
                            location: "nav > product > integrations",
                          }),
                          (0, i.tZ)(Te, {
                            href: "/import",
                            icon: "smartsheet",
                            label: "Smartsheet",
                            sectionModelName: "CuNavigationV3",
                            buttonClicked: "Smartsheet",
                            clickedType: "nav link",
                            location: "nav > product > integrations",
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        xe = function (e) {
          var t = e.current,
            n = e.setCurrent;
          return (0, i.BX)(T, {
            id: "nav-product",
            current: t,
            "data-segment-location": "product",
            children: [
              (0, i.tZ)(T.Trigger, {
                setCurrent: n,
                activeClasses: ge().triggerHover,
                otherClasses: ge().trigger,
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Product",
                clickedType: "nav link",
                location: "nav",
                children: (0, i.BX)("span", {
                  className: ge().triggerLabel,
                  children: [
                    (0, i.tZ)("span", { children: "Product" }),
                    (0, i.tZ)(f.bv, {
                      icon: "caret",
                      iconWidth: 10,
                      iconHeight: 10,
                    }),
                  ],
                }),
              }),
              (0, i.tZ)(T.Body, {
                children: (0, i.tZ)(P, {
                  defaultTabId: "product-1",
                  children: (0, i.BX)(i.HY, {
                    children: [
                      (0, i.BX)(P.TriggerList, {
                        ariaLabel: "Product Tabs",
                        children: [
                          (0, i.tZ)(P.Trigger, {
                            id: "product-1",
                            icon: "bolt",
                            label: "Capabilities",
                            sectionModelName: "CuNavigationV3",
                            buttonClicked: "Capabilities",
                            clickedType: "nav link",
                            location: "nav > product",
                          }),
                          (0, i.tZ)(P.Trigger, {
                            id: "product-2",
                            icon: "apps",
                            label: "All features",
                            sectionModelName: "CuNavigationV3",
                            buttonClicked: "All features",
                            clickedType: "nav link",
                            location: "nav > product",
                          }),
                          (0, i.tZ)(P.Trigger, {
                            id: "product-3",
                            icon: "puzzle",
                            label: "Integrations",
                            sectionModelName: "CuNavigationV3",
                            buttonClicked: "Integrations",
                            clickedType: "nav link",
                            location: "nav > product",
                          }),
                        ],
                      }),
                      (0, i.tZ)(P.Container, {
                        children: (0, i.BX)(i.HY, {
                          children: [
                            (0, i.tZ)(P.Content, {
                              id: "product-1",
                              children: (0, i.tZ)(se, {}),
                            }),
                            (0, i.tZ)(P.Content, {
                              id: "product-2",
                              children: (0, i.tZ)(ke, {}),
                            }),
                            (0, i.tZ)(P.Content, {
                              id: "product-3",
                              children: (0, i.tZ)(Be, {}),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        je = n(78527),
        Se = n.n(je);
      function Pe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Le(e, t) {
        if (null == e) return {};
        var n,
          i,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              a = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (n = o[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (n = o[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var Xe = function (e) {
          var t = e.icon,
            n = e.title,
            a = e.children,
            r = e.href,
            l = e.isVertical,
            c = void 0 === l || l,
            s = e.otherClasses,
            d = Le(e, [
              "icon",
              "title",
              "children",
              "href",
              "isVertical",
              "otherClasses",
            ]);
          return (0, i.tZ)(
            D.Z,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (i = i.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  i.forEach(function (t) {
                    Pe(e, t, n[t]);
                  });
              }
              return e;
            })({}, d, {
              isReset: !0,
              href: r,
              otherClasses: (0, o.Z)(c ? "column" : "row", Se().link, s),
              children: (0, i.BX)(i.HY, {
                children: [
                  (0, i.BX)("div", {
                    "data-title": !0,
                    className: (0, o.Z)(c ? "row" : "column", Se().title),
                    children: [
                      !!t &&
                        (0, i.tZ)(f.bv, {
                          icon: t,
                          iconWidth: 18,
                          iconHeight: 18,
                        }),
                      (0, i.tZ)("span", { children: n }),
                    ],
                  }),
                  (0, i.tZ)("div", {
                    "data-body": !0,
                    className: (0, o.Z)("column", Se().body, "CardLink__body"),
                    children: a,
                  }),
                ],
              }),
            })
          );
        },
        Ae = n(48449),
        ze = n.n(Ae);
      function He(e) {
        var t = e.description;
        return (0, i.tZ)("div", {
          className: (0, o.Z)("column", ze().description),
          children: t,
        });
      }
      var Ee = n(30409),
        Re = n.n(Ee),
        De = function () {
          return (0, i.BX)(re, {
            columns: { default: 3 },
            otherClasses: Re().main,
            "data-segment-location": "team",
            children: [
              (0, i.tZ)(Xe, {
                icon: "view-timeline",
                title: "Project management",
                href: "/teams/project-management",
                otherClasses: Re().link,
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Project management",
                clickedType: "nav link",
                location: "nav > solutions > team",
                children: (0, i.tZ)(He, {
                  description:
                    "Empower teams to achieve goals with efficient, clear project planning.",
                }),
              }),
              (0, i.tZ)(Xe, {
                icon: "view-cards",
                title: "Product development",
                href: "/teams/software",
                otherClasses: Re().link,
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Product development",
                clickedType: "nav link",
                location: "nav > solutions > team",
                children: (0, i.tZ)(He, {
                  description:
                    "Accelerate innovation for faster, effective team-led product launches.",
                }),
              }),
              (0, i.tZ)(Xe, {
                icon: "opjects-reorder",
                title: "Operations",
                href: "/teams/operations",
                otherClasses: Re().link,
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Operations",
                clickedType: "nav link",
                location: "nav > solutions > team",
                children: (0, i.tZ)(He, {
                  description:
                    "Optimize workflows for increased team productivity and efficiency.",
                }),
              }),
              (0, i.tZ)(Xe, {
                icon: "code",
                title: "IT",
                href: "/teams/it-pmo",
                otherClasses: Re().link,
                sectionModelName: "CuNavigationV3",
                buttonClicked: "IT",
                clickedType: "nav link",
                location: "nav > solutions > team",
                children: (0, i.tZ)(He, {
                  description:
                    "Improve IT operations with solutions fostering teamwork and efficiency.",
                }),
              }),
              (0, i.tZ)(Xe, {
                icon: "send",
                title: "Marketing",
                href: "/teams/marketing",
                otherClasses: Re().link,
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Marketing",
                clickedType: "nav link",
                location: "nav > solutions > team",
                children: (0, i.tZ)(He, {
                  description:
                    "Drive marketing outcomes through collaborative strategy and teamwork.",
                }),
              }),
              (0, i.tZ)(Xe, {
                icon: "users",
                title: "Human resources",
                href: "/teams/human-resources",
                otherClasses: Re().link,
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Human resources",
                clickedType: "nav link",
                location: "nav > solutions > team",
                children: (0, i.tZ)(He, {
                  description:
                    "Enhance team engagement and efficiency with streamlined processes.",
                }),
              }),
              (0, i.tZ)(Xe, {
                icon: "calculator",
                title: "Sales",
                href: "/teams/sales",
                otherClasses: Re().link,
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Sales",
                clickedType: "nav link",
                location: "nav > solutions > team",
                children: (0, i.tZ)(He, {
                  description:
                    "Maximize sales with tools enhancing team efficiency and insight.",
                }),
              }),
            ],
          });
        },
        We = n(68657),
        Ge = n.n(We),
        Ue = function () {
          return (0, i.BX)(re, {
            columns: { default: 3 },
            otherClasses: Ge().main,
            "data-segment-location": "company-type",
            children: [
              (0, i.tZ)(Xe, {
                icon: "company",
                title: "Enterprise",
                href: "/plans/enterprise",
                otherClasses: Ge().link,
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Enterprise",
                clickedType: "nav link",
                location: "nav > solutions > company type",
                children: (0, i.tZ)(He, {
                  description:
                    "Strategic project planning for enterprise success.",
                }),
              }),
              (0, i.tZ)(Xe, {
                icon: "users",
                title: "Startup",
                href: "/teams/startup",
                otherClasses: Ge().link,
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Startup",
                clickedType: "nav link",
                location: "nav > solutions > company type",
                children: (0, i.tZ)(He, {
                  description:
                    "Innovative tools for fast-paced startup growth.",
                }),
              }),
              (0, i.tZ)(Xe, {
                icon: "heart",
                title: "Non-profit",
                href: "/teams/non-profit",
                otherClasses: Ge().link,
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Non-profit",
                clickedType: "nav link",
                location: "nav > solutions > company type",
                children: (0, i.tZ)(He, {
                  description: "Tools for impactful non-profit management.",
                }),
              }),
              (0, i.tZ)(Xe, {
                icon: "draft",
                title: "Education",
                href: "/teams/education",
                otherClasses: Ge().link,
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Education",
                clickedType: "nav link",
                location: "nav > solutions > company type",
                children: (0, i.tZ)(He, {
                  description:
                    "Streamlined workflows for educational productivity.",
                }),
              }),
              (0, i.tZ)(Xe, {
                icon: "toolkit",
                title: "Agency",
                href: "/teams/creative-agencies",
                otherClasses: Ge().link,
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Agency",
                clickedType: "nav link",
                location: "nav > solutions > company type",
                children: (0, i.tZ)(He, {
                  description: "Collaborative solutions for agency efficiency.",
                }),
              }),
            ],
          });
        },
        Fe = n(82725),
        Ye = n(18784),
        Ke = n.n(Ye),
        qe = function () {
          return (0, i.BX)(i.HY, {
            children: [
              (0, i.BX)(re, {
                columns: { default: 3 },
                otherClasses: Ke().main,
                "data-segment-location": "templates",
                children: [
                  (0, i.tZ)(Fe.Z, {
                    title: {
                      title: "Project management",
                      markdown: "Project management",
                    },
                    description:
                      "Manage roadmaps, backlogs, bugs, agile dev, and documentation.",
                    ctaButton: {
                      children: "Get this template",
                      href: "/templates/pmo-project-management",
                    },
                    media: {
                      src: "https://images.ctfassets.net/w8fc6tgspyjz/4iBmNRDZnoZJjNlRdAMXs9/9a546c9b638bf8489eacd4c9f216b9ce/project-management.png",
                      height: 123,
                      width: 235,
                      alt: "Project management",
                    },
                    sectionModelName: "CuNavigationV3",
                    buttonClicked: "Project management",
                    clickedType: "nav link card",
                    location: "nav > solutions > templates",
                    otherClasses: Ke().card,
                  }),
                  (0, i.tZ)(Fe.Z, {
                    title: { title: "Sales/CRM", markdown: "Sales/CRM" },
                    description: "Manage leads, deals, and contacts.",
                    ctaButton: {
                      children: "Get this template",
                      href: "/templates/sales-and-crm",
                    },
                    media: {
                      src: "https://images.ctfassets.net/w8fc6tgspyjz/6zu8crfZqp2FZoCmpolkMs/3d19819dfacabaca3538fe2740251afd/sales.png",
                      height: 123,
                      width: 235,
                      alt: "sales/crm",
                    },
                    sectionModelName: "CuNavigationV3",
                    buttonClicked: "Sales/CRM",
                    clickedType: "nav link card",
                    location: "nav > solutions > templates",
                    otherClasses: Ke().card,
                  }),
                  (0, i.tZ)(Fe.Z, {
                    title: { title: "Marketing", markdown: "Marketing" },
                    description:
                      "Plan campaigns, organize assets, and create wikis.",
                    ctaButton: {
                      children: "Get this template",
                      href: "/templates/marketing",
                    },
                    media: {
                      src: "https://images.ctfassets.net/w8fc6tgspyjz/1UkTcFMb8oWnRFFnDANUNj/21ae2aac04fe51fd66e66d7eaa063d8d/marketing.png",
                      height: 123,
                      width: 235,
                      alt: "Marketing",
                    },
                    sectionModelName: "CuNavigationV3",
                    buttonClicked: "Marketing",
                    clickedType: "nav link card",
                    location: "nav > solutions > templates",
                    otherClasses: Ke().card,
                  }),
                ],
              }),
              (0, i.BX)("div", {
                className: Ke().callout,
                children: [
                  (0, i.tZ)(D.Z, {
                    isReset: !0,
                    href: "/templates",
                    underline: !1,
                    otherClasses: Ke().calloutOverlay,
                    sectionModelName: "CuNavigationV3",
                    buttonClicked: "Browse all templates",
                    clickedType: "nav link",
                    location: "nav > templates",
                  }),
                  (0, i.tZ)("p", {
                    className: "paragraph-xs",
                    children:
                      "Get started with hundreds of free and ready-to-use templates.",
                  }),
                  (0, i.tZ)(m.ZP, {
                    isReset: !0,
                    otherClasses: Ke().calloutLink,
                    iconEndV3: "icon-v3-arrow-right",
                    href: "/templates",
                    sectionModelName: "CuNavigationV3",
                    buttonClicked: "Browse all templates",
                    clickedType: "nav link",
                    location: "nav > templates",
                    children: "Browse all templates",
                  }),
                ],
              }),
            ],
          });
        },
        Je = function (e) {
          var t = e.current,
            n = e.setCurrent;
          return (0, i.BX)(T, {
            id: "solutions",
            current: t,
            "data-segment-location": "solutions",
            children: [
              (0, i.tZ)(T.Trigger, {
                setCurrent: n,
                activeClasses: ge().triggerHover,
                otherClasses: ge().trigger,
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Solutions",
                clickedType: "nav link",
                location: "nav",
                children: (0, i.BX)("span", {
                  className: ge().triggerLabel,
                  children: [
                    (0, i.tZ)("span", { children: "Solutions" }),
                    (0, i.tZ)(f.bv, {
                      icon: "caret",
                      iconWidth: 10,
                      iconHeight: 10,
                    }),
                  ],
                }),
              }),
              (0, i.tZ)(T.Body, {
                children: (0, i.tZ)(P, {
                  defaultTabId: "solutions-2",
                  children: (0, i.BX)(i.HY, {
                    children: [
                      (0, i.BX)(P.TriggerList, {
                        ariaLabel: "Solutions Tabs",
                        children: [
                          (0, i.tZ)(P.Trigger, {
                            id: "solutions-2",
                            icon: "users",
                            label: "Team",
                            sectionModelName: "CuNavigationV3",
                            buttonClicked: "Team",
                            clickedType: "nav link",
                            location: "nav > solutions",
                          }),
                          (0, i.tZ)(P.Trigger, {
                            id: "solutions-3",
                            icon: "company",
                            label: "Company type",
                            sectionModelName: "CuNavigationV3",
                            buttonClicked: "Company type",
                            clickedType: "nav link",
                            location: "nav > solutions",
                          }),
                          (0, i.tZ)(P.Trigger, {
                            id: "solutions-4",
                            icon: "template",
                            label: "Templates",
                            sectionModelName: "CuNavigationV3",
                            buttonClicked: "Templates",
                            clickedType: "nav link",
                            location: "nav > solutions",
                          }),
                        ],
                      }),
                      (0, i.tZ)(P.Container, {
                        children: (0, i.BX)(i.HY, {
                          children: [
                            (0, i.tZ)(P.Content, {
                              id: "solutions-2",
                              children: (0, i.tZ)(De, {}),
                            }),
                            (0, i.tZ)(P.Content, {
                              id: "solutions-3",
                              children: (0, i.tZ)(Ue, {}),
                            }),
                            (0, i.tZ)(P.Content, {
                              id: "solutions-4",
                              children: (0, i.tZ)(qe, {}),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        Qe = n(45841),
        $e = n.n(Qe),
        et = function (e) {
          var t = e.current,
            n = e.setCurrent;
          return (0, i.BX)(T, {
            id: "resources",
            current: t,
            "data-segment-location": "resources",
            children: [
              (0, i.tZ)(T.Trigger, {
                setCurrent: n,
                activeClasses: ge().triggerHover,
                otherClasses: ge().trigger,
                sectionModelName: "CuNavigationV3",
                buttonClicked: "Resources",
                clickedType: "nav link",
                location: "nav",
                children: (0, i.BX)("span", {
                  className: ge().triggerLabel,
                  children: [
                    (0, i.tZ)("span", { children: "Resources" }),
                    (0, i.tZ)(f.bv, {
                      icon: "caret",
                      iconWidth: 10,
                      iconHeight: 10,
                    }),
                  ],
                }),
              }),
              (0, i.tZ)(T.Body, {
                children: (0, i.BX)(re, {
                  columns: { default: 3 },
                  gaps: { default: "var(--size-20)" },
                  children: [
                    (0, i.tZ)("div", {
                      className: $e().main,
                      children: (0, i.BX)(re, {
                        columns: { default: 3 },
                        children: [
                          (0, i.BX)("div", {
                            className: (0, o.Z)("column", $e().column),
                            children: [
                              (0, i.BX)("p", {
                                children: [
                                  "Learn ",
                                  (0, i.tZ)("span", {
                                    className: $e().tag,
                                    children: "Free",
                                  }),
                                ],
                              }),
                              (0, i.BX)("ul", {
                                role: "list",
                                className: (0, o.Z)("column", $e().list),
                                children: [
                                  (0, i.tZ)("li", {
                                    children: (0, i.tZ)(Y, {
                                      href: "https://university.clickup.com/?_gl=1*1ekuh8l*_gcl_au*MTM0NDMxOTQxNC4xNzA0NzI1NDUzLjIwNDc1NjUwOC4xNzA3NzUzMzc2LjE3MDc3NTMzODg.",
                                      icon: "clickup-rounded",
                                      label: "University",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "University",
                                      clickedType: "nav link",
                                      location: "nav > resources",
                                    }),
                                  }),
                                  (0, i.tZ)("li", {
                                    children: (0, i.tZ)(Y, {
                                      href: "/on-demand-demo",
                                      icon: "screen",
                                      label: "Demos",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Demos",
                                      clickedType: "nav link",
                                      location: "nav > resources",
                                    }),
                                  }),
                                  (0, i.tZ)("li", {
                                    children: (0, i.tZ)(Y, {
                                      href: "/videos",
                                      icon: "video",
                                      label: "Video tutorials",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Video tutorials",
                                      clickedType: "nav link",
                                      location: "nav > resources",
                                    }),
                                  }),
                                  (0, i.tZ)("li", {
                                    children: (0, i.tZ)(Y, {
                                      href: "/webinars",
                                      icon: "view-editor-role",
                                      label: "Webinars",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Webinars",
                                      clickedType: "nav link",
                                      location: "nav > resources",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.BX)("div", {
                            className: (0, o.Z)("column", $e().column),
                            children: [
                              (0, i.tZ)("p", { children: "Discover" }),
                              (0, i.BX)("ul", {
                                role: "list",
                                className: (0, o.Z)("column", $e().list),
                                children: [
                                  (0, i.tZ)("li", {
                                    children: (0, i.tZ)(Y, {
                                      href: "https://clickup.com/blog/",
                                      icon: "board",
                                      label: "Blog",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Blog",
                                      clickedType: "nav link",
                                      location: "nav > resources",
                                    }),
                                  }),
                                  (0, i.tZ)("li", {
                                    children: (0, i.tZ)(Y, {
                                      href: "/customers",
                                      icon: "clickup-rounded",
                                      label: "Customer stories",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Customer stories",
                                      clickedType: "nav link",
                                      location: "nav > resources",
                                    }),
                                  }),
                                  (0, i.tZ)("li", {
                                    children: (0, i.tZ)(Y, {
                                      href: "/events/vision-to-victory-summit",
                                      icon: "user-id",
                                      label: "Virtual Summits",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Virtual Summits",
                                      clickedType: "nav link",
                                      location: "nav > resources",
                                    }),
                                  }),
                                  (0, i.tZ)("li", {
                                    children: (0, i.tZ)(Y, {
                                      href: "/general-resources/productivity-quiz",
                                      icon: "selection-multi",
                                      label: "Productivity quiz",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Productivity quiz",
                                      clickedType: "nav link",
                                      location: "nav > resources",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.BX)("div", {
                            className: (0, o.Z)("column", $e().column),
                            children: [
                              (0, i.tZ)("p", { children: "Services" }),
                              (0, i.BX)("ul", {
                                role: "list",
                                className: (0, o.Z)("column", $e().list),
                                children: [
                                  (0, i.tZ)("li", {
                                    children: (0, i.tZ)(Y, {
                                      href: "/partners",
                                      icon: "users",
                                      label: "Partner services",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Partner services",
                                      clickedType: "nav link",
                                      location: "nav > resources",
                                    }),
                                  }),
                                  (0, i.tZ)("li", {
                                    children: (0, i.tZ)(Y, {
                                      href: "/professional-services",
                                      icon: "star",
                                      label: "Professional services",
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Professional services",
                                      clickedType: "nav link",
                                      location: "nav > resources",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.tZ)(J, {
                      title: "Customer Stories",
                      otherClasses: (0, o.Z)("column", $e().extra),
                      body: (0, i.BX)(i.HY, {
                        children: [
                          (0, i.BX)("div", {
                            className: (0, o.Z)("row", $e().caseStudy),
                            children: [
                              (0, i.tZ)("div", {
                                className: $e().caseStudyImage,
                                children: (0, i.tZ)(L.Z, {
                                  imageProps: {
                                    src: "https://images.ctfassets.net/w8fc6tgspyjz/3QTWqCeSRIwrCDsCkguK8h/2f2706d3fdc20284817b80c4ba98978d/1545846030726.jpeg?w=100&fm=webp",
                                    width: 49,
                                    height: 49,
                                    alt: "Sarah Lively Director of Social Media at Cartoon Network.",
                                  },
                                  lazyload: !0,
                                }),
                              }),
                              (0, i.BX)("div", {
                                className: (0, o.Z)(
                                  "column",
                                  $e().caseStudyContent
                                ),
                                children: [
                                  (0, i.tZ)(L.Z, {
                                    imageProps: {
                                      src: "https://images.ctfassets.net/w8fc6tgspyjz/1BRyeUsRBaPDLmoJBjYQHj/73f9b438955c4be71a6cd66259b89012/Cartoon_Network_Logo_200x130.png?w=100&fm=webp",
                                      width: 56,
                                      height: 37,
                                      alt: "Cartoon Network.",
                                    },
                                    lazyload: !0,
                                  }),
                                  (0, i.tZ)("blockquote", {
                                    children: (0, i.tZ)("p", {
                                      children: (0, i.tZ)("em", {
                                        children:
                                          "\u201cClickUp is our one source of truth for all the details we need \u2013 It helps us work faster\u201d",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.tZ)(R, {
                            href: "/cartoon-network",
                            label: "See more",
                            sectionModelName: "CuNavigationV3",
                            buttonClicked: "See more",
                            clickedType: "nav link",
                            location: "nav > resources",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        tt = n(27146),
        nt = n.n(tt);
      function it(e) {
        var t = e.children,
          n = e.setCurrent;
        return (0, i.BX)("div", {
          className: (0, o.Z)("column", nt().container),
          children: [
            (0, i.tZ)(m.ZP, {
              otherClasses: nt().backButton,
              isReset: !0,
              onClick: function () {
                return n("");
              },
              children: (0, i.tZ)(i.HY, {
                children: (0, i.BX)("span", {
                  className: (0, o.Z)("row", "align-center"),
                  children: [
                    (0, i.tZ)(f.bv, {
                      icon: "caret",
                      iconWidth: 10,
                      iconHeight: 10,
                    }),
                    "Back",
                  ],
                }),
              }),
            }),
            (0, i.tZ)("div", {
              className: (0, o.Z)("column", nt().content, nt().scrollShadows),
              children: (0, i.tZ)("div", {
                className: (0, o.Z)("column", nt().contentWrapper),
                children: t,
              }),
            }),
          ],
        });
      }
      var at = function (e, t) {
        return {
          sectionModelName: "CuMobileNavigationV3",
          buttonClicked: e,
          clickedType: "nav link",
          location: null !== t && void 0 !== t ? t : "nav",
        };
      };
      function ot(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              ot(e, t, n[t]);
            });
        }
        return e;
      }
      function lt() {
        return (0, i.BX)("div", {
          className: "column",
          style: { "--flex-spacing": "var(--size-12)" },
          children: [
            (0, i.tZ)(
              Ve,
              rt(
                {
                  href: "https://clickup.com/api/",
                  icon: "clickup-lg",
                  label: "ClickUp API",
                },
                at("ClickUp API", "nav > integrations")
              )
            ),
            (0, i.tZ)(
              Ve,
              rt(
                {
                  href: "/integrations/slack",
                  icon: "slack",
                  label: "Slack",
                  otherClasses: nt().integrationsLink,
                },
                at("Slack", "nav > integrations")
              )
            ),
            (0, i.tZ)(
              Ve,
              rt(
                {
                  href: "https://help.clickup.com/hc/en-us/articles/6310954639255-Import-from-JIRA",
                  icon: "jira",
                  label: "Jira",
                  otherClasses: nt().integrationsLink,
                },
                at("Jira", "nav > integrations")
              )
            ),
            (0, i.tZ)(
              Ve,
              rt(
                {
                  href: "/integrations/salesforce",
                  icon: "salesforce",
                  label: "Salesforce",
                  otherClasses: nt().integrationsLink,
                },
                at("Salesforce", "nav > integrations")
              )
            ),
            (0, i.tZ)(
              Ve,
              rt(
                {
                  href: "https://clickup.com/integrations/cloud-storage-google-drive",
                  icon: "gsuite",
                  label: "Gsuite",
                  otherClasses: nt().integrationsLink,
                },
                at("Gsuite", "nav > integrations")
              )
            ),
            (0, i.tZ)(
              Ve,
              rt(
                {
                  href: "https://help.clickup.com/hc/en-us/articles/6305793042455-Embed-content-in-ClickUp",
                  icon: "figma",
                  label: "Figma",
                  otherClasses: nt().integrationsLink,
                },
                at("Figma", "nav > integrations")
              )
            ),
            (0, i.tZ)(
              Ve,
              rt(
                {
                  href: "/integrations/hubspot",
                  icon: "hubspot",
                  label: "Hubspot",
                  otherClasses: nt().integrationsLink,
                },
                at("Hubspot", "nav > integrations")
              )
            ),
            (0, i.tZ)(
              Ve,
              rt(
                {
                  href: "/integrations/dropbox-cloud-storage",
                  icon: "dropbox",
                  label: "Dropbox",
                  otherClasses: nt().integrationsLink,
                },
                at("Dropbox", "nav > integrations")
              )
            ),
            (0, i.tZ)(
              Ve,
              rt(
                {
                  href: "/integrations/github",
                  icon: "github-black",
                  label: "Github",
                  otherClasses: nt().integrationsLink,
                },
                at("Github", "nav > integrations")
              )
            ),
            (0, i.tZ)(
              Ve,
              rt(
                {
                  href: "/integrations/zendesk",
                  icon: "zendesk",
                  label: "Zendesk",
                  otherClasses: nt().integrationsLink,
                },
                at("Zendesk", "nav > integrations")
              )
            ),
            (0, i.tZ)(
              R,
              rt(
                { href: "/integrations", label: "See all integrations" },
                at("See all integrations", "nav > integrations")
              )
            ),
          ],
        });
      }
      function ct(e) {
        var t = e.children;
        return (0, i.tZ)("p", { className: nt().title, children: t });
      }
      function st(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function dt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              st(e, t, n[t]);
            });
        }
        return e;
      }
      function ut() {
        return (0, i.BX)(i.HY, {
          children: [
            (0, i.BX)("div", {
              className: (0, o.Z)("column", nt().contentGroup),
              children: [
                (0, i.tZ)(ct, { children: "Project Management" }),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/tasks",
                      icon: "checkbox-multi",
                      label: "Tasks",
                      otherClasses: nt().simpleLink,
                    },
                    at("Tasks", "nav > product")
                  ),
                  "project-management-tasks"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/portfolios",
                      icon: "folder",
                      label: "Portfolios",
                      otherClasses: nt().simpleLink,
                    },
                    at("Portfolios", "nav > product")
                  ),
                  "project-management-portfolios"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/kanban-board",
                      icon: "board",
                      label: "Board views",
                      otherClasses: nt().simpleLink,
                    },
                    at("Board views", "nav > product")
                  ),
                  "project-management-board-views"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/gantt-chart-view",
                      icon: "view-timeline",
                      label: "Gantt chart",
                      otherClasses: nt().simpleLink,
                    },
                    at("Gantt chart", "nav > product")
                  ),
                  "project-management-roadmapping"
                ),
              ],
            }),
            (0, i.BX)("div", {
              className: (0, o.Z)("column", nt().contentGroup),
              children: [
                (0, i.tZ)("p", {
                  className: nt().title,
                  children: "Product Development",
                }),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/sprints",
                      icon: "circular-arrow",
                      label: "Sprints",
                      otherClasses: nt().simpleLink,
                    },
                    at("Sprints", "nav > product")
                  ),
                  "product-development-sprints"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/dashboards",
                      icon: "chart",
                      label: "Sprint Reports",
                      otherClasses: nt().simpleLink,
                    },
                    at("Sprint Reports", "nav > product")
                  ),
                  "product-development-sprint-reports"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/kanban-board",
                      icon: "view-cards",
                      label: "Kanban",
                      otherClasses: nt().simpleLink,
                    },
                    at("Kanban", "nav > product")
                  ),
                  "product-development-kanban"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/teams/software",
                      icon: "rebase",
                      label: "Backlog management",
                      otherClasses: nt().simpleLink,
                    },
                    at("Backlog management", "nav > product")
                  ),
                  "product-development-backlog-management"
                ),
              ],
            }),
            (0, i.BX)("div", {
              className: (0, o.Z)("column", nt().contentGroup),
              children: [
                (0, i.tZ)(ct, { children: "Knowledge Management" }),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/docs",
                      icon: "notes",
                      label: "Docs",
                      otherClasses: nt().simpleLink,
                    },
                    at("Docs", "nav > product")
                  ),
                  "knowledge-management-docs"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/docs",
                      icon: "link",
                      label: "Wikis",
                      otherClasses: nt().simpleLink,
                    },
                    at("Wikis", "nav > product")
                  ),
                  "knowledge-management-wikis"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/ai",
                      icon: "clickup-ai",
                      label: "Ask AI",
                      otherClasses: nt().simpleLink,
                    },
                    at("Ask AI", "nav > product")
                  ),
                  "knowledge-management-ask-ai"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/connected-search",
                      icon: "magnifier",
                      label: "Connected search search",
                      otherClasses: nt().simpleLink,
                    },
                    at("Connected search", "nav > product")
                  ),
                  "knowledge-management-universal-search"
                ),
              ],
            }),
            (0, i.BX)("div", {
              className: (0, o.Z)("column", nt().contentGroup),
              children: [
                (0, i.tZ)(ct, { children: "Resource Management" }),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/project-time-tracking",
                      icon: "timer",
                      label: "Time tracking",
                      otherClasses: nt().simpleLink,
                    },
                    at("Time tracking", "nav > product")
                  ),
                  "resource-management-time-tracking"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/views",
                      icon: "view-editor-role",
                      label: "Workload views",
                      otherClasses: nt().simpleLink,
                    },
                    at("Workload views", "nav > product")
                  ),
                  "resource-management-workload-views"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/goals",
                      icon: "flag",
                      label: "Goals",
                      otherClasses: nt().simpleLink,
                    },
                    at("Goals", "nav > product")
                  ),
                  "resource-management-goals"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/dashboards",
                      icon: "dashboard",
                      label: "Dashboards",
                      otherClasses: nt().simpleLink,
                    },
                    at("Dashboards", "nav > product")
                  ),
                  "resource-management-dashboard"
                ),
              ],
            }),
            (0, i.BX)("div", {
              className: (0, o.Z)("column", nt().contentGroup),
              children: [
                (0, i.tZ)(ct, { children: "Collaboration" }),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/docs",
                      icon: "notes",
                      label: "Docs",
                      otherClasses: nt().simpleLink,
                    },
                    at("Docs", "nav > product")
                  ),
                  "collaboration-docs"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/whiteboards",
                      icon: "canvas",
                      label: "Whiteboards",
                      otherClasses: nt().simpleLink,
                    },
                    at("Whiteboards", "nav > product")
                  ),
                  "collaboration-whiteboards"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/chat",
                      icon: "hash-contained",
                      label: "Chat",
                      otherClasses: nt().simpleLink,
                    },
                    at("Chat", "nav > product")
                  ),
                  "collaboration-chat"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/inbox",
                      icon: "inbox",
                      label: "Inbox",
                      otherClasses: nt().simpleLink,
                    },
                    at("Inbox", "nav > product")
                  ),
                  "collaboration-inbox"
                ),
              ],
            }),
            (0, i.BX)("div", {
              className: (0, o.Z)("column", nt().contentGroup),
              children: [
                (0, i.tZ)(ct, { children: "Workflows" }),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/automations",
                      icon: "wand",
                      label: "Automations",
                      otherClasses: nt().simpleLink,
                    },
                    at("Automations", "nav > product")
                  ),
                  "workflows-automations"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/form-view",
                      icon: "form",
                      label: "Forms",
                      otherClasses: nt().simpleLink,
                    },
                    at("Forms", "nav > product")
                  ),
                  "workflows-forms"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/custom-fields",
                      icon: "input",
                      label: "Custom fields",
                      otherClasses: nt().simpleLink,
                    },
                    at("Custom fields", "nav > product")
                  ),
                  "workflows-custom-fields"
                ),
                (0, i.tZ)(
                  Y,
                  dt(
                    {
                      href: "/features/custom-task-statuses",
                      icon: "dropdown",
                      label: "Custom statuses",
                      otherClasses: nt().simpleLink,
                    },
                    at("Custom statuses", "nav > product")
                  ),
                  "workflows-custom-statuses"
                ),
              ],
            }),
            (0, i.tZ)(
              R,
              dt(
                { href: "/features", label: "See all features" },
                at("See all features", "nav > product")
              )
            ),
          ],
        });
      }
      function pt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function gt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              pt(e, t, n[t]);
            });
        }
        return e;
      }
      function mt() {
        return (0, i.BX)("div", {
          className: "column",
          style: { "--flex-spacing": "var(--size-20)" },
          children: [
            (0, i.BX)("div", {
              className: (0, o.Z)("column", nt().contentGroup),
              children: [
                (0, i.BX)(ct, {
                  children: [
                    "Learn ",
                    (0, i.tZ)("span", {
                      className: nt().tag,
                      children: "Free",
                    }),
                  ],
                }),
                (0, i.BX)("ul", {
                  role: "list",
                  className: (0, o.Z)("column", nt().list),
                  children: [
                    (0, i.tZ)("li", {
                      children: (0, i.tZ)(
                        Y,
                        gt(
                          {
                            href: "https://university.clickup.com/?_gl=1*1ekuh8l*_gcl_au*MTM0NDMxOTQxNC4xNzA0NzI1NDUzLjIwNDc1NjUwOC4xNzA3NzUzMzc2LjE3MDc3NTMzODg.",
                            icon: "clickup-rounded",
                            label: "University",
                            otherClasses: nt().simpleLink,
                          },
                          at("University", "nav > resources")
                        )
                      ),
                    }),
                    (0, i.tZ)("li", {
                      children: (0, i.tZ)(
                        Y,
                        gt(
                          {
                            href: "/on-demand-demo",
                            icon: "screen",
                            label: "Demos",
                            otherClasses: nt().simpleLink,
                          },
                          at("Demos", "nav > resources")
                        )
                      ),
                    }),
                    (0, i.tZ)("li", {
                      children: (0, i.tZ)(
                        Y,
                        gt(
                          {
                            href: "/videos",
                            icon: "video",
                            label: "Video tutorials",
                            otherClasses: nt().simpleLink,
                          },
                          at("Video tutorials", "nav > resources")
                        )
                      ),
                    }),
                    (0, i.tZ)("li", {
                      children: (0, i.tZ)(
                        Y,
                        gt(
                          {
                            href: "/webinars",
                            icon: "view-editor-role",
                            label: "Webinars",
                            otherClasses: nt().simpleLink,
                          },
                          at("Webinars", "nav > resources")
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, i.BX)("div", {
              className: (0, o.Z)("column", nt().contentGroup),
              children: [
                (0, i.tZ)(ct, { children: "Discover" }),
                (0, i.BX)("ul", {
                  role: "list",
                  className: (0, o.Z)("column", nt().list),
                  children: [
                    (0, i.tZ)("li", {
                      children: (0, i.tZ)(
                        Y,
                        gt(
                          {
                            href: "https://clickup.com/blog/",
                            icon: "board",
                            label: "Blog",
                            otherClasses: nt().simpleLink,
                          },
                          at("Blog", "nav > resources")
                        )
                      ),
                    }),
                    (0, i.tZ)("li", {
                      children: (0, i.tZ)(
                        Y,
                        gt(
                          {
                            href: "/customers",
                            icon: "clickup-rounded",
                            label: "Customer stories",
                            otherClasses: nt().simpleLink,
                          },
                          at("Customer stories", "nav > resources")
                        )
                      ),
                    }),
                    (0, i.tZ)("li", {
                      children: (0, i.tZ)(
                        Y,
                        gt(
                          {
                            href: "/events/vision-to-victory-summit",
                            icon: "user-id",
                            label: "Virtual Summits",
                            otherClasses: nt().simpleLink,
                          },
                          at("Virtual Summit", "nav > resources")
                        )
                      ),
                    }),
                    (0, i.tZ)("li", {
                      children: (0, i.tZ)(
                        Y,
                        gt(
                          {
                            href: "/general-resources/productivity-quiz",
                            icon: "selection-multi",
                            label: "Productivity quiz",
                            otherClasses: nt().simpleLink,
                          },
                          at("Productivity quiz", "nav > resources")
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, i.BX)("div", {
              className: (0, o.Z)("column", nt().contentGroup),
              children: [
                (0, i.tZ)(ct, { children: "Services" }),
                (0, i.BX)("ul", {
                  role: "list",
                  className: (0, o.Z)("column", nt().list),
                  children: [
                    (0, i.tZ)("li", {
                      children: (0, i.tZ)(
                        Y,
                        gt(
                          {
                            href: "/partners",
                            icon: "users",
                            label: "Partner services",
                            otherClasses: nt().simpleLink,
                          },
                          at("Partner services", "nav > resources")
                        )
                      ),
                    }),
                    (0, i.tZ)("li", {
                      children: (0, i.tZ)(
                        Y,
                        gt(
                          {
                            href: "/professional-services",
                            icon: "star",
                            label: "Professional services",
                            otherClasses: nt().simpleLink,
                          },
                          at("Professional services", "nav > resources")
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function ht(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function vt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              ht(e, t, n[t]);
            });
        }
        return e;
      }
      function ft() {
        return (0, i.BX)("div", {
          className: "column",
          style: { "--flex-spacing": "var(--size-20)" },
          children: [
            (0, i.tZ)(
              Xe,
              vt(
                {
                  icon: "view-timeline",
                  title: "Project management",
                  href: "/teams/project-management",
                  otherClasses: (0, o.Z)(nt().link, nt().card),
                },
                at("Project management", "nav > solutions"),
                {
                  children: (0, i.tZ)(He, {
                    description:
                      "Empower teams to achieve goals with efficient, clear project planning.",
                  }),
                }
              )
            ),
            (0, i.tZ)(
              Xe,
              vt(
                {
                  icon: "view-cards",
                  title: "Product development",
                  href: "/teams/software",
                  otherClasses: (0, o.Z)(nt().link, nt().card),
                },
                at("Product development", "nav > solutions"),
                {
                  children: (0, i.tZ)(He, {
                    description:
                      "Accelerate innovation for faster, effective team-led product launches.",
                  }),
                }
              )
            ),
            (0, i.tZ)(
              Xe,
              vt(
                {
                  icon: "opjects-reorder",
                  title: "Operations",
                  href: "/teams/operations",
                  otherClasses: (0, o.Z)(nt().link, nt().card),
                },
                at("Operations", "nav > solutions"),
                {
                  children: (0, i.tZ)(He, {
                    description:
                      "Optimize workflows for increased team productivity and efficiency.",
                  }),
                }
              )
            ),
            (0, i.tZ)(
              Xe,
              vt(
                {
                  icon: "code",
                  title: "IT",
                  href: "/teams/it-pmo",
                  otherClasses: (0, o.Z)(nt().link, nt().card),
                },
                at("IT", "nav > solutions"),
                {
                  children: (0, i.tZ)(He, {
                    description:
                      "Improve IT operations with solutions fostering teamwork and efficiency.",
                  }),
                }
              )
            ),
            (0, i.tZ)(
              Xe,
              vt(
                {
                  icon: "send",
                  title: "Marketing",
                  href: "/teams/marketing",
                  otherClasses: (0, o.Z)(nt().link, nt().card),
                },
                at("Marketing", "nav > solutions"),
                {
                  children: (0, i.tZ)(He, {
                    description:
                      "Drive marketing outcomes through collaborative strategy and teamwork.",
                  }),
                }
              )
            ),
            (0, i.tZ)(
              Xe,
              vt(
                {
                  icon: "users",
                  title: "Human resources",
                  href: "/teams/human-resources",
                  otherClasses: (0, o.Z)(nt().link, nt().card),
                },
                at("Human resources", "nav > solutions"),
                {
                  children: (0, i.tZ)(He, {
                    description:
                      "Enhance team engagement and efficiency with streamlined processes.",
                  }),
                }
              )
            ),
            (0, i.tZ)(
              Xe,
              vt(
                {
                  icon: "calculator",
                  title: "Sales",
                  href: "/teams/sales",
                  otherClasses: (0, o.Z)(nt().link, nt().card),
                },
                at("Sales", "nav > solutions"),
                {
                  children: (0, i.tZ)(He, {
                    description:
                      "Maximize sales with tools enhancing team efficiency and insight.",
                  }),
                }
              )
            ),
            (0, i.tZ)(
              R,
              vt(
                { href: "/teams", label: "See all solutions" },
                at("See all solutions", "nav > solutions")
              )
            ),
          ],
        });
      }
      var bt = n(14369),
        kt = n(81361),
        Ct = function (e) {
          var t = e.setCurrent,
            n = e.setOpen,
            r = (0, bt.M)(),
            l = (0, kt.cC)("nav-try-for-free-cta"),
            c = (0, kt.aS)("nav-try-for-free-cta", 0),
            s = (0, kt.cC)("new-signup-cta-color"),
            d = (0, kt.aS)("new-signup-cta-color", 0),
            u = (0, a.useState)(""),
            g = u[0],
            h = u[1];
          (0, a.useEffect)(function () {
            h(window.location.pathname);
          }, []);
          var v = "Log in",
            b = "Sign Up";
          switch (g.toLowerCase()) {
            case "/fr-fr":
            case "/fr-fr/pricing":
              (v = "Se connecter"), (b = "S\u2019inscrire");
              break;
            case "/es-es":
            case "/es-es/pricing":
              (v = "Iniciar sesi\xf3n"), (b = "Registrarme");
              break;
            case "/pt-br":
            case "/pt-br/pricing":
              (v = "Entre"), (b = "Cadastre-se");
              break;
            case "/de":
            case "/de/pricing":
              (v = "Anmelden"), (b = "Registrieren");
              break;
            case "/it":
            case "/it/pricing":
              (v = "Accedi"), (b = "Registrati");
              break;
            default:
              (v = "Log in"), (b = "Sign Up");
          }
          return (0, i.BX)("div", {
            className: (0, o.Z)("row", "justify-between", nt().mobileHeader),
            children: [
              (0, i.tZ)("div", {
                className: (0, o.Z)("row"),
                children: (0, i.BX)("div", {
                  className: (0, o.Z)(ge().group, "row"),
                  children: [
                    (0, i.tZ)(m.ZP, {
                      isReset: !0,
                      href: r,
                      otherClasses: [
                        ge().trigger,
                        ge().login,
                        nt().headerButton,
                        nt().login,
                        "navigation__link",
                      ],
                      sectionModelName: "CuMobileNavigationV3",
                      buttonClicked: "Log in",
                      clickedType: "nav button",
                      children: v,
                    }),
                    l && 1 === c
                      ? (0, i.tZ)(p.Z, {
                          isReset: !0,
                          action: "open signup form",
                          source: "work space signup navigation",
                          siteLocation: { root: "nav", parent: "unknown" },
                          otherClasses: [
                            ge().trigger,
                            ge().signup,
                            nt().headerButton,
                            nt().signup,
                            nt().bold,
                            "navigation__link",
                            s && 1 === d ? nt().signupNewColorCTA : "",
                          ],
                          sectionModelName: "CuMobileNavigationV3",
                          buttonClicked: "Try for free",
                          clickedType: "nav button",
                          children: (0, i.tZ)("span", {
                            children: "Try for free",
                          }),
                        })
                      : (0, i.tZ)(p.Z, {
                          isReset: !0,
                          action: "open signup form",
                          source: "work space signup navigation",
                          siteLocation: { root: "nav", parent: "unknown" },
                          otherClasses: [
                            ge().trigger,
                            ge().signup,
                            nt().headerButton,
                            nt().signup,
                            nt().bold,
                            "navigation__link",
                            s && 1 === d ? nt().signupNewColorCTA : "",
                          ],
                          sectionModelName: "CuMobileNavigationV3",
                          buttonClicked: "Sign Up",
                          clickedType: "nav button",
                          children: (0, i.tZ)("span", { children: b }),
                        }),
                  ],
                }),
              }),
              (0, i.tZ)("div", {
                className: (0, o.Z)(ge().group, nt().closeButtonGroup, "row"),
                children: (0, i.tZ)(m.ZP, {
                  sectionModelName: "CuMobileNavigationV3",
                  buttonClicked: "Close mobile menu",
                  clickedType: "nav button",
                  isReset: !0,
                  onClick: function () {
                    t(""), n(!1);
                  },
                  otherClasses: (0, o.Z)(ge().trigger),
                  children: (0, i.BX)(i.HY, {
                    children: [
                      (0, i.tZ)(f.bv, { icon: "cross", width: 17, height: 17 }),
                      (0, i.tZ)("span", {
                        className: "visuallyHidden",
                        children: "Close mobile menu",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        _t = n(14045),
        Zt = n(14181);
      function yt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function Nt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function wt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              Nt(e, t, n[t]);
            });
        }
        return e;
      }
      function Mt(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var i,
                a,
                o = [],
                r = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(r = (i = n.next()).done) &&
                  (o.push(i.value), !t || o.length !== t);
                  r = !0
                );
              } catch (c) {
                (l = !0), (a = c);
              } finally {
                try {
                  r || null == n.return || n.return();
                } finally {
                  if (l) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return yt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return yt(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var Tt = function (e) {
        var t = e.isOpen,
          n = void 0 !== t && t,
          r = (e.minimal, e.otherClasses),
          l = e.darkMode,
          c = void 0 !== l && l,
          s = (0, d.useRouter)(),
          p = (0, a.useState)(""),
          h = p[0],
          v = p[1],
          b = (0, a.useState)(n),
          k = b[0],
          C = b[1],
          _ = Mt((0, u.i8)(!1), 2),
          Z = (_[0], _[1]),
          y = (0, a.useRef)(null),
          N = (0, u.iP)().width > 1012,
          w = (0, kt.cC)("new-signup-cta-color"),
          M = (0, kt.aS)("new-signup-cta-color", 0);
        (0, a.useEffect)(
          function () {
            if (N) return v(""), Z(!1), void C(!1);
            Z(!!k);
          },
          [N, k, C, v, Z]
        ),
          (0, a.useEffect)(
            function () {
              if (s) {
                var e = function () {
                  v(""), C(!1);
                };
                return (
                  s.events.on("routeChangeComplete", e),
                  function () {
                    return s.events.off("routeChangeComplete", e);
                  }
                );
              }
            },
            [s, v, C]
          ),
          (0, a.useEffect)(
            function () {
              if (null === y || void 0 === y ? void 0 : y.current) {
                y.current.addEventListener("click", function (e) {
                  e.target.closest("a") && (v(""), C(!1));
                });
              }
            },
            [y, v, C]
          );
        var V = (0, o.Z)("v3", "column", nt().wrapper, r, k ? "" : "hidden"),
          O = (0, kt.cC)("nav-try-for-free-cta"),
          I = (0, kt.aS)("nav-try-for-free-cta", 0),
          B = (0, a.useState)(""),
          x = B[0],
          j = B[1];
        (0, a.useEffect)(function () {
          j(window.location.pathname);
        }, []);
        var S = "Contact Sales",
          P = "Sign Up",
          L = "Try for free";
        switch (x.toLowerCase()) {
          case "/fr-fr":
          case "/fr-fr/pricing":
            (S = "Contacter l\u2019\xe9quipe commerciale"),
              (P = "S\u2019inscrire"),
              (L = "Essai gratuit");
            break;
          case "/es-es":
          case "/es-es/pricing":
            (S = "Contactar con ventas"),
              (P = "Registrarme"),
              (L = "Prueba gratuita");
            break;
          case "/pt-br":
          case "/pt-br/pricing":
            (S = "Entrar em contato com a \xe1rea de vendas"),
              (P = "Cadastre-se"),
              (L = "Experimente gr\xe1tis");
            break;
          case "/de":
          case "/de/pricing":
            (S = "Vertrieb kontaktieren"),
              (P = "Registrieren"),
              (L = "Kostenlos testen");
            break;
          case "/it":
          case "/it/pricing":
            (S = "Contatta il team commerciale"),
              (P = "Registrati"),
              (L = "Prova gratuita");
            break;
          default:
            (S = "Contact Sales"), (P = "Sign Up"), (L = "Try for free");
        }
        var X = Zt.RW.includes(x);
        return (0, i.BX)(i.HY, {
          children: [
            (0, i.BX)("div", {
              className: "row",
              style: { "--flex-spacing": "0.25rem" },
              children: [
                (0, i.tZ)("div", {
                  ref: y,
                  className: (0, o.Z)(
                    ge().group,
                    nt().mobileGroup,
                    nt().mobileGroupSignup,
                    c && ge().darkMode,
                    c && nt().darkMode
                  ),
                  "data-mobile-nav-open": k,
                  children: (0, i.tZ)("div", {
                    className: "row",
                    children:
                      O && 1 === I
                        ? (0, i.tZ)(_t.Z, {
                            isReset: !0,
                            action: "open signup form",
                            source: "work space signup navigation",
                            siteLocation: { root: "nav", parent: "unknown" },
                            otherClasses: [
                              nt().initial,
                              nt().trigger,
                              nt().signup,
                              "navigation__link",
                              w && 1 === M ? nt().signupNewColorCTA : "",
                            ],
                            sectionModelName: "CuMobileNavigationV3",
                            buttonClicked: "Try for free",
                            clickedType: "nav button",
                            location: "nav",
                            children: (0, i.tZ)("span", { children: L }),
                          })
                        : (0, i.tZ)(_t.Z, {
                            isReset: !0,
                            action: "open signup form",
                            source: "work space signup navigation",
                            siteLocation: { root: "nav", parent: "unknown" },
                            otherClasses: [
                              nt().initial,
                              nt().trigger,
                              nt().signup,
                              "navigation__link",
                              w && 1 === M ? nt().signupNewColorCTA : "",
                            ],
                            sectionModelName: "CuMobileNavigationV3",
                            buttonClicked: "".concat(c ? L : P),
                            clickedType: "nav button",
                            location: "nav",
                            children: (0, i.tZ)("span", {
                              children: c ? L : P,
                            }),
                          }),
                  }),
                }),
                (0, i.tZ)("div", {
                  ref: y,
                  className: (0, o.Z)(
                    ge().group,
                    nt().mobileGroup,
                    c && ge().darkMode,
                    "mobile-hamburger"
                  ),
                  "data-mobile-nav-open": k,
                  children: (0, i.tZ)("div", {
                    className: "row",
                    children: (0, i.tZ)(m.ZP, {
                      isReset: !0,
                      onClick: function () {
                        return C(function (e) {
                          return !e;
                        });
                      },
                      otherClasses: (0, o.Z)(ge().trigger, c && ge().darkMode),
                      "aria-controls": "#mobile-navigation-v3",
                      "aria-expanded": k ? "true" : "false",
                      "aria-haspopup": !0,
                      "data-testid": "cu-mobile-navigation-v3--trigger",
                      sectionModelName: "CuMobileNavigationV3",
                      type: "button",
                      buttonClicked: "open mobile menu",
                      clickedType: "nav button",
                      location: "nav",
                      children: (0, i.BX)("span", {
                        className: "row",
                        style: { "--flex-spacing": 0 },
                        children: [
                          (0, i.tZ)("svg", {
                            fill: "none",
                            id: "icon-v3-menu-solid",
                            viewBox: "0 0 448 512",
                            width: 17,
                            height: 20,
                            children: (0, i.tZ)("path", {
                              d: "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z",
                              fill: "currentColor",
                            }),
                          }),
                          (0, i.tZ)("span", {
                            children: (0, i.tZ)("span", {
                              className: "visuallyHidden",
                              children: "Open mobile Menu",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, i.tZ)("div", {
              id: "mobile-navigation-v3",
              className: V,
              "data-testid": "cu-mobile-navigation-v3",
              children: (0, i.BX)("div", {
                className: (0, o.Z)("column", nt().container),
                children: [
                  (0, i.tZ)(Ct, { setOpen: C, setCurrent: v }),
                  (0, i.BX)("div", {
                    className: (0, o.Z)("column", nt().topLevel),
                    children: [
                      (0, i.BX)(T, {
                        id: "mobile-product",
                        current: h,
                        children: [
                          (0, i.tZ)(
                            T.Trigger,
                            wt({}, at("Product"), {
                              setCurrent: v,
                              activeClasses: nt().triggerHover,
                              otherClasses: nt().trigger,
                              children: (0, i.BX)("span", {
                                className: nt().triggerLabel,
                                children: [
                                  (0, i.tZ)("span", { children: "Product" }),
                                  (0, i.tZ)(f.bv, {
                                    icon: "caret",
                                    iconWidth: 10,
                                    iconHeight: 10,
                                  }),
                                ],
                              }),
                            })
                          ),
                          (0, i.tZ)(T.BodyMobile, {
                            otherClasses: nt().body,
                            children: (0, i.tZ)(it, {
                              setCurrent: v,
                              children: (0, i.tZ)(ut, {}),
                            }),
                          }),
                        ],
                      }),
                      (0, i.BX)(T, {
                        id: "mobile-solutions",
                        current: h,
                        children: [
                          (0, i.tZ)(
                            T.Trigger,
                            wt({}, at("Solutions"), {
                              setCurrent: v,
                              activeClasses: nt().triggerHover,
                              otherClasses: nt().trigger,
                              children: (0, i.BX)("span", {
                                className: nt().triggerLabel,
                                children: [
                                  (0, i.tZ)("span", { children: "Solutions" }),
                                  (0, i.tZ)(f.bv, {
                                    icon: "caret",
                                    iconWidth: 10,
                                    iconHeight: 10,
                                  }),
                                ],
                              }),
                            })
                          ),
                          (0, i.tZ)(T.BodyMobile, {
                            otherClasses: nt().body,
                            children: (0, i.tZ)(it, {
                              setCurrent: v,
                              children: (0, i.tZ)(ft, {}),
                            }),
                          }),
                        ],
                      }),
                      (0, i.BX)(T, {
                        id: "mobile-integrations",
                        current: h,
                        children: [
                          (0, i.tZ)(
                            T.Trigger,
                            wt({}, at("Integrations"), {
                              setCurrent: v,
                              activeClasses: nt().triggerHover,
                              otherClasses: nt().trigger,
                              children: (0, i.BX)("span", {
                                className: nt().triggerLabel,
                                children: [
                                  (0, i.tZ)("span", {
                                    children: "Integrations",
                                  }),
                                  (0, i.tZ)(f.bv, {
                                    icon: "caret",
                                    iconWidth: 10,
                                    iconHeight: 10,
                                  }),
                                ],
                              }),
                            })
                          ),
                          (0, i.tZ)(T.BodyMobile, {
                            otherClasses: nt().body,
                            children: (0, i.tZ)(it, {
                              setCurrent: v,
                              children: (0, i.tZ)(lt, {}),
                            }),
                          }),
                        ],
                      }),
                      (0, i.BX)(T, {
                        id: "mobile-resources",
                        current: h,
                        children: [
                          (0, i.tZ)(
                            T.Trigger,
                            wt({}, at("Resources"), {
                              setCurrent: v,
                              activeClasses: nt().triggerHover,
                              otherClasses: nt().trigger,
                              children: (0, i.BX)("span", {
                                className: nt().triggerLabel,
                                children: [
                                  (0, i.tZ)("span", { children: "Resources" }),
                                  (0, i.tZ)(f.bv, {
                                    icon: "caret",
                                    iconWidth: 10,
                                    iconHeight: 10,
                                  }),
                                ],
                              }),
                            })
                          ),
                          (0, i.tZ)(T.BodyMobile, {
                            otherClasses: nt().body,
                            children: (0, i.tZ)(it, {
                              setCurrent: v,
                              children: (0, i.tZ)(mt, {}),
                            }),
                          }),
                        ],
                      }),
                      (0, i.tZ)(
                        m.ZP,
                        wt({}, at("Pricing"), {
                          href: "/pricing",
                          otherClasses: nt().trigger,
                          isReset: !0,
                          children: (0, i.tZ)("span", {
                            className: nt().triggerLabel,
                            children: (0, i.tZ)("span", {
                              children: "Pricing",
                            }),
                          }),
                        })
                      ),
                      (0, i.tZ)(
                        m.ZP,
                        wt({}, at("Enterprise"), {
                          href: "/plans/enterprise",
                          otherClasses: nt().trigger,
                          isReset: !0,
                          children: (0, i.tZ)("span", {
                            className: nt().triggerLabel,
                            children: (0, i.tZ)("span", {
                              children: "Enterprise",
                            }),
                          }),
                        })
                      ),
                      (0, i.tZ)(
                        g.Z,
                        wt({}, at("Contact Sales"), {
                          action: "open contact sales form",
                          otherClasses: X
                            ? ""
                                .concat(nt().trigger, " ")
                                .concat(nt().triggerV2)
                            : nt().trigger,
                          isReset: !0,
                          children: (0, i.tZ)("span", {
                            className: nt().triggerLabel,
                            children: (0, i.tZ)("span", { children: S }),
                          }),
                        })
                      ),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };
      function Vt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function Ot(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var i,
                a,
                o = [],
                r = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(r = (i = n.next()).done) &&
                  (o.push(i.value), !t || o.length !== t);
                  r = !0
                );
              } catch (c) {
                (l = !0), (a = c);
              } finally {
                try {
                  r || null == n.return || n.return();
                } finally {
                  if (l) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return Vt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Vt(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var It = function (e) {
          var t = e.baseUrl,
            n = void 0 === t ? "" : t,
            r = e.minimal,
            l = void 0 !== r && r,
            c = e.navigationTreatment,
            s = e.otherClasses,
            v = e.darkMode,
            f = void 0 !== v && v,
            b = (0, d.useRouter)(),
            k = (0, a.useState)(""),
            C = k[0],
            Z = k[1],
            y = (0, bt.M)(),
            N = (0, kt.cC)("new-minimal-nav-paid"),
            w = (0, kt.aS)("new-minimal-nav-paid", 0),
            M = (0, kt.cC)("nav-try-for-free-cta"),
            T = (0, kt.aS)("nav-try-for-free-cta", 0),
            V = (0, kt.cC)("new-signup-cta-color"),
            O = (0, kt.aS)("new-signup-cta-color", 0),
            I = (0, a.useState)(""),
            B = I[0],
            x = I[1];
          (0, a.useEffect)(function () {
            x(window.location.pathname);
          }, []);
          var j = "/lp" === B || B.startsWith("/lp/"),
            S = "The everything app, for work.",
            P = "Contact Sales",
            L = "Log in",
            X = "Sign Up",
            A = "Try for free";
          switch (B.toLowerCase()) {
            case "/fr-fr":
            case "/fr-fr/pricing":
              (S = "L'application de tout votre travail."),
                (P = "Contacter l\u2019\xe9quipe commerciale"),
                (L = "Se connecter"),
                (X = "S\u2019inscrire"),
                (A = "Essai gratuit");
              break;
            case "/es-es":
            case "/es-es/pricing":
              (S = "La aplicaci\xf3n m\xe1s completa para trabajar."),
                (P = "Contactar con ventas"),
                (L = "Iniciar sesi\xf3n"),
                (X = "Registrarme"),
                (A = "Prueba gratuita");
              break;
            case "/pt-br":
            case "/pt-br/pricing":
              (S = "O aplicativo completo para o trabalho."),
                (P = "Entrar em contato com a \xe1rea de vendas"),
                (L = "Entre"),
                (X = "Cadastre-se"),
                (A = "Experimente gr\xe1tis");
              break;
            case "/de":
            case "/de/pricing":
              (S = "Die rundum-App f\xfcr die Arbeit."),
                (P = "Vertrieb kontaktieren"),
                (L = "Anmelden"),
                (X = "Registrieren"),
                (A = "Kostenlos testen");
              break;
            case "/it":
            case "/it/pricing":
              (S = "L'app completa per il lavoro."),
                (P = "Contatta il team commercial"),
                (L = "Accedi"),
                (X = "Registrati"),
                (A = "Prova gratuita");
              break;
            default:
              (S = "The everything app, for work."),
                (P = "Contact Sales"),
                (L = "Log in"),
                (X = "Sign Up"),
                (A = "Try for free");
          }
          var z = (0, u.iP)().width <= 1012,
            H = (0, a.useRef)(null);
          (0, u.t$)(H, function () {
            return Z("");
          }),
            (0, a.useEffect)(
              function () {
                if (b) {
                  var e = function () {
                    Z("");
                  };
                  return (
                    b.events.on("routeChangeComplete", e),
                    function () {
                      return b.events.off("routeChangeComplete", e);
                    }
                  );
                }
              },
              [b, Z]
            );
          var E = Ot((0, u.i8)(!1), 2),
            R = (E[0], E[1]);
          (0, a.useEffect)(
            function () {
              if (z) return Z(""), void R(!1);
              R("" !== C);
            },
            [C, z, Z, R]
          ),
            (0, a.useEffect)(
              function () {
                if (null === H || void 0 === H ? void 0 : H.current) {
                  H.current.addEventListener("click", function (e) {
                    e.target.closest("a") && Z("");
                  });
                }
              },
              [H, Z]
            );
          var D = (0, o.Z)("v3", ge().wrapper, N && 1 === w && ge().gapZero, s),
            W = b.pathname.split("/")[1],
            G = Zt.Fn.includes(W.toLowerCase()) ? "/".concat(W) : "/";
          return "events" === c
            ? (0, i.tZ)(_.Provider, {
                value: { baseUrl: n },
                children: (0, i.tZ)("nav", {
                  ref: H,
                  className: D,
                  "data-testid": "cu-navigation-v3",
                  "data-segment-root": "nav",
                  children: (0, i.tZ)("div", {
                    className: (0, o.Z)(
                      ge().column,
                      ge().group,
                      ge().logo,
                      "row",
                      f && ge().darkMode
                    ),
                    children: (0, i.tZ)(m.ZP, {
                      href: n + G,
                      isReset: !0,
                      buttonClicked: "ClickUp Logo",
                      children: (0, i.BX)(i.HY, {
                        children: [
                          (0, i.tZ)(h.Z, {
                            logo: f ? "clickup-dark" : "clickup-light",
                            override: { width: 94, height: 23 },
                          }),
                          (0, i.tZ)("span", {
                            className: ge().logoText,
                            children: S,
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              })
            : !0 === l || "paid-traffic" === c
            ? (0, i.BX)(_.Provider, {
                value: { baseUrl: n },
                children: [
                  (0, i.BX)("nav", {
                    ref: H,
                    className: D,
                    "data-testid": "cu-navigation-v3",
                    "data-segment-location": "nav",
                    children: [
                      (0, i.tZ)("div", {
                        className: (0, o.Z)(
                          ge().column,
                          ge().group,
                          ge().logo,
                          "row",
                          f && ge().darkMode
                        ),
                        children: (0, i.tZ)("div", {
                          className: (0, o.Z)(
                            ge().column,
                            ge().group,
                            ge().logo,
                            "row"
                          ),
                          children: (0, i.tZ)(m.ZP, {
                            href: n + G,
                            isReset: !0,
                            buttonClicked: "logo simple nav",
                            children: (0, i.BX)(i.HY, {
                              children: [
                                (0, i.tZ)(h.Z, {
                                  logo: f ? "clickup-dark" : "clickup-light",
                                  override: { width: 94, height: 23 },
                                }),
                                (0, i.tZ)("span", {
                                  className: ge().logoText,
                                  children: S,
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      j && N && 1 === w
                        ? (0, i.tZ)(p.Z, {
                            isReset: !0,
                            action: "open signup form",
                            source: "work space signup navigation",
                            siteLocation: { root: "nav", parent: "unknown" },
                            otherClasses: [
                              ge().trigger,
                              ge().signup,
                              "navigation__link",
                              ge().signupMinimalNavPaid,
                              V && 1 === O ? ge().signupNewColorCTA : "",
                            ],
                            sectionModelName: "CuNavigationV3",
                            buttonClicked: "Sign Up",
                            clickedType: "nav button",
                            location: "nav",
                            isNavigation: !0,
                            children: (0, i.tZ)("span", { children: X }),
                          })
                        : (0, i.BX)(i.HY, {
                            children: [
                              (0, i.tZ)("div", {
                                className: (0, o.Z)(ge().column, "row"),
                              }),
                              (0, i.BX)("div", {
                                className: (0, o.Z)(
                                  ge().column,
                                  ge().main,
                                  "row"
                                ),
                                children: [
                                  (0, i.tZ)("span", {
                                    className: (0, o.Z)(
                                      ge().group,
                                      f && ge().darkMode
                                    ),
                                    children: (0, i.tZ)(g.Z, {
                                      isReset: !0,
                                      source:
                                        "work space contact sales navigation",
                                      action: "open contact sales form",
                                      siteLocation: "nav",
                                      otherClasses: [
                                        ge().trigger,
                                        ge().contactSales,
                                        "navigation__link",
                                        f ? ge().darkModeTrigger : "",
                                      ],
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Contact Sales",
                                      clickedType: "nav button",
                                      location: "nav",
                                      children: P,
                                    }),
                                  }),
                                  (0, i.BX)("span", {
                                    className: (0, o.Z)(
                                      ge().group,
                                      "row",
                                      f && ge().darkMode
                                    ),
                                    children: [
                                      (0, i.tZ)(m.ZP, {
                                        isReset: !0,
                                        href: "https://app.clickup.com/",
                                        otherClasses: [
                                          ge().trigger,
                                          ge().login,
                                          "navigation__link",
                                          f ? ge().darkModeTrigger : "",
                                        ],
                                        sectionModelName: "CuNavigationV3",
                                        buttonClicked: "Log in",
                                        clickedType: "nav button",
                                        location: "nav",
                                        children: L,
                                      }),
                                      M && 1 === T
                                        ? (0, i.tZ)(p.Z, {
                                            isReset: !0,
                                            action: "open signup form",
                                            source:
                                              "work space signup navigation",
                                            siteLocation: {
                                              root: "nav",
                                              parent: "unknown",
                                            },
                                            otherClasses: [
                                              ge().trigger,
                                              ge().signup,
                                              "navigation__link",
                                              V && 1 === O
                                                ? ge().signupNewColorCTA
                                                : "",
                                            ],
                                            sectionModelName: "CuNavigationV3",
                                            buttonClicked: "Try for free",
                                            clickedType: "nav button",
                                            location: "nav",
                                            isNavigation: !0,
                                            children: (0, i.tZ)("span", {
                                              children: A,
                                            }),
                                          })
                                        : (0, i.tZ)(p.Z, {
                                            isReset: !0,
                                            action: "open signup form",
                                            source:
                                              "work space signup navigation",
                                            siteLocation: {
                                              root: "nav",
                                              parent: "unknown",
                                            },
                                            otherClasses: [
                                              ge().trigger,
                                              ge().signup,
                                              "navigation__link",
                                              V && 1 === O
                                                ? ge().signupNewColorCTA
                                                : "",
                                            ],
                                            sectionModelName: "CuNavigationV3",
                                            buttonClicked: "".concat(f ? A : X),
                                            clickedType: "nav button",
                                            location: "nav",
                                            isNavigation: !0,
                                            children: (0, i.tZ)("span", {
                                              children: f ? A : X,
                                            }),
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      z &&
                        !(j && N && 1 === w) &&
                        (0, i.tZ)(Tt, { minimal: l, darkMode: f }),
                    ],
                  }),
                  "" !== C && (0, i.tZ)("div", { className: ge().overlay }),
                ],
              })
            : (0, i.BX)(_.Provider, {
                value: { baseUrl: n },
                children: [
                  (0, i.BX)("nav", {
                    ref: H,
                    className: D,
                    "data-testid": "cu-navigation-v3",
                    "data-segment-root": "nav",
                    children: [
                      (0, i.tZ)("div", {
                        className: (0, o.Z)(
                          ge().column,
                          ge().group,
                          ge().logo,
                          "row"
                        ),
                        children: (0, i.tZ)(m.ZP, {
                          href: n + G,
                          isReset: !0,
                          buttonClicked: "ClickUp Logo",
                          children: (0, i.BX)(i.HY, {
                            children: [
                              (0, i.tZ)(h.Z, {
                                logo: f ? "clickup-dark" : "clickup-light",
                                override: { width: 94, height: 23 },
                              }),
                              (0, i.tZ)("span", {
                                className: ge().logoText,
                                children: S,
                              }),
                            ],
                          }),
                        }),
                      }),
                      j && N && 1 === w
                        ? (0, i.tZ)("div", {
                            className: (0, o.Z)(ge().column, ge().main, "row"),
                            children: (0, i.tZ)("span", {
                              className: (0, o.Z)(ge().group, "row"),
                              children: (0, i.tZ)(p.Z, {
                                isReset: !0,
                                action: "open signup form",
                                source: "work space signup navigation",
                                siteLocation: {
                                  root: "nav",
                                  parent: "unknown",
                                },
                                otherClasses: [
                                  ge().trigger,
                                  ge().signup,
                                  "navigation__link",
                                  ge().signupMinimalNavPaid,
                                  V && 1 === O ? ge().signupNewColorCTA : "",
                                ],
                                sectionModelName: "CuNavigationV3",
                                buttonClicked: "Sign Up",
                                clickedType: "nav button",
                                location: "nav",
                                isNavigation: !0,
                                children: (0, i.tZ)("span", { children: X }),
                              }),
                            }),
                          })
                        : (0, i.BX)(i.HY, {
                            children: [
                              (0, i.tZ)("div", {
                                className: (0, o.Z)(ge().column, "row"),
                                children: (0, i.BX)("div", {
                                  className: (0, o.Z)(
                                    ge().group,
                                    ge().main,
                                    "row"
                                  ),
                                  children: [
                                    (0, i.tZ)(xe, {
                                      current: C,
                                      setCurrent: Z,
                                    }),
                                    (0, i.tZ)(Je, {
                                      current: C,
                                      setCurrent: Z,
                                    }),
                                    (0, i.tZ)(et, {
                                      current: C,
                                      setCurrent: Z,
                                    }),
                                    (0, i.tZ)(m.ZP, {
                                      href: n + "/pricing",
                                      isReset: !0,
                                      otherClasses: [
                                        ge().trigger,
                                        ge().pricing,
                                        "navigation__link",
                                      ],
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Pricing",
                                      clickedType: "nav link",
                                      location: "nav",
                                      children: "Pricing",
                                    }),
                                    (0, i.tZ)(m.ZP, {
                                      href: n + "/plans/enterprise",
                                      isReset: !0,
                                      otherClasses: [
                                        ge().trigger,
                                        ge().enterprise,
                                        "navigation__link",
                                      ],
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Enterprise",
                                      clickedType: "nav link",
                                      location: "nav",
                                      children: "Enterprise",
                                    }),
                                  ],
                                }),
                              }),
                              (0, i.BX)("div", {
                                className: (0, o.Z)(
                                  ge().column,
                                  ge().main,
                                  "row"
                                ),
                                children: [
                                  (0, i.tZ)("span", {
                                    className: ge().group,
                                    children: (0, i.tZ)(g.Z, {
                                      isReset: !0,
                                      source:
                                        "work space contact sales navigation",
                                      action: "open contact sales form",
                                      siteLocation: "nav",
                                      otherClasses: [
                                        ge().trigger,
                                        ge().contactSales,
                                        "navigation__link",
                                      ],
                                      sectionModelName: "CuNavigationV3",
                                      buttonClicked: "Contact Sales",
                                      clickedType: "nav button",
                                      location: "nav",
                                      children: P,
                                    }),
                                  }),
                                  (0, i.BX)("span", {
                                    className: (0, o.Z)(ge().group, "row"),
                                    children: [
                                      (0, i.tZ)(m.ZP, {
                                        isReset: !0,
                                        href: y,
                                        otherClasses: [
                                          ge().trigger,
                                          ge().login,
                                          "navigation__link",
                                        ],
                                        sectionModelName: "CuNavigationV3",
                                        buttonClicked: "Log in",
                                        clickedType: "nav button",
                                        location: "nav",
                                        children: L,
                                      }),
                                      M && 1 === T
                                        ? (0, i.tZ)(p.Z, {
                                            isReset: !0,
                                            action: "open signup form",
                                            source:
                                              "work space signup navigation",
                                            siteLocation: {
                                              root: "nav",
                                              parent: "unknown",
                                            },
                                            otherClasses: [
                                              ge().trigger,
                                              ge().signup,
                                              "navigation__link",
                                              V && 1 === O
                                                ? ge().signupNewColorCTA
                                                : "",
                                            ],
                                            sectionModelName: "CuNavigationV3",
                                            buttonClicked: "Try for free",
                                            clickedType: "nav button",
                                            location: "nav",
                                            isNavigation: !0,
                                            children: (0, i.tZ)("span", {
                                              children: A,
                                            }),
                                          })
                                        : (0, i.tZ)(p.Z, {
                                            isReset: !0,
                                            action: "open signup form",
                                            source:
                                              "work space signup navigation",
                                            siteLocation: {
                                              root: "nav",
                                              parent: "unknown",
                                            },
                                            otherClasses: [
                                              ge().trigger,
                                              ge().signup,
                                              "navigation__link",
                                              V && 1 === O
                                                ? ge().signupNewColorCTA
                                                : "",
                                            ],
                                            sectionModelName: "CuNavigationV3",
                                            buttonClicked: "Sign Up",
                                            clickedType: "nav button",
                                            location: "nav",
                                            isNavigation: !0,
                                            children: (0, i.tZ)("span", {
                                              children: X,
                                            }),
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      !(!z || (j && N && 1 === w)) &&
                        (0, i.tZ)(Tt, { minimal: l }),
                    ],
                  }),
                  "" !== C && (0, i.tZ)("div", { className: ge().overlay }),
                ],
              });
        },
        Bt = function (e) {
          var t = e.variant,
            n = void 0 === t ? "default" : t,
            a = e.simpleNav,
            o = e.isPaidTraffic,
            r = void 0 !== o && o,
            l = e.navigationTreatment,
            c = e.darkMode,
            d = void 0 !== c && c,
            u = e.otherClasses;
          return (0, i.BX)(i.HY, {
            children: [
              (0, i.tZ)(It, {
                navigationTreatment: l,
                minimal: r || a,
                otherClasses: u,
                darkMode: d,
              }),
              (0, i.tZ)("div", {
                "data-testid": "cu-header",
                className: n,
                children: (0, i.tZ)(s, { image: n }),
              }),
            ],
          });
        };
    },
    70564: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return i._;
        },
        Z: function () {
          return i.Z;
        },
      });
      var i = n(18012);
    },
    82794: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(97997),
        a = (n(11720), n(86010)),
        o = n(76382),
        r = n.n(o),
        l = function (e) {
          var t = e.icon,
            n = e.size,
            o = void 0 === n ? 24 : n,
            l = e.ariaLabel,
            c = e.otherClasses,
            s = o <= 48 && o > 0,
            d = (0, a.Z)("v3", r().icon, r()[t], c),
            u = {
              "--size": "".concat(s ? o : 48, "px"),
              "--scale": "".concat(s ? o / 48 : 1),
            };
          return (0, i.tZ)("div", {
            "data-testid": "integrations-icon-v3",
            style: u,
            className: r().container,
            "aria-label": l,
            children: (0, i.tZ)("span", {
              className: d,
              style: {
                background:
                  "url(/assets/integrations/integrations-v3-sprite.png) var(--icon-position, 0 0)",
              },
            }),
          });
        };
    },
    14369: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return r;
        },
      });
      var i = n(11720),
        a = n(53669),
        o = n(41935),
        r = function () {
          var e = (0, i.useState)("https://app.clickup.com/"),
            t = e[0],
            n = e[1],
            r = (0, a.F)(),
            l = (0, o.x7)();
          return (
            (0, i.useEffect)(
              function () {
                n(
                  l
                    ? "https://app.clickup.com/"
                        .concat(r ? "login" : "signup")
                        .concat(l)
                    : "https://app.clickup.com/"
                );
              },
              [r, l]
            ),
            t
          );
        };
    },
    41935: function (e, t, n) {
      "use strict";
      n.d(t, {
        BF: function () {
          return i.BF;
        },
        x7: function () {
          return i.x7;
        },
        uC: function () {
          return a.u;
        },
      });
      var i = n(98498),
        a = n(97288);
    },
    97288: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return a;
        },
      });
      var i = n(98498),
        a = function (e, t) {
          var n = (0, i.pD)(t);
          if (n) {
            var a = n.getItem("redirectParams");
            if (a) {
              var o = JSON.parse(a);
              delete o[e],
                0 !== Object.keys(o).length
                  ? n.setItem("redirectParams", JSON.stringify(o))
                  : n.removeItem("redirectParams");
            }
          }
        };
    },
    16912: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return i;
        },
      });
      var i = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var i = t.join(" ");
        return i
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9 ]/g, "")
          .replace(/\s+/g, "-");
      };
      t.Z = i;
    },
    26493: function (e) {
      e.exports = {
        wrapper: "CuContentCard_wrapper__I47og",
        vertical: "CuContentCard_vertical__rLnvP",
        horizontal: "CuContentCard_horizontal__pHPuq",
        content: "CuContentCard_content__a5bnb",
        media: "CuContentCard_media__qbcKF",
        imageLast: "CuContentCard_imageLast__xSms0",
        whiteCard: "CuContentCard_whiteCard__dG0ja",
        start: "CuContentCard_start__O0ko4",
        center: "CuContentCard_center__u3pE3",
        title: "CuContentCard_title__N6Cwy",
        logo: "CuContentCard_logo___1_d8",
        description: "CuContentCard_description__3wCOk",
        descriptionWithLogoTitle:
          "CuContentCard_descriptionWithLogoTitle__w9wMq",
        button: "CuContentCard_button__gzR6_",
        whiteCardButton: "CuContentCard_whiteCardButton__Da8Qw",
        mediaWrapper: "CuContentCard_mediaWrapper__4ok4l",
        textOverImage: "CuContentCard_textOverImage__i2KJA",
        cardLink: "CuContentCard_cardLink__HKUj4",
        hasLink: "CuContentCard_hasLink___1lgD",
        learnMore: "CuContentCard_learnMore__zJXpA",
        linkOverlay: "CuContentCard_linkOverlay___z5LW",
        flipCard: "CuContentCard_flipCard__G0zzx",
        frontFace: "CuContentCard_frontFace__CUpxi",
        backFace: "CuContentCard_backFace__moLn7",
        flipImage: "CuContentCard_flipImage__XbkCx",
      };
    },
    41253: function (e) {
      e.exports = {
        wrapper: "CuContentCardV4_wrapper__nz7OR",
        media: "CuContentCardV4_media__nqmd4",
        titleWrapper: "CuContentCardV4_titleWrapper__zqGmk",
        title: "CuContentCardV4_title__IObex",
        textContent: "CuContentCardV4_textContent__meztA",
        description: "CuContentCardV4_description__Tu5g4",
      };
    },
    94909: function (e) {
      e.exports = {
        wrapper: "CuHeaderBlob_wrapper__KLBAh",
        blob: "CuHeaderBlob_blob__RmLwX",
        blobPattern: "CuHeaderBlob_blobPattern__pyOoA",
        default: "CuHeaderBlob_default__IoIWy",
        fullWidth: "CuHeaderBlob_fullWidth__KwfV5",
        knowledgeHub: "CuHeaderBlob_knowledgeHub__7LNu6",
        customer: "CuHeaderBlob_customer__lyEUT",
        singleColumnHero: "CuHeaderBlob_singleColumnHero__3Bf2c",
      };
    },
    27146: function (e) {
      e.exports = {
        wrapper: "CuMobileNavigationV3_wrapper__7w9ys",
        container: "CuMobileNavigationV3_container__z5yGX",
        mobileHeader: "CuMobileNavigationV3_mobileHeader__5I7nS",
        initial: "CuMobileNavigationV3_initial__Bo9jq",
        signup: "CuMobileNavigationV3_signup__9O0a0",
        mobileGroup: "CuMobileNavigationV3_mobileGroup__ru3Iq",
        mobileGroupSignup: "CuMobileNavigationV3_mobileGroupSignup__Qj9RA",
        closeButtonGroup: "CuMobileNavigationV3_closeButtonGroup__DXTPV",
        topLevel: "CuMobileNavigationV3_topLevel__R1qRK",
        bold: "CuMobileNavigationV3_bold__MYwgK",
        trigger: "CuMobileNavigationV3_trigger__kX3vq",
        triggerHover: "CuMobileNavigationV3_triggerHover__qHVAX",
        triggerLabel: "CuMobileNavigationV3_triggerLabel__DeiUQ",
        triggerV2: "CuMobileNavigationV3_triggerV2__uAnzn",
        body: "CuMobileNavigationV3_body__REeLo",
        contentWrapper: "CuMobileNavigationV3_contentWrapper__UhjoM",
        content: "CuMobileNavigationV3_content__bhkhl",
        contentGroup: "CuMobileNavigationV3_contentGroup__HTxWF",
        simpleLink: "CuMobileNavigationV3_simpleLink__d4gPM",
        integrationsLink: "CuMobileNavigationV3_integrationsLink__FZZsH",
        backButton: "CuMobileNavigationV3_backButton__PffFV",
        title: "CuMobileNavigationV3_title__HRctB",
        card: "CuMobileNavigationV3_card__vbMeM",
        link: "CuMobileNavigationV3_link__yTOV3",
        headerButton: "CuMobileNavigationV3_headerButton__cw3_P",
        login: "CuMobileNavigationV3_login__jqRSv",
        tag: "CuMobileNavigationV3_tag__dpOcg",
        scrollShadows: "CuMobileNavigationV3_scrollShadows__C8VbU",
        darkMode: "CuMobileNavigationV3_darkMode__JJoM1",
        signupNewColorCTA: "CuMobileNavigationV3_signupNewColorCTA__puodB",
      };
    },
    74925: function (e) {
      e.exports = {
        wrapper: "CuNavigationV3_wrapper__m1SrN",
        darkMode: "CuNavigationV3_darkMode__Rog1U",
        group: "CuNavigationV3_group__nNAxp",
        signup: "CuNavigationV3_signup__USp4u",
        column: "CuNavigationV3_column__dSSIx",
        logo: "CuNavigationV3_logo__afU6h",
        logoText: "CuNavigationV3_logoText__vYDEr",
        trigger: "CuNavigationV3_trigger__1xofd",
        darkModeTrigger: "CuNavigationV3_darkModeTrigger__IHdlu",
        triggerHover: "CuNavigationV3_triggerHover__W7Bt3",
        triggerLabel: "CuNavigationV3_triggerLabel__6QtX5",
        main: "CuNavigationV3_main__nz8S_",
        enterprise: "CuNavigationV3_enterprise__7JWl3",
        signupNewColorCTA: "CuNavigationV3_signupNewColorCTA__wDOHH",
        overlay: "CuNavigationV3_overlay__DKuBz",
        signupMinimalNavPaid: "CuNavigationV3_signupMinimalNavPaid__Vn778",
        gapZero: "CuNavigationV3_gapZero__j68EH",
      };
    },
    43887: function (e) {
      e.exports = {
        body: "Body_body__nNc9t",
        footer: "Body_footer__xPyYE",
        link: "Body_link__hJf9v",
        footerLink: "Body_footerLink__xl3y0",
        label: "Body_label__5_Gyh",
      };
    },
    12111: function (e) {
      e.exports = {
        root: "DropdownTabs_root__Qz8je",
        list: "DropdownTabs_list__tx_oM",
        trigger: "DropdownTabs_trigger__yWn8_",
        triggerIcon: "DropdownTabs_triggerIcon__F2rNb",
        triggerLabel: "DropdownTabs_triggerLabel__Na_d9",
        triggerCaret: "DropdownTabs_triggerCaret__N931A",
        container: "DropdownTabs_container__OYTwG",
      };
    },
    90077: function (e) {
      e.exports = {
        extra: "Extra_extra__22Eq8",
        extraTitle: "Extra_extraTitle__AGg3Q",
        extraBody: "Extra_extraBody__6mPYd",
      };
    },
    15991: function (e) {
      e.exports = {
        link: "IntegrationLink_link__jc0Df",
        icon: "IntegrationLink_icon__U0mfk",
        label: "IntegrationLink_label__KSaNM",
      };
    },
    44884: function (e) {
      e.exports = { button: "SimpleButton_button__Ccl8e" };
    },
    32561: function (e) {
      e.exports = {
        link: "SimpleLink_link__U6e5F",
        icon: "SimpleLink_icon__EQTXa",
        label: "SimpleLink_label__yPIe2",
      };
    },
    45841: function (e) {
      e.exports = {
        main: "LearnDropdown_main__r9n1t",
        column: "LearnDropdown_column__5wVDP",
        list: "LearnDropdown_list__8FUWn",
        extra: "LearnDropdown_extra__bzXYL",
        caseStudy: "LearnDropdown_caseStudy__U_KBI",
        caseStudyImage: "LearnDropdown_caseStudyImage__jYzBV",
        caseStudyContent: "LearnDropdown_caseStudyContent__NgxUl",
        tag: "LearnDropdown_tag__Hktjd",
      };
    },
    97194: function (e) {
      e.exports = {
        main: "AllFeatures_main__6yzd5",
        subgrid: "AllFeatures_subgrid__ecdxT",
        button: "AllFeatures_button__XNxLy",
        extra: "AllFeatures_extra__dUnSq",
        extraList: "AllFeatures_extraList__OzsQm",
        extraLink: "AllFeatures_extraLink__s0FwR",
        extraTag: "AllFeatures_extraTag__ZxUHr",
      };
    },
    70019: function (e) {
      e.exports = {
        main: "Capabilities_main__9P3_8",
        extra: "Capabilities_extra__xulF7",
        subgrid: "Capabilities_subgrid__uXgzB",
        group: "Capabilities_group__1O3dD",
        title: "Capabilities_title__yVP2t",
        list: "Capabilities_list__LUECn",
        extraTitle: "Capabilities_extraTitle__GEht4",
        extraList: "Capabilities_extraList__rswL8",
        extraButton: "Capabilities_extraButton__kItQm",
        extraLogo: "Capabilities_extraLogo__3k_5h",
      };
    },
    82155: function (e) {
      e.exports = {
        main: "Integrations_main__cXrvd",
        subgrid: "Integrations_subgrid__ne3lW",
        extra: "Integrations_extra__KalxU",
        extraList: "Integrations_extraList__NrP0e",
        toggl: "Integrations_toggl__s_JsK",
      };
    },
    78527: function (e) {
      e.exports = {
        link: "CardLink_link__s_2uV",
        title: "CardLink_title__LVM9T",
        body: "CardLink_body__9Nnz5",
      };
    },
    68657: function (e) {
      e.exports = {
        main: "CompanySize_main__Luq2x",
        link: "CompanySize_link__pgjlD",
        full: "CompanySize_full__ovpvk",
        fullBody: "CompanySize_fullBody___BvWM",
        fullArrow: "CompanySize_fullArrow__H_sYD",
      };
    },
    48449: function (e) {
      e.exports = {
        description: "G2Badge_description__cxVOF",
        badge: "G2Badge_badge__Yj9Zb",
      };
    },
    30409: function (e) {
      e.exports = {
        main: "Team_main__udEl3",
        link: "Team_link__J6k_S",
        full: "Team_full__8hPGh",
        fullBody: "Team_fullBody__yiNaY",
        fullArrow: "Team_fullArrow__9Mx6Z",
      };
    },
    18784: function (e) {
      e.exports = {
        main: "Templates_main__f5EsD",
        link: "Templates_link__s7Uv3",
        full: "Templates_full__59KHZ",
        fullBody: "Templates_fullBody__fQt6m",
        fullArrow: "Templates_fullArrow__Xq4yW",
        card: "Templates_card__NDYYA",
        callout: "Templates_callout__sOwWd",
        calloutLink: "Templates_calloutLink__Jun_F",
        calloutOverlay: "Templates_calloutOverlay__tC5nJ",
      };
    },
    66076: function (e) {
      e.exports = {
        container: "Grid_container___GSpV",
        grid: "Grid_grid__gBt7g",
      };
    },
    76382: function (e) {
      e.exports = {
        container: "IntegrationsIconV3_container__IRb0G",
        icon: "IntegrationsIconV3_icon__H9DNq",
        asana: "IntegrationsIconV3_asana__Z3pBo",
        excel: "IntegrationsIconV3_excel__GV7ME",
        gsuite: "IntegrationsIconV3_gsuite__kn6Nc",
        "gsuite-light": "IntegrationsIconV3_gsuite-light__1zZ9e",
        integromat: "IntegrationsIconV3_integromat__lM_E5",
        trello: "IntegrationsIconV3_trello__RbJrV",
        jira: "IntegrationsIconV3_jira__4OJ3s",
        monday: "IntegrationsIconV3_monday__9K1hG",
        slack: "IntegrationsIconV3_slack__tV68h",
        notion: "IntegrationsIconV3_notion__jJyT_",
        sentry: "IntegrationsIconV3_sentry__iAlZw",
        miro: "IntegrationsIconV3_miro__hYkDq",
        smartsheet: "IntegrationsIconV3_smartsheet___RyGc",
        box: "IntegrationsIconV3_box__oR29S",
        loom: "IntegrationsIconV3_loom__PtpIB",
        wrike: "IntegrationsIconV3_wrike__9Fjo7",
        teams: "IntegrationsIconV3_teams__bvy4F",
        chrome: "IntegrationsIconV3_chrome__k4KqH",
        "clickup-lg": "IntegrationsIconV3_clickup-lg__u_Ggj",
        "clickup-sm": "IntegrationsIconV3_clickup-sm__8Di0y",
        bitbucket: "IntegrationsIconV3_bitbucket__ieStd",
        discord: "IntegrationsIconV3_discord__2thgd",
        everhour: "IntegrationsIconV3_everhour__Vc50V",
        dropbox: "IntegrationsIconV3_dropbox__vnK2V",
        "github-white": "IntegrationsIconV3_github-white__BgQYK",
        figma: "IntegrationsIconV3_figma__65qgg",
        giphy: "IntegrationsIconV3_giphy__W6_ze",
        gitlab: "IntegrationsIconV3_gitlab__JTTXm",
        "github-black": "IntegrationsIconV3_github-black__Wx6yA",
        "google-drive": "IntegrationsIconV3_google-drive__QtN3x",
        gmail: "IntegrationsIconV3_gmail__lzw2K",
        "google-hangouts": "IntegrationsIconV3_google-hangouts__Mh7ar",
        clockify: "IntegrationsIconV3_clockify__aJYP7",
        "google-calendar": "IntegrationsIconV3_google-calendar__AHx1h",
        tableau: "IntegrationsIconV3_tableau__yB4Zv",
        iCal: "IntegrationsIconV3_iCal__PyK_K",
        hubspot: "IntegrationsIconV3_hubspot__cOa21",
        harvest: "IntegrationsIconV3_harvest__GT_au",
        linkedin: "IntegrationsIconV3_linkedin__vQywd",
        intercom: "IntegrationsIconV3_intercom__VlSKP",
        hubstaff: "IntegrationsIconV3_hubstaff__qf_dG",
        office365: "IntegrationsIconV3_office365__jyVdm",
        zapier: "IntegrationsIconV3_zapier__pfwFY",
        "make-integromat": "IntegrationsIconV3_make-integromat__fUaLM",
        timely: "IntegrationsIconV3_timely__BdYdH",
        zoom: "IntegrationsIconV3_zoom__IqFa6",
        onedrive: "IntegrationsIconV3_onedrive__f9VPb",
        toggl: "IntegrationsIconV3_toggl__gLwk_",
        "ms-teams": "IntegrationsIconV3_ms-teams__KE4lA",
        salesforce: "IntegrationsIconV3_salesforce__37ngK",
        timeneye: "IntegrationsIconV3_timeneye__nskNa",
        zendesk: "IntegrationsIconV3_zendesk__wUvG4",
        timedoctor: "IntegrationsIconV3_timedoctor__IIZgh",
        outlook: "IntegrationsIconV3_outlook__o9hBn",
        unito: "IntegrationsIconV3_unito__AMAau",
        storybook: "IntegrationsIconV3_storybook__ege6X",
      };
    },
  },
]);
