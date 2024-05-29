import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "./languageConstants";
// import openai from "../utils/openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_options, GEMINI_KEY } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";



const GptSearchBar = () => {
  const [loadingBtn, setLoadingBtn] = useState(null)
  const [Error, setError] = useState(null)
  const genAI = new GoogleGenerativeAI(GEMINI_KEY);
  const dispatch = useDispatch();
  const searchText = useRef(null)
  const langSelected = useSelector((store)=> store.config.lang)
 

  // console.log(GEMINI_KEY)
  const searchMovieTMDB = async (movie) => {
   
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_options
      );
      if (!response.ok) {
        throw new Error("TMDB API request failed");
      }
      const json = await response.json();
      return json.results;
    } catch (error) {
      throw new Error(`Failed to search TMDB for '${movie}'`);
    }
  };

//   const handleSearch = async ()=>{
//     // console.log(serachText.current.value)
// const GptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +
// searchText.current.value +
// ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

//     const chatResponse = await openai.chat.completions.create({
//       messages: [{ role: 'user', content: GptQuery }],
//       model: 'gpt-3.5-turbo',
//     });
// console.log(chatResponse)
//   }

const handleGptSearchClick = async () => {
  setLoadingBtn(true);

  const searchTextValue = searchText.current.value.trim();

  if (!searchTextValue) {
    setError("Please enter a valid movie query");
    setLoadingBtn(false);
    return;
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchTextValue +
      ".only give me names of movies,comma separated like example result given ahead.Example result:Gadar,Sholay,Godzilla,Pathaan,3 Idiots.";
    const result = await model.generateContent(prompt);
    const gptResults = result.response;
    const gptMovies =
      gptResults.candidates?.[0]?.content?.parts?.[0]?.text.split(",");

    setLoadingBtn(false);

    if (!gptMovies) {
      throw new Error("Failed to generate movie suggestions from GPT model.");
    }

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
   console.log(gptMovies)

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  } catch (error) {
    // Handle errors
    console.error("An error occurred:", error.message);
    setError(" Movie recommendations powered by Gemini are unavailable on request due to paid APIs")
  }
}
  return (
    <div className="flex justify-center">
      <div className="bg-black w-6/12 absolute top-[30%] z-10">
        <input
          placeholder={lang[langSelected]?.GptPlaceholder}
          className="p-2 pl-4 w-10/12 rounded-lg h-14"
          ref={searchText}
        />
        <button className="p-2 text-white rounded-lg bg-red-600 w-2/12 h-14"
        onClick={handleGptSearchClick}>
          {loadingBtn ? (
              <div className="w-5 text-center ml-3 md:ml-12 h-5 border-t m border-gray-300 border-solid rounded-full animate-spin"></div>
            ) : (
              lang[langSelected]?.search
            )}
        </button>
  
      </div>
    
    </div>
  );
}

export default GptSearchBar;
