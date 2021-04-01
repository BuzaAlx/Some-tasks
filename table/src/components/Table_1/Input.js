import React, { useState } from "react";

function InputField({ filterValue, setFilterValue, handleSubmit }) {
  return (
    <div className="mt-3 mb-3">
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          value={filterValue}
          className="form-control mr-5 "
          type="text"
          placeholder="filter"
          onChange={(e) => setFilterValue(e.target.value)}
        />
        <button type="submit" className="btn btn-primary ">
          Search
        </button>
      </form>
    </div>
  );
}

export default InputField;
