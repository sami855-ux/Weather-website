import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { fetchLocationData } from "./util/apiGeolocation"

const initialState = {
  query: "",
  cityWeather: {},
  isLoading: false,
  error: "",
}

const weatherReducer = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addQuery(state, action) {
      state.query = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        const weatherInfo = {
          city: action.payload.city.name,
          country: action.payload.city.country,
          pressure: action.payload.list[0].main.pressure,
          humidity: action.payload.list[0].main.humidity,
          wind: action.payload.list[0].wind.speed,
          temp: action.payload.list[0].main.temp,
          fiveDay: [
            action.payload.list[1],
            action.payload.list[2],
            action.payload.list[3],
            action.payload.list[4],
            action.payload.list[5],
            action.payload.list[6],
          ],
        }
        state.isLoading = false
        state.cityWeather = weatherInfo

        console.log(weatherInfo)
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message
      })
  },
})

export const { addQuery } = weatherReducer.actions

export const fetchData = createAsyncThunk("weather/fetch", async (query) => {
  const data = await fetchLocationData(query)
  return data
})

export default weatherReducer.reducer
