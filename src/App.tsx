import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/common/Loader/Loader'
import Hero from './components/sections/Hero/Hero'
import Introduction from './components/sections/Introduction/Introduction'
import About from './components/sections/About/About'
import WhyChooseUs from './components/sections/WhyChooseUs/WhyChooseUs'
import Projects from './components/sections/Projects/Projects'
import Process from './components/sections/Process/Process'
import FAQ from './components/sections/FAQ/FAQ'
import Footer from './components/sections/Footer/Footer'
// import { useParallax } from './hooks/useParallax'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  
  // Parallax effects for different sections
  // const introParallax = useParallax({ speed: 0.3, direction: 'up' })
  // const aboutParallax = useParallax({ speed: 0.4, direction: 'down' })
  // const whyChooseUsParallax = useParallax({ speed: 0.25, direction: 'up' })
  // const projectsParallax = useParallax({ speed: 0.35, direction: 'down' })
  // const faqParallax = useParallax({ speed: 0.2, direction: 'up' })

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>
      {!isLoading && (
        <div className="app">
          <Hero />
          <div >
            <Introduction />
          </div>
          <div >
            <About />
          </div>
          <div  >
            <WhyChooseUs />
          </div>
          <div>
            <Projects />
          </div>
          <Process />
          <div >
            <FAQ />
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
