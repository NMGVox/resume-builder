import { useState, useEffect } from 'react';
import Category from './components/category';
import PersonalInfo from './components/personalInfo';
import EducationInput from './components/educationInfo';
import EducationDisplay from './components/educationdisplay';
import { WorkDisplay, WorkInput } from './components/workInput';
import { ProjectDisplay, ProjectInput } from './components/projects';
import { SkillDisplay, SkillInput } from './components/skills';


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
      show: true,
    },
  ]);

  const [workInfo, setWorkInfo] = useState([
    {
      id: 0,
      role: '',
      companyName: '',
      location: '',
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
      link: '',
      achievements: [{
        id: 0,
        text: '',
      },],
    },
  ]);

  const [skills, setSkills] = useState([
    {
      id: 0,
      skillType: '',
      skills: [{
        id:0,
        text:'',
      },],
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
  let projId = projects[projects.length -1].id;
  let skillId = skills[skills.length - 1].id;

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
        vals={education}
        showRemove={educationInfo.length > 1 ? true : false}
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
      location: '',
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
        const updatedAchievements = work.achievements.filter(achievement => achievement.id !== achievementId);
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
        vals={work}
        showRemove={workInfo.length > 1 ? true : false}
      />
    )
  })

  function addProject() {
    const newProject = {
      id: projId+1,
      projectName: '',
      techStack: '',
      link: '',
      achievements: [{
        id: 0,
        text: '',
      },],
    };
    setProjects(prevProjects => ([...prevProjects, newProject]));
  }

  function removeProject(e, id) {
    const newProjects = projects.filter((project) => project.id !== id);
    setProjects(newProjects);
  }

  function updateProjInput(e, id, indexer) {
    const newData = [...projects];
    newData.map((data) => {
      if(data.id === id) {
        data[indexer] = e.target.value;
      }
    });
    setProjects(newData);
  }

  function addProjectAchievement(e, id) {
    setProjects(prevInfo => prevInfo.map((project) => {
      if(project.id === id) {
        const len = project.achievements.length -1;
        const newAchievement = {
          id: project.achievements.length > 0 ? project.achievements[len].id + 1 : 0,
          text: '',
        }
        return {...project, achievements: [...project.achievements, newAchievement]};
      }
      return project;
    }))
  }

  function removeProjectAchievement(e, id, achievementId) {
    setProjects(prevInfo => prevInfo.map((project) => {
      if(project.id === id) {
        const updatedAchievements = project.achievements.filter(achievement => achievement.id !== achievementId);
        return {...project, achievements: updatedAchievements};
      }
      return project;
    }))
  }

  function updateProjectAchievement(e, id, achievementId) {
    setProjects(prevInfo => prevInfo.map((project) => {
      if(project.id === id) {
        const updatedAchievements = project.achievements.map(achievement => {
          if(achievement.id === achievementId) {
            return {...achievement, text: e.target.value};
          }
          return achievement;
        });
        return {...project, achievements: updatedAchievements};
      }
      return project;
    }))
  }

  const projInputElements = projects.map((project) => {
    return(
      <ProjectInput
        key={project.id}
        id={project.id}
        updateInput={updateProjInput}
        achievementList={project.achievements}
        addAchievement={addProjectAchievement}
        removeAchievement={removeProjectAchievement}
        updateAchievement={updateProjectAchievement}
        removeProject={removeProject}
        vals={project}
        showRemove={project.length > 1 ? true : false}
      />
    )
  })

  function addSkillType() {
    const newSkill = {
      id: skillId + 1,
      skills :[{
        id:0,
        text: '',
      },],
    };
    setSkills(prevSkills => ([...prevSkills, newSkill]));
  } 

  function removeSkillType(e, id) {
    const newSkills = skills.filter((skill) => (skill.id !== id));
    setSkills(newSkills);
  }

  function updateSkillType(e, id) {
    const newData = [...skills];
    newData.map((data) => {
      if(data.id === id) {
        data.skillType = e.target.value;
      }
    });
    setSkills(newData);
  }

  function addSkill(e, id) {
    setSkills(prevInfo => prevInfo.map((skillType) => {
      if(skillType.id === id) {
        const len = skillType.skills.length -1;
        const newSkill = {
          id: skillType.skills.length > 0 ? skillType.skills[len].id + 1 : 0,
          text: '',
        }
        return {...skillType, skills: [...skillType.skills, newSkill]};
      }
      return skillType;
    }))
  }

  function removeSkill(e, id, skillId) {
    setSkills(prevInfo => prevInfo.map((skillType) => {
      if(skillType.id === id) {
        const updatedSkills = skillType.skills.filter(skill => skill.id !== skillId)
        return {...skillType, skills: updatedSkills};
      }
      return skillType;
    }))
  }

  function updateSkill(e, id, skillId) {
    setSkills(prevInfo => prevInfo.map((skillType) => {
      if(skillType.id === id) {
        const updateSkill = skillType.skills.map(skill => {
          if(skill.id === skillId) {
            return {...skill, text: e.target.value};
          }
          return skill;
        });
        return {...skillType, skills: updateSkill};
      }
      return skillType;
    }))
  }

  const skillInputElements = skills.map((skill) => {
    return(
      <SkillInput
        key={skill.id}
        id={skill.id}
        updateSkillType={updateSkillType}
        removeSkillType={removeSkillType}
        skillList={skill.skills}
        addSkill={addSkill}
        removeSkill={removeSkill}
        updateSkill={updateSkill}
        vals={skill}
        showRemove={skills.length > 1 ? true : false}
      />
    )
  })

  //Load input from localStorage
  useEffect(() => {
    if(window.localStorage.getItem("personal")) {
      let data = window.localStorage.getItem("personal");
      setPersonalInfo(JSON.parse(data));
    }
    if(window.localStorage.getItem("education")) {
      let data = window.localStorage.getItem("education");
      setEducationInfo(JSON.parse(data));
    }
    if(window.localStorage.getItem("work")) {
      let data = window.localStorage.getItem("work");
      setWorkInfo(JSON.parse(data));
    }
    if(window.localStorage.getItem("projects")) {
      let data = window.localStorage.getItem("projects");
      setProjects(JSON.parse(data));
    }
    if(window.localStorage.getItem("skills")) {
      let data = window.localStorage.getItem("skills");
      setSkills(JSON.parse(data));
    }
  }, [])

  function saveProgress() {
    window.localStorage.setItem("personal", JSON.stringify(personalInfo));
    window.localStorage.setItem("education", JSON.stringify(educationInfo));
    window.localStorage.setItem("work", JSON.stringify(workInfo));
    window.localStorage.setItem("projects", JSON.stringify(projects));
    window.localStorage.setItem("skills", JSON.stringify(skills));
    return;
  }

  let fullName = `${personalInfo.firstName} ${personalInfo.lastName}`;

  return (
    <>
      <div className="input-container">
        <div className="category">
          <h1 className="title">Vox's Resume Builder</h1>
        </div>
        
        <Category categoryName="Personal Info" index={0} isActive={activeIndex === 0} showContent={showContent}>
          {
            activeIndex === 0 && 
            <PersonalInfo updateFirst={updateFirstName} 
             updateLast={updateLastName}
             updatePhone={updatePhone}
             updateEmail={updateEmail}
             vals={personalInfo}
            /> 
          }
        </Category>

        <Category categoryName="Education" index={1} isActive={activeIndex === 1} showContent={showContent}>
          {
            activeIndex === 1 &&
              <>
                {educationElements}
                <button onClick={addEducation} className="add-x">Add Education</button>
              </>
          }
        </Category>
        
        <Category categoryName="Work Experience" index={2} isActive={activeIndex === 2} showContent={showContent}>
          {
            activeIndex === 2 &&
            <>
              {workInputElements}
              <button onClick={addWork} className="add-x">Add Work Experience</button>
            </>
          }
        </Category>
        
        <Category categoryName="Projects" index={3} isActive={activeIndex === 3} showContent={showContent}>
          {
            activeIndex === 3 && 
            <>
              {projInputElements}
              <button className='add-x' onClick={addProject}>Add Project</button>
            </>
          } 
        </Category>

        <Category categoryName="Skills" index={4} isActive={activeIndex === 4} showContent={showContent}>
          {
            activeIndex === 4 && 
            <>
              {skillInputElements}
              <button className='add-x' onClick={addSkillType}>Add Skill Category</button>
            </>
          } 
        </Category>
        <div className="generalButtonContainer">
          <button onClick={() => saveProgress()} className='addAchievement'>Save</button>
        </div>
      </div>
      <div className="resume-display">
        <div className="resume">
          <h2 className='fullName' >{fullName}</h2>
          <div className="personal-group">
            <h4>{personalInfo.phoneNumber}</h4>
            <h4>{personalInfo.email}</h4>
          </div>
          <div className="resumeSection">
            <h1 className='resumeSectionHeader'>Education</h1>
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
          </div>
          <div className="resumeSection">
          <h1 className='resumeSectionHeader'>Work Experience</h1>
            {
              workInfo.map((work) => {
                return (
                  <WorkDisplay
                    key={work.id}
                    companyName={work.companyName}
                    role={work.role}
                    location={work.location}
                    achievements={work.achievements}
                    startDate={work.startDate}
                    endDate={work.endDate}
                  />
                );
              })
            }
          </div>
          <div className="resumeSection">
          <h1 className='resumeSectionHeader'>Projects</h1>
            {
              projects.map((project) => {
                return(
                  <ProjectDisplay
                    key={project.id}
                    projectName={project.projectName}
                    techStack={project.techStack}
                    projLink={project.link}
                    projAchievements={project.achievements}
                  />
                )
              })
            }
          </div>
          <div className="resumeSection">
          <h1 className='resumeSectionHeader'>Skills</h1>
            {
              skills.map((skill) => {
                return(
                  <SkillDisplay
                    key={skill.id}
                    skillType={skill.skillType}
                    skills={skill.skills}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App
