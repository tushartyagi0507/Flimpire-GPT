
import { useDispatch } from "react-redux";
import { addTopRatedMovies} from "../utils/movieSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { API_options } from "../utils/constants";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();

  const topRatedMovies = useSelector((store)=> store.movies.topRatedMovies)

const getTopRatedMovies = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?page=1",
    API_options
  );
  const json = await data.json();
  // console.log(json.results);
  dispatch(addTopRatedMovies(json.results))
};

useEffect( ()=>{
!topRatedMovies &&  getTopRatedMovies();
}, []);
}

export default useTopRatedMovies;