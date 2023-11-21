import React, { useState } from 'react'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'

const Auth = () => {
    const [showLogin, setShowLogin] = useState(true)
    const toggleComponent = () => setShowLogin((val) => !val)
  return (
      <div>
          {showLogin ? <Login /> : <Signup />}
          <button type="button" onClick={toggleComponent}>{ showLogin ? 'Signup instead': 'Login instead'}</button>
      </div>
  )
}

export default Auth