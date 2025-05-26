import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Eraser, RotateCcw, Eye, EyeOff, Info, Brush } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const PetersonKamwathiPage = () => {
  const navigate = useNavigate()
  const canvasRef = useRef(null)
  const overlayCanvasRef = useRef(null)
  const [selectedHotspot, setSelectedHotspot] = useState(null)
  const [isErasing, setIsErasing] = useState(false)
  const [isRestoring, setIsRestoring] = useState(false)
  const [brushSize, setBrushSize] = useState(20)
  const [showUnderlying, setShowUnderlying] = useState(false)
  const [erasedAreas, setErasedAreas] = useState([])
  const [isDrawing, setIsDrawing] = useState(false)

  // Interactive hotspots for historical context
  const hotspots = [
    {
      id: 1,
      x: 25,
      y: 30,
      title: "Colonial Architecture",
      content: "The imposing colonial buildings represent the physical manifestation of administrative control, designed to project European authority over local populations.",
      details: "These structures were deliberately built to dwarf traditional architecture, creating psychological as well as physical dominance in the urban landscape.",
      erasable: true
    },
    {
      id: 2,
      x: 60,
      y: 45,
      title: "African Figures",
      content: "The charcoal figures represent the African subjects of colonial rule - often rendered in ways that emphasize their subordination to colonial power structures.",
      details: "Kamwathi's technique of erasure allows viewers to literally 'remove' colonial representations and reveal alternative narratives beneath.",
      erasable: false
    },
    {
      id: 3,
      x: 40,
      y: 70,
      title: "Memorial Spaces",
      content: "These areas function as sites of memory where competing narratives of history - colonial and indigenous - contest for visibility and recognition.",
      details: "The interactive erasure reveals how historical memory is actively constructed and can be reconstructed through contemporary artistic practice.",
      erasable: true
    },
    {
      id: 4,
      x: 75,
      y: 25,
      title: "Symbolic Vessels",
      content: "The vessel forms reference traditional African cultural objects that carry spiritual and social significance, often suppressed under colonial rule.",
      details: "By erasing colonial overlays, viewers can 'restore' the visibility of indigenous cultural symbols and their contemporary relevance.",
      erasable: true
    }
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    const overlayCanvas = overlayCanvasRef.current
    if (canvas && overlayCanvas) {
      const ctx = canvas.getContext('2d')
      const overlayCtx = overlayCanvas.getContext('2d')
      
      // Set canvas size
      canvas.width = 800
      canvas.height = 600
      overlayCanvas.width = 800
      overlayCanvas.height = 600
      
      // Load and draw the main charcoal drawing
      const img = new Image()
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      }
      img.src = '/Artisits/Peterson Kamwathi (Kenya)/monument_to_a_vessel_composite.jpg'
      
      // Initialize overlay canvas (for erasure effects)
      overlayCtx.fillStyle = 'rgba(255, 255, 255, 0.8)'
      overlayCtx.fillRect(0, 0, overlayCanvas.width, overlayCanvas.height)
    }
  }, [])

  const getCanvasCoordinates = (e) => {
    const canvas = overlayCanvasRef.current
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    }
  }

  const handleMouseDown = (e) => {
    if (e.target.closest('.hotspot')) return
    if (!isErasing && !isRestoring) return
    
    setIsDrawing(true)
    const coords = getCanvasCoordinates(e)
    
    if (isErasing) {
      erase(coords.x, coords.y)
    } else if (isRestoring) {
      restore(coords.x, coords.y)
    }
  }

  const handleMouseMove = (e) => {
    if (!isDrawing) return
    
    const coords = getCanvasCoordinates(e)
    
    if (isErasing) {
      erase(coords.x, coords.y)
    } else if (isRestoring) {
      restore(coords.x, coords.y)
    }
  }

  const handleMouseUp = () => {
    setIsDrawing(false)
  }

  const erase = (x, y) => {
    const overlayCanvas = overlayCanvasRef.current
    const ctx = overlayCanvas.getContext('2d')
    
    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, brushSize, 0, 2 * Math.PI)
    ctx.fill()
    
    // Track erased areas for restoration
    setErasedAreas(prev => [...prev, { x, y, size: brushSize, type: 'erase' }])
  }

  const restore = (x, y) => {
    const overlayCanvas = overlayCanvasRef.current
    const ctx = overlayCanvas.getContext('2d')
    
    ctx.globalCompositeOperation = 'source-over'
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
    ctx.beginPath()
    ctx.arc(x, y, brushSize, 0, 2 * Math.PI)
    ctx.fill()
    
    setErasedAreas(prev => [...prev, { x, y, size: brushSize, type: 'restore' }])
  }

  const resetDrawing = () => {
    const overlayCanvas = overlayCanvasRef.current
    const ctx = overlayCanvas.getContext('2d')
    
    ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
    ctx.fillRect(0, 0, overlayCanvas.width, overlayCanvas.height)
    
    setErasedAreas([])
    setIsErasing(false)
    setIsRestoring(false)
  }

  const toggleUnderlying = () => {
    setShowUnderlying(!showUnderlying)
  }

  return (
    <div className="min-h-screen bg-earth-50 pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-crimson-600 to-crimson-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-crimson-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Map</span>
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Peterson Kamwathi</h1>
                <p className="text-xl text-crimson-100 mb-4">Kenya</p>
                <p className="text-lg text-crimson-100 leading-relaxed">
                  Master of charcoal and memory, Peterson Kamwathi creates powerful drawings that 
                  explore themes of erasure, restoration, and the contested nature of historical 
                  narratives in East Africa.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-serif font-semibold mb-4">Monument to a Vessel</h3>
                  <p className="text-crimson-100 mb-4">
                    Engage with this interactive charcoal drawing through symbolic erasure and restoration, 
                    exploring how historical memory can be both obscured and recovered.
                  </p>
                  <div className="flex space-x-2 flex-wrap gap-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Interactive Erasure</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Memory Tool</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">4 Contexts</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Drawing Wall Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-700 mb-4">
              Interactive Drawing Wall
            </h2>
            <p className="text-lg text-metal-600 max-w-3xl mx-auto">
              Use erasure and restoration tools to symbolically engage with themes of memory, 
              colonial history, and the recovery of suppressed narratives.
            </p>
          </motion.div>

          {/* Drawing Tools */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg shadow-lg p-3 flex items-center space-x-4">
              <button
                onClick={() => {
                  setIsErasing(!isErasing)
                  setIsRestoring(false)
                }}
                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                  isErasing 
                    ? 'bg-crimson-100 text-crimson-700' 
                    : 'text-metal-600 hover:bg-metal-50'
                }`}
                title="Erase Tool"
              >
                <Eraser size={20} />
                <span className="text-sm">Erase</span>
              </button>
              
              <button
                onClick={() => {
                  setIsRestoring(!isRestoring)
                  setIsErasing(false)
                }}
                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                  isRestoring 
                    ? 'bg-crimson-100 text-crimson-700' 
                    : 'text-metal-600 hover:bg-metal-50'
                }`}
                title="Restore Tool"
              >
                <Brush size={20} />
                <span className="text-sm">Restore</span>
              </button>
              
              <div className="border-l border-metal-200 pl-4">
                <label className="text-sm text-metal-600 mr-2">Brush Size:</label>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={brushSize}
                  onChange={(e) => setBrushSize(parseInt(e.target.value))}
                  className="w-20"
                />
                <span className="text-xs text-metal-500 ml-2">{brushSize}px</span>
              </div>
              
              <button
                onClick={toggleUnderlying}
                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                  showUnderlying 
                    ? 'bg-crimson-100 text-crimson-700' 
                    : 'text-metal-600 hover:bg-metal-50'
                }`}
                title="Toggle Underlying Layer"
              >
                {showUnderlying ? <EyeOff size={20} /> : <Eye size={20} />}
                <span className="text-sm">Reveal</span>
              </button>
              
              <button
                onClick={resetDrawing}
                className="p-2 text-metal-600 hover:bg-metal-50 rounded-lg transition-colors"
                title="Reset Drawing"
              >
                <RotateCcw size={20} />
              </button>
            </div>
          </div>

          {/* Drawing Canvas Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-white rounded-xl shadow-2xl overflow-hidden mx-auto"
            style={{ maxWidth: '800px' }}
          >
            <div className="relative">
              {/* Base Canvas (Original Drawing) */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-auto"
                style={{ opacity: showUnderlying ? 0.3 : 1 }}
              />
              
              {/* Overlay Canvas (For Interactions) */}
              <canvas
                ref={overlayCanvasRef}
                className="relative w-full h-auto cursor-crosshair"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                  cursor: isErasing ? 'cell' : isRestoring ? 'copy' : 'crosshair'
                }}
              />

              {/* Interactive Hotspots */}
              {hotspots.map((hotspot) => (
                <button
                  key={hotspot.id}
                  className="hotspot"
                  style={{
                    left: `${hotspot.x}%`,
                    top: `${hotspot.y}%`,
                    backgroundColor: hotspot.erasable ? '#DC143C' : '#8B4513'
                  }}
                  onClick={() => setSelectedHotspot(hotspot)}
                  title={hotspot.title}
                >
                  <motion.div
                    className={`w-6 h-6 rounded-full border-2 border-white shadow-lg ${
                      hotspot.erasable ? 'bg-crimson-400' : 'bg-earth-400'
                    }`}
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        '0 0 0 0 rgba(220, 20, 60, 0.7)',
                        '0 0 0 10px rgba(220, 20, 60, 0)',
                        '0 0 0 0 rgba(220, 20, 60, 0)'
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

            {/* Instructions */}
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm max-w-xs">
              {isErasing && "Click and drag to erase layers and reveal underlying narratives"}
              {isRestoring && "Click and drag to restore erased areas"}
              {!isErasing && !isRestoring && "Select a tool above to interact with the drawing"}
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
                Charcoal, Memory, and Erasure
              </h2>
              <div className="space-y-4 text-metal-600 leading-relaxed">
                <p>
                  Peterson Kamwathi's charcoal drawings function as sites of memory where 
                  competing historical narratives - colonial and indigenous - contest for 
                  visibility and recognition in contemporary Kenya.
                </p>
                <p>
                  His technique of layering and strategic erasure mirrors the ways in which 
                  historical memory is actively constructed, suppressed, and can be recovered 
                  through conscious artistic and political practice.
                </p>
                <p>
                  The interactive erasure tool allows viewers to symbolically participate 
                  in this process of recovery, literally uncovering suppressed narratives 
                  beneath colonial representations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-crimson-50 rounded-xl p-6 border border-crimson-200">
                <h3 className="text-xl font-serif font-semibold text-earth-700 mb-4">
                  Symbolic Engagement
                </h3>
                <ul className="space-y-2 text-metal-600">
                  <li>• <strong>Erasure:</strong> Remove colonial overlays to reveal indigenous narratives</li>
                  <li>• <strong>Restoration:</strong> Rebuild historical memory through conscious action</li>
                  <li>• <strong>Memory Work:</strong> Active participation in historical recovery</li>
                  <li>• <strong>Contested Space:</strong> Multiple narratives competing for visibility</li>
                </ul>
              </div>
              
              <div className="bg-earth-50 rounded-xl p-6 border border-earth-200">
                <h3 className="text-xl font-serif font-semibold text-earth-700 mb-4">
                  Historical Context
                </h3>
                <p className="text-metal-600">
                  Kamwathi's work emerges from post-independence Kenya's ongoing struggle 
                  to decolonize not just political structures, but the very ways in which 
                  history is remembered, narrated, and transmitted across generations.
                </p>
              </div>
              
              <div className="relative">
                <img
                  src="/Artisits/Peterson Kamwathi (Kenya)/Peterson-Kamwathi-studio.webp"
                  alt="Peterson Kamwathi in his studio"
                  className="w-full rounded-xl shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-xl">
                  <p className="text-white font-medium">Peterson Kamwathi in his studio</p>
                  <p className="text-white/80 text-sm">Working with charcoal and memory</p>
                </div>
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
                  <div className={`w-3 h-3 rounded-full ${
                    selectedHotspot.erasable ? 'bg-crimson-400' : 'bg-earth-400'
                  }`}></div>
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
                <div className="bg-crimson-50 rounded-lg p-4 border-l-4 border-crimson-400">
                  <div className="flex items-start space-x-2">
                    <Info size={20} className="text-crimson-600 mt-0.5 flex-shrink-0" />
                    <p className="text-metal-600">
                      {selectedHotspot.details}
                    </p>
                  </div>
                </div>
                
                {selectedHotspot.erasable && (
                  <div className="bg-earth-50 rounded-lg p-4 border border-earth-200">
                    <p className="text-sm text-metal-600">
                      <strong>Interaction Tip:</strong> Use the erasure tool near this area to symbolically 
                      remove colonial representations and reveal underlying indigenous narratives.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PetersonKamwathiPage 