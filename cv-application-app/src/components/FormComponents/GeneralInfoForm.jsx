function GeneralInfoForm({ generalInfo, setGeneralInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  };

  return (
    <div className="generalinfo-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={generalInfo.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={generalInfo.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={generalInfo.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="paragraph"
        placeholder="Personal Paragraph"
        value={generalInfo.paragraph}
        onChange={handleChange}
      />
    </div>
  );
}
export default GeneralInfoForm;
