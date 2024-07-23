import { useState } from "react";

function EducationForm({ education, setEducation }) {
  const [newEducation, setNewEducation] = useState({
    school: "",
    degree: "",
    major: "",
    startdate: "",
    enddate: "",
  });

  const handleAddEducation = () => {
    setEducation([...education, newEducation]);
    setNewEducation({
      school: "",
      degree: "",
      major: "",
      startdate: "",
      enddate: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEducation((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="education-form">
      <div className="input-group">
        <label htmlFor="school">School Name</label>
        <input
          type="text"
          name="school"
          placeholder="School Name"
          value={newEducation.school}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={newEducation.degree}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="major">Major</label>
        <input
          type="text"
          name="major"
          placeholder="Major"
          value={newEducation.major}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="startdate">Start Date</label>
        <input
          type="text"
          name="startdate"
          placeholder="Start Date"
          value={newEducation.startdate}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="enddate">End Date</label>
        <input
          type="text"
          name="enddate"
          placeholder="End Date"
          value={newEducation.enddate}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleAddEducation}>Add Education</button>
    </div>
  );
}

export default EducationForm;
