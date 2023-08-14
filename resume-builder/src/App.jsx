import { useState } from 'react';
import Category from './components/category';
import PersonalInfo from './components/personalInfo';
import EducationInput from './components/educationInfo';
import EducationDisplay from './components/educationdisplay';
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
  
  const [educationInfo, setEducationInfo] = useState([
    {
      id: 0,
      schoolName: '',
      startDate: '',
      endDate: '',
      location: '',
      gpa: '',
      degree: '',
      major: '',
    },
  ]);

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

  function updateEduInput(e, id, indexer) {
    const newData = [...educationInfo];
    newData.map((data) => {
      if(data.id === id) {
        data[indexer] = e.target.value;
      }
    });
    setEducationInfo(newData);
  }

  let eduId = educationInfo[educationInfo.length -1].id;

  function addEducation() {
    const newEducation = 
      {
        id: eduId + 1,
        schoolName: '',
        startDate: '',
        endDate: '',
        location: '',
        gpa: '',
        degree: '',
        major: '',
      }
    setEducationInfo((prevInfo) => ([...prevInfo, newEducation]))
  }

  function removeEducation(e, id) {
    const newEducation = educationInfo.filter((education) => education.id !== id);
    setEducationInfo(newEducation);
  } 

  let fullName = `${personalInfo.firstName} ${personalInfo.lastName}`;

  const educationElements = educationInfo.map((education) => {
    return(
      <EducationInput key={education.id}
      id={education.id}
      removeEducation={removeEducation}
      updateEduInput={updateEduInput}
      />
    );
  });


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

        <Category categoryName="Education" index={1} isActive={activeIndex === 1} showContent={showContent}>
          {
            activeIndex === 1 &&
              <>
                <button onClick={addEducation} className="add-x">Add Education</button>
                {educationElements}
              </>
          }
        </Category>
        
        <Category categoryName="Work Experience" index={2} isActive={activeIndex === 2} showContent={showContent}/>
        
        <Category categoryName="Projects" index={3} isActive={activeIndex === 3} showContent={showContent}/>
      </div>
      <div className="resume-display">
        <div className="resume">
          <h1>{fullName}</h1>
          <h1>{personalInfo.phoneNumber}</h1>
          <h1>{personalInfo.email}</h1>
          {educationInfo.map((education) => {
            return(
              <EducationDisplay
                key={education.id}
                schoolName={education.schoolName}
                startDate={education.startDate}
                endDate={education.endDate}
                major={education.major}
                degree={education.degree}
                gpa={education.gpa}
                location={education.location}
              />
            )
          })}
        </div>
      </div>
    </>
  );
}
export default App
