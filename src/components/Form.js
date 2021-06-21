import React, { useState } from "react";

const Form = props => {
  const [formInput, setFormInput] = useState("");

  const getFormInput = e => {
    setFormInput(e.target.value);
  };

  const submit = e => {
    e.preventDefault();
    props.setQuery(formInput);
  };

  return (
      <form onSubmit={submit} className="search-form">
        <input type="text" value={formInput} onChange={getFormInput} className="search-bar"/>
        <input type="submit" value="Submit" className="search-btn"/>
      </form>
  );
};

export default Form;
