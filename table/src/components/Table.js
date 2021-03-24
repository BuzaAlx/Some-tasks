import React, { useState, useEffect } from "react";
import { CaretDown } from "react-bootstrap-icons";
import { CaretUp } from "react-bootstrap-icons";
import { someData } from "../data";

function Table() {
  const [givenData, setGivenData] = useState(someData);
  const [sotrBy, setSortBy] = useState(null);

  const handleSort = (field) => {
    let direction;
    if (sotrBy && sotrBy.direction === "asc" && sotrBy.field === field) {
      direction = "desc";
    } else if (
      sotrBy &&
      sotrBy.direction === "desc" &&
      sotrBy.field === field
    ) {
      direction = "asc";
    } else {
      direction = "asc";
    }

    setSortBy({
      direction,
      field,
    });
  };

  useEffect(() => {
    const sortFn = (a, b) => {
      if (sotrBy?.direction === "asc") {
        return a[sotrBy?.field] < b[sotrBy?.field] ? 1 : -1;
      }
      if (sotrBy?.direction === "desc") {
        return a[sotrBy?.field] > b[sotrBy?.field] ? 1 : -1;
      }
    };

    let newList = givenData.sort(sortFn);

    console.log(newList);
    setGivenData([...newList]);
  }, [sotrBy]);

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
          <th scope="col" onClick={() => handleSort("id")}>
            id {IconMarkup("id")}
          </th>
          <th scope="col" onClick={() => handleSort("firstName")}>
            firstName {IconMarkup("firstName")}
          </th>
          <th scope="col" onClick={() => handleSort("lastName")}>
            lastName {IconMarkup("lastName")}
          </th>
          <th scope="col" onClick={() => handleSort("email")}>
            email {IconMarkup("email")}
          </th>
          <th scope="col" onClick={() => handleSort("phone")}>
            phone {IconMarkup("phone")}
          </th>
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
