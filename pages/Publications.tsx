
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
    <div className="mb-12 group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all text-left shadow-xl"
      >
        <div className="flex items-center gap-6">
          <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg">
            <ScrollText className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white serif">{title}</h2>
        </div>
        <ChevronDown 
          className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={32} 
        />
      </button>
      
      <div className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[8000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
        <div className="relative p-10 bg-slate-900/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/5 shadow-2xl">
          {bgImage && (
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none rounded-[2.5rem]" 
              style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}
            ></div>
          )}
          <div className="relative z-10">
            <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed font-light space-y-6">
              {children}
            </div>
            
            {links && links.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-6">Related Links</h3>
                <div className="flex flex-wrap gap-4">
                  {links.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl text-sm border border-white/5 hover:bg-white/10 hover:border-indigo-500/30 transition-all"
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
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-indigo-400 font-semibold tracking-widest uppercase text-xs mb-3 block">Scientific Bibliography</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white serif mb-6 drop-shadow-2xl">Published Articles</h1>
          <div className="w-24 h-1.5 bg-indigo-500 mb-8 rounded-full"></div>
          <p className="text-xl text-indigo-100 font-light max-w-2xl leading-relaxed italic border-l-4 border-indigo-500/50 pl-6">
            A chronological record of over three decades of peer-reviewed research, exploring psychopathology, 
            cultural dynamics, and clinical interventions in Africa and beyond.
          </p>
        </div>

        {/* 1989 - 2000 */}
        <PublicationSection 
          title="Section 1: 1989-2000" 
          bgImage="https://static.wixstatic.com/media/11062b_20c28478658b408cb6c6b0fd52f0077e~mv2_d_3695_2077_s_2.jpg/v1/fill/w_160,h_90,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_20c28478658b408cb6c6b0fd52f0077e~mv2_d_3695_2077_s_2.jpg"
          initiallyOpen={true}
        >
          <p>Oyefeso A., Osinowo H.O., and Idemudia E.S. (1989) Sex and Propinquity as Predictors of attitude towards the mentally ill among Nigerians. Indian Journal of Behaviour, Vol. 13, (3), 27-32.</p>
          <p>Idemudia E.S. (1994) 'Sex and Marital Stability/Instability as Predictors of Relapse among Depressed Patients', African Journal for the Psychological Study of Social Issues. Vol. (2), 210-218</p>
          <p className="italic opacity-50 text-sm">Full bibliography list available in Curriculum Vitae...</p>
        </PublicationSection>

        {/* 2001 - 2010 */}
        <PublicationSection 
          title="Section 2: 2001-2010" 
          bgImage="https://static.wixstatic.com/media/11062b_20c28478658b408cb6c6b0fd52f0077e~mv2_d_3695_2077_s_2.jpg/v1/fill/w_160,h_90,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_20c28478658b408cb6c6b0fd52f0077e~mv2_d_3695_2077_s_2.jpg"
          links={[{title: 'wcprr.org', url: 'http://www.wcprr.org'}]}
        >
          <p>Madu S.N., Idemudia, E.S. & Jegede S.A. (2001) Perceived parental disorders as risk factors for child sexual, Physical, and emotional abuse among high school students in the Mpumalanga province in South Africa. Issues in Health Psychology, Vol.8, 265-279</p>
          <p className="italic opacity-50 text-sm">Full bibliography list available in Curriculum Vitae...</p>
        </PublicationSection>

        {/* 2011 */}
        <PublicationSection title="Section 3: 2011">
          <p>Idemudia, ES with Bauer, SM, Schanda, H., Karakula, H., Olajossy-Hilkesberger, L., Rudaleviciene, P., Okribelashvili, N., Chaudhry, HR, Gscheider, S., Ritter, K. and Stompe, T. (2011). Culture and the prevalence of hallucinations in Schizophrenia. Comprehensive Psychiatry, 52, 319-325.</p>
        </PublicationSection>

        {/* 2012 */}
        <PublicationSection title="Section 4: 2012" links={[{title: 'Curationis Article', url: 'http://dx.doi.org/10.4102/curationis.v35i1.30'}]}>
          <p>Idemudia, ES & Matamela, NA (2012). The Role of stigmas in mental health: A comparative study. Curationis, 35 (1), Art. #30.8 pages.</p>
        </PublicationSection>

        {/* 2013 */}
        <PublicationSection title="Section 5: 2013" links={[
          {title: 'Curationis dx.doi', url: 'http://dx.doi.org/10.4102/curationis.v36i1.122'},
          {title: 'SAJIP dx.doi', url: 'http://dx.doi.org/10.4102/sajip.v39i2.1124'},
          {title: 'LifeScienceSite', url: 'http://www.lifesciencesite.com'}
        ]}>
          <p>Idemudia, ES, John, WK, & Wyatt, GE (2013, Jan). Migration Challenges among Zimbabwean refugees before, during and after arrival in South Africa. J Inj Violence Res., 5(1), 17-27. Doi:10.5249/jivr.vSi1.185</p>
        </PublicationSection>

        {/* 2014 */}
        <PublicationSection title="Section 6: 2014" links={[
          {title: 'APS Journals', url: 'http://aps.journals.ac.za'},
          {title: 'SAJIP dx.doi', url: 'http://dx.doi.org/10.4102/sajip.v41i1.1216'}
        ]}>
          <p>Ojedokun, O & Idemudia, E.S. (2014). Burnout among paramilitary personnel in Nigeria: a perspective from Conservation of Resources Theory. South African Journal of Psychology, 44(1), 106-117. DOI:10.1177/0081246313516256</p>
        </PublicationSection>

        {/* 2015 */}
        <PublicationSection title="Section 7: 2015" links={[
          {title: 'Reproductive Health Journal', url: 'http://www.reproductive-health-journal.com/content/12/1/88'}
        ]}>
          <p>Idemudia, E.S. Ojedokun, O., & Desouza, M. (2015). Perceived external prestige as a mediator between quality of work life and organisational commitment of public sector employees in Ghana. SA Journal of Industrial Psychology, 41(1), Art. #1216, 10 pages.</p>
        </PublicationSection>

        {/* 2016 */}
        <PublicationSection title="Section 8: 2016" links={[
          {title: 'IJID dx.doi', url: 'http://dx.doi.org/10.1016/j.ijid.2016.05.002'},
          {title: 'APS Journal View', url: 'http://aps.journals.ac.za/pub/article/view/851/643'}
        ]}>
          <p>Fagbamigbe, A.F., Adebayo, S.B. & Idemudia, E.S. (2016). Marital Status and HIV Prevalence among women in Nigeria: Ingredients for Evidence-based Programming. International Journal of Infectious Diseases, 48, 57-63.</p>
        </PublicationSection>

        {/* 2017 */}
        <PublicationSection title="Section 9: 2017" links={[
          {title: 'African Health Sciences', url: 'https://dx.doi.org/10.4314/ahs.v17i1.7'}
        ]}>
          <p>Cruz, J.P. et al. (2017). A multi-country Perspective on Cultural Competence among Baccalaureate Nursing Students. Journal of Nursing Scholarship, pp. 1-10.</p>
        </PublicationSection>

        {/* 2018 */}
        <PublicationSection title="Section 10: 2018" links={[
          {title: 'SAGE Open', url: 'https://journals.sagepub.com/home/sgo'},
          {title: 'Curationis DOI', url: 'https://doi.org/10.4102/curationis.v41i1879'}
        ]}>
          <p>Fagbamigbe, A.F., Afolabi, R.F. & Idemudia, E.S. (2018). Demand and unmet needs of contraception among sexually active in-union women in Nigeria. SAGE Open. January-March 2018: 1–11 DOI: 10.1177/2158244017754023</p>
        </PublicationSection>

        {/* 2019 */}
        <PublicationSection title="Section 11: 2019" links={[
          {title: 'Heliyon DOI', url: 'https://doi.org/10.1016/j.heliyon.2019.e02406'}
        ]}>
          <p>Ilevbare F.M & Idemudia, E.S. (2019). Psychosocial factors and psychological well-being in Ilaje oil-producing community, Niger-Delta region of Ondo State, Nigeria. Int. J. Happiness and Development, 5, (1), 57-65.</p>
        </PublicationSection>

        {/* 2020 */}
        <PublicationSection title="Section 12: 2020" links={[
          {title: 'Heliyon DOI', url: 'https://doi.org/10.1016/j.heliyon.2020.e05719'}
        ]}>
          <p>Lawal, A.M, Idemudia, E.S. & Balogun, S.K.B. (2020). Menstrual Attitude dimensions, Anxiety and Body Esteem in Adolescent Girls. Psychology, Health & Medicine, 25 (4), 418-425.</p>
        </PublicationSection>

        {/* 2021 */}
        <PublicationSection title="Section 13: 2021" links={[
          {title: 'PLOS ONE', url: 'https://doi.org/10.1371/journal.pone.0250411'}
        ]}>
          <p>Idemudia, E.S. & Olawa, B.D. (2021). Once Bitten, Twice Shy Trust and Trustworthiness from an African Perspective. Springer Nature Series.</p>
        </PublicationSection>

        {/* 2022 */}
        <PublicationSection title="Section 14: 2022" links={[
          {title: 'Frontiers Article', url: 'https://www.frontiersin.org/articles/10.3389/fsoc.2022.946653/'}
        ]}>
          <p>Idemudia, E.S. & Olonisakin, T.T. (2022). The cost of looking different: Racism, mental health and human development of migrants of African descent. Springer Nature, Switzerland.</p>
        </PublicationSection>

        {/* 2023 */}
        <PublicationSection title="Section 15: 2023" links={[
          {title: 'Pan African Med Journal', url: 'https://www.panafrican-med-journal.com/content/article/45/116/full'}
        ]}>
          <p>Adedeji, A. et al. (2023). Psychological health outcome of Sub-Saharan African migrants in Germany. Electronic Journal of General Medicine, 20(1), em428.</p>
        </PublicationSection>

        {/* 2024 */}
        <PublicationSection title="Section 16: 2024 PUBLICATIONS (Journals)" links={[
          {title: 'SAGE Permissions', url: 'https://uk.sagepub.com/en-gb/journals-permissions'}
        ]}>
          <p className="font-bold text-white mb-4">Published Papers 1-23</p>
          <p>Ajele, KW & Idemudia, E.S. (2024). The Evaluation of General Health Questionnaire (GHQ-12) Reliability Generalization: A Meta-Analysis. PLoS ONE 19(7): e0304182.</p>
        </PublicationSection>

        {/* 2025 */}
        <PublicationSection title="Section 17: 2025 PUBLICATIONS (Journals)" initiallyOpen={true}>
          <div className="space-y-8">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p>Akokuwebe ME, Palamuleni ME & Idemudia ES (2025). Population dynamics and digitalization: implications for COVID-19 data sources in South Africa —a scoping review. Front. Public Health 12:1537057.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p>Ajele, K.W. & Idemudia, E.S. (2025). The role of depression and diabetes distress in glycemic control: A meta-analysis. Diabetes Research and Clinical Practice, P.1-10.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p>Ugwu, L., Idemudia, E.S, Akokuwebe, M. & Onyedibe, M.C. (2025). Beyond the shadows of trauma: Exploring the synergy of emotional intelligence and distress disclosure for adolescents' recovery journey. South African Journal of Psychology, 1-6.</p>
              <a href="https://www.idemudiaerhabor.com/_files/ugd/bb7d0d_4fb3fedea0cd4748b00fd616f7dd8585.pdf" target="_blank" className="mt-4 inline-flex items-center gap-2 text-indigo-400 font-bold text-xs hover:text-white"><Download size={14} /> Download PDF</a>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p>Olonisakin, T.O., Adedeji, A. & Idemudia, E.S. (2025). Examining psychological outcomes of social inequality for black South Africans. Studies in Clinical Social Work, 94:1, 45-66.</p>
              <a href="https://www.idemudiaerhabor.com/_files/ugd/bb7d0d_feb5654c3614496cab78d8e3b575d064.pdf" target="_blank" className="mt-4 inline-flex items-center gap-2 text-indigo-400 font-bold text-xs hover:text-white"><Download size={14} /> Download PDF</a>
            </div>
          </div>
        </PublicationSection>

        {/* CHAPTERS IN BOOKS */}
        <PublicationSection title="Section 18: Publications: Chapters in Books" bgImage="https://static.wixstatic.com/media/11062b_20c28478658b408cb6c6b0fd52f0077e~mv2_d_3695_2077_s_2.jpg/v1/fill/w_160,h_90,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_20c28478658b408cb6c6b0fd52f0077e~mv2_d_3695_2077_s_2.jpg">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-indigo-400 serif">1994-2000</h3>
            <p className="text-sm opacity-80">Extensive list of scholarly chapters available in CV...</p>
            <h3 className="text-xl font-bold text-indigo-400 serif mt-8">2001-2010</h3>
            <p className="text-sm opacity-80">Scholarly contributions to trans-cultural psychiatry...</p>
            <h3 className="text-xl font-bold text-indigo-400 serif mt-8">2011-2019</h3>
            <p className="text-sm opacity-80">Regional and global research synthesis...</p>
          </div>
        </PublicationSection>

        {/* CO-EDITED BOOKS */}
        <PublicationSection title="Section 19: Publications: Co-edited Books" bgImage="https://static.wixstatic.com/media/a394701f8d754f4685e5578bda5e0df9.jpg/v1/fill/w_60,h_90,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a394701f8d754f4685e5578bda5e0df9.jpg">
          <p>Collaborative editorial projects exploring sustainable development, diversity, and cross-cultural psychology.</p>
        </PublicationSection>

        {/* MONOGRAPHS & BOOKS */}
        <PublicationSection title="Section 20: Publications: BOOKS" initiallyOpen={true}>
          <div className="space-y-24">
            {/* Latest Book */}
            <div className="flex flex-col md:flex-row gap-10">
               <div className="md:w-1/3 flex flex-col items-center">
                 <img 
                   src="https://static.wixstatic.com/media/bb7d0d_846cba1e30d8434fa44769860fdeff37~mv2.jpeg" 
                   alt="Latest Book Cover" 
                   className="w-48 shadow-2xl rounded-lg hover:scale-105 transition-transform cursor-pointer" 
                 />
                 <span className="mt-4 text-xs font-bold text-indigo-500 uppercase tracking-widest">Latest Publication</span>
               </div>
               <div className="md:w-2/3">
                 <h3 className="text-2xl font-bold text-white serif mb-2">Latest Scholarly Monograph</h3>
                 <p className="text-slate-400 mb-6">A major new contribution to the field of Clinical and Research Psychology. This volume synthesizes recent findings in trauma recovery, migration stressors, and psychological capital.</p>
               </div>
            </div>

            {/* Book 1 */}
            <div className="flex flex-col md:flex-row gap-10 border-t border-white/5 pt-16">
               <div className="md:w-1/3 flex flex-col items-center">
                 <div className="w-48 h-64 bg-slate-800 rounded-lg shadow-2xl flex items-center justify-center border border-white/10">
                   <Book size={64} className="text-indigo-400/50" />
                 </div>
                 <span className="mt-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Book 1</span>
               </div>
               <div className="md:w-2/3">
                 <h3 className="text-2xl font-bold text-white serif mb-4">Applied Psychology</h3>
                 <p className="text-slate-400 mb-6">Idemudia, E.S. and Shikongo, A. (2005). University of Namibia, Namibia. ISBN: 99916-67-63-6</p>
               </div>
            </div>

            {/* Book 2 */}
            <div className="flex flex-col md:flex-row gap-10 border-t border-white/5 pt-16">
               <div className="md:w-1/3 flex flex-col items-center">
                 <img 
                   src="https://static.wixstatic.com/media/bb7d0d_78352bf36df142699bf868ddd8478e09~mv2.png/v1/fill/w_147,h_200,al_c,q_85,enc_avif,quality_auto/Picture1.png" 
                   alt="Book Cover 2" 
                   className="w-48 shadow-2xl rounded-lg hover:scale-105 transition-transform cursor-pointer" 
                 />
                 <span className="mt-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Book 2</span>
               </div>
               <div className="md:w-2/3">
                 <h3 className="text-2xl font-bold text-white serif mb-2">I'm an alien in Deutschland</h3>
                 <p className="text-indigo-400 text-sm italic mb-6">A quantitative mental health case study of African Immigrants in Germany</p>
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                   <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2"><List size={14} /> Table of Contents</h4>
                   <ul className="text-xs space-y-2 text-slate-400 columns-1 md:columns-2">
                     <li>Introduction & Rational (9-13)</li>
                     <li>Migration Patterns in Africa (15-18)</li>
                     <li>Theoretical Perspectives (19-26)</li>
                     <li>Methodology (27-41)</li>
                     <li>Socio-demographic (43-49)</li>
                     <li>Mental Health Status (59-66)</li>
                     <li>Value Preferences (67-71)</li>
                     <li>Discussion & Conclusions (81-88)</li>
                     <li>Epilogue by John W. Berry</li>
                   </ul>
                 </div>
               </div>
            </div>

            {/* Book 3 */}
            <div className="flex flex-col md:flex-row gap-10 border-t border-white/5 pt-16">
               <div className="md:w-1/3 flex flex-col items-center">
                 <img 
                   src="https://static.wixstatic.com/media/bb7d0d_408337ebd849460f883440e2c39adc87~mv2.png/v1/fill/w_500,h_753,al_c,q_90,enc_avif,quality_auto/Picture2.png" 
                   alt="Book Cover 3" 
                   className="w-48 shadow-2xl rounded-lg hover:scale-105 transition-transform cursor-pointer" 
                 />
                 <span className="mt-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Book 3</span>
               </div>
               <div className="md:w-2/3">
                 <h3 className="text-2xl font-bold text-white serif mb-2">Psychosocial experiences of African migrants in Six European countries</h3>
                 <p className="text-indigo-400 text-sm italic mb-6">A mixed method study (Open Access)</p>
                 <a 
                   href="https://www.springer.com/gp/book/9783030483463" 
                   target="_blank" 
                   className="inline-flex items-center gap-2 bg-indigo-600 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white hover:bg-indigo-500 transition-all mb-8 shadow-lg"
                 >
                   View at Springer Europe <ExternalLink size={14} />
                 </a>
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                   <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2"><List size={14} /> Table of Contents</h4>
                   <ul className="text-xs space-y-2 text-slate-400 columns-1 md:columns-2">
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
          </div>
        </PublicationSection>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
           <div className="w-16 h-1 bg-white/10 mx-auto mb-8 rounded-full"></div>
           <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-bold">Documenting Over 380 Scientific Contributions</p>
        </div>
      </div>
    </div>
  );
};

export default Publications;
