import { useState } from "react";
import { ExampleHeaderContainer } from "./exampleHeaderContainer";


function ProjectInput({ id, showRemove, updateInput, removeProject, achievementList, removeAchievement, updateAchievement, addAchievement, vals}) {
    const [visible, setVisible] = useState(false);

    function showContent() {
        setVisible(!visible);
    }
    
    return(
        <div className="example">
            <ExampleHeaderContainer
                showContent={showContent}
                visible={visible}
                id={id}
                header={vals.projectName ? vals.projectName : `Project ${id + 1}`}
            />
            {visible &&<div className="inputWrapper">
                <label htmlFor={`projectName${id}`}>Project Name: </label><input onChange={(e) => updateInput(e, id, 'projectName')} value={vals.projectName} type="text" />
                <label htmlFor={`techStack${id}`}>Tech Stack: </label><input onChange={(e) => updateInput(e, id, 'techStack')} value={vals.techStack} type="text" />
                <label htmlFor={`link${id}`}>Live link: </label><input onChange={(e) => updateInput(e, id, 'link')} value={vals.link} type="text" />
                <label>Achievements: </label>
                {achievementList.map(achievement => {
                    return (
                        <>
                            <div className="achieveInputWrap">
                                <input key={achievement.id} onChange={(e) => updateAchievement(e, id, achievement.id)} value={achievement.text} type="text"/>
                                <button className="removeAchieve" onClick={(e) => removeAchievement(e, id, achievement.id)}>X</button>
                            </div>
                        </>
                    )
                })}
                <div className="generalButtoncontainer"><button className="addAchievement" onClick={(e) => addAchievement(e, id)}>Add Achievement</button></div>
                {showRemove && <div className="generalButtoncontainer"><button onClick={(e) => removeProject(e, id)}>Remove Project</button></div>}
            </div>}
        </div>
    )
}

function ProjectDisplay( { projectName, techStack, projLink, projAchievements } ) { 
    return (
        <div className="sectionChildWrapper">
            <div className="resumePairMain">
                <h2 className="projTitle"><a href={projLink}>{projectName}</a> {techStack && ` | ${techStack}`}</h2>
            </div>
            <ul className="achievementList">
                {
                    projAchievements.map((achievement) => {
                        return <li key={achievement.id}>{achievement.text}</li>
                    })
                }
            </ul>
        </div>
    )
}

//hide removal button when there is only one project

export { ProjectInput, ProjectDisplay }