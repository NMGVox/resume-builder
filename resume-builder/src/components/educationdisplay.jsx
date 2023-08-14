export default function EducationDisplay( {schoolName, startDate, endDate, major, degree, gpa, location} ) {
    return(
        <>
            <h2>{schoolName}</h2>
            <h2>{startDate}</h2>
            <h2>{endDate}</h2>
            <h2>{major}</h2>
            <h2>{degree}</h2>
            <h2>{gpa}</h2>
            <h2>{location}</h2>
        </>
    )
}