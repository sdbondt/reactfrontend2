import React from 'react'
import { useSelector } from 'react-redux'
import { getAuthState } from '../services/authSlice'

const Home = () => {
  const { token } = useSelector((state) => state.auth)
  return (
    <div>
      <p>Home</p>
      {token ? <p>{token}</p>: ''}
    </div>
  )
}

export default Home