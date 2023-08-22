export default function EducationDisplay( {schoolName, startDate, endDate, major, degree, gpa, location} ) {
    return(
        <div className="sectionChildWrapper">
            <div className="resumePairMain">
                <h2 className="mainTitle">{schoolName}</h2>
                <h2 className="mainTitleRightAlign">{location}</h2>
            </div>
            <div className="resumeSecondaryPair">
                <span className="educationDetails">
                    <h2>{degree}{major && `, ${major}`}{gpa && ` | ${gpa}`}</h2>
                </span>
                <span className="dateWrapper">
                    <h2>{startDate} - {endDate}</h2>
                </span>
            </div>
        </div>
    )
}