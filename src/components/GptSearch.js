import React from "react";
import { background } from "../utils/constants";  
import { useSelector } from "react-redux";
import lang from "./languageConstants";

const GptSearch = () => {
  const langSelected = useSelector((store)=> store.config.lang)
  
  return (
    <div className="flex justify-center">
      <div className="bg-black w-6/12 absolute top-[30%] z-10">
        <input
          placeholder={lang[langSelected]?.GptPlaceholder}
          className="p-2 pl-4 w-10/12 rounded-lg h-14"
        />
        <button className="p-2 text-white rounded-lg bg-red-600 w-2/12 h-14">
          {lang[langSelected]?.search}
        </button>
      </div>
      <img alt="background cover" src={background} className="opacity-50" />
    </div>
  );
};

export default GptSearch;
