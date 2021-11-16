import { useState } from "react";

const UserForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handleChangeName = ({ target: { value } }) => {
    setName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    const isNameValid = !!name;
    if (!isNameValid)
      setErrors((preError) => ({ ...preError, name: "Field is required" }));
  };
  return (
    <>
      <form onSubmit={handleSubmit} data-testid="form">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          data-testid="inputEmail"
        />
        <label>name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          data-testid="inputName"
        />
        {errors.name && <span>{errors.name}</span>}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default UserForm;
