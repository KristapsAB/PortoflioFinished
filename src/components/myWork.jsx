import React, { useState } from 'react';
import '../styles/mywork.css';
import Nav from '../components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Dashboard from '../images/Dashboard.png'
import Login from '../images/Logins.png'
import Profile from '../images/ProfilePage.png'
function MyWork() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('design1'); // Set the default active tab

  // Function to handle tab change
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="my-work">
      <div className='my-work-95'>
        <div className='my-skills-content'>
          <div className='opacity-container'>
            <h1>WORKS</h1>
          </div>
          <div className='h1-absoloute'>
            <h1>MY <span>PORTFOLIO</span></h1>
          </div>
        </div>

        <div className="tab-navigation">
          <button
            className={activeTab === 'design1' ? 'active' : ''}
            onClick={() => handleTabChange('design1')}
          >
            COPIES
          </button>
          <button
            className={activeTab === 'design2' ? 'active' : ''}
            onClick={() => handleTabChange('design2')}
          >
            LOGOS
          </button>
          <button
            className={activeTab === 'design3' ? 'active' : ''}
            onClick={() => handleTabChange('design3')}
          >
            FRONTEND
          </button>
        </div>

        {/* Content for each tab */}
        {activeTab === 'design1' && (
          <div className="tab-content">
            <div className='first-wrap-work'>
           </div>
          </div>
        )}

        {activeTab === 'design2' && (
          <div className="tab-content">
        <div className='first-wrap-work'>
          
            </div>
          </div>
        )}
        {activeTab === 'design3' && (
          <div className="tab-content">
       <div className='first-wrap-work'>
            <div className='work-designs'>
                <img src={Dashboard} ></img>
            </div>
            <div className='work-designs'>
            <img src={Login} ></img>
            </div>
            <div className='work-designs'>
            <img src={Profile} ></img>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyWork;
