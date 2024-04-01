import React from "react";
import { IoIosArrowBack } from "react-icons/io";

function FilterComp({ handleRadioChange, handleButtonFiltering }) {
  const now = new Date();
  const twentyForHourAgo = new Date(now - 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const weekAgo = new Date(now - 24 * 7 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const monthAgo = new Date(now - 24 * 30 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  return (
    <div className="bg-white xl:w-3/12 lg:w-[200px] h-[100vh] overflow-y-auto py-6 px-3 xl:rounded-md shadow-sm hidden lg:block hiddenScrollbar">
      {/* filter by location */}
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
                type="radio"
                id="all"
                name="test"
                className="absolute h-0 w-0 input"
                onChange={handleRadioChange}
                value={""}
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
                type="radio"
                id="london"
                name="test"
                className="absolute h-0 w-0 input"
                onChange={handleRadioChange}
                value="london"
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
                type="radio"
                id="seattle"
                name="test"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value="seattle"
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
                type="radio"
                id="madrid"
                name="test"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"madrid"}
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
                type="radio"
                id="boston"
                name="test"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"boston"}
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Boston
            </label>
          </li>
        </ul>
      </div>
      {/* filter by salary */}
      <div>
        <h1 className="text-xl text-gray-800 font-normal mt-6">Salary</h1>
        <div className="flex xl:flex-row flex-col items-center justify-around mt-4">
          <button
            value="hourly"
            className="text-lg w-full font-light border mb-3 xl:mb-0 border-gray-200 px-2 py-2 rounded-md cursor-pointer focus:bg-[#3575E2] focus:text-white hover:bg-[#3575E2] hover:text-white"
            onClick={handleButtonFiltering}
          >
            Hourly
          </button>
          <button
            value="monthly"
            className="text-lg w-full font-light border mb-3 xl:mb-0 border-gray-200 px-2 py-2 rounded-md cursor-pointer focus:bg-[#3575E2] focus:text-white hover:bg-[#3575E2] hover:text-white"
            onClick={handleButtonFiltering}
          >
            Monthly
          </button>
          <button
            value="yearly"
            className="text-lg w-full font-light border mb-3 xl:mb-0 border-gray-200 px-2 py-2 rounded-md cursor-pointer focus:bg-[#3575E2] focus:text-white hover:bg-[#3575E2] hover:text-white"
            onClick={handleButtonFiltering}
          >
            Yearly
          </button>
        </div>
        <ul className="flex flex-col gap-2 mt-4">
          <li className="w-full Container pl-5 relative">
            <label
              htmlFor="any"
              className="text-xl w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="radio"
                id="any"
                name="test"
                className="absolute h-0 w-0 input"
                onChange={handleRadioChange}
                value={""}
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Any
            </label>
          </li>
          <li className="w-full Container xl:pl-8 pl-5 relative">
            <label
              htmlFor="3k"
              className="xl:text-xl text-[16px] w-full cursor-pointer text-gray-700 selection:not-sr-only"
            >
              <input
                type="radio"
                id="3k"
                name="test"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"30"}
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <IoIosArrowBack className="inline-block " size={15} />{" "}
              <span>30000 K</span>
            </label>
          </li>
          <li className="w-full Container xl:pl-8 pl-5 relative">
            <label
              htmlFor="5k"
              className="xl:text-xl text-[16px] w-full cursor-pointer text-gray-700"
            >
              <input
                type="radio"
                id="5k"
                name="test"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"50"}
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <IoIosArrowBack className="inline-block " size={15} />{" "}
              <span>50000 K</span>
            </label>
          </li>
          <li className="w-full Container xl:pl-8 pl-5 relative">
            <label
              htmlFor="8k"
              className="xl:text-xl text-[16px] w-full cursor-pointer text-gray-700"
            >
              <input
                type="radio"
                id="8k"
                name="test"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"80"}
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <IoIosArrowBack className="inline-block " size={15} />{" "}
              <span>80000 K</span>
            </label>
          </li>
          <li className="w-full Container xl:pl-8 pl-5 relative">
            <label
              htmlFor="10k"
              className="xl:text-xl text-[16px] w-full cursor-pointer text-gray-700"
            >
              <input
                type="radio"
                id="10k"
                name="test"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"100"}
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <IoIosArrowBack className="inline-block" size={15} />{" "}
              <span>100000K</span>
            </label>
          </li>
        </ul>
      </div>
      {/* filter by data postin */}
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
                type="radio"
                id="alltime"
                name="test"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={""}
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
                type="radio"
                id="last24h"
                name="test"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={twentyForHourAgo}
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
                type="radio"
                id="lastW"
                name="test"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={weekAgo}
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
                type="radio"
                id="lastM"
                name="test"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={monthAgo}
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              Last Nonth
            </label>
          </li>
        </ul>
      </div>
      {/* filter by work experience */}
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
                type="radio"
                id="anyex"
                name="test"
                className="absolute h-0 w-0 input"
                onChange={handleRadioChange}
                value={""}
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
                type="radio"
                id="internship"
                name="test"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"Internship"}
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
                type="radio"
                id="workrem"
                name="test"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"work remotely"}
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <span>Work remotely</span>
            </label>
          </li>
        </ul>
      </div>
      {/* filter by type of employment */}
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
                type="radio"
                id="anyti"
                name="test"
                className="absolute h-0 w-0 input"
                onChange={handleRadioChange}
                value={""}
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
                type="radio"
                id="fulltime"
                name="test"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"full-time"}
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
                type="radio"
                id="temporary"
                name="test"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"temporary"}
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
                type="radio"
                id="partTime"
                name="test"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"part-time"}
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
