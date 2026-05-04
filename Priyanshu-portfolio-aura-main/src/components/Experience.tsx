
import React, { useEffect, useState, useRef } from 'react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Experience = () => {
  const { theme } = useTheme();
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrolled = Math.max(0, -rect.top);
        const progress = Math.min(scrolled / (rect.height * 0.8), 1);
        setScrollProgress(progress);
      }
    };
    document.addEventListener('scroll', handleScroll);
    const experienceItems = document.querySelectorAll('[data-index]');
    experienceItems.forEach((item) => observer.observe(item));
    return () => { document.removeEventListener('scroll', handleScroll); observer.disconnect(); };
  }, []);

  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "MS Being Platinum World Pvt. Ltd.",
      period: "2025",
      location: "India",
      description: "Worked on data analysis and preprocessing using real-world datasets. Performed data cleaning and generated insights using analytical techniques. Assisted in improving data-driven decision-making processes.",
      highlights: [
        "Worked on data analysis and preprocessing using real-world datasets",
        "Performed data cleaning and generated insights using analytical techniques",
        "Assisted in improving data-driven decision-making processes"
      ],
      type: "past"
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#050508] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-cyan-50/20 dark:from-[#050508] dark:to-[#050508]" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-300/10 to-blue-300/10 dark:from-cyan-500/8 dark:to-blue-500/8 rounded-full blur-3xl animate-float-3d" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-300/10 to-teal-300/10 dark:from-blue-500/8 dark:to-teal-500/8 rounded-full blur-3xl animate-float-3d-delayed" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="hidden sm:block absolute top-40 left-40 animate-sparkle" style={{ animationDelay: '2s' }}><Sparkles className="text-cyan-400 opacity-40" size={18} /></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
            <span className="text-gray-800 dark:text-white">Professional</span>
            <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent"> Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} data-index={index} className={`transition-all duration-700 ${visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="group bg-white/95 dark:bg-gray-800/60 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-cyan-200/30 dark:border-cyan-700/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 relative z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2.5 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl"><Briefcase className="text-cyan-600 dark:text-cyan-400" size={22} /></div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">Completed</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-3">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mt-1">{exp.company}</h4>
                  </div>
                  <div className="mt-4 sm:mt-0 flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2"><Calendar size={14} /><span>{exp.period}</span></div>
                    <div className="flex items-center gap-2"><MapPin size={14} /><span>{exp.location}</span></div>
                  </div>
                </div>
                <div className="relative z-10 space-y-3">
                  {exp.highlights.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                  {['Data Analysis', 'Data Cleaning', 'Analytical Techniques', 'Decision-Making'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-100/80 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-medium border border-cyan-200/50 dark:border-cyan-700/30">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
