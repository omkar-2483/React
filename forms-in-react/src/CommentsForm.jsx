import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remark: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h4>Give A Comment</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username </label>
        <input
          type="text"
          placeholder="enter your username"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />
        <br />
        <br />

        <label htmlFor="remark">Give Reamrk </label>
        <textarea
          placeholder="add reamrk"
          value={formData.remark}
          onChange={handleInputChange}
          id="remark"
          name="remark"
        ></textarea>
        <br />
        <br />

        <label htmlFor="rating">Give Rating </label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />
        <br />
        <br />

        <button>Add Comment</button>
      </form>
    </div>
  );
}
