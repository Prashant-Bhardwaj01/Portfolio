// src/components/sections/GitHubStats.jsx
import { motion } from 'framer-motion';
import personal from '../../data/personal';
import { useTheme } from '../../context/ThemeContext';

export default function GitHubStats() {
  const { dark } = useTheme();
  const u = personal.githubUsername;
  const theme = dark ? 'dark' : 'default';

  return (
    <section id="github-stats">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-heading">GitHub <span className="gradient-text">Statistics</span></h2>
          <p className="section-subheading">My open source activity and code contributions at a glance.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Stats Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="card p-4 flex items-center justify-center overflow-hidden"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=${theme}&hide_border=true&bg_color=transparent&count_private=true`}
                alt="GitHub Stats"
                className="max-w-full"
                loading="lazy"
              />
            </motion.div>

            {/* Most Used Languages */}
            <motion.div
              whileHover={{ y: -4 }}
              className="card p-4 flex items-center justify-center overflow-hidden"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=${theme}&hide_border=true&bg_color=transparent`}
                alt="Top Languages"
                className="max-w-full"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
