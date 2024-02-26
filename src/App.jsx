import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/service/Services'
import Portfolio from './components/porifolio/Portfolio'
import Contact from './components/contact/Contact'
import About from './components/About/About'
import Tech from './components/tech/Tech'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='About'>
        <About />
      </section>
      <section id='Tech'>
        <Tech />
      </section>
      <section id='Services'>
        <Services />
      </section>
      <Portfolio />
      <section id='Contact'>
        <Contact />
      </section>
    </>
  )
}

export default App
