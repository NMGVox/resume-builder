function ProjectInput({ id, updateInput, removeProject, achievementList, removeAchievement, updateAchievement, addAchievement}) {
    return(
        <div className="inputWrapper">
            <label htmlFor={`projectName${id}`}>Project Name: </label><input type="text" />
            <label htmlFor={`techStack${id}`}>Tech Stack: </label><input type="text" />
            <label htmlFor={`link${id}`}>Live link: </label><input type="text" />
            <label>Achievements: </label>
            {achievementList.map(achievement => {
                return (
                    <>
                        <input key={achievement.id} onChange={(e) => updateAchievement(e, id, achievement.id)} type="text"/>
                        <button onClick={(e) => removeAchievement(e, id, achievement.id)}>X</button> 
                    </>   
                )
            })}
            <button onClick={(e) => addAchievement(e, id)}>Add Achievement</button>           
            <button onClick={(e) => removeProject(e, id)}>Remove Project</button>
        </div>
    )
}

//hide removal button when there is only one project

export { ProjectInput }