import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import AmoCrmForm from './AmoCrmForm';

interface AmoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AmoModal({ isOpen, onClose }: AmoModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      {/* Modal Content */}
      <div
        className={`relative w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-[101] transition-all duration-300 ${
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white z-10 bg-black/20 rounded-full p-1.5 backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
          {isOpen && <AmoCrmForm />}
        </div>
      </div>
    </div>
  );
}
