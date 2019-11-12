import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul>
            
                <li><NavLink activeStyle={{ color: "green", fontSize: "30px" }} to="/todo">Liste</NavLink></li>
                <li><NavLink activeClassName="active" to="/contact">Contacts</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;