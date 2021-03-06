import React from 'react';
import TNeebsSig from '../images/TNeebsSig.png';

const NavLogo = (props) => {
    return(
        <div className='signature'>
            <img className="tn-sig" alt="linkedin-logo" src={TNeebsSig} />
        </div>
    )
}

export default NavLogo;