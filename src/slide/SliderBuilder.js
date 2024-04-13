import Slide from "./Slide";

import { useState } from "react";
function App() {
  const [slide, setSlide] = useState(1);

  const slideInfo = [
    {
      id: 1,
      title: "Profile",
      content: [
        [
          "Hey there! I'm a fresh-faced web developer hailing from a serene Serbian town, blending my love for English with the world of coding. When I'm not knee-deep in programming puzzles,  you'll likely find me pursuing a variety of interests. I'm an avid reader, a gamer at heart, a movie buff, and a devoted dog lover.",
        ],
        [
          "My journey into programming began as a casual exploration, tinkering with styles and markup until I stumbled upon the thrill of scripting for my projects. As a self-taught enthusiast, I relish the challenge of troubleshooting solo, learning and growing with each obstacle along the way.",
        ],
      ],
    },
    {
      id: 2,
      title: "Experience",
      content: [
        "One project I'm particularly proud of is `HoneyBee`, a web platform developed for an accredited online school of English based in Nis, Serbia. Through collaborative efforts with the client, I successfully built complex layouts and appealing UI designs. This project provided invaluable experience in working within a volatile, deadline-sensitive environment.",
      ],
    },
  ];

  return (
    <section className="slide">
      <div className="slideLeft">
        <div className="slideLeftLine"></div>
        {/* presek */}
        <div className="dotContainer dot_1">
          <p>About me</p>
          <div
            className="dot"
            onClick={() => setSlide(1)}
            style={{ backgroundColor: slide === 1 ? "black" : "purple" }}
          ></div>
        </div>
        <div className="dotContainer dot_2">
          <p>Proficiency</p>

          <div
            className="dot"
            onClick={() => setSlide(2)}
            style={{ backgroundColor: slide === 2 ? "black" : "purple" }}
          ></div>
        </div>
      </div>
      {/* presek */}
      <div className="slideRight">
        {slideInfo.map((item, i) => (
          <Slide
            key={i}
            title={item.title}
            content={item.content}
            id={item.id}
            slide={slide}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
