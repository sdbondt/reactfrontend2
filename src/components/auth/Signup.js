import React, { useEffect, useReducer, useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useSignupMutation } from "../../services/api"
import { setToken } from "../../services/authSlice"

const reducer = (state, action) => ({
  ...state,
  ...action,
})

const initialState = {
  email: "",
  password: "",
  username: "",
}
const Signup = () => {
  const [signupData, dispatchSignupdata] = useReducer(reducer, initialState)
  const [signup] = useSignupMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ref = useRef()

  const handleChanges = (e) =>
    dispatchSignupdata({ [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await signup(signupData)
    dispatch(setToken(data.token))
    dispatchSignupdata(initialState)
    navigate("/")
  }
  useEffect(() => {
    ref.current.focus()
  }, [])

  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          value={signupData.email}
          onChange={handleChanges}
          ref={ref}
        />
        <input
          type="text"
          name="username"
          placeholder="enter your username"
          value={signupData.username}
          onChange={handleChanges}
        />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          onChange={handleChanges}
        />
        <button type="submit">signup</button>
      </form>
    </div>
  )
}

export default Signup
