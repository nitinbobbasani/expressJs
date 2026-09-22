// import React from 'react'

const Pagination = ({ data, onPageChange }) => {
    const pageNumbers = []; // Example page numbers

    for (let i = 1; i <= Math.ceil(data.length / 10); i++) {
        pageNumbers.push(i);
    }

  return (
    <div>
      {pageNumbers.map(number => (
        <button key={number} onClick={() => onPageChange(number)}>
          {number}
        </button>
      ))}
    </div>
  )
}

export default Pagination