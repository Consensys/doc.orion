"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [732],
  {
    3905: (e, t, r) => {
      r.d(t, { Zo: () => c, kt: () => f });
      var n = r(7294);
      function a(e, t, r) {
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
      function o(e, t) {
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
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
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var s = n.createContext({}),
        p = function (e) {
          var t = n.useContext(s),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : i(i({}, t), e)), r;
        },
        c = function (e) {
          var t = p(e.components);
          return n.createElement(s.Provider, { value: t }, e.children);
        },
        u = "mdxType",
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        m = n.forwardRef(function (e, t) {
          var r = e.components,
            a = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            c = l(e, ["components", "mdxType", "originalType", "parentName"]),
            u = p(r),
            m = a,
            f = u["".concat(s, ".").concat(m)] || u[m] || d[m] || o;
          return r
            ? n.createElement(f, i(i({ ref: t }, c), {}, { components: r }))
            : n.createElement(f, i({ ref: t }, c));
        });
      function f(e, t) {
        var r = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var o = r.length,
            i = new Array(o);
          i[0] = m;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e),
            (l[u] = "string" == typeof e ? e : a),
            (i[1] = l);
          for (var p = 2; p < o; p++) i[p] = r[p];
          return n.createElement.apply(null, i);
        }
        return n.createElement.apply(null, r);
      }
      m.displayName = "MDXCreateElement";
    },
    973: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => s,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => p,
        });
      var n = r(7462),
        a = (r(7294), r(3905));
      const o = {
          title: "Use Oracle",
          description: "Storing Information with Oracle",
          sidebar_position: 1,
        },
        i = "Store information with Oracle",
        l = {
          unversionedId: "Tutorials/Using-Oracle",
          id: "Tutorials/Using-Oracle",
          title: "Use Oracle",
          description: "Storing Information with Oracle",
          source: "@site/docs/Tutorials/Using-Oracle.md",
          sourceDirName: "Tutorials",
          slug: "/Tutorials/Using-Oracle",
          permalink: "/Tutorials/Using-Oracle",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/Tutorials/Using-Oracle.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Nicolas MASSART",
          lastUpdatedAt: 1600856978,
          formattedLastUpdatedAt: "Sep 23, 2020",
          sidebarPosition: 1,
          frontMatter: {
            title: "Use Oracle",
            description: "Storing Information with Oracle",
            sidebar_position: 1,
          },
          sidebar: "docSidebar",
          previous: { title: "Tutorials", permalink: "/category/tutorials" },
          next: {
            title: "Use PostgreSQL",
            permalink: "/Tutorials/Using-PostgreSQL",
          },
        },
        s = {},
        p = [
          { value: "Prerequisites", id: "prerequisites", level: 2 },
          {
            value: "Set up your Oracle database",
            id: "set-up-your-oracle-database",
            level: 2,
          },
          {
            value: "Configure Orion to use Oracle",
            id: "configure-orion-to-use-oracle",
            level: 2,
          },
          {
            value: "Test your updated configuration",
            id: "test-your-updated-configuration",
            level: 2,
          },
        ],
        c = { toc: p };
      function u(e) {
        let { components: t, ...r } = e;
        return (0, a.kt)(
          "wrapper",
          (0, n.Z)({}, c, r, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)(
            "h1",
            { id: "store-information-with-oracle" },
            "Store information with Oracle",
          ),
          (0, a.kt)(
            "p",
            null,
            "Oracle is an object-relational database you can use to store private transaction payloads for Orion. Use a relational database to support your ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/Concepts/Disaster-Recovery" },
              "disaster recovery strategy",
            ),
            ".",
          ),
          (0, a.kt)("h2", { id: "prerequisites" }, "Prerequisites"),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                { parentName: "li", href: "https://docs.oracle.com/en/" },
                "Oracle Database",
              ),
            ),
          ),
          (0, a.kt)(
            "h2",
            { id: "set-up-your-oracle-database" },
            "Set up your Oracle database",
          ),
          (0, a.kt)("p", null, "In your database:"),
          (0, a.kt)(
            "ol",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ol" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                "Create the ",
                (0, a.kt)("inlineCode", { parentName: "p" }, "store"),
                " table by using the provided DDL script, as shown in the following example.\nSubstitute your own values for ",
                (0, a.kt)("inlineCode", { parentName: "p" }, "USER-NAME"),
                ", ",
                (0, a.kt)("inlineCode", { parentName: "p" }, "PASSWORD"),
                ", ",
                (0, a.kt)("inlineCode", { parentName: "p" }, "DATABASE-NAME"),
                ", and ",
                (0, a.kt)(
                  "inlineCode",
                  { parentName: "p" },
                  "INSTALLATION-DIRECTORY",
                ),
                ".",
              ),
              (0, a.kt)(
                "pre",
                { parentName: "li" },
                (0, a.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  " sqlplus <USER-NAME>/<PASSWORD>@<DATABASE-NAME> @<INSTALLATION-DIRECTORY>/orion/database/oracle_ddl.sql\n",
                ),
              ),
            ),
            (0, a.kt)(
              "li",
              { parentName: "ol" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                "Specify the users for the ",
                (0, a.kt)("inlineCode", { parentName: "p" }, "store"),
                " table and assign permissions to them.",
              ),
            ),
          ),
          (0, a.kt)(
            "h2",
            { id: "configure-orion-to-use-oracle" },
            "Configure Orion to use Oracle",
          ),
          (0, a.kt)(
            "p",
            null,
            "In your ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/Reference/Configuration-File" },
              "Orion configuration file",
            ),
            ", specify ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "oracle"),
            "\nfor the ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "storage"),
            " property, as shown in the following example.\nSubstitute your own values for ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "USER-NAME"),
            ", ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "PASSWORD"),
            ", ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "HOST"),
            ", ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "PORT"),
            ", and ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "SID"),
            ". ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "SID"),
            "\nidentifies a specific Oracle database.",
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-toml" },
              'storage="jdbc:oracle:thin:<USER-NAME>, <PASSWORD>, <HOST>, <PORT>, <SID>"\n',
            ),
          ),
          (0, a.kt)(
            "h2",
            { id: "test-your-updated-configuration" },
            "Test your updated configuration",
          ),
          (0, a.kt)(
            "ol",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ol" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                "Send the payload to Orion by running the following request:",
              ),
              (0, a.kt)(
                "pre",
                { parentName: "li" },
                (0, a.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  'curl -X POST \\\nhttp://localhost:8888/send \\\n-H \'Content-Type: application/json\' \\\n-d \'{\n      "payload": "SGVsbG8sIFdvcmxkIQ==",\n      "from": "<KEY-IN-NODEKEY>.PUB",\n      "to": ["<KEY-IN-NODEKEY>.PUB"]\n     }\'\n',
                ),
              ),
            ),
            (0, a.kt)(
              "li",
              { parentName: "ol" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                "Using SQL*Plus, the terminal-based front-end to Oracle, retrieve the new row in the ",
                (0, a.kt)("inlineCode", { parentName: "p" }, "store"),
                " table.",
              ),
            ),
            (0, a.kt)(
              "li",
              { parentName: "ol" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                "Receive the payload by running the following request:",
              ),
              (0, a.kt)(
                "pre",
                { parentName: "li" },
                (0, a.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  ' curl -X POST \\\n http://localhost:8888/receive \\\n -H \'Content-Type: application/json\' \\\n -d \'{\n      "key": "<KEY-RETURNED-IN-STEP-1>",\n       "to": "<KEY-IN-NODEKEY>.PUB"\n     }\'\n',
                ),
              ),
            ),
            (0, a.kt)(
              "li",
              { parentName: "ol" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                "Using SQL*Plus, retrieve the data in the ",
                (0, a.kt)("inlineCode", { parentName: "p" }, "store"),
                " table.",
              ),
            ),
          ),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
