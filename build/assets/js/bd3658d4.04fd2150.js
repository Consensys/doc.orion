"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [211],
  {
    3905: (e, t, r) => {
      r.d(t, { Zo: () => c, kt: () => f });
      var o = r(7294);
      function n(e, t, r) {
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
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
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
      function l(e, t) {
        if (null == e) return {};
        var r,
          o,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              o,
              n = {},
              a = Object.keys(e);
            for (o = 0; o < a.length; o++)
              (r = a[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (r = a[o]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      var u = o.createContext({}),
        s = function (e) {
          var t = o.useContext(u),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : i(i({}, t), e)), r;
        },
        c = function (e) {
          var t = s(e.components);
          return o.createElement(u.Provider, { value: t }, e.children);
        },
        p = "mdxType",
        m = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return o.createElement(o.Fragment, {}, t);
          },
        },
        d = o.forwardRef(function (e, t) {
          var r = e.components,
            n = e.mdxType,
            a = e.originalType,
            u = e.parentName,
            c = l(e, ["components", "mdxType", "originalType", "parentName"]),
            p = s(r),
            d = n,
            f = p["".concat(u, ".").concat(d)] || p[d] || m[d] || a;
          return r
            ? o.createElement(f, i(i({ ref: t }, c), {}, { components: r }))
            : o.createElement(f, i({ ref: t }, c));
        });
      function f(e, t) {
        var r = arguments,
          n = t && t.mdxType;
        if ("string" == typeof e || n) {
          var a = r.length,
            i = new Array(a);
          i[0] = d;
          var l = {};
          for (var u in t) hasOwnProperty.call(t, u) && (l[u] = t[u]);
          (l.originalType = e),
            (l[p] = "string" == typeof e ? e : n),
            (i[1] = l);
          for (var s = 2; s < a; s++) i[s] = r[s];
          return o.createElement.apply(null, i);
        }
        return o.createElement.apply(null, r);
      }
      d.displayName = "MDXCreateElement";
    },
    4845: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => u,
          contentTitle: () => i,
          default: () => p,
          frontMatter: () => a,
          metadata: () => l,
          toc: () => s,
        });
      var o = r(7462),
        n = (r(7294), r(3905));
      const a = {
          title: "Quorum Developer Quickstart",
          description: "Rapidly generate local Quorum blockchain networks.",
          sidebar_position: 6,
        },
        i = "Quorum Developer Quickstart",
        l = {
          unversionedId: "Tutorials/Quorum-Dev-Quickstart",
          id: "Tutorials/Quorum-Dev-Quickstart",
          title: "Quorum Developer Quickstart",
          description: "Rapidly generate local Quorum blockchain networks.",
          source: "@site/docs/Tutorials/Quorum-Dev-Quickstart.md",
          sourceDirName: "Tutorials",
          slug: "/Tutorials/Quorum-Dev-Quickstart",
          permalink: "/Tutorials/Quorum-Dev-Quickstart",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/Tutorials/Quorum-Dev-Quickstart.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "MadelineMurray",
          lastUpdatedAt: 1604274360,
          formattedLastUpdatedAt: "Nov 1, 2020",
          sidebarPosition: 6,
          frontMatter: {
            title: "Quorum Developer Quickstart",
            description: "Rapidly generate local Quorum blockchain networks.",
            sidebar_position: 6,
          },
          sidebar: "docSidebar",
          previous: {
            title: "Migrating from Orion to Tessera",
            permalink: "/Tutorials/Migrating-from-Orion-to-Tessera",
          },
          next: { title: "Reference", permalink: "/category/reference" },
        },
        u = {},
        s = [
          { value: "Prerequisites", id: "prerequisites", level: 2 },
          { value: "Usage", id: "usage", level: 2 },
        ],
        c = { toc: s };
      function p(e) {
        let { components: t, ...r } = e;
        return (0, n.kt)(
          "wrapper",
          (0, o.Z)({}, c, r, { components: t, mdxType: "MDXLayout" }),
          (0, n.kt)(
            "h1",
            { id: "quorum-developer-quickstart" },
            "Quorum Developer Quickstart",
          ),
          (0, n.kt)("h2", { id: "prerequisites" }, "Prerequisites"),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)(
                "a",
                {
                  parentName: "li",
                  href: "https://docs.docker.com/compose/install/",
                },
                "Docker and Docker-compose",
              ),
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)(
                "a",
                { parentName: "li", href: "https://nodejs.org/en/download/" },
                "Nodejs",
              ),
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              "On Windows:",
              (0, n.kt)(
                "ul",
                { parentName: "li" },
                (0, n.kt)(
                  "li",
                  { parentName: "ul" },
                  "Windows Subsystem for Linux 2",
                ),
                (0, n.kt)(
                  "li",
                  { parentName: "ul" },
                  "Docker desktop configured to use the WSL2-based engine.",
                ),
              ),
            ),
          ),
          (0, n.kt)(
            "admonition",
            { title: "important", type: "info" },
            (0, n.kt)(
              "p",
              { parentName: "admonition" },
              "Ensure you allow Docker up to 4G of memory or 6G if running the privacy examples.\nRefer to the ",
              (0, n.kt)("em", { parentName: "p" }, "Resources"),
              " section in ",
              (0, n.kt)(
                "a",
                {
                  parentName: "p",
                  href: "https://docs.docker.com/docker-for-mac/",
                },
                "Docker for Mac",
              ),
              " and\n",
              (0, n.kt)(
                "a",
                {
                  parentName: "p",
                  href: "https://docs.docker.com/docker-for-windows/",
                },
                "Docker Desktop",
              ),
              " for details.",
            ),
          ),
          (0, n.kt)("h2", { id: "usage" }, "Usage"),
          (0, n.kt)(
            "p",
            null,
            "To create the docker-compose file and artifacts, run:",
          ),
          (0, n.kt)(
            "pre",
            null,
            (0, n.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "npx quorum-dev-quickstart\n",
            ),
          ),
          (0, n.kt)("p", null, "Follow the prompts displayed."),
          (0, n.kt)(
            "p",
            null,
            "When installation is complete, refer to ",
            (0, n.kt)("inlineCode", { parentName: "p" }, "README.md"),
            " in the installation directory for more information\non your test network.",
          ),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
