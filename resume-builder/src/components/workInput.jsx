function WorkInput( { id, showContent, updateInput, updateAchievements, addAchievement, achievementList, removeAchievement, removeWork } ) {
    return(
        <div className="work-input-container">
            <label htmlFor={`role${id}`}>Role</label><input onChange={(e)=> updateInput(e, id, 'role')} type="text" id={`role${id}`} />
            <label htmlFor={`company${id}`}>Company</label><input onChange={(e)=> updateInput(e, id, 'companyName')} type="text" id={`company${id}`} />
            <label htmlFor={`summary${id}`}>Summary</label><textarea onChange={(e)=> updateInput(e, id, 'summary')} id={`summary${id}`} cols="30" rows="10"></textarea>
            <label htmlFor={`achievments${id}`}>Achievements <button onClick={(e) => addAchievement(e, id)}>+</button></label>
            {achievementList.map(achievement => {
                return (
                    <>
                        <input key={achievement.id} placeholder={achievement.id} onChange={(e) => updateAchievements(e, id, achievement.id)} type="text" id={`achievments${id}`} />
                        <button onClick={(e) => removeAchievement(e, id, achievement.id)}>Remove</button> 
                    </>   
                )
            })}
            <label htmlFor={`startDate${id}`}>Start Date</label><input onChange={(e)=> updateInput(e, id, 'startDate')} type="date" id={`startDate${id}`} />
            <label htmlFor={`endDate${id}`}>End Date</label><input onChange={(e)=> updateInput(e, id, 'endDate')} type="date" id={`endDate${id}`} />
            <button onClick={(e) => removeWork(e, id)}>Remove This Experience</button>
        </div>
    )
}

function WorkDisplay ( {role, companyName, summary, achievements, startDate, endDate} ) {
    return(
        <div className="work-wrapper">
            <h2>{role}</h2>
            <h2>{companyName}</h2>
            <h2>{summary}</h2>
            <ul>
            {achievements.map(achievement => {
               return <li key={achievement.id}>{achievement.text}</li>
            })}
            </ul>
            <h2>{startDate}</h2>
            <h2>{endDate}</h2>
        </div>
    )
}

export { WorkInput, WorkDisplay }