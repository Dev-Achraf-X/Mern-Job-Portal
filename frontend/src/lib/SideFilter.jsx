import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoCloseCircleSharp } from "react-icons/io5";

function SideFilter({
  handleButtonFiltering,
  handleRadioChange,
  handleFilter,
}) {
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
    <div className="bg-white md:w-4/12 w-6/12 h-[100vh] overflow-auto  py-3 px-1 rounded-md shadow-xl lg:hidden block absolute top-0 left-0 hiddenScrollbar border border-l-0 border-gray-300">
      <div className="border-b border-gray-400">
        <div className="flex items-center justify-between ">
          <h1 className="text-2xl mb-3 font-semibold">Filters</h1>
          <IoCloseCircleSharp
            size={36}
            className="text-[#3575E2]"
            onClick={handleFilter}
          />
        </div>
        <ul className="flex flex-col gap-2">
          <p className="mb-3 text-xl text-gray-800">Location</p>
          <li className="w-full Container pl-8 relative">
            <label
              htmlFor="all1"
              className="text-lg w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="radio"
                name="test"
                id="all1"
                className="absolute h-0 w-0 input"
                onChange={handleRadioChange}
                value={""}
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
                type="radio"
                name="test"
                id="london1"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"london"}
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
                type="radio"
                name="test"
                id="seattle1"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"seattle"}
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
                type="radio"
                name="test"
                id="madrid1"
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
              htmlFor="boston1"
              className="text-lg w-full cursor-pointer text-gray-700"
            >
              <input
                type="radio"
                name="test"
                id="boston1"
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
      <div className="border-b border-gray-400">
        <h1 className="text-xl text-gray-800 font-normal mt-6">Salary</h1>
        <div className="flex xl:flex-row flex-col items-center justify-around mt-4">
          <button
            value="hourly"
            className="text-lg w-full font-light border mb-1 xl:mb-0 border-gray-200 px-5 py-2 rounded-md cursor-pointer focus:bg-[#3575E2] focus:text-white hover:bg-[#3575E2] hover:text-white"
            onClick={handleButtonFiltering}
          >
            Hourly
          </button>
          <button
            value="monthly"
            className="text-lg w-full font-light border mb-1 xl:mb-0 border-gray-200 px-5 py-2 rounded-md cursor-pointer focus:bg-[#3575E2] focus:text-white hover:bg-[#3575E2] hover:text-white"
            onClick={handleButtonFiltering}
          >
            Monthly
          </button>
          <button
            value="yearly"
            className="text-lg w-full font-light border mb-1 xl:mb-0 border-gray-200 px-5 py-2 rounded-md cursor-pointer focus:bg-[#3575E2] focus:text-white hover:bg-[#3575E2] hover:text-white"
            onClick={handleButtonFiltering}
          >
            Yearly
          </button>
        </div>
        <ul className="flex flex-col gap-4 mt-4">
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="any1"
              className="text-lg w-full cursor-pointer text-gray-700  selection:not-sr-only"
              onChange={handleRadioChange}
              value={""}
            >
              <input
                type="radio"
                name="test"
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
                type="radio"
                name="test"
                id="3k1"
                className="absolute h-0 w-0 input"
                onChange={handleRadioChange}
                value={"30"}
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
                type="radio"
                name="test"
                id="5k1"
                className="absolute h-0 w-0 input"
                onChange={handleRadioChange}
                value={"50"}
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
                type="radio"
                name="test"
                id="8k1"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"80"}
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
                type="radio"
                name="test"
                id="10k1"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"100"}
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
                type="radio"
                name="test"
                id="alltime1"
                className="absolute h-0 w-0 input"
                onChange={handleRadioChange}
                value={""}
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
                type="radio"
                name="test"
                id="last24h1"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={twentyForHourAgo}
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
                type="radio"
                name="test"
                id="lastW1"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={weekAgo}
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
                type="radio"
                name="test"
                id="lastM1"
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
                type="radio"
                name="test"
                id="anyex1"
                className="absolute h-0 w-0 input"
                onChange={handleRadioChange}
                value={""}
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
                type="radio"
                name="test"
                id="internship1"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"internship"}
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
                type="radio"
                name="test"
                id="workrem2"
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
                type="radio"
                name="test"
                id="anyti1"
                className="absolute h-0 w-0 input"
                onChange={handleRadioChange}
                value={""}
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
                type="radio"
                name="test"
                id="fulltime1"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"full-time"}
              />
              <span className="absolute top-1 left-0 h-5 w-5 bg-[#dbdbdb] rounded-full checkmark"></span>
              <span>Full time</span>
            </label>
          </li>
          <li className="w-full Container pl-6 relative">
            <label
              htmlFor="temporary1"
              className="text-lg w-full cursor-pointer text-gray-700  selection:not-sr-only"
            >
              <input
                type="radio"
                name="test"
                id="temporary1"
                className="absolute h-0 w-0   input"
                onChange={handleRadioChange}
                value={"temporary"}
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
                type="radio"
                name="test"
                id="part-time1"
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

export default SideFilter;
