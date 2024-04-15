import React from 'react';
import './skills.css';
import UIDesign from '../../assets/Front-end.jpg';
import Webdesign from '../../assets/website-design.png';
import Appdesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
    <span className='skillTitle'>what I do</span>
    <span className='skillDesc'>I am skilled and passionate web Developer with experience in creating visually appealing and user-friendly websites.I have a strong understanding of design and a keen eye for detail.I am proficient in HTML,css and javascript, as well as design software such as Adobe photoshop and illustrator. </span>
    <div className="skillBars">
    <div className="skillBar">
        <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
        <div className="skillBarText">
            <h2>Frontend-backend</h2>
            <p>This is demo Text</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={Webdesign} alt="Webdesign" className="skillBarImg"/>
        <div className="skillBarText">
            <h2>Website Design</h2>
            <p>This is demo Text</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={Appdesign} alt="Webdesign1" className="skillBarImg"/>
        <div className="skillBarText">
            <h2>App Design</h2>
            <p>This is demo Text</p>
        </div>
    </div>
    </div>
    </section>
  )
}

export default Skills;
