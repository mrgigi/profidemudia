
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Smartphone } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/90 backdrop-blur-xl text-slate-300 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-white/5 pb-16">
        {/* Column 1: Connect with me */}
        <div>
          <h3 className="text-white text-xl font-bold mb-8 serif tracking-wide">Connect with me</h3>
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-indigo-400 transition-colors text-sm font-medium tracking-wider">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Contact */}
        <div>
          <h3 className="text-white text-xl font-bold mb-8 serif tracking-wide">Contact</h3>
          <div className="space-y-5">
            <div className="flex items-center space-x-4 group">
              <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                <Smartphone size={18} className="text-indigo-400" />
              </div>
              <span className="text-sm tracking-wide">+27 72 795 3933 (Mobile)</span>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                <Phone size={18} className="text-indigo-400" />
              </div>
              <span className="text-sm tracking-wide">+27 18 389 2899 (Office)</span>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                <Mail size={18} className="text-indigo-400" />
              </div>
              <span className="text-sm tracking-wide">erhabor.idemudia@nwu.ac.za</span>
            </div>
            <div className="flex space-x-4 mt-8">
              <a 
                href="https://www.linkedin.com/in/erhabor-idemudia-3a55931/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-all transform hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a 
                href="https://twitter.com/ErhaborIdemudia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-all transform hover:-translate-y-1"
                aria-label="Twitter Profile"
              >
                <Twitter size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 3: Address */}
        <div>
          <h3 className="text-white text-xl font-bold mb-8 serif tracking-wide">Address</h3>
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <MapPin size={18} className="text-indigo-400 flex-shrink-0" />
            </div>
            <address className="not-italic text-sm leading-relaxed tracking-wide opacity-80">
              Faculty of Humanities, Building A6, (Great Hall), Rm G 103,<br />
              North-West University (MC),<br />
              Albert Luthuli/University Drive,<br />
              Mmabatho 2735,<br />
              South Africa
            </address>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-40 text-center md:text-left">
        <p>&copy; 2026 Professor Idemudia Erhabor. All rights reserved.</p>
        <a 
          href="http://www.gigimobile.co.za" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-4 md:mt-0 font-medium hover:text-indigo-400 transition-colors"
        >
          Designed with ❤️ from Gigimobile Tech Solutions™
        </a>
      </div>
    </footer>
  );
};

export default Footer;
