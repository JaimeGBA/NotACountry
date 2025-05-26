import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Globe, Info, Eye } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ZinebSediraPage = () => {
  const navigate = useNavigate()
  const videoRef = useRef(null)
  const [selectedHotspot, setSelectedHotspot] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('english')
  const [showSubtitles, setShowSubtitles] = useState(true)

  // Video content representing the complete Mother Tongue piece
  const videoData = {
    title: "Mother Tongue (2002)",
    description: "A video triptych exploring intergenerational communication and cultural transmission across three generations and three countries",
    videoUrl: "https://www.youtube.com/watch?v=8kb9N-XwKoA",
    embedUrl: "https://www.youtube.com/embed/8kb9N-XwKoA",
    culturalContext: "This work examines how language functions as both a vehicle for cultural transmission and a site of cultural loss across generations of North African migration to Europe.",
    themes: ["Intergenerational Communication", "Cultural Memory", "Language Transmission", "Migration", "Identity"]
  }

  // Interactive cultural exploration points
  const culturalHotspots = [
    {
      id: 1,
      x: 25,
      y: 30,
      title: "Three Generations",
      content: "The triptych presents grandmother, mother, and daughter, each speaking in their dominant language - Arabic, French, and English respectively.",
      details: "This structure reveals how cultural transmission evolves across generations, with language as both connection and separation between family members."
    },
    {
      id: 2,
      x: 50,
      y: 70,
      title: "Colonial Language Legacy",
      content: "French serves as the bridge language, carrying the weight of colonial history while becoming a tool for artistic expression.",
      details: "This paradox reflects the broader experience of postcolonial subjects who must navigate languages of power and languages of the heart."
    },
    {
      id: 3,
      x: 75,
      y: 40,
      title: "Cultural Translation",
      content: "Each generation translates their experience through their dominant language, creating layers of cultural meaning and loss.",
      details: "The work demonstrates how migration stories continue to evolve, with each generation creating new forms of cultural belonging."
    }
  ]

  const languages = {
    english: { name: "English", flag: "🇬🇧" },
    french: { name: "Français", flag: "🇫🇷" },
    arabic: { name: "العربية", flag: "🇩🇿" }
  }

  const subtitles = {
    english: "Three women from three generations speak in their mother tongues, revealing the complex layers of cultural transmission...",
    french: "Trois femmes de trois générations parlent dans leurs langues maternelles, révélant les couches complexes de transmission culturelle...",
    arabic: "ثلاث نساء من ثلاثة أجيال يتحدثن بلغاتهن الأم، كاشفات الطبقات المعقدة للنقل الثقافي..."
  }

  const toggleVideo = () => {
    const video = videoRef.current
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (video) {
      video.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="min-h-screen bg-earth-50 pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-amber-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Map</span>
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Zineb Sedira</h1>
                <p className="text-xl text-amber-100 mb-4">Algeria / France / United Kingdom</p>
                <p className="text-lg text-amber-100 leading-relaxed">
                  Artist of cultural transmission and linguistic memory, Zineb Sedira explores 
                  themes of migration, language, and intergenerational cultural exchange between 
                  North Africa and Europe.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-serif font-semibold mb-4">Mother Tongue (2002)</h3>
                  <p className="text-amber-100 mb-4">
                    Experience this powerful video triptych that explores language transmission 
                    across three generations and cultures, revealing the complex negotiations 
                    of identity in postcolonial contexts.
                  </p>
                  <div className="flex space-x-2 flex-wrap gap-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Video Triptych</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Multi-Language</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Cultural Memory</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Controls */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-700 mb-4">
              Interactive Video Demonstration
            </h2>
            <p className="text-lg text-metal-600 max-w-3xl mx-auto">
              Explore how language and cultural memory travel across three generations and three countries. 
              This demonstration from Centre Pompidou shows the complete triptych installation.
            </p>
          </motion.div>

          {/* Main Controls */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-6">
              {/* Language Selector */}
              <div className="flex items-center space-x-2">
                <Globe size={20} className="text-amber-600" />
                <span className="text-sm text-metal-600">Language:</span>
                {Object.entries(languages).map(([code, lang]) => (
                  <button
                    key={code}
                    onClick={() => setCurrentLanguage(code)}
                    className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition-colors ${
                      currentLanguage === code
                        ? 'bg-amber-100 text-amber-700'
                        : 'text-metal-600 hover:bg-metal-50'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>

              <div className="border-l border-metal-200 pl-6">
                <button
                  onClick={() => setShowSubtitles(!showSubtitles)}
                  className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                    showSubtitles 
                      ? 'bg-amber-100 text-amber-700' 
                      : 'text-metal-600 hover:bg-metal-50'
                  }`}
                  title="Toggle Subtitles"
                >
                  <Eye size={20} />
                  <span className="text-sm">Subtitles</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Display */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-earth-200"
          >
            {/* Video Container */}
            <div className="relative">
              <div className="w-full h-96 bg-black flex items-center justify-center">
                <iframe
                  ref={videoRef}
                  src={videoData.embedUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  title="Zineb Sedira - Mother Tongue"
                />
              </div>

              {/* Subtitles */}
              {showSubtitles && (
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-3 rounded text-sm text-center">
                  {subtitles[currentLanguage]}
                </div>
              )}
            </div>

            {/* Video Information */}
            <div className="p-6">
              <h3 className="text-2xl font-serif font-semibold text-earth-700 mb-3">
                {videoData.title}
              </h3>
              <p className="text-metal-600 text-base mb-4 leading-relaxed">
                {videoData.description}
              </p>
              
              {/* Themes */}
              <div className="flex flex-wrap gap-2 mb-4">
                {videoData.themes.map((theme, index) => (
                  <span
                    key={index}
                    className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm"
                  >
                    {theme}
                  </span>
                ))}
              </div>

              {/* Cultural Context Expandable */}
              <details className="text-sm text-metal-600">
                <summary className="cursor-pointer text-amber-600 font-medium hover:text-amber-700 text-base">
                  Cultural Context
                </summary>
                <p className="mt-3 leading-relaxed">
                  {videoData.culturalContext}
                </p>
              </details>
            </div>
          </motion.div>

          {/* Cultural Exploration Hotspots */}
          <div className="relative mt-12 bg-gradient-to-r from-amber-50 to-earth-50 rounded-xl p-8 border border-amber-200">
            <h3 className="text-2xl font-serif font-bold text-earth-700 mb-6 text-center">
              Cultural Transmission Across Generations
            </h3>
            
            <div className="relative h-32">
              {culturalHotspots.map((hotspot) => (
                <button
                  key={hotspot.id}
                  className="absolute"
                  style={{
                    left: `${hotspot.x}%`,
                    top: `${hotspot.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => setSelectedHotspot(hotspot)}
                  title={hotspot.title}
                >
                  <motion.div
                    className="w-8 h-8 bg-amber-400 rounded-full border-2 border-white shadow-lg flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        '0 0 0 0 rgba(245, 158, 11, 0.7)',
                        '0 0 0 15px rgba(245, 158, 11, 0)',
                        '0 0 0 0 rgba(245, 158, 11, 0)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'loop'
                    }}
                  >
                    <Info size={16} className="text-white" />
                  </motion.div>
                </button>
              ))}

              {/* Timeline */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-amber-200 transform -translate-y-1/2">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-sm text-metal-600 -mt-8">
                  Algeria<br/>
                  <span className="text-xs">Grandmother - Arabic</span>
                </div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm text-metal-600 -mt-8">
                  France<br/>
                  <span className="text-xs">Mother - French</span>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-sm text-metal-600 -mt-8">
                  United Kingdom<br/>
                  <span className="text-xs">Daughter - English</span>
                </div>
              </div>
            </div>
          </div>
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
                Language, Memory, and Cultural Transmission
              </h2>
              <div className="space-y-4 text-metal-600 leading-relaxed">
                <p>
                  Zineb Sedira's "Mother Tongue" triptych powerfully explores how language functions 
                  as both a vehicle for cultural transmission and a site of cultural loss across 
                  generations of North African migration to Europe.
                </p>
                <p>
                  The three-video installation reveals the complex negotiations of identity that 
                  occur when cultures meet, merge, and transform through migration, colonialism, 
                  and globalization.
                </p>
                <p>
                  By presenting three generations speaking in different languages - Arabic, French, 
                  and English - Sedira illuminates how cultural memory is both preserved and 
                  transformed through linguistic change.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-xl font-serif font-semibold text-earth-700 mb-4">
                  Artistic Approach
                </h3>
                <ul className="space-y-2 text-metal-600">
                  <li>• <strong>Video Triptych:</strong> Three synchronized perspectives on cultural change</li>
                  <li>• <strong>Multi-generational:</strong> Grandmother, artist, daughter as cultural markers</li>
                  <li>• <strong>Linguistic Archaeology:</strong> Excavating layers of cultural transmission</li>
                  <li>• <strong>Intimate Documentation:</strong> Personal narratives as universal stories</li>
                </ul>
              </div>
              
              <div className="bg-earth-50 rounded-xl p-6 border border-earth-200">
                <h3 className="text-xl font-serif font-semibold text-earth-700 mb-4">
                  Cultural Context
                </h3>
                <p className="text-metal-600">
                  Sedira's work emerges from the complex history of Algerian migration to France, 
                  post-colonial relationships, and the ongoing negotiations of identity that define 
                  the North African diaspora in Europe.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-serif font-semibold text-earth-700 mb-4">
                  Video Documentation
                </h3>
                <p className="text-metal-600 text-sm">
                  This video documentation shows Zineb Sedira's "Mother Tongue" installation. 
                  The complete artwork consists of three video monitors displaying 
                  synchronized conversations between three generations of women speaking 
                  in Arabic, French, and English.
                </p>
                <a 
                  href="https://www.youtube.com/watch?v=8kb9N-XwKoA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600 hover:text-blue-700 text-sm underline"
                >
                  Watch on YouTube →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultural Hotspot Modal */}
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
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
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
                <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
                  <div className="flex items-start space-x-2">
                    <Info size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
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

export default ZinebSediraPage 