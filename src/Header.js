import cover from "./images/cover.jfif";
import sara from "./images/sara.svg";

import { useEffect } from "react";
import { useState } from "react";
export default function Header() {
  const [showCover, setShowCover] = useState(false);
  function triggerCover() {
    setShowCover(true);
  }
  let msgOne = "Aspiring Web Developer";
  msgOne.split("");
  let msgTwo =
    "Passionate about creating web applications that make a difference";
  msgTwo.split("");
  localStorage.setItem("msgOneLooped", false);
  localStorage.setItem("msgTwoLooped", false);

  useEffect(() => {
    (function () {
      if (localStorage.getItem("msgOneLooped") === "false") {
        localStorage.setItem("msgOneLooped", true);
        const domMsgOne = document.querySelector(".msgOne");

        if (domMsgOne.textContent.length < 1) {
          let i = 0;
          const loopMsgOne = setInterval(() => {
            if (i < msgOne.length) {
              domMsgOne.textContent += msgOne[i];
              i++;
            } else {
              clearInterval(loopMsgOne);
              triggerMsgTwo();
            }
          }, 50);
        }
      }
    })();
    function triggerMsgTwo() {
      if (localStorage.getItem("msgTwoLooped") === "false") {
        localStorage.setItem("msgTwoLooped", true);
        const domMsgTwo = document.querySelector(".msgTwo");

        if (domMsgTwo.textContent.length < 1) {
          let i = 0;
          const loopMsgTwo = setInterval(() => {
            if (i < msgTwo.length) {
              domMsgTwo.textContent += msgTwo[i];
              i++;
            } else {
              clearInterval(loopMsgTwo);
            }
          }, 50);
        }
      }
    }
  }, []);
  return (
    <header className={showCover ? "header" : ""}>
      <div>
        <h1 className="msgOne"></h1>
        <h2 className="msgTwo"></h2>
      </div>
      <img
        onLoad={() => triggerCover()}
        src={cover}
        alt="cover"
        style={{ opacity: showCover ? "1" : "0", transition: "opacity 3s" }}
      />
    </header>
  );
}
