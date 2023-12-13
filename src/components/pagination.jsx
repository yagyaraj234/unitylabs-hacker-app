import React from "react";

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];
  const maxPageNumbersToShow = 3; // Number of page numbers to display

  // Calculate the maximum number of pages available
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  let startPage = 1;
  let endPage = totalPages;

  if (totalPages > maxPageNumbersToShow) {
    const halfMaxPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);

    if (currentPage <= halfMaxPageNumbersToShow) {
      startPage = 1;
      endPage = maxPageNumbersToShow;
    } else if (currentPage + halfMaxPageNumbersToShow >= totalPages) {
      startPage = totalPages - maxPageNumbersToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - halfMaxPageNumbersToShow;
      endPage = currentPage + halfMaxPageNumbersToShow;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mx-auto my-10">
      <ul className="flex  gap-10 max-sm:gap-4 ">
        {startPage !== 1 && (
          <li key={1} className="border border-gray-700 py-1 px-3 rounded-lg">
            <button onClick={() => paginate(1)}>{1}</button>
          </li>
        )}
        {startPage !== 1 && <span className="font-bold text-xl">...</span>}
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className={`border border-gray-700 py-1 px-3 rounded-lg ${
                number === currentPage && "bg-blue-800 text-white"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        {endPage !== totalPages && (
          <span className="font-bold text-xl">...</span>
        )}
        {endPage !== totalPages && (
          <li
            key={totalPages}
            className="border border-gray-700 py-1 px-3 rounded-lg"
          >
            <button onClick={() => paginate(totalPages)}>{totalPages}</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
