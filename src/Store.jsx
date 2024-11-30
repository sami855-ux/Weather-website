import { configureStore } from "@reduxjs/toolkit"

import weatherReducer from "./weatherSlice.jsx"

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
})

export default store
