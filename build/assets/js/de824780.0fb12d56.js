"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [256],
  {
    3905: (e, t, n) => {
      n.d(t, { Zo: () => d, kt: () => m });
      var i = n(7294);
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
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
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
          i,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              r = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (n = o[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var s = i.createContext({}),
        c = function (e) {
          var t = i.useContext(s),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
        },
        d = function (e) {
          var t = c(e.components);
          return i.createElement(s.Provider, { value: t }, e.children);
        },
        p = "mdxType",
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        k = i.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            d = l(e, ["components", "mdxType", "originalType", "parentName"]),
            p = c(n),
            k = r,
            m = p["".concat(s, ".").concat(k)] || p[k] || u[k] || o;
          return n
            ? i.createElement(m, a(a({ ref: t }, d), {}, { components: n }))
            : i.createElement(m, a({ ref: t }, d));
        });
      function m(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var o = n.length,
            a = new Array(o);
          a[0] = k;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e),
            (l[p] = "string" == typeof e ? e : r),
            (a[1] = l);
          for (var c = 2; c < o; c++) a[c] = n[c];
          return i.createElement.apply(null, a);
        }
        return i.createElement.apply(null, n);
      }
      k.displayName = "MDXCreateElement";
    },
    83: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => s,
          contentTitle: () => a,
          default: () => p,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => c,
        });
      var i = n(7462),
        r = (n(7294), n(3905));
      const o = { title: "TLS", description: "TLS", sidebar_position: 3 },
        a = "TLS",
        l = {
          unversionedId: "Tutorials/TLS",
          id: "Tutorials/TLS",
          title: "TLS",
          description: "TLS",
          source: "@site/docs/Tutorials/TLS.md",
          sourceDirName: "Tutorials",
          slug: "/Tutorials/TLS",
          permalink: "/Tutorials/TLS",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/Tutorials/TLS.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Nicolas MASSART",
          lastUpdatedAt: 1602242872,
          formattedLastUpdatedAt: "Oct 9, 2020",
          sidebarPosition: 3,
          frontMatter: {
            title: "TLS",
            description: "TLS",
            sidebar_position: 3,
          },
          sidebar: "docSidebar",
          previous: {
            title: "Use PostgreSQL",
            permalink: "/Tutorials/Using-PostgreSQL",
          },
          next: {
            title: "Generate Orion Certificates",
            permalink: "/Tutorials/Generating-Certificates",
          },
        },
        s = {},
        c = [
          { value: "Configure TLS", id: "configure-tls", level: 2 },
          {
            value: "Orion-to-Orion TLS Properties",
            id: "orion-to-orion-tls-properties",
            level: 2,
          },
          { value: "<code>tls</code>", id: "tls-1", level: 3 },
          {
            value: "<code>tlsservercert</code>",
            id: "tlsservercert",
            level: 3,
          },
          {
            value: "<code>tlsserverchain</code>",
            id: "tlsserverchain",
            level: 3,
          },
          { value: "<code>tlsserverkey</code>", id: "tlsserverkey", level: 3 },
          {
            value: "<code>tlsservertrust</code>",
            id: "tlsservertrust",
            level: 3,
          },
          {
            value: "<code>tlsknownclients</code>",
            id: "tlsknownclients",
            level: 3,
          },
          {
            value: "<code>tlsclientcert</code>",
            id: "tlsclientcert",
            level: 3,
          },
          {
            value: "<code>tlsclientchain</code>",
            id: "tlsclientchain",
            level: 3,
          },
          { value: "<code>tlsclientkey</code>", id: "tlsclientkey", level: 3 },
          {
            value: "<code>tlsclienttrust</code>",
            id: "tlsclienttrust",
            level: 3,
          },
          {
            value: "<code>tlsknownservers</code>",
            id: "tlsknownservers",
            level: 3,
          },
          {
            value: "Client-to-Orion TLS Properties",
            id: "client-to-orion-tls-properties",
            level: 2,
          },
          {
            value: "<code>clientconnectiontls</code>",
            id: "clientconnectiontls",
            level: 3,
          },
          {
            value: "<code>clientconnectiontlsservercert</code>",
            id: "clientconnectiontlsservercert",
            level: 3,
          },
          {
            value: "<code>clientconnectiontlsserverchain</code>",
            id: "clientconnectiontlsserverchain",
            level: 3,
          },
          {
            value: "<code>clientconnectiontlsserverkey</code>",
            id: "clientconnectiontlsserverkey",
            level: 3,
          },
          {
            value: "<code>clientconnectiontlsservertrust</code>",
            id: "clientconnectiontlsservertrust",
            level: 3,
          },
          {
            value: "<code>clientconnectiontlsknownclients</code>",
            id: "clientconnectiontlsknownclients",
            level: 3,
          },
        ],
        d = { toc: c };
      function p(e) {
        let { components: t, ...n } = e;
        return (0, r.kt)(
          "wrapper",
          (0, i.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "tls" }, "TLS"),
          (0, r.kt)(
            "p",
            null,
            "Orion supports the Transport Layer Security (TLS) protocol to enable secure\ncommunications between clients (for example ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "https://besu.hyperledger.org/en/latest/Concepts/TLS/",
              },
              "Besu",
            ),
            ") and Orion, and\nbetween Orion nodes.",
          ),
          (0, r.kt)(
            "p",
            null,
            "Enable TLS and set TLS properties in the ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/Reference/Configuration-File" },
              "Orion configuration file",
            ),
            ":",
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "For client TLS, set the ",
              (0, r.kt)(
                "a",
                { parentName: "li", href: "#clientconnectiontls" },
                (0, r.kt)(
                  "inlineCode",
                  { parentName: "a" },
                  "clientconnectiontls",
                ),
              ),
              " property to ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "strict"),
              ".",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "For TLS between Orion nodes set the ",
              (0, r.kt)(
                "a",
                { parentName: "li", href: "#tls" },
                (0, r.kt)("inlineCode", { parentName: "a" }, "tls"),
              ),
              " property to ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "strict"),
              ".",
            ),
          ),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/Tutorials/Generating-Certificates" },
              "Generate Orion certificates",
            ),
            " before configuring TLS.",
          ),
          (0, r.kt)("h2", { id: "configure-tls" }, "Configure TLS"),
          (0, r.kt)(
            "p",
            null,
            "Configure TLS in the ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/Reference/Configuration-File" },
              "Orion configuration file",
            ),
            ".",
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-toml",
                metastring:
                  'title="Example Orion configuration file using the created certificates"',
                title: '"Example',
                Orion: !0,
                configuration: !0,
                file: !0,
                using: !0,
                the: !0,
                created: !0,
                'certificates"': !0,
              },
              'nodeurl = "<YOUR-COMMON-NAME>:8080/"\nnodeport = 8080\n\nclienturl = "<YOUR-COMMON-NAME>:8888/"\nclientport = 8888\n\nothernodes = ["<YOUR-COMMON-NAME>:8080"]\n\nworkdir = "<PATH-TO>/orion/bin"\n\npublickeys = ["orion.pub"]\nprivatekeys = ["orion.key"]\n\ntls = "strict"\n\ntlsservercert = "<PATH-TO>/orion/bin/orion_cer.pem"\ntlsserverchain = ["<PATH-TO>/orion/bin/orion_ca.pem"]\ntlsserverkey = "<PATH-TO>/orion/bin/orion_cer.key"\n\ntlsclientcert = "<PATH-TO>/orion/bin/orion_cer.pem"\ntlsclientchain = ["<PATH-TO>/orion/bin/orion_ca.pem"]\ntlsclientkey = "<PATH-TO>/orion/bin/orion_cer.key"\n\ntlsclienttrust = "ca"\ntlsservertrust = "ca"\n\nclientconnectiontls = "strict"\nclientconnectiontlsservercert = "<PATH-TO>/orion/bin/orion_cer.pem"\nclientconnectiontlscertchain = []\nclientconnectiontlsserverkey = "<PATH-TO>/orion/bin/orion_cer.key"\nclientconnectiontlsservertrust = "whitelist"\nclientconnectiontlsknownclients = "<PATH-TO>/orion/bin/orionKnownClients"\n\nnodenetworkinterface = "0.0.0.0"\nclientnetworkinterface = "0.0.0.0"\n',
            ),
          ),
          (0, r.kt)(
            "h2",
            { id: "orion-to-orion-tls-properties" },
            "Orion-to-Orion TLS Properties",
          ),
          (0, r.kt)(
            "p",
            null,
            "Properties to configure TLS between Orion nodes.",
          ),
          (0, r.kt)(
            "h3",
            { id: "tls-1" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "tls"),
          ),
          (0, r.kt)("p", null, "TLS status options are:"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "strict"),
              " - All connections to and from other Orion nodes must use TLS with\nmutual authentication. See ",
              (0, r.kt)(
                "a",
                { parentName: "li", href: "#tlsservertrust" },
                (0, r.kt)("inlineCode", { parentName: "a" }, "tlsservertrust"),
              ),
              " and ",
              (0, r.kt)(
                "a",
                { parentName: "li", href: "#tlsclienttrust" },
                (0, r.kt)("inlineCode", { parentName: "a" }, "tlsclienttrust"),
              ),
              ".",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "off"),
              " - Mutually authenticated TLS is not used between Orion nodes.\nUnauthenticated connections to HTTPS hosts are still possible.\nUse only if another transport security mechanism like WireGuard is in place.",
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "tlsservercert" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "tlsservercert"),
          ),
          (0, r.kt)(
            "p",
            null,
            "File containing the server TLS certificate in Apache format. The certificate identifies this\nnode to other nodes when they connect to the node API. Orion will create the certificate if it doesn't exist.",
          ),
          (0, r.kt)(
            "h3",
            { id: "tlsserverchain" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "tlsserverchain"),
          ),
          (0, r.kt)(
            "p",
            null,
            "List of files that make up the CA trust chain for the server certificate. The list can be empty for autogenerated / non-PKI-based\ncertificates.",
          ),
          (0, r.kt)(
            "h3",
            { id: "tlsserverkey" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "tlsserverkey"),
          ),
          (0, r.kt)(
            "p",
            null,
            "File containing the private key for the server TLS certificate. If the private key does not exist, it is\ncreated.",
          ),
          (0, r.kt)(
            "h3",
            { id: "tlsservertrust" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "tlsservertrust"),
          ),
          (0, r.kt)(
            "p",
            null,
            "TLS trust mode for the server. The trust mode defines which nodes can connect to the server. Options:",
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)("inlineCode", { parentName: "p" }, "whitelist"),
                " - Only nodes presenting certificates with fingerprints in ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "tlsknownclients"),
                "\ncan connect.",
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)("inlineCode", { parentName: "p" }, "tofu"),
                " - Trust-on-first-use. Only the first node that connects identifying as a certain host can connect\nas the same host in the future. Nodes identifying as other hosts can still connect.\nTo restrict access, change the mode to ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "whitelist"),
                " after populating the ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "tlsknownclients"),
                " list.",
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)("inlineCode", { parentName: "p" }, "ca"),
                " -  Only nodes with a valid certificate and chain of trust to one of the system root certificates\ncan connect. Use the ",
                (0, r.kt)(
                  "inlineCode",
                  { parentName: "p" },
                  "SYSTEM_CERTIFICATE_PATH",
                ),
                " environment variable to override the directory containing\ntrusted root certificates.",
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)("inlineCode", { parentName: "p" }, "ca-or-whitelist"),
                " - Combination of ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "ca"),
                " and ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "whitelist"),
                ".",
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)("inlineCode", { parentName: "p" }, "ca-or-tofu"),
                " - Combination of ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "ca"),
                " and ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "tofu"),
                ". If a certificate is valid, it is always allowed and added\nto the ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "tlsknownclients"),
                " list. If it is self-signed, it is allowed only if it is the first certificate\nthis node has seen for that host.",
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)("inlineCode", { parentName: "p" }, "insecure-tofa"),
                " - Trust-on-first-access. On first connection, the Common Name\nand fingerprint of the presented certificate is added to ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "tlsknownclients"),
                ".\nIn subsequent connections, the client connection is rejected if the fingerprint has changed.",
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)(
                  "inlineCode",
                  { parentName: "p" },
                  "insecure-ca-or-tofa",
                ),
                " - A combination of ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "ca"),
                " and ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "insecure-tofa"),
                ".",
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)("inlineCode", { parentName: "p" }, "insecure-record"),
                " - Any client can connect. The client certificate fingerprint is added to the ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "tlsknownclients"),
                " file.",
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)(
                  "inlineCode",
                  { parentName: "p" },
                  "insecure-ca-or-record",
                ),
                " - A combination of ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "ca"),
                " and ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "insecure-record"),
                ".",
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)(
                  "inlineCode",
                  { parentName: "p" },
                  "insecure-no-validation",
                ),
                " - Any client can connect. Clients are added to the ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "tlsknownclients"),
                " file.",
              ),
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "tlsknownclients" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "tlsknownclients"),
          ),
          (0, r.kt)(
            "p",
            null,
            "TLS known clients for the server. The ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "tlsknownclients"),
            " contains the fingerprints of public keys of other\nnodes that can connect to this node for the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "ca-or-tofu"),
            ", ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "tofu"),
            ", and ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "whitelist"),
            " trust modes.",
          ),
          (0, r.kt)(
            "p",
            null,
            "You can ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "/Tutorials/Generating-Certificates#generating-certificates-using-orion",
              },
              "use Orion to generate certificates",
            ),
            "\nand automatically populate the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "tlsknownclients"),
            " file.",
          ),
          (0, r.kt)(
            "h3",
            { id: "tlsclientcert" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "tlsclientcert"),
          ),
          (0, r.kt)(
            "p",
            null,
            "File containing the client TLS certificate in Apache format. The certificate identifies this\nnode to other nodes when it is connecting to the node API. If the certificate does not\nexist, it is created.",
          ),
          (0, r.kt)(
            "h3",
            { id: "tlsclientchain" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "tlsclientchain"),
          ),
          (0, r.kt)(
            "p",
            null,
            "List of files that make up the CA trust chain for the client certificate. The list can be empty for autogenerated / non-PKI-based certificates.",
          ),
          (0, r.kt)(
            "h3",
            { id: "tlsclientkey" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "tlsclientkey"),
          ),
          (0, r.kt)(
            "p",
            null,
            "File containing the private key for the client TLS certificate. If the private key does not exist, it is\ncreated.",
          ),
          (0, r.kt)(
            "h3",
            { id: "tlsclienttrust" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "tlsclienttrust"),
          ),
          (0, r.kt)(
            "p",
            null,
            "TLS trust mode for the client. The trust mode defines the servers to which this node connects. Options:",
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "whitelist"),
              " - Nodes only connects to servers it has previously seen and have been added to ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "tlsknownservers"),
              ".\nNew servers are not added to ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "tlsknownservers"),
              ".",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "tofu"),
              " - Trust-on-first-use. Node only connects to the same server for any given host.\n`This is similar to how OpenSSH works.",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "ca"),
              " -  Node only connects to servers with a valid certificate and chain of trust to one of the\nsystem root certificates.\nUse the ",
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "SYSTEM_CERTIFICATE_PATH",
              ),
              " environment variable to override the directory containing\ntrusted root certificates.",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "ca-or-whitelist"),
              " - Combination of ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "ca"),
              " and ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "whitelist"),
              ".",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "ca-or-tofu"),
              " - Combination of ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "ca"),
              " and ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "tofu"),
              ".\nIf a certificate is valid, it is always allowed and added to the ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "tlsknownservers"),
              " list.\nIf it is self-signed, it is allowed only if it is the first certificate this node has seen for that host.",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "insecure-record"),
              " - This node connects to any server, regardless of certificate, and is added to\nthe ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "tlsknownservers"),
              " file.",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "insecure-ca-or-record",
              ),
              " - Combination of ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "ca"),
              " and ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "insecure-record"),
              ".",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "insecure-no-validation",
              ),
              " - Node connects to any server. Servers are added to the ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "tlsknownservers"),
              " file.",
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "tlsknownservers" },
            (0, r.kt)("inlineCode", { parentName: "h3" }, "tlsknownservers"),
          ),
          (0, r.kt)(
            "p",
            null,
            "TLS known servers for the client. The ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "tlsknownservers"),
            " contains the fingerprints of public keys of other\nnodes that this node has encountered for the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "ca-or-tofu"),
            ", ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "tofu"),
            ", and ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "whitelist"),
            " trust modes.",
          ),
          (0, r.kt)(
            "p",
            null,
            "You can ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "/Tutorials/Generating-Certificates#generating-certificates-using-orion",
              },
              "use Orion to generate certificates",
            ),
            "\nand automatically populate the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "tlsknownservers"),
            " file.",
          ),
          (0, r.kt)(
            "h2",
            { id: "client-to-orion-tls-properties" },
            "Client-to-Orion TLS Properties",
          ),
          (0, r.kt)(
            "p",
            null,
            "Properties to configure TLS between the client (for example ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "https://besu.hyperledger.org/en/latest/Concepts/TLS/",
              },
              "Besu",
            ),
            ") and Orion.",
          ),
          (0, r.kt)(
            "h3",
            { id: "clientconnectiontls" },
            (0, r.kt)(
              "inlineCode",
              { parentName: "h3" },
              "clientconnectiontls",
            ),
          ),
          (0, r.kt)("p", null, "TLS status options are:"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "strict"),
              " - All connections between the client and Orion must use TLS with mutual authentication.\nSee ",
              (0, r.kt)(
                "a",
                { parentName: "li", href: "#clientconnectiontlsservertrust" },
                (0, r.kt)(
                  "inlineCode",
                  { parentName: "a" },
                  "clientconnectiontlsservertrust",
                ),
              ),
              ".",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "off"),
              " - Mutually authenticated TLS is not used for client connections.\nUnauthenticated connections to HTTPS hosts are still possible.\nUse only if another transport security mechanism like WireGuard is in place.",
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "clientconnectiontlsservercert" },
            (0, r.kt)(
              "inlineCode",
              { parentName: "h3" },
              "clientconnectiontlsservercert",
            ),
          ),
          (0, r.kt)(
            "p",
            null,
            "File containing the server TLS certificate in Apache format.\nThe certificate identifies this node to clients when they connect. If the certificate does not exist, it is created.",
          ),
          (0, r.kt)(
            "h3",
            { id: "clientconnectiontlsserverchain" },
            (0, r.kt)(
              "inlineCode",
              { parentName: "h3" },
              "clientconnectiontlsserverchain",
            ),
          ),
          (0, r.kt)(
            "p",
            null,
            "List of files that make up the CA trust chain for the server certificate.\nThe list can be empty for autogenerated / non-PKI-based certificates.",
          ),
          (0, r.kt)(
            "h3",
            { id: "clientconnectiontlsserverkey" },
            (0, r.kt)(
              "inlineCode",
              { parentName: "h3" },
              "clientconnectiontlsserverkey",
            ),
          ),
          (0, r.kt)(
            "p",
            null,
            "File containing the private key for the server TLS certificate. If the private\nkey does not exist, it is created.",
          ),
          (0, r.kt)(
            "h3",
            { id: "clientconnectiontlsservertrust" },
            (0, r.kt)(
              "inlineCode",
              { parentName: "h3" },
              "clientconnectiontlsservertrust",
            ),
          ),
          (0, r.kt)(
            "admonition",
            { title: "important", type: "info" },
            (0, r.kt)(
              "p",
              { parentName: "admonition" },
              "When using ",
              (0, r.kt)(
                "a",
                { parentName: "p", href: "/Concepts/Multi-Tenancy" },
                "multi-tenancy",
              ),
              ", ensure the multi-tenant Orion node client API is\nconfigured to allow access only by the multi-tenant Besu node.",
            ),
            (0, r.kt)(
              "p",
              { parentName: "admonition" },
              "Use the ",
              (0, r.kt)("inlineCode", { parentName: "p" }, "whitelist"),
              " trust mode to allow access to the appropriate Besu node.",
            ),
          ),
          (0, r.kt)(
            "p",
            null,
            "The trust mode defines which clients can connect. Options:",
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "whitelist"),
              " - Only clients presenting certificates with fingerprints in ",
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "clientconnectiontlsknownclients",
              ),
              "\nare allowed to connect.",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "tofu"),
              " - Trust-on-first-use. The client is trusted to connect when first connecting to the server.\nThe Common Name and fingerprint of the presented certificate is added to the ",
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "clientconnectiontlsknownclients",
              ),
              " file. The client must present the same fingerprint on subsequent connections.",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "ca"),
              " -  Only clients certificates signed by a trusted CA and chain of trust to one of the system\nroot certificates can connect.\nUse the ",
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "SYSTEM_CERTIFICATE_PATH",
              ),
              " environment variable to override the directory containing trusted root certificates.",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "ca-or-whitelist"),
              " - Combination of ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "ca"),
              " and ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "whitelist"),
              " clients are allowed to connect.",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "ca-or-tofu"),
              " - Combination of ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "ca"),
              " and ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "tofu"),
              ".",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "insecure-tofa"),
              " - Trust-on-first-access.\nThe client is trusted to connect when first connecting to the server.\nThe Common Name and fingerprint of the presented certificate is added to the ",
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "clientconnectiontlsknownclients",
              ),
              " file.\nThe client must present the same fingerprint on subsequent connections.",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "insecure-ca-or-tofa",
              ),
              " - Combination of ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "ca"),
              " and ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "insecure-tofa"),
              ".",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "insecure-record"),
              " - Any client can connect and the certificate fingerprint is be added to the\n",
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "clientconnectiontlsknownclients",
              ),
              " file.",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "insecure-ca-or-record",
              ),
              " - Combination of ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "ca"),
              " and ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "insecure-record"),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "insecure-no-validation",
              ),
              " - Node connects to any server.\nServers are added to the ",
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "clientconnectiontlsknownclients",
              ),
              " file.",
            ),
          ),
          (0, r.kt)(
            "h3",
            { id: "clientconnectiontlsknownclients" },
            (0, r.kt)(
              "inlineCode",
              { parentName: "h3" },
              "clientconnectiontlsknownclients",
            ),
          ),
          (0, r.kt)(
            "p",
            null,
            "TLS known clients file for the client interface. Lists one or more clients that are trusted to connect to Orion.\nThe file contents use the format ",
            (0, r.kt)(
              "inlineCode",
              { parentName: "p" },
              "<common_name> <hex-string>",
            ),
            " where:",
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "<common_name>"),
              " is the Common Name used for the client's keystore",
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("inlineCode", { parentName: "li" }, "<hex-string>"),
              " is the SHA-256 fingerprint of the client's keystore.",
            ),
          ),
          (0, r.kt)(
            "p",
            null,
            "Clients can connect to this node for the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "ca-or-tofu"),
            ", ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "tofu"),
            ", and ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "whitelist"),
            " trust modes.",
          ),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
