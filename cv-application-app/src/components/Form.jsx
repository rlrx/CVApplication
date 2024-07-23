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
    <div>
      <GeneralInfoForm
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      ></GeneralInfoForm>
      <EducationForm
        education={education}
        setEducation={setEducation}
      ></EducationForm>
      <ExperienceForm
        experience={experience}
        setExperience={setExperience}
      ></ExperienceForm>
      <SkillsForm skills={skills} setSkills={setSkills}></SkillsForm>
      <ProjectsForm
        projects={projects}
        setProjects={setProjects}
      ></ProjectsForm>
    </div>
  );
}
export default Form;
