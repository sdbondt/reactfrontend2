import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../services/authSlice'
import { api } from "../services/api";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export default store