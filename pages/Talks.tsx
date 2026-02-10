import React from 'react';
import { Mic2, Calendar, MapPin, Quote } from 'lucide-react';
import { INVITED_TALKS } from '../constants';

const Talks: React.FC = () => {
  return (
    <div className="relative pt-24 md:pt-32 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-indigo-400 font-semibold tracking-widest uppercase text-xs mb-3 block">Professional Presentations</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white serif mb-6 drop-shadow-2xl">Invited Talks</h1>
          <div className="w-24 h-1.5 bg-indigo-500 mb-8 rounded-full"></div>
          <p className="text-xl text-indigo-100 font-light max-w-3xl leading-relaxed italic border-l-4 border-indigo-500/50 pl-6">
            A comprehensive record of keynote addresses, workshop presentations, and expert seminars delivered at leading international academic and professional forums.
          </p>
        </div>

        {/* Timeline Content */}
        <div className="space-y-10 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-500/20 hidden md:block transform -translate-x-1/2"></div>
          
          {INVITED_TALKS.map((talk, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-slate-900 shadow-xl z-10 hidden md:block transform -translate-x-1/2"></div>
              
              {/* Content Card */}
              <div className="w-full md:w-[45%]">
                <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 shadow-2xl hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-600 rounded-lg text-white group-hover:scale-110 transition-transform">
                      <Mic2 size={18} />
                    </div>
                    <span className="text-indigo-400 font-black text-sm tracking-widest uppercase">{talk.date}</span>
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-bold text-white serif mb-6 leading-tight group-hover:text-indigo-300 transition-colors">
                    {talk.title}
                  </h2>
                  
                  <div className="flex items-start gap-3 text-slate-400 text-sm">
                    <MapPin size={16} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                    <p className="italic">{talk.venue}</p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                     <div className="flex -space-x-2">
                        {[1, 2].map(i => (
                          <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-900 bg-indigo-900/40"></div>
                        ))}
                     </div>
                     <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-indigo-500">Academic Forum</span>
                  </div>
                </div>
              </div>
              
              {/* Spacer for MD screens to align cards */}
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-24 text-center">
          <div className="w-16 h-1 bg-white/10 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-500 text-xs uppercase tracking-[0.3em] font-bold">Documenting Over Three Decades of Scientific Discourse</p>
        </div>
      </div>
    </div>
  );
};

export default Talks;