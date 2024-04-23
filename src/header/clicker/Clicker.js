import { head } from "lodash";
import clicker from "../../images/clicker.png";

export default function Clicker({ loadAnimation, position }) {
  return (
    <div
      className={position === 0 ? "clickerContainer" : "bottomLink"}
      style={{
        opacity: loadAnimation > 4 ? "1" : "0",
      }}
    >
      <a href={position < 1 ? "#aboutId" : "#nav"}>
        <ion-icon
          name="chevron-up-outline"
          style={{
            display: position > 0 ? "block" : "none",
            fontSize: position > 0 ? "4rem" : "0",
            height: position > 0 ? "4rem" : "0",
          }}
        ></ion-icon>

        <img src={clicker} alt="" />

        <ion-icon
          name="chevron-down-outline"
          style={{ display: position === 1 ? "none" : "block" }}
        ></ion-icon>
      </a>
    </div>
  );
}
