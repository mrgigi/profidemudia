
import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, altText }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 md:p-10 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white hover:text-indigo-400 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md"
        onClick={onClose}
        aria-label="Close modal"
      >
        <X size={32} />
      </button>
      
      <div 
        className="relative max-w-full max-h-full flex items-center justify-center overflow-hidden rounded-xl shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={imageSrc} 
          alt={altText || 'Enlarged view'} 
          className="max-w-full max-h-[90vh] object-contain shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>
    </div>
  );
};

export default ImageModal;
