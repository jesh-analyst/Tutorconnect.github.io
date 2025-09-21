import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/#features', label: 'Features' },
    { to: '/#how-it-works', label: 'How It Works' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
            aria-label="TutorConnect - Go to homepage"
          >
            TutorConnect
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4">
              <Link
                to="/find-tutor"
                className="btn btn-secondary"
              >
                Find Tutor
              </Link>
              <Link
                to="/become-tutor"
                className="btn btn-primary"
              >
                Become Tutor
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-600 hover:text-primary-600 transition-colors font-medium px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link
                  to="/find-tutor"
                  className="btn btn-secondary w-full"
                >
                  Find Tutor
                </Link>
                <Link
                  to="/become-tutor"
                  className="btn btn-primary w-full"
                >
                  Become Tutor
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header