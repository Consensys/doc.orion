"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [973],
  {
    3905: (e, t, n) => {
      n.d(t, { Zo: () => u, kt: () => m });
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
      function a(e, t) {
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
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
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var s = r.createContext({}),
        l = function (e) {
          var t = r.useContext(s),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
        },
        u = function (e) {
          var t = l(e.components);
          return r.createElement(s.Provider, { value: t }, e.children);
        },
        p = "mdxType",
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        y = r.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            a = e.originalType,
            s = e.parentName,
            u = c(e, ["components", "mdxType", "originalType", "parentName"]),
            p = l(n),
            y = o,
            m = p["".concat(s, ".").concat(y)] || p[y] || d[y] || a;
          return n
            ? r.createElement(m, i(i({ ref: t }, u), {}, { components: n }))
            : r.createElement(m, i({ ref: t }, u));
        });
      function m(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var a = n.length,
            i = new Array(a);
          i[0] = y;
          var c = {};
          for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s]);
          (c.originalType = e),
            (c[p] = "string" == typeof e ? e : o),
            (i[1] = c);
          for (var l = 2; l < a; l++) i[l] = n[l];
          return r.createElement.apply(null, i);
        }
        return r.createElement.apply(null, n);
      }
      y.displayName = "MDXCreateElement";
    },
    6148: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => s,
          contentTitle: () => i,
          default: () => p,
          frontMatter: () => a,
          metadata: () => c,
          toc: () => l,
        });
      var r = n(7462),
        o = (n(7294), n(3905));
      const a = {
          title: "Multi-tenancy",
          description: "Multi-tenancy",
          sidebar_position: 4,
        },
        i = "Multi-Tenancy",
        c = {
          unversionedId: "Concepts/Multi-Tenancy",
          id: "Concepts/Multi-Tenancy",
          title: "Multi-tenancy",
          description: "Multi-tenancy",
          source: "@site/docs/Concepts/Multi-Tenancy.md",
          sourceDirName: "Concepts",
          slug: "/Concepts/Multi-Tenancy",
          permalink: "/Concepts/Multi-Tenancy",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/Concepts/Multi-Tenancy.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Nicolas MASSART",
          lastUpdatedAt: 1600856978,
          formattedLastUpdatedAt: "Sep 23, 2020",
          sidebarPosition: 4,
          frontMatter: {
            title: "Multi-tenancy",
            description: "Multi-tenancy",
            sidebar_position: 4,
          },
          sidebar: "docSidebar",
          previous: {
            title: "TLS Communication",
            permalink: "/Concepts/TLS-Communication",
          },
          next: { title: "Tutorials", permalink: "/category/tutorials" },
        },
        s = {},
        l = [],
        u = { toc: l };
      function p(e) {
        let { components: t, ...n } = e;
        return (0, o.kt)(
          "wrapper",
          (0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "multi-tenancy" }, "Multi-Tenancy"),
          (0, o.kt)(
            "p",
            null,
            "By default, each participant in a privacy network uses its own Hyperledger Besu\nand Orion node.",
          ),
          (0, o.kt)(
            "p",
            null,
            "Orion supports ",
            (0, o.kt)(
              "a",
              {
                parentName: "p",
                href: "https://besu.hyperledger.org/en/latest/Concepts/Privacy/Multi-Tenancy/",
              },
              "multi-tenancy",
            ),
            " by allowing multiple participants in a privacy\nnetwork to use the same Besu and Orion node. ",
            (0, o.kt)(
              "a",
              {
                parentName: "p",
                href: "https://besu.hyperledger.org/en/latest/Tutorials/Privacy/Configuring-Multi-Tenancy/",
              },
              "Configure multi-tenancy in Besu",
            ),
            ".",
          ),
          (0, o.kt)(
            "admonition",
            { type: "important" },
            (0, o.kt)(
              "p",
              { parentName: "admonition" },
              "Ensure the multi-tenant Orion node client API is configured to allow access\nonly by the multi-tenant Besu node. Access to your data is secured through\nBesu using multi-tenancy mode.",
            ),
            (0, o.kt)(
              "p",
              { parentName: "admonition" },
              "If not configured to allow access only by the multi-tenant Besu node, other\nOrion clients including other Besu nodes may be able to access tenant data.",
            ),
            (0, o.kt)(
              "p",
              { parentName: "admonition" },
              "You can use ",
              (0, o.kt)(
                "a",
                { parentName: "p", href: "/Concepts/TLS-Communication" },
                "TLS",
              ),
              " with the ",
              (0, o.kt)(
                "a",
                {
                  parentName: "p",
                  href: "/Tutorials/TLS#clientconnectiontlsservertrust",
                },
                (0, o.kt)("inlineCode", { parentName: "a" }, "whitelist"),
              ),
              " trust mode to\nsecure access.",
            ),
          ),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
