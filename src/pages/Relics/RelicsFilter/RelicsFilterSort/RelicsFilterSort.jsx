import React from "react";
import { useState } from "react";
import useModal from "../../../../hooks/useModal";
import "./RelicsFilterSort.scss";
import { sorts } from "../../constants/constants";
import { setFilterSortRelics } from "../../../../store/reducers/relicsReducers";
import { useDispatch } from "react-redux";

export default function RelicsFilterSort() {
  const [filterSort, setFilterSort] = useState("");
  const { show, setShow, nodeRef, nodeContentRef } = useModal();
  const dispatch = useDispatch();

  const handleClickOption = (e) => {
    const code = e.target.getAttribute("data-code");
    setFilterSort(code);
    dispatch(setFilterSortRelics(code));
  };
  return (
    <div
      className="relicsFilterSort"
      onClick={() => {
        setShow(!show);
      }}
      ref={nodeRef}
    >
      <div className="relicsFilterSort__text" data-aos="fade">
        {filterSort ? findNameSort(filterSort) : "Lọc"}
      </div>
      {show && (
        <>
          <div className="relicsFilterSort__select" >
            {sorts &&
              sorts.map((sort) => {
                return (
                  <div
                    className="relicsFilterSort__select--option"
                    data-code={sort.code}
                    onClick={handleClickOption}
                    key={sort.code}
                    ref={nodeContentRef}
                  >
                    {sort.name}
                  </div>
                );
              })}
          </div>
          <div className="relicsFilterSort__triangle"></div>
        </>
      )}

      <svg
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.41797 6.04183C2.41797 5.72136 2.54527 5.41402 2.77188 5.18741C2.99849 4.9608 3.30583 4.8335 3.6263 4.8335H25.3763C25.6968 4.8335 26.0041 4.9608 26.2307 5.18741C26.4573 5.41402 26.5846 5.72136 26.5846 6.04183C26.5846 6.3623 26.4573 6.66964 26.2307 6.89625C26.0041 7.12286 25.6968 7.25016 25.3763 7.25016H3.6263C3.30583 7.25016 2.99849 7.12286 2.77188 6.89625C2.54527 6.66964 2.41797 6.3623 2.41797 6.04183ZM7.2513 13.2918C7.2513 12.9714 7.37861 12.664 7.60521 12.4374C7.83182 12.2108 8.13916 12.0835 8.45963 12.0835H20.543C20.8634 12.0835 21.1708 12.2108 21.3974 12.4374C21.624 12.664 21.7513 12.9714 21.7513 13.2918C21.7513 13.6123 21.624 13.9196 21.3974 14.1462C21.1708 14.3729 20.8634 14.5002 20.543 14.5002H8.45963C8.13916 14.5002 7.83182 14.3729 7.60521 14.1462C7.37861 13.9196 7.2513 13.6123 7.2513 13.2918ZM12.0846 19.3335C11.7642 19.3335 11.4568 19.4608 11.2302 19.6874C11.0036 19.914 10.8763 20.2214 10.8763 20.5418C10.8763 20.8623 11.0036 21.1696 11.2302 21.3962C11.4568 21.6229 11.7642 21.7502 12.0846 21.7502H16.918C17.2384 21.7502 17.5458 21.6229 17.7724 21.3962C17.999 21.1696 18.1263 20.8623 18.1263 20.5418C18.1263 20.2214 17.999 19.914 17.7724 19.6874C17.5458 19.4608 17.2384 19.3335 16.918 19.3335H12.0846Z"
          fill="#69FFC9"
        />
      </svg>
    </div>
  );
}

function findNameSort(code) {
  return sorts.filter((sort) => sort.code === code)[0]?.name;
}
