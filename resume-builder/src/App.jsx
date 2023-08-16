import { useState } from 'react';
import Category from './components/category';
import PersonalInfo from './components/personalInfo';
import EducationInput from './components/educationInfo';
import EducationDisplay from './components/educationdisplay';
import { WorkDisplay, WorkInput } from './components/workInput';
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

  const [workInfo, setWorkInfo] = useState([
    {
      id: 0,
      role: '',
      companyName: '',
      summary: '',
      achievements: [{
        id: 0,
        text: '',
      },],
      startDate: '',
      endDate: '',
    },
  ]);

  const [projects, setProjects] = useState([
    {
      id: 0,
      projectName: '',
      techStack: '',
      summary: '',
      achievements: '',
    },
  ]);

  const [skills, setSkills] = useState([
    {
      id: 0,
      skillType: '',
      skills: [],
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
  let workId = workInfo[workInfo.length -1].id;

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
      };
    setEducationInfo((prevInfo) => ([...prevInfo, newEducation]));
  }

  function removeEducation(e, id) {
    const newEducation = educationInfo.filter((education) => education.id !== id);
    setEducationInfo(newEducation);
  } 

  const educationElements = educationInfo.map((education) => {
    return(
      <EducationInput key={education.id}
      id={education.id}
      removeEducation={removeEducation}
      updateEduInput={updateEduInput}
      />
    );
  });

  function updateWork(e, id, indexer) {
    const newData = [...workInfo];
    newData.map((data) => {
      if(data.id === id) {
        data[indexer] = e.target.value;
      }
    });
    setWorkInfo(newData);
  }

  function updateWorkAchievements(e, id, achievementId) {
    setWorkInfo(prevInfo => prevInfo.map((work) => {
      if(work.id === id) {
        const updatedAchievements = work.achievements.map(achievement => {
          if(achievement.id === achievementId) {
            return {...achievement, text: e.target.value};
          }
          return achievement;
        });
        return {...work, achievements: updatedAchievements};
      }
      return work;
    }))
  }

  function addWorkAchievement(e, id) {
    setWorkInfo(prevInfo => prevInfo.map((work) => {
      if(work.id === id) {
        const len = work.achievements.length -1;
        const newAchievement = {
          id: work.achievements.length > 0 ? work.achievements[len].id + 1 : 0,
          text: '',
        }
        return {...work, achievements: [...work.achievements, newAchievement]};
      }
      return work;
    }))
  }

  function addWork() {
    const newWork = {
      id: workId + 1,
      role: '',
      companyName: '',
      summary: '',
      achievements: [{
        id: 0,
        text: '',
      },],
      startDate: '',
      endDate: '',
    };
    setWorkInfo(prevInfo => ([...prevInfo, newWork]));
  }

  function removeWork(e, id) {
    const newWork = workInfo.filter((work) => work.id !== id);
    setWorkInfo(newWork);
  } 

  function removeWorkAchievement(e, id, achievementId) {
    setWorkInfo(prevInfo => prevInfo.map((work) => {
      if(work.id === id) {
        const updatedAchievements = work.achievements.filter(achievement => {
          if(achievement.id !== achievementId) {
            return {...achievement, text: e.target.value};
          }
        });
        return {...work, achievements: updatedAchievements};
      }
      return work;
    }))
  }

  const workInputElements = workInfo.map((work) => {
    return(
      <WorkInput
        key={work.id}
        id={work.id}
        updateInput={updateWork}
        updateAchievements = {updateWorkAchievements}
        addAchievement = {addWorkAchievement}
        achievementList = {work.achievements}
        removeAchievement={removeWorkAchievement}
        removeWork={removeWork}
      />
    )
  })

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

        <Category categoryName="Education" index={1} isActive={activeIndex === 1} showContent={showContent}>
          {
            activeIndex === 1 &&
              <>
                <button onClick={addEducation} className="add-x">Add Education</button>
                {educationElements}
              </>
          }
        </Category>
        
        <Category categoryName="Work Experience" index={2} isActive={activeIndex === 2} showContent={showContent}>
          {
            activeIndex === 2 &&
            <>
              <button onClick={addWork} className="add-x">Add Work Experience</button>
              {workInputElements}
            </>
          }
        </Category>
        
        <Category categoryName="Projects" index={3} isActive={activeIndex === 3} showContent={showContent}/>
      </div>
      <div className="resume-display">
        <div className="resume">
          <h1>{fullName}</h1>
          <h1>{personalInfo.phoneNumber}</h1>
          <h1>{personalInfo.email}</h1>
          {
            educationInfo.map((education) => {
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
              );
            })
          }
          {
            workInfo.map((work) => {
              return (
                <WorkDisplay
                  key={work.id}
                  companyName={work.companyName}
                  role={work.role}
                  summary={work.summary}
                  achievements={work.achievements}
                  startDate={work.startDate}
                  endDate={work.endDate}
                />
              );
            })
          }
        </div>
      </div>
    </>
  );
}
export default App
