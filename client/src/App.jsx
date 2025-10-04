import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelReg from './components/HotelReg'

// import { BrowserRouter, Routes, Route } from "react-router-dom";

    // import { useLocation } from 'react-router-dom';

const App = () => {

  const isownerPath =useLocation().pathname.includes("owner")
  return (
    <>
      {!isownerPath && <Nav />}
      <HotelReg/>
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rooms" element={<AllRooms/>} />
        <Route path="/rooms/:id" element={<RoomDetails/>} />
        <Route path="/my-bookings" element={<MyBookings/>} />

      </Routes>
      <Footer/>
      </div>
      
      </>

  )
}

export default App