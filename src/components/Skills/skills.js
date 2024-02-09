import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

export const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">I am a recent graduate student with passionate on web development to create visually appealing and user-friendly websited. I also have a strong understanding of SQL and backend API. I am proficient in HTML, CSS, and JavaScript together with design software such as Adobe Illustrator and Photoshop for the frontend UI design.</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is a demo text, you can edit your own content here.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>This is a demo text, you can edit your own content here.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>This is a demo text, you can edit your own content here.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
