import './Nav.scss'
import { NavLink } from "react-router-dom";

const Nav = () => {
    return ( 
        <div className="topnav">
            <NavLink  to="/" exact>Home</NavLink>
            <NavLink  to="/user">User</NavLink>
            <NavLink  to="/login">Login</NavLink>
        </div>
    );
}

export default Nav;