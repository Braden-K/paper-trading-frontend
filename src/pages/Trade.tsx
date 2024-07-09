import { useLocation } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";

export const Trade = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const symbol = params.get("symbol");

  return (
    <div className="w-full h-screen bg-gray-800 justify-center align-middle text-white">
      <SearchBar />
    </div>
  );
};
