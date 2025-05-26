import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Info, RotateCcw } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SammyBalojiPage = () => {
  const navigate = useNavigate()
  const [selectedHotspot, setSelectedHotspot] = useState(null)
  const [overlayOpacity, setOverlayOpacity] = useState(0.7)
  const [overlayPosition, setOverlayPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  // Historical overlay hotspots
  const hotspots = [
    {
      id: 1,
      x: 30,
      y: 25,
      title: "Colonial Mining Infrastructure",
      content: "The Union Minière du Haut Katanga established extensive mining operations here in the early 1900s, fundamentally reshaping the landscape and social structures of the region.",
      details: "Belgian colonial authorities created a industrial complex that extracted copper and uranium while displacing local communities and traditional ways of life."
    },
    {
      id: 2,
      x: 60,
      y: 40,
      title: "Labor Compounds",
      content: "Colonial-era worker housing compounds housed thousands of Congolese miners under controlled conditions, creating new forms of social organization and resistance.",
      details: "These compounds became sites of cultural mixing and political organization, as workers from different ethnic groups were forced to live together."
    },
    {
      id: 3,
      x: 45,
      y: 70,
      title: "Environmental Transformation",
      content: "The landscape bears permanent scars from decades of intensive mining, with contaminated soil and water sources affecting communities to this day.",
      details: "Baloji's work reveals how colonial industrial processes created lasting environmental damage that continues to impact local populations."
    },
    {
      id: 4,
      x: 75,
      y: 30,
      title: "Cultural Displacement",
      content: "Traditional villages were relocated to make way for mining operations, severing connections to ancestral lands and spiritual practices.",
      details: "The overlay of historical and contemporary images reveals how these disruptions continue to shape the social fabric of the region."
    }
  ]

  const handleOverlayDrag = (e) => {
    if (!isDragging) return
    
    const newX = e.clientX - dragStart.x
    const newY = e.clientY - dragStart.y
    
    setOverlayPosition({ x: newX, y: newY })
  }

  const handleMouseDown = (e) => {
    if (e.target.closest('.hotspot')) return
    setIsDragging(true)
    setDragStart({
      x: e.clientX - overlayPosition.x,
      y: e.clientY - overlayPosition.y
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const resetOverlay = () => {
    setOverlayPosition({ x: 0, y: 0 })
    setOverlayOpacity(0.7)
  }

  return (
    <div className="min-h-screen bg-earth-50 pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-metal-600 to-metal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-metal-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Map</span>
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Sammy Baloji</h1>
                <p className="text-xl text-metal-100 mb-4">Democratic Republic of Congo</p>
                <p className="text-lg text-metal-100 leading-relaxed">
                  Master of layered histories, Sammy Baloji creates powerful juxtapositions between 
                  archival colonial photography and contemporary landscapes, revealing the ongoing 
                  impact of industrial exploitation in Central Africa.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-serif font-semibold mb-4">Mémoire (2006)</h3>
                  <p className="text-metal-100 mb-4">
                    Explore this interactive layered history where colonial archival photographs 
                    overlay contemporary landscapes, revealing ongoing impacts of industrial colonialism.
                  </p>
                  <div className="flex space-x-2 flex-wrap gap-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Draggable Overlay</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Interactive Hotspots</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">4 Historical Points</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Layered Histories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-700 mb-4">
              Interactive Layered Histories
            </h2>
            <p className="text-lg text-metal-600 max-w-3xl mx-auto">
              Drag the historical overlay to reveal how colonial mining operations continue 
              to shape contemporary landscapes. Click hotspots to explore specific historical moments.
            </p>
          </motion.div>

          {/* Controls */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg shadow-lg p-3 flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm text-metal-600 mr-2">Overlay Opacity:</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={overlayOpacity}
                  onChange={(e) => setOverlayOpacity(parseFloat(e.target.value))}
                  className="w-24"
                />
                <span className="text-xs text-metal-500">{Math.round(overlayOpacity * 100)}%</span>
              </div>
              
              <button
                onClick={resetOverlay}
                className="flex items-center space-x-2 p-2 text-metal-600 hover:bg-metal-50 rounded-lg transition-colors"
                title="Reset Position"
              >
                <RotateCcw size={20} />
                <span className="text-sm">Reset</span>
              </button>
            </div>
          </div>

          {/* Layered Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-white rounded-xl shadow-2xl overflow-hidden"
            style={{ height: '600px' }}
          >
            {/* Base Contemporary Image */}
            <div className="absolute inset-0">
              <img
                src="/Artisits/Sammy Baloji (Democratic Republic of Congo)/images.jpeg"
                alt="Contemporary landscape of former mining area"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Draggable Historical Overlay */}
            <div
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleOverlayDrag}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{
                transform: `translate(${overlayPosition.x}px, ${overlayPosition.y}px)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease'
              }}
            >
              <img
                src="/Artisits/Sammy Baloji (Democratic Republic of Congo)/Memoire(2006)©SammyBaloji_02_image-16-9.avif"
                alt="Historical archival photograph of colonial mining operations"
                className="w-full h-full object-cover"
                style={{ opacity: overlayOpacity }}
                draggable={false}
              />

              {/* Historical Hotspots */}
              {hotspots.map((hotspot) => (
                <button
                  key={hotspot.id}
                  className="hotspot"
                  style={{
                    left: `${hotspot.x}%`,
                    top: `${hotspot.y}%`,
                    backgroundColor: '#495057'
                  }}
                  onClick={() => setSelectedHotspot(hotspot)}
                  title={hotspot.title}
                >
                  <motion.div
                    className="w-6 h-6 bg-metal-400 rounded-full border-2 border-white shadow-lg"
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        '0 0 0 0 rgba(73, 80, 87, 0.7)',
                        '0 0 0 10px rgba(73, 80, 87, 0)',
                        '0 0 0 0 rgba(73, 80, 87, 0)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'loop'
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Instruction Overlay */}
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
              Drag the overlay to explore layers of history
            </div>
          </motion.div>
        </div>
      </section>

      {/* Artist Context Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold text-earth-700 mb-6">
                Excavating Colonial Histories
              </h2>
              <div className="space-y-4 text-metal-600 leading-relaxed">
                <p>
                  Sammy Baloji's photographic practice layers historical colonial archives 
                  with contemporary landscapes, creating powerful visual commentaries on 
                  the ongoing impact of Belgian colonialism in the Democratic Republic of Congo.
                </p>
                <p>
                  His work reveals how the extraction industries established during the colonial 
                  period continue to shape social, economic, and environmental realities in 
                  contemporary Central Africa.
                </p>
                <p>
                  Through careful juxtaposition of past and present, Baloji demonstrates that 
                  colonial history is not a distant past but a living force that continues 
                  to structure African societies today.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-metal-50 rounded-xl p-6 border border-metal-200">
                <h3 className="text-xl font-serif font-semibold text-earth-700 mb-4">
                  Methodological Approach
                </h3>
                <ul className="space-y-2 text-metal-600">
                  <li>• Archival research in colonial photography collections</li>
                  <li>• Contemporary documentation of transformed landscapes</li>
                  <li>• Digital layering techniques to reveal historical continuities</li>
                  <li>• Community engagement with affected populations</li>
                </ul>
              </div>
              
              <div className="bg-earth-50 rounded-xl p-6 border border-earth-200">
                <h3 className="text-xl font-serif font-semibold text-earth-700 mb-4">
                  Historical Context
                </h3>
                <p className="text-metal-600">
                  The Union Minière du Haut Katanga, established in 1906, became one of the 
                  world's largest copper and uranium mining operations, fundamentally reshaping 
                  the social and physical landscape of what is now the Democratic Republic of Congo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal for Hotspot Details */}
      <AnimatePresence>
        {selectedHotspot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-backdrop"
            onClick={() => setSelectedHotspot(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="modal-content p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-metal-400 rounded-full"></div>
                  <h3 className="text-2xl font-serif font-bold text-earth-700">
                    {selectedHotspot.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedHotspot(null)}
                  className="p-2 text-metal-400 hover:text-metal-600 transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-metal-700 leading-relaxed">
                  {selectedHotspot.content}
                </p>
                <div className="bg-metal-50 rounded-lg p-4 border-l-4 border-metal-400">
                  <div className="flex items-start space-x-2">
                    <Info size={20} className="text-metal-600 mt-0.5 flex-shrink-0" />
                    <p className="text-metal-600">
                      {selectedHotspot.details}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SammyBalojiPage 