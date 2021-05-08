import React from "react";
import github from "../images/github.png";
import MPloy from "../images/MPloyScreenshot.png";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const Portfolio = () => {
  return (
    <>
        <div className='portfolio-page'>
          <Jumbotron className="jumbo-project-container">
              <div className="project-vid">
                <h1 className="project-main-title">MPloy!</h1>
                <iframe
                  className="project-main-vid"
                  title="MPloy!"
                  src="https://www.youtube.com/embed/cUdRhZERVq0"
                  frameBorder="0"
                  allowFullScreen
                />

                <div className="repo-container">
                  <h3 className='tech-stack'>Technology Stack</h3>
                    <img src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white" alt="rails_badge" className='rails-main-badge'/> 
                    <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="bootstrap_badge" className='bootstrap-main-badge'/>
                  <a
                    href="https://github.com/Tneebs/MPloy"
                    alt="Github: Tneebs"
                  >
                    <img className='github-repo' height="50" src={github} alt="Github" />
                  </a>
                </div>
              </div>

              <div className="title-overview">
                <p className="project-main-overview">
                  MPloy is an application that allows employees to make requests
                  to their managers and view a profile page of their requests.
                </p>
                <img className='project-screenshot' src={MPloy} />
              </div>

          </Jumbotron>

          <div className='portfolio-break' />

          <div className="project-card-row">
            {/* <div className='project-card'>
          <iframe
          className='project-vid'
          title='MPloy!'
          src='https://www.youtube.com/embed/cUdRhZERVq0'
          frameBorder='0' allowFullScreen>
          </iframe>
          <h1 className='title'>MPloy!</h1>

          <div className='description'>
            <p className='overview'>
            MPloy is an application that allows employees to make requests to their managers and view a profile page of their requests.
            </p>
          </div>
        
          <div className='technology'>
          <h3>Technology Stack</h3>
          <p className='stack'>Ruby on Rails <br/> Bootstrap</p>
          </div>

          <div className='repo-container'>
              <a href='https://github.com/gocoog/Mod2-project' alt='Github: Tneebs'>
                <div className='repo'>
                  <img height='50' src={github} alt='Github'/>
                </div>
              </a>
          </div>

      </div> */}

            <div className="project-card">
              <iframe
                className="project-tactics-vid"
                title="Tactics Lite"
                src="https://www.youtube.com/embed/A7PIuR2VSYE"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <h1 className="title">Tactics Lite</h1>

              <div className="description">
                <p className="overview">
                  Tactics Lite is a strategy game between two players that
                  control their own army. Through turns, actions, and movement,
                  the first person to lose their whole army loses.
                </p>
              </div>

              <div className="technology">
                <h3 className='tech-stack-title'>Technology Stack</h3>
                  <img src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white" alt="rails_badge" className='rails-badge'/> 
                  <br/>
                  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="js_badge" className='js-badge'/>
                  <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jquery_badge" className='jquery-badge'/>
              </div>
              
              <br/>

              <div className="tactics-repo">
                <a
                  href="https://github.com/Tneebs/Tactics-Lite"
                  alt="Github: Tneebs"
                >
                    <img height="50" src={github} alt="Github" className='portfolio-tactics-github' />
                </a>
              </div>

            </div>

            <div className="project-card">
              <iframe
                className="project-portfoliu-vid"
                title="Portfoli-U"
                src="https://www.youtube.com/embed/DumBp8l2R6A"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <h1 className="title">Portfoli-U</h1>

              <div className="description">
                <p className="overview">
                  Portfoli-U is a social project management tool that allows
                  users to connect through means of projects, all while keeping
                  them organized.
                </p>
              </div>

              <div className="technology">
                <h3 className='tech-stack-title'>Technology Stack</h3>
                  <img src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white" alt="rails_badge" className='rails-badge'/>
                  <br/>
                  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="js_badge" className='js-badge'/>
                  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react-badge" className='react-badge'/>
                  <img src="https://img.shields.io/badge/JWT Auth-blue" alt="jwt-badge" className='jwt-badge'/>
              </div>
              <br/>

              <div className="portfoliu-repo">  
                <a
                  href="https://github.com/Tneebs/Portfoli-U"
                  alt="Github: Tneebs"
                >
                    <img height="50" src={github} alt="Github" className='portfolio-github' />
                </a>
              </div>


            </div>

            <div className="project-card">
              <iframe
                className="project-toughflix-vid"
                title="ToughFlix"
                src="https://www.youtube.com/embed/hMUHb7im-XE"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <h1 className="title">ToughFlix</h1>

              <div className="description">
                <p className="overview">
                  ToughFlix gives a user the ability to create their own movie
                  lists and then connect with other users to like or dislike
                  movies based on their preferences.
                </p>
              </div>

              <div className="technology">
                <h3 className='tech-stack-title'>Technology Stack</h3>
                  <img src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white" alt="rails_badge" className='rails-badge'/>
                  <br/>
                  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="js_badge" className='js-badge'/>
                  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react-badge" className='react-badge'/>
                  <img src="https://img.shields.io/badge/JWT Auth-blue" alt="jwt-badge" className='jwt-badge'/>
              </div>

                {/* <a
                  href="https://github.com/Tneebs/ToughFlix_Mod4_FE"
                  alt="Github:Tneebs"
                >
                  <div className="toughflix-repo">
                    <img height="50" src={github} alt="Github" />
                  </div>
                </a> */}
                <div className="toughflix-repo">
                <a
                  href="https://github.com/Tneebs/ToughFlix_Mod4"
                  alt="Github:Tneebs"
                >
                    <img height="50" src={github} alt="Github" className='portfolio-github' />
                </a>
                </div>
            </div>
          </div>

          <div className='portfolio-break-2' />
        </div>
    </>
  );
};

export default Portfolio;
