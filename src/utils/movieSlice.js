import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice( {
 name : "movies",
 initialState: {
nowPlayingMoveis : null,
 },
reducers:{
    addNowPlayingMovies : (state, action)=>{ 
        state.nowPlayingMoveis = action.payload;
}  
},
})

export const {addNowPlayingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;