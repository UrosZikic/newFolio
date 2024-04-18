import "./App.css";
import Navigation from "././navigation/Navigation";
import NavLink from "../src/navigation/navLink/NavLink";

import Header from "././header/Header";
// import SlideBuild from "././slide/SliderBuilder";
// import CardBuilder from "././cards/CardBuild";
import About from "./about/About";
import { useState, useEffect } from "react";
export default function App() {
  // onLoad width
  let currentWidth = window.innerWidth;
  const [loadAnimation, setLoadAnimation] = useState(0);
  const [loadSmallAnimation, setLoadSmallAnimation] = useState(0);
  const [isWide, setIsWide] = useState(currentWidth > 900);
  const [isClicked, setIsClicked] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(0);
  const [atAbout, setAtAbout] = useState(false);

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

  useEffect(() => {
    // const handleResize = debounce(() => {
    function handleResize() {
      setIsWide(window.innerWidth > 900);
      // }, 250);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isWide]);

  function updateWidth() {
    const currentWidth = window.innerWidth;
    setIsWide((prevIsWide) => {
      const isWide = currentWidth > 900;
      if (isWide && !prevIsWide) {
        setIsClicked(false);
        document.body.classList.remove("fix");
      }
      return isWide;
    });
  }
  window.addEventListener("resize", () => updateWidth());

  useEffect(() => {
    if (isClicked) document.body.classList.add("fix");
    else document.body.classList.remove("fix");
  }, [isClicked]);

  function triggerMenu() {
    setMenuAnimation(0);

    setIsClicked((prevIsClicked) => !prevIsClicked);

    (function () {
      if (isClicked === false) {
        setTimeout(() => setMenuAnimation(1), 300);

        setTimeout(() => setMenuAnimation(2), 600);
        setTimeout(() => setMenuAnimation(3), 900);
        setTimeout(() => setMenuAnimation(4), 1200);
        setTimeout(() => setMenuAnimation(5), 1500);
      } else {
        setMenuAnimation(0);
      }
    })();
  }

  useEffect(() => {
    const aboutSection = document.querySelector(".aboutSection");

    function triggerAbout() {
      if (document.documentElement.clientWidth > 1000) {
        executeAbout(100);
      } else if (
        document.documentElement.clientWidth <= 1000 &&
        document.documentElement.clientWidth > 500
      ) {
        executeAbout(0);
      } else if (
        document.documentElement.clientWidth <= 500 &&
        document.documentElement.clientWidth > 390
      ) {
        executeAbout(200);
      } else if (document.documentElement.clientWidth <= 390) {
        executeAbout(450);
      }
    }
    function executeAbout(add) {
      if (
        document.documentElement.scrollTop * 0.9 + add >=
        aboutSection.scrollHeight
      ) {
        setAtAbout(true);
      }
    }

    window.addEventListener("scroll", () => triggerAbout());

    return () => {
      window.removeEventListener("scroll", () => triggerAbout());
    };
  }, [atAbout]);

  function triggerLoadAnimation() {
    setTimeout(() => setLoadAnimation(1), 1000);
    setTimeout(() => setLoadSmallAnimation(1), 2000);
    setTimeout(() => setLoadSmallAnimation(2), 2200);
    setTimeout(() => setLoadSmallAnimation(3), 2400);
    setTimeout(() => setLoadSmallAnimation(4), 2600);

    setTimeout(() => setLoadAnimation(2), 2000);

    setTimeout(() => setLoadAnimation(3), 2500);

    setTimeout(() => setLoadAnimation(4), 3000);

    setTimeout(() => setLoadAnimation(5), 3500);

    setTimeout(() => setLoadAnimation(6), 4000);
    setTimeout(() => setLoadAnimation(7), 4300);
    setTimeout(() => setLoadAnimation(8), 4600);
    setTimeout(() => setLoadAnimation(9), 4900);
    setTimeout(() => setLoadAnimation(10), 5200);
  }
  window.onload = () => triggerLoadAnimation();

  return (
    <>
      <Navigation
        loadAnimation={loadAnimation}
        isWide={isWide}
        linkNames={linkNames}
        triggerMenu={triggerMenu}
        isClicked={isClicked}
      />
      <Menu
        linkNames={linkNames}
        loadAnimation={loadAnimation}
        isWide={isWide}
        isClicked={isClicked}
        menuAnimation={menuAnimation}
      />
      <Header loadAnimation={loadAnimation} />
      <SocialMedia loadSmallAnimation={loadSmallAnimation} />

      <About atAbout={atAbout} />
    </>
  );
}

function SocialMedia({ loadSmallAnimation }) {
  return (
    <div className={"socialMediaContainer"}>
      <SocialMediaLinks loadSmallAnimation={loadSmallAnimation} />
      <div
        className={
          "socialMediaVerticalLine" +
          (loadSmallAnimation >= 1 ? " socialMediaExpandLine" : "")
        }
      ></div>
    </div>
  );
}

function Menu({ linkNames, loadAnimation, isWide, isClicked, menuAnimation }) {
  return (
    <div
      className={
        "menuMain" +
        (!isClicked ? " removeFromSight" : " ") +
        (isWide ? " removeFromSight" : " ")
      }
    >
      <ul className={"menuContainer"}>
        {linkNames.map((item, i) => (
          <NavLink
            key={item.id}
            name={item.name}
            url={item.url}
            loadAnimation={loadAnimation}
            iteration={i}
            id={item.id}
            isWide={isWide}
            menuAnimation={menuAnimation}
            isClicked={isClicked}
          />
        ))}
      </ul>
      <div className="socialMenu">
        <div className={menuAnimation >= 2 ? "socialMenuWidth" : ""}></div>
        <div className={menuAnimation >= 4 ? "socialMenuOpacity" : ""}>
          <SocialMediaLinks SocialMediaLinks={SocialMediaLinks} />
        </div>
        <div className={menuAnimation >= 2 ? "socialMenuWidth" : ""}></div>
      </div>
    </div>
  );
}

function SocialMediaLinks({ loadSmallAnimation }) {
  return (
    <>
      <ion-icon
        style={{
          opacity: loadSmallAnimation >= 4 ? "1" : "0",
          transform: loadSmallAnimation >= 4 ? "translateY(0px)" : "",
        }}
        name="mail-outline"
      ></ion-icon>
      <ion-icon
        style={{
          opacity: loadSmallAnimation >= 3 ? "1" : "0",
          transform: loadSmallAnimation >= 3 ? "translateY(0px)" : "",
        }}
        name="logo-github"
      ></ion-icon>
      <ion-icon
        style={{
          opacity: loadSmallAnimation >= 2 ? "1" : "0",
          transform: loadSmallAnimation >= 2 ? "translateY(0px)" : "",
        }}
        name="logo-linkedin"
      ></ion-icon>
    </>
  );
}
