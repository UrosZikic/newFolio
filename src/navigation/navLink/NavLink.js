export default function NavLink({
  name,
  url,
  id,
  loadAnimation,
  iteration,
  isWide,
  menuAnimation,
  isClicked,
}) {
  return (
    <li
      className={
        (loadAnimation >= 5 ? "name" : "") +
        (!isWide ? " lockMenuLi" : " ") +
        (id <= menuAnimation ? (isClicked ? " unlockMenuLi" : " ") : " ")
      }
    >
      <a className="navLink" href={url}>
        {name}
      </a>
    </li>
  );
}
