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
      <input
        type="text"
        name="school"
        placeholder="School Name"
        value={education.school}
        onChange={handleChange}
      />
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={education.degree}
        onChange={handleChange}
      />
      <input
        type="text"
        name="major"
        placeholder="Major"
        value={education.major}
        onChange={handleChange}
      />
      <input
        type="text"
        name="startdate"
        placeholder="Start Date"
        value={education.startdate}
        onChange={handleChange}
      />
      <input
        type="text"
        name="enddate"
        placeholder="End Date"
        value={education.enddate}
        onChange={handleChange}
      />
      <button onClick={handleAddEducation}>Add Education</button>
    </div>
  );
}

export default EducationForm;
