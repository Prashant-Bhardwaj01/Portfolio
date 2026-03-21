// src/components/sections/CompetitiveProgramming.jsx
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import competitions from '../../data/competitions';

export default function CompetitiveProgramming() {
  return (
    <section id="competitive">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-heading">Competitive <span className="gradient-text">Programming</span></h2>
          <p className="section-subheading">Coding platform stats and hackathon achievements.</p>

          {/* Platform Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-6 mb-12">
            {competitions.platforms.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="card text-center group cursor-pointer hover:border-primary-400 dark:hover:border-primary-600"
              >
                <div className="text-3xl mb-2">{p.icon}</div>
                <h3 className="font-bold text-sm mb-1">{p.name}</h3>
                <div className="text-2xl font-extrabold gradient-text mb-1">{p.rating}</div>
                <p className="text-xs text-slate-500 mb-2">{p.rank}</p>
                <div className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: p.color + '20', color: p.color }}>
                  {p.badge}
                </div>
                <p className="text-xs text-slate-400 mt-2">{p.solved} solved</p>
              </motion.a>
            ))}
          </div>

          {/* Hackathons */}
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FiAward className="text-yellow-500" /> Hackathon Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {competitions.hackathons.map((h, i) => (
              <motion.div
                key={h.event}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card flex gap-4 items-start hover:border-primary-400 dark:hover:border-primary-600 transition-colors"
              >
                <div className="text-2xl flex-shrink-0">{h.result.split(' ')[0]}</div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200">{h.event}</h4>
                  <p className="text-xs text-primary-500 font-medium my-1">{h.result.split(' ').slice(1).join(' ')}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{h.project}</p>
                  <p className="text-xs text-slate-400 mt-1">Team: {h.team}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
