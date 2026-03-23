import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { HiColorSwatch } from 'react-icons/hi';

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-xl bg-surface border border-border hover:border-primary-500 transition-all flex items-center gap-2 group"
        aria-label="Switch Theme"
      >
        <HiColorSwatch className="text-xl text-primary-500 group-hover:scale-110 transition-transform" />
        <span className="hidden md:block text-sm font-medium capitalize">{theme}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-2 p-2 bg-surface border border-border rounded-2xl shadow-2xl z-50 min-w-[160px] grid grid-cols-1 gap-1"
          >
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-white/5 ${
                  theme === t.id ? 'bg-primary-500/10 border border-primary-500/20' : 'border border-transparent'
                }`}
              >
                <div className="flex gap-0.5">
                   {t.colors.map((c, i) => (
                     <div 
                       key={i} 
                       className="w-3 h-3 rounded-full border border-white/10" 
                       style={{ backgroundColor: c }}
                     />
                   ))}
                </div>
                <span className="text-sm font-medium">{t.name}</span>
                {theme === t.id && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-500" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
