/* eslint-disable react/prop-types */
export default function EducationInput( { id, removeEducation, updateEduInput } ) {
    return(
        <div className="education-form-wrapper">
            <label htmlFor={`schoolName${id}`}>School Name: </label><input onChange={(e) => updateEduInput(e, id, 'schoolName')} type="text" id={`schoolName${id}`} />
            <label htmlFor={`startDate${id}`}> Start Date: </label><input onChange={(e) => updateEduInput(e, id, 'startDate')} type="date" id={`startDate${id}`} />
            <label htmlFor={`endDate${id}`}>Graduation Date: </label><input onChange={(e) => updateEduInput(e, id, 'endDate')} type="date"  id={`endDate${id}`} />
            <label htmlFor={`major${id}`}>Major: </label><input onChange={(e) => updateEduInput(e, id, 'major')} type="text" id={`major${id}`} />
            <label htmlFor={`degree${id}`}>Degree: </label><input onChange={(e) => updateEduInput(e, id, 'degree')} type="text" id={`degree${id}`} />
            <label htmlFor={`gpa${id}`}>GPA: </label><input onChange={(e) => updateEduInput(e, id, 'gpa')} type="number" id={`gpa${id}`} />
            <label htmlFor={`location${id}`}>Location: </label><input onChange={(e) => updateEduInput(e, id, 'location')} type="address" id={`location${id}`} />
            <button onClick={(e) => {removeEducation(e, id)}}>X</button>
        </div>
    )
}