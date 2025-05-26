import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Home, Users, BookOpen } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { path: '/', label: 'Home', icon: Home },
    { 
      label: 'Artists', 
      icon: Users,
      dropdown: [
        { path: '/artist/el-anatsui', label: 'El Anatsui', region: 'West Africa' },
        { path: '/artist/sammy-baloji', label: 'Sammy Baloji', region: 'Central Africa' },
        { path: '/artist/peterson-kamwathi', label: 'Peterson Kamwathi', region: 'East Africa' },
        { path: '/artist/nicholas-hlobo', label: 'Nicholas Hlobo', region: 'Southern Africa' },
        { path: '/artist/zineb-sedira', label: 'Zineb Sedira', region: 'North Africa' },
      ]
    },
    { path: '/philosophy', label: 'Philosophy', icon: BookOpen },
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 text-earth-700 hover:text-earth-800 transition-colors"
            onClick={closeMenu}
          >
            <div className="w-8 h-8">
              <svg viewBox="0 0 32 32" className="fill-current">
                <path d="M4 8 L28 8 L26 12 L24 16 L20 18 L16 19 L12 18 L8 16 L6 12 Z" className="fill-earth-500" />
                <path d="M6 12 L8 16 L12 18 L14 20 L15 22 L14 24 L12 26 L8 24 L6 20 L5 16 Z" className="fill-earth-600" />
                <path d="M12 18 L16 19 L20 18 L22 20 L23 22 L22 24 L20 26 L16 24 L12 22 Z" className="fill-metal-500" />
                <path d="M20 18 L24 16 L26 12 L28 16 L27 20 L26 22 L24 24 L22 20 Z" className="fill-crimson-500" />
              </svg>
            </div>
            <div>
              <h1 className="font-serif font-semibold text-lg leading-none">Not A Country</h1>
              <p className="text-xs text-metal-600 leading-none">Digital Explorations</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button className="flex items-center space-x-1 text-metal-700 hover:text-earth-600 transition-colors font-medium">
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white rounded-lg shadow-xl border border-earth-200 py-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block px-4 py-3 text-metal-700 hover:bg-earth-50 hover:text-earth-600 transition-colors"
                            onClick={closeMenu}
                          >
                            <div className="font-medium">{subItem.label}</div>
                            <div className="text-xs text-metal-500">{subItem.region}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-earth-600'
                        : 'text-metal-700 hover:text-earth-600'
                    }`}
                    onClick={closeMenu}
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-metal-700 hover:text-earth-600 hover:bg-earth-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-white border-t border-earth-200"
      >
        <div className="px-4 py-4 space-y-3">
          {navigationItems.map((item, index) => (
            <div key={index}>
              {item.dropdown ? (
                <div>
                  <div className="flex items-center space-x-2 text-metal-700 font-medium py-2">
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </div>
                  <div className="ml-6 space-y-2">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block py-2 text-metal-600 hover:text-earth-600 transition-colors"
                        onClick={closeMenu}
                      >
                        <div className="font-medium">{subItem.label}</div>
                        <div className="text-xs text-metal-500">{subItem.region}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 py-2 font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-earth-600'
                      : 'text-metal-700 hover:text-earth-600'
                  }`}
                  onClick={closeMenu}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </nav>
  )
}

export default Navigation 