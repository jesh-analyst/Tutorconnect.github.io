import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">TutorConnect</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Revolutionizing education through quantum-powered matching technology. 
              Connect with expert tutors and unlock your learning potential.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:contact@tutorconnect.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+1234567890"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Call us"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/find-tutor" 
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Find Tutors
              </Link>
              <Link 
                to="/become-tutor" 
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Become a Tutor
              </Link>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/help" 
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Help Center
              </Link>
              <Link 
                to="/faq" 
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                FAQ
              </Link>
              <Link 
                to="/privacy" 
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Education Street<br />
                  Learning City, LC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a 
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a 
                  href="mailto:contact@tutorconnect.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  contact@tutorconnect.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} TutorConnect. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms
              </Link>
              <Link 
                to="/cookies" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer