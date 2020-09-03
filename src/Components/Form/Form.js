import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState();
  const valueForm = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleForm = (e) => {
    e.preventDefault();
    new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };
  return (
    <form onSubmit={handleForm} className="form">
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Name"
          onChange={valueForm}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput2">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="name@example.com"
          onChange={valueForm}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Review </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={valueForm}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
}
export default Form;
