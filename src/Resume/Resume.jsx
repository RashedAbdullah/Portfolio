import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div>
        <div className='nameAndAddress'>
            <h2 className='myName'>MD ABDUL AHAD RASHED</h2>
            <p className='myProfession'>Front-end Developer</p>
            <p className="address">Feni, Bangladesh | rsddesing3@gmai.com</p>

            <div className='SomthingAboutMe'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga facilis eius veniam, <code>repudiandae obcaecati dolor reprehenderit </code> dolores optio! Voluptas nihil nemo iure repellat! Suscipit consequatur ipsum amet praesentium voluptate placeat!</p>
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
    </div>
  )
}

export default Resume;