import React, { useEffect, useReducer, useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setToken } from "../../services/authSlice"
import { useLoginMutation, api } from "../../services/api"


const reducer = (state, action) => ({
  ...state,
  ...action,
})

const initialState = {
  email: "",
  password: "",
}
console.log(api.endpoints.login)

const Login = () => {
  const [credentials, dispatchCredentials] = useReducer(reducer, initialState)
  const [login, { isError, error, isLoading }] = useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ref = useRef()

  const handleChanges = (e) =>
    dispatchCredentials({ [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await login(credentials)
    if (response.data) {
      dispatchCredentials(initialState)
      dispatch(setToken(response.data.token))
      navigate("/")
    }
  }

  useEffect(() => {
    ref.current.focus()
  }, [])
  if (isLoading) return <p>loading</p>
  if (isError) return <p>{error.data.msg}</p>
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          value={credentials.email}
          onChange={handleChanges}
          ref={ref}
        />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          value={credentials.password}
          onChange={handleChanges}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login