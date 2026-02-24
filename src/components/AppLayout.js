import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <Header> </Header>
        <main className='bg-gradient-to-t from-black via-transparent to-black'>
            <Outlet></Outlet>
        </main>

    </div>
  )
}

export default AppLayout