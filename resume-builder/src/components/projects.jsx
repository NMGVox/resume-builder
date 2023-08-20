function ProjectInput({ id, updateInput, removeProject, updateAchievements, achievementList, removeAchievement }) {
    return(
        <div className="inputWrapper">
            <label htmlFor={`projectName${id}`}>Project Name: </label><input type="text" />
            <label htmlFor={`techStack${id}`}>Tech Stack: </label><input type="text" />
            <label htmlFor={`link${id}`}>Live link: </label><input type="text" />
            <label>Achievements: </label>
            {achievementList.map(achievement => {
                return (
                    <>
                        <input key={achievement.id} onChange={(e) => updateAchievements(e, id, achievement.id)} type="text"/>
                        <button onClick={(e) => removeAchievement(e, id, achievement.id)}>Remove</button> 
                    </>   
                )
            })}
            <button onClick={removeProject}></button>
        </div>
    )
}

export { ProjectInput }