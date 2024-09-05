import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import Nav from '../components/Navigation';
import Skills from '../components/mySkills';
import Contact from '../components/ContactMe';
import MyWork from '../components/myWork';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import htmlImage from '../images/html.png'; 
import ProfileImage from '../images/PortfolioImage.jpg';

function Portfolio() {
  const navigate = useNavigate();

  const handleMoreAboutMeClick = () => {
    // Navigate to the mySkills section
    const skillsSection = document.getElementById('skills');
    skillsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='about-me'>
      <div className='about-content'>
 
        <div className='about-me-content' id="about">
          <div className='info-holder'>
            <div className='name-holder'>
              <h1>
                <span className="first-part">-Kristaps</span> <span className="second-part">Ābelītis</span>
                <p className='web-developer-p'>WEB DEVELOPER</p>
              </h1>
              <p>Good afternoon! I am Kristaps Ābelītis, a 4th year student at 
                Vidzeme Technical School of Technology and Design, where I am studying 
                the profession of a programming technician. I am interested in web development and
                 technology news, and I am motivated to continue to develop in this field.</p>
                <button onClick={handleMoreAboutMeClick}>MORE ABOUT ME <FontAwesomeIcon icon={faArrowRight} size='2x'/></button>
            </div>
          </div>
          <div className='image-holder'>
            <img src={ProfileImage} alt="Profile" />
          </div>
        </div>
        <div className='skills-section' id="skills">
          <Skills />
        </div>
        <div className='skills-section' id="myWork">
          <MyWork />
        </div>
        <div className='skills-section' id="contact">
          <Contact />
        </div>

      </div>
      <Nav />
    </section>
  );
}

export default Portfolio;
