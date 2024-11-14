import React from 'react'

interface PaginationProps {
  currentPage: number;
  dataPerPage: number;
  totalPages: number;
  handlePreviousPage: any;
  handleNextPage: any;
}

const PaginationControls = ({ currentPage, dataPerPage, totalPages, handlePreviousPage, handleNextPage }: PaginationProps) => {
  const numberOfPages = Math.ceil(totalPages / dataPerPage)
  
  return (
    <div className="w-full flex justify-center pagination-controls join">
      <input
        className="join-item btn"
        type="button"
        value="Previous"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      />
      <span className="join-item btn">{`Page ${currentPage} of ${numberOfPages}`}</span>
      <input
        className="join-item btn"
        type="button"
        value="Next"
        onClick={handleNextPage}
        disabled={currentPage * dataPerPage >= totalPages}
      />
    </div>

  )
}

export default PaginationControls