import React from "react";
import { GiPositionMarker } from "react-icons/gi";
import { GoClock } from "react-icons/go";
import { FiDollarSign } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";

function JobComp({ job }) {
  return (
    <a
      href="#"
      className="flex sm:flex-row flex-col items-start gap-5 max-w-[800px] mx-auto p-5 mb-8 border border-gray-200 rounded-sm shadow-sm"
    >
      <img
        src={job.companyLogo}
        alt="job-logo"
        className="w-16 h-16 bg-cover"
      />
      <div className="flex flex-col gap-2">
        <p className="text-xl text-gray-600 font-light">{job.companyName}</p>
        <h2 className="text-2xl text-black font-semibold">{job.jobTitle}</h2>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="flex items-center gap-2 text-gray-600 xl:text-xl lg:text-lg text-sm font-light">
            <GiPositionMarker />
            <h5>{job.jobLocation}</h5>
          </span>
          <span className="flex items-center gap-2 text-gray-600 xl:text-xl lg:text-lg text-sm font-light">
            <GoClock />
            <h5>{job.employmentType}</h5>
          </span>
          <span className="flex items-center gap-2 text-gray-600 xl:text-xl lg:text-lg text-sm font-light">
            <FiDollarSign />
            <h5>
              {job.minPrice}-{job.maxPrice} k
            </h5>
          </span>
          <span className="flex items-center gap-2 text-gray-600 xl:text-xl lg:text-lg text-sm font-light">
            <CiCalendar />
            <h5>{job.postingDate}</h5>
          </span>
        </div>
        <p className="text-gray-600 md:text-xl text-lg leading-8">
          {job.description.slice(0, 180)}..
        </p>
      </div>
    </a>
  );
}

export default JobComp;
