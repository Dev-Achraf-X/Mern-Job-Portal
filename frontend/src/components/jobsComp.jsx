import React from "react";
import { BsFilterRight } from "react-icons/bs";
import SideFilter from "../lib/SideFilter.jsx";

function JobsComp({
  handleFilter,
  filter,
  result,
  handleRadioChange,
  handleButtonFiltering,
}) {
  return (
    <div className="bg-white w-full py-6 px-4 rounded-md shadow-sm">
      <div>
        <div className="flex items-start justify-between relative">
          <h1 className="text-2xl mb-8 font-semibold">{result.length} Jobs</h1>
          <span
            className="cursor-pointer lg:hidden flex items-center gap-2"
            onClick={handleFilter}
          >
            <h2 className="text-2xl font-semibold">Filter</h2>
            <BsFilterRight size={44} />
          </span>
          {filter ? (
            <SideFilter
              handleButtonFiltering={handleButtonFiltering}
              handleRadioChange={handleRadioChange}
              handleFilter={handleFilter}
            />
          ) : null}
        </div>
        {result.length !== 0 ? (
          result
        ) : (
          <h1 className="text-2xl text-center text-[#3575E2]">No Data found</h1>
        )}
      </div>
    </div>
  );
}

export default JobsComp;
