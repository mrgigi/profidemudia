
import React from 'react';
import { useLocation } from 'react-router-dom';

const GenericPage: React.FC = () => {
  const location = useLocation();
  const pageName = location.pathname.substring(1).replace('-', ' ').toUpperCase() || 'HOME';

  return (
    <div className="min-h-[60vh] py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold serif mb-8 text-white drop-shadow-lg">{pageName}</h2>
        <div className="bg-white/90 backdrop-blur-md p-12 rounded-3xl border border-white/20 shadow-2xl">
          <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mb-8">
            Content for <strong>{pageName}</strong> is currently being curated. This section will feature detailed reports, 
            academic publications, and professional updates relevant to this portfolio.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50/50 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="font-bold text-lg mb-4 text-indigo-900">Key Updates</h3>
               <p className="text-slate-500 text-sm italic">Coming Soon...</p>
            </div>
            <div className="p-8 bg-slate-50/50 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="font-bold text-lg mb-4 text-indigo-900">Related Documents</h3>
               <p className="text-slate-500 text-sm italic">Coming Soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;
