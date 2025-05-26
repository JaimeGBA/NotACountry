import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, ZoomOut, RotateCcw, X, Info, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ElAnatsuiPage = () => {
  const navigate = useNavigate()
  const [selectedHotspot, setSelectedHotspot] = useState(null)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const imageRef = useRef(null)

  // Hotspot data for the tapestry - representing different bottle caps and material stories
  const hotspots = [
    {
      id: 1,
      x: 25, // percentage from left
      y: 30, // percentage from top
      title: "Colonial Trade Routes",
      content: "These bottle caps represent the colonial liquor trade that connected West Africa to European markets. Each cap tells a story of economic exploitation and cultural transformation.",
      details: "The metal caps from European alcohol brands became symbols of colonial influence. Anatsui transforms these symbols of domination into objects of beauty and resistance."
    },
    {
      id: 2,
      x: 45,
      y: 20,
      title: "Material Transformation",
      content: "The alchemy of turning discarded materials into precious art. Anatsui elevates the mundane to the magnificent, challenging our perceptions of value.",
      details: "Each cap is carefully flattened, connected with copper wire, and woven into flowing textile-like forms that drape and move like traditional kente cloth."
    },
    {
      id: 3,
      x: 70,
      y: 40,
      title: "Cultural Memory",
      content: "The tapestry embodies collective memory - stories of migration, trade, survival, and adaptation across generations of African peoples.",
      details: "The metallic surface reflects light differently from various angles, symbolizing how cultural narratives shift and transform through time and perspective."
    },
    {
      id: 4,
      x: 60,
      y: 70,
      title: "Kente Cloth Inspiration",
      content: "The flowing, draped form references traditional Ghanaian kente cloth, bridging ancient weaving traditions with contemporary artistic practice.",
      details: "Like kente patterns that encode social meanings, Anatsui's work carries layers of cultural significance in its material choices and construction methods."
    },
    {
      id: 5,
      x: 15,
      y: 60,
      title: "Global Capitalism",
      content: "The bottle caps represent the global flow of commodities, highlighting how local communities are connected to worldwide economic systems.",
      details: "Each brand represents a different pathway of global capitalism into African markets, from colonial times to contemporary globalization."
    }
  ]

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev * 1.5, 4))
  }

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev / 1.5, 0.5))
  }

  const handleReset = () => {
    setZoomLevel(1)
    setPanPosition({ x: 0, y: 0 })
  }

  const handleMouseDown = (e) => {
    if (e.target.closest('.hotspot')) return
    setIsDragging(true)
    setDragStart({
      x: e.clientX - panPosition.x,
      y: e.clientY - panPosition.y
    })
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    setPanPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleHotspotClick = (hotspot) => {
    setSelectedHotspot(hotspot)
  }

  return (
    <div className="min-h-screen bg-earth-50 pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-earth-600 to-earth-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-earth-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Map</span>
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">El Anatsui</h1>
                <p className="text-xl text-earth-100 mb-4">Ghana • Nigeria</p>
                <p className="text-lg text-earth-100 leading-relaxed">
                  Master of transformation, El Anatsui creates monumental tapestries from discarded materials, 
                  weaving together stories of trade, colonialism, and cultural resilience across West Africa.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-serif font-semibold mb-4">Earth's Skin</h3>
                  <p className="text-earth-100 mb-4">
                    Explore this interactive tapestry created from thousands of bottle caps, 
                    each telling a story of global trade and cultural transformation.
                  </p>
                  <div className="flex space-x-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Interactive</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Zoomable</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">5 Hotspots</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Tapestry Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-700 mb-4">
              Interactive Tapestry Experience
            </h2>
            <p className="text-lg text-metal-600 max-w-3xl mx-auto">
              Click and drag to explore the tapestry. Zoom in to see individual bottle caps. 
              Click on the golden hotspots to discover stories within the artwork.
            </p>
          </motion.div>

          {/* Controls */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg shadow-lg p-3 flex items-center space-x-2">
              <button
                onClick={handleZoomIn}
                className="p-2 text-earth-600 hover:bg-earth-50 rounded-lg transition-colors"
                title="Zoom In"
              >
                <ZoomIn size={20} />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 text-earth-600 hover:bg-earth-50 rounded-lg transition-colors"
                title="Zoom Out"
              >
                <ZoomOut size={20} />
              </button>
              <button
                onClick={handleReset}
                className="p-2 text-earth-600 hover:bg-earth-50 rounded-lg transition-colors"
                title="Reset View"
              >
                <RotateCcw size={20} />
              </button>
              <div className="ml-4 text-sm text-metal-600">
                Zoom: {Math.round(zoomLevel * 100)}%
              </div>
            </div>
          </div>

          {/* Tapestry Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-white rounded-xl shadow-2xl overflow-hidden"
            style={{ height: '600px' }}
          >
            <div
              className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div
                ref={imageRef}
                className="relative w-full h-full"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
                  transformOrigin: 'center center',
                  transition: isDragging ? 'none' : 'transform 0.3s ease'
                }}
              >
                {/* Main Artwork Image */}
                <img
                  src="/Artisits/El Anatsui (Ghana,Nigeria)/10ANATSUI1-superJumbo.jpg"
                  alt="El Anatsui's Earth's Skin tapestry made from bottle caps"
                  className="w-full h-full object-cover"
                  draggable={false}
                />

                {/* Hotspots */}
                {hotspots.map((hotspot) => (
                  <button
                    key={hotspot.id}
                    className="hotspot"
                    style={{
                      left: `${hotspot.x}%`,
                      top: `${hotspot.y}%`
                    }}
                    onClick={() => handleHotspotClick(hotspot)}
                    title={hotspot.title}
                  >
                    <motion.div
                      className="w-6 h-6 bg-gold-400 rounded-full border-2 border-white shadow-lg"
                      animate={{
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(251, 191, 36, 0.7)',
                          '0 0 0 10px rgba(251, 191, 36, 0)',
                          '0 0 0 0 rgba(251, 191, 36, 0)'
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
                Transforming the Discarded
              </h2>
              <div className="space-y-4 text-metal-600 leading-relaxed">
                <p>
                  El Anatsui's monumental sculptures are made from thousands of aluminum bottle caps 
                  and liquor bottle labels, materials that carry complex histories of consumption, 
                  trade, and globalization in Africa.
                </p>
                <p>
                  Each piece questions the relationship between local traditions and global influences, 
                  transforming symbols of economic exploitation into objects of beauty and cultural pride.
                </p>
                <p>
                  The flowing, textile-like quality of his metal tapestries references traditional 
                  kente cloth while creating an entirely new artistic language for contemporary Africa.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/Artisits/El Anatsui (Ghana,Nigeria)/Portrait-of-El-Anatsui-2-e1665054428717.jpg"
                alt="Portrait of El Anatsui"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-xl">
                <p className="text-white font-medium">El Anatsui in his studio</p>
                <p className="text-white/80 text-sm">Working with recycled materials</p>
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
                  <div className="w-3 h-3 bg-gold-400 rounded-full"></div>
                  <h3 className="text-2xl font-serif font-bold text-earth-700">
                    {selectedHotspot.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedHotspot(null)}
                  className="p-2 text-metal-400 hover:text-metal-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-metal-700 leading-relaxed">
                  {selectedHotspot.content}
                </p>
                <div className="bg-earth-50 rounded-lg p-4 border-l-4 border-earth-400">
                  <div className="flex items-start space-x-2">
                    <Info size={20} className="text-earth-600 mt-0.5 flex-shrink-0" />
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

export default ElAnatsuiPage 