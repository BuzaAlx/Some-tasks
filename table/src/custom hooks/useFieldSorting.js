import React, { useState, useEffect } from "react";

function useFieldSorting(data) {
  const [givenData, setGivenData] = useState(data);
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

    setGivenData([...newList]);
  }, [sotrBy]);

  return [givenData, handleSort, sotrBy];
}

export default useFieldSorting;
