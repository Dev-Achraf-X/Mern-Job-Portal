import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import headLinks from "../../public/HeaderLinks.js";
import { NavLink } from "react-router-dom";

function HeaderMenu({ setOpenMenu }) {
  return (
    <div className="w-full h-1/2 md:hidden block bg-gray-800 float-end rounded-md border border-gray-300 absolute top-5 right-0 transition-all">
      <i className="w-full flex justify-end p-2">
        <IoCloseCircleSharp
          size={30}
          className="text-[#3575E2] cursor-pointer"
          onClick={() => {
            setOpenMenu(false);
          }}
        />
      </i>
      <ul className="flex flex-col gap-8 pl-7 mt-10">
        {headLinks.map((link) => (
          <li
            key={link.id}
            className="text-xl text-gray-300 list-decimal font-medium cursor-pointer hover:text-[#3575E2] hover:opacity-80 transition-all border-b pb-3"
            onClick={() => setOpenMenu(false)}
          >
            <NavLink
              to={link.hrefL}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderMenu;
