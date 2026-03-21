// src/components/sections/Resume.jsx
import { motion } from 'framer-motion';
import { FiEye, FiDownload } from 'react-icons/fi';
import personal from '../../data/personal';

export default function Resume() {
  return (
    <section id="resume">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-heading">My <span className="gradient-text">CV</span></h2>
          <p className="section-subheading">View or download my latest CV.</p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center mb-10">
            <a href={personal.resume} target="_blank" rel="noreferrer">
              <button className="btn-outline flex items-center gap-2">
                <FiEye /> View CV
              </button>
            </a>
            <a href={personal.resume} download="Prashant_Bhardwaj_CV.pdf">
              <button className="btn-primary flex items-center gap-2">
                <FiDownload /> Download PDF
              </button>
            </a>
          </div>

          {/* PDF Preview */}
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="card p-2 max-w-3xl mx-auto overflow-hidden"
          >
            <div className="bg-light-card dark:bg-dark-surface rounded-xl overflow-hidden" style={{ height: '600px' }}>
              <iframe
                src={personal.resume}
                title="CV Preview"
                className="w-full h-full border-0"
              />
            </div>
          </motion.div>

          {/* Fallback message */}
          <p className="text-center text-sm text-slate-400 mt-4">
            If the preview doesn't load, use the buttons above to view or download.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
