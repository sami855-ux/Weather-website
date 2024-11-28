import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cityWeather: [],
  isLoading: false,
  error: "",
  query: "",
}

const weatherReducer = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload
    },
  },
})

export const { setQuery } = weatherReducer.actions

export default weatherReducer.reducer
