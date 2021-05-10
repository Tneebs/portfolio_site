import React from "react";
import Google from "../images/GoogleDocs_White.png"

const Resume = () => {
  return (
    <div className='resume-container'>
      <div className='resume-page'>
          <div className='resume-download'>
            <a href="https://drive.google.com/uc?id=1vBBmzArjLeM1p8gSFiUwOtfFAkybCEiV&export=download">
              <img src={Google} alt='resume-download' className='download'/>
            </a>
            <h1 className='resume-title'>Software Engineer</h1>
            <p className='resume-line'>___________________________________________________________________________________________________________________________________________</p>
            <p className='resume-bio'><strong>Experienced in Ruby on Rails and JavaScript based programming with a background in business management
            and ownership. Possess strong skills in team leading and an innovative initiative that helps growing and 
            established companies drive positive work environments and efficient results. Adaptable personality to set 
            up success for everyone around.</strong></p>
          </div>

          <br/>
          <br/>

          <div className='skills-container'>
            <div className='skills-header'>
              <h2 className='skills-title'>Technical Skills</h2> 
            </div>
            <div className='tech-container'>
              <div className='tech-skills-1'>
                <p className='tech-skills'>◆ HTML</p>
                <p className='tech-skills'>◆ CSS</p>
                <p className='tech-skills'>◆ Ruby on Rails</p>
                <p className='tech-skills'>◆ JavaScript</p>
                <p className='tech-skills'>◆ React</p>
              </div>
              <div className='tech-skills-2'>
                <p className='tech-skills'>◆ SQL</p>
                <p className='tech-skills'>◆ postgreSQL</p>
                <p className='tech-skills'>◆ Photoshop</p>
                <p className='tech-skills'>◆ Illustrator</p>
                <p className='tech-skills'>◆ Lightroom</p>
              </div>
            </div>
          </div>

          <br/>
          <br/>
          
          <div className='project-container'>
            <div className='project-title-container'>
              <h2 className='project-title'>Technical Projects</h2>
            </div>

            <div className='project-header'>
              <h3 className='project-title-portfoliu'>Portfoli-U - <a href="https://github.com/Tneebs/Portfoli-U">Github</a> | <a href="https://www.youtube.com/watch?v=DumBp8l2R6A">Demo</a></h3>
              <em><h4 className='project-desc-portfoliu'>A social project management tool</h4></em>
            </div>

              <div className='project-bullets'>
                <p className='bullets'>◆ Utilized JSON Web Tokens and localStorage to store encrypted user information client-side</p>
                <p className='bullets'>◆ Optimized user experience by integrating Material-UI to work with class and functional components</p>
                <p className='bullets'>◆ Created Authorization to contain user information</p>
                <p className='bullets'>◆ Established a means to manage projects while displaying a user’s information</p>
              </div>

              <br/>
              <br/>

            <div className='project-header'>
              <h3 className='project-title-tactics'>Tactics Lite - <a href="https://github.com/Tneebs/Tactics-Lite">Github</a> | <a href="https://www.youtube.com/watch?v=A7PIuR2VSYE">Demo</a></h3>
              <h4 className='project-desc-tactics'>Tactical Game setup for two users to battle one another in a turn-based fighting style</h4>
            </div>

              <div className='project-bullets'>
                <p className='bullets'>◆ Applied AGILE methods into my project team’s approach to everyday tasks</p>
                <p className='bullets'>◆ Utilized conditionals throughout code for emphasis on user experience</p>
                <p className='bullets'>◆ Implemented Canvas to create a game board that users can control player tokens on</p>
              </div>

              <br/>
              <br/>

            <div className='project-header'>
              <h3 className='project-title-mploy'>MPloy! - <a href="https://github.com/Tneebs/MPloy">Github</a> | <a href="https://www.youtube.com/watch?v=cUdRhZERVq0">Demo</a></h3>
              <h4 className='project-desc-mploy'>An employee/manager relationship app designed to handle time off requests</h4>
            </div>
            
              <div className='project-bullets'>
                <p className='bullets'>◆ Enforced validations in the backend to create a more concise user experience</p>
                <p className='bullets'>◆ Created custom logos and theme, through Photoshop, to create a branded atmosphere</p>
                <p className='bullets'>◆ Built out structural models and controllers intended to allow the app growth and directional feedback</p>
                <p className='bullets'>◆ Engineered permissions into models to result in 2 different user experiences</p>
              </div>

          </div>

          <br/>
          <br/>

          <div className='job-container'>

            <div className='job-title-container'>
              <h2 className='job-title'>Experience</h2>
            </div>
            
            <div className='job-name'>
              <h3 className='job-name-title'><strong>WeSO, LLC.</strong></h3>
              <h4 className='job-date'>Houston, TX (04/2018 - Present)</h4>
            </div>

            <div className='job-desc-container'>
              <h4 className='job-desc'>Co-Owner of e-commerce drop shipping company</h4>
            </div>

              <div className='job-bullets'>
                <p className='bullets'>◆ Increased awareness for brand through innovative marketing strategies and customer interactions</p>
                <p className='bullets'>◆ Manage finances and create ad spend budgets based on A/B testing results</p>
                <p className='bullets'>◆ Create original merchandise designs, execute studio photo shoots, write marketing copy</p>
              </div>

              <br/>
              <br/>

              <div className='job-name'>
                <h3 className='job-name-title'><strong>joeToga</strong></h3>
                <h4 className='job-date'>Houston, TX (04/2013 - 05/2018)</h4>
              </div>

              <div className='job-desc-container'>
                <h4 className='job-desc'>Co-Owner of a Fraternity and Sorority Greek Store</h4>
              </div>
                <div className='job-bullets'>
                  <p className='bullets'>◆ Devolved new line of business through screen printing and embroidery and increased sales by 20% in the first year</p>
                  <p className='bullets'>◆ Ran key operations in store front, managed inventory, payroll, online sales, and led ~8 employees</p>
                  <p className='bullets'>◆ Created a positive working atmosphere by providing opportunities for growth</p>
                </div>

          </div>
            
            <br/>
            <br/>
          
          <div className='school-container'>

            <div className='school-title-container'>
              <h2 className='school-title'>Education</h2>
            </div>

            <div className='school-name'>
              <h3 className='school-name-title'><strong>Flatiron School</strong></h3>
              <h4 className='school-date'>Houston, TX (07/2020 - 10/2020)</h4>
            </div>

            <div className='education-desc-container'>
              <h4 className='education-desc'>◆ Full Stack Web Development, Ruby on Rails, and JavaScript Programs</h4>
            </div>
            
            <br/>
            <br/>

            <div className='school-name'>
              <h3 className='school-name-title-2'><strong>Houston Baptist University</strong></h3>
              <h4 className='school-date-2'>Houston, TX (08/2011 - 12/2011)</h4>
            </div>

            <div className='education-desc-container'>
              <h4 className='education-desc-2'>◆ Coursework completed towards BA/BS in Biology</h4>
            </div>

          </div>

          <br/>
          <br/>
      </div>
      <div className='resume-break'/>
    </div>
  )
};

export default Resume;
