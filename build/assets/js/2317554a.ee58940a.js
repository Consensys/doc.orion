"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [302],
  {
    3905: (e, t, r) => {
      r.d(t, { Zo: () => l, kt: () => f });
      var n = r(7294);
      function o(e, t, r) {
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
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function i(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var c = n.createContext({}),
        p = function (e) {
          var t = n.useContext(c),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : s(s({}, t), e)), r;
        },
        l = function (e) {
          var t = p(e.components);
          return n.createElement(c.Provider, { value: t }, e.children);
        },
        u = "mdxType",
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        y = n.forwardRef(function (e, t) {
          var r = e.components,
            o = e.mdxType,
            a = e.originalType,
            c = e.parentName,
            l = i(e, ["components", "mdxType", "originalType", "parentName"]),
            u = p(r),
            y = o,
            f = u["".concat(c, ".").concat(y)] || u[y] || d[y] || a;
          return r
            ? n.createElement(f, s(s({ ref: t }, l), {}, { components: r }))
            : n.createElement(f, s({ ref: t }, l));
        });
      function f(e, t) {
        var r = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var a = r.length,
            s = new Array(a);
          s[0] = y;
          var i = {};
          for (var c in t) hasOwnProperty.call(t, c) && (i[c] = t[c]);
          (i.originalType = e),
            (i[u] = "string" == typeof e ? e : o),
            (s[1] = i);
          for (var p = 2; p < a; p++) s[p] = r[p];
          return n.createElement.apply(null, s);
        }
        return n.createElement.apply(null, r);
      }
      y.displayName = "MDXCreateElement";
    },
    4488: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => u,
          frontMatter: () => a,
          metadata: () => i,
          toc: () => p,
        });
      var n = r(7462),
        o = (r(7294), r(3905));
      const a = {
          title: "Disaster recovery",
          description: "Disaster recovery strategies",
          sidebar_position: 2,
        },
        s = "Disaster recovery",
        i = {
          unversionedId: "Concepts/Disaster-Recovery",
          id: "Concepts/Disaster-Recovery",
          title: "Disaster recovery",
          description: "Disaster recovery strategies",
          source: "@site/docs/Concepts/Disaster-Recovery.md",
          sourceDirName: "Concepts",
          slug: "/Concepts/Disaster-Recovery",
          permalink: "/Concepts/Disaster-Recovery",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/Concepts/Disaster-Recovery.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Nicolas MASSART",
          lastUpdatedAt: 1600856978,
          formattedLastUpdatedAt: "Sep 23, 2020",
          sidebarPosition: 2,
          frontMatter: {
            title: "Disaster recovery",
            description: "Disaster recovery strategies",
            sidebar_position: 2,
          },
          sidebar: "docSidebar",
          previous: {
            title: "Privacy groups",
            permalink: "/Concepts/Privacy-Groups",
          },
          next: {
            title: "TLS Communication",
            permalink: "/Concepts/TLS-Communication",
          },
        },
        c = {},
        p = [],
        l = { toc: p };
      function u(e) {
        let { components: t, ...r } = e;
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, l, r, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "disaster-recovery" }, "Disaster recovery"),
          (0, o.kt)(
            "admonition",
            { type: "danger" },
            (0, o.kt)(
              "p",
              { parentName: "admonition" },
              "If the Orion database is deleted or corrupted, all private transaction payloads for the node are lost.\nYou cannot recover a lost database without a backup.",
            ),
          ),
          (0, o.kt)(
            "p",
            null,
            "Orion supports using relational databases ",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "/Tutorials/Using-PostgreSQL" },
              "PostgreSQL",
            ),
            " and ",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "/Tutorials/Using-Oracle" },
              "Oracle",
            ),
            ".\nTo enable disaster recovery for Orion, use a relational database and backup.",
          ),
          (0, o.kt)("p", null, "To recover after a failure:"),
          (0, o.kt)(
            "ol",
            null,
            (0, o.kt)(
              "li",
              { parentName: "ol" },
              "Start Orion pointing to your database",
            ),
            (0, o.kt)(
              "li",
              { parentName: "ol" },
              "Start Hyperledger Besu. As Besu synchronizes to the current world state it\n",
              (0, o.kt)(
                "a",
                {
                  parentName: "li",
                  href: "https://besu.hyperledger.org/en/stable/Concepts/Privacy/Private-Transaction-Processing/",
                },
                "processes the privacy marker transactions",
              ),
              "\nand requests the private transactions from Orion to execute.",
            ),
          ),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
