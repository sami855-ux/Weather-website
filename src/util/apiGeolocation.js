const GEO_URL = `http://api.openweathermap.org/geo/1.0/direct?limit=5&appid=${
  import.meta.env.VITE_API_KEY
}`
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${
  import.meta.env.VITE_API_KEY
}`

const fetchLocationData = async (cityName) => {
  const geoUrl = `${GEO_URL}&q=${cityName}`

  let data

  try {
    const res = await fetch(geoUrl)
    const cityInfo = await res.json()

    const { lon, lat } = await cityInfo[0]

    const weatherUrl = `${WEATHER_URL}&lat=${lat}&lon=${lon}`

    const weatherRes = await fetch(weatherUrl)
    data = await weatherRes.json()

    console.log(weatherUrl)
  } catch (error) {
    console.log(error)
  }

  return data
}

export { fetchLocationData }
