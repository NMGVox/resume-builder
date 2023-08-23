function WorkInput( { id, showContent, updateInput, updateAchievements, addAchievement, achievementList, removeAchievement, removeWork, vals } ) {
    return(
        <div className="inputWrapper">
            <label htmlFor={`role${id}`}>Role</label><input onChange={(e)=> updateInput(e, id, 'role')} value={vals.role} type="text" id={`role${id}`} />
            <label htmlFor={`company${id}`}>Company</label><input onChange={(e)=> updateInput(e, id, 'companyName')} value={vals.companyName} type="text" id={`company${id}`} />
            <label htmlFor={`location${id}`}>Location</label><input type="text" onChange={(e)=> updateInput(e, id, 'location')} id={`location${id}`} value={vals.location}></input>
            <div className="achieveInputWrap"><label htmlFor={`achievments${id}`}>Achievements </label></div>
            {achievementList.map(achievement => {
                return (
                    <>
                        <div className="achieveInputWrap">
                            <input key={achievement.id} value={achievement.text} onChange={(e) => updateAchievements(e, id, achievement.id)} type="text" id={`achievments${id}`} />
                            <button onClick={(e) => removeAchievement(e, id, achievement.id)}>x</button>
                        </div>
                    </>   
                )
            })}
            <button className="generalButtoncontainer" onClick={(e) => addAchievement(e, id)}>Add Achievement</button>
            <label htmlFor={`startDate${id}`}>Start Date</label><input onChange={(e)=> updateInput(e, id, 'startDate')} value={vals.startDate} type="text" id={`startDate${id}`} />
            <label htmlFor={`endDate${id}`}>End Date</label><input onChange={(e)=> updateInput(e, id, 'endDate')} value={vals.endDate} type="text" id={`endDate${id}`} />
            <div className="generalButtoncontainer"><button onClick={(e) => removeWork(e, id)}>Remove This Experience</button></div>
            
        </div>
    )
}

function WorkDisplay ( {role, companyName, location, achievements, startDate, endDate} ) {
    return(
        <div className="sectionChildWrapper">
            <div className="resumePairMain">
                <h2 className="mainTitle">{role}</h2>
                <span className="dateWrapper">
                        <h2>{startDate} - {endDate}</h2>
                </span>
            </div>
            <div className="resumeSecondaryPair">
                <h2 className="secondaryTextLeft">{companyName}</h2>
                <h2 className="secondaryTextRight">{location}</h2>
            </div>
            <ul className="achievementList">
                {achievements.map(achievement => {
                return <li key={achievement.id}>{achievement.text}</li>
                })}
            </ul>
        </div>
    )
}

export { WorkInput, WorkDisplay }