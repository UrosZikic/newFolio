import "./Skills.css";
import { useState, useEffect } from "react";
import html from "../images/html.svg";
import css from "../images/css.svg";
import sass from "../images/sass.svg";
import bs from "../images/bs.svg";
import js from "../images/js.svg";
import ts from "../images/ts.svg";
import react from "../images/react.svg";
import php from "../images/php.svg";
import sql from "../images/sql.svg";
import git from "../images/git.svg";

export default function Skills() {
  const [atSkills, setAtSkills] = useState(false);
  const [skillValue, setSkillValue] = useState(0);

  const skillList = [
    { name: "HTML", src: html },
    { name: "CSS", src: css },
    { name: "SASS", src: sass },
    { name: "BootStrap", src: bs },
    { name: "JavaScript", src: js },
    { name: "TypeScript", src: ts },
    { name: "React", src: react },
    { name: "PHP", src: php },
    { name: "SQL", src: sql },
    { name: "GIT", src: git },
  ];

  useEffect(() => {
    const skillSection = document.querySelector(".skillContainer");

    function executeSkills() {
      setInterval(() => setSkillValue((prevValue) => prevValue + 1), 300);
    }

    function triggerSkills() {
      if (
        document.documentElement.scrollTop * 0.25 >=
        skillSection.scrollHeight
      ) {
        setAtSkills(true);
        executeSkills();
      }
    }

    function onScroll() {
      if (!atSkills) {
        triggerSkills();
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [atSkills, skillValue]);

  return (
    <>
      <h2 className="headSkills" id="skillsId">
        Skills
      </h2>
      <section className="skillContainer">
        {skillList.map((item, i) => (
          <Skill
            name={item.name}
            key={i}
            index={i}
            atSkills={atSkills}
            skillValue={skillValue}
            src={item.src}
          />
        ))}
      </section>
    </>
  );
}

function Skill({ name, index, atSkills, skillValue, src }) {
  return (
    <div className={skillValue > index ? " skillVisible" : " "}>
      <p>{name}</p>
      <img src={src} alt={name} />
    </div>
  );
}
