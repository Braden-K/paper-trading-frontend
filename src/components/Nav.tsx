import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { useState } from "react";

export const Nav = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);

  return (
    <div className="w-full h-16 bg-gray-900">
      <nav className="h-full flex items-center justify-between px-4">
        <div className="text-white">Paper Trading</div>
        {showSearch && (
          <>
            <SearchBar />
          </>
        )}
        <ul className="flex space-x-7">
          <li className="text-gray-200">
            <div className="border border-gray-400 rounded-md pl-2 pr-2">
              <button onClick={() => setShowSearch(!showSearch)}>Trade</button>
            </div>
          </li>
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
