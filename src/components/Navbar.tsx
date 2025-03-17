import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, X, Home, Info } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useScrollToTop();

  const handleAboutClick = () => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/#about';
    } else {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('menu-dropdown');
      const button = document.getElementById('menu-button');
      if (dropdown && button && !dropdown.contains(event.target as Node) && !button.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getNavLinkColor = (path: string) => {
    switch (path) {
      case '/services/website-design':
        return location.pathname === path ? 'text-indigo-400' : 'text-gray-300 hover:text-indigo-400';
      case '/services/ai-chat-agents':
        return location.pathname === path ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400';
      case '/services/lead-generation':
        return location.pathname === path ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400';
      case '/services/crm-integration':
        return location.pathname === path ? 'text-rose-400' : 'text-gray-300 hover:text-rose-400';
      default:
        return 'text-gray-300 hover:text-cyan-400';
    }
  };

  const services = [
    { path: '/services/website-design', name: 'Website Design' },
    { path: '/services/ai-chat-agents', name: 'AI Chat Agents' },
    { path: '/services/lead-generation', name: 'Lead Generation' },
    { path: '/services/crm-integration', name: 'CRM Integration' },
  ];

  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left Section - Menu Button */}
          <div className="w-1/3">
            <button 
              id="menu-button"
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>

          {/* Center Section - Logo */}
          <div className="w-1/3 flex justify-center">
            <Link to="/" className="h-16 flex items-center justify-center">
              <img 
                src="/logos/no-bg-color.svg"
                alt="NexTechAI"
                className="h-full w-auto object-contain min-w-[240px]"
              />
            </Link>
          </div>

          {/* Right Section - Empty space for balance */}
          <div className="w-1/3" />

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div 
              id="menu-dropdown"
              className="absolute top-full left-0 mt-2 w-64 bg-black/95 border border-gray-800 rounded-lg shadow-xl backdrop-blur-sm"
            >
              <div className="p-4">
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="w-5 h-5" />
                  <span>Home</span>
                </Link>

                <button
                  onClick={handleAboutClick}
                  className="w-full flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors mb-4 pb-4 border-b border-gray-800"
                >
                  <Info className="w-5 h-5" />
                  <span>About Us</span>
                </button>

                <h3 className="text-sm font-semibold text-gray-400 mb-4">Services</h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`block py-2 ${getNavLinkColor(service.path)}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <Link 
                    to="/contact" 
                    className="inline-block w-full px-4 py-2 text-center rounded-lg bg-cyan-500/20 border border-cyan-500/50 hover:bg-cyan-500/30 transition-colors backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;