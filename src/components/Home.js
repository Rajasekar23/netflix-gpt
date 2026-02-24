import React from 'react'
import Login from './Login'

const Home = () => {
  return (
        <div className="relative h-screen w-full">

        <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_large.jpg"
        alt="background"
        className="absolute inset-0 h-full w-full "
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
        <Login />
        </div>

        </div>
  )
}

export default Home