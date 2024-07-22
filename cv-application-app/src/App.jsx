import { useState } from "react";
import Form from "./components/Form";
import Resume from "./components/Resume";
import "./styles/App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    paragraph: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    major: "",
    startdate: "",
    enddate: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    startdate: "",
    enddate: "",
  });

  const [skills, setSkills] = useState({
    skillname: "",
  });

  const [projects, setProjects] = useState({
    name: "",
    paragraph: "",
  });

  return (
    <div className="app">
      <div className="form-container">
        <Form
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
          education={education}
          setEducation={setEducation}
          experience={experience}
          setExperience={setExperience}
          skills={skills}
          setSkills={setSkills}
          projects={projects}
          setProjects={setProjects}
        />
      </div>
      <div className="resume-container">
        <Resume
          generalInfo={generalInfo}
          education={education}
          experience={experience}
          skills={skills}
          projects={projects}
        />
      </div>
    </div>
  );
}

export default App;
