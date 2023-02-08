"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [621],
  {
    3905: (e, t, n) => {
      n.d(t, { Zo: () => d, kt: () => k });
      var a = n(7294);
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
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function i(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var p = a.createContext({}),
        u = function (e) {
          var t = a.useContext(p),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
        },
        d = function (e) {
          var t = u(e.components);
          return a.createElement(p.Provider, { value: t }, e.children);
        },
        s = "mdxType",
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        m = a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            l = e.originalType,
            p = e.parentName,
            d = i(e, ["components", "mdxType", "originalType", "parentName"]),
            s = u(n),
            m = r,
            k = s["".concat(p, ".").concat(m)] || s[m] || c[m] || l;
          return n
            ? a.createElement(k, o(o({ ref: t }, d), {}, { components: n }))
            : a.createElement(k, o({ ref: t }, d));
        });
      function k(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var l = n.length,
            o = new Array(l);
          o[0] = m;
          var i = {};
          for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
          (i.originalType = e),
            (i[s] = "string" == typeof e ? e : r),
            (o[1] = i);
          for (var u = 2; u < l; u++) o[u] = n[u];
          return a.createElement.apply(null, o);
        }
        return a.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    5162: (e, t, n) => {
      n.d(t, { Z: () => o });
      var a = n(7294),
        r = n(6010);
      const l = "tabItem_Ymn6";
      function o(e) {
        let { children: t, hidden: n, className: o } = e;
        return a.createElement(
          "div",
          { role: "tabpanel", className: (0, r.Z)(l, o), hidden: n },
          t,
        );
      }
    },
    4866: (e, t, n) => {
      n.d(t, { Z: () => N });
      var a = n(7462),
        r = n(7294),
        l = n(6010),
        o = n(2466),
        i = n(6550),
        p = n(1980),
        u = n(7392),
        d = n(12);
      function s(e) {
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
            props: { value: t, label: n, attributes: a, default: r },
          } = e;
          return { value: t, label: n, attributes: a, default: r };
        });
      }
      function c(e) {
        const { values: t, children: n } = e;
        return (0, r.useMemo)(() => {
          const e = t ?? s(n);
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
        }, [t, n]);
      }
      function m(e) {
        let { value: t, tabValues: n } = e;
        return n.some((e) => e.value === t);
      }
      function k(e) {
        let { queryString: t = !1, groupId: n } = e;
        const a = (0, i.k6)(),
          l = (function (e) {
            let { queryString: t = !1, groupId: n } = e;
            if ("string" == typeof t) return t;
            if (!1 === t) return null;
            if (!0 === t && !n)
              throw new Error(
                'Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".',
              );
            return n ?? null;
          })({ queryString: t, groupId: n });
        return [
          (0, p._X)(l),
          (0, r.useCallback)(
            (e) => {
              if (!l) return;
              const t = new URLSearchParams(a.location.search);
              t.set(l, e), a.replace({ ...a.location, search: t.toString() });
            },
            [l, a],
          ),
        ];
      }
      function y(e) {
        const { defaultValue: t, queryString: n = !1, groupId: a } = e,
          l = c(e),
          [o, i] = (0, r.useState)(() =>
            (function (e) {
              let { defaultValue: t, tabValues: n } = e;
              if (0 === n.length)
                throw new Error(
                  "Docusaurus error: the <Tabs> component requires at least one <TabItem> children component",
                );
              if (t) {
                if (!m({ value: t, tabValues: n }))
                  throw new Error(
                    `Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n
                      .map((e) => e.value)
                      .join(
                        ", ",
                      )}. If you intend to show no default tab, use defaultValue={null} instead.`,
                  );
                return t;
              }
              const a = n.find((e) => e.default) ?? n[0];
              if (!a) throw new Error("Unexpected error: 0 tabValues");
              return a.value;
            })({ defaultValue: t, tabValues: l }),
          ),
          [p, u] = k({ queryString: n, groupId: a }),
          [s, y] = (function (e) {
            let { groupId: t } = e;
            const n = (function (e) {
                return e ? `docusaurus.tab.${e}` : null;
              })(t),
              [a, l] = (0, d.Nk)(n);
            return [
              a,
              (0, r.useCallback)(
                (e) => {
                  n && l.set(e);
                },
                [n, l],
              ),
            ];
          })({ groupId: a }),
          v = (() => {
            const e = p ?? s;
            return m({ value: e, tabValues: l }) ? e : null;
          })();
        (0, r.useLayoutEffect)(() => {
          v && i(v);
        }, [v]);
        return {
          selectedValue: o,
          selectValue: (0, r.useCallback)(
            (e) => {
              if (!m({ value: e, tabValues: l }))
                throw new Error(`Can't select invalid tab value=${e}`);
              i(e), u(e), y(e);
            },
            [u, y, l],
          ),
          tabValues: l,
        };
      }
      var v = n(2389);
      const b = "tabList__CuJ",
        h = "tabItem_LNqP";
      function T(e) {
        let {
          className: t,
          block: n,
          selectedValue: i,
          selectValue: p,
          tabValues: u,
        } = e;
        const d = [],
          { blockElementScrollPositionUntilNextRender: s } = (0, o.o5)(),
          c = (e) => {
            const t = e.currentTarget,
              n = d.indexOf(t),
              a = u[n].value;
            a !== i && (s(t), p(a));
          },
          m = (e) => {
            let t = null;
            switch (e.key) {
              case "Enter":
                c(e);
                break;
              case "ArrowRight": {
                const n = d.indexOf(e.currentTarget) + 1;
                t = d[n] ?? d[0];
                break;
              }
              case "ArrowLeft": {
                const n = d.indexOf(e.currentTarget) - 1;
                t = d[n] ?? d[d.length - 1];
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
            className: (0, l.Z)("tabs", { "tabs--block": n }, t),
          },
          u.map((e) => {
            let { value: t, label: n, attributes: o } = e;
            return r.createElement(
              "li",
              (0, a.Z)(
                {
                  role: "tab",
                  tabIndex: i === t ? 0 : -1,
                  "aria-selected": i === t,
                  key: t,
                  ref: (e) => d.push(e),
                  onKeyDown: m,
                  onClick: c,
                },
                o,
                {
                  className: (0, l.Z)("tabs__item", h, o?.className, {
                    "tabs__item--active": i === t,
                  }),
                },
              ),
              n ?? t,
            );
          }),
        );
      }
      function g(e) {
        let { lazy: t, children: n, selectedValue: a } = e;
        if (((n = Array.isArray(n) ? n : [n]), t)) {
          const e = n.find((e) => e.props.value === a);
          return e
            ? (0, r.cloneElement)(e, { className: "margin-top--md" })
            : null;
        }
        return r.createElement(
          "div",
          { className: "margin-top--md" },
          n.map((e, t) =>
            (0, r.cloneElement)(e, { key: t, hidden: e.props.value !== a }),
          ),
        );
      }
      function f(e) {
        const t = y(e);
        return r.createElement(
          "div",
          { className: (0, l.Z)("tabs-container", b) },
          r.createElement(T, (0, a.Z)({}, e, t)),
          r.createElement(g, (0, a.Z)({}, e, t)),
        );
      }
      function N(e) {
        const t = (0, v.Z)();
        return r.createElement(f, (0, a.Z)({ key: String(t) }, e));
      }
    },
    4155: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => p,
          default: () => m,
          frontMatter: () => i,
          metadata: () => u,
          toc: () => s,
        });
      var a = n(7462),
        r = (n(7294), n(3905)),
        l = n(4866),
        o = n(5162);
      const i = {
          title: "Client API methods",
          description: "Orion RPC API",
          sidebar_position: 2,
        },
        p = "Client API",
        u = {
          unversionedId: "Reference/API-Methods",
          id: "Reference/API-Methods",
          title: "Client API methods",
          description: "Orion RPC API",
          source: "@site/docs/Reference/API-Methods.md",
          sourceDirName: "Reference",
          slug: "/Reference/API-Methods",
          permalink: "/Reference/API-Methods",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/Reference/API-Methods.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Nicolas MASSART",
          lastUpdatedAt: 1602242872,
          formattedLastUpdatedAt: "Oct 9, 2020",
          sidebarPosition: 2,
          frontMatter: {
            title: "Client API methods",
            description: "Orion RPC API",
            sidebar_position: 2,
          },
          sidebar: "docSidebar",
          previous: {
            title: "Orion command line",
            permalink: "/Reference/Orion-CLI-Syntax",
          },
          next: {
            title: "Configuration File",
            permalink: "/Reference/Configuration-File",
          },
        },
        d = {},
        s = [
          { value: "Methods", id: "methods", level: 2 },
          {
            value: "<code>createPrivacyGroup</code>",
            id: "createprivacygroup",
            level: 3,
          },
          { value: "HTTP Verb", id: "http-verb", level: 4 },
          { value: "Headers", id: "headers", level: 4 },
          { value: "Request Body", id: "request-body", level: 4 },
          { value: "Returns", id: "returns", level: 4 },
          {
            value: "<code>deletePrivacyGroup</code>",
            id: "deleteprivacygroup",
            level: 3,
          },
          { value: "HTTP Verb", id: "http-verb-1", level: 4 },
          { value: "Headers", id: "headers-1", level: 4 },
          { value: "Request Body", id: "request-body-1", level: 4 },
          { value: "Returns", id: "returns-1", level: 4 },
          {
            value: "<code>findPrivacyGroup</code>",
            id: "findprivacygroup",
            level: 3,
          },
          { value: "HTTP Verb", id: "http-verb-2", level: 4 },
          { value: "Headers", id: "headers-2", level: 4 },
          { value: "Request Body", id: "request-body-2", level: 4 },
          { value: "Returns", id: "returns-2", level: 4 },
          { value: "<code>knownnodes</code>", id: "knownnodes", level: 3 },
          { value: "HTTP Verb", id: "http-verb-3", level: 4 },
          { value: "Headers", id: "headers-3", level: 4 },
          { value: "Request Body", id: "request-body-3", level: 4 },
          { value: "Returns", id: "returns-3", level: 4 },
          { value: "<code>receive</code>", id: "receive", level: 3 },
          { value: "HTTP Verb", id: "http-verb-4", level: 4 },
          { value: "Headers", id: "headers-4", level: 4 },
          { value: "Request Body", id: "request-body-4", level: 4 },
          { value: "Returns", id: "returns-4", level: 4 },
          {
            value: "receive with privacy group ID",
            id: "receive-with-privacy-group-id",
            level: 4,
          },
          { value: "<code>receiveraw</code>", id: "receiveraw", level: 3 },
          { value: "HTTP Verb", id: "http-verb-5", level: 4 },
          { value: "Headers", id: "headers-5", level: 4 },
          { value: "Request Body", id: "request-body-5", level: 4 },
          { value: "Returns", id: "returns-5", level: 4 },
          { value: "<code>send</code>", id: "send", level: 3 },
          { value: "HTTP Verb", id: "http-verb-6", level: 4 },
          { value: "Headers", id: "headers-6", level: 4 },
          { value: "Request Body", id: "request-body-6", level: 4 },
          { value: "Returns", id: "returns-6", level: 4 },
          { value: "<code>sendraw</code>", id: "sendraw", level: 3 },
          { value: "HTTP Verb", id: "http-verb-7", level: 4 },
          { value: "Headers", id: "headers-7", level: 4 },
          { value: "Request Body", id: "request-body-7", level: 4 },
          { value: "Returns", id: "returns-7", level: 4 },
          { value: "<code>upcheck</code>", id: "upcheck", level: 3 },
          { value: "HTTP Verb", id: "http-verb-8", level: 4 },
          { value: "Headers", id: "headers-8", level: 4 },
          { value: "Request Body", id: "request-body-8", level: 4 },
          { value: "Returns", id: "returns-8", level: 4 },
        ],
        c = { toc: s };
      function m(e) {
        let { components: t, ...n } = e;
        return (0, r.kt)(
          "wrapper",
          (0, a.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "client-api" }, "Client API"),
          (0, r.kt)(
            "p",
            null,
            "The Client API is used by Ethereum clients (for example, Hyperledger Besu) to interact with Orion.",
          ),
          (0, r.kt)(
            "p",
            null,
            "The port used by the Client API is defined by the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "clientport "),
            " property in the ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/Reference/Configuration-File" },
              "configuration file",
            ),
            ".\nThe default port is ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "8888"),
            ".",
          ),
          (0, r.kt)("h2", { id: "methods" }, "Methods"),
          (0, r.kt)(
            "h3",
            { id: "createprivacygroup" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "createPrivacyGroup"),
          ),
          (0, r.kt)(
            "p",
            null,
            "Creates a privacy group with the specified members.",
          ),
          (0, r.kt)("h4", { id: "http-verb" }, "HTTP Verb"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "POST"),
          ),
          (0, r.kt)("h4", { id: "headers" }, "Headers"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "Content-Type: application/json",
              ),
            ),
          ),
          (0, r.kt)("h4", { id: "request-body" }, "Request Body"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "addresses"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "array of strings"),
            " - Orion node keys to include in the privacy group",
          ),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "from"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "string"),
            " - Orion node key of node creating the privacy group",
          ),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "name"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "string"),
            " - Name of the privacy group",
          ),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "description"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "string"),
            " - Description for the privacy group",
          ),
          (0, r.kt)("h4", { id: "returns" }, "Returns"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "privacy group"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "object"),
            " - Privacy group object",
          ),
          (0, r.kt)(
            l.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              o.Z,
              { label: "curl HTTP request", value: "tab1", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  'curl -X POST http://127.0.0.1:8888/createPrivacyGroup \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "addresses": [\n      "g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw=",\n      "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk="\n    ],\n    "from": "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk=",\n    "name": "Organisation A",\n    "description": "Contains members of Organisation A"\n  }\'\n',
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
                  '{"privacyGroupId":\n  "C68ZfeG6wHeXb+CyfwS6NjmmaMWwRaj8ZkrPq/o+S8Q=",\n  "name":"Organisation A",\n  "description":"Contains members of Organisation A",\n  "type":"PANTHEON",\n  "members":["g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw=","negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk="]\n}\n',
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "deleteprivacygroup" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "deletePrivacyGroup"),
          ),
          (0, r.kt)("p", null, "Deletes a privacy group."),
          (0, r.kt)("h4", { id: "http-verb-1" }, "HTTP Verb"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "POST"),
          ),
          (0, r.kt)("h4", { id: "headers-1" }, "Headers"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "Content-Type: application/json",
              ),
            ),
          ),
          (0, r.kt)("h4", { id: "request-body-1" }, "Request Body"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "privacyGroupId"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "string"),
            " - ID of the privacy group to delete",
          ),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "from"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "string"),
            " - Orion node key of node deleting the privacy group",
          ),
          (0, r.kt)("h4", { id: "returns-1" }, "Returns"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "privacyGroupId"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "string"),
            " - ID of the deleted privacy group",
          ),
          (0, r.kt)(
            l.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              o.Z,
              { label: "curl HTTP request", value: "tab1", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  'curl -X POST http://127.0.0.1:8888/deletePrivacyGroup \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "privacyGroupId": "C68ZfeG6wHeXb+CyfwS6NjmmaMWwRaj8ZkrPq/o+S8Q=",\n    "from": "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk="\n  }\'\n',
                ),
              ),
            ),
            (0, r.kt)(
              o.Z,
              {
                label: "With Privacy Group ID",
                value: "tab2",
                mdxType: "TabItem",
              },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  '    curl -X POST http://127.0.0.1:8888/send \\\n      -H \'Content-Type: application/json\' \\\n      -d \'{\n        "payload": "SGVsbG8sIFdvcmxkIQ==",\n        "from": "4xanJzyaDPcBVMUSwl/tLp+DbXzd3jF9MKk1yJuyewE=",\n        "privacyGroupId": "kAbelwaVW7okoEn1+okO+AbA4Hhz/7DaCOWVQz9nx5M="\n    }\'\n',
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
                  { parentName: "pre", className: "language-json" },
                  '"C68ZfeG6wHeXb+CyfwS6NjmmaMWwRaj8ZkrPq/o+S8Q="\n',
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "findprivacygroup" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "findPrivacyGroup"),
          ),
          (0, r.kt)(
            "p",
            null,
            "Finds all privacy groups containing only the specified members.",
          ),
          (0, r.kt)("h4", { id: "http-verb-2" }, "HTTP Verb"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "POST"),
          ),
          (0, r.kt)("h4", { id: "headers-2" }, "Headers"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "Content-Type: application/json",
              ),
            ),
          ),
          (0, r.kt)("h4", { id: "request-body-2" }, "Request Body"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "addresses"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "array of strings"),
            " - Orion node keys for which to return privacy groups",
          ),
          (0, r.kt)("h4", { id: "returns-2" }, "Returns"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "array of objects"),
            " - Privacy group objects for all privacy groups containing only the specified members",
          ),
          (0, r.kt)(
            l.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              o.Z,
              { label: "curl HTTP request", value: "tab1", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  'curl -X POST http://127.0.0.1:8888/findPrivacyGroup \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "addresses" : [\n      "g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw=",\n      "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk="\n  ]\n}\'\n',
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
                  '[\n  {\n    "privacyGroupId": "DVMXn3N6VIerZOJjixFFoGQBu8AleyonJ1sK33aYdtg=",\n    "type": "PANTHEON",\n    "members": [\n      "g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw=",\n      "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk="\n    ]\n  }\n]\n',
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "knownnodes" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "knownnodes"),
          ),
          (0, r.kt)(
            "p",
            null,
            "Returns the public key and URL of nodes discovered by Orion.",
          ),
          (0, r.kt)("h4", { id: "http-verb-3" }, "HTTP Verb"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "GET"),
          ),
          (0, r.kt)("h4", { id: "headers-3" }, "Headers"),
          (0, r.kt)("p", null, "None"),
          (0, r.kt)("h4", { id: "request-body-3" }, "Request Body"),
          (0, r.kt)("p", null, "None"),
          (0, r.kt)("h4", { id: "returns-3" }, "Returns"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "array of objects"),
            " - Public key and URL of each discovered node.",
          ),
          (0, r.kt)(
            l.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              o.Z,
              { label: "curl HTTP request", value: "tab1", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "curl -X GET http://127.0.0.1:8888/knownnodes\n",
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
                  '[\n  {\n    "publicKey": "i/6jwvVSK/V2qvbXSuXG6/jEHZFcjkE/qLD3rs47PDs=",\n    "nodeUrl": "http://127.0.0.1:8080/"\n  },\n  {\n    "publicKey": "Gy/mgkqgCZ960o9pmYAONmPHRD0LDH/5ymywNLrzz08=",\n    "nodeUrl": "http://127.0.0.1:9090/"\n  }\n]\n',
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "receive" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "receive"),
          ),
          (0, r.kt)(
            "p",
            null,
            "Receives a payload from Orion using the payload key. The payload key is returned by the ",
            (0, r.kt)("a", { parentName: "p", href: "#send" }, "send"),
            " method.",
          ),
          (0, r.kt)("h4", { id: "http-verb-4" }, "HTTP Verb"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "POST"),
          ),
          (0, r.kt)("h4", { id: "headers-4" }, "Headers"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "Content-Type: application/json",
              ),
            ),
          ),
          (0, r.kt)("h4", { id: "request-body-4" }, "Request Body"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "key"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "string"),
            " - Key used to receive the payload",
          ),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "to"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "string"),
            " - Orion key of the receiver",
          ),
          (0, r.kt)("h4", { id: "returns-4" }, "Returns"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "payload"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "string"),
            " - Base64 encoded payload",
          ),
          (0, r.kt)(
            l.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              o.Z,
              { label: "curl HTTP request", value: "tab1", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  'curl -X POST http://127.0.0.1:8888/receive \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "key": "wS+RMprLKIuCaHzOBfPeHmkJWUdOJ7Ji/9U3qj2jbXQ=",\n    "to": "YE5cJRJYTRO4XFo7yuAi/0K9DwjySGjsHB2YrFPnJXo="\n}\'\n',
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
                  '  {"payload":"SGVsbG8sIFdvcmxkIQ=="}\n',
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "h4",
            { id: "receive-with-privacy-group-id" },
            "receive with privacy group ID",
          ),
          (0, r.kt)(
            "p",
            null,
            "To return the privacy group ID with the payload, use the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "receive"),
            " method with the header ",
            (0, r.kt)(
              "inlineCode",
              { parentName: "p" },
              "Content-Type: application/vnd.orion.v1+json",
            ),
            ".",
          ),
          (0, r.kt)(
            l.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              o.Z,
              { label: "curl HTTP request", value: "tab1", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  'curl -X POST \\\n  http://127.0.0.1:8888/receive \\\n  -H \'Content-Type: application/vnd.orion.v1+json\' \\\n  -d \'{\n    "key": "dRQUqPeGy6sj9LQJUYqNlUFroBiWm/tJO+CriTce6AA=",\n    "to": "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk="\n}\'\n',
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
                  '  {\n      "payload": "SGVsbG8sIFdvcmxkIQ==",\n      "privacyGroupId": "68/Cq0mVjB8FbXDLE1tbDRAvD/srluIok137uFOaClM="\n  }\n',
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "receiveraw" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "receiveraw"),
          ),
          (0, r.kt)(
            "p",
            null,
            "Receives a raw payload from Orion using the payload key. The payload key is returned by the ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "#sendraw" },
              (0, r.kt)("inlineCode", { parentName: "a" }, "sendraw"),
            ),
            " method",
          ),
          (0, r.kt)("h4", { id: "http-verb-5" }, "HTTP Verb"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "POST"),
          ),
          (0, r.kt)("h4", { id: "headers-5" }, "Headers"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "Content-Type: application/octet-stream",
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "c11n-key"),
              ": Key used to receive the payload",
            ),
          ),
          (0, r.kt)("h4", { id: "request-body-5" }, "Request Body"),
          (0, r.kt)("p", null, "None"),
          (0, r.kt)("h4", { id: "returns-5" }, "Returns"),
          (0, r.kt)("p", null, "Payload"),
          (0, r.kt)(
            l.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              o.Z,
              { label: "curl HTTP request", value: "tab1", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "curl -X POST \\\n  http://127.0.0.1:8888/receiveraw \\\n  -H 'Content-Type: application/octet-stream' \\\n  -H 'c11n-key: +3gnwO0oHXe4kXsr3kegd9jTTqsq3Y6Hm3w26WHR/RM='\n",
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
                  "Hello, World!\n",
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "send" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "send"),
          ),
          (0, r.kt)("p", null, "Sends a payload to Orion."),
          (0, r.kt)("h4", { id: "http-verb-6" }, "HTTP Verb"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "POST"),
          ),
          (0, r.kt)("h4", { id: "headers-6" }, "Headers"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "Content-Type: application/json",
              ),
            ),
          ),
          (0, r.kt)("h4", { id: "request-body-6" }, "Request Body"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "payload"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "string"),
            " - Base64-encoded payload",
          ),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "from"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "string"),
            "  - Orion node key of sender",
          ),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "to"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "array of strings"),
            " - Orion node keys to receive this payload",
          ),
          (0, r.kt)("p", null, "or"),
          (0, r.kt)(
            "p",
            null,
            " ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "privacyGroupId"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "string"),
            " - Privacy group to receive this payload",
          ),
          (0, r.kt)("h4", { id: "returns-6" }, "Returns"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "key"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "string"),
            " - Key used to receive the payload",
          ),
          (0, r.kt)(
            l.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              o.Z,
              {
                label: "curl HTTP request with to",
                value: "tab1",
                mdxType: "TabItem",
              },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  'curl -X POST http://127.0.0.1:8888/send \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "payload": "SGVsbG8sIFdvcmxkIQ==",\n    "from": "4xanJzyaDPcBVMUSwl/tLp+DbXzd3jF9MKk1yJuyewE=",\n    "to": ["YE5cJRJYTRO4XFo7yuAi/0K9DwjySGjsHB2YrFPnJXo="]\n}\'\n',
                ),
              ),
            ),
            (0, r.kt)(
              o.Z,
              {
                label: "curl HTTP request with privacyGroupId",
                value: "tab2",
                mdxType: "TabItem",
              },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  'curl -X POST http://127.0.0.1:8888/send \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n      "payload": "SGVsbG8sIFdvcmxkIQ==",\n      "from": "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk=",\n      "privacyGroupId": "DVMXn3N6VIerZOJjixFFoGQBu8AleyonJ1sK33aYdtg="\n}\'\n',
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
                  { parentName: "pre", className: "language-json" },
                  '{"key":"wS+RMprLKIuCaHzOBfPeHmkJWUdOJ7Ji/9U3qj2jbXQ="}\n',
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "sendraw" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "sendraw"),
          ),
          (0, r.kt)("p", null, "Sends a raw payload to Orion."),
          (0, r.kt)("h4", { id: "http-verb-7" }, "HTTP Verb"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "POST"),
          ),
          (0, r.kt)("h4", { id: "headers-7" }, "Headers"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "Content-Type: application/octet-stream",
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "c11n-from"),
              ": Orion node key of the sender",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "c11n-to"),
              ": List of Orion node keys to receive this payload",
            ),
          ),
          (0, r.kt)("h4", { id: "request-body-7" }, "Request Body"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "payload"),
            " : ",
            (0, r.kt)("em", { parentName: "p" }, "string"),
            " - Payload",
          ),
          (0, r.kt)("h4", { id: "returns-7" }, "Returns"),
          (0, r.kt)("p", null, "Key used to receive the payload"),
          (0, r.kt)(
            l.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              o.Z,
              { label: "curl HTTP request", value: "tab1", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "curl -X POST http://127.0.0.1:8888/sendraw \\\n  -H 'Content-Type: application/octet-stream' \\\n  -H 'c11n-from: 4xanJzyaDPcBVMUSwl/tLp+DbXzd3jF9MKk1yJuyewE=' \\\n  -H 'c11n-to: YE5cJRJYTRO4XFo7yuAi/0K9DwjySGjsHB2YrFPnJXo=' \\\n  -d 'Hello, World!'\n",
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
                  "+3gnwO0oHXe4kXsr3kegd9jTTqsq3Y6Hm3w26WHR/RM=\n",
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "upcheck" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "upcheck"),
          ),
          (0, r.kt)("p", null, "Confirms if Orion is running."),
          (0, r.kt)("h4", { id: "http-verb-8" }, "HTTP Verb"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "GET"),
          ),
          (0, r.kt)("h4", { id: "headers-8" }, "Headers"),
          (0, r.kt)("p", null, "None"),
          (0, r.kt)("h4", { id: "request-body-8" }, "Request Body"),
          (0, r.kt)("p", null, "None"),
          (0, r.kt)("h4", { id: "returns-8" }, "Returns"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("em", { parentName: "p" }, "string"),
            " : ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "I'm up"),
          ),
          (0, r.kt)(
            l.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              o.Z,
              { label: "curl HTTP request", value: "tab1", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "curl -X GET http://127.0.0.1:8888/upcheck\n",
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
                  "I'm up\n",
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
