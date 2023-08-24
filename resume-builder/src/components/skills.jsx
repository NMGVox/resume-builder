import { useState } from "react";
import { ExampleHeaderContainer } from "./exampleHeaderContainer";

function SkillInput( { id, showRemove, updateSkillType, removeSkillType, updateSkill, removeSkill, addSkill, skillList, vals } ) {
    const [visible, setVisible] = useState(false);

    function showContent() {
        setVisible(!visible);
    }

    return (
        <div className="example">
            <ExampleHeaderContainer
                showContent={showContent}
                visible={visible}
                id={id}
                header={vals.skillType ? vals.skillType : `Skill ${id + 1}`}
            />
            {visible && <div className="inputWrapper">
                <label htmlFor="">Skill Type</label><input onChange={(e) => updateSkillType(e, id)} value={vals.skillType} type="text"></input>
                <label htmlFor="">Skills</label>
                {
                    skillList.map(skill => {
                        return(
                            <>
                                <div className="achieveInputWrap">
                                    <input key={skill.id} value={skill.text} type="text" onChange={(e) => updateSkill(e, id, skill.id)} />
                                    <button className="removeAchieve" onClick={(e) => removeSkill(e, id, skill.id)}>X</button>
                                </div>
                            </>
                        );
                    })
                }
                <div className="generalButtoncontainer"><button className="addAchievement" onClick={(e) => addSkill(e, id)}>Add Skill to type</button></div>
                {showRemove && <div className="generalButtoncontainer"><button onClick={(e) => removeSkillType(e, id)}>Remove Skill Category</button></div>}
            </div>}
        </div>
    )
}

function SkillDisplay({ skillType, skills }) {
    return(
        <div className="sectionChildWrapper">
            <div className="skillLine">
                {skillType && <h2>{skillType}</h2>}
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