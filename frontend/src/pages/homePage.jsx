import "../index.css";
import { IoSearchOutline } from "react-icons/io5";
import { GiPositionMarker } from "react-icons/gi";
import FilterComp from "../components/filterComp";
import JobsComp from "../components/jobsComp";
import ResumeCom from "../components/ResumeCom";
import { useEffect, useState } from "react";
import JobComp from "../components/JobComp";
import { FiDatabase } from "react-icons/fi";

function homePage() {
  const [filter, setFilter] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  // handle filter menu
  const handleFilter = () => {
    setFilter(!filter);
  };

  // handle Input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    fetch("Jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  // filter jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // radio filtering
  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // button handle filtering
  const handleButtonFiltering = (e) => {
    setSelectedCategory(e.target.value);
  };

  // main function
  const filteredData = (jobs, selected, query) => {
    let fitleredJobs = jobs;

    // filtering input items
    if (query) {
      fitleredJobs = filteredItems;
    }

    // category filtering
    if (selected) {
      fitleredJobs = fitleredJobs.filter(
        ({
          jobLocation,
          postingDate,
          experienceLevel,
          employmentType,
          salaryType,
          maxPrice,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= selected||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          postingDate >= selected ||
          experienceLevel.toLowerCase() === selected.toLowerCase()
      );
    }
    return fitleredJobs.map((data, idx) => <JobComp key={idx} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

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
              onChange={handleInputChange}
              value={query}
            />
          </div>
          <div className="md:w-1/2 w-full flex items-center">
            <div className="w-full h-14 px-4 shadow-sm border border-gray-200 flex items-center gap-2 rounded-l-md">
              <GiPositionMarker
                size={30}
                className="text-gray-500 cursor-pointer"
              />
              <input
                type="search"
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
          <FilterComp
            handleRadioChange={handleRadioChange}
            handleButtonFiltering={handleButtonFiltering}
          />
          <JobsComp
            handleRadioChange={handleRadioChange}
            handleButtonFiltering={handleButtonFiltering}
            handleFilter={handleFilter}
            filter={filter}
            result={result}
          />
          <ResumeCom />
        </div>
      </div>
    </div>
  );
}

export default homePage;
