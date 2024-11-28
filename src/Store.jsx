import { configureStore } from "@reduxjs/toolkit"

import reducer from "./weatherSlie.jsx"

const store = configureStore({
  reducer: {
    weather: reducer,
  },
})

export { store }
