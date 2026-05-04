
import React, { useEffect, useState, useRef } from 'react';
import { Trophy, Award, Target, Palette, GraduationCap, Sparkles, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Achievements = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState(new Set());
  const achievementsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          achievements.forEach((_, index) => {
            setTimeout(() => { setAnimatedCards(prev => new Set([...prev, index])); }, index * 150);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (achievementsRef.current) observer.observe(achievementsRef.current);
    return () => observer.disconnect();
  }, []);

  const achievements = [
    { icon: Award, title: "Google Data Analytics Certification", description: "Professional certification in data analytics, covering data cleaning, analysis, and visualization techniques", metric: "Google", label: "Certified", color: "from-cyan-500 to-blue-600" },
    { icon: Palette, title: "UI/UX Design Specialization", description: "B.Tech CSE with specialization in UI/UX Design at K.R. Mangalam University, focused on wireframing, prototyping, and usability testing", metric: "UI/UX", label: "Specialization", color: "from-blue-500 to-cyan-600" },
    { icon: Target, title: "3+ Projects Delivered", description: "Built and delivered multiple web development projects including portfolio, restaurant website, and media library with responsive designs", metric: "3+", label: "Projects", color: "from-teal-500 to-cyan-600" },
    { icon: Trophy, title: "Data Analyst Internship", description: "Successfully completed internship at MS Being Platinum World Pvt. Ltd., working on data analysis and preprocessing with real-world datasets", metric: "Intern", label: "Experience", color: "from-cyan-600 to-blue-600" },
    { icon: GraduationCap, title: "B.Tech CSE (Ongoing)", description: "Pursuing Bachelor of Technology in Computer Science Engineering at K.R. Mangalam University with strong academic focus on design and development", metric: "CSE", label: "B.Tech", color: "from-blue-500 to-teal-600" },
  ];

  return (
    <section ref={achievementsRef} id="certifications" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-white dark:bg-[#050508]">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/20 to-white dark:from-[#050508] dark:to-[#050508]" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-300/10 to-blue-300/10 dark:from-cyan-500/8 dark:to-blue-500/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-300/10 to-teal-300/10 dark:from-blue-500/8 dark:to-teal-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-40 left-32 animate-sparkle hidden sm:block"><Sparkles className="text-cyan-400 opacity-40" size={20} /></div>
      <div className="absolute bottom-40 right-1/4 animate-sparkle-delayed hidden sm:block"><Sparkles className="text-blue-400 opacity-40" size={22} /></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
            <span className="text-gray-800 dark:text-white">Certifications &</span>
            <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent"> Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className={`group relative bg-white/95 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 overflow-hidden border border-cyan-200/30 dark:border-cyan-700/30 hover:border-cyan-400/50 ${animatedCards.has(index) ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${index * 150}ms` }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />
              <div className={`bg-gradient-to-br ${achievement.color} w-14 h-14 rounded-full flex items-center justify-center mx-auto mt-8 mb-5 group-hover:scale-110 relative z-10 shadow-lg transition-all duration-500`}>
                <achievement.icon className="text-white drop-shadow-sm" size={28} />
              </div>
              <div className="px-6 pb-8 text-center relative z-10">
                <div className="mb-3">
                  <div className={`text-xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300`}>{achievement.metric}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{achievement.label}</div>
                </div>
                <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
      <style>{`.animate-fadeInUp{animation:fadeInUp .8s ease-out forwards}@keyframes fadeInUp{0%{opacity:0;transform:translateY(30px)}100%{opacity:1;transform:translateY(0)}}`}</style>
    </section>
  );
};

export default Achievements;
