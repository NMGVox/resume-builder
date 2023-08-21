/* eslint-disable react/prop-types */
export default function EducationInput( { id, removeEducation, updateEduInput, vals } ) {
    return(
        <div className="inputWrapper">
            <label htmlFor={`schoolName${id}`}>School Name: </label><input onChange={(e) => updateEduInput(e, id, 'schoolName')} value={vals.schoolName} type="text" id={`schoolName${id}`} />
            <label htmlFor={`startDate${id}`}> Start Date: </label><input onChange={(e) => updateEduInput(e, id, 'startDate')} value={vals.startDate} type="date" id={`startDate${id}`} />
            <label htmlFor={`endDate${id}`}>Graduation Date: </label><input onChange={(e) => updateEduInput(e, id, 'endDate')} value={vals.endDate} type="date"  id={`endDate${id}`} />
            <label htmlFor={`major${id}`}>Major: </label><input onChange={(e) => updateEduInput(e, id, 'major')} value={vals.major} type="text" id={`major${id}`} />
            <label htmlFor={`degree${id}`}>Degree: </label><input onChange={(e) => updateEduInput(e, id, 'degree')} value={vals.degree} type="text" id={`degree${id}`} />
            <label htmlFor={`gpa${id}`}>GPA: </label><input onChange={(e) => updateEduInput(e, id, 'gpa')} value={vals.gpa} type="number" id={`gpa${id}`} />
            <label htmlFor={`location${id}`}>Location: </label><input onChange={(e) => updateEduInput(e, id, 'location')} value={vals.location} type="address" id={`location${id}`} />
            <button onClick={(e) => {removeEducation(e, id)}}>X</button>
        </div>
    )
}