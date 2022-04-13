import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function Filter({ filterBy, searchParams }) {

  const { type } = useSelector(state => state.donated);

  const typeList = type.map(tp => {
    return <li key={tp} className={`${tp === (searchParams.get("filter")) ? "bg-[#F05A28]" : "bg-[#90B176] cursor-pointer"} px-5 py-1 rounded-full my-2`} onClick={() => handleFilter(tp)}>{tp}</li>
  });

  const handleFilter = (p) => {
    filterBy(p);
  }


  return (
    <ul className="bg-[#F8F9FA] xl:w-4/6 w-5/6 mx-auto px-3 py-1 rounded lg:rounded-full text-white flex flex-wrap items-center justify-around lg:justify-between mb-8">
      {typeList}

      <li className="bg-[#545851] px-5 py-1 rounded-full inline-flex items-center my-2">
        Date
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
        </svg>
      </li>
    </ul>
  );
}

export default Filter;
