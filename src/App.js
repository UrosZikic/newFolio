import "./App.css";

import Navigation from "././navigation/Navigation";
import resume from "./Zikic-Resume.pdf";
import Header from "././header/Header";
import About from "./about/About";
import Skills from "./skills/Skills";
import Menu from "./navigation/menu/Menu";
import SocialMedia from "./header/socialMedia/SocialMedia";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Clicker from "./header/clicker/Clicker";

import { useState, useEffect } from "react";

export default function App() {
  // onLoad width

  const [loadAnimation, setLoadAnimation] = useState(0);
  const [isWide, setIsWide] = useState(window.innerWidth > 900);
  const [isClicked, setIsClicked] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(0);

  function resetClicked() {
    setIsClicked(false);
  }

  const linkNames = [
    {
      id: 1,
      name: "About",
      url: "#aboutId",
    },
    {
      id: 2,
      name: "Skills",
      url: "#skillsId",
    },
    {
      id: 3,
      name: "Projects",
      url: "#projectId",
    },
    {
      id: 4,
      name: "Contact",
      url: "#contact",
    },
    {
      id: 5,
      name: "Resume",
      url: { resume },
    },
  ];

  //
  useEffect(() => {
    function triggerLoadAnimation() {
      let baseParam = 0;

      (function callLoadAnimationInterval() {
        if (loadAnimation <= 10 && baseParam < 10) {
          const loadInterval = setInterval(() => {
            baseParam += 1;
            setLoadAnimation(baseParam);
            clearInterval(loadInterval);
            callLoadAnimationInterval();
          }, 300);
        } else {
          return false;
        }
      })();
    }
    window.onload = () => triggerLoadAnimation();

    return () => (window.onload = () => triggerLoadAnimation());
  }, [loadAnimation]);

  //

  useEffect(() => {
    function handleResize() {
      setIsWide(window.innerWidth > 900);
      setIsClicked(false);

      const currentWidth = window.innerWidth;
      if (currentWidth > 900) {
        setIsWide((prevIsWide) => {
          const isWide = true;
          if (isWide && !prevIsWide) {
            document.body.classList.remove("fix");
          }
          return isWide;
        });
      } else {
        return false;
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isWide]);

  useEffect(() => {
    if (isClicked) document.body.classList.add("fix");
    else document.body.classList.remove("fix");
  }, [isClicked]);

  function triggerMenu() {
    setMenuAnimation(0);

    let menuInterval;

    if (isClicked === false) {
      menuInterval = setInterval(() => {
        setMenuAnimation((prevValue) => {
          const newValue = prevValue + 1;
          if (newValue >= 5) {
            clearInterval(menuInterval);
            return 5;
          }
          return newValue;
        });
      }, 300);
    } else {
      clearInterval(menuInterval);
      setMenuAnimation(0);
    }
    setIsClicked((prevIsClicked) => !prevIsClicked);
  }

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
        triggerMenu={triggerMenu}
        isClicked={isClicked}
        menuAnimation={menuAnimation}
      />
      <Header loadAnimation={loadAnimation} />
      <SocialMedia loadAnimation={loadAnimation} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Clicker position={1} />
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer>
      <p style={{ textAlign: "center", padding: "1rem", fontSize: "1.8rem" }}>
        &#169;2024 - Uros Zikic
      </p>
    </footer>
  );
}
