import React from 'react';
import github from '../images/github.png';
import Instagram from '../images/Instagram.png';
import LinkedIn from '../images/LinkedIn.png';
import Medium from '../images/Medium.png';
import YouTube from '../images/Youtube.png';


const MediaLinks = () => {


    return(
        <div className="footer-container">
            <div className='footer-row'>
            
                <a href="https://www.linkedin.com/in/tedneben/" className='mediaLinks-container'>
                    <img className="mediaLinks-logo" alt="linkedin-logo" src={LinkedIn} />
                </a>

                <a href="https://github.com/Tneebs" className='mediaLinks-container'>
                    <img className="mediaLinks-logo" alt="github-logo" src={github} />
                </a>
            
                <a href="https://tedneben.medium.com/" className='mediaLinks-container'>
                    <img className="mediaLinks-logo" alt="medium-logo" src={Medium} />
                </a>

                <a href="https://www.instagram.com/newtonheimer/" className='mediaLinks-container'>
                    <img className="mediaLinks-logo" alt="instagram-logo" src={Instagram} />
                </a>

                <a href="https://www.youtube.com/channel/UCWZ21OZDoSuvv137rC9Ax2A/featured" className='mediaLinks-container'>
                    <img className="mediaLinks-logo" alt="youtube-logo" src={YouTube} />
                </a>

            </div>
        </div>
    )
}

export default MediaLinks;