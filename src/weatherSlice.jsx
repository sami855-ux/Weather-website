import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { fetchLocationData } from "./util/apiGeolocation"
import { formatNumber } from "./util/helper"

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
        const data = action.payload
        const weatherInfo = {
          city: data.city.name,
          country: data.city.country,
          visibility: formatNumber(data.list[0].visibility),
          pressure: data.list[0].main.pressure,
          humidity: data.list[0].main.humidity,
          tempMax: data.list[0].main.temp_max,
          tempMin: data.list[0].main.temp_min,
          seaLevel: formatNumber(data.list[0].main.sea_level),
          groundLevel: formatNumber(data.list[0].main.grnd_level),
          feelsLike: data.list[0].main.feels_like,
          wind: data.list[0].wind.speed,
          temp: data.list[0].main.temp,
          weather: data.list[0].weather.description,
          day: data.list[0].dt_txt,
          fiveDay: [
            data.list[1],
            data.list[2],
            data.list[3],
            data.list[4],
            data.list[5],
          ],
          sunrise: new Date(data.city.sunrise * 1000).toLocaleTimeString(),
          sunset: new Date(data.city.sunset * 1000).toLocaleTimeString(),
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
