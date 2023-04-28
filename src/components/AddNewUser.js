import { useState } from "react";
import UserInformation from "./UserInformation";

const AddNewUser = () => {
  const [formData, setFormData] = useState({ name: "", age: "" })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = () => {
    if (formData.age < 18) {
      alert("You are not old enough to be our employee");
    } else {
      window.submitForm(formData.name);
    }
  };

  return (
    <div style={{ background: "#2ab92a", padding: 20 }}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Type your name" />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Type your age"
      />
      <button onClick={handleSubmit}>Submit form</button>
      <UserInformation userAge={formData.age} />
    </div>
  );
};

export default AddNewUser