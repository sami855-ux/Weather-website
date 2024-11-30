import { useSelector } from "react-redux"
import PropTypes from "prop-types"

import { HiOutlineCalendar, HiOutlineMap } from "react-icons/hi"

const MainSectionone = () => {
  return (
    <div className="w-full lg:w-[450px] h-[83vh] flex flex-col justify-center items-center lg:block">
      <Now />
      <FiveDayForcast />
    </div>
  )
}

const Now = () => {
  const { query, cityWeather } = useSelector((store) => store.weather)
  const date = new Date(cityWeather.day).toDateString()
  return (
    <div className="w-[80%] lg:w-full h-56  rounded-xl bg-[#2d2d32] py-3 px-8">
      <span className="text-sm ">Now</span>
      <div className="flex justify-between w-full h-20 gap-4 my-3">
        <section className="flex flex-col h-full">
          <h3 className="text-5xl font-bold">
            {`${cityWeather.temp.toFixed(0)}`}&deg;c
          </h3>
          <span className="pt-2 text-sm font-light ">
            {cityWeather.weather}
          </span>
        </section>

        <img src="/image.png" alt="" className="w-16 h-16 rounded-full" />
      </div>

      <p className="flex items-center gap-2 pt-1 mt-3 text-sm font-thin text-gray-400">
        <HiOutlineCalendar size={17} />
        {date}
      </p>
      <p className="flex items-center gap-2 pt-1 text-sm font-thin text-gray-400">
        <HiOutlineMap size={17} />
        {query}. {cityWeather.country}
      </p>
    </div>
  )
}

const FiveDayForcast = () => {
  const { cityWeather } = useSelector((store) => store.weather)
  const fiveDay = cityWeather.fiveDay

  console.log(fiveDay)
  return (
    <div className="w-[80%] lg:w-full min-h-[370px]  rounded-xl bg-[#2d2d32] py-3 px-5 mt-4">
      <h2 className="py-2 text-3xl text-bold">5 Days forecast</h2>
      {fiveDay.map((day, dayIndex) => (
        <DayForecast key={dayIndex} day={day} />
      ))}
    </div>
  )
}

const DayForecast = ({ day }) => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]
  const date = new Date(day.dt_txt)
  const dayNum = date.getDate()
  const dayName = daysOfWeek[date.getDay()]
  const month = date.toDateString().split(" ")[1]
  return (
    <section className="flex items-center justify-between w-full my-1 h-14">
      <div className="flex items-center">
        <img src="" alt="" className="mx-1 rounded-full w-7 h-7" />
        <p className="text-lg">28.0&deg;</p>
      </div>

      <span className="text-sm text-gray-400">{`${dayNum} ${month}`} </span>
      <span className="text-sm text-gray-400">{dayName}</span>
    </section>
  )
}

DayForecast.propTypes = {
  day: PropTypes.object.isRequired,
}
export default MainSectionone
