import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage'
import ElAnatsuiPage from './pages/artists/ElAnatsuiPage'
import SammyBalojiPage from './pages/artists/SammyBalojiPage'
import PetersonKamwathiPage from './pages/artists/PetersonKamwathiPage'
import NicholasHloboPage from './pages/artists/NicholasHloboPage'
import ZinebSediraPage from './pages/artists/ZinebSediraPage'
import PhilosophyPage from './pages/PhilosophyPage'

// Components
import Navigation from './components/Navigation'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  const location = useLocation()

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -20,
    },
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  }

  return (
    <div className="App min-h-screen bg-earth-50">
      <Navigation />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="relative"
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/artist/el-anatsui" element={<ElAnatsuiPage />} />
            <Route path="/artist/sammy-baloji" element={<SammyBalojiPage />} />
            <Route path="/artist/peterson-kamwathi" element={<PetersonKamwathiPage />} />
            <Route path="/artist/nicholas-hlobo" element={<NicholasHloboPage />} />
            <Route path="/artist/zineb-sedira" element={<ZinebSediraPage />} />
            <Route path="/philosophy" element={<PhilosophyPage />} />
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-serif text-earth-600 mb-4">Page Not Found</h1>
                  <p className="text-metal-600 mb-8">The page you're looking for doesn't exist.</p>
                  <a 
                    href="/" 
                    className="inline-block bg-earth-500 text-white px-6 py-3 rounded-lg hover:bg-earth-600 transition-colors"
                  >
                    Return Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default App
