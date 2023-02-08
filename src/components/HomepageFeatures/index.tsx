import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
// import styles from "./styles.module.css";

type CardItem = {
  title: string;
  link: string;
  description: JSX.Element;
  buttonName: string;
  buttonType:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "link";
};

const CardList: CardItem[] = [
  {
    title: "🏁 Getting Started",
    link: "/HowTo/Quickstart",
    description: (
      <>
        Get started with Orions by installing as binary, Docker, or via the
        Quickstart. Hit the ground running in less than 5 minutes!
      </>
    ),
    buttonName: "Go to installation",
    buttonType: "success",
  },
  {
    title: "💭 Migrate to Tessera",
    link: "/Tutorials/Migrating-from-Orion-to-Tessera/",
    description: <>Check out how to migrate from Orion to Tessera</>,
    buttonName: "Migrate",
    buttonType: "secondary",
  },
  {
    title: "👨‍💻 Reference",
    link: "/Reference/Orion-CLI-Syntax/",
    description: (
      <>
        Find command line arguments, API methods through JSON-RPC, and general
        configuration in the References section.
      </>
    ),
    buttonName: "Go to reference",
    buttonType: "info",
  },
];

function Card({ title, link, description, buttonName, buttonType }: CardItem) {
  return (
    <div className={clsx("col", "col--4", "margin-top--md")}>
      <div className="card-demo">
        <div className="card">
          <div className="card__header">
            <h3>{title}</h3>
          </div>
          <div className="card__body">
            <p>{description}</p>
          </div>
          <div className="card__footer">
            <Link
              className={clsx(
                "button",
                "button--" + buttonType,
                "button--block",
              )}
              to={link}>
              {buttonName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageCards(): JSX.Element {
  return (
    <section className={clsx("margin-top--lg", "margin-bottom--lg")}>
      <div className="container">
        <h1>Quick Links</h1>
        <hr />
        <div className="row">
          {CardList.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
