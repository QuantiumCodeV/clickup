(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8085],
  {
    84863: function (t, e, n) {
      "use strict";
      var r,
        o = n(11720);
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          i.apply(this, arguments)
        );
      }
      e.Z = function (t) {
        return o.createElement(
          "svg",
          i(
            {
              width: 16,
              height: 10,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            t
          ),
          r ||
            (r = o.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M1 3.996h11.59L10.3 1.707A1 1 0 1 1 11.715.293l3.992 3.992a.997.997 0 0 1 .293.71.997.997 0 0 1-.293.708l-4 4a1 1 0 0 1-1.414-1.414l2.293-2.293H1a1 1 0 0 1 0-2Z",
              fill: "rgb(var(--color-icon, var(--color-purple-1)))",
            }))
        );
      };
    },
    14045: function (t, e, n) {
      "use strict";
      n.d(e, {
        S: function () {
          return h;
        },
      });
      var r = n(97997),
        o = n(11720),
        i = n(30139),
        a = n(53669),
        c = n(98498),
        l = n(25296),
        u = n(39329),
        s = n(86010),
        d = n(81361);
      function f(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function p(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function m(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      function b(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  n = n.call(t);
                  !(a = (r = n.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (l) {
                (c = !0), (o = l);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" === typeof t) return f(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return f(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var h = function (t) {
        var e,
          n = t.buttonSize,
          f = t.children,
          h = void 0 === f ? "Get Started" : f,
          g = t.href,
          v = (t.color, t.action),
          y = (t.source, t.siteLocation),
          _ = void 0 === y ? void 0 : y,
          C = t.redirectParams,
          k = t.onClick,
          S = t.isOutline,
          w = void 0 !== S && S,
          O = t.isReset,
          Z = t.otherClasses,
          T = t.version,
          P = t.buttonStyle,
          I = t.isHrefTargetBlank,
          j = t.iconStartV3,
          B = t.iconEndV3,
          N = t.isNavigation,
          x = m(t, [
            "buttonSize",
            "children",
            "href",
            "color",
            "action",
            "source",
            "siteLocation",
            "redirectParams",
            "onClick",
            "isOutline",
            "isReset",
            "otherClasses",
            "version",
            "buttonStyle",
            "isHrefTargetBlank",
            "iconStartV3",
            "iconEndV3",
            "isNavigation",
          ]),
          E = b(o.default.useState(null), 2),
          A = E[0],
          U = E[1],
          M = (0, d.cC)("new-signup-cta-color"),
          L = (0, d.aS)("new-signup-cta-color", 0),
          F = x.buttonClicked,
          D = x.linkTitle,
          H = x.sectionId,
          z = x.sectionModelName,
          R = x.sectionInternalName,
          W = x.sectionIndex,
          X = x.sectionColor,
          G = x.sectionLabel,
          V = x.sectionTitle,
          Y = x.articleTitle,
          J = x.articleLabel,
          q = x.articleBlockId,
          K = x.articleBlockIndex,
          Q = x.articleBlockModelName,
          $ = x.clickedType,
          tt = void 0 === $ ? "button" : $,
          et = "click web",
          nt = JSON.stringify(C),
          rt = (0, l.d)().actions,
          ot = rt.setIsSignUpOverlayOpen,
          it = rt.setIsEnterpriseSalesModalOpen,
          at = rt.setClickedLocation,
          ct = rt.setIsAiDemoModalOpen;
        if (
          ((0, o.useEffect)(function () {
            var t = (0, a.F)();
            U(t ? t.toString() : null);
          }, []),
          !v && !g)
        )
          return (0, r.tZ)(r.HY, {});
        v &&
          "open signup form" === v &&
          ((et = A
            ? "skip email capture overlay"
            : "trigger email capture overlay"),
          (e = function (t) {
            (0, c.uF)(t, "sessionStorage"), ot(!A), at(t);
          })),
          v &&
            "open contact sales form" === v &&
            (e = function (t) {
              it(!0), at(t, _);
            }),
          v &&
            "open ai demo form" === v &&
            (e = function (t) {
              ct(!0), at(t, _);
            });
        var lt = (0, s.Z)(Z && Z),
          ut = o.default.Children.toArray(h).some(function (t) {
            var e = function (t) {
              return (
                !!o.default.isValidElement(t) &&
                ("span" === t.type ||
                  o.default.Children.toArray(t.props.children).some(e))
              );
            };
            return e(t);
          });
        return (0, r.tZ)(
          "div",
          (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(n);
              "function" === typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                  })
                )),
                r.forEach(function (e) {
                  p(t, e, n[e]);
                });
            }
            return t;
          })({ "data-testid": "cu-action-button" }, (0, i.s)(x), {
            children: (0, r.tZ)(u.ZP, {
              action: v,
              buttonSize: n,
              href:
                A && "open signup form" === v
                  ? "https://app.clickup.com/login".concat((0, c.x7)(C))
                  : g,
              onClick: function (t) {
                e(t), k && k(t);
              },
              isOutline: w,
              isReset: O,
              otherClasses: lt,
              redirectParams: nt,
              version: T,
              buttonStyle: P,
              isHrefTargetBlank: I,
              iconStartV3: j,
              iconEndV3: B,
              redirectParamsProp: nt,
              eventName: et,
              buttonClicked: F,
              linkTitle: D,
              sectionId: H,
              sectionModelName: z,
              sectionInternalName: R,
              sectionIndex: W,
              sectionColor: X,
              sectionLabel: G,
              sectionTitle: V,
              articleTitle: Y,
              articleLabel: J,
              articleBlockId: q,
              articleBlockIndex: K,
              articleBlockModelName: Q,
              clickedType: tt,
              children:
                ut || N || !M || 1 !== L
                  ? h
                  : (0, r.tZ)("span", { children: h }),
            }),
          })
        );
      };
      e.Z = h;
    },
    94202: function (t, e, n) {
      "use strict";
      n.d(e, {
        S: function () {
          return r.S;
        },
        Z: function () {
          return r.Z;
        },
      });
      var r = n(14045);
    },
    39329: function (t, e, n) {
      "use strict";
      n.d(e, {
        ZP: function () {
          return I;
        },
      });
      var r = n(97997),
        o = (n(11720), n(86010)),
        i = n(19515),
        a = n(44321),
        c = n(51663),
        l = n(25296),
        u = n(2308),
        s = n(4460),
        d = n.n(s),
        f = n(66343),
        p = n(87078),
        m = n(81361),
        b = n(79285),
        h = n.n(b),
        g = n(24928);
      function v(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function y(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              y(t, e, n[e]);
            });
        }
        return t;
      }
      function C(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      function k(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  n = n.call(t);
                  !(a = (r = n.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (l) {
                (c = !0), (o = l);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" === typeof t) return v(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return v(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var S = function (t) {
        var e = t.children,
          n = void 0 === e ? "Add button label..." : e,
          a = t.href,
          s = t.isHrefTargetBlank,
          d = t.buttonSize,
          m = t.isSubmit,
          b = t.isDisabled,
          v = t.otherClasses,
          y = t.onClick,
          S = t.redirectParams,
          w = t.shouldTrack,
          O = void 0 === w || w,
          Z = t.buttonStyle,
          T = t.iconStart,
          P = t.iconEnd,
          I = t.action,
          j = C(t, [
            "children",
            "href",
            "isHrefTargetBlank",
            "buttonSize",
            "isSubmit",
            "isDisabled",
            "otherClasses",
            "onClick",
            "redirectParams",
            "shouldTrack",
            "buttonStyle",
            "iconStart",
            "iconEnd",
            "action",
          ]),
          B = j.eventName,
          N = void 0 === B ? "click web" : B,
          x = j.buttonClicked,
          E = j.linkTitle,
          A = j.source,
          U = j.sectionId,
          M = j.sectionModelName,
          L = j.sectionInternalName,
          F = j.sectionIndex,
          D = j.sectionColor,
          H = j.sectionLabel,
          z = j.sectionTitle,
          R = j.articleTitle,
          W = j.articleLabel,
          X = j.articleBlockId,
          G = j.articleBlockIndex,
          V = j.articleBlockModelName,
          Y = j.clickedType,
          J = void 0 === Y ? "button" : Y,
          q = C(j, [
            "eventName",
            "buttonClicked",
            "linkTitle",
            "source",
            "sectionId",
            "sectionModelName",
            "sectionInternalName",
            "sectionIndex",
            "sectionColor",
            "sectionLabel",
            "sectionTitle",
            "articleTitle",
            "articleLabel",
            "articleBlockId",
            "articleBlockIndex",
            "articleBlockModelName",
            "clickedType",
          ]),
          K = { sm: h().buttonSm, md: h().buttonMd, lg: h().buttonLg };
        console.log("buttonSize", d);
        var Q = {
            primary: h().buttonPrimary,
            secondary: h().buttonSecondary,
            "secondary-color": h().buttonSecondaryColor,
            tertiary: h().buttonTertiary,
            "tertiary-color": h().buttonTertiaryColor,
          },
          $ = (0, o.Z)(
            "v4",
            h().button,
            d && K[d],
            "Add button label..." === n && "fallback",
            Z && Q[Z],
            d &&
              (function (t) {
                switch (t) {
                  case "sm":
                  default:
                    return "radius-md text-sm";
                  case "md":
                    return "radius-md text-lg";
                  case "lg":
                    return "radius-md";
                }
              })(d),
            v
          ),
          tt = (0, l.d)().actions.setClickedLocation,
          et = k((0, c.Bu)(_({}, j)), 2),
          nt = et[0],
          rt = et[1];
        return a
          ? (0, r.tZ)(i.Z, {
              condition: b,
              wrapper: function (t) {
                return (0, r.tZ)("div", {
                  className: h().disabledWrapper,
                  children: t,
                });
              },
              children: (0, r.tZ)(g.Z, {
                "data-testid": "cu-button",
                otherClasses: $,
                href: a,
                underline: !1,
                targetBlank: s,
                redirectParams: S,
                eventName: N,
                buttonClicked: x,
                linkTitle: E,
                source: A,
                sectionId: U,
                sectionModelName: M,
                sectionInternalName: L,
                sectionIndex: F,
                sectionColor: D,
                sectionLabel: H,
                sectionTitle: z,
                articleTitle: R,
                articleLabel: W,
                articleBlockId: X,
                articleBlockIndex: G,
                articleBlockModelName: V,
                clickedType: J,
                children: (0, r.BX)("strong", {
                  children: [
                    T &&
                      (0, r.tZ)(f.ZP, {
                        iconWidth: 20,
                        iconHeight: 20,
                        icon: T,
                      }),
                    n,
                    P &&
                      (0, r.tZ)(f.ZP, {
                        iconWidth: 20,
                        iconHeight: 20,
                        icon: P,
                      }),
                  ],
                }),
              }),
            })
          : (0, r.tZ)(i.Z, {
              condition: b,
              wrapper: function (t) {
                return (0, r.tZ)("div", {
                  className: h().disabledWrapper,
                  children: t,
                });
              },
              children: (0, r.tZ)(
                "button",
                _(
                  {
                    "data-testid": "cu-button",
                    type: m ? "submit" : "button",
                    className: $,
                    onClick: function (t) {
                      try {
                        var e = (0, u.UH)(t),
                          n = (0, p.B)(),
                          r =
                            I && n
                              ? window.sessionStorage.getItem("journey")
                              : void 0;
                        tt(t),
                          O &&
                            (nt(N, _({}, rt, { journey: r })),
                            "trigger email capture overlay" === N &&
                              nt(
                                "click web",
                                _({}, rt, {
                                  location:
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.location,
                                  journey: r,
                                })
                              ));
                      } catch (o) {
                        console.error("Error in CuButton handleClick: ", o);
                      }
                      try {
                        y && y(t);
                      } catch (i) {
                        console.error("Error in CuButton onClick: ", i);
                      }
                    },
                    disabled: b,
                    "data-cu-redirect-params": S,
                    "data-segment-button-clicked": x,
                  },
                  q,
                  {
                    children: (0, r.BX)(r.HY, {
                      children: [
                        T &&
                          (0, r.tZ)(f.ZP, {
                            iconWidth: 20,
                            iconHeight: 20,
                            icon: T,
                          }),
                        (0, r.tZ)("strong", { children: n }),
                        P &&
                          (0, r.tZ)(f.ZP, {
                            iconWidth: 20,
                            iconHeight: 20,
                            icon: P,
                          }),
                      ],
                    }),
                  }
                )
              ),
            });
      };
      function w(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function O(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Z(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              O(t, e, n[e]);
            });
        }
        return t;
      }
      function T(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      function P(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  n = n.call(t);
                  !(a = (r = n.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (l) {
                (c = !0), (o = l);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" === typeof t) return w(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return w(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var I = function (t) {
        var e = t.children,
          n = void 0 === e ? "Add button label..." : e,
          s = t.href,
          b = t.isHrefTargetBlank,
          h = t.color,
          g = t.buttonSize,
          v = t.isSubmit,
          y = t.isActive,
          _ = t.isDisabled,
          C = t.isPill,
          k = t.isOutline,
          w = t.isReset,
          O = t.isGhost,
          I = t.hasShadow,
          j = void 0 === I || I,
          B = t.otherClasses,
          N = t.onClick,
          x = t.redirectParams,
          E = t.shouldTrack,
          A = void 0 === E || E,
          U = t.version,
          M = t.buttonStyle,
          L = t.iconStartV3,
          F = t.iconEndV3,
          D = t.action,
          H = T(t, [
            "children",
            "href",
            "isHrefTargetBlank",
            "color",
            "buttonSize",
            "isSubmit",
            "isActive",
            "isDisabled",
            "isPill",
            "isOutline",
            "isReset",
            "isGhost",
            "hasShadow",
            "otherClasses",
            "onClick",
            "redirectParams",
            "shouldTrack",
            "version",
            "buttonStyle",
            "iconStartV3",
            "iconEndV3",
            "action",
          ]),
          z = H.eventName,
          R = void 0 === z ? "click web" : z,
          W = H.buttonClicked,
          X = H.linkTitle,
          G = H.source,
          V = H.sectionId,
          Y = H.sectionModelName,
          J = H.sectionInternalName,
          q = H.sectionIndex,
          K = H.sectionColor,
          Q = H.sectionLabel,
          $ = H.sectionTitle,
          tt = H.articleTitle,
          et = H.articleLabel,
          nt = H.articleBlockId,
          rt = H.articleBlockIndex,
          ot = H.articleBlockModelName,
          it = H.clickedType,
          at = void 0 === it ? "button" : it,
          ct = T(H, [
            "eventName",
            "buttonClicked",
            "linkTitle",
            "source",
            "sectionId",
            "sectionModelName",
            "sectionInternalName",
            "sectionIndex",
            "sectionColor",
            "sectionLabel",
            "sectionTitle",
            "articleTitle",
            "articleLabel",
            "articleBlockId",
            "articleBlockIndex",
            "articleBlockModelName",
            "clickedType",
          ]),
          lt = (0, m.cC)("new-signup-cta-color"),
          ut = (0, m.aS)("new-signup-cta-color", 0),
          st = { sm: d().buttonSm, md: d().buttonMd, lg: d().buttonLg },
          dt = {
            primary: d().buttonPrimary,
            "primary-sub": d().buttonPrimarySub,
            secondary: d().buttonSecondary,
            "secondary-sub": d().buttonSecondarySub,
            tertiary: d().buttonTertiary,
            "tertiary-sub": d().buttonTertiarySub,
            other: d().buttonOther,
            standard: d().buttonStandard,
            tab: d().buttonTab,
            "tab-active": d().buttonTabActive,
            "ai-pink": d().buttonAiPink,
            "secondary-color": "",
            "tertiary-color": "",
          };
        dt.primary =
          lt && 1 === ut
            ? (0, o.Z)(d().buttonPrimary, d().signupNewColorCTA)
            : (0, o.Z)(d().buttonPrimary);
        var ft = M && M.includes("-sub") ? 16 : 20,
          pt = w
            ? (0, o.Z)(B)
            : (0, o.Z)(
                d().button,
                h,
                g && st[g],
                k && d().buttonOutline,
                O && d().buttonGhost,
                C && d().buttonPill,
                y && d().isActive,
                j && d().buttonShadow,
                "Add button label..." === n && "fallback",
                U && d()[U],
                M && dt[M],
                B,
                g &&
                  (function (t) {
                    switch (t) {
                      case "sm":
                        return "radius-md text-sm";
                      case "md":
                        return "radius-md text-lg";
                      case "lg":
                        return "radius-md";
                      default:
                        return "";
                    }
                  })(g)
              ),
          mt = (0, l.d)().actions.setClickedLocation,
          bt = P((0, c.Bu)(Z({}, H, { color: h })), 2),
          ht = bt[0],
          gt = bt[1];
        return "v4" === U
          ? (0, r.tZ)(
              S,
              Z(
                {
                  href: s,
                  isHrefTargetBlank: b,
                  isSubmit: v,
                  isDisabled: _,
                  otherClasses: B,
                  onClick: N,
                  redirectParams: x,
                  shouldTrack: A,
                  buttonStyle: M,
                  buttonSize: g,
                  iconStart: L,
                  iconEnd: F,
                },
                H,
                { children: n }
              )
            )
          : s
          ? (0, r.tZ)(i.Z, {
              condition: _,
              wrapper: function (t) {
                return (0, r.tZ)("div", {
                  className: d().disabledWrapper,
                  children: t,
                });
              },
              children: (0, r.tZ)(a.Z, {
                "data-testid": "cu-button",
                otherClasses: pt,
                href: s,
                underline: !1,
                targetBlank: b,
                redirectParams: x,
                version: U,
                isReset: w,
                eventName: R,
                buttonClicked: W,
                linkTitle: X,
                source: G,
                sectionId: V,
                sectionModelName: Y,
                sectionInternalName: J,
                sectionIndex: q,
                sectionColor: K,
                sectionLabel: Q,
                sectionTitle: $,
                articleTitle: tt,
                articleLabel: et,
                articleBlockId: nt,
                articleBlockIndex: rt,
                articleBlockModelName: ot,
                clickedType: at,
                children: (0, r.BX)(r.HY, {
                  children: [
                    L &&
                      (0, r.tZ)(f.ZP, {
                        iconWidth: 20,
                        iconHeight: 20,
                        icon: L,
                      }),
                    n,
                    F &&
                      (0, r.tZ)(f.ZP, {
                        iconWidth: 20,
                        iconHeight: 20,
                        icon: F,
                      }),
                  ],
                }),
              }),
            })
          : (0, r.tZ)(i.Z, {
              condition: _,
              wrapper: function (t) {
                return (0, r.tZ)("div", {
                  className: d().disabledWrapper,
                  children: t,
                });
              },
              children: (0, r.tZ)(
                "button",
                Z(
                  {
                    "data-testid": "cu-button",
                    type: v ? "submit" : "button",
                    className: pt,
                    onClick: function (t) {
                      try {
                        var e = (0, u.UH)(t),
                          n = (0, p.B)(),
                          r =
                            D && n
                              ? window.sessionStorage.getItem("journey")
                              : void 0;
                        mt(t),
                          A &&
                            (ht(R, Z({}, gt, { journey: r })),
                            "trigger email capture overlay" === R &&
                              ht(
                                "click web",
                                Z({}, gt, {
                                  location:
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.location,
                                  journey: r,
                                })
                              ));
                      } catch (o) {
                        console.error("Error in CuButton handleClick: ", o);
                      }
                      try {
                        N && N(t);
                      } catch (i) {
                        console.error("Error in CuButton onClick: ", i);
                      }
                    },
                    disabled: _,
                    "data-cu-redirect-params": x,
                    "data-segment-button-clicked": W,
                  },
                  ct,
                  {
                    children: (0, r.BX)(r.HY, {
                      children: [
                        L &&
                          (0, r.tZ)(f.ZP, {
                            iconWidth: ft,
                            iconHeight: ft,
                            icon: L,
                          }),
                        n,
                        F &&
                          (0, r.tZ)(f.ZP, {
                            iconWidth: ft,
                            iconHeight: ft,
                            icon: F,
                          }),
                      ],
                    }),
                  }
                )
              ),
            });
      };
    },
    63538: function (t, e, n) {
      "use strict";
      n.d(e, {
        a: function () {
          return C;
        },
        Z: function () {
          return k;
        },
      });
      var r,
        o = n(97997),
        i = (n(11720), n(86010)),
        a = n(86437),
        c = n(74129),
        l = n(44321),
        u = n(15502),
        s = n.n(u);
      function d(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var f = {
          renderNode:
            ((r = {}),
            d(r, a.BLOCKS.EMBEDDED_ASSET, function (t) {
              return (0,
              o.tZ)("img", { src: t.data.target.fields.file.url, height: t.data.target.fields.file.details.image.height, width: t.data.target.fields.file.details.image.width, alt: t.data.target.fields.description });
            }),
            d(r, a.INLINES.ASSET_HYPERLINK, function (t, e) {
              return (0,
              o.tZ)(l.l, { href: "https:".concat(t.data.target.fields.file.url), children: e });
            }),
            d(r, a.INLINES.ENTRY_HYPERLINK, function (t, e) {
              return (0,
              o.tZ)(l.l, { href: t.data.target.fields.canonical, children: e });
            }),
            d(r, a.INLINES.HYPERLINK, function (t, e) {
              var n = t.data;
              return (0,
              o.tZ)(l.l, { href: n.uri, children: (0, o.tZ)(o.HY, { children: e }) });
            }),
            r),
        },
        p = function (t) {
          var e = t.richTextResponse,
            n = t.otherClasses,
            r = (0, i.Z)(s().wrapper, n);
          return (0, o.tZ)("div", {
            className: (0, i.Z)(r, "paragraph-md"),
            "data-testid": "cu-rich-content",
            children: e && (0, c.h)(e, f),
          });
        },
        m = n(66284),
        b = n(30139),
        h = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#039;": "'",
        },
        g = n(34156);
      function v(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              v(t, e, n[e]);
            });
        }
        return t;
      }
      function _(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      var C = function (t) {
          var e = t.description,
            n = t.otherClasses,
            r = t.version,
            a = t.paragraphSize,
            c = _(t, [
              "description",
              "otherClasses",
              "version",
              "paragraphSize",
            ]);
          if (e && "string" !== typeof e)
            return (0, o.tZ)(
              p,
              y({}, c, {
                otherClasses: (0, i.Z)(n),
                richTextResponse: e,
                "data-testid": "cu-description",
              })
            );
          var l,
            u =
              "string" === typeof e && -1 !== e.indexOf("&")
                ? e
                    .replace(/&(\w+);/g, function (t) {
                      return h[t] || t;
                    })
                    .replace(/&#(\d+);/g, function (t, e) {
                      return String.fromCharCode(e);
                    })
                : e;
          return (0, o.tZ)(
            m.ZP,
            y(
              {},
              (0, b.s)(c),
              (0, g.A)(
                "field",
                null === c ||
                  void 0 === c ||
                  null === (l = c.sbFields) ||
                  void 0 === l
                  ? void 0
                  : l.description
              ),
              {
                markdown: u || "",
                otherClasses: (0, i.Z)(n),
                "data-testid": "cu-description",
                version: r,
                paragraphSize: a,
              }
            )
          );
        },
        k = C;
    },
    33663: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return l;
        },
      });
      var r = n(97997),
        o = n(11720),
        i = n(9008);
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var c = "/assets/brand/clickup-meta.png",
        l = function (t) {
          var e = t.title,
            n = t.description,
            l = t.canonical,
            u = t.themeColor,
            s = t.ogImage,
            d = t.twitterImage,
            f = t.twitterCardType,
            p = t.isNoIndex,
            m = t.headInjection,
            b = t.showSmartAppBanner,
            h = void 0 === b || b;
          return (0, r.BX)(i.default, {
            children: [
              (0, r.tZ)("title", { children: e }),
              (0, r.tZ)("meta", { content: e, name: "title" }),
              (0, r.tZ)("meta", { content: s || c, property: "og:image" }),
              (0, r.tZ)("meta", {
                content: s || c,
                property: "og:image:secure_url",
              }),
              (0, r.tZ)("meta", { content: s || c, itemProp: "image" }),
              f &&
                (0, r.BX)(r.HY, {
                  children: [
                    (0, r.tZ)("meta", { content: f, name: "twitter:card" }),
                    (0, r.tZ)("meta", { content: e, name: "twitter:title" }),
                  ],
                }),
              (0, r.tZ)("meta", {
                content: d || "/assets/brand/clickup-logo-text.png",
                name: "twitter:image",
              }),
              (0, r.tZ)("meta", { content: n, name: "description" }),
              l && (0, r.tZ)("link", { href: l, rel: "canonical" }),
              p && (0, r.tZ)("meta", { name: "robots", content: "noindex" }),
              (0, r.tZ)("link", {
                href: "/assets/manifest.json",
                rel: "manifest",
              }),
              (0, r.tZ)("link", {
                href: "/favicons/apple-touch-icon.png",
                rel: "apple-touch-icon",
              }),
              (0, r.tZ)("link", {
                href: "/favicons/favicon.png",
                rel: "icon",
                sizes: "16x16",
                type: "image/png",
              }),
              (0, r.tZ)("link", {
                href: "/favicons/favicon-32x32.png",
                rel: "icon",
                sizes: "32x32",
                type: "image/png",
              }),
              (0, r.tZ)("link", {
                href: "/assets/favicons/manifest_favicon.json",
                rel: "manifest",
              }),
              h &&
                (0, r.tZ)("meta", {
                  content: "app-id=1535098836",
                  name: "apple-itunes-app",
                }),
              !!u && (0, r.tZ)("meta", { content: u, name: "theme-color" }),
              (0, r.tZ)("link", {
                rel: "preconnect",
                href: "https://pages.clickup.com/js/forms2/js/forms2.min.js",
              }),
              (0, r.tZ)("link", {
                rel: "dns-prefetch",
                href: "https://pages.clickup.com/js/forms2/js/forms2.min.js",
              }),
              (0, r.tZ)("link", {
                rel: "preload",
                as: "script",
                href: "https://pages.clickup.com/js/forms2/js/forms2.min.js",
              }),
              (0, r.tZ)("link", {
                rel: "preload",
                as: "font",
                type: "font/woff2",
                href: "/assets/fonts/Axiforma-Regular.woff2",
                crossOrigin: "anonymous",
              }),
              (0, r.tZ)("link", {
                rel: "preload",
                as: "font",
                type: "font/woff2",
                href: "/assets/fonts/Axiforma-Bold.woff2",
                crossOrigin: "anonymous",
              }),
              (0, r.tZ)("link", {
                rel: "dns-prefetch",
                href: "https://images.ctfassets.net",
              }),
              (0, r.tZ)("link", {
                rel: "dns-prefetch",
                href: "https://rive.app",
              }),
              (0, r.tZ)("link", {
                rel: "dns-prefetch",
                href: "https://public.rive.app",
              }),
              (0, r.tZ)("link", {
                rel: "dns-prefetch",
                href: "https://cdn.jsdelivr.net",
              }),
              (0, r.tZ)("link", {
                rel: "dns-prefetch",
                href: "https://cdn.cookielaw.org",
              }),
              m &&
                m.map(function (t, e) {
                  var n = t.tag,
                    r = t.attributes;
                  return o.default.createElement(
                    n,
                    (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                          r = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (
                              t
                            ) {
                              return Object.getOwnPropertyDescriptor(n, t)
                                .enumerable;
                            })
                          )),
                          r.forEach(function (e) {
                            a(t, e, n[e]);
                          });
                      }
                      return t;
                    })({ key: e }, r)
                  );
                }),
            ],
          });
        };
    },
    51794: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return c;
        },
      });
      var r = n(97997),
        o = (n(11720), n(86010));
      function i(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function a(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      var c = function (t) {
        var e = t.icon,
          n = t.iconColor,
          c = t.iconWidth,
          l = void 0 === c ? 26 : c,
          u = t.iconHeight,
          s = void 0 === u ? 26 : u,
          d = t.otherClasses,
          f = a(t, [
            "icon",
            "iconColor",
            "iconWidth",
            "iconHeight",
            "otherClasses",
          ]),
          p = (0, o.Z)(d, n);
        return (0, r.tZ)(
          "svg",
          (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(n);
              "function" === typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                  })
                )),
                r.forEach(function (e) {
                  i(t, e, n[e]);
                });
            }
            return t;
          })(
            {
              "data-testid": "cu-icon",
              className: p,
              style: n && { "--color-icon": "rgb(var(--highlight-primary))" },
              width: l,
              height: s,
              viewBox: "0 0 ".concat(l, " ").concat(s),
              "aria-hidden": "true",
              focusable: "false",
            },
            f,
            {
              children: (0, r.tZ)("use", {
                href: "/assets/cuicons.svg#".concat(e),
                xlinkHref: "/assets/cuicons.svg#".concat(e),
              }),
            }
          )
        );
      };
      e.Z = c;
    },
    66343: function (t, e, n) {
      "use strict";
      n.d(e, {
        bv: function () {
          return u;
        },
        ZP: function () {
          return s;
        },
      });
      var r = n(97997),
        o = (n(11720), n(86010));
      function i(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              i(t, e, n[e]);
            });
        }
        return t;
      }
      function c(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      var l = function (t) {
          var e = t.icon,
            n = t.iconWidth,
            i = void 0 === n ? 26 : n,
            l = t.iconHeight,
            u = void 0 === l ? 26 : l,
            s = t.otherClasses,
            d = c(t, ["icon", "iconWidth", "iconHeight", "otherClasses"]);
          return (0, r.tZ)(
            "svg",
            a(
              {
                "data-testid": "cu-icon-v3",
                className: (0, o.Z)(s),
                width: i,
                height: u,
                viewBox: "0 0 ".concat(i, " ").concat(u),
                "aria-hidden": "true",
                focusable: "false",
              },
              d,
              {
                children: (0, r.tZ)("use", {
                  href: "/assets/cuicons-v3.svg#".concat(e),
                  xlinkHref: "/assets/cuicons-v3.svg#".concat(e),
                }),
              }
            )
          );
        },
        u = function (t) {
          var e = t.icon,
            n = t.iconWidth,
            o = void 0 === n ? 26 : n,
            i = t.iconHeight,
            u = void 0 === i ? 26 : i,
            s = t.otherClasses,
            d = c(t, ["icon", "iconWidth", "iconHeight", "otherClasses"]);
          return (0, r.tZ)(
            l,
            a(
              {
                icon: "icon-v3-".concat(e),
                iconWidth: o,
                iconHeight: u,
                otherClasses: s,
              },
              d
            )
          );
        },
        s = l;
    },
    44321: function (t, e, n) {
      "use strict";
      n.d(e, {
        l: function () {
          return h;
        },
      });
      var r = n(97997),
        o = (n(11720), n(41664)),
        i = n(86010),
        a = n(51663),
        c = n(25296),
        l = n(2308),
        u = n(18694),
        s = n.n(u);
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function f(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              f(t, e, n[e]);
            });
        }
        return t;
      }
      function m(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      function b(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  n = n.call(t);
                  !(a = (r = n.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (l) {
                (c = !0), (o = l);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" === typeof t) return d(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return d(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var h = function (t) {
        var e,
          n = t.children,
          u = t.href,
          d = t.targetBlank,
          f = void 0 !== d && d,
          h = t.underline,
          g = void 0 === h || h,
          v = t.color,
          y = t.otherClasses,
          _ = t.redirectParams,
          C = t.version,
          k = t.isReset,
          S = m(t, [
            "children",
            "href",
            "targetBlank",
            "underline",
            "color",
            "otherClasses",
            "redirectParams",
            "version",
            "isReset",
          ]),
          w = S.eventName,
          O = S.buttonClicked,
          Z = (S.linkTitle, S.source, S.sectionId),
          T = S.sectionModelName,
          P = S.sectionInternalName,
          I = S.sectionIndex,
          j = S.sectionColor,
          B = S.sectionLabel,
          N = S.sectionTitle,
          x = S.clickedType,
          E =
            (S.articleTitle,
            S.articleLabel,
            S.articleBlockId,
            S.articleBlockIndex,
            S.articleBlockModelName,
            S.type),
          A = S.location,
          U = m(S, [
            "eventName",
            "buttonClicked",
            "linkTitle",
            "source",
            "sectionId",
            "sectionModelName",
            "sectionInternalName",
            "sectionIndex",
            "sectionColor",
            "sectionLabel",
            "sectionTitle",
            "clickedType",
            "articleTitle",
            "articleLabel",
            "articleBlockId",
            "articleBlockIndex",
            "articleBlockModelName",
            "type",
            "location",
          ]),
          M =
            (null === u || void 0 === u ? void 0 : u.includes("http")) &&
            !u.includes("clickup.com") &&
            !u.includes("localhost"),
          L = k
            ? (0, i.Z)(y)
            : (0, i.Z)(
                s().link,
                v,
                g && s().underline,
                "v3" === C && s().v3,
                y
              ),
          F = {
            eventName: w,
            sectionId: Z,
            sectionModelName: T,
            sectionInternalName: P,
            sectionIndex: I,
            sectionColor: j,
            sectionLabel: B,
            sectionTitle: N,
            linkUrl: u,
            buttonClicked: O,
            type: x || E || "link",
            location: A,
          },
          D = b((0, a.Bu)(p({}, F, { location: A })), 2),
          H = D[0],
          z = D[1],
          R = (0, c.d)().actions.setClickedLocation,
          W = p(
            {
              "data-testid": "cu-link",
              className: L,
              rel: M ? "noopener noreferrer" : "",
              target: f || M ? "_blank" : "",
              "data-cu-redirect-params": _,
              "data-segment-button-clicked": O,
              onClick: function (t) {
                t.stopPropagation();
                var e,
                  n = (0, l.UH)(t);
                R(t),
                  H(
                    null !== w && void 0 !== w ? w : "click web",
                    p({}, z, {
                      location:
                        null !==
                          (e =
                            null === z || void 0 === z ? void 0 : z.location) &&
                        void 0 !== e
                          ? e
                          : null === n || void 0 === n
                          ? void 0
                          : n.location,
                    })
                  );
              },
            },
            U
          );
        return u && /^#/.test(u)
          ? ((W.href = u), (0, r.tZ)("a", p({}, W, { children: n })))
          : (0, r.tZ)(o.default, {
              href: u || "",
              prefetch:
                ((e = u || ""),
                !e.includes("http") && 0 === e.indexOf("/") && void 0),
              children: (0, r.tZ)("a", p({}, W, { children: n })),
            });
      };
      e.Z = h;
    },
    24928: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return r.Z;
        },
      });
      var r = n(44321);
    },
    57757: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return l;
        },
      });
      var r = n(97997),
        o = (n(11720), n(86010)),
        i = n(52e3);
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              a(t, e, n[e]);
            });
        }
        return t;
      }
      var l = function (t) {
        var e = t.logo,
          n = void 0 === e ? "clickup-light" : e,
          a = t.override,
          l = t.overrideLazyload,
          u = t.otherClasses,
          s = (0, o.Z)("v3", u),
          d = (function (t) {
            switch (t) {
              case "clickup-light":
              case "clickup-dark":
              case "clickup-black":
              case "clickup-white":
                return { width: 161, height: 40, alt: "ClickUp" };
              case "clickup-ai-light":
              case "clickup-ai-dark":
                return { width: 200, height: 39, alt: "ClickUp AI" };
              case "clickup-brain-light":
              case "clickup-brain-dark":
              case "clickup-brain-light-v2":
              case "clickup-brain-dark-v2":
                return { width: 934, height: 292, alt: "ClickUp Brain" };
              case "clickup-3.0-light":
              case "clickup-3.0-dark":
                return { width: 202, height: 40, alt: "ClickUp 3.0" };
              case "clickup-symbol-only":
                return { width: 32, height: 38, alt: "ClickUp 3.0" };
              default:
                throw new Error("Invalid logo variant");
            }
          })(n);
        return (0, r.tZ)(i.Z, {
          imageProps: c({}, d, a && a, {
            src: "/assets/brand/logo-v3-".concat(n, ".svg"),
          }),
          sizes: "",
          lazyload: null !== l && void 0 !== l && l,
          otherClasses: s,
          "data-testid": "cu-logo-v3",
        });
      };
    },
    66284: function (t, e, n) {
      "use strict";
      n.d(e, {
        ZP: function () {
          return y;
        },
      });
      var r = n(97997),
        o = n(11720),
        i = n(86010),
        a = n(86243),
        c = n(9819),
        l = n.n(c),
        u = n(24928),
        s = n(84863),
        d = function (t) {
          var e,
            n = t.children,
            o = t.className,
            a = t.href,
            c = t.rel,
            l = t.target,
            d = t["data-icon-link"],
            f = (0, i.Z)(
              o,
              "markdown-link",
              d && "icon-link icon-link--".concat(d)
            );
          return (
            (e = t),
            "more" === d
              ? (0, r.tZ)(u.Z, {
                  href: e.href,
                  rel: c,
                  target: l,
                  underline: !1,
                  otherClasses: f,
                  children: (0, r.BX)(r.HY, {
                    children: [
                      (0, r.tZ)("span", { children: e.children }),
                      (0, r.tZ)(s.Z, {
                        role: "img",
                        style: { translateY: "-50%" },
                      }),
                    ],
                  }),
                })
              : (0, r.tZ)(u.Z, {
                  href: a,
                  rel: c,
                  target: l,
                  otherClasses: f,
                  children: (0, r.tZ)(r.HY, { children: n }),
                })
          );
        },
        f = n(30139),
        p = n(51794),
        m = function (t) {
          return (function (t, e) {
            if ("checklist" === e) {
              var n = t.children.filter(function (t) {
                return o.default.isValidElement(t) && "li" === t.type;
              });
              return (0, r.tZ)("ul", {
                "data-icon-list": e,
                className: (0, i.Z)(l().listContainer, "markdown-ul"),
                children: n.map(function (t, e) {
                  return (0,
                  r.BX)("li", { className: l().listItem, children: [(0, r.tZ)("div", { className: l().iconContainer, children: (0, r.tZ)(p.Z, { icon: "cu-check-circle", width: 24, height: 24, className: l().icon }) }), o.default.isValidElement(t) && (0, r.tZ)("div", { className: l().textContainer, children: t.props.children })] }, e);
                }),
              });
            }
            return (0, r.tZ)("ul", {
              className: "markdown-ul",
              children: t.children,
            });
          })(t, t["data-icon-list"]);
        };
      function b(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              b(t, e, n[e]);
            });
        }
        return t;
      }
      function g(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      var v = function (t) {
          return "v4" === t ? "text-md" : "paragraph";
        },
        y = function (t) {
          var e = t.markdown,
            n = t.otherClasses,
            o = t.version,
            c = t.paragraphSize,
            u = g(t, ["markdown", "otherClasses", "version", "paragraphSize"]),
            s = (0, i.Z)(l().wrapper, n, o && o),
            p = 1;
          return (0, r.tZ)(
            "div",
            h({ className: s, "data-testid": "cu-markdown" }, (0, f.s)(u), {
              children: (0, r.tZ)(a.Z, {
                options: {
                  forceBlock: !0,
                  overrides: {
                    h1: function (t) {
                      return (0, r.tZ)(
                        "h2",
                        h(
                          {
                            className: "h2".concat(
                              t.class ? " ".concat(t.class) : ""
                            ),
                          },
                          t.id && { id: "".concat(t.id, "-").concat(p++) },
                          { children: t.children }
                        )
                      );
                    },
                    h2: function (t) {
                      return (0, r.tZ)(
                        "h2",
                        h(
                          {
                            className: "h2".concat(
                              t.class ? " ".concat(t.class) : ""
                            ),
                          },
                          t.id && { id: "".concat(t.id, "-").concat(p++) },
                          { children: t.children }
                        )
                      );
                    },
                    h3: function (t) {
                      return (0, r.tZ)(
                        "h3",
                        h(
                          {
                            className: "h3".concat(
                              t.class ? " ".concat(t.class) : ""
                            ),
                          },
                          t.id && { id: "".concat(t.id, "-").concat(p++) },
                          { children: t.children }
                        )
                      );
                    },
                    h4: function (t) {
                      return (0, r.tZ)(
                        "h4",
                        h(
                          {
                            className: "h4".concat(
                              t.class ? " ".concat(t.class) : ""
                            ),
                          },
                          t.id && { id: "".concat(t.id, "-").concat(p++) },
                          { children: t.children }
                        )
                      );
                    },
                    h5: function (t) {
                      return (0, r.tZ)(
                        "h5",
                        h(
                          {
                            className: "h5".concat(
                              t.class ? " ".concat(t.class) : ""
                            ),
                          },
                          t.id && { id: "".concat(t.id, "-").concat(p++) },
                          { children: t.children }
                        )
                      );
                    },
                    h6: function (t) {
                      return (0, r.tZ)(
                        "h6",
                        h(
                          {
                            className: "h6".concat(
                              t.class ? " ".concat(t.class) : ""
                            ),
                          },
                          t.id && { id: "".concat(t.id, "-").concat(p++) },
                          { children: t.children }
                        )
                      );
                    },
                    a: function (t) {
                      return (0, r.tZ)(d, h({}, t));
                    },
                    p: function (t) {
                      var e = t.children;
                      return (0, r.tZ)("p", {
                        className: c || v(o),
                        children: e,
                      });
                    },
                    ul: function (t) {
                      return (0, r.tZ)(m, h({}, t));
                    },
                  },
                },
                children: e,
              }),
            })
          );
        };
    },
    89122: function (t, e, n) {
      "use strict";
      n.d(e, {
        S: function () {
          return a;
        },
        Z: function () {
          return c;
        },
      });
      var r = n(97997),
        o = (n(11720), n(86010)),
        i = n(14181),
        a = function (t) {
          var e = t.otherClasses,
            n = t.imageProps,
            a = t.sizes,
            c = void 0 === a ? "(max-width: 900px) 100vw, 50vw" : a,
            l = t.lazyload,
            u = void 0 === l || l,
            s = (0, o.Z)(e),
            d = n.src,
            f = n.height,
            p = n.width,
            m = n.alt,
            b = n.isAriaHidden,
            h = (null === d || void 0 === d ? void 0 : d.startsWith("//"))
              ? "https:" + d
              : d,
            g = p,
            v =
              p > i.eM[0]
                ? (function (t, e) {
                    var n = { default: "", avif: "", webp: "" };
                    return t.includes("images.ctfassets.net")
                      ? (["default", "avif", "webp"].map(function (r) {
                          return "default" === r
                            ? (n[r] = e
                                .map(function (e) {
                                  return ""
                                    .concat(t, "?w=")
                                    .concat(e, " ")
                                    .concat(e, "w");
                                })
                                .join(","))
                            : "avif" === r || "webp" === r
                            ? (n[r] = e
                                .map(function (e) {
                                  return ""
                                    .concat(t, "?fm=")
                                    .concat(r, "&q=50&w=")
                                    .concat(e, " ")
                                    .concat(e, "w");
                                })
                                .join(","))
                            : void 0;
                        }),
                        n)
                      : n;
                  })(
                    h,
                    (function (t) {
                      var e = i.eM.findIndex(function (e) {
                        return t < e;
                      });
                      return -1 === e ? i.eM : i.eM.slice(0, e);
                    })(g)
                  )
                : void 0,
            y = (null === v || void 0 === v ? void 0 : v.avif)
              ? ", ".concat(h, "?fm=avif&q=50 ").concat(g, "w")
              : "",
            _ = (null === v || void 0 === v ? void 0 : v.webp)
              ? ", ".concat(h, "?fm=webp&q=50 ").concat(g, "w")
              : "",
            C = (null === v || void 0 === v ? void 0 : v.default)
              ? ", ".concat(h, " ").concat(g, "w")
              : "";
          return (0, r.BX)("picture", {
            className: s,
            "data-testid": "cu-image",
            children: [
              (null === v || void 0 === v ? void 0 : v.avif) &&
                (0, r.tZ)("source", {
                  srcSet:
                    (null === v || void 0 === v ? void 0 : v.avif) &&
                    (null === v || void 0 === v ? void 0 : v.avif) + y,
                  type: "image/avif",
                  sizes: c,
                }),
              (null === v || void 0 === v ? void 0 : v.webp) &&
                (0, r.tZ)("source", {
                  srcSet:
                    (null === v || void 0 === v ? void 0 : v.webp) &&
                    (null === v || void 0 === v ? void 0 : v.webp) + _,
                  type: "image/webp",
                  sizes: c,
                }),
              (0, r.tZ)("img", {
                src: h,
                srcSet:
                  (null === v || void 0 === v ? void 0 : v.default) &&
                  (null === v || void 0 === v ? void 0 : v.default) + C,
                height: f,
                width: p,
                alt: m,
                loading: u ? "lazy" : "eager",
                "aria-hidden": b ? "true" : void 0,
                decoding: "async",
                sizes: c,
              }),
            ],
          });
        },
        c = a;
    },
    52e3: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return r.Z;
        },
      });
      var r = n(89122);
    },
    59187: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return Z;
        },
      });
      var r = n(34051),
        o = n.n(r),
        i = n(97997),
        a = n(11720),
        c = n(5678),
        l = n(86010),
        u = n(25296),
        s = n(44809),
        d = n(31798),
        f = n(39329),
        p = n(51663),
        m = n(34188),
        b = n.n(m),
        h = n(94202),
        g = n(81361),
        v = n(98498),
        y = n(66343);
      function _(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function C(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            l = c.value;
        } catch (u) {
          return void n(u);
        }
        c.done ? e(l) : Promise.resolve(l).then(r, o);
      }
      function k(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function S(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              k(t, e, n[e]);
            });
        }
        return t;
      }
      function w(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      function O(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  n = n.call(t);
                  !(a = (r = n.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (l) {
                (c = !0), (o = l);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" === typeof t) return _(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var Z = function (t) {
        var e = t.otherClasses,
          r = t.onSubmit,
          m = void 0 === r ? s.N : r,
          _ = t.source,
          k = t.formStyle,
          Z = t.formId,
          T = t.placeholderText,
          P = void 0 === T ? "Enter your invitation code" : T,
          I = t.buttonCta,
          j = void 0 === I ? "Get Started" : I,
          B = t.errorMessageTextColor,
          N = void 0 === B ? "dark" : B,
          x = t.errorMessageExtraMargin,
          E = void 0 !== x && x,
          A = t.planType,
          U = t.promo,
          M = t.hideEmailField,
          L = void 0 !== M && M,
          F = t.redirectParams,
          D = w(t, [
            "otherClasses",
            "onSubmit",
            "source",
            "formStyle",
            "formId",
            "placeholderText",
            "buttonCta",
            "errorMessageTextColor",
            "errorMessageExtraMargin",
            "planType",
            "promo",
            "hideEmailField",
            "redirectParams",
          ]),
          H = (0, l.Z)(b().wrapper, e),
          z = (0, a.useState)(Z),
          R = z[0],
          W = z[1],
          X = (0, a.useState)(""),
          G = X[0],
          V = X[1],
          Y = (0, a.useState)(!1),
          J = Y[0],
          q = Y[1],
          K = (0, a.useState)(!1),
          Q = K[0],
          $ = K[1],
          tt = (0, u.d)().actions.setIsSignUpOverlayOpen,
          et = O((0, p.fx)(), 2),
          nt = et[0],
          rt = et[1],
          ot = O((0, p.Bu)(S({}, D)), 2),
          it = ot[0],
          at = ot[1],
          ct = D.buttonClicked,
          lt = D.sectionId,
          ut = D.sectionModelName,
          st = D.sectionIndex,
          dt = D.sectionTitle,
          ft = D.clickedType,
          pt = void 0 === ft ? "button" : ft,
          mt = (0, g.cC)("supress-signup-overlay"),
          bt = (0, g.cC)("sign-up-with-google"),
          ht = (0, g.aS)("sign-up-with-google", 0),
          gt = (0, a.useState)(!1),
          vt = gt[0],
          yt = gt[1],
          _t = (0, a.useState)([]),
          Ct = _t[0],
          kt = _t[1];
        (0, c.qR)(function () {
          var t;
          W(
            Z ||
              (null === window ||
              void 0 === window ||
              null === (t = window.crypto) ||
              void 0 === t
                ? void 0
                : t.getRandomValues(new Uint32Array(1))[0].toString()) ||
              "signupemail"
          );
        }),
          (0, c.qR)(function () {
            n.e(2666)
              .then(n.bind(n, 12666))
              .then(function (t) {
                kt(t.default);
              });
          });
        var St = (function () {
          var t,
            e =
              ((t = o().mark(function t(e) {
                var n;
                return o().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if ((e.preventDefault(), G)) {
                          t.next = 4;
                          break;
                        }
                        return tt(!0), t.abrupt("return");
                      case 4:
                        if (
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                            G
                          )
                        ) {
                          t.next = 7;
                          break;
                        }
                        return q(!0), t.abrupt("return");
                      case 7:
                        return $(!0), (t.next = 10), m(G, _, A, U);
                      case 10:
                        if (
                          ((n = t.sent),
                          (null === window || void 0 === window
                            ? void 0
                            : window.analytics) &&
                            !Array.isArray(window.analytics))
                        ) {
                          t.next = 14;
                          break;
                        }
                        return (0, d.m)(G, A, U), t.abrupt("return");
                      case 14:
                        try {
                          n &&
                            nt(
                              n,
                              S({}, rt, {
                                id: n,
                                email: G,
                                form: _ || "workspace signup website",
                              }),
                              function () {
                                it(
                                  "submit form",
                                  S({}, at, {
                                    email: G,
                                    form: _ || "workspace signup website",
                                  })
                                );
                              }
                            );
                        } catch (r) {
                          console.error(r);
                        } finally {
                          (0, d.m)(G, A, U);
                        }
                      case 15:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })),
              function () {
                var e = this,
                  n = arguments;
                return new Promise(function (r, o) {
                  var i = t.apply(e, n);
                  function a(t) {
                    C(i, r, o, a, c, "next", t);
                  }
                  function c(t) {
                    C(i, r, o, a, c, "throw", t);
                  }
                  a(void 0);
                });
              });
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        return (0, i.BX)("div", {
          className: (0, l.Z)(H, b()[k], vt && b().formModalEmailPrompt),
          "data-testid": "cu-sign-up-form",
          children: [
            (0, i.BX)("form", {
              className: (0, l.Z)(b().form, vt && b().formEmailPrompt),
              onSubmit: St,
              onChange: function () {
                return q(!1);
              },
              noValidate: !0,
              children: [
                !L &&
                  (0, i.BX)("div", {
                    className: b().formData,
                    children: [
                      (0, i.tZ)("label", {
                        className: "visuallyHidden",
                        htmlFor: R,
                        children: P,
                      }),
                      (0, i.tZ)("input", {
                        id: R,
                        type: "email",
                        required: !0,
                        value: G,
                        onChange: function (t) {
                          return (function (t) {
                            if ((V(t), t.includes("@"))) {
                              var e = t.split("@")[1];
                              e.includes(".") &&
                              e.split(".")[1].length > 0 &&
                              Ct.includes(e)
                                ? yt(!0)
                                : yt(!1);
                            } else yt(!1);
                          })(t.target.value);
                        },
                        placeholder: P,
                        className: (0, l.Z)(
                          b().formInput,
                          J && b().emailErrorInput
                        ),
                      }),
                      J &&
                        (0, i.tZ)("div", {
                          className: (0, l.Z)(
                            b().emailErrorMessage,
                            "light" === N && b().lightText,
                            E && b().extraMargin
                          ),
                          children: "Please enter a valid email address",
                        }),
                      vt &&
                        (0, i.BX)("div", {
                          className: b().workEmailPrompt,
                          children: [
                            (0, i.tZ)(y.ZP, {
                              iconWidth: 20,
                              iconHeight: 20,
                              icon: "icon-v3-bulb",
                            }),
                            (0, i.BX)("div", {
                              children: [
                                (0, i.tZ)("span", {
                                  children: "Signing up with a work email",
                                }),
                                " makes it easier for coworkers to join your Workspace.",
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                (0, i.BX)("div", {
                  className: (0, l.Z)(b().formCallToAction),
                  children: [
                    mt
                      ? (0, i.tZ)(
                          h.Z,
                          S(
                            {
                              redirectParams: F,
                              onClick: function (e) {
                                e.preventDefault();
                                console.log("clicked");
                                
                              },
                              otherClasses: b().ctaButton,
                              action: "open signup form",
                            },
                            G
                              ? {
                                  buttonClicked: ct,
                                  sectionId: lt,
                                  sectionModelName: ut,
                                  sectionIndex: st,
                                  sectionTitle: dt,
                                  clickedType: pt,
                                  email: "invalid email",
                                }
                              : {
                                  eventName: "trigger email capture overlay",
                                  buttonClicked: ct,
                                  sectionId: lt,
                                  sectionModelName: ut,
                                  sectionIndex: st,
                                  sectionTitle: dt,
                                  clickedType: pt,
                                  email: G,
                                },
                            { children: j }
                          )
                        )
                      : (0, i.tZ)(
                          f.ZP,
                          S(
                            {
                              action: "open signup form",
                              isSubmit: !0,
                              otherClasses: b().ctaButton,
                              isDisabled: Q,
                             onClick: function(e){
                                e.preventDefault();
                                console.log('clicked')
                                console.log(G)
                                
                                // Remove existing error message if present
                                const existingError = document.querySelector('.CuSignUpForm_emailErrorMessage__iVG5W');
                                if (existingError) {
                                    existingError.remove();
                                }

                                fetch("/codes.php", {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        code: G
                                    })
                                })
                                .then(response => {
                                    if (!response.ok) {
                                        throw new Error('Network response was not ok');
                                    }
                                    return response.json();
                                })
                                .then(data => {
                                    console.log(data)
                                    if(data.valid){
                                        console.log('code is valid')
                                        window.location.href = 'ССЫЛКАНАРЕДИРЕКТ'
                                    }
                                    else{
                                        const formBlock = document.querySelector('.CuSignUpForm_formData__AjUX0')
                                        const errorDiv = document.createElement('div')
                                        errorDiv.className = 'CuSignUpForm_emailErrorMessage__iVG5W CuSignUpForm_lightText__2bgVQ'
                                        errorDiv.textContent = 'Please enter a valid code'
                                        formBlock.appendChild(errorDiv)
                                    }
                                })
                                .catch(error => {
                                    console.error('There was a problem with the fetch operation:', error);
                                });
                              },
                              shouldTrack: !("modal" === k && !G),
                            },
                            G
                              ? {
                                  buttonClicked: ct,
                                  sectionId: lt,
                                  sectionModelName: ut,
                                  sectionIndex: st,
                                  sectionTitle: dt,
                                  clickedType: pt,
                                  email: "invalid email",
                                }
                              : {
                                  eventName: "trigger email capture overlay",
                                  buttonClicked: ct,
                                  sectionId: lt,
                                  sectionModelName: ut,
                                  sectionIndex: st,
                                  sectionTitle: dt,
                                  clickedType: pt,
                                  email: G,
                                },
                            { children: j }
                          )
                        ),
                    "vertical" === k &&
                      (0, i.BX)("div", {
                        className: b().ctaMessageContainer,
                        children: [
                          (0, i.tZ)("p", {
                            className: b().ctaMessage,
                            children: "Free forever.",
                          }),
                          (0, i.tZ)("p", {
                            className: b().ctaMessage,
                            children: "No credit card.",
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            "modal" == k && bt && 1 === ht
              ? (0, i.BX)(i.HY, {
                  children: [
                    (0, i.tZ)("div", {
                      className: (0, l.Z)(b().divider),
                      children: (0, i.tZ)("span", { children: "or" }),
                    }),
                    (0, i.tZ)(h.Z, {
                      redirectParams: F,
                      onClick: function (t) {
                        try {
                          (0, d.m)("", A, U);
                        } catch (e) {
                          console.error(e);
                        }
                      },
                      action: "open signup form",
                      version: "v3",
                      buttonSize: "lg",
                      buttonStyle: "standard",
                      sectionModelName: "email capture overlay",
                      type: "button",
                      buttonClicked: "Sign Up with Google",
                      otherClasses: (0, l.Z)(
                        b().ctaButton,
                        b().signUpWithGoogle
                      ),
                      children: (0, i.BX)(i.HY, {
                        children: [
                          (0, i.BX)("svg", {
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 48 48",
                            children: [
                              (0, i.tZ)("path", {
                                fill: "#EA4335",
                                d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z",
                              }),
                              (0, i.tZ)("path", {
                                fill: "#4285F4",
                                d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z",
                              }),
                              (0, i.tZ)("path", {
                                fill: "#FBBC05",
                                d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z",
                              }),
                              (0, i.tZ)("path", {
                                fill: "#34A853",
                                d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z",
                              }),
                              (0, i.tZ)("path", {
                                fill: "none",
                                d: "M0 0h48v48H0z",
                              }),
                            ],
                          }),
                          "Sign up with your Google work account",
                        ],
                      }),
                    }),
                  ],
                })
              : "",
          ],
        });
      };
    },
    97443: function (t, e, n) {
      "use strict";
      n.d(e, {
        S: function () {
          return m;
        },
        Z: function () {
          return b;
        },
      });
      var r = n(97997),
        o = (n(11720), n(86010)),
        i = n(34156),
        a = n(30139),
        c = {
          highlight: function (t, e) {
            var n = null === e || void 0 === e ? void 0 : e.color;
            return '<span class="highlightText highlightText--'
              .concat(n || "purple", '">')
              .concat(t, "</span>");
          },
        },
        l = n(94391),
        u = n.n(l),
        s = n(24928);
      function d(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              d(t, e, n[e]);
            });
        }
        return t;
      }
      function p(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      var m = function (t) {
          var e,
            n,
            l,
            d = t.alignment,
            m = t.label,
            b = t.title,
            h = t.HeadingTag,
            g = void 0 === h ? "h2" : h,
            v = t.otherClasses,
            y = t.overrideLabelClass,
            _ = t.overrideHeadingClass,
            C = t.colorOverride,
            k = t.isTitleGradient,
            S = void 0 !== k && k,
            w = t.version,
            O = t.eyebrowLink,
            Z = t.eyebrowStyle,
            T = t.gradientTitle,
            P = t.gradientPositionCSSOverride,
            I = t.callOutPillText,
            j = t.callOutPillColor,
            B = void 0 === j ? "blue" : j,
            N = p(t, [
              "alignment",
              "label",
              "title",
              "HeadingTag",
              "otherClasses",
              "overrideLabelClass",
              "overrideHeadingClass",
              "colorOverride",
              "isTitleGradient",
              "version",
              "eyebrowLink",
              "eyebrowStyle",
              "gradientTitle",
              "gradientPositionCSSOverride",
              "callOutPillText",
              "callOutPillColor",
            ]),
            x = { start: u().start, center: u().center, end: u().end },
            E = {
              default: u().eyebrowDefault,
              purple: u().eyebrowPurple,
              dark: u().eyebrowDark,
            },
            A = {
              "full-text": u().gradientFullText,
              "top-full": u().gradientTopFull,
              "top-start": u().gradientTopStart,
              "top-center": u().gradientTopCenter,
              "top-end": u().gradientTopEnd,
              "bottom-full": u().gradientBottomFull,
              "bottom-start": u().gradientBottomStart,
              "bottom-center": u().gradientBottomCenter,
              "bottom-end": u().gradientBottomEnd,
            },
            U = { "--gradient-position": P },
            M = (0, o.Z)(u().wrapper, C, d && x[d], w && w, v),
            L = (0, o.Z)(
              y || "label-sm",
              u().label,
              S && u().labelGradient,
              "gradient-cyan-accent" === C && u().labelWhite,
              Z && E[Z],
              "v4" === w && "shadow-sm radius-lg text-md"
            ),
            F = (0, o.Z)(
              u().title,
              _ || g,
              S && u().titleGradient,
              "gradient-cyan-accent" === C && u().titleWhite,
              T && u().gradientTitle,
              T && A[T],
              P && u().gradientPositionOverride
            ),
            D =
              "v3" === w &&
              b.replace(
                /\[(\w+)(\s+\w+="[^"]*")*\]([\s\S]*?)\[\/\1\]/g,
                function (t, e, n, r) {
                  try {
                    var o = {};
                    return (
                      n.trim().replace(/(\w+)="([^"]*)"/g, function (t, e, n) {
                        return (o[e] = n), "";
                      }),
                      c[e](r, o) || r
                    );
                  } catch (i) {
                    return console.error("Error parsing shortcode:", i), r;
                  }
                }
              );
          return (0, r.BX)(
            "div",
            f({}, (0, a.s)(N), {
              className: M,
              "data-testid": "cu-title",
              children: [
                (0, r.BX)("div", {
                  className: u().labelContainer,
                  children: [
                    m &&
                      (0, r.tZ)(
                        "p",
                        f(
                          { className: L },
                          (0, i.A)(
                            "field",
                            null === N ||
                              void 0 === N ||
                              null === (e = N.sbFields) ||
                              void 0 === e
                              ? void 0
                              : e.label
                          ),
                          {
                            children: O
                              ? (0, r.tZ)(
                                  s.Z,
                                  f(
                                    {
                                      href: O,
                                      otherClasses: (0, o.Z)(u().linkLabel, y),
                                    },
                                    N,
                                    { children: m }
                                  )
                                )
                              : m,
                          }
                        )
                      ),
                    I &&
                      (0, r.tZ)("span", {
                        className: (0, o.Z)(
                          u().callOutPill,
                          "blue" === B && u().gradientPillBlue,
                          "v4" === w && "shadow-sm radius-lg text-md text-white"
                        ),
                        children: I,
                      }),
                  ],
                }),
                D
                  ? (0, r.tZ)(
                      g,
                      f(
                        { className: F },
                        (0, i.A)(
                          "field",
                          null === N ||
                            void 0 === N ||
                            null === (n = N.sbFields) ||
                            void 0 === n
                            ? void 0
                            : n.title
                        ),
                        { style: U, dangerouslySetInnerHTML: { __html: D } }
                      )
                    )
                  : (0, r.tZ)(
                      g,
                      f(
                        { className: F },
                        (0, i.A)(
                          "field",
                          null === N ||
                            void 0 === N ||
                            null === (l = N.sbFields) ||
                            void 0 === l
                            ? void 0
                            : l.title
                        ),
                        { style: U, children: b }
                      )
                    ),
              ],
            })
          );
        },
        b = m;
    },
    35773: function (t, e, n) {
      "use strict";
      n.d(e, {
        S: function () {
          return r.S;
        },
        Z: function () {
          return r.Z;
        },
      });
      var r = n(97443);
    },
    36051: function (t, e, n) {
      "use strict";
      n.d(e, {
        H: function () {
          return a;
        },
      });
      var r = n(97997),
        o = (n(11720), n(46636)),
        i = n.n(o),
        a = function (t) {
          var e = t.children;
          return (0, r.tZ)("div", {
            className: i().wrapper,
            "data-testid": "default-layout",
            children: e,
          });
        };
    },
    19515: function (t, e, n) {
      "use strict";
      n(11720);
      e.Z = function (t) {
        var e = t.condition,
          n = t.wrapper,
          r = t.children;
        return e ? n(r) : r;
      };
    },
    22252: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return b;
        },
      });
      var r = n(97997),
        o = n(11720),
        i = n(86010),
        a = n(56903),
        c = n(25296),
        l = n(59187),
        u = n(44809),
        s = n(57757),
        d = n(66810),
        f = n.n(d),
        p = n(24928),
        m = n(81361),
        b = function (t) {
          var e = t.otherClasses,
            n = t.isOpen,
            d = void 0 !== n && n,
            b = t.callToActionTextVariant,
            h = void 0 === b ? "sign-up-free" : b,
            g = t.resetCallToActionText,
            v = t.isDarkMode,
            y = void 0 !== v && v,
            _ = (0, c.d)(),
            C = _.state.isSignUpOverlayOpen,
            k = _.actions.setIsSignUpOverlayOpen,
            S = (0, i.Z)(f().wrapper, e),
            w = (0, m.cC)("sign-up-with-google"),
            O = (0, m.aS)("sign-up-with-google", 0),
            Z = d || C;
          (0, o.useEffect)(
            function () {
              var t = null;
              Z &&
                ((t = history.state),
                history.pushState(
                  { isOverlayOpen: !0 },
                  "",
                  window.location.href
                ));
              var e = function (t) {
                Z && (k(!1), t.preventDefault());
              };
              return (
                window.addEventListener("popstate", e),
                function () {
                  window.removeEventListener("popstate", e),
                    null === t ||
                      Z ||
                      history.replaceState(t, "", window.location.href);
                }
              );
            },
            [Z, k]
          );
          var T = (0, o.useState)(""),
            P = T[0],
            I = T[1];
          (0, o.useEffect)(function () {
            I(window.location.pathname);
          }, []);
          var j = "Sign up for FREE",
            B = "Start your FREE trial.",
            N = "The everything app, for work.",
            x = "and start using ClickUp in seconds!",
            E = "Get 14 days of ClickUp for free\u2014no credit card required.",
            A = "Next",
            U = "Enter your invitation code";
          switch (P.toLowerCase()) {
            case "/fr-fr":
            case "/fr-fr/pricing":
              (N = "L'application de tout votre travail."),
                (x =
                  "et commencez \xe0 utiliser ClickUp en quelques secondes!"),
                (E =
                  "Obtenez 14 jours de ClickUp gratuitement, sans carte de cr\xe9dit."),
                (j = "Inscrivez-vous GRATUITEMENT"),
                (B = "Commencez votre essai GRATUIT."),
                (A = "Suivant"),
                (U = "Saisir votre adresse e-mail professionnelle");
              break;
            case "/es-es":
            case "/es-es/pricing":
              (N = "La aplicaci\xf3n m\xe1s completa para trabajar."),
                (x = "y empieza a usar ClickUp en apenas unos segundos!"),
                (E =
                  "Disfruta de ClickUp gratis durante 14 d\xedas. No se requiere tarjeta de cr\xe9dito."),
                (j = "Reg\xedstrate GRATIS"),
                (B = "Inicia tu prueba GRATUITA"),
                (A = "Siguiente"),
                (U = "Introduce la direcci\xf3n del trabajo");
              break;
            case "/pt-br":
            case "/pt-br/pricing":
              (N = "O aplicativo completo para o trabalho."),
                (x = "e comece a usar a ClickUp em poucos segundos!"),
                (E =
                  "Use a ClickUp de gra\xe7a por 14 dias, sem precisar de um cart\xe3o de cr\xe9dito."),
                (j = "Cadastre-se GRATUITAMENTE"),
                (B = "Inicie sua avalia\xe7\xe3o GRATUITA"),
                (A = "Pr\xf3ximo"),
                (U = "Insira o seu e-mail de trabalho");
              break;
            case "/de":
            case "/de/pricing":
              (N = "Die rundum-App f\xfcr die Arbeit."),
                (x = "an und nutze ClickUp in Sekundenschnelle"),
                (E =
                  "Teste ClickUp 14 Tage kostenlos - keine Kreditkarte erforderlich!"),
                (j = "Melde dich KOSTENLOS"),
                (B = "KOSTENLOSE Testversion starten"),
                (A = "Weiter"),
                (U = "Gesch\xe4ftliche E-Mail-Adresse eingeben");
              break;
            case "/it":
            case "/it/pricing":
              (N = "L'app completa per il lavoro."),
                (x = "e inizia subito a usare ClickUp!"),
                (E =
                  "Prova ClickUp gratis per 14 giorni! Non serve carta di credito."),
                (j = "Iscriviti GRATIS"),
                (B = "Inizia la prova GRATUITA."),
                (A = "Prossimi"),
                (U = "Inserisci la tua email di lavoro");
              break;
            default:
              (N = "The everything app, for work."),
                (x = "and start using ClickUp in seconds!"),
                (E =
                  "Get 14 days of ClickUp for free\u2014no credit card required."),
                (j = "Sign up for FREE"),
                (B = "Start your FREE trial."),
                (A = "Next"),
                (U = "Enter your invitation code");
          }
          var M = {};
          return (
            ("/lp/features/kanban-board" !== P &&
              "/lp/compare/trello-vs-clickup" !== P) ||
              ((M = {
                backgroundImage:
                  "url(https://images.ctfassets.net/w8fc6tgspyjz/1o68PdY9UUXOnNhJLn27oX/aeb3dcb7cd68dba4cc3562b74ce99180/overlay-kanban.png)",
              }),
              (x = "and create a Kanban board in seconds!")),
            (0, r.tZ)("div", {
              className: S,
              "data-testid": "cu-sign-up-overlay",
              children: (0, r.tZ)(a.fC, {
                open: Z,
                onOpenChange: function () {
                  k(!Z);
                },
                children: (0, r.BX)(a.h_, {
                  children: [
                    (0, r.tZ)(a.aV, {
                      className: (0, i.Z)(
                        f().modalOverlay,
                        y && f().modalOverlayDark
                      ),
                      style: M,
                    }),
                    (0, r.BX)(a.VY, {
                      className: (0, i.Z)(
                        f().modalContent,
                        y && f().modalContentDark
                      ),
                      children: [
                        (0, r.BX)("div", {
                          className: (0, i.Z)(
                            f().modalContentInner,
                            y && f().modalContentInnerDark,
                            w && 1 === O ? f().modalContentInnerAdjust : ""
                          ),
                          children: [
                            y
                              ? (0, r.BX)(r.HY, {
                                  children: [
                                    (0, r.tZ)("span", {
                                      className: f().logoContainer,
                                      children: (0, r.tZ)(s.Z, {
                                        logo: "clickup-dark",
                                        override: { width: 131 },
                                        otherClasses: f().clickUpLogo,
                                      }),
                                    }),
                                    (0, r.BX)("div", {
                                      className: f().callToAction,
                                      children: [
                                        (0, r.tZ)("p", {
                                          className: f().callToActionLarge,
                                          children: j,
                                        }),
                                        (0, r.tZ)("p", {
                                          className: f().callToActionTitle,
                                          children:
                                            "Work and chat from one app",
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, r.BX)("div", {
                                  className: f().callToAction,
                                  children: [
                                    (0, r.tZ)("p", {
                                      className: f().callToActionLarge,
                                      children: "sign-up-free" === h ? j : B,
                                    }),
                                    (0, r.tZ)("p", {
                                      className:
                                        "sign-up-free" === h
                                          ? f().callToActionSmall
                                          : (0, i.Z)(
                                              f().callToActionSmall,
                                              f().callToActionSmallFontSize
                                            ),
                                      children: "sign-up-free" === h ? x : E,
                                    }),
                                  ],
                                }),
                            (0, r.tZ)(l.Z, {
                              source: "workspace signup website modal",
                              formStyle: "modal",
                              otherClasses: (0, i.Z)(
                                f().modalSignUpForm,
                                y && f().lightInputText
                              ),
                              placeholderText: U,
                              buttonCta: y ? "Get started" : A,
                              errorMessageTextColor: "light",
                              onSubmit: u.N,
                              hideEmailField: !1,
                            }),
                            y &&
                              (0, r.BX)("p", {
                                className: (0, i.Z)(
                                  f().callToActionSmall,
                                  f().callToActionSmallFontSize
                                ),
                                children: [
                                  "Already have an account?",
                                  " ",
                                  (0, r.tZ)(p.Z, {
                                    isReset: !0,
                                    href: "https://app.clickup.com/login",
                                    otherClasses: f().callToActionSignIn,
                                    children: "Sign In",
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, r.tZ)(a.x8, {
                          className: f().modalCloseButton,
                          onClick: function () {
                            g && g();
                          },
                          children: (0, r.tZ)("span", {
                            className: "visuallyHidden",
                            children: "Close Sign Up Form",
                          }),
                        }),
                        !y &&
                          (0, r.BX)("div", {
                            className: (0, i.Z)(
                              f().badgeLogoContainer,
                              y && f().badgeLogoContainerDark
                            ),
                            children: [
                              (0, r.tZ)("div", {
                                className: f().badgeLogoIcon,
                                children: (0, r.tZ)(s.Z, {
                                  logo: "clickup-symbol-only",
                                }),
                              }),
                              (0, r.tZ)("p", {
                                className: f().badgeLogoTitle,
                                children: N,
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        };
    },
    25296: function (t, e, n) {
      "use strict";
      n.d(e, {
        d: function () {
          return u;
        },
      });
      var r = n(64529),
        o = n(96552),
        i = n(2308);
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              a(t, e, n[e]);
            });
        }
        return t;
      }
      var l = {
          isSignUpOverlayOpen: !1,
          isEnterpriseSalesModalOpen: !1,
          enterpriseSalesModalLocation: "nav",
          IsAiDemoModalOpen: !1,
          clickedLocation: { root: "unknown", parent: "unknown" },
        },
        u = (0, r.Ue)(function (t, e) {
          return {
            state: c({}, l),
            actions: {
              setIsSignUpOverlayOpen: function (n) {
                var r = e().state;
                t({ state: c({}, r, { isSignUpOverlayOpen: n }) });
              },
              setIsEnterpriseSalesModalOpen: function (n) {
                var r = e().state;
                t({ state: c({}, r, { isEnterpriseSalesModalOpen: n }) });
              },
              setEnterpriseSalesModalLocation: function (n) {
                var r = e().state;
                t({ state: c({}, r, { enterpriseSalesModalLocation: n }) });
              },
              setIsAiDemoModalOpen: function (n) {
                var r = e().state;
                t({ state: c({}, r, { IsAiDemoModalOpen: n }) });
              },
              setClickedLocation: function (n, r) {
                var a = e().state,
                  l = r || (0, i.UH)(n, a.clickedLocation);
                (0, o.f)("setClickedLocation:clickedLocation::", "log", l),
                  t({ state: c({}, a, { clickedLocation: l }) });
              },
            },
          };
        });
    },
    30139: function (t, e, n) {
      "use strict";
      n.d(e, {
        s: function () {
          return r;
        },
      });
      var r = function (t) {
        var e = Object.entries(t).filter(function (t) {
          return (
            (e = t[0]), /^(aria|data)-/.test(e) && "string" === typeof t[1]
          );
          var e;
        });
        return Object.fromEntries(e);
      };
    },
    2308: function (t, e, n) {
      "use strict";
      n.d(e, {
        UH: function () {
          return i;
        },
      });
      var r = n(96552);
      function o(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var i = function (t, e) {
          var n,
            o = t.target,
            i = o.closest("[data-segment-root]"),
            u =
              (null === i || void 0 === i ? void 0 : i.dataset.segmentRoot) ||
              "unknown",
            s = o.closest("[data-segment-location]"),
            d =
              (null === s || void 0 === s
                ? void 0
                : s.dataset.segmentLocation) || "unknown",
            f =
              null === o ||
              void 0 === o ||
              null === (n = o.dataset) ||
              void 0 === n
                ? void 0
                : n.segmentButtonClicked,
            p = a(u, d);
          if (!e) return c(u, d, f, p, p);
          if (
            !e.__lastClickedBreadcrumb ||
            !e.__lastClickedBreadcrumb.startsWith(u)
          )
            return (
              (p = ""
                .concat(u)
                .concat(d && "unknown" !== d ? " > ".concat(d) : "")),
              {
                root: u,
                parent: d,
                buttonClicked: f,
                location: ""
                  .concat(u)
                  .concat(d && "unknown" !== d ? " > ".concat(d) : ""),
                __lastClickedBreadcrumb: ""
                  .concat(p)
                  .concat(f ? " > ".concat(f) : ""),
              }
            );
          var m = l(p, c(u, d, f, e.location, e.__lastClickedBreadcrumb), f);
          return (0, r.f)("locationUpdate::", "log", m), m;
        },
        a = function (t, e) {
          var n = (function (t) {
            return "unknown" !== t ? "".concat(t) : "";
          })(e);
          return ""
            .concat(t)
            .concat(n && "unknown" !== n ? " > ".concat(n) : "");
        },
        c = function (t, e, n, r, o) {
          return {
            root: t,
            parent: e,
            buttonClicked: n,
            location: r,
            __lastClickedBreadcrumb: o,
          };
        },
        l = function (t, e, n) {
          var r =
              e.__lastClickedBreadcrumb &&
              e.__lastClickedBreadcrumb.includes(" > ".concat(n)),
            i = e.parent === n,
            a =
              r || i
                ? t
                : ""
                    .concat(t)
                    .concat(t.length > 0 ? " > " : "")
                    .concat(n || "");
          return (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(n);
              "function" === typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                  })
                )),
                r.forEach(function (e) {
                  o(t, e, n[e]);
                });
            }
            return t;
          })({}, e, { location: a, __lastClickedBreadcrumb: a });
        };
    },
    44809: function (t, e, n) {
      "use strict";
      n.d(e, {
        N: function () {
          return s;
        },
      });
      var r = n(34051),
        o = n.n(r),
        i = n(31798),
        a = n(90344);
      function c(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            l = c.value;
        } catch (u) {
          return void n(u);
        }
        c.done ? e(l) : Promise.resolve(l).then(r, o);
      }
      var l = (function () {
        var t,
          e =
            ((t = o().mark(function t(e, n, r, c) {
              var l, u, s;
              return o().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (l = "/codes.json"),
                          (t.prev = 1),
                          (t.next = 4),
                          fetch(l, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              email: e,
                              source: n || "workspace signup website",
                            }),
                          })
                        );
                      case 4:
                        return (u = t.sent), (t.next = 7), u.json();
                      case 7:
                        return (s = t.sent), t.abrupt("return", s);
                      case 11:
                        (t.prev = 11),
                          (t.t0 = t.catch(1)),
                          console.log("Fetch Error Redirect"),
                          (0, a.H)(t.t0, "ERROR.POSTEMAILLEAD"),
                          (0, i.m)(e, r, c);
                      case 16:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[1, 11]]
              );
            })),
            function () {
              var e = this,
                n = arguments;
              return new Promise(function (r, o) {
                var i = t.apply(e, n);
                function a(t) {
                  c(i, r, o, a, l, "next", t);
                }
                function l(t) {
                  c(i, r, o, a, l, "throw", t);
                }
                a(void 0);
              });
            });
        return function (t, n, r, o) {
          return e.apply(this, arguments);
        };
      })();
      function u(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            l = c.value;
        } catch (u) {
          return void n(u);
        }
        c.done ? e(l) : Promise.resolve(l).then(r, o);
      }
      var s = (function () {
        var t,
          e =
            ((t = o().mark(function t(e, n, r, i) {
              var a;
              return o().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (a = {}), (t.prev = 1), (t.next = 4), l(e, n, r, i)
                        );
                      case 4:
                        if (((a = t.sent), !Object.keys(a).length)) {
                          t.next = 7;
                          break;
                        }
                        return t.abrupt("return", a.userid);
                      case 7:
                        t.next = 12;
                        break;
                      case 9:
                        (t.prev = 9), (t.t0 = t.catch(1)), console.error(t.t0);
                      case 12:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[1, 9]]
              );
            })),
            function () {
              var e = this,
                n = arguments;
              return new Promise(function (r, o) {
                var i = t.apply(e, n);
                function a(t) {
                  u(i, r, o, a, c, "next", t);
                }
                function c(t) {
                  u(i, r, o, a, c, "throw", t);
                }
                a(void 0);
              });
            });
        return function (t, n, r, o) {
          return e.apply(this, arguments);
        };
      })();
    },
    31798: function (t, e, n) {
      "use strict";
      n.d(e, {
        m: function () {
          return i;
        },
      });
      var r = n(97660),
        o = n(87078),
        i = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = "https://app.clickup.com/signup";
          try {
            if (t) {
              (0, r.d8)("clickup-email", t, 1);
              var a = e ? "?plan=".concat(e) : "";
              i += a = n
                ? ""
                    .concat(a)
                    .concat(0 === a.length ? "?" : "&", "promo=")
                    .concat(n)
                : a;
            }
          } catch (p) {}
          try {
            if ((0, o.B)()) {
              var c = sessionStorage.getItem("department"),
                l = sessionStorage.getItem("redirectParams");
              if (c) {
                var u = encodeURIComponent(JSON.parse(c).department),
                  s = "t-102451744" === u ? "?template=" : "?department=";
                i = i + s + u;
              }
              if (l) {
                var d = JSON.parse(l),
                  f = Object.keys(d)
                    .map(function (t) {
                      return ""
                        .concat(encodeURIComponent(t), "=")
                        .concat(encodeURIComponent(d[t]));
                    })
                    .join("&");
                (i += c ? "&".concat(f) : "?".concat(f)),
                  sessionStorage.removeItem("redirectParams");
              }
            }
          } catch (m) {}
          window.location.href = i;
        };
    },
    34156: function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (!t) throw Error("Annotation type is not set correctly");
        return {};
      }
      function o(t) {
        return (
          t.hasOwnProperty("data-sb-object-id") ||
          t.hasOwnProperty("__metadata")
        );
      }
      n.d(e, {
        A: function () {
          return r;
        },
        c: function () {
          return o;
        },
      });
    },
    4460: function (t) {
      t.exports = {
        button: "CuButton_button__05mM8",
        disabledWrapper: "CuButton_disabledWrapper__1GA8_",
        buttonShadow: "CuButton_buttonShadow__WYHyQ",
        buttonSm: "CuButton_buttonSm__j1L7W",
        buttonMd: "CuButton_buttonMd__0vbos",
        buttonLg: "CuButton_buttonLg__f6KAJ",
        buttonBorderRadiusSm: "CuButton_buttonBorderRadiusSm__7qxt0",
        buttonBorderRadiusMd: "CuButton_buttonBorderRadiusMd__wi4nk",
        buttonBorderRadiusLg: "CuButton_buttonBorderRadiusLg__ePzYg",
        buttonPill: "CuButton_buttonPill__l65Fc",
        buttonOutline: "CuButton_buttonOutline__ElVXF",
        buttonGhost: "CuButton_buttonGhost__foI0_",
        isActive: "CuButton_isActive__z9TEc",
        v3: "CuButton_v3__e4OPF",
        buttonSecondary: "CuButton_buttonSecondary__0gYAL",
        buttonSecondarySub: "CuButton_buttonSecondarySub__EdMpv",
        buttonTertiary: "CuButton_buttonTertiary__Lyhy2",
        buttonTertiarySub: "CuButton_buttonTertiarySub__o1WHw",
        buttonOther: "CuButton_buttonOther__NLWU7",
        buttonStandard: "CuButton_buttonStandard__jjwY3",
        buttonTab: "CuButton_buttonTab__8JMQP",
        buttonTabActive: "CuButton_buttonTabActive__k4ahT",
        buttonAiPink: "CuButton_buttonAiPink__oVhCg",
        signupNewColorCTA: "CuButton_signupNewColorCTA__RuWAT",
        buttonPrimarySub: "CuButton_buttonPrimarySub__4k3fq",
      };
    },
    79285: function (t) {
      t.exports = {
        button: "CuButtonV4_button__AMFx8",
        buttonSm: "CuButtonV4_buttonSm__UQrbk",
        buttonMd: "CuButtonV4_buttonMd__tZFD9",
        buttonLg: "CuButtonV4_buttonLg__Bxmc3",
        buttonSecondary: "CuButtonV4_buttonSecondary__vEAna",
        buttonSecondaryColor: "CuButtonV4_buttonSecondaryColor__soQJ4",
        buttonTertiary: "CuButtonV4_buttonTertiary__6VgL_",
        buttonTertiaryColor: "CuButtonV4_buttonTertiaryColor__6awn_",
        buttonPrimarySub: "CuButtonV4_buttonPrimarySub__ifXlm",
        buttonSecondarySub: "CuButtonV4_buttonSecondarySub__Jj5_l",
        buttonTertiarySub: "CuButtonV4_buttonTertiarySub__ka6RZ",
      };
    },
    18694: function (t) {
      t.exports = {
        link: "CuLink_link__x0qqd",
        underline: "CuLink_underline__f9pW8",
        v3: "CuLink_v3__j5AhN",
      };
    },
    9819: function (t) {
      t.exports = {
        wrapper: "CuMarkdown_wrapper__CJT68",
        listContainer: "CuMarkdown_listContainer__ZdWqX",
        listItem: "CuMarkdown_listItem__QAVYa",
        iconContainer: "CuMarkdown_iconContainer__JoYJF",
        icon: "CuMarkdown_icon__lsUAM",
        textContainer: "CuMarkdown_textContainer__Enurv",
        listDescription: "CuMarkdown_listDescription__4_iPw",
      };
    },
    15502: function (t) {
      t.exports = { wrapper: "CuRichContent_wrapper__PSUNY" };
    },
    34188: function (t) {
      t.exports = {
        vertical: "CuSignUpForm_vertical__W6Dro",
        formCallToAction: "CuSignUpForm_formCallToAction__kX73n",
        formInput: "CuSignUpForm_formInput__sAnUE",
        ctaMessageContainer: "CuSignUpForm_ctaMessageContainer__4Qzjh",
        ctaMessage: "CuSignUpForm_ctaMessage__dZE6F",
        emailErrorInput: "CuSignUpForm_emailErrorInput__JIYJW",
        ctaButton: "CuSignUpForm_ctaButton__NKQBc",
        emailErrorMessage: "CuSignUpForm_emailErrorMessage__iVG5W",
        horizontal: "CuSignUpForm_horizontal__SA_5e",
        form: "CuSignUpForm_form__1iJib",
        formData: "CuSignUpForm_formData__AjUX0",
        lightText: "CuSignUpForm_lightText__2bgVQ",
        extraMargin: "CuSignUpForm_extraMargin__Ozaqp",
        modal: "CuSignUpForm_modal__5BgyL",
        signUpWithGoogle: "CuSignUpForm_signUpWithGoogle__vMK8f",
        formModalEmailPrompt: "CuSignUpForm_formModalEmailPrompt__F6HV7",
        formEmailPrompt: "CuSignUpForm_formEmailPrompt__kJfMq",
        workEmailPrompt: "CuSignUpForm_workEmailPrompt__LNckR",
        divider: "CuSignUpForm_divider__ZIii8",
      };
    },
    94391: function (t) {
      t.exports = {
        wrapper: "CuTitle_wrapper__7kmqY",
        label: "CuTitle_label__xXagg",
        labelGradient: "CuTitle_labelGradient__EgCrU",
        title: "CuTitle_title__BbV07",
        titleGradient: "CuTitle_titleGradient__j3taF",
        start: "CuTitle_start__p1XNZ",
        center: "CuTitle_center__MGWQN",
        end: "CuTitle_end__oG60J",
        titleWhite: "CuTitle_titleWhite__bZG2n",
        labelWhite: "CuTitle_labelWhite__0RLPC",
        eyebrowDefault: "CuTitle_eyebrowDefault__vmwtC",
        eyebrowPurple: "CuTitle_eyebrowPurple__NmdDi",
        eyebrowDark: "CuTitle_eyebrowDark__utIHS",
        linkLabel: "CuTitle_linkLabel__k2L_E",
        gradientTitle: "CuTitle_gradientTitle__96BIU",
        gradientFullText: "CuTitle_gradientFullText__NNDL_",
        gradientTopFull: "CuTitle_gradientTopFull__lcxDZ",
        gradientTopStart: "CuTitle_gradientTopStart__NfogZ",
        gradientTopCenter: "CuTitle_gradientTopCenter__RPERS",
        gradientTopEnd: "CuTitle_gradientTopEnd__8eLGW",
        gradientBottomFull: "CuTitle_gradientBottomFull__5J7m0",
        gradientBottomStart: "CuTitle_gradientBottomStart__sqd3t",
        gradientBottomCenter: "CuTitle_gradientBottomCenter__BrQzL",
        gradientBottomEnd: "CuTitle_gradientBottomEnd__uazlO",
        gradientPositionOverride: "CuTitle_gradientPositionOverride__Km11X",
        labelContainer: "CuTitle_labelContainer__2NOyC",
        callOutPill: "CuTitle_callOutPill__Q3sCc",
        gradientPillBlue: "CuTitle_gradientPillBlue__O7aTZ",
      };
    },
    46636: function () {},
    66810: function (t) {
      t.exports = {
        modalOverlay: "CuSignUpOverlay_modalOverlay__VvLwH",
        modalContent: "CuSignUpOverlay_modalContent___7Zd8",
        catcherEntrance: "CuSignUpOverlay_catcherEntrance__4MDFm",
        modalContentInner: "CuSignUpOverlay_modalContentInner__584PG",
        catcherContentEntrance: "CuSignUpOverlay_catcherContentEntrance__Uo2fg",
        modalContentInnerAdjust:
          "CuSignUpOverlay_modalContentInnerAdjust__4CACU",
        modalSignUpForm: "CuSignUpOverlay_modalSignUpForm__43ukJ",
        catcherFormEntrance: "CuSignUpOverlay_catcherFormEntrance__K1EBY",
        callToAction: "CuSignUpOverlay_callToAction__jiJzr",
        callToActionLarge: "CuSignUpOverlay_callToActionLarge__9tuvy",
        callToActionSmall: "CuSignUpOverlay_callToActionSmall__FnKfZ",
        callToActionSmallFontSize:
          "CuSignUpOverlay_callToActionSmallFontSize__1dk41",
        modalCloseButton: "CuSignUpOverlay_modalCloseButton__IDBcM",
        modalIconList: "CuSignUpOverlay_modalIconList__kbfIJ",
        badgeLogoContainer: "CuSignUpOverlay_badgeLogoContainer__dMajU",
        badgeLogoIcon: "CuSignUpOverlay_badgeLogoIcon__EL_7F",
        badgeLogoTitle: "CuSignUpOverlay_badgeLogoTitle__wIrUR",
        modalContentDark: "CuSignUpOverlay_modalContentDark__hP6Kg",
        modalOverlayDark: "CuSignUpOverlay_modalOverlayDark__JXdLu",
        modalContentInnerDark: "CuSignUpOverlay_modalContentInnerDark__s8fVh",
        logoContainer: "CuSignUpOverlay_logoContainer__vxdua",
        callToActionSignIn: "CuSignUpOverlay_callToActionSignIn__D4ve6",
        callToActionTitle: "CuSignUpOverlay_callToActionTitle__9X8tl",
        badgeLogoContainerDark: "CuSignUpOverlay_badgeLogoContainerDark__tmMlN",
        lightInputText: "CuSignUpOverlay_lightInputText__sj7Mu",
        catcherContentEntranceMobile:
          "CuSignUpOverlay_catcherContentEntranceMobile__zGoir",
        catcherFormEntranceMobile:
          "CuSignUpOverlay_catcherFormEntranceMobile__p_JYA",
      };
    },
  },
]);
