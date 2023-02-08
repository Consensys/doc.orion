"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [615],
  {
    3905: (e, t, n) => {
      n.d(t, { Zo: () => d, kt: () => b });
      var r = n(7294);
      function i(e, t, n) {
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
      function o(e, t) {
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
            ? o(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      var s = r.createContext({}),
        c = function (e) {
          var t = r.useContext(s),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
        },
        d = function (e) {
          var t = c(e.components);
          return r.createElement(s.Provider, { value: t }, e.children);
        },
        p = "mdxType",
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        m = r.forwardRef(function (e, t) {
          var n = e.components,
            i = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            d = l(e, ["components", "mdxType", "originalType", "parentName"]),
            p = c(n),
            m = i,
            b = p["".concat(s, ".").concat(m)] || p[m] || u[m] || o;
          return n
            ? r.createElement(b, a(a({ ref: t }, d), {}, { components: n }))
            : r.createElement(b, a({ ref: t }, d));
        });
      function b(e, t) {
        var n = arguments,
          i = t && t.mdxType;
        if ("string" == typeof e || i) {
          var o = n.length,
            a = new Array(o);
          a[0] = m;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e),
            (l[p] = "string" == typeof e ? e : i),
            (a[1] = l);
          for (var c = 2; c < o; c++) a[c] = n[c];
          return r.createElement.apply(null, a);
        }
        return r.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    7763: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => s,
          contentTitle: () => a,
          default: () => p,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => c,
        });
      var r = n(7462),
        i = (n(7294), n(3905));
      const o = {
          title: "Dependencies",
          description: "Dependencies",
          sidebar_position: 2,
        },
        a = "Dependencies",
        l = {
          unversionedId: "HowTo/Dependencies",
          id: "HowTo/Dependencies",
          title: "Dependencies",
          description: "Dependencies",
          source: "@site/docs/HowTo/Dependencies.md",
          sourceDirName: "HowTo",
          slug: "/HowTo/Dependencies",
          permalink: "/HowTo/Dependencies",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/HowTo/Dependencies.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Nicolas MASSART",
          lastUpdatedAt: 1620248485,
          formattedLastUpdatedAt: "May 5, 2021",
          sidebarPosition: 2,
          frontMatter: {
            title: "Dependencies",
            description: "Dependencies",
            sidebar_position: 2,
          },
          sidebar: "docSidebar",
          previous: { title: "Quickstart", permalink: "/HowTo/Quickstart" },
          next: { title: "Use Binary", permalink: "/HowTo/Install-Binaries" },
        },
        s = {},
        c = [
          { value: "libsodium", id: "libsodium", level: 2 },
          { value: "Install libsodium", id: "install-libsodium", level: 3 },
          { value: "MacOS", id: "macos", level: 4 },
          { value: "Linux", id: "linux", level: 4 },
          { value: "Linux / macOS", id: "linux--macos", level: 4 },
          { value: "Windows", id: "windows", level: 4 },
        ],
        d = { toc: c };
      function p(e) {
        let { components: t, ...n } = e;
        return (0, i.kt)(
          "wrapper",
          (0, r.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "dependencies" }, "Dependencies"),
          (0, i.kt)("h2", { id: "libsodium" }, "libsodium"),
          (0, i.kt)(
            "p",
            null,
            "Orion requires the ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "https://download.libsodium.org/doc/" },
              "Sodium cryptographic library",
            ),
            " (libsodium) to provide the encryption primitives.",
          ),
          (0, i.kt)("h3", { id: "install-libsodium" }, "Install libsodium"),
          (0, i.kt)("h4", { id: "macos" }, "MacOS"),
          (0, i.kt)(
            "p",
            null,
            "Install using ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "https://brew.sh/" },
              "Homebrew",
            ),
            ":",
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "brew install libsodium\n",
            ),
          ),
          (0, i.kt)("h4", { id: "linux" }, "Linux"),
          (0, i.kt)(
            "p",
            null,
            "Download the ",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "https://download.libsodium.org/libsodium/releases/LATEST.tar.gz",
              },
              "latest stable version",
            ),
            "\nof libsodium.",
          ),
          (0, i.kt)("p", null, "Execute:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "./configure\nmake && make check\nsudo make install\n",
            ),
          ),
          (0, i.kt)("h4", { id: "linux--macos" }, "Linux / macOS"),
          (0, i.kt)(
            "p",
            null,
            "See the ",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "https://download.libsodium.org/doc/installation/",
              },
              "libsodium installation docs",
            ),
            ".",
          ),
          (0, i.kt)("h4", { id: "windows" }, "Windows"),
          (0, i.kt)(
            "p",
            null,
            "Reach out to us on ",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "https://discord.com/channels/697535391594446898/905421497416433704",
              },
              "Orion Discord channel",
            ),
          ),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
