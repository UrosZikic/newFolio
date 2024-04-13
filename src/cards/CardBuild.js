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

  useEffect(() => {
    console.log(isLoaded);
    const projectLoad = function (amount) {
      setIsLoaded(amount === 5 ? true : false);
      const baseDelay = 250;
      const c = document.querySelectorAll(".card");
      const body = document.querySelector("body");
      const cont = document.querySelector(".cardContainer");

      if (window.scrollY * 2 > cont.clientHeight && !isLoaded) {
        c.forEach((item, i) => {
          const iteration = i < 3 ? i : i - 3 + 1;
          setTimeout(() => {
            if (i <= amount) {
              item.style.opacity = "1";
            }
          }, baseDelay + iteration * baseDelay); // Increment delay for each card
        });
      }

      return () => {
        body.onscroll = null;
      };
    };
    document
      .querySelector(".expandProjectListBtn")
      .addEventListener("click", () => projectLoad(5));
    window.onscroll = () => (!isLoaded ? projectLoad(2) : null);
  }, [isLoaded]);

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
