import { createSlice } from "@reduxjs/toolkit";



const moviesSlice = createSlice( {
 name : "movies",
 initialState: {
nowPlayingMovies : null,
trailer: null,
popularMovies: null,
topRatedMovies: null,
upcomingMovies: null,
isMute: 1,
 },
reducers:{
addNowPlayingMovies : (state, action)=>{ 
        state.nowPlayingMovies = action.payload;
},
addPopularMovies : (state, action)=>{ 
    state.popularMovies = action.payload;
},
addTopRatedMovies: (state,action)=>{
    state.topRatedMovies = action.payload;
},
addUpcomingMovies: (state,action)=>{
    state.upcomingMovies = action.payload;
},
addTrailer:  (state,action)=>{
    state.trailer = action.payload;
},
addMute: (state)=>{
    state.isMute = !state.isMute;
}
},
})

export const {addNowPlayingMovies, addTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMute} = moviesSlice.actions;
export default moviesSlice.reducer;