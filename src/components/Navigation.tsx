import { NavLink } from "react-router"

export const Navigation = () => {
  return (
    <>
      <nav>
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