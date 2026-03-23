// src/components/sections/Certifications.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiAward, FiEye } from 'react-icons/fi';
import certifications from '../../data/certifications';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(certifications[0]);

  return (
    <section id="certifications" className="bg-light-card dark:bg-dark-surface">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-heading">Certifications & <span className="gradient-text">Courses</span></h2>
          <p className="section-subheading">Continuous learning through structured courses and certifications.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, i) => {
              const getUrl = (path) => path.startsWith('http') ? path : `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
              const isSelected = selectedCert.id === cert.id;
              
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedCert(cert)}
                  className={`relative overflow-hidden rounded-2xl border cursor-pointer transition-all duration-300 group h-64 flex flex-col ${
                    isSelected 
                      ? 'border-primary-500 ring-2 ring-primary-500/20 shadow-xl shadow-primary-500/10' 
                      : 'border-light-border dark:border-dark-border hover:shadow-xl hover:shadow-primary-500/5'
                  }`}
                >
                  {/* Background Image Container */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={getUrl(cert.image)} 
                      alt={cert.course} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 z-10 transition-colors duration-300 ${
                      isSelected ? 'bg-black/40' : 'bg-black/60 group-hover:bg-black/50'
                    }`} />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-20 p-6 flex flex-col h-full text-white">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className={`w-12 h-12 rounded-xl backdrop-blur-md border flex items-center justify-center text-2xl flex-shrink-0 transition-all duration-300 ${
                        isSelected 
                          ? 'bg-primary-500 border-primary-400' 
                          : 'bg-white/10 border-white/20 group-hover:bg-primary-500/20 group-hover:border-primary-500/50'
                      }`}>
                        {cert.icon}
                      </div>
                      {isSelected && (
                        <span className="bg-primary-500 text-white p-1 rounded-full shadow-lg animate-pulse-slow">
                          <FiEye size={12} />
                        </span>
                      )}
                    </div>

                    <div className="mt-auto">
                      <p className="text-primary-400 text-xs font-bold uppercase tracking-widest mb-1">{cert.platform}</p>
                      <h3 className="font-extrabold text-lg leading-tight group-hover:text-primary-400 transition-colors duration-300">
                        {cert.course}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Certificate Preview Section (Like CV) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCert.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="card p-0 max-w-4xl mx-auto overflow-hidden border-2 border-primary-500/30"
            >
              <div className="bg-slate-800 dark:bg-black/40 p-4 border-b border-white/10 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedCert.icon}</span>
                  <div>
                    <h4 className="text-white font-bold text-sm leading-tight">{selectedCert.course}</h4>
                    <p className="text-slate-400 text-xs">{selectedCert.platform} • {selectedCert.year}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a 
                    href={selectedCert.link.startsWith('http') ? selectedCert.link : `${import.meta.env.BASE_URL}${selectedCert.link.replace(/^\//, '')}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-primary py-2 px-4 text-xs flex items-center gap-2"
                  >
                    <FiExternalLink /> Open Original
                  </a>
                </div>
              </div>

              <div className="relative bg-slate-900 aspect-[16/10] sm:aspect-video overflow-hidden">
                {selectedCert.link.toLowerCase().endsWith('.pdf') ? (
                  <iframe
                    src={`${import.meta.env.BASE_URL}${selectedCert.link.replace(/^\//, '')}#toolbar=0&navpanes=0&scrollbar=0`}
                    title="Certificate Preview"
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <img
                      src={selectedCert.image.startsWith('http') ? selectedCert.image : `${import.meta.env.BASE_URL}${selectedCert.image.replace(/^\//, '')}`}
                      alt={selectedCert.course}
                      className="max-w-full max-h-full object-contain shadow-2xl rounded"
                    />
                  </div>
                )}
                
                {/* Watermark-like tag */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white text-[10px] font-bold flex items-center gap-2">
                  <FiAward className="text-primary-500" /> Professional Certification
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <p className="text-center text-sm text-slate-400 mt-6 italic">
            Select a certificate card above to view the preview.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
