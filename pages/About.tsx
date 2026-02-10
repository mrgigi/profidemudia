
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
    <div className="border-b border-slate-300 last:border-b-0 overflow-hidden">
      <button 
        onClick={onClick}
        className="w-full flex items-center gap-6 p-8 md:p-10 bg-slate-50 hover:bg-slate-100 transition-colors text-left group"
      >
        <ChevronDown 
          size={32} 
          className={`text-slate-900 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{title}</h2>
      </button>
      <div 
        className={`transition-all duration-500 ease-in-out bg-white ${
          isOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-8 md:p-12 lg:p-16">
          {children}
        </div>
      </div>
    </div>
  );
};

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

      <div className="container mx-auto px-6">
        
        {/* TOP SECTION: Header & Intro */}
        <div className="mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 group border border-white/10">
            <img 
              src={ABOUT_HEADER_IMAGE} 
              alt="Professor Erhabor Sunday Idemudia" 
              className="w-full h-[450px] md:h-[700px] object-cover transition-transform duration-1000 group-hover:scale-105 cursor-pointer"
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
            <div className="absolute bottom-10 left-6 right-6 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-end gap-6 pointer-events-none">
              <div className="max-w-2xl pointer-events-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white serif mb-3 drop-shadow-2xl">About Me</h1>
                <div className="w-20 h-1.5 bg-indigo-500 mb-4 rounded-full"></div>
                <p className="text-indigo-200 text-lg md:text-2xl font-light drop-shadow-lg italic serif">Professor (Full) of Research & Clinical Psychology</p>
              </div>
              <a 
                href={CV_DOWNLOAD_LINK} 
                className="bg-white text-slate-900 hover:bg-indigo-600 hover:text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 transition-all shadow-2xl group transform hover:-translate-y-1 active:scale-95 pointer-events-auto"
              >
                <Download size={24} className="group-hover:animate-bounce" />
                Download Full CV
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] border border-white/10 shadow-2xl relative mb-16">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <BookOpen size={200} className="text-white" />
            </div>
            <div className="prose prose-invert prose-xl max-w-none text-slate-100 leading-relaxed font-light">
              <p className="mb-8 first-letter:text-6xl first-letter:font-bold first-letter:text-indigo-400 first-letter:mr-3 first-letter:float-left">
                He is an Associate Editor with <strong>Heliyon</strong> (The Netherlands) and the <strong>Journal of Child & Adolescent Mental Health</strong> (South Africa). 
                A Fellow of the Nigerian Psychological Association (NPA), Nigerian Association of Clinical Psychologists (NACP), 
                Alexander von Humboldt (AvH) Foundation in Germany, and the Stellenbosch Institute for Advanced Studies (South Africa).
              </p>
              <p className="mb-8">
                Research interests include applied research with vulnerable and marginalised populations in the areas of general psychopathology (CPTSD, PTSS, PTSD, Trauma) and mental health in general. Such populations include but are not limited to migrants/refugees, Internally Displaced Persons (IDPs), Prisoners, Persons with disabilities or physically challenged. The secondary research focus includes cultural aspects of African-oriented psychology and illness attributions, which overlaps the primary focus area and directly challenges the Western-oriented psychopathologies and illness causation from African cultural perspectives.
              </p>
              <p className="mb-8">
                Prof Idemudia has about <strong>380 publications</strong> in peer-reviewed journals and books with a wide readership. He is the author of (with Klaus Boehnke-2010) "I'm an alien in Deutschland: A quantitative mental health case study of African Immigrants in Germany" and "Psychosocial Experiences of African Migrants in Six European Countries: A mixed method study" (2020).
                <a href="https://link.springer.com/book/10.1007/978-3-030-48347-0" target="_blank" className="ml-2 text-indigo-400 hover:underline inline-flex items-center gap-1">
                  View Publication <ExternalLink size={16} />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* CORE ACADEMIC SECTIONS (Accordion Layout) */}
        <div className="rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 mb-20">
          
          {/* SECTION 1: Education */}
          <AccordionItem 
            title="Education" 
            isOpen={openSections.includes('Education')} 
            onClick={() => toggleSection('Education')}
          >
            <div className="space-y-16">
              <div className="relative pl-12 border-l-2 border-slate-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.3)]"></div>
                <div className="text-indigo-600 font-bold text-lg mb-2">1992 - 1995</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3 serif">Ph.D. in Clinical Psychology</h3>
                <p className="text-slate-600 text-xl font-medium mb-4">University of Ibadan, Ibadan, Nigeria</p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 max-w-3xl">
                  <p className="text-slate-700 text-base leading-relaxed mb-4"><strong>Cognate:</strong> Forensic/Developmental Psychology</p>
                  <p className="text-slate-700 text-base leading-relaxed"><strong>Thesis Title:</strong> Psychosocial factors determining psychological disorders among prison inmates in Nigeria: Implications for treatment intervention.</p>
                </div>
              </div>

              <div className="relative pl-12 border-l-2 border-slate-200">
                 <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
                 <div className="text-indigo-600 font-bold text-lg mb-2">1996 - 1997</div>
                 <h3 className="text-3xl font-bold text-slate-900 mb-3 serif">Leventis Fellow</h3>
                 <p className="text-slate-600 text-xl font-medium">SOAS, University College London, UK</p>
              </div>

              <div className="relative pl-12 border-l-2 border-slate-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
                <div className="text-indigo-600 font-bold text-lg mb-2">1988 - 1990</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3 serif">M.Sc. Clinical Psychology</h3>
                <p className="text-slate-600 text-xl font-medium mb-4">University of Ibadan, Ibadan, Nigeria</p>
              </div>

              <div className="relative pl-12 border-l-2 border-slate-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
                <div className="text-indigo-600 font-bold text-lg mb-2">1983 - 1986</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3 serif">B.Sc. Psychology (Honors)</h3>
                <p className="text-slate-600 text-xl font-medium mb-4">University of Ibadan, Ibadan, Nigeria</p>
              </div>
            </div>
          </AccordionItem>

          {/* SECTION 2: Research Interests */}
          <AccordionItem 
            title="Research Interests" 
            isOpen={openSections.includes('Research Interests')} 
            onClick={() => toggleSection('Research Interests')}
          >
            <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed font-light">
              <h4 className="text-2xl font-bold text-slate-900 serif mb-6 uppercase tracking-tight">RESEARCH SYNOPSIS AND RELEVANT FOCUS AREAS</h4>
              
              <p className="mb-10 text-lg md:text-xl italic text-slate-700 border-l-4 border-indigo-600 pl-8 py-2 bg-slate-50">
                My long history of research as a student from my undergraduate years (1983-1986) project titled “Effects of Education, sex differences and propinquity on attitude toward the mentally ill” and Masters (1988-1990) thesis titled “Psychosocial correlates of relapse amongst depressed patients” has helped me in my clinical and applied research focus which has been to engage in preventive and action research including psychological intervention programmes as demonstrated in my PhD (1991-1995) thesis titled “Psychosocial factors determining psychological disorders among prison inmates in Nigeria: Implications for treatment intervention”.
              </p>

              <p className="mb-10 text-slate-700">
                My research is applied and anchored on funded studies, local and international collaborations can be placed in three focus areas-dealing with vulnerable populations:
              </p>

              <div className="space-y-12 mb-16">
                <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-shadow group">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 bg-indigo-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform text-white">
                      <Microscope size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 serif">1. Clinical Issues in Prisons & Vulnerable Groups</h3>
                  </div>
                  <div className="space-y-6 text-slate-700 text-base leading-relaxed">
                    <p>
                      The application of clinical issues (psychopathology and therapeutic interventions) in prisons and vulnerable groups. As a result, I have published severally in prison studies including deviance and criminalization of children/adolescents into adulthood and developing psychological instruments for prisoners and have helped the Nigerian Prison System in that regard. 
                    </p>
                    <p>
                      My prison studies have attracted prestigious international Fellowships in Africa (CODESRIA Laureate (1992-1995) and Fellow (2002- 2005), the UK (Leventis Fellowship 1996-1997) and Germany (Alexander von Humboldt Fellow (AvH)- 2003-2005). 
                    </p>
                    <p className="italic bg-white p-6 rounded-xl border border-slate-100 shadow-inner">
                      "Personality and criminal outcomes of homeless youth in a Nigerian jail population: results of PDS & MAACL-H assessments" (Journal of Child and Adolescent Mental Health). This empirical quantitative study is notable for its rigorous critical review despite its presentation without traditional tables and figures.
                    </p>
                    <p>
                      My AvH study is about African migrants in prisons and difficult situations. It is titled <strong>“I ‘m an Alien in Deutschland: A quantitative mental health case study of Africa Immigrants in Germany”</strong>. The book published by PeterLangs (Germany) and co-authored by Prof Boehnke (Germany) utilized sophisticated statistics such as Structural Equation Modelling (SEM).
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-shadow group">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 bg-indigo-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform text-white">
                      <Users size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 serif">2. African-Oriented Intervention Methods</h3>
                  </div>
                  <div className="space-y-6 text-slate-700 text-base leading-relaxed">
                    <p>
                      The second focus area is developing African-oriented intervention methods with the understanding of illness attributions based on cultural knowledge in Africa. This work earned the 2003 Best Poster award in Hungary and led to numerous plenary and keynote invitations.
                    </p>
                    <p>
                      As the Secretary-General of the World Council for Psychotherapy (African Chapter), I work to strengthen psychological healing methods based on African ideologies and concepts. 
                    </p>
                    <p className="font-medium text-indigo-700">
                      Example: “Cultural Dynamics of Trauma Expression and Psychotherapy: The African Perspectives”.
                    </p>
                    <p>
                      This research seeks to understand how trauma, stress, PTSD, resiliency, values (stereotypes) and health-related issues (e.g., HIV/AIDS) can be understood from an African perspective in vulnerable groups.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-shadow group">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 bg-indigo-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform text-white">
                      <Globe size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 serif">3. Global Cultural Understanding & Schizophrenia</h3>
                  </div>
                  <div className="space-y-6 text-slate-700 text-base leading-relaxed">
                    <p>
                      My zeal for cultural understanding led to international collaborations on a global scale, specifically studying schizophrenia across cultures in Europe, Asia, Middle East and Africa with colleagues from about 10 countries.
                    </p>
                    <ul className="grid grid-cols-1 gap-4">
                      <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100">
                        <CheckCircle2 size={20} className="text-indigo-600 flex-shrink-0 mt-1" />
                        <span><strong>Delusions of guilt:</strong> Attitudes of Christian and Muslim Schizophrenic patients towards good and evil (Journal of Muslim Mental Health, 2006).</span>
                      </li>
                      <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100">
                        <CheckCircle2 size={20} className="text-indigo-600 flex-shrink-0 mt-1" />
                        <span><strong>Paranoid-hallucinatory syndromes:</strong> Results of the International Study on Psychotic Symptoms (World Cultural Psychiatry Research Review, 2007).</span>
                      </li>
                      <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100">
                        <CheckCircle2 size={20} className="text-indigo-600 flex-shrink-0 mt-1" />
                        <span><strong>Suicide Motives and Culture:</strong> Degree of modernization, response behaviour and acceptance (World Cultural Psychiatry Research Review, 2008).</span>
                      </li>
                      <li className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100">
                        <CheckCircle2 size={20} className="text-indigo-600 flex-shrink-0 mt-1" />
                        <span><strong>Culture and Hallucination Prevalence:</strong> (Comprehensive Psychiatry, 2010).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-900 text-white p-12 rounded-[2.5rem] shadow-2xl mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <BookOpen size={200} />
                </div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-6 serif border-b border-white/20 pb-4">Professional & Academic Contributions</h4>
                  <p className="text-indigo-100 text-lg leading-relaxed mb-8">
                    My research is a blend of clinical, health and applied psychology. These studies have attracted prestigious academic awards and fellowships including CODESRIA, IFRA, SALBURG, AvH, LEVENTIS/SMUTS, and ALBERT ELLIS. 
                  </p>
                  <p className="text-indigo-100 text-lg leading-relaxed">
                    I have reviewed grant applications for the South African National Research Foundation (NRF) and served as an external examiner to prominent universities worldwide. I actively serve on international scientific committees, including the 2008 IACCP congress in Germany and the 2014 WCP congress in South Africa.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-200">
                  <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-3 serif text-2xl">
                    <Briefcase className="text-indigo-600" /> Teaching
                  </h4>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Undergraduate teaching since 1990 and post-graduate teaching since 1993. Courses taught at University of Ibadan, University of Namibia, University of Limpopo, and North-West University.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Psychopathology', 'Trauma Studies', 'Sexuality', 'HIV/AIDS', 'Cross-Cultural Issues'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 uppercase tracking-tighter">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-200">
                  <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-3 serif text-2xl">
                    <Users className="text-indigo-600" /> Mentorship
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    Supervised and graduated <strong>over 100 MA/MSc students</strong> and <strong>15 PhD students</strong>. Engaged in international collaborations with UCLA (USA), University of Windsor (Canada), and leading institutions across Europe and Africa (Norway, Netherlands, Ghana, Kenya).
                  </p>
                </div>
              </div>
            </div>
          </AccordionItem>

          {/* SECTION 3: Scholarships, Fellowships, & Prizes */}
          <AccordionItem 
            title="Scholarships, Fellowships, & Prizes" 
            isOpen={openSections.includes('Awards')} 
            onClick={() => toggleSection('Awards')}
          >
            <div className="space-y-16">
              {/* Distinguished Career Timeline */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-indigo-700 mb-10 serif flex items-center gap-3">
                  <Award size={28} /> Career Milestones (1992 - 2018)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {HISTORIC_AWARDS.map((period, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">{period.period}</span>
                      </div>
                      <ul className="space-y-3">
                        {period.items.map((item, i) => (
                          <li key={i} className="flex gap-3 items-start text-slate-700 text-[13px] leading-relaxed">
                            <CheckCircle2 size={14} className="text-indigo-500 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Annual Recent Grid */}
              <div className="pt-16 border-t border-slate-100">
                <h3 className="text-2xl font-bold text-indigo-700 mb-10 serif flex items-center gap-3">
                  <Calendar size={28} /> Annual Excellence (2019 - Present)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {RECENT_AWARDS.map((yearData) => (
                    <div key={yearData.year} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col hover:bg-white hover:shadow-lg transition-all">
                      <div className="flex justify-between items-center mb-6 pb-2 border-b border-slate-200">
                        <h4 className="text-3xl font-bold text-slate-900 serif">{yearData.year}</h4>
                        <span className="bg-white text-indigo-600 px-3 py-1 rounded-full text-[10px] font-black tracking-widest border border-slate-200">
                           {yearData.items.length} Honors
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {yearData.items.map((item, i) => (
                          <li key={i} className="flex gap-2 items-start text-[12px] leading-tight text-slate-600">
                             <div className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0"></div>
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

          {/* SECTION 4: Honours, Distinctions & Learned Societies */}
          <AccordionItem 
            title="Honours, Distinctions & Learned Societies" 
            isOpen={openSections.includes('Societies')} 
            onClick={() => toggleSection('Societies')}
          >
            <div className="relative">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg">
                    <Library className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 serif">Professional Standing</h3>
                    <p className="text-slate-500 text-sm">Memberships, Editorial Roles & Global Appointments</p>
                  </div>
                </div>
                <div className="bg-indigo-50 border border-indigo-100 px-6 py-3 rounded-2xl text-center">
                  <span className="text-indigo-600 font-black text-2xl block">{HONOURS_AND_SOCIETIES.length}</span>
                  <span className="text-indigo-400 text-[10px] uppercase font-bold tracking-widest">Total Affiliations</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {HONOURS_AND_SOCIETIES.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded border border-indigo-100 mt-0.5 w-24 text-center flex-shrink-0">
                      {item.year}
                    </span>
                    <span className="text-slate-700 text-[13px] leading-relaxed group-hover:text-slate-950 transition-colors">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-10 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Library size={150} />
                </div>
                <div className="relative z-10 flex-grow text-center md:text-left">
                  <h4 className="text-xl font-bold mb-3 serif">Jena Excellence Fellow Programme</h4>
                  <p className="text-slate-400 text-sm font-light leading-relaxed max-w-xl">
                    Professor Idemudia's significant contribution to global research synthesis is further highlighted by his current affiliation with Friedrich-Schiller University.
                  </p>
                </div>
                <a 
                  href="https://www.uni-jena.de/en/22660/jena-excellence-fellow-programme" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-indigo-500 hover:text-white transition-all shadow-xl flex-shrink-0"
                >
                  Visit Program <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </AccordionItem>

        </div>

        {/* FOOTER CTA SECTION */}
        <div className="mt-20 text-center">
            <div className="w-24 h-1 bg-white/20 mx-auto mb-10 rounded-full"></div>
            <p className="text-slate-400 text-sm italic mb-8">For a comprehensive list of all scientific contributions and detailed career history, please download the full curriculum vitae.</p>
            <a 
                href={CV_DOWNLOAD_LINK} 
                className="inline-flex items-center gap-3 border-2 border-white/30 text-white hover:bg-white hover:text-slate-950 px-12 py-5 rounded-full font-bold transition-all group"
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
