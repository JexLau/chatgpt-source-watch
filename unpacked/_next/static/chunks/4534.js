(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4534],
  {
    56911: function (e) {
      e.exports = function (e, t, r, n) {
        for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
          var l = e[i];
          t(n, l, r(l), e);
        }
        return n;
      };
    },
    34598: function (e, t, r) {
      var n = r(85036);
      e.exports = function (e, t) {
        return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1;
      };
    },
    60510: function (e) {
      e.exports = function (e, t, r) {
        for (var n = -1, i = null == e ? 0 : e.length; ++n < i; )
          if (r(t, e[n])) return !0;
        return !1;
      };
    },
    47651: function (e, t, r) {
      var n = r(25898);
      e.exports = function (e, t, r, i) {
        return (
          n(e, function (e, n, o) {
            t(i, e, r(e), o);
          }),
          i
        );
      };
    },
    25898: function (e, t, r) {
      var n = r(89399),
        i = r(36977)(n);
      e.exports = i;
    },
    83663: function (e) {
      e.exports = function (e, t, r, n) {
        for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
          if (t(e[o], o, e)) return o;
        return -1;
      };
    },
    44140: function (e, t, r) {
      var n = r(96581),
        i = r(49912);
      e.exports = function e(t, r, o, l, a) {
        var s = -1,
          c = t.length;
        for (o || (o = i), a || (a = []); ++s < c; ) {
          var u = t[s];
          r > 0 && o(u)
            ? r > 1
              ? e(u, r - 1, o, l, a)
              : n(a, u)
            : l || (a[a.length] = u);
        }
        return a;
      };
    },
    89399: function (e, t, r) {
      var n = r(51431),
        i = r(58834);
      e.exports = function (e, t) {
        return e && n(e, t, i);
      };
    },
    26486: function (e) {
      var t = Object.prototype.hasOwnProperty;
      e.exports = function (e, r) {
        return null != e && t.call(e, r);
      };
    },
    85036: function (e, t, r) {
      var n = r(83663),
        i = r(18826),
        o = r(31154);
      e.exports = function (e, t, r) {
        return t == t ? o(e, t, r) : n(e, i, r);
      };
    },
    18826: function (e) {
      e.exports = function (e) {
        return e != e;
      };
    },
    78078: function (e) {
      var t = Math.ceil,
        r = Math.max;
      e.exports = function (e, n, i, o) {
        for (var l = -1, a = r(t((n - e) / (i || 1)), 0), s = Array(a); a--; )
          (s[o ? a : ++l] = e), (e += i);
        return s;
      };
    },
    18296: function (e, t, r) {
      var n = r(25561),
        i = r(34598),
        o = r(60510),
        l = r(8529),
        a = r(33295),
        s = r(33005);
      e.exports = function (e, t, r) {
        var c = -1,
          u = i,
          d = e.length,
          h = !0,
          f = [],
          p = f;
        if (r) (h = !1), (u = o);
        else if (d >= 200) {
          var g = t ? null : a(e);
          if (g) return s(g);
          (h = !1), (u = l), (p = new n());
        } else p = t ? [] : f;
        e: for (; ++c < d; ) {
          var m = e[c],
            v = t ? t(m) : m;
          if (((m = r || 0 !== m ? m : 0), h && v == v)) {
            for (var w = p.length; w--; ) if (p[w] === v) continue e;
            t && p.push(v), f.push(m);
          } else u(p, v, r) || (p !== f && p.push(v), f.push(m));
        }
        return f;
      };
    },
    48034: function (e, t, r) {
      var n = r(56911),
        i = r(47651),
        o = r(61757),
        l = r(2428);
      e.exports = function (e, t) {
        return function (r, a) {
          var s = l(r) ? n : i,
            c = t ? t() : {};
          return s(r, e, o(a, 2), c);
        };
      };
    },
    36977: function (e, t, r) {
      var n = r(71701);
      e.exports = function (e, t) {
        return function (r, i) {
          if (null == r) return r;
          if (!n(r)) return e(r, i);
          for (
            var o = r.length, l = t ? o : -1, a = Object(r);
            (t ? l-- : ++l < o) && !1 !== i(a[l], l, a);
          );
          return r;
        };
      };
    },
    18364: function (e, t, r) {
      var n = r(78078),
        i = r(57209),
        o = r(73640);
      e.exports = function (e) {
        return function (t, r, l) {
          return (
            l && "number" != typeof l && i(t, r, l) && (r = l = void 0),
            (t = o(t)),
            void 0 === r ? ((r = t), (t = 0)) : (r = o(r)),
            (l = void 0 === l ? (t < r ? 1 : -1) : o(l)),
            n(t, r, l, e)
          );
        };
      };
    },
    33295: function (e, t, r) {
      var n = r(353),
        i = r(91530),
        o = r(33005),
        l =
          n && 1 / o(new n([, -0]))[1] == 1 / 0
            ? function (e) {
                return new n(e);
              }
            : i;
      e.exports = l;
    },
    49912: function (e, t, r) {
      var n = r(66293),
        i = r(43735),
        o = r(2428),
        l = n ? n.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return o(e) || i(e) || !!(l && e && e[l]);
      };
    },
    31154: function (e) {
      e.exports = function (e, t, r) {
        for (var n = r - 1, i = e.length; ++n < i; ) if (e[n] === t) return n;
        return -1;
      };
    },
    90757: function (e, t, r) {
      var n = r(44140);
      e.exports = function (e) {
        return (null == e ? 0 : e.length) ? n(e, 1) : [];
      };
    },
    14015: function (e, t, r) {
      var n = r(80897),
        i = r(48034),
        o = Object.prototype.hasOwnProperty,
        l = i(function (e, t, r) {
          o.call(e, r) ? e[r].push(t) : n(e, r, [t]);
        });
      e.exports = l;
    },
    13284: function (e, t, r) {
      var n = r(26486),
        i = r(60706);
      e.exports = function (e, t) {
        return null != e && i(e, t, n);
      };
    },
    56707: function (e, t, r) {
      var n = r(18364)();
      e.exports = n;
    },
    23763: function (e, t, r) {
      var n = r(89678),
        i = r(6627);
      e.exports = function (e, t, r) {
        var o = !0,
          l = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return (
          i(r) &&
            ((o = "leading" in r ? !!r.leading : o),
            (l = "trailing" in r ? !!r.trailing : l)),
          n(e, t, { leading: o, maxWait: t, trailing: l })
        );
      };
    },
    73640: function (e, t, r) {
      var n = r(67948),
        i = 1 / 0;
      e.exports = function (e) {
        return e
          ? (e = n(e)) === i || e === -i
            ? (e < 0 ? -1 : 1) * 17976931348623157e292
            : e == e
              ? e
              : 0
          : 0 === e
            ? e
            : 0;
      };
    },
    55009: function (e, t, r) {
      var n = r(18296);
      e.exports = function (e) {
        return e && e.length ? n(e) : [];
      };
    },
    27025: function () {},
    4658: function (e, t, r) {
      var n, i;
      (n = [t, r(32811)]),
        void 0 !==
          (i = function (e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = t && t.__esModule ? t : { default: t };
            e.default = r.default;
          }.apply(t, n)) && (e.exports = i);
    },
    32811: function (e, t, r) {
      var n, i;
      (n = [t, r(70079), r(39519)]),
        void 0 !==
          (i = function (e, t, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.setHasSupportToCaptureOption = function (e) {
                s = e;
              });
            var n = o(t),
              i = o(r);
            function o(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var l =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (e[n] = r[n]);
                  }
                  return e;
                },
              a = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              s = !1;
            try {
              addEventListener(
                "test",
                null,
                Object.defineProperty({}, "capture", {
                  get: function () {
                    s = !0;
                  },
                })
              );
            } catch (e) {}
            function c() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { capture: !0 };
              return s ? e : e.capture;
            }
            function u(e) {
              if ("touches" in e) {
                var t = e.touches[0];
                return { x: t.pageX, y: t.pageY };
              }
              return { x: e.screenX, y: e.screenY };
            }
            var d = (function (e) {
              function t() {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw TypeError("Cannot call a class as a function");
                })(this, t);
                for (
                  var e, r = arguments.length, n = Array(r), i = 0;
                  i < r;
                  i++
                )
                  n[i] = arguments[i];
                var o = (function (e, t) {
                  if (!e)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t && ("object" == typeof t || "function" == typeof t)
                    ? t
                    : e;
                })(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(n)
                  )
                );
                return (
                  (o._handleSwipeStart = o._handleSwipeStart.bind(o)),
                  (o._handleSwipeMove = o._handleSwipeMove.bind(o)),
                  (o._handleSwipeEnd = o._handleSwipeEnd.bind(o)),
                  (o._onMouseDown = o._onMouseDown.bind(o)),
                  (o._onMouseMove = o._onMouseMove.bind(o)),
                  (o._onMouseUp = o._onMouseUp.bind(o)),
                  (o._setSwiperRef = o._setSwiperRef.bind(o)),
                  o
                );
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, e),
                a(t, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.swiper &&
                        this.swiper.addEventListener(
                          "touchmove",
                          this._handleSwipeMove,
                          c({ capture: !0, passive: !1 })
                        );
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.swiper &&
                        this.swiper.removeEventListener(
                          "touchmove",
                          this._handleSwipeMove,
                          c({ capture: !0, passive: !1 })
                        );
                    },
                  },
                  {
                    key: "_onMouseDown",
                    value: function (e) {
                      this.props.allowMouseEvents &&
                        ((this.mouseDown = !0),
                        document.addEventListener("mouseup", this._onMouseUp),
                        document.addEventListener(
                          "mousemove",
                          this._onMouseMove
                        ),
                        this._handleSwipeStart(e));
                    },
                  },
                  {
                    key: "_onMouseMove",
                    value: function (e) {
                      this.mouseDown && this._handleSwipeMove(e);
                    },
                  },
                  {
                    key: "_onMouseUp",
                    value: function (e) {
                      (this.mouseDown = !1),
                        document.removeEventListener(
                          "mouseup",
                          this._onMouseUp
                        ),
                        document.removeEventListener(
                          "mousemove",
                          this._onMouseMove
                        ),
                        this._handleSwipeEnd(e);
                    },
                  },
                  {
                    key: "_handleSwipeStart",
                    value: function (e) {
                      var t = u(e),
                        r = t.x,
                        n = t.y;
                      (this.moveStart = { x: r, y: n }),
                        this.props.onSwipeStart(e);
                    },
                  },
                  {
                    key: "_handleSwipeMove",
                    value: function (e) {
                      if (this.moveStart) {
                        var t = u(e),
                          r = t.x,
                          n = t.y,
                          i = r - this.moveStart.x,
                          o = n - this.moveStart.y;
                        (this.moving = !0),
                          this.props.onSwipeMove({ x: i, y: o }, e) &&
                            e.cancelable &&
                            e.preventDefault(),
                          (this.movePosition = { deltaX: i, deltaY: o });
                      }
                    },
                  },
                  {
                    key: "_handleSwipeEnd",
                    value: function (e) {
                      this.props.onSwipeEnd(e);
                      var t = this.props.tolerance;
                      this.moving &&
                        this.movePosition &&
                        (this.movePosition.deltaX < -t
                          ? this.props.onSwipeLeft(1, e)
                          : this.movePosition.deltaX > t &&
                            this.props.onSwipeRight(1, e),
                        this.movePosition.deltaY < -t
                          ? this.props.onSwipeUp(1, e)
                          : this.movePosition.deltaY > t &&
                            this.props.onSwipeDown(1, e)),
                        (this.moveStart = null),
                        (this.moving = !1),
                        (this.movePosition = null);
                    },
                  },
                  {
                    key: "_setSwiperRef",
                    value: function (e) {
                      (this.swiper = e), this.props.innerRef(e);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = (e.tagName, e.className),
                        r = e.style,
                        i = e.children,
                        o =
                          (e.allowMouseEvents,
                          e.onSwipeUp,
                          e.onSwipeDown,
                          e.onSwipeLeft,
                          e.onSwipeRight,
                          e.onSwipeStart,
                          e.onSwipeMove,
                          e.onSwipeEnd,
                          e.innerRef,
                          e.tolerance,
                          (function (e, t) {
                            var r = {};
                            for (var n in e)
                              !(t.indexOf(n) >= 0) &&
                                Object.prototype.hasOwnProperty.call(e, n) &&
                                (r[n] = e[n]);
                            return r;
                          })(e, [
                            "tagName",
                            "className",
                            "style",
                            "children",
                            "allowMouseEvents",
                            "onSwipeUp",
                            "onSwipeDown",
                            "onSwipeLeft",
                            "onSwipeRight",
                            "onSwipeStart",
                            "onSwipeMove",
                            "onSwipeEnd",
                            "innerRef",
                            "tolerance",
                          ]));
                      return n.default.createElement(
                        this.props.tagName,
                        l(
                          {
                            ref: this._setSwiperRef,
                            onMouseDown: this._onMouseDown,
                            onTouchStart: this._handleSwipeStart,
                            onTouchEnd: this._handleSwipeEnd,
                            className: t,
                            style: r,
                          },
                          o
                        ),
                        i
                      );
                    },
                  },
                ]),
                t
              );
            })(t.Component);
            (d.displayName = "ReactSwipe"),
              (d.propTypes = {
                tagName: i.default.string,
                className: i.default.string,
                style: i.default.object,
                children: i.default.node,
                allowMouseEvents: i.default.bool,
                onSwipeUp: i.default.func,
                onSwipeDown: i.default.func,
                onSwipeLeft: i.default.func,
                onSwipeRight: i.default.func,
                onSwipeStart: i.default.func,
                onSwipeMove: i.default.func,
                onSwipeEnd: i.default.func,
                innerRef: i.default.func,
                tolerance: i.default.number.isRequired,
              }),
              (d.defaultProps = {
                tagName: "div",
                allowMouseEvents: !1,
                onSwipeUp: function () {},
                onSwipeDown: function () {},
                onSwipeLeft: function () {},
                onSwipeRight: function () {},
                onSwipeStart: function () {},
                onSwipeMove: function () {},
                onSwipeEnd: function () {},
                innerRef: function () {},
                tolerance: 0,
              }),
              (e.default = d);
          }.apply(t, n)) && (e.exports = i);
    },
    63346: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.default = function (e, t, r) {
          var n = 0 === e ? e : e + t;
          return (
            "translate3d(" +
            ("horizontal" === r ? [n, 0, 0] : [0, n, 0]).join(",") +
            ")"
          );
        });
    },
    36816: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fadeAnimationHandler =
          t.slideStopSwipingHandler =
          t.slideSwipeAnimationHandler =
          t.slideAnimationHandler =
            void 0);
      var n,
        i = r(70079),
        o = (n = r(63346)) && n.__esModule ? n : { default: n },
        l = r(67759);
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                var n, i;
                (n = e),
                  (i = r[t]),
                  t in n
                    ? Object.defineProperty(n, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : a(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      (t.slideAnimationHandler = function (e, t) {
        var r = {},
          n = t.selectedItem,
          a = i.Children.count(e.children) - 1;
        if (e.infiniteLoop && (n < 0 || n > a))
          return (
            n < 0
              ? e.centerMode &&
                e.centerSlidePercentage &&
                "horizontal" === e.axis
                ? (r.itemListStyle = (0, l.setPosition)(
                    -(a + 2) * e.centerSlidePercentage -
                      (100 - e.centerSlidePercentage) / 2,
                    e.axis
                  ))
                : (r.itemListStyle = (0, l.setPosition)(
                    -(100 * (a + 2)),
                    e.axis
                  ))
              : n > a && (r.itemListStyle = (0, l.setPosition)(0, e.axis)),
            r
          );
        var c = (0, l.getPosition)(n, e),
          u = (0, o.default)(c, "%", e.axis),
          d = e.transitionTime + "ms";
        return (
          (r.itemListStyle = {
            WebkitTransform: u,
            msTransform: u,
            OTransform: u,
            transform: u,
          }),
          t.swiping ||
            (r.itemListStyle = s(
              s({}, r.itemListStyle),
              {},
              {
                WebkitTransitionDuration: d,
                MozTransitionDuration: d,
                OTransitionDuration: d,
                transitionDuration: d,
                msTransitionDuration: d,
              }
            )),
          r
        );
      }),
        (t.slideSwipeAnimationHandler = function (e, t, r, n) {
          var o = {},
            a = "horizontal" === t.axis,
            s = i.Children.count(t.children),
            c = (0, l.getPosition)(r.selectedItem, t),
            u = t.infiniteLoop
              ? (0, l.getPosition)(s - 1, t) - 100
              : (0, l.getPosition)(s - 1, t),
            d = a ? e.x : e.y,
            h = d;
          0 === c && d > 0 && (h = 0), c === u && d < 0 && (h = 0);
          var f = c + 100 / (r.itemSize / h),
            p = Math.abs(d) > t.swipeScrollTolerance;
          return (
            t.infiniteLoop &&
              p &&
              (0 === r.selectedItem && f > -100
                ? (f -= 100 * s)
                : r.selectedItem === s - 1 && f < -(100 * s) && (f += 100 * s)),
            (!t.preventMovementUntilSwipeScrollTolerance ||
              p ||
              r.swipeMovementStarted) &&
              (r.swipeMovementStarted || n({ swipeMovementStarted: !0 }),
              (o.itemListStyle = (0, l.setPosition)(f, t.axis))),
            p && !r.cancelClick && n({ cancelClick: !0 }),
            o
          );
        }),
        (t.slideStopSwipingHandler = function (e, t) {
          var r = (0, l.getPosition)(t.selectedItem, e);
          return { itemListStyle: (0, l.setPosition)(r, e.axis) };
        }),
        (t.fadeAnimationHandler = function (e, t) {
          var r = e.transitionTime + "ms",
            n = "ease-in-out",
            i = {
              position: "absolute",
              display: "block",
              zIndex: -2,
              minHeight: "100%",
              opacity: 0,
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              transitionTimingFunction: n,
              msTransitionTimingFunction: n,
              MozTransitionTimingFunction: n,
              WebkitTransitionTimingFunction: n,
              OTransitionTimingFunction: n,
            };
          return (
            t.swiping ||
              (i = s(
                s({}, i),
                {},
                {
                  WebkitTransitionDuration: r,
                  MozTransitionDuration: r,
                  OTransitionDuration: r,
                  transitionDuration: r,
                  msTransitionDuration: r,
                }
              )),
            {
              slideStyle: i,
              selectedStyle: s(
                s({}, i),
                {},
                { opacity: 1, position: "relative" }
              ),
              prevStyle: s({}, i),
            }
          );
        });
    },
    48170: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== f(e) && "function" != typeof e))
            return { default: e };
          var t = h();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var o = n ? Object.getOwnPropertyDescriptor(e, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(r, i, o)
                : (r[i] = e[i]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(70079)),
        i = d(r(4658)),
        o = d(r(45007)),
        l = d(r(59032)),
        a = d(r(19657)),
        s = d(r(52147)),
        c = r(67759),
        u = r(36816);
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function h() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function f(e) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function p() {
        return (p =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                x(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : g(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function v(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function w(e, t) {
        return (w =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function y(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function x(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var k = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && w(e, t);
        })(g, e);
        var t,
          r,
          d,
          h =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r,
                n = b(g);
              if (t) {
                var i = b(this).constructor;
                r = Reflect.construct(n, arguments, i);
              } else r = n.apply(this, arguments);
              return (e = r) && ("object" === f(e) || "function" == typeof e)
                ? e
                : y(this);
            });
        function g(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, g),
            x(y((t = h.call(this, e))), "thumbsRef", void 0),
            x(y(t), "carouselWrapperRef", void 0),
            x(y(t), "listRef", void 0),
            x(y(t), "itemsRef", void 0),
            x(y(t), "timer", void 0),
            x(y(t), "animationHandler", void 0),
            x(y(t), "setThumbsRef", function (e) {
              t.thumbsRef = e;
            }),
            x(y(t), "setCarouselWrapperRef", function (e) {
              t.carouselWrapperRef = e;
            }),
            x(y(t), "setListRef", function (e) {
              t.listRef = e;
            }),
            x(y(t), "setItemsRef", function (e, r) {
              t.itemsRef || (t.itemsRef = []), (t.itemsRef[r] = e);
            }),
            x(y(t), "autoPlay", function () {
              !(1 >= n.Children.count(t.props.children)) &&
                (t.clearAutoPlay(),
                t.props.autoPlay &&
                  (t.timer = setTimeout(function () {
                    t.increment();
                  }, t.props.interval)));
            }),
            x(y(t), "clearAutoPlay", function () {
              t.timer && clearTimeout(t.timer);
            }),
            x(y(t), "resetAutoPlay", function () {
              t.clearAutoPlay(), t.autoPlay();
            }),
            x(y(t), "stopOnHover", function () {
              t.setState({ isMouseEntered: !0 }, t.clearAutoPlay);
            }),
            x(y(t), "startOnLeave", function () {
              t.setState({ isMouseEntered: !1 }, t.autoPlay);
            }),
            x(y(t), "isFocusWithinTheCarousel", function () {
              return (
                !!t.carouselWrapperRef &&
                !!(
                  (0, a.default)().activeElement === t.carouselWrapperRef ||
                  t.carouselWrapperRef.contains((0, a.default)().activeElement)
                )
              );
            }),
            x(y(t), "navigateWithKeyboard", function (e) {
              if (t.isFocusWithinTheCarousel()) {
                var r = "horizontal" === t.props.axis,
                  n = {
                    ArrowUp: 38,
                    ArrowRight: 39,
                    ArrowDown: 40,
                    ArrowLeft: 37,
                  },
                  i = r ? n.ArrowRight : n.ArrowDown,
                  o = r ? n.ArrowLeft : n.ArrowUp;
                i === e.keyCode
                  ? t.increment()
                  : o === e.keyCode && t.decrement();
              }
            }),
            x(y(t), "updateSizes", function () {
              if (
                t.state.initialized &&
                t.itemsRef &&
                0 !== t.itemsRef.length
              ) {
                var e = "horizontal" === t.props.axis,
                  r = t.itemsRef[0];
                if (r) {
                  var n = e ? r.clientWidth : r.clientHeight;
                  t.setState({ itemSize: n }),
                    t.thumbsRef && t.thumbsRef.updateSizes();
                }
              }
            }),
            x(y(t), "setMountState", function () {
              t.setState({ hasMount: !0 }), t.updateSizes();
            }),
            x(y(t), "handleClickItem", function (e, r) {
              if (0 !== n.Children.count(t.props.children)) {
                if (t.state.cancelClick) {
                  t.setState({ cancelClick: !1 });
                  return;
                }
                t.props.onClickItem(e, r),
                  e !== t.state.selectedItem && t.setState({ selectedItem: e });
              }
            }),
            x(y(t), "handleOnChange", function (e, r) {
              1 >= n.Children.count(t.props.children) || t.props.onChange(e, r);
            }),
            x(y(t), "handleClickThumb", function (e, r) {
              t.props.onClickThumb(e, r), t.moveTo(e);
            }),
            x(y(t), "onSwipeStart", function (e) {
              t.setState({ swiping: !0 }), t.props.onSwipeStart(e);
            }),
            x(y(t), "onSwipeEnd", function (e) {
              t.setState({
                swiping: !1,
                cancelClick: !1,
                swipeMovementStarted: !1,
              }),
                t.props.onSwipeEnd(e),
                t.clearAutoPlay(),
                t.state.autoPlay && t.autoPlay();
            }),
            x(y(t), "onSwipeMove", function (e, r) {
              t.props.onSwipeMove(r);
              var n = t.props.swipeAnimationHandler(
                e,
                t.props,
                t.state,
                t.setState.bind(y(t))
              );
              return t.setState(m({}, n)), !!Object.keys(n).length;
            }),
            x(y(t), "decrement", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1;
              t.moveTo(t.state.selectedItem - ("number" == typeof e ? e : 1));
            }),
            x(y(t), "increment", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1;
              t.moveTo(t.state.selectedItem + ("number" == typeof e ? e : 1));
            }),
            x(y(t), "moveTo", function (e) {
              if ("number" == typeof e) {
                var r = n.Children.count(t.props.children) - 1;
                e < 0 && (e = t.props.infiniteLoop ? r : 0),
                  e > r && (e = t.props.infiniteLoop ? 0 : r),
                  t.selectItem({ selectedItem: e }),
                  t.state.autoPlay &&
                    !1 === t.state.isMouseEntered &&
                    t.resetAutoPlay();
              }
            }),
            x(y(t), "onClickNext", function () {
              t.increment(1);
            }),
            x(y(t), "onClickPrev", function () {
              t.decrement(1);
            }),
            x(y(t), "onSwipeForward", function () {
              t.increment(1),
                t.props.emulateTouch && t.setState({ cancelClick: !0 });
            }),
            x(y(t), "onSwipeBackwards", function () {
              t.decrement(1),
                t.props.emulateTouch && t.setState({ cancelClick: !0 });
            }),
            x(y(t), "changeItem", function (e) {
              return function (r) {
                ((0, c.isKeyboardEvent)(r) && "Enter" !== r.key) || t.moveTo(e);
              };
            }),
            x(y(t), "selectItem", function (e) {
              t.setState(
                m({ previousItem: t.state.selectedItem }, e),
                function () {
                  t.setState(t.animationHandler(t.props, t.state));
                }
              ),
                t.handleOnChange(
                  e.selectedItem,
                  n.Children.toArray(t.props.children)[e.selectedItem]
                );
            }),
            x(y(t), "getInitialImage", function () {
              var e = t.props.selectedItem,
                r = t.itemsRef && t.itemsRef[e];
              return ((r && r.getElementsByTagName("img")) || [])[0];
            }),
            x(y(t), "getVariableItemHeight", function (e) {
              var r = t.itemsRef && t.itemsRef[e];
              if (t.state.hasMount && r && r.children.length) {
                var n = r.children[0].getElementsByTagName("img") || [];
                if (n.length > 0) {
                  var i = n[0];
                  i.complete ||
                    i.addEventListener("load", function e() {
                      t.forceUpdate(), i.removeEventListener("load", e);
                    });
                }
                var o = (n[0] || r.children[0]).clientHeight;
                return o > 0 ? o : null;
              }
              return null;
            });
          var t,
            r = {
              initialized: !1,
              previousItem: e.selectedItem,
              selectedItem: e.selectedItem,
              hasMount: !1,
              isMouseEntered: !1,
              autoPlay: e.autoPlay,
              swiping: !1,
              swipeMovementStarted: !1,
              cancelClick: !1,
              itemSize: 1,
              itemListStyle: {},
              slideStyle: {},
              selectedStyle: {},
              prevStyle: {},
            };
          return (
            (t.animationHandler =
              ("function" == typeof e.animationHandler && e.animationHandler) ||
              ("fade" === e.animationHandler && u.fadeAnimationHandler) ||
              u.slideAnimationHandler),
            (t.state = m(m({}, r), t.animationHandler(e, r))),
            t
          );
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.children && this.setupCarousel();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e, t) {
                e.children ||
                  !this.props.children ||
                  this.state.initialized ||
                  this.setupCarousel(),
                  !e.autoFocus && this.props.autoFocus && this.forceFocus(),
                  t.swiping &&
                    !this.state.swiping &&
                    this.setState(
                      m(
                        {},
                        this.props.stopSwipingHandler(this.props, this.state)
                      )
                    ),
                  (e.selectedItem !== this.props.selectedItem ||
                    e.centerMode !== this.props.centerMode) &&
                    (this.updateSizes(), this.moveTo(this.props.selectedItem)),
                  e.autoPlay !== this.props.autoPlay &&
                    (this.props.autoPlay
                      ? this.setupAutoPlay()
                      : this.destroyAutoPlay(),
                    this.setState({ autoPlay: this.props.autoPlay }));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.destroyCarousel();
              },
            },
            {
              key: "setupCarousel",
              value: function () {
                var e = this;
                this.bindEvents(),
                  this.state.autoPlay &&
                    n.Children.count(this.props.children) > 1 &&
                    this.setupAutoPlay(),
                  this.props.autoFocus && this.forceFocus(),
                  this.setState({ initialized: !0 }, function () {
                    var t = e.getInitialImage();
                    t && !t.complete
                      ? t.addEventListener("load", e.setMountState)
                      : e.setMountState();
                  });
              },
            },
            {
              key: "destroyCarousel",
              value: function () {
                this.state.initialized &&
                  (this.unbindEvents(), this.destroyAutoPlay());
              },
            },
            {
              key: "setupAutoPlay",
              value: function () {
                this.autoPlay();
                var e = this.carouselWrapperRef;
                this.props.stopOnHover &&
                  e &&
                  (e.addEventListener("mouseenter", this.stopOnHover),
                  e.addEventListener("mouseleave", this.startOnLeave));
              },
            },
            {
              key: "destroyAutoPlay",
              value: function () {
                this.clearAutoPlay();
                var e = this.carouselWrapperRef;
                this.props.stopOnHover &&
                  e &&
                  (e.removeEventListener("mouseenter", this.stopOnHover),
                  e.removeEventListener("mouseleave", this.startOnLeave));
              },
            },
            {
              key: "bindEvents",
              value: function () {
                (0, s.default)().addEventListener("resize", this.updateSizes),
                  (0, s.default)().addEventListener(
                    "DOMContentLoaded",
                    this.updateSizes
                  ),
                  this.props.useKeyboardArrows &&
                    (0, a.default)().addEventListener(
                      "keydown",
                      this.navigateWithKeyboard
                    );
              },
            },
            {
              key: "unbindEvents",
              value: function () {
                (0, s.default)().removeEventListener(
                  "resize",
                  this.updateSizes
                ),
                  (0, s.default)().removeEventListener(
                    "DOMContentLoaded",
                    this.updateSizes
                  );
                var e = this.getInitialImage();
                e && e.removeEventListener("load", this.setMountState),
                  this.props.useKeyboardArrows &&
                    (0, a.default)().removeEventListener(
                      "keydown",
                      this.navigateWithKeyboard
                    );
              },
            },
            {
              key: "forceFocus",
              value: function () {
                var e;
                null === (e = this.carouselWrapperRef) ||
                  void 0 === e ||
                  e.focus();
              },
            },
            {
              key: "renderItems",
              value: function (e) {
                var t = this;
                return this.props.children
                  ? n.Children.map(this.props.children, function (r, i) {
                      var l = i === t.state.selectedItem,
                        a = i === t.state.previousItem,
                        s =
                          (l && t.state.selectedStyle) ||
                          (a && t.state.prevStyle) ||
                          t.state.slideStyle ||
                          {};
                      t.props.centerMode &&
                        "horizontal" === t.props.axis &&
                        (s = m(
                          m({}, s),
                          {},
                          { minWidth: t.props.centerSlidePercentage + "%" }
                        )),
                        t.state.swiping &&
                          t.state.swipeMovementStarted &&
                          (s = m(m({}, s), {}, { pointerEvents: "none" }));
                      var c = {
                        ref: function (e) {
                          return t.setItemsRef(e, i);
                        },
                        key: "itemKey" + i + (e ? "clone" : ""),
                        className: o.default.ITEM(
                          !0,
                          i === t.state.selectedItem,
                          i === t.state.previousItem
                        ),
                        onClick: t.handleClickItem.bind(t, i, r),
                        style: s,
                      };
                      return n.default.createElement(
                        "li",
                        c,
                        t.props.renderItem(r, {
                          isSelected: i === t.state.selectedItem,
                          isPrevious: i === t.state.previousItem,
                        })
                      );
                    })
                  : [];
              },
            },
            {
              key: "renderControls",
              value: function () {
                var e = this,
                  t = this.props,
                  r = t.showIndicators,
                  i = t.labels,
                  o = t.renderIndicator,
                  l = t.children;
                return r
                  ? n.default.createElement(
                      "ul",
                      { className: "control-dots" },
                      n.Children.map(l, function (t, r) {
                        return (
                          o &&
                          o(
                            e.changeItem(r),
                            r === e.state.selectedItem,
                            r,
                            i.item
                          )
                        );
                      })
                    )
                  : null;
              },
            },
            {
              key: "renderStatus",
              value: function () {
                return this.props.showStatus
                  ? n.default.createElement(
                      "p",
                      { className: "carousel-status" },
                      this.props.statusFormatter(
                        this.state.selectedItem + 1,
                        n.Children.count(this.props.children)
                      )
                    )
                  : null;
              },
            },
            {
              key: "renderThumbs",
              value: function () {
                return this.props.showThumbs &&
                  this.props.children &&
                  0 !== n.Children.count(this.props.children)
                  ? n.default.createElement(
                      l.default,
                      {
                        ref: this.setThumbsRef,
                        onSelectItem: this.handleClickThumb,
                        selectedItem: this.state.selectedItem,
                        transitionTime: this.props.transitionTime,
                        thumbWidth: this.props.thumbWidth,
                        labels: this.props.labels,
                        emulateTouch: this.props.emulateTouch,
                      },
                      this.props.renderThumbs(this.props.children)
                    )
                  : null;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                if (
                  !this.props.children ||
                  0 === n.Children.count(this.props.children)
                )
                  return null;
                var t =
                    this.props.swipeable &&
                    n.Children.count(this.props.children) > 1,
                  r = "horizontal" === this.props.axis,
                  l =
                    this.props.showArrows &&
                    n.Children.count(this.props.children) > 1,
                  a =
                    (l &&
                      (this.state.selectedItem > 0 ||
                        this.props.infiniteLoop)) ||
                    !1,
                  s =
                    (l &&
                      (this.state.selectedItem <
                        n.Children.count(this.props.children) - 1 ||
                        this.props.infiniteLoop)) ||
                    !1,
                  c = this.renderItems(!0),
                  u = c.shift(),
                  d = c.pop(),
                  h = {
                    className: o.default.SLIDER(!0, this.state.swiping),
                    onSwipeMove: this.onSwipeMove,
                    onSwipeStart: this.onSwipeStart,
                    onSwipeEnd: this.onSwipeEnd,
                    style: this.state.itemListStyle,
                    tolerance: this.props.swipeScrollTolerance,
                  },
                  f = {};
                if (r) {
                  if (
                    ((h.onSwipeLeft = this.onSwipeForward),
                    (h.onSwipeRight = this.onSwipeBackwards),
                    this.props.dynamicHeight)
                  ) {
                    var g = this.getVariableItemHeight(this.state.selectedItem);
                    f.height = g || "auto";
                  }
                } else
                  (h.onSwipeUp =
                    "natural" === this.props.verticalSwipe
                      ? this.onSwipeBackwards
                      : this.onSwipeForward),
                    (h.onSwipeDown =
                      "natural" === this.props.verticalSwipe
                        ? this.onSwipeForward
                        : this.onSwipeBackwards),
                    (h.style = m(
                      m({}, h.style),
                      {},
                      { height: this.state.itemSize }
                    )),
                    (f.height = this.state.itemSize);
                return n.default.createElement(
                  "div",
                  {
                    "aria-label": this.props.ariaLabel,
                    className: o.default.ROOT(this.props.className),
                    ref: this.setCarouselWrapperRef,
                    tabIndex: this.props.useKeyboardArrows ? 0 : void 0,
                  },
                  n.default.createElement(
                    "div",
                    {
                      className: o.default.CAROUSEL(!0),
                      style: { width: this.props.width },
                    },
                    this.renderControls(),
                    this.props.renderArrowPrev(
                      this.onClickPrev,
                      a,
                      this.props.labels.leftArrow
                    ),
                    n.default.createElement(
                      "div",
                      {
                        className: o.default.WRAPPER(!0, this.props.axis),
                        style: f,
                      },
                      t
                        ? n.default.createElement(
                            i.default,
                            p({ tagName: "ul", innerRef: this.setListRef }, h, {
                              allowMouseEvents: this.props.emulateTouch,
                            }),
                            this.props.infiniteLoop && d,
                            this.renderItems(),
                            this.props.infiniteLoop && u
                          )
                        : n.default.createElement(
                            "ul",
                            {
                              className: o.default.SLIDER(
                                !0,
                                this.state.swiping
                              ),
                              ref: function (t) {
                                return e.setListRef(t);
                              },
                              style: this.state.itemListStyle || {},
                            },
                            this.props.infiniteLoop && d,
                            this.renderItems(),
                            this.props.infiniteLoop && u
                          )
                    ),
                    this.props.renderArrowNext(
                      this.onClickNext,
                      s,
                      this.props.labels.rightArrow
                    ),
                    this.renderStatus()
                  ),
                  this.renderThumbs()
                );
              },
            },
          ]),
          v(g.prototype, r),
          d && v(g, d),
          g
        );
      })(n.default.Component);
      (t.default = k),
        x(k, "displayName", "Carousel"),
        x(k, "defaultProps", {
          ariaLabel: void 0,
          axis: "horizontal",
          centerSlidePercentage: 80,
          interval: 3e3,
          labels: {
            leftArrow: "previous slide / item",
            rightArrow: "next slide / item",
            item: "slide item",
          },
          onClickItem: c.noop,
          onClickThumb: c.noop,
          onChange: c.noop,
          onSwipeStart: function () {},
          onSwipeEnd: function () {},
          onSwipeMove: function () {
            return !1;
          },
          preventMovementUntilSwipeScrollTolerance: !1,
          renderArrowPrev: function (e, t, r) {
            return n.default.createElement("button", {
              type: "button",
              "aria-label": r,
              className: o.default.ARROW_PREV(!t),
              onClick: e,
            });
          },
          renderArrowNext: function (e, t, r) {
            return n.default.createElement("button", {
              type: "button",
              "aria-label": r,
              className: o.default.ARROW_NEXT(!t),
              onClick: e,
            });
          },
          renderIndicator: function (e, t, r, i) {
            return n.default.createElement("li", {
              className: o.default.DOT(t),
              onClick: e,
              onKeyDown: e,
              value: r,
              key: r,
              role: "button",
              tabIndex: 0,
              "aria-label": "".concat(i, " ").concat(r + 1),
            });
          },
          renderItem: function (e) {
            return e;
          },
          renderThumbs: function (e) {
            var t = n.Children.map(e, function (e) {
              var t = e;
              if (
                ("img" !== e.type &&
                  (t = n.Children.toArray(e.props.children).find(function (e) {
                    return "img" === e.type;
                  })),
                t)
              )
                return t;
            });
            return 0 ===
              t.filter(function (e) {
                return e;
              }).length
              ? (console.warn(
                  "No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"
                ),
                [])
              : t;
          },
          statusFormatter: c.defaultStatusFormatter,
          selectedItem: 0,
          showArrows: !0,
          showIndicators: !0,
          showStatus: !0,
          showThumbs: !0,
          stopOnHover: !0,
          swipeScrollTolerance: 5,
          swipeable: !0,
          transitionTime: 350,
          verticalSwipe: "standard",
          width: "100%",
          animationHandler: "slide",
          swipeAnimationHandler: u.slideSwipeAnimationHandler,
          stopSwipingHandler: u.slideStopSwipingHandler,
        });
    },
    80634: function () {},
    67759: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.setPosition =
          t.getPosition =
          t.isKeyboardEvent =
          t.defaultStatusFormatter =
          t.noop =
            void 0);
      var n,
        i = r(70079),
        o = (n = r(63346)) && n.__esModule ? n : { default: n };
      (t.noop = function () {}),
        (t.defaultStatusFormatter = function (e, t) {
          return "".concat(e, " of ").concat(t);
        }),
        (t.isKeyboardEvent = function (e) {
          return !!e && e.hasOwnProperty("key");
        }),
        (t.getPosition = function (e, t) {
          if ((t.infiniteLoop && ++e, 0 === e)) return 0;
          var r = i.Children.count(t.children);
          if (t.centerMode && "horizontal" === t.axis) {
            var n = -e * t.centerSlidePercentage,
              o = r - 1;
            return (
              e && (e !== o || t.infiniteLoop)
                ? (n += (100 - t.centerSlidePercentage) / 2)
                : e === o && (n += 100 - t.centerSlidePercentage),
              n
            );
          }
          return -(100 * e);
        }),
        (t.setPosition = function (e, t) {
          var r = {};
          return (
            [
              "WebkitTransform",
              "MozTransform",
              "MsTransform",
              "OTransform",
              "transform",
              "msTransform",
            ].forEach(function (n) {
              r[n] = (0, o.default)(e, "%", t);
            }),
            r
          );
        });
    },
    59032: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== d(e) && "function" != typeof e))
            return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var o = n ? Object.getOwnPropertyDescriptor(e, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(r, i, o)
                : (r[i] = e[i]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(70079)),
        i = c(r(45007)),
        o = r(14280),
        l = c(r(63346)),
        a = c(r(4658)),
        s = c(r(52147));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function d(e) {
        return (d =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function h() {
        return (h =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function g(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function v(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var w = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && p(e, t);
        })(w, e);
        var t,
          r,
          c,
          u =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r,
                n = m(w);
              if (t) {
                var i = m(this).constructor;
                r = Reflect.construct(n, arguments, i);
              } else r = n.apply(this, arguments);
              return (e = r) && ("object" === d(e) || "function" == typeof e)
                ? e
                : g(this);
            });
        function w(e) {
          var t;
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, w),
            v(g((t = u.call(this, e))), "itemsWrapperRef", void 0),
            v(g(t), "itemsListRef", void 0),
            v(g(t), "thumbsRef", void 0),
            v(g(t), "setItemsWrapperRef", function (e) {
              t.itemsWrapperRef = e;
            }),
            v(g(t), "setItemsListRef", function (e) {
              t.itemsListRef = e;
            }),
            v(g(t), "setThumbsRef", function (e, r) {
              t.thumbsRef || (t.thumbsRef = []), (t.thumbsRef[r] = e);
            }),
            v(g(t), "updateSizes", function () {
              if (t.props.children && t.itemsWrapperRef && t.thumbsRef) {
                var e = n.Children.count(t.props.children),
                  r = t.itemsWrapperRef.clientWidth,
                  i = t.props.thumbWidth
                    ? t.props.thumbWidth
                    : (0, o.outerWidth)(t.thumbsRef[0]),
                  l = Math.floor(r / i),
                  a = l < e,
                  s = a ? e - l : 0;
                t.setState(function (e, r) {
                  return {
                    itemSize: i,
                    visibleItems: l,
                    firstItem: a ? t.getFirstItem(r.selectedItem) : 0,
                    lastPosition: s,
                    showArrows: a,
                  };
                });
              }
            }),
            v(g(t), "handleClickItem", function (e, r, n) {
              if (!n.hasOwnProperty("key") || "Enter" === n.key) {
                var i = t.props.onSelectItem;
                "function" == typeof i && i(e, r);
              }
            }),
            v(g(t), "onSwipeStart", function () {
              t.setState({ swiping: !0 });
            }),
            v(g(t), "onSwipeEnd", function () {
              t.setState({ swiping: !1 });
            }),
            v(g(t), "onSwipeMove", function (e) {
              var r = e.x;
              if (
                !t.state.itemSize ||
                !t.itemsWrapperRef ||
                !t.state.visibleItems
              )
                return !1;
              var i = n.Children.count(t.props.children),
                o = -(100 * t.state.firstItem) / t.state.visibleItems;
              0 === o && r > 0 && (r = 0),
                o ===
                  -(100 * Math.max(i - t.state.visibleItems, 0)) /
                    t.state.visibleItems &&
                  r < 0 &&
                  (r = 0);
              var a = o + 100 / (t.itemsWrapperRef.clientWidth / r);
              return (
                t.itemsListRef &&
                  [
                    "WebkitTransform",
                    "MozTransform",
                    "MsTransform",
                    "OTransform",
                    "transform",
                    "msTransform",
                  ].forEach(function (e) {
                    t.itemsListRef.style[e] = (0, l.default)(
                      a,
                      "%",
                      t.props.axis
                    );
                  }),
                !0
              );
            }),
            v(g(t), "slideRight", function (e) {
              t.moveTo(t.state.firstItem - ("number" == typeof e ? e : 1));
            }),
            v(g(t), "slideLeft", function (e) {
              t.moveTo(t.state.firstItem + ("number" == typeof e ? e : 1));
            }),
            v(g(t), "moveTo", function (e) {
              (e =
                (e = e < 0 ? 0 : e) >= t.state.lastPosition
                  ? t.state.lastPosition
                  : e),
                t.setState({ firstItem: e });
            }),
            (t.state = {
              selectedItem: e.selectedItem,
              swiping: !1,
              showArrows: !1,
              firstItem: 0,
              visibleItems: 0,
              lastPosition: 0,
            }),
            t
          );
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                this.setupThumbs();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                this.props.selectedItem !== this.state.selectedItem &&
                  this.setState({
                    selectedItem: this.props.selectedItem,
                    firstItem: this.getFirstItem(this.props.selectedItem),
                  }),
                  this.props.children !== e.children && this.updateSizes();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.destroyThumbs();
              },
            },
            {
              key: "setupThumbs",
              value: function () {
                (0, s.default)().addEventListener("resize", this.updateSizes),
                  (0, s.default)().addEventListener(
                    "DOMContentLoaded",
                    this.updateSizes
                  ),
                  this.updateSizes();
              },
            },
            {
              key: "destroyThumbs",
              value: function () {
                (0, s.default)().removeEventListener(
                  "resize",
                  this.updateSizes
                ),
                  (0, s.default)().removeEventListener(
                    "DOMContentLoaded",
                    this.updateSizes
                  );
              },
            },
            {
              key: "getFirstItem",
              value: function (e) {
                var t = e;
                return (
                  e >= this.state.lastPosition && (t = this.state.lastPosition),
                  e < this.state.firstItem + this.state.visibleItems &&
                    (t = this.state.firstItem),
                  e < this.state.firstItem && (t = e),
                  t
                );
              },
            },
            {
              key: "renderItems",
              value: function () {
                var e = this;
                return this.props.children.map(function (t, r) {
                  var o = i.default.ITEM(!1, r === e.state.selectedItem),
                    l = {
                      key: r,
                      ref: function (t) {
                        return e.setThumbsRef(t, r);
                      },
                      className: o,
                      onClick: e.handleClickItem.bind(
                        e,
                        r,
                        e.props.children[r]
                      ),
                      onKeyDown: e.handleClickItem.bind(
                        e,
                        r,
                        e.props.children[r]
                      ),
                      "aria-label": ""
                        .concat(e.props.labels.item, " ")
                        .concat(r + 1),
                      style: { width: e.props.thumbWidth },
                    };
                  return n.default.createElement(
                    "li",
                    h({}, l, { role: "button", tabIndex: 0 }),
                    t
                  );
                });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                if (!this.props.children) return null;
                var t = n.Children.count(this.props.children) > 1,
                  r = this.state.showArrows && this.state.firstItem > 0,
                  o =
                    this.state.showArrows &&
                    this.state.firstItem < this.state.lastPosition,
                  s = {},
                  c = -this.state.firstItem * (this.state.itemSize || 0),
                  u = (0, l.default)(c, "px", this.props.axis),
                  d = this.props.transitionTime + "ms";
                return (
                  (s = {
                    WebkitTransform: u,
                    MozTransform: u,
                    MsTransform: u,
                    OTransform: u,
                    transform: u,
                    msTransform: u,
                    WebkitTransitionDuration: d,
                    MozTransitionDuration: d,
                    MsTransitionDuration: d,
                    OTransitionDuration: d,
                    transitionDuration: d,
                    msTransitionDuration: d,
                  }),
                  n.default.createElement(
                    "div",
                    { className: i.default.CAROUSEL(!1) },
                    n.default.createElement(
                      "div",
                      {
                        className: i.default.WRAPPER(!1),
                        ref: this.setItemsWrapperRef,
                      },
                      n.default.createElement("button", {
                        type: "button",
                        className: i.default.ARROW_PREV(!r),
                        onClick: function () {
                          return e.slideRight();
                        },
                        "aria-label": this.props.labels.leftArrow,
                      }),
                      t
                        ? n.default.createElement(
                            a.default,
                            {
                              tagName: "ul",
                              className: i.default.SLIDER(
                                !1,
                                this.state.swiping
                              ),
                              onSwipeLeft: this.slideLeft,
                              onSwipeRight: this.slideRight,
                              onSwipeMove: this.onSwipeMove,
                              onSwipeStart: this.onSwipeStart,
                              onSwipeEnd: this.onSwipeEnd,
                              style: s,
                              innerRef: this.setItemsListRef,
                              allowMouseEvents: this.props.emulateTouch,
                            },
                            this.renderItems()
                          )
                        : n.default.createElement(
                            "ul",
                            {
                              className: i.default.SLIDER(
                                !1,
                                this.state.swiping
                              ),
                              ref: function (t) {
                                return e.setItemsListRef(t);
                              },
                              style: s,
                            },
                            this.renderItems()
                          ),
                      n.default.createElement("button", {
                        type: "button",
                        className: i.default.ARROW_NEXT(!o),
                        onClick: function () {
                          return e.slideLeft();
                        },
                        "aria-label": this.props.labels.rightArrow,
                      })
                    )
                  )
                );
              },
            },
          ]),
          f(w.prototype, r),
          c && f(w, c),
          w
        );
      })(n.Component);
      (t.default = w),
        v(w, "displayName", "Thumbs"),
        v(w, "defaultProps", {
          axis: "horizontal",
          labels: {
            leftArrow: "previous slide / item",
            rightArrow: "next slide / item",
            item: "slide item",
          },
          selectedItem: 0,
          thumbWidth: 80,
          transitionTime: 350,
        });
    },
    45007: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n,
        i = (n = r(65443)) && n.__esModule ? n : { default: n };
      t.default = {
        ROOT: function (e) {
          var t, r, n;
          return (0, i.default)(
            ((t = { "carousel-root": !0 }),
            (r = e || ""),
            (n = !!e),
            r in t
              ? Object.defineProperty(t, r, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[r] = n),
            t)
          );
        },
        CAROUSEL: function (e) {
          return (0, i.default)({ carousel: !0, "carousel-slider": e });
        },
        WRAPPER: function (e, t) {
          return (0, i.default)({
            "thumbs-wrapper": !e,
            "slider-wrapper": e,
            "axis-horizontal": "horizontal" === t,
            "axis-vertical": "horizontal" !== t,
          });
        },
        SLIDER: function (e, t) {
          return (0, i.default)({ thumbs: !e, slider: e, animated: !t });
        },
        ITEM: function (e, t, r) {
          return (0, i.default)({
            thumb: !e,
            slide: e,
            selected: t,
            previous: r,
          });
        },
        ARROW_PREV: function (e) {
          return (0, i.default)({
            "control-arrow control-prev": !0,
            "control-disabled": e,
          });
        },
        ARROW_NEXT: function (e) {
          return (0, i.default)({
            "control-arrow control-next": !0,
            "control-disabled": e,
          });
        },
        DOT: function (e) {
          return (0, i.default)({ dot: !0, selected: e });
        },
      };
    },
    14280: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.outerWidth = void 0),
        (t.outerWidth = function (e) {
          var t = e.offsetWidth,
            r = getComputedStyle(e);
          return t + (parseInt(r.marginLeft) + parseInt(r.marginRight));
        });
    },
    54721: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "lr", {
        enumerable: !0,
        get: function () {
          return n.default;
        },
      });
      var n = i(r(48170));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      r(80634), i(r(59032));
    },
    19657: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.default = function () {
          return document;
        });
    },
    52147: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.default = function () {
          return window;
        });
    },
    75329: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ni: function () {
          return a;
        },
        Zu: function () {
          return l;
        },
        be: function () {
          return i;
        },
        yR: function () {
          return s;
        },
      });
      var n = r(70079);
      function i(e) {
        return {
          "--gdg-accent-color": e.accentColor,
          "--gdg-accent-fg": e.accentFg,
          "--gdg-accent-light": e.accentLight,
          "--gdg-text-dark": e.textDark,
          "--gdg-text-medium": e.textMedium,
          "--gdg-text-light": e.textLight,
          "--gdg-text-bubble": e.textBubble,
          "--gdg-bg-icon-header": e.bgIconHeader,
          "--gdg-fg-icon-header": e.fgIconHeader,
          "--gdg-text-header": e.textHeader,
          "--gdg-text-group-header": e.textGroupHeader ?? e.textHeader,
          "--gdg-text-header-selected": e.textHeaderSelected,
          "--gdg-bg-cell": e.bgCell,
          "--gdg-bg-cell-medium": e.bgCellMedium,
          "--gdg-bg-header": e.bgHeader,
          "--gdg-bg-header-has-focus": e.bgHeaderHasFocus,
          "--gdg-bg-header-hovered": e.bgHeaderHovered,
          "--gdg-bg-bubble": e.bgBubble,
          "--gdg-bg-bubble-selected": e.bgBubbleSelected,
          "--gdg-bg-search-result": e.bgSearchResult,
          "--gdg-border-color": e.borderColor,
          "--gdg-horizontal-border-color":
            e.horizontalBorderColor ?? e.borderColor,
          "--gdg-drilldown-border": e.drilldownBorder,
          "--gdg-link-color": e.linkColor,
          "--gdg-cell-horizontal-padding": `${e.cellHorizontalPadding}px`,
          "--gdg-cell-vertical-padding": `${e.cellVerticalPadding}px`,
          "--gdg-header-font-style": e.headerFontStyle,
          "--gdg-base-font-style": e.baseFontStyle,
          "--gdg-marker-font-style": e.markerFontStyle,
          "--gdg-font-family": e.fontFamily,
          "--gdg-editor-font-size": e.editorFontSize,
          ...(void 0 === e.roundingRadius
            ? {}
            : { "--gdg-rounding-radius": `${e.roundingRadius}px` }),
        };
      }
      let o = {
        accentColor: "#4F5DFF",
        accentFg: "#FFFFFF",
        accentLight: "rgba(62, 116, 253, 0.1)",
        textDark: "#313139",
        textMedium: "#737383",
        textLight: "#B2B2C0",
        textBubble: "#313139",
        bgIconHeader: "#737383",
        fgIconHeader: "#FFFFFF",
        textHeader: "#313139",
        textGroupHeader: "#313139BB",
        textHeaderSelected: "#FFFFFF",
        bgCell: "#FFFFFF",
        bgCellMedium: "#FAFAFB",
        bgHeader: "#F7F7F8",
        bgHeaderHasFocus: "#E9E9EB",
        bgHeaderHovered: "#EFEFF1",
        bgBubble: "#EDEDF3",
        bgBubbleSelected: "#FFFFFF",
        bgSearchResult: "#fff9e3",
        borderColor: "rgba(115, 116, 131, 0.16)",
        drilldownBorder: "rgba(0, 0, 0, 0)",
        linkColor: "#4F5DFF",
        cellHorizontalPadding: 8,
        cellVerticalPadding: 3,
        headerIconSize: 18,
        headerFontStyle: "600 13px",
        baseFontStyle: "13px",
        markerFontStyle: "9px",
        fontFamily:
          "Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif",
        editorFontSize: "13px",
        lineHeight: 1.4,
      };
      function l() {
        return o;
      }
      let a = n.createContext(o);
      function s(e, ...t) {
        let r = { ...e };
        for (let e of t)
          if (void 0 !== e)
            for (let t in e) e.hasOwnProperty(t) && (r[t] = e[t]);
        return (
          (void 0 === r.headerFontFull ||
            e.fontFamily !== r.fontFamily ||
            e.headerFontStyle !== r.headerFontStyle) &&
            (r.headerFontFull = `${r.headerFontStyle} ${r.fontFamily}`),
          (void 0 === r.baseFontFull ||
            e.fontFamily !== r.fontFamily ||
            e.baseFontStyle !== r.baseFontStyle) &&
            (r.baseFontFull = `${r.baseFontStyle} ${r.fontFamily}`),
          (void 0 === r.markerFontFull ||
            e.fontFamily !== r.fontFamily ||
            e.markerFontStyle !== r.markerFontStyle) &&
            (r.markerFontFull = `${r.markerFontStyle} ${r.fontFamily}`),
          r
        );
      }
    },
    29879: function (e, t, r) {
      "use strict";
      function n(e) {}
      function i(e = "This should not happen") {
        throw Error(e);
      }
      function o(e, t = "Assertion failed") {
        if (!e) return i(t);
      }
      function l(e, t) {
        return i(t ?? "Hell froze over");
      }
      function a(e, t) {
        try {
          return e();
        } catch {
          return t;
        }
      }
      r.d(t, {
        NG: function () {
          return n;
        },
        hu: function () {
          return o;
        },
        vE: function () {
          return l;
        },
        vZ: function () {
          return function e(t, r) {
            let n, i;
            if (t === r) return !0;
            if (t && r && (n = t.constructor) === r.constructor) {
              if (n === Date) return t.getTime() === r.getTime();
              if (n === RegExp) return t.toString() === r.toString();
              if (n === Array) {
                if ((i = t.length) === r.length) for (; i-- && e(t[i], r[i]); );
                return -1 === i;
              }
              if (!n || "object" == typeof t) {
                for (n in ((i = 0), t))
                  if (
                    (s.call(t, n) && ++i && !s.call(r, n)) ||
                    !(n in r) ||
                    !e(t[n], r[n])
                  )
                    return !1;
                return Object.keys(r).length === i;
              }
            }
            return t != t && r != r;
          };
        },
        wY: function () {
          return a;
        },
      });
      let s = Object.prototype.hasOwnProperty;
    },
    72003: function (e, t, r) {
      "use strict";
      let n;
      r.d(t, {
        F: function () {
          return nz;
        },
      });
      var i,
        o,
        l,
        a,
        s,
        c = r(70079),
        u = r(29879),
        d = r(95182),
        h = r(55009),
        f = r(90757),
        p = r(56707),
        g = r(89678),
        m = r(15777);
      function v(e, t, r, n, i = !1) {
        let o = c.useRef();
        (o.current = t),
          c.useEffect(() => {
            if (null === r || void 0 === r.addEventListener) return;
            let t = (e) => {
              o.current?.call(r, e);
            };
            return (
              r.addEventListener(e, t, { passive: n, capture: i }),
              () => {
                r.removeEventListener(e, t, { capture: i });
              }
            );
          }, [e, r, n, i]);
      }
      function w(e, t) {
        return void 0 === e ? void 0 : t;
      }
      let y = Math.PI,
        b = (e, t, r) => ({
          x1: e - r / 2,
          y1: t - r / 2,
          x2: e + r / 2,
          y2: t + r / 2,
        }),
        x = (e, t, r, n, i) => {
          switch (e) {
            case "left":
              return Math.floor(t) + n + i / 2;
            case "center":
              return Math.floor(t + r / 2);
            case "right":
              return Math.floor(t + r) - n - i / 2;
          }
        },
        k = (e, t, r) => Math.min(e, t - 2 * r),
        S = (e, t, r) => r.x1 <= e && e <= r.x2 && r.y1 <= t && t <= r.y2,
        C = (e) => {
          let t = e.fgColor ?? "currentColor";
          return c.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            c.createElement("path", {
              d: "M12.7073 7.05029C7.87391 11.8837 10.4544 9.30322 6.03024 13.7273C5.77392 13.9836 5.58981 14.3071 5.50189 14.6587L4.52521 18.5655C4.38789 19.1148 4.88543 19.6123 5.43472 19.475L9.34146 18.4983C9.69313 18.4104 10.0143 18.2286 10.2706 17.9722L16.9499 11.2929",
              stroke: t,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              fill: "none",
              vectorEffect: "non-scaling-stroke",
            }),
            c.createElement("path", {
              d: "M20.4854 4.92901L19.0712 3.5148C18.2901 2.73375 17.0238 2.73375 16.2428 3.5148L14.475 5.28257C15.5326 7.71912 16.4736 8.6278 18.7176 9.52521L20.4854 7.75744C21.2665 6.97639 21.2665 5.71006 20.4854 4.92901Z",
              stroke: t,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              fill: "none",
              vectorEffect: "non-scaling-stroke",
            })
          );
        },
        _ = (e) => {
          let t = e.fgColor ?? "currentColor";
          return c.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            c.createElement("path", {
              d: "M19 6L10.3802 17L5.34071 11.8758",
              vectorEffect: "non-scaling-stroke",
              stroke: t,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        },
        R = RegExp(
          "^[^A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿]*[֑-߿יִ-﷽ﹰ-ﻼ]"
        );
      function E(e) {
        return R.test(e) ? "rtl" : "not-rtl";
      }
      function M() {
        if ("undefined" == typeof document) return 0;
        if (void 0 !== n) return n;
        let e = document.createElement("p");
        (e.style.width = "100%"), (e.style.height = "200px");
        let t = document.createElement("div");
        (t.id = "testScrollbar"),
          (t.style.position = "absolute"),
          (t.style.top = "0px"),
          (t.style.left = "0px"),
          (t.style.visibility = "hidden"),
          (t.style.width = "200px"),
          (t.style.height = "150px"),
          (t.style.overflow = "hidden"),
          t.append(e),
          document.body.append(t);
        let r = e.offsetWidth;
        t.style.overflow = "scroll";
        let i = e.offsetWidth;
        return r === i && (i = t.clientWidth), t.remove(), (n = r - i);
      }
      let I = Symbol();
      function T(e) {
        if (0 === e.length) return "";
        let t = 0,
          r = 0;
        for (let n of e) {
          if ((r += n.length) > 1e4) break;
          t++;
        }
        return e.slice(0, t).join(", ");
      }
      var O = new Map(),
        P = new Map(),
        z = new Map();
      function A(e, t, r, n) {
        var i, o;
        let l = P.get(r);
        if (n && void 0 !== l && l.count > 2e4) {
          let n = z.get(r);
          if (
            (void 0 === n &&
              ((n = (function (e, t) {
                var r;
                let n = new Map(),
                  i = 0;
                for (let t of "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.-+=?") {
                  let r = e.measureText(t).width;
                  n.set(t, r), (i += r);
                }
                let o = i / n.size,
                  l = (t / o + 3) / 4;
                for (let e of n.keys())
                  n.set(e, (null != (r = n.get(e)) ? r : o) * l);
                return n;
              })(e, l.size)),
              z.set(r, n)),
            l.count > 5e5)
          ) {
            let e = 0;
            for (let r of t) e += null != (i = n.get(r)) ? i : l.size;
            return 1.01 * e;
          }
          let o = e.measureText(t);
          return (
            (function (e, t, r, n, i) {
              var o, l, a;
              let s = 0,
                c = {};
              for (let t of e)
                (s += null != (o = r.get(t)) ? o : i),
                  (c[t] = (null != (l = c[t]) ? l : 0) + 1);
              let u = t - s;
              for (let e of Object.keys(c)) {
                let t = c[e],
                  o = null != (a = r.get(e)) ? a : i,
                  l = (u * ((o * t) / s) * n) / t,
                  d = o + l;
                r.set(e, d);
              }
            })(t, o.width, n, Math.max(0.05, 1 - l.count / 2e5), l.size),
            P.set(r, { count: l.count + t.length, size: l.size }),
            o.width
          );
        }
        let a = e.measureText(t),
          s = a.width / t.length;
        if ((null != (o = null == l ? void 0 : l.count) ? o : 0) > 2e4)
          return a.width;
        if (void 0 === l) P.set(r, { count: t.length, size: s });
        else {
          let e = s - l.size,
            n = t.length / (l.count + t.length),
            i = l.size + e * n;
          P.set(r, { count: l.count + t.length, size: i });
        }
        return a.width;
      }
      function L(e, t) {
        return (e ?? "") === (t ?? "");
      }
      function D(e, t) {
        let [r, n] = e;
        return r >= t.x && r < t.x + t.width && n >= t.y && n < t.y + t.height;
      }
      function H(e, t) {
        return e?.[0] === t?.[0] && e?.[1] === t?.[1];
      }
      function F(e) {
        return [e.x + e.width - 1, e.y + e.height - 1];
      }
      function $(e, t, r) {
        let n = r.x,
          i = r.x + r.width - 1,
          o = r.y,
          l = r.y + r.height - 1,
          [a, s] = e;
        if (s < o || s > l) return !1;
        if (void 0 === t.span) return a >= n && a <= i;
        let [c, u] = t.span;
        return (c >= n && c <= i) || (u >= n && c <= i) || (c < n && u > i);
      }
      function N(e, t) {
        let r = e;
        if (void 0 !== t) {
          let n = [...e],
            i = r[t.src];
          t.src > t.dest
            ? (n.splice(t.src, 1), n.splice(t.dest, 0, i))
            : (n.splice(t.dest + 1, 0, i), n.splice(t.src, 1)),
            (r = n = n.map((t, r) => ({ ...t, sticky: e[r].sticky })));
        }
        return r;
      }
      function B(e, t) {
        let r = 0,
          n = N(e, t);
        for (let e = 0; e < n.length; e++) {
          let t = n[e];
          if (t.sticky) r += t.width;
          else break;
        }
        return r;
      }
      function V(e, t, r) {
        if ("number" == typeof r) return t * r;
        {
          let n = 0;
          for (let i = e - t; i < e; i++) n += r(i);
          return n;
        }
      }
      function W(e, t, r, n, i) {
        let o = N(e, n),
          l = [];
        for (let e of o)
          if (e.sticky) l.push(e);
          else break;
        if (l.length > 0) for (let e of l) r -= e.width;
        let a = t,
          s = i ?? 0;
        for (; s <= r && a < o.length; ) (s += o[a].width), a++;
        for (let e = t; e < a; e++) {
          let t = o[e];
          t.sticky || l.push(t);
        }
        return l;
      }
      let j = 0,
        U = {},
        q = "undefined" == typeof window;
      function X(e, t, r, n) {
        return `${e}_${n ?? t?.font}_${r}`;
      }
      function K(e, t, r) {
        let n = X(e, t, "middle", r),
          i = U[n];
        return (
          void 0 === i && ((i = t.measureText(e)), (U[n] = i), j++),
          j > 1e4 && ((U = {}), (j = 0)),
          i
        );
      }
      function Y(e, t) {
        return (
          "string" != typeof t && (t = t.baseFontFull),
          (function (e, t) {
            for (let e of J) if (e.key === t) return e.val;
            let r = G(e, "alphabetic"),
              n = G(e, "middle"),
              i =
                -(n.actualBoundingBoxDescent - r.actualBoundingBoxDescent) +
                r.actualBoundingBoxAscent / 2;
            return J.push({ key: t, val: i }), i;
          })(e, t)
        );
      }
      function G(e, t) {
        e.save(), (e.textBaseline = t);
        let r = e.measureText("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        return e.restore(), r;
      }
      !(async function () {
        q ||
          document?.fonts?.ready === void 0 ||
          (await document.fonts.ready,
          (j = 0),
          (U = {}),
          O.clear(),
          z.clear(),
          P.clear());
      })();
      let J = [];
      function Q(e, t, r) {
        let { ctx: n, theme: i } = e,
          o = t ?? {},
          l = r ?? i.textDark;
        return l !== o.fillStyle && ((n.fillStyle = l), (o.fillStyle = l)), o;
      }
      function Z(e, t, r, n, i, o, l, a, s) {
        "right" === s
          ? e.fillText(
              t,
              r + i - (a.cellHorizontalPadding + 0.5),
              n + o / 2 + l
            )
          : "center" === s
            ? e.fillText(t, r + i / 2, n + o / 2 + l)
            : e.fillText(t, r + a.cellHorizontalPadding + 0.5, n + o / 2 + l);
      }
      function ee(e, t) {
        let r = K("ABCi09jgqpy", e, t);
        return r.actualBoundingBoxAscent + r.actualBoundingBoxDescent;
      }
      function et(e, t, r, n, i) {
        let { ctx: o, rect: l, theme: a } = e,
          { x: s, y: c, width: u, height: d } = l;
        (n = n ?? !1) ||
          (t = (function (e, t) {
            e.includes("\n") && (e = e.split(/\r?\n/, 1)[0]);
            let r = t / 4;
            return e.length > r && (e = e.slice(0, r)), e;
          })(t, u));
        let h = Y(o, a),
          f = "rtl" === E(t);
        if (
          (void 0 === r && f && (r = "right"),
          f && (o.direction = "rtl"),
          t.length > 0)
        ) {
          let e = !1;
          "right" === r
            ? ((o.textAlign = "right"), (e = !0))
            : void 0 !== r && "left" !== r && ((o.textAlign = r), (e = !0)),
            n
              ? (function (e, t, r, n, i, o, l, a, s, c) {
                  let u = a.baseFontFull,
                    d = (function (e, t, r, n, i, o) {
                      let l = `${t}_${r}_${n}px`,
                        a = O.get(l);
                      if (void 0 !== a) return a;
                      if (n <= 0) return [];
                      let s = [],
                        c = t.split(`
`),
                        u = P.get(r),
                        d = void 0 === u ? t.length : (n / u.size) * 1.5,
                        h = i && void 0 !== u && u.count > 2e4;
                      for (let t of c) {
                        let i = A(e, t.slice(0, Math.max(0, d)), r, h),
                          o = Math.min(t.length, d);
                        if (i <= n) s.push(t);
                        else {
                          for (; i > n; ) {
                            let l = (function (e, t, r, n, i, o, l, a) {
                                if (t.length <= 1) return t.length;
                                if (i < r) return -1;
                                let s = Math.floor((r / i) * o),
                                  c = A(e, t.slice(0, Math.max(0, s)), n, l),
                                  u = null == a ? void 0 : a(t);
                                if (c !== r) {
                                  if (c < r) {
                                    for (; c < r; )
                                      s++,
                                        (c = A(
                                          e,
                                          t.slice(0, Math.max(0, s)),
                                          n,
                                          l
                                        ));
                                    s--;
                                  } else
                                    for (; c > r; ) {
                                      let r =
                                        void 0 !== u
                                          ? 0
                                          : t.lastIndexOf(" ", s - 1);
                                      r > 0 ? (s = r) : s--,
                                        (c = A(
                                          e,
                                          t.slice(0, Math.max(0, s)),
                                          n,
                                          l
                                        ));
                                    }
                                }
                                if (" " !== t[s]) {
                                  let e = 0;
                                  if (void 0 === u) e = t.lastIndexOf(" ", s);
                                  else
                                    for (let t of u) {
                                      if (t > s) break;
                                      e = t;
                                    }
                                  e > 0 && (s = e);
                                }
                                return s;
                              })(e, t, n, r, i, o, h, void 0),
                              a = t.slice(0, Math.max(0, l));
                            (t = t.slice(a.length)),
                              s.push(a),
                              (i = A(e, t.slice(0, Math.max(0, d)), r, h)),
                              (o = Math.min(t.length, d));
                          }
                          i > 0 && s.push(t);
                        }
                      }
                      return (
                        (s = s.map((e, t) =>
                          0 === t ? e.trimEnd() : e.trim()
                        )),
                        O.set(l, s),
                        O.size > 500 && O.delete(O.keys().next().value),
                        s
                      );
                    })(e, t, u, i - 2 * a.cellHorizontalPadding, c ?? !1),
                    h = ee(e, u),
                    f = a.lineHeight * h,
                    p = h + f * (d.length - 1),
                    g = p + a.cellVerticalPadding > o;
                  g && (e.save(), e.rect(r, n, i, o), e.clip());
                  let m = Math.max(
                    n + a.cellVerticalPadding,
                    n + o / 2 - p / 2
                  );
                  for (let t of d)
                    if ((Z(e, t, r, m, i, h, l, a, s), (m += f) > n + o)) break;
                  g && e.restore();
                })(o, t, s, c, u, d, h, a, r, i)
              : Z(o, t, s, c, u, d, h, a, r),
            e && (o.textAlign = "start"),
            f && (o.direction = "inherit");
        }
      }
      function er(e, t, r, n, i, o) {
        "number" == typeof o && (o = { tl: o, tr: o, br: o, bl: o }),
          (o = {
            tl: Math.max(0, Math.min(o.tl, i / 2, n / 2)),
            tr: Math.max(0, Math.min(o.tr, i / 2, n / 2)),
            bl: Math.max(0, Math.min(o.bl, i / 2, n / 2)),
            br: Math.max(0, Math.min(o.br, i / 2, n / 2)),
          }),
          e.moveTo(t + o.tl, r),
          e.arcTo(t + n, r, t + n, r + o.tr, o.tr),
          e.arcTo(t + n, r + i, t + n - o.br, r + i, o.br),
          e.arcTo(t, r + i, t, r + i - o.bl, o.bl),
          e.arcTo(t, r, t + o.tl, r, o.tl);
      }
      function en(e, t, r, n, i, o, l, a, s, c, u, d, h, f, p) {
        let g = { x: 0, y: o + c, width: 0, height: 0 };
        if (e >= f.length || t >= u || t < -2 || e < 0) return g;
        if (e >= d) {
          let t = l > e ? -1 : 1,
            r = B(f);
          g.x += r + s;
          for (let r = l; r !== e; r += t)
            g.x += f[1 === t ? r : r - 1].width * t;
        } else for (let t = 0; t < e; t++) g.x += f[t].width;
        if (((g.width = f[e].width + 1), -1 === t))
          (g.y = i), (g.height = o - i);
        else if (-2 === t) {
          (g.y = 0), (g.height = i);
          let t = e,
            n = f[e].group,
            o = f[e].sticky;
          for (; t > 0 && L(f[t - 1].group, n) && f[t - 1].sticky === o; ) {
            let e = f[t - 1];
            (g.x -= e.width), (g.width += e.width), t--;
          }
          let l = e;
          for (
            ;
            l + 1 < f.length && L(f[l + 1].group, n) && f[l + 1].sticky === o;
          ) {
            let e = f[l + 1];
            (g.width += e.width), l++;
          }
          if (!o) {
            let e = B(f),
              t = g.x - e;
            t < 0 && ((g.x -= t), (g.width += t)),
              g.x + g.width > r && (g.width = r - g.x);
          }
        } else if (t >= u - h) {
          let e = u - t;
          for (g.y = n; e > 0; ) {
            let r = t + e - 1;
            (g.height = "number" == typeof p ? p : p(r)),
              (g.y -= g.height),
              e--;
          }
          g.height += 1;
        } else {
          let e = a > t ? -1 : 1;
          if ("number" == typeof p) g.y += (t - a) * p;
          else for (let r = a; r !== t; r += e) g.y += p(r) * e;
          g.height = ("number" == typeof p ? p : p(t)) + 1;
        }
        return g;
      }
      function ei(e, t) {
        return (t + 2) * 2097152 + e;
      }
      function eo(e) {
        return Math.floor(e / 2097152) - 2;
      }
      function el(e) {
        let t = eo(e);
        return [e % 2097152, t];
      }
      class ea {
        visibleWindow = { x: 0, y: 0, width: 0, height: 0 };
        freezeCols = 0;
        freezeRows = [];
        isInWindow = (e) => {
          let t = e % 2097152,
            r = eo(e),
            n = this.visibleWindow,
            i = (t >= n.x && t <= n.x + n.width) || t < this.freezeCols,
            o =
              (r >= n.y && r <= n.y + n.height) || this.freezeRows.includes(r);
          return i && o;
        };
        setWindow(e, t, r) {
          (this.visibleWindow.x === e.x &&
            this.visibleWindow.y === e.y &&
            this.visibleWindow.width === e.width &&
            this.visibleWindow.height === e.height &&
            this.freezeCols === t &&
            (0, u.vZ)(this.freezeRows, r)) ||
            ((this.visibleWindow = e),
            (this.freezeCols = t),
            (this.freezeRows = r),
            this.clearOutOfWindow());
        }
      }
      class es extends ea {
        cache = new Map();
        setValue = (e, t) => {
          this.cache.set(ei(e[0], e[1]), t);
        };
        getValue = (e) => this.cache.get(ei(e[0], e[1]));
        clearOutOfWindow = () => {
          for (let [e] of this.cache.entries())
            this.isInWindow(e) || this.cache.delete(e);
        };
      }
      class ec {
        cells;
        constructor(e = []) {
          this.cells = new Set(e.map((e) => ei(e[0], e[1])));
        }
        add(e) {
          this.cells.add(ei(e[0], e[1]));
        }
        has(e) {
          return void 0 !== e && this.cells.has(ei(e[0], e[1]));
        }
        remove(e) {
          this.cells.delete(ei(e[0], e[1]));
        }
        clear() {
          this.cells.clear();
        }
        get size() {
          return this.cells.size;
        }
        hasHeader() {
          for (let e of this.cells) {
            let t = eo(e);
            if (t < 0) return !0;
          }
          return !1;
        }
        hasItemInRectangle(e) {
          for (let t = e.y; t < e.y + e.height; t++)
            for (let r = e.x; r < e.x + e.width; r++)
              if (this.cells.has(ei(r, t))) return !0;
          return !1;
        }
        hasItemInRegion(e) {
          for (let t of e) if (this.hasItemInRectangle(t)) return !0;
          return !1;
        }
        *values() {
          for (let e of this.cells) yield el(e);
        }
      }
      class eu {
        onSettled;
        spriteMap = new Map();
        headerIcons;
        inFlight = 0;
        constructor(e, t) {
          (this.onSettled = t), (this.headerIcons = e ?? {});
        }
        drawSprite(e, t, r, n, i, o, l, a = 1) {
          let [s, c] =
              "normal" === t
                ? [l.bgIconHeader, l.fgIconHeader]
                : "selected" === t
                  ? ["white", l.accentColor]
                  : [l.accentColor, l.bgHeader],
            u = o * Math.ceil(window.devicePixelRatio),
            d = `${s}_${c}_${u}_${e}`,
            h = this.spriteMap.get(d);
          if (void 0 === h) {
            let t = this.headerIcons[e];
            if (void 0 === t) return;
            h = document.createElement("canvas");
            let r = h.getContext("2d");
            if (null === r) return;
            let n = new Image();
            (n.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
              t({ fgColor: c, bgColor: s })
            )}`),
              this.spriteMap.set(d, h);
            let i = n.decode();
            if (void 0 === i) return;
            this.inFlight++,
              i
                .then(() => {
                  r.drawImage(n, 0, 0, u, u);
                })
                .finally(() => {
                  this.inFlight--, 0 === this.inFlight && this.onSettled();
                });
          } else
            a < 1 && (r.globalAlpha = a),
              r.drawImage(h, 0, 0, u, u, n, i, o, o),
              a < 1 && (r.globalAlpha = 1);
        }
      }
      var ed = r(14015),
        eh = r(75329);
      let ef = {},
        ep = null;
      function eg(e) {
        let t = e.toLowerCase().trim();
        if (void 0 !== ef[t]) return ef[t];
        ((ep =
          ep ||
          (function () {
            let e = document.createElement("div");
            return (
              (e.style.opacity = "0"),
              (e.style.pointerEvents = "none"),
              (e.style.position = "fixed"),
              document.body.append(e),
              e
            );
          })()).style.color = "#000"),
          (ep.style.color = t);
        let r = getComputedStyle(ep).color;
        (ep.style.color = "#fff"), (ep.style.color = t);
        let n = getComputedStyle(ep).color;
        if (n !== r) return [0, 0, 0, 1];
        let i = n
          .replace(/[^\d.,]/g, "")
          .split(",")
          .map(Number.parseFloat);
        return (
          i.length < 4 && i.push(1),
          (i = i.map((e) => {
            let t = Number.isNaN(e);
            return t ? 0 : e;
          })),
          (ef[t] = i),
          i
        );
      }
      function em(e, t) {
        let [r, n, i] = eg(e);
        return `rgba(${r}, ${n}, ${i}, ${t})`;
      }
      function ev(e, t) {
        if (void 0 === t) return e;
        let [r, n, i, o] = eg(e);
        if (1 === o) return e;
        let [l, a, s, c] = eg(t),
          u = o + c * (1 - o);
        return `rgba(${(o * r + c * l * (1 - o)) / u}, ${
          (o * n + c * a * (1 - o)) / u
        }, ${(o * i + c * s * (1 - o)) / u}, ${u})`;
      }
      function ew(
        e,
        t,
        r,
        n,
        i,
        o,
        l,
        a,
        s = -20,
        c = -20,
        d = 32,
        h = "center"
      ) {
        let f = Math.floor(i + l / 2),
          p = t.roundingRadius ?? 4,
          g = k(d, l, t.cellVerticalPadding),
          v = g / 2,
          w = x(h, n, o, t.cellHorizontalPadding, g),
          y = b(w, f, g),
          C = S(n + s, i + c, y);
        switch (r) {
          case !0:
            e.beginPath(),
              er(e, w - g / 2, f - g / 2, g, g, p),
              (e.fillStyle = a ? t.accentColor : t.textMedium),
              e.fill(),
              e.beginPath(),
              e.moveTo(w - v + g / 4.23, f - v + g / 1.97),
              e.lineTo(w - v + g / 2.42, f - v + g / 1.44),
              e.lineTo(w - v + g / 1.29, f - v + g / 3.25),
              (e.strokeStyle = t.bgCell),
              (e.lineJoin = "round"),
              (e.lineCap = "round"),
              (e.lineWidth = 1.9),
              e.stroke();
            break;
          case m.qF:
          case !1:
            e.beginPath(),
              er(e, w - g / 2 + 0.5, f - g / 2 + 0.5, g - 1, g - 1, p),
              (e.lineWidth = 1),
              (e.strokeStyle = C ? t.textDark : t.textMedium),
              e.stroke();
            break;
          case m.sd:
            e.beginPath(),
              er(e, w - g / 2, f - g / 2, g, g, p),
              (e.fillStyle = C ? t.textMedium : t.textLight),
              e.fill(),
              e.beginPath(),
              e.moveTo(w - g / 3, f),
              e.lineTo(w + g / 3, f),
              (e.strokeStyle = t.bgCell),
              (e.lineCap = "round"),
              (e.lineWidth = 1.9),
              e.stroke();
            break;
          default:
            (0, u.vE)(r);
        }
      }
      function ey(e, t) {
        let r = Math.min(e.x, t.x),
          n = Math.min(e.y, t.y),
          i = Math.max(e.x + e.width, t.x + t.width) - r,
          o = Math.max(e.y + e.height, t.y + t.height) - n;
        return { x: r, y: n, width: i, height: o };
      }
      let eb = { kind: m.p6.Loading, allowOverlay: !1 },
        ex = [0, 0],
        ek = { x: 0, y: 0, width: 0, height: 0 },
        eS = [void 0, () => void 0],
        eC = !1;
      function e_() {
        eC = !0;
      }
      function eR(
        e,
        t,
        r,
        n,
        i,
        o,
        l,
        a,
        s,
        c,
        u,
        d,
        h,
        f,
        p,
        g,
        v,
        w,
        y,
        b,
        x,
        k,
        S,
        C,
        _
      ) {
        let R, E, M;
        void 0 !== v &&
          v[0][0] === r &&
          v[0][1] === n &&
          ((R = v[1][0]), (E = v[1][1])),
          (ex[0] = r),
          (ex[1] = n),
          (ek.x = l),
          (ek.y = a),
          (ek.width = s),
          (ek.height = c),
          (eS[0] = S.getValue(ex)),
          (eS[1] = (e) => S.setValue(ex, e)),
          (eC = !1);
        let I = {
            ctx: e,
            theme: d,
            col: r,
            row: n,
            cell: t,
            rect: ek,
            highlighted: u,
            cellFillColor: h,
            hoverAmount: g,
            frameTime: y,
            hoverX: R,
            drawState: eS,
            hoverY: E,
            imageLoader: f,
            spriteManager: p,
            hyperWrapping: w,
            overrideCursor: void 0 !== R ? _ : void 0,
            requestAnimationFrame: e_,
          },
          T = (function (e, t, r, n, i, o) {
            let { ctx: l, rect: a, theme: s } = e,
              c = Number.MAX_SAFE_INTEGER;
            if (void 0 !== t && (c = r - t) < 500) {
              let e = 1 - c / 500;
              (l.globalAlpha = e),
                (l.fillStyle = s.bgSearchResult),
                l.fillRect(
                  a.x + 1,
                  a.y + 1,
                  a.width - (i ? 2 : 1),
                  a.height - (o ? 2 : 1)
                ),
                (l.globalAlpha = 1),
                void 0 !== n && (n.fillStyle = s.bgSearchResult);
            }
            return c < 500;
          })(I, t.lastUpdated, y, x, i, o),
          O = C(t);
        if (void 0 !== O) {
          x?.renderer !== O && (x?.deprep?.(I), (x = void 0));
          let e = O.drawPrep?.(I, x);
          void 0 === b || (0, m.rs)(I.cell)
            ? O.draw(I, t)
            : b(I, () => O.draw(I, t)),
            (M =
              void 0 === e
                ? void 0
                : {
                    deprep: e?.deprep,
                    fillStyle: e?.fillStyle,
                    font: e?.font,
                    renderer: O,
                  });
        }
        return (T || eC) && k?.(ex), M;
      }
      function eE(e, t, r, n, i, o, l, a, s, c, u, d, h, f, p, g, m, v = !1) {
        if (void 0 !== s) {
          for (let t of (e.beginPath(), e.save(), e.rect(0, 0, o, l), s))
            e.rect(t.x + 1, t.y + 1, t.width - 1, t.height - 1);
          e.clip("evenodd");
        }
        let w = m.horizontalBorderColor ?? m.borderColor,
          y = m.borderColor,
          b = 0,
          x = o,
          k = 0,
          S = l;
        if (void 0 !== a && a.length > 0)
          for (let e of ((b = Number.MAX_SAFE_INTEGER),
          (k = Number.MAX_SAFE_INTEGER),
          (x = Number.MIN_SAFE_INTEGER),
          (S = Number.MIN_SAFE_INTEGER),
          a))
            (b = Math.min(b, e.x - 1)),
              (x = Math.max(x, e.x + e.width + 1)),
              (k = Math.min(k, e.y - 1)),
              (S = Math.max(S, e.y + e.height + 1));
        let C = [];
        e.beginPath();
        let _ = 0.5;
        for (let e = 0; e < t.length; e++) {
          let r = t[e];
          if (0 === r.width) continue;
          _ += r.width;
          let i = r.sticky ? _ : _ + n;
          i >= b &&
            i <= x &&
            f(e + 1) &&
            C.push({
              x1: i,
              y1: Math.max(c, k),
              x2: i,
              y2: Math.min(l, S),
              color: y,
            });
        }
        let R = l + 0.5;
        for (let e = g - p; e < g; e++) {
          let t = d(e);
          (R -= t), C.push({ x1: b, y1: R, x2: x, y2: R, color: w });
        }
        if (!0 !== v) {
          let e = u + 0.5,
            t = r,
            n = R;
          for (; e + i < n; ) {
            let r = e + i;
            if (r >= k && r <= S - 1) {
              let e = h?.(t);
              C.push({
                x1: b,
                y1: r,
                x2: x,
                y2: r,
                color: e?.horizontalBorderColor ?? e?.borderColor ?? w,
              });
            }
            (e += d(t)), t++;
          }
        }
        let E = ed(C, (e) => e.color);
        for (let t of Object.keys(E)) {
          for (let r of ((e.strokeStyle = t), E[t]))
            e.moveTo(r.x1, r.y1), e.lineTo(r.x2, r.y2);
          e.stroke(), e.beginPath();
        }
        void 0 !== s && e.restore();
      }
      function eM(e, t) {
        let r = [],
          n = e.x + e.width - 26 * t.length,
          i = e.y + e.height / 2 - 13;
        for (let e = 0; e < t.length; e++)
          r.push({ x: n, y: i, width: 26, height: 26 }), (n += 26);
        return r;
      }
      function eI(e, t, r) {
        return (
          t >= e.x && t <= e.x + e.width && r >= e.y && r <= e.y + e.height
        );
      }
      function eT(e, t, r, n, i) {
        return i
          ? { x: e, y: t, width: 30, height: Math.min(30, n) }
          : {
              x: e + r - 30,
              y: Math.max(t, t + n / 2 - 15),
              width: 30,
              height: Math.min(30, n),
            };
      }
      function eO(e, t, r, n, i, o, l, a, s, c, u, d, h, f, p) {
        if (f) {
          let l;
          o.title === m.qT && (l = !0),
            o.title === m.YK && (l = !1),
            !0 !== l && (e.globalAlpha = c),
            ew(e, a, l, t, r, n, i, !1, void 0, void 0, 18),
            !0 !== l && (e.globalAlpha = 1);
          return;
        }
        let g = a.cellHorizontalPadding,
          v = l ? a.textHeaderSelected : a.textHeader,
          w = !0 === o.hasMenu && (s || (d && l)),
          y = h ? t + n - g : t + g;
        if (void 0 !== o.icon) {
          let t = l ? "selected" : "normal";
          "highlight" === o.style && (t = l ? "selected" : "special");
          let n = a.headerIconSize;
          u.drawSprite(o.icon, t, e, h ? y - n : y, r + (i - n) / 2, n, a),
            void 0 !== o.overlayIcon &&
              u.drawSprite(
                o.overlayIcon,
                l ? "selected" : "special",
                e,
                h ? y - n + 9 : y + 9,
                r + ((i - 18) / 2 + 6),
                18,
                a
              ),
            (y += Math.ceil(1.3 * n) * (h ? -1 : 1));
        }
        if (w && !0 === o.hasMenu && n > 35) {
          let r = e.createLinearGradient(t, 0, t + n, 0),
            i = em(v, 0);
          r.addColorStop(h ? 1 : 0, v),
            r.addColorStop((h ? 35 : n - 35) / n, v),
            r.addColorStop((h ? 24.5 : n - 24.5) / n, i),
            r.addColorStop(h ? 0 : 1, i),
            (e.fillStyle = r);
        } else e.fillStyle = v;
        if (
          (h && (e.textAlign = "right"),
          e.fillText(o.title, y, r + i / 2 + Y(e, a.headerFontFull)),
          h && (e.textAlign = "left"),
          w && !0 === o.hasMenu)
        ) {
          if (void 0 === o.menuIcon || o.menuIcon === m.pN.Triangle) {
            e.beginPath();
            let t = p.x + p.width / 2 - 5.5,
              r = p.y + p.height / 2 - 3;
            !(function (e, t, r) {
              let n;
              let i = function (e, t) {
                  let r = t.x - e.x,
                    n = t.y - e.y,
                    i = Math.sqrt(r * r + n * n),
                    o = r / i,
                    l = n / i;
                  return {
                    x: r,
                    y: t.y - e.y,
                    len: i,
                    nx: o,
                    ny: l,
                    ang: Math.atan2(l, o),
                  };
                },
                o = t.length,
                l = t[o - 1];
              for (let r = 0; r < o; r++) {
                let a,
                  s = t[r % o],
                  c = t[(r + 1) % o],
                  u = i(s, l),
                  d = i(s, c),
                  h = u.nx * d.ny - u.ny * d.nx,
                  f = u.nx * d.nx - -(u.ny * d.ny),
                  p = Math.asin(h < -1 ? -1 : h > 1 ? 1 : h),
                  g = 1,
                  m = !1;
                f < 0
                  ? p < 0
                    ? (p = Math.PI + p)
                    : ((p = Math.PI - p), (g = -1), (m = !0))
                  : p > 0 && ((g = -1), (m = !0)),
                  (n = void 0 !== s.radius ? s.radius : 1);
                let v = p / 2,
                  w = Math.abs((Math.cos(v) * n) / Math.sin(v));
                a =
                  w > Math.min(u.len / 2, d.len / 2)
                    ? Math.abs(
                        ((w = Math.min(u.len / 2, d.len / 2)) * Math.sin(v)) /
                          Math.cos(v)
                      )
                    : n;
                let y = s.x + d.nx * w,
                  b = s.y + d.ny * w;
                (y += -d.ny * a * g),
                  (b += d.nx * a * g),
                  e.arc(
                    y,
                    b,
                    a,
                    u.ang + (Math.PI / 2) * g,
                    d.ang - (Math.PI / 2) * g,
                    m
                  ),
                  (l = s),
                  (s = c);
              }
              e.closePath();
            })(
              e,
              [
                { x: t, y: r },
                { x: t + 11, y: r },
                { x: t + 5.5, y: r + 6 },
              ],
              0
            ),
              (e.fillStyle = v),
              e.fill();
          } else if (o.menuIcon === m.pN.Dots) {
            e.beginPath();
            let t = p.x + p.width / 2,
              r = p.y + p.height / 2;
            e.arc(t, r - 4.375, 1.25, 0, 2 * Math.PI, !1),
              e.arc(t, r, 1.25, 0, 2 * Math.PI, !1),
              e.arc(t, r + 4.375, 1.25, 0, 2 * Math.PI, !1),
              (e.fillStyle = v),
              e.fill();
          } else {
            let t = p.x + (p.width - a.headerIconSize) / 2,
              r = p.y + (p.height - a.headerIconSize) / 2;
            u.drawSprite(o.menuIcon, "normal", e, t, r, a.headerIconSize, a);
          }
        }
      }
      function eP(e, t, r, n, i, o, l, a, s, c, u, d, h, f) {
        let p = o.title.startsWith(m.Gf),
          g = "rtl" === E(o.title),
          v = eT(t, r, n, i, g);
        if (void 0 !== h) {
          let m = o;
          p && (m = { ...o, title: "" }),
            h(
              {
                ctx: e,
                theme: a,
                rect: { x: t, y: r, width: n, height: i },
                column: m,
                columnIndex: m.sourceIndex,
                isSelected: l,
                hoverAmount: u,
                isHovered: s,
                hasSelectedCell: c,
                spriteManager: d,
                menuBounds: v,
              },
              () => eO(e, t, r, n, i, o, l, a, s, u, d, f, g, p, v)
            );
        } else eO(e, t, r, n, i, o, l, a, s, u, d, f, g, p, v);
      }
      function ez(e, t, r, n, i, o, l, a) {
        return e <= i + l && i <= e + r && t <= o + a && o <= t + n;
      }
      function eA(e, t, r, n, i, o, l) {
        let a, s;
        let [c, u] = e,
          d = l.find((e) => !e.sticky)?.sourceIndex ?? 0;
        if (u > d) {
          let e = Math.max(c, d),
            a = t,
            h = n;
          for (let t = o.sourceIndex - 1; t >= e; t--)
            (a -= l[t].width), (h += l[t].width);
          for (let e = o.sourceIndex + 1; e <= u; e++) h += l[e].width;
          s = { x: a, y: r, width: h, height: i };
        }
        if (d > c) {
          let e = Math.min(u, d - 1),
            s = t,
            h = n;
          for (let e = o.sourceIndex - 1; e >= c; e--)
            (s -= l[e].width), (h += l[e].width);
          for (let t = o.sourceIndex + 1; t <= e; t++) h += l[t].width;
          a = { x: s, y: r, width: h, height: i };
        }
        return [a, s];
      }
      function eL(
        e,
        t,
        r,
        n,
        i,
        o,
        l,
        a,
        s,
        c,
        u,
        d,
        h,
        f,
        p,
        g,
        v,
        w,
        y,
        b,
        x,
        k,
        S,
        C,
        _,
        R,
        E,
        M,
        I,
        T,
        O,
        P,
        z,
        A,
        L
      ) {
        let D,
          H,
          F = b?.size ?? Number.MAX_SAFE_INTEGER,
          N = performance.now(),
          B = T.baseFontFull;
        e.font = B;
        let W = { ctx: e },
          j = [0, 0],
          U = v > 0 ? V(s, v, c) : 0;
        return (
          eB(t, a, o, l, i, (t, o, l, a, V) => {
            let q;
            let X = Math.max(0, a - o),
              K = o + X,
              Y = i + 1,
              G = t.width - X,
              J = n - i - 1;
            if (y.length > 0) {
              let e = !1;
              for (let t = 0; t < y.length; t++) {
                let r = y[t];
                if (ez(K, Y, G, J, r.x, r.y, r.width, r.height)) {
                  e = !0;
                  break;
                }
              }
              if (!e) return;
            }
            let Q = () => {
                e.save(), e.beginPath(), e.rect(K, Y, G, J), e.clip();
              },
              Z = x.columns.hasIndex(t.sourceIndex),
              ee = d(t.group ?? "").overrideTheme,
              et =
                void 0 === t.themeOverride && void 0 === ee
                  ? T
                  : (0, eh.yR)(T, ee, t.themeOverride),
              er = et.baseFontFull;
            return (
              er !== B && ((B = er), (e.font = er)),
              Q(),
              eN(V, l, n, s, c, v, w, (i, l, c, d, v) => {
                let w, V;
                if (
                  l < 0 ||
                  ((j[0] = t.sourceIndex),
                  (j[1] = l),
                  void 0 !== b && !b.has(j))
                )
                  return;
                if (y.length > 0) {
                  let e = !1;
                  for (let r = 0; r < y.length; r++) {
                    let n = y[r];
                    if (ez(o, i, t.width, c, n.x, n.y, n.width, n.height)) {
                      e = !0;
                      break;
                    }
                  }
                  if (!e) return;
                }
                let X = x.rows.hasIndex(l),
                  K = f.hasIndex(l),
                  Y = l < s ? u(j) : eb,
                  G = o,
                  J = t.width,
                  ee = !1,
                  en = !1;
                if (void 0 !== Y.span) {
                  let [n, s] = Y.span,
                    u = `${l},${n},${s},${t.sticky}`;
                  if ((void 0 === D && (D = new Set()), D.has(u))) {
                    F--;
                    return;
                  }
                  {
                    let n = eA(Y.span, o, i, t.width, c, t, r),
                      l = t.sticky ? n[0] : n[1];
                    if (
                      (t.sticky || void 0 === n[0] || (en = !0), void 0 !== l)
                    ) {
                      (G = l.x),
                        (J = l.width),
                        D.add(u),
                        e.restore(),
                        (q = void 0),
                        e.save(),
                        e.beginPath();
                      let t = Math.max(0, a - l.x);
                      e.rect(l.x + t, i, l.width - t, c),
                        void 0 === H && (H = []),
                        H.push({
                          x: l.x + t,
                          y: i,
                          width: l.width - t,
                          height: c,
                        }),
                        e.clip(),
                        (ee = !0);
                    }
                  }
                }
                let ei = h?.(l),
                  eo =
                    v && t.trailingRowOptions?.themeOverride !== void 0
                      ? t.trailingRowOptions?.themeOverride
                      : void 0,
                  el =
                    void 0 === Y.themeOverride && void 0 === ei && void 0 === eo
                      ? et
                      : (0, eh.yR)(et, ei, eo, Y.themeOverride);
                e.beginPath();
                let ea =
                    void 0 !== x.current &&
                    j[1] === x.current.cell[1] &&
                    (void 0 === Y.span
                      ? x.current.cell[0] === j[0]
                      : x.current.cell[0] >= Y.span[0] &&
                        x.current.cell[0] <= Y.span[1]),
                  es = (function (e, t, r) {
                    let n = 0;
                    if (void 0 === r.current) return n;
                    for (let i of ($(e, t, r.current.range) && n++,
                    r.current.rangeStack))
                      $(e, t, i) && n++;
                    return n;
                  })(j, Y, x),
                  ec =
                    void 0 !== Y.span &&
                    x.columns.some(
                      (e) =>
                        void 0 !== Y.span && e >= Y.span[0] && e <= Y.span[1]
                    );
                ea && !p && g ? (es = 0) : ea && (es = Math.max(es, 1)),
                  ec && es++,
                  !ea && (X && es++, Z && !v && es++);
                let eu =
                  Y.kind === m.p6.Protected ? el.bgCellMedium : el.bgCell;
                if (((d || eu !== T.bgCell) && (w = ev(eu, w)), es > 0 || K)) {
                  K && (w = ev(el.bgHeader, w));
                  for (let e = 0; e < es; e++) w = ev(el.accentLight, w);
                } else if (void 0 !== k) {
                  for (let e of k)
                    if (e[0] === t.sourceIndex && e[1] === l) {
                      w = ev(el.bgSearchResult, w);
                      break;
                    }
                }
                if (void 0 !== S)
                  for (let e = 0; e < S.length; e++) {
                    let r = S[e],
                      n = r.range;
                    "solid-outline" !== r.style &&
                      n.x <= t.sourceIndex &&
                      t.sourceIndex < n.x + n.width &&
                      n.y <= l &&
                      l < n.y + n.height &&
                      (w = ev(r.color, w));
                  }
                let ed = !1;
                if (void 0 !== b) {
                  let t = i + 1,
                    r = (d ? t + c - 1 : Math.min(t + c - 1, n - U)) - t;
                  (r !== c - 1 || G + 1 <= a) &&
                    ((ed = !0),
                    e.save(),
                    e.beginPath(),
                    e.rect(G + 1, t, J - 1, r),
                    e.clip()),
                    (w = void 0 === w ? el.bgCell : ev(w, el.bgCell));
                }
                let ef = t.sourceIndex === r.length - 1,
                  ep = l === s - 1;
                void 0 !== w &&
                  ((e.fillStyle = w),
                  void 0 !== q && (q.fillStyle = w),
                  void 0 !== b
                    ? e.fillRect(
                        G + 1,
                        i + 1,
                        J - (ef ? 2 : 1),
                        c - (ep ? 2 : 1)
                      )
                    : e.fillRect(G, i, J, c)),
                  "faded" === Y.style && (e.globalAlpha = 0.6);
                for (let e = 0; e < R.length; e++) {
                  let r = R[e];
                  if (r.item[0] === t.sourceIndex && r.item[1] === l) {
                    V = r;
                    break;
                  }
                }
                if (J > L && !en) {
                  let r = el.baseFontFull;
                  r !== B && ((e.font = r), (B = r)),
                    (q = eR(
                      e,
                      Y,
                      t.sourceIndex,
                      l,
                      ef,
                      ep,
                      G,
                      i,
                      J,
                      c,
                      es > 0,
                      el,
                      w ?? el.bgCell,
                      C,
                      _,
                      V?.hoverAmount ?? 0,
                      E,
                      I,
                      N,
                      M,
                      q,
                      O,
                      P,
                      z,
                      A
                    ));
                }
                return (
                  ed && e.restore(),
                  "faded" === Y.style && (e.globalAlpha = 1),
                  F--,
                  ee &&
                    (e.restore(),
                    q?.deprep?.(W),
                    (q = void 0),
                    Q(),
                    (B = er),
                    (e.font = er)),
                  F <= 0
                );
              }),
              e.restore(),
              F <= 0
            );
          }),
          H
        );
      }
      function eD(e, t, r, n, i, o, l, a, s, c, u, d, h, f, p, g) {
        let m = p?.filter((e) => "no-outline" !== e.style);
        if (void 0 === m || 0 === m.length) return;
        let v = B(a),
          w = V(f, h, d),
          y = [s, 0, a.length, f - h],
          b = [v, 0, t, r - w],
          x = m.map((e) => {
            let p = e.range,
              g = e.style ?? "dashed";
            return (function (e, t, r, n, i) {
              let [o, l, a, s] = t,
                [c, u, d, h] = i,
                { x: f, y: p, width: g, height: m } = e,
                v = [];
              if (g <= 0 || m <= 0) return v;
              let w = f + g,
                y = p + m,
                b = f < o,
                x = p < l,
                k = f + g > a,
                S = p + m > s,
                C = (f > o && f < a) || (w > o && w < a) || (f < o && w > a),
                _ = (p > l && p < s) || (y > l && y < s) || (p < l && y > s);
              if (C && _) {
                let e = Math.max(f, o),
                  t = Math.max(p, l);
                v.push({
                  rect: {
                    x: e,
                    y: t,
                    width: Math.min(w, a) - e,
                    height: Math.min(y, s) - t,
                  },
                  clip: { x: c, y: u, width: d - c + 1, height: h - u + 1 },
                });
              }
              if (
                (b &&
                  x &&
                  v.push({
                    rect: {
                      x: f,
                      y: p,
                      width: Math.min(w, o) - f,
                      height: Math.min(y, l) - p,
                    },
                    clip: { x: 0, y: 0, width: c + 1, height: u + 1 },
                  }),
                x && C)
              ) {
                let e = Math.max(f, o);
                v.push({
                  rect: {
                    x: e,
                    y: p,
                    width: Math.min(w, a) - e,
                    height: Math.min(y, l) - p,
                  },
                  clip: { x: c, y: 0, width: d - c + 1, height: u + 1 },
                });
              }
              if (x && k) {
                let e = Math.max(f, a);
                v.push({
                  rect: {
                    x: e,
                    y: p,
                    width: w - e,
                    height: Math.min(y, l) - p,
                  },
                  clip: { x: d, y: 0, width: r - d + 1, height: u + 1 },
                });
              }
              if (b && _) {
                let e = Math.max(p, l);
                v.push({
                  rect: {
                    x: f,
                    y: e,
                    width: Math.min(w, o) - f,
                    height: Math.min(y, s) - e,
                  },
                  clip: { x: 0, y: u, width: c + 1, height: h - u + 1 },
                });
              }
              if (k && _) {
                let e = Math.max(f, a),
                  t = Math.max(p, l);
                v.push({
                  rect: {
                    x: e,
                    y: t,
                    width: w - e,
                    height: Math.min(y, s) - t,
                  },
                  clip: { x: d, y: u, width: r - d + 1, height: h - u + 1 },
                });
              }
              if (b && S) {
                let e = Math.max(p, s);
                v.push({
                  rect: {
                    x: f,
                    y: e,
                    width: Math.min(w, o) - f,
                    height: y - e,
                  },
                  clip: { x: 0, y: h, width: c + 1, height: n - h + 1 },
                });
              }
              if (S && C) {
                let e = Math.max(f, o),
                  t = Math.max(p, s);
                v.push({
                  rect: {
                    x: e,
                    y: t,
                    width: Math.min(w, a) - e,
                    height: y - t,
                  },
                  clip: { x: c, y: h, width: d - c + 1, height: n - h + 1 },
                });
              }
              if (k && S) {
                let e = Math.max(f, a),
                  t = Math.max(p, s);
                v.push({
                  rect: { x: e, y: t, width: w - e, height: y - t },
                  clip: { x: d, y: h, width: r - d + 1, height: n - h + 1 },
                });
              }
              return v;
            })(p, y, t, r, b).map((p) => {
              let m = p.rect,
                v = en(m.x, m.y, t, r, u, c + u, n, i, o, l, f, s, h, a, d),
                w =
                  1 === m.width && 1 === m.height
                    ? v
                    : en(
                        m.x + m.width - 1,
                        m.y + m.height - 1,
                        t,
                        r,
                        u,
                        c + u,
                        n,
                        i,
                        o,
                        l,
                        f,
                        s,
                        h,
                        a,
                        d
                      );
              return (
                m.x + m.width >= a.length && (w.width -= 1),
                m.y + m.height >= f && (w.height -= 1),
                {
                  color: e.color,
                  style: g,
                  clip: p.clip,
                  rect: (function (e, t, r, n) {
                    if (
                      e.x > t ||
                      e.y > r ||
                      (e.x < 0 &&
                        e.y < 0 &&
                        e.x + e.width > t &&
                        e.y + e.height > r)
                    )
                      return;
                    if (
                      e.x >= 0 &&
                      e.y >= 0 &&
                      e.x + e.width <= t &&
                      e.y + e.height <= r
                    )
                      return e;
                    let i = -4 - e.x,
                      o = e.x + e.width - (t + 4),
                      l = -4 - e.y,
                      a = e.y + e.height - (r + 4),
                      s = i > 0 ? e.x + Math.floor(i / n) * n : e.x,
                      c =
                        o > 0
                          ? e.x + e.width - Math.floor(o / n) * n
                          : e.x + e.width,
                      u = l > 0 ? e.y + Math.floor(l / n) * n : e.y,
                      d =
                        a > 0
                          ? e.y + e.height - Math.floor(a / n) * n
                          : e.y + e.height;
                    return { x: s, y: u, width: c - s, height: d - u };
                  })(
                    {
                      x: v.x,
                      y: v.y,
                      width: w.x + w.width - v.x,
                      height: w.y + w.height - v.y,
                    },
                    t,
                    r,
                    8
                  ),
                }
              );
            });
          }),
          k = () => {
            e.lineWidth = 1;
            let n = !1;
            for (let l of x)
              for (let a of l)
                if (
                  a?.rect !== void 0 &&
                  ez(
                    0,
                    0,
                    t,
                    r,
                    a.rect.x,
                    a.rect.y,
                    a.rect.width,
                    a.rect.height
                  )
                ) {
                  var i, o;
                  let t = n,
                    r =
                      ((i = a.clip),
                      (o = a.rect),
                      !(i.x <= o.x) ||
                        !(i.y <= o.y) ||
                        !(i.x + i.width >= o.x + o.width) ||
                        !(i.y + i.height >= o.y + o.height));
                  r &&
                    (e.save(),
                    e.rect(a.clip.x, a.clip.y, a.clip.width, a.clip.height),
                    e.clip()),
                    "dashed" !== a.style || n
                      ? ("solid" === a.style || "solid-outline" === a.style) &&
                        n &&
                        (e.setLineDash([]), (n = !1))
                      : (e.setLineDash([5, 3]), (n = !0)),
                    (e.strokeStyle =
                      "solid-outline" === a.style
                        ? ev(ev(a.color, g.borderColor), g.bgCell)
                        : em(a.color, 1)),
                    e.strokeRect(
                      a.rect.x + 0.5,
                      a.rect.y + 0.5,
                      a.rect.width - 1,
                      a.rect.height - 1
                    ),
                    r && (e.restore(), (n = t));
                }
            n && e.setLineDash([]);
          };
        return k(), k;
      }
      function eH(e, t, r, n, i) {
        e.beginPath(),
          e.moveTo(t, r),
          e.lineTo(t, n),
          (e.lineWidth = 2),
          (e.strokeStyle = i),
          e.stroke(),
          (e.globalAlpha = 1);
      }
      function eF(e, t, r, n, i, o, l, a, s, c, u, d, h, f, p, g, m) {
        let v, w;
        if (void 0 === u.current) return;
        let y = u.current.range,
          b = u.current.cell,
          x = [y.x + y.width - 1, y.y + y.height - 1];
        if (b[1] >= m && x[1] >= m) return;
        let k = l.some((e) => e.sourceIndex === b[0] || e.sourceIndex === x[0]);
        if (!k) return;
        let [S, C] = u.current.cell,
          _ = h(u.current.cell),
          R = _.span ?? [S, S],
          E = f > 0 && !(C >= m - f) ? V(m, f, d) - 1 : 0,
          M = x[1];
        if (
          (eB(l, n, i, o, c, (n, i, o, l, c) => {
            if (n.sticky && S > n.sourceIndex) return;
            let u = n.sourceIndex < R[0],
              h = n.sourceIndex > R[1],
              y = n.sourceIndex === x[0];
            if (y || (!u && !h))
              return (
                eN(c, o, r, m, d, f, p, (o, c, d) => {
                  if (c !== C && c !== M) return;
                  let f = i,
                    p = n.width,
                    b = n.sourceIndex === a.length - 1,
                    x = c === m - 1;
                  if (void 0 !== _.span) {
                    let e = eA(_.span, i, o, n.width, d, n, a),
                      t = n.sticky ? e[0] : e[1];
                    void 0 !== t && ((f = t.x), (p = t.width));
                  }
                  let k = c === C && !u && !h && void 0 === v;
                  return (
                    c === M &&
                      y &&
                      g &&
                      (w = () => {
                        !(l > f) ||
                          n.sticky ||
                          k ||
                          (e.beginPath(), e.rect(l, 0, t - l, r), e.clip()),
                          e.beginPath(),
                          e.rect(f + p - 4, o + d - 4, 4, 4),
                          (e.fillStyle =
                            n.themeOverride?.accentColor ?? s.accentColor),
                          e.fill();
                      }),
                    k &&
                      (v = () => {
                        l > f &&
                          !n.sticky &&
                          (e.beginPath(), e.rect(l, 0, t - l, r), e.clip()),
                          e.beginPath(),
                          e.rect(
                            f + 0.5,
                            o + 0.5,
                            p - (b ? 1 : 0),
                            d - (x ? 1 : 0)
                          ),
                          (e.strokeStyle =
                            n.themeOverride?.accentColor ?? s.accentColor),
                          (e.lineWidth = 1),
                          e.stroke();
                      }),
                    void 0 !== v && (!g || void 0 !== w)
                  );
                }),
                void 0 !== v && (!g || void 0 !== w)
              );
          }),
          void 0 === v && void 0 === w)
        )
          return;
        let I = () => {
          e.save(),
            e.beginPath(),
            e.rect(0, c, t, r - c - E),
            e.clip(),
            v?.(),
            w?.(),
            e.restore();
        };
        return I(), I;
      }
      function e$(e, t) {
        var r, n, i;
        let o, l;
        let {
          canvas: a,
          headerCanvas: s,
          width: c,
          height: d,
          cellXOffset: h,
          cellYOffset: f,
          translateX: p,
          translateY: g,
          mappedColumns: m,
          enableGroups: v,
          freezeColumns: w,
          dragAndDropState: y,
          theme: b,
          drawFocus: x,
          headerHeight: k,
          groupHeaderHeight: S,
          disabledRows: C,
          rowHeight: _,
          verticalBorder: R,
          overrideCursor: E,
          isResizing: M,
          selection: I,
          fillHandle: T,
          freezeTrailingRows: O,
          rows: P,
          getCellContent: z,
          getGroupDetails: A,
          getRowThemeOverride: L,
          isFocused: D,
          drawHeaderCallback: H,
          prelightCells: $,
          drawCellCallback: N,
          highlightRegions: j,
          resizeCol: U,
          imageLoader: q,
          lastBlitData: X,
          hoverValues: K,
          hyperWrapping: G,
          hoverInfo: J,
          spriteManager: Q,
          maxScaleFactor: Z,
          hasAppendRow: ee,
          touchMode: et,
          enqueue: er,
          renderStateProvider: en,
          getCellRenderer: ei,
          renderStrategy: eo,
          bufferA: el,
          bufferB: ea,
          damage: es,
          minimumCellWidth: ec,
        } = e;
        if (0 === c || 0 === d) return;
        let eu = "double-buffer" === eo,
          ed = Math.min(Z, Math.ceil(window.devicePixelRatio ?? 1)),
          ef =
            "direct" !== eo &&
            (function (e, t) {
              if (
                void 0 === t ||
                e.width !== t.width ||
                e.height !== t.height ||
                e.theme !== t.theme ||
                e.headerHeight !== t.headerHeight ||
                e.rowHeight !== t.rowHeight ||
                e.rows !== t.rows ||
                e.freezeColumns !== t.freezeColumns ||
                e.getRowThemeOverride !== t.getRowThemeOverride ||
                e.isFocused !== t.isFocused ||
                e.isResizing !== t.isResizing ||
                e.verticalBorder !== t.verticalBorder ||
                e.getCellContent !== t.getCellContent ||
                e.highlightRegions !== t.highlightRegions ||
                e.selection !== t.selection ||
                e.dragAndDropState !== t.dragAndDropState ||
                e.prelightCells !== t.prelightCells ||
                e.touchMode !== t.touchMode ||
                e.maxScaleFactor !== t.maxScaleFactor
              )
                return !1;
              if (e.mappedColumns !== t.mappedColumns) {
                let r;
                if (
                  e.mappedColumns.length > 100 ||
                  e.mappedColumns.length !== t.mappedColumns.length
                )
                  return !1;
                for (let n = 0; n < e.mappedColumns.length; n++) {
                  let i = e.mappedColumns[n],
                    o = t.mappedColumns[n];
                  if ((0, u.vZ)(i, o)) continue;
                  if (void 0 !== r || i.width === o.width) return !1;
                  let { width: l, ...a } = i,
                    { width: s, ...c } = o;
                  if (!(0, u.vZ)(a, c)) return !1;
                  r = n;
                }
                return void 0 === r || r;
              }
              return !0;
            })(e, t);
        (a.width !== c * ed || a.height !== d * ed) &&
          ((a.width = c * ed),
          (a.height = d * ed),
          (a.style.width = c + "px"),
          (a.style.height = d + "px"));
        let ep = s,
          eg = v ? S + k : k,
          ew = eg + 1;
        (ep.width !== c * ed || ep.height !== ew * ed) &&
          ((ep.width = c * ed),
          (ep.height = ew * ed),
          (ep.style.width = c + "px"),
          (ep.style.height = ew + "px")),
          eu &&
            (el.width !== c * ed || el.height !== d * ed) &&
            ((el.width = c * ed),
            (el.height = d * ed),
            void 0 !== X.current && (X.current.aBufferScroll = void 0)),
          eu &&
            (ea.width !== c * ed || ea.height !== d * ed) &&
            ((ea.width = c * ed),
            (ea.height = d * ed),
            void 0 !== X.current && (X.current.bBufferScroll = void 0));
        let ey = X.current;
        if (
          !0 === ef &&
          h === ey?.cellXOffset &&
          f === ey?.cellYOffset &&
          p === ey?.translateX &&
          g === ey?.translateY
        )
          return;
        let eb = null;
        eu && (eb = a.getContext("2d", { alpha: !1 }));
        let ex = ep.getContext("2d", { alpha: !1 });
        o = eu
          ? void 0 !== es
            ? ey?.lastBuffer === "b"
              ? ea
              : el
            : ey?.lastBuffer === "b"
              ? el
              : ea
          : a;
        let ek = o.getContext("2d", { alpha: !1 }),
          eS = eu ? (o === el ? ea : el) : a;
        if (null === ex || null === ek) return;
        let eC = "number" == typeof _ ? () => _ : _;
        ex.save(),
          ek.save(),
          ex.beginPath(),
          ek.beginPath(),
          (ex.textBaseline = "middle"),
          (ek.textBaseline = "middle"),
          1 !== ed && (ex.scale(ed, ed), ek.scale(ed, ed));
        let e_ = W(m, h, c, y, p),
          eR = [],
          eT = x && I.current?.cell[1] === f && 0 === g,
          eO = !1;
        if (void 0 !== j) {
          for (let e of j)
            if ("no-outline" !== e.style && e.range.y === f && 0 === g) {
              eO = !0;
              break;
            }
        }
        let eA = () => {
          !(function (e, t, r, n, i, o, l, a, s, c, u, d, h, f, p, g, m, v, w) {
            let y = l + a;
            if (y <= 0) return;
            (e.fillStyle = d.bgHeader), e.fillRect(0, 0, i, y);
            let [b, x] = n?.[0] ?? [],
              k = d.headerFontFull;
            (e.font = k),
              eB(t, 0, o, 0, y, (t, n, i, o) => {
                if (void 0 !== m && !m.has([t.sourceIndex, -1])) return;
                let p = Math.max(0, o - n);
                e.save(),
                  e.beginPath(),
                  e.rect(n + p, a, t.width - p, l),
                  e.clip();
                let y = g(t.group ?? "").overrideTheme,
                  k =
                    void 0 === t.themeOverride && void 0 === y
                      ? d
                      : (0, eh.yR)(d, y, t.themeOverride);
                k.bgHeader !== d.bgHeader &&
                  ((e.fillStyle = k.bgHeader), e.fill()),
                  k !== d && (e.font = k.baseFontFull);
                let S = u.columns.hasIndex(t.sourceIndex),
                  C = void 0 !== s || c,
                  _ = !C && -1 === x && b === t.sourceIndex,
                  R = C
                    ? 0
                    : f.find(
                        (e) => e.item[0] === t.sourceIndex && e.item[1] === -1
                      )?.hoverAmount ?? 0,
                  E =
                    u?.current !== void 0 &&
                    u.current.cell[0] === t.sourceIndex,
                  M = S ? k.accentColor : E ? k.bgHeaderHasFocus : k.bgHeader,
                  I = r ? a : 0,
                  T = 0 === t.sourceIndex ? 0 : 1;
                S
                  ? ((e.fillStyle = M), e.fillRect(n + T, I, t.width - T, l))
                  : (E || R > 0) &&
                    (e.beginPath(),
                    e.rect(n + T, I, t.width - T, l),
                    E && ((e.fillStyle = k.bgHeaderHasFocus), e.fill()),
                    R > 0 &&
                      ((e.globalAlpha = R),
                      (e.fillStyle = k.bgHeaderHovered),
                      e.fill(),
                      (e.globalAlpha = 1))),
                  eP(e, n, I, t.width, l, t, S, k, _, E, R, h, v, w),
                  e.restore();
              }),
              r &&
                (function (e, t, r, n, i, o, l, a, s, c, u, d) {
                  let [h, f] = o?.[0] ?? [],
                    p = 0;
                  eV(t, r, n, i, (t, r, n, s, g, m) => {
                    if (
                      void 0 !== d &&
                      !d.hasItemInRectangle({
                        x: t[0],
                        y: -2,
                        width: t[1] - t[0] + 1,
                        height: 1,
                      })
                    )
                      return;
                    e.save(), e.beginPath(), e.rect(n, s, g, m), e.clip();
                    let v = u(r),
                      w =
                        v?.overrideTheme === void 0
                          ? l
                          : (0, eh.yR)(l, v.overrideTheme),
                      y = -2 === f && void 0 !== h && h >= t[0] && h <= t[1],
                      b = y ? w.bgHeaderHovered : w.bgHeader;
                    if (
                      (b !== l.bgHeader && ((e.fillStyle = b), e.fill()),
                      (e.fillStyle = w.textGroupHeader ?? w.textHeader),
                      void 0 !== v)
                    ) {
                      let t = n;
                      if (
                        (void 0 !== v.icon &&
                          (a.drawSprite(
                            v.icon,
                            "normal",
                            e,
                            t + 8,
                            (i - 20) / 2,
                            20,
                            w
                          ),
                          (t += 26)),
                        e.fillText(
                          v.name,
                          t + 8,
                          i / 2 + Y(e, l.headerFontFull)
                        ),
                        void 0 !== v.actions && y)
                      ) {
                        let t = eM(
                          { x: n, y: s, width: g, height: m },
                          v.actions
                        );
                        e.beginPath();
                        let r = t[0].x - 10,
                          l = n + g - r;
                        e.rect(r, 0, l, i);
                        let c = e.createLinearGradient(r, 0, r + l, 0),
                          u = em(b, 0);
                        c.addColorStop(0, u),
                          c.addColorStop(10 / l, b),
                          c.addColorStop(1, b),
                          (e.fillStyle = c),
                          e.fill(),
                          (e.globalAlpha = 0.6);
                        let [d, h] = o?.[1] ?? [-1, -1];
                        for (let r = 0; r < v.actions.length; r++) {
                          let i = v.actions[r],
                            o = t[r],
                            l = eI(o, d + n, h);
                          l && (e.globalAlpha = 1),
                            a.drawSprite(
                              i.icon,
                              "normal",
                              e,
                              o.x + o.width / 2 - 10,
                              o.y + o.height / 2 - 10,
                              20,
                              w
                            ),
                            l && (e.globalAlpha = 0.6);
                        }
                        e.globalAlpha = 1;
                      }
                    }
                    0 !== n &&
                      c(t[0]) &&
                      (e.beginPath(),
                      e.moveTo(n + 0.5, 0),
                      e.lineTo(n + 0.5, i),
                      (e.strokeStyle = l.borderColor),
                      (e.lineWidth = 1),
                      e.stroke()),
                      e.restore(),
                      (p = n + g);
                  }),
                    e.beginPath(),
                    e.moveTo(p + 0.5, 0),
                    e.lineTo(p + 0.5, i),
                    e.moveTo(0, i + 0.5),
                    e.lineTo(r, i + 0.5),
                    (e.strokeStyle = l.borderColor),
                    (e.lineWidth = 1),
                    e.stroke();
                })(e, t, i, o, a, n, d, h, 0, p, g, m);
          })(ex, e_, v, J, c, p, k, S, y, M, I, b, Q, K, R, A, es, H, et),
            eE(
              ex,
              e_,
              f,
              p,
              g,
              c,
              d,
              void 0,
              void 0,
              S,
              eg,
              eC,
              L,
              R,
              O,
              P,
              b,
              !0
            ),
            ex.beginPath(),
            ex.moveTo(0, ew - 0.5),
            ex.lineTo(c, ew - 0.5),
            (ex.strokeStyle = ev(
              b.headerBottomBorderColor ??
                b.horizontalBorderColor ??
                b.borderColor,
              b.bgHeader
            )),
            ex.stroke(),
            eO && eD(ex, c, d, h, f, p, g, m, w, k, S, _, O, P, j, b),
            eT && eF(ex, c, d, f, p, g, e_, m, b, eg, I, eC, z, O, ee, T, P);
        };
        if (void 0 !== es) {
          let e = e_[e_.length - 1].sourceIndex + 1,
            t = es.hasItemInRegion([
              { x: h, y: -2, width: e, height: 2 },
              { x: h, y: f, width: e, height: 300 },
              { x: 0, y: f, width: w, height: 300 },
              { x: h, y: P - O, width: e, height: O, when: O > 0 },
            ]),
            r = (e) => {
              eL(
                e,
                e_,
                m,
                d,
                eg,
                p,
                g,
                f,
                P,
                eC,
                z,
                A,
                L,
                C,
                D,
                x,
                O,
                ee,
                eR,
                es,
                I,
                $,
                j,
                q,
                Q,
                K,
                J,
                N,
                G,
                b,
                er,
                en,
                ei,
                E,
                ec
              );
              let t = I.current;
              T &&
                x &&
                void 0 !== t &&
                es.has(F(t.range)) &&
                eF(e, c, d, f, p, g, e_, m, b, eg, I, eC, z, O, ee, T, P);
            };
          if (t) {
            r(ek),
              null !== eb &&
                (eb.save(),
                eb.scale(ed, ed),
                (eb.textBaseline = "middle"),
                r(eb),
                eb.restore());
            let e = es.hasHeader();
            e &&
              (void 0 !== es &&
                0 !== es.size &&
                (ex.beginPath(),
                eV(e_, c, p, S, (e, t, r, n, i, o) => {
                  let l = es.hasItemInRectangle({
                    x: e[0],
                    y: -2,
                    width: e[1] - e[0] + 1,
                    height: 1,
                  });
                  l && ex.rect(r, n, i, o);
                }),
                eB(e_, f, p, g, eg, (e, t, r, n) => {
                  let i = Math.max(0, n - t),
                    o = e.width - i - 1;
                  es.has([e.sourceIndex, -1]) &&
                    ex.rect(t + i + 1, S, o, eg - S);
                }),
                ex.clip()),
              eA());
          }
          ek.restore(), ex.restore();
          return;
        }
        if (
          ((!0 !== ef ||
            h !== ey?.cellXOffset ||
            p !== ey?.translateX ||
            eT !== ey?.mustDrawFocusOnHeader ||
            eO !== ey?.mustDrawHighlightRingsOnHeader) &&
            eA(),
          !0 === ef)
        ) {
          (0, u.hu)(void 0 !== eS && void 0 !== ey);
          let { regions: e } = (function (
            e,
            t,
            r,
            n,
            i,
            o,
            l,
            a,
            s,
            c,
            u,
            d,
            h,
            f,
            p,
            g,
            m,
            v,
            w
          ) {
            let y = [];
            e.imageSmoothingEnabled = !1;
            let b = Math.min(i.cellYOffset, l),
              x = Math.max(i.cellYOffset, l),
              k = 0;
            if ("number" == typeof v) k += (x - b) * v;
            else for (let e = b; e < x; e++) k += v(e);
            l > i.cellYOffset && (k = -k), (k += s - i.translateY);
            let S = Math.min(i.cellXOffset, o),
              C = Math.max(i.cellXOffset, o),
              _ = 0;
            for (let e = S; e < C; e++) _ += g[e].width;
            o > i.cellXOffset && (_ = -_), (_ += a - i.translateX);
            let R = B(m);
            if ((R > 0 && R++, 0 !== _ && 0 !== k)) return { regions: [] };
            let E = c > 0 ? V(h, c, v) : 0,
              M = u - R - Math.abs(_),
              I = d - f - E - Math.abs(k) - 1;
            if (M > 150 && I > 150) {
              let i = {
                sx: 0,
                sy: 0,
                sw: u * p,
                sh: d * p,
                dx: 0,
                dy: 0,
                dw: u * p,
                dh: d * p,
              };
              if (
                (k > 0
                  ? ((i.sy = (f + 1) * p),
                    (i.sh = I * p),
                    (i.dy = (k + f + 1) * p),
                    (i.dh = I * p),
                    y.push({ x: 0, y: f, width: u, height: k + 1 }))
                  : k < 0 &&
                    ((i.sy = (-k + f + 1) * p),
                    (i.sh = I * p),
                    (i.dy = (f + 1) * p),
                    (i.dh = I * p),
                    y.push({ x: 0, y: d + k - E, width: u, height: -k + E })),
                _ > 0
                  ? ((i.sx = R * p),
                    (i.sw = M * p),
                    (i.dx = (_ + R) * p),
                    (i.dw = M * p),
                    y.push({ x: R - 1, y: 0, width: _ + 2, height: d }))
                  : _ < 0 &&
                    ((i.sx = (R - _) * p),
                    (i.sw = M * p),
                    (i.dx = R * p),
                    (i.dw = M * p),
                    y.push({ x: u + _, y: 0, width: -_, height: d })),
                e.setTransform(1, 0, 0, 1, 0, 0),
                w)
              ) {
                if (
                  R > 0 &&
                  0 !== _ &&
                  0 === k &&
                  (void 0 === n || r?.[1] !== !1)
                ) {
                  let r = R * p,
                    n = d * p;
                  e.drawImage(t, 0, 0, r, n, 0, 0, r, n);
                }
                if (
                  E > 0 &&
                  0 === _ &&
                  0 !== k &&
                  (void 0 === n || r?.[0] !== !1)
                ) {
                  let r = (d - E) * p,
                    n = u * p,
                    i = E * p;
                  e.drawImage(t, 0, r, n, i, 0, r, n, i);
                }
              }
              e.drawImage(t, i.sx, i.sy, i.sw, i.sh, i.dx, i.dy, i.dw, i.dh),
                e.scale(p, p);
            }
            return (e.imageSmoothingEnabled = !0), { regions: y };
          })(
            ek,
            eS,
            eS === el ? ey.aBufferScroll : ey.bBufferScroll,
            eS === el ? ey.bBufferScroll : ey.aBufferScroll,
            ey,
            h,
            f,
            p,
            g,
            O,
            c,
            d,
            P,
            eg,
            ed,
            m,
            e_,
            _,
            eu
          );
          eR = e;
        } else
          !1 !== ef &&
            ((0, u.hu)(void 0 !== ey),
            (eR = (function (e, t, r, n, i, o, l, a, s, c) {
              let u = [];
              return (
                t !== e.cellXOffset ||
                  r !== e.cellYOffset ||
                  n !== e.translateX ||
                  i !== e.translateY ||
                  eB(s, r, n, i, a, (e, t, r, n) => {
                    if (e.sourceIndex === c) {
                      let e = Math.max(t, n) + 1;
                      return (
                        u.push({ x: e, y: 0, width: o - e, height: l }), !0
                      );
                    }
                  }),
                u
              );
            })(ey, h, f, p, g, c, d, eg, e_, ef)));
        !(function (e, t, r, n, i, o, l, a, s) {
          let c = !1;
          for (let e of t)
            if (!e.sticky) {
              c = l(e.sourceIndex);
              break;
            }
          let u = s.horizontalBorderColor ?? s.borderColor,
            d = s.borderColor,
            h = c ? B(t) : 0;
          if (
            (0 !== h &&
              (e.beginPath(),
              e.moveTo(h + 0.5, 0),
              e.lineTo(h + 0.5, n),
              (e.strokeStyle = ev(d, s.bgCell)),
              e.stroke()),
            i > 0)
          ) {
            let t = V(o, i, a);
            e.beginPath(),
              e.moveTo(0, n - t + 0.5),
              e.lineTo(r, n - t + 0.5),
              (e.strokeStyle = ev(u, s.bgCell)),
              e.stroke();
          }
        })(ek, e_, c, d, O, P, R, eC, b);
        let e$ = eD(ek, c, d, h, f, p, g, m, w, k, S, _, O, P, j, b),
          eW = x
            ? eF(ek, c, d, f, p, g, e_, m, b, eg, I, eC, z, O, ee, T, P)
            : void 0;
        if (((ek.fillStyle = b.bgCell), eR.length > 0)) {
          for (let e of (ek.beginPath(), eR))
            ek.rect(e.x, e.y, e.width, e.height);
          ek.clip(), ek.fill(), ek.beginPath();
        } else ek.fillRect(0, 0, c, d);
        let ej = eL(
          ek,
          e_,
          m,
          d,
          eg,
          p,
          g,
          f,
          P,
          eC,
          z,
          A,
          L,
          C,
          D,
          x,
          O,
          ee,
          eR,
          es,
          I,
          $,
          j,
          q,
          Q,
          K,
          J,
          N,
          G,
          b,
          er,
          en,
          ei,
          E,
          ec
        );
        (r = ek),
          (n = I.rows),
          (i = eR),
          void 0 === es &&
            e_[e_.length - 1] === m[e_.length - 1] &&
            eB(e_, f, p, g, eg, (e, t, o, l, a) => {
              if (e !== e_[e_.length - 1]) return;
              t += e.width;
              let s = Math.max(t, l);
              s > c ||
                (r.save(),
                r.beginPath(),
                r.rect(s, eg + 1, 1e4, d - eg - 1),
                r.clip(),
                eN(a, o, d, P, eC, O, ee, (e, o, l, a) => {
                  if (
                    !a &&
                    i.length > 0 &&
                    !i.some((r) =>
                      ez(t, e, 1e4, l, r.x, r.y, r.width, r.height)
                    )
                  )
                    return;
                  let s = n.hasIndex(o),
                    c = C.hasIndex(o);
                  r.beginPath();
                  let u = L?.(o),
                    d = void 0 === u ? b : (0, eh.yR)(b, u);
                  d.bgCell !== b.bgCell &&
                    ((r.fillStyle = d.bgCell), r.fillRect(t, e, 1e4, l)),
                    c && ((r.fillStyle = d.bgHeader), r.fillRect(t, e, 1e4, l)),
                    s &&
                      ((r.fillStyle = d.accentLight), r.fillRect(t, e, 1e4, l));
                }),
                r.restore());
            }),
          eE(ek, e_, f, p, g, c, d, eR, ej, S, eg, eC, L, R, O, P, b),
          e$?.(),
          eW?.(),
          M &&
            eB(
              e_,
              0,
              p,
              0,
              eg,
              (e, t) =>
                e.sourceIndex === U &&
                (eH(
                  ex,
                  t + e.width,
                  0,
                  eg + 1,
                  ev(b.resizeIndicatorColor ?? b.accentLight, b.bgHeader)
                ),
                eH(
                  ek,
                  t + e.width,
                  eg,
                  d,
                  ev(b.resizeIndicatorColor ?? b.accentLight, b.bgCell)
                ),
                !0)
            ),
          null !== eb &&
            ((eb.fillStyle = b.bgCell),
            eb.fillRect(0, 0, c, d),
            eb.drawImage(ek.canvas, 0, 0));
        let eU =
          ((l = 0),
          eB(
            e_,
            f,
            p,
            g,
            eg,
            (e, t, r, n, i) => (
              eN(i, r, d, P, eC, O, ee, (e, t, r, n) => {
                n || (l = Math.max(t, l));
              }),
              !0
            )
          ),
          l);
        q?.setWindow(
          { x: h, y: f, width: e_.length, height: eU - f },
          w,
          Array.from({ length: O }, (e, t) => P - 1 - t)
        );
        let eq = void 0 !== ey && (h !== ey.cellXOffset || p !== ey.translateX),
          eX = void 0 !== ey && (f !== ey.cellYOffset || g !== ey.translateY);
        (X.current = {
          cellXOffset: h,
          cellYOffset: f,
          translateX: p,
          translateY: g,
          mustDrawFocusOnHeader: eT,
          mustDrawHighlightRingsOnHeader: eO,
          lastBuffer: eu ? (o === el ? "a" : "b") : void 0,
          aBufferScroll: o === el ? [eq, eX] : ey?.aBufferScroll,
          bBufferScroll: o === ea ? [eq, eX] : ey?.bBufferScroll,
        }),
          ek.restore(),
          ex.restore();
      }
      function eN(e, t, r, n, i, o, l, a) {
        let s = t,
          c = e,
          u = n - o;
        for (; s < r && c < u; ) {
          let e = i(c);
          if (!0 === a(s, c, e, !1, l && c === n - 1)) break;
          (s += e), c++;
        }
        s = r;
        for (let e = 0; e < o; e++) {
          c = n - 1 - e;
          let t = i(c);
          a((s -= t), c, t, !0, l && c === n - 1);
        }
      }
      function eB(e, t, r, n, i, o) {
        let l = 0,
          a = 0,
          s = i + n;
        for (let n of e) {
          let e = n.sticky ? a : l + r;
          if (!0 === o(n, e, s, a, t)) break;
          (l += n.width), (a += n.sticky ? n.width : 0);
        }
      }
      function eV(e, t, r, n, i) {
        let o = 0,
          l = 0;
        for (let a = 0; a < e.length; a++) {
          let s = e[a],
            c = a + 1,
            u = s.width;
          for (
            s.sticky && (l += u);
            c < e.length &&
            L(e[c].group, s.group) &&
            e[c].sticky === e[a].sticky;
          ) {
            let t = e[c];
            (u += t.width), c++, a++, t.sticky && (l += t.width);
          }
          let d = s.sticky ? 0 : r,
            h = o + d,
            f = s.sticky ? 0 : Math.max(0, l - h),
            p = Math.min(u - f, t - (h + f));
          i(
            [s.sourceIndex, e[c - 1].sourceIndex],
            s.group ?? "",
            h + f,
            0,
            p,
            n
          ),
            (o += u);
        }
      }
      class eW {
        callback;
        constructor(e) {
          this.callback = e;
        }
        currentHoveredItem = void 0;
        leavingItems = [];
        lastAnimationTime;
        addToLeavingItems = (e) => {
          let t = this.leavingItems.some((t) => H(t.item, e.item));
          t || this.leavingItems.push(e);
        };
        removeFromLeavingItems = (e) => {
          let t = this.leavingItems.find((t) => H(t.item, e));
          return (
            (this.leavingItems = this.leavingItems.filter((e) => e !== t)),
            t?.hoverAmount ?? 0
          );
        };
        cleanUpLeavingElements = () => {
          this.leavingItems = this.leavingItems.filter(
            (e) => e.hoverAmount > 0
          );
        };
        shouldStep = () => {
          let e = this.leavingItems.length > 0,
            t =
              void 0 !== this.currentHoveredItem &&
              this.currentHoveredItem.hoverAmount < 1;
          return e || t;
        };
        getAnimatingItems = () =>
          void 0 !== this.currentHoveredItem
            ? [...this.leavingItems, this.currentHoveredItem]
            : this.leavingItems.map((e) => ({
                ...e,
                hoverAmount: (function (e) {
                  let t = e - 1;
                  return t * t * t + 1;
                })(e.hoverAmount),
              }));
        step = (e) => {
          if (void 0 === this.lastAnimationTime) this.lastAnimationTime = e;
          else {
            let t = e - this.lastAnimationTime,
              r = t / 80;
            for (let e of this.leavingItems)
              e.hoverAmount = d(e.hoverAmount - r, 0, 1);
            void 0 !== this.currentHoveredItem &&
              (this.currentHoveredItem.hoverAmount = d(
                this.currentHoveredItem.hoverAmount + r,
                0,
                1
              ));
            let n = this.getAnimatingItems();
            this.callback(n), this.cleanUpLeavingElements();
          }
          this.shouldStep()
            ? ((this.lastAnimationTime = e),
              window.requestAnimationFrame(this.step))
            : (this.lastAnimationTime = void 0);
        };
        setHovered = (e) => {
          if (!H(this.currentHoveredItem?.item, e)) {
            if (
              (void 0 !== this.currentHoveredItem &&
                this.addToLeavingItems(this.currentHoveredItem),
              void 0 !== e)
            ) {
              let t = this.removeFromLeavingItems(e);
              this.currentHoveredItem = { item: e, hoverAmount: t };
            } else this.currentHoveredItem = void 0;
            void 0 === this.lastAnimationTime &&
              window.requestAnimationFrame(this.step);
          }
        };
      }
      class ej {
        fn;
        val;
        constructor(e) {
          this.fn = e;
        }
        get value() {
          return this.val ?? (this.val = this.fn());
        }
      }
      let eU =
          ((i = () => window.navigator.userAgent.includes("Firefox")),
          new ej(i)),
        eq =
          ((o = () =>
            window.navigator.userAgent.includes("Mac OS") &&
            window.navigator.userAgent.includes("Safari") &&
            !window.navigator.userAgent.includes("Chrome")),
          new ej(o)),
        eX =
          ((l = () =>
            window.navigator.platform.toLowerCase().startsWith("mac")),
          new ej(l)),
        eK = "header",
        eY = "group-header",
        eG = "out-of-bounds";
      function eJ(e, t) {
        return (
          e === t ||
          (e?.kind === "out-of-bounds"
            ? e?.kind === t?.kind &&
              e?.location[0] === t?.location[0] &&
              e?.location[1] === t?.location[1] &&
              e?.region[0] === t?.region[0] &&
              e?.region[1] === t?.region[1]
            : e?.kind === t?.kind &&
              e?.location[0] === t?.location[0] &&
              e?.location[1] === t?.location[1])
        );
      }
      ((a = s || (s = {}))[(a.Start = -2)] = "Start"),
        (a[(a.StartPadding = -1)] = "StartPadding"),
        (a[(a.Center = 0)] = "Center"),
        (a[(a.EndPadding = 1)] = "EndPadding"),
        (a[(a.End = 2)] = "End");
      let eQ = (e, t) => {
          if (e.kind === m.p6.Custom) return e.copyData;
          let r = t?.(e);
          return r?.getAccessibilityString(e) ?? "";
        },
        eZ = (e, t) => {
          let {
              width: r,
              height: n,
              accessibilityHeight: i,
              columns: o,
              cellXOffset: l,
              cellYOffset: a,
              headerHeight: h,
              fillHandle: f = !1,
              groupHeaderHeight: w,
              rowHeight: y,
              rows: b,
              getCellContent: x,
              getRowThemeOverride: k,
              onHeaderMenuClick: S,
              enableGroups: C,
              isFilling: _,
              onCanvasFocused: R,
              onCanvasBlur: I,
              isFocused: T,
              selection: O,
              freezeColumns: P,
              onContextMenu: z,
              freezeTrailingRows: A,
              fixedShadowX: L = !0,
              fixedShadowY: D = !0,
              drawFocusRing: H = !0,
              onMouseDown: $,
              onMouseUp: N,
              onMouseMoveRaw: V,
              onMouseMove: j,
              onItemHovered: U,
              dragAndDropState: q,
              firstColAccessible: X,
              onKeyDown: K,
              onKeyUp: Y,
              highlightRegions: G,
              canvasRef: J,
              onDragStart: Q,
              onDragEnd: Z,
              eventTargetRef: ee,
              isResizing: et,
              resizeColumn: er,
              isDragging: eo,
              isDraggable: ea = !1,
              allowResize: ed,
              disabledRows: eh,
              hasAppendRow: ef,
              getGroupDetails: ep,
              theme: eg,
              prelightCells: em,
              headerIcons: ev,
              verticalBorder: ew,
              drawCell: ey,
              drawHeader: eb,
              onCellFocused: ex,
              onDragOverCell: ek,
              onDrop: eS,
              onDragLeave: eC,
              imageWindowLoader: e_,
              smoothScrollX: eE = !1,
              smoothScrollY: eO = !1,
              experimental: ez,
              getCellRenderer: eA,
            } = e,
            eL = e.translateX ?? 0,
            eD = e.translateY ?? 0,
            eH = Math.max(P, Math.min(o.length - 1, l)),
            eF = c.useRef(null),
            eN = c.useRef(),
            [eB, eV] = c.useState(!1),
            ej = c.useRef([]),
            eX = c.useRef(),
            [eZ, e0] = c.useState(),
            [e1, e2] = c.useState(),
            e3 = c.useRef(null),
            [e7, e6] = c.useState(),
            [e5, e8] = c.useState(!1),
            e4 = c.useRef(e5);
          e4.current = e5;
          let e9 = c.useMemo(
              () =>
                new eu(ev, () => {
                  (tm.current = void 0), tw.current();
                }),
              [ev]
            ),
            te = C ? w + h : h,
            tt = c.useRef(-1),
            tr = (ez?.enableFirefoxRescaling ?? !1) && eU.value,
            tn = (ez?.enableSafariRescaling ?? !1) && eq.value;
          c.useLayoutEffect(() => {
            1 !== window.devicePixelRatio &&
              (tr || tn) &&
              (-1 !== tt.current && eV(!0),
              window.clearTimeout(tt.current),
              (tt.current = window.setTimeout(() => {
                eV(!1), (tt.current = -1);
              }, 200)));
          }, [a, eH, eL, eD, tr, tn]);
          let ti = c.useMemo(
              () => o.map((e, t) => ({ ...e, sourceIndex: t, sticky: t < P })),
              [o, P]
            ),
            to = L ? B(ti, q) : 0,
            tl = c.useCallback(
              (e, t, i) => {
                let o = e.getBoundingClientRect();
                if (t >= ti.length || i >= b) return;
                let l = o.width / r,
                  s = en(t, i, r, n, w, te, eH, a, eL, eD, b, P, A, ti, y);
                return (
                  1 !== l &&
                    ((s.x *= l), (s.y *= l), (s.width *= l), (s.height *= l)),
                  (s.x += o.x),
                  (s.y += o.y),
                  s
                );
              },
              [r, n, w, te, eH, a, eL, eD, b, P, A, ti, y]
            ),
            ta = c.useCallback(
              (e, t, i, o) => {
                let l;
                let c = e.getBoundingClientRect(),
                  d = c.width / r,
                  p = (t - c.left) / d,
                  g = (i - c.top) / d,
                  m = W(ti, eH, r, void 0, eL),
                  v = 0,
                  x = 0;
                o instanceof MouseEvent && ((v = o.button), (x = o.buttons));
                let k = (function (e, t, r) {
                    let n = 0;
                    for (let i of t) {
                      let t = i.sticky ? n : n + (r ?? 0);
                      if (e <= t + i.width) return i.sourceIndex;
                      n += i.width;
                    }
                    return -1;
                  })(p, m, eL),
                  S = (function (e, t, r, n, i, o, l, a, s, c) {
                    let u = n + i;
                    if (r && e <= i) return -2;
                    if (e <= u) return -1;
                    let d = t;
                    for (let t = 0; t < c; t++) {
                      let r = o - 1 - t,
                        n = "number" == typeof l ? l : l(r);
                      if (e >= (d -= n)) return r;
                    }
                    let h = o - c,
                      f = e - (s ?? 0);
                    if ("number" == typeof l) {
                      let e = Math.floor((f - u) / l) + a;
                      if (e >= h) return;
                      return e;
                    }
                    {
                      let e = u;
                      for (let t = a; t < h; t++) {
                        let r = l(t);
                        if (f <= e + r) return t;
                        e += r;
                      }
                      return;
                    }
                  })(g, n, C, h, w, b, y, a, eD, A),
                  _ = o?.shiftKey === !0,
                  R = o?.ctrlKey === !0,
                  E = o?.metaKey === !0,
                  I =
                    (void 0 !== o && !(o instanceof MouseEvent)) ||
                    o?.pointerType === "touch",
                  T = [p < 0 ? -1 : r < p ? 1 : 0, g < te ? -1 : n < g ? 1 : 0];
                if (
                  -1 === k ||
                  g < 0 ||
                  p < 0 ||
                  void 0 === S ||
                  p > r ||
                  g > n
                ) {
                  let i = p > r ? 1 : p < 0 ? -1 : 0,
                    o = g > n ? 1 : g < 0 ? -1 : 0,
                    a = 2 * i,
                    c = 2 * o;
                  0 === i && (a = -1 === k ? s.EndPadding : s.Center),
                    0 === o && (c = void 0 === S ? s.EndPadding : s.Center);
                  let d = !1;
                  if (-1 === k && -1 === S) {
                    let r = tl(e, ti.length - 1, -1);
                    (0, u.hu)(void 0 !== r), (d = t < r.x + r.width + 5);
                  }
                  let h = (p > r && p < r + M()) || (g > n && g < n + M());
                  l = {
                    kind: eG,
                    location: [
                      -1 !== k ? k : p < 0 ? 0 : ti.length - 1,
                      S ?? b - 1,
                    ],
                    region: [a, c],
                    shiftKey: _,
                    ctrlKey: R,
                    metaKey: E,
                    isEdge: d,
                    isTouch: I,
                    button: v,
                    buttons: x,
                    scrollEdge: T,
                    isMaybeScrollbar: h,
                  };
                } else if (S <= -1) {
                  let r = tl(e, k, S);
                  (0, u.hu)(void 0 !== r);
                  let n = void 0 !== r && r.x + r.width - t <= 5,
                    o = k - 1;
                  t - r.x <= 5 && o >= 0
                    ? ((n = !0),
                      (r = tl(e, o, S)),
                      (0, u.hu)(void 0 !== r),
                      (l = {
                        kind: C && -2 === S ? eY : eK,
                        location: [o, S],
                        bounds: r,
                        group: ti[o].group ?? "",
                        isEdge: n,
                        shiftKey: _,
                        ctrlKey: R,
                        metaKey: E,
                        isTouch: I,
                        localEventX: t - r.x,
                        localEventY: i - r.y,
                        button: v,
                        buttons: x,
                        scrollEdge: T,
                      }))
                    : (l = {
                        kind: C && -2 === S ? eY : eK,
                        group: ti[k].group ?? "",
                        location: [k, S],
                        bounds: r,
                        isEdge: n,
                        shiftKey: _,
                        ctrlKey: R,
                        metaKey: E,
                        isTouch: I,
                        localEventX: t - r.x,
                        localEventY: i - r.y,
                        button: v,
                        buttons: x,
                        scrollEdge: T,
                      });
                } else {
                  let r = tl(e, k, S);
                  (0, u.hu)(void 0 !== r);
                  let n = void 0 !== r && r.x + r.width - t < 5,
                    o = !1;
                  if (f && void 0 !== O.current) {
                    let r = F(O.current.range),
                      n = tl(e, r[0], r[1]);
                    if (void 0 !== n) {
                      let e = n.x + n.width - 2,
                        r = n.y + n.height - 2;
                      o = 6 > Math.abs(e - t) && 6 > Math.abs(r - i);
                    }
                  }
                  l = {
                    kind: "cell",
                    location: [k, S],
                    bounds: r,
                    isEdge: n,
                    shiftKey: _,
                    ctrlKey: R,
                    isFillHandle: o,
                    metaKey: E,
                    isTouch: I,
                    localEventX: t - r.x,
                    localEventY: i - r.y,
                    button: v,
                    buttons: x,
                    scrollEdge: T,
                  };
                }
                return l;
              },
              [r, ti, eH, eL, n, C, h, w, b, y, a, eD, A, tl, f, O, te]
            ),
            [ts] = eZ ?? [],
            tc = c.useRef(() => {}),
            tu = c.useRef(eZ);
          tu.current = eZ;
          let [td, th] = c.useMemo(() => {
            let e = document.createElement("canvas"),
              t = document.createElement("canvas");
            return (
              (e.style.display = "none"),
              (e.style.opacity = "0"),
              (e.style.position = "fixed"),
              (t.style.display = "none"),
              (t.style.opacity = "0"),
              (t.style.position = "fixed"),
              [e, t]
            );
          }, []);
          c.useLayoutEffect(
            () => (
              document.documentElement.append(td),
              document.documentElement.append(th),
              () => {
                td.remove(), th.remove();
              }
            ),
            [td, th]
          );
          let tf = c.useMemo(() => new es(), []),
            tp = tr && eB ? 1 : tn && eB ? 2 : 5,
            tg = ez?.disableMinimumCellWidth === !0 ? 1 : 10,
            tm = c.useRef(),
            tv = c.useCallback(() => {
              let e = eF.current,
                t = e3.current;
              if (null === e || null === t) return;
              let i = !1,
                o = (e) => {
                  (i = !0), e6(e);
                },
                l = tm.current,
                s = {
                  canvas: e,
                  bufferA: td,
                  bufferB: th,
                  headerCanvas: t,
                  width: r,
                  height: n,
                  cellXOffset: eH,
                  cellYOffset: a,
                  translateX: Math.round(eL),
                  translateY: Math.round(eD),
                  mappedColumns: ti,
                  enableGroups: C,
                  freezeColumns: P,
                  dragAndDropState: q,
                  theme: eg,
                  headerHeight: h,
                  groupHeaderHeight: w,
                  disabledRows: eh ?? m.EV.empty(),
                  rowHeight: y,
                  verticalBorder: ew,
                  isResizing: et,
                  resizeCol: er,
                  isFocused: T,
                  selection: O,
                  fillHandle: f,
                  drawCellCallback: ey,
                  hasAppendRow: ef,
                  overrideCursor: o,
                  maxScaleFactor: tp,
                  freezeTrailingRows: A,
                  rows: b,
                  drawFocus: H,
                  getCellContent: x,
                  getGroupDetails: ep ?? ((e) => ({ name: e })),
                  getRowThemeOverride: k,
                  drawHeaderCallback: eb,
                  prelightCells: em,
                  highlightRegions: G,
                  imageLoader: e_,
                  lastBlitData: eX,
                  damage: eN.current,
                  hoverValues: ej.current,
                  hoverInfo: tu.current,
                  spriteManager: e9,
                  scrolling: eB,
                  hyperWrapping: ez?.hyperWrapping ?? !1,
                  touchMode: e5,
                  enqueue: tc.current,
                  renderStateProvider: tf,
                  renderStrategy:
                    ez?.renderStrategy ??
                    (eq.value ? "double-buffer" : "single-buffer"),
                  getCellRenderer: eA,
                  minimumCellWidth: tg,
                };
              void 0 === s.damage
                ? ((tm.current = s), e$(s, l))
                : e$(s, void 0),
                !i &&
                  (void 0 === s.damage || s.damage.has(tu?.current?.[0])) &&
                  e6(void 0);
            }, [
              td,
              th,
              r,
              n,
              eH,
              a,
              eL,
              eD,
              ti,
              C,
              P,
              q,
              eg,
              h,
              w,
              eh,
              y,
              ew,
              et,
              ef,
              er,
              T,
              O,
              f,
              A,
              b,
              H,
              tp,
              x,
              ep,
              k,
              ey,
              eb,
              em,
              G,
              e_,
              e9,
              eB,
              ez?.hyperWrapping,
              ez?.renderStrategy,
              e5,
              tf,
              eA,
              tg,
            ]),
            tw = c.useRef(tv);
          c.useLayoutEffect(() => {
            tv(), (tw.current = tv);
          }, [tv]),
            c.useLayoutEffect(() => {
              let e = async () => {
                document?.fonts?.ready !== void 0 &&
                  (await document.fonts.ready,
                  (tm.current = void 0),
                  tw.current());
              };
              e();
            }, []);
          let ty = c.useCallback((e) => {
              (eN.current = e), tw.current(), (eN.current = void 0);
            }, []),
            tb = (function (e) {
              let t = c.useRef([]),
                r = c.useRef(0),
                n = c.useRef(e);
              n.current = e;
              let i = c.useCallback(() => {
                let e = () => window.requestAnimationFrame(i),
                  i = () => {
                    let e = t.current.map(el);
                    (t.current = []),
                      n.current(new ec(e)),
                      t.current.length > 0 ? r.current++ : (r.current = 0);
                  };
                window.requestAnimationFrame(r.current > 600 ? e : i);
              }, []);
              return c.useCallback(
                (e) => {
                  0 === t.current.length && i();
                  let r = ei(e[0], e[1]);
                  t.current.includes(r) || t.current.push(r);
                },
                [i]
              );
            })(ty);
          tc.current = tb;
          let tx = c.useCallback(
            (e) => {
              ty(new ec(e.map((e) => e.cell)));
            },
            [ty]
          );
          e_.setCallback(ty);
          let [tk, tS] = c.useState(!1),
            [tC, t_] = ts ?? [],
            tR = !1,
            tE = !1,
            tM = e7;
          if (
            void 0 === tM &&
            void 0 !== tC &&
            void 0 !== t_ &&
            t_ > -1 &&
            t_ < b
          ) {
            let e = x([tC, t_], !0);
            (tR =
              e.kind === m.$o.NewRow ||
              (e.kind === m.$o.Marker && "number" !== e.markerKind)),
              (tE = e.kind === m.p6.Boolean && (0, m.kf)(e)),
              (tM = e.cursor);
          }
          let tI = eo
              ? "grabbing"
              : e1 || et
                ? "col-resize"
                : tk || _
                  ? "crosshair"
                  : void 0 !== tM
                    ? tM
                    : (void 0 !== tC && -1 === t_) ||
                        tR ||
                        tE ||
                        (void 0 !== tC && -2 === t_)
                      ? "pointer"
                      : "default",
            tT = c.useMemo(
              () => ({ contain: "strict", display: "block", cursor: tI }),
              [tI]
            ),
            tO = c.useRef("default"),
            tP = ee?.current;
          null != tP &&
            tO.current !== tT.cursor &&
            (tP.style.cursor = tO.current = tT.cursor);
          let tz = c.useCallback(
              (e, t, r, n) => {
                if (void 0 === ep) return;
                let i = ep(e);
                if (void 0 !== i.actions) {
                  let e = eM(t, i.actions);
                  for (let [o, l] of e.entries())
                    if (eI(l, r + t.x, n + l.y)) return i.actions[o];
                }
              },
              [ep]
            ),
            tA = c.useCallback(
              (e, t, r, n) => {
                let i = o[t];
                if (!eo && !et && !0 === i.hasMenu && !e1) {
                  let o = tl(e, t, -1);
                  (0, u.hu)(void 0 !== o);
                  let l = eT(o.x, o.y, o.width, o.height, "rtl" === E(i.title));
                  if (
                    r > l.x &&
                    r < l.x + l.width &&
                    n > l.y &&
                    n < l.y + l.height
                  )
                    return o;
                }
              },
              [o, tl, e1, eo, et]
            ),
            tL = c.useRef(0),
            tD = c.useRef(),
            tH = c.useRef(!1),
            tF = c.useCallback(
              (e) => {
                let t, r;
                let n = eF.current,
                  i = ee?.current;
                if (null === n || (e.target !== n && e.target !== i)) return;
                if (
                  ((tH.current = !0),
                  e instanceof MouseEvent
                    ? ((t = e.clientX), (r = e.clientY))
                    : ((t = e.touches[0].clientX), (r = e.touches[0].clientY)),
                  e.target === i && null !== i)
                ) {
                  let e = i.getBoundingClientRect();
                  if (t > e.right || r > e.bottom) return;
                }
                let o = ta(n, t, r, e);
                if (
                  ((tD.current = o.location),
                  o.isTouch && (tL.current = Date.now()),
                  e4.current !== o.isTouch && e8(o.isTouch),
                  o.kind !== eK || void 0 === tA(n, o.location[0], t, r))
                ) {
                  if (o.kind === eY) {
                    let e = tz(o.group, o.bounds, o.localEventX, o.localEventY);
                    if (void 0 !== e) return;
                  }
                  $?.(o),
                    !o.isTouch &&
                      !0 !== ea &&
                      ea !== o.kind &&
                      o.button < 3 &&
                      1 !== o.button &&
                      e.preventDefault();
                }
              },
              [ee, ea, ta, tz, tA, $]
            );
          v("touchstart", tF, window, !1), v("mousedown", tF, window, !1);
          let t$ = c.useRef(0),
            tN = c.useCallback(
              (e) => {
                let t, r;
                let n = t$.current;
                t$.current = Date.now();
                let i = eF.current;
                if (((tH.current = !1), void 0 === N || null === i)) return;
                let o = ee?.current,
                  l = e.target !== i && e.target !== o,
                  a = !0;
                if (e instanceof MouseEvent) {
                  if (
                    ((t = e.clientX),
                    (r = e.clientY),
                    (a = e.button < 3),
                    "touch" === e.pointerType)
                  )
                    return;
                } else
                  (t = e.changedTouches[0].clientX),
                    (r = e.changedTouches[0].clientY);
                let s = ta(i, t, r, e);
                s.isTouch &&
                  0 !== tL.current &&
                  Date.now() - tL.current > 500 &&
                  (s = { ...s, isLongTouch: !0 }),
                  0 !== n &&
                    Date.now() - n < (s.isTouch ? 1e3 : 500) &&
                    (s = { ...s, isDoubleClick: !0 }),
                  e4.current !== s.isTouch && e8(s.isTouch),
                  !l && e.cancelable && a && e.preventDefault();
                let [c] = s.location,
                  u = tA(i, c, t, r);
                if (s.kind === eK && void 0 !== u) {
                  (0 !== s.button ||
                    tD.current?.[0] !== c ||
                    tD.current?.[1] !== -1) &&
                    N(s, !0);
                  return;
                }
                if (s.kind === eY) {
                  let e = tz(s.group, s.bounds, s.localEventX, s.localEventY);
                  if (void 0 !== e) {
                    0 === s.button && e.onClick(s);
                    return;
                  }
                }
                N(s, l);
              },
              [N, ee, ta, tA, tz]
            );
          v("mouseup", tN, window, !1), v("touchend", tN, window, !1);
          let tB = c.useCallback(
            (e) => {
              let t, r;
              let n = eF.current;
              if (null === n) return;
              let i = ee?.current,
                o = e.target !== n && e.target !== i,
                l = !0;
              e instanceof MouseEvent
                ? ((t = e.clientX), (r = e.clientY), (l = e.button < 3))
                : ((t = e.changedTouches[0].clientX),
                  (r = e.changedTouches[0].clientY));
              let a = ta(n, t, r, e);
              e4.current !== a.isTouch && e8(a.isTouch),
                !o && e.cancelable && l && e.preventDefault();
              let [s] = a.location,
                c = tA(n, s, t, r);
              if (a.kind === eK && void 0 !== c)
                0 === a.button &&
                  tD.current?.[0] === s &&
                  tD.current?.[1] === -1 &&
                  S?.(s, c);
              else if (a.kind === eY) {
                let e = tz(a.group, a.bounds, a.localEventX, a.localEventY);
                void 0 !== e && 0 === a.button && e.onClick(a);
              }
            },
            [ee, ta, tA, S, tz]
          );
          v("click", tB, window, !1);
          let tV = c.useCallback(
            (e) => {
              let t = eF.current,
                r = ee?.current;
              if (
                null === t ||
                (e.target !== t && e.target !== r) ||
                void 0 === z
              )
                return;
              let n = ta(t, e.clientX, e.clientY, e);
              z(n, () => {
                e.cancelable && e.preventDefault();
              });
            },
            [ee, ta, z]
          );
          v("contextmenu", tV, ee?.current ?? null, !1);
          let tW = c.useCallback((e) => {
              (eN.current = new ec(e.map((e) => e.item))),
                (ej.current = e),
                tw.current(),
                (eN.current = void 0);
            }, []),
            tj = c.useMemo(() => new eW(tW), [tW]),
            tU = c.useRef(tj);
          (tU.current = tj),
            c.useLayoutEffect(() => {
              let e = tU.current;
              if (void 0 === ts || ts[1] < 0) {
                e.setHovered(ts);
                return;
              }
              let t = x(ts, !0),
                r = eA(t);
              e.setHovered(
                (void 0 === r && t.kind === m.p6.Custom) || r?.needsHover === !0
                  ? ts
                  : void 0
              );
            }, [x, eA, ts]);
          let tq = c.useRef(),
            tX = c.useCallback(
              (e) => {
                let t = eF.current;
                if (null === t) return;
                let r = ee?.current,
                  n = e.target !== t && e.target !== r,
                  i = ta(t, e.clientX, e.clientY, e);
                if (
                  "out-of-bounds" !== i.kind &&
                  n &&
                  !tH.current &&
                  !i.isTouch
                )
                  return;
                let o = (e, t) => {
                  e0((r) =>
                    r !== e &&
                    (r?.[0][0] !== e?.[0][0] ||
                      r?.[0][1] !== e?.[0][1] ||
                      ((r?.[1][0] !== e?.[1][0] || r?.[1][1] !== e?.[1][1]) &&
                        t))
                      ? e
                      : r
                  );
                };
                if (eJ(i, tq.current)) {
                  if ("cell" === i.kind || i.kind === eK || i.kind === eY) {
                    let e = !1,
                      t = !0;
                    if ("cell" === i.kind) {
                      let r = x(i.location),
                        n = eA(r)?.needsHoverPosition;
                      e = t = n ?? r.kind === m.p6.Custom;
                    } else i.kind === eY && (e = !0);
                    let r = [i.location, [i.localEventX, i.localEventY]];
                    o(r, t), (tu.current = r), e && ty(new ec([i.location]));
                  }
                } else
                  U?.(i),
                    o(
                      i.kind === eG
                        ? void 0
                        : [i.location, [i.localEventX, i.localEventY]],
                      !0
                    ),
                    (tq.current = i);
                let l = i.location[0] >= (X ? 0 : 1);
                e2(i.kind === eK && i.isEdge && l && !0 === ed),
                  tS("cell" === i.kind && i.isFillHandle),
                  V?.(e),
                  j(i);
              },
              [ee, ta, X, ed, V, j, U, x, eA, ty]
            );
          v("mousemove", tX, window, !0);
          let tK = c.useCallback(
              (e) => {
                let t, r;
                let n = eF.current;
                null !== n &&
                  (void 0 !== O.current &&
                    ((t = tl(n, O.current.cell[0], O.current.cell[1])),
                    (r = O.current.cell)),
                  K?.({
                    bounds: t,
                    stopPropagation: () => e.stopPropagation(),
                    preventDefault: () => e.preventDefault(),
                    cancel: () => void 0,
                    ctrlKey: e.ctrlKey,
                    metaKey: e.metaKey,
                    shiftKey: e.shiftKey,
                    altKey: e.altKey,
                    key: e.key,
                    keyCode: e.keyCode,
                    rawEvent: e,
                    location: r,
                  }));
              },
              [K, O, tl]
            ),
            tY = c.useCallback(
              (e) => {
                let t, r;
                let n = eF.current;
                null !== n &&
                  (void 0 !== O.current &&
                    ((t = tl(n, O.current.cell[0], O.current.cell[1])),
                    (r = O.current.cell)),
                  Y?.({
                    bounds: t,
                    stopPropagation: () => e.stopPropagation(),
                    preventDefault: () => e.preventDefault(),
                    cancel: () => void 0,
                    ctrlKey: e.ctrlKey,
                    metaKey: e.metaKey,
                    shiftKey: e.shiftKey,
                    altKey: e.altKey,
                    key: e.key,
                    keyCode: e.keyCode,
                    rawEvent: e,
                    location: r,
                  }));
              },
              [Y, O, tl]
            ),
            tG = c.useCallback(
              (e) => {
                (eF.current = e), void 0 !== J && (J.current = e);
              },
              [J]
            ),
            tJ = c.useCallback(
              (e) => {
                let t, r, n, i, o;
                let l = eF.current;
                if (null === l || !1 === ea || et) {
                  e.preventDefault();
                  return;
                }
                let a = ta(l, e.clientX, e.clientY);
                if (!0 !== ea && a.kind !== ea) {
                  e.preventDefault();
                  return;
                }
                let s = (e, n) => {
                    (t = e), (r = n);
                  },
                  c = (e, t, r) => {
                    (n = e), (i = t), (o = r);
                  },
                  d = !1;
                if (
                  (Q?.({
                    ...a,
                    setData: s,
                    setDragImage: c,
                    preventDefault: () => (d = !0),
                    defaultPrevented: () => d,
                  }),
                  d || void 0 === t || void 0 === r || null === e.dataTransfer)
                )
                  e.preventDefault();
                else if (
                  (e.dataTransfer.setData(t, r),
                  (e.dataTransfer.effectAllowed = "copyLink"),
                  void 0 !== n && void 0 !== i && void 0 !== o)
                )
                  e.dataTransfer.setDragImage(n, i, o);
                else {
                  let [t, r] = a.location;
                  if (void 0 !== r) {
                    let n = document.createElement("canvas"),
                      i = tl(l, t, r);
                    (0, u.hu)(void 0 !== i);
                    let o = Math.ceil(window.devicePixelRatio ?? 1);
                    (n.width = i.width * o), (n.height = i.height * o);
                    let a = n.getContext("2d");
                    null !== a &&
                      (a.scale(o, o),
                      (a.textBaseline = "middle"),
                      -1 === r
                        ? ((a.font = eg.headerFontFull),
                          (a.fillStyle = eg.bgHeader),
                          a.fillRect(0, 0, n.width, n.height),
                          eP(
                            a,
                            0,
                            0,
                            i.width,
                            i.height,
                            ti[t],
                            !1,
                            eg,
                            !1,
                            !1,
                            0,
                            e9,
                            eb,
                            !1
                          ))
                        : ((a.font = eg.baseFontFull),
                          (a.fillStyle = eg.bgCell),
                          a.fillRect(0, 0, n.width, n.height),
                          eR(
                            a,
                            x([t, r]),
                            0,
                            r,
                            !1,
                            !1,
                            0,
                            0,
                            i.width,
                            i.height,
                            !1,
                            eg,
                            eg.bgCell,
                            e_,
                            e9,
                            1,
                            void 0,
                            !1,
                            0,
                            void 0,
                            void 0,
                            void 0,
                            tf,
                            eA,
                            () => void 0
                          ))),
                      (n.style.left = "-100%"),
                      (n.style.position = "absolute"),
                      (n.style.width = `${i.width}px`),
                      (n.style.height = `${i.height}px`),
                      document.body.append(n),
                      e.dataTransfer.setDragImage(n, i.width / 2, i.height / 2),
                      window.setTimeout(() => {
                        n.remove();
                      }, 0);
                  }
                }
              },
              [ea, et, ta, Q, tl, eg, ti, e9, eb, x, e_, tf, eA]
            );
          v("dragstart", tJ, ee?.current ?? null, !1, !1);
          let tQ = c.useRef(),
            tZ = c.useCallback(
              (e) => {
                let t = eF.current;
                if (
                  (void 0 !== eS && e.preventDefault(),
                  null === t || void 0 === ek)
                )
                  return;
                let r = ta(t, e.clientX, e.clientY),
                  [n, i] = r.location,
                  o = n - (X ? 0 : 1),
                  [l, a] = tQ.current ?? [];
                (l !== o || a !== i) &&
                  ((tQ.current = [o, i]), ek([o, i], e.dataTransfer));
              },
              [X, ta, ek, eS]
            );
          v("dragover", tZ, ee?.current ?? null, !1, !1);
          let t0 = c.useCallback(() => {
            (tQ.current = void 0), Z?.();
          }, [Z]);
          v("dragend", t0, ee?.current ?? null, !1, !1);
          let t1 = c.useCallback(
            (e) => {
              let t = eF.current;
              if (null === t || void 0 === eS) return;
              e.preventDefault();
              let r = ta(t, e.clientX, e.clientY),
                [n, i] = r.location;
              eS([n - (X ? 0 : 1), i], e.dataTransfer);
            },
            [X, ta, eS]
          );
          v("drop", t1, ee?.current ?? null, !1, !1);
          let t2 = c.useCallback(() => {
            eC?.();
          }, [eC]);
          v("dragleave", t2, ee?.current ?? null, !1, !1);
          let t3 = c.useRef(O);
          t3.current = O;
          let t7 = c.useRef(null),
            t6 = c.useCallback(
              (e) => {
                null !== eF.current &&
                  eF.current.contains(document.activeElement) &&
                  (null === e && void 0 !== t3.current.current
                    ? J?.current?.focus({ preventScroll: !0 })
                    : null !== e && e.focus({ preventScroll: !0 }),
                  (t7.current = e));
              },
              [J]
            );
          c.useImperativeHandle(
            t,
            () => ({
              focus: () => {
                let e = t7.current;
                null !== e && document.contains(e)
                  ? e.focus({ preventScroll: !0 })
                  : J?.current?.focus({ preventScroll: !0 });
              },
              getBounds: (e, t) => {
                if (void 0 !== J && null !== J.current)
                  return tl(J.current, e ?? 0, t ?? -1);
              },
              damage: tx,
            }),
            [J, tx, tl]
          );
          let t5 = c.useRef(),
            t8 = (function (e, t, r) {
              let [n, i] = c.useState(e),
                o = c.useRef(!0);
              c.useEffect(
                () => () => {
                  o.current = !1;
                },
                []
              );
              let l = c.useRef(
                g((e) => {
                  o.current && i(e);
                }, 200)
              );
              return (
                c.useLayoutEffect(() => {
                  o.current && l.current(() => e());
                }, t),
                n
              );
            })(
              () => {
                if (r < 50 || ez?.disableAccessibilityTree === !0) return null;
                let e = W(ti, eH, r, q, eL),
                  t = X ? 0 : -1;
                X || e[0]?.sourceIndex !== 0 || (e = e.slice(1));
                let [n, o] = O.current?.cell ?? [],
                  l = O.current?.range,
                  s = e.map((e) => e.sourceIndex),
                  u = p(a, Math.min(b, a + i));
                return (
                  void 0 === n ||
                    void 0 === o ||
                    (s.includes(n) && u.includes(o)) ||
                    t6(null),
                  c.createElement(
                    "table",
                    {
                      key: "access-tree",
                      role: "grid",
                      "aria-rowcount": b + 1,
                      "aria-multiselectable": "true",
                      "aria-colcount": ti.length + t,
                    },
                    c.createElement(
                      "thead",
                      { role: "rowgroup" },
                      c.createElement(
                        "tr",
                        { role: "row", "aria-rowindex": 1 },
                        e.map((e) =>
                          c.createElement(
                            "th",
                            {
                              role: "columnheader",
                              "aria-selected": O.columns.hasIndex(
                                e.sourceIndex
                              ),
                              "aria-colindex": e.sourceIndex + 1 + t,
                              tabIndex: -1,
                              onFocus: (t) => {
                                if (t.target !== t7.current)
                                  return ex?.([e.sourceIndex, -1]);
                              },
                              key: e.sourceIndex,
                            },
                            e.title
                          )
                        )
                      )
                    ),
                    c.createElement(
                      "tbody",
                      { role: "rowgroup" },
                      u.map((r) =>
                        c.createElement(
                          "tr",
                          {
                            role: "row",
                            "aria-selected": O.rows.hasIndex(r),
                            key: r,
                            "aria-rowindex": r + 2,
                          },
                          e.map((e) => {
                            let i = e.sourceIndex,
                              a = ei(i, r),
                              s =
                                void 0 !== l &&
                                i >= l.x &&
                                i < l.x + l.width &&
                                r >= l.y &&
                                r < l.y + l.height,
                              u = `glide-cell-${i}-${r}`,
                              d = [i, r],
                              h = x(d, !0);
                            return c.createElement(
                              "td",
                              {
                                key: a,
                                role: "gridcell",
                                "aria-colindex": i + 1 + t,
                                "aria-selected": s,
                                "aria-readonly": (0, m.rs)(h) || !(0, m.Qo)(h),
                                id: u,
                                "data-testid": u,
                                onClick: () => {
                                  let e = J?.current;
                                  if (null != e)
                                    return K?.({
                                      bounds: tl(e, i, r),
                                      cancel: () => void 0,
                                      preventDefault: () => void 0,
                                      stopPropagation: () => void 0,
                                      ctrlKey: !1,
                                      key: "Enter",
                                      keyCode: 13,
                                      metaKey: !1,
                                      shiftKey: !1,
                                      altKey: !1,
                                      rawEvent: void 0,
                                      location: d,
                                    });
                                },
                                onFocusCapture: (e) => {
                                  if (
                                    e.target !== t7.current &&
                                    (t5.current?.[0] !== i ||
                                      t5.current?.[1] !== r)
                                  )
                                    return (t5.current = d), ex?.(d);
                                },
                                ref: n === i && o === r ? t6 : void 0,
                                tabIndex: -1,
                              },
                              eQ(h, eA)
                            );
                          })
                        )
                      )
                    )
                  )
                );
              },
              [r, ti, eH, q, eL, b, a, i, O, t6, x, J, K, tl, ex],
              0
            ),
            t4 = 0 !== P && L ? (eH > P ? 1 : d(-eL / 100, 0, 1)) : 0,
            t9 = D ? d(-(-(32 * a) + eD) / 100, 0, 1) : 0,
            re = c.useMemo(
              () =>
                t4 || t9
                  ? c.createElement(
                      c.Fragment,
                      null,
                      t4 > 0 &&
                        c.createElement("div", {
                          id: "shadow-x",
                          style: {
                            position: "absolute",
                            top: 0,
                            left: to,
                            width: r - to,
                            height: n,
                            opacity: t4,
                            pointerEvents: "none",
                            transition: eE ? void 0 : "opacity 0.2s",
                            boxShadow:
                              "inset 13px 0 10px -13px rgba(0, 0, 0, 0.2)",
                          },
                        }),
                      t9 > 0 &&
                        c.createElement("div", {
                          id: "shadow-y",
                          style: {
                            position: "absolute",
                            top: te,
                            left: 0,
                            width: r,
                            height: n,
                            opacity: t9,
                            pointerEvents: "none",
                            transition: eO ? void 0 : "opacity 0.2s",
                            boxShadow:
                              "inset 0 13px 10px -13px rgba(0, 0, 0, 0.2)",
                          },
                        })
                    )
                  : null,
              [t4, t9, to, r, eE, te, n, eO]
            ),
            rt = c.useMemo(
              () => ({ position: "absolute", top: 0, left: 0 }),
              []
            );
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              "canvas",
              {
                "data-testid": "data-grid-canvas",
                tabIndex: 0,
                onKeyDown: tK,
                onKeyUp: tY,
                onFocus: R,
                onBlur: I,
                ref: tG,
                style: tT,
              },
              t8
            ),
            c.createElement("canvas", { ref: e3, style: rt }),
            re
          );
        };
      var e0 = c.memo(c.forwardRef(eZ));
      function e1(e, t, r, n) {
        return d(
          Math.round(t - (e.growOffset ?? 0)),
          Math.ceil(r),
          Math.floor(n)
        );
      }
      let e2 = (e) => {
        let [t, r] = c.useState(),
          [n, i] = c.useState(),
          [o, l] = c.useState(),
          [a, s] = c.useState(),
          [u, d] = c.useState(!1),
          [h, f] = c.useState(),
          [p, g] = c.useState(),
          [m, v] = c.useState(),
          [w, y] = c.useState(!1),
          [b, x] = c.useState(),
          {
            onHeaderMenuClick: k,
            getCellContent: S,
            onColumnMoved: C,
            onColumnResize: _,
            onColumnResizeStart: R,
            onColumnResizeEnd: E,
            gridRef: M,
            maxColumnWidth: I,
            minColumnWidth: T,
            onRowMoved: O,
            lockColumns: P,
            onColumnProposeMove: z,
            onMouseDown: A,
            onMouseUp: L,
            onItemHovered: D,
            onDragStart: H,
            canvasRef: F,
          } = e,
          $ = (_ ?? E ?? R) !== void 0,
          { columns: N, selection: B } = e,
          V = B.columns,
          W = c.useCallback(
            (e) => {
              let [t, r] = e.location;
              void 0 !== o && a !== t && t >= P
                ? (d(!0), s(t))
                : void 0 !== p && void 0 !== r
                  ? (y(!0), v(Math.max(0, r)))
                  : D?.(e);
            },
            [o, p, a, D, P]
          ),
          j = void 0 !== C,
          U = c.useCallback(
            (e) => {
              if (0 === e.button) {
                let [t, n] = e.location;
                if ("out-of-bounds" === e.kind && e.isEdge && $) {
                  let e = M?.current?.getBounds(N.length - 1, -1);
                  void 0 !== e && (r(e.x), i(N.length - 1));
                } else if ("header" === e.kind && t >= P) {
                  let n = F?.current;
                  if (e.isEdge && $ && n) {
                    r(e.bounds.x), i(t);
                    let o = n.getBoundingClientRect(),
                      l = o.width / n.offsetWidth,
                      a = e.bounds.width / l;
                    R?.(N[t], a, t, a + (N[t].growOffset ?? 0));
                  } else "header" === e.kind && j && (f(e.bounds.x), l(t));
                } else
                  "cell" === e.kind &&
                    P > 0 &&
                    0 === t &&
                    void 0 !== n &&
                    void 0 !== O &&
                    (x(e.bounds.y), g(n));
              }
              A?.(e);
            },
            [A, $, P, O, M, N, j, R, F]
          ),
          q = c.useCallback(
            (e, t) => {
              u || w || k?.(e, t);
            },
            [u, w, k]
          ),
          X = c.useRef(-1),
          K = c.useCallback(() => {
            (X.current = -1),
              g(void 0),
              v(void 0),
              x(void 0),
              y(!1),
              l(void 0),
              s(void 0),
              f(void 0),
              d(!1),
              i(void 0),
              r(void 0);
          }, []),
          Y = c.useCallback(
            (e, t) => {
              if (0 === e.button) {
                if (void 0 !== n) {
                  if (!0 === V?.hasIndex(n))
                    for (let e of V) {
                      if (e === n) continue;
                      let t = N[e],
                        r = e1(t, X.current, T, I);
                      _?.(t, r, e, r + (t.growOffset ?? 0));
                    }
                  let e = e1(N[n], X.current, T, I);
                  if (
                    (E?.(N[n], e, n, e + (N[n].growOffset ?? 0)), V.hasIndex(n))
                  )
                    for (let e of V) {
                      if (e === n) continue;
                      let t = N[e],
                        r = e1(t, X.current, T, I);
                      E?.(t, r, e, r + (t.growOffset ?? 0));
                    }
                }
                K(),
                  void 0 !== o && void 0 !== a && C?.(o, a),
                  void 0 !== p && void 0 !== m && O?.(p, m);
              }
              L?.(e, t);
            },
            [L, n, o, a, p, m, V, E, N, T, I, _, C, O, K]
          ),
          G = c.useMemo(() => {
            if (void 0 !== o && void 0 !== a && o !== a && z?.(o, a) !== !1)
              return { src: o, dest: a };
          }, [o, a, z]),
          J = c.useCallback(
            (e) => {
              let r = F?.current;
              if (void 0 !== o && void 0 !== h) {
                let t = Math.abs(e.clientX - h);
                t > 20 && d(!0);
              } else if (void 0 !== p && void 0 !== b) {
                let t = Math.abs(e.clientY - b);
                t > 20 && y(!0);
              } else if (void 0 !== n && void 0 !== t && r) {
                let i = r.getBoundingClientRect(),
                  o = i.width / r.offsetWidth,
                  l = (e.clientX - t) / o,
                  a = N[n],
                  s = e1(a, l, T, I);
                if (
                  (_?.(a, s, n, s + (a.growOffset ?? 0)),
                  (X.current = l),
                  V?.first() === n)
                )
                  for (let e of V) {
                    if (e === n) continue;
                    let t = N[e],
                      r = e1(t, X.current, T, I);
                    _?.(t, r, e, r + (t.growOffset ?? 0));
                  }
              }
            },
            [o, h, p, b, n, t, N, T, I, _, V, F]
          ),
          Q = c.useCallback(
            (e, t) => {
              if (void 0 === p || void 0 === m) return S(e, t);
              let [r, n] = e;
              return (
                n === m ? (n = p) : (n > m && (n -= 1), n >= p && (n += 1)),
                S([r, n], t)
              );
            },
            [p, m, S]
          ),
          Z = c.useCallback(
            (e) => {
              H?.(e), e.defaultPrevented() || K();
            },
            [K, H]
          );
        return c.createElement(e0, {
          accessibilityHeight: e.accessibilityHeight,
          canvasRef: e.canvasRef,
          cellXOffset: e.cellXOffset,
          cellYOffset: e.cellYOffset,
          columns: e.columns,
          disabledRows: e.disabledRows,
          drawFocusRing: e.drawFocusRing,
          drawHeader: e.drawHeader,
          drawCell: e.drawCell,
          enableGroups: e.enableGroups,
          eventTargetRef: e.eventTargetRef,
          experimental: e.experimental,
          fillHandle: e.fillHandle,
          firstColAccessible: e.firstColAccessible,
          fixedShadowX: e.fixedShadowX,
          fixedShadowY: e.fixedShadowY,
          freezeColumns: e.freezeColumns,
          getCellRenderer: e.getCellRenderer,
          getGroupDetails: e.getGroupDetails,
          getRowThemeOverride: e.getRowThemeOverride,
          groupHeaderHeight: e.groupHeaderHeight,
          headerHeight: e.headerHeight,
          headerIcons: e.headerIcons,
          height: e.height,
          highlightRegions: e.highlightRegions,
          imageWindowLoader: e.imageWindowLoader,
          resizeColumn: n,
          isDraggable: e.isDraggable,
          isFilling: e.isFilling,
          isFocused: e.isFocused,
          onCanvasBlur: e.onCanvasBlur,
          onCanvasFocused: e.onCanvasFocused,
          onCellFocused: e.onCellFocused,
          onContextMenu: e.onContextMenu,
          onDragEnd: e.onDragEnd,
          onDragLeave: e.onDragLeave,
          onDragOverCell: e.onDragOverCell,
          onDrop: e.onDrop,
          onKeyDown: e.onKeyDown,
          onKeyUp: e.onKeyUp,
          onMouseMove: e.onMouseMove,
          prelightCells: e.prelightCells,
          rowHeight: e.rowHeight,
          rows: e.rows,
          selection: e.selection,
          smoothScrollX: e.smoothScrollX,
          smoothScrollY: e.smoothScrollY,
          theme: e.theme,
          freezeTrailingRows: e.freezeTrailingRows,
          hasAppendRow: e.hasAppendRow,
          translateX: e.translateX,
          translateY: e.translateY,
          verticalBorder: e.verticalBorder,
          width: e.width,
          getCellContent: Q,
          isResizing: void 0 !== n,
          onHeaderMenuClick: q,
          isDragging: u,
          onItemHovered: W,
          onDragStart: Z,
          onMouseDown: U,
          allowResize: $,
          onMouseUp: Y,
          dragAndDropState: G,
          onMouseMoveRaw: J,
          ref: M,
        });
      };
      var e3 = r(78228);
      let e7 = (e, t, r) => {
          let n = (0, c.useRef)(null),
            i = (0, c.useRef)(null),
            o = (0, c.useRef)(null),
            l = (0, c.useRef)(0),
            a = (0, c.useRef)(t);
          a.current = t;
          let s = r.current;
          (0, c.useEffect)(() => {
            let t = () => {
                if (!1 === i.current && null !== s) {
                  let e = [s.scrollLeft, s.scrollTop];
                  if (o.current?.[0] === e[0] && o.current?.[1] === e[1]) {
                    if (l.current > 10) {
                      (o.current = null), (i.current = null);
                      return;
                    }
                    l.current++;
                  } else
                    (l.current = 0), a.current(e[0], e[1]), (o.current = e);
                  n.current = window.setTimeout(t, 1e3 / 120);
                }
              },
              r = () => {
                (i.current = !0),
                  (o.current = null),
                  null !== n.current &&
                    (window.clearTimeout(n.current), (n.current = null));
              },
              c = (e) => {
                0 === e.touches.length &&
                  ((i.current = !1),
                  (l.current = 0),
                  (n.current = window.setTimeout(t, 1e3 / 120)));
              };
            if (e && null !== s)
              return (
                s.addEventListener("touchstart", r),
                s.addEventListener("touchend", c),
                () => {
                  s.removeEventListener("touchstart", r),
                    s.removeEventListener("touchend", c),
                    null !== n.current && window.clearTimeout(n.current);
                }
              );
          }, [e, s]);
        },
        e6 = (0, e3.z)("div")({
          name: "ScrollRegionStyle",
          class: "gdg-s1dgczr6",
          propsAsIs: !1,
          vars: { "s1dgczr6-0": [(e) => (e.isSafari ? "scroll" : "auto")] },
        }),
        e5 = (e) => {
          let {
              children: t,
              clientHeight: r,
              scrollHeight: n,
              scrollWidth: i,
              update: o,
              draggable: l,
              className: a,
              preventDiagonalScrolling: s = !1,
              paddingBottom: u = 0,
              paddingRight: d = 0,
              rightElement: h,
              rightElementProps: f,
              kineticScrollPerfHack: p = !1,
              scrollRef: g,
              initialSize: m,
            } = e,
            w = [],
            y = f?.sticky ?? !1,
            b = f?.fill ?? !1,
            x = c.useRef(0),
            k = c.useRef(0),
            S = c.useRef(null),
            C = "undefined" == typeof window ? 1 : window.devicePixelRatio,
            _ = c.useRef({
              scrollLeft: 0,
              scrollTop: 0,
              lockDirection: void 0,
            }),
            R = c.useRef(null),
            E = (function (e) {
              let [t, r] = c.useState(!1),
                n = "undefined" == typeof window ? null : window,
                i = c.useRef(0);
              return (
                v(
                  "touchstart",
                  c.useCallback(() => {
                    window.clearTimeout(i.current), r(!0);
                  }, []),
                  n,
                  !0,
                  !1
                ),
                v(
                  "touchend",
                  c.useCallback(
                    (t) => {
                      0 === t.touches.length &&
                        (i.current = window.setTimeout(() => r(!1), e));
                    },
                    [e]
                  ),
                  n,
                  !0,
                  !1
                ),
                t
              );
            })(200),
            [M, I] = c.useState(!0),
            T = c.useRef(0);
          c.useLayoutEffect(() => {
            if (!M || E || void 0 === _.current.lockDirection) return;
            let e = S.current;
            if (null === e) return;
            let [t, r] = _.current.lockDirection;
            void 0 !== t
              ? (e.scrollLeft = t)
              : void 0 !== r && (e.scrollTop = r),
              (_.current.lockDirection = void 0);
          }, [E, M]);
          let O = c.useCallback(
            (e, t) => {
              let r = S.current;
              if (null === r) return;
              (t = t ?? r.scrollTop), (e = e ?? r.scrollLeft);
              let i = _.current.scrollTop,
                l = _.current.scrollLeft,
                a = e - l,
                c = t - i;
              E &&
                0 !== a &&
                0 !== c &&
                (Math.abs(a) > 3 || Math.abs(c) > 3) &&
                s &&
                void 0 === _.current.lockDirection &&
                (_.current.lockDirection =
                  Math.abs(a) < Math.abs(c) ? [l, void 0] : [void 0, i]);
              let h = _.current.lockDirection;
              (e = h?.[0] ?? e),
                (t = h?.[1] ?? t),
                (_.current.scrollLeft = e),
                (_.current.scrollTop = t);
              let f = r.clientWidth,
                p = r.clientHeight,
                g = t,
                m = k.current - g,
                v = r.scrollHeight - p;
              (k.current = g),
                v > 0 &&
                  (Math.abs(m) > 2e3 || 0 === g || g === v) &&
                  n > r.scrollHeight + 5 &&
                  (x.current = (n - p) * (g / v) - g),
                void 0 !== h &&
                  (window.clearTimeout(T.current),
                  I(!1),
                  (T.current = window.setTimeout(() => I(!0), 200))),
                o({
                  x: e,
                  y: g + x.current,
                  width: f - d,
                  height: p - u,
                  paddingRight: R.current?.clientWidth ?? 0,
                });
            },
            [u, d, n, o, s, E]
          );
          e7(p && eq.value, O, S);
          let P = c.useRef(O);
          P.current = O;
          let z = c.useRef(),
            A = c.useRef(!1);
          c.useLayoutEffect(() => {
            A.current ? O() : (A.current = !0);
          }, [O, u, d]);
          let L = c.useCallback(
              (e) => {
                (S.current = e), void 0 !== g && (g.current = e);
              },
              [g]
            ),
            D = 0,
            H = 0;
          for (
            w.push(
              c.createElement("div", {
                key: D++,
                style: { width: i, height: 0 },
              })
            );
            H < n;
          ) {
            let e = Math.min(5e6, n - H);
            w.push(
              c.createElement("div", {
                key: D++,
                style: { width: 0, height: e },
              })
            ),
              (H += e);
          }
          let {
            ref: F,
            width: $,
            height: N,
          } = (function (e) {
            let t = (0, c.useRef)(null),
              [r, n] = (0, c.useState)({ width: e?.[0], height: e?.[1] });
            return (
              (0, c.useLayoutEffect)(() => {
                let e = (e) => {
                    for (let t of e) {
                      let { width: e, height: r } = (t && t.contentRect) || {};
                      n((t) =>
                        t.width === e && t.height === r
                          ? t
                          : { width: e, height: r }
                      );
                    }
                  },
                  r = new window.ResizeObserver(e);
                return (
                  t.current && r.observe(t.current, void 0),
                  () => {
                    r.disconnect();
                  }
                );
              }, [t.current]),
              { ref: t, ...r }
            );
          })(m);
          return ("undefined" != typeof window &&
            (z.current?.height !== N || z.current?.width !== $) &&
            (window.setTimeout(() => P.current(), 0),
            (z.current = { width: $, height: N })),
          ($ ?? 0) === 0 || (N ?? 0) === 0)
            ? c.createElement("div", { ref: F })
            : c.createElement(
                "div",
                { ref: F },
                c.createElement(
                  e6,
                  { isSafari: eq.value },
                  c.createElement("div", { className: "dvn-underlay" }, t),
                  c.createElement(
                    "div",
                    {
                      ref: L,
                      style: z.current,
                      draggable: l,
                      onDragStart: (e) => {
                        l || (e.stopPropagation(), e.preventDefault());
                      },
                      className: "dvn-scroller " + (a ?? ""),
                      onScroll: () => O(),
                    },
                    c.createElement(
                      "div",
                      {
                        className:
                          "dvn-scroll-inner" +
                          (void 0 === h ? " dvn-hidden" : ""),
                      },
                      c.createElement("div", { className: "dvn-stack" }, w),
                      void 0 !== h &&
                        c.createElement(
                          c.Fragment,
                          null,
                          !b &&
                            c.createElement("div", { className: "dvn-spacer" }),
                          c.createElement(
                            "div",
                            {
                              ref: R,
                              style: {
                                height: N,
                                maxHeight: r - Math.ceil(C % 1),
                                position: "sticky",
                                top: 0,
                                paddingLeft: 1,
                                marginBottom: -40,
                                marginRight: d,
                                flexGrow: b ? 1 : void 0,
                                right: y ? d ?? 0 : void 0,
                                pointerEvents: "auto",
                              },
                            },
                            h
                          )
                        )
                    )
                  )
                )
              );
        },
        e8 = (e) => {
          let {
              columns: t,
              rows: r,
              rowHeight: n,
              headerHeight: i,
              groupHeaderHeight: o,
              enableGroups: l,
              freezeColumns: a,
              experimental: s,
              nonGrowWidth: u,
              clientSize: d,
              className: h,
              onVisibleRegionChanged: f,
              scrollRef: p,
              preventDiagonalScrolling: g,
              rightElement: m,
              rightElementProps: v,
              overscrollX: w,
              overscrollY: y,
              initialSize: b,
              smoothScrollX: x = !1,
              smoothScrollY: k = !1,
              isDraggable: S,
            } = e,
            { paddingRight: C, paddingBottom: _ } = s ?? {},
            [R, E] = d,
            M = c.useRef(),
            I = c.useRef(),
            T = c.useRef(),
            O = c.useRef(),
            P = l ? i + o : i;
          if ("number" == typeof n) P += r * n;
          else for (let e = 0; e < r; e++) P += n(e);
          void 0 !== y && (P += y);
          let z = c.useRef(),
            A = c.useCallback(() => {
              if (void 0 === z.current) return;
              let e = { ...z.current },
                i = 0,
                o = e.x < 0 ? -e.x : 0,
                l = 0,
                s = 0;
              e.x = e.x < 0 ? 0 : e.x;
              let c = 0;
              for (let e = 0; e < a; e++) c += t[e].width;
              for (let r of t) {
                let t = i - c;
                if (e.x >= t + r.width) (i += r.width), s++, l++;
                else if (e.x > t) (i += r.width), x ? (o += t - e.x) : s++, l++;
                else if (e.x + e.width > t) (i += r.width), l++;
                else break;
              }
              let u = 0,
                d = 0,
                h = 0;
              if ("number" == typeof n)
                k
                  ? (u = (d = Math.floor(e.y / n)) * n - e.y)
                  : (d = Math.ceil(e.y / n)),
                  (h = Math.ceil(e.height / n) + d),
                  u < 0 && h++;
              else {
                let t = 0;
                for (let i = 0; i < r; i++) {
                  let r = n(i),
                    o = t + (k ? 0 : r / 2);
                  if (e.y >= t + r) (t += r), d++, h++;
                  else if (e.y > o) (t += r), k ? (u += o - e.y) : d++, h++;
                  else if (e.y + e.height > r / 2 + t) (t += r), h++;
                  else break;
                }
              }
              let p = { x: s, y: d, width: l - s, height: h - d },
                g = M.current;
              (void 0 === g ||
                g.y !== p.y ||
                g.x !== p.x ||
                g.height !== p.height ||
                g.width !== p.width ||
                I.current !== o ||
                T.current !== u ||
                e.width !== O.current?.[0] ||
                e.height !== O.current?.[1]) &&
                (f?.(
                  { x: s, y: d, width: l - s, height: h - d },
                  e.width,
                  e.height,
                  e.paddingRight ?? 0,
                  o,
                  u
                ),
                (M.current = p),
                (I.current = o),
                (T.current = u),
                (O.current = [e.width, e.height]));
            }, [t, n, r, f, a, x, k]),
            L = c.useCallback(
              (e) => {
                (z.current = e), A();
              },
              [A]
            );
          return (
            c.useEffect(() => {
              A();
            }, [A]),
            c.createElement(
              e5,
              {
                scrollRef: p,
                className: h,
                kineticScrollPerfHack: s?.kineticScrollPerfHack,
                preventDiagonalScrolling: g,
                draggable: !0 === S || "string" == typeof S,
                scrollWidth: u + Math.max(0, w ?? 0) + (C ?? 0),
                scrollHeight: P + (_ ?? 0),
                clientHeight: E,
                rightElement: m,
                paddingBottom: _,
                paddingRight: C,
                rightElementProps: v,
                update: L,
                initialSize: b,
              },
              c.createElement(e2, {
                eventTargetRef: p,
                width: R,
                height: E,
                accessibilityHeight: e.accessibilityHeight,
                canvasRef: e.canvasRef,
                cellXOffset: e.cellXOffset,
                cellYOffset: e.cellYOffset,
                columns: e.columns,
                disabledRows: e.disabledRows,
                enableGroups: e.enableGroups,
                fillHandle: e.fillHandle,
                firstColAccessible: e.firstColAccessible,
                fixedShadowX: e.fixedShadowX,
                fixedShadowY: e.fixedShadowY,
                freezeColumns: e.freezeColumns,
                getCellContent: e.getCellContent,
                getCellRenderer: e.getCellRenderer,
                getGroupDetails: e.getGroupDetails,
                getRowThemeOverride: e.getRowThemeOverride,
                groupHeaderHeight: e.groupHeaderHeight,
                headerHeight: e.headerHeight,
                highlightRegions: e.highlightRegions,
                imageWindowLoader: e.imageWindowLoader,
                isFilling: e.isFilling,
                isFocused: e.isFocused,
                lockColumns: e.lockColumns,
                maxColumnWidth: e.maxColumnWidth,
                minColumnWidth: e.minColumnWidth,
                onHeaderMenuClick: e.onHeaderMenuClick,
                onMouseMove: e.onMouseMove,
                prelightCells: e.prelightCells,
                rowHeight: e.rowHeight,
                rows: e.rows,
                selection: e.selection,
                theme: e.theme,
                freezeTrailingRows: e.freezeTrailingRows,
                hasAppendRow: e.hasAppendRow,
                translateX: e.translateX,
                translateY: e.translateY,
                onColumnProposeMove: e.onColumnProposeMove,
                verticalBorder: e.verticalBorder,
                drawFocusRing: e.drawFocusRing,
                drawHeader: e.drawHeader,
                drawCell: e.drawCell,
                experimental: e.experimental,
                gridRef: e.gridRef,
                headerIcons: e.headerIcons,
                isDraggable: e.isDraggable,
                onCanvasBlur: e.onCanvasBlur,
                onCanvasFocused: e.onCanvasFocused,
                onCellFocused: e.onCellFocused,
                onColumnMoved: e.onColumnMoved,
                onColumnResize: e.onColumnResize,
                onColumnResizeEnd: e.onColumnResizeEnd,
                onColumnResizeStart: e.onColumnResizeStart,
                onContextMenu: e.onContextMenu,
                onDragEnd: e.onDragEnd,
                onDragLeave: e.onDragLeave,
                onDragOverCell: e.onDragOverCell,
                onDragStart: e.onDragStart,
                onDrop: e.onDrop,
                onItemHovered: e.onItemHovered,
                onKeyDown: e.onKeyDown,
                onKeyUp: e.onKeyUp,
                onMouseDown: e.onMouseDown,
                onMouseUp: e.onMouseUp,
                onRowMoved: e.onRowMoved,
                smoothScrollX: e.smoothScrollX,
                smoothScrollY: e.smoothScrollY,
              })
            )
          );
        },
        e4 = (0, e3.z)("div")({
          name: "SearchWrapper",
          class: "gdg-seveqep",
          propsAsIs: !1,
        }),
        e9 = c.createElement(
          "svg",
          { className: "button-icon", viewBox: "0 0 512 512" },
          c.createElement("path", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "48",
            d: "M112 244l144-144 144 144M256 120v292",
          })
        ),
        te = c.createElement(
          "svg",
          { className: "button-icon", viewBox: "0 0 512 512" },
          c.createElement("path", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "48",
            d: "M112 268l144 144 144-144M256 392V100",
          })
        ),
        tt = c.createElement(
          "svg",
          { className: "button-icon", viewBox: "0 0 512 512" },
          c.createElement("path", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "32",
            d: "M368 368L144 144M368 144L144 368",
          })
        ),
        tr = (e) => {
          let {
              canvasRef: t,
              cellYOffset: r,
              rows: n,
              columns: i,
              searchInputRef: o,
              searchValue: l,
              searchResults: a,
              onSearchValueChange: s,
              getCellsForSelection: d,
              onSearchResultsChanged: h,
              showSearch: f = !1,
              onSearchClose: p,
            } = e,
            [g] = c.useState(
              () => "search-box-" + Math.round(1e3 * Math.random())
            ),
            [v, w] = c.useState(""),
            y = l ?? v,
            b = c.useCallback(
              (e) => {
                w(e), s?.(e);
              },
              [s]
            ),
            [x, k] = c.useState(),
            S = c.useRef(x);
          (S.current = x),
            c.useEffect(() => {
              void 0 !== a &&
                (a.length > 0
                  ? k((e) => ({
                      rowsSearched: n,
                      results: a.length,
                      selectedIndex: e?.selectedIndex ?? -1,
                    }))
                  : k(void 0));
            }, [n, a]);
          let C = c.useRef(new AbortController()),
            _ = c.useRef(),
            [R, E] = c.useState([]),
            M = a ?? R,
            I = c.useCallback(() => {
              void 0 !== _.current &&
                (window.cancelAnimationFrame(_.current),
                (_.current = void 0),
                C.current.abort());
            }, []),
            T = c.useRef(r);
          T.current = r;
          let O = c.useCallback(
              (e) => {
                let t = RegExp(
                    e.replace(/([$()*+.?[\\\]^{|}-])/g, "\\$1"),
                    "i"
                  ),
                  r = T.current,
                  o = Math.min(10, n),
                  l = 0;
                k(void 0), E([]);
                let a = [],
                  s = async () => {
                    if (void 0 === d) return;
                    let e = performance.now(),
                      c = n - l,
                      f = d(
                        {
                          x: 0,
                          y: r,
                          width: i.length,
                          height: Math.min(o, c, n - r),
                        },
                        C.current.signal
                      );
                    "function" == typeof f && (f = await f());
                    let p = !1;
                    for (let [e, n] of f.entries())
                      for (let [i, o] of n.entries()) {
                        let n;
                        switch (o.kind) {
                          case m.p6.Text:
                          case m.p6.Number:
                            n = o.displayData;
                            break;
                          case m.p6.Uri:
                          case m.p6.Markdown:
                            n = o.data;
                            break;
                          case m.p6.Boolean:
                            n =
                              "boolean" == typeof o.data
                                ? o.data.toString()
                                : void 0;
                            break;
                          case m.p6.Image:
                          case m.p6.Bubble:
                            n = o.data.join("\uD83D\uDC33");
                            break;
                          case m.p6.Custom:
                            n = o.copyData;
                        }
                        void 0 !== n &&
                          t.test(n) &&
                          (a.push([i, e + r]), (p = !0));
                      }
                    let g = performance.now();
                    p && E([...a]), (l += f.length), (0, u.hu)(l <= n);
                    let v = S.current?.selectedIndex ?? -1;
                    k({ results: a.length, rowsSearched: l, selectedIndex: v }),
                      h?.(a, v),
                      r + o >= n ? (r = 0) : (r += o),
                      (o = Math.ceil(o * (10 / Math.max(g - e, 1)))),
                      l < n &&
                        a.length < 1e3 &&
                        (_.current = window.requestAnimationFrame(s));
                  };
                I(), (_.current = window.requestAnimationFrame(s));
              },
              [I, i.length, d, h, n]
            ),
            P = c.useCallback(() => {
              p?.(), k(void 0), E([]), h?.([], -1), I(), t?.current?.focus();
            }, [I, t, p, h]),
            z = c.useCallback(
              (e) => {
                b(e.target.value),
                  void 0 === a &&
                    ("" === e.target.value
                      ? (k(void 0), E([]), I())
                      : O(e.target.value));
              },
              [O, I, b, a]
            );
          c.useEffect(() => {
            f &&
              null !== o.current &&
              (b(""), o.current.focus({ preventScroll: !0 }));
          }, [f, o, b]);
          let A = c.useCallback(
              (e) => {
                if ((e?.stopPropagation?.(), void 0 === x)) return;
                let t = (x.selectedIndex + 1) % x.results;
                k({ ...x, selectedIndex: t }), h?.(M, t);
              },
              [x, h, M]
            ),
            L = c.useCallback(
              (e) => {
                if ((e?.stopPropagation?.(), void 0 === x)) return;
                let t = (x.selectedIndex - 1) % x.results;
                t < 0 && (t += x.results),
                  k({ ...x, selectedIndex: t }),
                  h?.(M, t);
              },
              [h, M, x]
            ),
            D = c.useCallback(
              (e) => {
                ((e.ctrlKey || e.metaKey) && "KeyF" === e.nativeEvent.code) ||
                "Escape" === e.key
                  ? (P(), e.stopPropagation(), e.preventDefault())
                  : "Enter" === e.key && (e.shiftKey ? L() : A());
              },
              [P, A, L]
            );
          c.useEffect(
            () => () => {
              I();
            },
            [I]
          );
          let [H, F] = c.useState(!1);
          c.useEffect(() => {
            if (f) F(!0);
            else {
              let e = setTimeout(() => F(!1), 150);
              return () => clearTimeout(e);
            }
          }, [f]);
          let $ = c.useMemo(() => {
            let e;
            if (!f && !H) return null;
            void 0 !== x &&
              ((e =
                x.results >= 1e3
                  ? "over 1000"
                  : `${x.results} result${1 !== x.results ? "s" : ""}`),
              x.selectedIndex >= 0 && (e = `${x.selectedIndex + 1} of ${e}`));
            let t = (e) => {
                e.stopPropagation();
              },
              r = Math.floor(((x?.rowsSearched ?? 0) / n) * 100),
              i = { width: `${r}%` };
            return c.createElement(
              e4,
              {
                className: f ? "" : "out",
                onMouseDown: t,
                onMouseMove: t,
                onMouseUp: t,
                onClick: t,
              },
              c.createElement(
                "div",
                { className: "gdg-search-bar-inner" },
                c.createElement("input", {
                  id: g,
                  "aria-hidden": !f,
                  "data-testid": "search-input",
                  ref: o,
                  onChange: z,
                  value: y,
                  tabIndex: f ? void 0 : -1,
                  onKeyDownCapture: D,
                }),
                c.createElement(
                  "button",
                  {
                    "aria-label": "Previous Result",
                    "aria-hidden": !f,
                    tabIndex: f ? void 0 : -1,
                    onClick: L,
                    disabled: (x?.results ?? 0) === 0,
                  },
                  e9
                ),
                c.createElement(
                  "button",
                  {
                    "aria-label": "Next Result",
                    "aria-hidden": !f,
                    tabIndex: f ? void 0 : -1,
                    onClick: A,
                    disabled: (x?.results ?? 0) === 0,
                  },
                  te
                ),
                void 0 !== p &&
                  c.createElement(
                    "button",
                    {
                      "aria-label": "Close Search",
                      "aria-hidden": !f,
                      "data-testid": "search-close-button",
                      tabIndex: f ? void 0 : -1,
                      onClick: P,
                    },
                    tt
                  )
              ),
              void 0 !== x
                ? c.createElement(
                    c.Fragment,
                    null,
                    c.createElement(
                      "div",
                      { className: "gdg-search-status" },
                      c.createElement(
                        "div",
                        { "data-testid": "search-result-area" },
                        e
                      )
                    ),
                    c.createElement("div", {
                      className: "gdg-search-progress",
                      style: i,
                    })
                  )
                : c.createElement(
                    "div",
                    { className: "gdg-search-status" },
                    c.createElement("label", { htmlFor: g }, "Type to search")
                  )
            );
          }, [f, H, x, n, g, o, z, y, D, L, A, p, P]);
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(e8, {
              prelightCells: M,
              accessibilityHeight: e.accessibilityHeight,
              canvasRef: e.canvasRef,
              cellXOffset: e.cellXOffset,
              cellYOffset: e.cellYOffset,
              className: e.className,
              clientSize: e.clientSize,
              columns: e.columns,
              disabledRows: e.disabledRows,
              enableGroups: e.enableGroups,
              fillHandle: e.fillHandle,
              firstColAccessible: e.firstColAccessible,
              nonGrowWidth: e.nonGrowWidth,
              fixedShadowX: e.fixedShadowX,
              fixedShadowY: e.fixedShadowY,
              freezeColumns: e.freezeColumns,
              getCellContent: e.getCellContent,
              getCellRenderer: e.getCellRenderer,
              getGroupDetails: e.getGroupDetails,
              getRowThemeOverride: e.getRowThemeOverride,
              groupHeaderHeight: e.groupHeaderHeight,
              headerHeight: e.headerHeight,
              highlightRegions: e.highlightRegions,
              imageWindowLoader: e.imageWindowLoader,
              initialSize: e.initialSize,
              isFilling: e.isFilling,
              isFocused: e.isFocused,
              lockColumns: e.lockColumns,
              maxColumnWidth: e.maxColumnWidth,
              minColumnWidth: e.minColumnWidth,
              onHeaderMenuClick: e.onHeaderMenuClick,
              onMouseMove: e.onMouseMove,
              onVisibleRegionChanged: e.onVisibleRegionChanged,
              overscrollX: e.overscrollX,
              overscrollY: e.overscrollY,
              preventDiagonalScrolling: e.preventDiagonalScrolling,
              rightElement: e.rightElement,
              rightElementProps: e.rightElementProps,
              rowHeight: e.rowHeight,
              rows: e.rows,
              scrollRef: e.scrollRef,
              selection: e.selection,
              theme: e.theme,
              freezeTrailingRows: e.freezeTrailingRows,
              hasAppendRow: e.hasAppendRow,
              translateX: e.translateX,
              translateY: e.translateY,
              verticalBorder: e.verticalBorder,
              onColumnProposeMove: e.onColumnProposeMove,
              drawFocusRing: e.drawFocusRing,
              drawCell: e.drawCell,
              drawHeader: e.drawHeader,
              experimental: e.experimental,
              gridRef: e.gridRef,
              headerIcons: e.headerIcons,
              isDraggable: e.isDraggable,
              onCanvasBlur: e.onCanvasBlur,
              onCanvasFocused: e.onCanvasFocused,
              onCellFocused: e.onCellFocused,
              onColumnMoved: e.onColumnMoved,
              onColumnResize: e.onColumnResize,
              onColumnResizeEnd: e.onColumnResizeEnd,
              onColumnResizeStart: e.onColumnResizeStart,
              onContextMenu: e.onContextMenu,
              onDragEnd: e.onDragEnd,
              onDragLeave: e.onDragLeave,
              onDragOverCell: e.onDragOverCell,
              onDragStart: e.onDragStart,
              onDrop: e.onDrop,
              onItemHovered: e.onItemHovered,
              onKeyDown: e.onKeyDown,
              onKeyUp: e.onKeyUp,
              onMouseDown: e.onMouseDown,
              onMouseUp: e.onMouseUp,
              onRowMoved: e.onRowMoved,
              smoothScrollX: e.smoothScrollX,
              smoothScrollY: e.smoothScrollY,
            }),
            $
          );
        };
      var tn = r(20956);
      let ti = (0, e3.z)("input")({
          name: "RenameInput",
          class: "gdg-r17m35ur",
          propsAsIs: !1,
          vars: {
            "r17m35ur-0": [(e) => Math.max(16, e.targetHeight - 10), "px"],
          },
        }),
        to = (e) => {
          let {
              bounds: t,
              group: r,
              onClose: n,
              canvasBounds: i,
              onFinish: o,
            } = e,
            [l, a] = c.useState(r);
          return c.createElement(
            tn.Z,
            {
              style: {
                position: "absolute",
                left: t.x - i.left + 1,
                top: t.y - i.top,
                width: t.width - 2,
                height: t.height,
              },
              className: "gdg-c1tqibwd",
              onClickOutside: n,
            },
            c.createElement(ti, {
              targetHeight: t.height,
              "data-testid": "group-rename-input",
              value: l,
              onBlur: n,
              onFocus: (e) => e.target.setSelectionRange(0, l.length),
              onChange: (e) => a(e.target.value),
              onKeyDown: (e) => {
                "Enter" === e.key ? o(l) : "Escape" === e.key && n();
              },
              autoFocus: !0,
            })
          );
        };
      function tl(e, t, r, n, i, o, l, a, s) {
        let c = 0,
          u =
            void 0 === i
              ? []
              : i.map((r) => {
                  let i = (function (e, t, r, n) {
                    let i = n(t);
                    return i?.measure?.(e, t, r) ?? 150;
                  })(e, r[n], t, s);
                  return (c = Math.max(c, i)), i;
                });
        if (u.length > 5 && a) {
          c = 0;
          let e = 0;
          for (let t of u) e += t;
          let t = e / u.length;
          for (let e = 0; e < u.length; e++)
            u[e] >= 2 * t ? (u[e] = 0) : (c = Math.max(c, u[e]));
        }
        c = Math.max(
          c,
          e.measureText(r.title).width + 16 + (void 0 === r.icon ? 0 : 28)
        );
        let d = Math.max(Math.ceil(o), Math.min(Math.floor(l), Math.ceil(c)));
        return { ...r, width: d };
      }
      function ta(e, t, r) {
        let n = (function e(t, r) {
          if (0 === t.length) return !1;
          if (t.includes("|")) {
            let n = t.split("|");
            for (let t of n) if (e(t, r)) return !0;
            return !1;
          }
          let n = !1,
            i = !1,
            o = !1,
            l = !1,
            a = t.split("+"),
            s = a.pop();
          if (
            !(function (e, t) {
              if (void 0 === e) return !1;
              if (e.length > 1 && e.startsWith("_")) {
                let r = Number.parseInt(e.slice(1));
                return r === t.keyCode;
              }
              return 1 === e.length && e >= "a" && e <= "z"
                ? e.toUpperCase().codePointAt(0) === t.keyCode
                : e === t.key;
            })(s, r)
          )
            return !1;
          if ("any" === a[0]) return !0;
          for (let e of a)
            switch (e) {
              case "ctrl":
                n = !0;
                break;
              case "shift":
                i = !0;
                break;
              case "alt":
                o = !0;
                break;
              case "meta":
                l = !0;
                break;
              case "primary":
                eX.value ? (l = !0) : (n = !0);
            }
          return (
            r.altKey === o &&
            r.ctrlKey === n &&
            r.shiftKey === i &&
            r.metaKey === l
          );
        })(e, t);
        return n && (r.didMatch = !0), n;
      }
      function ts(e, t) {
        return (
          (t ? /[\t\n",]/ : /[\t\n"]/).test(e) &&
            (e = `"${e.replace(/"/g, '""')}"`),
          e
        );
      }
      function tc(e) {
        return e
          .replace(/\t/g, "    ")
          .replace(/ {2,}/g, (e) => "<span> </span>".repeat(e.length));
      }
      function tu(e) {
        return (
          '"' +
          e
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;") +
          '"'
        );
      }
      function td(e) {
        let t;
        let r = document.createElement("html");
        r.innerHTML = e.replace(/&nbsp;/g, " ");
        let n = r.querySelector("table");
        if (null === n) return;
        let i = [n],
          o = [];
        for (; i.length > 0; ) {
          let e = i.pop();
          if (void 0 === e) break;
          if (e instanceof HTMLTableElement || "TBODY" === e.nodeName)
            i.push(...[...e.children].reverse());
          else if (e instanceof HTMLTableRowElement)
            void 0 !== t && o.push(t),
              (t = []),
              i.push(...[...e.children].reverse());
          else if (e instanceof HTMLTableCellElement) {
            let r = e.cloneNode(!0),
              n = 1 === r.children.length && "P" === r.children[0].nodeName,
              i = n ? r.children[0] : null,
              o = 1 === i?.children.length && "FONT" === i.children[0].nodeName,
              l = r.querySelectorAll("br");
            for (let e of l) e.replaceWith("\n");
            let a = r.getAttribute("gdg-raw-value"),
              s = r.getAttribute("gdg-format") ?? "string";
            if (null !== r.querySelector("a"))
              t?.push({
                rawValue: r.querySelector("a")?.getAttribute("href") ?? "",
                formatted: r.textContent ?? "",
                format: s,
              });
            else if (null !== r.querySelector("ol")) {
              let e = r.querySelectorAll("li");
              t?.push({
                rawValue: [...e].map(
                  (e) => e.getAttribute("gdg-raw-value") ?? ""
                ),
                formatted: [...e].map((e) => e.textContent ?? ""),
                format: "string-array",
              });
            } else if (null !== a)
              t?.push({
                rawValue: a
                  .replace(/&quot;/g, '"')
                  .replace(/&lt;/g, "<")
                  .replace(/&gt;/g, ">")
                  .replace(/&amp;/g, "&"),
                formatted: r.textContent ?? "",
                format: s,
              });
            else {
              let e = r.textContent ?? "";
              o && (e = e.replace(/\n(?!\n)/g, "")),
                t?.push({ rawValue: e ?? "", formatted: e ?? "", format: s });
            }
          }
        }
        return void 0 !== t && o.push(t), o;
      }
      function th(e) {
        return (
          e.startsWith('"') &&
            e.endsWith('"') &&
            (e = e.slice(1, -1).replace(/""/g, '"')),
          e
        );
      }
      function tf(e, t, r) {
        let n = (function (e, t) {
            let r = (function (e, t) {
                let r = e.map((e, r) => {
                  let n = t[r];
                  return e.map((e) =>
                    void 0 !== e.span && e.span[0] !== n
                      ? { formatted: "", rawValue: "", format: "string" }
                      : (function (e) {
                          if (void 0 !== e.copyData)
                            return {
                              formatted: e.copyData,
                              rawValue: e.copyData,
                              format: "string",
                            };
                          switch (e.kind) {
                            case m.p6.Boolean:
                              return {
                                formatted:
                                  !0 === e.data
                                    ? "TRUE"
                                    : !1 === e.data
                                      ? "FALSE"
                                      : e.data === m.sd
                                        ? "INDETERMINATE"
                                        : "",
                                rawValue: e.data,
                                format: "boolean",
                              };
                            case m.p6.Custom:
                              return {
                                formatted: e.copyData,
                                rawValue: e.copyData,
                                format: "string",
                              };
                            case m.p6.Image:
                            case m.p6.Bubble:
                              return {
                                formatted: e.data,
                                rawValue: e.data,
                                format: "string-array",
                              };
                            case m.p6.Drilldown:
                              return {
                                formatted: e.data.map((e) => e.text),
                                rawValue: e.data.map((e) => e.text),
                                format: "string-array",
                              };
                            case m.p6.Text:
                              return {
                                formatted: e.displayData ?? e.data,
                                rawValue: e.data,
                                format: "string",
                              };
                            case m.p6.Uri:
                              return {
                                formatted: e.displayData ?? e.data,
                                rawValue: e.data,
                                format: "url",
                              };
                            case m.p6.Markdown:
                            case m.p6.RowID:
                              return {
                                formatted: e.data,
                                rawValue: e.data,
                                format: "string",
                              };
                            case m.p6.Number:
                              return {
                                formatted: e.displayData,
                                rawValue: e.data,
                                format: "number",
                              };
                            case m.p6.Loading:
                              return {
                                formatted: "#LOADING",
                                rawValue: "",
                                format: "string",
                              };
                            case m.p6.Protected:
                              return {
                                formatted: "************",
                                rawValue: "",
                                format: "string",
                              };
                            default:
                              (0, u.vE)(e);
                          }
                        })(e)
                  );
                });
                return r;
              })(e, t),
              n = (function (e) {
                let t = [];
                for (let r of e) {
                  let e = [];
                  for (let t of r)
                    "url" === t.format
                      ? e.push(t.rawValue?.toString() ?? "")
                      : "string-array" === t.format
                        ? e.push(t.formatted.map((e) => ts(e, !0)).join(","))
                        : e.push(ts(t.formatted, !1));
                  t.push(e.join("	"));
                }
                return t.join("\n");
              })(r),
              i = (function (e) {
                let t = [];
                for (let r of (t.push(
                  '<style type="text/css"><!--br {mso-data-placement:same-cell;}--></style>',
                  "<table><tbody>"
                ),
                e)) {
                  for (let e of (t.push("<tr>"), r)) {
                    let r = `gdg-format="${e.format}"`;
                    "url" === e.format
                      ? t.push(
                          `<td ${r}><a href="${e.rawValue}">${tc(
                            e.formatted
                          )}</a></td>`
                        )
                      : "string-array" === e.format
                        ? t.push(
                            `<td ${r}><ol>${e.formatted
                              .map(
                                (t, r) =>
                                  `<li gdg-raw-value=${tu(e.rawValue[r])}>` +
                                  tc(t) +
                                  "</li>"
                              )
                              .join("")}</ol></td>`
                          )
                        : t.push(
                            `<td gdg-raw-value=${tu(
                              e.rawValue?.toString() ?? ""
                            )} ${r}>${tc(e.formatted)}</td>`
                          );
                  }
                  t.push("</tr>");
                }
                return t.push("</tbody></table>"), t.join("");
              })(r);
            return { textPlain: n, textHtml: i };
          })(e, t),
          i = (e) => {
            window.navigator.clipboard?.writeText(e);
          },
          o = (e, t) =>
            window.navigator.clipboard?.write !== void 0 &&
            (window.navigator.clipboard.write([
              new ClipboardItem({
                "text/plain": new Blob([e], { type: "text/plain" }),
                "text/html": new Blob([t], { type: "text/html" }),
              }),
            ]),
            !0);
        window.navigator.clipboard?.write !== void 0 ||
        r?.clipboardData !== void 0
          ? ((e, t) => {
              try {
                if (void 0 === r || null === r.clipboardData)
                  throw Error("No clipboard data");
                r?.clipboardData?.setData("text/plain", e),
                  r?.clipboardData?.setData("text/html", t);
              } catch {
                o(e, t) || i(e);
              }
            })(n.textPlain, n.textHtml)
          : i(n.textPlain),
          r?.preventDefault();
      }
      function tp(e) {
        return "string" == typeof e ? e : `${e}px`;
      }
      let tg = (0, e3.z)("div")({
          name: "Wrapper",
          class: "gdg-wmyidgi",
          propsAsIs: !1,
          vars: {
            "wmyidgi-0": [(e) => e.innerWidth],
            "wmyidgi-1": [(e) => e.innerHeight],
          },
        }),
        tm = (e) => {
          let { inWidth: t, inHeight: r, children: n, ...i } = e;
          return c.createElement(
            tg,
            { innerHeight: tp(r), innerWidth: tp(t), ...i },
            n
          );
        },
        tv = {
          downFill: !1,
          rightFill: !1,
          clear: !0,
          closeOverlay: !0,
          acceptOverlayDown: !0,
          acceptOverlayUp: !0,
          acceptOverlayLeft: !0,
          acceptOverlayRight: !0,
          copy: !0,
          paste: !0,
          cut: !0,
          search: !1,
          delete: !0,
          activateCell: !0,
          scrollToSelectedCell: !0,
          goToFirstCell: !0,
          goToFirstColumn: !0,
          goToFirstRow: !0,
          goToLastCell: !0,
          goToLastColumn: !0,
          goToLastRow: !0,
          goToNextPage: !0,
          goToPreviousPage: !0,
          selectToFirstCell: !0,
          selectToFirstColumn: !0,
          selectToFirstRow: !0,
          selectToLastCell: !0,
          selectToLastColumn: !0,
          selectToLastRow: !0,
          selectAll: !0,
          selectRow: !0,
          selectColumn: !0,
          goUpCell: !0,
          goRightCell: !0,
          goDownCell: !0,
          goLeftCell: !0,
          goUpCellRetainSelection: !0,
          goRightCellRetainSelection: !0,
          goDownCellRetainSelection: !0,
          goLeftCellRetainSelection: !0,
          selectGrowUp: !0,
          selectGrowRight: !0,
          selectGrowDown: !0,
          selectGrowLeft: !0,
        };
      function tw(e, t) {
        return !0 === e ? t : !1 === e ? "" : e;
      }
      function ty(e) {
        let t = eX.value;
        return {
          activateCell: tw(e.activateCell, " |Enter|shift+Enter"),
          clear: tw(e.clear, "any+Escape"),
          closeOverlay: tw(e.closeOverlay, "any+Escape"),
          acceptOverlayDown: tw(e.acceptOverlayDown, "Enter"),
          acceptOverlayUp: tw(e.acceptOverlayUp, "shift+Enter"),
          acceptOverlayLeft: tw(e.acceptOverlayLeft, "shift+Tab"),
          acceptOverlayRight: tw(e.acceptOverlayRight, "Tab"),
          copy: e.copy,
          cut: e.cut,
          delete: tw(e.delete, t ? "Backspace|Delete" : "Delete"),
          downFill: tw(e.downFill, "primary+_68"),
          scrollToSelectedCell: tw(e.scrollToSelectedCell, "primary+Enter"),
          goDownCell: tw(e.goDownCell, "ArrowDown"),
          goDownCellRetainSelection: tw(
            e.goDownCellRetainSelection,
            "alt+ArrowDown"
          ),
          goLeftCell: tw(e.goLeftCell, "ArrowLeft|shift+Tab"),
          goLeftCellRetainSelection: tw(
            e.goLeftCellRetainSelection,
            "alt+ArrowLeft"
          ),
          goRightCell: tw(e.goRightCell, "ArrowRight|Tab"),
          goRightCellRetainSelection: tw(
            e.goRightCellRetainSelection,
            "alt+ArrowRight"
          ),
          goUpCell: tw(e.goUpCell, "ArrowUp"),
          goUpCellRetainSelection: tw(e.goUpCellRetainSelection, "alt+ArrowUp"),
          goToFirstCell: tw(e.goToFirstCell, "primary+Home"),
          goToFirstColumn: tw(e.goToFirstColumn, "Home|primary+ArrowLeft"),
          goToFirstRow: tw(e.goToFirstRow, "primary+ArrowUp"),
          goToLastCell: tw(e.goToLastCell, "primary+End"),
          goToLastColumn: tw(e.goToLastColumn, "End|primary+ArrowRight"),
          goToLastRow: tw(e.goToLastRow, "primary+ArrowDown"),
          goToNextPage: tw(e.goToNextPage, "PageDown"),
          goToPreviousPage: tw(e.goToPreviousPage, "PageUp"),
          paste: e.paste,
          rightFill: tw(e.rightFill, "primary+_82"),
          search: tw(e.search, "primary+f"),
          selectAll: tw(e.selectAll, "primary+a"),
          selectColumn: tw(e.selectColumn, "ctrl+ "),
          selectGrowDown: tw(e.selectGrowDown, "shift+ArrowDown"),
          selectGrowLeft: tw(e.selectGrowLeft, "shift+ArrowLeft"),
          selectGrowRight: tw(e.selectGrowRight, "shift+ArrowRight"),
          selectGrowUp: tw(e.selectGrowUp, "shift+ArrowUp"),
          selectRow: tw(e.selectRow, "shift+ "),
          selectToFirstCell: tw(e.selectToFirstCell, "primary+shift+Home"),
          selectToFirstColumn: tw(
            e.selectToFirstColumn,
            "primary+shift+ArrowLeft"
          ),
          selectToFirstRow: tw(e.selectToFirstRow, "primary+shift+ArrowUp"),
          selectToLastCell: tw(e.selectToLastCell, "primary+shift+End"),
          selectToLastColumn: tw(
            e.selectToLastColumn,
            "primary+shift+ArrowRight"
          ),
          selectToLastRow: tw(e.selectToLastRow, "primary+shift+ArrowDown"),
        };
      }
      let tb = c.lazy(async () => await r.e(9610).then(r.bind(r, 89610))),
        tx = 0;
      function tk(e, t) {
        return void 0 === e ||
          0 === t ||
          (0 === e.columns.length && void 0 === e.current)
          ? e
          : {
              current:
                void 0 === e.current
                  ? void 0
                  : {
                      cell: [e.current.cell[0] + t, e.current.cell[1]],
                      range: { ...e.current.range, x: e.current.range.x + t },
                      rangeStack: e.current.rangeStack.map((e) => ({
                        ...e,
                        x: e.x + t,
                      })),
                    },
              rows: e.rows,
              columns: e.columns.offset(t),
            };
      }
      let tS = { kind: m.p6.Loading, allowOverlay: !1 },
        tC = { columns: m.EV.empty(), rows: m.EV.empty(), current: void 0 },
        t_ = (e, t) => {
          let [r, n] = c.useState(tC),
            [i, o] = c.useState(),
            l = c.useRef(null),
            a = c.useRef(null),
            [s, y] = c.useState(),
            b = c.useRef(null),
            x = c.useRef(),
            k = "undefined" == typeof window ? null : window,
            {
              rowMarkers: S = "none",
              rowMarkerWidth: C,
              imageEditorOverride: _,
              getRowThemeOverride: R,
              markdownDivCreateNode: E,
              width: T,
              height: O,
              columns: P,
              rows: z,
              getCellContent: A,
              onCellClicked: F,
              onCellActivated: $,
              onFillPattern: N,
              onFinishedEditing: B,
              coercePasteValue: W,
              drawHeader: j,
              drawCell: U,
              onHeaderClicked: q,
              onColumnProposeMove: X,
              spanRangeBehavior: K = "default",
              onGroupHeaderClicked: Y,
              onCellContextMenu: G,
              className: J,
              onHeaderContextMenu: Q,
              getCellsForSelection: Z,
              onGroupHeaderContextMenu: ee,
              onGroupHeaderRenamed: et,
              onCellEdited: er,
              onCellsEdited: en,
              onSearchResultsChanged: ei,
              searchResults: eo,
              onSearchValueChange: el,
              searchValue: ea,
              onKeyDown: es,
              onKeyUp: ec,
              keybindings: eu,
              onRowAppended: ed,
              onColumnMoved: ef,
              validateCell: ep,
              highlightRegions: eg,
              rangeSelect: ev = "rect",
              columnSelect: ew = "multi",
              rowSelect: eb = "multi",
              rangeSelectionBlending: ex = "exclusive",
              columnSelectionBlending: ek = "exclusive",
              rowSelectionBlending: eS = "exclusive",
              onDelete: eC,
              onDragStart: e_,
              onMouseMove: eR,
              onPaste: eE,
              copyHeaders: eM = !1,
              freezeColumns: eT = 0,
              cellActivationBehavior: eO = "second-click",
              rowSelectionMode: eP = "auto",
              rowMarkerStartIndex: ez = 1,
              rowMarkerTheme: eA,
              onHeaderMenuClick: eL,
              getGroupDetails: eD,
              onSearchClose: eH,
              onItemHovered: eF,
              onSelectionCleared: e$,
              showSearch: eN,
              onVisibleRegionChanged: eB,
              gridSelection: eV,
              onGridSelectionChange: eW,
              minColumnWidth: ej = 50,
              maxColumnWidth: eU = 500,
              maxColumnAutoWidth: eq,
              provideEditor: eQ,
              trailingRowOptions: eZ,
              freezeTrailingRows: e0 = 0,
              allowedFillDirections: e1 = "orthogonal",
              scrollOffsetX: e2,
              scrollOffsetY: e3,
              verticalBorder: e7,
              onDragOverCell: e6,
              onDrop: e5,
              onColumnResize: e8,
              onColumnResizeEnd: e4,
              onColumnResizeStart: e9,
              customRenderers: te,
              fillHandle: tt,
              drawFocusRing: tn,
              experimental: ti,
              fixedShadowX: ts,
              fixedShadowY: tc,
              headerIcons: tu,
              imageWindowLoader: tp,
              initialSize: tg,
              isDraggable: tw,
              onDragLeave: t_,
              onRowMoved: tR,
              overscrollX: tE,
              overscrollY: tM,
              preventDiagonalScrolling: tI,
              rightElement: tT,
              rightElementProps: tO,
              trapFocus: tP = !1,
              smoothScrollX: tz,
              smoothScrollY: tA,
              scaleToRem: tL = !1,
              rowHeight: tD = 34,
              headerHeight: tH = 36,
              groupHeaderHeight: tF = tH,
              theme: t$,
              isOutsideClick: tN,
              renderers: tB,
            } = e,
            tV = Math.max(ej, 20),
            tW = Math.max(eU, tV),
            tj = c.useMemo(
              () =>
                "undefined" == typeof window
                  ? { fontSize: "16px" }
                  : window.getComputedStyle(document.documentElement),
              []
            ),
            tU = tj.fontSize,
            tq = c.useMemo(() => Number.parseFloat(tU), [tU]),
            {
              rowHeight: tX,
              headerHeight: tK,
              groupHeaderHeight: tY,
              theme: tG,
              overscrollX: tJ,
              overscrollY: tQ,
            } = (function ({
              rowHeight: e,
              headerHeight: t,
              groupHeaderHeight: r,
              theme: n,
              overscrollX: i,
              overscrollY: o,
              scaleToRem: l,
              remSize: a,
            }) {
              let [s, u, d, h, f, p] = c.useMemo(() => {
                if (!l || 16 === a) return [e, t, r, n, i, o];
                let s = a / 16,
                  c = (0, eh.Zu)();
                return [
                  "number" == typeof e ? e * s : (t) => Math.ceil(e(t) * s),
                  Math.ceil(t * s),
                  Math.ceil(r * s),
                  {
                    ...n,
                    headerIconSize: (n?.headerIconSize ?? c.headerIconSize) * s,
                    cellHorizontalPadding:
                      (n?.cellHorizontalPadding ?? c.cellHorizontalPadding) * s,
                    cellVerticalPadding:
                      (n?.cellVerticalPadding ?? c.cellVerticalPadding) * s,
                  },
                  Math.ceil((i ?? 0) * s),
                  Math.ceil((o ?? 0) * s),
                ];
              }, [r, t, i, o, a, e, l, n]);
              return {
                rowHeight: s,
                headerHeight: u,
                groupHeaderHeight: d,
                theme: h,
                overscrollX: f,
                overscrollY: p,
              };
            })({
              groupHeaderHeight: tF,
              headerHeight: tH,
              overscrollX: tE,
              overscrollY: tM,
              remSize: tq,
              rowHeight: tD,
              scaleToRem: tL,
              theme: t$,
            }),
            tZ = (function (e) {
              let t = (function (e) {
                let t = c.useRef(e);
                return (
                  (0, u.vZ)(e, t.current) || (t.current = e),
                  c.useMemo(() => t.current, [t.current])
                );
              })(e);
              return c.useMemo(() => {
                if (void 0 === t) return ty(tv);
                let e = {
                  ...t,
                  goToNextPage:
                    t?.goToNextPage ?? t?.pageDown ?? tv.goToNextPage,
                  goToPreviousPage:
                    t?.goToPreviousPage ?? t?.pageUp ?? tv.goToPreviousPage,
                  goToFirstCell:
                    t?.goToFirstCell ?? t?.first ?? tv.goToFirstCell,
                  goToLastCell: t?.goToLastCell ?? t?.last ?? tv.goToLastCell,
                  selectToFirstCell:
                    t?.selectToFirstCell ?? t?.first ?? tv.selectToFirstCell,
                  selectToLastCell:
                    t?.selectToLastCell ?? t?.last ?? tv.selectToLastCell,
                };
                return ty({ ...tv, ...e });
              }, [t]);
            })(eu),
            t0 = C ?? (z > 1e4 ? 48 : z > 1e3 ? 44 : z > 100 ? 36 : 32),
            t1 = "none" !== S,
            t2 = t1 ? 1 : 0,
            t3 = void 0 !== ed,
            t7 = eZ?.sticky === !0,
            [t6, t5] = c.useState(!1),
            t8 = c.useCallback(() => {
              void 0 !== eH ? eH() : t5(!1);
            }, [eH]),
            t4 = c.useMemo(
              () => (void 0 === eV ? void 0 : tk(eV, t2)),
              [eV, t2]
            ),
            t9 = t4 ?? r,
            re = c.useRef(new AbortController());
          c.useEffect(
            () => () => {
              re?.current.abort();
            },
            []
          );
          let [rt, rr] = (function (e, t, r, n, i) {
              let o = c.useCallback(
                  (r) => {
                    if (!0 === e) {
                      let e = [];
                      for (let n = r.y; n < r.y + r.height; n++) {
                        let o = [];
                        for (let e = r.x; e < r.x + r.width; e++)
                          e < 0 || n >= i
                            ? o.push({ kind: m.p6.Loading, allowOverlay: !1 })
                            : o.push(t([e, n]));
                        e.push(o);
                      }
                      return e;
                    }
                    return e?.(r, n.signal) ?? [];
                  },
                  [n.signal, t, e, i]
                ),
                l = void 0 !== e ? o : void 0,
                a = c.useCallback(
                  (e) => {
                    if (void 0 === l) return [];
                    let t = { ...e, x: e.x - r };
                    if (t.x < 0) {
                      (t.x = 0), t.width--;
                      let e = l(t, n.signal);
                      return "function" == typeof e
                        ? async () =>
                            (await e()).map((e) => [
                              { kind: m.p6.Loading, allowOverlay: !1 },
                              ...e,
                            ])
                        : e.map((e) => [
                            { kind: m.p6.Loading, allowOverlay: !1 },
                            ...e,
                          ]);
                    }
                    return l(t, n.signal);
                  },
                  [n.signal, l, r]
                );
              return [void 0 !== e ? a : void 0, l];
            })(Z, A, t2, re.current, z),
            rn = c.useCallback(
              (e, t, r) => {
                if (void 0 === ep) return !0;
                let n = [e[0] - t2, e[1]];
                return ep?.(n, t, r);
              },
              [t2, ep]
            ),
            ri = c.useRef(eV),
            ro = c.useCallback(
              (e, t) => {
                t &&
                  (e = (function (e, t, r, n, i) {
                    let o = e;
                    if (
                      "allowPartial" === n ||
                      void 0 === e.current ||
                      void 0 === t
                    )
                      return e;
                    let l = !1;
                    do {
                      if (e?.current === void 0) break;
                      let n = e.current?.range,
                        a = [];
                      if (n.width > 2) {
                        let e = t(
                          { x: n.x, y: n.y, width: 1, height: n.height },
                          i.signal
                        );
                        if ("function" == typeof e) return o;
                        a.push(...e);
                        let r = t(
                          {
                            x: n.x + n.width - 1,
                            y: n.y,
                            width: 1,
                            height: n.height,
                          },
                          i.signal
                        );
                        if ("function" == typeof r) return o;
                        a.push(...r);
                      } else {
                        let e = t(
                          { x: n.x, y: n.y, width: n.width, height: n.height },
                          i.signal
                        );
                        if ("function" == typeof e) return o;
                        a.push(...e);
                      }
                      let s = n.x - r,
                        c = n.x + n.width - 1 - r;
                      for (let e of a)
                        for (let t of e)
                          void 0 !== t.span &&
                            ((s = Math.min(t.span[0], s)),
                            (c = Math.max(t.span[1], c)));
                      s === n.x - r && c === n.x + n.width - 1 - r
                        ? (l = !0)
                        : (e = {
                            current: {
                              cell: e.current.cell ?? [0, 0],
                              range: {
                                x: s + r,
                                y: n.y,
                                width: c - s + 1,
                                height: n.height,
                              },
                              rangeStack: e.current.rangeStack,
                            },
                            columns: e.columns,
                            rows: e.rows,
                          });
                    } while (!l);
                    return e;
                  })(e, rt, t2, K, re.current)),
                  void 0 !== eW
                    ? ((ri.current = tk(e, -t2)), eW(ri.current))
                    : n(e);
              },
              [eW, rt, t2, K]
            ),
            rl = w(
              e8,
              c.useCallback(
                (e, t, r, n) => {
                  e8?.(P[r - t2], t, r - t2, n);
                },
                [e8, t2, P]
              )
            ),
            ra = w(
              e4,
              c.useCallback(
                (e, t, r, n) => {
                  e4?.(P[r - t2], t, r - t2, n);
                },
                [e4, t2, P]
              )
            ),
            rs = w(
              e9,
              c.useCallback(
                (e, t, r, n) => {
                  e9?.(P[r - t2], t, r - t2, n);
                },
                [e9, t2, P]
              )
            ),
            rc = w(
              j,
              c.useCallback(
                (e, t) =>
                  j?.({ ...e, columnIndex: e.columnIndex - t2 }, t) ?? !1,
                [j, t2]
              )
            ),
            ru = w(
              U,
              c.useCallback(
                (e, t) => U?.({ ...e, col: e.col - t2 }, t) ?? !1,
                [U, t2]
              )
            ),
            rd = c.useCallback(
              (e) => {
                if (void 0 !== eC) {
                  let t = eC(tk(e, -t2));
                  return "boolean" == typeof t ? t : tk(t, t2);
                }
                return !0;
              },
              [eC, t2]
            ),
            [rh, rf, rp] = (function (e, t, r, n, i, o) {
              let l = c.useCallback(
                  (l, a, s, c) => {
                    ("cell" === o || "multi-cell" === o) &&
                      void 0 !== l &&
                      (l = {
                        ...l,
                        range: {
                          x: l.cell[0],
                          y: l.cell[1],
                          width: 1,
                          height: 1,
                        },
                      });
                    let u = "mixed" === r && (s || "drag" === c),
                      d = {
                        current:
                          void 0 === l
                            ? void 0
                            : {
                                ...l,
                                rangeStack:
                                  "drag" === c
                                    ? e.current?.rangeStack ?? []
                                    : [],
                              },
                        columns: "mixed" === n && u ? e.columns : m.EV.empty(),
                        rows: "mixed" === i && u ? e.rows : m.EV.empty(),
                      };
                    s &&
                      ("multi-rect" === o || "multi-cell" === o) &&
                      void 0 !== d.current &&
                      void 0 !== e.current &&
                      (d = {
                        ...d,
                        current: {
                          ...d.current,
                          rangeStack: [
                            ...e.current.rangeStack,
                            e.current.range,
                          ],
                        },
                      }),
                      t(d, a);
                  },
                  [n, e, r, o, i, t]
                ),
                a = c.useCallback(
                  (o, l, a) => {
                    let s;
                    if (
                      ((o = o ?? e.rows),
                      void 0 !== l && (o = o.add(l)),
                      "exclusive" === i && o.length > 0)
                    )
                      s = { current: void 0, columns: m.EV.empty(), rows: o };
                    else {
                      let t = a && "mixed" === r ? e.current : void 0;
                      s = {
                        current: t,
                        columns: a && "mixed" === n ? e.columns : m.EV.empty(),
                        rows: o,
                      };
                    }
                    t(s, !1);
                  },
                  [n, e, r, i, t]
                ),
                s = c.useCallback(
                  (o, l, a) => {
                    let s;
                    if (
                      ((o = o ?? e.columns),
                      void 0 !== l && (o = o.add(l)),
                      "exclusive" === n && o.length > 0)
                    )
                      s = { current: void 0, rows: m.EV.empty(), columns: o };
                    else {
                      let t = a && "mixed" === r ? e.current : void 0;
                      s = {
                        current: t,
                        rows: a && "mixed" === i ? e.rows : m.EV.empty(),
                        columns: o,
                      };
                    }
                    t(s, !1);
                  },
                  [n, e, r, i, t]
                );
              return [l, a, s];
            })(t9, ro, ex, ek, eS, ev),
            rg = c.useMemo(() => (0, eh.yR)((0, eh.Zu)(), tG), [tG]),
            [rm, rv] = c.useState([0, 0, 0]),
            rw = c.useMemo(() => {
              if (void 0 === tB) return {};
              let e = {};
              for (let t of tB) e[t.kind] = t;
              return e;
            }, [tB]),
            ry = c.useCallback(
              (e) =>
                e.kind !== m.p6.Custom
                  ? rw[e.kind]
                  : te?.find((t) => t.isMatch(e)),
              [te, rw]
            ),
            { sizedColumns: rb, nonGrowWidth: rx } = (function (
              e,
              t,
              r,
              n,
              i,
              o,
              l,
              a,
              s
            ) {
              let u = c.useRef(t),
                d = c.useRef(r),
                h = c.useRef(l);
              (u.current = t), (d.current = r), (h.current = l);
              let [f, p] = c.useMemo(() => {
                if ("undefined" == typeof window) return [null, null];
                let e = document.createElement("canvas");
                return (
                  (e.style.display = "none"),
                  (e.style.opacity = "0"),
                  (e.style.position = "fixed"),
                  [e, e.getContext("2d", { alpha: !1 })]
                );
              }, []);
              c.useLayoutEffect(
                () => (
                  f && document.documentElement.append(f),
                  () => {
                    f?.remove();
                  }
                ),
                [f]
              );
              let g = c.useRef({}),
                v = c.useRef(),
                [w, y] = c.useState();
              return (
                c.useLayoutEffect(() => {
                  let t = d.current;
                  if (void 0 === t || e.every(m.Sq)) return;
                  let r = Math.max(1, 10 - Math.floor(e.length / 1e4)),
                    n = 0;
                  r < u.current && r > 1 && (r--, (n = 1));
                  let i = {
                      x: 0,
                      y: 0,
                      width: e.length,
                      height: Math.min(u.current, r),
                    },
                    o = { x: 0, y: u.current - 1, width: e.length, height: 1 },
                    l = async () => {
                      let r;
                      let l = t(i, s.signal),
                        a = n > 0 ? t(o, s.signal) : void 0;
                      (r = "object" == typeof l ? l : await (0, m.rL)(l)),
                        void 0 !== a &&
                          (r =
                            "object" == typeof a
                              ? [...r, ...a]
                              : [...r, ...(await (0, m.rL)(a))]),
                        (v.current = e),
                        y(r);
                    };
                  l();
                }, [s.signal, e]),
                c.useMemo(() => {
                  let t = e.every(m.Sq)
                      ? e
                      : null === p
                        ? e.map((e) =>
                            (0, m.Sq)(e) ? e : { ...e, width: 150 }
                          )
                        : ((p.font = h.current.baseFontFull),
                          e.map((t, r) => {
                            if ((0, m.Sq)(t)) return t;
                            if (void 0 !== g.current[t.id])
                              return { ...t, width: g.current[t.id] };
                            if (
                              void 0 === w ||
                              v.current !== e ||
                              void 0 === t.id
                            )
                              return { ...t, width: 150 };
                            let n = tl(p, l, t, r, w, i, o, !0, a);
                            return (g.current[t.id] = n.width), n;
                          })),
                    r = 0,
                    s = 0,
                    c = [];
                  for (let [e, n] of t.entries())
                    (r += n.width),
                      void 0 !== n.grow &&
                        n.grow > 0 &&
                        ((s += n.grow), c.push(e));
                  if (r < n && c.length > 0) {
                    let e = [...t],
                      i = n - r,
                      o = i;
                    for (let r = 0; r < c.length; r++) {
                      let n = c[r],
                        l = (t[n].grow ?? 0) / s,
                        a =
                          r === c.length - 1
                            ? o
                            : Math.min(o, Math.floor(i * l));
                      (e[n] = {
                        ...t[n],
                        growOffset: a,
                        width: t[n].width + a,
                      }),
                        (o -= a);
                    }
                    t = e;
                  }
                  return { sizedColumns: t, nonGrowWidth: r };
                }, [n, e, p, w, l, i, o, a])
              );
            })(
              P,
              z,
              rr,
              rm[0] - (0 === t2 ? 0 : t0) - rm[2],
              tV,
              Math.max(eq ?? tW, tV),
              rg,
              ry,
              re.current
            );
          "none" !== S && (rx += t0);
          let rk = c.useMemo(() => rb.some((e) => void 0 !== e.group), [rb]),
            rS = rk ? tK + tY : tK,
            rC = t9.rows.length,
            r_ = "none" === S ? "" : 0 === rC ? m.YK : rC === z ? m.qT : m.iJ,
            rR = c.useMemo(
              () =>
                "none" === S
                  ? rb
                  : [
                      {
                        title: r_,
                        width: t0,
                        icon: void 0,
                        hasMenu: !1,
                        style: "normal",
                        themeOverride: eA,
                      },
                      ...rb,
                    ],
              [rb, t0, S, r_, eA]
            ),
            [rE, rM] = c.useMemo(
              () => [
                void 0 !== e3 && "number" == typeof tX
                  ? Math.floor(e3 / tX)
                  : 0,
                void 0 !== e3 && "number" == typeof tX ? -(e3 % tX) : 0,
              ],
              [e3, tX]
            ),
            rI = c.useRef({ height: 1, width: 1, x: 0, y: 0 }),
            rT = c.useMemo(
              () => ({
                x: rI.current.x,
                y: rE,
                width: rI.current.width ?? 1,
                height: rI.current.height ?? 1,
                ty: rM,
              }),
              [rM, rE]
            ),
            rO = c.useRef(!1),
            [rP, rz, rA] = (function (e) {
              let t = c.useRef([I, e]);
              t.current[1] !== e && (t.current[0] = e), (t.current[1] = e);
              let [r, n] = c.useState(e),
                [, i] = c.useState(),
                o = c.useCallback((e) => {
                  let r = t.current[0];
                  (r === I || (e = "function" == typeof e ? e(r) : e) !== r) &&
                    (r !== I && i({}),
                    n((t) => ("function" == typeof e ? e(r === I ? t : r) : e)),
                    (t.current[0] = I));
                }, []),
                l = c.useCallback(() => {
                  (t.current[0] = I), i({});
                }, []);
              return [t.current[0] === I ? r : t.current[0], o, l];
            })(rT);
          rI.current = rP;
          let rL = (rP.height ?? 1) > 1;
          c.useLayoutEffect(() => {
            void 0 !== e3 &&
              null !== b.current &&
              rL &&
              b.current.scrollTop !== e3 &&
              ((b.current.scrollTop = e3),
              b.current.scrollTop !== e3 && rA(),
              (rO.current = !0));
          }, [e3, rL, rA]);
          let rD = (rP.width ?? 1) > 1;
          c.useLayoutEffect(() => {
            void 0 !== e2 &&
              null !== b.current &&
              rD &&
              b.current.scrollLeft !== e2 &&
              ((b.current.scrollLeft = e2),
              b.current.scrollLeft !== e2 && rA(),
              (rO.current = !0));
          }, [e2, rD, rA]);
          let rH = rP.x + t2,
            rF = rP.y,
            r$ = c.useRef(null),
            rN = c.useCallback((e) => {
              !0 === e
                ? r$.current?.focus()
                : window.requestAnimationFrame(() => {
                    r$.current?.focus();
                  });
            }, []),
            rB = t3 ? z + 1 : z,
            rV = c.useCallback(
              (e) => {
                let t =
                    0 === t2
                      ? e
                      : e.map((e) => ({
                          ...e,
                          location: [e.location[0] - t2, e.location[1]],
                        })),
                  r = en?.(t);
                if (!0 !== r) for (let e of t) er?.(e.location, e.value);
                return r;
              },
              [er, en, t2]
            ),
            [rW, rj] = c.useState(),
            rU =
              void 0 !== t9.current &&
              t9.current.range.width * t9.current.range.height > 1
                ? t9.current.range
                : void 0,
            rq = c.useMemo(() => {
              if (
                (void 0 === eg || 0 === eg.length) &&
                void 0 === rU &&
                void 0 === rW
              )
                return;
              let e = [];
              if (void 0 !== eg)
                for (let t of eg) {
                  let r = rR.length - t.range.x - t2;
                  r > 0 &&
                    e.push({
                      color: t.color,
                      range: {
                        ...t.range,
                        x: t.range.x + t2,
                        width: Math.min(r, t.range.width),
                      },
                      style: t.style,
                    });
                }
              return (
                void 0 !== rW &&
                  e.push({
                    color: em(rg.accentColor, 0),
                    range: rW,
                    style: "dashed",
                  }),
                void 0 !== rU &&
                  e.push({
                    color: em(rg.accentColor, 0.5),
                    range: rU,
                    style: "solid-outline",
                  }),
                e.length > 0 ? e : void 0
              );
            }, [rW, rU, eg, rR.length, rg.accentColor, t2]),
            rX = c.useRef(rR);
          rX.current = rR;
          let rK = c.useCallback(
              ([e, t], r = !1) => {
                let n = t3 && t === rB - 1;
                if (0 === e && t1)
                  return n
                    ? tS
                    : {
                        kind: m.$o.Marker,
                        allowOverlay: !1,
                        checked: !0 === t9?.rows.hasIndex(t),
                        markerKind: "clickable-number" === S ? "number" : S,
                        row: ez + t,
                        drawHandle: void 0 !== tR,
                        cursor: "clickable-number" === S ? "pointer" : void 0,
                      };
                if (n) {
                  let t = e === t2 ? eZ?.hint ?? "" : "",
                    r = rX.current[e];
                  if (r?.trailingRowOptions?.disabled === !0) return tS;
                  {
                    let e = r?.trailingRowOptions?.hint ?? t,
                      n = r?.trailingRowOptions?.addIcon ?? eZ?.addIcon;
                    return {
                      kind: m.$o.NewRow,
                      hint: e,
                      allowOverlay: !1,
                      icon: n,
                    };
                  }
                }
                {
                  let n = e - t2;
                  if (r || ti?.strict === !0) {
                    let e = rI.current,
                      r =
                        e.x > n ||
                        n > e.x + e.width ||
                        e.y > t ||
                        t > e.y + e.height ||
                        t >= r2.current,
                      i =
                        n === e.extras?.selected?.[0] &&
                        t === e.extras?.selected[1],
                      o = !1;
                    if (e.extras?.freezeRegions !== void 0) {
                      for (let r of e.extras.freezeRegions)
                        if (eI(r, n, t)) {
                          o = !0;
                          break;
                        }
                    }
                    if (r && !i && !o) return tS;
                  }
                  let i = A([n, t]);
                  return (
                    0 !== t2 &&
                      void 0 !== i.span &&
                      (i = { ...i, span: [i.span[0] + t2, i.span[1] + t2] }),
                    i
                  );
                }
              },
              [
                t3,
                rB,
                t1,
                t9?.rows,
                tR,
                S,
                t2,
                eZ?.hint,
                eZ?.addIcon,
                ti?.strict,
                A,
                ez,
              ]
            ),
            rY = c.useCallback(
              (e) => {
                let t = eD?.(e) ?? { name: e };
                return (
                  void 0 !== et &&
                    "" !== e &&
                    (t = {
                      icon: t.icon,
                      name: t.name,
                      overrideTheme: t.overrideTheme,
                      actions: [
                        ...(t.actions ?? []),
                        {
                          title: "Rename",
                          icon: "renameIcon",
                          onClick: (e) =>
                            no({ group: t.name, bounds: e.bounds }),
                        },
                      ],
                    }),
                  t
                );
              },
              [eD, et]
            ),
            rG = c.useCallback(
              (e) => {
                let [t, r] = e.cell,
                  n = rR[t],
                  i = n?.group !== void 0 ? rY(n.group)?.overrideTheme : void 0,
                  l = n?.themeOverride,
                  a = R?.(r);
                o({
                  ...e,
                  theme: (0, eh.yR)(rg, i, l, a, e.content.themeOverride),
                });
              },
              [R, rR, rY, rg]
            ),
            rJ = c.useCallback(
              (e, t, r) => {
                if (void 0 === t9.current) return;
                let [n, i] = t9.current.cell,
                  o = rK([n, i]);
                if (o.kind !== m.p6.Boolean && o.allowOverlay) {
                  let t = o;
                  if (void 0 !== r)
                    switch (t.kind) {
                      case m.p6.Number: {
                        let e = (0, u.wY)(
                          () => ("-" === r ? -0 : Number.parseFloat(r)),
                          0
                        );
                        t = { ...t, data: Number.isNaN(e) ? 0 : e };
                        break;
                      }
                      case m.p6.Text:
                      case m.p6.Markdown:
                      case m.p6.Uri:
                        t = { ...t, data: r };
                    }
                  rG({
                    target: e,
                    content: t,
                    initialValue: r,
                    cell: [n, i],
                    highlight: void 0 === r,
                    forceEditMode: void 0 !== r,
                  });
                } else
                  o.kind === m.p6.Boolean &&
                    t &&
                    !0 !== o.readonly &&
                    (rV([
                      {
                        location: t9.current.cell,
                        value: { ...o, data: !0 !== o.data },
                      },
                    ]),
                    r$.current?.damage([{ cell: t9.current.cell }]));
              },
              [rK, t9, rV, rG]
            ),
            rQ = c.useCallback(
              (e, t) => {
                let r = r$.current?.getBounds(e, t);
                if (void 0 === r || null === b.current) return;
                let n = rK([e, t]);
                n.allowOverlay &&
                  rG({
                    target: r,
                    content: n,
                    initialValue: void 0,
                    highlight: !0,
                    cell: [e, t],
                    forceEditMode: !0,
                  });
              },
              [rK, rG]
            ),
            rZ = c.useCallback(
              (e, t, r = "both", n = 0, i = 0, o) => {
                if (null !== b.current) {
                  let l = r$.current,
                    s = a.current,
                    c =
                      "number" != typeof e
                        ? "cell" === e.unit
                          ? e.amount
                          : void 0
                        : e,
                    u =
                      "number" != typeof t
                        ? "cell" === t.unit
                          ? t.amount
                          : void 0
                        : t,
                    d =
                      "number" != typeof e && "px" === e.unit
                        ? e.amount
                        : void 0,
                    h =
                      "number" != typeof t && "px" === t.unit
                        ? t.amount
                        : void 0;
                  if (null !== l && null !== s) {
                    let a = { x: 0, y: 0, width: 0, height: 0 },
                      f = 0,
                      p = 0;
                    if (
                      (void 0 !== c || void 0 !== u) &&
                      (0 ===
                        (a = l.getBounds((c ?? 0) + t2, u ?? 0) ?? a).width ||
                        0 === a.height)
                    )
                      return;
                    let g = s.getBoundingClientRect(),
                      m = g.width / s.offsetWidth;
                    if (
                      (void 0 !== d &&
                        (a = {
                          ...a,
                          x: d - g.left - b.current.scrollLeft,
                          width: 1,
                        }),
                      void 0 !== h &&
                        (a = {
                          ...a,
                          y: h + g.top - b.current.scrollTop,
                          height: 1,
                        }),
                      void 0 !== a)
                    ) {
                      let l = {
                          x: a.x - n,
                          y: a.y - i,
                          width: a.width + 2 * n,
                          height: a.height + 2 * i,
                        },
                        s = 0;
                      for (let e = 0; e < eT; e++) s += rb[e].width;
                      let c = 0,
                        u = e0 + (t7 ? 1 : 0);
                      u > 0 && (c = V(rB, u, tX));
                      let d = s * m + g.left + t2 * t0 * m,
                        h = g.right,
                        v = g.top + rS * m,
                        w = g.bottom - c * m,
                        y = a.width + 2 * n;
                      switch (o?.hAlign) {
                        case "start":
                          h = d + y;
                          break;
                        case "end":
                          d = h - y;
                          break;
                        case "center":
                          h = (d = Math.floor((d + h) / 2) - y / 2) + y;
                      }
                      let x = a.height + 2 * i;
                      switch (o?.vAlign) {
                        case "start":
                          w = v + x;
                          break;
                        case "end":
                          v = w - x;
                          break;
                        case "center":
                          w = (v = Math.floor((v + w) / 2) - x / 2) + x;
                      }
                      d > l.x
                        ? (f = l.x - d)
                        : h < l.x + l.width && (f = l.x + l.width - h),
                        v > l.y
                          ? (p = l.y - v)
                          : w < l.y + l.height && (p = l.y + l.height - w),
                        "vertical" === r || ("number" == typeof e && e < eT)
                          ? (f = 0)
                          : ("horizontal" === r ||
                              ("number" == typeof t && t >= rB - u)) &&
                            (p = 0),
                        (0 !== f || 0 !== p) &&
                          (1 !== m && ((f /= m), (p /= m)),
                          b.current.scrollTo(
                            f + b.current.scrollLeft,
                            p + b.current.scrollTop
                          ));
                    }
                  }
                }
              },
              [t2, e0, t0, rS, eT, rb, rB, t7, tX]
            ),
            r0 = c.useRef(rQ),
            r1 = c.useRef(A),
            r2 = c.useRef(z);
          (r0.current = rQ), (r1.current = A), (r2.current = z);
          let r3 = c.useCallback(
              async (e, t = !0) => {
                let r;
                let n = rR[e];
                if (n?.trailingRowOptions?.disabled === !0) return;
                let i = ed?.(),
                  o = !0;
                void 0 !== i &&
                  ("top" === (r = await i) && (o = !1),
                  "number" == typeof r && (o = !1));
                let l = 0,
                  a = () => {
                    if (r2.current <= z) {
                      l < 500 && window.setTimeout(a, l), (l = 50 + 2 * l);
                      return;
                    }
                    let n = "number" == typeof r ? r : o ? z : 0;
                    nB.current(e - t2, n),
                      rh(
                        {
                          cell: [e, n],
                          range: { x: e, y: n, width: 1, height: 1 },
                        },
                        !1,
                        !1,
                        "edit"
                      );
                    let i = r1.current([e - t2, n]);
                    i.allowOverlay &&
                      (0, m.Qo)(i) &&
                      !0 !== i.readonly &&
                      t &&
                      window.setTimeout(() => {
                        r0.current(e, n);
                      }, 0);
                  };
                a();
              },
              [rR, ed, t2, z, rh]
            ),
            r7 = c.useCallback(
              (e) => {
                let t =
                  rb[e]?.trailingRowOptions?.targetColumn ?? eZ?.targetColumn;
                if ("number" == typeof t) return t + (t1 ? 1 : 0);
                if ("object" == typeof t) {
                  let e = P.indexOf(t);
                  if (e >= 0) return e + (t1 ? 1 : 0);
                }
              },
              [rb, P, t1, eZ?.targetColumn]
            ),
            r6 = c.useRef(),
            r5 = c.useRef(),
            r8 = c.useCallback(
              (e, t) => {
                let [r, n] = t;
                return (0, eh.yR)(
                  rg,
                  rR[r]?.themeOverride,
                  R?.(n),
                  e.themeOverride
                );
              },
              [R, rR, rg]
            ),
            r4 = c.useCallback(
              (e) => {
                let t = eX.value ? e.metaKey : e.ctrlKey,
                  r = t && "multi" === eb,
                  n = t && "multi" === ew,
                  [i, l] = e.location,
                  a = t9.columns,
                  s = t9.rows,
                  [c, d] = t9.current?.cell ?? [];
                if ("cell" === e.kind) {
                  if (
                    ((r5.current = void 0),
                    (ne.current = [i, l]),
                    0 === i && t1)
                  ) {
                    if (
                      (!0 === t3 && l === z) ||
                      "number" === S ||
                      "none" === eb
                    )
                      return;
                    let n = rK(e.location);
                    if (n.kind !== m.$o.Marker) return;
                    if (void 0 !== tR) {
                      let t = ry(n);
                      (0, u.hu)(t?.kind === m.$o.Marker);
                      let r = t?.onClick?.({
                        ...e,
                        cell: n,
                        posX: e.localEventX,
                        posY: e.localEventY,
                        bounds: e.bounds,
                        theme: r8(n, e.location),
                        preventDefault: () => void 0,
                      });
                      if (void 0 === r || r.checked === n.checked) return;
                    }
                    o(void 0), rN();
                    let i = s.hasIndex(l),
                      a = r6.current;
                    if (
                      "multi" === eb &&
                      (e.shiftKey || !0 === e.isLongTouch) &&
                      void 0 !== a &&
                      s.hasIndex(a)
                    ) {
                      let e = [Math.min(a, l), Math.max(a, l) + 1];
                      r || "multi" === eP
                        ? rf(void 0, e, !0)
                        : rf(m.EV.fromSingleSelection(e), void 0, r);
                    } else
                      r || e.isTouch || "multi" === eP
                        ? i
                          ? rf(s.remove(l), void 0, !0)
                          : (rf(void 0, l, !0), (r6.current = l))
                        : i && 1 === s.length
                          ? rf(m.EV.empty(), void 0, t)
                          : (rf(m.EV.fromSingleSelection(l), void 0, t),
                            (r6.current = l));
                  } else if (i >= t2 && t3 && l === z) {
                    let e = r7(i);
                    r3(e ?? i);
                  } else if (c !== i || d !== l) {
                    let r = rK(e.location),
                      n = ry(r);
                    if (n?.onSelect !== void 0) {
                      let t = !1;
                      if (
                        (n.onSelect({
                          ...e,
                          cell: r,
                          posX: e.localEventX,
                          posY: e.localEventY,
                          bounds: e.bounds,
                          preventDefault: () => (t = !0),
                          theme: r8(r, e.location),
                        }),
                        t)
                      )
                        return;
                    }
                    let a = t7 && void 0 !== t9 && t9.current?.cell[1] === z;
                    if (
                      (e.shiftKey || !0 === e.isLongTouch) &&
                      void 0 !== c &&
                      void 0 !== d &&
                      void 0 !== t9.current &&
                      !a
                    ) {
                      if (t7 && l === z) return;
                      let e = Math.min(i, c),
                        r = Math.min(l, d);
                      rh(
                        {
                          ...t9.current,
                          range: {
                            x: e,
                            y: r,
                            width: Math.max(i, c) - e + 1,
                            height: Math.max(l, d) - r + 1,
                          },
                        },
                        !0,
                        t,
                        "click"
                      ),
                        (r6.current = void 0),
                        rN();
                    } else
                      rh(
                        {
                          cell: [i, l],
                          range: { x: i, y: l, width: 1, height: 1 },
                        },
                        !0,
                        t,
                        "click"
                      ),
                        (r6.current = void 0),
                        o(void 0),
                        rN();
                  }
                } else if ("header" === e.kind) {
                  if (((ne.current = [i, l]), o(void 0), t1 && 0 === i))
                    (r6.current = void 0),
                      (r5.current = void 0),
                      "multi" === eb &&
                        (s.length !== z
                          ? rf(m.EV.fromSingleSelection([0, z]), void 0, t)
                          : rf(m.EV.empty(), void 0, t),
                        rN());
                  else {
                    let r = r5.current;
                    if (
                      "multi" === ew &&
                      (e.shiftKey || !0 === e.isLongTouch) &&
                      void 0 !== r &&
                      a.hasIndex(r)
                    ) {
                      let e = [Math.min(r, i), Math.max(r, i) + 1];
                      n
                        ? rp(void 0, e, t)
                        : rp(m.EV.fromSingleSelection(e), void 0, t);
                    } else
                      n
                        ? (a.hasIndex(i)
                            ? rp(a.remove(i), void 0, t)
                            : rp(void 0, i, t),
                          (r5.current = i))
                        : "none" !== ew &&
                          (rp(m.EV.fromSingleSelection(i), void 0, t),
                          (r5.current = i));
                    (r6.current = void 0), rN();
                  }
                } else
                  e.kind === eY
                    ? (ne.current = [i, l])
                    : e.kind !== eG ||
                      e.isMaybeScrollbar ||
                      (ro(tC, !1),
                      o(void 0),
                      rN(),
                      e$?.(),
                      (r6.current = void 0),
                      (r5.current = void 0));
              },
              [
                r3,
                ew,
                rN,
                ry,
                r7,
                rK,
                t9,
                t1,
                t7,
                e$,
                tR,
                t2,
                S,
                eb,
                eP,
                z,
                rh,
                ro,
                rp,
                rf,
                t3,
                r8,
              ]
            ),
            r9 = c.useRef(!1),
            ne = c.useRef(),
            nt = c.useRef(rP),
            nr = c.useRef(),
            nn = c.useCallback(
              (e) => {
                if (
                  ((na.current = !1),
                  (nt.current = rI.current),
                  0 !== e.button && 1 !== e.button)
                ) {
                  nr.current = void 0;
                  return;
                }
                let t = performance.now();
                (nr.current = {
                  button: e.button,
                  time: t,
                  location: e.location,
                }),
                  e?.kind === "header" && (r9.current = !0);
                let r = "cell" === e.kind && e.isFillHandle;
                (!r && "cell" !== e.kind && e.isEdge) ||
                  (y({ previousSelection: t9, fillHandle: r }),
                  (ne.current = void 0),
                  e.isTouch || 0 !== e.button || r
                    ? e.isTouch || 1 !== e.button || (ne.current = e.location)
                    : r4(e));
              },
              [t9, r4]
            ),
            [ni, no] = c.useState(),
            nl = c.useCallback(
              (e) => {
                if (e.kind !== eY || "multi" !== ew) return;
                let t = eX.value ? e.metaKey : e.ctrlKey,
                  [r] = e.location,
                  n = t9.columns;
                if (r < t2) return;
                let i = rR[r],
                  o = r,
                  l = r;
                for (let e = r - 1; e >= t2 && L(i.group, rR[e].group); e--)
                  o--;
                for (
                  let e = r + 1;
                  e < rR.length && L(i.group, rR[e].group);
                  e++
                )
                  l++;
                if ((rN(), t)) {
                  if (n.hasAll([o, l + 1])) {
                    let e = n;
                    for (let t = o; t <= l; t++) e = e.remove(t);
                    rp(e, void 0, t);
                  } else rp(void 0, [o, l + 1], t);
                } else rp(m.EV.fromSingleSelection([o, l + 1]), void 0, t);
              },
              [ew, rN, t9.columns, rR, t2, rp]
            ),
            na = c.useRef(!1),
            ns = c.useCallback(
              async (e) => {
                if (void 0 !== rt && void 0 !== rl) {
                  let t = rI.current.y,
                    r = rI.current.height,
                    n = rt(
                      { x: e, y: t, width: 1, height: Math.min(r, z - t) },
                      re.current.signal
                    );
                  "object" != typeof n && (n = await n());
                  let i = rb[e - t2],
                    o = document.createElement("canvas"),
                    l = o.getContext("2d", { alpha: !1 });
                  if (null !== l) {
                    l.font = rg.baseFontFull;
                    let t = tl(l, rg, i, 0, n, tV, tW, !1, ry);
                    rl?.(i, t.width, e, t.width);
                  }
                }
              },
              [rb, rt, tW, rg, tV, rl, t2, z, ry]
            ),
            [nc, nu] = c.useState(),
            nd = c.useCallback(
              async (e, t) => {
                let r = e.current?.range;
                if (void 0 === r || void 0 === rt || void 0 === t.current)
                  return;
                let n = t.current.range;
                if (void 0 !== N) {
                  let e = !1;
                  if (
                    (N({
                      fillDestination: { ...n, x: n.x - t2 },
                      patternSource: { ...r, x: r.x - t2 },
                      preventDefault: () => (e = !0),
                    }),
                    e)
                  )
                    return;
                }
                let i = rt(r, re.current.signal);
                "object" != typeof i && (i = await i());
                let o = i,
                  l = [];
                for (let e = 0; e < n.width; e++)
                  for (let t = 0; t < n.height; t++) {
                    let i = [n.x + e, n.y + t];
                    if (D(i, r)) continue;
                    let a = o[t % r.height][e % r.width];
                    !(0, m.rs)(a) &&
                      (0, m.Qo)(a) &&
                      l.push({ location: i, value: { ...a } });
                  }
                rV(l), r$.current?.damage(l.map((e) => ({ cell: e.location })));
              },
              [rt, rV, N, t2]
            ),
            nh = c.useCallback(() => {
              if (void 0 === t9.current || t9.current.range.width <= 1) return;
              let e = {
                ...t9,
                current: {
                  ...t9.current,
                  range: { ...t9.current.range, width: 1 },
                },
              };
              nd(e, t9);
            }, [nd, t9]),
            nf = c.useCallback(() => {
              if (void 0 === t9.current || t9.current.range.height <= 1) return;
              let e = {
                ...t9,
                current: {
                  ...t9.current,
                  range: { ...t9.current.range, height: 1 },
                },
              };
              nd(e, t9);
            }, [nd, t9]),
            np = c.useCallback(
              (e, t) => {
                if ((y(void 0), rj(void 0), nu(void 0), (r9.current = !1), t))
                  return;
                if (
                  s?.fillHandle === !0 &&
                  void 0 !== t9.current &&
                  s.previousSelection?.current !== void 0
                ) {
                  if (void 0 === rW) return;
                  let e = {
                    ...t9,
                    current: {
                      ...t9.current,
                      range: ey(s.previousSelection.current.range, rW),
                    },
                  };
                  nd(s.previousSelection, e), ro(e, !0);
                  return;
                }
                let [r, n] = e.location,
                  [i, o] = ne.current ?? [],
                  l = () => {
                    na.current = !0;
                  },
                  a = (t) => {
                    let a = t.isTouch || (i === r && o === n);
                    if (
                      (a && F?.([r - t2, n], { ...t, preventDefault: l }),
                      1 === t.button)
                    )
                      return !na.current;
                    if (!na.current) {
                      let i = rK(e.location),
                        o = ry(i);
                      if (void 0 !== o && void 0 !== o.onClick && a) {
                        let r = o.onClick({
                          ...t,
                          cell: i,
                          posX: t.localEventX,
                          posY: t.localEventY,
                          bounds: t.bounds,
                          theme: r8(i, e.location),
                          preventDefault: l,
                        });
                        void 0 !== r &&
                          !(0, m.rs)(r) &&
                          (0, m.T9)(r) &&
                          (rV([{ location: t.location, value: r }]),
                          r$.current?.damage([{ cell: t.location }]));
                      }
                      if (na.current || void 0 === t9.current) return !1;
                      let c = !1;
                      switch (eO) {
                        case "double-click":
                        case "second-click": {
                          if (s?.previousSelection?.current?.cell === void 0)
                            break;
                          let [e, i] = t9.current.cell,
                            [o, l] = s.previousSelection.current.cell;
                          c =
                            r === e &&
                            r === o &&
                            n === i &&
                            n === l &&
                            (!0 === t.isDoubleClick || "second-click" === eO);
                          break;
                        }
                        case "single-click":
                          c = !0;
                      }
                      if (c) return $?.([r - t2, n]), rJ(t.bounds, !1), !0;
                    }
                    return !1;
                  },
                  c = e.location[0] - t2;
                if (e.isTouch) {
                  let t = rI.current,
                    n = nt.current;
                  if (t.x !== n.x || t.y !== n.y) return;
                  if (!0 === e.isLongTouch) {
                    if ("cell" === e.kind && H(t9.current?.cell, e.location)) {
                      G?.([c, e.location[1]], { ...e, preventDefault: l });
                      return;
                    }
                    if ("header" === e.kind && t9.columns.hasIndex(r)) {
                      Q?.(c, { ...e, preventDefault: l });
                      return;
                    }
                    if (e.kind === eY) {
                      if (c < 0) return;
                      ee?.(c, { ...e, preventDefault: l });
                      return;
                    }
                  }
                  "cell" === e.kind
                    ? a(e) || r4(e)
                    : e.kind === eY
                      ? Y?.(c, { ...e, preventDefault: l })
                      : (e.kind === eK && q?.(c, { ...e, preventDefault: l }),
                        r4(e));
                  return;
                }
                if ("header" === e.kind) {
                  if (c < 0) return;
                  e.isEdge
                    ? !0 === e.isDoubleClick && ns(r)
                    : 0 === e.button &&
                      r === i &&
                      n === o &&
                      q?.(c, { ...e, preventDefault: l });
                }
                if (e.kind === eY) {
                  if (c < 0) return;
                  0 !== e.button ||
                    r !== i ||
                    n !== o ||
                    (Y?.(c, { ...e, preventDefault: l }), na.current || nl(e));
                }
                "cell" === e.kind && (0 === e.button || 1 === e.button) && a(e),
                  (ne.current = void 0);
              },
              [
                s,
                t9,
                t2,
                rW,
                nd,
                ro,
                F,
                rK,
                ry,
                eO,
                r8,
                rV,
                $,
                rJ,
                G,
                Q,
                ee,
                r4,
                Y,
                q,
                ns,
                nl,
              ]
            ),
            ng = c.useCallback(
              (e) => {
                let t = { ...e, location: [e.location[0] - t2, e.location[1]] };
                eR?.(t),
                  void 0 !== s &&
                    0 === e.buttons &&
                    (y(void 0), rj(void 0), nu(void 0), (r9.current = !1)),
                  nu((t) =>
                    r9.current
                      ? [e.scrollEdge[0], 0]
                      : e.scrollEdge[0] === t?.[0] && e.scrollEdge[1] === t[1]
                        ? t
                        : void 0 === s || (nr.current?.location[0] ?? 0) < t2
                          ? void 0
                          : e.scrollEdge
                  );
              },
              [s, eR, t2]
            ),
            nm = c.useCallback(
              (e, t) => {
                eL?.(e - t2, t);
              },
              [eL, t2]
            ),
            nv = t9?.current?.cell,
            nw = c.useCallback(
              (e, t, r, n, i, o) => {
                rO.current = !1;
                let l = nv;
                void 0 !== l && (l = [l[0] - t2, l[1]]);
                let a =
                    0 === eT
                      ? void 0
                      : { x: 0, y: e.y, width: eT, height: e.height },
                  s = [];
                void 0 !== a && s.push(a),
                  e0 > 0 &&
                    (s.push({
                      x: e.x - t2,
                      y: z - e0,
                      width: e.width,
                      height: e0,
                    }),
                    eT > 0 &&
                      s.push({ x: 0, y: z - e0, width: eT, height: e0 }));
                let c = {
                  x: e.x - t2,
                  y: e.y,
                  width: e.width,
                  height: t3 && e.y + e.height >= z ? e.height - 1 : e.height,
                  tx: i,
                  ty: o,
                  extras: { selected: l, freezeRegion: a, freezeRegions: s },
                };
                (rI.current = c),
                  rz(c),
                  rv([t, r, n]),
                  eB?.(c, c.tx, c.ty, c.extras);
              },
              [nv, t2, t3, z, eT, e0, rz, eB]
            ),
            ny = w(
              ef,
              c.useCallback(
                (e, t) => {
                  ef?.(e - t2, t - t2),
                    "none" !== ew &&
                      rp(m.EV.fromSingleSelection(t), void 0, !0);
                },
                [ew, ef, t2, rp]
              )
            ),
            nb = c.useRef(!1),
            nx = c.useCallback(
              (e) => {
                if (0 === e.location[0] && t2 > 0) {
                  e.preventDefault();
                  return;
                }
                e_?.({ ...e, location: [e.location[0] - t2, e.location[1]] }),
                  e.defaultPrevented() || (nb.current = !0),
                  y(void 0);
              },
              [e_, t2]
            ),
            nk = c.useCallback(() => {
              nb.current = !1;
            }, []),
            nS = c.useRef(),
            nC = c.useCallback(
              (e) => {
                if (
                  !eJ(e, nS.current) &&
                  ((nS.current = e),
                  nr?.current?.button === void 0 || !(nr.current.button >= 1))
                ) {
                  if (
                    0 !== e.buttons &&
                    void 0 !== s &&
                    0 === nr.current?.location[0] &&
                    0 === e.location[0] &&
                    1 === t2 &&
                    "multi" === eb &&
                    s.previousSelection &&
                    !s.previousSelection.rows.hasIndex(
                      nr.current.location[1]
                    ) &&
                    t9.rows.hasIndex(nr.current.location[1])
                  ) {
                    let t = Math.min(nr.current.location[1], e.location[1]),
                      r = Math.max(nr.current.location[1], e.location[1]) + 1;
                    rf(m.EV.fromSingleSelection([t, r]), void 0, !1);
                  }
                  if (
                    0 !== e.buttons &&
                    void 0 !== s &&
                    void 0 !== t9.current &&
                    !nb.current &&
                    !r9.current &&
                    ("rect" === ev || "multi-rect" === ev)
                  ) {
                    let [t, r] = t9.current.cell,
                      [n, i] = e.location;
                    if (
                      (i < 0 && (i = rI.current.y),
                      !0 === s.fillHandle &&
                        s.previousSelection?.current !== void 0)
                    ) {
                      let e = s.previousSelection.current.range;
                      i = Math.min(i, t7 ? z - 1 : z);
                      let t = (function (e, t, r, n) {
                        if ("any" === n)
                          return ey(e, { x: t, y: r, width: 1, height: 1 });
                        if (
                          ("vertical" === n && (t = e.x),
                          "horizontal" === n && (r = e.y),
                          D([t, r], e))
                        )
                          return;
                        let i = t - e.x,
                          o = e.x + e.width - t,
                          l = r - e.y + 1,
                          a = e.y + e.height - r,
                          s = Math.min(
                            "vertical" === n ? Number.MAX_SAFE_INTEGER : i,
                            "vertical" === n ? Number.MAX_SAFE_INTEGER : o,
                            "horizontal" === n ? Number.MAX_SAFE_INTEGER : l,
                            "horizontal" === n ? Number.MAX_SAFE_INTEGER : a
                          );
                        return s === a
                          ? {
                              x: e.x,
                              y: e.y + e.height,
                              width: e.width,
                              height: r - e.y - e.height + 1,
                            }
                          : s === l
                            ? { x: e.x, y: r, width: e.width, height: e.y - r }
                            : s === o
                              ? {
                                  x: e.x + e.width,
                                  y: e.y,
                                  width: t - e.x - e.width + 1,
                                  height: e.height,
                                }
                              : {
                                  x: t,
                                  y: e.y,
                                  width: e.x - t,
                                  height: e.height,
                                };
                      })(e, n, i, e1);
                      rj(t);
                    } else {
                      if (t7 && r === z) return;
                      let o = t7 && i === z;
                      if (o) {
                        if (e.kind !== eG) return;
                        i--;
                      }
                      n = Math.max(n, t2);
                      let l = n - t,
                        a = i - r,
                        s = {
                          x: l >= 0 ? t : n,
                          y: a >= 0 ? r : i,
                          width: Math.abs(l) + 1,
                          height: Math.abs(a) + 1,
                        };
                      rh({ ...t9.current, range: s }, !0, !1, "drag");
                    }
                  }
                  eF?.({ ...e, location: [e.location[0] - t2, e.location[1]] });
                }
              },
              [e1, s, t2, eb, t9, ev, eF, rf, t7, z, rh]
            ),
            n_ = c.useCallback(() => {
              let e = nS.current;
              if (void 0 === e) return;
              let [t, r] = e.scrollEdge,
                [n, i] = e.location,
                o = rI.current;
              -1 === t
                ? (n = o.extras?.freezeRegion?.x ?? o.x)
                : 1 === t && (n = o.x + o.width),
                -1 === r
                  ? (i = Math.max(0, o.y))
                  : 1 === r && (i = Math.min(z - 1, o.y + o.height)),
                (n = d(n, 0, rR.length - 1)),
                (i = d(i, 0, z - 1)),
                nC({ ...e, location: [n, i] });
            }, [rR.length, nC, z]);
          !(function (e, t, r) {
            let n = c.useRef(0),
              [i, o] = e ?? [0, 0];
            c.useEffect(() => {
              if (0 === i && 0 === o) {
                n.current = 0;
                return;
              }
              let e = !1,
                l = 0,
                a = (s) => {
                  if (!e) {
                    if (0 === l) l = s;
                    else {
                      let e = s - l;
                      n.current = Math.min(1, n.current + e / 1300);
                      let a = n.current ** 1.618 * e * 2;
                      t.current?.scrollBy(i * a, o * a), (l = s), r?.();
                    }
                    window.requestAnimationFrame(a);
                  }
                };
              return (
                window.requestAnimationFrame(a),
                () => {
                  e = !0;
                }
              );
            }, [t, i, o, r]);
          })(nc, b, n_);
          let nR = c.useCallback(
              (e) => {
                if (void 0 === t9.current) return;
                let [t, r] = e,
                  [n, i] = t9.current.cell,
                  o = t9.current.range,
                  l = o.x,
                  a = o.x + o.width,
                  s = o.y,
                  c = o.y + o.height;
                if (0 !== r)
                  switch (r) {
                    case 2:
                      (c = z), (s = i), rZ(0, c, "vertical");
                      break;
                    case -2:
                      (s = 0), (c = i + 1), rZ(0, s, "vertical");
                      break;
                    case 1:
                      s < i
                        ? rZ(0, ++s, "vertical")
                        : rZ(0, (c = Math.min(z, c + 1)), "vertical");
                      break;
                    case -1:
                      c > i + 1
                        ? rZ(0, --c, "vertical")
                        : rZ(0, (s = Math.max(0, s - 1)), "vertical");
                      break;
                    default:
                      (0, u.vE)(r);
                  }
                if (0 !== t) {
                  if (2 === t)
                    (a = rR.length), (l = n), rZ(a - 1 - t2, 0, "horizontal");
                  else if (-2 === t)
                    (l = t2), (a = n + 1), rZ(l - t2, 0, "horizontal");
                  else {
                    let e = [];
                    if (void 0 !== rt) {
                      let t = rt(
                        { x: l, y: s, width: a - l - t2, height: c - s },
                        re.current.signal
                      );
                      "object" == typeof t &&
                        (e = h(
                          f(
                            f(t)
                              .filter((e) => void 0 !== e.span)
                              .map((e) =>
                                p(
                                  (e.span?.[0] ?? 0) + 1,
                                  (e.span?.[1] ?? 0) + 1
                                )
                              )
                          )
                        ));
                    }
                    if (1 === t) {
                      let t = !1;
                      if (l < n) {
                        if (e.length > 0) {
                          let r = p(l + 1, n + 1).find(
                            (t) => !e.includes(t - t2)
                          );
                          void 0 !== r && ((l = r), (t = !0));
                        } else l++, (t = !0);
                        t && rZ(l, 0, "horizontal");
                      }
                      t ||
                        rZ(
                          (a = Math.min(rR.length, a + 1)) - 1 - t2,
                          0,
                          "horizontal"
                        );
                    } else if (-1 === t) {
                      let t = !1;
                      if (a > n + 1) {
                        if (e.length > 0) {
                          let r = p(a - 1, n, -1).find(
                            (t) => !e.includes(t - t2)
                          );
                          void 0 !== r && ((a = r), (t = !0));
                        } else a--, (t = !0);
                        t && rZ(a - t2, 0, "horizontal");
                      }
                      t || rZ((l = Math.max(t2, l - 1)) - t2, 0, "horizontal");
                    } else (0, u.vE)(t);
                  }
                }
                rh(
                  {
                    cell: t9.current.cell,
                    range: { x: l, y: s, width: a - l, height: c - s },
                  },
                  !0,
                  !1,
                  "keyboard-select"
                );
              },
              [rt, t9, rR.length, t2, z, rZ, rh]
            ),
            nE = c.useCallback(
              (e, t, r, n) => {
                if (
                  ((e = d(e, t2, rb.length - 1 + t2)),
                  (t = d(t, 0, rB - (r ? 0 : 1))),
                  e === nv?.[0] && t === nv?.[1])
                )
                  return !1;
                if (n && void 0 !== t9.current) {
                  let r = [...t9.current.rangeStack];
                  (t9.current.range.width > 1 || t9.current.range.height > 1) &&
                    r.push(t9.current.range),
                    ro(
                      {
                        ...t9,
                        current: {
                          cell: [e, t],
                          range: { x: e, y: t, width: 1, height: 1 },
                          rangeStack: r,
                        },
                      },
                      !0
                    );
                } else
                  rh(
                    {
                      cell: [e, t],
                      range: { x: e, y: t, width: 1, height: 1 },
                    },
                    !0,
                    !1,
                    "keyboard-nav"
                  );
                return (
                  void 0 !== x.current &&
                    x.current[0] === e &&
                    x.current[1] === t &&
                    (x.current = void 0),
                  rZ(e - t2, t),
                  !0
                );
              },
              [rB, t2, rb.length, nv, t9, rZ, ro, rh]
            ),
            nM = c.useCallback(
              (e, t) => {
                i?.cell !== void 0 &&
                  void 0 !== e &&
                  (0, m.T9)(e) &&
                  (rV([{ location: i.cell, value: e }]),
                  window.requestAnimationFrame(() => {
                    r$.current?.damage([{ cell: i.cell }]);
                  })),
                  rN(!0),
                  o(void 0);
                let [r, n] = t;
                if (void 0 !== t9.current && (0 !== r || 0 !== n)) {
                  let t = t9.current.cell[1] === rB - 1 && void 0 !== e;
                  nE(
                    d(t9.current.cell[0] + r, 0, rR.length - 1),
                    d(t9.current.cell[1] + n, 0, rB - 1),
                    t,
                    !1
                  );
                }
                B?.(e, t);
              },
              [i?.cell, rN, t9, B, rV, rB, nE, rR.length]
            ),
            nI = c.useMemo(() => `gdg-overlay-${tx++}`, []),
            nT = c.useCallback(
              (e) => {
                rN();
                let t = [];
                for (let r = e.x; r < e.x + e.width; r++)
                  for (let n = e.y; n < e.y + e.height; n++) {
                    let e;
                    let i = A([r - t2, n]);
                    if (i.allowOverlay || i.kind === m.p6.Boolean) {
                      if (i.kind === m.p6.Custom) {
                        let t = ry(i),
                          r = t?.provideEditor?.(i);
                        t?.onDelete !== void 0
                          ? (e = t.onDelete(i))
                          : (0, m.DP)(r) && (e = r?.deletedValue?.(i));
                      } else if (
                        ((0, m.T9)(i) && i.allowOverlay) ||
                        i.kind === m.p6.Boolean
                      ) {
                        let t = ry(i);
                        e = t?.onDelete?.(i);
                      }
                      void 0 !== e &&
                        !(0, m.rs)(e) &&
                        (0, m.T9)(e) &&
                        t.push({ location: [r, n], value: e });
                    }
                  }
                rV(t), r$.current?.damage(t.map((e) => ({ cell: e.location })));
              },
              [rN, A, ry, rV, t2]
            ),
            nO = void 0 !== i,
            nP = c.useCallback(
              (e) => {
                let t = () => {
                    e.stopPropagation(), e.preventDefault();
                  },
                  r = { didMatch: !1 },
                  { bounds: n } = e,
                  i = t9.columns,
                  a = t9.rows;
                if (!nO && ta(tZ.clear, e, r)) ro(tC, !1), e$?.();
                else if (!nO && ta(tZ.selectAll, e, r))
                  ro(
                    {
                      columns: m.EV.empty(),
                      rows: m.EV.empty(),
                      current: {
                        cell: t9.current?.cell ?? [t2, 0],
                        range: { x: t2, y: 0, width: P.length, height: z },
                        rangeStack: [],
                      },
                    },
                    !1
                  );
                else if (ta(tZ.search, e, r))
                  l?.current?.focus({ preventScroll: !0 }), t5(!0);
                else if (ta(tZ.delete, e, r)) {
                  let e = rd?.(t9) ?? !0;
                  if (!1 !== e) {
                    let t = !0 === e ? t9 : e;
                    if (void 0 !== t.current)
                      for (let e of (nT(t.current.range), t.current.rangeStack))
                        nT(e);
                    for (let e of t.rows)
                      nT({ x: t2, y: e, width: P.length, height: 1 });
                    for (let e of t.columns)
                      nT({ x: e, y: 0, width: 1, height: z });
                  }
                }
                if (r.didMatch) return t(), !0;
                if (void 0 === t9.current) return !1;
                let [s, c] = t9.current.cell,
                  u = !1,
                  d = !1;
                ta(tZ.scrollToSelectedCell, e, r)
                  ? nB.current(s - t2, c)
                  : "none" !== ew && ta(tZ.selectColumn, e, r)
                    ? i.hasIndex(s)
                      ? rp(i.remove(s), void 0, !0)
                      : "single" === ew
                        ? rp(m.EV.fromSingleSelection(s), void 0, !0)
                        : rp(void 0, s, !0)
                    : "none" !== eb && ta(tZ.selectRow, e, r)
                      ? a.hasIndex(c)
                        ? rf(a.remove(c), void 0, !0)
                        : "single" === eb
                          ? rf(m.EV.fromSingleSelection(c), void 0, !0)
                          : rf(void 0, c, !0)
                      : !nO && void 0 !== n && ta(tZ.activateCell, e, r)
                        ? c === z && t3
                          ? window.setTimeout(() => {
                              let e = r7(s);
                              r3(e ?? s);
                            }, 0)
                          : ($?.([s - t2, c]), rJ(n, !0))
                        : t9.current.range.height > 1 && ta(tZ.downFill, e, r)
                          ? nf()
                          : t9.current.range.width > 1 && ta(tZ.rightFill, e, r)
                            ? nh()
                            : ta(tZ.goToNextPage, e, r)
                              ? (c += Math.max(1, rI.current.height - 4))
                              : ta(tZ.goToPreviousPage, e, r)
                                ? (c -= Math.max(1, rI.current.height - 4))
                                : ta(tZ.goToFirstCell, e, r)
                                  ? (o(void 0), (c = 0), (s = 0))
                                  : ta(tZ.goToLastCell, e, r)
                                    ? (o(void 0),
                                      (c = Number.MAX_SAFE_INTEGER),
                                      (s = Number.MAX_SAFE_INTEGER))
                                    : ta(tZ.selectToFirstCell, e, r)
                                      ? (o(void 0), nR([-2, -2]))
                                      : ta(tZ.selectToLastCell, e, r)
                                        ? (o(void 0), nR([2, 2]))
                                        : nO
                                          ? (ta(tZ.closeOverlay, e, r) &&
                                              o(void 0),
                                            ta(tZ.acceptOverlayDown, e, r) &&
                                              (o(void 0), c++),
                                            ta(tZ.acceptOverlayUp, e, r) &&
                                              (o(void 0), c--),
                                            ta(tZ.acceptOverlayLeft, e, r) &&
                                              (o(void 0), s--),
                                            ta(tZ.acceptOverlayRight, e, r) &&
                                              (o(void 0), s++))
                                          : (ta(tZ.goDownCell, e, r)
                                              ? (c += 1)
                                              : ta(tZ.goUpCell, e, r)
                                                ? (c -= 1)
                                                : ta(tZ.goRightCell, e, r)
                                                  ? (s += 1)
                                                  : ta(tZ.goLeftCell, e, r)
                                                    ? (s -= 1)
                                                    : ta(
                                                          tZ.goDownCellRetainSelection,
                                                          e,
                                                          r
                                                        )
                                                      ? ((c += 1), (u = !0))
                                                      : ta(
                                                            tZ.goUpCellRetainSelection,
                                                            e,
                                                            r
                                                          )
                                                        ? ((c -= 1), (u = !0))
                                                        : ta(
                                                              tZ.goRightCellRetainSelection,
                                                              e,
                                                              r
                                                            )
                                                          ? ((s += 1), (u = !0))
                                                          : ta(
                                                                tZ.goLeftCellRetainSelection,
                                                                e,
                                                                r
                                                              )
                                                            ? ((s -= 1),
                                                              (u = !0))
                                                            : ta(
                                                                  tZ.goToLastRow,
                                                                  e,
                                                                  r
                                                                )
                                                              ? (c = z - 1)
                                                              : ta(
                                                                    tZ.goToFirstRow,
                                                                    e,
                                                                    r
                                                                  )
                                                                ? (c =
                                                                    Number.MIN_SAFE_INTEGER)
                                                                : ta(
                                                                      tZ.goToLastColumn,
                                                                      e,
                                                                      r
                                                                    )
                                                                  ? (s =
                                                                      Number.MAX_SAFE_INTEGER)
                                                                  : ta(
                                                                        tZ.goToFirstColumn,
                                                                        e,
                                                                        r
                                                                      )
                                                                    ? (s =
                                                                        Number.MIN_SAFE_INTEGER)
                                                                    : ("rect" ===
                                                                        ev ||
                                                                        "multi-rect" ===
                                                                          ev) &&
                                                                      (ta(
                                                                        tZ.selectGrowDown,
                                                                        e,
                                                                        r
                                                                      )
                                                                        ? nR([
                                                                            0,
                                                                            1,
                                                                          ])
                                                                        : ta(
                                                                              tZ.selectGrowUp,
                                                                              e,
                                                                              r
                                                                            )
                                                                          ? nR([
                                                                              0,
                                                                              -1,
                                                                            ])
                                                                          : ta(
                                                                                tZ.selectGrowRight,
                                                                                e,
                                                                                r
                                                                              )
                                                                            ? nR(
                                                                                [
                                                                                  1,
                                                                                  0,
                                                                                ]
                                                                              )
                                                                            : ta(
                                                                                  tZ.selectGrowLeft,
                                                                                  e,
                                                                                  r
                                                                                )
                                                                              ? nR(
                                                                                  [
                                                                                    -1,
                                                                                    0,
                                                                                  ]
                                                                                )
                                                                              : ta(
                                                                                    tZ.selectToLastRow,
                                                                                    e,
                                                                                    r
                                                                                  )
                                                                                ? nR(
                                                                                    [
                                                                                      0,
                                                                                      2,
                                                                                    ]
                                                                                  )
                                                                                : ta(
                                                                                      tZ.selectToFirstRow,
                                                                                      e,
                                                                                      r
                                                                                    )
                                                                                  ? nR(
                                                                                      [
                                                                                        0,
                                                                                        -2,
                                                                                      ]
                                                                                    )
                                                                                  : ta(
                                                                                        tZ.selectToLastColumn,
                                                                                        e,
                                                                                        r
                                                                                      )
                                                                                    ? nR(
                                                                                        [
                                                                                          2,
                                                                                          0,
                                                                                        ]
                                                                                      )
                                                                                    : ta(
                                                                                        tZ.selectToFirstColumn,
                                                                                        e,
                                                                                        r
                                                                                      ) &&
                                                                                      nR(
                                                                                        [
                                                                                          -2,
                                                                                          0,
                                                                                        ]
                                                                                      )),
                                            (d = r.didMatch));
                let h = nE(s, c, !1, u),
                  f = r.didMatch;
                return f && (h || !d || tP) && t(), f;
              },
              [
                nO,
                t9,
                tZ,
                ew,
                eb,
                ev,
                t2,
                z,
                nE,
                ro,
                e$,
                P.length,
                rd,
                tP,
                nT,
                rp,
                rf,
                t3,
                r7,
                r3,
                $,
                rJ,
                nf,
                nh,
                nR,
              ]
            ),
            nz = c.useCallback(
              (e) => {
                let t = !1;
                if (
                  (void 0 !== es &&
                    es({
                      ...e,
                      cancel: () => {
                        t = !0;
                      },
                    }),
                  t || nP(e) || void 0 === t9.current)
                )
                  return;
                let [r, n] = t9.current.cell,
                  i = rI.current;
                if (
                  !e.metaKey &&
                  !e.ctrlKey &&
                  void 0 !== t9.current &&
                  1 === e.key.length &&
                  /[ -~]/g.test(e.key) &&
                  void 0 !== e.bounds &&
                  (0, m.Qo)(A([r - t2, Math.max(0, Math.min(n, z - 1))]))
                ) {
                  if (
                    (!t7 || n !== z) &&
                    (i.y > n ||
                      n > i.y + i.height ||
                      i.x > r ||
                      r > i.x + i.width)
                  )
                    return;
                  rJ(e.bounds, !0, e.key),
                    e.stopPropagation(),
                    e.preventDefault();
                }
              },
              [es, nP, t9, A, t2, z, t7, rJ]
            ),
            nA = c.useCallback(
              (e, t) => {
                let r = e.location[0] - t2;
                if (
                  ("header" === e.kind && Q?.(r, { ...e, preventDefault: t }),
                  e.kind === eY)
                ) {
                  if (r < 0) return;
                  ee?.(r, { ...e, preventDefault: t });
                }
                if ("cell" === e.kind) {
                  let [n, i] = e.location;
                  G?.([r, i], { ...e, preventDefault: t }),
                    !(function (e, t) {
                      let [r, n] = t;
                      if (e.columns.hasIndex(r) || e.rows.hasIndex(n))
                        return !0;
                      if (void 0 !== e.current) {
                        if (H(e.current.cell, t)) return !0;
                        let i = [e.current.range, ...e.current.rangeStack];
                        for (let e of i)
                          if (
                            r >= e.x &&
                            r < e.x + e.width &&
                            n >= e.y &&
                            n < e.y + e.height
                          )
                            return !0;
                      }
                      return !1;
                    })(t9, e.location) && nE(n, i, !1, !1);
                }
              },
              [t9, G, ee, Q, t2, nE]
            ),
            nL = c.useCallback(
              async (e) => {
                let t;
                if (!tZ.paste) return;
                function r(e, t, r, n) {
                  let i =
                    "object" == typeof r
                      ? r?.join("\n") ?? ""
                      : r?.toString() ?? "";
                  if (!(0, m.rs)(e) && (0, m.Qo)(e) && !0 !== e.readonly) {
                    let o = W?.(i, e);
                    if (void 0 !== o && (0, m.T9)(o))
                      return { location: t, value: o };
                    let l = ry(e);
                    if (void 0 === l) return;
                    if (l.kind === m.p6.Custom) {
                      (0, u.hu)(e.kind === m.p6.Custom);
                      let r = l.onPaste?.(i, e.data);
                      if (void 0 === r) return;
                      return { location: t, value: { ...e, data: r } };
                    }
                    {
                      let o = l.onPaste?.(i, e, {
                        formatted: n,
                        formattedString:
                          "string" == typeof n ? n : n?.join("\n"),
                        rawValue: r,
                      });
                      if (void 0 === o) return;
                      return (
                        (0, u.hu)(o.kind === e.kind), { location: t, value: o }
                      );
                    }
                  }
                }
                let n = t9.columns,
                  i = t9.rows,
                  o =
                    !0 === b.current?.contains(document.activeElement) ||
                    !0 === a.current?.contains(document.activeElement);
                if (
                  (void 0 !== t9.current
                    ? (t = [t9.current.range.x, t9.current.range.y])
                    : 1 === n.length
                      ? (t = [n.first() ?? 0, 0])
                      : 1 === i.length && (t = [t2, i.first() ?? 0]),
                  o && void 0 !== t)
                ) {
                  let n, i;
                  let o = "text/plain",
                    l = "text/html";
                  if (void 0 !== navigator.clipboard.read) {
                    let e = await navigator.clipboard.read();
                    for (let t of e) {
                      if (t.types.includes(l)) {
                        let e = await t.getType(l),
                          r = await e.text(),
                          i = td(r);
                        if (void 0 !== i) {
                          n = i;
                          break;
                        }
                      }
                      t.types.includes(o) &&
                        (i = await (await t.getType(o)).text());
                    }
                  } else if (void 0 !== navigator.clipboard.readText)
                    i = await navigator.clipboard.readText();
                  else {
                    if (void 0 === e || e?.clipboardData === null) return;
                    if (e.clipboardData.types.includes(l)) {
                      let t = e.clipboardData.getData(l);
                      n = td(t);
                    }
                    void 0 === n &&
                      e.clipboardData.types.includes(o) &&
                      (i = e.clipboardData.getData(o));
                  }
                  let [a, s] = t,
                    c = [];
                  do {
                    if (void 0 === eE) {
                      let e = rK(t),
                        o =
                          i ??
                          n
                            ?.map((e) => e.map((e) => e.rawValue).join("	"))
                            .join("	") ??
                          "",
                        l = r(e, t, o, void 0);
                      void 0 !== l && c.push(l);
                      break;
                    }
                    if (void 0 === n) {
                      if (void 0 === i) return;
                      n = (function (e) {
                        var t;
                        let r;
                        ((t = r || (r = {}))[(t.None = 0)] = "None"),
                          (t[(t.inString = 1)] = "inString"),
                          (t[(t.inStringPostQuote = 2)] = "inStringPostQuote");
                        let n = [],
                          i = [],
                          o = 0,
                          l = r.None;
                        e = e.replace(/\r\n/g, "\n");
                        let a = 0;
                        for (let t of e) {
                          switch (l) {
                            case r.None:
                              "	" === t || "\n" === t
                                ? (i.push(e.slice(o, a)),
                                  (o = a + 1),
                                  "\n" === t && (n.push(i), (i = [])))
                                : '"' === t && (l = r.inString);
                              break;
                            case r.inString:
                              '"' === t && (l = r.inStringPostQuote);
                              break;
                            case r.inStringPostQuote:
                              '"' === t
                                ? (l = r.inString)
                                : (("	" === t || "\n" === t) &&
                                    (i.push(th(e.slice(o, a))),
                                    (o = a + 1),
                                    "\n" === t && (n.push(i), (i = []))),
                                  (l = r.None));
                          }
                          a++;
                        }
                        return (
                          o < e.length && i.push(th(e.slice(o, e.length))),
                          n.push(i),
                          n.map((e) =>
                            e.map((e) => ({
                              rawValue: e,
                              formatted: e,
                              format: "string",
                            }))
                          )
                        );
                      })(i);
                    }
                    if (
                      !1 === eE ||
                      ("function" == typeof eE &&
                        eE?.(
                          [t[0] - t2, t[1]],
                          n.map((e) =>
                            e.map((e) => e.rawValue?.toString() ?? "")
                          )
                        ) !== !0)
                    )
                      return;
                    for (let [e, t] of n.entries()) {
                      if (e + s >= z) break;
                      for (let [n, i] of t.entries()) {
                        let t = [n + a, e + s],
                          [o, l] = t;
                        if (o >= rR.length || l >= rB) continue;
                        let u = rK(t),
                          d = r(u, t, i.rawValue, i.formatted);
                        void 0 !== d && c.push(d);
                      }
                    }
                  } while (!1);
                  rV(c),
                    r$.current?.damage(c.map((e) => ({ cell: e.location })));
                }
              },
              [W, ry, rK, t9, tZ.paste, rR.length, rV, rB, eE, t2, z]
            );
          v("paste", nL, k, !1, !0);
          let nD = c.useCallback(
            async (e, t) => {
              if (!tZ.copy) return;
              let r =
                  !0 === t ||
                  !0 === b.current?.contains(document.activeElement) ||
                  !0 === a.current?.contains(document.activeElement),
                n = t9.columns,
                i = t9.rows,
                o = (t, r) => {
                  if (eM) {
                    let n = r.map((e) => ({
                      kind: m.p6.Text,
                      data: P[e].title,
                      displayData: P[e].title,
                      allowOverlay: !1,
                    }));
                    tf([n, ...t], r, e);
                  } else tf(t, r, e);
                };
              if (r && void 0 !== rt) {
                if (void 0 !== t9.current) {
                  let e = rt(t9.current.range, re.current.signal);
                  "object" != typeof e && (e = await e()),
                    o(
                      e,
                      p(
                        t9.current.range.x - t2,
                        t9.current.range.x + t9.current.range.width - t2
                      )
                    );
                } else if (void 0 !== i && i.length > 0) {
                  let e = [...i],
                    t = e.map((e) => {
                      let t = rt(
                        { x: t2, y: e, width: P.length, height: 1 },
                        re.current.signal
                      );
                      return "object" == typeof t
                        ? t[0]
                        : t().then((e) => e[0]);
                    });
                  if (t.some((e) => e instanceof Promise)) {
                    let e = await Promise.all(t);
                    o(e, p(P.length));
                  } else o(t, p(P.length));
                } else if (n.length > 0) {
                  let e = [],
                    t = [];
                  for (let r of n) {
                    let n = rt(
                      { x: r, y: 0, width: 1, height: z },
                      re.current.signal
                    );
                    "object" != typeof n && (n = await n()),
                      e.push(n),
                      t.push(r - t2);
                  }
                  if (1 === e.length) o(e[0], t);
                  else {
                    let r = e.reduce((e, t) =>
                      e.map((e, r) => [...e, ...t[r]])
                    );
                    o(r, t);
                  }
                }
              }
            },
            [P, rt, t9, tZ.copy, t2, z, eM]
          );
          v("copy", nD, k, !1, !1);
          let nH = c.useCallback(
            async (e) => {
              if (!tZ.cut) return;
              let t =
                !0 === b.current?.contains(document.activeElement) ||
                !0 === a.current?.contains(document.activeElement);
              if (t && (await nD(e), void 0 !== t9.current)) {
                let e = {
                    current: {
                      cell: t9.current.cell,
                      range: t9.current.range,
                      rangeStack: [],
                    },
                    rows: m.EV.empty(),
                    columns: m.EV.empty(),
                  },
                  t = rd?.(e);
                if (!1 === t || void 0 === (e = !0 === t ? e : t).current)
                  return;
                nT(e.current.range);
              }
            },
            [nT, t9, tZ.cut, nD, rd]
          );
          v("cut", nH, k, !1, !1);
          let nF = c.useCallback(
              (e, t) => {
                if (void 0 !== ei) {
                  0 !== t2 && (e = e.map((e) => [e[0] - t2, e[1]])), ei(e, t);
                  return;
                }
                if (0 === e.length || -1 === t) return;
                let [r, n] = e[t];
                (void 0 === x.current ||
                  x.current[0] !== r ||
                  x.current[1] !== n) &&
                  ((x.current = [r, n]), nE(r, n, !1, !1));
              },
              [ei, t2, nE]
            ),
            [n$, nN] = eV?.current?.cell ?? [],
            nB = c.useRef(rZ);
          (nB.current = rZ),
            c.useLayoutEffect(() => {
              rO.current ||
                void 0 === n$ ||
                void 0 === nN ||
                (n$ === ri.current?.current?.cell[0] &&
                  nN === ri.current?.current?.cell[1]) ||
                nB.current(n$, nN),
                (rO.current = !1);
            }, [n$, nN]);
          let nV =
            void 0 !== t9.current &&
            (t9.current.cell[0] >= rR.length || t9.current.cell[1] >= rB);
          c.useLayoutEffect(() => {
            nV && ro(tC, !1);
          }, [nV, ro]);
          let nW = c.useMemo(
              () =>
                !0 === t3 && eZ?.tint === !0
                  ? m.EV.fromSingleSelection(rB - 1)
                  : m.EV.empty(),
              [rB, t3, eZ?.tint]
            ),
            nj = c.useCallback(
              (e) => ("boolean" == typeof e7 ? e7 : e7?.(e - t2) ?? !0),
              [t2, e7]
            ),
            nU = c.useMemo(() => {
              if (void 0 === ni || null === a.current) return null;
              let { bounds: e, group: t } = ni,
                r = a.current.getBoundingClientRect();
              return c.createElement(to, {
                bounds: e,
                group: t,
                canvasBounds: r,
                onClose: () => no(void 0),
                onFinish: (e) => {
                  no(void 0), et?.(t, e);
                },
              });
            }, [et, ni]),
            nq = Math.min(rR.length, eT + (t1 ? 1 : 0));
          c.useImperativeHandle(
            t,
            () => ({
              appendRow: (e, t) => r3(e + t2, t),
              updateCells: (e) => (
                0 !== t2 &&
                  (e = e.map((e) => ({ cell: [e.cell[0] + t2, e.cell[1]] }))),
                r$.current?.damage(e)
              ),
              getBounds: (e, t) => {
                if (a?.current !== null && b?.current !== null) {
                  if (void 0 === e && void 0 === t) {
                    let e = a.current.getBoundingClientRect(),
                      t = e.width / b.current.clientWidth;
                    return {
                      x: e.x - b.current.scrollLeft * t,
                      y: e.y - b.current.scrollTop * t,
                      width: b.current.scrollWidth * t,
                      height: b.current.scrollHeight * t,
                    };
                  }
                  return r$.current?.getBounds((e ?? 0) + t2, t);
                }
              },
              focus: () => r$.current?.focus(),
              emit: async (e) => {
                switch (e) {
                  case "delete":
                    nz({
                      bounds: void 0,
                      cancel: () => void 0,
                      stopPropagation: () => void 0,
                      preventDefault: () => void 0,
                      ctrlKey: !1,
                      key: "Delete",
                      keyCode: 46,
                      metaKey: !1,
                      shiftKey: !1,
                      altKey: !1,
                      rawEvent: void 0,
                      location: void 0,
                    });
                    break;
                  case "fill-right":
                    nz({
                      bounds: void 0,
                      cancel: () => void 0,
                      stopPropagation: () => void 0,
                      preventDefault: () => void 0,
                      ctrlKey: !0,
                      key: "r",
                      keyCode: 82,
                      metaKey: !1,
                      shiftKey: !1,
                      altKey: !1,
                      rawEvent: void 0,
                      location: void 0,
                    });
                    break;
                  case "fill-down":
                    nz({
                      bounds: void 0,
                      cancel: () => void 0,
                      stopPropagation: () => void 0,
                      preventDefault: () => void 0,
                      ctrlKey: !0,
                      key: "d",
                      keyCode: 68,
                      metaKey: !1,
                      shiftKey: !1,
                      altKey: !1,
                      rawEvent: void 0,
                      location: void 0,
                    });
                    break;
                  case "copy":
                    await nD(void 0, !0);
                    break;
                  case "paste":
                    await nL();
                }
              },
              scrollTo: rZ,
              remeasureColumns: (e) => {
                for (let t of e) ns(t + t2);
              },
            }),
            [r3, ns, nD, nz, nL, t2, rZ]
          );
          let [nX, nK] = nv ?? [],
            nY = c.useCallback(
              (e) => {
                let [t, r] = e;
                if (-1 === r) {
                  "none" !== ew &&
                    (rp(m.EV.fromSingleSelection(t), void 0, !1), rN());
                  return;
                }
                (nX !== t || nK !== r) &&
                  (rh(
                    { cell: e, range: { x: t, y: r, width: 1, height: 1 } },
                    !0,
                    !1,
                    "keyboard-nav"
                  ),
                  rZ(t, r));
              },
              [ew, rN, rZ, nX, nK, rh, rp]
            ),
            [nG, nJ] = c.useState(!1),
            nQ = c.useRef(
              g((e) => {
                nJ(e);
              }, 5)
            ),
            nZ = c.useCallback(() => {
              nQ.current(!0),
                void 0 === t9.current &&
                  0 === t9.columns.length &&
                  0 === t9.rows.length &&
                  void 0 === s &&
                  rh(
                    {
                      cell: [t2, rF],
                      range: { x: t2, y: rF, width: 1, height: 1 },
                    },
                    !0,
                    !1,
                    "keyboard-select"
                  );
            }, [rF, t9, s, t2, rh]),
            n0 = c.useCallback(() => {
              nQ.current(!1);
            }, []),
            [n1, n2] = c.useMemo(() => {
              let e;
              let t = ti?.scrollbarWidthOverride ?? M(),
                r = z + (t3 ? 1 : 0);
              if ("number" == typeof tX) e = rS + r * tX;
              else {
                let t = 0,
                  n = Math.min(r, 10);
                for (let e = 0; e < n; e++) t += tX(e);
                e = rS + r * (t = Math.floor(t / n));
              }
              e += t;
              let n = rR.reduce((e, t) => t.width + e, 0) + t;
              return [`${Math.min(1e5, n)}px`, `${Math.min(1e5, e)}px`];
            }, [rR, ti?.scrollbarWidthOverride, tX, z, t3, rS]);
          return c.createElement(
            eh.Ni.Provider,
            { value: rg },
            c.createElement(
              tm,
              {
                style: (0, eh.be)(rg),
                className: J,
                inWidth: T ?? n1,
                inHeight: O ?? n2,
              },
              c.createElement(tr, {
                fillHandle: tt,
                drawFocusRing: tn,
                experimental: ti,
                fixedShadowX: ts,
                fixedShadowY: tc,
                getRowThemeOverride: R,
                headerIcons: tu,
                imageWindowLoader: tp,
                initialSize: tg,
                isDraggable: tw,
                onDragLeave: t_,
                onRowMoved: tR,
                overscrollX: tJ,
                overscrollY: tQ,
                preventDiagonalScrolling: tI,
                rightElement: tT,
                rightElementProps: tO,
                smoothScrollX: tz,
                smoothScrollY: tA,
                className: J,
                enableGroups: rk,
                onCanvasFocused: nZ,
                onCanvasBlur: n0,
                canvasRef: a,
                onContextMenu: nA,
                theme: rg,
                cellXOffset: rH,
                cellYOffset: rF,
                accessibilityHeight: rP.height,
                onDragEnd: nk,
                columns: rR,
                nonGrowWidth: rx,
                drawHeader: rc,
                onColumnProposeMove: X,
                drawCell: ru,
                disabledRows: nW,
                freezeColumns: nq,
                lockColumns: t2,
                firstColAccessible: 0 === t2,
                getCellContent: rK,
                minColumnWidth: tV,
                maxColumnWidth: tW,
                searchInputRef: l,
                showSearch: eN ?? t6,
                onSearchClose: t8,
                highlightRegions: rq,
                getCellsForSelection: rt,
                getGroupDetails: rY,
                headerHeight: tK,
                isFocused: nG,
                groupHeaderHeight: rk ? tY : 0,
                freezeTrailingRows: e0 + (t3 && eZ?.sticky === !0 ? 1 : 0),
                hasAppendRow: t3,
                onColumnResize: rl,
                onColumnResizeEnd: ra,
                onColumnResizeStart: rs,
                onCellFocused: nY,
                onColumnMoved: ny,
                onDragStart: nx,
                onHeaderMenuClick: nm,
                onItemHovered: nC,
                isFilling: s?.fillHandle === !0,
                onMouseMove: ng,
                onKeyDown: nz,
                onKeyUp: ec,
                onMouseDown: nn,
                onMouseUp: np,
                onDragOverCell: e6,
                onDrop: e5,
                onSearchResultsChanged: nF,
                onVisibleRegionChanged: nw,
                clientSize: rm,
                rowHeight: tX,
                searchResults: eo,
                searchValue: ea,
                onSearchValueChange: el,
                rows: rB,
                scrollRef: b,
                selection: t9,
                translateX: rP.tx,
                translateY: rP.ty,
                verticalBorder: nj,
                gridRef: r$,
                getCellRenderer: ry,
              }),
              nU,
              void 0 !== i &&
                c.createElement(
                  c.Suspense,
                  { fallback: null },
                  c.createElement(tb, {
                    ...i,
                    validateCell: rn,
                    id: nI,
                    getCellRenderer: ry,
                    className:
                      ti?.isSubGrid === !0 ? "click-outside-ignore" : void 0,
                    provideEditor: eQ,
                    imageEditorOverride: _,
                    onFinishEditing: nM,
                    markdownDivCreateNode: E,
                    isOutsideClick: tN,
                  })
                )
            )
          );
        },
        tR = c.forwardRef(t_),
        tE = {
          getAccessibilityString: (e) => e.data?.toString() ?? "false",
          kind: m.p6.Boolean,
          needsHover: !0,
          useLabel: !1,
          needsHoverPosition: !0,
          measure: () => 50,
          draw: (e) =>
            (function (e, t, r, n) {
              if (!r && t === m.qF) return;
              let {
                  ctx: i,
                  hoverAmount: o,
                  theme: l,
                  rect: a,
                  highlighted: s,
                  hoverX: c,
                  hoverY: u,
                  cell: { contentAlign: d },
                } = e,
                { x: h, y: f, width: p, height: g } = a,
                v = r ? 0.65 + 0.35 * o : 0.4;
              t === m.qF && (v *= o),
                0 !== v &&
                  ((i.globalAlpha = v),
                  ew(i, l, t, h, f, p, g, s, c, u, n, d),
                  (i.globalAlpha = 1));
            })(e, e.cell.data, (0, m.kf)(e.cell), e.cell.maxSize ?? 20),
          onDelete: (e) => ({ ...e, data: !1 }),
          onClick: (e) => {
            let { cell: t, posX: r, posY: n, bounds: i, theme: o } = e,
              { width: l, height: a, x: s, y: c } = i,
              u = t.maxSize ?? 20,
              d = Math.floor(i.y + a / 2),
              h = k(u, a, o.cellVerticalPadding),
              f = x(
                t.contentAlign ?? "center",
                s,
                l,
                o.cellHorizontalPadding,
                h
              ),
              p = b(f, d, h),
              g = S(s + r, c + n, p);
            if ((0, m.kf)(t) && g) return { ...t, data: !0 !== t.data };
          },
          onPaste: (e, t) => {
            let r = m.qF;
            return (
              "true" === e.toLowerCase()
                ? (r = !0)
                : "false" === e.toLowerCase()
                  ? (r = !1)
                  : "indeterminate" === e.toLowerCase() && (r = m.sd),
              r === t.data ? void 0 : { ...t, data: r }
            );
          },
        },
        tM = (0, e3.z)("div")({
          name: "BubblesOverlayEditorStyle",
          class: "gdg-b1ygi5by",
          propsAsIs: !1,
        }),
        tI = (e) => {
          let { bubbles: t } = e;
          return c.createElement(
            tM,
            null,
            t.map((e, t) =>
              c.createElement("div", { key: t, className: "boe-bubble" }, e)
            ),
            c.createElement("textarea", {
              className: "gdg-input",
              autoFocus: !0,
            })
          );
        },
        tT = {
          getAccessibilityString: (e) => T(e.data),
          kind: m.p6.Bubble,
          needsHover: !1,
          useLabel: !1,
          needsHoverPosition: !1,
          measure: (e, t, r) =>
            t.data.reduce((t, r) => e.measureText(r).width + t + 20, 0) +
            2 * r.cellHorizontalPadding -
            4,
          draw: (e) =>
            (function (e, t) {
              let { rect: r, theme: n, ctx: i, highlighted: o } = e,
                { x: l, y: a, width: s, height: c } = r,
                u = l + n.cellHorizontalPadding,
                d = [];
              for (let e of t) {
                if (u > l + s) break;
                let t = K(e, i, n.baseFontFull).width;
                d.push({ x: u, width: t }), (u += t + 16 + 4);
              }
              for (let e of (i.beginPath(), d))
                er(
                  i,
                  e.x,
                  a + (c - 20) / 2,
                  e.width + 16,
                  20,
                  n.roundingRadius ?? 10
                );
              for (let [e, r] of ((i.fillStyle = o
                ? n.bgBubbleSelected
                : n.bgBubble),
              i.fill(),
              d.entries()))
                i.beginPath(),
                  (i.fillStyle = n.textBubble),
                  i.fillText(t[e], r.x + 8, a + c / 2 + Y(i, n));
            })(e, e.cell.data),
          provideEditor: () => (e) => {
            let { value: t } = e;
            return c.createElement(tI, { bubbles: t.data });
          },
          onPaste: () => void 0,
        },
        tO = (0, e3.z)("div")({
          name: "DrilldownOverlayEditorStyle",
          class: "gdg-d4zsq0x",
          propsAsIs: !1,
        }),
        tP = (e) => {
          let { drilldowns: t } = e;
          return c.createElement(
            tO,
            null,
            t.map((e, t) =>
              c.createElement(
                "div",
                { key: t, className: "doe-bubble" },
                void 0 !== e.img && c.createElement("img", { src: e.img }),
                c.createElement("div", null, e.text)
              )
            )
          );
        },
        tz = {
          getAccessibilityString: (e) => T(e.data.map((e) => e.text)),
          kind: m.p6.Drilldown,
          needsHover: !1,
          useLabel: !1,
          needsHoverPosition: !1,
          measure: (e, t, r) =>
            t.data.reduce(
              (t, r) =>
                e.measureText(r.text).width +
                t +
                20 +
                (void 0 !== r.img ? 18 : 0),
              0
            ) +
            2 * r.cellHorizontalPadding -
            4,
          draw: (e) =>
            (function (e, t) {
              let {
                  rect: r,
                  theme: n,
                  ctx: i,
                  imageLoader: o,
                  col: l,
                  row: a,
                } = e,
                { x: s, width: c } = r,
                u = n.baseFontFull,
                d = ee(i, u),
                h = Math.min(
                  r.height,
                  Math.max(16, 2 * Math.ceil(d * n.lineHeight))
                ),
                f = Math.floor(r.y + (r.height - h) / 2),
                p = h - 10,
                g = s + n.cellHorizontalPadding,
                m = n.roundingRadius ?? 6,
                v = (function (e, t, r, n) {
                  let i = Math.ceil(window.devicePixelRatio),
                    o = r - 10,
                    l = r * i,
                    a = n + 5,
                    s = 3 * n,
                    c = (s + 10) * i,
                    u = `${e},${t},${i},${r}`;
                  if (void 0 !== tA[u])
                    return {
                      el: tA[u],
                      height: l,
                      width: c,
                      middleWidth: 4 * i,
                      sideWidth: a * i,
                      padding: 5 * i,
                      dpr: i,
                    };
                  let d = document.createElement("canvas"),
                    h = d.getContext("2d");
                  return null === h
                    ? null
                    : ((d.width = c),
                      (d.height = l),
                      h.scale(i, i),
                      (tA[u] = d),
                      h.beginPath(),
                      er(h, 5, 5, s, o, n),
                      (h.shadowColor = "rgba(24, 25, 34, 0.4)"),
                      (h.shadowBlur = 1),
                      (h.fillStyle = e),
                      h.fill(),
                      (h.shadowColor = "rgba(24, 25, 34, 0.3)"),
                      (h.shadowOffsetY = 1),
                      (h.shadowBlur = 5),
                      (h.fillStyle = e),
                      h.fill(),
                      (h.shadowOffsetY = 0),
                      (h.shadowBlur = 0),
                      (h.shadowBlur = 0),
                      h.beginPath(),
                      er(h, 5.5, 5.5, s, o, n),
                      (h.strokeStyle = t),
                      (h.lineWidth = 1),
                      h.stroke(),
                      {
                        el: d,
                        height: l,
                        width: c,
                        sideWidth: a * i,
                        middleWidth: n * i,
                        padding: 5 * i,
                        dpr: i,
                      });
                })(n.bgCell, n.drilldownBorder, h, m),
                w = [];
              for (let e of t) {
                if (g > s + c) break;
                let t = K(e.text, i, u),
                  r = t.width,
                  n = 0;
                if (void 0 !== e.img) {
                  let t = o.loadOrGetImage(e.img, l, a);
                  void 0 !== t && (n = p - 8 + 4);
                }
                let d = r + n + 16;
                w.push({ x: g, width: d }), (g += d + 4);
              }
              if (null !== v) {
                let {
                    el: e,
                    height: t,
                    middleWidth: r,
                    sideWidth: n,
                    width: o,
                    dpr: l,
                    padding: a,
                  } = v,
                  s = n / l,
                  c = a / l;
                for (let l of w) {
                  let a = Math.floor(l.x),
                    u = Math.floor(l.width),
                    d = u - (s - c) * 2;
                  (i.imageSmoothingEnabled = !1),
                    i.drawImage(e, 0, 0, n, t, a - c, f, s, h),
                    d > 0 && i.drawImage(e, n, 0, r, t, a + (s - c), f, d, h),
                    i.drawImage(e, o - n, 0, n, t, a + u - (s - c), f, s, h),
                    (i.imageSmoothingEnabled = !0);
                }
              }
              for (let [e, r] of (i.beginPath(), w.entries())) {
                let s = t[e],
                  c = r.x + 8;
                if (void 0 !== s.img) {
                  let e = o.loadOrGetImage(s.img, l, a);
                  if (void 0 !== e) {
                    let t = p - 8,
                      r = 0,
                      o = 0,
                      l = e.width,
                      a = e.height;
                    l > a
                      ? ((r += (l - a) / 2), (l = a))
                      : a > l && ((o += (a - l) / 2), (a = l)),
                      i.beginPath(),
                      er(i, c, f + h / 2 - t / 2, t, t, n.roundingRadius ?? 3),
                      i.save(),
                      i.clip(),
                      i.drawImage(e, r, o, l, a, c, f + h / 2 - t / 2, t, t),
                      i.restore(),
                      (c += t + 4);
                  }
                }
                i.beginPath(),
                  (i.fillStyle = n.textBubble),
                  i.fillText(s.text, c, f + h / 2 + Y(i, n));
              }
            })(e, e.cell.data),
          provideEditor: () => (e) => {
            let { value: t } = e;
            return c.createElement(tP, { drilldowns: t.data });
          },
          onPaste: () => void 0,
        },
        tA = {},
        tL = (0, e3.z)("div")({
          name: "ImageOverlayEditorStyle",
          class: "gdg-i2iowwq",
          propsAsIs: !1,
        });
      var tD = r(54721);
      let tH = (e) => {
          let { urls: t, canWrite: r, onEditClick: n, renderImage: i } = e,
            o = t.filter((e) => "" !== e);
          if (0 === o.length) return null;
          let l = o.length > 1;
          return c.createElement(
            tL,
            { "data-testid": "GDG-default-image-overlay-editor" },
            c.createElement(
              tD.lr,
              {
                showArrows: l,
                showThumbs: !1,
                swipeable: l,
                emulateTouch: l,
                infiniteLoop: l,
              },
              o.map((e) => {
                let t =
                  i?.(e) ?? c.createElement("img", { draggable: !1, src: e });
                return c.createElement(
                  "div",
                  { className: "gdg-centering-container", key: e },
                  t
                );
              })
            ),
            r &&
              n &&
              c.createElement(
                "button",
                { className: "gdg-edit-icon", onClick: n },
                c.createElement(C, null)
              )
          );
        },
        tF = {
          getAccessibilityString: (e) => e.data.join(", "),
          kind: m.p6.Image,
          needsHover: !1,
          useLabel: !1,
          needsHoverPosition: !1,
          draw: (e) =>
            (function (e, t, r, n) {
              let {
                  rect: i,
                  col: o,
                  row: l,
                  theme: a,
                  ctx: s,
                  imageLoader: c,
                } = e,
                { x: u, y: d, height: h, width: f } = i,
                p = h - 2 * a.cellVerticalPadding,
                g = [],
                m = 0;
              for (let e = 0; e < t.length; e++) {
                let r = t[e];
                if (0 === r.length) continue;
                let n = c.loadOrGetImage(r, o, l);
                if (void 0 !== n) {
                  g[e] = n;
                  let t = n.width * (p / n.height);
                  m += t + 4;
                }
              }
              if (0 === m) return;
              m -= 4;
              let v = u + a.cellHorizontalPadding;
              for (let e of ("right" === n
                ? (v = Math.floor(u + f - a.cellHorizontalPadding - m))
                : "center" === n && (v = Math.floor(u + f / 2 - m / 2)),
              g)) {
                if (void 0 === e) continue;
                let t = e.width * (p / e.height);
                r > 0 &&
                  (s.beginPath(),
                  er(s, v, d + a.cellVerticalPadding, t, p, r),
                  s.save(),
                  s.clip()),
                  s.drawImage(e, v, d + a.cellVerticalPadding, t, p),
                  r > 0 && s.restore(),
                  (v += t + 4);
              }
            })(
              e,
              e.cell.displayData ?? e.cell.data,
              e.cell.rounding ?? e.theme.roundingRadius ?? 4,
              e.cell.contentAlign
            ),
          measure: (e, t) => 50 * t.data.length,
          onDelete: (e) => ({ ...e, data: [] }),
          provideEditor: () => (e) => {
            let { value: t, onFinishedEditing: r, imageEditorOverride: n } = e;
            return c.createElement(n ?? tH, {
              urls: t.data,
              canWrite: !1 !== t.readonly,
              onCancel: r,
              onChange: (e) => {
                r({ ...t, data: [e] });
              },
            });
          },
          onPaste: (e, t) => {
            e = e.trim();
            let r = e.split(","),
              n = r
                .map((e) => {
                  try {
                    return new URL(e), e;
                  } catch {
                    return;
                  }
                })
                .filter((e) => void 0 !== e);
            if (
              !(
                n.length === t.data.length && n.every((e, r) => e === t.data[r])
              )
            )
              return { ...t, data: n };
          },
        },
        t$ = {
          getAccessibilityString: () => "",
          kind: m.p6.Loading,
          needsHover: !1,
          useLabel: !1,
          needsHoverPosition: !1,
          measure: () => 120,
          draw: (e) => {
            let { cell: t, col: r, row: n, ctx: i, rect: o, theme: l } = e;
            if (void 0 === t.skeletonWidth || 0 === t.skeletonWidth) return;
            let a = t.skeletonWidth;
            if (
              void 0 !== t.skeletonWidthVariability &&
              t.skeletonWidthVariability > 0
            ) {
              let e;
              a += Math.round(
                ((e = 49632 * r + 325176 * n),
                (e ^= e << 13),
                (e ^= e >> 17),
                ((e ^= e << 5) / 4294967295) * 2 * t.skeletonWidthVariability)
              );
            }
            let s = l.cellHorizontalPadding,
              c =
                t.skeletonHeight ??
                Math.min(18, o.height - 2 * l.cellVerticalPadding);
            er(
              i,
              o.x + s,
              o.y + (o.height - c) / 2,
              a,
              c,
              l.roundingRadius ?? 3
            ),
              (i.fillStyle = em(l.textDark, 0.1)),
              i.fill();
          },
          onPaste: () => void 0,
        };
      function tN() {
        return {
          async: !1,
          breaks: !1,
          extensions: null,
          gfm: !0,
          hooks: null,
          pedantic: !1,
          renderer: null,
          silent: !1,
          tokenizer: null,
          walkTokens: null,
        };
      }
      let tB = tN(),
        tV = /[&<>"']/,
        tW = RegExp(tV.source, "g"),
        tj = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
        tU = RegExp(tj.source, "g"),
        tq = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        },
        tX = (e) => tq[e];
      function tK(e, t) {
        if (t) {
          if (tV.test(e)) return e.replace(tW, tX);
        } else if (tj.test(e)) return e.replace(tU, tX);
        return e;
      }
      let tY = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
        tG = /(^|[^\[])\^/g;
      function tJ(e, t) {
        let r = "string" == typeof e ? e : e.source;
        t = t || "";
        let n = {
          replace: (e, t) => {
            let i = "string" == typeof t ? t : t.source;
            return (i = i.replace(tG, "$1")), (r = r.replace(e, i)), n;
          },
          getRegex: () => new RegExp(r, t),
        };
        return n;
      }
      function tQ(e) {
        try {
          e = encodeURI(e).replace(/%25/g, "%");
        } catch (e) {
          return null;
        }
        return e;
      }
      let tZ = { exec: () => null };
      function t0(e, t) {
        let r = e.replace(/\|/g, (e, t, r) => {
            let n = !1,
              i = t;
            for (; --i >= 0 && "\\" === r[i]; ) n = !n;
            return n ? "|" : " |";
          }),
          n = r.split(/ \|/),
          i = 0;
        if (
          (n[0].trim() || n.shift(),
          n.length > 0 && !n[n.length - 1].trim() && n.pop(),
          t)
        ) {
          if (n.length > t) n.splice(t);
          else for (; n.length < t; ) n.push("");
        }
        for (; i < n.length; i++) n[i] = n[i].trim().replace(/\\\|/g, "|");
        return n;
      }
      function t1(e, t, r) {
        let n = e.length;
        if (0 === n) return "";
        let i = 0;
        for (; i < n; ) {
          let o = e.charAt(n - i - 1);
          if (o !== t || r) {
            if (o !== t && r) i++;
            else break;
          } else i++;
        }
        return e.slice(0, n - i);
      }
      function t2(e, t, r, n) {
        let i = t.href,
          o = t.title ? tK(t.title) : null,
          l = e[1].replace(/\\([\[\]])/g, "$1");
        if ("!" !== e[0].charAt(0)) {
          n.state.inLink = !0;
          let e = {
            type: "link",
            raw: r,
            href: i,
            title: o,
            text: l,
            tokens: n.inlineTokens(l),
          };
          return (n.state.inLink = !1), e;
        }
        return { type: "image", raw: r, href: i, title: o, text: tK(l) };
      }
      class t3 {
        options;
        rules;
        lexer;
        constructor(e) {
          this.options = e || tB;
        }
        space(e) {
          let t = this.rules.block.newline.exec(e);
          if (t && t[0].length > 0) return { type: "space", raw: t[0] };
        }
        code(e) {
          let t = this.rules.block.code.exec(e);
          if (t) {
            let e = t[0].replace(/^ {1,4}/gm, "");
            return {
              type: "code",
              raw: t[0],
              codeBlockStyle: "indented",
              text: this.options.pedantic ? e : t1(e, "\n"),
            };
          }
        }
        fences(e) {
          let t = this.rules.block.fences.exec(e);
          if (t) {
            let e = t[0],
              r = (function (e, t) {
                let r = e.match(/^(\s+)(?:```)/);
                if (null === r) return t;
                let n = r[1];
                return t
                  .split("\n")
                  .map((e) => {
                    let t = e.match(/^\s+/);
                    if (null === t) return e;
                    let [r] = t;
                    return r.length >= n.length ? e.slice(n.length) : e;
                  })
                  .join("\n");
              })(e, t[3] || "");
            return {
              type: "code",
              raw: e,
              lang: t[2]
                ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1")
                : t[2],
              text: r,
            };
          }
        }
        heading(e) {
          let t = this.rules.block.heading.exec(e);
          if (t) {
            let e = t[2].trim();
            if (/#$/.test(e)) {
              let t = t1(e, "#");
              this.options.pedantic
                ? (e = t.trim())
                : (!t || / $/.test(t)) && (e = t.trim());
            }
            return {
              type: "heading",
              raw: t[0],
              depth: t[1].length,
              text: e,
              tokens: this.lexer.inline(e),
            };
          }
        }
        hr(e) {
          let t = this.rules.block.hr.exec(e);
          if (t) return { type: "hr", raw: t[0] };
        }
        blockquote(e) {
          let t = this.rules.block.blockquote.exec(e);
          if (t) {
            let e = t1(t[0].replace(/^ *>[ \t]?/gm, ""), "\n"),
              r = this.lexer.state.top;
            this.lexer.state.top = !0;
            let n = this.lexer.blockTokens(e);
            return (
              (this.lexer.state.top = r),
              { type: "blockquote", raw: t[0], tokens: n, text: e }
            );
          }
        }
        list(e) {
          let t = this.rules.block.list.exec(e);
          if (t) {
            let r = t[1].trim(),
              n = r.length > 1,
              i = {
                type: "list",
                raw: "",
                ordered: n,
                start: n ? +r.slice(0, -1) : "",
                loose: !1,
                items: [],
              };
            (r = n ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`),
              this.options.pedantic && (r = n ? r : "[*+-]");
            let o = RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),
              l = "",
              a = "",
              s = !1;
            for (; e; ) {
              let r,
                n = !1;
              if (!(t = o.exec(e)) || this.rules.block.hr.test(e)) break;
              (l = t[0]), (e = e.substring(l.length));
              let c = t[2]
                  .split("\n", 1)[0]
                  .replace(/^\t+/, (e) => " ".repeat(3 * e.length)),
                u = e.split("\n", 1)[0],
                d = 0;
              this.options.pedantic
                ? ((d = 2), (a = c.trimStart()))
                : ((d = (d = t[2].search(/[^ ]/)) > 4 ? 1 : d),
                  (a = c.slice(d)),
                  (d += t[1].length));
              let h = !1;
              if (
                (!c &&
                  /^ *$/.test(u) &&
                  ((l += u + "\n"), (e = e.substring(u.length + 1)), (n = !0)),
                !n)
              ) {
                let t = RegExp(
                    `^ {0,${Math.min(
                      3,
                      d - 1
                    )}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`
                  ),
                  r = RegExp(
                    `^ {0,${Math.min(
                      3,
                      d - 1
                    )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
                  ),
                  n = RegExp(`^ {0,${Math.min(3, d - 1)}}(?:\`\`\`|~~~)`),
                  i = RegExp(`^ {0,${Math.min(3, d - 1)}}#`);
                for (; e; ) {
                  let o = e.split("\n", 1)[0];
                  if (
                    ((u = o),
                    this.options.pedantic &&
                      (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                    n.test(u) || i.test(u) || t.test(u) || r.test(e))
                  )
                    break;
                  if (u.search(/[^ ]/) >= d || !u.trim())
                    a += "\n" + u.slice(d);
                  else {
                    if (
                      h ||
                      c.search(/[^ ]/) >= 4 ||
                      n.test(c) ||
                      i.test(c) ||
                      r.test(c)
                    )
                      break;
                    a += "\n" + u;
                  }
                  h || u.trim() || (h = !0),
                    (l += o + "\n"),
                    (e = e.substring(o.length + 1)),
                    (c = u.slice(d));
                }
              }
              !i.loose &&
                (s ? (i.loose = !0) : /\n *\n *$/.test(l) && (s = !0));
              let f = null;
              this.options.gfm &&
                (f = /^\[[ xX]\] /.exec(a)) &&
                ((r = "[ ] " !== f[0]), (a = a.replace(/^\[[ xX]\] +/, ""))),
                i.items.push({
                  type: "list_item",
                  raw: l,
                  task: !!f,
                  checked: r,
                  loose: !1,
                  text: a,
                  tokens: [],
                }),
                (i.raw += l);
            }
            (i.items[i.items.length - 1].raw = l.trimEnd()),
              (i.items[i.items.length - 1].text = a.trimEnd()),
              (i.raw = i.raw.trimEnd());
            for (let e = 0; e < i.items.length; e++)
              if (
                ((this.lexer.state.top = !1),
                (i.items[e].tokens = this.lexer.blockTokens(
                  i.items[e].text,
                  []
                )),
                !i.loose)
              ) {
                let t = i.items[e].tokens.filter((e) => "space" === e.type),
                  r = t.length > 0 && t.some((e) => /\n.*\n/.test(e.raw));
                i.loose = r;
              }
            if (i.loose)
              for (let e = 0; e < i.items.length; e++) i.items[e].loose = !0;
            return i;
          }
        }
        html(e) {
          let t = this.rules.block.html.exec(e);
          if (t) {
            let e = {
              type: "html",
              block: !0,
              raw: t[0],
              pre: "pre" === t[1] || "script" === t[1] || "style" === t[1],
              text: t[0],
            };
            return e;
          }
        }
        def(e) {
          let t = this.rules.block.def.exec(e);
          if (t) {
            let e = t[1].toLowerCase().replace(/\s+/g, " "),
              r = t[2]
                ? t[2]
                    .replace(/^<(.*)>$/, "$1")
                    .replace(this.rules.inline.anyPunctuation, "$1")
                : "",
              n = t[3]
                ? t[3]
                    .substring(1, t[3].length - 1)
                    .replace(this.rules.inline.anyPunctuation, "$1")
                : t[3];
            return { type: "def", tag: e, raw: t[0], href: r, title: n };
          }
        }
        table(e) {
          let t = this.rules.block.table.exec(e);
          if (!t || !/[:|]/.test(t[2])) return;
          let r = t0(t[1]),
            n = t[2].replace(/^\||\| *$/g, "").split("|"),
            i =
              t[3] && t[3].trim()
                ? t[3].replace(/\n[ \t]*$/, "").split("\n")
                : [],
            o = { type: "table", raw: t[0], header: [], align: [], rows: [] };
          if (r.length === n.length) {
            for (let e of n)
              /^ *-+: *$/.test(e)
                ? o.align.push("right")
                : /^ *:-+: *$/.test(e)
                  ? o.align.push("center")
                  : /^ *:-+ *$/.test(e)
                    ? o.align.push("left")
                    : o.align.push(null);
            for (let e of r)
              o.header.push({ text: e, tokens: this.lexer.inline(e) });
            for (let e of i)
              o.rows.push(
                t0(e, o.header.length).map((e) => ({
                  text: e,
                  tokens: this.lexer.inline(e),
                }))
              );
            return o;
          }
        }
        lheading(e) {
          let t = this.rules.block.lheading.exec(e);
          if (t)
            return {
              type: "heading",
              raw: t[0],
              depth: "=" === t[2].charAt(0) ? 1 : 2,
              text: t[1],
              tokens: this.lexer.inline(t[1]),
            };
        }
        paragraph(e) {
          let t = this.rules.block.paragraph.exec(e);
          if (t) {
            let e =
              "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
            return {
              type: "paragraph",
              raw: t[0],
              text: e,
              tokens: this.lexer.inline(e),
            };
          }
        }
        text(e) {
          let t = this.rules.block.text.exec(e);
          if (t)
            return {
              type: "text",
              raw: t[0],
              text: t[0],
              tokens: this.lexer.inline(t[0]),
            };
        }
        escape(e) {
          let t = this.rules.inline.escape.exec(e);
          if (t) return { type: "escape", raw: t[0], text: tK(t[1]) };
        }
        tag(e) {
          let t = this.rules.inline.tag.exec(e);
          if (t)
            return (
              !this.lexer.state.inLink && /^<a /i.test(t[0])
                ? (this.lexer.state.inLink = !0)
                : this.lexer.state.inLink &&
                  /^<\/a>/i.test(t[0]) &&
                  (this.lexer.state.inLink = !1),
              !this.lexer.state.inRawBlock &&
              /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
                ? (this.lexer.state.inRawBlock = !0)
                : this.lexer.state.inRawBlock &&
                  /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
                  (this.lexer.state.inRawBlock = !1),
              {
                type: "html",
                raw: t[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                block: !1,
                text: t[0],
              }
            );
        }
        link(e) {
          let t = this.rules.inline.link.exec(e);
          if (t) {
            let e = t[2].trim();
            if (!this.options.pedantic && /^</.test(e)) {
              if (!/>$/.test(e)) return;
              let t = t1(e.slice(0, -1), "\\");
              if ((e.length - t.length) % 2 == 0) return;
            } else {
              let e = (function (e, t) {
                if (-1 === e.indexOf(t[1])) return -1;
                let r = 0;
                for (let n = 0; n < e.length; n++)
                  if ("\\" === e[n]) n++;
                  else if (e[n] === t[0]) r++;
                  else if (e[n] === t[1] && --r < 0) return n;
                return -1;
              })(t[2], "()");
              if (e > -1) {
                let r = 0 === t[0].indexOf("!") ? 5 : 4,
                  n = r + t[1].length + e;
                (t[2] = t[2].substring(0, e)),
                  (t[0] = t[0].substring(0, n).trim()),
                  (t[3] = "");
              }
            }
            let r = t[2],
              n = "";
            if (this.options.pedantic) {
              let e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);
              e && ((r = e[1]), (n = e[3]));
            } else n = t[3] ? t[3].slice(1, -1) : "";
            return (
              (r = r.trim()),
              /^</.test(r) &&
                (r =
                  this.options.pedantic && !/>$/.test(e)
                    ? r.slice(1)
                    : r.slice(1, -1)),
              t2(
                t,
                {
                  href: r
                    ? r.replace(this.rules.inline.anyPunctuation, "$1")
                    : r,
                  title: n
                    ? n.replace(this.rules.inline.anyPunctuation, "$1")
                    : n,
                },
                t[0],
                this.lexer
              )
            );
          }
        }
        reflink(e, t) {
          let r;
          if (
            (r = this.rules.inline.reflink.exec(e)) ||
            (r = this.rules.inline.nolink.exec(e))
          ) {
            let e = (r[2] || r[1]).replace(/\s+/g, " "),
              n = t[e.toLowerCase()];
            if (!n) {
              let e = r[0].charAt(0);
              return { type: "text", raw: e, text: e };
            }
            return t2(r, n, r[0], this.lexer);
          }
        }
        emStrong(e, t, r = "") {
          let n = this.rules.inline.emStrongLDelim.exec(e);
          if (!n || (n[3] && r.match(/[\p{L}\p{N}]/u))) return;
          let i = n[1] || n[2] || "";
          if (!i || !r || this.rules.inline.punctuation.exec(r)) {
            let r = [...n[0]].length - 1,
              i,
              o,
              l = r,
              a = 0,
              s =
                "*" === n[0][0]
                  ? this.rules.inline.emStrongRDelimAst
                  : this.rules.inline.emStrongRDelimUnd;
            for (
              s.lastIndex = 0, t = t.slice(-1 * e.length + r);
              null != (n = s.exec(t));
            ) {
              if (!(i = n[1] || n[2] || n[3] || n[4] || n[5] || n[6])) continue;
              if (((o = [...i].length), n[3] || n[4])) {
                l += o;
                continue;
              }
              if ((n[5] || n[6]) && r % 3 && !((r + o) % 3)) {
                a += o;
                continue;
              }
              if ((l -= o) > 0) continue;
              o = Math.min(o, o + l + a);
              let t = [...n[0]][0].length,
                s = e.slice(0, r + n.index + t + o);
              if (Math.min(r, o) % 2) {
                let e = s.slice(1, -1);
                return {
                  type: "em",
                  raw: s,
                  text: e,
                  tokens: this.lexer.inlineTokens(e),
                };
              }
              let c = s.slice(2, -2);
              return {
                type: "strong",
                raw: s,
                text: c,
                tokens: this.lexer.inlineTokens(c),
              };
            }
          }
        }
        codespan(e) {
          let t = this.rules.inline.code.exec(e);
          if (t) {
            let e = t[2].replace(/\n/g, " "),
              r = /[^ ]/.test(e),
              n = /^ /.test(e) && / $/.test(e);
            return (
              r && n && (e = e.substring(1, e.length - 1)),
              (e = tK(e, !0)),
              { type: "codespan", raw: t[0], text: e }
            );
          }
        }
        br(e) {
          let t = this.rules.inline.br.exec(e);
          if (t) return { type: "br", raw: t[0] };
        }
        del(e) {
          let t = this.rules.inline.del.exec(e);
          if (t)
            return {
              type: "del",
              raw: t[0],
              text: t[2],
              tokens: this.lexer.inlineTokens(t[2]),
            };
        }
        autolink(e) {
          let t = this.rules.inline.autolink.exec(e);
          if (t) {
            let e, r;
            return (
              (r = "@" === t[2] ? "mailto:" + (e = tK(t[1])) : (e = tK(t[1]))),
              {
                type: "link",
                raw: t[0],
                text: e,
                href: r,
                tokens: [{ type: "text", raw: e, text: e }],
              }
            );
          }
        }
        url(e) {
          let t;
          if ((t = this.rules.inline.url.exec(e))) {
            let e, r;
            if ("@" === t[2]) r = "mailto:" + (e = tK(t[0]));
            else {
              let n;
              do
                (n = t[0]),
                  (t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "");
              while (n !== t[0]);
              (e = tK(t[0])), (r = "www." === t[1] ? "http://" + t[0] : t[0]);
            }
            return {
              type: "link",
              raw: t[0],
              text: e,
              href: r,
              tokens: [{ type: "text", raw: e, text: e }],
            };
          }
        }
        inlineText(e) {
          let t = this.rules.inline.text.exec(e);
          if (t) {
            let e;
            return (
              (e = this.lexer.state.inRawBlock ? t[0] : tK(t[0])),
              { type: "text", raw: t[0], text: e }
            );
          }
        }
      }
      let t7 =
          /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
        t6 = /(?:[*+-]|\d{1,9}[.)])/,
        t5 = tJ(
          /^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/
        )
          .replace(/bull/g, t6)
          .getRegex(),
        t8 =
          /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
        t4 = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
        t9 = tJ(
          /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/
        )
          .replace("label", t4)
          .replace(
            "title",
            /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
          )
          .getRegex(),
        re = tJ(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
          .replace(/bull/g, t6)
          .getRegex(),
        rt =
          "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
        rr = /<!--(?!-?>)[\s\S]*?(?:-->|$)/,
        rn = tJ(
          "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
          "i"
        )
          .replace("comment", rr)
          .replace("tag", rt)
          .replace(
            "attribute",
            / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
          )
          .getRegex(),
        ri = tJ(t8)
          .replace("hr", t7)
          .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
          .replace("|lheading", "")
          .replace("|table", "")
          .replace("blockquote", " {0,3}>")
          .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
          .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
          .replace(
            "html",
            "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
          )
          .replace("tag", rt)
          .getRegex(),
        ro = tJ(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
          .replace("paragraph", ri)
          .getRegex(),
        rl = {
          blockquote: ro,
          code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
          def: t9,
          fences:
            /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
          heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
          hr: t7,
          html: rn,
          lheading: t5,
          list: re,
          newline: /^(?: *(?:\n|$))+/,
          paragraph: ri,
          table: tZ,
          text: /^[^\n]+/,
        },
        ra = tJ(
          "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
        )
          .replace("hr", t7)
          .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
          .replace("blockquote", " {0,3}>")
          .replace("code", " {4}[^\\n]")
          .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
          .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
          .replace(
            "html",
            "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
          )
          .replace("tag", rt)
          .getRegex(),
        rs = {
          ...rl,
          table: ra,
          paragraph: tJ(t8)
            .replace("hr", t7)
            .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
            .replace("|lheading", "")
            .replace("table", ra)
            .replace("blockquote", " {0,3}>")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace(
              "html",
              "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
            )
            .replace("tag", rt)
            .getRegex(),
        },
        rc = {
          ...rl,
          html: tJ(
            "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
          )
            .replace("comment", rr)
            .replace(
              /tag/g,
              "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
            )
            .getRegex(),
          def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
          heading: /^(#{1,6})(.*)(?:\n+|$)/,
          fences: tZ,
          lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
          paragraph: tJ(t8)
            .replace("hr", t7)
            .replace("heading", " *#{1,6} *[^\n]")
            .replace("lheading", t5)
            .replace("|table", "")
            .replace("blockquote", " {0,3}>")
            .replace("|fences", "")
            .replace("|list", "")
            .replace("|html", "")
            .replace("|tag", "")
            .getRegex(),
        },
        ru = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        rd = /^( {2,}|\\)\n(?!\s*$)/,
        rh = "\\p{P}$+<=>`^|~",
        rf = tJ(/^((?![*_])[\spunctuation])/, "u")
          .replace(/punctuation/g, rh)
          .getRegex(),
        rp = tJ(
          /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
          "u"
        )
          .replace(/punct/g, rh)
          .getRegex(),
        rg = tJ(
          "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])",
          "gu"
        )
          .replace(/punct/g, rh)
          .getRegex(),
        rm = tJ(
          "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])",
          "gu"
        )
          .replace(/punct/g, rh)
          .getRegex(),
        rv = tJ(/\\([punct])/, "gu")
          .replace(/punct/g, rh)
          .getRegex(),
        rw = tJ(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
          .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
          .replace(
            "email",
            /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/
          )
          .getRegex(),
        ry = tJ(rr).replace("(?:-->|$)", "-->").getRegex(),
        rb = tJ(
          "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
        )
          .replace("comment", ry)
          .replace(
            "attribute",
            /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/
          )
          .getRegex(),
        rx = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
        rk = tJ(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
          .replace("label", rx)
          .replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
          .replace(
            "title",
            /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/
          )
          .getRegex(),
        rS = tJ(/^!?\[(label)\]\[(ref)\]/)
          .replace("label", rx)
          .replace("ref", t4)
          .getRegex(),
        rC = tJ(/^!?\[(ref)\](?:\[\])?/)
          .replace("ref", t4)
          .getRegex(),
        r_ = tJ("reflink|nolink(?!\\()", "g")
          .replace("reflink", rS)
          .replace("nolink", rC)
          .getRegex(),
        rR = {
          _backpedal: tZ,
          anyPunctuation: rv,
          autolink: rw,
          blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
          br: rd,
          code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
          del: tZ,
          emStrongLDelim: rp,
          emStrongRDelimAst: rg,
          emStrongRDelimUnd: rm,
          escape: ru,
          link: rk,
          nolink: rC,
          punctuation: rf,
          reflink: rS,
          reflinkSearch: r_,
          tag: rb,
          text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
          url: tZ,
        },
        rE = {
          ...rR,
          link: tJ(/^!?\[(label)\]\((.*?)\)/)
            .replace("label", rx)
            .getRegex(),
          reflink: tJ(/^!?\[(label)\]\s*\[([^\]]*)\]/)
            .replace("label", rx)
            .getRegex(),
        },
        rM = {
          ...rR,
          escape: tJ(ru).replace("])", "~|])").getRegex(),
          url: tJ(
            /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
            "i"
          )
            .replace(
              "email",
              /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/
            )
            .getRegex(),
          _backpedal:
            /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
          del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
          text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
        },
        rI = {
          ...rM,
          br: tJ(rd).replace("{2,}", "*").getRegex(),
          text: tJ(rM.text)
            .replace("\\b_", "\\b_| {2,}\\n")
            .replace(/\{2,\}/g, "*")
            .getRegex(),
        },
        rT = { normal: rl, gfm: rs, pedantic: rc },
        rO = { normal: rR, gfm: rM, breaks: rI, pedantic: rE };
      class rP {
        tokens;
        options;
        state;
        tokenizer;
        inlineQueue;
        constructor(e) {
          (this.tokens = []),
            (this.tokens.links = Object.create(null)),
            (this.options = e || tB),
            (this.options.tokenizer = this.options.tokenizer || new t3()),
            (this.tokenizer = this.options.tokenizer),
            (this.tokenizer.options = this.options),
            (this.tokenizer.lexer = this),
            (this.inlineQueue = []),
            (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
          let t = { block: rT.normal, inline: rO.normal };
          this.options.pedantic
            ? ((t.block = rT.pedantic), (t.inline = rO.pedantic))
            : this.options.gfm &&
              ((t.block = rT.gfm),
              this.options.breaks
                ? (t.inline = rO.breaks)
                : (t.inline = rO.gfm)),
            (this.tokenizer.rules = t);
        }
        static get rules() {
          return { block: rT, inline: rO };
        }
        static lex(e, t) {
          let r = new rP(t);
          return r.lex(e);
        }
        static lexInline(e, t) {
          let r = new rP(t);
          return r.inlineTokens(e);
        }
        lex(e) {
          (e = e.replace(/\r\n|\r/g, "\n")), this.blockTokens(e, this.tokens);
          for (let e = 0; e < this.inlineQueue.length; e++) {
            let t = this.inlineQueue[e];
            this.inlineTokens(t.src, t.tokens);
          }
          return (this.inlineQueue = []), this.tokens;
        }
        blockTokens(e, t = []) {
          let r, n, i, o;
          for (
            e = this.options.pedantic
              ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "")
              : e.replace(
                  /^( *)(\t+)/gm,
                  (e, t, r) => t + "    ".repeat(r.length)
                );
            e;
          )
            if (
              !(
                this.options.extensions &&
                this.options.extensions.block &&
                this.options.extensions.block.some(
                  (n) =>
                    !!(r = n.call({ lexer: this }, e, t)) &&
                    ((e = e.substring(r.raw.length)), t.push(r), !0)
                )
              )
            ) {
              if ((r = this.tokenizer.space(e))) {
                (e = e.substring(r.raw.length)),
                  1 === r.raw.length && t.length > 0
                    ? (t[t.length - 1].raw += "\n")
                    : t.push(r);
                continue;
              }
              if ((r = this.tokenizer.code(e))) {
                (e = e.substring(r.raw.length)),
                  (n = t[t.length - 1]) &&
                  ("paragraph" === n.type || "text" === n.type)
                    ? ((n.raw += "\n" + r.raw),
                      (n.text += "\n" + r.text),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        n.text))
                    : t.push(r);
                continue;
              }
              if (
                (r = this.tokenizer.fences(e)) ||
                (r = this.tokenizer.heading(e)) ||
                (r = this.tokenizer.hr(e)) ||
                (r = this.tokenizer.blockquote(e)) ||
                (r = this.tokenizer.list(e)) ||
                (r = this.tokenizer.html(e))
              ) {
                (e = e.substring(r.raw.length)), t.push(r);
                continue;
              }
              if ((r = this.tokenizer.def(e))) {
                (e = e.substring(r.raw.length)),
                  (n = t[t.length - 1]) &&
                  ("paragraph" === n.type || "text" === n.type)
                    ? ((n.raw += "\n" + r.raw),
                      (n.text += "\n" + r.raw),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        n.text))
                    : this.tokens.links[r.tag] ||
                      (this.tokens.links[r.tag] = {
                        href: r.href,
                        title: r.title,
                      });
                continue;
              }
              if (
                (r = this.tokenizer.table(e)) ||
                (r = this.tokenizer.lheading(e))
              ) {
                (e = e.substring(r.raw.length)), t.push(r);
                continue;
              }
              if (
                ((i = e),
                this.options.extensions && this.options.extensions.startBlock)
              ) {
                let t,
                  r = 1 / 0,
                  n = e.slice(1);
                this.options.extensions.startBlock.forEach((e) => {
                  "number" == typeof (t = e.call({ lexer: this }, n)) &&
                    t >= 0 &&
                    (r = Math.min(r, t));
                }),
                  r < 1 / 0 && r >= 0 && (i = e.substring(0, r + 1));
              }
              if (this.state.top && (r = this.tokenizer.paragraph(i))) {
                (n = t[t.length - 1]),
                  o && "paragraph" === n.type
                    ? ((n.raw += "\n" + r.raw),
                      (n.text += "\n" + r.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        n.text))
                    : t.push(r),
                  (o = i.length !== e.length),
                  (e = e.substring(r.raw.length));
                continue;
              }
              if ((r = this.tokenizer.text(e))) {
                (e = e.substring(r.raw.length)),
                  (n = t[t.length - 1]) && "text" === n.type
                    ? ((n.raw += "\n" + r.raw),
                      (n.text += "\n" + r.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        n.text))
                    : t.push(r);
                continue;
              }
              if (e) {
                let t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(t);
                  break;
                }
                throw Error(t);
              }
            }
          return (this.state.top = !0), t;
        }
        inline(e, t = []) {
          return this.inlineQueue.push({ src: e, tokens: t }), t;
        }
        inlineTokens(e, t = []) {
          let r, n, i, o, l, a;
          let s = e;
          if (this.tokens.links) {
            let e = Object.keys(this.tokens.links);
            if (e.length > 0)
              for (
                ;
                null != (o = this.tokenizer.rules.inline.reflinkSearch.exec(s));
              )
                e.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) &&
                  (s =
                    s.slice(0, o.index) +
                    "[" +
                    "a".repeat(o[0].length - 2) +
                    "]" +
                    s.slice(
                      this.tokenizer.rules.inline.reflinkSearch.lastIndex
                    ));
          }
          for (; null != (o = this.tokenizer.rules.inline.blockSkip.exec(s)); )
            s =
              s.slice(0, o.index) +
              "[" +
              "a".repeat(o[0].length - 2) +
              "]" +
              s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
          for (
            ;
            null != (o = this.tokenizer.rules.inline.anyPunctuation.exec(s));
          )
            s =
              s.slice(0, o.index) +
              "++" +
              s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
          for (; e; )
            if (
              (l || (a = ""),
              (l = !1),
              !(
                this.options.extensions &&
                this.options.extensions.inline &&
                this.options.extensions.inline.some(
                  (n) =>
                    !!(r = n.call({ lexer: this }, e, t)) &&
                    ((e = e.substring(r.raw.length)), t.push(r), !0)
                )
              ))
            ) {
              if ((r = this.tokenizer.escape(e))) {
                (e = e.substring(r.raw.length)), t.push(r);
                continue;
              }
              if ((r = this.tokenizer.tag(e))) {
                (e = e.substring(r.raw.length)),
                  (n = t[t.length - 1]) &&
                  "text" === r.type &&
                  "text" === n.type
                    ? ((n.raw += r.raw), (n.text += r.text))
                    : t.push(r);
                continue;
              }
              if ((r = this.tokenizer.link(e))) {
                (e = e.substring(r.raw.length)), t.push(r);
                continue;
              }
              if ((r = this.tokenizer.reflink(e, this.tokens.links))) {
                (e = e.substring(r.raw.length)),
                  (n = t[t.length - 1]) &&
                  "text" === r.type &&
                  "text" === n.type
                    ? ((n.raw += r.raw), (n.text += r.text))
                    : t.push(r);
                continue;
              }
              if (
                (r = this.tokenizer.emStrong(e, s, a)) ||
                (r = this.tokenizer.codespan(e)) ||
                (r = this.tokenizer.br(e)) ||
                (r = this.tokenizer.del(e)) ||
                (r = this.tokenizer.autolink(e)) ||
                (!this.state.inLink && (r = this.tokenizer.url(e)))
              ) {
                (e = e.substring(r.raw.length)), t.push(r);
                continue;
              }
              if (
                ((i = e),
                this.options.extensions && this.options.extensions.startInline)
              ) {
                let t,
                  r = 1 / 0,
                  n = e.slice(1);
                this.options.extensions.startInline.forEach((e) => {
                  "number" == typeof (t = e.call({ lexer: this }, n)) &&
                    t >= 0 &&
                    (r = Math.min(r, t));
                }),
                  r < 1 / 0 && r >= 0 && (i = e.substring(0, r + 1));
              }
              if ((r = this.tokenizer.inlineText(i))) {
                (e = e.substring(r.raw.length)),
                  "_" !== r.raw.slice(-1) && (a = r.raw.slice(-1)),
                  (l = !0),
                  (n = t[t.length - 1]) && "text" === n.type
                    ? ((n.raw += r.raw), (n.text += r.text))
                    : t.push(r);
                continue;
              }
              if (e) {
                let t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(t);
                  break;
                }
                throw Error(t);
              }
            }
          return t;
        }
      }
      class rz {
        options;
        constructor(e) {
          this.options = e || tB;
        }
        code(e, t, r) {
          let n = (t || "").match(/^\S*/)?.[0];
          return ((e = e.replace(/\n$/, "") + "\n"), n)
            ? '<pre><code class="language-' +
                tK(n) +
                '">' +
                (r ? e : tK(e, !0)) +
                "</code></pre>\n"
            : "<pre><code>" + (r ? e : tK(e, !0)) + "</code></pre>\n";
        }
        blockquote(e) {
          return `<blockquote>
${e}</blockquote>
`;
        }
        html(e, t) {
          return e;
        }
        heading(e, t, r) {
          return `<h${t}>${e}</h${t}>
`;
        }
        hr() {
          return "<hr>\n";
        }
        list(e, t, r) {
          let n = t ? "ol" : "ul";
          return (
            "<" +
            n +
            (t && 1 !== r ? ' start="' + r + '"' : "") +
            ">\n" +
            e +
            "</" +
            n +
            ">\n"
          );
        }
        listitem(e, t, r) {
          return `<li>${e}</li>
`;
        }
        checkbox(e) {
          return (
            "<input " +
            (e ? 'checked="" ' : "") +
            'disabled="" type="checkbox">'
          );
        }
        paragraph(e) {
          return `<p>${e}</p>
`;
        }
        table(e, t) {
          return (
            t && (t = `<tbody>${t}</tbody>`),
            "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
          );
        }
        tablerow(e) {
          return `<tr>
${e}</tr>
`;
        }
        tablecell(e, t) {
          let r = t.header ? "th" : "td",
            n = t.align ? `<${r} align="${t.align}">` : `<${r}>`;
          return (
            n +
            e +
            `</${r}>
`
          );
        }
        strong(e) {
          return `<strong>${e}</strong>`;
        }
        em(e) {
          return `<em>${e}</em>`;
        }
        codespan(e) {
          return `<code>${e}</code>`;
        }
        br() {
          return "<br>";
        }
        del(e) {
          return `<del>${e}</del>`;
        }
        link(e, t, r) {
          let n = tQ(e);
          if (null === n) return r;
          let i = '<a href="' + (e = n) + '"';
          return t && (i += ' title="' + t + '"'), (i += ">" + r + "</a>");
        }
        image(e, t, r) {
          let n = tQ(e);
          if (null === n) return r;
          let i = `<img src="${(e = n)}" alt="${r}"`;
          return t && (i += ` title="${t}"`), (i += ">");
        }
        text(e) {
          return e;
        }
      }
      class rA {
        strong(e) {
          return e;
        }
        em(e) {
          return e;
        }
        codespan(e) {
          return e;
        }
        del(e) {
          return e;
        }
        html(e) {
          return e;
        }
        text(e) {
          return e;
        }
        link(e, t, r) {
          return "" + r;
        }
        image(e, t, r) {
          return "" + r;
        }
        br() {
          return "";
        }
      }
      class rL {
        options;
        renderer;
        textRenderer;
        constructor(e) {
          (this.options = e || tB),
            (this.options.renderer = this.options.renderer || new rz()),
            (this.renderer = this.options.renderer),
            (this.renderer.options = this.options),
            (this.textRenderer = new rA());
        }
        static parse(e, t) {
          let r = new rL(t);
          return r.parse(e);
        }
        static parseInline(e, t) {
          let r = new rL(t);
          return r.parseInline(e);
        }
        parse(e, t = !0) {
          let r = "";
          for (let n = 0; n < e.length; n++) {
            let i = e[n];
            if (
              this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[i.type]
            ) {
              let e = this.options.extensions.renderers[i.type].call(
                { parser: this },
                i
              );
              if (
                !1 !== e ||
                ![
                  "space",
                  "hr",
                  "heading",
                  "code",
                  "table",
                  "blockquote",
                  "list",
                  "html",
                  "paragraph",
                  "text",
                ].includes(i.type)
              ) {
                r += e || "";
                continue;
              }
            }
            switch (i.type) {
              case "space":
                continue;
              case "hr":
                r += this.renderer.hr();
                continue;
              case "heading":
                r += this.renderer.heading(
                  this.parseInline(i.tokens),
                  i.depth,
                  this.parseInline(i.tokens, this.textRenderer).replace(
                    tY,
                    (e, t) =>
                      "colon" === (t = t.toLowerCase())
                        ? ":"
                        : "#" === t.charAt(0)
                          ? "x" === t.charAt(1)
                            ? String.fromCharCode(parseInt(t.substring(2), 16))
                            : String.fromCharCode(+t.substring(1))
                          : ""
                  )
                );
                continue;
              case "code":
                r += this.renderer.code(i.text, i.lang, !!i.escaped);
                continue;
              case "table": {
                let e = "",
                  t = "";
                for (let e = 0; e < i.header.length; e++)
                  t += this.renderer.tablecell(
                    this.parseInline(i.header[e].tokens),
                    { header: !0, align: i.align[e] }
                  );
                e += this.renderer.tablerow(t);
                let n = "";
                for (let e = 0; e < i.rows.length; e++) {
                  let r = i.rows[e];
                  t = "";
                  for (let e = 0; e < r.length; e++)
                    t += this.renderer.tablecell(
                      this.parseInline(r[e].tokens),
                      { header: !1, align: i.align[e] }
                    );
                  n += this.renderer.tablerow(t);
                }
                r += this.renderer.table(e, n);
                continue;
              }
              case "blockquote": {
                let e = this.parse(i.tokens);
                r += this.renderer.blockquote(e);
                continue;
              }
              case "list": {
                let e = i.ordered,
                  t = i.start,
                  n = i.loose,
                  o = "";
                for (let e = 0; e < i.items.length; e++) {
                  let t = i.items[e],
                    r = t.checked,
                    l = t.task,
                    a = "";
                  if (t.task) {
                    let e = this.renderer.checkbox(!!r);
                    n
                      ? t.tokens.length > 0 && "paragraph" === t.tokens[0].type
                        ? ((t.tokens[0].text = e + " " + t.tokens[0].text),
                          t.tokens[0].tokens &&
                            t.tokens[0].tokens.length > 0 &&
                            "text" === t.tokens[0].tokens[0].type &&
                            (t.tokens[0].tokens[0].text =
                              e + " " + t.tokens[0].tokens[0].text))
                        : t.tokens.unshift({ type: "text", text: e + " " })
                      : (a += e + " ");
                  }
                  (a += this.parse(t.tokens, n)),
                    (o += this.renderer.listitem(a, l, !!r));
                }
                r += this.renderer.list(o, e, t);
                continue;
              }
              case "html":
                r += this.renderer.html(i.text, i.block);
                continue;
              case "paragraph":
                r += this.renderer.paragraph(this.parseInline(i.tokens));
                continue;
              case "text": {
                let o = i,
                  l = o.tokens ? this.parseInline(o.tokens) : o.text;
                for (; n + 1 < e.length && "text" === e[n + 1].type; )
                  l +=
                    "\n" +
                    ((o = e[++n]).tokens ? this.parseInline(o.tokens) : o.text);
                r += t ? this.renderer.paragraph(l) : l;
                continue;
              }
              default: {
                let e = 'Token with "' + i.type + '" type was not found.';
                if (this.options.silent) return console.error(e), "";
                throw Error(e);
              }
            }
          }
          return r;
        }
        parseInline(e, t) {
          t = t || this.renderer;
          let r = "";
          for (let n = 0; n < e.length; n++) {
            let i = e[n];
            if (
              this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[i.type]
            ) {
              let e = this.options.extensions.renderers[i.type].call(
                { parser: this },
                i
              );
              if (
                !1 !== e ||
                ![
                  "escape",
                  "html",
                  "link",
                  "image",
                  "strong",
                  "em",
                  "codespan",
                  "br",
                  "del",
                  "text",
                ].includes(i.type)
              ) {
                r += e || "";
                continue;
              }
            }
            switch (i.type) {
              case "escape":
              case "text":
                r += t.text(i.text);
                break;
              case "html":
                r += t.html(i.text);
                break;
              case "link":
                r += t.link(i.href, i.title, this.parseInline(i.tokens, t));
                break;
              case "image":
                r += t.image(i.href, i.title, i.text);
                break;
              case "strong":
                r += t.strong(this.parseInline(i.tokens, t));
                break;
              case "em":
                r += t.em(this.parseInline(i.tokens, t));
                break;
              case "codespan":
                r += t.codespan(i.text);
                break;
              case "br":
                r += t.br();
                break;
              case "del":
                r += t.del(this.parseInline(i.tokens, t));
                break;
              default: {
                let e = 'Token with "' + i.type + '" type was not found.';
                if (this.options.silent) return console.error(e), "";
                throw Error(e);
              }
            }
          }
          return r;
        }
      }
      class rD {
        options;
        constructor(e) {
          this.options = e || tB;
        }
        static passThroughHooks = new Set([
          "preprocess",
          "postprocess",
          "processAllTokens",
        ]);
        preprocess(e) {
          return e;
        }
        postprocess(e) {
          return e;
        }
        processAllTokens(e) {
          return e;
        }
      }
      class rH {
        defaults = tN();
        options = this.setOptions;
        parse = this.#e(rP.lex, rL.parse);
        parseInline = this.#e(rP.lexInline, rL.parseInline);
        Parser = rL;
        Renderer = rz;
        TextRenderer = rA;
        Lexer = rP;
        Tokenizer = t3;
        Hooks = rD;
        constructor(...e) {
          this.use(...e);
        }
        walkTokens(e, t) {
          let r = [];
          for (let n of e)
            switch (((r = r.concat(t.call(this, n))), n.type)) {
              case "table": {
                let e = n;
                for (let n of e.header)
                  r = r.concat(this.walkTokens(n.tokens, t));
                for (let n of e.rows)
                  for (let e of n) r = r.concat(this.walkTokens(e.tokens, t));
                break;
              }
              case "list": {
                let e = n;
                r = r.concat(this.walkTokens(e.items, t));
                break;
              }
              default: {
                let e = n;
                this.defaults.extensions?.childTokens?.[e.type]
                  ? this.defaults.extensions.childTokens[e.type].forEach(
                      (n) => {
                        r = r.concat(this.walkTokens(e[n], t));
                      }
                    )
                  : e.tokens && (r = r.concat(this.walkTokens(e.tokens, t)));
              }
            }
          return r;
        }
        use(...e) {
          let t = this.defaults.extensions || {
            renderers: {},
            childTokens: {},
          };
          return (
            e.forEach((e) => {
              let r = { ...e };
              if (
                ((r.async = this.defaults.async || r.async || !1),
                e.extensions &&
                  (e.extensions.forEach((e) => {
                    if (!e.name) throw Error("extension name required");
                    if ("renderer" in e) {
                      let r = t.renderers[e.name];
                      r
                        ? (t.renderers[e.name] = function (...t) {
                            let n = e.renderer.apply(this, t);
                            return !1 === n && (n = r.apply(this, t)), n;
                          })
                        : (t.renderers[e.name] = e.renderer);
                    }
                    if ("tokenizer" in e) {
                      if (
                        !e.level ||
                        ("block" !== e.level && "inline" !== e.level)
                      )
                        throw Error(
                          "extension level must be 'block' or 'inline'"
                        );
                      let r = t[e.level];
                      r ? r.unshift(e.tokenizer) : (t[e.level] = [e.tokenizer]),
                        e.start &&
                          ("block" === e.level
                            ? t.startBlock
                              ? t.startBlock.push(e.start)
                              : (t.startBlock = [e.start])
                            : "inline" === e.level &&
                              (t.startInline
                                ? t.startInline.push(e.start)
                                : (t.startInline = [e.start])));
                    }
                    "childTokens" in e &&
                      e.childTokens &&
                      (t.childTokens[e.name] = e.childTokens);
                  }),
                  (r.extensions = t)),
                e.renderer)
              ) {
                let t = this.defaults.renderer || new rz(this.defaults);
                for (let r in e.renderer) {
                  if (!(r in t)) throw Error(`renderer '${r}' does not exist`);
                  if ("options" === r) continue;
                  let n = r,
                    i = e.renderer[n],
                    o = t[n];
                  t[n] = (...e) => {
                    let r = i.apply(t, e);
                    return !1 === r && (r = o.apply(t, e)), r || "";
                  };
                }
                r.renderer = t;
              }
              if (e.tokenizer) {
                let t = this.defaults.tokenizer || new t3(this.defaults);
                for (let r in e.tokenizer) {
                  if (!(r in t)) throw Error(`tokenizer '${r}' does not exist`);
                  if (["options", "rules", "lexer"].includes(r)) continue;
                  let n = r,
                    i = e.tokenizer[n],
                    o = t[n];
                  t[n] = (...e) => {
                    let r = i.apply(t, e);
                    return !1 === r && (r = o.apply(t, e)), r;
                  };
                }
                r.tokenizer = t;
              }
              if (e.hooks) {
                let t = this.defaults.hooks || new rD();
                for (let r in e.hooks) {
                  if (!(r in t)) throw Error(`hook '${r}' does not exist`);
                  if ("options" === r) continue;
                  let n = r,
                    i = e.hooks[n],
                    o = t[n];
                  rD.passThroughHooks.has(r)
                    ? (t[n] = (e) => {
                        if (this.defaults.async)
                          return Promise.resolve(i.call(t, e)).then((e) =>
                            o.call(t, e)
                          );
                        let r = i.call(t, e);
                        return o.call(t, r);
                      })
                    : (t[n] = (...e) => {
                        let r = i.apply(t, e);
                        return !1 === r && (r = o.apply(t, e)), r;
                      });
                }
                r.hooks = t;
              }
              if (e.walkTokens) {
                let t = this.defaults.walkTokens,
                  n = e.walkTokens;
                r.walkTokens = function (e) {
                  let r = [];
                  return (
                    r.push(n.call(this, e)),
                    t && (r = r.concat(t.call(this, e))),
                    r
                  );
                };
              }
              this.defaults = { ...this.defaults, ...r };
            }),
            this
          );
        }
        setOptions(e) {
          return (this.defaults = { ...this.defaults, ...e }), this;
        }
        lexer(e, t) {
          return rP.lex(e, t ?? this.defaults);
        }
        parser(e, t) {
          return rL.parse(e, t ?? this.defaults);
        }
        #e(e, t) {
          return (r, n) => {
            let i = { ...n },
              o = { ...this.defaults, ...i };
            !0 === this.defaults.async &&
              !1 === i.async &&
              (o.silent ||
                console.warn(
                  "marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."
                ),
              (o.async = !0));
            let l = this.#t(!!o.silent, !!o.async);
            if (null == r)
              return l(Error("marked(): input parameter is undefined or null"));
            if ("string" != typeof r)
              return l(
                Error(
                  "marked(): input parameter is of type " +
                    Object.prototype.toString.call(r) +
                    ", string expected"
                )
              );
            if ((o.hooks && (o.hooks.options = o), o.async))
              return Promise.resolve(o.hooks ? o.hooks.preprocess(r) : r)
                .then((t) => e(t, o))
                .then((e) => (o.hooks ? o.hooks.processAllTokens(e) : e))
                .then((e) =>
                  o.walkTokens
                    ? Promise.all(this.walkTokens(e, o.walkTokens)).then(
                        () => e
                      )
                    : e
                )
                .then((e) => t(e, o))
                .then((e) => (o.hooks ? o.hooks.postprocess(e) : e))
                .catch(l);
            try {
              o.hooks && (r = o.hooks.preprocess(r));
              let n = e(r, o);
              o.hooks && (n = o.hooks.processAllTokens(n)),
                o.walkTokens && this.walkTokens(n, o.walkTokens);
              let i = t(n, o);
              return o.hooks && (i = o.hooks.postprocess(i)), i;
            } catch (e) {
              return l(e);
            }
          };
        }
        #t(e, t) {
          return (r) => {
            if (
              ((r.message +=
                "\nPlease report this to https://github.com/markedjs/marked."),
              e)
            ) {
              let e =
                "<p>An error occurred:</p><pre>" +
                tK(r.message + "", !0) +
                "</pre>";
              return t ? Promise.resolve(e) : e;
            }
            if (t) return Promise.reject(r);
            throw r;
          };
        }
      }
      let rF = new rH();
      function r$(e, t) {
        return rF.parse(e, t);
      }
      (r$.options = r$.setOptions =
        function (e) {
          return (
            rF.setOptions(e),
            (r$.defaults = rF.defaults),
            (tB = r$.defaults),
            r$
          );
        }),
        (r$.getDefaults = tN),
        (r$.defaults = tB),
        (r$.use = function (...e) {
          return (
            rF.use(...e), (r$.defaults = rF.defaults), (tB = r$.defaults), r$
          );
        }),
        (r$.walkTokens = function (e, t) {
          return rF.walkTokens(e, t);
        }),
        (r$.parseInline = rF.parseInline),
        (r$.Parser = rL),
        (r$.parser = rL.parse),
        (r$.Renderer = rz),
        (r$.TextRenderer = rA),
        (r$.Lexer = rP),
        (r$.lexer = rP.lex),
        (r$.Tokenizer = t3),
        (r$.Hooks = rD),
        (r$.parse = r$),
        r$.options,
        r$.setOptions,
        r$.use,
        r$.walkTokens,
        r$.parseInline,
        rL.parse,
        rP.lex;
      let rN = (0, e3.z)("div")({
        name: "MarkdownContainer",
        class: "gdg-mnuv029",
        propsAsIs: !1,
      });
      class rB extends c.PureComponent {
        targetElement = null;
        renderMarkdownIntoDiv() {
          let { targetElement: e, props: t } = this;
          if (null === e) return;
          let { contents: r, createNode: n } = t,
            i = r$(r),
            o = document.createRange();
          o.selectNodeContents(e), o.deleteContents();
          let l = n?.(i);
          if (void 0 === l) {
            let e = document.createElement("template");
            (e.innerHTML = i), (l = e.content);
          }
          e.append(l);
          let a = e.getElementsByTagName("a");
          for (let e of a)
            (e.target = "_blank"), (e.rel = "noreferrer noopener");
        }
        containerRefHook = (e) => {
          (this.targetElement = e), this.renderMarkdownIntoDiv();
        };
        render() {
          return (
            this.renderMarkdownIntoDiv(),
            c.createElement(rN, { ref: this.containerRefHook })
          );
        }
      }
      let rV = (0, e3.z)("textarea")({
          name: "InputBox",
          class: "gdg-izpuzkl",
          propsAsIs: !1,
        }),
        rW = (0, e3.z)("div")({
          name: "ShadowBox",
          class: "gdg-s69h75o",
          propsAsIs: !1,
        }),
        rj = (0, e3.z)("div")({
          name: "GrowingEntryStyle",
          class: "gdg-g1y0xocz",
          propsAsIs: !1,
        }),
        rU = 0,
        rq = (e) => {
          let {
              placeholder: t,
              value: r,
              onKeyDown: n,
              highlight: i,
              altNewline: o,
              validatedSelection: l,
              ...a
            } = e,
            { onChange: s, className: d } = a,
            h = c.useRef(null),
            f = r ?? "";
          (0, u.hu)(
            void 0 !== s,
            "GrowingEntry must be a controlled input area"
          );
          let [p] = c.useState(() => "input-box-" + (rU = (rU + 1) % 1e7));
          c.useEffect(() => {
            let e = h.current;
            if (null === e || e.disabled) return;
            let t = f.toString().length;
            e.focus(), e.setSelectionRange(i ? 0 : t, t);
          }, []),
            c.useLayoutEffect(() => {
              if (void 0 !== l) {
                let e = "number" == typeof l ? [l, null] : l;
                h.current?.setSelectionRange(e[0], e[1]);
              }
            }, [l]);
          let g = c.useCallback(
            (e) => {
              ("Enter" === e.key && e.shiftKey && !0 === o) || n?.(e);
            },
            [o, n]
          );
          return c.createElement(
            rj,
            { className: "gdg-growing-entry" },
            c.createElement(rW, { className: d }, f + "\n"),
            c.createElement(rV, {
              ...a,
              className: (d ?? "") + " gdg-input",
              id: p,
              ref: h,
              onKeyDown: g,
              value: f,
              placeholder: t,
              dir: "auto",
            })
          );
        },
        rX = (0, e3.z)("div")({
          name: "MarkdownOverlayEditorStyle",
          class: "gdg-m1pnx84e",
          propsAsIs: !1,
          vars: { "m1pnx84e-0": [(e) => e.targetWidth, "px"] },
        }),
        rK = (e) => {
          let {
              value: t,
              onChange: r,
              forceEditMode: n,
              createNode: i,
              targetRect: o,
              onFinish: l,
              validatedSelection: a,
            } = e,
            s = t.data,
            u = !0 === t.readonly,
            [d, h] = c.useState("" === s || n),
            f = c.useCallback(() => {
              h((e) => !e);
            }, []),
            p = s ? "gdg-ml-6" : "";
          return d
            ? c.createElement(
                rX,
                { targetWidth: o.width - 20 },
                c.createElement(rq, {
                  autoFocus: !0,
                  highlight: !1,
                  validatedSelection: a,
                  value: s,
                  onKeyDown: (e) => {
                    "Enter" === e.key && e.stopPropagation();
                  },
                  onChange: r,
                }),
                c.createElement(
                  "div",
                  {
                    className: `gdg-edit-icon gdg-checkmark-hover ${p}`,
                    onClick: () => l(t),
                  },
                  c.createElement(_, null)
                )
              )
            : c.createElement(
                rX,
                { targetWidth: o.width },
                c.createElement(rB, { contents: s, createNode: i }),
                !u &&
                  c.createElement(
                    c.Fragment,
                    null,
                    c.createElement("div", { className: "spacer" }),
                    c.createElement(
                      "div",
                      {
                        className: `gdg-edit-icon gdg-edit-hover ${p}`,
                        onClick: f,
                      },
                      c.createElement(C, null)
                    )
                  ),
                c.createElement("textarea", {
                  className: "gdg-md-edit-textarea gdg-input",
                  autoFocus: !0,
                })
              );
        },
        rY = {
          getAccessibilityString: (e) => e.data?.toString() ?? "",
          kind: m.p6.Markdown,
          needsHover: !1,
          needsHoverPosition: !1,
          drawPrep: Q,
          measure: (e, t, r) => {
            let n = t.data.split("\n")[0];
            return e.measureText(n).width + 2 * r.cellHorizontalPadding;
          },
          draw: (e) => et(e, e.cell.data, e.cell.contentAlign),
          onDelete: (e) => ({ ...e, data: "" }),
          provideEditor: () => (e) => {
            let {
              onChange: t,
              value: r,
              target: n,
              onFinishedEditing: i,
              markdownDivCreateNode: o,
              forceEditMode: l,
              validatedSelection: a,
            } = e;
            return c.createElement(rK, {
              onFinish: i,
              targetRect: n,
              value: r,
              validatedSelection: a,
              onChange: (e) => t({ ...r, data: e.target.value }),
              forceEditMode: l,
              createNode: o,
            });
          },
          onPaste: (e, t) => (e === t.data ? void 0 : { ...t, data: e }),
        },
        rG = {
          getAccessibilityString: (e) => e.row.toString(),
          kind: m.$o.Marker,
          needsHover: !0,
          needsHoverPosition: !1,
          drawPrep: function (e, t) {
            let { ctx: r, theme: n } = e,
              i = n.markerFontFull,
              o = t ?? {};
            return (
              o?.font !== i && ((r.font = i), (o.font = i)),
              (o.deprep = rJ),
              (r.textAlign = "center"),
              o
            );
          },
          measure: () => 44,
          draw: (e) =>
            (function (e, t, r, n, i) {
              let { ctx: o, rect: l, hoverAmount: a, theme: s } = e,
                { x: c, y: u, width: d, height: h } = l,
                f = r ? 1 : "checkbox-visible" === n ? 0.6 + 0.4 * a : a;
              if ("number" !== n && f > 0) {
                o.globalAlpha = f;
                let e = 7 * (r ? a : 1);
                if (
                  (ew(
                    o,
                    s,
                    r,
                    i ? c + e : c,
                    u,
                    i ? d - e : d,
                    h,
                    !0,
                    void 0,
                    void 0,
                    18
                  ),
                  i)
                ) {
                  for (let e of ((o.globalAlpha = a), o.beginPath(), [3, 6]))
                    for (let t of [-5, -1, 3])
                      o.rect(c + e, u + h / 2 + t, 2, 2);
                  (o.fillStyle = s.textLight), o.fill(), o.beginPath();
                }
                o.globalAlpha = 1;
              }
              if ("number" === n || ("both" === n && !r)) {
                let e = t.toString(),
                  r = s.markerFontFull;
                "both" === n && 0 !== a && (o.globalAlpha = 1 - a),
                  (o.fillStyle = s.textLight),
                  (o.font = r),
                  o.fillText(e, c + d / 2, u + h / 2 + Y(o, r)),
                  0 !== a && (o.globalAlpha = 1);
              }
            })(
              e,
              e.cell.row,
              e.cell.checked,
              e.cell.markerKind,
              e.cell.drawHandle
            ),
          onClick: (e) => {
            let { bounds: t, cell: r, posX: n, posY: i } = e,
              { width: o, height: l } = t,
              a = r.drawHandle ? 7 + (o - 7) / 2 : o / 2;
            if (10 >= Math.abs(n - a) && 10 >= Math.abs(i - l / 2))
              return { ...r, checked: !r.checked };
          },
          onPaste: () => void 0,
        };
      function rJ(e) {
        let { ctx: t } = e;
        t.textAlign = "start";
      }
      let rQ = {
          getAccessibilityString: () => "",
          kind: m.$o.NewRow,
          needsHover: !0,
          needsHoverPosition: !1,
          measure: () => 200,
          draw: (e) =>
            (function (e, t, r) {
              let {
                  ctx: n,
                  rect: i,
                  hoverAmount: o,
                  theme: l,
                  spriteManager: a,
                } = e,
                { x: s, y: c, width: u, height: d } = i;
              n.beginPath(),
                (n.globalAlpha = o),
                n.rect(s + 1, c + 1, u, d - 2),
                (n.fillStyle = l.bgHeaderHovered),
                n.fill(),
                (n.globalAlpha = 1),
                n.beginPath();
              let h = "" !== t,
                f = 0;
              if (void 0 !== r) {
                let e = d - 8;
                a.drawSprite(r, "normal", n, s + 4, c + 4, e, l, h ? 1 : o),
                  (f = e);
              } else {
                f = 24;
                let e = h ? 12 : 12 * o,
                  t = h ? 0 : (1 - o) * 6,
                  r = l.cellHorizontalPadding + 4;
                e > 0 &&
                  (n.moveTo(s + r + t, c + d / 2),
                  n.lineTo(s + r + t + e, c + d / 2),
                  n.moveTo(s + r + t + 0.5 * e, c + d / 2 - 0.5 * e),
                  n.lineTo(s + r + t + 0.5 * e, c + d / 2 + 0.5 * e),
                  (n.lineWidth = 2),
                  (n.strokeStyle = l.bgIconHeader),
                  (n.lineCap = "round"),
                  n.stroke());
              }
              (n.fillStyle = l.textMedium),
                n.fillText(
                  t,
                  f + s + l.cellHorizontalPadding + 0.5,
                  c + d / 2 + Y(n, l)
                ),
                n.beginPath();
            })(e, e.cell.hint, e.cell.icon),
          onPaste: () => void 0,
        },
        rZ = c.lazy(async () => await r.e(5719).then(r.bind(r, 25719))),
        r0 = {
          getAccessibilityString: (e) => e.data?.toString() ?? "",
          kind: m.p6.Number,
          needsHover: !1,
          needsHoverPosition: !1,
          useLabel: !0,
          drawPrep: Q,
          draw: (e) => et(e, e.cell.displayData, e.cell.contentAlign),
          measure: (e, t, r) =>
            e.measureText(t.displayData).width + 2 * r.cellHorizontalPadding,
          onDelete: (e) => ({ ...e, data: void 0 }),
          provideEditor: () => (e) => {
            let {
              isHighlighted: t,
              onChange: r,
              value: n,
              validatedSelection: i,
            } = e;
            return c.createElement(
              c.Suspense,
              { fallback: null },
              c.createElement(rZ, {
                highlight: t,
                disabled: !0 === n.readonly,
                value: n.data,
                fixedDecimals: n.fixedDecimals,
                allowNegative: n.allowNegative,
                thousandSeparator: n.thousandSeparator,
                decimalSeparator: n.decimalSeparator,
                validatedSelection: i,
                onChange: (e) =>
                  r({
                    ...n,
                    data: Number.isNaN(e.floatValue ?? 0) ? 0 : e.floatValue,
                  }),
              })
            );
          },
          onPaste: (e, t, r) => {
            let n =
              "number" == typeof r.rawValue
                ? r.rawValue
                : Number.parseFloat(
                    "string" == typeof r.rawValue ? r.rawValue : e
                  );
            if (!Number.isNaN(n) && t.data !== n)
              return {
                ...t,
                data: n,
                displayData: r.formattedString ?? t.displayData,
              };
          },
        },
        r1 = {
          getAccessibilityString: () => "",
          measure: () => 108,
          kind: m.p6.Protected,
          needsHover: !1,
          needsHoverPosition: !1,
          draw: function (e) {
            let { ctx: t, theme: r, rect: n } = e,
              { x: i, y: o, height: l } = n;
            t.beginPath();
            let a = i + r.cellHorizontalPadding + 2.5,
              s = o + l / 2,
              c = 2.5 * Math.cos((30 * y) / 180),
              u = 2.5 * Math.sin((30 * y) / 180);
            for (let e = 0; e < 12; e++)
              t.moveTo(a, s - 2.5),
                t.lineTo(a, s + 2.5),
                t.moveTo(a + c, s - u),
                t.lineTo(a - c, s + u),
                t.moveTo(a - c, s - u),
                t.lineTo(a + c, s + u),
                (a += 8);
            (t.lineWidth = 1.1),
              (t.lineCap = "square"),
              (t.strokeStyle = r.textLight),
              t.stroke();
          },
          onPaste: () => void 0,
        },
        r2 = {
          getAccessibilityString: (e) => e.data?.toString() ?? "",
          kind: m.p6.RowID,
          needsHover: !1,
          needsHoverPosition: !1,
          drawPrep: (e, t) => Q(e, t, e.theme.textLight),
          draw: (e) => et(e, e.cell.data, e.cell.contentAlign),
          measure: (e, t, r) =>
            e.measureText(t.data).width + 2 * r.cellHorizontalPadding,
          provideEditor: () => (e) => {
            let {
              isHighlighted: t,
              onChange: r,
              value: n,
              validatedSelection: i,
            } = e;
            return c.createElement(rq, {
              highlight: t,
              autoFocus: !0 !== n.readonly,
              disabled: !1 !== n.readonly,
              value: n.data,
              validatedSelection: i,
              onChange: (e) => r({ ...n, data: e.target.value }),
            });
          },
          onPaste: () => void 0,
        },
        r3 = {
          getAccessibilityString: (e) => e.data?.toString() ?? "",
          kind: m.p6.Text,
          needsHover: !1,
          needsHoverPosition: !1,
          drawPrep: Q,
          useLabel: !0,
          draw: (e) => (
            et(
              e,
              e.cell.displayData,
              e.cell.contentAlign,
              e.cell.allowWrapping,
              e.hyperWrapping
            ),
            !0
          ),
          measure: (e, t, r) => {
            let n = t.displayData.split(
              "\n",
              !0 === t.allowWrapping ? void 0 : 1
            );
            return (
              Math.max(...n.map((t) => e.measureText(t).width)) +
              2 * r.cellHorizontalPadding
            );
          },
          onDelete: (e) => ({ ...e, data: "" }),
          provideEditor: (e) => ({
            disablePadding: !0 === e.allowWrapping,
            editor: (t) => {
              let {
                isHighlighted: r,
                onChange: n,
                value: i,
                validatedSelection: o,
              } = t;
              return c.createElement(rq, {
                style:
                  !0 === e.allowWrapping ? { padding: "3px 8.5px" } : void 0,
                highlight: r,
                autoFocus: !0 !== i.readonly,
                disabled: !0 === i.readonly,
                altNewline: !0,
                value: i.data,
                validatedSelection: o,
                onChange: (e) => n({ ...i, data: e.target.value }),
              });
            },
          }),
          onPaste: (e, t, r) =>
            e === t.data
              ? void 0
              : {
                  ...t,
                  data: e,
                  displayData: r.formattedString ?? t.displayData,
                },
        },
        r7 = (0, e3.z)("div")({
          name: "UriOverlayEditorStyle",
          class: "gdg-u1rrojo",
          propsAsIs: !1,
        }),
        r6 = (e) => {
          let {
              uri: t,
              onChange: r,
              forceEditMode: n,
              readonly: i,
              validatedSelection: o,
              preview: l,
            } = e,
            [a, s] = c.useState("" === t || n),
            u = c.useCallback(() => {
              s(!0);
            }, []);
          return a
            ? c.createElement(rq, {
                validatedSelection: o,
                highlight: !0,
                autoFocus: !0,
                value: t,
                onChange: r,
              })
            : c.createElement(
                r7,
                null,
                c.createElement(
                  "a",
                  {
                    className: "gdg-link-area",
                    href: t,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  l
                ),
                !i &&
                  c.createElement(
                    "div",
                    { className: "gdg-edit-icon", onClick: u },
                    c.createElement(C, null)
                  ),
                c.createElement("textarea", {
                  className: "gdg-input",
                  autoFocus: !0,
                })
              );
        };
      function r5(e, t, r, n) {
        let i = r.cellHorizontalPadding,
          o = t.height / 2 - e.actualBoundingBoxAscent / 2,
          l = e.width,
          a = e.actualBoundingBoxAscent;
        return (
          "right" === n
            ? (i = t.width - l - r.cellHorizontalPadding)
            : "center" === n && (i = t.width / 2 - l / 2),
          { x: i, y: o, width: l, height: a }
        );
      }
      let r8 = {
          getAccessibilityString: (e) => e.data?.toString() ?? "",
          kind: m.p6.Uri,
          needsHover: !0,
          needsHoverPosition: !0,
          useLabel: !0,
          drawPrep: Q,
          draw: (e) => {
            let {
                cell: t,
                theme: r,
                overrideCursor: n,
                hoverX: i,
                hoverY: o,
                rect: l,
                ctx: a,
              } = e,
              s = t.displayData ?? t.data;
            if (
              void 0 !== n &&
              !0 === t.hoverEffect &&
              void 0 !== i &&
              void 0 !== o
            ) {
              let c = K(s, a, r.baseFontFull),
                u = r5(c, l, r, t.contentAlign),
                { x: d, y: h, width: f, height: p } = u;
              if (
                i >= d - 4 &&
                i <= d - 4 + f + 8 &&
                o >= h - 4 &&
                o <= h - 4 + p + 8
              ) {
                let i = Y(a, r.baseFontFull);
                n("pointer");
                let o = h - i;
                a.beginPath(),
                  a.moveTo(l.x + d, Math.floor(l.y + o + p + 5) + 0.5),
                  a.lineTo(l.x + d + f, Math.floor(l.y + o + p + 5) + 0.5),
                  (a.strokeStyle = r.textDark),
                  a.stroke(),
                  a.save(),
                  (a.fillStyle = e.cellFillColor),
                  et({ ...e, rect: { ...l, x: l.x - 1 } }, s, t.contentAlign),
                  et({ ...e, rect: { ...l, x: l.x - 2 } }, s, t.contentAlign),
                  et({ ...e, rect: { ...l, x: l.x + 1 } }, s, t.contentAlign),
                  et({ ...e, rect: { ...l, x: l.x + 2 } }, s, t.contentAlign),
                  a.restore();
              }
            }
            et(e, s, t.contentAlign);
          },
          onClick: (e) => {
            let { cell: t, bounds: r, posX: n, posY: i, theme: o } = e,
              l = t.displayData ?? t.data;
            if (!0 !== t.hoverEffect || void 0 === t.onClickUri) return;
            let a = (function (e, t) {
              let r = X(e, void 0, "middle", t);
              return U[r];
            })(l, o.baseFontFull);
            if (void 0 === a) return;
            let s = r5(a, r, o, t.contentAlign),
              c = eI(
                {
                  x: s.x - 4,
                  y: s.y - 4,
                  width: s.width + 8,
                  height: s.height + 8,
                },
                n,
                i
              );
            c && t.onClickUri(e);
          },
          measure: (e, t, r) =>
            e.measureText(t.displayData ?? t.data).width +
            2 * r.cellHorizontalPadding,
          onDelete: (e) => ({ ...e, data: "" }),
          provideEditor: (e) => (t) => {
            let {
              onChange: r,
              value: n,
              forceEditMode: i,
              validatedSelection: o,
            } = t;
            return c.createElement(r6, {
              forceEditMode:
                i || (!0 === e.hoverEffect && void 0 !== e.onClickUri),
              uri: n.data,
              preview: n.displayData ?? n.data,
              validatedSelection: o,
              readonly: !0 === n.readonly,
              onChange: (e) => r({ ...n, data: e.target.value }),
            });
          },
          onPaste: (e, t, r) =>
            e === t.data
              ? void 0
              : {
                  ...t,
                  data: e,
                  displayData: r.formattedString ?? t.displayData,
                },
        },
        r4 = [rG, rQ, tE, tT, tz, tF, t$, rY, r0, r1, r2, r3, r8],
        r9 =
          '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">',
        ne = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `
    ${r9}<rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/><path d="M15.75 4h-1.5a.25.25 0 0 0-.177.074L9.308 8.838a3.75 3.75 0 1 0 1.854 1.854l1.155-1.157.967.322a.5.5 0 0 0 .65-.55l-.18-1.208.363-.363.727.331a.5.5 0 0 0 .69-.59l-.254-.904.647-.647A.25.25 0 0 0 16 5.75v-1.5a.25.25 0 0 0-.25-.25zM7.5 13.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" fill="${t}"/></svg>`;
        },
        nt = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `
    ${r9}<rect x="2" y="2" width="16" height="16" rx="4" fill="${r}"/><path d="m12.223 13.314 3.052-2.826a.65.65 0 0 0 0-.984l-3.052-2.822c-.27-.25-.634-.242-.865.022-.232.263-.206.636.056.882l2.601 2.41-2.601 2.41c-.262.245-.288.619-.056.882.231.263.595.277.865.026Zm-4.444.005c.266.25.634.241.866-.027.231-.263.206-.636-.06-.882L5.983 10l2.602-2.405c.266-.25.291-.62.06-.887-.232-.263-.596-.272-.866-.022L4.723 9.51a.653.653 0 0 0 0 .983l3.056 2.827Z" fill="${t}"/></svg>`;
        },
        nr = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `${r9}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${r}"/>
    <path d="M6.52 12.78H5.51V8.74l-1.33.47v-.87l2.29-.83h.05v5.27zm5.2 0H8.15v-.69l1.7-1.83a6.38 6.38 0 0 0 .34-.4c.09-.11.16-.22.22-.32s.1-.19.12-.27a.9.9 0 0 0 0-.56.63.63 0 0 0-.15-.23.58.58 0 0 0-.22-.15.75.75 0 0 0-.29-.05c-.27 0-.48.08-.62.23a.95.95 0 0 0-.2.65H8.03c0-.24.04-.46.13-.67a1.67 1.67 0 0 1 .97-.91c.23-.1.49-.14.77-.14.26 0 .5.04.7.11.21.08.38.18.52.32.14.13.25.3.32.48a1.74 1.74 0 0 1 .03 1.13 2.05 2.05 0 0 1-.24.47 4.16 4.16 0 0 1-.35.47l-.47.5-1 1.05h2.32v.8zm1.8-3.08h.55c.28 0 .48-.06.61-.2a.76.76 0 0 0 .2-.55.8.8 0 0 0-.05-.28.56.56 0 0 0-.13-.22.6.6 0 0 0-.23-.15.93.93 0 0 0-.32-.05.92.92 0 0 0-.29.05.72.72 0 0 0-.23.12.57.57 0 0 0-.21.46H12.4a1.3 1.3 0 0 1 .5-1.04c.15-.13.33-.23.54-.3a2.48 2.48 0 0 1 1.4 0c.2.06.4.15.55.28.15.13.27.28.36.47.08.19.13.4.13.65a1.15 1.15 0 0 1-.2.65 1.36 1.36 0 0 1-.58.49c.15.05.28.12.38.2a1.14 1.14 0 0 1 .43.62c.03.13.05.26.05.4 0 .25-.05.47-.14.66a1.42 1.42 0 0 1-.4.49c-.16.13-.35.23-.58.3a2.51 2.51 0 0 1-.73.1c-.22 0-.44-.03-.65-.09a1.8 1.8 0 0 1-.57-.28 1.43 1.43 0 0 1-.4-.47 1.41 1.41 0 0 1-.15-.66h1a.66.66 0 0 0 .22.5.87.87 0 0 0 .58.2c.25 0 .45-.07.6-.2a.71.71 0 0 0 .21-.56.97.97 0 0 0-.06-.36.61.61 0 0 0-.18-.25.74.74 0 0 0-.28-.15 1.33 1.33 0 0 0-.37-.04h-.55V9.7z" fill="${t}"/>
  </svg>`;
        },
        nn = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `${r9}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${r}"/>
  <path d="M8.182 12.4h3.636l.655 1.6H14l-3.454-8H9.455L6 14h1.527l.655-1.6zM10 7.44l1.36 3.651H8.64L10 7.441z" fill="${t}"/>
</svg>`;
        },
        ni = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `${r9}
    <path
        d="M16.2222 2H3.77778C2.8 2 2 2.8 2 3.77778V16.2222C2 17.2 2.8 18 3.77778 18H16.2222C17.2 18 17.9911 17.2 17.9911 16.2222L18 3.77778C18 2.8 17.2 2 16.2222 2Z"
        fill="${r}"
    />
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.66667 6.66669C5.73368 6.66669 4.16667 8.15907 4.16667 10C4.16667 11.841 5.73368 13.3334 7.66667 13.3334H12.3333C14.2663 13.3334 15.8333 11.841 15.8333 10C15.8333 8.15907 14.2663 6.66669 12.3333 6.66669H7.66667ZM12.5 12.5C13.8807 12.5 15 11.3807 15 10C15 8.61931 13.8807 7.50002 12.5 7.50002C11.1193 7.50002 10 8.61931 10 10C10 11.3807 11.1193 12.5 12.5 12.5Z"
        fill="${t}"
    />
</svg>`;
        },
        no = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `${r9}
<path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${r}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.29 4.947a3.368 3.368 0 014.723.04 3.375 3.375 0 01.041 4.729l-.009.009-1.596 1.597a3.367 3.367 0 01-5.081-.364.71.71 0 011.136-.85 1.95 1.95 0 002.942.21l1.591-1.593a1.954 1.954 0 00-.027-2.733 1.95 1.95 0 00-2.732-.027l-.91.907a.709.709 0 11-1.001-1.007l.915-.911.007-.007z" fill="${t}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.55 8.678a3.368 3.368 0 015.082.364.71.71 0 01-1.136.85 1.95 1.95 0 00-2.942-.21l-1.591 1.593a1.954 1.954 0 00.027 2.733 1.95 1.95 0 002.73.028l.906-.906a.709.709 0 111.003 1.004l-.91.91-.008.01a3.368 3.368 0 01-4.724-.042 3.375 3.375 0 01-.041-4.728l.009-.009L6.55 8.678z" fill="${t}"/>
</svg>
  `;
        },
        nl = (e) => {
          let t = e.bgColor;
          return `${r9}
    <path stroke="${t}" stroke-width="2" d="M12 3v14"/>
    <path stroke="${t}" stroke-width="2" stroke-linecap="round" d="M10 4h4m-4 12h4"/>
    <path d="M11 14h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4v2h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4v2ZM9.5 8H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4.5v2H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h4.5v2Z" fill="${t}"/>
  </svg>
`;
        },
        na = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `${r9}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${r}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.138a.5.5 0 00.748.434l5.492-3.138a.5.5 0 000-.868L7.748 6.427A.5.5 0 007 6.862v6.276z" fill="${t}"/>
</svg>`;
        },
        ns = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `
    ${r9}
    <path d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 9.17A4.17 4.17 0 0 1 5.83 10 4.17 4.17 0 0 1 10 5.83 4.17 4.17 0 0 1 14.17 10 4.17 4.17 0 0 1 10 14.17z" fill="${t}"/>
    <path d="M8.33 8.21a.83.83 0 1 0-.03 1.67.83.83 0 0 0 .03-1.67zm3.34 0a.83.83 0 1 0-.04 1.67.83.83 0 0 0 .04-1.67z" fill="${t}"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.53 13.9a2.82 2.82 0 0 1-5.06 0l.77-.38a1.97 1.97 0 0 0 3.52 0l.77.39z" fill="${t}"/>
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${r}"/>
    <path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 11a5 5 0 1 1 .01-10.01A5 5 0 0 1 10 15z" fill="${t}"/>
    <path d="M8 7.86a1 1 0 1 0-.04 2 1 1 0 0 0 .04-2zm4 0a1 1 0 1 0-.04 2 1 1 0 0 0 .04-2z" fill="${t}"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.53 11.9a2.82 2.82 0 0 1-5.06 0l.77-.38a1.97 1.97 0 0 0 3.52 0l.77.39z" fill="${t}"/>
  </svg>`;
        },
        nc = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `${r9}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${r}"/>
  <path opacity=".5" fill-rule="evenodd" clip-rule="evenodd" d="M12.499 10.801a.5.5 0 01.835 0l2.698 4.098a.5.5 0 01-.418.775H10.22a.5.5 0 01-.417-.775l2.697-4.098z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07 8.934a.5.5 0 01.824 0l4.08 5.958a.5.5 0 01-.412.782h-8.16a.5.5 0 01-.413-.782l4.08-5.958zM13.75 8.333a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z" fill="${t}"/>
</svg>`;
        },
        nu = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `
    ${r9}
    <path fill="${t}" d="M3 3h14v14H3z"/>
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2zm-7.24 9.78h1.23c.15 0 .27.06.36.18l.98 1.28a.43.43 0 0 1-.05.58l-1.2 1.21a.45.45 0 0 1-.6.04A6.72 6.72 0 0 1 7.33 10c0-.61.1-1.2.25-1.78a6.68 6.68 0 0 1 2.12-3.3.44.44 0 0 1 .6.04l1.2 1.2c.16.17.18.42.05.59l-.98 1.29a.43.43 0 0 1-.36.17H8.98A5.38 5.38 0 0 0 8.67 10c0 .62.11 1.23.3 1.79z" fill="${r}"/>
  </svg>`;
        },
        nd = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `
    ${r9}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${r}"/>
    <path d="m13.49 13.15-2.32-3.27h1.4V7h1.86v2.88h1.4l-2.34 3.27zM11 13H9v-3l-1.5 1.92L6 10v3H4V7h2l1.5 2L9 7h2v6z" fill="${t}"/>
  </svg>`;
        },
        nh = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `${r9}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${r}"/>
  <path d="M14.8 4.182h-.6V3H13v1.182H7V3H5.8v1.182h-.6c-.66 0-1.2.532-1.2 1.182v9.454C4 15.468 4.54 16 5.2 16h9.6c.66 0 1.2-.532 1.2-1.182V5.364c0-.65-.54-1.182-1.2-1.182zm0 10.636H5.2V7.136h9.6v7.682z" fill="${t}"/>
</svg>`;
        },
        nf = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `
    ${r9}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${r}"/>
    <path d="M10 4a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zm0 10.8A4.8 4.8 0 0 1 5.2 10a4.8 4.8 0 1 1 4.8 4.8z" fill="${t}"/>
    <path d="M10 7H9v3.93L12.5 13l.5-.8-3-1.76V7z" fill="${t}"/>
  </svg>`;
        },
        np = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `${r9}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.643a1.357 1.357 0 100 2.714 1.357 1.357 0 000-2.714zM7.357 10a2.643 2.643 0 115.286 0 2.643 2.643 0 01-5.286 0z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.589 4.898A5.643 5.643 0 0115.643 10v.5a2.143 2.143 0 01-4.286 0V8a.643.643 0 011.286 0v2.5a.857.857 0 001.714 0V10a4.357 4.357 0 10-1.708 3.46.643.643 0 01.782 1.02 5.643 5.643 0 11-5.842-9.582z" fill="${t}"/>
</svg>`;
        },
        ng = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `
    ${r9}
    <rect x="2" y="8" width="10" height="8" rx="2" fill="${r}"/>
    <rect x="8" y="4" width="10" height="8" rx="2" fill="${r}"/>
    <path d="M10.68 7.73V6l2.97 3.02-2.97 3.02v-1.77c-2.13 0-3.62.7-4.68 2.2.43-2.15 1.7-4.31 4.68-4.74z" fill="${t}"/>
  </svg>`;
        },
        nm = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `${r9}
  <path fill="${t}" d="M4 3h12v14H4z"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 2A1.6 1.6 0 002 3.6v12.8A1.6 1.6 0 003.6 18h12.8a1.6 1.6 0 001.6-1.6V3.6A1.6 1.6 0 0016.4 2H3.6zm11.3 10.8a.7.7 0 01.7.7v1.4a.7.7 0 01-.7.7h-1.4a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.6-.693.117.117 0 00.1-.115V10.35a.117.117 0 00-.117-.116h-2.8a.117.117 0 00-.117.116v2.333c0 .064.053.117.117.117h.117a.7.7 0 01.7.7v1.4a.7.7 0 01-.7.7H9.3a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.7-.7h.117a.117.117 0 00.117-.117V10.35a.117.117 0 00-.117-.117h-2.8a.117.117 0 00-.117.117v2.342c0 .058.042.106.1.115a.7.7 0 01.6.693v1.4a.7.7 0 01-.7.7H5.1a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.7-.7h.35a.116.116 0 00.116-.117v-2.45c0-.515.418-.933.934-.933h2.917a.117.117 0 00.117-.117V6.85a.117.117 0 00-.117-.116h-2.45a.7.7 0 01-.7-.7V5.1a.7.7 0 01.7-.7h6.067a.7.7 0 01.7.7v.934a.7.7 0 01-.7.7h-2.45a.117.117 0 00-.118.116v2.333c0 .064.053.117.117.117H13.5c.516 0 .934.418.934.934v2.45c0 .063.052.116.116.116h.35z" fill="${r}"/>
</svg>`;
        },
        nv = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `
    ${r9}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/>
    <path d="M9.98 13.33c.45 0 .74-.3.73-.75l-.01-.1-.16-1.67 1.45 1.05a.81.81 0 0 0 .5.18c.37 0 .72-.32.72-.76 0-.3-.17-.54-.49-.68l-1.63-.77 1.63-.77c.32-.14.49-.37.49-.67 0-.45-.34-.76-.71-.76a.81.81 0 0 0-.5.18l-1.47 1.03.16-1.74.01-.08c.01-.46-.27-.76-.72-.76-.46 0-.76.32-.75.76l.01.08.16 1.74-1.47-1.03a.77.77 0 0 0-.5-.18.74.74 0 0 0-.72.76c0 .3.17.53.49.67l1.63.77-1.62.77c-.32.14-.5.37-.5.68 0 .44.35.75.72.75a.78.78 0 0 0 .5-.17L9.4 10.8l-.16 1.68v.09c-.02.44.28.75.74.75z" fill="${t}"/>
  </svg>`;
        },
        nw = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `
    ${r9}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/>
    <path d="M8 5.83H5.83a.83.83 0 0 0 0 1.67h1.69A4.55 4.55 0 0 1 8 5.83zm-.33 3.34H5.83a.83.83 0 0 0 0 1.66h2.72a4.57 4.57 0 0 1-.88-1.66zM5.83 12.5a.83.83 0 0 0 0 1.67h7.5a.83.83 0 1 0 0-1.67h-7.5zm8.8-2.9a3.02 3.02 0 0 0 .46-1.6c0-1.66-1.32-3-2.94-3C10.52 5 9.2 6.34 9.2 8s1.31 3 2.93 3c.58 0 1.11-.17 1.56-.47l2.04 2.08.93-.94-2.04-2.08zm-2.48.07c-.9 0-1.63-.75-1.63-1.67s.73-1.67 1.63-1.67c.9 0 1.63.75 1.63 1.67s-.73 1.67-1.63 1.67z" fill="${t}"/>
  </svg>`;
        },
        ny = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `${r9}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/>
  <path d="M7.676 4.726V3l2.976 3.021-2.976 3.022v-1.77c-2.125 0-3.613.69-4.676 2.201.425-2.158 1.7-4.316 4.676-4.748zM10.182 14.4h3.636l.655 1.6H16l-3.454-8h-1.091L8 16h1.527l.655-1.6zM12 9.44l1.36 3.65h-2.72L12 9.44z" fill="${t}"/>
</svg>`;
        },
        nb = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `${r9}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.167 5.417a.833.833 0 100 1.666h4.166a.833.833 0 100-1.666H4.167z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.083 4.167a.833.833 0 10-1.666 0v4.166a.833.833 0 101.666 0V4.167zM11.667 5.417a.833.833 0 100 1.666h4.166a.833.833 0 100-1.666h-4.166zM5.367 11.688a.833.833 0 00-1.179 1.179l2.947 2.946a.833.833 0 001.178-1.178l-2.946-2.947z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.313 12.867a.833.833 0 10-1.178-1.179l-2.947 2.947a.833.833 0 101.179 1.178l2.946-2.946z" fill="${t}"/>
  <path d="M10.833 12.5c0-.46.373-.833.834-.833h4.166a.833.833 0 110 1.666h-4.166a.833.833 0 01-.834-.833zM10.833 15c0-.46.373-.833.834-.833h4.166a.833.833 0 110 1.666h-4.166a.833.833 0 01-.834-.833z" fill="${t}"/>
</svg>`;
        },
        nx = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `
    ${r9}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${r}"/>
    <path d="M10 8.84a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32zm3.02 3.61a3.92 3.92 0 0 0 .78-3.28.49.49 0 1 0-.95.2c.19.87-.02 1.78-.58 2.47a2.92 2.92 0 1 1-4.13-4.08 2.94 2.94 0 0 1 2.43-.62.49.49 0 1 0 .17-.96 3.89 3.89 0 1 0 2.28 6.27zM10 4.17a5.84 5.84 0 0 0-5.44 7.93.49.49 0 1 0 .9-.35 4.86 4.86 0 1 1 2.5 2.67.49.49 0 1 0-.4.88c.76.35 1.6.54 2.44.53a5.83 5.83 0 0 0 0-11.66zm3.02 3.5a.7.7 0 1 0-1.4 0 .7.7 0 0 0 1.4 0zm-6.97 5.35a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4z" fill="${t}"/>
  </svg>`;
        },
        nk = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `${r9}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/>
  <path d="M12.4 13.565c1.865-.545 3.645-2.083 3.645-4.396 0-1.514-.787-2.604-2.071-2.604C12.69 6.565 12 7.63 12 8.939c1.114.072 1.865.726 1.865 1.683 0 .933-.8 1.647-1.84 2.023l.375.92zM4 5h6v2H4zM4 9h5v2H4zM4 13h4v2H4z" fill="${t}"/>
</svg>`;
        },
        nS = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `
    ${r9}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/>
    <path d="M12.4 13.56c1.86-.54 3.65-2.08 3.65-4.4 0-1.5-.8-2.6-2.08-2.6S12 7.64 12 8.95c1.11.07 1.86.73 1.86 1.68 0 .94-.8 1.65-1.83 2.03l.37.91zM4 5h6v2H4zm0 4h5v2H4zm0 4h4v2H4z" fill="${t}"/>
  </svg>`;
        },
        nC = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `${r9}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${r}"/>
  <path d="M10 7a1 1 0 100-2v2zm0 6a1 1 0 100 2v-2zm0-8H7v2h3V5zm-3 6h5V9H7v2zm5 2h-2v2h2v-2zm1-1a1 1 0 01-1 1v2a3 3 0 003-3h-2zm-1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zM4 8a3 3 0 003 3V9a1 1 0 01-1-1H4zm3-3a3 3 0 00-3 3h2a1 1 0 011-1V5z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.856 12.014a.5.5 0 00-.712.702L5.409 14l-1.265 1.284a.5.5 0 00.712.702l1.255-1.274 1.255 1.274a.5.5 0 00.712-.702L6.813 14l1.265-1.284a.5.5 0 00-.712-.702L6.11 13.288l-1.255-1.274zM12.856 4.014a.5.5 0 00-.712.702L13.409 6l-1.265 1.284a.5.5 0 10.712.702l1.255-1.274 1.255 1.274a.5.5 0 10.712-.702L14.813 6l1.265-1.284a.5.5 0 00-.712-.702L14.11 5.288l-1.255-1.274z" fill="${t}"/>
</svg>`;
        },
        n_ = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `${r9}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 7.25a.75.75 0 000-1.5h-6.5a.75.75 0 100 1.5h6.5zM15 10a.75.75 0 01-.75.75h-6.5a.75.75 0 010-1.5h6.5A.75.75 0 0115 10zm-.75 4.25a.75.75 0 000-1.5h-6.5a.75.75 0 000 1.5h6.5zm-8.987-7a.75.75 0 100-1.5.75.75 0 000 1.5zm.75 2.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 4.25a.75.75 0 100-1.5.75.75 0 000 1.5z" fill="${t}"/>
</svg>`;
        },
        nR = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 15v1h14v-2.5c0-.87-.44-1.55-.98-2.04a6.19 6.19 0 0 0-1.9-1.14 12.1 12.1 0 0 0-2.48-.67A4 4 0 1 0 5 6a4 4 0 0 0 2.36 3.65c-.82.13-1.7.36-2.48.67-.69.28-1.37.65-1.9 1.13A2.8 2.8 0 0 0 2 13.5V15z" fill="${r}" stroke="${t}" stroke-width="2"/>
  </svg>`;
        },
        nE = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.43 6.04v-.18a3.86 3.86 0 0 0-7.72 0v.18A2.15 2.15 0 0 0 3 8.14v5.72C3 15.04 3.96 16 5.14 16H12c1.18 0 2.14-.96 2.14-2.14V8.14c0-1.03-.73-1.9-1.71-2.1zM7.86 6v-.14a.71.71 0 1 1 1.43 0V6H7.86z" fill="${r}" stroke="${t}" stroke-width="2"/>
  </svg>
`;
        },
        nM = {
          headerRowID: ne,
          headerNumber: nr,
          headerCode: nt,
          headerString: nn,
          headerBoolean: ni,
          headerAudioUri: no,
          headerVideoUri: na,
          headerEmoji: ns,
          headerImage: nc,
          headerUri: no,
          headerPhone: nu,
          headerMarkdown: nd,
          headerDate: nh,
          headerTime: nf,
          headerEmail: np,
          headerReference: ng,
          headerIfThenElse: nm,
          headerSingleValue: nv,
          headerLookup: nw,
          headerTextTemplate: ny,
          headerMath: nb,
          headerRollup: nx,
          headerJoinStrings: nk,
          headerSplitString: nS,
          headerGeoDistance: nC,
          headerArray: n_,
          rowOwnerOverlay: nR,
          protectedColumnOverlay: nE,
          renameIcon: nl,
        };
      var nI = r(23763);
      let nT = [];
      class nO extends ea {
        imageLoaded = () => void 0;
        loadedLocations = [];
        cache = {};
        setCallback(e) {
          this.imageLoaded = e;
        }
        sendLoaded = nI(() => {
          this.imageLoaded(new ec(this.loadedLocations)),
            (this.loadedLocations = []);
        }, 20);
        clearOutOfWindow = () => {
          let e = Object.keys(this.cache);
          for (let t of e) {
            let e = this.cache[t],
              r = !1;
            for (let t = 0; t < e.cells.length; t++) {
              let n = e.cells[t];
              if (this.isInWindow(n)) {
                r = !0;
                break;
              }
            }
            r
              ? (e.cells = e.cells.filter(this.isInWindow))
              : (e.cancel(), delete this.cache[t]);
          }
        };
        loadImage(e, t, r, n) {
          let i = !1,
            o = nT.pop() ?? new Image(),
            l = !1,
            a = {
              img: void 0,
              cells: [ei(t, r)],
              url: e,
              cancel: () => {
                l ||
                  ((l = !0),
                  nT.length < 12 ? nT.unshift(o) : i || (o.src = ""));
              },
            },
            s = new Promise((e) => o.addEventListener("load", () => e(null)));
          requestAnimationFrame(async () => {
            try {
              (o.src = e), await s, await o.decode();
              let t = this.cache[n];
              if (void 0 !== t && !l) {
                for (let e of ((t.img = o), t.cells))
                  this.loadedLocations.push(el(e));
                (i = !0), this.sendLoaded();
              }
            } catch {
              a.cancel();
            }
          }),
            (this.cache[n] = a);
        }
        loadOrGetImage(e, t, r) {
          let n = this.cache[e];
          if (void 0 !== n) {
            let e = ei(t, r);
            return n.cells.includes(e) || n.cells.push(e), n.img;
          }
          this.loadImage(e, t, r, e);
        }
      }
      let nP = (e, t) => {
          let r = c.useMemo(
              () => ({ ...nM, ...e.headerIcons }),
              [e.headerIcons]
            ),
            n = c.useMemo(
              () => e.imageWindowLoader ?? new nO(),
              [e.imageWindowLoader]
            );
          return c.createElement(tR, {
            ...e,
            renderers: r4,
            headerIcons: r,
            ref: t,
            imageWindowLoader: n,
          });
        },
        nz = c.forwardRef(nP);
    },
    20956: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(70079);
      class i extends n.PureComponent {
        wrapperRef = n.createRef();
        componentDidMount() {
          document.addEventListener("touchend", this.clickOutside, !0),
            document.addEventListener("mousedown", this.clickOutside, !0),
            document.addEventListener("contextmenu", this.clickOutside, !0);
        }
        componentWillUnmount() {
          document.removeEventListener("touchend", this.clickOutside, !0),
            document.removeEventListener("mousedown", this.clickOutside, !0),
            document.removeEventListener("contextmenu", this.clickOutside, !0);
        }
        clickOutside = (e) => {
          if (
            (!this.props.isOutsideClick || this.props.isOutsideClick(e)) &&
            null !== this.wrapperRef.current &&
            !this.wrapperRef.current.contains(e.target)
          ) {
            let t = e.target;
            for (; null !== t; ) {
              if (t.classList.contains("click-outside-ignore")) return;
              t = t.parentElement;
            }
            this.props.onClickOutside();
          }
        };
        render() {
          let { onClickOutside: e, isOutsideClick: t, ...r } = this.props;
          return n.createElement(
            "div",
            { ...r, ref: this.wrapperRef },
            this.props.children
          );
        }
      }
    },
    15777: function (e, t, r) {
      "use strict";
      let n;
      r.d(t, {
        $o: function () {
          return d;
        },
        DP: function () {
          return _;
        },
        EV: function () {
          return E;
        },
        Gf: function () {
          return m;
        },
        Qo: function () {
          return C;
        },
        Sq: function () {
          return b;
        },
        T9: function () {
          return k;
        },
        YK: function () {
          return w;
        },
        iJ: function () {
          return y;
        },
        kf: function () {
          return R;
        },
        p6: function () {
          return s;
        },
        pN: function () {
          return u;
        },
        qF: function () {
          return p;
        },
        qT: function () {
          return v;
        },
        rL: function () {
          return x;
        },
        rs: function () {
          return S;
        },
        sd: function () {
          return g;
        },
      });
      var i,
        o,
        l,
        a,
        s,
        c,
        u,
        d,
        h = r(29879),
        f = r(13284);
      let p = null,
        g = void 0;
      ((i = s || (s = {})).Uri = "uri"),
        (i.Text = "text"),
        (i.Image = "image"),
        (i.RowID = "row-id"),
        (i.Number = "number"),
        (i.Bubble = "bubble"),
        (i.Boolean = "boolean"),
        (i.Loading = "loading"),
        (i.Markdown = "markdown"),
        (i.Drilldown = "drilldown"),
        (i.Protected = "protected"),
        (i.Custom = "custom"),
        ((o = c || (c = {})).HeaderRowID = "headerRowID"),
        (o.HeaderCode = "headerCode"),
        (o.HeaderNumber = "headerNumber"),
        (o.HeaderString = "headerString"),
        (o.HeaderBoolean = "headerBoolean"),
        (o.HeaderAudioUri = "headerAudioUri"),
        (o.HeaderVideoUri = "headerVideoUri"),
        (o.HeaderEmoji = "headerEmoji"),
        (o.HeaderImage = "headerImage"),
        (o.HeaderUri = "headerUri"),
        (o.HeaderPhone = "headerPhone"),
        (o.HeaderMarkdown = "headerMarkdown"),
        (o.HeaderDate = "headerDate"),
        (o.HeaderTime = "headerTime"),
        (o.HeaderEmail = "headerEmail"),
        (o.HeaderReference = "headerReference"),
        (o.HeaderIfThenElse = "headerIfThenElse"),
        (o.HeaderSingleValue = "headerSingleValue"),
        (o.HeaderLookup = "headerLookup"),
        (o.HeaderTextTemplate = "headerTextTemplate"),
        (o.HeaderMath = "headerMath"),
        (o.HeaderRollup = "headerRollup"),
        (o.HeaderJoinStrings = "headerJoinStrings"),
        (o.HeaderSplitString = "headerSplitString"),
        (o.HeaderGeoDistance = "headerGeoDistance"),
        (o.HeaderArray = "headerArray"),
        (o.RowOwnerOverlay = "rowOwnerOverlay"),
        (o.ProtectedColumnOverlay = "protectedColumnOverlay"),
        ((l = u || (u = {})).Triangle = "triangle"),
        (l.Dots = "dots");
      let m = "___gdg_header_cell_",
        v = m + "checked",
        w = m + "unchecked",
        y = m + "indeterminate";
      function b(e) {
        return "width" in e && "number" == typeof e.width;
      }
      async function x(e) {
        return "object" == typeof e ? e : await e();
      }
      function k(e) {
        return (
          e.kind !== s.Loading &&
          e.kind !== s.Bubble &&
          e.kind !== s.RowID &&
          e.kind !== s.Protected &&
          e.kind !== s.Drilldown &&
          ((0, h.NG)(e), !0)
        );
      }
      function S(e) {
        return e.kind === d.Marker || e.kind === d.NewRow;
      }
      function C(e) {
        return (
          !!k(e) &&
          e.kind !== s.Image &&
          (e.kind === s.Text ||
          e.kind === s.Number ||
          e.kind === s.Markdown ||
          e.kind === s.Uri ||
          e.kind === s.Custom ||
          e.kind === s.Boolean
            ? !0 !== e.readonly
            : void (0, h.vE)(e, "A cell was passed with an invalid kind"))
        );
      }
      function _(e) {
        return f(e, "editor");
      }
      function R(e) {
        return !e.readonly;
      }
      ((a = d || (d = {})).NewRow = "new-row"), (a.Marker = "marker");
      class E {
        items;
        constructor(e) {
          this.items = e;
        }
        static empty = () => n ?? (n = new E([]));
        static fromSingleSelection = (e) => E.empty().add(e);
        offset(e) {
          if (0 === e) return this;
          let t = this.items.map((t) => [t[0] + e, t[1] + e]);
          return new E(t);
        }
        add(e) {
          let t = (function (e) {
            if (0 === e.length) return [];
            let t = [...e],
              r = [];
            for (let e of (t.sort(function (e, t) {
              return e[0] - t[0];
            }),
            r.push([...t[0]]),
            t.slice(1))) {
              let t = r[r.length - 1];
              t[1] < e[0] ? r.push([...e]) : t[1] < e[1] && (t[1] = e[1]);
            }
            return r;
          })([...this.items, "number" == typeof e ? [e, e + 1] : e]);
          return new E(t);
        }
        remove(e) {
          let t = [...this.items],
            r = "number" == typeof e ? e : e[0],
            n = "number" == typeof e ? e + 1 : e[1];
          for (let [e, i] of t.entries()) {
            let [o, l] = i;
            if (o <= n && r <= l) {
              let i = [];
              o < r && i.push([o, r]),
                n < l && i.push([n, l]),
                t.splice(e, 1, ...i);
            }
          }
          return new E(t);
        }
        first() {
          if (0 !== this.items.length) return this.items[0][0];
        }
        last() {
          if (0 !== this.items.length) return this.items.slice(-1)[0][1] - 1;
        }
        hasIndex(e) {
          for (let t = 0; t < this.items.length; t++) {
            let [r, n] = this.items[t];
            if (e >= r && e < n) return !0;
          }
          return !1;
        }
        hasAll(e) {
          for (let t = e[0]; t < e[1]; t++) if (!this.hasIndex(t)) return !1;
          return !0;
        }
        some(e) {
          for (let t of this) if (e(t)) return !0;
          return !1;
        }
        equals(e) {
          if (e === this) return !0;
          if (e.items.length !== this.items.length) return !1;
          for (let t = 0; t < this.items.length; t++) {
            let r = e.items[t],
              n = this.items[t];
            if (r[0] !== n[0] || r[1] !== n[1]) return !1;
          }
          return !0;
        }
        toArray() {
          let e = [];
          for (let [t, r] of this.items) for (let n = t; n < r; n++) e.push(n);
          return e;
        }
        get length() {
          let e = 0;
          for (let [t, r] of this.items) e += r - t;
          return e;
        }
        *[Symbol.iterator]() {
          for (let [e, t] of this.items) for (let r = e; r < t; r++) yield r;
        }
      }
    },
    78228: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return h;
        },
      });
      var n = r(60934),
        i =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        o = (0, n.Z)(function (e) {
          return (
            i.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              91 > e.charCodeAt(2))
          );
        }),
        l = r(70079),
        a = function () {
          let e = Array.prototype.slice.call(arguments).filter(Boolean),
            t = {},
            r = [];
          e.forEach((e) => {
            let n = e ? e.split(" ") : [];
            n.forEach((e) => {
              if (e.startsWith("atm_")) {
                let [, r] = e.split("_");
                t[r] = e;
              } else r.push(e);
            });
          });
          let n = [];
          for (let e in t)
            Object.prototype.hasOwnProperty.call(t, e) && n.push(t[e]);
          return n.push(...r), n.join(" ");
        },
        s = (e) => e.toUpperCase() === e,
        c = (e) => (t) => -1 === e.indexOf(t),
        u = (e, t) => {
          let r = {};
          return (
            Object.keys(e)
              .filter(c(t))
              .forEach((t) => {
                r[t] = e[t];
              }),
            r
          );
        },
        d = (e, t) => {},
        h = function (e) {
          return (t) => {
            let r = (r, n) => {
                let { as: i = e, class: c = "" } = r,
                  h =
                    void 0 === t.propsAsIs
                      ? !(
                          "string" == typeof i &&
                          -1 === i.indexOf("-") &&
                          !s(i[0])
                        )
                      : t.propsAsIs,
                  f = (function (e, t, r) {
                    let n = u(t, r);
                    if (!e) {
                      let e = "function" == typeof o ? { default: o } : o;
                      Object.keys(n).forEach((t) => {
                        e.default(t) || delete n[t];
                      });
                    }
                    return n;
                  })(h, r, ["as", "class"]);
                (f.ref = n),
                  (f.className = t.atomic
                    ? a(t.class, f.className || c)
                    : a(f.className || c, t.class));
                let { vars: p } = t;
                if (p) {
                  let e = {};
                  for (let n in p) {
                    let i = p[n],
                      o = i[0],
                      l = i[1] || "",
                      a = "function" == typeof o ? o(r) : o;
                    d(a, t.name), (e[`--${n}`] = `${a}${l}`);
                  }
                  let n = f.style || {},
                    i = Object.keys(n);
                  i.length > 0 &&
                    i.forEach((t) => {
                      e[t] = n[t];
                    }),
                    (f.style = e);
                }
                return e.__linaria && e !== i
                  ? ((f.as = i), l.createElement(e, f))
                  : l.createElement(i, f);
              },
              n = l.forwardRef
                ? l.forwardRef(r)
                : (e) => {
                    let t = u(e, ["innerRef"]);
                    return r(t, e.innerRef);
                  };
            return (
              (n.displayName = t.name),
              (n.__linaria = { className: t.class || "", extends: e }),
              n
            );
          };
        };
    },
    38526: function (e, t, r) {
      "use strict";
      r.d(t, {
        Q: function () {
          return m;
        },
      });
      var n = r(14984).Buffer;
      class i extends Error {
        constructor(e, t, r, ...o) {
          for (let l of (Array.isArray(t) && (t = t.join(" ").trim()),
          super(t),
          void 0 !== Error.captureStackTrace &&
            Error.captureStackTrace(this, i),
          (this.code = e),
          o))
            for (let e in l) {
              let t = l[e];
              this[e] = n.isBuffer(t)
                ? t.toString(r.encoding)
                : null == t
                  ? t
                  : JSON.parse(JSON.stringify(t));
            }
        }
      }
      let o = function (e) {
        let t = [];
        for (let r = 0, n = e.length; r < n; r++) {
          let n = e[r];
          if (null == n || !1 === n) t[r] = { disabled: !0 };
          else if ("string" == typeof n) t[r] = { name: n };
          else {
            if ("object" != typeof n || null === n || Array.isArray(n))
              throw new i("CSV_INVALID_COLUMN_DEFINITION", [
                "Invalid column definition:",
                "expect a string or a literal object,",
                `got ${JSON.stringify(n)} at position ${r}`,
              ]);
            if ("string" != typeof n.name)
              throw new i("CSV_OPTION_COLUMNS_MISSING_NAME", [
                "Option columns missing name:",
                `property "name" is required at position ${r}`,
                "when column is an object literal",
              ]);
            t[r] = n;
          }
        }
        return t;
      };
      var l = r(14984).Buffer,
        a = class {
          constructor(e = 100) {
            (this.size = e), (this.length = 0), (this.buf = l.allocUnsafe(e));
          }
          prepend(e) {
            if (l.isBuffer(e)) {
              let t = this.length + e.length;
              if (t >= this.size && (this.resize(), t >= this.size))
                throw Error("INVALID_BUFFER_STATE");
              let r = this.buf;
              (this.buf = l.allocUnsafe(this.size)),
                e.copy(this.buf, 0),
                r.copy(this.buf, e.length),
                (this.length += e.length);
            } else {
              let t = this.length++;
              t === this.size && this.resize();
              let r = this.clone();
              (this.buf[0] = e), r.copy(this.buf, 1, 0, t);
            }
          }
          append(e) {
            let t = this.length++;
            t === this.size && this.resize(), (this.buf[t] = e);
          }
          clone() {
            return l.from(this.buf.slice(0, this.length));
          }
          resize() {
            let e = this.length;
            this.size = 2 * this.size;
            let t = l.allocUnsafe(this.size);
            this.buf.copy(t, 0, 0, e), (this.buf = t);
          }
          toString(e) {
            return e
              ? this.buf.slice(0, this.length).toString(e)
              : Uint8Array.prototype.slice.call(this.buf.slice(0, this.length));
          }
          toJSON() {
            return this.toString("utf8");
          }
          reset() {
            this.length = 0;
          }
        },
        s = r(14984).Buffer,
        c = r(14984).Buffer;
      let u = function (e) {
        let t = {};
        for (let r in e)
          t[
            r.replace(/([A-Z])/g, function (e, t) {
              return "_" + t.toLowerCase();
            })
          ] = e[r];
        if (void 0 === t.encoding || !0 === t.encoding) t.encoding = "utf8";
        else if (null === t.encoding || !1 === t.encoding) t.encoding = null;
        else if ("string" != typeof t.encoding && null !== t.encoding)
          throw new i(
            "CSV_INVALID_OPTION_ENCODING",
            [
              "Invalid option encoding:",
              "encoding must be a string or null to return a buffer,",
              `got ${JSON.stringify(t.encoding)}`,
            ],
            t
          );
        if (void 0 === t.bom || null === t.bom || !1 === t.bom) t.bom = !1;
        else if (!0 !== t.bom)
          throw new i(
            "CSV_INVALID_OPTION_BOM",
            [
              "Invalid option bom:",
              "bom must be true,",
              `got ${JSON.stringify(t.bom)}`,
            ],
            t
          );
        if (
          ((t.cast_function = null),
          void 0 === t.cast ||
            null === t.cast ||
            !1 === t.cast ||
            "" === t.cast)
        )
          t.cast = void 0;
        else if ("function" == typeof t.cast)
          (t.cast_function = t.cast), (t.cast = !0);
        else if (!0 !== t.cast)
          throw new i(
            "CSV_INVALID_OPTION_CAST",
            [
              "Invalid option cast:",
              "cast must be true or a function,",
              `got ${JSON.stringify(t.cast)}`,
            ],
            t
          );
        if (
          void 0 === t.cast_date ||
          null === t.cast_date ||
          !1 === t.cast_date ||
          "" === t.cast_date
        )
          t.cast_date = !1;
        else if (!0 === t.cast_date)
          t.cast_date = function (e) {
            let t = Date.parse(e);
            return isNaN(t) ? e : new Date(t);
          };
        else if ("function" != typeof t.cast_date)
          throw new i(
            "CSV_INVALID_OPTION_CAST_DATE",
            [
              "Invalid option cast_date:",
              "cast_date must be true or a function,",
              `got ${JSON.stringify(t.cast_date)}`,
            ],
            t
          );
        if (((t.cast_first_line_to_header = null), !0 === t.columns))
          t.cast_first_line_to_header = void 0;
        else if ("function" == typeof t.columns)
          (t.cast_first_line_to_header = t.columns), (t.columns = !0);
        else if (Array.isArray(t.columns)) t.columns = o(t.columns);
        else if (void 0 === t.columns || null === t.columns || !1 === t.columns)
          t.columns = !1;
        else
          throw new i(
            "CSV_INVALID_OPTION_COLUMNS",
            [
              "Invalid option columns:",
              "expect an array, a function or true,",
              `got ${JSON.stringify(t.columns)}`,
            ],
            t
          );
        if (
          void 0 === t.group_columns_by_name ||
          null === t.group_columns_by_name ||
          !1 === t.group_columns_by_name
        )
          t.group_columns_by_name = !1;
        else if (!0 !== t.group_columns_by_name)
          throw new i(
            "CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME",
            [
              "Invalid option group_columns_by_name:",
              "expect an boolean,",
              `got ${JSON.stringify(t.group_columns_by_name)}`,
            ],
            t
          );
        else if (!1 === t.columns)
          throw new i(
            "CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME",
            [
              "Invalid option group_columns_by_name:",
              "the `columns` mode must be activated.",
            ],
            t
          );
        if (
          void 0 === t.comment ||
          null === t.comment ||
          !1 === t.comment ||
          "" === t.comment
        )
          t.comment = null;
        else if (
          ("string" == typeof t.comment &&
            (t.comment = c.from(t.comment, t.encoding)),
          !c.isBuffer(t.comment))
        )
          throw new i(
            "CSV_INVALID_OPTION_COMMENT",
            [
              "Invalid option comment:",
              "comment must be a buffer or a string,",
              `got ${JSON.stringify(t.comment)}`,
            ],
            t
          );
        if (
          void 0 === t.comment_no_infix ||
          null === t.comment_no_infix ||
          !1 === t.comment_no_infix
        )
          t.comment_no_infix = !1;
        else if (!0 !== t.comment_no_infix)
          throw new i(
            "CSV_INVALID_OPTION_COMMENT",
            [
              "Invalid option comment_no_infix:",
              "value must be a boolean,",
              `got ${JSON.stringify(t.comment_no_infix)}`,
            ],
            t
          );
        let r = JSON.stringify(t.delimiter);
        if (
          (Array.isArray(t.delimiter) || (t.delimiter = [t.delimiter]),
          0 === t.delimiter.length)
        )
          throw new i(
            "CSV_INVALID_OPTION_DELIMITER",
            [
              "Invalid option delimiter:",
              "delimiter must be a non empty string or buffer or array of string|buffer,",
              `got ${r}`,
            ],
            t
          );
        if (
          ((t.delimiter = t.delimiter.map(function (e) {
            if (null == e || !1 === e) return c.from(",", t.encoding);
            if (
              ("string" == typeof e && (e = c.from(e, t.encoding)),
              !c.isBuffer(e) || 0 === e.length)
            )
              throw new i(
                "CSV_INVALID_OPTION_DELIMITER",
                [
                  "Invalid option delimiter:",
                  "delimiter must be a non empty string or buffer or array of string|buffer,",
                  `got ${r}`,
                ],
                t
              );
            return e;
          })),
          void 0 === t.escape || !0 === t.escape
            ? (t.escape = c.from('"', t.encoding))
            : "string" == typeof t.escape
              ? (t.escape = c.from(t.escape, t.encoding))
              : (null === t.escape || !1 === t.escape) && (t.escape = null),
          null !== t.escape && !c.isBuffer(t.escape))
        )
          throw Error(
            `Invalid Option: escape must be a buffer, a string or a boolean, got ${JSON.stringify(
              t.escape
            )}`
          );
        if (void 0 === t.from || null === t.from) t.from = 1;
        else if (
          ("string" == typeof t.from &&
            /\d+/.test(t.from) &&
            (t.from = parseInt(t.from)),
          Number.isInteger(t.from))
        ) {
          if (t.from < 0)
            throw Error(
              `Invalid Option: from must be a positive integer, got ${JSON.stringify(
                e.from
              )}`
            );
        } else
          throw Error(
            `Invalid Option: from must be an integer, got ${JSON.stringify(
              t.from
            )}`
          );
        if (void 0 === t.from_line || null === t.from_line) t.from_line = 1;
        else if (
          ("string" == typeof t.from_line &&
            /\d+/.test(t.from_line) &&
            (t.from_line = parseInt(t.from_line)),
          Number.isInteger(t.from_line))
        ) {
          if (t.from_line <= 0)
            throw Error(
              `Invalid Option: from_line must be a positive integer greater than 0, got ${JSON.stringify(
                e.from_line
              )}`
            );
        } else
          throw Error(
            `Invalid Option: from_line must be an integer, got ${JSON.stringify(
              e.from_line
            )}`
          );
        if (
          void 0 === t.ignore_last_delimiters ||
          null === t.ignore_last_delimiters
        )
          t.ignore_last_delimiters = !1;
        else if ("number" == typeof t.ignore_last_delimiters)
          (t.ignore_last_delimiters = Math.floor(t.ignore_last_delimiters)),
            0 === t.ignore_last_delimiters && (t.ignore_last_delimiters = !1);
        else if ("boolean" != typeof t.ignore_last_delimiters)
          throw new i(
            "CSV_INVALID_OPTION_IGNORE_LAST_DELIMITERS",
            [
              "Invalid option `ignore_last_delimiters`:",
              "the value must be a boolean value or an integer,",
              `got ${JSON.stringify(t.ignore_last_delimiters)}`,
            ],
            t
          );
        if (!0 === t.ignore_last_delimiters && !1 === t.columns)
          throw new i(
            "CSV_IGNORE_LAST_DELIMITERS_REQUIRES_COLUMNS",
            [
              "The option `ignore_last_delimiters`",
              "requires the activation of the `columns` option",
            ],
            t
          );
        if (void 0 === t.info || null === t.info || !1 === t.info) t.info = !1;
        else if (!0 !== t.info)
          throw Error(
            `Invalid Option: info must be true, got ${JSON.stringify(t.info)}`
          );
        if (
          void 0 === t.max_record_size ||
          null === t.max_record_size ||
          !1 === t.max_record_size
        )
          t.max_record_size = 0;
        else if (Number.isInteger(t.max_record_size) && t.max_record_size >= 0);
        else if (
          "string" == typeof t.max_record_size &&
          /\d+/.test(t.max_record_size)
        )
          t.max_record_size = parseInt(t.max_record_size);
        else
          throw Error(
            `Invalid Option: max_record_size must be a positive integer, got ${JSON.stringify(
              t.max_record_size
            )}`
          );
        if (void 0 === t.objname || null === t.objname || !1 === t.objname)
          t.objname = void 0;
        else if (c.isBuffer(t.objname)) {
          if (0 === t.objname.length)
            throw Error("Invalid Option: objname must be a non empty buffer");
          null === t.encoding || (t.objname = t.objname.toString(t.encoding));
        } else if ("string" == typeof t.objname) {
          if (0 === t.objname.length)
            throw Error("Invalid Option: objname must be a non empty string");
        } else if ("number" == typeof t.objname);
        else
          throw Error(
            `Invalid Option: objname must be a string or a buffer, got ${t.objname}`
          );
        if (void 0 !== t.objname) {
          if ("number" == typeof t.objname) {
            if (!1 !== t.columns)
              throw Error(
                "Invalid Option: objname index cannot be combined with columns or be defined as a field"
              );
          } else if (!1 === t.columns)
            throw Error(
              "Invalid Option: objname field must be combined with columns or be defined as an index"
            );
        }
        if (void 0 === t.on_record || null === t.on_record)
          t.on_record = void 0;
        else if ("function" != typeof t.on_record)
          throw new i(
            "CSV_INVALID_OPTION_ON_RECORD",
            [
              "Invalid option `on_record`:",
              "expect a function,",
              `got ${JSON.stringify(t.on_record)}`,
            ],
            t
          );
        if (null === t.quote || !1 === t.quote || "" === t.quote)
          t.quote = null;
        else if (
          (void 0 === t.quote || !0 === t.quote
            ? (t.quote = c.from('"', t.encoding))
            : "string" == typeof t.quote &&
              (t.quote = c.from(t.quote, t.encoding)),
          !c.isBuffer(t.quote))
        )
          throw Error(
            `Invalid Option: quote must be a buffer or a string, got ${JSON.stringify(
              t.quote
            )}`
          );
        if (void 0 === t.raw || null === t.raw || !1 === t.raw) t.raw = !1;
        else if (!0 !== t.raw)
          throw Error(
            `Invalid Option: raw must be true, got ${JSON.stringify(t.raw)}`
          );
        if (void 0 === t.record_delimiter) t.record_delimiter = [];
        else if (
          "string" == typeof t.record_delimiter ||
          c.isBuffer(t.record_delimiter)
        ) {
          if (0 === t.record_delimiter.length)
            throw new i(
              "CSV_INVALID_OPTION_RECORD_DELIMITER",
              [
                "Invalid option `record_delimiter`:",
                "value must be a non empty string or buffer,",
                `got ${JSON.stringify(t.record_delimiter)}`,
              ],
              t
            );
          t.record_delimiter = [t.record_delimiter];
        } else if (!Array.isArray(t.record_delimiter))
          throw new i(
            "CSV_INVALID_OPTION_RECORD_DELIMITER",
            [
              "Invalid option `record_delimiter`:",
              "value must be a string, a buffer or array of string|buffer,",
              `got ${JSON.stringify(t.record_delimiter)}`,
            ],
            t
          );
        if (
          ((t.record_delimiter = t.record_delimiter.map(function (e, r) {
            if ("string" == typeof e || c.isBuffer(e)) {
              if (0 === e.length)
                throw new i(
                  "CSV_INVALID_OPTION_RECORD_DELIMITER",
                  [
                    "Invalid option `record_delimiter`:",
                    "value must be a non empty string or buffer",
                    `at index ${r},`,
                    `got ${JSON.stringify(e)}`,
                  ],
                  t
                );
            } else
              throw new i(
                "CSV_INVALID_OPTION_RECORD_DELIMITER",
                [
                  "Invalid option `record_delimiter`:",
                  "value must be a string, a buffer or array of string|buffer",
                  `at index ${r},`,
                  `got ${JSON.stringify(e)}`,
                ],
                t
              );
            return "string" == typeof e && (e = c.from(e, t.encoding)), e;
          })),
          "boolean" == typeof t.relax_column_count)
        );
        else if (
          void 0 === t.relax_column_count ||
          null === t.relax_column_count
        )
          t.relax_column_count = !1;
        else
          throw Error(
            `Invalid Option: relax_column_count must be a boolean, got ${JSON.stringify(
              t.relax_column_count
            )}`
          );
        if ("boolean" == typeof t.relax_column_count_less);
        else if (
          void 0 === t.relax_column_count_less ||
          null === t.relax_column_count_less
        )
          t.relax_column_count_less = !1;
        else
          throw Error(
            `Invalid Option: relax_column_count_less must be a boolean, got ${JSON.stringify(
              t.relax_column_count_less
            )}`
          );
        if ("boolean" == typeof t.relax_column_count_more);
        else if (
          void 0 === t.relax_column_count_more ||
          null === t.relax_column_count_more
        )
          t.relax_column_count_more = !1;
        else
          throw Error(
            `Invalid Option: relax_column_count_more must be a boolean, got ${JSON.stringify(
              t.relax_column_count_more
            )}`
          );
        if ("boolean" == typeof t.relax_quotes);
        else if (void 0 === t.relax_quotes || null === t.relax_quotes)
          t.relax_quotes = !1;
        else
          throw Error(
            `Invalid Option: relax_quotes must be a boolean, got ${JSON.stringify(
              t.relax_quotes
            )}`
          );
        if ("boolean" == typeof t.skip_empty_lines);
        else if (void 0 === t.skip_empty_lines || null === t.skip_empty_lines)
          t.skip_empty_lines = !1;
        else
          throw Error(
            `Invalid Option: skip_empty_lines must be a boolean, got ${JSON.stringify(
              t.skip_empty_lines
            )}`
          );
        if ("boolean" == typeof t.skip_records_with_empty_values);
        else if (
          void 0 === t.skip_records_with_empty_values ||
          null === t.skip_records_with_empty_values
        )
          t.skip_records_with_empty_values = !1;
        else
          throw Error(
            `Invalid Option: skip_records_with_empty_values must be a boolean, got ${JSON.stringify(
              t.skip_records_with_empty_values
            )}`
          );
        if ("boolean" == typeof t.skip_records_with_error);
        else if (
          void 0 === t.skip_records_with_error ||
          null === t.skip_records_with_error
        )
          t.skip_records_with_error = !1;
        else
          throw Error(
            `Invalid Option: skip_records_with_error must be a boolean, got ${JSON.stringify(
              t.skip_records_with_error
            )}`
          );
        if (void 0 === t.rtrim || null === t.rtrim || !1 === t.rtrim)
          t.rtrim = !1;
        else if (!0 !== t.rtrim)
          throw Error(
            `Invalid Option: rtrim must be a boolean, got ${JSON.stringify(
              t.rtrim
            )}`
          );
        if (void 0 === t.ltrim || null === t.ltrim || !1 === t.ltrim)
          t.ltrim = !1;
        else if (!0 !== t.ltrim)
          throw Error(
            `Invalid Option: ltrim must be a boolean, got ${JSON.stringify(
              t.ltrim
            )}`
          );
        if (void 0 === t.trim || null === t.trim || !1 === t.trim) t.trim = !1;
        else if (!0 !== t.trim)
          throw Error(
            `Invalid Option: trim must be a boolean, got ${JSON.stringify(
              t.trim
            )}`
          );
        if (
          (!0 === t.trim && !1 !== e.ltrim
            ? (t.ltrim = !0)
            : !0 !== t.ltrim && (t.ltrim = !1),
          !0 === t.trim && !1 !== e.rtrim
            ? (t.rtrim = !0)
            : !0 !== t.rtrim && (t.rtrim = !1),
          void 0 === t.to || null === t.to)
        )
          t.to = -1;
        else if (
          ("string" == typeof t.to &&
            /\d+/.test(t.to) &&
            (t.to = parseInt(t.to)),
          Number.isInteger(t.to))
        ) {
          if (t.to <= 0)
            throw Error(
              `Invalid Option: to must be a positive integer greater than 0, got ${JSON.stringify(
                e.to
              )}`
            );
        } else
          throw Error(
            `Invalid Option: to must be an integer, got ${JSON.stringify(e.to)}`
          );
        if (void 0 === t.to_line || null === t.to_line) t.to_line = -1;
        else if (
          ("string" == typeof t.to_line &&
            /\d+/.test(t.to_line) &&
            (t.to_line = parseInt(t.to_line)),
          Number.isInteger(t.to_line))
        ) {
          if (t.to_line <= 0)
            throw Error(
              `Invalid Option: to_line must be a positive integer greater than 0, got ${JSON.stringify(
                e.to_line
              )}`
            );
        } else
          throw Error(
            `Invalid Option: to_line must be an integer, got ${JSON.stringify(
              e.to_line
            )}`
          );
        return t;
      };
      var d = r(14984).Buffer;
      let h = function (e) {
          return e.every(
            (e) => null == e || (e.toString && "" === e.toString().trim())
          );
        },
        f = { utf8: d.from([239, 187, 191]), utf16le: d.from([255, 254]) },
        p = function (e = {}) {
          let t = u(e);
          return {
            info: {
              bytes: 0,
              comment_lines: 0,
              empty_lines: 0,
              invalid_field_length: 0,
              lines: 1,
              records: 0,
            },
            original_options: e,
            options: t,
            state: {
              bomSkipped: !1,
              bufBytesStart: 0,
              castField: t.cast_function,
              commenting: !1,
              error: void 0,
              enabled: 1 === t.from_line,
              escaping: !1,
              escapeIsQuote:
                s.isBuffer(t.escape) &&
                s.isBuffer(t.quote) &&
                0 === s.compare(t.escape, t.quote),
              expectedRecordLength: Array.isArray(t.columns)
                ? t.columns.length
                : void 0,
              field: new a(20),
              firstLineToHeaders: t.cast_first_line_to_header,
              needMoreDataSize: Math.max(
                null !== t.comment ? t.comment.length : 0,
                ...t.delimiter.map((e) => e.length),
                null !== t.quote ? t.quote.length : 0
              ),
              previousBuf: void 0,
              quoting: !1,
              stop: !1,
              rawBuffer: new a(100),
              record: [],
              recordHasError: !1,
              record_length: 0,
              recordDelimiterMaxLength:
                0 === t.record_delimiter.length
                  ? 0
                  : Math.max(...t.record_delimiter.map((e) => e.length)),
              trimChars: [
                s.from(" ", t.encoding)[0],
                s.from("	", t.encoding)[0],
              ],
              wasQuoting: !1,
              wasRowDelimiter: !1,
              timchars: [
                s.from(s.from([13], "utf8").toString(), t.encoding),
                s.from(s.from([10], "utf8").toString(), t.encoding),
                s.from(s.from([12], "utf8").toString(), t.encoding),
                s.from(s.from([32], "utf8").toString(), t.encoding),
                s.from(s.from([9], "utf8").toString(), t.encoding),
              ],
            },
            __needMoreData: function (e, t, r) {
              if (r) return !1;
              let { encoding: n, escape: i, quote: o } = this.options,
                {
                  quoting: l,
                  needMoreDataSize: a,
                  recordDelimiterMaxLength: s,
                } = this.state,
                c = Math.max(
                  a,
                  0 === s ? d.from("\r\n", n).length : s,
                  l ? (null === i ? 0 : i.length) + o.length : 0,
                  l ? o.length + s : 0
                );
              return t - e - 1 < c;
            },
            parse: function (e, t, r, n) {
              let o, l;
              let {
                  bom: a,
                  comment_no_infix: s,
                  encoding: c,
                  from_line: h,
                  ltrim: p,
                  max_record_size: g,
                  raw: m,
                  relax_quotes: v,
                  rtrim: w,
                  skip_empty_lines: y,
                  to: b,
                  to_line: x,
                } = this.options,
                {
                  comment: k,
                  escape: S,
                  quote: C,
                  record_delimiter: _,
                } = this.options,
                {
                  bomSkipped: R,
                  previousBuf: E,
                  rawBuffer: M,
                  escapeIsQuote: I,
                } = this.state;
              if (void 0 === E) {
                if (void 0 === e) {
                  n();
                  return;
                }
                o = e;
              } else o = void 0 !== E && void 0 === e ? E : d.concat([E, e]);
              if (!1 === R) {
                if (!1 === a) this.state.bomSkipped = !0;
                else if (o.length < 3) {
                  if (!1 === t) {
                    this.state.previousBuf = o;
                    return;
                  }
                } else {
                  for (let e in f)
                    if (0 === f[e].compare(o, 0, f[e].length)) {
                      let t = f[e].length;
                      (this.state.bufBytesStart += t),
                        (o = o.slice(t)),
                        (this.options = u({
                          ...this.original_options,
                          encoding: e,
                        })),
                        ({ comment: k, escape: S, quote: C } = this.options);
                      break;
                    }
                  this.state.bomSkipped = !0;
                }
              }
              let T = o.length;
              for (l = 0; l < T && !this.__needMoreData(l, T, t); l++) {
                if (
                  (!0 === this.state.wasRowDelimiter &&
                    (this.info.lines++, (this.state.wasRowDelimiter = !1)),
                  -1 !== x && this.info.lines > x)
                ) {
                  (this.state.stop = !0), n();
                  return;
                }
                if (!1 === this.state.quoting && 0 === _.length) {
                  let e = this.__autoDiscoverRecordDelimiter(o, l);
                  e && (_ = this.options.record_delimiter);
                }
                let e = o[l];
                if (
                  (!0 === m && M.append(e),
                  (13 === e || 10 === e) &&
                    !1 === this.state.wasRowDelimiter &&
                    (this.state.wasRowDelimiter = !0),
                  !0 === this.state.escaping)
                )
                  this.state.escaping = !1;
                else {
                  if (
                    null !== S &&
                    !0 === this.state.quoting &&
                    this.__isEscape(o, l, e) &&
                    l + S.length < T
                  ) {
                    if (I) {
                      if (this.__isQuote(o, l + S.length)) {
                        (this.state.escaping = !0), (l += S.length - 1);
                        continue;
                      }
                    } else {
                      (this.state.escaping = !0), (l += S.length - 1);
                      continue;
                    }
                  }
                  if (!1 === this.state.commenting && this.__isQuote(o, l)) {
                    if (!0 === this.state.quoting) {
                      let t = o[l + C.length],
                        r = w && this.__isCharTrimable(o, l + C.length),
                        n =
                          null !== k &&
                          this.__compareBytes(k, o, l + C.length, t),
                        a = this.__isDelimiter(o, l + C.length, t),
                        s =
                          0 === _.length
                            ? this.__autoDiscoverRecordDelimiter(
                                o,
                                l + C.length
                              )
                            : this.__isRecordDelimiter(t, o, l + C.length);
                      if (
                        null !== S &&
                        this.__isEscape(o, l, e) &&
                        this.__isQuote(o, l + S.length)
                      )
                        l += S.length - 1;
                      else if (!t || a || s || n || r) {
                        (this.state.quoting = !1),
                          (this.state.wasQuoting = !0),
                          (l += C.length - 1);
                        continue;
                      } else if (!1 === v) {
                        let e = this.__error(
                          new i(
                            "CSV_INVALID_CLOSING_QUOTE",
                            [
                              "Invalid Closing Quote:",
                              `got "${String.fromCharCode(t)}"`,
                              `at line ${this.info.lines}`,
                              "instead of delimiter, record delimiter, trimable character",
                              "(if activated) or comment",
                            ],
                            this.options,
                            this.__infoField()
                          )
                        );
                        if (void 0 !== e) return e;
                      } else
                        (this.state.quoting = !1),
                          (this.state.wasQuoting = !0),
                          this.state.field.prepend(C),
                          (l += C.length - 1);
                    } else if (0 !== this.state.field.length) {
                      if (!1 === v) {
                        let e = this.__infoField(),
                          t = Object.keys(f)
                            .map(
                              (e) =>
                                !!f[e].equals(this.state.field.toString()) && e
                            )
                            .filter(Boolean)[0],
                          r = this.__error(
                            new i(
                              "INVALID_OPENING_QUOTE",
                              [
                                "Invalid Opening Quote:",
                                `a quote is found on field ${JSON.stringify(
                                  e.column
                                )} at line ${
                                  e.lines
                                }, value is ${JSON.stringify(
                                  this.state.field.toString(c)
                                )}`,
                                t ? `(${t} bom)` : void 0,
                              ],
                              this.options,
                              e,
                              { field: this.state.field }
                            )
                          );
                        if (void 0 !== r) return r;
                      }
                    } else {
                      (this.state.quoting = !0), (l += C.length - 1);
                      continue;
                    }
                  }
                  if (!1 === this.state.quoting) {
                    let t = this.__isRecordDelimiter(e, o, l);
                    if (0 !== t) {
                      let e =
                        this.state.commenting &&
                        !1 === this.state.wasQuoting &&
                        0 === this.state.record.length &&
                        0 === this.state.field.length;
                      if (e) this.info.comment_lines++;
                      else {
                        if (
                          !1 === this.state.enabled &&
                          this.info.lines +
                            (!0 === this.state.wasRowDelimiter ? 1 : 0) >=
                            h
                        ) {
                          (this.state.enabled = !0),
                            this.__resetField(),
                            this.__resetRecord(),
                            (l += t - 1);
                          continue;
                        }
                        if (
                          !0 === y &&
                          !1 === this.state.wasQuoting &&
                          0 === this.state.record.length &&
                          0 === this.state.field.length
                        ) {
                          this.info.empty_lines++, (l += t - 1);
                          continue;
                        }
                        this.info.bytes = this.state.bufBytesStart + l;
                        let e = this.__onField();
                        if (void 0 !== e) return e;
                        this.info.bytes = this.state.bufBytesStart + l + t;
                        let i = this.__onRecord(r);
                        if (void 0 !== i) return i;
                        if (-1 !== b && this.info.records >= b) {
                          (this.state.stop = !0), n();
                          return;
                        }
                      }
                      (this.state.commenting = !1), (l += t - 1);
                      continue;
                    }
                    if (this.state.commenting) continue;
                    let i = null === k ? 0 : this.__compareBytes(k, o, l, e);
                    if (
                      0 !== i &&
                      (!1 === s || 0 === this.state.field.length)
                    ) {
                      this.state.commenting = !0;
                      continue;
                    }
                    let a = this.__isDelimiter(o, l, e);
                    if (0 !== a) {
                      this.info.bytes = this.state.bufBytesStart + l;
                      let e = this.__onField();
                      if (void 0 !== e) return e;
                      l += a - 1;
                      continue;
                    }
                  }
                }
                if (
                  !1 === this.state.commenting &&
                  0 !== g &&
                  this.state.record_length + this.state.field.length > g
                )
                  return this.__error(
                    new i(
                      "CSV_MAX_RECORD_SIZE",
                      [
                        "Max Record Size:",
                        "record exceed the maximum number of tolerated bytes",
                        `of ${g}`,
                        `at line ${this.info.lines}`,
                      ],
                      this.options,
                      this.__infoField()
                    )
                  );
                let t =
                    !1 === p ||
                    !0 === this.state.quoting ||
                    0 !== this.state.field.length ||
                    !this.__isCharTrimable(o, l),
                  a = !1 === w || !1 === this.state.wasQuoting;
                if (!0 === t && !0 === a) this.state.field.append(e);
                else {
                  if (!0 === w && !this.__isCharTrimable(o, l))
                    return this.__error(
                      new i(
                        "CSV_NON_TRIMABLE_CHAR_AFTER_CLOSING_QUOTE",
                        [
                          "Invalid Closing Quote:",
                          "found non trimable byte after quote",
                          `at line ${this.info.lines}`,
                        ],
                        this.options,
                        this.__infoField()
                      )
                    );
                  !1 === t && (l += this.__isCharTrimable(o, l) - 1);
                  continue;
                }
              }
              if (!0 === t) {
                if (!0 === this.state.quoting) {
                  let e = this.__error(
                    new i(
                      "CSV_QUOTE_NOT_CLOSED",
                      [
                        "Quote Not Closed:",
                        `the parsing is finished with an opening quote at line ${this.info.lines}`,
                      ],
                      this.options,
                      this.__infoField()
                    )
                  );
                  if (void 0 !== e) return e;
                } else if (
                  !0 === this.state.wasQuoting ||
                  0 !== this.state.record.length ||
                  0 !== this.state.field.length
                ) {
                  this.info.bytes = this.state.bufBytesStart + l;
                  let e = this.__onField();
                  if (void 0 !== e) return e;
                  let t = this.__onRecord(r);
                  if (void 0 !== t) return t;
                } else
                  !0 === this.state.wasRowDelimiter
                    ? this.info.empty_lines++
                    : !0 === this.state.commenting && this.info.comment_lines++;
              } else
                (this.state.bufBytesStart += l),
                  (this.state.previousBuf = o.slice(l));
              !0 === this.state.wasRowDelimiter &&
                (this.info.lines++, (this.state.wasRowDelimiter = !1));
            },
            __onRecord: function (e) {
              let {
                  columns: t,
                  group_columns_by_name: r,
                  encoding: n,
                  info: o,
                  from: l,
                  relax_column_count: a,
                  relax_column_count_less: s,
                  relax_column_count_more: c,
                  raw: u,
                  skip_records_with_empty_values: d,
                } = this.options,
                { enabled: f, record: p } = this.state;
              if (!1 === f) return this.__resetRecord();
              let g = p.length;
              if (!0 === t) {
                if (!0 === d && h(p)) {
                  this.__resetRecord();
                  return;
                }
                return this.__firstLineToColumns(p);
              }
              if (
                (!1 === t &&
                  0 === this.info.records &&
                  (this.state.expectedRecordLength = g),
                g !== this.state.expectedRecordLength)
              ) {
                let e =
                  !1 === t
                    ? new i(
                        "CSV_RECORD_INCONSISTENT_FIELDS_LENGTH",
                        [
                          "Invalid Record Length:",
                          `expect ${this.state.expectedRecordLength},`,
                          `got ${g} on line ${this.info.lines}`,
                        ],
                        this.options,
                        this.__infoField(),
                        { record: p }
                      )
                    : new i(
                        "CSV_RECORD_INCONSISTENT_COLUMNS",
                        [
                          "Invalid Record Length:",
                          `columns length is ${t.length},`,
                          `got ${g} on line ${this.info.lines}`,
                        ],
                        this.options,
                        this.__infoField(),
                        { record: p }
                      );
                if (
                  !0 === a ||
                  (!0 === s && g < this.state.expectedRecordLength) ||
                  (!0 === c && g > this.state.expectedRecordLength)
                )
                  this.info.invalid_field_length++, (this.state.error = e);
                else {
                  let t = this.__error(e);
                  if (t) return t;
                }
              }
              if (!0 === d && h(p)) {
                this.__resetRecord();
                return;
              }
              if (!0 === this.state.recordHasError) {
                this.__resetRecord(), (this.state.recordHasError = !1);
                return;
              }
              if ((this.info.records++, 1 === l || this.info.records >= l)) {
                let { objname: i } = this.options;
                if (!1 !== t) {
                  let l = {};
                  for (let e = 0, n = p.length; e < n; e++)
                    void 0 === t[e] ||
                      t[e].disabled ||
                      (!0 === r && void 0 !== l[t[e].name]
                        ? Array.isArray(l[t[e].name])
                          ? (l[t[e].name] = l[t[e].name].concat(p[e]))
                          : (l[t[e].name] = [l[t[e].name], p[e]])
                        : (l[t[e].name] = p[e]));
                  if (!0 === u || !0 === o) {
                    let t = Object.assign(
                        { record: l },
                        !0 === u
                          ? { raw: this.state.rawBuffer.toString(n) }
                          : {},
                        !0 === o ? { info: this.__infoRecord() } : {}
                      ),
                      r = this.__push(void 0 === i ? t : [l[i], t], e);
                    if (r) return r;
                  } else {
                    let t = this.__push(void 0 === i ? l : [l[i], l], e);
                    if (t) return t;
                  }
                } else if (!0 === u || !0 === o) {
                  let t = Object.assign(
                      { record: p },
                      !0 === u ? { raw: this.state.rawBuffer.toString(n) } : {},
                      !0 === o ? { info: this.__infoRecord() } : {}
                    ),
                    r = this.__push(void 0 === i ? t : [p[i], t], e);
                  if (r) return r;
                } else {
                  let t = this.__push(void 0 === i ? p : [p[i], p], e);
                  if (t) return t;
                }
              }
              this.__resetRecord();
            },
            __firstLineToColumns: function (e) {
              let { firstLineToHeaders: t } = this.state;
              try {
                let r = void 0 === t ? e : t.call(null, e);
                if (!Array.isArray(r))
                  return this.__error(
                    new i(
                      "CSV_INVALID_COLUMN_MAPPING",
                      [
                        "Invalid Column Mapping:",
                        "expect an array from column function,",
                        `got ${JSON.stringify(r)}`,
                      ],
                      this.options,
                      this.__infoField(),
                      { headers: r }
                    )
                  );
                let n = o(r);
                (this.state.expectedRecordLength = n.length),
                  (this.options.columns = n),
                  this.__resetRecord();
                return;
              } catch (e) {
                return e;
              }
            },
            __resetRecord: function () {
              !0 === this.options.raw && this.state.rawBuffer.reset(),
                (this.state.error = void 0),
                (this.state.record = []),
                (this.state.record_length = 0);
            },
            __onField: function () {
              let {
                  cast: e,
                  encoding: t,
                  rtrim: r,
                  max_record_size: n,
                } = this.options,
                { enabled: i, wasQuoting: o } = this.state;
              if (!1 === i) return this.__resetField();
              let l = this.state.field.toString(t);
              if ((!0 === r && !1 === o && (l = l.trimRight()), !0 === e)) {
                let [e, t] = this.__cast(l);
                if (void 0 !== e) return e;
                l = t;
              }
              this.state.record.push(l),
                0 !== n &&
                  "string" == typeof l &&
                  (this.state.record_length += l.length),
                this.__resetField();
            },
            __resetField: function () {
              this.state.field.reset(), (this.state.wasQuoting = !1);
            },
            __push: function (e, t) {
              let { on_record: r } = this.options;
              if (void 0 !== r) {
                let t = this.__infoRecord();
                try {
                  e = r.call(null, e, t);
                } catch (e) {
                  return e;
                }
                if (null == e) return;
              }
              t(e);
            },
            __cast: function (e) {
              let { columns: t, relax_column_count: r } = this.options,
                n = Array.isArray(t);
              if (
                !0 === n &&
                r &&
                this.options.columns.length <= this.state.record.length
              )
                return [void 0, void 0];
              if (null !== this.state.castField)
                try {
                  let t = this.__infoField();
                  return [void 0, this.state.castField.call(null, e, t)];
                } catch (e) {
                  return [e];
                }
              if (this.__isFloat(e)) return [void 0, parseFloat(e)];
              if (!1 !== this.options.cast_date) {
                let t = this.__infoField();
                return [void 0, this.options.cast_date.call(null, e, t)];
              }
              return [void 0, e];
            },
            __isCharTrimable: function (e, t) {
              return ((e, t) => {
                let { timchars: r } = this.state;
                t: for (let n = 0; n < r.length; n++) {
                  let i = r[n];
                  for (let r = 0; r < i.length; r++)
                    if (i[r] !== e[t + r]) continue t;
                  return i.length;
                }
                return 0;
              })(e, t);
            },
            __isFloat: function (e) {
              return e - parseFloat(e) + 1 >= 0;
            },
            __compareBytes: function (e, t, r, n) {
              if (e[0] !== n) return 0;
              let i = e.length;
              for (let n = 1; n < i; n++) if (e[n] !== t[r + n]) return 0;
              return i;
            },
            __isDelimiter: function (e, t, r) {
              let { delimiter: n, ignore_last_delimiters: i } = this.options;
              if (
                (!0 === i &&
                  this.state.record.length ===
                    this.options.columns.length - 1) ||
                (!1 !== i &&
                  "number" == typeof i &&
                  this.state.record.length === i - 1)
              )
                return 0;
              t: for (let i = 0; i < n.length; i++) {
                let o = n[i];
                if (o[0] === r) {
                  for (let r = 1; r < o.length; r++)
                    if (o[r] !== e[t + r]) continue t;
                  return o.length;
                }
              }
              return 0;
            },
            __isRecordDelimiter: function (e, t, r) {
              let { record_delimiter: n } = this.options,
                i = n.length;
              t: for (let o = 0; o < i; o++) {
                let i = n[o],
                  l = i.length;
                if (i[0] === e) {
                  for (let e = 1; e < l; e++) if (i[e] !== t[r + e]) continue t;
                  return i.length;
                }
              }
              return 0;
            },
            __isEscape: function (e, t, r) {
              let { escape: n } = this.options;
              if (null === n) return !1;
              let i = n.length;
              if (n[0] === r) {
                for (let r = 0; r < i; r++) if (n[r] !== e[t + r]) return !1;
                return !0;
              }
              return !1;
            },
            __isQuote: function (e, t) {
              let { quote: r } = this.options;
              if (null === r) return !1;
              let n = r.length;
              for (let i = 0; i < n; i++) if (r[i] !== e[t + i]) return !1;
              return !0;
            },
            __autoDiscoverRecordDelimiter: function (e, t) {
              let { encoding: r } = this.options,
                n = [d.from("\r\n", r), d.from("\n", r), d.from("\r", r)];
              r: for (let r = 0; r < n.length; r++) {
                let i = n[r].length;
                for (let o = 0; o < i; o++)
                  if (n[r][o] !== e[t + o]) continue r;
                return (
                  this.options.record_delimiter.push(n[r]),
                  (this.state.recordDelimiterMaxLength = n[r].length),
                  n[r].length
                );
              }
              return 0;
            },
            __error: function (e) {
              let {
                  encoding: t,
                  raw: r,
                  skip_records_with_error: n,
                } = this.options,
                i = "string" == typeof e ? Error(e) : e;
              if (!n) return i;
              (this.state.recordHasError = !0),
                void 0 !== this.options.on_skip &&
                  this.options.on_skip(
                    i,
                    r ? this.state.rawBuffer.toString(t) : void 0
                  );
            },
            __infoDataSet: function () {
              return { ...this.info, columns: this.options.columns };
            },
            __infoRecord: function () {
              let { columns: e, raw: t, encoding: r } = this.options;
              return {
                ...this.__infoDataSet(),
                error: this.state.error,
                header: !0 === e,
                index: this.state.record.length,
                raw: t ? this.state.rawBuffer.toString(r) : void 0,
              };
            },
            __infoField: function () {
              let { columns: e } = this.options,
                t = Array.isArray(e);
              return {
                ...this.__infoRecord(),
                column:
                  !0 === t
                    ? e.length > this.state.record.length
                      ? e[this.state.record.length].name
                      : null
                    : this.state.record.length,
                quoting: this.state.wasQuoting,
              };
            },
          };
        };
      var g = r(14984).Buffer;
      let m = function (e, t = {}) {
        "string" == typeof e && (e = g.from(e));
        let r = t && t.objname ? {} : [],
          n = p(t),
          i = (e) => {
            void 0 === n.options.objname ? r.push(e) : (r[e[0]] = e[1]);
          },
          o = () => {},
          l = n.parse(e, !1, i, o);
        if (void 0 !== l) throw l;
        let a = n.parse(void 0, !0, i, o);
        if (void 0 !== a) throw a;
        return r;
      };
    },
  },
]);
//# sourceMappingURL=4534.ada329ee1983b4db.js.map