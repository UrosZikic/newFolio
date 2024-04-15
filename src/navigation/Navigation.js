import "./Navigation.css";

// import { useState } from "react";

export default function Navigation({ loadAnimation }) {
  const linkNames = [
    {
      id: 1,
      name: "About",
      url: "#",
    },
    {
      id: 2,
      name: "Skills",
      url: "#",
    },
    {
      id: 3,
      name: "Projects",
      url: "#",
    },
    {
      id: 4,
      name: "Contact",
      url: "#",
    },
    {
      id: 5,
      name: "Resume",
      url: "#",
    },
  ];

  return (
    <nav className="navigation">
      <div
        className={
          (loadAnimation >= 2 ? "leftNav" : "") +
          (loadAnimation >= 3 ? " navHeightExpand" : "") +
          (loadAnimation >= 4 ? " borderLess" : "")
        }
      >
        {" "}
        <h1
          style={{
            display: loadAnimation >= 3 ? "block" : "none",
          }}
          className={loadAnimation >= 5 ? "name" : ""}
        >
          Uroš Žikić
        </h1>
      </div>

      <div
        className={
          (loadAnimation >= 1 ? "centerNav" : "") +
          (loadAnimation >= 3 ? " exit" : "")
        }
      ></div>
      <div
        className={
          (loadAnimation >= 2 ? "rightNav" : "") +
          (loadAnimation >= 3 ? " navHeightExpand" : "") +
          (loadAnimation >= 4 ? " borderLess" : "")
        }
      >
        <ul
          style={{
            display: loadAnimation >= 3 ? "flex" : "none",
            justifyContent: "end",
          }}
        >
          {linkNames.map((item) => (
            <NavLink
              key={item.id}
              name={item.name}
              url={item.url}
              loadAnimation={loadAnimation}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}

function NavLink({ name, url, loadAnimation }) {
  return (
    <li className={loadAnimation >= 5 ? "name" : ""}>
      <a className="navLink" href={url}>
        {name}
      </a>
    </li>
  );
}
