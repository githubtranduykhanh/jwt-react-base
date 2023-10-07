import './Nav.scss'
import { NavLink } from "react-router-dom";

const Nav = () => {
    return ( 
        <div class="topnav">
            <NavLink  to="/" exact>Home</NavLink>
            <NavLink  to="/user">User</NavLink>
        </div>
    );
}

export default Nav;