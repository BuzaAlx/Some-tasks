import React, { useState, useEffect } from "react";
import { CaretDown } from "react-bootstrap-icons";
import { CaretUp } from "react-bootstrap-icons";
import { someData } from "../data";
import useFieldSorting from "../custom hooks/useFieldSorting";

function Table() {
  const [givenData, handleSort, sotrBy] = useFieldSorting(someData);

  const IconMarkup = (field) => {
    if (!sotrBy) return;

    if (field === sotrBy.field && sotrBy.direction === "asc") {
      return <CaretDown />;
    } else if (field === sotrBy.field && sotrBy.direction === "desc") {
      return <CaretUp />;
    } else return;
  };

  return (
    <table className="table">
      <thead>
        <tr scope="row">
          {Object.keys(givenData[0]).map((field) => {
            return (
              <th
                className="table__th"
                scope="col"
                onClick={() => handleSort(field)}
              >
                {field} <span>{IconMarkup(field)}</span>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {givenData?.map((data) => {
          return (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
