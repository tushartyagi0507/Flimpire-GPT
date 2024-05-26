import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";
import moviesReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import configReducer from "./ConfigSlice"

const store = configureStore({
    reducer: {
     user: userReducer,
     movies: moviesReducer,
     gpt: gptReducer,
     config: configReducer,
    }
})

export default store;