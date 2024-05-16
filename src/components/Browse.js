import Header from "./Header";
import useNowPlayingMoveis from "../Hooks/useNowPlayingMovies"
import MainContainer from ".//MainContainer.js"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {

  useNowPlayingMoveis();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
