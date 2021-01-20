import React from 'react';
import github from '../images/github.png';

const MediaLinks = () => {


    return(
        <div className="footer-container">
            
            <div className="mediaLinks">
                <a href="https://www.linkedin.com/in/tedneben/">
                    {/* <img id="mediaLinks-logo" alt="linkedin-logo" src={linkedin} /> */}
                </a>
            </div>

            <div className="mediaLinks">
                <a href="https://github.com/Tneebs">
                    <img id="mediaLinks-logo" alt="github-logo" src={github} />
                </a>
            </div>
            
            <div className="mediaLinks">
                <a href="https://tedneben.medium.com/">
                    {/* <img id="mediaLinks-logo" alt="medium-logo" src={medium} /> */}
                </a>
            </div>

            <div className="mediaLinks">
                <a href="https://www.instagram.com/newtonheimer/">
                    {/* <img id="mediaLinks-logo" alt="instagram-logo" src={instagram} /> */}
                </a>
            </div>

            <div className="mediaLinks">
                <a href="https://www.youtube.com/channel/UCWZ21OZDoSuvv137rC9Ax2A/featured">
                    {/* <img id="mediaLinks-logo" alt="youtube-logo" src={youtube} /> */}
                </a>
            </div>

            <div className="mediaLinks">
                <a href="">
                    {/* <img id="mediaLinks-logo" alt="resume-logo" src={resume} /> */}
                </a>
            </div>

        </div>
    )
}

export default MediaLinks;