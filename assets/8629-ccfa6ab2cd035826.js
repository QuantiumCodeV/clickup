(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8629],
  {
    18629: function (e, t, o) {
      "use strict";
      o.d(t, {
        Tp: function () {
          return H;
        },
        a_: function () {
          return z;
        },
        ZP: function () {
          return Y;
        },
      });
      var n = o(97997),
        r = o(11720),
        i = o(86010),
        a = o(56903),
        s = o(96552),
        c = o(25296),
        l = o(14181),
        d = o(5678),
        u = o(15668),
        m = function (e) {
          var t,
            o = document.querySelector("#mktoForm_".concat(e)),
            n =
              null === o || void 0 === o
                ? void 0
                : o.querySelectorAll("label.mktoLabel"),
            r =
              null === o || void 0 === o
                ? void 0
                : o.querySelectorAll("div.mktoHtmlText"),
            i =
              null === o || void 0 === o
                ? void 0
                : o.querySelectorAll('input[type="hidden"]'),
            a =
              null === o || void 0 === o
                ? void 0
                : o.querySelectorAll(".mktoPlaceholder"),
            s =
              null === o || void 0 === o
                ? void 0
                : o.querySelectorAll(".mktoButton"),
            c =
              null === o || void 0 === o
                ? void 0
                : o.querySelector("#Lblmarketable"),
            l =
              null ===
                (t =
                  null === o || void 0 === o
                    ? void 0
                    : o.querySelector(
                        "select option[value='United States']"
                      )) || void 0 === t
                ? void 0
                : t.parentElement,
            d =
              null === o || void 0 === o
                ? void 0
                : o.querySelector('label[for="Country"]');
          if (d) {
            var u = null === d || void 0 === d ? void 0 : d.parentElement,
              m = null === u || void 0 === u ? void 0 : u.parentElement;
            u &&
              m &&
              (m.classList.add("mkto--hidden"),
              u.classList.add("mkto--hidden"));
          }
          if (
            (n &&
              n.forEach(function (e) {
                var t = e.parentElement,
                  o =
                    null === t || void 0 === t
                      ? void 0
                      : t.querySelectorAll(
                          "input[type=email], input[type=text], input[type=date]"
                        ),
                  n =
                    null === t || void 0 === t
                      ? void 0
                      : t.querySelectorAll("select"),
                  r =
                    null === t || void 0 === t
                      ? void 0
                      : t.querySelectorAll("input[type=radio]"),
                  i =
                    null === t || void 0 === t
                      ? void 0
                      : t.querySelectorAll("input[type=checkbox]"),
                  a =
                    null === t || void 0 === t
                      ? void 0
                      : t.querySelectorAll("textarea"),
                  s =
                    null === t || void 0 === t
                      ? void 0
                      : t.querySelectorAll("input[type=range]");
                o &&
                  (null === o || void 0 === o ? void 0 : o.length) > 0 &&
                  (null === o ||
                    void 0 === o ||
                    o.forEach(function (e) {
                      e.classList.add("textbox");
                    })),
                  n &&
                    (null === n || void 0 === n ? void 0 : n.length) > 0 &&
                    (null === n ||
                      void 0 === n ||
                      n.forEach(function (e) {
                        e.classList.add("dropdown");
                      })),
                  r &&
                    (null === r || void 0 === r ? void 0 : r.length) > 0 &&
                    (null === r ||
                      void 0 === r ||
                      r.forEach(function (e) {
                        e.classList.add("radiobutton");
                      })),
                  i &&
                    (null === i || void 0 === i ? void 0 : i.length) > 0 &&
                    (null === i ||
                      void 0 === i ||
                      i.forEach(function (e) {
                        e.classList.add("checkbox");
                      })),
                  a &&
                    (null === a || void 0 === a ? void 0 : a.length) > 0 &&
                    (null === a ||
                      void 0 === a ||
                      a.forEach(function (e) {
                        var t;
                        e.classList.add("textarea"),
                          null === (t = e.parentElement) ||
                            void 0 === t ||
                            t.classList.add("textareaFieldWrap");
                      })),
                  s &&
                    (null === s || void 0 === s ? void 0 : s.length) > 0 &&
                    (null === s ||
                      void 0 === s ||
                      s.forEach(function (e) {
                        e.classList.add("rangefield");
                      }));
              }),
            r &&
              r.forEach(function (e) {
                var t = e.parentElement;
                null === t || void 0 === t || t.classList.add("privacytext");
              }),
            i &&
              i.forEach(function (e) {
                var t = e.parentElement;
                null === t || void 0 === t || t.classList.add("hidden_input");
              }),
            a &&
              a.forEach(function (e) {
                var t = e.parentElement;
                null === t || void 0 === t || t.classList.add("hidden_input");
              }),
            r && s)
          ) {
            var f = r[r.length - 1],
              p = s[s.length - 1];
            if (f && "submit" === p.getAttribute("type")) {
              var h,
                v =
                  null === o || void 0 === o
                    ? void 0
                    : o.querySelectorAll(".privacytext"),
                g =
                  v &&
                  (null === (h = v[v.length - 1]) || void 0 === h
                    ? void 0
                    : h.parentElement);
              g && g.classList.contains("mktoFormCol") && g.remove();
              var y = p.parentElement,
                k = null === y || void 0 === y ? void 0 : y.parentElement;
              null === k ||
                void 0 === k ||
                k.classList.add("mktoButtonRow--w-disclaimer"),
                null === k || void 0 === k || k.appendChild(f);
            }
          }
          var b = function () {
            var e = null === c || void 0 === c ? void 0 : c.parentElement;
            null === e ||
              void 0 === e ||
              e.classList.add("mktoFieldWrap--has-checkbox");
          };
          c && b(),
            l &&
              o &&
              (l.onchange = function () {
                c && b();
              });
        },
        f = function (e, t) {
          var o = document.querySelector("#mktoForm_".concat(e)),
            n =
              null === o || void 0 === o
                ? void 0
                : o.querySelector('label[for="Country"]');
          if (n) {
            var r = null === n || void 0 === n ? void 0 : n.parentElement,
              i = null === r || void 0 === r ? void 0 : r.parentElement;
            r &&
              i &&
              (i.classList.add("mkto--hidden"),
              r.classList.add("mkto--hidden")),
              ("" !== t.getValues().Country &&
                null !== t.getValues().Country &&
                "undefined" !== typeof t.getValues().Country) ||
                (r &&
                  i &&
                  (i.classList.remove("mkto--hidden"),
                  r.classList.remove("mkto--hidden")));
          }
        },
        p = o(90344),
        h = o(97660),
        v = o(13076),
        g = o(53669),
        y = o(30619),
        k = o(27218);
      function b(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(o);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(o).filter(function (e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              b(e, t, o[t]);
            });
        }
        return e;
      }
      var w = (0, v.f)(),
        _ = function (e) {
          var t,
            o = (0, g.F)() || !1;
          return (
            (t = o && JSON.parse(o)),
            o && t.userEmail === e.toLowerCase()
              ? ((0, s.f)("getUserId::cachedUserId::", "log", {
                  cachedUserId: o,
                  json: t,
                }),
                new Promise(function (e) {
                  setTimeout(function () {
                    e(t.userId);
                  }, 1e3);
                }))
              : fetch("/codes.json", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: e }),
                })
                  .then(function (e) {
                    return (
                      (0, s.f)("getUserId::response::", "log", { response: e }),
                      e.json()
                    );
                  })
                  .then(function (t) {
                    var o;
                    return (
                      w &&
                        window.localStorage.setItem(
                          "cuUserId",
                          JSON.stringify({
                            userId: t.userid,
                            userEmail: ((o = e), o.toLowerCase().trim()),
                          })
                        ),
                      t.userid
                    );
                  })
                  .catch(function (e) {
                    (0, s.f)("ERROR fetching userId: ".concat(e), "error"),
                      (0, p.H)(e, "ERROR.POSTEMAILLEAD");
                  })
          );
        },
        C = function (e, t) {
          (0, s.f)("segmentTrackForm: ".concat(e), "info", { userDetails: t });
          var o = (0, k.b)(),
            n = S(
              {},
              t,
              (0, y.G)(!0),
              o && { actual_url: o.location, actual_path: o.pathname }
            );
          try {
            var r;
            (null === (r = window.OptanonActiveGroups) || void 0 === r
              ? void 0
              : r.includes("C0002")) && window.analytics.track(e, n);
          } catch (i) {
            (0, s.f)("ERROR tracking event: ".concat(e), "error", i);
          }
        },
        M = {
          1006: "Contact Sales",
          1176: "Contact Sales",
          1018: "Contact Sales",
          1341: "Contact Sales",
          1033: "Digital Asset",
          1022: "LMAD",
          1019: "Non-Profit",
          1089: "Savings Calculator",
          1299: "Demo Request",
          1104: "Registration",
          1056: "Registration",
          1081: "Registration",
          1232: "Registration",
          1180: "Registration",
          1173: "Registration",
          1181: "Registration",
          1167: "Registration",
          1116: "Registration",
          1082: "Registration",
          1086: "Registration",
          1092: "Registration",
          1149: "Registration",
          1162: "Registration",
          1110: "Registration",
          1115: "Registration",
          1079: "Registration",
          1200: "Registration",
          1301: "Registration",
          1443: "Registration",
          1468: "Registration",
          1521: "Registration",
          1438: "Registration",
          1535: "Registration",
          1532: "Registration",
        },
        E = {
          1033: {
            "/gartner":
              "https://www.gartner.com/reprints/?id=1-2CW5I5G6&ct=230313&st=sb",
            "/2023-gartner-update-your-approach-to-resource-management":
              "https://www.gartner.com/doc/reprints?id=1-2F7WC55N&ct=231005&st=sb",
            "/product-management-guide":
              "https://clickup.com/pdf/ClickUp-for-Product-Managers.pdf",
            "/general-resources/five-golden-rules-of-productivity":
              "https://assets.ctfassets.net/w8fc6tgspyjz/2MTRJYYGfoBWjFWAzVifjQ/df333e47d69d4c79eda9e826babe58a9/The_Five_Golden_Rules_of_Productivity_-_ClickUp_Guide.pdf",
            "/general-resources/company-productivity-whitepaper":
              "https://assets.ctfassets.net/w8fc6tgspyjz/1CgNYsareYK1D6OzJB05ZD/0446da8425213f726d14e56d7d553e1e/5_Tips_for_Company_Productivity.pdf",
            "/customers/vida-health":
              "https://clickup.com/pdf/ClickUp%20-%20Vida%20Health%20Case%20Study.pdf",
            "/customers/padres":
              "https://clickup.com/pdf/Padres_Case_Study.pdf",
            "/customers/wake-forest-university":
              "https://clickup.com/pdf/Wake_Forest_Case_Study.pdf",
            "/customers/stanley-security":
              "https://clickup.com/pdf/STANLEY%20Security%20-%20ClickUp%20Case%20Study.pdf",
            "/customers/lulupress":
              "https://clickup.com/pdf/Lulu-Press-ClickUp-Case-Study.pdf",
            "/customers/pigment":
              "https://clickup.com/pdf/PigmentCaseStudyFinal.pdf",
            "/customers/hawke-media":
              "https://clickup.com/pdf/hawke-media-ClickUp-Case-Study.pdf",
            "/idc-cwm-maturity-whitepaper":
              "https://assets.ctfassets.net/w8fc6tgspyjz/5Xhk4ewXRzxLZRKMWK17dH/7209d00d38280f28f2a35defbdfbea8e/CWM_Maturity_Model_IDC.pdf",
            "/customers/icms": "https://clickup.com/pdf/ICMS-Case-Study.pdf",
            "/customers/revpartners":
              "https://clickup.com/pdf/RevPartners-ClickUp_Case_Study.pdf",
            "/guides/the-big-book-for-agency-project-management":
              "https://assets.ctfassets.net/w8fc6tgspyjz/62s0ifGhG6ySgVSYUcbSn4/2ad856d34277e6ea2174a1386aacfc10/The_Big_Book_for_Agency_Project_Management_ClickUp.pdf",
            "/punchup-report":
              "https://downloads.ctfassets.net/w8fc6tgspyjz/48bpihnxIt4GQAWTvYvyKM/ced011dc1c63f125903c5d5fa44e589e/8x8uu0b1h_PunchUp_Report.pdf",
            "/strategic-planning-okrs-handbook":
              "https://downloads.ctfassets.net/w8fc6tgspyjz/2g2eetf7xTrT6F8yh7Sfxd/5e9f6728452aca9f3cc8487bafc6e9dc/ClickUp_Strategic_Planning_OKRs_Handbook.pdf",
            "/events/vision-to-victory-summit":
              "https://clickup.com/events/vision-to-victory-summit-on-demand",
          },
          1089: { "/savings-calculator": "#thankyou" },
          1018: {
            "/marketoforms/contactsales": "#thankyou",
            "/marketoforms/contactsales-go": "#thankyou",
          },
          1299: {
            "/on-demand-demo/demo-request":
              "https://clickup.com/elf-thanks?elf-referrer=/",
          },
          1176: {
            "/general-resources/contact-us":
              "https://clickup.com/elf-thanks?elf-referrer=/",
            "/general-resources/contact-sales":
              "https://clickup.com/elf-thanks?elf-referrer=/",
            "/contact/contact-sales-ai":
              "https://clickup.com/elf-thanks?elf-referrer=/",
          },
          1006: {
            "/general-resources/contact-us":
              "https://clickup.com/elf-thanks?elf-referrer=/",
            "/general-resources/contact-sales":
              "https://clickup.com/elf-thanks?elf-referrer=/",
          },
          1443: {
            "/events/vision-to-victory-summit":
              "https://clickup.com/events/vision-to-victory-summit-on-demand",
            "/events/integrate-to-elevate-virtual-marketing-series":
              "https://clickup.com/events/integrate-to-elevate-virtual-marketing-series/thank-you",
            "/events/productivity-reimagined-show":
              "https://clickup.com/events/productivity-reimagined-show/thankyou",
          },
          1468: {
            "/v3/hub/webinars/manage-projects":
              "https://clickup.com/v3/hub/webinars/confirmation",
            "/v3/hub/webinars/revolutionize-productivity":
              "https://clickup.com/v3/hub/webinars/confirmation",
            "/v3/hub/webinars/unleash-agile":
              "https://clickup.com/v3/hub/webinars/confirmation",
            "/v3/hub/webinars/marketing-content-management":
              "https://clickup.com/v3/hub/webinars/confirmation",
            "/v3/hub/webinars/agencies":
              "https://clickup.com/v3/hub/webinars/confirmation",
            "/v3/hub/webinars/knowledge-base":
              "https://clickup.com/v3/hub/webinars/confirmation",
            "/v3/hub/webinars/strategic-planning":
              "https://clickup.com/v3/hub/webinars/confirmation",
            "/v3/hub/webinars/business-operations":
              "https://clickup.com/v3/hub/webinars/confirmation",
            "/v3/hub/webinars/personal-productivity":
              "https://clickup.com/v3/hub/webinars/confirmation",
          },
          1521: {
            "/events/product-webinar-ama":
              "https://clickup.com/events/product-webinar-ama-thank-you ",
          },
          1438: {
            "/events/gartner-dw-summit-exec-roundtable-dinner":
              "https://clickup.com/elf-thanks?elf-referrer=/",
          },
          1535: {
            "/events/cu-brain-workshop":
              "https://clickup.com/events/cu-brain-workshop-thank-you",
          },
          1532: {
            "/events/malt-and-mingle":
              "https://clickup.com/events/malt-and-mingle/thank-you",
          },
        };
      function F(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var P = l.Qg && "" !== document.cookie,
        I = (0, v.f)(),
        R = function (e) {
          var t;
          (0, s.f)("mktoSegmentMapper:", "info", e);
          var o =
              (F(
                (t = {
                  Email: "email",
                  LastName: "lastName",
                  FirstName: "firstName",
                  Phone: "phone",
                  Company: "company",
                  Title: "title",
                  Country: "address",
                }),
                "Country",
                "country"
              ),
              F(t, "formid", "formId"),
              t),
            n = {},
            r = "website";
          for (var i in e)
            if (e.hasOwnProperty(i))
              for (var a in o) a === i && (n[o[a]] = e[i]);
          return (
            e.Email &&
              e.Email.split("@")[1].split(".").length > 1 &&
              (n.domain = e.Email.split("@")[1]),
            e.utm_campaign && "" !== e.utm_campaign
              ? (r = e.utm_campaign)
              : (e.utm_source || e.utm_medium) &&
                e.utm_source + e.utm_medium !== "" &&
                (r = e.utm_medium + " - " + e.utm_source),
            e.marketable &&
              ("yes" === e.marketable
                ? ((n.unsubAnnouncement = !1),
                  (n.unsubNewsletter = !1),
                  (n.unsubProductivityTips = !1),
                  (n.unsubProductUpdates = !1),
                  (n.unsubPromotions = !1),
                  (n.unsubDoubleOptInReceived = "no"),
                  (n.unsubReason = r))
                : "no" === e.marketable &&
                  ((n.unsubAnnouncement = !0),
                  (n.unsubNewsletter = !0),
                  (n.unsubProductivityTips = !0),
                  (n.unsubProductUpdates = !0),
                  (n.unsubPromotions = !0),
                  (n.unsubDoubleOptInReceived = "no"),
                  (n.unsubReason = r))),
            n
          );
        },
        A = function (e) {
          if (
            ((0, s.f)("MktoFormPostSubmitMaps[formId]::".concat(E[e])), !E[e])
          )
            return (0, s.f)("form was not in the post submit map", "warn"), "";
          var t = E[e][document.location.pathname];
          return (
            t ||
            ((0, s.f)(
              "formId was in the post submit map but the url did not match any entries",
              "warn"
            ),
            "")
          );
        },
        L = function (e, t, o) {
          (0, s.f)("formSuccessDestination"),
            "function" === typeof clickupMktoOnSuccessCallback &&
            "#thankyou" === e
              ? ((0, s.f)(
                  "formSuccessDestination::clickupMktoOnSuccessCallback"
                ),
                clickupMktoOnSuccessCallback(t))
              : o ||
                ((0, s.f)(
                  "formSuccessDestination::redirect to thank you page" + e
                ),
                (window.location.href = e));
        },
        T = function (e) {
          (0, s.f)("findAndProcessMktoForms", "log", { formId: e.getId() });
          var t = e.getId().toString(),
            o = "mktoform_" + t;
          M[t] && (o = M[t]),
            (0, s.f)("findAndProcessMktoForms::formName", "log", {
              formName: o,
            });
          var n = I
              ? localStorage.getItem("cuUserLocation")
              : ((0, s.f)(
                  "findAndProcessMktoForms - local storage not supported",
                  "warn"
                ),
                !1),
            r = "";
          if (
            (n
              ? ((r = JSON.parse(n).value.country_name),
                (0, s.f)("findAndProcessMktoForms::countryName::", "log", {
                  countryName: r,
                }))
              : ((0, s.f)(
                  "findAndProcessMktoForms - user location not found",
                  "warn"
                ),
                (r = "")),
            "undefined" !== typeof MktoForms2)
          )
            if (
              ((0, s.f)("findAndProcessMktoForms::checking for forms"),
              MktoForms2.allForms().length > 0)
            ) {
              (0, s.f)("findAndProcessMktoForms::forms found", "log", {
                countForms: MktoForms2.allForms().length,
              });
              var i = document.getElementById("mktoForm_" + t);
              (0, s.f)("findAndProcessMktoForms::form element", "log", {
                formElement: i,
              }),
                (0, s.f)(
                  "findAndProcessMktoForms::setting country and utm fields",
                  "log",
                  { formId: t }
                ),
                e.setValues({
                  Country: r,
                  utm_Campaign__c: (0, h.Do)("utm_campaign")
                    ? (0, h.Do)("utm_campaign")
                    : "",
                  utm_Source__c: (0, h.Do)("utm_source")
                    ? (0, h.Do)("utm_source")
                    : "",
                  utm_Medium__c: (0, h.Do)("utm_medium")
                    ? (0, h.Do)("utm_medium")
                    : "",
                  UTM_Ad_Content__c: (0, h.Do)("utm_content")
                    ? (0, h.Do)("utm_content")
                    : "",
                  UTM_Keywords__c: (0, h.Do)("utm_term")
                    ? (0, h.Do)("utm_term")
                    : "",
                });
              var a = e.getFormElem()[0].getElementsByClassName("mktoFormRow");
              if (
                null != e.getValues().Country &&
                "" != e.getValues().Country
              ) {
                (0, s.f)(
                  "findAndProcessMktoForms::country is set ".concat(
                    e.getValues().Country
                  )
                );
                for (var d = 0; d < a.length; d++)
                  a[d].getElementsByTagName("label")[0] &&
                    a[d].getElementsByTagName("label")[0].getAttribute("for") &&
                    "country" ==
                      a[d]
                        .getElementsByTagName("label")[0]
                        .getAttribute("for")
                        .toLowerCase() &&
                    ((a[d].style.visibility = "hidden"),
                    (a[d].style.height = "0"),
                    (a[d].style.float = "right"));
              }
              null === i ||
                void 0 === i ||
                i.setAttribute("autocomplete", "on");
              [
                { id: "Email", autocomplete: "email" },
                { id: "Phone", autocomplete: "tel" },
                { id: "FirstName", autocomplete: "given-name" },
                { id: "LastName", autocomplete: "family-name" },
                { id: "Company", autocomplete: "organization" },
                { id: "Country", autocomplete: "country-name" },
                { id: "Title", autocomplete: "organization-title" },
                { id: "PostalCode", autocomplete: "postal-code" },
              ].forEach(function (e) {
                var t = e.id,
                  o = e.autocomplete,
                  n =
                    null === i || void 0 === i
                      ? void 0
                      : i.querySelector("#" + t);
                n && n.setAttribute("autocomplete", o);
              });
              var u = R(e.getValues());
              try {
                (0, s.f)(
                  "running segment segmentTrackForm call (form rendered)"
                ),
                  C("form rendered", u);
              } catch (m) {
                (0, s.f)("error running segmentTrackForm call", "error"),
                  (0, p.H)(m, "SEGMENT.ERROR");
              }
              e.onSubmit(function (e) {
                var t, n, r;
                (0,
                s.f)("findAndProcessMktoForms::onSubmit method called", "log", { formId: e.getId() });
                var i = e.getValues();
                null === (t = window.dataLayer) ||
                  void 0 === t ||
                  t.push({ event: "submit form " + o });
                var a = R(e.getValues());
                (a.form = "marketo form"),
                  (a.formLocation =
                    o.replaceAll(" ", "") + " at " + document.location.href),
                  (a.formSiteLocation =
                    null ===
                      (n =
                        null === c.d || void 0 === c.d
                          ? void 0
                          : c.d.getState()) ||
                    void 0 === n ||
                    null === (r = n.state) ||
                    void 0 === r
                      ? void 0
                      : r.clickedLocation.root);
                try {
                  (0, s.f)(
                    "findAndProcessMktoForms::onSubmit method::running segment track call (submit action)"
                  ),
                    C("submit action", a);
                } catch (l) {
                  (0, s.f)(
                    "findAndProcessMktoForms::onSubmit method::error running segmentTrackForm call",
                    "error"
                  ),
                    (0, p.H)(l, "SEGMENT.ERROR");
                }
                (0, s.f)(
                  "findAndProcessMktoForms::onSubmit method::getUserId::userId:: ".concat(
                    _(i.Email)
                  )
                ),
                  _(i.Email)
                    .then(function (e) {
                      (0,
                      s.f)("findAndProcessMktoForms::onSubmit method::getUserId - id retrieved, storing user id into cookie", "log", { id: e });
                      var t = new Date();
                      t.setTime(t.getTime() + 31536e6);
                      var o = "; expires=" + t.toUTCString();
                      return (
                        P &&
                          (document.cookie =
                            "_gtm_cuuid=" +
                            e +
                            o +
                            ";path=/;domain=.clickup.com"),
                        e
                      );
                    })
                    .then(function (e) {
                      var t, n;
                      (0,
                      s.f)("findAndProcessMktoForms::onSubmit method::getUserId - prepare analytics payloads");
                      var r = R(i),
                        a = R(i);
                      (a.form = "marketo form"),
                        (a.formLocation =
                          o.replaceAll(" ", "") +
                          " at " +
                          document.location.href),
                        (a.formSiteLocation =
                          null ===
                            (t =
                              null === c.d || void 0 === c.d
                                ? void 0
                                : c.d.getState()) ||
                          void 0 === t ||
                          null === (n = t.state) ||
                          void 0 === n
                            ? void 0
                            : n.clickedLocation.root),
                        (0, s.f)(
                          "findAndProcessMktoForms::onSubmit method::getUserId::trackPayload.formSiteLocation::".concat(
                            a.formSiteLocation.root
                          )
                        ),
                        (0, s.f)("identifyPayload::".concat(JSON.stringify(r))),
                        (0, s.f)("trackPayload::".concat(JSON.stringify(a)));
                      var l = e ? JSON.parse(e) : "no user id retrieved";
                      try {
                        (0, s.f)(
                          "findAndProcessMktoForms::onSubmit method::getUserId - running segment identify and track call (submit form)"
                        ),
                          (function (e, t) {
                            if (
                              ((0, s.f)(
                                "segmentIdentifyForm: ".concat(e),
                                "info",
                                { userDetails: t }
                              ),
                              t.form)
                            ) {
                              var o = (0, y.G)(!0),
                                n = (0, k.b)(),
                                r = S(
                                  {},
                                  o,
                                  t,
                                  n && {
                                    actual_url: n.location,
                                    actual_path: n.pathname,
                                  }
                                );
                              try {
                                var i;
                                (null === (i = window.OptanonActiveGroups) ||
                                void 0 === i
                                  ? void 0
                                  : i.includes("C0002")) &&
                                  window.analytics.identify(e, r);
                              } catch (a) {
                                (0, s.f)(
                                  "ERROR identifying user: ".concat(e),
                                  "error",
                                  a
                                );
                              }
                            }
                          })(l.toString(), a);
                      } catch (d) {
                        (0, s.f)(
                          "findAndProcessMktoForms::onSubmit method::getUserId - error running segmentIdentifyAndTrack call",
                          "error"
                        ),
                          (0, p.H)(d, "SEGMENT.ERROR");
                      }
                      return e;
                    });
              }),
                e.onSuccess(function (n, r) {
                  var i, a;
                  (0, s.f)("findAndProcessMktoForms::onSuccess method"),
                    (0, s.f)(
                      "findAndProcessMktoForms::onSuccess method::values::",
                      "log",
                      { values: n }
                    ),
                    (0, s.f)(
                      "findAndProcessMktoForms::onSuccess method::followUpUrl::",
                      "log",
                      { followUpUrl: r }
                    ),
                    e
                      .getFormElem()
                      .find("button.mktoButton")
                      .html(
                        '<div class="btn-spinner" style="display:flex!important;align-items:center!important;justify-content:center!important;"><div class="btn-spinner__bounce1" style="width:14px!important"></div><div class="btn-spinner__bounce2" style="width:14px!important"></div><div class="btn-spinner__bounce3" style="width:14px!important"></div></div>'
                      );
                  var d = R(n);
                  (d.form = "marketo form"),
                    (d.formLocation =
                      o.replaceAll(" ", "") + " at " + document.location.href),
                    (d.formSiteLocation =
                      null ===
                        (i =
                          null === c.d || void 0 === c.d
                            ? void 0
                            : c.d.getState()) ||
                      void 0 === i ||
                      null === (a = i.state) ||
                      void 0 === a
                        ? void 0
                        : a.clickedLocation.root),
                    (0, s.f)(
                      "findAndProcessMktoForms::onSuccess method::getUserId::trackPayload.formSiteLocation::".concat(
                        d.formSiteLocation.root
                      )
                    ),
                    (0, s.f)("trackPayload::".concat(JSON.stringify(d)));
                  try {
                    (0, s.f)(
                      "findAndProcessMktoForms::onSuccess method::running segment track call (submit success)"
                    ),
                      C("submit form", d);
                  } catch (f) {
                    (0, s.f)(
                      "findAndProcessMktoForms::onSuccess method::error running segmentTrackForm call",
                      "error"
                    ),
                      (0, p.H)(f, "SEGMENT.ERROR");
                  }
                  (0,
                  s.f)("findAndProcessMktoForms::onSuccess method - Determine redirect page for form success");
                  var u,
                    m = "" !== A(t) ? A(t) : r;
                  return (
                    e.getValues().redirectUrl &&
                      (r = m = e.getValues().redirectUrl),
                    (0, s.f)(
                      "findAndProcessMktoForms::onSuccess method - thankYouUrl::".concat(
                        m
                      )
                    ),
                    (0, s.f)(
                      "findAndProcessMktoForms::onSuccess method::followUpUrl::",
                      "log",
                      { followUpUrl: r }
                    ),
                    l.q8.CP_MKTO_FORM_ID_LIST.includes(t) &&
                    l.q8.CP_ENABLE &&
                    "undefined" !== typeof ChiliPiper &&
                    !window.cpSubmitted
                      ? ((0, s.f)("ChiliPiper::submit"),
                        ChiliPiper.submit(
                          l.q8.CP_TENANT_DOMAIN,
                          l.q8.CP_TENANT_ROUTER,
                          { map: !0, lead: n }
                        ),
                        (function (e, t, o) {
                          var n =
                              !(
                                arguments.length > 3 && void 0 !== arguments[3]
                              ) || arguments[3],
                            r = document.body,
                            i = new MutationObserver(function (r) {
                              var a = !0,
                                s = !1,
                                c = void 0;
                              try {
                                for (
                                  var l, d = r[Symbol.iterator]();
                                  !(a = (l = d.next()).done);
                                  a = !0
                                ) {
                                  var u = l.value,
                                    m = void 0;
                                  if ("delete" === t && "childList" === u.type)
                                    m = Array.from(u.removedNodes);
                                  else if (
                                    "create" === t &&
                                    "childList" === u.type
                                  )
                                    m = Array.from(u.addedNodes);
                                  else if (
                                    "update" === t &&
                                    "attributes" === u.type
                                  )
                                    return void (
                                      u.target.matches(e) &&
                                      (o(e), n && i.disconnect())
                                    );
                                  m &&
                                    m.forEach(function (t) {
                                      t.matches(e) &&
                                        (o(e), n && i.disconnect());
                                    });
                                }
                              } catch (f) {
                                (s = !0), (c = f);
                              } finally {
                                try {
                                  a || null == d.return || d.return();
                                } finally {
                                  if (s) throw c;
                                }
                              }
                            }),
                            a = {
                              childList: "update" !== t,
                              attributes: "update" === t,
                              subtree: !0,
                            };
                          i.observe(r, a);
                        })(
                          ".chilipiper-popup",
                          "delete",
                          function (e) {
                            (0, s.f)(
                              "Element with selector ".concat(
                                e,
                                " was removed."
                              )
                            ),
                              L(m, t, !1);
                          },
                          !0
                        ),
                        (window.cpSubmitted = !0),
                        null === (u = c.d.getState().actions) ||
                          void 0 === u ||
                          u.setIsEnterpriseSalesModalOpen(!1),
                        !1)
                      : l.q8.CP_MKTO_FORM_ID_LIST.includes(t) &&
                        l.q8.CP_ENABLE &&
                        "undefined" !== typeof ChiliPiper &&
                        window.cpSubmitted
                      ? ((0, s.f)(
                          "ChiliPiper scheduler active - do not call ChiliPiper::submit"
                        ),
                        !1)
                      : ((0, s.f)(
                          "ChiliPiper form not detected - proceed to redirect or callback"
                        ),
                        L(m, t, !1),
                        !1)
                  );
                });
            } else (0, s.f)("no forms found on page", "warn");
          else (0, s.f)("MktoForms2 is undefined", "warn");
          (0, s.f)("findAndProcessMktoForms end");
        },
        N = function (e) {
          var t = "mktoForm_".concat(e),
            o = document.querySelector("#".concat(t));
          if (
            ((0, s.f)("removeForm:id::".concat(t)),
            o &&
              (null === o || void 0 === o ? void 0 : o.getAttribute("id")) ===
                t)
          ) {
            var n = o.getElementsByTagName("style");
            if (n.length >= 1)
              for (var r = n[1]; r; ) {
                var i = r.nextSibling;
                o.removeChild(r), (r = i);
              }
          }
        },
        O = function (e, t, o, n, r, i) {
          if (((0, s.f)("renderForm:status::".concat(e)), "ready" === e)) {
            (0, s.f)("useMarketo:baseUrl::".concat(t)),
              (0, s.f)("useMarketo:munchkinId::".concat(o)),
              (0, s.f)("useMarketo:formId::".concat(n)),
              (0, s.f)("useMarketo:callback::".concat(i));
            (window.formsLoaded = window.formsLoaded || []),
              window.formsLoaded.includes(n.toString())
                ? (0, s.f)("form already loaded", "log", { formId: n })
                : (window.MktoForms2.loadForm(t, o, n, function (e) {
                    var t;
                    N(n),
                      (t = n) && m(t),
                      (function (e) {
                        var t = "mktoForm_".concat(e),
                          o = document.querySelector("#".concat(t));
                        (0, s.f)("transitionForm:id::".concat(t)),
                          o &&
                            (null === o || void 0 === o
                              ? void 0
                              : o.getAttribute("id")) === t &&
                            ((o.style.minHeight = "600px"),
                            (o.style.opacity = "1"),
                            (o.style.pointerEvents = "auto"));
                      })(n),
                      (function (e, t) {
                        if (e && t) {
                          var o = t.getFormElem(),
                            n = t.getValues(),
                            r = o.find('button[type="submit"]'),
                            i = t.allFieldsFilled();
                          setInterval(function () {
                            !i &&
                              "" === n.Country &&
                              null === n.Country &&
                              n.Country;
                          }, 2e3),
                            r &&
                              r.click(function () {
                                return f(e, t);
                              });
                        }
                      })(n, e),
                      i && i(e),
                      (window.formsLoaded = window.formsLoaded || []),
                      window.formsLoaded.splice(
                        window.formsLoaded.indexOf(n.toString()),
                        1
                      );
                  }),
                  window.formsLoaded.push(n.toString())),
              window.MktoForms2.whenReady(function (e) {
                if (
                  ((0, s.f)(
                    "renderForm:whenReady::formid of form passed in",
                    "log",
                    { formId: e.getId() }
                  ),
                  (0, s.f)(
                    "renderForm:whenReady::form id from renderForm",
                    "log",
                    { formId: n }
                  ),
                  n === e.getId())
                ) {
                  var t = window.MktoForms2.getForm(n);
                  if (
                    ((0, s.f)(
                      "renderForm:whenReady::form id from form obj",
                      "log",
                      { formId: t.getId() }
                    ),
                    (window.formsProcessed = window.formsProcessed || []),
                    window.formsProcessed.includes(t.getId().toString()))
                  )
                    (0, s.f)(
                      "renderForm:whenReady::form already processed",
                      "log",
                      { formId: t.getId() }
                    );
                  else {
                    if (
                      ((0, s.f)("renderForm:whenReady::", "log", {
                        formId: t.getId(),
                      }),
                      (function (e, t) {
                        if (e && t) {
                          (0, s.f)("marketoCountryField", "log", {
                            formId: t.getId(),
                            form: t,
                            id: e,
                          });
                          var o = (0, u.jr)();
                          t.setValues({ Country: o }), f(e, t);
                        }
                      })(n, t),
                      r)
                    ) {
                      (0, s.f)("renderForm:whenReady::redirectUrl::".concat(r)),
                        t.addHiddenFields({ redirectUrl: r });
                      var o = r,
                        i = r;
                      t.addHiddenFields({ returnURL: o }),
                        t.addHiddenFields({ retURL: i });
                    }
                    try {
                      return (
                        T(t), void window.formsProcessed.push(n.toString())
                      );
                    } catch (a) {
                      (0, p.H)(a, "MKTOFORMS2.ERROR.PROCESSING_MKTO_FORMS");
                    }
                  }
                } else (0, s.f)("renderForm:whenReady::form ids do not match - skipping form processing", "log", { formId: n, formObjId: e.getId() });
              });
          }
        },
        U = function (e) {
          var t = e.baseUrl,
            o = e.munchkinId,
            n = e.formId,
            i = e.redirectUrl,
            a = e.callback;
          (0, s.f)("useMarketo");
          var c = (0, d.Gq)("".concat(t, "/js/forms2/js/forms2.min.js"), {
              removeOnUnmount: !1,
            }),
            u = (0, d.Gq)(l.q8.CP_SCRIPT, { removeOnUnmount: !1 }),
            m = "idle";
          l.q8.CP_ENABLE
            ? ("ready" === c &&
                "ready" === u &&
                ((0, s.f)(
                  "marketoStatus::ready chiliPiperScriptEmbedStatus::ready"
                ),
                (m = "ready")),
              "ready" === c &&
                "error" === u &&
                ((0, s.f)(
                  "marketoStatus::ready chiliPiperScriptEmbedStatus::error"
                ),
                (m = c)),
              ("loading" !== c && "loading" !== u) || (m = "loading"),
              ("idle" !== c && "idle" !== u) || (m = "idle"),
              "error" === c && "error" === u && (m = "error"))
            : (m = c),
            (0, s.f)("useMarketo::".concat(m)),
            (0, r.useEffect)(function () {
              return (
                (0, s.f)("useMarketo:useEffect"),
                (0, s.f)("useMarketo:useEffect:marketoStatus:".concat(c)),
                (0, s.f)("useMarketo:useEffect:cpStatus:".concat(u)),
                (0, s.f)("useMarketo:useEffect:status:".concat(m)),
                window.addEventListener("pageshow", function (e) {
                  var t = performance.getEntriesByType("navigation")[0].type,
                    o = e.persisted;
                  ("back_forward" !== t && !o) ||
                  sessionStorage.getItem("reloaded")
                    ? sessionStorage.removeItem("reloaded")
                    : (sessionStorage.setItem("reloaded", "true"),
                      window.location.reload());
                }),
                window.MktoForms2 && "ready" === m && O(m, t, o, n, i, a),
                function () {
                  N(n);
                }
              );
            });
        },
        D = o(24928),
        q = o(39329),
        B = o(87579),
        x = o.n(B),
        j = o(81361),
        Z = o(11163);
      function G(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
        return n;
      }
      function V(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var o =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != o) {
              var n,
                r,
                i = [],
                a = !0,
                s = !1;
              try {
                for (
                  o = o.call(e);
                  !(a = (n = o.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (c) {
                (s = !0), (r = c);
              } finally {
                try {
                  a || null == o.return || o.return();
                } finally {
                  if (s) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return G(e, t);
            var o = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === o && e.constructor && (o = e.constructor.name);
            if ("Map" === o || "Set" === o) return Array.from(o);
            if (
              "Arguments" === o ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
            )
              return G(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var H = function (e) {
          var t = e.baseUrl,
            o = void 0 === t ? "https://pages.clickup.com" : t,
            a = e.munchkinId,
            c = void 0 === a ? "081-RDB-797" : a,
            l = e.formId,
            d = e.redirectUrl,
            u = e.downloadLink,
            m = e.showDownloadLink,
            f = e.otherClasses,
            p = V(r.default.useState(m || !1), 2),
            h = p[0],
            v = p[1];
          U({
            baseUrl: o,
            munchkinId: c,
            formId: l,
            redirectUrl: d,
            callback: function (e) {
              e.onSuccess(function () {
                return (
                  v(!0),
                  (0, s.f)("MarketoForm::onSuccess", "log", {
                    formId: e.getId(),
                  }),
                  !1
                );
              });
            },
          });
          var g = (0, i.Z)(x().wrapper, f);
          return (0, n.BX)("div", {
            className: (0, i.Z)(g, "marketo_form"),
            children: [
              (0, n.tZ)("form", {
                id: "mktoForm_".concat(l),
                className: (0, i.Z)(
                  "mktoForm mktoHasWidth mktoLayoutLeft",
                  h && u && "hidden"
                ),
              }),
              u &&
                (0, n.BX)("div", {
                  id: "thanksmessage",
                  className: (0, i.Z)("thanksmessage stack", !h && "hidden"),
                  children: [
                    (0, n.tZ)("h3", {
                      className: "h4",
                      children: "Thank You!",
                    }),
                    (0, n.BX)("p", {
                      children: [
                        "Your download should begin automatically. If you don't see it, click this ",
                        (0, n.tZ)(D.Z, {
                          href: h ? u : "#",
                          otherClasses: "",
                          download: !0,
                          children: "link",
                        }),
                        " to try again!",
                      ],
                    }),
                    (0, n.tZ)(q.ZP, {
                      href: h ? u : "#",
                      buttonSize: "sm",
                      children: "Download Now",
                    }),
                  ],
                }),
            ],
          });
        },
        z = (0, r.memo)(H),
        Y = function (e) {
          var t,
            o = e.children,
            s = void 0 === o ? (0, n.tZ)(H, { formId: 1006 }) : o,
            l = e.title,
            d = void 0 === l ? "Contact Sales" : l,
            u = e.isOpen,
            m = void 0 !== u && u,
            f = e.otherClasses,
            p = (0, i.Z)(x().wrapper, f),
            h = (0, c.d)(),
            v = h.state,
            g = v.isEnterpriseSalesModalOpen,
            y = v.IsAiDemoModalOpen,
            k = h.actions,
            b = k.setIsEnterpriseSalesModalOpen,
            S = k.setIsAiDemoModalOpen,
            w = m || g || y,
            _ = (0, Z.useRouter)(),
            C = (0, j.cC)("roi-calculator"),
            M =
              /^\/pricing/.test(
                null !== (t = null === _ || void 0 === _ ? void 0 : _.asPath) &&
                  void 0 !== t
                  ? t
                  : ""
              ) && "true" === _.query["roi-calculator"];
          return (0, n.tZ)("div", {
            className: p,
            "data-testid": "cu-contact-sales-modal",
            children: (0, n.tZ)(a.fC, {
              open: m || g || y,
              onOpenChange: function () {
                if (C) {
                  var e = window.location,
                    t = new URLSearchParams(e.search);
                  t.has("roi-calculator") && t.delete("roi-calculator"),
                    null === _ ||
                      void 0 === _ ||
                      _.replace(
                        ""
                          .concat(e.origin)
                          .concat(e.pathname)
                          .concat(
                            Array.from(t.keys()).length
                              ? "?" + t.toString()
                              : ""
                          )
                      );
                }
                y ? S(!w) : b(!w);
              },
              children: (0, n.tZ)(a.h_, {
                children: (0, n.tZ)(a.aV, {
                  className: x().modal,
                  children: (0, n.BX)(a.VY, {
                    className: x().modalContent,
                    children: [
                      (0, n.tZ)(a.x8, {
                        "aria-label": "Close",
                        className: x().modalCloseButton,
                      }),
                      r.default.isValidElement(s) &&
                        (y
                          ? (0, n.BX)(n.HY, {
                              children: [
                                d &&
                                  (0, n.BX)("div", {
                                    className: x().modalAIDemo,
                                    children: [
                                      (0, n.BX)("p", {
                                        className: x().modalTitle,
                                        children: [
                                          "Talk to our brainy team ",
                                          (0, n.tZ)("br", {}),
                                          " (yep, pun intended)",
                                        ],
                                      }),
                                      (0, n.BX)("p", {
                                        className: x().modalSubTitle,
                                        children: [
                                          (0, n.tZ)("b", {
                                            className: x().modalSubTitleBold,
                                            children:
                                              "Request your 20-min tailored demo",
                                          }),
                                          " ",
                                          (0, n.tZ)("br", {}),
                                          (0, n.tZ)("span", {
                                            className: x().modalSubTitleSupport,
                                            children: "Looking for support?",
                                          }),
                                          " ",
                                          (0, n.tZ)(D.Z, {
                                            href: "https://help.clickup.com/hc/en-us",
                                            targetBlank: !0,
                                            sectionModelName:
                                              "CuContactSalesModal",
                                            buttonClicked:
                                              "Contact support instead",
                                            clickedType: "ai demo modal link",
                                            otherClasses: x().modalSubTitleLink,
                                            children: "Contact support instead",
                                          }),
                                          ".",
                                        ],
                                      }),
                                    ],
                                  }),
                                (0, n.tZ)(H, { formId: 1176 }),
                              ],
                            })
                          : (0, n.BX)(n.HY, {
                              children: [
                                d &&
                                  (0, n.tZ)("p", {
                                    className: x().modalTitle,
                                    children: M && C ? "Get a quote" : d,
                                  }),
                                s,
                              ],
                            })),
                    ],
                  }),
                }),
              }),
            }),
          });
        };
    },
    87579: function (e) {
      e.exports = {
        modal: "CuContactSalesModal_modal__6ZMJN",
        modalContent: "CuContactSalesModal_modalContent__SGGqd",
        fadeIn: "CuContactSalesModal_fadeIn__Icg8x",
        modalTitle: "CuContactSalesModal_modalTitle___p2Yh",
        modalSubTitle: "CuContactSalesModal_modalSubTitle__gJk_3",
        modalSubTitleBold: "CuContactSalesModal_modalSubTitleBold__zuhc1",
        modalSubTitleSupport: "CuContactSalesModal_modalSubTitleSupport__8ywPz",
        modalSubTitleLink: "CuContactSalesModal_modalSubTitleLink__HVgde",
        modalAIDemo: "CuContactSalesModal_modalAIDemo__Luh_R",
        modalCloseButton: "CuContactSalesModal_modalCloseButton__b9Kee",
      };
    },
  },
]);
