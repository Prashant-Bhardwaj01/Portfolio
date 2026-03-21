// src/components/sections/Skills.jsx
import { motion } from 'framer-motion';
import skills from '../../data/skills';
import { 
  SiCplusplus, SiPython, SiJavascript, SiTypescript, 
  SiHtml5, SiMongodb, SiMysql, SiGit, SiGithub, 
  SiDocker, SiLinux, SiApachehadoop, 
  SiPostman, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow 
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa';
import { FiMonitor, FiDatabase, FiServer, FiLayers, FiCode, FiActivity, FiTag } from 'react-icons/fi';

const iconMap = {
  'C++': <SiCplusplus className="text-[#00599C] text-lg" />,
  'Java': <FaJava className="text-[#e32c2e] text-lg" />,
  'Python': <SiPython className="text-[#3776AB] text-lg" />,
  'JavaScript': <SiJavascript className="text-[#F7DF1E] bg-black rounded-sm text-lg" />,
  'TypeScript': <SiTypescript className="text-[#3178C6] bg-white rounded-sm text-lg" />,
  'HTML5': <SiHtml5 className="text-[#E34F26] text-lg" />,
  'CSS3': <FaCss3Alt className="text-[#1572B6] text-lg" />,
  'MongoDB': <SiMongodb className="text-[#47A248] text-lg" />,
  'MySQL': <SiMysql className="text-[#4479A1] text-lg" />,
  'Git': <SiGit className="text-[#F05032] text-lg" />,
  'GitHub': <SiGithub className="text-black dark:text-white text-lg" />,
  'Docker': <SiDocker className="text-[#2496ED] text-lg" />,
  'Linux': <SiLinux className="text-black dark:text-white text-lg" />,
  'Hadoop': <SiApachehadoop className="text-[#66CCFF] text-lg" />,
  'VS Code': <FiCode className="text-[#007ACC] text-lg" />,
  'Postman': <SiPostman className="text-[#FF6C37] text-lg" />,
  'NumPy': <SiNumpy className="text-[#013243] text-lg" />,
  'Pandas': <SiPandas className="text-white bg-[#150458] rounded-sm text-lg p-0.5" />,
  'Scikit-learn': <SiScikitlearn className="text-[#F7931E] text-lg" />,
  'TensorFlow': <SiTensorflow className="text-[#FF6F00] text-lg" />,
  'Matplotlib': <SiPython className="text-[#3776AB] text-lg" />,
  'DSA': <FiCode className="text-emerald-500 text-lg" />,
  'Operating Systems': <FiMonitor className="text-blue-500 text-lg" />,
  'DBMS': <FiDatabase className="text-purple-500 text-lg" />,
  'Computer Networks': <FiServer className="text-indigo-500 text-lg" />,
  'OOP': <FiLayers className="text-pink-500 text-lg" />,
  'System Design': <FiActivity className="text-teal-500 text-lg" />
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
          <motion.h2 variants={card} className="section-heading">
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.p variants={card} className="section-subheading">
            Technologies I work with across the full stack and beyond.
          </motion.p>

          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((s) => (
              <motion.div
                key={s.category}
                variants={card}
                whileHover={{ scale: 1.02, y: -4 }}
                className="card group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{s.icon}</span>
                  <h3 className="font-bold text-base text-slate-800 dark:text-slate-200">{s.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-lg bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border text-slate-700 dark:text-slate-300 hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all cursor-default"
                    >
                      {iconMap[item] || <FiTag className="text-slate-400 text-lg" />}
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
