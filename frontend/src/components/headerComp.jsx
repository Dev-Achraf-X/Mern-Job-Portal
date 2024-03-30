import React, { useState } from "react";
import HeaderMenu from "../lib/HeaderMenu";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import headLinks from "../../public/HeaderLinks.js";
import { Link, NavLink } from "react-router-dom";

function HeaderComp() {
  const [openMenu, setOpenMenu] = useState(false);
  const [authUser, setAuthUser] = useState(false);

  return (
    <header className="flex max-w-[1460px] m-auto justify-between items-center py-5 w-full mx-auto sm:px-5">
      <div>
        <a href="/" className="flex items-center gap-3 w-40">
          <svg
            xmlns="http://www.w3.org/200/svg"
            width={"29"}
            height={"30"}
            viewBox="0 0 29 30"
            fill="done"
          >
            <circle
              cx={"12.0143"}
              cy={"12.5143"}
              r={"12.0143"}
              fill="#3575E2"
              fillOpacity={".4"}
            />
            <circle cx={"16.975"} cy={"17.4857"} r={"12.0143"} fill="#3575E2" />
          </svg>
          <span className="text-2xl text-gray-950 font-medium">JobPortal</span>
        </a>
      </div>
      <nav className="flex items-center justify-center ">
        {!openMenu ? (
          <ul className={`md:grid hidden grid-cols-4 lg:gap-5  text-center`}>
            {headLinks.map((link) => (
              <li
                key={link.id}
                className="lg:text-xl text-md text-gray-700 font-normal cursor-pointer hover:text-[#3575E2] hover:opacity-80 transition-all"
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
        ) : null}
      </nav>

      {authUser ? (
        <div className="flex items-center justify-end lg:gap-5 gap-2">
          <a href="#" className="lg:w-12 w-8 lg:h-12 h-8">
            <img
              src="/images/Loom.png"
              alt="logo"
              className="rounded-full size-full bg-cover"
            />
          </a>
          <button className="border-gray-200 border rounded-md py-2 px-4 lg:text-xl text-sm text-gray-700 hover:bg-[#3574e2] hover:text-white transition-all ">
            Logout
          </button>
          {!openMenu ? (
            <HiOutlineMenuAlt3
              size={36}
              className="cursor-pointer md:hidden inline-block mx-3 hover:text-[#3575E2] focus:text-[#3575E2] transition-all"
              onClick={() => {
                setOpenMenu(true);
              }}
            />
          ) : (
            <HeaderMenu setOpenMenu={setOpenMenu} />
          )}
        </div>
      ) : (
        <div className="flex items-center sm:gap-5 gap-1">
          <Link
            to={"/login"}
            className="border-gray-200 border rounded-md py-2 sm:px-4 px-2 lg:text-xl text-sm  text-gray-700 hover:bg-[#3574e2] hover:text-white transition-all "
          >
            Log in
          </Link>
          <Link
            to={"/sign-up"}
            className="rounded-md py-2 sm:px-4 px-2 lg:text-xl text-sm bg-[#3574e2] text-white transition-all "
          >
            Sign up
          </Link>
          {!openMenu ? (
            <HiOutlineMenuAlt3
              size={36}
              className="cursor-pointer md:hidden inline-block mx-3 hover:text-[#3575E2] focus:text-[#3575E2] transition-all"
              onClick={() => {
                setOpenMenu(true);
              }}
            />
          ) : (
            <HeaderMenu setOpenMenu={setOpenMenu} />
          )}
        </div>
      )}
    </header>
  );
}

export default HeaderComp;
