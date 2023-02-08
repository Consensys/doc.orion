"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [318],
  {
    3905: (t, e, n) => {
      n.d(e, { Zo: () => N, kt: () => u });
      var a = n(7294);
      function r(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          e &&
            (a = a.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function (e) {
                r(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
        }
        return t;
      }
      function d(t, e) {
        if (null == t) return {};
        var n,
          a,
          r = (function (t, e) {
            if (null == t) return {};
            var n,
              a,
              r = {},
              l = Object.keys(t);
            for (a = 0; a < l.length; a++)
              (n = l[a]), e.indexOf(n) >= 0 || (r[n] = t[n]);
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(t);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (r[n] = t[n]));
        }
        return r;
      }
      var o = a.createContext({}),
        p = function (t) {
          var e = a.useContext(o),
            n = e;
          return t && (n = "function" == typeof t ? t(e) : i(i({}, e), t)), n;
        },
        N = function (t) {
          var e = p(t.components);
          return a.createElement(o.Provider, { value: e }, t.children);
        },
        m = "mdxType",
        k = {
          inlineCode: "code",
          wrapper: function (t) {
            var e = t.children;
            return a.createElement(a.Fragment, {}, e);
          },
        },
        s = a.forwardRef(function (t, e) {
          var n = t.components,
            r = t.mdxType,
            l = t.originalType,
            o = t.parentName,
            N = d(t, ["components", "mdxType", "originalType", "parentName"]),
            m = p(n),
            s = r,
            u = m["".concat(o, ".").concat(s)] || m[s] || k[s] || l;
          return n
            ? a.createElement(u, i(i({ ref: e }, N), {}, { components: n }))
            : a.createElement(u, i({ ref: e }, N));
        });
      function u(t, e) {
        var n = arguments,
          r = e && e.mdxType;
        if ("string" == typeof t || r) {
          var l = n.length,
            i = new Array(l);
          i[0] = s;
          var d = {};
          for (var o in e) hasOwnProperty.call(e, o) && (d[o] = e[o]);
          (d.originalType = t),
            (d[m] = "string" == typeof t ? t : r),
            (i[1] = d);
          for (var p = 2; p < l; p++) i[p] = n[p];
          return a.createElement.apply(null, i);
        }
        return a.createElement.apply(null, n);
      }
      s.displayName = "MDXCreateElement";
    },
    764: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => o,
          contentTitle: () => i,
          default: () => m,
          frontMatter: () => l,
          metadata: () => d,
          toc: () => p,
        });
      var a = n(7462),
        r = (n(7294), n(3905));
      const l = {
          title: "Configuration File",
          description: "Configuration File",
          sidebar_position: 3,
        },
        i = "Configuration file",
        d = {
          unversionedId: "Reference/Configuration-File",
          id: "Reference/Configuration-File",
          title: "Configuration File",
          description: "Configuration File",
          source: "@site/docs/Reference/Configuration-File.md",
          sourceDirName: "Reference",
          slug: "/Reference/Configuration-File",
          permalink: "/Reference/Configuration-File",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/Reference/Configuration-File.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Nicolas MASSART",
          lastUpdatedAt: 1602242872,
          formattedLastUpdatedAt: "Oct 9, 2020",
          sidebarPosition: 3,
          frontMatter: {
            title: "Configuration File",
            description: "Configuration File",
            sidebar_position: 3,
          },
          sidebar: "docSidebar",
          previous: {
            title: "Client API methods",
            permalink: "/Reference/API-Methods",
          },
          next: {
            title: "Responsible disclosure policy",
            permalink: "/Reference/Responsible-Disclosure",
          },
        },
        o = {},
        p = [
          { value: "Properties", id: "properties", level: 2 },
          {
            value: "<code>libsodiumpath</code>",
            id: "libsodiumpath",
            level: 3,
          },
          { value: "<code>alwayssendto</code>", id: "alwayssendto", level: 3 },
          { value: "passwords", id: "passwords", level: 3 },
        ],
        N = { toc: p };
      function m(t) {
        let { components: e, ...n } = t;
        return (0, r.kt)(
          "wrapper",
          (0, a.Z)({}, N, n, { components: e, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "configuration-file" }, "Configuration file"),
          (0, r.kt)(
            "p",
            null,
            "The Configuration file is a TOML file that must be specified when\n",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "/Reference/Orion-CLI-Syntax#configuration-file",
              },
              "starting Orion",
            ),
            ".",
          ),
          (0, r.kt)(
            "p",
            null,
            "Configuration entries may be overridden by environment variables.",
          ),
          (0, r.kt)("h2", { id: "properties" }, "Properties"),
          (0, r.kt)(
            "table",
            null,
            (0, r.kt)(
              "thead",
              { parentName: "table" },
              (0, r.kt)(
                "tr",
                { parentName: "thead" },
                (0, r.kt)("th", { parentName: "tr", align: null }, "Property"),
                (0, r.kt)(
                  "th",
                  { parentName: "tr", align: "left" },
                  "Required",
                ),
                (0, r.kt)(
                  "th",
                  { parentName: "tr", align: null },
                  "Environment",
                  "\xa0",
                  "variable",
                  "\xa0",
                  "name",
                ),
                (0, r.kt)(
                  "th",
                  { parentName: "tr", align: null },
                  "Description",
                ),
                (0, r.kt)("th", { parentName: "tr", align: null }, "Default"),
              ),
            ),
            (0, r.kt)(
              "tbody",
              { parentName: "table" },
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "nodeurl"),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Required",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_NODEURL",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "URL advertised to Orion nodes",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    '"http://127.0.0.1:8080/"',
                  ),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "nodeport"),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Required",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_NODEPORT",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "Port on which to listen for Orion nodes",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "8080"),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "nodenetworkinterface",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_NODENETWORKINTERFACE",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "Host on which to listen for Orion nodes",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, '"127.0.0.1"'),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "clienturl"),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_CLIENTURL",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "URL advertised to Ethereum clients",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    '"http://127.0.0.1:8888"',
                  ),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "clientport"),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_CLIENTPORT",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "Port on which to listen for Ethereum clients",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "8888"),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "clientnetworkinterface",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_CLIENTNETWORKINTERFACE",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "Host on which to listen for Ethereum clients",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, '"127.0.0.1"'),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "workdir"),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_WORKDIR",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "Data directory. This property is relevant only if you use file-based storage, such as LevelDB.",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    ". (current directory)",
                  ),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "othernodes"),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_OTHERNODES",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "Bootnodes for Orion network",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "[] (empty list)",
                  ),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "publickeys"),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_PUBLICKEYS",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "List of files containing public keys hosted by node",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "[] (empty list)",
                  ),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "privatekeys"),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_PRIVATEKEYS",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "List of files containing private keys hosted by node (corresponding order to public keys)",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "[] (empty list)",
                  ),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "libsodiumpath",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_LIBSODIUMPATH",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "Path to libsodium shared library",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "#libsodiumpath" },
                    "Dependent on OS",
                  ),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "alwayssendto"),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_ALWAYSSENDTO",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "List of files containing public keys to include as recipients for every transaction",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "[]"),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "passwords"),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_PASSWORDS",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "File containing ",
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "#passwords" },
                    "passwords",
                  ),
                  " to unlock ",
                  (0, r.kt)("inlineCode", { parentName: "td" }, "privatekeys"),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "Not set"),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "knownnodestorage",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_KNOWNNODESTORAGE",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "Known nodes storage for other Orion nodes. Must match ",
                  (0, r.kt)("inlineCode", { parentName: "td" }, "storage"),
                  " in ",
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "/HowTo/High-Availability" },
                    "highly available scenarios",
                  ),
                  ". Relational databases ",
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "/Tutorials/Using-PostgreSQL" },
                    "PostgreSQL",
                  ),
                  " and ",
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "/Tutorials/Using-Oracle" },
                    "Oracle",
                  ),
                  " are supported.",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, '"memory"'),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "storage"),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_STORAGE",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "Storage for payloads and related information. Relational databases ",
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "/Tutorials/Using-PostgreSQL" },
                    "PostgreSQL",
                  ),
                  " and ",
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "/Tutorials/Using-Oracle" },
                    "Oracle",
                  ),
                  " are supported.",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, '"leveldb"'),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "tls"),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "ORION_TLS"),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "/Tutorials/TLS" },
                    "TLS status options",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, '"strict"'),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "tlsservercert",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_TLSSERVERCERT",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "/Tutorials/TLS#tlsservercert" },
                    "Server TLS certificate",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    '"tls-server-cert.pem"',
                  ),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "tlsserverchain",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_TLSSERVERCHAIN",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "/Tutorials/TLS#tlsserverchain" },
                    "Files that make up the CA trust chain",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "[]"),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "tlsserverkey"),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_TLSSERVERKEY",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "/Tutorials/TLS#tlsserverkey" },
                    "Private key for the server TLS certificate",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    '"tls-server-key.pem"',
                  ),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "tlsservertrust",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_TLSSERVERTRUST",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "/Tutorials/TLS#tlsservertrust" },
                    "TLS trust mode for the server",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, '"tofu"'),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "tlsknownclients",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_TLSKNOWNCLIENTS",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    {
                      parentName: "td",
                      href: "/Tutorials/TLS#tlsknownclients",
                    },
                    "TLS known clients for the server",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    '"tls-known-clients"',
                  ),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "tlsclientcert",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_TLSCLIENTCERT",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "/Tutorials/TLS#tlsclientcert" },
                    "Client TLS certificate",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    '"tls-client-cert.pem"',
                  ),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "tlsclientchain",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_TLSCLIENTCHAIN",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "/Tutorials/TLS#tlsclientchain" },
                    "Files that make up the CA trust chain",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "[]"),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "tlsclientkey"),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_TLSCLIENTKEY",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "/Tutorials/TLS#tlsclientkey" },
                    "Private key for the client TLS certificate",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    '"tls-client-key.pem"',
                  ),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "tlsclienttrust",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_TLSCLIENTTRUST",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "/Tutorials/TLS#tlsclienttrust" },
                    "TLS trust mode for the client",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, '"ca-or-tofu"'),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "tlsknownservers",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_TLSKNOWNSERVERS",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    {
                      parentName: "td",
                      href: "/Tutorials/TLS#tlsknownservers",
                    },
                    "TLS known servers for the client",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    '"tls-known-servers"',
                  ),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "clientconnectiontls",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_CLIENTCONNECTIONTLS",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    { parentName: "td", href: "/Tutorials/TLS" },
                    "TLS status options",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, '"off"'),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "clientconnectiontlsservercert",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_CLIENTCONNECTIONTLSSERVERCERT",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    {
                      parentName: "td",
                      href: "/Tutorials/TLS#clientconnectiontlsservercert",
                    },
                    "Server TLS certificate",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    '"client-connection-tls-server-cert.pem"',
                  ),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "clientconnectiontlsserverchain",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_CLIENTCONNECTIONTLSSERVERCHAIN",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    {
                      parentName: "td",
                      href: "/Tutorials/TLS#clientconnectiontlsserverchain",
                    },
                    "Files that make up the CA trust chain",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "[]"),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "clientconnectiontlsserverkey",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_CLIENTCONNECTIONTLSSERVERKEY",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    {
                      parentName: "td",
                      href: "/Tutorials/TLS#clientconnectiontlsserverkey",
                    },
                    "Private key for the server TLS certificate",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    '"client-connection-tls-server-key.pem"',
                  ),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "clientconnectionTlsServerTrust",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_CLIENTCONNECTIONTLSSERVERTRUST",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    {
                      parentName: "td",
                      href: "/Tutorials/TLS#clientconnectiontlsservertrust",
                    },
                    "TLS trust mode for the server",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)("inlineCode", { parentName: "td" }, '"tofu"'),
                ),
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "clientconnectiontlsknownclients",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Optional",
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "ORION_CLIENTCONNECTIONTLSKNOWNCLIENTS",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "a",
                    {
                      parentName: "td",
                      href: "/Tutorials/TLS#clientconnectiontlsknownclients",
                    },
                    "TLS known clients for the server",
                  ),
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    '"client-connection-tls-known-clients"',
                  ),
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "libsodiumpath" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "libsodiumpath"),
          ),
          (0, r.kt)(
            "p",
            null,
            "Depends on the operational system. Check the class LibSodiumSettings for more details.",
          ),
          (0, r.kt)(
            "h3",
            { id: "alwayssendto" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "alwayssendto"),
          ),
          (0, r.kt)(
            "p",
            null,
            "Specifies list of files containing public keys to include as a recipient for every transaction sent\nthrough the node (for example, for backup purposes). The specified public keys must be advertised by an\nOrion node on the network. That is, there must be an Orion node with the specified public keys included in the node\n",
            (0, r.kt)("inlineCode", { parentName: "p" }, "publickeys"),
            " list.",
          ),
          (0, r.kt)("h3", { id: "passwords" }, "passwords"),
          (0, r.kt)(
            "p",
            null,
            "File contains one password per line. Include an empty line for keys that are not locked.",
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
