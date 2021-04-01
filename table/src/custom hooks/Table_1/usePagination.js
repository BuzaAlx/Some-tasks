import React, { useState, useEffect } from "react";

function usePagination(givenData) {
  const [curentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const numberOfPages = Math.ceil(givenData.length / postsPerPage);

  let paginationArray = Array(numberOfPages).fill("");

  let paginatedDataMarkUp;

  if (!givenData) {
    return <h1>loading..</h1>;
  }

  if (givenData) {
    paginatedDataMarkUp = givenData.slice(
      (curentPage - 1) * postsPerPage,
      curentPage * postsPerPage - 1
    );
  }

  const handleDecrease = () => {
    setCurrentPage((page) => page - 1);
  };

  const handleIncrease = () => {
    setCurrentPage((page) => page + 1);
  };

  let PaginationComponent = () => {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {curentPage > 1 && (
            <li className="page-item" onClick={handleDecrease}>
              <a className="page-link" href="#" tabIndex="-1">
                Prev
              </a>
            </li>
          )}
          {paginationArray.map((_, i) => {
            return (
              <li
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={
                  curentPage === i + 1 ? "page-item active" : "page-item"
                }
              >
                <a className="page-link" href="#">
                  {i + 1}
                </a>
              </li>
            );
          })}
          {curentPage < numberOfPages && (
            <li className="page-item" onClick={handleIncrease}>
              <a className="page-link" href="#" tabIndex="-1">
                next
              </a>
            </li>
          )}
        </ul>
      </nav>
    );
  };

  return [paginatedDataMarkUp, PaginationComponent, setCurrentPage];
}

export default usePagination;
