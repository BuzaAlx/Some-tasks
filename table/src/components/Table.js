import React, { useEffect, useState } from "react";
import { CaretDown } from "react-bootstrap-icons";
import { CaretUp } from "react-bootstrap-icons";
import useFieldSorting from "../custom hooks/useFieldSorting";
import usePagination from "../custom hooks/usePagination";
import useFetch from "../custom hooks/useFetch";
import InputField from "./Input";

const url =
  "http://www.filltext.com/?rows=32&id={...​|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

function Table() {
  const [data, setData] = useState([]);
  const [dataFromUrl, setDataFromUrl] = useFetch(url);
  const [filterValue, setFilterValue] = useState("");
  const [givenData, handleSort, sotrBy] = useFieldSorting(data);
  const [
    paginatedDataMarkUp,
    PaginationComponent,
    setCurrentPage,
  ] = usePagination(givenData);

  useEffect(() => {
    setData(dataFromUrl);
  }, [dataFromUrl]);

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
    setCurrentPage(1);
    setData(dataFromUrl);
    setData((data) => {
      return data.filter((el) => {
        return el.firstName.toUpperCase().startsWith(filterValue.toUpperCase());
      });
    });
  };

  const tableHeaderMarkup = [
    { id: "1", field: "id" },
    { id: "2", field: "firstName" },
    { id: "3", field: "lastName" },
    { id: "4", field: "email" },
    { id: "4", field: "phone" },
  ];

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
            {tableHeaderMarkup.map(({ field, id }) => {
              return (
                <th
                  key={id}
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
