import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  )
}
 
export default App
