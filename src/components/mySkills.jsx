import React, { useRef } from 'react';
import '../styles/skills.css';
import Nav from '../components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faHtml5, faDownload } from '@fortawesome/free-solid-svg-icons';
import htmlImage from '../images/html.png';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

function Skills() {
  const realAboutMeRef = useRef(null);

  return (
    <section className='my-skill'>
      <div className='my-skills'>
        <div className='about-content'>
        
          <div className='my-skills-content'>
            <div className='opacity-container'>
              <h1>RESUME</h1>
            </div>
            <div className='h1-absoloute'>
              <h1>ABOUT <span>ME</span></h1>
            </div>
          </div>
          <div className='small-personal'>
            <div className='personal-infos'>
              <h1>PERSONAL INFO</h1>
              <span className="gray-text">First Name: <span className='white-text'>Kristaps</span> </span>
              <span className="gray-text">Age: <span className='white-text'>19</span> </span>
              <span className="gray-text">Phone: <span className='white-text'>+37129133997</span></span>
              <span className="gray-text">Discord: <span className='white-text'>Choices91</span></span>
              <a href="/KristapsAbelitisCV-5-1.pdf" download>
                <button>
                  DOWNLOAD CV <FontAwesomeIcon icon={faDownload} size='2x' color="#A599E9"/>
                </button>
              </a>
            </div>
            <div className='personal-infos-2'>
              <span className="gray-text" >Last Name: <span className='white-text'>Abelitis</span> </span>
              <span className="gray-text">Nationality: <span className='white-text'>Latvian</span> </span>
              <span className="gray-text">Email: <span className='white-text'>ipa21.k.abelitis@vtdt.edu.lv</span></span>
              <span className="gray-text">Skype: <span className='white-text'>kristaps.abelitis</span></span>
            </div>
            <div className='year-expierience'>
              <div className='small-info'>
                <h1>3<sup>+</sup></h1>
                <p>YEARS OF</p>
                <span> EXPERIENCE</span>
              </div>
              <div className='small-info'>
                <h1>8<sup>+</sup></h1>
                <p>PROJECTS</p>
                <span>COMPLETED</span>
              </div>
              <div className='small-info'>
                <h1>6<sup>+</sup></h1>
                <p>DIFFERENT</p>
                <span> LANGUAGES</span>
              </div>
              <div className='small-info'>
                <h1>3<sup>+</sup></h1>
                <p>HAPPY</p>
                <span>FRIENDS</span>
              </div>
            </div>
          </div>       
        </div>
        <div className='my-skills-h1'>
          <h1>MY SKILLS</h1>
        </div>
        <div className='my-journey'>
          <div className='my-skills-displayed'>
            <div className='sector-wrapper'>
              <div className="circle percentage-90">
                <span>90%</span>
                <div className="percentage-bar"></div>
              </div>
              <div className='text-holder'>HTML</div>
            </div>
            <div className='sector-wrapper'>
              <div className="circle percentage-85">
                <span>85%</span>
                <div className="percentage-bar"></div>
              </div>
              <div className='text-holder'>CSS</div>
            </div>
            <div className='sector-wrapper'>
              <div className="circle percentage-50">
                <span>50%</span>
                <div className="percentage-bar"></div>
              </div>
              <div className='text-holder'>TAILWIND</div>
            </div>
            <div className='sector-wrapper'>
              <div className="circle percentage-81">
                <span>81%</span>
                <div className="percentage-bar"></div>
              </div>
              <div className='text-holder'>REACT</div>
            </div>
            <div className='sector-wrapper'>
              <div className="circle percentage-65">
                <span>65%</span>
                <div className="percentage-bar"></div>
              </div>
              <div className='text-holder'>PHP</div>
            </div>
            <div className='sector-wrapper'>
              <div className="circle percentage-65">
                <span>65%</span>
                <div className="percentage-bar"></div>
              </div>
              <div className='text-holder'>REACT NATIVE</div>
            </div>
            <div className='sector-wrapper'>
              <div className="circle percentage-52">
                <span>52%</span>
                <div className="percentage-bar"></div>
              </div>
              <div className='text-holder'>JAVASCRIPT</div>
            </div>
            <div className='sector-wrapper'>
              <div className="circle percentage-88">
                <span>88%</span>
                <div className="percentage-bar"></div>
              </div>
              <div className='text-holder'>FIGMA</div>
            </div>
          </div>
        </div>
        <div ref={realAboutMeRef} className='real-about-me fade-in-up'>
          <div className='my-skills-h1'>
            <h1>MY EXPERIENCE & EDUCATION</h1>
          </div>
          <div className='my-journey'>
            <div className='my-journey-container'>
            <Timeline position="alternate">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>2021 Started Learning HTML & CSS</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>2021 Learned PHP Basics</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>2022 Started working with framework React</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>2022 Started Backend Development with PHP</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>2022 Worked with tailwind as CSS Framework</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>2023 Learned More About Databases, mainly mySQL</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                  </TimelineSeparator>
                  <TimelineContent>2023 Deployed First Full-Stack Application</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>2024 Completed First React Native Project</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Current Date Creating Portfolio</TimelineContent>
                </TimelineItem>
              </Timeline>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  </section>
);
}

export default Skills;

