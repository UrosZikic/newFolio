import "./About.css";
import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

export default function About() {
  const [atAbout, setAtAbout] = useState(false);

  //
  function debounce(func, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  //

  //
  useEffect(() => {
    const aboutSection = document.querySelector(".aboutSection");

    function executeAbout(add) {
      if (
        document.documentElement.scrollTop * 0.9 + add >=
        aboutSection.scrollHeight
      ) {
        setAtAbout(true);
      }
    }

    function onScroll() {
      const bodyWidth = window.innerWidth;

      if (!atAbout) {
        if (bodyWidth > 1000) {
          executeAbout(0);
        } else if (bodyWidth <= 1000 && bodyWidth > 600) {
          executeAbout(150);
        } else if (bodyWidth <= 600 && bodyWidth > 400) {
          executeAbout(300);
        } else {
          executeAbout(350);
        }
      }
    }

    const handleScroll = debounce(onScroll, 50);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [atAbout]);
  //

  return (
    <>
      <h2
        className="aboutHead"
        style={{ opacity: atAbout ? "1" : "0" }}
        id="aboutId"
      >
        My story
      </h2>
      <section className="aboutSection">
        <AboutBlock atAbout={atAbout}>
          <h3>Past</h3>
          <p>
            My web dev journey began as a hobby in early 2022. It quickly became
            my favorite pastime, and my interest only grew from there. Over the
            past two years, I've been actively improving my skills, both
            practically and theoretically, in both front-end and back-end
            programming. Getting acquainted with the ever-expanding potential of
            web development has been a welcome challenge.
          </p>
        </AboutBlock>

        <AboutBlock atAbout={atAbout}>
          <h3>Present</h3>
          <p>
            Today, equipped with extensive experience gained from numerous
            personal and freelance projects, I'm actively seeking opportunities
            to transition into a professional programmer role within a dedicated
            team.
          </p>
        </AboutBlock>
        <AboutBlock atAbout={atAbout}>
          <h3>Future</h3>
          <p>
            In the future, my goal is to contribute to impactful projects and
            further developer my technical skills in the evolvoing tech
            industry.
          </p>
        </AboutBlock>
      </section>
    </>
  );
}

function AboutBlock({ children, atAbout }) {
  return <div className={atAbout ? "aboutContent" : ""}>{children}</div>;
}
