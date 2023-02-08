"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [633],
  {
    3905: (e, t, a) => {
      a.d(t, { Zo: () => c, kt: () => f });
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
      function o(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(a), !0).forEach(function (t) {
                r(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : o(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t),
                );
              });
        }
        return e;
      }
      function i(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (a = o[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]));
        }
        return r;
      }
      var s = n.createContext({}),
        u = function (e) {
          var t = n.useContext(s),
            a = t;
          return e && (a = "function" == typeof e ? e(t) : l(l({}, t), e)), a;
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
          var a = e.components,
            r = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            c = i(e, ["components", "mdxType", "originalType", "parentName"]),
            p = u(a),
            m = r,
            f = p["".concat(s, ".").concat(m)] || p[m] || d[m] || o;
          return a
            ? n.createElement(f, l(l({ ref: t }, c), {}, { components: a }))
            : n.createElement(f, l({ ref: t }, c));
        });
      function f(e, t) {
        var a = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var o = a.length,
            l = new Array(o);
          l[0] = m;
          var i = {};
          for (var s in t) hasOwnProperty.call(t, s) && (i[s] = t[s]);
          (i.originalType = e),
            (i[p] = "string" == typeof e ? e : r),
            (l[1] = i);
          for (var u = 2; u < o; u++) l[u] = a[u];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, a);
      }
      m.displayName = "MDXCreateElement";
    },
    5162: (e, t, a) => {
      a.d(t, { Z: () => l });
      var n = a(7294),
        r = a(6010);
      const o = "tabItem_Ymn6";
      function l(e) {
        let { children: t, hidden: a, className: l } = e;
        return n.createElement(
          "div",
          { role: "tabpanel", className: (0, r.Z)(o, l), hidden: a },
          t,
        );
      }
    },
    4866: (e, t, a) => {
      a.d(t, { Z: () => T });
      var n = a(7462),
        r = a(7294),
        o = a(6010),
        l = a(2466),
        i = a(6550),
        s = a(1980),
        u = a(7392),
        c = a(12);
      function p(e) {
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
      function d(e) {
        const { values: t, children: a } = e;
        return (0, r.useMemo)(() => {
          const e = t ?? p(a);
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
      function f(e) {
        let { queryString: t = !1, groupId: a } = e;
        const n = (0, i.k6)(),
          o = (function (e) {
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
          (0, s._X)(o),
          (0, r.useCallback)(
            (e) => {
              if (!o) return;
              const t = new URLSearchParams(n.location.search);
              t.set(o, e), n.replace({ ...n.location, search: t.toString() });
            },
            [o, n],
          ),
        ];
      }
      function b(e) {
        const { defaultValue: t, queryString: a = !1, groupId: n } = e,
          o = d(e),
          [l, i] = (0, r.useState)(() =>
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
            })({ defaultValue: t, tabValues: o }),
          ),
          [s, u] = f({ queryString: a, groupId: n }),
          [p, b] = (function (e) {
            let { groupId: t } = e;
            const a = (function (e) {
                return e ? `docusaurus.tab.${e}` : null;
              })(t),
              [n, o] = (0, c.Nk)(a);
            return [
              n,
              (0, r.useCallback)(
                (e) => {
                  a && o.set(e);
                },
                [a, o],
              ),
            ];
          })({ groupId: n }),
          k = (() => {
            const e = s ?? p;
            return m({ value: e, tabValues: o }) ? e : null;
          })();
        (0, r.useLayoutEffect)(() => {
          k && i(k);
        }, [k]);
        return {
          selectedValue: l,
          selectValue: (0, r.useCallback)(
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
      var k = a(2389);
      const y = "tabList__CuJ",
        h = "tabItem_LNqP";
      function g(e) {
        let {
          className: t,
          block: a,
          selectedValue: i,
          selectValue: s,
          tabValues: u,
        } = e;
        const c = [],
          { blockElementScrollPositionUntilNextRender: p } = (0, l.o5)(),
          d = (e) => {
            const t = e.currentTarget,
              a = c.indexOf(t),
              n = u[a].value;
            n !== i && (p(t), s(n));
          },
          m = (e) => {
            let t = null;
            switch (e.key) {
              case "Enter":
                d(e);
                break;
              case "ArrowRight": {
                const a = c.indexOf(e.currentTarget) + 1;
                t = c[a] ?? c[0];
                break;
              }
              case "ArrowLeft": {
                const a = c.indexOf(e.currentTarget) - 1;
                t = c[a] ?? c[c.length - 1];
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
            className: (0, o.Z)("tabs", { "tabs--block": a }, t),
          },
          u.map((e) => {
            let { value: t, label: a, attributes: l } = e;
            return r.createElement(
              "li",
              (0, n.Z)(
                {
                  role: "tab",
                  tabIndex: i === t ? 0 : -1,
                  "aria-selected": i === t,
                  key: t,
                  ref: (e) => c.push(e),
                  onKeyDown: m,
                  onClick: d,
                },
                l,
                {
                  className: (0, o.Z)("tabs__item", h, l?.className, {
                    "tabs__item--active": i === t,
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
      function w(e) {
        const t = b(e);
        return r.createElement(
          "div",
          { className: (0, o.Z)("tabs-container", y) },
          r.createElement(g, (0, n.Z)({}, e, t)),
          r.createElement(v, (0, n.Z)({}, e, t)),
        );
      }
      function T(e) {
        const t = (0, k.Z)();
        return r.createElement(w, (0, n.Z)({ key: String(t) }, e));
      }
    },
    4594: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => m,
          frontMatter: () => i,
          metadata: () => u,
          toc: () => p,
        });
      var n = a(7462),
        r = (a(7294), a(3905)),
        o = a(4866),
        l = a(5162);
      const i = {
          title: "Quickstart",
          description: "Quickstart",
          sidebar_position: 1,
        },
        s = void 0,
        u = {
          unversionedId: "HowTo/Quickstart",
          id: "HowTo/Quickstart",
          title: "Quickstart",
          description: "Quickstart",
          source: "@site/docs/HowTo/Quickstart.md",
          sourceDirName: "HowTo",
          slug: "/HowTo/Quickstart",
          permalink: "/HowTo/Quickstart",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/HowTo/Quickstart.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Nicolas MASSART",
          lastUpdatedAt: 1600856978,
          formattedLastUpdatedAt: "Sep 23, 2020",
          sidebarPosition: 1,
          frontMatter: {
            title: "Quickstart",
            description: "Quickstart",
            sidebar_position: 1,
          },
          sidebar: "docSidebar",
          previous: { title: "How To", permalink: "/category/how-to" },
          next: { title: "Dependencies", permalink: "/HowTo/Dependencies" },
        },
        c = {},
        p = [
          { value: "Prerequisites", id: "prerequisites", level: 2 },
          {
            value: "Starting Orion and sending a payload",
            id: "starting-orion-and-sending-a-payload",
            level: 2,
          },
          {
            value: "1. Create password file",
            id: "1-create-password-file",
            level: 3,
          },
          { value: "2. Generate keys", id: "2-generate-keys", level: 3 },
          {
            value: "3. Create a configuration file",
            id: "3-create-a-configuration-file",
            level: 3,
          },
          { value: "4. Start Orion", id: "4-start-orion", level: 3 },
          {
            value: "5. Confirm Orion is running",
            id: "5-confirm-orion-is-running",
            level: 3,
          },
          { value: "6. Send a payload", id: "6-send-a-payload", level: 3 },
          {
            value: "7. Receive a payload",
            id: "7-receive-a-payload",
            level: 3,
          },
        ],
        d = { toc: p };
      function m(e) {
        let { components: t, ...a } = e;
        return (0, r.kt)(
          "wrapper",
          (0, n.Z)({}, d, a, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h2", { id: "prerequisites" }, "Prerequisites"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/HowTo/Install-Binaries" },
              "Orion",
            ),
          ),
          (0, r.kt)(
            "h2",
            { id: "starting-orion-and-sending-a-payload" },
            "Starting Orion and sending a payload",
          ),
          (0, r.kt)(
            "h3",
            { id: "1-create-password-file" },
            "1. Create password file",
          ),
          (0, r.kt)(
            "p",
            null,
            "Create a file containing the password used to encrypt the key pair.",
          ),
          (0, r.kt)(
            "p",
            null,
            "The password is specified when ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "#2-generate-keys" },
              "generating the keys",
            ),
            ", and the file is specified for the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "passwords"),
            " property in the\n",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "#3-create-a-configuration-file" },
              "configuration file",
            ),
            ".",
          ),
          (0, r.kt)("h3", { id: "2-generate-keys" }, "2. Generate keys"),
          (0, r.kt)(
            "p",
            null,
            "To generate a public/private key pair for the Orion node:",
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "orion -g nodeKey\n",
            ),
          ),
          (0, r.kt)(
            "p",
            null,
            "At the prompt, specify the ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "#1-create-password-file" },
              "password",
            ),
            " to encrypt the key pair.",
          ),
          (0, r.kt)(
            "p",
            null,
            "The public/private key pair is generated, and the keys are saved in the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "nodeKey.pub"),
            " and ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "nodeKey.key"),
            " files.",
          ),
          (0, r.kt)(
            "h3",
            { id: "3-create-a-configuration-file" },
            "3. Create a configuration file",
          ),
          (0, r.kt)(
            "p",
            null,
            "Create a file called ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "orion.conf"),
            " and add the following properties:",
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-toml" },
              'nodeurl = "http://127.0.0.1:8080/"\nnodeport = 8080\nclienturl = "http://127.0.0.1:8888/"\nclientport = 8888\npublickeys = ["nodeKey.pub"]\nprivatekeys = ["nodeKey.key"]\npasswords = "<PathToPasswordFile>/passwordFile"\ntls = "off"\n',
            ),
          ),
          (0, r.kt)("h3", { id: "4-start-orion" }, "4. Start Orion"),
          (0, r.kt)(
            "p",
            null,
            "Start Orion specifying the ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "#3-create-a-configuration-file" },
              "configuration file",
            ),
            ":",
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "orion orion.conf\n",
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "5-confirm-orion-is-running" },
            "5. Confirm Orion is running",
          ),
          (0, r.kt)(
            "p",
            null,
            "Use the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "upcheck"),
            " method to confirm Orion is up and running:",
          ),
          (0, r.kt)(
            o.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              l.Z,
              { label: "Request", value: "tab1", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "curl http://localhost:8888/upcheck\n",
                ),
              ),
            ),
            (0, r.kt)(
              l.Z,
              { label: "Result", value: "tab2", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "I'm up!\n",
                ),
              ),
            ),
          ),
          (0, r.kt)("h3", { id: "6-send-a-payload" }, "6. Send a payload"),
          (0, r.kt)(
            "p",
            null,
            "With one node running, send a payload to yourself where the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "from"),
            " and ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "to"),
            " values are the ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "#2-generate-keys" },
              "generated public key",
            ),
            " (",
            (0, r.kt)("inlineCode", { parentName: "p" }, "nodeKey.pub"),
            "):",
          ),
          (0, r.kt)(
            o.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              l.Z,
              { label: "Request", value: "tab1", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  'curl -X POST \\\nhttp://localhost:8888/send \\\n-H \'Content-Type: application/json\' \\\n-d \'{\n        "payload": "SGVsbG8sIFdvcmxkIQ==",\n        "from": "<OrionPublicKey>",\n        "to": ["<OrionPublicKey>"]\n    }\'\n',
                ),
              ),
            ),
            (0, r.kt)(
              l.Z,
              { label: "Result", value: "tab2", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  '{"key":"LcF7I+UnR2XBdSxZesiYE/lTtxVfFeY4EvL9fDXb0Uo="}\n',
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "7-receive-a-payload" },
            "7. Receive a payload",
          ),
          (0, r.kt)(
            "p",
            null,
            "Use the key received when ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "#6-send-a-payload" },
              "sending the payload",
            ),
            " to receive the payload:",
          ),
          (0, r.kt)(
            o.Z,
            { mdxType: "Tabs" },
            (0, r.kt)(
              l.Z,
              { label: "Request", value: "tab1", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  'curl -X POST \\\nhttp://localhost:8888/receive \\\n-H \'Content-Type: application/json\' \\\n-d \'{\n        "key": "<KeyReceivedFromSendMethod>",\n        "to": "<OrionPublicKey>"\n    }\'\n',
                ),
              ),
            ),
            (0, r.kt)(
              l.Z,
              { label: "Result", value: "tab2", mdxType: "TabItem" },
              (0, r.kt)(
                "pre",
                null,
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  '{"payload":"SGVsbG8sIFdvcmxkIQ=="}\n',
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "p",
            null,
            "Where ",
            (0, r.kt)(
              "inlineCode",
              { parentName: "p" },
              "SGVsbG8sIFdvcmxkIQ==",
            ),
            " is ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "Hello, World!"),
            " in Base64.",
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
