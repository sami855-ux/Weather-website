import { HiOutlineCalendar, HiOutlineMap } from "react-icons/hi"
import { useSelector } from "react-redux"

const MainSectionone = () => {
  return (
    <div className="w-full lg:w-[450px] h-[83vh] flex flex-col justify-center items-center lg:block">
      <Now />
      <FiveDayForcast />
    </div>
  )
}

const Now = () => {
  const { query } = useSelector((store) => store.weather)
  return (
    <div className="w-[80%] lg:w-full h-56  rounded-xl bg-[#2d2d32] py-3 px-8">
      <span className="text-sm ">Now</span>
      <div className="flex justify-between w-full h-20 gap-4 my-3">
        <section className="flex flex-col h-full">
          <h3 className="text-5xl font-bold">34&deg;c</h3>
          <span className="pt-2 text-sm font-light ">Haze</span>
        </section>

        <img src="/image.png" alt="" className="w-16 h-16 rounded-full" />
      </div>

      <p className="flex items-center gap-2 pt-1 mt-3 text-sm font-thin text-gray-400">
        <HiOutlineCalendar size={17} />
        Thersday, 31 Aug 2024
      </p>
      <p className="flex items-center gap-2 pt-1 text-sm font-thin text-gray-400">
        <HiOutlineMap size={17} />
        {query}. Ethiopia
      </p>
    </div>
  )
}

const FiveDayForcast = () => {
  return (
    <div className="w-[80%] lg:w-full min-h-[370px]  rounded-xl bg-[#2d2d32] py-3 px-5 mt-4">
      <h2 className="py-2 text-3xl text-bold">5 Days forecast</h2>
      <DayForecast />
      <DayForecast />
      <DayForecast />
      <DayForecast />
      <DayForecast />
    </div>
  )
}

const DayForecast = () => {
  return (
    <section className="flex items-center justify-between w-full my-1 h-14">
      <div className="flex items-center">
        <img src="" alt="" className="mx-1 rounded-full w-7 h-7" />
        <p className="text-lg">28.0&deg;</p>
      </div>

      <span className="text-sm text-gray-400">1 sep</span>
      <span className="text-sm text-gray-400">Friday</span>
    </section>
  )
}
export default MainSectionone
