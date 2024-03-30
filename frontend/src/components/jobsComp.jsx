import React from "react";
import JobComp from "./JobComp.jsx";
import data from "../../public/jobs.js";
import { BsFilterRight } from "react-icons/bs";
import SideFilter from "../lib/SideFilter.jsx";

function JobsComp({ handleFilter, filter }) {
  return (
    <div className="bg-white w-12/12 py-6 px-4 rounded-md shadow-sm">
      <div>
        <div className="flex items-start justify-between relative">
          <h1 className="text-2xl mb-8 font-semibold">{data.length} Jobs</h1>
          <span
            className="cursor-pointer lg:hidden flex items-center gap-2"
            onClick={handleFilter}
          >
            <h2 className="text-2xl font-semibold">Filter</h2>
            <BsFilterRight size={44} />
          </span>
          {filter ? <SideFilter /> : null}
        </div>
        {data.map((job) => (
          <JobComp job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
}

export default JobsComp;
