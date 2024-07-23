import GeneralInfoForm from "./FormComponents/GeneralInfoForm";
import EducationForm from "./FormComponents/EducationForm";
import ExperienceForm from "./FormComponents/ExperienceForm";
import SkillsForm from "./FormComponents/SkillsForm";
import ProjectsForm from "./FormComponents/ProjectsForm";
import "../styles/Form.css";

function Form({
  generalInfo,
  setGeneralInfo,
  education,
  setEducation,
  experience,
  setExperience,
  skills,
  setSkills,
  projects,
  setProjects,
}) {
  return (
    <div className="form-container">
      <div className="form-section">
        <h3>General Information</h3>
        <GeneralInfoForm
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
      </div>
      <div className="form-section">
        <h3>Education</h3>
        <EducationForm education={education} setEducation={setEducation} />
      </div>
      <div className="form-section">
        <h3>Experience</h3>
        <ExperienceForm experience={experience} setExperience={setExperience} />
      </div>
      <div className="form-section">
        <h3>Skills</h3>
        <SkillsForm skills={skills} setSkills={setSkills} />
      </div>
      <div className="form-section">
        <h3>Projects</h3>
        <ProjectsForm projects={projects} setProjects={setProjects} />
      </div>
    </div>
  );
}

export default Form;
