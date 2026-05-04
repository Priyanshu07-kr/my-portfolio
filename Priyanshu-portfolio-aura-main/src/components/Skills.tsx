
import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Palette, Settings, Users, Layout, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Skills = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            skillCategories.forEach((_, catIndex) => {
              skillCategories[catIndex].skills.forEach((_, skillIndex) => {
                setTimeout(() => {
                  setAnimatedBars(prev => new Set([...prev, `${catIndex}-${skillIndex}`]));
                }, (catIndex * 200) + (skillIndex * 100));
              });
            });
          }, 300);
        }
      },
      { threshold: 0.2 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    { title: "Technical", icon: Code, color: "from-cyan-500 to-blue-600",
      skills: [{ name: "Python", level: 75 },{ name: "JavaScript", level: 70 },{ name: "SQL", level: 65 },{ name: "HTML/CSS", level: 85 }] },
    { title: "Design / UX", icon: Palette, color: "from-blue-500 to-cyan-600",
      skills: [{ name: "Wireframing", level: 80 },{ name: "Prototyping (Figma)", level: 85 },{ name: "UX Writing", level: 70 }] },
    { title: "Frameworks & Tools", icon: Settings, color: "from-teal-500 to-cyan-600",
      skills: [{ name: "Node.js", level: 65 },{ name: "GitHub", level: 70 },{ name: "Socket.io", level: 60 }] },
    { title: "Research & Strategy", icon: Layout, color: "from-cyan-600 to-blue-600",
      skills: [{ name: "User Research", level: 75 },{ name: "Design Thinking", level: 75 },{ name: "Usability Testing", level: 70 }] },
    { title: "Database & Backend", icon: Database, color: "from-blue-500 to-teal-600",
      skills: [{ name: "Database Management", level: 65 },{ name: "Flask", level: 55 },{ name: "C++", level: 60 }] },
    { title: "Soft Skills", icon: Users, color: "from-cyan-500 to-blue-600",
      skills: [{ name: "Communication", level: 85 },{ name: "Problem Solving", level: 80 },{ name: "Teamwork", level: 85 },{ name: "Adaptability", level: 80 }] }
  ];

  const certifications = [
    { title: "Google Data Analytics Certification", provider: "Google — Aug 2025", icon: "🎓" }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#050508] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-cyan-50/20 dark:from-[#050508] dark:to-[#050508]" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-300/10 to-blue-300/10 dark:from-cyan-500/8 dark:to-blue-500/8 rounded-full blur-3xl animate-float-3d" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-300/10 to-teal-300/10 dark:from-blue-500/8 dark:to-teal-500/8 rounded-full blur-3xl animate-float-3d-delayed" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-32 left-32 animate-sparkle hidden sm:block"><Sparkles className="text-cyan-400 opacity-40" size={20} /></div>
      <div className="absolute bottom-32 right-32 animate-sparkle-delayed hidden sm:block"><Sparkles className="text-blue-400 opacity-40" size={22} /></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
            <span className="text-gray-800 dark:text-white">Skills &</span>
            <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent"> Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className={`group bg-white/95 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 overflow-hidden border border-cyan-200/30 dark:border-cyan-700/30 hover:border-cyan-400/50 relative ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${index * 150}ms` }} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)}>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
              <div className={`bg-gradient-to-br ${category.color} p-5 text-white relative overflow-hidden`}>
                <div className="flex items-center justify-between relative z-10">
                  <h3 className="text-lg font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>{category.title}</h3>
                  <category.icon size={22} className="opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-1000" />
              </div>
              <div className="p-5 relative z-10">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">{skill.name}</span>
                        <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-xs bg-cyan-100/50 dark:bg-cyan-900/30 px-2 py-0.5 rounded-full">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <div className={`bg-gradient-to-r ${category.color} h-full rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ width: animatedBars.has(`${index}-${skillIndex}`) ? `${skill.level}%` : '0%' }}>
                          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-white rounded-full opacity-80 animate-ping" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className={`text-2xl sm:text-3xl font-bold text-center mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ fontFamily: 'Outfit, Inter, sans-serif', animationDelay: '800ms' }}>
            <span className="text-gray-800 dark:text-white">Certifications</span>
          </h3>
          <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className={`group bg-gradient-to-br from-cyan-50/80 to-white/95 dark:from-gray-800/60 dark:to-gray-700/40 backdrop-blur-sm p-6 rounded-xl border border-cyan-200/50 dark:border-cyan-700/30 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/15 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${900 + index * 100}ms` }}>
                <div className="absolute inset-0 rounded-xl"><div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-1000 opacity-50" /></div>
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10">{cert.icon}</div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 text-sm leading-tight relative z-10 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors duration-300">{cert.title}</h4>
                <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-xs relative z-10 bg-cyan-100/50 dark:bg-cyan-900/30 px-2 py-1 rounded-full inline-block">{cert.provider}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`.animate-fadeInUp{animation:fadeInUp .8s ease-out forwards}@keyframes fadeInUp{0%{opacity:0;transform:translateY(30px)}100%{opacity:1;transform:translateY(0)}}`}</style>
    </section>
  );
};

export default Skills;
