"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [349],
  {
    3905: (e, t, a) => {
      a.d(t, { Zo: () => p, kt: () => g });
      var n = a(7294);
      function r(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function i(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(a), !0).forEach(function (t) {
                r(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : i(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t),
                );
              });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (a = i[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]));
        }
        return r;
      }
      var l = n.createContext({}),
        u = function (e) {
          var t = n.useContext(l),
            a = t;
          return e && (a = "function" == typeof e ? e(t) : o(o({}, t), e)), a;
        },
        p = function (e) {
          var t = u(e.components);
          return n.createElement(l.Provider, { value: t }, e.children);
        },
        d = "mdxType",
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        m = n.forwardRef(function (e, t) {
          var a = e.components,
            r = e.mdxType,
            i = e.originalType,
            l = e.parentName,
            p = s(e, ["components", "mdxType", "originalType", "parentName"]),
            d = u(a),
            m = r,
            g = d["".concat(l, ".").concat(m)] || d[m] || c[m] || i;
          return a
            ? n.createElement(g, o(o({ ref: t }, p), {}, { components: a }))
            : n.createElement(g, o({ ref: t }, p));
        });
      function g(e, t) {
        var a = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var i = a.length,
            o = new Array(i);
          o[0] = m;
          var s = {};
          for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
          (s.originalType = e),
            (s[d] = "string" == typeof e ? e : r),
            (o[1] = s);
          for (var u = 2; u < i; u++) o[u] = a[u];
          return n.createElement.apply(null, o);
        }
        return n.createElement.apply(null, a);
      }
      m.displayName = "MDXCreateElement";
    },
    5162: (e, t, a) => {
      a.d(t, { Z: () => o });
      var n = a(7294),
        r = a(6010);
      const i = "tabItem_Ymn6";
      function o(e) {
        let { children: t, hidden: a, className: o } = e;
        return n.createElement(
          "div",
          { role: "tabpanel", className: (0, r.Z)(i, o), hidden: a },
          t,
        );
      }
    },
    4866: (e, t, a) => {
      a.d(t, { Z: () => w });
      var n = a(7462),
        r = a(7294),
        i = a(6010),
        o = a(2466),
        s = a(6550),
        l = a(1980),
        u = a(7392),
        p = a(12);
      function d(e) {
        return (function (e) {
          return r.Children.map(e, (e) => {
            if ((0, r.isValidElement)(e) && "value" in e.props) return e;
            throw new Error(
              `Docusaurus error: Bad <Tabs> child <${
                "string" == typeof e.type ? e.type : e.type.name
              }>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`,
            );
          });
        })(e).map((e) => {
          let {
            props: { value: t, label: a, attributes: n, default: r },
          } = e;
          return { value: t, label: a, attributes: n, default: r };
        });
      }
      function c(e) {
        const { values: t, children: a } = e;
        return (0, r.useMemo)(() => {
          const e = t ?? d(a);
          return (
            (function (e) {
              const t = (0, u.l)(e, (e, t) => e.value === t.value);
              if (t.length > 0)
                throw new Error(
                  `Docusaurus error: Duplicate values "${t
                    .map((e) => e.value)
                    .join(
                      ", ",
                    )}" found in <Tabs>. Every value needs to be unique.`,
                );
            })(e),
            e
          );
        }, [t, a]);
      }
      function m(e) {
        let { value: t, tabValues: a } = e;
        return a.some((e) => e.value === t);
      }
      function g(e) {
        let { queryString: t = !1, groupId: a } = e;
        const n = (0, s.k6)(),
          i = (function (e) {
            let { queryString: t = !1, groupId: a } = e;
            if ("string" == typeof t) return t;
            if (!1 === t) return null;
            if (!0 === t && !a)
              throw new Error(
                'Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".',
              );
            return a ?? null;
          })({ queryString: t, groupId: a });
        return [
          (0, l._X)(i),
          (0, r.useCallback)(
            (e) => {
              if (!i) return;
              const t = new URLSearchParams(n.location.search);
              t.set(i, e), n.replace({ ...n.location, search: t.toString() });
            },
            [i, n],
          ),
        ];
      }
      function f(e) {
        const { defaultValue: t, queryString: a = !1, groupId: n } = e,
          i = c(e),
          [o, s] = (0, r.useState)(() =>
            (function (e) {
              let { defaultValue: t, tabValues: a } = e;
              if (0 === a.length)
                throw new Error(
                  "Docusaurus error: the <Tabs> component requires at least one <TabItem> children component",
                );
              if (t) {
                if (!m({ value: t, tabValues: a }))
                  throw new Error(
                    `Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a
                      .map((e) => e.value)
                      .join(
                        ", ",
                      )}. If you intend to show no default tab, use defaultValue={null} instead.`,
                  );
                return t;
              }
              const n = a.find((e) => e.default) ?? a[0];
              if (!n) throw new Error("Unexpected error: 0 tabValues");
              return n.value;
            })({ defaultValue: t, tabValues: i }),
          ),
          [l, u] = g({ queryString: a, groupId: n }),
          [d, f] = (function (e) {
            let { groupId: t } = e;
            const a = (function (e) {
                return e ? `docusaurus.tab.${e}` : null;
              })(t),
              [n, i] = (0, p.Nk)(a);
            return [
              n,
              (0, r.useCallback)(
                (e) => {
                  a && i.set(e);
                },
                [a, i],
              ),
            ];
          })({ groupId: n }),
          b = (() => {
            const e = l ?? d;
            return m({ value: e, tabValues: i }) ? e : null;
          })();
        (0, r.useLayoutEffect)(() => {
          b && s(b);
        }, [b]);
        return {
          selectedValue: o,
          selectValue: (0, r.useCallback)(
            (e) => {
              if (!m({ value: e, tabValues: i }))
                throw new Error(`Can't select invalid tab value=${e}`);
              s(e), u(e), f(e);
            },
            [u, f, i],
          ),
          tabValues: i,
        };
      }
      var b = a(2389);
      const h = "tabList__CuJ",
        k = "tabItem_LNqP";
      function y(e) {
        let {
          className: t,
          block: a,
          selectedValue: s,
          selectValue: l,
          tabValues: u,
        } = e;
        const p = [],
          { blockElementScrollPositionUntilNextRender: d } = (0, o.o5)(),
          c = (e) => {
            const t = e.currentTarget,
              a = p.indexOf(t),
              n = u[a].value;
            n !== s && (d(t), l(n));
          },
          m = (e) => {
            let t = null;
            switch (e.key) {
              case "Enter":
                c(e);
                break;
              case "ArrowRight": {
                const a = p.indexOf(e.currentTarget) + 1;
                t = p[a] ?? p[0];
                break;
              }
              case "ArrowLeft": {
                const a = p.indexOf(e.currentTarget) - 1;
                t = p[a] ?? p[p.length - 1];
                break;
              }
            }
            t?.focus();
          };
        return r.createElement(
          "ul",
          {
            role: "tablist",
            "aria-orientation": "horizontal",
            className: (0, i.Z)("tabs", { "tabs--block": a }, t),
          },
          u.map((e) => {
            let { value: t, label: a, attributes: o } = e;
            return r.createElement(
              "li",
              (0, n.Z)(
                {
                  role: "tab",
                  tabIndex: s === t ? 0 : -1,
                  "aria-selected": s === t,
                  key: t,
                  ref: (e) => p.push(e),
                  onKeyDown: m,
                  onClick: c,
                },
                o,
                {
                  className: (0, i.Z)("tabs__item", k, o?.className, {
                    "tabs__item--active": s === t,
                  }),
                },
              ),
              a ?? t,
            );
          }),
        );
      }
      function v(e) {
        let { lazy: t, children: a, selectedValue: n } = e;
        if (((a = Array.isArray(a) ? a : [a]), t)) {
          const e = a.find((e) => e.props.value === n);
          return e
            ? (0, r.cloneElement)(e, { className: "margin-top--md" })
            : null;
        }
        return r.createElement(
          "div",
          { className: "margin-top--md" },
          a.map((e, t) =>
            (0, r.cloneElement)(e, { key: t, hidden: e.props.value !== n }),
          ),
        );
      }
      function T(e) {
        const t = f(e);
        return r.createElement(
          "div",
          { className: (0, i.Z)("tabs-container", h) },
          r.createElement(y, (0, n.Z)({}, e, t)),
          r.createElement(v, (0, n.Z)({}, e, t)),
        );
      }
      function w(e) {
        const t = (0, b.Z)();
        return r.createElement(T, (0, n.Z)({ key: String(t) }, e));
      }
    },
    8912: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => s,
          metadata: () => u,
          toc: () => d,
        });
      var n = a(7462),
        r = (a(7294), a(3905)),
        i = a(4866),
        o = a(5162);
      const s = {
          title: "Migrating from Orion to Tessera",
          description: "Migrate your Orion configuration and data to Tessera.",
          sidebar_position: 5,
        },
        l = "Migrating from Orion to Tessera",
        u = {
          unversionedId: "Tutorials/Migrating-from-Orion-to-Tessera",
          id: "Tutorials/Migrating-from-Orion-to-Tessera",
          title: "Migrating from Orion to Tessera",
          description: "Migrate your Orion configuration and data to Tessera.",
          source: "@site/docs/Tutorials/Migrating-from-Orion-to-Tessera.md",
          sourceDirName: "Tutorials",
          slug: "/Tutorials/Migrating-from-Orion-to-Tessera",
          permalink: "/Tutorials/Migrating-from-Orion-to-Tessera",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/Tutorials/Migrating-from-Orion-to-Tessera.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Alexandra Tran",
          lastUpdatedAt: 1630371664,
          formattedLastUpdatedAt: "Aug 31, 2021",
          sidebarPosition: 5,
          frontMatter: {
            title: "Migrating from Orion to Tessera",
            description:
              "Migrate your Orion configuration and data to Tessera.",
            sidebar_position: 5,
          },
          sidebar: "docSidebar",
          previous: {
            title: "Generate Orion Certificates",
            permalink: "/Tutorials/Generating-Certificates",
          },
          next: {
            title: "Quorum Developer Quickstart",
            permalink: "/Tutorials/Quorum-Dev-Quickstart",
          },
        },
        p = {},
        d = [
          { value: "Migration Process", id: "migration-process", level: 2 },
          {
            value: "Build Migration Utility",
            id: "build-migration-utility",
            level: 2,
          },
          {
            value: "Download Migration Utility",
            id: "download-migration-utility",
            level: 2,
          },
          { value: "Verify Installation", id: "verify-installation", level: 2 },
          { value: "Migrate", id: "migrate", level: 2 },
          {
            value: "Verify State and Stop Services",
            id: "verify-state-and-stop-services",
            level: 3,
          },
          { value: "Run Migration", id: "run-migration", level: 3 },
          {
            value: "Restart Services and Verify State",
            id: "restart-services-and-verify-state",
            level: 3,
          },
          { value: "Options", id: "options", level: 3 },
        ],
        c = { toc: d };
      function m(e) {
        let { components: t, ...a } = e;
        return (0, r.kt)(
          "wrapper",
          (0, n.Z)({}, c, a, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)(
            "h1",
            { id: "migrating-from-orion-to-tessera" },
            "Migrating from Orion to Tessera",
          ),
          (0, r.kt)("h2", { id: "migration-process" }, "Migration Process"),
          (0, r.kt)(
            "p",
            null,
            "We recommend use of Tessera as a drop-in replacement private transaction manager in place of Orion.\nAs Tessera supports the same endpoints and functionality, nothing needs to be changed in your Besu deployment to migrate.\nHowever, as Orion and Tessera can not communicate, you must stop all privacy-enabled Besu nodes in the network to perform the migration.\nBesu nodes without an associated private transaction manager can remain live during this time.",
          ),
          (0, r.kt)(
            "p",
            null,
            "A utility is included in Tessera which enables migration of an Orion configuration\nfile and database to a Tessera configuration file and database.",
          ),
          (0, r.kt)(
            "p",
            null,
            "A full migration workflow would be as follows:",
          ),
          (0, r.kt)(
            "ol",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              (0, r.kt)(
                "a",
                { parentName: "li", href: "#build-migration-utility" },
                "Build",
              ),
              " or ",
              (0, r.kt)(
                "a",
                { parentName: "li", href: "#download-migration-utility" },
                "download",
              ),
              " the migration utility.",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              "Shut down all privacy-enabled Besu nodes and Orion instances in the network (non-privacy-enabled nodes can remain active).",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              "Perform ",
              (0, r.kt)(
                "a",
                { parentName: "li", href: "#migrate" },
                "configuration and database migration",
              ),
              ".",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              "Start Tessera instances with the new configuration and database files.",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              "Restart all privacy-enabled Besu nodes in the network.",
            ),
          ),
          (0, r.kt)(
            "h2",
            { id: "build-migration-utility" },
            "Build Migration Utility",
          ),
          (0, r.kt)(
            "p",
            null,
            "The utility can be built from the ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "https://github.com/ConsenSys/tessera/",
              },
              "Tessera repository",
            ),
            ".",
          ),
          (0, r.kt)("p", null, "First clone the Tessera repository:"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "git clone https://github.com/ConsenSys/tessera\n",
            ),
          ),
          (0, r.kt)("p", null, "Navigate to the project root directory:"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "cd tessera\n",
            ),
          ),
          (0, r.kt)(
            "p",
            null,
            "Build the migration utility with the Gradle wrapper ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "gradlew"),
            ":",
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "./gradlew clean migration:orion-to-tessera:installDist -x test\n",
            ),
          ),
          (0, r.kt)(
            "h2",
            { id: "download-migration-utility" },
            "Download Migration Utility",
          ),
          (0, r.kt)(
            "p",
            null,
            "  Or download the migration utility binaries, which are available at the following download links: ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "https://github.com/ConsenSys/tessera/releases/download/tessera-21.1.1/migrate-21.1.1.zip",
              },
              ".zip",
            ),
            "\nand ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "https://github.com/ConsenSys/tessera/releases/download/tessera-21.1.1/migrate-21.1.1.tar",
              },
              ".tar",
            ),
            ".",
          ),
          (0, r.kt)("h2", { id: "verify-installation" }, "Verify Installation"),
          (0, r.kt)(
            "p",
            null,
            "Verify the installation by running the migration utility with the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "--help"),
            " flag.",
          ),
          (0, r.kt)(
            i.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              o.Z,
              { label: "Command", value: "tab1", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "./bin/migrate --help\n",
                ),
              ),
            ),
            (0, r.kt)(
              o.Z,
              { label: "Result", value: "tab2", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "./bin/migrate --help\nUsage: orion-to-tessera/bin/migrate [-h] -f=Orion config file -o=<outputFile>\n                                tessera.jdbc.password=<password> tessera.\n                                jdbc.url=<url> tessera.jdbc.user=<username>\n-f, orionfile, orionconfig=Orion config file\n                    Orion config file\n-h, help, --help   Print this message\n-o, outputfile=<outputFile>\n                    Output Tessera config file\n    tessera.jdbc.password=<password>\n                    Target Tessera DB password\n    tessera.jdbc.url=<url>\n                    Target Tessera DB JDBC connection string\n    tessera.jdbc.user=<username>\n                    Target Tessera DB username\n",
                ),
              ),
            ),
          ),
          (0, r.kt)("h2", { id: "migrate" }, "Migrate"),
          (0, r.kt)(
            "p",
            null,
            "By default Tessera uses an H2 database. However, you can configure alternative databases.\nRefer to the ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "https://github.com/consensys/tessera/tree/master/ddls/create-table",
              },
              "SQL Data Definition Language files",
            ),
            "\nfor help with other databases.",
          ),
          (0, r.kt)(
            "admonition",
            { title: "warning", type: "caution" },
            (0, r.kt)(
              "p",
              { parentName: "admonition" },
              "If migrating from an SQL database to Tessera, you must add the JDBC driver\nto the ",
              (0, r.kt)("inlineCode", { parentName: "p" }, "CLASSPATH"),
              " environment variable and to the start script at ",
              (0, r.kt)("inlineCode", { parentName: "p" }, "./bin/migrate"),
              ".",
            ),
          ),
          (0, r.kt)(
            "admonition",
            { type: "note" },
            (0, r.kt)(
              "p",
              { parentName: "admonition" },
              "Password protected keys are migrated to the Tessera format as part of the migration. The original Orion format keys are renamed with a ",
              (0, r.kt)("inlineCode", { parentName: "p" }, ".orion"),
              " suffix.",
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "verify-state-and-stop-services" },
            "Verify State and Stop Services",
          ),
          (0, r.kt)(
            "p",
            null,
            "Verify the private state root and private transaction count on your Besu and Orion network using ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "https://besu.hyperledger.org/en/latest/Reference/API-Methods/#priv_debugGetStateRoot",
              },
              (0, r.kt)(
                "inlineCode",
                { parentName: "a" },
                "priv_debugGetStateRoot",
              ),
            ),
          ),
          (0, r.kt)(
            i.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              o.Z,
              { label: "Request", value: "tab1", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-json" },
                  '{\n    "jsonrpc": "2.0",\n    "method": "priv_debugGetStateRoot",\n    "params": [\n        "MC4aHjApHsGb0j5glU2iAj5KcR5LId52S0BU9mtdeuY=",\n        "latest"\n    ],\n    "id": 1\n}\n',
                ),
              ),
            ),
            (0, r.kt)(
              o.Z,
              { label: "Result", value: "tab2", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-json" },
                  '{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": "0x69904cc3945ada15579fa6f7f1c95e31555210ac017646b4a1373412281dce82"\n}\n\n',
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "p",
            null,
            "and then ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "https://besu.hyperledger.org/en/latest/Reference/API-Methods/#priv_getTransactionCount",
              },
              (0, r.kt)(
                "inlineCode",
                { parentName: "a" },
                "priv_getTransactionCount",
              ),
            ),
            ".",
          ),
          (0, r.kt)(
            i.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              o.Z,
              { label: "Request", value: "tab1", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-json" },
                  '{\n    "jsonrpc": "2.0",\n    "method": "priv_getTransactionCount",\n    "params": [\n        "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",\n        "67NmE7/94nuomQiZv/g19BzyhhX84kwJo3lr5+n43xI="\n    ],\n    "id": 1\n}\n',
                ),
              ),
            ),
            (0, r.kt)(
              o.Z,
              { label: "Result", value: "tab2", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-json" },
                  '{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": "0xb4"\n}\n',
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "p",
            null,
            "After recording the state root and transaction count, stop your Besu and Orion nodes.",
          ),
          (0, r.kt)("h3", { id: "run-migration" }, "Run Migration"),
          (0, r.kt)(
            "p",
            null,
            "Begin the migration by running ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "migrate"),
            " with all required options.\nSubstitute ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "Orion config file"),
            ", ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "outputFile"),
            ", ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "password"),
            ", ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "url"),
            " and ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "username"),
            " with your own values.",
          ),
          (0, r.kt)(
            "admonition",
            { title: "important", type: "info" },
            (0, r.kt)(
              "p",
              { parentName: "admonition" },
              "To ensure you have the correct database path, run the migration tool from the same directory in which Orion was running.\nAlternatively, modify the ",
              (0, r.kt)(
                "a",
                { parentName: "p", href: "/Reference/Configuration-File" },
                "Orion configuration file",
              ),
              " to add ",
              (0, r.kt)("inlineCode", { parentName: "p" }, "storage"),
              " and\n",
              (0, r.kt)("inlineCode", { parentName: "p" }, "workdir"),
              " parameters with absolute paths.",
            ),
          ),
          (0, r.kt)(
            i.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              o.Z,
              { label: "Request", value: "tab1", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "./bin/migrate -f <Orion config file> -o <outputFile> tessera.jdbc.password <password> tessera.jdbc.url <url> tessera.jdbc.user <username>\n",
                ),
              ),
            ),
            (0, r.kt)(
              o.Z,
              { label: "Example", value: "tab2", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  './bin/migrate -f "orion.conf" -o="tessera-migrated.conf" tessera.jdbc.password "My Secret Pass" tessera.jdbc.url "jdbc:h2:tessera1" tessera.jdbc.user "user1"\n',
                ),
              ),
            ),
            (0, r.kt)(
              o.Z,
              { label: "Result", value: "tab3", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "=== Migration report ===\nMigrated 2156 of 2156 transactions\nMigrated 56 of 56 privacy groups\n",
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "p",
            null,
            "On a successful migration, the count of transactions and privacy groups migrated will match expected values.",
          ),
          (0, r.kt)(
            "h3",
            { id: "restart-services-and-verify-state" },
            "Restart Services and Verify State",
          ),
          (0, r.kt)(
            "p",
            null,
            "Start Besu and Tessera using the new Tessera configuration file and database.",
          ),
          (0, r.kt)(
            "p",
            null,
            "Verify the private state root and private transaction count on your Besu and Tessera network using ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "https://besu.hyperledger.org/en/latest/Reference/API-Methods/#priv_debugGetStateRoot",
              },
              (0, r.kt)(
                "inlineCode",
                { parentName: "a" },
                "priv_debugGetStateRoot",
              ),
            ),
            " and ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "https://besu.hyperledger.org/en/latest/Reference/API-Methods/#priv_getTransactionCount",
              },
              (0, r.kt)(
                "inlineCode",
                { parentName: "a" },
                "priv_getTransactionCount",
              ),
            ),
            ".",
          ),
          (0, r.kt)(
            "p",
            null,
            "It should give identical results to ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "#verify-state-and-stop-services" },
              "those collected earlier",
            ),
            ".",
          ),
          (0, r.kt)("h3", { id: "options" }, "Options"),
          (0, r.kt)(
            "p",
            null,
            "You must specify the following options in order to run the migration tool:",
          ),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "Orion config file"),
            "= Orion configuration file location",
          ),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "outputFile"),
            "= Target Tessera configuration file location",
          ),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "username"),
            "= Target Tessera database username",
          ),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "password"),
            "= Target Tessera database password",
          ),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "url"),
            "= Target Tessera database JDBC connection string",
          ),
          (0, r.kt)("h1", { id: "enterprise-support" }, "Enterprise support"),
          (0, r.kt)(
            "p",
            null,
            "If you require support to undertake this process or any other use of ConsenSys Quorum software,\nConsenSys offers support subscriptions for Quorum to accelerate time to market and provide confidence in production networks.\nVisit the following site to find out more: ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "https://consensys.net/quorum/support/",
              },
              "ConsenSys Quorum Support",
            ),
            ".",
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
