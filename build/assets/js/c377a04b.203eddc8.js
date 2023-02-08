"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [971],
  {
    3905: (e, n, t) => {
      t.d(n, { Zo: () => p, kt: () => y });
      var r = t(7294);
      function o(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function a(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function i(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? a(Object(t), !0).forEach(function (n) {
                o(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
        }
        return e;
      }
      function s(e, n) {
        if (null == e) return {};
        var t,
          r,
          o = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (t = a[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      var c = r.createContext({}),
        l = function (e) {
          var n = r.useContext(c),
            t = n;
          return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
        },
        p = function (e) {
          var n = l(e.components);
          return r.createElement(c.Provider, { value: n }, e.children);
        },
        u = "mdxType",
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var n = e.children;
            return r.createElement(r.Fragment, {}, n);
          },
        },
        m = r.forwardRef(function (e, n) {
          var t = e.components,
            o = e.mdxType,
            a = e.originalType,
            c = e.parentName,
            p = s(e, ["components", "mdxType", "originalType", "parentName"]),
            u = l(t),
            m = o,
            y = u["".concat(c, ".").concat(m)] || u[m] || d[m] || a;
          return t
            ? r.createElement(y, i(i({ ref: n }, p), {}, { components: t }))
            : r.createElement(y, i({ ref: n }, p));
        });
      function y(e, n) {
        var t = arguments,
          o = n && n.mdxType;
        if ("string" == typeof e || o) {
          var a = t.length,
            i = new Array(a);
          i[0] = m;
          var s = {};
          for (var c in n) hasOwnProperty.call(n, c) && (s[c] = n[c]);
          (s.originalType = e),
            (s[u] = "string" == typeof e ? e : o),
            (i[1] = s);
          for (var l = 2; l < a; l++) i[l] = t[l];
          return r.createElement.apply(null, i);
        }
        return r.createElement.apply(null, t);
      }
      m.displayName = "MDXCreateElement";
    },
    1269: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => a,
          metadata: () => s,
          toc: () => l,
        });
      var r = t(7462),
        o = (t(7294), t(3905));
      const a = {
          title: "Orion Private Transaction Manager",
          description:
            "Orion is an open-source private transaction manager developed under the Apache 2.0 license and written in Java.",
          sidebar_position: 1,
          slug: "index",
        },
        i = "Orion Private Transaction Manager",
        s = {
          unversionedId: "index",
          id: "index",
          title: "Orion Private Transaction Manager",
          description:
            "Orion is an open-source private transaction manager developed under the Apache 2.0 license and written in Java.",
          source: "@site/docs/index.md",
          sourceDirName: ".",
          slug: "/index",
          permalink: "/index",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/index.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "MadelineMurray",
          lastUpdatedAt: 1604274360,
          formattedLastUpdatedAt: "Nov 1, 2020",
          sidebarPosition: 1,
          frontMatter: {
            title: "Orion Private Transaction Manager",
            description:
              "Orion is an open-source private transaction manager developed under the Apache 2.0 license and written in Java.",
            sidebar_position: 1,
            slug: "index",
          },
          sidebar: "docSidebar",
          next: { title: "How To", permalink: "/category/how-to" },
        },
        c = {},
        l = [
          { value: "What is Orion?", id: "what-is-orion", level: 2 },
          {
            value: "Is Orion part of ConsenSys Quorum?",
            id: "is-orion-part-of-consensys-quorum",
            level: 2,
          },
          {
            value: "New to ConsenSys Quorum?",
            id: "new-to-consensys-quorum",
            level: 2,
          },
          {
            value: "What can you do with Orion?",
            id: "what-can-you-do-with-orion",
            level: 2,
          },
        ],
        p = { toc: l };
      function u(e) {
        let { components: n, ...t } = e;
        return (0, o.kt)(
          "wrapper",
          (0, r.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }),
          (0, o.kt)(
            "h1",
            { id: "orion-private-transaction-manager" },
            "Orion Private Transaction Manager",
          ),
          (0, o.kt)("h2", { id: "what-is-orion" }, "What is Orion?"),
          (0, o.kt)(
            "p",
            null,
            "Orion is an open-source private transaction manager developed under the Apache 2.0 license and written in Java.\nThe primary application of Orion is as the private transaction manager for ",
            (0, o.kt)(
              "a",
              {
                parentName: "p",
                href: "https://besu.hyperledger.org/en/stable/",
              },
              "Hyperledger Besu",
            ),
            ".",
          ),
          (0, o.kt)(
            "h2",
            { id: "is-orion-part-of-consensys-quorum" },
            "Is Orion part of ConsenSys Quorum?",
          ),
          (0, o.kt)(
            "p",
            null,
            "Yes. ",
            (0, o.kt)(
              "a",
              {
                parentName: "p",
                href: "https://consensys.net/quorum/developers",
              },
              "ConsenSys Quorum",
            ),
            " is the complete open source blockchain\nlayer with enterprise support available from ",
            (0, o.kt)(
              "a",
              {
                parentName: "p",
                href: "https://consensys.net/quorum/contact-us",
              },
              "ConsenSys",
            ),
            ".",
          ),
          (0, o.kt)(
            "h2",
            { id: "new-to-consensys-quorum" },
            "New to ConsenSys Quorum?",
          ),
          (0, o.kt)(
            "p",
            null,
            "Get started with the ",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "/Tutorials/Quorum-Dev-Quickstart" },
              "Quorum Developer Quickstart",
            ),
            ". Use the quickstart\nto rapidly generate local Quorum blockchain networks.",
          ),
          (0, o.kt)(
            "h2",
            { id: "what-can-you-do-with-orion" },
            "What can you do with Orion?",
          ),
          (0, o.kt)("p", null, "Orion:"),
          (0, o.kt)(
            "ul",
            null,
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "Generates and maintains private/public key pairs.",
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "Stores privacy group details.",
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "Self manages and discovers all nodes in the Orion network.",
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "Provides an API for communicating between Orion nodes and an API for communicating with\nEthereum clients (for example, Hyperledger Besu).",
            ),
          ),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
