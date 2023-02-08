"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [494],
  {
    3905: (e, t, r) => {
      r.d(t, { Zo: () => u, kt: () => y });
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
      function i(e, t) {
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
            ? i(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var a = n.createContext({}),
        c = function (e) {
          var t = n.useContext(a),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : s(s({}, t), e)), r;
        },
        u = function (e) {
          var t = c(e.components);
          return n.createElement(a.Provider, { value: t }, e.children);
        },
        p = "mdxType",
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        f = n.forwardRef(function (e, t) {
          var r = e.components,
            o = e.mdxType,
            i = e.originalType,
            a = e.parentName,
            u = l(e, ["components", "mdxType", "originalType", "parentName"]),
            p = c(r),
            f = o,
            y = p["".concat(a, ".").concat(f)] || p[f] || d[f] || i;
          return r
            ? n.createElement(y, s(s({ ref: t }, u), {}, { components: r }))
            : n.createElement(y, s({ ref: t }, u));
        });
      function y(e, t) {
        var r = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var i = r.length,
            s = new Array(i);
          s[0] = f;
          var l = {};
          for (var a in t) hasOwnProperty.call(t, a) && (l[a] = t[a]);
          (l.originalType = e),
            (l[p] = "string" == typeof e ? e : o),
            (s[1] = l);
          for (var c = 2; c < i; c++) s[c] = r[c];
          return n.createElement.apply(null, s);
        }
        return n.createElement.apply(null, r);
      }
      f.displayName = "MDXCreateElement";
    },
    3398: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => a,
          contentTitle: () => s,
          default: () => p,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => c,
        });
      var n = r(7462),
        o = (r(7294), r(3905));
      const i = {
          title: "Responsible disclosure policy",
          description: "Orion responsible disclosure statement.",
          sidebar_position: 4,
        },
        s = "Responsible Disclosure Policy",
        l = {
          unversionedId: "Reference/Responsible-Disclosure",
          id: "Reference/Responsible-Disclosure",
          title: "Responsible disclosure policy",
          description: "Orion responsible disclosure statement.",
          source: "@site/docs/Reference/Responsible-Disclosure.md",
          sourceDirName: "Reference",
          slug: "/Reference/Responsible-Disclosure",
          permalink: "/Reference/Responsible-Disclosure",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/Reference/Responsible-Disclosure.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Nicolas MASSART",
          lastUpdatedAt: 1602242872,
          formattedLastUpdatedAt: "Oct 9, 2020",
          sidebarPosition: 4,
          frontMatter: {
            title: "Responsible disclosure policy",
            description: "Orion responsible disclosure statement.",
            sidebar_position: 4,
          },
          sidebar: "docSidebar",
          previous: {
            title: "Configuration File",
            permalink: "/Reference/Configuration-File",
          },
        },
        a = {},
        c = [],
        u = { toc: c };
      function p(e) {
        let { components: t, ...r } = e;
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)(
            "h1",
            { id: "responsible-disclosure-policy" },
            "Responsible Disclosure Policy",
          ),
          (0, o.kt)(
            "p",
            null,
            "At ConsenSys, security is a priority. But regardless of how much effort we put into system security, there may still be vulnerabilities present.\nIf you discover a vulnerability, we want to know about it so we can take steps to address it as quickly as possible. Please help us better protect our clients and our systems.",
          ),
          (0, o.kt)("p", null, "Please do the following:"),
          (0, o.kt)(
            "ul",
            null,
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "E-mail your findings to ",
              (0, o.kt)(
                "a",
                { parentName: "li", href: "mailto:security@pegasys.tech" },
                "security@pegasys.tech",
              ),
              ". Provide sufficient information to reproduce the problem, so we can resolve it as quickly as possible.",
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "Do not take advantage of the vulnerability you have discovered.",
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "Practice responsible disclosure. That is, don\u2019t reveal the problem to others until either:",
              (0, o.kt)(
                "ul",
                { parentName: "li" },
                (0, o.kt)(
                  "li",
                  { parentName: "ul" },
                  "We have released a fix for the disclosure, or",
                ),
                (0, o.kt)(
                  "li",
                  { parentName: "ul" },
                  "90 days have passed, or",
                ),
                (0, o.kt)(
                  "li",
                  { parentName: "ul" },
                  "We waive responsible disclosure.",
                ),
              ),
            ),
          ),
          (0, o.kt)(
            "p",
            null,
            "We will acknowledge receipt of your vulnerability report the next business day and send you regular updates about our progress.",
          ),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
