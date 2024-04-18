import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import About from './pages/about'
import Header from './componets/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignOut" element={<SignOut />} />

    </Routes>
    </BrowserRouter>
  )
}
