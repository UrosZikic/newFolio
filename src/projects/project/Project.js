import "./Project.css";
import { useEffect, useState } from "react";
export default function Project({
  imageSource,
  headline,
  tools,
  description,
  url,
  index,
}) {
  const [projectHeight, setProjectHeight] = useState([]);
  const [showProject, setShowProject] = useState(-1);

  function debounce(func, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  useEffect(() => {
    function setHeight() {
      let heights = [];
      document
        .querySelectorAll(".projectContainer")
        .forEach((item, i) => heights.push(item.getBoundingClientRect().top));

      setProjectHeight(heights);
    }

    window.addEventListener("load", setHeight);
    window.addEventListener("resize", setHeight);

    return () => {
      window.removeEventListener("load", setHeight);
      window.removeEventListener("resize", setHeight);
    };
  }, []);

  useEffect(() => {
    function revealProject() {
      const currentWidth = document.documentElement.clientWidth;
      let setWidthCrunch = 100;
      if (currentWidth > 1400) {
        setWidthCrunch = -250;
      } else if (currentWidth < 1400 && currentWidth > 1100) {
        setWidthCrunch = 100;
      } else if (currentWidth < 1100 && currentWidth > 800) {
        setWidthCrunch = 150;
      } else if (currentWidth < 80 && currentWidth > 400) {
        setWidthCrunch = 200;
      } else {
        setWidthCrunch = 75;
      }

      if (
        document.documentElement.scrollTop - setWidthCrunch >=
          projectHeight[showProject + 1] &&
        document.documentElement.scrollTop
      ) {
        if (showProject < projectHeight.length - 1) {
          setShowProject((prevValue) => prevValue + 1);
        }
      }
    }

    const scrollProject = debounce(revealProject, 50);

    window.addEventListener("scroll", scrollProject);

    return () => window.removeEventListener("scroll", scrollProject);
  });

  return (
    <div
      className={
        "projectContainer " + (showProject >= index ? " showProject" : "")
      }
      id="projectId"
    >
      <img src={imageSource} alt={headline} />
      <div className={"projectInfo"}>
        <h3>{headline}</h3>
        <p>
          <strong>Made with: </strong>
          {tools}
        </p>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noreferrer">
          <ion-icon name="open-outline"></ion-icon>
          <p>Live</p>
        </a>
      </div>
    </div>
  );
}
