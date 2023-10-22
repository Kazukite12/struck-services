import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './components/Navigation'
import Body from './components/Body'
import Footer from './components/Footer'
import { BrowserRouter, HashRouter, Routes } from 'react-router-dom'
import Portofolio from './components/Portofolio'
import { Route } from 'react-router-dom'

function App() {

  return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/Portofolio' element={<Portofolio />} />
        </Routes>
        <Footer />

      </BrowserRouter>
  )
}

export default App
