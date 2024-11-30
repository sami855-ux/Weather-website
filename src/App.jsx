import { useSelector } from "react-redux"

import Spinner from "./features/Loading/Spinner"
import Header from "./features/Header/Header"
import Main from "./features/Main/Main"

const App = () => {
  const { isLoading } = useSelector((store) => store.weather)

  return (
    <div className="w-full lg:px-10 px-5 h-dvh py-7">
      <Header />
      {isLoading ? <Spinner /> : <Main />}
    </div>
  )
}

export default App
