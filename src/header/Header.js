import "./Header.css";
import profile from ".././images/myProfile.jpg";

export default function Header({ loadAnimation }) {
  return (
    <header>
      <HeaderText loadAnimation={loadAnimation} />
      <HeaderImage loadAnimation={loadAnimation} />
    </header>
  );
}

function HeaderText({ loadAnimation }) {
  return (
    <div className="headerText">
      <p
        className={
          "headParagraph" + (loadAnimation >= 6 ? " revealHeadParagraph" : "")
        }
        style={{ color: "#339af0" }}
      >
        Hello! I am
      </p>
      <p
        className={
          "headParagraph" + (loadAnimation >= 7 ? " revealHeadParagraph" : "")
        }
      >
        Uroš Žikić
      </p>
      <p
        className={
          "headParagraph" + (loadAnimation >= 8 ? " revealHeadParagraph" : "")
        }
        style={{ color: "#d6336c" }}
      >
        Web Developer
      </p>
      <p
        className={
          "headParagraph" +
          (loadAnimation >= 9 ? " revealHeadParagraph" : "") +
          " headMain"
        }
        style={{ marginBottom: "3rem" }}
      >
        I'm a passionate web developer with a knack for crafting dynamic,
        UI-rich websites. With expertise in both front-end and back-end
        programming, I bring a creative edge to every project. I'm excited to
        join a collaborative team environment to both contribute and advance my
        skills.
      </p>
      <div
        className={
          "headParagraph" +
          (loadAnimation >= 10 ? " revealHeadParagraph" : "") +
          " headContainer"
        }
      >
        <a
          className={"headLink"}
          href="#"
          style={{
            color: "#d6336c",
            textDecoration: "none",
            zIndex: 999,
          }}
        >
          Get my resume
        </a>
        <div className="headLinkSupport" style={{ zIndex: -1 }}></div>
      </div>
    </div>
  );
}

function HeaderImage({ loadAnimation }) {
  return (
    <div
      className={"headerImageContainer"}
      style={{ opacity: loadAnimation >= 7 ? "1" : "0" }}
    >
      <div
        className={
          "headerImageMain" +
          (loadAnimation >= 8 ? " headerImageMainTransformed" : "")
        }
      ></div>
      <div className="headerImageSupport"></div>
    </div>
  );
}
