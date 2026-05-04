
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Sparkles, Globe, Layout, Utensils } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState(new Set());
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          projects.forEach((_, index) => {
            setTimeout(() => { setAnimatedCards(prev => new Set([...prev, index])); }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (projectsRef.current) observer.observe(projectsRef.current);
    return () => observer.disconnect();
  }, );

  const projects = [
    {
      title: "Web Development Projects",
      description: "Built applications including a calculator, portfolio website, and weather app using C++, HTML, and Flask. Demonstrated skills in frontend development and backend integration.",
      tech: ["C++", "HTML", "Flask", "CSS", "JavaScript"],
      metrics: { type: "Multi-App", tools: "3+", date: "Sep 2025" },
      icon: Globe,
      color: "from-cyan-500 to-blue-600",
      featured: true
    },
    {
      title: "Movies and Books Library",
      description: "Developed a responsive website using HTML and CSS. Designed interactive card-based UI with media and links. Implemented mobile-friendly layout using media queries for seamless experience across devices.",
      tech: ["HTML", "CSS", "Responsive Design", "Media Queries"],
      metrics: { type: "Website", design: "Card UI", date: "Nov 2025" },
      icon: Layout,
      color: "from-blue-500 to-teal-600",
      featured: false
    },
    {
      title: "Restaurant Website",
      description: "Built a structured website with sections like About, Menu, and Desserts. Implemented table-based menu with images and pricing. Added navigation using anchor links for improved user experience.",
      tech: ["HTML", "CSS", "UI Design", "Navigation"],
      metrics: { type: "Website", sections: "4+", date: "Jan 2026" },
      icon: Utensils,
      color: "from-teal-500 to-cyan-600",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-white dark:bg-[#050508]">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-cyan-50/20 dark:from-[#050508] dark:to-[#050508]" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-300/10 to-blue-300/10 dark:from-cyan-500/8 dark:to-blue-500/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-300/10 to-teal-300/10 dark:from-blue-500/8 dark:to-teal-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-40 left-20 animate-sparkle hidden sm:block"><Sparkles className="text-cyan-400 w-5 h-5 opacity-40" /></div>
      <div className="absolute bottom-40 right-24 animate-sparkle-delayed hidden sm:block"><Sparkles className="text-blue-400 w-4 h-4 opacity-40" /></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
            <span className="text-gray-800 dark:text-white">Featured</span>
            <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`group relative bg-white/95 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-cyan-200/30 dark:border-cyan-700/20 hover:border-cyan-400/50 dark:hover:border-cyan-500/40 flex flex-col
                ${animatedCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                ${project.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-cyan-400/20' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}>
              <div className={`h-32 sm:h-36 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 right-4"><project.icon className="text-white/80 drop-shadow-lg" size={28} /></div>
                <div className="absolute bottom-4 left-4 right-16"><h3 className="text-white font-bold text-lg leading-tight drop-shadow-lg">{project.title}</h3></div>
                {project.featured && (<div className="absolute top-4 left-4"><span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/30">⭐ Featured</span></div>)}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-1000" />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-base font-bold text-cyan-600 dark:text-cyan-400">{value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2.5 py-1 bg-cyan-100/80 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-medium border border-cyan-200/50 dark:border-cyan-700/30">{tech}</span>
                  ))}
                </div>
                <div className="mt-auto">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] text-sm">
                    <ExternalLink size={16} /> View Project
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
