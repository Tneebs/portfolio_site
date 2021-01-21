import React from 'react';
import NavLinks from '../components/NavLinks';
import NavLogo from '../components/NavLogo';

const Header = (props) => {
    return (
        <div className='header'>

            <NavLinks />
            <NavLogo />

        </div>
    )
}

export default Header;