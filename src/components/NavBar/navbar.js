import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contectImg from '../../assets/contact.png';
import resume from '../../assets/resume/BenHUI_Resume.pdf'
import { Link } from 'react-scroll';
import meun from '../../assets/menu.png';

export const Navbar = () => {
  const [showMeun, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
            <Link
            activeClass='active'
            to='intro'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
            >Home</Link>
            <Link
            activeClass='active'
            to='skills'
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="desktopMenuListItem"
            >About</Link>
            <Link  
            activeClass='active'
            to='works'
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="desktopMenuListItem"
            >Portfolio</Link>
            <Link  
            activeClass='active'
            to='clients'
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="desktopMenuListItem"
            >Clients</Link>
            <a className="desktopMenuListItem" href={resume} target="_blank">Resume</a>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contectImg} alt="" className="desktopMenuImg" />Contact Me
        </button>

        <img src={meun} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMeun)}/>
        <div className="navMenu" style={{display: showMeun? 'flex': 'none'}}>
            <Link
            activeClass='active'
            to='intro'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
            >Home</Link>
            <Link
            activeClass='active'
            to='skills'
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
            >About</Link>
            <Link  
            activeClass='active'
            to='works'
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
            >Portfolio</Link>
            <Link  
            activeClass='active'
            to='clients'
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
            >Clients</Link>
            <Link  
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
            >Contact</Link>
            <Link  
            activeClass='active'
            to='clients'
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
            >Resume</Link>
        </div>
    </nav>
  )
}
