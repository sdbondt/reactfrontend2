import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: localStorage.getItem('token') || ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, { payload }) => {
            state.token = payload
            localStorage.setItem('token', payload)
        },
        logout: (state) => {
            state.token = null
            localStorage.removeItem('token')
        }
    }
})

export const { setToken, logout } = authSlice.actions
export const getAuthState = state => state.auth

export default authSlice