import { useEffect } from "react"
import { API_options } from "../utils/constants"
import { useDispatch } from "react-redux"
import {addTrailer} from "../utils/movieSlice"


const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch()
    const getTrailer = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_options)
        const json = await data.json()    
    //    console.log(json.results)
     
       const filteredData = json.results.filter((video)=> video.type === "Trailer")
    //    console.log(filteredData)
    const trailer = filteredData[0]
    // console.log(trailer)
       dispatch(addTrailer(trailer))
     }
     
     useEffect(()=>{
     getTrailer();
     },[])
}

export default useMovieTrailer