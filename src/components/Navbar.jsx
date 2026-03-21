// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import personal from '../data/personal';

const navLinks = [
  { to: 'hero',        label: 'Home' },
  { to: 'about',       label: 'About' },
  { to: 'skills',      label: 'Skills' },
  { to: 'projects',    label: 'Projects' },
  { to: 'experience',  label: 'Experience' },
  { to: 'certifications', label: 'Certs' },
  { to: 'competitive', label: 'CP' },
  { to: 'github-stats', label: 'GitHub' },
  { to: 'contact',     label: 'Contact' },
];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-md shadow-lg border-b border-light-border dark:border-dark-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="font-bold text-xl gradient-text font-mono cursor-default select-none">
            &lt;{personal.name.split(' ')[0]} /&gt;
          </span>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                spy smooth duration={600}
                offset={-64}
                activeClass="text-primary-500 font-semibold"
                className="px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 cursor-pointer transition-all"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="p-2 rounded-xl hover:bg-light-card dark:hover:bg-dark-card transition-all text-slate-600 dark:text-slate-300 hover:text-primary-500"
              aria-label="Toggle theme"
            >
              {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-light-card dark:hover:bg-dark-card transition-all"
              onClick={() => setMenuOpen(m => !m)}
              aria-label="Menu"
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-md border-b border-light-border dark:border-dark-border">
          <div className="px-4 py-3 grid grid-cols-3 gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                spy smooth duration={600}
                offset={-64}
                onClick={() => setMenuOpen(false)}
                className="text-center px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 cursor-pointer transition-all"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
