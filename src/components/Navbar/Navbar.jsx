import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <ul className='myUl'>
      <li className='myHome'><NavLink to='/' activeClassName="myCustomActiveClassName">Home</NavLink></li>
      <li className='myLi'><NavLink to='/html' activeClassName="myCustomActiveClassName">HTML</NavLink></li>
      <li className='myLi'><NavLink to='/css' activeClassName="myCustomActiveClassName">Css</NavLink></li>
      <li className='myLi'><NavLink to='/javascript' activeClassName="myCustomActiveClassName">Javascript</NavLink></li>
    </ul>
  )
}
