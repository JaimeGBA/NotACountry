import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import InteractiveAfricaMap from '../components/InteractiveAfricaMap'

const HomePage = () => {
  const navigate = useNavigate()
  const [selectedRegion, setSelectedRegion] = useState(null)

  const handleRegionClick = (regionData) => {
    const artistRoutes = {
      north: '/artist/zineb-sedira',
      west: '/artist/el-anatsui',
      central: '/artist/sammy-baloji',
      east: '/artist/peterson-kamwathi',
      southern: '/artist/nicholas-hlobo'
    }
    
    navigate(artistRoutes[regionData.region])
  }

  const handleRegionHover = (regionData) => {
    setSelectedRegion(regionData)
  }

  const handleRegionLeave = () => {
    setSelectedRegion(null)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-earth-100 via-earth-50 to-metal-100"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-serif font-bold text-earth-700 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Not A Country
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-metal-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Digital Explorations of African Cultural Diversity Through Art
            </motion.p>
            
            <motion.p
              className="text-lg text-metal-600 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Explore the internal pluralism of Africa through the lens of five contemporary artists, 
              dismantling colonial narratives and celebrating cultural richness.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={() => navigate('/philosophy')}
                className="bg-earth-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-earth-600 transition-colors shadow-lg"
              >
                Explore Philosophy
              </button>
              
              <button
                onClick={() => document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-earth-500 text-earth-600 px-8 py-3 rounded-lg font-medium hover:bg-earth-50 transition-colors"
              >
                Discover Artists
              </button>
            </motion.div>
          </motion.div>

          {/* Interactive Map Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-earth-200">
              <h3 className="text-2xl font-serif font-semibold text-earth-700 mb-6 text-center">
                Explore by Region
              </h3>
              
              {/* Map Container */}
              <div className="relative">
                <InteractiveAfricaMap
                  onRegionClick={handleRegionClick}
                  onRegionHover={handleRegionHover}
                  onRegionLeave={handleRegionLeave}
                  className="w-full max-w-md mx-auto"
                />
                
                {/* Region Info Display */}
                {selectedRegion && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-earth-200 shadow-lg"
                  >
                    <h4 className="font-semibold text-earth-700">{selectedRegion.artist}</h4>
                    <p className="text-sm text-metal-600">{selectedRegion.country}</p>
                    <p className="text-xs text-metal-500 mt-1">Click to explore</p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section id="map-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-700 mb-6">
              Journey Through Africa
            </h2>
            <p className="text-xl text-metal-600 max-w-3xl mx-auto">
              Click on any region to begin your exploration of African artistic expression 
              and cultural diversity through the works of five extraordinary artists.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-earth-50 to-metal-50 rounded-3xl p-8 shadow-xl border border-earth-200">
              <InteractiveAfricaMap
                onRegionClick={handleRegionClick}
                onRegionHover={handleRegionHover}
                onRegionLeave={handleRegionLeave}
                className="w-full"
                showLabels={true}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Artists Preview Section */}
      <section className="py-20 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-700 mb-6">
              Featured Artists
            </h2>
            <p className="text-xl text-metal-600 max-w-3xl mx-auto">
              Each artist represents a unique perspective on African identity, 
              challenging colonial narratives through their distinctive artistic practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'El Anatsui',
                region: 'West Africa',
                country: 'Ghana, Nigeria',
                description: 'Transforming everyday materials into monumental tapestries',
                route: '/artist/el-anatsui',
                color: 'earth'
              },
              {
                name: 'Sammy Baloji',
                region: 'Central Africa',
                country: 'Democratic Republic of Congo',
                description: 'Layering historical archives with contemporary imagery',
                route: '/artist/sammy-baloji',
                color: 'metal'
              },
              {
                name: 'Peterson Kamwathi',
                region: 'East Africa',
                country: 'Kenya',
                description: 'Charcoal drawings exploring memory and erasure',
                route: '/artist/peterson-kamwathi',
                color: 'crimson'
              },
              {
                name: 'Nicholas Hlobo',
                region: 'Southern Africa',
                country: 'South Africa',
                description: 'Sculptural works examining gender and identity',
                route: '/artist/nicholas-hlobo',
                color: 'violet'
              },
              {
                name: 'Zineb Sedira',
                region: 'North Africa',
                country: 'Algeria, France, UK',
                description: 'Video installations exploring diaspora and language',
                route: '/artist/zineb-sedira',
                color: 'gold'
              }
            ].map((artist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-earth-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => navigate(artist.route)}
              >
                <div className={`h-2 bg-${artist.color}-400`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-earth-700 mb-2">
                    {artist.name}
                  </h3>
                  <p className="text-sm font-medium text-metal-500 mb-2">
                    {artist.region} • {artist.country}
                  </p>
                  <p className="text-metal-600 mb-4">
                    {artist.description}
                  </p>
                  <button className="text-earth-600 font-medium hover:text-earth-700 transition-colors">
                    Explore Works →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage 