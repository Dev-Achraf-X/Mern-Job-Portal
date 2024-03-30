import React from "react";

function PostJob() {
  return (
    <div className="flex max-w-[1060px] text-center mx-auto sm:my-24 my-12 flex-col gap-7 sm:py-[40px] sm:px-5 px-2 bg-[#fafafa]">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 sm:gap-y-8 gap-y-4 sm:grid-cols-6">
              <div className="sm:col-span-3 ">
                <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                  Job Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="Web Developer"
                    className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 outline-none"
                  />
                </div>
              </div>

              <div className="sm:col-span-3 ">
                <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                  Company Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Ex:Microsoft"
                    className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 outline-none"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                  Minimum Salary
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="number"
                    min={0}
                    placeholder="$20K"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 outline-none"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                  Maximum Salary
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="number"
                    min={0}
                    placeholder="$100K"
                    className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 outline-none"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                  Salary Type
                </label>
                <div className="mt-2">
                  <select
                    id="salaryType"
                    name="salaryType"
                    className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 outline-none"
                  >
                    <option>Hourly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                  Job Location
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 outline-none"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                    <option>Morocco</option>
                    <option>Japan</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                  Experience Level
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 outline-none"
                  >
                    <option>Any experience</option>
                    <option>Work remotely</option>
                    <option>Intership</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                  Required Skill Sets
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 outline-none"
                  >
                    <option>Hosting</option>
                    <option>Javascript</option>
                    <option>ReactJS</option>
                    <option>TailwindCSS</option>
                    <option>NodeJS</option>
                    <option>Python</option>
                    <option>PHP</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                  Company Logo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                    alt="logo"
                    className="w-16 h-16 rounded-full"
                  />
                  <label
                    htmlFor="company-logo"
                    className="block text-left text-sm font-medium leading-6 text-gray-900 cursor-pointer border px-4 py-2 rounded-md shadow-sm"
                  >
                    Select Logo
                  </label>
                  <input
                    type="file"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 absolute -z-10 w-0.5 h-0.5 opacity-0"
                    id="company-logo"
                    name="company-logo"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                  Employment Type
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 outline-none"
                  >
                    <option>Full Time</option>
                    <option>Temporary</option>
                    <option>Part Time</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-full">
                <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                  Job Description
                </label>
                <div className="mt-2">
                  <textarea
                    type="text"
                    className="rounded-sm w-full bg-white px-2.5 py-1.5 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="company-logo"
                    name="company-logo"
                  ></textarea>
                </div>
              </div>

              <div className="sm:col-span-full">
                <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                  Job Posted By
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    className="rounded-sm w-full bg-white px-2.5 py-1.5 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 outline-none"
                    placeholder="Your Email"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center sm:justify-end justify-center gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            POST
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostJob;
