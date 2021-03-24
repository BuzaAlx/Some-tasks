import React, { useState } from "react";

function InputField() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div className="mt-3 mb-3">
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          value={value}
          className="form-control mr-5 "
          type="text"
          placeholder="filter"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

export default InputField;
