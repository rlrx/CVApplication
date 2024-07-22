function SkillsForm({ skills, setSkills }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkills({ ...skills, [name]: value });
  };
  return (
    <div className="skills-form">
      <input
        type="text"
        name="skillname"
        placeholder="Skill Name"
        value={skills.skillname}
        onChange={handleChange}
      />
    </div>
  );
}

export default SkillsForm;
