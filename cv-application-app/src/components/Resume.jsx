import "../styles/Resume.css";
function Resume({ generalInfo, education, experience, skills, projects }) {
  return (
    <div className="resume">
      <h2>{generalInfo.name}</h2>
      <div className="sidebar">
        <div className="section general-info">
          <h3>Contact</h3>
          <p>{generalInfo.email}</p>
          <p>{generalInfo.phone}</p>
        </div>
        <div className="section skills">
          <h3>Skills</h3>
          {skills.skillname && <p>{skills.skillname}</p>}
        </div>
        <div className="section projects">
          <h3>Projects</h3>
          {projects.name && <p>{projects.name}</p>}
          {projects.paragraph && <p>{projects.paragraph}</p>}
        </div>
      </div>
      <div className="main">
        <div className="section education">
          <h3>Education</h3>
          {education.school && <p>{education.school}</p>}
          {education.degree && <p>{education.degree}</p>}
          {education.major && <p>{education.major}</p>}
          {education.startdate && education.enddate && (
            <p>
              {education.startdate} - {education.enddate}
            </p>
          )}
        </div>
        <div className="section experience">
          <h3>Experience</h3>
          {experience.company && <p>{experience.company}</p>}
          {experience.position && <p>{experience.position}</p>}
          {experience.responsibilities && <p>{experience.responsibilities}</p>}
          {experience.startdate && experience.enddate && (
            <p>
              {experience.startdate} - {experience.enddate}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resume;
