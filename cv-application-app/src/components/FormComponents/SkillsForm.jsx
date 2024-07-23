import { useState } from "react";
function SkillsForm({ skills, setSkills }) {
  const [newSkill, setNewSkill] = useState({
    skillname: "",
  });

  const handleAddSkill = () => {
    setSkills([...skills, newSkill]);
    setNewSkill({
      skillname: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSkill((prev) => ({ ...prev, [name]: value }));
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
      <button onClick={handleAddSkill}>Add Skill</button>
    </div>
  );
}

export default SkillsForm;
