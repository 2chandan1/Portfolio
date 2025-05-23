import React from "react";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 z-50 bg-base-100 shadow-md">
      {/* Mobile Menu */}
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <a href={`#${section}`} className="capitalize">
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Logo or Name */}
      <div className="navbar-end lg:navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Chandan</a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <a href={`#${section}`} className="capitalize">
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
