import React, { useEffect, useState } from "react";
import { CaretDown } from "react-bootstrap-icons";
import { CaretUp } from "react-bootstrap-icons";
import useFieldSorting from "../custom hooks/useFieldSorting";
import usePagination from "../custom hooks/usePagination";
import InputField from "./Input";

const url =
  "http://www.filltext.com/?rows=32&id={...​|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

function Table() {
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [givenData, handleSort, sotrBy] = useFieldSorting(data);
  const [paginatedDataMarkUp, PaginationComponent] = usePagination(givenData);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const IconMarkup = (field) => {
    if (!sotrBy) return;

    if (field === sotrBy.field && sotrBy.direction === "asc") {
      return <CaretDown />;
    } else if (field === sotrBy.field && sotrBy.direction === "desc") {
      return <CaretUp />;
    } else return;
  };

  const handleSubmit = (e) => {
    if (filterValue === "") return;
    e.preventDefault();

    setData((data) => {
      return data.filter((el) => {
        return el.firstName.toUpperCase().startsWith(filterValue.toUpperCase());
      });
    });
  };

  return (
    <>
      <InputField
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        handleSubmit={handleSubmit}
      />
      <table className="table">
        <thead>
          <tr scope="row">
            <th
              className="table__th"
              scope="col"
              onClick={() => handleSort("id")}
            >
              id <span>{IconMarkup("id")}</span>
            </th>
            <th
              className="table__th"
              scope="col"
              onClick={() => handleSort("firstName")}
            >
              firstName <span>{IconMarkup("firstName")}</span>
            </th>
            <th
              className="table__th"
              scope="col"
              onClick={() => handleSort("lastName")}
            >
              lastName <span>{IconMarkup("lastName")}</span>
            </th>
            <th
              className="table__th"
              scope="col"
              onClick={() => handleSort("email")}
            >
              email <span>{IconMarkup("email")}</span>
            </th>
            <th
              className="table__th"
              scope="col"
              onClick={() => handleSort("phone")}
            >
              phone <span>{IconMarkup("phone")}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedDataMarkUp?.map((data) => {
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
      <PaginationComponent />
    </>
  );
}

export default Table;
