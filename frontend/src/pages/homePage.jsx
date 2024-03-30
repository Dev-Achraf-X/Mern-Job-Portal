import "../index.css";
import { IoSearchOutline } from "react-icons/io5";
import { GiPositionMarker } from "react-icons/gi";
import FilterComp from "../components/filterComp";
import JobsComp from "../components/jobsComp";
import ResumeCom from "../components/ResumeCom";
import { useState } from "react";

function homePage() {
  const [filter, setFilter] = useState(false);
  const handleFilter = () => {
    setFilter(!filter);
  };

  return (
    <div>
      <div className="flex max-w-[1460px] m-auto flex-col gap-7 py-[70px] px-5">
        <h1 className="sm:text-5xl text-4xl font-semibold">
          Find your <span className="text-[#3575E2]">new job</span> today
        </h1>
        <p className="text-md text-gray-600">
          Thousands of jobs in computer, engineering and technology sectors are
          waiting for you.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-1 gap-4">
          <div className="md:w-1/2 w-full h-14 px-4 shadow-sm border border-gray-200 flex items-center gap-2 rounded-md">
            <IoSearchOutline
              size={30}
              className="text-gray-500 cursor-pointer"
            />
            <input
              type="search"
              placeholder="What position are you looking for?"
              className="w-full outline-none text-lg"
            />
          </div>
          <div className="md:w-1/2 w-full flex items-center">
            <div className="w-full h-14 px-4 shadow-sm border border-gray-200 flex items-center gap-2 rounded-l-md">
              <GiPositionMarker
                size={30}
                className="text-gray-500 cursor-pointer"
              />
              <input
                type="select"
                placeholder="Location"
                className="outline-none text-lg"
              />
            </div>
            <button className="bg-[#3575E2] md:w-[25%] w-[35%] h-14 md:text-xl text-sm font-semibold md:font-normal text-white rounded-r-md">
              Search Job
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#fafafa] py-16">
        <div className="max-w-[1460px] m-auto flex lg:flex-row flex-col-reverse relative gap-7">
          <FilterComp filter={filter} setFilter={setFilter} />
          <JobsComp handleFilter={handleFilter} filter={filter} />
          <ResumeCom />
        </div>
      </div>
    </div>
  );
}

export default homePage;
