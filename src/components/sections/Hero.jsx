// src/components/sections/Hero.jsx
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from 'react-icons/fi';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import personal from '../../data/personal';

const socialLinks = [
  { href: personal.github,     Icon: FiGithub,   label: 'GitHub',     color: 'hover:text-white hover:bg-slate-800' },
  { href: personal.linkedin,   Icon: FiLinkedin, label: 'LinkedIn',   color: 'hover:text-white hover:bg-blue-600' },
  { href: personal.leetcode,   Icon: SiLeetcode, label: 'LeetCode',   color: 'hover:text-white hover:bg-orange-500' },
  { href: personal.hackerrank, Icon: SiHackerrank, label: 'HackerRank', color: 'hover:text-white hover:bg-green-600' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="section-container w-full">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
          variants={container} initial="hidden" animate="show"
        >
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p variants={item} className="text-primary-500 font-mono text-sm mb-3 tracking-widest uppercase">
              👋 Hello, I'm
            </motion.p>
            <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
              <span className="gradient-text">{personal.name}</span>
            </motion.h1>
            <motion.div variants={item} className="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-400 mb-6 h-9">
              <TypeAnimation
                sequence={[
                  'Data Science Enthusiast',      2000,
                  'Machine Learning Engineer',           2000,
                  'Aspiring Data Analyst',     2000,
                  'Software Developer', 2000,
                ]}
                wrapper="span"
                repeat={Infinity}
                cursor
                className="text-primary-500"
              />
            </motion.div>
            <motion.p variants={item} className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed text-lg">
              {personal.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Link to="projects" smooth duration={600} offset={-64}>
                <button className="btn-primary flex items-center gap-2">
                  <FiArrowDown /> View Projects
                </button>
              </Link>
              <a href={personal.resume} download>
                <button className="btn-outline flex items-center gap-2">
                  <FiDownload /> Download CV
                </button>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={item} className="flex gap-3 justify-center lg:justify-start">
              {socialLinks.map(({ href, Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`p-3 rounded-xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card text-slate-600 dark:text-slate-300 transition-all duration-200 hover:scale-110 ${color}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div variants={item} className="flex-shrink-0">
            <div className="relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-primary-500 to-accent p-1 glow animate-float">
                <img
                  src="/Personal_Img.jpeg"
                  alt={personal.name}
                  className="w-full h-full rounded-full object-cover bg-light-card dark:bg-dark-card"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-3 -left-6 bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl px-3 py-2 shadow-lg text-sm font-semibold flex items-center gap-2">
                <span className="text-green-500">●</span> Available for Internship
              </div>
              <div className="absolute -top-4 -right-4 bg-primary-500 text-white text-xs font-bold rounded-xl px-3 py-2 shadow-lg">
                B.Tech CSE 🎓
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-xs"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        >
          <span>Scroll down</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <FiArrowDown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
