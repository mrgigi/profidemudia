import React from 'react';
import { Microscope, BookOpen, Clock, Globe, ArrowUpRight, BarChart3, ShieldCheck, ExternalLink, ScrollText } from 'lucide-react';
import { ONGOING_RESEARCH_PUBLICATIONS, ONGOING_PROJECTS } from '../constants';

const OngoingResearch: React.FC = () => {
  return (
    <div className="relative pt-24 md:pt-32 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <div className="mb-20">
          <span className="text-indigo-400 font-semibold tracking-widest uppercase text-xs mb-3 block">Future Academic Horizons</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white serif mb-6 drop-shadow-2xl uppercase">Ongoing Research</h1>
          <div className="w-24 h-1.5 bg-indigo-500 mb-8 rounded-full"></div>
          <p className="text-xl text-indigo-100 font-light max-w-4xl leading-relaxed">
            Focused on migration, Internally Displaced Persons (IDPs), and incarcerated populations, 
            Professor Idemudia's ongoing projects directly address the intersections of 
            African and Gender psychology in a global context.
          </p>
        </div>

        {/* Section 1: Forthcoming Outputs */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg">
              <ScrollText className="text-white" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white serif">Forthcoming & Under Review (2024+)</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ONGOING_RESEARCH_PUBLICATIONS.map((pub, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 p-8 hover:bg-white/10 transition-all group h-full flex flex-col">
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
                <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-indigo-300 transition-colors">
                  {pub.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">{pub.authors}</p>
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500 italic">{pub.journal}</span>
                  {pub.id && <span className="text-[10px] text-indigo-500/60 font-mono tracking-tighter">ID: {pub.id}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contextual Tools Section */}
        <div className="bg-indigo-900/40 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 border border-white/10 shadow-2xl mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <ShieldCheck size={250} />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-bold text-white serif mb-8">Developing Contextual Tools</h2>
            <div className="space-y-6 text-indigo-100 text-lg font-light leading-relaxed">
              <p>
                A core pillar of ongoing research is the development and validation of culturally-sensitive mental health and trauma tools. 
                Traditional psychological instruments often fail to consider African cultural factors, which can lead to misdiagnoses 
                in clinical practice and skewed research outcomes.
              </p>
              <p>
                Current efforts focus on understanding how African populations process trauma journeys, assessing the reliability of 
                standard scales (CAPS-5, CD-RISC), and validating the <strong>BeLiv Microaggression Scale (BMS-27)</strong> with collaborators across 
                Europe and North America.
              </p>
            </div>
          </div>
        </div>

        {/* Major Projects Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg">
              <Microscope className="text-white" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white serif">Active Major Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ONGOING_PROJECTS.map((project) => (
              <div key={project.number} className="bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 p-10 hover:bg-white/10 transition-all group flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-xl group-hover:scale-110 transition-transform">
                    {project.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white serif mb-4 group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm mb-6 font-light">{project.description}</p>
                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-indigo-400 font-bold text-[10px] uppercase tracking-widest hover:text-white transition-colors"
                    >
                      Visit Project Portal <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Study Highlight (The 2020 Book) */}
        <div className="bg-slate-900/60 backdrop-blur-2xl rounded-[3rem] p-12 md:p-20 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white serif mb-10 leading-tight">
                Psychosocial Experiences of African Migrants in Six European Countries: A Mixed Method Study
              </h2>
              <div className="space-y-8 text-slate-300 font-light leading-relaxed">
                <p>
                  Published by <strong>Springer Nature</strong>, this open-access volume is the result of the prestigious Georg-Forster Life-Time Achievement Award. 
                  It presents an empirical account of 3,500 African migrants across Germany, Spain, Italy, the Netherlands, France, and the UK.
                </p>
                <div className="bg-indigo-900/20 p-8 rounded-3xl border border-indigo-500/20 border-l-8 border-l-indigo-500">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-3">
                    <Globe size={20} className="text-indigo-400" /> Global Policy Impact
                  </h4>
                  <p className="text-sm">
                    Recently cited in <strong>11 World policy documents</strong>, including the World Migration Report (WMR) 2022 (Chapter 3) 
                    and International Organization for Migration (IOM) reports published in multiple languages.
                  </p>
                </div>
                <p className="text-sm italic opacity-60">
                  The study investigates acculturative experiences and racism, offering pathways to integration despite everyday stressors.
                </p>
              </div>
            </div>
            <div className="bg-white/5 rounded-[2rem] p-8 border border-white/10 flex flex-col items-center justify-center text-center">
              <div className="mb-6">
                <BookOpen size={64} className="text-indigo-400" />
              </div>
              <h4 className="text-white font-bold mb-2">34+ Citations</h4>
              <p className="text-xs text-slate-500 mb-8 uppercase tracking-widest">Google Scholar Index</p>
              <a 
                href="https://link.springer.com/book/10.1007/978-3-030-48347-0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white text-slate-900 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-xl"
              >
                Access Full Book
              </a>
            </div>
          </div>
        </div>

        {/* Footer Vision */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <p className="text-slate-400 text-lg font-light leading-relaxed italic">
            "The prevalence of displacement due to climate change, war, and migration conditions will continue globally. 
            I plan to continue to contribute to the research on this important topic in the years ahead."
          </p>
          <div className="w-16 h-1 bg-indigo-500/30 mx-auto mt-12 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default OngoingResearch;