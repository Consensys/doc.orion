"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [910],
  {
    3905: (e, t, r) => {
      r.d(t, { Zo: () => c, kt: () => b });
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
        u = function (e) {
          var t = n.useContext(s),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : i(i({}, t), e)), r;
        },
        c = function (e) {
          var t = u(e.components);
          return n.createElement(s.Provider, { value: t }, e.children);
        },
        p = "mdxType",
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
            p = u(r),
            m = a,
            b = p["".concat(s, ".").concat(m)] || p[m] || d[m] || o;
          return r
            ? n.createElement(b, i(i({ ref: t }, c), {}, { components: r }))
            : n.createElement(b, i({ ref: t }, c));
        });
      function b(e, t) {
        var r = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var o = r.length,
            i = new Array(o);
          i[0] = m;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e),
            (l[p] = "string" == typeof e ? e : a),
            (i[1] = l);
          for (var u = 2; u < o; u++) i[u] = r[u];
          return n.createElement.apply(null, i);
        }
        return n.createElement.apply(null, r);
      }
      m.displayName = "MDXCreateElement";
    },
    5162: (e, t, r) => {
      r.d(t, { Z: () => i });
      var n = r(7294),
        a = r(6010);
      const o = "tabItem_Ymn6";
      function i(e) {
        let { children: t, hidden: r, className: i } = e;
        return n.createElement(
          "div",
          { role: "tabpanel", className: (0, a.Z)(o, i), hidden: r },
          t,
        );
      }
    },
    4866: (e, t, r) => {
      r.d(t, { Z: () => O });
      var n = r(7462),
        a = r(7294),
        o = r(6010),
        i = r(2466),
        l = r(6550),
        s = r(1980),
        u = r(7392),
        c = r(12);
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
            props: { value: t, label: r, attributes: n, default: a },
          } = e;
          return { value: t, label: r, attributes: n, default: a };
        });
      }
      function d(e) {
        const { values: t, children: r } = e;
        return (0, a.useMemo)(() => {
          const e = t ?? p(r);
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
        }, [t, r]);
      }
      function m(e) {
        let { value: t, tabValues: r } = e;
        return r.some((e) => e.value === t);
      }
      function b(e) {
        let { queryString: t = !1, groupId: r } = e;
        const n = (0, l.k6)(),
          o = (function (e) {
            let { queryString: t = !1, groupId: r } = e;
            if ("string" == typeof t) return t;
            if (!1 === t) return null;
            if (!0 === t && !r)
              throw new Error(
                'Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".',
              );
            return r ?? null;
          })({ queryString: t, groupId: r });
        return [
          (0, s._X)(o),
          (0, a.useCallback)(
            (e) => {
              if (!o) return;
              const t = new URLSearchParams(n.location.search);
              t.set(o, e), n.replace({ ...n.location, search: t.toString() });
            },
            [o, n],
          ),
        ];
      }
      function f(e) {
        const { defaultValue: t, queryString: r = !1, groupId: n } = e,
          o = d(e),
          [i, l] = (0, a.useState)(() =>
            (function (e) {
              let { defaultValue: t, tabValues: r } = e;
              if (0 === r.length)
                throw new Error(
                  "Docusaurus error: the <Tabs> component requires at least one <TabItem> children component",
                );
              if (t) {
                if (!m({ value: t, tabValues: r }))
                  throw new Error(
                    `Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r
                      .map((e) => e.value)
                      .join(
                        ", ",
                      )}. If you intend to show no default tab, use defaultValue={null} instead.`,
                  );
                return t;
              }
              const n = r.find((e) => e.default) ?? r[0];
              if (!n) throw new Error("Unexpected error: 0 tabValues");
              return n.value;
            })({ defaultValue: t, tabValues: o }),
          ),
          [s, u] = b({ queryString: r, groupId: n }),
          [p, f] = (function (e) {
            let { groupId: t } = e;
            const r = (function (e) {
                return e ? `docusaurus.tab.${e}` : null;
              })(t),
              [n, o] = (0, c.Nk)(r);
            return [
              n,
              (0, a.useCallback)(
                (e) => {
                  r && o.set(e);
                },
                [r, o],
              ),
            ];
          })({ groupId: n }),
          h = (() => {
            const e = s ?? p;
            return m({ value: e, tabValues: o }) ? e : null;
          })();
        (0, a.useLayoutEffect)(() => {
          h && l(h);
        }, [h]);
        return {
          selectedValue: i,
          selectValue: (0, a.useCallback)(
            (e) => {
              if (!m({ value: e, tabValues: o }))
                throw new Error(`Can't select invalid tab value=${e}`);
              l(e), u(e), f(e);
            },
            [u, f, o],
          ),
          tabValues: o,
        };
      }
      var h = r(2389);
      const y = "tabList__CuJ",
        v = "tabItem_LNqP";
      function g(e) {
        let {
          className: t,
          block: r,
          selectedValue: l,
          selectValue: s,
          tabValues: u,
        } = e;
        const c = [],
          { blockElementScrollPositionUntilNextRender: p } = (0, i.o5)(),
          d = (e) => {
            const t = e.currentTarget,
              r = c.indexOf(t),
              n = u[r].value;
            n !== l && (p(t), s(n));
          },
          m = (e) => {
            let t = null;
            switch (e.key) {
              case "Enter":
                d(e);
                break;
              case "ArrowRight": {
                const r = c.indexOf(e.currentTarget) + 1;
                t = c[r] ?? c[0];
                break;
              }
              case "ArrowLeft": {
                const r = c.indexOf(e.currentTarget) - 1;
                t = c[r] ?? c[c.length - 1];
                break;
              }
            }
            t?.focus();
          };
        return a.createElement(
          "ul",
          {
            role: "tablist",
            "aria-orientation": "horizontal",
            className: (0, o.Z)("tabs", { "tabs--block": r }, t),
          },
          u.map((e) => {
            let { value: t, label: r, attributes: i } = e;
            return a.createElement(
              "li",
              (0, n.Z)(
                {
                  role: "tab",
                  tabIndex: l === t ? 0 : -1,
                  "aria-selected": l === t,
                  key: t,
                  ref: (e) => c.push(e),
                  onKeyDown: m,
                  onClick: d,
                },
                i,
                {
                  className: (0, o.Z)("tabs__item", v, i?.className, {
                    "tabs__item--active": l === t,
                  }),
                },
              ),
              r ?? t,
            );
          }),
        );
      }
      function k(e) {
        let { lazy: t, children: r, selectedValue: n } = e;
        if (((r = Array.isArray(r) ? r : [r]), t)) {
          const e = r.find((e) => e.props.value === n);
          return e
            ? (0, a.cloneElement)(e, { className: "margin-top--md" })
            : null;
        }
        return a.createElement(
          "div",
          { className: "margin-top--md" },
          r.map((e, t) =>
            (0, a.cloneElement)(e, { key: t, hidden: e.props.value !== n }),
          ),
        );
      }
      function w(e) {
        const t = f(e);
        return a.createElement(
          "div",
          { className: (0, o.Z)("tabs-container", y) },
          a.createElement(g, (0, n.Z)({}, e, t)),
          a.createElement(k, (0, n.Z)({}, e, t)),
        );
      }
      function O(e) {
        const t = (0, h.Z)();
        return a.createElement(w, (0, n.Z)({ key: String(t) }, e));
      }
    },
    8013: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => m,
          frontMatter: () => l,
          metadata: () => u,
          toc: () => p,
        });
      var n = r(7462),
        a = (r(7294), r(3905)),
        o = r(4866),
        i = r(5162);
      const l = {
          title: "Use Binary",
          description: "Install Orion from binary distribution",
          sidebar_position: 3,
        },
        s = "Install binary distribution",
        u = {
          unversionedId: "HowTo/Install-Binaries",
          id: "HowTo/Install-Binaries",
          title: "Use Binary",
          description: "Install Orion from binary distribution",
          source: "@site/docs/HowTo/Install-Binaries.md",
          sourceDirName: "HowTo",
          slug: "/HowTo/Install-Binaries",
          permalink: "/HowTo/Install-Binaries",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/HowTo/Install-Binaries.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "rolandtyler",
          lastUpdatedAt: 1630357006,
          formattedLastUpdatedAt: "Aug 30, 2021",
          sidebarPosition: 3,
          frontMatter: {
            title: "Use Binary",
            description: "Install Orion from binary distribution",
            sidebar_position: 3,
          },
          sidebar: "docSidebar",
          previous: { title: "Dependencies", permalink: "/HowTo/Dependencies" },
          next: { title: "Use Docker", permalink: "/HowTo/Run-Docker-Image" },
        },
        c = {},
        p = [
          { value: "Prerequisites", id: "prerequisites", level: 2 },
          {
            value: "Version compatibility",
            id: "version-compatibility",
            level: 3,
          },
          { value: "Install binaries", id: "install-binaries", level: 2 },
        ],
        d = { toc: p };
      function m(e) {
        let { components: t, ...r } = e;
        return (0, a.kt)(
          "wrapper",
          (0, n.Z)({}, d, r, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)(
            "h1",
            { id: "install-binary-distribution" },
            "Install binary distribution",
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
                {
                  parentName: "li",
                  href: "https://www.oracle.com/java/technologies/javase-downloads.html",
                },
                "Java JDK",
              ),
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                { parentName: "li", href: "/HowTo/Dependencies" },
                "libsodium",
              ),
            ),
          ),
          (0, a.kt)(
            "admonition",
            { title: "important", type: "info" },
            (0, a.kt)(
              "p",
              { parentName: "admonition" },
              "Orion requires Java 11+; earlier versions are not supported.",
            ),
            (0, a.kt)(
              "p",
              { parentName: "admonition" },
              "For production systems, we recommend running Besu and Orion in separate instances. If running Besu\nand Orion in the same instance, restrict the amount of memory used by each JVM to ensure each has\nenough memory.",
            ),
          ),
          (0, a.kt)(
            "h3",
            { id: "version-compatibility" },
            "Version compatibility",
          ),
          (0, a.kt)(
            "p",
            null,
            "The latest minor version of Orion is compatible with the latest minor version of Hyperledger Besu.\nThat is, upgrading Besu from 1.4.x to 1.5 requires upgrading Orion from 1.5.x to 1.6. Upgrading from\nBesu 1.4.x to Besu 1.4.y does not require an Orion upgrade.",
          ),
          (0, a.kt)(
            "table",
            null,
            (0, a.kt)(
              "thead",
              { parentName: "table" },
              (0, a.kt)(
                "tr",
                { parentName: "thead" },
                (0, a.kt)(
                  "th",
                  { parentName: "tr", align: null },
                  "Besu version",
                ),
                (0, a.kt)(
                  "th",
                  { parentName: "tr", align: null },
                  "Orion version",
                ),
              ),
            ),
            (0, a.kt)(
              "tbody",
              { parentName: "table" },
              (0, a.kt)(
                "tr",
                { parentName: "tbody" },
                (0, a.kt)("td", { parentName: "tr", align: null }, "1.5.x"),
                (0, a.kt)("td", { parentName: "tr", align: null }, "1.6.x"),
              ),
              (0, a.kt)(
                "tr",
                { parentName: "tbody" },
                (0, a.kt)("td", { parentName: "tr", align: null }, "1.4.x"),
                (0, a.kt)("td", { parentName: "tr", align: null }, "1.5.x"),
              ),
            ),
          ),
          (0, a.kt)("h2", { id: "install-binaries" }, "Install binaries"),
          (0, a.kt)(
            "p",
            null,
            "Download the Orion ",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "https://cloudsmith.io/~consensys/repos/orion/packages/",
              },
              "packaged binaries",
            ),
            ".",
          ),
          (0, a.kt)(
            "p",
            null,
            "Unpack the downloaded files and change into the ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "orion-<release>"),
            " directory.",
          ),
          (0, a.kt)(
            "p",
            null,
            "Display Orion command-line help to confirm installation:",
          ),
          (0, a.kt)(
            o.Z,
            { mdxType: "Tabs" },
            (0, a.kt)(
              i.Z,
              { label: "Linux/macOS", value: "tab1", mdxType: "TabItem" },
              (0, a.kt)(
                "pre",
                null,
                (0, a.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "$ bin/orion --help\n",
                ),
              ),
            ),
            (0, a.kt)(
              i.Z,
              { label: "Windows", value: "tab2", mdxType: "TabItem" },
              (0, a.kt)(
                "pre",
                null,
                (0, a.kt)(
                  "code",
                  { parentName: "pre", className: "language-bat" },
                  "bin\\orion --help\n",
                ),
              ),
            ),
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
