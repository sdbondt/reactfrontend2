import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        // auth 
        signup: builder.mutation({
            query: (credentials) => ({
                url: '/auth/signup',
                method: 'POST',
                body: credentials
            })
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials
            })
        }),
    })
})

export const { useLoginMutation, useSignupMutation } = api
console.log('yeeet')
console.log(api.endpoints)
