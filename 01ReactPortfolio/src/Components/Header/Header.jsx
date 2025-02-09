import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="flex justify-center bg-white text-black w-screen h-14 sticky shadow-lg z-50 top-0">
      <div className="flex justify-between px-2 sm:px-4 w-screen xl:w-7xl">
        {/* logo */}
        <div className="">
          <Link to={"#"}>
            <img src={logo} alt="my_logo" className="h-full" />
          </Link>
        </div>

        {/* Navbar */}
        <div className="flex items-center">
          <nav>
            <ul className="hidden sm:flex items-center justify-between gap-2 sm:text-base sm:gap-3 md:text-lg md:gap-10">
              {/* Home */}
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-black"}`
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>

              {/* About */}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-black"}`
                  }
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>

              {/* Contact */}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-black"}`
                  }
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>

              {/* Github */}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-black"}`
                  }
                  to={"/github"}
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* LogIn & Get Started */}

        <div className="flex gap-1 items-center ">
          <button className="text-base sm:text-lg sm:px-2 sm:py-1 rounded-md hover:bg-gray-300">
            <Link to={"/contact"}>Log in</Link>
          </button>

          <button className="text-base px-1 py-0.5 sm:text-lg bg-orange-700 hover:bg-orange-800 sm:px-2 sm:py-1 rounded-md ">
            <Link to={"/about"}>Get started</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
