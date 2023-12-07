import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div className='bg-cyan-700 text-white flex justify-between items-baseline px-6 py-4'>

      <div>
        <NavLink to='/' replace> <h1 className='text-3xl '>MeowJuice</h1> </NavLink>
      </div>

      <nav className='space-x-5 text-xl'>
        <NavLink to='/about'> About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>


    </div>
  )
}

export default Header
