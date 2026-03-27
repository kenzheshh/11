import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  keepMounted?: boolean;
}

export default function Modal({ isOpen, onClose, children, keepMounted = false }: ModalProps) {
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
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-[101]"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-white z-10 bg-black/20 rounded-full p-1.5 backdrop-blur-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
                {!keepMounted && children}
                {keepMounted && <div style={{ display: 'block' }}>{children}</div>}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Hidden container for keepMounted children when modal is closed */}
      {keepMounted && !isOpen && (
        <div style={{ display: 'none' }}>
          {children}
        </div>
      )}
    </>
  );
}
