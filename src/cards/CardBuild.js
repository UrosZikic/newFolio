import Card from "./Card";
import c_b from ".././images/c&b.jfif";
import movie from ".././images/movie.jfif";
import honeybee from ".././images/bee.jfif";
import snow from ".././images/snow.jfif";
import errand from ".././images/errand.jfif";
import { useState, useEffect } from "react";

export default function CardBuilder() {
  const cards = [
    { title: "C&B", backgroundImage: c_b },
    { title: "movieOverview", backgroundImage: movie },
    { title: "honeybee", backgroundImage: honeybee },
    { title: "C&B", backgroundImage: snow },
    { title: "Errander", backgroundImage: errand },
  ];

  const [isLoaded, setIsLoaded] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#1971c2");

  useEffect(() => {
    console.log(isLoaded);
    const projectLoad = function (amount) {
      setIsLoaded(amount === 2 ? false : true);
      const baseDelay = 250;
      const c = document.querySelectorAll(".card");
      const cont = document.querySelector(".cardContainer");

      if (window.scrollY * 2 > cont.clientHeight) {
        if (!isLoaded) {
          c.forEach((item, i) => {
            const iteration = i < 3 ? i : i - 3 + 1;
            setTimeout(() => {
              if (i <= amount) {
                item.style.opacity = "1";
              }
            }, iteration * baseDelay);
          });
        }
        setBackgroundColor("#343a40");
      } else {
        setBackgroundColor("#1971c2");
      }
      if (window.scrollY * 0.5 > cont.clientHeight) {
        setBackgroundColor("#c92a2a");
      }

      document.body.style.backgroundColor = backgroundColor;

      // Update background color directly after setting the state
    };

    document
      .querySelector(".expandProjectListBtn")
      .addEventListener("click", () => projectLoad(5));
    window.onscroll = () => triggerProjectLoad();
    window.onload = () => triggerProjectLoad();

    function triggerProjectLoad() {
      if (!isLoaded) {
        projectLoad(2);
      } else {
        projectLoad(null);
      }
    }

    return () => {
      window.removeEventListener("scroll", () => triggerProjectLoad());
      window.removeEventListener("load", () => triggerProjectLoad());
    };
  }, [isLoaded, backgroundColor]);

  return (
    <section className="cardContainer">
      {cards.map((card, i) => (
        <Card backgroundImage={card.backgroundImage} key={i} />
      ))}
      <button
        style={{ display: isLoaded ? "none" : "block" }}
        className="expandProjectListBtn"
      >
        Load projects...
      </button>
    </section>
  );
}
