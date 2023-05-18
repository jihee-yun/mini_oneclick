import React from "react";
// import styled from "styled-components";
import pre from "../images/left-arrow.png";
import next from "../images/right-arrow.png";


const PageNation = ({ currentPage, totalPages, onPageChange }) => {
  
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  return(
    <>
    <img className="left" src={pre} alt="이전"
     onClick={() => currentPage !== 1 && onPageChange(currentPage - 1)} />
    {pageNumbers.map((pageNumber) => (
      <button key={pageNumber}
      onClick={() => onPageChange(pageNumber)}
      className={pageNumber === currentPage ? "active" : ""}>
        {pageNumber}
      </button>
    ))}
    <img className="right" src={next} alt="다음" 
    onClick={() => currentPage !== totalPages && onPageChange(currentPage + 1)}/>
    </>
  );
};

export default PageNation;