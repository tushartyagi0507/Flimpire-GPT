import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import usePopularMovies from "../Hooks/usePopularMovies"
import MainContainer from ".//MainContainer.js"
import SecondaryContainer from "./SecondaryContainer"
import useTopRatedMovies from "../Hooks/useTopRated..js";
import useUpcomingMovies from "../Hooks/useUpcomingMovies.js";
import GptSearch from "./GptSearch.js";
import { useSelector } from "react-redux";
import Footer from "./Footer.js";

const Browse = () => {

  const viewGptBar = useSelector((store)=> store.gpt.showGptBar)

  useNowPlayingMovies();
  usePopularMovies();
 useTopRatedMovies();
 useUpcomingMovies();
  return (
    <div className="overflow-hidden">
      <Header />
      {
        viewGptBar ? (<GptSearch/> ): ( <div className="bg-black">
        <MainContainer/>
        <SecondaryContainer/>
        <Footer/>
        </div>
        )
      }
    </div>
  );
};

export default Browse;
