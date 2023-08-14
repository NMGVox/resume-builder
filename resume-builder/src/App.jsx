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

  let eduId = educationInfo.length - 1;

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

  function updateSchoolName(e, id) {
    const newData = [...educationInfo];
    newData[id].schoolName = e.target.value;
    setEducationInfo(newData);
  }

  function updateDate(e, id, option) {
    const newData = [...educationInfo];
    if (option === 0) {
      newData[id].startDate = e.target.value;
    } else {
      newData[id].endDate = e.target.value;
    }
    setEducationInfo(newData);
  }

  function updateFocus(e, id, option) {
    const newData = [...educationInfo];
    if (option === 0) {
      newData[id].major = e.target.value;
    } else {
      newData[id].degree = e.target.value;
    }
    setEducationInfo(newData);
  }
  function updateGPA(e, id) {
    const newData = [...educationInfo];
    newData[id].gpa = e.target.value;
    setEducationInfo(newData);
  }
  function updateLocation(e, id) {
    const newData = [...educationInfo];
    newData[id].location = e.target.value;
    setEducationInfo(newData);
  }

  educationInfo.map((education) => {
    console.log(education.schoolName);
  });

  let fullName = `${personalInfo.firstName} ${personalInfo.lastName}`;

  const educationElements = educationInfo.map((education) => {
    console.log(education.id);
    return(
      <EducationInput key={education.id}
      id={education.id}
      updateSchoolName={updateSchoolName}
      updateDate={updateDate}
      updateFocus={updateFocus}
      updateGPA={updateGPA}
      updateLocation={updateLocation}
      />
    );
  });

  console.log(educationElements);

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
