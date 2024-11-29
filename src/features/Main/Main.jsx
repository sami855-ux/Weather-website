import { useSelector } from "react-redux"
import MainSectionone from "./MainSectionone"
import MainSectionotwo from "./MainSectiontwo"

const Main = () => {
  const { query } = useSelector((store) => store.weather)

  return (
    <div className={`flex flex-col md:flex-row w-full gap-4`}>
      {!query ? null : (
        <>
          {" "}
          <MainSectionone />
          <MainSectionotwo />
        </>
      )}
    </div>
  )
}

export default Main
