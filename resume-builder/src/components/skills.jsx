function SkillInput( { id, updateSkillType, removeSkillType, updateSkill, removeSkill, addSkill, skillList } ) {
    return (
        <div className="inputWrapper">
            <label htmlFor="">Skill Type</label><input type="text"></input>
            <label htmlFor="">Skills</label>
            {
                skillList.map(skill => {
                    return(
                        <>
                            <input key={skill.id} type="text" onChange={(e) => updateSkill(e, id, skill.id)} />
                            <button onClick={(e) => removeSkill(e, id, skill.id)}>X</button>
                        </>
                    );
                })
            }
            <button onClick={(e) => addSkill(e, id)}>Add Skill to type</button>
        </div>
    )
}

export {SkillInput}