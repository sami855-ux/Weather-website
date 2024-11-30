import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { HiOutlineSearch, HiOutlineChat } from "react-icons/hi"

import { addQuery, fetchData } from "../../weatherSlice"

const Header = () => {
  const [queryValue, setQueryValue] = useState("")
  const dispatch = useDispatch()

  const handleQuery = () => {
    if (!queryValue) return

    dispatch(addQuery(queryValue))
    dispatch(fetchData(queryValue))

    setQueryValue("")
  }

  return (
    <div className="flex items-center justify-between w-full h-16 ">
      <h2 className="text-3xl font-bold text-slate-100">Weather</h2>

      <section className="flex items-center h-full">
        <div className="flex items-center h-10 gap-2">
          <input
            type="text"
            placeholder="Enter the city name..."
            className="h-full pl-3 text-sm bg-[#2d2d32] outline-none w-56 lg:w-[340px] rounded-xl"
            value={queryValue}
            onChange={(e) => {
              setQueryValue(e.target.value)
            }}
          />
          <button
            className="h-full px-2 text-sm cursor-pointer w-fit md:w-28 rounded-xl bg-slate-200 text-mainBackground"
            type="submit"
            onClick={handleQuery}
          >
            <span className="flex items-center gap-1">
              <HiOutlineSearch size={20} />
              <span className="hidden md:block">Search</span>
            </span>
          </button>
          <button
            className="h-full px-2 text-sm bg-orange-500 cursor-pointer md:fit md:w-52 rounded-xl text-mainBackground"
            type="submit"
          >
            <span className="flex items-center gap-1">
              <HiOutlineChat size={20} />
              <span className="hidden md:block"> use current location</span>
            </span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Header
