import Header from "./Header";
import useNowPlayingMoveis from "../Hooks/useNowPlayingMovies"

const Browse = () => {

  useNowPlayingMoveis();

  return (
    <div>
      <Header />
      Browse
    </div>
  );
};

export default Browse;
