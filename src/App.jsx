import React from "react";
import Header from './components/Header'
import NavIcon from './components/NavIcon'
import Home from './components/Home'
import About from './components/About'
import Recipe from './components/Recipe'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="font-poppins bg-back">
      <Header />
      <NavIcon />
      <Home />
      <About />
      <Recipe />
      <Contact />
      <Footer />
    </div>
  )
}

export default App