import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  const spanClassName = "text-gray-600 lg:text-lg font-[400]";
  const h3ClassName = "font-bold text-gray-700 py-2";
  return (
    // lg:h-70
    <footer className="flex flex-col w-screen border border-black">
      {/* upper side */}
      <div className="bg-white flex justify-between px-6 py-2 items-center">
        {/* upper left */}
        <div>
          <Link to={"/"}>
            <img src={logo} alt="" className="h-20" />
          </Link>
        </div>

        {/* Upper right */}
        <div className="flex">
          {/* Resources */}
          <div className="flex flex-col gap-3 px-3 py-4">
            <h3 className={h3ClassName}>Resources</h3>
            <span className={spanClassName}>
              <Link
                className="relative after:absolute after:content-[''] after:bottom-0 after:left-0 -after:translate-1/2 after:w-full after:h-[1] hover:after:border hover:after:border-black"
                to={"/"}
              >
                Home
              </Link>
            </span>
            <span className={`${spanClassName} `}>
              <Link
                className="relative after:absolute after:content-[''] after:bottom-0 after:left-0 -after:translate-1/2 after:w-full after:h-[1] hover:after:border hover:after:border-black"
                to={"/about"}
              >
                About
              </Link>
            </span>
          </div>

          {/* Follow Me */}
          <div className="flex flex-col gap-3 px-3 py-4">
            <h3 className={h3ClassName}>Follow Me</h3>
            <span className={spanClassName}>
              <Link
                className="relative after:absolute after:content-[''] after:bottom-0 after:left-0 -after:translate-1/2 after:w-full after:h-[1] hover:after:border hover:after:border-black"
                to={"/github"}
              >
                Github
              </Link>
            </span>
            <span className={spanClassName}>
              <Link
                className="relative after:absolute after:content-[''] after:bottom-0 after:left-0 -after:translate-1/2 after:w-full after:h-[1] hover:after:border hover:after:border-black"
                to={"https://www.linkedin.com/in/abhishek-kuntal/"}
              >
                LinkedIn
              </Link>
            </span>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3 px-3 py-4">
            <h3 className={h3ClassName}>LEGAL</h3>
            <span className={spanClassName}>
              <Link
                className="relative after:absolute after:content-[''] after:bottom-0 after:left-0 -after:translate-1/2 after:w-full after:h-[1] hover:after:border hover:after:border-black"
                to={"#"}
              >
                Privacy Policy
              </Link>
            </span>
            <span className={spanClassName}>
              <Link
                className="relative after:absolute after:content-[''] after:bottom-0 after:left-0 -after:translate-1/2 after:w-full after:h-[1] hover:after:border hover:after:border-black"
                to={"#"}
              >
                Terms & Conditions
              </Link>
            </span>
          </div>
        </div>
      </div>

      <hr className=" border-gray-300" />

      {/* lower side */}
      <div className="bg-white flex justify-between items-center lg:py-6 py-4 px-4">
        {/* lower left */}
        <div>
          <span className="text-gray-600">
            © 2023
            <a
              className="relative after:absolute after:content-[''] after:bottom-0 after:left-0 -after:translate-1/2 after:w-full after:h-[1] hover:after:border hover:after:border-black"
              href="https://github.com/abhishiek2002"
            >
              abhishekkuntal
            </a>
            . All Rights Reserved
          </span>
        </div>

        {/* lower right */}
        <div className="flex gap-3">
          <span className="">
            <a href="https://facebook.com/abhishek.kuntal.2002">
              <img
                src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png"
                className="h-4"
                alt=""
              />
            </a>
          </span>
          <span className="">
            <a href="https://discord.com/incognito2126">
              <img
                src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/640/discord-1024.png"
                className="h-4"
                alt=""
              />
            </a>
          </span>
          <span className="">
            <a href="https://x.com/abhishe79043360">
              <img
                src="https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-1024.png"
                className="h-4"
                alt=""
              />
            </a>
          </span>
          <span className="">
            <a href="https://github.com/abhishiek2002">
              <img
                src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png"
                className="h-4"
                alt=""
              />
            </a>
          </span>
          <span className="">
            <a href="#">
              <img
                src="https://cdn3.iconfinder.com/data/icons/social-media-2253/19/Vector-5-1024.png"
                className="h-4"
                alt=""
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
