"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [947],
  {
    3905: (e, t, r) => {
      r.d(t, { Zo: () => u, kt: () => g });
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
      function i(e) {
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
      function s(e, t) {
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
      var l = n.createContext({}),
        p = function (e) {
          var t = n.useContext(l),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : i(i({}, t), e)), r;
        },
        u = function (e) {
          var t = p(e.components);
          return n.createElement(l.Provider, { value: t }, e.children);
        },
        c = "mdxType",
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        m = n.forwardRef(function (e, t) {
          var r = e.components,
            o = e.mdxType,
            a = e.originalType,
            l = e.parentName,
            u = s(e, ["components", "mdxType", "originalType", "parentName"]),
            c = p(r),
            m = o,
            g = c["".concat(l, ".").concat(m)] || c[m] || d[m] || a;
          return r
            ? n.createElement(g, i(i({ ref: t }, u), {}, { components: r }))
            : n.createElement(g, i({ ref: t }, u));
        });
      function g(e, t) {
        var r = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var a = r.length,
            i = new Array(a);
          i[0] = m;
          var s = {};
          for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
          (s.originalType = e),
            (s[c] = "string" == typeof e ? e : o),
            (i[1] = s);
          for (var p = 2; p < a; p++) i[p] = r[p];
          return n.createElement.apply(null, i);
        }
        return n.createElement.apply(null, r);
      }
      m.displayName = "MDXCreateElement";
    },
    5462: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => l,
          contentTitle: () => i,
          default: () => c,
          frontMatter: () => a,
          metadata: () => s,
          toc: () => p,
        });
      var n = r(7462),
        o = (r(7294), r(3905));
      const a = {
          title: "Use PostgreSQL",
          description: "Storing Information with PostgreSQL",
          sidebar_position: 2,
        },
        i = "Store information with PostgreSQL",
        s = {
          unversionedId: "Tutorials/Using-PostgreSQL",
          id: "Tutorials/Using-PostgreSQL",
          title: "Use PostgreSQL",
          description: "Storing Information with PostgreSQL",
          source: "@site/docs/Tutorials/Using-PostgreSQL.md",
          sourceDirName: "Tutorials",
          slug: "/Tutorials/Using-PostgreSQL",
          permalink: "/Tutorials/Using-PostgreSQL",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/Tutorials/Using-PostgreSQL.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Nicolas MASSART",
          lastUpdatedAt: 1602242872,
          formattedLastUpdatedAt: "Oct 9, 2020",
          sidebarPosition: 2,
          frontMatter: {
            title: "Use PostgreSQL",
            description: "Storing Information with PostgreSQL",
            sidebar_position: 2,
          },
          sidebar: "docSidebar",
          previous: {
            title: "Use Oracle",
            permalink: "/Tutorials/Using-Oracle",
          },
          next: { title: "TLS", permalink: "/Tutorials/TLS" },
        },
        l = {},
        p = [
          { value: "Prerequisites", id: "prerequisites", level: 2 },
          {
            value: "Set up your PostgreSQL database",
            id: "set-up-your-postgresql-database",
            level: 2,
          },
          {
            value: "Configure Orion to use PostgreSQL",
            id: "configure-orion-to-use-postgresql",
            level: 2,
          },
          {
            value: "Test your updated configuration",
            id: "test-your-updated-configuration",
            level: 2,
          },
        ],
        u = { toc: p };
      function c(e) {
        let { components: t, ...r } = e;
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)(
            "h1",
            { id: "store-information-with-postgresql" },
            "Store information with PostgreSQL",
          ),
          (0, o.kt)(
            "p",
            null,
            "PostgreSQL is an object-relational database you can use to store private transaction payloads for Orion. Use a relational database to support your ",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "/Concepts/Disaster-Recovery" },
              "disaster recovery strategy",
            ),
            ".",
          ),
          (0, o.kt)("h2", { id: "prerequisites" }, "Prerequisites"),
          (0, o.kt)(
            "ul",
            null,
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)(
                "a",
                { parentName: "li", href: "https://www.postgresql.org/" },
                "PostgreSQL",
              ),
            ),
          ),
          (0, o.kt)(
            "h2",
            { id: "set-up-your-postgresql-database" },
            "Set up your PostgreSQL database",
          ),
          (0, o.kt)("p", null, "In your database:"),
          (0, o.kt)(
            "ol",
            null,
            (0, o.kt)(
              "li",
              { parentName: "ol" },
              (0, o.kt)(
                "p",
                { parentName: "li" },
                "Create the ",
                (0, o.kt)("inlineCode", { parentName: "p" }, "store"),
                " table by using the provided DDL script, as shown in the following example.\nSubstitute your own values for ",
                (0, o.kt)("inlineCode", { parentName: "p" }, "HOST-NAME"),
                ", ",
                (0, o.kt)("inlineCode", { parentName: "p" }, "USER-NAME"),
                ", and ",
                (0, o.kt)("inlineCode", { parentName: "p" }, "DATABASE-NAME"),
                ".",
              ),
              (0, o.kt)(
                "pre",
                { parentName: "li" },
                (0, o.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "psql -h <HOST-NAME> -U <USER-NAME> -d <DATABASE-NAME> -f ~<INSTALLATION_DIRECTORY>/orion/database/postgres_ddl.sql\n",
                ),
              ),
            ),
            (0, o.kt)(
              "li",
              { parentName: "ol" },
              (0, o.kt)(
                "p",
                { parentName: "li" },
                "Specify the users for the ",
                (0, o.kt)("inlineCode", { parentName: "p" }, "store"),
                " table and assign permissions to them.",
              ),
            ),
          ),
          (0, o.kt)(
            "h2",
            { id: "configure-orion-to-use-postgresql" },
            "Configure Orion to use PostgreSQL",
          ),
          (0, o.kt)(
            "p",
            null,
            "In your ",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "/Reference/Configuration-File" },
              "Orion configuration file",
            ),
            ", specify ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "postgresql"),
            " for the ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "storage"),
            " property, as shown in the following example. Substitute your own values for ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "HOST"),
            ", ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "PORT"),
            ", ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "DATABASE-NAME"),
            ", ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "USER-NAME"),
            ", and ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "PASSWORD"),
            ".",
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              'storage="sql:jdbc:postgresql://<HOST>:<PORT>/<DATABASE-NAME>?user=<USER-NAME>&password=<PASSWORD>"\n',
            ),
          ),
          (0, o.kt)(
            "h2",
            { id: "test-your-updated-configuration" },
            "Test your updated configuration",
          ),
          (0, o.kt)(
            "ol",
            null,
            (0, o.kt)(
              "li",
              { parentName: "ol" },
              (0, o.kt)(
                "p",
                { parentName: "li" },
                "Send the payload to Orion by running the following request:",
              ),
              (0, o.kt)(
                "pre",
                { parentName: "li" },
                (0, o.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  'curl -X POST \\\nhttp://localhost:8888/send \\\n-H \'Content-Type: application/json\' \\\n-d \'{\n      "payload": "SGVsbG8sIFdvcmxkIQ==",\n      "from": "<OrionPublicKey>",\n      "to": ["<OrionPublicKey>"]\n     }\'\n',
                ),
              ),
            ),
            (0, o.kt)(
              "li",
              { parentName: "ol" },
              (0, o.kt)(
                "p",
                { parentName: "li" },
                "Using ",
                (0, o.kt)("inlineCode", { parentName: "p" }, "psql"),
                ", the terminal-based front-end to PostgreSQL, retrieve the new row in the ",
                (0, o.kt)("inlineCode", { parentName: "p" }, "store"),
                " table.",
              ),
            ),
            (0, o.kt)(
              "li",
              { parentName: "ol" },
              (0, o.kt)(
                "p",
                { parentName: "li" },
                "Receive the payload by running the following request:",
              ),
              (0, o.kt)(
                "pre",
                { parentName: "li" },
                (0, o.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  ' curl -X POST \\\n http://localhost:8888/receive \\\n -H \'Content-Type: application/json\' \\\n -d \'{\n      "key": "<KEY-RETURNED-IN-STEP-1>",\n       "to": "<OrionPublicKey>"\n     }\'\n',
                ),
              ),
            ),
            (0, o.kt)(
              "li",
              { parentName: "ol" },
              (0, o.kt)(
                "p",
                { parentName: "li" },
                "Using ",
                (0, o.kt)("inlineCode", { parentName: "p" }, "psql"),
                ", retrieve the data in the ",
                (0, o.kt)("inlineCode", { parentName: "p" }, "store"),
                " table.",
              ),
            ),
          ),
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
