"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [966],
  {
    3905: (e, t, n) => {
      n.d(t, { Zo: () => l, kt: () => f });
      var r = n(7294);
      function o(e, t, n) {
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
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function c(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var s = r.createContext({}),
        p = function (e) {
          var t = r.useContext(s),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
        },
        l = function (e) {
          var t = p(e.components);
          return r.createElement(s.Provider, { value: t }, e.children);
        },
        u = "mdxType",
        m = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        d = r.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            i = e.originalType,
            s = e.parentName,
            l = c(e, ["components", "mdxType", "originalType", "parentName"]),
            u = p(n),
            d = o,
            f = u["".concat(s, ".").concat(d)] || u[d] || m[d] || i;
          return n
            ? r.createElement(f, a(a({ ref: t }, l), {}, { components: n }))
            : r.createElement(f, a({ ref: t }, l));
        });
      function f(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var i = n.length,
            a = new Array(i);
          a[0] = d;
          var c = {};
          for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s]);
          (c.originalType = e),
            (c[u] = "string" == typeof e ? e : o),
            (a[1] = c);
          for (var p = 2; p < i; p++) a[p] = n[p];
          return r.createElement.apply(null, a);
        }
        return r.createElement.apply(null, n);
      }
      d.displayName = "MDXCreateElement";
    },
    7166: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => s,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => i,
          metadata: () => c,
          toc: () => p,
        });
      var r = n(7462),
        o = (n(7294), n(3905));
      const i = {
          title: "TLS Communication",
          description: "TLS",
          sidebar_position: 3,
        },
        a = "TLS Communication",
        c = {
          unversionedId: "Concepts/TLS-Communication",
          id: "Concepts/TLS-Communication",
          title: "TLS Communication",
          description: "TLS",
          source: "@site/docs/Concepts/TLS-Communication.md",
          sourceDirName: "Concepts",
          slug: "/Concepts/TLS-Communication",
          permalink: "/Concepts/TLS-Communication",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/Concepts/TLS-Communication.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Nicolas MASSART",
          lastUpdatedAt: 1600856978,
          formattedLastUpdatedAt: "Sep 23, 2020",
          sidebarPosition: 3,
          frontMatter: {
            title: "TLS Communication",
            description: "TLS",
            sidebar_position: 3,
          },
          sidebar: "docSidebar",
          previous: {
            title: "Disaster recovery",
            permalink: "/Concepts/Disaster-Recovery",
          },
          next: {
            title: "Multi-tenancy",
            permalink: "/Concepts/Multi-Tenancy",
          },
        },
        s = {},
        p = [],
        l = { toc: p };
      function u(e) {
        let { components: t, ...i } = e;
        return (0, o.kt)(
          "wrapper",
          (0, r.Z)({}, l, i, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "tls-communication" }, "TLS Communication"),
          (0, o.kt)(
            "p",
            null,
            "Orion supports TLS to secure communication to a client\n(for example Hyperledger Besu), and to other Orion nodes.",
          ),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("img", {
              alt: "Orion TLS",
              src: n(9647).Z,
              width: "1512",
              height: "1334",
            }),
          ),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)(
              "a",
              {
                parentName: "p",
                href: "https://besu.hyperledger.org/en/latest/HowTo/Configure/Configure-TLS/",
              },
              "The client (in this example, Hyperledger Besu) must be configured",
            ),
            " to send and accept TLS communication between itself and Orion.",
          ),
          (0, o.kt)(
            "p",
            null,
            "Use the configuration file options to\n",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "/Tutorials/TLS" },
              "enable and configure",
            ),
            " TLS.",
          ),
        );
      }
      u.isMDXComponent = !0;
    },
    9647: (e, t, n) => {
      n.d(t, { Z: () => r });
      const r =
        n.p + "assets/images/Orion_TLS-9151937eacee23393191d82e3349a5d4.png";
    },
  },
]);
