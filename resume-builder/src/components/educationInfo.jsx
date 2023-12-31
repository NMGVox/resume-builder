import { useState } from "react";
import { ExampleHeaderContainer } from "./exampleHeaderContainer";

/* eslint-disable react/prop-types */
export default function EducationInput( { showRemove, id, removeEducation, updateEduInput, vals } ) {
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
                header={vals.schoolName ? vals.schoolName : `Education ${id + 1}`}
            />
            {visible && <div className="inputWrapper">
                <label htmlFor={`schoolName${id}`}>School Name </label><input onChange={(e) => updateEduInput(e, id, 'schoolName')} value={vals.schoolName} type="text" id={`schoolName${id}`} />
                <label htmlFor={`startDate${id}`}> Start Date </label><input onChange={(e) => updateEduInput(e, id, 'startDate')} value={vals.startDate} type="text" id={`startDate${id}`} />
                <label htmlFor={`endDate${id}`}>Graduation Date </label><input onChange={(e) => updateEduInput(e, id, 'endDate')} value={vals.endDate} type="text"  id={`endDate${id}`} />
                <label htmlFor={`major${id}`}>Major </label><input onChange={(e) => updateEduInput(e, id, 'major')} value={vals.major} type="text" id={`major${id}`} />
                <label htmlFor={`degree${id}`}>Degree </label><input onChange={(e) => updateEduInput(e, id, 'degree')} value={vals.degree} type="text" id={`degree${id}`} />
                <label htmlFor={`gpa${id}`}>GPA </label><input onChange={(e) => updateEduInput(e, id, 'gpa')} value={vals.gpa} type="number" id={`gpa${id}`} />
                <label htmlFor={`location${id}`}>Location </label><input onChange={(e) => updateEduInput(e, id, 'location')} value={vals.location} type="address" id={`location${id}`} />
                {showRemove && <div className="generalButtoncontainer"><button onClick={(e) => {removeEducation(e, id)}}>Remove Education</button></div>}
            </div>}
        </div>
    )
}