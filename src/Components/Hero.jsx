import React from 'react'
import Rightbar from '../Components/Rightbar'
import Middlebar from '../Components/Middlebar'

import '../Styles/Hero.css'
import Sidebar from './Sidebar'


export default function Hero() {
  return (
    <>
      <div className="HeroContainer">
        <Sidebar />
        <Middlebar />
        <Rightbar />
      </div>
    </>
  )
}
