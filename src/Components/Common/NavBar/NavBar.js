import { NavbarLinks } from "../../../Data/NavbarLinks";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
const NavBar = () => {
  const location = useLocation();
  const token = null;
  const matchRoute = (path) => {
    return path === location.pathname;
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="z-40 bg-white fixed flex max-md:flex-col max-md:items-center w-full py-3 px-5 shadow-[0px_3px_12px_rgb(128,128,128)]">
      <div className="w-full  md:w-1/4 mb-3 md:mb-0 flex items-center justify-between">
        <Link to={"/"}>
          <img
            alt="loading..."
            src="https://res.cloudinary.com/do4vytmxm/image/upload/v1695803892/images/Logo_ev7w4u.png"
          ></img>
        </Link>
        {/* Sidebar Button */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleSidebar}
        >
          {!sidebarOpen ? (
            <FaBars></FaBars>
          ) : (
            <p className="text-xl">
              <RxCross2></RxCross2>
            </p>
          )}
        </button>
      </div>

      {/* Sidebar Content */}
      <div
        className={`w-full    md:w-3/4 mb-3 md:mb-0 ${
          sidebarOpen ? "block" : "hidden md:flex"
        } flex justify-evenly items-center max-md:flex-col`}
      >
        {/* Navbar Links */}
        <div className="flex  flex-wrap gap-3 justify-center md:justify-evenly">
          {NavbarLinks?.map((val, index) => {
            return (
              <div
                key={index}
                className={`py-2 px-3 ${
                  matchRoute(val.path)
                    ? "text-yellow-50 bg-blue-700 py-2 px-3 rounded-lg transition-all duration-300 "
                    : "hover:text-blue-800"
                }`}
              >
                <Link to={`${val.path}`}>{val.title}</Link>
              </div>
            );
          })}
        </div>

        {/* Login and Signup Buttons */}
        <div className="flex flex-wrap justify-center gap-5 items-center ">
          {token === null && (
            <Link to="/login">
              <div
                className={`py-2 px-3 text-black rounded-lg border border-gray-400 transition-all duration-200 
           ${
             matchRoute("/login")
               ? "bg-blue-600 text-white"
               : "hover:border hover:border-blue-500 hover:text-blue-600"
           }
          `}
              >
                Login{" "}
              </div>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <div
                className={`py-2 px-3 text-black rounded-lg border border-gray-400 transition-all duration-200 
              
           ${
             matchRoute("/signup")
               ? "bg-blue-600 text-white"
               : "hover:border hover:border-blue-500 hover:text-blue-600"
           }
          `}
              >
                Sign Up{" "}
              </div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
