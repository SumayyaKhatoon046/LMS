import { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";

const RegisterForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>

      <InputField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />

      <InputField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />

      <Button text="Register" />

    </form>
  );
};

export default RegisterForm;