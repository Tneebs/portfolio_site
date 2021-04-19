import React from "react";
import github from '../images/github.png'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Portfolio = () => {
  return (
    <>
    <div className='portfolio-container'>
      <div classNAme='portfolio-page'>
      <Jumbotron className='jumbo-project-container'>
        <div className='vid-tech'>
            <div className='project-vid'>
              <iframe
              className='project-main-vid'
              title='MPloy!'
              src='https://www.youtube.com/embed/cUdRhZERVq0'
              frameBorder='0' allowFullScreen/>

            <div className='repo-container'>
              <h3>Technology Stack</h3>
              <p className='stack'>Ruby on Rails <br/> Bootstrap</p>
              <a href='https://github.com/gocoog/Mod2-project' alt='Github: Tneebs'>
            <div className='repo'>
              <img height='50' src={github} alt='Github'/>
            </div>
              </a>
            </div>
            </div>

            <div className='title-overview'>
              <h1 className='project-main-title'>MPloy!</h1>
              <p className='project-main-overview'>
                MPloy is an application that allows employees to make requests to their managers 
                and view a profile page of their requests.
              </p>
            </div>
            </div>

            {/* <div className='repo-container'>
              <h3>Technology Stack</h3>
              <p className='stack'>Ruby on Rails <br/> Bootstrap</p>
              <a href='https://github.com/gocoog/Mod2-project' alt='Github: Tneebs'>
            <div className='repo'>
              <img height='50' src={github} alt='Github'/>
            </div>
              </a>
            </div> */}

      </Jumbotron>

    <div className='project-card-row'>
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

      <div className='project-card'>
          <iframe
          className='project-vid'
          title='Tactics Lite'
          src='https://www.youtube.com/embed/A7PIuR2VSYE'
          frameBorder='0' allowFullScreen>
          </iframe>
          <h1 className='title'>Tactics Lite</h1>

          <div className='description'>
            <p className='overview'>
            Tactics Lite is a strategy game between two players that control their own army. Through turns, actions, and movement, the first person to lose their whole army loses.
            </p>
          </div>
        
          <div className='technology'>
          <h3>Technology Stack</h3>
          <p className='stack'>Ruby on Rails <br/> JavaScript <br/> jQuery</p>
          </div>

          <div className='repo-container'>
              <a href='https://github.com/Tneebs/Tactics-Lite' alt='Github: Tneebs'>
                <div className='repo'>
                  <img height='50' src={github} alt='Github'/>
                </div>
              </a>
          </div>

      </div>

      <div className='project-card'>
          <iframe
          className='project-vid'
          title='Portfoli-U'
          src='https://www.youtube.com/embed/DumBp8l2R6A'
          frameBorder='0' allowFullScreen>
          </iframe>
          <h1 className='title'>Portfoli-U</h1>

          <div className='description'>
            <p className='overview'>
            Portfoli-U is a social project management tool that allows users to connect through means of projects, all while keeping them organized.
            </p>
          </div>
        
          <div className='technology'>
          <h3>Technology Stack</h3>
          <p className='stack'>Ruby on Rails <br/> JavaScript <br/> React <br/> JWT Auth</p>
          </div>

          <div className='repo-container'>
              <a href='https://github.com/Tneebs/Portfoli-U' alt='Github: Tneebs'>
                <div className='repo'>
                  <img height='50' src={github} alt='Github'/>
                </div>
              </a>
          </div>

      </div>


      <div className='project-card'>
          <iframe
          className='project-vid'
          title='ToughFlix'
          src='https://www.youtube.com/embed/hMUHb7im-XE'
          frameBorder='0' allowFullScreen>
          </iframe>
          <h1 className='title'>ToughFlix</h1>

          <div className='description'>
            <p className='overview'>
              ToughFlix gives a user the ability to create their own movie lists and then connect with other users to like or dislike movies based on their preferences.
            </p>
          </div>
        
          <div className='technology'>
          <h3>Technology Stack</h3>
          <p className='stack'>Ruby on Rails <br/> JavaScript <br/> React <br/> JWT Auth</p>
          </div>

          <div className='repo-container-double'>
              Frontend    
              <a href='https://github.com/Tneebs/ToughFlix_Mod4_FE' alt='Github:Tneebs'>
                <div className='repo'>
                  <img height='50' src={github} alt='Github'/>
                </div>
              </a>
              Backend    
              <a href='https://github.com/Tneebs/ToughFlix_Mod4' alt='Github:Tneebs'>
                <div className='repo'>
                  <img height='50' src={github} alt='Github'/>
                </div>
              </a>
          </div>

        </div>

      </div>
      </div>
    </div>
    </>
  )
};

export default Portfolio;
