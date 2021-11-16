import { useState } from "react";

const UserForm = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handleSubmit = () => {
    console.log("Submitted");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={handleChange} />
      </form>
    </>
  );
};

export default UserForm;
