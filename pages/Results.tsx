import React from 'react';
import { ExternalLink, BookOpen, Newspaper, User, Globe, ArrowUpRight, Search } from 'lucide-react';
import { RESEARCH_RESULTS } from '../constants';

const Results: React.FC = () => {
  return (
    <div className="relative pt-24 md:pt-32 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="mb-16 text-left">
          <span className="text-indigo-400 font-semibold tracking-widest uppercase text-xs mb-3 block">Scientific Impact</span>
          <h1 className="text-3xl md:text-6xl font-bold text-white serif mb-6 drop-shadow-2xl uppercase">Research Results</h1>
          <div className="w-20 md:w-24 h-1.5 bg-indigo-500 mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-indigo-100 font-light max-w-2xl leading-relaxed italic border-l-4 border-indigo-500/50 pl-6 text-justify">
            Detailed clinical findings and project outcomes are documented here. Click any title to access the full academic records.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 text-left">
          {RESEARCH_RESULTS.map((section, sIdx) => (
            <div 
              key={sIdx} 
              className="bg-slate-900/60 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-8 md:p-12 shadow-2xl hover:bg-white/10 transition-all group"
            >
              <div className="flex items-center gap-4 mb-10 pb-4 border-b border-white/10">
                <div className="p-3 bg-indigo-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                  {section.category.includes('News') ? <Newspaper size={24} /> : 
                   section.category.includes('Academic') ? <User size={24} /> : 
                   section.category.includes('Publications') ? <BookOpen size={24} /> : <Globe size={24} />}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white serif">{section.category}</h2>
              </div>
              
              <div className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <a 
                    key={lIdx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-between items-center p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-indigo-500/30 transition-all group/link"
                  >
                    <span className="text-slate-200 text-sm md:text-base font-light group-hover/link:text-white transition-colors pr-4 text-justify">
                      {link.title}
                    </span>
                    <div className="flex-shrink-0 opacity-40 group-hover/link:opacity-100 transition-opacity">
                      <ArrowUpRight size={18} className="text-indigo-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center">
          <div className="bg-indigo-900/40 backdrop-blur-xl p-8 md:p-16 rounded-[3rem] border border-white/10 max-w-4xl mx-auto flex flex-col items-center shadow-2xl">
            <Search className="text-indigo-400 mb-6" size={40} />
            <p className="text-indigo-100 text-base md:text-xl font-light leading-relaxed mb-8 max-w-2xl text-justify">
              For specific data requests or collaborative inquiries regarding ongoing psychological research, please contact our laboratory directly.
            </p>
            <a href="mailto:erhabor.idemudia@nwu.ac.za" className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-xl">
              Contact Research Office
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;