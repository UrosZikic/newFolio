import resume from "../../Zikic-Resume.pdf";
export default function NavLink({
  name,
  url,
  id,
  loadAnimation,
  iteration,
  isWide,
  menuAnimation,
  isClicked,
  triggerMenu,
  menuLink,
}) {
  return (
    <li
      className={
        (loadAnimation >= 7 ? "name" : "") +
        (!isWide ? " lockMenuLi" : " ") +
        (id <= menuAnimation ? (isClicked ? " unlockMenuLi" : " ") : " ")
      }
      onClick={() => (menuLink ? triggerMenu() : null)}
    >
      <a
        className="navLink"
        href={name === "Resume" ? resume : url}
        target={name === "Resume" ? "_blank" : "_self"}
        rel="noreferrer"
      >
        {name}
      </a>
    </li>
  );
}
