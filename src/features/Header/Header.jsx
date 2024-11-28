import { useDispatch, useSelector } from "react-redux"
import { HiOutlineSearch, HiOutlineChat } from "react-icons/hi"

import { setQuery } from "../../weatherSlie"

const Header = () => {
  const dispatch = useDispatch()
  const { query } = useSelector((store) => store.weather)

  const handleQuery = (e) => {
    const data = e.target.value
    if (!data) return

    console.log(data)

    dispatch(setQuery(data))
  }

  return (
    <div className="flex items-center justify-between w-full h-16 ">
      <h2 className="text-3xl font-bold text-slate-100">Weather</h2>

      <section className="flex items-center h-full">
        <div className="flex items-center h-10 gap-2">
          <input
            type="text"
            placeholder="Enter the city name..."
            className="h-full pl-3 text-sm bg-[#2d2d32] outline-none w-[340px] rounded-xl"
            value={query}
            onChange={handleQuery}
          />
          <button
            className="h-full px-2 text-sm cursor-pointer w-28 rounded-xl bg-slate-200 text-mainBackground"
            type="submit"
          >
            <span className="flex items-center gap-1">
              <HiOutlineSearch size={20} />
              Search
            </span>
          </button>
          <button
            className="h-full px-2 text-sm bg-orange-500 cursor-pointer w-52 rounded-xl text-mainBackground"
            type="submit"
          >
            <span className="flex items-center gap-1">
              <HiOutlineChat size={20} />
              use current location
            </span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Header
