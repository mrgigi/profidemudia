
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PROFESSOR_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative w-full z-50">
      {/* Navigation Overlay - Fixed at the top with a subtle backdrop filter */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-lg py-4 border-b border-white/10 shadow-lg' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-white text-xl md:text-2xl font-bold serif tracking-tight drop-shadow-md">
            {PROFESSOR_INFO.name}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-xs font-semibold tracking-widest uppercase transition-all duration-300 drop-shadow-md pb-1 border-b-2 ${
                  location.pathname === link.path ? 'text-indigo-400 border-indigo-400' : 'text-white/80 border-transparent hover:text-white hover:border-white/30'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-900 flex flex-col items-center justify-center space-y-8 text-2xl text-white">
          <button 
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={32} />
          </button>
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-indigo-400 transition-colors uppercase tracking-widest font-bold"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
