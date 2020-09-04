import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState();
  const [valueError, setValueError] = useState({
    fullName: "",
    email: "",
    review: "",
  });
  const valueForm = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(value);
    switch (name) {
      case "fullName":
        setValueError({
          ...valueError,
          name: value.length < 3 ? "Не менее 3 символов" : "",
        });
    }
    console.log(valueError);
    // new Promise((resolve) => {
    //   setTimeout(resolve, 1000);
    // });
  };
  return (
    <form onSubmit={handleForm} className="form">
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Name</label>
        <input
          type="text"
          name="fullName"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Name"
          onChange={valueForm}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput2">Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="name@example.com"
          onChange={valueForm}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Review </label>
        <textarea
          className="form-control"
          name="review"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={valueForm}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
}
export default Form;
