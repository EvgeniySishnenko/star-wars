import React, { useState } from "react";
import InfoMessage from "../Message/InfoMessage";
import usePolling from "../../hooks/usePolling";

function Form({ data }) {
  const [input, setInput] = useState();
  const [isShow, setIsShow] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    review: "",
  });
  const emailRegex = RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const formValid = ({ ...formErrors }) => {
    let valid = true;
    Object.values(formErrors).forEach((val) => {
      if (val.length > 0) {
        valid = false;
      }
    });
    return valid;
  };
  const valueForm = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setFormErrors({
          ...formErrors,
          username:
            value.length < 3 && value.length > 0 ? "Не менее 3 символов" : "",
        });
        break;
      case "email":
        setFormErrors({
          ...formErrors,
          email:
            emailRegex.test(value) && value.length > 0
              ? ""
              : "Не корректный Email",
        });
        break;
      case "review":
        setFormErrors({
          ...formErrors,
          review:
            value.length < 3 && value.length > 0 ? "Не менее 3 символов" : "",
        });
        break;
      default:
        break;
    }
    formValid(formErrors);
  };
  const handleForm = (e) => {
    e.preventDefault();
    let target = e.target;

    if (formValid(formErrors)) {
      new Promise((resolve) => {
        setIsShow(false);
        setIsLoading(true);
        resolve(input);
      }).then((input) => {
        setTimeout(() => {
          setIsShow(true);
          const body = {
            name: input.username,
            email: input.email,
            review: input.review,
          };
          setInfo(body);
          setIsLoading(false);
          target.username.value = "";
          target.email.value = "";
          target.review.value = "";
        }, 1000);
      });
    } else {
      console.error();
    }
  };
  function bodyHTML(body) {
    let res = [];
    for (let key in info) {
      res.push(
        <p key={key}>
          <span className="font-weight-bold">{key}</span>:{" "}
          <span>{info[key]}</span>
        </p>
      );
    }
    return res;
  }
  function resetInfo() {
    setInfo(null);
  }
  return (
    <>
      <form onSubmit={handleForm} className="form">
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Name</label>
          <input
            type="text"
            name="username"
            className={`form-control ${
              formErrors.username.length > 0 ? "is-invalid" : null
            }`}
            id="exampleFormControlInput1"
            placeholder="Name"
            onChange={valueForm}
            required
          />
          {formErrors.username.length > 0 && (
            <span className="error-massage">{formErrors.username}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput2">Email address</label>
          <input
            type="email"
            name="email"
            className={`form-control ${
              formErrors.email.length > 0 ? "is-invalid" : null
            }`}
            id="exampleFormControlInput2"
            placeholder="name@example.com"
            onChange={valueForm}
            required
          />
          {formErrors.email.length > 0 && (
            <span className="error-massage">{formErrors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Review </label>
          <textarea
            className={`form-control ${
              formErrors.review.length > 0 ? "is-invalid" : null
            }`}
            name="review"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={valueForm}
            required
          ></textarea>
          {formErrors.review.length > 0 && (
            <span className="error-massage">{formErrors.review}</span>
          )}
        </div>
        {isLoading
          ? "Loading..."
          : isShow && (
              <input type="submit" value="Send" className="btn btn-primary" />
            )}
      </form>

      {info !== null && (
        <InfoMessage title={data.title} onResetInfo={resetInfo}>
          {bodyHTML(info)}
        </InfoMessage>
      )}
    </>
  );
}
export default Form;
