import "./Navigation.css";
import NavLink from "./navLink/NavLink";

import { useState, useEffect } from "react";

export default function Navigation({
  loadAnimation,
  isWide,
  linkNames,
  triggerMenu,
}) {
  return (
    <nav className="navigation" id="nav">
      <div
        className={
          "navigationChild" +
          (loadAnimation >= 2 ? " leftNav" : "") +
          (loadAnimation >= 6 ? " navHeightExpand" : "") +
          (loadAnimation >= 7 ? " borderLess" : "")
        }
      >
        {" "}
        <h1
          style={{
            display: loadAnimation >= 3 ? "block" : "none",
          }}
          className={loadAnimation >= 7 ? "name" : ""}
        >
          Uroš Žikić
        </h1>
      </div>

      <div
        className={
          "navigationChild" +
          (loadAnimation >= 1 ? " centerNav" : "") +
          (loadAnimation >= 4 ? " exit" : "")
        }
        style={{ display: loadAnimation >= 5 ? "none" : "block" }}
      ></div>

      <div
        className={
          "navigationChild" +
          (loadAnimation >= 2 ? " rightNav" : "") +
          (loadAnimation >= 6 ? " navHeightExpand" : "") +
          (loadAnimation >= 7 ? " borderLess" : "")
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
                  menuLink={false}
                />
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
        <div
          className={
            !isWide
              ? loadAnimation >= 7
                ? " appear"
                : " disappear"
              : " disappear"
          }
        >
          {!isWide ? (
            <button
              onClick={() => triggerMenu()}
              className={
                "navMenuIcon" + (loadAnimation >= 9 ? " " : " disableMenu")
              }
              style={{ display: loadAnimation >= 3 ? "flex" : "none" }}
            >
              <div style={{ opacity: loadAnimation >= 5 ? "1" : "0" }}></div>
              <div style={{ opacity: loadAnimation >= 5 ? "1" : "0" }}></div>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}
