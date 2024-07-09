import { useState } from "react";

export const SearchBar = () => {
  const [text, setText] = useState<string>("");
  console.log(text);

  const onInputChange = () => {
    const inputField = document.getElementById("quoteSearch");
    if (inputField) {
      setText((inputField as HTMLInputElement).value);
    } else {
      setText("");
    }
  };

  return (
    <div className="w-3/12 flex flex-row space-x-1">
      <input
        type="text"
        id="quoteSearch"
        className="w-full p-2 pl-4 text-white bg-gray-900 border border-gray-600 rounded-full  focus:outline-4 focus:outline-none"
        placeholder="Search stock quote..."
        onChange={onInputChange}
      />
      <button>
        <div className="text-white border border-gray-600 rounded-md pl-2 pr-2">
          Search
        </div>
      </button>
    </div>
  );
};
