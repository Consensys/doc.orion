"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [501],
  {
    3905: (e, n, t) => {
      t.d(n, { Zo: () => p, kt: () => m });
      var a = t(7294);
      function i(e, n, t) {
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
          var a = Object.getOwnPropertySymbols(e);
          n &&
            (a = a.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, a);
        }
        return t;
      }
      function r(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? o(Object(t), !0).forEach(function (n) {
                i(e, n, t[n]);
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
      function l(e, n) {
        if (null == e) return {};
        var t,
          a,
          i = (function (e, n) {
            if (null == e) return {};
            var t,
              a,
              i = {},
              o = Object.keys(e);
            for (a = 0; a < o.length; a++)
              (t = o[a]), n.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (a = 0; a < o.length; a++)
            (t = o[a]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (i[t] = e[t]));
        }
        return i;
      }
      var s = a.createContext({}),
        c = function (e) {
          var n = a.useContext(s),
            t = n;
          return e && (t = "function" == typeof e ? e(n) : r(r({}, n), e)), t;
        },
        p = function (e) {
          var n = c(e.components);
          return a.createElement(s.Provider, { value: n }, e.children);
        },
        d = "mdxType",
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var n = e.children;
            return a.createElement(a.Fragment, {}, n);
          },
        },
        h = a.forwardRef(function (e, n) {
          var t = e.components,
            i = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            p = l(e, ["components", "mdxType", "originalType", "parentName"]),
            d = c(t),
            h = i,
            m = d["".concat(s, ".").concat(h)] || d[h] || u[h] || o;
          return t
            ? a.createElement(m, r(r({ ref: n }, p), {}, { components: t }))
            : a.createElement(m, r({ ref: n }, p));
        });
      function m(e, n) {
        var t = arguments,
          i = n && n.mdxType;
        if ("string" == typeof e || i) {
          var o = t.length,
            r = new Array(o);
          r[0] = h;
          var l = {};
          for (var s in n) hasOwnProperty.call(n, s) && (l[s] = n[s]);
          (l.originalType = e),
            (l[d] = "string" == typeof e ? e : i),
            (r[1] = l);
          for (var c = 2; c < o; c++) r[c] = t[c];
          return a.createElement.apply(null, r);
        }
        return a.createElement.apply(null, t);
      }
      h.displayName = "MDXCreateElement";
    },
    9367: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => s,
          contentTitle: () => r,
          default: () => d,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => c,
        });
      var a = t(7462),
        i = (t(7294), t(3905));
      const o = {
          title: "High availability",
          description: "Orion deployment for high availability",
          sidebar_position: 5,
        },
        r = "High availability",
        l = {
          unversionedId: "HowTo/High-Availability",
          id: "HowTo/High-Availability",
          title: "High availability",
          description: "Orion deployment for high availability",
          source: "@site/docs/HowTo/High-Availability.md",
          sourceDirName: "HowTo",
          slug: "/HowTo/High-Availability",
          permalink: "/HowTo/High-Availability",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/HowTo/High-Availability.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Nicolas MASSART",
          lastUpdatedAt: 1602242872,
          formattedLastUpdatedAt: "Oct 9, 2020",
          sidebarPosition: 5,
          frontMatter: {
            title: "High availability",
            description: "Orion deployment for high availability",
            sidebar_position: 5,
          },
          sidebar: "docSidebar",
          previous: {
            title: "Build from source",
            permalink: "/HowTo/Build-From-Source",
          },
          next: { title: "Concepts", permalink: "/category/concepts" },
        },
        s = {},
        c = [
          { value: "Storage", id: "storage", level: 2 },
          {
            value: "Load balancer configuration",
            id: "load-balancer-configuration",
            level: 2,
          },
        ],
        p = { toc: c };
      function d(e) {
        let { components: n, ...o } = e;
        return (0, i.kt)(
          "wrapper",
          (0, a.Z)({}, p, o, { components: n, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "high-availability" }, "High availability"),
          (0, i.kt)(
            "p",
            null,
            "Orion supports deploying more than one instance sharing the same database.",
          ),
          (0, i.kt)(
            "p",
            null,
            "By placing the instances behind a load balancer, downtime can be limited during maintenance operations.",
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("img", {
              alt: "Orion HA",
              src: t(7825).Z,
              width: "1512",
              height: "648",
            }),
          ),
          (0, i.kt)("h2", { id: "storage" }, "Storage"),
          (0, i.kt)(
            "p",
            null,
            "When configuring for high availability, both storage and known nodes storage must match so Orion\nprovides up to date information. Known nodes are discovered Orion nodes.",
          ),
          (0, i.kt)(
            "admonition",
            { type: "tip" },
            (0, i.kt)(
              "p",
              { parentName: "admonition" },
              "Use the ",
              (0, i.kt)(
                "a",
                { parentName: "p", href: "/Reference/API-Methods#knownnodes" },
                (0, i.kt)("inlineCode", { parentName: "a" }, "knownnodes"),
              ),
              " client API methods to retrieve the\nknown nodes.",
            ),
          ),
          (0, i.kt)(
            "p",
            null,
            "Use a relational database to enable highly available scenarios. Orion supports relational databases\n",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/Tutorials/Using-PostgreSQL" },
              "PostgreSQL",
            ),
            " and ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/Tutorials/Using-Oracle" },
              "Oracle",
            ),
            ".",
          ),
          (0, i.kt)(
            "p",
            null,
            "Orion also supports LevelDB and MapDB stores. LevelDB and MapDB lock the local file system and\nare not suitable for highly available scenarios.",
          ),
          (0, i.kt)(
            "p",
            null,
            "For high availability, ensure the ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "storage"),
            " and ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "knownnodesstorage"),
            " in the ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/Reference/Configuration-File" },
              "configuration file",
            ),
            "\nmatch for all Orion nodes.",
          ),
          (0, i.kt)(
            "h2",
            { id: "load-balancer-configuration" },
            "Load balancer configuration",
          ),
          (0, i.kt)(
            "p",
            null,
            "The load balancer must expose both client and node interfaces.",
          ),
          (0, i.kt)(
            "p",
            null,
            "When configuring for high availability, configure the nodes in the Orion cluster (Orion A and Orion B in the\nabove diagram) with the same set of keys and advertise the load balancer address.",
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-bash",
                metastring: 'title="Nginx configuration with two Orion nodes"',
                title: '"Nginx',
                configuration: !0,
                with: !0,
                two: !0,
                Orion: !0,
                'nodes"': !0,
              },
              "events { }\n\nhttp {\n    upstream orion_8080 {\n        server orion_1:8080 max_fails=3 fail_timeout=5s;\n        server orion_2:8080 max_fails=3 fail_timeout=5s;\n    }\n\n    upstream orion_8888 {\n        server orion_1:8888 max_fails=3 fail_timeout=5s;\n        server orion_2:8888 max_fails=3 fail_timeout=5s;\n    }\n\n    server {\n        listen 8080;\n\n        location / {\n            proxy_pass http://orion_8080;\n        }\n    }\n\n    server {\n        listen 8888;\n\n        location / {\n            proxy_pass http://orion_8888;\n        }\n    }\n}\n",
            ),
          ),
          (0, i.kt)(
            "p",
            null,
            "The configuration defines two upstreams: ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "orion_8080"),
            " and ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "orion_8888"),
            ".",
          ),
          (0, i.kt)(
            "p",
            null,
            "Both upstreams define health checks: ",
            (0, i.kt)(
              "inlineCode",
              { parentName: "p" },
              "max_fails=3 fail_timeout=5s",
            ),
          ),
          (0, i.kt)(
            "p",
            null,
            "The ",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "https://docs.nginx.com/nginx/admin-guide/load-balancer/http-health-check/",
              },
              "health checks",
            ),
            " help\nNginx balance traffic among upstream servers.",
          ),
        );
      }
      d.isMDXComponent = !0;
    },
    7825: (e, n, t) => {
      t.d(n, { Z: () => a });
      const a =
        t.p + "assets/images/Orion-HA-add2b28dd4bc275bd52be640aacc799d.png";
    },
  },
]);
