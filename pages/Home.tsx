
import React, { useState } from 'react';
import { ExternalLink, Award as AwardIcon, Download, ChevronRight, Maximize2, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import { 
  PROFESSOR_INFO, 
  IMPACT_STATS, 
  PORTRAIT_IMAGE, 
  SOCIAL_LINKS, 
  GALLERY_IMAGES, 
  IMPACT_IMAGES, 
  LECTURE_IMAGES, 
  LECTURE_PDF_LINK 
} from '../constants';

const Home: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  return (
    <div className="relative pt-24 md:pt-32">
      <ImageModal 
        isOpen={!!selectedImage} 
        onClose={closeImage} 
        imageSrc={selectedImage || ''} 
      />

      {/* About Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-2/5 xl:w-1/3">
              <div 
                className="relative group max-w-sm mx-auto lg:max-w-none cursor-pointer"
                onClick={() => openImage(PORTRAIT_IMAGE)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <img 
                  src={PORTRAIT_IMAGE} 
                  alt={PROFESSOR_INFO.name} 
                  className="relative rounded-2xl w-full shadow-2xl border border-white/10"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                  <Maximize2 className="text-white" size={32} />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/5 xl:w-2/3 text-white">
              <span className="text-indigo-300 font-semibold tracking-widest uppercase text-xs mb-3 block">Distinguished Professor</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 serif drop-shadow-md">{PROFESSOR_INFO.name}</h1>
              <p className="text-lg md:text-xl text-indigo-200 mb-8 font-light tracking-wide italic border-l-4 border-indigo-500 pl-4">{PROFESSOR_INFO.title}</p>
              
              <div className="space-y-6 text-slate-100 leading-relaxed mb-10 text-lg">
                <p className="drop-shadow-sm">{PROFESSOR_INFO.bio}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 mt-12">
                <Link 
                  to="/about" 
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-indigo-500/20 w-full sm:w-auto justify-center"
                >
                  Keep Reading <ChevronRight size={20} />
                </Link>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href={SOCIAL_LINKS.orcid} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white/20 rounded-full text-[10px] font-bold text-white hover:bg-white hover:text-slate-900 transition-all uppercase tracking-widest backdrop-blur-sm">ORCID</a>
                  <a href={SOCIAL_LINKS.researchGate} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white/20 rounded-full text-[10px] font-bold text-white hover:bg-white hover:text-slate-900 transition-all uppercase tracking-widest backdrop-blur-sm">ResearchGate</a>
                  <a href={SOCIAL_LINKS.googleScholar} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white/20 rounded-full text-[10px] font-bold text-white hover:bg-white hover:text-slate-900 transition-all uppercase tracking-widest backdrop-blur-sm">Scholar</a>
                  <a href={SOCIAL_LINKS.loop} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white/20 rounded-full text-[10px] font-bold text-white hover:bg-white hover:text-slate-900 transition-all uppercase tracking-widest backdrop-blur-sm">Loop</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - 2-column grid */}
      <section className="py-20 bg-slate-950/40 backdrop-blur-md border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-indigo-400 font-semibold tracking-widest uppercase text-xs mb-2 block">Visuals</span>
            <h2 className="text-4xl font-bold serif text-white tracking-widest">GALLERY</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {GALLERY_IMAGES.map((img, idx) => (
              <div 
                key={idx} 
                className="overflow-hidden rounded-2xl shadow-xl aspect-[4/3] relative group border border-white/10 cursor-pointer"
                onClick={() => openImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Gallery Image ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                    <Maximize2 className="text-white" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Research Impact Section */}
      <section className="py-24 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-indigo-400 font-semibold tracking-widest uppercase text-xs mb-3 block">Academic Influence</span>
            <h2 className="text-4xl md:text-5xl font-bold serif text-white drop-shadow-lg uppercase tracking-tight">International Research Impact</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="space-y-12">
            {/* First Row: 4-column row of research stats images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {IMPACT_IMAGES.slice(0, 4).map((img, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-2xl overflow-hidden hover:bg-white/20 transition-all cursor-pointer group relative"
                  onClick={() => openImage(img)}
                >
                  <img src={img} alt={`Research Stat ${idx + 1}`} className="w-full h-auto rounded-xl shadow-inner group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-500/80 p-1.5 rounded-lg">
                    <Maximize2 size={16} className="text-white" />
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row: 2-column row of additional research graphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {IMPACT_IMAGES.slice(4, 6).map((img, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl overflow-hidden hover:bg-white/20 transition-all cursor-pointer group relative"
                  onClick={() => openImage(img)}
                >
                  <img src={img} alt={`Research Graph ${idx + 1}`} className="w-full h-auto rounded-xl shadow-lg group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-500/80 p-2 rounded-lg">
                    <Maximize2 size={20} className="text-white" />
                  </div>
                </div>
              ))}
            </div>

            {/* Third Row: Featured Video Section */}
            <div className="mt-20 max-w-5xl mx-auto">
               <div className="bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden group">
                  <div className="p-8 md:p-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white serif mb-2">Featured Research Insight</h3>
                      <p className="text-indigo-200 text-sm italic font-light">Documenting the global scale of clinical psychological research and outcomes.</p>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-[0.2em]">
                      <PlayCircle size={20} />
                      Video Presentation
                    </div>
                  </div>
                  <div className="aspect-video w-full bg-slate-950 relative">
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                      poster="https://static.wixstatic.com/media/bb7d0d_393e1d764824412e9d1fe6f8fb366b8c~mv2.jpg/v1/fill/w_1280,h_720,al_c,q_85,enc_avif,quality_auto/poster.jpg"
                    >
                      <source src="https://video.wixstatic.com/video/bb7d0d_e56e0e5a87e5436691456c6c726c0683/1080p/mp4/file.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inaugural Lecture Section */}
      <section className="py-24 bg-slate-950/60 backdrop-blur-xl text-white relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 text-center lg:text-left">
            <span className="text-indigo-400 font-semibold tracking-widest uppercase text-xs mb-3 block">Milestone Events</span>
            <h2 className="text-4xl md:text-5xl font-bold serif drop-shadow-md uppercase">INAUGURAL LECTURE</h2>
          </div>

          {/* 3-column image grid of lecture photos (first 6 images) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {LECTURE_IMAGES.slice(0, 6).map((img, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl aspect-[3/2] cursor-pointer"
                onClick={() => openImage(img)}
              >
                <img src={img} alt={`Lecture Photo ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="text-white" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Large featured image (7th image) + Download button */}
          <div className="mb-12">
            <div className="relative rounded-[2.5rem] overflow-hidden group border border-white/10 shadow-2xl">
              <img 
                src={LECTURE_IMAGES[6]} 
                alt="Main Lecture Featured" 
                className="w-full h-[500px] md:h-[650px] object-cover transition-transform duration-[3s] group-hover:scale-105 cursor-pointer" 
                onClick={() => openImage(LECTURE_IMAGES[6])}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-8 md:p-16 pointer-events-none">
                <div className="max-w-3xl pointer-events-auto">
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 serif drop-shadow-lg">Psychology in a Globalized Context</h3>
                  <p className="text-white/80 mb-10 text-lg leading-relaxed hidden md:block drop-shadow-md max-w-xl">
                    A defining academic milestone exploring human behavior through the lens of cultural psychology and clinical research in Southern Africa.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={LECTURE_PDF_LINK} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-slate-900 hover:bg-indigo-600 hover:text-white px-10 py-5 rounded-full font-bold flex items-center gap-4 transition-all shadow-2xl group w-full sm:w-auto justify-center"
                    >
                      <Download size={24} className="group-hover:animate-bounce" />
                      Download Inaugural Lecture
                    </a>
                    <button 
                      onClick={() => openImage(LECTURE_IMAGES[6])}
                      className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold flex items-center gap-4 transition-all shadow-2xl justify-center sm:hidden"
                    >
                      <Maximize2 size={24} />
                      View Full Image
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
