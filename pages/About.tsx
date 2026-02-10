import React, { useState } from 'react';
import { 
  Download, 
  Award, 
  BookOpen, 
  Microscope, 
  ExternalLink, 
  ChevronRight, 
  Users, 
  Globe, 
  BookText, 
  Maximize2, 
  Calendar, 
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Library,
  Briefcase
} from 'lucide-react';
import { 
  ABOUT_HEADER_IMAGE, 
  SECTION_BG_IMAGE, 
  CV_DOWNLOAD_LINK, 
  HISTORIC_AWARDS, 
  RECENT_AWARDS,
  HONOURS_AND_SOCIETIES
} from '../constants';
import ImageModal from '../components/ImageModal';

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="mb-6 overflow-hidden">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-8 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all text-left shadow-xl group"
      >
        <div className="flex items-center gap-4 md:gap-6">
          <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg">
            <ScrollText className="text-white" size={24} />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white serif">{title}</h2>
        </div>
        <ChevronDown 
          className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={28} 
        />
      </button>
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[10000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-6 md:p-12 lg:p-16 bg-slate-900/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/5 shadow-2xl relative">
          <div className="relative z-10 text-slate-200">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrollText = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 12h-5" /><path d="M15 8h-5" /><path d="M19 17V5a2 2 0 0 0-2-2H4" /><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
  </svg>
);

const About: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [openSections, setOpenSections] = useState<string[]>(['Education', 'Research Interests']);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section) 
        : [...prev, section]
    );
  };

  return (
    <div className="relative pt-24 md:pt-32 pb-20 overflow-x-hidden">
      <ImageModal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        imageSrc={selectedImage || ''} 
      />

      <div className="container mx-auto px-4 md:px-6">
        
        {/* TOP SECTION: Header & Intro */}
        <div className="mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 group border border-white/10">
            <img 
              src={ABOUT_HEADER_IMAGE} 
              alt="Professor Erhabor Sunday Idemudia" 
              className="w-full h-[350px] md:h-[600px] lg:h-[750px] object-cover transition-transform duration-1000 group-hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(ABOUT_HEADER_IMAGE)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
               <button 
                onClick={() => setSelectedImage(ABOUT_HEADER_IMAGE)}
                className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition-all"
               >
                 <Maximize2 size={24} />
               </button>
            </div>
            <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-end gap-6 pointer-events-none">
              <div className="max-w-2xl pointer-events-auto text-left w-full">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white serif mb-3 drop-shadow-2xl">About Me</h1>
                <div className="w-16 md:w-24 h-1.5 bg-indigo-500 mb-4 rounded-full"></div>
                <p className="text-indigo-200 text-lg md:text-2xl font-light drop-shadow-lg italic serif">Professor (Full) of Research & Clinical Psychology</p>
              </div>
              <a 
                href={CV_DOWNLOAD_LINK} 
                className="bg-white text-slate-900 hover:bg-indigo-600 hover:text-white px-6 md:px-10 py-3 md:py-5 rounded-full font-bold flex items-center gap-3 transition-all shadow-2xl group transform hover:-translate-y-1 active:scale-95 pointer-events-auto text-sm md:text-base"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Full CV
              </a>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl p-8 md:p-16 rounded-[2.5rem] border border-white/10 shadow-2xl relative mb-16">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none hidden lg:block">
                <BookOpen size={200} className="text-white" />
            </div>
            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-slate-200 leading-relaxed font-light">
              <p className="mb-8 first-letter:text-5xl md:first-letter:text-7xl first-letter:font-bold first-letter:text-indigo-400 first-letter:mr-3 first-letter:float-left">
                He is an Associate Editor with <strong>Heliyon</strong> (The Netherlands) and the <strong>Journal of Child & Adolescent Mental Health</strong> (South Africa). 
                A Fellow of the Nigerian Psychological Association (NPA), Nigerian Association of Clinical Psychologists (NACP), 
                Alexander von Humboldt (AvH) Foundation in Germany, and the Stellenbosch Institute for Advanced Studies (South Africa).
              </p>
              <p className="mb-8">
                Research interests include applied research with vulnerable and marginalised populations in the areas of general psychopathology (CPTSD, PTSS, PTSD, Trauma) and mental health in general. Such populations include but are not limited to migrants/refugees, Internally Displaced Persons (IDPs), Prisoners, Persons with disabilities or physically challenged. The secondary research focus includes cultural aspects of African-oriented psychology and illness attributions, which overlaps the primary focus area and directly challenges the Western-oriented psychopathologies and illness causation from African cultural perspectives.
              </p>
              <p className="mb-8">
                Prof Idemudia has about <strong>380 publications</strong> in peer-reviewed journals and books with a wide readership. He is the author of (with Klaus Boehnke-2010) "I'm an alien in Deutschland: A quantitative mental health case study of African Immigrants in Germany" and "Psychosocial Experiences of African Migrants in Six European Countries: A mixed method study" (2020).
                <a href="https://link.springer.com/book/10.1007/978-3-030-48347-0" target="_blank" className="ml-2 text-indigo-400 hover:underline inline-flex items-center gap-1 font-bold">
                  View Publication <ExternalLink size={16} />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* CORE ACADEMIC SECTIONS (Accordion Layout) */}
        <div className="mb-20">
          
          {/* SECTION 1: Education */}
          <AccordionItem 
            title="Education" 
            isOpen={openSections.includes('Education')} 
            onClick={() => toggleSection('Education')}
          >
            <div className="space-y-12 md:space-y-16">
              <div className="relative pl-8 md:pl-12 border-l-2 border-white/10">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.3)]"></div>
                <div className="text-indigo-400 font-bold text-lg mb-2">1992 - 1995</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 serif">Ph.D. in Clinical Psychology</h3>
                <p className="text-slate-300 text-lg md:text-xl font-medium mb-4">University of Ibadan, Ibadan, Nigeria</p>
                <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/5 max-w-3xl">
                  <p className="text-slate-200 text-base leading-relaxed mb-4"><strong>Cognate:</strong> Forensic/Developmental Psychology</p>
                  <p className="text-slate-200 text-base leading-relaxed"><strong>Thesis Title:</strong> Psychosocial factors determining psychological disorders among prison inmates in Nigeria: Implications for treatment intervention.</p>
                </div>
              </div>

              <div className="relative pl-8 md:pl-12 border-l-2 border-white/10">
                 <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
                 <div className="text-indigo-400 font-bold text-lg mb-2">1996 - 1997</div>
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 serif">Leventis Fellow</h3>
                 <p className="text-slate-300 text-lg md:text-xl font-medium">SOAS, University College London, UK</p>
              </div>

              <div className="relative pl-8 md:pl-12 border-l-2 border-white/10">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
                <div className="text-indigo-400 font-bold text-lg mb-2">1988 - 1990</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 serif">M.Sc. Clinical Psychology</h3>
                <p className="text-slate-300 text-lg md:text-xl font-medium mb-4">University of Ibadan, Ibadan, Nigeria</p>
              </div>

              <div className="relative pl-8 md:pl-12 border-l-2 border-white/10">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
                <div className="text-indigo-400 font-bold text-lg mb-2">1983 - 1986</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 serif">B.Sc. Psychology (Honors)</h3>
                <p className="text-slate-300 text-lg md:text-xl font-medium mb-4">University of Ibadan, Ibadan, Nigeria</p>
              </div>
            </div>
          </AccordionItem>

          {/* SECTION 2: Research Interests */}
          <AccordionItem 
            title="Research Interests" 
            isOpen={openSections.includes('Research Interests')} 
            onClick={() => toggleSection('Research Interests')}
          >
            <div className="max-w-none text-slate-200 leading-relaxed font-light">
              <h4 className="text-xl md:text-2xl font-bold text-indigo-400 serif mb-6 uppercase tracking-tight">RESEARCH SYNOPSIS</h4>
              
              <p className="mb-10 text-lg md:text-xl italic text-slate-100 border-l-4 border-indigo-600 pl-6 md:pl-8 py-2 bg-white/5 rounded-r-xl">
                My research focus has been to engage in preventive and action research including psychological intervention programmes as demonstrated in my Ph.D. thesis.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all flex flex-col h-full">
                    <div className="p-4 bg-indigo-600 rounded-2xl shadow-lg w-fit mb-6 text-white">
                      <Microscope size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white serif mb-4">1. Prison & Vulnerable Clinical Issues</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Applying clinical psychopathology and therapeutic interventions within prisons. Developing psychological instruments for prisoners to support the Nigerian Prison System.
                    </p>
                </div>

                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all flex flex-col h-full">
                    <div className="p-4 bg-indigo-600 rounded-2xl shadow-lg w-fit mb-6 text-white">
                      <Users size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white serif mb-4">2. African-Oriented Interventions</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Developing intervention methods rooted in African cultural knowledge. Understanding trauma, stress, and health through ideologies from the African continent.
                    </p>
                </div>

                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all flex flex-col h-full">
                    <div className="p-4 bg-indigo-600 rounded-2xl shadow-lg w-fit mb-6 text-white">
                      <Globe size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white serif mb-4">3. Global Cultural Schizophrenia</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      International collaborations studying schizophrenia across cultures in Europe, Asia, and Africa with colleagues from over 10 countries.
                    </p>
                </div>
              </div>

              <div className="bg-indigo-900/40 backdrop-blur-xl text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 mb-16">
                <h4 className="text-xl md:text-2xl font-bold mb-6 serif border-b border-white/20 pb-4">Professional Standing</h4>
                <p className="text-indigo-100 text-lg leading-relaxed mb-6">
                  My research is a blend of clinical, health and applied psychology. These studies have attracted prestigious academic awards and fellowships globally.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {['CODESRIA', 'AvH Fellow', 'Salzburg', 'Leventis'].map(tag => (
                        <div key={tag} className="bg-white/10 py-2 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-widest border border-white/5">{tag}</div>
                    ))}
                </div>
              </div>
            </div>
          </AccordionItem>

          {/* SECTION 3: Scholarships & Prizes */}
          <AccordionItem 
            title="Scholarships & Prizes" 
            isOpen={openSections.includes('Awards')} 
            onClick={() => toggleSection('Awards')}
          >
            <div className="space-y-16">
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-bold text-indigo-400 mb-10 serif flex items-center gap-3">
                  <Award size={24} /> Career Milestones (1992 - 2018)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {HISTORIC_AWARDS.map((period, idx) => (
                    <div key={idx} className="bg-white/5 p-6 rounded-3xl border border-white/5">
                      <div className="mb-4">
                        <span className="text-[10px] font-bold text-indigo-400 tracking-widest uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">{period.period}</span>
                      </div>
                      <ul className="space-y-3">
                        {period.items.map((item, i) => (
                          <li key={i} className="flex gap-3 items-start text-slate-300 text-xs md:text-sm leading-relaxed">
                            <CheckCircle2 size={14} className="text-indigo-400 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-16 border-t border-white/10">
                <h3 className="text-xl md:text-2xl font-bold text-indigo-400 mb-10 serif flex items-center gap-3">
                  <Calendar size={24} /> Annual Excellence (2019 - Present)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {RECENT_AWARDS.map((yearData) => (
                    <div key={yearData.year} className="bg-white/5 p-6 rounded-3xl border border-white/5 flex flex-col hover:bg-white/10 transition-all">
                      <div className="flex justify-between items-center mb-6 pb-2 border-b border-white/10">
                        <h4 className="text-2xl font-bold text-white serif">{yearData.year}</h4>
                        <span className="bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-[10px] font-black tracking-widest border border-indigo-500/20">
                           {yearData.items.length} Honors
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {yearData.items.map((item, i) => (
                          <li key={i} className="flex gap-2 items-start text-xs leading-tight text-slate-300">
                             <div className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0"></div>
                             <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AccordionItem>

          {/* SECTION 4: Honours & Distinctions */}
          <AccordionItem 
            title="Honours & Learned Societies" 
            isOpen={openSections.includes('Societies')} 
            onClick={() => toggleSection('Societies')}
          >
            <div className="relative">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg">
                    <Library className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white serif">Professional Standing</h3>
                    <p className="text-slate-400 text-sm">Memberships, Editorial Roles & Global Appointments</p>
                  </div>
                </div>
                <div className="bg-indigo-500/10 border border-indigo-500/20 px-6 py-3 rounded-2xl text-center">
                  <span className="text-indigo-400 font-black text-2xl block">{HONOURS_AND_SOCIETIES.length}</span>
                  <span className="text-indigo-300 text-[10px] uppercase font-bold tracking-widest">Affiliations</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {HONOURS_AND_SOCIETIES.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20 mt-0.5 w-24 text-center flex-shrink-0">
                      {item.year}
                    </span>
                    <span className="text-slate-200 text-xs md:text-sm leading-relaxed group-hover:text-white transition-colors">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AccordionItem>
        </div>

        {/* FOOTER CTA SECTION */}
        <div className="mt-20 text-center px-4">
            <div className="w-24 h-1 bg-white/10 mx-auto mb-10 rounded-full"></div>
            <p className="text-slate-400 text-sm italic mb-8">For a comprehensive list of all scientific contributions and detailed career history, please download the full curriculum vitae.</p>
            <a 
                href={CV_DOWNLOAD_LINK} 
                className="inline-flex items-center gap-3 border-2 border-white/20 text-white hover:bg-white hover:text-slate-950 px-8 md:px-12 py-4 md:py-5 rounded-full font-bold transition-all group text-sm md:text-base"
            >
                <Download size={20} className="group-hover:animate-bounce" />
                Access Full Dossier
            </a>
        </div>
      </div>
    </div>
  );
};

export default About;