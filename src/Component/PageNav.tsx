import {  NavLink } from "react-router-dom";
import styles from "./PageNav.module.css"
import Logo from "./Logo";
 function PageNav ()  {
  return (
    <nav className={styles.nav}>
      <Logo />
        <ul className={styles.ul}>
           
            <li>
            <NavLink to="/Pricing">Pricing</NavLink>
            </li>
            <li>
            <NavLink to="/Product">Product</NavLink>
            </li>
            <li>
            <NavLink to="/Login">Login</NavLink>
            </li>
        </ul>
    </nav>
  );
};

export default PageNav;