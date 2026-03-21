// src/components/sections/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import personal from '../../data/personal';

const INIT = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INIT);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // EmailJS integration placeholder — wire up your service/template/public keys here
    try {
      await new Promise(r => setTimeout(r, 1500)); // simulate send
      setStatus('success');
      setForm(INIT);
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const contactInfo = [
    { icon: FiMail,   label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
    { icon: FiPhone,  label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone}` },
    { icon: FiMapPin, label: 'Location', value: personal.location, href: null },
    { icon: FiGithub, label: 'GitHub',   value: 'github.com/yourusername', href: personal.github },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/yourusername', href: personal.linkedin },
  ];

  return (
    <section id="contact" className="bg-light-card dark:bg-dark-surface">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-heading">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subheading">Have an opportunity or just want to say hi? My inbox is always open.</p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 card py-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary-500" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-500 transition-colors">{value}</a>
                    ) : (
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="card space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-500 mb-1.5 block">Name</label>
                    <input
                      name="name" value={form.name} onChange={handleChange} required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-500 mb-1.5 block">Email</label>
                    <input
                      name="email" value={form.email} type="email" onChange={handleChange} required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-500 mb-1.5 block">Subject</label>
                  <input
                    name="subject" value={form.subject} onChange={handleChange} required
                    placeholder="Internship opportunity / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-500 mb-1.5 block">Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required
                    rows={5} placeholder="Hi Pradsanu, I'd love to connect about..."
                    className="w-full px-4 py-3 rounded-xl bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending...</span>
                  ) : status === 'success' ? (
                    <span className="flex items-center gap-2 text-green-300"><FiCheck /> Message Sent!</span>
                  ) : status === 'error' ? (
                    <span className="flex items-center gap-2 text-red-300"><FiAlertCircle /> Failed, try again</span>
                  ) : (
                    <span className="flex items-center gap-2"><FiSend /> Send Message</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
