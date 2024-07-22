function ProjectsForm({ projects, setProjects }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjects({ ...projects, [name]: value });
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
    </div>
  );
}

export default ProjectsForm;
