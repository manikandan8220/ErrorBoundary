import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      throw new Error('Please fill in both Name and Email fields.');
    }

    alert(`Submitted:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>User Form</h4>

      <div>
        <label>Name: </label>
        <input name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div>
        <label>Email: </label>
        <input name="email" value={formData.email} onChange={handleChange} />
      </div>

      <button type="submit">Submit</button>

    </form>
  );
};

export default UserForm;