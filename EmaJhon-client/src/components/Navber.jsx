import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navber = () => {
      return (
            <nav className='bg-primary py-3 container'>
                  <div className="flex items-center justify-between">
                        <div>
                              logo
                        </div>
                        <div className='flex items-center gap-3'>
                              <ul>
                                    <li>
                                          <NavLink to={'/'}>Home</NavLink>
                                    </li>
                                    <li>
                                          <NavLink to={'/about'}>About</NavLink>
                                    </li>
                                    <li>
                                          <NavLink to={'/collection'}>Collection</NavLink>
                                    </li>
                                    <li>
                                          <NavLink to={'/order'}>Order</NavLink>
                                    </li>
                                    <li>
                                          <NavLink to={'/review'}>Review</NavLink>
                                    </li>
                              </ul>
                              <div>
                                    <button className='font-semibold'>
                                          Login
                                    </button>
                              </div>
                        </div>
                  </div>
            </nav>
      )
}
