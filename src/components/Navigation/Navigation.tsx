import { Link, NavLink } from "react-router"
import styles from "./Navigation.module.scss"

export const Navigation = () => {
  return (
    <>
      <nav className={styles.Navigation}>
        <Link to={"/"}>
          <h1>ZooZoom</h1>
        </Link>
        
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