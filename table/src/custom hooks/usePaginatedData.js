import React, { useState, useEffect } from "react";

function usePaginatedData(givenData) {
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

  return [paginatedDataMarkUp, setCurrentPage, paginationArray];
}

export default usePaginatedData;
