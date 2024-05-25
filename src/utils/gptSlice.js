import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptBar: false,
    },
    reducers: {
        addShowGptBar: (state) => { 
            state.showGptBar = !state.showGptBar
        },     
    }
}
)
export const {addShowGptBar} = gptSlice.actions;
export default gptSlice.reducer;