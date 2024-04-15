import React from 'react'
import './intro.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import bg from '../../assets/bg.png';
import btnImg from '../../assets/call.png';
import { Link } from 'react-scroll';

export const Intro = () => {
  return (
  <section id="intro">
    <div className="introContent">
        <span className="hello">Hello,</span><br />
        <span className="introText">I'm <span className="introName">Shambhavi</span> <br />Full stack Developer</span><br />
        <p className='introPara'>I am skilled Web Developer with experience in creating <br />Visually appealing and user friendly websites.</p>
    </div>
    <Link><button className='btn'><i class="fa fa-briefcase"></i> Hire Me</button></Link>
    <img src={ bg } className="bg"/>
  </section>
  )
}

export default Intro;