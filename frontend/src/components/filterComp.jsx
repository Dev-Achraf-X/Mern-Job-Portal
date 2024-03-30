import React from "react";
import { IoIosArrowBack } from "react-icons/io";

function FilterComp() {
  return (
    <div className="bg-white xl:w-3/12 lg:w-[200px] max-h-[180vh] py-6 px-4 xl:rounded-md shadow-sm hidden lg:block">
      <div>
        <h1 className="text-2xl mb-8 font-semibold">Filters</h1>
        <p className="mb-3 text-xl text-gray-800">Location</p>
        <ul className="flex flex-col gap-4">
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="all"
              className="text-xl w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="all"
                className="absolute h-0 w-0 input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              All
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="london"
              className="text-xl w-full cursor-pointer text-gray-700 selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="london"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              London
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="seattle"
              className="text-xl w-full cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                id="seattle"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Seatle
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="madrid"
              className="text-xl w-full cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                id="madrid"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Madrid
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="boston"
              className="text-xl w-full cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                id="boston"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Boston
            </label>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl text-gray-800 font-normal mt-6">Salary</h1>
        <div className="flex xl:flex-row flex-col items-center justify-around mt-4">
          <option
            value="hourly"
            className="text-xl w-full font-light border mb-3 xl:mb-0 border-gray-200 px-5 py-2 rounded-md cursor-pointer hover:bg-[#3575E2] hover:text-white"
          >
            Hourly
          </option>
          <option
            value="monthly"
            className="text-xl w-full font-light border mb-3 xl:mb-0 border-gray-200 px-5 py-2 rounded-md cursor-pointer hover:bg-[#3575E2] hover:text-white"
          >
            Monthly
          </option>
          <option
            value="yearly"
            className="text-xl w-full font-light border mb-3 xl:mb-0 border-gray-200 px-5 py-2 rounded-md cursor-pointer hover:bg-[#3575E2] hover:text-white"
          >
            Yearly
          </option>
        </div>
        <ul className="flex flex-col gap-4 mt-4">
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="any"
              className="text-xl w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="any"
                className="absolute h-0 w-0 input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Any
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="3k"
              className="text-xl w-full cursor-pointer text-gray-700 selection:not-sr-only flex items-center gap-2"
            >
              <input
                type="checkbox"
                id="3k"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <IoIosArrowBack className="inline-block " size={15} />{" "}
              <span>30000 K</span>
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="5k"
              className="text-xl w-full cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                id="5k"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <IoIosArrowBack className="inline-block " size={15} />{" "}
              <span>50000 K</span>
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="8k"
              className="text-xl w-full cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                id="8k"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <IoIosArrowBack className="inline-block " size={15} />{" "}
              <span>80000 K</span>
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="10k"
              className="text-xl w-full cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                id="10k"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <IoIosArrowBack className="inline-block" size={15} />{" "}
              <span>100000 K</span>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl text-gray-800 font-normal mt-6">
          Date of posting
        </h1>
        <ul className="flex flex-col gap-4 mt-4">
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="alltime"
              className="text-xl w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="alltime"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              All time
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="last24h"
              className="text-xl w-full cursor-pointer text-gray-700 selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="last24h"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Last 24 hours
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="lastW"
              className="text-xl w-full cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                id="lastW"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Last Week
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="lastM"
              className="text-xl w-full cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                id="lastM"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Last Nonth
            </label>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl text-gray-800 font-normal mt-6">
          Work experience
        </h1>
        <ul className="flex flex-col gap-4 mt-4">
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="anyex"
              className="text-xl w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="anyex"
                className="absolute h-0 w-0 input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Any experience
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="internship"
              className="text-xl w-full cursor-pointer text-gray-700 selection:not-sr-only flex items-center gap-2"
            >
              <input
                type="checkbox"
                id="internship"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <span>Internship</span>
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="workrem"
              className="text-xl w-full cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                id="workrem"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <span>Work remotely</span>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl text-gray-800 font-normal mt-6">
          Type of emloyment
        </h1>
        <ul className="flex flex-col gap-4 mt-4">
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="anyti"
              className="text-xl w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="anyti"
                className="absolute h-0 w-0 input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Any
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="fulltime"
              className="text-xl w-full cursor-pointer text-gray-700 selection:not-sr-only flex items-center gap-2"
            >
              <input
                type="checkbox"
                id="fulltime"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <span>Full time</span>
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="temporary"
              className="text-xl w-full cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                id="temporary"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <span>Temporary</span>
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="partTime"
              className="text-xl w-full cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                id="partTime"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <span>Part time</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterComp;
