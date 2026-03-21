// src/components/sections/Certifications.jsx
import { motion } from 'framer-motion';
import { FiExternalLink, FiAward } from 'react-icons/fi';
import certifications from '../../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="bg-light-card dark:bg-dark-surface">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-heading">Certifications & <span className="gradient-text">Courses</span></h2>
          <p className="section-subheading">Continuous learning through structured courses and certifications.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="card flex flex-col"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-xl flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200 leading-snug">{cert.course}</h3>
                    <p className="text-xs text-primary-500 font-medium mt-0.5">{cert.platform}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
                  {cert.skills.map(s => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border text-slate-600 dark:text-slate-400">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-light-border dark:border-dark-border">
                  <span className="text-xs text-slate-400 flex items-center gap-1"><FiAward size={12}/> {cert.year}</span>
                  <a href={cert.link} target="_blank" rel="noreferrer"
                    className="text-xs text-primary-500 hover:text-primary-600 flex items-center gap-1 font-medium transition-colors">
                    Verify <FiExternalLink size={12}/>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
