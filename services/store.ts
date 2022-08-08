import { configureStore } from '@reduxjs/toolkit'
import { dogApi } from './api'

export const store = configureStore({
  reducer: {
    
    [dogApi.reducerPath]: dogApi.reducer,
  },
  
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(dogApi.middleware),
})


