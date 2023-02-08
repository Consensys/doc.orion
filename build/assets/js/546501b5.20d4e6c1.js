"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [25],
  {
    3905: (e, n, t) => {
      t.d(n, { Zo: () => c, kt: () => f });
      var r = t(7294);
      function a(e, n, t) {
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
      function o(e, n) {
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
      function l(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? o(Object(t), !0).forEach(function (n) {
                a(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
        }
        return e;
      }
      function i(e, n) {
        if (null == e) return {};
        var t,
          r,
          a = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (t = o[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (a[t] = e[t]));
        }
        return a;
      }
      var s = r.createContext({}),
        u = function (e) {
          var n = r.useContext(s),
            t = n;
          return e && (t = "function" == typeof e ? e(n) : l(l({}, n), e)), t;
        },
        c = function (e) {
          var n = u(e.components);
          return r.createElement(s.Provider, { value: n }, e.children);
        },
        p = "mdxType",
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var n = e.children;
            return r.createElement(r.Fragment, {}, n);
          },
        },
        m = r.forwardRef(function (e, n) {
          var t = e.components,
            a = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            c = i(e, ["components", "mdxType", "originalType", "parentName"]),
            p = u(t),
            m = a,
            f = p["".concat(s, ".").concat(m)] || p[m] || d[m] || o;
          return t
            ? r.createElement(f, l(l({ ref: n }, c), {}, { components: t }))
            : r.createElement(f, l({ ref: n }, c));
        });
      function f(e, n) {
        var t = arguments,
          a = n && n.mdxType;
        if ("string" == typeof e || a) {
          var o = t.length,
            l = new Array(o);
          l[0] = m;
          var i = {};
          for (var s in n) hasOwnProperty.call(n, s) && (i[s] = n[s]);
          (i.originalType = e),
            (i[p] = "string" == typeof e ? e : a),
            (l[1] = i);
          for (var u = 2; u < o; u++) l[u] = t[u];
          return r.createElement.apply(null, l);
        }
        return r.createElement.apply(null, t);
      }
      m.displayName = "MDXCreateElement";
    },
    5162: (e, n, t) => {
      t.d(n, { Z: () => l });
      var r = t(7294),
        a = t(6010);
      const o = "tabItem_Ymn6";
      function l(e) {
        let { children: n, hidden: t, className: l } = e;
        return r.createElement(
          "div",
          { role: "tabpanel", className: (0, a.Z)(o, l), hidden: t },
          n,
        );
      }
    },
    4866: (e, n, t) => {
      t.d(n, { Z: () => w });
      var r = t(7462),
        a = t(7294),
        o = t(6010),
        l = t(2466),
        i = t(6550),
        s = t(1980),
        u = t(7392),
        c = t(12);
      function p(e) {
        return (function (e) {
          return a.Children.map(e, (e) => {
            if ((0, a.isValidElement)(e) && "value" in e.props) return e;
            throw new Error(
              `Docusaurus error: Bad <Tabs> child <${
                "string" == typeof e.type ? e.type : e.type.name
              }>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`,
            );
          });
        })(e).map((e) => {
          let {
            props: { value: n, label: t, attributes: r, default: a },
          } = e;
          return { value: n, label: t, attributes: r, default: a };
        });
      }
      function d(e) {
        const { values: n, children: t } = e;
        return (0, a.useMemo)(() => {
          const e = n ?? p(t);
          return (
            (function (e) {
              const n = (0, u.l)(e, (e, n) => e.value === n.value);
              if (n.length > 0)
                throw new Error(
                  `Docusaurus error: Duplicate values "${n
                    .map((e) => e.value)
                    .join(
                      ", ",
                    )}" found in <Tabs>. Every value needs to be unique.`,
                );
            })(e),
            e
          );
        }, [n, t]);
      }
      function m(e) {
        let { value: n, tabValues: t } = e;
        return t.some((e) => e.value === n);
      }
      function f(e) {
        let { queryString: n = !1, groupId: t } = e;
        const r = (0, i.k6)(),
          o = (function (e) {
            let { queryString: n = !1, groupId: t } = e;
            if ("string" == typeof n) return n;
            if (!1 === n) return null;
            if (!0 === n && !t)
              throw new Error(
                'Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".',
              );
            return t ?? null;
          })({ queryString: n, groupId: t });
        return [
          (0, s._X)(o),
          (0, a.useCallback)(
            (e) => {
              if (!o) return;
              const n = new URLSearchParams(r.location.search);
              n.set(o, e), r.replace({ ...r.location, search: n.toString() });
            },
            [o, r],
          ),
        ];
      }
      function b(e) {
        const { defaultValue: n, queryString: t = !1, groupId: r } = e,
          o = d(e),
          [l, i] = (0, a.useState)(() =>
            (function (e) {
              let { defaultValue: n, tabValues: t } = e;
              if (0 === t.length)
                throw new Error(
                  "Docusaurus error: the <Tabs> component requires at least one <TabItem> children component",
                );
              if (n) {
                if (!m({ value: n, tabValues: t }))
                  throw new Error(
                    `Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t
                      .map((e) => e.value)
                      .join(
                        ", ",
                      )}. If you intend to show no default tab, use defaultValue={null} instead.`,
                  );
                return n;
              }
              const r = t.find((e) => e.default) ?? t[0];
              if (!r) throw new Error("Unexpected error: 0 tabValues");
              return r.value;
            })({ defaultValue: n, tabValues: o }),
          ),
          [s, u] = f({ queryString: t, groupId: r }),
          [p, b] = (function (e) {
            let { groupId: n } = e;
            const t = (function (e) {
                return e ? `docusaurus.tab.${e}` : null;
              })(n),
              [r, o] = (0, c.Nk)(t);
            return [
              r,
              (0, a.useCallback)(
                (e) => {
                  t && o.set(e);
                },
                [t, o],
              ),
            ];
          })({ groupId: r }),
          h = (() => {
            const e = s ?? p;
            return m({ value: e, tabValues: o }) ? e : null;
          })();
        (0, a.useLayoutEffect)(() => {
          h && i(h);
        }, [h]);
        return {
          selectedValue: l,
          selectValue: (0, a.useCallback)(
            (e) => {
              if (!m({ value: e, tabValues: o }))
                throw new Error(`Can't select invalid tab value=${e}`);
              i(e), u(e), b(e);
            },
            [u, b, o],
          ),
          tabValues: o,
        };
      }
      var h = t(2389);
      const y = "tabList__CuJ",
        v = "tabItem_LNqP";
      function g(e) {
        let {
          className: n,
          block: t,
          selectedValue: i,
          selectValue: s,
          tabValues: u,
        } = e;
        const c = [],
          { blockElementScrollPositionUntilNextRender: p } = (0, l.o5)(),
          d = (e) => {
            const n = e.currentTarget,
              t = c.indexOf(n),
              r = u[t].value;
            r !== i && (p(n), s(r));
          },
          m = (e) => {
            let n = null;
            switch (e.key) {
              case "Enter":
                d(e);
                break;
              case "ArrowRight": {
                const t = c.indexOf(e.currentTarget) + 1;
                n = c[t] ?? c[0];
                break;
              }
              case "ArrowLeft": {
                const t = c.indexOf(e.currentTarget) - 1;
                n = c[t] ?? c[c.length - 1];
                break;
              }
            }
            n?.focus();
          };
        return a.createElement(
          "ul",
          {
            role: "tablist",
            "aria-orientation": "horizontal",
            className: (0, o.Z)("tabs", { "tabs--block": t }, n),
          },
          u.map((e) => {
            let { value: n, label: t, attributes: l } = e;
            return a.createElement(
              "li",
              (0, r.Z)(
                {
                  role: "tab",
                  tabIndex: i === n ? 0 : -1,
                  "aria-selected": i === n,
                  key: n,
                  ref: (e) => c.push(e),
                  onKeyDown: m,
                  onClick: d,
                },
                l,
                {
                  className: (0, o.Z)("tabs__item", v, l?.className, {
                    "tabs__item--active": i === n,
                  }),
                },
              ),
              t ?? n,
            );
          }),
        );
      }
      function k(e) {
        let { lazy: n, children: t, selectedValue: r } = e;
        if (((t = Array.isArray(t) ? t : [t]), n)) {
          const e = t.find((e) => e.props.value === r);
          return e
            ? (0, a.cloneElement)(e, { className: "margin-top--md" })
            : null;
        }
        return a.createElement(
          "div",
          { className: "margin-top--md" },
          t.map((e, n) =>
            (0, a.cloneElement)(e, { key: n, hidden: e.props.value !== r }),
          ),
        );
      }
      function O(e) {
        const n = b(e);
        return a.createElement(
          "div",
          { className: (0, o.Z)("tabs-container", y) },
          a.createElement(g, (0, r.Z)({}, e, n)),
          a.createElement(k, (0, r.Z)({}, e, n)),
        );
      }
      function w(e) {
        const n = (0, h.Z)();
        return a.createElement(O, (0, r.Z)({ key: String(n) }, e));
      }
    },
    3072: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => s,
          default: () => m,
          frontMatter: () => i,
          metadata: () => u,
          toc: () => p,
        });
      var r = t(7462),
        a = (t(7294), t(3905)),
        o = t(4866),
        l = t(5162);
      const i = {
          title: "Orion command line",
          description: "Orion command line interface reference",
          sidebar_position: 1,
        },
        s = "Orion command line",
        u = {
          unversionedId: "Reference/Orion-CLI-Syntax",
          id: "Reference/Orion-CLI-Syntax",
          title: "Orion command line",
          description: "Orion command line interface reference",
          source: "@site/docs/Reference/Orion-CLI-Syntax.md",
          sourceDirName: "Reference",
          slug: "/Reference/Orion-CLI-Syntax",
          permalink: "/Reference/Orion-CLI-Syntax",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/Reference/Orion-CLI-Syntax.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Nicolas MASSART",
          lastUpdatedAt: 1602242872,
          formattedLastUpdatedAt: "Oct 9, 2020",
          sidebarPosition: 1,
          frontMatter: {
            title: "Orion command line",
            description: "Orion command line interface reference",
            sidebar_position: 1,
          },
          sidebar: "docSidebar",
          previous: { title: "Reference", permalink: "/category/reference" },
          next: {
            title: "Client API methods",
            permalink: "/Reference/API-Methods",
          },
        },
        c = {},
        p = [
          { value: "Options", id: "options", level: 2 },
          {
            value: "<code>clear-known-nodes</code>",
            id: "clear-known-nodes",
            level: 3,
          },
          { value: "<code>generatekeys</code>", id: "generatekeys", level: 3 },
          { value: "<code>help</code>", id: "help", level: 3 },
          { value: "<code>version</code>", id: "version", level: 3 },
          { value: "Configuration file", id: "configuration-file", level: 2 },
        ],
        d = { toc: p };
      function m(e) {
        let { components: n, ...t } = e;
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, d, t, { components: n, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "orion-command-line" }, "Orion command line"),
          (0, a.kt)(
            "p",
            null,
            "This reference describes the syntax of the Orion Command Line Interface (CLI) options and subcommands.",
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "orion [options] [configFile]\n",
            ),
          ),
          (0, a.kt)("p", null, "Runs Orion private transaction manager."),
          (0, a.kt)("h2", { id: "options" }, "Options"),
          (0, a.kt)(
            "h3",
            { id: "clear-known-nodes" },
            (0, a.kt)("inlineCode", { parentName: "h3" }, "clear-known-nodes"),
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "    --clear-known-nodes\n",
            ),
          ),
          (0, a.kt)(
            "p",
            null,
            "Clears known nodes. By default, known nodes are stored in memory but can be stored persistently to\nenable ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/HowTo/High-Availability" },
              "high availability",
            ),
            ". ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "knownnodestorage"),
            " is defined in the\n",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/Reference/Configuration-File" },
              "configuration file",
            ),
            ".",
          ),
          (0, a.kt)(
            "h3",
            { id: "generatekeys" },
            (0, a.kt)("inlineCode", { parentName: "h3" }, "generatekeys"),
          ),
          (0, a.kt)(
            o.Z,
            { mdxType: "Tabs" },
            (0, a.kt)(
              l.Z,
              { label: "Syntax", value: "tab1", mdxType: "TabItem" },
              (0, a.kt)(
                "pre",
                null,
                (0, a.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "-g, --generatekeys <names>\n",
                ),
              ),
            ),
            (0, a.kt)(
              l.Z,
              { label: "Example", value: "tab2", mdxType: "TabItem" },
              (0, a.kt)(
                "pre",
                null,
                (0, a.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "--generatekeys orion\n",
                ),
              ),
            ),
          ),
          (0, a.kt)(
            "p",
            null,
            "Generates public/private key pairs for each name supplied where ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "<names>"),
            " is a comma-separated list.",
          ),
          (0, a.kt)(
            "h3",
            { id: "help" },
            (0, a.kt)("inlineCode", { parentName: "h3" }, "help"),
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "-h, --help\n",
            ),
          ),
          (0, a.kt)("p", null, "Displays help and exits."),
          (0, a.kt)(
            "h3",
            { id: "version" },
            (0, a.kt)("inlineCode", { parentName: "h3" }, "version"),
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "    -v, --version\n",
            ),
          ),
          (0, a.kt)("p", null, "Displays version information and exits."),
          (0, a.kt)("h2", { id: "configuration-file" }, "Configuration file"),
          (0, a.kt)(
            o.Z,
            { mdxType: "Tabs" },
            (0, a.kt)(
              l.Z,
              { label: "Syntax", value: "tab1", mdxType: "TabItem" },
              (0, a.kt)(
                "pre",
                null,
                (0, a.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "orion <configFile>\n",
                ),
              ),
            ),
            (0, a.kt)(
              l.Z,
              { label: "Example", value: "tab2", mdxType: "TabItem" },
              (0, a.kt)(
                "pre",
                null,
                (0, a.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "orion orion.conf\n",
                ),
              ),
            ),
          ),
          (0, a.kt)(
            "p",
            null,
            "Specifies the ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/Reference/Configuration-File" },
              "configuration file",
            ),
            " with which to start Orion.",
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
