"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [237],
  {
    2322: (e, t, n) => {
      n.r(t), n.d(t, { default: () => f });
      var a = n(7294),
        r = n(6010),
        l = n(9960),
        o = n(2263),
        c = n(4774),
        i = n(7462);
      const s = [
        {
          title: "\ud83c\udfc1 Getting Started",
          link: "/HowTo/Quickstart",
          description: a.createElement(
            a.Fragment,
            null,
            "Get started with Orions by installing as binary, Docker, or via the Quickstart. Hit the ground running in less than 5 minutes!",
          ),
          buttonName: "Go to installation",
          buttonType: "success",
        },
        {
          title: "\ud83d\udcad Migrate to Tessera",
          link: "/Tutorials/Migrating-from-Orion-to-Tessera/",
          description: a.createElement(
            a.Fragment,
            null,
            "Check out how to migrate from Orion to Tessera",
          ),
          buttonName: "Migrate",
          buttonType: "secondary",
        },
        {
          title: "\ud83d\udc68\u200d\ud83d\udcbb Reference",
          link: "/Reference/Orion-CLI-Syntax/",
          description: a.createElement(
            a.Fragment,
            null,
            "Find command line arguments, API methods through JSON-RPC, and general configuration in the References section.",
          ),
          buttonName: "Go to reference",
          buttonType: "info",
        },
      ];
      function m(e) {
        let {
          title: t,
          link: n,
          description: o,
          buttonName: c,
          buttonType: i,
        } = e;
        return a.createElement(
          "div",
          { className: (0, r.Z)("col", "col--4", "margin-top--md") },
          a.createElement(
            "div",
            { className: "card-demo" },
            a.createElement(
              "div",
              { className: "card" },
              a.createElement(
                "div",
                { className: "card__header" },
                a.createElement("h3", null, t),
              ),
              a.createElement(
                "div",
                { className: "card__body" },
                a.createElement("p", null, o),
              ),
              a.createElement(
                "div",
                { className: "card__footer" },
                a.createElement(
                  l.Z,
                  {
                    className: (0, r.Z)(
                      "button",
                      "button--" + i,
                      "button--block",
                    ),
                    to: n,
                  },
                  c,
                ),
              ),
            ),
          ),
        );
      }
      function u() {
        return a.createElement(
          "section",
          { className: (0, r.Z)("margin-top--lg", "margin-bottom--lg") },
          a.createElement(
            "div",
            { className: "container" },
            a.createElement("h1", null, "Quick Links"),
            a.createElement("hr", null),
            a.createElement(
              "div",
              { className: "row" },
              s.map((e, t) => a.createElement(m, (0, i.Z)({ key: t }, e))),
            ),
          ),
        );
      }
      const d = "introductionBlock_wUVz",
        E = "buttons_AeoN",
        b = "forceColor_eaqK",
        g = "title_GqtP",
        N = "subtitle_RlPM";
      function h() {
        const { siteConfig: e } = (0, o.Z)();
        return a.createElement(
          "header",
          { className: (0, r.Z)(d) },
          a.createElement(
            "div",
            { className: "container" },
            a.createElement(
              "h1",
              { className: (0, r.Z)("hero__title", b, g) },
              e.title,
            ),
            a.createElement(
              "p",
              { className: (0, r.Z)("hero__subtitle", b, N) },
              e.tagline,
            ),
            a.createElement(
              "div",
              { className: E },
              a.createElement(
                l.Z,
                {
                  className: "button button--secondary button--lg",
                  to: "/HowTo/Quickstart",
                },
                "Get Started - 5min \u23f1\ufe0f",
              ),
            ),
          ),
        );
      }
      function f() {
        return a.createElement(
          c.Z,
          { title: "Welcome", description: "Consensys Orion" },
          a.createElement(h, null),
          a.createElement("main", null, a.createElement(u, null)),
        );
      }
    },
  },
]);
