import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import GetInTouch from './pages/GetInTouch';
import Dashboard from './pages/dashboard';
import EditProfile from './pages/MiniCOP/EditProfile';
import About from './pages/About';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/SignUpPage' element={<SignUpPage />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/GetinTouch' element={<GetInTouch />} />
        <Route path='/DashBoard' element={<Dashboard />} />
        <Route path='/EditProfile' element={<EditProfile/>} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>




  )
}

export default App