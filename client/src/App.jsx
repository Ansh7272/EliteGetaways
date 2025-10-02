import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

// import { BrowserRouter, Routes, Route } from "react-router-dom";

    // import { useLocation } from 'react-router-dom';

const App = () => {

  // const isownerPath =useLocation().pathname.includes("owner")
  return (
    <>
      <Nav />
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </div>
      
      </>

  )
}

export default App