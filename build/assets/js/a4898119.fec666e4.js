"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [10],
  {
    3905: (e, t, n) => {
      n.d(t, { Zo: () => c, kt: () => m });
      var r = n(7294);
      function a(e, t, n) {
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
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
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
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var p = r.createContext({}),
        s = function (e) {
          var t = r.useContext(p),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
        },
        c = function (e) {
          var t = s(e.components);
          return r.createElement(p.Provider, { value: t }, e.children);
        },
        d = "mdxType",
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        k = r.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            o = e.originalType,
            p = e.parentName,
            c = l(e, ["components", "mdxType", "originalType", "parentName"]),
            d = s(n),
            k = a,
            m = d["".concat(p, ".").concat(k)] || d[k] || u[k] || o;
          return n
            ? r.createElement(m, i(i({ ref: t }, c), {}, { components: n }))
            : r.createElement(m, i({ ref: t }, c));
        });
      function m(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var o = n.length,
            i = new Array(o);
          i[0] = k;
          var l = {};
          for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
          (l.originalType = e),
            (l[d] = "string" == typeof e ? e : a),
            (i[1] = l);
          for (var s = 2; s < o; s++) i[s] = n[s];
          return r.createElement.apply(null, i);
        }
        return r.createElement.apply(null, n);
      }
      k.displayName = "MDXCreateElement";
    },
    6391: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => s,
        });
      var r = n(7462),
        a = (n(7294), n(3905));
      const o = {
          title: "Use Docker",
          description: "Run Orion using the official docker image",
          sidebar_position: 3,
        },
        i = "Running the Orion Docker Image",
        l = {
          unversionedId: "HowTo/Run-Docker-Image",
          id: "HowTo/Run-Docker-Image",
          title: "Use Docker",
          description: "Run Orion using the official docker image",
          source: "@site/docs/HowTo/Run-Docker-Image.md",
          sourceDirName: "HowTo",
          slug: "/HowTo/Run-Docker-Image",
          permalink: "/HowTo/Run-Docker-Image",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/HowTo/Run-Docker-Image.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Nicolas MASSART",
          lastUpdatedAt: 1602242872,
          formattedLastUpdatedAt: "Oct 9, 2020",
          sidebarPosition: 3,
          frontMatter: {
            title: "Use Docker",
            description: "Run Orion using the official docker image",
            sidebar_position: 3,
          },
          sidebar: "docSidebar",
          previous: {
            title: "Use Binary",
            permalink: "/HowTo/Install-Binaries",
          },
          next: {
            title: "Build from source",
            permalink: "/HowTo/Build-From-Source",
          },
        },
        p = {},
        s = [
          {
            value: "1. Create the Directory Structure",
            id: "1-create-the-directory-structure",
            level: 2,
          },
          {
            value: "2. Create Password File",
            id: "2-create-password-file",
            level: 2,
          },
          { value: "3. Generate Keys", id: "3-generate-keys", level: 2 },
          {
            value: "4. Create a Configuration File",
            id: "4-create-a-configuration-file",
            level: 2,
          },
          { value: "5. Start Orion", id: "5-start-orion", level: 2 },
        ],
        c = { toc: s };
      function d(e) {
        let { components: t, ...n } = e;
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)(
            "h1",
            { id: "running-the-orion-docker-image" },
            "Running the Orion Docker Image",
          ),
          (0, a.kt)(
            "p",
            null,
            "Use the Orion Docker image to run a single Orion node without installing Orion.",
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Prerequisites"),
            ":",
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                { parentName: "li", href: "https://docs.docker.com/install/" },
                "Docker",
              ),
            ),
          ),
          (0, a.kt)(
            "admonition",
            { type: "info" },
            (0, a.kt)(
              "p",
              { parentName: "admonition" },
              "Do not mount a volume at the (",
              (0, a.kt)("inlineCode", { parentName: "p" }, "/opt/orion"),
              ") path, this prevents\nOrion from safely launching.",
            ),
          ),
          (0, a.kt)(
            "p",
            null,
            "In this example the required volume is mounted at the ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "/data"),
            " path.",
          ),
          (0, a.kt)(
            "p",
            null,
            "In this example we create the ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "#2-create-password-file" },
              "password file",
            ),
            ", ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "#3-generate-keys" },
              "public/private key pairs",
            ),
            ",\nand ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "#4-create-a-configuration-file" },
              "Orion configuration file",
            ),
            " in the\n",
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "/Users/user1/Node1/Orion",
            ),
            " directory.",
          ),
          (0, a.kt)(
            "h2",
            { id: "1-create-the-directory-structure" },
            "1. Create the Directory Structure",
          ),
          (0, a.kt)(
            "p",
            null,
            "Create the sub-directories in the home directory.",
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "mkdir -p Node1/Orion\n",
            ),
          ),
          (0, a.kt)(
            "h2",
            { id: "2-create-password-file" },
            "2. Create Password File",
          ),
          (0, a.kt)(
            "p",
            null,
            "Create a file containing the password used to encrypt the key pair.",
          ),
          (0, a.kt)(
            "p",
            null,
            "Specify the password when ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "#3-generate-keys" },
              "generating the keys",
            ),
            ", the\nfile is specified for the ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "passwords"),
            " property in the ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "#4-create-a-configuration-file" },
              "configuration file",
            ),
            ".",
          ),
          (0, a.kt)("h2", { id: "3-generate-keys" }, "3. Generate Keys"),
          (0, a.kt)(
            "p",
            null,
            "Generate the public/private key pairs for the Orion node using Docker:",
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "docker run -i --rm --mount type=bind,source=/Users/user1/Node1/Orion,target=/data pegasyseng/orion:latest -g /data/testKey\n",
            ),
          ),
          (0, a.kt)(
            "p",
            null,
            "At the prompt, enter the ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "#2-create-password-file" },
              "password",
            ),
            " to encrypt the\nkey pair.",
          ),
          (0, a.kt)(
            "p",
            null,
            "The public/private key pair is generated and the keys saved in the ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "nodeKey.pub"),
            "\nand ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "nodeKey.key"),
            " files. The files are generated in the ",
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "/Users/user1/Node1/Orion",
            ),
            "\ndirectory.",
          ),
          (0, a.kt)(
            "h2",
            { id: "4-create-a-configuration-file" },
            "4. Create a Configuration File",
          ),
          (0, a.kt)(
            "p",
            null,
            "Create a file called ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "orion.conf"),
            " and add the following ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/Reference/Configuration-File" },
              "properties",
            ),
            ":",
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-toml" },
              'nodeurl = "http://127.0.0.1:8080/"\nnodeport = 8080\nnodenetworkinterface = "0.0.0.0"\nclienturl = "http://127.0.0.1:8888/"\nclientport = 8888\nclientnetworkinterface = "0.0.0.0"\npublickeys = ["/data/nodeKey.pub"]\nprivatekeys = ["/data/nodeKey.key"]\npasswords = "/data/passwordFile"\nworkdir = "/data"\ntls = "off"\n',
            ),
          ),
          (0, a.kt)(
            "admonition",
            { type: "note" },
            (0, a.kt)(
              "ul",
              { parentName: "admonition" },
              (0, a.kt)(
                "li",
                { parentName: "ul" },
                "The file locations specified in ",
                (0, a.kt)("inlineCode", { parentName: "li" }, "orion.conf"),
                " is relative the mounted\npath (",
                (0, a.kt)("inlineCode", { parentName: "li" }, "/data"),
                ").",
              ),
              (0, a.kt)(
                "li",
                { parentName: "ul" },
                (0, a.kt)("inlineCode", { parentName: "li" }, "nodeurl"),
                " and ",
                (0, a.kt)("inlineCode", { parentName: "li" }, "clienturl"),
                " is set to the host IP address, not the\nDocker container's internal IP address.",
              ),
              (0, a.kt)(
                "li",
                { parentName: "ul" },
                (0, a.kt)(
                  "inlineCode",
                  { parentName: "li" },
                  "clientnetworkinterface",
                ),
                " is set to listen on all available network\ninterfaces (",
                (0, a.kt)("inlineCode", { parentName: "li" }, "0.0.0.0"),
                ").",
              ),
            ),
          ),
          (0, a.kt)("h2", { id: "5-start-orion" }, "5. Start Orion"),
          (0, a.kt)("p", null, "To start the Orion node:"),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "docker run -p 8080:8080 -p 8888:8888 --mount type=bind,source=/Users/user1/Node1/Orion,target=/data pegasyseng/orion:latest /data/orion.conf\n",
            ),
          ),
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
