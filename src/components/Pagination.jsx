import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import '@styles/pagination.css';

function Pagination({ totalPages = 1, getDataAction }) {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const selectOp = useRef(null);
  const pages = new Array(totalPages).fill('');
  const advanceOnePage = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    selectOp.current.value = newPage;
    dispatch(getDataAction(newPage));
  };
  const backOnePage = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    selectOp.current.value = newPage;
    dispatch(getDataAction(newPage));
  };
  const selectPage = (page) => {
    const pageNumber = parseInt(page, 10);
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      dispatch(getDataAction(pageNumber));
    }
  };
  return (
    <div className="pagination-container">
      <button type="button" disabled={currentPage === 1} onClick={backOnePage}>«</button>
      <label htmlFor="options">
        <select ref={selectOp} defaultValue={currentPage} id="options" onChange={(e) => selectPage(e.target.value)}>
          {
            pages.map((number, index) => <option key={index}>{index + 1}</option>)
          }
        </select>
      </label>
      <button type="button" disabled={currentPage === totalPages} value={totalPages} onClick={advanceOnePage}>»</button>
    </div>
  );
}

export default Pagination;
