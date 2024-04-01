import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { TbWorldUpload } from "react-icons/tb";

function ResumeCom() {
  return (
    <div className="bg-white md:block flex flex-col items-start gap-6 lg:w-4/12 w-full max-h-[100vh] ">
      <div className="flex flex-col w-full  gap-5 py-5 xl:px-3 px-1">
        <div className="flex gap-3 items-center">
          <MdMarkEmailUnread size={30} />
          <h2 className="xl:text-2xl text-xl font-semibold">
            Email me for jobs
          </h2>
        </div>
        <p className="xl:text-xl text-sm text-gray-600 xl:leading-6 leading-4">
          Il y a un problème avec undd article me concernant ouuu concernant une
          personne.
        </p>
        <input
          type="email"
          placeholder="name@email.com"
          className="border w-full border-gray-200 px-3 py-3 outline-none xl:text-lg text-sm"
        />
        <button className="xl:text-xl text-sm w-full bg-[#3575E2] text-white py-3 hover:bg-[#3574e2e0] font-bold">
          Subscribe
        </button>
      </div>
      <div className="flex flex-col w-full gap-5 py-5 xl:px-3 px-1">
        <div className="flex gap-3 items-center md:mt-8">
          <TbWorldUpload size={30} />
          <h2 className="xl:text-2xl text-xl font-semibold">
            Get noticed faster
          </h2>
        </div>
        <p className="xl:text-xl text-sm text-gray-600 leading-6">
          Il y a un problème avec undd article me concernant ouuu concernant une
          personne.
        </p>
        <button className="xl:text-xl text-sm bg-[#3575E2] text-white py-3 hover:bg-[#3574e2e0] font-bold">
          Upload your resume
        </button>
      </div>
    </div>
  );
}

export default ResumeCom;
