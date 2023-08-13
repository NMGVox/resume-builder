import { useState } from 'react';
import Category from './components/category';
import PersonalInfo from './components/personalInfo';
import './App.css'


function App() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const [personalInfo, setPersonalInfo] = useState(
    {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    }
  );

  function showContent(i) {
    if (i === activeIndex) {
      setActiveIndex(-1);
      return;
    }
    setActiveIndex(i);
  }

  function updateFirstName(e) {
    setPersonalInfo(personalInfo => ({...personalInfo, firstName: e.target.value}));
  }

  function updateLastName(e) {
    setPersonalInfo(personalInfo => ({...personalInfo, lastName: e.target.value}));
  }

  function updatePhone(e) {
    setPersonalInfo(personalInfo => ({...personalInfo, phoneNumber: e.target.value}));
  }

  function updateEmail(e) {
    setPersonalInfo(personalInfo => ({...personalInfo, email: e.target.value}));
  }

  let fullName = `${personalInfo.firstName} ${personalInfo.lastName}`;

  return (
    <>
      <div className="input-container">
        <div className="category">
          <h1 className="title">Resume Builder</h1>
        </div>
        <Category categoryName="Personal Info" index={0} isActive={activeIndex === 0} showContent={showContent}>
          {
            activeIndex === 0 && 
            <PersonalInfo updateFirst={updateFirstName} 
             updateLast={updateLastName}
             updatePhone={updatePhone}
             updateEmail={updateEmail}
            /> 
          }
        </Category>
        <Category categoryName="Education" index={1} isActive={activeIndex === 1} showContent={showContent}/>
        <Category categoryName="Work Experience" index={2} isActive={activeIndex === 2} showContent={showContent}/>
        <Category categoryName="Projects" index={3} isActive={activeIndex === 3} showContent={showContent}/>
      </div>
      <div className="resume-display">
        <div className="resume">
          <h1>{fullName}</h1>
          <h1>{personalInfo.phoneNumber}</h1>
          <h1>{personalInfo.email}</h1>
        </div>
      </div>
    </>
  );
}
export default App
