import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './state'

const store = configureStore({
  reducer: rootReducer
})

export default store
