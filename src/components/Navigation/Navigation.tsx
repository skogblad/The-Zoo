import { NavLink } from "react-router"
import styles from "./Navigation.module.scss"

export const Navigation = () => {
  return (
    <>
      <nav className={styles.Navigation}>
        <h1>ZooZoom</h1>
        <ul>
          <li>
            <NavLink to={"/"}>Hem</NavLink>
          </li>

          <li>
            <NavLink to={"/animals"}>Våra djur</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}