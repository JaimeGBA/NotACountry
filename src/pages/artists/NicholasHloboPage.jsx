import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize, Info, Eye, ExternalLink } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const NicholasHloboPage = () => {
  const navigate = useNavigate()
  const [selectedHotspot, setSelectedHotspot] = useState(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [activeLayer, setActiveLayer] = useState(null)

  // Performance video content - featuring Ingubo
  const performanceVideo = {
    id: 1,
    title: "Ingubo",
    description: "A powerful performance work examining traditional garments and contemporary identity, exploring themes of cultural transformation and belonging",
    thumbnail: "/Artisits/Nicholas Hlobo (South Africa)/Nicholas-Hlobo-web.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=1S-t5MRcR5I",
    youtubeId: "1S-t5MRcR5I",
    duration: "Performance Documentation",
    themes: ["Gender Identity", "Traditional Garments", "Cultural Transformation", "Contemporary Identity"]
  }

  // Interactive sculpture hotspots with narrative layers
  const sculptureHotspots = [
    {
      id: 1,
      x: 30,
      y: 25,
      title: "Rubber Forms",
      content: "The use of rubber inner tubes references both industrial modernity and organic flexibility, suggesting the malleable nature of identity formation.",
      narrativeLayers: {
        personal: "Hlobo's use of inner tubes reflects his own journey of self-discovery and transformation.",
        cultural: "Rubber represents the intersection of African traditions with global industrial materials.",
        queer: "The flexibility of rubber mirrors the fluid nature of gender and sexual identity.",
        political: "Industrial materials challenge hierarchies between 'high' and 'low' art materials."
      },
      themes: ["Material", "Flexibility", "Transformation"]
    },
    {
      id: 2,
      x: 60,
      y: 40,
      title: "Ribbon Connections",
      content: "Colored ribbons weave through the sculpture, creating connections that speak to relationships, community, and the threads that bind identities together.",
      narrativeLayers: {
        personal: "Ribbons represent the personal connections that shape individual identity.",
        cultural: "Traditional beadwork and textile practices are referenced through contemporary materials.",
        queer: "The interweaving suggests chosen family and community bonds beyond biological relationships.",
        political: "Connected forms challenge individualistic notions of selfhood."
      },
      themes: ["Connection", "Community", "Relationships"]
    },
    {
      id: 3,
      x: 45,
      y: 70,
      title: "Vessel Forms",
      content: "The vessel shapes reference traditional African pottery while embracing contemporary sculptural languages, bridging ancestral and modern practices.",
      narrativeLayers: {
        personal: "Vessels as containers for memory, emotion, and cultural knowledge.",
        cultural: "Traditional pottery forms reinterpreted through contemporary artistic practice.",
        queer: "The vessel as metaphor for bodies that contain and express multiple identities.",
        political: "Reclaiming traditional forms in contemporary art contexts."
      },
      themes: ["Tradition", "Container", "Memory"]
    },
    {
      id: 4,
      x: 75,
      y: 30,
      title: "Organic Abstractions",
      content: "Abstract organic forms suggest bodily experience while resisting fixed categorization, embodying the fluidity of identity and desire.",
      narrativeLayers: {
        personal: "Abstract forms allow for multiple readings and personal projections.",
        cultural: "Organic shapes connect to natural environments and traditional symbolic systems.",
        queer: "Abstraction resists binary categorizations of form and meaning.",
        political: "Non-representational forms challenge Western artistic hierarchies."
      },
      themes: ["Abstraction", "Body", "Fluidity"]
    }
  ]

  const openYouTubeVideo = () => {
    window.open(performanceVideo.youtubeUrl, '_blank')
  }

  const openVideoModal = () => {
    setShowVideoModal(true)
  }

  const closeVideoModal = () => {
    setShowVideoModal(false)
  }

  return (
    <div className="min-h-screen bg-earth-50 pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-violet-600 to-violet-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-violet-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Map</span>
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Nicholas Hlobo</h1>
                <p className="text-xl text-violet-100 mb-4">South Africa</p>
                <p className="text-lg text-violet-100 leading-relaxed">
                  Sculptor of identity and transformation, Nicholas Hlobo creates powerful works 
                  that explore themes of cultural hybridity, gender, and queer identity through 
                  sculpture and performance in Southern Africa.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-serif font-semibold mb-4">Sculpture & Performance</h3>
                  <p className="text-violet-100 mb-4">
                    Explore interactive sculptures with embedded performance documentation, revealing 
                    layers of meaning about cultural hybridity, gender identity, and transformation.
                  </p>
                  <div className="flex space-x-2 flex-wrap gap-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Performance Video</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Interactive Layers</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Identity Themes</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Video Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-700 mb-4">
              Performance Documentation
            </h2>
            <p className="text-lg text-metal-600 max-w-3xl mx-auto">
              Experience Hlobo's powerful performance "Ingubo" that explores identity, transformation, 
              and the intersection of traditional and contemporary cultural practices.
            </p>
          </motion.div>

          {/* Featured Performance Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-earth-200">
              <div className="relative">
                <img
                  src={performanceVideo.thumbnail}
                  alt={performanceVideo.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={openVideoModal}
                >
                  <div className="bg-white/20 rounded-full p-6">
                    <Play size={48} className="text-white ml-2" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-2 rounded flex items-center space-x-2">
                  <ExternalLink size={16} />
                  <span className="text-sm">{performanceVideo.duration}</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-earth-700 mb-3">
                  {performanceVideo.title}
                </h3>
                <p className="text-metal-600 mb-6 leading-relaxed">
                  {performanceVideo.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {performanceVideo.themes.map((theme, themeIndex) => (
                    <span
                      key={themeIndex}
                      className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm"
                    >
                      {theme}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={openVideoModal}
                    className="flex items-center justify-center space-x-2 bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors"
                  >
                    <Play size={20} />
                    <span>Watch Performance</span>
                  </button>
                  
                  <button
                    onClick={openYouTubeVideo}
                    className="flex items-center justify-center space-x-2 bg-earth-600 text-white px-6 py-3 rounded-lg hover:bg-earth-700 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>View on YouTube</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Sculpture Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-700 mb-4">
              Interactive Sculpture
            </h2>
            <p className="text-lg text-metal-600 max-w-3xl mx-auto">
              Click on different elements of the sculpture to reveal layers of meaning about 
              identity, cultural hybridity, and transformation.
            </p>
          </motion.div>

          {/* Narrative Layer Selector */}
          <div className="flex justify-center mb-6">
            <div className="bg-earth-50 rounded-lg p-3 flex items-center space-x-2">
              <span className="text-sm text-metal-600 mr-2">Explore through:</span>
              {['personal', 'cultural', 'queer', 'political'].map((layer) => (
                <button
                  key={layer}
                  onClick={() => setActiveLayer(activeLayer === layer ? null : layer)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    activeLayer === layer
                      ? 'bg-violet-500 text-white'
                      : 'bg-white text-violet-600 border border-violet-200 hover:bg-violet-50'
                  }`}
                >
                  {layer.charAt(0).toUpperCase() + layer.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Sculpture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-violet-50 to-earth-50 rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
          >
            <div className="relative">
              <img
                src="/Artisits/Nicholas Hlobo (South Africa)/hlobo-main-page.jpg"
                alt="Nicholas Hlobo's sculptural installation"
                className="w-full h-auto"
              />

              {/* Interactive Hotspots */}
              {sculptureHotspots.map((hotspot) => (
                <button
                  key={hotspot.id}
                  className="hotspot"
                  style={{
                    left: `${hotspot.x}%`,
                    top: `${hotspot.y}%`,
                    backgroundColor: '#8B5CF6'
                  }}
                  onClick={() => setSelectedHotspot(hotspot)}
                  title={hotspot.title}
                >
                  <motion.div
                    className="w-6 h-6 bg-violet-400 rounded-full border-2 border-white shadow-lg"
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        '0 0 0 0 rgba(139, 92, 246, 0.7)',
                        '0 0 0 10px rgba(139, 92, 246, 0)',
                        '0 0 0 0 rgba(139, 92, 246, 0)'
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

              {/* Layer-specific highlights */}
              {activeLayer && (
                <div className="absolute inset-0 pointer-events-none">
                  {sculptureHotspots.map((hotspot) => (
                    <div
                      key={`${hotspot.id}-${activeLayer}`}
                      className="absolute w-12 h-12 rounded-full border-4 border-violet-400 animate-pulse"
                      style={{
                        left: `calc(${hotspot.x}% - 24px)`,
                        top: `calc(${hotspot.y}% - 24px)`,
                        opacity: hotspot.narrativeLayers[activeLayer] ? 1 : 0.3
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Active Layer Information */}
            {activeLayer && (
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-violet-200">
                <h4 className="font-semibold text-violet-700 mb-2">
                  {activeLayer.charAt(0).toUpperCase() + activeLayer.slice(1)} Perspective
                </h4>
                <p className="text-sm text-metal-600">
                  Click on highlighted elements to explore how they relate to {activeLayer} themes in Hlobo's work.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Artist Context Section */}
      <section className="py-16 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold text-earth-700 mb-6">
                Identity, Transformation, and Belonging
              </h2>
              <div className="space-y-4 text-metal-600 leading-relaxed">
                <p>
                  Nicholas Hlobo's sculptures and performances navigate the complex terrain of 
                  contemporary South African identity, particularly exploring how traditional 
                  cultural forms can be reimagined to express contemporary experiences of gender, 
                  sexuality, and belonging.
                </p>
                <p>
                  His use of materials like rubber inner tubes, ribbons, and organic forms creates 
                  a visual language that speaks to flexibility, connection, and transformation - 
                  key themes in understanding fluid identity formation.
                </p>
                <p>
                  Through performance works like "Ingubo," Hlobo embodies these sculptural concepts, 
                  creating embodied experiences that challenge binary thinking about tradition and 
                  modernity, masculine and feminine, individual and community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-violet-50 rounded-xl p-6 border border-violet-200">
                <h3 className="text-xl font-serif font-semibold text-earth-700 mb-4">
                  Key Themes in "Ingubo"
                </h3>
                <ul className="space-y-2 text-metal-600">
                  <li>• <strong>Traditional Garments:</strong> Exploring the cultural significance of clothing and identity</li>
                  <li>• <strong>Gender Fluidity:</strong> Challenging binary gender categories through performance</li>
                  <li>• <strong>Cultural Transformation:</strong> How traditions evolve in contemporary contexts</li>
                  <li>• <strong>Identity Expression:</strong> The body as site of cultural and personal meaning</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-earth-200 shadow-lg">
                <h3 className="text-xl font-serif font-semibold text-earth-700 mb-4">
                  Artistic Practice
                </h3>
                <p className="text-metal-600">
                  Hlobo's interdisciplinary practice combines sculpture, performance, video, and 
                  installation to create immersive experiences that invite viewers to reconsider 
                  their own assumptions about identity, culture, and belonging in contemporary Africa.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal with YouTube Embed */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-black" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${performanceVideo.youtubeId}?autoplay=1&rel=0`}
                  title={performanceVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-earth-700 mb-2">
                  {performanceVideo.title}
                </h3>
                <p className="text-metal-600 mb-4">
                  {performanceVideo.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 flex-wrap gap-2">
                    {performanceVideo.themes.map((theme, index) => (
                      <span
                        key={index}
                        className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={closeVideoModal}
                    className="text-metal-400 hover:text-metal-600 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sculpture Hotspot Modal */}
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
              className="modal-content p-6 max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-violet-400 rounded-full"></div>
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
              
              <div className="space-y-6">
                <p className="text-lg text-metal-700 leading-relaxed">
                  {selectedHotspot.content}
                </p>

                {/* Narrative Layers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(selectedHotspot.narrativeLayers).map(([layer, content]) => (
                    <div
                      key={layer}
                      className="bg-violet-50 rounded-lg p-4 border border-violet-200"
                    >
                      <h4 className="font-semibold text-violet-700 mb-2 capitalize">
                        {layer} Layer
                      </h4>
                      <p className="text-sm text-metal-600">
                        {content}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Themes */}
                <div className="flex flex-wrap gap-2">
                  {selectedHotspot.themes.map((theme, index) => (
                    <span
                      key={index}
                      className="bg-earth-100 text-earth-700 px-3 py-1 rounded-full text-sm"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NicholasHloboPage 