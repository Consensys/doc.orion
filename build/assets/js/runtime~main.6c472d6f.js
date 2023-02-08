(() => {
  "use strict";
  var e,
    r,
    t,
    a,
    f,
    d = {},
    o = {};
  function c(e) {
    var r = o[e];
    if (void 0 !== r) return r.exports;
    var t = (o[e] = { id: e, loaded: !1, exports: {} });
    return d[e].call(t.exports, t, t.exports, c), (t.loaded = !0), t.exports;
  }
  (c.m = d),
    (c.c = o),
    (e = []),
    (c.O = (r, t, a, f) => {
      if (!t) {
        var d = 1 / 0;
        for (i = 0; i < e.length; i++) {
          (t = e[i][0]), (a = e[i][1]), (f = e[i][2]);
          for (var o = !0, n = 0; n < t.length; n++)
            (!1 & f || d >= f) && Object.keys(c.O).every((e) => c.O[e](t[n]))
              ? t.splice(n--, 1)
              : ((o = !1), f < d && (d = f));
          if (o) {
            e.splice(i--, 1);
            var b = a();
            void 0 !== b && (r = b);
          }
        }
        return r;
      }
      f = f || 0;
      for (var i = e.length; i > 0 && e[i - 1][2] > f; i--) e[i] = e[i - 1];
      e[i] = [t, a, f];
    }),
    (c.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return c.d(r, { a: r }), r;
    }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (c.t = function (e, a) {
      if ((1 & a && (e = this(e)), 8 & a)) return e;
      if ("object" == typeof e && e) {
        if (4 & a && e.__esModule) return e;
        if (16 & a && "function" == typeof e.then) return e;
      }
      var f = Object.create(null);
      c.r(f);
      var d = {};
      r = r || [null, t({}), t([]), t(t)];
      for (var o = 2 & a && e; "object" == typeof o && !~r.indexOf(o); o = t(o))
        Object.getOwnPropertyNames(o).forEach((r) => (d[r] = () => e[r]));
      return (d.default = () => e), c.d(f, d), f;
    }),
    (c.d = (e, r) => {
      for (var t in r)
        c.o(r, t) &&
          !c.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (c.f = {}),
    (c.e = (e) =>
      Promise.all(Object.keys(c.f).reduce((r, t) => (c.f[t](e, r), r), []))),
    (c.u = (e) =>
      "assets/js/" +
      ({
        10: "a4898119",
        25: "546501b5",
        53: "935f2afb",
        63: "2a798608",
        86: "fd5e7380",
        211: "bd3658d4",
        237: "1df93b7f",
        256: "de824780",
        302: "2317554a",
        318: "0a4d3880",
        322: "e8e7aa23",
        342: "219fb283",
        349: "7fdce460",
        368: "dce4cad0",
        423: "1575eda5",
        494: "f09ec28d",
        501: "74c8fcf7",
        514: "1be78505",
        578: "9fe06854",
        612: "f0ad3fbb",
        615: "72c8855b",
        621: "843371a8",
        633: "b717af67",
        719: "d40863dc",
        723: "dfe17afd",
        732: "5a2ffd4e",
        794: "2b57fe1f",
        817: "14eb3368",
        866: "55823e4f",
        870: "5bd70e1a",
        910: "c6071255",
        918: "17896441",
        920: "1a4e3797",
        935: "653090a6",
        947: "1c8fc160",
        966: "0c827914",
        971: "c377a04b",
        973: "3bfff1c9",
      }[e] || e) +
      "." +
      {
        10: "fec666e4",
        25: "20d4e6c1",
        53: "f43f877e",
        63: "ae21af0e",
        86: "b6303567",
        211: "04fd2150",
        237: "a3d7db65",
        256: "0fb12d56",
        302: "ee58940a",
        318: "a349c9dc",
        322: "458cbce8",
        342: "bfbfee34",
        349: "9ea863eb",
        368: "f9f12cab",
        423: "05823b59",
        494: "15232464",
        501: "19651010",
        514: "068808ad",
        527: "cf030224",
        578: "9e1fa792",
        612: "6af722c3",
        615: "995fae0b",
        621: "c7ad8ff9",
        633: "fc0fb1e7",
        719: "10909ed5",
        723: "0474f16b",
        732: "2b3a2dc4",
        780: "68f50b1c",
        794: "aad79113",
        817: "6fa96ee4",
        866: "14f7ba63",
        870: "70234dd8",
        894: "5d0e2079",
        910: "f0475f25",
        918: "94044df2",
        920: "b4d67619",
        935: "c98208ce",
        945: "3246c1e5",
        947: "d5bf98e5",
        966: "40179fb0",
        971: "203eddc8",
        972: "0aef39c3",
        973: "95a4d8b7",
      }[e] +
      ".js"),
    (c.miniCssF = (e) => {}),
    (c.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (c.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (a = {}),
    (f = "doc.orion:"),
    (c.l = (e, r, t, d) => {
      if (a[e]) a[e].push(r);
      else {
        var o, n;
        if (void 0 !== t)
          for (
            var b = document.getElementsByTagName("script"), i = 0;
            i < b.length;
            i++
          ) {
            var l = b[i];
            if (
              l.getAttribute("src") == e ||
              l.getAttribute("data-webpack") == f + t
            ) {
              o = l;
              break;
            }
          }
        o ||
          ((n = !0),
          ((o = document.createElement("script")).charset = "utf-8"),
          (o.timeout = 120),
          c.nc && o.setAttribute("nonce", c.nc),
          o.setAttribute("data-webpack", f + t),
          (o.src = e)),
          (a[e] = [r]);
        var u = (r, t) => {
            (o.onerror = o.onload = null), clearTimeout(s);
            var f = a[e];
            if (
              (delete a[e],
              o.parentNode && o.parentNode.removeChild(o),
              f && f.forEach((e) => e(t)),
              r)
            )
              return r(t);
          },
          s = setTimeout(
            u.bind(null, void 0, { type: "timeout", target: o }),
            12e4,
          );
        (o.onerror = u.bind(null, o.onerror)),
          (o.onload = u.bind(null, o.onload)),
          n && document.head.appendChild(o);
      }
    }),
    (c.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (c.p = "/"),
    (c.gca = function (e) {
      return (
        (e =
          {
            17896441: "918",
            a4898119: "10",
            "546501b5": "25",
            "935f2afb": "53",
            "2a798608": "63",
            fd5e7380: "86",
            bd3658d4: "211",
            "1df93b7f": "237",
            de824780: "256",
            "2317554a": "302",
            "0a4d3880": "318",
            e8e7aa23: "322",
            "219fb283": "342",
            "7fdce460": "349",
            dce4cad0: "368",
            "1575eda5": "423",
            f09ec28d: "494",
            "74c8fcf7": "501",
            "1be78505": "514",
            "9fe06854": "578",
            f0ad3fbb: "612",
            "72c8855b": "615",
            "843371a8": "621",
            b717af67: "633",
            d40863dc: "719",
            dfe17afd: "723",
            "5a2ffd4e": "732",
            "2b57fe1f": "794",
            "14eb3368": "817",
            "55823e4f": "866",
            "5bd70e1a": "870",
            c6071255: "910",
            "1a4e3797": "920",
            "653090a6": "935",
            "1c8fc160": "947",
            "0c827914": "966",
            c377a04b: "971",
            "3bfff1c9": "973",
          }[e] || e),
        c.p + c.u(e)
      );
    }),
    (() => {
      var e = { 303: 0, 532: 0 };
      (c.f.j = (r, t) => {
        var a = c.o(e, r) ? e[r] : void 0;
        if (0 !== a)
          if (a) t.push(a[2]);
          else if (/^(303|532)$/.test(r)) e[r] = 0;
          else {
            var f = new Promise((t, f) => (a = e[r] = [t, f]));
            t.push((a[2] = f));
            var d = c.p + c.u(r),
              o = new Error();
            c.l(
              d,
              (t) => {
                if (c.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  (o.message =
                    "Loading chunk " + r + " failed.\n(" + f + ": " + d + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = f),
                    (o.request = d),
                    a[1](o);
                }
              },
              "chunk-" + r,
              r,
            );
          }
      }),
        (c.O.j = (r) => 0 === e[r]);
      var r = (r, t) => {
          var a,
            f,
            d = t[0],
            o = t[1],
            n = t[2],
            b = 0;
          if (d.some((r) => 0 !== e[r])) {
            for (a in o) c.o(o, a) && (c.m[a] = o[a]);
            if (n) var i = n(c);
          }
          for (r && r(t); b < d.length; b++)
            (f = d[b]), c.o(e, f) && e[f] && e[f][0](), (e[f] = 0);
          return c.O(i);
        },
        t = (self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })(),
    (c.nc = void 0);
})();
