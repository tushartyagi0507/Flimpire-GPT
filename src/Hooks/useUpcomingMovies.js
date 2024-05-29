
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect, useSelector } from "react";
import { API_options } from "../utils/constants";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();

    const upcomingMovies = useSelector((store)=> store.movies.upcomingMovies)
const getUpcomingMovies = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?page=1",
    API_options
  );
  const json = await data.json();
  // console.log(json.results);
  dispatch(addUpcomingMovies(json.results))
};

useEffect( ()=>{
 !upcomingMovies && getUpcomingMovies();
}, []);
}

export default useUpcomingMovies;