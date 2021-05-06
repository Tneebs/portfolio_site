import React from 'react';
import TNeebsSig from '../images/TNeebsSig.png'
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'

const NavLinks = (props) => {
    return(
        <div className='navlinks-container'>
            <div className='navlink-bar'>
            <a href="/home">
                <img
                    src={TNeebsSig}
                    width="50"
                    height="50"
                    className="tn-sig"
                    alt="home-btn"
                />
                </a>
                <a href="/about" className='nav'>About Me</a>
                <a href="/portfolio" className='nav'>Portfolio</a>
                <a href="/blogs" className='nav'>Blogs</a>
                <a href="/resume" className='nav'>Resume</a>
                <a href="/contact" className='nav'>Contact</a>

            </div>            
        </div>
    )
}

export default NavLinks;