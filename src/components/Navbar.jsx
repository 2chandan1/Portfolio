import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 z-50 bg-base-100 shadow-md">
      <div className="flex-1 px-2 text-xl font-bold">Chandan</div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-3">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <a href={`#${section}`} className="capitalize">{section}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
