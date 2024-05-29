import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptBar: false,
        movieResults: null,
        movieNames: null,
    },
    reducers: {
        addShowGptBar: (state) => { 
            state.showGptBar = !state.showGptBar
        },   
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
          },  
    }
}
)
export const {addShowGptBar, addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;