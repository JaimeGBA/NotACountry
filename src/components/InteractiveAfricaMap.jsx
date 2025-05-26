import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const InteractiveAfricaMap = ({ 
  onRegionClick, 
  onRegionHover, 
  onRegionLeave, 
  className = '', 
  showLabels = false 
}) => {
  const [hoveredRegion, setHoveredRegion] = useState(null)

  const regionData = {
    'north-africa': {
      region: 'north',
      artist: 'Zineb Sedira',
      country: 'Algeria, France, UK',
      color: 'gold'
    },
    'west-africa': {
      region: 'west',
      artist: 'El Anatsui',
      country: 'Ghana, Nigeria',
      color: 'earth'
    },
    'central-africa': {
      region: 'central',
      artist: 'Sammy Baloji',
      country: 'Democratic Republic of Congo',
      color: 'metal'
    },
    'east-africa': {
      region: 'east',
      artist: 'Peterson Kamwathi',
      country: 'Kenya',
      color: 'crimson'
    },
    'southern-africa': {
      region: 'southern',
      artist: 'Nicholas Hlobo',
      country: 'South Africa',
      color: 'violet'
    }
  }

  const handleRegionMouseEnter = (regionId) => {
    const data = regionData[regionId]
    setHoveredRegion(regionId)
    if (onRegionHover && data) {
      onRegionHover(data)
    }
  }

  const handleRegionMouseLeave = () => {
    setHoveredRegion(null)
    if (onRegionLeave) {
      onRegionLeave()
    }
  }

  const handleRegionClick = (regionId) => {
    const data = regionData[regionId]
    if (onRegionClick && data) {
      onRegionClick(data)
    }
  }

  useEffect(() => {
    const regions = document.querySelectorAll('.africa-region')
    
    regions.forEach(region => {
      const regionId = region.id
      
      region.addEventListener('mouseenter', () => handleRegionMouseEnter(regionId))
      region.addEventListener('mouseleave', handleRegionMouseLeave)
      region.addEventListener('click', () => handleRegionClick(regionId))
    })

    return () => {
      regions.forEach(region => {
        region.removeEventListener('mouseenter', () => handleRegionMouseEnter(region.id))
        region.removeEventListener('mouseleave', handleRegionMouseLeave)
        region.removeEventListener('click', () => handleRegionClick(region.id))
      })
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      {/* PNG Background Image */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="/images/africa-map.jpg" 
          alt="Africa Map" 
          className="w-full h-auto"
        />
        


        {/* Artist markers overlay with larger clickable areas */}
        <div className="absolute inset-0">
          {/* North Africa marker - centered in blue region */}
          <motion.div
            id="north-africa"
            className="africa-region absolute cursor-pointer flex items-center justify-center"
            style={{
              top: '8%',
              left: '25%',
              width: '60px',
              height: '60px',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={() => handleRegionMouseEnter('north-africa')}
            onMouseLeave={handleRegionMouseLeave}
            onClick={() => handleRegionClick('north-africa')}
            animate={{}}
            transition={{ duration: 0.2 }}
            title="North Africa - Zineb Sedira (Algeria, France, UK)"
          >
            <div className="w-5 h-5 bg-yellow-400 rounded-full border-2 border-gray-800 shadow-lg"></div>
          </motion.div>

          {/* West Africa marker - centered in yellow region */}
          <motion.div
            id="west-africa"
            className="africa-region absolute cursor-pointer flex items-center justify-center"
            style={{
              top: '32%',
              left: '33%',
              width: '60px',
              height: '60px',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={() => handleRegionMouseEnter('west-africa')}
            onMouseLeave={handleRegionMouseLeave}
            onClick={() => handleRegionClick('west-africa')}
            animate={{}}
            transition={{ duration: 0.2 }}
            title="West Africa - El Anatsui (Ghana, Nigeria)"
          >
            <div className="w-5 h-5 bg-yellow-400 rounded-full border-2 border-gray-800 shadow-lg"></div>
          </motion.div>

          {/* Central Africa marker - centered in pink region */}
          <motion.div
            id="central-africa"
            className="africa-region absolute cursor-pointer flex items-center justify-center"
            style={{
              top: '52%',
              left: '52%',
              width: '60px',
              height: '60px',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={() => handleRegionMouseEnter('central-africa')}
            onMouseLeave={handleRegionMouseLeave}
            onClick={() => handleRegionClick('central-africa')}
            animate={{}}
            transition={{ duration: 0.2 }}
            title="Central Africa - Sammy Baloji (Democratic Republic of Congo)"
          >
            <div className="w-5 h-5 bg-yellow-400 rounded-full border-2 border-gray-800 shadow-lg"></div>
          </motion.div>

          {/* East Africa marker - centered in green region */}
          <motion.div
            id="east-africa"
            className="africa-region absolute cursor-pointer flex items-center justify-center"
            style={{
              top: '44%',
              left: '74%',
              width: '60px',
              height: '60px',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={() => handleRegionMouseEnter('east-africa')}
            onMouseLeave={handleRegionMouseLeave}
            onClick={() => handleRegionClick('east-africa')}
            animate={{}}
            transition={{ duration: 0.2 }}
            title="East Africa - Peterson Kamwathi (Kenya)"
          >
            <div className="w-5 h-5 bg-yellow-400 rounded-full border-2 border-gray-800 shadow-lg"></div>
          </motion.div>

          {/* Southern Africa marker - centered in purple region */}
          <motion.div
            id="southern-africa"
            className="africa-region absolute cursor-pointer flex items-center justify-center"
            style={{
              top: '87%',
              left: '54%',
              width: '60px',
              height: '60px',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={() => handleRegionMouseEnter('southern-africa')}
            onMouseLeave={handleRegionMouseLeave}
            onClick={() => handleRegionClick('southern-africa')}
            animate={{}}
            transition={{ duration: 0.2 }}
            title="Southern Africa - Nicholas Hlobo (South Africa)"
          >
            <div className="w-5 h-5 bg-yellow-400 rounded-full border-2 border-gray-800 shadow-lg"></div>
          </motion.div>
        </div>

        {/* Labels overlay (if showLabels is true) */}
        {showLabels && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute text-earth-700 text-sm font-medium" style={{top: '10%', left: '50%', transform: 'translateX(-50%)'}}>
              North
            </div>
            <div className="absolute text-earth-700 text-sm font-medium" style={{top: '40%', left: '25%', transform: 'translateX(-50%)'}}>
              West
            </div>
            <div className="absolute text-earth-700 text-sm font-medium" style={{top: '45%', left: '50%', transform: 'translateX(-50%)'}}>
              Central
            </div>
            <div className="absolute text-earth-700 text-sm font-medium" style={{top: '40%', left: '75%', transform: 'translateX(-50%)'}}>
              East
            </div>
            <div className="absolute text-earth-700 text-sm font-medium" style={{top: '70%', left: '50%', transform: 'translateX(-50%)'}}>
              Southern
            </div>
          </div>
        )}
      </motion.div>

    </div>
  )
}

export default InteractiveAfricaMap 