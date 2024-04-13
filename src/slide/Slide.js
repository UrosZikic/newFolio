// import { useState } from "react";

export default function Slide({ title, content, id, slide }) {
  return (
    <div style={{ display: id === slide ? "block" : "none" }}>
      <h3>{title}</h3>
      {content.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
