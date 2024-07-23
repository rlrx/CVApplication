function GeneralInfoForm({ generalInfo, setGeneralInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  };

  return (
    <div className="generalinfo-form">
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={generalInfo.name}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={generalInfo.email}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={generalInfo.phone}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="paragraph">Personal Paragraph</label>
        <input
          type="text"
          name="paragraph"
          placeholder="Personal Paragraph"
          value={generalInfo.paragraph}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default GeneralInfoForm;
