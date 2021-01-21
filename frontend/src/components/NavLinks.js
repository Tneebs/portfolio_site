import React from 'react';
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
    return(
        <div className='navlinks-container'>
            <div className='navlinks'>
                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='/portfolio' exact>Portfolio</NavLink>
                <NavLink to='/blogs' exact>Blogs</NavLink>
                <NavLink to='/resume' exact>Resume</NavLink>
                <NavLink to='/contact' exact>Contact</NavLink>
            </div>
        </div>
    )
}

export default NavLinks;