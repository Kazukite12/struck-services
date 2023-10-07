import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './components/Navigation'
import Body from './components/Body'
import Footer from './components/Footer'
import { HashRouter } from 'react-router-dom'

function App() {

  return (
      <HashRouter>
        <Navigation />
        <Body />
        <Footer />

      </HashRouter>
  )
}

export default App
