import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import SoftwareDev from '../../assets/software.png';

export const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">I am a recent graduate student with a passion on web development to create visually appealing and user-friendly website. I also have a strong understanding of SQL and backend API. I am proficient in HTML, CSS, and JavaScript together with design software such as Adobe Illustrator and Photoshop for the frontend UI design.</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Crafting intuitive interfaces and exceptional user experiences through research, wireframing, and visual design.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>Designing responsive, visually appealing websites with a focus on usability, performance, and modern aesthetics.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>Developing engaging, user-friendly mobile apps with a focus on intuitive navigation and aesthetic appeal.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={SoftwareDev} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Software Development</h2>
            <p>Building robust, scalable software solutions with a focus on innovation, efficiency, and custom functionality.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
