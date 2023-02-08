"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [322],
  {
    3905: (e, t, n) => {
      n.d(t, { Zo: () => c, kt: () => f });
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
      function i(e, t) {
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
            ? i(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
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
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++)
              (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var s = a.createContext({}),
        p = function (e) {
          var t = a.useContext(s),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
        },
        c = function (e) {
          var t = p(e.components);
          return a.createElement(s.Provider, { value: t }, e.children);
        },
        d = "mdxType",
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        m = a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            i = e.originalType,
            s = e.parentName,
            c = l(e, ["components", "mdxType", "originalType", "parentName"]),
            d = p(n),
            m = r,
            f = d["".concat(s, ".").concat(m)] || d[m] || u[m] || i;
          return n
            ? a.createElement(f, o(o({ ref: t }, c), {}, { components: n }))
            : a.createElement(f, o({ ref: t }, c));
        });
      function f(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var i = n.length,
            o = new Array(i);
          o[0] = m;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e),
            (l[d] = "string" == typeof e ? e : r),
            (o[1] = l);
          for (var p = 2; p < i; p++) o[p] = n[p];
          return a.createElement.apply(null, o);
        }
        return a.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    1036: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => s,
          contentTitle: () => o,
          default: () => d,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => p,
        });
      var a = n(7462),
        r = (n(7294), n(3905));
      const i = {
          title: "Generate Orion Certificates",
          description: "Generate Orion Certificates",
          sidebar_position: 4,
        },
        o = "Generating certificates",
        l = {
          unversionedId: "Tutorials/Generating-Certificates",
          id: "Tutorials/Generating-Certificates",
          title: "Generate Orion Certificates",
          description: "Generate Orion Certificates",
          source: "@site/docs/Tutorials/Generating-Certificates.md",
          sourceDirName: "Tutorials",
          slug: "/Tutorials/Generating-Certificates",
          permalink: "/Tutorials/Generating-Certificates",
          draft: !1,
          editUrl:
            "https://github.com/ConsenSys/doc.orion/tree/main/docs/Tutorials/Generating-Certificates.md",
          tags: [],
          version: "current",
          lastUpdatedBy: "Sally MacFarlane",
          lastUpdatedAt: 1617243507,
          formattedLastUpdatedAt: "Apr 1, 2021",
          sidebarPosition: 4,
          frontMatter: {
            title: "Generate Orion Certificates",
            description: "Generate Orion Certificates",
            sidebar_position: 4,
          },
          sidebar: "docSidebar",
          previous: { title: "TLS", permalink: "/Tutorials/TLS" },
          next: {
            title: "Migrating from Orion to Tessera",
            permalink: "/Tutorials/Migrating-from-Orion-to-Tessera",
          },
        },
        s = {},
        p = [
          {
            value: "Generating certificates using Orion",
            id: "generating-certificates-using-orion",
            level: 2,
          },
          {
            value: "Generating certificates using OpenSSL",
            id: "generating-certificates-using-openssl",
            level: 2,
          },
          { value: "Public DNS is CN", id: "public-dns-is-cn", level: 3 },
          {
            value: "Generating a CA certificate",
            id: "generating-a-ca-certificate",
            level: 4,
          },
          {
            value: "Generating a new certificate for a node",
            id: "generating-a-new-certificate-for-a-node",
            level: 4,
          },
          { value: "IP address is CN", id: "ip-address-is-cn", level: 3 },
          {
            value: "Updating the <code>openssl.cnf</code> file",
            id: "updating-the-opensslcnf-file",
            level: 4,
          },
          {
            value: "Generating a new CSR for a node",
            id: "generating-a-new-csr-for-a-node",
            level: 4,
          },
          {
            value: "Generating a new certificate",
            id: "generating-a-new-certificate",
            level: 4,
          },
        ],
        c = { toc: p };
      function d(e) {
        let { components: t, ...n } = e;
        return (0, r.kt)(
          "wrapper",
          (0, a.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)(
            "h1",
            { id: "generating-certificates" },
            "Generating certificates",
          ),
          (0, r.kt)(
            "p",
            null,
            "You can generate certificates using Orion, or a third-party tool like OpenSSL or\nKeytool.",
          ),
          (0, r.kt)(
            "h2",
            { id: "generating-certificates-using-orion" },
            "Generating certificates using Orion",
          ),
          (0, r.kt)(
            "p",
            null,
            "You can use Orion to generate certificates between Orion nodes. Start the nodes\nwith the TLS trust mode set to ",
            (0, r.kt)(
              "inlineCode",
              { parentName: "p" },
              "insecure-no-validation",
            ),
            " for ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "tlsclienttrust"),
            "\nand ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "tlsservertrust"),
            " until the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "tlsknownclients"),
            " and ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "tlsknownservers"),
            " files are\npopulated. When the files are populated, restart the nodes with the TLS trust\nmode set to ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "whitelist"),
            " for ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "tlsclienttrust"),
            " and ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "tlsservertrust"),
            ".",
          ),
          (0, r.kt)(
            "p",
            null,
            "!!! note\nFor TLS connections between the client (Besu) and Orion, manually configure\nthe client to trust the server connection.",
          ),
          (0, r.kt)(
            "h2",
            { id: "generating-certificates-using-openssl" },
            "Generating certificates using OpenSSL",
          ),
          (0, r.kt)(
            "p",
            null,
            "These procedures explain how to use ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "https://www.openssl.org/source/" },
              "OpenSSL",
            ),
            " to generate certificates when the Common Name (CN) is either the ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "#public-dns-is-cn" },
              "public DNS",
            ),
            " or an ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "#ip-address-is-cn" },
              "IP address",
            ),
            ". Before you begin, ensure OpenSSL is installed.",
          ),
          (0, r.kt)("h3", { id: "public-dns-is-cn" }, "Public DNS is CN"),
          (0, r.kt)("p", null, "To use a public DNS as CN:"),
          (0, r.kt)(
            "h4",
            { id: "generating-a-ca-certificate" },
            "Generating a CA certificate",
          ),
          (0, r.kt)(
            "ol",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                "Generate a key file called ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "orion_ca.key"),
                ":",
              ),
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)(
                  "inlineCode",
                  { parentName: "p" },
                  "openssl genrsa -out orion_ca.key 2048",
                ),
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                "Generate a certificate authority (CA) certificate called ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "orion_ca.pem"),
                " that uses ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "orion_ca.key"),
                ":",
              ),
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)(
                  "inlineCode",
                  { parentName: "p" },
                  "openssl req -x509 -new -nodes -key orion_ca.key -sha256 -days 1024 -out orion_ca.pem",
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "h4",
            { id: "generating-a-new-certificate-for-a-node" },
            "Generating a new certificate for a node",
          ),
          (0, r.kt)(
            "p",
            null,
            "We recommend each node has its own certificate. To generate the certificate:",
          ),
          (0, r.kt)(
            "ol",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                "Generate a key file called ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "orion_cer.key"),
                ":",
              ),
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)(
                  "inlineCode",
                  { parentName: "p" },
                  "openssl genrsa -out orion_cer.key 2048",
                ),
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                "Generate a certificate signing request (CSR) called ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "orion_cer.csr"),
                ":\n",
                (0, r.kt)(
                  "inlineCode",
                  { parentName: "p" },
                  "openssl req -new -key orion_cer.key -out orion_cer.csr",
                ),
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                "Answer each prompt for information to be added to the certificate request.\nEnsure the value you specify for Common Name (CN) matches the host public DNS so the requests from the server are accepted.\nThe name is also specified in the configuration file for the ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "nodeurl"),
                " and ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "clienturl"),
                " options.",
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                "Generate a certificate called ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "orion_cer.pem"),
                " signed by the CA certificate:\n",
                (0, r.kt)(
                  "inlineCode",
                  { parentName: "p" },
                  "openssl x509 -req -in orion_cer.csr -CA orion_ca.pem -CAkey orion_ca.key -CAcreateserial -out orion_cer.pem -days 500 -sha256",
                ),
              ),
            ),
          ),
          (0, r.kt)("h3", { id: "ip-address-is-cn" }, "IP address is CN"),
          (0, r.kt)("p", null, "To use a public IP address as CN:"),
          (0, r.kt)(
            "h4",
            { id: "updating-the-opensslcnf-file" },
            "Updating the ",
            (0, r.kt)("inlineCode", { parentName: "h4" }, "openssl.cnf"),
            " file",
          ),
          (0, r.kt)(
            "ol",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                "Find the ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "openssl.cnf"),
                " file, and create a copy of it.",
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                "In your copy of the ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "openssl.cnf"),
                " file, find the ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "[req]"),
                " section, and add:",
              ),
              (0, r.kt)(
                "pre",
                { parentName: "li" },
                (0, r.kt)(
                  "code",
                  { parentName: "pre", className: "language-ini" },
                  "req_extensions = v3_req\n\n[ v3_req ]\nbasicConstraints = CA:FALSE\nkeyUsage = nonRepudiation, digitalSignature, keyEncipherment\nsubjectAltName = @alt_names\n\n[alt_names]\nDNS.1 = <DNS-PUBLIC-RECORD>\nDNS.2 = <DNS-PRIVATE-RECORD>\nIP.1 = <PUBLIC-IP-ADDRESS>\nIP.2 = <PRIVATE-IP-ADDRESS>\n",
                ),
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                "For each DNS you want to use as an alternate name, specify a DNS.",
                (0, r.kt)("em", { parentName: "p" }, "n"),
                " entry.",
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                "For each IP address you want as an alternate IP address, specify an IP.",
                (0, r.kt)("em", { parentName: "p" }, "n"),
                " entry.",
              ),
            ),
          ),
          (0, r.kt)(
            "h4",
            { id: "generating-a-new-csr-for-a-node" },
            "Generating a new CSR for a node",
          ),
          (0, r.kt)(
            "ol",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                "Run the following command. Substitute your values for all variables.",
              ),
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)(
                  "inlineCode",
                  { parentName: "p" },
                  "openssl req -new -key orion_cer.key -out orion_cer.csr -config <PATH-TO>/openssl.cnf",
                ),
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                "Test whether the certificate was generated with the expected subject alternative names:",
              ),
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)(
                  "inlineCode",
                  { parentName: "p" },
                  "openssl req -text -noout -in orion_cer.csr",
                ),
              ),
              (0, r.kt)(
                "p",
                { parentName: "li" },
                '!!! Example "Example of command output"',
              ),
              (0, r.kt)(
                "pre",
                { parentName: "li" },
                (0, r.kt)(
                  "code",
                  { parentName: "pre" },
                  "```\n[...]\nRequested Extensions:\n      X509v3 Subject Alternative Name:\nDNS:<DNS-PUBLIC-RECORD>,\nDNS:<DNS-PRIVATE-RECORD>,\nIP Address:<PUBLIC-IP-ADDRESS>,\nIP Address:<PRIVATE-IP-ADDRESS>\n[...]\n```\n",
                ),
              ),
            ),
          ),
          (0, r.kt)(
            "h4",
            { id: "generating-a-new-certificate" },
            "Generating a new certificate",
          ),
          (0, r.kt)(
            "ol",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                "Run the following command. Substitute your values for all variables.",
              ),
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)(
                  "inlineCode",
                  { parentName: "p" },
                  "openssl x509 -req -in orion_cer.csr -CA orion_ca.pem -CAkey orion_ca.key -CAcreateserial -out orion_cer.pem -days 500 -sha256 -extfile <PATH-TO>/openssl.cnf -extensions v3_req",
                ),
              ),
            ),
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              (0, r.kt)(
                "p",
                { parentName: "li" },
                "Test whether the generated certificate contains the subject alternative names:",
              ),
              (0, r.kt)(
                "p",
                { parentName: "li" },
                (0, r.kt)(
                  "inlineCode",
                  { parentName: "p" },
                  "openssl x509 -in orion_cer.pem -text -noout",
                ),
              ),
              (0, r.kt)(
                "pre",
                { parentName: "li" },
                (0, r.kt)(
                  "code",
                  {
                    parentName: "pre",
                    className: "language-bash",
                    metastring: 'title="Example of command output"',
                    title: '"Example',
                    of: !0,
                    command: !0,
                    'output"': !0,
                  },
                  "[...]\nX509v3 extensions:\n    X509v3 Subject Alternative Name:\nDNS:<DNS-PUBLIC-RECORD>,\nDNS:<DNS-PRIVATE-RECORD>,\nIP Address:<PUBLIC-IP-ADDRESS>,\nIP Address:<PRIVATE-IP-ADDRESS>\n[...]\n",
                ),
              ),
            ),
          ),
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
