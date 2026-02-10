import React, { useState } from 'react';
import { Book, ExternalLink, Download, FileText, ChevronDown, List, ScrollText, Image as ImageIcon } from 'lucide-react';
import { BANNER_IMAGE } from '../constants';

const PublicationSection: React.FC<{ 
  title: string; 
  bgImage?: string; 
  children: React.ReactNode; 
  links?: {title: string, url: string}[];
  initiallyOpen?: boolean;
}> = ({ title, bgImage, children, links, initiallyOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
    <div className="mb-6 group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all text-left shadow-xl"
      >
        <div className="flex items-center gap-4 md:gap-6">
          <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg">
            <ScrollText className="text-white" size={24} />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white serif">{title}</h2>
        </div>
        <ChevronDown 
          className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={28} 
        />
      </button>
      
      <div className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[15000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <div className="relative p-6 md:p-10 bg-slate-900/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/5 shadow-2xl">
          {bgImage && (
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none rounded-[2.5rem]" 
              style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}
            ></div>
          )}
          <div className="relative z-10">
            <div className="prose prose-invert prose-base md:prose-lg max-w-none text-slate-200 leading-relaxed font-light space-y-6">
              {children}
            </div>
            
            {links && links.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-indigo-400 font-bold text-[10px] uppercase tracking-widest mb-6">Related Links</h3>
                <div className="flex flex-wrap gap-3">
                  {links.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl text-xs md:text-sm border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all text-slate-300"
                    >
                      {link.title} <ExternalLink size={14} className="text-indigo-400" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Publications: React.FC = () => {
  return (
    <div className="relative pt-24 md:pt-32 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-indigo-400 font-semibold tracking-widest uppercase text-xs mb-3 block">Scientific Bibliography</span>
          <h1 className="text-3xl md:text-6xl font-bold text-white serif mb-6 drop-shadow-2xl">Published Articles</h1>
          <div className="w-20 md:w-24 h-1.5 bg-indigo-500 mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-indigo-100 font-light max-w-2xl leading-relaxed italic border-l-4 border-indigo-500/50 pl-6">
            A chronological record of over three decades of peer-reviewed research, exploring psychopathology, 
            cultural dynamics, and clinical interventions in Africa and beyond.
          </p>
        </div>

        {/* Chronological Sections */}
        <PublicationSection 
          title="Section 1: 1989-2000" 
          bgImage="https://static.wixstatic.com/media/11062b_20c28478658b408cb6c6b0fd52f0077e~mv2_d_3695_2077_s_2.jpg/v1/fill/w_160,h_90,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_20c28478658b408cb6c6b0fd52f0077e~mv2_d_3695_2077_s_2.jpg"
          initiallyOpen={false}
        >
          <p>Oyefeso A., Osinowo H.O., and Idemudia E.S. (1989) Sex and Propinquity as Predictors of attitude towards the mentally ill among Nigerians. Indian Journal of Behaviour, Vol. 13, (3), 27-32.</p>
          <p>Idemudia E.S. (1994) 'Sex and Marital Stability/Instability as Predictors of Relapse among Depressed Patients', African Journal for the Psychological Study of Social Issues. Vol. (2), 210-218</p>
        </PublicationSection>

        <PublicationSection 
          title="Section 2: 2001-2010" 
          bgImage="https://static.wixstatic.com/media/11062b_20c28478658b408cb6c6b0fd52f0077e~mv2_d_3695_2077_s_2.jpg/v1/fill/w_160,h_90,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_20c28478658b408cb6c6b0fd52f0077e~mv2_d_3695_2077_s_2.jpg"
          links={[{title: 'wcprr.org', url: 'http://www.wcprr.org'}]}
        >
          <p>Madu S.N., Idemudia, E.S. & Jegede S.A. (2001) Perceived parental disorders as risk factors for child sexual, Physical, and emotional abuse among high school students in the Mpumalanga province in South Africa. Issues in Health Psychology, Vol.8, 265-279</p>
        </PublicationSection>

        {[2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024].map(year => (
          <PublicationSection key={year} title={`Section: ${year}`}>
            <p className="text-slate-200">Peer-reviewed publications and clinical research contributions for the year {year}.</p>
            <p className="text-xs text-slate-400 italic">Please refer to the full CV for detailed citations of this period.</p>
          </PublicationSection>
        ))}

        <PublicationSection title="2025 Publications" initiallyOpen={true}>
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-sm md:text-base">Akokuwebe ME, Palamuleni ME & Idemudia ES (2025). Population dynamics and digitalization: implications for COVID-19 data sources in South Africa. Front. Public Health 12:1537057.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-sm md:text-base">Ajele, K.W. & Idemudia, E.S. (2025). The role of depression and diabetes distress in glycemic control: A meta-analysis. Diabetes Research and Clinical Practice, P.1-10.</p>
            </div>
          </div>
        </PublicationSection>

        {/* MONOGRAPHS & BOOKS - RESTORED CONTENT */}
        <PublicationSection title="Publications: BOOKS" initiallyOpen={true}>
          <div className="space-y-20">
            {/* Latest Book */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
               <div className="md:w-1/3 flex flex-col items-center">
                 <img 
                   src="https://static.wixstatic.com/media/bb7d0d_846cba1e30d8434fa44769860fdeff37~mv2.jpeg" 
                   alt="Latest Book Cover" 
                   className="w-48 md:w-56 shadow-2xl rounded-lg hover:scale-105 transition-transform cursor-pointer border border-white/10" 
                 />
                 <span className="mt-4 text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Latest Publication</span>
               </div>
               <div className="md:w-2/3">
                 <h3 className="text-2xl md:text-3xl font-bold text-white serif mb-4">Latest Scholarly Monograph</h3>
                 <p className="text-slate-300 text-base md:text-lg mb-6 font-light leading-relaxed">
                   A comprehensive new investigation into the intersection of global health policy and clinical psychology, addressing modern stressors in diverse populations.
                 </p>
                 <div className="flex gap-4">
                    <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-xs font-bold text-indigo-400">2025 Edition</span>
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-slate-400 uppercase">Available Now</span>
                 </div>
               </div>
            </div>

            {/* Book 3 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 border-t border-white/10 pt-12">
               <div className="md:w-1/3 flex flex-col items-center">
                 <img 
                   src="https://static.wixstatic.com/media/bb7d0d_408337ebd849460f883440e2c39adc87~mv2.png" 
                   alt="Book 3 Cover" 
                   className="w-48 shadow-2xl rounded-lg hover:scale-105 transition-transform cursor-pointer border border-white/10" 
                 />
                 <span className="mt-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Book 3 (2020)</span>
               </div>
               <div className="md:w-2/3">
                 <h3 className="text-xl md:text-2xl font-bold text-white serif mb-2">Psychosocial experiences of African migrants in Six European countries</h3>
                 <p className="text-indigo-400 text-sm italic mb-6">A mixed method study (Open Access)</p>
                 <a 
                   href="https://www.springer.com/gp/book/9783030483463" 
                   target="_blank" 
                   className="inline-flex items-center gap-2 bg-indigo-600 px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest text-white hover:bg-indigo-500 transition-all mb-8 shadow-lg"
                 >
                   View at Springer Europe <ExternalLink size={14} />
                 </a>
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                   <h4 className="text-white font-bold text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2"><List size={14} /> Table of Contents (11 Chapters)</h4>
                   <ul className="text-[11px] md:text-xs space-y-2 text-slate-300 columns-1 md:columns-2">
                     <li>Setting the Scene (1-14)</li>
                     <li>Patterns & Trends (15-31)</li>
                     <li>Travelling Routes (33-49)</li>
                     <li>Theoretical Explanations (51-81)</li>
                     <li>Social Experiences (119-135)</li>
                     <li>Gathering the Data (137-174)</li>
                     <li>Results: Quantitative (175-193)</li>
                     <li>Results: Qualitative (195-221)</li>
                     <li>Impact & Recommendations (233-237)</li>
                   </ul>
                 </div>
               </div>
            </div>

            {/* Book 2 - RESTORED */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 border-t border-white/10 pt-12">
               <div className="md:w-1/3 flex flex-col items-center">
                 <img 
                   src="https://static.wixstatic.com/media/bb7d0d_78352bf36df142699bf868ddd8478e09~mv2.png" 
                   alt="Book 2 Cover" 
                   className="w-44 shadow-2xl rounded-lg hover:scale-105 transition-transform border border-white/10" 
                 />
                 <span className="mt-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Book 2 (2010)</span>
               </div>
               <div className="md:w-2/3">
                 <h3 className="text-xl md:text-2xl font-bold text-white serif mb-2">I'm an alien in Deutschland</h3>
                 <p className="text-indigo-400 text-sm italic mb-6">A quantitative mental health case study of African Immigrants in Germany</p>
                 <p className="text-slate-300 text-sm mb-6 leading-relaxed">PeterLang Publishers. ISBN: 978-3-631-59975-4. Includes an epilogue by John W. Berry (Queens University, Canada).</p>
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                   <h4 className="text-white font-bold text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2"><List size={14} /> Table of Contents Preview</h4>
                   <ul className="text-[11px] md:text-xs space-y-2 text-slate-300 columns-1 md:columns-2">
                     <li>Migration patterns in Africa (15-18)</li>
                     <li>Theoretical Perspectives (19-26)</li>
                     <li>Socio-demographic traits (43-49)</li>
                     <li>Mental health status (59-66)</li>
                     <li>Value preferences (67-71)</li>
                     <li>Acculturative stress & racism (73-75)</li>
                     <li>Discussion & conclusions (81-88)</li>
                   </ul>
                 </div>
               </div>
            </div>

            {/* Book 1 - RESTORED */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 border-t border-white/10 pt-12">
               <div className="md:w-1/3 flex flex-col items-center">
                 <div className="w-44 h-60 bg-slate-800 rounded-lg shadow-2xl flex items-center justify-center border border-white/10">
                   <Book size={64} className="text-indigo-400/50" />
                 </div>
                 <span className="mt-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Book 1 (2005)</span>
               </div>
               <div className="md:w-2/3">
                 <h3 className="text-xl md:text-2xl font-bold text-white serif mb-4">Applied Psychology</h3>
                 <p className="text-slate-300 text-sm leading-relaxed mb-6">Idemudia, E.S. and Shikongo, A. (2005). Applied Psychology (Centre for External Study ed). University of Namibia, Namibia. ISBN: 99916-67-63-6</p>
                 <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl inline-block">
                    <span className="text-xs font-bold text-indigo-400">Scholarly Textbook</span>
                 </div>
               </div>
            </div>
          </div>
        </PublicationSection>

        {/* Footer Design Element */}
        <div className="mt-20 text-center pb-10">
           <div className="w-16 h-1 bg-white/10 mx-auto mb-8 rounded-full"></div>
           <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-bold">Documenting Over 380 Scientific Contributions</p>
        </div>
      </div>
    </div>
  );
};

export default Publications;