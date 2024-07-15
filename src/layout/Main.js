import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../App.css'
import Banner from '../components/Banner'
import Home from '../pages/Home/Home'

export default function Main() {
  return (
    <div className='bg-black'>
      <Navbar />
      <Home />
    </div>
  )
}
