import React from 'react';
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
    return(
        <div className='navlinks-container'>

            <div className='navlink-home'>
                <NavLink to='/' exact>Home</NavLink>
            </div>

            <div classNme='navlink-portfolio'>
                <NavLink to='/portfolio' exact>Portfolio</NavLink>
            </div>

            <div className='navlink-blogs'>
                <NavLink to='/blogs' exact>Blogs</NavLink>
            </div>

            <div className='navlink-resume'>
                <NavLink to='/resume' exact>Resume</NavLink>
            </div>

            <div className='navlink-contact'> 
                <NavLink to='/contact' exact>Contact</NavLink>
            </div>
            
        </div>
    )
}

export default NavLinks;