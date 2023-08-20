function SkillInput( { id, updateSkillType, removeSkillType, updateSkill, removeSkill, addSkill, skillList } ) {
    return (
        <div className="inputWrapper">
            <label htmlFor="">Skill Type</label><input type="text"></input>
            <label htmlFor="">Skills</label>     
            {
                skillList.map(skill => {
                    return(
                        <>
                            <input key={skill.id} value={skill.text} type="text" onChange={(e) => updateSkill(e, id, skill.id)} />
                            <button onClick={(e) => removeSkill(e, id, skill.id)}>X</button>
                        </>
                    );
                })
            }
            <button onClick={(e) => addSkill(e, id)}>Add Skill to type</button>
        </div>
    )
}

function SkillDisplay({ skillType, skills }) {
    return(
        <div className="skillWrapper">
            <h2>{skillType}</h2>
            {
                skills.map((skill) => {
                    return <li key={skill.id}>{skill.text}</li>
                })
            }
        </div>
    )
}

export { SkillInput, SkillDisplay }