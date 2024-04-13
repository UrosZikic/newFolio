// import { useState } from "react";

export default function Accordion({
  title,
  content,
  id,
  expand,
  executeExpand,
}) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <p>{title}</p>
        <button
          style={{
            width: "20px",
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            backgroundColor: "transparent",
            fontSize: "20px",
          }}
          onClick={() => executeExpand(id)}
        >
          <p>x</p>
        </button>
      </div>
      <div
        style={{
          display: expand === id ? "block" : "none",
          border: "1px solid black",
          borderTop: "none",
          padding: "10px",
        }}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}
