import setBody from "@/utils/setFilterBy";
import { useState } from "react"
import { SearchOutline, SearchSharp } from "react-ionicons";

export default function SearchInput({ setSearchValue, placeholder }) {
  const [inputValue, setInputValue] = useState("")

  function clearInput() {
    setInputValue("")
    setSearchValue({})
  }

  return (
    <div className="flex justify-center items-center w-full gap-2">
      <div className="border border-[#a9ec05] rounded-full shadow-sm w-full relative">
        <input
          type="text"
          placeholder={placeholder}
          className="px-4 p-2 outline-none w-full font-semibold"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="p-2 px-4 text-center rounded-full shadow-sm bg-primary-500 cursor-pointer absolute right-0 hover:bg-secondary-500"
          onClick={() => setSearchValue({ [setBody(inputValue)]: inputValue })}
        >
          <SearchSharp
            color="#FFFF"
            width="25px"
            heigth="25px"
          />
        </button>
      </div>
      <div className={inputValue !== "" ? 'block' : `hidden`}>
        <button
          className="px-4 p-2 rounded-lg bg-slate-200 cursor-pointer font-medium"
          onClick={() => clearInput()}
        >
          Limpar
        </button>
      </div>
    </div>
  );
}
