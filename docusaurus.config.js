const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/**
 * @type {import('redocusaurus').PresetEntry}
 */
const redocusaurus = [
  "redocusaurus",
  {
    specs: [
      {
        id: "using-remote-url",
        // Remote File
        spec: "https://raw.githubusercontent.com/rohit-gohri/redocusaurus/main/website/openapi/single-file/openapi.yaml",
        route: "/api/",
      },
    ],
    theme: {
      /**
       * Highlight color for docs
       */
      primaryColor: "#3655d5",
      primaryColorDark: "#a2aeec",
      /**
       * Options to pass to redoc
       * @see https://github.com/redocly/redoc#redoc-options-object
       */
      options: { disableSearch: true },
      /**
       * Options to pass to override RedocThemeObject
       * @see https://github.com/Redocly/redoc#redoc-theme-object
       */
      theme: {},
    },
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ConsenSys Orion",
  tagline:
    "An open-source, client-agnostic, Ethereum signing service written in Java that is capable of signing on multiple platforms..",
  url: "https://docs.orion.consensys.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ConsenSys", // Usually your GitHub org/user name.
  projectName: "doc.orion", // Usually your repo name.
  deploymentBranch: "main", // Github Pages deploying branch

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Set a base path separate from default /docs
          editUrl: "https://github.com/ConsenSys/doc.orion/tree/main/",
          path: "docs",
          routeBasePath: "/",
          // @ts-ignore
          // eslint-disable-next-line global-require
          remarkPlugins: [require("remark-docusaurus-tabs")],
          include: ["**/*.md", "**/*.mdx"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          includeCurrentVersion: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    redocusaurus,
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: "NSRFPEJ4NC",

        // Public API key: it is safe to commit it
        apiKey: "cea41b975ad6c9a01408dfda6e0061d3",

        indexName: "orion",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        // ... other Algolia params
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Orion",
        logo: {
          alt: "Orion",
          src: "img/logo.svg",
          srcDark: "img/logo_dark.svg",
          width: 32,
          height: 32,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docSidebar",
            docId: "index",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/ConsenSys/orion",
            className: "header-github-link",
            position: "right",
          },
          {
            href: "https://twitter.com/consensys",
            className: "header-twitter-link",
            position: "right",
          },
          {
            href: "https://hub.docker.com/r/consensys/orion",
            className: "header-dockerhub-link",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "How To",
                to: "/category/how-to",
              },
              {
                label: "Concepts",
                to: "/category/concepts",
              },
              {
                label: "Tutorials",
                to: "/category/tutorials",
              },
              {
                label: "Reference",
                to: "/category/reference",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/channels/697535391594446898/725135157652226060",
              },
              {
                label: "Issues",
                href: "https://github.com/ConsenSys/orion/issues",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Documentation on GitHub",
                href: "https://github.com/ConsenSys/doc.orion",
              },
              {
                label: "ConsenSys",
                href: "https://consensys.net",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ConsenSys, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      languageTabs: [
        {
          highlight: "bash",
          language: "curl",
          logoClass: "bash",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
        },
      ],
    }),
  plugins: [],
  themes: [],
};

module.exports = config;
