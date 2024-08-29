import {  NavLink } from "react-router-dom";

 function PageNav ()  {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/Pricing">Pricing</NavLink>
            </li>
            <li>
            <NavLink to="/Product">Product</NavLink>
            </li>
        </ul>
    </nav>
  );
};

export default PageNav;