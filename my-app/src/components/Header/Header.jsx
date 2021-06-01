import React from "react";
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header =() =>{
  return(
    <header className="main-header">
             <h1 className="main-header__name">
                 <NavLink to='/article'>
                     SHARETRADE.<span className="main-header__name-domen">COM</span>
                 </NavLink>
             </h1>
        </header>
  )
}

export default Header;
