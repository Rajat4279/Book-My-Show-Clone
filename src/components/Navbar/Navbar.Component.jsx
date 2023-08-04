import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const NavSm = () => {
    return (
      <>
        <div className="text-white flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">It All Starts Here!</h3>
            <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
              Kanpur, U.P <BiChevronDown />
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <Link
              to={`/plays`}
              className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white"
            >
              Plays
            </Link>
            <BiSearch className="flex items-center w-5 h-5" />
          </div>
        </div>
      </>
    );
  };

  const NavMd = () => {
    return (
      <>
        <div className="w-full flex mx-auto px-4 items-center gap-4 justify-between">
          <div className="w-10 h-10">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-2/3 flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="Search"
              placeholder="Search from movies, event, plays, sports and activities"
              className="w-full bg-transparent border-none focus:outline-none"
            />
          </div>
          <div className="flex align-center justify-center">
            <Link
              to={`/plays`}
              className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white"
            >
              Plays
            </Link>
          </div>
        </div>
      </>
    );
  };

  const NavLg = () => {
    return (
      <>
        <div className="container flex mx-auto px-1 items-center justify-between">
          <div className="flex items-center w-1/2 gap-4">
            <div className="w-10 h-10">
              <img
                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
            <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
              <BiSearch />
              <input
                type="Search"
                placeholder="Search from movies, event, plays, sports and activities"
                className="w-full bg-transparent border-none focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to={`/plays`}
              className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white"
            >
              Plays
            </Link>
            <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
              Kanpur , U.P <BiChevronDown />
            </span>
            <button className="bg-red-600 text-white px-2 py-1 text-small rounded">
              Sign In
            </button>
            <div className="w-8 h-8 text-white">
              <BiMenu className="w-full h-full " />
            </div>
          </div>
        </div>
      </>
    );
  };

  //Main Component
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* mobile screen Navbar */}
      <div className="md:hidden">
        <NavSm />
      </div>
      {/* tablet screen Navbar */}
      <div className="hidden md:flex justify-between lg:hidden">
        <NavMd />
      </div>
      {/* laptop screen Navbar */}
      <div className="hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default Navbar;
