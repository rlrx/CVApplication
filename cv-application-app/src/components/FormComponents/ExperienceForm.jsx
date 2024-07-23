import { useState } from "react";
function ExperienceForm({ experience, setExperience }) {
  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    startdate: "",
    enddate: "",
  });

  const handleAddExperience = () => {
    setExperience([...experience, newExperience]);
    setNewExperience({
      company: "",
      position: "",
      responsibilities: "",
      startdate: "",
      enddate: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="experience-form">
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={experience.company}
        onChange={handleChange}
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={experience.position}
        onChange={handleChange}
      />
      <input
        type="text"
        name="responsibilities"
        placeholder="Responsibilities"
        value={experience.responsibilities}
        onChange={handleChange}
      />
      <input
        type="text"
        name="startdate"
        placeholder="Start Date"
        value={experience.startdate}
        onChange={handleChange}
      />
      <input
        type="text"
        name="enddate"
        placeholder="End Date"
        value={experience.enddate}
        onChange={handleChange}
      />
      <button onClick={handleAddExperience}>Add Experience</button>
    </div>
  );
}
export default ExperienceForm;
