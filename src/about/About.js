import { useEffect, useState } from "react";
import "./About.css";

export default function About({ atAbout }) {
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
