(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [758],
  {
    49363: function (n, u, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/aip/[pluginId]/oauth/callback",
        function () {
          return c(51261);
        },
      ]);
    },
    51261: function (n, u, c) {
      "use strict";
      c.r(u),
        c.d(u, {
          __N_SSP: function () {
            return p;
          },
          default: function () {
            return f;
          },
        });
      var t = c(21722),
        e = c(39324),
        o = c(39889),
        i = c(35250),
        s = c(68555),
        r = c(70079),
        a = c(24274),
        l = c(32787),
        p = !0;
      function f(n) {
        return (0, i.jsx)(_, (0, e._)({}, n));
      }
      function _(n) {
        var u = n.pluginId,
          c = n.code,
          e = (0, s.useRouter)(),
          p = (0, l.kP)().session;
        return (
          (0, r.useEffect)(
            function () {
              function n() {
                return (n = (0, t._)(function () {
                  var n;
                  return (0, o.Jh)(this, function (t) {
                    switch (t.label) {
                      case 0:
                        (n = ""
                          .concat(window.location.origin, "/aip/")
                          .concat(u, "/oauth/callback")),
                          (t.label = 1);
                      case 1:
                        return (
                          t.trys.push([1, 3, , 4]),
                          [
                            4,
                            a.ZP.pluginOauthCallback(
                              u,
                              c,
                              n,
                              null == p ? void 0 : p.accessToken
                            ),
                          ]
                        );
                      case 2:
                        return (
                          t.sent(),
                          e.push(
                            "/?model=gpt-4-plugins&loginAip=".concat(
                              u,
                              "&loginSuccess=true"
                            )
                          ),
                          [3, 4]
                        );
                      case 3:
                        return (
                          console.error(t.sent()),
                          e.push(
                            "/?model=gpt-4-plugins&loginAip=".concat(
                              u,
                              "&loginSuccess=false"
                            )
                          ),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                  });
                })).apply(this, arguments);
              }
              (null == p ? void 0 : p.accessToken) &&
                (function () {
                  n.apply(this, arguments);
                })();
            },
            [u, c, e, null == p ? void 0 : p.accessToken]
          ),
          (0, i.jsx)("div", {})
        );
      }
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return n((n.s = 49363));
    }),
      (_N_E = n.O());
  },
]);