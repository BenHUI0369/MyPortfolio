import React from 'react';
import './intro.css';
import background from '../../assets/selfimage.png';
import hireMeImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

export const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">
                I'm 
                <span className="introName"> Ben</span><br />
                A Web developer
            </span>
            <p className="introPara">I am a recent graduate student and a skilled web developer</p>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            ><button className="btn"><img src={hireMeImg} alt="HireMe" className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={background} alt="" className="background" />
    </section>
  )
}
