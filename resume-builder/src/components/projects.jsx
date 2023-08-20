function ProjectInput({ id, updateInput, removeProject, achievementList, removeAchievement, updateAchievement, addAchievement}) {
    return(
        <div className="inputWrapper">
            <label htmlFor={`projectName${id}`}>Project Name: </label><input onChange={(e) => updateInput(e, id, 'projectName')} type="text" />
            <label htmlFor={`techStack${id}`}>Tech Stack: </label><input onChange={(e) => updateInput(e, id, 'techStack')} type="text" />
            <label htmlFor={`link${id}`}>Live link: </label><input onChange={(e) => updateInput(e, id, 'link')} type="text" />
            <label>Achievements: </label>
            {achievementList.map(achievement => {
                return (
                    <>
                        <input key={achievement.id} onChange={(e) => updateAchievement(e, id, achievement.id)} value={achievement.text} type="text"/>
                        <button onClick={(e) => removeAchievement(e, id, achievement.id)}>X</button> 
                    </>   
                )
            })}
            <button onClick={(e) => addAchievement(e, id)}>Add Achievement</button>           
            <button onClick={(e) => removeProject(e, id)}>Remove Project</button>
        </div>
    )
}

function ProjectDisplay( { projectName, techStack, projLink, projAchievements } ) { 
    return (
        <div className="project">
            <h2>{projectName}</h2>
            <h2>{techStack}</h2>
            <h2>{projLink}</h2>
            <ul>
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