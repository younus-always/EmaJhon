import React from 'react'
import { Navber } from '../components/Navber'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'

export const AppLayout = () => {
      return (
            <div>
                  <Navber />
                  <main>
                        <Outlet />
                  </main>
                  <Footer />
            </div>
      )
}
