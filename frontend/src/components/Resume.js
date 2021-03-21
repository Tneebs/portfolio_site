import React from "react";

const Resume = () => {
  return (
    <div className='resume-container'>
      <div className='resume-page'>

          <h1 className='resume-title'>Software Engineer</h1>
          <p>________________________________________________________________________________________________________________________</p>
          <h2>Technical Skills</h2>
          <br/>
          <h4 className='tech-skills'>HTML, CSS, Ruby on Rails, JavaScript, React, SQL, mySQL, postgreSQL, Photoshop, Illustrator, Lightroom</h4>
          
          <br/>
          <br/>
          
          <h2>Techincal Projects</h2>
          <h3 className='project-title'>Portfoli-U - <a href="https://github.com/Tneebs/Portfoli-U">Github</a> | <a href="https://www.youtube.com/watch?v=DumBp8l2R6A">Demo</a></h3>
          <h4 className='project-desc'>A social project management tool</h4>
            <div className='project-bullets'>
              <p className='bullets'>◆ Utilized JSON Web Tokens and localStorage to store encrypted user information client-side</p>
              <p className='bullets'>◆ Optimized user experience by integrating Material-UI to work with class and functional components</p>
              <p className='bullets'>◆ Created Authorization to contain user information</p>
              <p className='bullets'>◆ Established a means to manage projects while displaying a user’s information</p>
            </div>
            <br/>

          <h3 className='project-title'>Tactics Lite - <a href="https://github.com/Tneebs/Tactics-Lite">Github</a> | <a href="https://www.youtube.com/watch?v=A7PIuR2VSYE">Demo</a></h3>
          <h4 className='project-desc'>Tactical Game setup for two users to battle one another in a turn-based fighting style</h4>
            <div className='project-bullets'>
              <p className='bullets'>◆ Applied AGILE methods into my project team’s approach to everyday tasks</p>
              <p className='bullets'>◆ Utilized conditionals throughout code for emphasis on user experience</p>
              <p className='bullets'>◆ Implemented Canvas to create a game board that users can control player tokens on</p>
            </div>
            <br/>

          <h3 className='project-title'>MPloy! - <a href="https://github.com/Tneebs/MPloy">Github</a> | <a href="https://www.youtube.com/watch?v=cUdRhZERVq0">Demo</a></h3>
          <h4 className='project-desc'>An employee/manager relationship app designed to handle time off requests</h4>
            <div className='project-bullets'>
              <p className='bullets'>◆ Enforced validations in the backend to create a more concise user experience</p>
              <p className='bullets'>◆ Created custom logos and theme, through Photoshop, to create a branded atmosphere</p>
              <p className='bullets'>◆ Built out structural models and controllers intended to allow the app growth and directional feedback</p>
              <p className='bullets'>◆ Engineered permissions into models to result in 2 different user experiences</p>
            </div>

          <br/>
          <br/>

          
      </div>
    </div>
  )
};

export default Resume;
