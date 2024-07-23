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
      <input
        type="text"
        name="name"
        placeholder="Project Name"
        value={projects.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="paragraph"
        placeholder="Project Paragraph"
        value={projects.paragraph}
        onChange={handleChange}
      />
      <button onClick={handleAddProject}>Add Project</button>
    </div>
  );
}

export default ProjectsForm;
