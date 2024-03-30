import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function MyJobsPage() {
  return (
    <div className="flex max-w-[1060px] text-center m-auto flex-col gap-7 py-[70px] sm:px-5">
      <h1 className="text-2xl text-gray-600 font-medium">All My Jobs</h1>
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
      <div className="shadow-md md:p-6 sm:p-3 px-1 py-3 rounded-md">
        <div className="flex items-center justify-between my-3">
          <h1 className="text-xl font-medium">All Jobs</h1>
          <Link to={'/post-job'} className="bg-[#3575E2] text-white md:text-lg text-sm rounded-xl font-bold px-4 py-2">
            POST A NEW JOB
          </Link>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="border-t border-b">
              <th className="py-5 text-sm sm:text-lg">NO.</th>
              <th className="text-sm sm:text-lg">TITLE</th>
              <th className="text-sm sm:text-lg">COMAPNY</th>
              <th className="text-sm sm:text-lg">SALARY</th>
              <th className="text-sm sm:text-lg">EDIT</th>
              <th className="text-sm sm:text-lg">DELETE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b sm:border-none">
              <td className="py-5 font-semibold md:text-lg text-sm">1</td>
              <td className="md:text-lg text-sm font-normal text-gray-800">
                UI/UX Designer
              </td>
              <td className="md:text-lg text-sm font-normal text-gray-800">
                Rycast corp
              </td>
              <td className="md:text-lg text-sm font-normal text-gray-800">
                $70 - $80K
              </td>
              <td>
                <a
                  href="#"
                  className="border rounded-sm md:px-6 px-2 py-2 md:text-lg text-sm font-mono"
                >
                  Edite
                </a>
              </td>
              <td>
                <a
                  href="#"
                  className="text-white bg-red-600 md:text-lg text-sm py-2 md:px-6 px-2 rounded-sm font-semibold"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr className="border-b sm:border-none">
              <td className="py-5 font-semibold md:text-lg text-sm">2</td>
              <td className="md:text-lg text-sm font-normal text-gray-800">
                DevOps Engineer
              </td>
              <td className="md:text-lg text-sm font-normal text-gray-800">
                Tranline group
              </td>
              <td className="md:text-lg text-sm font-normal text-gray-800">
                $80 - $120K
              </td>
              <td>
                <a
                  href="#"
                  className="border rounded-sm md:px-6 px-2 py-2 md:text-lg text-sm font-mono"
                >
                  Edite
                </a>
              </td>
              <td>
                <a
                  href="#"
                  className="text-white bg-red-600 md:text-lg text-sm py-2 md:px-6 px-2 rounded-sm font-semibold"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr className="border-b sm:border-none">
              <td className="py-5 font-semibold md:text-lg text-sm">3</td>
              <td className="md:text-lg text-sm font-normal text-gray-800">
                Software Developer L1
              </td>
              <td className="md:text-lg text-sm font-normal text-gray-800">
                Linear Company
              </td>
              <td className="md:text-lg text-sm font-normal text-gray-800">
                $60 - $90K
              </td>
              <td>
                <a
                  href="#"
                  className="border rounded-sm md:px-6 px-2 py-2 md:text-lg text-sm font-mono"
                >
                  Edite
                </a>
              </td>
              <td>
                <a
                  href="#"
                  className="text-white bg-red-600 md:text-lg text-sm py-2 md:px-6 px-2 rounded-sm font-semibold"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyJobsPage;
