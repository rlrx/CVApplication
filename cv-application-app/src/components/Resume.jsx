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
          {skills.length === 0 ? (
            <p>No skills added</p>
          ) : (
            skills.map((skill, index) => <p key={index}>{skill.skillname}</p>)
          )}
        </div>
        <div className="section projects">
          <h3>Projects</h3>
          {projects.length === 0 ? (
            <p>No projects added</p>
          ) : (
            projects.map((project, index) => (
              <div key={index}>
                <p>
                  <strong>{project.name}</strong>
                </p>
                <p>{project.paragraph}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="main">
        <div className="section education">
          <h3>Education</h3>
          {education.length === 0 ? (
            <p>No education added</p>
          ) : (
            education.map((edu, index) => (
              <div key={index}>
                <p>
                  <strong>{edu.school}</strong>
                </p>
                <p>{edu.degree}</p>
                <p>{edu.major}</p>
                <p>
                  {edu.startdate} - {edu.enddate}
                </p>
              </div>
            ))
          )}
        </div>
        <div className="section experience">
          <h3>Experience</h3>
          {experience.length === 0 ? (
            <p>No experience added</p>
          ) : (
            experience.map((exp, index) => (
              <div key={index}>
                <p>
                  <strong>{exp.company}</strong>
                </p>
                <p>{exp.position}</p>
                <p>{exp.responsibilities}</p>
                <p>
                  {exp.startdate} - {exp.enddate}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Resume;
