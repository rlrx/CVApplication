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

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

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
