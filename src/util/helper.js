const weatherMap = new Map()

weatherMap.set("rainwind", "WiDayRainWind")
weatherMap.set("cloudy", "WiDayCloudy")
weatherMap.set("rain", "WiHail")
weatherMap.set("lightning", "WiNightLightning")
weatherMap.set("tornado", "WiTornado")
weatherMap.set("sunny", "WiDaySunny")

function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k"
  }
  return num.toString()
}
export { weatherMap, convertToFlag, formatNumber }
