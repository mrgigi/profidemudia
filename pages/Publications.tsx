
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

        {/* ARTICLES SECTIONS */}
        <PublicationSection title="Published Articles: 1989-2000">
          <p>Oyefeso A., Osinowo H.O., and Idemudia E.S. (1989) Sex and Propinquity as Predictors of attitude towards the mentally ill among Nigerians. Indian Journal of Behaviour, Vol. 13, (3), 27-32.</p>
          <p>Idemudia E.S. (1994) 'Sex and Marital Stability/Instability as Predictors of Relapse among Depressed Patients', African Journal for the Psychological Study of Social Issues. Vol. (2), 210-218</p>
          <p>Idemudia E.S., and Balogun S.K. (1995) 'Anxiety levels and gender Differences as determinants of coping styles among cancer patients. Nigerian journal of Clinical and Counselling Psychology, Vol. 1, No 1, 43-155</p>
          <p>Idemudia E.S., (1995) 'Incidence and prevalence of psychopathology among refugees in Southern Nigeria', Journal of Clinical and Counselling Psychology Vol. (2), 120-131</p>
          <p>Idemudia E.S. (1995) A Therapeutic Confrontation approach to treating refugees with progressive Psychopathology: Specific Problems and techniques. African Journal for the Psychological Study of Social Issues Vol.2, (1&2), 176-185</p>
          <p>Idemudia E.S. and Shenge A.N. (1996) Locus of control and gender as determinants of stress reaction patterns and level of academic performance among Nigerian secondary school students. African Journal for the Psychological Study of social Issues (AJPSSI) Vol.3 (1 & 2), 123-137</p>
          <p>Idemudia E.S. (1997) Are People in Prisons Offenders or Patients? The Eysenck- Three Factor Personality Trait Explanation. Ife Psychologia: An International Journal, Vol.5, (2), 162-184.</p>
          <p>Idemudia E.S. (1998) The API and CCEI Results of Prisoners in Nigeria: Relationship with Duration of Confinement. Ife Psychologia; An International Journal Vol.6 (1), 91-102.</p>
          <p>Idemudia E.S., and Edeko, L.O. (1999) Psychosocial Factors in Insurance Practice –Barrier. Nigerian Journal of psychology. Vol. 16, 30-41</p>
          <p>Balogun S.K., Osinowo H.O., and Idemudia E.S. (1999) Consequences of Separate and Combined Chronic Ingestion of Alcohol and Nicotine on Discriminatory Task among Albino Rats. Ife Psychologia: An International Journal Vol.7 (2) 85-95</p>
          <p>Idemudia E.S., Madu S.N., Jegede S.A., and Arowolo F. (2000) Type A Behaviour and Burnout among bank managers in Nigeria. Journal of Psychology in Africa-South of the Sahara, the Caribbean and Afro- Latin America Vol. 10, (2) 189-196.</p>
          <p>Idemudia, E.S., Adebayo, D.O., & Ilora, U.C (2000) Influence of Sex, Self-esteem and Locus of control on perceived job tension. African Journal for the study of Social Issues, 5(2) 227-248</p>
        </PublicationSection>

        <PublicationSection title="Published Articles: 2001-2010">
          <p>Madu S.N., Idemudia, E.S. & Jegede S.A. (2001) Perceived parental disorders as risk factors for child sexual, Physical, and emotional abuse among high school students in the Mpumalanga province in South Africa. Issues in Health Psychology, Vol.8, 265-279</p>
          <p>Jegede S.A., Idemudia E.S., and Madu S.N. (2001) Public Health in Nigeria: From cure to care. Ife Psychologia: An International Journal Vol. 9(2) 35-46.</p>
          <p>Madu S.N., Idemudia, E.S. & Jegede S.A. (2001) Perceived parental Love and care and child Sexual, Physical, and emotional abuse: A study among a sample of university students in South Africa. Journal of Social Sciences, 5, (4) 247-255.</p>
          <p>Idemudia E.S., Jegede S.A., Madu S.N. and Ibe, B. (2001) Somatization symptom report in a sample of Nigerian prisoners. Journal of Social Sciences Vol.5 Nos. (1&2) 101-107</p>
          <p>Idemudia E.S., Osinowo, H.O., Balogun S.K., and William, A.M. (2001) Psychological factors predicting mental wellness and coping in a sample of adolescents suffering from sickle cell anaemia. Journal of Social Sciences, 5, (4) 239-246.</p>
          <p>Idemudia, E. S., and Reddy P., (2001-2002) Sexual Coercion of Young Offenders in Nigerian Prisons: A Preliminary report. Psychopathologie Africaine, XXXI, 2: 221-234.</p>
          <p>Balogun, S.K., Osinowo, H.O. & Idemudia, E.S. (2002). The effects of separate and combined chronic ingestion of alcohol and nicotine on body weight in Albino rats. Journal of psychological Studies, 3 (1) 75-82.</p>
          <p>Madu S.N., Idemudia, E. S., & Jegede S.A. (2003). Some perceived parental undesirable behaviours predicting child Sexual, Physical, and emotional abuse: A study among a sample of university students in South Africa. J. Soc. Sci., 7 (2) pp. 111-119.</p>
          <p>Idemudia E.S. (2004) "Spatial attributes and mental health of residents in Ibadan, Nigeria". Psychopathologie Africaine. Vol. XXXII, Pp. 155-176.</p>
          <p>Jegede, A. S., Idemudia, E.S. & Madu, S.N. (2004) Factors Affecting Access to Health Information Among Nigerian Nursing Mothers. Journal of Research for Development. Vol. 20 (2).</p>
          <p>Idemudia, E.S. (2005) "Spatial pattern and insecurity in urban Nigeria. Journal of Psychology in Africa, Vol. 15, (1), 65-72.</p>
          <p>Stompe, T. Bauer, S., Ortwein-Swoboda, G., Schanda, H., Karakula, H., Rudaleviciene, P., Chaudhry, H. R., Idemudia, E.S. and Gschaider S. (2006). Delusions of guilt: The attitude of Christian and Muslim Schizophrenic patients towards good and Evil and the responsibility of men. The journal of Muslim Mental health, Vol. 1: 43-56.</p>
          <p>Idemudia, E.S., & Boehnke, K., (2006) An Assessment of African Migrants attitude in Germany: Implication for international migration, intercultural contact, and globalization. African Psychopathologie, XXXII (1), 5-20</p>
          <p>Stompe, T, Karakula, H, Rudaleviciene, P, Okribelasvilli, N, Chaudhry, HR, ES Idemudia & Gscheider (2006). The pathoplastic effect of culture on Psychotic symptoms in schizophrenia. World Cultural Psychiatry Research Review, 157-163. http://www.wcprr.org</p>
          <p>Idemudia, E.S. (2006) Guest Editor –Globalisation and Africaness: Dialogues in Health Systems and Values. African Psychopathologie, Vol. XXXII (No 1)</p>
          <p>Idemudia, E.S. (2007) Somatisation in Children and Adolescents. Continuing Medical Education Journal, 25 (5) pp.237-238.</p>
          <p>Stompe, S.T., Bauer, S., Karakula, H., Rudaleviciene, P., Okribelashvili, N., Chaudhry, H.R., Idemudia, E.S. and Gschaider S. (2007). Paranoid-hallucinatory syndromes in Schizophrenia: Results of the International Study on Psychotic Symptoms. World Cultural Psychiatry Research Review, 63- 68.</p>
          <p>Idemudia, E.S. (2007) Personality and criminal outcomes of homeless youth in a Nigerian jail population: results of PDS & MAACL-H assessments. Journal of Child and Adolescent Mental health. 19 (2) 137-145</p>
          <p>Ritter, K., Chaudhry, H.R., Idemudia, E.S., Karakula, H., Okribelashvili, N., Rudaleviciene, P., and Stompe, T. (2008). Suicide Motives and Culture: Degree of modernization, response behaviour and acceptance. World Cultural Psychiatry Research Review, 69-76. ISSN: 1932-6270</p>
          <p>Idemudia, E.S. (2008) Perceived racism and mental health of African male and female migrants in Germany. Gender and Behaviour, 6 (2), 1702-1719</p>
          <p>Idemudia E.S. (2007-2008) Communicating and understanding cultural meanings in mental health settings with the African client. Psychopathologie Africaine, XXXIV, 1: 37-49.</p>
          <p>Idemudia, E.S. (2009) Sex and Propinquity as predictors of Attitudes towards Spouse-abuse among South Africans. Gender & Behaviour, 7, (1), pp. 2173-2183</p>
          <p>Idemudia, E.S. (2009). Self-concepts of and demographic characteristics of battered women in Gauteng, South Africa. Curationis, 32 (1), pp.45-51</p>
          <p>Idemudia, E.S. (2009). Perceived living conditions and reported feelings of wellbeing among Africans in Germany. Gender & Behaviour, 7 (2): 2541-2556.</p>
        </PublicationSection>

        <PublicationSection title="Published Articles: 2011-2015">
          <p className="text-indigo-400 font-bold mt-4">2011</p>
          <p>Idemudia, ES with Bauer, SM, Schanda, H., Karakula, H., Olajossy-Hilkesberger, L., Rudaleviciene, P., Okribelashvili, N., Chaudhry, HR, Gscheider, S., Ritter, K. and Stompe, T. (2011). Culture and the prevalence of hallucinations in Schizophrenia. Comprehensive Psychiatry, 52, 319-325.</p>
          <p>Idemudia, ES & Mahri, S. (2011). Can gender, religion, education and Personality predict willingness to forgive? Gender and behaviour, 9 (1), pp. 3765-3779</p>
          <p>Idemudia, E.S. and Makhubela, S. (2011). Gender differences, exposure to domestic violence and adolescents' identity development. Gender & Behaviour, 9 (1), pp. 3443-3465.</p>
          <p>Idemudia, ES (2011). Value orientations, Acculturative stress and mental health among African German Immigrants. Journal of Psychology in Africa, 21 (3) pp.441-446.</p>
          <p>Idemudia, ES & Matamela, NA (2011). Does Stigma Predict Mental Illness? A study of HIV/AIDS and Cancer patients in Gauteng Province, South Africa. Revista Psicologia e Saude, 3 (1), pp.1-9.</p>
          
          <p className="text-indigo-400 font-bold mt-8">2012</p>
          <p>Idemudia, ES & Matamela, NA (2012). The Role of stigmas in mental health: A comparative study. Curationis, 35 (1), Art. #30.8 pages. http://dx.doi.org/10.4102/curationis.v35i1.30</p>
          <p>Idemudia, ES & Mabunda, M (2012). The relationship between gender, cumulative adversities and mental health of employees in workplace settings in Gauteng Province, South Africa. Gender & Behaviour, 10 (1), pp. 4319-4343)</p>
          <p>Mabunda, M & Idemudia, ES (2012). Cumulative adversities and mental health in a workplace in Gauteng Province, South Africa. J. of Soc. Sci, 33 (2), 189-199.</p>
          <p>Olapegba, PO & Idemudia, ES (2012). Dispositional and Contextual Factors Predicting Smuggling Behavior among Smugglers in Border Areas in Nigeria: J. of Psychology, 3 (2), 59-64)</p>

          <p className="text-indigo-400 font-bold mt-8">2013</p>
          <p>Idemudia, ES, John, WK, & Wyatt, GE (2013, Jan). Migration Challenges among Zimbabwean refugees before, during and after arrival in South Africa. J Inj Violence Res., 5(1), 17-27. Doi:10.5249/jivr.vSi1.185</p>
          <p>Idemudia, E.S., Kgokong, K & Kolobe, P. (2013). Street Children in Mafikeng, North-West Province: A qualitative study of social Experiences. Journal of Social Development in Africa 28 (1), 163-188</p>
          <p>Maselesele, v & Idemudia, E.S. (2013). The role of social support in the relationship between mental health and posttraumatic stress disorder amongst orthopaedic patients Curationis 36, (1), Art.#122, 7 pages. http://dx.doi.org/10.4102/curationis.v36i1.122</p>
          <p>Olapegba, PO & Idemudia, E.S. (2013). Psychological predictors of perceived quality of Life among people living with HIV/AIDS in South West Nigeria. Journal of Social Development in Africa, 28 (1), 141-161</p>
          <p>Idemudia, E.S., Williams, J.K., Boehnke, K. & Wyatt, G.E. (2013). Gender differences in Trauma and Posttraumatic Stress Symptoms among Displaced Zimbabweans in South Africa. Journal of Traumatic Stress Disorders and Treatment. 2:3 http://dx.doi.org/10.4172/2324-8947.1000110</p>
          <p>Ojedokun, O & Idemudia, E.S. (2013). The Moderating role of emotional intelligence between PEN personality factors and cyber bullying in a student population. Life Sci J 10 (3):1924-1930</p>
          <p>Ojedokun, O, Idemudia, E.S. & Omotoso, A (2013). When rendering hospitality becomes collateral damage: psycho-organizational variables and job burnout among hotel workers in Nigeria. SA Journal of Industrial Psychology</p>

          <p className="text-indigo-400 font-bold mt-8">2014</p>
          <p>Ojedokun, O & Idemudia, E.S. (2014). Burnout among paramilitary personnel in Nigeria: a perspective from Conservation of Resources Theory. South African Journal of Psychology, 44(1), 106-117. DOI:10.1177/0081246313516256</p>
          <p>Idemudia, ES (2014). Associations between demographic factors and perceived acculturative stress among African migrants in Germany. African Population Studies, 28, (1) 449-462.</p>
          <p>Oluyinka Ojedokun & Erhabor S. Idemudia (2014). Psycho-socio-emotional Well-being of Workers in a High-Stress Occupation: Are Men and Women Really So Different? Gender & Behaviour 12 (3), 5824-5838)</p>
          <p>Mokoena P. Maepa & Erhabor S. Idemudia (2014). Influence of Age and Gender on the Psychological Well-being of People with HIV/AIDS. Gender & Behaviour 12 (3), 5885-5896).</p>

          <p className="text-indigo-400 font-bold mt-8">2015</p>
          <p>Idemudia, E.S. Ojedokun, O., & Desouza, M. (2015). Perceived external prestige as a mediator between quality of work life and organisational commitment of public sector employees in Ghana. SA Journal of Industrial Psychology</p>
          <p>Fagbamigbe, F. & Idemudia, E.S. (2015). Barriers to Antenatal care use in Nigeria: Evidences from Non-users and Implications for maternal health programming. BMC Pregnancy and Childbirth, 15:95.</p>
          <p>Oladipo, S.E. Idemudia, E.S (2015) Reliability and Validity Testing of Wagnild and Young's Resilience Scale in a Sample of Nigerian Youth. J Psychology, 6(1): 57-65.</p>
          <p>Idemudia, E.S., Kolobe, P. & Tsheole, P. (2015). The psychological costs of being different and ways of coping among sexual minority students in a South African University. African Population Studies, Supplement 29(2) 1988-2011.</p>
        </PublicationSection>

        <PublicationSection title="Published Articles: 2016-2020">
          <p className="text-indigo-400 font-bold mt-4">2016</p>
          <p>Fagbamigbe, A.F., Adebayo, S.B. & Idemudia, E.S. (2016). Marital Status and HIV Prevalence among women in Nigeria. International Journal of Infectious Diseases, 48, 57-63.</p>
          <p>Fagbamigbe, F.A. & Idemudia, E.S. (2016). Survival Analysis of Timing of First Childbirth and its Prognostic Factors in Nigeria. BMC Pregnancy and Childbirth, 16:102.</p>
          <p>Idemudia, E.S., Maepa, M & Moamogwe, K. (2016). Dynamics of Gender, Age, Father Involvement and Adolescents' Self-Harm and Risk-taking Behaviour in South Africa. Gender & Behaviour 2016, 14(1), 6846-6859.</p>

          <p className="text-indigo-400 font-bold mt-8">2017</p>
          <p>Idemudia, E.S. (2017). Trauma and PTSS of Zimbabwean refugees in South Africa: A summary of published studies. Psychological Trauma: Theory, Research, Practice, and Policy, 9(3), 252-257. http://dx.doi.org/10.1037/tra0000214</p>
          <p>Lawal, M.A. & Idemudia, E.S. (2017). The role of emotional intelligence and organizational support on work stress of nurses in Ibadan, Nigeria. Curationis, 40 (1), 1-8. a1715.</p>
          <p>Fagbamigbe, A.Y., Hurricane-Ike, E.O., Yusuf, O.B. & Idemudia, E.S. (2017). Trends and drivers of skilled birth attendant use in Nigeria (1990-2013). International Journal of Women's Health, 843-853.</p>
          <p>Olasupo M.O. & Idemudia, E.S. (2017) Influence of age, gender and perceived self-control on future goals of children in adversities. Child Indicators Research. DOI 10.1007/s/2187-016-9439-2.</p>

          <p className="text-indigo-400 font-bold mt-8">2018</p>
          <p>Idemudia, E.S., Olasupo, M.O., & Modiba, W. (2018). Stigma and chronic illnesses: A comparative study of people living with HIV/AIDS and people living with hypertension in Limpopo Province, South Africa. Curationis, 41(1) a1879.</p>
          <p>Lawal, A.M., Idemudia, E.S., & Senyatsi, T. (2018). Emotional intelligence and mental health: An exploratory study with South African university students. Journal of Psychology in Africa, 28(6), 492-497.</p>
          <p>Idemudia, E.S. (2018). A path Analysis for the prediction of Afroxenoglossophobia in South Africa. Gender & Behaviour, 16 (3), 11839-11853.</p>

          <p className="text-indigo-400 font-bold mt-8">2019</p>
          <p>Maepa, M.P., Ojedokun,O., Idemudia, E.S & Morubane, P. (2019). Gendered adversity and mental health of adolescents orphaned by AIDS in a rural South African community. Journal of Psychology in Africa, 29:2, 149-154.</p>
          <p>Olawa B.D. & Idemudia, E.S. (2019) Satisfaction with adult children's achievements is associated with depression and loneliness in later-life. Educational Gerontology, 45:4, 269-282.</p>
          <p>Idemudia, E.S.& Mulaudzi, S. (2019). Exploring cheating behaviour amongst married men and women in a South African university. Gender & Behaviour 17 (2), 13248-13267.</p>

          <p className="text-indigo-400 font-bold mt-8">2020</p>
          <p>Idemudia, ES, Olawa BD, Wyatt, GE & Milburn, N (2020) Pre-displacement stressors, psychological morbidity and PTSD symptoms among displaced women by Boko-Haram in North-East Nigeria. Journal of Psychology in Africa, 30 (4), 307-314.</p>
          <p>Olatunji, A., Idemudia, E.S. & Olawa, B.D. (2020). Family support, self-efficacy and suicidal ideation at emerging adulthood. International Journal of Adolescence and Youth, 25(1), 920-931.</p>
          <p>Onuoha, C.U. & Idemudia, E.S. (2020). Academic demands and mental health among undergraduate students in full-time employment. Journal of Psychology in Africa, 30, (2), 89-95.</p>
        </PublicationSection>

        <PublicationSection title="Published Articles: 2021-2025">
          <p className="text-indigo-400 font-bold mt-4">2021</p>
          <p>Olatunji, A.O. & Idemudia, E.S (2021). The multidimensionality of inter-parental conflict on aggression and mental health among adolescents. Heliyon.</p>
          <p>Olasupo, M.O., Idemudia, E.S. & Kareem, D.B. (2021). Moderated Mediation Roles of Social Connectedness and Optimism on Emotional Intelligence and Life Satisfaction. Heliyon.</p>
          <p>Adedeji, A., Idemudia, E.S., Obasanjo, A.B. & Metzner, F. (2021). Racial relations and life satisfaction among South Africans. Journal of Psychology in Africa, 31 (5), 522-528.</p>

          <p className="text-indigo-400 font-bold mt-8">2022</p>
          <p>Olonisakin, T.O. & Idemudia, E.S. (2022). Determinants of support for social integration in South Africa: The roles of race relations, social distrust, and racial identification. Journal of Community & Applied Social Psychology.</p>
          <p>Olonisakin, Tosin & Idemudia, Sunday Erhabor (2022). Psycho-social correlates of wellbeing among South Africans: An exploration of the 2017 SASAS. Acta Psychologica 231 (2022).</p>
          <p>Akokuwebe, ME & Idemudia, ES (2022). Multilevel Analysis of Urban–Rural Variations of Body Weights among Women in Nigeria and South Africa. Int. J. Environ Res. Public Health 19.</p>

          <p className="text-indigo-400 font-bold mt-8">2023</p>
          <p>Adedeji, A., Olonisakin, T.T., Buchcik, J., Metzner, F., Wandile, T., Boehnke, K., & Idemudia, E.S. (2023). The multicultural conceptualization of wellbeing. BMC Public Health, 23:2041.</p>
          <p>Ugwu, L.E.; Idemudia, E.S. (2023). Retirement Planning and Financial Anxiety among Nigerian Civil Servants: Insights from Social Comparison Theory. Behav. Sci. 13, 425.</p>
          <p>Idemudia, ES, Olawa, BD, Wyatt, GE, & Milburn, N. (2023). Reciprocal association between psychological distress and PTSD among displaced women. International Journal of Mental Health promotion.</p>

          <p className="text-indigo-400 font-bold mt-8">2024</p>
          <p>Ajele,KW & Idemudia, E.S. (2024). The Evaluation of GHQ-12 Reliability Generalization: A Meta-Analysis. PLoS ONE 19(7): e0304182.</p>
          <p>Ugwu LE, Ajele WK, Idemudia ES (2024). Paradox of life after work: A systematic review and meta-analysis on retirement anxiety and life satisfaction. PLOS Glob Public Health 4(4):e0003074.</p>
          <p>Onyedibe, M.C.C., Chidebe, R.C.W., Ugwu, L.E. & Idemudia, E.S. (2024). Cognitive emotion regulation moderates the relationship between anxiety, depression and fatigue in cancer patients. Current Psychology.</p>

          <p className="text-indigo-400 font-bold mt-8">2025</p>
          <p>Akokuwebe ME, Palamuleni ME & Idemudia ES (2025). Population dynamics and digitalization: implications for COVID-19 data sources in South Africa. Front. Public Health 12:1537057.</p>
          <p>Ajele, K.W. & Idemudia, E.S. (2025). The role of depression and diabetes distress in glycemic control: A meta-analysis. Diabetes Research and Clinical Practice, P.1-10.</p>
        </PublicationSection>

        {/* BOOK CHAPTERS SECTIONS */}
        <div className="mt-20 mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white serif mb-6 drop-shadow-2xl">Chapters in Books</h2>
          <div className="w-20 md:w-24 h-1.5 bg-indigo-500 mb-8 rounded-full"></div>
        </div>

        <PublicationSection title="Published Chapters: 1994-2000">
          <p>Idemudia E.S. (1994) Psychology of the Poor Urban Dwellers in Ibadan City. In Albert, I.O., Adisa, J., Agbola, T., and Herault, G. (eds.), Urban Management and Urban Violence in Africa. Vol 1, 283-290.</p>
          <p>Idemudia E.S. (1999) Therapies. In Udegbe I.B., Balogun S.K., Osinowo H.O., and Sunmola A.M. (Eds) Psychology: Perspectives in Human Behaviour. Dept of Psychology, Univ of Ibadan, (Ch 15) 320-342.</p>
          <p>Idemudia E.S., (2000) 'Behaviour Therapeutic Intervention among Prison Inmates in Nigeria'. In Madu S.N., Baguna P.K., & Pritz A, (Ed). Psychotherapy and African Reality. UNIN Press. 49-61.</p>
        </PublicationSection>

        <PublicationSection title="Published Chapters: 2001-2010">
          <p>Idemudia, E.S. (2002) Psychotherapy practices in Nigeria. In Alfred pritz (Ed) Globalised Psychotherapy. Facultas Universitatsverlag-und Buchhandels AG, Vienna. 575-592.</p>
          <p>Idemudia, E.S. and Boehnke K. (2005). Globalisierung, Afrika and afrikanische Immigranten in Deutschland: Ein empirischer Bericht. In A. Groh (eds) be-WEG-ung: Akademische Perspektiven auf Reisen und Ortswechsel, 49-69. Berlin: WEIDLER Buchverlag.</p>
          <p>Idemudia, ES (2008). Gender, Life experiences and reported feelings of wellbeing among African migrants in Germany. In A.A. Olowu (Ed) Xenophobia: A contemporary Issue in Psychology, 242-260.</p>
        </PublicationSection>

        <PublicationSection title="Published Chapters: 2011-2019">
          <p>Idemudia, ES (2011). Mentoring and Diversity. In AA Olowu (Eds), Mentoring: A key issue in Human resource management. Ife Centre for Psychological Issues. ISSN: 1117-1421.</p>
          <p>Jackson, L.T.B., Meiring, D., Idemudia, E., & Vijver, F.J.R. van de (2014). Cross-cultural psychology in the Rainbow Nation of Africa. In Toward sustainable development through nurturing diversity (pp. 265-273).</p>
          <p>Idemudia, E.S. (2018). Ubuntu in psychotherapy. In N.A. Mul: Opsoek naar BUNTU Zuid-Afrika onder mijn huid. The Netherlands: Inhoud.</p>
        </PublicationSection>

        {/* CO-EDITED BOOKS SECTION */}
        <div className="mt-20 mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white serif mb-6 drop-shadow-2xl">Co-edited Books</h2>
          <div className="w-20 md:w-24 h-1.5 bg-indigo-500 mb-8 rounded-full"></div>
        </div>

        <PublicationSection title="Co-edited Monographs & Volumes">
          <p>Idemudia, E.S. (2004). The Unifying Aspects of Cultures. Vienna Austria. (Available Online/CD-ROM).</p>
          <p>Idemudia, E.S. (2008) Knowledge, Transformations and diseases in Africa: The Case of HIV/AIDS. In Arlt, H, & Idemudia E.S. (Eds) Knowledge, Creativity and Transformations in Societies Vienna Austria.</p>
          <p>Jackson, L.T.B., Meiring, D., van de Vijver, F.J.R., Idemudia, E., & Jr. W.K. Gabrenya (EDS) (2014). Toward sustainable development through nurturing diversity. Melbourne, FL: International Association for Cross-Cultural Psychology.</p>
        </PublicationSection>

        {/* PUBLICATIONS: BOOKS Visual Section (KEEPING EXISTING CUSTOM VISUALS) */}
        <div className="mt-32 mb-16">
          <h2 className="text-3xl md:text-6xl font-bold text-white serif mb-6 drop-shadow-2xl">Publications: BOOKS</h2>
          <div className="w-20 md:w-24 h-1.5 bg-indigo-500 mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-indigo-100 font-light max-w-2xl mb-12 italic border-l-4 border-indigo-500/50 pl-6">
            Core monographs and academic textbooks documenting major research investigations.
          </p>
          
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

            {/* Book 2 */}
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
               </div>
            </div>

            {/* Book 1 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 border-t border-white/10 pt-12">
               <div className="md:w-1/3 flex flex-col items-center">
                 <img 
                   src="https://static.wixstatic.com/media/bb7d0d_aa4a6b32b1c840beba6a720d909f22d5~mv2.jpeg" 
                   alt="Applied Psychology Book Cover" 
                   className="w-44 shadow-2xl rounded-lg hover:scale-105 transition-transform border border-white/10" 
                 />
                 <span className="mt-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Book 1 (2005)</span>
               </div>
               <div className="md:w-2/3">
                 <h3 className="text-xl md:text-2xl font-bold text-white serif mb-4">Applied Psychology</h3>
                 <p className="text-slate-300 text-sm leading-relaxed mb-6">Idemudia, E.S. and Shikongo, A. (2005). Applied Psychology (Centre for External Study ed). University of Namibia, Namibia. ISBN: 99916-67-63-6</p>
               </div>
            </div>
          </div>
        </div>

        {/* Footer Design Element */}
        <div className="mt-20 text-center pb-10">
           <div className="w-16 h-1 bg-white/10 mx-auto mb-8 rounded-full"></div>
           <p className="text-indigo-400 text-[10px] uppercase tracking-[0.3em] font-bold">Documenting Over 380 Scientific Contributions</p>
        </div>
      </div>
    </div>
  );
};

export default Publications;
