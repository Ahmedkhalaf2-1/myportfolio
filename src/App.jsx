import { useEffect, useState } from 'react'

import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HowIWork from './components/HowIWork'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <Loader />}

      <div
        className={`app-wrapper ${loading ? 'hidden' : 'visible'}`}
        style={{
          opacity: loading ? 0 : 1,
          visibility: loading ? 'hidden' : 'visible',
          transition: 'opacity 0.6s ease-in-out',
        }}
      >
        <SmoothScroll />
        <Navbar />

        <main>
          <Hero />
          <About />
          <HowIWork />
          <Projects />
          <Contact />
        </main>

        <Footer />
        <Analytics />
      </div>
    </>
  )
}

export default App