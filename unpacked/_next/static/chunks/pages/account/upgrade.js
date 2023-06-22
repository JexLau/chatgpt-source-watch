(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [489],
  {
    44876: function (e, n, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account/upgrade",
        function () {
          return r(22788);
        },
      ]);
    },
    22788: function (e, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          __N_SSP: function () {
            return f;
          },
          default: function () {
            return h;
          },
        });
      var t = r(39324),
        a = r(35250),
        s = r(68555),
        i = r(70079),
        o = r(48432),
        l = r(97688),
        c = r(68172),
        u = r(64135),
        d = r(87316),
        p = r(82841),
        m = r(36218),
        f = !0;
      function h(e) {
        return (0, a.jsx)(x, (0, t._)({}, e));
      }
      function x(e) {
        var n = e.user,
          r = e.isUserInCanPayGroup,
          t = e.serviceStatus,
          f = e.userCountry,
          h = e.cohort,
          x = (0, s.useRouter)(),
          v = (0, u.nR)(),
          g = (0, d.g)(function (e) {
            return e.updateFlagValue;
          });
        (0, i.useEffect)(
          function () {
            void 0 !== r && g("isUserInCanPayGroup", r);
          },
          [g, r]
        ),
          (0, i.useEffect)(
            function () {
              (null == t ? void 0 : t.type) &&
                void 0 !== v &&
                !v &&
                l.m.warning(t.message, { hasCloseButton: !0, duration: 5 });
            },
            [v, null == t ? void 0 : t.message, null == t ? void 0 : t.type]
          );
        var y = (0, i.useMemo)(function () {
            return { app: m.VY, origin: "chat" };
          }, []),
          w = {};
        h && (w.email_cohort = h), (0, c.Z)("ChatGPT", n, y, w);
        var j = (0, i.useCallback)(
          function () {
            x.push("/");
          },
          [x]
        );
        return (0, a.jsx)(p.Af.Provider, {
          value: y,
          children: (0, a.jsx)(b, {
            cohort: h,
            userCountry: f,
            children: (0, a.jsx)(o.Z, { isOpen: !0, onClose: j }),
          }),
        });
      }
      var b = function (e) {
        var n = e.children,
          r = e.cohort,
          t = e.userCountry,
          a = (0, p.WS)();
        return (
          (0, i.useEffect)(
            function () {
              r &&
                a(m.s6.accountUpgradeFullpageLoaded, {
                  content: "Email Cohort: ".concat(r),
                  tags: ["actual_location:".concat(t)],
                });
            },
            [a, r, t]
          ),
          n
        );
      };
    },
    57924: function (e, n, r) {
      "use strict";
      r.d(n, {
        u: function () {
          return c;
        },
      });
      var t = r(4337),
        a = r(35250),
        s = r(15838),
        i = r(19841);
      r(70079);
      var o = r(34303);
      function l() {
        var e = (0, t._)([
          "relative top-[-3px] h-2 w-2 rotate-45 transform border-r border-b border-black/10 bg-black shadow-xs",
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      var c = function (e) {
          var n = e.label,
            r = e.side,
            t = e.sideOffset,
            o = e.withArrow,
            l = e.wide,
            c = e.interactive,
            d = e.usePortal,
            p = e.className,
            m = e.children,
            f = e.delayDuration,
            h = e.closeOnOutsideClick,
            x = (0, a.jsxs)(s.VY, {
              onPointerDownOutside:
                void 0 === h || h
                  ? void 0
                  : function (e) {
                      return e.preventDefault();
                    },
              side: void 0 === r ? "bottom" : r,
              sideOffset: void 0 === t ? 14 : t,
              className: (0, i.Z)(
                "relative rounded-lg border border-black/10 bg-black p-1 shadow-xs transition-opacity",
                void 0 !== l && l ? "max-w-sm" : "max-w-xs"
              ),
              children: [
                (0, a.jsx)("span", {
                  className:
                    "flex items-center whitespace-pre-wrap px-2 py-1 text-center text-sm font-medium normal-case text-white",
                  children: n,
                }),
                (void 0 === o || o) &&
                  (0, a.jsx)(s.Eh, {
                    asChild: !0,
                    children: (0, a.jsx)(u, {}),
                  }),
              ],
            });
          return (0, a.jsxs)(s.fC, {
            delayDuration: void 0 === f ? 300 : f,
            disableHoverableContent: !(void 0 !== c && c),
            children: [
              (0, a.jsx)(s.xz, {
                asChild: !0,
                children: (0, a.jsx)("span", { className: p, children: m }),
              }),
              void 0 === d || d ? (0, a.jsx)(s.h_, { children: x }) : x,
            ],
          });
        },
        u = o.Z.div(l());
    },
    48432: function (e, n, r) {
      "use strict";
      r.d(n, {
        Z: function () {
          return w;
        },
      });
      var t = r(21722),
        a = r(22830),
        s = r(39889),
        i = r(35250),
        o = r(16578),
        l = r.n(o),
        c = r(68555),
        u = r(70079),
        d = r(1454),
        p = r(82841),
        m = r(36218),
        f = r(24274),
        h = r(64135),
        x = r(97688),
        b = r(44925),
        v = r(74853),
        g = r(99652),
        y = r(1220);
      function w(e) {
        var n = e.isOpen,
          r = e.onClose,
          o = (0, h.hz)(),
          w = (0, p.WS)(),
          j = (0, a._)((0, u.useState)(!1), 2),
          C = j[0],
          _ = j[1],
          N = (0, c.useRouter)(),
          k = (0, u.useCallback)(
            function () {
              w(m.s6.closeAccountPaymentModal), r();
            },
            [r, w]
          ),
          P = (0, u.useCallback)(
            (0, t._)(function () {
              var e;
              return (0, s.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    _(!0), w(m.s6.clickAccountPaymentCheckout), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]), [4, f.ZP.getCheckoutLink()]
                    );
                  case 2:
                    return (e = n.sent()), N.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
                      x.m.warning(
                        "The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return _(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [N, w, _]
          ),
          S = (0, u.useCallback)(
            (0, t._)(function () {
              var e;
              return (0, s.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    _(!0), w(m.s6.clickAccountCustomerPortal), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]),
                      [4, f.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = n.sent()), N.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
                      x.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return _(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [N, w, _]
          ),
          A = (0, u.useCallback)(
            function () {
              w(m.s6.clickAccountPaymentGetHelp);
            },
            [w]
          ),
          T = (0, h.YD)(),
          Z = o.has("disable_upgrade_ui");
        return (0, i.jsxs)(v.x, {
          isOpen: n,
          onClose: r,
          children: [
            (0, i.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
              children: [
                (0, i.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your plan",
                }),
                (0, i.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: k,
                  children: (0, i.jsx)(d.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "grid sm:grid-cols-2",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "relative order-2 col-span-1 border-r-0 border-t dark:border-gray-700 sm:order-1 sm:border-r sm:border-t-0",
                  children: (0, i.jsx)(g.Oi, {
                    rowElements: [
                      (0, i.jsx)(
                        g.Cu,
                        { text: "Free plan" },
                        "row-free-plan-name"
                      ),
                      (0, i.jsx)(
                        g.hi,
                        {
                          variant: "disabled",
                          disabled: !0,
                          text: y.S.free.callToAction.active,
                        },
                        "row-free-plan-button"
                      ),
                      (0, i.jsx)(
                        g.G,
                        { variant: "secondary", text: y.S.free.demandAccess },
                        "row-free-plan-demand"
                      ),
                      (0, i.jsx)(
                        g.G,
                        { variant: "secondary", text: y.S.free.responseSpeed },
                        "row-free-plan-speed"
                      ),
                      (0, i.jsx)(
                        g.G,
                        {
                          className: "sm:pb-2",
                          variant: "secondary",
                          text: y.S.free.modelFeatures,
                        },
                        "row-free-plan-updates"
                      ),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "relative order-1 col-span-1 sm:order-2",
                  children: (0, i.jsx)(g.Oi, {
                    rowElements: [
                      (0, i.jsx)(
                        g.Cu,
                        {
                          text: y.S.plus.name,
                          children: (0, i.jsx)("span", {
                            className: "font-semibold text-gray-500",
                            children: y.S.plus.costInDollars,
                          }),
                        },
                        "row-plus-plan-title"
                      ),
                      (0, i.jsx)(
                        g.hi,
                        {
                          variant: "primary",
                          disabledText: Z
                            ? "Due to high demand, we've temporarily paused upgrades."
                            : "",
                          disabled: C,
                          isLoading: C,
                          onClick: P,
                          text: y.S.plus.callToAction.inactivePayment,
                        },
                        "row-plus-plan-button"
                      ),
                      (0, i.jsx)(
                        g.G,
                        { variant: "primary", text: y.S.plus.demandAccess },
                        "row-plus-plan-demand"
                      ),
                      (0, i.jsx)(
                        g.G,
                        { variant: "primary", text: y.S.plus.responseSpeed },
                        "row-plus-plan-speed"
                      ),
                      (0, i.jsx)(
                        g.G,
                        {
                          className: "sm:pb-2",
                          variant: "primary",
                          text: y.S.plus.modelFeatures,
                        },
                        "row-plus-plan-updates"
                      ),
                      T &&
                        (0, i.jsx)(
                          g.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: C,
                            text: y.S.manageSubscriptionWeb.callToAction,
                            onClick: S,
                          },
                          "row-plus-plan-manage"
                        ),
                      (0, i.jsx)(
                        l(),
                        {
                          target: "_blank",
                          href: b.ti,
                          passHref: !0,
                          children: (0, i.jsx)(
                            g.nR,
                            {
                              className: "sm:pb-1",
                              isLoading: !1,
                              text: y.S.getHelp.callToAction,
                              onClick: A,
                            },
                            "row-plus-plan-help"
                          ),
                        },
                        "row-plus-plan-help-link"
                      ),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    74853: function (e, n, r) {
      "use strict";
      r.d(n, {
        x: function () {
          return l;
        },
      });
      var t = r(4337),
        a = r(35250),
        s = r(34303),
        i = r(48727);
      function o() {
        var e = (0, t._)([
          "flex grow justify-center bg-white dark:bg-gray-900 rounded-md flex-col items-start overflow-hidden border shadow-md dark:border-gray-700",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      var l = function (e) {
          var n = e.children,
            r = e.isOpen,
            t = e.onClose;
          return (0, a.jsx)(i.Z, {
            size: "fullscreen",
            isOpen: r,
            onClose: t,
            type: "success",
            className:
              "!bg-transparent !shadow-none md:w-[672px] lg:w-[896px] xl:w-[1024px]",
            children: (0, a.jsx)("div", {
              className: "flex h-full flex-col items-center justify-start",
              children: (0, a.jsx)("div", {
                className: "relative",
                children: (0, a.jsx)(c, { children: n }),
              }),
            }),
          });
        },
        c = s.Z.div(o());
    },
    99652: function (e, n, r) {
      "use strict";
      r.d(n, {
        Cu: function () {
          return x;
        },
        G: function () {
          return g;
        },
        Oi: function () {
          return h;
        },
        hi: function () {
          return v;
        },
        nR: function () {
          return y;
        },
      });
      var t = r(4337),
        a = r(35250),
        s = r(19841),
        i = r(70079),
        o = r(1454),
        l = r(34303),
        c = r(66958),
        u = r(38317),
        d = r(57924);
      function p() {
        var e = (0, t._)([
          "p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = (0, t._)([
          "gap-2 flex flex-row justify-start items-center text-sm",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, t._)([
          "text-xl font-semibold justify-between items-center flex",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      var h = function (e) {
          var n = e.rowElements;
          return (0, a.jsx)(w, {
            children: n.map(function (e) {
              return e;
            }),
          });
        },
        x = function (e) {
          var n = e.className,
            r = e.text,
            t = e.children;
          return (0, a.jsxs)(C, {
            className: n,
            children: [(0, a.jsx)("span", { children: r }), t],
          });
        },
        b = {
          "primary-disabled":
            "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
          primary: "border-none py-3 font-semibold",
          disabled:
            "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100",
        },
        v = (0, i.forwardRef)(function (e, n) {
          var r = e.isLoading,
            t = void 0 !== r && r,
            i = e.disabled,
            l = e.onClick,
            p = e.variant,
            m = void 0 === p ? "primary" : p,
            f = e.text,
            h = e.disabledText;
          return h
            ? (0, a.jsx)("div", {
                className: "relative",
                children: (0, a.jsx)(d.u, {
                  side: "bottom",
                  sideOffset: 20,
                  label: h,
                  usePortal: !1,
                  children: (0, a.jsxs)(c.z, {
                    ref: n,
                    as: "button",
                    color: "disabled",
                    className: (0, s.Z)("w-full", b[m]),
                    children: [
                      f,
                      t &&
                        (0, a.jsx)(u.ZP, {
                          className: "animate-spin",
                          icon: o.dAq,
                        }),
                    ],
                  }),
                }),
              })
            : (0, a.jsxs)(c.z, {
                disabled: void 0 !== i && i,
                onClick: l,
                ref: n,
                as: "button",
                className: (0, s.Z)(b[m]),
                children: [
                  (0, a.jsx)("span", {
                    className: (0, s.Z)("inline-block", {
                      "text-gray-700": "primary-disabled" === m,
                      "text-white": "primary" === m,
                    }),
                    children: f,
                  }),
                  t &&
                    (0, a.jsx)(u.ZP, {
                      className: "animate-spin",
                      icon: o.dAq,
                    }),
                ],
              });
        });
      v.displayName = "PricingPlanButton";
      var g = function (e) {
          var n = e.variant,
            r = void 0 === n ? "primary" : n,
            t = e.className,
            i = e.text;
          return (0, a.jsxs)(j, {
            className: t,
            children: [
              (0, a.jsx)(u.ZP, {
                icon: o._rq,
                className: (0, s.Z)("h-5 w-5", {
                  "text-green-700": "primary" == r,
                  "text-gray-400": "secondary" == r,
                }),
              }),
              (0, a.jsx)("span", { children: i }),
            ],
          });
        },
        y = function (e) {
          var n = e.className,
            r = e.text,
            t = e.isLoading,
            s = e.onClick;
          return (0, a.jsx)(j, {
            className: n,
            children: (0, a.jsxs)("button", {
              onClick: s,
              className: "flex flex-row items-center space-x-1 underline",
              children: [
                (0, a.jsx)("span", { children: r }),
                t &&
                  (0, a.jsx)(u.ZP, { className: "animate-spin", icon: o.dAq }),
              ],
            }),
          });
        },
        w = l.Z.div(p()),
        j = l.Z.div(m()),
        C = l.Z.div(f());
    },
    44925: function (e, n, r) {
      "use strict";
      r.d(n, {
        _4: function () {
          return s;
        },
        m1: function () {
          return a;
        },
        ti: function () {
          return t;
        },
      });
      var t = "https://help.openai.com/en/collections/3943089-billing",
        a =
          "https://help.openai.com/en/articles/7905690-how-do-i-cancel-my-apple-subscription-for-chatgpt-plus-in-the-chatgpt-ios-app",
        s = {
          WEBAPP: "chatgpt_web",
          MOBILE_IOS: "chatgpt_mobile_ios",
          GRANTED: "chatgpt_gratis_recepient",
          NOT_PURCHASED: "chatgpt_not_purchased",
        };
    },
    1220: function (e, n, r) {
      "use strict";
      r.d(n, {
        S: function () {
          return t;
        },
      });
      var t = {
        free: {
          name: "Free plan",
          callToAction: {
            active: "Your current plan",
            inactive: "Your current plan",
          },
          costInDollars: "",
          demandAccess: "Available when demand is low",
          responseSpeed: "Standard response speed",
          modelFeatures: "Regular model updates",
        },
        plus: {
          name: "ChatGPT Plus",
          callToAction: {
            active: "Your current plan",
            inactive: "I'm interested",
            inactivePayment: "Upgrade plan",
          },
          costInDollars: "USD $20/mo",
          demandAccess: "Available even when demand is high",
          responseSpeed: "Faster response speed",
          modelFeatures: "Priority access to new features",
        },
        manageSubscriptionWeb: { callToAction: "Manage my subscription" },
        manageSubscriptionIos: {
          callToAction: "Manage my subscription in the ChatGPT iOS app",
        },
        getHelp: { callToAction: "I need help with a billing issue" },
        business: { callToAction: "Buy for my team" },
      };
    },
    87316: function (e, n, r) {
      "use strict";
      r.d(n, {
        g: function () {
          return l;
        },
      });
      var t = r(96237),
        a = r(39324),
        s = r(71209),
        i = r(81292),
        o = {
          flags: {
            isUserInCanPayGroup: !1,
            failwhaleBypassEnabled: !1,
            sharingEnabled: !1,
            messageRedesign: !1,
          },
        },
        l = (0, i.ZP)()(function (e, n) {
          return (0, s._)((0, a._)({}, o), {
            updateFlagValue: function (r, i) {
              var o = n().flags;
              e({ flags: (0, s._)((0, a._)({}, o), (0, t._)({}, r, i)) });
            },
          });
        });
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 44876));
    }),
      (_N_E = e.O());
  },
]);