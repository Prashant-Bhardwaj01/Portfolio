// src/components/Footer.jsx
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiEye } from 'react-icons/fi';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import personal from '../data/personal';

const socials = [
  { href: personal.github,     Icon: FiGithub,     label: 'GitHub' },
  { href: personal.linkedin,   Icon: FiLinkedin,   label: 'LinkedIn' },
  { href: personal.leetcode,   Icon: SiLeetcode,   label: 'LeetCode' },
  { href: personal.hackerrank, Icon: SiHackerrank, label: 'HackerRank' },
  { href: `mailto:${personal.email}`, Icon: FiMail, label: 'Email' },
];

export default function Footer() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const count = parseInt(localStorage.getItem('portfolio_visits') || '0') + 1;
    localStorage.setItem('portfolio_visits', String(count));
    setVisits(count);
  }, []);

  return (
    <footer className="bg-dark-surface border-t border-dark-border text-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold gradient-text font-mono">&lt;{personal.name.split(' ')[0]} /&gt;</p>
            <p className="text-sm text-slate-400 mt-1">B.Tech CSE · DS · AI & ML</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-dark-card flex items-center justify-center text-slate-400 hover:text-primary-400 hover:bg-primary-900/30 transition-all hover:scale-110"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <Link to="hero" smooth duration={800}>
            <button className="w-10 h-10 rounded-xl bg-primary-600 hover:bg-primary-500 text-white flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary-500/30" aria-label="Back to top">
              <FiArrowUp size={18} />
            </button>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personal.name} · Built with React & Tailwind CSS ❤️</p>
          <p className="flex items-center gap-1.5">
            <FiEye size={12} className="text-primary-400" />
            <span className="text-primary-400 font-semibold">{visits.toLocaleString()}</span> visitor{visits !== 1 ? 's' : ''}
          </p>
        </div>
      </div>
    </footer>
  );
}
