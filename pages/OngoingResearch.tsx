import React from 'react';
import { Microscope, BookOpen, Clock, Globe, ArrowUpRight, BarChart3, ShieldCheck, ExternalLink, ScrollText } from 'lucide-react';
import { ONGOING_RESEARCH_PUBLICATIONS, ONGOING_PROJECTS } from '../constants';

const OngoingResearch: React.FC = () => {
  return (
    <div className="relative pt-24 md:pt-32 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Hero Section */}
        <div className="mb-16 md:mb-20">
          <span className="text-indigo-400 font-semibold tracking-widest uppercase text-xs mb-3 block">Future Academic Horizons</span>
          <h1 className="text-3xl md:text-6xl font-bold text-white serif mb-6 drop-shadow-2xl uppercase leading-tight">Ongoing Research</h1>
          <div className="w-16 md:w-24 h-1.5 bg-indigo-500 mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-indigo-100 font-light max-w-4xl leading-relaxed">
            Focused on migration, Internally Displaced Persons (IDPs), and incarcerated populations, 
            Professor Idemudia's ongoing projects address the intersections of 
            African and Gender psychology in a global context.
          </p>
        </div>

        {/* Section 1: Forthcoming Outputs */}
        <div className="mb-20 md:mb-24">
          <div className="flex items-center gap-4 mb-10 md:mb-12">
            <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg">
              <ScrollText className="text-white" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white serif">Forthcoming & Under Review</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {ONGOING_RESEARCH_PUBLICATIONS.map((pub, idx) => (
              <div key={idx} className="bg-slate-900/60 backdrop-blur-md rounded-[2rem] border border-white/10 p-6 md:p-8 hover:bg-white/10 transition-all group h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                    pub.status.includes('Accepted') 
                      ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                      : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                  }`}>
                    {pub.status}
                  </span>
                  {pub.url && (
                    <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug group-hover:text-indigo-300 transition-colors">
                  {pub.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm mb-6 flex-grow leading-relaxed">{pub.authors}</p>
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-medium text-slate-500 italic">{pub.journal}</span>
                  {pub.id && <span className="text-[9px] text-indigo-500/60 font-mono tracking-tighter">ID: {pub.id}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contextual Tools Section */}
        <div className="bg-indigo-900/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 border border-white/10 shadow-2xl mb-20 md:mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none hidden lg:block">
            <ShieldCheck size={250} className="text-white" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white serif mb-6 md:mb-8">Developing Contextual Tools</h2>
            <div className="space-y-6 text-indigo-100 text-base md:text-lg font-light leading-relaxed">
              <p>
                A core pillar of ongoing research is the development and validation of culturally-sensitive mental health and trauma tools. 
                Traditional psychological instruments often fail to consider African cultural factors.
              </p>
              <p>
                Current efforts focus on understanding how African populations process trauma journeys, assessing reliability of standard scales (CAPS-5, CD-RISC), 
                and validating the <strong>BeLiv Microaggression Scale (BMS-27)</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Major Projects Grid */}
        <div className="mb-20 md:mb-24">
          <div className="flex items-center gap-4 mb-10 md:mb-12">
            <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg">
              <Microscope className="text-white" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white serif">Active Major Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {ONGOING_PROJECTS.map((project) => (
              <div key={project.number} className="bg-slate-900/60 backdrop-blur-md rounded-[2rem] border border-white/10 p-6 md:p-10 hover:bg-white/10 transition-all group flex flex-col sm:flex-row gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-xl md:text-2xl font-black text-white shadow-xl group-hover:scale-110 transition-transform">
                    {project.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-white serif mb-3 group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-xs md:text-sm mb-6 font-light">{project.description}</p>
                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-indigo-400 font-bold text-[9px] md:text-[10px] uppercase tracking-widest hover:text-white transition-colors"
                    >
                      Project Portal <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Impact Note */}
        <div className="bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-16 border border-white/10 shadow-2xl text-center">
            <Globe size={40} className="text-indigo-400 mx-auto mb-8" />
            <h2 className="text-2xl md:text-4xl font-bold text-white serif mb-6">Global Policy Influence</h2>
            <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-sm md:text-lg font-light">
                Research findings have been referenced in <strong>11 World policy documents</strong> including reports by the 
                International Organization for Migration (IOM) in Portuguese, Russian, and Swahili.
            </p>
            <div className="w-12 h-1 bg-white/10 mx-auto mt-12 rounded-full"></div>
            <p className="text-indigo-400 text-[10px] uppercase tracking-[0.3em] font-bold mt-8">Documenting Over 380 Scientific Contributions</p>
        </div>
      </div>
    </div>
  );
};

export default OngoingResearch;