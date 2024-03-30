import React from "react";
import { IoIosArrowBack } from "react-icons/io";

function SideFilter() {
  return (
    <div className="bg-white md:w-4/12 w-6/12 h-[100vh] overflow-auto  py-3 px-1 rounded-md shadow-xl lg:hidden block absolute top-0 left-0 hiddenScrollbar border border-l-0 border-gray-300">
      <div className="border-b border-gray-400">
        <h1 className="text-2xl mb-3 font-semibold">Filters</h1>
        <p className="mb-3 text-xl text-gray-800">Location</p>
        <ul className="flex flex-col gap-2">
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="all1"
              className="text-lg w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="all1"
                className="absolute h-0 w-0 input"
              />
              <span className="absolute  top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark "></span>
              All
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="london1"
              className="text-lg w-full cursor-pointer text-gray-700 selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="london1"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              London
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="seattle1"
              className="text-lg w-full cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                id="seattle1"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Seatle
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="madrid1"
              className="text-lg w-full cursor-pointer text-gray-700"
            >
              <input
                type="checkbox1"
                id="madrid1"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Madrid
            </label>
          </li>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="boston1"
              className="text-lg w-full cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                id="boston1"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Boston
            </label>
          </li>
        </ul>
      </div>
      <div className="border-b border-gray-400">
        <h1 className="text-xl text-gray-800 font-normal mt-6">Salary</h1>
        <div className="flex xl:flex-row flex-col items-center justify-around mt-4">
          <button
            value="hourly"
            className="text-lg w-full font-light border mb-1 xl:mb-0 border-gray-200 px-5 py-2 rounded-md cursor-pointer focus:bg-[#3575E2] focus:text-white hover:bg-[#3575E2] hover:text-white"
          >
            Hourly
          </button>
          <button
            value="monthly"
            className="text-lg w-full font-light border mb-1 xl:mb-0 border-gray-200 px-5 py-2 rounded-md cursor-pointer focus:bg-[#3575E2] focus:text-white hover:bg-[#3575E2] hover:text-white"
          >
            Monthly
          </button>
          <button
            value="yearly"
            className="text-lg w-full font-light border mb-1 xl:mb-0 border-gray-200 px-5 py-2 rounded-md cursor-pointer focus:bg-[#3575E2] focus:text-white hover:bg-[#3575E2] hover:text-white"
          >
            Yearly
          </button>
        </div>
        <ul className="flex flex-col gap-4 mt-4">
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="any1"
              className="text-lg w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="any1"
                className="absolute h-0 w-0 input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Any
            </label>
          </li>
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="3k1"
              className="text-lg w-full cursor-pointer text-gray-700 selection:not-sr-only flex items-center"
            >
              <input
                type="checkbox"
                id="3k1"
                className="absolute h-0 w-0 input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <IoIosArrowBack className="inline-block " size={15} />{" "}
              <span>30000 K</span>
            </label>
          </li>
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="5k1"
              className="text-lg w-full cursor-pointer text-gray-700 selection:not-sr-only flex items-center"
            >
              <input
                type="checkbox"
                id="5k1"
                className="absolute h-0 w-0 input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <IoIosArrowBack className="inline-block " size={15} />{" "}
              <span>50000 K</span>
            </label>
          </li>
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="8k1"
              className="text-lg w-full cursor-pointer text-gray-700 selection:not-sr-only flex items-center"
            >
              <input
                type="checkbox"
                id="8k1"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <IoIosArrowBack className="inline-block " size={15} />{" "}
              <span>80000 K</span>
            </label>
          </li>
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="10k1"
              className="text-lg w-full cursor-pointer text-gray-700 selection:not-sr-only flex items-center"
            >
              <input
                type="checkbox"
                id="10k1"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <IoIosArrowBack className="inline-block" size={15} />{" "}
              <span>100000 K</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="border-b border-gray-400">
        <h1 className="text-xl text-gray-800 font-normal mt-6">
          Date of posting
        </h1>
        <ul className="flex flex-col gap-4 mt-4">
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="alltime1"
              className="text-lg w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="alltime1"
                className="absolute h-0 w-0 input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              All time
            </label>
          </li>
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="last24h1"
              className="text-lg w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="last24h1"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Last 24 hours
            </label>
          </li>
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="lastW1"
              className="text-lg w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="lastW1"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Last Week
            </label>
          </li>
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="lastM1"
              className="text-lg w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="lastM1"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Last Nonth
            </label>
          </li>
        </ul>
      </div>
      <div className="border-b border-gray-400">
        <h1 className="text-xl text-gray-800 font-normal mt-6">
          Work experience
        </h1>
        <ul className="flex flex-col gap-4 mt-4">
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="anyex1"
              className="text-lg w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="anyex1"
                className="absolute h-0 w-0 input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Any experience
            </label>
          </li>
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="internship1"
              className="text-lg w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="internship1"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <span>Internship</span>
            </label>
          </li>
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="workrem2"
              className="text-lg w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="workrem2"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <span>Work remotely</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="border-b border-gray-400">
        <h1 className="text-xl text-gray-800 font-normal mt-6">
          Type of emloyment
        </h1>
        <ul className="flex flex-col gap-4 mt-4">
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="anyti1"
              className="text-lg w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="anyti1"
                className="absolute h-0 w-0 input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Any
            </label>
          </li>
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="fulltime1"
              className="text-lg w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="fulltime1"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <span>Full time</span>
            </label>
          </li>
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="workrem1"
              className="text-lg w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="workrem1"
                className="absolute h-0 w-0   input"
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <span>Temporary</span>
            </label>
          </li>
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="part-time1"
              className="text-lg w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="checkbox"
                id="part-time1"
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

export default SideFilter;
