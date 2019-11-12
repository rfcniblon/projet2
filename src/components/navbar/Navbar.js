import React from "react";
import './Navbar.css'
import '../fonts/fonts.css';
//import '../cursor/Curseur.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (


    <nav className="menu nav">
       {/* <div className="div_name_website"> */}

      {/* </div>  */}
      <div className="nav_info_user">
       <a href="./"><p className="name_website titre_website classnul">Zodiastral</p></a>
       
        
       <div className="user_test">
        <img
          src="./img/user.png" className="logo_user" alt="logo user"/>
        <p className="test classnul">
          <NavLink activeClassName="active test text_article" to="/pseudo"> Pseudo </NavLink>
        </p>
      </div>
      </div>
      <div className="nav_search text_article">
        <input className="nav_input text_article" />
        <button className="nav_button text_article">
          Search
        </button>
      </div>
    </nav>
  );
}

export default Navbar;