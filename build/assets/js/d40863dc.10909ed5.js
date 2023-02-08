"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [719],
  {
    3905: (e, r, t) => {
      t.d(r, { Zo: () => l, kt: () => f });
      var n = t(7294);
      function a(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function o(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function i(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? o(Object(t), !0).forEach(function (r) {
                a(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r),
                );
              });
        }
        return e;
      }
      function p(e, r) {
        if (null == e) return {};
        var t,
          n,
          a = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              a = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (t = o[n]), r.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (t = o[n]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (a[t] = e[t]));
        }
        return a;
      }
      var c = n.createContext({}),
        s = function (e) {
          var r = n.useContext(c),
            t = r;
          return e && (t = "function" == typeof e ? e(r) : i(i({}, r), e)), t;
        },
        l = function (e) {
          var r = s(e.components);
          return n.createElement(c.Provider, { value: r }, e.children);
        },
        u = "mdxType",
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var r = e.children;
            return n.createElement(n.Fragment, {}, r);
          },
        },
        y = n.forwardRef(function (e, r) {
          var t = e.components,
            a = e.mdxType,
            o = e.originalType,
            c = e.parentName,
            l = p(e, ["components", "mdxType", "originalType", "parentName"]),
            u = s(t),
            y = a,
            f = u["".concat(c, ".").concat(y)] || u[y] || d[y] || o;
          return t
            ? n.createElement(f, i(i({ ref: r }, l), {}, { components: t }))
            : n.createElement(f, i({ ref: r }, l));
        });
      function f(e, r) {
        var t = arguments,
          a = r && r.mdxType;
        if ("string" == typeof e || a) {
          var o = t.length,
            i = new Array(o);
          i[0] = y;
          var p = {};
          for (var c in r) hasOwnProperty.call(r, c) && (p[c] = r[c]);
          (p.originalType = e),
            (p[u] = "string" == typeof e ? e : a),
            (i[1] = p);
          for (var s = 2; s < o; s++) i[s] = t[s];
          return n.createElement.apply(null, i);
        }
        return n.createElement.apply(null, t);
      }
      y.displayName = "MDXCreateElement";
    },
    624: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => c,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => o,
          metadata: () => p,
          toc: () => s,
        });
      var n = t(7462),
        a = (t(7294), t(3905));
      const o = {
          title: "Privacy groups",
          description: "Privacy groups",
          sidebar_position: 1,
        },
        i = "Privacy groups",
        p = {
          unversionedId: "Concepts/Privacy-Groups",
          id: "Concepts/Privacy-Groups",
          title: "Privacy groups",
          description: "Privacy groups",
          source: "@site/docs/Concepts/Privacy-Groups.md",
          sourceDirName: "Concepts",
          slug: "/Concepts/Privacy-Groups",
          permalink: "/Concepts/Privacy-Groups",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/Concepts/Privacy-Groups.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Nicolas MASSART",
          lastUpdatedAt: 1600856978,
          formattedLastUpdatedAt: "Sep 23, 2020",
          sidebarPosition: 1,
          frontMatter: {
            title: "Privacy groups",
            description: "Privacy groups",
            sidebar_position: 1,
          },
          sidebar: "docSidebar",
          previous: { title: "Concepts", permalink: "/category/concepts" },
          next: {
            title: "Disaster recovery",
            permalink: "/Concepts/Disaster-Recovery",
          },
        },
        c = {},
        s = [],
        l = { toc: s };
      function u(e) {
        let { components: r, ...t } = e;
        return (0, a.kt)(
          "wrapper",
          (0, n.Z)({}, l, t, { components: r, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "privacy-groups" }, "Privacy groups"),
          (0, a.kt)(
            "p",
            null,
            "When ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/Reference/API-Methods#send" },
              "transactions are sent",
            ),
            " to:",
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "List of recipients, Orion creates a privacy group containing the recipients.",
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "Privacy group, the transaction is distributed to all members of the privacy group.",
            ),
          ),
          (0, a.kt)(
            "p",
            null,
            "Hyperledger Besu maintains a ",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "https://besu.hyperledger.org/en/stable/Concepts/Privacy/Privacy-Groups/",
              },
              "private state per privacy group",
            ),
            ".",
          ),
          (0, a.kt)(
            "p",
            null,
            "Endpoints are provided to create, delete, and privacy groups:",
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/Reference/API-Methods#createprivacygroup",
                },
                (0, a.kt)(
                  "inlineCode",
                  { parentName: "a" },
                  "createPrivacyGroup",
                ),
              ),
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/Reference/API-Methods#deleteprivacygroup",
                },
                (0, a.kt)(
                  "inlineCode",
                  { parentName: "a" },
                  "deletePrivacyGroup",
                ),
              ),
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/Reference/API-Methods#findprivacygroup",
                },
                (0, a.kt)(
                  "inlineCode",
                  { parentName: "a" },
                  "findPrivacyGroup",
                ),
              ),
            ),
          ),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
