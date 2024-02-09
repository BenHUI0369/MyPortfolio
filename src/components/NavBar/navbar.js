import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contectImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

export const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
            <Link className="desktopMenuListItem">Resume</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contectImg} alt="" className="desktopMenuImg" />Contact Me
        </button>
    </nav>
  )
}
