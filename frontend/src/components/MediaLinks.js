import React from 'react';
import github from '../images/github.png';
import GoogleDocs from '../images/GoogleDocs.png';
import Instagram from '../images/Instagram.png';
import LinkedIn from '../images/LinkedIn.png';
import Medium from '../images/Medium.png';
import YouTube from '../images/Youtube.png';


const MediaLinks = () => {


    return(
        <div className="footer-container">
            
                <a href="https://www.linkedin.com/in/tedneben/">
                    <img className="mediaLinks-logo" alt="linkedin-logo" src={LinkedIn} />
                </a>

                <a href="https://github.com/Tneebs">
                    <img className="mediaLinks-logo" alt="github-logo" src={github} />
                </a>
            
                <a href="https://tedneben.medium.com/">
                    <img className="mediaLinks-logo" alt="medium-logo" src={Medium} />
                </a>

                <a href="https://www.instagram.com/newtonheimer/">
                    <img className="mediaLinks-logo" alt="instagram-logo" src={Instagram} />
                </a>

                <a href="https://www.youtube.com/channel/UCWZ21OZDoSuvv137rC9Ax2A/featured">
                    <img className="mediaLinks-logo" alt="youtube-logo" src={YouTube} />
                </a>

                <a href="">
                    <img className="mediaLinks-logo" alt="resume-logo" src={GoogleDocs} />
                </a>

        </div>
    )
}

export default MediaLinks;