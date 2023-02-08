import React from "react";
import ComponentCreator from "@docusaurus/ComponentCreator";

export default [
  {
    path: "/api",
    component: ComponentCreator("/api", "3af"),
    exact: true,
  },
  {
    path: "/search",
    component: ComponentCreator("/search", "f8b"),
    exact: true,
  },
  {
    path: "/",
    component: ComponentCreator("/", "4d3"),
    exact: true,
  },
  {
    path: "/",
    component: ComponentCreator("/", "e39"),
    routes: [
      {
        path: "/category/concepts",
        component: ComponentCreator("/category/concepts", "b01"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/category/how-to",
        component: ComponentCreator("/category/how-to", "1ee"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/category/reference",
        component: ComponentCreator("/category/reference", "499"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/category/tutorials",
        component: ComponentCreator("/category/tutorials", "f20"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/Concepts/Disaster-Recovery",
        component: ComponentCreator("/Concepts/Disaster-Recovery", "a61"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/Concepts/Multi-Tenancy",
        component: ComponentCreator("/Concepts/Multi-Tenancy", "f25"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/Concepts/Privacy-Groups",
        component: ComponentCreator("/Concepts/Privacy-Groups", "a69"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/Concepts/TLS-Communication",
        component: ComponentCreator("/Concepts/TLS-Communication", "34c"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/HowTo/Build-From-Source",
        component: ComponentCreator("/HowTo/Build-From-Source", "6d0"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/HowTo/Dependencies",
        component: ComponentCreator("/HowTo/Dependencies", "503"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/HowTo/High-Availability",
        component: ComponentCreator("/HowTo/High-Availability", "cff"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/HowTo/Install-Binaries",
        component: ComponentCreator("/HowTo/Install-Binaries", "203"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/HowTo/Quickstart",
        component: ComponentCreator("/HowTo/Quickstart", "ec1"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/HowTo/Run-Docker-Image",
        component: ComponentCreator("/HowTo/Run-Docker-Image", "9a9"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/index",
        component: ComponentCreator("/index", "371"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/Reference/API-Methods",
        component: ComponentCreator("/Reference/API-Methods", "fd0"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/Reference/Configuration-File",
        component: ComponentCreator("/Reference/Configuration-File", "444"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/Reference/Orion-CLI-Syntax",
        component: ComponentCreator("/Reference/Orion-CLI-Syntax", "75b"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/Reference/Responsible-Disclosure",
        component: ComponentCreator("/Reference/Responsible-Disclosure", "b39"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/Tutorials/Generating-Certificates",
        component: ComponentCreator(
          "/Tutorials/Generating-Certificates",
          "90f",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/Tutorials/Migrating-from-Orion-to-Tessera",
        component: ComponentCreator(
          "/Tutorials/Migrating-from-Orion-to-Tessera",
          "796",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/Tutorials/Quorum-Dev-Quickstart",
        component: ComponentCreator("/Tutorials/Quorum-Dev-Quickstart", "8a6"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/Tutorials/TLS",
        component: ComponentCreator("/Tutorials/TLS", "d92"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/Tutorials/Using-Oracle",
        component: ComponentCreator("/Tutorials/Using-Oracle", "cb5"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/Tutorials/Using-PostgreSQL",
        component: ComponentCreator("/Tutorials/Using-PostgreSQL", "2a6"),
        exact: true,
        sidebar: "docSidebar",
      },
    ],
  },
  {
    path: "*",
    component: ComponentCreator("*"),
  },
];
