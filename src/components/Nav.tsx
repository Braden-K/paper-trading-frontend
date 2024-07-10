import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { useState } from "react";

export const Nav = () => {
  return (
    <div className="w-full h-16 bg-gray-900">
      <nav className="h-full flex items-center justify-between px-4">
        <div className="text-white">Paper Trading</div>
        <SearchBar />
        <ul className="flex space-x-7">
          <li className="text-gray-200">
            <Link to="/research">Research</Link>
          </li>
          <li className="text-gray-200">
            <Link to="/">Positions</Link>
          </li>
          <li className="text-gray-200">Settings</li>
        </ul>
      </nav>
    </div>
  );
};
