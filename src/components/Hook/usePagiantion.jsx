import React from "react";

export default function usePagiantion({
  totalCount,
  pageSize,
  siblingCount,
  currentPage,
}) {
  let pageCount = Math.ceil(totalCount / pageSize); // общее кол-во кнопок
  let DOTS = "...";

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, pageCount);

  const firstPageIndex = 1;
  const lastPageIndex = pageCount;
  let leftItemCount = 0;
  let leftRange = [];

  if (pageCount < 4) {
    let arr = [];
    for (let i = 0; i < pageCount; i++) {
      arr.push(i + 1);
    }
    return arr;
  } else if (currentPage === 1) {
    leftItemCount = currentPage + siblingCount + 2;
    for (let i = leftSiblingIndex; i < leftItemCount; i++) {
      leftRange.push(i);
    }
    return [...leftRange, DOTS, lastPageIndex];
  } else if (currentPage < pageCount - 1) {
    leftItemCount = currentPage + siblingCount + 1;
    for (let i = leftSiblingIndex; i < leftItemCount; i++) {
      leftRange.push(i);
    }
    return [...leftRange, DOTS, lastPageIndex];
  } else if (currentPage + 1 === pageCount) {
    console.log(currentPage);
    leftItemCount = currentPage + siblingCount;
    for (let i = leftSiblingIndex; i < leftItemCount; i++) {
      leftRange.push(i);
    }
    return [, DOTS, ...leftRange, lastPageIndex];
  } else {
    return [firstPageIndex, DOTS, lastPageIndex];
  }
}
