import "./App.css";
import Navigation from "././navigation/Navigation";
import Header from "././header/Header";
// import SlideBuild from "././slide/SliderBuilder";
// import CardBuilder from "././cards/CardBuild";
import clicker from ".././src/images/clicker.png";
import { useState, useEffect } from "react";
import debounce from "lodash/debounce";
export default function App() {
  // onLoad width
  let currentWidth = window.innerWidth;
  const [loadAnimation, setLoadAnimation] = useState(0);
  const [loadSmallAnimation, setLoadSmallAnimation] = useState(0);
  const [isWide, setIsWide] = useState(currentWidth > 900);
  const [animeLink, setAnimeLink] = useState(false);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsWide(window.innerWidth > 900);
    }, 250);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function updateWidth() {
    currentWidth = window.innerWidth;
    setIsWide(currentWidth > 900);
  }
  window.addEventListener("resize", () => updateWidth());

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
      <Navigation loadAnimation={loadAnimation} isWide={isWide} />
      <Header loadAnimation={loadAnimation} animeLink={animeLink} />
      <SocialMedia loadSmallAnimation={loadSmallAnimation} />
      <Clicker loadAnimation={loadAnimation} />
    </>
  );
}

function SocialMedia({ loadSmallAnimation }) {
  return (
    <div className={"socialMediaContainer"}>
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
      <div
        className={
          "socialMediaVerticalLine" +
          (loadSmallAnimation >= 1 ? " socialMediaExpandLine" : "")
        }
      ></div>
    </div>
  );
}

function Clicker({ loadAnimation }) {
  return (
    <div
      className="clickerContainer"
      style={{ opacity: loadAnimation > 2 ? "1" : "0" }}
    >
      <img src={clicker} alt="" />
      <a href="#">
        <ion-icon name="chevron-down-outline"></ion-icon>
      </a>
    </div>
  );
}
