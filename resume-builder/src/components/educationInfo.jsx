/* eslint-disable react/prop-types */
export default function EducationInput( { id, updateSchoolName, updateDate, updateFocus, updateGPA, updateLocation } ) {
    return(
        <div className="education-form-wrapper">
            <label htmlFor={`schoolName${id}`}>School Name: </label><input onChange={(e) => updateSchoolName(e, id)} type="text" id={`schoolName${id}`} />
            <label htmlFor={`startDate${id}`}> Start Date: </label><input onChange={(e) => updateDate(e, id, 0)} type="date" id={`startDate${id}`} />
            <label htmlFor={`endDate${id}`}>Graduation Date: </label><input onChange={(e) => updateDate(e, id, 1)} type="date"  id={`endDate${id}`} />
            <label htmlFor={`major${id}`}>Major: </label><input onChange={(e) => updateFocus(e, id, 0)} type="text" id={`major${id}`} />
            <label htmlFor={`degree${id}`}>Degree: </label><input onChange={(e) => updateFocus(e, id, 1)} type="text" id={`degree${id}`} />
            <label htmlFor={`gpa${id}`}>GPA: </label><input onChange={(e) => updateGPA(e, id)} type="number" id={`gpa${id}`} />
            <label htmlFor={`location${id}`}>Location: </label><input onChange={(e) => updateLocation(e, id)} type="address" id={`location${id}`} />
        </div>
    )
}