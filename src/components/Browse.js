import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import usePopularMovies from "../Hooks/usePopularMovies"
import MainContainer from ".//MainContainer.js"
import SecondaryContainer from "./SecondaryContainer"
import useTopRatedMovies from "../Hooks/useTopRated..js";
import useUpcomingMovies from "../Hooks/useUpcomingMovies.js";
import GptSearch from "./GptSearch.js";
import { useSelector } from "react-redux";

const Browse = () => {

  const viewGptBar = useSelector((store)=> store.gpt.showGptBar)

  useNowPlayingMovies();
  usePopularMovies();
 useTopRatedMovies();
 useUpcomingMovies();
  return (
    <div>
      <Header />
      {
        viewGptBar ? (<GptSearch/> ): ( <>
        <MainContainer/>
        <SecondaryContainer/>
        </>
        )
      }
    </div>
  );
};

export default Browse;
