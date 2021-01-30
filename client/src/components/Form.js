import React, { useState } from "react";
import "./Form.css";

export default function Form(props) {
  //hooks for for input
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  //Event handle for event listener onSubmit, when it hears submit event
  function handleSubmit(event) {
    //prevent entire doc from reloading, only targeted event
    event.preventDefault();

    //define state obj to send to parent
    const student = { firstname: firstname, lastname: lastname };

    //do something onSubmit, send state obj to parent
    props.onSubmit(student);

    //reset fields
    setFirstName("");
    setLastName("");
  }

  //Event handler on onChange event listener
  //captuere value changes when triggered new event
  function handleChange(event) {
    //if name matches event, set value with event value

    switch (event.target.name) {
      case "firstname":
        setFirstName(event.target.value);
        break;

      case "lastname":
        setLastName(event.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <div className="studentsForm">
      <h1>_CodeOp's Facebook</h1>

      {/* form with event listener onSubmit to trigger handleSubmit */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">
          First Name
          <input
            id="firstname"
            type="text"
            name="firstname"
            className="firstname"
            value={firstname}
            // when new values entered
            onChange={handleChange}
          />
        </label>

        <label htmlFor="lastname">
          Last Name
          <input
            id="lastname"
            type="text"
            name="lastname"
            className="lastname"
            value={lastname}
            // when new values entered
            onChange={handleChange}
          />
        </label>
        {/* button goes here */}
        <button id="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
