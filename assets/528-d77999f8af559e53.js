(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [528],
  {
    90528: function (e, t, a) {
      "use strict";
      a.d(t, {
        Jx: function () {
          return he;
        },
        Qc: function () {
          return le;
        },
      });
      var i = a(97997),
        o = a(11720),
        r = a(10782),
        s = a.n(r),
        n = a(73341),
        c = a(65235),
        l = a(86010),
        h = a(89720),
        d = a.n(h),
        m = a(28147),
        p = a.n(m),
        g = a(94202),
        b = a(66112),
        u = a(63538),
        f = a(35773),
        v = a(44888),
        C = a(95140),
        w = a(19515),
        _ = a(51663);
      var Z = function (e) {
        var t = (function (e) {
          var t = (0, o.useRef)(e);
          return (t.current = e), t;
        })(e);
        (0, o.useEffect)(function () {
          return function () {
            t.current();
          };
        }, []);
      };
      var H = function (e) {
        var t = (0, o.useRef)(0),
          a = (0, o.useState)(e),
          i = a[0],
          r = a[1],
          s = (0, o.useCallback)(function (e) {
            cancelAnimationFrame(t.current),
              (t.current = requestAnimationFrame(function () {
                r(e);
              }));
          }, []);
        return (
          Z(function () {
            cancelAnimationFrame(t.current);
          }),
          [i, s]
        );
      };
      function k(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, i = new Array(t); a < t; a++) i[a] = e[a];
        return i;
      }
      function y(e, t, a) {
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
      function N(e, t) {
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
              var i,
                o,
                r = [],
                s = !0,
                n = !1;
              try {
                for (
                  a = a.call(e);
                  !(s = (i = a.next()).done) &&
                  (r.push(i.value), !t || r.length !== t);
                  s = !0
                );
              } catch (c) {
                (n = !0), (o = c);
              } finally {
                try {
                  s || null == a.return || a.return();
                } finally {
                  if (n) throw o;
                }
              }
              return r;
            }
          })(e, t) ||
          j(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function T(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return k(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          j(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function j(e, t) {
        if (e) {
          if ("string" === typeof e) return k(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === a && e.constructor && (a = e.constructor.name),
            "Map" === a || "Set" === a
              ? Array.from(a)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? k(e, t)
              : void 0
          );
        }
      }
      var A = function (e) {
          var t = e.tabs,
            a = e.wrapContent,
            r = e.wrapList,
            s = e.trackProperties,
            n = Array.from(Array(t.length)).map(function (e, t) {
              return t;
            }),
            c = (0, o.useState)(
              (function (e) {
                var t = T(e).concat(T(e)),
                  a = Math.floor(t.length / 2),
                  i = t.slice(0, a);
                return t.slice(a).concat(i);
              })(n)
            ),
            h = c[0],
            d = c[1],
            m = h.length,
            g = Math.floor(m / 2) - 1,
            b = "".concat(g, "-").concat(t[g].id),
            u = (0, o.useRef)(null),
            f = (0, o.useState)(b),
            v = f[0],
            Z = f[1],
            k = N(H(), 2),
            j = k[0],
            A = k[1],
            V = N((0, _.Bu)(), 2),
            B = V[0],
            I = V[1];
          return (
            (0, o.useLayoutEffect)(
              function () {
                if (j && h && u.current) {
                  var e = Array.from(h),
                    a = j.clickedTab,
                    i = j.direction,
                    o = 300 + 50 * (Math.abs(i) - 1),
                    r = i < 0 ? e.splice(i) : e.splice(0, Math.abs(i)),
                    s = i < 0 ? r.concat(e) : e.concat(r);
                  u.current.classList.add(p().tabTransition),
                    u.current.style.setProperty(
                      "--tab-translate-duration",
                      "".concat(o, "ms")
                    ),
                    u.current.style.setProperty(
                      "--tab-translate-x",
                      "".concat(-1 * i * 100, "%")
                    ),
                    setTimeout(function () {
                      u.current &&
                        (d(s),
                        u.current.style.setProperty(
                          "--tab-translate-duration",
                          "".concat(0)
                        ),
                        u.current.classList.remove(p().tabTransition),
                        u.current.style.setProperty("--tab-translate-x", "0"),
                        Z("".concat(g, "-").concat(t[a].id)));
                    }, o + 10);
                }
              },
              [u, j, d, Z]
            ),
            (0, i.BX)(C.fC, {
              defaultValue: b,
              value: v,
              children: [
                (0, i.tZ)(w.Z, {
                  condition: !!r,
                  wrapper: function (e) {
                    return r ? r(e) : (0, i.tZ)(i.HY, {});
                  },
                  children: (0, i.tZ)(C.aV, {
                    className: p().tabList,
                    ref: u,
                    children: h.map(function (e, a) {
                      return (0, i.tZ)(
                        C.xz,
                        {
                          value: "".concat(a, "-").concat(t[e].id),
                          className: (0, l.Z)(p().tabTrigger),
                          onMouseEnter: function () {
                            var a = JSON.stringify(t[e].content),
                              i = new RegExp(
                                /https:\/\/images.ctfassets.net\/w8fc6tgspyjz\/[^"]*/,
                                "g"
                              ),
                              o = a.match(i);
                            if (
                              o &&
                              !(
                                document.head.querySelectorAll(
                                  'link[href^="'.concat(o[0], '"]')
                                ).length > 0
                              )
                            ) {
                              var r = '<link rel="preload" as="image" href="'
                                .concat(o[0], '?fm=avif&q=50" imagesrcset="')
                                .concat(o[0], "?fm=avif&q=50&w=500 500w, ")
                                .concat(o[0], "?fm=avif&q=50&w=600 600w, ")
                                .concat(o[0], "?fm=avif&q=50&w=800 800w, ")
                                .concat(o[0], "?fm=avif&q=50&w=1200 1200w, ")
                                .concat(o[0], "?fm=avif&q=50&w=1600 1600w, ")
                                .concat(
                                  o[0],
                                  '?fm=avif&q=50 2125w" imagesizes="(min-width: 601px) 100vw, 1080px"/>'
                                );
                              document.head.insertAdjacentHTML("beforeend", r);
                            }
                          },
                          onClick: function (i) {
                            var o = parseInt(
                              (null === v || void 0 === v
                                ? void 0
                                : v.split("-")[0]) || "0"
                            );
                            if (o === a) return h;
                            A({ clickedTab: e, direction: a - o }),
                              s &&
                                B(
                                  "click web",
                                  (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                      var a =
                                          null != arguments[t]
                                            ? arguments[t]
                                            : {},
                                        i = Object.keys(a);
                                      "function" ===
                                        typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                          Object.getOwnPropertySymbols(
                                            a
                                          ).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(
                                              a,
                                              e
                                            ).enumerable;
                                          })
                                        )),
                                        i.forEach(function (t) {
                                          y(e, t, a[t]);
                                        });
                                    }
                                    return e;
                                  })({}, I, {
                                    type: "button",
                                    buttonClicked: "".concat(t[e].id),
                                    source: s.source,
                                    sectionInternalName: s.sectionInternalName,
                                    sectionModalName: s.sectionModalName,
                                    sectionTitle: s.sectionTitle,
                                  })
                                );
                          },
                          children: t[e].label,
                        },
                        "".concat(a, "-").concat(t[e].id, "-trigger")
                      );
                    }),
                  }),
                }),
                (0, i.tZ)(w.Z, {
                  condition: !!a,
                  wrapper: function (e) {
                    return a ? a(e) : (0, i.tZ)(i.HY, {});
                  },
                  children: (0, i.tZ)(i.HY, {
                    children: h.map(function (e, a) {
                      return (0,
                      i.tZ)(C.VY, { value: "".concat(a, "-").concat(t[e].id), children: t[e].content }, "".concat(a, "-").concat(t[e].id, "-content"));
                    }),
                  }),
                }),
              ],
            })
          );
        },
        V = a(66343),
        B = function (e) {
          var t = e.icon,
            a = e.title;
          return (0, i.BX)("div", {
            className: p().tabTriggerChild,
            children: [
              (0, i.BX)("div", {
                className: (0, l.Z)(p().tabIconWrapper, "column"),
                children: [
                  (0, i.BX)("svg", {
                    width: "50",
                    height: "49",
                    viewBox: "0 0 50 49",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: p().tabIconBackground,
                    children: [
                      (0, i.BX)("g", {
                        filter: "url(#filter0_b_558_25512)",
                        children: [
                          (0, i.tZ)("path", {
                            d: "M49.1209 24.081C49.1209 18.4655 48.867 13.9619 48.5473 10.5166C48.0471 5.1261 44.0001 1.07916 38.6096 0.578935C35.1642 0.25921 30.6604 0.00537109 25.0446 0.00537109C19.4288 0.00537109 14.9251 0.25921 11.4797 0.578935C6.08917 1.07916 2.04218 5.12611 1.54194 10.5166C1.22222 13.9619 0.968384 18.4655 0.968384 24.081C0.968384 29.8954 1.24052 34.5177 1.57615 38.0075C2.07578 43.2024 5.91333 47.1026 11.1098 47.5863C14.5278 47.9045 19.1089 48.1567 25.0446 48.1567C30.9804 48.1567 35.5615 47.9045 38.9795 47.5863C44.1759 47.1026 48.0135 43.2024 48.5131 38.0075C48.8487 34.5177 49.1209 29.8954 49.1209 24.081Z",
                            fill: "var(--tab-icon-background, #fff)",
                            fillOpacity:
                              "var(--tab-icon-background-opacity, 0.5)",
                          }),
                          (0, i.tZ)("path", {
                            d: "M48.0494 10.5628C48.3677 13.9924 48.6209 18.4806 48.6209 24.081C48.6209 29.8798 48.3495 34.4861 48.0154 37.9596C47.5383 42.9204 43.8859 46.6274 38.9332 47.0885C35.5318 47.4051 30.9663 47.6567 25.0446 47.6567C19.123 47.6567 14.5574 47.4051 11.1561 47.0885C6.20338 46.6274 2.55097 42.9204 2.07385 37.9596C1.73978 34.4861 1.46838 29.8798 1.46838 24.081C1.46838 18.4806 1.72154 13.9924 2.0398 10.5628C2.51781 5.41194 6.375 1.55479 11.5259 1.0768C14.9556 0.758528 19.4439 0.505371 25.0446 0.505371C30.6453 0.505371 35.1337 0.758528 38.5634 1.0768C43.7142 1.55479 47.5714 5.41194 48.0494 10.5628Z",
                            stroke: "var(--tab-icon-background, #fff)",
                            strokeOpacity: "0.8",
                          }),
                        ],
                      }),
                      (0, i.tZ)("defs", {
                        children: (0, i.BX)("filter", {
                          id: "filter0_b_558_25512",
                          x: "-19.0316",
                          y: "-19.9946",
                          width: "88.1525",
                          height: "88.1514",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, i.tZ)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, i.tZ)("feGaussianBlur", {
                              in: "BackgroundImageFix",
                              stdDeviation: "10",
                            }),
                            (0, i.tZ)("feComposite", {
                              in2: "SourceAlpha",
                              operator: "in",
                              result: "effect1_backgroundBlur_558_25512",
                            }),
                            (0, i.tZ)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_backgroundBlur_558_25512",
                              result: "shape",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, i.tZ)(V.ZP, {
                    icon: t,
                    iconWidth: 26,
                    iconHeight: 26,
                    otherClasses: p().tabIcon,
                  }),
                ],
              }),
              (0, i.tZ)("span", { className: p().tabTitle, children: a }),
            ],
          });
        },
        I = [
          {
            id: "forms-tab",
            label: (0, i.tZ)(B, { icon: "icon-v3-form", title: "Forms" }),
            content: (0, i.BX)(i.HY, {
              children: [
                (0, i.tZ)("img", {
                  alt: "ClickUp forms.",
                  src: "https://images.ctfassets.net/w8fc6tgspyjz/274lHEQGIABlSHkVj3ReSu/0ac58ee0909108ce794e4073f2c84a98/home-tabs-v3-forms-desktop.png",
                  width: 2160,
                  height: 1597,
                  className: "sm:hidden",
                }),
                (0, i.tZ)("img", {
                  alt: "ClickUp forms.",
                  src: "https://images.ctfassets.net/w8fc6tgspyjz/55VG3tkhDEqC7iLiAwIj1t/ad67fb8dd8638ccd722c67198e232fdc/home-tabs-v3-forms-mobile.png",
                  width: 1271,
                  height: 699,
                  className: "sm:visible",
                }),
              ],
            }),
          },
          {
            id: "automations-tab",
            label: (0, i.tZ)(B, { icon: "icon-v3-bolt", title: "Automations" }),
            content: (0, i.tZ)(i.HY, {
              children: (0, i.tZ)("img", {
                alt: "ClickUp automations.",
                src: "https://images.ctfassets.net/w8fc6tgspyjz/2B8vjy74uC2619STFNvRKb/703aeb4037b7fcf27491bbccbfa609c4/home-tabs-v3-automations-desktop.png",
                width: 2160,
                height: 1597,
              }),
            }),
          },
          {
            id: "goals-tab",
            label: (0, i.tZ)(B, {
              icon: "icon-v3-selection-single",
              title: "Goals",
            }),
            content: (0, i.tZ)(i.HY, {
              children: (0, i.tZ)("img", {
                alt: "ClickUp goals view.",
                src: "https://images.ctfassets.net/w8fc6tgspyjz/2BLakXXrUPYfN2xwFHHuO8/e56e139d4c3916ac9d6378548f2a67c5/home-tabs-v3-goals-desktop.png",
                width: 2160,
                height: 1597,
              }),
            }),
          },
          {
            id: "ai-tab",
            label: (0, i.tZ)(B, { icon: "icon-v3-clickup-ai", title: "AI" }),
            content: (0, i.BX)(i.HY, {
              children: [
                (0, i.tZ)("img", {
                  alt: "ClickUp brain.",
                  src: "https://images.ctfassets.net/w8fc6tgspyjz/5OjCrhFa8adtz2NyfMrThA/1b88fb873764e8ab68e13c59c984beb6/home-tabs-v3-ai-desktop.png",
                  width: 2160,
                  height: 1597,
                  className: "sm:hidden",
                }),
                (0, i.tZ)("img", {
                  alt: "ClickUp brain.",
                  src: "https://images.ctfassets.net/w8fc6tgspyjz/6K5UQuBfpOYhIKjOohsBfK/d3911f5a668bf00a57be9fda92d06e1d/home-tabs-v3-ai-mobile.png",
                  width: 1271,
                  height: 699,
                  className: "sm:visible",
                }),
              ],
            }),
          },
          {
            id: "time-tracking-tab",
            label: (0, i.tZ)(B, {
              icon: "icon-v3-timer",
              title: "Time tracking",
            }),
            content: (0, i.BX)(i.HY, {
              children: [
                (0, i.tZ)("img", {
                  alt: "ClickUp time tracking.",
                  src: "https://images.ctfassets.net/w8fc6tgspyjz/4wAksykEXI9A9mopHjwVrW/b1666501082c28b646bc14baebaae449/home-tabs-v3-time-tracking-desktop.png",
                  width: 2160,
                  height: 1597,
                  className: "sm:hidden",
                }),
                (0, i.tZ)("img", {
                  alt: "ClickUp time tracking.",
                  src: "https://images.ctfassets.net/w8fc6tgspyjz/3kjzgOcYyjM2ss9PD4oXrU/71435cc58f415a908212c02ece4d0228/home-tabs-v3-time-tracking-mobile.png",
                  width: 1271,
                  height: 699,
                  className: "sm:visible",
                }),
              ],
            }),
          },
          {
            id: "docs-tab",
            label: (0, i.tZ)(B, { icon: "icon-v3-paper", title: "Docs" }),
            content: (0, i.BX)(i.HY, {
              children: [
                (0, i.tZ)("img", {
                  alt: "ClickUp docs.",
                  src: "https://images.ctfassets.net/w8fc6tgspyjz/3YsUrx3kjM6cjoAt3rzChz/f80e8bcd3eb4e7f64d56594a01e128ea/home-tabs-v3-docs-desktop.png",
                  width: 2160,
                  height: 1597,
                  className: "sm:hidden",
                }),
                (0, i.tZ)("img", {
                  alt: "ClickUp docs.",
                  src: "https://images.ctfassets.net/w8fc6tgspyjz/2E8YKXMET6k7rr0G7KQDRY/8ff66e38535e678b2ea26409e4e8b18e/home-tabs-v3-docs-mobile.png",
                  width: 1271,
                  height: 699,
                  className: "sm:visible",
                }),
              ],
            }),
          },
          {
            id: "dashboard-tab",
            label: (0, i.tZ)(B, { icon: "icon-v3-chart", title: "Dashboards" }),
            content: (0, i.BX)(i.HY, {
              children: [
                (0, i.tZ)("img", {
                  alt: "ClickUp dashboard.",
                  src: "https://images.ctfassets.net/w8fc6tgspyjz/B1bl0EQkre11BQitwKTP9/784202f36402c2192692fa6a43edd6d3/home-tabs-v3-dashboards-desktop.png",
                  width: 2160,
                  height: 1597,
                  className: "sm:hidden",
                }),
                (0, i.tZ)("img", {
                  alt: "ClickUp dashboard.",
                  src: "https://images.ctfassets.net/w8fc6tgspyjz/2OAEFrzWvEvlRaeHwL2vig/438b7a706231d4e2d8dcaad59b905c75/home-tabs-v3-dashboards-mobile.png",
                  width: 1271,
                  height: 699,
                  className: "sm:visible",
                }),
              ],
            }),
          },
          {
            id: "sprints-tab",
            label: (0, i.tZ)(B, {
              icon: "icon-v3-view-timeline",
              title: "Sprints",
            }),
            content: (0, i.BX)(i.HY, {
              children: [
                (0, i.tZ)("img", {
                  alt: "ClickUp sprints view.",
                  src: "https://images.ctfassets.net/w8fc6tgspyjz/56uigUiCzqtRzAMTOffFR1/b6cd112d5f946075b481792e7662cc2c/home-tabs-v3-sprints-desktop.png",
                  width: 2160,
                  height: 1597,
                  className: "sm:hidden",
                }),
                (0, i.tZ)("img", {
                  alt: "ClickUp sprints view.",
                  src: "https://images.ctfassets.net/w8fc6tgspyjz/5RkTIo4wNNr5oqTO90m2M0/9e1877b49f9f7e24aa3817b81b424d29/home-tabs-v3-sprints-mobile.png",
                  width: 1271,
                  height: 699,
                  className: "sm:visible",
                }),
              ],
            }),
          },
          {
            id: "whiteboards-tab",
            label: (0, i.tZ)(B, {
              icon: "icon-v3-metric",
              title: "Whiteboards",
            }),
            content: (0, i.tZ)(i.HY, {
              children: (0, i.tZ)("img", {
                alt: "ClickUp whiteboards.",
                src: "https://images.ctfassets.net/w8fc6tgspyjz/5qG4mKVGLgiThoEUoJYtaL/f91b7f249852370a2e1abdc69fd45715/home-tabs-v3-whiteboards-desktop.png",
                width: 2160,
                height: 1597,
              }),
            }),
          },
          {
            id: "projects-tab",
            label: (0, i.tZ)(B, {
              icon: "icon-v3-checkbox-multi",
              title: "Projects",
            }),
            content: (0, i.BX)(i.HY, {
              children: [
                (0, i.tZ)("img", {
                  alt: "ClickUp projects view.",
                  src: "https://images.ctfassets.net/w8fc6tgspyjz/3FllRRqmlYB2Bdf3ASg3fT/14ff2e7789c12cfc0a55358c50aa5312/home-tabs-v3-projects-desktop.png",
                  width: 2160,
                  height: 1597,
                  className: "sm:hidden",
                }),
                (0, i.tZ)("img", {
                  alt: "ClickUp projects view.",
                  src: "https://images.ctfassets.net/w8fc6tgspyjz/6xgmGetcKglMKMiVXU9hNP/96e1479ba62ae07d2b04b790ac89593a/home-tabs-projects-mobile.png",
                  width: 1271,
                  height: 699,
                  className: "sm:visible",
                }),
              ],
            }),
          },
          {
            id: "chat-tab",
            label: (0, i.tZ)(B, {
              icon: "icon-v3-hash-contained",
              title: (0, i.BX)(i.HY, {
                children: [
                  (0, i.tZ)("span", { children: "Chat" }),
                  " ",
                  (0, i.tZ)("span", { className: p().badge, children: "New" }),
                ],
              }),
            }),
            content: (0, i.BX)(i.HY, {
              children: [
                (0, i.tZ)("img", {
                  alt: "ClickUp now with Chat.",
                  src: "https://images.ctfassets.net/w8fc6tgspyjz/ANJFM8HigJCMUwQxflBvU/226711f57db215ba057f50f7a9b68c37/home-tabs-v4-chat-desktop.png",
                  width: 2160,
                  height: 1597,
                  className: "sm:hidden",
                }),
                (0, i.tZ)("img", {
                  alt: "ClickUp now with Chat.",
                  src: "https://images.ctfassets.net/w8fc6tgspyjz/72HjDlSqTCEKUrGDZC6sYL/bfbd4bb5024c67424732bebc2d5010dc/home-tabs-v3-chat-mobile.png",
                  width: 1271,
                  height: 699,
                  className: "sm:visible",
                }),
              ],
            }),
          },
        ],
        z = function (e) {
          var t = e.children;
          return (0, i.BX)("div", {
            className: (0, l.Z)("tabsContent"),
            children: [
              (0, i.tZ)("div", {
                className: (0, l.Z)(p().tabsImage, "content-wrapper-tabsImage"),
                children: t,
              }),
              (0, i.BX)("div", {
                className: p().tabsImageBackground,
                children: [
                  (0, i.tZ)("div", {
                    "aria-hidden": "true",
                    className: (0, l.Z)(p().gradient, p().right),
                  }),
                  (0, i.tZ)("div", {
                    "aria-hidden": "true",
                    className: (0, l.Z)(p().gradient, p().left),
                  }),
                ],
              }),
            ],
          });
        },
        D = (0, o.memo)(z),
        U = a(52e3),
        S = a(71670),
        O = a(81361);
      function X(e, t, a) {
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
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(a);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(a).filter(function (e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              X(e, t, a[t]);
            });
        }
        return e;
      }
      function F(e, t) {
        if (null == e) return {};
        var a,
          i,
          o = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              o = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      var x = [S.Mp, S.eb, S.SF, S.AE, S._H, S.NA, S.az, S.Ky],
        M = function (e) {
          var t = e.tabData,
            a = void 0 === t ? I : t;
          return (0, i.tZ)("div", {
            "data-testid": "cu-home-tabs-v2",
            className: p().tabs,
            children: (0, i.tZ)(b.Z, {
              version: "v3",
              otherClasses: p().tabsContainer,
              children: (0, i.tZ)(A, {
                tabs: a,
                wrapList: function (e) {
                  return (0, i.tZ)("div", {
                    className: p().listWrapper,
                    children: e,
                  });
                },
                wrapContent: function (e) {
                  return (0, i.tZ)(D, { children: e });
                },
                trackProperties: {
                  source: "home page test",
                  sectionInternalName: "cu-home-hero-v2",
                  sectionModalName: "CuHomeHeroV2",
                  sectionTitle: "The everything app, for work.",
                },
              }),
            }),
          });
        },
        E = function (e) {
          var t = e.otherClasses,
            a = e.tabData,
            o = F(e, ["otherClasses", "tabData"]),
            r = (0, O.cC)("new-signup-cta-color"),
            s = (0, O.aS)("new-signup-cta-color", 0);
          return (0, i.BX)("div", {
            className: (0, l.Z)(p().wrapper, t),
            children: [
              (0, i.tZ)(
                "div",
                Y({}, o, {
                  id: "cu-home-hero-v2",
                  "data-testid": "cu-home-hero-v2",
                  className: p().hero,
                  children: (0, i.tZ)(b.Z, {
                    version: "v3",
                    otherClasses: p().heroContainer,
                    children: (0, i.BX)(i.HY, {
                      children: [
                        (0, i.BX)(v.Z, {
                          spacing: 16,
                          otherClasses: p().heroGroup,
                          children: [
                            (0, i.BX)(v.Z, {
                              spacing: 26,
                              children: [
                                (0, i.tZ)(f.Z, {
                                  HeadingTag: "h1",
                                  alignment: "center",
                                  overrideHeadingClass: (0, l.Z)(p().heroTitle),
                                  title: "The everything app, for work.",
                                  version: "v3",
                                }),
                                (0, i.tZ)(u.Z, {
                                  description:
                                    "**Now with Chat, powered by AI.** One place for teams <br>of all sizes to communicate and get work done.",
                                  otherClasses: p().heroDescription,
                                }),
                              ],
                            }),
                            (0, i.BX)(v.Z, {
                              spacing: 12,
                              otherClasses: p().ctaGroup,
                              children: [
                                (0, i.tZ)(g.Z, {
                                  action: "open signup form",
                                  version: "v3",
                                  source: "home page test",
                                  sectionInternalName: "cu-home-hero-v2",
                                  sectionModalName: "CuHomeHeroV2",
                                  sectionTitle: "The everything app, for work.",
                                  type: "button",
                                  buttonClicked: "Get started. It\u2019s FREE",
                                  otherClasses: (0, l.Z)(
                                    p().heroCta,
                                    r && 1 === s
                                      ? p().signupNewColorCTAHome
                                      : ""
                                  ),
                                  children: (0, i.BX)(i.HY, {
                                    children: [
                                      (0, i.tZ)("span", {
                                        children: "Get Started. It's FREE",
                                      }),
                                      (0, i.tZ)("svg", {
                                        width: "16",
                                        height: "12",
                                        viewBox: "0 0 16 12",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, i.tZ)("path", {
                                          d: "M14.5 6L1.5 6M14.5 6L9.66279 1.5M14.5 6L9.66279 10.5",
                                          stroke: "white",
                                          strokeWidth: "2",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.tZ)(u.Z, {
                                  paragraphSize: "paragraph-xs",
                                  description: "Free Forever. No Credit Card.",
                                  otherClasses: p().ctaDescription,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.tZ)(M, { tabData: a }),
                        (0, i.BX)("div", {
                          className: p().logoContainer,
                          children: [
                            (0, i.tZ)(u.Z, {
                              description: "Trusted by 2 million+ teams",
                              otherClasses: (0, l.Z)(
                                p().logoTitle,
                                "paragraph-md"
                              ),
                              version: "v3",
                              paragraphSize: "paragraph-md",
                            }),
                            (0, i.tZ)("div", {
                              className: p().logoWrapper,
                              children: x.map(function (e, t) {
                                return (0,
                                i.tZ)("div", { className: p().logo, children: e }, "hero-logo-".concat(t));
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                })
              ),
              (0, i.BX)("div", {
                className: p().heroBottomLines,
                children: [
                  (0, i.tZ)(U.Z, {
                    imageProps: {
                      src: "/assets/home-test/transition-lines.svg",
                      alt: "",
                      width: 1156,
                      height: 231,
                    },
                    lazyload: !0,
                    "aria-hidden": "true",
                    sizes: "100vw, (min-width: 1080px) 1156px",
                    otherClasses: "sm:hidden",
                  }),
                  (0, i.tZ)(U.Z, {
                    imageProps: {
                      src: "/assets/home-test/transition-lines-mobile.svg",
                      alt: "",
                      width: 375,
                      height: 114,
                    },
                    lazyload: !0,
                    "aria-hidden": "true",
                    sizes: "100vw, (min-width: 1080px) 1156px",
                    otherClasses: "sm:visible",
                  }),
                ],
              }),
            ],
          });
        },
        P = a(95807),
        G = a(94644),
        W = a(13391),
        L = a(85829),
        R = a(8997),
        K = a(9714),
        q = a.n(K),
        J = a(39329);
      function Q(e, t) {
        if (null == e) return {};
        var a,
          i,
          o = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              o = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      var $ = [
          {
            tabTitle: "Tasks",
            tabAssetDesktop: {
              src: "https://images.ctfassets.net/w8fc6tgspyjz/534luqrmDPIQlY1OrSUCg0/1517e9445b34ac3eb90404ffdaf08d4a/home-v4-tasks.png",
              alt: "CickUp Tasks",
              width: 2160,
              height: 1520,
            },
          },
          {
            tabTitle: "Sprints",
            tabAssetDesktop: {
              src: "https://images.ctfassets.net/w8fc6tgspyjz/1y2tP17YxBSWbw78s70qeq/d08903350dda6e6e9540f1593c5e6d57/home-v4-sprints.png",
              alt: "ClickUp Sprints",
              width: 2160,
              height: 1520,
            },
          },
          {
            tabTitle: "Chat",
            tabAssetDesktop: {
              src: "https://images.ctfassets.net/w8fc6tgspyjz/jypdCNdcgVmSsgN9bctf2/8435ab42497c8ac7c64e679766b3e3b3/home-v4-chat.png",
              alt: "ClickUp Chat",
              width: 2160,
              height: 1520,
            },
          },
          {
            tabTitle: "Clips",
            tabAssetDesktop: {
              src: "https://images.ctfassets.net/w8fc6tgspyjz/5I8DaUGvPA7f19S2VBUf5G/212bb896671fa320b1861912e9ffe179/home-v4-clips.png",
              alt: "ClickUp Clips",
              width: 2160,
              height: 1520,
            },
          },
          {
            tabTitle: "Whiteboards",
            tabAssetDesktop: {
              src: "https://images.ctfassets.net/w8fc6tgspyjz/3R835ZywF9e2Czsf6ztdAl/9f673a8d3d899b84f60edc1383cd8e98/home-v4-whiteboards.png",
              alt: "ClickUp Whiteboards",
              width: 2160,
              height: 1520,
            },
          },
          {
            tabTitle: "Docs",
            tabAssetDesktop: {
              src: "https://images.ctfassets.net/w8fc6tgspyjz/3XQMrUFInigVrTpu2ZFvlY/25bf4037f171c6d9694fae20322c1fc7/home-v4-docs.png",
              alt: "ClickUp Docs",
              width: 2160,
              height: 1520,
            },
          },
          {
            tabTitle: "AI",
            tabAssetDesktop: {
              src: "https://images.ctfassets.net/w8fc6tgspyjz/aWdfQKj3gfZHVyhjwRirL/f8b67a3fd8142647ec9d91b487f8252b/home-v4-ai.png",
              alt: "ClickUp AI",
              width: 2160,
              height: 1520,
            },
          },
          {
            tabTitle: "Time tracking",
            tabAssetDesktop: {
              src: "https://images.ctfassets.net/w8fc6tgspyjz/5K1fRWVUdW1XCV2EeJIXbp/8f502bb5030d2c718d468cdbf7f64dd7/home-v4-time-tracking.png",
              alt: "ClickUp Time Tracking",
              width: 2160,
              height: 1520,
            },
          },
          {
            tabTitle: "Dashboards",
            tabAssetDesktop: {
              src: "https://images.ctfassets.net/w8fc6tgspyjz/3q3Nn45CRjPUncREihYBp/259969123704437d5ebdcf52e2de22f6/home-v4-dashboards.png",
              alt: "ClickUp Dashboards",
              width: 2160,
              height: 1520,
            },
          },
          {
            tabTitle: "Automations",
            tabAssetDesktop: {
              src: "https://images.ctfassets.net/w8fc6tgspyjz/1wqvsRCh1tF4NPOByIfi34/33cc2511fdf63647aa5ef4e7c0ce4379/home-v4-automations.png",
              alt: "ClickUp Automations",
              width: 2160,
              height: 1520,
            },
          },
          {
            tabTitle: "Forms",
            tabAssetDesktop: {
              src: "https://images.ctfassets.net/w8fc6tgspyjz/1P8veEbord6dDjSJCFMH2t/1bed6453498dfd39d115a82a1a7cde18/home-v4-forms.png",
              alt: "ClickUp Forms",
              width: 2160,
              height: 1520,
            },
          },
          {
            tabTitle: "Goals",
            tabAssetDesktop: {
              src: "https://images.ctfassets.net/w8fc6tgspyjz/4dbDlpFXXFPJTH5dChJP2l/09092db1cdd1853c7e3cf7111420ef0c/home-v4-goals.png",
              alt: "ClickUp Goals",
              width: 2160,
              height: 1520,
            },
          },
        ],
        ee = [
          {
            id: "cuhomeherov4-tasks",
            label: (0, i.tZ)(B, {
              icon: "icon-v3-checkbox-multi",
              title: "Tasks",
            }),
            content: (0, i.tZ)(i.HY, {
              children: (0, i.tZ)("img", {
                alt: "ClickUp Tasks",
                src: "https://images.ctfassets.net/w8fc6tgspyjz/4CPCfoCvL2J8UkfpE2hQkA/54e662310332410f52805dc7d4d27b39/home-v4-mobile-tasks.png",
                width: 548,
                height: 616,
              }),
            }),
          },
          {
            id: "cuhomeherov4-time-tracking",
            label: (0, i.tZ)(B, {
              icon: "icon-v3-timer",
              title: "Time tracking",
            }),
            content: (0, i.tZ)(i.HY, {
              children: (0, i.tZ)("img", {
                alt: "ClickUp Time Tracking",
                src: "https://images.ctfassets.net/w8fc6tgspyjz/2iVS92ClIO500dmjqicA1v/f78724f7bdc364c7899eb61ca2c7b029/home-v4-mobile-time-tracking.png",
                width: 548,
                height: 616,
              }),
            }),
          },
          {
            id: "cuhomeherov4-AI",
            label: (0, i.tZ)(B, { icon: "icon-v3-clickup-ai", title: "AI" }),
            content: (0, i.tZ)(i.HY, {
              children: (0, i.tZ)("img", {
                alt: "ClickUp AI",
                src: "https://images.ctfassets.net/w8fc6tgspyjz/12bn9NG9yGeYTpA5JZg7L7/81d4c1a2b17f891463a17580e1867bcd/home-v4-mobile-ai.png",
                width: 548,
                height: 616,
              }),
            }),
          },
          {
            id: "cuhomeherov4-Automations",
            label: (0, i.tZ)(B, { icon: "icon-v3-bolt", title: "Automations" }),
            content: (0, i.tZ)(i.HY, {
              children: (0, i.tZ)("img", {
                alt: "ClickUp Automations",
                src: "https://images.ctfassets.net/w8fc6tgspyjz/5dGrbZokG0jaMpNnKFMbbh/2338342529462a11d97e253a0ba4d304/home-v4-mobile-automation.png",
                width: 548,
                height: 616,
              }),
            }),
          },
          {
            id: "cuhomeherov4-Forms",
            label: (0, i.tZ)(B, { icon: "icon-v3-form", title: "Forms" }),
            content: (0, i.tZ)(i.HY, {
              children: (0, i.tZ)("img", {
                alt: "ClickUp Forms",
                src: "https://images.ctfassets.net/w8fc6tgspyjz/1RX8ZJoMFsneuKac1TKH7N/f9b4a1409f9615bbc31434ab8719a00e/home-v4-mobile-forms.png",
                width: 548,
                height: 616,
              }),
            }),
          },
          {
            id: "cuhomeherov4-Whiteboards",
            label: (0, i.tZ)(B, {
              icon: "icon-v3-metric",
              title: "Whiteboards",
            }),
            content: (0, i.tZ)(i.HY, {
              children: (0, i.tZ)("img", {
                alt: "ClickUp Whiteboards",
                src: "https://images.ctfassets.net/w8fc6tgspyjz/63Ijr9SCDTJsKPdBHQf1Ye/d98da7c22bf8631c2228a6bdf4cad827/home-v4-mobile-whiteboards.png",
                width: 548,
                height: 616,
              }),
            }),
          },
          {
            id: "cuhomeherov4-clips",
            label: (0, i.tZ)(B, { icon: "icon-v3-video", title: "Clips" }),
            content: (0, i.tZ)(i.HY, {
              children: (0, i.tZ)("img", {
                alt: "ClickUp Clips",
                src: "https://images.ctfassets.net/w8fc6tgspyjz/3TeywIO6jGwPdsecJ8Aa0a/9fab80e8dfeb38be8d5ddc8a6e964019/home-v4-mobile-clips.png",
                width: 548,
                height: 616,
              }),
            }),
          },
          {
            id: "cuhomeherov4-sprints",
            label: (0, i.tZ)(B, {
              icon: "icon-v3-view-timeline",
              title: "Sprints",
            }),
            content: (0, i.tZ)(i.HY, {
              children: (0, i.tZ)("img", {
                alt: "ClickUp Sprints",
                src: "https://images.ctfassets.net/w8fc6tgspyjz/TpCT8l4dyngtvydhbpmSM/1496e4b7cdbfb04109d91e0119d4faf9/home-v4-mobile-sprints.png",
                width: 548,
                height: 616,
              }),
            }),
          },
          {
            id: "cuhomeherov4-Docs",
            label: (0, i.tZ)(B, { icon: "icon-v3-paper", title: "Docs" }),
            content: (0, i.tZ)(i.HY, {
              children: (0, i.tZ)("img", {
                alt: "ClickUp Docs",
                src: "https://images.ctfassets.net/w8fc6tgspyjz/2HNVLaJxkUHIhSyKlr8nZK/00bac42dfe5843eef1fcc17d302b1c70/home-v4-mobile-docs.png",
                width: 548,
                height: 616,
              }),
            }),
          },
          {
            id: "cuhomeherov4-Goals",
            label: (0, i.tZ)(B, {
              icon: "icon-v3-selection-single",
              title: "Goals",
            }),
            content: (0, i.tZ)(i.HY, {
              children: (0, i.tZ)("img", {
                alt: "ClickUp Goals",
                src: "https://images.ctfassets.net/w8fc6tgspyjz/T7qb8UtuKgNyWKxYGXiir/5a7db7a02156cf4e1e859ee609dc8f50/home-v4-mobile-goals.png",
                width: 548,
                height: 616,
              }),
            }),
          },
          {
            id: "cuhomeherov4-Dashboards",
            label: (0, i.tZ)(B, { icon: "icon-v3-chart", title: "Dashboards" }),
            content: (0, i.tZ)(i.HY, {
              children: (0, i.tZ)("img", {
                alt: "ClickUp Dashboards",
                src: "https://images.ctfassets.net/w8fc6tgspyjz/3XTSq2FsEkLITpvi5A8dD3/da91561153f8b16513fc995c22480c85/home-v4-mobile-dashboards.png",
                width: 548,
                height: 616,
              }),
            }),
          },
          {
            id: "cuhomeherov4-chat",
            label: (0, i.tZ)(B, {
              icon: "icon-v3-hash-contained",
              title: (0, i.BX)(i.HY, {
                children: [
                  (0, i.tZ)("span", { children: "Chat" }),
                  " ",
                  (0, i.tZ)("span", {
                    className: (0, l.Z)(q().new, q().newMobile),
                    children: "New",
                  }),
                ],
              }),
            }),
            content: (0, i.tZ)(i.HY, {
              children: (0, i.tZ)("img", {
                alt: "ClickUp Chat",
                src: "https://images.ctfassets.net/w8fc6tgspyjz/6fbcCcqWE4XtBA43WXVDO3/9bb28922976344396d3bbb63ef0dae5b/home-v4-mobile-chat.png",
                width: 548,
                height: 616,
              }),
            }),
          },
        ],
        te = [S.Mp, S.eb, S.SF, S.AE, S._H, S.NA, S.az, S.Ky],
        ae = function (e) {
          var t = e.title,
            a = void 0 === t ? "The everything app, for work." : t,
            r = e.otherClasses,
            s = e.tabDataDesktop,
            n = void 0 === s ? $ : s,
            c = e.tabDataMobile,
            h = void 0 === c ? ee : c,
            d =
              (Q(e, [
                "title",
                "otherClasses",
                "tabDataDesktop",
                "tabDataMobile",
              ]),
              (0, o.useState)(0)),
            m = d[0],
            p = d[1];
          return (0, i.BX)("div", {
            className: (0, l.Z)(q().wrapper, r),
            children: [
              (0, i.BX)("div", {
                className: q().innerWrapper,
                children: [
                  (0, i.BX)("div", {
                    className: (0, l.Z)(q().contentSide, "visuallyHidden--md "),
                    children: [
                      (0, i.tZ)("h1", { className: q().title, children: a }),
                      (0, i.tZ)("p", {
                        className: q().heroText,
                        children:
                          "Now with Chat, powered by AI. One place for teams of all sizes to communicate and get work done.",
                      }),
                      (0, i.tZ)(g.Z, {
                        action: "open signup form",
                        version: "v3",
                        otherClasses: q().cta,
                        buttonClicked: "Get Started. It's FREE",
                        sectionModelName: "homepage 2-column hero",
                        children: "Get Started. It's FREE",
                      }),
                      (0, i.tZ)("div", {
                        className: q().freeForever,
                        children: "Free Forever. No Credit Card Required.",
                      }),
                    ],
                  }),
                  (0, i.BX)("div", {
                    className: (0, l.Z)(q().tabSide, "visuallyHidden--md"),
                    children: [
                      (0, i.tZ)("div", { className: q().gradientAccent }),
                      (0, i.tZ)("div", {
                        className: q().gradientAccentXLMiddle,
                      }),
                      (0, i.tZ)("div", {
                        className: q().gradientAccentXLRight,
                      }),
                      (0, i.tZ)(U.Z, {
                        imageProps: {
                          src: "https://images.ctfassets.net/w8fc6tgspyjz/63h1649FHme7NHmE1aVgYl/5d08c18b3b7d9ff70cca7cc055a173f8/hero-noise.png",
                          alt: "Noise accet",
                          width: 1052,
                          height: 814,
                          isAriaHidden: !0,
                        },
                        lazyload: !1,
                        otherClasses: q().noiseAccent,
                      }),
                      (0, i.tZ)("div", {
                        className: q().tabNavWrapper,
                        children: n.map(function (e, t) {
                          return (0, i.tZ)(
                            "div",
                            {
                              className: q().tabNavItem,
                              children: (0, i.tZ)(J.ZP, {
                                isReset: !0,
                                otherClasses: (0, l.Z)(
                                  q().tabNavButton,
                                  t === m && q().activeButton
                                ),
                                onClick: function () {
                                  return p(t);
                                },
                                buttonClicked: e.tabTitle,
                                sectionModelName: "homepage 2-column hero",
                                children: (0, i.BX)(i.HY, {
                                  children: [
                                    e.tabTitle,
                                    "Chat" === e.tabTitle &&
                                      (0, i.tZ)("span", {
                                        className: q().new,
                                        children: "NEW",
                                      }),
                                  ],
                                }),
                              }),
                            },
                            "".concat(t, "-cuhomeherov4-button")
                          );
                        }),
                      }),
                      (0, i.tZ)("div", {
                        className: (0, l.Z)(q().tabImageWrapper),
                        children: n.map(function (e, t) {
                          return (0,
                          i.tZ)("img", { src: e.tabAssetDesktop.src, height: e.tabAssetDesktop.height, width: e.tabAssetDesktop.width, alt: e.tabAssetDesktop.alt, loading: "eager", className: (0, l.Z)(q().tabImage, t === m && q().activeImage) }, "".concat(t, "-cuhomeherov4-image"));
                        }),
                      }),
                    ],
                  }),
                  (0, i.tZ)(E, {
                    otherClasses: (0, l.Z)(q().mobile),
                    tabData: h,
                  }),
                ],
              }),
              (0, i.BX)("div", {
                className: q().logoContainer,
                children: [
                  (0, i.tZ)(u.Z, {
                    description: "Trusted by 2 million+ teams",
                    otherClasses: (0, l.Z)(q().logoTitle, "paragraph-md"),
                    version: "v3",
                    paragraphSize: "paragraph-md",
                  }),
                  (0, i.tZ)("div", {
                    className: q().logoWrapper,
                    children: te.map(function (e, t) {
                      return (0,
                      i.tZ)("div", { className: q().logo, children: e }, "hero-logo-".concat(t));
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      function ie(e, t, a) {
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
      function oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(a);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(a).filter(function (e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              ie(e, t, a[t]);
            });
        }
        return e;
      }
      var re = function (e) {
          var t = e.sections,
            a = e.enableAiModule,
            o = void 0 === a || a,
            r = e.otherClasses,
            s = (0, O.cC)("home-ai-module"),
            n = t.cuHomeCollapse,
            c = t.cuHomeTeamsTab,
            h = (t.cuHomeLogoSalad, t.cuHomeTestEverythingYourTeamIsLookingFor),
            m = t.cuAiModule,
            p = (0, l.Z)("overflow-x-hidden", d().wrapper, r),
            g = (0, O.cC)("roi-calculator-home");
          return (0, i.BX)("div", {
            className: p,
            "data-testid": "cu-home-test-parent",
            "data-segment-root": "body",
            children: [
              (0, i.tZ)(E, { otherClasses: "home-hero-control" }),
              (0, i.tZ)(ae, {
                title: "The everything app, for work.",
                otherClasses: "home-hero-variant",
              }),
              (0, i.tZ)(P.Z, oe({}, n)),
              g &&
                (0, i.tZ)(L.ZP, {
                  title: "Cut costs and boost <br>productivity",
                  description:
                    "Eliminate app overload and see how much you can save by <br>replacing multiple subscriptions with ClickUp.",
                  otherClasses: d().roiCalculator,
                  lang: "en",
                }),
              s &&
                o &&
                (0, i.tZ)(R.Z, oe({}, m, { otherClasses: d().cuAiModule })),
              (0, i.tZ)(G.Z, oe({}, c)),
              (0, i.tZ)(W.Z, oe({}, h)),
            ],
          });
        },
        se = a(33663),
        ne = a(19320),
        ce = a(18959),
        le = {
          cuHomeHero: {
            title: ce.g8 || "",
            subtext: ce.SM || "",
            cta: ce.RC,
            g2Rating: ce.dD,
            callout: ce.Oo,
          },
          cuHomeTabs: { tabs: ce.Uf },
          cuHomeCollapse: {
            title: ce.$D || "",
            subtext: ce.Fn || "",
            data: ce.yT,
          },
          cuHomeLogoSalad: { title: ce.jk, logos: ce.Uh },
          cuHomeTeamsTab: {
            title: ce.uW || "",
            subtext: ce.eC || "",
            navCta: ce.dn,
            cardCta: ce.zI,
            tabData: ce.dF,
          },
          cuHomeTestEverythingYourTeamIsLookingFor: {
            title: ce.PY || "",
            subText: ce._5 || "",
            cards: ce.Rf,
          },
          cuAiModule: {
            title: ce.Fd || "",
            description: ce.pr || "",
            primaryCta: ce.X3 || "",
            secondaryCta: ce.MP || "",
          },
        },
        he = function (e) {
          var t = e.seoTitle,
            a = void 0 === t ? ce.aU : t,
            o = e.seoDescription,
            r = void 0 === o ? ce.HF : o,
            h = e.seoCanonical,
            d = void 0 === h ? ce.Lv : h,
            m = e.pageSections,
            p = void 0 === m ? le : m,
            g = e.otherClasses;
          return (0, i.BX)("div", {
            "data-testid": "cu-home",
            className: (0, l.Z)(s().wrapper, g, "v3"),
            children: [
              (0, i.tZ)(n.Z, { variant: "width1300", simpleNav: !1 }),
              (0, i.BX)("main", {
                className: s().mainWrapper,
                children: [
                  (0, i.tZ)(se.Z, {
                    title: a,
                    description: r,
                    canonical: d,
                    headInjection: [
                      {
                        tag: "link",
                        attributes: {
                          rel: "alternate",
                          href: "https://clickup.com",
                          hreflang: "en",
                        },
                      },
                      {
                        tag: "link",
                        attributes: {
                          rel: "alternate",
                          href: "https://clickup.com/fr-FR",
                          hreflang: "fr-FR",
                        },
                      },
                      {
                        tag: "link",
                        attributes: {
                          rel: "alternate",
                          href: "https://clickup.com/de",
                          hreflang: "de",
                        },
                      },
                      {
                        tag: "link",
                        attributes: {
                          rel: "alternate",
                          href: "https://clickup.com/es-ES",
                          hreflang: "es-ES",
                        },
                      },
                      {
                        tag: "link",
                        attributes: {
                          rel: "alternate",
                          href: "https://clickup.com/it",
                          hreflang: "it",
                        },
                      },
                      {
                        tag: "link",
                        attributes: {
                          rel: "alternate",
                          href: "https://clickup.com/pt-BR",
                          hreflang: "pt-BR",
                        },
                      },
                    ],
                  }),
                  (0, i.tZ)("div", {
                    className: s().mainContent,
                    children: (0, i.tZ)(re, { sections: p }),
                  }),
                ],
              }),
              (0, i.tZ)(c.Z, { columns: ne.G, isPaidTraffic: !1 }),
            ],
          });
        };
    },
    28147: function (e) {
      e.exports = {
        wrapper: "CuHomeHeroV2_wrapper__ZBBmq",
        hero: "CuHomeHeroV2_hero__G2k32",
        heroBottomLines: "CuHomeHeroV2_heroBottomLines__NpcTF",
        heroContainer: "CuHomeHeroV2_heroContainer__7sOBK",
        tabsContainer: "CuHomeHeroV2_tabsContainer__SGwZa",
        heroGroup: "CuHomeHeroV2_heroGroup__Yf0kD",
        heroTitle: "CuHomeHeroV2_heroTitle__0KZxf",
        heroDescription: "CuHomeHeroV2_heroDescription__Gj8rZ",
        heroCta: "CuHomeHeroV2_heroCta__tKB9x",
        signupNewColorCTAHome: "CuHomeHeroV2_signupNewColorCTAHome__3fRuc",
        ctaGroup: "CuHomeHeroV2_ctaGroup__6irMj",
        ctaDescription: "CuHomeHeroV2_ctaDescription__XHNUc",
        tabs: "CuHomeHeroV2_tabs__zYAx4",
        tabsContent: "CuHomeHeroV2_tabsContent__ibg_C",
        lines: "CuHomeHeroV2_lines__0ienz",
        reverse: "CuHomeHeroV2_reverse__i33yi",
        gradient: "CuHomeHeroV2_gradient__D3nzj",
        left: "CuHomeHeroV2_left__HJQgw",
        right: "CuHomeHeroV2_right__9XX5u",
        tabsImage: "CuHomeHeroV2_tabsImage__wizkE",
        fadeIn: "CuHomeHeroV2_fadeIn__JJ92v",
        tabList: "CuHomeHeroV2_tabList__717cE",
        tabTransition: "CuHomeHeroV2_tabTransition__1Uq5X",
        tabTrigger: "CuHomeHeroV2_tabTrigger__P8FY1",
        tabTriggerChild: "CuHomeHeroV2_tabTriggerChild__bEwmE",
        listWrapper: "CuHomeHeroV2_listWrapper__VPckK",
        tabIconWrapper: "CuHomeHeroV2_tabIconWrapper__E9wxU",
        tabIconBackground: "CuHomeHeroV2_tabIconBackground__JTy_6",
        tabIcon: "CuHomeHeroV2_tabIcon__ye1IJ",
        tabTitle: "CuHomeHeroV2_tabTitle__Y87DR",
        badge: "CuHomeHeroV2_badge__N49k9",
        logoContainer: "CuHomeHeroV2_logoContainer__IQ5gF",
        logoWrapper: "CuHomeHeroV2_logoWrapper__GouxA",
        logo: "CuHomeHeroV2_logo__0bSNm",
        logoTitle: "CuHomeHeroV2_logoTitle__mAZDA",
      };
    },
    9714: function (e) {
      e.exports = {
        wrapper: "CuHomeHeroV4_wrapper__uZNkE",
        innerWrapper: "CuHomeHeroV4_innerWrapper__Vx6IZ",
        contentSide: "CuHomeHeroV4_contentSide__20OBg",
        tabSide: "CuHomeHeroV4_tabSide__mHK6l",
        logoContainer: "CuHomeHeroV4_logoContainer__dDZvY",
        mobile: "CuHomeHeroV4_mobile__esuQG",
        eyebrow: "CuHomeHeroV4_eyebrow__yNES4",
        eyebrowText: "CuHomeHeroV4_eyebrowText__DQ9za",
        title: "CuHomeHeroV4_title__iev_1",
        heroText: "CuHomeHeroV4_heroText__LTchm",
        noiseAccent: "CuHomeHeroV4_noiseAccent__cp1Jr",
        gradientAccent: "CuHomeHeroV4_gradientAccent__s3Jc5",
        gradientAccentXLMiddle: "CuHomeHeroV4_gradientAccentXLMiddle__wGefe",
        gradientAccentXLRight: "CuHomeHeroV4_gradientAccentXLRight__5rkdj",
        tabImageWrapper: "CuHomeHeroV4_tabImageWrapper__GZ7oM",
        tabImage: "CuHomeHeroV4_tabImage__OTmdh",
        activeImage: "CuHomeHeroV4_activeImage__HnD3v",
        tabNavWrapper: "CuHomeHeroV4_tabNavWrapper__QHVw4",
        tabNavButton: "CuHomeHeroV4_tabNavButton__HpGpH",
        activeButton: "CuHomeHeroV4_activeButton__B_agH",
        tabNavItem: "CuHomeHeroV4_tabNavItem__gIbWY",
        new: "CuHomeHeroV4_new__MOfbC",
        newMobile: "CuHomeHeroV4_newMobile__8xvZe",
        cta: "CuHomeHeroV4_cta__tnvde",
        freeForever: "CuHomeHeroV4_freeForever__xMZxd",
        logoTitle: "CuHomeHeroV4_logoTitle__zkXBo",
        logoWrapper: "CuHomeHeroV4_logoWrapper__IGQ7B",
        logo: "CuHomeHeroV4_logo__gQw_3",
      };
    },
  },
]);
