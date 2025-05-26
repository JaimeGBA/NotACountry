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
      <motion.svg 
        viewBox="0 0 800 800" 
        className="w-full h-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <defs>
          {/* Enhanced gradients for artistic effect */}
          <linearGradient id="westGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#8B4513', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#CD853F', stopOpacity: 0.9}} />
          </linearGradient>
          
          <linearGradient id="centralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#2F4F4F', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#708090', stopOpacity: 0.9}} />
          </linearGradient>
          
          <linearGradient id="eastGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#8B0000', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#DC143C', stopOpacity: 0.9}} />
          </linearGradient>
          
          <linearGradient id="southernGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#4B0082', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#9370DB', stopOpacity: 0.9}} />
          </linearGradient>
          
          <linearGradient id="northGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#B8860B', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#DAA520', stopOpacity: 0.9}} />
          </linearGradient>
          
          {/* Enhanced hover effects */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="shadow">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="rgba(0,0,0,0.2)"/>
          </filter>
        </defs>
        
        {/* North Africa */}
        <motion.path 
          id="north-africa" 
          className="africa-region cursor-pointer transition-all duration-300"
          fill="url(#northGradient)" 
          stroke="#2C1810" 
          strokeWidth="2"
          d="M 100 80 
             L 700 80 
             L 720 120 
             L 680 180 
             L 620 200 
             L 580 220 
             L 520 240 
             L 460 250 
             L 400 260 
             L 340 250 
             L 280 240 
             L 220 220 
             L 180 200 
             L 140 180 
             L 120 140 
             Z"
          animate={{
            filter: hoveredRegion === 'north-africa' ? 'url(#glow)' : 'url(#shadow)',
            opacity: hoveredRegion === 'north-africa' ? 0.9 : 0.8,
            scale: hoveredRegion === 'north-africa' ? 1.02 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          <title>North Africa - Zineb Sedira (Algeria, France, UK)</title>
        </motion.path>
        
        {/* West Africa */}
        <motion.path 
          id="west-africa" 
          className="africa-region cursor-pointer transition-all duration-300"
          fill="url(#westGradient)" 
          stroke="#2C1810" 
          strokeWidth="2"
          d="M 120 140 
             L 180 200 
             L 220 220 
             L 280 240 
             L 340 250 
             L 360 280 
             L 380 320 
             L 390 360 
             L 380 400 
             L 360 440 
             L 340 480 
             L 300 520 
             L 260 540 
             L 220 520 
             L 180 480 
             L 160 440 
             L 150 400 
             L 140 360 
             L 130 320 
             L 120 280 
             L 110 240 
             L 115 200 
             Z"
          animate={{
            filter: hoveredRegion === 'west-africa' ? 'url(#glow)' : 'url(#shadow)',
            opacity: hoveredRegion === 'west-africa' ? 0.9 : 0.8,
            scale: hoveredRegion === 'west-africa' ? 1.02 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          <title>West Africa - El Anatsui (Ghana, Nigeria)</title>
        </motion.path>
        
        {/* Central Africa */}
        <motion.path 
          id="central-africa" 
          className="africa-region cursor-pointer transition-all duration-300"
          fill="url(#centralGradient)" 
          stroke="#2C1810" 
          strokeWidth="2"
          d="M 340 250 
             L 400 260 
             L 460 250 
             L 520 240 
             L 540 280 
             L 560 320 
             L 580 360 
             L 590 400 
             L 580 440 
             L 560 480 
             L 540 520 
             L 520 540 
             L 480 550 
             L 440 540 
             L 400 530 
             L 360 520 
             L 340 480 
             L 360 440 
             L 380 400 
             L 390 360 
             L 380 320 
             L 360 280 
             Z"
          animate={{
            filter: hoveredRegion === 'central-africa' ? 'url(#glow)' : 'url(#shadow)',
            opacity: hoveredRegion === 'central-africa' ? 0.9 : 0.8,
            scale: hoveredRegion === 'central-africa' ? 1.02 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          <title>Central Africa - Sammy Baloji (Democratic Republic of Congo)</title>
        </motion.path>
        
        {/* East Africa */}
        <motion.path 
          id="east-africa" 
          className="africa-region cursor-pointer transition-all duration-300"
          fill="url(#eastGradient)" 
          stroke="#2C1810" 
          strokeWidth="2"
          d="M 520 240 
             L 580 220 
             L 620 200 
             L 680 180 
             L 720 120 
             L 740 160 
             L 750 200 
             L 760 240 
             L 750 280 
             L 740 320 
             L 730 360 
             L 720 400 
             L 710 440 
             L 690 480 
             L 670 520 
             L 640 540 
             L 600 550 
             L 560 540 
             L 540 520 
             L 560 480 
             L 580 440 
             L 590 400 
             L 580 360 
             L 560 320 
             L 540 280 
             Z"
          animate={{
            filter: hoveredRegion === 'east-africa' ? 'url(#glow)' : 'url(#shadow)',
            opacity: hoveredRegion === 'east-africa' ? 0.9 : 0.8,
            scale: hoveredRegion === 'east-africa' ? 1.02 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          <title>East Africa - Peterson Kamwathi (Kenya)</title>
        </motion.path>
        
        {/* Southern Africa */}
        <motion.path 
          id="southern-africa" 
          className="africa-region cursor-pointer transition-all duration-300"
          fill="url(#southernGradient)" 
          stroke="#2C1810" 
          strokeWidth="2"
          d="M 300 520 
             L 340 480 
             L 360 520 
             L 400 530 
             L 440 540 
             L 480 550 
             L 520 540 
             L 540 520 
             L 560 540 
             L 600 550 
             L 640 540 
             L 620 580 
             L 600 620 
             L 580 660 
             L 540 680 
             L 500 690 
             L 460 680 
             L 420 670 
             L 380 660 
             L 340 640 
             L 320 600 
             L 310 560 
             Z"
          animate={{
            filter: hoveredRegion === 'southern-africa' ? 'url(#glow)' : 'url(#shadow)',
            opacity: hoveredRegion === 'southern-africa' ? 0.9 : 0.8,
            scale: hoveredRegion === 'southern-africa' ? 1.02 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          <title>Southern Africa - Nicholas Hlobo (South Africa)</title>
        </motion.path>
        
        {/* Artist markers/dots for visual reference */}
        <motion.circle 
          cx="460" cy="180" r="8" 
          fill="#FFD700" 
          stroke="#2C1810" 
          strokeWidth="2" 
          className="cursor-pointer"
          animate={{
            scale: hoveredRegion === 'north-africa' ? 1.3 : 1,
            opacity: hoveredRegion === 'north-africa' ? 1 : 0.9
          }}
          onClick={() => handleRegionClick('north-africa')}
        >
          <title>Zineb Sedira</title>
        </motion.circle>
        
        <motion.circle 
          cx="250" cy="350" r="8" 
          fill="#FFD700" 
          stroke="#2C1810" 
          strokeWidth="2" 
          className="cursor-pointer"
          animate={{
            scale: hoveredRegion === 'west-africa' ? 1.3 : 1,
            opacity: hoveredRegion === 'west-africa' ? 1 : 0.9
          }}
          onClick={() => handleRegionClick('west-africa')}
        >
          <title>El Anatsui</title>
        </motion.circle>
        
        <motion.circle 
          cx="450" cy="400" r="8" 
          fill="#FFD700" 
          stroke="#2C1810" 
          strokeWidth="2" 
          className="cursor-pointer"
          animate={{
            scale: hoveredRegion === 'central-africa' ? 1.3 : 1,
            opacity: hoveredRegion === 'central-africa' ? 1 : 0.9
          }}
          onClick={() => handleRegionClick('central-africa')}
        >
          <title>Sammy Baloji</title>
        </motion.circle>
        
        <motion.circle 
          cx="650" cy="350" r="8" 
          fill="#FFD700" 
          stroke="#2C1810" 
          strokeWidth="2" 
          className="cursor-pointer"
          animate={{
            scale: hoveredRegion === 'east-africa' ? 1.3 : 1,
            opacity: hoveredRegion === 'east-africa' ? 1 : 0.9
          }}
          onClick={() => handleRegionClick('east-africa')}
        >
          <title>Peterson Kamwathi</title>
        </motion.circle>
        
        <motion.circle 
          cx="480" cy="600" r="8" 
          fill="#FFD700" 
          stroke="#2C1810" 
          strokeWidth="2" 
          className="cursor-pointer"
          animate={{
            scale: hoveredRegion === 'southern-africa' ? 1.3 : 1,
            opacity: hoveredRegion === 'southern-africa' ? 1 : 0.9
          }}
          onClick={() => handleRegionClick('southern-africa')}
        >
          <title>Nicholas Hlobo</title>
        </motion.circle>

        {/* Labels (if showLabels is true) */}
        {showLabels && (
          <g className="region-labels">
            <text x="460" y="150" textAnchor="middle" className="fill-earth-700 text-sm font-medium">
              North
            </text>
            <text x="250" y="320" textAnchor="middle" className="fill-earth-700 text-sm font-medium">
              West
            </text>
            <text x="450" y="370" textAnchor="middle" className="fill-earth-700 text-sm font-medium">
              Central
            </text>
            <text x="650" y="320" textAnchor="middle" className="fill-earth-700 text-sm font-medium">
              East
            </text>
            <text x="480" y="570" textAnchor="middle" className="fill-earth-700 text-sm font-medium">
              Southern
            </text>
          </g>
        )}
      </motion.svg>
    </div>
  )
}

export default InteractiveAfricaMap 