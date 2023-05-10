import React from 'react';
import style from './Pagination.module.css';
import usePagination from '../Hook/usePagiantion';
type props = {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
  setCurrentPage: Function; //по идее функция ,куда складывается страница
};



export default function Pagination({
  totalCount,
  pageSize,
  siblingCount,
  currentPage,
  setCurrentPage,
}: props) {

  let disabledBtnClass;
  let paginationRange: any[] = [];
  paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });
  let DOTS = '...';
  let pageCount = Math.ceil(totalCount / pageSize);

  function onPrev() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      disabledBtnClass = '';
    } 
  }

  function onNext() {
    if (currentPage < totalCount) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className={style.Pagination}>
      <button
        className={
          currentPage === 1
            ? `${style.Pagination__btn} ${style.disable}`
            : `${style.Pagination__btn}`
        }
        onClick={onPrev}
      >
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.19006 6.50739L5.49242 11.8097C5.61505 11.9324 5.77876 12 5.95332 12C6.12788 12 6.29159 11.9324 6.41423 11.8097L6.80471 11.4193C7.0588 11.1649 7.0588 10.7514 6.80471 10.4975L2.35219 6.04493L6.80965 1.58747C6.93229 1.46474 7 1.30113 7 1.12667C7 0.952009 6.93229 0.788396 6.80965 0.665565L6.41917 0.275277C6.29644 0.152543 6.13282 0.0849284 5.95826 0.0849284C5.7837 0.0849284 5.62 0.152543 5.49736 0.275277L0.19006 5.58238C0.0671325 5.7055 -0.000385225 5.86989 1.95115e-06 6.04464C-0.000385256 6.22007 0.0671325 6.38436 0.19006 6.50739Z"
            fill="white"
          />
        </svg>
      </button>
      <div className={style.Pagiantion__pages}>
        {paginationRange.map((pageNumber: any, key: any) => {
          if (pageNumber === DOTS) {
            return (
              <div key={key} className={style.Pagination__num}>
                ...
              </div>
            );
          }
          if (pageNumber !== DOTS) {
            return (
              <div
                onClick={(pageNumber) => setCurrentPage(pageNumber)}
                key={key}
                className={
                  pageNumber === currentPage
                    ? `${style.Pagination__current} `
                    : `${style.Pagination__num} `
                }
              >
                {pageNumber}
              </div>
            );
          }
        })}
      </div>
      <button
        className={
          currentPage === pageCount
            ? `${style.Pagination__btn} ${style.disable}`
            : `${style.Pagination__btn} ${disabledBtnClass}`
        }
        onClick={onNext}
      >
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.80994 5.49261L1.50758 0.190349C1.38495 0.0676151 1.22124 0 1.04668 0C0.872118 0 0.708408 0.0676151 0.585771 0.190349L0.195289 0.580734C-0.0587998 0.835114 -0.0587998 1.24855 0.195289 1.50255L4.64781 5.95507L0.190349 10.4125C0.0677119 10.5353 0 10.6989 0 10.8733C0 11.048 0.0677119 11.2116 0.190349 11.3344L0.580831 11.7247C0.703565 11.8475 0.867178 11.9151 1.04174 11.9151C1.2163 11.9151 1.38001 11.8475 1.50264 11.7247L6.80994 6.41762C6.93287 6.2945 7.00039 6.13011 7 5.95536C7.00039 5.77993 6.93287 5.61563 6.80994 5.49261Z"
            fill="#FFFFFF"
          />
        </svg>
      </button>
    </div>
  );
}
