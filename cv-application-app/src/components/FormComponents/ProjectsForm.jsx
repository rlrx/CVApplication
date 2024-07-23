import { useState } from "react";

function ProjectsForm({ projects, setProjects }) {
  const [newProject, setNewProject] = useState({
    name: "",
    paragraph: "",
  });

  const handleAddProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({
      name: "",
      paragraph: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="projects-form">
      <div className="input-group">
        <label htmlFor="name">Project Name</label>
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={newProject.name}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="paragraph">Project Paragraph</label>
        <input
          type="text"
          name="paragraph"
          placeholder="Project Paragraph"
          value={newProject.paragraph}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleAddProject}>Add Project</button>
    </div>
  );
}

export default ProjectsForm;
