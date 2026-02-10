
import React from 'react';
import { NavItem, StatItem, Award } from './types';

export const THEME_IMAGE = "https://static.wixstatic.com/media/a394701f8d754f4685e5578bda5e0df9.jpg";
export const BANNER_IMAGE = THEME_IMAGE;
export const PORTRAIT_IMAGE = "https://static.wixstatic.com/media/bb7d0d_cdb2b375cb8b47029456d03c808b825f~mv2.jpg/v1/crop/x_0,y_20,w_682,h_828/fill/w_682,h_828,fp_0.50_0.50,q_85,enc_avif,quality_auto/WhatsApp%20Image%202024-02-01%20at%2017_55_15_3966f98b.jpg";

export const PORTRAIT_IMAGES = [
  PORTRAIT_IMAGE,
  "https://static.wixstatic.com/media/bb7d0d_06aa213781bb4ad6920d02eb7e66315e~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_d8f34ac4b5874ea3b19fc088b280dc9b~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_fe9245aa8da548e5a9456778a16e9174~mv2.jpg"
];

export const ABOUT_HEADER_IMAGE = "https://static.wixstatic.com/media/bb7d0d_393e1d764824412e9d1fe6f8fb366b8c~mv2.jpg/v1/fill/w_980,h_702,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20240201-WA0033.jpg";
export const SECTION_BG_IMAGE = "https://static.wixstatic.com/media/11062b_20c28478658b408cb6c6b0fd52f0077e~mv2_d_3695_2077_s_2.jpg/v1/fill/w_160,h_90,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_20c28478658b408cb6c6b0fd52f0077e~mv2_d_3695_2077_s_2.jpg";
export const CV_DOWNLOAD_LINK = "https://134a3cc0-dad9-44eb-843f-eb9f78354590.filesusr.com/ugd/bb7d0d_4881f7d6607e401b920ffd8bc6ccc45b.docx?dn=Erhabor%20Idemudia%20CV%20%2017%20Nov%202023%20please%20update%20Latest.docx";
export const LECTURE_PDF_LINK = "https://134a3cc0-dad9-44eb-843f-eb9f78354590.filesusr.com/ugd/bb7d0d_eec031a1a94d44b3b5917e966b64a9e1.pdf";

export const SOCIAL_LINKS = {
  orcid: "https://orcid.org/0000-0002-5522-7435",
  researchGate: "https://www.researchgate.net/profile/Erhabor-Idemudia",
  googleScholar: "https://scholar.google.co.za/citations?hl=en&user=Q-D0SWUAAAAJ",
  loop: "https://loop.frontiersin.org/people/1503846/bio"
};

export const GALLERY_IMAGES = [
  "https://static.wixstatic.com/media/bb7d0d_7d74000563324218a423663a4df1a928~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_28b2ed111e784ebba85be66eeb69326c~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_393e1d764824412e9d1fe6f8fb366b8c~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_a64838fa70e44ddc9a7eebd4012a6d40~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_0ecd8c78561d41eabbea3d432c5093e3~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_0eb066aa11c54a47a79ec96b870742b7~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_b0b71f72a8104fc8855adfd691d67c97~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_2353863adbce4f06b077bcfd9534ce31~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_60c762b0bb4c448882c6037a76969813~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_8132bb007d3f42e79e704a453aebfe37~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_a842a377d9ab42ee9552f623d56a2ffe~mv2.jpeg",
  "https://static.wixstatic.com/media/bb7d0d_fe9245aa8da548e5a9456778a16e9174~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_0fec8960316143438643bbaec027bea1~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_f6db1facfb1743479c27dfa25d12dccf~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_fe079a3a279c4366b382ac3c2a799af7~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_2f7e25a9740447eebb66dc993878c266~mv2.jpeg",
  "https://static.wixstatic.com/media/bb7d0d_403eaa588bdd4da5b3cbcfeb54f58f8e~mv2.jpeg",
  "https://static.wixstatic.com/media/bb7d0d_d1b8586206aa4cef90064d7768e32b59~mv2.jpeg",
  "https://static.wixstatic.com/media/bb7d0d_edc95179f7d14599af36539f208425f3~mv2.jpeg",
  "https://static.wixstatic.com/media/bb7d0d_0871dead78334e6eb45226a4b8bf990d~mv2.jpeg",
  "https://static.wixstatic.com/media/bb7d0d_f06b80716dbf4198ae2e313ed68f7cc0~mv2.jpeg"
];

export const IMPACT_IMAGES = [
  "https://static.wixstatic.com/media/bb7d0d_9161a7aef5204c39b989a45c425a437b~mv2.png",
  "https://static.wixstatic.com/media/bb7d0d_7dc8e7331a8044099179501f65941bd6~mv2.png",
  "https://static.wixstatic.com/media/bb7d0d_c374521c9b4c4975862ef8b7f51c0ac4~mv2.png",
  "https://static.wixstatic.com/media/bb7d0d_ddc954ad3adb404a8bf8cf897d2ec72c~mv2.jpg",
  "https://static.wixstatic.com/media/bb7d0d_e525ff1e07f74c37a0ee76e888a71b28~mv2.png",
  "https://static.wixstatic.com/media/bb7d0d_261e663e840f487d8de1b3f1187ddf4c~mv2.png"
];

export const LECTURE_IMAGES = [
  "https://static.wixstatic.com/media/bb7d0d_b29103b5682c4ed0a5d5985eae562b0b~mv2.jpeg",
  "https://static.wixstatic.com/media/bb7d0d_223d0e6cc7524bf89cd1e861b0cb1596~mv2.jpeg",
  "https://static.wixstatic.com/media/bb7d0d_404eaf2bd4d24e98a0257afb22270bea~mv2.jpeg",
  "https://static.wixstatic.com/media/bb7d0d_b46dbe9ceea54cc5b9ab14541d926d14~mv2.jpeg",
  "https://static.wixstatic.com/media/bb7d0d_339c3005b3a24a30be32a1c2ec7a4317~mv2.jpeg",
  "https://static.wixstatic.com/media/bb7d0d_9d01edef09624041a87d295584f51aed~mv2.jpeg",
  "https://static.wixstatic.com/media/bb7d0d_0cadb73c77f5442dbba49fc2fbf2963f~mv2.jpeg"
];

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Publications', path: '/publications' },
  { label: 'Research', path: '/ongoing-research' },
  { label: 'Invited Talks', path: '/talks' },
  { label: 'Research Results', path: '/results' },
];

export const PROFESSOR_INFO = {
  name: "Professor Erhabor Sunday Idemudia",
  title: "Professor (Full) of Research & Clinical Psychology",
  qualifications: "BSc (Hons), Psychology, MSc, PhD (Clinical Psych), Ibadan; FNPA, FWCP, FNACP, FSTIAS, FAvH, FUCLA-Phodiso",
  affiliations: [
    "Faculty of Humanities, North-West University, South Africa",
    "General Secretary & Registrar of Membership, WCP-African Chapter",
    "Board Member and Fellow, World Council for Psychotherapy (WCP), Austria"
  ],
  awards: [
    { year: "2018", title: "Georg-Forster Life-Time Achievement Award in Research" },
    { year: "Current", title: "NRF Established C2 Rated Scientist" },
    { year: "Fellow", title: "Humboldtian (Germany), Leventis (UK), Salzburg (Austria)" }
  ],
  bio: "Formerly HoD & Subject Chair (Psychology), Professor Idemudia is a tenured Full-Professor of Research (Social Science Cluster) in the Faculty of Humanities, North-West University, South Africa. He is currently the Chairperson of three Ethics Committees at the North-West University: (1) Basic and Social Sciences Research Ethics Committee (BaSSREC), (2) Human and Social Sciences Research Ethics Committee (HSSREC), and (3) EMELTEN-REC. He is an NRF Established C2 Rated Scientist and a 2018 recipient of the Georg-Forster Life-Time Achievement Award in Research from the Alexander Humboldt Foundation, Germany. A Humboldtian (Germany); Leventis Fellow (UK); Salzburg Fellow (Austria); a Phodiso-UCLA Fellow (South Africa/USA); and a fellow of several professional bodies including the Nigerian Psychological Association and the World Council for Psychotherapy."
};

export const IMPACT_STATS: StatItem[] = [
  { label: 'Publications', value: '150+', description: 'Peer-reviewed articles and books' },
  { label: 'Citations', value: '2500+', description: 'International research impact' },
  { label: 'Projects', value: '25+', description: 'Funded research initiatives' },
  { label: 'Awards', value: '12', description: 'Academic & research excellence' },
];

export const HISTORIC_AWARDS = [
  { period: "1992-1995", items: ["CODESRIA Laureate - 1992", "Awardee, CODESRIA grant for thesis writing (Ph.D.)", "Awardee, University of Ibadan Senate research grant"] },
  { period: "1996-1997", items: ["Fellow, Centre for African Studies, London, United Kingdom"] },
  { period: "1998-1999", items: ["Awardee, Postgraduate School conference grants for PG Teachers"] },
  { period: "2000-2002", items: ["Fellow, CODESRIA, Dakar, Senegal", "Awardee, CODESRIA grant for child and youths studies programme"] },
  { period: "2001-2002", items: ["Awardee, IFRA Urban studies/Security Studies Grant"] },
  { period: "2002-2003", items: ["Awardee, Salzburg Seminar Austria", "Fellow, Salzburg Seminar (Equity in Health)", "Certificate of excellence for counselling & psychotherapy practice in Africa - NACP"] },
  { period: "2003-2005", items: ["Alexander Von Humboldt Stiftung (AvH) Research Scholarship, Germany", "Fellow, Alexander Von Humboldt Stiftung (AvH) Germany", "Alexander Von Humboldt Language scholarship, Germany", "Awardee/Fellow Albert Ellis Institute, USA", "Best Poster Certificate, IACCP 6th European Regional Congress (Budapest-Hungary)", "Graduate Basis for Registration, British Psychological Society"] },
  { period: "2008-2010", items: ["Fellow, Phodiso UCLA-UL", "Awardee, NIH Research grants (Trauma and Wellbeing of Homeless Zimbabwean in SA)", "Visiting Scholar, UCLA, USA (2008-2014)", "Awardee, IAACP Witkin-Okonji travel award", "Awardee, AvH conference grant, Germany"] },
  { period: "2012-2018", items: ["NRF C2 Rated Researcher (2013-2018)", "Most Productive Senior Researcher Award (2012-2014)", "Most Productive Supervisor Award (2012-2014)", "Rectors Award for Research Excellence", "Rector’s Award for NRF Rated Researcher", "Georg-Forster Research Award for Life-Time achievements (AvH Germany)", "Fellow, Nigerian Psychology Association", "Fellow, World Council for Psychotherapy (Austria)", "Fellow, Nigerian Association of Clinical Psychologist"] }
];

export const RECENT_AWARDS = [
  { 
    year: "2019", 
    items: [
      "Alexander Humboldt Foundation, Visiting Research Award, Germany",
      "UCLA, USA Phodiso II Study NIH Forgarty (5D43TW007278)",
      "Psycon: Global Challenges Research Fund (GCRF) - University of Wolverhampton, UK",
      "NRF: C3 to C2 Established Scientist (South Africa)",
      "Alexander von Humboldt Grant for Equipment",
      "Appointed Associate Editor, Heliyon, Netherlands"
    ] 
  },
  { 
    year: "2020", 
    items: [
      "Stellenbosch Institute for Advanced Study (STIAS) Fellow",
      "UCLA, USA Phodiso II Study NIH Forgarty",
      "Alexander von Humboldt Grant for Equipment (€17,300)",
      "Appointed Consultant/Mentor-SACERT, UCLA, USA",
      "Awarded: ISOQLS Member Highlight of the Month (September)",
      "International Host to a Feodor Lynen Fellowship Scholar from Germany",
      "Alexander von Humboldt Grant for book subsidy"
    ] 
  },
  { 
    year: "2021", 
    items: [
      "Alexander von Humboldt 2021 Research Stay, Germany",
      "UCLA, USA SACERT Grant Approved",
      "Appointed Consultant/Mentor-SACERT Programme, UCLA, USA",
      "International Host to a Feodor Lynen Fellowship Scholar from Germany",
      "SAG-CORE COBABOY Grant Study – International SA/Germany Approved"
    ] 
  },
  { 
    year: "2022", 
    items: [
      "Appointed Chairperson, NPA Board of Research and Scholarship Committee",
      "Appointed Chairperson of BASSREC FHUM, NWU",
      "Appointed Chairperson, HSSREC, FHUM, NWU",
      "Member/Reviewer, NRF-DAAD In-Country Scholarship Programme",
      "UCLA, USA SACERT Grant Approved",
      "International Host to a Feodor Lynen Fellowship Scholar from Germany"
    ] 
  },
  { 
    year: "2023", 
    items: [
      "Appointed Chairperson, NPA Board of Research and Scholarship Committee",
      "Appointed Member, American Psychological Association (APA), USA",
      "Appointed Chairperson, EMELTEN-REC, NWU",
      "Member/Reviewer, NRF-DAAD In-Country Scholarship Programme",
      "Friedrich-Schiller University Research Excellence Award",
      "Appointed Consultant/Mentor-SACERT-II Programme, UCLA, USA",
      "International Host to a Feodor Lynen Fellowship Scholar from Germany"
    ] 
  }
];

export const HONOURS_AND_SOCIETIES = [
  { year: "1986-Present", title: "Member, Nigeria Psychological Association (NPA)" },
  { year: "1990-Present", title: "Member, Nigeria Association of Clinical Psychologists (NACP)" },
  { year: "1990-Present", title: "Member, African Society for the Psychological Study of Social Issues" },
  { year: "1995-Present", title: "Member, Society for Women and Aids in Africa, Nigerian Chapter" },
  { year: "1995-Present", title: "Member, Social Sciences Academy Nigeria" },
  { year: "1998-Present", title: "Public Relations Officer, Society for Health and clinical Psychologists" },
  { year: "1998-2004", title: "Visiting lecturer, SS Peters and Paul Degree Program, Bodija, Ibadan" },
  { year: "1996-1997", title: "Fellow - Centre for African Studies, SOAS, University of London" },
  { year: "1996-1997", title: "Member, Institute of Commonwealth Studies (ICS), University of London" },
  { year: "1996-1997", title: "Member, Royal African Society, SOAS, University of London" },
  { year: "2001-Present", title: "Associate Member - Canadian Psychological Association" },
  { year: "1997-1998", title: "External Examiner Ibadan Polytechnic - Department of General Studies, Nigeria" },
  { year: "1999-2001", title: "External Examiner Bilgard Seminary Enugu, Nigeria" },
  { year: "1999-Present", title: "Member Nigerian Society for Psychotherapists (NSP)" },
  { year: "2000-Present", title: "Member World Council for Psychotherapy (WCP), Austria" },
  { year: "2002-Present", title: "Secretary-General, World Council for Psychotherapy (African Chapter) WCP-AC" },
  { year: "2002-Present", title: "Member, African Counselling Group (ACG) - New York, U.S.A." },
  { year: "2002-Present", title: "Member, International Transcultural Psychiatry Research Group - Austria" },
  { year: "2002-Present", title: "Member, Network of Developmental Psychologists in Africa, South Africa" },
  { year: "2002-Present", title: "Member International Guardianship Network Berlin Germany" },
  { year: "2002-Present", title: "Member International Society of Clinical Psychology, USA" },
  { year: "2001-Present", title: "Executive Member (Secretary-Gen.) World council for Psychotherapy (African Chapter)" },
  { year: "2002-Present", title: "Member, Editorial Board - Journal of Human Ecology, India" },
  { year: "2002-Present", title: "Member Scientific Committee Council, International Society for Equity in Health (ISEqH) Canada" },
  { year: "2001-2006", title: "External Examiner, University of Limpopo, Turfloop Campus" },
  { year: "2002-Present", title: "Member, Editorial board - Journal of Studies on Ethno-Medicine, India" },
  { year: "2005-Present", title: "BPsyche Programme/Research and PhD Coordinator (University of Limpopo)" },
  { year: "2006-Present", title: "Associate Editor, Journal of Child and Adolescent mental health (South Africa)" },
  { year: "2006-Present", title: "Deputy Head/Acting Head, Department of Psychology, University of Limpopo" },
  { year: "2007", title: "Invited as NRF Panel Member (Institutional Capacity development programmes) Pretoria" },
  { year: "2007-2008", title: "Section Chairman, INST (KCTOS) conference in Austria" },
  { year: "2008", title: "Nominated Member International Scientific Committee for the 2008 World Congress (IACCP), Bremen, Germany" },
  { year: "2008", title: "Nominated Chairperson LOC, Hosting of 2012 IACCP conference in South Africa" },
  { year: "2008", title: "Invited for a State-of–the-Art-Lecture at the July 2008 XIXth IAACP Conference Bremen, Germany" },
  { year: "2008", title: "Invited to Present a Keynote paper at the 2012 XXX ICP Congress Cape Town, South Africa" },
  { year: "2008", title: "Invited as NRF Panel Member (Pretoria)" },
  { year: "2009-2010", title: "Alternate Convener, University of Limpopo Wellness Forum - HEAIDS Programme" },
  { year: "2009", title: "Secretary-General and Member organizing Committee 2014 WCP Conference South Africa" },
  { year: "2010", title: "Appointed: Panel Member ‘Rural and Remote Psychology Interest Group” ICAP Melbourne, Australia" },
  { year: "2010", title: "Appointed: Coordinator, South African Universities, EU Erasmus Mundus II" },
  { year: "2010-2013", title: "Head of Research Unit, Department of Psychology, NWU Mafikeng Campus" },
  { year: "2010", title: "Appointed External Examiner (Limpopo, UKZN, UNISA)" },
  { year: "2010", title: "Appointed Reviewer/Associate Editor: International Journal of Psychology, Germany" },
  { year: "2010-date", title: "Deputy Chair, University Ethics Committee" },
  { year: "2010-date", title: "Member, University Research Committee" },
  { year: "2011-date", title: "Appointed Member, Advisory Board and Supervisor, Trisano Project Scholars (UCLA-TTP)" },
  { year: "2011-date", title: "Reviewer, Journal of Psychology in Africa" },
  { year: "2011-date", title: "Reviewer, Curationis (South African Journal)" },
  { year: "2012", title: "External Examiner, University of Western Cape, South Africa" },
  { year: "2012-date", title: "External examiner: Department of psychology, University of Namibia" },
  { year: "2012-date", title: "External examiner and Visiting professor, Covenant University, Ota, Nigeria" },
  { year: "2012-date", title: "External Examiner, Lagos State University, Lagos, Nigeria" },
  { year: "2013-2018", title: "NRF C3 Rated Scientist" },
  { year: "2013-date", title: "Head of Research Niche Area (RNA), sub programmes: Quality of Life and Health" },
  { year: "2013-date", title: "External Examiner, Midrand Graduate Institute (MGI), Johannesburg" },
  { year: "2013-date", title: "External Examiner, University of Johannesburg, South Africa" },
  { year: "2013-2014", title: "Appointed Chairman, Scientific Committee, 2014 WCP conference, Durban" },
  { year: "2013-2014", title: "Vice Chair, LOC of the 2014 World Council for Psychotherapy (WCP) conference" },
  { year: "2014-date", title: "Elected Secretary-General and Registrar of Membership, WCP (African Chapter)" },
  { year: "2014-date", title: "Member, International collaboration on ADHD and substance abuse (ICASA) Foundation" },
  { year: "2014-date", title: "Awarded Georg-Forster Life-Time Achievement in Research and Teaching (AvH Germany)" },
  { year: "2014-date", title: "Member of NWU Institutional Committee for Research and Innovation (ICRI)" },
  { year: "2014-date", title: "Member of the NWU Institutional Research Support Commission (IRSC)" },
  { year: "2016-date", title: "Member, Public Health Association of South Africa (PHASA)" },
  { year: "2017-date", title: "Fellow, Nigerian Psychological Association, Nigeria" },
  { year: "2018-date", title: "Fellow, World Council for Psychotherapy, Austria" },
  { year: "2019-date", title: "Fellow, Nigerian Association of Clinical Psychologists" },
  { year: "2020-date", title: "Fellow, Stellenbosch Institute of Advanced Study, South Africa" },
  { year: "2021", title: "Alexander von Humboldt Research Visit award, Germany" },
  { year: "2023-date", title: "2023 Friedrich-Schiller University award for Research excellence award" },
  { year: "2023", title: "Jena Excellence Fellowship Programme" }
];

export const RESEARCH_RESULTS = [
  {
    category: "Key Highlights & Keynotes",
    links: [
      { title: "ICP 2024 Keynote Speaker - Starry Sky", url: "https://icp2024.com/scientific-programme/keynote-speakers/prof-erhabor-idemudia/" },
      { title: "STIAS Fellowship Profile", url: "https://stias.ac.za/fellows/erhabor-idemudia" },
      { title: "Jena Excellence Fellowship Programme", url: "https://www.uni-jena.de/en/22660/jena-excellence-fellow-programme" }
    ]
  },
  {
    category: "News & Media Recognition",
    links: [
      { title: "NWU academic invited to a renewed research stay in Germany", url: "http://news.nwu.ac.za/nwu-academic-invited-renewed-research-stay-germany" },
      { title: "Nyaope drug users: studying pathways to wellbeing", url: "http://news.nwu.ac.za/nyaope-drug-users-studying-pathways-wellbeing" },
      { title: "NWU professor takes psychological peep at 2020 class learners", url: "http://news.nwu.ac.za/nwu-professor-takes-psychological-peep-2020-class-learners" },
      { title: "Afrikaner in Deutschland fühlen sich like Ausserirdische (NZZ)", url: "https://www.nzz.ch/international/afrikaner-in-deutschland-fuehlen-sich-wie-ausserirdische-ld.1560242" },
      { title: "Why African youths are obsessed with Europe (The African Courier)", url: "http://www.theafricancourier.de/europe/why-african-youths-are-obsessed-with-europe/" },
      { title: "Kosmos Interviews (Alexander von Humboldt Foundation)", url: "https://www.humboldt-foundation.de/web/kosmos-interviews-en-104-2.html" },
      { title: "ZDF Mediathek: Enttaeuschte Hoffnung Video", url: "http://www.zdf.de/ZDFmediathek/beitrag/video/2593700/Enttaeuschte-Hoffnung-auf-besseres-Leben" },
      { title: "NWU academic recognised for outstanding service in clinical psychology", url: "http://news.nwu.ac.za/nwu-academic-recognised-outstanding-service-clinical-psychology" },
      { title: "ISQOLS Member Highlight of the Month", url: "https://isqols.org/news/9163058" },
      { title: "Research explores spread and prevention of HIV/AIDS in Africa", url: "http://news.nwu.ac.za/research-explores-spread-and-prevention-hivaids-africa" }
    ]
  },
  {
    category: "Major Publications & Studies",
    links: [
      { title: "Psychosocial experiences of African migrants in six European countries (Springer Nature)", url: "https://link.springer.com/book/10.1007/978-3-030-48347-0" },
      { title: "AvH Study II 2021 Questionnaire", url: "https://beliv.limequery.com/877344?lang=en" },
      { title: "TandfOnline: Recent Youth Studies Findings", url: "https://www.tandfonline.com/doi/full/10.1080/02673843.2020.1779762" },
      { title: "MVCR Migration Study Report", url: "http://www.mvcr.cz/migrace/soubor/52-54-25-26-2015-pdf.aspx" }
    ]
  },
  {
    category: "Academic Profiles & Repositories",
    links: [
      { title: "ORCID Profile", url: "https://orcid.org/0000-0002-5522-7435" },
      { title: "ResearchGate Profile", url: "https://www.researchgate.net/profile/Erhabor-Idemudia" },
      { title: "Google Scholar Profile", url: "https://scholar.google.ca/citations?user=Q-D0SWUAAAAJ&hl=en" },
      { title: "Scopus Author Detail", url: "https://www.scopus.com/authid/detail.uri?authorId=22934091000" },
      { title: "Loop (Frontiers) Overview", url: "https://loop.frontiersin.org/people/1503846/overview" },
      { title: "Mendeley Profile", url: "https://www.mendeley.com/profiles/erhabor-idemudia/" },
      { title: "African Scientists Directory", url: "https://africanscientists.africa/business-directory/idemudia/" }
    ]
  }
];

export const INVITED_TALKS = [
  {
    date: "1993, March",
    title: "Application of Appropriate Resources to Enhancing the Efficacy of Health Education in Primary Health Care",
    venue: "Workshop on the training of Local Government Health officers and Supervisors, Osogbo Osun State, Nigeria"
  },
  {
    date: "1993, July",
    title: "Environmental Stressors and the Executives",
    venue: "Oyo State Conference and Local Government Service Commission, University of Ibadan Conference Centre, Nigeria"
  },
  {
    date: "1993, December",
    title: "Behavioural Aspects of Nigerian Women’s Fertility",
    venue: "Psywom Conference on the Network for the Psychological Studies of Women"
  },
  {
    date: "1994, December",
    title: "Psychology of the Urban Poor in Ibadan City",
    venue: "IFRA International Conference on Urban Management and Urban Violence in Africa, IITA, Ibadan, Nigeria"
  },
  {
    date: "1995, May",
    title: "Rapporteur at the Convention of the African Society for the Psychological Study of Social Issues",
    venue: "University of Ibadan Conference Centre, Nigeria"
  },
  {
    date: "1996, October",
    title: "Prisons prisoners and psychological pressures in Nigeria",
    venue: "Royal African Society Workshop/Lecture Series, SOAS, University of London"
  },
  {
    date: "1996, November",
    title: "Prisoners and refugees: A study of their mental health",
    venue: "West Africa Workshop/Seminar, Daryll Ford Laboratory, Anthropology Department, University of London, London"
  },
  {
    date: "1996, October",
    title: "Nigerian Prison System: Current issues and problem areas",
    venue: "Workshop/Symposium for Prison Staff and Prisoners organized by Medium Security Unit, Homerton, London"
  },
  {
    date: "1999, July",
    title: "Prediction of Violence: An Assessment of Related Psychopathology in a High Risk Group",
    venue: "18th Annual General Conference, Nigerian Psychological Association (NPA), University of Lagos, Akoka, Lagos Nigeria"
  },
  {
    date: "2000, April - May",
    title: "An Examination of Psychosocial Characteristics of Homeless Street Youths and criminal Behaviour in a Sample of Prison Inmates in Nigeria: Implications for Theory and Behavioural Intervention",
    venue: "CODESRIA Workshop on Child and Youth Fellowship Programme, Dakar Senegal"
  }
];

export const ONGOING_RESEARCH_PUBLICATIONS = [
  {
    authors: "Ugwu, Lawrence; Idemudia, Erhabor; Akokuwebe, Monica; Onyedibe, Maria Chidi (2024)",
    title: "Beyond the shadows of trauma: Exploring the synergy of emotional intelligence and distress disclosure in Nigerian adolescents’ trauma journey",
    journal: "South African Journal of Psychology",
    status: "Accepted for Publication",
    id: "SAP-23-0074.R7"
  },
  {
    authors: "Kenni Wojujutari Ajele, Erhabor Sunday Idemudia and Lawrence Ejike Ugwu",
    title: "The Assessment of Reliability Generalisation of Clinician-Administered PTSD Scale for DSM-5 (CAPS-5): A Meta-analysis Authors",
    journal: "Frontiers in Psychology, Quantitative Psychology and Measurement",
    status: "Under Review",
    id: "1354229",
    url: "http://review.frontiersin.org/review/1354229/0/0"
  },
  {
    authors: "Kenni Wojujutari Ajele; Erhabor Sunday Idemudia; Lawrence Ejike Ugwu",
    title: "Evaluation of Reliability Generalization of Conner-Davison Resilience Scale (CD-RISC-10 and CD-RISC-25): A Meta-analysis",
    journal: "PLOS ONE",
    status: "Under Review",
    id: "PONE-D-23-41010"
  },
  {
    authors: "Adedeji Adekunle, Saskia Hanft-Robert, Franka Metzner, Johanna Buchcik, Erhabor Idemudia, Boehnke, Klaus",
    title: "The development and validation of the BeLiv Microaggression Scale (BMS -27) – a metacontextual measure of microaggression",
    journal: "PLOS ONE",
    status: "Under Review"
  }
];

export const ONGOING_PROJECTS = [
  {
    number: 1,
    title: "International Student Project (ASToIS-SAG)",
    description: "Assessing Acculturation strategies, acculturative stress, and mental health of International Students in South African and German Universities: Investigating the Buffering Roles of Social Support and Psychological Capital with Dr Constance Karing and Prof Andrea Beelman at FSU, Germany."
  },
  {
    number: 2,
    title: "NRF-funded SAG-CORE (COBABOY)",
    description: "A panel study titled 'Post COVID-19: Barrier or Boost for a Sustainable Improvement in Wellbeing and Identity Development of Youth'. This longitudinal mixed-methods study addresses COVID effects on value orientations, social orientations, and psycho-social well-being of young people in South Africa and Germany."
  },
  {
    number: 3,
    title: "The BeLiv Project",
    description: "Sponsored by the AvH Foundation, Germany, this project focuses on the development and validation of a microaggression scale (BMS-27) as a metacontextual measure.",
    url: "https://www.beliv-study.com"
  },
  {
    number: 4,
    title: "UCLA Trauma I & II Projects (Phodiso/SACERT)",
    description: "Researching Internally Displaced Men and Women in Nigeria, Botswana, and Zimbabwe to compare PTSD/PTSS and trauma across demographics of African populations."
  },
  {
    number: 5,
    title: "AvH Foundation III Project",
    description: "Titled 'Sources of Psychosocial Capitals as Pathways to Positive Acculturation and Well-being of black immigrants in Germany and the Netherlands'. A mixed-method study exploring Posttraumatic Growth among African immigrants, investigating why some integrate well despite acculturative stress and racism."
  }
];
