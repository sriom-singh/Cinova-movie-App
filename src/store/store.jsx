import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movieSlice'
import personReducer from './reducers/peopleSlice'
import tvReducer from './reducers/tvSlice'

export const store = configureStore({
  reducer: {
    tv : tvReducer,
    movie : movieReducer,
    person : personReducer,
  },
})