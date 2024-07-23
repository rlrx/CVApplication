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
      <div className="input-group">
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={newExperience.company}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="position">Position</label>
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={newExperience.position}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="responsibilities">Responsibilities</label>
        <input
          type="text"
          name="responsibilities"
          placeholder="Responsibilities"
          value={newExperience.responsibilities}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="startdate">Start Date</label>
        <input
          type="text"
          name="startdate"
          placeholder="Start Date"
          value={newExperience.startdate}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="enddate">End Date</label>
        <input
          type="text"
          name="enddate"
          placeholder="End Date"
          value={newExperience.enddate}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleAddExperience}>Add Experience</button>
    </div>
  );
}

export default ExperienceForm;
