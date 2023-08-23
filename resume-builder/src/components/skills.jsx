function SkillInput( { id, updateSkillType, removeSkillType, updateSkill, removeSkill, addSkill, skillList, vals } ) {
    return (
        <div className="inputWrapper">
            <label htmlFor="">Skill Type</label><input onChange={(e) => updateSkillType(e, id)} value={vals.skillType} type="text"></input>
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
            <div className="skillLine">
                <h2>{skillType && `${skillType}:  `}</h2>
                {
                    skills.map((skill) => {
                        return <p className="skill" key={skill.id}>{skill.id !== 0 && ', '}{skill.text && `${skill.text}`}</p>
                    })
                }
            </div>
        </div>
    )
}

export { SkillInput, SkillDisplay }