import React from 'react';
import {NavLink} from 'react-router-dom';
import './Menu.css';


class Menu extends React.Component{
    
    open = () => {
        
        let global = document.getElementsByClassName('menucontainer')[0];
        console.log(global.style.display);
        if (global.style.display === 'none') {            
            global.style.display = 'flex';
         } else {
            global.style.display = 'none';
         }
         
    }

//  dsk-4 au lieu de Dsk-12 provisoire//
    render(){
        return(
            <div className="bigContainer  dsk-4 mob-12" >
                <div className='logo_menu dsk-4 mob-12' >
                   <img className="img_menu" src="./img/logo.png" alt="Zodiastral"onClick={this.open} />
                </div>
                
                    <div className="menucontainer  dsk-12 tab-12 mob-12" style={{display: 'none'}} >
                        
                        <div className="itemscontainer_1 dsk-4 tab-4 mob-12">
                            <NavLink className="menu_link" id="NavLink-1"to="Erreur404" onClick={this.open}>Your Profile</NavLink>
                            <NavLink className="menu_link" id="NavLink-2"to="ContactUs" onClick={this.open}>Contact Us</NavLink>
                        </div>
                        <div className="itemscontainer_2 dsk-4 tab-4 mob-12">
                            <NavLink className="menu_link"id="NavLink-3" to="FindYourSign" onClick={this.open}>Find your Sign...</NavLink>
                            <NavLink className="menu_link" id="NavLink-4" to="Teams" onClick={this.open}>About Us</NavLink>
                        </div>
                    </div>            
                
            </div>
        )
        }
}


export default Menu;