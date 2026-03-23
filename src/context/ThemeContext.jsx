// src/context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme-choice');
    if (saved) return saved;
    const isDark = localStorage.getItem('theme') === 'dark' || 
                  (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    return isDark ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove existing theme classes/attributes
    root.removeAttribute('data-theme');
    root.classList.remove('dark');

    // Set new theme
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme-choice', theme);

    // Compat with Tailwind dark: class
    // Treat everything except 'light' as a dark theme for now
    if (theme !== 'light') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const themes = [
    { id: 'light', name: 'Light', colors: ['#6366f1', '#f8fafc'] },
    { id: 'dark', name: 'Dark', colors: ['#6366f1', '#0f0f1a'] },
    { id: 'midnight', name: 'Midnight', colors: ['#a855f7', '#0a0a0f'] },
    { id: 'emerald', name: 'Emerald', colors: ['#10b981', '#06120e'] },
    { id: 'sunset', name: 'Sunset', colors: ['#f97316', '#1a0f0f'] },
    { id: 'lavender', name: 'Lavender', colors: ['#8b5cf6', '#12101a'] },
  ];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
