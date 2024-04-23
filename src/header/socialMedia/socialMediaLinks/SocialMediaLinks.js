import { click } from "@testing-library/user-event/dist/click";

export default function SocialMediaLinks({ loadAnimation }) {
  return (
    <>
      <a href="mailto: uroszikic1512988@gmail.com">
        <ion-icon
          style={{
            opacity: loadAnimation >= 9 ? "1" : "0",
            transform: loadAnimation >= 9 ? "translateY(0px)" : "",
          }}
          name="mail-outline"
        ></ion-icon>
      </a>
      <ion-icon
        style={{
          opacity: loadAnimation >= 8 ? "1" : "0",
          transform: loadAnimation >= 8 ? "translateY(0px)" : "",
          cursor: "pointer",
        }}
        onClick={() => (window.location.href = "https://github.com/UrosZikic")}
        name="logo-github"
      ></ion-icon>
      <ion-icon
        style={{
          opacity: loadAnimation >= 7 ? "1" : "0",
          transform: loadAnimation >= 7 ? "translateY(0px)" : "",
          cursor: "pointer",
        }}
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/uro%C5%A1-%C5%BEiki%C4%87-78010819a/")
        }
        name="logo-linkedin"
      ></ion-icon>
    </>
  );
}
