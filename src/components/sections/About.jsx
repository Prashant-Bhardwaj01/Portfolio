// src/components/sections/About.jsx
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const interests = ['Data Structures & Algorithms', 'Data Science', 'Machine Learning', 'DevOps & Cloud', 'Competitive Programming'];
const strengths = [
  { icon: '🎯', label: 'Problem Solving' },
  { icon: '🤝', label: 'Team Collaboration' },
  { icon: '📖', label: 'Continuous Learning' },
  { icon: '⚡', label: 'Fast Adaption' },
  { icon: '💡', label: 'Creative Thinking' },
  { icon: '🗣️', label: 'Communication' },
];

export default function About() {
  return (
    <section id="about" className="bg-light-card dark:bg-dark-surface">
      <div className="section-container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={fadeUp} className="section-heading">
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subheading">
            A little bit about my background, goals, and what drives me.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div variants={fadeUp} className="card">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">🎓 Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <p className="font-semibold text-primary-600 dark:text-primary-400">B.Tech — Computer Science & Engineering</p>
                  <p className="text-slate-600 dark:text-slate-400">Lovely Professional University, Phagwara</p>
                  <p className="text-sm text-slate-500">2023 – 2027 &nbsp;|&nbsp; CGPA: 8.59 / 10</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p className="font-semibold">XII — Science (Intermediate)</p>
                  <p className="text-slate-600 dark:text-slate-400">Shri Mahavir Jain Model Sen. Sec. School, Phagwara</p>
                  <p className="text-sm text-slate-500">2022 – 2023 &nbsp;|&nbsp; 94.6%</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p className="font-semibold">X — (Matriculation)</p>
                  <p className="text-slate-600 dark:text-slate-400">S. D. Public School, Phagwara</p>
                  <p className="text-sm text-slate-500">2021 – 2022 &nbsp;|&nbsp; 100%</p>
                </div>
              </div>
            </motion.div>

            {/* Career Objective */}
            <motion.div variants={fadeUp} className="card">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">🎯 Career Objective</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Seeking a challenging role in Data Science or Machine Learning where I can apply my skills in data analysis, statistical modeling, and predictive machine learning to build data-driven solutions that create real-world impact. I am passionate about solving complex problems using data, working in fast-paced environments, and continuously learning while collaborating and mentoring peers.
              </p>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                Long-term, I aim to contribute to large-scale distributed systems and AI research that
                pushes the boundary of what software can do.
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div variants={fadeUp} className="card">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">🌱 Areas of Interest</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map(i => (
                  <span key={i} className="tag">{i}</span>
                ))}
              </div>
            </motion.div>

            {/* Strengths */}
            <motion.div variants={fadeUp} className="card">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">💪 Strengths & Soft Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {strengths.map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-light-card dark:bg-dark-surface rounded-xl p-3 text-sm font-medium">
                    <span className="text-xl">{icon}</span>
                    <span className="text-slate-700 dark:text-slate-300">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
