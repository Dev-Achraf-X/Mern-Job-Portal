import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import salary from "../../public/salary";
import SalaryCard from "../components/SalaryCard";

function SalaryPage() {
  return (
    <div className="flex max-w-[1060px] text-center m-auto flex-col gap-7 py-[70px] sm:px-5">
      <h1 className="text-2xl text-gray-600 font-medium">Estimate Salary</h1>
      <div className="w-full m-auto flex">
        <div className="w-full h-14 px-4 shadow-sm border border-gray-200 flex  items-center gap-2 rounded-md">
          <IoSearchOutline size={30} className="text-gray-500 cursor-pointer" />
          <input
            type="search"
            placeholder="Search . . ."
            className="w-full outline-none text-lg"
          />
        </div>
        <button className="bg-[#3575E2] md:w-[25%] w-[35%] h-14 md:text-xl text-sm font-semibold md:font-normal text-white rounded-r-md">
          Search
        </button>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 ">
        {salary.map((sal) => (
          <SalaryCard sal={sal} key={sal.id} />
        ))}
      </div>
    </div>
  );
}

export default SalaryPage;
