import { useSelector } from "react-redux"

import PropTypes from "prop-types"

import {
  WiCloudyGusts,
  WiSunrise,
  WiSunset,
  WiHumidity,
  WiBarometer,
  WiWindy,
  WiFire,
} from "weather-icons-react"

const Mainsectiontwo = () => {
  const {
    cityWeather: { humidity, pressure, feelsLike, wind, visibility },
  } = useSelector((store) => store.weather)
  return (
    <div className="w-full">
      <h2 className="pl-3 mb-2 text-2xl font-bold">Today&apos;s Highlights</h2>
      <MainHighlight />
      <div className="flex flex-wrap items-center justify-center w-full gap-4 lg:justify-start lg:items-start">
        <Card
          icon={<WiHumidity size={90} />}
          number={`${humidity}`}
          type={`humidity`}
        />
        <Card
          icon={<WiFire size={90} />}
          number={`${pressure}`}
          type="pressure"
        />
        <Card
          icon={<WiBarometer size={90} />}
          number={`${feelsLike}`}
          type="feelsLike"
        />
        <Card icon={<WiWindy size={90} />} number={`${wind}`} type="wind" />
        <Card
          icon={<WiFire size={90} />}
          number={`${visibility}`}
          type="visibility"
        />
      </div>
    </div>
  )
}

const MainHighlight = () => {
  const {
    cityWeather: { sunset, sunrise, tempMax, tempMin, seaLevel, groundLevel },
  } = useSelector((store) => store.weather)

  return (
    <div className="flex  w-full h-64 gap-1 mb-3 lg:gap-4">
      <section className="w-[50%] h-full rounded-lg bg-[#2d2d32] p-2">
        <div className="flex items-center justify-between w-full">
          <p className="py-2 pl-4 text-sm font-light capitalize">
            Air pressure index
          </p>

          <span className="flex items-center justify-center h-6 text-sm bg-orange-500 w-28 rounded-xl">
            Very Low
          </span>
        </div>
        <div className="flex flex-wrap w-full gap-3">
          <section className="h-24 mr-2 w-fit">
            <WiCloudyGusts size={125} />
          </section>
          <AirPressure name={"temp max"} value={tempMax} />
          <AirPressure name="temp min" value={tempMin} />
          <div className="hidden lg:block">
            <AirPressure name="seaLevel" value={seaLevel} />
            <AirPressure name="groundLevel" value={groundLevel} />
          </div>
        </div>
      </section>
      <section className="w-[50%] h-full rounded-lg bg-[#2d2d32] p-2">
        <p className="py-2 pl-4 text-sm font-light capitalize">
          sunrise and sunset
        </p>
        <div className="flex items-center w-full gap-4">
          <WiSunrise size={105} />
          <section className="flex flex-col">
            <p className="py-2 text-sm font-light">Sunrise</p>
            <h2 className="pt-3 text-4xl">{sunrise}</h2>
          </section>
        </div>
        <div className="flex items-center w-full gap-4">
          <WiSunset size={105} />
          <section className="flex flex-col">
            <p className="py-2 text-sm font-light">Sunset</p>
            <h2 className="pt-3 text-4xl">{sunset}</h2>
          </section>
        </div>
      </section>
    </div>
  )
}

const Card = ({ icon, number, type }) => {
  return (
    <div className="w-[265px] h-32 bg-[#2d2d32] rounded-lg flex items-center justify-between p-5">
      <section className="flex flex-col items-center h-full w-fit">
        <span className="font-light capitalize">{type}</span>
        {icon}
      </section>
      <p className="text-3xl font-light">{number}</p>
    </div>
  )
}

Card.propTypes = {
  icon: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

const AirPressure = ({ name, value }) => {
  const filteredValue = `${value}`
  return (
    <div className="flex flex-col items-center justify-center h-24 w-28">
      <p className="py-3 text-sm font-light uppercase">{name}</p>
      <h2 className="text-4xl">{filteredValue}</h2>
    </div>
  )
}

AirPressure.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
}
export default Mainsectiontwo
