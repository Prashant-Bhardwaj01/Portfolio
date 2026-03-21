// src/components/sections/Experience.jsx
import { motion } from 'framer-motion';
import experience from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-heading">Work <span className="gradient-text">Experience</span></h2>
          <p className="section-subheading">Internships and professional roles that shaped my career.</p>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent to-primary-500 opacity-30" />

            <div className="space-y-10">
              {experience.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex ${idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-start gap-8`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-light-bg dark:border-dark-bg shadow-md shadow-primary-500/30 z-10" />

                  {/* Date (desktop) */}
                  <div className={`hidden sm:flex flex-1 ${idx % 2 === 0 ? 'justify-end pr-10' : 'justify-start pl-10'}`}>
                    <div className="text-sm font-semibold text-primary-500 bg-primary-50 dark:bg-primary-900/20 px-4 py-2 rounded-full mt-1 whitespace-nowrap">
                      {exp.duration}
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`ml-14 sm:ml-0 flex-1 ${idx % 2 === 0 ? 'sm:pl-10' : 'sm:pr-10'}`}>
                    <div className="card hover:border-primary-400 dark:hover:border-primary-600 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <div>
                          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base">{exp.role}</h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">{exp.company}</p>
                        </div>
                        <span className="text-xs text-slate-400">{exp.location}</span>
                      </div>

                      {/* Mobile date */}
                      <p className="sm:hidden text-xs font-semibold text-primary-500 mb-3">{exp.duration}</p>

                      <ul className="mt-3 space-y-1.5">
                        {exp.responsibilities.map((r, i) => (
                          <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                            <span className="text-primary-500 flex-shrink-0 mt-0.5">▸</span> {r}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {exp.tech.map(t => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
