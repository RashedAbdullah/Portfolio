import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className='ResumeMainDiv'>

        

            <div className='nameAndAddress text-center'>

                    <h4>About me:</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga facilis eius veniam, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga facilis eius veniam,   <code>repudiandae obcaecati dolor reprehenderit  </code> dolores optio! Voluptas nihil nemo iure repellat! Suscipit consequatur ipsum amet praesentium voluptate placeat!</p>

            </div>
            
                
           
        

            <div className='SkillsAndOthers'>

                <div className='Skills'>
                    <h4>Sills:</h4>
                    <ul>
                        <li><b>Expertise: </b>JavaScript, React.js, CSS, HTML, Bootstrap5</li>
                        <li><b>Comportble: </b>Express.js, MongoDB, Next.js, Node.js, TypeScript.js</li>
                        <li><b>Tools: </b>Github, VSCode, Chrome Dev Tools, Figma</li>
                        <li><b>Extra: </b>Video Editing(PremierePro), Animation(AfterEffects), Photoshop, Adobe illastrator</li>
                    </ul>
                </div>

                <div className="Projects">
                    <h4>Projects:</h4>
                    <ul>
                        <h5>EasyQuran.com <span>Github Link</span></h5> 
                        <li>Best Probjec i create all time, send user a big enterpace for anything, so be careull</li>
                        <li>send user a big enterpace for anything, so be careullBest Probjec i create all time</li>
                        <li>send user a big enterpace for anything, so be careullBest Probjec i create all time</li>
                    </ul>

                    <ul>
                        <h5>QawmiAducation.com<span>Github Link</span></h5> 
                        <li>Best Probjec i create all time, send user a big enterpace for anything, so be careull</li>
                        <li>send user a big enterpace for anything, so be careullBest Probjec i create all time</li>
                        <li>send user a big enterpace for anything, so be careullBest Probjec i create all time</li>
                    </ul>
                </div>

                <div className='myLanguages'>
                    <h4>Languages</h4>
                    <ul>
                        <li>English(Fluent)</li>
                        <li>Arabic(Fluent)</li>
                        <li>Urdu(Fluent)</li>
                        <li>Hindi(Fluent)</li>
                        <li>Bangla(Native)</li>
                    </ul>
                </div>
            </div>
        
    </div>
  )
}

export default Resume;