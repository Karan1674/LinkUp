import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Hero from '../Components/Hero'
import Menu from '../Components/Menu'
import Middlebar from '../Components/Middlebar'
// import Friends from '../Components/Friends'
import '../Styles/Hero.css'
import Profile from '../Components/Profile'
import Topbar from '../Components/Topbar'
import Footer from '../Components/Footer'
import ProfileMainportion from '../Components/ProfileMainportion'
import FriendPageProfile from '../Components/FriendPageProfile'
import FriendPage from '../Components/FriendPage'
import Frienddata from '../Components/Frienddata'
import { Appprovider } from '../Store/DummyData'
import Trending, { Trendingdata } from '../Components/Trending'




export default function Home() {
 
  return (
    <>

   <Appprovider>
   <div className="hidhero">
      <Topbar />
        <Routes>
          <Route path='/' element={<Hero />}></Route>
          <Route path='/Home' element={<Hero />}></Route>
          <Route path='/Profile' element={<Profile />}></Route>
          <Route path='/iconsdata' element={<Hero />}></Route>
          <Route path='/friendpage' element={<FriendPageProfile/>}></Route>
          <Route path='/Friends' element={<FriendPage/>}></Route>
          <Route path='/Trending' element={<Trending/>}></Route>
        </Routes>
        <Footer />
      </div>

      <div className="routemiddle">
        <Topbar />
        {/* <div className="homefriend">
          <Friends slice/>
        </div> */}
        <div className="homeSmallScreen">
          <Routes>
            <Route path='/' element={<Middlebar />}></Route>
            <Route path='/middle' element={<Middlebar />}></Route>
            <Route path='/Home' element={<Middlebar />}></Route>
            <Route path='/iconsdata' element={<Menu />}></Route>
            <Route path='/Profile' element={<ProfileMainportion />} ></Route>
            <Route path='/Friends' element={<Frienddata/>}></Route>
            <Route path='/friendpage' element={<ProfileMainportion friendpage/>}></Route>
            <Route path='/Trending' element={<Trendingdata/>}></Route>
          </Routes>
        </div>
        <Footer />
      </div>

   </Appprovider>

    </>
  )
}
