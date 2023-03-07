import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

export const store = configureStore
    ({
        reducer: {

            [authApi.reducerPath]: authApi.reducer, },
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(authApi.middleware)
       
    })

// import { configureStore } from '@reduxjs/toolkit'

// import rootReducer from './reducers'

// const store = configureStore({ reducer: rootReducer })
