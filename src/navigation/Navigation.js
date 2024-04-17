import { useState } from "react";
import "./Navigation.css";

// import { useState, useEffect } from "react";

export default function Navigation({ loadAnimation, isWide }) {
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
          "navigationChild" +
          (loadAnimation >= 2 ? " leftNav" : "") +
          (loadAnimation >= 4 ? " navHeightExpand" : "") +
          (loadAnimation >= 5 ? " borderLess" : "")
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
          "navigationChild" +
          (loadAnimation >= 1 ? " centerNav" : "") +
          (loadAnimation >= 3 ? " exit" : "")
        }
        style={{ display: loadAnimation >= 5 ? "none" : "block" }}
      ></div>

      <div
        className={
          "navigationChild" +
          (loadAnimation >= 2 ? " rightNav" : "") +
          (loadAnimation >= 4 ? " navHeightExpand" : "") +
          (loadAnimation >= 5 ? " borderLess" : "")
        }
      >
        <div className={!isWide ? " disappear" : " appear"}>
          {isWide ? (
            <ul
              style={{
                display: loadAnimation >= 3 ? "flex" : "none",
                justifyContent: "end",
              }}
            >
              {linkNames.map((item, i) => (
                <NavLink
                  key={item.id}
                  name={item.name}
                  url={item.url}
                  loadAnimation={loadAnimation}
                  iteration={i}
                  isWide={isWide}
                />
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
        <div className={isWide ? " disappear" : " appear"}>
          {!isWide ? (
            <div
              className={"navMenuIcon"}
              style={{ display: loadAnimation >= 3 ? "flex" : "none" }}
            >
              <div style={{ opacity: loadAnimation >= 5 ? "1" : "0" }}></div>
              <div style={{ opacity: loadAnimation >= 5 ? "1" : "0" }}></div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

function NavLink({ name, url, loadAnimation, iteration, isWide }) {
  return (
    <li className={loadAnimation >= 5 ? "name" : ""}>
      <a className="navLink" href={url}>
        {name}
      </a>
    </li>
  );
}
