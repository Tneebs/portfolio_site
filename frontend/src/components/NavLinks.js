import React from 'react';
import TNeebsSig from '../images/TNeebsSig.png'
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { motion } from 'framer-motion';

const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
    //   boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  }

const NavLinks = (props) => {
    return(
        <div className='navlinks-container'>
            <div className='navlink-bar'
                variants={buttonVariants}
                whileHover='hover'
            >
            <a href="/home">
                <motion.img
                    src={TNeebsSig}
                    width="50"
                    height="50"
                    className="tn-sig"
                    alt="home-btn"

                    variants={buttonVariants}
                    whileHover='hover'
                />
                </a>
                <motion.a href="/about" className='nav' 
                    variants={buttonVariants} 
                    whileHover='hover'
                    >About Me</motion.a>
                <motion.a href="/portfolio" className='nav'
                    variants={buttonVariants} 
                    whileHover='hover'
                    >Portfolio</motion.a>
                <motion.a href="/blogs" className='nav' 
                    variants={buttonVariants} 
                    whileHover='hover'
                    >Blogs</motion.a>
                <motion.a href="/resume" className='nav' 
                    variants={buttonVariants} 
                    whileHover='hover'
                    >Resume</motion.a>
                <motion.a href="/contact" className='nav' 
                    variants={buttonVariants} 
                    whileHover='hover'
                    >Contact</motion.a>

            </div>            
        </div>
    )
}

export default NavLinks;