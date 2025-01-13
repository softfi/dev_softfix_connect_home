import React, { useState } from "react";
import headerLogo from "../assets/header-logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [helpDropdown, setHelpDropdown] = useState(false);
  const [signInDropdown, setSignInDropdown] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center view-port">
        {/* Logo Section */}

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 items-center transition-all">
          <div className="flex items-center space-x-2 mx-3">
            <img
              src={headerLogo}
              alt="Microsoft Logo"
              className="h-6 cursor-pointer"
              onClick={() => navigate("/")}
            />
            {/* <span className="text-lg font-semibold text-gray-800">softFix</span> */}
          </div>
          <a href="#our-team" className="text-gray-600 hover:text-violet-600">
            Our Team
          </a>
          <a
            className="text-gray-600 hover:text-violet-600 cursor-pointer"
            onClick={() => navigate("/features")}
          >
            Features
          </a>
          <a href="#aboutus" className="text-gray-600 hover:text-violet-600">
            About Us
          </a>
          {/* Get Help Dropdown */}
          <div className="relative">
            <button
              onClick={() => setHelpDropdown(!helpDropdown)}
              className="text-gray-600 hover:text-violet-600 flex items-center"
            >
              Get Help
              <svg
                className="ml-1 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {helpDropdown && (
              <div
                className={`z-20 absolute right-0 mt-2 w-40 bg-black/5 backdrop-blur rounded-lg  shadow-lg transition-all duration-700`}
              >
                <a
                  href="#support"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/50"
                >
                  Support
                </a>
                <a
                  href="#faq"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/50"
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/50"
                >
                  Contact Us
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4 transition-all">
          {/* Host a Meeting */}
          <a
            href="#host-meeting"
            className="text-sm font-medium text-violet-600 hover:underline"
          >
            Host a meeting
          </a>

          {/* Sign In Dropdown */}
          <div className="relative">
            <button
              // onClick={() => setSignInDropdown(!signInDropdown)}
              className="text-sm font-medium text-violet-600 hover:underline flex items-center"
            >
              Sign In
              {/* <svg
                className="ml-1 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg> */}
            </button>
            {/* {signInDropdown && (
              <div className="z-20 absolute right-0 mt-2 w-40 bg-black/5 backdrop-blur rounded-lg shadow-lg transition-all duration-700">
                <a
                  href="#personal-account"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/50"
                >
                  Personal Account
                </a>
                <a
                  href="#business-account"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/50"
                >
                  Business Account
                </a>
                <a
                  href="#login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/50"
                >
                  Login
                </a>
              </div>
            )} */}
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-gray-600 focus:outline-none transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md transition-all">
          <ul className="space-y-2 py-4 px-4">
            <li>
              {" "}
              <a
                href="#our-team"
                className="text-gray-600 hover:text-violet-600"
              >
                Our Team
              </a>
            </li>
            <li>
              <div
                onClick={() => navigate("/features")}
                className="text-gray-600 hover:text-violet-600"
              >
                Features
              </div>
            </li>
            <li>
              <a
                href="#aboutus"
                className="text-gray-600 hover:text-violet-600"
              >
                About Us
              </a>
            </li>
            <li>
              <div className="relative">
                <button
                  onClick={() => setHelpDropdown(!helpDropdown)}
                  className="text-gray-600 hover:text-violet-600 flex items-center"
                >
                  Get Help
                  <svg
                    className="ml-1 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {helpDropdown && (
                  // <div
                  //   className={`z-20 absolute right-0 mt-2 w-40 bg-black/5 backdrop-blur rounded-lg  shadow-lg transition-all duration-700`}
                  // >
                  //   <a
                  //     href="#support"
                  //     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/50"
                  //   >
                  //     Support
                  //   </a>
                  //   <a
                  //     href="#faq"
                  //     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/50"
                  //   >
                  //     FAQ
                  //   </a>
                  //   <a
                  //     href="#contact"
                  //     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/50"
                  //   >
                  //     Contact Us
                  //   </a>
                  // </div>

                  <ul className="my-2 mx-5 space-y-2">
                    <li>
                      <a
                        href="#support"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/50"
                      >
                        Support
                      </a>
                      <li>
                        <a
                          href="#faq"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/50"
                        >
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a
                          href="#contact"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/50"
                        >
                          Contact Us
                        </a>
                      </li>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <a
                href="#host-meeting"
                className="block text-gray-600 hover:text-violet-600"
              >
                Host a meeting
              </a>
            </li>
            <li>
              <a
                href="#sign-in"
                className="block text-gray-600 hover:text-violet-600"
              >
                Sign in
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
