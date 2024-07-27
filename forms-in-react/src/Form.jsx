import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password:""
  });

  //   let handleNameChange = (event) => {
  //     // console.log(event.target.value);
  //     setFullname(event.target.value);
  //   };

  let handleFormData = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullname: "",
      username: "",
      password: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name </label>
      <input
        placeholder="enter your name"
        type="text"
        value={formData.fullname}
        onChange={handleFormData}
        id="fullname"
        name="fullname"
      />
      <br />
      <br />
      <label htmlFor="username">Username </label>
      <input
        placeholder="enter username"
        type="text"
        value={formData.username}
        onChange={handleFormData}
        id="username"
        name="username"
      />
      <br />
      <br />
      <label htmlFor="password">Password </label>
      <input
        placeholder="enter password"
        type="password"
        value={formData.password}
        onChange={handleFormData}
        id="password"
        name="password"
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
