
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_options } from "../utils/constants";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();

const getPopularMovies = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/popular?page=1",
    API_options
  );
  const json = await data.json();
  // console.log(json.results);
  dispatch(addPopularMovies(json.results))
};

useEffect( ()=>{
  getPopularMovies();
}, []);
}

export default usePopularMovies;