const GEO_URL = `http://api.openweathermap.org/geo/1.0/direct?limit=5&appid=${
  import.meta.env.VITE_API_KEY
}`
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?&appid=${
  import.meta.env.VITE_API_KEY
}`

const fetchLocationData = async (cityName) => {
  const url = `${GEO_URL}&q=${cityName}`

  let data

  try {
    const res = await fetch(url)
    data = await res.json()
  } catch (error) {
    console.log(error)
  }

  return data
}

const fetchWeatherData = async (lat, lon) => {
  const url = `${WEATHER_URL}lat=${lat}&lon=${lon}`

  let data

  try {
    const res = await fetch(url)
    data = await res.json()
  } catch (error) {
    console.log(error)
  }

  return data
}

export { fetchLocationData, fetchWeatherData }
