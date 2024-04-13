// import { useEffect, useState, useRef } from "react";
// import ReactDOM from "react-dom/client";
export default function Card({ backgroundImage }) {
  return (
    <>
      <div
        className="card"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
    </>
  );
}
