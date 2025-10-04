import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'

// import { BrowserRouter, Routes, Route } from "react-router-dom";

    // import { useLocation } from 'react-router-dom';

const App = () => {

  const isownerPath =useLocation().pathname.includes("owner")
  return (
    <>
      {!isownerPath && <Nav />}
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rooms" element={<AllRooms/>} />
        <Route path="/rooms/:id" element={<RoomDetails/>} />
      </Routes>
      <Footer/>
      </div>
      
      </>

  )
}

export default App