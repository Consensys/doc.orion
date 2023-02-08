"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [368],
  {
    3905: (e, t, n) => {
      n.d(t, { Zo: () => u, kt: () => k });
      var o = n(7294);
      function r(e, t, n) {
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
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
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
      function l(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var s = o.createContext({}),
        p = function (e) {
          var t = o.useContext(s),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
        },
        u = function (e) {
          var t = p(e.components);
          return o.createElement(s.Provider, { value: t }, e.children);
        },
        d = "mdxType",
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return o.createElement(o.Fragment, {}, t);
          },
        },
        m = o.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            i = e.originalType,
            s = e.parentName,
            u = l(e, ["components", "mdxType", "originalType", "parentName"]),
            d = p(n),
            m = r,
            k = d["".concat(s, ".").concat(m)] || d[m] || c[m] || i;
          return n
            ? o.createElement(k, a(a({ ref: t }, u), {}, { components: n }))
            : o.createElement(k, a({ ref: t }, u));
        });
      function k(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var i = n.length,
            a = new Array(i);
          a[0] = m;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e),
            (l[d] = "string" == typeof e ? e : r),
            (a[1] = l);
          for (var p = 2; p < i; p++) a[p] = n[p];
          return o.createElement.apply(null, a);
        }
        return o.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    8457: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => s,
          contentTitle: () => a,
          default: () => d,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => p,
        });
      var o = n(7462),
        r = (n(7294), n(3905));
      const i = {
          title: "Build from source",
          description: "Building Orion from source code",
          sidebar_position: 4,
        },
        a = "Build from source",
        l = {
          unversionedId: "HowTo/Build-From-Source",
          id: "HowTo/Build-From-Source",
          title: "Build from source",
          description: "Building Orion from source code",
          source: "@site/docs/HowTo/Build-From-Source.md",
          sourceDirName: "HowTo",
          slug: "/HowTo/Build-From-Source",
          permalink: "/HowTo/Build-From-Source",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/HowTo/Build-From-Source.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "alexandratran",
          lastUpdatedAt: 1615880010,
          formattedLastUpdatedAt: "Mar 16, 2021",
          sidebarPosition: 4,
          frontMatter: {
            title: "Build from source",
            description: "Building Orion from source code",
            sidebar_position: 4,
          },
          sidebar: "docSidebar",
          previous: {
            title: "Use Docker",
            permalink: "/HowTo/Run-Docker-Image",
          },
          next: {
            title: "High availability",
            permalink: "/HowTo/High-Availability",
          },
        },
        s = {},
        p = [
          { value: "Prerequisites", id: "prerequisites", level: 2 },
          {
            value: "Installation on Linux / Unix / MacOS X",
            id: "installation-on-linux--unix--macos-x",
            level: 2,
          },
          {
            value: "Clone the Orion repository",
            id: "clone-the-orion-repository",
            level: 3,
          },
          { value: "Build Orion", id: "build-orion", level: 3 },
          {
            value: "Installation on Windows",
            id: "installation-on-windows",
            level: 2,
          },
          { value: "Install Orion", id: "install-orion", level: 3 },
          { value: "Build Orion", id: "build-orion-1", level: 3 },
        ],
        u = { toc: p };
      function d(e) {
        let { components: t, ...n } = e;
        return (0, r.kt)(
          "wrapper",
          (0, o.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "build-from-source" }, "Build from source"),
          (0, r.kt)("h2", { id: "prerequisites" }, "Prerequisites"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "a",
                {
                  parentName: "li",
                  href: "https://www.oracle.com/java/technologies/javase-downloads.html",
                },
                "Java JDK",
              ),
            ),
          ),
          (0, r.kt)(
            "admonition",
            { title: "important", type: "info" },
            (0, r.kt)(
              "p",
              { parentName: "admonition" },
              "Orion requires Java 11+; earlier versions are not supported.",
            ),
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)(
                  "a",
                  { parentName: "p", href: "https://git-scm.com/downloads" },
                  "Git",
                ),
                " or ",
                (0, r.kt)(
                  "a",
                  { parentName: "p", href: "https://desktop.github.com/" },
                  "GitHub Desktop",
                ),
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)(
                  "a",
                  { parentName: "p", href: "/HowTo/Dependencies" },
                  "libsodium",
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "h2",
            { id: "installation-on-linux--unix--macos-x" },
            "Installation on Linux / Unix / MacOS X",
          ),
          (0, r.kt)(
            "h3",
            { id: "clone-the-orion-repository" },
            "Clone the Orion repository",
          ),
          (0, r.kt)(
            "p",
            null,
            "Clone the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "ConsenSys/orion"),
            " repository:",
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "git clone https://github.com/ConsenSys/orion.git\n",
            ),
          ),
          (0, r.kt)("h3", { id: "build-orion" }, "Build Orion"),
          (0, r.kt)(
            "p",
            null,
            "After cloning, go to the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "orion"),
            " directory.",
          ),
          (0, r.kt)(
            "p",
            null,
            "Build Orion with the Gradle wrapper ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "gradlew"),
            ", omitting tests as follows:",
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "./gradlew build -x test\n",
            ),
          ),
          (0, r.kt)("p", null, "Go to the distribution directory:"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "cd build/distributions/\n",
            ),
          ),
          (0, r.kt)("p", null, "Expand the distribution archive:"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "tar -xzf orion-<version>.tar.gz\n",
            ),
          ),
          (0, r.kt)(
            "p",
            null,
            "Move to the expanded folder and display the Orion help to confirm installation.",
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "cd orion-<version>/\nbin/orion --help\n",
            ),
          ),
          (0, r.kt)(
            "h2",
            { id: "installation-on-windows" },
            "Installation on Windows",
          ),
          (0, r.kt)("h3", { id: "install-orion" }, "Install Orion"),
          (0, r.kt)(
            "p",
            null,
            "Clone the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "ConsenSys/orion"),
            " repository:",
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-bat" },
              "git clone https://github.com/ConsenSys/orion.git\n",
            ),
          ),
          (0, r.kt)("h3", { id: "build-orion-1" }, "Build Orion"),
          (0, r.kt)(
            "p",
            null,
            "Go to the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "orion"),
            " directory:",
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-bat" },
              "cd orion\n",
            ),
          ),
          (0, r.kt)(
            "p",
            null,
            "Build Orion with the Gradle wrapper ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "gradlew"),
            ", omitting tests as follows:",
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-bat" },
              ".\\gradlew build -x test\n",
            ),
          ),
          (0, r.kt)(
            "admonition",
            { type: "note" },
            (0, r.kt)(
              "p",
              { parentName: "admonition" },
              "To run ",
              (0, r.kt)("inlineCode", { parentName: "p" }, "gradlew"),
              ", you must have the ",
              (0, r.kt)("strong", { parentName: "p" }, "JAVA_HOME"),
              " system variable set to the Java installation directory.\nFor example: ",
              (0, r.kt)(
                "inlineCode",
                { parentName: "p" },
                "JAVA_HOME = C:\\Program Files\\Java\\jdk1.8.0_181",
              ),
              ".",
            ),
          ),
          (0, r.kt)("p", null, "Go to the distribution directory:"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-bat" },
              "cd build\\distributions\n",
            ),
          ),
          (0, r.kt)("p", null, "Expand the distribution archive:"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-bat" },
              "tar -xzf orion-<version>.tar.gz\n",
            ),
          ),
          (0, r.kt)(
            "p",
            null,
            "Go to the expanded folder and display the Orion help to confirm installation.",
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-bat" },
              "cd orion-<version>\nbin\\orion --help\n",
            ),
          ),
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
