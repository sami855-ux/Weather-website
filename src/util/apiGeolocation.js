import { data } from "autoprefixer"

const GEO_URL = `http://api.openweathermap.org/geo/1.0/direct?limit=5&appid=${
  import.meta.env.GEO_URL
}`

const fetchWeatherData = async (cityName) => {
  const url = `${GEO_URL}&q=${cityName}`

  try {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data)
  } catch (error) {
    console.log(error)
  }

  return data
}
