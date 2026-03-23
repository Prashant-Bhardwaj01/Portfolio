// src/components/sections/Projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCalendar } from 'react-icons/fi';
import projects from '../../data/projects.json';

const categories = ['All', 'Machine Learning', 'Web Development', 'DevOps'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="bg-light-card dark:bg-dark-surface">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-heading">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subheading">Things I've built — from ML models to full-stack apps.</p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  active === cat
                    ? 'bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-500/30'
                    : 'border-light-border dark:border-dark-border text-slate-600 dark:text-slate-300 hover:border-primary-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map(p => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="card p-0 overflow-hidden flex flex-col group"
                >
                  {/* Image */}
                  <div className="h-40 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base leading-snug">{p.title}</h3>
                      <span className="tag whitespace-nowrap text-xs flex-shrink-0">{p.category}</span>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 line-clamp-2">{p.description}</p>

                    {/* Duration */}
                    <div className="flex items-center gap-1 text-xs text-slate-400 mb-3">
                      <FiCalendar size={12} /> {p.duration}
                    </div>

                    {/* Key Features */}
                    <ul className="mb-4 space-y-1">
                      {p.features.slice(0, 3).map(f => (
                        <li key={f} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <span className="text-primary-500">▸</span> {f}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {p.tech.slice(0, 4).map(t => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300">{t}</span>
                      ))}
                      {p.tech.length > 4 && <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-dark-surface text-slate-500">+{p.tech.length - 4}</span>}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto pt-3 border-t border-light-border dark:border-dark-border">
                      <a href={p.github} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">
                        <FiGithub size={15} /> Code
                      </a>
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noreferrer"
                          className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">
                          <FiExternalLink size={15} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
