import NavLink from "../navLink/NavLink";
import SocialMediaLinks from "../../header/socialMedia/socialMediaLinks/SocialMediaLinks";
import "./Menu.css";

export default function Menu({
  linkNames,
  loadAnimation,
  isWide,
  triggerMenu,
  isClicked,
  menuAnimation,
}) {
  return (
    <div
      className={
        "menuMain" +
        (!isClicked ? " removeFromSight" : " ") +
        (isWide ? " removeFromSight" : " ")
      }
    >
      <ul className={"menuContainer"}>
        {linkNames.map((item, i) => (
          <NavLink
            key={item.id}
            name={item.name}
            url={item.url}
            loadAnimation={loadAnimation}
            iteration={i}
            id={item.id}
            isWide={isWide}
            menuAnimation={menuAnimation}
            isClicked={isClicked}
            triggerMenu={triggerMenu}
            menuLink={true}
          />
        ))}
      </ul>
      <div className="socialMenu">
        <div className={menuAnimation >= 2 ? "socialMenuWidth" : ""}></div>
        <div className={menuAnimation >= 4 ? "socialMenuOpacity" : ""}>
          <SocialMediaLinks SocialMediaLinks={SocialMediaLinks} />
        </div>
        <div className={menuAnimation >= 2 ? "socialMenuWidth" : ""}></div>
      </div>
    </div>
  );
}
